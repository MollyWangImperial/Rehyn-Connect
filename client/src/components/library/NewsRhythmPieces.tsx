import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { RHYTHM_PIECES, type RhythmPiece } from "@/content/rhythm-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The SVT, Slow heart rate and heart block, and Ectopic beats pages' own pieces (content/rhythm-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Heart & lungs pieces. Each is steered by the card's sections; pictures
// show ideas, never anyone's own heart, lungs or results.

export const isRhythmPiece = (piece: NewsPiece): piece is RhythmPiece => (RHYTHM_PIECES as readonly string[]).includes(piece);

// ==== Shared pieces of drawing ==============================================================================

/** The caption under a picture. */
const Say = ({ y = 206, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** Lines of text, one under another, the first with its baseline at y. */
const Lines = ({ x, y, lines, size = 10.5, gap = 15, anchor = "middle", fill = TEXT }: { x: number; y: number; lines: string[]; size?: number; gap?: number; anchor?: "start" | "middle" | "end"; fill?: string }) =>
  <g>{lines.map((line, index) => <W key={index} x={x} y={y + index * gap} size={size} anchor={anchor} fill={fill}>{line}</W>)}</g>;
/** A panel of lines, centred on x, its top at y; `lit` panels are filled. */
const Note = ({ x, y, w, lines, lit = true, size = 10.5 }: { x: number; y: number; w: number; lines: string[]; lit?: boolean; size?: number }) =>
  <g><rect x={x - w / 2} y={y} width={w} height={lines.length * 15 + 11} rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><Lines x={x} y={y + 18} lines={lines} size={size} fill={lit ? WHITE : TEXT} /></g>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** A heart trace from x0 to x1 at height y, with a beat at each of `xs` (each beat is 10 wide). */
const spikes = (x0: number, x1: number, y: number, xs: number[], h = 26) => {
  let d = `M${x0} ${y}`;
  for (const x of xs) d += ` H${x} l3 -${h} l4 ${h + 10} l3 -10`;
  return `${d} H${x1}`;
};
const every = (from: number, to: number, gap: number) => Array.from({ length: Math.floor((to - from) / gap) + 1 }, (_, index) => from + index * gap);
const Phone = ({ x, y, text = "999", lit = true }: { x: number; y: number; text?: string; lit?: boolean }) =>
  <g><rect x={x - 20} y={y - 32} width="40" height="64" rx="8" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={x} y={y + 4} size={12} fill={lit ? WHITE : TEXT}>{text}</W><circle cx={x} cy={y + 22} r="3" fill={lit ? WHITE : INK} /></g>;
const Car = ({ x, y, fill = INK }: { x: number; y: number; fill?: string }) =>
  <g><path d={`M${x - 32} ${y - 6} V${y - 16} L${x - 22} ${y - 28} H${x + 12} L${x + 24} ${y - 16} H${x + 30} V${y - 6} Z`} fill={fill} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <circle cx={x - 18} cy={y - 4} r="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x + 16} cy={y - 4} r="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /></g>;
const Lorry = ({ x, y, fill = INK }: { x: number; y: number; fill?: string }) =>
  <g><rect x={x - 40} y={y - 40} width="52" height="34" rx="3" fill={fill} stroke={INK} strokeWidth="2" /><path d={`M${x + 14} ${y - 6} V${y - 30} H${x + 30} L${x + 40} ${y - 18} V${y - 6} Z`} fill={fill} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    {[-26, 0, 28].map(dx => <circle key={dx} cx={x + dx} cy={y - 4} r="7" fill={WHITE} stroke={INK} strokeWidth="2.5" />)}</g>;
const Cup = ({ x, y, fill = WHITE }: { x: number; y: number; fill?: string }) =>
  <g><rect x={x - 12} y={y - 13} width="24" height="26" rx="4" fill={fill} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 12} ${y - 7} h5 a6 6 0 0 1 0 12 h-5`} fill="none" stroke={INK} strokeWidth="2.5" /></g>;
const Glass = ({ x, y }: { x: number; y: number }) =>
  <path d={`M${x - 10} ${y - 16} h20 c0 13, -4 18, -10 18 c-6 0, -10 -5, -10 -18 Z M${x} ${y + 2} v11 M${x - 7} ${y + 13} h14`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
/** A row of day boxes; `lit(index)` boxes are filled. */
const Days = ({ x, y, count, lit, size = 28, gap = 4 }: { x: number; y: number; count: number; lit: (index: number) => boolean; size?: number; gap?: number }) =>
  <g>{Array.from({ length: count }, (_, index) => <rect key={index} x={x + index * (size + gap)} y={y} width={size} height={size} rx="6" fill={lit(index) ? INK : WHITE} stroke={INK} strokeWidth="2" />)}</g>;
/** A speech bubble with its tail pointing down-left, centred on (x, y). */
const Bubble = ({ x, y, text, width = 110 }: { x: number; y: number; text: string; width?: number }) =>
  <g>
    <rect x={x - width / 2} y={y - 15} width={width} height="30" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" />
    <path d={`M${x - width / 2 + 18} ${y + 14} l-8 12 l18 -12`} fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <W x={x} y={y + 4} size={10.5}>{text}</W>
  </g>;
/** A stop sign. */
const Stop = ({ x, y, r = 30 }: { x: number; y: number; r?: number }) => {
  const points = Array.from({ length: 8 }, (_, index) => { const a = Math.PI / 8 + index * Math.PI / 4; return `${x + r * Math.cos(a)},${y + r * Math.sin(a)}`; }).join(" ");
  return <g><polygon points={points} fill={INK} stroke={WHITE} strokeWidth="3" /><W x={x} y={y + 4} size={11} fill={WHITE}>STOP</W></g>;
};

// ==== SVT ===================================================================================================

function SvtWiring(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A short circuit in the heart's wiring" label="What SVT is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A heart's wiring, with an extra pathway making a short circuit, and how fast SVT can be">
      <HeartShape x={96} y={96} size={150} fill={at === 3 ? TINT : WHITE} />
      <path d="M44 100 H148" stroke={SOFT} strokeWidth="2" strokeDasharray="4 5" />
      <path d="M62 70 C72 84, 84 94, 96 100 V140 M96 140 C86 146, 76 140, 68 128 M96 140 C106 146, 116 140, 124 128" fill="none" stroke={at === 1 ? GOLD : INK} strokeWidth="3" strokeLinecap="round" />
      {at === 2 && <path d="M96 100 C110 112, 136 106, 134 90 C132 76, 112 76, 96 100" fill="none" stroke={GOLD} strokeWidth="3.5" strokeDasharray="6 4" className={still ? undefined : "lib-why-pulse"} />}
      <circle cx="62" cy="70" r="6" fill={INK} /><circle cx="96" cy="100" r="6" fill={INK} />
      {at === 0 && <>
        <rect x="192" y="111" width="40" height="24" rx="5" fill={SOFT} /><rect x="256" y="40" width="40" height="42" rx="5" fill={INK} />
        <W x={212} y={104} size={10.5}>60 to 100</W><W x={276} y={33} size={10.5}>150 to 220</W>
        <W x={212} y={152} size={10.5}>Resting</W><W x={276} y={152} size={10.5}>SVT</W>
        <W x={244} y={174} size={10}>beats a minute</W>
      </>}
      {at === 1 && ["Sinus node", "Atria", "AV node", "Ventricles"].map((label, index) => <Box key={label} x={248} y={44 + index * 34} w={112} text={label} lit={index === 0 || index === 2} />)}
      {at === 2 && <Note x={248} y={60} w={118} lines={["An extra", "pathway, often", "there from birth"]} />}
      {at === 3 && <><Note x={248} y={34} w={124} lines={["Rarely life", "threatening"]} /><Note x={248} y={100} w={124} lines={["If needed:", "manoeuvres,", "medicines or", "a procedure"]} lit={false} size={10} /></>}
      <Say>{["Suddenly much faster than normal", "The sinus node starts each beat", "A short circuit makes it race", "Often no treatment is needed"][at]}</Say>
    </svg>} />;
}

function SvtOnOff(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const xs = [...every(28, 88, 30), ...every(110, 196, 12), ...every(222, 282, 30)];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Racing heart: on, then off" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A calm heartbeat that suddenly races, then suddenly calms again">
      <path d={spikes(14, 306, 124, xs)} stroke={INK} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      {at === 0 && <><path d="M108 86 V80 H208 V86" stroke={GOLD} strokeWidth="3" fill="none" /><W x={158} y={70} size={10.5}>Minutes, sometimes hours</W>
        <W x={56} y={156} size={10.5}>Calm</W><W x={158} y={156} size={10.5}>Racing</W><W x={258} y={156} size={10.5}>Calm</W>
        <W x={160} y={180} size={10.5}>Several times a day, or once a year</W></>}
      {at === 1 && <><g transform="translate(0 -4)">{["Chest pain", "Dizzy", "Breathless", "Tired"].map((label, index) => <Box key={label} x={48 + index * 75} y={36} w={68} text={label} size={10} />)}</g>
        <W x={160} y={176} size={10.5}>Some people have no symptoms</W></>}
      {at === 2 && <><W x={160} y={40} size={10.5}>At rest, or during exercise</W>
        <path d="M40 166 H280" stroke={LINE} strokeWidth="8" strokeLinecap="round" /><path d="M140 166 H200" stroke={GOLD} strokeWidth="8" strokeLinecap="round" />
        {[["0", 40], ["25", 140], ["40", 200], ["60", 280]].map(([t, x]) => <W key={t} x={Number(x)} y={186} size={10}>{t}</W>)}
        <W x={160} y={154} size={10}>Age</W></>}
      {at === 3 && <><Note x={82} y={22} w={128} lines={["Keeps happening?", "See a GP"]} lit={false} />
        <Note x={232} y={14} w={164} lines={["Diagnosed, and longer", "than usual? Or chest", "pain, breathless, faint:", "call 999"]} size={10} /></>}
      <Say>{["Starts and stops suddenly", "Sometimes dizzy, breathless or tired", "Often first felt between 25 and 40", "Do not drive yourself to A&E"][at]}</Say>
    </svg>} />;
}

function SvtTriggerRing(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const ring = ["Caffeine", "Alcohol", "Dehydration", "Stress", "Tiredness", "Smoking", "Medicines", "Rich food"];
  const lit = [[0, 1, 2], [3, 4, 0, 2], [5, 6, 7], [0, 1, 5, 4]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Triggers" title="Caffeine, alcohol, or nothing at all" label="Triggers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label={`Things that can set off SVT: ${ring.join(", ")}`}>
      <HeartShape x={160} y={98} size={64} fill={at === 0 ? TINT : WHITE} />
      {at === 0 && <W x={160} y={102} size={18} serif>?</W>}
      {ring.map((label, index) => {
        const angle = (index / ring.length) * Math.PI * 2 - Math.PI / 2;
        return <Box key={label} x={160 + Math.cos(angle) * 116} y={94 + Math.sin(angle) * 72} w={80} h={24} text={label} lit={lit.includes(index)} size={10} />;
      })}
      <Say>{["Often there's no obvious trigger", "Stress, tiredness and stimulants", "Some cold and flu medicines, too", "Cut down, rest, keep a diary"][at]}</Say>
    </svg>} />;
}

function SvtMonitors(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const labels = ["ECG", "Monitor", "Implant", "Watch", "EP study"];
  const icon = (index: number, cx: number, cy: number, c: string) => [
    <path key="e" d={spikes(cx - 20, cx + 20, cy + 6, [cx - 14, cx + 2], 14)} stroke={c} strokeWidth="2" fill="none" />,
    <g key="m"><path d={`M${cx - 22} ${cy} H${cx + 22}`} stroke={c} strokeWidth="3" /><rect x={cx - 10} y={cy - 9} width="20" height="18" rx="4" fill="none" stroke={c} strokeWidth="2.5" /></g>,
    <g key="i"><path d={`M${cx - 22} ${cy - 6} Q${cx} ${cy - 16} ${cx + 22} ${cy - 6}`} stroke={c} strokeWidth="2.5" fill="none" /><rect x={cx - 8} y={cy - 1} width="16" height="9" rx="3" fill={c} /></g>,
    <g key="w"><rect x={cx - 9} y={cy - 11} width="18" height="22" rx="4" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${cx - 6} ${cy - 11} V${cy - 19} H${cx + 6} V${cy - 11} M${cx - 6} ${cy + 11} V${cy + 19} H${cx + 6} V${cy + 11}`} stroke={c} strokeWidth="2" fill="none" /></g>,
    <g key="p"><HeartShape x={cx + 4} y={cy - 2} size={30} fill="none" stroke={c} width={2.5} /><path d={`M${cx - 20} ${cy + 20} C${cx - 10} ${cy + 10}, ${cx - 4} ${cy}, ${cx + 2} ${cy - 4}`} stroke={c} strokeWidth="2" fill="none" /></g>,
  ][index];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="Catching a heart in the act" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An ECG, a monitor worn on a belt, a recorder under the skin, a watch, and an EP study">
      {labels.map((label, index) => {
        const x = 14 + index * 60;
        const on = index === at;
        return <g key={label}><rect x={x} y="30" width="52" height="64" rx="10" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
          {icon(index, x + 26, 62, on ? WHITE : INK)}
          <W x={x + 26} y={112} size={10} fill={on ? INK : TEXT}>{label}</W></g>;
      })}
      <Lines x={160} y={140} lines={[
        ["If SVT happens during the ECG,", "a clear diagnosis can be made"],
        ["On a belt: 24 to 48 hours, up", "to 7 days; patches for weeks"],
        ["Fitted in about 15 minutes;", "records for up to four and", "a half years"],
        ["Some phones and watches record", "a trace; check with your doctor"],
        ["A closer look at the wiring,", "often alongside ablation"],
      ][at]} />
      <Say>{["Catching SVT on an ECG", "A portable ECG on a belt", "Rare episodes? A loop recorder", "Devices of your own", "The EP study: about 2 to 3 hours"][at]}</Say>
    </svg>} />;
}

