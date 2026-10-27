import { useRef, useState } from "react";
import { Link, useLocation, useSearch } from "wouter";
import { CheckCircle2 } from "lucide-react";
import { findClinician, upcomingSessions, whenText } from "@/content/clinicians";
import { useClinicians } from "@/lib/clinician-portal";
import {
  findConsultation, finish, keepTranscript, questionLines, sessionRoom, updateConsultation, useConsultations, useCreatedSessions,
  type Consultation, type TranscriptLine,
} from "@/lib/consultations";
import MeetingRoom from "./MeetingRoom";

// /clinicians/meet/:room: a consultation's call, or a group session's. "?as=clinician" is the clinician's side (from
// the portal), who can finish the consultation. When the call ends, each side keeps the transcript on its own device.

export default function MeetPage({ room }: { room: string }) {
  const [, navigate] = useLocation();
  useClinicians();
  const asClinician = new URLSearchParams(useSearch()).get("as") === "clinician";
  const consultation = findConsultation(useConsultations(), room);
  const session = upcomingSessions(useCreatedSessions()).find(item => sessionRoom(item) === room);

  if (session) {
    const host = findClinician(session.clinicianId);
    return (
      <div className="cl-page">
        <MeetingRoom key={room} room={room} transcripts={false}
          me={{ name: asClinician && host ? host.name : "Member", who: asClinician ? "clinician" : "patient" }}
          title={session.title} subtitle={`Free group session with ${host?.name ?? "a clinician"} · ${session.minutes} minutes`}
          onLeave={() => navigate(asClinician ? "/portal/sessions" : "/")} />
      </div>
    );
  }

  if (!consultation) {
    return (
      <div className="cl-page cl-missing">
        <h1 className="cl-h1">This consultation isn't on this device</h1>
        <p className="cl-lead">Consultations are kept on the device they were booked on. Open the call from My consultations there.</p>
        <Link href="/consultations" className="cl-btn">My consultations</Link>
      </div>
    );
  }

  const clinician = findClinician(consultation.clinicianId);
  if (consultation.status !== "scheduled" || !clinician) {
    return (
      <div className="cl-page cl-missing">
        <h1 className="cl-h1">{consultation.status === "done" ? "This consultation has finished" : "This call isn't open"}</h1>
        <p className="cl-lead">{consultation.status === "done" ? "The transcript is kept with it." : "It opens once a time is confirmed."}</p>
        <Link href={asClinician ? "/portal" : "/consultations"} className="cl-btn">{asClinician ? "Clinician portal" : "My consultations"}</Link>
      </div>
    );
  }

  return <ConsultationCall key={room} room={room} consultation={consultation} clinicianName={clinician.name} asClinician={asClinician} />;
}

/** A consultation's call: beside it, the patient's questions (the clinician ticks them off) and the clinician's private
 *  notes; finishing asks the clinician for an optional summary for the patient and whether to suggest a follow-up. */
function ConsultationCall({ room, consultation, clinicianName, asClinician }: { room: string; consultation: Consultation; clinicianName: string; asClinician: boolean }) {
  const [, navigate] = useLocation();
  const [summary, setSummary] = useState("");
  const [followUp, setFollowUp] = useState(false);
  const wrapUp = useRef({ summary, followUp });
  wrapUp.current = { summary, followUp };
  const questions = questionLines(consultation);
  const ticked = consultation.ticked ?? [];
  const after = asClinician ? "/portal/consultations" : "/consultations";
  const leave = (lines: TranscriptLine[]) => {
    updateConsultation(consultation.id, item => keepTranscript(item, lines));
    navigate(after);
  };
  const finished = (lines: TranscriptLine[]) => {
    updateConsultation(consultation.id, item => keepTranscript(finish(item, lines, Date.now(), asClinician ? wrapUp.current : {}), lines));
    navigate(after);
  };
  const tick = (index: number) => updateConsultation(consultation.id, item => {
    const current = item.ticked ?? [];
    return { ...item, ticked: current.includes(index) ? current.filter(entry => entry !== index) : [...current, index] };
  });
  const side = (
    <>
      <section className="mt-side" aria-labelledby="mt-qs">
        <h2 className="mt-side-title" id="mt-qs">{asClinician ? `Their questions · ${ticked.length} of ${questions.length} answered` : "Your questions"}</h2>
        {questions.length === 0 ? <p className="mt-side-empty">No questions were written.</p> : (
          <ul className="mt-qs">
            {questions.map((line, index) => asClinician ? (
              <li key={index}><label className={ticked.includes(index) ? "is-done" : ""}><input type="checkbox" checked={ticked.includes(index)} onChange={() => tick(index)} />{line}</label></li>
            ) : <li key={index}>{line}</li>)}
          </ul>
        )}
      </section>
      {asClinician && (
        <section className="mt-side" aria-labelledby="mt-notes">
          <h2 className="mt-side-title" id="mt-notes">My notes</h2>
          <textarea className="pt-textarea" rows={4} defaultValue={consultation.notes ?? ""} aria-describedby="mt-notes-hint"
            onChange={event => { const notes = event.target.value; updateConsultation(consultation.id, item => ({ ...item, notes })); }} />
          <p className="mt-side-empty" id="mt-notes-hint">Only you can see your notes.</p>
        </section>
      )}
    </>
  );
  const finishDialog = (go: () => void, back: () => void) => (
    <div className="mt-dialog-back">
      <section className="mt-dialog" role="dialog" aria-modal="true" aria-labelledby="mt-finish-title">
        <h2 className="mt-title" id="mt-finish-title">Finish this consultation?</h2>
        <ul className="mt-finish-list">
          <li><CheckCircle2 size={18} aria-hidden="true" />The call ends for you both.</li>
          <li><CheckCircle2 size={18} aria-hidden="true" />The £{consultation.price} held on the patient's card is taken and paid to you.</li>
          <li><CheckCircle2 size={18} aria-hidden="true" />The transcript is saved for you and for the patient.</li>
        </ul>
        <label className="cl-field"><span className="cl-label">A short summary for the patient (optional)</span>
          <textarea className="pt-textarea" rows={3} value={summary} maxLength={800} onChange={event => setSummary(event.target.value)} placeholder="What you agreed, and what to do next." /></label>
        <label className="cl-check"><input type="checkbox" checked={followUp} onChange={() => setFollowUp(!followUp)} />Suggest a follow-up consultation</label>
        <div className="pt-actions">
          <button type="button" className="cl-request" onClick={go}>Finish and take payment</button>
          <button type="button" className="cl-btn is-light" onClick={back}>Back to the call</button>
        </div>
      </section>
    </div>
  );
  return (
    <div className="cl-page">
      <MeetingRoom room={room} transcripts canFinish={asClinician} initialTranscript={consultation.transcript}
        me={asClinician ? { name: clinicianName, who: "clinician" } : { name: "Patient", who: "patient" }}
        title={asClinician ? `Consultation · ref ${consultation.ref}` : `Your consultation with ${clinicianName}`}
        subtitle={`${consultation.at ? whenText(new Date(consultation.at)) : "Now"} · 30 minutes · £${consultation.price} held`}
        side={side} finishDialog={asClinician ? finishDialog : undefined}
        onLeave={leave} onFinish={finished} />
    </div>
  );
}
