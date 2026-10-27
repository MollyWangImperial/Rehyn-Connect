import { useState } from "react";
import { ShieldCheck, X } from "lucide-react";
import { PRICE_MAX, PRICE_MIN, REGISTER, URGENT_FEE, groupPlace, urgentPrice, type Clinician } from "@/content/clinicians";
import { librarySections } from "@/content/library";
import { profileGaps, registerText, updateClinician } from "@/lib/clinician-portal";
import ClinicianCard from "../ClinicianCard";
import { hueStyle } from "../parts";

// Profile & pricing in the clinician portal: what patients see (name, role, experience, about, how you help, languages,
// the Library conditions you work with), your price, your registration, and whether you're listed. The card on the
// right is how the directory shows you, as you type.

const LEVELS = ["Consultant", "Senior", "Specialist"];

/** "Multiple sclerosis" → "multiple sclerosis", but "Parkinson's disease" and "COPD" stay as they are. */
const inSentence = (text: string) => {
  const first = text.split(/\s+/)[0] ?? "";
  return first.includes("'") || first.includes("’") || first.length < 2 || first[1] !== first[1].toLowerCase() ? text : text[0].toLowerCase() + text.slice(1);
};

// The parts of the About template the clinician picks; everything else comes from the fields above it.
const WHO = ["people newly diagnosed", "people recovering at home", "people living with a long-term condition", "people of all ages"];
const FAMILY = [["and the family who care for them", "and the family who care for them"], ["", "on their own"]] as const;
const FIRST = [
  "we go through your story and the questions you bring",
  "we make sense of your test results together",
  "we look at what has changed and what to try next",
  "we agree a plan you can keep to at home",
];
const LEAVE = ["a clear next step", "a written plan", "answers in plain words", "a few things to try this week"];

type Picks = { who: string; family: string; first: string; leave: string };

/** "How you can help" lines to start from: the words before and after, and the choices for the box in between. */
const HELP_LINES: { before: string; choices: string[]; after?: string }[] = [
  { before: "Making sense of", choices: ["your test results", "a new diagnosis", "your scan or hospital letter", "your medicines"] },
  { before: "A plan for", choices: ["getting active again", "eating well", "sleeping better", "going back to work"], after: "you can keep to at home" },
  { before: "Help with", choices: ["tiredness", "pain", "low mood and worry", "memory and concentration"] },
  { before: "Support for", choices: ["family and carers", "getting back to driving", "life after hospital", "living alone"] },
];

/** Languages to choose from: English, Welsh and BSL, then those most spoken in the UK. */
const LANGUAGES = ["English", "Welsh", "British Sign Language", "Polish", "Romanian", "Punjabi", "Urdu", "Bengali", "Gujarati", "Hindi", "Tamil", "Arabic", "Portuguese", "Spanish", "Italian", "French", "Turkish", "Somali", "Cantonese", "Mandarin"];

/** One fill-in "How you can help" line: the box for the clinician's words, and Add. */
function HelpLine({ line, onAdd }: { line: (typeof HELP_LINES)[number]; onAdd: (text: string) => void }) {
  const [choice, setChoice] = useState(line.choices[0]);
  const text = `${line.before} ${choice}${line.after ? ` ${line.after}` : ""}`;
  return (
    <li>
      <span>{line.before} <select aria-label={`${line.before}…`} value={choice} onChange={event => setChoice(event.target.value)}>{line.choices.map(item => <option key={item}>{item}</option>)}</select>{line.after ? ` ${line.after}` : ""}</span>
      <button type="button" className="cl-btn is-light" onClick={() => onAdd(text)} aria-label={`Add “${text}”`}>Add</button>
    </li>
  );
}

/** The About text from the template: "I'm a senior neurological physiotherapist with 11 years' experience. …" */
export function aboutFromTemplate(person: Pick<Clinician, "level" | "role" | "years">, picks: Picks): string {
  const role = person.role.trim() || "clinician";
  const title = role.toLowerCase().startsWith(person.level.toLowerCase()) ? inSentence(role) : `${person.level.toLowerCase()} ${inSentence(role)}`;
  const years = person.years > 0 ? ` with ${person.years} year${person.years === 1 ? "'s" : "s'"} experience` : "";
  const who = picks.who.startsWith("condition:") ? `people living with ${inSentence(picks.who.slice(10))}` : picks.who;
  return [
    `I'm ${/^[aeiou]/i.test(title) ? "an" : "a"} ${title}${years}.`,
    `I mostly look after ${who}${picks.family ? ` ${picks.family}` : ""}.`,
    `In a first consultation, ${picks.first}, and you leave with ${picks.leave}.`,
  ].join(" ");
}