function SvtValsalva(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Stopping an episode" title="Simple tricks to calm a racing heart" label="Stopping an episode" credit="Illustration: Rehyn. Follow the steps in the article."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person sitting down, with simple ways to stop an episode and when to call 999">
      <path d="M50 150 H114 M56 150 V190 M108 150 V190 M50 150 V92" stroke={SOFT} strokeWidth="5" strokeLinecap="round" fill="none" />
      <Person x={80} y={130} scale={1.4} />
      {at === 1 && <circle cx="96" cy="88" r="6" fill={GOLD} />}
      {at === 0 && <><path d={spikes(150, 306, 84, [...every(156, 216, 12), 246, 280], 22)} stroke={INK} strokeWidth="2.5" fill="none" />
        <Lines x={228} y={130} lines={["They may stop a fast", "rhythm and return the", "heart to normal"]} /></>}
      {at === 1 && <><circle cx="228" cy="70" r="34" fill={WHITE} stroke={INK} strokeWidth="3" /><W x={228} y={78} size={22} serif>20</W>
        <Lines x={228} y={126} lines={["about 20 seconds,", "then breathe out"]} /></>}
      {at === 2 && <><path d="M186 74 H270 C268 100, 250 112, 228 112 C206 112, 188 100, 186 74 Z" fill={TINT} stroke={INK} strokeWidth="3" />
        <path d="M198 84 q8 -5 16 0 t16 0 t16 0 t16 0" stroke={SOFT} strokeWidth="2.5" fill="none" />
        <Lines x={228} y={140} lines={["Face in cold water", "for a second or two"]} /></>}
      {at === 3 && <><Bubble x={226} y={64} text="Tell your doctor" width={124} />
        <Lines x={228} y={118} lines={["It helps show the", "type of fast rhythm"]} /></>}
      {at === 4 && <><g className={still ? undefined : "lib-why-pulse"}><Phone x={228} y={62} /></g>
        <Lines x={228} y={122} lines={["Bad chest pain, very faint,", "hard to breathe, or longer", "than usual: call 999"]} size={10} /></>}
      <Say>{["Easy and safe to do anywhere", "Sit or lie down, then strain", "Cold water, a cough, a deep breath", "If one works, tell your doctor", "Feeling unwell? Call 999 without delay"][at]}</Say>
    </svg>} />;
}

function SvtPillBoxes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Medicines to stop it, or keep it away" label="Medicines" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Medicines for SVT: in hospital, every day, or only when needed">
      {at === 0 && <><path d={spikes(16, 304, 90, [...every(26, 86, 30), ...every(112, 148, 12), ...every(178, 298, 30)])} stroke={INK} strokeWidth="2.5" fill="none" />
        <Lines x={160} y={140} lines={["Episodes that last a few minutes", "and do not bother you"]} /></>}
      {at === 1 && <><path d="M70 28 V180 M50 180 H90" stroke={SOFT} strokeWidth="4" strokeLinecap="round" /><rect x="76" y="34" width="30" height="44" rx="6" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M91 78 C91 120, 120 132, 150 124" stroke={INK} strokeWidth="2.5" fill="none" />
        <Box x={232} y={60} w={128} text="Such as adenosine" lit />
        <Lines x={232} y={106} lines={["Tablets, a drip into", "a vein, or a", "nasal spray"]} /></>}
      {at === 2 && <><HeartShape x={70} y={92} size={100} />
        {["Beta blockers", "Verapamil", "Flecainide"].map((label, index) => <Box key={label} x={232} y={46 + index * 34} w={128} text={label} lit={index === 0} />)}
        <W x={226} y={162} size={10}>Verapamil: 1 to 2 weeks to work</W></>}
      {at === 3 && <><Days x={24} y={66} count={7} size={16} gap={4} lit={() => true} /><W x={88} y={114} size={10.5}>Every day</W>
        <path d="M200 56 H290 V100 C290 120, 270 130, 245 130 C220 130, 200 120, 200 100 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Pill x={245} y={94} />
        <W x={245} y={150} size={10.5}>Pill in the pocket</W><W x={160} y={176} size={10.5}>Check which applies to you</W></>}
      {at === 4 && <>{["Cold hands, feet", "Dizziness", "Tiredness", "Insomnia"].map((label, index) => <Box key={label} x={84} y={40 + index * 32} w={130} text={label} />)}
        <Car x={238} y={72} fill={SOFT} /><Cross x={238} y={56} s={18} />
        <Lines x={238} y={112} lines={["Dizzy? Do not drive,", "cycle or use machines", "until it stops"]} size={10} /></>}
      <Say>{["You may not need treatment", "Long episodes may need hospital", "Medicines to prevent episodes", "Every day, or only when needed", "Side effects? Speak to your doctor"][at]}</Say>
    </svg>} />;
}

const Flame = ({ x, y }: { x: number; y: number }) =>
  <path d={`M${x} ${y - 18} C${x + 13} ${y - 6}, ${x + 12} ${y + 12}, ${x} ${y + 14} C${x - 12} ${y + 12}, ${x - 13} ${y - 6}, ${x} ${y - 18} Z`} fill={GOLD} />;
const Snow = ({ x, y }: { x: number; y: number }) =>
  <g stroke={INK} strokeWidth="3" strokeLinecap="round">{[0, 60, 120].map(a => <path key={a} d={`M${x - 15} ${y} H${x + 15}`} transform={`rotate(${a} ${x} ${y})`} />)}</g>;

function SvtCatheter(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Ablation" title="One procedure, a lasting fix" label="Catheter ablation" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A thin tube guided from the groin to the heart, where heat or cold treats a small area">
      {(at === 0 || at === 2) && <>
        <HeartShape x={222} y={74} size={110} />
        <path d="M40 196 C70 168, 150 170, 176 124 C188 104, 194 94, 202 82" stroke={INK} strokeWidth="3" fill="none" strokeDasharray={at === 2 ? undefined : "6 5"} />
        <circle cx="204" cy="80" r="7" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />
      </>}
      {at === 0 && <><Flame x={56} y={54} /><Snow x={108} y={54} /><W x={56} y={94} size={10.5}>Heat</W><W x={108} y={94} size={10.5}>Cold</W></>}
      {at === 2 && <><Clock x={60} y={52} r={22} hand={1.2} /><Lines x={60} y={96} lines={["15 minutes to", "3 or 4 hours"]} size={10} /><W x={48} y={182} size={10}>Groin</W></>}
      {at === 1 && <><Box x={88} y={64} w={120} text="Medicines" /><Box x={232} y={64} w={120} text="Ablation" lit />
        <W x={160} y={114} size={12}>Your decision</W><Lines x={160} y={142} lines={["Risks and benefits are", "discussed with you"]} /></>}
      {at === 3 && <><W x={160} y={36} size={10.5}>Most feel well the next day</W>
        <Days x={48} y={52} count={7} lit={() => true} /><Days x={48} y={86} count={7} lit={() => true} />
        <W x={160} y={140} size={10.5}>About 2 weeks</W><W x={160} y={164} size={10}>Often 1 to 2 weeks off work</W></>}
      {at === 4 && <><Car x={88} y={78} /><Lorry x={232} y={78} />
        <Lines x={88} y={112} lines={["Car or motorcycle:", "stop for 2 days"]} /><Lines x={232} y={112} lines={["Bus, coach, lorry:", "stop for 2 weeks"]} /></>}
      <Say>{["Cures the problem in most people", "Often if medicines don't help or suit", "Through the groin, guided by X-ray", "No heavy lifting for about 2 weeks", "No need to tell DVLA"][at]}</Say>
    </svg>} />;
}

