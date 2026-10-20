import { useEffect, useState } from "react";
import type { LearnArticle } from "@/content/my-time-learn";
import type { NewsChart, NewsMilestone, NewsRoute, NewsStat, NewsTypePanel } from "@/content/ischaemic-news";

// Pieces one feature has and the others do not (content/ischaemic-news.ts): the "three roads to a
// blockage" picture for Why it happened to me, and rows of big figures with a small picture each.
// Every word they show is the checked answer's own, or a figure with its reference number.

function useStill() {
  const [still, setStill] = useState(false);
  useEffect(() => {
    const query = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!query) return;
    setStill(query.matches);
    const change = () => setStill(query.matches);
    query.addEventListener?.("change", change);
    return () => query.removeEventListener?.("change", change);
  }, []);
  return still;
}

/** Each route ends deep in the brain: from the heart and the neck a clot travels along it; deep in the brain the vessel itself narrows. */
const ROUTE_PATHS: Record<NewsRoute["id"], string> = {
  heart: "M330 468 C 330 430, 336 400, 346 370 C 353 340, 360 300, 365 272 C 368 250, 369 228, 360 210 C 350 196, 336 190, 322 186",
  neck: "M349 352 C 356 322, 362 294, 365 272 C 368 250, 369 228, 360 210 C 350 196, 336 190, 322 186",
  brain: "M392 214 C 380 204, 366 198, 352 194 C 342 191, 332 188, 322 186",
};
const START: Record<NewsRoute["id"], [number, number]> = { heart: [330, 468], neck: [349, 352], brain: [392, 214] };

/**
 * The picture under the headline: a head, neck and chest at night, with the three places a blockage
 * can start lit up. Choosing one sends a clot along its road to the brain and shows what the answer
 * says about it, with a link down to its section.
 */
