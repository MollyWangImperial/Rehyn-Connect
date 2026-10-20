import { useState, type ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { itemMedia } from "@/lib/library";
import { BleedPieceView, isBleedPiece } from "./NewsBleedPieces";
import { isTiaPiece, TiaPieceView } from "./NewsTiaPieces";
import { isYoungPiece, YoungPieceView } from "./NewsYoungPieces";
import { isMemoryPiece, MemoryPieceView } from "./NewsMemoryPieces";
import { isLewyPiece, LewyPieceView } from "./NewsLewyPieces";
import { AlzPieceView, isAlzPiece } from "./NewsAlzPieces";
import { isMciPiece, MciPieceView } from "./NewsMciPieces";
import { isPdPiece, PdPieceView } from "./NewsPdPieces";
import { isTremorPiece, TremorPieceView } from "./NewsTremorPieces";
import { Band, Choices, para, useStill, type PieceProps } from "./NewsPieceParts";

// The pieces made for one Ischaemic stroke card each (content/ischaemic-news.ts `figure` and
// `inserts`): a picture under the headline that the reader can play with, or a small interactive
// placed after a section. Every sentence they show is the card's own checked answer, or a plain
// instruction ("Tap a stone"); pictures that show an idea rather than a measurement say so.


// ---- Why does one side feel heavier? The signal, the break, and the new road ------------------

function SignalHero({ article }: PieceProps) {
  const still = useStill();
  const [practice, setPractice] = useState(0);
  const [sent, setSent] = useState(0);
  const through = practice > 0;
  const blocked = "M120 70 C 150 110, 170 150, 196 196";
  const around = "M120 70 C 150 110, 168 140, 180 168 C 150 190, 160 230, 214 236 C 260 240, 300 236, 330 250";
  const message = sent === 0
    ? "Press Send a signal to see the instruction to move set off from the brain."
    : through
      ? para(article, 2, 0)
      : "The signal is not getting through clearly yet. The muscles are waiting for it.";
  return <Band tone="plum" kicker="Brain to hand" title="Where the signal gets stuck" credit="Illustration: Rehyn. A picture of the idea, not of how much practice it takes."
    art={<svg viewBox="40 20 360 300" role="img" aria-label={`A signal travelling from the brain towards the hand. ${through ? "A new road around the damaged part carries it through." : "It stops at the damaged part."}`}>
      <path d="M70 40 C 60 10, 160 0, 170 40 C 190 60, 170 100, 130 100 C 100 110, 60 90, 70 40 Z" fill="#3B2350" stroke="#C9A6E8" strokeWidth="2" />
      <path d={blocked} fill="none" stroke="#C9A6E8" strokeWidth="6" strokeLinecap="round" />
      <path d="M196 196 C 220 220, 270 236, 330 250" fill="none" stroke="#C9A6E8" strokeWidth="6" strokeLinecap="round" opacity=".45" />
      <g transform="translate(188 186)"><path d="M-12 -12 L12 12 M12 -12 L-12 12" stroke="#F2A488" strokeWidth="5" strokeLinecap="round" /></g>
      <g fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#EEDFFA">
        <text x="120" y="56" textAnchor="middle">Brain</text>
        <text x="208" y="176">Damaged</text>
        <text x="340" y="292" textAnchor="middle">Hand</text>
        {through && <text x="128" y="250" fill="#8FE3C6">New road</text>}
      </g>
      <path d={around} fill="none" stroke="#8FE3C6" strokeWidth={2 + practice * 2} strokeLinecap="round" strokeDasharray={through ? undefined : "4 8"} opacity={0.25 + practice * 0.15} className="lib-signal-detour" />
      <g className={through && sent > 0 && !still ? "lib-signal-hand is-moving" : "lib-signal-hand"} key={`hand-${sent}`}>
        <path d="M330 232 C 350 226, 372 230, 380 244 C 386 256, 372 268, 352 266 L 330 264 Z" fill="#F3D9CF" />
        <path d="M376 238 l 16 -10 M380 246 l 18 -4 M380 254 l 16 4" stroke="#F3D9CF" strokeWidth="7" strokeLinecap="round" />
      </g>
      {sent > 0 && (still
        ? <circle cx={through ? 330 : 188} cy={through ? 250 : 186} r="8" fill="#FFFEFA" />
        : <circle key={`pulse-${sent}`} r="8" fill="#FFFEFA"><animateMotion dur="1.6s" fill="freeze" path={through ? around : "M120 70 C 150 110, 168 150, 186 184"} /></circle>)}
    </svg>}>
    <div className="lib-piece-buttons">
      <button type="button" className="lib-why-choice" onClick={() => setSent(count => count + 1)}>Send a signal</button>
      <button type="button" className="lib-why-choice" onClick={() => setPractice(count => Math.min(5, count + 1))} disabled={practice >= 5}>Practise ({practice} of 5)</button>
    </div>
    <p className="lib-why-say lib-piece-say" aria-live="polite">{practice > 0 && sent === 0 ? "Each practice makes the new road a little stronger. Now send a signal." : message}</p>
  </Band>;
}

// ---- Arm and hand: an activity log. Everyday ideas, drawn ---------------------------------------

const IDEA_ART: ReactNode[] = [
  <><rect x="10" y="44" width="60" height="6" rx="3" fill="#2F6851" /><path d="M42 44 v-12 h10 v12" fill="#FFFEFA" stroke="#2F6851" strokeWidth="2" /><path d="M8 30 C 18 26, 26 28, 34 34" stroke="#C47E63" strokeWidth="6" strokeLinecap="round" fill="none" /></>,
  <><path d="M30 18 h20 l-3 26 h-14 z" fill="#FFFEFA" stroke="#2F6851" strokeWidth="2" /><path d="M16 40 C 22 30, 30 30, 34 32" stroke="#C47E63" strokeWidth="6" strokeLinecap="round" fill="none" /></>,
  <><path d="M20 16 l10 -6 h20 l10 6 l-6 10 h-4 v28 h-20 v-28 h-4 z" fill="#FFFEFA" stroke="#2F6851" strokeWidth="2" /></>,
  <><path d="M24 18 h22 v6 h-6 v8" fill="none" stroke="#2F6851" strokeWidth="3" /><path d="M40 38 q-4 8 0 10 q4 -2 0 -10" fill="#8FC7E6" /><rect x="14" y="48" width="52" height="8" rx="4" fill="#2F6851" /></>,
  <><path d="M14 30 h52 q-4 24 -26 24 q-22 0 -26 -24 z" fill="#FFFEFA" stroke="#2F6851" strokeWidth="2" /><path d="M48 12 L 36 40" stroke="#C47E63" strokeWidth="4" strokeLinecap="round" /></>,
];

function IdeasHero({ place }: PieceProps) {
  const media = itemMedia(place.item);
  const practice = media?.kind === "practice" ? media : undefined;
  const [chosen, setChosen] = useState<number | null>(null);
  if (!practice) return null;
  const first = practice.principles[0];
  return <section className="lib-piece-band is-sage" aria-label="Everyday ways to use the arm and hand">
    <div className="lib-piece-inner is-stack">
      <div className="lib-piece-panel is-wide">
        <div className="lib-why-kicker">{first?.title ?? "Practise the exact thing"}</div>
        <h2 className="lib-why-title">Everyday ways to use the arm and hand</h2>
        <p className="lib-piece-lede">{first?.text}</p>
      </div>
      <ul className="lib-ideas" role="list">
        {practice.ideas.map((idea, index) => <li key={idea}>
          <button type="button" className="lib-idea" aria-pressed={chosen === index} onClick={() => setChosen(was => was === index ? null : index)}>
            <svg viewBox="0 0 80 60" aria-hidden="true" focusable="false">{IDEA_ART[index % IDEA_ART.length]}</svg>
            <span>{idea}</span>
          </button>
        </li>)}
      </ul>
      <p className="lib-why-say lib-piece-say" aria-live="polite">{chosen === null ? "Choose an idea to talk over with your physiotherapist." : practice.safety}</p>
    </div>
    <p className="lib-why-credit">Illustrations: Rehyn. Ideas to talk over with your physiotherapist, not a programme.</p>
  </section>;
}

// ---- The first three months: the road -----------------------------------------------------------

const ROAD_STOPS = [{ id: "day", label: "The first day", section: 0, x: 70, y: 210 }, { id: "weeks", label: "The first weeks", section: 1, x: 200, y: 120 }, { id: "six", label: "Around six months", section: 4, x: 330, y: 60 }] as const;

function RoadHero({ article }: PieceProps) {
  const [at, setAt] = useState<(typeof ROAD_STOPS)[number]["id"]>("day");
  const stop = ROAD_STOPS.find(candidate => candidate.id === at)!;
  return <Band tone="dawn" kicker="No set pattern" title="The road from day one" credit="Illustration: Rehyn. Every recovery takes its own road; the stops are the ones this page describes."
    art={<svg viewBox="20 20 360 240" role="img" aria-label={`A road with three stops: the first day, the first weeks and around six months. You are at ${stop.label.toLowerCase()}.`}>
      <path d="M30 250 C 120 240, 90 160, 200 130 S 300 90, 370 40" fill="none" stroke="#6E4E2E" strokeWidth="34" strokeLinecap="round" />
      <path d="M30 250 C 120 240, 90 160, 200 130 S 300 90, 370 40" fill="none" stroke="#F7E3B5" strokeWidth="3" strokeDasharray="12 12" />
      {ROAD_STOPS.map(candidate => <g key={candidate.id} transform={`translate(${candidate.x} ${candidate.y - 34})`}>
        <path d="M0 0 V34" stroke="#3B2A18" strokeWidth="3" />
        <path d="M0 0 h24 l-6 7 l6 7 h-24 z" fill={candidate.id === at ? "#F2A488" : "#FFFEFA"} />
      </g>)}
      <g className="lib-road-walker" style={{ transform: `translate(${stop.x}px, ${stop.y}px)` }}>
        <circle cx="0" cy="-30" r="7" fill="#FFFEFA" /><path d="M0 -22 v14 M0 -8 l-6 10 M0 -8 l6 10 M-7 -16 h14" stroke="#FFFEFA" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>}>
    <Choices items={ROAD_STOPS.map(candidate => ({ id: candidate.id, label: candidate.label }))} active={at} onPick={setAt} label="Stops on the road" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{para(article, stop.section, 0)}</p>
  </Band>;
}

// ---- Walking: the six things balance depends on -------------------------------------------------

const BALANCE = ["Brain", "Muscles", "Joints", "Sense of touch", "Vision", "Inner ear"];

function BalanceWheel() {
  const [on, setOn] = useState<number | null>(null);
  const slice = (index: number) => {
    const a0 = (index / 6) * 2 * Math.PI - Math.PI / 2;
    const a1 = ((index + 1) / 6) * 2 * Math.PI - Math.PI / 2;
    const r = 90, inner = 42;
    const p = (a: number, radius: number) => `${100 + radius * Math.cos(a)} ${100 + radius * Math.sin(a)}`;
    return `M${p(a0, inner)} L${p(a0, r)} A${r} ${r} 0 0 1 ${p(a1, r)} L${p(a1, inner)} A${inner} ${inner} 0 0 0 ${p(a0, inner)} Z`;
  };
  return <figure className="lib-news-chart lib-balance">
    <div className="lib-news-chart-title">Balance is a team effort</div>
    <div className="lib-news-chart-sub">Six things work together to keep you steady. Tap one.</div>
    <div className="lib-waffle-row">
      <svg viewBox="0 0 200 200" role="img" aria-label="A wheel of six parts that balance depends on: brain, muscles, joints, sense of touch, vision and inner ear">
        {BALANCE.map((name, index) => <path key={name} d={slice(index)} fill={on === index ? "#2F6851" : index % 2 ? "#CFE2D6" : "#E5EEE7"} stroke="#FBFAF6" strokeWidth="3" />)}
        <text x="100" y="105" textAnchor="middle" fontFamily="Newsreader, Georgia, serif" fontSize="18" fontWeight="600" fill="#141413">Balance</text>
      </svg>
      <div className="lib-balance-list" role="group" aria-label="What balance depends on">
        {BALANCE.map((name, index) => <button key={name} type="button" aria-pressed={on === index} onClick={() => setOn(was => was === index ? null : index)}>{name}</button>)}
      </div>
    </div>
    <figcaption aria-live="polite">{on === null ? "Balance depends on your brain, muscles, joints, sense of touch, vision and inner ear all working together." : `${BALANCE[on]}: one of the six. A stroke can upset any of these.`}</figcaption>
  </figure>;
}

// ---- Where did my words go? Ways round a stuck word -----------------------------------------------

type WayId = "spell" | "write" | "draw" | "point" | "around";
const WAYS: { id: WayId; label: string }[] = [{ id: "spell", label: "Spell it" }, { id: "write", label: "Write it down" }, { id: "draw", label: "Draw it" }, { id: "point", label: "Point to it" }, { id: "around", label: "Talk around it" }];

function WordsHero({ article }: PieceProps) {
  const [way, setWay] = useState<WayId | null>(null);
  const cup = <path d="M0 0 h34 l-4 34 h-26 z M34 8 h6 a8 8 0 0 1 0 16 h-8" fill="none" stroke="#FFFEFA" strokeWidth="3" strokeLinejoin="round" />;
  return <Band tone="violet" kicker="The word is in there" title="Ways round a stuck word" credit="Illustration: Rehyn."
    art={<svg viewBox="0 0 360 260" role="img" aria-label="A person thinking of a cup. The word will not come out, so they find another way to say it.">
      <path d="M40 250 C 40 180, 70 150, 110 150 C 150 150, 180 180, 180 250 Z" fill="#4C3A8C" />
      <circle cx="110" cy="110" r="42" fill="#4C3A8C" />
      <circle cx="160" cy="62" r="6" fill="#B9A9F2" /><circle cx="176" cy="44" r="9" fill="#B9A9F2" />
      <rect x="190" y="10" width="150" height="80" rx="40" fill="#B9A9F2" />
      <g transform="translate(246 32)">{cup}</g>
      <rect x="190" y="140" width="160" height="70" rx="16" fill="#FFFEFA" />
      <path d="M210 210 l-8 18 l24 -18 z" fill="#FFFEFA" />
      <g aria-hidden="true" fontFamily="DM Sans, sans-serif" fontWeight="700" fill="#2A1F5C" textAnchor="middle">
        {!way && <text x="270" y="183" fontSize="30">. . .</text>}
        {way === "spell" && <text x="270" y="185" fontSize="26">C – U – P</text>}
        {way === "write" && <text x="270" y="186" fontSize="30" fontFamily="Newsreader, Georgia, serif" fontStyle="italic">cup</text>}
        {way === "draw" && <g transform="translate(252 156)"><path d="M0 0 h28 l-3 28 h-22 z M28 6 h5 a7 7 0 0 1 0 14 h-6" fill="none" stroke="#2A1F5C" strokeWidth="2.5" /></g>}
        {way === "point" && <g transform="translate(228 162)"><path d="M0 20 h40 M30 10 l12 10 l-12 10" stroke="#2A1F5C" strokeWidth="4" strokeLinecap="round" fill="none" /><path d="M56 6 h20 l-2 24 h-16 z" fill="none" stroke="#2A1F5C" strokeWidth="2.5" /></g>}
        {way === "around" && <text x="270" y="183" fontSize="15">“You drink tea from it”</text>}
      </g>
    </svg>}>
    <Choices items={WAYS} active={way} onPick={setWay} label="Ways round a stuck word" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{article.helps[2] ?? ""}</p>
  </Band>;
}

// ---- Fatigue: an illustrative day ------------------------------------------------------------------

const DAY = [{ id: "shower", label: "A shower", cost: 25 }, { id: "dressed", label: "Getting dressed", cost: 15 }, { id: "meal", label: "A meal", cost: 15 }, { id: "chat", label: "A chat with friends", cost: 20 }, { id: "journey", label: "A car journey", cost: 25 }];

function EnergyDay({ article }: PieceProps) {
  const [done, setDone] = useState<string[]>([]);
  const [rests, setRests] = useState(0);
  const used = DAY.filter(task => done.includes(task.id)).reduce((sum, task) => sum + task.cost, 0);
  const left = Math.max(0, Math.min(100, 100 - used + rests * 15));
  const toggle = (id: string) => setDone(was => was.includes(id) ? was.filter(other => other !== id) : [...was, id]);
  return <figure className="lib-news-chart lib-energy">
    <div className="lib-news-chart-title">Plan a day</div>
    <div className="lib-news-chart-sub">Tick what the day holds, and add breaks. An illustration to help you plan, not a measure: everyone's energy is different.</div>
    <div className="lib-waffle-row">
      <svg viewBox="0 0 120 220" role="img" aria-label={`A battery about ${left} percent full, for illustration`}>
        <rect x="45" y="6" width="30" height="12" rx="4" fill="#5B6B63" />
        <rect x="20" y="16" width="80" height="196" rx="14" fill="none" stroke="#5B6B63" strokeWidth="5" />
        <rect x="28" y={24 + (180 * (100 - left)) / 100} width="64" height={(180 * left) / 100} rx="8" fill={left > 40 ? "#2F6851" : left > 15 ? "#D9A441" : "#B4532A"} className="lib-energy-fill" />
      </svg>
      <div className="lib-energy-list">
        <div className="lib-balance-list" role="group" aria-label="What the day holds">
          {DAY.map(task => <button key={task.id} type="button" aria-pressed={done.includes(task.id)} onClick={() => toggle(task.id)}>{task.label}</button>)}
        </div>
        <div className="lib-energy-rest">
          <button type="button" className="lib-news-btn" onClick={() => setRests(count => Math.min(4, count + 1))} disabled={rests >= 4}>Add a break</button>
          <button type="button" className="lib-news-btn" onClick={() => { setDone([]); setRests(0); }}>Start again</button>
        </div>
      </div>
    </div>
    <figcaption aria-live="polite">{left <= 15 ? (article.helps[1] ?? "") : (article.helps[0] ?? "")}</figcaption>
  </figure>;
}

// ---- Driving: the two signs --------------------------------------------------------------------------

function RoadSignsHero({ article }: PieceProps) {
  const [licence, setLicence] = useState<"car" | "bus">("car");
  const still = useStill();
  return <Band tone="night" kicker="Who decides" title="How long off the road" credit="Illustration: Rehyn. The rules are GOV.UK's; see the full rules for your case."
    art={<svg viewBox="0 0 380 240" role="img" aria-label={licence === "car" ? "Car or motorcycle licence: at least one month off the road" : "Bus, coach or lorry licence: at least one year off the road"}>
      <path d="M0 200 H380 V240 H0 Z" fill="#2E3440" />
      <path d="M0 220 H380" stroke="#F7E3B5" strokeWidth="4" strokeDasharray="22 18" />
      <g transform="translate(250 40)">
        <rect x="-4" y="40" width="8" height="120" fill="#9AA89F" />
        <rect x="-74" y="0" width="148" height="76" rx="10" fill={licence === "car" ? "#FFFEFA" : "#F2A488"} stroke="#141413" strokeWidth="3" />
        <text x="0" y="34" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="15" fontWeight="700" fill="#141413">At least</text>
        <text x="0" y="62" textAnchor="middle" fontFamily="Newsreader, Georgia, serif" fontSize="28" fontWeight="600" fill="#141413">{licence === "car" ? "1 month" : "1 year"}</text>
      </g>
      <g className={still ? undefined : "lib-drive-car"} key={licence} style={{ transform: "translateX(0)" }}>
        {licence === "car"
          ? <g transform="translate(40 168)"><rect x="0" y="10" width="86" height="26" rx="10" fill="#8FC7E6" /><path d="M16 10 l12 -16 h32 l12 16 z" fill="#8FC7E6" /><circle cx="20" cy="38" r="9" fill="#141413" /><circle cx="68" cy="38" r="9" fill="#141413" /></g>
          : <g transform="translate(20 150)"><rect x="0" y="0" width="140" height="52" rx="8" fill="#F2A488" /><rect x="10" y="8" width="100" height="18" rx="3" fill="#FFFEFA" opacity=".8" /><circle cx="28" cy="56" r="10" fill="#141413" /><circle cx="112" cy="56" r="10" fill="#141413" /></g>}
      </g>
    </svg>}>
    <Choices items={[{ id: "car" as const, label: "Car or motorcycle licence" }, { id: "bus" as const, label: "Bus, coach or lorry licence" }]} active={licence} onPick={setLicence} label="Your licence" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{licence === "car" ? para(article, 0, 0) : para(article, 2, 0)}</p>
  </Band>;
}

// ---- Could it happen again? Lowering the odds ------------------------------------------------------

function OddsHero({ article }: PieceProps) {
  const [ticked, setTicked] = useState<number[]>([]);
  const toggle = (index: number) => setTicked(was => was.includes(index) ? was.filter(other => other !== index) : [...was, index]);
  const items = article.helps.slice(0, 4);
  return <Band tone="forest" kicker="The odds, and what lowers them" title="Your reminder list" credit="Illustration: Rehyn. A reminder list, not a risk score."
    art={<svg viewBox="0 0 300 260" role="img" aria-label={`A shield made of ${items.length} parts, ${ticked.length} lit`}>
      {items.map((_, index) => {
        const lit = ticked.includes(index);
        const quarter = ["M150 30 L150 130 L60 130 L60 60 Z", "M150 30 L240 60 L240 130 L150 130 Z", "M60 130 L150 130 L150 240 C 100 220, 66 180, 60 130 Z", "M150 130 L240 130 C 234 180, 200 220, 150 240 Z"][index];
        return <path key={index} d={quarter} fill={lit ? "#8FE3C6" : "#24503F"} stroke="#0E2A20" strokeWidth="4" className="lib-odds-part" />;
      })}
      <text x="150" y="146" textAnchor="middle" fontFamily="Newsreader, Georgia, serif" fontSize="22" fontWeight="600" fill="#FFFEFA">{ticked.length} of {items.length}</text>
    </svg>}>
    <div className="lib-why-choices" role="group" aria-label="Your reminder list">
      {items.map((help, index) => <button key={index} type="button" className="lib-why-choice lib-odds-item" aria-pressed={ticked.includes(index)} onClick={() => toggle(index)}>
        <span className="lib-why-num" aria-hidden="true">{ticked.includes(index) ? "✓" : index + 1}</span><span>{help}</span>
      </button>)}
    </div>
  </Band>;
}

// ---- Going back to work: the stepping stones ---------------------------------------------------------

function StonesHero({ article }: PieceProps) {
  const stones = [
    { id: "tell", label: "Tell your employer", text: para(article, 1, 0), x: 50 },
    { id: "touch", label: "Keep in touch", text: article.helps[1] ?? "", x: 130 },
    { id: "confidence", label: "Rebuild confidence", text: para(article, 2, 1), x: 210 },
    { id: "back", label: "Back, with a plan", text: para(article, 0, 1), x: 290 },
  ];
  const [at, setAt] = useState("tell");
  const stone = stones.find(candidate => candidate.id === at)!;
  return <Band tone="sea" kicker="No set timetable" title="Back to work, a stone at a time" credit="Illustration: Rehyn. Some people go back within weeks, some after months or years."
    art={<svg viewBox="0 0 340 220" role="img" aria-label={`Stepping stones across water. You are at: ${stone.label}.`}>
      <rect x="0" y="80" width="340" height="140" fill="#1F5C6E" />
      <path d="M0 120 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke="#5AA2B4" strokeWidth="2" opacity=".6" />
      {stones.map(candidate => <ellipse key={candidate.id} cx={candidate.x} cy="160" rx="30" ry="12" fill={candidate.id === at ? "#F7E3B5" : "#C9C5B8"} />)}
      <g className="lib-road-walker" style={{ transform: `translate(${stone.x}px, 150px)` }}>
        <circle cx="0" cy="-30" r="7" fill="#FFFEFA" /><path d="M0 -22 v14 M0 -8 l-6 10 M0 -8 l6 10 M-7 -16 h14" stroke="#FFFEFA" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>}>
    <Choices items={stones.map(candidate => ({ id: candidate.id, label: candidate.label }))} active={at} onPick={setAt} label="Stepping stones" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{stone.text}</p>
  </Band>;
}

// ---- Low days, flat days: the sudden shower -----------------------------------------------------------

function WeatherHero({ article }: PieceProps) {
  const still = useStill();
  const [side, setSide] = useState<"outside" | "inside">("outside");
  return <Band tone="storm" kicker="Emotionalism" title="A shower out of nowhere" credit="Illustration: Rehyn."
    art={<svg viewBox="0 0 320 240" role="img" aria-label={side === "outside" ? "A sudden rain cloud over a person: tears that arrive out of nowhere" : "Inside, the person is calm: the tears do not match the feeling"}>
      <circle cx="250" cy="60" r="30" fill="#F2C94C" opacity={side === "inside" ? 1 : 0.35} />
      <g opacity={side === "outside" ? 1 : 0.25}>
        <path d="M90 70 a26 26 0 0 1 48 -14 a22 22 0 0 1 40 12 a18 18 0 0 1 -4 36 h-82 a18 18 0 0 1 -2 -34 z" fill="#C7CFE0" />
        {[100, 120, 140, 160].map((x, index) => <path key={x} d={`M${x} 112 l-6 16`} stroke="#8FC7E6" strokeWidth="3" strokeLinecap="round" className={still ? undefined : "lib-rain"} style={{ animationDelay: `${index * 0.2}s` }} />)}
      </g>
      <circle cx="140" cy="168" r="18" fill="#FFFEFA" />
      <path d="M110 236 C 110 206, 124 192, 140 192 C 156 192, 170 206, 170 236 Z" fill="#FFFEFA" />
      {side === "inside" && <path d="M131 172 q9 7 18 0" stroke="#3A3478" strokeWidth="2.5" fill="none" strokeLinecap="round" />}
    </svg>}>
    <Choices items={[{ id: "outside" as const, label: "What other people see" }, { id: "inside" as const, label: "What it feels like inside" }]} active={side} onPick={setSide} label="Two sides" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{side === "outside" ? para(article, 0, 0) : para(article, 0, 1)}</p>
  </Band>;
}

// ---- Swallowing: the fork in the throat ---------------------------------------------------------------

function SwallowHero({ article }: PieceProps) {
  const still = useStill();
  const [mode, setMode] = useState<"safe" | "wrong">("safe");
  const [run, setRun] = useState(0);
  const toFood = "M70 70 C 110 70, 130 90, 150 120 C 160 140, 170 180, 176 240";
  const toAir = "M70 70 C 110 70, 130 90, 140 120 C 140 150, 128 190, 122 240";
  const pick = (next: "safe" | "wrong") => { setMode(next); setRun(count => count + 1); };
  return <Band tone="rose" kicker="Dysphagia" title="Two pipes, one crossing" credit="Illustration: Rehyn. A simple picture of the throat, not to scale."
    art={<svg viewBox="20 20 260 240" role="img" aria-label={mode === "safe" ? "A safe swallow: food goes down the food pipe behind the airway" : "When swallowing goes wrong: food slips into the airway towards the lungs"}>
      <path d="M40 60 C 70 40, 130 40, 150 70 L 160 110 L 190 250 H 160 L 145 130 L 135 250 H 105 L 120 120 C 110 90, 80 80, 40 80 Z" fill="#F3D9CF" />
      <path d="M105 250 L 120 120" stroke="#8FC7E6" strokeWidth="18" strokeLinecap="round" opacity=".7" />
      <text x="96" y="236" textAnchor="end" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="700" fill="#FFFEFA">Airway</text>
      <path d="M160 250 L 150 125" stroke="#C47E63" strokeWidth="18" strokeLinecap="round" opacity=".7" />
      <text x="184" y="236" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="700" fill="#FFFEFA">Food pipe</text>
      <path d="M124 112 l 20 -10" stroke="#9E2A2A" strokeWidth="5" strokeLinecap="round" className={mode === "safe" ? "lib-flap is-closed" : "lib-flap"} />
      {still
        ? <circle cx={mode === "safe" ? 170 : 124} cy="220" r="9" fill="#6B4E2E" />
        : <circle key={run} r="9" fill="#6B4E2E"><animateMotion dur="2s" fill="freeze" path={mode === "safe" ? toFood : toAir} /></circle>}
      {mode === "wrong" && <text x="70" y="200" textAnchor="end" fontFamily="DM Sans, sans-serif" fontSize="22" fontWeight="700" fill="#FFD3BF">!</text>}
    </svg>}>
    <Choices items={[{ id: "safe" as const, label: "A safe swallow" }, { id: "wrong" as const, label: "When it goes wrong" }]} active={mode} onPick={pick} label="Swallow" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{mode === "safe" ? para(article, 0, 0) : para(article, 1, 0)}</p>
  </Band>;
}

function Thickness() {
  const levels = ["Water and thin drinks", "Slightly thick", "Thicker", "Soft food", "Pureed food"];
  return <figure className="lib-news-chart lib-thickness">
    <div className="lib-news-chart-title">From thin to thick</div>
    <div className="lib-news-chart-sub">Water and other thin drinks are the hardest to control. Your speech and language therapist says which texture is right for you.</div>
    <svg viewBox="0 0 660 120" role="img" aria-label="A scale from water and thin drinks, the hardest to control, to pureed food">
      <defs><linearGradient id="lib-thick" x1="0" x2="1"><stop offset="0" stopColor="#8FC7E6" /><stop offset="1" stopColor="#C47E63" /></linearGradient></defs>
      <rect x="20" y="40" width="620" height="22" rx="11" fill="url(#lib-thick)" />
      {levels.map((level, index) => {
        const x = 20 + index * 155;
        return <g key={level}>
          <circle cx={x + 11} cy="51" r="7" fill="#FFFEFA" stroke="#141413" strokeWidth="2" />
          <text x={x + (index === 4 ? 22 : index === 0 ? 0 : 11)} y="90" textAnchor={index === 0 ? "start" : index === 4 ? "end" : "middle"} fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="600" fill="#141413">{level}</text>
        </g>;
      })}
      <text x="20" y="28" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#9E2A2A">Hardest to control</text>
    </svg>
    <figcaption>Illustration: Rehyn. Not a guide to the textures you should have.</figcaption>
  </figure>;
}

// ---- Carers: the small wins jar -------------------------------------------------------------------------

function WinsHero({ article }: PieceProps) {
  const still = useStill();
  const [wins, setWins] = useState(0);
  const lines = [para(article, 2, 3), para(article, 2, 1), para(article, 2, 2)].filter(Boolean);
  const stars = Array.from({ length: Math.min(wins, 12) }, (_, index) => ({ x: 100 + ((index * 37) % 90) - 40, y: 210 - Math.floor(index / 3) * 26 }));
  return <Band tone="honey" kicker="For the person alongside" title="Count the small wins" credit="Illustration: Rehyn."
    art={<svg viewBox="0 0 220 260" role="img" aria-label={`A jar holding ${Math.min(wins, 12)} stars, one for each small win noticed`}>
      <rect x="62" y="20" width="96" height="18" rx="6" fill="#8A5A12" />
      <path d="M50 44 h120 v6 c 16 10, 20 26, 20 50 v120 c 0 18, -14 30, -32 30 h-96 c -18 0, -32 -12, -32 -30 v-120 c 0 -24, 4 -40, 20 -50 z" fill="#FFF6E2" fillOpacity=".25" stroke="#FFF6E2" strokeWidth="3" />
      {stars.map((star, index) => <path key={index} className={still ? undefined : "lib-star"} transform={`translate(${star.x} ${star.y})`} d="M0 -10 L3 -3 L10 -3 L4 2 L6 10 L0 5 L-6 10 L-4 2 L-10 -3 L-3 -3 Z" fill="#F2C94C" />)}
    </svg>}>
    <div className="lib-piece-buttons">
      <button type="button" className="lib-why-choice" onClick={() => setWins(count => count + 1)}>Notice a small win</button>
      {wins > 0 && <button type="button" className="lib-why-choice" onClick={() => setWins(0)}>Empty the jar</button>}
    </div>
    <p className="lib-why-say lib-piece-say" aria-live="polite">{wins === 0 ? "Tap the button each time you notice progress, however small." : lines[(wins - 1) % lines.length]}</p>
    <p className="lib-piece-help">{article.helps[2]}</p>
  </Band>;
}

// ---- How the brain rewires: the shape of recovery --------------------------------------------------------

function RecoveryCurve() {
  return <figure className="lib-news-chart lib-curve">
    <div className="lib-news-chart-title">No deadline</div>
    <div className="lib-news-chart-sub">The fastest recovery usually comes first, and improvements can carry on for years.</div>
    <svg viewBox="0 0 660 200" role="img" aria-label="A curve that rises fastest in the first weeks and months, then keeps rising gently over years, with no end point">
      <defs><marker id="lib-curve-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#2F6851" /></marker></defs>
      <line x1="40" y1="170" x2="640" y2="170" stroke="#9AA89F" strokeWidth="1.5" />
      <path d="M40 170 C 90 60, 180 70, 300 60 S 520 40, 620 34" fill="none" stroke="#2F6851" strokeWidth="5" strokeLinecap="round" markerEnd="url(#lib-curve-arrow)" />
      <rect x="40" y="40" width="190" height="130" fill="#2F6851" opacity=".08" />
      <text x="50" y="58" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#2F6851">Fastest here</text>
      {[{ x: 70, t: "Weeks" }, { x: 210, t: "Months" }, { x: 520, t: "Years" }].map(tick => <text key={tick.t} x={tick.x} y="192" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="12" fill="#5B6B63">{tick.t}</text>)}
      <text x="600" y="24" textAnchor="end" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#141413">No time limit</text>
    </svg>
    <figcaption>Illustration: Rehyn, of the pattern the Stroke Association describes; not a measurement, and every recovery is different.</figcaption>
  </figure>;
}

/** The piece named in a card's feature. */
export function NewsPieceView({ piece, article, place }: { piece: NewsPiece } & PieceProps) {
  const props = { article, place };
  if (isBleedPiece(piece)) return <BleedPieceView piece={piece} {...props} />;
  if (isTiaPiece(piece)) return <TiaPieceView piece={piece} {...props} />;
  if (isYoungPiece(piece)) return <YoungPieceView piece={piece} {...props} />;
  if (isMemoryPiece(piece)) return <MemoryPieceView piece={piece} {...props} />;
  if (isLewyPiece(piece)) return <LewyPieceView piece={piece} {...props} />;
  if (isAlzPiece(piece)) return <AlzPieceView piece={piece} {...props} />;
  if (isMciPiece(piece)) return <MciPieceView piece={piece} {...props} />;
  if (isPdPiece(piece)) return <PdPieceView piece={piece} {...props} />;
  if (isTremorPiece(piece)) return <TremorPieceView piece={piece} {...props} />;
  switch (piece) {
    case "signal": return <SignalHero {...props} />;
    case "ideas": return <IdeasHero {...props} />;
    case "road": return <RoadHero {...props} />;
    case "words": return <WordsHero {...props} />;
    case "road-signs": return <RoadSignsHero {...props} />;
    case "odds": return <OddsHero {...props} />;
    case "stones": return <StonesHero {...props} />;
    case "weather": return <WeatherHero {...props} />;
    case "swallow": return <SwallowHero {...props} />;
    case "wins": return <WinsHero {...props} />;
    case "recovery-curve": return <RecoveryCurve />;
    case "balance-wheel": return <BalanceWheel />;
    case "energy-day": return <EnergyDay {...props} />;
    case "thickness": return <Thickness />;
  }
}