function Svt999Path(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const target = [0, 0, 0, 1, 2][at];
  const ys = [44, 104, 164];
  const boxes = [at === 1 ? "999 or A&E" : "999", "Urgent GP or 111", "See a GP"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Getting help" title="When a racing heart needs 999" label="When to get help" credit="Illustration: Rehyn. If in doubt, call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Which symptoms lead to 999, to an urgent GP appointment or 111, or to a GP">
      {boxes.map((label, index) => <Box key={index} x={258} y={ys[index]} w={104} h={30} text={label} lit={index === target} size={index === 1 ? 10 : 11} />)}
      <Arrow d={`M182 ${ys[target]} H198`} head={`M192 ${ys[target] - 6} L199 ${ys[target]} L192 ${ys[target] + 6}`} />
      {at === 0 && <Lines x={96} y={28} lines={["Diagnosed with SVT, and", "an episode has lasted", "longer than usual", "", "A fast heartbeat with", "breathlessness, chest", "pain or feeling faint"]} size={10} gap={14} />}
      {at === 1 && <Lines x={96} y={32} lines={["Palpitations now that", "do not go away, or with", "chest pain, breathlessness,", "feeling faint or fainting"]} size={10} />}
      {at === 2 && <><Car x={96} y={58} fill={SOFT} /><Cross x={96} y={42} s={18} /><Lines x={96} y={100} lines={["Ask someone to drive you,", "or call 999 and ask for", "an ambulance. Bring", "your medicines."]} size={10} /></>}
      {at === 3 && <Lines x={96} y={96} lines={["Symptoms have", "now stopped"]} size={11} />}
      {at === 4 && <Lines x={96} y={150} lines={["A fast heartbeat that", "keeps coming back"]} size={10.5} />}
      <Say>{["Longer than usual? Call 999", "Won't go away? 999 or A&E", "Do not drive yourself to A&E", "Stopped now? Urgent GP or 111", "Keeps happening? See a GP"][at]}</Say>
    </svg>} />;
}

function SvtWalkPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const road = "M20 184 C80 184, 90 128, 150 128 S230 76, 300 64";
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exercise" title="Staying active, at your own pace" label="Exercise" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path that gets a little longer each time, and the symptoms that mean stop">
      {(at === 0 || at === 2) && <path d={road} stroke={LINE} strokeWidth="14" strokeLinecap="round" fill="none" />}
      {at === 0 && <><Person x={150} y={114} /><Lines x={110} y={40} lines={["Episodes can happen", "at rest or in exercise"]} /></>}
      {at === 1 && <><W x={160} y={36} size={10.5}>Not active for a while? See a GP first</W>
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}><rect x={24 + index * 40} y="60" width="34" height="70" rx="8" fill={index < 5 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={41 + index * 40} y={150} size={10.5}>{day}</W></g>)}
        <W x={160} y={176} size={10.5}>Moderate: breathing faster, can still talk</W></>}
      {at === 2 && <><circle cx="30" cy="184" r="8" fill={GOLD} /><W x={46} y={164} size={10.5}>5 or 10 minutes</W>
        <Arrow d="M220 84 C250 72, 270 68, 290 64" head="M281 58 L291 64 L283 72" /><W x={238} y={50} size={10.5}>a little further</W></>}
      {at === 3 && <><Stop x={240} y={66} r={32} /><Lines x={96} y={52} lines={["Chest pain, palpitations,", "dizziness or light-", "headedness: stop"]} />
        <Note x={160} y={118} w={268} lines={["Fast heartbeat with chest pain,", "breathlessness or feeling faint: 999"]} /></>}
      {at === 4 && <><W x={160} y={36} size={10.5}>After an ablation</W>
        <Days x={48} y={52} count={7} lit={() => true} /><Days x={48} y={86} count={7} lit={() => true} />
        <W x={160} y={146} size={10.5}>No long walks or gym for about 2 weeks</W></>}
      <Say>{["Put off by palpitations? Get checked", "Aim for 150 minutes a week", "Start with 5 or 10 minutes' walking", "Not easing with rest? Urgent advice", "No strenuous exercise for 2 weeks"][at]}</Say>
    </svg>} />;
}

function SvtCups(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Caffeine and alcohol" title="What's really in your cup" label="Caffeine and alcohol" credit="Illustration: Rehyn. Amounts as given by the BHF and NHS."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Cups of coffee and tea, an energy drink beside an espresso, and alcohol over a week">
      {at === 0 && <><Cup x={84} y={84} /><HeartShape x={160} y={86} size={52} /><Glass x={236} y={84} />
        <W x={84} y={128} size={10.5}>Caffeine</W><W x={236} y={128} size={10.5}>Alcohol</W>
        <W x={160} y={160} size={10.5}>Cutting down can lower the chances</W></>}
      {at === 1 && <><W x={160} y={36} size={12}>Up to 400mg a day</W>
        {[0, 1, 2, 3, 4].map(index => <Cup key={index} x={48 + index * 56} y={84} fill={index < 4 ? SOFT : WHITE} />)}
        <W x={160} y={136} size={10.5}>About 4 to 5 cups of tea or coffee</W></>}
      {at === 2 && <><rect x="98" y="58" width="28" height="58" rx="5" fill={INK} /><path d="M98 70 H126" stroke={WHITE} strokeWidth="2" />
        <Cup x={210} y={102} /><rect x="86" y="28" width="52" height="20" rx="6" fill={GOLD} /><rect x="184" y="28" width="52" height="20" rx="6" fill={GOLD} />
        <W x={112} y={42} size={10.5}>80mg</W><W x={210} y={42} size={10.5}>80mg</W>
        <W x={112} y={140} size={10.5}>250ml energy drink</W><W x={210} y={140} size={10.5}>60ml espresso</W>
        <W x={160} y={170} size={10}>Supplements: check the label</W></>}
      {at === 3 && <><Lines x={160} y={34} lines={["14 units: 6 pints of beer, or", "6 medium glasses of wine"]} />
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}><rect x={22 + index * 40} y="74" width="34" height="44" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" />
          {(index === 1 || index === 4 || index === 6) && <Glass x={39 + index * 40} y={96} />}<W x={39 + index * 40} y={136} size={10.5}>{day}</W></g>)}
        <W x={160} y={164} size={10.5}>Several alcohol-free days</W></>}
      <Say>{["Known triggers: caffeine and alcohol", "Generally safe for most adults", "Same caffeine: about 80mg each", "At most 14 units, over 3 days or more"][at]}</Say>
    </svg>} />;
}

function SvtRoadDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Driving and work" title="Behind the wheel and at work" label="Driving and work" credit="Illustration: Rehyn. DVLA's own rules; check yours with DVLA."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A car, a lorry and a desk at work, with when to tell DVLA and support at work">
      {at === 0 && <><Car x={84} y={58} /><Lines x={84} y={90} lines={["Sudden dizziness", "or fainting in the", "last 12 months?", "Tell DVLA"]} />
        <Note x={236} y={40} w={136} lines={["Up to a £1,000", "fine for not", "telling DVLA about", "a condition that", "affects driving"]} lit={false} size={10} /></>}
      {at === 1 && <><Lorry x={160} y={78} /><Lines x={160} y={112} lines={["Always tell DVLA if you", "have tachycardia (form VOCH1)"]} /></>}
      {at === 2 && <><Car x={88} y={70} /><Lorry x={232} y={70} />
        <Lines x={88} y={104} lines={["Car or motorcycle:", "stop for 2 days"]} /><Lines x={232} y={104} lines={["Bus, coach, lorry:", "stop for 2 weeks"]} />
        <W x={160} y={166} size={10}>Driving affected? Tell your insurer</W></>}
      {at === 3 && <><Person x={110} y={100} scale={1.2} /><path d="M60 118 H240 M76 118 V140 M224 118 V140" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <rect x="160" y="96" width="40" height="22" rx="3" fill={SOFT} /><Bubble x={236} y={46} text="Adjustments" width={104} />
        <Lines x={160} y={162} lines={["It can help them support you,", "such as time for appointments"]} size={10} gap={14} /></>}
      {at === 4 && <><rect x="106" y="34" width="108" height="72" rx="10" fill={INK} /><Lines x={160} y={64} lines={["Access to", "Work"]} size={12} fill={WHITE} />
        <Lines x={160} y={130} lines={["A grant for equipment or", "travel to work; it is not", "paid back"]} /></>}
      <Say>{["Car or motorcycle licence", "Bus, coach or lorry: always tell DVLA", "After ablation: no need to tell DVLA", "Telling your employer is your choice", "Access to Work can help"][at]}</Say>
    </svg>} />;
}

const Face = ({ x, y, calm = false }: { x: number; y: number; calm?: boolean }) =>
  <g><circle cx={x} cy={y} r="30" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx={x - 10} cy={y - 6} r="3" fill={INK} /><circle cx={x + 10} cy={y - 6} r="3" fill={INK} />
    <path d={calm ? `M${x - 11} ${y + 9} Q${x} ${y + 17} ${x + 11} ${y + 9}` : `M${x - 12} ${y + 13} q4 -5 8 0 t8 0 t8 0`} stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" /></g>;

function SvtWorryTools(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Worry" title="Living with the next-episode worry" label="Worry" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A racing heart and a worried face feeding each other, and the things that can help">
      {at === 0 && <><HeartShape x={84} y={92} size={84} /><Face x={236} y={90} />
        <Arrow d="M124 62 C150 40, 180 40, 200 60" head="M191 58 L201 61 L199 51" /><Arrow d="M200 124 C176 144, 146 144, 122 124" head="M131 126 L121 123 L124 133" />
        <W x={160} y={176} size={10.5}>Palpitations can trigger anxiety, too</W></>}
      {at === 1 && <><Note x={160} y={22} w={230} lines={["SVT does not shorten", "life expectancy"]} />
        <Note x={160} y={92} w={230} lines={["Heart attack or panic attack?", "If unsure, call 999"]} lit={false} />
        <W x={160} y={170} size={10.5}>Work on it with your doctor</W></>}
      {at === 2 && <>{[{ x: 60, t: "Calm breathing" }, { x: 160, t: "A diary" }, { x: 260, t: "20 minutes" }].map((tool, index) => <g key={tool.t}>
        <rect x={tool.x - 44} y="30" width="88" height="70" rx="12" fill={WHITE} stroke={INK} strokeWidth="2" />
        {index === 0 && <circle cx={tool.x} cy="65" r="20" fill={SOFT} className={still ? undefined : "lib-v2-breathe is-slow"} />}
        {index === 1 && <><rect x={tool.x - 16} y="46" width="32" height="40" rx="3" fill={TINT} stroke={INK} strokeWidth="2" /><path d={`M${tool.x - 9} 58 H${tool.x + 9} M${tool.x - 9} 66 H${tool.x + 9} M${tool.x - 9} 74 H${tool.x + 3}`} stroke={SOFT} strokeWidth="2" /></>}
        {index === 2 && <Clock x={tool.x} y={65} r={20} hand={1.6} />}
        <W x={tool.x} y={118} size={10.5}>{tool.t}</W></g>)}
        <Lines x={160} y={150} lines={["Fitness watches and health apps", "can make anxiety worse for some"]} size={10} /></>}
      {at === 3 && <><Phone x={70} y={84} text="" lit={false} /><Lines x={196} y={58} lines={["Heart Helpline", "0808 802 1234", "weekdays 9am to 5pm"]} />
        <Box x={196} y={130} w={190} text="NHS talking therapies" lit /></>}
      <Say>{["Worry and palpitations feed each other", "Learn what's normal for you", "Breathing, a diary, set worry time", "Refer yourself to talking therapies"][at]}</Say>
    </svg>} />;
}

// ==== Slow heart rate and heart block =======================================================================

