import { useEffect, useMemo, useRef, useState } from "react";
import { Link, Route, Switch, useLocation, useSearch } from "wouter";
import { ArrowLeft, ArrowRight, Check, Clock, Globe, Search, ShieldCheck, SlidersHorizontal, Video, X } from "lucide-react";
import RecoveryShell from "@/components/RecoveryShell";
import BookConsultation from "@/components/clinicians/BookConsultation";
import ClinicianCard, { SaveButton } from "@/components/clinicians/ClinicianCard";
import ClinicianPortal from "@/components/clinicians/ClinicianPortal";
import ClinicianTabs from "@/components/clinicians/ClinicianTabs";
import { SessionCard, useMinute } from "@/components/clinicians/GroupSessions";
import MeetPage from "@/components/clinicians/MeetPage";
import MyConsultations from "@/components/clinicians/MyConsultations";
import { UrgentStart, UrgentStatus } from "@/components/clinicians/Urgent";
import { hueStyle } from "@/components/clinicians/parts";
import {
  CLINICIAN_TYPES, CONSULTATION_MINUTES, SEEN_BY, WINDOW_HOURS, clinicianGroups, directoryFilters, directoryHref,
  experienceText, freeSoon, groupPlace, hoursText, mainSection, nextFree, priceText, upcomingSessions, type Clinician, type ClinicianType,
} from "@/content/clinicians";
import { librarySections } from "@/content/library";
import { registerText, useClinicians } from "@/lib/clinician-portal";
import { useCreatedSessions } from "@/lib/consultations";
import { todayLabel } from "./Welcome";
import "./clinicians.css";

// The Clinicians tab, from the design canvas "Rehyn Clinicians Tab". It is a nested route, like the Library, so the
// paths below are relative to /clinicians. The directory, My consultations and the weekly group sessions are the
// tab's three pages, as a row of tabs under the heading (ClinicianTabs), with "Need someone urgently" beside it:
//   /                     the directory: the search band (search, condition areas and groups), filters and results;
//                         ?area=…&group=… opens it already narrowed
//   /sessions             the weekly group sessions, a page of their own
//   /by-condition         start from a condition (artboard 2)
//   /consultations        the patient's consultations, and their transcripts
//   /urgent, /urgent/:id  an urgent consultation: alert every clinician free in the next 48 hours, then match
//   /portal               the clinician portal (a preview: try it as one of the example clinicians)
//   /meet/:room           the meeting room, for a consultation or a group session
//   /:id                  a clinician's profile with "Book a consultation" (artboard 3)
// Every consultation is online, by video on Rehyn. The people are examples (content/clinicians.ts), so requests, the
// payment hold and transcripts stay on this device (lib/consultations.ts) and nothing is charged; the page says so.

// ------------------------------------------------------------------------------------------------ the directory

type Area = "all" | string;
type Sort = "soonest" | "price" | "name";

const surname = (name: string) => name.replace(/^Dr\.? /, "");

