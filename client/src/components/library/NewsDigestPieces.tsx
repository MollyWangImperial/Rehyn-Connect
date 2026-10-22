import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { DIGEST_PIECES, type DigestPiece } from "@/content/digest-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Oesophageal, Stomach and Liver cancer pages' own pieces (content/digest-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Cancer & recovery pieces. Each is steered by the card's sections;
// pictures show ideas, calmly, and never anyone's own body, scans or results.

export const isDigestPiece = (piece: NewsPiece): piece is DigestPiece => (DIGEST_PIECES as readonly string[]).includes(piece);

const ideaCredit = "Illustration: Rehyn. A picture of the idea, not anyone's own results.";
const fade = (on: boolean) => (on ? 1 : 0.35);

// ---- Shared parts ----------------------------------------------------------------------------------------

/** The one-line caption for the chosen section. */
const Cap = ({ children }: { children: string }) => <W x={160} y={206} size={11.5}>{children}</W>;
/** A labelled rounded box centred on (x, y); `lit` fills it. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** Boxes stacked down from (x, y). */
const Stack = ({ x, y, w, labels, lit = () => false, gap = 40 }: { x: number; y: number; w: number; labels: string[]; lit?: (index: number) => boolean; gap?: number }) =>
  <g>{labels.map((label, index) => <Box key={label} x={x} y={y + index * gap} w={w} text={label} lit={lit(index)} />)}</g>;
/** Four boxes in two rows. */
const Grid2 = ({ labels, w = 124, xs = [90, 230], ys = [72, 116] }: { labels: string[]; w?: number; xs?: number[]; ys?: number[] }) =>
  <g>{labels.map((label, index) => <Box key={label} x={xs[index % 2]} y={ys[Math.floor(index / 2)]} w={w} text={label} lit={index % 3 === 0} />)}</g>;
/** A column of labelled boxes from (x, y), left-aligned; `lit` boxes are filled. */
const Tags = ({ x, y, labels, lit, width = 120, gap = 34 }: { x: number; y: number; labels: string[]; lit: (index: number) => boolean; width?: number; gap?: number }) =>
  <g>{labels.map((label, index) => <g key={label} transform={`translate(${x} ${y + index * gap})`}>
    <rect width={width} height="26" rx="9" fill={lit(index) ? INK : WHITE} stroke={INK} strokeWidth="2" />
    <W x={width / 2} y={17} size={10.5} fill={lit(index) ? WHITE : TEXT}>{label}</W>
  </g>)}</g>;
/** A speech bubble centred on (x, y), its tail pointing down-left. */
const Bubble = ({ x, y, text, width = 110 }: { x: number; y: number; text: string; width?: number }) =>
  <g>
    <rect x={x - width / 2} y={y - 15} width={width} height="30" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" />
    <path d={`M${x - width / 2 + 18} ${y + 14} l-8 12 l18 -12`} fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <W x={x} y={y + 4} size={10.5}>{text}</W>
  </g>;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="4" strokeLinecap="round" />;
/** A thick tube (food pipe or bowel) along `d`. */
const Pipe = ({ d, width = 16 }: { d: string; width?: number }) =>
  <g fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} stroke={INK} strokeWidth={width} /><path d={d} stroke={TINT} strokeWidth={width - 6} /></g>;
/** A stomach (0 to 132 across in its own space, centred on (x, y)); the food pipe joins it at (54, 25). */
const STOMACH = "M46 24 C26 14, 10 30, 10 56 C10 96, 36 122, 74 122 C98 122, 116 110, 124 96 L128 88 C120 82, 110 84, 104 90 C94 100, 74 100, 66 86 C60 74, 62 44, 62 26 Z";
const Stomach = ({ x, y, scale = 1, gullet = 0, fill = TINT, children }: { x: number; y: number; scale?: number; gullet?: number; fill?: string; children?: ReactNode }) =>
  <g transform={`translate(${x} ${y}) scale(${scale}) translate(-66 -66)`}>
    {gullet > 0 && <rect x="46" y={26 - gullet} width="16" height={gullet + 6} fill={WHITE} stroke={INK} strokeWidth={3 / scale} />}
    <path d={STOMACH} fill={fill} stroke={INK} strokeWidth={3 / scale} strokeLinejoin="round" />
    {children}
  </g>;
/** A liver centred on (x, y), about 194 x 118 at scale 1; children are drawn in its own space (0 to 200, 0 to 120). */
const LIVER = "M10 40 C20 10, 90 0, 170 8 C196 11, 204 30, 188 46 C160 74, 120 104, 80 112 C50 118, 22 104, 12 80 C6 66, 6 52, 10 40 Z";
const Liver = ({ x, y, scale = 1, fill = WHITE, stroke = INK, children }: { x: number; y: number; scale?: number; fill?: string; stroke?: string; children?: ReactNode }) =>
  <g transform={`translate(${x} ${y}) scale(${scale}) translate(-100 -60)`}>
    <path d={LIVER} fill={fill} stroke={stroke} strokeWidth={4 / scale} strokeLinejoin="round" />
    {children}
  </g>;
/** A plate seen from above, or (side) from the edge on a table. */
const Plate = ({ x, y, r = 20 }: { x: number; y: number; r?: number }) =>
  <g><circle cx={x} cy={y} r={r} fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y} r={r * 0.68} fill="none" stroke={LINE} strokeWidth="2" /></g>;
const SidePlate = ({ x, y, rx }: { x: number; y: number; rx: number }) =>
  <ellipse cx={x} cy={y} rx={rx} ry={Math.max(3, rx / 4)} fill={WHITE} stroke={INK} strokeWidth="2.5" />;
/** A tumbler with a drink in it, about 24 x 36. */
const Glass = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 10} ${y} L${x + 10} ${y} L${x + 8} ${y + 18} L${x - 8} ${y + 18} Z`} fill={SOFT} /><path d={`M${x - 12} ${y - 18} L${x + 12} ${y - 18} L${x + 9} ${y + 18} L${x - 9} ${y + 18} Z`} fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /></g>;
/** A table seen from the side. */
const Table = () => <g><rect x="40" y="128" width="240" height="8" rx="3" fill={INK} /><path d="M60 136 V178 M260 136 V178" stroke={INK} strokeWidth="4" strokeLinecap="round" /></g>;
/** A blood test tube centred on (x, y). */
const Tube = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 8} y={y - 28} width="16" height="56" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 6} y={y} width="12" height="26" rx="6" fill={SOFT} /><rect x={x - 10} y={y - 32} width="20" height="8" rx="3" fill={INK} /></g>;
/** A small sample pot centred on (x, y). */
const Pot = ({ x, y }: { x: number; y: number }) =>
  <g fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round"><path d={`M${x - 12} ${y - 10} H${x + 12} L${x + 9} ${y + 16} H${x - 9} Z`} fill={WHITE} /><rect x={x - 14} y={y - 17} width="28" height="6" rx="2" fill={INK} /></g>;
const Phone = ({ x, y, text }: { x: number; y: number; text?: string }) =>
  <g><rect x={x - 20} y={y - 34} width="40" height="68" rx="8" fill={INK} /><rect x={x - 15} y={y - 26} width="30" height="48" rx="3" fill={WHITE} />
    {text && <W x={x} y={y + 4} size={10.5}>{text}</W>}<circle cx={x} cy={y + 28} r="2.5" fill={WHITE} /></g>;
/** A page with a folded corner and ruled lines. */
const Doc = ({ x, y, w = 90, h = 110 }: { x: number; y: number; w?: number; h?: number }) =>
  <g><path d={`M${x} ${y} H${x + w - 18} L${x + w} ${y + 18} V${y + h} H${x} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    {Array.from({ length: Math.max(1, Math.floor((h - 30) / 16)) }, (_, index) => <path key={index} d={`M${x + 12} ${y + 30 + index * 16} H${x + w - 14}`} stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />)}</g>;
const Battery = ({ x, y, level, w = 100, h = 46 }: { x: number; y: number; level: number; w?: number; h?: number }) =>
  <g><rect x={x} y={y} width={w} height={h} rx="9" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x={x + w} y={y + h / 2 - 10} width="8" height="20" rx="2" fill={INK} />
    <rect x={x + 7} y={y + 7} width={(w - 14) * level} height={h - 14} rx="5" fill={INK} /></g>;
const Thermo = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 7} y={y - 38} width="14" height="54" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 2.5} y={y - 24} width="5" height="40" fill={INK} /><circle cx={x} cy={y + 22} r="11" fill={INK} /></g>;
/** A scanner ring with a bed through it. */
const Scanner = ({ x, y, r = 20 }: { x: number; y: number; r?: number }) =>
  <g><circle cx={x} cy={y} r={r} fill="none" stroke={INK} strokeWidth={r * 0.35} /><path d={`M${x - r * 1.5} ${y + r * 0.35} H${x + r * 1.5}`} stroke={SOFT} strokeWidth="4" strokeLinecap="round" /></g>;
const Syringe = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y}) rotate(-35)`}>
    <rect x="-30" y="-9" width="50" height="18" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="-24" y="-5" width="26" height="10" fill={SOFT} />
    <path d="M-30 0 H-42 M-42 -10 V10 M20 0 H40" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
  </g>;
const House = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}><path d="M-18 -2 L0 -18 L18 -2 V16 H-18 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><rect x="-5" y="4" width="10" height="12" fill={SOFT} /></g>;
const Key = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`} fill="none" stroke={GOLD} strokeWidth={3 / s} strokeLinecap="round"><circle cx="-8" cy="0" r="5" /><path d="M-3 0 H10 M6 0 V4 M10 0 V4" /></g>;
/** A number or short word on a dark tile. */
const Badge = ({ x, y, text, width = 60 }: { x: number; y: number; text: string; width?: number }) =>
  <g><rect x={x - width / 2} y={y - 18} width={width} height="36" rx="10" fill={INK} /><W x={x} y={y + 6} size={15} fill={WHITE}>{text}</W></g>;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Cloud = ({ x, y, s, opacity = 1 }: { x: number; y: number; s: number; opacity?: number }) =>
  <g opacity={opacity} fill={SOFT}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
const Footsteps = ({ points }: { points: [number, number][] }) => <g>{points.map(([x, y]) => <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="5" ry="3" fill={GOLD} />)}</g>;
/** Three cell shapes, from like normal cells (1) to very unlike them (3). */
const Cells = ({ x, y, gap = 44 }: { x: number; y: number; gap?: number }) =>
  <g>
    <circle cx={x} cy={y} r="14" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path transform={`translate(${x + gap} ${y})`} d="M-2 -15 C14 -14 16 8 4 14 C-10 18 -16 -4 -2 -15 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path transform={`translate(${x + gap * 2} ${y})`} d="M-4 -16 L10 -8 L4 0 L14 12 L-8 14 L-14 2 L-6 -4 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    {["1", "2", "3"].map((grade, index) => <W key={grade} x={x + index * gap} y={y + 36} size={11}>{grade}</W>)}
  </g>;
