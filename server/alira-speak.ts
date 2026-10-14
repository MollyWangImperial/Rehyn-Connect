import express from "express";

type SpeakAlira = (text: string) => Promise<{ audio: Buffer; source: "pack" | "cache" | "live" }>;

const sameOrigin = (req: express.Request) => {
  const origin = req.get("origin");
  if (!origin) return true;
  try { return new URL(origin).host === req.get("host"); } catch { return false; }
};

/** Limits how often one visitor can ask for speech; recorded lines are cheap, live ones cost credits. */
function rateLimiter(perMinute: number) {
  const seen = new Map<string, { count: number; resetAt: number }>();
  return (req: express.Request) => {
    const now = Date.now();
    seen.forEach((entry, ip) => { if (entry.resetAt <= now) seen.delete(ip); });
    const ip = req.ip ?? req.socket.remoteAddress ?? "local";
    const entry = seen.get(ip) ?? { count: 0, resetAt: now + 60000 };
    entry.count += 1;
    seen.set(ip, entry);
    return entry.count <= perMinute && seen.size < 1000;
  };
}

/**
 * Read aloud in Alira's voice (`/api/alira/speak`): Library and My Time articles and stories. Only text
 * the site wrote reaches it, never a member's own words. The page falls back to the device's voice.
 */
export function createAliraSpeakRouter(speakAlira: SpeakAlira) {
  const app = express();
  const allow = rateLimiter(30);
  app.post("/", express.json({ limit: "8kb" }), async (req, res) => {
    res.set("Cache-Control", "no-store");
    if (!sameOrigin(req)) { res.status(403).json({ code: "ORIGIN_NOT_ALLOWED", error: "This voice request isn't allowed." }); return; }
    const text = req.body?.text;
    if (typeof text !== "string" || !text.trim() || text.length > 1500) { res.status(400).json({ code: "INVALID_TEXT", error: "This message can't be read aloud." }); return; }
    if (!allow(req)) { res.status(429).json({ code: "VOICE_BUSY", error: "Alira's voice is busy. Please try again in a moment." }); return; }
    try {
      const { audio, source } = await speakAlira(text.trim());
      res.set({ "Content-Type": "audio/mpeg", "X-Alira-Voice-Provider": "elevenlabs", "X-Alira-Voice-Source": source }).send(audio);
    } catch {
      res.status(503).json({ code: "VOICE_UNAVAILABLE", error: "Alira's voice can't read this message right now." });
    }
  });
  return app;
}