function BradyDial(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const cx = 160, cy = 132, r = 88;
  const angle = (bpm: number) => Math.PI * (1 - (bpm - 40) / 80);
  const point = (bpm: number, radius: number) => [cx + radius * Math.cos(angle(bpm)), cy - radius * Math.sin(angle(bpm))];
  const arc = (from: number, to: number) => { const [x0, y0] = point(from, r); const [x1, y1] = point(to, r); return `M${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1}`; };
  const [nx, ny] = point([50, 52, 54, 50][at], r - 26);
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When slow is fine, and when it isn't" label="A slow heart rate" credit="Illustration: Rehyn. A picture of the idea, not a reading."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A heart-rate dial from 40 to 120 beats a minute, with the usual range of 60 to 100">
      <path d={arc(40, 120)} stroke={LINE} strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d={arc(60, 100)} stroke={INK} strokeWidth="14" fill="none" />
      <path d={arc(40, 60)} stroke={GOLD} strokeWidth="14" fill="none" opacity={at === 0 ? 1 : 0.45} />
      {[40, 60, 100, 120].map(bpm => { const [x, y] = point(bpm, r + 20); return <W key={bpm} x={x} y={y + 4} size={10.5}>{bpm}</W>; })}
      <path d={`M${cx} ${cy} L${nx} ${ny}`} stroke={TEXT} strokeWidth="4" strokeLinecap="round" /><circle cx={cx} cy={cy} r="6" fill={TEXT} />
      <W x={160} y={100} size={10.5}>Usual: 60 to 100</W><W x={160} y={154} size={10}>beats a minute</W>
      {at === 1 && <><Moon x={36} y={40} r={13} /><Person x={286} y={62} scale={0.8} /></>}
      <W x={160} y={180} size={10.5}>{["Under 60 bpm: bradycardia", "It varies through the day", "Sinus bradycardia: regular, but slow", "Fit, with no symptoms? Try not to worry"][at]}</W>
      <Say>{["Under 60 a minute is a low heart rate", "It can dip in sleep, or if very fit", "Age or a condition can slow it", "New dizziness or fainting? See a GP"][at]}</Say>
    </svg>} />;
}

function BradySignalRows(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const xs = [50, 98, 146, 194, 242, 290];
  const dropped = [2, 5];
  const below = at === 3 ? [70, 180, 290] : xs.filter((_, index) => at !== 2 || !dropped.includes(index)).map(x => x + (at === 1 ? 16 : 0));
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Heart block" title="Slowed, dropped or stopped signals" label="Types of heart block" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Signals passing from the top chambers to the bottom chambers: on time, delayed, sometimes dropped, or blocked">
      {at < 4 ? <>
        <W x={20} y={34} size={10.5} anchor="start">Top chambers</W><W x={20} y={178} size={10.5} anchor="start">Bottom chambers</W>
        {xs.map((x, index) => <g key={x}>
          <circle cx={x} cy="52" r="7" fill={INK} />
          {at === 3 ? <path d={`M${x} 60 V86`} stroke={SOFT} strokeWidth="3" />
            : at === 2 && dropped.includes(index) ? <><path d={`M${x} 60 V84`} stroke={SOFT} strokeWidth="3" /><Cross x={x} y={98} s={8} /></>
            : <path d={`M${x} 60 L${x + (at === 1 ? 16 : 0)} 136`} stroke={INK} strokeWidth="3" strokeDasharray={at === 1 ? "5 5" : undefined} />}
        </g>)}
        {at === 3 && <rect x="20" y="92" width="290" height="12" rx="6" fill={GOLD} />}
        {below.map(x => <circle key={x} cx={x} cy="146" r="7" fill={SOFT} stroke={INK} strokeWidth="2" />)}
      </> : <>
        <Note x={160} y={30} w={270} lines={["Bundle branch block: slower", "signals in the bottom chambers"]} />
        <Note x={160} y={104} w={270} lines={["Sick sinus: the beat can be too fast,", "too slow, or switch between them"]} lit={false} />
      </>}
      <Say>{["Signals pass from top to bottom", "First degree: delayed, but arrives", "Second degree: some don't get through", "Complete: usually needs a pacemaker", "Other kinds: bundle branch, sick sinus"][at]}</Say>
    </svg>} />;
}

function BradyCauseTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tiles = [{ x: 70, y: 42, t: "Heart conditions" }, { x: 250, y: 42, t: "Age and fitness" }, { x: 70, y: 146, t: "Medicines" }, { x: 250, y: 146, t: "No clear cause" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Wiring, age, medicines, or nothing at all" label="Causes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A heart's wiring, with four kinds of cause around it">
      {tiles.map(tile => <path key={tile.t} d={`M160 96 L${tile.x} ${tile.y}`} stroke={LINE} strokeWidth="3" />)}
      <HeartShape x={160} y={98} size={84} fill={at === 0 ? TINT : WHITE} />
      <path d="M140 80 C148 90, 156 94, 160 98 V122" stroke={at === 0 ? GOLD : SOFT} strokeWidth="3" fill="none" strokeLinecap="round" />
      {tiles.map((tile, index) => <Box key={tile.t} x={tile.x} y={tile.y} w={118} h={34} text={tile.t} lit={at === index + 1} />)}
      <W x={160} y={186} size={10.5}>{["A fault in the electrical system", "Coronary heart disease, a heart attack", "Naturally low, or a very fit athlete", "Such as beta blockers", "Even in a normal heart"][at]}</W>
      <Say>{["A fault in the heart's wiring", "Most often a heart condition", "Age, or simply being very fit", "Some medicines can slow it", "Sometimes there's no obvious cause"][at]}</Say>
    </svg>} />;
}

function BradyBodySigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Dizzy, faint, tired, or nothing" label="Symptoms" credit="Illustration: Rehyn. If in doubt, get help."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with places symptoms can be felt, and when to get help">
      {at < 4 ? <>
        <circle cx="80" cy="44" r="18" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M50 196 C50 124, 62 76, 80 76 C98 76, 110 124, 110 196 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
        {at === 0 && <><circle cx="80" cy="44" r="25" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} /><circle cx="90" cy="110" r="10" fill="none" stroke={GOLD} strokeWidth="3" /></>}
      </> : <>
        <path d="M30 156 H290" stroke={LINE} strokeWidth="4" />
        <circle cx="66" cy="142" r="12" fill={INK} /><rect x="80" y="132" width="96" height="20" rx="10" fill={INK} />
        <rect x="200" y="116" width="56" height="38" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M172 140 L232 112" stroke={INK} strokeWidth="14" strokeLinecap="round" />
        <Lines x={160} y={48} lines={["If you cannot lie down, sit with", "your head between your knees"]} />
      </>}
      {at === 0 && ["Dizzy or faint", "Chest pain", "Tired", "Short of breath"].map((label, index) => <Box key={label} x={226} y={40 + index * 34} w={140} text={label} />)}
      {at === 1 && <><path d="M166 70 H300" stroke={LINE} strokeWidth="10" strokeLinecap="round" /><path d="M196 70 H270" stroke={INK} strokeWidth="10" strokeLinecap="round" />
        <W x={166} y={96} size={10.5} anchor="start">Mild</W><W x={300} y={96} size={10.5} anchor="end">Severe</W>
        <Lines x={233} y={134} lines={["Or none: some find out", "during tests for", "something else"]} size={10} /></>}
      {at === 2 && <><Box x={226} y={36} w={110} h={30} text="NHS 111" lit size={11} />
        <Lines x={226} y={80} lines={["Dizzy all the time, or", "it keeps coming back;", "fainted; or more", "breathless with normal", "activities or lying down"]} size={10} gap={14} /></>}
      {at === 3 && <><Phone x={226} y={52} />
        <Lines x={226} y={108} lines={["Heart block and chest", "pain, severe trouble", "breathing, or sweaty,", "sick or lightheaded"]} size={10} gap={14} /></>}
      <Say>{["Dizzy, faint, tired or breathless", "Mild, severe, or nothing at all", "Get checked: you're not wasting time", "Call 999; do not drive to A&E", "About to faint? Lie down, legs raised"][at]}</Say>
    </svg>} />;
}

function BradyEcgPatches(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tests" title="The tests that catch a slow beat" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An ECG strip, a person lying with ten patches, a belt recorder, a recorder under the skin and a results letter">
      {at === 0 && <><rect x="20" y="34" width="280" height="76" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" />
        {every(40, 280, 20).map(x => <path key={x} d={`M${x} 36 V108`} stroke={LINE} strokeWidth="1" />)}
        <path d={spikes(20, 300, 86, [40, 120, 200, 280], 30)} stroke={INK} strokeWidth="2.5" fill="none" />
        <Lines x={160} y={142} lines={["It shows the type of heart block", "Often found during other tests"]} /></>}
      {at === 1 && <><path d="M24 132 H254" stroke={SOFT} strokeWidth="5" strokeLinecap="round" />
        <circle cx="50" cy="112" r="13" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="66" y="100" width="168" height="26" rx="13" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[[96, 108], [110, 108], [124, 108], [96, 119], [110, 119], [124, 119], [80, 104], [80, 122], [214, 107], [214, 119]].map(([x, y], index) => <circle key={index} cx={x} cy={y} r="3.5" fill={INK} />)}
        <path d="M124 108 C160 80, 230 70, 262 70" stroke={INK} strokeWidth="1.5" fill="none" /><rect x="262" y="54" width="40" height="32" rx="6" fill={INK} />
        <W x={150} y={70} size={10.5}>Ten small sticky patches</W><W x={160} y={164} size={10.5}>Lie still: moving can affect it</W></>}
      {at === 2 && <><Person x={100} y={120} scale={1.6} /><path d="M72 132 H128" stroke={GOLD} strokeWidth="4" /><rect x="112" y="124" width="18" height="16" rx="3" fill={TEXT} />
        <Lines x={230} y={60} lines={["Usually 24 to 48", "hours, up to 7 days", "", "No bath or shower"]} /></>}
      {at === 3 && <><path d="M30 92 Q160 52 290 92" stroke={SOFT} strokeWidth="4" fill="none" /><rect x="146" y="76" width="28" height="12" rx="4" fill={INK} />
        <W x={160} y={50} size={10.5}>Under the skin of the chest</W>
        {[0, 1, 2].map(index => <g key={index}><rect x={94 + index * 46} y="112" width="40" height="40" rx="8" fill={INK} /><W x={114 + index * 46} y={137} size={12} fill={WHITE}>{index + 1}</W></g>)}
        <W x={160} y={176} size={10.5}>Up to three years</W></>}
      {at === 4 && <><g transform="translate(0 -4)">{["Echo", "MRI", "Exercise", "Blood"].map((label, index) => <Box key={label} x={48 + index * 75} y={34} w={68} text={label} size={10} />)}</g>
        <rect x="110" y="66" width="100" height="62" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M110 70 L160 102 L210 70" stroke={INK} strokeWidth="2.5" fill="none" />
        <Lines x={160} y={160} lines={["Not heard after a few weeks? Contact", "the doctor who referred you"]} size={10} /></>}
      <Say>{["An ECG is the main test", "Ten patches, a few painless minutes", "A belt recorder: 24 hours to 7 days", "A loop recorder: up to three years", "Results: same day, or in a few weeks"][at]}</Say>
    </svg>} />;
}

