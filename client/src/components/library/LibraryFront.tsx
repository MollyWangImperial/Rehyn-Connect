import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearch } from "wouter";
import { libraryLetters, librarySections, LIBRARY_NOTE, MOST_READ, POPULAR, STORIES_NOTE, THREE_MINUTE_ANSWERS, type LibraryLetter } from "@/content/library";
import {
  conditionByKey,
  conditionItems,
  contentTitle,
  findStory,
  isReadable,
  itemByKey,
  itemHref,
  itemKey,
  learnArticle,
  libraryCounts,
  sectionCounts,
  sectionHref,
  storyHref,
  STORIES_HREF,
  type ConditionPlace,
} from "@/lib/library";
import { searchLibrary, type SearchHit } from "@/lib/library-search";
import { useLibraryState, type LibraryState } from "@/lib/library-store";
import { AliraMark, ArrowIcon, Envelope, HeadphonesIcon, hueStyle, jumpTo, LetterCard, PlayIcon, QuoteCard, SearchIcon, SectionGlyph } from "./parts";

// The Library's front page: search, three things for today, stories from people who have been
// here, the eight sections, and the short answers people open most.

const FALLBACK = "stroke/ischaemic";
const FILM = ["li-wei", "margaret", "dev"];

function SearchResults({ query, hits }: { query: string; hits: SearchHit[] }) {
  return <section className="lib-results" aria-labelledby="lib-results-title">
    <h2 id="lib-results-title" className="lib-results-title" tabIndex={-1} aria-live="polite">
      {hits.length ? `${hits.length} ${hits.length === 1 ? "match" : "matches"} for “${query.trim()}”` : `Nothing yet for “${query.trim()}”`}
    </h2>
    {hits.length ? <ul className="lib-results-list" role="list">
      {hits.map(hit => <li key={hit.href}>
        <Link href={hit.href} className="lib-result">
          <span className={`lib-result-kind is-${hit.kind}`}>{hit.kind === "condition" ? "Condition" : "Topic"}</span>
          <span className="lib-result-words"><strong>{hit.title}</strong><span>{hit.where}</span></span>
          <ArrowIcon />
        </Link>
      </li>)}
    </ul> : <p className="lib-results-empty">Try a shorter word, such as a condition or a symptom, or <a href="#lib-browse" onClick={jumpTo("lib-browse")}>browse by condition</a> below.</p>}
  </section>;
}

/** The condition to pick up: the one visited last, if it has a page yet; otherwise ischaemic stroke. */
function pickUp(state: LibraryState) {
  const last = state.last ? conditionByKey(state.last) : undefined;
  const place = (last?.condition.content?.understand.length ? last : undefined) ?? (conditionByKey(FALLBACK) as ConditionPlace);
  const items = conditionItems(place.condition);
  const read = items.filter(({ item }) => state.read.includes(itemKey({ ...place, item })));
  const next = items.find(({ item }) => !state.read.includes(itemKey({ ...place, item }))) ?? items[0];
  return { place, items, read: read.length, next, resumed: Boolean(last && last === place) };
}

