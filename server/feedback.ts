import express from "express";

const sameOrigin = (req: express.Request) => {
  const origin = req.get("origin");
  if (!origin) return true;
  try { return new URL(origin).host === req.get("host"); } catch { return false; }
};

/** A few messages a minute from one visitor, so the log can't be flooded. */
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
 * Feedback from the Library's Feedback button (`/api/feedback`). There is no inbox or database yet,
 * so each message is written to the server log as one JSON line, tagged `[rehyn-feedback]`, where the
 * team reads it (Render: the service's Logs). Only the message and the page it came from are kept:
 * no name, account or address.
 */
export function createFeedbackRouter() {
  const app = express();
  const allow = rateLimiter(5);
  app.post("/", express.json({ limit: "8kb" }), (req, res) => {
    res.set("Cache-Control", "no-store");
    if (!sameOrigin(req)) { res.status(403).json({ code: "ORIGIN_NOT_ALLOWED", error: "This feedback can't be sent from here." }); return; }
    const message = req.body?.message;
    const page = req.body?.page;
    if (typeof message !== "string" || !message.trim() || message.length > 2000) { res.status(400).json({ code: "INVALID_MESSAGE", error: "Please write a message of up to 2,000 characters." }); return; }
    if (!allow(req)) { res.status(429).json({ code: "TOO_MANY", error: "Thanks, we've had a few messages from you just now. Please try again in a minute." }); return; }
    const where = typeof page === "string" ? page.slice(0, 200) : "";
    console.log(`[rehyn-feedback] ${JSON.stringify({ at: new Date().toISOString(), page: where, message: message.trim() })}`);
    res.json({ ok: true });
  });
  return app;
}
