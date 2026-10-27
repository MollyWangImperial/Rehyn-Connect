import express from "express";

// When an urgent consultation request has had no clinician answer in five minutes (client/src/lib/consultations.ts),
// the patient's browser asks the server to tell the Rehyn team. The message goes to Slack through an incoming webhook
// when SLACK_WEBHOOK_URL is set (Render: the service's Environment tab), and to the server log either way, tagged
// [rehyn-urgent]. It holds the request's reference only: no name, question or health details.

const sameOrigin = (req: express.Request) => {
  const origin = req.get("origin");
  if (!origin) return true;
  try { return new URL(origin).host === req.get("host"); } catch { return false; }
};

function rateLimiter(perMinute: number) {
  const seen = new Map<string, { count: number; resetAt: number }>();
  return (req: express.Request) => {
    const now = Date.now();
    seen.forEach((entry, ip) => { if (entry.resetAt <= now) seen.delete(ip); });
    const ip = req.ip ?? req.socket.remoteAddress ?? "local";
    const entry = seen.get(ip) ?? { count: 0, resetAt: now + 60_000 };
    entry.count += 1;
    seen.set(ip, entry);
    return entry.count <= perMinute && seen.size < 1000;
  };
}

export const urgentAlertText = (ref: string) =>
  `:rotating_light: Urgent consultation request ${ref} has had no clinician answer in 5 minutes on Rehyn: Connect. (Clinicians preview: the patient's details stay on their device.)`;

export function createUrgentAlertRouter(webhook = () => process.env.SLACK_WEBHOOK_URL) {
  const app = express();
  const allow = rateLimiter(3);
  app.post("/", express.json({ limit: "2kb" }), async (req, res) => {
    res.set("Cache-Control", "no-store");
    if (!sameOrigin(req)) { res.status(403).json({ ok: false }); return; }
    const ref = req.body?.ref;
    if (typeof ref !== "string" || !/^[A-Z0-9]{6}$/.test(ref)) { res.status(400).json({ ok: false }); return; }
    if (!allow(req)) { res.status(429).json({ ok: false }); return; }
    console.log(`[rehyn-urgent] ${JSON.stringify({ at: new Date().toISOString(), ref })}`);
    const url = webhook();
    if (!url) { res.json({ ok: true, slack: false }); return; }
    try {
      const sent = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: urgentAlertText(ref) }) });
      res.json({ ok: true, slack: sent.ok });
    } catch {
      res.json({ ok: true, slack: false });
    }
  });
  return app;
}
