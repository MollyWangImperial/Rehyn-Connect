import { useEffect, useId, useState, type ReactNode } from "react";
import { useLocation } from "wouter";
import { Check } from "lucide-react";
import { DATA_SCREEN } from "@/content/data-permissions";
import { settingsChoices, type MemberId, type MessagesFrom, type PersonId, type PostsSeenBy } from "@/content/community-samples";
import { agreedOn, agreedTo, consentStore, HEALTH_CONSENT_TEXT, isUnder18, useConsents } from "@/lib/consent";
import { communityHref, communityStore, isBlocked, useCommunity } from "@/lib/community-store";
import { PROFILE_PATH } from "./AccountSettings";
import "./data-permissions.css";

// The Data and permissions screen, built to "Data and permissions screen · Version 2.0": every label,
// toggle and explanatory line in the order given there. Three rules from that document: withdrawing
// a permission takes no more taps than giving it; every change is written to the audit log with a
// timestamp (lib/consent.ts); and nothing here nudges, delays or discourages switching something off.
// There are no accounts yet, so "your data" is what this browser holds, and device permissions are
// the browser's.

const S = DATA_SCREEN;

function Switch({ label, on, onChange, disabled }: { label: string; on: boolean; onChange: (on: boolean) => void; disabled?: boolean }) {
  return <button type="button" role="switch" aria-checked={on} aria-label={label} aria-disabled={disabled} className="dp-switch" onClick={() => { if (!disabled) onChange(!on); }}><span /></button>;
}

function Row({ label, note, tag, children }: { label: string; note?: string; tag?: string; children?: ReactNode }) {
  return (
    <div className="dp-row">
      <div className="dp-row-words"><b>{label}{tag && <span className="dp-tag">{tag}</span>}</b>{note && <span>{note}</span>}</div>
      {children}
    </div>
  );
}

function Choice<T extends string>({ label, value, options, onChange, hide = [] }: { label: string; value: T; options: readonly { id: T; label: string }[]; onChange: (value: T) => void; hide?: T[] }) {
  return (
    <div className="dp-choice" role="radiogroup" aria-label={label}>
      {options.filter(option => !hide.includes(option.id)).map(option => (
        <button key={option.id} type="button" role="radio" aria-checked={value === option.id} className={`dp-chip ${value === option.id ? "is-on" : ""}`} onClick={() => onChange(option.id)}>{option.label}</button>
      ))}
    </div>
  );
}

/** A confirmation with two choices of equal weight (sections 2.1 and 2.3). */
function Confirm({ title, text, more, confirm, cancel, onConfirm, onCancel, danger, typed }: { title: string; text: string; more?: string; confirm: string; cancel: string; onConfirm: () => void; onCancel: () => void; danger?: boolean; typed?: string }) {
  const [words, setWords] = useState("");
  const id = useId();
  const ready = !typed || words.trim().toUpperCase() === typed;
  return (
    <div className="dp-confirm" role="group" aria-labelledby={id}>
      <h3 id={id}>{title}</h3>
      <p>{text}</p>
      {more && <p>{more}</p>}
      {typed && <label className="dp-typed">Type {typed} to confirm<input value={words} onChange={event => setWords(event.target.value)} autoComplete="off" /></label>}
      <div className="dp-actions">
        <button type="button" className={`dp-button ${danger ? "is-danger" : ""}`} aria-disabled={!ready} onClick={() => { if (ready) onConfirm(); }}>{confirm}</button>
        <button type="button" className="dp-button is-quiet" onClick={onCancel}>{cancel}</button>
      </div>
    </div>
  );
}

/** The browser's permission for something, read live; never assumed. */
function usePermission(name: string): string {
  const [state, setState] = useState("Not asked yet");
  useEffect(() => {
    let status: PermissionStatus | null = null;
    const read = () => setState(status?.state === "granted" ? "Granted" : status?.state === "denied" ? "Not granted" : "Not asked yet");
    navigator.permissions?.query({ name: name as PermissionName }).then(result => { status = result; read(); result.addEventListener("change", read); }).catch(() => setState("Asked when needed"));
    return () => status?.removeEventListener("change", read);
  }, [name]);
  return state;
}

