import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { UPPER_PIECES, type UpperPiece } from "@/content/upper-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Acid reflux, Stomach ulcers, Gallstones and Pancreatitis pages' own pieces (content/upper-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Kidneys, liver & digestion pieces. Each is steered by the card's
// sections; pictures show ideas, never anyone's own body or results.

export const isUpperPiece = (piece: NewsPiece): piece is UpperPiece => (UPPER_PIECES as readonly string[]).includes(piece);

// ==== Shared shapes =========================================================================================

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5, dim = false }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number; dim?: boolean }) =>
  <g opacity={dim ? 0.4 : 1}><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A column of labelled boxes from (x, y) downwards; `lit` boxes are filled, the rest faded when `fade`. */
const Stack = ({ x, y, labels, lit, width = 130, gap = 32, size = 10.5, fade = false }: { x: number; y: number; labels: string[]; lit: (index: number) => boolean; width?: number; gap?: number; size?: number; fade?: boolean }) =>
  <g>{labels.map((label, index) => <g key={label} opacity={fade && !lit(index) ? 0.4 : 1}><Box x={x + width / 2} y={y + 13 + index * gap} w={width} text={label} lit={lit(index)} size={size} /></g>)}</g>;
/** The caption under a picture. */
const Say = ({ children }: { children: ReactNode }) => <W x={160} y={206} size={11}>{children}</W>;
const Tick = ({ x, y, s = 8 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y} l${s * 0.7} ${s * 0.7} l${s * 1.3} ${-s * 1.4}`} stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const Cross = ({ x, y, size = 1 }: { x: number; y: number; size?: number }) =>
  <path transform={`translate(${x} ${y}) scale(${size})`} d="M-6 -6 L6 6 M6 -6 L-6 6" fill="none" stroke={GOLD} strokeWidth={3.5 / size} strokeLinecap="round" />;
/** A gold arrow along `d`, with its head drawn by `head`. */
const Arrow = ({ d, head, flow = false }: { d: string; head: string; flow?: boolean }) =>
  <g stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} strokeDasharray={flow ? "6 5" : undefined} className={flow ? "lib-types-flow" : undefined} /><path d={head} /></g>;
/** A phone centred on (x, y) with a number on its screen. */
const Phone = ({ x, y, text, lit = false, w = 40, h = 64 }: { x: number; y: number; text: string; lit?: boolean; w?: number; h?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="7" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={x} y={y + 4} size={11} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A car with a cross through it: do not drive. */
const CarNo = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M-20 4 V-2 L-14 -10 H12 L18 -2 V4 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="-11" cy="5" r="4" fill={INK} /><circle cx="11" cy="5" r="4" fill={INK} />
    <path d="M-16 -14 L16 12 M16 -14 L-16 12" stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />
  </g>;
const Drop = ({ x, y, r = 8, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r * 1.7} C${x + r * 0.4} ${y - r}, ${x + r} ${y - r * 0.4}, ${x + r} ${y + r * 0.1} A${r} ${r} 0 0 1 ${x - r} ${y + r * 0.1} C${x - r} ${y - r * 0.4}, ${x - r * 0.4} ${y - r}, ${x} ${y - r * 1.7} Z`} fill={fill} />;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Moon = ({ x, y, r = 14 }: { x: number; y: number; r?: number }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 0 0 ${x} ${y + r} A${r * 1.3} ${r * 1.3} 0 0 1 ${x} ${y - r} Z`} fill={SOFT} />;
/** A plate seen from above. */
const Plate = ({ x, y, r = 20 }: { x: number; y: number; r?: number }) =>
  <g><circle cx={x} cy={y} r={r} fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y} r={r * 0.68} fill="none" stroke={LINE} strokeWidth="2" /></g>;
/** A wine glass, about 24 wide and 40 tall. */
const WineGlass = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={INK} strokeWidth={2.5 / scale} strokeLinecap="round" strokeLinejoin="round">
    <path d="M-11 -20 H11 C11 -6, 5 0, 0 0 C-5 0, -11 -6, -11 -20 Z" fill={WHITE} /><path d="M-9 -10 H9 C7 -4, 3 -2, 0 -2 C-3 -2, -7 -4, -9 -10 Z" fill={INK} stroke="none" />
    <path d="M0 0 V16 M-8 16 H8" />
  </g>;
const Cigarette = ({ x, y, crossed = false }: { x: number; y: number; crossed?: boolean }) =>
  <g transform={`translate(${x} ${y})`}>
    <rect x="-26" y="-5" width="52" height="10" rx="2" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <rect x="-26" y="-5" width="14" height="10" rx="2" fill={SOFT} />
    <path d="M30 -8 C36 -14, 28 -20, 34 -26" fill="none" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />
    {crossed && <path d="M-22 -18 L22 18 M22 -18 L-22 18" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />}
  </g>;
/** A blood test tube centred on (x, y). */
const Tube = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 8} y={y - 28} width="16" height="56" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 6} y={y} width="12" height="26" rx="6" fill={SOFT} /><rect x={x - 10} y={y - 32} width="20" height="8" rx="3" fill={INK} /></g>;
/** A small sample pot centred on (x, y). */
const Pot = ({ x, y, color = INK }: { x: number; y: number; color?: string }) =>
  <g fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round"><path d={`M${x - 12} ${y - 10} H${x + 12} L${x + 9} ${y + 16} H${x - 9} Z`} /><rect x={x - 14} y={y - 17} width="28" height="6" rx="2" fill={color} /></g>;
const House = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g transform={`translate(${x} ${y})`}><path d="M-18 -2 L0 -18 L18 -2 V16 H-18 Z" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><rect x="-5" y="4" width="10" height="12" fill={lit ? WHITE : SOFT} /></g>;
const Key = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`} fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round"><circle cx="-8" cy="0" r="5" /><path d="M-3 0 H10 M6 0 V4 M10 0 V4" /></g>;
/** A thick tube (bowel or duct) along `d`. */
const Pipe = ({ d, width = 14 }: { d: string; width?: number }) =>
  <g fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} stroke={INK} strokeWidth={width} /><path d={d} stroke={TINT} strokeWidth={width - 6} /></g>;

const polar = (cx: number, cy: number, r: number, deg: number) => [cx + r * Math.cos(deg * Math.PI / 180), cy + r * Math.sin(deg * Math.PI / 180)];
const sector = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const [x0, y0] = polar(cx, cy, r, a0), [x1, y1] = polar(cx, cy, r, a1);
  return `M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1} ${y1} Z`;
};

/** A stomach with the gullet coming in at the top (drawn 0 to 132 across, centred on (x, y)); the gullet joins it at
 *  (54, 25) in the stomach's own space. `duodenum` adds the first part of the bowel. */
const STOMACH = "M46 24 C26 14, 10 30, 10 56 C10 96, 36 122, 74 122 C98 122, 116 110, 124 96 L128 88 C120 82, 110 84, 104 90 C94 100, 74 100, 66 86 C60 74, 62 44, 62 26 Z";
const DUODENUM = "M124 92 C142 88, 150 104, 144 118 C138 132, 122 136, 108 132";
const Stomach = ({ x, y, scale = 1, gullet = 40, fill = TINT, stroke = INK, duodenum = false, children }: { x: number; y: number; scale?: number; gullet?: number; fill?: string; stroke?: string; duodenum?: boolean; children?: ReactNode }) =>
  <g transform={`translate(${x} ${y}) scale(${scale}) translate(-66 -66)`}>
    {gullet > 0 && <rect x="46" y={26 - gullet} width="16" height={gullet + 6} fill={WHITE} stroke={stroke} strokeWidth={3 / scale} />}
    {duodenum && <g fill="none" strokeLinecap="round"><path d={DUODENUM} stroke={stroke} strokeWidth="16" /><path d={DUODENUM} stroke={fill} strokeWidth="10" /></g>}
    <path d={STOMACH} fill={fill} stroke={stroke} strokeWidth={3 / scale} strokeLinejoin="round" />
    {children}
  </g>;

/** A head and body, front on, centred near (x, y). */
const Torso = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <circle cx="0" cy="-86" r="15" fill={WHITE} stroke={INK} strokeWidth={3 / scale} />
    <path d="M-44 -50 C-44 -62, -28 -66, 0 -66 C28 -66, 44 -62, 44 -50 L48 58 C48 68, -48 68, -48 58 Z" fill={WHITE} stroke={INK} strokeWidth={3 / scale} strokeLinejoin="round" />
  </g>;

