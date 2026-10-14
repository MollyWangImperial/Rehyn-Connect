import { useId, useRef, useState, type KeyboardEvent } from "react";
import { CheckIcon } from "@/components/community/icons";
import { clockLabel } from "@/lib/community-store";
import { moderationStore, needsPerson, reasonTally, reportedPosts, type ModerationState, type QueueItem } from "@/lib/lounge-moderation";
import { AuthorBadge, CheckExplainer, Chips, Empty, HeldPhoto, MessageBox, ReportBars, RulesForm, ago, nameOf, waited, withYourName } from "./parts";

// The care team's Lounge safety section (the mockup's 05): what the photo check wasn't sure about,
// what members have reported, what came down, blocked upload attempts and everything done, with
// the rules beside them. Every button changes the lounge's record, so the lounge shows the result.

type Tab = "needs" | "reported" | "removed" | "blocked" | "log";
const DAY = 24 * 60 * 60_000;
const startOfToday = () => { const day = new Date(); day.setHours(0, 0, 0, 0); return day.getTime(); };

/** The four numbers along the top. */
export function safetyStats(state: ModerationState, now = Date.now()) {
  const queue = needsPerson(state);
  const threshold = state.settings.threshold;
  const close = reportedPosts(state).filter(item => !item.removed && !item.kept && item.count === threshold - 1).length;
  const removedAuto = Object.values(state.removals).filter(removal => removal.by === "reports" && now - removal.at < 7 * DAY).length;
  const { passed, held, blocked } = state.tally;
  return {
    waiting: queue.length,
    oldest: queue.length ? waited(queue[0].since, now) : null,
    reportsToday: state.reports.filter(report => report.createdAt >= startOfToday()).length,
    close,
    removedAuto,
    checked: passed + held + blocked,
    passed, held, blocked,
  };
}

