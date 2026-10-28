import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Link, useLocation } from "wouter";
import { ArrowLeft, ArrowRight, BellRing, Globe, ShieldCheck, Video } from "lucide-react";
import { URGENT_FEE, WINDOW_HOURS, clinicianGroups, experienceText, findClinician, hoursText, mainSection, priceText, professionalTitle, urgentPrice } from "@/content/clinicians";
import { registerText, useClinicians } from "@/lib/clinician-portal";
import {
  URGENT_WAIT_MS, alerted, cancel, confirmUrgent, escalate, findConsultation, nextChoice, saveConsultation, startUrgent, updateConsultation,
  urgentChoices, useConsultations, waitedTooLong, type Consultation,
} from "@/lib/consultations";
import { EmergencyNote, PreviewNote, hueStyle } from "./parts";

// An urgent consultation (/clinicians/urgent): every clinician free in the next 48 hours is alerted, the first to answer
// is matched, and the patient can move on (swipe, or "Next") to the next free clinician. Then the payment is held and
// the call starts. If no one answers in five minutes, the Rehyn team is told on Slack (server/urgent-alert.ts).

export function UrgentStart() {
  const [, navigate] = useLocation();
  const [questions, setQuestions] = useState("");
  useClinicians();
  const free = alerted().length;
  const alert = () => {
    const consultation = startUrgent(questions);
    saveConsultation(consultation);
    navigate(`/urgent/${consultation.id}`);
  };
  return (
    <div className="cl-page cl-narrow">
      <Link href="/" className="cl-back"><ArrowLeft size={18} aria-hidden="true" />Back to clinicians</Link>
      <p className="cl-kicker"><span aria-hidden="true" />Urgent consultation</p>
      <h1 className="cl-h1" data-page-heading>Talk to someone today<span aria-hidden="true">.</span></h1>
      <p className="cl-lead">We'll alert the {free} clinicians who are free in the next {WINDOW_HOURS} hours. The first to answer can see you by video, and you can choose someone else if they're not right for you. You only pay once you've chosen.</p>
      <EmergencyNote />
      <label className="cl-ask">
        <span className="cl-ask-title">What do you need help with?</span>
        <textarea value={questions} rows={5} onChange={event => setQuestions(event.target.value)} placeholder={"A few words help the clinicians who answer. For example:\nMy blood pressure readings have been high since yesterday."} />
        <span className="cl-small">Only the clinician you choose reads this.</span>
      </label>
      <button type="button" className="cl-request" onClick={alert}><BellRing size={18} aria-hidden="true" />Alert clinicians now</button>
    </div>
  );
}

