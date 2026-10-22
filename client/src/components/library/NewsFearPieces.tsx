import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { FEAR_PIECES, type FearPiece } from "@/content/fear-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Panic disorder, Health anxiety, Social anxiety and Phobias pages' own pieces (content/fear-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Mind & mood pieces. Each is steered by the card's sections; pictures
// show ideas, calmly, never anyone's own body or results. Phobia pictures never show a feared thing up close (no
// needle, no animal); they stay calm and abstract.

export const isFearPiece = (piece: NewsPiece): piece is FearPiece => (FEAR_PIECES as readonly string[]).includes(piece);

const medCredit = "Illustration: Rehyn. Never stop a medicine without your doctor.";
const helpCredit = "Illustration: Rehyn. In danger now? Call 999.";

// ==== Shared shapes ==========================================================================================

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 206, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 3) * Math.cos(a)} ${y + (r + 3) * Math.sin(a)} L${x + (r + 7) * Math.cos(a)} ${y + (r + 7) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 12 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Arrow = ({ d, head, color = GOLD }: { d: string; head: string; color?: string }) =>
  <g stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** A plain cloud with nothing inside it. */
const Cloud = ({ x, y, s, fill = SOFT, opacity = 1 }: { x: number; y: number; s: number; fill?: string; opacity?: number }) =>
  <g opacity={opacity} fill={fill}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 11} y={y - 18} width="22" height="36" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 11} r="2.2" fill={lit ? WHITE : INK} /></g>;