function HeldItem({ item, state, yourName, onDone }: { item: Extract<QueueItem, { kind: "held" }>; state: ModerationState; yourName: string; onDone: (text: string) => void }) {
  const [messaging, setMessaging] = useState(false);
  const post = item.post;
  const name = nameOf(post.author, yourName);
  const check = post.check;
  return (
    <article className="ct-card ct-item" aria-label={`${name}'s held photo`}>
      <HeldPhoto post={post} />
      <div className="ct-item-body">
        <div className="ct-item-head">
          <AuthorBadge author={post.author} yourName={yourName} />
          <b>{name}</b><span className="ct-soft">{`· The lounge · ${ago(post.createdAt)}`}</span>
          <span className="ct-pill ct-pill-amber">{check?.source === "fallback" || check?.score == null ? "Check couldn't run" : `Check: not sure · ${check.score.toFixed(2)}`}</span>
        </div>
        {post.text && <p className="ct-quote">{`“${post.text}”`}</p>}
        <Chips items={check?.labels ?? []} />
        <div className="ct-actions">
          <button type="button" className="ct-btn ct-btn-dark" onClick={() => { moderationStore.approve(post.id); onDone(`Approved. ${name}'s photo is in the lounge.`); }}><CheckIcon size={14} strokeWidth={3} />Approve &amp; share</button>
          <button type="button" className="ct-btn ct-btn-danger-line" onClick={() => { moderationStore.remove(post.id, post.author, post.text); onDone(`Removed. ${state.settings.tellAuthor ? `${name} has been told.` : `${name} wasn't told (the rule is off).`}`); }}>{state.settings.tellAuthor ? `Remove & tell ${name}` : "Remove"}</button>
          <button type="button" className="ct-btn ct-btn-plain" aria-expanded={messaging} onClick={() => setMessaging(!messaging)}>{`Message ${name}`}</button>
        </div>
        {messaging && <MessageBox author={post.author} yourName={yourName} onDone={sent => { setMessaging(false); if (sent) onDone(`Message sent to ${name}.`); }} />}
      </div>
    </article>
  );
}

function AppealItem({ item, state, yourName, onDone }: { item: Extract<QueueItem, { kind: "appeal" }>; state: ModerationState; yourName: string; onDone: (text: string) => void }) {
  const [messaging, setMessaging] = useState(false);
  const appeal = item.appeal;
  const post = appeal.postId ? state.posts.find(entry => entry.id === appeal.postId) : undefined;
  const removal = appeal.postId ? state.removals[appeal.postId] : undefined;
  const attempt = appeal.blockedId ? state.blocked.find(entry => entry.id === appeal.blockedId) : undefined;
  const excerpt = post?.text || removal?.excerpt || "";
  const what = attempt ? "a blocked photo" : post?.status === "declined" ? "a held photo you removed" : "a removed post";
  return (
    <article className="ct-card ct-item" aria-label={`${yourName} asked for a second look`}>
      {post?.photo && <HeldPhoto post={post} width={140} />}
      <div className="ct-item-body">
        <div className="ct-item-head">
          <AuthorBadge author="you" yourName={yourName} />
          <b>{yourName}</b><span className="ct-soft">{`· asked ${ago(appeal.at)}`}</span>
          <span className="ct-pill ct-pill-blue">Asked for a second look</span>
        </div>
        <p className="ct-soft">{`About ${what}${attempt?.labels.length ? ` (${attempt.labels.join(", ").toLowerCase()})` : ""}.`}{attempt ? " The photo wasn't kept, so talk it through with them." : ""}</p>
        {excerpt && <p className="ct-quote">{`“${excerpt}”`}</p>}
        <div className="ct-actions">
          {!attempt && <button type="button" className="ct-btn ct-btn-dark" onClick={() => { moderationStore.settleAppeal(appeal.id, true); onDone(`Put back. ${yourName}'s post is in the lounge again.`); }}><CheckIcon size={14} strokeWidth={3} />Put it back</button>}
          <button type="button" className="ct-btn ct-btn-plain" onClick={() => { moderationStore.settleAppeal(appeal.id, false); onDone(`Kept the decision. ${yourName} has been told.`); }}>{attempt ? "Close and tell them" : "Keep it removed"}</button>
          <button type="button" className="ct-btn ct-btn-plain" aria-expanded={messaging} onClick={() => setMessaging(!messaging)}>{`Message ${yourName}`}</button>
        </div>
        {messaging && <MessageBox author="you" yourName={yourName} onDone={sent => { setMessaging(false); if (sent) onDone(`Message sent to ${yourName}.`); }} />}
      </div>
    </article>
  );
}

function NeedsPerson({ state, yourName, onDone }: { state: ModerationState; yourName: string; onDone: (text: string) => void }) {
  const [all, setAll] = useState(false);
  // Newest first, as in the design: the oldest wait is in the stats above.
  const queue = needsPerson(state).reverse();
  if (!queue.length) return <Empty>Nothing is waiting. Held photos and requests for a second look appear here.</Empty>;
  const shown = all ? queue : queue.slice(0, 3);
  return (
    <>
      {shown.map(item => item.kind === "held"
        ? <HeldItem key={item.post.id} item={item} state={state} yourName={yourName} onDone={onDone} />
        : <AppealItem key={item.appeal.id} item={item} state={state} yourName={yourName} onDone={onDone} />)}
      {queue.length > 3 && <button type="button" className="ct-more" onClick={() => setAll(!all)}>{all ? "Show fewer" : `Show ${queue.length - 3} more waiting`}</button>}
    </>
  );
}

/** A reported post with its reasons and how close it is to removal, and what can be done. */
function ReportedItem({ entry, state, yourName, onDone, compact = false }: { entry: ReturnType<typeof reportedPosts>[number]; state: ModerationState; yourName: string; onDone: (text: string) => void; compact?: boolean }) {
  const name = nameOf(entry.author, yourName);
  const threshold = state.settings.threshold;
  const last = entry.reports[0].createdAt;
  const postAt = state.posts.find(post => post.id === entry.postId)?.createdAt ?? null;
  return (
    <div className={compact ? "ct-close" : "ct-card ct-item ct-item-plain"}>
      <div className="ct-close-head">
        <span className="ct-close-name">{compact ? `${name}${postAt ? ` · ${clockLabel(postAt)}` : ""}` : <><AuthorBadge author={entry.author} yourName={yourName} /><b>{name}</b><span className="ct-soft">{` · last report ${ago(last)}`}</span></>}</span>
        <span className={`ct-close-count ${entry.removed ? "is-removed" : ""}`}>{entry.removed ? "Removed" : `${entry.count} of ${threshold} report${threshold === 1 ? "" : "s"}`}</span>
      </div>
      {!entry.removed && <ReportBars count={Math.min(entry.count, threshold)} threshold={threshold} />}
      <p className={compact ? "ct-soft ct-close-quote" : "ct-quote"}>{`“${entry.excerpt}”`}</p>
      <Chips tone="rust" items={reasonTally(entry.reports).map(item => `${item.label}${item.count > 1 ? ` ×${item.count}` : ""}`)} />
      {entry.kept && !entry.removed && <p className="ct-soft">Kept up by the care team. More reports are noted but won't take it down.</p>}
      {!entry.removed && (
        <div className="ct-actions">
          <button type="button" className="ct-btn ct-btn-danger ct-btn-small" onClick={() => { moderationStore.remove(entry.postId, entry.author, entry.excerpt); onDone(`Removed ${name}'s post. The lounge shows that it was taken down.`); }}>Remove now</button>
          {!entry.kept && <button type="button" className="ct-btn ct-btn-plain ct-btn-small" onClick={() => { moderationStore.keep(entry.postId, entry.author); onDone(`Kept ${name}'s post up.`); }}>Keep it up</button>}
        </div>
      )}
    </div>
  );
}

function Reported({ state, yourName, onDone }: { state: ModerationState; yourName: string; onDone: (text: string) => void }) {
  const list = reportedPosts(state).filter(entry => !entry.removed);
  if (!list.length) return <Empty>No reported posts are up in the lounge.</Empty>;
  return <>{list.map(entry => <ReportedItem key={entry.postId} entry={entry} state={state} yourName={yourName} onDone={onDone} />)}</>;
}

function Removed({ state, yourName }: { state: ModerationState; yourName: string }) {
  const list = Object.entries(state.removals).sort((a, b) => b[1].at - a[1].at);
  const declined = state.posts.filter(post => post.status === "declined");
  if (!list.length && !declined.length) return <Empty>Nothing has been removed.</Empty>;
  return (
    <>
      {list.map(([postId, removal]) => {
        const reports = state.reports.filter(report => report.postId === postId);
        return (
          <article key={postId} className="ct-card ct-item ct-item-plain" aria-label={`${nameOf(removal.author, yourName)}'s removed post`}>
            <div className="ct-item-head">
              <AuthorBadge author={removal.author} yourName={yourName} />
              <b>{nameOf(removal.author, yourName)}</b><span className="ct-soft">{`· removed ${ago(removal.at)}`}</span>
              <span className="ct-pill ct-pill-rust">{removal.by === "reports" ? `Automatically, at ${new Set(reports.map(report => report.reporter)).size} reports` : "By the care team"}</span>
            </div>
            <p className="ct-quote">{`“${removal.excerpt}”`}</p>
            <Chips tone="rust" items={reasonTally(reports).map(item => `${item.label}${item.count > 1 ? ` ×${item.count}` : ""}`)} />
          </article>
        );
      })}
      {declined.map(post => (
        <article key={post.id} className="ct-card ct-item" aria-label={`${nameOf(post.author, yourName)}'s declined photo`}>
          <HeldPhoto post={post} width={120} />
          <div className="ct-item-body">
            <div className="ct-item-head">
              <AuthorBadge author={post.author} yourName={yourName} />
              <b>{nameOf(post.author, yourName)}</b><span className="ct-soft">{`· held photo removed ${post.reviewedAt ? ago(post.reviewedAt) : ""}`}</span>
              <span className="ct-pill ct-pill-rust">Never shared</span>
            </div>
            {post.text && <p className="ct-quote">{`“${post.text}”`}</p>}
          </div>
        </article>
      ))}
    </>
  );
}

function Blocked({ state, yourName, onDone }: { state: ModerationState; yourName: string; onDone: (text: string) => void }) {
  const [messaging, setMessaging] = useState<string | null>(null);
  const authors = Array.from(new Set(state.blocked.map(item => item.author)));
  if (!authors.length) return <Empty>No uploads have been blocked.</Empty>;
  return (
    <>
      <p className="ct-hint">Blocked photos are never kept, so there is nothing to look at: only the attempt, the check's labels and its confidence.</p>
      {authors.map(author => {
        const attempts = state.blocked.filter(item => item.author === author);
        const name = nameOf(author, yourName);
        const labels = Array.from(new Set(attempts.flatMap(item => item.labels)));
        const top = Math.max(...attempts.map(item => item.score ?? 0));
        return (
          <article key={author} className="ct-card ct-item ct-item-plain" aria-label={`${name}'s blocked uploads`}>
            <div className="ct-item-head">
              <AuthorBadge author={author} yourName={yourName} />
              <b>{name}</b><span className="ct-soft">{`· ${attempts.length} attempt${attempts.length === 1 ? "" : "s"}, the last ${ago(attempts[0].at)}`}</span>
              {attempts.length > 1 && <span className="ct-pill ct-pill-rust">Repeated attempts</span>}
              {attempts.some(item => item.appealed) && <span className="ct-pill ct-pill-blue">Asked for a second look</span>}
            </div>
            <Chips tone="rust" items={labels} />
            {top > 0 && <p className="ct-soft">{`Highest confidence ${top.toFixed(2)}`}</p>}
            <div className="ct-actions">
              <button type="button" className="ct-btn ct-btn-plain ct-btn-small" aria-expanded={messaging === author} onClick={() => setMessaging(messaging === author ? null : author)}>{`Message ${name}`}</button>
            </div>
            {messaging === author && <MessageBox author={author} yourName={yourName} onDone={sent => { setMessaging(null); if (sent) onDone(`Message sent to ${name}.`); }} />}
          </article>
        );
      })}
    </>
  );
}

function ActivityLog({ state, yourName }: { state: ModerationState; yourName: string }) {
  if (!state.log.length) return <Empty>Nothing has happened yet.</Empty>;
  return (
    <ol className="ct-card ct-log">
      {state.log.map(entry => (
        <li key={entry.id}><time dateTime={new Date(entry.at).toISOString()}>{new Date(entry.at).toLocaleString("en-GB", { weekday: "short", hour: "numeric", minute: "2-digit" })}</time><span>{withYourName(entry.text, yourName)}</span></li>
      ))}
    </ol>
  );
}

export default function LoungeSafety({ state, yourName }: { state: ModerationState; yourName: string }) {
  const [tab, setTab] = useState<Tab>("needs");
  const [said, setSaid] = useState("");
  const tabsId = useId();
  const buttons = useRef<Partial<Record<Tab, HTMLButtonElement | null>>>({});
  const stats = safetyStats(state);
  const reportedUp = reportedPosts(state).filter(entry => !entry.removed);
  const removedCount = Object.keys(state.removals).length + state.posts.filter(post => post.status === "declined").length;
  const blockedCount = state.blocked.length;
  const tabs: { id: Tab; label: string }[] = [
    { id: "needs", label: `Needs a person · ${stats.waiting}` },
    { id: "reported", label: `Reported posts · ${reportedUp.length}` },
    { id: "removed", label: `Removed · ${removedCount}` },
    { id: "blocked", label: `Blocked uploads · ${blockedCount}` },
    { id: "log", label: "Activity log" },
  ];
  // Arrow keys move between the tabs, as in any tab list.
  const onKey = (event: KeyboardEvent<HTMLDivElement>) => {
    const at = tabs.findIndex(item => item.id === tab);
    const move = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    const to = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : move ? (at + move + tabs.length) % tabs.length : -1;
    if (to < 0) return;
    event.preventDefault();
    setTab(tabs[to].id);
    buttons.current[tabs[to].id]?.focus();
  };
  const close = reportedUp.filter(entry => !entry.kept).slice(0, 2);

  return (
    <>
      <div className="ct-heading">
        <h1 tabIndex={-1} data-ct-heading>Lounge safety</h1>
        <p>Photos the automatic check wasn't sure about, and posts members have reported.</p>
      </div>

      <div className="ct-stats">
        <div className="ct-card ct-stat"><p>Waiting for a person</p><b className="is-amber">{stats.waiting}</b><span>{stats.oldest ? `Oldest has waited ${stats.oldest}` : "Nothing waiting"}</span></div>
        <div className="ct-card ct-stat"><p>Reports today</p><b>{stats.reportsToday}</b><span className={stats.close ? "is-rust" : ""}>{stats.close ? `${stats.close} post${stats.close === 1 ? " is" : "s are"} one report from removal` : "None close to removal"}</span></div>
        <div className="ct-card ct-stat"><p>Removed automatically</p><b>{stats.removedAuto}</b><span>{`This week, at ${state.settings.threshold} reports each`}</span></div>
        <div className="ct-card ct-stat"><p>Photos checked by the system</p><b>{stats.checked}</b><span>{`${stats.passed} shared · ${stats.blocked} blocked · ${stats.held} held`}</span></div>
      </div>

      <div className="ct-tabs" role="tablist" aria-label="Lounge safety" onKeyDown={onKey}>
        {tabs.map(item => (
          <button key={item.id} ref={element => { buttons.current[item.id] = element; }} type="button" role="tab" id={`${tabsId}-${item.id}`} aria-selected={tab === item.id} aria-controls={`${tabsId}-panel`} tabIndex={tab === item.id ? 0 : -1} className={`ct-tab ${tab === item.id ? "is-on" : ""}`} onClick={() => setTab(item.id)}>{item.label}</button>
        ))}
      </div>
      <p className="ct-sr" role="status">{said}</p>

      <div className="ct-split">
        <div className="ct-queue" role="tabpanel" id={`${tabsId}-panel`} aria-labelledby={`${tabsId}-${tab}`}>
          {tab === "needs" && <NeedsPerson state={state} yourName={yourName} onDone={setSaid} />}
          {tab === "reported" && <Reported state={state} yourName={yourName} onDone={setSaid} />}
          {tab === "removed" && <Removed state={state} yourName={yourName} />}
          {tab === "blocked" && <Blocked state={state} yourName={yourName} onDone={setSaid} />}
          {tab === "log" && <ActivityLog state={state} yourName={yourName} />}
          {said && <p className="ct-done" aria-hidden="true"><CheckIcon size={14} strokeWidth={3} />{said}</p>}
        </div>

        <aside className="ct-rail" aria-label="Reports and rules">
          <section className="ct-card ct-rail-card" aria-label="Reported, close to removal">
            <h2 className="ct-card-title">Reported, close to removal</h2>
            {close.length ? close.map(entry => <ReportedItem key={entry.postId} entry={entry} state={state} yourName={yourName} onDone={setSaid} compact />) : <Empty>Nothing close to removal.</Empty>}
          </section>
          <RulesForm settings={state.settings} />
          <CheckExplainer settings={state.settings} />
        </aside>
      </div>
    </>
  );
}
