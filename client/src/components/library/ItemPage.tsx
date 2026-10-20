import { useEffect, useMemo } from "react";
import { Link } from "wouter";
import { DEFAULT_SOURCES, LIBRARY_NOTE } from "@/content/library";
import { LEARN_CHECKED, type LearnArticle } from "@/content/my-time-learn";
import { conditionHref, contentTitle, isReadable, itemHref, itemKey, itemMedia, itemMeta, learnArticle, type ItemPlace } from "@/lib/library";
import { libraryStore } from "@/lib/library-store";
import { Interactive, QuickCheck, TryThisWeek } from "./Interactives";
import { hasVersionTwo } from "./ConditionBento";
import { MediaPieceView } from "./MediaPieces";
import { NewsArticle } from "./NewsArticle";
import { BackIcon, ChevronIcon, Crumbs, ExternalIcon, KindBadge, SoonTag, SourceCard } from "./parts";
import { ListenBar, useNarration, type Block } from "./Reading";
import "@/pages/library-media.css";

// One piece on a condition page. A piece with a film, conversation or guide (content/ischaemic-media.ts)
// shows it first; a piece linked to a checked answer (content/my-time-learn.ts) shows the answer, for
// reading or listening, with its hands-on parts. Anything not written yet says so and offers trusted
// sources instead.

const WAITING: Record<string, string> = {
  article: "This article is coming soon.",
  video: "This video is coming soon.",
  animation: "This animation is coming soon.",
  exercise: "This exercise set is coming soon.",
  podcast: "This podcast is coming soon.",
  audio: "This recording is coming soon.",
};

/** `rich` adds the hook, the hands-on part, the quick check and three things to try this week. */
function LearnAnswer({ article, rich }: { article: LearnArticle; rich: boolean }) {
  const blocks = useMemo<Block[]>(() => [
    { key: "question", text: article.question },
    { key: "short", text: article.short },
    ...article.sections.flatMap((section, at) => [
      { key: `h-${at}`, text: section.heading },
      ...section.paragraphs.map((paragraph, index) => ({ key: `p-${at}-${index}`, text: paragraph })),
    ]),
    { key: "helps", text: "What helps." },
    ...article.helps.map((help, index) => ({ key: `help-${index}`, text: help })),
    { key: "ask-title", text: "A question for your team." },
    { key: "ask", text: article.ask },
  ], [article]);
  const { narration, reading, say } = useNarration(blocks);
  const half = Math.ceil(article.sections.length / 2);
  const section = (at: number) => {
    const part = article.sections[at];
    return part && <section key={part.heading}>
      <h3>{say(`h-${at}`)}</h3>
      {part.paragraphs.map((_, index) => <p key={index}>{say(`p-${at}-${index}`)}</p>)}
    </section>;
  };
  return <article className="lib-answer-body" aria-labelledby="lib-answer-q">
    <ListenBar reading={reading} total={narration.lines.length} label="this answer" />
    <h2 id="lib-answer-q" className="lib-answer-q">{say("question")}</h2>
    {rich && <p className="lib-answer-hook">{article.hook}</p>}
    <div className="lib-answer-short">
      <h3>The short answer</h3>
      <p>{say("short")}</p>
    </div>
    {rich && article.interactive && <Interactive data={article.interactive} />}
    {article.sections.slice(0, rich ? half : undefined).map((_, at) => section(at))}
    {rich && article.quiz && <QuickCheck quiz={article.quiz} />}
    {rich && article.sections.slice(half).map((_, at) => section(half + at))}
    <section className="lib-answer-helps">
      <h3>{say("helps")}</h3>
      <ul>{article.helps.map((_, index) => <li key={index}>{say(`help-${index}`)}</li>)}</ul>
    </section>
    {rich && article.tryThisWeek.length > 0 && <TryThisWeek articleId={article.id} items={article.tryThisWeek} />}
    <section className="lib-answer-ask">
      <h3>{say("ask-title")}</h3>
      <p>{say("ask")}</p>
    </section>
    <section className="lib-answer-sources">
      <h3>Where this comes from</h3>
      <ul>
        {article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<ExternalIcon size={12} /><span className="lib-sr"> (opens in a new tab)</span></a></li>)}
      </ul>
      <p>Checked {LEARN_CHECKED}. General information only.</p>
    </section>
  </article>;
}

