import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "wouter";
import { DEFAULT_SOURCES, LIBRARY_NOTE, STORIES_NOTE, type ConditionContent, type ContentType, type LibraryItem, type LibraryStory, type StoryLink } from "@/content/library";
import { useReadAloud } from "@/lib/alira-read-aloud";
import {
  companionChapter,
  companionChapters,
  conditionHref,
  conditionKey,
  contentTitle,
  findCondition,
  findLetter,
  findStory,
  isReadable,
  itemHref,
  itemKey,
  numberWord,
  sectionHref,
  storiesFor,
  storyHref,
  STORIES_HREF,
  type ConditionPlace,
} from "@/lib/library";
import { libraryStore, useLibraryState, type LibraryState } from "@/lib/library-store";
import {
  ArrowIcon,
  BackIcon,
  BookmarkIcon,
  ChevronIcon,
  Crumbs,
  Envelope,
  Faces,
  HeadphonesIcon,
  Initial,
  jumpTo,
  KindArt,
  KindBadge,
  MetaLine,
  PauseIcon,
  SourceCard,
  TickIcon,
  useLines,
} from "./parts";
import { ConditionBento, hasVersionTwo, useConditionVersion, VersionSwitch } from "./ConditionBento";
import "@/pages/library-condition-v2.css";

// One condition's page, built from its data. Every condition with content has the same parts
// (Understand, Explore, Live well, Watch & listen, Trusted sources, Stories, Ask your doctor; Explore
// is "recover" in the data, and some conditions name it differently); `storyLayout` decides where the stories sit:
//   "woven"   a story band between Understand and Explore (B), a companion in the side rail
//             matched to the reader's week (C), and a prompt on the topic people worry about (D)
//   "opening" the story opens the page with a "skip to the facts" link (A), a letter closes it (E)
// A condition without content yet says so plainly and points to trusted sources.

const sentence = (text: string) => (/[.!?…”]$/.test(text) ? text : `${text}.`);
const PANEL_IDS: Record<ContentType, string> = { understand: "understand", recover: "recover", liveWell: "livewell", watch: "watch" };

/** Which part of the page is in view, for the "On this page" bar. */
function useActivePart(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join(",");
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const seen = new Map<string, boolean>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => seen.set(entry.target.id, entry.isIntersecting));
      const first = ids.find(id => seen.get(id));
      if (first) setActive(first);
    }, { rootMargin: "-20% 0px -65% 0px" });
    ids.forEach(id => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, [key]);
  return active;
}

type Part = { id: string; label: string; count: number; story?: boolean };

/** The names of the page's parts, without counts (review). A part with nothing in it is left out. */
function PartsBar({ parts }: { parts: Part[] }) {
  const active = useActivePart(parts.map(part => part.id));
  const bar = useRef<HTMLElement>(null);
  // On a phone the bar scrolls sideways; keep the part in view showing.
  useEffect(() => {
    const nav = bar.current;
    const link = nav?.querySelector<HTMLElement>(".is-active");
    if (!nav || !link || nav.scrollWidth <= nav.clientWidth) return;
    nav.scrollTo({ left: link.offsetLeft - nav.clientWidth / 2 + link.offsetWidth / 2 });
  }, [active]);
  // Sticky as a direct child of the page, so it stays in view the whole way down.
  return <div className="lib-parts-sticky">
    <nav ref={bar} aria-label="On this page" className="lib-wrap lib-parts">
      {parts.map(part => <a key={part.id} href={`#${part.id}`} onClick={jumpTo(part.id)} className={`${active === part.id ? "is-active" : ""}${part.story ? " is-story" : ""}`} aria-current={active === part.id ? "true" : undefined}>
        {part.label}
      </a>)}
    </nav>
  </div>;
}

// ------------------------------------------------------------------------------------------------
// The pieces.

type CardProps = { place: ConditionPlace; item: LibraryItem; state: LibraryState };
const isRead = (state: LibraryState, place: ConditionPlace, item: LibraryItem) => state.read.includes(itemKey({ ...place, item }));

