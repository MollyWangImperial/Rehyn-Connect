import express from "express";

// The meeting room's signalling (client/src/components/clinicians/MeetingRoom.tsx): browsers in the same room find each
// other here and swap the few messages they need to connect, then the video and the transcript go browser to browser.
// Nothing is stored: a room lives in memory only while someone is in it. Each browser listens on
// GET /api/meet/:room/events (server-sent events) and sends on POST /api/meet/:room/signal.

type Member = { res: express.Response };

const ROOM = /^[a-z0-9-]{6,64}$/;
const PEER = /^[a-z0-9]{8,32}$/;
/** A consultation is two people; a group session a handful. Browser-to-browser video doesn't go much further. */
const MAX_IN_ROOM = 8;
const MAX_ROOMS = 300;

const sameOrigin = (req: express.Request) => {
  const origin = req.get("origin");
  if (!origin) return true;
  try { return new URL(origin).host === req.get("host"); } catch { return false; }
};

const send = (res: express.Response, event: string, data: unknown) => { res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`); };

export function createMeetRouter() {
  const app = express();
  const rooms = new Map<string, Map<string, Member>>();

  app.get("/:room/events", (req, res) => {
    const room = req.params.room;
    const peer = String(req.query.peer ?? "");
    if (!ROOM.test(room) || !PEER.test(peer)) { res.status(400).end(); return; }
    let members = rooms.get(room);
    if (!members) {
      if (rooms.size >= MAX_ROOMS) { res.status(503).end(); return; }
      members = new Map();
      rooms.set(room, members);
    }
    if (members.size >= MAX_IN_ROOM && !members.has(peer)) { res.status(409).end(); return; }
    res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-store", Connection: "keep-alive", "X-Accel-Buffering": "no" });
    send(res, "peers", { peers: Array.from(members.keys()).filter(id => id !== peer) });
    members.forEach((member, id) => { if (id !== peer) send(member.res, "join", { peer }); });
    const me = { res };
    members.set(peer, me);
    const ping = setInterval(() => res.write(": ping\n\n"), 25_000);
    req.on("close", () => {
      clearInterval(ping);
      const here = rooms.get(room);
      if (!here || here.get(peer) !== me) return;
      here.delete(peer);
      here.forEach(member => send(member.res, "leave", { peer }));
      if (!here.size) rooms.delete(room);
    });
  });

  app.post("/:room/signal", express.json({ limit: "64kb" }), (req, res) => {
    res.set("Cache-Control", "no-store");
    if (!sameOrigin(req)) { res.status(403).json({ ok: false }); return; }
    const members = rooms.get(req.params.room);
    const { from, to, data } = req.body ?? {};
    if (!members || typeof from !== "string" || typeof to !== "string" || !members.has(from) || !data) { res.status(404).json({ ok: false }); return; }
    const target = members.get(to);
    if (!target) { res.status(404).json({ ok: false }); return; }
    send(target.res, "signal", { from, data });
    res.json({ ok: true });
  });

  return app;
}
