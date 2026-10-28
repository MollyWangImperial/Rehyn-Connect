import { useId, useMemo, useState } from "react";
import { Link } from "wouter";
import { Bell, Bookmark, CalendarDays, ChevronRight, Heart, Plus, ShieldCheck, Stethoscope } from "lucide-react";
import { SAMPLE_GOING, sampleGatherings } from "@/content/circle-events";
import { PERSON_IDS } from "@/content/community-samples";
import { administrativeControlsEnabled } from "@/lib/administrative-controls";
import { CARE_TEAM_PATH, useCareTeamEnabled, useCareTeamWaiting } from "@/lib/care-team";
import { useCircleEvents } from "@/lib/circle-events-store";
import { isOpen, useConsultations } from "@/lib/consultations";
import { mergeGatherings, myEvents } from "@/lib/circle-listing";
import { alertsPanel, useAlertsPanel } from "@/lib/alerts-panel";
import { alertsQuiet, communityHref, friendList, hourLabel, inQuietHours, isBlocked, unseenAlertCount, useCommunity } from "@/lib/community-store";
import { conditionByKey, conditionHref } from "@/lib/library";
import { useLibraryState } from "@/lib/library-store";
import { profileInitial, profileName, useProfile } from "@/lib/profile";
import { useOptionalSettings } from "./AccountSettings";
import AccountResetControls from "./AccountResetControls";
import { GamesIcon } from "./community/games/pieces";
import { myGroups } from "./community/group-model";

/** `&game=new-open` on the Groups page opens Play now (Groups.tsx). */
const PLAY_NOW = "new-open";

/** "GG" for Garden gang: the tile beside a group's name. */
const initials = (name: string) => name.split(/\s+/).filter(Boolean).slice(0, 2).map(word => word[0]!.toUpperCase()).join("");

/**
 * The left of every page: who you are, and the things you come back to: friends, saved Library pages,
 * your events, your groups and, for the care team, its review queue. (The Library card is in the feed's right lane.) Everything is a link
 * that starts with "~", so it works from the Library's nested pages too.
 */