/** Under a piece: its type (and, on Watch & listen, its length). No "Coming soon" tags on this page (review). */
function Meta({ place, item, state, minutes = false }: CardProps & { minutes?: boolean }) {
  return <span className="lib-meta-row">
    <MetaLine item={item} read={isRead(state, place, item)} readable={isReadable(item)} minutes={minutes} />
  </span>;
}

/** The link on a card: a genuine resource elsewhere opens in a new tab; a piece of ours opens its page. */
function PieceLink({ place, item, className, children }: { place: ConditionPlace; item: LibraryItem; className: string; children: ReactNode }) {
  if (item.url) return <a href={item.url} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
  return <Link href={itemHref({ ...place, item })} className={className}>{children}</Link>;
}

/** Understand: a text card. A "they felt this too" prompt (placement D) can sit on it. */
function TextCard({ place, item, state }: CardProps) {
  const felt = item.feltToo;
  const stories = felt ? felt.storyIds.map(id => findStory(id)).filter((story): story is LibraryStory => Boolean(story)) : [];
  return <li className={`lib-card lib-text-card${item.url ? " is-external" : ""}`}>
    <PieceLink place={place} item={item} className="lib-stretch"><strong>{item.title}</strong></PieceLink>
    {item.blurb && <span className="lib-card-text">{item.blurb}</span>}
    {felt && stories.length > 0 && <Link href={storyHref(felt.storyIds[0], felt.chapter)} className="lib-felt">
      <Faces stories={stories} size={22} /><span className="lib-felt-long">{felt.label} →</span><span className="lib-felt-short">{felt.shortLabel}</span>
    </Link>}
    <Meta place={place} item={item} state={state} />
    <ChevronIcon />
  </li>;
}

function MediaCard({ place, item, state }: CardProps) {
  return <li className="lib-card lib-media-card">
    <KindArt item={item} />
    <PieceLink place={place} item={item} className="lib-stretch"><strong>{item.title}</strong></PieceLink>
    <Meta place={place} item={item} state={state} />
  </li>;
}

function RowItem({ place, item, state }: CardProps) {
  return <li>
    <PieceLink place={place} item={item} className="lib-list-row">
      <span className="lib-list-words">
        <span className="lib-list-title">{item.title}</span>
        {isRead(state, place, item) && <span className="lib-readmark"><TickIcon />Read</span>}
      </span>
      <span className="lib-list-time">{item.minutes ? `${item.minutes} min` : ""}</span>
      <ChevronIcon />
    </PieceLink>
  </li>;
}

function WatchCard({ place, item, state }: CardProps) {
  return <li>
    <PieceLink place={place} item={item} className="lib-card lib-watch-card">
      <KindBadge kind={item.kind} />
      <span className="lib-watch-words"><strong>{item.title}</strong><Meta place={place} item={item} state={state} minutes /></span>
    </PieceLink>
  </li>;
}

function SectionHead({ id, title, note, story, action }: { id: string; title: string; note?: string; story?: StoryLink; action?: ReactNode }) {
  const person = story && findStory(story.storyId);
  return <div className="lib-part-head">
    <h2 id={`h-${id}`} className="lib-h2">{title}</h2>
    {note && <span className="lib-sub">{note}</span>}
    {story && person && <Link href={storyHref(story.storyId, story.chapter)} className="lib-story-pill"><Initial story={person} size={26} />{story.label} →</Link>}
    {action}
  </div>;
}

// ------------------------------------------------------------------------------------------------
// The story placements.

/**
 * C: someone further on. The reader says roughly where they are now, and their chapter is offered.
 * It sits at the top of the page behind a button of its own, closed until it is opened (review), so
 * the page's words have the full width until then.
 */
