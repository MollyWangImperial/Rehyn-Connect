import type { RefObject } from "react";
import { Link, useSearch } from "wouter";
import {
  alertsQuiet,
  communityHref,
  friendsHref,
  hourLabel,
  inQuietHours,
  leadsHere,
  pendingRequestCount,
  placeOf,
  unseenAlertCount,
  useCommunity,
  type CommunityView,
} from "@/lib/community-store";
import { BellIcon, SearchIcon, ShieldIcon, UsersIcon } from "./icons";
import "@/pages/community-tools.css";

// The green "My community" card that used to sit here is gone (review comment C04). What remains is
// a slim row of tools at the top right of the page. The spaces' tabs are in the shell's top bar
// (components/SiteTabs.tsx), and Settings is the top bar's own button.

/** A small count on a toolbar button. The button's own label says it in words. */
const ToolBadge = ({ count }: { count: number }) => (count > 0 ? <span className="cm-tool-badge cm-pop" aria-hidden="true">{count}</span> : null);

export type CommunityHeaderProps = {
  view: CommunityView;
  findOpen: boolean;
  alertsOpen: boolean;
  onFind: () => void;
  onAlerts: () => void;
  findButton: RefObject<HTMLButtonElement | null>;
  alertsButton: RefObject<HTMLButtonElement | null>;
};

/**
 * The community's tools: Search, Alerts, Friends and Safety. Search and Alerts open panels on this
 * page; Friends opens the drawer over the current view; Safety is a page of its own, so it is a link.
 */
export default function CommunityHeader({ view, findOpen, alertsOpen, onFind, onAlerts, findButton, alertsButton }: CommunityHeaderProps) {
  const memory = useCommunity();
  const search = useSearch();
  const settings = memory.settings;
  const requests = pendingRequestCount(memory);
  const fresh = unseenAlertCount(memory);
  const quiet = alertsQuiet(settings);
  const alertsLabel = quiet
    ? `Alerts, quiet ${inQuietHours(settings) ? `until ${hourLabel(settings.quietUntil)}` : "during your break"}`
    : `Alerts, ${fresh > 0 ? `${fresh} new` : "nothing new"}`;
  const friendsOpen = view.panel === "friends";
  const tool = (on: boolean) => `cm-tool ${on ? "is-on" : ""}`;

  return (
    <header className="cm-toolstrip">
      <h1 className="cm-sr" tabIndex={-1} data-page-heading>My community</h1>
      <div className="cm-tools" role="group" aria-label="Community tools">
        <button ref={findButton} type="button" className={tool(findOpen)} aria-label="Search people or groups" aria-haspopup="dialog" aria-expanded={findOpen} onClick={onFind} data-cm-tool="find">
          <span className="cm-tool-icon"><SearchIcon size={20} /></span><span className="cm-tool-label">Search</span>
        </button>
        <button ref={alertsButton} type="button" className={tool(alertsOpen)} aria-label={alertsLabel} aria-haspopup="dialog" aria-expanded={alertsOpen} onClick={onAlerts} data-cm-tool="alerts">
          <span className="cm-tool-icon"><BellIcon size={20} />{!quiet && <ToolBadge count={fresh} />}</span><span className="cm-tool-label">Alerts</span>
        </button>
        <Link href={friendsHref(null, placeOf(view))} className={tool(friendsOpen)} aria-label={`Friends and requests${requests > 0 ? `, ${requests} waiting` : ""}`} aria-haspopup="dialog" data-cm-tool="friends">
          <span className="cm-tool-icon"><UsersIcon size={20} /><ToolBadge count={requests} /></span><span className="cm-tool-label">Friends</span>
        </Link>
        <Link href={communityHref("safety")} replace={leadsHere(communityHref("safety"), search)} className={tool(view.space === "safety")} aria-label="Safety" aria-current={view.space === "safety" ? "page" : undefined} data-cm-tool="safety">
          <span className="cm-tool-icon"><ShieldIcon size={20} /></span><span className="cm-tool-label">Safety</span>
        </Link>
      </div>
    </header>
  );
}
