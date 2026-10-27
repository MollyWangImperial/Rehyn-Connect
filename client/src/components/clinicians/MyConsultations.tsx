import { useEffect } from "react";
import { Link } from "wouter";
import { Video } from "lucide-react";
import ClinicianTabs from "./ClinicianTabs";
import { findClinician, mainSection, whenText } from "@/content/clinicians";
import { useClinicians } from "@/lib/clinician-portal";
import { cancel, expire, hasExpired, isOpen, pickSuggested, updateConsultation, useConsultations, type Consultation } from "@/lib/consultations";
import { PreviewNote, Timeline, Transcript, hueStyle, paymentText } from "./parts";

// The patient's consultations (/clinicians/consultations): what's waiting, the call when it's time, and afterwards the
// transcript and the payment, all kept on this device.

const STATUS: Record<Consultation["status"], string> = {
  requested: "Waiting for the clinician to choose a time",
  scheduled: "Confirmed",
  declined: "The clinician couldn't make these times",
  matching: "Alerting clinicians",
  matched: "A clinician answered: choose who you'd like",
  escalated: "The Rehyn team has been told",
  done: "Finished",
  cancelled: "Cancelled",
};

function Item({ consultation }: { consultation: Consultation }) {
  const clinician = findClinician(consultation.clinicianId);
  const urgentOpen = consultation.urgent && ["matching", "matched", "escalated"].includes(consultation.status);
  return (
    <article className="cl-item" style={clinician ? hueStyle(mainSection(clinician).hue) : undefined}>
      <div className="cl-item-top">
        <span className="cl-avatar" aria-hidden="true">{clinician?.initials ?? "…"}</span>
        <div className="cl-card-who">
          <h2 className="cl-card-name">{clinician ? clinician.name : "Finding a clinician"}</h2>
          <p className="cl-card-role">{consultation.urgent ? "Urgent · " : ""}{STATUS[consultation.status]}</p>
        </div>
        <span className="cl-ref">Ref {consultation.ref}</span>
      </div>
      <ul className="cl-facts">
        {consultation.at && <li><strong>{whenText(new Date(consultation.at))}</strong> · 30 minutes by video</li>}
        {consultation.status === "requested" && <li>Your times: {consultation.times.map(at => whenText(new Date(at))).join("; ")}</li>}
        <li>{paymentText(consultation)}</li>
      </ul>
      {consultation.status === "requested" && consultation.suggested?.length ? (
        <div className="cl-suggested">
          <p><strong>{clinician?.first ?? "The clinician"} can't make your times, and suggested these instead.</strong> Pick one to confirm it.</p>
          <div className="cl-times">{consultation.suggested.filter(at => at > Date.now()).map(at => <button key={at} type="button" onClick={() => updateConsultation(consultation.id, item => pickSuggested(item, at))}>{whenText(new Date(at))}</button>)}</div>
        </div>
      ) : null}
      {consultation.summary && <p className="cl-summary-note"><strong>{clinician?.first ?? "Your clinician"}'s summary</strong>{consultation.summary}{consultation.followUp ? ` ${clinician?.first ?? "They"} suggested a follow-up consultation.` : ""}</p>}
      {!consultation.summary && consultation.followUp && <p className="cl-summary-note">{clinician?.first ?? "Your clinician"} suggested a follow-up consultation.</p>}
      {consultation.followUp && clinician && <Link href={`/${clinician.id}#book`} className="cl-link">Book a follow-up with {clinician.first}</Link>}
      {consultation.questions && <details className="cl-qs"><summary>Your questions</summary><p>{consultation.questions}</p></details>}
      <Timeline consultation={consultation} />
      {consultation.status === "done" && <Transcript lines={consultation.transcript} name={`Rehyn consultation ${consultation.ref}`} />}
      <div className="cl-card-actions">
        {consultation.status === "scheduled" && <Link href={`/meet/${consultation.room}`} className="cl-btn"><Video size={18} aria-hidden="true" />Join the call</Link>}
        {urgentOpen && <Link href={`/urgent/${consultation.id}`} className="cl-btn">Open</Link>}
        {isOpen(consultation) && <button type="button" className="cl-btn is-light" onClick={() => updateConsultation(consultation.id, item => cancel(item))}>Cancel</button>}
      </div>
    </article>
  );
}

export default function MyConsultations() {
  const list = useConsultations();
  useClinicians();
  // Requests whose times have all passed end by themselves, and their holds are released.
  useEffect(() => { const now = Date.now(); list.filter(item => hasExpired(item, now)).forEach(item => updateConsultation(item.id, current => expire(current, now))); }, [list]);
  const open = list.filter(isOpen);
  const past = list.filter(item => !isOpen(item));
  return (
    <div className="cl-page cl-narrow">
      <p className="cl-kicker"><span aria-hidden="true" />Your care</p>
      <h1 className="cl-h1" data-page-heading>My consultations<span aria-hidden="true">.</span></h1>
      <ClinicianTabs active="consultations" />
      <PreviewNote />
      {list.length === 0 && (
        <div className="cl-empty">
          <p className="cl-empty-title">No consultations yet</p>
          <p>Find a clinician and book a consultation by video.</p>
          <Link href="/" className="cl-btn">Find a clinician</Link>
        </div>
      )}
      {open.length > 0 && <section className="cl-list" aria-label="Coming up">{open.map(item => <Item key={item.id} consultation={item} />)}</section>}
      {past.length > 0 && <>
        <h2 className="cl-h2 cl-list-title">Past</h2>
        <section className="cl-list" aria-label="Past">{past.map(item => <Item key={item.id} consultation={item} />)}</section>
      </>}
    </div>
  );
}