export default function ItemPage({ place }: { place: ItemPlace }) {
  const { section, group, condition, item, type } = place;
  const key = itemKey(place);
  const learn = learnArticle(item);
  const media = itemMedia(item);
  const content = condition.content;
  // Pieces made here; the genuine resources elsewhere open from the condition page, in a new tab.
  const siblings = (content?.[type] ?? []).filter(candidate => candidate.id !== item.id && !candidate.url).slice(0, 3);
  const sources = content?.sources.length ? content.sources : DEFAULT_SOURCES;
  useEffect(() => { libraryStore.markRead(key); }, [key]);
  const back = conditionHref(group.id, condition.id);
  const notYet = item.kind !== "article" && !media;
  const rich = Boolean(media || learn?.interactive || learn?.quiz);

  // Every Ischaemic stroke piece reads as a feature; a film or the activity log sits in it, under the headline.
  if (learn && hasVersionTwo(place)) return <NewsArticle place={place} article={learn} media={media} />;

  return <div className="lib-page lib-item">
    <div className="lib-wrap lib-item-wrap">
      <div className="lib-mobilebar">
        <Link href={back} className="lib-round" aria-label={`Back to ${condition.title}`}><BackIcon /></Link>
        <span>{condition.title}</span>
        <span className="lib-round is-empty" aria-hidden="true" />
      </div>
      <Crumbs className="lib-wide-flex" trail={[{ label: "Library", href: "/" }, { label: condition.title, href: back }, { label: contentTitle(type, condition) }]} />
      <header className="lib-item-head" style={{ ["--lib-ink" as string]: section.hue.ink }}>
        <span className="lib-item-kind"><KindBadge kind={item.kind} />{itemMeta(item)}</span>
        <h1>{item.title}</h1>
        {item.blurb && <p>{item.blurb}</p>}
      </header>

      {media && <MediaPieceView piece={media} />}
      {learn ? <>
        {media && <h2 className="lib-written-head">The written answer</h2>}
        {notYet && <p className="lib-item-note">{WAITING[item.kind]} Until then, here is the checked written answer.</p>}
        <LearnAnswer article={learn} rich={rich} />
      </> : !media && <section className="lib-soon-panel" aria-labelledby="lib-item-soon">
        <h2 id="lib-item-soon" className="lib-h2">{WAITING[item.kind]}</h2>
        <p>We're writing and checking it now; nothing goes up until it has been checked. Until then, these trusted sources cover the same ground.</p>
        <div className="lib-grid lib-sources is-three">{sources.map(source => <SourceCard key={source.name} source={source} />)}</div>
      </section>}

      {siblings.length > 0 && <section className="lib-part lib-item-more" aria-labelledby="lib-item-more">
        <h2 id="lib-item-more" className="lib-h2">More in {contentTitle(type, condition)}</h2>
        <ul className="lib-list" role="list">
          {siblings.map(candidate => <li key={candidate.id}>
            <Link href={itemHref({ ...place, item: candidate })} className="lib-list-row">
              <span className="lib-list-words"><span className="lib-list-title">{candidate.title}</span>{!isReadable(candidate) && <SoonTag />}</span>
              <span className="lib-list-time">{candidate.minutes ? `${candidate.minutes} min` : ""}</span>
              <ChevronIcon />
            </Link>
          </li>)}
        </ul>
      </section>}
      <Link href={back} className="lib-back-link"><BackIcon size={16} />Back to {condition.title}</Link>
    </div>
    <footer className="lib-wrap lib-foot"><span>{LIBRARY_NOTE}</span></footer>
  </div>;
}
