import { useState, type ReactNode } from "react";
import { members } from "@/content/community-samples";
import { firstName } from "@/lib/community-store";
import { authorNameOf, moderationStore, photoOf, type LoungeAuthor, type LoungePost, type ModerationSettings } from "@/lib/lounge-moderation";
import { PHOTO_CATEGORIES } from "@/lib/lounge-moderation-rules";
import { otherAuthors } from "@/lib/lounge-moderation-samples";
import { profileName, useProfile } from "@/lib/profile";

// Small pieces the care team's page shares between its sections.

/** The person using the app is "Zak" (their own first name) on the care team's page, not "You". */
export function useYourName(): string {
  return firstName(profileName(useProfile()));
}

/** "{you}" in a log line becomes the person's name. */
export const withYourName = (text: string, yourName: string) => text.split("{you}").join(yourName);

export function nameOf(author: LoungeAuthor, yourName: string): string {
  return authorNameOf(author, yourName);
}

/** An author's initial on their colour. Decorative: the name is always written beside it. */
export function AuthorBadge({ author, yourName, size = 28 }: { author: LoungeAuthor; yourName: string; size?: number }) {
  let look = { initial: yourName.slice(0, 1).toUpperCase(), tint: "#183D34", ink: "#FFFEFA" };
  if (author === "rob" || author === "kev") look = otherAuthors[author];
  else if (author !== "you") {
    const member = members[author];
    look = { initial: member.initial, tint: member.tint, ink: member.ink };
  }
  return <span className="ct-badge" style={{ width: size, height: size, fontSize: Math.round(size * 0.43), background: look.tint, color: look.ink }} aria-hidden="true">{look.initial}</span>;
}

/** How long ago, in the care team's short words: "38 min", "2 h", "3 days". */
export function waited(since: number, now = Date.now()): string {
  const minutes = Math.max(0, Math.round((now - since) / 60000));
  if (minutes < 1) return "under a minute";
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} h`;
  const days = Math.round(hours / 24);
  return `${days} day${days === 1 ? "" : "s"}`;
}
export const ago = (since: number, now = Date.now()) => (now - since < 60000 ? "just now" : `${waited(since, now)} ago`);

export function HeldPhoto({ post, width = 180 }: { post: LoungePost; width?: number }) {
  const photo = photoOf(post);
  if (!photo) return <span className="ct-photo ct-photo-gone" style={{ width, height: Math.round(width * 0.75) }}>Photo no longer kept</span>;
  return <img className="ct-photo" src={photo.src} alt={`Held photo: ${photo.alt.toLowerCase()}`} style={{ width, height: Math.round(width * 0.75) }} />;
}

export function Chips({ items, tone = "plain" }: { items: string[]; tone?: "plain" | "rust" }) {
  if (!items.length) return null;
  return <ul className="ct-chips">{items.map(item => <li key={item} className={`ct-chip ct-chip-${tone}`}>{item}</li>)}</ul>;
}

/** "2 of 3 reports" as a row of bars. */
export function ReportBars({ count, threshold }: { count: number; threshold: number }) {
  return (
    <span className="ct-bars" aria-hidden="true">
      {Array.from({ length: threshold }, (_, index) => <i key={index} className={index < count ? "is-on" : ""} />)}
    </span>
  );
}

/** Writing a message to a member, inline under a queue item. */
export function MessageBox({ author, yourName, onDone }: { author: LoungeAuthor; yourName: string; onDone: (sent: boolean) => void }) {
  const [text, setText] = useState("");
  const name = nameOf(author, yourName);
  return (
    <form className="ct-message" onSubmit={event => { event.preventDefault(); if (!text.trim()) return; moderationStore.message(author, text); onDone(true); }}>
      <label>
        <span>{`Message to ${name}`}</span>
        <textarea value={text} rows={2} maxLength={400} autoFocus placeholder="A few kind words about the house rules, or a question" onChange={event => setText(event.target.value)} />
      </label>
      <p className="ct-hint">{author === "you" ? `${name} will see this privately in the lounge.` : "In this preview, messages to example members are noted in the activity log."}</p>
      <div className="ct-actions">
        <button type="submit" className="ct-btn ct-btn-dark" aria-disabled={!text.trim() || undefined}>Send</button>
        <button type="button" className="ct-btn ct-btn-plain" onClick={() => onDone(false)}>Cancel</button>
      </div>
    </form>
  );
}

/** The removal threshold and the three switches, which change the lounge straight away. */
export function RulesForm({ settings, title = "Rules", headingLevel = 2 }: { settings: ModerationSettings; title?: string; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const toggle = (key: "hideForReporter" | "tellAuthor" | "emailCareTeam", label: string) => (
    <label className="ct-check"><input type="checkbox" checked={settings[key]} onChange={event => moderationStore.updateSettings({ [key]: event.target.checked })} /><span>{label}</span></label>
  );
  return (
    <section className="ct-card ct-rail-card" aria-label={title}>
      <Heading className="ct-card-title">{title}</Heading>
      <label className="ct-threshold">
        <span>Remove a post automatically after</span>
        <input type="number" min={1} max={10} value={settings.threshold} onChange={event => { const value = Number(event.target.value); if (Number.isInteger(value) && value >= 1 && value <= 10) moderationStore.updateSettings({ threshold: value }); }} />
      </label>
      <p className="ct-hint ct-threshold-hint">reports from different members. A change applies to new reports.</p>
      {toggle("hideForReporter", "Hide a post for the member who reported it")}
      {toggle("tellAuthor", "Tell the author when a post is removed")}
      {toggle("emailCareTeam", "Email the care team on every held photo")}
    </section>
  );
}

/** What the automatic check blocks, and what it sends to a person. */
export function CheckExplainer({ settings }: { settings: ModerationSettings }) {
  return (
    <section className="ct-card ct-rail-card" aria-label="What the check does">
      <h2 className="ct-card-title">What the check does</h2>
      <p className="ct-overline ct-overline-rust">Blocks outright</p>
      <ul className="ct-list">{PHOTO_CATEGORIES.filter(category => category.blocks).map(category => <li key={category.id}>{category.label}</li>)}</ul>
      <p className="ct-overline ct-overline-amber">Sends here when unsure</p>
      <ul className="ct-list">{PHOTO_CATEGORIES.filter(category => !category.blocks).map(category => <li key={category.id}>{category.label}</li>)}</ul>
      <p className="ct-hint">{`Confidence between ${settings.unsureLow.toFixed(2)} and ${settings.unsureHigh.toFixed(2)} counts as unsure. Everything else is decided instantly. If the check can't run, the photo waits here too: it is never let through by a failure.`}</p>
    </section>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return <p className="ct-empty">{children}</p>;
}
