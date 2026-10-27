import { useSyncExternalStore } from "react";
import { Link } from "wouter";
import { Bookmark, CalendarDays, Check, ShieldCheck, Video } from "lucide-react";
import { clinicianGroups, experienceText, hoursText, mainSection, nextFree, priceText, whenText, type Clinician } from "@/content/clinicians";
import { hueStyle } from "./parts";

// A clinician's card in the directory (and its live preview in the portal's profile editor), and the Save bookmark.

const SAVED_KEY = "rehyn.clinicians.saved";
const listeners = new Set<() => void>();

function readSaved(): string[] {
  try { const raw = window.localStorage.getItem(SAVED_KEY); return raw ? (JSON.parse(raw) as string[]) : []; } catch { return []; }
}

let saved: string[] = typeof window === "undefined" ? [] : readSaved();
const savedStore = {
  subscribe: (listener: () => void) => { listeners.add(listener); return () => { listeners.delete(listener); }; },
  get: () => saved,
  toggle(id: string) {
    saved = saved.includes(id) ? saved.filter(item => item !== id) : [...saved, id];
    try { window.localStorage.setItem(SAVED_KEY, JSON.stringify(saved)); } catch { /* Kept for this visit only. */ }
    listeners.forEach(listener => listener());
  },
};
const useSaved = () => useSyncExternalStore(savedStore.subscribe, savedStore.get, () => [] as string[]);

/** Save a clinician to come back to: a bookmark on the card, "Save" on the profile. */
export function SaveButton({ clinician, labelled = false }: { clinician: Clinician; labelled?: boolean }) {
  const on = useSaved().includes(clinician.id);
  return (
    <button type="button" className={labelled ? "cl-save-wide" : "cl-save"} aria-pressed={on} onClick={() => savedStore.toggle(clinician.id)}
      aria-label={labelled ? undefined : `${on ? "Saved" : "Save"} ${clinician.name}`}>
      <Bookmark size={18} fill={on ? "currentColor" : "none"} aria-hidden="true" />{labelled && <span>{on ? "Saved" : "Save"}</span>}
    </button>
  );
}

/** `preview`: drawn in the portal, with no links out. */
export default function ClinicianCard({ clinician, now, preview = false }: { clinician: Clinician; now: Date; preview?: boolean }) {
  const places = clinicianGroups(clinician);
  const first = nextFree(clinician, now);
  const pending = clinician.own && !clinician.verified;
  return (
    <article className="cl-card">
      <div className="cl-card-top">
        <span className="cl-avatar" aria-hidden="true" style={hueStyle(mainSection(clinician).hue)}>{clinician.initials}</span>
        <div className="cl-card-who">
          <h3 className="cl-card-name">{clinician.name}</h3>
          <p className="cl-card-role">{clinician.role}</p>
          <p className={`cl-registered ${pending ? "is-pending" : ""}`}><ShieldCheck size={14} aria-hidden="true" />{pending ? "Registration check pending" : "Registered"}</p>
        </div>
        <p className="cl-price"><strong>{priceText(clinician.price)}</strong><span>per consultation</span></p>
      </div>
      {places.length > 0 && (
        <div className="cl-chips">
          {places.map(place => <span key={place.group.id} className="cl-chip" style={hueStyle(place.section.hue)}>{place.group.title}</span>)}
        </div>
      )}
      <ul className="cl-facts">
        <li><Check size={16} aria-hidden="true" />{experienceText(clinician)}</li>
        <li><Video size={16} aria-hidden="true" />{hoursText(clinician)} · video on Rehyn</li>
        <li><CalendarDays size={16} aria-hidden="true" />Next free <strong>{first ? whenText(first, now) : "in a few weeks"}</strong></li>
      </ul>
      {preview ? (
        <div className="cl-card-actions" aria-hidden="true"><span className="cl-btn">View profile</span><span className="cl-btn is-light">Book a consultation</span></div>
      ) : (
        <div className="cl-card-actions">
          <Link href={`/${clinician.id}`} className="cl-btn">View profile</Link>
          <Link href={`/${clinician.id}#book`} className="cl-btn is-light">Book a consultation</Link>
          <SaveButton clinician={clinician} />
        </div>
      )}
    </article>
  );
}
