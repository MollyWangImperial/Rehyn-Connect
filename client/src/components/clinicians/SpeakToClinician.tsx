import { Link, useLocation } from "wouter";
import { ArrowRight, Stethoscope } from "lucide-react";
import { directoryHref } from "@/content/clinicians";
import { findCondition, findSection } from "@/lib/library";
import "./speak-to-clinician.css";

// "Speak to a clinician", at the foot of every Library page. On a section or a condition it opens the Clinicians tab
// already narrowed to it; elsewhere, the whole directory. `location` is the Library's own path (it is a nested route).

/** Where the button leads from a Library path: "/stroke/ischaemic" → the directory narrowed to Stroke. */
export function clinicianHref(location: string) {
  const [first, second] = location.split("/").filter(Boolean).map(decodeURIComponent);
  const place = second ? findCondition(first, second) : undefined;
  if (place) return `~/clinicians${directoryHref(place.section.id, place.group.id).slice(1)}`;
  const section = first && !second ? findSection(first) : undefined;
  if (section) return `~/clinicians${directoryHref(section.id).slice(1)}`;
  return "~/clinicians";
}

export default function SpeakToClinician() {
  const [location] = useLocation();
  const narrowed = clinicianHref(location) !== "~/clinicians";
  return (
    <aside className="speak-clinician" aria-label="Speak to a clinician">
      <span className="speak-clinician-icon" aria-hidden="true"><Stethoscope size={22} /></span>
      <p className="speak-clinician-text">
        <strong>Want to talk it through with someone?</strong>
        <span>{narrowed ? "Speak to a clinician who works with conditions like this one, by video on Rehyn." : "Speak to a clinician by video on Rehyn."}</span>
      </p>
      <Link href={clinicianHref(location)} className="speak-clinician-button">Speak to a clinician<ArrowRight size={18} aria-hidden="true" /></Link>
    </aside>
  );
}
