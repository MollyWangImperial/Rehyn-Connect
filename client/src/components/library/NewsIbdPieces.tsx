import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { IBD_PIECES, type IbdPiece } from "@/content/ibd-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Crohn's disease and Ulcerative colitis pages' own pieces (content/ibd-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Kidneys, liver & digestion pieces. Each is steered by the card's
// sections; pictures show ideas, never anyone's own body or results.

export const isIbdPiece = (piece: NewsPiece): piece is IbdPiece => (IBD_PIECES as readonly string[]).includes(piece);

// ==== Shapes ================================================================================================

/** The caption under a picture. */
const Say = ({ children, y = 206 }: { children: ReactNode; y?: number }) => <W x={160} y={y} size={11}>{children}</W>;

/** A labelled tile from its top-left corner; filled when lit. */
const Tile = ({ x, y, width, label, lit, height = 28, size = 10.5 }: { x: number; y: number; width: number; label: string; lit: boolean; height?: number; size?: number }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
    <W x={x + width / 2} y={y + height / 2 + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{label}</W></g>;

/** A labelled box centred on (x, y); filled when lit. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;

/** A column of labelled tiles from (x, y) downwards; `lit` tiles are filled. */
const Stack = ({ x, y, labels, lit, width = 120, gap = 34, size = 10.5 }: { x: number; y: number; labels: string[]; lit: (index: number) => boolean; width?: number; gap?: number; size?: number }) =>
  <g>{labels.map((label, index) => <Tile key={label} x={x} y={y + index * gap} width={width} height={26} label={label} lit={lit(index)} size={size} />)}</g>;

const Tick = ({ x, y, color = INK, size = 1 }: { x: number; y: number; color?: string; size?: number }) =>
  <path transform={`translate(${x} ${y}) scale(${size})`} d="M-7 0 L-2 6 L8 -6" fill="none" stroke={color} strokeWidth={3.5 / size} strokeLinecap="round" strokeLinejoin="round" />;
const Cross = ({ x, y, color = INK, size = 1 }: { x: number; y: number; color?: string; size?: number }) =>
  <path transform={`translate(${x} ${y}) scale(${size})`} d="M-6 -6 L6 6 M6 -6 L-6 6" fill="none" stroke={color} strokeWidth={3.5 / size} strokeLinecap="round" />;

/** A tube of the gut: a dark edge with a light inside, gold where it is inflamed. */
const GutTube = ({ d, width = 20, glow = false, dashed = false }: { d: string; width?: number; glow?: boolean; dashed?: boolean }) =>
  <g fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} stroke={INK} strokeWidth={width} /><path d={d} stroke={glow ? GOLD : TINT} strokeWidth={width * 0.62} strokeDasharray={dashed ? "6 6" : undefined} /></g>;

/** The large bowel in five parts, from the start of the colon to the rectum. */
const COLON = {
  rising: "M96 158 V74",
  across: "M96 74 C96 58, 106 50, 122 50 H198 C214 50, 224 58, 224 74",
  falling: "M224 74 V134",
  sigmoid: "M224 134 C224 156, 200 160, 186 152 C172 144, 160 150, 160 164",
  rectum: "M160 164 V180",
};
type ColonPart = keyof typeof COLON;
const PARTS: ColonPart[] = ["rising", "across", "falling", "sigmoid", "rectum"];
/** The large bowel, `lit` parts in gold; placed at (x, y) and scaled. Spans about 85 to 235 across, 39 to 191 down. */
const Colon = ({ lit = [], x = 0, y = 0, scale = 1, opacity = 1 }: { lit?: ColonPart[]; x?: number; y?: number; scale?: number; opacity?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} opacity={opacity} fill="none" strokeLinecap="round" strokeLinejoin="round">
    {PARTS.map(part => <path key={part} d={COLON[part]} stroke={INK} strokeWidth="22" />)}
    {PARTS.map(part => <path key={`${part}-in`} d={COLON[part]} stroke={lit.includes(part) ? GOLD : TINT} strokeWidth="14" />)}
  </g>;
/** How much of the large bowel each type of colitis affects. */
const REACH: Record<string, ColonPart[]> = {
  proctitis: ["rectum"],
  left: ["rectum", "sigmoid", "falling"],
  extensive: ["rectum", "sigmoid", "falling", "across"],
  total: PARTS,
};

/** A plain body outline: head, body, arms and legs; the middle of the body is about (x, 100). */
const Body = ({ x, opacity = 1 }: { x: number; opacity?: number }) =>
  <g opacity={opacity} strokeLinecap="round" strokeLinejoin="round">
    {[`M${x - 24} 70 L${x - 36} 122`, `M${x + 24} 70 L${x + 36} 122`, `M${x - 11} 136 V188`, `M${x + 11} 136 V188`].map(d => <g key={d}><path d={d} stroke={INK} strokeWidth="14" /><path d={d} stroke={WHITE} strokeWidth="8" /></g>)}
    <path d={`M${x - 26} 68 C${x - 26} 60, ${x - 18} 57, ${x} 57 C${x + 18} 57, ${x + 26} 60, ${x + 26} 68 L${x + 22} 138 H${x - 22} Z`} fill={WHITE} stroke={INK} strokeWidth="3" />
    <circle cx={x} cy={36} r={16} fill={WHITE} stroke={INK} strokeWidth="3" />
  </g>;

/** A marker ring for something that is happening; it pulses gently. */
const Spot = ({ x, y, r = 6, still }: { x: number; y: number; r?: number; still: boolean }) =>
  <circle cx={x} cy={y} r={r} fill={GOLD} stroke={INK} strokeWidth="1.5" className={still ? undefined : "lib-why-pulse"} />;

/** A blood test tube centred on (x, y). */
const Tube = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 8} y={y - 28} width="16" height="56" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 6} y={y} width="12" height="26" rx="6" fill={lit ? INK : SOFT} /><rect x={x - 10} y={y - 32} width="20" height="8" rx="3" fill={INK} /></g>;
/** A sample pot centred on (x, y). */
const Pot = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 12} y={y - 12} width="24" height="32" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 15} y={y - 20} width="30" height="9" rx="3" fill={SOFT} /></g>;
/** A thin camera tube ending in a lens. */
const Scope = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 26} ${y + 18} C${x - 8} ${y + 18}, ${x - 12} ${y - 14}, ${x + 10} ${y - 14}`} fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" /><circle cx={x + 14} cy={y - 14} r="6" fill={GOLD} stroke={INK} strokeWidth="2" /></g>;
/** A syringe centred on (x, y). */
const Syringe = ({ x, y, rotate = -35 }: { x: number; y: number; rotate?: number }) =>
  <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
    <rect x="-20" y="-7" width="34" height="14" rx="3" fill={INK} stroke={INK} strokeWidth="2.5" />
    <path d="M14 0 H30 M-20 -11 V11 M-20 0 H-30 M-30 -8 V8" stroke={INK} strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </g>;
/** A drip bag on a line, centred on (x, y). */
const Drip = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 13} y={y - 18} width="26" height="32" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 9} y={y - 2} width="18" height="12" rx="4" fill={SOFT} /><path d={`M${x} ${y + 14} V${y + 34}`} stroke={INK} strokeWidth="2.5" strokeDasharray="3 3" /></g>;
/** A phone centred on (x, y) with words on its screen. */
const Phone = ({ x, y, text, lit = false, w = 44, h = 70 }: { x: number; y: number; text: string; lit?: boolean; w?: number; h?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="8" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={x} y={y + 4} size={11} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A speech bubble with its tail pointing down-left, centred on (x, y). */
const Bubble = ({ x, y, text, width = 110 }: { x: number; y: number; text: string; width?: number }) =>
  <g>
    <rect x={x - width / 2} y={y - 15} width={width} height="30" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" />
    <path d={`M${x - width / 2 + 18} ${y + 14} l-8 12 l18 -12`} fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <W x={x} y={y + 4} size={10.5}>{text}</W>
  </g>;
/** A plate seen from above, with three kinds of food. */
const Plate = ({ x, y, r = 46 }: { x: number; y: number; r?: number }) => {
  const inner = r * 0.7;
  const slice = (a0: number, a1: number) => {
    const p = (a: number) => [x + inner * Math.cos(a * Math.PI / 180), y + inner * Math.sin(a * Math.PI / 180)];
    const [x0, y0] = p(a0), [x1, y1] = p(a1);
    return `M${x} ${y} L${x0} ${y0} A${inner} ${inner} 0 0 1 ${x1} ${y1} Z`;
  };
  return <g><circle cx={x} cy={y} r={r} fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path d={slice(-90, 30)} fill={SOFT} stroke={WHITE} strokeWidth="2" /><path d={slice(30, 150)} fill={TINT} stroke={WHITE} strokeWidth="2" /><path d={slice(150, 270)} fill={LINE} stroke={WHITE} strokeWidth="2" /></g>;
};
/** A glass, `full` from 0 to 1. */
const Glass = ({ x, y, full = 0.6, scale = 1, fill = SOFT }: { x: number; y: number; full?: number; scale?: number; fill?: string }) => {
  const top = 17 - 32 * full;
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d={`M${-10.5 + 1.5 * (1 - full)} ${top} L-9 16 H9 L${10.5 - 1.5 * (1 - full)} ${top} Z`} fill={fill} />
    <path d="M-12 -17 L-9 17 H9 L12 -17" fill="none" stroke={INK} strokeWidth={2.5 / scale} strokeLinejoin="round" strokeLinecap="round" />
  </g>;
};
/** A bowl of soup centred on (x, y). */
const Bowl = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 24} ${y - 6} H${x + 24} A24 20 0 0 1 ${x - 24} ${y - 6} Z`} fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d={`M${x - 8} ${y - 14} q-4 -7 0 -14 M${x + 6} ${y - 14} q-4 -7 0 -14`} fill="none" stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" /></g>;
/** A stoma bag centred on (x, y). */
const Bag = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}><rect x="-22" y="-28" width="44" height="58" rx="18" fill={WHITE} stroke={INK} strokeWidth={2.5 / scale} /><circle cx="0" cy="-14" r="7" fill={SOFT} stroke={INK} strokeWidth={2 / scale} /></g>;
/** A calendar page centred on (x, y). */
const Calendar = ({ x, y, lit = -1 }: { x: number; y: number; lit?: number }) =>
  <g><rect x={x - 32} y={y - 28} width="64" height="58" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 32} y={y - 28} width="64" height="13" rx="4" fill={INK} />
    {Array.from({ length: 8 }, (_, index) => <rect key={index} x={x - 25 + (index % 4) * 13} y={y - 8 + Math.floor(index / 4) * 16} width="10" height="11" rx="2" fill={index === lit ? GOLD : TINT} />)}</g>;
