import { Fragment, useMemo, type ReactNode } from "react";
import { Link } from "wouter";
import { LIBRARY_NOTE } from "@/content/library";
import { LEARN_CHECKED, type LearnArticle } from "@/content/my-time-learn";
import { NEWS_EXTRAS, WRITTEN_ON, type NewsChart, type NewsReference } from "@/content/ischaemic-news";
import { conditionHref, conditionKey, contentTitle, itemHref, isReadable, type ItemPlace } from "@/lib/library";
import { libraryStore, useLibraryState } from "@/lib/library-store";
import { Interactive, QuickCheck } from "./Interactives";
import { useNarration, type Block } from "./Reading";
import "@/pages/library-news.css";

// An Ischaemic stroke answer as a magazine feature (the "A Blocked Supply Line" design): a large
// headline and standfirst, a full-width illustration, the story in one reading column with its
// references set in the margin beside each paragraph, charts of the page's own figures, the
// hands-on part and the quick check in a band of their own, a pull quote, and the sources at the
// foot. The words are the checked answer's own (content/ischaemic-answers.ts); content/ischaemic-
// news.ts adds a feature's headline, figure, charts and references. On a phone the margin notes
// drop under their paragraph.

const publisherOf = (label: string) => label.split(":")[0].trim();
/** "National Institute for Health and Care Excellence (NICE)" → "NICE", for the margin. */
const shortName = (publisher: string) => publisher.match(/\(([^)]+)\)$/)?.[1] ?? publisher;
const hostOf = (url: string) => { try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return url; } };

function Refs({ numbers }: { numbers?: number[] }) {
  if (!numbers?.length) return null;
  return <>{numbers.map(number => <sup key={number} className="lib-news-ref"><a href={`#ref-${number}`} aria-label={`Reference ${number}`}>{number}</a></sup>)}</>;
}

/** A paragraph (or a list) with its references in the margin beside it. */
function WithNotes({ numbers, references, children }: { numbers?: number[]; references: NewsReference[][]; children: ReactNode }) {
  const notes = (numbers ?? []).filter(number => references[number - 1]);
  return <div className="lib-news-para">
    <div className="lib-news-para-text">{children}</div>
    {notes.length > 0 && <aside className="lib-news-notes" aria-label="References for this paragraph">
      {notes.map(number => <div key={number} className="lib-news-note">
        <strong>{number}</strong> {references[number - 1].map((reference, index) => <Fragment key={reference.url}>
          {index > 0 ? "; " : ""}{shortName(reference.publisher)}, <a href={reference.url} target="_blank" rel="noopener noreferrer">{reference.title}<span className="lib-sr"> (opens in a new tab)</span></a>
        </Fragment>)}.
      </div>)}
    </aside>}
  </div>;
}

function ClotFigure({ words }: { words: [string, string] }) {
  return <figure className="lib-news-figure">
    <div className="lib-news-figure-art">
      <svg viewBox="0 0 1200 460" role="img" aria-label="Illustration: a brain with one artery blocked by a clot, and the region beyond it starved of oxygen">
        <g transform="translate(60 20)">
          <path d="M300 300 C 240 300, 220 240, 250 200 C 230 150, 270 95, 330 95 C 350 60, 420 45, 470 70 C 510 40, 590 45, 620 80 C 680 70, 740 110, 735 165 C 790 190, 790 260, 740 285 C 735 330, 680 350, 640 330 C 600 360, 530 360, 500 335 C 460 360, 390 355, 370 325 C 345 335, 315 325, 300 300 Z" fill="#24493F" stroke="#CFE0D7" strokeWidth="2.5" />
          <ellipse cx="640" cy="205" rx="92" ry="64" fill="#7A3F25" stroke="#F2C9A6" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M480 440 C 478 360, 485 310, 505 265" fill="none" stroke="#9CC5B0" strokeWidth="10" strokeLinecap="round" />
          <path d="M505 265 C 470 215, 420 185, 355 175 M505 265 C 505 205, 505 160, 525 110 M505 265 C 525 230, 545 215, 572 210" fill="none" stroke="#9CC5B0" strokeWidth="7" strokeLinecap="round" />
          <circle cx="580" cy="209" r="16" fill="#F2C9A6" />
        </g>
        <text x="900" y="200" fontFamily="Newsreader, Georgia, serif" fontSize="30" fontStyle="italic" fill="#FFFEFA">{words[0]}</text>
        <text x="900" y="238" fontFamily="Newsreader, Georgia, serif" fontSize="30" fontStyle="italic" fill="#FFFEFA">{words[1]}</text>
      </svg>
    </div>
    <figcaption>Illustration: Rehyn</figcaption>
  </figure>;
}

