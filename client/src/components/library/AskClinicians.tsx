import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Users, Video } from "lucide-react";
import { CONSULTATION_MINUTES, clinicianGroups, directoryHref, groupPlace, mainSection, nextFree, nextWeeklySessions, professionalTitle, whenText, type Clinician } from "@/content/clinicians";
import { librarySections } from "@/content/library";
import { useClinicians } from "@/lib/clinician-portal";
import "@/pages/library-clinicians.css";

// "Still have questions?": the clinicians who work with what a Library page is about, at the foot of a condition page,
// an article and a section page. It is a supplement, so it comes after the reading, never before it: a few people who
// see this condition, when each is next free and what a consultation costs, with a free weekly group session where
// one of them hosts it. The clinicians are examples while the directory is set up, and the strip says so.

/** What the strip is about: a condition (group and condition), a whole group, or a whole section. */
export type ClinicianTopic = { sectionId: string; groupId?: string; conditionId?: string; title: string };

const SHOWN = 3;

/** A title in running text: lower case, except an abbreviation such as COPD or an "I". */
const inText = (title: string) => (/^[A-Z]{2,}\b/.test(title) ? title : title.charAt(0).toLowerCase() + title.slice(1));

/** How closely someone matches: 3 for the condition itself, 2 for its group, 1 for its section, 0 for none. */
function closeness(clinician: Clinician, topic: ClinicianTopic) {
  if (topic.conditionId && clinician.conditions.some(([group, condition]) => group === topic.groupId && condition === topic.conditionId)) return 3;
  if (topic.groupId && clinician.conditions.some(([group]) => group === topic.groupId)) return 2;
  return clinicianGroups(clinician).some(place => place.section.id === topic.sectionId) ? 1 : 0;
}

export default function AskClinicians({ topic }: { topic: ClinicianTopic }) {
  const everyone = useClinicians();
  const [now] = useState(() => new Date());
  const matches = useMemo(() => everyone
    .filter(person => person.listed !== false)
    .map(person => ({ person, score: closeness(person, topic), free: nextFree(person, now) }))
    .filter(entry => entry.score > 0)
    .sort((a, b) => b.score - a.score || (a.free?.getTime() ?? Infinity) - (b.free?.getTime() ?? Infinity)), [everyone, topic, now]);
  if (!matches.length) return null;

  const section = librarySections.find(item => item.id === topic.sectionId);
  const group = topic.groupId ? groupPlace(topic.groupId)?.group : undefined;
  // "See all" opens the directory at the group when anyone there works with it, otherwise at the section.
  const inGroup = topic.groupId ? matches.filter(entry => entry.score >= 2).length : 0;
  const all = inGroup ? directoryHref(topic.sectionId, topic.groupId) : directoryHref(topic.sectionId);
  const allCount = inGroup || matches.length;
  const allFor = inGroup && group ? group.title : section?.title ?? "this area";
  const shown = matches.slice(0, SHOWN);
  const hosts = new Set(matches.map(entry => entry.person.id));
  const session = nextWeeklySessions(now).filter(item => hosts.has(item.clinicianId)).sort((a, b) => a.start - b.start)[0];
  const sessionHost = session && matches.find(entry => entry.person.id === session.clinicianId)?.person;

  return (
    <section className="lib-ask-clin" aria-labelledby="lib-ask-clin-title">
      <div className="lib-ask-clin-intro">
        <p className="lib-ask-clin-kicker">Still have questions?</p>
        <h2 id="lib-ask-clin-title">Ask someone who works with {inText(topic.title)}</h2>
        <p>Reading helps, but it can't know your situation. A {CONSULTATION_MINUTES}-minute video consultation can: bring what you've read and the questions it left you with.</p>
      </div>
      <ul className="lib-ask-clin-list" role="list">
        {shown.map(({ person, free }) => {
          const hue = mainSection(person).hue;
          return (
            <li key={person.id} className="lib-ask-clin-person">
              <span className="lib-ask-clin-face" aria-hidden="true" style={{ background: hue.tint, color: hue.ink }}>{person.initials}</span>
              <span className="lib-ask-clin-who">
                <strong>{person.name}</strong>
                <span>{professionalTitle(person)}</span>
                <span className="lib-ask-clin-meta">Available now · {CONSULTATION_MINUTES} min by video</span>
              </span>
              <Link href={`~/clinicians/${person.id}#book`} className="lib-ask-clin-ask" aria-label={`Ask ${person.name} a question in a consultation`}>Ask {person.first}</Link>
            </li>
          );
        })}
      </ul>
      <div className="lib-ask-clin-foot">
        {session && sessionHost && (
          <Link href="~/clinicians/sessions" className="lib-ask-clin-session">
            <Users size={16} aria-hidden="true" />
            <span><strong>Free group session · {whenText(new Date(session.start), now)}</strong>“{session.title}” with {sessionHost.name}</span>
          </Link>
        )}
        <Link href={`~/clinicians${all}`} className="lib-ask-clin-all"><Video size={16} aria-hidden="true" />See all {allCount} {allCount === 1 ? "clinician" : "clinicians"} for {inText(allFor)}<ArrowRight size={16} aria-hidden="true" /></Link>
      </div>
      <p className="lib-ask-clin-note">The clinicians shown are examples while the directory is being set up. Prices are on each profile. For anything urgent, call 999.</p>
    </section>
  );
}