/** Shoulders and chest from the front, with a pacemaker below the left collarbone (on the viewer's right). */
const Torso = ({ device = true, cut = false }: { device?: boolean; cut?: boolean }) => <g>
  <path d="M40 216 C44 156, 70 124, 118 114 C132 110, 138 98, 138 84 H182 C182 98, 188 110, 202 114 C250 124, 276 156, 280 216" fill={WHITE} stroke={INK} strokeWidth="3" />
  <path d="M96 128 C120 124, 140 128, 156 132 M164 132 C180 128, 200 124, 224 128" stroke={SOFT} strokeWidth="3" fill="none" strokeLinecap="round" />
  <HeartShape x={176} y={172} size={54} fill={TINT} width={3} />
  {device && <><path d="M212 152 C202 160, 192 164, 184 170" stroke={INK} strokeWidth="2.5" fill="none" /><rect x="204" y="136" width="30" height="22" rx="7" fill={INK} /></>}
  {cut && <path d="M200 132 L238 140" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />}
</g>;

function BradyBackup(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pacemakers" title="A back-up for a slowing heart" label="Pacemakers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A small pacemaker under the skin of the chest, with a lead to the heart">
      {at === 0 && <><rect x="50" y="52" width="80" height="64" rx="18" fill={INK} /><rect x="176" y="40" width="110" height="84" rx="6" fill="none" stroke={SOFT} strokeWidth="3" strokeDasharray="7 5" />
        <W x={90} y={142} size={10.5}>About 5 by 4cm</W><W x={231} y={142} size={10.5}>A matchbox</W>
        <W x={160} y={174} size={10.5}>Weighs about 20 to 50 grams</W></>}
      {at === 1 && <><path d={spikes(16, 304, 96, [30, 120, 166, 212, 258], 26)} stroke={INK} strokeWidth="2.5" fill="none" />
        <W x={74} y={52} size={10.5}>Too slow</W><W x={212} y={52} size={10.5}>Kept steady</W><path d="M100 60 V112" stroke={GOLD} strokeWidth="2" strokeDasharray="4 4" />
        <Lines x={160} y={146} lines={["Most work only when needed", "It does not give an electric shock"]} /></>}
      {at === 2 && <><Torso /><Lines x={160} y={34} lines={["With severe symptoms, it keeps", "the heartbeat regular"]} /></>}
      {at === 3 && <><Box x={88} y={60} w={140} h={32} text="For a short time" lit /><Box x={236} y={60} w={110} h={32} text="For good" lit />
        <Lines x={160} y={116} lines={["Planned, or as an", "emergency treatment"]} /><W x={160} y={164} size={10.5}>It depends on the cause</W></>}
      {at === 4 && <>{[1, 2, 3, 0].map((leads, index) => { const x = 46 + index * 76; return <g key={index}>
        {leads > 0 ? <><rect x={x - 14} y="40" width="28" height="22" rx="7" fill={INK} />
          {Array.from({ length: leads }, (_, lead) => <path key={lead} d={`M${x - 6 + lead * 6} 62 C${x - 10 + lead * 8} 80, ${x + 6 - lead * 4} 92, ${x - 4 + lead * 6} 110`} stroke={INK} strokeWidth="2.5" fill="none" />)}</>
          : <rect x={x - 7} y="60" width="14" height="32" rx="7" fill={INK} />}
        <W x={x} y={134} size={10}>{["One lead", "Two leads", "Three leads", "No leads"][index]}</W></g>; })}
        <W x={160} y={168} size={10.5}>Leadless ones don't suit everyone</W></>}
      <Say>{["Smaller than a matchbox", "It steps in for the sinus node", "For a slow rate or heart block", "For a short time, or for good", "One, two or three leads, or none"][at]}</Say>
    </svg>} />;
}

function BradyFitting(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="The operation" title="An hour, a small cut, then home" label="Having a pacemaker fitted" credit="Illustration: Rehyn. If in doubt, get help."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Checks before the day, an hour-long operation, a small cut below the collarbone, and going home">
      {at === 0 && <><rect x="80" y="26" width="160" height="148" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="132" y="18" width="56" height="16" rx="5" fill={INK} />
        {["Blood tests", "Chest X-ray or echo", "Your medicines"].map((label, index) => <g key={label}><rect x="92" y={56 + index * 36} width="16" height="16" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" />
          <path d={`M95 ${64 + index * 36} l4 4 l7 -9`} stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" /><W x={116} y={68 + index * 36} size={10.5} anchor="start">{label}</W></g>)}</>}
      {at === 1 && <><Clock x={90} y={92} r={46} hand={0} /><circle cx="90" cy="92" r="54" fill="none" stroke={GOLD} strokeWidth="4" />
        <Lines x={226} y={70} lines={["About an hour", "Awake, chest numbed", "Maybe a sedative"]} gap={24} /></>}
      {at === 2 && <><Torso cut /><W x={262} y={98} size={10.5}>5 to 6cm</W><Lines x={92} y={40} lines={["Or leadless, for some:", "no wires and no cut"]} size={10} /></>}
      {at === 3 && <><rect x="40" y="110" width="110" height="18" rx="5" fill={INK} /><rect x="40" y="88" width="10" height="40" fill={INK} /><ellipse cx="70" cy="104" rx="16" ry="6" fill={WHITE} stroke={INK} strokeWidth="2" />
        <Moon x={110} y={62} r={14} />
        <path d="M200 128 V96 L240 66 L280 96 V128 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><rect x="232" y="104" width="16" height="24" fill={SOFT} />
        <W x={95} y={154} size={10.5}>Often overnight</W><W x={240} y={154} size={10.5}>Or the same day</W>
        <W x={160} y={180} size={10}>Tired and sore for the first few days</W></>}
      {at === 4 && <><Note x={160} y={18} w={280} lines={["Wound redder, swollen or leaking,", "or a high temperature: clinic or 111"]} lit={false} size={10} />
        <Note x={160} y={82} w={280} lines={["Severe breathing difficulty, a tight", "or heavy chest, or spreading pain: 999"]} size={10} />
        <W x={160} y={162} size={10.5}>Ask someone to drive you, or call 999</W></>}
      <Say>{["An assessment at the hospital first", "Common, and it should not hurt", "A small cut on the left of the chest", "Overnight, or home the same day", "Do not drive to A&E"][at]}</Say>
    </svg>} />;
}

function BradyPillSlow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="The tablets that slow the beat" label="Medicines" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Tablets that can slow the heartbeat, and talking to a doctor before any change">
      {at === 0 && <><Pill x={56} y={98} /><Arrow d="M84 98 H108" head="M101 92 L108 98 L101 104" />
        <path d={spikes(118, 304, 108, [140, 206, 272], 26)} stroke={INK} strokeWidth="2.5" fill="none" /><W x={212} y={60} size={10.5}>Slower</W>
        <W x={160} y={160} size={10.5}>They can help control the heart rate</W></>}
      {at === 1 && <><Pill x={80} y={64} /><Lines x={80} y={104} lines={["Used for angina,", "blood pressure", "and AF"]} size={10} />
        {["Bisoprolol", "Atenolol", "Propranolol"].map((label, index) => <Box key={label} x={226} y={44 + index * 34} w={120} text={label} lit={index === 0} />)}
        <W x={160} y={172} size={10.5}>May not suit people with heart block</W></>}
      {at === 2 && <><Pill x={84} y={78} rotate={-20} /><W x={84} y={116} size={11}>Digoxin</W>
        <rect x="214" y="34" width="24" height="84" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="216" y="76" width="20" height="40" rx="10" fill={SOFT} />
        <W x={226} y={140} size={10.5}>Regular blood tests</W><W x={160} y={170} size={10}>Kidneys, potassium, magnesium, calcium</W></>}
      {at === 3 && <><Person x={64} y={150} scale={1.3} /><Person x={256} y={150} scale={1.3} fill={SOFT} /><Bubble x={160} y={52} text="Talk to your doctor first" width={176} />
        <Lines x={160} y={116} lines={["Stopping suddenly", "can make it worse"]} size={10} /></>}
      {at === 4 && <><Note x={160} y={24} w={270} lines={["Dizzy on a beta blocker? Do not drive", "until the dizziness stops"]} lit={false} size={10} />
        <Note x={160} y={90} w={270} lines={["On digoxin, with a fast heart rate,", "breathless or dizzy: 999 or A&E"]} size={10} /></>}
      <Say>{["Some medicines slow the heart", "Beta blockers slow the heartbeat", "Digoxin: regular blood tests", "Changes are made with your doctor", "Side effects to know"][at]}</Say>
    </svg>} />;
}

const Device = ({ x, y }: { x: number; y: number }) => <rect x={x - 13} y={y - 10} width="26" height="20" rx="6" fill={INK} />;

function BradyRings(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Everyday life" title="Phones, hobs and airport gates" label="Living with a pacemaker" credit="Illustration: Rehyn. Distances from the BHF; not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pacemaker with safe distances to household items, phones and an induction hob, and an ID card">
      {at === 0 && <><circle cx="90" cy="104" r="52" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" /><Device x={90} y={104} /><W x={90} y={42} size={10.5}>15cm</W>
        {["Microwave", "Air fryer", "Hairdryer"].map((label, index) => <Box key={label} x={236} y={66 + index * 36} w={112} text={label} />)}
        <W x={160} y={180} size={10.5}>Most should not affect it</W></>}
      {at === 1 && <><path d="M70 196 C74 150, 104 130, 160 130 C216 130, 246 150, 250 196" fill={WHITE} stroke={INK} strokeWidth="3" /><Device x={204} y={156} />
        <Phone x={40} y={74} text="" lit={false} /><W x={40} y={124} size={10}>Other side</W>
        <Lines x={250} y={40} lines={["Watch charger:", "30cm away"]} size={10} /></>}
      {at === 2 && <><rect x="26" y="70" width="104" height="60" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="56" cy="100" r="14" fill="none" stroke={SOFT} strokeWidth="3" /><circle cx="100" cy="100" r="14" fill="none" stroke={SOFT} strokeWidth="3" />
        <Device x={270} y={100} /><path d="M140 100 H250 M140 92 V108 M250 92 V108" stroke={GOLD} strokeWidth="3" /><W x={195} y={86} size={10.5}>At least 60cm</W>
        <W x={160} y={166} size={10}>Avoid TENS machines and body fat scales</W></>}
      {at === 3 && <><rect x="26" y="40" width="124" height="76" rx="10" fill={INK} /><Lines x={88} y={72} lines={["Pacemaker", "ID card"]} size={12} fill={WHITE} />
        <path d="M200 160 V62 H280 V160" stroke={SOFT} strokeWidth="10" fill="none" strokeLinejoin="round" /><Box x={240} y={110} w={92} text="Hand search" size={10} />
        <Lines x={88} y={142} lines={["Show it before any", "test or treatment"]} size={10} /></>}
      {at === 4 && <><Person x={70} y={150} scale={1.3} /><Person x={250} y={150} scale={1.3} fill={SOFT} /><Bubble x={160} y={62} text="Talk to your GP" width={130} />
        <W x={160} y={182} size={10}>Or refer yourself to talking therapies</W></>}
      <Say>{["Keep appliances 15cm away", "Phone on the opposite side, 15cm away", "Induction hob: keep 60cm away", "Show your card; ask for a hand search", "Anxious a lot? Talk to your GP"][at]}</Say>
    </svg>} />;
}

