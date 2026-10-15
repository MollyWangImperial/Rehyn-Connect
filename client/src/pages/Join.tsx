import { useId, useRef, useState, type FormEvent, type MouseEvent } from "react";
import { Link } from "wouter";
import { Check } from "lucide-react";
import { useSettings, type SettingsView } from "@/components/AccountSettings";
import HeartRateMark from "@/components/HeartRateMark";
import { ageOn, agreedTo, consentStore, HEALTH_CONSENT_TEXT, MIN_AGE, useConsents } from "@/lib/consent";
import { fastCheckPath } from "@/lib/fast-check";
import { profileName, profileStore, useProfile } from "@/lib/profile";
import "@/components/consent.css";

type Box = "terms" | "privacy" | "health";

/** One thing to agree to: its name, the words ticked, and a way to read the document first. */
function ConsentBox({ title, text, note, checked, onChange, read, problem }: {
  title: string; text: string; note?: string; checked: boolean; onChange: (on: boolean) => void;
  read: { label: string; open: (event: MouseEvent<HTMLButtonElement>) => void }; problem: boolean;
}) {
  const id = useId();
  return (
    <div className={`join-box ${checked ? "is-on" : ""} ${problem ? "is-missing" : ""}`}>
      <h2 className="join-box-title">{title}</h2>
      <div className="join-box-row">
        <input id={id} type="checkbox" checked={checked} onChange={event => onChange(event.target.checked)} aria-invalid={problem || undefined} />
        <label htmlFor={id}>{text}</label>
      </div>
      {note && <p className="join-box-note">{note}</p>}
      <button type="button" className="consent-link" onClick={read.open}>{read.label}</button>
    </div>
  );
}

/**
 * Joining Rehyn: Connect (and coming back after withdrawing a consent): the name other members see,
 * then three separate agreements: the Terms of Use, the Privacy Notice and the health information
 * consent. Nothing else opens until all three are ticked. The documents open in Settings to read first.
 */
export default function Join() {
  const openSettings = useSettings();
  const profile = useProfile();
  const consents = useConsents();
  const agreed = agreedTo(consents);
  // Back here only when a document has a new version (withdrawing the health consent keeps the account; it just stops sharing).
  const returning = consents.terms !== null;
  const [name, setName] = useState(() => (returning ? profileName(profile) : ""));
  const [born, setBorn] = useState(consents.dateOfBirth ?? "");
  const [ticked, setTicked] = useState<Record<Box, boolean>>({ terms: agreed.terms, privacy: agreed.privacy, health: agreed.health });
  const [tried, setTried] = useState(false);
  const problemBox = useRef<HTMLDivElement>(null);
  const nameId = useId();
  const bornId = useId();
  const age = ageOn(born || null);
  const tooYoung = age !== null && age < MIN_AGE;

  const missing = [
    !name.trim() && "your name",
    age === null && "your date of birth",
    !ticked.terms && "the Terms of Use",
    !ticked.privacy && "the Privacy Notice",
    !ticked.health && "the health information consent",
  ].filter((item): item is string => Boolean(item));
  const listed = missing.length > 1 ? `${missing.slice(0, -1).join(", ")} and ${missing[missing.length - 1]}` : missing[0];
  const tick = (box: Box) => (on: boolean) => setTicked(current => ({ ...current, [box]: on }));
  const read = (view: SettingsView, label: string, focus?: string) => ({ label, open: (event: MouseEvent<HTMLButtonElement>) => openSettings(event.currentTarget, view, focus) });

  const join = (event: FormEvent) => {
    event.preventDefault();
    if (missing.length) {
      setTried(true);
      requestAnimationFrame(() => problemBox.current?.focus());
      return;
    }
    if (tooYoung) { setTried(true); requestAnimationFrame(() => problemBox.current?.focus()); return; }
    const typed = name.trim();
    if (typed !== profileName(profile)) profileStore.save({ ...profile, name: typed, preferredName: "" });
    consentStore.register(born, ticked.health);
  };

  return (
    <main className="join-page">
      <div className="join-card">
        <p className="join-brand"><span className="join-brand-mark"><HeartRateMark size={22} /></span><span>Rehyn<em>: Connect</em></span></p>
        <h1 className="join-title">{returning ? "Welcome back" : "Join Rehyn: Connect"}</h1>
        <p className="join-lede">{returning
          ? "The Terms of Use or the Privacy Notice have changed since you agreed to them. Please look at these again: all three are needed to use Rehyn: Connect."
          : "A warm, safe community for people living with stroke, Parkinson's, MS and other conditions, and the people who care for them."}</p>

        {tried && (missing.length > 0 || tooYoung) && (
          <div ref={problemBox} className="join-problem" role="alert" tabIndex={-1}>{tooYoung ? `Rehyn Connect is for people aged ${MIN_AGE} or over, so we can't create an account for you.` : `To join, please add ${listed}.`}</div>
        )}

        <form className="join-form" onSubmit={join} noValidate>
          <div className={`join-field ${tried && !name.trim() ? "is-missing" : ""}`}>
            <label htmlFor={nameId}>Your first name</label>
            <p className="join-hint" id={`${nameId}-hint`}>This is the name other members will see.</p>
            <input id={nameId} value={name} onChange={event => setName(event.target.value)} autoComplete="given-name" maxLength={80} aria-describedby={`${nameId}-hint`} aria-invalid={(tried && !name.trim()) || undefined} />
          </div>
          <div className={`join-field ${tried && (age === null || tooYoung) ? "is-missing" : ""}`}>
            <label htmlFor={bornId}>Your date of birth</label>
            <p className="join-hint" id={`${bornId}-hint`}>{`Rehyn Connect is for people aged ${MIN_AGE} or over. Under 18s get extra protections. Your date of birth is never shown to anyone.`}</p>
            <input id={bornId} type="date" value={born} onChange={event => setBorn(event.target.value)} autoComplete="bday" max={new Date().toISOString().slice(0, 10)} aria-describedby={`${bornId}-hint`} aria-invalid={(tried && (age === null || tooYoung)) || undefined} />
          </div>

          <fieldset className="join-consents">
            <legend>Please read and agree to all three</legend>
            <ConsentBox title="Terms of Use" text="I have read and agree to the Terms of Use." note="Version 2.0. Section 6 has the Community Rules."
              checked={ticked.terms} onChange={tick("terms")} read={read("terms", "Read the Terms of Use")} problem={tried && !ticked.terms} />
            <ConsentBox title="Privacy Notice" text="I have read the Privacy Notice, which explains how Rehyn Ltd uses my information."
              checked={ticked.privacy} onChange={tick("privacy")} read={read("privacy", "Read the Privacy Notice")} problem={tried && !ticked.privacy} />
            <ConsentBox title="Health information consent" text={HEALTH_CONSENT_TEXT}
              checked={ticked.health} onChange={tick("health")} read={read("privacy", "How we use your information", "4.")} problem={tried && !ticked.health} />
          </fieldset>

          <button type="submit" className={`join-submit ${missing.length ? "is-waiting" : ""}`} aria-disabled={missing.length > 0}>
            {missing.length ? "Join Rehyn: Connect" : <><Check size={18} aria-hidden="true" />Join Rehyn: Connect</>}
          </button>
          <p className="join-safety">Rehyn is not an emergency service. If you think someone is having a stroke, call 999. <Link href={fastCheckPath("/")}>See the warning signs</Link></p>
        </form>
      </div>
    </main>
  );
}
