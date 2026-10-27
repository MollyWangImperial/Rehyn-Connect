import { createServer, type Server } from "http";
import { AddressInfo } from "net";
import express from "express";
import { afterEach, describe, expect, it, vi } from "vitest";
import { createMeetRouter } from "../../../server/meet";
import { createUrgentAlertRouter, urgentAlertText } from "../../../server/urgent-alert";

let server: Server | null = null;
afterEach(() => { server?.close(); server = null; vi.restoreAllMocks(); });

async function start(app: express.Express) {
  server = createServer(app);
  await new Promise<void>(resolve => server!.listen(0, "127.0.0.1", resolve));
  return `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
}

describe("the urgent-request alert", () => {
  it("says only the reference, and goes to Slack only when a webhook is set", async () => {
    expect(urgentAlertText("AB12CD")).toContain("AB12CD");
    const slack: string[] = [];
    const realFetch = globalThis.fetch;
    const app = express();
    app.use("/none", createUrgentAlertRouter(() => undefined));
    app.use("/slack", createUrgentAlertRouter(() => "https://hooks.slack.test/abc"));
    const base = await start(app);
    vi.spyOn(globalThis, "fetch").mockImplementation(async (input, init) => {
      if (String(input).startsWith("https://hooks.slack.test")) { slack.push(String(init?.body)); return new Response("ok"); }
      return realFetch(input, init);
    });
    vi.spyOn(console, "log").mockImplementation(() => undefined);
    const post = (path: string, body: unknown) => realFetch(`${base}${path}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    expect(await (await post("/none", { ref: "AB12CD" })).json()).toEqual({ ok: true, slack: false });
    expect((await post("/none", { ref: "not a ref" })).status).toBe(400);
    expect(await (await post("/slack", { ref: "AB12CD" })).json()).toEqual({ ok: true, slack: true });
    expect(slack).toHaveLength(1);
    expect(JSON.parse(slack[0]).text).toContain("AB12CD");
  });
});

describe("the meeting room's signalling", () => {
  it("introduces the browsers in a room and passes messages between them only", async () => {
    const app = express();
    app.use("/api/meet", createMeetRouter());
    const base = await start(app);
    const listen = async (peer: string) => {
      const controller = new AbortController();
      const response = await fetch(`${base}/api/meet/room-test/events?peer=${peer}`, { signal: controller.signal });
      const reader = response.body!.getReader();
      let buffer = "";
      const next = async (event: string) => {
        for (;;) {
          const at = buffer.indexOf(`event: ${event}\n`);
          if (at >= 0) {
            const end = buffer.indexOf("\n\n", at);
            if (end >= 0) { const data = buffer.slice(at, end).split("\ndata: ")[1]; buffer = buffer.slice(end + 2); return JSON.parse(data); }
          }
          const { value, done } = await reader.read();
          if (done) throw new Error("closed");
          buffer += new TextDecoder().decode(value);
        }
      };
      return { next, close: () => controller.abort() };
    };
    const first = await listen("aaaaaaaa1");
    expect(await first.next("peers")).toEqual({ peers: [] });
    const second = await listen("bbbbbbbb2");
    expect(await second.next("peers")).toEqual({ peers: ["aaaaaaaa1"] });
    expect(await first.next("join")).toEqual({ peer: "bbbbbbbb2" });
    const sent = await fetch(`${base}/api/meet/room-test/signal`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ from: "bbbbbbbb2", to: "aaaaaaaa1", data: { hello: 1 } }) });
    expect(sent.status).toBe(200);
    expect(await first.next("signal")).toEqual({ from: "bbbbbbbb2", data: { hello: 1 } });
    // Someone not in the room can't send.
    const stranger = await fetch(`${base}/api/meet/room-test/signal`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ from: "cccccccc3", to: "aaaaaaaa1", data: {} }) });
    expect(stranger.status).toBe(404);
    expect((await fetch(`${base}/api/meet/BAD/events?peer=aaaaaaaa1`)).status).toBe(400);
    second.close();
    expect(await first.next("leave")).toEqual({ peer: "bbbbbbbb2" });
    first.close();
  });
});