/** A fill-in About text: the sentence with option boxes for the parts only the clinician can answer. */
function AboutTemplate({ draft, onUse }: { draft: Clinician; onUse: (text: string) => void }) {
  const conditions = draft.conditions.map(([g, c]) => groupPlace(g)?.group.conditions.find(item => item.id === c)?.title).filter((title): title is string => !!title);
  const [picks, setPicks] = useState<Picks>({ who: conditions[0] ? `condition:${conditions[0]}` : WHO[0], family: FAMILY[0][0], first: FIRST[0], leave: LEAVE[0] });
  const pick = (key: keyof Picks) => (event: { target: { value: string } }) => setPicks(current => ({ ...current, [key]: event.target.value }));
  const role = draft.role.trim() || "clinician";
  const title = role.toLowerCase().startsWith(draft.level.toLowerCase()) ? inSentence(role) : `${draft.level.toLowerCase()} ${inSentence(role)}`;
  return (
    <div className="pt-template" role="group" aria-labelledby="pf-template">
      <p className="cl-label" id="pf-template">Start from a template · choose the words in the boxes</p>
      <p className="pt-template-text">
        I'm {/^[aeiou]/i.test(title) ? "an" : "a"} <span className="pt-template-filled">{title}</span>
        {draft.years > 0 && <> with <span className="pt-template-filled">{draft.years} year{draft.years === 1 ? "'s" : "s'"}</span> experience</>}.
        {" "}I mostly look after{" "}
        <select aria-label="Who you mostly look after" value={picks.who} onChange={pick("who")}>
          {conditions.map(item => <option key={item} value={`condition:${item}`}>people living with {inSentence(item)}</option>)}
          {WHO.map(item => <option key={item} value={item}>{item}</option>)}
        </select>{" "}
        <select aria-label="Whether their family comes too" value={picks.family} onChange={pick("family")}>
          {FAMILY.map(([value, label]) => <option key={label} value={value}>{label}</option>)}
        </select>.
        {" "}In a first consultation,{" "}
        <select aria-label="What happens in a first consultation" value={picks.first} onChange={pick("first")}>{FIRST.map(item => <option key={item}>{item}</option>)}</select>,
        {" "}and you leave with{" "}
        <select aria-label="What patients leave with" value={picks.leave} onChange={pick("leave")}>{LEAVE.map(item => <option key={item}>{item}</option>)}</select>.
      </p>
      <p className="cl-small">Your role, level and years come from the fields above.{conditions.length ? "" : " Add the conditions you work with below to choose them here too."}</p>
      <button type="button" className="cl-btn is-light" onClick={() => onUse(aboutFromTemplate(draft, picks))}>{draft.about.trim() ? "Replace my text with this" : "Use this text"}</button>
    </div>
  );
}

