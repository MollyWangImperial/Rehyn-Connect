import { afterEach, describe, expect, it, vi } from "vitest";
import { tmpdir } from "node:os";
import type { Server } from "node:http";
import { createLoungePhotoCheckRouter, photoCheckRequest, PHOTO_CHECK_MODEL, scoresFromReply, type SendPhoto } from "../../../server/lounge-photo-check";

const config = { apiKey: "test-secret-do-not-expose" };
const photo = "data:image/jpeg;base64,/9j/AAAA";
const scores = { sexual: 0.01, hate: 0, violence: 0, drugs: 0, medical: 0.8, alcohol: 0, people: 0.1, text: 0 };
const servers: Server[] = [];

async function fixture(send: SendPhoto, settings = config) {
  const app = createLoungePhotoCheckRouter({ root: tmpdir(), getConfig: () => settings, send });
  const server = await new Promise<Server>(resolve => { const listening = app.listen(0, "127.0.0.1", () => resolve(listening)); });
  servers.push(server);
  const url = `http://127.0.0.1:${(server.address() as { port: number }).port}`;
  return (body: unknown = { image: photo }, origin?: string) => fetch(url, { method: "POST", headers: { "Content-Type": "application/json", ...(origin ? { Origin: origin } : {}) }, body: JSON.stringify(body) });
}
const answer = (text: string, stop_reason: "end_turn" | "refusal" = "end_turn") => vi.fn(async () => ({ content: [{ type: "text", text, citations: null }], stop_reason }) as never);

afterEach(async () => {
  for (const server of servers.splice(0)) await new Promise<void>(resolve => server.close(() => resolve()));
});

describe("the lounge's photo check on the server", () => {
  it("asks Alira's model for strict JSON scores of the photo, quickly", () => {
    const request = photoCheckRequest(photo);
    expect(request.model).toBe(PHOTO_CHECK_MODEL);
    expect(request.output_config?.format?.type).toBe("json_schema");
    expect(request.thinking).toEqual({ type: "between_tools" });
    const content = request.messages[0].content as { type: string; source?: { data: string; media_type: string } }[];
    expect(content[0].source).toEqual({ type: "base64", media_type: "image/jpeg", data: "/9j/AAAA" });
  });

  it("answers with one risk score and the labels that stood out", async () => {
    const post = await fixture(answer(JSON.stringify(scores)));
    const response = await post();
    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.labels).toEqual(["Medical imagery, wounds, skin"]);
    expect(body.risk).toBeGreaterThanOrEqual(0.35);
    expect(body.risk).toBeLessThan(0.7);
  });

  it("fails instead of passing a photo when there is no key, a refusal or an unreadable answer", async () => {
    expect((await (await fixture(answer("{}"), { apiKey: "" }))()).status).toBe(503);
    expect((await (await fixture(answer(JSON.stringify(scores), "refusal")))()).status).toBe(502);
    expect((await (await fixture(answer("not json")))()).status).toBe(502);
    expect((await (await fixture(vi.fn(async () => { throw new Error("down"); })))()).status).toBe(503);
    expect(scoresFromReply({ content: [], stop_reason: "max_tokens" })).toBeNull();
  });

  it("turns away other sites, and anything that isn't a small JPEG", async () => {
    const send = answer(JSON.stringify(scores));
    const post = await fixture(send);
    expect((await post(undefined, "https://example.com")).status).toBe(403);
    expect((await post({ image: "data:image/png;base64,AAAA" })).status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });
});