function ForYou({ state }: { state: LibraryState }) {
  const resume = pickUp(state);
  const progress = resume.items.length ? Math.round((resume.read / resume.items.length) * 100) : 0;
  // Alira suggests a checked short answer the reader has not opened, from the condition they read most recently.
  const suggestion = conditionItems(resume.place.condition).find(({ item }) => isReadable(item) && !state.read.includes(itemKey({ ...resume.place, item })))
    ?? conditionItems(resume.place.condition).find(({ item }) => isReadable(item));
  const learn = suggestion && learnArticle(suggestion.item);
  const letter: LibraryLetter | undefined = libraryLetters.find(candidate => !state.letters.includes(candidate.id));
  const fresh = conditionItems(resume.place.condition).find(({ item }) => item.isNew);

  return <section className="lib-wrap lib-block" aria-labelledby="lib-foryou">
    <h2 id="lib-foryou" className="lib-h2">For you today</h2>
    <div className="lib-grid lib-grid-3">
      <Link href={itemHref({ ...resume.place, item: resume.next.item })} className="lib-card lib-foryou" style={hueStyle(resume.place.section.hue)}>
        <span className="lib-card-kicker">{resume.resumed ? "Pick up where you left off" : "A good place to start"}</span>
        <strong className="lib-card-title">{resume.place.condition.title} · {contentTitle(resume.next.type, resume.place.condition)}</strong>
        <span className="lib-card-text">Next up: “{resume.next.item.title}”{resume.next.item.minutes ? ` · ${resume.next.item.minutes} min` : ""}</span>
        <span className="lib-progress">
          <span className="lib-progress-track" aria-hidden="true"><i style={{ width: `${progress}%` }} /></span>
          {resume.read} of {resume.items.length} read
        </span>
      </Link>
      {suggestion && <Link href={itemHref({ ...resume.place, item: suggestion.item })} className="lib-card lib-foryou is-alira">
        <span className="lib-card-kicker"><AliraMark />Alira suggests</span>
        <strong className="lib-card-title">{learn?.question ?? suggestion.item.title}</strong>
        <span className="lib-card-text">{learn?.hook ?? suggestion.item.blurb}</span>
        <span className="lib-card-foot">A short answer · Alira can read it to you</span>
      </Link>}
      {letter ? <Link href={`/letters/${letter.id}`} className="lib-card lib-foryou is-letter">
        <span className="lib-card-kicker"><Envelope size={34} />A letter waiting for you</span>
        <strong className="lib-card-title">{letter.title}</strong>
        <span className="lib-card-text">{letter.teaser}</span>
        <span className="lib-card-foot">Open the envelope · {letter.minutes} min</span>
      </Link> : fresh ? <Link href={itemHref({ ...resume.place, item: fresh.item })} className="lib-card lib-foryou is-new">
        <span className="lib-card-kicker">New this week</span>
        <strong className="lib-card-title">{fresh.item.title}</strong>
        {fresh.item.blurb && <span className="lib-card-text">{fresh.item.blurb}</span>}
        <span className="lib-card-foot"><PlayIcon size={14} />Video · {fresh.item.minutes} min</span>
      </Link> : null}
    </div>
  </section>;
}

function Filmstrip({ state }: { state: LibraryState }) {
  const stories = FILM.map(id => findStory(id)).filter(story => story !== undefined);
  const letter = libraryLetters[0];
  return <section className="lib-film" aria-labelledby="lib-film-title">
    <div className="lib-wrap lib-film-inner">
      <div className="lib-row-head">
        <div>
          <span className="lib-kicker is-coral">People who've been here</span>
          <h2 id="lib-film-title" className="lib-h2 is-big">Nobody explains a condition like someone who has lived it</h2>
        </div>
        <Link href={STORIES_HREF} className="lib-pill-link is-coral">All {libraryCounts().stories} stories<ArrowIcon /></Link>
      </div>
      <div className="lib-grid lib-grid-4">
        {stories.map(story => <QuoteCard key={story.id} story={story} href={storyHref(story.id)} />)}
        <LetterCard letter={letter} opened={state.letters.includes(letter.id)} />
      </div>
      <span className="lib-film-note">{STORIES_NOTE}</span>
    </div>
  </section>;
}

function Browse() {
  const counts = libraryCounts();
  return <section className="lib-wrap lib-block" aria-labelledby="lib-browse">
    <div className="lib-row-head">
      <div>
        <h2 id="lib-browse" className="lib-h2 is-big">Browse by condition</h2>
        <p className="lib-sub">{counts.sections} sections, {counts.conditions} conditions. Start broad and narrow down, or search above if you already know the name.</p>
      </div>
      <span className="lib-counts">{counts.topics} topics · {counts.stories} stories · {counts.links} trusted links</span>
    </div>
    <ul className="lib-grid lib-grid-4" role="list">
      {librarySections.map(section => {
        const count = sectionCounts(section);
        return <li key={section.id}>
          <Link href={sectionHref(section)} className="lib-card lib-section-card" style={hueStyle(section.hue)}>
            <span className="lib-section-icon"><SectionGlyph icon={section.icon} /></span>
            <strong className="lib-card-title">{section.title}</strong>
            <span className="lib-section-count">{count.conditions} conditions · {count.topics} {count.topics === 1 ? "topic" : "topics"}</span>
            <span className="lib-chips">{section.chips.map(chip => <span key={chip}>{chip}</span>)}</span>
            <span className="lib-card-go">Explore section →</span>
          </Link>
        </li>;
      })}
    </ul>
  </section>;
}