/** A liver outline centred on (x, y), about 190 x 118 at scale 1. */
const Liver = ({ x, y, scale = 1, fill = WHITE }: { x: number; y: number; scale?: number; fill?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${scale}) translate(-100 -60)`} d="M10 40 C20 10, 90 0, 170 8 C196 11, 204 30, 188 46 C160 74, 120 104, 80 112 C50 118, 22 104, 12 80 C6 66, 6 52, 10 40 Z" fill={fill} stroke={INK} strokeWidth={4 / scale} strokeLinejoin="round" />;

/** A pear-shaped gallbladder centred on (x, y), about 32 x 50 at scale 1; children in its own space. */
const GALL = "M-4 -22 C4 -24, 8 -16, 10 -6 C14 4, 16 14, 8 22 C0 28, -12 24, -14 14 C-16 4, -10 -6, -8 -14 C-7 -18, -7 -21, -4 -22 Z";
const Gallbladder = ({ x, y, scale = 1, fill = TINT, stroke = INK, dashed = false, children }: { x: number; y: number; scale?: number; fill?: string; stroke?: string; dashed?: boolean; children?: ReactNode }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d={GALL} fill={dashed ? "none" : fill} stroke={dashed ? SOFT : stroke} strokeWidth={2.5 / scale} strokeDasharray={dashed ? `${4 / scale} ${3 / scale}` : undefined} strokeLinejoin="round" />
    {children}
  </g>;

/** A pancreas lying across, head on the left, centred on (x, y): about 144 x 40 at scale 1. */
const PANC = "M-70 4 C-72 -12, -54 -18, -40 -10 C-20 0, 20 -10, 52 -16 C66 -18, 74 -8, 66 0 C40 14, 0 22, -36 22 C-56 22, -68 16, -70 4 Z";
const Pancreas = ({ x, y, scale = 1, fill = TINT, stroke = INK, children }: { x: number; y: number; scale?: number; fill?: string; stroke?: string; children?: ReactNode }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}><path d={PANC} fill={fill} stroke={stroke} strokeWidth={3 / scale} strokeLinejoin="round" />{children}</g>;

/** A medicine pack centred on (x, y). */
const Pack = ({ x, y, w, label, lit = false, dim = false }: { x: number; y: number; w: number; label: string; lit?: boolean; dim?: boolean }) =>
  <g opacity={dim ? 0.4 : 1}>
    <rect x={x - w / 2} y={y - 36} width={w} height="72" rx="8" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
    <rect x={x - w / 2 + 6} y={y - 30} width={w - 12} height="10" rx="4" fill={SOFT} />
    <W x={x} y={y + 10} size={11} fill={lit ? WHITE : TEXT}>{label}</W>
  </g>;

// ==== Acid reflux and heartburn (GORD) ======================================================================

function GordValve(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Acid comes back up into the gullet", "A ring of muscle should be one-way", "Acid in the gullet causes heartburn", "Up to 1 in 4 UK adults get it", "A hiatus hernia makes reflux likelier"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The valve that should be one-way" label="What acid reflux is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The gullet joining the stomach at a ring of muscle, with acid coming back up">
      {at === 4 && <path d="M20 92 H176" stroke={SOFT} strokeWidth="4" strokeDasharray="8 6" strokeLinecap="round" />}
      <Stomach x={100} y={124} scale={0.9} gullet={60} />
      {at === 4 && <path d="M80 92 C74 70, 104 68, 98 92 Z" fill={TINT} stroke={GOLD} strokeWidth="3" strokeLinejoin="round" />}
      <ellipse cx="89" cy="87" rx="11" ry="4.5" fill="none" stroke={at === 1 ? GOLD : INK} strokeWidth={at === 1 ? 4 : 2.5} />
      {at <= 2 && <Arrow d="M89 80 V46" head="M82 54 L89 44 L96 54" flow={at === 0 && !still} />}
      {at === 2 && <ellipse cx="89" cy="58" rx="18" ry="28" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      {at <= 2 && <Stack x={188} y={48} labels={["Acid goes up", "One-way valve", "Heartburn"]} lit={index => index === at} width={120} gap={36} />}
      {at === 3 && <><W x={248} y={70} size={12}>Up to 1 in 4</W>{[0, 1, 2, 3].map(index => <Person key={index} x={203 + index * 30} y={132} scale={0.8} fill={index === 0 ? INK : LINE} />)}</>}
      {at === 4 && <><Box x={248} y={70} w={116} text="Hiatus hernia" lit /><W x={248} y={112} size={10.5}>Common over 50</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GordTriggers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often there's no obvious reason why", "Coffee, chocolate, fatty or spicy food", "Weight, smoking and alcohol add risk", "Some medicines, like ibuprofen", "Pregnancy, bending, tight clothes"];
  const labels = ["Coffee", "Spicy food", "Alcohol", "Weight", "Smoking", "Ibuprofen", "Pregnancy", "Tight clothes"];
  const litSets = [[], [0, 1], [2, 3, 4], [5], [6, 7]];
  const on = (index: number) => litSets[at].includes(index);
  const rowY = (index: number) => 35 + (index % 4) * 36;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Triggers" title="Your triggers, not everyone's" label="What sets off reflux" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A stomach ringed by things that can set off reflux">
      {labels.map((label, index) => on(index) ? <path key={label} d={`M${index < 4 ? 110 : 210} ${rowY(index)} L${index < 4 ? 134 : 190} ${index < 4 ? 112 : 120}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" /> : null)}
      <Stomach x={160} y={118} scale={0.62} gullet={40} />
      {at === 0 && <W x={158} y={130} size={24}>?</W>}
      {labels.map((label, index) => <Box key={label} x={index < 4 ? 62 : 258} y={rowY(index)} w={96} text={label} lit={on(index)} dim={at === 0} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GordBodyMap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Burning chest and a sour taste", "Cough, hoarse voice, bad breath", "Food can come back up to the mouth", "Felt in the chest, back or throat", "Sudden chest pain that stays? Call 999"];
  const litSets = [[0, 1], [2, 3], [4], [0], []];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="More than a burning chest" label="Symptoms of reflux" credit="Illustration: Rehyn. Sudden chest pain that does not go away: call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body outline showing where reflux can be felt, from the chest to the throat">
      <Torso x={80} y={120} scale={0.82} />
      <path d="M80 60 V116" stroke={SOFT} strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="88" cy="126" rx="15" ry="11" fill={TINT} stroke={INK} strokeWidth="2" />
      {(at === 0 || at === 4) && <ellipse cx="80" cy="96" rx="12" ry="18" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      {at === 3 && <ellipse cx="80" cy="86" rx="20" ry="32" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      {at === 0 && <circle cx="80" cy="54" r="5" fill={GOLD} />}
      {at === 1 && <path d="M70 66 q-6 -5 -12 0 M90 66 q6 -5 12 0" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />}
      {at === 2 && <Arrow d="M80 114 V62" head="M73 70 L80 60 L87 70" flow={!still} />}
      {at < 4 && <Stack x={150} y={22} labels={["Burning chest", "Sour taste", "Cough or hiccups", "Hoarse voice", "Food coming up"]} lit={index => litSets[at].includes(index)} width={156} gap={31} />}
      {at === 4 && <><Box x={228} y={60} w={156} text="Chest pain that stays" /><Phone x={228} y={130} text="999" lit w={46} h={66} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GordLevels(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Heartburn most days? See a GP", "Three weeks or more: get it checked", "Changed or worse? See a GP", "Swallowing hard? Urgent GP or 111", "999 or A&E. Do not drive to A&E"];
  const rows = [{ t: "See a GP", d: ["Most days", "3 weeks or more", "Changed or worse"][Math.min(at, 2)] }, { t: "Urgent GP or 111", d: "Swallowing, weight loss" }, { t: "999 or A&E", d: "Blood in sick, chest pain" }];
  const row = [0, 0, 0, 1, 2][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Checks" title="When heartburn needs a second look" label="When to get checked" credit="Illustration: Rehyn. In an emergency, call 999; do not drive to A&E."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three levels of help: a GP, an urgent GP or NHS 111, and 999">
      {rows.map((r, index) => <g key={r.t} opacity={index === row ? 1 : 0.4}>
        <rect x="14" y={22 + index * 50} width="112" height="40" rx="10" fill={index === row ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={70} y={46 + index * 50} size={10.5} fill={index === row ? WHITE : TEXT}>{r.t}</W>
        <rect x="132" y={22 + index * 50} width="174" height="40" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" />
        <W x={219} y={46 + index * 50} size={10.5}>{r.d}</W>
      </g>)}
      {at === 1 && Array.from({ length: 21 }, (_, index) => <rect key={index} x={55 + index * 10} y="174" width="8" height="8" rx="2" fill={GOLD} />)}
      {at === 4 && <><CarNo x={138} y={182} scale={0.8} /><W x={160} y={187} size={10.5} anchor="start">Do not drive to A&E</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GordDayCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Simple changes can ease heartburn", "Smaller meals; no late eating", "Your GP can help with weight", "Stop smoking; 14 units a week at most", "Raising the bed head may help"];
  const litSets = [[0, 1, 2, 3, 4], [0, 1], [2], [3], [4]];
  const labels = ["Meals", "Clothes", "Weight", "Smoking", "Bed"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Self-help" title="Small changes, less heartburn" label="Everyday changes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five cards for meals, clothes, weight, smoking and the bed">
      {labels.map((label, index) => {
        const on = litSets[at].includes(index);
        const c = on ? WHITE : INK;
        const cx = 40 + index * 60;
        return <g key={label} opacity={on ? 1 : 0.5}>
          <rect x={cx - 28} y="40" width="56" height="116" rx="10" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          <g transform={`translate(${cx} 86)`} fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {index === 0 && <><circle r="13" /><circle r="8" strokeWidth="1.5" /></>}
            {index === 1 && <><rect x="-17" y="-6" width="34" height="12" rx="3" /><rect x="-5" y="-9" width="10" height="18" rx="2" /></>}
            {index === 2 && <><rect x="-15" y="-13" width="30" height="26" rx="6" /><path d="M-8 -1 A8 8 0 0 1 8 -1 M0 -1 L4 -7" /></>}
            {index === 3 && <><rect x="-17" y="-4" width="34" height="8" rx="2" /><path d="M-14 -14 L14 14 M14 -14 L-14 14" stroke={GOLD} strokeWidth="3.5" /></>}
            {index === 4 && <><path d="M-18 -6 L18 6" strokeWidth="5" /><path d="M-16 -2 V14 M16 9 V14" /><rect x="-21" y="8" width="10" height="7" fill={c} /></>}
          </g>
          <W x={cx} y={140} size={10} fill={on ? WHITE : TEXT}>{label}</W>
        </g>;
      })}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GordFoamRaft(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["A pharmacist can suggest antacids", "Antacids neutralise acid for hours", "A foam raft keeps acid down", "Take with or soon after meals", "Over 7 days? Check with a doctor"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pharmacy" title="Quick relief, not a cure" label="Antacids and alginates" credit="Illustration: Rehyn. Ask a pharmacist which medicine suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A stomach with a foam layer floating on its contents, stopping acid rising">
      <Stomach x={96} y={122} scale={1} gullet={50}>
        <path d="M14 72 C16 100, 40 118, 74 118 C96 118, 112 108, 120 96 L122 90 C114 86, 108 88, 104 92 C94 100, 74 102, 64 88 L61 72 Z" fill={SOFT} />
        {at === 2 && [20, 28, 36, 44, 52].map(cx => <circle key={cx} cx={cx} cy="70" r="5" fill={GOLD} stroke={WHITE} strokeWidth="1.5" />)}
      </Stomach>
      {(at === 0 || at === 1) && <Arrow d="M84 76 V44" head="M77 52 L84 42 L91 52" flow={!still} />}
      {at === 0 && <><Person x={244} y={112} scale={1.3} /><W x={244} y={152} size={10.5}>Pharmacist</W></>}
      {at === 1 && <>{[[222, 90], [262, 96]].map(([cx, cy]) => <g key={cx}><circle cx={cx} cy={cy} r="14" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${cx - 8} ${cy} H${cx + 8}`} stroke={INK} strokeWidth="2" /></g>)}<W x={244} y={140} size={10.5}>Lasts a few hours</W></>}
      {at === 2 && <><Box x={244} y={74} w={116} text="Foam layer" lit /><W x={244} y={112} size={10.5}>About 4 hours</W></>}
      {at === 3 && <><Plate x={216} y={92} r={20} /><Moon x={276} y={92} /><W x={244} y={140} size={10.5}>Meals and bedtime</W></>}
      {at === 4 && <><W x={244} y={68} size={11}>7 days</W>{Array.from({ length: 7 }, (_, index) => <rect key={index} x={186 + index * 17} y="80" width="14" height="22" rx="3" fill={INK} />)}<W x={244} y={132} size={10.5}>Then ask a doctor</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GordWeekTrack(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["PPIs turn down the stomach's acid", "4 or 8 weeks; better in 2 to 3 days", "Lansoprazole: 30 minutes before food", "Pharmacy omeprazole: 2 weeks at most", "Side effects? Talk to a pharmacist"];
  const X = (weeks: number) => 30 + weeks * 32.5;
  const lit = at === 1 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="PPIs" title="Turning the acid down" label="Acid-reducing tablets" credit="Illustration: Rehyn. Take PPIs as your GP or pharmacist advises."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An 8-week course of acid-reducing tablets on a timeline">
      <g opacity={lit ? 1 : 0.45}>
        <rect x={X(0)} y="116" width={X(4) - X(0)} height="12" fill={INK} />
        <rect x={X(4)} y="116" width={X(8) - X(4)} height="12" fill={SOFT} />
        {at === 3 && <rect x={X(0)} y="116" width={X(2) - X(0)} height="12" fill={GOLD} />}
      </g>
      <W x={30} y={146} size={10} anchor="start">Start</W>
      <W x={X(2)} y={146} size={10}>2 wk</W>
      <W x={X(4)} y={146} size={10}>4 wk</W>
      <W x={X(8)} y={146} size={10} anchor="end">8 wk</W>
      {at === 0 && <><Gauge x={160} y={84} r={40} value={0.25} /><W x={160} y={104} size={10.5}>Less acid</W></>}
      {at === 1 && <><path d="M38 98 H50 L44 108 Z" fill={GOLD} /><W x={36} y={90} size={10.5} anchor="start">Better in 2 to 3 days</W></>}
      {at === 2 && <><Clock x={124} y={62} r={22} hand={0.5} /><Plate x={196} y={62} r={20} /><W x={160} y={104} size={10.5}>30 minutes before food</W></>}
      {at === 3 && <><Box x={160} y={62} w={150} text="Bought at a pharmacy" /><W x={110} y={104} size={10.5}>2 weeks at most</W></>}
      {at === 4 && <><Person x={124} y={86} /><Pill x={210} y={62} /><W x={210} y={100} size={10.5}>Ask a pharmacist</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GordScopePath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tests if medicines don't help", "A thin camera tube, 15 to 45 minutes", "No food for 6 hours before", "Capsule sponge, barium or pH tests", "Some throat pain afterwards is normal"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="What a camera test is like" label="Tests for reflux" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with a thin camera tube passing down to the stomach">
      <rect x="36" y="76" width="76" height="108" rx="20" fill={WHITE} stroke={INK} strokeWidth="3" />
      <circle cx="74" cy="46" r="22" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M86 58 C80 70, 78 92, 80 134" fill="none" stroke={SOFT} strokeWidth="6" strokeLinecap="round" />
      <Stomach x={84} y={150} scale={0.34} gullet={0} />
      {at === 1 && <><path d="M94 52 C84 66, 80 92, 81 140" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" /><circle cx="81" cy="142" r="4" fill={GOLD} /></>}
      {at === 0 && <><Box x={225} y={70} w={156} text="Medicines not helping" /><Box x={225} y={112} w={156} text="Specialist tests" lit /></>}
      {at === 1 && <><Clock x={176} y={84} r={22} hand={2.4} /><W x={206} y={89} size={10.5} anchor="start">15 to 45 minutes</W></>}
      {at === 2 && <><Plate x={180} y={84} r={22} /><Cross x={180} y={84} size={1.6} /><W x={212} y={89} size={10.5} anchor="start">6 hours</W><W x={225} y={134} size={10.5}>Small sips of water</W></>}
      {at === 3 && <Stack x={150} y={44} labels={["Capsule sponge", "Barium swallow", "pH test"]} lit={() => true} width={156} gap={36} />}
      {at === 4 && <Box x={225} y={90} w={156} text="Passes in a few hours" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GordRaisedBed(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often worse lying down, at night", "Raise the bed head 10 to 20cm", "Sleeping on your left side can help", "Last meal 3 or more hours before bed", "Antacids before bed; GP if most days"];
  const raised = at >= 1;
  const headY = raised ? 128 : 150;
  const yAt = (x: number) => headY + (150 - headY) * (x - 30) / 260;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Nights" title="Better nights with reflux" label="Reflux at night" credit="Illustration: Rehyn. Raise the bed itself; extra pillows can make it worse."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bed with its head end raised on blocks and a person lying on their side">
      <path d={`M30 ${headY} L290 150 L290 162 L30 ${headY + 12} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d={`M280 162 V180 M40 ${headY + 12} V${raised ? 160 : 180}`} stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {raised && <rect x="26" y="160" width="28" height="20" rx="3" fill={SOFT} stroke={INK} strokeWidth="2" />}
      {at === 1 && <W x={62} y={176} size={10.5} anchor="start">10 to 20cm</W>}
      <circle cx="58" cy={yAt(58) - 13} r="11" fill={INK} />
      <path d={`M76 ${yAt(76) - 10} L210 ${yAt(210) - 10}`} stroke={at === 2 ? GOLD : INK} strokeWidth="18" strokeLinecap="round" />
      {at === 0 && <><Moon x={250} y={52} /><W x={130} y={56} size={10.5}>Lying down</W></>}
      {at === 1 && <><g>{[46, 60, 74].map(y => <rect key={y} x="225" y={y - 6} width="50" height="12" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" />)}</g><Cross x={250} y={60} size={2.2} /><W x={250} y={104} size={10.5}>No extra pillows</W></>}
      {at === 2 && <W x={140} y={yAt(140) - 32} size={11}>Left side</W>}
      {at === 3 && <><Clock x={250} y={58} r={22} hand={3} /><W x={250} y={104} size={10.5}>3 hours or more</W></>}
      {at === 4 && <><Pill x={250} y={60} /><W x={250} y={96} size={10.5}>Antacid at bedtime</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GordMealDial(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["How you eat matters, not only what", "Smaller meals, chewed well, sat up", "Main meal 3 hours before bed", "Rich, spicy, fatty or acidic foods", "No bending or tight clothes after"];
  const angle = (hour: number) => hour / 24 * 360 - 90;
  const at24 = (hour: number, r: number) => polar(96, 108, r, angle(hour));
  const [a0x, a0y] = at24(18, 66), [a1x, a1y] = at24(22, 66);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Eating" title="How you eat matters too" label="Eating patterns" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day dial with small meals and the evening meal well before bed">
      <circle cx="96" cy="108" r="66" fill={WHITE} stroke={at === 0 ? GOLD : INK} strokeWidth={at === 0 ? 5 : 3} />
      {Array.from({ length: 8 }, (_, index) => { const [x0, y0] = at24(index * 3, 60), [x1, y1] = at24(index * 3, 66); return <path key={index} d={`M${x0} ${y0} L${x1} ${y1}`} stroke={LINE} strokeWidth="2" />; })}
      {at === 2 && <path d={`M${a0x} ${a0y} A66 66 0 0 1 ${a1x} ${a1y}`} fill="none" stroke={GOLD} strokeWidth="7" strokeLinecap="round" />}
      {[8, 13, 18].map(hour => { const [x, y] = at24(hour, 44); return <Plate key={hour} x={x} y={y} r={at === 1 ? 8 : 11} />; })}
      {(() => { const [x, y] = at24(22, 44); return <Moon x={x} y={y} r={11} />; })()}
      {at === 2 && <W x={96} y={112} size={11}>3 hours+</W>}
      <Stack x={182} y={30} labels={["Smaller meals", "Main meal early", "Trigger foods", "After eating"]} lit={index => index === at - 1} width={126} gap={36} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GordDoseSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Some conditions need long-term PPIs", "The lowest dose that works", "Long-term use may raise some risks", "Taken a long time? Reduce gradually", "Swallowing problems? Tell your doctor"];
  const columns = [{ x: 56, n: 3 }, { x: 116, n: 2 }, { x: 176, n: 1 }, { x: 236, n: 1 }];
  const lit = at === 1 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Long term" title="The lowest dose that works" label="Long-term medicine" credit="Illustration: Rehyn. Talk to your doctor before changing a dose."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Tablets stepping down to the lowest dose, with a yearly review">
      <g opacity={lit ? 1 : 0.45}>{columns.map(column => Array.from({ length: column.n }, (_, k) => <Pill key={`${column.x}-${k}`} x={column.x} y={150 - k * 22} />))}</g>
      {lit && <><W x={56} y={180} size={10}>Higher</W><W x={236} y={180} size={10}>Lowest</W></>}
      {at === 3 && <Arrow d="M44 84 L232 128" head="M222 120 L234 129 L220 134" />}
      {at === 0 && ["Severe GORD", "Stricture", "Barrett's"].map((label, index) => <Box key={label} x={60 + index * 100} y={36} w={92} text={label} lit />)}
      {at === 1 && <><rect x="266" y="84" width="44" height="50" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="266" y="84" width="44" height="12" rx="5" fill={INK} /><W x={288} y={120} size={10}>Yearly</W></>}
      {at === 2 && ["Infections", "Fractures", "Low magnesium"].map((label, index) => <Box key={label} x={60 + index * 100} y={36} w={94} text={label} />)}
      {at === 3 && <W x={160} y={40} size={11}>Reduce gradually</W>}
      {at === 4 && <Box x={160} y={36} w={230} text="New symptoms? Tell your doctor" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GordCellPatch(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Changed cells at the gullet's base", "About 11 in 100 with GORD get it", "Often no symptoms beyond reflux", "Regular endoscopies to keep watch", "Keep taking PPIs; support is there"];
  const C = 2 * Math.PI * 38;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Barrett's" title="Changed cells, mostly a small risk" label="Barrett's oesophagus" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The gullet with a patch of changed cells just above the stomach">
      <rect x="66" y="14" width="28" height="118" rx="6" fill={WHITE} stroke={INK} strokeWidth="3" />
      <Stomach x={86} y={150} scale={0.5} gullet={0} />
      <rect x="69" y="96" width="22" height="34" rx="4" fill={GOLD} className={at === 0 && !still ? "lib-why-pulse" : undefined} />
      {at === 0 && <><Arrow d="M150 112 H102" head="M110 105 L100 112 L110 119" /><Box x={222} y={112} w={136} text="Changed cells" lit /></>}
      {at === 1 && <><circle cx="226" cy="88" r="38" fill="none" stroke={LINE} strokeWidth="14" /><circle cx="226" cy="88" r="38" fill="none" stroke={GOLD} strokeWidth="14" strokeDasharray={`${0.11 * C} ${C}`} transform="rotate(-90 226 88)" /><W x={226} y={92} size={12}>11 in 100</W><W x={226} y={148} size={10.5}>with GORD</W></>}
      {at === 2 && <Stack x={150} y={44} labels={["Heartburn", "Food coming up", "Often none"]} lit={index => index < 2} width={150} gap={36} />}
      {at === 3 && <><circle cx="80" cy="112" r="24" fill="none" stroke={INK} strokeWidth="3" /><path d="M97 129 L112 144" stroke={INK} strokeWidth="5" strokeLinecap="round" /><Box x={226} y={80} w={140} text="Regular endoscopy" lit /><W x={226} y={120} size={10.5}>Every few years</W></>}
      {at === 4 && <><Pill x={180} y={70} />{[0, 1, 2].map(index => <Person key={index} x={220 + index * 30} y={120} scale={0.8} fill={index === 1 ? INK : SOFT} />)}<W x={250} y={156} size={10.5}>Support groups</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Stomach ulcers ========================================================================================

function SuSoreMap(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Open sores in the lining", "When the protective layer breaks down", "About 8 in 100 with indigestion", "Get it treated to avoid problems"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="An open sore, and it heals" label="What a stomach ulcer is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A stomach and the first part of the bowel, each with a small sore">
      {at === 0 && <path d="M204 100 L90 146 M204 150 L190 158" stroke={SOFT} strokeWidth="2" strokeDasharray="4 4" />}
      <Stomach x={108} y={116} scale={0.95} gullet={40} duodenum>
        <circle cx="40" cy="100" r="7" fill={GOLD} className={at === 0 && !still ? "lib-why-pulse" : undefined} />
        <circle cx="144" cy="112" r="6" fill={GOLD} />
        {at === 1 && [[28, 84], [44, 86], [34, 72]].map(([cx, cy]) => <Drop key={cx} x={cx} y={cy} r={4} />)}
      </Stomach>
      {at === 0 && <><Box x={256} y={100} w={104} text="Stomach ulcer" /><Box x={256} y={150} w={104} text="Duodenal ulcer" /></>}
      {at === 1 && <><Box x={256} y={80} w={104} text="Layer breaks" lit /><W x={256} y={120} size={10.5}>Lining damaged</W></>}
      {at === 2 && <>{Array.from({ length: 100 }, (_, index) => <rect key={index} x={206 + (index % 10) * 10} y={46 + Math.floor(index / 10) * 10} width="8" height="8" rx="1.5" fill={index < 8 ? GOLD : LINE} />)}<W x={254} y={164} size={10.5}>8 in 100</W></>}
      {at === 3 && <><Stack x={202} y={50} labels={["Bleeding", "Low iron", "A hole"]} lit={() => false} width={104} gap={34} /><W x={254} y={166} size={10.5}>Rare, but serious</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SuTwoCauses(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["H pylori and anti-inflammatory pills", "Up to 2 in 5 in the UK carry H pylori", "NSAIDs like ibuprofen and aspirin", "Spicy food or stress: not the cause"];
  const germ = at === 0 || at === 1, pack = at === 0 || at === 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="A germ, a painkiller, a sore" label="Causes of stomach ulcers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A germ and a pack of painkillers both pointing at the stomach lining">
      <path d="M20 160 C60 150, 100 170, 160 160 C220 150, 260 170, 300 160 V186 H20 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M20 150 C60 140, 100 160, 160 150 C220 140, 260 160, 300 150" fill="none" stroke={SOFT} strokeWidth="3" strokeDasharray="6 5" />
      {germ && <><g transform="translate(70 64) rotate(-20)"><rect x="-18" y="-7" width="36" height="14" rx="7" fill={INK} /><path d="M18 0 c6 -5 10 5 16 0" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" /></g>
        <Arrow d="M84 92 L126 140" head="M116 136 L127 141 L125 129" /><W x={70} y={104} size={10.5}>H pylori</W></>}
      {pack && <><g transform="translate(250 60)"><rect x="-28" y="-18" width="56" height="36" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[-16, 0, 16].flatMap(cx => [-7, 7].map(cy => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="5" fill={SOFT} />))}</g>
        <Arrow d="M236 92 L194 140" head="M195 129 L193 141 L204 136" /><W x={250} y={104} size={10.5}>NSAIDs</W></>}
      {at === 1 && <><W x={224} y={40} size={11}>Up to 2 in 5</W>{[0, 1, 2, 3, 4].map(index => <Person key={index} x={168 + index * 28} y={84} scale={0.7} fill={index < 2 ? INK : LINE} />)}</>}
      {at === 2 && <Stack x={18} y={30} labels={["Ibuprofen", "Aspirin", "Naproxen"]} lit={() => true} width={108} gap={32} />}
      {at === 3 && <><Box x={160} y={64} w={180} text="Spicy food, stress, alcohol" size={10} /><W x={160} y={104} size={10.5}>Can make symptoms worse</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SuPainLines(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Burning upper tummy pain", "Often a few hours after eating", "Indigestion, bloating, feeling sick", "Not all ulcers are painful", "Pain keeps coming back? See a GP"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="A burning pain, often at night" label="Symptoms of an ulcer" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with a patch of pain in the upper tummy that can spread">
      <Torso x={90} y={120} scale={0.85} />
      {at === 3 ? <ellipse cx="90" cy="106" rx="16" ry="11" fill="none" stroke={SOFT} strokeWidth="2.5" strokeDasharray="4 4" /> : <ellipse cx="90" cy="106" rx="16" ry="11" fill={GOLD} opacity="0.85" />}
      {at === 0 && <path d="M90 94 V72 M90 118 V140 M106 106 H128" stroke={GOLD} strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />}
      {at === 0 && <Stack x={160} y={40} labels={["Upper tummy", "Burning, gnawing", "Often worse at night"]} lit={index => index < 2} width={146} gap={34} />}
      {at === 1 && <><Clock x={196} y={80} r={24} hand={2} /><Plate x={270} y={80} r={20} /><W x={233} y={132} size={10.5}>Within a few hours</W></>}
      {at === 2 && <Stack x={160} y={40} labels={["Indigestion", "Bloating", "Feeling sick"]} lit={() => true} width={146} gap={34} />}
      {at === 3 && <Box x={233} y={92} w={140} text="Sometimes no pain" />}
      {at === 4 && <><Person x={233} y={118} scale={1.3} /><W x={233} y={156} size={10.5}>See a GP</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SuTestCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The GP asks about painkillers", "Breath or poo tests for H pylori", "PPIs stopped 2 weeks before testing", "A camera test: 15 to 45 minutes", "After sedation, someone stays 24 hours"];
  const litSets = [[0], [1, 2], [1, 2], [3], [3]];
  const labels = ["GP", "Breath", "Poo", "Camera"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="Breath, poo, or a camera" label="Tests for an ulcer" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four cards: the GP, a breath test, a poo test and a camera test">
      {labels.map((label, index) => {
        const on = litSets[at].includes(index);
        const c = on ? WHITE : INK;
        const cx = 46 + index * 76;
        return <g key={label} opacity={on ? 1 : 0.5}>
          <rect x={cx - 33} y="22" width="66" height="84" rx="10" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          {index === 0 && <Person x={cx} y={68} scale={0.7} fill={c} />}
          {index === 1 && <g fill="none" stroke={c} strokeWidth="2.5"><rect x={cx - 4} y="40" width="8" height="30" rx="3" /><circle cx={cx + 12} cy="44" r="4" /><circle cx={cx + 18} cy="35" r="3" /></g>}
          {index === 2 && <Pot x={cx} y={58} color={c} />}
          {index === 3 && <g><path d={`M${cx - 14} 36 C${cx - 14} 60, ${cx + 14} 50, ${cx + 10} 72`} fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" /><circle cx={cx + 10} cy="74" r="4" fill={GOLD} /></g>}
          <W x={cx} y={98} size={10} fill={on ? WHITE : TEXT}>{label}</W>
        </g>;
      })}
      {at === 0 && <W x={160} y={150} size={10.5}>Weighs you, feels your tummy</W>}
      {at === 1 && <W x={160} y={150} size={10.5}>As accurate as each other</W>}
      {at === 2 && <><Pill x={120} y={146} /><Cross x={120} y={146} size={1.5} /><W x={150} y={151} size={10.5} anchor="start">2 weeks before</W></>}
      {at === 3 && <><Clock x={118} y={148} r={20} hand={1.5} /><W x={146} y={153} size={10.5} anchor="start">15 to 45 minutes</W></>}
      {at === 4 && <><Person x={130} y={166} scale={0.9} /><Person x={170} y={166} scale={0.9} fill={SOFT} /><W x={200} y={156} size={10.5} anchor="start">24 hours</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SuPillWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Antibiotics plus an acid reducer", "Two or three antibiotics, twice a day", "No alcohol with metronidazole", "Finish the course, even feeling well", "Re-tested at least 4 weeks later"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="H pylori" title="Every dose counts" label="Clearing H pylori" credit="Illustration: Rehyn. Take the course exactly as prescribed."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week-long pill organiser with morning and evening slots">
      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index} opacity={at === 4 ? 0.45 : 1}>
        <W x={41 + index * 40} y={26} size={10}>{day}</W>
        {[34, 70].map(y => <g key={y}><rect x={24 + index * 40} y={y} width="34" height="30" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" />
          {at === 3 ? <Tick x={38 + index * 40} y={y + 16} s={6} /> : <circle cx={41 + index * 40} cy={y + 15} r="6" fill={INK} />}</g>)}
      </g>)}
      {at === 0 && <><Pill x={110} y={140} /><W x={110} y={168} size={10.5}>Antibiotics</W><Pill x={220} y={140} fill={SOFT} /><W x={220} y={168} size={10.5}>Acid reducer</W></>}
      {at === 1 && <W x={160} y={146} size={11}>Twice a day, 1 or 2 weeks</W>}
      {at === 2 && <><WineGlass x={160} y={146} /><Cross x={160} y={138} size={2} /><W x={160} y={184} size={10.5}>Not with metronidazole</W></>}
      {at === 3 && <W x={160} y={146} size={11}>Every dose, to the end</W>}
      {at === 4 && <>{["End", "1", "2", "3", "4 wk"].map((label, index) => <g key={label}><rect x={40 + index * 50} y="130" width="40" height="26" rx="6" fill={index === 4 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={60 + index * 50} y={147} size={10} fill={index === 4 ? WHITE : TEXT}>{label}</W></g>)}<Tick x={256} y={118} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SuAcidTap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Less acid lets the ulcer heal", "Usually 4 to 8 weeks of tablets", "Side effects tend to be mild", "Antacids: 2 hours either side", "Long use? Ask before stopping"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="PPIs" title="Turning down the acid tap" label="Acid-reducing tablets" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An acid tap turned down over a stomach, and an ulcer shrinking over weeks">
      <rect x="16" y="30" width="70" height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="74" y="30" width="14" height="30" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M44 30 V18 M32 18 H56" stroke={at === 0 ? GOLD : INK} strokeWidth="4" strokeLinecap="round" />
      <W x={44} y={60} size={10}>Acid</W>
      {at === 0 && <Drop x={81} y={80} r={5} fill={GOLD} />}
      <Stomach x={92} y={152} scale={0.55} gullet={30}>
        <circle cx="40" cy="100" r={at === 1 ? 6 : 10} fill={GOLD} />
      </Stomach>
      <g opacity={at === 1 ? 1 : 0.45}>
        {[{ x: 190, r: 12, t: "Start" }, { x: 238, r: 7, t: "4 wk" }, { x: 286, r: 2, t: "8 wk" }].map(week => <g key={week.t}>
          <circle cx={week.x} cy="64" r="18" fill={WHITE} stroke={INK} strokeWidth="2.5" />
          <circle cx={week.x} cy="64" r={week.r} fill={GOLD} />
          <W x={week.x} y={100} size={10}>{week.t}</W>
        </g>)}
      </g>
      {at === 0 && <W x={238} y={140} size={10.5}>Less acid</W>}
      {at === 1 && <W x={238} y={126} size={10.5}>4 to 8 weeks</W>}
      {at === 2 && <Box x={238} y={140} w={130} text="Usually mild" />}
      {at === 3 && <><Pill x={204} y={142} /><Clock x={272} y={142} r={18} hand={2} /><W x={238} y={182} size={10.5}>2 hours apart</W></>}
      {at === 4 && <><Person x={238} y={150} scale={1.1} /><W x={238} y={184} size={10.5}>Speak to your doctor</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SuTwoPacks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["NSAIDs can cause ulcers or bleeding", "Had an ulcer? NSAIDs may not suit", "Paracetamol may be advised instead", "Low-dose aspirin: your GP will advise", "Don't mix ibuprofen with other NSAIDs"];
  const left = at === 3 ? "Low-dose aspirin" : "Ibuprofen";
  return <MemoryBand props={props} state={s} tone="theme" kicker="Painkillers" title="Choose the gentler painkiller" label="Painkillers and ulcers" credit="Illustration: Rehyn. Do not stop a prescribed medicine without speaking to your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two medicine packs: an anti-inflammatory painkiller and paracetamol">
      <Pack x={82} y={86} w={120} label={left} lit={at !== 2} dim={at === 2} />
      {at !== 3 && <Pack x={238} y={86} w={120} label={at === 4 ? "Naproxen" : "Paracetamol"} lit={at === 2 || at === 4} dim={at === 0 || at === 1} />}
      {at === 3 && <><Person x={238} y={100} scale={1.3} /><W x={238} y={146} size={10.5}>Your GP advises</W></>}
      {at === 0 && <W x={82} y={150} size={10.5}>Ulcers or bleeding</W>}
      {at === 1 && <Cross x={82} y={148} size={1.6} />}
      {at === 2 && <Tick x={238} y={150} s={10} />}
      {at === 4 && <><W x={160} y={94} size={22}>+</W><Cross x={160} y={150} size={1.8} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SuRedSigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["999 or A&E. Do not drive to A&E", "Bleeding is the most common problem", "Slow bleeding can cause anaemia", "Rarely, the lining can split open", "Pain getting worse? Urgent GP or 111"];
  const litSets = [[0, 1, 2], [0, 1], [], [2], [2]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Emergencies" title="Signs that mean 999" label="Bleeding and emergencies" credit="Illustration: Rehyn. Vomiting blood: call 999 or go to A&E; do not drive yourself."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The warning signs of a bleeding ulcer, and who to call">
      {["Blood in sick", "Black poo", "Severe pain"].map((label, index) => <Box key={label} x={58 + index * 102} y={32} w={96} text={label} lit={litSets[at].includes(index)} dim={!litSets[at].includes(index)} />)}
      {at === 0 && <><Phone x={110} y={112} text="999" lit w={46} h={72} /><CarNo x={220} y={104} scale={1.3} /><W x={220} y={140} size={10.5}>Do not drive</W></>}
      {at === 1 && <><Drop x={60} y={116} r={9} fill={GOLD} /><Drop x={86} y={130} r={7} fill={GOLD} /><Box x={200} y={116} w={160} text="Endoscopy in hospital" /></>}
      {at === 2 && <><Person x={84} y={140} scale={1.2} /><Stack x={160} y={70} labels={["Tired", "Short of breath", "Pale skin"]} lit={() => true} width={140} gap={32} /></>}
      {at === 3 && <Stomach x={160} y={124} scale={0.6} gullet={24}><path d="M30 60 L44 76 L36 88 L50 104" fill="none" stroke={GOLD} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /></Stomach>}
      {at === 4 && <><Phone x={110} y={112} text="111" lit w={46} h={72} /><Box x={220} y={112} w={120} text="Urgent GP" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SuHealLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Most heal in a month or two", "Re-test at least 4 weeks after", "Maybe a camera check at 4 to 6 weeks", "Symptoms back? Speak to a GP", "Less stress and no smoking may help"];
  const X = (weeks: number) => 30 + weeks * 32.5;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Healing" title="A month or two to heal" label="Healing and follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline over two months with an ulcer shrinking as it heals">
      <path d="M30 160 H290" stroke={INK} strokeWidth="3" />
      {[0, 4, 6, 8].map(w => <path key={w} d={`M${X(w)} 154 V166`} stroke={INK} strokeWidth="3" />)}
      <W x={30} y={182} size={10} anchor="start">Start</W><W x={X(4)} y={182} size={10}>4 wk</W><W x={X(6)} y={182} size={10}>6 wk</W><W x={X(8)} y={182} size={10} anchor="end">8 wk</W>
      {[0, 2, 4, 6, 8].map((w, index) => <g key={w}><circle cx={X(w)} cy="116" r="16" fill={WHITE} stroke={INK} strokeWidth="2.5" />{index < 4 && <circle cx={X(w)} cy="116" r={[11, 8, 5, 2.5][index]} fill={GOLD} />}</g>)}
      {at === 0 && <W x={160} y={60} size={11}>1 to 2 months</W>}
      {at === 1 && <><circle cx={X(4)} cy="160" r="8" fill="none" stroke={GOLD} strokeWidth="3" /><Tube x={160} y={56} /><W x={182} y={62} size={10.5} anchor="start">Re-test</W></>}
      {at === 2 && <><path d={`M${X(4)} 160 H${X(6)}`} stroke={GOLD} strokeWidth="7" /><Box x={192} y={56} w={130} text="Camera check" lit /></>}
      {at === 3 && <><Person x={160} y={72} /><W x={186} y={62} size={10.5} anchor="start">Speak to a GP</W></>}
      {at === 4 && ["Less stress", "No smoking", "Less alcohol"].map((label, index) => <Box key={label} x={60 + index * 100} y={52} w={96} text={label} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SuSmokeWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Smoking raises the risk of ulcers", "Free NHS stop smoking services", "Alcohol can irritate the lining", "14 units a week, over 3 or more days", "Drinkline: free and confidential"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Smoking and alcohol" title="Smoke-free, and lighter on drink" label="Smoking, alcohol and ulcers" credit="Illustration: Rehyn. 14 units a week is the UK guide."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A cigarette, a glass and a week with drink-free days">
      {(at === 0 || at === 1) && <Cigarette x={78} y={56} crossed={at === 1} />}
      {(at === 2 || at === 3) && <g opacity={0.4}><Cigarette x={78} y={56} /></g>}
      {at === 0 && <><W x={78} y={96} size={10.5}>Almost twice the risk</W><g opacity={0.4}><WineGlass x={242} y={60} scale={1.2} /></g></>}
      {at === 1 && <><Box x={230} y={56} w={140} text="Stop smoking service" lit /><W x={230} y={96} size={10.5}>Free, up to 12 weeks</W></>}
      {(at === 2 || at === 3) && <g opacity={at === 2 ? 1 : 0.4}><WineGlass x={242} y={60} scale={1.2} /></g>}
      {at === 2 && <W x={242} y={100} size={10.5}>Irritates the lining</W>}
      {at === 3 && <W x={160} y={100} size={11}>14 units a week</W>}
      {at === 4 && <><Phone x={160} y={62} text="Drinkline" lit w={80} h={46} /><W x={160} y={102} size={10.5}>Free, confidential</W></>}
      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index} opacity={at === 3 ? 1 : 0.4}>
        <rect x={22 + index * 40} y="116" width="36" height="44" rx="7" fill={WHITE} stroke={INK} strokeWidth="2" />
        {at === 3 && ([0, 2, 4].includes(index) ? <WineGlass x={40 + index * 40} y={142} scale={0.65} /> : <Tick x={38 + index * 40} y={139} s={6} />)}
        <W x={40 + index * 40} y={178} size={10}>{day}</W>
      </g>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SuEveningPlate(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Food doesn't cause ulcers", "Skip foods that trigger symptoms", "Smaller meals, 3 to 4 hours before bed", "A healthy weight, a balanced diet"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Food" title="Smaller meals, earlier evenings" label="Food and ulcers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate, the foods that can trigger symptoms, and an earlier evening meal">
      {at === 0 && <><Plate x={92} y={104} r={54} /><Tick x={92} y={104} s={14} /><Box x={232} y={84} w={132} text="H pylori, NSAIDs" lit /><W x={232} y={124} size={10.5}>The main causes</W></>}
      {at === 1 && <><g opacity={0.5}><Plate x={92} y={104} r={54} /></g><Stack x={176} y={44} labels={["Coffee", "Chocolate", "Fatty, spicy food"]} lit={() => true} width={130} gap={36} /></>}
      {at === 2 && <><Plate x={60} y={104} r={26} /><Arrow d="M96 104 H226" head="M216 97 L227 104 L216 111" /><Moon x={256} y={104} r={18} /><W x={160} y={90} size={10.5}>3 to 4 hours</W></>}
      {at === 3 && <><circle cx="92" cy="104" r="56" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d={sector(92, 104, 46, 90, 270)} fill={INK} /><path d={sector(92, 104, 46, -90, 30)} fill={SOFT} /><path d={sector(92, 104, 46, 30, 90)} fill={TINT} />
        <Stack x={176} y={44} labels={["Healthy weight", "Enough fluids", "Be active"]} lit={() => true} width={130} gap={36} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SuReturnBars(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Treat the cause to stop it returning", "Clearing H pylori: risk falls to 5%", "If NSAIDs caused it, switch painkiller", "Smaller meals, no smoking, less stress", "Long-term treatment: a yearly review"];
  const bars = [{ x: 42, h: 72, t: "Stomach", v: "60%" }, { x: 98, h: 96, t: "Duodenal", v: "80%" }, { x: 154, h: 6, t: "Cleared", v: "5%" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stopping it coming back" title="Clear the cause, keep it gone" label="Stopping it coming back" credit="Illustration: Rehyn. Lifetime risk of an ulcer coming back, as NICE's summaries give it."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Bars showing the risk of an ulcer coming back, high with H pylori and low once it is cleared">
      {at === 1 && <W x={70} y={30} size={10}>H pylori still there</W>}
      {bars.map((bar, index) => <g key={bar.t} opacity={at <= 1 ? 1 : 0.4}>
        <rect x={bar.x - 22} y={152 - bar.h} width="44" height={bar.h} rx="4" fill={index === 2 ? GOLD : at === 1 ? INK : SOFT} />
        {at === 1 && <W x={bar.x} y={152 - bar.h - 6} size={10.5}>{bar.v}</W>}
        <W x={bar.x} y={170} size={10}>{bar.t}</W>
      </g>)}
      <path d="M16 152 H180" stroke={INK} strokeWidth="2.5" />
      {at === 0 && <Box x={250} y={80} w={116} text="Treat the cause" lit />}
      {at === 1 && <W x={250} y={96} size={10.5}>Lifetime risk</W>}
      {at === 2 && <Stack x={192} y={60} labels={["Ibuprofen", "Paracetamol"]} lit={index => index === 1} width={116} gap={36} />}
      {at === 3 && <Stack x={192} y={44} labels={["Smaller meals", "No smoking", "Less stress"]} lit={() => true} width={116} gap={36} />}
      {at === 4 && <><Box x={250} y={80} w={116} text="Yearly review" lit /><Clock x={250} y={130} r={20} hand={1} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Gallstones ============================================================================================

function GsPearPouch(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["A pear-shaped pouch that stores bile", "Crystals grow to gravel, then pebbles", "4 in 5 stones are cholesterol", "More than 1 in 10 UK adults have them"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What they are" title="The small pouch that stores bile" label="What gallstones are" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The liver with the pear-shaped gallbladder underneath and small stones inside">
      <Liver x={118} y={66} scale={0.8} />
      <path d="M140 100 C142 130, 142 150, 142 170 M110 104 C120 112, 132 116, 141 120" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <Pipe d="M40 178 H210" />
      <Gallbladder x={112} y={132} scale={1.3} fill={at === 0 ? SOFT : TINT}>
        <circle cx="2" cy="10" r="4" fill={GOLD} /><circle cx="-6" cy="15" r="3" fill={GOLD} /><circle cx="6" cy="17" r="3" fill={GOLD} />
      </Gallbladder>
      {at === 0 && <Stack x={212} y={44} labels={["Liver", "Gallbladder", "Bile ducts"]} lit={index => index === 1} width={96} gap={34} />}
      {at === 1 && [{ y: 52, r: 3, t: "Crystals" }, { y: 86, r: 6, t: "Gravel" }, { y: 126, r: 11, t: "Pebbles" }].map(stone => <g key={stone.t}><circle cx="232" cy={stone.y} r={stone.r} fill={GOLD} /><W x={252} y={stone.y + 4} size={10.5} anchor="start">{stone.t}</W></g>)}
      {at === 2 && <>{[0, 1, 2, 3, 4].map(index => <circle key={index} cx={222 + index * 20} cy="96" r="8" fill={index < 4 ? GOLD : INK} />)}<W x={262} y={132} size={12}>4 in 5</W><W x={262} y={150} size={10.5}>cholesterol</W></>}
      {at === 3 && <>{Array.from({ length: 10 }, (_, index) => <Person key={index} x={222 + (index % 5) * 20} y={index < 5 ? 82 : 122} scale={0.5} fill={index === 0 ? INK : LINE} />)}<W x={262} y={156} size={10.5}>Over 1 in 10</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GsColicClock(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Two in three have no symptoms", "Severe pain under the right ribs", "Over 30 minutes, up to several hours", "Fever or yellow skin: more serious"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="When a stone blocks the way" label="Gallstone pain" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with pain under the right ribs that can spread to the shoulder blade">
      <Torso x={86} y={120} scale={0.85} />
      {at > 0 && <><ellipse cx="70" cy="100" rx="14" ry="10" fill={GOLD} opacity="0.85" className={still ? undefined : "lib-why-pulse"} /><ellipse cx="90" cy="114" rx="10" ry="8" fill={GOLD} opacity="0.6" /></>}
      {at === 1 && <Arrow d="M66 92 L58 72" head="M53 80 L57 70 L65 76" />}
      {at === 0 && <>{[0, 1, 2].map(index => <Person key={index} x={196 + index * 40} y={120} fill={index === 2 ? INK : LINE} />)}<W x={236} y={160} size={10.5}>2 in 3: no symptoms</W></>}
      {at === 1 && <><Box x={234} y={86} w={130} text="Biliary colic" lit /><W x={234} y={124} size={10.5}>Middle or right side</W></>}
      {at === 2 && <><Clock x={234} y={88} r={28} hand={Math.PI} /><W x={234} y={142} size={10.5}>30 minutes or more</W></>}
      {at === 3 && <Stack x={166} y={44} labels={["38C or above", "Yellow skin, eyes", "Chills, shivering"]} lit={() => true} width={140} gap={36} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GsRiskRow(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Risk rises as you get older", "Over 40, female, quick weight loss", "Extra weight raises the risk", "Skipped meals mean less emptying"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Who gets gallstones, and why" label="Who gets gallstones" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Rising bars for age, and the things that raise the chance of gallstones">
      {[30, 52, 76, 100].map((h, index) => <rect key={h} x={24 + index * 34} y={160 - h} width="28" height={h} rx="4" fill={at === 0 ? INK : SOFT} />)}
      <path d="M16 160 H158" stroke={INK} strokeWidth="2.5" />
      {at === 0 && <Arrow d="M30 120 L150 48" head="M138 48 L151 47 L146 59" />}
      <W x={88} y={180} size={10.5}>Age</W>
      <Stack x={172} y={30} labels={["Getting older", "Over 40, women", "Weight, waist", "Skipped meals"]} lit={index => index === at} width={134} gap={34} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GsDuctMap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Complications of gallstones are rare", "A blocked gallbladder can inflame", "A stone in the duct: jaundice", "A stone can inflame the pancreas", "Rarely, a stone blocks the bowel"];
  const stone = [[128, 108], [122, 84], [104, 124], [104, 164], [60, 182]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Complications" title="When a stone causes trouble" label="Complications" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A map of the gallbladder, bile duct, pancreas and bowel, with a stone at a blockage">
      <Liver x={100} y={50} scale={0.55} />
      <Pipe d="M30 182 H140" />
      <path d="M104 80 V176 M124 80 C116 86, 108 92, 104 96" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <Pancreas x={176} y={150} scale={0.8} fill={at === 3 ? GOLD : TINT} />
      <path d="M120 152 L104 168" stroke={INK} strokeWidth="2.5" />
      <Gallbladder x={128} y={100} fill={at === 1 ? SOFT : TINT} stroke={at === 1 ? GOLD : INK} />
      <W x={150} y={104} size={10} anchor="start">Gallbladder</W>
      <W x={98} y={128} size={10} anchor="end">Bile duct</W>
      <W x={190} y={154} size={10}>Pancreas</W>
      <W x={34} y={170} size={10} anchor="start">Bowel</W>
      <circle cx={stone[0]} cy={stone[1]} r="7" fill={GOLD} stroke={WHITE} strokeWidth="2" className={still ? undefined : "lib-why-pulse"} />
      <Box x={258} y={40} w={100} text={["Rare", "Cholecystitis", "Jaundice", "Pancreatitis", "Gallstone ileus"][at]} lit={at > 0} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GsSoundWaves(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Often found by chance on a scan", "The GP checks your tummy and blood", "Painless sound waves, 10 to 15 minutes", "Sometimes an MRI or CT scan too"];
  const probe = at === 0 || at === 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tests" title="Seeing stones with sound" label="Scans and tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An ultrasound probe on the tummy and a screen showing bright stones">
      <g opacity={at === 1 ? 0.35 : 1}>
        <rect x="176" y="26" width="130" height="104" rx="10" fill={INK} />
        <path transform="translate(241 78) scale(1.4)" d={GALL} fill="none" stroke={WHITE} strokeWidth="1.6" />
        <circle cx="241" cy="88" r="5" fill={WHITE} /><circle cx="233" cy="96" r="4" fill={WHITE} /><circle cx="249" cy="98" r="4" fill={WHITE} />
      </g>
      {probe && <g opacity={at === 0 ? 0.45 : 1}>
        <path d="M18 186 C26 120, 130 112, 152 186 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M90 106 C110 60, 150 50, 176 70" fill="none" stroke={INK} strokeWidth="2.5" />
        <g transform="translate(86 124) rotate(-10)"><rect x="-9" y="-20" width="18" height="30" rx="6" fill={INK} /></g>
        {at === 2 && [150, 160, 170].map(y => <path key={y} d={`M${70 - (y - 150) / 2} ${y} Q86 ${y + 10} ${102 + (y - 150) / 2} ${y}`} fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="5 4" className={still ? undefined : "lib-types-flow"} />)}
      </g>}
      {at === 1 && <><Person x={70} y={140} scale={1.4} /><Tube x={130} y={122} /></>}
      {at === 3 && <Stack x={20} y={60} labels={["MRI scan", "CT scan", "Dye X-ray"]} lit={() => true} width={120} gap={34} />}
      {at < 3 && <W x={241} y={156} size={10.5}>{["On another scan", "Blood tests", "10 to 15 minutes"][at]}</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GsKeyholeCuts(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Offered if stones cause problems", "Stop smoking 6 weeks before surgery", "Keyhole surgery, about 1 hour", "Open surgery only if needed", "Common and safe, with some risks"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Surgery" title="Keyhole surgery, about an hour" label="Gallbladder removal" credit="Illustration: Rehyn. Your surgeon will explain the operation and its risks."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tummy with small keyhole cuts and a camera showing the gallbladder on a screen">
      <path d="M44 28 C44 20, 152 20, 152 28 L164 176 C164 186, 32 186, 32 176 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M58 52 Q98 80 138 52" fill="none" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
      <circle cx="98" cy="120" r="4" fill={INK} />
      {at === 0 && <Gallbladder x={66} y={90}><circle cx="2" cy="10" r="3.5" fill={GOLD} /><circle cx="-5" cy="15" r="3" fill={GOLD} /></Gallbladder>}
      {at === 2 && <><path d="M90 134 H106 M52 70 l12 -4 M44 92 l12 -2 M58 108 h12" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <path d="M98 134 C130 140, 170 120, 196 100" fill="none" stroke={INK} strokeWidth="2.5" />
        <rect x="196" y="40" width="104" height="70" rx="8" fill={INK} /><path transform="translate(248 75)" d={GALL} fill="none" stroke={WHITE} strokeWidth="2" />
        <Clock x={226} y={150} r={18} hand={1} /><W x={252} y={155} size={10.5} anchor="start">1 hour</W></>}
      {at === 3 && <path d="M56 70 L76 120" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />}
      {at === 0 && <><Box x={248} y={80} w={110} text="Frequent pain" lit /><W x={248} y={120} size={10.5}>Over 60,000 a year</W></>}
      {at === 1 && <><Cigarette x={244} y={60} crossed /><Box x={248} y={110} w={120} text="6 weeks before" lit /><W x={248} y={150} size={10.5}>Pre-admission clinic</W></>}
      {at === 3 && <><Box x={248} y={80} w={110} text="Open surgery" lit /><W x={248} y={120} size={10.5}>Longer recovery</W></>}
      {at === 4 && <><Box x={248} y={70} w={110} text="Common, safe" lit /><Box x={248} y={110} w={110} text="Some risks" /><W x={248} y={150} size={10.5}>Weighed up</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GsFortnight(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often home the same day", "Small meals for the first few days", "Build up gently; drive when pain-free", "Back to work after 1 to 2 weeks", "Ongoing symptoms? Contact your GP"];
  const lit = [0, 1, 2, 3, -1][at];
  const xs = [44, 120, 196, 272];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Recovery" title="Your first fortnight after surgery" label="Recovering after the operation" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from going home, to small meals, walking and back to work">
      <path d="M44 120 H272" stroke={LINE} strokeWidth="3" />
      {xs.map((x, index) => <g key={x} opacity={index === lit ? 1 : 0.4}>
        <circle cx={x} cy="120" r={index === lit ? 8 : 6} fill={index === lit ? GOLD : INK} />
        {index === 0 && <House x={x} y={80} lit={index === lit} />}
        {index === 1 && <Plate x={x} y={80} r={18} />}
        {index === 2 && <Person x={x} y={94} scale={0.9} />}
        {index === 3 && <g><rect x={x - 20} y="62" width="40" height="26" rx="3" fill={index === lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x - 26} 94 H${x + 26} M${x - 20} 94 V104 M${x + 20} 94 V104`} stroke={INK} strokeWidth="3" strokeLinecap="round" /></g>}
        <W x={x} y={146} size={10}>{["Same day", "First days", "Gradually", "1 to 2 weeks"][index]}</W>
      </g>)}
      {at === 0 && <W x={160} y={178} size={10.5}>Someone with you, 24 hours</W>}
      {at === 2 && <W x={160} y={178} size={10.5}>Drive when it is pain-free</W>}
      {at === 4 && <Box x={160} y={176} w={150} text="Contact your GP" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GsTwoPanel(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["999 or A&E. Do not drive to A&E", "Pain over 30 minutes: urgent GP or 111", "Fever and shivers: an emergency", "Swollen leg, hard to breathe: 999"];
  const left = [[0, 1, 2], [], [1, 2], [3]][at], right = [[], [0], [], [1]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Urgent help" title="Know when it cannot wait" label="When to get urgent help" credit="Illustration: Rehyn. In an emergency, call 999; do not drive to A&E."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two panels: signs for 999 or A&E, and signs for an urgent GP or NHS 111">
      <g opacity={left.length ? 1 : 0.4}><Box x={86} y={34} w={140} text="999 or A&E" lit /></g>
      <Stack x={18} y={58} labels={["Sudden, severe pain", "Yellow skin or eyes", "Hot, cold, shivery", "Leg pain, breathless"]} lit={index => left.includes(index)} width={136} gap={30} size={10} fade />
      <g opacity={right.length ? 1 : 0.4}><Box x={234} y={34} w={140} text="Urgent GP or 111" lit /></g>
      <Stack x={166} y={58} labels={["Pain over 30 min", "Wound problems"]} lit={index => right.includes(index)} width={136} gap={30} size={10} fade />
      {at === 0 && <><CarNo x={194} y={150} /><W x={220} y={155} size={10.5} anchor="start">Do not drive</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GsRegularPlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Avoid foods that cause symptoms", "Low fat isn't right for everyone", "Five a day, wholegrains, some nuts", "Regular meals, breakfast early", "After surgery, a normal healthy diet"];
  const parts = [{ a: 90, b: 270, t: "Veg, fruit", x: 58, y: 108, fill: INK }, { a: -90, b: 30, t: "Starch", x: 118, y: 88, fill: SOFT }, { a: 30, b: 90, t: "Protein", x: 110, y: 140, fill: TINT }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Food" title="Regular meals, not no fat" label="Eating with gallstones" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balanced plate, a morning meal and regular smaller meals">
      <circle cx="90" cy="104" r="66" fill={WHITE} stroke={at === 4 ? GOLD : INK} strokeWidth={at === 4 ? 5 : 3} />
      {parts.map(part => <g key={part.t}>
        <path d={sector(90, 104, 56, part.a, part.b)} fill={at === 2 ? part.fill : WHITE} stroke={SOFT} strokeWidth="2" />
        <W x={part.x} y={part.y} size={10} fill={at === 2 && part.fill === INK ? WHITE : TEXT}>{part.t}</W>
      </g>)}
      {at === 0 && <><Box x={243} y={70} w={130} text="Trigger foods" /><W x={243} y={110} size={10}>Smaller, regular meals</W></>}
      {at === 1 && <><Drop x={243} y={84} r={16} fill={GOLD} /><W x={243} y={128} size={10.5}>Moderate fat</W></>}
      {at === 2 && <Stack x={180} y={40} labels={["Five a day", "Wholegrains", "Some nuts"]} lit={() => true} width={126} gap={36} />}
      {at === 3 && <><Sun x={214} y={62} r={10} /><path d="M254 66 H290 C290 82, 254 82, 254 66 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><W x={243} y={110} size={10.5}>Breakfast early</W>{[204, 243, 282].map(x => <Plate key={x} x={x} y={146} r={13} />)}</>}
      {at === 4 && <><Tick x={243} y={90} s={14} /><W x={243} y={132} size={10.5}>Normal, healthy diet</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GsSteadyDrip(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Bile drips steadily into the bowel", "Most have no lasting after-effects", "Lasting diarrhoea? It can be treated", "Old pain back? Tell your GP"];
  const duct = "M134 96 C136 120, 136 150, 136 170";
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Without a gallbladder" title="Life goes on without the pouch" label="Living without a gallbladder" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The liver with an empty outline where the gallbladder was, and bile dripping into the bowel">
      <Liver x={110} y={62} scale={0.72} />
      <Gallbladder x={104} y={124} scale={1.2} dashed />
      <path d={duct} fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <path d={duct} fill="none" stroke={GOLD} strokeWidth="4" strokeDasharray="3 9" strokeLinecap="round" className={at === 0 && !still ? "lib-types-flow" : undefined} />
      <Pipe d="M40 178 H210" />
      {at === 0 && <><W x={262} y={70} size={10.5}>Bile still made</W><W x={262} y={88} size={10.5}>by the liver</W></>}
      {at === 1 && <><Tick x={262} y={80} s={12} /><W x={262} y={118} size={10.5}>Most are fine</W></>}
      {at === 2 && <><Box x={262} y={80} w={92} text="Treatable" lit /><W x={262} y={118} size={10.5}>Bile acid test</W></>}
      {at === 3 && <><Person x={262} y={104} scale={1.2} /><W x={262} y={142} size={10.5}>Tell your GP</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GsTwoSlopes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["More weight, more cholesterol in bile", "Losing weight fast raises the risk", "Steady: aim for 1 to 2lbs a week", "Before surgery, try to lose weight", "Your GP can refer you for support"];
  const graph = at >= 1 && at <= 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Weight" title="Steady beats fast" label="Weight and gallstones" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two ways down a weight graph: a steep drop and a gentle, steady slope">
      {graph && <><path d="M30 30 V170 H300" fill="none" stroke={LINE} strokeWidth="3" /><W x={34} y={24} size={10} anchor="start">Weight</W><W x={300} y={186} size={10} anchor="end">Time</W><circle cx="44" cy="48" r="5" fill={INK} /></>}
      {(at === 1) && <><path d="M44 48 C60 60, 80 140, 104 160" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" /><circle cx="112" cy="160" r="7" fill={GOLD} /><W x={124} y={100} size={10.5} anchor="start">Fast: over 1.5kg a week</W></>}
      {(at === 2 || at === 3) && <path d="M44 48 C120 70, 200 100, 290 120" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />}
      {at === 2 && <W x={196} y={84} size={10.5}>1 to 2lbs a week</W>}
      {at === 3 && <Box x={200} y={150} w={120} text="Before surgery" lit />}
      {at === 0 && <><Person x={100} y={130} scale={1.8} fill={SOFT} />{[[176, 118], [192, 128], [180, 140]].map(([cx, cy]) => <circle key={cx + cy} cx={cx} cy={cy} r="6" fill={GOLD} />)}<W x={236} y={84} size={10.5}>Cholesterol in bile</W></>}
      {at === 4 && <><Person x={200} y={118} scale={1.3} /><Person x={250} y={118} scale={1.3} fill={SOFT} /><W x={225} y={158} size={10.5}>GP support</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GsWatchCalendar(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Found by chance, usually not treated", "Active monitoring: watch and wait", "Some are offered treatment anyway", "Pain over 30 min? Urgent GP or 111"];
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="No symptoms" title="Silent stones, watched not cut" label="Gallstones with no symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year calendar with follow-up dates beside a quiet gallbladder with stones">
      <g opacity={at === 1 ? 1 : 0.4}>
        {months.map((month, index) => { const ring = at === 1 && (index === 3 || index === 9); const x = 22 + (index % 4) * 36, y = 40 + Math.floor(index / 4) * 36; return <g key={index}>
          <rect x={x} y={y} width="30" height="28" rx="6" fill={ring ? INK : WHITE} stroke={ring ? GOLD : INK} strokeWidth={ring ? 3 : 2} />
          <W x={x + 15} y={y + 18} size={10} fill={ring ? WHITE : TEXT}>{month}</W>
        </g>; })}
      </g>
      {at === 1 && <W x={82} y={30} size={10.5}>Follow-up</W>}
      {at <= 1 && <Gallbladder x={246} y={92} scale={1.6}><circle cx="2" cy="10" r="3.5" fill={GOLD} /><circle cx="-5" cy="15" r="3" fill={GOLD} /><circle cx="6" cy="16" r="3" fill={GOLD} /></Gallbladder>}
      {at <= 1 && <W x={246} y={160} size={10.5}>{at === 0 ? "Found on a scan" : "Watch and wait"}</W>}
      {at === 2 && <Stack x={180} y={44} labels={["After pancreatitis", "Cirrhosis", "Diabetes"]} lit={() => true} width={128} gap={36} size={10} />}
      {at === 3 && <><Phone x={246} y={92} text="111" lit w={48} h={74} /><W x={246} y={154} size={10.5}>Over 30 minutes</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Pancreatitis ==========================================================================================

function PanGlandJobs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["A gland behind the stomach", "Enzymes for food, insulin for sugar", "Enzymes start too soon: inflammation", "Acute comes suddenly; chronic lasts", "Acute: 34 in 100,000 people a year"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The gland behind your stomach" label="What pancreatitis is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The pancreas behind the stomach, sending enzymes to the gut and insulin to the blood">
      <Stomach x={100} y={72} scale={0.55} gullet={20} fill={WHITE} stroke={SOFT} />
      <g className={(at === 0 || at === 2) && !still ? "lib-why-pulse" : undefined}><Pancreas x={112} y={132} scale={0.9} fill={at === 2 ? GOLD : TINT} /></g>
      <W x={104} y={138} size={10}>Pancreas</W>
      {at === 1 && <><Arrow d="M150 122 L198 72" head="M186 72 L199 71 L196 84" /><Arrow d="M180 132 H198" head="M190 125 L200 132 L190 139" /></>}
      {(at <= 1) && <><Box x={256} y={62} w={100} text="Enzymes" lit={at === 1} dim={at === 0} /><Box x={256} y={132} w={100} text="Insulin" lit={at === 1} dim={at === 0} /></>}
      {at === 1 && <><W x={256} y={94} size={10}>Digest food</W><W x={256} y={164} size={10}>Blood sugar</W></>}
      {at === 0 && <W x={112} y={178} size={10.5}>Behind the stomach</W>}
      {at === 2 && <W x={112} y={178} size={10.5}>Inflamed and swollen</W>}
      {at === 3 && <><Box x={252} y={62} w={110} text="Acute: sudden" lit /><Box x={252} y={132} w={110} text="Chronic: lasting" lit /></>}
      {at === 4 && <><W x={252} y={90} size={12}>Acute: 34 in</W><W x={252} y={110} size={12}>100,000 a year</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PanSuddenPain(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Sudden, severe pain in the upper tummy", "999 or A&E. Do not drive to A&E", "Its own enzymes inflame the pancreas", "Blood tests, and sometimes a CT scan", "Most people recover fully"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Acute" title="Sudden pain, hospital care, recovery" label="Acute pancreatitis" credit="Illustration: Rehyn. Severe pain spreading to the back: call 999; do not drive to A&E."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with sudden pain in the upper tummy spreading to the back">
      <Torso x={84} y={120} scale={0.85} />
      {at <= 1 && <ellipse cx="84" cy="108" rx="22" ry="14" fill={GOLD} opacity="0.85" className={still ? undefined : "lib-why-pulse"} />}
      {at === 0 && <path d="M108 108 H130 M60 108 H38" stroke={GOLD} strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />}
      {at === 0 && <Stack x={162} y={44} labels={["Upper tummy", "Spreads to back", "High temperature"]} lit={index => index < 2} width={144} gap={36} />}
      {at === 1 && <><Phone x={196} y={100} text="999" lit w={46} h={72} /><CarNo x={270} y={96} scale={1.2} /><W x={270} y={132} size={10.5}>Do not drive</W></>}
      {at === 2 && <><g className={still ? undefined : "lib-why-pulse"}><Pancreas x={233} y={100} scale={0.6} fill={GOLD} /></g><W x={233} y={140} size={10.5}>Enzymes inside it</W></>}
      {at === 3 && <><Tube x={198} y={100} /><Box x={262} y={100} w={76} text="CT scan" /></>}
      {at === 4 && <><Person x={233} y={116} scale={1.3} /><W x={233} y={156} size={10.5}>It can come back</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PanTwoShapes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Scar tissue makes it hard, irregular", "Pain in the upper tummy, and more", "No single test for it", "Scans and a poo test can help", "Most people live with it for years"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Chronic" title="Long-term, scarred, but treatable" label="Chronic pancreatitis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A smooth pancreas above a hard, scarred one">
      <Pancreas x={110} y={60} scale={0.8} />
      {at === 0 && <Arrow d="M110 84 V108" head="M103 100 L110 110 L117 100" />}
      <Pancreas x={110} y={136} scale={0.8} fill={WHITE} stroke={at === 0 ? GOLD : INK}>
        <path d="M-50 2 L-30 10 M-10 -2 L10 12 M24 -6 L40 6" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        {[[-42, 12], [0, 6], [44, -4]].map(([cx, cy]) => <circle key={cx} cx={cx} cy={cy} r="4" fill={SOFT} />)}
      </Pancreas>
      {at === 0 && <><Box x={260} y={60} w={92} text="Inflamed" /><Box x={260} y={136} w={92} text="Scarred" lit /></>}
      {at === 1 && <Stack x={214} y={40} labels={["Pain", "Diarrhoea", "Weight loss"]} lit={() => true} width={92} gap={36} />}
      {at === 2 && <W x={260} y={110} size={34}>?</W>}
      {at === 3 && <><Tube x={240} y={100} /><Pot x={284} y={106} /><W x={260} y={154} size={10.5}>Scans, poo test</W></>}
      {at === 4 && <><Person x={260} y={112} scale={1.2} /><W x={260} y={150} size={10.5}>Many years</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PanStoneJunction(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Gallstones: the most frequent cause", "Alcohol is the second most frequent", "Smoking is thought to be toxic to it", "Medicines, injury and other causes", "About 1 in 10: no cause found"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="Gallstones, alcohol, and the rest" label="Causes of pancreatitis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A gallstone stuck where the bile duct meets the pancreas, with a glass and a cigarette">
      <Pipe d="M96 70 V178" width={16} />
      <path d="M112 24 C112 60, 112 100, 104 140" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <W x={118} y={44} size={10} anchor="start">Bile duct</W>
      <Pancreas x={186} y={138} />
      <path d="M248 134 C200 140, 150 146, 106 146" fill="none" stroke={SOFT} strokeWidth="2.5" strokeDasharray="5 4" />
      <W x={196} y={132} size={10}>Pancreas</W>
      {at === 0 && <><circle cx="106" cy="140" r="7" fill={GOLD} stroke={WHITE} strokeWidth="2" className={still ? undefined : "lib-why-pulse"} /><Box x={250} y={60} w={110} text="Gallstones" lit /></>}
      {at === 1 && <><WineGlass x={250} y={52} scale={1.2} /><W x={250} y={98} size={10.5}>Alcohol</W></>}
      {at === 2 && <><Cigarette x={246} y={60} /><W x={250} y={98} size={10.5}>Smoking</W></>}
      {at === 3 && <Stack x={180} y={30} labels={["Some medicines", "Injury, infections"]} lit={() => true} width={130} gap={34} />}
      {at === 4 && <><W x={250} y={72} size={30}>?</W><W x={250} y={100} size={10.5}>About 1 in 10</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PanWardDays(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Fluids, painkillers and oxygen", "Antibiotics only for an infection", "Often eating again within days", "Treating the cause, like gallstones", "Home in 5 to 10 days for most"];
  const dayFill = (index: number) => at === 2 && index < 3 ? INK : at === 4 ? (index >= 4 ? GOLD : INK) : WHITE;
  return <MemoryBand props={props} state={s} tone="theme" kicker="In hospital" title="Supporting the body while it heals" label="Treatment in hospital" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hospital bed with a drip, and a strip of days to going home">
      <path d="M26 40 V140" stroke={INK} strokeWidth="3" />
      <rect x="16" y="40" width="20" height="28" rx="5" fill={at === 0 ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M26 68 C30 90, 50 96, 58 100" fill="none" stroke={SOFT} strokeWidth="2" />
      <path d="M40 90 V140 M152 122 V140" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <rect x="40" y="108" width="116" height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <circle cx="58" cy="98" r="9" fill={INK} /><rect x="68" y="98" width="80" height="10" rx="5" fill={INK} />
      {Array.from({ length: 10 }, (_, index) => <g key={index}><rect x={30 + index * 26} y="154" width="22" height="22" rx="4" fill={dayFill(index)} stroke={INK} strokeWidth="2" />
        <W x={41 + index * 26} y={169} size={10} fill={dayFill(index) === WHITE ? TEXT : WHITE}>{index + 1}</W></g>)}
      {at === 0 && <Stack x={176} y={26} labels={["Fluids by drip", "Painkillers", "Oxygen"]} lit={() => true} width={130} gap={34} />}
      {at === 1 && <><Pill x={240} y={56} /><W x={240} y={96} size={10.5}>Only for infection</W></>}
      {at === 2 && <><Plate x={240} y={64} r={24} /><W x={240} y={112} size={10.5}>Within a few days</W></>}
      {at === 3 && <><Box x={240} y={50} w={128} text="Gallstone surgery" lit /><Box x={240} y={90} w={128} text="Help with alcohol" lit /></>}
      {at === 4 && <><House x={240} y={66} lit /><W x={240} y={110} size={10.5}>5 to 10 days</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PanCapsuleMeal(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The pancreas can't make enough enzymes", "Signs: bloating, wind, oily poo", "Capsules work on your food", "Take them with meals and snacks", "Ask for a dose review if needed"];
  const capsules = [{ x: 40, y: 62, r: -30, t: "Start" }, { x: 110, y: 36, r: 0, t: "Middle" }, { x: 180, y: 62, r: 30, t: "End" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Enzymes" title="Capsules that work on food" label="Enzyme capsules" credit="Illustration: Rehyn. Take enzymes as your team prescribes."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate of food with enzyme capsules taken at the start, middle and end of the meal">
      <Plate x={110} y={120} r={56} />
      {[[96, 110], [120, 128], [104, 136], [126, 106]].map(([cx, cy]) => <circle key={cx + cy} cx={cx} cy={cy} r="10" fill={SOFT} />)}
      {(at === 2 || at === 3) && capsules.map(capsule => <g key={capsule.t}><Pill x={capsule.x} y={capsule.y} rotate={capsule.r} />{at === 3 && <W x={capsule.x} y={capsule.y - 16} size={10}>{capsule.t}</W>}</g>)}
      {at === 2 && <Arrow d="M110 52 V86" head="M103 78 L110 88 L117 78" />}
      {at === 0 && <><Pancreas x={253} y={80} scale={0.45} /><W x={253} y={120} size={10.5}>Too few enzymes</W></>}
      {at === 1 && <Stack x={198} y={40} labels={["Bloating", "Wind", "Oily poo"]} lit={() => true} width={110} gap={36} />}
      {at === 2 && <Box x={253} y={86} w={110} text="Works on food" lit />}
      {at === 3 && <><Sun x={253} y={70} r={12} /><Cross x={253} y={70} size={2.4} /><W x={253} y={116} size={10.5}>Keep from heat</W></>}
      {at === 4 && <><Person x={253} y={112} scale={1.2} /><W x={253} y={150} size={10.5}>Dose review</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PanPainSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Upper tummy pain, mild to severe", "A step-up plan, lowest dose first", "Procedures can help some people", "Walking and slow breathing can help", "Pain teams and support lines help"];
  const litSets = [[], [0, 1], [2], [], [3]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pain" title="A step-by-step plan for pain" label="Managing long-term pain" credit="Illustration: Rehyn. Your doctor or specialist nurse plans each step with you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four steps of pain care, from simple painkillers to a pain team">
      {["Paracetamol", "Nerve pain", "Procedures", "Pain team"].map((label, index) => {
        const top = 128 - index * 28, on = litSets[at].includes(index);
        return <g key={label} opacity={on || at === 0 || at === 3 ? 1 : 0.45}>
          <rect x={16 + index * 74} y={top} width="70" height={168 - top} rx="6" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          <W x={51 + index * 74} y={top + 18} size={10} fill={on ? WHITE : TEXT}>{label}</W>
        </g>;
      })}
      {at === 0 && <Gauge x={56} y={86} r={30} value={0.75} />}
      {at === 1 && <W x={110} y={44} size={10.5}>Lowest dose first</W>}
      {at === 3 && <><Person x={52} y={104} scale={0.9} /><W x={110} y={44} size={10.5}>Walk, breathe slowly</W></>}
      {at === 4 && <W x={110} y={44} size={10.5}>Pain Concern helpline</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PanInsulinKeys(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Type 3c: too little insulin made", "It becomes more likely over time", "HbA1c check every six months", "Ask your doctor to check for type 3c", "Metformin or insulin"];
  const cells = [[236, 46], [284, 90], [236, 132]];
  const keys = [[164, 74], [196, 96], [170, 116]].slice(0, at === 4 ? 3 : 1);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diabetes" title="When the pancreas makes less insulin" label="Pancreatitis and diabetes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pancreas sending too few insulin keys to the body's cells">
      <Pancreas x={78} y={92} scale={0.65} />
      {cells.map(([cx, cy]) => <g key={cx + cy}>
        <path d={`M126 92 L${cx - 16} ${cy}`} stroke={SOFT} strokeWidth="2" strokeDasharray="4 5" />
        <circle cx={cx} cy={cy} r="16" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={cx} cy={cy - 3} r="4" fill={INK} /><rect x={cx - 2} y={cy - 2} width="4" height="9" fill={INK} />
      </g>)}
      {keys.map(([x, y]) => <Key key={x} x={x} y={y} />)}
      {at === 0 && <W x={78} y={130} size={10.5}>Less glucagon, too</W>}
      {at === 1 && <W x={110} y={168} size={10.5}>Over 10 to 20 years</W>}
      {at === 2 && <><W x={78} y={140} size={10.5}>Every 6 months</W>{Array.from({ length: 12 }, (_, index) => <rect key={index} x={30 + index * 22} y="156" width="18" height="18" rx="4" fill={index === 0 || index === 6 ? GOLD : WHITE} stroke={INK} strokeWidth="1.5" />)}</>}
      {at === 3 && <Box x={100} y={166} w={160} text="Ask about type 3c" lit />}
      {at === 4 && <><Box x={88} y={166} w={100} text="Metformin" lit /><Box x={196} y={166} w={90} text="Insulin" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PanTwoPaths(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Stopping slows damage, eases pain", "Alcohol caused it? Stop for good", "Dependent? Get help before stopping", "Expert help: 3 times likelier to quit", "Drinkline, AA and SMART Recovery"];
  const leftOn = at === 0 || at === 1 || at === 2, rightOn = at === 0 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Alcohol and smoking" title="Easing the load on your pancreas" label="Stopping alcohol and smoking" credit="Illustration: Rehyn. If you depend on alcohol, get medical help before you stop."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two paths leading away from a glass and a cigarette, with helpers alongside">
      <WineGlass x={64} y={46} scale={1.2} />
      {at === 1 && <Cross x={64} y={40} size={2.2} />}
      <Cigarette x={250} y={42} />
      <path d="M64 74 C64 120, 120 130, 146 150" fill="none" stroke={leftOn ? (at === 0 ? INK : GOLD) : LINE} strokeWidth="5" strokeLinecap="round" />
      <path d="M250 62 C250 110, 200 130, 174 150" fill="none" stroke={rightOn ? (at === 0 ? INK : GOLD) : LINE} strokeWidth="5" strokeLinecap="round" />
      <Person x={160} y={170} />
      {at === 0 && <W x={160} y={100} size={10.5}>Slows the damage</W>}
      {at === 1 && <W x={214} y={100} size={10.5}>Stop for good</W>}
      {at === 2 && <><Person x={100} y={124} scale={0.9} fill={SOFT} /><W x={220} y={100} size={10.5}>Get help first</W></>}
      {at === 3 && <><Person x={220} y={124} scale={0.9} fill={SOFT} /><W x={96} y={104} size={10.5}>3 times likelier</W></>}
      {at === 4 && <><Phone x={232} y={104} text="Drinkline" lit w={76} h={44} />{[76, 104].map(x => <Person key={x} x={x} y={120} scale={0.8} fill={SOFT} />)}</>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PanSmallMeals(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A normal, balanced diet for most", "After acute: a healthy, low-fat diet", "Cutting fat only hides the symptoms", "See a specialist dietitian", "Smaller meals; vitamin D if needed"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Food" title="Balanced meals, not strict rules" label="Eating with pancreatitis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five smaller meals across a day, with enzyme capsules beside them">
      <Box x={160} y={44} w={170} text={["Normal, balanced diet", "Healthy, low fat", "Enzymes, not low fat", "Specialist dietitian", "Vitamin D if needed"][at]} lit />
      <path d="M30 110 H290" stroke={LINE} strokeWidth="3" />
      {[0, 1, 2, 3, 4].map(index => <g key={index}><Plate x={40 + index * 60} y={110} r={20} />{at === 2 && <Pill x={40 + index * 60} y={150} />}</g>)}
      {at === 0 && <W x={160} y={160} size={10.5}>Some find smaller meals easier</W>}
      {at === 1 && <><Drop x={140} y={164} r={9} fill={GOLD} /><W x={158} y={168} size={10.5} anchor="start">Less fat</W></>}
      {at === 3 && <><Person x={70} y={170} scale={0.8} /><W x={96} y={166} size={10.5} anchor="start">Nutrition checks yearly</W></>}
      {at === 4 && <Sun x={160} y={160} r={10} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PanHelpPhone(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["999 or A&E. Do not drive to A&E", "Pain that won't go: urgent GP or 111", "Yellow skin or eyes: get urgent help", "New or worse pain needs checking", "Severe withdrawal: 999 or A&E"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Urgent help" title="Know when it's 999" label="When to get urgent help" credit="Illustration: Rehyn. In an emergency, call 999; do not drive to A&E."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with severe tummy pain beside a phone showing who to call">
      <Torso x={84} y={120} scale={0.85} />
      {(at === 0 || at === 1 || at === 3) && <ellipse cx="84" cy="108" rx="22" ry="14" fill={GOLD} opacity="0.85" className={still ? undefined : "lib-why-pulse"} />}
      {at === 0 && <path d="M108 108 H132" stroke={GOLD} strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />}
      {at === 2 && <circle cx="84" cy="47" r="18" fill="none" stroke={GOLD} strokeWidth="3" />}
      <Phone x={232} y={92} text={["999", "111", "111", "GP", "999"][at]} lit w={68} h={104} />
      <W x={232} y={168} size={10.5}>{["Do not drive to A&E", "Or urgent GP", "Urgent GP or 111", "Get it checked", "Or go to A&E"][at]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PanYearWheel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["GP and a specialist pancreas team", "Checks: yearly, 6-monthly, 2-yearly", "Ask if you need monitoring after", "Psychology support is available", "Guts UK and support groups help"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="Checks that catch problems early" label="Support and follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year wheel with the regular checks marked around it">
      <g opacity={at === 1 ? 1 : 0.4}>
        <circle cx="100" cy="104" r="64" fill={WHITE} stroke={INK} strokeWidth="3" />
        {Array.from({ length: 12 }, (_, index) => { const [x0, y0] = polar(100, 104, 56, index * 30 - 90), [x1, y1] = polar(100, 104, 64, index * 30 - 90); return <path key={index} d={`M${x0} ${y0} L${x1} ${y1}`} stroke={LINE} strokeWidth="2" />; })}
        {[-90, 90].map(deg => { const [x, y] = polar(100, 104, 44, deg); return <circle key={deg} cx={x} cy={y} r="7" fill={GOLD} />; })}
        {(() => { const [x, y] = polar(100, 104, 44, 0); return <rect x={x - 6} y={y - 6} width="12" height="12" fill={INK} />; })()}
        <W x={100} y={108} size={11}>1 year</W>
      </g>
      {at === 0 && <>{[214, 250, 286].map((x, index) => <Person key={x} x={x} y={120} scale={0.9} fill={index === 1 ? SOFT : INK} />)}<W x={250} y={158} size={10.5}>GP and specialists</W></>}
      {at === 1 && <Stack x={192} y={40} labels={["HbA1c: 6 months", "Checks: yearly", "Bones: 2 years"]} lit={() => true} width={116} gap={36} />}
      {at === 2 && <><Box x={250} y={96} w={116} text="Monitoring?" lit /><W x={250} y={134} size={10}>Ask before you leave</W></>}
      {at === 3 && <><HeartShape x={250} y={100} size={64} fill={TINT} /><W x={250} y={150} size={10.5}>Psychology</W></>}
      {at === 4 && <><Phone x={250} y={96} text="Guts UK" lit w={70} h={50} /><W x={250} y={140} size={10.5}>Helpline</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function UpperPieceView({ piece, ...props }: { piece: UpperPiece } & PieceProps) {
  switch (piece) {
    case "gord-valve": return <GordValve {...props} />;
    case "gord-trigger-ring": return <GordTriggers {...props} />;
    case "gord-body-map": return <GordBodyMap {...props} />;
    case "gord-three-levels": return <GordLevels {...props} />;
    case "gord-day-cards": return <GordDayCards {...props} />;
    case "gord-foam-raft": return <GordFoamRaft {...props} />;
    case "gord-week-track": return <GordWeekTrack {...props} />;
    case "gord-scope-path": return <GordScopePath {...props} />;
    case "gord-raised-bed": return <GordRaisedBed {...props} />;
    case "gord-meal-dial": return <GordMealDial {...props} />;
    case "gord-dose-steps": return <GordDoseSteps {...props} />;
    case "gord-cell-patch": return <GordCellPatch {...props} />;
    case "su-sore-map": return <SuSoreMap {...props} />;
    case "su-two-causes": return <SuTwoCauses {...props} />;
    case "su-pain-lines": return <SuPainLines {...props} />;
    case "su-test-cards": return <SuTestCards {...props} />;
    case "su-pill-week": return <SuPillWeek {...props} />;
    case "su-acid-tap": return <SuAcidTap {...props} />;
    case "su-two-packs": return <SuTwoPacks {...props} />;
    case "su-red-signs": return <SuRedSigns {...props} />;
    case "su-heal-line": return <SuHealLine {...props} />;
    case "su-smoke-week": return <SuSmokeWeek {...props} />;
    case "su-evening-plate": return <SuEveningPlate {...props} />;
    case "su-return-bars": return <SuReturnBars {...props} />;
    case "gs-pear-pouch": return <GsPearPouch {...props} />;
    case "gs-colic-clock": return <GsColicClock {...props} />;
    case "gs-risk-row": return <GsRiskRow {...props} />;
    case "gs-duct-map": return <GsDuctMap {...props} />;
    case "gs-sound-waves": return <GsSoundWaves {...props} />;
    case "gs-keyhole-cuts": return <GsKeyholeCuts {...props} />;
    case "gs-fortnight": return <GsFortnight {...props} />;
    case "gs-two-panel": return <GsTwoPanel {...props} />;
    case "gs-regular-plate": return <GsRegularPlate {...props} />;
    case "gs-steady-drip": return <GsSteadyDrip {...props} />;
    case "gs-two-slopes": return <GsTwoSlopes {...props} />;
    case "gs-watch-calendar": return <GsWatchCalendar {...props} />;
    case "pan-gland-jobs": return <PanGlandJobs {...props} />;
    case "pan-sudden-pain": return <PanSuddenPain {...props} />;
    case "pan-two-shapes": return <PanTwoShapes {...props} />;
    case "pan-stone-junction": return <PanStoneJunction {...props} />;
    case "pan-ward-days": return <PanWardDays {...props} />;
    case "pan-capsule-meal": return <PanCapsuleMeal {...props} />;
    case "pan-pain-steps": return <PanPainSteps {...props} />;
    case "pan-insulin-keys": return <PanInsulinKeys {...props} />;
    case "pan-two-paths": return <PanTwoPaths {...props} />;
    case "pan-small-meals": return <PanSmallMeals {...props} />;
    case "pan-help-phone": return <PanHelpPhone {...props} />;
    case "pan-year-wheel": return <PanYearWheel {...props} />;
  }
}