/** A bone centred on (x, y). */
const Bone = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}>
    {[[-20, -6], [-20, 6], [20, -6], [20, 6]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />)}
    <rect x="-20" y="-7" width="40" height="14" fill={WHITE} /><path d="M-15 -7 H15 M-15 7 H15" stroke={INK} strokeWidth="2.5" />
  </g>;
/** A small sun. */
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
/** A thermometer centred on (x, y). */
const Thermometer = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 6} y={y - 34} width="12" height="50" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 2.5} y={y - 14} width="5" height="30" fill={GOLD} /><circle cx={x} cy={y + 22} r="10" fill={GOLD} stroke={INK} strokeWidth="2.5" /></g>;
/** A hospital bed, about 100 wide, its mattress at height y. */
const Bed = ({ x, y }: { x: number; y: number }) =>
  <g stroke={INK} strokeWidth="3" strokeLinecap="round" fill="none"><path d={`M${x} ${y - 26} V${y + 22} M${x} ${y + 8} H${x + 100} V${y + 22}`} /><rect x={x + 4} y={y - 6} width="94" height="12" rx="5" fill={TINT} /><rect x={x + 8} y={y - 16} width="24" height="10" rx="5" fill={WHITE} strokeWidth="2.5" /></g>;
/** A simple brain outline centred on (x, y). */
const Brain = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}>
    <path d="M-36 0 C-40 -22, -18 -32, 0 -26 C18 -34, 42 -22, 36 0 C44 18, 22 30, 0 24 C-20 32, -44 20, -36 0 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
    <path d="M-18 -8 C-8 -14, 0 -4, 10 -10 M-14 8 C-4 2, 6 12, 18 6" fill="none" stroke={SOFT} strokeWidth="2.5" />
  </g>;
/** A gentle wave of flare-ups and calmer times, from x0 to x1 around height y. */
const FlareWave = ({ x0, y, still }: { x0: number; y: number; still: boolean }) =>
  <path d={`M${x0} ${y + 20} C${x0 + 14} ${y + 20}, ${x0 + 20} ${y - 26}, ${x0 + 34} ${y - 26} S${x0 + 54} ${y + 20}, ${x0 + 68} ${y + 20} H${x0 + 86} C${x0 + 96} ${y + 20}, ${x0 + 100} ${y - 10}, ${x0 + 110} ${y - 10} S${x0 + 124} ${y + 20}, ${x0 + 130} ${y + 20}`}
    fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeDasharray={still ? undefined : "10 6"} className={still ? undefined : "lib-types-flow"} />;
/** A row of dots, the first `on` dark. */
const Dots = ({ x, y, count, on, gap = 20, r = 7 }: { x: number; y: number; count: number; on: number; gap?: number; r?: number }) =>
  <g>{Array.from({ length: count }, (_, index) => <circle key={index} cx={x + index * gap} cy={y} r={r} fill={index < on ? INK : SOFT} />)}</g>;

// ==== Crohn's disease =======================================================================================

const GUT_TOP = "M84 22 V40 C84 50, 120 44, 120 58 C120 70, 104 74, 96 72";
const GUT_SMALL = "M96 72 C76 74, 72 92, 92 96 S122 106, 108 116 S70 118, 80 130 S120 140, 102 150 S66 158, 60 152";
const GUT_LARGE = "M60 152 V100 C60 90, 66 86, 74 86 H126 C136 86, 140 92, 140 100 V150 C140 160, 132 166, 120 162 C110 158, 100 164, 98 174 V184";

function PatchyGut(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const patches = [[84, 30], [119, 60], [106, 113], [79, 131], [140, 124], [98, 178]];
  const shown = at === 0 ? [2, 4] : [0, 1, 2, 3, 4, 5];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Patches anywhere, mouth to bottom" label="What Crohn's disease is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The gut from mouth to bottom, with patches of inflammation and healthy gut between them">
      <GutTube d={GUT_SMALL} width={12} /><GutTube d={GUT_TOP} width={12} /><GutTube d={GUT_LARGE} width={16} />
      <g opacity={at >= 2 ? 0.55 : 1}>{shown.map(index => <Spot key={index} x={patches[index][0]} y={patches[index][1]} still={still || at !== 1} />)}</g>
      {at === 1 && <><W x={100} y={27} size={10.5} anchor="start">Mouth</W><W x={110} y={186} size={10.5} anchor="start">Bottom</W></>}
      {at === 0 && <Stack x={182} y={46} labels={["Swollen", "Inflamed", "Ulcerated"]} lit={() => true} width={120} gap={38} />}
      {at === 1 && <><W x={242} y={68} size={10.5}>Most common in</W><Stack x={182} y={80} labels={["Small bowel", "Colon"]} lit={() => true} width={120} gap={38} /></>}
      {at === 2 && <><FlareWave x0={176} y={108} still={still} /><W x={210} y={70} size={10.5}>Flare-up</W><W x={253} y={150} size={10.5}>Remission</W></>}
      {at === 3 && <>
        <W x={242} y={84} size={24} serif>1 in 650</W>
        <path d="M184 120 H300" stroke={LINE} strokeWidth="10" strokeLinecap="round" />
        <path d="M184 120 H227" stroke={INK} strokeWidth="10" strokeLinecap="round" />
        <W x={184} y={144} size={10.5} anchor="start">Age 0</W><W x={227} y={144} size={10.5}>30</W><W x={300} y={144} size={10.5} anchor="end">Any age</W>
      </>}
      {at === 4 && <Stack x={182} y={50} labels={["Consultant", "IBD nurse", "Surgeon"]} lit={index => index === 0} width={120} gap={38} />}
      <Say>{["Parts of the gut become inflamed", "Patchy, with healthy gut in between", "Flare-ups, and remission in between", "Any age, but most often before 30", "Cared for by an IBD specialist team"][at]}</Say>
    </svg>} />;
}

function BodySigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const lamps = ["See a GP", "Urgent GP or NHS 111", "999 or A&E"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="More than a gut condition" label="Symptoms of Crohn's" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with the gut marked, and the eyes, mouth, joints and skin that can also be affected">
      <Body x={66} opacity={at === 0 || at === 2 ? 1 : 0.45} />
      <path d="M52 92 C64 86, 80 90, 78 100 S54 106, 56 116 S78 124, 80 128" fill="none" stroke={at === 0 ? GOLD : SOFT} strokeWidth="4" strokeLinecap="round" />
      {at === 2 && [[60, 34], [72, 34], [66, 45], [55, 164], [77, 164], [96, 100]].map(([x, y]) => <Spot key={`${x}${y}`} x={x} y={y} r={5} still={still} />)}
      {at === 0 && <Stack x={150} y={22} labels={["Diarrhoea", "Tummy pain", "Tiredness", "Weight loss", "Urgency"]} lit={() => true} width={150} gap={31} />}
      {at === 1 && <>
        <path d="M150 140 H300" stroke={INK} strokeWidth="3" /><path d="M292 134 L301 140 L292 146" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <rect x="156" y="98" width="22" height="36" rx="5" fill={INK} /><rect x="200" y="98" width="92" height="36" rx="5" fill={INK} />
        <W x={167} y={88} size={10.5}>Days</W><W x={246} y={88} size={10.5}>Several months</W>
        <W x={225} y={162} size={10.5}>Time</W>
      </>}
      {at === 2 && <Stack x={160} y={36} labels={["Joints", "Eyes", "Skin", "Mouth ulcers"]} lit={() => true} width={136} gap={34} />}
      {at === 3 && <>
        <path d="M160 68 H210 C220 68 222 77 230 77 C238 77 240 68 250 68 H302 V92 H250 C240 92 238 83 230 83 C222 83 220 92 210 92 H160 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={230} y={56} size={10.5}>Stricture</W>
        <path d="M186 92 C186 116, 174 122, 174 134" fill="none" stroke={GOLD} strokeWidth="4" strokeDasharray="5 4" strokeLinecap="round" />
        <circle cx="174" cy="142" r="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={192} y={146} size={10.5} anchor="start">Fistula</W>
      </>}
      {at === 4 && lamps.map((label, index) => <g key={label}>
        <circle cx="162" cy={66 + index * 42} r="13" fill={index === 2 ? INK : SOFT} stroke={INK} strokeWidth="2" />
        <W x={184} y={70 + index * 42} size={10.5} anchor="start">{label}</W>
      </g>)}
      <Say>{["Diarrhoea, pain, tiredness, urgency", "A flare-up: a few days to months", "Up to 1 in 2: joints, eyes or skin", "About 1 in 3 develop a fistula", "Severe signs: A&E or call 999"][at]}</Say>
    </svg>} />;
}

function GutBarrier(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const bug = (x: number, y: number, fill: string, key: string | number, rotate = -20) => <ellipse key={key} cx={x} cy={y} rx="9" ry="5" fill={fill} stroke={INK} strokeWidth="1.5" transform={`rotate(${rotate} ${x} ${y})`} />;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Genes, bacteria and the immune system" label="What causes Crohn's" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The gut wall with bacteria above it and the immune system below, and the things that may play a part">
      <W x={16} y={132} size={10} anchor="start">Gut wall</W>
      {Array.from({ length: 8 }, (_, index) => index === 3 && at === 0
        ? <rect key={index} x={74 + index * 28} y="118" width="24" height="20" rx="4" fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="4 3" />
        : <rect key={index} x={74 + index * 28} y="118" width="24" height="20" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" />)}
      {at === 0 && <>
        {[[92, 84], [124, 98], [150, 76], [204, 92], [244, 80], [276, 98]].map(([x, y], index) => bug(x, y, SOFT, index))}
        <g className={still ? undefined : "lib-why-pulse"}>{bug(170, 128, GOLD, "gap", 70)}</g>
        {[140, 170, 200].map(x => <circle key={x} cx={x} cy="168" r="8" fill={INK} />)}
        <W x={220} y={172} size={10.5} anchor="start">Immune cells</W>
      </>}
      {at === 1 && <>
        <path d="M80 60 C100 60, 100 100, 120 100 S140 60, 160 60 S180 100, 200 100 S220 60, 240 60" fill="none" stroke={INK} strokeWidth="3.5" />
        <path d="M80 100 C100 100, 100 60, 120 60 S140 100, 160 100 S180 60, 200 60 S220 100, 240 100" fill="none" stroke={SOFT} strokeWidth="3.5" />
        {[90, 110, 130, 150, 170, 190, 210, 230].map(x => <path key={x} d={`M${x} 70 V90`} stroke={LINE} strokeWidth="3" />)}
      </>}
      {at === 2 && [[92, 70, INK], [124, 94, SOFT], [150, 66, INK], [180, 92, INK], [214, 70, INK], [244, 96, SOFT], [276, 72, INK]].map(([x, y, fill], index) => bug(x as number, y as number, fill as string, index, index % 2 ? 20 : -20))}
      {at === 3 && <>
        <rect x="104" y="72" width="112" height="16" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="190" y="72" width="26" height="16" rx="3" fill={SOFT} stroke={INK} strokeWidth="2.5" />
        <path d="M100 74 q-8 -10 0 -20 q8 -10 0 -20" fill="none" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />
        <Cross x={160} y={80} color={GOLD} size={2.4} />
      </>}
      {at === 4 && <><W x={160} y={46} size={16} serif>Not your fault</W><g transform="translate(0 4)"><circle cx="160" cy="84" r="22" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="160" cy="84" r="15" fill="none" stroke={LINE} strokeWidth="2" /></g></>}
      <Say>{["The immune system attacks the gut", "Over 200 gene variations affect risk", "Gut bacteria may be out of balance", "Stopping smoking lowers flare-up risk", "No evidence any food causes it"][at]}</Say>
    </svg>} />;
}

function ClueCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const cards = ["Blood", "Poo", "Camera", "Scan"];
  const lit = [[0, 1], [0, 1], [2], [3], [2]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="No single test, many clues" label="Tests for Crohn's" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four kinds of test: blood, poo, camera and scans, and what each one adds">
      {cards.map((label, index) => {
        const x = 14 + index * 76, cx = x + 34, on = lit.includes(index);
        return <g key={label} opacity={on ? 1 : 0.4}>
          <rect x={x} y="22" width="68" height="88" rx="10" fill={WHITE} stroke={INK} strokeWidth={on ? 3 : 2} />
          {index === 0 && <Tube x={cx} y={56} lit={on} />}
          {index === 1 && <Pot x={cx} y={56} />}
          {index === 2 && <Scope x={cx} y={58} />}
          {index === 3 && <><circle cx={cx} cy="56" r="20" fill="none" stroke={INK} strokeWidth="6" /><path d={`M${cx - 24} 66 H${cx + 24}`} stroke={SOFT} strokeWidth="4" strokeLinecap="round" /></>}
          <W x={cx} y={100} size={10.5}>{label}</W>
        </g>;
      })}
      {at === 0 && <><Person x={60} y={172} scale={0.8} /><W x={84} y={162} size={10.5} anchor="start">GP</W>
        <path d="M112 156 H160 M152 149 L161 156 L152 163" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><Box x={226} y={156} w={110} text="Specialist" lit /></>}
      {at === 1 && <><Box x={96} y={152} w={120} text="Inflammation?" lit /><Box x={240} y={152} w={110} text="Anaemia?" /></>}
      {at === 2 && <Box x={160} y={152} w={200} text="Biopsies: usually no pain" lit />}
      {at === 3 && ["MRI", "CT", "Ultrasound", "Capsule"].map((label, index) => <Box key={label} x={50 + index * 73} y={152} w={66} text={label} size={10} lit={index === 0} />)}
      {at === 4 && <><Box x={92} y={152} w={120} text="Report: 3 weeks" size={10} lit /><Box x={236} y={152} w={140} text="Biopsies: up to 2 months" size={10} /></>}
      <Say>{["A GP arranges blood and poo tests", "Blood and poo tests show inflammation", "Colonoscopy takes 30 to 45 minutes", "MRI, CT, ultrasound or a capsule", "Contact your GP if you hear nothing"][at]}</Say>
    </svg>} />;
}

function TwoSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const both = at === 0;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Get it under control, keep it there" label="Medicines for Crohn's" credit="Illustration: Rehyn. Your IBD team will say which medicines suit you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two steps: getting Crohn's under control, then keeping it there, with the medicines used for each">
      <rect x="20" y="128" width="140" height="50" rx="6" fill={both ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="160" y="88" width="140" height="90" rx="6" fill={both ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
      <W x={90} y={150} size={10.5} fill={both ? WHITE : TEXT}>Get it under control</W><W x={90} y={167} size={10} fill={both ? WHITE : SOFT}>Induction</W>
      <W x={230} y={110} size={10.5} fill={both ? WHITE : TEXT}>Keep it under control</W><W x={230} y={127} size={10} fill={both ? WHITE : SOFT}>Remission</W>
      <g opacity={at === 1 || at === 4 ? 1 : 0.4}><Pill x={90} y={108} fill={at === 1 ? GOLD : INK} /></g>
      {at === 1 && <W x={90} y={88} size={10.5}>Steroids</W>}
      <g opacity={at === 2 || at === 4 ? 1 : 0.4}><Pill x={190} y={66} rotate={-15} fill={at === 2 ? GOLD : INK} /></g>
      {at === 2 && <><W x={192} y={30} size={10.5}>Immunosuppressants</W><Clock x={192} y={156} r={14} hand={1.6} /></>}
      <g opacity={at === 3 || at === 4 ? 1 : 0.4}><Drip x={240} y={50} /><Syringe x={284} y={62} /></g>
      {at === 3 && <W x={262} y={24} size={10.5}>Biologics</W>}
      {at === 4 && <Thermometer x={50} y={66} />}
      <Say>{["Induce, then keep in remission", "Steroids: quick, but not long-term", "Azathioprine: 3 months or more to work", "Biologics: a drip or an injection", "Report infection signs straight away"][at]}</Say>
    </svg>} />;
}

function Rejoin(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Surgery" title="An operation as a treatment choice" label="Surgery for Crohn's" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A section of bowel with a damaged part removed and the healthy ends joined, and a stoma bag">
      {at === 0 && <><GutTube d="M30 64 H290" /><path d="M140 64 H180" stroke={GOLD} strokeWidth="12" strokeLinecap="round" />
        <W x={160} y={114} size={10.5}>Around 1 in 5 in the first 5 years</W>
        {Array.from({ length: 5 }, (_, index) => <Person key={index} x={96 + index * 32} y={168} scale={0.75} fill={index === 0 ? INK : SOFT} />)}</>}
      {at === 1 && <>
        <GutTube d="M30 64 H126" /><GutTube d="M194 64 H290" /><GutTube d="M142 30 H178" glow />
        <W x={196} y={34} size={10.5} anchor="start">Removed</W>
        <GutTube d="M70 136 H250" /><path d="M160 122 V150" stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />
        <W x={160} y={172} size={10.5}>Healthy ends joined</W>
      </>}
      {at === 2 && <><GutTube d="M30 64 H170 C188 64, 196 74, 196 92 V106" /><Bag x={196} y={138} />
        <W x={232} y={144} size={10.5} anchor="start">Stoma bag</W></>}
      {at === 3 && <><GutTube d="M30 64 H290" /><g opacity={0.9}><Bed x={40} y={140} /></g><Box x={240} y={140} w={110} text="7 to 10 days" lit /></>}
      {at === 4 && <><GutTube d="M30 64 H290" /><Dots x={70} y={140} count={10} on={9} /></>}
      <Say>{["Fewer need surgery than 20 years ago", "Damaged part out, healthy ends joined", "A stoma is often only temporary", "Back to work in 2 to 10 weeks", "Almost 9 in 10 would have it again"][at]}</Say>
    </svg>} />;
}

function FlarePlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows = ["IBD team or GP", "NHS 111", "999 or A&E"];
  const lit = [[], [0, 1], [2], [], []][at] as number[];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Flare-ups" title="Your plan for the bad days" label="Managing a flare-up" credit="Illustration: Rehyn. Follow your own plan from your IBD team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A flare-up plan: the IBD team or GP, NHS 111, and 999 or A&E, with things that help at home">
      <rect x="18" y="22" width="132" height="158" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
      <W x={84} y={46} size={11}>Flare-up plan</W>
      {rows.map((label, index) => <Tile key={label} x={30} y={62 + index * 40} width={108} label={label} lit={lit.includes(index)} size={10} />)}
      {at === 0 && <><Clock x={196} y={72} r={22} hand={3} /><W x={228} y={77} size={10.5} anchor="start">24 hours</W><Dots x={180} y={132} count={6} on={6} gap={22} /></>}
      {at === 1 && <><W x={238} y={46} size={10.5}>In a message:</W><Stack x={178} y={58} labels={["Full name", "Date of birth", "NHS number"]} lit={() => false} width={120} gap={34} /></>}
      {at === 2 && <Phone x={236} y={100} text="999" lit w={56} h={88} />}
      {at === 3 && <><Pill x={200} y={66} /><Glass x={200} y={126} scale={1.3} full={0.7} /><Bowl x={266} y={130} />
        <path d="M268 54 a14 14 0 1 0 14 22 a11 11 0 1 1 -14 -22 Z" fill={SOFT} /></>}
      {at === 4 && <><Pill x={204} y={92} fill={GOLD} /><rect x="240" y="60" width="58" height="72" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[76, 92, 108, 124].map(y => <path key={y} d={`M248 ${y} H290`} stroke={LINE} strokeWidth="2" />)}<W x={269} y={150} size={10.5}>Diary</W></>}
      <Say>{["More than 5 poos in 24 hours", "Follow your plan, or call the IBD team", "Emergency signs: call 999 or go to A&E", "Keep taking medicines; drink enough", "Medicines, even when well, lower risk"][at]}</Say>
    </svg>} />;
}

function PlateFeed(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Food" title="Eating well, without a miracle diet" label="Food and Crohn's" credit="Illustration: Rehyn. A dietitian can help you plan what suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balanced plate, a food diary, soups and smoothies, a liquid feed and vitamins">
      <g opacity={at === 0 ? 1 : 0.4}><Plate x={82} y={98} r={52} /></g>
      {at === 0 && <><Box x={218} y={98} w={108} text="Special diet" /><Cross x={290} y={98} color={GOLD} size={1.8} /></>}
      {at === 1 && <><rect x="190" y="34" width="96" height="112" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[54, 74, 94, 114, 134].map(y => <path key={y} d={`M200 ${y} H276`} stroke={LINE} strokeWidth="2" />)}
        <circle cx="262" cy="94" r="9" fill="none" stroke={GOLD} strokeWidth="3" /><W x={238} y={168} size={10.5}>Food diary</W></>}
      {at === 2 && <><Bowl x={204} y={104} /><Glass x={268} y={96} scale={1.4} full={0.8} /><W x={204} y={140} size={10.5}>Soup</W><W x={268} y={140} size={10.5}>Smoothie</W></>}
      {at === 3 && <><rect x="216" y="36" width="44" height="110" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="222" y="70" width="32" height="70" rx="6" fill={INK} />
        <rect x="226" y="26" width="24" height="12" rx="3" fill={SOFT} /><W x={238} y={168} size={10.5}>6 to 8 weeks to heal</W></>}
      {at === 4 && <Stack x={180} y={40} labels={["Iron", "Calcium", "Vitamin B12", "Vitamin D"]} lit={() => true} width={116} gap={32} />}
      <Say>{["No special diet is proven to help", "A food diary may show what affects you", "Soups or smoothies may be easier", "Liquid diet: first choice for children", "A supplement, only if you need one"][at]}</Say>
    </svg>} />;
}