function Companion({ storyId, state }: { storyId: string; state: LibraryState }) {
  const story = findStory(storyId);
  const [open, setOpen] = useState(false);
  if (!story) return null;
  const chosen = state.companion[story.id];
  const chapter = companionChapter(story, chosen);
  const timed = companionChapters(story);
  const at = timed.indexOf(chapter);
  const he = story.pronoun === "his" ? "He's" : "She's";
  const label = chapter.label.toLowerCase();
  return <div className={`lib-companion-fold${open ? " is-open" : ""}`}>
    <button type="button" className="lib-companion-toggle" aria-expanded={open} aria-controls="companion" onClick={() => setOpen(value => !value)}>
      <Initial story={story} size={32} />
      <span className="lib-companion-toggle-words"><b>Walk the first year with {story.name}</b><span>{story.tag} · {story.when}</span></span>
      <span className="lib-companion-toggle-state">{open ? "Close" : "Open"}<ChevronIcon /></span>
    </button>
    <section id="companion" className="lib-companion" aria-labelledby="companion-title" hidden={!open}>
    <span className="lib-kicker is-coral">Someone {story.when.replace(/ on$/, "")} ahead</span>
    <div className="lib-companion-who">
      <Initial story={story} size={52} />
      <div>
        <h2 id="companion-title">{story.name}, {story.age}</h2>
        <span>{story.tag}. {he} {story.when.replace(/ on$/, "")} ahead.</span>
      </div>
    </div>
    <label className="lib-companion-where">
      <span>Where are you now?</span>
      <select value={chapter.id} onChange={event => libraryStore.setCompanion(story.id, event.target.value)}>
        {timed.map(candidate => <option key={candidate.id} value={candidate.id}>Around {candidate.label.toLowerCase()}</option>)}
      </select>
    </label>
    <p className="lib-companion-match" aria-live="polite">
      {chosen ? <>You're around <b>{label}</b>. {story.name}'s {label} chapter is “{chapter.title}”.</> : <>Start where {story.name} did: {label}, “{chapter.title}”.</>}
    </p>
    <ol className="lib-companion-list" role="list">
      {timed.map((candidate, index) => {
        const read = state.read.includes(`story:${story.id}:${candidate.id}`);
        const current = index === at;
        return <li key={candidate.id} className={current ? "is-current" : read ? "is-read" : undefined}>
          <span className="lib-dot" aria-hidden="true" />
          <Link href={storyHref(story.id, candidate.id)}>{candidate.label} · {candidate.title}</Link>
          <span className="lib-companion-time">{read ? "Read" : `${candidate.minutes} min`}</span>
        </li>;
      })}
    </ol>
    <Link href={storyHref(story.id, chapter.id)} className="lib-companion-go"><span>Read {label}<span className="lib-narrow-only"> · {chapter.minutes} min</span></span><ArrowIcon /></Link>
    </section>
  </div>;
}

/** A: the story opens the page; the facts follow, with a way straight to them. */
function OpeningStory({ storyId, quote }: { storyId: string; quote: string }) {
  const story = findStory(storyId);
  const lines = useLines(story ? [quote, ...story.chapters.flatMap(chapter => [`${chapter.label}. ${chapter.title}.`, ...chapter.paragraphs])] : []);
  const reading = useReadAloud(lines, true);
  if (!story) return null;
  const first = story.chapters[0];
  return <section id="story" className="lib-opening" aria-label={`${story.name}'s story opens this page`}>
    <div className="lib-opening-art" aria-hidden="true">
      <span className="lib-opening-letter">{story.name.slice(0, 1)}</span>
      <span className="lib-opening-sun" /><span className="lib-opening-moon" />
      <span className="lib-opening-chapter">{first.label} of {story.chapters.length}</span>
    </div>
    <div className="lib-opening-words">
      <span className="lib-opening-kicker">Before the facts, a person</span>
      <p className="lib-opening-quote">“{quote}”</p>
      <span className="lib-opening-who"><Initial story={{ name: story.name, tint: { tint: "#FFFEFA", ink: story.tint.ink } }} size={40} /><span><b>{story.name}, {story.age}</b> · {story.detail.toLowerCase()} · {story.pronoun} story, in {numberWord(story.chapters.length).toLowerCase()} short chapters</span></span>
      <div className="lib-opening-actions">
        <Link href={storyHref(story.id, first.id)} className="lib-opening-go">Start {first.label.toLowerCase()} · {first.minutes} min<ArrowIcon /></Link>
        <button type="button" className="lib-opening-listen" onClick={reading.toggle} aria-pressed={reading.playing}>{reading.playing ? <PauseIcon size={16} /> : <HeadphonesIcon />}{reading.playing ? "Pause" : reading.index > 0 ? "Carry on listening" : "Listen instead"}</button>
        <a href="#facts" onClick={jumpTo("facts")} className="lib-opening-skip">Skip to the facts ↓</a>
      </div>
      <p className="lib-sr" role="status">{reading.note}</p>
      <ol aria-label="Chapters" className="lib-opening-chapters">
        {story.chapters.map((chapter, index) => <li key={chapter.id}><Link href={storyHref(story.id, chapter.id)} className={index === 0 ? "is-first" : undefined}>{index + 1} · {chapter.title}</Link></li>)}
      </ol>
    </div>
  </section>;
}