function BradyCarWeeks(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Driving" title="A week off the road, then back" label="Driving" credit="Illustration: Rehyn. DVLA's own rules; check yours with DVLA."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Telling DVLA, and a week off driving a car or six weeks off driving a lorry">
      {at === 0 && <><rect x="90" y="40" width="140" height="84" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M90 44 L160 92 L230 44" stroke={INK} strokeWidth="2.5" fill="none" />
        <W x={160} y={116} size={12}>DVLA</W><W x={160} y={156} size={10.5}>No need after a battery change</W></>}
      {at === 1 && <><W x={197} y={30} size={10}>Weeks off driving</W>
        <Car x={46} y={74} /><Days x={96} y={44} count={6} size={28} gap={6} lit={index => index < 1} />
        <Lorry x={46} y={144} /><Days x={96} y={114} count={6} size={28} gap={6} lit={() => true} />
        <W x={160} y={176} size={10.5}>Bus or lorry: 6 weeks, and tell DVLA</W></>}
      {at === 2 && <><Stop x={84} y={78} r={34} /><Lines x={222} y={60} lines={["Dizzy or fainting?", "Stop driving until", "it's under control"]} />
        <W x={160} y={156} size={10.5}>Regular device checks are needed</W></>}
      {at === 3 && <><Note x={92} y={30} w={140} lines={["Tell your", "insurer"]} /><Note x={240} y={30} w={132} lines={["Car: online or H1", "Lorry: VOCH1"]} lit={false} size={10} />
        <Lines x={160} y={120} lines={["Up to a £1,000 fine for not telling", "DVLA about a condition or treatment"]} size={10} /></>}
      <Say>{["Tell DVLA about a new pacemaker", "At least a week for a car licence", "Stop until symptoms are controlled", "Tell your insurer, too"][at]}</Say>
    </svg>} />;
}

function BradyArmLevel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const figure = at === 0 || at === 1 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Getting active" title="Arm down, then back to the gym" label="Getting active" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person keeping the arm on the pacemaker side below the shoulder, then returning to activities">
      {figure && <>
        <circle cx="100" cy="46" r="16" fill={INK} />
        <path d="M80 196 V98 C80 80, 88 72, 100 72 C112 72, 120 80, 120 98 V196 Z" fill={INK} />
        <path d="M82 84 L60 140" stroke={INK} strokeWidth="10" strokeLinecap="round" />
        <path d="M118 84 L138 140" stroke={INK} strokeWidth="10" strokeLinecap="round" />
      </>}
      {at === 0 && <><Cup x={226} y={56} /><W x={226} y={32} size={10.5}>First few days</W><Lines x={226} y={100} lines={["Drinks and snacks,", "walks round the house,", "washing up"]} /></>}
      {at === 1 && <><path d="M60 84 H300" stroke={GOLD} strokeWidth="2.5" strokeDasharray="6 5" /><path d="M118 84 L148 34" stroke={SOFT} strokeWidth="10" strokeLinecap="round" /><Cross x={136} y={56} s={11} />
        <W x={230} y={74} size={10.5}>Shoulder height</W><W x={226} y={120} size={11}>For 4 to 6 weeks</W><Lines x={226} y={148} lines={["Keep it moving", "gently, low down"]} size={10} /></>}
      {at === 2 && <><rect x="58" y="74" width="64" height="8" rx="3" fill={INK} /><rect x="50" y="62" width="12" height="32" rx="3" fill={INK} /><rect x="118" y="62" width="12" height="32" rx="3" fill={INK} /><Cross x={90} y={78} s={20} />
        <circle cx="230" cy="78" r="24" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M222 70 L238 70 L242 84 L230 92 L218 84 Z" fill={INK} /><Cross x={230} y={78} s={20} />
        <W x={90} y={130} size={10.5}>Heavy lifting</W><W x={230} y={130} size={10.5}>Contact sports</W>
        <W x={160} y={164} size={10}>For 4 to 6 weeks: no vigorous exercise</W></>}
      {at === 3 && <>{["Gym", "Golf", "Yoga", "Swimming"].map((label, index) => <Box key={label} x={index % 2 ? 230 : 90} y={50 + Math.floor(index / 2) * 42} w={116} h={30} text={label} lit />)}
        <Lines x={160} y={146} lines={["Usually after six weeks or", "your first clinic check"]} /></>}
      {at === 4 && <><Bubble x={222} y={52} text="I can still talk" width={124} /><Lines x={226} y={104} lines={["Warm, and breathing a", "little more heavily"]} size={10} />
        <Lines x={226} y={148} lines={["Dizzy, palpitations or", "chest pain? See a doctor"]} size={10} /></>}
      <Say>{["Rest, then light jobs at home", "Keep that arm below your shoulder", "No heavy lifting or contact sports", "Back to what you enjoy, after 6 weeks", "The talk test sets the right pace"][at]}</Say>
    </svg>} />;
}

function BradyCheckLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Checks" title="Check-ups, and a battery with warning" label="Pacemaker checks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline of pacemaker checks, a monitor at home, a battery with an early alert, and a box change">
      {at === 0 && <><path d="M24 86 H300" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
        {[{ x: 30, t: "Fitted" }, { x: 98, t: "6 weeks" }, { x: 178, t: "3 to 6 months" }, { x: 248, t: "Yearly" }, { x: 290, t: "" }].map(dot => <g key={dot.x}><circle cx={dot.x} cy="86" r="8" fill={dot.x === 30 ? SOFT : INK} />{dot.t && <W x={dot.x} y={112} size={10}>{dot.t}</W>}</g>)}
        <W x={160} y={46} size={10.5}>Go, even if you feel well</W><W x={160} y={150} size={10.5}>The team checks it is working</W></>}
      {at === 1 && <><path d="M40 140 V96 L84 64 L128 96 V140 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><rect x="70" y="112" width="28" height="18" rx="4" fill={INK} />
        <path d="M144 96 q8 -8 0 -16 M156 104 q14 -16 0 -32 M168 112 q20 -24 0 -48" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />
        <rect x="200" y="64" width="90" height="76" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M245 82 V122 M225 102 H265" stroke={INK} strokeWidth="6" />
        <W x={160} y={170} size={10.5}>Keep the monitor switched on</W></>}
      {at === 2 && <><rect x="70" y="52" width="160" height="56" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="230" y="68" width="10" height="24" rx="3" fill={INK} />
        {[0, 1, 2, 3].map(index => <rect key={index} x={78 + index * 37} y="60" width="31" height="40" rx="5" fill={index === 0 ? GOLD : LINE} className={index === 0 && !still ? "lib-why-pulse" : undefined} />)}
        <W x={150} y={134} size={10.5}>NHS: usually 6 to 7 years</W><W x={150} y={152} size={10.5}>BHF booklet: 6 to 10 years</W>
        <W x={160} y={178} size={10}>It will not run out without warning</W></>}
      {at === 3 && <><rect x="58" y="52" width="60" height="40" rx="10" fill={SOFT} /><rect x="202" y="52" width="60" height="40" rx="10" fill={INK} />
        <Arrow d="M130 72 H190" head="M182 65 L190 72 L182 79" />
        <path d="M88 92 C84 110, 96 124, 92 144 M232 92 C228 110, 240 124, 236 144" stroke={INK} strokeWidth="2.5" fill="none" />
        <W x={160} y={130} size={10.5}>Leads stay in place</W><W x={160} y={170} size={10.5}>Most go home the same day</W></>}
      {at === 4 && <><Person x={70} y={150} scale={1.3} /><Bubble x={190} y={60} text="New dizziness?" width={120} />
        <Lines x={200} y={124} lines={["Not sure of the date?", "Call your cardiology", "department"]} size={10} /></>}
      <Say>{["6 weeks, 3 to 6 months, then yearly", "Remote checks from home", "An alert with 3 to 6 months left", "A box change: the leads stay", "New symptoms? Ask your GP or clinic"][at]}</Say>
    </svg>} />;
}

// ==== Ectopic beats =========================================================================================

/** A heart trace from x0 to x1 at height y, with a beat of height h at each [x, h]. */
const beatTrace = (x0: number, x1: number, y: number, beats: [number, number][]) => {
  let d = `M${x0} ${y}`;
  for (const [x, h] of beats) d += ` H${x} l3 -${h} l4 ${h + 10} l3 -10`;
  return `${d} H${x1}`;
};

function EbEarlyBeat(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const usual: [number, number][] = [[26, 26], [70, 26], [114, 26], [144, 20], [206, 40], [250, 26], [294, 26]];
  const pairs: [number, number][] = [[26, 26], [48, 20], [96, 26], [118, 20], [166, 26], [188, 20], [236, 26], [258, 20]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="An early beat, then a catch-up" label="Ectopic beats" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A steady heart trace with one beat arriving early, a pause, then a stronger beat">
      <path d={beatTrace(16, 306, 120, at === 3 ? pairs : usual)} stroke={INK} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      {at === 0 && <circle cx="149" cy="112" r="20" fill="none" stroke={GOLD} strokeWidth="3" />}
      {at === 1 && <><Box x={84} y={40} w={144} text="Top chamber: PAC" /><Box x={236} y={40} w={144} text="Bottom chamber: PVC" /></>}
      {at === 2 && <><W x={149} y={92} size={10.5}>Early</W><W x={211} y={70} size={10.5}>Thud</W>
        <path d="M158 140 V146 H204 V140" stroke={GOLD} strokeWidth="2.5" fill="none" /><W x={181} y={162} size={10.5}>Pause</W></>}
      {at === 4 && <HeartShape x={160} y={52} size={56} fill={TINT} />}
      <W x={160} y={182} size={10.5}>{["Most people have them at some point", "Just before the normal heartbeat", "The heart catching up", "One before each beat, or several in a row", "They do not damage the heart"][at]}</W>
      <Say>{["An early or extra heartbeat", "From the top or bottom chambers", "A pause, then a catch-up thud", "Seconds, minutes, or longer", "Usually harmless"][at]}</Say>
    </svg>} />;
}