function Battery(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const charge = [0.15, 0.3, 0.2, 0.55, 0.7][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fatigue" title="Tiredness that rest does not fix" label="Fatigue" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A battery running low, with how common fatigue is, its causes and what helps">
      <rect x="52" y="28" width="26" height="12" rx="3" fill={INK} />
      <rect x="30" y="40" width="70" height="140" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="38" y={172 - 124 * charge} width="54" height={124 * charge} rx="5" fill={at === 4 ? GOLD : INK} />
      {at === 0 && <Stack x={150} y={52} labels={["Physical", "Mental", "Or both"]} lit={index => index < 2} width={130} gap={38} />}
      {at === 1 && <>
        <rect x="150" y="76" width="50" height="84" rx="4" fill={INK} /><rect x="230" y="112" width="50" height="48" rx="4" fill={SOFT} />
        <W x={175} y={66} size={10.5}>7 in 10</W><W x={255} y={102} size={10.5}>4 in 10</W>
        <W x={175} y={178} size={10.5}>Flare-up</W><W x={255} y={178} size={10.5}>Remission</W>
      </>}
      {at === 2 && <Stack x={150} y={22} labels={["Inflammation", "Anaemia", "Low nutrients", "Poor sleep", "Stress"]} lit={() => true} width={140} gap={31} />}
      {at === 3 && <><Tube x={170} y={96} lit /><Pill x={232} y={100} fill={GOLD} /><Person x={286} y={118} scale={0.9} />
        <W x={170} y={150} size={10.5}>Blood test</W><W x={232} y={150} size={10.5}>Iron</W><W x={286} y={150} size={10.5}>Exercise</W></>}
      {at === 4 && <><W x={218} y={74} size={10.5}>Today's energy</W>
        {Array.from({ length: 5 }, (_, index) => <rect key={index} x={146 + index * 30} y="88" width="24" height="40" rx="5" fill={index < 2 ? INK : WHITE} stroke={INK} strokeWidth="2" />)}
        <W x={218} y={152} size={10.5}>Small goals, a gentle routine</W></>}
      <Say>{["Not eased by the usual rest or sleep", "Common in flare-ups and in remission", "It could be a sign of a flare-up", "Treat the cause; build up gently", "Plan energy like a daily budget"][at]}</Say>
    </svg>} />;
}

function DeskKey(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const on = (index: number) => at === index ? 1 : 0.35;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work and study" title="Rights, adjustments and a RADAR key" label="Work, study and toilets" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk with a person, a screen of adjustments, a grant letter, a RADAR key and card, and a book with a clock">
      <g opacity={on(0)}><Person x={44} y={146} scale={1.1} />{at === 0 && <Bubble x={96} y={44} text="Your choice" width={100} />}</g>
      <g opacity={on(1)}><rect x="96" y="84" width="64" height="48" rx="5" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><path d="M128 132 V144 M114 146 H142" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <W x={128} y={112} size={10} fill={at === 1 ? WHITE : TEXT}>Adjust</W></g>
      <g opacity={on(2)}><rect x="172" y="110" width="46" height="36" rx="3" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><path d="M172 110 L195 130 L218 110" fill="none" stroke={at === 2 ? WHITE : INK} strokeWidth="2" /></g>
      <g opacity={on(3)}><rect x="228" y="96" width="70" height="26" rx="4" fill={at === 3 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={263} y={113} size={10} fill={at === 3 ? WHITE : TEXT}>Can't Wait</W>
        <circle cx="240" cy="136" r="7" fill="none" stroke={INK} strokeWidth="3" /><path d="M247 136 H276 M270 136 V143 M276 136 V142" stroke={INK} strokeWidth="3" strokeLinecap="round" /></g>
      <g opacity={on(4)}><rect x="196" y="34" width="40" height="30" rx="3" fill={at === 4 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><path d="M216 34 V64" stroke={at === 4 ? WHITE : INK} strokeWidth="2" /><Clock x={272} y={50} r={16} hand={2.2} /></g>
      <path d="M16 150 H304 M36 150 V180 M284 150 V180" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <Say>{["You do not have to tell an employer", "Toilet breaks, flexible hours and more", "Access to Work: a grant, not a loan", "A RADAR key and a Can't Wait Card", "Extra exam time or later deadlines"][at]}</Say>
    </svg>} />;
}

function TwoWay(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood" title="Looking after your mind and your gut" label="Mood and Crohn's" credit="Illustration: Rehyn. Support is there; you do not have to manage alone."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The brain and the gut linked both ways, with the support that helps">
      <Brain x={66} y={62} />
      <GutTube d="M226 108 V58 C226 48, 232 44, 242 44 H270 C280 44, 286 50, 286 60 V106" width={18} />
      <path d="M112 54 H212 M204 47 L213 54 L204 61" fill="none" stroke={at === 2 ? GOLD : LINE} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={at === 2 && !still ? "8 6" : undefined} className={at === 2 && !still ? "lib-types-flow" : undefined} />
      <path d="M212 76 H112 M120 69 L111 76 L120 83" fill="none" stroke={at === 2 ? GOLD : LINE} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {at === 0 && <Dots x={70} y={148} count={10} on={5} />}
      {at === 1 && ["Diagnosis", "Flare-up", "Hospital", "Treatment"].map((label, index) => <Box key={label} x={50 + index * 73} y={148} w={66} text={label} size={10} lit />)}
      {at === 2 && <Box x={160} y={148} w={140} text="Gut-brain axis" lit />}
      {at === 3 && <>{[120, 160, 200].map((x, index) => <Person key={x} x={x} y={170} scale={0.8} fill={index === 1 ? INK : SOFT} />)}</>}
      {at === 4 && <><Box x={88} y={148} w={128} text="GP or IBD team" lit /><Box x={236} y={148} w={136} text="Samaritans 116 123" /></>}
      <Say>{["Half say it has affected mental health", "Mood can dip at these times", "Gut and brain affect each other", "Support groups, talking, CBT can help", "You may be able to refer yourself"][at]}</Say>
    </svg>} />;
}

function Checklist(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows = ["Blood tests", "Vaccines", "Colonoscopy", "Bone health", "Blood count"];
  const right = [<><Tube x={236} y={92} lit /><Clock x={280} y={96} r={18} hand={1} /></>, <Syringe x={258} y={92} />, <Scope x={258} y={96} />, <Bone x={258} y={94} />, <Sun x={258} y={92} r={14} />][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Checks" title="Checks that keep you well" label="Long-term checks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A checklist of blood tests, vaccines, colonoscopy, bone health and blood counts">
      <rect x="20" y="24" width="180" height="160" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="84" y="16" width="52" height="14" rx="4" fill={SOFT} />
      {rows.map((label, index) => {
        const y = 52 + index * 28, lit = index === at;
        return <g key={label}><rect x="32" y={y - 10} width="20" height="20" rx="4" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />{lit && <Tick x={42} y={y} color={WHITE} size={0.8} />}
          <W x={62} y={y + 4} size={10.5} anchor="start" fill={lit ? TEXT : SOFT}>{label}</W></g>;
      })}
      {right}
      <W x={258} y={146} size={10.5}>{["2 weeks, then less", "Flu, COVID-19", "About 8 years", "No symptoms", "Sunscreen, a hat"][at]}</W>
      <Say>{["Blood tests often at first, then less", "Non-live vaccines are safe to have", "If it affects the colon: a colonoscopy", "Steroids over 3 months: a DEXA scan", "Blood count every 3 to 12 months"][at]}</Say>
    </svg>} />;
}

// ==== Ulcerative colitis ====================================================================================