export function RoutesHero({ routes, article }: { routes: NewsRoute[]; article: LearnArticle }) {
  const [active, setActive] = useState<NewsRoute["id"] | null>(null);
  const still = useStill();
  const chosen = routes.find(route => route.id === active);
  const number = (id: NewsRoute["id"]) => routes.findIndex(route => route.id === id) + 1;

  return <section className="lib-why-hero" aria-labelledby="lib-why-hero-title">
    <div className="lib-why-hero-inner">
      <svg className="lib-why-art" viewBox="160 40 400 480" role="img" aria-label="A head, neck and chest, with the three places a blockage can start: the arteries in the neck, tiny vessels deep in the brain, and the heart">
        <defs>
          <radialGradient id="lib-why-glow">
            <stop offset="0" stopColor="#FFD3BF" stopOpacity=".95" />
            <stop offset="1" stopColor="#FFD3BF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path d="M200 520 C 205 440, 240 395, 300 380 L 302 342 C 256 330, 220 290, 215 230 C 205 140, 270 70, 350 68 C 430 66, 488 120, 490 190 C 492 230, 480 255, 470 270 C 478 285, 490 300, 482 310 C 474 318, 462 316, 462 326 C 462 345, 440 352, 420 350 L 412 380 C 470 395, 505 440, 510 520 Z" fill="#2C2763" stroke="#8E86D9" strokeWidth="2" />
        <path d="M265 190 C 255 140, 300 100, 350 102 C 410 100, 455 135, 452 185 C 455 225, 420 250, 380 245 C 350 262, 300 258, 285 240 C 262 232, 258 210, 265 190 Z" fill="#3A3478" stroke="#B3ACEE" strokeWidth="1.5" />
        <path d="M300 150 C 320 140, 340 160, 360 148 M330 120 C 340 135, 380 128, 400 140 M290 205 C 315 215, 330 200, 350 212 M395 175 C 410 190, 430 180, 440 195" fill="none" stroke="#5B54A6" strokeWidth="2" strokeLinecap="round" />
        <path d="M330 486 C 300 466, 296 444, 312 436 C 322 431, 330 438, 330 446 C 330 438, 338 431, 348 436 C 364 444, 360 466, 330 486 Z" fill={active === "heart" ? "#F2A488" : "#7A3F55"} stroke="#F2A488" strokeWidth="2" />
        {routes.map(route => <path key={route.id} d={ROUTE_PATHS[route.id]} fill="none" stroke={active === route.id ? "#FFD3BF" : "#F2A488"} strokeOpacity={active && active !== route.id ? 0.25 : 0.85} strokeWidth={active === route.id ? 6 : route.id === "brain" ? 3 : 5} strokeLinecap="round" />)}
        <rect x="341" y="344" width="16" height="10" rx="5" fill="#F7E3B5" opacity={active && active !== "neck" ? 0.35 : 1} transform="rotate(-70 349 349)" />
        {routes.map(route => {
          const [x, y] = START[route.id];
          const on = !active || active === route.id;
          return <g key={route.id} opacity={on ? 1 : 0.35}>
            <circle cx={x} cy={y} r="22" fill="url(#lib-why-glow)" className={still ? undefined : "lib-why-pulse"} />
            <circle cx={x + 26} cy={y - 18} r="13" fill="#FFFEFA" />
            <text x={x + 26} y={y - 13.5} textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="14" fontWeight="700" fill="#221D4F">{number(route.id)}</text>
          </g>;
        })}
        <circle cx="322" cy="186" r="9" fill="#F2A488" opacity=".35" />
        {/* Small vessel disease narrows the vessel where it is; only the heart and neck send a clot travelling. */}
        {(active ? routes.filter(route => route.id === active) : routes).filter(route => route.id !== "brain").map((route, index) => {
          const [x, y] = START[route.id];
          return still
            ? <circle key={`clot-${route.id}`} cx={active ? 322 : x} cy={active ? 186 : y} r="6.5" fill="#FFFEFA" />
            : <circle key={`clot-${route.id}-${active ?? "all"}`} r="6.5" fill="#FFFEFA">
                <animateMotion dur={active ? "2.4s" : "3.6s"} begin={`${index * 1.1}s`} repeatCount="indefinite" path={ROUTE_PATHS[route.id]} />
              </circle>;
        })}
      </svg>

      <div className="lib-why-panel">
        <div className="lib-why-kicker">Choose a road</div>
        <h2 id="lib-why-hero-title" className="lib-why-title">Where a blockage can start</h2>
        <div className="lib-why-choices" role="group" aria-label="Where a blockage can start">
          {routes.map(route => <button key={route.id} type="button" className="lib-why-choice" aria-pressed={active === route.id} onClick={() => setActive(was => was === route.id ? null : route.id)}>
            <span className="lib-why-num" aria-hidden="true">{number(route.id)}</span>{route.label}
          </button>)}
        </div>
        <div className="lib-why-say" aria-live="polite">
          {chosen
            ? <>
                <p>{article.sections[chosen.section]?.paragraphs[0]}</p>
                <a href={`#lib-news-s-${chosen.section}`} className="lib-why-more">Read about {chosen.label.toLowerCase()} <span aria-hidden="true">↓</span></a>
              </>
            : <p>A blockage can start in any of these three places. Choose one to follow it to the brain.</p>}
        </div>
      </div>
    </div>
    <p className="lib-why-credit">Illustration: Rehyn. The pictures show where things happen, not to scale.</p>
  </section>;
}

/** One moving scene per word: blood flowing along an artery, and what goes wrong in it. */
function TypeScene({ id }: { id: NewsTypePanel["id"] }) {
  const artery = "M8 58 C 60 46, 110 72, 160 58 S 226 50, 252 58";
  return <svg className="lib-types-scene" viewBox="0 0 260 150" aria-hidden="true" focusable="false">
    <rect x="8" y="78" width="244" height="64" rx="18" fill="#F3D9CF" />
    <path d="M30 104 C 60 92, 90 116, 120 104 S 180 92, 230 108" fill="none" stroke="#E7BDAE" strokeWidth="3" strokeLinecap="round" />
    <path d={artery} fill="none" stroke="#C7553E" strokeWidth="14" strokeLinecap="round" />
    {id === "haemorrhagic"
      ? <>
          <path d={artery} fill="none" stroke="#FFB7A3" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 12" className="lib-types-flow" />
          <ellipse cx="150" cy="96" rx="34" ry="22" fill="#9E2A2A" opacity=".85" className="lib-types-bleed" />
          <path d="M146 64 L 150 76 L 156 66" fill="none" stroke="#9E2A2A" strokeWidth="4" strokeLinecap="round" />
        </>
      : <>
          <path d="M8 58 C 60 46, 110 72, 132 64" fill="none" stroke="#FFB7A3" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 12" className="lib-types-flow" />
          <path d="M150 60 C 190 52, 226 50, 252 58" fill="none" stroke="#FFB7A3" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 12" className={id === "tia" ? "lib-types-flow lib-types-tia-flow" : undefined} opacity={id === "tia" ? undefined : 0} />
          <circle cx="141" cy="62" r="11" fill="#5C1F1F" className={id === "tia" ? "lib-types-tia-clot" : undefined} />
          <ellipse cx="200" cy="108" rx="48" ry="26" fill="#6B5A58" className={id === "tia" ? "lib-types-dim lib-types-tia-dim" : "lib-types-dim"} />
        </>}
  </svg>;
}

