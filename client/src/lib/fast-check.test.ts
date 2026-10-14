import { describe, expect, it } from "vitest";
import { fastCheckPath, fastCheckReturnPath } from "./fast-check";

describe("FAST check navigation", () => {
  it.each(["/", "/my-time", "/library", "/community?space=safety", "/community?space=lounge&panel=friends&tab=sent", "/care-team"])("returns to %s", path => {
    const target = fastCheckPath(path);
    expect(target.startsWith("/fast-check?")).toBe(true);
    expect(fastCheckReturnPath(target.split("?")[1])).toBe(path);
  });

  it("keeps the current page query", () => {
    const target = fastCheckPath("/community", "space=groups&cond=stroke");
    expect(fastCheckReturnPath(target.split("?")[1])).toBe("/community?space=groups&cond=stroke");
  });

  it.each(["https://example.com", "//example.com", "/\\example.com", "/fast-check", "/unknown", "/alira", "javascript:alert(1)"])("does not redirect to %s", value => {
    expect(fastCheckReturnPath(new URLSearchParams({ returnTo: value }).toString())).toBe("/");
  });

  it("goes home without a return address", () => {
    expect(fastCheckReturnPath("")).toBe("/");
  });
});
