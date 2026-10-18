import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link, useSearch } from "wouter";
import { librarySections, POPULAR, type SectionIcon } from "@/content/library";
import { conditionByKey, itemHref, itemKey, mostReadPool, mostReadWindow, sectionHref } from "@/lib/library";
import { searchLibrary, type SearchHit } from "@/lib/library-search";
import { ArrowIcon, jumpTo, SearchIcon } from "./parts";

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

/**
 * Each section's card colours and the large line drawing that sits faintly in its corner
 * ("watermark cards", browse-by-condition-watermark.html). The drawing drifts up and darkens on hover.
 */
const WATERMARKS: Record<SectionIcon, { ink: string; tint: string; art: ReactNode }> = {
  brain: { ink: "#4A3F9C", tint: "#EEEBFA", art: <>
    <path d="M100 45 C75 28, 42 44, 44 80 C32 96, 36 128, 56 138 C60 164, 90 170, 100 152" />
    <path d="M100 45 C125 28, 158 44, 156 80 C168 96, 164 128, 144 138 C140 164, 110 170, 100 152" />
    <path d="M100 45 V152 M100 152 V178" />
    <path d="M58 86 C70 76, 80 96, 92 86 M54 118 C68 108, 80 128, 92 118 M108 86 C120 76, 130 96, 142 86 M108 118 C120 108, 132 128, 146 118 M70 62 C78 54, 86 70, 92 62 M108 62 C116 54, 124 70, 130 62" />
  </> },
  heart: { ink: "#A8402B", tint: "#FCEBE6", art: <>
    <path d="M100 28 V78 M100 60 L82 82 M100 60 L118 82" />
    <path d="M84 84 C58 84, 36 120, 40 158 C44 178, 76 180, 84 162 Z" />
    <path d="M116 84 C142 84, 164 120, 160 158 C156 178, 124 180, 116 162 Z" />
    <path d="M100 128 C92 114, 70 118, 76 140 C80 154, 100 170, 100 170 C100 170, 120 154, 124 140 C130 118, 108 114, 100 128 Z" fill="currentColor" stroke="none" opacity=".7" />
  </> },
  drop: { ink: "#8A5A12", tint: "#FBF0DC", art: <>
    <path d="M58 72 A52 52 0 0 1 150 84 M150 84 L152 66 M150 84 L132 80" />
    <path d="M142 128 A52 52 0 0 1 50 116 M50 116 L48 134 M50 116 L68 120" />
    <path d="M100 62 C86 88, 78 104, 78 116 A22 22 0 0 0 122 116 C122 104, 114 88, 100 62 Z" />
  </> },
  bone: { ink: "#1F6B66", tint: "#E5F1F0", art: <>
    <path d="M72 30 L92 92 M128 30 L108 92" />
    <circle cx="72" cy="30" r="11" /><circle cx="128" cy="30" r="11" />
    <path d="M80 102 C90 90, 110 90, 120 102 M80 110 C90 122, 110 122, 120 110" />
    <path d="M90 118 L70 172 M110 118 L130 172" />
    <circle cx="70" cy="172" r="11" /><circle cx="130" cy="172" r="11" />
  </> },
  ribbon: { ink: "#A83C5E", tint: "#FBE6EC", art: <>
    <path d="M100 30 C66 30, 58 78, 100 112 C142 78, 134 30, 100 30 Z" />
    <path d="M84 98 L54 176 M116 98 L146 176 M84 130 L130 170 M116 130 L70 170" />
  </> },
  mind: { ink: "#2F4FA3", tint: "#E6ECF8", art: <>
    <path d="M82 176 V142 L56 136 L70 110 C44 70, 70 32, 112 32 C152 32, 172 64, 162 104 L172 124 L152 130 L148 176" />
    <path d="M96 84 C112 72, 130 92, 114 104 C102 112, 104 124, 120 122" />
  </> },
  kidney: { ink: "#4B7A2E", tint: "#EAF3E4", art: <>
    <path d="M84 52 C58 48, 44 86, 50 120 C54 148, 78 166, 88 144 C78 126, 78 92, 84 52 Z" />
    <path d="M116 52 C142 48, 156 86, 150 120 C146 148, 122 166, 112 144 C122 126, 122 92, 116 52 Z" />
    <path d="M88 144 L96 180 M112 144 L104 180" />
  </> },
};

const SUGGEST_HREF = "mailto:info@rehyn.com?subject=" + encodeURIComponent("A condition for the Library");

function Browse() {
  return <section className="lib-wrap lib-block lib-browse" aria-labelledby="lib-browse">
    <div className="lib-browse-head">
      <span className="lib-browse-kicker">No. 01 · The reference shelf</span>
      <h2 id="lib-browse" className="lib-browse-title">Browse by condition</h2>
      <p className="lib-browse-sub">Our team is continually adding new conditions, topics and resources to the library.</p>
    </div>
    <ul className="lib-browse-grid" role="list">
      {librarySections.map(section => {
        const mark = WATERMARKS[section.icon];
        return <li key={section.id}>
          <Link href={sectionHref(section)} className="lib-wm-card" style={{ ["--wm-ink" as string]: mark.ink, ["--wm-tint" as string]: mark.tint }}>
            <svg className="lib-wm-art" aria-hidden="true" focusable="false" viewBox="0 0 200 200">{mark.art}</svg>
            <strong className="lib-wm-title">{section.title}</strong>
            <span className="lib-wm-chips">{section.chips.map(chip => <span key={chip}>{chip}</span>)}</span>
            <span className="lib-wm-go">Explore section <span className="lib-wm-arrow" aria-hidden="true">→</span></span>
          </Link>
        </li>;
      })}
      <li>
        <div className="lib-wm-more">
          <span className="lib-wm-more-title">More on the way</span>
          <span>Can’t find your condition? Tell us and we will add it to the shelf.</span>
          <a href={SUGGEST_HREF}>Suggest a condition <span aria-hidden="true">→</span></a>
        </div>
      </li>
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