function ColonLining(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Inflammation that comes and goes" label="What ulcerative colitis is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The large bowel with the rectum and lower colon inflamed, and what is known about colitis">
      <Colon x={-62} y={-4} lit={["rectum", "sigmoid"]} opacity={at === 0 || at === 1 ? 1 : 0.5} />
      {at === 0 && <Stack x={186} y={52} labels={["Swollen", "Red and fragile", "Ulcers may form"]} lit={() => true} width={120} gap={38} />}
      {at === 1 && <><W x={246} y={56} size={10.5}>Probably a mix of</W><Stack x={186} y={68} labels={["Genes", "Gut bacteria", "Environment"]} lit={() => false} width={120} gap={36} /></>}
      {at === 2 && <>
        <path d="M192 112 H302" stroke={LINE} strokeWidth="10" strokeLinecap="round" />
        <path d="M220 112 H247" stroke={INK} strokeWidth="10" strokeLinecap="round" />
        <W x={192} y={96} size={10.5} anchor="start">Age</W><W x={300} y={96} size={10.5} anchor="end">Any age</W><W x={220} y={138} size={10.5}>20</W><W x={247} y={138} size={10.5}>40</W>
      </>}
      {at === 3 && <><FlareWave x0={178} y={104} still={still} /><W x={212} y={66} size={10.5}>Flare-up</W><W x={255} y={146} size={10.5}>Remission</W></>}
      {at === 4 && <>{[206, 246, 286].map((x, index) => <Person key={x} x={x} y={118} scale={0.9} fill={index === 0 ? INK : SOFT} />)}<W x={246} y={152} size={10.5}>IBD team</W></>}
      <Say>{["Large bowel and rectum inflamed", "Not contagious: you cannot catch it", "Any age; most often 20 to 40", "No cure yet, but effective treatments", "Seen by an IBD specialist team"][at]}</Say>
    </svg>} />;
}

function DaySigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="More than a bowel problem" label="Symptoms of ulcerative colitis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The large bowel with the lower left marked, and the symptoms, flare-up signs and triggers">
      <Colon x={-39} y={16} scale={0.62} lit={at === 0 ? ["sigmoid"] : ["rectum", "sigmoid"]} opacity={at === 3 ? 0.5 : 1} />
      {at === 0 && <Spot x={100} y={103} r={9} still={still} />}
      {at === 0 && <Stack x={146} y={30} labels={["Diarrhoea", "Blood or mucus", "Tummy pain", "Urgency"]} lit={() => true} width={150} gap={34} />}
      {at === 1 && <><Gauge x={222} y={110} r={50} value={0.55} /><W x={172} y={132} size={10.5}>Mild</W><W x={272} y={132} size={10.5}>Severe</W><Sun x={286} y={40} r={10} /></>}
      {at === 2 && <><Clock x={176} y={72} r={22} hand={3} /><W x={208} y={77} size={10.5} anchor="start">24 hours</W><Dots x={164} y={132} count={6} on={6} gap={24} /></>}
      {at === 3 && <Stack x={146} y={30} labels={["Joints", "Eyes", "Skin", "Mouth ulcers"]} lit={() => true} width={150} gap={34} />}
      {at === 4 && <Stack x={146} y={30} labels={["Stress", "Infections", "Medicine changes", "NSAIDs"]} lit={() => false} width={150} gap={34} />}
      <Say>{["Pain may ease after pooing", "Often worst in the morning", "More than 5 poos in 24 hours", "As many as 1 in 5, often in a flare", "Or sometimes no obvious trigger"][at]}</Say>
    </svg>} />;
}

function FourReaches(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const minis: [string, ColonPart[]][] = [["Proctitis", REACH.proctitis], ["Left-sided", REACH.left], ["Extensive", REACH.extensive], ["Total", REACH.total]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="How much" title="How far up it reaches" label="How much of the bowel" credit="Illustration: Rehyn. The types are named by how much of the large bowel is inflamed."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The large bowel, shaded from the rectum only to the whole colon for each type of colitis">
      {at === 0 && <><Colon lit={["rectum"]} /><W x={176} y={184} size={10.5} anchor="start">Rectum</W><W x={160} y={110} size={10.5}>Colon</W></>}
      {at === 1 && minis.map(([label, lit], index) => <g key={label}><Colon x={-12.6 + index * 76} y={46} scale={0.36} lit={lit} /><W x={45 + index * 76} y={136} size={10}>{label}</W></g>)}
      {at === 2 && <><Colon lit={REACH.left} /><circle cx="224" cy="104" r="18" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} /><W x={250} y={108} size={10.5} anchor="start">Left side</W></>}
      {at === 3 && <>
        <Colon x={10} y={30.5} scale={0.5} lit={REACH.proctitis} /><Colon x={150} y={30.5} scale={0.5} lit={REACH.extensive} />
        <path d="M140 80 H182 M174 73 L183 80 L174 87" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M182 104 H140 M148 97 L139 104 L148 111" fill="none" stroke={LINE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 4" />
        <W x={90} y={150} size={10.5}>Proctitis</W><W x={230} y={150} size={10.5}>Most of the colon</W>
      </>}
      {at === 4 && <><Colon lit={["rectum"]} /><path d="M112 176 H130 a7 7 0 0 1 0 14 H112 Z" fill={GOLD} stroke={INK} strokeWidth="2" /><path d="M136 183 H146" stroke={INK} strokeWidth="2.5" strokeLinecap="round" /></>}
      <Say>{["It usually begins in the rectum", "Named by how much is affected", "Left-sided: pain on the left side", "It can change: spread or settle", "Proctitis: medicine into the rectum"][at]}</Say>
    </svg>} />;
}

function ClueLines(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tags = ["Symptoms", "Blood tests", "Poo tests", "Camera tests"];
  const lit = [[0, 1, 2, 3], [1, 2], [3], [3], [3]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="Pieces of the picture, put together" label="Tests for ulcerative colitis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Symptoms, blood, poo and camera tests joining up into a diagnosis">
      {tags.map((label, index) => <g key={label}>
        <path d={`M118 ${39 + index * 38} L134 96`} stroke={lit.includes(index) ? INK : LINE} strokeWidth="2.5" />
        <Tile x={14} y={26 + index * 38} width={104} height={26} label={label} lit={lit.includes(index)} />
      </g>)}
      <circle cx="166" cy="96" r="32" fill={WHITE} stroke={INK} strokeWidth="3" /><W x={166} y={100} size={10}>Diagnosis</W>
      {at === 0 && <><Person x={258} y={120} scale={1.1} /><W x={258} y={152} size={10.5}>Specialist</W></>}
      {at === 1 && <><Tube x={238} y={96} lit /><Pot x={280} y={98} /></>}
      {at === 2 && <><Colon x={197} y={35} scale={0.38} /><Scope x={262} y={142} /></>}
      {at === 3 && <><rect x="244" y="64" width="28" height="56" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="251" y="54" width="14" height="12" rx="3" fill={SOFT} /><rect x="248" y="86" width="20" height="30" rx="4" fill={INK} />
        <W x={258} y={142} size={10.5}>Bowel prep</W></>}
      {at === 4 && <><Calendar x={258} y={94} lit={6} /><W x={258} y={146} size={10.5}>3 weeks</W></>}
      <Say>{["No one test: doctors use all the clues", "Calprotectin shows bowel inflammation", "A camera tube looks inside the bowel", "It should take 30 to 45 minutes", "Biopsy results can take up to 2 months"][at]}</Say>
    </svg>} />;
}

function FlareToCalm(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const meds = ["5-ASA", "Steroids", "Azathioprine", "Biologics"];
  const lit = [[], [0], [1], [2, 3], []][at] as number[];
  const zone = [[0, 1], [0, 1], [0], [1], [0, 1]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Calm it, then keep it calm" label="Medicines for ulcerative colitis" credit="Illustration: Rehyn. Your IBD team will say which medicines suit you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An inflamed bowel becoming calm, with the medicines used at each stage">
      {[0, 1].map(index => {
        const x = index === 0 ? 20 : 180, on = zone.includes(index);
        return <g key={index} opacity={on ? 1 : 0.4}>
          <rect x={x} y="20" width="120" height="70" rx="10" fill={WHITE} stroke={INK} strokeWidth={on ? 3 : 2} />
          <Colon x={x + 60 - 48} y={22.3} scale={0.3} lit={index === 0 ? REACH.left : []} />
          <W x={x + 60} y={106} size={10.5}>{index === 0 ? "Bring under control" : "Keep under control"}</W>
        </g>;
      })}
      <path d="M146 55 H174 M166 48 L175 55 L166 62" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {meds.map((label, index) => <Tile key={label} x={12 + index * 76} y={124} width={70} label={label} lit={lit.includes(index)} size={10} />)}
      {at === 4 && <Box x={160} y={172} w={190} text="Paracetamol: likely the safest" size={10} />}
      <Say>{["Bring it under control, then keep it", "Mesalazine eases the bowel lining", "Steroids: only for a set time", "Immune medicines help prevent flares", "It may take time to find what works"][at]}</Say>
    </svg>} />;
}