function ShortLists() {
  const mostRead = MOST_READ.map(itemByKey).filter(place => place !== undefined);
  const answers = THREE_MINUTE_ANSWERS.map(itemByKey).filter(place => place !== undefined);
  return <section className="lib-wrap lib-block lib-pair">
    <div className="lib-mostread">
      <h2 className="lib-h2 is-warm">Most read</h2>
      <ol role="list">
        {mostRead.map((place, index) => <li key={itemKey(place)}>
          <Link href={itemHref(place)}>
            <span className="lib-mostread-n">{index + 1}</span>
            <span className="lib-mostread-title">{place.item.title}</span>
            <span className="lib-mostread-tag">{place.group.title}</span>
          </Link>
        </li>)}
      </ol>
    </div>
    <div className="lib-answers">
      <div>
        <h2 className="lib-h2">Three-minute answers</h2>
        <p className="lib-sub">Short, friendly answers you can read or listen to in about three minutes.</p>
      </div>
      <ul className="lib-grid lib-grid-2" role="list">
        {answers.map(place => <li key={itemKey(place)}>
          <Link href={itemHref(place)} className="lib-card lib-answer" style={hueStyle(place.section.hue)}>
            <strong>{place.item.title}</strong>
            <span>{place.group.title} · {place.item.minutes} min</span>
          </Link>
        </li>)}
      </ul>
    </div>
  </section>;
}

export default function LibraryFront() {
  const state = useLibraryState();
  // A search can arrive in the address (/library?q=tired), from "Look up a topic" in the left panel.
  const asked = new URLSearchParams(useSearch()).get("q") ?? "";
  const [query, setQuery] = useState(asked);
  useEffect(() => { if (asked) setQuery(asked); }, [asked]);
  const hits = useMemo(() => searchLibrary(query), [query]);
  const results = useRef<HTMLDivElement>(null);
  const searching = query.trim().length > 0;

  return <div className="lib-page lib-front">
    <section className="lib-wrap lib-hero">
      <span className="lib-kicker is-coral">Understand what you're living with</span>
      <h1 className="lib-title">Library<span>.</span></h1>
      <p className="lib-lede">Plain-words guides, short videos and trusted links on the conditions that matter to you, and the stories of people who have already been through them.</p>
      <form role="search" className="lib-search" onSubmit={event => { event.preventDefault(); results.current?.querySelector<HTMLElement>("h2")?.focus(); }}>
        <label htmlFor="lib-search" className="lib-sr">Search the library</label>
        <div className="lib-search-box">
          <SearchIcon />
          <input id="lib-search" type="search" value={query} onChange={event => setQuery(event.target.value)} autoComplete="off"
            placeholder="A condition, a symptom, a question… e.g. “why am I so tired after my stroke?”" />
        </div>
        <button type="submit" className="lib-button">Search</button>
      </form>
      {/* Results come straight under the box, so they are seen as soon as they change. */}
      <div ref={results}>{searching && <SearchResults query={query} hits={hits} />}</div>
      <div className="lib-popular">
        <span>Popular right now</span>
        {POPULAR.map(chip => {
          const place = conditionByKey(chip.key);
          return place ? <Link key={chip.key} href={`/${chip.key}`}>{chip.label}</Link> : null;
        })}
      </div>
    </section>

    <ForYou state={state} />
    <Filmstrip state={state} />
    <Browse />
    <ShortLists />

    <footer className="lib-wrap lib-foot">
      <span>{LIBRARY_NOTE}</span>
      <span className="lib-foot-voice"><HeadphonesIcon />Alira can read any condition page aloud</span>
    </footer>
  </div>;
}