/** E: a letter at the foot of the page. It waits in "For you" on the front page until it is opened. */
function LetterBand({ letterId, state }: { letterId: string; state: LibraryState }) {
  const letter = findLetter(letterId);
  if (!letter) return null;
  const opened = state.letters.includes(letter.id);
  return <section className="lib-letter-band" aria-labelledby="lib-letter">
    <div className="lib-letter-art"><Envelope opened={opened} /></div>
    <div className="lib-letter-words">
      <span className="lib-kicker is-coral">Before you go · a letter</span>
      <h2 id="lib-letter" className="lib-h2">{letter.title}</h2>
      <p className="lib-letter-opening">“{letter.opening}”</p>
      <div className="lib-letter-actions">
        <Link href={`/letters/${letter.id}`} className="lib-button is-coral">{opened ? "Read the letter again" : "Open the letter"} · {letter.minutes} min</Link>
        <span>{opened ? "You've opened this letter. It stays here whenever you want it." : letter.teaser}</span>
      </div>
    </div>
  </section>;
}

// ------------------------------------------------------------------------------------------------
// The side rail and the shared closing parts.

/** A side-rail heading that is a button: the panel's body shows only once it is opened. */
function RailToggle({ id, title, note, open, onToggle }: { id: string; title: string; note: string; open: boolean; onToggle: () => void }) {
  return <h2 id={`${id}-title`}>
    <button type="button" className="lib-rail-toggle" aria-expanded={open} aria-controls={`${id}-body`} onClick={onToggle}>
      <span className="lib-rail-toggle-words">{title}<small>{note}</small></span>
      <svg className="lib-rail-chevron" aria-hidden="true" focusable="false" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5" /></svg>
    </button>
  </h2>;
}

function AskDoctor({ place, questions, state }: { place: ConditionPlace; questions: string[]; state: LibraryState }) {
  const [open, setOpen] = useState(false);
  const key = conditionKey(place);
  const ticked = state.asks[key] ?? [];
  const note = `${questions.length} question${questions.length === 1 ? "" : "s"}${ticked.length ? ` · ${ticked.length} ticked` : ""}`;
  return <section id="ask" className={`lib-ask-doctor${open ? " is-open" : ""}`} aria-labelledby="lib-ask-title">
    <RailToggle id="lib-ask" title="Ask at your next appointment" note={note} open={open} onToggle={() => setOpen(was => !was)} />
    <div id="lib-ask-body" className="lib-rail-body" hidden={!open}>
      <p>Tick the ones you want. They're kept here for your next appointment{ticked.length ? ` (${ticked.length} ticked)` : ""}.</p>
      <div className="lib-ask-list">
        {questions.map((question, index) => <label key={question}>
          <input type="checkbox" checked={ticked.includes(index)} onChange={() => libraryStore.toggleAsk(key, index)} />
          <span>{question}</span>
        </label>)}
      </div>
    </div>
  </section>;
}

function Related({ content }: { content: ConditionContent }) {
  const [open, setOpen] = useState(false);
  const related = content.related.map(link => ({ link, place: findCondition(link.groupId, link.conditionId) })).filter(entry => entry.place);
  if (!related.length) return null;
  return <section className={`lib-related${open ? " is-open" : ""}`} aria-labelledby="lib-related-title">
    <RailToggle id="lib-related" title="Often read alongside" note={`${related.length} related page${related.length === 1 ? "" : "s"}`} open={open} onToggle={() => setOpen(was => !was)} />
    <div id="lib-related-body" className="lib-rail-body" hidden={!open}>
      {related.map(({ link, place }) => <Link key={conditionKey(place!)} href={conditionHref(place!.group.id, place!.condition.id)}>
        {link.label ?? place!.condition.title}<span style={{ color: place!.section.hue.ink }}>{place!.section.short}</span>
      </Link>)}
    </div>
  </section>;
}

