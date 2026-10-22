import { useId, type ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { BLADDER_PIECES, type BladderPiece } from "@/content/bladder-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Urinary incontinence and Enlarged prostate pages' own pieces (content/bladder-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Kidneys, liver & digestion pieces. Each is steered by the card's
// sections; pictures show ideas, never anyone's own body or results. Continence and sexual health are drawn as
// simple diagrams, calendars and routines.

export const isBladderPiece = (piece: NewsPiece): piece is BladderPiece => (BLADDER_PIECES as readonly string[]).includes(piece);

// ==== Shared shapes =========================================================================================

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5, dim = false }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number; dim?: boolean }) =>
  <g opacity={dim ? 0.4 : 1}><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A column of labelled boxes from (x, y) downwards. */
const Stack = ({ x, y, labels, lit, width = 130, gap = 32, size = 10.5, fade = false }: { x: number; y: number; labels: string[]; lit: (index: number) => boolean; width?: number; gap?: number; size?: number; fade?: boolean }) =>
  <g>{labels.map((label, index) => <g key={label} opacity={fade && !lit(index) ? 0.4 : 1}><Box x={x + width / 2} y={y + 13 + index * gap} w={width} text={label} lit={lit(index)} size={size} /></g>)}</g>;
/** The caption under a picture. */
const Say = ({ children }: { children: ReactNode }) => <W x={160} y={206} size={11}>{children}</W>;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
const Drop = ({ x, y, r = 8, fill = INK, className }: { x: number; y: number; r?: number; fill?: string; className?: string }) =>
  <path className={className} d={`M${x} ${y - r * 1.7} C${x + r * 0.4} ${y - r}, ${x + r} ${y - r * 0.4}, ${x + r} ${y + r * 0.1} A${r} ${r} 0 0 1 ${x - r} ${y + r * 0.1} C${x - r} ${y - r * 0.4}, ${x - r * 0.4} ${y - r}, ${x} ${y - r * 1.7} Z`} fill={fill} />;
const Cross = ({ x, y, color = GOLD, size = 1 }: { x: number; y: number; color?: string; size?: number }) =>
  <path transform={`translate(${x} ${y}) scale(${size})`} d="M-7 -7 L7 7 M7 -7 L-7 7" fill="none" stroke={color} strokeWidth={4 / size} strokeLinecap="round" />;
/** A speech bubble with its tail pointing down-left, centred on (x, y). */
const Bubble = ({ x, y, text, width = 120 }: { x: number; y: number; text: string; width?: number }) =>
  <g>
    <rect x={x - width / 2} y={y - 15} width={width} height="30" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" />
    <path d={`M${x - width / 2 + 18} ${y + 14} l-8 12 l18 -12`} fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <W x={x} y={y + 4} size={10.5}>{text}</W>
  </g>;
/** A labelled bar from x, `value` from 0 to 1, with its figure at the right. */
const Bar = ({ x, y, w, label, note, value }: { x: number; y: number; w: number; label: string; note: string; value: number }) =>
  <g>
    <W x={x} y={y} size={10.5} anchor="start">{label}</W><W x={x + w} y={y} size={10.5} anchor="end">{note}</W>
    <rect x={x} y={y + 8} width={w} height="16" rx="8" fill={LINE} /><rect x={x} y={y + 8} width={Math.max(16, w * value)} height="16" rx="8" fill={INK} />
  </g>;

/** A bladder outline centred on (x, y), about 70 wide and 74 tall at scale 1, filled to `level` (0 to 1). */
const Bladder = ({ x, y, s = 1, level = 0.5, fill = SOFT }: { x: number; y: number; s?: number; level?: number; fill?: string }) => {
  const id = `bl-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const d = "M0 -30 C22 -30, 36 -16, 34 2 C32 18, 18 28, 6 32 V44 H-6 V32 C-18 28, -32 18, -34 2 C-36 -16, -22 -30, 0 -30 Z";
  const top = -30 + (1 - level) * 62;
  return <g transform={`translate(${x} ${y}) scale(${s})`}>
    <clipPath id={id}><path d={d} /></clipPath>
    <path d={d} fill={WHITE} />
    <rect x="-40" y={top} width="80" height="90" fill={fill} clipPath={`url(#${id})`} />
    <path d={d} fill="none" stroke={INK} strokeWidth={3 / s} strokeLinejoin="round" />
  </g>;
};
/** The bladder with the prostate below it and the urethra running through; `narrow` pinches the channel. */
const Anatomy = ({ x, y, r = 20, narrow = false, level = 0.5 }: { x: number; y: number; r?: number; narrow?: boolean; level?: number }) => {
  const cy = y + 62, ry = r * 0.78, p = narrow ? 1.2 : 4.5;
  return <g>
    <path d={`M${x - 4.5} ${y + 40} V${y + 100} M${x + 4.5} ${y + 40} V${y + 100}`} stroke={INK} strokeWidth="2.5" />
    <Bladder x={x} y={y} level={level} />
    <ellipse cx={x} cy={cy} rx={r} ry={ry} fill={SOFT} stroke={INK} strokeWidth="3" />
    <path d={`M${x - 4.5} ${cy - ry - 2} Q${x - p} ${cy} ${x - 4.5} ${cy + ry + 2} H${x + 4.5} Q${x + p} ${cy} ${x + 4.5} ${cy - ry - 2} Z`} fill={WHITE} stroke={INK} strokeWidth="2" />
  </g>;
};
/** A glass of water, `full` from 0 to 1. */
const Tumbler = ({ x, y, full = 0.6, scale = 1, fill = SOFT }: { x: number; y: number; full?: number; scale?: number; fill?: string }) => {
  const top = 17 - 32 * full;
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d={`M${-10.5 + 1.5 * (1 - full)} ${top} L-9 16 H9 L${10.5 - 1.5 * (1 - full)} ${top} Z`} fill={fill} />
    <path d="M-12 -17 L-9 17 H9 L12 -17" fill="none" stroke={INK} strokeWidth={2.5 / scale} strokeLinejoin="round" strokeLinecap="round" />
  </g>;
};
const Mug = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g>
    <rect x={x - 14} y={y - 16} width="28" height="32" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
    <path d={`M${x + 14} ${y - 8} h6 a6 6 0 0 1 0 14 h-6`} fill="none" stroke={INK} strokeWidth="2.5" />
    <path d={`M${x - 6} ${y - 22} q3 -4 0 -8 M${x + 3} ${y - 22} q3 -4 0 -8`} stroke={SOFT} strokeWidth="2" fill="none" strokeLinecap="round" />
  </g>;
const WineGlass = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={INK} strokeWidth={2.5 / scale} strokeLinecap="round" strokeLinejoin="round">
    <path d="M-11 -20 H11 C11 -6, 5 0, 0 0 C-5 0, -11 -6, -11 -20 Z" fill={WHITE} /><path d="M-9 -10 H9 C7 -4, 3 -2, 0 -2 C-3 -2, -7 -4, -9 -10 Z" fill={INK} stroke="none" />
    <path d="M0 0 V16 M-8 16 H8" />
  </g>;
/** A map pin with its tip at (x, y). */
const Pin = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g>
    <path d={`M${x} ${y} C${x - 4} ${y - 8}, ${x - 11} ${y - 13}, ${x - 11} ${y - 21} A11 11 0 0 1 ${x + 11} ${y - 21} C${x + 11} ${y - 13}, ${x + 4} ${y - 8}, ${x} ${y} Z`} fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx={x} cy={y - 21} r="4" fill={lit ? WHITE : INK} />
  </g>;
/** A key, its ring centred on (x, y). */
const Key = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`} fill="none" stroke={INK} strokeWidth={5 / s} strokeLinecap="round"><circle cx="0" cy="0" r="14" /><path d="M14 0 H54 M42 0 V12 M52 0 V9" /></g>;
/** A chair seen from the side, its seat at height y; `flip` puts the back on the right. */
const Chair = ({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) => {
  const back = flip ? x + 18 : x - 18;
  return <path d={`M${x - 18} ${y} H${x + 18} M${back} ${y} V${y - 44} M${x - 15} ${y} V${y + 28} M${x + 15} ${y} V${y + 28}`} stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none" />;
};
/** A crescent moon centred near (x, y). */
const Moon = ({ x, y, r = 10, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x + r * 0.3} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.3} ${y + r} A${r * 1.2} ${r * 1.2} 0 0 1 ${x + r * 0.3} ${y - r} Z`} fill={fill} />;

