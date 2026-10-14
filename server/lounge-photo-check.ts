import Anthropic from "@anthropic-ai/sdk";
import express from "express";
import {
  isCheckablePhoto,
  PHOTO_CATEGORIES,
  PHOTO_CHECK_TIMEOUT_MS,
  PHOTO_SCORES_SCHEMA,
  readPhotoScores,
  riskFromScores,
  type PhotoScores,
} from "../client/src/lib/lounge-moderation-rules";
import { readAgentConfig, type AgentConfig } from "./anthropic-config";

/** The model that scores photos. */
export const PHOTO_CHECK_MODEL = "claude-sonnet-5-5";

// The lounge's automatic photo check. The browser sends a photo it has already shrunk (a small
// JPEG); this asks Claude to score it for the house rules'
// categories, and answers with one risk score and the labels that stood out. The photo is not kept
// here or anywhere else. Any failure is an error reply, and the browser then holds the photo for a
// person: the check never lets a photo through by failing.

export type SendPhoto = (params: Anthropic.MessageCreateParamsNonStreaming, config: AgentConfig, signal: AbortSignal) => Promise<Pick<Anthropic.Message, "content" | "stop_reason">>;

const INSTRUCTIONS = `You check photos before they appear in the lounge of a peer-support community for people recovering from or living with health conditions such as stroke, Parkinson's or MS. Most members are older adults sharing everyday moments.
Score how strongly the photo shows each category, from 0 (not at all) to 1 (clearly):
${PHOTO_CATEGORIES.map(category => `- ${category.id}: ${category.label}`).join("\n")}
Score only what is visible. A home, a garden, a pet, food without alcohol or an ordinary landscape scores near 0 everywhere. Answer with the scores only.`;

export function photoCheckRequest(image: string): Anthropic.MessageCreateParamsNonStreaming {
  return {
    model: PHOTO_CHECK_MODEL,
    max_tokens: 1024,
    // Thinking stays off between tool calls (there are none), so the scores come back quickly.
    thinking: { type: "between_tools" },
    output_config: { effort: "low", format: { type: "json_schema", schema: PHOTO_SCORES_SCHEMA } },
    system: INSTRUCTIONS,
    messages: [{
      role: "user",
      content: [
        { type: "image", source: { type: "base64", media_type: "image/jpeg", data: image.slice(image.indexOf(",") + 1) } },
        { type: "text", text: "Score this photo." },
      ],
    }],
  };
}

let sharedClient: { apiKey: string; client: Anthropic } | null = null;
const sendToClaude: SendPhoto = (params, config, signal) => {
  if (sharedClient?.apiKey !== config.apiKey) sharedClient = { apiKey: config.apiKey, client: new Anthropic({ apiKey: config.apiKey, maxRetries: 0, timeout: PHOTO_CHECK_TIMEOUT_MS }) };
  return sharedClient.client.messages.create(params, { signal });
};

/** The scores in Claude's reply, or null (a refusal, a cut-off answer, or anything unreadable). */
export function scoresFromReply(reply: Pick<Anthropic.Message, "content" | "stop_reason">): PhotoScores | null {
  if (reply.stop_reason !== "end_turn") return null;
  const text = reply.content.find((block): block is Anthropic.TextBlock => block.type === "text")?.text;
  if (!text) return null;
  try { return readPhotoScores(JSON.parse(text)); } catch { return null; }
}

export function createLoungePhotoCheckRouter({ root, getConfig = () => readAgentConfig(root), send = sendToClaude }: { root: string; getConfig?: () => AgentConfig; send?: SendPhoto }) {
  const router = express();
  const attempts = new Map<string, { count: number; resetAt: number }>();
  let pending = 0;
  const fail = (res: express.Response, status: number, code: string) => res.status(status).json({ code });

  router.post("/", express.json({ limit: "700kb" }), async (req, res) => {
    res.set("Cache-Control", "no-store");
    const upstream = new AbortController();
    res.on("close", () => { if (!res.writableEnded) upstream.abort(); });
    const origin = req.get("origin");
    try {
      if (origin && new URL(origin).host !== req.get("host")) return fail(res, 403, "ORIGIN_NOT_ALLOWED");
    } catch { return fail(res, 403, "ORIGIN_NOT_ALLOWED"); }
    const config = getConfig();
    if (!config.apiKey) return fail(res, 503, "CHECK_NOT_CONFIGURED");
    const image = req.body?.image;
    if (!isCheckablePhoto(image)) return fail(res, 400, "INVALID_PHOTO");

    const now = Date.now();
    attempts.forEach((entry, ip) => { if (entry.resetAt <= now) attempts.delete(ip); });
    const ip = req.ip ?? req.socket.remoteAddress ?? "local";
    const rate = attempts.get(ip) ?? { count: 0, resetAt: now + 60000 };
    if (rate.count >= 20 || pending >= 6 || attempts.size >= 1000) return fail(res, 429, "CHECK_BUSY");
    rate.count += 1;
    attempts.set(ip, rate);

    const timer = setTimeout(() => upstream.abort(), PHOTO_CHECK_TIMEOUT_MS);
    pending += 1;
    try {
      const scores = scoresFromReply(await send(photoCheckRequest(image), config, upstream.signal));
      if (!scores) return fail(res, 502, "CHECK_UNREADABLE");
      res.json(riskFromScores(scores));
    } catch (error) {
      if (res.writableEnded || res.destroyed) return;
      const code = error instanceof Anthropic.RateLimitError ? "CHECK_BUSY" : error instanceof Anthropic.APIConnectionTimeoutError || upstream.signal.aborted ? "CHECK_TIMEOUT" : "CHECK_FAILED";
      console.warn(`Lounge photo check failed: ${code}`);
      fail(res, code === "CHECK_BUSY" ? 429 : 503, code);
    } finally {
      clearTimeout(timer);
      pending -= 1;
    }
  });
  const errors: express.ErrorRequestHandler = (_error, _req, res, _next) => { res.status(400).json({ code: "INVALID_REQUEST" }); };
  router.use(errors);
  return router;
}
