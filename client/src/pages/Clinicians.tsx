import { useEffect, useId, useMemo, useState, useSyncExternalStore, type CSSProperties } from "react";
import { Link, Route, Switch, useLocation, useSearch } from "wouter";
import { ArrowLeft, ArrowRight, Bookmark, BookOpen, CalendarDays, Check, ChevronRight, Globe, MapPin, MessageCircle, Search, ShieldCheck, SlidersHorizontal, Video, X } from "lucide-react";
import RecoveryShell from "@/components/RecoveryShell";
import {
  APPOINTMENT_MINUTES, BOOKING_TIMES, CLINICIAN_TYPES, CLINICIANS, CONFIRM_WORKING_DAYS, REGISTER, SEEN_BY, bookingDays, clinicianGroups,
  directoryFilters, directoryHref, findClinician, groupPlace, mainSection, modeText, nextFree, placeText, shortDate, type Clinician,
  type ClinicianType, type MeetMode,
} from "@/content/clinicians";
import { librarySections, type Hue } from "@/content/library";
import { todayLabel } from "./Welcome";
import "./clinicians.css";

// The Clinicians tab, from the design canvas "Rehyn Clinicians Tab": the directory with its filters (artboard 1) at
// /clinicians, starting from a condition (artboard 2) at /clinicians/by-condition, which opens the directory already
// narrowed (?area=…&group=…), and a clinician's profile with the booking panel (artboard 3) at /clinicians/:id. It is a nested
// route, like the Library, so the paths below are relative to it. The people are examples (content/clinicians.ts):
// a request or a message sends nothing yet, and the page says so. Saved clinicians and the questions written for a
// visit are kept on this device only.

/** The section colours, as the two custom properties the styles read. */
const hueStyle = (hue: Hue) => ({ "--cl-tint": hue.tint, "--cl-ink": hue.ink }) as CSSProperties;

// ------------------------------------------------------------------ this device's saved clinicians and questions

const SAVED_KEY = "rehyn.clinicians.saved";
const QUESTIONS_KEY = "rehyn.clinicians.questions";
const listeners = new Set<() => void>();

function readJson<T>(key: string, fallback: T): T {
  try { const raw = window.localStorage.getItem(key); return raw ? (JSON.parse(raw) as T) : fallback; } catch { return fallback; }
}
function writeJson(key: string, value: unknown) {
  try { window.localStorage.setItem(key, JSON.stringify(value)); } catch { /* Kept for this visit only. */ }
}

let saved: string[] = typeof window === "undefined" ? [] : readJson<string[]>(SAVED_KEY, []);
const savedStore = {
  subscribe: (listener: () => void) => { listeners.add(listener); return () => { listeners.delete(listener); }; },
  get: () => saved,
  toggle(id: string) {
    saved = saved.includes(id) ? saved.filter(item => item !== id) : [...saved, id];
    writeJson(SAVED_KEY, saved);
    listeners.forEach(listener => listener());
  },
};
const useSaved = () => useSyncExternalStore(savedStore.subscribe, savedStore.get, () => [] as string[]);

/** Save a clinician to come back to: a bookmark on the card, "Save" on the profile. */
function SaveButton({ clinician, labelled = false }: { clinician: Clinician; labelled?: boolean }) {
  const on = useSaved().includes(clinician.id);
  return (
    <button type="button" className={labelled ? "cl-save-wide" : "cl-save"} aria-pressed={on} onClick={() => savedStore.toggle(clinician.id)}
      aria-label={labelled ? undefined : `${on ? "Saved" : "Save"} ${clinician.name}`}>
      <Bookmark size={18} fill={on ? "currentColor" : "none"} aria-hidden="true" />{labelled && <span>{on ? "Saved" : "Save"}</span>}
    </button>
  );
}

// ------------------------------------------------------------------------------------------------ the directory

type Area = "all" | string;
type Mode = "any" | MeetMode;
type Sort = "soonest" | "name";

const surname = (name: string) => name.replace(/^Dr\.? /, "");

