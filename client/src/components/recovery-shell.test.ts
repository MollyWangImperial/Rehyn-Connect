import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { Route, Router } from "wouter";
import { SettingsContext } from "@/components/settings-context";
import RecoveryShell from "./RecoveryShell";

// The sidebar is drawn inside nested routes too (the Library lives under /library). Its links must
// still lead to the real pages: on the live site, My community opened /library/community.

const held = vi.hoisted(() => ({ seen: [] as { type: unknown; props: Record<string, unknown> }[] }));
vi.mock("react/jsx-dev-runtime", async importOriginal => {
  const actual = await importOriginal<Record<string, unknown>>();
  const jsxDEV = actual.jsxDEV as (type: unknown, props: Record<string, unknown>, ...rest: unknown[]) => unknown;
  return { ...actual, jsxDEV: (type: unknown, props: Record<string, unknown>, ...rest: unknown[]) => { held.seen.push({ type, props }); return jsxDEV(type, props, ...rest); } };
});
vi.mock("react/jsx-runtime", async importOriginal => {
  const actual = await importOriginal<Record<string, unknown>>();
  const wrap = (make: unknown) => (type: unknown, props: Record<string, unknown>, ...rest: unknown[]) => { held.seen.push({ type, props }); return (make as (...args: unknown[]) => unknown)(type, props, ...rest); };
  return { ...actual, jsx: wrap(actual.jsx), jsxs: wrap(actual.jsxs) };
});

const words = (node: unknown): string => {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(words).join("");
  if (node && typeof node === "object" && "props" in node) return words((node as { props: { children?: unknown } }).props.children);
  return "";
};

/** Draws the shell at an address, inside the Library's nested route, and clicks a sidebar item. */
function clickSidebar(path: string, label: string) {
  // The router's own location hook is handed the absolute address, after any nested base.
  const visited: string[] = [];
  const hook = () => [path, (to: string) => { visited.push(to); }] as [string, (to: string) => void];
  held.seen = [];
  const shell = createElement(RecoveryShell, { active: "Library", children: createElement("p", null, "A Library page") });
  renderToStaticMarkup(createElement(SettingsContext.Provider, { value: () => {} },
    createElement(Router, { hook, searchHook: () => "" }, createElement(Route, { path: "/library", nest: true }, shell))));
  const button = held.seen.find(item => item.type === "button" && String(item.props.className ?? "").includes("recovery-nav-link") && words(item.props.children).includes(label));
  expect(button, label).toBeTruthy();
  (button!.props.onClick as () => void)();
  return visited.at(-1);
}

describe("the sidebar inside the Library", () => {
  it.each([["Home", "/"], ["Library", "/library"], ["My community", "/community"], ["Care team", "/care-team"]])("%s leads to %s", (label, to) => {
    expect(clickSidebar("/library/stroke/ischaemic", label)).toBe(to);
    expect(clickSidebar("/library", label)).toBe(to);
  });

  it("no longer offers My Time, Journey or Alira", () => {
    clickSidebar("/library", "Home");
    const labels = held.seen.filter(item => item.type === "button" && String(item.props.className ?? "").includes("recovery-nav-link")).map(item => words(item.props.children));
    // Care team carries the count of what is waiting for review ("Care team4").
    expect(labels.map(label => label.replace(/\d+$/, ""))).toEqual(["Home", "Library", "My community", "Care team"]);
  });
});
