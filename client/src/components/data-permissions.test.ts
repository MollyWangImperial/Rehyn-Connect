import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Router } from "wouter";
import { DATA_SCREEN } from "@/content/data-permissions";
import DataPermissions from "./DataPermissions";

const words = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const render = () => renderToStaticMarkup(createElement(Router, { ssrPath: "/community" }, createElement(DataPermissions, { onOpenDocument: () => {}, onClose: () => {} })));

describe("the Data and permissions screen (version 2.0)", () => {
  it("shows every section of the spec in order, with its wording", () => {
    const text = words(render());
    const headings = [DATA_SCREEN.health.heading, DATA_SCREEN.privacy.heading, DATA_SCREEN.notifications.heading, DATA_SCREEN.device.heading, DATA_SCREEN.safety.heading, DATA_SCREEN.yourData.heading, DATA_SCREEN.documents.heading];
    let last = -1;
    for (const heading of headings) { const at = text.indexOf(heading); expect(at, heading).toBeGreaterThan(last); last = at; }
    for (const line of [DATA_SCREEN.health.label, DATA_SCREEN.health.text, DATA_SCREEN.health.off, DATA_SCREEN.privacy.posts.label, DATA_SCREEN.privacy.messages.label, DATA_SCREEN.privacy.suggest.label, DATA_SCREEN.privacy.online.label, DATA_SCREEN.privacy.blocked.label, DATA_SCREEN.notifications.activity.label, DATA_SCREEN.notifications.updates.label, DATA_SCREEN.device.camera.label, DATA_SCREEN.safety.help.text, DATA_SCREEN.yourData.download.label, DATA_SCREEN.yourData.correct.label, DATA_SCREEN.yourData.delete.label, DATA_SCREEN.documents.contact, DATA_SCREEN.documents.complaint]) {
      expect(text).toContain(words(line));
    }
    // No analytics exists, so the "Improving the app" toggle is not offered.
    expect(text).not.toContain(DATA_SCREEN.improving.usage.label);
  });

  it("uses real switches with the state readable, and every optional one starts off", () => {
    const html = render();
    const switches = [...html.matchAll(/role="switch"[^>]*aria-checked="(true|false)"[^>]*aria-label="([^"]+)"/g)].map(match => [match[2], match[1]]);
    expect(switches.map(([label]) => label)).toEqual([DATA_SCREEN.health.label, DATA_SCREEN.privacy.suggest.label, DATA_SCREEN.privacy.online.label, DATA_SCREEN.notifications.activity.label, DATA_SCREEN.notifications.updates.label]);
    expect(Object.fromEntries(switches)[DATA_SCREEN.privacy.suggest.label]).toBe("false");
    expect(Object.fromEntries(switches)[DATA_SCREEN.notifications.updates.label]).toBe("false");
    expect(Object.fromEntries(switches)[DATA_SCREEN.health.label]).toBe("false");
  });
});