/** A bed seen from the side, its head end on the left raised by `raise`. */
const Bed = ({ x, y, w = 200, raise = 0 }: { x: number; y: number; w?: number; raise?: number }) =>
  <g>
    <path d={`M${x + 8} ${y + 10} V${y + 32} M${x + w - 8} ${y + 10} V${y + 32}`} stroke={INK} strokeWidth="4" strokeLinecap="round" />
    <rect x={x} y={y} width={w} height="10" rx="3" fill={INK} />
    <path d={`M${x + 4} ${y - 14 - raise} L${x + 64} ${y - 14} H${x + w} V${y} H${x + 64} L${x + 4} ${y - raise} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <ellipse cx={x + 30} cy={y - 20 - raise * 0.6} rx="18" ry="7" fill={TINT} stroke={INK} strokeWidth="2" />
  </g>;
/** A head and body, front on, centred near (x, y). */
const Torso = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <circle cx="0" cy="-86" r="15" fill={WHITE} stroke={INK} strokeWidth={3 / scale} />
    <path d="M-44 -50 C-44 -62, -28 -66, 0 -66 C28 -66, 44 -62, 44 -50 L48 58 C48 68, -48 68, -48 58 Z" fill={WHITE} stroke={INK} strokeWidth={3 / scale} strokeLinejoin="round" />
  </g>;
const WineGlass = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={INK} strokeWidth={2.5 / scale} strokeLinecap="round" strokeLinejoin="round">
    <path d="M-11 -20 H11 C11 -6, 5 0, 0 0 C-5 0, -11 -6, -11 -20 Z" fill={WHITE} /><path d="M-9 -10 H9 C7 -4, 3 -2, 0 -2 C-3 -2, -7 -4, -9 -10 Z" fill={INK} stroke="none" />
    <path d="M0 0 V16 M-8 16 H8" />
  </g>;
const Cigarette = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}>
    <rect x="-26" y="-5" width="52" height="10" rx="2" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="-26" y="-5" width="14" height="10" rx="2" fill={SOFT} />
    <path d="M30 -8 C36 -14, 28 -20, 34 -26" fill="none" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />
  </g>;
/** A bowl with soft food in it, centred on (x, y). */
const Bowl = ({ x, y, r = 50 }: { x: number; y: number; r?: number }) =>
  <g><path d={`M${x - r * 0.84} ${y} C${x - r * 0.6} ${y - r * 0.32}, ${x + r * 0.6} ${y - r * 0.32}, ${x + r * 0.84} ${y} Z`} fill={SOFT} />
    <path d={`M${x - r} ${y} H${x + r} C${x + r} ${y + r * 0.68}, ${x + r * 0.52} ${y + r}, ${x} ${y + r} C${x - r * 0.52} ${y + r}, ${x - r} ${y + r * 0.68}, ${x - r} ${y} Z`} fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /></g>;
/** Squares in rows of `perRow`, the `lit` ones filled. */
const Days = ({ x, y, count, perRow, size = 14, gap = 18, lit = () => true }: { x: number; y: number; count: number; perRow: number; size?: number; gap?: number; lit?: (index: number) => boolean }) =>
  <g>{Array.from({ length: count }, (_, index) => <rect key={index} x={x + (index % perRow) * gap} y={y + Math.floor(index / perRow) * gap} width={size} height={size} rx="3" fill={lit(index) ? INK : WHITE} stroke={INK} strokeWidth="1.5" />)}</g>;
/** Two people side by side, one listening, and what is said. */
const Talk = ({ text, width = 124 }: { text: string; width?: number }) =>
  <g><Person x={110} y={160} scale={1.3} /><Person x={220} y={160} scale={1.3} fill={SOFT} /><Bubble x={196} y={56} text={text} width={width} /></g>;

// ==== Oesophageal cancer =======================================================================================

function OesPulledUp(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your treatment" title="Each part of your treatment, explained" label="Your treatment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The food pipe and stomach, with the part removed in an oesophagectomy, beside the kinds of treatment">
      {at === 0 && [22, 42, 62].map(x => <Person key={x} x={x} y={62} scale={0.6} fill={x === 42 ? INK : SOFT} />)}
      {at === 2 && <g><rect x="18" y="30" width="26" height="34" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="21" y="44" width="20" height="17" rx="2" fill={SOFT} /><path d="M31 64 V100" stroke={INK} strokeWidth="2" /></g>}
      {at === 3 && <Pill x={38} y={64} />}
      {at === 4 && <Thermo x={34} y={140} />}
      <Pipe d="M84 14 V106" width={18} />
      <Stomach x={92} y={132} scale={0.62} />
      {at === 1 && <g>
        <rect x="70" y="40" width="28" height="56" rx="6" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 4" />
        <W x={64} y={72} size={10} anchor="end">Removed</W>
        <Arrow d="M150 120 V64" head="M144 71 L150 64 L156 71" />
      </g>}
      <Tags x={176} y={22} labels={["Specialist team", "Surgery", "Chemo, radiotherapy", "Targeted drugs", "Call your team"]} lit={index => index === at} width={128} gap={32} />
      <Cap>{["A team planned the treatment for you", "Oesophagectomy: stomach pulled up", "Chemo 2 to 3 months before and after", "Nivolumab, pembrolizumab, trastuzumab", "High temperature? Call your team now"][at]}</Cap>
    </svg>} />;
}

function OesWallLayers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Type, stage, grade" title="Type, stage and grade, in plain words" label="Type, stage and grade" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Where each type starts, the wall layers a cancer can grow through, number stages and grades">
      {at === 0 && <g>
        <Pipe d="M80 22 V178" width={20} />
        <path d="M100 24 V108" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /><path d="M100 118 V176" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <W x={112} y={62} size={11} anchor="start">Squamous cell</W><W x={112} y={78} size={10} anchor="start">Upper and middle</W>
        <W x={112} y={144} size={11} anchor="start">Adenocarcinoma</W><W x={112} y={160} size={10} anchor="start">Lower part; most common</W>
        <W x={58} y={34} size={10} anchor="end">Upper</W><W x={58} y={176} size={10} anchor="end">Lower</W>
      </g>}
      {at === 1 && <g>
        {[0, 1, 2, 3].map(index => <rect key={index} x="20" y={44 + index * 26} width="170" height="26" fill={index % 2 ? WHITE : TINT} stroke={LINE} strokeWidth="1.5" />)}
        {[0, 1, 2, 3].map(index => { const x = 44 + index * 40, end = 44 + (index + 1) * 26 - 5; return <g key={`t${index}`}>
          <path d={`M${x} 34 V${end}`} stroke={INK} strokeWidth="3" /><path d={`M${x - 6} ${end - 7} L${x} ${end} L${x + 6} ${end - 7}`} stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" />
          <W x={x} y={28} size={10.5}>{`T${index + 1}`}</W>
        </g>; })}
        {[0, 1, 2].map(index => <circle key={`n${index}`} cx={226 + index * 22} cy="66" r="8" fill={SOFT} stroke={INK} strokeWidth="2" />)}
        <W x={248} y={98} size={10.5}>N: lymph nodes</W>
        <Box x={248} y={138} w={96} text="M: spread" lit />
      </g>}
      {at === 2 && <g>
        <W x={160} y={50} size={11}>Number stages</W>
        {[0, 1, 2, 3, 4].map(index => <g key={index}><rect x={14 + index * 62} y="70" width="46" height="46" rx="8" fill={INK} opacity={0.45 + index * 0.13} /><W x={37 + index * 62} y={99} size={17} fill={WHITE}>{index}</W></g>)}
        <W x={160} y={150} size={10.5}>Stage 0 is high grade dysplasia</W>
      </g>}
      {at === 3 && <g>
        <Box x={160} y={62} w={200} text="Before: tests and scans" />
        <Arrow d="M160 82 V114" head="M154 107 L160 114 L166 107" />
        <Box x={160} y={136} w={210} text="After surgery: more precise" lit />
      </g>}
      {at === 4 && <g>
        <Cells x={100} y={80} gap={60} />
        <W x={100} y={152} size={10}>Like normal cells</W><W x={220} y={152} size={10}>Very different</W>
      </g>}
      <Cap>{["Named after the cell it starts in", "T: depth, N: lymph nodes, M: spread", "Also numbered, from stage 0 to 4", "Exact stage may come after surgery", "Grade 1 looks most like normal cells"][at]}</Cap>
    </svg>} />;
}

function OesSpacingOut(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const xs = [36, 66, 102, 146, 200, 270];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="Check-ups after treatment, step by step" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A line of check-ups that space out over time, with tests, a phone and a treatment summary">
      <path d="M20 120 H300" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
      {at === 2 && xs.slice(1).map((x, index) => { const from = xs[index]; return <path key={x} d={`M${from} 110 Q${(from + x) / 2} ${100 - index * 6} ${x} 110`} stroke={GOLD} strokeWidth="2.5" fill="none" />; })}
      {xs.map((x, index) => <circle key={x} cx={x} cy="120" r="7" fill={at === 0 && index === 0 ? GOLD : INK} />)}
      {at === 0 && <g><path d="M38 110 L56 84" stroke={GOLD} strokeWidth="2" strokeDasharray="3 4" /><Box x={78} y={70} w={110} text="First check-up" lit /><W x={24} y={148} size={10} anchor="start">Leave hospital</W></g>}
      {at === 1 && <g>
        <Tube x={86} y={62} /><W x={86} y={108} size={10}>Blood tests</W>
        <Scanner x={164} y={62} r={18} /><W x={164} y={108} size={10}>Scans</W>
        <Box x={252} y={62} w={88} text="Dietitian" />
      </g>}
      {at === 2 && <W x={160} y={64} size={11.5}>Less often over time</W>}
      {at === 3 && <g><Phone x={236} y={66} text="Call" /><W x={124} y={70} size={11.5}>No need to wait</W></g>}
      {at === 4 && <g><Doc x={120} y={20} w={80} h={78} /><W x={160} y={152} size={11}>Treatment summary</W></g>}
      <Cap>{["Checks on how you are, and worries", "Tests at some visits; see a dietitian", "Based on your needs; less often later", "New symptoms? No need to wait", "A summary of treatment and follow-up"][at]}</Cap>
    </svg>} />;
}

function OesStent(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const n = [18, 0, 7, 0, 0][at];
  const top = `M24 64 H112 C136 64 136 ${64 + n} 160 ${64 + n} C184 ${64 + n} 184 64 208 64 H296`;
  const bottom = `M24 116 H112 C136 116 136 ${116 - n} 160 ${116 - n} C184 ${116 - n} 184 116 208 116 H296`;
  const stent = at === 1 || at >= 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Swallowing" title="Stents, stretches and swallowing again" label="Swallowing" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A narrowed food pipe, held open by a mesh stent or widened by a balloon">
      {[top, bottom].map(d => <g key={d} fill="none"><path d={d} stroke={SOFT} strokeWidth="12" /><path d={d} stroke={INK} strokeWidth="3" /></g>)}
      {stent && <g fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinejoin="round"><rect x="112" y="70" width="96" height="40" rx="4" /><path d="M112 70 L124 110 L136 70 L148 110 L160 70 L172 110 L184 70 L196 110 L208 70" /></g>}
      {at === 2 && <ellipse cx="160" cy="90" rx="42" ry="14" fill={GOLD} opacity=".75" />}
      <W x={160} y={40} size={11.5}>{["Narrowed", "Stent", "Balloon stretch", "Eating with a stent", ""][at]}</W>
      {at === 3 && <g><Box x={64} y={152} w={104} text="Little and often" /><Box x={166} y={152} w={84} text="Sit upright" /><Box x={260} y={152} w={76} text="Chew well" /></g>}
      {at === 4 && <Box x={160} y={152} w={160} text="Tell your team now" lit />}
      <Cap>{["Cancer or treatment can narrow it", "A stent holds the tube open", "Stretching can widen it again", "Sit upright, chew well, sip drinks", "Severe chest pain? Tell your team now"][at]}</Cap>
    </svg>} />;
}

function OesDayPlates(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Eating again" title="Eating again after an oesophagectomy" label="Eating after surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="From a drip and sips of water, to soft food, to small meals through the day">
      {at === 0 && <g>
        <path d="M80 18 V28" stroke={INK} strokeWidth="3" /><rect x="64" y="28" width="32" height="44" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="68" y="46" width="24" height="22" rx="3" fill={SOFT} />
        <path d="M80 72 V128" stroke={INK} strokeWidth="2" /><W x={80} y={152} size={10.5}>Drip</W>
        <Glass x={224} y={100} /><W x={224} y={152} size={10.5}>Sips of water</W><W x={224} y={168} size={10}>24 to 48 hours</W>
      </g>}
      {at === 1 && <g><Bowl x={160} y={96} r={50} /><W x={160} y={60} size={12}>Soft diet</W><W x={160} y={170} size={10.5}>for a few weeks</W></g>}
      {at === 2 && <g>
        <W x={160} y={74} size={12}>6 to 8 small meals</W>
        <path d="M24 120 H296" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
        {Array.from({ length: 8 }, (_, index) => <Plate key={index} x={40 + index * 34} y={120} r={13} />)}
        <W x={24} y={156} size={10} anchor="start">Morning</W><W x={296} y={156} size={10} anchor="end">Evening</W>
      </g>}
      {at === 3 && <Grid2 labels={["Dumping", "Diarrhoea", "Reflux lying flat", "Full quickly"]} w={128} xs={[88, 232]} />}
      {at === 4 && <g>
        <rect x="30" y="90" width="260" height="22" rx="11" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="30" y="90" width="96" height="22" rx="11" fill={INK} />
        <W x={78} y={140} size={10.5}>A few months</W><W x={250} y={140} size={10.5}>Up to 2 years</W>
      </g>}
      <Cap>{["Sips of water within 24 to 48 hours", "A soft diet for the first few weeks", "Smaller meals, about 6 to 8 a day", "Your team can help with problems", "Months for some, up to 2 years"][at]}</Cap>
    </svg>} />;
}

function OesTwoClocks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const clocks = [{ x: 150, hand: Math.PI, label: "30 minutes", lit: at === 1 }, { x: 262, hand: Math.PI / 2, label: "A few hours", lit: at === 2 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Dumping syndrome" title="Why meals can leave you faint" label="Dumping syndrome" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A meal, then two clocks: early dumping at 30 minutes and late dumping a few hours on">
      <Plate x={40} y={80} r={22} /><W x={40} y={122} size={10.5}>Meal</W>
      <path d="M68 80 H300" stroke={LINE} strokeWidth="3" strokeDasharray="2 6" strokeLinecap="round" />
      {clocks.map(clock => <g key={clock.label} opacity={at === 1 || at === 2 ? fade(clock.lit) : 1}>
        {clock.lit && <circle cx={clock.x} cy="80" r="27" fill="none" stroke={GOLD} strokeWidth="3" />}
        <Clock x={clock.x} y={80} r={20} hand={clock.hand} /><W x={clock.x} y={122} size={10.5}>{clock.label}</W>
      </g>)}
      {at === 0 && <g><Person x={124} y={176} scale={0.8} /><Person x={162} y={176} scale={0.8} fill={SOFT} /><W x={220} y={170} size={13}>1 in 2</W></g>}
      {at === 1 && <W x={150} y={148} size={11}>Dizzy, faint</W>}
      {at === 2 && <W x={262} y={148} size={11}>Faint, shaky</W>}
      {at === 3 && <g><Box x={70} y={160} w={100} text="Small meals" /><Box x={162} y={160} w={70} text="Protein" /><Box x={250} y={160} w={92} text="Rest after" /></g>}
      {at === 4 && <g><Doc x={120} y={136} w={52} h={54} /><W x={184} y={168} size={11} anchor="start">Food diary</W></g>}
      <Cap>{["Common: 1 in 2 after an oesophagectomy", "Early: within 30 minutes, dizzy", "Late: a few hours on, faint or shaky", "Drinks 15 to 30 minutes from meals", "Usually eases; a diary can help"][at]}</Cap>
    </svg>} />;
}

function OesWeightScale(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Weight" title="Keeping your weight and strength up" label="Weight and nutrition" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A steady weighing scale, with a dietitian, calorie-rich foods and protein twice a day">
      <rect x="24" y="112" width="100" height="64" rx="12" fill={WHITE} stroke={INK} strokeWidth="3" />
      <circle cx="74" cy="136" r="16" fill={TINT} stroke={INK} strokeWidth="2" /><path d="M74 136 V124" stroke={TEXT} strokeWidth="3" strokeLinecap="round" />
      {at === 0 && <g><W x={74} y={98} size={10.5}>Steady weight</W><Box x={226} y={80} w={120} text="Calories" lit /><Box x={226} y={120} w={120} text="Protein" lit /></g>}
      {at === 1 && <g><Person x={210} y={164} scale={1.2} /><Bubble x={236} y={56} text="Your dietitian" width={120} /></g>}
      {at === 2 && <g>
        <W x={226} y={66} size={11}>Add calories</W>
        <Bowl x={190} y={106} r={30} /><Glass x={268} y={116} />
        <W x={190} y={162} size={10}>Mash, cheese</W><W x={268} y={162} size={10}>Whole milk</W>
      </g>}
      {at === 3 && <g>
        <W x={228} y={66} size={10.5}>Fish, eggs, beans</W>
        <Plate x={194} y={110} r={24} /><Plate x={262} y={110} r={24} /><W x={194} y={115} size={13}>1</W><W x={262} y={115} size={13}>2</W>
        <W x={228} y={160} size={10.5}>At least twice a day</W>
      </g>}
      {at === 4 && <g><W x={220} y={80} size={10.5}>A feeding tube, if needed</W><Box x={220} y={120} w={130} text="Tell your team" lit /></g>}
      <Cap>{["Calories and protein keep strength", "A dietitian, from diagnosis onwards", "Add calories to everyday foods", "Protein at least twice a day", "Still hard? Talk to your team"][at]}</Cap>
    </svg>} />;
}

function OesWedgeBed(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Reflux" title="Easing reflux, by day and night" label="Reflux" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bed lying flat and then with its head raised, staying upright after meals, and medicines">
      {(at === 0 || at === 2) && <Bed x={44} y={140} w={232} raise={at === 2 ? 34 : 0} />}
      {at === 0 && <g><Arrow d="M160 116 C150 106 170 96 160 86 C150 76 170 66 160 58" head="M154 64 L160 57 L166 64" /><W x={160} y={40} size={11}>Acid can come back up</W></g>}
      {at === 2 && <g><path d="M30 126 V92" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /><W x={120} y={60} size={11}>Head raised 10 to 20cm</W></g>}
      {at === 1 && <g><Person x={100} y={150} scale={1.4} /><Clock x={224} y={90} r={28} hand={2} /><W x={224} y={144} size={11}>30 to 60 minutes</W></g>}
      {at === 3 && <g><g transform="translate(110 100) scale(1.8)"><Pill x={0} y={0} /></g><W x={168} y={96} size={12} anchor="start">Antacids</W><W x={168} y={114} size={10} anchor="start">and other medicines</W></g>}
      {at === 4 && <Stack x={160} y={54} w={170} labels={["Tight waistbands", "Smoking", "Too much alcohol"]} />}
      <Cap>{["Lying flat can bring acid back up", "Stay upright 30 to 60 minutes after", "Raise the head of the bed", "Antacids and other medicines help", "Tight waistbands can make it worse"][at]}</Cap>
    </svg>} />;
}

function OesBatterySteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const steps: [number, number][] = [[70, 152], [84, 146], [100, 152], [118, 146], [138, 152], [160, 146], [184, 152], [210, 146], [238, 152], [268, 146]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tiredness" title="Living with tiredness after treatment" label="Tiredness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A low battery, steps that grow each day, a 0 to 10 scale and ways to make tasks easier">
      {at === 0 && <g><Battery x={30} y={70} level={0.2} /><Tags x={172} y={40} labels={["Anaemia", "Side effects", "Diet changes"]} lit={() => true} width={120} gap={38} /></g>}
      {at === 1 && <g>
        <W x={160} y={70} size={12}>A bit more each day</W>
        <House x={40} y={146} /><Footsteps points={steps} /><Sun x={286} y={110} r={10} />
        <W x={40} y={182} size={10}>Indoors</W><W x={278} y={182} size={10}>Outside</W>
      </g>}
      {at === 2 && <g>
        <W x={160} y={62} size={11}>Rate it, and keep a diary</W>
        {Array.from({ length: 11 }, (_, index) => <g key={index}><rect x={22 + index * 26} y="84" width="22" height="26" rx="5" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={33 + index * 26} y={101} size={10}>{index}</W></g>)}
        <W x={22} y={134} size={10} anchor="start">No fatigue</W><W x={296} y={134} size={10} anchor="end">Worst</W>
      </g>}
      {at === 3 && <g><Person x={90} y={150} scale={1.3} /><W x={215} y={78} size={11}>Brisk walks</W><Battery x={160} y={92} level={0.7} w={110} /></g>}
      {at === 4 && <Stack x={160} y={50} w={190} labels={["Spread housework", "Sit down for tasks", "Freeze extra portions"]} />}
      <Cap>{["Common during and months after", "A bit more every day, then outside", "Rate it 0 to 10; keep a diary", "Activity like brisk walking helps", "Spread tasks; freeze extra portions"][at]}</Cap>
    </svg>} />;
}

function OesSmallCard(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Eating out" title="Eating out, with a little planning" label="Eating out" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A table for two, a card asking for a smaller portion, and a key for accessible toilets">
      {at === 0 && <g><Person x={90} y={118} scale={1.1} /><Person x={230} y={118} scale={1.1} fill={SOFT} /><Bubble x={160} y={40} text="Talking may help" width={130} /></g>}
      {at <= 2 && <Table />}
      {at === 0 && <g><SidePlate x={120} y={124} rx={20} /><SidePlate x={200} y={124} rx={20} /></g>}
      {at === 1 && <g>
        {[{ x: 52, a: "Child's size", b: "portion" }, { x: 168, a: "Toilet", b: "access" }].map(card => <g key={card.a}>
          <rect x={card.x} y="26" width="100" height="56" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
          <W x={card.x + 50} y={50} size={10.5}>{card.a}</W><W x={card.x + 50} y={66} size={10.5}>{card.b}</W>
        </g>)}
        <SidePlate x={110} y={122} rx={30} /><SidePlate x={210} y={124} rx={14} />
      </g>}
      {at === 2 && <g><W x={160} y={50} size={11}>Drinks between meals</W><SidePlate x={110} y={122} rx={18} /><Glass x={220} y={104} /></g>}
      {at === 3 && <g>
        <rect x="60" y="40" width="64" height="120" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="114" cy="104" r="3.5" fill={INK} /><W x={92} y={80} size={14}>WC</W>
        <Key x={214} y={96} s={2.4} /><W x={210} y={140} size={11}>RADAR key</W>
      </g>}
      {at === 4 && <g><Person x={100} y={160} scale={1.3} /><Person x={220} y={160} scale={1.3} fill={SOFT} /><Bubble x={190} y={52} text="Dietitian or counsellor" width={160} /></g>}
      <Cap>{["Eating out can feel much harder", "OPA card: a child's size portion", "Eat slowly; drinks between meals", "RADAR keys open accessible toilets", "A dietitian or counsellor can help"][at]}</Cap>
    </svg>} />;
}

function OesPhasedWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and money" title="Back to work, and help with money" label="Work and money" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Choices about work, a phased return over four weeks, a grant, and free advice lines">
      {at === 0 && <Stack x={160} y={50} w={200} gap={42} labels={["Time off for a while", "Fewer hours or changes", "Change or stop work"]} />}
      {at === 1 && <g>
        <W x={160} y={40} size={12}>Phased return</W>
        {[30, 52, 74, 96].map((h, index) => <g key={h}><rect x={46 + index * 64} y={160 - h} width="40" height={h} rx="5" fill={INK} opacity={0.4 + index * 0.2} /><W x={66 + index * 64} y={178} size={10}>{`Week ${index + 1}`}</W></g>)}
      </g>}
      {at === 2 && <g><Badge x={160} y={78} text="Grant" width={96} /><W x={160} y={130} size={11}>No need to pay it back</W><W x={160} y={150} size={10}>Not for adjustments</W></g>}
      {at === 3 && <g><Phone x={90} y={100} text="Free" /><W x={210} y={98} size={14}>0808 808 0000</W><W x={210} y={120} size={10}>Macmillan money advice</W></g>}
      {at === 4 && <Stack x={160} y={50} w={170} gap={42} labels={["National Debtline", "Citizens Advice", "StepChange"]} />}
      <Cap>{["Time off, fewer hours, or a change", "Adjustments like a phased return", "Access to Work: a grant, not a loan", "Free money advice: 0808 808 0000", "Free, confidential debt advice"][at]}</Cap>
    </svg>} />;
}

function OesBench(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="The low months after treatment ends" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Someone on a bench, with mixed weather, a fading cloud of worry, company and helplines">
      <rect x="50" y="116" width="160" height="6" rx="3" fill={SOFT} />
      <Person x={110} y={146} scale={1.2} />
      {at === 3 && <Person x={170} y={146} scale={1.2} fill={SOFT} />}
      <rect x="50" y="150" width="160" height="8" rx="3" fill={INK} /><path d="M64 158 V184 M196 158 V184" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <g><Sun x={250} y={56} r={13} /><Cloud x={274} y={86} s={22} /></g>}
      {at === 1 && <g><Cloud x={252} y={60} s={28} opacity={0.5} /><W x={240} y={108} size={10.5}>Often eases with time</W></g>}
      {at === 2 && <g><Days x={176} y={30} count={14} perRow={7} /><W x={240} y={88} size={10.5}>More than 2 weeks</W></g>}
      {at === 3 && <Bubble x={236} y={54} text="Patient buddy" width={116} />}
      {at === 4 && <Stack x={240} y={28} w={132} gap={36} labels={["Samaritans 116 123", "NHS 111", "999 or A&E"]} lit={index => index === 0} />}
      <Cap>{["Relief, and feelings that take time", "Worry often gets better with time", "Low over 2 weeks? Talk to your team", "Friends, counsellors, a patient buddy", "Samaritans: 116 123, day or night"][at]}</Cap>
    </svg>} />;
}

// ==== Stomach cancer ===========================================================================================

function StcPartialTotal(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your treatment" title="Surgery and chemotherapy, side by side" label="Your treatment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Part or all of the stomach removed, chemotherapy either side of surgery, and when to call">
      {at === 0 && <g><Box x={100} y={70} w={110} text="Surgery" lit /><Box x={220} y={70} w={120} text="Chemotherapy" lit /><Box x={100} y={120} w={110} text="Radiotherapy" /><Box x={220} y={120} w={120} text="Targeted drugs" /></g>}
      {at === 1 && <g>
        <Stomach x={90} y={100} scale={0.7} gullet={30}><path d="M60 122 L106 62" stroke={GOLD} strokeWidth={3 / 0.7} strokeDasharray="6 4" /></Stomach>
        <g opacity="0.3"><Stomach x={230} y={100} scale={0.7} gullet={30} fill={WHITE} /></g>
        <Pipe d="M222 52 V96 C222 128 246 134 272 132" width={12} />
        <W x={90} y={170} size={11}>Partial</W><W x={230} y={170} size={11}>Total</W>
      </g>}
      {at === 2 && <g>
        <Box x={70} y={90} w={90} text="Chemo" /><Box x={160} y={90} w={80} text="Surgery" lit /><Box x={250} y={90} w={90} text="Chemo" />
        <W x={70} y={130} size={10}>2 to 3 months</W><W x={250} y={130} size={10}>2 to 3 months</W>
      </g>}
      {at === 3 && <g><Box x={160} y={64} w={150} text="Radiotherapy" /><Box x={160} y={112} w={180} text="Trastuzumab: HER2" lit /></g>}
      {at === 4 && <g><Thermo x={100} y={100} /><W x={130} y={84} size={11} anchor="start">Above 37.5°C</W><W x={130} y={106} size={11} anchor="start">or below 36°C</W><Phone x={270} y={100} text="Call" /></g>}
      <Cap>{["Usually surgery and chemotherapy", "Part or all of the stomach removed", "2 to 3 months before and after", "Trastuzumab works for HER2-positive", "Above 37.5°C or below 36°C? Call now"][at]}</Cap>
    </svg>} />;
}

function StcTnmDots(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stage" title="T, N and M, made plain" label="Stage" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The stomach wall in layers, lymph node counts, number stages and grades">
      {at === 0 && <g>
        <Stomach x={100} y={100} scale={0.9} gullet={20}><circle cx="36" cy="60" r="9" fill={GOLD} /></Stomach>
        <W x={236} y={84} size={11}>How big</W><W x={236} y={110} size={11}>How far it has spread</W>
      </g>}
      {at === 1 && <g>
        {[0, 1, 2, 3].map(index => <rect key={index} x="20" y={40 + index * 24} width="140" height="24" fill={index % 2 ? WHITE : TINT} stroke={LINE} strokeWidth="1.5" />)}
        {[0, 1, 2, 3].map(index => { const x = 38 + index * 34, end = 40 + (index + 1) * 24 - 4; return <g key={`t${index}`}>
          <path d={`M${x} 32 V${end}`} stroke={INK} strokeWidth="3" /><path d={`M${x - 5} ${end - 6} L${x} ${end} L${x + 5} ${end - 6}`} stroke={INK} strokeWidth="3" fill="none" />
          <W x={x} y={26} size={10.5}>{`T${index + 1}`}</W>
        </g>; })}
        {["N0: no nodes", "N1: 1 to 2", "N2: 3 to 6", "N3: 7 or more", "M1: elsewhere"].map((line, index) => <W key={line} x={178} y={52 + index * 24} size={10.5} anchor="start">{line}</W>)}
      </g>}
      {at === 2 && <g>
        <W x={100} y={58} size={10.5}>Stage</W><W x={256} y={58} size={10.5}>Grade</W>
        {[1, 2, 3, 4].map((stage, index) => <g key={stage}><rect x={24 + index * 42} y="72" width="34" height="34" rx="7" fill={INK} opacity={0.5 + index * 0.15} /><W x={41 + index * 42} y={94} size={14} fill={WHITE}>{stage}</W></g>)}
        <Cells x={222} y={90} gap={34} />
      </g>}
      {at === 3 && <g>
        <Box x={160} y={62} w={210} text="Clinical: tests and scans" />
        <Arrow d="M160 82 V114" head="M154 107 L160 114 L166 107" />
        <Box x={160} y={136} w={210} text="Pathological: the tissue" lit />
      </g>}
      {at === 4 && <g><Person x={110} y={160} scale={1.2} /><Person x={200} y={160} scale={1.2} fill={SOFT} /><Bubble x={176} y={56} text="What does it mean?" width={150} /></g>}
      <Cap>{["How big, and how far it has spread", "T: depth. N: nodes. M: elsewhere", "Number stages 1 to 4; grades 1 to 3", "Stage may change after surgery", "Ask your doctor or nurse to explain"][at]}</Cap>
    </svg>} />;
}

function StcPathCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="Check-ups that fit your needs" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="From the hospital to a clinic card, tests at visits, cards spacing out and what to report">
      {at === 0 && <g>
        <W x={70} y={46} size={10.5}>Hospital</W><rect x="40" y="56" width="60" height="110" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="90" cy="114" r="3.5" fill={INK} />
        <Arrow d="M112 110 H150" head="M143 104 L150 110 L143 116" />
        <rect x="160" y="80" width="120" height="60" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={220} y={106} size={11}>Clinic</W><W x={220} y={124} size={10.5}>appointment</W>
      </g>}
      {at === 1 && <Grid2 labels={["Blood tests", "CT scan", "Endoscopy", "Dietitian"]} />}
      {at === 2 && <g>
        <path d="M24 162 C80 162 84 124 140 116 S240 66 296 56" stroke={LINE} strokeWidth="4" fill="none" strokeDasharray="2 8" strokeLinecap="round" />
        {[[36, 160], [80, 150], [140, 116], [240, 66]].map(([x, y]) => <rect key={x} x={x - 12} y={y - 9} width="24" height="18" rx="3" fill={INK} />)}
        <W x={100} y={60} size={11.5}>Less often over time</W>
      </g>}
      {at === 3 && <Stack x={160} y={46} w={190} labels={["Swallowing problems", "Hot or leaking wound", "Signs of a blood clot"]} lit={() => true} />}
      {at === 4 && <g><Doc x={50} y={40} w={80} h={100} /><W x={90} y={164} size={10.5}>Questions</W><Person x={206} y={150} scale={1.2} /><Person x={262} y={150} scale={1.2} fill={SOFT} /></g>}
      <Cap>{["Leave with a clinic appointment", "An exam, and tests at some visits", "Based on needs, less often over time", "Swallowing problems? Tell them now", "Write questions; take someone along"][at]}</Cap>
    </svg>} />;
}

function StcFamilyTree(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tree = at === 2 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="H. pylori" title="A common germ, and your family" label="H. pylori and family" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Germs in the stomach lining, simple tests, and a family who can talk to a GP">
      {at === 0 && <g>
        <Stomach x={110} y={104} scale={0.9} gullet={24}>{[[30, 50], [40, 84], [66, 108], [96, 104], [22, 70], [52, 112]].map(([x, y]) => <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="6" ry="3" fill={GOLD} transform={`rotate(${x % 60 - 30} ${x} ${y})`} />)}</Stomach>
        <W x={250} y={92} size={13}>Up to 2 in 5</W><W x={250} y={112} size={10.5}>in the UK have it</W>
      </g>}
      {at === 1 && <g>
        <Tube x={70} y={88} /><W x={70} y={140} size={10.5}>Blood</W>
        {[[148, 104, 6], [160, 90, 9], [176, 72, 12]].map(([x, y, r]) => <circle key={x} cx={x} cy={y} r={r} fill={WHITE} stroke={INK} strokeWidth="2.5" />)}<W x={160} y={140} size={10.5}>Breath</W>
        <Pot x={250} y={92} /><W x={250} y={140} size={10.5}>Poo sample</W>
      </g>}
      {tree && <g>
        <path d="M130 100 H190 M160 100 V114 M100 114 H220 M100 114 V124 M160 114 V124 M220 114 V124" stroke={at === 2 ? GOLD : INK} strokeWidth="2.5" fill="none" />
        <Person x={130} y={80} scale={0.8} /><Person x={190} y={80} scale={0.8} />
        {[100, 160, 220].map(x => <Person key={x} x={x} y={160} scale={0.8} fill={at === 2 ? SOFT : INK} />)}
      </g>}
      {at === 3 && <g><W x={284} y={62} size={10.5}>GP</W><rect x="266" y="70" width="36" height="70" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="294" cy="106" r="3" fill={INK} /></g>}
      {at === 4 && <Grid2 labels={["Stop smoking", "Less salt", "5 a day", "Under 14 units"]} />}
      <Cap>{["A common germ in the stomach lining", "Found with simple tests; antibiotics", "Often passed on within families", "Close family can ask a GP about tests", "Less salt, no smoking, 5 a day"][at]}</Cap>
    </svg>} />;
}

function StcTwoHours(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Eating" title="Little and often, then a little more" label="Eating after a gastrectomy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A smaller stomach, steps from sips to small meals, and plates around a clock every two hours">
      {at === 0 && <g><g opacity="0.25"><Stomach x={150} y={104} scale={1.1} gullet={20} fill={WHITE} /></g><Stomach x={150} y={104} scale={0.66} gullet={20} /><W x={268} y={108} size={11}>Holds less</W></g>}
      {at === 1 && <g>
        <W x={70} y={120} size={10}>After 48 hours</W>
        <Box x={70} y={150} w={96} text="Sips" /><Box x={160} y={110} w={96} text="Soft foods" /><Box x={250} y={70} w={96} text="Small meals" lit />
      </g>}
      {at === 2 && <g>
        <Clock x={160} y={100} r={28} hand={2} />
        {Array.from({ length: 6 }, (_, index) => { const a = (-90 + index * 60) * Math.PI / 180; return <Plate key={index} x={160 + 70 * Math.cos(a)} y={100 + 70 * Math.sin(a)} r={14} />; })}
      </g>}
      {at === 3 && <g><Doc x={70} y={34} w={96} h={120} /><W x={240} y={92} size={12}>Food diary</W><W x={240} y={112} size={10.5}>for a couple of weeks</W></g>}
      {at === 4 && <Talk text="Your dietitian" />}
      <Cap>{["A smaller stomach holds less", "Sips, then soft food, then small meals", "Small meals about every two hours", "A food diary shows what upsets you", "A dietitian can help find what works"][at]}</Cap>
    </svg>} />;
}

function StcSugarDip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Dumping syndrome" title="When food rushes through" label="Dumping syndrome" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Food rushing into the bowel, a 30-minute clock, blood sugar rising and dropping, and symptoms easing">
      {at === 0 && <g>
        <Stomach x={90} y={100} scale={0.7} gullet={26} /><Pipe d="M131 118 C170 118 176 92 214 92 H296" width={14} />
        {[222, 246, 270].map(x => <path key={x} d={`M${x - 5} 84 L${x + 3} 92 L${x - 5} 100`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />)}
        <W x={246} y={66} size={11}>Faster</W>
      </g>}
      {at === 1 && <g>
        <Plate x={50} y={96} r={22} /><path d="M78 96 H118" stroke={LINE} strokeWidth="3" strokeDasharray="2 6" />
        <Clock x={150} y={96} r={24} hand={Math.PI} /><W x={150} y={140} size={10.5}>30 minutes</W>
        <W x={252} y={74} size={10}>Lasts about</W><Box x={252} y={98} w={100} text="10 to 15 min" />
      </g>}
      {at === 2 && <g>
        <path d="M30 176 H300" stroke={LINE} strokeWidth="3" /><path d="M30 110 H300" stroke={LINE} strokeWidth="2" strokeDasharray="4 6" />
        <path d="M30 110 C60 110 80 48 112 48 C150 48 170 146 210 146 C250 146 270 112 300 110" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <W x={112} y={36} size={10.5}>Sugar rises</W><W x={210} y={166} size={10.5}>then drops</W>
      </g>}
      {at === 3 && <g><Plate x={70} y={90} r={24} /><Glass x={250} y={90} /><path d="M70 132 V140 H250 V132" stroke={GOLD} strokeWidth="3" fill="none" /><W x={160} y={162} size={11}>15 to 30 minutes</W></g>}
      {at === 4 && <g>
        <W x={30} y={50} size={10.5} anchor="start">Symptoms</W>
        {[90, 72, 56, 40, 28, 18].map((h, index) => <rect key={h} x={40 + index * 44} y={160 - h} width="30" height={h} rx="4" fill={INK} opacity={0.85 - index * 0.1} />)}
        <W x={160} y={180} size={10.5}>Over time</W>
      </g>}
      <Cap>{["Food moves through more quickly", "Early: within 30 minutes of a meal", "Late: low blood sugar, hours later", "Less sugar; drink between meals", "For most, it slowly eases over time"][at]}</Cap>
    </svg>} />;
}

function StcB12Arrows(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Vitamins" title="What your stomach used to absorb" label="Vitamins and minerals" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Intrinsic factor in the stomach, B12 injections every 3 months, signs of low B12 and other nutrients">
      {at === 0 && <g><Stomach x={90} y={104} scale={0.8} gullet={24}><circle cx="30" cy="70" r="8" fill={GOLD} /></Stomach><W x={226} y={90} size={11.5}>Intrinsic factor</W><W x={226} y={110} size={10.5}>lets us absorb B12</W></g>}
      {at === 1 && <g>
        <Syringe x={70} y={96} />
        <Days x={130} y={90} count={12} perRow={12} size={12} gap={14} lit={index => index % 3 === 2} />
        <W x={207} y={130} size={11}>Every 3 months</W>
      </g>}
      {at === 2 && <g><Person x={70} y={150} scale={1.5} /><Tags x={160} y={26} labels={["Extreme tiredness", "Pins and needles", "Sore, red tongue", "Muscle weakness"]} lit={() => true} width={140} gap={36} /></g>}
      {at === 3 && <g><Grid2 labels={["Iron", "Folate", "Calcium", "Vitamin D"]} w={86} xs={[72, 172]} /><Tube x={266} y={90} /><W x={266} y={140} size={10}>Blood tests</W></g>}
      {at === 4 && <g><Box x={160} y={64} w={170} text="Ask your dietitian" lit /><Plate x={160} y={130} r={28} /></g>}
      <Cap>{["The stomach helped absorb B12", "B12 injections, usually every 3 months", "Low B12 can cause extreme tiredness", "Regular blood tests for iron and more", "Worried about diet? Ask a dietitian"][at]}</Cap>
    </svg>} />;
}

function StcWeightLevel(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Weight" title="Holding on to your weight" label="Weight and nutrition" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A weight line that falls and then levels off, supplement drinks, a dietitian and extra support">
      {at === 0 && <g>
        <path d="M40 40 V160 H296" stroke={LINE} strokeWidth="3" fill="none" />
        <path d="M44 60 C90 66 120 112 160 122 S250 128 296 128" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <W x={44} y={32} size={10.5} anchor="start">Weight</W><W x={296} y={178} size={10.5} anchor="end">Time</W><W x={250} y={112} size={11}>Levels off</W>
      </g>}
      {at === 1 && <g>
        <rect x="72" y="56" width="24" height="14" rx="3" fill={INK} /><rect x="64" y="70" width="40" height="72" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="64" y="94" width="40" height="20" fill={SOFT} />
        <W x={84} y={164} size={10.5}>Supplement</W>
        <Box x={220} y={80} w={130} text="Extra energy" lit /><Box x={220} y={120} w={130} text="Extra protein" lit />
      </g>}
      {at === 2 && <Talk text="See me regularly" width={134} />}
      {at === 3 && <g><Box x={160} y={70} w={210} text="Feeding tube, short term" lit /><Box x={160} y={120} w={210} text="Soft or puréed foods" /></g>}
      <Cap>{["In time, most stop losing weight", "More energy without eating more", "See your dietitian regularly", "A feeding tube is usually temporary"][at]}</Cap>
    </svg>} />;
}

function StcKeyWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const weeks = at === 2 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tiredness" title="Healing takes energy" label="Tiredness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A low battery, checks for B12 and anaemia, eight weeks without heavy lifting, and driving at 4 to 6 weeks">
      {weeks && <g>
        {Array.from({ length: 8 }, (_, index) => { const on = at === 2 || (index >= 3 && index <= 5); return <g key={index}>
          <rect x={26 + index * 34} y="120" width="28" height="28" rx="5" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={40 + index * 34} y={138} size={10.5} fill={on ? WHITE : TEXT}>{index + 1}</W>
        </g>; })}
        <W x={160} y={170} size={10.5}>weeks</W>
      </g>}
      {at === 0 && <g><Battery x={110} y={50} level={0.15} /><W x={160} y={134} size={11.5}>After a major operation</W></g>}
      {at === 1 && <g><Tube x={90} y={96} /><W x={90} y={150} size={10.5}>B12</W><Stack x={220} y={56} w={120} labels={["Anaemia", "Pain", "Poor sleep"]} /></g>}
      {at === 2 && <g><path d="M140 54 H180 L184 94 H136 Z M150 54 V46 A10 10 0 0 1 170 46 V54" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><Cross x={160} y={74} s={20} /></g>}
      {at === 3 && [["Rest", false], ["Walk", true], ["Rest", false], ["Task", true]].map(([label, lit], index) => <Box key={index} x={52 + index * 72} y={100} w={62} text={label as string} lit={lit as boolean} />)}
      {at === 4 && <g><Key x={180} y={66} s={2.2} /><W x={176} y={106} size={10.5}>4 to 6 weeks</W></g>}
      <Cap>{["A major operation; tired for weeks", "Low B12 or anaemia can be checked", "No heavy lifting for at least 8 weeks", "Pace the day: rest and activity", "Most can drive after 4 to 6 weeks"][at]}</Cap>
    </svg>} />;
}

function StcCallAhead(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Meals with others" title="Back to the table" label="Eating out" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A shared table, a call ahead and a restaurant card, less sugar, meals at your own times and a phone buddy">
      {at === 0 && <g><Person x={100} y={112} scale={1.1} /><Person x={220} y={112} scale={1.1} fill={SOFT} /><Table /><SidePlate x={100} y={124} rx={26} /><SidePlate x={220} y={125} rx={12} /></g>}
      {at === 1 && <g>
        <Phone x={70} y={96} text="Call" /><Bubble x={204} y={46} text="Smaller portions?" width={140} />
        <rect x="150" y="98" width="120" height="56" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={210} y={122} size={11}>OPA card</W><W x={210} y={140} size={10}>12 languages</W>
      </g>}
      {at === 2 && <g>
        <Plate x={110} y={100} r={20} /><W x={110} y={152} size={11}>Small amounts</W>
        <path d="M202 96 C204 76 236 76 238 96 Z" fill={SOFT} /><path d="M204 96 H236 L232 124 H208 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <Cross x={220} y={100} s={22} /><W x={220} y={152} size={11}>Less sugar</W>
      </g>}
      {at === 3 && <g><Clock x={80} y={76} r={30} hand={4} /><W x={210} y={70} size={11.5}>Your own times</W><Table /><SidePlate x={210} y={124} rx={18} /></g>}
      {at === 4 && <g><Phone x={80} y={96} /><Phone x={240} y={96} /><path d="M104 96 H216" stroke={GOLD} strokeWidth="3" strokeDasharray="6 6" /><W x={160} y={160} size={11.5}>Phone buddy</W></g>}
      <Cap>{["Eating problems can strain meals out", "Call ahead for smaller portions", "Small amounts; go easy on sugar", "Eat at the times that suit you", "A phone buddy who has been there"][at]}</Cap>
    </svg>} />;
}

function StcRightsDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and money" title="Back to work, with rights behind you" label="Work and money" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Scales of the law, adjustments at work, a fit note and return plan, 28 weeks of sick pay and grants">
      {at === 0 && <g><path d="M160 50 V130 M136 130 H184 M112 62 H208 M112 62 L100 92 H124 Z M208 62 L196 92 H220 Z" stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" /><W x={160} y={160} size={12}>Equality Act 2010</W></g>}
      {at === 1 && <Grid2 labels={["Phased return", "Extra breaks", "Toilet access", "Quiet place to rest"]} w={130} xs={[88, 232]} />}
      {at === 2 && <g><Doc x={50} y={40} w={90} h={110} /><W x={95} y={172} size={11}>Fit note</W><Person x={210} y={150} scale={1.2} /><Person x={266} y={150} scale={1.2} fill={SOFT} /><W x={238} y={70} size={11}>A return plan</W></g>}
      {at === 3 && <g><Days x={30} y={40} count={28} perRow={7} /><W x={91} y={136} size={11.5}>28 weeks</W><W x={236} y={70} size={10.5}>Off over 7 days?</W><Box x={236} y={104} w={90} text="Fit note" lit /></g>}
      {at === 4 && <g><Badge x={90} y={80} text="Grant" width={96} /><W x={90} y={124} size={10.5}>Access to Work</W><Stack x={232} y={52} w={140} gap={38} labels={["Citizens Advice", "StepChange", "National Debtline"]} /></g>}
      <Cap>{["Cancer counts as a disability in law", "Adjustments, like easy toilet access", "A flexible plan with your manager", "Statutory Sick Pay: up to 28 weeks", "Access to Work grants; debt advice"][at]}</Cap>
    </svg>} />;
}

function StcSignposts(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const boards = ["Samaritans 116 123", "111: mental health", "Text SHOUT to 85258", "999 or A&E"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="After treatment, the feelings arrive" label="Mood" credit="Illustration: Rehyn. In danger now? Call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Leaving the clinic, a cloud of worry, two weeks of low mood, support, and a signpost to help">
      {at === 0 && <g><Sun x={50} y={50} r={12} /><Cloud x={84} y={66} s={18} /><Person x={130} y={156} scale={1.3} /><W x={240} y={46} size={10.5}>Clinic</W><rect x="210" y="56" width="60" height="112" rx="4" fill={TINT} stroke={INK} strokeWidth="2.5" /></g>}
      {at === 1 && <g><Cloud x={160} y={60} s={32} opacity={0.6} /><Person x={160} y={164} scale={1.3} /></g>}
      {at === 2 && <g><Days x={62} y={50} count={14} perRow={7} size={24} gap={28} /><W x={160} y={132} size={11}>More than 2 weeks</W></g>}
      {at === 3 && <Stack x={160} y={50} w={180} gap={42} labels={["Talking therapies", "Support groups", "Macmillan Buddies"]} />}
      {at === 4 && <g>
        <rect x="30" y="18" width="8" height="162" rx="3" fill={INK} />
        {boards.map((board, index) => { const y = 24 + index * 38; const lit = index === 0 || index === 3; return <g key={board}>
          <path d={`M38 ${y} H226 L238 ${y + 14} L226 ${y + 28} H38 Z`} fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
          <W x={132} y={y + 18} size={10.5} fill={lit ? WHITE : TEXT}>{board}</W>
        </g>; })}
      </g>}
      <Cap>{["Relief and anxious days, both common", "Focus on what you can control", "Over 2 weeks? Talk to your doctor", "Refer yourself to talking therapies", "Samaritans 116 123, any time"][at]}</Cap>
    </svg>} />;
}

// ==== Liver cancer =============================================================================================

function LvcTwoLivers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Cancer that starts in the liver" label="What it is" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two livers: cancer starting in the liver, and cancer arriving from elsewhere, and what the liver does">
      {at <= 1 && <g>
        <Liver x={90} y={84} scale={0.62}><circle cx="70" cy="55" r={at === 0 ? 14 : 18} fill={GOLD} /></Liver>
        <Liver x={236} y={84} scale={0.62}>{(at === 0 ? [[110, 60]] : [[50, 50], [84, 72], [120, 40], [150, 28], [100, 92], [60, 86]]).map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={at === 0 ? 10 : 8} fill={GOLD} />)}</Liver>
        {at === 0 && <g><circle cx="292" cy="168" r="9" fill={SOFT} /><Arrow d="M290 156 C286 140 276 126 258 112" head="M262 120 L257 111 L267 109" /></g>}
        <W x={90} y={150} size={11}>{at === 0 ? "Primary" : "One tumour"}</W><W x={226} y={150} size={11}>{at === 0 ? "Secondary" : "Many small ones"}</W>
      </g>}
      {at === 2 && <Stack x={160} y={36} w={180} gap={38} labels={["Fibrolamellar HCC", "Bile duct cancer", "Angiosarcoma", "Benign lumps"]} lit={index => index < 3} />}
      {at === 3 && <g><Liver x={160} y={78} scale={0.85} fill={TINT} /><W x={64} y={158} size={10.5}>Energy store</W><W x={160} y={158} size={10.5}>Bile</W><W x={256} y={158} size={10.5}>Clotting</W></g>}
      {at === 4 && <g><Liver x={160} y={66} scale={0.55} /><Box x={160} y={140} w={160} text="Know your type" lit /></g>}
      <Cap>{["Primary: it starts in the liver", "HCC: about 3 in 4 liver cancers", "Rarer types, and benign lumps", "The liver is good at repairing itself", "Your type guides your treatment"][at]}</Cap>
    </svg>} />;
}

function LvcRiskRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="Most HCC grows in a scarred liver" label="Causes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A liver with a question mark, then scarred, with hepatitis, fatty liver, alcohol, smoking and family">
      {at <= 1 && <Liver x={160} y={86} scale={0.8}>
        {at === 0 && <W x={100} y={74} size={40}>?</W>}
        {at === 1 && <g stroke={SOFT} strokeWidth="5" fill="none" strokeLinejoin="round"><path d="M30 50 L50 40 L70 54 L90 42 L110 56 L130 44 L150 54" /><path d="M40 80 L60 70 L80 84 L100 72 L120 86" /></g>}
      </Liver>}
      {at === 0 && <W x={160} y={168} size={10.5}>1 in 4 HCC: no known cause</W>}
      {at === 1 && <W x={160} y={168} size={10.5}>Cirrhosis: scarring</W>}
      {at === 2 && <g><Liver x={84} y={96} scale={0.55} /><Stack x={226} y={56} w={150} labels={["Hepatitis B or C", "Fatty liver (MASLD)", "Diabetes, weight"]} lit={index => index < 2} /></g>}
      {at === 3 && <g>
        <WineGlass x={70} y={92} scale={1.6} /><Cigarette x={158} y={92} /><Person x={236} y={106} scale={0.8} /><Person x={264} y={106} scale={0.8} fill={SOFT} />
        <W x={70} y={150} size={10.5}>Alcohol</W><W x={160} y={150} size={10.5}>Smoking</W><W x={250} y={150} size={10.5}>Family</W>
      </g>}
      {at === 4 && <Stack x={160} y={50} w={200} gap={42} labels={["Lose weight if needed", "Try to stop smoking", "Ask before drinking"]} />}
      <Cap>{["The exact cause is not known", "Over 9 in 10 HCCs linked to cirrhosis", "Hepatitis B or C, and fatty liver", "Drinking: fewer than 1 in 10 cases", "Healthy changes can lower the chance"][at]}</Cap>
    </svg>} />;
}

function LvcRoutes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const routes: [number, number, string][] = [[62, 40, "Surgery"], [258, 40, "Transplant"], [62, 100, "Ablation"], [258, 100, "Embolisation"], [62, 160, "Targeted drugs"], [258, 160, "Radiotherapy"]];
  const lit = [[], [0, 1], [2, 3], [4, 5], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatments" title="From surgery to treatments into the liver" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A liver at the centre with routes to surgery, transplant, ablation, embolisation, drugs and radiotherapy">
      {routes.map(([x, y]) => <path key={`${x}-${y}`} d={`M160 100 L${x < 160 ? x + 50 : x - 50} ${y}`} stroke={LINE} strokeWidth="2.5" strokeDasharray="3 5" />)}
      <Liver x={160} y={100} scale={0.45} fill={at === 0 || at === 4 ? TINT : WHITE} stroke={at === 0 || at === 4 ? GOLD : INK} />
      {at === 0 && <W x={160} y={30} size={10.5}>Your team plans</W>}
      {routes.map(([x, y, label], index) => <g key={label} opacity={at === 0 || at === 4 ? 1 : fade(lit.includes(index))}><Box x={x} y={y} w={100} text={label} lit={lit.includes(index)} /></g>)}
      <Cap>{["Size, number, liver health and you", "Surgery or a transplant, for some", "Ablation and embolisation", "Drugs, and targeted radiotherapy", "A plan made with you"][at]}</Cap>
    </svg>} />;
}

function LvcThreeMonths(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Follow-up" title="Scans and check-ups after treatment" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Check-ups and blood tests, a year marked every 3 months, scans, a phone and someone close">
      {at === 0 && <g><Person x={120} y={150} scale={1.3} /><Person x={196} y={150} scale={1.3} fill={SOFT} /><Tube x={272} y={100} /></g>}
      {at === 1 && <g>
        <path d="M30 110 H290" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
        <circle cx="60" cy="110" r="8" fill={GOLD} /><W x={60} y={90} size={10}>6 weeks</W>
        {[3, 6, 9, 12].map(month => <g key={month}><circle cx={30 + month * 20} cy="110" r="8" fill={INK} /><W x={30 + month * 20} y={136} size={10.5}>{month}</W></g>)}
        <W x={190} y={156} size={10.5}>months</W>
      </g>}
      {at === 2 && <g><Scanner x={100} y={90} r={26} /><W x={100} y={146} size={10.5}>CT or MRI</W><Tube x={226} y={90} /><W x={226} y={146} size={10.5}>AFP blood test</W></g>}
      {at === 3 && <g><Phone x={160} y={90} text="Call" /><W x={160} y={150} size={11}>Any time</W></g>}
      {at === 4 && <g><Person x={130} y={156} scale={1.2} /><Person x={176} y={156} scale={1.2} fill={SOFT} /><Bubble x={210} y={56} text="Come with me?" width={120} /></g>}
      <Cap>{["Regular check-ups and blood tests", "Often every 3 months at first", "CT or MRI scans, and an AFP test", "New symptoms? Do not wait", "Bring someone close with you"][at]}</Cap>
    </svg>} />;
}

function LvcNeedleBeads(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const liverOn = at <= 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Into the liver" title="Reaching the cancer from inside" label="Treatments into the liver" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A liver with a tumour: a heating needle, a fine tube with beads, tiny radioactive beads, and what follows">
      <g opacity={liverOn ? 1 : 0.35}><Liver x={168} y={92} scale={0.8}>
        <circle cx="130" cy="50" r="16" fill={SOFT} stroke={INK} strokeWidth="2.5" />
        {at === 0 && Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${130 + 22 * Math.cos(a)} ${50 + 22 * Math.sin(a)} L${130 + 30 * Math.cos(a)} ${50 + 30 * Math.sin(a)}`} stroke={GOLD} strokeWidth="4" strokeLinecap="round" />; })}
        {at === 2 && [[120, 40], [138, 44], [128, 58], [142, 60], [116, 54], [132, 34], [146, 50]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />)}
      </Liver></g>
      {at === 0 && <g><path d="M292 22 L200 78" stroke={INK} strokeWidth="3" strokeLinecap="round" /><W x={160} y={172} size={10.5}>Guided by a scan</W></g>}
      {(at === 1 || at === 2) && <g opacity={at === 2 ? 0.35 : 1}>
        <path d="M24 190 C70 180 100 160 130 130 S170 100 188 88" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
        {at === 1 && [[180, 94], [186, 88], [176, 100]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="4" fill={GOLD} />)}
        {at === 1 && <W x={22} y={150} size={10} anchor="start">From the leg</W>}
      </g>}
      {at === 2 && <W x={276} y={168} size={10.5}>Microspheres</W>}
      {at === 3 && <g><Pill x={60} y={60} /><W x={160} y={172} size={10.5}>Flu-like, aches, tiredness</W></g>}
      {at === 4 && <g><Thermo x={50} y={96} /><W x={50} y={150} size={11}>Over 38°C</W><Phone x={284} y={96} text="Call" /></g>}
      <Cap>{["Ablation: heat through a needle", "TACE: chemo, then the supply blocked", "SIRT: tiny radioactive beads", "Flu-like for 1 to 2 weeks, for some", "Over 38°C at home? Call the team"][at]}</Cap>
    </svg>} />;
}