function Directory() {
  const start = directoryFilters(useSearch());
  const [area, setArea] = useState<Area>(start.area);
  const [groups, setGroups] = useState<string[]>(start.groups);
  const [types, setTypes] = useState<ClinicianType[]>([]);
  const [soon, setSoon] = useState(false);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("soonest");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [now] = useState(() => new Date());
  const everyone = useClinicians();
  const count = useRef<HTMLHeadingElement>(null);
  const section = librarySections.find(item => item.id === area);
  const toggle = <T,>(list: T[], value: T) => (list.includes(value) ? list.filter(item => item !== value) : [...list, value]);
  const pickArea = (id: Area) => { setArea(id); setGroups([]); };
  const clearAll = () => { setArea("all"); setGroups([]); setTypes([]); setSoon(false); setQuery(""); };

  const people = useMemo(() => {
    const words = query.trim().toLowerCase();
    const first = (person: Clinician) => nextFree(person, now)?.getTime() ?? Infinity;
    return everyone.filter(person => {
      if (person.listed === false) return false;
      const places = clinicianGroups(person);
      if (area !== "all" && !places.some(place => place.section.id === area)) return false;
      if (groups.length && !places.some(place => groups.includes(place.group.id))) return false;
      if (types.length && !types.includes(person.type)) return false;
      if (soon && !freeSoon(person, now)) return false;
      if (words) {
        const text = `${person.name} ${person.role} ${places.map(place => place.group.title).join(" ")}`.toLowerCase();
        if (!text.includes(words)) return false;
      }
      return true;
    }).sort((a, b) => (sort === "name" ? surname(a.name).localeCompare(surname(b.name)) : sort === "price" ? a.price - b.price : first(a) - first(b)));
  }, [everyone, area, groups, types, soon, query, sort, now]);

  const active: { label: string; remove: () => void }[] = [];
  if (section) active.push({ label: section.title, remove: () => pickArea("all") });
  for (const id of groups) active.push({ label: groupPlace(id)?.group.title ?? id, remove: () => setGroups(toggle(groups, id)) });
  for (const id of types) active.push({ label: CLINICIAN_TYPES.find(type => type.id === id)!.label, remove: () => setTypes(toggle(types, id)) });
  if (soon) active.push({ label: `Free in the next ${WINDOW_HOURS} hours`, remove: () => setSoon(false) });

  return (
    <div className="cl-page">
      <div className="cl-head">
        <div>
          <p className="cl-kicker"><span aria-hidden="true" />Care that fits you</p>
          <h1 className="cl-h1" data-page-heading>Clinicians<span aria-hidden="true">.</span></h1>
          <p className="cl-lead">People who work with the conditions in our Library, by video here on Rehyn.</p>
        </div>
        <Link href="/urgent" className="cl-urgent-btn"><Clock size={18} aria-hidden="true" />Need someone urgently</Link>
      </div>

      <ClinicianTabs active="find" />

      {/* The search band: the main thing on the page. Filtering is live; Search takes you to the results. */}
      <form className="cl-band" aria-label="Search" onSubmit={event => { event.preventDefault(); count.current?.focus(); count.current?.scrollIntoView({ block: "start", behavior: "smooth" }); }}>
        <div className="cl-band-row">
          <label className="cl-band-search">
            <Search size={22} aria-hidden="true" />
            <span className="cl-sr">Search clinicians</span>
            <input type="search" placeholder="Search by name, condition or speciality, e.g. stroke, physiotherapist" value={query} onChange={event => setQuery(event.target.value)} />
          </label>
          <button type="submit" className="cl-band-go">Search</button>
        </div>
        <div className="cl-band-areas" role="group" aria-label="Condition area">
          <span className="cl-label">Condition area</span>
          <button type="button" className="cl-area-pill" aria-pressed={area === "all"} style={hueStyle({ tint: "#EFF1EB", ink: "#285B49" })} onClick={() => pickArea("all")}>
            <span className="cl-area-dot" aria-hidden="true" />All areas
          </button>
          {librarySections.map(item => (
            <button key={item.id} type="button" className="cl-area-pill" aria-pressed={area === item.id} style={hueStyle(item.hue)} onClick={() => pickArea(item.id)}>
              <span className="cl-area-dot" aria-hidden="true" />{item.title}
            </button>
          ))}
          {!section && <Link href="/by-condition" className="cl-band-start">Not sure? Start from your condition →</Link>}
        </div>
        {section && (
          <div className="cl-band-groups" style={hueStyle(section.hue)} role="group" aria-label={`Within ${section.title}`}>
            <p className="cl-groups-title">Within {section.title}</p>
            {section.groups.map(group => (
              <button key={group.id} type="button" className="cl-group-chip" aria-pressed={groups.includes(group.id)} onClick={() => setGroups(toggle(groups, group.id))}>{group.title}</button>
            ))}
            <Link href="/by-condition" className="cl-band-start">Not sure? Start from your condition →</Link>
          </div>
        )}
      </form>

      <div className="cl-layout">
        <aside className={`cl-filters ${filtersOpen ? "is-open" : ""}`} aria-label="Filters">
          {/* On a phone the filters fold away under this button, so the results come first. */}
          <button type="button" className="cl-filters-toggle" aria-expanded={filtersOpen} onClick={() => setFiltersOpen(!filtersOpen)}>
            <SlidersHorizontal size={18} aria-hidden="true" /><span>{filtersOpen ? "Hide filters" : "Filters"}</span>
            {active.length > 0 && <span className="cl-filters-count">{active.length}<span className="cl-sr"> on</span></span>}
          </button>
          <fieldset className="cl-fieldset">
            <legend className="cl-label">Type of clinician</legend>
            {CLINICIAN_TYPES.map(type => (
              <label key={type.id} className="cl-check">
                <input type="checkbox" checked={types.includes(type.id)} onChange={() => setTypes(toggle(types, type.id))} />{type.label}
              </label>
            ))}
          </fieldset>
          <div className="cl-rule" />
          <label className="cl-check">
            <input type="checkbox" checked={soon} onChange={() => setSoon(!soon)} />Free in the next {WINDOW_HOURS} hours
          </label>
        </aside>

        <section className="cl-results" aria-label="Results">
          <div className="cl-results-head">
            <h2 ref={count} tabIndex={-1} className="cl-count" aria-live="polite">{people.length} {people.length === 1 ? "clinician" : "clinicians"}{section && <span className="cl-count-for"> for {(groups.length === 1 ? groupPlace(groups[0])?.group.title : undefined) ?? section.title}</span>}</h2>
            <label className="cl-sort">Sort by
              <select value={sort} onChange={event => setSort(event.target.value as Sort)}>
                <option value="soonest">Soonest available</option>
                <option value="price">Price, lowest first</option>
                <option value="name">Name A–Z</option>
              </select>
            </label>
          </div>

          {active.length > 0 && (
            <div className="cl-active">
              {active.map(item => (
                <button key={item.label} type="button" className="cl-active-chip" onClick={item.remove} aria-label={`Remove filter ${item.label}`}>{item.label}<X size={14} aria-hidden="true" /></button>
              ))}
              <button type="button" className="cl-clear" onClick={clearAll}>Clear all</button>
            </div>
          )}

          {people.length === 0 ? (
            <div className="cl-empty">
              <p className="cl-empty-title">No clinicians match all of these yet</p>
              <p>Try removing a filter.</p>
              <button type="button" className="cl-btn" onClick={clearAll}>Clear filters</button>
            </div>
          ) : (
            <div className="cl-grid">
              {people.map(person => <ClinicianCard key={person.id} clinician={person} now={now} />)}
            </div>
          )}

          <p className="cl-note">Rehyn helps you find people to talk to. It does not replace your GP or your hospital team. If something feels urgent, call 999. The clinicians, prices and experience shown are examples while the directory is being set up.</p>
        </section>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------------------------------- weekly group sessions

/** The weekly group sessions, a page of their own: every upcoming session, and how sessions work. */
function SessionsPage() {
  const now = useMinute();
  useClinicians();
  const sessions = upcomingSessions(useCreatedSessions(), new Date(now));
  return (
    <div className="cl-page">
      <div className="cl-head">
        <div>
          <p className="cl-kicker"><span aria-hidden="true" />Clinicians · Group sessions</p>
          <h1 className="cl-h1" data-page-heading>Weekly group sessions<span aria-hidden="true">.</span></h1>
          <p className="cl-lead">Open sessions where a clinician answers questions from everyone who joins. Listen in with your camera off, or ask your own. Save a place and the room opens here ten minutes before.</p>
        </div>
        <Link href="/urgent" className="cl-urgent-btn"><Clock size={18} aria-hidden="true" />Need someone urgently</Link>
      </div>

      <ClinicianTabs active="sessions" />

      <div className="cl-sessions-layout">
        <section className="cl-sessions-main" aria-label="Sessions">
          {sessions.length === 0
            ? <div className="cl-empty"><p className="cl-empty-title">No sessions are planned yet</p><p>Clinicians set them up in their portal. Check back soon.</p></div>
            : <div className="cl-session-grid">{sessions.map(session => <SessionCard key={session.id} session={session} now={now} />)}</div>}
        </section>
        <aside className="cl-sessions-aside" aria-label="About the sessions">
          <section className="cl-panel">
            <h2 className="cl-h2">How sessions work</h2>
            <ul className="cl-help">
              <li><Check size={18} aria-hidden="true" />Open to everyone on Rehyn; many are free, and each shows its price</li>
              <li><Check size={18} aria-hidden="true" />Keep your camera off if you prefer; only the host is on screen</li>
              <li><Check size={18} aria-hidden="true" />Send a question in advance; the host sees it without your name</li>
              <li><Check size={18} aria-hidden="true" />The room opens here ten minutes before the start</li>
              <li><Check size={18} aria-hidden="true" />General answers only; book a consultation for your own situation</li>
            </ul>
          </section>
          <section className="cl-panel is-tinted">
            <p className="cl-label">Like what you hear?</p>
            <p className="cl-small">Every host also offers private {CONSULTATION_MINUTES}-minute consultations. Their profile has a Book button.</p>
            <Link href="/" className="cl-text-link">Find a clinician →</Link>
          </section>
          <p className="cl-note">Sessions are general information, not advice about you. If something feels urgent, call 999.</p>
        </aside>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------------------------------ start from a condition

const STEPS = ["Your condition", "Kind of help", "Choose a person"];

/** The Library's sections as cards: the arrow opens the directory at that section, a group chip at that group. The
 *  next two steps happen there, with the type-of-clinician filter and the results. */
function ByCondition() {
  return (
    <div className="cl-page">
      <p className="cl-kicker"><span aria-hidden="true" />Clinicians · Step 1 of 3</p>
      <h1 className="cl-h1" data-page-heading>What would you like help with<span aria-hidden="true">?</span></h1>
      <p className="cl-lead">Pick the area closest to what you are living with. We will show the clinicians who work with it, and you can narrow down from there.</p>

      <ol className="cl-steps" aria-label="Steps">
        {STEPS.map((step, index) => (
          <li key={step} aria-current={index === 0 ? "step" : undefined}><span>{index + 1}</span>{step}</li>
        ))}
      </ol>

      <div className="cl-areas">
        {librarySections.map(section => (
          <section key={section.id} className="cl-area-card" style={hueStyle(section.hue)} aria-labelledby={`cl-area-${section.id}`}>
            <div className="cl-area-head">
              <div>
                <p className="cl-area-count">{section.groups.length} groups</p>
                <h2 className="cl-area-title" id={`cl-area-${section.id}`}>{section.title}</h2>
              </div>
              <Link href={directoryHref(section.id)} className="cl-area-go" aria-label={`See all clinicians for ${section.title}`}><ArrowRight size={20} aria-hidden="true" /></Link>
            </div>
            <div className="cl-area-chips">
              {section.groups.map(group => <Link key={group.id} href={directoryHref(section.id, group.id)} className="cl-area-chip">{group.title}</Link>)}
            </div>
            {SEEN_BY[section.id] && <p className="cl-area-who"><strong>Often seen by</strong> · {SEEN_BY[section.id]}</p>}
          </section>
        ))}
      </div>

      <div className="cl-skip">
        <div className="cl-skip-text">
          <h2 className="cl-h2">Already know who you want?</h2>
          <p>Skip ahead and browse everyone with filters.</p>
        </div>
        <Link href="/" className="cl-request">Browse all clinicians</Link>
      </div>
    </div>
  );
}

// -------------------------------------------------------------------------------------------------- the profile

function Profile({ clinician }: { clinician: Clinician }) {
  const section = mainSection(clinician);
  return (
    <div className="cl-page">
      <Link href="/" className="cl-back"><ArrowLeft size={18} aria-hidden="true" />Back to clinicians</Link>
      <div className="cl-profile">
        <div className="cl-profile-main">
          <section className="cl-hero" style={hueStyle(section.hue)}>
            <span className="cl-hero-avatar" aria-hidden="true">{clinician.initials}</span>
            <div className="cl-hero-text">
              <p className="cl-hero-kicker">{section.title}</p>
              <h1 className="cl-hero-name" data-page-heading>{clinician.name}</h1>
              <p className="cl-hero-role">{clinician.role}</p>
              <div className="cl-hero-pills">
                <span className={`cl-pill ${clinician.own && !clinician.verified ? "is-pending" : "is-ok"}`}><ShieldCheck size={14} aria-hidden="true" />{registerText(clinician)}</span>
                <span className="cl-pill"><Check size={14} aria-hidden="true" />{experienceText(clinician)}</span>
                <span className="cl-pill"><Video size={14} aria-hidden="true" />{hoursText(clinician)}</span>
                <span className="cl-pill"><Globe size={14} aria-hidden="true" />{clinician.languages.join(", ")}</span>
              </div>
            </div>
            <div className="cl-hero-side">
              <p className="cl-price is-big"><strong>{priceText(clinician.price)}</strong><span>per consultation</span></p>
              <SaveButton clinician={clinician} labelled />
            </div>
          </section>

          <div className="cl-two">
            <section className="cl-panel">
              <h2 className="cl-h2">Conditions I work with</h2>
              <div className="cl-chips">
                {clinician.conditions.map(([groupId, conditionId]) => {
                  const place = groupPlace(groupId);
                  const condition = place?.group.conditions.find(item => item.id === conditionId);
                  if (!place || !condition) return null;
                  return <Link key={`${groupId}/${conditionId}`} href={`~/library/${groupId}/${conditionId}`} className="cl-chip is-link" style={hueStyle(place.section.hue)}>{condition.title}</Link>;
                })}
              </div>
              <p className="cl-small">Tap a condition to read about it in the Library.</p>
            </section>
            <section className="cl-panel">
              <h2 className="cl-h2">How I can help</h2>
              <ul className="cl-help">
                {clinician.help.map(line => <li key={line}><Check size={18} aria-hidden="true" />{line}</li>)}
              </ul>
            </section>
          </div>

          <section className="cl-panel is-soft">
            <h2 className="cl-h2">About {clinician.first}</h2>
            <p className="cl-about">{clinician.about}</p>
            <div className="cl-tags">
              <span>Video on Rehyn</span>
              <span>{CONSULTATION_MINUTES}-minute consultations</span>
              <span>Payment held until the consultation is finished</span>
              <span>Transcript saved for you both</span>
            </div>
          </section>
        </div>

        <BookConsultation key={clinician.id} clinician={clinician} />
      </div>
    </div>
  );
}

/** A profile by its address, kept up to date with changes made in the portal on this device. */
function ProfileRoute({ id }: { id: string }) {
  const clinician = useClinicians().find(item => item.id === id);
  return clinician ? <Profile key={clinician.id} clinician={clinician} /> : <Missing />;
}

function Missing() {
  return (
    <div className="cl-page cl-missing">
      <h1 className="cl-h1">We couldn't find that clinician</h1>
      <p className="cl-lead">They may have moved, or the link may be out of date.</p>
      <Link href="/" className="cl-btn">Back to clinicians</Link>
    </div>
  );
}

/** A new page starts at the top, or at the part its address names (#book). */
function useScrollOnArrival() {
  const [location] = useLocation();
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const target = hash ? document.getElementById(hash) : null;
    if (target) target.scrollIntoView({ block: "start" });
    else window.scrollTo(0, 0);
  }, [location]);
}

export default function Clinicians() {
  useScrollOnArrival();
  return (
    <RecoveryShell active="Clinicians" dateLabel={todayLabel()} className="clinicians-shell" panel={false}>
      <Switch>
        <Route path="/"><Directory /></Route>
        {/* These come before /:id, so none is taken for a clinician. */}
        <Route path="/by-condition"><ByCondition /></Route>
        <Route path="/sessions"><SessionsPage /></Route>
        <Route path="/consultations"><MyConsultations /></Route>
        <Route path="/urgent"><UrgentStart /></Route>
        <Route path="/urgent/:id">{params => <UrgentStatus id={params.id} />}</Route>
        <Route path="/portal" nest><ClinicianPortal /></Route>
        <Route path="/meet/:room">{params => <MeetPage room={params.room} />}</Route>
        <Route path="/:id">{params => <ProfileRoute id={params.id} />}</Route>
        <Route><Missing /></Route>
      </Switch>
    </RecoveryShell>
  );
}