export default function ProfilePanel({ careTeam = false, onNavigate }: { careTeam?: boolean; onNavigate?: () => void }) {
  const openSettings = useOptionalSettings();
  const profile = useProfile();
  const memory = useCommunity();
  const library = useLibraryState();
  const circle = useCircleEvents();
  const waiting = useCareTeamWaiting();
  const staff = useCareTeamEnabled();
  const [savedOpen, setSavedOpen] = useState(false);
  const savedId = useId();
  const searchId = useId();

  const friends = friendList(memory);
  const online = friends.filter(friend => friend.online).length;
  const saved = library.saved.map(conditionByKey).filter(place => place !== undefined);
  const events = useMemo(() => {
    const now = Date.now();
    const hidden = PERSON_IDS.filter(who => isBlocked(memory, who));
    const mine = myEvents(mergeGatherings(sampleGatherings(new Date(now)), circle), circle, SAMPLE_GOING, now, hidden);
    return { upcoming: mine.hosting.length + mine.waiting.length + mine.going.length, waiting: mine.waiting.length };
  }, [circle, memory]);
  const groups = myGroups(memory);
  // Consultations with clinicians (lib/consultations.ts): how many are still to come, and how many wait for an answer
  // from this person (a clinician suggested other times, or an urgent request was answered).
  const consultations = useConsultations().filter(isOpen);
  const needsYou = consultations.filter(item => (item.status === "requested" && (item.suggested?.length ?? 0) > 0) || item.status === "matched").length;
  const alerts = useAlertsPanel();
  const fresh = unseenAlertCount(memory);
  const quiet = alertsQuiet(memory.settings);
  const alertsLabel = quiet
    ? `Alerts, quiet ${inQuietHours(memory.settings) ? `until ${hourLabel(memory.settings.quietUntil)}` : "during your break"}`
    : `Alerts, ${fresh > 0 ? `${fresh} new` : "nothing new"}`;

  const link = (href: string) => ({ href: `~${href}`, onClick: onNavigate });

  return (
    <div className="site-panel-inner">
      <section className="site-me" aria-label="You">
        <div className="site-me-row">
          <span className="site-me-face" aria-hidden="true">{profile.photo ? <img src={profile.photo} alt="" /> : profileInitial(profile)}</span>
          <span className="site-me-words">
            <b>{profileName(profile)}</b>
            <button type="button" className="site-me-link" aria-haspopup="dialog" onClick={event => { onNavigate?.(); openSettings?.(event.currentTarget, "profile"); }}>View your profile</button>
          </span>
        </div>
        <ul className="site-rows">
          <li>
            <Link className="site-row" {...link(communityHref("feed", null, { panel: "friends" }))}>
              <span className="site-row-icon"><Heart size={17} /></span><span className="site-row-label">Friends</span>
              <span className="site-row-note">{online > 0 ? `${online} online` : `${friends.length}`}</span>
            </Link>
          </li>
          <li>
            <button type="button" className="site-row" aria-expanded={savedOpen} aria-controls={savedId} onClick={() => setSavedOpen(!savedOpen)}>
              <span className="site-row-icon"><Bookmark size={17} /></span><span className="site-row-label">Saved</span>
              <span className="site-row-note">{saved.length || ""}<ChevronRight size={15} className={savedOpen ? "is-open" : ""} aria-hidden="true" /></span>
            </button>
            {savedOpen && (
              <div id={savedId} className="site-saved">
                {saved.length ? (
                  <ul>{saved.map(place => <li key={`${place.group.id}/${place.condition.id}`}><Link {...link(`/library${conditionHref(place.group.id, place.condition.id)}`)}>{place.condition.title}</Link></li>)}</ul>
                ) : <p>Nothing saved yet. Press “Save to my pages” on any Library page and it will wait here.</p>}
              </div>
            )}
          </li>
          <li>
            <Link className="site-row" {...link("/community?space=circle&tab=mine")}>
              <span className="site-row-icon"><CalendarDays size={17} /></span><span className="site-row-label">My events</span>
              {events.waiting > 0 ? <span className="site-row-badge">{events.waiting}<span className="cm-sr"> invitations waiting</span></span> : <span className="site-row-note">{events.upcoming || ""}</span>}
            </Link>
          </li>
          <li>
            {/* The patient's consultations with clinicians: what's waiting, the call when it's time, and the transcripts after. */}
            <Link className="site-row" {...link("/clinicians/consultations")}>
              <span className="site-row-icon"><Stethoscope size={17} /></span><span className="site-row-label">My consultations</span>
              {needsYou > 0 ? <span className="site-row-badge">{needsYou}<span className="cm-sr"> waiting for your answer</span></span> : <span className="site-row-note">{consultations.length || ""}</span>}
            </Link>
          </li>
          <li>
            {/* Alerts opens its panel beside this row (the shell draws it); quiet time keeps the count down. */}
            <button type="button" className={`site-row ${alerts.open ? "is-active" : ""}`} aria-label={alertsLabel} aria-haspopup="dialog" aria-expanded={alerts.open} data-cm-tool="alerts" onClick={event => alertsPanel.open(event.currentTarget)}>
              <span className="site-row-icon"><Bell size={17} /></span><span className="site-row-label">Alerts</span>
              {quiet ? <span className="site-row-note">{inQuietHours(memory.settings) ? `Quiet until ${hourLabel(memory.settings.quietUntil)}` : "Quiet"}</span>
                : fresh > 0 ? <span className="site-row-badge is-new">{fresh}<span className="cm-sr"> new</span></span> : null}
            </button>
          </li>
          <li>
            {/* Opens Play now on the Groups page: pick one of the community's games and play someone free. */}
            <Link className="site-row" {...link(communityHref("groups", null, { game: PLAY_NOW }))}>
              <span className="site-row-icon"><GamesIcon size={17} /></span><span className="site-row-label">Game</span>
            </Link>
          </li>
        </ul>
      </section>

      {/* The Library card moved to the feed's right-hand lane (components/LibraryCard.tsx). */}
      <section className="site-groups" aria-labelledby={`${searchId}-groups`}>
        <div className="site-caption-row">
          <p className="site-caption" id={`${searchId}-groups`}>Your groups</p>
          <Link className="site-see-all" {...link(communityHref("groups"))}>See all<span className="cm-sr"> your groups</span></Link>
        </div>
        <ul>
          {groups.slice(0, 2).map(group => (
            <li key={group.id}>
              <Link className="site-group" {...link(communityHref("groups", group.id))}>
                {/* The group's own tint stays on the Groups page; here every tile is the same quiet grey. */}
                <span className="site-group-tile" aria-hidden="true">{initials(group.name)}</span>
                <span className="site-group-name">{group.name}</span>
                {group.unread > 0 && <span className="site-group-dot"><span className="cm-sr">, new messages</span></span>}
              </Link>
            </li>
          ))}
          <li>
            <Link className="site-group is-more" {...link(communityHref("start"))}><span className="site-group-tile" aria-hidden="true"><Plus size={16} /></span><span className="site-group-name">Start a group</span></Link>
          </li>
        </ul>
      </section>

      {/* The care team's space shows only when this device is set as the care team's (lib/care-team.ts). */}
      {staff && (
        <section className="site-staff" aria-labelledby={`${searchId}-staff`}>
          <p className="site-caption" id={`${searchId}-staff`}>Care team</p>
          <Link className={`site-row site-staff-link ${careTeam ? "is-active" : ""}`} aria-current={careTeam ? "page" : undefined} {...link(CARE_TEAM_PATH)}>
            <span className="site-row-icon"><ShieldCheck size={17} /></span><span className="site-row-label">Lounge safety</span>
            {waiting > 0 && <span className="site-row-badge">{waiting}<span className="cm-sr"> waiting for review</span></span>}
          </Link>
          {administrativeControlsEnabled() && <AccountResetControls />}
        </section>
      )}

    </div>
  );
}
