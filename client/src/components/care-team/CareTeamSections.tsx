import { useState } from "react";
import { Link } from "wouter";
import { feedPosts, members, reportReasons } from "@/content/community-samples";
import { useCommunity } from "@/lib/community-store";
import { loungeReportReasons, moderationStore, needsPerson, type LoungeAuthor, type ModerationState } from "@/lib/lounge-moderation";
import { LOUNGE_AUTHORS } from "@/lib/lounge-moderation-samples";
import { safetyStats } from "./LoungeSafety";
import { AuthorBadge, CheckExplainer, Empty, RulesForm, ago, nameOf, withYourName } from "./parts";

// The care team's other sections: an overview, the members seen in the lounge, every report (the
// lounge's, and the ones made on this device about My community's feed), and the rules.

export type CareSection = "overview" | "members" | "lounge" | "reports" | "prices" | "settings";
export const careHref = (section: CareSection) => (section === "lounge" ? "/care-team" : `/care-team?section=${section}`);

function Heading({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="ct-heading">
      <h1 tabIndex={-1} data-ct-heading>{title}</h1>
      <p>{intro}</p>
    </div>
  );
}

export function Overview({ state, yourName }: { state: ModerationState; yourName: string }) {
  const stats = safetyStats(state);
  const queue = needsPerson(state);
  return (
    <>
      <Heading title="Overview" intro="What needs the care team today, across the community." />
      <div className="ct-stats">
        <Link className="ct-card ct-stat ct-stat-link" href={careHref("lounge")}><p>Waiting for a person</p><b className="is-amber">{stats.waiting}</b><span>{stats.oldest ? `Oldest has waited ${stats.oldest}` : "Nothing waiting"}</span></Link>
        <Link className="ct-card ct-stat ct-stat-link" href={careHref("reports")}><p>Reports today</p><b>{stats.reportsToday}</b><span className={stats.close ? "is-rust" : ""}>{stats.close ? `${stats.close} close to removal` : "None close to removal"}</span></Link>
        <div className="ct-card ct-stat"><p>Removed automatically</p><b>{stats.removedAuto}</b><span>This week</span></div>
        <div className="ct-card ct-stat"><p>Photos checked</p><b>{stats.checked}</b><span>{`${stats.passed} shared · ${stats.blocked} blocked · ${stats.held} held`}</span></div>
      </div>
      <div className="ct-split">
        <section className="ct-card ct-rail-card ct-grow" aria-label="Waiting for a person">
          <h2 className="ct-card-title">Waiting for a person</h2>
          {queue.length ? (
            <ul className="ct-rows">
              {queue.map(item => {
                const author: LoungeAuthor = item.kind === "held" ? item.post.author : "you";
                return (
                  <li key={item.kind === "held" ? item.post.id : item.appeal.id}>
                    <AuthorBadge author={author} yourName={yourName} />
                    <span><b>{nameOf(author, yourName)}</b>{item.kind === "held" ? " · a held photo" : " · asked for a second look"}</span>
                    <span className="ct-soft">{ago(item.since)}</span>
                  </li>
                );
              })}
            </ul>
          ) : <Empty>Nothing is waiting.</Empty>}
          <Link className="ct-btn ct-btn-dark ct-btn-small ct-self-start" href={careHref("lounge")}>Open Lounge safety</Link>
        </section>
        <section className="ct-card ct-rail-card ct-rail" aria-label="Latest activity">
          <h2 className="ct-card-title">Latest activity</h2>
          <ul className="ct-rows ct-rows-text">{state.log.slice(0, 6).map(entry => <li key={entry.id}><span>{withYourName(entry.text, yourName)}</span><span className="ct-soft">{ago(entry.at)}</span></li>)}</ul>
        </section>
      </div>
    </>
  );
}

