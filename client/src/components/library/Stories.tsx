import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { librarySections, libraryStories, STORIES_NOTE, type LibraryLetter, type LibraryStory } from "@/content/library";
import { conditionHref, findCondition, findStory, numberWord, sectionStories, STORIES_HREF } from "@/lib/library";
import { libraryStore, useLibraryState } from "@/lib/library-store";
import { ArrowIcon, BackIcon, Crumbs, Envelope, Initial, jumpTo } from "./parts";
import { ListenBar, useNarration, type Block } from "./Reading";
import { StoryCard } from "./SectionPage";

// The stories (composites written for Rehyn) and the letters: all of them, one story in
// chapters, and one letter.

type Filter = { id: string; label: string; test: (story: LibraryStory) => boolean };

export function StoriesPage() {
  const filters: Filter[] = [
    { id: "all", label: "All", test: () => true },
    ...librarySections.filter(section => sectionStories(section.id).length).map(section => ({ id: section.id, label: section.short, test: (story: LibraryStory) => story.sectionId === section.id })),
    { id: "carer", label: "Told by a carer", test: (story: LibraryStory) => Boolean(story.carer) },
  ];
  const [filter, setFilter] = useState("all");
  const shown = libraryStories.filter((filters.find(candidate => candidate.id === filter) ?? filters[0]).test);
  return <div className="lib-page lib-stories-page">
    <div className="lib-wrap lib-block">
      <Crumbs trail={[{ label: "Library", href: "/" }, { label: "Stories" }]} />
      <div className="lib-row-head">
        <div>
          <span className="lib-kicker is-coral">People who've been here</span>
          <h1 className="lib-h1">{numberWord(libraryStories.length)} stories, told in their own words</h1>
        </div>
        <div role="group" aria-label="Filter stories" className="lib-filters">
          {filters.map(candidate => <button key={candidate.id} type="button" aria-pressed={filter === candidate.id} onClick={() => setFilter(candidate.id)}>{candidate.label}</button>)}
        </div>
      </div>
      <div className="lib-grid lib-grid-3">{shown.map(story => <StoryCard key={story.id} story={story} />)}</div>
      <span className="lib-film-note">{STORIES_NOTE}</span>
      <div className="lib-own-story">
        <span>More stories about life after a stroke, from survivors and carers, are in My Time.</span>
        <Link href="~/my-time?section=stories" className="lib-pill-link is-coral">Stories in My Time<ArrowIcon /></Link>
      </div>
    </div>
  </div>;
}

/** Marks a chapter read once most of it has been on screen. */
function useChapterSeen(story: LibraryStory) {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      const id = entry.target.getAttribute("data-chapter");
      if (entry.isIntersecting && id) libraryStore.markRead(`story:${story.id}:${id}`);
    }), { threshold: 0.6 });
    document.querySelectorAll("[data-chapter]").forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, [story.id]);
}