/**
 * The picture under the headline for TIA, ischaemic, haemorrhagic: three panels side by side, each
 * a word, what it means, how common it is, and a small moving scene of it. Each opens its section.
 */
export function TypesHero({ panels }: { panels: NewsTypePanel[] }) {
  return <section className="lib-types-hero" aria-labelledby="lib-types-hero-title">
    <div className="lib-types-hero-inner">
      <h2 id="lib-types-hero-title" className="lib-types-hero-title">One picture for each word</h2>
      <ul className="lib-types-cards" role="list">
        {panels.map(panel => <li key={panel.id}>
          <a href={`#lib-news-s-${panel.section}`} className={`lib-types-card is-${panel.id}`}>
            <TypeScene id={panel.id} />
            <span className="lib-types-word">{panel.word}</span>
            <span className="lib-types-meaning">{panel.meaning}</span>
            <span className="lib-types-share">{panel.share}</span>
            <span className="lib-types-go">Read more <span aria-hidden="true">↓</span></span>
          </a>
        </li>)}
      </ul>
    </div>
    <p className="lib-types-credit">Illustrations: Rehyn. Pictures of what happens in the blood vessels, not to scale.</p>
  </section>;
}

const WAFFLE_TONES = { green: "#2F6851", clay: "#C7553E", dark: "#7A2E2E" } as const;

/** A hundred squares, filled in order: "out of every 100". */
export function WaffleChart({ chart }: { chart: Extract<NewsChart, { kind: "waffle" }> }) {
  const squares = chart.groups.flatMap(group => Array.from({ length: group.count }, () => group.tone));
  return <figure className="lib-news-chart lib-waffle">
    <div className="lib-news-chart-title">{chart.title}</div>
    <div className="lib-news-chart-sub">{chart.subtitle}</div>
    <div className="lib-waffle-row">
      <svg viewBox="0 0 260 260" role="img" aria-label={`Of every 100 strokes in the UK: ${chart.groups.map(group => `about ${group.count}, ${group.label.toLowerCase()}`).join("; ")}`}>
        {squares.map((tone, index) => <rect key={index} x={(index % 10) * 26} y={Math.floor(index / 10) * 26} width="22" height="22" rx="4" fill={WAFFLE_TONES[tone]} />)}
      </svg>
      <ul className="lib-waffle-key" role="list">
        {chart.groups.map(group => <li key={group.label}><span className="lib-waffle-swatch" style={{ background: WAFFLE_TONES[group.tone] }} aria-hidden="true" /><strong>About {group.count}</strong> {group.label.toLowerCase()}</li>)}
      </ul>
    </div>
    <figcaption>{chart.sources}</figcaption>
  </figure>;
}