function StoriesPanel({ place }: { place: ConditionPlace }) {
  const stories = storiesFor(place.condition);
  if (!stories.length) return null;
  return <section id="stories" className="lib-stories-panel" aria-labelledby="h-stories">
    <div className="lib-row-head">
      <div>
        <span className="lib-kicker is-coral">Stories · {place.condition.title.toLowerCase()}</span>
        <h2 id="h-stories" className="lib-h2">{numberWord(stories.length)} {stories.length === 1 ? "person" : "people"}, told in their own words</h2>
      </div>
      <span className="lib-film-note">{STORIES_NOTE}</span>
    </div>
    <ul role="list">
      {stories.map(story => <li key={story.id}>
        <Link href={storyHref(story.id)} className="lib-story-row">
          <Initial story={story} size={40} />
          <span className="lib-story-row-words"><strong>{story.name}, {story.age} · “{story.title}”</strong><span>{story.detail} · {story.when}</span></span>
          <span className="lib-list-time">{story.minutes} min</span>
        </Link>
      </li>)}
    </ul>
    <Link href={STORIES_HREF} className="lib-pill-link is-coral">More stories<ArrowIcon /></Link>
  </section>;
}

// ------------------------------------------------------------------------------------------------

function useCollapsed() {
  const [open, setOpen] = useState(false);
  return { open, toggle: () => setOpen(value => !value) };
}

/** The title, its line and the facts; the only action is Save (the read-aloud button was removed in review). */
function ConditionHeader({ place, full, state, switcher }: { place: ConditionPlace; full: boolean; state: LibraryState; switcher?: ReactNode }) {
  const { condition, group } = place;
  const saved = state.saved.includes(conditionKey(place));
  const save = () => libraryStore.toggleSaved(conditionKey(place));
  return <div id="facts" className="lib-condition-head">
    <div className="lib-condition-words">
      <h1>{condition.title}</h1>
      <p>{condition.summary ?? group.blurb}</p>
      {full && condition.facts && <ul className="lib-facts" role="list">{condition.facts.map(fact => <li key={fact}>{fact}</li>)}</ul>}
    </div>
    <div className="lib-condition-actions">
      {switcher}
      <button type="button" className="lib-save lib-wide-only" aria-pressed={saved} onClick={save}><BookmarkIcon filled={saved} />{saved ? "Saved to my pages" : "Save to my pages"}</button>
    </div>
  </div>;
}

/** The line under each part's heading: the page's own, or a plain default. */
const PURPOSE = {
  understand: (title: string) => `Understand ${title.toLowerCase()}, its causes and the tests used to diagnose it.`,
  recover: () => "Explore recovery, rehabilitation and ways to rebuild everyday skills.",
  liveWell: () => "Find practical support for everyday life.",
  watch: () => "Short films, talks and audio to watch or listen to at your own pace.",
  sources: () => "Find reliable information and guidance from trusted health organisations.",
};

