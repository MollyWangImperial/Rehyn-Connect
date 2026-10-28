import { useId } from "react";
import { Link } from "wouter";
import { ArrowRight, Users } from "lucide-react";
import { findClinician, mainSection, sessionOpen, sessionPriceText, upcomingSessions } from "@/content/clinicians";
import { useClinicians } from "@/lib/clinician-portal";
import { useCreatedSessions } from "@/lib/consultations";
import { useMinute } from "../clinicians/GroupSessions";
import "./sessions-tile.css";

// "Ask a clinician this week", in the feed's right-hand lane, after the Library card: the next few weekly group sessions,
// each titled with the question it answers, when it is, who hosts it and what a place costs, like a short news list.
// Each opens the Weekly group sessions tab on the Clinicians page, where a place is saved.

const SHOWN = 3;

export default function SessionsTile() {
  const now = useMinute();
  useClinicians();
  const titleId = useId();
  const sessions = upcomingSessions(useCreatedSessions(), new Date(now)).slice(0, SHOWN);
  if (!sessions.length) return null;
  return (
    <section className="cm-side-card cm-sessions-tile" aria-labelledby={titleId}>
      <div className="cm-sessions-head">
        <span className="cm-sessions-icon" aria-hidden="true"><Users size={18} /></span>
        <span><b id={titleId}>Ask a clinician this week</b><span>Open group sessions on video. Listen in, or ask your own question.</span></span>
      </div>
      <ul className="cm-sessions-list" role="list">
        {sessions.map(session => {
          const host = findClinician(session.clinicianId);
          if (!host) return null;
          const hue = mainSection(host).hue;
          const start = new Date(session.start);
          const live = sessionOpen(session, now) && now >= session.start;
          const day = start.toDateString() === new Date(now).toDateString() ? "Today"
            : start.toDateString() === new Date(now + 86_400_000).toDateString() ? "Tmrw"
            : start.toLocaleDateString("en-GB", { weekday: "short" });
          return (
            <li key={session.id}>
              <Link href="~/clinicians/sessions" className="cm-session-row">
                <span className="cm-session-date" style={{ background: hue.tint, color: hue.ink }}>
                  {live ? <span className="cm-session-live">Live</span> : <span>{day}</span>}
                  <strong>{start.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}</strong>
                </span>
                <span className="cm-session-words">
                  <b>{session.title}</b>
                  <span>{host.name} · {sessionPriceText(session)}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link className="cm-sessions-all" href="~/clinicians/sessions">See all sessions<ArrowRight size={16} aria-hidden="true" /></Link>
    </section>
  );
}