function Lvc24Hour(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Drug treatments" title="Know your 24-hour number" label="Targeted drugs and immunotherapy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A target and a shield, a working liver, a drip and tablets, a treatment card, and a phone for the 24-hour line">
      {at === 0 && <g>
        {[30, 20, 10].map((r, index) => <circle key={r} cx="90" cy="92" r={r} fill={index % 2 ? WHITE : INK} stroke={INK} strokeWidth="2" />)}
        <path d="M230 60 L258 70 V96 C258 116 244 126 230 132 C216 126 202 116 202 96 V70 Z" fill={TINT} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <W x={90} y={150} size={10.5}>Targeted drugs</W><W x={230} y={150} size={10.5}>Immunotherapy</W>
      </g>}
      {at === 1 && <g><Liver x={160} y={84} scale={0.7} /><path d="M140 86 L156 102 L184 70" stroke={GOLD} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" /><W x={160} y={160} size={11}>Liver working well</W></g>}
      {at === 2 && <g>
        <path d="M90 30 V160 M90 34 H110 M70 160 H110" stroke={INK} strokeWidth="3" strokeLinecap="round" /><rect x="98" y="38" width="24" height="34" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M110 72 V120" stroke={INK} strokeWidth="2" />
        <W x={96} y={180} size={10.5}>Every 3 weeks</W>
        <g transform="translate(222 100) scale(1.8)"><Pill x={0} y={0} /></g><W x={222} y={180} size={10.5}>Tablets</W>
      </g>}
      {at === 3 && <g><rect x="90" y="50" width="140" height="84" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="90" y="50" width="140" height="20" rx="8" fill={INK} /><W x={160} y={100} size={12}>Treatment card</W><W x={160} y={118} size={10}>Show any doctor</W></g>}
      {at === 4 && <g><Phone x={90} y={96} text="24h" /><Box x={222} y={96} w={140} text="999: chest pain" lit /></g>}
      <Cap>{["Target the cancer, or boost immunity", "When surgery is not suitable", "A drip every 3 weeks, or tablets", "Keep your treatment card with you", "Unwell? Call the 24-hour number"][at]}</Cap>
    </svg>} />;
}

function LvcRegrowLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const xs = [36, 98, 160, 222, 284];
  const names = ["24 hours", "Moving", "Home", "Regrows", "Infection?"];
  const icon = (index: number, x: number) => [
    <g key="bed"><rect x={x - 20} y="100" width="40" height="8" rx="2" fill={INK} /><rect x={x - 18} y="92" width="36" height="8" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><path d={`M${x - 16} 108 V118 M${x + 16} 108 V118`} stroke={INK} strokeWidth="3" /></g>,
    <Person key="walk" x={x} y={118} scale={0.8} />,
    <House key="home" x={x} y={102} />,
    <Liver key="liver" x={x} y={104} scale={0.2} fill={TINT} />,
    <g key="thermo" transform={`translate(${x} 106) scale(0.6)`}><Thermo x={0} y={0} /></g>,
  ][index];
  return <MemoryBand props={props} state={s} tone="theme" kicker="After surgery" title="Step by step after liver surgery" label="Recovering from surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from intensive care to moving, going home, the liver regrowing, and signs of infection">
      <path d="M36 146 H284" stroke={LINE} strokeWidth="4" strokeDasharray="2 8" strokeLinecap="round" />
      {xs.map((x, index) => <g key={x} opacity={index === at ? 1 : 0.45}>
        {index === at && <circle cx={x} cy="102" r="27" fill={WHITE} stroke={GOLD} strokeWidth="3" />}
        {icon(index, x)}
        <circle cx={x} cy="146" r="6" fill={index <= at ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x} y={172} size={10}>{names[index]}</W>
      </g>)}
      <Cap>{["About 24 hours in intensive care", "Up and moving the day after, or sooner", "Home after 2 to 7 days, for most", "The liver regrows in 4 to 6 weeks", "Hot or leaking wound: call hospital"][at]}</Cap>
    </svg>} />;
}