function Chart({ chart }: { chart: NewsChart }) {
  const label = chart.kind === "bars"
    ? `Bar chart: ${chart.bars.map(bar => `${bar.label}, ${bar.value} in 100`).join("; ")}`
    : `Range: between ${chart.from} and ${chart.to} of every 100`;
  return <figure className="lib-news-chart">
    <div className="lib-news-chart-title">{chart.title}</div>
    <div className="lib-news-chart-sub">{chart.subtitle}</div>
    {chart.kind === "bars"
      ? <svg viewBox={`0 0 660 ${70 + chart.bars.length * 50}`} role="img" aria-label={label}>
          {[0, 25, 50, 75, 100].map(tick => <g key={tick}>
            <line x1={180 + tick * 4.4} y1="36" x2={180 + tick * 4.4} y2={44 + chart.bars.length * 50} stroke={tick === 0 ? "#9AA89F" : "#E2DFD5"} strokeWidth="1" />
            <text x={180 + tick * 4.4} y={62 + chart.bars.length * 50} textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="12" fill="#5B6B63">{tick}</text>
          </g>)}
          {chart.bars.map((bar, index) => {
            const y = 50 + index * 50;
            const end = 180 + bar.value * 4.4;
            return <g key={bar.label}>
              <text x="170" y={y + 20} textAnchor="end" fontFamily="DM Sans, sans-serif" fontSize="14" fontWeight="600" fill="#141413">{bar.label}</text>
              <path d={`M180 ${y} H${end - 4} Q${end} ${y} ${end} ${y + 4} V${y + 26} Q${end} ${y + 30} ${end - 4} ${y + 30} H180 Z`} fill={bar.strong ? "#2F6851" : "#9AA89F"}><title>{`${bar.label}: ${bar.value} in 100`}</title></path>
              <text x={end + 8} y={y + 21} fontFamily="DM Sans, sans-serif" fontSize="15" fontWeight="700" fill="#141413">{bar.value}</text>
            </g>;
          })}
        </svg>
      : <svg viewBox="0 0 660 90" role="img" aria-label={label}>
          <rect x="20" y="30" width="600" height="20" rx="4" fill="#E2DFD5" />
          <rect x={20 + chart.from * 6} y="30" width={(chart.to - chart.from) * 6} height="20" rx="4" fill="#B4532A"><title>{`${chart.from} to ${chart.to} in 100`}</title></rect>
          <text x={20 + (chart.from + chart.to) * 3} y="20" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="15" fontWeight="700" fill="#141413">{`${chart.from}–${chart.to}`}</text>
          <text x="20" y="72" fontFamily="DM Sans, sans-serif" fontSize="12" fill="#5B6B63">0</text>
          <text x="620" y="72" textAnchor="end" fontFamily="DM Sans, sans-serif" fontSize="12" fill="#5B6B63">100</text>
        </svg>}
    <figcaption>{chart.sources}</figcaption>
  </figure>;
}