function PlanSheet(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows = ["Spot signs", "Call the team", "Keep medicines", "Rest, drink"];
  const done = [0, 1, 2, 3, 2][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Flare-ups" title="Have a plan before it starts" label="Managing a flare-up" credit="Illustration: Rehyn. Follow your own plan from your IBD team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A written flare-up plan with four steps, and the things that go with each">
      <path d="M22 20 H130 L150 40 V182 H22 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><path d="M130 20 V40 H150" fill="none" stroke={INK} strokeWidth="2" />
      <W x={34} y={44} size={10.5} anchor="start">My flare-up plan</W>
      {rows.map((label, index) => {
        const y = 72 + index * 30, lit = index === done;
        return <g key={label}><rect x="32" y={y - 10} width="20" height="20" rx="4" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />{lit && <Tick x={42} y={y} color={WHITE} size={0.8} />}
          <W x={60} y={y + 4} size={10} anchor="start" fill={lit ? TEXT : SOFT}>{label}</W></g>;
      })}
      {at === 0 && <><Clock x={196} y={72} r={22} hand={3} /><W x={228} y={77} size={10.5} anchor="start">24 hours</W><Dots x={176} y={134} count={6} on={6} gap={24} /></>}
      {at === 1 && <><Phone x={236} y={92} text="IBD" lit w={56} h={80} /><W x={236} y={156} size={10.5}>No answer: NHS 111</W></>}
      {at === 2 && <>{[66, 96, 126].map(y => <Pill key={y} x={236} y={y} fill={y === 96 ? GOLD : INK} />)}<W x={236} y={160} size={10.5}>A good supply</W></>}
      {at === 3 && <><Glass x={204} y={100} scale={1.3} full={0.7} /><Bowl x={268} y={110} /><W x={204} y={146} size={10.5}>Drink</W><W x={268} y={146} size={10.5}>Soup</W></>}
      {at === 4 && <><Pill x={214} y={92} fill={GOLD} /><Tick x={262} y={92} color={GOLD} size={1.8} /><W x={238} y={140} size={10.5}>Even when well</W></>}
      <Say>{["More than 5 poos in 24 hours", "No plan? Call your IBD team or GP", "Keep taking your medicines as normal", "Rest, sleep, and drink enough", "Medicines, even when well, cut risk"][at]}</Say>
    </svg>} />;
}

function TwoLamps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const red = at !== 1, amber = at === 1 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Emergencies" title="Know when it is an emergency" label="Severe flare-ups" credit="Illustration: Rehyn. In an emergency, call 999 or go to A&E."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two lights: 999 or A&E, and an urgent GP or NHS 111, with the signs that go with each">
      <rect x="20" y="30" width="64" height="140" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" />
      <circle cx="52" cy="70" r="20" fill={red ? INK : TINT} stroke={INK} strokeWidth="2" className={red && !still ? "lib-why-pulse" : undefined} />
      <circle cx="52" cy="130" r="20" fill={amber ? GOLD : TINT} stroke={INK} strokeWidth="2" />
      <W x={94} y={74} size={10.5} anchor="start" fill={red ? TEXT : SOFT}>999 or A&E</W>
      <W x={94} y={134} size={10.5} anchor="start" fill={amber ? TEXT : SOFT}>GP or NHS 111</W>
      {at === 0 && <><circle cx="226" cy="96" r="12" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M238 96 H284 M276 96 V105 M284 96 V103" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <Cross x={252} y={96} color={GOLD} size={2.4} /><W x={252} y={140} size={10.5}>Do not drive</W></>}
      {at === 1 && <><Person x={228} y={118} scale={1} /><Thermometer x={280} y={92} /><W x={252} y={150} size={10.5}>High temperature</W></>}
      {at === 2 && <><Bag x={252} y={96} /><W x={252} y={146} size={10.5}>Blocked stoma</W></>}
      {at === 3 && <><Bed x={196} y={110} /><Drip x={286} y={60} /><W x={246} y={154} size={10.5}>Hospital care</W></>}
      {at === 4 && <><Colon x={187.2} y={41} scale={0.38} lit={PARTS} /><W x={248} y={140} size={10.5}>Toxic megacolon</W></>}
      <Say>{["Call 999 or go to A&E; bring medicines", "Urgent GP or 111: bloody diarrhoea", "Blocked stoma: A&E or call 999", "Acute severe colitis: hospital stay", "Rare: get treatment quickly"][at]}</Say>
    </svg>} />;
}

function TwoRoutes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const left = at === 1 || at === 2 || at === 3, right = at === 1 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Surgery" title="Surgery is not a last resort" label="Surgery for ulcerative colitis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two ways of life after the large bowel is removed: an ileostomy with a stoma bag, or an internal J pouch">
      <g opacity={left ? 1 : 0.4}>
        <rect x="30" y="36" width="80" height="128" rx="32" fill={WHITE} stroke={INK} strokeWidth="3" />
        <GutTube d="M56 56 C80 56, 84 74, 62 80 S44 100, 70 104 S88 118, 62 124" width={10} />
        <Bag x={58} y={134} scale={0.6} />
        <W x={70} y={184} size={10.5}>Ileostomy</W>
      </g>
      <g opacity={right ? 1 : 0.4}>
        <rect x="140" y="36" width="80" height="128" rx="32" fill={WHITE} stroke={INK} strokeWidth="3" />
        <GutTube d="M166 56 C190 56, 194 74, 172 80 S154 96, 178 100" width={10} />
        <GutTube d="M178 100 V140 C178 150, 192 150, 192 140 V118" width={12} glow={at === 4} />
        <path d="M185 148 V160" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <W x={180} y={184} size={10.5}>J pouch</W>
      </g>
      {at === 0 && <><Calendar x={270} y={90} lit={5} /><W x={270} y={140} size={10.5}>Time to plan</W></>}
      {at === 2 && <><Person x={270} y={112} scale={1} /><W x={270} y={142} size={10.5}>Nurse</W></>}
      {at === 3 && <><W x={270} y={90} size={18} serif>6 to 8</W><W x={270} y={112} size={10.5}>weeks</W></>}
      {at === 4 && <Tick x={270} y={96} color={GOLD} size={2.2} />}
      <Say>{["Most surgery is planned ahead", "Colectomy: a stoma or a J pouch", "A stoma nurse will support you", "No heavy lifting for 3 months", "Most would have the same surgery again"][at]}</Say>
    </svg>} />;
}

function PlateDiary(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Food" title="No single diet, just balance" label="Food and colitis" credit="Illustration: Rehyn. Talk to your IBD team before cutting foods out."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balanced plate, a food diary, glasses of water and the vitamins some people need">
      <g opacity={at === 2 || at === 4 ? 0.4 : 1}><Plate x={78} y={86} r={50} /></g>
      {at === 3 && <><ellipse cx="66" cy="78" rx="15" ry="11" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx="66" cy="78" r="5.5" fill={GOLD} />
        <path d="M74 104 C86 112, 100 108, 106 94" fill="none" stroke={INK} strokeWidth="9" strokeLinecap="round" /><path d="M74 104 C86 112, 100 108, 106 94" fill="none" stroke={GOLD} strokeWidth="5" strokeLinecap="round" /></>}
      {at !== 4 && <g opacity={at === 2 ? 1 : 0.4}><rect x="178" y="28" width="104" height="112" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[48, 68, 88, 108, 128].map(y => <path key={y} d={`M188 ${y} H272`} stroke={LINE} strokeWidth="2" />)}
        {at === 2 && <circle cx="258" cy="88" r="9" fill="none" stroke={GOLD} strokeWidth="3" />}</g>}
      {at === 4 && <Stack x={180} y={44} labels={["Iron", "Calcium", "Vitamin D"]} lit={index => index === 0} width={110} gap={34} />}
      <g opacity={at === 1 ? 1 : 0.35}>{Array.from({ length: 8 }, (_, index) => <Glass key={index} x={36 + index * 32} y={168} scale={0.6} full={0.75} fill={index < 6 ? INK : SOFT} />)}</g>
      <Say>{["No food shown to cause or cure it", "Balanced meals; 6 to 8 drinks a day", "A food diary; ask before cutting out", "In a flare: soups, eggs, bananas", "About 1 in 3 have low iron levels"][at]}</Say>
    </svg>} />;
}

