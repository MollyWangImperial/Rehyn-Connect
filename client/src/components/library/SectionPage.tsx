import { useMemo, useState, type FormEvent } from "react";
import { Link } from "wouter";
import { LIBRARY_NOTE, STORIES_NOTE, type LibraryCondition, type LibraryGroup, type LibrarySection, type LibraryStory } from "@/content/library";
import { useReadAloud } from "@/lib/alira-read-aloud";
import { conditionHref, conditionItems, groupStories, numberWord, plural, sectionCounts, sectionStories, storyHref } from "@/lib/library";
import { searchLibrary } from "@/lib/library-search";
import { ArrowIcon, Crumbs, Faces, HeadphonesIcon, hueStyle, Initial, jumpTo, PauseIcon, SectionGlyph } from "./parts";

// One section of the Library: its groups, each opening into conditions, then stories from
// people across the section (placement F), and a way to ask which group fits.

const shortGroup = (group: LibraryGroup) => group.title.split(" & ")[0];

type Guess = { group: LibraryGroup; condition: LibraryCondition };

/**
 * The group in this section that the words most likely belong to, and the condition in it that
 * matched best. Worked out on the device from the Library's own search; nothing is sent anywhere.
 */
export function guessGroup(section: LibrarySection, words: string): Guess | undefined {
  for (const hit of searchLibrary(words, 40)) {
    const [, groupId, conditionId] = hit.href.split("/");
    const group = section.groups.find(candidate => candidate.id === groupId);
    const condition = group?.conditions.find(candidate => candidate.id === conditionId);
    if (group && condition) return { group, condition };
  }
  return undefined;
}