const Cup = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 12} y={y - 13} width="24" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 12} ${y - 7} h5 a6 6 0 0 1 0 12 h-5`} fill="none" stroke={INK} strokeWidth="2.5" /></g>;
/** A small chevron pointing along `angle` (degrees). */
const Chevron = ({ x, y, angle, color = INK }: { x: number; y: number; angle: number; color?: string }) =>
  <path d="M-5 -6 L4 0 L-5 6" transform={`translate(${x} ${y}) rotate(${angle})`} stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
/** A small lightning flash: a sudden attack. */
const Bolt = ({ x, y }: { x: number; y: number }) =>
  <path d={`M${x + 3} ${y - 13} L${x - 7} ${y + 2} H${x - 1} L${x - 4} ${y + 13} L${x + 7} ${y - 3} H${x + 1} Z`} fill={GOLD} />;
/** A house, its floor centred on (x, y). */
const House = ({ x, y, w = 70, h = 56, lit = false }: { x: number; y: number; w?: number; h?: number; lit?: boolean }) =>
  <g>
    <path d={`M${x - w / 2 - 8} ${y - h} L${x} ${y - h - w * 0.45} L${x + w / 2 + 8} ${y - h} Z`} fill={INK} />
    <rect x={x - w / 2} y={y - h} width={w} height={h} fill={lit ? TINT : WHITE} stroke={INK} strokeWidth="2.5" />
    <rect x={x - 8} y={y - 26} width="16" height="26" rx="2" fill={INK} />
  </g>;
/** A laptop with its screen centred on (x, y). */
const Laptop = ({ x, y, children }: { x: number; y: number; children?: ReactNode }) =>
  <g>
    <rect x={x - 46} y={y - 32} width="92" height="62" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path d={`M${x - 56} ${y + 30} H${x + 56} L${x + 50} ${y + 38} H${x - 50} Z`} fill={INK} />
    {children}
  </g>;
/** An open book centred on (x, y). */
const Book = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 32} ${y - 16} Q${x - 16} ${y - 24} ${x} ${y - 16} Q${x + 16} ${y - 24} ${x + 32} ${y - 16} V${y + 18} Q${x + 16} ${y + 10} ${x} ${y + 18} Q${x - 16} ${y + 10} ${x - 32} ${y + 18} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d={`M${x} ${y - 16} V${y + 18}`} stroke={INK} strokeWidth="2" /></g>;
/** A drinking glass. */
const Glass = ({ x, y, color = INK }: { x: number; y: number; color?: string }) =>
  <g stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={`M${x - 11} ${y - 14} H${x + 11} Q${x + 11} ${y + 2} ${x} ${y + 3} Q${x - 11} ${y + 2} ${x - 11} ${y - 14} Z`} /><path d={`M${x} ${y + 3} V${y + 14} M${x - 7} ${y + 14} H${x + 7}`} /></g>;
/** A flag on a pole standing at (x, y). */
const Flag = ({ x, y, fill = INK }: { x: number; y: number; fill?: string }) =>
  <g><path d={`M${x} ${y} V${y - 26}`} stroke={INK} strokeWidth="2.5" strokeLinecap="round" /><path d={`M${x} ${y - 26} L${x + 16} ${y - 20} L${x} ${y - 14} Z`} fill={fill} /></g>;
/** A map pin whose point is at (x, y + 14). */
const Pin = ({ x, y, fill = INK }: { x: number; y: number; fill?: string }) =>
  <g><path d={`M${x} ${y + 14} C${x - 12} ${y}, ${x - 11} ${y - 14}, ${x} ${y - 14} C${x + 11} ${y - 14}, ${x + 12} ${y}, ${x} ${y + 14} Z`} fill={fill} /><circle cx={x} cy={y - 3} r="4" fill={WHITE} /></g>;
/** A filled tile with a big number and a small line under it. */
const Tile = ({ x, y, w, h, big, small, lit = true, bigSize = 15 }: { x: number; y: number; w: number; h: number; big: string; small: string; lit?: boolean; bigSize?: number }) =>
  <g><rect x={x} y={y} width={w} height={h} rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
    <W x={x + w / 2} y={y + h / 2 + 2} size={bigSize} fill={lit ? WHITE : TEXT}>{big}</W>
    <W x={x + w / 2} y={y + h / 2 + 19} size={9.5} fill={lit ? WHITE : TEXT}>{small}</W></g>;
/** Steps down from (x, y): reducing slowly. */
const StepsDown = ({ x, y, n = 5, dx = 18, dy = 16, color = GOLD }: { x: number; y: number; n?: number; dx?: number; dy?: number; color?: string }) =>
  <path d={`M${x} ${y}` + Array.from({ length: n }, () => ` h${dx} v${dy}`).join("") + ` h${dx}`} stroke={color} strokeWidth="3.5" fill="none" strokeLinejoin="round" />;
/** A breathing circle that swells slowly unless motion is reduced. */
const Breath = ({ x, y, r = 40 }: { x: number; y: number; r?: number }) => {
  const still = useStill();
  return <g><circle cx={x} cy={y} r={r} fill={TINT} stroke={SOFT} strokeWidth="3" /><circle cx={x} cy={y} r={r * 0.55} fill={INK} opacity=".85" className={still ? undefined : "lib-v2-breathe is-slow"} /></g>;
};

// ==== Panic disorder =========================================================================================

function PncSky(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Panic: the most severe form of anxiety", "Out of the blue, with no clear trigger", "Fear of fear, and avoiding places", "Treatable: therapy and medicine"];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When the alarm goes off too often" label="What panic disorder is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of weather: mostly clear days, with sudden storms that come out of the blue">
      {at === 0 ? <g>
        <W x={160} y={34} size={10.5}>Everyone feels anxiety at times</W>
        <Arrow d="M40 52 H280" head="M272 46 L280 52 L272 58" color={LINE} />
        {[{ x: 60, s: 12, t: "Worry" }, { x: 160, s: 18, t: "Anxiety" }, { x: 262, s: 26, t: "Panic" }].map((cloud, index) => <g key={cloud.t}>
          <Cloud x={cloud.x} y={110} s={cloud.s} fill={index === 2 ? INK : SOFT} />
          {index === 2 && <Bolt x={262} y={140} />}
          <W x={cloud.x} y={176} size={11}>{cloud.t}</W>
        </g>)}
      </g> : <g>
        {at === 1 && <W x={160} y={44} size={10.5}>Fine one minute, panic the next</W>}
        {at === 2 && <W x={160} y={44} size={10.5}>Once or twice a month, or several a week</W>}
        {days.map((day, index) => { const x = 12 + index * 43; const storm = (index === 2 || index === 5) && at !== 3; return <g key={index}>
          <rect x={x} y={64} width="38" height="86" rx="8" fill={storm ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <W x={x + 19} y={82} size={10} fill={storm ? WHITE : TEXT}>{day}</W>
          {storm ? <Bolt x={x + 19} y={118} /> : at === 2 ? <Cloud x={x + 19} y={120} s={9} /> : <Sun x={x + 19} y={116} r={6} />}
        </g>; })}
        {at === 3 && <><Box x={96} y={176} w={124} text="Talking therapy" lit /><Box x={232} y={176} w={92} text="Medicine" lit /></>}
      </g>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function PncBodyTimer(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["A rush of symptoms, very quickly", "Racing heart, sweating, trembling", "Dread, or fear of losing control", "About 60 in 100 involve over-breathing", "Usually 5 to 20 minutes, not dangerous"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="A panic attack" title="What a panic attack feels like" label="What happens in a panic attack" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person during a panic attack, the symptoms in body and mind, and a dial showing it passes in minutes">
      <Person x={74} y={160} scale={1.8} fill={at === 4 ? SOFT : INK} />
      {at === 0 && <><circle cx="74" cy="128" r="58" fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="5 7" className={still ? undefined : "lib-why-pulse"} />
        <Box x={234} y={80} w={120} text="In the mind" lit /><Box x={234} y={120} w={120} text="In the body" lit /></>}
      {at === 1 && <><circle cx="74" cy="140" r="6" fill={GOLD} /><Tags x={170} y={34} labels={["Racing heart", "Sweating", "Trembling", "Feeling faint"]} lit={index => index === 0} width={130} gap={34} /></>}
      {at === 2 && <><Cloud x={74} y={54} s={18} /><Tags x={170} y={46} labels={["Dread", "Losing control", "Feeling trapped"]} lit={() => false} width={130} gap={36} /></>}
      {at === 3 && <g>
        {Array.from({ length: 100 }, (_, index) => <circle key={index} cx={168 + (index % 10) * 13.5} cy={34 + Math.floor(index / 10) * 12} r="4.2" fill={index < 60 ? INK : LINE} />)}
        <W x={229} y={172} size={12}>60 in 100</W>
      </g>}
      {at === 4 && <g>
        <circle cx="230" cy="94" r="50" fill="none" stroke={LINE} strokeWidth="10" />
        <path d="M230 44 A50 50 0 0 1 273.3 119" fill="none" stroke={INK} strokeWidth="10" />
        <path d="M255 50.7 A50 50 0 0 1 273.3 69" fill="none" stroke={GOLD} strokeWidth="10" />
        <W x={230} y={96} size={16}>5 to 20</W><W x={230} y={112} size={10}>minutes</W>
        <W x={230} y={170} size={10}>Peak within 5 to 10</W>
      </g>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function PncScales(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Biological and psychological factors", "Fight or flight, more intense", "Work, money, loss, big life events", "Caffeine, alcohol, hunger, tiredness"];
  const tilt = [0, -7, 0, 0][at];
  const left = [["Family", "Brain chemistry"], ["Adrenaline", "Fast breathing"], ["Work", "Money"], ["Caffeine", "Alcohol"]][at];
  const right = [["Stressful events"], ["Real danger"], ["Loss", "Big changes"], ["Hunger", "Tiredness"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="No single cause, many small weights" label="Why it happens" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balance with small weights on each side: the mix of things behind panic disorder">
      <path d="M160 44 V178" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <rect x="120" y="176" width="80" height="7" rx="3" fill={INK} />
      <g transform={`rotate(${tilt} 160 40)`}>
        <rect x="50" y="36" width="220" height="8" rx="4" fill={INK} />
        <path d="M74 44 L28 124 M74 44 L120 124 M246 44 L200 124 M246 44 L292 124" stroke={LINE} strokeWidth="2" />
        <rect x="24" y="124" width="100" height="7" rx="3" fill={INK} /><rect x="196" y="124" width="100" height="7" rx="3" fill={INK} />
        {left.map((label, index) => <Box key={label} x={74} y={110 - index * 27} w={100} text={label} size={10} lit={at === 1} />)}
        {right.map((label, index) => <g key={label} opacity={at === 1 ? 0.4 : 1}><Box x={246} y={110 - index * 27} w={100} text={label} size={10} /></g>)}
      </g>
      <circle cx="160" cy="40" r="6" fill={GOLD} />
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PncGpMonth(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Tell the GP how often, and how long", "A check-up to rule out other causes", "Attacks, then a month or more of worry", "Phone appointments; refer yourself"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diagnosis" title="What the GP will ask, and why" label="Getting a diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person talking to a GP, a month on a calendar, and a phone appointment from home">
      {at === 3 && <path d="M14 186 V120 L56 92 L98 120 V186" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />}
      <Person x={56} y={176} scale={1.1} />
      <Person x={264} y={176} scale={1.1} fill={SOFT} />
      {at === 0 && <Bubble x={150} y={60} text="How often? How long?" width={150} />}
      {at === 1 && <Tags x={100} y={40} labels={["Examination", "Blood tests", "Other causes"]} lit={index => index === 2} width={120} gap={36} />}
      {at === 2 && <g>
        {Array.from({ length: 35 }, (_, index) => <rect key={index} x={104 + (index % 7) * 16} y={40 + Math.floor(index / 7) * 14} width="14" height="12" rx="2" fill={index === 0 ? GOLD : INK} opacity={index === 0 ? 1 : 0.75} />)}
        <W x={160} y={128} size={10.5}>At least a month of worry</W>
      </g>}
      {at === 3 && <><Phone x={140} y={96} lit /><Box x={216} y={58} w={110} text="Refer yourself" lit /><W x={176} y={144} size={10.5}>Telephone consultation</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function PncSessions(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Thoughts, feelings and actions linked", "Unpleasant, but it will pass", "Refer yourself at 18, or 16 in places", "5 to 15 sessions, plus practice", "Keep using the skills afterwards"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="CBT" title="Changing the thoughts behind the fear" label="CBT for panic" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Linked rings for thoughts, feelings and actions, and a row of weekly sessions">
      {at === 0 && [{ x: 84, t: "Thoughts" }, { x: 160, t: "Feelings" }, { x: 236, t: "Actions" }].map(ring => <g key={ring.t}>
        <circle cx={ring.x} cy="84" r="44" fill="none" stroke={INK} strokeWidth="3" /><W x={ring.x} y={88} size={10.5}>{ring.t}</W>
      </g>)}
      {at === 1 && <g>
        <Person x={70} y={130} scale={0.9} /><Bubble x={110} y={56} text="It will pass" width={110} />
        {[0, 1, 2].map(index => <rect key={index} x={186 + index * 40 - 17} y={128 - (24 + index * 22)} width="34" height={24 + index * 22} rx="4" fill={index === 0 ? GOLD : SOFT} />)}
        <W x={226} y={146} size={10}>Corner shop first</W>
      </g>}
      {at === 2 && <><Person x={70} y={130} /><Phone x={118} y={96} lit /><Box x={226} y={60} w={130} text="Refer yourself" lit /><Box x={226} y={100} w={130} text="Or ask a GP" /></>}
      {at === 3 && <><W x={160} y={96} size={16}>5 to 15 sessions</W><W x={160} y={120} size={10.5}>Practise in between</W></>}
      {at === 4 && <><Box x={110} y={70} w={160} text="Keep using the skills" lit /><Box x={220} y={112} w={150} text="Applied relaxation" /></>}
      {Array.from({ length: 15 }, (_, index) => <circle key={index} cx={34 + index * 18} cy="166" r="6" fill={at === 4 ? INK : at === 3 ? (index < 5 ? INK : GOLD) : WHITE} stroke={INK} strokeWidth="2" />)}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function PncAnchor(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Stay where you are; do not fight it", "Breathe in 4, hold 5, out slowly for 8", "3 things to see, hear and touch", "It will pass: these are just symptoms", "Chest pain after? Get medical help"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="During an attack" title="Riding out an attack, step by step" label="What to do during an attack" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An anchor for staying put, slow breathing counts, and grounding with the senses">
      {at === 0 && <g>
        <g stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="80" cy="46" r="9" /><path d="M80 55 V154 M62 76 H98" />
          <path d="M44 122 C46 150, 70 156, 80 156 C90 156, 114 150, 116 122" /><path d="M38 128 L44 120 L52 126 M108 126 L116 120 L122 128" />
        </g>
        <Box x={226} y={74} w={150} text="Stay where you are" lit /><Box x={226} y={114} w={150} text="Do not fight it" />
      </g>}
      {at === 1 && [{ t: "In", n: 4 }, { t: "Hold", n: 5 }, { t: "Out", n: 8 }].map((row, index) => <g key={row.t}>
        <W x={64} y={64 + index * 40} size={11} anchor="end">{row.t}</W>
        <rect x="74" y={49 + index * 40} width={row.n * 24} height="22" rx="8" fill={index === 2 ? GOLD : INK} opacity={index === 1 ? 0.6 : 1} />
        <W x={74 + row.n * 24 - 12} y={64 + index * 40} size={11} fill={WHITE}>{String(row.n)}</W>
      </g>)}
      {at === 2 && ["See", "Hear", "Touch"].map((sense, index) => <g key={sense}>
        <W x={80 + index * 80} y={54} size={11}>{sense}</W>
        {[0, 1, 2].map(dot => <circle key={dot} cx={80 + index * 80} cy={82 + dot * 28} r="9" fill={INK} />)}
      </g>)}
      {at === 3 && <><Person x={70} y={172} scale={1.1} /><Bubble x={166} y={62} text="It will pass" width={120} /><Box x={220} y={128} w={130} text="Just adrenaline" lit /></>}
      {at === 4 && <g>
        <Phone x={60} y={78} lit /><W x={60} y={124} size={10.5}>No Panic</W>
        <Tile x={120} y={30} w={184} h={52} big="01952 680835" small="24-hour breathing message" bigSize={14} />
        <Tile x={120} y={96} w={184} h={52} big="999" small="If you need urgent help" lit={false} bigSize={14} />
      </g>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function PncMedCurve(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Therapy and medicine: the main options", "Usually an SSRI, such as sertraline", "2 to 4 weeks to start, 8 to work fully", "Pregabalin or clonazepam, sometimes", "Never stop suddenly; reduce slowly"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Medicines, given time and care" label="Medicines for panic disorder" credit={medCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A medicine's effect building slowly over weeks, and reducing it slowly with the doctor">
      {at === 0 && <><Box x={92} y={64} w={136} text="Talking therapy" lit /><W x={172} y={70} size={18}>+</W><Pill x={214} y={64} /><W x={214} y={94} size={10.5}>Medicine</W>
        <W x={160} y={140} size={10.5}>If you and your doctor agree</W></>}
      {at === 1 && <><Pill x={52} y={60} /><Box x={196} y={60} w={190} text="SSRI, such as sertraline" lit /><Box x={196} y={100} w={190} text="Or a tricyclic" />
        <W x={160} y={146} size={10.5}>Often a low dose first</W></>}
      {at === 2 && <g>
        <rect x="82" y="52" width="52" height="98" fill={GOLD} opacity=".18" />
        <path d="M30 150 H296" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
        <path d="M30 148 C80 146, 120 120, 160 96 S230 66, 238 64 H296" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        {[82, 134, 238].map(x => <path key={x} d={`M${x} 150 V158`} stroke={INK} strokeWidth="2.5" />)}
        <W x={82} y={174} size={10}>2</W><W x={134} y={174} size={10}>4</W><W x={238} y={174} size={10}>8 weeks</W>
        <W x={108} y={44} size={10}>Starts</W><W x={252} y={52} size={10}>Fully</W>
      </g>}
      {at === 3 && <><Box x={96} y={64} w={120} text="Pregabalin" /><Box x={224} y={64} w={120} text="Clonazepam" />
        <W x={96} y={100} size={10}>A few weeks to work</W><W x={224} y={100} size={10}>Short term, no alcohol</W></>}
      {at === 4 && <><StepsDown x={40} y={60} n={4} dx={46} dy={24} /><Box x={226} y={50} w={130} text="With your doctor" lit /><W x={92} y={168} size={10.5}>Over weeks or months</W></>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function PncStairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Step by step: learn, guided, then CBT", "A CBT-based book or guided course", "Free NHS guides, Mind Plan and audio", "Apps, mentoring and online courses", "Keep a journal: thoughts are not facts"];
  const lit = [[0, 1, 2], [1], [0], [1], [0]][at];
  const blocks = [{ x: 20, y: 140, w: 96 }, { x: 116, y: 104, w: 96 }, { x: 212, y: 68, w: 88 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Self-help" title="Free tools for the first step" label="Self-help courses and apps" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three steps: learning and self-help, guided self-help, then CBT or medicine">
      {blocks.map((block, index) => <rect key={index} x={block.x} y={block.y} width={block.w} height={180 - block.y} fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" />)}
      <W x={68} y={166} size={10.5} fill={lit.includes(0) ? WHITE : TEXT}>Self-help</W>
      <W x={164} y={128} size={10.5} fill={lit.includes(1) ? WHITE : TEXT}>Guided</W>
      <W x={256} y={92} size={10} fill={lit.includes(2) ? WHITE : TEXT}>CBT or</W><W x={256} y={106} size={10} fill={lit.includes(2) ? WHITE : TEXT}>medicine</W>
      {at === 0 && <Person x={68} y={132} scale={0.8} fill={GOLD} />}
      {at === 1 && <Book x={164} y={72} />}
      {at === 2 && <g><W x={68} y={60} size={10}>Free NHS tools</W><Phone x={46} y={104} />
        <path d="M80 110 V100 A14 14 0 0 1 108 100 V110" stroke={INK} strokeWidth="3" fill="none" /><rect x="76" y="104" width="8" height="14" rx="3" fill={INK} /><rect x="104" y="104" width="8" height="14" rx="3" fill={INK} /></g>}
      {at === 3 && <><W x={164} y={40} size={10.5}>Six-week courses</W><Phone x={164} y={74} lit /></>}
      {at === 4 && <g><W x={190} y={40} size={11}>Thoughts are not facts</W>
        <rect x="40" y="68" width="56" height="60" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[0, 1, 2].map(index => <path key={index} d={`M48 ${84 + index * 14} H88`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}</g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PncMap(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Relief now, but the fear grows", "Crowds, transport and queues avoided", "Rate 0 to 100; stay till fear halves", "Corner shop first, then bigger goals"];
  const pins = [{ x: 128, y: 104, label: "Corner shop", alt: "Crowds", ly: 80 }, { x: 200, y: 140, label: "Supermarket", alt: "Queues", ly: 176 }, { x: 272, y: 80, label: "Restaurant", alt: "Transport", ly: 56 }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Avoidance" title="Winning back the places you avoid" label="Going back to places you avoid" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A home and the places around it, reached again one small step at a time">
      <House x={52} y={176} w={52} h={40} />
      {at === 0 && <><circle cx="52" cy="150" r="46" fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="5 6" /><Cloud x={52} y={70} s={20} fill={INK} /></>}
      {at === 3 && <g fill="none" strokeLinecap="round" strokeWidth="3.5">
        <path d="M68 168 C90 140, 108 128, 128 120" stroke={GOLD} />
        <path d="M128 120 C150 132, 180 150, 200 156 M200 156 C230 140, 250 112, 272 96" stroke={LINE} strokeDasharray="4 7" />
      </g>}
      {at !== 2 && pins.map((pin, index) => <g key={pin.x} opacity={at === 0 ? 0.3 : 1}>
        <Pin x={pin.x} y={pin.y} fill={at === 3 && index === 0 ? INK : SOFT} />
        {at > 0 && <W x={pin.x} y={pin.ly} size={10}>{at === 1 ? pin.alt : pin.label}</W>}
      </g>)}
      {at === 2 && <g>
        <W x={160} y={100} size={30}>10</W><Arrow d="M190 90 H226" head="M218 84 L226 90 L218 96" /><W x={256} y={100} size={30}>5</W>
        <W x={160} y={124} size={10}>Start</W><W x={256} y={124} size={10}>Then</W>
        <W x={208} y={52} size={10.5}>Fear, from 0 to 100</W>
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PncFourTiles(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Tea, coffee and cola can make it worse", "Alcohol and smoking can make it worse", "Aim for 150 minutes a week of activity", "7 to 9 hours of sleep, regular meals"];
  const labels = ["Caffeine", "Alcohol", "Exercise", "Sleep"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Everyday life" title="Small daily changes that calm the alarm" label="Caffeine, alcohol, exercise and sleep" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four tiles for caffeine, alcohol, exercise and sleep">
      {labels.map((label, index) => { const x = 14 + index * 76; const lit = index === at; const c = lit ? WHITE : INK; return <g key={label}>
        <rect x={x} y={20} width="68" height="72" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {index === 0 && <Cup x={x + 30} y={46} />}
        {index === 1 && <Glass x={x + 34} y={46} color={c} />}
        {index === 2 && <Person x={x + 34} y={60} scale={0.55} fill={c} />}
        {index === 3 && <Moon x={x + 32} y={46} r={12} fill={c} />}
        <W x={x + 34} y={82} size={9.5} fill={lit ? WHITE : TEXT}>{label}</W>
      </g>; })}
      {at === 0 && <><Box x={90} y={140} w={60} text="Tea" /><Box x={160} y={140} w={70} text="Coffee" /><Box x={230} y={140} w={60} text="Cola" /></>}
      {at === 1 && <><Box x={70} y={140} w={76} text="Alcohol" /><Box x={156} y={140} w={80} text="Smoking" /><Box x={252} y={140} w={104} text="Sugary drinks" /></>}
      {at === 2 && <><W x={160} y={142} size={22}>150 minutes</W><W x={160} y={164} size={10.5}>of activity a week</W></>}
      {at === 3 && <><W x={160} y={142} size={22}>7 to 9 hours</W><W x={160} y={164} size={10.5}>Same bedtime, regular meals</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PncSignpost(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Not always panic: do not self-diagnose", "Chest pain that will not go: call 999", "Still unwell after an attack? Get help", "Pain that comes and goes: see a GP"];
  const arms = [{ y: 46, t: "Call 999", left: true }, { y: 92, t: "Get help", left: false }, { y: 138, t: "See a GP", left: true }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Chest pain" title="Panic, or time to call 999?" label="When it might not be panic" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A signpost: call 999, get medical help, or see a GP">
      <rect x="156" y="26" width="8" height="164" rx="3" fill={INK} />
      {arms.map((arm, index) => { const lit = index === at - 1; const d = arm.left ? `M156 ${arm.y - 15} H54 L38 ${arm.y} L54 ${arm.y + 15} H156 Z` : `M164 ${arm.y - 15} H266 L282 ${arm.y} L266 ${arm.y + 15} H164 Z`;
        return <g key={arm.t}><path d={d} fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><W x={arm.left ? 97 : 223} y={arm.y + 4} size={11} fill={lit ? WHITE : TEXT}>{arm.t}</W></g>; })}
      {at === 1 && <><W x={236} y={40} size={10}>Chest pain that</W><W x={236} y={54} size={10}>does not go away</W></>}
      {at === 2 && <><W x={84} y={88} size={10}>Over 20 minutes,</W><W x={84} y={102} size={10}>or still unwell</W></>}
      {at === 3 && <><W x={236} y={136} size={10}>Comes and goes,</W><W x={236} y={150} size={10}>or still worried</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function PncCircle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Groups help you feel less alone", "No Panic: 0300 772 9844, 10am to 10pm", "Anxiety UK: peer-led groups online", "Triumph Over Phobia: online groups", "Samaritans 116 123, day or night"];
  const people = [{ x: 60, y: 118, k: 0.75 }, { x: 100, y: 112, k: 0.75 }, { x: 140, y: 118, k: 0.75 }, { x: 80, y: 170, k: 0.95 }, { x: 120, y: 170, k: 0.95 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You do not have to face it alone" label="Support groups" credit={at === 4 ? helpCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A small group of people together, and the helplines and online groups that can help">
      {at === 0 && <HeartShape x={100} y={58} size={30} fill={GOLD} stroke={GOLD} width={2} />}
      {people.map((p, index) => <Person key={index} x={p.x} y={p.y} scale={p.k} fill={at === 0 || index % 2 === 0 ? INK : SOFT} />)}
      {at === 1 && <><W x={242} y={50} size={11}>No Panic</W><Tile x={180} y={64} w={124} h={64} big="0300 772 9844" small="10am to 10pm" bigSize={13} /></>}
      {(at === 2 || at === 3) && <Laptop x={242} y={100}>
        {[0, 1, 2, 3].map(index => <Person key={index} x={220 + (index % 2) * 44} y={92 + Math.floor(index / 2) * 26} scale={0.36} fill={index % 2 ? SOFT : INK} />)}
      </Laptop>}
      {at === 2 && <W x={242} y={50} size={11}>Anxiety UK</W>}
      {at === 3 && <><W x={242} y={50} size={10.5}>Triumph Over Phobia</W><W x={242} y={160} size={10}>Online groups</W></>}
      {at === 4 && <Tile x={180} y={64} w={124} h={64} big="116 123" small="Samaritans, any time" />}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

// ==== Health anxiety =========================================================================================

function HanxLens(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Worry about illness takes over", "Ordinary worry, or getting in the way", "Anxiety can cause symptoms itself", "1 in 4 appointments: No Panic estimate", "It can be treated, with CBT"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When worry about illness takes over" label="What health anxiety is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A magnifying glass that makes a small worry look much bigger">
      <path d="M162 134 L206 178" stroke={INK} strokeWidth="11" strokeLinecap="round" />
      <circle cx="120" cy="92" r="58" fill={WHITE} stroke={INK} strokeWidth="5" />
      {at === 0 && <Cloud x={120} y={102} s={36} fill={INK} opacity={0.85} />}
      {at === 1 && <><Cloud x={120} y={98} s={16} /><Tags x={196} y={30} labels={["Ordinary worry", "Gets in the way"]} lit={index => index === 1} width={114} gap={36} /></>}
      {at === 2 && <><HeartShape x={120} y={94} size={56} fill={TINT} stroke={INK} width={3} />
        <Tags x={196} y={30} labels={["Racing heart", "Headaches", "Dizziness"]} lit={() => false} width={114} gap={34} /></>}
      {at === 3 && <>{[84, 108, 132, 156].map((x, index) => <Person key={x} x={x} y={112} scale={0.5} fill={index === 0 ? INK : SOFT} />)}
        <W x={256} y={70} size={22}>1 in 4</W><W x={256} y={90} size={10}>appointments</W></>}
      {at === 4 && <><Sun x={120} y={92} r={18} /><Box x={256} y={60} w={80} text="CBT" lit /><W x={256} y={98} size={10}>Refer yourself</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function HanxSpotlight(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Triggers lead to tension and focus", "The more you look, the more you find", "Reassurance helps, but not for long", "Searching or avoiding keeps it going", "A learnt habit; the brain can retrain"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The cycle" title="The more you look, the more you find" label="The checking and reassurance cycle" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A spotlight on one small spot that makes it seem bigger, and the habits that keep the worry going">
      {at === 1 && <><path d="M250 0 H300 L130 156 H70 Z" fill={GOLD} opacity=".25" /><ellipse cx="100" cy="156" rx="34" ry="8" fill={GOLD} opacity=".5" /></>}
      <Person x={96} y={176} scale={1.5} fill={at === 4 ? SOFT : INK} />
      {at === 1 && <circle cx="104" cy="160" r="6" fill={GOLD} />}
      {at === 0 && <><Tags x={176} y={26} labels={["Illness nearby", "Body sensations", "Stress", "Health stories"]} lit={() => false} width={130} gap={32} />
        <Arrow d="M172 92 C150 100, 140 110, 126 122" head="M134 122 L126 122 L128 114" /></>}
      {at === 2 && <g>
        <path d="M160 150 H304" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
        <path d="M160 60 H198 L214 120 H236 C258 112, 272 72, 300 60" stroke={INK} strokeWidth="3.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
        <W x={160} y={48} size={10} anchor="start">Worry</W><W x={225} y={140} size={10}>Reassured</W>
      </g>}
      {at === 3 && <><Phone x={196} y={86} lit /><W x={196} y={130} size={10.5}>Searching</W>
        <rect x="244" y="66" width="56" height="38" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M262 112 H282" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <Cross x={272} y={85} s={11} /><W x={272} y={130} size={10.5}>Avoiding</W></>}
      {at === 4 && <><Box x={232} y={56} w={130} text="A learnt habit" /><Arrow d="M232 74 V100" head="M226 92 L232 100 L238 92" /><Box x={232} y={118} w={130} text="Can be retrained" lit /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function HanxRoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A past illness can leave you fearful", "About 1 in 4 after stroke, in 5 years", "The worry often eases with time", "Ask your team what to look out for", "Focus on what you can control"];
  const fade = [[1, 1, 1], [0.8, 0.7, 0.6], [0.6, 0.35, 0.12], [0.6, 0.45, 0.3], [0.35, 0.2, 0.1]][at];
  const px = [112, 150, 214, 150, 240][at];
  const py = 172 - (px - 80) * 0.2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="After an illness" title="After a scare, the fear can linger" label="After a real illness or scare" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A road leading away from a hospital, with clouds overhead that thin out along the way">
      <rect x="16" y="96" width="64" height="76" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M48 108 V132 M36 120 H60" stroke={INK} strokeWidth="6" strokeLinecap="round" /><rect x="40" y="148" width="16" height="24" fill={INK} />
      <path d="M80 172 C150 172, 200 150, 304 120" stroke={SOFT} strokeWidth="14" fill="none" strokeLinecap="round" opacity=".6" />
      {[{ x: 130, y: 50 }, { x: 200, y: 40 }, { x: 270, y: 56 }].map((cloud, index) => <Cloud key={cloud.x} x={cloud.x} y={cloud.y} s={16} fill={at === 0 ? INK : SOFT} opacity={fade[index]} />)}
      {(at === 2 || at === 4) && <Sun x={286} y={30} r={10} />}
      <Person x={px} y={py - 4} scale={0.8} fill={INK} />
      {at === 1 && <><W x={232} y={100} size={18}>1 in 4</W><W x={232} y={118} size={10}>within 5 years</W></>}
      {at === 3 && <Bubble x={212} y={96} text="What should I look out for?" width={176} />}
      {at === 4 && <Tags x={176} y={70} labels={["Your recovery", "Your feelings"]} lit={() => false} width={128} gap={32} />}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function HanxClipboard(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Checking, searching, asking often", "Some avoid, others look for more", "Anxiety UK asks about 6 months", "Getting in the way? See a GP"];
  const rows = ["Checking", "Searching", "Asking", "Avoiding"];
  const ticked = [[0, 1, 2], [3], [0, 1, 2, 3], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Signs" title="When health worries shape your days" label="Signs it has become a problem" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clipboard of signs: checking, searching, asking for reassurance and avoiding">
      <rect x="26" y="30" width="124" height="156" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="64" y="22" width="48" height="16" rx="4" fill={INK} />
      {rows.map((row, index) => { const y = 66 + index * 30; return <g key={row}>
        <rect x="38" y={y - 11} width="18" height="18" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />
        {ticked.includes(index) && <path d={`M41 ${y - 2} L46 ${y + 3} L54 ${y - 7}`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
        <W x={64} y={y + 3} size={10.5} anchor="start">{row}</W>
      </g>; })}
      {at === 0 && <Bubble x={238} y={70} text="Am I ill?" width={100} />}
      {at === 1 && <><Person x={204} y={150} fill={SOFT} /><Person x={272} y={150} /><W x={204} y={178} size={10}>Avoid</W><W x={272} y={178} size={10}>Look more</W></>}
      {at === 2 && <><W x={234} y={94} size={30}>6</W><W x={234} y={116} size={10.5}>months or more</W></>}
      {at === 3 && <><Box x={234} y={80} w={110} text="See a GP" lit /><W x={234} y={118} size={10}>For a formal diagnosis</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function HanxWorksheet(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The evidence-based treatment is CBT", "Change checking and reassurance", "Practise between sessions", "5 to 15 sessions, after an assessment", "Keep the skills going after CBT"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="CBT" title="Therapy that breaks the checking habit" label="CBT for health anxiety" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A CBT worksheet between a person and a therapist">
      <Person x={56} y={176} />
      <Person x={264} y={176} fill={SOFT} />
      <rect x="104" y="22" width="112" height="146" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {at === 0 && <><W x={160} y={86} size={24}>CBT</W>{[110, 126, 142].map(y => <path key={y} d={`M120 ${y} H200`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}</>}
      {at === 1 && <g>
        <W x={160} y={62} size={10.5}>Checking</W><path d="M120 58 H200" stroke={GOLD} strokeWidth="2.5" />
        <W x={160} y={96} size={10.5}>Reassurance</W><path d="M116 92 H204" stroke={GOLD} strokeWidth="2.5" />
        <W x={160} y={136} size={10.5}>Daily life</W>
      </g>}
      {at === 2 && <g>
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}><W x={115 + index * 15} y={48} size={9.5}>{day}</W>
          <path d={`M${110 + index * 15} 66 L${114 + index * 15} 70 L${121 + index * 15} 61`} stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" /></g>)}
        {[96, 112, 128, 144].map(y => <path key={y} d={`M118 ${y} H202`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}
      </g>}
      {at === 3 && <>{Array.from({ length: 15 }, (_, index) => <circle key={index} cx={126 + (index % 5) * 17} cy={56 + Math.floor(index / 5) * 22} r="6" fill={index < 5 ? INK : GOLD} />)}<W x={160} y={140} size={14}>5 to 15</W></>}
      {at === 4 && <><Sun x={160} y={76} r={16} /><W x={160} y={132} size={11}>Keep going</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function HanxTally(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Note checks, then cut down over a week", "A plan: from 30 to 40 checks to 2", "Step back from searching symptoms", "Urge to check? Walk or call a friend", "Fewer checks, less anxious over time"];
  const heights = at === 1 ? [100, 84, 66, 48, 32, 18, 6] : [100, 80, 62, 46, 32, 20, 10];
  const faded = at === 2 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Checking less" title="Fewer checks, a calmer week" label="Cutting down checking and searching" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of checks, a little fewer each day">
      <g opacity={faded ? 0.2 : 1}>
        {heights.map((h, index) => <rect key={index} x={26 + index * 40} y={170 - h} width="28" height={h} rx="4" fill={index === 6 ? GOLD : INK} />)}
      </g>
      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <W key={index} x={40 + index * 40} y={188} size={9.5}>{day}</W>)}
      {at === 0 && <><W x={40} y={62} size={10}>10 a day</W><W x={280} y={154} size={10}>1</W></>}
      {at === 1 && <><W x={40} y={62} size={10}>30 to 40</W><W x={280} y={158} size={10}>2</W></>}
      {at === 2 && <><Phone x={96} y={84} lit /><Cross x={96} y={84} s={16} /><Box x={226} y={66} w={140} text="Symptom searches" /><Box x={226} y={104} w={140} text="Medical shows" /></>}
      {at === 3 && <><Box x={90} y={70} w={120} text="Go for a walk" lit /><Box x={230} y={70} w={120} text="Call a friend" lit /><W x={160} y={112} size={10.5}>Or delay asking</W></>}
      {at === 4 && <><path d="M40 60 C120 86, 200 132, 280 146" stroke={GOLD} strokeWidth="3" fill="none" strokeDasharray="5 6" strokeLinecap="round" /><W x={160} y={52} size={10.5}>Worry falls too</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function HanxMedTrack(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Usually talking therapy first", "SSRIs, such as sertraline, once a day", "1 to 2 weeks to start, up to 8 fully", "If SSRIs do not help: other options", "At least 6 months, then reduce slowly"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Medicine for anxiety, given time" label="Medicines" credit={medCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Talking therapy first, then a medicine that builds up over weeks and is reduced slowly">
      {at === 0 && <><Box x={98} y={64} w={140} text="Talking therapy" lit /><Arrow d="M172 64 H196" head="M189 58 L196 64 L189 70" /><Box x={248} y={64} w={96} text="Medicine" />
        <W x={160} y={112} size={10.5}>Or both together</W></>}
      {at === 1 && <><Pill x={60} y={64} /><W x={60} y={94} size={10.5}>SSRI</W><Box x={190} y={64} w={110} text="Sertraline" lit /><Clock x={190} y={114} r={16} hand={2} /><W x={190} y={150} size={10}>Once a day</W></>}
      {at === 2 && <g>
        <Pill x={40} y={60} /><W x={176} y={64} size={10.5}>Seen every 1 to 2 weeks</W>
        <rect x="40" y="104" width="250" height="16" rx="8" fill={LINE} />
        <rect x="40" y="104" width="62" height="16" rx="8" fill={SOFT} /><rect x="96" y="104" width="194" height="16" rx="8" fill={INK} />
        {[71, 102, 290].map(x => <path key={x} d={`M${x} 124 V132`} stroke={INK} strokeWidth="2.5" />)}
        <W x={86} y={148} size={10}>1 to 2 weeks</W><W x={290} y={148} size={10} anchor="end">8 weeks</W>
      </g>}
      {at === 3 && <Tags x={75} y={34} labels={["An SNRI", "Pregabalin", "A benzodiazepine, briefly"]} lit={() => false} width={170} gap={36} />}
      {at === 4 && <><rect x="20" y="70" width="200" height="26" rx="9" fill={INK} /><W x={120} y={87} size={10.5} fill={WHITE}>At least 6 months</W>
        <StepsDown x={226} y={74} n={4} dx={14} dy={16} /><W x={120} y={118} size={10}>after you feel better</W><W x={264} y={160} size={10}>Then slowly</W></>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function HanxNotepad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Reassurance helps short term only", "Share concerns, agree a plan together", "Write it down; ask for a double slot", "Ask what to do if it persists", "Talking therapy, medicine or services"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Your GP" title="A plan with your GP, not another check" label="A plan with your GP" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A list of questions for a GP appointment, and a shared plan">
      {at === 0 && <g>
        <W x={90} y={50} size={11}>Short term</W><Arrow d="M90 66 V118" head="M82 110 L90 118 L98 110" />
        <W x={90} y={144} size={10.5}>Worry eases</W>
        <W x={230} y={50} size={11}>Longer term</W><Arrow d="M230 118 V66" head="M222 74 L230 66 L238 74" color={INK} />
        <W x={230} y={144} size={10.5}>More anxious</W>
      </g>}
      {at === 1 && <><Person x={70} y={176} scale={1.1} /><Person x={250} y={176} scale={1.1} fill={SOFT} />
        <path d="M84 120 C100 90, 120 74, 134 70 M236 120 C220 90, 200 74, 186 70" stroke={GOLD} strokeWidth="2.5" fill="none" strokeDasharray="4 6" />
        <Box x={160} y={64} w={130} text="A plan together" lit /></>}
      {at === 2 && <g>
        <rect x="30" y="26" width="120" height="150" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={90} y={48} size={10.5}>My list</W>
        {[72, 92, 112, 132, 152].map(y => <path key={y} d={`M44 ${y} H136`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}
        <Clock x={236} y={76} r={26} hand={1.4} />
        <W x={236} y={128} size={10.5}>Double appointment</W><W x={236} y={148} size={10}>Same GP, or a loved one</W>
      </g>}
      {at === 3 && <g>
        <rect x="30" y="26" width="260" height="150" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {["What might be causing it?", "What if it persists or worsens?", "How do I get more advice?"].map((q, index) => <g key={q}>
          <circle cx="52" cy={64 + index * 38} r="6" fill={GOLD} /><W x={66} y={68 + index * 38} size={10.5} anchor="start">{q}</W>
        </g>)}
      </g>}
      {at === 4 && <><Person x={80} y={176} scale={1.1} /><Tags x={150} y={36} labels={["Talking therapy", "Medicine", "Local services"]} lit={index => index === 0} width={140} gap={36} /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function HanxNotKnowing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Complete certainty is not possible", "List the costs of carrying on worrying", "10 or 15 minutes a day for worry", "Catch it, check it, change it", "Back to the here and now"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Uncertainty" title="Making room for not knowing" label="Living with uncertainty" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A certainty bar that never reaches full, a short worry time, and coming back to the present">
      {at === 0 && <g>
        <W x={30} y={70} size={10.5} anchor="start">Certainty</W><W x={290} y={70} size={10.5} anchor="end">100%</W>
        <rect x="30" y="84" width="260" height="20" rx="10" fill={LINE} /><rect x="30" y="84" width="200" height="20" rx="10" fill={INK} />
        <rect x="232" y="84" width="58" height="20" rx="10" fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 5" />
        <W x={160} y={140} size={10.5}>Some uncertainty is normal</W>
      </g>}
      {at === 1 && <g>
        <rect x="40" y="26" width="240" height="140" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M160 36 V156" stroke={INK} strokeWidth="2" />
        <W x={100} y={52} size={10.5}>Advantages</W><W x={220} y={52} size={10.5}>Disadvantages</W>
        {[80, 104, 128].map(y => <g key={y}><path d={`M58 ${y} H142`} stroke={LINE} strokeWidth="3" strokeLinecap="round" /><path d={`M178 ${y} H262`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" /></g>)}
      </g>}
      {at === 2 && <g>
        <path d="M72 52 H108 L92 100 L108 148 H72 L88 100 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M80 146 H100 L90 126 Z M83 58 H97 L90 70 Z" fill={GOLD} />
        <Box x={220} y={70} w={120} text="Worry time" lit /><W x={220} y={108} size={10.5}>10 or 15 minutes</W><W x={220} y={126} size={10}>each day</W>
      </g>}
      {at === 3 && <g>
        {["Catch", "Check", "Change"].map((step, index) => <Box key={step} x={60 + index * 100} y={96} w={84} text={step} lit={index === 2} />)}
        <Chevron x={110} y={96} angle={0} color={GOLD} /><Chevron x={210} y={96} angle={0} color={GOLD} />
      </g>}
      {at === 4 && <><Sun x={160} y={60} r={16} /><Person x={160} y={180} scale={1.2} /><Cloud x={262} y={80} s={14} opacity={0.3} /><Cloud x={292} y={50} s={10} opacity={0.15} /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function HanxMugs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Reassurance helps at first, then fades", "Their feelings are real; listen", "Ask how you can help", "Make room for life beyond the worry", "Look after yourself too"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Family and friends" title="Support that does not feed the worry" label="Family and reassurance" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people at a table with cups, talking and listening">
      <Person x={96} y={154} scale={1.2} fill={at === 4 ? SOFT : INK} />
      <Person x={224} y={154} scale={1.2} fill={at === 0 ? SOFT : INK} />
      <rect x="60" y="158" width="200" height="8" rx="3" fill={INK} /><path d="M80 166 V190 M240 166 V190" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <Cup x={140} y={145} /><Cup x={176} y={145} />
      {at === 0 && <><Bubble x={226} y={40} text="" width={100} lit={false} /><Bubble x={218} y={56} text="" width={100} lit={false} /><Bubble x={210} y={72} text="It's fine" width={100} /></>}
      {at === 1 && <Bubble x={212} y={64} text="How are you feeling?" width={150} />}
      {at === 2 && <Bubble x={212} y={64} text="How can I help?" width={130} />}
      {at === 3 && ["Exercise", "Outdoors", "Socialising"].map((label, index) => <Box key={label} x={64 + index * 96} y={52} w={84} text={label} lit />)}
      {at === 4 && <HeartShape x={224} y={70} size={34} fill={GOLD} stroke={GOLD} width={2} />}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function HanxLights(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Keep up regular health checks", "Call 999: lasting chest pain, FAST", "Not sure? NHS 111 online or by phone", "New or unusual? Note it, see a GP", "Ask what to do if it gets worse"];
  const lit = [-1, 0, 1, 2, 2][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="New symptoms" title="When a symptom does need checking" label="When a new symptom does need checking" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three lights: 999, 111 and a GP, for knowing where to go with a symptom">
      <rect x="28" y="24" width="64" height="160" rx="14" fill={INK} />
      {["999", "111", "GP"].map((label, index) => <g key={label}>
        <circle cx="60" cy={58 + index * 46} r="19" fill={index === lit ? GOLD : WHITE} />
        <W x={60} y={62 + index * 46} size={11}>{label}</W>
      </g>)}
      {at === 0 && <><Box x={206} y={74} w={176} text="Regular health checks" lit /><W x={206} y={114} size={10}>Avoiding them can make it worse</W></>}
      {at === 1 && <Tags x={116} y={36} labels={["Chest pain that will not go", "Pain that spreads", "FAST: signs of a stroke"]} lit={index => index === 0} width={184} gap={38} />}
      {at === 2 && <Tags x={116} y={36} labels={["111 online", "The NHS App", "Call 111"]} lit={() => false} width={184} gap={38} />}
      {at === 3 && <Tags x={116} y={36} labels={["Comes and goes", "New or unusual", "Note it down for a few days"]} lit={() => false} width={184} gap={38} />}
      {at === 4 && <><Bubble x={206} y={70} text="What if it gets worse?" width={170} /><W x={206} y={130} size={10.5}>Ask your GP or care team</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function HanxNotebook(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Diary, balanced thoughts, walk instead", "Plan a way back to activities", "Breathe in, count to 5, 5 minutes", "Overcoming Health Anxiety, a CBT book", "Sleep, exercise and regular meals"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Self-help" title="Small steps that really help" label="Self-help that works" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A notebook with worries and balanced thoughts, a plan back to activities, and calm breathing">
      {at === 0 && <g>
        <rect x="16" y="26" width="200" height="140" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M116 34 V158" stroke={INK} strokeWidth="2" />
        <W x={66} y={50} size={10.5}>Worry</W><W x={166} y={50} size={10.5}>Balanced</W>
        <W x={66} y={84} size={10}>Headaches</W><W x={166} y={84} size={10}>Often stress</W>
        {[112, 138].map(y => <g key={y}><path d={`M30 ${y} H102`} stroke={LINE} strokeWidth="3" strokeLinecap="round" /><path d={`M130 ${y} H202`} stroke={LINE} strokeWidth="3" strokeLinecap="round" /></g>)}
        <Person x={268} y={150} scale={1.1} />
      </g>}
      {at === 1 && [0, 1, 2].map(index => <g key={index}>
        <W x={64} y={64 + index * 40} size={10} anchor="end">{`Week ${index + 1}`}</W>
        <rect x="74" y={50 + index * 40} width={70 + index * 70} height="20" rx="8" fill={index === 2 ? GOLD : INK} opacity={index === 0 ? 0.6 : 1} />
      </g>)}
      {at === 2 && <><Breath x={160} y={92} r={44} />{[1, 2, 3, 4, 5].map(n => <W key={n} x={100 + (n - 1) * 30} y={170} size={11}>{String(n)}</W>)}</>}
      {at === 3 && <g>
        <rect x="120" y="30" width="80" height="120" rx="5" fill={INK} /><rect x="120" y="30" width="10" height="120" fill={GOLD} />
        <W x={165} y={80} size={11} fill={WHITE}>Overcoming</W><W x={165} y={96} size={11} fill={WHITE}>Health</W><W x={165} y={112} size={11} fill={WHITE}>Anxiety</W>
      </g>}
      {at === 4 && <g>
        <Moon x={70} y={90} r={18} /><Person x={160} y={112} /><circle cx="250" cy="92" r="22" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="250" cy="92" r="13" fill={TINT} stroke={SOFT} strokeWidth="2" />
        <W x={70} y={146} size={10.5}>Sleep</W><W x={160} y={146} size={10.5}>Exercise</W><W x={250} y={146} size={10.5}>Regular meals</W>
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

// ==== Social anxiety =========================================================================================

function SocPanels(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["More than shyness: a fear that stays", "Worry before, during and after", "Avoiding parties, groups and dates", "Common, from teens on, and treatable"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="More than shyness, and treatable" label="What social anxiety is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three panels, before, during and after a social situation, with a worry that stays">
      {at === 0 && <g>
        <Cloud x={90} y={74} s={10} opacity={0.4} /><Person x={90} y={156} scale={1.2} fill={SOFT} /><W x={90} y={186} size={11}>Shyness</W>
        <Cloud x={230} y={70} s={20} fill={INK} /><Person x={230} y={156} scale={1.2} /><W x={230} y={186} size={11}>Social anxiety</W>
      </g>}
      {at === 1 && ["Before", "During", "After"].map((label, index) => { const x = 12 + index * 102; return <g key={label}>
        <rect x={x} y={26} width="92" height="146" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" />
        <W x={x + 46} y={46} size={10.5}>{label}</W>
        <Cloud x={x + 46} y={82} s={13} fill={INK} /><Person x={x + 46} y={152} scale={0.9} />
      </g>; })}
      {at === 2 && <g>
        <House x={90} y={176} w={90} h={70} /><Person x={70} y={168} scale={0.7} />
        <g opacity=".55"><Tags x={182} y={40} labels={["Group activities", "Parties", "Dates"]} lit={() => false} width={120} gap={38} /></g>
      </g>}
      {at === 3 && <><Sun x={80} y={70} r={16} /><Person x={80} y={176} scale={1.1} />
        <W x={222} y={80} size={22}>5 in 100</W><W x={222} y={100} size={10}>to some degree</W><Box x={222} y={140} w={130} text="Can be treated" lit /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function SocBody(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Feeling watched and judged", "Blushing, sweating, shaky voice", "Avoiding calls, groups and meals", "Panic attacks: 5 to 20 minutes", "Often alongside depression or GAD"];
  const eyes = [[200, 46], [266, 58], [214, 104], [282, 118], [240, 160]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="The mind, the body, the urge to leave" label="Symptoms: thoughts, body and behaviour" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person in a social situation, the feeling of being watched, and common body symptoms">
      <Person x={84} y={170} scale={1.7} fill={at === 4 ? SOFT : INK} />
      {at === 0 && eyes.map(([x, y]) => <g key={x}><ellipse cx={x} cy={y} rx="15" ry="8" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx={x} cy={y} r="4" fill={INK} /></g>)}
      {at === 1 && <><circle cx="76" cy="124" r="4" fill={GOLD} /><circle cx="92" cy="124" r="4" fill={GOLD} />
        <Tags x={168} y={30} labels={["Blushing", "Sweating", "Shaky voice", "Pounding heart"]} lit={index => index === 0} width={136} gap={34} /></>}
      {at === 2 && <Tags x={168} y={30} labels={["Phone calls", "Group conversations", "Eating with others", "Parties"]} lit={() => false} width={136} gap={34} />}
      {at === 3 && <><W x={232} y={84} size={24}>5 to 20</W><W x={232} y={104} size={10.5}>minutes, then it passes</W><Box x={232} y={144} w={124} text="Not dangerous" lit /></>}
      {at === 4 && <Tags x={168} y={46} labels={["Depression", "Generalised anxiety", "Panic disorder"]} lit={() => false} width={136} gap={36} />}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function SocRoots(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Starts in teens; no single cause", "Self-esteem, experiences, family", "Avoiding stops you learning you cope", "Safe for now, but doubts grow later", "Can come alongside autism or ADHD"];
  const plant = at < 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="No single cause, and what keeps it going" label="Why it happens" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A small plant with roots, and the circle of avoiding that keeps social anxiety going">
      {plant && <g>
        <path d="M20 110 H300" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
        <path d="M160 110 V68" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="146" cy="76" rx="14" ry="7" fill={INK} transform="rotate(-30 146 76)" /><ellipse cx="174" cy="66" rx="14" ry="7" fill={GOLD} transform="rotate(30 174 66)" />
        <g stroke={at === 1 ? INK : SOFT} strokeWidth="3" fill="none" strokeLinecap="round"><path d="M160 110 C150 130, 110 140, 80 156" /><path d="M160 110 V170" /><path d="M160 110 C170 130, 210 140, 240 156" /></g>
        {at === 0 && <W x={160} y={42} size={11}>Teenage years</W>}
        {at === 1 && <><W x={70} y={176} size={10.5}>Self-esteem</W><W x={160} y={188} size={10.5}>Experiences</W><W x={250} y={176} size={10.5}>Family</W></>}
      </g>}
      {at === 2 && <g>
        <Box x={80} y={70} w={100} text="Avoid" lit /><Box x={240} y={70} w={110} text="Feels harder" />
        <Arrow d="M134 70 H180" head="M173 64 L180 70 L173 76" />
        <Arrow d="M240 88 C230 140, 100 140, 84 92" head="M78 100 L84 92 L92 98" color={SOFT} />
        <W x={160} y={154} size={10.5}>Next time</W>
      </g>}
      {at === 3 && <><Sun x={80} y={70} r={16} /><Box x={80} y={130} w={130} text="Short term: safe" /><Cloud x={240} y={74} s={24} fill={INK} /><Box x={240} y={130} w={120} text="Doubts grow" lit /></>}
      {at === 4 && <g>
        <circle cx="160" cy="100" r="50" fill={INK} /><W x={160} y={96} size={10.5} fill={WHITE}>Social</W><W x={160} y={112} size={10.5} fill={WHITE}>anxiety</W>
        <circle cx="72" cy="100" r="40" fill={WHITE} fillOpacity=".7" stroke={INK} strokeWidth="2" /><W x={62} y={104} size={10.5}>Autism</W>
        <circle cx="248" cy="100" r="40" fill={WHITE} fillOpacity=".7" stroke={INK} strokeWidth="2" /><W x={258} y={104} size={10.5}>ADHD</W>
      </g>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function SocMessages(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A GP will try to put you at ease", "Two simple questions to start", "A full assessment with a specialist", "Text, email or phone; quieter times", "Or refer yourself, 18 or over"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Getting help" title="Asking for help, your way" label="Getting help from a GP" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Ways to ask for help: in person, by phone, by text or email, or referring yourself">
      {at === 0 && <><Person x={64} y={176} scale={1.1} /><Person x={256} y={176} scale={1.1} fill={SOFT} /><Phone x={160} y={86} lit /><W x={160} y={138} size={10.5}>A phone appointment is fine</W></>}
      {at === 1 && <g>
        <rect x="34" y="30" width="252" height="120" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={160} y={74} size={10.5}>Do you avoid social situations?</W>
        <path d="M60 92 H260" stroke={LINE} strokeWidth="2" />
        <W x={160} y={118} size={10.5}>Are you fearful or embarrassed?</W>
      </g>}
      {at === 2 && <><Person x={64} y={176} /><Person x={112} y={176} fill={SOFT} /><Tags x={148} y={30} labels={["Thoughts and feelings", "Situations you avoid", "How you see yourself"]} lit={() => false} width={156} gap={36} /></>}
      {at === 3 && <g>
        <rect x="48" y="66" width="44" height="32" rx="8" fill={INK} /><path d="M58 98 L54 110 L68 98 Z" fill={INK} />
        <rect x="138" y="66" width="44" height="32" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M138 68 L160 86 L182 68" stroke={INK} strokeWidth="2.5" fill="none" />
        <Phone x={250} y={82} />
        <W x={70} y={132} size={10.5}>Text</W><W x={160} y={132} size={10.5}>Email</W><W x={250} y={132} size={10.5}>Phone</W>
        <W x={160} y={166} size={10}>Quieter times, forms in private</W>
      </g>}
      {at === 4 && <><Box x={160} y={64} w={150} text="Refer yourself" lit /><W x={160} y={104} size={10.5}>18 or over, or 16 in some areas</W><W x={160} y={126} size={10.5}>No diagnosis needed</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function SocSpotlight(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["CBT designed for social anxiety first", "Up to 14 to 16 sessions over 4 months", "Experiments, video feedback, homework", "Notice how others actually react", "Not better? An SSRI with more CBT"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="CBT" title="CBT: seeing yourself more fairly" label="CBT for social anxiety" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A spotlight turning from yourself to the people you are talking with">
      {at === 3 && <><path d="M146 0 H186 L306 168 H210 Z" fill={GOLD} opacity=".25" /><ellipse cx="256" cy="186" rx="52" ry="8" fill={GOLD} opacity=".45" /></>}
      <Person x={70} y={186} scale={0.8} />
      <Person x={232} y={186} scale={0.8} fill={at === 3 ? INK : SOFT} /><Person x={278} y={186} scale={0.8} fill={at === 3 ? INK : SOFT} />
      {at === 0 && <><Box x={160} y={56} w={190} text="CBT for social anxiety" lit /><W x={160} y={96} size={10.5}>Before medication is tried</W></>}
      {at === 1 && <g>
        {[0, 1, 2, 3].map(m => { const x = 22 + m * 72; return <g key={m}>
          <rect x={x} y={30} width="64" height="84" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" />
          <W x={x + 32} y={48} size={10}>{`Month ${m + 1}`}</W>
          {[0, 1, 2, 3].map(d => <circle key={d} cx={x + 20 + (d % 2) * 24} cy={74 + Math.floor(d / 2) * 24} r="7" fill={INK} />)}
        </g>; })}
        <W x={160} y={138} size={10.5}>One-to-one, about an hour each</W>
      </g>}
      {at === 2 && <Tags x={96} y={26} labels={["Experiments", "Video feedback", "Homework"]} lit={index => index === 0} width={128} gap={36} />}
      {at === 4 && <><Pill x={90} y={70} /><W x={140} y={76} size={18}>+</W><Box x={216} y={70} w={110} text="More CBT" lit /><W x={160} y={118} size={10.5}>If you do not feel better</W></>}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function SocColumns(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["A workbook, with a therapist's support", "Works better with group meetings", "Draw your own vicious circle", "A thought is just a thought"];
  const nodes = [{ x: 160, y: 34, t: "Beliefs" }, { x: 256, y: 70, t: "Before" }, { x: 256, y: 130, t: "Body" }, { x: 160, y: 166, t: "Self-image" }, { x: 64, y: 130, t: "Safety" }, { x: 64, y: 70, t: "After" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Guided self-help" title="A workbook, a diary, a fairer thought" label="Guided self-help" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A workbook, a vicious circle drawn out, and two columns for anxious and fairer thoughts">
      {at === 0 && <g>
        <Book x={100} y={92} /><Phone x={226} y={92} lit />
        <path d="M136 92 H210" stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 6" />
        <W x={100} y={136} size={10.5}>Workbook</W><W x={226} y={136} size={10.5}>Therapist support</W>
        <W x={160} y={170} size={10.5}>Up to 9 sessions, 3 to 4 months</W>
      </g>}
      {at === 1 && <g>
        <Book x={160} y={100} />
        {Array.from({ length: 6 }, (_, index) => { const a = -Math.PI / 2 + index * Math.PI / 3; return <Person key={index} x={160 + 92 * Math.cos(a)} y={114 + 64 * Math.sin(a)} scale={0.6} fill={index % 2 ? SOFT : INK} />; })}
      </g>}
      {at === 2 && <g>
        <ellipse cx="160" cy="100" rx="100" ry="66" fill="none" stroke={SOFT} strokeWidth="3" strokeDasharray="5 7" />
        {nodes.map(node => <Box key={node.t} x={node.x} y={node.y} w={80} h={24} text={node.t} size={9.5} lit={node.t === "Safety"} />)}
      </g>}
      {at === 3 && <g>
        <rect x="30" y="24" width="260" height="140" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M160 32 V156" stroke={INK} strokeWidth="2" />
        <W x={95} y={48} size={10.5}>Anxious thought</W><W x={225} y={48} size={10.5}>Fairer thought</W>
        {[78, 104, 130].map(y => <g key={y}><path d={`M48 ${y} H142`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" /><path d={`M178 ${y} H272`} stroke={INK} strokeWidth="3" strokeLinecap="round" /></g>)}
        <Chevron x={160} y={146} angle={0} color={GOLD} />
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

/** A plant at one of three stages: 0 a seed, 1 a sprout, 2 grown. */
const Plant = ({ x, y, stage }: { x: number; y: number; stage: number }) => stage === 0
  ? <ellipse cx={x} cy={y - 4} rx="7" ry="4" fill={INK} />
  : <g>
    <path d={`M${x} ${y} V${y - (stage === 1 ? 24 : 54)}`} stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
    <ellipse cx={x - 9} cy={y - 18} rx="9" ry="5" fill={INK} transform={`rotate(-30 ${x - 9} ${y - 18})`} />
    <ellipse cx={x + 9} cy={y - 22} rx="9" ry="5" fill={INK} transform={`rotate(30 ${x + 9} ${y - 22})`} />
    {stage === 2 && <><ellipse cx={x - 10} cy={y - 40} rx="10" ry="5" fill={INK} transform={`rotate(-30 ${x - 10} ${y - 40})`} /><circle cx={x} cy={y - 58} r="7" fill={GOLD} /></>}
  </g>;

function SocSeedling(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["SSRIs, such as escitalopram", "If CBT is not chosen, or did not help", "Within 6 weeks; full effect by 12", "Not better at 12 weeks? Add CBT", "6 more months, then stop slowly"];
  const plants = at === 2 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Medicine, with patience" label="Medicines" credit={medCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A seed growing into a plant over 12 weeks, like a medicine slowly taking effect">
      {at === 0 && <><Pill x={70} y={56} /><Box x={200} y={46} w={130} text="Escitalopram" lit /><Box x={200} y={82} w={130} text="Sertraline" />
        <W x={160} y={134} size={10.5}>Not usually for children</W></>}
      {at === 1 && <Tags x={70} y={34} labels={["CBT not wanted", "CBT has not helped", "Feeling very depressed"]} lit={() => false} width={180} gap={38} />}
      {at === 3 && <><Box x={70} y={70} w={90} text="12 weeks" /><W x={134} y={76} size={18}>+</W><Box x={214} y={70} w={120} text="CBT as well" lit /><W x={160} y={118} size={10.5}>Or a different medicine</W></>}
      {plants && <g>
        <path d="M20 150 H300" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
        {[60, 160, 260].map((x, index) => <Plant key={x} x={x} y={150} stage={at === 4 ? 2 : index} />)}
        <W x={60} y={172} size={10}>Start</W><W x={160} y={172} size={10}>6 weeks</W><W x={260} y={172} size={10}>12 weeks</W>
        {at === 2 && <W x={160} y={50} size={10.5}>Side effects often ease</W>}
        {at === 4 && <><rect x="30" y="34" width="210" height="24" rx="9" fill={INK} /><W x={135} y={50} size={10.5} fill={WHITE}>At least 6 more months</W><StepsDown x={246} y={38} n={3} dx={14} dy={12} /></>}
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function SocHill(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Avoiding brings relief, but fear grows", "Rate each situation from 0 to 100", "Stay until fear halves: 10 down to 5", "From meeting a friend to a group", "Every step counts; do not rush"];
  const flags = [[52, 182], [108, 160], [160, 120], [214, 84], [276, 52]];
  const climber = [-1, 0, 0, 2, 3][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Small steps" title="Small steps into hard situations" label="Small steps into hard situations" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hill path with five flags, from the easiest situation to the hardest">
      <path d="M16 190 L52 182 L108 160 L160 120 L214 84 L276 52 L304 40" stroke={at === 0 ? SOFT : INK} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={at === 0 ? "6 8" : undefined} />
      {flags.map(([x, y], index) => <g key={x} opacity={at === 0 ? 0.3 : 1}><Flag x={x} y={y} fill={at === 4 && index < 3 ? GOLD : INK} />
        {at === 1 && <W x={x - 6} y={y - 14} size={10} anchor="end">{String(10 + index * 20)}</W>}</g>)}
      {climber >= 0 && <Person x={flags[climber][0] - 12} y={flags[climber][1] - 2} scale={0.6} fill={GOLD} />}
      {at === 0 && <><Person x={30} y={176} scale={0.7} fill={SOFT} /><Cloud x={30} y={130} s={12} fill={INK} /></>}
      {at === 2 && <><W x={200} y={172} size={22}>10</W><Arrow d="M220 164 H248" head="M241 158 L248 164 L241 170" /><W x={270} y={172} size={22}>5</W></>}
      {at === 3 && <><W x={20} y={150} size={10} anchor="start">Meet a friend</W><W x={300} y={22} size={10} anchor="end">Speak in a group</W></>}
      {at === 4 && <W x={90} y={60} size={11}>Every step counts</W>}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function SocMeeting(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["It can be hard to speak in meetings", "Adjustments: a desk of your own", "Access to Work: 16 or over, in work", "Students: Disabled Students' Allowance", "Listen; silence is OK"];
  const table = at === 0 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work and study" title="Getting on at work and in study" label="Work and study" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A meeting table, a desk of your own, and support at work and in study">
      {table && <g>
        {[112, 160, 208].map(x => <Person key={x} x={x} y={x === 160 ? 100 : 106} scale={0.75} />)}
        <ellipse cx="160" cy="126" rx="86" ry="30" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <Person x={50} y={150} scale={0.85} fill={at === 0 ? SOFT : INK} /><Person x={270} y={150} scale={0.85} />
        {at === 4 && <Bubble x={252} y={38} text="Silence is OK" width={116} />}
      </g>}
      {at === 1 && <g>
        <Person x={96} y={118} scale={1} />
        <rect x="36" y="120" width="124" height="8" rx="3" fill={INK} /><path d="M46 128 V176 M150 128 V176" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <rect x="68" y="102" width="62" height="18" rx="3" fill={GOLD} />
        <Box x={240} y={70} w={120} text="Your own desk" lit /><W x={240} y={108} size={10.5}>Not hot-desking</W>
      </g>}
      {at === 2 && <><Box x={160} y={70} w={150} text="Access to Work" lit /><W x={160} y={108} size={10.5}>16 or over, in paid work</W><W x={160} y={128} size={10.5}>No diagnosis needed</W></>}
      {at === 3 && <><Box x={160} y={64} w={220} text="Disabled Students' Allowance" lit /><W x={160} y={104} size={10.5}>A needs assessment</W><W x={160} y={124} size={10.5}>It is not a test</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function SocStabilisers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Things done to feel safe in company", "They stop you learning you can cope", "Plan less, welcome some uncertainty", "Try not to use alcohol or drugs", "Drop them one at a time, easiest first"];
  const dx = at === 4 ? 40 : 0;
  const faded = at === 2 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Safety behaviours" title="Letting go of the safety net" label="Safety behaviours and dropping them" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bicycle with stabilisers, which come off one at a time">
      <g opacity={faded ? 0.22 : 1} transform={`translate(${dx} 0)`}>
        <g stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="100" cy="152" r="26" /><circle cx="204" cy="152" r="26" />
          <path d="M100 152 L142 152 L184 112 L124 112 Z M124 112 L118 96 M106 94 H130 M184 112 L188 94 M180 92 H200 M188 94 L204 152" />
        </g>
        {at !== 4 && <g stroke={GOLD} strokeWidth="3" fill="none"><path d="M100 152 L76 170" /><circle cx="76" cy="170" r="10" /></g>}
      </g>
      {at === 4 && <><circle cx="44" cy="180" r="10" fill="none" stroke={SOFT} strokeWidth="3" /><path d="M20 120 H56 M14 140 H50" stroke={SOFT} strokeWidth="3" strokeLinecap="round" /></>}
      {at === 0 && ["Look away", "Look busy", "Say little"].map((label, index) => <Box key={label} x={56 + index * 104} y={36} w={92} text={label} />)}
      {at === 1 && <Bubble x={210} y={46} text="I only coped because..." width={176} />}
      {at === 2 && <g>
        <rect x="60" y="40" width="60" height="80" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[56, 70, 84, 98].map(y => <path key={y} d={`M70 ${y} H110`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}
        <Cross x={90} y={80} s={18} /><Box x={226} y={64} w={110} text="Plan less" lit /><W x={226} y={104} size={10}>Welcome a little uncertainty</W>
      </g>}
      {at === 3 && <g>
        <Glass x={90} y={80} /><Cross x={90} y={80} s={18} /><Box x={226} y={64} w={150} text="Not alcohol or drugs" lit />
        <W x={226} y={100} size={10}>Dependent on alcohol?</W><W x={226} y={116} size={10}>Get medical help first</W>
      </g>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function SocBench(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["It can be hard to make friends", "Listen, be reliable, ask how to help", "Gentle, never forced", "Encourage them to explore support", "Carers may need support too"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Friends and family" title="Steady, gentle support" label="Friends and family" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people on a bench, one listening to the other">
      <rect x="50" y="112" width="220" height="8" rx="3" fill={INK} />
      <Person x={116} y={152} scale={1.1} fill={at === 3 ? INK : SOFT} />
      {at === 0 ? <Person x={294} y={180} scale={0.9} fill={SOFT} /> : <Person x={204} y={152} scale={1.1} />}
      <rect x="50" y="150" width="220" height="8" rx="3" fill={INK} /><path d="M64 158 V188 M256 158 V188" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 1 && <Bubble x={250} y={66} text="What would help?" width={124} />}
      {at === 2 && <HeartShape x={160} y={80} size={28} fill={GOLD} stroke={GOLD} width={2} />}
      {at === 3 && <Tags x={176} y={14} labels={["Self-help", "Support groups", "Talking therapy"]} lit={() => false} width={130} gap={30} />}
      {at === 4 && <><HeartShape x={204} y={74} size={30} fill={GOLD} stroke={GOLD} width={2} /><Sun x={60} y={50} r={12} /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function SocVideo(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["You are not the only one", "Anxiety UK: groups, courses, infoline", "No Panic helpline, 10am to 10pm", "Groups help you feel understood", "Samaritans 116 123 or text SHOUT 85258"];
  const tiles = [["116 123", "Samaritans, any time"], ["85258", "Text SHOUT"], ["111", "Mental health option"], ["999", "or go to A&E"]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Support" title="You are not the only one" label="Support and charities" credit={at === 4 ? helpCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An online group of people on screen, and helplines for when you need someone now">
      {at < 4 && Array.from({ length: 6 }, (_, index) => { const x = 14 + (index % 3) * 64, y = 30 + Math.floor(index / 3) * 58; const lit = at === 0 && index === 4; return <g key={index}>
        <rect x={x} y={y} width="58" height="50" rx="6" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <Person x={x + 29} y={y + 42} scale={0.55} fill={lit ? WHITE : at === 3 || index % 2 === 0 ? INK : SOFT} />
      </g>; })}
      {at === 0 && <HeartShape x={258} y={80} size={42} fill={GOLD} stroke={GOLD} width={2} />}
      {at === 1 && <><Box x={258} y={52} w={96} text="Anxiety UK" lit /><W x={258} y={86} size={10}>Groups</W><W x={258} y={104} size={10}>Courses</W><W x={258} y={122} size={10}>24-hour infoline</W></>}
      {at === 2 && <><Box x={258} y={52} w={96} text="No Panic" lit /><W x={258} y={86} size={10}>10am to 10pm</W><W x={258} y={104} size={10}>every day</W></>}
      {at === 3 && <><W x={258} y={82} size={10.5}>Understood,</W><W x={258} y={100} size={10.5}>less alone</W></>}
      {at === 4 && tiles.map(([big, small], index) => <Tile key={big} x={10 + (index % 2) * 154} y={30 + Math.floor(index / 2) * 76} w={146} h={64} big={big} small={small} lit={index < 2} bigSize={16} />)}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

// ==== Phobias ================================================================================================

function PhobCircles(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Stronger than an ordinary fear", "Fear at the wrong time or place", "Daily life arranged to avoid it", "Common, and it can be overcome"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A fear far bigger than the danger" label="What a phobia is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A small circle for an ordinary fear beside a much bigger one for a phobia, and a route around something avoided">
      {at === 0 && <g>
        <circle cx="80" cy="104" r="26" fill={WHITE} stroke={INK} strokeWidth="3" />
        <circle cx="212" cy="100" r="62" fill={GOLD} fillOpacity=".35" stroke={GOLD} strokeWidth="3" />
        <W x={80} y={178} size={11}>A fear</W><W x={212} y={178} size={11}>A phobia</W>
      </g>}
      {at === 1 && <><Cloud x={90} y={72} s={22} fill={GOLD} opacity={0.7} /><Person x={90} y={170} scale={1.3} />
        <Clock x={230} y={66} r={22} hand={2.6} /><Box x={230} y={128} w={140} text="No real danger" lit /></>}
      {at === 2 && <g>
        <path d="M30 150 H290" stroke={LINE} strokeWidth="3" strokeDasharray="4 6" />
        <circle cx="160" cy="150" r="34" fill={TINT} stroke={SOFT} strokeWidth="2.5" strokeDasharray="5 5" />
        <path d="M30 150 C70 150, 90 60, 160 60 S250 150, 290 150" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="30" cy="150" r="8" fill={INK} /><circle cx="290" cy="150" r="8" fill={INK} />
        <W x={30} y={178} size={10}>Start</W><W x={290} y={178} size={10}>End</W>
      </g>}
      {at === 3 && <><Sun x={90} y={80} r={18} /><Person x={90} y={176} scale={1.1} /><Box x={222} y={70} w={140} text="Can be overcome" lit /><W x={222} y={108} size={10.5}>Refer yourself</W><W x={222} y={126} size={10.5}>or see a GP</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PhobTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Specific phobias: one thing or place", "Animal, environment, situation, body", "Agoraphobia and social anxiety", "Claustrophobia: around 10% in lifetime", "Three questions, then see a GP"];
  const tiles = [{ x: 16, y: 24, t: "Animals" }, { x: 164, y: 24, t: "Environment" }, { x: 16, y: 100, t: "Situations" }, { x: 164, y: 100, t: "Body" }];
  const icon = (index: number, cx: number, cy: number, c: string) => [
    <g key="paw" fill={c}><circle cx={cx} cy={cy + 5} r="8" /><circle cx={cx - 10} cy={cy - 6} r="3.5" /><circle cx={cx - 4} cy={cy - 11} r="3.5" /><circle cx={cx + 4} cy={cy - 11} r="3.5" /><circle cx={cx + 10} cy={cy - 6} r="3.5" /></g>,
    <path key="hill" d={`M${cx - 18} ${cy + 12} L${cx - 5} ${cy - 10} L${cx + 3} ${cy + 2} L${cx + 9} ${cy - 5} L${cx + 18} ${cy + 12} Z`} fill={c} />,
    <g key="plane" stroke={c} strokeWidth="4" strokeLinecap="round"><path d={`M${cx - 16} ${cy + 2} L${cx + 16} ${cy - 4}`} /><path d={`M${cx - 2} ${cy - 1} L${cx - 10} ${cy - 13} M${cx - 2} ${cy - 1} L${cx + 2} ${cy + 12} M${cx - 13} ${cy + 1} L${cx - 17} ${cy - 6}`} strokeWidth="3" /></g>,
    <path key="drop" d={`M${cx} ${cy - 14} C${cx + 10} ${cy - 2}, ${cx + 10} ${cy + 12}, ${cx} ${cy + 12} C${cx - 10} ${cy + 12}, ${cx - 10} ${cy - 2}, ${cx} ${cy - 14} Z`} fill={c} />,
  ][index];
  const grid = at < 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Types" title="Specific phobias, and more complex ones" label="Specific phobias and complex phobias" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four simple symbols for the common groups of phobia: animals, environment, situations and body">
      {grid && tiles.map((tile, index) => { const lit = at === 1; return <g key={tile.t}>
        <rect x={tile.x} y={tile.y} width="140" height="64" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, tile.x + 30, tile.y + 32, lit ? WHITE : INK)}
        <W x={tile.x + 56} y={tile.y + 36} size={11} anchor="start" fill={lit ? WHITE : TEXT}>{tile.t}</W>
      </g>; })}
      {at === 0 && <W x={160} y={186} size={10.5}>Triggered by contact with that thing</W>}
      {at === 2 && <><House x={90} y={176} w={80} h={60} /><Box x={90} y={46} w={120} text="Agoraphobia" lit />
        {[220, 250, 280].map(x => <Person key={x} x={x} y={160} scale={0.8} fill={x === 250 ? INK : SOFT} />)}<Box x={250} y={46} w={120} text="Social anxiety" lit /></>}
      {at === 3 && <g>
        <rect x="60" y="50" width="60" height="104" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M90 50 V154" stroke={INK} strokeWidth="2" />
        <path d="M84 40 L90 32 L96 40 Z" fill={INK} />
        <W x={226} y={98} size={28}>10%</W><W x={226} y={122} size={10.5}>in their lifetime</W>
      </g>}
      {at === 4 && <>{["Intense fear?", "Go out of your way to avoid it?", "Want to escape, or freeze?"].map((q, index) => <Box key={q} x={160} y={36 + index * 36} w={214} text={q} />)}<Box x={160} y={156} w={120} text="See your GP" lit /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function PhobFigure(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Dizzy, racing heart, sick, shaking", "Fear of fainting or losing control", "Panic: 5 to 20 minutes, not harmful", "Even the thought can be a trigger", "Affecting your life? See a GP"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="What fear does in body and mind" label="What it feels like" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person and the feelings a phobia can bring, in body and mind">
      <Person x={80} y={176} scale={1.8} fill={at === 4 ? SOFT : INK} />
      {at === 0 && <><circle cx="102" cy="116" r="4" fill={GOLD} /><circle cx="80" cy="160" r="5" fill={GOLD} />
        <Tags x={166} y={30} labels={["Dizzy", "Fast heartbeat", "Tight chest", "Shaking"]} lit={index => index === 1} width={136} gap={34} /></>}
      {at === 1 && <><Cloud x={80} y={64} s={22} /><Tags x={166} y={46} labels={["Fear of fainting", "Losing control", "Feeling detached"]} lit={() => false} width={136} gap={36} /></>}
      {at === 2 && <><Clock x={234} y={62} r={24} hand={2} /><W x={234} y={112} size={12}>5 to 20 minutes</W><Box x={234} y={150} w={124} text="Not dangerous" lit /></>}
      {at === 3 && <><Cloud x={80} y={64} s={22} fill={INK} /><Tags x={166} y={60} labels={["Just thinking of it", "Avoiding places"]} lit={index => index === 0} width={136} gap={36} /></>}
      {at === 4 && <><Box x={234} y={80} w={110} text="See a GP" lit /><W x={234} y={118} size={10}>It may be something else</W></>}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function PhobThread(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Often starts young; often unclear why", "An early fright, or learnt from others", "A fear gets linked to a place or thing", "Stress, caffeine, and health problems"];
  const nodes = [{ x: 60, t: "Child" }, { x: 160, t: "Teen" }, { x: 260, t: "Adult" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="How a fear gets learnt" label="Why phobias start" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from childhood to adult life, and how a fear can become linked to a place">
      <g opacity={at === 2 ? 0.3 : 1}>
        {at === 0 && <rect x="30" y="116" width="170" height="28" rx="14" fill={GOLD} opacity=".25" />}
        <path d="M30 130 H290" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        {nodes.map(node => <g key={node.t}><circle cx={node.x} cy="130" r="9" fill={WHITE} stroke={INK} strokeWidth="3" /><W x={node.x} y={160} size={10.5}>{node.t}</W></g>)}
      </g>
      {at === 0 && <><W x={115} y={102} size={10.5}>Often starts young</W><W x={160} y={50} size={10.5}>Not always clear why</W></>}
      {at === 1 && <><Box x={90} y={56} w={124} text="An early fright" /><Box x={232} y={56} w={136} text="Learnt from others" />
        <path d="M90 70 C80 96, 64 106, 60 118 M232 70 C180 100, 90 110, 64 120" stroke={GOLD} strokeWidth="2.5" fill="none" strokeDasharray="4 6" /></>}
      {at === 2 && <><Box x={70} y={64} w={90} text="Panic" lit /><Box x={250} y={64} w={120} text="Place or thing" />
        <path d="M115 60 C140 22, 170 22, 190 60" stroke={GOLD} strokeWidth="3" fill="none" strokeDasharray="5 6" strokeLinecap="round" /><W x={160} y={100} size={10.5}>Linked together</W></>}
      {at === 3 && <><Box x={60} y={56} w={92} text="Stress" /><Box x={160} y={56} w={92} text="Caffeine" /><Box x={262} y={56} w={104} text="Health problems" /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function PhobBars(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Avoiding lets fears grow", "Gradual exposure: a type of CBT", "Rate 0 to 100: bus with a friend, 10", "Start lowest; stay till fear halves", "Move up; some steps take longer"];
  const heights = [12, 36, 60, 84, 108];
  const fill = (index: number) => at === 2 ? INK : at === 3 ? (index === 0 ? GOLD : SOFT) : at === 4 ? (index < 2 ? GOLD : index === 2 ? INK : SOFT) : SOFT;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exposure" title="Facing fear, a little at a time" label="Gradual exposure" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five bars from the least to the most difficult situation, faced one at a time">
      <g opacity={at < 2 ? 0.3 : 1}>
        {heights.map((h, index) => <g key={h}>
          <rect x={24 + index * 30} y={170 - h} width="24" height={h} rx="4" fill={fill(index)} />
          {at === 2 && <W x={36 + index * 30} y={164 - h} size={9.5}>{String(10 + index * 20)}</W>}
        </g>)}
        <path d="M18 172 H158" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      </g>
      {at === 0 && <><Cloud x={204} y={132} s={10} fill={INK} /><Cloud x={242} y={112} s={15} fill={INK} /><Cloud x={284} y={84} s={22} fill={INK} /></>}
      {at === 1 && <><Box x={240} y={56} w={136} text="Exposure therapy" lit /><W x={240} y={92} size={10.5}>A type of CBT</W><W x={240} y={112} size={10.5}>Alone or with help</W></>}
      {at === 2 && <Tags x={174} y={50} labels={["Bus with a friend: 10", "Bus alone: 50"]} lit={index => index === 0} width={136} gap={38} />}
      {at === 3 && <><W x={200} y={100} size={26}>10</W><Arrow d="M222 92 H252" head="M245 86 L252 92 L245 98" /><W x={276} y={100} size={26}>5</W><W x={240} y={136} size={10.5}>Stay until it halves</W></>}
      {at === 4 && <Tags x={178} y={40} labels={["Corner shop", "Supermarket", "Busy restaurant"]} lit={index => index === 0} width={128} gap={36} />}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PhobFolder(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Thoughts, feelings and behaviour", "Talk it through, then practise", "Unpleasant, not fatal, and it passes", "5 to 15 sessions, in many formats", "Free on the NHS; refer yourself"];
  const tabs = ["Thoughts", "Feelings", "Behaviour"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="CBT" title="Change the thought, then face the fear" label="CBT for phobias" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A CBT folder with tabs for thoughts, feelings and behaviour">
      {tabs.map((tab, index) => <g key={tab}><rect x={30 + index * 82} y={30} width="78" height="28" rx="6" fill={at === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={69 + index * 82} y={48} size={10} fill={at === 0 ? WHITE : TEXT}>{tab}</W></g>)}
      <rect x="30" y="52" width="260" height="126" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {at === 0 && <W x={160} y={118} size={10.5}>Practical ways to deal with it</W>}
      {at === 1 && <><Person x={100} y={164} scale={0.9} /><Person x={220} y={164} scale={0.9} fill={SOFT} />
        <rect x="146" y="120" width="28" height="36" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M152 132 H168 M152 142 H168" stroke={LINE} strokeWidth="2.5" />
        <W x={160} y={84} size={10.5}>Practise between sessions</W></>}
      {at === 2 && <><Box x={78} y={114} w={84} text="Unpleasant" /><Box x={164} y={114} w={76} text="Not fatal" /><Box x={244} y={114} w={72} text="Passes" lit /></>}
      {at === 3 && <Tags x={60} y={70} labels={["Guided self-help", "One-to-one or group", "In person, online, phone"]} lit={() => false} width={200} gap={34} />}
      {at === 4 && <><Box x={160} y={100} w={160} text="Free on the NHS" lit /><W x={160} y={140} size={10}>18 or over, registered with a GP</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PhobCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Medicine if self-help has not worked", "SSRIs: up to 8 weeks to work fully", "Propranolol slows the heartbeat", "Diazepam: short term, up to 4 weeks", "Stop only with your doctor, gradually"];
  const lit = [-1, 0, 1, 2, -1][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="What medicines can and cannot do" label="Medicines" credit={medCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three medicine cards: an antidepressant, a beta blocker and a short-term sedative">
      {["Antidepressant", "Beta blocker", "Sedative"].map((label, index) => { const x = 12 + index * 101; const on = index === lit; const c = on ? WHITE : INK; return <g key={label}>
        <rect x={x} y={26} width="94" height="94" rx="10" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {index === 0 && <Pill x={x + 47} y={60} fill={on ? GOLD : INK} />}
        {index === 1 && <HeartShape x={x + 47} y={62} size={32} fill={on ? GOLD : TINT} stroke={c} width={2.5} />}
        {index === 2 && <Moon x={x + 44} y={60} r={13} fill={c} />}
        <W x={x + 47} y={102} size={9.5} fill={on ? WHITE : TEXT}>{label}</W>
      </g>; })}
      {at === 0 && <><Box x={160} y={150} w={200} text="If self-help has not worked" /><W x={160} y={184} size={10.5}>Or alongside CBT</W></>}
      {at === 1 && <g>
        {Array.from({ length: 8 }, (_, index) => <rect key={index} x={44 + index * 30} y={136} width="22" height="18" rx="4" fill={index < 2 ? SOFT : INK} />)}
        <W x={70} y={174} size={10}>1 to 2 weeks</W><W x={266} y={174} size={10} anchor="end">8 weeks</W>
      </g>}
      {at === 2 && <><W x={160} y={152} size={10.5}>Usually works in a few hours</W><W x={160} y={172} size={10}>May not suit asthma</W></>}
      {at === 3 && <><rect x="40" y="140" width="120" height="22" rx="8" fill={INK} /><W x={100} y={155} size={10} fill={WHITE}>Up to 4 weeks</W><Cross x={184} y={151} s={9} /><W x={252} y={155} size={10.5}>Short term only</W></>}
      {at === 4 && <><StepsDown x={40} y={138} n={3} dx={40} dy={14} /><W x={250} y={146} size={10.5}>Reduce gradually</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PhobKit(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Breathe, talk, or join a group", "Count 1 to 5; at least 5 minutes", "Accept the feeling; small targets", "No caffeine after 3pm", "Careful online; keep a journal"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Self-help" title="Small steps you can start today" label="Self-help steps" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Simple self-help: a calming breath, small targets, less caffeine and a journal">
      {at === 0 && <g>
        <circle cx="60" cy="96" r="26" fill={TINT} stroke={SOFT} strokeWidth="3" /><circle cx="60" cy="96" r="13" fill={INK} />
        <Person x={148} y={118} scale={0.75} /><Person x={176} y={118} scale={0.75} fill={SOFT} />
        {[240, 260, 280].map(x => <Person key={x} x={x} y={118} scale={0.65} fill={x === 260 ? INK : SOFT} />)}
        <W x={60} y={150} size={10.5}>Breathe</W><W x={162} y={150} size={10.5}>Talk</W><W x={260} y={150} size={10.5}>Join a group</W>
      </g>}
      {at === 1 && <><Breath x={160} y={88} r={44} />{[1, 2, 3, 4, 5].map(n => <W key={n} x={100 + (n - 1) * 30} y={164} size={11}>{String(n)}</W>)}</>}
      {at === 2 && <g>
        {[44, 30, 16].map((r, index) => <circle key={r} cx="90" cy="100" r={r} fill={index % 2 ? TINT : WHITE} stroke={INK} strokeWidth="2" />)}
        <circle cx="90" cy="100" r="6" fill={GOLD} />
        <Box x={226} y={76} w={150} text="Accept the feeling" lit /><Box x={226} y={116} w={150} text="Small targets" />
      </g>}
      {at === 3 && <><Clock x={90} y={92} r={30} hand={Math.PI / 2} /><W x={90} y={146} size={11}>3pm</W><Cup x={220} y={92} /><Cross x={222} y={92} s={18} /><W x={220} y={146} size={10}>Energy drinks too</W></>}
      {at === 4 && <g>
        <Laptop x={90} y={86} /><Cross x={90} y={84} s={14} /><W x={90} y={150} size={10.5}>Take care online</W>
        <rect x="204" y="56" width="52" height="66" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="204" y="56" width="8" height="66" fill={GOLD} />
        {[74, 88, 102].map(y => <path key={y} d={`M218 ${y} H248`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}
        <W x={230} y={150} size={10.5}>Journal</W>
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PhobClinic(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A common kind of phobia", "Tell them; bring someone with you", "Scans: ask about help to relax", "Feel faint? Lie down, legs raised", "Therapy can treat the fear itself"];
  const chair = at === 0 || at === 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medical care" title="Getting care when needles or scans worry you" label="Needle and medical phobias" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A calm clinic chair with someone for support, and ways to make tests and scans easier">
      {chair && <g>
        {at === 1 && <Person x={112} y={150} />}
        <rect x="70" y="90" width="16" height="70" rx="6" fill={at === 1 ? INK : SOFT} />
        <rect x="70" y="146" width="80" height="14" rx="6" fill={at === 1 ? INK : SOFT} /><rect x="112" y="128" width="40" height="8" rx="3" fill={INK} />
        <path d="M80 160 V190 M140 160 V190" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      </g>}
      {at === 0 && <><Box x={240} y={70} w={130} text="Body phobias" /><Box x={240} y={110} w={130} text="The dentist" /></>}
      {at === 1 && <><Person x={204} y={164} scale={1.1} fill={GOLD} /><Bubble x={190} y={50} text="I'm worried about needles" width={178} />
        <Clock x={280} y={104} r={14} hand={1} /><W x={280} y={136} size={10}>About 10</W><W x={280} y={149} size={10}>minutes</W></>}
      {at === 2 && <g>
        <circle cx="110" cy="112" r="54" fill="none" stroke={INK} strokeWidth="8" />
        <rect x="30" y="122" width="170" height="10" rx="4" fill={INK} />
        <Person x={252} y={170} /><W x={252} y={58} size={10}>They can hear</W><W x={252} y={74} size={10}>and speak to you</W>
      </g>}
      {at === 3 && <g>
        <path d="M20 166 H300" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
        <circle cx="62" cy="148" r="12" fill={INK} /><rect x="76" y="140" width="90" height="16" rx="8" fill={INK} />
        <rect x="196" y="126" width="50" height="40" rx="8" fill={SOFT} />
        <path d="M164 148 L222 118" stroke={INK} strokeWidth="14" strokeLinecap="round" />
        <W x={240} y={60} size={10.5}>Or sit, head lowered</W>
      </g>}
      {at === 4 && <><Box x={100} y={70} w={140} text="Talking therapy" lit />
        {[0, 1, 2].map(index => <rect key={index} x={200 + index * 32} y={150 - (20 + index * 20)} width="28" height={20 + index * 20} rx="4" fill={index === 0 ? GOLD : SOFT} />)}
        <W x={160} y={180} size={10.5}>Easiest step first</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function PhobHome(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["More than a fear of open spaces", "Crowds, transport, queues, distance", "Phone the GP, or refer yourself", "Corner shop first; 12 to 15 sessions", "In panic: stay, breathe, it will pass"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Agoraphobia" title="Widening your world again" label="Agoraphobia and going out" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A home with a path to the corner shop and further, reached step by step">
      {at === 1 && <circle cx="62" cy="146" r="56" fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="5 6" />}
      <House x={60} y={176} w={76} h={64} lit={at === 4} />
      {at === 4 && <Person x={40} y={168} scale={0.6} />}
      {at === 0 && <Tags x={142} y={34} labels={["Public transport", "Shopping centre", "Leaving home"]} lit={() => false} width={164} gap={38} />}
      {at === 1 && <>{[204, 228, 252, 276].map(x => <Person key={x} x={x} y={170} scale={0.6} fill={SOFT} />)}<W x={240} y={126} size={10}>Queues</W></>}
      {at === 2 && <><Phone x={160} y={96} lit /><W x={160} y={140} size={10.5}>GP by phone</W><Box x={256} y={96} w={104} text="Refer yourself" lit /></>}
      {at === 3 && <g>
        <path d="M76 172 C120 172, 150 152, 176 150 S240 120, 290 100" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeDasharray="2 7" />
        <Flag x={176} y={150} fill={INK} /><Flag x={232} y={126} fill={SOFT} /><Flag x={288} y={102} fill={SOFT} />
        <W x={176} y={176} size={10.5}>Corner shop</W><W x={220} y={48} size={10.5}>12 to 15 weekly sessions</W>
      </g>}
      {at === 4 && <Tags x={150} y={40} labels={["Stay where you are", "Breathe slowly", "It will pass"]} lit={index => index === 2} width={146} gap={36} />}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function PhobWalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Their fear is very real to them", "Be reliable; ask how to help", "Encourage help, gently", "Support independence, set boundaries", "Carers need support too: take breaks"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Family and friends" title="Helping without taking over" label="Helping someone with a phobia" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people walking side by side, one supporting the other">
      <path d="M10 186 H310" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
      {at === 3 ? <><Person x={100} y={174} scale={1.2} fill={SOFT} /><Person x={210} y={174} scale={1.2} /><path d="M154 110 V186" stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 6" /><W x={210} y={70} size={10.5}>Encourage independence</W></>
        : at === 4 ? <><Person x={110} y={174} scale={1.2} /><HeartShape x={110} y={86} size={30} fill={GOLD} stroke={GOLD} width={2} /><Cup x={200} y={160} /><Box x={230} y={70} w={140} text="Carer's assessment" lit /></>
          : <><Person x={130} y={174} scale={1.2} fill={SOFT} /><Person x={180} y={174} scale={1.2} /></>}
      {at === 0 && <Cloud x={130} y={92} s={16} fill={GOLD} opacity={0.6} />}
      {at === 1 && <Bubble x={224} y={70} text="What can I do?" width={120} />}
      {at === 2 && <><rect x="250" y="94" width="44" height="86" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="285" cy="138" r="3.2" fill={INK} /><W x={272} y={82} size={10}>Their choice</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function PhobDayNight(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["No Panic: 10am to 10pm, every day", "Anxiety UK: peer calls, groups, CBT", "Self-help groups, online or in person", "NHS talking therapies: refer yourself", "Samaritans 116 123, any time"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="Help from people who understand" label="Support and charities" credit={at === 4 ? helpCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Help by day and by night: helplines, groups and talking therapies">
      {at === 0 && <g>
        <rect x="12" y="20" width="144" height="150" rx="12" fill={WHITE} stroke={LINE} strokeWidth="2" /><rect x="164" y="20" width="144" height="150" rx="12" fill={INK} />
        <Sun x={84} y={60} r={16} /><Moon x={236} y={60} r={16} fill={WHITE} />
        <W x={84} y={120} size={11}>10am to 10pm</W><W x={84} y={138} size={10}>Helpline</W>
        <W x={236} y={120} size={10.5} fill={WHITE}>Recorded</W><W x={236} y={138} size={10} fill={WHITE}>breathing exercise</W>
      </g>}
      {at === 1 && <><Box x={160} y={40} w={120} text="Anxiety UK" lit /><Tags x={80} y={66} labels={["Peer support call", "Support groups", "CBT"]} lit={() => false} width={160} gap={34} /></>}
      {at === 2 && <g>
        <HeartShape x={160} y={100} size={28} fill={GOLD} stroke={GOLD} width={2} />
        {Array.from({ length: 6 }, (_, index) => { const a = -Math.PI / 2 + index * Math.PI / 3; return <Person key={index} x={160 + 90 * Math.cos(a)} y={112 + 62 * Math.sin(a)} scale={0.6} fill={index % 2 ? SOFT : INK} />; })}
      </g>}
      {at === 3 && <><Box x={160} y={70} w={180} text="NHS talking therapies" lit /><W x={160} y={110} size={10.5}>Refer yourself,</W><W x={160} y={128} size={10.5}>or ask your GP</W></>}
      {at === 4 && [["116 123", "Samaritans"], ["111", "Mental health"], ["999", "or A&E"]].map(([big, small], index) => <Tile key={big} x={14 + index * 102} y={50} w={90} h={70} big={big} small={small} lit={index === 0} bigSize={16} />)}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

export function FearPieceView({ piece, ...props }: { piece: FearPiece } & PieceProps) {
  switch (piece) {
    case "pnc-sky": return <PncSky {...props} />;
    case "pnc-body-timer": return <PncBodyTimer {...props} />;
    case "pnc-scales": return <PncScales {...props} />;
    case "pnc-gp-month": return <PncGpMonth {...props} />;
    case "pnc-sessions": return <PncSessions {...props} />;
    case "pnc-anchor": return <PncAnchor {...props} />;
    case "pnc-med-curve": return <PncMedCurve {...props} />;
    case "pnc-stairs": return <PncStairs {...props} />;
    case "pnc-map": return <PncMap {...props} />;
    case "pnc-four-tiles": return <PncFourTiles {...props} />;
    case "pnc-signpost": return <PncSignpost {...props} />;
    case "pnc-circle": return <PncCircle {...props} />;
    case "hanx-lens": return <HanxLens {...props} />;
    case "hanx-spotlight": return <HanxSpotlight {...props} />;
    case "hanx-road": return <HanxRoad {...props} />;
    case "hanx-clipboard": return <HanxClipboard {...props} />;
    case "hanx-worksheet": return <HanxWorksheet {...props} />;
    case "hanx-tally": return <HanxTally {...props} />;
    case "hanx-med-track": return <HanxMedTrack {...props} />;
    case "hanx-notepad": return <HanxNotepad {...props} />;
    case "hanx-not-knowing": return <HanxNotKnowing {...props} />;
    case "hanx-mugs": return <HanxMugs {...props} />;
    case "hanx-lights": return <HanxLights {...props} />;
    case "hanx-notebook": return <HanxNotebook {...props} />;
    case "soc-panels": return <SocPanels {...props} />;
    case "soc-body": return <SocBody {...props} />;
    case "soc-roots": return <SocRoots {...props} />;
    case "soc-messages": return <SocMessages {...props} />;
    case "soc-spotlight": return <SocSpotlight {...props} />;
    case "soc-columns": return <SocColumns {...props} />;
    case "soc-seedling": return <SocSeedling {...props} />;
    case "soc-hill": return <SocHill {...props} />;
    case "soc-meeting": return <SocMeeting {...props} />;
    case "soc-stabilisers": return <SocStabilisers {...props} />;
    case "soc-bench": return <SocBench {...props} />;
    case "soc-video": return <SocVideo {...props} />;
    case "phob-circles": return <PhobCircles {...props} />;
    case "phob-tiles": return <PhobTiles {...props} />;
    case "phob-figure": return <PhobFigure {...props} />;
    case "phob-thread": return <PhobThread {...props} />;
    case "phob-bars": return <PhobBars {...props} />;
    case "phob-folder": return <PhobFolder {...props} />;
    case "phob-cards": return <PhobCards {...props} />;
    case "phob-kit": return <PhobKit {...props} />;
    case "phob-clinic": return <PhobClinic {...props} />;
    case "phob-home": return <PhobHome {...props} />;
    case "phob-walk": return <PhobWalk {...props} />;
    case "phob-day-night": return <PhobDayNight {...props} />;
  }
}