/** A TIA on a line from the first minutes to the weeks after: the signs pass, the risk does not. */
export function TiaClock({ chart }: { chart: Extract<NewsChart, { kind: "tia-clock" }> }) {
  return <figure className="lib-news-chart lib-tia-clock">
    <div className="lib-news-chart-title">{chart.title}</div>
    <div className="lib-news-chart-sub">{chart.subtitle}</div>
    <svg viewBox="0 0 660 170" role="img" aria-label="A timeline: the signs of a TIA usually last a few minutes to a few hours and are fully gone within 24 hours, but the risk of a stroke is greatest in the first days and weeks after.">
      <defs>
        <pattern id="lib-tia-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#F6DCC4" /><path d="M0 0 V8" stroke="#C7553E" strokeWidth="3" /></pattern>
      </defs>
      <line x1="20" y1="96" x2="640" y2="96" stroke="#9AA89F" strokeWidth="1.5" />
      {[{ x: 20, t: "Minutes" }, { x: 160, t: "Hours" }, { x: 330, t: "24 hours" }, { x: 470, t: "Days" }, { x: 620, t: "Weeks" }].map(tick => <g key={tick.t}>
        <line x1={tick.x} y1="90" x2={tick.x} y2="102" stroke="#5B6B63" strokeWidth="1.5" />
        <text x={tick.x} y="122" textAnchor={tick.x === 20 ? "start" : tick.x === 620 ? "end" : "middle"} fontFamily="DM Sans, sans-serif" fontSize="12" fill="#5B6B63">{tick.t}</text>
      </g>)}
      <rect x="20" y="66" width="230" height="22" rx="4" fill="#B4532A" />
      <text x="24" y="56" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#141413">Signs usually last a few minutes to a few hours</text>
      <line x1="330" y1="40" x2="330" y2="104" stroke="#141413" strokeWidth="2" strokeDasharray="4 4" />
      <text x="336" y="36" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#141413">Fully gone within 24 hours</text>
      <rect x="330" y="132" width="310" height="22" rx="4" fill="url(#lib-tia-hatch)" />
      <text x="330" y="166" fontFamily="DM Sans, sans-serif" fontSize="12.5" fontWeight="700" fill="#7A2E2E">Risk of a stroke is greatest in the first days and weeks</text>
    </svg>
    <figcaption>{chart.sources}</figcaption>
  </figure>;
}

/** A CT scanner at work: the ring turns, and slices of the brain appear one by one. */
function ScannerArt() {
  const slice = (x: number, delay: number) => <g className="lib-scan-slice" style={{ animationDelay: `${delay}s` }} transform={`translate(${x} 22)`}>
    <rect width="54" height="54" rx="8" fill="#0B2234" stroke="#4E7593" />
    <path d="M27 11 C 15 10, 9 19, 10 28 C 9 37, 17 44, 27 43 C 37 44, 45 37, 44 28 C 45 19, 39 10, 27 11 Z" fill="none" stroke="#B9D3E6" strokeWidth="2" />
    <path d="M27 12 V42" stroke="#4E7593" strokeWidth="1.5" />
  </g>;
  return <svg className="lib-scan-art" viewBox="0 0 420 300" role="img" aria-label="Illustration: a person lying on the bed of a CT scanner, with pictures of the brain appearing slice by slice">
    {slice(20, 0)}{slice(84, 0.8)}{slice(148, 1.6)}
    <ellipse cx="220" cy="270" rx="190" ry="14" fill="#0B2234" opacity=".6" />
    <circle cx="260" cy="160" r="104" fill="#DCE6EE" />
    <circle cx="260" cy="160" r="104" fill="none" stroke="#B9CAD8" strokeWidth="4" />
    <circle cx="260" cy="160" r="56" fill="#0F2A3F" />
    <g className="lib-scan-spin" style={{ transformOrigin: "260px 160px" }}>
      <circle cx="260" cy="160" r="80" fill="none" stroke="#8FE3C6" strokeWidth="6" strokeDasharray="60 443" strokeLinecap="round" />
    </g>
    <path d="M60 218 H360 L340 262 H80 Z" fill="#8FA9BF" />
    <rect x="30" y="196" width="340" height="20" rx="10" fill="#C6D5E1" />
    <rect x="90" y="176" width="150" height="22" rx="11" fill="#6C8FB0" />
    <circle cx="262" cy="176" r="17" fill="#F3D9CF" />
    <path d="M262 160 C 252 160, 246 166, 246 174" fill="none" stroke="#C9A99D" strokeWidth="3" strokeLinecap="round" />
  </svg>;
}

/**
 * The picture under the headline for The scans and tests you had: a CT scanner at work beside the
 * hospital clock. Choosing a step turns the clock's hand to its time and shows what the answer says.
 */