function AskWhichGroup({ section }: { section: LibrarySection }) {
  const [words, setWords] = useState("");
  const [answer, setAnswer] = useState<{ asked: string; guess?: Guess } | null>(null);
  const ask = (event: FormEvent) => {
    event.preventDefault();
    if (!words.trim()) return;
    setAnswer({ asked: words.trim(), guess: guessGroup(section, words) });
  };
  const guess = answer?.guess;
  return <form className="lib-ask-group" onSubmit={ask}>
    <span className="lib-ask-kicker">Not sure which group?</span>
    <label htmlFor="lib-ask-group" className="lib-ask-label">Describe what's happening in your own words and we'll point you to the right group.</label>
    <div className="lib-ask-row">
      <input id="lib-ask-group" type="text" value={words} onChange={event => setWords(event.target.value)} placeholder="e.g. “Dad keeps losing his words and repeating himself”" />
      <button type="submit" className="lib-button is-small">Ask</button>
    </div>
    <div aria-live="polite">
      {answer && <p className="lib-ask-answer">
        {guess
          ? <>Start with <a href={`#group-${guess.group.id}`} onClick={jumpTo(`group-${guess.group.id}`)}><b>{guess.group.title}</b></a>.
            <Link href={conditionHref(guess.group.id, guess.condition.id)}>Open {guess.condition.title}<ArrowIcon size={14} /></Link></>
          : <>We couldn't tell from that. Try a symptom in a few words, or look through the groups below.</>}
      </p>}
    </div>
  </form>;
}

function GroupCard({ group }: { group: LibraryGroup }) {
  const stories = groupStories(group.id);
  const carers = stories.filter(story => story.carer).length;
  return <article id={`group-${group.id}`} className={`lib-group${group.badge ? " is-featured" : ""}`} aria-labelledby={`group-${group.id}-title`}>
    <div className="lib-group-head">
      <h3 id={`group-${group.id}-title`}>{group.title}</h3>
      {group.badge && <span className="lib-badge">{group.badge}</span>}
    </div>
    <p>{group.blurb}</p>
    <ul className="lib-condition-pills" role="list">
      {group.conditions.map(condition => {
        const topics = conditionItems(condition).length;
        return <li key={condition.id}>
          <Link href={conditionHref(group.id, condition.id)} className="lib-condition-pill">
            {condition.title}
            <span className="lib-pill-count"><span aria-hidden="true">{topics || "soon"}</span><span className="lib-sr">{topics ? `, ${plural(topics, "topic")}` : ", page coming soon"}</span></span>
          </Link>
        </li>;
      })}
    </ul>
    <span className="lib-group-stories">
      {stories.length ? <><Faces stories={stories} />{plural(stories.length, "story", "stories")} in this group{carers ? `, ${carers === stories.length ? "told by a carer" : `including ${numberWord(carers).toLowerCase()} told by a carer`}` : ""}</>
        : <>No stories yet</>}
    </span>
  </article>;
}

export function StoryCard({ story }: { story: LibraryStory }) {
  const lines = useMemo(() => [`${story.name}, ${story.age}.`, story.quote], [story]);
  const reading = useReadAloud(lines, true);
  return <article className="lib-story-card">
    <span className="lib-story-tag">{story.tag}</span>
    <p className="lib-story-quote">“{story.quote}”</p>
    <span className="lib-story-who"><Initial story={story} /><span><b>{story.name}, {story.age}</b><br />{story.when} · {story.chapters.length > 1 ? `${story.chapters.length} chapters` : `${story.minutes} min`}</span></span>
    <div className="lib-story-actions">
      <Link href={storyHref(story.id)} className="lib-story-read">Read<span className="lib-sr"> {story.name}'s story</span></Link>
      <button type="button" className="lib-story-listen" onClick={reading.toggle} aria-pressed={reading.playing} aria-label={`${reading.playing ? "Pause" : "Listen to"} ${story.name}'s words`}>
        {reading.playing ? <PauseIcon /> : <HeadphonesIcon size={18} />}
      </button>
    </div>
    <p className="lib-sr" role="status">{reading.note}</p>
  </article>;
}

type Filter = { id: string; label: string; test: (story: LibraryStory) => boolean };

export default function SectionPage({ section }: { section: LibrarySection }) {
  const count = sectionCounts(section);
  const stories = sectionStories(section.id);
  const filters: Filter[] = [
    { id: "all", label: "All", test: () => true },
    ...section.groups.filter(group => groupStories(group.id).length).map(group => ({ id: group.id, label: shortGroup(group), test: (story: LibraryStory) => story.groupId === group.id })),
    ...(stories.some(story => story.carer) ? [{ id: "carer", label: "Told by a carer", test: (story: LibraryStory) => Boolean(story.carer) }] : []),
  ];
  const [filter, setFilter] = useState("all");
  const shown = stories.filter((filters.find(candidate => candidate.id === filter) ?? filters[0]).test);

  return <div className="lib-page lib-section-page" style={hueStyle(section.hue)}>
    <section className="lib-section-hero">
      <div className="lib-wrap">
        <Crumbs trail={[{ label: "Library", href: "/" }, { label: section.title }]} />
        <div className="lib-section-hero-row">
          <div className="lib-section-hero-words">
            <span className="lib-section-hero-icon"><SectionGlyph icon={section.icon} size={72} /></span>
            <div>
              <h1>{section.title}</h1>
              <p>{section.blurb}</p>
              <span className="lib-section-count">{plural(count.groups, "group")} · {plural(count.conditions, "condition")} · {plural(count.topics, "topic")} · {plural(count.stories, "story", "stories")}</span>
            </div>
          </div>
          <AskWhichGroup section={section} />
        </div>
      </div>
    </section>

    <section className="lib-wrap lib-block" aria-labelledby="lib-groups">
      <div className="lib-row-head is-baseline">
        <h2 id="lib-groups" className="lib-h2">Choose a group, then a condition</h2>
        <span className="lib-sub">Each group opens into its own conditions; each condition has its own page.</span>
      </div>
      <div className="lib-grid lib-groups">
        {section.groups.map(group => <GroupCard key={group.id} group={group} />)}
      </div>
    </section>

    {stories.length > 0 && <section className="lib-wrap lib-block" aria-labelledby="lib-sec-stories">
      <div className="lib-row-head">
        <div>
          <span className="lib-kicker is-coral">Stories from this section</span>
          <h2 id="lib-sec-stories" className="lib-h2">{numberWord(stories.length)} {stories.length === 1 ? "person" : "people"}, {numberWord(stories.length).toLowerCase()} very different {stories.length === 1 ? "story" : "stories"}</h2>
        </div>
        {filters.length > 2 && <div role="group" aria-label="Filter stories" className="lib-filters">
          {filters.map(candidate => <button key={candidate.id} type="button" aria-pressed={filter === candidate.id} onClick={() => setFilter(candidate.id)}>{candidate.label}</button>)}
        </div>}
      </div>
      <div className="lib-grid lib-grid-3">
        {shown.map(story => <StoryCard key={story.id} story={story} />)}
      </div>
      <span className="lib-film-note">{STORIES_NOTE}</span>
      <div className="lib-own-story">
        <span><b>Have a story of your own?</b> Share it with people who understand, in My community.</span>
        <Link href="~/community" className="lib-pill-link is-coral">Go to My community</Link>
      </div>
    </section>}

    <footer className="lib-wrap lib-foot"><span>{LIBRARY_NOTE}</span></footer>
  </div>;
}
