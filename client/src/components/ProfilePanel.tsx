import { useId, useMemo, useState, type FormEvent } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Bell, BookOpen, Bookmark, CalendarDays, ChevronRight, Heart, Plus, Search, ShieldCheck } from "lucide-react";
import { SAMPLE_GOING, sampleGatherings } from "@/content/circle-events";
import { PERSON_IDS } from "@/content/community-samples";
import { librarySections, MOST_READ } from "@/content/library";
import { administrativeControlsEnabled } from "@/lib/administrative-controls";
import { CARE_TEAM_PATH, useCareTeamEnabled, useCareTeamWaiting } from "@/lib/care-team";
import { useCircleEvents } from "@/lib/circle-events-store";
import { mergeGatherings, myEvents } from "@/lib/circle-listing";
import { alertsPanel, useAlertsPanel } from "@/lib/alerts-panel";
import { alertsQuiet, communityHref, friendList, hourLabel, inQuietHours, isBlocked, unseenAlertCount, useCommunity } from "@/lib/community-store";
import { conditionByKey, conditionHref, itemByKey, itemHref } from "@/lib/library";
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
 * your events, the Library, your groups and, for the care team, its review queue. Everything is a link
 * that starts with "~", so it works from the Library's nested pages too.
 */
export default function ProfilePanel({ careTeam = false, onNavigate }: { careTeam?: boolean; onNavigate?: () => void }) {
  const [, navigate] = useLocation();
  const openSettings = useOptionalSettings();
  const profile = useProfile();
  const memory = useCommunity();
  const library = useLibraryState();
  const circle = useCircleEvents();
  const waiting = useCareTeamWaiting();
  const staff = useCareTeamEnabled();
  const [savedOpen, setSavedOpen] = useState(false);
  const [query, setQuery] = useState("");
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
  const mostRead = MOST_READ.slice(0, 2).map(itemByKey).filter(place => place !== undefined);
  const alerts = useAlertsPanel();
  const fresh = unseenAlertCount(memory);
  const quiet = alertsQuiet(memory.settings);
  const alertsLabel = quiet
    ? `Alerts, quiet ${inQuietHours(memory.settings) ? `until ${hourLabel(memory.settings.quietUntil)}` : "during your break"}`
    : `Alerts, ${fresh > 0 ? `${fresh} new` : "nothing new"}`;

  const go = (href: string) => { onNavigate?.(); navigate(`~${href}`); };
  const search = (event: FormEvent) => {
    event.preventDefault();
    const words = query.trim();
    go(words ? `/library?q=${encodeURIComponent(words)}` : "/library");
  };
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
              <span className="site-row-icon is-rose"><Heart size={17} /></span><span className="site-row-label">Friends</span>
              <span className="site-row-note">{online > 0 ? `${online} online` : `${friends.length}`}</span>
            </Link>
          </li>
          <li>
            <button type="button" className="site-row" aria-expanded={savedOpen} aria-controls={savedId} onClick={() => setSavedOpen(!savedOpen)}>
              <span className="site-row-icon is-sun"><Bookmark size={17} /></span><span className="site-row-label">Saved</span>
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
              <span className="site-row-icon is-mint"><CalendarDays size={17} /></span><span className="site-row-label">My events</span>
              {events.waiting > 0 ? <span className="site-row-badge">{events.waiting}<span className="cm-sr"> invitations waiting</span></span> : <span className="site-row-note">{events.upcoming || ""}</span>}
            </Link>
          </li>
          <li>
            {/* Alerts opens its panel beside this row (the shell draws it); quiet time keeps the count down. */}
            <button type="button" className={`site-row ${alerts.open ? "is-active" : ""}`} aria-label={alertsLabel} aria-haspopup="dialog" aria-expanded={alerts.open} data-cm-tool="alerts" onClick={event => alertsPanel.open(event.currentTarget)}>
              <span className="site-row-icon is-sky"><Bell size={17} /></span><span className="site-row-label">Alerts</span>
              {quiet ? <span className="site-row-note">{inQuietHours(memory.settings) ? `Quiet until ${hourLabel(memory.settings.quietUntil)}` : "Quiet"}</span>
                : fresh > 0 ? <span className="site-row-badge is-new">{fresh}<span className="cm-sr"> new</span></span> : null}
            </button>
          </li>
          <li>
            {/* Opens Play now on the Groups page: pick one of the community's games and play someone free. */}
            <Link className="site-row" {...link(communityHref("groups", null, { game: PLAY_NOW }))}>
              <span className="site-row-icon is-lilac"><GamesIcon size={17} /></span><span className="site-row-label">Game</span>
            </Link>
          </li>
        </ul>
      </section>

      <section className="site-card site-library" aria-labelledby={`${searchId}-title`}>
        <div className="site-library-head">
          <span className="site-library-icon" aria-hidden="true"><BookOpen size={18} /></span>
          <span><b id={`${searchId}-title`}>The library</b><span>Trusted info, in plain English</span></span>
        </div>
        <form role="search" className="site-library-search" onSubmit={search}>
          <label htmlFor={searchId} className="cm-sr">Look up a topic in the Library</label>
          <Search size={15} aria-hidden="true" />
          <input id={searchId} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Look up a topic" autoComplete="off" />
        </form>
        <div className="site-chips">
          {librarySections.slice(0, 5).map(section => <Link key={section.id} className="site-chip" {...link(`/library/${section.id}`)}>{section.short}</Link>)}
        </div>
        {mostRead.length > 0 && (
          <>
            <p className="site-caption">Most read this week</p>
            <ul className="site-reads">
              {mostRead.map(place => (
                <li key={itemHref(place)}>
                  <Link className="site-read" {...link(`/library${itemHref(place)}`)}>
                    <b>{place.item.title}</b>
                    <span>{place.condition.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
        <Link className="site-library-open" {...link("/library")}>Open the library<ArrowRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="site-groups" aria-labelledby={`${searchId}-groups`}>
        <div className="site-caption-row">
          <p className="site-caption" id={`${searchId}-groups`}>Your groups</p>
          <Link className="site-see-all" {...link(communityHref("groups"))}>See all<span className="cm-sr"> your groups</span></Link>
        </div>
        <ul>
          {groups.slice(0, 2).map(group => (
            <li key={group.id}>
              <Link className="site-group" {...link(communityHref("groups", group.id))}>
                <span className="site-group-tile" style={{ background: group.tint, color: group.ink }} aria-hidden="true">{initials(group.name)}</span>
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
            <span className="site-row-icon is-green"><ShieldCheck size={17} /></span><span className="site-row-label">Lounge safety</span>
            {waiting > 0 && <span className="site-row-badge">{waiting}<span className="cm-sr"> waiting for review</span></span>}
          </Link>
          {administrativeControlsEnabled() && <AccountResetControls />}
        </section>
      )}

    </div>
  );
}