function LvcBodySpots(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots: [number, number][][] = [[], [[70, 118], [56, 72]], [[92, 150]], [[86, 40]], [[116, 118]]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Help for every symptom" label="Managing symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body outline with where pain, swelling, jaundice and itching show, and the help for each">
      <Torso x={90} y={120} scale={0.9} />
      {spots[at].map(([x, y]) => <g key={`${x}-${y}`}><path d={`M176 ${37 + at * 34} L${x} ${y}`} stroke={GOLD} strokeWidth="2" strokeDasharray="3 4" /><circle cx={x} cy={y} r="6" fill={GOLD} /></g>)}
      <Tags x={176} y={24} labels={["Support team", "Pain", "Swollen tummy", "Jaundice", "Itching"]} lit={index => index === at} width={128} gap={34} />
      <Cap>{["Palliative care can help at any stage", "Pain may reach the right shoulder", "Water tablets or a drain for fluid", "A stent can keep a bile duct open", "Loose cotton, cool skin, moisturiser"][at]}</Cap>
    </svg>} />;
}

function LvcShield(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Liver health" title="Protecting the liver you have" label="Looking after your liver" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A liver in the middle of alcohol, medicines, vaccines and being active">
      {at === 0 && <ellipse cx="160" cy="100" rx="64" ry="42" fill="none" stroke={GOLD} strokeWidth="3" />}
      <Liver x={160} y={100} scale={0.5} fill={TINT} />
      <g opacity={fade(at === 1)}><WineGlass x={60} y={54} scale={1.3} /><W x={60} y={92} size={10.5}>Alcohol</W></g>
      <g opacity={fade(at === 2)}><rect x="252" y="28" width="16" height="10" rx="2" fill={INK} /><rect x="248" y="38" width="24" height="34" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={260} y={92} size={10.5}>Medicines</W></g>
      <g opacity={fade(at === 3)}><Syringe x={64} y={142} /><W x={60} y={182} size={10.5}>Vaccines</W></g>
      <g opacity={fade(at === 4)}><Person x={260} y={160} scale={0.9} /><W x={260} y={188} size={10.5}>Active</W></g>
      <Cap>{["Treatments rely on the healthy liver", "Check with your doctor before drinking", "Ask a pharmacist before any medicine", "A flu vaccine every autumn", "Balanced diet, activity, no smoking"][at]}</Cap>
    </svg>} />;
}

