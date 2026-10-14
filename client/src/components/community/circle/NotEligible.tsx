import { useId, useState, type FormEvent } from "react";
import { TypedChatText } from "@/components/TypedChatText";
import { SAMPLE_HOSTS } from "@/content/circle-events";
import { people, type PersonId } from "@/content/community-samples";
import { circleEventsStore, useCircleEvents } from "@/lib/circle-events-store";
import { HOST_RULES, type HostEligibility, type HostStanding } from "@/lib/circle-host";
import { BackIcon, CheckIcon, ClockIcon, ShieldIcon } from "../icons";
import { AliraMark, Face } from "../parts";
import { countWords } from "./shared";
import { checkText } from "./standing-text";

const DAY = 86_400_000;

/**
 * Create an event, for someone without host standing yet: the four checks with how far along they are, and two
 * things they can do meanwhile: hand the idea to Alira (she hosts it and names them), or co-host with a friend who
 * can host already.
 */
export default function NotEligibleView({ name, eligibility, standing, friends, now, onBack, onSeeSettled, heading }: {
  name: string;
  eligibility: HostEligibility;
  standing: HostStanding;
  friends: PersonId[];
  now: number;
  onBack: () => void;
  /** The preview: see the page as a member who can host. */
  onSeeSettled: () => void;
  heading: boolean;
}) {
  const memory = useCircleEvents();
  const [idea, setIdea] = useState("");
  const [thanks, setThanks] = useState(false);
  const ideaId = useId();
  const hosts = friends.filter(who => SAMPLE_HOSTS[who]);
  const days = eligibility.memberFrom === null ? null : Math.max(1, Math.ceil((eligibility.memberFrom - now) / DAY));

  const suggest = (event: FormEvent) => {
    event.preventDefault();
    if (circleEventsStore.suggest(idea, Date.now())) { setIdea(""); setThanks(true); }
  };

  return (
    <div className="cm-ce-page">
      <div className="cm-ce-topline">
        <button type="button" className="cm-ce-back" onClick={onBack}><BackIcon size={16} />Back to Sunday circle</button>
        <span className="cm-ce-pill is-warm"><ClockIcon size={14} />{days !== null ? `Hosting opens in about ${days} day${days === 1 ? "" : "s"}` : "Not able to host just yet"}</span>
      </div>

      <div className="cm-ce-create">
        <section className="cm-ce-not-main">
          <div>
            <h2 className="cm-ce-title" tabIndex={-1} data-view-heading={heading ? "" : undefined}>{`Not quite yet, ${name}`}</h2>
            <p className="cm-ce-intro is-ink">Hosting a circle means other people trust you with their afternoon. So we ask every host to have been around a little while first.{eligibility.met >= 2 ? " You're most of the way there." : ""}</p>
          </div>
          <div className="cm-card cm-ce-standing-long">
            <div className="cm-ce-list-head">
              <h3 className="cm-side-title">Your host standing</h3>
              <span className="cm-ce-sub">{`${eligibility.met} of 4 · updates every morning`}</span>
            </div>
            <ol className="cm-ce-criteria">
              {eligibility.checks.map(check => {
                const words = checkText(check, standing, now);
                const progress = check.need > 0 ? Math.min(100, Math.round((check.have / check.need) * 100)) : 0;
                return (
                  <li key={check.id} className={check.met ? "is-met" : ""}>
                    <span className="cm-ce-step" aria-hidden="true">{check.met ? <CheckIcon size={14} /> : check.id === "member" || check.id === "circles" ? check.have : "!"}</span>
                    <div className="cm-ce-criterion">
                      <div className="cm-ce-criterion-head"><b>{words.title}</b><span>{words.value}</span></div>
                      {!check.met && (check.id === "member" || check.id === "circles") && (
                        <span className="cm-ce-bar" role="progressbar" aria-label={words.title} aria-valuemin={0} aria-valuemax={check.need} aria-valuenow={Math.min(check.have, check.need)}><i style={{ width: `${progress}%` }} /></span>
                      )}
                      {words.help && <p className="cm-ce-hint">{words.help}</p>}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
          <p className="cm-ce-hint">{`Once all four are met, the Create an event button simply works. New hosts start with up to ${HOST_RULES.newHostEvents} events a week and ${HOST_RULES.newHostSeats} seats each; after ${HOST_RULES.wellAttended} well-attended circles the limits lift.`}</p>
          <p className="cm-ce-hint">This is a preview of a newer member's account. <button type="button" className="cm-text-button" onClick={onSeeSettled}>See it as a member who can host</button></p>
        </section>

        <div className="cm-ce-create-side">
          <form className="cm-ce-alira-card" onSubmit={suggest} aria-labelledby={`${ideaId}-title`}>
            <div className="cm-ce-alira-head">
              <AliraMark size={46} light />
              <h3 id={`${ideaId}-title`}>Meanwhile, I can host it for you</h3>
            </div>
            <p>Tell me what you'd like to do and who it's for. If a few people would enjoy it, I'll put it in Coming up as one of mine, with your name as the person who suggested it. You get the seat next to me.</p>
            <label className="cm-ce-idea" htmlFor={ideaId}>Your idea</label>
            <textarea id={ideaId} rows={3} value={idea} maxLength={400} placeholder="A circle for people who've just gone back to driving…" onChange={event => { setIdea(event.target.value); setThanks(false); }} />
            <button type="submit" className="cm-ce-button is-light" disabled={!idea.trim()}>Suggest it to Alira</button>
            <div role="status">
              {thanks && <p className="cm-ce-alira-reply"><TypedChatText text="Thank you. I'll see who'd enjoy it, and if a few people would, it goes in Coming up with your name on it." /></p>}
            </div>
            {memory.suggestions.length > 0 && <p className="cm-ce-alira-note">{`${memory.suggestions.length} idea${memory.suggestions.length === 1 ? "" : "s"} with Alira`}</p>}
          </form>

          {hosts.length > 0 && (
            <section className="cm-card cm-ce-cohost" aria-labelledby={`${ideaId}-cohost`}>
              <h3 className="cm-side-title" id={`${ideaId}-cohost`}>Or co-host with a friend who can</h3>
              <p className="cm-ce-sub">{`${countWords(hosts.length)} of your friends can already host. Ask one to create it and add you as co-host: you'd run it together and it counts towards your standing.`}</p>
              <ul className="cm-ce-cohost-list">
                {hosts.map(who => {
                  const asked = memory.coHosts.includes(who);
                  return (
                    <li key={who}>
                      <Face who={who} size={36} />
                      <span><b>{people[who].name}</b><span>{SAMPLE_HOSTS[who]}</span></span>
                      <button type="button" className={`cm-ce-button ${asked ? "is-set" : ""}`} aria-pressed={asked} disabled={asked} onClick={() => circleEventsStore.askCoHost(who)}>
                        {asked ? <><CheckIcon size={14} />Asked</> : "Ask"}<span className="cm-sr">{` ${people[who].name} to co-host`}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          <p className="cm-ce-hint"><ShieldIcon size={16} /><span>Why the wait? It keeps brand-new or empty accounts from filling Coming up, and means every host has sat in a circle before running one.</span></p>
        </div>
      </div>
    </div>
  );
}
