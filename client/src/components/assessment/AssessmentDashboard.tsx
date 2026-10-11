// The movement check's results (the user's dashboard design): the daily function score as a ring that sweeps and
// counts up, the arm, hand and walking areas, the change since the previous check, the next check-up with one or two
// movements to work on, and how the score is put together. Shown over the camera check when its results arrive.

import { useEffect, useRef, useState } from "react";
import type { Dashboard, DashboardArea, Standing } from "@/lib/assessment-dashboard";
import { SCORING_NOTE } from "@/lib/assessment-dashboard";
import type { SaveResult } from "@/lib/assessment-videos";
import "./assessment-dashboard.css";

const RING = 2 * Math.PI * 122, SMALL = 2 * Math.PI * 24;
const tone = (standing: Standing) => (standing === "strong" ? "is-strong" : standing === "not_measured" ? "is-none" : "is-building");
const signed = (n: number) => (n > 0 ? `+${n}` : n < 0 ? `−${Math.abs(n)}` : "±0");

/** The score counting up with the ring's sweep (1.5 s after 0.25 s, easing out); at once with reduced motion. */
function useCountUp(target: number | null) {
  const [shown, setShown] = useState(() => (target === null ? null : reducedMotion() ? target : 0));
  useEffect(() => {
    if (target === null || reducedMotion()) { setShown(target); return; }
    let frame = 0, start: number | null = null;
    const step = (now: number) => {
      start ??= now + 250;
      const t = Math.min(Math.max((now - start) / 1500, 0), 1);
      setShown(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    // Frames pause in a hidden tab: the score is never left part-way.
    const settle = window.setTimeout(() => { cancelAnimationFrame(frame); setShown(target); }, 1900);
    return () => { cancelAnimationFrame(frame); window.clearTimeout(settle); };
  }, [target]);
  return shown;
}
const reducedMotion = () => typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function AreaRow({ area, delay }: { area: DashboardArea; delay: number }) {
  const measured = area.score !== null;
  return (
    <div className={`ad-row ad-rise ${tone(area.standing)}${measured ? "" : " is-unmeasured"}`} style={{ animationDelay: `${delay}s` }}>
      <svg viewBox="0 0 56 56" width="56" height="56" aria-hidden="true" className="ad-mini">
        <circle cx="28" cy="28" r="24" className="ad-mini-track" strokeDasharray={measured ? undefined : "3 5"} />
        {measured && <circle cx="28" cy="28" r="24" className="ad-mini-arc" strokeDasharray={`${(area.score! / 100) * SMALL} ${SMALL}`}
          style={{ ["--len" as string]: `${(area.score! / 100) * SMALL}`, animationDelay: `${delay + 0.2}s` }} transform="rotate(-90 28 28)" />}
        <text x="28" y="33" textAnchor="middle" className="ad-mini-text">{measured ? area.score : "—"}</text>
      </svg>
      <div className="ad-row-body">
        <div className="ad-row-head">
          <div className="ad-serif ad-row-title">{area.title}</div>
          <div className="ad-row-word">{area.word}</div>
        </div>
        <div className="ad-row-summary">{area.summary}</div>
      </div>
    </div>
  );
}

/** Testing: where this check's videos went (assessment-videos.ts). */
export type DashboardVideos = { state: SaveResult | { status: "saving" } | null; onSave(): void };
export function videosLine(state: DashboardVideos["state"]): string {
  if (!state || state.status === "saving") return "Saving this check's task videos…";
  if (state.status === "saved") return `This check's task videos are saved in your “${state.folder}” folder, replacing the last check's.`;
  if (state.status === "downloaded") return "This check's task videos were downloaded.";
  if (state.status === "error") return `The task videos could not be saved: ${state.message}`;
  return "Save this check's task videos to a folder on this computer (for example on D:). Later checks then replace them there by themselves.";
}

/** When the next check-up is, from today. */
export const nextInWords = (days: number) => (days > 1 ? `in ${days} days` : days === 1 ? "tomorrow" : "due now");

/**
 * `onBack`: re-opened later (from the Journey), so it says the check's day rather than "today" and has a way back
 * (also Escape).
 */
export default function AssessmentDashboard({ dashboard, onAlira, onHome, videos, onBack }: { dashboard: Dashboard; onAlira(): void; onHome(): void; videos?: DashboardVideos; onBack?: () => void }) {
  const shown = useCountUp(dashboard.total);
  const [howOpen, setHowOpen] = useState(false);
  const top = useRef<HTMLDivElement>(null);
  useEffect(() => { top.current?.focus(); }, []);
  useEffect(() => {
    if (!onBack) return;
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") onBack(); };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [onBack]);
  const total = dashboard.total;
  const thisCheck = onBack ? dashboard.dateLabel : "Today";
  return (
    <div className="assessment-dashboard" role={onBack ? "dialog" : "region"} aria-modal={onBack ? true : undefined} aria-label="Your movement check results">
      <div className="ad-page" ref={top} tabIndex={-1}>
        {onBack && <button type="button" className="ad-back" onClick={onBack}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
          Back to my journey
        </button>}
        <header className="ad-rise ad-header">
          <div className="ad-header-left">
            <div className="ad-eyebrow">Movement check · {dashboard.dateLabel}</div>
            <h1 className="ad-serif ad-title">Your movement check</h1>
          </div>
          <p className="ad-lead">{onBack ? `Every number here comes from your own movements on ${dashboard.dateLabel}.` : "Every number here comes from your own movements today."}</p>
        </header>

        <section className="ad-rise ad-hero" style={{ animationDelay: ".1s" }}>
          <div className="ad-score">
            <div className="ad-ring">
              <div className="ad-halo" aria-hidden="true" />
              <svg viewBox="0 0 260 260" width="260" height="260" role="img" aria-label={total === null ? "Daily function score not measured" : `Daily function score ${total} out of 100`}>
                <circle cx="130" cy="130" r="122" className="ad-ring-track" />
                {total !== null && <circle cx="130" cy="130" r="122" className="ad-ring-arc" strokeDasharray={`${(total / 100) * RING} ${RING}`}
                  style={{ ["--len" as string]: `${(total / 100) * RING}` }} transform="rotate(-90 130 130)" />}
              </svg>
              {total !== null && <div className="ad-glint" aria-hidden="true" />}
              {total !== null && [["ad-spark-1", "#C27C1E"], ["ad-spark-2", "#2E7D5B"], ["ad-spark-3", "#C27C1E"]].map(([cls, fill]) => (
                <svg key={cls} className={`ad-spark ${cls}`} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" fill={fill} /></svg>
              ))}
              <div className="ad-ring-center">
                <div className="ad-serif ad-ring-number" aria-hidden="true">{shown ?? "—"}</div>
                <div className="ad-ring-of">{total === null ? "not measured" : "of 100"}</div>
              </div>
            </div>
            <div className="ad-rise ad-score-label" style={{ animationDelay: "1.2s" }}>
              <div className="ad-caps">Daily function score</div>
              <div className={`ad-pill ${tone(dashboard.standing)}`}><span className="ad-livedot" />{dashboard.word}</div>
            </div>
          </div>
          <div className="ad-areas">
            {dashboard.areas.map((area, i) => <AreaRow key={area.id} area={area} delay={0.7 + i * 0.15} />)}
            {dashboard.partial && <p className="ad-partial">Some movements could not be measured clearly, so their areas count only what was.</p>}
          </div>
        </section>

        <section className="ad-two-col">
          <div className="ad-rise ad-card" style={{ animationDelay: "1.15s" }}>
            <div className="ad-card-head">
              <h2 className="ad-serif">Since last time</h2>
              {dashboard.since && <div className="ad-muted">vs. your check on {dashboard.since.dateLabel}</div>}
            </div>
            {dashboard.since && total !== null ? (
              <div className="ad-bars">
                {[{ value: dashboard.since.total, label: dashboard.since.dateLabel, now: false }, { value: total, label: thisCheck, now: true }].map((bar, i) => (
                  <div key={bar.label} className="ad-bar">
                    <div className="ad-bar-track"><div className={`ad-grow${bar.now ? " is-now" : ""}`} style={{ height: `${Math.max(2, bar.value)}%`, animationDelay: `${1.4 + i * 0.15}s` }} /></div>
                    <div className={`ad-serif ad-bar-value${bar.now ? " is-now" : ""}`}>{bar.value}</div>
                    <div className="ad-bar-label">{bar.label}</div>
                  </div>
                ))}
                <div className="ad-bars-note">
                  {dashboard.since.changes.length > 0 && <div className="ad-chips">{dashboard.since.changes.map(change => <span key={change.title} className="ad-chip">{change.title} {signed(change.change)}</span>)}</div>}
                  <p>Scores move day to day. One check is a snapshot, not a verdict.</p>
                </div>
              </div>
            ) : (
              <p className="ad-first">This is your starting point. Your next check will show how far you have come.</p>
            )}
          </div>

          <div className="ad-rise ad-card ad-next" style={{ animationDelay: "1.3s" }}>
            <div className="ad-aurora" aria-hidden="true" />
            <div className="ad-card-head">
              <h2 className="ad-serif">Next check-up</h2>
              <div className="ad-next-in">{nextInWords(dashboard.next.days)}</div>
            </div>
            <div className="ad-serif ad-next-date">{dashboard.next.dateLabel}</div>
            <div className="ad-next-try">
              <div className="ad-caps ad-caps-light">Until then, try to</div>
              <div className="ad-chips">{dashboard.next.tryTo.map(item => <span key={item} className="ad-chip ad-chip-light">{item}</span>)}</div>
            </div>
            <div className="ad-actions">
              <button type="button" className="ad-btn-primary" onClick={onAlira}>Continue to Alira
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
              <button type="button" className="ad-btn-ghost" onClick={onHome}>Go to my home</button>
            </div>
          </div>
        </section>

        <div className="ad-rise ad-how" style={{ animationDelay: "1.5s" }}>
          <button type="button" className="ad-how-toggle" aria-expanded={howOpen} onClick={() => setHowOpen(open => !open)}>How we scored this</button>
          {howOpen && <div className="ad-how-body">{SCORING_NOTE.map(line => <p key={line}>{line}</p>)}</div>}
        </div>
        {videos && (
          <div className="ad-videos" role="status">
            <span className="ad-caps">Testing</span>
            <span>{videosLine(videos.state)}</span>
            {videos.state?.status !== "saving" && videos.state?.status !== "saved" && <button type="button" className="ad-how-toggle" onClick={videos.onSave}>Save to a folder…</button>}
          </div>
        )}
      </div>
    </div>
  );
}