function LvcSquashed(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Eating" title="Eating enough when you fill up fast" label="Eating and weight" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An enlarged liver pressing on the stomach, small plates through the day, fortified milk and advice">
      {at === 0 && <g>
        <Liver x={112} y={84} scale={0.7} fill={TINT} />
        <g transform="translate(240 112) scale(1 0.7)"><Stomach x={0} y={0} scale={0.6} /></g>
        <Arrow d="M186 96 H204" head="M197 90 L204 96 L197 102" />
        <W x={112} y={150} size={10.5}>Liver</W><W x={240} y={160} size={10.5}>Stomach</W>
      </g>}
      {at === 1 && <g><Clock x={160} y={58} r={22} hand={1} />{Array.from({ length: 6 }, (_, index) => <Plate key={index} x={40 + index * 48} y={124} r={14} />)}</g>}
      {at === 2 && <g><Glass x={90} y={100} /><W x={90} y={142} size={10.5}>Whole milk</W><W x={220} y={96} size={10.5}>+ 3 or 4 tablespoons</W><W x={220} y={114} size={10.5}>of milk powder</W></g>}
      {at === 3 && <g>
        <circle cx="110" cy="96" r="32" fill={TINT} stroke={INK} strokeWidth="2.5" />
        {Array.from({ length: 6 }, (_, index) => { const a = index * Math.PI / 3; return <path key={index} d={`M110 96 L${110 + 28 * Math.cos(a)} ${96 + 28 * Math.sin(a)}`} stroke={SOFT} strokeWidth="2.5" />; })}
        <Cross x={110} y={96} s={30} /><W x={110} y={150} size={10.5}>Grapefruit</W><W x={236} y={100} size={10.5}>If you are asked to</W>
      </g>}
      {at === 4 && <Talk text="Your dietitian" />}
      <Cap>{["A big liver can squash the stomach", "Something every couple of hours", "Add calories; sip nourishing drinks", "Avoid grapefruit if you are asked to", "A dietitian can plan a diet for you"][at]}</Cap>
    </svg>} />;
}