const Ornament = () => <div className="lib-news-ornament" aria-hidden="true">
  <svg width="40" height="12" viewBox="0 0 40 12"><path d="M20 0l6 6-6 6-6-6z" fill="#B4532A" /><path d="M0 6h10M30 6h10" stroke="#9AA89F" /></svg>
</div>;

export function NewsArticle({ place, article }: { place: ItemPlace; article: LearnArticle }) {
  const { group, condition, item, type } = place;
  const extras = NEWS_EXTRAS[article.id];
  const library = useLibraryState();
  const back = conditionHref(group.id, condition.id);
  const saved = library.saved.includes(conditionKey(place));
  const own = (condition.content?.[type] ?? []).filter(candidate => !candidate.url && isReadable(candidate));
  const more = own.filter(candidate => candidate.id !== item.id).slice(0, 4);
  const references: NewsReference[][] = extras?.references ?? article.sources.map(source => [{ publisher: publisherOf(source.label), title: source.label.split(":").slice(1).join(":").trim() || source.label, url: source.url }]);
  const headline = extras?.headline ?? item.title;
  const standfirst = extras?.standfirst ?? article.short;
  const kicker = [extras?.kicker ?? contentTitle(type, condition), condition.title];

  const blocks = useMemo<Block[]>(() => [
    { key: "headline", text: headline },
    { key: "standfirst", text: standfirst },
    ...article.sections.flatMap((section, at) => [
      ...(at === 0 && extras ? [] : [{ key: `h-${at}`, text: extras?.headings?.[at] || section.heading }]),
      ...section.paragraphs.map((paragraph, index) => ({ key: `p-${at}-${index}`, text: paragraph })),
    ]),
    { key: "helps", text: "What helps now" },
    ...article.helps.map((help, index) => ({ key: `help-${index}`, text: help })),
    { key: "ask", text: article.ask },
  ], [article, extras, headline, standfirst]);
  const { reading, say } = useNarration(blocks);

  // The hands-on band and the pull quote come before the last section, as in the design.
  const bandBefore = Math.max(1, article.sections.length - 1);
  const band = (article.interactive || article.quiz) && <div className="lib-news-band-try">
    <div className="lib-news-band-try-inner">
      {article.interactive && <div className="lib-news-try"><Interactive data={article.interactive} /></div>}
      {article.quiz && <div className="lib-news-quiz"><QuickCheck quiz={article.quiz} /></div>}
    </div>
  </div>;
  const quote = extras?.pullQuote && <blockquote className="lib-news-quote">{extras.pullQuote}</blockquote>;

  return <div className="lib-page lib-news">
    <article aria-labelledby="lib-news-headline">
      <div className="lib-news-wrap lib-news-head">
        <nav aria-label="Breadcrumb" className="lib-news-kicker">
          <Link href={back}>{kicker[0]}</Link> <span aria-hidden="true">|</span> <span>{kicker[1]}</span>
        </nav>
        <h1 id="lib-news-headline">{say("headline")}</h1>
        <p className="lib-news-standfirst">{say("standfirst")}</p>
        <div className="lib-news-byline">
          <span>Written by the Rehyn team on {WRITTEN_ON}</span>
          <span className="lib-news-byline-tools">
            <button type="button" className="lib-news-btn" onClick={reading.toggle} aria-pressed={reading.playing}>
              {reading.playing
                ? <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M7 4h4v16H7zM13 4h4v16h-4z" /></svg>
                : <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M7 4l13 8-13 8z" /></svg>}
              {reading.playing ? "Pause" : `Listen${item.minutes ? ` · ${item.minutes} min` : ""}`}
            </button>
            <button type="button" className="lib-news-btn" onClick={() => libraryStore.toggleSaved(conditionKey(place))} aria-pressed={saved} aria-label={saved ? `${condition.title} is saved to my pages` : `Save ${condition.title} to my pages`}>{saved ? "Saved" : "Save"}</button>
          </span>
        </div>
      </div>

      {extras?.figure && <ClotFigure words={extras.figure.words} />}

      <div className="lib-news-wrap lib-news-body">
        {article.sections.slice(0, bandBefore).map((section, at) => <Fragment key={section.heading}>
          {at > 0 && extras && <Ornament />}
          <section className="lib-news-section" aria-label={at === 0 && extras ? section.heading : undefined}>
            {!(at === 0 && extras) && <h2>{say(`h-${at}`)}</h2>}
            {section.paragraphs.map((_, index) => <WithNotes key={index} numbers={extras?.sectionRefs[at]?.[index]} references={references}>
              <p className={at === 0 && index === 0 && extras ? "lib-news-lede" : undefined}>{say(`p-${at}-${index}`)}<Refs numbers={extras?.sectionRefs[at]?.[index]} /></p>
            </WithNotes>)}
          </section>
          {extras?.charts?.[at] && <Chart chart={extras.charts[at]} />}
        </Fragment>)}
      </div>

      {band}

      <div className="lib-news-wrap lib-news-body">
        {quote}
        {article.sections.map((section, at) => at < bandBefore ? null : <Fragment key={section.heading}>
          <section className="lib-news-section">
            <h2>{say(`h-${at}`)}</h2>
            {section.paragraphs.map((_, index) => <WithNotes key={index} numbers={extras?.sectionRefs[at]?.[index]} references={references}>
              <p>{say(`p-${at}-${index}`)}<Refs numbers={extras?.sectionRefs[at]?.[index]} /></p>
            </WithNotes>)}
          </section>
          {extras?.charts?.[at] && <Chart chart={extras.charts[at]} />}
        </Fragment>)}

        <section className="lib-news-section lib-news-helps" aria-labelledby="lib-news-helps">
          <h2 id="lib-news-helps">{say("helps")}</h2>
          {article.helps.map((_, index) => <WithNotes key={index} numbers={extras?.helpRefs[index]} references={references}>
            <p className="lib-news-help">{say(`help-${index}`)}<Refs numbers={extras?.helpRefs[index]} />{index === article.helps.length - 1 && <span className="lib-news-endmark" role="img" aria-label="End of article" />}</p>
          </WithNotes>)}
        </section>

        <div className="lib-news-ask">
          <div className="lib-news-ask-kicker">Take this to your next appointment</div>
          <p>“{say("ask")}”</p>
        </div>

        <section id="lib-news-sources" className="lib-news-sources" aria-labelledby="lib-news-sources-title">
          <div className="lib-news-sources-about">
            <h2 id="lib-news-sources-title">Sources</h2>
            <p>Every fact here was checked against the pages listed, in {LEARN_CHECKED}.</p>
          </div>
          <ol>
            {references.map((cited, index) => <li key={index} id={`ref-${index + 1}`}>
              {cited.map(reference => <Fragment key={reference.url}>
                {reference.publisher}. <em>{reference.title}.</em>{reference.extra ? ` ${reference.extra}.` : ""} <a href={reference.url} target="_blank" rel="noopener noreferrer">{hostOf(reference.url)}<span className="lib-sr"> (opens in a new tab)</span></a>{" "}
              </Fragment>)}
            </li>)}
          </ol>
          <p className="lib-news-sources-note">This article is in the {contentTitle(type, condition)} part of the Rehyn Library. General information only — your own care team knows your situation; follow their advice first.</p>
        </section>

        {more.length > 0 && <nav className="lib-news-more" aria-label={`More in ${contentTitle(type, condition)}`}>
          <div className="lib-news-more-title">More in {contentTitle(type, condition)}</div>
          <ul>{more.map(candidate => <li key={candidate.id}><Link href={itemHref({ ...place, item: candidate })}>{candidate.title}</Link></li>)}</ul>
        </nav>}
      </div>
    </article>
    <footer className="lib-wrap lib-foot"><span>{LIBRARY_NOTE}</span></footer>
  </div>;
}
