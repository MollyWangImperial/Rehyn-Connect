import { classifyScore, isCheckablePhoto, PHOTO_CHECK_TIMEOUT_MS, type UnsureBand } from "./lounge-moderation-rules";
import type { PhotoCheck } from "./lounge-moderation";

// The lounge's automatic photo check, from the browser. The photo (already shrunk on this device to
// a small JPEG) goes to /api/lounge/photo-check, which asks a vision model for scores. Whenever the
// check can't answer (no connection, no API key, an error, or 8 seconds without a reply) the photo
// is held for a person on the care team: a failed check never lets a photo straight through.

export const PHOTO_CHECK_URL = "/api/lounge/photo-check";

/** What a held photo says when the check itself couldn't run. */
export const FALLBACK_CHECK: PhotoCheck = { verdict: "unsure", score: null, labels: ["The automatic check couldn't run"], source: "fallback" };

/** The check's reply, or null when it isn't one. */
export function readCheckReply(value: unknown, band: UnsureBand): PhotoCheck | null {
  if (typeof value !== "object" || value === null) return null;
  const reply = value as { risk?: unknown; labels?: unknown };
  if (typeof reply.risk !== "number" || !Number.isFinite(reply.risk) || reply.risk < 0 || reply.risk > 1) return null;
  const labels = Array.isArray(reply.labels) ? reply.labels.filter((label): label is string => typeof label === "string" && label.length <= 80).slice(0, 8) : [];
  return { verdict: classifyScore(reply.risk, band), score: reply.risk, labels, source: "model" };
}

export async function checkLoungePhoto(photo: string, band: UnsureBand, options: { signal?: AbortSignal; fetcher?: typeof fetch; timeoutMs?: number } = {}): Promise<PhotoCheck> {
  if (!isCheckablePhoto(photo)) return FALLBACK_CHECK;
  const timeout = new AbortController();
  const timer = setTimeout(() => timeout.abort(), options.timeoutMs ?? PHOTO_CHECK_TIMEOUT_MS);
  const stop = () => timeout.abort();
  options.signal?.addEventListener("abort", stop);
  try {
    const response = await (options.fetcher ?? fetch)(PHOTO_CHECK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: photo }),
      signal: timeout.signal,
    });
    if (!response.ok) return FALLBACK_CHECK;
    return readCheckReply(await response.json(), band) ?? FALLBACK_CHECK;
  } catch {
    return FALLBACK_CHECK;
  } finally {
    clearTimeout(timer);
    options.signal?.removeEventListener("abort", stop);
  }
}
