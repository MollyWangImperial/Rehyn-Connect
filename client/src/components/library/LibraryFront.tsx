import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearch } from "wouter";
import { librarySections, POPULAR } from "@/content/library";
import { conditionByKey, itemHref, itemKey, mostReadPool, mostReadWindow, sectionHref } from "@/lib/library";
import { searchLibrary, type SearchHit } from "@/lib/library-search";
import { ArrowIcon, hueStyle, jumpTo, SearchIcon, SectionGlyph } from "./parts";

// The Library's front page, in the editorial style: search, then two numbered parts: the seven
// sections (the reference shelf) and the most read. The stories live on the condition and section
// pages, and under /library/stories.

/** How long each Most read list stays before it turns one place. */
const MOST_READ_TURN_MS = 6000;
const MOST_READ_SHOWN = 5;

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

function Browse() {
  return <section className="lib-wrap lib-block" aria-labelledby="lib-browse">
    <div className="lib-row-head">
      <div>
        <h2 id="lib-browse" className="lib-h2 is-big">Browse by condition</h2>
        <p className="lib-sub">Our team is continually adding new conditions, topics and resources to the library.</p>
      </div>
    </div>
    <ul className="lib-grid lib-grid-4" role="list">
      {librarySections.map(section => <li key={section.id}>
        <Link href={sectionHref(section)} className="lib-card lib-section-card" style={hueStyle(section.hue)}>
          <span className="lib-section-icon"><SectionGlyph icon={section.icon} /></span>
          <strong className="lib-card-title">{section.title}</strong>
          <span className="lib-chips">{section.chips.map(chip => <span key={chip}>{chip}</span>)}</span>
          <span className="lib-card-go">Explore section →</span>
        </Link>
      </li>)}
    </ul>
  </section>;
}

/** Whether the reader has asked for less motion; follows the setting if it changes. */
function useReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
  useEffect(() => {
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!media) return;
    const follow = () => setReduced(media.matches);
    media.addEventListener("change", follow);
    return () => media.removeEventListener("change", follow);
  }, []);
  return reduced;
}

/**
 * Most read, across the full width as a two-column list. Every few seconds the list turns one
 * place through the pool, in place; it holds while the pointer or focus is on it, while the tab is
 * hidden, and altogether when the reader prefers less motion.
 */
function MostRead() {
  const pool = useMemo(mostReadPool, []);
  const [offset, setOffset] = useState(0);
  const [held, setHeld] = useState(false);
  const still = useReducedMotion();
  const turning = !still && !held && pool.length > MOST_READ_SHOWN;

  useEffect(() => {
    if (!turning) return;
    let timer: number | undefined;
    const start = () => { stop(); if (!document.hidden) timer = window.setInterval(() => setOffset(at => at + 1), MOST_READ_TURN_MS); };
    const stop = () => { if (timer !== undefined) { window.clearInterval(timer); timer = undefined; } };
    start();
    document.addEventListener("visibilitychange", start);
    return () => { stop(); document.removeEventListener("visibilitychange", start); };
  }, [turning]);

  const shown = mostReadWindow(pool, offset, MOST_READ_SHOWN);
  return <section className="lib-wrap lib-block lib-pair">
    <div className="lib-mostread" onPointerEnter={() => setHeld(true)} onPointerLeave={() => setHeld(false)} onFocus={() => setHeld(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHeld(false); }}>
      <h2 className="lib-h2 is-warm">Most read</h2>
      <ol role="list">
        {shown.map((place, index) => <li key={itemKey(place)}>
          <Link href={itemHref(place)}>
            <span className="lib-mostread-n">{index + 1}</span>
            <span className="lib-mostread-title">{place.item.title}</span>
            <span className="lib-mostread-tag">{place.group.title}</span>
          </Link>
        </li>)}
      </ol>
    </div>
  </section>;
}

export default function LibraryFront() {
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
      <nav className="lib-popular" aria-label="Popular conditions">
        {POPULAR.map(chip => {
          const place = conditionByKey(chip.key);
          return place ? <Link key={chip.key} href={`/${chip.key}`}>{chip.label}</Link> : null;
        })}
      </nav>
    </section>

    <Browse />
    <MostRead />
  </div>;
}
