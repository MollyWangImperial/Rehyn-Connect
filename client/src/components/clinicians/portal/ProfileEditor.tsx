import { useState } from "react";
import { ShieldCheck, X } from "lucide-react";
import { REGISTER, groupPlace, type Clinician } from "@/content/clinicians";
import { librarySections } from "@/content/library";
import { profileGaps, registerText, updateClinician } from "@/lib/clinician-portal";
import ClinicianCard from "../ClinicianCard";
import { hueStyle } from "../parts";

// Profile & pricing in the clinician portal: what patients see (name, role, experience, about, how you help, languages,
// the Library conditions you work with), your price, your registration, and whether you're listed. The card on the
// right is how the directory shows you, as you type.

const LEVELS = ["Consultant", "Senior", "Specialist"];

export default function PortalProfile({ me }: { me: Clinician }) {
  const [draft, setDraft] = useState<Clinician>(me);
  const [helpText, setHelpText] = useState(me.help.join("\n"));
  const [languages, setLanguages] = useState(me.languages.join(", "));
  const [sectionId, setSectionId] = useState(groupPlace(me.conditions[0]?.[0] ?? "")?.section.id ?? librarySections[0].id);
  const section = librarySections.find(item => item.id === sectionId) ?? librarySections[0];
  const [groupId, setGroupId] = useState(section.groups[0]?.id ?? "");
  const group = section.groups.find(item => item.id === groupId) ?? section.groups[0];
  const [saved, setSaved] = useState(false);
  const set = (patch: Partial<Clinician>) => { setDraft(current => ({ ...current, ...patch })); setSaved(false); };
  const preview: Clinician = {
    ...draft,
    help: helpText.split("\n").map(line => line.trim()).filter(Boolean),
    languages: languages.split(",").map(item => item.trim()).filter(Boolean),
    initials: draft.name.replace(/^Dr\.? /i, "").split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]!.toUpperCase()).join("") || draft.initials,
  };
  const has = (g: string, c: string) => draft.conditions.some(([gid, cid]) => gid === g && cid === c);
  const toggleCondition = (g: string, c: string) => set({ conditions: has(g, c) ? draft.conditions.filter(([gid, cid]) => !(gid === g && cid === c)) : [...draft.conditions, [g, c]] });
  // Only the profile's own fields: hours, alerts and listing are changed elsewhere and kept as they are.
  const save = () => {
    const name = preview.name.trim() || me.name;
    updateClinician(me.id, {
      name, first: name.replace(/^Dr\.? /i, "").split(/\s+/)[0] || me.first, initials: preview.initials, role: preview.role.trim() || me.role,
      level: preview.level, years: preview.years, about: preview.about.trim(), help: preview.help, languages: preview.languages.length ? preview.languages : me.languages,
      conditions: preview.conditions, price: Math.min(500, Math.max(1, Math.round(preview.price || 0))),
    });
    setSaved(true);
  };
  const gaps = profileGaps(preview);

  return (
    <div className="pt-page">
      <div className="pt-head">
        <div>
          <p className="cl-kicker"><span aria-hidden="true" />What patients see</p>
          <h1 className="cl-h1" data-page-heading>Profile &amp; pricing<span aria-hidden="true">.</span></h1>
        </div>
        <div className="pt-head-actions">
          <button type="button" className="cl-request" onClick={save}>Save changes</button>
        </div>
      </div>
      {saved && <p className="cl-sent" role="status"><strong>Saved.</strong> Your profile and price are updated in the directory on this device.</p>}
      {!me.own && <p className="cl-preview">Preview: {me.name} is an example clinician. Changes you make are kept on this device only.</p>}

      <div className="pt-cols">
        <div className="pt-stack pt-wide">
          <section className="pt-card" aria-labelledby="pf-about">
            <h2 className="cl-h2" id="pf-about">About you</h2>
            <div className="pt-fields">
              <label className="cl-field"><span className="cl-label">Name patients see</span><input className="cl-text" value={draft.name} maxLength={80} onChange={event => set({ name: event.target.value })} /></label>
              <label className="cl-field"><span className="cl-label">Your role</span><input className="cl-text" value={draft.role} maxLength={80} onChange={event => set({ role: event.target.value })} /></label>
              <label className="cl-field"><span className="cl-label">Level</span>
                <select className="cl-text" value={draft.level} onChange={event => set({ level: event.target.value })}>{LEVELS.map(level => <option key={level}>{level}</option>)}</select></label>
              <label className="cl-field"><span className="cl-label">Years of experience</span><input className="cl-text" type="number" min={0} max={60} value={draft.years} onChange={event => set({ years: Math.max(0, Number(event.target.value) || 0) })} /></label>
            </div>
            <div className={`pt-register ${me.own && !me.verified ? "is-pending" : ""}`}>
              <ShieldCheck size={22} aria-hidden="true" />
              <span><strong>{registerText(me)}</strong>{me.own ? ` · ${REGISTER[me.type]} number ${me.registration || "not given"}. We check it before patients beyond this device can book you, and again every month.` : " · checked by Rehyn."}</span>
            </div>
            <label className="cl-field"><span className="cl-label">About you, in plain words</span>
              <textarea className="pt-textarea" rows={4} value={draft.about} maxLength={600} placeholder="Who you look after, and what a first consultation with you is like." onChange={event => set({ about: event.target.value })} /></label>
            <label className="cl-field"><span className="cl-label">How you can help · one per line</span>
              <textarea className="pt-textarea" rows={4} value={helpText} placeholder={"Making sense of test results\nA plan you can keep to at home"} onChange={event => { setHelpText(event.target.value); setSaved(false); }} /></label>
            <label className="cl-field"><span className="cl-label">Languages · separated by commas</span><input className="cl-text" value={languages} onChange={event => { setLanguages(event.target.value); setSaved(false); }} /></label>
          </section>

          <section className="pt-card" aria-labelledby="pf-cond">
            <h2 className="cl-h2" id="pf-cond">Conditions you work with</h2>
            <p className="cl-small">From the Library, so patients reading about a condition can find you.</p>
            {draft.conditions.length > 0 && (
              <div className="cl-chips">
                {draft.conditions.map(([g, c]) => {
                  const place = groupPlace(g);
                  const condition = place?.group.conditions.find(item => item.id === c);
                  if (!place || !condition) return null;
                  return <button key={`${g}/${c}`} type="button" className="cl-chip is-link pt-chip-remove" style={hueStyle(place.section.hue)} onClick={() => toggleCondition(g, c)} aria-label={`Remove ${condition.title}`}>{condition.title}<X size={14} aria-hidden="true" /></button>;
                })}
              </div>
            )}
            <div className="cl-form-row">
              <label className="cl-field"><span className="cl-label">Library section</span>
                <select className="cl-text" value={section.id} onChange={event => { setSectionId(event.target.value); setGroupId(librarySections.find(item => item.id === event.target.value)?.groups[0]?.id ?? ""); }}>
                  {librarySections.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
                </select></label>
              <label className="cl-field"><span className="cl-label">Group</span>
                <select className="cl-text" value={group?.id} onChange={event => setGroupId(event.target.value)}>
                  {section.groups.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
                </select></label>
            </div>
            {group && (
              <div className="pt-pick" style={hueStyle(section.hue)}>
                {group.conditions.map(condition => (
                  <button key={condition.id} type="button" aria-pressed={has(group.id, condition.id)} onClick={() => toggleCondition(group.id, condition.id)}>{condition.title}</button>
                ))}
              </div>
            )}
          </section>

          <section className="pt-card" aria-labelledby="pf-price">
            <h2 className="cl-h2" id="pf-price">Pricing</h2>
            <label className="cl-field pt-price-field"><span className="cl-label">A 30-minute consultation</span>
              <span className="pt-price-input"><strong aria-hidden="true">£</strong><input type="number" min={1} max={500} value={draft.price} onChange={event => set({ price: Number(event.target.value) || 0 })} aria-label="Price in pounds" /></span></label>
            <p className="cl-small">The same price for urgent consultations. The patient's payment is held when they book and paid to you when you finish the consultation; Rehyn's fee is [to be confirmed]. Group sessions are always free.</p>
          </section>
        </div>

        <aside className="pt-stack" aria-label="How patients see you">
          <p className="cl-label">How patients see you</p>
          <ClinicianCard clinician={preview} now={new Date()} preview />
          {gaps.length > 0 && <p className="cl-notice">Still to add: {gaps.join(", ")}.</p>}
          <div className="pt-card is-dark">
            <strong>{draft.listed === false ? "Your listing is paused" : "Listed in the directory"}</strong>
            <p className="cl-small">{draft.listed === false ? "Patients can't find or book you, and you won't get urgent alerts. Consultations already booked stay booked." : "Patients find you by the conditions you work with. Pause any time; booked consultations stay booked."}</p>
            <button type="button" className="cl-btn is-light" onClick={() => { const listed = draft.listed === false; set({ listed }); updateClinician(me.id, { listed }); }}>{draft.listed === false ? "List me again" : "Pause my listing"}</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