export function ScansHero({ milestones, article }: { milestones: NewsMilestone[]; article: LearnArticle }) {
  const [active, setActive] = useState(milestones[0]?.id ?? "");
  const chosen = milestones.find(step => step.id === active) ?? milestones[0];
  const words = (step: NewsMilestone) => "help" in step.from ? article.helps[step.from.help] : article.sections[step.from.section]?.paragraphs[step.from.paragraph];
  const ring = 2 * Math.PI * 70;
  return <section className="lib-scans-hero" aria-labelledby="lib-scans-title">
    <div className="lib-scans-hero-inner">
      <ScannerArt />
      <div className="lib-scans-panel">
        <div className="lib-why-kicker">The clock starts at the door</div>
        <h2 id="lib-scans-title" className="lib-why-title">Your first day in hospital</h2>
        <div className="lib-scans-row">
          <svg className="lib-scans-dial" viewBox="0 0 180 180" role="img" aria-label={chosen ? `${chosen.label}: ${chosen.when}` : "The hospital clock"}>
            <circle cx="90" cy="90" r="70" fill="none" stroke="#2B4F6B" strokeWidth="12" />
            <circle cx="90" cy="90" r="70" fill="none" stroke="#8FE3C6" strokeWidth="12" strokeLinecap="round" strokeDasharray={`${ring * Math.min(1, (chosen?.hours ?? 0) / 24)} ${ring}`} transform="rotate(-90 90 90)" className="lib-scans-arc" />
            {milestones.map(step => {
              const angle = (step.hours / 24) * 2 * Math.PI - Math.PI / 2;
              return <circle key={step.id} cx={90 + 70 * Math.cos(angle)} cy={90 + 70 * Math.sin(angle)} r="6" fill={step.id === chosen?.id ? "#FFFEFA" : "#13314A"} stroke="#8FE3C6" strokeWidth="2.5" />;
            })}
            <line x1="90" y1="90" x2="90" y2="34" stroke="#FFFEFA" strokeWidth="4" strokeLinecap="round" className="lib-scans-hand" style={{ transform: `rotate(${((chosen?.hours ?? 0) / 24) * 360}deg)`, transformOrigin: "90px 90px" }} />
            <circle cx="90" cy="90" r="6" fill="#FFFEFA" />
            <text x="90" y="124" textAnchor="middle" fontFamily="Newsreader, Georgia, serif" fontSize="22" fontWeight="600" fill="#FFFEFA">{chosen ? `${chosen.hours} h` : ""}</text>
          </svg>
          <div className="lib-why-choices" role="group" aria-label="Steps on your first day">
            {milestones.map(step => <button key={step.id} type="button" className="lib-why-choice lib-scans-choice" aria-pressed={step.id === chosen?.id} onClick={() => setActive(step.id)}>
              <span><span className="lib-scans-when">{step.when}</span>{step.label}</span>
            </button>)}
          </div>
        </div>
        <p className="lib-scans-say" aria-live="polite">{chosen && words(chosen)}</p>
      </div>
    </div>
    <p className="lib-why-credit lib-scans-credit">Illustration: Rehyn. Times as the Stroke Association sets them out; your own hospital's may differ.</p>
  </section>;
}