export function StoryPage({ story }: { story: LibraryStory }) {
  const place = findCondition(story.groupId, story.conditionId);
  const state = useLibraryState();
  const blocks = useMemo<Block[]>(() => [
    { key: "quote", text: story.quote },
    ...story.chapters.flatMap(chapter => [
      { key: `${chapter.id}-title`, text: chapter.title },
      ...chapter.paragraphs.map((paragraph, index) => ({ key: `${chapter.id}-${index}`, text: paragraph })),
    ]),
  ], [story]);
  const { narration, reading, say } = useNarration(blocks);
  useChapterSeen(story);

  return <div className="lib-page lib-story-page" style={{ ["--lib-tint" as string]: story.tint.tint, ["--lib-ink" as string]: story.tint.ink }}>
    <div className="lib-wrap lib-item-wrap">
      <div className="lib-mobilebar">
        <Link href={STORIES_HREF} className="lib-round" aria-label="All stories"><BackIcon /></Link>
        <span>Library · Stories</span>
        <span className="lib-round is-empty" aria-hidden="true" />
      </div>
      <Crumbs className="lib-wide-flex" trail={[{ label: "Library", href: "/" }, { label: "Stories", href: STORIES_HREF }, { label: story.name }]} />
      <header className="lib-story-hero">
        <span className="lib-story-tag">{story.tag}</span>
        <h1>{story.name}, {story.age} · “{story.title}”</h1>
        <p className="lib-story-hero-quote">“{say("quote")}”</p>
        <span className="lib-story-who"><Initial story={story} size={44} /><span><b>{story.detail}</b><br />{story.when} · {story.minutes} min</span></span>
      </header>
      <ListenBar reading={reading} total={narration.lines.length} label={`${story.name}'s story`} />
      {story.chapters.length > 1 && <nav aria-label="Chapters" className="lib-chapter-nav">
        {story.chapters.map(chapter => <a key={chapter.id} href={`#chapter-${chapter.id}`} onClick={jumpTo(`chapter-${chapter.id}`)} className={state.read.includes(`story:${story.id}:${chapter.id}`) ? "is-read" : undefined}>{chapter.label} · {chapter.title}</a>)}
      </nav>}
      <div className="lib-chapters">
        {story.chapters.map(chapter => <section key={chapter.id} id={`chapter-${chapter.id}`} data-chapter={chapter.id} className="lib-chapter" aria-labelledby={`chapter-${chapter.id}-title`}>
          <span className="lib-chapter-label">{chapter.label} · {chapter.minutes} min</span>
          <h2 id={`chapter-${chapter.id}-title`}>{say(`${chapter.id}-title`)}</h2>
          {chapter.paragraphs.length ? chapter.paragraphs.map((_, index) => <p key={index}>{say(`${chapter.id}-${index}`)}</p>)
            : <p className="lib-chapter-soon">This chapter is coming soon.</p>}
        </section>)}
      </div>
      <p className="lib-film-note">{STORIES_NOTE}</p>
      {place && <Link href={conditionHref(place.group.id, place.condition.id)} className="lib-back-link">Read about {place.condition.title.toLowerCase()}<ArrowIcon size={16} /></Link>}
    </div>
  </div>;
}

export function LetterPage({ letter }: { letter: LibraryLetter }) {
  const story = findStory(letter.storyId);
  const [opened] = useState(() => libraryStore.load().letters.includes(letter.id));
  const [open, setOpen] = useState(opened);
  const blocks = useMemo<Block[]>(() => [
    { key: "opening", text: letter.opening },
    ...letter.paragraphs.map((paragraph, index) => ({ key: `p-${index}`, text: paragraph })),
    { key: "sign", text: `From ${letter.signOff}.` },
  ], [letter]);
  const { narration, reading, say } = useNarration(blocks);
  // The envelope opens a moment after the page does; the letter is then kept as read.
  useEffect(() => {
    libraryStore.openLetter(letter.id);
    if (open) return;
    const still = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setOpen(true), still ? 0 : 650);
    return () => window.clearTimeout(timer);
  }, [letter.id]);

  return <div className="lib-page lib-letter-page">
    <div className="lib-wrap lib-item-wrap">
      <Crumbs trail={[{ label: "Library", href: "/" }, { label: "A letter" }]} />
      <div className={`lib-letter-envelope${open ? " is-open" : ""}`}><Envelope size={180} opened={open} /></div>
      <article className={`lib-letter-paper${open ? " is-open" : ""}`} aria-labelledby="lib-letter-title">
        <span className="lib-kicker is-coral">A letter{story ? ` from ${story.name}` : ""}</span>
        <h1 id="lib-letter-title" className="lib-h2">{letter.title}</h1>
        <ListenBar reading={reading} total={narration.lines.length} label="this letter" />
        <p className="lib-letter-opening">{say("opening")}</p>
        {letter.paragraphs.map((_, index) => <p key={index}>{say(`p-${index}`)}</p>)}
        <p className="lib-letter-sign">{letter.signOff}</p>
      </article>
      <p className="lib-film-note">{STORIES_NOTE}</p>
      {story && <Link href={`/stories/${story.id}`} className="lib-back-link">Read {story.name}'s story<ArrowIcon size={16} /></Link>}
    </div>
  </div>;
}