export function Members({ state, yourName }: { state: ModerationState; yourName: string }) {
  const rows = LOUNGE_AUTHORS.map(author => ({
    author,
    posts: state.posts.filter(post => post.author === author && post.status === "live" && !state.removals[post.id]).length,
    held: state.posts.filter(post => post.author === author && post.status === "pending_review").length,
    removed: Object.values(state.removals).filter(removal => removal.author === author).length + state.posts.filter(post => post.author === author && post.status === "declined").length,
    blocked: state.blocked.filter(item => item.author === author).length,
    reports: new Set(state.reports.filter(report => report.author === author).map(report => report.postId)).size,
  })).filter(row => row.posts + row.held + row.removed + row.blocked + row.reports > 0)
    .sort((a, b) => (b.removed + b.blocked + b.reports) - (a.removed + a.blocked + a.reports));
  return (
    <>
      <Heading title="Members" intro="Everyone with lounge safety activity: what they shared, what was held, reported or removed." />
      {rows.length ? (
        <div className="ct-card ct-table-wrap">
          <table className="ct-table">
            <caption className="ct-sr">Members with lounge safety activity</caption>
            <thead><tr><th scope="col">Member</th><th scope="col">Posts up</th><th scope="col">Held</th><th scope="col">Reported posts</th><th scope="col">Removed</th><th scope="col">Blocked uploads</th></tr></thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.author}>
                  <th scope="row"><span className="ct-member"><AuthorBadge author={row.author} yourName={yourName} />{nameOf(row.author, yourName)}</span></th>
                  <td>{row.posts}</td><td>{row.held}</td><td>{row.reports}</td><td>{row.removed}</td><td className={row.blocked > 1 ? "is-rust" : ""}>{row.blocked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : <Empty>No lounge activity yet.</Empty>}
    </>
  );
}

const reporterName = (reporter: string, yourName: string) => {
  if (reporter === "you") return yourName;
  const id = reporter.replace(/^member-/, "");
  return id in members ? members[id as keyof typeof members].name : "A member";
};

export function Reports({ state, yourName }: { state: ModerationState; yourName: string }) {
  const memory = useCommunity();
  const lounge = [...state.reports].sort((a, b) => b.createdAt - a.createdAt);
  const feed = [...memory.reports].sort((a, b) => b.createdAt - a.createdAt);
  return (
    <>
      <Heading title="Reports" intro="Every report, newest first. Authors are never told who reported them." />
      <section className="ct-card ct-rail-card" aria-label="The lounge">
        <h2 className="ct-card-title">The lounge</h2>
        {lounge.length ? (
          <ul className="ct-rows ct-rows-report">
            {lounge.map(report => (
              <li key={report.id}>
                <AuthorBadge author={report.author} yourName={yourName} />
                <span className="ct-row-main"><b>{`${nameOf(report.author, yourName)}'s post`}</b><span className="ct-soft">{`“${report.excerpt}”`}</span></span>
                <span className="ct-chip ct-chip-rust">{loungeReportReasons.find(reason => reason.id === report.reason)?.short}</span>
                <span className="ct-soft">{`${reporterName(report.reporter, yourName)} · ${ago(report.createdAt)}`}{state.removals[report.postId] ? " · removed" : ""}</span>
              </li>
            ))}
          </ul>
        ) : <Empty>No lounge reports.</Empty>}
      </section>
      <section className="ct-card ct-rail-card" aria-label="My community feed">
        <h2 className="ct-card-title">My community feed</h2>
        <p className="ct-hint">{`Reports ${yourName} made about feed posts and people, as saved on this device. Read only: they are handled in My community's Safety page.`}</p>
        {feed.length ? (
          <ul className="ct-rows ct-rows-report">
            {feed.map(report => {
              const post = report.postId ? feedPosts.find(item => item.id === report.postId) : undefined;
              return (
                <li key={report.id}>
                  <AuthorBadge author={report.who} yourName={yourName} />
                  <span className="ct-row-main"><b>{post ? `${members[report.who].name}'s post` : members[report.who].name}</b>{post && <span className="ct-soft">{`“${post.text.length > 90 ? `${post.text.slice(0, 89)}…` : post.text}”`}</span>}{report.note && <span className="ct-soft">{`Note: ${report.note}`}</span>}</span>
                  <span className="ct-chip ct-chip-rust">{reportReasons.find(reason => reason.id === report.reason)?.label}</span>
                  <span className="ct-soft">{`${yourName} · ${ago(report.createdAt)}`}{report.alsoBlock ? " · also blocked" : ""}</span>
                </li>
              );
            })}
          </ul>
        ) : <Empty>No feed reports on this device.</Empty>}
      </section>
    </>
  );
}

export function Settings({ state }: { state: ModerationState }) {
  const [low, setLow] = useState(String(state.settings.unsureLow));
  const [high, setHigh] = useState(String(state.settings.unsureHigh));
  const [problem, setProblem] = useState("");
  const [reset, setReset] = useState(false);
  const saveBand = () => {
    const a = Number(low);
    const b = Number(high);
    if (!(a >= 0.05 && b <= 0.95 && a < b)) { setProblem("Choose two numbers between 0.05 and 0.95, the first smaller than the second."); return; }
    setProblem("");
    moderationStore.updateSettings({ unsureLow: Math.round(a * 100) / 100, unsureHigh: Math.round(b * 100) / 100 });
  };
  return (
    <>
      <Heading title="Settings" intro="The rules for the lounge. Changes apply straight away." />
      <div className="ct-split">
        <div className="ct-grow ct-stack">
          <RulesForm settings={state.settings} title="Reports" />
          <section className="ct-card ct-rail-card" aria-label="The photo check">
            <h2 className="ct-card-title">The photo check</h2>
            <p className="ct-hint">A photo whose risk score falls between these two numbers waits for a person. Below the first it is shared; above the second it is blocked and not kept.</p>
            <div className="ct-band">
              <label><span>Unsure from</span><input type="number" step={0.05} min={0.05} max={0.95} value={low} onChange={event => setLow(event.target.value)} /></label>
              <label><span>to</span><input type="number" step={0.05} min={0.05} max={0.95} value={high} onChange={event => setHigh(event.target.value)} /></label>
              <button type="button" className="ct-btn ct-btn-dark ct-btn-small" onClick={saveBand}>Save</button>
            </div>
            {problem && <p className="ct-problem" role="alert">{problem}</p>}
          </section>
          <section className="ct-card ct-rail-card" aria-label="The sample record">
            <h2 className="ct-card-title">The sample record</h2>
            <p className="ct-hint">This preview starts with example held photos, reports and removals. Start again from them to try the flow afresh. Posts you made in the lounge are cleared too.</p>
            {reset
              ? <div className="ct-actions"><button type="button" className="ct-btn ct-btn-danger ct-btn-small" onClick={() => { moderationStore.reset(); setReset(false); }}>Yes, start again</button><button type="button" className="ct-btn ct-btn-plain ct-btn-small" onClick={() => setReset(false)}>Cancel</button></div>
              : <button type="button" className="ct-btn ct-btn-plain ct-btn-small ct-self-start" onClick={() => setReset(true)}>Start again from the samples</button>}
          </section>
        </div>
        <div className="ct-rail"><CheckExplainer settings={state.settings} /></div>
      </div>
    </>
  );
}