export default function ConditionPage({ place }: { place: ConditionPlace }) {
  const { section, group, condition } = place;
  const content = condition.content;
  const full = Boolean(content && condition.summary);
  const key = conditionKey(place);
  const state = useLibraryState();
  const understand = useCollapsed();
  const { version, switchTo } = useConditionVersion(place);
  useEffect(() => { libraryStore.visit(key); }, [key]);
  const purpose = (part: keyof typeof PURPOSE) => content?.purpose?.[part] ?? PURPOSE[part](condition.title);
  const footer = content?.footer ?? LIBRARY_NOTE;

  const saved = state.saved.includes(key);
  const mobileBar = <div className="lib-mobilebar">
    <Link href={sectionHref(section)} className="lib-round" aria-label={`Back to ${section.title}`}><BackIcon /></Link>
    <span>Library · {group.title}</span>
    <button type="button" className="lib-round" aria-pressed={saved} aria-label={saved ? "Saved to my pages" : "Save this page"} onClick={() => libraryStore.toggleSaved(key)}><BookmarkIcon size={18} filled={saved} /></button>
  </div>;
  const crumbs = <Crumbs className="lib-wide-flex" trail={[{ label: "Library", href: "/" }, { label: section.title, href: sectionHref(section) }, { label: group.title, href: `${sectionHref(section)}#group-${group.id}` }, { label: condition.title }]} />;

  if (!full || !content) return <PlaceholderCondition place={place} mobileBar={mobileBar} crumbs={crumbs} state={state} />;

  const woven = condition.storyLayout !== "opening";
  const card = (Card: (props: CardProps) => ReactNode) => (item: LibraryItem) => <Card key={item.id} place={place} item={item} state={state} />;
  const stories = storiesFor(condition);
  const parts: Part[] = [
    { id: "understand", label: "Understand", count: content.understand.length },
    { id: "recover", label: contentTitle("recover", condition), count: content.recover.length },
    { id: "livewell", label: "Live well", count: content.liveWell.length },
    { id: "watch", label: "Watch & listen", count: content.watch.length },
    { id: "sources", label: "Trusted sources", count: content.sources.length },
    { id: woven ? "stories" : "story", label: "Stories", count: stories.length, story: true },
  ].filter(part => part.count > 0);

  const understandPart = <section id={PANEL_IDS.understand} aria-labelledby="h-understand" className="lib-part">
    <SectionHead id="understand" title="Understand" note={purpose("understand")} story={content.sectionStory?.understand} />
    <ul className={`lib-grid lib-grid-cards${woven ? " is-two" : " is-four"}${understand.open ? "" : " is-collapsed"}`} role="list">{content.understand.map(card(TextCard))}</ul>
    {content.understand.length > 2 && <button type="button" className="lib-more lib-narrow-only" aria-expanded={understand.open} onClick={understand.toggle}>
      {understand.open ? "Show fewer" : `${numberWord(content.understand.length - 2)} more`} →
    </button>}
  </section>;
  const recoverPart = <section id={PANEL_IDS.recover} aria-labelledby="h-recover" className="lib-part">
    <SectionHead id="recover" title={contentTitle("recover", condition)} note={purpose("recover")} story={content.sectionStory?.recover} />
    <ul className={`lib-grid lib-media-grid${woven ? " is-three" : " is-four"}`} role="list">{content.recover.map(card(MediaCard))}</ul>
  </section>;
  const liveWellPart = <section id={PANEL_IDS.liveWell} aria-labelledby="h-livewell" className="lib-part">
    <SectionHead id="livewell" title="Live well" note={purpose("liveWell")} />
    <ul className="lib-list" role="list">{content.liveWell.map(card(RowItem))}</ul>
  </section>;
  const watchList = <ul className="lib-grid lib-grid-cards is-three" role="list">{content.watch.map(card(WatchCard))}</ul>;
  const sourcesPart = (two: boolean) => <section id="sources" aria-labelledby="h-sources" className="lib-part">
    <div className="lib-part-head is-stacked">
      <h2 id="h-sources" className="lib-h2">Trusted sources</h2>
      <span className="lib-sub">{purpose("sources")}</span>
    </div>
    <div className={`lib-grid lib-sources${two ? " is-two" : " is-three"}`}>{content.sources.map(source => <SourceCard key={source.name} source={source} />)}</div>
    <div className="lib-sources-pills">{content.sources.filter(source => source.url).map(source => <SourceCard key={source.name} source={source} compact />)}</div>
  </section>;

  if (!woven) {
    return <div className="lib-page lib-condition is-story-led">
      <div className="lib-wrap">
        {mobileBar}
        {crumbs}
        {content.opening && <OpeningStory storyId={content.opening.storyId} quote={content.opening.quote} />}
        <ConditionHeader place={place} full state={state} />
      </div>
      <PartsBar parts={parts} />
      <div className="lib-wrap lib-condition-body is-single">
        {understandPart}
        {recoverPart}
        <div className="lib-grid lib-grid-2 lib-pair-parts">
          {liveWellPart}
          <div className="lib-part">
            {sourcesPart(true)}
            <details id="watch" className="lib-folded">
              <summary><HeadphonesIcon /><span><b>Watch & listen:</b> {content.watch.length} to watch and listen to, folded in here to keep this page calm.</span></summary>
              {watchList}
            </details>
          </div>
        </div>
        <div className="lib-grid lib-grid-2">
          <AskDoctor place={place} questions={content.askDoctor} state={state} />
          <Related content={content} />
        </div>
        {content.letterId && <LetterBand letterId={content.letterId} state={state} />}
      </div>
      <footer className="lib-wrap lib-foot"><span>{footer}</span></footer>
    </div>;
  }

  const twoVersions = hasVersionTwo(place);
  if (twoVersions && version === 2) {
    return <ConditionBento place={place} state={state} onSwitch={switchTo} slots={{
      sources: sourcesPart(false),
      stories: <StoriesPanel place={place} />,
      ask: <AskDoctor place={place} questions={content.askDoctor} state={state} />,
      related: <Related content={content} />,
      footer,
      purpose,
    }} />;
  }

  return <div className="lib-page lib-condition">
    <div className="lib-wrap">
      {mobileBar}
      {crumbs}
      <ConditionHeader place={place} full state={state} switcher={twoVersions ? <VersionSwitch to={2} onSwitch={switchTo} /> : undefined} />
    </div>
    <PartsBar parts={parts} />
    <div className="lib-wrap lib-condition-body">
      <div className="lib-condition-main">
        {understandPart}
        {recoverPart}
        {liveWellPart}
        <section id={PANEL_IDS.watch} aria-labelledby="h-watch" className="lib-part">
          <SectionHead id="watch" title="Watch & listen" note={purpose("watch")} />
          {watchList}
        </section>
        {sourcesPart(false)}
        <StoriesPanel place={place} />
      </div>
      <aside className="lib-condition-aside" aria-label="Alongside this page">
        <AskDoctor place={place} questions={content.askDoctor} state={state} />
        <Related content={content} />
      </aside>
    </div>
    <footer className="lib-wrap lib-foot"><span>{footer}</span></footer>
  </div>;
}

