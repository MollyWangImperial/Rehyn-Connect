import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CalendarCheck, Clock, CreditCard, Zap } from "lucide-react";
import { CONSULTATION_MINUTES, WINDOW_HOURS, clockText, dayText, freeTimes, priceText, whenText, type Clinician } from "@/content/clinicians";
import { busyTimes, request, saveConsultation, useConsultations } from "@/lib/consultations";
import { EmergencyNote, PreviewNote } from "./parts";

// "Book a consultation" on a clinician's profile. First: is it urgent? Urgent requests go to every clinician free in the
// next 48 hours (/clinicians/urgent). Otherwise the patient picks every time that suits them in the next 48 hours from
// this clinician's free times, writes what they'd like to ask, and sends it with the payment held until the end.

const QUESTIONS_KEY = "rehyn.clinicians.questions";
function readDrafts(): Record<string, string> {
  try { return JSON.parse(window.localStorage.getItem(QUESTIONS_KEY) ?? "{}") as Record<string, string>; } catch { return {}; }
}
function keepDraft(id: string, text: string) {
  try { window.localStorage.setItem(QUESTIONS_KEY, JSON.stringify({ ...readDrafts(), [id]: text })); } catch { /* Kept for this visit only. */ }
}

type Stage = "choose" | "times" | "pay" | "sent";

export default function BookConsultation({ clinician }: { clinician: Clinician }) {
  const [stage, setStage] = useState<Stage>("choose");
  const [now] = useState(() => new Date());
  const booked = busyTimes(useConsultations(), clinician.id).join(",");
  const times = useMemo(() => freeTimes(clinician, now, WINDOW_HOURS, booked ? booked.split(",").map(Number) : []), [clinician, now, booked]);
  const [picked, setPicked] = useState<number[]>([]);
  const [questions, setQuestions] = useState(() => (typeof window === "undefined" ? "" : readDrafts()[clinician.id] ?? ""));
  const days = useMemo(() => {
    const byDay = new Map<string, Date[]>();
    for (const time of times) { const day = dayText(time, now); byDay.set(day, [...(byDay.get(day) ?? []), time]); }
    return Array.from(byDay.entries());
  }, [times, now]);
  const toggle = (at: number) => setPicked(list => (list.includes(at) ? list.filter(item => item !== at) : [...list, at]));
  const writeQuestions = (text: string) => { setQuestions(text); keepDraft(clinician.id, text); };
  const send = () => {
    saveConsultation(request(clinician, picked, questions));
    keepDraft(clinician.id, "");
    setStage("sent");
  };

  return (
    <aside id="book" className="cl-book" aria-label="Book a consultation">
      <div className="cl-book-head">
        <h2 className="cl-book-title">Book a consultation</h2>
        <p className="cl-book-price"><strong>{priceText(clinician.price)}</strong> · {CONSULTATION_MINUTES} minutes · video on Rehyn</p>
      </div>

      {stage === "choose" && <>
        <p className="cl-label" id="cl-urgency">Is it urgent?</p>
        <div className="cl-choices" role="group" aria-labelledby="cl-urgency">
          <button type="button" className="cl-choice" onClick={() => setStage("times")}>
            <CalendarCheck size={22} aria-hidden="true" />
            <span><strong>Not urgent</strong>Choose times in the next {WINDOW_HOURS} hours that suit you, and {clinician.first} picks one.</span>
          </button>
          <Link href="/urgent" className="cl-choice is-urgent">
            <Zap size={22} aria-hidden="true" />
            <span><strong>Urgent: I need help today</strong>We alert every clinician free in the next {WINDOW_HOURS} hours, and the first to answer can see you.</span>
          </Link>
        </div>
        <EmergencyNote />
      </>}

      {stage === "times" && <>
        <button type="button" className="cl-back is-small" onClick={() => setStage("choose")}><ArrowLeft size={16} aria-hidden="true" />Back</button>
        <div className="cl-field">
          <p className="cl-label" id="cl-times-label">When could you meet?</p>
          {times.length === 0 ? (
            <div className="cl-none">
              <p>{clinician.first} has no free times in the next {WINDOW_HOURS} hours.</p>
              <Link href="/" className="cl-link">See other clinicians</Link>
            </div>
          ) : <>
            <p className="cl-small">Pick every time that suits you. {clinician.first} will choose one of them.</p>
            <div className="cl-slots" role="group" aria-labelledby="cl-times-label">
              {days.map(([day, list]) => (
                <div key={day} className="cl-slot-day">
                  <p className="cl-slot-day-name">{day}</p>
                  <div className="cl-slot-row">
                    {list.map(time => (
                      <button key={time.getTime()} type="button" aria-pressed={picked.includes(time.getTime())} aria-label={whenText(time, now)} onClick={() => toggle(time.getTime())}>{clockText(time)}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>}
        </div>
        <label className="cl-ask">
          <span className="cl-ask-title">What would you like to ask {clinician.first}?</span>
          <textarea value={questions} rows={5} onChange={event => writeQuestions(event.target.value)}
            placeholder={"Write it the way you'd say it. For example:\nWhy do I still feel so tired in the afternoons?\nIs it safe to start driving again?"} />
          <span className="cl-small">{clinician.first} reads this before the call, so you don't have to remember everything on the day.</span>
        </label>
        <button type="button" className="cl-request" disabled={!picked.length} onClick={() => setStage("pay")}>
          {picked.length ? `Continue with ${picked.length} ${picked.length === 1 ? "time" : "times"}` : "Pick at least one time"}
        </button>
      </>}

      {stage === "pay" && <>
        <button type="button" className="cl-back is-small" onClick={() => setStage("times")}><ArrowLeft size={16} aria-hidden="true" />Back</button>
        <div className="cl-summary">
          <span><Clock size={16} aria-hidden="true" /><strong>{picked.length} {picked.length === 1 ? "time" : "times"}</strong> · {[...picked].sort((a, b) => a - b).map(at => whenText(new Date(at), now)).join("; ")}</span>
          <span>{questions.trim() ? `Your questions go with it (${questions.trim().split("\n").filter(Boolean).length} ${questions.trim().split("\n").filter(Boolean).length === 1 ? "line" : "lines"}).` : "No questions written: you can still ask on the call."}</span>
        </div>
        <div className="cl-pay">
          <p className="cl-pay-title"><CreditCard size={18} aria-hidden="true" />Pay {priceText(clinician.price)} to send your request</p>
          <p>Your payment is held, not taken, until {clinician.first} finishes your consultation. If {clinician.first} can't make any of your times, the hold is released and nothing is taken.</p>
        </div>
        <button type="button" className="cl-request" onClick={send}>Hold {priceText(clinician.price)} and send</button>
        <PreviewNote>Preview: payments through Stripe open soon, so nothing is charged. The request stays on this device, and you can answer it as {clinician.first} in the clinician portal.</PreviewNote>
      </>}

      {stage === "sent" && <>
        <p className="cl-sent" role="status"><strong>Sent to {clinician.first}.</strong> {clinician.first} will choose one of your times. You'll find it, and the call when it's time, in My consultations.</p>
        <Link href="/consultations" className="cl-btn">My consultations</Link>
        <Link href="/portal" className="cl-btn is-light">Answer it in the clinician portal (preview)</Link>
      </>}
    </aside>
  );
}
