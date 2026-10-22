import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { IMMUNE_PIECES, type ImmunePiece } from "@/content/immune-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { MemoryBand, useSection } from "./NewsMemoryPieces";
import { Chips, Clock, credit, GOLD, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Polymyalgia rheumatica and Lupus pages' own pieces (content/immune-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isImmunePiece = (piece: NewsPiece): piece is ImmunePiece => (IMMUNE_PIECES as readonly string[]).includes(piece);

// ---- Shared drawing parts -------------------------------------------------------------------------------------

/** A labelled rounded box centred on (x, y), as wide as its words unless `w` is given; `lit` boxes are filled. */
const Box = ({ x, y, text, w, lit = false, h = 26, size = 10 }: { x: number; y: number; text: string; w?: number; lit?: boolean; h?: number; size?: number }) => {
  const width = w ?? Math.round(text.length * size * 0.58 + 18);
  return <g><rect x={x - width / 2} y={y - h / 2} width={width} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
};
/** The caption under a picture. */
const Say = ({ children }: { children: ReactNode }) => <W x={160} y={205} size={11}>{children}</W>;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Tick = ({ x, y }: { x: number; y: number }) =>
  <path d={`M${x - 5} ${y} l4 4 l7 -8`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const Sun = ({ x, y, r = 10 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${(x + (r + 3) * Math.cos(a)).toFixed(1)} ${(y + (r + 3) * Math.sin(a)).toFixed(1)} L${(x + (r + 8) * Math.cos(a)).toFixed(1)} ${(y + (r + 8) * Math.sin(a)).toFixed(1)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Moon = ({ x, y, r = 9 }: { x: number; y: number; r?: number }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={INK} />;
/** A drop of blood, for a blood test. */
const Drop = ({ x, y, s = 1, fill = INK }: { x: number; y: number; s?: number; fill?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M0 -10 C6 -2 8 2 8 5 A8 8 0 0 1 -8 5 C-8 2 -6 -2 0 -10 Z" fill={fill} />;
/** A small bone, centred on (x, y). */
const Bone = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    {[[-14, -5], [-14, 5], [14, -5], [14, 5]].map(([cx, cy]) => <circle key={`${cx} ${cy}`} cx={cx} cy={cy} r="6" fill={WHITE} stroke={INK} strokeWidth={2 / s} />)}
    <rect x="-15" y="-4.5" width="30" height="9" fill={WHITE} />
    <path d="M-14 -4.5 H14 M-14 4.5 H14" stroke={INK} strokeWidth={2 / s} />
  </g>;
/** A kidney, centred on (x, y); `flip` mirrors it for the other side. */
const Kidney = ({ x, y, s = 1, flip = false, fill = WHITE }: { x: number; y: number; s?: number; flip?: boolean; fill?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`} d="M-4 -32 C20 -36 32 -12 28 8 C25 28 6 36 -9 29 C-19 24 -10 11 -14 2 C-18 -7 -30 -26 -4 -32 Z" fill={fill} stroke={INK} strokeWidth={3 / s} strokeLinejoin="round" />;
/** An eye seen from the front. */
const Eye = ({ x, y, s = 1, fill = WHITE }: { x: number; y: number; s?: number; fill?: string }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}><path d="M-14 0 Q0 -11 14 0 Q0 11 -14 0 Z" fill={fill} stroke={INK} strokeWidth={2 / s} /><circle r="4.5" fill={INK} /></g>;
/** A calm face. */
const Face = ({ x, y, r = 13, fill = WHITE }: { x: number; y: number; r?: number; fill?: string }) =>
  <g><circle cx={x} cy={y} r={r} fill={fill} stroke={INK} strokeWidth="2" /><circle cx={x - r * 0.35} cy={y - r * 0.2} r={r * 0.1} fill={INK} /><circle cx={x + r * 0.35} cy={y - r * 0.2} r={r * 0.1} fill={INK} /><path d={`M${x - r * 0.4} ${y + r * 0.25} Q${x} ${y + r * 0.55} ${x + r * 0.4} ${y + r * 0.25}`} stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" /></g>;
/** A germ, for infections. */
const Germ = ({ x, y, r = 8 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 6 }, (_, index) => { const a = index * Math.PI / 3; return <path key={index} d={`M${(x + r * Math.cos(a)).toFixed(1)} ${(y + r * Math.sin(a)).toFixed(1)} L${(x + (r + 5) * Math.cos(a)).toFixed(1)} ${(y + (r + 5) * Math.sin(a)).toFixed(1)}`} stroke={INK} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={SOFT} stroke={INK} strokeWidth="2" /></g>;
/** A phone, upright. */
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 13} y={y - 22} width="26" height="44" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 8} y={y - 15} width="16" height="24" rx="2" fill={lit ? SOFT : TINT} /><circle cx={x} cy={y + 15} r="2.5" fill={lit ? WHITE : INK} /></g>;
/** A blood test tube with its label underneath. */
const Tube = ({ x, y, label, lit = true }: { x: number; y: number; label: string; lit?: boolean }) =>
  <g opacity={lit ? 1 : 0.4}>
    <rect x={x - 10} y={y} width="20" height="76" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
    <rect x={x - 7} y={y + 34} width="14" height="39" rx="7" fill={INK} />
    <rect x={x - 14} y={y - 8} width="28" height="10" rx="3" fill={INK} />
    <W x={x} y={y + 96} size={10.5}>{label}</W>
  </g>;
/** A glowing spot on the body. */
const Spot = ({ x, y, r = 8, on = true, pulse = false }: { x: number; y: number; r?: number; on?: boolean; pulse?: boolean }) =>
  <circle cx={x} cy={y} r={r} fill={GOLD} opacity={on ? 0.9 : 0.2} className={pulse ? "lib-why-pulse" : undefined} />;
/** A simple standing figure, head centred on (x, y); `up` raises the arms. Children are drawn in its own frame. */
const Figure = ({ x, y, s = 1, up = false, children }: { x: number; y: number; s?: number; up?: boolean; children?: ReactNode }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <g stroke={SOFT} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M0 16 V70" />
      <path d={up ? "M-22 26 H22 M-22 26 L-32 2 L-36 -22 M22 26 L32 2 L36 -22" : "M-22 26 H22 M-22 26 L-30 56 L-32 84 M22 26 L30 56 L32 84"} />
      <path d="M-12 72 H12 M-12 72 L-16 108 L-18 138 M12 72 L16 108 L18 138" />
    </g>
    <circle r="13" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    {children}
  </g>;

// ==== Polymyalgia rheumatica ================================================================================

function PmrWarmGirdle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const spots = [[0, 18], [-22, 26], [22, 26], [-12, 72], [12, 72]];
  const boxes = [["Poly: many", "Myalgia: muscle pain", "Cause unknown"], ["Most are over 65", "Very rare under 50", "More women than men"], ["Over a week or two", "May follow a flu-like illness", "Dressing, stairs, getting up"], ["Prednisolone", "12 months to 2 years", "Most fully recover"], ["Giant cell arteritis", "Up to 1 in 5", "Needs immediate attention"]][at];
  const caps = ["Pain around shoulders, neck and hips", "Mostly over 65; very rare under 50", "It often comes on quickly", "Steroids ease it; most fully recover", "Up to 1 in 5 get GCA: get help at once"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Stiff shoulders and hips after fifty" label="What polymyalgia rheumatica is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A standing figure with the neck, shoulders and hips highlighted, beside notes on polymyalgia rheumatica">
      <Figure x={66} y={40} s={0.95}>
        {spots.map(([x, y]) => <Spot key={`${x} ${y}`} x={x} y={y} r={9} on={at === 0 || at === 2} pulse={!still && at === 0} />)}
        {at === 4 && <circle r="20" fill="none" stroke={GOLD} strokeWidth="4" className={still ? undefined : "lib-why-pulse"} />}
      </Figure>
      {boxes.map((text, index) => <Box key={text} x={210} y={60 + index * 42} text={text} lit={index === 0} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PmrMorningClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const left = [["Shoulders, neck, hips", "Often the thighs too", "Both sides"], [], ["Washing hair", "Overhead cupboards", "Getting out of bed"], ["Very tired", "Less appetite", "Night sweats, fever", "Feeling low"], ["Over a week? See a GP"]][at];
  const caps = ["Usually both sides of the body", "Often eases after about 45 minutes", "Raising arms above shoulders is hard", "Tiredness, low appetite, sweats, fever", "GP if it lasts longer than a week"];
  const spots = at === 0 ? [[-22, 26], [22, 26], [-12, 72], [12, 72]] : at === 2 ? [[-22, 26], [22, 26]] : [];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Mornings that start in slow motion" label="Symptoms of polymyalgia rheumatica" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A figure with stiff shoulders and hips, and a clock showing stiffness easing about 45 minutes after waking">
      {at === 2 && <path d="M196 64 H300" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" />}
      <Figure x={248} y={44} s={0.78} up={at === 2}>
        {spots.map(([x, y]) => <Spot key={`${x} ${y}`} x={x} y={y} r={9} />)}
        {at === 4 && <circle r="20" fill="none" stroke={GOLD} strokeWidth="4" />}
      </Figure>
      {at === 1 && <g>
        <circle cx="92" cy="94" r="46" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M92 48 A46 46 0 1 1 46 94" stroke={GOLD} strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M92 94 V62 M92 94 H64" stroke={TEXT} strokeWidth="3" strokeLinecap="round" />
        <circle cx="92" cy="94" r="4" fill={TEXT} />
        <W x={92} y={32} size={10.5}>Waking</W>
        <W x={92} y={164} size={10.5}>About 45 minutes</W>
      </g>}
      {left.map((text, index) => <Box key={text} x={88} y={(at === 3 ? 46 : 60) + index * (at === 3 ? 32 : 40)} text={text} lit={index === 0 && at !== 4} />)}
      {at === 4 && <Box x={160} y={177} text="Headache, jaw or sight? GP or 111 now" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PmrChecklistTubes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const checks = ["Over 50", "Shoulders or hips", "Stiff over 45 minutes", "Over 2 weeks", "Raised inflammation", "Quick steroid response"];
  const boxes = [["Your history", "An examination", "Blood tests"], ["ESR and CRP", "Both normal: PMR unlikely", "Inflammation has many causes"], ["Rheumatoid arthritis", "Infection", "Thyroid", "Kidneys, other organs"], [], []][at];
  const caps = ["History, examination and blood tests", "ESR and CRP check inflammation", "Other conditions ruled out first", "A checklist, once others are ruled out", "A specialist, if there is any doubt"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Diagnosis" title="Ruling out before ruling in" label="How it is diagnosed" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two blood tubes for ESR and CRP beside the steps and checklist used to diagnose polymyalgia rheumatica">
      <Tube x={34} y={46} label="ESR" lit={at <= 1 || at === 3} />
      <Tube x={78} y={46} label="CRP" lit={at <= 1 || at === 3} />
      {at === 1 && <rect x="14" y="30" width="86" height="126" rx="12" fill="none" stroke={GOLD} strokeWidth="3" />}
      {boxes.map((text, index) => <Box key={text} x={212} y={(at === 2 ? 40 : 56) + index * (at === 2 ? 30 : 40)} text={text} lit={at === 0 ? index === 2 : at === 1 && index === 0} />)}
      {at === 2 && <Box x={212} y={166} text="Tests before steroids" lit />}
      {at === 3 && checks.map((text, index) => <g key={text}>
        <rect x="124" y={28 + index * 24} width="16" height="16" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" />
        <Tick x={132} y={36 + index * 24} />
        <W x={148} y={40 + index * 24} size={10.5} anchor="start">{text}</W>
      </g>)}
      {at === 4 && <g>
        <Person x={212} y={86} scale={1.1} />
        <W x={212} y={126} size={11}>Rheumatologist</W>
        <W x={212} y={148} size={10}>If unsure, not improving,</W>
        <W x={212} y={164} size={10}>or side effects</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PmrTempleAlert(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const boxes = [["Giant cell arteritis", "Temporal arteritis", "Needs urgent treatment"], [], ["GP or NHS 111 now", "No appointment? A&E", "Even brief sight changes"], ["Steroids promptly", "Before it is confirmed", "Same-day eye specialist"], ["Blood tests", "Scan or biopsy", "High dose, then lower"]][at];
  const signs = ["New headache", "Jaw pain eating", "Sight problems"];
  const caps = ["Inflamed arteries, side of the head", "Headache, jaw pain or sight problems", "GP or NHS 111 immediately", "Prompt steroids usually avoid problems", "Scan or biopsy, then steroids"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Giant cell arteritis" title="Headache, jaw, eyes: act now" label="Giant cell arteritis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head from the side with the temple artery highlighted, and the warning signs that need help straight away">
      <g transform="translate(0 6) scale(0.8)">
        <path d="M72 186 C72 166 60 156 58 134 C54 100 62 64 94 46 C122 30 162 38 174 68 C180 82 178 92 180 100 L190 116 C192 120 188 122 184 122 C184 130 186 136 182 140 C178 144 178 150 174 154 C168 160 156 160 148 158 L146 186 Z" fill={WHITE} stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
        <ellipse cx="116" cy="110" rx="9" ry="14" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M156 96 Q164 90 172 96 Q164 102 156 96 Z" fill={INK} />
        <path d="M118 94 C110 84 124 78 116 68 C110 60 120 56 116 50" stroke={at === 0 || at === 1 ? GOLD : SOFT} strokeWidth="5" fill="none" strokeLinecap="round" className={!still && at === 0 ? "lib-why-pulse" : undefined} />
        {at === 1 && <><circle cx="130" cy="58" r="12" fill={GOLD} opacity=".55" /><circle cx="148" cy="146" r="12" fill={GOLD} opacity=".55" /><circle cx="164" cy="96" r="13" fill="none" stroke={GOLD} strokeWidth="4" /></>}
      </g>
      {at === 1 && signs.map((text, index) => <g key={text}>
        {index === 0 && <path d="M168 56 l5 -8 l5 8 l5 -8 l5 8" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
        {index === 1 && <path d="M168 100 Q178 112 190 100" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" />}
        {index === 2 && <Eye x={179} y={140} s={0.8} />}
        <W x={198} y={56 + index * 42} size={11} anchor="start">{text}</W>
      </g>)}
      {boxes.map((text, index) => <Box key={text} x={234} y={56 + index * 42} text={text} lit={index === 0} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PmrBreakfastDose(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const notes = ["Not the same as anabolic steroids", "A quick response helps confirm it", "Then tapered down slowly", "Missed until next day? No double dose", "Stop only when your doctor says so"];
  const caps = ["Blocks chemicals behind inflammation", "Better in days; much better by 2 weeks", "Usual start: 15mg a day, then tapered", "Once a day, best with breakfast", "No real liquorice; no sudden stop"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Prednisolone" title="A morning dose, and fast relief" label="Steroid tablets" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A breakfast plate with a steroid tablet, a morning sun and a figure who can stretch freely again">
      <g opacity={at === 3 ? 1 : 0.5}><Sun x={36} y={36} /></g>
      <ellipse cx="100" cy="126" rx="58" ry="22" fill={WHITE} stroke={at === 3 ? GOLD : INK} strokeWidth={at === 3 ? 4 : 3} />
      <ellipse cx="100" cy="126" rx="44" ry="15" fill="none" stroke={LINE} strokeWidth="2" />
      <Pill x={100} y={125} />
      <W x={100} y={166} size={10.5}>{at === 3 ? "With breakfast" : "Prednisolone"}</W>
      <Figure x={250} y={52} s={0.78} up={at >= 1}>
        {at === 0 && [[-22, 26], [22, 26], [-12, 72], [12, 72]].map(([x, y]) => <Spot key={`${x} ${y}`} x={x} y={y} r={9} />)}
      </Figure>
      {at === 1 && <g>
        <path d="M110 44 H210" stroke={LINE} strokeWidth="3" />
        {[["Days", 110], ["2 weeks", 160], ["4 weeks", 210]].map(([label, x]) => <g key={label}><circle cx={x} cy="44" r="6" fill={INK} /><W x={x as number} y={30} size={10}>{label}</W></g>)}
      </g>}
      {at === 2 && <Box x={140} y={42} text="15mg a day to start" lit />}
      {at === 4 && <g><rect x="186" y="104" width="12" height="44" rx="5" fill={INK} transform="rotate(20 192 126)" /><Cross x={192} y={126} s={16} /></g>}
      <W x={160} y={186} size={10.5}>{notes[at]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PmrGentleStairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const ys = [40, 66, 88, 106, 120, 130, 137];
  const stairs = ys.map((y, index) => `${index ? `V${y}` : `M30 ${y}`} H${68 + index * 38}`).join(" ");
  const labels = [["Starts after 2 to 4 weeks", "Then every 1 to 2 months"], ["12 months to 2 years", "Some need longer"], ["From about 10mg", "Steps of 1 to 2mg"], ["Often wear and tear", "Give it a few days"], ["Cortisol needs time", "Talk to your doctor first"]][at];
  const caps = ["After 2 to 4 weeks, reduced in stages", "Usually 12 months to 2 years", "From about 10mg: 1 to 2mg at a time", "Some aches return; give it a few days", "The body needs time to make cortisol"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Reducing the dose" title="Coming down the stairs slowly" label="Reducing the dose" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A staircase of steroid doses coming down slowly, with the steps getting smaller near the bottom">
      <path d={`${stairs} V172 H30 Z`} fill={TINT} />
      <path d={stairs} stroke={at === 1 ? GOLD : INK} strokeWidth="3.5" fill="none" strokeLinejoin="round" />
      {at === 2 && <path d={ys.slice(3).map((y, index) => `M${144 + index * 38} ${y} H${182 + index * 38}`).join(" ")} stroke={GOLD} strokeWidth="5" strokeLinecap="round" />}
      {at === 0 && ys.map((y, index) => <circle key={y} cx={30 + index * 38 + 8} cy={y} r="5" fill={index === 0 ? GOLD : INK} />)}
      {at === 3 && <path d="M190 112 l5 -8 l5 8 l5 -8 l5 8" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      {at === 4 && <><path d="M68 40 V166" stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" /><Cross x={68} y={104} s={12} /></>}
      <W x={49} y={30} size={10}>Start</W>
      <W x={262} y={160} size={10}>Lower dose</W>
      {labels.map((text, index) => <W key={text} x={214} y={40 + index * 18} size={10.5}>{text}</W>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PmrWatchRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tiles = ["Dose", "Mood", "Checks", "Infection", "Eating"];
  const notes = ["Risk should fall as the dose comes down", "Contact a GP as soon as possible", "Optometrist every 12 months", "Non-live flu and shingles jabs are safe", "Food with it can help indigestion"];
  const caps = ["Higher dose, longer use: more risk", "About 1 in 20 have changes in mood", "Check bones, blood sugar and eyes", "Chickenpox contact? Get advice at once", "Eat well, no crash diets, keep moving"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Side effects" title="Knowing the trade-offs, keeping watch" label="Side effects" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A steroid tablet linked to five things to keep watch on: the dose, mood, checks, infection and eating">
      <W x={160} y={22} size={10.5}>Prednisolone</W>
      <g transform="translate(160 46) scale(1.6)"><Pill x={0} y={0} /></g>
      {tiles.map((tile, index) => <path key={tile} d={`M160 60 L${40 + index * 60} 88`} stroke={index === at ? GOLD : LINE} strokeWidth={index === at ? 3 : 2} />)}
      {tiles.map((tile, index) => {
        const x = 40 + index * 60, y = 112;
        return <g key={tile}>
          <circle cx={x} cy={y} r="24" fill={index === at ? TINT : WHITE} stroke={index === at ? GOLD : INK} strokeWidth={index === at ? 4 : 2} />
          {index === 0 && <Clock x={x} y={y} r={14} hand={2} />}
          {index === 1 && <Face x={x} y={y} r={13} />}
          {index === 2 && <Eye x={x} y={y} s={0.85} />}
          {index === 3 && <Germ x={x} y={y} r={7} />}
          {index === 4 && <><circle cx={x} cy={y} r="13" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx={x} cy={y} r="7" fill="none" stroke={LINE} strokeWidth="2" /></>}
          <W x={x} y={152} size={10}>{tile}</W>
        </g>;
      })}
      <W x={160} y={180} size={10.5}>{notes[at]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PmrPathBack(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const labels = [["It can come back", "The dose may rise for weeks"], ["Contact your GP", "Change dose only if advised"], ["Masked aches of getting older", "Cortisol may be checked"], ["Methotrexate, a DMARD", "Regular blood tests"], ["Not responding as it should?", "Ask about a referral"]][at];
  const caps = ["It can return when the dose comes down", "Symptoms back? Contact your GP", "Some aches ease as the body adjusts", "Methotrexate can allow less steroid", "Headache, jaw or sight? GP or 111 now"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="A relapse" title="When the stiffness comes back" label="If symptoms come back" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A winding path with a small step back where symptoms return, and the help along the way">
      <path d="M18 176 C90 176 110 122 160 120 C210 118 230 76 302 72" stroke={LINE} strokeWidth="16" fill="none" strokeLinecap="round" />
      <path d="M18 176 C90 176 110 122 160 120 C210 118 230 76 302 72" stroke={WHITE} strokeWidth="2" strokeDasharray="6 8" fill="none" />
      <circle cx="160" cy="120" r="8" fill={at === 2 ? SOFT : GOLD} stroke={WHITE} strokeWidth="2" />
      {(at === 0 || at === 2) && <Arrow d="M180 106 C172 92 150 92 142 104" head="M140 95 L142 104 L151 103" />}
      {labels.map((text, index) => <W key={text} x={96} y={40 + index * 18} size={10.5}>{text}</W>)}
      {at === 0 && <><Pill x={232} y={158} /><Arrow d="M266 170 V146" head="M259 153 L266 146 L273 153" /></>}
      {at === 1 && <Phone x={246} y={156} lit />}
      {at === 2 && <path d="M214 160 l6 -8 l6 8 l6 -8 l6 8 H280" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      {at === 3 && <><Pill x={228} y={156} /><Pill x={270} y={156} fill={SOFT} /></>}
      {at === 4 && <Box x={240} y={158} text="GP or NHS 111 now" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** A credit-card shaped card with a coloured band and its title. */
const Card = ({ x, y, title, band, bandText, lit, dim, children }: { x: number; y: number; title: string; band: string; bandText: string; lit: boolean; dim: boolean; children?: ReactNode }) =>
  <g transform={`translate(${x} ${y})`} opacity={dim ? 0.4 : 1}>
    <rect width="132" height="84" rx="10" fill={WHITE} stroke={lit ? GOLD : INK} strokeWidth={lit ? 4 : 2.5} />
    <path d="M0 10 A10 10 0 0 1 10 0 H122 A10 10 0 0 1 132 10 V24 H0 Z" fill={band} />
    <W x={66} y={16} size={10.5} fill={bandText}>{title}</W>
    {children ?? <path d="M14 42 H100 M14 56 H118 M14 70 H80" stroke={LINE} strokeWidth="5" strokeLinecap="round" />}
  </g>;

function PmrTwoCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const row = [["Over 3 weeks", "Over 40mg a day"], ["Update any dose change"], ["Ask your pharmacist"], ["Illness", "Accident", "Operation"], ["Medical", "Dental", "Surgery"]][at];
  const caps = ["Over 3 weeks, or over 40mg a day", "Your dose, and not to stop suddenly", "A red emergency card, if advised", "Helps other doctors manage your care", "Carry it always; show it for treatment"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Steroid card" title="The card that speaks for you" label="Carrying a steroid card" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A blue steroid treatment card and a red steroid emergency card, and when to show them">
      <Card x={18} y={30} title="Steroid card" band={INK} bandText={WHITE} lit={at === 0 || at === 1} dim={at === 2}>
        {at === 1 ? ["Your dose", "How long", "Do not stop suddenly"].map((text, index) => <W key={text} x={66} y={44 + index * 15} size={9.5}>{text}</W>) : undefined}
      </Card>
      <Card x={170} y={30} title="Emergency card" band={GOLD} bandText={TEXT} lit={at === 2} dim={at < 2}>
        {at === 2 ? ["Adrenal glands may", "make less cortisol"].map((text, index) => <W key={text} x={66} y={50 + index * 16} size={9.5}>{text}</W>) : undefined}
      </Card>
      <W x={84} y={132} size={10}>Blue</W>
      <W x={236} y={132} size={10}>Red</W>
      {row.map((text, index) => <Box key={text} x={row.length === 1 ? 160 : row.length === 2 ? 90 + index * 140 : 60 + index * 100} y={164} text={text} lit={index === 0} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PmrHalfPace(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const steps = ["Stretch", "Move", "Strengthen", "Balance", "Rest"];
  const boxes = [[], [], ["Shoulder movement", "Stretch and strengthen", "Some resistance work"], [], ["Long drive: stop", "Stretch arms and legs", "Hot bath or shower"]][at];
  const caps = ["Think of your old level, then half", "Increase gently; rest matters most", "A physiotherapist can guide exercise", "Walking helps keep bones strong", "Long journey? Stop and stretch"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Staying active" title="Half your old pace, then build gently" label="Staying active" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Activity at half the earlier level, building gently, beside a figure stretching">
      <Figure x={252} y={50} s={0.78} up={at === 2 || at === 4} />
      {at === 0 && <g>
        <W x={22} y={44} size={10.5} anchor="start">Your old level</W>
        <rect x="22" y="52" width="140" height="18" rx="6" fill={SOFT} />
        <W x={22} y={98} size={10.5} anchor="start">Half of that</W>
        <rect x="22" y="106" width="70" height="18" rx="6" fill={INK} />
        <path d="M92 100 V130" stroke={GOLD} strokeWidth="3" />
        <W x={92} y={156} size={10}>Too much can make it worse</W>
      </g>}
      {at === 1 && steps.map((step, index) => <g key={step}>
        <circle cx="34" cy={40 + index * 26} r="10" fill={index === 4 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
        <W x={34} y={44 + index * 26} size={10}>{String(index + 1)}</W>
        <W x={52} y={44 + index * 26} size={10.5} anchor="start">{index === 4 ? "Rest: the most important" : step}</W>
      </g>)}
      {boxes.map((text, index) => <Box key={text} x={94} y={56 + index * 40} text={text} lit={index === 0} />)}
      {at === 3 && <g>
        <Bone x={92} y={66} s={1.7} />
        <W x={92} y={112} size={11}>Walking</W>
        <W x={92} y={130} size={10}>Weight-bearing exercise</W>
        <path d="M30 156 H154" stroke={SOFT} strokeWidth="4" strokeDasharray="2 10" strokeLinecap="round" />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PmrCalciumBone(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const pores = [[66, 70], [76, 84], [64, 98], [74, 112], [66, 126], [76, 138], [70, 58]];
  const boxes = [["Breaks down faster", "Higher doses and tablets", "Over three months"], ["DEXA scan", "Bisphosphonates", "Keep taking your steroids"], [], ["Walking", "Good posture", "Avoid trips and falls", "Up to 14 units a week"]][at];
  const caps = ["Bone can break down faster than made", "A DEXA scan; maybe bisphosphonates", "700 to 1,200mg of calcium a day", "Walk, keep good posture, avoid falls"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Bones" title="Guarding bones through treatment" label="Protecting your bones" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A long bone beside calcium-rich foods, a bone scan and walking, the ways to protect bones on steroids">
      <path d="M60 54 C48 50 46 32 58 30 C64 22 76 22 80 30 C92 30 94 50 82 54 V146 C94 150 94 170 82 170 C76 178 64 178 60 170 C48 170 46 150 60 146 Z" fill={WHITE} stroke={at === 2 ? GOLD : INK} strokeWidth={at === 2 ? 4 : 3} strokeLinejoin="round" />
      {pores.slice(0, at === 0 ? 7 : 3).map(([x, y]) => <circle key={`${x} ${y}`} cx={x} cy={y} r="3.5" fill={SOFT} />)}
      {boxes.map((text, index) => <Box key={text} x={208} y={(boxes.length === 4 ? 44 : 56) + index * (boxes.length === 4 ? 34 : 42)} text={text} lit={index === boxes.length - 1 && at === 1 || index === 0 && at !== 1} />)}
      {at === 2 && <g>
        <path d="M134 52 L138 96 H156 L160 52 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M136 62 L138 94 H156 L158 62 Z" fill={TINT} />
        <W x={147} y={114} size={10}>Milk</W>
        <path d="M184 74 Q204 58 224 74 Q204 90 184 74 Z M224 74 L234 66 V82 Z" fill={SOFT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <W x={208} y={114} size={10}>Sardines</W>
        <Pill x={272} y={74} />
        <W x={272} y={114} size={10}>Vitamin D</W>
        <W x={208} y={142} size={10.5}>700 to 1,200mg calcium a day</W>
        <W x={208} y={162} size={10.5}>Vitamin D: 10 micrograms</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PmrSupportCircle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const ring = Array.from({ length: 6 }, (_, index) => { const a = -Math.PI / 2 + index * Math.PI / 3; return [86 + 54 * Math.cos(a), 112 + 50 * Math.sin(a)]; });
  const lines = [["Nothing you could have", "done to avoid it"], ["0300 111 5090", "Mon to Fri, 9am to 5pm", "Experienced volunteers"], ["Local support groups", "HealthUnlocked forum", "Free information pack"], ["Many keep working", "Part-time for a while", "Access to Work grants"], ["A symptom diary", "Stretch on long drives", "Talk to your doctor"]][at];
  const caps = ["A shock; be kind to yourself", "Helpline: 0300 111 5090, 9am to 5pm", "Local groups and an online forum", "Many keep working, maybe part-time", "A symptom diary helps your doctor"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Everyday life" title="You are not on your own" label="Everyday life and support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A circle of people at a support group, beside a helpline phone, an online forum, work and a symptom diary">
      <g opacity={at === 2 ? 1 : 0.45}>{ring.map(([x, y]) => <Person key={`${x} ${y}`} x={x} y={y + 8} scale={0.48} fill={at === 2 ? INK : SOFT} />)}</g>
      <Person x={86} y={128} scale={0.6} fill={at === 0 ? GOLD : INK} />
      {at === 0 && <Box x={240} y={66} text="Be kind to yourself" lit />}
      {at === 1 && <Phone x={240} y={64} lit />}
      {at === 2 && <g>
        <rect x="210" y="40" width="60" height="38" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M202 84 L210 78 H270 L278 84 Z" fill={INK} />
        <rect x="218" y="48" width="26" height="9" rx="4" fill={SOFT} /><rect x="236" y="62" width="26" height="9" rx="4" fill={GOLD} />
      </g>}
      {at === 3 && <g>
        <path d="M230 50 V42 H250 V50" stroke={INK} strokeWidth="3" fill="none" />
        <rect x="214" y="50" width="52" height="34" rx="5" fill={INK} />
        <path d="M214 64 H266" stroke={SOFT} strokeWidth="2" />
      </g>}
      {at === 4 && <g>
        <rect x="220" y="38" width="40" height="50" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M226 38 V88" stroke={INK} strokeWidth="2.5" />
        <path d="M232 52 H254 M232 62 H254 M232 72 H248" stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" />
      </g>}
      {lines.map((text, index) => <W key={text} x={240} y={(at === 0 ? 108 : 114) + index * 20} size={at === 1 && index === 0 ? 12.5 : 10.5}>{text}</W>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Lupus =================================================================================================

/** A shield, centred on (x, y). */
const Shield = ({ x, y, s = 1, fill = INK }: { x: number; y: number; s?: number; fill?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M0 -24 L20 -16 V2 C20 16 10 24 0 28 C-10 24 -20 16 -20 2 V-16 Z" fill={fill} stroke={INK} strokeWidth={2 / s} strokeLinejoin="round" />;

/** A butterfly-shaped rash across the cheeks, its body along the bridge of the nose at (x, y). */
const Butterfly = ({ x, y, s = 1, opacity = 0.85 }: { x: number; y: number; s?: number; opacity?: number }) => {
  const wing = "M0 -4 C-8 -16 -30 -16 -32 -4 C-32 6 -14 8 0 4 Z M0 4 C-10 8 -24 16 -20 22 C-14 26 -4 16 0 8 Z";
  return <g transform={`translate(${x} ${y}) scale(${s})`} fill={GOLD} opacity={opacity}><path d={wing} /><path d={wing} transform="scale(-1 1)" /></g>;
};

function SleTurnedShield(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const clumps = [[-30, 58], [30, 58], [-16, 108], [16, 108], [0, 54]];
  const boxes = [["Autoantibodies", "Swelling, pain, damage"], ["SLE: any part of the body", "Discoid: skin only", "Drug-induced"], ["Genes", "Hormones", "Environment", "Not contagious"], [], []][at];
  const caps = ["The immune system attacks the body", "SLE can affect any part of the body", "Genes, hormones and environment", "Often starts between 15 and 55", "Most people keep it under control"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When the immune system turns inward" label="What lupus is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A figure with small clumps on the skin, joints and kidneys, and the body's shield turned towards it">
      <Figure x={70} y={40} s={0.95}>
        {clumps.map(([x, y]) => <g key={`${x} ${y}`} opacity={at === 0 ? 1 : at === 4 ? 0.15 : 0.35}><circle cx={x - 3} cy={y} r="3.5" fill={INK} /><circle cx={x + 3} cy={y - 2} r="3.5" fill={INK} /><circle cx={x + 1} cy={y + 4} r="3.5" fill={INK} /></g>)}
      </Figure>
      {(at === 0 || at === 4) && <Shield x={236} y={62} s={1.25} fill={at === 4 ? SOFT : INK} />}
      {at === 0 && <Arrow d="M206 64 H126" head="M134 57 L126 64 L134 71" />}
      {at === 4 && <Tick x={236} y={62} />}
      {boxes.map((text, index) => <Box key={text} x={226} y={(at === 0 ? 124 : at === 2 ? 46 : 56) + index * (at === 2 ? 34 : 40)} text={text} lit={at === 2 ? index === 3 : index === 0} />)}
      {at === 3 && <g>
        <rect x="150" y="70" width="150" height="16" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x="178" y="70" width="75" height="16" rx="8" fill={GOLD} />
        <W x={178} y={60} size={10.5}>15</W><W x={253} y={60} size={10.5}>55</W>
        <W x={225} y={106} size={10}>Age</W>
        <W x={225} y={136} size={10.5}>More common in women</W>
        <W x={225} y={156} size={10.5}>2 in 10 start in childhood</W>
      </g>}
      {at === 4 && <><Box x={226} y={128} text="Most keep it under control" lit /><W x={226} y={162} size={10.5}>Better if found early</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SleButterflyFace(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rash = at === 0 || at === 3 ? 0.85 : 0.3;
  const others = ["Headaches", "Mouth ulcers", "Hair loss", "Raynaud's"];
  const caps = ["Joint pain, fatigue and rashes", "Headaches, ulcers, hair loss and more", "Small joints; damage is unlikely", "Flares, then settling: remission", "Different people, different symptoms"];
  const hand = (lit: boolean) => <g>
    {[208, 221, 234, 247].map((x, index) => <rect key={x} x={x - 5} y={index === 0 || index === 3 ? 82 : 74} width="11" height="40" rx="5.5" fill={WHITE} stroke={INK} strokeWidth="2" />)}
    <path d="M200 116 L188 100 Q184 94 190 92 L204 104" fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <rect x="200" y="108" width="56" height="44" rx="12" fill={WHITE} stroke={INK} strokeWidth="2" />
    {[208, 221, 234, 247].map(x => <circle key={x} cx={x + 0.5} cy={112} r="4" fill={lit ? GOLD : SOFT} />)}
    {[208, 221, 234, 247].map(x => <circle key={`m${x}`} cx={x + 0.5} cy={96} r="3.5" fill={lit ? GOLD : SOFT} />)}
  </g>;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Pain, tiredness and a telltale rash" label="Symptoms of lupus" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A face with a butterfly-shaped rash over the cheeks and nose, beside a hand with sore joints and other symptoms">
      <circle cx="84" cy="96" r="54" fill={WHITE} stroke={INK} strokeWidth="3" />
      <Butterfly x={84} y={100} s={0.9} opacity={rash} />
      <circle cx="66" cy="82" r="4" fill={INK} /><circle cx="102" cy="82" r="4" fill={INK} />
      <path d="M84 88 V104" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M72 126 Q84 131 96 126" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {at === 0 && <g>
        {hand(true)}
        <rect x="270" y="40" width="34" height="18" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="304" y="45" width="4" height="8" rx="1" fill={INK} /><rect x="273" y="43" width="6" height="12" rx="2" fill={GOLD} />
        <W x={232} y={176} size={10.5}>Almost 9 in 10: fatigue</W>
      </g>}
      {at === 1 && others.map((text, index) => <Box key={text} x={236} y={46 + index * 34} text={text} lit={index === 3} />)}
      {at === 2 && <g>{hand(true)}<W x={228} y={176} size={10.5}>Hands and feet</W></g>}
      {at === 3 && <g>
        <path d="M168 140 H196 C214 140 218 70 232 70 C246 70 250 140 268 140 H304" stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" />
        <circle cx="232" cy="70" r="6" fill={GOLD} />
        <W x={232} y={58} size={10.5}>Flare</W>
        <W x={284} y={128} size={10.5}>Remission</W>
        <W x={232} y={166} size={10}>A few weeks, or longer</W>
      </g>}
      {at === 4 && <g>
        <Person x={200} y={100} />
        <Person x={278} y={100} fill={SOFT} />
        <W x={200} y={140} size={10}>Rash, joints</W>
        <W x={278} y={140} size={10}>Kidneys</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SleClueJigsaw(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const pieces = [["ANA", 44, 34], ["dsDNA", 104, 34], ["Urine", 44, 94], ["Symptoms", 104, 94]] as const;
  const lit = (index: number) => at === 1 || (at === 2 && index < 2) || (at === 3 && index === 2);
  const caps = ["GP tests, then a rheumatologist", "No one test: all the clues together", "ANA alone cannot confirm lupus", "A urine test can spot kidney problems", "About 6 years, on average, to diagnose"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Diagnosis" title="No single test, many clues" label="Tests and diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four jigsaw pieces, for blood tests, a urine test and symptoms, fitting together into a diagnosis">
      {pieces.map(([label, x, y], index) => <g key={label} opacity={at === 0 || at === 4 ? 0.5 : lit(index) ? 1 : 0.4}>
        <rect x={x} y={y} width="56" height="56" rx="6" fill={lit(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={x + 28} y={y + 32} size={10} fill={lit(index) ? WHITE : TEXT}>{label}</W>
      </g>)}
      {[[100, 62], [132, 90], [72, 90], [100, 122]].map(([x, y]) => <circle key={`${x} ${y}`} cx={x} cy={y} r="6" fill={TINT} stroke={INK} strokeWidth="2" />)}
      {at === 0 && <g>
        <Person x={204} y={96} /><W x={204} y={132} size={10.5}>GP</W>
        <Arrow d="M226 84 H254" head="M247 77 L254 84 L247 91" />
        <Person x={280} y={96} fill={SOFT} /><W x={280} y={132} size={10.5}>Specialist</W>
      </g>}
      {at === 1 && <><Box x={240} y={70} text="No single test" lit /><Box x={240} y={110} text="All clues together" /></>}
      {at === 2 && <g>
        <W x={180} y={56} size={10} anchor="start">With lupus: about 95%</W>
        <rect x="180" y="62" width="120" height="14" rx="5" fill={LINE} /><rect x="180" y="62" width="114" height="14" rx="5" fill={INK} />
        <W x={180} y={104} size={10} anchor="start">No conditions: 1 in 10</W>
        <rect x="180" y="110" width="120" height="14" rx="5" fill={LINE} /><rect x="180" y="110" width="12" height="14" rx="5" fill={GOLD} />
        <W x={240} y={152} size={10.5}>Positive ANA</W>
      </g>}
      {at === 3 && <g>
        <path d="M224 50 H256 L252 96 H228 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M226 70 H254 L252 96 H228 Z" fill={GOLD} opacity=".6" />
        <rect x="220" y="40" width="40" height="10" rx="3" fill={INK} />
        <W x={240} y={122} size={10.5}>Protein or blood</W>
        <W x={240} y={142} size={10.5}>Scans if needed</W>
      </g>}
      {at === 4 && <g>
        <W x={240} y={74} size={15}>About 6 years</W>
        <W x={240} y={96} size={10}>symptoms to diagnosis</W>
        <Box x={160} y={174} text="Not listened to? Ask for a second opinion" />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SleQuietOrgans(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const boxes = [["Mild: joints and skin", "Moderate: other organs", "Severe: organ damage"], ["Foamy urine", "Swollen legs or eyes", "High blood pressure"], ["Sharp chest pain", "Breathlessness", "Check BP, cholesterol"], ["Anaemia", "Easy bruising", "Blood clots", "Dizziness or memory loss"], ["999 or A&E", "Chest pain 15 min or more", "Difficulty breathing", "Do not drive to A&E"]][at];
  const caps = ["Most do not have serious complications", "Kidney damage is silent until severe", "Inflamed linings: sharp chest pain", "Anaemia, easy bruising or clots", "Chest pain 15 minutes or more: 999"];
  const linings = at === 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Organs" title="The quiet organs to keep watching" label="Kidneys, heart and lungs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body outline with the lungs, heart and kidneys, the organs lupus can affect">
      <path d="M40 34 C40 26 50 22 60 22 H110 C120 22 130 26 130 34 L136 110 C138 140 130 168 122 178 H48 C40 168 32 140 34 110 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="64" cy="72" rx="16" ry="28" fill={TINT} stroke={linings ? GOLD : SOFT} strokeWidth={linings ? 4 : 2} />
      <ellipse cx="106" cy="72" rx="16" ry="28" fill={TINT} stroke={linings ? GOLD : SOFT} strokeWidth={linings ? 4 : 2} />
      <HeartShape x={88} y={98} size={30} fill={at === 2 ? SOFT : WHITE} stroke={linings ? GOLD : INK} width={linings ? 3.5 : 2.5} />
      <Kidney x={62} y={144} s={0.42} fill={at === 1 ? GOLD : WHITE} />
      <Kidney x={108} y={144} s={0.42} flip fill={at === 1 ? GOLD : WHITE} />
      {at === 3 && <><Drop x={70} y={122} s={1.3} /><Drop x={100} y={122} s={1.3} fill={SOFT} /></>}
      {boxes.map((text, index) => <Box key={text} x={232} y={(boxes.length === 4 ? 44 : 56) + index * (boxes.length === 4 ? 34 : 42)} text={text} size={text.length > 22 ? 9.5 : 10} lit={index === 0 && (at === 0 || at === 4)} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SleSlowFill(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const fill = [0, 22, 260, 260, 260][at];
  const caps = ["Usually the first lupus treatment", "With a meal or milk, same time daily", "Weeks to start, a year for full effect", "Yearly eye checks after five years", "Can be taken in pregnancy"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Hydroxychloroquine" title="The steady first-line medicine" label="Hydroxychloroquine" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A slow-filling bar from starting the tablets to a year, with yearly eye checks after five years">
      <Pill x={42} y={36} />
      <W x={68} y={40} size={11} anchor="start">Hydroxychloroquine</W>
      <rect x="30" y="72" width="260" height="20" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {fill > 0 && <rect x="30" y="72" width={fill} height="20" rx="10" fill={at === 2 ? GOLD : SOFT} />}
      <W x={30} y={110} size={10} anchor="start">Start</W>
      <W x={290} y={110} size={10} anchor="end">1 year</W>
      {at === 2 && <><path d="M95 66 V98" stroke={INK} strokeWidth="2.5" /><W x={95} y={62} size={10} anchor="start">12 weeks or longer</W></>}
      {at === 0 && <Chips labels={["Skin, joints", "Fever, fatigue", "Pleurisy"]} lit={0} y={132} />}
      {at === 1 && <g>
        <Clock x={56} y={146} r={16} hand={1.5} />
        <W x={56} y={182} size={10}>Same time</W>
        <path d="M120 128 L123 164 H141 L144 128 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M121 138 L123 162 H141 L143 138 Z" fill={TINT} />
        <W x={132} y={182} size={10}>Meal or milk</W>
        <W x={242} y={144} size={10.5}>Antacids:</W>
        <W x={242} y={162} size={10.5}>wait 4 hours</W>
      </g>}
      {at === 2 && <><W x={160} y={142} size={11}>Keep taking it</W><W x={160} y={162} size={10}>No help after 6 months? Ask</W></>}
      {at === 3 && <g>
        {[110, 150, 190, 230, 270].map((x, index) => <Eye key={x} x={x} y={146} s={0.9} fill={index === 0 ? GOLD : WHITE} />)}
        <W x={110} y={176} size={10}>Year 5</W>
        <W x={230} y={176} size={10}>Then once a year</W>
      </g>}
      {at === 4 && <><Box x={160} y={140} text="Pregnancy: often continued" lit /><Box x={160} y={174} text="Breastfeeding is possible" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SleSteroidBridge(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const row = [["Matched to you", "Changed over time"], ["Fast: a bridge", "Reduce slowly"], ["Up to 3 months", "Regular blood tests"], ["B cells lowered", "Up to 6 months"], ["Avoid chickenpox", "Carry an alert card"]][at];
  const caps = ["Matched to how lupus affects you", "Steroids bridge while others start", "Calm the immune system; weeks to work", "Biologics target B cells", "More prone to infection; carry a card"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Other medicines" title="A fast bridge, then lasting control" label="Steroids and other medicines" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A short bridge labelled steroids leading on to a road signposted to immunosuppressants and biologics">
      <path d="M140 124 H306" stroke={LINE} strokeWidth="12" strokeLinecap="round" />
      <path d="M150 124 H300" stroke={WHITE} strokeWidth="2" strokeDasharray="6 8" />
      <path d="M20 124 H140" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <path d="M20 124 Q80 64 140 124" stroke={at === 1 ? GOLD : INK} strokeWidth="4" fill="none" />
      {[44, 62, 80, 98, 116].map(x => <path key={x} d={`M${x} ${124 - (1 - ((x - 80) / 60) ** 2) * 30} V124`} stroke={SOFT} strokeWidth="2" />)}
      <W x={80} y={144} size={10.5}>Steroids</W>
      <path d="M205 72 V118 M270 104 V118" stroke={INK} strokeWidth="3" />
      <rect x="147" y="52" width="116" height="20" rx="5" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2" />
      <W x={205} y={66} size={9.5} fill={at === 2 ? WHITE : TEXT}>Immunosuppressants</W>
      <rect x="232" y="84" width="76" height="20" rx="5" fill={at === 3 ? INK : WHITE} stroke={INK} strokeWidth="2" />
      <W x={270} y={98} size={9.5} fill={at === 3 ? WHITE : TEXT}>Biologics</W>
      {row.map((text, index) => <Box key={text} x={92 + index * 140} y={170} text={text} lit={index === 0} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SleFlareWave(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const triggers = [["Sun", 26, 96], ["Rest", 62, 110], ["Infection", 98, 96], ["Stress", 134, 110]] as const;
  const caps = ["A flare, then quieter: remission", "Sun, little rest, infection, stress", "Gentle exercise; rest when needed", "Report new symptoms to your team"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Flares" title="Spotting flares and getting through them" label="Flares" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A wave rising into a flare and settling back, with the things that can set it off">
      <path d="M20 134 C60 134 80 132 110 124 C140 114 150 54 180 54 C210 54 220 122 250 130 C270 134 290 134 300 134" stroke={at === 0 ? GOLD : INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <W x={180} y={44} size={10.5}>Flare</W>
      <W x={276} y={122} size={10.5}>Remission</W>
      <g opacity={at === 1 ? 1 : 0.3}>
        <Sun x={26} y={70} r={7} />
        <Moon x={62} y={70} />
        <Germ x={98} y={70} r={6} />
        <path d="M122 76 a8 8 0 0 1 4 -14 a10 10 0 0 1 18 2 a7 7 0 0 1 2 12 Z" fill={SOFT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        {at === 1 && triggers.map(([label, x, y]) => <W key={label} x={x} y={y} size={9.5}>{label}</W>)}
      </g>
      {at === 3 && <><Phone x={228} y={70} lit /><W x={270} y={74} size={10}>Advice line</W></>}
      {at === 0 && <Box x={160} y={168} text="A few weeks, sometimes longer" />}
      {at === 1 && <Box x={160} y={168} text="Also puberty, after birth, menopause" />}
      {at === 2 && <Chips labels={["Gentle exercise", "Rest", "Relaxation"]} lit={0} y={154} />}
      {at === 3 && <Box x={160} y={168} text="Report new or returning symptoms" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** One small icon for a check-up, centred on (x, y). */
const CheckIcon = ({ kind, x, y }: { kind: string; x: number; y: number }) => {
  if (kind === "tube") return <g><rect x={x - 5} y={y - 13} width="10" height="26" rx="5" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x={x - 3} y={y} width="6" height="11" rx="3" fill={INK} /></g>;
  if (kind === "pot") return <g><path d={`M${x - 8} ${y - 8} H${x + 8} L${x + 6} ${y + 12} H${x - 6} Z`} fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><rect x={x - 9} y={y - 13} width="18" height="5" rx="2" fill={INK} /><path d={`M${x - 6} ${y + 2} H${x + 6}`} stroke={GOLD} strokeWidth="5" /></g>;
  if (kind === "cuff") return <g><circle cx={x} cy={y} r="11" fill={WHITE} stroke={INK} strokeWidth="2" /><path d={`M${x} ${y} L${x + 6} ${y - 6}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" /></g>;
  if (kind === "eye") return <Eye x={x} y={y} s={0.8} />;
  if (kind === "note") return <g><rect x={x - 9} y={y - 12} width="18" height="24" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><path d={`M${x - 5} ${y - 5} H${x + 5} M${x - 5} ${y} H${x + 5} M${x - 5} ${y + 5} H${x + 2}`} stroke={GOLD} strokeWidth="2" /></g>;
  return <Tick x={x} y={y} />;
};

function SleCheckCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const plans: Record<number, string>[] = [
    Object.fromEntries(Array.from({ length: 12 }, (_, index) => [index, "tick"])),
    { 0: "tube", 1: "pot", 3: "tube", 4: "pot", 6: "tube", 7: "pot", 9: "tube", 10: "pot" },
    { 1: "cuff", 5: "cuff", 9: "cuff" },
    { 0: "tube", 2: "tube", 4: "tube", 6: "tube", 8: "tube", 10: "tube", 11: "eye" },
    { 5: "note", 11: "note" },
  ];
  const notes = ["Problems dealt with quickly", "Kidney and liver tests too", "Steroids: blood sugar checks too", "Keep a note of when tests are due", "Make good use of the clinic nurse"];
  const caps = ["Checks pick up problems quickly", "Blood for anaemia; urine for kidneys", "Blood pressure and cholesterol checks", "DMARD blood tests; eye checks", "Write questions a day or two before"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Regular checks" title="Small checks that catch problems early" label="Regular checks and blood tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A calendar of check-ups with blood tubes, urine pots, blood pressure checks and eye checks">
      <rect x="22" y="22" width="276" height="20" rx="6" fill={INK} />
      <W x={160} y={36} size={10.5} fill={WHITE}>Your check-ups</W>
      {Array.from({ length: 12 }, (_, index) => {
        const x = 22 + (index % 6) * 46, y = 46 + Math.floor(index / 6) * 50, kind = plans[at][index];
        return <g key={index}>
          <rect x={x} y={y} width="44" height="46" rx="5" fill={kind ? TINT : WHITE} stroke={LINE} strokeWidth="2" />
          {kind && <CheckIcon kind={kind} x={x + 22} y={y + 23} />}
        </g>;
      })}
      <W x={160} y={168} size={10.5}>{notes[at]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SleShadeClock(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["UV can cause rashes and worse fatigue", "Factor 50+, on prescription with lupus", "Shade 11am to 3pm, March to October", "Vitamin D: 10 micrograms a day"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sun protection" title="Factor 50, a hat and shade" label="Sun protection" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock with the hours from 11am to 3pm shaded, beside sunscreen, a wide-brimmed hat and a vitamin D tablet">
      <g opacity={at === 0 || at === 2 ? 1 : 0.5}><Sun x={88} y={26} r={8} /></g>
      <circle cx="88" cy="106" r="54" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M88 106 L61 59.2 A54 54 0 0 1 142 106 Z" fill={at === 2 ? GOLD : TINT} opacity={at === 2 ? 0.75 : 1} />
      <circle cx="88" cy="106" r="54" fill="none" stroke={INK} strokeWidth="3" />
      {Array.from({ length: 12 }, (_, index) => { const a = index * Math.PI / 6; return <path key={index} d={`M${(88 + 46 * Math.sin(a)).toFixed(1)} ${(106 - 46 * Math.cos(a)).toFixed(1)} L${(88 + 52 * Math.sin(a)).toFixed(1)} ${(106 - 52 * Math.cos(a)).toFixed(1)}`} stroke={INK} strokeWidth="2" />; })}
      <W x={46} y={50} size={10}>11am</W>
      <W x={150} y={110} size={10} anchor="start">3pm</W>
      {at === 0 && <g>
        <circle cx="244" cy="70" r="28" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <Butterfly x={244} y={76} s={0.5} opacity={0.85} />
        <circle cx="234" cy="62" r="2.5" fill={INK} /><circle cx="254" cy="62" r="2.5" fill={INK} />
        <Box x={244} y={128} text="Skin rashes" lit />
        <Box x={244} y={162} text="Fatigue can worsen" />
      </g>}
      {at === 1 && <g>
        <rect x="204" y="48" width="32" height="62" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="212" y="38" width="16" height="10" rx="3" fill={INK} />
        <W x={220} y={86} size={13}>50</W>
        <rect x="250" y="54" width="44" height="54" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M258 68 H286 M258 80 H286 M258 92 H276" stroke={SOFT} strokeWidth="2.5" />
        <W x={248} y={136} size={10.5}>6 to 8 teaspoons</W>
        <W x={248} y={156} size={10.5}>Again every 2 hours</W>
      </g>}
      {at === 2 && <g>
        <ellipse cx="244" cy="76" rx="44" ry="9" fill={SOFT} stroke={INK} strokeWidth="2" />
        <path d="M222 74 Q222 46 244 46 Q266 46 266 74 Z" fill={INK} />
        <W x={244} y={116} size={10.5}>Wide-brimmed hat</W>
        <W x={244} y={136} size={10.5}>Long sleeves</W>
        <W x={244} y={156} size={10.5}>Close-weave fabric</W>
      </g>}
      {at === 3 && <g>
        <g transform="translate(244 66) scale(1.4)"><Pill x={0} y={0} /></g>
        <W x={244} y={104} size={10.5}>Vitamin D</W>
        <W x={244} y={124} size={10.5}>10 micrograms a day</W>
        <W x={244} y={154} size={10}>Holidays: ask if in doubt</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SleEnergyBars(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const boom = [52, 4, 4, 34, 4, 4, 4];
  const caps = ["Rest does not really ease fatigue", "Blood tests can find some causes", "Spread energy out: no boom and bust", "Walking and swimming can help"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Fatigue" title="Fatigue is more than tiredness" label="Fatigue and pacing" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two weeks of energy: one spent in spikes then empty, one used in small, even steps">
      <W x={130} y={34} size={10} anchor="start">Boom and bust</W>
      <W x={130} y={118} size={10} anchor="start">Paced: small, even steps</W>
      <g opacity={at === 2 ? 0.5 : 1}>{boom.map((h, index) => <rect key={index} x={130 + index * 24} y={96 - h} width="18" height={h} rx="3" fill={SOFT} />)}</g>
      {boom.map((_, index) => <rect key={index} x={130 + index * 24} y={146} width="18" height="22" rx="3" fill={at === 2 ? GOLD : INK} />)}
      <path d="M126 96 H296 M126 168 H296" stroke={LINE} strokeWidth="2" />
      {at === 0 && <g>
        <rect x="34" y="48" width="50" height="26" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="84" y="55" width="5" height="12" rx="1" fill={INK} /><rect x="38" y="52" width="8" height="18" rx="2" fill={GOLD} />
        <W x={62} y={100} size={10.5}>An hour</W>
        <W x={62} y={116} size={10.5}>or days</W>
      </g>}
      {at === 1 && <g><Drop x={62} y={62} s={2.2} /><W x={62} y={104} size={10.5}>Blood tests</W><W x={62} y={122} size={10}>Anaemia, thyroid</W></g>}
      {at === 2 && <g><W x={62} y={60} size={10.5}>Smaller tasks,</W><W x={62} y={76} size={10.5}>spread out</W><W x={62} y={112} size={10}>Plan, prioritise</W></g>}
      {at === 3 && <g><Person x={62} y={84} /><W x={62} y={120} size={10.5}>Walk or swim</W><W x={62} y={138} size={10}>Start gently</W></g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SlePlanTimeline(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stops = [["Talk first", 40], ["Folic acid", 115], ["Pregnancy", 195], ["Breastfeeding", 270]] as const;
  const lit = [[0], [0, 2], [2], [0], [1, 3]][at];
  const boxes = [["See a doctor before trying", "Best when lupus is not active", "Maybe a lupus obstetrician"], [], ["Aspirin or heparin", "Baby heart scans", "Checks for pre-eclampsia"], ["Talk about contraception", "Mirena coil: often an option", "Oestrogen pills: maybe avoid"], ["Folic acid: 3 months before", "And 3 months into pregnancy", "Breastfeeding: ask your team"]][at];
  const caps = ["Plan with a doctor; try when quiet", "Some stop first; some are safe", "Extra checks, with close monitoring", "The Mirena coil is often an option", "Folic acid from 3 months before"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pregnancy" title="Planning a pregnancy with lupus" label="Pregnancy and lupus" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from talking to the lupus team, to folic acid, pregnancy and breastfeeding">
      <path d="M40 54 H270" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
      {stops.map(([label, x], index) => <g key={label}>
        <circle cx={x} cy="54" r={lit.includes(index) ? 9 : 6} fill={lit.includes(index) ? GOLD : INK} stroke={WHITE} strokeWidth="2" />
        <W x={x} y={36} size={10}>{label}</W>
      </g>)}
      {boxes.map((text, index) => <Box key={text} x={160} y={94 + index * 36} text={text} lit={index === 0} />)}
      {at === 1 && <g>
        <W x={84} y={92} size={10.5}>Stop first</W>
        {["Methotrexate", "Mycophenolate", "Cyclophosphamide", "Leflunomide"].map((name, index) => <W key={name} x={84} y={114 + index * 18} size={9.5}>{name}</W>)}
        <path d="M160 80 V180" stroke={LINE} strokeWidth="2" />
        <W x={236} y={92} size={10.5}>Safe</W>
        {["Steroids", "Hydroxychloroquine", "Azathioprine"].map((name, index) => <W key={name} x={236} y={114 + index * 18} size={9.5}>{name}</W>)}
        <path d="M212 89 l4 4 l7 -8" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SleBenchTalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lines = [["Pain and fatigue", "Steroids can affect mood", "Talk to your prescriber"], ["Memory", "Concentration", "Headaches, dizziness"], ["Someone you trust", "Mindfulness", "Talking therapies, CBT", "Regular exercise"], ["LUPUS UK", "01708 731251", "Arthritis UK", "0800 5200 520"], ["NHS 111", "mental health option", "Samaritans", "116 123"]][at];
  const caps = ["Pain and fatigue can affect mood", "Brain fog: memory and concentration", "Talk to someone you trust", "Helplines, forums and peer groups", "Urgent help: NHS 111 or Samaritans"];
  const card = at === 3 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood and memory" title="Mood, memory and where to turn" label="Mood, memory and support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people talking calmly on a bench, beside a thought cloud for brain fog and a card of helplines">
      <rect x="26" y="98" width="128" height="7" rx="3" fill={SOFT} />
      <Person x={62} y={118} scale={0.95} />
      <Person x={118} y={118} scale={0.95} fill={SOFT} />
      <rect x="22" y="126" width="136" height="8" rx="3" fill={INK} />
      <path d="M36 134 V160 M144 134 V160" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="90" cy="54" rx="24" ry="14" fill={at === 2 ? GOLD : WHITE} stroke={at === 2 ? GOLD : LINE} strokeWidth="2" opacity={at === 2 ? 0.85 : 1} />
      <path d="M80 66 L74 78 L90 67" fill={at === 2 ? GOLD : WHITE} stroke={at === 2 ? GOLD : LINE} strokeWidth="2" strokeLinejoin="round" opacity={at === 2 ? 0.85 : 1} />
      {at === 1 && <g>
        <path d="M206 80 a14 14 0 0 1 6 -26 a20 20 0 0 1 36 -4 a16 16 0 0 1 22 22 a12 12 0 0 1 -6 8 Z" fill={TINT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        {[[222, 64, 10], [242, 58, -15], [258, 70, 20], [236, 72, 0]].map(([x, y, a]) => <rect key={`${x} ${y}`} x={x - 5} y={y - 5} width="10" height="10" rx="2" fill={GOLD} transform={`rotate(${a} ${x} ${y})`} />)}
      </g>}
      {card && <rect x="176" y="32" width="128" height="134" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />}
      {lines.map((text, index) => <W key={text} x={240} y={card ? 56 + index * 28 - (index % 2) * 8 : at === 1 ? 116 + index * 20 : at === 2 ? 70 + index * 26 : 110 + index * 22} size={card && index % 2 === 0 ? 11 : 10.5}>{text}</W>)}
      {at === 4 && <W x={240} y={186} size={10}>Not safe? 999 or A&E now</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function ImmunePieceView({ piece, ...props }: { piece: ImmunePiece } & PieceProps) {
  switch (piece) {
    case "pmr-warm-girdle": return <PmrWarmGirdle {...props} />;
    case "pmr-morning-clock": return <PmrMorningClock {...props} />;
    case "pmr-checklist-tubes": return <PmrChecklistTubes {...props} />;
    case "pmr-temple-alert": return <PmrTempleAlert {...props} />;
    case "pmr-breakfast-dose": return <PmrBreakfastDose {...props} />;
    case "pmr-gentle-stairs": return <PmrGentleStairs {...props} />;
    case "pmr-watch-ring": return <PmrWatchRing {...props} />;
    case "pmr-path-back": return <PmrPathBack {...props} />;
    case "pmr-two-cards": return <PmrTwoCards {...props} />;
    case "pmr-half-pace": return <PmrHalfPace {...props} />;
    case "pmr-calcium-bone": return <PmrCalciumBone {...props} />;
    case "pmr-support-circle": return <PmrSupportCircle {...props} />;
    case "sle-turned-shield": return <SleTurnedShield {...props} />;
    case "sle-butterfly-face": return <SleButterflyFace {...props} />;
    case "sle-clue-jigsaw": return <SleClueJigsaw {...props} />;
    case "sle-quiet-organs": return <SleQuietOrgans {...props} />;
    case "sle-slow-fill": return <SleSlowFill {...props} />;
    case "sle-steroid-bridge": return <SleSteroidBridge {...props} />;
    case "sle-flare-wave": return <SleFlareWave {...props} />;
    case "sle-check-calendar": return <SleCheckCalendar {...props} />;
    case "sle-shade-clock": return <SleShadeClock {...props} />;
    case "sle-energy-bars": return <SleEnergyBars {...props} />;
    case "sle-plan-timeline": return <SlePlanTimeline {...props} />;
    case "sle-bench-talk": return <SleBenchTalk {...props} />;
  }
}