/** "4:59". */
const clock = (ms: number) => { const seconds = Math.max(0, Math.ceil(ms / 1000)); return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`; };

/** Tell the Rehyn team once, when an urgent request has waited five minutes. */
function useEscalation(consultation: Consultation | undefined, now: number) {
  const told = useRef<string | null>(null);
  useEffect(() => {
    if (!consultation || !waitedTooLong(consultation, now) || told.current === consultation.id) return;
    told.current = consultation.id;
    updateConsultation(consultation.id, item => escalate(item));
    fetch("/api/clinicians/urgent-alert", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ref: consultation.ref }) }).catch(() => undefined);
  }, [consultation, now]);
}

function MatchCard({ consultation }: { consultation: Consultation }) {
  const clinician = findClinician(consultation.clinicianId)!;
  const choices = urgentChoices(consultation);
  const answered = consultation.answered.includes(clinician.id);
  const [drag, setDrag] = useState<{ start: number; dx: number } | null>(null);
  const next = () => updateConsultation(consultation.id, item => nextChoice(item));
  const down = (event: PointerEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("button, a")) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setDrag({ start: event.clientX, dx: 0 });
  };
  const move = (event: PointerEvent<HTMLElement>) => { if (drag) setDrag({ ...drag, dx: event.clientX - drag.start }); };
  const up = () => { if (drag && Math.abs(drag.dx) > 90 && choices.length > 1) next(); setDrag(null); };
  const section = mainSection(clinician);
  return (
    <>
      <article className="cl-match" style={{ ...hueStyle(section.hue), transform: drag ? `translateX(${drag.dx}px) rotate(${drag.dx / 30}deg)` : undefined }}
        onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={() => setDrag(null)} aria-live="polite">
        <p className="cl-match-kicker">{answered ? "Answered your request" : `Free in the next ${WINDOW_HOURS} hours`}</p>
        <div className="cl-match-top">
          <span className="cl-hero-avatar" aria-hidden="true">{clinician.initials}</span>
          <div>
            <h2 className="cl-match-name">{clinician.name}</h2>
            <p className="cl-hero-role">{professionalTitle(clinician)}</p>
          </div>
          <p className="cl-price is-big"><strong>{priceText(urgentPrice(clinician))}</strong><span>30 minutes · includes £{URGENT_FEE} urgent fee</span></p>
        </div>
        <ul className="cl-match-facts">
          <li><ShieldCheck size={16} aria-hidden="true" />{experienceText(clinician)} · {registerText(clinician).replace(/^R/, "r")}</li>
          <li><Video size={16} aria-hidden="true" />{hoursText(clinician)}</li>
          <li><Globe size={16} aria-hidden="true" />{clinician.languages.join(", ")}</li>
        </ul>
        <div className="cl-chips">{clinicianGroups(clinician).map(place => <span key={place.group.id} className="cl-chip" style={hueStyle(place.section.hue)}>{place.group.title}</span>)}</div>
      </article>
      <div className="cl-match-actions">
        <button type="button" className="cl-request" onClick={() => updateConsultation(consultation.id, item => confirmUrgent(item))}>Continue with {clinician.first} · hold {priceText(urgentPrice(clinician))}</button>
        {choices.length > 1 && <button type="button" className="cl-btn is-light" onClick={next}>Next available clinician<ArrowRight size={18} aria-hidden="true" /></button>}
      </div>
      <p className="cl-small">{choices.length > 1 ? `Not the right fit? Swipe the card, or tap Next, to see the next of ${choices.length} clinicians free in the next ${WINDOW_HOURS} hours. ` : ""}Your payment is held, not taken, until the consultation is finished.</p>
    </>
  );
}

export function UrgentStatus({ id }: { id: string }) {
  const consultation = findConsultation(useConsultations(), id);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const timer = window.setInterval(() => setNow(Date.now()), 1000); return () => window.clearInterval(timer); }, []);
  useEscalation(consultation, now);
  useClinicians();

  if (!consultation || !consultation.urgent) {
    return (
      <div className="cl-page cl-missing">
        <h1 className="cl-h1">We couldn't find that request</h1>
        <p className="cl-lead">Requests are kept on the device they were made on.</p>
        <Link href="/consultations" className="cl-btn">My consultations</Link>
      </div>
    );
  }
  const clinician = findClinician(consultation.clinicianId);
  const alertedCount = alerted(new Date(now)).length;
  return (
    <div className="cl-page cl-narrow">
      <Link href="/consultations" className="cl-back"><ArrowLeft size={18} aria-hidden="true" />My consultations</Link>
      <p className="cl-kicker"><span aria-hidden="true" />Urgent consultation · ref {consultation.ref}</p>

      {consultation.status === "matching" && <>
        <h1 className="cl-h1" data-page-heading>Alerting clinicians<span aria-hidden="true">…</span></h1>
        <div className="cl-waiting" role="status">
          <span className="cl-pulse" aria-hidden="true" />
          <p><strong>{alertedCount} clinicians free in the next {WINDOW_HOURS} hours have been alerted.</strong> The first to answer appears here. If no one answers in {clock(URGENT_WAIT_MS - (now - (consultation.alertedAt ?? now)))}, we'll tell the Rehyn team so they can help.</p>
        </div>
        <PreviewNote>Preview: the clinicians are examples, so answer it yourself as one of them in the <a href="/clinicians/portal" target="_blank" rel="noopener">clinician portal</a> (it opens in a new tab).</PreviewNote>
      </>}

      {consultation.status === "escalated" && <>
        <h1 className="cl-h1" data-page-heading>No clinician has answered yet</h1>
        <p className="cl-lead">We've told the Rehyn team about your request (ref {consultation.ref}), and they will help. A clinician may still answer here in the meantime.</p>
        <PreviewNote>Preview: the team is told on Slack once the Slack connection is switched on. You can still answer as a clinician in the <a href="/clinicians/portal" target="_blank" rel="noopener">clinician portal</a>.</PreviewNote>
      </>}

      {consultation.status === "matched" && clinician && <>
        <h1 className="cl-h1" data-page-heading>A clinician can see you</h1>
        <MatchCard consultation={consultation} />
      </>}

      {consultation.status === "scheduled" && clinician && <>
        <h1 className="cl-h1" data-page-heading>You're with {clinician.first}</h1>
        <p className="cl-lead">{priceText(consultation.price)} is held on your card and taken only when {clinician.first} finishes the consultation.</p>
        <Link href={`/meet/${consultation.room}`} className="cl-request"><Video size={18} aria-hidden="true" />Join the call now</Link>
      </>}

      {(consultation.status === "done" || consultation.status === "cancelled") && <>
        <h1 className="cl-h1" data-page-heading>{consultation.status === "done" ? "Consultation finished" : "Request cancelled"}</h1>
        <Link href="/consultations" className="cl-btn">My consultations</Link>
      </>}

      {["matching", "matched", "escalated"].includes(consultation.status) && <>
        <EmergencyNote />
        <button type="button" className="cl-clear" onClick={() => updateConsultation(consultation.id, item => cancel(item))}>Cancel this request</button>
      </>}
    </div>
  );
}