// ==== Urinary incontinence ==================================================================================

function UiBladderDrop(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Leaking urine without meaning to", "Around 40% of women and 10% of men", "Most have stress or urge incontinence", "About 80% can be cured or improved"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Common, and usually treatable" label="What urinary incontinence is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bladder with a drop leaving it, beside how common leaks are, the main types and how many can be helped">
      <Bladder x={70} y={80} level={0.55} />
      <Drop x={70} y={160} r={7} fill={GOLD} className={still || at !== 0 ? undefined : "lib-why-pulse"} />
      {at === 0 && <>
        <Box x={228} y={60} w={150} text="Short-term" /><Box x={228} y={100} w={150} text="Long-term" />
        <W x={228} y={142} size={10.5}>Treating the cause</W><W x={228} y={158} size={10.5}>may cure it</W>
      </>}
      {at === 1 && <>
        <Bar x={150} y={52} w={154} label="Women" note="About 40%" value={0.4} />
        <Bar x={150} y={100} w={154} label="Men" note="About 10%" value={0.1} />
        <W x={227} y={160} size={10.5}>3 to 6 million in the UK</W>
      </>}
      {at === 2 && <>
        <Box x={186} y={58} w={78} text="Stress" lit /><Box x={270} y={58} w={78} text="Urge" lit />
        <Box x={228} y={98} w={162} text="Mixed: both" />
        <Box x={186} y={138} w={78} text="Overflow" dim /><Box x={270} y={138} w={78} text="Total" dim />
      </>}
      {at === 3 && <>
        <circle cx="228" cy="94" r="46" fill="none" stroke={LINE} strokeWidth="12" />
        <path d="M228 48 A46 46 0 1 1 184.3 79.8" fill="none" stroke={INK} strokeWidth="12" strokeLinecap="round" />
        <W x={228} y={90} size={10.5}>About</W><W x={228} y={110} size={17}>80%</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function UiThreeLeaks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Sudden pressure, not feeling stressed", "A sudden, very intense need to go", "Can mean peeing over 8 times a day", "90% have stress, urge or both", "Cannot pee at all? Get help urgently"];
  const notes = ["Cough, sneeze, laugh or lift", "A few seconds from urge to leak", "About 1 in 6 adults report symptoms", "Also: overflow and total incontinence"];
  const lit = [0, 1, 1, 2][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Types" title="A cough, an urge, or both" label="Types of incontinence" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three panels for stress, urge and mixed incontinence, and what to do if you cannot pee at all">
      {at < 4 && <>
        {["Stress", "Urge", "Mixed"].map((label, index) => <g key={label} opacity={lit === index ? 1 : 0.45}>
          <rect x={10 + index * 102} y="22" width="96" height="112" rx="12" fill={lit === index ? TINT : WHITE} stroke={INK} strokeWidth={lit === index ? 3 : 2} />
          <W x={58 + index * 102} y={122} size={11}>{label}</W>
        </g>)}
        <g opacity={lit === 0 ? 1 : 0.45}><Arrow d="M58 32 V52" head="M52 45 L58 53 L64 45" /><Bladder x={58} y={78} s={0.55} /></g>
        <g opacity={lit === 1 ? 1 : 0.45}><Clock x={160} y={74} r={24} hand={at === 2 ? 2.4 : 1} /></g>
        <g opacity={lit === 2 ? 1 : 0.45}><Arrow d="M244 36 V54" head="M238 47 L244 55 L250 47" /><Bladder x={244} y={80} s={0.45} /><Clock x={286} y={70} r={13} hand={1} /></g>
        <W x={160} y={164} size={10.5}>{notes[at]}</W>
      </>}
      {at === 4 && <>
        <Bladder x={70} y={84} level={0.95} />
        <Stack x={128} y={34} labels={["Cannot pee at all?", "Urgent GP or NHS 111", "Painful: doctor, nurse or A&E"]} lit={index => index === 0} width={180} gap={40} size={10} />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function UiHammockPress(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The urethra may not stay closed", "1 in 3 women will have it at some time", "Prostate treatment can damage nerves", "The bladder muscle contracts too often", "Some medicines and smoking play a part"];
  const lists = [
    ["Childbirth", "Pregnancy, obesity", "Some surgery"],
    ["Pregnancy and birth", "The menopause", "Increasing age"],
    ["Prostate treatment", "Enlarged prostate", "Parkinson's disease"],
    ["Alcohol, caffeine", "Constipation", "Infections"],
    ["Some medicines", "Smoking, a cough", "Being overweight"],
  ];
  const weak = at <= 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Why the bladder lets go" label="Causes of incontinence" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bladder resting on the pelvic floor, with the things that can weaken it or set off the bladder muscle">
      {at !== 3 && <Arrow d="M96 18 V44" head="M89 37 L96 45 L103 37" />}
      <Bladder x={96} y={84} level={0.5} />
      {at === 2 && <ellipse cx="96" cy="120" rx="17" ry="11" fill={SOFT} stroke={INK} strokeWidth="2.5" />}
      {at === 3 && <path d="M52 62 l7 7 l-7 7 l7 7 M140 62 l-7 7 l7 7 l-7 7" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      <path d={`M28 118 Q96 ${weak ? 168 : 150} 164 118`} stroke={weak ? SOFT : INK} strokeWidth="7" fill="none" strokeLinecap="round" strokeDasharray={weak ? "10 6" : undefined} />
      <W x={96} y={180} size={10.5}>Pelvic floor</W>
      <Stack x={186} y={40} labels={lists[at]} lit={() => true} width={124} gap={36} size={10} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function UiDiaryDays(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Questions about leaks and drinks", "A bladder diary for at least 3 days", "A pelvic or prostate examination", "A dipstick checks for infection", "More tests if treatment does not work"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="Three days of notes, one visit" label="What the GP will check" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A three-day bladder diary page beside the GP's questions, the examination and simple tests">
      <g opacity={at === 1 ? 1 : 0.45}>
        <rect x="18" y="26" width="124" height="150" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={80} y={46} size={10.5}>Bladder diary</W>
        {["Day 1", "Day 2", "Day 3"].map((day, c) => <g key={day}>
          <W x={42 + c * 38} y={66} size={10}>{day}</W>
          {[0, 1, 2, 3].map(r => r === 2 && c === 1 ? null : <circle key={r} cx={42 + c * 38} cy={86 + r * 22} r="5" fill={r % 2 ? SOFT : INK} />)}
        </g>)}
      </g>
      {at === 0 && <><Bubble x={220} y={58} text="When do you leak?" width={136} /><Person x={270} y={158} scale={1.15} fill={SOFT} /></>}
      {at === 1 && <Stack x={160} y={36} labels={["What you drink", "How often you pee", "Leaks", "Urgent needs"]} lit={() => true} width={146} gap={34} />}
      {at === 2 && <Stack x={158} y={44} labels={["Asked to cough", "Pelvic floor squeeze", "Prostate check"]} lit={index => index === 0} width={150} gap={38} />}
      {at === 3 && <>
        <rect x="182" y="44" width="12" height="100" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[0, 1, 2].map(index => <rect key={index} x="184" y={52 + index * 16} width="8" height="10" rx="1.5" fill={[SOFT, INK, GOLD][index]} />)}
        <rect x="236" y="54" width="64" height="50" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M268 98 L250 66 A36 36 0 0 1 286 66 Z" fill={SOFT} />
        <W x={188} y={166} size={10.5}>Dipstick</W><W x={268} y={166} size={10.5}>Bladder scan</W>
      </>}
      {at === 4 && <>
        <Box x={230} y={48} w={150} text="Treatment first" lit />
        <Arrow d="M230 64 V80" head="M224 74 L230 81 L236 74" />
        <Box x={230} y={98} w={150} text="Cystoscopy" /><Box x={230} y={134} w={150} text="Urodynamic tests" />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function UiSqueezeHold(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Training can help everyone with leaks", "Imagine stopping wee and wind at once", "At least 8, 3 times a day, 3 months", "Most benefit takes 3 to 6 months", "A GP can refer you to a specialist"];
  const lift = at === 1 || at === 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pelvic floor" title="Squeeze, lift, hold, repeat" label="Pelvic floor exercises" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The pelvic floor as a hammock under the bladder, lifting with each squeeze, beside a squeeze routine">
      <Bladder x={80} y={70} s={0.85} level={0.45} />
      <path d={`M20 104 Q80 ${lift ? 126 : 142} 140 104`} stroke={INK} strokeWidth="7" fill="none" strokeLinecap="round" />
      {at === 0 && <><W x={8} y={150} size={10} anchor="start">Pubic bone</W><W x={152} y={150} size={10} anchor="end">Coccyx</W></>}
      {lift && <g className={still ? undefined : "lib-why-pulse"}><Arrow d="M80 172 V140" head="M73 147 L80 139 L87 147" /></g>}
      {at === 0 && <Stack x={164} y={50} labels={["Supports the organs", "Helps the urethra close"]} lit={() => true} width={146} gap={40} size={10} />}
      {at === 1 && <Stack x={164} y={40} labels={["Squeeze and lift", "Tummy relaxed", "Keep breathing"]} lit={() => true} width={146} gap={36} />}
      {at === 2 && <>
        <W x={164} y={52} size={10.5} anchor="start">Quick: up to 10</W>
        {Array.from({ length: 10 }, (_, index) => <rect key={index} x={164 + index * 14} y="62" width="9" height="18" rx="3" fill={INK} />)}
        <W x={164} y={112} size={10.5} anchor="start">Long: up to 10 seconds</W>
        <rect x="164" y="122" width="140" height="18" rx="6" fill={INK} />
      </>}
      {at === 3 && <Stack x={164} y={40} labels={["After the toilet", "On the phone", "Turning on a tap"]} lit={() => true} width={146} gap={36} />}
      {at === 4 && <><Box x={236} y={58} w={146} text="A programme for you" lit /><Person x={200} y={152} fill={SOFT} /><Person x={270} y={152} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function UiWaitClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["First-line for an overactive bladder", "The bladder learns to hold less", "Distract yourself for one minute first", "A diary can show your progress", "Usually at least 6 weeks"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Bladder training" title="Teach the bladder to wait" label="Bladder training" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock and the gaps between toilet visits, growing longer week by week">
      <Clock x={56} y={70} r={32} hand={[0.5, 0.3, 1, 2, 3][at]} />
      {at === 0 && <Stack x={120} y={34} labels={["Hold more urine", "Go less often", "Fewer urge leaks"]} lit={() => true} width={180} gap={36} />}
      {at === 1 && <>
        <Bladder x={200} y={64} s={0.6} level={0.2} /><W x={262} y={72} size={10.5}>Holds less</W>
        <path d="M20 150 H300" stroke={LINE} strokeWidth="3" />
        {Array.from({ length: 10 }, (_, index) => <rect key={index} x={24 + index * 28} y="140" width="10" height="20" rx="3" fill={INK} />)}
        <W x={160} y={182} size={10.5}>Going just in case</W>
      </>}
      {at === 2 && <>
        <W x={118} y={56} size={10.5} anchor="start">Week 1</W><rect x="180" y="44" width="40" height="16" rx="6" fill={INK} /><W x={228} y={56} size={10.5} anchor="start">1 minute</W>
        <W x={118} y={100} size={10.5} anchor="start">Next week</W><rect x="180" y="88" width="40" height="16" rx="6" fill={INK} /><rect x="222" y="88" width="80" height="16" rx="6" fill={GOLD} />
        <W x={240} y={126} size={10.5}>5 to 15 minutes more</W>
      </>}
      {at === 3 && <>
        <W x={160} y={128} size={11}>Fewer visits, longer gaps</W>
        <path d="M20 150 H300" stroke={LINE} strokeWidth="3" />
        {[30, 110, 190, 270].map(x => <rect key={x} x={x} y="140" width="10" height="20" rx="3" fill={INK} />)}
      </>}
      {at === 4 && <>
        {Array.from({ length: 6 }, (_, index) => <g key={index}><rect x={120 + index * 31} y="50" width="26" height="30" rx="6" fill={INK} /><W x={133 + index * 31} y={70} size={11} fill={WHITE}>{index + 1}</W></g>)}
        <W x={213} y={104} size={10.5}>Weeks</W>
        <W x={213} y={140} size={10.5}>Keep practising</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function UiCalmMuscle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Oxybutynin relaxes the bladder muscle", "Offered if others do not suit or help", "First review after 4 weeks", "Dry mouth affects about 20%", "Some signs need help straight away"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Calming an overactive bladder" label="Medicines for an overactive bladder" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A relaxed bladder beside the medicines, the review times and the common side effects">
      <Bladder x={70} y={92} level={at < 2 ? 0.75 : 0.55} />
      {at < 2 && <path d="M34 54 Q70 30 106 54" stroke={GOLD} strokeWidth="3" fill="none" strokeDasharray="6 5" strokeLinecap="round" />}
      {at < 2 && <Pill x={70} y={164} />}
      {at === 0 && <Stack x={152} y={36} labels={["Oxybutynin", "Tolterodine", "Darifenacin"]} lit={index => index === 0} width={150} gap={36} />}
      {at === 1 && <><Box x={228} y={56} w={150} text="Mirabegron" lit /><Box x={228} y={92} w={150} text="Vibegron" lit /><W x={228} y={134} size={10.5}>Usually once a day</W></>}
      {at === 2 && <Stack x={150} y={36} labels={["3 to 4 hours: starts", "Review at 4 weeks", "Every 6 to 12 months"]} lit={index => index === 1} width={156} gap={38} size={10} />}
      {at === 3 && <><Bar x={152} y={56} w={152} label="Dry mouth" note="About 20%" value={0.2} /><Bar x={152} y={104} w={152} label="Constipation" note="About 10%" value={0.1} /></>}
      {at === 4 && <Stack x={147} y={36} labels={["Cannot pee at all?", "Talk to a doctor urgently", "Overheating: call 999"]} lit={index => index === 0} width={162} gap={38} size={10} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function UiTwoPaths(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The decision is yours in the end", "80 to 90% of women dry or much better", "A cuff keeps the urethra closed", "70% report improvement, says BAUS", "Rarely, larger operations are used"];
  const left = at === 2 ? ["Artificial sphincter", "Male sling"] : ["Colposuspension", "Sling surgery", "Bulking agents"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Procedures" title="When exercises are not enough" label="Procedures and surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two columns of procedures, for stress incontinence and for urge incontinence">
      {at === 0 && <>
        <Stack x={90} y={34} labels={["Risks and benefits", "Alternatives", "Pregnancy plans"]} lit={() => true} width={140} gap={36} />
        <Person x={46} y={162} scale={1.1} fill={SOFT} /><Person x={274} y={162} scale={1.1} />
      </>}
      {at >= 1 && at <= 3 && <>
        <g opacity={at === 3 ? 0.4 : 1}><W x={82} y={34} size={12}>Stress</W><Stack x={12} y={46} labels={left} lit={() => at !== 3} width={140} gap={34} size={10} /></g>
        <g opacity={at === 3 ? 1 : 0.4}><W x={238} y={34} size={12}>Urge</W><Stack x={168} y={46} labels={["Botox", "Sacral nerve", "Tibial nerve"]} lit={() => at === 3} width={140} gap={34} size={10} /></g>
        {at === 2 && <><ellipse cx="82" cy="164" rx="22" ry="10" fill="none" stroke={GOLD} strokeWidth="5" /><path d="M76 146 V182 M88 146 V182" stroke={INK} strokeWidth="2.5" /></>}
      </>}
      {at === 4 && <Stack x={70} y={56} labels={["Bladder enlargement", "Urinary diversion"]} lit={() => true} width={180} gap={44} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function UiGlassRow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Drinking less can make leaks worse", "6 to 8 glasses a day, but no more", "Coffee has the biggest effect", "Alcohol makes you pee more often", "Triggers vary from person to person"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Drinks" title="Drink steadily, not less" label="Drinks, caffeine and the bladder" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A row of glasses through the day, coffee swapped for decaf, and drinks that can irritate the bladder">
      {at < 2 && Array.from({ length: 8 }, (_, index) => <Tumbler key={index} x={26 + index * 38} y={74} scale={1.1}
        full={at === 0 ? (index < 2 ? 0.8 : 0.08) : 0.8} fill={at === 1 && index < 6 ? INK : SOFT} />)}
      {at === 0 && <><W x={160} y={130} size={11}>It reduces the bladder's capacity</W><W x={160} y={152} size={10.5}>and can cause constipation</W></>}
      {at === 1 && <><W x={160} y={128} size={13}>6 to 8 glasses a day</W><W x={160} y={152} size={10.5}>Less in the hours before bed</W></>}
      {at === 2 && <>
        <Mug x={62} y={82} /><W x={66} y={122} size={10.5}>Coffee</W>
        <Arrow d="M98 82 H130" head="M124 76 L131 82 L124 88" />
        <Box x={176} y={82} w={76} text="Decaf" lit />
        <W x={266} y={76} size={10.5}>Water or</W><W x={266} y={92} size={10.5}>herbal tea</W>
        {["Tea", "Fizzy drinks", "Hot chocolate"].map((label, index) => <Box key={label} x={60 + index * 100} y={156} w={90} text={label} size={10} dim />)}
      </>}
      {at === 3 && <>
        <WineGlass x={70} y={88} scale={1.6} /><W x={70} y={140} size={10.5}>Alcohol</W>
        <Stack x={130} y={44} labels={["Limit: 14 units a week", "Diet drinks", "Citrus juices"]} lit={index => index === 0} width={170} gap={38} />
      </>}
      {at === 4 && <>
        <circle cx="80" cy="92" r="36" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="80" cy="92" r="24" fill="none" stroke={LINE} strokeWidth="2" />
        <W x={80} y={96} size={10.5}>Curry</W>
        <W x={80} y={150} size={10.5}>Spicy and acidic food</W>
        <Bubble x={232} y={70} text="Now and again is fine" width={150} />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function UiProductShelf(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Products help while you wait", "Thin, discreet pads for men and women", "Some men find female pads fit better", "Help at night and when out", "You may get products on the NHS"];
  const notes = ["Not a treatment, but a help", "They keep your skin dry", "Drip collectors and urinary sheaths", "Washable bed pads soak up leaks", "Ask your GP about the continence service"];
  const lit = [[0, 1, 2, 3, 4], [0, 1], [2, 0], [3, 4], [0, 1, 2, 3, 4]][at];
  const on = (index: number) => lit.includes(index);
  const f = (index: number) => on(index) ? INK : WHITE;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Products" title="Help while treatment works" label="Pads and products" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A shelf of continence products: a pad, pull-up pants, a urinary sheath bag, a bed pad and a handheld urinal">
      <W x={160} y={44} size={10.5}>{notes[at]}</W>
      <path d="M12 142 H308" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <g opacity={on(0) ? 1 : 0.4}><rect x="28" y="80" width="24" height="58" rx="12" fill={f(0)} stroke={INK} strokeWidth="2.5" /><rect x="34" y="90" width="12" height="38" rx="6" fill={SOFT} /></g>
      <g opacity={on(1) ? 1 : 0.4}><path d="M76 94 H124 L120 116 Q108 118 104 138 H96 Q92 118 80 116 Z" fill={f(1)} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /></g>
      <g opacity={on(2) ? 1 : 0.4}><path d="M160 84 V100" stroke={INK} strokeWidth="3" /><rect x="146" y="100" width="28" height="38" rx="7" fill={f(2)} stroke={INK} strokeWidth="2.5" /><path d="M146 112 H136 M174 112 H184" stroke={INK} strokeWidth="2.5" strokeLinecap="round" /></g>
      <g opacity={on(3) ? 1 : 0.4}><rect x="196" y="118" width="48" height="20" rx="4" fill={f(3)} stroke={INK} strokeWidth="2.5" /><path d="M212 118 V138 M228 118 V138" stroke={on(3) ? WHITE : LINE} strokeWidth="2" /></g>
      <g opacity={on(4) ? 1 : 0.4}><rect x="268" y="92" width="24" height="46" rx="8" fill={f(4)} stroke={INK} strokeWidth="2.5" /><rect x="286" y="82" width="10" height="16" rx="3" fill={INK} /><path d="M268 102 q-12 8 0 20" stroke={INK} strokeWidth="3" fill="none" /></g>
      {["Pad", "Pants", "Sheath", "Bed pad", "Urinal"].map((label, index) => <W key={label} x={40 + index * 60} y={162} size={10}>{label}</W>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function UiDayBag(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Planning makes a real difference", "Look up public toilets before you go", "If things go wrong, most do not notice", "Plan stops; split supplies across bags", "Toilet breaks are a right in UK law"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Going out" title="A small kit, a big freedom" label="Going out with confidence" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A route with toilet stops, a toilet card and key, a small kit bag, a car and a work locker">
      {at === 0 && <>
        <path d="M18 170 C90 170, 70 96, 160 104 S250 70, 302 56" stroke={LINE} strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M18 170 C90 170, 70 96, 160 104 S250 70, 302 56" stroke={WHITE} strokeWidth="2" fill="none" strokeDasharray="8 8" />
        <Pin x={160} y={104} lit /><Pin x={300} y={56} lit />
        <W x={150} y={40} size={11}>Plan toilet breaks</W>
      </>}
      {at === 1 && <><Key x={40} y={92} s={0.9} /><Stack x={120} y={40} labels={["Urgent toilet card", "National Key Scheme", "Toilet Map UK"]} lit={index => index === 0} width={186} gap={40} /></>}
      {at === 2 && <>
        <rect x="30" y="92" width="90" height="64" rx="10" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M54 92 V80 Q75 62 96 80 V92" stroke={INK} strokeWidth="4" fill="none" />
        <Stack x={150} y={46} labels={["Spare pads", "Underwear", "Wet wipes"]} lit={() => true} width={150} gap={36} />
      </>}
      {at === 3 && <>
        <path d="M44 100 L56 80 H96 L108 100 Z" fill={SOFT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="24" y="100" width="104" height="30" rx="10" fill={INK} />
        <circle cx="50" cy="132" r="10" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="102" cy="132" r="10" fill={WHITE} stroke={INK} strokeWidth="3" />
        <Stack x={150} y={40} labels={["Frequent stops", "Spares in the car", "Seat near the toilet"]} lit={index => index === 0} width={156} gap={36} />
      </>}
      {at === 4 && <>
        <rect x="34" y="44" width="72" height="130" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M48 60 H92 M48 68 H92 M48 76 H92" stroke={LINE} strokeWidth="2.5" />
        <rect x="90" y="104" width="6" height="20" rx="3" fill={INK} />
        <Stack x={134} y={40} labels={["Spares in a locker", "Keep drinking water", "Confide, if it helps"]} lit={index => index === 0} width={172} gap={38} />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function UiTwoChairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Many find it hard to talk about", "Choose a GP you feel comfortable with", "Do not worry if you get emotional", "Telling anyone is entirely up to you", "Bladder and mood affect each other"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Talking about it" title="Saying it out loud" label="Talking about it" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two chairs facing each other, for talking to a GP or a friend, and ways to look after your mood">
      <Chair x={70} y={156} /><Person x={70} y={142} scale={1.1} />
      {at !== 4 && <Chair x={250} y={156} flip />}
      {(at === 1 || at === 2) && <Person x={250} y={142} scale={1.1} fill={SOFT} />}
      {at === 3 && <Person x={250} y={142} scale={1.1} fill={GOLD} />}
      {at === 0 && <W x={200} y={70} size={10.5}>60 to 80% never sought advice</W>}
      {at === 1 && <><rect x="86" y="124" width="24" height="16" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={160} y={56} size={11}>Write down what to say</W></>}
      {at === 2 && <Bubble x={170} y={58} text="How it affects my life" width={160} />}
      {at === 3 && <W x={160} y={60} size={11}>Few people regret telling</W>}
      {at === 4 && <Stack x={130} y={34} labels={["Mindfulness", "Talk to a friend", "Go for a walk"]} lit={index => index === 1} width={176} gap={36} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Enlarged prostate =====================================================================================

function BphWalnutTube(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A walnut-size gland under the bladder", "Benign means not cancer", "Most common in men over 50", "Hormone changes with age may cause it", "Many live with it without treatment"];
  const big = at > 0;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A gland that grows with age" label="What an enlarged prostate is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The bladder with the prostate below it and the urethra running through, the prostate growing larger">
      <Anatomy x={80} y={54} r={big ? 28 : 18} narrow={big} />
      {at === 0 && <>
        <path d="M114 60 H130 M98 116 H130 M85 146 H130" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
        <W x={134} y={64} size={10.5} anchor="start">Bladder</W><W x={134} y={120} size={10.5} anchor="start">Prostate</W><W x={134} y={150} size={10.5} anchor="start">Urethra</W>
      </>}
      {at === 1 && <><Box x={246} y={52} w={124} text="BPE" lit /><W x={246} y={84} size={10.5}>Enlargement</W><Box x={246} y={118} w={124} text="BPH" /><W x={246} y={150} size={10.5}>More cells</W></>}
      {at === 2 && <><Bar x={186} y={56} w={120} label="By 65" note="Half" value={0.5} /><Bar x={186} y={112} w={120} label="At 90" note="90 in 100" value={0.9} /></>}
      {at === 3 && <Stack x={182} y={46} labels={["Hormones change", "Family history", "Obesity, diabetes"]} lit={index => index === 0} width={128} gap={36} size={10} />}
      {at === 4 && <Stack x={178} y={46} labels={["Not cancer", "No extra cancer risk", "Help if you need it"]} lit={index => index < 2} width={132} gap={36} size={10} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BphFlowSigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Mainly problems with peeing", "Over 6 to 8 times a day is abnormal", "Symptoms usually develop slowly", "Other things can cause these too", "Urgent GP appointment or NHS 111"];
  const lit = (index: number) => at === 0 || at === 2 || (at === 1 && (index === 2 || index === 3));
  const cx = (index: number) => 37 + index * 62;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Weak flow, rushing, broken nights" label="Symptoms of an enlarged prostate" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five tiles for the main symptoms: a weak flow, stopping and starting, going often, nights and not emptying">
      {["Weak", "Stop-start", "Often", "Nights", "Not empty"].map((label, index) => <g key={label} opacity={lit(index) ? 1 : 0.4}>
        <rect x={cx(index) - 29} y="24" width="58" height="72" rx="10" fill={lit(index) ? TINT : WHITE} stroke={INK} strokeWidth="2" />
        <W x={cx(index)} y={114} size={10}>{label}</W>
      </g>)}
      <g opacity={lit(0) ? 1 : 0.4}><path d={`M${cx(0)} 34 V66`} stroke={INK} strokeWidth="1.5" /><Drop x={cx(0)} y={82} r={4} /></g>
      <g opacity={lit(1) ? 1 : 0.4}><path d={`M${cx(1)} 34 V88`} stroke={INK} strokeWidth="4" strokeDasharray="8 7" /></g>
      <g opacity={lit(2) ? 1 : 0.4}><Clock x={cx(2)} y={60} r={20} hand={2} /></g>
      <g opacity={lit(3) ? 1 : 0.4}><Moon x={cx(3)} y={60} r={18} /></g>
      <g opacity={lit(4) ? 1 : 0.4}><Bladder x={cx(4)} y={56} s={0.55} level={0.6} /></g>
      {at === 0 && <W x={160} y={150} size={10.5}>Hard to start, dribbling, sudden urges</W>}
      {at === 1 && ["Frequency", "Urgency", "Hesitancy", "Nocturia"].map((label, index) => <Box key={label} x={45 + index * 75} y={152} w={70} text={label} size={10} lit={index === 0 || index === 3} />)}
      {at === 2 && <><path d="M24 178 C100 176, 200 164, 296 142" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" /><W x={120} y={148} size={10.5}>Severity is not about size</W></>}
      {at === 3 && ["Cold weather", "Anxiety", "Some medicines"].map((label, index) => <Box key={label} x={58 + index * 102} y={152} w={92} text={label} size={10} />)}
      {at === 4 && <Box x={160} y={152} w={260} text="Blood, pain, or cannot pee at all?" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BphTwoZones(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["No extra risk of prostate cancer", "Both can change how you pee", "Get urinary symptoms checked by a GP", "Worried about risk? Speak to a GP", "A high PSA does not mean cancer"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Is it cancer?" title="Not cancer, but worth a check" label="Is it cancer?" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A cross-section of the prostate, its inner part where enlargement starts and its outer part where cancer usually starts">
      {at !== 3 && <>
        <ellipse cx="88" cy="96" rx="64" ry="52" fill={WHITE} stroke={at === 1 ? GOLD : INK} strokeWidth={at === 1 ? 5 : 3} strokeDasharray={at === 1 ? "9 6" : undefined} />
        <ellipse cx="88" cy="88" rx="34" ry="28" fill={at === 0 ? INK : TINT} stroke={INK} strokeWidth="2.5" />
        <circle cx="88" cy="88" r="6" fill={WHITE} stroke={INK} strokeWidth="2" />
      </>}
      {at === 1 && <W x={88} y={172} size={10.5}>Outer part</W>}
      {at === 0 && <Stack x={176} y={50} labels={["Not caused by cancer", "No extra risk"]} lit={() => true} width={134} gap={40} size={10} />}
      {at === 1 && <>
        <W x={244} y={66} size={10.5}>Cancer usually starts</W><W x={244} y={84} size={10.5}>in the outer part</W>
        <W x={244} y={124} size={10.5}>Both can change</W><W x={244} y={142} size={10.5}>how you pee</W>
      </>}
      {at === 2 && <Stack x={176} y={46} labels={["Symptoms changed?", "Getting worse?", "Not feeling normal?"]} lit={() => false} width={134} gap={36} size={10} />}
      {at === 3 && <Stack x={30} y={40} labels={["Age: mostly over 50", "Black African or African Caribbean", "Family history"]} lit={() => true} width={260} gap={40} />}
      {at === 4 && <>
        <Box x={240} y={52} w={136} text="High PSA" />
        <Arrow d="M240 68 V86" head="M234 80 L240 87 L246 80" />
        <Box x={240} y={106} w={136} text="More tests" lit />
        <W x={240} y={146} size={10.5}>Raised in 50 to 60%</W><W x={240} y={162} size={10.5}>of enlarged prostates</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BphTestPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Questions, and a check of the prostate", "A record of drinks and toilet visits", "Checks for blood, infection, kidneys", "No cycling or exercise for 48 hours", "Flow tests, scans and a camera test"];
  const lit = [[0], [1], [2, 3], [3], [4]][at];
  const x = (index: number) => 32 + index * 64;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="A diary, a sample, a conversation" label="Tests and the PSA question" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path of tests from the GP surgery to the hospital: questions, a diary, a urine sample, a PSA blood test and a flow test">
      <path d="M32 62 H288" stroke={LINE} strokeWidth="4" />
      {["GP", "Diary", "Urine", "PSA", "Hospital"].map((label, index) => <g key={label} opacity={lit.includes(index) ? 1 : 0.45}>
        <circle cx={x(index)} cy="62" r="24" fill={lit.includes(index) ? TINT : WHITE} stroke={INK} strokeWidth={lit.includes(index) ? 3 : 2} />
        <W x={x(index)} y={104} size={10.5}>{label}</W>
      </g>)}
      <g opacity={lit.includes(0) ? 1 : 0.45}><Person x={x(0)} y={70} scale={0.55} /></g>
      <g opacity={lit.includes(1) ? 1 : 0.45}><rect x={x(1) - 11} y="48" width="22" height="28" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><path d={`M${x(1) - 6} 56 H${x(1) + 6} M${x(1) - 6} 62 H${x(1) + 6} M${x(1) - 6} 68 H${x(1) + 3}`} stroke={INK} strokeWidth="2" /></g>
      <g opacity={lit.includes(2) ? 1 : 0.45}><rect x={x(2) - 9} y="54" width="18" height="22" rx="4" fill={SOFT} stroke={INK} strokeWidth="2" /><rect x={x(2) - 11} y="47" width="22" height="7" rx="2" fill={INK} /></g>
      <g opacity={lit.includes(3) ? 1 : 0.45}><rect x={x(3) - 6} y="44" width="12" height="38" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x={x(3) - 4} y="62" width="8" height="18" rx="4" fill={INK} /></g>
      <g opacity={lit.includes(4) ? 1 : 0.45}><path d={`M${x(4)} 48 V76 M${x(4) - 14} 62 H${x(4) + 14}`} stroke={INK} strokeWidth="6" strokeLinecap="round" /></g>
      {at === 0 && <><W x={160} y={138} size={10.5}>Symptoms, other causes, medicines</W><Box x={160} y={166} w={200} text="Rectal examination" /></>}
      {at === 1 && <><Box x={85} y={152} w={140} text="At least 3 days" lit /><Box x={235} y={152} w={140} text="Symptom score" /></>}
      {at === 2 && <><Box x={85} y={152} w={140} text="Urine sample" lit /><Box x={235} y={152} w={140} text="Kidney blood test" /></>}
      {at === 3 && <><Box x={85} y={152} w={146} text="Benefits and risks" lit size={10} /><Box x={237} y={152} w={146} text="Results in 1 to 2 weeks" size={10} /></>}
      {at === 4 && ["Flow test", "Ultrasound", "Cystoscopy"].map((label, index) => <Box key={label} x={58 + index * 102} y={152} w={96} text={label} lit={index === 0} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BphDayStrip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Lifestyle changes usually come first", "Space drinks evenly through the day", "Double voiding helps empty the bladder", "Hold on a little longer, week by week", "Some medicines can make symptoms worse"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Lifestyle" title="Small changes that ease symptoms" label="Lifestyle changes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day of evenly spaced drinks, a wait-and-try-again routine and bladder training that builds week by week">
      {at === 0 && <>
        <W x={160} y={64} size={12}>30 to 40% do not get worse</W>
        {Array.from({ length: 10 }, (_, index) => <Person key={index} x={34 + index * 28} y={134} scale={0.62} fill={index < 3 ? INK : index === 3 ? GOLD : SOFT} />)}
      </>}
      {at === 1 && <>
        <path d="M24 102 H296" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
        {[40, 80, 120, 160, 200].map(x => <Tumbler key={x} x={x} y={80} scale={0.9} full={0.7} fill={INK} />)}
        <Mug x={258} y={80} /><Cross x={262} y={80} size={1.6} />
        <W x={24} y={126} size={10} anchor="start">Morning</W><W x={296} y={126} size={10} anchor="end">Evening</W>
        <W x={160} y={160} size={11}>3 to 4 pints a day</W>
      </>}
      {at === 2 && <>
        {["Pee", "Wait a moment", "Try again"].map((label, index) => <Box key={label} x={56 + index * 104} y={96} w={88} text={label} size={10} lit={index === 2} />)}
        <Arrow d="M102 96 H112" head="M107 91 L113 96 L107 101" /><Arrow d="M206 96 H216" head="M211 91 L217 96 L211 101" />
        <W x={160} y={148} size={10.5}>Relax; do not strain or push</W>
      </>}
      {at === 3 && <>
        <W x={160} y={40} size={11}>At least 6 weeks</W>
        {Array.from({ length: 6 }, (_, index) => <rect key={index} x={40 + index * 44} y={150 - (14 + index * 14)} width="30" height={14 + index * 14} rx="5" fill={index === 5 ? GOLD : INK} />)}
        <W x={55} y={168} size={10.5}>Week 1</W><W x={275} y={168} size={10.5}>Week 6</W>
      </>}
      {at === 4 && <>
        <Stack x={24} y={40} labels={["Enough fibre", "Healthy weight", "Regular exercise"]} lit={() => true} width={136} gap={36} />
        <Pill x={240} y={72} /><W x={240} y={110} size={10.5}>Check other</W><W x={240} y={126} size={10.5}>medicines</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BphRelaxShrink(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Benefits and side effects explained", "Tamsulosin relaxes the muscle", "Shrinks the prostate, slowly", "Some need both types together", "Regular check-ups, often for years"];
  const tops = ["For moderate or severe symptoms", "Hours or days to start working", "Up to 6 months to work fully", "Both together for larger prostates", "Talk to a doctor before stopping"];
  const leftLit = at === 1 || at === 3, rightLit = at === 2 || at === 3;
  const loose = leftLit, pinch = loose ? 0 : 5, shrunk = at >= 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Relax the muscle, or shrink the gland" label="Medicines for an enlarged prostate" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two panels: a tight muscle ring around the urethra loosening, and the prostate shrinking slowly">
      <W x={160} y={32} size={11}>{tops[at]}</W>
      <g opacity={leftLit || at === 0 || at === 4 ? 1 : 0.45}>
        <rect x="14" y="46" width="136" height="100" rx="12" fill={leftLit ? TINT : WHITE} stroke={INK} strokeWidth="2" />
        <path d={`M74 56 V86 Q${74 + pinch} 96 74 106 V136 H90 V106 Q${90 - pinch} 96 90 86 V56 Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <ellipse cx="82" cy="96" rx={loose ? 24 : 14} ry="9" fill="none" stroke={GOLD} strokeWidth="5" />
        <W x={82} y={166} size={10.5}>Alpha blockers</W>
      </g>
      <g opacity={rightLit || at === 0 || at === 4 ? 1 : 0.45}>
        <rect x="170" y="46" width="136" height="100" rx="12" fill={rightLit ? TINT : WHITE} stroke={INK} strokeWidth="2" />
        {shrunk && <ellipse cx="238" cy="96" rx="38" ry="28.5" fill="none" stroke={SOFT} strokeWidth="2.5" strokeDasharray="6 5" />}
        <ellipse cx="238" cy="96" rx={shrunk ? 26 : 38} ry={shrunk ? 19.5 : 28.5} fill={SOFT} stroke={INK} strokeWidth="2.5" />
        <rect x="234" y="56" width="8" height="80" fill={WHITE} stroke={INK} strokeWidth="2" />
        <W x={238} y={166} size={10.5}>Shrinking medicines</W>
      </g>
      {at === 3 && <W x={160} y={102} size={18}>+</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BphOpenChannel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["If medicines have not helped", "TURP: the most common operation", "Not all are available on the NHS", "No heavy lifting for around 6 weeks", "Your doctor will talk through risks"];
  const w = 6, p = at === 0 ? 1.5 : 11;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Surgery" title="Opening the channel again" label="Surgery and procedures" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The prostate with a narrowed channel, then the channel opened after surgery, beside the options and the recovery">
      <ellipse cx="78" cy="100" rx="50" ry="40" fill={SOFT} stroke={INK} strokeWidth="3" />
      <path d={`M${78 - w} 44 V60 Q${78 - p} 100 ${78 - w} 140 V160 H${78 + w} V140 Q${78 + p} 100 ${78 + w} 60 V44 Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {at === 0 && <>
        {Array.from({ length: 10 }, (_, index) => <Person key={index} x={170 + (index % 5) * 30} y={index < 5 ? 82 : 136} scale={0.6} fill={index === 0 ? INK : SOFT} />)}
        <W x={230} y={170} size={10.5}>About 1 in 10 men</W>
      </>}
      {at === 1 && <Stack x={152} y={40} labels={["Thin tube, no stitches", "Around an hour", "Catheter afterwards"]} lit={index => index === 0} width={156} gap={36} />}
      {at === 2 && <Stack x={152} y={30} labels={["HoLEP laser", "GreenLight laser", "Rezūm steam", "UroLift implants"]} lit={() => false} width={156} gap={32} />}
      {at === 3 && <Stack x={152} y={40} labels={["Home: 1 to 4 days", "Activities: 2 to 4 weeks", "Healed: up to 6 weeks"]} lit={index => index === 2} width={156} gap={36} size={10} />}
      {at === 4 && <Stack x={152} y={40} labels={["Still hard to pee", "No semen", "Erection problems"]} lit={() => false} width={156} gap={36} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BphUrgentSigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["It needs treating straight away", "Pee may look pink, red or brown", "A catheter can drain the bladder", "It can harm the kidneys if untreated", "Know who to call straight away"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Urgent help" title="When you cannot pee at all" label="When you cannot pee" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A full bladder with its outlet blocked by the prostate, beside who to contact straight away">
      <Bladder x={56} y={80} s={at === 3 ? 1.15 : 1} level={[0.95, 0.85, 0.3, 0.9, 0.6][at]} />
      <ellipse cx="56" cy="134" rx="18" ry="13" fill={SOFT} stroke={INK} strokeWidth="2.5" />
      {at === 0 && <Cross x={56} y={134} size={1.1} />}
      {at === 2 && <><path d="M56 147 V170 Q56 176 64 176 H80" stroke={INK} strokeWidth="3" fill="none" /><rect x="80" y="160" width="22" height="28" rx="5" fill={SOFT} stroke={INK} strokeWidth="2" /></>}
      {at === 0 && <Stack x={112} y={40} labels={["Sudden and painful", "Call your doctor or nurse", "Or go to A&E"]} lit={index => index > 0} width={196} gap={38} />}
      {at === 1 && <>
        <Stack x={112} y={30} labels={["Blood in your pee", "Pain when peeing", "Cannot pee at all"]} lit={() => false} width={196} gap={34} />
        <Box x={210} y={152} w={196} text="Urgent GP or NHS 111" lit />
      </>}
      {at === 2 && <Stack x={112} y={50} labels={["A catheter drains it", "An alpha blocker may help"]} lit={index => index === 0} width={196} gap={40} />}
      {at === 3 && <Stack x={112} y={40} labels={["Weak flow", "Leaks at night", "Swollen tummy"]} lit={() => false} width={196} gap={36} />}
      {at === 4 && <Stack x={112} y={40} labels={["After TURP: GP or NHS 111", "Catheter: GP or district nurse", "Painful erection: 999 or A&E"]} lit={() => true} width={196} gap={38} size={10} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BphNightClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["It can make you more tired by day", "More than a third at night is too much", "Only a few sips if you wake up", "Swollen ankles? Put your feet up", "If simple steps fail, ask your GP"];
  // A 24-hour dial with noon at the top and midnight at the bottom; the night runs from 10pm to 6am.
  const pt = (deg: number, r: number) => [80 + r * Math.sin(deg * Math.PI / 180), 100 - r * Math.cos(deg * Math.PI / 180)];
  const [sx, sy] = pt(120, 48), [ex, ey] = pt(120, 66);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Nights" title="Fewer trips in the night" label="Getting up at night less" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A 24-hour clock with drinks in the daytime, a stop two hours before bed, and the night">
      <circle cx="80" cy="100" r="60" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M80 100 L110 151.96 A60 60 0 0 1 20 100 Z" fill={INK} opacity=".85" />
      <Moon x={60} y={128} r={9} fill={WHITE} />
      <W x={80} y={32} size={10}>Noon</W><W x={80} y={178} size={10}>Midnight</W>
      {at === 0 && [170, 200, 236].map(deg => { const [cx, cy] = pt(deg, 46); return <circle key={deg} cx={cx} cy={cy} r="5" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />; })}
      {at === 2 && <>
        {[290, 320, 350, 20, 50, 80].map(deg => { const [cx, cy] = pt(deg, 44); return <circle key={deg} cx={cx} cy={cy} r="5" fill={SOFT} />; })}
        <path d={`M${sx} ${sy} L${ex} ${ey}`} stroke={GOLD} strokeWidth="5" strokeLinecap="round" />
      </>}
      {at === 0 && <Stack x={160} y={40} labels={["Poor sleep patterns", "Drinks before bed", "Bladder or prostate"]} lit={() => false} width={150} gap={36} />}
      {at === 1 && <>
        <rect x="164" y="84" width="140" height="24" rx="6" fill={SOFT} /><rect x="257" y="84" width="47" height="24" rx="6" fill={INK} />
        <W x={210} y={74} size={10.5}>Day</W><W x={280} y={74} size={10.5}>Night</W>
        <W x={235} y={136} size={10.5}>Over a third at night:</W><W x={235} y={154} size={10.5}>nocturnal polyuria</W>
      </>}
      {at === 2 && <Stack x={160} y={40} labels={["Drink well by day", "Stop 2 hours before bed", "Watery food earlier"]} lit={index => index === 1} width={150} gap={36} size={10} />}
      {at === 3 && <Stack x={160} y={40} labels={["Feet up in the evening", "Walk more", "Wait, then try again"]} lit={index => index === 0} width={150} gap={36} size={10} />}
      {at === 4 && <Stack x={160} y={40} labels={["See your GP", "A water tablet", "Desmopressin"]} lit={index => index === 0} width={150} gap={36} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BphTreatmentCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Erection problems are very common", "Talk to a doctor if it bothers you", "Most common in the first year", "Sex will still feel the same", "Treatment can usually help"];
  const bottoms = ["Erections and symptoms often go together", "Little or no semen: harmless", "Less interest in sex, erection problems", "Often no semen afterwards", "PDE-5 medicines and healthy changes"];
  const lit = (index: number) => at === 4 || at === index + 1;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Sex and treatment" title="Treatment, sex and what to expect" label="Sex, medicines and surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three cards for tamsulosin, finasteride and TURP, each with how it can affect sex">
      {["Tamsulosin", "Finasteride", "TURP"].map((label, index) => { const x = 58 + index * 102; return <g key={label} opacity={lit(index) ? 1 : 0.45}>
        <rect x={x - 48} y="26" width="96" height="96" rx="12" fill={lit(index) ? TINT : WHITE} stroke={INK} strokeWidth={lit(index) ? 3 : 2} />
        <W x={x} y={48} size={10.5}>{label}</W>
        {index < 2 ? <g transform={`translate(${x} 86) scale(1.3)`}><Pill x={0} y={0} fill={index === 0 ? INK : SOFT} /></g>
          : <path d={`M${x} 70 V102 M${x - 16} 86 H${x + 16}`} stroke={INK} strokeWidth="7" strokeLinecap="round" />}
      </g>; })}
      <W x={160} y={152} size={10.5}>{bottoms[at]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BphReviewCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Symptoms can be greatly improved", "Tamsulosin checked every few months", "Changes? Get checked by a GP", "Catheters: usually changed at 12 weeks", "Think back over the last month"];
  const marks = [[0, 4, 8], [0, 3, 6, 9], [0, 4, 8], [0, 3, 6, 9], [8]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Checks" title="Reviews that keep treatment working" label="Regular checks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year calendar with review dates marked, beside what is checked at each review">
      {"JFMAMJJASOND".split("").map((month, index) => { const x = 18 + (index % 4) * 34, y = 30 + Math.floor(index / 4) * 36, on = marks.includes(index); return <g key={index}>
        <rect x={x} y={y} width="30" height="30" rx="6" fill={on ? (at === 3 ? GOLD : INK) : WHITE} stroke={INK} strokeWidth="1.8" />
        <W x={x + 15} y={y + 19} size={10} fill={on ? WHITE : TEXT}>{month}</W>
      </g>; })}
      {at === 0 && <Stack x={162} y={50} labels={["GP or hospital", "Tests repeated"]} lit={index => index === 1} width={146} gap={40} />}
      {at === 1 && <><Box x={235} y={56} w={146} text="PSA tests" lit /><W x={235} y={96} size={10.5}>Finasteride and</W><W x={235} y={112} size={10.5}>dutasteride lower PSA</W></>}
      {at === 2 && <>
        <Box x={235} y={60} w={146} text="No better?" /><Box x={235} y={96} w={146} text="Side effects?" />
        <Arrow d="M235 112 V122" head="M229 117 L235 123 L241 117" />
        <Box x={235} y={140} w={146} text="A different treatment" lit size={10} />
      </>}
      {at === 3 && <>
        <circle cx="196" cy="66" r="14" fill={GOLD} opacity=".35" stroke={INK} strokeWidth="2" /><W x={220} y={70} size={10.5} anchor="start">Pale yellow</W>
        <circle cx="196" cy="106" r="14" fill={INK} stroke={INK} strokeWidth="2" /><W x={220} y={110} size={10.5} anchor="start">Dark or cloudy</W>
        <W x={235} y={150} size={10.5}>Tell your doctor or nurse</W>
      </>}
      {at === 4 && <Stack x={162} y={40} labels={["Symptom score", "Drinks diary", "All your medicines"]} lit={() => true} width={146} gap={36} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BphRoadStops(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["It affects everyone differently", "Plan where the toilets are on the way", "A Radar key opens accessible toilets", "Keep a change of clothes with you", "Pack extras in your hand luggage"];
  const road = "M14 74 C70 34, 120 104, 176 66 S270 40, 306 70";
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Everyday life" title="Plan the toilets, enjoy the day" label="Toilets, travel and everyday life" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A road with toilet stops, a Radar key, a toilet card, a bag of spares and a suitcase">
      {at === 0 && <>
        <Person x={160} y={104} scale={1.2} />
        {["Work", "Driving", "Outdoors", "Events"].map((label, index) => <Box key={label} x={42 + index * 76} y={152} w={72} text={label} size={10} />)}
      </>}
      {at === 1 && <>
        <path d={road} stroke={LINE} strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d={road} stroke={WHITE} strokeWidth="2" fill="none" strokeDasharray="8 8" />
        <Pin x={63} y={62} lit /><Pin x={176} y={66} lit /><Pin x={284} y={54} lit />
        <W x={160} y={130} size={11}>Go before you set off</W>
        <W x={160} y={154} size={10.5}>Service stations, toilet finder apps</W>
      </>}
      {at === 2 && <>
        <Key x={62} y={96} />
        <W x={100} y={136} size={10.5}>Radar key</W>
        <rect x="176" y="66" width="124" height="64" rx="8" fill={INK} />
        <W x={238} y={94} size={11} fill={WHITE}>Just Can't</W><W x={238} y={110} size={11} fill={WHITE}>Wait card</W>
        <W x={238} y={150} size={10.5}>Digital version free</W>
      </>}
      {at === 3 && <>
        <rect x="26" y="90" width="100" height="56" rx="14" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M54 90 Q76 64 98 90" stroke={INK} strokeWidth="4" fill="none" />
        <Stack x={150} y={40} labels={["Pads or pants", "Urinary sheath", "Change of clothes"]} lit={index => index === 2} width={156} gap={36} />
      </>}
      {at === 4 && <>
        <rect x="30" y="74" width="84" height="90" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="58" y="62" width="28" height="12" rx="4" fill="none" stroke={INK} strokeWidth="3" />
        <path d="M52 74 V164 M92 74 V164" stroke={SOFT} strokeWidth="4" />
        <Stack x={150} y={40} labels={["Spares in hand luggage", "Sunflower lanyard", "Tell your insurer"]} lit={index => index === 0} width={156} gap={36} size={10} />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function BladderPieceView({ piece, ...props }: { piece: BladderPiece } & PieceProps) {
  switch (piece) {
    case "ui-bladder-drop": return <UiBladderDrop {...props} />;
    case "ui-three-leaks": return <UiThreeLeaks {...props} />;
    case "ui-hammock-press": return <UiHammockPress {...props} />;
    case "ui-diary-days": return <UiDiaryDays {...props} />;
    case "ui-squeeze-hold": return <UiSqueezeHold {...props} />;
    case "ui-wait-clock": return <UiWaitClock {...props} />;
    case "ui-calm-muscle": return <UiCalmMuscle {...props} />;
    case "ui-two-paths": return <UiTwoPaths {...props} />;
    case "ui-glass-row": return <UiGlassRow {...props} />;
    case "ui-product-shelf": return <UiProductShelf {...props} />;
    case "ui-day-bag": return <UiDayBag {...props} />;
    case "ui-two-chairs": return <UiTwoChairs {...props} />;
    case "bph-walnut-tube": return <BphWalnutTube {...props} />;
    case "bph-flow-signs": return <BphFlowSigns {...props} />;
    case "bph-two-zones": return <BphTwoZones {...props} />;
    case "bph-test-path": return <BphTestPath {...props} />;
    case "bph-day-strip": return <BphDayStrip {...props} />;
    case "bph-relax-shrink": return <BphRelaxShrink {...props} />;
    case "bph-open-channel": return <BphOpenChannel {...props} />;
    case "bph-urgent-signs": return <BphUrgentSigns {...props} />;
    case "bph-night-clock": return <BphNightClock {...props} />;
    case "bph-treatment-cards": return <BphTreatmentCards {...props} />;
    case "bph-review-calendar": return <BphReviewCalendar {...props} />;
    case "bph-road-stops": return <BphRoadStops {...props} />;
  }
}
