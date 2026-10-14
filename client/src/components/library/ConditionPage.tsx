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
  ClockIcon,
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
  ReadAloudButton,
  SoonTag,
  SourceCard,
  TickIcon,
  useLines,
} from "./parts";

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
        {part.label}{part.count ? <span className="lib-parts-count">{part.count}</span> : null}
      </a>)}
    </nav>
  </div>;
}

// ------------------------------------------------------------------------------------------------
// The pieces.

type CardProps = { place: ConditionPlace; item: LibraryItem; state: LibraryState };
const isRead = (state: LibraryState, place: ConditionPlace, item: LibraryItem) => state.read.includes(itemKey({ ...place, item }));

function Meta({ place, item, state }: CardProps) {
  const readable = isReadable(item);
  return <span className="lib-meta-row">
    <MetaLine item={item} read={isRead(state, place, item)} readable={readable} />
    {!readable && <SoonTag />}
  </span>;
}

/** Understand: a text card. A "they felt this too" prompt (placement D) can sit on it. */
function TextCard({ place, item, state }: CardProps) {
  const felt = item.feltToo;
  const stories = felt ? felt.storyIds.map(id => findStory(id)).filter((story): story is LibraryStory => Boolean(story)) : [];
  return <li className="lib-card lib-text-card">
    <Link href={itemHref({ ...place, item })} className="lib-stretch"><strong>{item.title}</strong></Link>
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
    <Link href={itemHref({ ...place, item })} className="lib-stretch"><strong>{item.title}</strong></Link>
    <Meta place={place} item={item} state={state} />
  </li>;
}

function RowItem({ place, item, state }: CardProps) {
  return <li>
    <Link href={itemHref({ ...place, item })} className="lib-list-row">
      <span className="lib-list-words">
        <span className="lib-list-title">{item.title}</span>
        {isRead(state, place, item) && <span className="lib-readmark"><TickIcon />Read</span>}
        {!isReadable(item) && <SoonTag />}
      </span>
      <span className="lib-list-time">{item.minutes ? `${item.minutes} min` : ""}</span>
      <ChevronIcon />
    </Link>
  </li>;
}

