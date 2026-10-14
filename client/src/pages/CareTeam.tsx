import { useEffect, useRef } from "react";
import { Link, useSearch } from "wouter";
import RecoveryShell from "@/components/RecoveryShell";
import { careHref, Members, Overview, Reports, Settings, type CareSection } from "@/components/care-team/CareTeamSections";
import LoungeSafety from "@/components/care-team/LoungeSafety";
import { useYourName } from "@/components/care-team/parts";
import { LockIcon } from "@/components/community/icons";
import { needsPerson, useLoungeModeration } from "@/lib/lounge-moderation";
import { todayLabel } from "./Welcome";
import "./care-team.css";

// The care team's page: reviewing what the lounge's photo check held back and what members
// reported. The app's sidebar already leads here, so the page's own sections sit in a row along
// the top (?section=overview and so on; Lounge safety is the default). There is no sign-in yet.

const SECTIONS: { id: CareSection; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "members", label: "Members" },
  { id: "lounge", label: "Lounge safety" },
  { id: "reports", label: "Reports" },
  { id: "settings", label: "Settings" },
];

export function sectionFromQuery(search: string): CareSection {
  const asked = new URLSearchParams(search).get("section");
  return SECTIONS.some(item => item.id === asked) ? (asked as CareSection) : "lounge";
}

export default function CareTeam() {
  const search = useSearch();
  const section = sectionFromQuery(search);
  const state = useLoungeModeration();
  const yourName = useYourName();
  const waiting = needsPerson(state).length;
  const page = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  // A new section: back to the top, and the focus on its heading so a keyboard carries on from there.
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    window.scrollTo({ top: 0, behavior: "instant" });
    page.current?.querySelector<HTMLElement>("[data-ct-heading]")?.focus({ preventScroll: true });
  }, [section]);

  return (
    <RecoveryShell active="Care Team" dateLabel={todayLabel()} className="ct-shell">
      <div ref={page} className="recovery-page ct-page">
        <nav className="ct-subnav" aria-label="Care team">
          {SECTIONS.map(item => (
            <Link key={item.id} href={careHref(item.id)} className={`ct-subnav-link ${section === item.id ? "is-on" : ""}`} aria-current={section === item.id ? "page" : undefined}>
              <span>{item.label}</span>
              {item.id === "lounge" && waiting > 0 && <span className="ct-count">{waiting}<span className="ct-sr"> waiting</span></span>}
            </Link>
          ))}
        </nav>
        <p className="ct-access"><LockIcon size={16} /><span>Access control is still to come: in this preview anyone who opens this page can act as the care team, and everything stays in this browser.</span></p>

        {section === "overview" && <Overview state={state} yourName={yourName} />}
        {section === "members" && <Members state={state} yourName={yourName} />}
        {section === "lounge" && <LoungeSafety state={state} yourName={yourName} />}
        {section === "reports" && <Reports state={state} yourName={yourName} />}
        {section === "settings" && <Settings state={state} />}
      </div>
    </RecoveryShell>
  );
}