export default function PortalProfile({ me }: { me: Clinician }) {
  const [draft, setDraft] = useState<Clinician>(me);
  const [helpText, setHelpText] = useState(me.help.join("\n"));
  const [languages, setLanguages] = useState<string[]>(me.languages);
  const [otherLanguage, setOtherLanguage] = useState("");
  const languageChoices = [...LANGUAGES, ...languages.filter(item => !LANGUAGES.includes(item))];
  const toggleLanguage = (language: string) => { setLanguages(current => (current.includes(language) ? current.filter(item => item !== language) : [...current, language])); setSaved(false); };
  const addOtherLanguage = () => {
    const language = otherLanguage.trim().replace(/^./, letter => letter.toUpperCase()).slice(0, 40);
    if (language && !languages.some(item => item.toLowerCase() === language.toLowerCase())) { setLanguages(current => [...current, language]); setSaved(false); }
    setOtherLanguage("");
  };
  const addHelp = (text: string) => {
    const lines = helpText.split("\n").map(line => line.trim()).filter(Boolean);
    if (!lines.some(line => line.toLowerCase() === text.toLowerCase())) setHelpText([...lines, text].join("\n"));
    setSaved(false);
  };
  const [sectionId, setSectionId] = useState(groupPlace(me.conditions[0]?.[0] ?? "")?.section.id ?? librarySections[0].id);
  const section = librarySections.find(item => item.id === sectionId) ?? librarySections[0];
  const [groupId, setGroupId] = useState(section.groups[0]?.id ?? "");
  const group = section.groups.find(item => item.id === groupId) ?? section.groups[0];
  const [saved, setSaved] = useState(false);
  const set = (patch: Partial<Clinician>) => { setDraft(current => ({ ...current, ...patch })); setSaved(false); };
  const preview: Clinician = {
    ...draft,
    help: helpText.split("\n").map(line => line.trim()).filter(Boolean),
    languages: languageChoices.filter(item => languages.includes(item)),
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
      conditions: preview.conditions, price: Math.min(PRICE_MAX, Math.max(PRICE_MIN, Math.round(preview.price || 0))),
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
            <AboutTemplate draft={draft} onUse={about => set({ about })} />
            <label className="cl-field"><span className="cl-label">About you, in plain words</span>
              <textarea className="pt-textarea" rows={4} value={draft.about} maxLength={600} placeholder="Who you look after, and what a first consultation with you is like. Start from the template above, or write your own." onChange={event => set({ about: event.target.value })} /></label>
            <div className="pt-template" role="group" aria-labelledby="pf-help-template">
              <p className="cl-label" id="pf-help-template">How you can help · choose the words, then Add</p>
              <ul className="pt-help-lines">{HELP_LINES.map(line => <HelpLine key={line.before} line={line} onAdd={addHelp} />)}</ul>
            </div>
            <label className="cl-field"><span className="cl-label">How you can help · one per line</span>
              <textarea className="pt-textarea" rows={4} value={helpText} placeholder={"Add lines from above, or write your own, one per line."} onChange={event => { setHelpText(event.target.value); setSaved(false); }} /></label>
            <div className="cl-field" role="group" aria-labelledby="pf-languages">
              <span className="cl-label" id="pf-languages">Languages you can consult in · choose all that apply</span>
              <div className="pt-pick">{languageChoices.map(language => <button key={language} type="button" aria-pressed={languages.includes(language)} onClick={() => toggleLanguage(language)}>{language}</button>)}</div>
              <span className="pt-other-language">
                <input className="cl-text" value={otherLanguage} maxLength={40} placeholder="Another language" aria-label="Another language" onChange={event => setOtherLanguage(event.target.value)} onKeyDown={event => { if (event.key === "Enter") { event.preventDefault(); addOtherLanguage(); } }} />
                <button type="button" className="cl-btn is-light" disabled={!otherLanguage.trim()} onClick={addOtherLanguage}>Add</button>
              </span>
            </div>
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
              <span className="pt-price-input"><strong aria-hidden="true">£</strong><input type="number" min={PRICE_MIN} max={PRICE_MAX} value={draft.price} onChange={event => set({ price: Number(event.target.value) || 0 })} aria-label="Price in pounds" aria-describedby="pf-price-range" /></span></label>
            {(draft.price < PRICE_MIN || draft.price > PRICE_MAX) && <p className="cl-small pt-price-warn" role="status">Choose a price from £{PRICE_MIN} to £{PRICE_MAX}. Saving keeps it within that range.</p>}
            <ul className="pt-price-notes">
              <li id="pf-price-range"><strong>£{PRICE_MIN} to £{PRICE_MAX}</strong>The range you can set, in line with what a 30-minute private consultation usually costs.</li>
              <li><strong>Urgent: £{URGENT_FEE} more</strong>Urgent consultations cost your price plus £{URGENT_FEE}, so £{urgentPrice({ price: Math.min(PRICE_MAX, Math.max(PRICE_MIN, draft.price || PRICE_MIN)) })} for you. The extra £{URGENT_FEE} is paid to you too.</li>
            </ul>
            <p className="cl-small">The patient's payment is held when they book and paid to you when you finish the consultation. Rehyn's fee is [to be confirmed]. You set the price of group sessions on the Group sessions page.</p>
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