function EbFeltPlaces(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const spots = [{ y: 90, t: "Neck" }, { y: 108, t: "Throat" }, { y: 150, t: "Chest" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="What they feel like" title="Skipped, thumping or fluttering beats" label="What they feel like" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Head and shoulders, with the places ectopic beats can be felt and the words people use">
      <circle cx="100" cy="52" r="26" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M24 184 C28 140, 50 120, 84 116 V78 H116 V116 C150 120, 172 140, 176 184 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      {at === 1 && spots.map(spot => <g key={spot.t}><circle cx="100" cy={spot.y} r="8" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />
        <path d={`M108 ${spot.y} H192`} stroke={LINE} strokeWidth="2" /><W x={198} y={spot.y + 4} size={11} anchor="start">{spot.t}</W></g>)}
      {at === 0 && ["Skipped", "Extra", "Thumping", "Fluttering"].map((label, index) => <Box key={label} x={252} y={46 + index * 34} w={100} text={label} lit />)}
      {at === 2 && <><W x={248} y={40} size={10}>An extra beat</W><path d={beatTrace(190, 306, 74, [[198, 22], [232, 22], [248, 16], [280, 22]])} stroke={INK} strokeWidth="2.5" fill="none" />
        <W x={248} y={110} size={10}>A pause, then a thud</W><path d={beatTrace(190, 306, 156, [[198, 22], [232, 22], [284, 34]])} stroke={INK} strokeWidth="2.5" fill="none" /></>}
      {at === 3 && <><Lines x={250} y={56} lines={["Seconds,", "minutes,", "or longer"]} size={11} /><Clock x={250} y={136} r={22} hand={2} /></>}
      <Say>{["Skipped, extra, thumping or fluttering", "In the chest, neck or throat", "An extra beat, or a pause then a thud", "Many people feel nothing at all"][at]}</Say>
    </svg>} />;
}

function EbCauseGrid(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const tiles = ["Caffeine", "Alcohol", "Smoking", "Stress", "Poor sleep", "Hard exercise", "Medicines", "Hormones", "Other conditions"];
  const lit = (index: number) => at === 0 ? index < 6 : index === at + 5;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="The everyday things that set them off" label="Causes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label={`Things that can make ectopic beats more likely: ${tiles.join(", ")}`}>
      {tiles.map((label, index) => <Box key={label} x={56 + (index % 3) * 104} y={36 + Math.floor(index / 3) * 40} w={98} h={30} text={label} lit={lit(index)} size={index === 8 ? 10 : 10.5} />)}
      <Lines x={160} y={156} lines={[
        ["If any are triggers for you,", "try to avoid them"],
        ["Check your medicine leaflets;", "cold and flu remedies, too"],
        ["Pregnancy and menopause", "can trigger palpitations"],
        ["Anaemia, an overactive thyroid,", "or another heart problem"],
      ][at]} />
      <Say>{["Stress, caffeine, alcohol, poor sleep", "See a GP before stopping medicines", "Hormone changes, such as menopause", "Sometimes another condition"][at]}</Say>
    </svg>} />;
}

function EbThreeLanes(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const lane = [0, 1, 1, 2][at];
  const lanes = [
    { t: "Usually harmless", d: "No damage to the heart, in most people" },
    { t: "See a GP", d: at === 1 ? "Heart disease? More checks may be advised" : "Coming back, lasting minutes, heart history" },
    { t: "999 or A&E", d: "Won't go away, or chest pain, breathless, faint" },
  ];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Harmless or not" title="Usually harmless, sometimes worth a check" label="When to get checked" credit="Illustration: Rehyn. If in doubt, get help."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three lanes: usually harmless, see a GP, and 999 or A&E">
      {lanes.map((item, index) => { const y = 14 + index * 58; const on = index === lane; return <g key={item.t}>
        <rect x="16" y={y} width="288" height="50" rx="12" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={28} y={y + 21} size={11.5} anchor="start" fill={on ? WHITE : TEXT}>{item.t}</W>
        <W x={28} y={y + 39} size={10} anchor="start" fill={on ? WHITE : TEXT}>{item.d}</W></g>; })}
      <Say>{["Usually harmless; no damage", "May matter more with heart disease", "Keep coming back? See a GP", "Stopped now? Urgent GP or 111"][at]}</Say>
    </svg>} />;
}

function EbStripTests(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [[], [0], [1, 2], [3], []][at];
  const tiles = ["ECG", "Holter", "Loop", "Echo"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tests" title="Catching a beat that comes and goes" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A heart tracing with one beat a different shape, and four tests: ECG, Holter monitor, loop recorder and echo">
      {at < 4 ? <><rect x="16" y="18" width="288" height="68" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" />
        <path d="M16 60 H40 l3 -24 l4 34 l3 -10 H96 l3 -24 l4 34 l3 -10 H150 l6 -30 l8 46 l6 -16 H214 l3 -24 l4 34 l3 -10 H266 l3 -24 l4 34 l3 -10 H304" stroke={INK} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        {at === 0 && <circle cx="160" cy="58" r="22" fill="none" stroke={GOLD} strokeWidth="3" />}</>
        : <><Lines x={160} y={36} lines={["Not heard after a few weeks? Contact", "the doctor who referred you"]} size={10} /><W x={160} y={80} size={10}>For many, no cause is ever found</W></>}
      {tiles.map((label, index) => { const x = 52 + index * 72; const on = lit.includes(index); const c = on ? WHITE : INK; return <g key={label}>
        <rect x={x - 32} y="100" width="64" height="50" rx="10" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {index === 0 && <path d={spikes(x - 22, x + 22, 132, [x - 16, x + 2], 14)} stroke={c} strokeWidth="2" fill="none" />}
        {index === 1 && <><path d={`M${x - 24} 125 H${x + 24}`} stroke={c} strokeWidth="3" /><rect x={x - 10} y="116" width="20" height="18" rx="4" fill="none" stroke={c} strokeWidth="2.5" /></>}
        {index === 2 && <><path d={`M${x - 22} 120 Q${x} 110 ${x + 22} 120`} stroke={c} strokeWidth="2.5" fill="none" /><rect x={x - 8} y="124" width="16" height="9" rx="3" fill={c} /></>}
        {index === 3 && <><HeartShape x={x - 6} y={126} size={28} fill="none" stroke={c} width={2.5} /><path d={`M${x + 12} 116 q5 8 0 16 M${x + 18} 112 q8 12 0 24`} stroke={c} strokeWidth="2" fill="none" /></>}
        <W x={x} y={166} size={10.5}>{label}</W></g>; })}
      {at === 2 && <><W x={124} y={184} size={9.5}>Up to 7 days</W><W x={196} y={184} size={9.5}>Up to 3 years</W></>}
      {at === 3 && <W x={268} y={184} size={9.5}>30 to 40 minutes</W>}
      <Say y={208}>{["It starts with what you describe", "ECG: quick and painless", "A longer recording, if it's missed", "An echo: a soundwave scan", "Results: same day, or a few weeks"][at]}</Say>
    </svg>} />;
}

function EbDiarySwaps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Triggers" title="Small swaps, fewer skipped beats" label="Cutting down on triggers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Everyday triggers to cut down on, and a symptom diary">
      {at === 0 && <>{["Stress", "Smoking", "Caffeine", "Alcohol"].map((label, index) => <Box key={label} x={48 + index * 75} y={56} w={68} text={label} lit size={10} />)}
        <Lines x={160} y={112} lines={["If they are not caused by a", "health condition, avoiding", "triggers can help"]} /></>}
      {at === 1 && <><Cup x={84} y={72} /><Glass x={236} y={72} />
        <Lines x={84} y={114} lines={["Tea, coffee", "and chocolate"]} /><Lines x={236} y={114} lines={["14 units a", "week at most"]} /></>}
      {at === 2 && <><Moon x={60} y={72} r={18} /><ellipse cx="160" cy="76" rx="32" ry="14" fill={WHITE} stroke={INK} strokeWidth="2.5" /><ellipse cx="160" cy="76" rx="16" ry="6" fill={SOFT} /><Glass x={260} y={72} />
        <W x={60} y={116} size={10.5}>Enough sleep</W><W x={160} y={116} size={10.5}>Smaller meals</W><W x={260} y={116} size={10.5}>6 to 8 drinks</W>
        <W x={160} y={152} size={10}>No caffeine or alcohol 6 hours before bed</W></>}
      {at === 3 && <><rect x="50" y="68" width="80" height="14" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="114" y="68" width="16" height="14" fill={SOFT} /><Cross x={90} y={75} s={16} />
        <Face x={230} y={74} calm /><W x={90} y={126} size={10.5}>No smoking</W><W x={230} y={126} size={10.5}>Manage stress</W>
        <W x={160} y={160} size={10}>Cold and flu decongestants: best avoided</W></>}
      {at === 4 && <><rect x="40" y="20" width="240" height="152" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M40 54 H280 M120 20 V172 M200 20 V172" stroke={INK} strokeWidth="2" />
        <W x={80} y={42} size={10.5}>When</W><W x={160} y={42} size={10.5}>Doing what</W><W x={240} y={42} size={10.5}>Symptoms</W>
        {[78, 106, 134, 158].map(y => <path key={y} d={`M52 ${y} H108 M132 ${y} H188 M212 ${y} H266`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}</>}
      <Say>{["Start by avoiding your triggers", "Less caffeine; no more than 14 units", "Sleep, smaller meals, enough fluids", "No smoking; manage stress", "Keep a symptom diary"][at]}</Say>
    </svg>} />;
}

function EbSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const step = [0, 1, 1, 2, -1][at];
  const steps = [{ x: 20, w: 100, y: 140, t: "Advice" }, { x: 120, w: 90, y: 104, t: "Beta blocker" }, { x: 210, w: 90, y: 64, t: "Ablation" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatment" title="Often no treatment at all" label="Treatment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three steps: reassurance and advice, a medicine, and ablation for some people">
      {steps.map((item, index) => { const on = step === index || step === -1; return <g key={item.t}>
        <rect x={item.x} y={item.y} width={item.w} height={180 - item.y} rx="6" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" opacity={on ? 1 : 0.6} />
        <W x={item.x + item.w / 2} y={item.y + 22} size={10.5} fill={on ? WHITE : TEXT}>{item.t}</W></g>; })}
      <Lines x={104} y={34} lines={[
        ["Otherwise fit and well?", "Reassurance and advice"],
        ["If symptoms are persistent", "and uncomfortable"],
        ["Cold hands and feet,", "dizziness, tiredness"],
        ["Burning or freezing the", "area causing the beats"],
        ["Symptoms with or without", "tablets, and side effects"],
      ][at]} />
      <Say>{["Often just reassurance and advice", "Often a beta blocker first", "Dizzy? Don't drive until it stops", "Ablation, for some people", "Weighing up the options"][at]}</Say>
    </svg>} />;
}

function EbPhone999(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Urgent help" title="When a flutter needs 999" label="Urgent help" credit="Illustration: Rehyn. If in doubt, call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A phone for 999 or 111, with the symptoms that need urgent help">
      <g className={still || at === 2 ? undefined : "lib-why-pulse"}><Phone x={56} y={86} text={at === 2 ? "111" : "999"} lit={at !== 2} /></g>
      {at === 0 && ["Won't go away", "Chest pain", "Short of breath", "Feeling faint or fainting"].map((label, index) => <Box key={label} x={208} y={40 + index * 34} w={176} text={label} />)}
      {at === 1 && <><Car x={204} y={58} fill={SOFT} /><Cross x={204} y={42} s={18} />
        <Lines x={204} y={98} lines={["Ask someone to drive you,", "or call 999 and ask for an", "ambulance. Bring your", "medicines with you."]} size={10} /></>}
      {at === 2 && <Lines x={204} y={56} lines={["Symptoms have stopped?", "", "Ask your GP surgery for", "an urgent appointment, call", "111, or use 111 online"]} size={10} />}
      {at === 3 && <Lines x={204} y={50} lines={["Sudden chest pain that does", "not go away, or spreads to", "arms, neck, jaw, stomach or", "back, or with sweating,", "sickness or breathlessness"]} size={10} />}
      {at === 4 && <><Bubble x={204} y={56} text="Heart or panic?" width={130} /><Lines x={204} y={112} lines={["They share many symptoms,", "like chest pain and dread"]} size={10} /></>}
      <Say>{["Palpitations with these: 999 or A&E", "Do not drive to A&E", "Stopped now? Urgent GP or 111", "It could be a heart attack: call 999", "Unsure? It's safest to call 999"][at]}</Say>
    </svg>} />;
}