function Directory() {
  const start = directoryFilters(useSearch());
  const [area, setArea] = useState<Area>(start.area);
  const [groups, setGroups] = useState<string[]>(start.groups);
  const [types, setTypes] = useState<ClinicianType[]>([]);
  const [mode, setMode] = useState<Mode>("any");
  const [query, setQuery] = useState("");
  const [near, setNear] = useState("");
  const [sort, setSort] = useState<Sort>("soonest");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const section = librarySections.find(item => item.id === area);
  const toggle = <T,>(list: T[], value: T) => (list.includes(value) ? list.filter(item => item !== value) : [...list, value]);
  const pickArea = (id: Area) => { setArea(id); setGroups([]); };
  const clearAll = () => { setArea("all"); setGroups([]); setTypes([]); setMode("any"); setQuery(""); setNear(""); };

  const people = useMemo(() => {
    const words = query.trim().toLowerCase();
    const town = near.trim().toLowerCase();
    return CLINICIANS.filter(person => {
      const places = clinicianGroups(person);
      if (area !== "all" && !places.some(place => place.section.id === area)) return false;
      if (groups.length && !places.some(place => groups.includes(place.group.id))) return false;
      if (types.length && !types.includes(person.type)) return false;
      if (mode !== "any" && !person.modes.includes(mode)) return false;
      // Near a town: the people who see patients there, and anyone by video (unless only in person was chosen).
      if (town && !(person.town?.toLowerCase().includes(town) || (mode !== "person" && person.modes.includes("video")))) return false;
      if (words) {
        const text = `${person.name} ${person.role} ${places.map(place => place.group.title).join(" ")}`.toLowerCase();
        if (!text.includes(words)) return false;
      }
      return true;
    }).sort((a, b) => (sort === "name" ? surname(a.name).localeCompare(surname(b.name)) : a.firstFree - b.firstFree));
  }, [area, groups, types, mode, query, near, sort]);

  const active: { label: string; remove: () => void }[] = [];
  if (section) active.push({ label: section.title, remove: () => pickArea("all") });
  for (const id of groups) active.push({ label: groupPlace(id)?.group.title ?? id, remove: () => setGroups(toggle(groups, id)) });
  for (const id of types) active.push({ label: CLINICIAN_TYPES.find(type => type.id === id)!.label, remove: () => setTypes(toggle(types, id)) });
  if (mode !== "any") active.push({ label: mode === "video" ? "Video" : "In person", remove: () => setMode("any") });
  if (near.trim()) active.push({ label: `Near ${near.trim()}`, remove: () => setNear("") });

  return (
    <div className="cl-page">
      <div className="cl-intro">
        <div className="cl-intro-text">
          <p className="cl-kicker"><span aria-hidden="true" />Care that fits you</p>
          <h1 className="cl-h1" data-page-heading>Find a clinician<span aria-hidden="true">.</span></h1>
          <p className="cl-lead">Browse people who work with the conditions in our Library. Narrow it down by condition, the kind of care you need, and how you would like to meet.</p>
        </div>
        <Link href="/by-condition" className="cl-start">
          <span className="cl-start-icon"><BookOpen size={20} aria-hidden="true" /></span>
          <span className="cl-start-text"><strong>Not sure who you need?</strong><span>Start from your condition</span></span>
          <ChevronRight size={18} aria-hidden="true" />
        </Link>
      </div>

      <div className="cl-layout">
        <aside className={`cl-filters ${filtersOpen ? "is-open" : ""}`} aria-label="Filters">
          {/* On a phone the filters fold away under this button, so the results come first. */}
          <button type="button" className="cl-filters-toggle" aria-expanded={filtersOpen} onClick={() => setFiltersOpen(!filtersOpen)}>
            <SlidersHorizontal size={18} aria-hidden="true" /><span>{filtersOpen ? "Hide filters" : "Filters"}</span>
            {active.length > 0 && <span className="cl-filters-count">{active.length}<span className="cl-sr"> on</span></span>}
          </button>
          <div className="cl-field">
            <label htmlFor="cl-search" className="cl-label">Search</label>
            <div className="cl-input"><Search size={18} aria-hidden="true" />
              <input id="cl-search" type="search" placeholder="Name, condition or speciality" value={query} onChange={event => setQuery(event.target.value)} />
            </div>
          </div>
          <div className="cl-rule" />
          <fieldset className="cl-fieldset">
            <legend className="cl-label">Condition area</legend>
            <button type="button" className="cl-area" aria-pressed={area === "all"} style={hueStyle({ tint: "#EFF1EB", ink: "#285B49" })} onClick={() => pickArea("all")}>
              <span className="cl-area-dot" aria-hidden="true" /><span>All areas</span>
            </button>
            {librarySections.map(item => (
              <button key={item.id} type="button" className="cl-area" aria-pressed={area === item.id} style={hueStyle(item.hue)} onClick={() => pickArea(item.id)}>
                <span className="cl-area-dot" aria-hidden="true" /><span>{item.title}</span>
              </button>
            ))}
          </fieldset>
          {section && (
            <div className="cl-groups" style={hueStyle(section.hue)}>
              <p className="cl-groups-title">Within {section.title}</p>
              <div className="cl-group-chips">
                {section.groups.map(group => (
                  <button key={group.id} type="button" className="cl-group-chip" aria-pressed={groups.includes(group.id)} onClick={() => setGroups(toggle(groups, group.id))}>{group.title}</button>
                ))}
              </div>
            </div>
          )}
          <div className="cl-rule" />
          <fieldset className="cl-fieldset">
            <legend className="cl-label">Type of clinician</legend>
            {CLINICIAN_TYPES.map(type => (
              <label key={type.id} className="cl-check">
                <input type="checkbox" checked={types.includes(type.id)} onChange={() => setTypes(toggle(types, type.id))} />{type.label}
              </label>
            ))}
          </fieldset>
          <div className="cl-rule" />
          <div className="cl-field">
            <p className="cl-label" id="cl-meet">How you meet</p>
            <div className="cl-segment is-three" role="group" aria-labelledby="cl-meet">
              {(["any", "video", "person"] as Mode[]).map(item => (
                <button key={item} type="button" aria-pressed={mode === item} onClick={() => setMode(item)}>{item === "any" ? "Any" : item === "video" ? "Video" : "In person"}</button>
              ))}
            </div>
          </div>
          <div className="cl-field">
            <label htmlFor="cl-near" className="cl-label">Near</label>
            <div className="cl-input"><MapPin size={18} aria-hidden="true" />
              <input id="cl-near" type="text" placeholder="Town or city" value={near} onChange={event => setNear(event.target.value)} />
            </div>
          </div>
        </aside>

        <section className="cl-results" aria-label="Results">
          <div className="cl-results-head">
            <h2 className="cl-count" aria-live="polite">{people.length} {people.length === 1 ? "clinician" : "clinicians"}</h2>
            <label className="cl-sort">Sort by
              <select value={sort} onChange={event => setSort(event.target.value as Sort)}>
                <option value="soonest">Soonest available</option>
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
              <p>Try removing a filter, or choose video so you can see people further away.</p>
              <button type="button" className="cl-btn" onClick={clearAll}>Clear filters</button>
            </div>
          ) : (
            <div className="cl-grid">
              {people.map(person => <ClinicianCard key={person.id} clinician={person} />)}
            </div>
          )}

          <p className="cl-note">Rehyn helps you find people to talk to. It does not replace your GP or your hospital team. If something feels urgent, call 999. The clinicians shown are examples while the directory is being set up.</p>
        </section>
      </div>
    </div>
  );
}

