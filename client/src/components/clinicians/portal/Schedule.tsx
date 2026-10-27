import { useState } from "react";
import { CONSULTATION_MINUTES, upcomingSessions, works, type Clinician, type Hours, type UrgentAlerts } from "@/content/clinicians";
import { updateClinician } from "@/lib/clinician-portal";
import { busyTimes, useConsultations, useCreatedSessions } from "@/lib/consultations";

// Schedule & availability in the clinician portal: this week at a glance, the usual week (which days, from when to
// when), time off, and when urgent requests reach you. Patients can only ask for hours that are open here.

const DAYS: [number, string, string][] = [[1, "Mon", "Monday"], [2, "Tue", "Tuesday"], [3, "Wed", "Wednesday"], [4, "Thu", "Thursday"], [5, "Fri", "Friday"], [6, "Sat", "Saturday"], [0, "Sun", "Sunday"]];
const FIRST_HOUR = 7;
const LAST_HOUR = 21;
const HOURS = Array.from({ length: LAST_HOUR - FIRST_HOUR }, (_, index) => FIRST_HOUR + index);
const hourText = (hour: number) => `${String(hour).padStart(2, "0")}:00`;

type Day = { on: boolean; from: number; to: number };

/** The usual week, one range a day, from the clinician's hours. */
export function weekFromSchedule(schedule: Hours[]): Record<number, Day> {
  const week: Record<number, Day> = {};
  for (const [day] of DAYS) {
    const hours = schedule.find(entry => entry.days.includes(day));
    week[day] = hours ? { on: true, from: hours.from, to: hours.to } : { on: false, from: 9, to: 17 };
  }
  return week;
}

/** Back to hours: days with the same times share one entry. */
export function scheduleFromWeek(week: Record<number, Day>): Hours[] {
  const byTimes = new Map<string, Hours>();
  for (const [day] of DAYS) {
    const entry = week[day];
    if (!entry?.on || entry.to <= entry.from) continue;
    const key = `${entry.from}-${entry.to}`;
    const hours = byTimes.get(key) ?? { days: [], from: entry.from, to: entry.to };
    hours.days.push(day);
    byTimes.set(key, hours);
  }
  return Array.from(byTimes.values());
}

const URGENT: [UrgentAlerts, string][] = [
  ["free48", "Alert me whenever I'm free in the next 48 hours"],
  ["today", "Only when I'm free today"],
  ["never", "Never"],
];