function LvcBedBattery(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const steps: [number, number][] = [[64, 162], [80, 156], [98, 160], [120, 152], [146, 154], [176, 144], [210, 142], [250, 130], [292, 122]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tiredness" title="Tiredness that sleep does not fix" label="Tiredness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bed that does not refill a battery, weeks after embolisation, a diary, longer walks and telling the team">
      {at === 0 && <g><W x={160} y={50} size={11}>Rest may not refill it</W><Bed x={24} y={130} w={130} /><Arrow d="M162 110 H182" head="M175 104 L182 110 L175 116" /><Battery x={190} y={88} level={0.25} w={96} h={44} /></g>}
      {at === 1 && <g><W x={30} y={80} size={10.5} anchor="start">Embolisation</W><Days x={30} y={96} count={14} perRow={14} size={15} gap={19} /><W x={160} y={140} size={11}>A couple of weeks</W></g>}
      {at === 2 && <g><Doc x={50} y={36} w={90} h={120} /><W x={95} y={176} size={10.5}>Diary</W><Battery x={180} y={80} level={0.6} /><W x={230} y={150} size={10.5}>Save energy</W></g>}
      {at === 3 && <g><Person x={34} y={150} /><Footsteps points={steps} /><W x={180} y={60} size={10.5}>A little further when ready</W></g>}
      {at === 4 && <Talk text="Score it 0 to 10" width={130} />}
      <Cap>{["Sleep or rest may not fix it", "After embolisation: a couple of weeks", "Save energy for what matters", "A short walk each day, then further", "Score it 0 to 10 for your team"][at]}</Cap>
    </svg>} />;
}

