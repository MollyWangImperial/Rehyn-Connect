import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { CARDIO_PIECES, type CardioPiece } from "@/content/cardio-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { MemoryBand, useSection } from "./NewsMemoryPieces";
import { Chips, Clock, credit, GOLD, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Low blood pressure, Coronary heart disease and Heart failure pages' own pieces (content/cardio-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Heart & lungs pieces. Each is steered by the card's sections; pictures
// show ideas, never anyone's own heart, lungs or results.

export const isCardioPiece = (piece: NewsPiece): piece is CardioPiece => (CARDIO_PIECES as readonly string[]).includes(piece);

// ==== Shared parts ===========================================================================================

/** A labelled rounded box centred on (x, y); `lit` boxes are filled, `faint` ones are pale. */
const Box = ({ x, y, w, text, lit = false, faint = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; faint?: boolean; h?: number; size?: number }) =>
  <g opacity={faint ? 0.35 : 1}><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ children, y = 206 }: { children: ReactNode; y?: number }) => <W x={160} y={y} size={11}>{children}</W>;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** A gold cross over something to steer clear of. */
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
/** A drinking glass, its top centred on (x, y), filled to `level`. */
const Glass = ({ x, y, level = 1 }: { x: number; y: number; level?: number }) =>
  <g><rect x={x - 8} y={y + 34 - 30 * level} width="16" height={30 * level} fill={SOFT} /><path d={`M${x - 11} ${y} L${x - 8} ${y + 34} H${x + 8} L${x + 11} ${y}`} fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /></g>;
const Cup = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 12} y={y - 13} width="24" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 12} ${y - 7} h5 a6 6 0 0 1 0 12 h-5`} fill="none" stroke={INK} strokeWidth="2.5" /></g>;
const WineGlass = ({ x, y }: { x: number; y: number }) =>
  <g fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"><path d={`M${x - 13} ${y - 18} H${x + 13} Q${x + 13} ${y + 2} ${x} ${y + 4} Q${x - 13} ${y + 2} ${x - 13} ${y - 18} Z`} fill={WHITE} /><path d={`M${x} ${y + 4} V${y + 18} M${x - 9} ${y + 18} H${x + 9}`} /></g>;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 11} y={y - 18} width="22" height="36" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 11} r="2.2" fill={lit ? WHITE : INK} /></g>;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Moon = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={INK} />;
const Cloud = ({ x, y, s }: { x: number; y: number; s: number }) =>
  <g fill={SOFT}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
/** A car side on, from x to x + 150, its wheels centred at height y. */
const Car = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x} ${y} V${y - 22} Q${x} ${y - 30} ${x + 12} ${y - 30} L${x + 36} ${y - 54} H${x + 96} L${x + 120} ${y - 30} H${x + 138} Q${x + 150} ${y - 30} ${x + 150} ${y - 20} V${y} Z`} fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <path d={`M${x + 40} ${y - 48} H${x + 70} V${y - 34} H${x + 26} Z M${x + 78} ${y - 48} H${x + 94} L${x + 108} ${y - 34} H${x + 78} Z`} fill={TINT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <circle cx={x + 34} cy={y} r="13" fill={INK} /><circle cx={x + 116} cy={y} r="13" fill={INK} /></g>;
const Lorry = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x} y={y - 76} width="100" height="64" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" />
    <path d={`M${x + 104} ${y - 12} V${y - 54} H${x + 130} L${x + 148} ${y - 32} V${y - 12} Z`} fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <path d={`M${x + 110} ${y - 48} H${x + 128} L${x + 140} ${y - 34} H${x + 110} Z`} fill={TINT} stroke={INK} strokeWidth="2" />
    <circle cx={x + 26} cy={y} r="12" fill={INK} /><circle cx={x + 74} cy={y} r="12" fill={INK} /><circle cx={x + 126} cy={y} r="12" fill={INK} /></g>;