function EbVolume(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Noticing them less" title="Turning down the volume on beats" label="Noticing them less" credit="Illustration: Rehyn. Follow the steps in the article."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="How beats feel compared with how serious they are, calm breathing, grounding and checking less">
      {at === 0 && <>
        <W x={60} y={44} size={10.5} anchor="start">How they feel</W><path d="M60 66 H260" stroke={LINE} strokeWidth="10" strokeLinecap="round" /><path d="M60 66 H230" stroke={INK} strokeWidth="10" strokeLinecap="round" /><circle cx="230" cy="66" r="12" fill={WHITE} stroke={INK} strokeWidth="3" />
        <W x={60} y={114} size={10.5} anchor="start">How serious they are</W><path d="M60 136 H260" stroke={LINE} strokeWidth="10" strokeLinecap="round" /><path d="M60 136 H90" stroke={INK} strokeWidth="10" strokeLinecap="round" /><circle cx="90" cy="136" r="12" fill={WHITE} stroke={INK} strokeWidth="3" />
        <W x={160} y={176} size={10.5}>Many people live a normal life with them</W></>}
      {at === 1 && <><circle cx="160" cy="84" r="56" fill={TINT} stroke={SOFT} strokeWidth="3" /><circle cx="160" cy="84" r="34" fill={INK} opacity=".85" className={still ? undefined : "lib-v2-breathe is-slow"} />
        <W x={160} y={89} size={12} fill={WHITE}>1 2 3 4 5</W><W x={160} y={168} size={10}>Pain, breathless or dizzy? Stop, get help</W></>}
      {at === 2 && <>{["5 things you can see", "4 you can feel or touch", "3 you can hear", "2 you can smell", "1 you can taste"].map((label, index) => <Box key={label} x={160} y={30 + index * 27} w={180 - index * 12} h={22} text={label} lit={index === 0} size={10} />)}
        <W x={160} y={172} size={10}>Or call a friend, play music, take a walk</W></>}
      {at === 3 && <><W x={160} y={30} size={10.5}>Times you check your pulse</W>
        {[90, 70, 50, 30].map((height, index) => <g key={index}><rect x={58 + index * 56} y={140 - height} width="40" height={height} rx="6" fill={index === 3 ? GOLD : INK} /><W x={78 + index * 56} y={158} size={10}>Week {index + 1}</W></g>)}
        <W x={160} y={182} size={10}>For some, watches and apps add worry</W></>}
      <Say>{["They often feel worse than they are", "Breathe gently, for at least 5 minutes", "Grounding: back to the present", "Check a little less each week"][at]}</Say>
    </svg>} />;
}

function EbWeekBars(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const heights = at === 2 ? [12, 18, 24, 30, 36, 42, 48] : [60, 60, 0, 60, 60, 60, 0];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercise" title="Back to moving, one step at a time" label="Exercise" credit="Illustration: Rehyn. 150 minutes a week is the NHS guide for adults."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of activity building up gradually towards the weekly target">
      {at === 0 && <><Person x={90} y={124} scale={1.5} /><Lines x={220} y={70} lines={["Strenuous exercise", "is a common cause"]} />
        <W x={160} y={176} size={10.5}>Putting you off? Get them checked</W></>}
      {at === 1 && <><Lines x={160} y={50} lines={["Seen your doctor, and no", "more tests or treatment needed?"]} />
        <path d="M130 116 L152 138 L194 92" stroke={GOLD} strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <W x={160} y={172} size={10.5}>Inactive for a while? See a GP first</W></>}
      {(at === 2 || at === 3) && <>
        <W x={160} y={36} size={10.5}>{at === 2 ? "Then build up time and distance" : "Moderate: you can talk, but not sing"}</W>
        {days.map((day, index) => <g key={index}><rect x={22 + index * 40} y={140 - Math.max(heights[index], 4)} width="34" height={Math.max(heights[index], 4)} rx="6" fill={heights[index] ? INK : LINE} />
          {at === 3 && heights[index] > 0 && <W x={39 + index * 40} y={106} size={10} fill={WHITE}>30</W>}
          <W x={39 + index * 40} y={158} size={10.5}>{day}</W></g>)}
        {at === 3 && <W x={160} y={180} size={10}>Or 75 minutes of vigorous activity</W>}</>}
      {at === 4 && <><Stop x={84} y={84} r={34} /><Lines x={220} y={60} lines={["Palpitations worse", "with exercise?", "Stop, and speak", "to your doctor"]} /></>}
      <Say>{["Exercise can bring them on", "Then staying active is recommended", "Start with 5 or 10 minutes' walking", "A weekly target of 150 minutes", "New symptoms? Tell your doctor"][at]}</Say>
    </svg>} />;
}

function EbBedroom(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="At night" title="Why beats can feel worse at bedtime" label="At night" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person in bed at night, with a slower heartbeat, a quiet room, worries and sleeping position">
      <Moon x={272} y={38} r={13} />
      <rect x="36" y="96" width="12" height="56" rx="3" fill={INK} /><rect x="36" y="140" width="250" height="12" rx="4" fill={INK} /><path d="M284 152 V170 M44 152 V170" stroke={INK} strokeWidth="5" />
      <ellipse cx="76" cy="132" rx="20" ry="7" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx="76" cy="122" r="11" fill={INK} />
      <path d="M92 140 C110 112, 246 114, 280 140 Z" fill={SOFT} />
      {at === 0 && <path d={spikes(30, 240, 70, [44, 124, 204], 24)} stroke={INK} strokeWidth="2.5" fill="none" />}
      {at === 1 && <><W x={150} y={60} size={10.5}>Less noise, fewer distractions</W></>}
      {at === 2 && <><circle cx="98" cy="96" r="4" fill={LINE} /><circle cx="112" cy="80" r="6" fill={LINE} />
        <ellipse cx="170" cy="56" rx="60" ry="28" fill={LINE} /><W x={170} y={60} size={10.5}>Worries</W></>}
      {at === 3 && <><Box x={110} y={46} w={116} text="On your back" /><Box x={232} y={46} w={92} text="Left side" lit /></>}
      {at === 4 && <Lines x={150} y={34} lines={["No smoking, alcohol, tea or coffee", "for 6 hours before bed"]} size={10} />}
      <Say y={200}>{["More likely when the heart is slower", "A quiet room, so you notice more", "Night-time worries can add to it", "Some experts: back or left side", "Relax for an hour before bed"][at]}</Say>
    </svg>} />;
}

function EbWorryCircle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const broken = at >= 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Worry" title="Breaking the worry and heartbeat loop" label="Worry and anxiety" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Palpitations and worry feeding each other in a loop, and the help that breaks it">
      {at < 4 ? <>
        <g stroke={broken ? SOFT : GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray={broken ? "6 8" : undefined}>
          <path d="M100 42 C30 60, 30 140, 100 154" /><path d="M220 154 C290 140, 290 60, 220 42" />
        </g>
        {!broken && <><path d="M92 147 L101 154 L92 161" stroke={GOLD} strokeWidth="3" fill="none" /><path d="M228 35 L219 42 L228 49" stroke={GOLD} strokeWidth="3" fill="none" /></>}
        <Box x={160} y={40} w={124} h={30} text="Palpitations" lit={!broken} />
        <Box x={160} y={154} w={124} h={30} text="Worry" lit={!broken} />
        {at === 1 && <><Box x={58} y={98} w={88} text="Checking" lit /><Box x={262} y={98} w={88} text="Avoiding" lit /></>}
        {at === 2 && <><Box x={58} y={98} w={88} text="Grounding" lit /><Box x={262} y={98} w={88} text="Worry time" lit /><Lines x={160} y={94} lines={["Sleep, exercise,", "less caffeine"]} size={10} /></>}
        {at === 3 && <><Box x={160} y={90} w={140} h={30} text="Talking therapy" lit /><W x={160} y={124} size={10}>You can refer yourself</W></>}
      </> : <>
        <Note x={160} y={24} w={220} lines={["Samaritans", "116 123"]} />
        <Note x={160} y={90} w={220} lines={["BHF Heart Helpline", "0808 802 1234"]} lit={false} />
        <W x={160} y={164} size={10.5}>Or see a GP about anxiety</W>
      </>}
      <Say>{["Worry and palpitations feed each other", "Checking and avoiding keep it going", "Worry time: about 20 minutes", "Talking therapies, such as CBT", "Someone to talk to"][at]}</Say>
    </svg>} />;
}

export function RhythmPieceView({ piece, ...props }: { piece: RhythmPiece } & PieceProps) {
  switch (piece) {
    case "svt-wiring": return <SvtWiring {...props} />;
    case "svt-on-off": return <SvtOnOff {...props} />;
    case "svt-trigger-ring": return <SvtTriggerRing {...props} />;
    case "svt-monitors": return <SvtMonitors {...props} />;
    case "svt-valsalva": return <SvtValsalva {...props} />;
    case "svt-pill-boxes": return <SvtPillBoxes {...props} />;
    case "svt-catheter": return <SvtCatheter {...props} />;
    case "svt-999-path": return <Svt999Path {...props} />;
    case "svt-walk-path": return <SvtWalkPath {...props} />;
    case "svt-cups": return <SvtCups {...props} />;
    case "svt-road-desk": return <SvtRoadDesk {...props} />;
    case "svt-worry-tools": return <SvtWorryTools {...props} />;
    case "brady-dial": return <BradyDial {...props} />;
    case "brady-signal-rows": return <BradySignalRows {...props} />;
    case "brady-cause-tiles": return <BradyCauseTiles {...props} />;
    case "brady-body-signs": return <BradyBodySigns {...props} />;
    case "brady-ecg-patches": return <BradyEcgPatches {...props} />;
    case "brady-backup": return <BradyBackup {...props} />;
    case "brady-fitting": return <BradyFitting {...props} />;
    case "brady-pill-slow": return <BradyPillSlow {...props} />;
    case "brady-rings": return <BradyRings {...props} />;
    case "brady-car-weeks": return <BradyCarWeeks {...props} />;
    case "brady-arm-level": return <BradyArmLevel {...props} />;
    case "brady-check-line": return <BradyCheckLine {...props} />;
    case "eb-early-beat": return <EbEarlyBeat {...props} />;
    case "eb-felt-places": return <EbFeltPlaces {...props} />;
    case "eb-cause-grid": return <EbCauseGrid {...props} />;
    case "eb-three-lanes": return <EbThreeLanes {...props} />;
    case "eb-strip-tests": return <EbStripTests {...props} />;
    case "eb-diary-swaps": return <EbDiarySwaps {...props} />;
    case "eb-steps": return <EbSteps {...props} />;
    case "eb-phone-999": return <EbPhone999 {...props} />;
    case "eb-volume": return <EbVolume {...props} />;
    case "eb-week-bars": return <EbWeekBars {...props} />;
    case "eb-bedroom": return <EbBedroom {...props} />;
    case "eb-worry-circle": return <EbWorryCircle {...props} />;
  }
}