/** One share of a whole, as a ring, with the number in the middle. */
export function DonutChart({ chart }: { chart: Extract<NewsChart, { kind: "donut" }> }) {
  const ring = 2 * Math.PI * 56;
  return <figure className="lib-news-chart lib-donut">
    <div className="lib-news-chart-title">{chart.title}</div>
    <div className="lib-news-chart-sub">{chart.subtitle}</div>
    <div className="lib-waffle-row">
      <svg viewBox="0 0 160 160" role="img" aria-label={`${chart.prefix ? `${chart.prefix} ` : ""}${chart.value} in 100 ${chart.label}`}>
        <circle cx="80" cy="80" r="56" fill="none" stroke="#E2DFD5" strokeWidth="22" />
        <circle cx="80" cy="80" r="56" fill="none" stroke="#B4532A" strokeWidth="22" strokeDasharray={`${ring * chart.value / 100} ${ring}`} transform="rotate(-90 80 80)" />
        {chart.prefix && <text x="80" y="66" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#5B6B63">{chart.prefix}</text>}
        <text x="80" y="92" textAnchor="middle" fontFamily="Newsreader, Georgia, serif" fontSize="34" fontWeight="600" fill="#141413">{chart.value}</text>
        <text x="80" y="110" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="12" fill="#5B6B63">in 100</text>
      </svg>
      <p className="lib-donut-label"><strong>{chart.prefix ? `${chart.prefix} ` : ""}{chart.value} in 100</strong> ischaemic strokes {chart.label}.</p>
    </div>
    <figcaption>{chart.sources}</figcaption>
  </figure>;
}

function StatPicture({ stat }: { stat: NewsStat }) {
  const picture = stat.picture;
  if (picture === "hours") return <svg viewBox="0 0 56 56" aria-hidden="true" focusable="false"><circle cx="28" cy="28" r="24" fill="none" stroke="#B4532A" strokeWidth="3" /><path d="M28 28 L28 4 A24 24 0 0 1 52 28 Z" fill="#B4532A" /><path d="M28 28 V12 M28 28 H40" stroke="#141413" strokeWidth="3" strokeLinecap="round" /></svg>;
  if (picture === "calendar") return <svg viewBox="0 0 56 56" aria-hidden="true" focusable="false"><rect x="5" y="9" width="46" height="42" rx="6" fill="none" stroke="#B4532A" strokeWidth="3" /><path d="M5 20 H51 M17 4 V14 M39 4 V14" stroke="#B4532A" strokeWidth="3" strokeLinecap="round" /><path d="M18 34 l6 6 l12 -12" stroke="#141413" strokeWidth="3" fill="none" strokeLinecap="round" /></svg>;
  if (picture === "one-in") {
    const of = Math.max(2, Math.min(6, stat.of ?? 4));
    return <svg viewBox={`0 0 ${of * 24} 56`} aria-hidden="true" focusable="false">
      {Array.from({ length: of }, (_, at) => <g key={at} transform={`translate(${at * 24} 0)`}>
        <circle cx="12" cy="14" r="8" fill={at === 0 ? "#B4532A" : "none"} stroke="#B4532A" strokeWidth="2.5" />
        <path d="M2 54 C 2 36, 22 36, 22 54" fill={at === 0 ? "#B4532A" : "none"} stroke="#B4532A" strokeWidth="2.5" />
      </g>)}
    </svg>;
  }
  if (!picture) return null;
  if (picture === "half") return <svg viewBox="0 0 56 56" aria-hidden="true" focusable="false"><circle cx="28" cy="28" r="24" fill="none" stroke="#B4532A" strokeWidth="3" /><path d="M28 4 A24 24 0 0 1 28 52 Z" fill="#B4532A" /></svg>;
  if (picture === "times") return <svg viewBox="0 0 70 56" aria-hidden="true" focusable="false"><rect x="2" y="40" width="10" height="14" rx="2" fill="#9AA89F" />{[0, 1, 2, 3, 4].map(at => <rect key={at} x={20 + at * 10} y={40 - at * 0} width="8" height="14" rx="2" fill="#B4532A" />)}</svg>;
  // one in four people: the first filled in
  return <svg viewBox="0 0 96 56" aria-hidden="true" focusable="false">
    {[0, 1, 2, 3].map(at => <g key={at} transform={`translate(${at * 24} 0)`}>
      <circle cx="12" cy="14" r="8" fill={at === 0 ? "#B4532A" : "none"} stroke="#B4532A" strokeWidth="2.5" />
      <path d="M2 54 C 2 36, 22 36, 22 54" fill={at === 0 ? "#B4532A" : "none"} stroke="#B4532A" strokeWidth="2.5" />
    </g>)}
  </svg>;
}

/** Big figures in a row, each with its small picture and reference number. */
export function StatRow({ stats }: { stats: NewsStat[] }) {
  return <ul className="lib-news-stats" role="list">
    {stats.map(stat => <li key={stat.value + stat.label} className="lib-news-stat">
      {stat.picture && <span className="lib-news-stat-pic"><StatPicture stat={stat} /></span>}
      <span className="lib-news-stat-value">{stat.value}</span>
      <span className="lib-news-stat-label">{stat.label}<sup className="lib-news-ref"><a href={`#ref-${stat.ref}`} aria-label={`Reference ${stat.ref}`}>{stat.ref}</a></sup></span>
    </li>)}
  </ul>;
}