/** Someone lying on the floor at height y with their legs raised on a cushion; the head is at x. */
const LyingLegsUp = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 22} ${y} H${x + 132}`} stroke={LINE} strokeWidth="3" />
    <rect x={x + 72} y={y - 26} width="42" height="24" rx="6" fill={SOFT} />
    <circle cx={x} cy={y - 12} r="10" fill={INK} />
    <rect x={x + 12} y={y - 21} width="56" height="18" rx="9" fill={INK} />
    <path d={`M${x + 62} ${y - 12} L${x + 106} ${y - 34}`} stroke={INK} strokeWidth="11" strokeLinecap="round" /></g>;
/** A form with a title, from (x, y), 86 wide. */
const Form = ({ x, y, title }: { x: number; y: number; title: string }) =>
  <g><rect x={x} y={y} width="86" height="104" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={x + 43} y={y + 26} size={14} serif>{title}</W>
    {[0, 1, 2, 3].map(index => <path key={index} d={`M${x + 14} ${y + 46 + index * 14} H${x + (index === 3 ? 48 : 72)}`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}</g>;
/** A chair facing right, its seat at height y, from x to x + 44. */
const Chair = ({ x, y }: { x: number; y: number }) =>
  <path d={`M${x} ${y + 28} V${y} H${x + 44} V${y + 28} M${x} ${y} V${y - 40}`} stroke={SOFT} strokeWidth="4" fill="none" strokeLinecap="round" />;

// ==== Low blood pressure =====================================================================================

function LbpGauge(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Under 90/60mmHg counts as low", "Naturally low is often no problem", "Treatment may help if symptoms come", "Keep getting dizzy or faint? See a GP"];
  const right = [["Top: heart pushing", "Bottom: between beats", "Either one can be low"], ["Fit and healthy", "Runs in the family", "Lower heart risk"], ["Dizzy or faint", "Blurred vision", "Feeling sick", "Confused"], ["Pharmacist", "Nurse or GP", "Home monitor"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Low numbers, often no trouble" label="Low blood pressure" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A blood pressure gauge reading low, and what a low reading can mean">
      <Gauge x={84} y={112} r={58} value={0.2} />
      <W x={84} y={148} size={20} serif>90/60</W>
      <W x={84} y={166} size={10.5}>mmHg or lower</W>
      {right.map((label, index) => <Box key={label} x={232} y={(right.length === 4 ? 44 : 60) + index * 36} w={150} text={label} lit={at === 2} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LbpStandDip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Pressure can drop as you stand up", "Dizzy or faint; it passes quickly", "Ageing arteries or some medicines", "Measured lying down, then standing", "Get up slowly; cross your legs first"];
  const dip = at === 4 ? 84 : 112;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Postural hypotension" title="The dip when you stand up" label="Postural hypotension" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Lying, sitting and standing, with blood pressure dipping as you stand">
      {at !== 2 && <g opacity={at === 3 ? 0.25 : 1}>
        <W x={24} y={44} size={10.5} anchor="start">Blood pressure</W>
        <path d={`M24 70 H196 C222 70, 226 ${dip}, 244 ${dip} S272 70, 300 70`} stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>}
      {at === 2 && <><Box x={160} y={56} w={190} text="Arteries change with age" lit /><Box x={160} y={94} w={190} text="Some medicines" lit /></>}
      <circle cx="36" cy="164" r="10" fill={INK} /><rect x="48" y="156" width="54" height="17" rx="8" fill={INK} />
      <Chair x={140} y={150} />
      <Person x={162} y={146} scale={0.9} />
      <Person x={262} y={162} scale={1.1} />
      <path d="M16 178 H304" stroke={LINE} strokeWidth="3" />
      {at === 1 && <circle cx="262" cy="129" r="21" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="5 6" className={still ? undefined : "lib-why-pulse"} />}
      {at === 3 && <><Box x={70} y={128} w={92} text="1. Lying" lit /><Box x={262} y={92} w={104} text="2. Standing" lit /></>}
      {at === 4 && <><Arrow d="M100 140 Q118 124 136 134" head="M128 129 L136 134 L127 138" /><Arrow d="M192 132 Q212 116 232 128" head="M224 122 L232 128 L223 132" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LbpCauseRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots: { x: number; y: number; t: string }[] = [{ x: 70, y: 40, t: "Naturally low" }, { x: 250, y: 40, t: "Medicines" }, { x: 60, y: 112, t: "Fluids" }, { x: 260, y: 112, t: "Illness" }, { x: 160, y: 168, t: "After meals" }];
  const caps = ["Fitness, genes, or getting older", "Heart, blood pressure, water tablets", "Too little fluid, or blood loss", "Parkinson's, diabetes, pregnancy", "After eating, standing long, warmth"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Medicines, fluids, illness, or just you" label="Causes of low blood pressure" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A low blood pressure gauge with its common causes around it">
      {spots.map((spot, index) => <path key={spot.t} d={`M${spot.x} ${spot.y} L160 104`} stroke={index === at ? GOLD : LINE} strokeWidth={index === at ? 3.5 : 2.5} strokeDasharray={index === at ? undefined : "4 6"} />)}
      <Gauge x={160} y={120} r={38} value={0.22} />
      {spots.map((spot, index) => <Box key={spot.t} x={spot.x} y={spot.y} w={104} text={spot.t} lit={index === at} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LbpFaintLegs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A short blackout as pressure drops", "Standing fast, heat, too little fluid", "Dizzy, sweaty, hot or sick", "Lie down with your legs raised", "Get it checked by a GP"];
  const right = [["Blood pressure drops", "Heart may slow or pause"], ["Standing up quickly", "Being too hot", "Too little food or drink", "Upset or in pain"], ["Dizzy", "Sweating", "Warm or hot", "Feeling sick", "Vision changes"], ["Or sit, head down", "Drink some water"], ["Find the cause", "Not to be ignored"]][at];
  const top = right.length > 3 ? 36 : 70, step = right.length > 4 ? 32 : 36;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Fainting" title="Why people faint, and what to do" label="Fainting" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Someone who feels faint, and lying down with the legs raised">
      {at === 3 ? <LyingLegsUp x={34} y={178} /> : <><Person x={74} y={150} scale={1.4} fill={at === 0 ? SOFT : INK} /><path d="M30 178 H120" stroke={LINE} strokeWidth="3" /></>}
      {at === 0 && <Arrow d="M124 62 V128" head="M116 120 L124 129 L132 120" />}
      {at === 4 && <Box x={74} y={60} w={56} text="GP" lit />}
      {right.map((label, index) => <Box key={label} x={226} y={top + index * step} w={160} text={label} lit={at === 2 || (at === 4 && index === 0)} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LbpPillNotes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Some medicines can lower it too far", "Early dizziness often eases in weeks", "A GP may change the dose or the drug", "Note side effects for 2 to 3 weeks", "Talk to a doctor before stopping"];
  const tags = [{ t: "BP tablets", x: 90, y: 104 }, { t: "Antidepressants", x: 230, y: 104 }, { t: "Beta blockers", x: 90, y: 144 }, { t: "Water pills", x: 230, y: 144 }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="When your tablets push too low" label="Medicines and low blood pressure" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of tablets, and what can help when they lower blood pressure too far">
      {Array.from({ length: 7 }, (_, index) => <g key={index}><rect x={22 + index * 40} y="20" width="36" height="34" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx={40 + index * 40} cy="37" r="6" fill={at === 4 ? SOFT : INK} /></g>)}
      {at === 0 && tags.map(tag => <Box key={tag.t} x={tag.x} y={tag.y} w={128} text={tag.t} lit />)}
      {at === 1 && <>{[64, 52, 40, 28, 18, 10].map((h, index) => <rect key={index} x={50 + index * 38} y={176 - h} width="26" height={h} rx="4" fill={INK} opacity={1 - index * 0.12} />)}
        <W x={63} y={98} size={10.5}>Dizzy at first</W><W x={253} y={146} size={10.5}>Easing</W></>}
      {at === 2 && <><Person x={70} y={168} scale={1.1} /><Box x={206} y={104} w={160} text="A different dose?" /><Box x={206} y={144} w={160} text="Another medicine?" /></>}
      {at === 3 && <><rect x="60" y="76" width="200" height="106" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={160} y={98} size={10.5}>2 to 3 weeks of notes</W>
        {Array.from({ length: 21 }, (_, index) => <path key={index} d={`M${80 + (index % 7) * 26} ${118 + Math.floor(index / 7) * 20} l4 5 l8 -9`} stroke={index < 17 ? INK : LINE} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />)}</>}
      {at === 4 && <><Person x={80} y={168} scale={1.1} /><Box x={204} y={110} w={170} text="Ask your doctor first" lit /><Box x={204} y={148} w={170} text="Or your pharmacist" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LbpBedEdge(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Lying, then sitting, then standing", "Cross and uncross your legs first", "Short 10-minute strolls help", "Raise the head end of the bed", "Feel faint? Try these, or lie down"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Everyday tricks" title="Small habits, steadier days" label="Everyday tricks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Getting up slowly from bed and chair, walking, and a raised bed">
      <Chips labels={["Bed", "Chair", "Walk", "Pillows", "Faint?"]} lit={at} y={12} />
      {at === 0 && <><rect x="40" y="150" width="200" height="16" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="32" y="120" width="10" height="58" rx="3" fill={INK} /><rect x="48" y="140" width="38" height="10" rx="5" fill={SOFT} />
        <path d="M48 166 V178 M232 166 V178" stroke={INK} strokeWidth="3" />
        {["Lie", "Sit", "Stand"].map((label, index) => <Box key={label} x={74 + index * 86} y={88} w={66} text={label} lit />)}
        <Arrow d="M110 88 H122" head="M117 83 L123 88 L117 93" /><Arrow d="M196 88 H208" head="M203 83 L209 88 L203 93" /></>}
      {at === 1 && <><Chair x={96} y={150} /><Person x={118} y={140} />
        <path d="M128 150 L170 168 M128 166 L170 150" stroke={INK} strokeWidth="7" strokeLinecap="round" />
        <Box x={250} y={110} w={100} text="A few times" lit /></>}
      {at === 2 && <><Person x={100} y={164} scale={1.2} /><Clock x={220} y={104} r={30} hand={2} /><W x={220} y={158} size={11}>10 minutes</W></>}
      {at === 3 && <><path d="M40 176 L40 144 L150 176 Z" fill={SOFT} /><path d="M40 124 L230 152 V166 L40 140 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="48" y="112" width="40" height="12" rx="6" fill={SOFT} transform="rotate(8 68 118)" /><path d="M230 166 V178" stroke={INK} strokeWidth="3" />
        <Box x={244} y={88} w={124} text="Head end raised" lit /></>}
      {at === 4 && <><Person x={64} y={164} scale={1.2} />{["Cross your legs", "Rock on your toes", "Clench your fists"].map((label, index) => <Box key={label} x={204} y={76 + index * 36} w={150} text={label} lit />)}</>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LbpGlasses(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Around 2 litres through the day", "On a fluid limit? Ask your doctor", "Caffeine and alcohol can dehydrate", "Small, frequent meals", "More salt only if your doctor says"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fluids and food" title="Drink more, eat little and often" label="Fluids, salt and meals" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A row of glasses of water, smaller meals and a salt pot">
      <g opacity={at < 2 ? 1 : 0.3}>{Array.from({ length: 8 }, (_, index) => <Glass key={index} x={42 + index * 34} y={30} level={index < 6 ? 0.85 : 0.4} />)}</g>
      {at === 0 && <W x={160} y={88} size={11.5}>6 to 8 glasses a day</W>}
      {at === 1 && <><path d="M28 24 V18 H292 V24" stroke={GOLD} strokeWidth="3" fill="none" /><Box x={160} y={112} w={180} text="Your doctor's limit first" lit /></>}
      {at === 2 && <><Cup x={120} y={130} /><WineGlass x={204} y={130} /><Cross x={120} y={130} s={20} /><Cross x={204} y={130} s={20} /></>}
      {at === 3 && <><circle cx="86" cy="130" r="36" fill={WHITE} stroke={INK} strokeWidth="2.5" opacity=".4" /><Arrow d="M134 130 H166" head="M159 124 L166 130 L159 136" />
        {[200, 240, 280].map(x => <circle key={x} cx={x} cy="130" r="16" fill={WHITE} stroke={INK} strokeWidth="2.5" />)}</>}
      {at === 4 && <><rect x="104" y="104" width="32" height="54" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M108 104 Q120 88 132 104" fill={SOFT} stroke={INK} strokeWidth="2.5" />
        <circle cx="114" cy="97" r="1.8" fill={INK} /><circle cx="120" cy="94" r="1.8" fill={INK} /><circle cx="126" cy="97" r="1.8" fill={INK} />
        <Box x={230} y={124} w={150} text="Ask your doctor first" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LbpStocking(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["First, a GP looks for the cause", "Stockings help circulation; ask a GP", "A medicine change, or a new dose", "Tablets to raise it: rarely needed", "Review, lifestyle, or a pacemaker"];
  const sock = at === 1 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Treatments" title="Stockings first, tablets rarely" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A leg in a support stocking, and the other treatments">
      <path d="M58 24 L56 150 Q56 174 80 174 H118 Q128 174 120 162 L96 148 L98 24 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      {sock && <path d="M57 70 L56 150 Q56 174 80 174 H118 Q128 174 120 162 L96 148 L97 70 Z" fill={SOFT} stroke={INK} strokeWidth="3" strokeLinejoin="round" />}
      {at === 1 && [100, 132].map(y => <g key={y}><Arrow d={`M28 ${y} H48`} head={`M41 ${y - 6} L48 ${y} L41 ${y + 6}`} /><Arrow d={`M126 ${y} H106`} head={`M113 ${y - 6} L106 ${y} L113 ${y + 6}`} /></g>)}
      {at === 0 && <><circle cx="222" cy="90" r="32" fill={WHITE} stroke={INK} strokeWidth="4" /><path d="M245 113 L272 140" stroke={INK} strokeWidth="8" strokeLinecap="round" /><W x={222} y={101} size={30} serif>?</W></>}
      {at === 1 && <><Box x={222} y={80} w={150} text="Pressure on the legs" /><Box x={222} y={120} w={150} text="Ask your GP first" lit /></>}
      {at === 2 && <><Pill x={186} y={90} /><Arrow d="M210 90 H236" head="M229 84 L236 90 L229 96" /><Pill x={262} y={90} fill={SOFT} /><Box x={224} y={140} w={110} text="A new dose" lit /></>}
      {at === 3 && <><path d="M156 150 H300" stroke={INK} strokeWidth="4" strokeLinecap="round" /><rect x="170" y="112" width="24" height="38" rx="5" fill={INK} />
        {[214, 258].map(x => <rect key={x} x={x} y="112" width="24" height="38" rx="5" fill="none" stroke={LINE} strokeWidth="2.5" strokeDasharray="4 4" />)}</>}
      {at === 4 && ["Medicines review", "Lifestyle changes", "A pacemaker"].map((label, index) => <Box key={label} x={226} y={60 + index * 38} w={150} text={label} lit={index === 1} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LbpHallway(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Dizzy? Sit or lie down, drink water", "Faints can be reported as falls", "Good slippers, rails, clear floors", "Stay calm, then check for injuries", "A GP can refer you to a falls service"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Falls" title="Steady at home" label="Falls" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A safer home, and what to do about dizziness and falls">
      {at === 0 && <><Chair x={60} y={150} /><Person x={84} y={140} /><Glass x={136} y={134} level={0.7} /><path d="M30 178 H160" stroke={LINE} strokeWidth="3" />
        {["Stop", "Sit or lie down", "Drink some water"].map((label, index) => <Box key={label} x={240} y={64 + index * 36} w={130} text={label} lit />)}</>}
      {at === 1 && <>{Array.from({ length: 10 }, (_, index) => <Person key={index} x={34 + index * 28} y={104} scale={0.7} fill={index < 3 ? INK : SOFT} />)}
        <W x={160} y={146} size={11}>30 in 100 people aged 65+ who faint</W><W x={160} y={166} size={11}>report a fall instead</W></>}
      {at === 2 && <><path d="M16 178 H304" stroke={LINE} strokeWidth="3" />
        <path d="M200 140 H300 V166 Q300 178 288 178 H212 Q200 178 200 166 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M216 120 H284 M216 120 V130 M284 120 V130" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="54" cy="172" rx="13" ry="6" fill={INK} /><ellipse cx="82" cy="172" rx="13" ry="6" fill={INK} />
        <Box x={70} y={142} w={110} text="Good slippers" lit /><Box x={250} y={96} w={90} text="Grab rail" lit /><Box x={110} y={78} w={120} text="Clear the floor" lit /><Box x={250} y={50} w={116} text="Carry a phone" lit /></>}
      {at === 3 && <><g transform="translate(84 112) scale(2.2)"><Phone x={0} y={0} /></g>
        <Box x={190} y={84} w={66} text="999" lit /><W x={190} y={116} size={10.5}>Can't get up</W>
        <Box x={268} y={84} w={66} text="NHS 111" /><W x={268} y={116} size={10.5}>Pain or unwell</W></>}
      {at === 4 && <><Person x={60} y={164} scale={1.2} /><Box x={206} y={48} w={140} text="Falls service" lit />
        {["Strength and balance", "Home safety check", "Medicines review"].map((label, index) => <Box key={label} x={206} y={88 + index * 36} w={170} text={label} />)}</>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LbpSunShade(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Warmth can lower blood pressure", "Shade from 11am to 3pm, cold drinks", "Cool shower, non-slip mat, grab rail", "Do not drink too much alcohol", "Unwell after 30 minutes? Call 999"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Heat and alcohol" title="Heat, the bathroom and a drink" label="Heat, the bathroom and alcohol" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The sun, a cool shower and a drink, and staying safe in the heat">
      {at === 0 && <><Sun x={70} y={70} r={22} /><W x={70} y={124} size={10.5}>Warm weather</W><Arrow d="M108 86 Q144 100 170 116" head="M161 115 L170 116 L166 108" /><Gauge x={236} y={146} r={50} value={0.2} /></>}
      {at === 1 && <><circle cx="100" cy="112" r="56" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M100 112 L72 63.5 A56 56 0 0 1 156 112 Z" fill={GOLD} opacity=".55" />
        <path d="M100 112 V70 M100 112 L128 112" stroke={TEXT} strokeWidth="3.5" strokeLinecap="round" />
        <W x={64} y={54} size={10.5} anchor="end">11am</W><W x={164} y={116} size={10.5} anchor="start">3pm</W>
        <Box x={252} y={70} w={96} text="Shade" lit /><Box x={252} y={110} w={96} text="Cold drinks" lit /></>}
      {at === 2 && <><path d="M150 30 H112 Q98 30 98 44 V52" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" /><path d="M78 52 H118 L110 62 H86 Z" fill={INK} />
        {[86, 98, 110].map(x => <path key={x} d={`M${x} 72 V84 M${x - 2} 96 V108 M${x} 120 V132`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
        <rect x="48" y="162" width="104" height="12" rx="4" fill={SOFT} />
        {["Cool shower", "Non-slip mat", "Grab rail"].map((label, index) => <Box key={label} x={240} y={64 + index * 40} w={124} text={label} lit />)}</>}
      {at === 3 && <><g transform="translate(96 112) scale(2)"><WineGlass x={0} y={0} /></g><Box x={226} y={96} w={170} text="No more than 14 units" lit /><W x={226} y={128} size={10.5}>a week, as a regular habit</W></>}
      {at === 4 && <>{["Tired", "Dizzy", "Headache", "Very thirsty"].map((label, index) => <Box key={label} x={index % 2 ? 222 : 98} y={46 + Math.floor(index / 2) * 36} w={104} text={label} />)}
        <Arrow d="M160 106 V124" head="M154 117 L160 124 L166 117" /><Box x={160} y={148} w={190} text="Cool down, give fluids" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LbpCarKey(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Do not drive while you are dizzy", "Car: tell DVLA if it affects driving", "Bus or lorry: tell DVLA of any faint", "Fainting regularly? Tell DVLA", "Not telling DVLA can mean a fine"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Driving" title="Dizzy spells and the driver's seat" label="Driving" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A car or lorry, and when DVLA needs to be told">
      <g opacity={at === 1 || at === 4 ? 0.35 : 1}>{at === 2 ? <Lorry x={12} y={160} /> : <Car x={16} y={160} />}</g>
      {at === 0 && <><circle cx="246" cy="92" r="36" fill={WHITE} stroke={GOLD} strokeWidth="6" /><rect x="222" y="86" width="48" height="12" rx="3" fill={GOLD} /><W x={246} y={154} size={10.5}>Or ladders, machinery</W></>}
      {at === 1 && <><Form x={204} y={30} title="FEP1" /><Box x={247} y={160} w={130} text="Or report online" /></>}
      {at === 2 && <Form x={210} y={40} title="FEP1V" />}
      {at === 3 && <><Box x={240} y={50} w={140} text="Fainting regularly?" /><Box x={240} y={88} w={100} text="Tell DVLA" lit /></>}
      {at === 4 && <><W x={242} y={70} size={11}>a fine of up to</W><W x={242} y={106} size={26} serif>£1,000</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LbpSignposts(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Dizzy or faint again? See a GP", "Not waking within 1 minute: 999", "Dizziness that won't go: GP or 111", "Severe allergic reaction: call 999", "Faint while active? Talk to a doctor"];
  const lit = [[0], [2], [0, 1], [2], [0]][at];
  const boards = [
    { d: "M60 36 H150 V64 H60 L46 50 Z", x: 100, y: 55, t: "GP" },
    { d: "M170 84 H260 L274 98 L260 112 H170 Z", x: 216, y: 103, t: "NHS 111" },
    { d: "M60 132 H150 V160 H60 L46 146 Z", x: 100, y: 151, t: "999" },
  ];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="When to get help" title="GP, 111 or 999?" label="When to get help" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A signpost to a GP, NHS 111 and 999">
      <rect x="155" y="26" width="10" height="160" rx="3" fill={INK} />
      <path d="M110 186 H210" stroke={LINE} strokeWidth="3" />
      {boards.map((board, index) => { const on = lit.includes(index); return <g key={board.t} opacity={on ? 1 : 0.4}>
        <path d={board.d} fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={board.x} y={board.y} size={13} fill={on ? WHITE : TEXT}>{board.t}</W>
      </g>; })}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Coronary heart disease ==================================================================================

/** A cross-section of an artery: clear, narrowed by atheroma (1) or blocked by a clot as well (2). */
const Ring = ({ x, y, kind, lit }: { x: number; y: number; kind: number; lit: boolean }) =>
  <g opacity={lit ? 1 : 0.35}>
    <circle cx={x} cy={y} r="23" fill={SOFT} stroke={INK} strokeWidth="3" />
    <circle cx={x} cy={y} r="15" fill={WHITE} />
    {kind >= 1 && <path d={`M${x - 15} ${y} A15 15 0 0 0 ${x + 15} ${y} Q${x} ${y - 6} ${x - 15} ${y} Z`} fill={GOLD} />}
    {kind === 2 && <circle cx={x} cy={y - 6} r="8" fill={INK} />}
  </g>;

function ChdArteryRings(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Coronary arteries feed the heart", "Fatty atheroma narrows the artery", "A clot can block it: a heart attack", "It affects women as well as men", "Not curable, but it can be managed"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When the heart's own arteries narrow" label="Coronary heart disease" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The heart with its coronary arteries, and an artery clear, narrowed and blocked">
      <HeartShape x={80} y={104} size={120} />
      <path d="M76 66 C64 96 56 118 62 146 M86 66 C104 92 118 112 110 136" stroke={at === 0 ? GOLD : INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {at !== 3 && <>{["Clear", "Narrowed", "Blocked"].map((label, index) => <g key={label}><Ring x={180 + index * 54} y={88} kind={index} lit={at === index} /><W x={180 + index * 54} y={132} size={10.5}>{label}</W></g>)}</>}
      {at === 3 && <><Person x={204} y={140} scale={1.1} /><Person x={256} y={140} scale={1.1} fill={SOFT} /><W x={230} y={64} size={11}>About 800,000 UK women</W></>}
      {at === 4 && <Box x={234} y={166} w={150} text="Treat and manage" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ChdRiskTags(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Many risks can be controlled", "The main risk factors", "Diabetes can more than double the risk", "Sex, menopause and inherited Lp(a)", "Diet, activity, no smoking, checks"];
  const tags = [["Controlled", "Treated", "Modified"], ["Smoking", "High BP", "Cholesterol", "Diabetes", "Inactivity", "Lp(a)"], ["Smoking", "High BP", "Diabetes"], ["Sex", "Menopause", "Inherited Lp(a)"], ["Eat well", "Be active", "Stop smoking", "Regular checks"]][at];
  const place = (index: number) => tags.length === 4 ? { x: index % 2 ? 222 : 98, y: 122 + Math.floor(index / 2) * 40, w: 112 } : { x: 58 + (index % 3) * 102, y: 122 + Math.floor(index / 3) * 40, w: 96 };
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Risk factors" title="The things that fur up arteries" label="Risk factors" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An artery with fatty build-up, and the risk factors hanging from it">
      <path d="M14 36 H306 M14 80 H306" stroke={INK} strokeWidth="3" />
      <path d="M110 80 Q150 56 190 80 Z M214 36 Q240 50 266 36 Z" fill={GOLD} opacity=".85" />
      {tags.map((tag, index) => { const p = place(index); return <g key={tag}><path d={`M${p.x} 82 V${p.y - 13}`} stroke={LINE} strokeWidth="2" strokeDasharray="3 4" /><Box x={p.x} y={p.y} w={p.w} text={tag} lit={at !== 3} /></g>; })}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ChdTestPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A GP risk check or NHS Health Check", "ECG: a few painless minutes", "Echo and CT: pictures of the heart", "Angiogram: the gold standard test", "Some find out after a health check"];
  const stops = [{ x: 40, t: "Check" }, { x: 120, t: "ECG" }, { x: 200, t: "Echo, CT" }, { x: 280, t: "Angiogram" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tests" title="From a risk check to an angiogram" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path of tests, from a risk check to a coronary angiogram">
      <path d="M40 150 H280" stroke={LINE} strokeWidth="4" />
      {stops.map((stop, index) => { const on = at === 4 || index === at; return <g key={stop.t}><circle cx={stop.x} cy="150" r="11" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={stop.x} y={178} size={10.5}>{stop.t}</W></g>; })}
      {at === 0 && <><rect x="150" y="34" width="20" height="80" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="153" y="74" width="14" height="37" rx="7" fill={INK} />
        <Box x={70} y={74} w={110} text="Blood pressure" /><Box x={250} y={74} w={110} text="Ages 40 to 74" lit /></>}
      {at === 1 && <><path d="M30 80 H90 L100 60 L110 104 L120 40 L130 92 L140 80 H200 L210 60 L220 104 L230 40 L240 92 L250 80 H290" stroke={INK} strokeWidth="3.5" fill="none" strokeLinejoin="round" /><W x={160} y={124} size={11}>10 sticky patches</W></>}
      {at === 2 && <><HeartShape x={100} y={74} size={74} /><path d="M50 58 Q42 74 50 90 M40 52 Q28 74 40 96" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="236" cy="72" r="32" fill="none" stroke={INK} strokeWidth="12" /><W x={100} y={126} size={10.5}>Echo</W><W x={236} y={126} size={10.5}>CT</W></>}
      {at === 3 && <><HeartShape x={222} y={70} size={80} /><path d="M30 126 C80 126 120 108 150 90 S190 70 208 66" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" /><W x={92} y={50} size={10.5}>About 30 minutes, awake</W></>}
      {at === 4 && <Person x={160} y={104} scale={1.2} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ChdSignsLight(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Chest pain and breathlessness, or none", "Angina often eases in under 10 minutes", "Pain 5 min after a 2nd GTN dose: 999", "Pain over 15 minutes may be an attack", "Won't go: 999. Comes and goes: 111"];
  const lit = [[], [2], [2, 0], [0], [0, 1]][at];
  const lamps = [{ y: 56, t: "999" }, { y: 100, t: "NHS 111" }, { y: 144, t: "Rest, GTN" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Know the signs, know who to call" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Chest pain, and when to rest, call NHS 111 or call 999">
      <Person x={90} y={150} scale={2} fill={SOFT} />
      {(at === 3 || at === 4) && <path d="M90 140 L52 160 M90 140 L128 160 M90 140 L90 112" stroke={GOLD} strokeWidth="3" strokeDasharray="4 5" strokeLinecap="round" />}
      <circle cx="90" cy="140" r="9" fill={GOLD} className={still || at !== 3 ? undefined : "lib-why-pulse"} />
      <rect x="196" y="26" width="48" height="148" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" />
      {lamps.map((lamp, index) => <g key={lamp.t}><circle cx="220" cy={lamp.y} r="16" fill={lit.includes(index) ? INK : LINE} /><W x={252} y={lamp.y + 4} size={10.5} anchor="start" fill={lit.includes(index) ? TEXT : SOFT}>{lamp.t}</W></g>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ChdPillJobs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Medicines with four main jobs", "Blood thinners help prevent clots", "Statins: usually taken long term", "They ease pressure and widen arteries", "Ask before stopping any of them"];
  const notes = ["", "Aspirin is usually 75mg, once a day", "Most start with atorvastatin", "Beta blockers, nitrates, ACE inhibitors", "Most people have no side effects"];
  const lit = [[0, 1, 2, 3], [2], [3], [0, 1], []][at];
  const jobs = ["Lower pressure", "Widen arteries", "Prevent clots", "Lower cholesterol"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Four jobs, many tablets" label="Medicines" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pill organiser with four compartments, one for each job heart medicines do">
      {jobs.map((job, index) => { const x = 40 + (index % 2) * 124, y = 26 + Math.floor(index / 2) * 70, on = lit.includes(index); return <g key={job}>
        <rect x={x} y={y} width="116" height="62" rx="10" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={x + 58} y={y + 22} size={10.5} fill={on ? WHITE : TEXT}>{job}</W>
        <Pill x={x + 58} y={y + 44} fill={on ? GOLD : SOFT} />
      </g>; })}
      {notes[at] && <W x={160} y={182} size={10.5}>{notes[at]}</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ChdStentGraft(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["An angiogram shows the best option", "A balloon widens it, a stent holds it", "Often home the same or next day", "A graft carries blood around the block", "Most activities again after 6 weeks"];
  const left = at === 0 ? 0.5 : at === 3 ? 0.35 : 1, right = at === 0 ? 0.5 : at === 1 || at === 2 ? 0.35 : 1;
  const stent = at >= 1;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Procedures" title="Prop it open, or go around" label="Stents and bypass surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A stent holding a narrowed artery open, and a graft going around a blockage">
      <g opacity={left}>
        <rect x="10" y="22" width="144" height="154" rx="12" fill={WHITE} stroke={LINE} strokeWidth="2" /><W x={82} y={46} size={11.5}>Stent</W>
        {stent ? <path d="M24 84 H140 M24 132 H140" stroke={INK} strokeWidth="4" /> : <><path d="M60 84 Q82 102 104 84 Z M60 132 Q82 114 104 132 Z" fill={SOFT} /><path d="M24 84 H140 M24 132 H140" stroke={INK} strokeWidth="4" /></>}
        {at === 1 && <ellipse cx="82" cy="108" rx="28" ry="17" fill={GOLD} opacity=".5" />}
        {stent && <path d="M56 88 L64 128 L72 88 L80 128 L88 88 L96 128 L104 88 L108 128" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinejoin="round" />}
      </g>
      <g opacity={right}>
        <rect x="166" y="22" width="144" height="154" rx="12" fill={WHITE} stroke={LINE} strokeWidth="2" /><W x={238} y={46} size={11.5}>Bypass</W>
        <path d="M180 74 H296" stroke={INK} strokeWidth="10" strokeLinecap="round" />
        <path d="M180 124 H296 M180 152 H296" stroke={INK} strokeWidth="3" /><rect x="226" y="124" width="16" height="28" fill={INK} />
        {at >= 3 && <path d="M200 78 C200 110 270 100 276 126" stroke={GOLD} strokeWidth="6" fill="none" strokeLinecap="round" />}
      </g>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ChdResultsSlip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["HDL helps; too much non-HDL clogs", "Total under 5, non-HDL under 4", "No symptoms, so get a blood test", "Less saturated fat, more activity", "Statins: once a day, usually for life"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Cholesterol" title="The hidden number worth knowing" label="Cholesterol" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A cholesterol results slip, and what lowers cholesterol">
      <rect x="22" y="22" width="126" height="164" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <W x={85} y={44} size={11}>Cholesterol</W>
      <rect x="44" y="88" width="30" height="72" rx="4" fill={at === 1 ? INK : SOFT} /><rect x="96" y="104" width="30" height="56" rx="4" fill={at === 1 ? INK : SOFT} />
      <path d="M38 80 H80 M90 96 H132" stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 4" />
      <W x={59} y={176} size={10}>Total</W><W x={111} y={176} size={10}>Non-HDL</W>
      {at === 0 && <><Box x={236} y={72} w={150} text="HDL: back to the liver" size={10} lit /><Box x={236} y={120} w={150} text="Non-HDL: sticks to walls" size={10} /></>}
      {at === 1 && <><Box x={236} y={80} w={140} text="Total: under 5" lit /><Box x={236} y={118} w={140} text="Non-HDL: under 4" lit /><W x={236} y={152} size={10}>mmol/L, healthy adults</W></>}
      {at === 2 && <><rect x="224" y="46" width="24" height="100" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="228" y="96" width="16" height="46" rx="8" fill={INK} /><W x={236} y={170} size={10.5}>Yearly, if high</W></>}
      {at === 3 && ["Less saturated fat", "150 minutes active", "Stop smoking"].map((label, index) => <Box key={label} x={236} y={60 + index * 38} w={146} text={label} lit />)}
      {at === 4 && <><g transform="translate(236 82) scale(1.6)"><Pill x={0} y={0} /></g><W x={236} y={124} size={11}>Once a day</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ChdRehabWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Exercise and education, your way", "Contact your cardiac team or GP", "Sessions are tailored to you", "Group, online or a home programme", "Lower risk of another heart attack"];
  const fill = (index: number) => at === 4 || (at === 3 && index < 6) ? INK : at === 3 ? SOFT : WHITE;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Cardiac rehab" title="Rehab is as important as tablets" label="Cardiac rehab" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Twelve weeks of cardiac rehab sessions">
      {Array.from({ length: 12 }, (_, index) => <g key={index} opacity={at >= 3 ? 1 : 0.45}>
        <rect x={30 + (index % 6) * 44} y={104 + Math.floor(index / 6) * 42} width="38" height="34" rx="8" fill={fill(index)} stroke={INK} strokeWidth="2" />
        <W x={49 + (index % 6) * 44} y={125 + Math.floor(index / 6) * 42} size={10.5} fill={fill(index) === INK ? WHITE : TEXT}>{index + 1}</W>
      </g>)}
      {at === 0 && ["Online", "In person", "A mix"].map((label, index) => <Box key={label} x={70 + index * 90} y={56} w={80} text={label} lit />)}
      {at === 1 && <><Phone x={74} y={58} lit /><Box x={196} y={58} w={170} text="No referral needed" lit /></>}
      {at === 2 && ["Warm-up", "Exercise", "Cool-down", "Talks"].map((label, index) => <Box key={label} x={44 + index * 74} y={56} w={68} text={label} size={10} lit={index < 3} />)}
      {at === 3 && <W x={160} y={64} size={12}>Often weekly, for 6 to 12 weeks</W>}
      {at === 4 && <HeartShape x={160} y={58} size={60} fill={INK} stroke={INK} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ChdPlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["5 portions of fruit and veg a day", "Swap saturated fat for unsaturated", "About one level teaspoon", "About seven cubes of sugar", "Butter to oil spreads, fry to grill"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Eating" title="Small swaps for a steadier heart" label="Eating for your heart" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate, with salt, sugar and swaps beside it">
      <circle cx="100" cy="106" r="74" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="100" cy="106" r="58" fill="none" stroke={LINE} strokeWidth="2" />
      <W x={100} y={114} size={22} serif>{["5 a day", "Fats", "Salt", "Sugar", "Swaps"][at]}</W>
      {at === 0 && <><W x={100} y={136} size={10.5}>fruit and veg</W><Box x={250} y={84} w={116} text="Wholegrains" lit /><Box x={250} y={122} w={116} text="Low fat, high fibre" size={10} lit /></>}
      {at === 1 && <><Box x={250} y={84} w={116} text="Less saturated" /><Box x={250} y={122} w={116} text="More unsaturated" lit /></>}
      {at === 2 && <><ellipse cx="226" cy="96" rx="20" ry="12" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M212 96 Q226 84 240 96 Z" fill={SOFT} /><path d="M246 96 H300" stroke={INK} strokeWidth="5" strokeLinecap="round" /><W x={250} y={140} size={11}>Under 6g a day</W></>}
      {at === 3 && <>{Array.from({ length: 7 }, (_, index) => <rect key={index} x={208 + (index % 4) * 22} y={74 + Math.floor(index / 4) * 22} width="17" height="17" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />)}<W x={250} y={140} size={11}>Under 30g a day</W></>}
      {at === 4 && ["Wholemeal bread", "Grill, not fry", "Fish twice a week"].map((label, index) => <Box key={label} x={250} y={66 + index * 38} w={116} text={label} size={10} lit />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ChdHillWalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Good for heart, cholesterol and mood", "Aim for 150 minutes a week", "Speak to your doctor before starting", "Start with 5 or 10 minutes", "Symptoms? Stop, rest, call your doctor"];
  const line = (x: number) => 176 - (x - 20) * 100 / 280;
  const px = [70, 160, 70, 70, 170][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Activity" title="Low and slow, every day" label="Staying active" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Someone walking up a gentle slope, starting slowly">
      <path d="M20 176 L300 76" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {at === 3 && <><path d="M20 176 L110 144" stroke={GOLD} strokeWidth="8" strokeLinecap="round" /><path d="M230 101 L300 76" stroke={GOLD} strokeWidth="8" strokeLinecap="round" />
        <W x={122} y={172} size={10.5} anchor="start">Warm-up: 15 min or more</W><W x={300} y={58} size={10.5} anchor="end">Cool-down: 10 min or more</W></>}
      <Person x={px} y={line(px) - 14} />
      {at === 0 && ["Heart", "Cholesterol", "Mood"].map((label, index) => <Box key={label} x={80 + index * 90} y={40} w={84} text={label} lit />)}
      {at === 1 && <Box x={250} y={70} w={120} text="Still able to talk" lit />}
      {at === 2 && <Box x={200} y={50} w={170} text="Ask your doctor first" lit />}
      {at === 4 && <><circle cx="244" cy="54" r="26" fill={INK} /><W x={244} y={59} size={12} fill={WHITE}>Stop</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ChdQuitLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Chemicals make artery walls sticky", "Benefits begin within 20 minutes", "Free NHS support, up to 12 weeks", "Vapes: less harmful, still addictive", "Plan things to do for 5 minutes"];
  const marks = [{ x: 110, t: "20 minutes" }, { x: 200, t: "12 weeks" }, { x: 280, t: "1 year" }];
  const litMark = (index: number) => (at === 1 && index !== 1) || (at === 2 && index === 1);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Stopping smoking" title="The clock starts at your last cigarette" label="Stopping smoking" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An artery made sticky by smoking, and a timeline after the last cigarette">
      {at === 0 && <><path d="M20 60 H300 M20 120 H300" stroke={INK} strokeWidth="3" />{[70, 130, 190, 250].map((x, index) => <circle key={x} cx={x} cy={index % 2 ? 112 : 68} r="9" fill={GOLD} />)}<W x={160} y={95} size={11}>Sticky walls</W></>}
      {(at === 1 || at === 2) && <>
        <path d="M30 150 H290" stroke={LINE} strokeWidth="4" />
        <rect x="12" y="145" width="30" height="10" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="36" y="145" width="6" height="10" fill={SOFT} />
        {marks.map((mark, index) => <g key={mark.t}><circle cx={mark.x} cy="150" r="8" fill={litMark(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={mark.x} y={174} size={10.5}>{mark.t}</W></g>)}
      </>}
      {at === 1 && <><W x={110} y={124} size={10.5}>Heart rate, BP settle</W><W x={268} y={124} size={10.5}>Half the risk</W></>}
      {at === 2 && <><Box x={160} y={66} w={200} text="3 times more likely to quit" lit /><W x={160} y={100} size={10.5}>with NHS support and medicines</W></>}
      {at === 3 && <><rect x="90" y="80" width="140" height="22" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="230" y="85" width="20" height="12" rx="3" fill={SOFT} /><W x={160} y={134} size={10.5}>No tar or carbon monoxide</W></>}
      {at === 4 && <><Clock x={160} y={82} r={36} hand={1} /><W x={160} y={144} size={11}>Cravings: about 5 minutes</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ChdSupportWeb(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Anxiety is common after a heart event", "Unsure if it is your heart? Call 999", "Low for weeks may be depression", "GP, talking therapy, your heart team", "Urgent: 111, Samaritans or 999"];
  const nodes = [{ x: 62, y: 48, t: "GP" }, { x: 258, y: 48, t: "Talking therapy" }, { x: 62, y: 128, t: "Rehab nurse" }, { x: 258, y: 128, t: "Cardiology team" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Worry and mood" title="Worry is common, and help works" label="Worry and low mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person at the centre, linked to the people who can help">
      {nodes.map(node => <path key={node.t} d={`M160 100 L${node.x} ${node.y}`} stroke={at === 3 ? INK : LINE} strokeWidth="2.5" />)}
      {at === 0 && <circle cx="160" cy="96" r="40" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="5 6" className={still ? undefined : "lib-why-pulse"} />}
      {at === 2 && <Cloud x={160} y={44} s={22} />}
      <Person x={160} y={112} scale={1.1} fill={at === 2 ? SOFT : INK} />
      {nodes.map(node => <Box key={node.t} x={node.x} y={node.y} w={106} text={node.t} lit={at === 3} faint={at !== 3} />)}
      {at === 1 && <Box x={160} y={168} w={130} text="Heart or panic?" lit />}
      {at === 4 && ["111", "116 123", "999"].map((label, index) => <Box key={label} x={96 + index * 64} y={170} w={58} text={label} lit />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Heart failure ===========================================================================================

function HfPumpEf(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Not pumping well; not stopped", "Many reasons: damage, muscle, valves", "A normal ejection fraction is 50%+", "Four stages; you may move between", "Stable for many years with treatment"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A pump that struggles, not stops" label="What heart failure means" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A heart still pumping, with the types and stages of heart failure">
      {(at === 0 || at === 4) && <circle cx="88" cy="100" r="66" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="5 6" className={still ? undefined : "lib-why-pulse"} />}
      <HeartShape x={88} y={104} size={112} />
      {at === 0 && <><Box x={244} y={74} w={130} text="Still pumping" /><Box x={244} y={112} w={130} text="Needs support" lit /></>}
      {at === 1 && ["Damage", "Weak or stiff muscle", "Valve problems"].map((label, index) => <Box key={label} x={244} y={60 + index * 38} w={136} text={label} lit />)}
      {at === 2 && <>{["HFrEF: under 40%", "HFmrEF: 40 to 49%", "HFpEF: above 50%"].map((label, index) => <Box key={label} x={244} y={52 + index * 36} w={136} text={label} size={10} />)}<W x={244} y={170} size={10}>Normal: 50% and above</W></>}
      {at === 3 && <><W x={248} y={60} size={11}>Four stages</W>{[1, 2, 3, 4].map(n => <Box key={n} x={198 + (n - 1) * 34} y={96} w={28} text={String(n)} lit />)}<W x={248} y={140} size={10}>Can move between them</W></>}
      {at === 4 && <Box x={244} y={96} w={136} text="A full, active life" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HfCauseRoads(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Sudden, or slowly over months or years", "Heart attack, cardiomyopathy, high BP", "Valves, rhythm, kidneys and more", "More common at 65+, but any age", "Cause unknown? Control the symptoms"];
  const slots = [[58, 40], [262, 40], [58, 104], [262, 104], [58, 168], [262, 168]];
  const labels = [["Sudden", "Slow, over years"], ["Heart attack", "Cardiomyopathy", "High BP"], ["Valves", "Rhythm", "Kidneys", "Anaemia", "Thyroid", "Alcohol"], ["65 or older", "Overweight", "Pregnant", "Smoking", "Heavy drinking"], ["Not always known", "Treatable causes"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="Many roads to a tired heart" label="Causes of heart failure" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A heart with arrows coming in from its possible causes">
      {labels.map((label, index) => <path key={label} d={`M${slots[index][0]} ${slots[index][1]} L160 104`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />)}
      <HeartShape x={160} y={108} size={84} />
      {labels.map((label, index) => <Box key={label} x={slots[index][0]} y={slots[index][1]} w={104} text={label} lit={at !== 4 || index === 1} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HfBodySigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Breathless, swollen ankles, very tired", "Fluid backs up into lungs and legs", "Faster heartbeat, cough, confusion", "Symptoms vary day to day", "Know when to call 111 or 999"];
  const lungs = at <= 1 || at === 4, ankles = at <= 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="Breathless, swollen and very tired" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with the chest and ankles marked, and the symptoms of heart failure">
      <Person x={96} y={132} scale={2} fill={SOFT} />
      <rect x="80" y="158" width="14" height="28" rx="5" fill={SOFT} /><rect x="100" y="158" width="14" height="28" rx="5" fill={SOFT} />
      {lungs && <><ellipse cx="84" cy="124" rx="9" ry="13" fill={GOLD} opacity=".85" /><ellipse cx="110" cy="124" rx="9" ry="13" fill={GOLD} opacity=".85" /></>}
      {ankles && <><circle cx="87" cy="182" r="8" fill={GOLD} opacity=".7" /><circle cx="107" cy="182" r="8" fill={GOLD} opacity=".7" /></>}
      {at === 0 && ["Breathless", "Swollen ankles", "Very tired"].map((label, index) => <Box key={label} x={244} y={60 + index * 38} w={130} text={label} lit />)}
      {at === 1 && <><Box x={244} y={74} w={140} text="Fluid in the lungs" lit /><Box x={244} y={112} w={140} text="Salt and water kept" lit /></>}
      {at === 2 && ["Faster heartbeat", "Cough", "Confusion", "Wheezing"].map((label, index) => <Box key={label} x={244} y={46 + index * 36} w={130} text={label} />)}
      {at === 3 && <><path d="M180 100 C200 60 220 60 240 100 S280 140 300 100" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" /><W x={220} y={56} size={10.5}>Good days</W><W x={280} y={148} size={10.5}>Bad days</W></>}
      {at === 4 && <><Box x={244} y={62} w={120} text="GP or NHS 111" /><W x={244} y={90} size={10}>Breathless lying down</W><Box x={244} y={124} w={120} text="999" lit /><W x={244} y={152} size={10}>Severe breathing trouble</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HfBnpEcho(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Checks first, then a heart specialist", "BNP is higher when the heart struggles", "Echo: soundwaves picture the heart", "Tests to rule out other causes", "Heard nothing? Contact your doctor"];
  const on = [[], [0], [1, 2], [], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="The tests that show the pump" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A BNP blood test, an ECG and an echo of the heart">
      <g opacity={on.includes(0) ? 1 : 0.35}><rect x="48" y="62" width="24" height="72" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="52" y="98" width="16" height="32" rx="8" fill={INK} /><W x={60} y={152} size={10.5}>BNP blood test</W></g>
      <g opacity={on.includes(1) ? 1 : 0.35}><path d="M114 98 H136 L142 84 L148 114 L154 72 L160 108 L166 98 H206" stroke={INK} strokeWidth="3.5" fill="none" strokeLinejoin="round" /><W x={160} y={152} size={10.5}>ECG</W></g>
      <g opacity={on.includes(2) ? 1 : 0.35}><HeartShape x={266} y={98} size={60} /><path d="M228 86 Q220 98 228 110 M220 80 Q208 98 220 116" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" /><W x={262} y={152} size={10.5}>Echo</W></g>
      {at === 0 && ["Symptoms", "Checks", "Cardiologist"].map((label, index) => <Box key={label} x={60 + index * 101} y={30} w={92} text={label} lit />)}
      {at === 1 && <W x={160} y={34} size={11}>Regular blood tests later on</W>}
      {at === 2 && <W x={160} y={34} size={11}>Echo: about 30 to 40 minutes</W>}
      {at === 3 && <><Box x={60} y={30} w={92} text="Chest X-ray" lit /><Box x={161} y={30} w={104} text="Breathing tests" lit /><Box x={262} y={30} w={70} text="MRI" lit /></>}
      {at === 4 && <><Clock x={160} y={32} r={18} hand={2} /><W x={160} y={180} size={10.5}>Waits can be weeks or months</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HfPillBottles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Usually more than one medicine", "Water tablets clear extra fluid", "Widen vessels, slow the heart", "Other medicines you may hear of", "Start low, then build up slowly"];
  const notes = ["", "Often taken in the morning", "Ramipril, candesartan, bisoprolol", "Spironolactone, dapagliflozin and more", "Regular blood tests check kidneys"];
  const lit = [[0, 1, 2, 3], [0], [1, 2], [3], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Several tablets, several jobs" label="Medicines" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four medicine bottles, each for a different job">
      {at === 4 && <path d="M30 34 H90 V26 H150 V18 H210 V10 H290" stroke={GOLD} strokeWidth="3" fill="none" strokeLinejoin="round" />}
      {["Fluid", "Vessels", "Heart rate", "Others"].map((label, index) => { const x = 52 + index * 72, on = lit.includes(index); return <g key={label}>
        <rect x={x - 18} y="40" width="36" height="12" rx="3" fill={INK} />
        <rect x={x - 24} y="52" width="48" height="72" rx="8" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x={x - 16} y="74" width="32" height="24" rx="3" fill={on ? WHITE : TINT} />
        <W x={x} y={144} size={10.5}>{label}</W>
      </g>; })}
      {notes[at] && <W x={160} y={174} size={10.5}>{notes[at]}</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HfDeviceChest(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Pacemaker and CRT help it pump better", "An ICD can treat a dangerous rhythm", "Fitted in hours; often home next day", "Regular checks, some from home", "Tell DVLA about a pacemaker or ICD"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Devices" title="Small devices, steadier beats" label="Devices" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A chest with a small device below the collarbone and leads to the heart">
      <path d="M30 186 V96 Q30 54 76 50 H154 Q200 54 200 96 V186" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M68 66 Q94 76 112 66 M120 66 Q140 76 164 66" stroke={LINE} strokeWidth="3" fill="none" strokeLinecap="round" />
      <HeartShape x={126} y={134} size={58} fill={TINT} />
      <path d="M96 88 C116 92 120 106 122 124" stroke={GOLD} strokeWidth="2.5" fill="none" />
      {at !== 1 && <path d="M96 92 C132 98 140 116 136 132" stroke={GOLD} strokeWidth="2.5" fill="none" />}
      <rect x="70" y="78" width="28" height="20" rx="5" fill={INK} />
      {at === 1 && <path d="M160 104 L150 120 H162 L152 136" stroke={GOLD} strokeWidth="3" fill="none" strokeLinejoin="round" />}
      {(at === 0 || at === 1) && ["Pacemaker", "CRT", "ICD"].map((label, index) => <Box key={label} x={262} y={60 + index * 38} w={90} text={label} lit={at === 0 ? index < 2 : index === 2} faint={at === 0 ? index === 2 : index < 2} />)}
      {at === 2 && <><Clock x={262} y={78} r={26} hand={1.5} /><W x={262} y={130} size={10.5}>1 to 3 hours</W></>}
      {at === 3 && <><Box x={262} y={62} w={90} text="Checks" lit /><W x={262} y={94} size={10}>Every 3 to</W><W x={262} y={110} size={10}>12 months</W><Phone x={262} y={150} /></>}
      {at === 4 && <><Box x={262} y={80} w={80} text="DVLA" lit /><W x={262} y={112} size={10}>Fine up to £1,000</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HfScales(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Fluid can build up and cause swelling", "Same time, same scales, each morning", "Over 2kg in 3 days? Contact a doctor", "Under 6g of salt a day", "Never change a fluid limit yourself"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fluid and salt" title="The morning scales tell the story" label="Fluid, salt and weighing" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Bathroom scales, three days of weights, salt and a fluid limit">
      <g opacity={at === 1 || at === 2 ? 1 : 0.35}><rect x="30" y="128" width="120" height="48" rx="12" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="70" y="136" width="40" height="18" rx="3" fill={TINT} stroke={INK} strokeWidth="1.5" /><W x={90} y={149} size={10}>kg</W></g>
      {at === 0 && <><rect x="64" y="34" width="16" height="66" rx="6" fill={INK} /><rect x="96" y="34" width="16" height="66" rx="6" fill={INK} />
        <ellipse cx="72" cy="100" rx="15" ry="10" fill={GOLD} opacity=".55" /><ellipse cx="104" cy="100" rx="15" ry="10" fill={GOLD} opacity=".55" />
        <Box x={240} y={70} w={130} text="Legs and feet" lit /><Box x={240} y={108} w={150} text="Tummy or lower back" /></>}
      {at === 1 && <><Sun x={90} y={60} r={14} /><W x={90} y={106} size={11}>Each morning</W></>}
      {(at === 1 || at === 2) && <>{[0, 1, 2].map(index => <g key={index}><rect x={190 + index * 44} y="46" width="40" height="56" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={210 + index * 44} y={62} size={10}>{`Day ${index + 1}`}</W>
        {at === 1 ? <path d={`M${202 + index * 44} 82 l5 6 l10 -11`} stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" /> : <rect x={202 + index * 44} y={98 - 8 - index * 10} width="16" height={8 + index * 10} rx="2" fill={INK} />}</g>)}</>}
      {at === 1 && <W x={254} y={124} size={11}>Write it down</W>}
      {at === 2 && <Box x={254} y={130} w={150} text="Over 2kg in 3 days" lit />}
      {at === 3 && <><ellipse cx="72" cy="70" rx="20" ry="12" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M58 70 Q72 58 86 70 Z" fill={SOFT} /><path d="M92 70 H140" stroke={INK} strokeWidth="5" strokeLinecap="round" /><W x={90} y={106} size={10.5}>One level teaspoon</W>
        <Box x={240} y={70} w={136} text="Check food labels" lit /><Box x={240} y={108} w={150} text="Ask about substitutes" /></>}
      {at === 4 && <>{Array.from({ length: 8 }, (_, index) => <rect key={index} x={190 + (index % 4) * 30} y={46 + Math.floor(index / 4) * 34} width="20" height="24" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" />)}
        <W x={234} y={130} size={10.5}>About 6 to 8 cups, as a guide</W><W x={234} y={150} size={10.5}>Soup and jelly count too</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HfStepsUp(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Keeping active now helps symptoms", "Offered to everyone with heart failure", "Out of breath but able to talk", "Aim for 150 minutes a week", "Palpitations? Very breathless? Stop"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Rehab and exercise" title="From rest to gentle, steady movement" label="Rehab and exercise" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Short sessions of activity building up, step by step">
      {at !== 2 && Array.from({ length: 7 }, (_, index) => <rect key={index} x={34 + index * 38} y={176 - 18 - index * 10} width="28" height={18 + index * 10} rx="5" fill={at === 3 ? INK : SOFT} opacity={at === 3 ? 1 : 0.3} />)}
      {at === 0 && <><rect x="40" y="70" width="90" height="16" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="34" y="52" width="8" height="44" rx="3" fill={INK} /><Arrow d="M144 78 H186" head="M179 72 L186 78 L179 84" /><Person x={232} y={96} scale={1.2} /></>}
      {at === 1 && <><Box x={160} y={56} w={150} text="Cardiac rehab" lit /><W x={160} y={92} size={10.5}>Assessment, classes, support</W></>}
      {at === 2 && <>{["Brisk walking", "Cycling", "Light weights", "Chair exercises"].map((label, index) => <Box key={label} x={index % 2 ? 220 : 100} y={62 + Math.floor(index / 2) * 42} w={112} text={label} lit />)}<W x={160} y={160} size={10.5}>No heavy lifting</W></>}
      {at === 3 && <W x={160} y={46} size={11}>A few 5 to 10 minute sessions a day</W>}
      {at === 4 && <><circle cx="160" cy="72" r="32" fill={INK} /><W x={160} y={77} size={13} fill={WHITE}>Stop</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HfWarnSigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Weight up, swelling, extra pillows", "Waking breathless? Tell your team", "Tell your healthcare team early", "Severe breathing trouble: call 999", "New chest pain or a blackout: 999"];
  const icons = [[0, 1, 2], [1], [], [], []][at];
  const contacts = [[], [0], [0], [1, 2], [2]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Warning signs" title="Spot the change, call early" label="Warning signs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Signs that heart failure is getting worse, and who to contact">
      <g opacity={icons.includes(0) ? 1 : 0.35}><path d="M30 64 V44 H52 L62 54 H80 Q88 54 88 62 V64 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><W x={98} y={60} size={10.5} anchor="start">Tighter shoes</W></g>
      <g opacity={icons.includes(1) ? 1 : 0.35}><rect x="30" y="96" width="58" height="12" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="32" y="108" width="54" height="12" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={98} y={112} size={10.5} anchor="start">Extra pillows</W></g>
      <g opacity={icons.includes(2) ? 1 : 0.35}><rect x="30" y="150" width="58" height="20" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Arrow d="M59 146 V130" head="M53 137 L59 130 L65 137" /><W x={98} y={164} size={10.5} anchor="start">Weight up</W></g>
      {["Your team", "GP or 111", "999"].map((label, index) => <Box key={label} x={254} y={58 + index * 52} w={104} text={label} lit={contacts.includes(index)} faint={!contacts.includes(index)} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HfPillows(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Lying flat can make you breathless", "Prop yourself up on pillows", "A daily walk; no caffeine at bedtime", "Fewer night trips to the toilet", "Extra pillows needed? Tell your team"];
  const pillows = [1, 3, 2, 2, 3][at];
  const head = 118 - (pillows - 1) * 14;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Nights" title="Breathing easier at night" label="Sleeping and breathing" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Someone in bed propped up on pillows, by a window">
      <rect x="236" y="24" width="64" height="68" rx="4" fill={TINT} stroke={at === 1 ? GOLD : INK} strokeWidth="3" /><path d="M268 24 V92 M236 58 H300" stroke={INK} strokeWidth="2" />
      <rect x="20" y="96" width="10" height="80" rx="3" fill={INK} />
      <rect x="24" y="140" width="196" height="16" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M214 156 V176" stroke={INK} strokeWidth="3" />
      {Array.from({ length: pillows }, (_, index) => <rect key={index} x="32" y={128 - index * 14} width="60" height="14" rx="7" fill={WHITE} stroke={at === 4 ? GOLD : INK} strokeWidth="2.5" />)}
      <path d={`M80 ${head + 10} L200 132`} stroke={INK} strokeWidth="18" strokeLinecap="round" />
      <circle cx="66" cy={head} r="12" fill={INK} />
      <rect x="240" y="140" width="50" height="36" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <g opacity={at === 2 ? 1 : 0.35}><Cup x={264} y={126} /></g>
      {at === 2 && <W x={265} y={106} size={10}>No caffeine</W>}
      {at === 3 && <><Moon x={36} y={44} /><Box x={136} y={44} w={150} text="Timing water tablets" lit /></>}
      {at === 4 && <Box x={136} y={44} w={130} text="Tell your team" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HfCalmWave(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Good days and bad days are normal", "Breathe slowly for 3 to 5 minutes", "Talk, get out, do what you enjoy", "Low for weeks? It is treatable", "Urgent help: 111, Samaritans, 999"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood" title="When worry gets in the way" label="Mood and worry" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person at ease, with a calm breathing wave beneath">
      {at === 1 && <><circle cx="160" cy="104" r="52" fill={TINT} stroke={SOFT} strokeWidth="3" /><circle cx="160" cy="104" r="30" fill={SOFT} opacity=".6" className={still ? undefined : "lib-v2-breathe is-slow"} /><W x={160} y={34} size={10.5}>Gently in, gently out</W></>}
      <Person x={160} y={128} scale={1.3} />
      <path d="M20 176 C50 162 80 162 110 176 S170 190 200 176 S260 162 300 176" stroke={at === 1 ? INK : SOFT} strokeWidth="4" fill="none" strokeLinecap="round" />
      {at === 0 && <><Sun x={70} y={62} r={16} /><Cloud x={250} y={66} s={26} /><W x={70} y={110} size={10.5}>Good days</W><W x={250} y={110} size={10.5}>Bad days</W></>}
      {at === 2 && <><Box x={66} y={60} w={112} text="Talk to people" lit /><Box x={66} y={100} w={112} text="Understand it" lit /><Box x={254} y={60} w={112} text="Get out" lit /><Box x={254} y={100} w={112} text="Enjoy things" lit /></>}
      {at === 3 && <><Box x={66} y={72} w={112} text="Doctor or nurse" lit /><Box x={254} y={72} w={112} text="Talking therapy" lit /></>}
      {at === 4 && ["111", "116 123", "999"].map((label, index) => <Box key={label} x={90 + index * 70} y={36} w={60} text={label} lit />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HfSupportRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Your team, a helpline, support groups", "Palliative care: quality of life", "Plan ahead and share your wishes", "Work changes, money advice, carers", "Tell DVLA if symptoms affect driving"];
  const spots = [[60, 48], [258, 48], [60, 150], [258, 150]];
  const labels = at === 3 ? ["Work", "Citizens Advice", "Turn2us", "Carer's assessment"] : ["Care team", "Helpline", "Support group", "Palliative care"];
  const lit = [[0, 1, 2], [3], [], [0, 1, 2, 3], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You are not doing this alone" label="Support and planning ahead" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person and their carer with a ring of support around them">
      {at !== 4 && labels.map((label, index) => <path key={label} d={`M160 120 L${spots[index][0]} ${spots[index][1]}`} stroke={lit.includes(index) ? INK : LINE} strokeWidth="2.5" />)}
      <Person x={146} y={140} scale={1.1} /><Person x={180} y={144} fill={SOFT} />
      {at !== 4 && labels.map((label, index) => <Box key={label} x={spots[index][0]} y={spots[index][1]} w={112} text={label} size={label.length > 16 ? 10 : 10.5} lit={lit.includes(index)} faint={!lit.includes(index)} />)}
      {at === 2 && <><rect x="130" y="18" width="60" height="50" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M176 18 V32 H190" stroke={INK} strokeWidth="2" fill="none" /><W x={160} y={48} size={10.5}>My wishes</W></>}
      {at === 4 && <><g transform="translate(60 14) scale(0.66)"><Car x={0} y={70} /></g><Box x={240} y={46} w={100} text="Tell DVLA" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function CardioPieceView({ piece, ...props }: { piece: CardioPiece } & PieceProps) {
  switch (piece) {
    case "lbp-gauge": return <LbpGauge {...props} />;
    case "lbp-stand-dip": return <LbpStandDip {...props} />;
    case "lbp-cause-ring": return <LbpCauseRing {...props} />;
    case "lbp-faint-legs": return <LbpFaintLegs {...props} />;
    case "lbp-pill-notes": return <LbpPillNotes {...props} />;
    case "lbp-bed-edge": return <LbpBedEdge {...props} />;
    case "lbp-glasses": return <LbpGlasses {...props} />;
    case "lbp-stocking": return <LbpStocking {...props} />;
    case "lbp-hallway": return <LbpHallway {...props} />;
    case "lbp-sun-shade": return <LbpSunShade {...props} />;
    case "lbp-car-key": return <LbpCarKey {...props} />;
    case "lbp-signposts": return <LbpSignposts {...props} />;
    case "chd-artery-rings": return <ChdArteryRings {...props} />;
    case "chd-risk-tags": return <ChdRiskTags {...props} />;
    case "chd-test-path": return <ChdTestPath {...props} />;
    case "chd-signs-light": return <ChdSignsLight {...props} />;
    case "chd-pill-jobs": return <ChdPillJobs {...props} />;
    case "chd-stent-graft": return <ChdStentGraft {...props} />;
    case "chd-results-slip": return <ChdResultsSlip {...props} />;
    case "chd-rehab-weeks": return <ChdRehabWeeks {...props} />;
    case "chd-plate": return <ChdPlate {...props} />;
    case "chd-hill-walk": return <ChdHillWalk {...props} />;
    case "chd-quit-line": return <ChdQuitLine {...props} />;
    case "chd-support-web": return <ChdSupportWeb {...props} />;
    case "hf-pump-ef": return <HfPumpEf {...props} />;
    case "hf-cause-roads": return <HfCauseRoads {...props} />;
    case "hf-body-signs": return <HfBodySigns {...props} />;
    case "hf-bnp-echo": return <HfBnpEcho {...props} />;
    case "hf-pill-bottles": return <HfPillBottles {...props} />;
    case "hf-device-chest": return <HfDeviceChest {...props} />;
    case "hf-scales": return <HfScales {...props} />;
    case "hf-steps-up": return <HfStepsUp {...props} />;
    case "hf-warn-signs": return <HfWarnSigns {...props} />;
    case "hf-pillows": return <HfPillows {...props} />;
    case "hf-calm-wave": return <HfCalmWave {...props} />;
    case "hf-support-ring": return <HfSupportRing {...props} />;
  }
}