function WatchCard({ place, item, state }: CardProps) {
  return <li>
    <Link href={itemHref({ ...place, item })} className="lib-card lib-watch-card">
      <KindBadge kind={item.kind} />
      <span className="lib-watch-words"><strong>{item.title}</strong><Meta place={place} item={item} state={state} /></span>
    </Link>
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

/** B: a dark band between Understand and Explore. */
function PauseBand({ pause }: { pause: NonNullable<ConditionContent["pause"]> }) {
  const story = findStory(pause.storyId);
  if (!story) return null;
  return <section className="lib-pause" aria-label="Pause for a story">
    <span className="lib-pause-mark" aria-hidden="true">”</span>
    <div className="lib-pause-words">
      <span className="lib-pause-kicker"><ClockIcon />Pause for a story · 2 minutes</span>
      <p className="lib-pause-quote"><span className="lib-wide-only">“{pause.quote}”</span><span className="lib-narrow-only">“{story.quote}”</span></p>
      <span className="lib-pause-who"><Initial story={story} size={38} /><span><b>{story.name}, {story.age}</b> · {story.tag.toLowerCase()}, {story.detail.split(" · ")[0].toLowerCase()} · {story.when}</span></span>
    </div>
    <div className="lib-pause-actions">
      <Link href={storyHref(story.id, pause.chapter)} className="lib-pause-go">{pause.cta}<ArrowIcon /></Link>
      <a href="#recover" onClick={jumpTo("recover")} className="lib-pause-later"><span className="lib-wide-only">Keep learning instead</span><span className="lib-narrow-only">Later</span></a>
    </div>
  </section>;
}

/** C: someone further on. The reader says roughly where they are now, and their chapter is offered. */
function Companion({ storyId, state, inline = false }: { storyId: string; state: LibraryState; inline?: boolean }) {
  const story = findStory(storyId);
  if (!story) return null;
  const chosen = state.companion[story.id];
  const chapter = companionChapter(story, chosen);
  const timed = companionChapters(story);
  const at = timed.indexOf(chapter);
  const he = story.pronoun === "his" ? "He's" : "She's";
  const label = chapter.label.toLowerCase();
  const titleId = inline ? "companion-inline" : "companion";
  return <section className={`lib-companion${inline ? " is-inline" : ""}`} aria-labelledby={titleId}>
    <span className="lib-kicker is-coral">Someone {story.when.replace(/ on$/, "")} ahead</span>
    <div className="lib-companion-who">
      <Initial story={story} size={inline ? 42 : 52} />
      <div>
        <h2 id={titleId}>Walk the first year with {story.name}</h2>
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
    <div className="lib-companion-bar" aria-hidden="true">{timed.map((candidate, index) => <i key={candidate.id} className={index === at ? "is-current" : index < at ? "is-before" : undefined} />)}</div>
    <Link href={storyHref(story.id, chapter.id)} className="lib-companion-go"><span>Read {label}<span className="lib-narrow-only"> · {chapter.minutes} min</span></span><ArrowIcon /></Link>
  </section>;
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

function AskDoctor({ place, questions, state }: { place: ConditionPlace; questions: string[]; state: LibraryState }) {
  const key = conditionKey(place);
  const ticked = state.asks[key] ?? [];
  return <section id="ask" className="lib-ask-doctor" aria-labelledby="lib-ask-title">
    <h2 id="lib-ask-title">Ask at your next appointment</h2>
    <p>Tick the ones you want. They're kept here for your next appointment{ticked.length ? ` (${ticked.length} ticked)` : ""}.</p>
    <div className="lib-ask-list">
      {questions.map((question, index) => <label key={question}>
        <input type="checkbox" checked={ticked.includes(index)} onChange={() => libraryStore.toggleAsk(key, index)} />
        <span>{question}</span>
      </label>)}
    </div>
  </section>;
}

function Related({ content }: { content: ConditionContent }) {
  const related = content.related.map(link => ({ link, place: findCondition(link.groupId, link.conditionId) })).filter(entry => entry.place);
  if (!related.length) return null;
  return <section className="lib-related" aria-labelledby="lib-related-title">
    <h2 id="lib-related-title">Often read alongside</h2>
    {related.map(({ link, place }) => <Link key={conditionKey(place!)} href={conditionHref(place!.group.id, place!.condition.id)}>
      {link.label ?? place!.condition.title}<span style={{ color: place!.section.hue.ink }}>{place!.section.short}</span>
    </Link>)}
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

function ConditionHeader({ place, full, state, lines }: { place: ConditionPlace; full: boolean; state: LibraryState; lines: string[] }) {
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
      <ReadAloudButton lines={lines} />
      <button type="button" className="lib-save lib-wide-only" aria-pressed={saved} onClick={save}><BookmarkIcon filled={saved} />{saved ? "Saved to my pages" : "Save to my pages"}</button>
    </div>
  </div>;
}

export default function ConditionPage({ place }: { place: ConditionPlace }) {
  const { section, group, condition } = place;
  const content = condition.content;
  const full = Boolean(content && condition.summary);
  const key = conditionKey(place);
  const state = useLibraryState();
  const understand = useCollapsed();
  useEffect(() => { libraryStore.visit(key); }, [key]);

  const lines = useLines([
    sentence(condition.title),
    condition.summary ?? group.blurb,
    ...(condition.facts ?? []).map(sentence),
    ...(content ? (["understand", "recover", "liveWell", "watch"] as ContentType[]).flatMap(type => content[type].length
      ? [sentence(contentTitle(type, condition)), ...content[type].flatMap(item => [sentence(item.title), item.blurb])]
      : []) : []),
    full ? "" : "This page is still being written.",
  ]);

  const saved = state.saved.includes(key);
  const mobileBar = <div className="lib-mobilebar">
    <Link href={sectionHref(section)} className="lib-round" aria-label={`Back to ${section.title}`}><BackIcon /></Link>
    <span>Library · {group.title}</span>
    <button type="button" className="lib-round" aria-pressed={saved} aria-label={saved ? "Saved to my pages" : "Save this page"} onClick={() => libraryStore.toggleSaved(key)}><BookmarkIcon size={18} filled={saved} /></button>
  </div>;
  const crumbs = <Crumbs className="lib-wide-flex" trail={[{ label: "Library", href: "/" }, { label: section.title, href: sectionHref(section) }, { label: group.title, href: `${sectionHref(section)}#group-${group.id}` }, { label: condition.title }]} />;

  if (!full || !content) return <PlaceholderCondition place={place} lines={lines} mobileBar={mobileBar} crumbs={crumbs} state={state} />;

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
    <SectionHead id="understand" title="Understand" note={woven ? "Plain words, three to five minutes each" : undefined} story={content.sectionStory?.understand} />
    <ul className={`lib-grid lib-grid-cards${woven ? " is-two" : " is-four"}${understand.open ? "" : " is-collapsed"}`} role="list">{content.understand.map(card(TextCard))}</ul>
    {content.understand.length > 2 && <button type="button" className="lib-more lib-narrow-only" aria-expanded={understand.open} onClick={understand.toggle}>
      {understand.open ? "Show fewer" : `${numberWord(content.understand.length - 2)} more`} →
    </button>}
  </section>;
  const recoverPart = <section id={PANEL_IDS.recover} aria-labelledby="h-recover" className="lib-part">
    <SectionHead id="recover" title={contentTitle("recover", condition)} note={woven ? "Articles, videos and exercise ideas, a few minutes each" : undefined} story={content.sectionStory?.recover} />
    <ul className={`lib-grid lib-media-grid${woven ? " is-three" : " is-four"}`} role="list">{content.recover.map(card(MediaCard))}</ul>
  </section>;
  const liveWellPart = <section id={PANEL_IDS.liveWell} aria-labelledby="h-livewell" className="lib-part">
    <SectionHead id="livewell" title="Live well" />
    <ul className="lib-list" role="list">{content.liveWell.map(card(RowItem))}</ul>
  </section>;
  const watchList = <ul className="lib-grid lib-grid-cards is-three" role="list">{content.watch.map(card(WatchCard))}</ul>;
  const sourcesPart = (two: boolean) => <section id="sources" aria-labelledby="h-sources" className="lib-part">
    <div className="lib-part-head is-stacked">
      <h2 id="h-sources" className="lib-h2">Trusted sources</h2>
      <span className="lib-sub">Each opens in a new tab.</span>
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
        <ConditionHeader place={place} full state={state} lines={lines} />
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
      <footer className="lib-wrap lib-foot"><span>{LIBRARY_NOTE}</span></footer>
    </div>;
  }

  return <div className="lib-page lib-condition">
    <div className="lib-wrap">
      {mobileBar}
      {crumbs}
      <ConditionHeader place={place} full state={state} lines={lines} />
    </div>
    <PartsBar parts={parts} />
    <div className="lib-wrap lib-condition-body">
      <div className="lib-condition-main">
        {understandPart}
        {content.pause && <PauseBand pause={content.pause} />}
        {recoverPart}
        {content.companion && <div className="lib-norail-only"><Companion storyId={content.companion.storyId} state={state} inline /></div>}
        {liveWellPart}
        <section id={PANEL_IDS.watch} aria-labelledby="h-watch" className="lib-part">
          <SectionHead id="watch" title="Watch & listen" />
          {watchList}
        </section>
        {sourcesPart(false)}
        <StoriesPanel place={place} />
      </div>
      <aside className="lib-condition-aside" aria-label="Alongside this page">
        {content.companion && <div className="lib-rail-only lib-sticky"><Companion storyId={content.companion.storyId} state={state} /></div>}
        <AskDoctor place={place} questions={content.askDoctor} state={state} />
        <Related content={content} />
      </aside>
    </div>
    <footer className="lib-wrap lib-foot"><span>{LIBRARY_NOTE}</span></footer>
  </div>;
}

/** A condition whose page is still being written: what there is, said plainly. */
function PlaceholderCondition({ place, lines, mobileBar, crumbs, state }: { place: ConditionPlace; lines: string[]; mobileBar: ReactNode; crumbs: ReactNode; state: LibraryState }) {
  const { group, condition } = place;
  const items = condition.content?.understand ?? [];
  const sources = condition.content?.sources ?? DEFAULT_SOURCES;
  const siblings = group.conditions.filter(candidate => candidate.id !== condition.id);
  const ready = siblings.filter(candidate => candidate.content?.understand.length && candidate.summary);
  return <div className="lib-page lib-condition is-soon">
    <div className="lib-wrap">
      {mobileBar}
      {crumbs}
      <ConditionHeader place={place} full={false} state={state} lines={lines} />
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