function LvcHelplines(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood and support" title="Rare cancer, shared feelings" label="Mood and support" credit="Illustration: Rehyn. In danger now? Call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Good days and bad days, two weeks of low mood, a walk with a friend, and helplines">
      {at === 0 && <g><Sun x={90} y={80} r={18} /><Cloud x={226} y={86} s={32} /><W x={90} y={146} size={11}>Good days</W><W x={226} y={146} size={11}>Bad days</W></g>}
      {at === 1 && <g><Days x={70} y={44} count={14} perRow={7} size={22} gap={26} /><W x={160} y={132} size={12}>As many as 1 in 3</W><W x={160} y={152} size={10.5}>and it can be treated</W></g>}
      {at === 2 && <g><Person x={130} y={156} scale={1.2} /><Person x={180} y={156} scale={1.2} fill={SOFT} /><Sun x={260} y={60} r={14} /></g>}
      {at === 3 && <Stack x={160} y={36} w={190} gap={38} labels={["Samaritans 116 123", "111: mental health", "Text SHOUT to 85258", "999 or A&E"]} lit={index => index === 0} />}
      {at === 4 && <g><Phone x={64} y={100} /><Stack x={200} y={76} w={190} gap={48} labels={["Macmillan 0808 808 00 00", "Liver UK 0800 652 7330"]} /></g>}
      <Cap>{["Good days and bad days are normal", "Depression is common, and treatable", "A walk with a friend can lift mood", "Samaritans 116 123, day or night", "Nurse helplines are there for you"][at]}</Cap>
    </svg>} />;
}

export function DigestPieceView({ piece, ...props }: { piece: DigestPiece } & PieceProps) {
  switch (piece) {
    case "dig-oes-pulled-up": return <OesPulledUp {...props} />;
    case "dig-oes-wall-layers": return <OesWallLayers {...props} />;
    case "dig-oes-spacing-out": return <OesSpacingOut {...props} />;
    case "dig-oes-stent": return <OesStent {...props} />;
    case "dig-oes-day-plates": return <OesDayPlates {...props} />;
    case "dig-oes-two-clocks": return <OesTwoClocks {...props} />;
    case "dig-oes-weight-scale": return <OesWeightScale {...props} />;
    case "dig-oes-wedge-bed": return <OesWedgeBed {...props} />;
    case "dig-oes-battery-steps": return <OesBatterySteps {...props} />;
    case "dig-oes-small-card": return <OesSmallCard {...props} />;
    case "dig-oes-phased-weeks": return <OesPhasedWeeks {...props} />;
    case "dig-oes-bench": return <OesBench {...props} />;
    case "dig-stc-partial-total": return <StcPartialTotal {...props} />;
    case "dig-stc-tnm-dots": return <StcTnmDots {...props} />;
    case "dig-stc-path-cards": return <StcPathCards {...props} />;
    case "dig-stc-family-tree": return <StcFamilyTree {...props} />;
    case "dig-stc-two-hours": return <StcTwoHours {...props} />;
    case "dig-stc-sugar-dip": return <StcSugarDip {...props} />;
    case "dig-stc-b12-arrows": return <StcB12Arrows {...props} />;
    case "dig-stc-weight-level": return <StcWeightLevel {...props} />;
    case "dig-stc-key-weeks": return <StcKeyWeeks {...props} />;
    case "dig-stc-call-ahead": return <StcCallAhead {...props} />;
    case "dig-stc-rights-desk": return <StcRightsDesk {...props} />;
    case "dig-stc-signposts": return <StcSignposts {...props} />;
    case "dig-lvc-two-livers": return <LvcTwoLivers {...props} />;
    case "dig-lvc-risk-ring": return <LvcRiskRing {...props} />;
    case "dig-lvc-routes": return <LvcRoutes {...props} />;
    case "dig-lvc-three-months": return <LvcThreeMonths {...props} />;
    case "dig-lvc-needle-beads": return <LvcNeedleBeads {...props} />;
    case "dig-lvc-24-hour": return <Lvc24Hour {...props} />;
    case "dig-lvc-regrow-line": return <LvcRegrowLine {...props} />;
    case "dig-lvc-body-spots": return <LvcBodySpots {...props} />;
    case "dig-lvc-shield": return <LvcShield {...props} />;
    case "dig-lvc-squashed": return <LvcSquashed {...props} />;
    case "dig-lvc-bed-battery": return <LvcBedBattery {...props} />;
    case "dig-lvc-helplines": return <LvcHelplines {...props} />;
    default: return null;
  }
}