export default function PortalSchedule({ me }: { me: Clinician }) {
  const list = useConsultations();
  const created = useCreatedSessions();
  const [week, setWeek] = useState(() => weekFromSchedule(me.schedule));
  const [saved, setSaved] = useState(false);
  const [offFrom, setOffFrom] = useState("");
  const [offTo, setOffTo] = useState("");
  const [offLabel, setOffLabel] = useState("");
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const days = Array.from({ length: 7 }, (_, index) => new Date(today.getFullYear(), today.getMonth(), today.getDate() + index));
  const booked = busyTimes(list, me.id);
  const sessions = upcomingSessions(created, now).filter(session => session.clinicianId === me.id);
  const change = (day: number, patch: Partial<Day>) => { setWeek(current => ({ ...current, [day]: { ...current[day], ...patch } })); setSaved(false); };
  const save = () => { updateClinician(me.id, { schedule: scheduleFromWeek(week) }); setSaved(true); };
  const timeOff = me.timeOff ?? [];
  const addOff = () => {
    if (!offFrom) return;
    const from = new Date(`${offFrom}T00:00`).getTime();
    const to = new Date(`${offTo || offFrom}T00:00`).getTime() + 86_400_000;
    if (!(to > from)) return;
    updateClinician(me.id, { timeOff: [...timeOff, { from, to, label: offLabel.trim() || "Away" }].sort((a, b) => a.from - b.from) });
    setOffFrom(""); setOffTo(""); setOffLabel("");
  };
  const cell = (day: Date, hour: number) => {
    const at = new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour).getTime();
    if (booked.some(start => Math.abs(start - at) < 3_600_000)) return { kind: "booked", text: "Booked" };
    const session = sessions.find(entry => entry.start >= at && entry.start < at + 3_600_000);
    if (session) return { kind: "session", text: "Group" };
    if (timeOff.some(off => at < off.to && at + 3_600_000 > off.from)) return { kind: "off", text: "" };
    return works(me, new Date(at)) ? { kind: "open", text: "" } : { kind: "closed", text: "" };
  };

  return (
    <div className="pt-page">
      <div className="pt-head">
        <div>
          <p className="cl-kicker"><span aria-hidden="true" />When patients can book you</p>
          <h1 className="cl-h1" data-page-heading>Schedule &amp; availability<span aria-hidden="true">.</span></h1>
        </div>
        <div className="pt-head-actions"><button type="button" className="cl-btn is-light" disabled title="Coming soon">Connect Google or Outlook calendar · soon</button></div>
      </div>

      <div className="pt-cols">
        <section className="pt-card pt-wide" aria-labelledby="pt-week-h">
          <div className="pt-card-head">
            <h2 className="cl-h2" id="pt-week-h">The next 7 days</h2>
            <div className="pt-legend" aria-hidden="true"><span className="is-open">Open</span><span className="is-booked">Booked</span><span className="is-session">Group session</span><span className="is-off">Time off</span></div>
          </div>
          <div className="pt-grid-wrap">
            <table className="pt-grid">
              <caption className="cl-sr">Your hours over the next 7 days</caption>
              <thead><tr><th scope="col"><span className="cl-sr">Time</span></th>{days.map(day => <th key={day.toDateString()} scope="col">{day.toLocaleDateString("en-GB", { weekday: "short", day: "numeric" })}</th>)}</tr></thead>
              <tbody>
                {HOURS.map(hour => (
                  <tr key={hour}>
                    <th scope="row">{hourText(hour)}</th>
                    {days.map(day => { const value = cell(day, hour); return <td key={day.toDateString()} className={`is-${value.kind}`}>{value.text}</td>; })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cl-small">Consultations are {CONSULTATION_MINUTES} minutes, starting on the hour. Patients can ask only for open hours in the next 48 hours.</p>
        </section>

        <div className="pt-stack">
          <section className="pt-card" aria-labelledby="pt-usual">
            <h2 className="cl-h2" id="pt-usual">My usual week</h2>
            {DAYS.map(([day, short, long]) => (
              <div key={day} className="pt-day">
                <button type="button" className="pt-day-toggle" aria-pressed={week[day].on} aria-label={`${long}: ${week[day].on ? "working" : "not working"}`} onClick={() => change(day, { on: !week[day].on })}>{short}</button>
                {week[day].on ? (
                  <span className="pt-day-hours">
                    <select aria-label={`${long} from`} value={week[day].from} onChange={event => change(day, { from: Number(event.target.value) })}>{HOURS.map(hour => <option key={hour} value={hour}>{hourText(hour)}</option>)}</select>
                    <span aria-hidden="true">to</span>
                    <select aria-label={`${long} to`} value={week[day].to} onChange={event => change(day, { to: Number(event.target.value) })}>{[...HOURS.slice(1), LAST_HOUR].map(hour => <option key={hour} value={hour}>{hourText(hour)}</option>)}</select>
                  </span>
                ) : <span className="pt-day-off">Not working</span>}
              </div>
            ))}
            <button type="button" className="cl-btn" onClick={save}>Save my hours</button>
            {saved && <p className="cl-small" role="status">Saved. Patients now see these hours; anything already booked stays booked.</p>}
          </section>

          <section className="pt-card" aria-labelledby="pt-urgent-h">
            <h2 className="cl-h2" id="pt-urgent-h">Urgent requests</h2>
            <div className="pt-radios" role="radiogroup" aria-labelledby="pt-urgent-h">
              {URGENT.map(([value, label]) => (
                <label key={value} className="cl-check"><input type="radio" name="urgent" checked={(me.urgentAlerts ?? "free48") === value} onChange={() => updateClinician(me.id, { urgentAlerts: value })} />{label}</label>
              ))}
            </div>
          </section>

          <section className="pt-card" aria-labelledby="pt-off">
            <h2 className="cl-h2" id="pt-off">Time off</h2>
            {timeOff.filter(off => off.to > Date.now()).map(off => (
              <p key={`${off.from}-${off.label}`} className="pt-off-row">
                <span><strong>{new Date(off.from).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}{off.to - off.from > 86_400_000 ? ` – ${new Date(off.to - 1).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}` : ""}</strong> · {off.label}</span>
                <button type="button" className="cl-clear" onClick={() => updateClinician(me.id, { timeOff: timeOff.filter(item => item !== off) })}>Remove</button>
              </p>
            ))}
            <div className="cl-form-row">
              <label className="cl-field"><span className="cl-label">From</span><input className="cl-text" type="date" value={offFrom} onChange={event => setOffFrom(event.target.value)} /></label>
              <label className="cl-field"><span className="cl-label">To</span><input className="cl-text" type="date" value={offTo} min={offFrom} onChange={event => setOffTo(event.target.value)} /></label>
            </div>
            <label className="cl-field"><span className="cl-label">Label</span><input className="cl-text" value={offLabel} maxLength={40} placeholder="Holiday, hospital clinic…" onChange={event => setOffLabel(event.target.value)} /></label>
            <button type="button" className="cl-btn is-light" disabled={!offFrom} onClick={addOff}>Add time off</button>
            <p className="cl-small">Consultations already booked in time you take off stay booked: let those patients know if you need to move them.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
