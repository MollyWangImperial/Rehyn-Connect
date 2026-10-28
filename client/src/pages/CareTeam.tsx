import { useEffect, useRef } from "react";
import { Link, useSearch } from "wouter";
import RecoveryShell from "@/components/RecoveryShell";
import { careHref, Members, Overview, Reports, Settings, type CareSection } from "@/components/care-team/CareTeamSections";
import LoungeSafety from "@/components/care-team/LoungeSafety";
import ClinicianPrices from "@/components/care-team/ClinicianPrices";
import { usePriceRequests } from "@/lib/clinician-portal";
import { useYourName } from "@/components/care-team/parts";
import { LockIcon } from "@/components/community/icons";
import { applyCareTeamSwitch, useCareTeamEnabled } from "@/lib/care-team";
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
  { id: "prices", label: "Clinician prices" },
  { id: "settings", label: "Settings" },
];

export function sectionFromQuery(search: string): CareSection {
  const asked = new URLSearchParams(search).get("section");
  return SECTIONS.some(item => item.id === asked) ? (asked as CareSection) : "lounge";
}

/** Not the care team: the page says so and offers the way back, rather than the queue. */
function NotTheCareTeam() {
  return (
    <RecoveryShell active="Care Team" dateLabel={todayLabel()} className="ct-shell">
      <div className="recovery-page ct-page">
        <p className="ct-access"><LockIcon size={16} /><span>The care team's pages are for Rehyn's care team. If that's you, open this page with the care team's link.</span></p>
        <Link href="~/community" className="ct-subnav-link is-on">Back to the Feed</Link>
      </div>
    </RecoveryShell>
  );
}

export default function CareTeam() {
  const search = useSearch();
  // `?admin=on` in the address turns this device into the care team's (see lib/care-team.ts).
  useEffect(() => { applyCareTeamSwitch(search); }, [search]);
  const staff = useCareTeamEnabled();
  if (!staff) return <NotTheCareTeam />;
  return <CareTeamPages search={search} />;
}

function CareTeamPages({ search }: { search: string }) {
  const section = sectionFromQuery(search);
  const state = useLoungeModeration();
  const yourName = useYourName();
  const waiting = needsPerson(state).length;
  const prices = usePriceRequests().filter(item => item.status === "waiting").length;
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
              {item.id === "prices" && prices > 0 && <span className="ct-count">{prices}<span className="ct-sr"> waiting</span></span>}
            </Link>
          ))}
        </nav>
        <p className="ct-access"><LockIcon size={16} /><span>Care team only. There are no accounts yet, so this device was set as the care team's by its link; everything stays in this browser.</span></p>

        {section === "overview" && <Overview state={state} yourName={yourName} />}
        {section === "members" && <Members state={state} yourName={yourName} />}
        {section === "lounge" && <LoungeSafety state={state} yourName={yourName} />}
        {section === "reports" && <Reports state={state} yourName={yourName} />}
        {section === "prices" && <ClinicianPrices />}
        {section === "settings" && <Settings state={state} />}
      </div>
    </RecoveryShell>
  );
}