/** A condition whose page is still being written: what there is, said plainly. */
function PlaceholderCondition({ place, mobileBar, crumbs, state }: { place: ConditionPlace; mobileBar: ReactNode; crumbs: ReactNode; state: LibraryState }) {
  const { group, condition } = place;
  const items = condition.content?.understand ?? [];
  const sources = condition.content?.sources ?? DEFAULT_SOURCES;
  const siblings = group.conditions.filter(candidate => candidate.id !== condition.id);
  const ready = siblings.filter(candidate => candidate.content?.understand.length && candidate.summary);
  return <div className="lib-page lib-condition is-soon">
    <div className="lib-wrap">
      {mobileBar}
      {crumbs}
      <ConditionHeader place={place} full={false} state={state} />
    </div>
    <div className="lib-wrap lib-condition-body is-single">
      <section className="lib-soon-panel" aria-labelledby="lib-soon-title">
        <h2 id="lib-soon-title" className="lib-h2">We're still writing this page</h2>
        <p>The {condition.title} page will have plain-words guides, short videos and stories, checked before they go up. Until then, these trusted sources are a good place to start.</p>
        <div className="lib-grid lib-sources is-three">{sources.map(source => <SourceCard key={source.name} source={source} />)}</div>
      </section>
      {items.length > 0 && <section className="lib-part" aria-labelledby="h-understand">
        <SectionHead id="understand" title="Understand" />
        <ul className="lib-grid lib-grid-cards is-two" role="list">{items.map(item => <TextCard key={item.id} place={place} item={item} state={state} />)}</ul>
      </section>}
      {siblings.length > 0 && <section className="lib-part" aria-labelledby="lib-siblings">
        <h2 id="lib-siblings" className="lib-h2">Also in {group.title}</h2>
        <ul className="lib-condition-pills" role="list">
          {siblings.map(candidate => <li key={candidate.id}><Link href={conditionHref(group.id, candidate.id)} className="lib-condition-pill">{candidate.title}{ready.includes(candidate) ? null : <span className="lib-pill-count">soon</span>}</Link></li>)}
        </ul>
      </section>}
    </div>
    <footer className="lib-wrap lib-foot"><span>{LIBRARY_NOTE}</span></footer>
  </div>;
}