function ClinicianCard({ clinician }: { clinician: Clinician }) {
  const places = clinicianGroups(clinician);
  return (
    <article className="cl-card">
      <div className="cl-card-top">
        <span className="cl-avatar" aria-hidden="true" style={hueStyle(mainSection(clinician).hue)}>{clinician.initials}</span>
        <div className="cl-card-who">
          <h3 className="cl-card-name">{clinician.name}</h3>
          <p className="cl-card-role">{clinician.role}</p>
          <p className="cl-registered"><ShieldCheck size={14} aria-hidden="true" />Registered</p>
        </div>
        <SaveButton clinician={clinician} />
      </div>
      <div className="cl-chips">
        {places.map(place => <span key={place.group.id} className="cl-chip" style={hueStyle(place.section.hue)}>{place.group.title}</span>)}
      </div>
      <ul className="cl-facts">
        <li><MapPin size={16} aria-hidden="true" />{placeText(clinician)}</li>
        <li><Video size={16} aria-hidden="true" />{modeText(clinician.modes)}</li>
        <li><CalendarDays size={16} aria-hidden="true" />Next available <strong>{shortDate(nextFree(clinician))}</strong></li>
      </ul>
      <div className="cl-card-actions">
        <Link href={`/${clinician.id}`} className="cl-btn">View profile</Link>
        <Link href={`/${clinician.id}#book`} className="cl-btn is-light">Book a visit</Link>
      </div>
    </article>
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
  const days = useMemo(() => bookingDays(clinician), [clinician]);
  const [mode, setMode] = useState<MeetMode>(clinician.modes[0]);
  const [day, setDay] = useState(0);
  const [time, setTime] = useState(BOOKING_TIMES[1]);
  const [notice, setNotice] = useState<string | null>(null);
  const [asking, setAsking] = useState(false);
  const [questions, setQuestions] = useState(() => readJson<Record<string, string>>(QUESTIONS_KEY, {})[clinician.id] ?? "");
  const questionsId = useId();
  const keepQuestions = (text: string) => {
    setQuestions(text);
    writeJson(QUESTIONS_KEY, { ...readJson<Record<string, string>>(QUESTIONS_KEY, {}), [clinician.id]: text });
  };

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
                <span className="cl-pill is-ok"><ShieldCheck size={14} aria-hidden="true" />Registered with the {REGISTER[clinician.type]}</span>
                <span className="cl-pill"><Globe size={14} aria-hidden="true" />{clinician.languages.join(", ")}</span>
                <span className="cl-pill"><MapPin size={14} aria-hidden="true" />{clinician.town ? `${clinician.town} · ${modeText(clinician.modes).toLowerCase()}` : "Online across the UK · video"}</span>
              </div>
            </div>
            <SaveButton clinician={clinician} labelled />
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
              <span>{modeText(clinician.modes)}</span>
              <span>First appointment {APPOINTMENT_MINUTES} minutes</span>
              <span>Replies within {CONFIRM_WORKING_DAYS} working days</span>
            </div>
          </section>

          <section className="cl-ready">
            <span className="cl-ready-icon"><MessageCircle size={22} aria-hidden="true" /></span>
            <div className="cl-ready-text">
              <p className="cl-ready-title">Getting ready for your visit</p>
              <p>Write down your questions now. We will keep them with this appointment so you can share them on the day.</p>
            </div>
            <button type="button" className="cl-ready-btn" aria-expanded={asking} aria-controls={questionsId} onClick={() => setAsking(!asking)}>{asking ? "Done" : questions ? "Edit my questions" : "Add my questions"}</button>
            {asking && (
              <label className="cl-questions" id={questionsId}>
                <span className="cl-sr">Your questions for {clinician.first}</span>
                <textarea value={questions} rows={4} placeholder={"What would you like to ask?\nOne question on each line."} onChange={event => keepQuestions(event.target.value)} />
                <span className="cl-questions-note">Kept on this device.</span>
              </label>
            )}
          </section>
        </div>

        <aside id="book" className="cl-book" aria-label="Book a visit">
          <h2 className="cl-book-title">Book a visit</h2>
          <div className={`cl-segment ${clinician.modes.length > 1 ? "is-two" : ""}`} role="group" aria-label="How you meet">
            {clinician.modes.map(item => (
              <button key={item} type="button" aria-pressed={mode === item} onClick={() => setMode(item)}>
                {item === "video" ? <Video size={16} aria-hidden="true" /> : <MapPin size={16} aria-hidden="true" />}{item === "video" ? "Video" : "In person"}
              </button>
            ))}
          </div>
          <div className="cl-field">
            <p className="cl-label" id="cl-day">Choose a day</p>
            <div className="cl-days" role="group" aria-labelledby="cl-day">
              {days.map((date, index) => (
                <button key={date.toISOString()} type="button" aria-pressed={day === index} onClick={() => setDay(index)} aria-label={date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}>
                  <span>{date.toLocaleDateString("en-GB", { weekday: "short" }).toUpperCase()}</span><strong>{date.getDate()}</strong>
                </button>
              ))}
            </div>
          </div>
          <div className="cl-field">
            <p className="cl-label" id="cl-time">Choose a time</p>
            <div className="cl-times" role="group" aria-labelledby="cl-time">
              {BOOKING_TIMES.map(item => <button key={item} type="button" aria-pressed={time === item} onClick={() => setTime(item)}>{item}</button>)}
            </div>
          </div>
          <div className="cl-summary">
            <span><strong>{shortDate(days[day])}, {time}</strong> · {mode === "video" ? "video" : "in person"} · {APPOINTMENT_MINUTES} minutes</span>
            <span>The fee and whether an NHS referral is needed are confirmed with you first.</span>
          </div>
          <button type="button" className="cl-request" onClick={() => setNotice(`Thank you. Booking opens soon: ${clinician.first} is an example profile for now, so this request was not sent.`)}>Request this appointment</button>
          <button type="button" className="cl-btn is-light" onClick={() => setNotice(`Messages to clinicians open soon: ${clinician.first} is an example profile for now, so nothing was sent.`)}>Send a message first</button>
          {notice && <p className="cl-notice" role="status">{notice}</p>}
          <p className="cl-small">{clinician.first} will confirm within {CONFIRM_WORKING_DAYS} working days. Nothing is booked until then.</p>
        </aside>
      </div>
    </div>
  );
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
        {/* Before /:id, so it is not taken for a clinician. */}
        <Route path="/by-condition"><ByCondition /></Route>
        <Route path="/:id">{params => { const clinician = findClinician(params.id); return clinician ? <Profile key={clinician.id} clinician={clinician} /> : <Missing />; }}</Route>
        <Route><Missing /></Route>
      </Switch>
    </RecoveryShell>
  );
}