function RoutePins(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const on = (index: number) => [[0], [0], [1], [2], [3]][at].includes(index) ? 1 : 0.35;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work and travel" title="Toilets, adjustments and trips" label="Work, travel and toilets" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A route with toilet stops, a work bag, a Can't Wait Card and RADAR key, a suitcase and a seat">
      <path d="M24 70 C70 30, 110 90, 160 58 S250 30, 296 56" fill="none" stroke={LINE} strokeWidth="3" strokeDasharray="6 6" />
      {[[62, 51], [160, 58], [250, 41]].map(([x, y]) => <g key={x}><circle cx={x} cy={y} r="11" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + 3.5} size={9.5} fill={at === 2 ? WHITE : TEXT}>WC</W></g>)}
      {at === 0 && <Bubble x={100} y={98} text="Your choice" width={100} />}
      <g opacity={on(0)}><rect x="24" y="124" width="52" height="44" rx="6" fill={at <= 1 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><path d="M40 124 V116 H60 V124" fill="none" stroke={INK} strokeWidth="2.5" /></g>
      <g opacity={on(1)}><rect x="96" y="120" width="70" height="26" rx="4" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={131} y={137} size={10} fill={at === 2 ? WHITE : TEXT}>Can't Wait</W>
        <circle cx="108" cy="160" r="6" fill="none" stroke={INK} strokeWidth="3" /><path d="M114 160 H146 M140 160 V166" stroke={INK} strokeWidth="3" strokeLinecap="round" /></g>
      <g opacity={on(2)}><rect x="186" y="112" width="48" height="56" rx="8" fill={at === 3 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><path d="M200 112 V104 H220 V112" fill="none" stroke={INK} strokeWidth="2.5" />
        <path d="M200 124 V156 M220 124 V156" stroke={at === 3 ? WHITE : LINE} strokeWidth="2.5" /></g>
      <g opacity={on(3)}><path d="M262 108 C258 130, 260 148, 268 152 H298" fill="none" stroke={INK} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" /><path d="M262 108 C258 130, 260 148, 268 152 H298" fill="none" stroke={at === 4 ? GOLD : TINT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M290 152 V170" stroke={INK} strokeWidth="3" strokeLinecap="round" /></g>
      <Say>{["You do not have to tell your employer", "Adjustments and Access to Work", "A Can't Wait Card and a RADAR key", "See a travel clinic 6 to 8 weeks ahead", "Ask for an aisle seat near the toilet"][at]}</Say>
    </svg>} />;
}

function WeekEnergy(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const heights = at === 0 ? [30, 22, 34, 18, 26, 30, 20] : [60, 40, 70, 30, 50, 80, 45];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fatigue and mood" title="Tired, and it is real" label="Fatigue, mood and support" credit="Illustration: Rehyn. Support is there; you do not have to manage alone."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of energy levels, with the causes of fatigue, ways to manage it and where to find support">
      <path d="M16 160 H156" stroke={INK} strokeWidth="2.5" />
      {heights.map((h, index) => <rect key={index} x={20 + index * 20} y={160 - h} width="14" height={h} rx="3" fill={at === 2 ? INK : SOFT} />)}
      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <W key={index} x={27 + index * 20} y={177} size={9.5}>{day}</W>)}
      {at === 0 && <Stack x={180} y={50} labels={["Physical", "Mental", "Or both"]} lit={index => index < 2} width={118} gap={38} />}
      {at === 1 && <><Tube x={210} y={92} lit /><Pill x={270} y={96} fill={GOLD} /><W x={210} y={146} size={10.5}>Blood test</W><W x={270} y={146} size={10.5}>Iron</W></>}
      {at === 2 && <><W x={240} y={58} size={10.5}>Today's energy</W><path d="M204 70 V140 C204 150, 210 154, 220 154 H260 C270 154, 276 150, 276 140 V70" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[0, 1, 2, 3, 4].map(index => <ellipse key={index} cx="240" cy={142 - index * 14} rx="22" ry="6" fill={index < 3 ? GOLD : TINT} stroke={INK} strokeWidth="1.5" />)}</>}
      {at === 3 && <><Bubble x={246} y={78} text="Not a weakness" width={122} /><Person x={226} y={150} scale={0.9} /></>}
      {at === 4 && <Stack x={174} y={44} labels={["Talking therapies", "Support groups", "0300 222 5700"]} lit={index => index === 0} width={132} gap={36} />}
      <Say>{["Not eased by usual rest or sleep", "Ask what tests can find the cause", "Spend energy like a daily budget", "Feeling stressed or anxious is common", "In England, refer yourself directly"][at]}</Say>
    </svg>} />;
}

function CheckTimeline(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Checks" title="Checks that catch changes early" label="Long-term checks" credit="Illustration: Rehyn. Your IBD team will say how often you need checks."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from when symptoms start, with check-ups, a first check colonoscopy at about 8 years and later checks">
      <path d="M24 116 H300" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <circle cx="24" cy="116" r="7" fill={INK} />
      <circle cx="120" cy="116" r="9" fill={at === 1 || at === 2 ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" />
      {[180, 240, 300].map(x => <circle key={x} cx={x} cy="116" r="6" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2" />)}
      <W x={24} y={140} size={10.5} anchor="start">Start</W><W x={120} y={140} size={10.5}>About 8 years</W><W x={240} y={140} size={10.5}>Then by risk</W>
      {at === 0 && <><Tube x={54} y={62} lit /><Person x={100} y={86} scale={0.9} /><Clock x={160} y={64} r={18} hand={2} /></>}
      {at === 1 && <path d="M24 98 H120 C170 98, 230 82, 300 52" fill="none" stroke={GOLD} strokeWidth="3.5" strokeDasharray="7 5" strokeLinecap="round" />}
      {at === 2 && <><Scope x={120} y={72} /><W x={240} y={84} size={10.5}>Best in remission</W></>}
      {at === 3 && <><rect x="136" y="40" width="48" height="56" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={160} y={66} size={11}>FIT</W><rect x="146" y="74" width="28" height="12" rx="3" fill={SOFT} /><W x={160} y={164} size={10.5}>For everyone</W></>}
      {at === 4 && <><Syringe x={130} y={66} /><Bone x={210} y={66} /></>}
      <Say>{["Check-ups and regular blood tests", "Low risk, rising after about 8 years", "Colonoscopies look for early changes", "Do the FIT home test when it is sent", "Vaccines, and care for your bones"][at]}</Say>
    </svg>} />;
}

export function IbdPieceView({ piece, ...props }: { piece: IbdPiece } & PieceProps) {
  switch (piece) {
    case "cd-patchy-gut": return <PatchyGut {...props} />;
    case "cd-body-signs": return <BodySigns {...props} />;
    case "cd-gut-barrier": return <GutBarrier {...props} />;
    case "cd-clue-cards": return <ClueCards {...props} />;
    case "cd-two-steps": return <TwoSteps {...props} />;
    case "cd-rejoin": return <Rejoin {...props} />;
    case "cd-flare-plan": return <FlarePlan {...props} />;
    case "cd-plate-feed": return <PlateFeed {...props} />;
    case "cd-battery": return <Battery {...props} />;
    case "cd-desk-key": return <DeskKey {...props} />;
    case "cd-two-way": return <TwoWay {...props} />;
    case "cd-checklist": return <Checklist {...props} />;
    case "uc-colon-lining": return <ColonLining {...props} />;
    case "uc-day-signs": return <DaySigns {...props} />;
    case "uc-four-reaches": return <FourReaches {...props} />;
    case "uc-clue-lines": return <ClueLines {...props} />;
    case "uc-flare-to-calm": return <FlareToCalm {...props} />;
    case "uc-plan-sheet": return <PlanSheet {...props} />;
    case "uc-two-lamps": return <TwoLamps {...props} />;
    case "uc-two-routes": return <TwoRoutes {...props} />;
    case "uc-plate-diary": return <PlateDiary {...props} />;
    case "uc-route-pins": return <RoutePins {...props} />;
    case "uc-week-energy": return <WeekEnergy {...props} />;
    case "uc-check-timeline": return <CheckTimeline {...props} />;
    default: return null;
  }
}