/** Every rehyn.* entry this browser holds, as one file to keep. */
function downloadMyData() {
  const data: Record<string, unknown> = {};
  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    if (!key?.startsWith("rehyn")) continue;
    try { data[key] = JSON.parse(localStorage.getItem(key) ?? "null"); } catch { data[key] = localStorage.getItem(key); }
  }
  const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), data }, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `rehyn-connect-my-data-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

/** Withdrawing the health information consent removes what the person has shared (Privacy Notice 5.4). */
export function removeSharedContent() {
  const memory = communityStore.load();
  memory.posts.forEach(post => communityStore.removePost(post.id));
  Object.entries(memory.replies).forEach(([postId, replies]) => replies.forEach(reply => communityStore.removeReply(postId, reply.id)));
  Object.entries(memory.messages).forEach(([groupId, notes]) => notes.forEach(note => communityStore.removeMessage(groupId, note.id)));
  Object.entries(memory.direct).forEach(([who, notes]) => notes.forEach(note => communityStore.removeDirect(who as PersonId, note.id)));
  communityStore.updateSettings({ about: "" });
}

/** Everything this browser holds for Rehyn: the account, as far as this preview has one. */
function deleteEverything() {
  const keys: string[] = [];
  for (let index = 0; index < localStorage.length; index++) { const key = localStorage.key(index); if (key?.startsWith("rehyn")) keys.push(key); }
  keys.forEach(key => localStorage.removeItem(key));
  try { sessionStorage.clear(); } catch { /* Nothing kept there matters. */ }
}

export function HealthConsentBlock({ compact = false }: { compact?: boolean }) {
  const consents = useConsents();
  const on = agreedTo(consents).health;
  const [withdrawing, setWithdrawing] = useState(false);
  const [agreeing, setAgreeing] = useState(false);
  const [ticked, setTicked] = useState(false);
  const checkId = useId();
  const withdraw = () => { removeSharedContent(); consentStore.withdrawHealth(); setWithdrawing(false); };
  return (
    <div className="dp-health">
      <Row label={S.health.label} note={on ? `Given on ${agreedOn(consents.health!.at)}` : consents.healthWithdrawnAt ? `Withdrawn on ${agreedOn(consents.healthWithdrawnAt)}` : "Off"}>
        <Switch label={S.health.label} on={on} onChange={next => (next ? setAgreeing(true) : setWithdrawing(true))} />
      </Row>
      {!compact && <p className="dp-note">{S.health.text}</p>}
      {!compact && <p className="dp-note">{S.health.off}</p>}
      {withdrawing && <Confirm title={S.withdraw.title} text={S.withdraw.text} more={S.withdraw.alternative} confirm={S.withdraw.confirm} cancel={S.withdraw.cancel} onConfirm={withdraw} onCancel={() => setWithdrawing(false)} />}
      {agreeing && (
        <div className="dp-confirm" role="group" aria-label="Health information consent">
          <blockquote className="dp-quote">{HEALTH_CONSENT_TEXT}</blockquote>
          <label className="dp-check" htmlFor={checkId}><input id={checkId} type="checkbox" checked={ticked} onChange={event => setTicked(event.target.checked)} /><span>I agree</span></label>
          <div className="dp-actions">
            <button type="button" className="dp-button" aria-disabled={!ticked} onClick={() => { if (ticked) { consentStore.giveHealth(); setAgreeing(false); setTicked(false); } }}>Agree</button>
            <button type="button" className="dp-button is-quiet" onClick={() => { setAgreeing(false); setTicked(false); }}>{S.withdraw.cancel}</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DataPermissions({ onOpenDocument, onClose }: { onOpenDocument: (which: "privacy" | "terms", focus?: string) => void; onClose: () => void }) {
  const consents = useConsents();
  const memory = useCommunity();
  const [, navigate] = useLocation();
  const under18 = isUnder18(consents);
  const [deleting, setDeleting] = useState(false);
  const [suggest, setSuggest] = useState(() => { try { return localStorage.getItem("rehyn.suggest-profile.v1") === "on"; } catch { return false; } });
  const camera = usePermission("camera");
  const notifications = usePermission("notifications");
  const go = (href: string) => { onClose(); navigate(`~${href}`); };
  const blocked = (Object.keys(memory.blocks) as MemberId[]).filter(who => isBlocked(memory, who)).length;

  return (
    <div className="dp">
      <p className="dp-intro">{S.intro}</p>

      <h3 className="dp-heading">{S.health.heading}</h3>
      <HealthConsentBlock />

      <h3 className="dp-heading">{S.privacy.heading}</h3>
      <Row label={S.privacy.posts.label} note={S.privacy.posts.note} />
      <Choice<PostsSeenBy> label={S.privacy.posts.label} value={memory.settings.postsSeenBy} options={settingsChoices.postsSeenBy} onChange={postsSeenBy => communityStore.updateSettings({ postsSeenBy })} />
      <Row label={S.privacy.messages.label} note={under18 ? "Under 18: only people you are connected with can message you." : undefined} />
      <Choice<MessagesFrom> label={S.privacy.messages.label} value={memory.settings.messagesFrom} options={settingsChoices.messagesFrom} onChange={messagesFrom => communityStore.updateSettings({ messagesFrom })} hide={under18 ? ["friendsAndGroups"] : []} />
      {!under18 && (
        <Row label={S.privacy.suggest.label} note={S.privacy.suggest.note}>
          <Switch label={S.privacy.suggest.label} on={suggest} onChange={on => { setSuggest(on); try { localStorage.setItem("rehyn.suggest-profile.v1", on ? "on" : "off"); } catch { /* Lasts this visit. */ } }} />
        </Row>
      )}
      <Row label={S.privacy.online.label}>
        <Switch label={S.privacy.online.label} on={memory.settings.showOnline} onChange={showOnline => communityStore.updateSettings({ showOnline })} />
      </Row>
      <Row label={S.privacy.blocked.label} note={S.privacy.blocked.note}>
        <button type="button" className="dp-link" onClick={() => go(PROFILE_PATH)}>{S.privacy.blocked.action}{blocked > 0 ? ` (${blocked})` : ""}</button>
      </Row>

      {/* "Improving the app" is left out until there is any analytics to switch on (build note: only ship the toggle if it exists). */}

      <h3 className="dp-heading">{S.notifications.heading}</h3>
      <Row label={S.notifications.activity.label} note={S.notifications.activity.note}>
        <Switch label={S.notifications.activity.label} on={consents.activity} onChange={on => consentStore.setActivity(on)} />
      </Row>
      <Row label={S.notifications.updates.label} note={S.notifications.updates.note}>
        <Switch label={S.notifications.updates.label} on={consents.updates} onChange={on => consentStore.setUpdates(on)} />
      </Row>

      <h3 className="dp-heading">{S.device.heading}</h3>
      <Row label={S.device.photos.label} note={S.device.photos.note}><span className="dp-state">Asked when you choose a photo</span></Row>
      <Row label={S.device.camera.label} note={S.device.camera.note}><span className="dp-state">{camera}</span></Row>
      <Row label={S.device.notifications.label} note={S.device.notifications.note}><span className="dp-state">{notifications}</span></Row>
      <p className="dp-note">{S.device.manage}: in your browser, open the site's settings from the address bar.</p>

      <h3 className="dp-heading">{S.safety.heading}</h3>
      <div className="dp-links">
        <button type="button" className="dp-link" onClick={() => go(communityHref("safety"))}>{S.safety.report}</button>
        <button type="button" className="dp-link" onClick={() => onOpenDocument("terms", "6.")}>{S.safety.rules}</button>
      </div>
      <Row label={S.safety.help.label} note={S.safety.help.text} />

      <h3 className="dp-heading">{S.yourData.heading}</h3>
      <Row label={S.yourData.download.label} note={S.yourData.download.note}><button type="button" className="dp-link" onClick={downloadMyData}>Download</button></Row>
      <Row label={S.yourData.correct.label} note={S.yourData.correct.note}><button type="button" className="dp-link" onClick={() => go(PROFILE_PATH)}>Open your profile</button></Row>
      <Row label={S.yourData.delete.label} note={S.yourData.delete.note}><button type="button" className="dp-link is-danger" onClick={() => setDeleting(true)}>Delete</button></Row>
      {deleting && <Confirm title={S.deleteAccount.title} text={S.deleteAccount.text} more={S.deleteAccount.more} confirm={S.deleteAccount.confirm} cancel={S.deleteAccount.cancel} danger typed="DELETE" onConfirm={() => { deleteEverything(); window.location.assign("/"); }} onCancel={() => setDeleting(false)} />}

      <h3 className="dp-heading">{S.documents.heading}</h3>
      <div className="dp-links">
        <button type="button" className="dp-link" onClick={() => onOpenDocument("privacy")}>{S.documents.privacy}</button>
        <button type="button" className="dp-link" onClick={() => onOpenDocument("terms")}>{S.documents.terms}</button>
        <button type="button" className="dp-link" onClick={() => onOpenDocument("terms", "6.")}>{S.documents.rules}</button>
        <button type="button" className="dp-link" onClick={() => go("/library")}>{S.documents.sources}</button>
      </div>
      <p className="dp-note">{S.documents.contact}</p>
      <p className="dp-note">{S.documents.complaint}</p>
      {consents.audit.length > 0 && <p className="dp-note dp-audit"><Check size={14} aria-hidden="true" />{`${consents.audit.length} change${consents.audit.length === 1 ? "" : "s"} recorded, the latest on ${agreedOn(consents.audit[consents.audit.length - 1].at)}.`}</p>}
    </div>
  );
}
