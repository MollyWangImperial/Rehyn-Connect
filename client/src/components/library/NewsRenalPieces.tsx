import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { RENAL_PIECES, type RenalPiece } from "@/content/renal-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Kidney stones, Acute kidney injury and Urinary tract infections pages' own pieces (content/renal-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Kidneys, liver & digestion pieces. Each is steered by the card's
// sections; pictures show ideas, never anyone's own body or results.

export const isRenalPiece = (piece: NewsPiece): piece is RenalPiece => (RENAL_PIECES as readonly string[]).includes(piece);

const urgentCredit = "Illustration: Rehyn. In an emergency, call 999.";

// ==== Shapes ================================================================================================

/** A kidney bean centred near (x, y), its dip facing left; `flip` turns it to face right. */
const Kidney = ({ x, y, scale = 1, flip = false, fill = WHITE, stroke = INK }: { x: number; y: number; scale?: number; flip?: boolean; fill?: string; stroke?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`} d="M4 -30 C24 -30, 30 -12, 28 4 C26 22, 14 32, 0 30 C-12 28, -14 18, -8 10 C-4 4, -4 -4, -8 -10 C-14 -20, -10 -30, 4 -30 Z"
    fill={fill} stroke={stroke} strokeWidth={3 / scale} strokeLinejoin="round" />;

type TractPart = "kidneys" | "left" | "right" | "ureters" | "bladder" | "urethra";
/** The urinary tract: two kidneys, the ureters, the bladder and the urethra, about 114 wide and 144 tall from (x, y - 19). */
const Tract = ({ x, y, lit = [] }: { x: number; y: number; lit?: TractPart[] }) => {
  const on = (part: TractPart) => lit.includes(part);
  const kidney = (side: "left" | "right") => on("kidneys") || on(side);
  return <g transform={`translate(${x} ${y})`}>
    <path d="M-33 6 C-30 40, -16 56, -12 76 M33 6 C30 40, 16 56, 12 76" fill="none" stroke={on("ureters") ? GOLD : INK} strokeWidth={on("ureters") ? 5 : 3.5} strokeLinecap="round" />
    <path d="M0 106 V124" stroke={on("urethra") ? GOLD : INK} strokeWidth={on("urethra") ? 6 : 4} strokeLinecap="round" />
    <path d="M-24 86 C-24 74, 24 74, 24 86 C24 100, 10 108, 0 108 C-10 108, -24 100, -24 86 Z" fill={on("bladder") ? TINT : WHITE} stroke={on("bladder") ? GOLD : INK} strokeWidth={on("bladder") ? 4 : 3} />
    <Kidney x={-38} y={0} scale={0.62} flip fill={kidney("left") ? TINT : WHITE} stroke={kidney("left") ? GOLD : INK} />
    <Kidney x={38} y={0} scale={0.62} fill={kidney("right") ? TINT : WHITE} stroke={kidney("right") ? GOLD : INK} />
  </g>;
};

const Tick = ({ x, y, color = INK, size = 1 }: { x: number; y: number; color?: string; size?: number }) =>
  <path transform={`translate(${x} ${y}) scale(${size})`} d="M-7 0 L-2 6 L8 -6" fill="none" stroke={color} strokeWidth={3.5 / size} strokeLinecap="round" strokeLinejoin="round" />;
const Cross = ({ x, y, color = INK, size = 1 }: { x: number; y: number; color?: string; size?: number }) =>
  <path transform={`translate(${x} ${y}) scale(${size})`} d="M-6 -6 L6 6 M6 -6 L-6 6" fill="none" stroke={color} strokeWidth={3.5 / size} strokeLinecap="round" />;
/** An open arrowhead at (x, y), pointing at `angle` degrees (0 is right, 90 is down). */
const Head = ({ x, y, angle, color = INK }: { x: number; y: number; angle: number; color?: string }) =>
  <path transform={`translate(${x} ${y}) rotate(${angle})`} d="M-8 -6 L0 0 L-8 6" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />;

/** A labelled tile; filled when lit. */
const Tile = ({ x, y, width, label, lit, height = 28, size = 10.5 }: { x: number; y: number; width: number; label: string; lit: boolean; height?: number; size?: number }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
    <W x={x + width / 2} y={y + height / 2 + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{label}</W></g>;
/** A row of tiles across the picture, from x 14 to 306. */
const TileRow = ({ y, labels, lit = () => false, height = 30, size = 10 }: { y: number; labels: string[]; lit?: (index: number) => boolean; height?: number; size?: number }) => {
  const gap = 8, width = (292 - gap * (labels.length - 1)) / labels.length;
  return <g>{labels.map((label, index) => <Tile key={label} x={14 + index * (width + gap)} y={y} width={width} height={height} label={label} lit={lit(index)} size={size} />)}</g>;
};

/** A blood test tube. */
const Tube = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <rect x="-7" y="-22" width="14" height="44" rx="7" fill={WHITE} stroke={INK} strokeWidth={2.5 / scale} />
    <path d="M-5.5 0 H5.5 V14 A5.5 5.5 0 0 1 -5.5 14 Z" fill={INK} />
    <rect x="-9" y="-26" width="18" height="8" rx="2" fill={SOFT} />
  </g>;

/** A glass, `full` from 0 to 1. */
const Tumbler = ({ x, y, full = 0.6, scale = 1, fill = SOFT }: { x: number; y: number; full?: number; scale?: number; fill?: string }) => {
  const top = 17 - 32 * full;
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d={`M${-10.5 + 1.5 * (1 - full)} ${top} L-9 16 H9 L${10.5 - 1.5 * (1 - full)} ${top} Z`} fill={fill} />
    <path d="M-12 -17 L-9 17 H9 L12 -17" fill="none" stroke={INK} strokeWidth={2.5 / scale} strokeLinejoin="round" strokeLinecap="round" />
  </g>;
};

const polar = (cx: number, cy: number, r: number, deg: number) => [cx + r * Math.cos(deg * Math.PI / 180), cy + r * Math.sin(deg * Math.PI / 180)];

/** A rough-edged stone of radius about r. */
const Stone = ({ x, y, r, fill = SOFT }: { x: number; y: number; r: number; fill?: string }) => {
  const points = Array.from({ length: 8 }, (_, index) => polar(x, y, index % 2 ? r * 0.78 : r, index * 45 + 15).map(v => v.toFixed(1)).join(" "));
  return <path d={`M${points.join(" L")} Z`} fill={fill} stroke={INK} strokeWidth={r < 6 ? 1.5 : 2.5} strokeLinejoin="round" />;
};

/** A thermometer, about 20 wide and 62 tall around (x, y). */
const Thermo = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <rect x="-8" y="-34" width="16" height="48" rx="8" fill={WHITE} stroke={INK} strokeWidth={2.5 / scale} />
    <rect x="-3" y="-24" width="6" height="40" fill={GOLD} />
    <circle cx="0" cy="18" r="10" fill={GOLD} stroke={INK} strokeWidth={2 / scale} />
  </g>;

/** A drop of water. */
const Drop = ({ x, y, scale = 1, fill = SOFT }: { x: number; y: number; scale?: number; fill?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${scale})`} d="M0 -12 C5 -5, 9 0, 9 4 A9 9 0 0 1 -9 4 C-9 0, -5 -5, 0 -12 Z" fill={fill} stroke={INK} strokeWidth={1.5 / scale} />;

/** A rod-shaped bacterium. */
const Bug = ({ x, y, rotate = 0 }: { x: number; y: number; rotate?: number }) =>
  <rect x={x - 7} y={y - 3.5} width="14" height="7" rx="3.5" fill={GOLD} stroke={INK} strokeWidth="1.2" transform={`rotate(${rotate} ${x} ${y})`} />;

const Sun = ({ x, y, r = 10 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => {
    const [x0, y0] = polar(x, y, r + 3, index * 45), [x1, y1] = polar(x, y, r + 8, index * 45);
    return <path key={index} d={`M${x0} ${y0} L${x1} ${y1}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />;
  })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;

const Moon = ({ x, y }: { x: number; y: number }) =>
  <path transform={`translate(${x} ${y})`} d="M2 -12 A12 12 0 1 0 12 4 A9 9 0 0 1 2 -12 Z" fill={SOFT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />;

/** A tap, about 46 wide, with a drip. */
const Tap = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}>
    <path d="M-24 -10 H6 C14 -10, 18 -4, 18 4 V10" fill="none" stroke={INK} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="-12" y="-22" width="10" height="10" rx="2" fill={INK} />
    <Drop x={18} y={26} scale={0.6} />
  </g>;

const Phone = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <rect x="-14" y="-24" width="28" height="48" rx="5" fill={WHITE} stroke={INK} strokeWidth={2.5 / scale} />
    <rect x="-10" y="-18" width="20" height="30" rx="2" fill={TINT} />
    <circle cx="0" cy="18" r="2.5" fill={INK} />
  </g>;

/** A car, about 60 wide, for "do not drive". */
const Car = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}>
    <path d="M-30 6 V-4 L-20 -6 L-12 -18 H12 L20 -6 L30 -4 V6 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="-17" cy="8" r="6" fill={INK} /><circle cx="17" cy="8" r="6" fill={INK} />
  </g>;

const SaltShaker = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}>
    <path d="M-12 18 V-6 C-12 -18, 12 -18, 12 -6 V18 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    {[[-4, -8], [4, -8], [0, -12]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="1.8" fill={INK} />)}
  </g>;

/** A plain card the picture draws on. */
const Card = ({ x, y, width, height, children }: { x: number; y: number; width: number; height: number; children?: ReactNode }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />{children}</g>;

const Caption = ({ children }: { children: ReactNode }) => <W x={160} y={206} size={11}>{children}</W>;

// ==== Kidney stones ==========================================================================================

function StoneSizes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="What they are" title="Hard lumps from what you pee" label="What kidney stones are" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A kidney where crystals grow into a stone, and stones from a grain of sand to a few centimetres">
      <Kidney x={66} y={84} scale={1.5} fill={TINT} />
      {[[78, 62], [92, 72], [84, 100], [96, 96], [76, 106]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="3" fill={at === 0 ? GOLD : SOFT} />)}
      <Stone x={88} y={84} r={8} fill={at === 0 ? GOLD : SOFT} />
      {at === 0 && <circle cx="88" cy="84" r="15" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      {at === 0 && <>
        {[[156, 80], [166, 72], [162, 90]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="3.5" fill={GOLD} />)}
        <path d="M180 82 H212" stroke={INK} strokeWidth="3" strokeLinecap="round" /><Head x={214} y={82} angle={0} />
        <Stone x={252} y={82} r={18} />
        <W x={162} y={122} size={10.5}>Crystals</W><W x={252} y={122} size={10.5}>A stone</W>
      </>}
      {at === 1 && <>
        <Stone x={160} y={96} r={2.5} /><Stone x={186} y={96} r={5} /><Stone x={222} y={96} r={10} /><Stone x={276} y={96} r={20} />
        <W x={164} y={138} size={10.5}>Sand grain</W><W x={276} y={138} size={10.5}>A few cm</W>
      </>}
      {at === 2 && <Tags x={150} y={28} labels={["Calcium: 60 to 80%", "Struvite: 10 to 15%", "Uric acid: 5 to 10%", "Cystine: about 1%"]} lit={index => index === 0} width={156} gap={34} />}
      {at === 3 && <>
        <W x={228} y={44} size={14}>1 in 11</W>
        {Array.from({ length: 11 }, (_, index) => <Person key={index} x={index < 6 ? 164 + index * 26 : 177 + (index - 6) * 26} y={index < 6 ? 100 : 150} scale={0.55} fill={index === 0 ? INK : LINE} />)}
      </>}
      {at === 4 && <>
        <path d="M104 112 C140 150, 196 162, 262 158" fill="none" stroke={INK} strokeWidth="3" strokeDasharray="6 6" className={still ? undefined : "lib-types-flow"} />
        <Stone x={200} y={160} r={4} fill={GOLD} />
        <Tick x={284} y={156} color={GOLD} size={1.3} />
      </>}
      <Caption>{["Chemicals in pee crystallise and grow", "Sand grain to a few centimetres", "Calcium stones: 60 to 80% of all", "1 in 11 get stone symptoms", "Small ones may pass unnoticed"][at]}</Caption>
    </svg>} />;
}

function PainPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const stone = [[88, 92], [77, 112], [77, 112], [72, 128], null][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="The pain that comes in waves" label="Kidney stone symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with pain in the side spreading down, and a line of pain that comes and goes">
      <circle cx="70" cy="34" r="14" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M70 50 C48 50, 40 62, 40 80 L44 146 C44 156, 96 156, 96 146 L100 80 C100 62, 92 50, 70 50 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M56 156 L54 186 M84 156 L86 186" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <Kidney x={58} y={92} scale={0.4} flip /><Kidney x={82} y={92} scale={0.4} />
      <path d="M61 98 C63 112, 66 124, 67 130 M79 98 C77 112, 74 124, 73 130" fill="none" stroke={SOFT} strokeWidth="2" />
      <ellipse cx="70" cy="136" rx="10" ry="7" fill={at === 3 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
      {stone && <Stone x={stone[0]} y={stone[1]} r={3.5} fill={GOLD} />}
      {(at === 1 || at === 2) && <>
        <circle cx="102" cy="96" r="9" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />
        <path d="M104 112 C108 128, 100 146, 88 160" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" className={still ? undefined : "lib-types-flow"} />
      </>}
      {at === 4 && <W x={70} y={40} size={14}>?</W>}
      {(at === 0 || at === 1) && <>
        <path d="M140 140 H300" stroke={LINE} strokeWidth="3" />
        <W x={140} y={44} size={10} anchor="start">Pain</W>
        {at === 0 ? <path d="M140 132 H300" stroke={INK} strokeWidth="3" />
          : <path d="M140 140 C150 140, 156 70, 166 70 C176 70, 180 140, 190 140 C200 140, 206 84, 216 84 C226 84, 230 140, 240 140 C250 140, 256 66, 266 66 C276 66, 280 140, 290 140 H300" fill="none" stroke={INK} strokeWidth="3" />}
        {at === 0 && <W x={220} y={118} size={10.5}>Often no pain at all</W>}
      </>}
      {at === 2 && <>
        <rect x="172" y="40" width="16" height="80" rx="4" fill={INK} /><Stone x={180} y={134} r={3} />
        <rect x="256" y="96" width="16" height="16" rx="4" fill={INK} /><Stone x={264} y={134} r={16} />
        <W x={180} y={172} size={10}>Small stone</W><W x={264} y={172} size={10}>Large stone</W>
      </>}
      {at === 3 && <Tags x={140} y={44} labels={["Constant urge to pee", "Burning when peeing", "Blood in pee"]} lit={() => true} width={160} gap={38} />}
      {at === 4 && <Tags x={140} y={44} labels={["Back or spine", "Other conditions", "Get it checked"]} lit={index => index === 2} width={160} gap={38} />}
      <Caption>{["A stone in the kidney may not hurt", "Side or lower back, coming and going", "Pain level does not show stone size", "Near the bladder: urge and burning", "Get symptoms checked by a doctor"][at]}</Caption>
    </svg>} />;
}

function DarkGlass(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Concentrated urine, and a few others" label="Why kidney stones form" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A glass of concentrated urine, with the things that make stones more likely">
      <Tumbler x={80} y={104} scale={2.6} full={0.6} fill={at === 0 ? INK : GOLD} />
      {at === 0 && [[70, 122], [88, 132], [80, 112], [94, 116]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="3" fill={WHITE} />)}
      {at === 1 && <SaltShaker x={142} y={148} />}
      {at === 2 && <Pill x={142} y={150} />}
      {at === 3 && <Sun x={142} y={56} r={9} />}
      {at === 4 && <><Tap x={140} y={56} /><Cross x={142} y={104} color={GOLD} size={1.4} /></>}
      <Tags x={172} y={30} labels={["Too little fluid", "Food and drink", "Health, medicines", "Who is more likely"]} lit={index => at === 4 || index === at} width={134} gap={36} />
      <Caption>{["Concentrated pee: the biggest factor", "Animal protein, sugar and salt", "Some conditions and medicines", "Men, heat, and family history", "A mix of factors; not hard water"][at]}</Caption>
    </svg>} />;
}

function TestCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows: string[][] = [["Symptoms", "Medicines", "Family"], ["Blood in urine", "Acidity", "Kidney tests"], ["CT for adults", "Ultrasound if pregnant"], ["Where", "How big", "How many"], ["Catch the stone", "24-hour urine"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="From dipstick to CT scan" label="Tests for kidney stones" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five steps of testing, from questions and a dipstick to a CT scan and testing the stone">
      {[0, 1, 2, 3, 4].map(index => {
        const cx = 40 + index * 60, on = at === index;
        return <g key={index}>
          <rect x={cx - 26} y="24" width="52" height="64" rx="9" fill={on ? TINT : WHITE} stroke={on ? GOLD : INK} strokeWidth={on ? 3.5 : 2} />
          {index === 0 && <Person x={cx} y={72} scale={0.7} />}
          {index === 1 && <g><rect x={cx - 5} y="34" width="10" height="44" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" />{[40, 50, 60].map((y, k) => <rect key={y} x={cx - 3} y={y} width="6" height="6" fill={[SOFT, INK, GOLD][k]} />)}</g>}
          {index === 2 && <g><circle cx={cx} cy="54" r="16" fill="none" stroke={INK} strokeWidth="6" /><path d={`M${cx - 23} 60 H${cx + 23}`} stroke={SOFT} strokeWidth="5" strokeLinecap="round" /></g>}
          {index === 3 && <g><Kidney x={cx - 6} y={56} scale={0.55} /><Stone x={cx + 3} y={60} r={4} fill={GOLD} /></g>}
          {index === 4 && <g><path d={`M${cx - 18} 46 Q${cx} 84 ${cx + 18} 46 Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${cx - 10} 52 Q${cx} 70 ${cx + 10} 52`} fill="none" stroke={LINE} strokeWidth="2" /><Stone x={cx} y={58} r={4} fill={GOLD} /></g>}
        </g>;
      })}
      <path d={`M${32 + at * 60} 94 H${48 + at * 60} L${40 + at * 60} 104 Z`} fill={GOLD} />
      <TileRow y={118} labels={rows[at]} lit={() => true} height={34} />
      <Caption>{["Symptoms, history and an examination", "A dipstick, and kidney blood tests", "Low-dose CT within 24 hours", "Where it is, its size, how many", "A passed stone can be analysed"][at]}</Caption>
    </svg>} />;
}

function RulerSlide(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const X = (mm: number) => 150 + mm * 14;
  const stone = [[53, 108], [64, 134], [64, 134], null, [46, 79]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Passing a stone" title="Small stones usually find their way" label="Passing a small stone" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A stone travelling down the tube from the kidney to the bladder, beside a ruler in millimetres">
      <Kidney x={52} y={44} scale={0.9} />
      <path d="M47 48 C40 90, 60 130, 76 156" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="84" cy="170" rx="20" ry="13" fill={WHITE} stroke={INK} strokeWidth="3" />
      {stone && <Stone x={stone[0]} y={stone[1]} r={at === 4 ? 7 : 3.5} fill={GOLD} />}
      {at === 4 && <circle cx="46" cy="79" r="13" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      {at === 0 && <>
        <rect x={X(0)} y="70" width={X(5) - X(0)} height="26" fill={TINT} /><rect x={X(7)} y="70" width={X(10) - X(7)} height="26" fill={SOFT} />
        <rect x={X(0)} y="70" width={X(10) - X(0)} height="26" fill="none" stroke={INK} strokeWidth="2" />
        {Array.from({ length: 11 }, (_, mm) => <path key={mm} d={`M${X(mm)} 70 V${mm === 5 || mm === 7 ? 88 : 78}`} stroke={INK} strokeWidth="1.5" />)}
        <W x={X(5)} y={114} size={10.5}>5mm</W><W x={X(7) + 4} y={114} size={10.5}>7mm</W>
        <W x={185} y={60} size={10.5}>Most pass</W><W x={269} y={60} size={10.5}>Rarely</W>
        <Stone x={185} y={146} r={4} /><Stone x={269} y={146} r={11} />
      </>}
      {at === 1 && <>
        <Tumbler x={160} y={96} scale={1.5} full={0.7} /><Pill x={222} y={96} /><Person x={284} y={116} />
        <W x={160} y={146} size={10}>Water</W><W x={222} y={146} size={10}>Painkillers</W><W x={284} y={146} size={10}>Moving</W>
      </>}
      {at === 2 && <>
        <Pill x={224} y={52} /><W x={224} y={86} size={11}>Alpha blockers</W>
        <Tile x={146} y={104} width={156} label="NICE: may be considered" lit={false} size={10} />
        <Tile x={146} y={140} width={156} label="BAUS: no benefit found" lit={false} size={10} />
      </>}
      {at === 3 && <>
        <path d="M176 70 Q222 140 268 70 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <path d="M190 80 Q222 118 254 80 M204 86 Q222 108 240 86" fill="none" stroke={LINE} strokeWidth="2" />
        <path d="M268 70 L296 52" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <Stone x={222} y={94} r={6} fill={GOLD} />
      </>}
      {at === 4 && <>
        {Array.from({ length: 21 }, (_, day) => <rect key={day} x={160 + (day % 7) * 20} y={44 + Math.floor(day / 7) * 22} width="16" height="16" rx="3" fill={day < 14 ? INK : SOFT} />)}
        <W x={230} y={134} size={11}>2 to 3 weeks</W>
      </>}
      <Caption>{["Under 5mm usually pass by themselves", "Water, painkillers, keep moving", "Alpha blockers: the advice differs", "Catch the stone so it can be tested", "Not passed in 2 to 3 weeks: treatment"][at]}</Caption>
    </svg>} />;
}

function ThreeRoutes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const show = (index: number) => at === index + 1 ? 1 : at === 0 ? 0.35 : 0;
  const [ex, ey] = polar(220, 42, 84, 45);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Treatments" title="Shock waves, lasers and keyholes" label="Treatments for larger stones" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A stone in a kidney reached by shock waves, a telescope from below, keyhole surgery, or a stent">
      <Tags x={12} y={34} labels={["Shock waves", "Telescope", "Keyhole", "Stent"]} lit={index => index === at - 1} width={92} gap={36} />
      {at === 4 && <path d="M208 48 C206 80, 192 96, 188 116" fill="none" stroke={GOLD} strokeWidth="9" strokeLinecap="round" />}
      <Tract x={176} y={40} lit={at === 0 ? ["right"] : []} />
      {at === 4 && <path d="M208 48 C206 80, 192 96, 188 116" fill="none" stroke={WHITE} strokeWidth="2" strokeDasharray="4 4" />}
      <Stone x={220} y={42} r={6} fill={GOLD} />
      <g opacity={show(0)}>
        {[40, 54, 68].map(r => { const [x0, y0] = polar(220, 42, r, 25), [x1, y1] = polar(220, 42, r, 65); return <path key={r} d={`M${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1}`} fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" className={still || at !== 1 ? undefined : "lib-why-pulse"} />; })}
        <circle cx={ex} cy={ey} r="10" fill={INK} />
      </g>
      <g opacity={show(1)}>
        <path d="M176 166 V140 L188 116 C192 96, 206 80, 210 50" fill="none" stroke={GOLD} strokeWidth="4" strokeDasharray="6 4" strokeLinecap="round" className={still || at !== 2 ? undefined : "lib-types-flow"} />
      </g>
      <g opacity={show(2)}>
        <path d="M300 14 L228 38" stroke={GOLD} strokeWidth="5" strokeLinecap="round" /><circle cx="300" cy="14" r="5" fill={INK} />
      </g>
      <Caption>{["Size and position guide the choice", "Shock waves break it into pieces", "A telescope and laser, from below", "Keyhole surgery for large stones", "Stents and drains keep urine flowing"][at]}</Caption>
    </svg>} />;
}

function ReliefCurve(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const early = at === 0 || at === 4;
  const rows: string[][] = [["Injection", "Suppository", "Tablet"], ["NSAID first", "Paracetamol", "Then opioid"], ["500mg tablets", "4 hours apart", "8 in 24 hours"], ["Asthma", "Stomach ulcer", "Kidney disease"], ["Start early", "Urgent GP", "NHS 111"]];
  const lit = [() => false, (index: number) => index === 0, (index: number) => index === 2, () => false, (index: number) => index > 0][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pain relief" title="Relief comes first" label="Pain relief for kidney stones" credit="Illustration: Rehyn. Check doses with a pharmacist or doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A line of pain over time, kept low when painkillers are started early">
      <path d="M30 30 V112 H296" fill="none" stroke={LINE} strokeWidth="3" />
      <W x={38} y={40} size={10} anchor="start">Pain</W><W x={296} y={126} size={10} anchor="end">Time</W>
      <path d="M30 108 C80 108, 110 40, 150 38 C190 36, 220 70, 296 100" fill="none" stroke={early ? LINE : INK} strokeWidth="3" strokeDasharray={early ? "6 5" : undefined} />
      {early && <><path d="M30 108 C70 108, 80 84, 100 84 C130 84, 160 104, 296 108" fill="none" stroke={INK} strokeWidth="4" />
        <path d="M84 110 V62" stroke={GOLD} strokeWidth="3" strokeDasharray="4 4" /><Pill x={84} y={52} fill={GOLD} /></>}
      {at === 3 && <><Pill x={220} y={70} /><Cross x={220} y={70} color={GOLD} size={1.8} /></>}
      <TileRow y={136} labels={rows[at]} lit={lit} height={34} />
      <Caption>{["Colic pain can be relieved", "An NSAID first, NICE advises", "Paracetamol: no more than 8 in 24h", "NSAIDs do not suit everyone", "Severe pain: urgent GP or NHS 111"][at]}</Caption>
    </svg>} />;
}

function HelpSigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [[0], [1], [2], [0, 1], [1]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Urgent help" title="Pain with fever is an emergency" label="When to get urgent help" credit={urgentCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three places to get help: an urgent GP or NHS 111, A&E, and 999">
      <TileRow y={22} labels={["GP or NHS 111", "A&E", "999"]} lit={index => lit.includes(index)} height={34} size={10.5} />
      {at === 0 && <>
        <Tile x={30} y={96} width={124} label="Severe pain" lit={false} />
        <Tile x={166} y={96} width={124} label="High temperature" lit={false} />
        <W x={160} y={160} size={10.5}>Or 111 online</W>
      </>}
      {at === 1 && <>
        <Kidney x={116} y={118} scale={1} stroke={GOLD} fill={TINT} /><Stone x={118} y={126} r={6} fill={GOLD} />
        <Thermo x={200} y={124} />
        <W x={160} y={180} size={10.5}>Blocked and infected</W>
      </>}
      {at === 2 && <>
        <Car x={100} y={112} /><Cross x={100} y={104} color={GOLD} size={2.2} />
        <W x={100} y={156} size={10.5}>Do not drive</W>
        <Tile x={182} y={90} width={116} height={34} label="Call 999" lit />
        <W x={240} y={156} size={10}>Ask for an ambulance</W>
      </>}
      {at === 3 && <>
        <Tile x={20} y={84} width={136} label="High temperature" lit={false} size={10} />
        <Tile x={164} y={84} width={136} label="Pain peeing" lit={false} size={10} />
        <Tile x={20} y={124} width={136} label="Cannot pee" lit={false} size={10} />
        <Tile x={164} y={124} width={136} label="More bleeding" lit={false} size={10} />
      </>}
      {at === 4 && <>
        <TileRow y={96} labels={["One kidney", "Lower function", "Both ureters"]} />
        <W x={160} y={160} size={10.5}>A fever should not be ignored</W>
      </>}
      <Caption>{["Severe pain or fever: GP or NHS 111", "Side pain and fever: go to A&E", "Sepsis signs: 999; do not drive", "After treatment: call doctor at once", "Some need hospital care urgently"][at]}</Caption>
    </svg>} />;
}

function DayGlasses(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fluids" title="Pale pee, all day long" label="Drinking enough" credit="Illustration: Rehyn. Amounts are the NHS and NICE guide for adults."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Glasses of water spread across the day, and pee colours from dark to pale">
      {Array.from({ length: 7 }, (_, index) => <Tumbler key={index} x={40 + index * 40} y={128} scale={0.9} full={at === 4 ? 0.95 : 0.7} fill={at === 2 && index === 6 ? GOLD : SOFT} />)}
      <path d="M24 158 H296" stroke={LINE} strokeWidth="3" />
      <W x={40} y={176} size={10}>Morning</W><W x={280} y={176} size={10}>Bedtime</W>
      {at === 0 && <><W x={160} y={60} size={18}>2.5 to 3 litres</W><W x={160} y={84} size={10.5}>of water a day, for adults</W></>}
      {at === 1 && <>
        {[INK, SOFT, LINE, TINT, WHITE].map((fill, index) => <rect key={index} x={50 + index * 46} y="34" width="40" height="30" rx="6" fill={fill} stroke={INK} strokeWidth="2" />)}
        <path d="M246 22 H262 L254 31 Z" fill={GOLD} />
        <W x={96} y={86} size={10}>Dark: drink more</W><W x={234} y={86} size={10}>Aim: colourless</W>
      </>}
      {at === 2 && <><Sun x={40} y={54} /><Moon x={280} y={54} /><W x={160} y={60} size={11}>Steadily, all day</W></>}
      {at === 3 && <>
        <Tap x={96} y={56} /><Tick x={136} y={58} color={GOLD} size={1.4} />
        <rect x="198" y="34" width="26" height="46" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Cross x={244} y={58} color={GOLD} size={1.4} />
      </>}
      {at === 4 && <><Sun x={96} y={54} r={12} /><Person x={200} y={84} /><Drop x={226} y={46} scale={0.7} /><Drop x={234} y={66} scale={0.6} /></>}
      <Caption>{["2.5 to 3 litres of water a day", "Aim for pale, colourless pee", "Sip steadily, and a glass at bedtime", "Tap water is best; go easy on fizzy", "Drink more when hot, active or ill"][at]}</Caption>
    </svg>} />;
}

function PlateSalt(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Food" title="Keep the calcium, cut the salt" label="Food and kidney stones" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate with calcium kept, salt cut down, and supplements to avoid">
      <g opacity={at === 0 ? 0.4 : 1}><circle cx="90" cy="102" r="68" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="90" cy="102" r="52" fill="none" stroke={LINE} strokeWidth="2" /></g>
      {at === 0 && <Tumbler x={90} y={102} scale={2} full={0.8} />}
      {at === 1 && <><path d="M74 84 L82 70 H98 L106 84 V128 H74 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><W x={90} y={112} size={10}>Milk</W><Tick x={126} y={70} color={GOLD} size={1.4} /></>}
      {at === 2 && <><SaltShaker x={90} y={96} /><Cross x={90} y={96} color={GOLD} size={2} /><W x={90} y={146} size={10.5}>6g a day</W></>}
      {at === 3 && <><ellipse cx="78" cy="94" rx="22" ry="14" fill={SOFT} stroke={INK} strokeWidth="2" /><rect x="100" y="104" width="12" height="12" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="104" y="90" width="12" height="12" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={90} y={140} size={10.5}>Less</W></>}
      {at === 4 && <><rect x="72" y="72" width="36" height="48" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="76" y="64" width="28" height="10" rx="3" fill={SOFT} /><Cross x={90} y={98} color={GOLD} size={2.4} /><W x={90} y={142} size={10}>Vitamin C</W></>}
      <g opacity={at === 0 ? 0.45 : 1}><Tags x={182} y={30} labels={["Calcium", "Salt", "Protein, sugar", "Supplements"]} lit={index => index === at - 1} width={124} gap={38} /></g>
      <Caption>{["Drinking matters most; then diet", "Keep calcium: 700mg a day for adults", "No more than 6g of salt a day", "Less animal protein and sugar", "Skip high-dose vitamin C pills"][at]}</Caption>
    </svg>} />;
}

function HalfRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tags: string[][] = [[], ["Dilute pee", "Less salt", "Normal calcium", "Less protein"], ["Uric acid", "Struvite", "Cystine"], ["Potassium citrate", "Sodium bicarbonate", "Thiazides"], ["Tap water is best", "No softener needed", "Move more"]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Coming back" title="Lowering the chance of another stone" label="Stopping stones coming back" credit="Illustration: Rehyn. 50% within 10 years is the BAUS figure."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ring half filled for a 50% chance of another stone, and what lowers it">
      <circle cx="88" cy="98" r="54" fill="none" stroke={LINE} strokeWidth="16" />
      <path d="M88 44 A54 54 0 0 1 88 152" fill="none" stroke={at === 0 ? GOLD : INK} strokeWidth="16" />
      {at === 0 && <><W x={88} y={105} size={20}>50%</W><W x={88} y={180} size={10.5}>within 10 years</W>
        {Array.from({ length: 10 }, (_, year) => <rect key={year} x={180 + (year % 5) * 24} y={year < 5 ? 66 : 92} width="20" height="20" rx="4" fill={TINT} stroke={INK} strokeWidth="1.5" />)}
        <W x={236} y={136} size={11}>10 years</W></>}
      {at === 1 && <Tumbler x={88} y={98} scale={1.4} full={0.8} fill={TINT} />}
      {at === 2 && <Stone x={88} y={98} r={16} />}
      {at === 3 && <Pill x={88} y={98} />}
      {at === 4 && <Tap x={86} y={96} />}
      {at > 0 && <Tags x={172} y={tags[at].length === 4 ? 34 : 50} labels={tags[at]} lit={() => true} width={134} gap={38} />}
      <Caption>{["A 50% chance of another in 10 years", "Dilute pee: almost a third lower risk", "Advice depends on the stone type", "Medicines if the risk is high", "Softeners do not help; move more"][at]}</Caption>
    </svg>} />;
}

function FollowLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows: string[][] = [["Outpatients", "X-rays", "More if left"], ["Kidney function", "Calcium", "Uric acid"], ["Stone analysis", "24-hour urine"], ["Out in 1 to 2 weeks", "Chase at 4 to 6 weeks"], ["Food and drink", "Specialist, if needed"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Follow-up" title="After the stone has gone" label="Follow-up and tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five follow-up steps: an X-ray, blood tests, testing the stone, the stent and advice">
      <path d="M40 62 H280" stroke={LINE} strokeWidth="3" />
      {[0, 1, 2, 3, 4].map(index => {
        const cx = 40 + index * 60, on = at === index;
        return <g key={index}>
          <circle cx={cx} cy="62" r="22" fill={on ? TINT : WHITE} stroke={on ? GOLD : INK} strokeWidth={on ? 4 : 2.5} />
          {index === 0 && <><Kidney x={cx - 3} y={62} scale={0.38} /><Tick x={cx + 9} y={52} size={0.6} color={GOLD} /></>}
          {index === 1 && <Tube x={cx} y={64} scale={0.6} />}
          {index === 2 && <Stone x={cx} y={62} r={8} fill={GOLD} />}
          {index === 3 && <path d={`M${cx} 46 C${cx - 8} 46, ${cx - 8} 54, ${cx} 54 V70 C${cx + 8} 70, ${cx + 8} 78, ${cx} 78`} fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />}
          {index === 4 && <Tick x={cx} y={62} size={1.2} />}
          <W x={cx} y={104} size={10}>{["X-ray", "Blood", "Stone", "Stent", "Advice"][index]}</W>
        </g>;
      })}
      <TileRow y={128} labels={rows[at]} lit={() => true} height={32} size={rows[at].length === 3 ? 9.5 : 10} />
      <Caption>{["X-rays check the stone has cleared", "Blood tests look for a cause", "Stone and urine tests, if needed", "No stent date in 4 to 6 weeks? Ask", "Advice to lower the risk of more"][at]}</Caption>
    </svg>} />;
}

// ==== Acute kidney injury ====================================================================================

function DipLine(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A sudden dip, not a blow" label="What acute kidney injury is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two kidneys, and a line of kidney function that drops suddenly and then climbs back">
      <Kidney x={52} y={92} scale={0.85} flip fill={at === 2 ? TINT : WHITE} /><Kidney x={96} y={92} scale={0.85} fill={at === 2 ? TINT : WHITE} />
      {(at === 0 || at === 3) && <>
        <path d="M150 40 V150 H300" fill="none" stroke={LINE} strokeWidth="3" />
        <W x={156} y={34} size={10} anchor="start">Kidney function</W>
      </>}
      {at === 0 && <><path d="M150 64 H205 L222 128" fill="none" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
        <circle cx="222" cy="128" r="7" fill={GOLD} className={still ? undefined : "lib-why-pulse"} /></>}
      {at === 3 && <>
        <path d="M150 64 H195 L210 128 H226" fill="none" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
        <path d="M226 128 C246 128, 256 66, 296 64" fill="none" stroke={GOLD} strokeWidth="4" strokeDasharray="7 5" />
        <path d="M150 96 C200 104, 250 112, 296 120" fill="none" stroke={SOFT} strokeWidth="3" />
        <W x={296} y={54} size={10.5} anchor="end">AKI</W><W x={296} y={140} size={10.5} anchor="end">CKD</W>
      </>}
      {at === 1 && <Tags x={150} y={60} labels={["Acute: recent", "Injury: lost function"]} lit={() => true} width={154} gap={44} />}
      {at === 2 && <Tags x={150} y={44} labels={["Filter waste", "Blood pressure", "Fluid, minerals"]} lit={() => true} width={154} gap={40} />}
      <Caption>{["A sudden drop in how kidneys work", "Acute means recent, not always severe", "Kidneys filter and balance fluids", "Usually temporary, unlike CKD"][at]}</Caption>
    </svg>} />;
}

function FourArrows(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const tiles = [{ x: 14, y: 26, t: "Infection" }, { x: 190, y: 26, t: "Dehydration" }, { x: 14, y: 150, t: "Medicines, dye" }, { x: 190, y: 150, t: "Blockage, surgery" }];
  const lines = ["M130 56 L144 80", "M190 56 L178 78", "M130 150 L144 128", "M190 150 L178 130"];
  const lit = (index: number) => at === 0 || (at === 1 && index < 2) || (at === 2 && index === 2) || (at === 3 && index === 3);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="Infection, fluids, medicines and blockages" label="Causes of AKI" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A kidney with four kinds of cause pointing at it: infection, dehydration, medicines and blockages">
      {lines.map((d, index) => <path key={d} d={d} stroke={lit(index) ? INK : LINE} strokeWidth="3" strokeDasharray={at === 0 ? "6 5" : undefined} className={at === 0 && !still ? "lib-types-flow" : undefined} />)}
      <Kidney x={152} y={104} scale={1.1} fill={TINT} />
      {tiles.map((tile, index) => <Tile key={tile.t} x={tile.x} y={tile.y} width={116} height={30} label={tile.t} lit={lit(index)} />)}
      {at === 1 && <><Thermo x={60} y={108} scale={0.9} /><Drop x={262} y={106} scale={1.6} /></>}
      {at === 2 && <><Pill x={66} y={104} /><W x={262} y={110} size={10.5}>Scan dye</W></>}
      {at === 3 && <><Stone x={66} y={104} r={11} /><W x={262} y={110} size={10.5}>Operations</W></>}
      <Caption>{["Often more than one cause", "Infection, dehydration, blood loss", "Some medicines, and scan dye", "Blockages, and some operations"][at]}</Caption>
    </svg>} />;
}

function PeopleRow(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Who gets it" title="Anyone can get it, some more often" label="Who is more likely to get AKI" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="People of all ages, the things that raise the chance of AKI, and a carer bringing a drink">
      {at === 0 && <>
        <W x={160} y={50} size={11}>13 to 18 in 100 hospital admissions</W>
        {[0.8, 1, 0.9, 1.1, 0.85, 1, 0.95].map((scale, index) => <Person key={index} x={34 + index * 42} y={140} scale={scale} fill={index === 3 || index === 5 ? INK : SOFT} />)}
      </>}
      {at === 1 && <><Person x={76} y={130} scale={1.6} /><Tags x={150} y={30} labels={["65 or older", "AKI before", "Recent surgery", "CKD, heart failure"]} lit={() => true} width={156} gap={36} /></>}
      {at === 2 && <>
        <Kidney x={56} y={104} scale={1} fill={TINT} stroke={SOFT} />
        <W x={122} y={112} size={22}>+</W>
        <Thermo x={170} y={104} />
        <W x={212} y={112} size={22}>=</W>
        <Tile x={234} y={88} width={74} height={34} label="More risk" lit size={10} />
      </>}
      {at === 3 && <>
        <Person x={96} y={140} scale={1.3} fill={SOFT} />
        <Tumbler x={152} y={124} scale={1.1} full={0.8} fill={TINT} />
        <Person x={214} y={140} scale={1.6} />
        <W x={160} y={180} size={10.5}>Drinks within reach</W>
      </>}
      <Caption>{["Anyone, but more often older adults", "Age 65+, past AKI, recent surgery", "Kidneys already weaker: higher risk", "Help to keep drinks within reach"][at]}</Caption>
    </svg>} />;
}

function CreatinineTube(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Signs" title="Often silent, found by a blood test" label="Signs of AKI and how it is found" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A blood tube for creatinine, the signs that can happen, and where to get help">
      {at === 0 && <><Person x={100} y={140} scale={1.8} fill={SOFT} /><Tube x={214} y={96} scale={1.4} /><W x={214} y={152} size={10.5}>Found on tests</W></>}
      {at === 1 && <>
        <TileRow y={36} labels={["Peeing less", "Very thirsty"]} lit={index => index === 0} />
        <TileRow y={78} labels={["Feeling sick", "Swollen legs"]} />
        <TileRow y={120} labels={["Tired, dizzy", "Breathless"]} />
      </>}
      {at === 2 && <>
        <Tube x={64} y={96} scale={1.4} /><W x={64} y={152} size={10.5}>Creatinine</W>
        <path d="M130 140 H300" stroke={LINE} strokeWidth="3" />
        {[30, 54, 84].map((height, index) => <rect key={index} x={150 + index * 50} y={140 - height} width="30" height={height} rx="4" fill={index === 2 ? GOLD : INK} />)}
        <W x={215} y={166} size={10.5}>A rise within 48 hours</W>
      </>}
      {at === 3 && <>
        <Tile x={14} y={30} width={140} height={36} label="Urgent GP or 111" lit={false} />
        <Tile x={166} y={30} width={140} height={36} label="Sepsis signs: 999" lit />
        <TileRow y={94} labels={["Fast breathing", "Confused"]} />
        <TileRow y={134} labels={["Blotchy skin", "Rash that won't fade"]} />
      </>}
      <Caption>{["Often no symptoms; found on tests", "Less pee, thirst, sickness, swelling", "A creatinine blood test finds it", "Urgent GP or 111; sepsis signs: 999"][at]}</Caption>
    </svg>} />;
}

function BedKit(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const dim = (index: number) => at === index ? 1 : 0.35;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatment" title="Find the cause, treat it fast" label="Treatment in hospital" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hospital bed with a drip, a catheter bag, a scan probe and a dialysis machine">
      <path d="M70 104 V172 M80 142 V172 M240 142 V172" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <rect x="70" y="128" width="180" height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <circle cx="92" cy="116" r="10" fill={SOFT} /><rect x="104" y="108" width="130" height="20" rx="10" fill={SOFT} />
      <g opacity={dim(1)}>
        <path d="M40 40 V172 M28 172 H52 M40 40 H56" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <rect x="46" y="44" width="20" height="30" rx="5" fill={at === 1 ? GOLD : TINT} stroke={INK} strokeWidth="2" />
        <path d="M56 74 C58 100, 90 104, 120 114" fill="none" stroke={at === 1 ? GOLD : LINE} strokeWidth="2.5" />
      </g>
      <g opacity={dim(2)}>
        <path d="M226 124 C240 130, 262 136, 270 150" fill="none" stroke={at === 2 ? GOLD : LINE} strokeWidth="2.5" />
        <rect x="258" y="150" width="26" height="32" rx="6" fill={at === 2 ? GOLD : TINT} stroke={INK} strokeWidth="2" />
      </g>
      {at === 0 && <><circle cx="160" cy="52" r="24" fill={WHITE} stroke={INK} strokeWidth="3" /><Kidney x={154} y={52} scale={0.55} fill={TINT} /><path d="M177 69 L192 84" stroke={INK} strokeWidth="5" strokeLinecap="round" /></>}
      {at === 3 && <><path d="M174 66 L194 86 L188 92 L168 72 Z" fill={INK} />
        {[10, 18].map(r => <path key={r} d={`M${190 - r} ${96 + r * 0.4} A${r} ${r} 0 0 0 ${196 + r * 0.4} ${90 - r * 0.2}`} fill="none" stroke={GOLD} strokeWidth="2.5" className={still ? undefined : "lib-why-pulse"} />)}</>}
      <g opacity={dim(4)}>
        <rect x="262" y="34" width="44" height="74" rx="6" fill={at === 4 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <rect x="270" y="42" width="28" height="18" rx="2" fill={TINT} />
        <path d="M270 108 C262 118, 244 118, 228 114" fill="none" stroke={at === 4 ? GOLD : LINE} strokeWidth="2.5" />
      </g>
      <Caption>{["Treat the cause; often by the GP", "Fluids by drip, if very dehydrated", "Fluid in and out is measured", "A scan can show a blockage", "Dialysis, if waste or fluid builds up"][at]}</Caption>
    </svg>} />;
}

function PauseOrganiser(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const labels = ["Ibuprofen", "ACE / ARB", "Diuretic", "Metformin", "SGLT2", "Tolvaptan"];
  const paused = [[0, 1], [1, 2, 3, 4, 5], [4], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Pause, recover, then restart" label="Medicines that may be paused" credit="Illustration: Rehyn. Only pause a medicine if your own team says so."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pill organiser with some medicines paused, and a clock for restarting">
      {labels.map((label, index) => {
        const off = paused.includes(index), x = 14 + (index % 3) * 98, y = index < 3 ? 30 : 82;
        return <g key={label}>
          <rect x={x} y={y} width="90" height="44" rx="8" fill={off ? TINT : WHITE} stroke={off ? SOFT : INK} strokeWidth="2.5" strokeDasharray={off ? "6 5" : undefined} />
          <W x={x + 45} y={y + 26} size={10.5} fill={off ? SOFT : TEXT}>{label}</W>
        </g>;
      })}
      {at === 0 && <><Person x={64} y={176} scale={0.8} /><W x={88} y={168} size={10.5} anchor="start">Tell them all you take</W></>}
      {at === 1 && <W x={160} y={164} size={10.5}>For a while, on your doctor's advice</W>}
      {at === 2 && <><Clock x={110} y={160} r={18} hand={Math.PI / 2} /><W x={138} y={165} size={10.5} anchor="start">Well for two days</W></>}
      {at === 3 && <><path d="M96 160 A14 14 0 1 0 110 146" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" /><Head x={112} y={146} angle={0} color={GOLD} />
        <W x={134} y={165} size={10.5} anchor="start">Check with your team first</W></>}
      <Caption>{["Some medicines can make AKI worse", "Your doctor may pause some for a while", "SGLT2s back once well for two days", "Check before restarting any medicine"][at]}</Caption>
    </svg>} />;
}

function RecoveryRuler(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Recovery" title="Weeks for most, months for some" label="Recovery after AKI" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from days to months, with a person getting stronger along it">
      <path d="M30 150 H290" stroke={INK} strokeWidth="3" />
      {[30, 160, 290].map(x => <path key={x} d={`M${x} 144 V156`} stroke={INK} strokeWidth="3" />)}
      <W x={30} y={174} size={10.5}>Days</W><W x={160} y={174} size={10.5}>Weeks</W><W x={290} y={174} size={10.5} anchor="end">Months</W>
      {at === 0 && <><Person x={160} y={128} scale={1.1} /><Tick x={160} y={68} color={GOLD} size={2} /></>}
      {at === 1 && <TileRow y={60} labels={["The cause", "How severe", "Other health"]} lit={() => true} height={34} />}
      {at === 2 && <><Person x={60} y={134} scale={0.8} fill={LINE} /><Person x={160} y={134} scale={1} fill={SOFT} /><Person x={260} y={134} scale={1.25} /></>}
      {at === 3 && <>
        <path d="M200 150 C210 120, 230 100, 254 84" fill="none" stroke={SOFT} strokeWidth="3" strokeDasharray="6 5" />
        <Tile x={222} y={50} width={76} height={32} label="CKD" lit />
        <W x={100} y={84} size={10.5}>Often managed with lifestyle</W>
      </>}
      <Caption>{["Most make a full recovery", "Depends on cause and severity", "Strength can take time to return", "Sometimes it leads to CKD"][at]}</Caption>
    </svg>} />;
}

function WeekGrid(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const machine = <g>
    <rect x="200" y="50" width="76" height="96" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
    <rect x="212" y="62" width="52" height="28" rx="3" fill={TINT} />
    {[106, 124].map(y => <circle key={y} cx="238" cy={y} r="6" fill={SOFT} />)}
  </g>;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Dialysis" title="A machine that stands in briefly" label="Dialysis for AKI" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A dialysis machine doing the kidneys' job for a few weeks">
      {at === 0 && <>
        <Kidney x={64} y={98} scale={1.1} fill={TINT} stroke={SOFT} />
        {machine}
        <path d="M112 88 H190" stroke={INK} strokeWidth="3" strokeDasharray="6 6" className={still ? undefined : "lib-types-flow"} /><Head x={192} y={88} angle={0} />
        <path d="M190 112 H112" stroke={INK} strokeWidth="3" strokeDasharray="6 6" className={still ? undefined : "lib-types-flow"} /><Head x={110} y={112} angle={180} />
      </>}
      {at === 1 && <>
        {Array.from({ length: 52 }, (_, week) => <rect key={week} x={30 + (week % 13) * 20} y={40 + Math.floor(week / 13) * 20} width="16" height="16" rx="3" fill={week < 3 ? INK : WHITE} stroke={week < 3 ? INK : LINE} strokeWidth="1.5" />)}
        <path d="M30 132 H86" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <W x={30} y={154} size={11} anchor="start">Days or weeks</W>
      </>}
      {at === 2 && <>
        <Person x={70} y={130} scale={1.3} />
        {machine}
        <path d="M92 104 C120 72, 168 72, 198 84" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" className={still ? undefined : "lib-types-flow"} />
        <path d="M198 128 C168 146, 120 146, 92 120" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" className={still ? undefined : "lib-types-flow"} />
        <W x={238} y={168} size={10.5}>Haemodialysis</W>
      </>}
      {at === 3 && <><Person x={90} y={140} scale={1.6} fill={SOFT} /><Tags x={170} y={46} labels={["Tired", "Feeling sick", "Cramps, dizzy"]} lit={() => false} width={130} gap={38} /></>}
      <Caption>{["Does the kidneys' job as they recover", "Usually just days or weeks", "Blood cleaned through a machine", "Tired or crampy? Tell your team"][at]}</Caption>
    </svg>} />;
}

function SipGlass(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sick days" title="Small sips and a sick day plan" label="Sick days and fluids" credit="Illustration: Rehyn. Follow your own team's sick day advice."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A glass with small sips marked, a rehydration sachet, and when to get help">
      {at === 0 && <>
        <Thermo x={64} y={100} />
        <Person x={160} y={140} scale={1.5} fill={SOFT} />
        {[[204, 76], [216, 104], [206, 132]].map(([x, y]) => <Drop key={`${x}${y}`} x={x} y={y} scale={0.9} />)}
        <Tile x={234} y={92} width={74} height={30} label="48 hours" lit={false} size={10} />
      </>}
      {at === 1 && <>
        <Tumbler x={100} y={104} scale={2.4} full={0.75} />
        {[80, 98, 116].map(y => <path key={y} d={`M124 ${y} H136`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />)}
        <rect x="200" y="64" width="60" height="70" rx="6" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M200 78 H260" stroke={INK} strokeWidth="2" />
        <W x={230} y={160} size={10.5}>Rehydration</W>
      </>}
      {at === 2 && <>
        <Person x={76} y={140} scale={1.4} />
        <Bubble x={196} y={50} text="Ask your kidney team" width={150} />
        <Tumbler x={236} y={132} scale={1.6} full={0.5} />
        <path d="M212 124 H262" stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" />
      </>}
      {at === 3 && <>
        <TileRow y={30} labels={["Dark pee", "Dizzy", "Very tired"]} />
        <Tile x={14} y={92} width={140} height={34} label="Urgent GP or 111" lit />
        <Tile x={166} y={92} width={140} height={34} label="999" lit />
        <W x={236} y={150} size={10}>Blotchy skin, breathless</W>
        <W x={84} y={150} size={10}>Not keeping fluid down</W>
      </>}
      <Caption>{["Sickness and fever can dehydrate", "Small sips first, then drink more", "Told to limit fluids? Check first", "Dark pee or dizzy: urgent GP or 111"][at]}</Caption>
    </svg>} />;
}

function ThreeYears(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const X = (v: number) => 130 + v * 1.4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Checks" title="Checks that carry on for years" label="Kidney checks after an AKI" credit="Illustration: Rehyn. Your GP sets the dates."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three years of kidney checks, a creatinine test, a urine test and results on a phone">
      {at === 0 && <>
        {[0, 1, 2].map(year => <g key={year}>
          <W x={18} y={52 + year * 36} size={10.5} anchor="start">{`Year ${year + 1}`}</W>
          {Array.from({ length: 12 }, (_, month) => <rect key={month} x={70 + month * 19} y={40 + year * 36} width="14" height="16" rx="3" fill={month === 2 || month === 8 ? INK : WHITE} stroke={month === 2 || month === 8 ? INK : LINE} strokeWidth="1.5" />)}
        </g>)}
        <W x={160} y={164} size={10.5}>Kidney function and blood pressure</W>
      </>}
      {at === 1 && <>
        <Tube x={60} y={92} scale={1.3} /><W x={60} y={146} size={10.5}>Creatinine</W>
        <rect x={X(0)} y="80" width={X(30) - X(0)} height="26" fill={SOFT} />
        <rect x={X(0)} y="80" width={X(120) - X(0)} height="26" fill="none" stroke={INK} strokeWidth="2" />
        <path d={`M${X(30)} 80 V106`} stroke={INK} strokeWidth="2" />
        <W x={X(30)} y={72} size={10}>30</W><W x={X(75)} y={98} size={10}>eGFR</W>
        <W x={215} y={140} size={10}>30 or less: a specialist?</W>
      </>}
      {at === 2 && <>
        <rect x="70" y="76" width="40" height="54" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="66" y="66" width="48" height="12" rx="3" fill={SOFT} />
        <path d="M74 108 H106 V124 C106 128, 74 128, 74 124 Z" fill={GOLD} />
        {Array.from({ length: 35 }, (_, day) => <rect key={day} x={160 + (day % 7) * 15} y={50 + Math.floor(day / 7) * 15} width="12" height="12" rx="2" fill={day === 34 ? GOLD : WHITE} stroke={day === 34 ? INK : LINE} strokeWidth="1.2" />)}
        <W x={212} y={150} size={10.5}>About a month later</W>
      </>}
      {at === 3 && <>
        <Phone x={100} y={100} scale={1.6} /><W x={100} y={160} size={10.5}>NHS App</W>
        <Bubble x={226} y={74} text="Ask about results" width={130} />
      </>}
      <Caption>{["Kidney checks for at least 3 years", "Creatinine is checked after an AKI", "If a UTI caused it: urine test later", "Results in the NHS App; ask if unsure"][at]}</Caption>
    </svg>} />;
}

function Counter(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const boxes = ["Ibuprofen", "Naproxen", "Diclofenac", "Gel", "Cold remedy", "Paracetamol"];
  const lit = (index: number) => (at === 0 && index < 3) || (at === 1 && (index === 3 || index === 4)) || (at === 2 && index === 5);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Painkillers" title="Ask before you reach for ibuprofen" label="Painkillers and the kidneys" credit="Illustration: Rehyn. Ask a pharmacist before starting a painkiller."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pharmacy shelf of painkillers, and a pharmacist to ask">
      <rect x="8" y="30" width="218" height="124" rx="6" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M8 92 H226" stroke={INK} strokeWidth="3" />
      {boxes.map((label, index) => {
        const x = 14 + (index % 3) * 70, y = index < 3 ? 40 : 102;
        return <g key={label}>
          <rect x={x} y={y} width="66" height="44" rx="5" fill={lit(index) ? INK : TINT} stroke={INK} strokeWidth="2" />
          <W x={x + 33} y={y + 26} size={9.5} fill={lit(index) ? WHITE : TEXT}>{label}</W>
        </g>;
      })}
      {at === 1 && [84, 154].map(x => <circle key={x} cx={x + 60} cy="102" r="9" fill={GOLD} />)}
      {at === 1 && [84, 154].map(x => <Cross key={x} x={x + 60} y={102} color={WHITE} size={0.7} />)}
      {at === 2 && <><circle cx="214" cy="102" r="10" fill={GOLD} /><Tick x={214} y={102} color={WHITE} size={0.8} /></>}
      {at === 0 && <Kidney x={262} y={56} scale={0.8} stroke={GOLD} fill={TINT} />}
      <Person x={270} y={124} scale={1.3} fill={at === 3 ? INK : SOFT} />
      <rect x="234" y="140" width="72" height="34" rx="4" fill={TINT} stroke={INK} strokeWidth="2" />
      {at === 3 && <Bubble x={262} y={38} text="Kidneys?" width={84} />}
      <Caption>{["NSAIDs can cut blood flow to kidneys", "Best avoided with kidney disease", "Paracetamol at standard doses", "Tell the pharmacist about your kidneys"][at]}</Caption>
    </svg>} />;
}

function PlanCard(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const rows = ["Warning signs", "Fluids", "Medicines, scans", "Painkillers"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Next time" title="Your plan for next time" label="Lowering the chance of another" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plan card with warning signs, fluids, medicines and painkillers, one ticked at a time">
      <Card x={14} y={22} width={180} height={164}>
        <W x={30} y={46} size={11} anchor="start">My plan</W>
        {rows.map((label, index) => {
          const on = index === at, y = 76 + index * 30;
          return <g key={label}>
            <rect x="28" y={y - 13} width="16" height="16" rx="3" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
            {on && <Tick x={36} y={y - 5} color={WHITE} size={0.7} />}
            <W x={54} y={y} size={10.5} anchor="start" fill={on ? TEXT : SOFT}>{label}</W>
          </g>;
        })}
      </Card>
      {at === 0 && <><Tile x={210} y={50} width={96} height={32} label="After 1 day" lit /><Tile x={210} y={98} width={96} height={32} label="Not 3 or 4" lit={false} /></>}
      {at === 1 && <><Tumbler x={252} y={104} scale={1.6} full={0.75} /><Sun x={284} y={50} /></>}
      {at === 2 && <><circle cx="256" cy="80" r="26" fill="none" stroke={INK} strokeWidth="8" /><path d="M222 90 H290" stroke={SOFT} strokeWidth="6" strokeLinecap="round" /><Pill x={256} y={146} /></>}
      {at === 3 && <><Pill x={256} y={80} /><W x={256} y={120} size={10}>Follow the dose</W></>}
      <Caption>{["Ask which warning signs to watch for", "Keep pee pale; ask about medicines", "Tell the hospital before a CT scan", "Follow painkiller instructions"][at]}</Caption>
    </svg>} />;
}

// ==== Urinary tract infections ===============================================================================

function TractMap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const parts: TractPart[][] = [["kidneys", "bladder", "urethra"], ["bladder"], ["urethra"], ["bladder", "right"], []];
  const tagLit = [[0, 1, 2], [1], [], [0, 1], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="One infection, three possible places" label="What a UTI is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The urinary tract, with the kidneys, bladder and urethra where infections can happen">
      <Tract x={92} y={36} lit={parts[at]} />
      {at === 2 && <>
        <Bug x={84} y={182} rotate={-20} /><Bug x={100} y={176} rotate={30} /><Bug x={92} y={168} rotate={80} />
        <W x={118} y={184} size={10.5} anchor="start">Mostly E coli</W>
      </>}
      {at === 3 && <><path d="M118 112 C126 92, 136 72, 138 52" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" className={still ? undefined : "lib-types-flow"} /><Head x={138} y={50} angle={-85} color={GOLD} /></>}
      {at < 4 && <g opacity={at === 2 ? 0.35 : 1}>
        <path d="M150 36 H182 M118 126 L182 113 M96 154 L182 159" stroke={LINE} strokeWidth="2" />
        <Tile x={182} y={22} width={124} label="Kidney infection" lit={tagLit.includes(0)} />
        <Tile x={182} y={100} width={124} label="Cystitis" lit={tagLit.includes(1)} />
        <Tile x={182} y={146} width={124} label="Urethritis" lit={tagLit.includes(2)} />
      </g>}
      {at === 4 && <>
        <rect x="204" y="40" width="14" height="90" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />
        {[50, 64, 78, 92].map((y, index) => <rect key={y} x="207" y={y} width="8" height="8" fill={[SOFT, GOLD, INK, LINE][index]} />)}
        <rect x="250" y="76" width="40" height="54" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="246" y="66" width="48" height="12" rx="3" fill={SOFT} />
        <path d="M254 108 H286 V124 C286 128, 254 128, 254 124 Z" fill={GOLD} />
        <W x={211} y={152} size={10}>Dipstick</W><W x={270} y={152} size={10}>Mid-stream</W>
      </>}
      <Caption>{["Kidneys, bladder or urethra", "Cystitis: an inflamed bladder lining", "Bacteria from poo, mostly E coli", "Can spread up to the kidneys", "A dipstick or a mid-stream sample"][at]}</Caption>
    </svg>} />;
}

function TwoPanels(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Burning, rushing, and sometimes confusion" label="UTI symptoms" credit={urgentCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The usual signs of a UTI, and how it can show in older people and children">
      {(at === 0 || at === 1) && <>
        <Person x={76} y={140} scale={1.6} />
        {at === 0 && <path d="M18 104 H36 M12 120 H34 M18 136 H36" stroke={SOFT} strokeWidth="3" strokeLinecap="round" />}
        {at === 1 && <circle cx="76" cy="148" r="9" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />}
        <Tags x={156} y={40} labels={at === 0 ? ["Burning when peeing", "Peeing more often", "A sudden urge"] : ["Stinging, burning", "Constant urge", "Ache low down"]} lit={() => true} width={148} gap={40} />
      </>}
      {at === 2 && <>
        <circle cx="70" cy="58" r="20" fill={TINT} stroke={INK} strokeWidth="2" /><W x={70} y={67} size={22}>?</W>
        <Person x={70} y={146} scale={1.5} fill={SOFT} />
        <Person x={156} y={146} scale={1.7} />
        <Tags x={206} y={60} labels={["Confused", "Leaking", "Shivering"]} lit={() => false} width={100} gap={36} />
      </>}
      {at === 3 && <>
        <Person x={60} y={150} scale={1} />
        <Person x={116} y={140} scale={1.5} fill={SOFT} />
        <Thermo x={164} y={110} />
        <Tags x={196} y={40} labels={["Fever", "Wetting", "Being sick", "Not feeding"]} lit={() => false} width={110} gap={36} />
      </>}
      {at === 4 && <>
        <Car x={84} y={76} /><Cross x={84} y={68} color={GOLD} size={2.2} />
        <W x={84} y={120} size={10.5}>Do not drive</W>
        <Tile x={150} y={50} width={150} height={40} label="Call 999 or A&E" lit size={11} />
        <W x={225} y={120} size={10}>Bring your medicines</W>
      </>}
      <Caption>{["Burning, and needing to pee often", "Stinging, and an ache low down", "Older, frail people may get confused", "Children: fever, bedwetting, sickness", "Sudden confusion: call 999 or A&E"][at]}</Caption>
    </svg>} />;
}

function Climb(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Kidney infection" title="When a bladder infection climbs higher" label="Kidney infection" credit={urgentCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An infection climbing from the bladder to a kidney, with its signs, help and treatment">
      <Tract x={80} y={30} lit={at === 0 || at === 1 ? ["right", "bladder"] : []} />
      <path d="M100 108 C112 86, 122 64, 126 46" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" opacity={at === 0 ? 1 : 0.4} className={at === 0 && !still ? "lib-types-flow" : undefined} />
      <Head x={126} y={44} angle={-80} color={GOLD} />
      {at === 0 && <Tags x={166} y={40} labels={["Often after cystitis", "Kidney stones", "Weaker immunity"]} lit={() => false} width={138} gap={38} />}
      {at === 1 && <Tags x={166} y={30} labels={["High temperature", "Back or side pain", "Feeling sick", "Flu-like aches"]} lit={() => true} width={138} gap={36} />}
      {at === 2 && <>
        <Tile x={166} y={40} width={138} height={34} label="Urgent GP or 111" lit={false} />
        <Tile x={166} y={92} width={138} height={34} label="Confused? 999" lit />
        <W x={235} y={150} size={10}>Drowsy, hard to speak</W>
      </>}
      {(at === 3 || at === 4) && <>
        {Array.from({ length: 14 }, (_, day) => <rect key={day} x={172 + (day % 7) * 19} y={90 + Math.floor(day / 7) * 22} width="15" height="15" rx="3" fill={at === 4 || day < 7 ? INK : SOFT} />)}
        {at === 3 ? <Pill x={234} y={58} /> : <Tick x={234} y={58} color={GOLD} size={1.6} />}
        <W x={234} y={152} size={11}>{at === 3 ? "7 to 14 days" : "About 2 weeks"}</W>
      </>}
      <Caption>{["Bacteria move up from the bladder", "Fever, back pain, feeling sick", "Urgent GP or 111; confused: 999", "Antibiotics, usually 7 to 14 days", "Usually better after about 2 weeks"][at]}</Caption>
    </svg>} />;
}

function ShortRoute(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="A short route in for bacteria" label="Why UTIs happen" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Bacteria from the bowel, a shorter and a longer urethra, and the things that raise the risk">
      {at === 0 && <>
        <g fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M40 160 V70 C40 54, 56 48, 70 48 H120 C136 48, 146 58, 146 70 V160" stroke={INK} strokeWidth="20" /><path d="M40 160 V70 C40 54, 56 48, 70 48 H120 C136 48, 146 58, 146 70 V160" stroke={TINT} strokeWidth="13" /></g>
        <Bug x={40} y={96} rotate={90} /><Bug x={92} y={48} /><Bug x={146} y={120} rotate={90} />
        <W x={240} y={70} size={14}>E coli</W>
        <W x={240} y={98} size={10.5}>Up to 77% of bladder</W><W x={240} y={114} size={10.5}>infections in women</W>
      </>}
      {at === 1 && <>
        <rect x="40" y="56" width="80" height="18" rx="9" fill={TINT} stroke={INK} strokeWidth="2.5" /><circle cx="134" cy="65" r="14" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <Bug x={54} y={65} /><Bug x={80} y={65} />
        <W x={80} y={100} size={10.5}>Women: shorter</W>
        <rect x="40" y="122" width="210" height="18" rx="9" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="264" cy="131" r="14" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={145} y={166} size={10.5}>Men: longer</W>
      </>}
      {at === 2 && <>
        <TileRow y={36} labels={["Pregnancy", "Blockages"]} />
        <TileRow y={78} labels={["Catheters", "Not emptying fully"]} />
        <TileRow y={120} labels={["Weaker immunity", "Wiping back to front"]} />
      </>}
      {at === 3 && <>
        <TileRow y={56} labels={["Sex", "Spermicide"]} lit={() => true} />
        <TileRow y={104} labels={["Peeing infrequently", "Not emptying fully"]} />
      </>}
      {at === 4 && <>
        <path d="M30 40 V150 H200" fill="none" stroke={LINE} strokeWidth="3" />
        <path d="M30 60 C90 62, 120 118, 200 126" fill="none" stroke={INK} strokeWidth="4" />
        <path d="M110 44 V150" stroke={SOFT} strokeWidth="2" strokeDasharray="5 4" />
        <W x={36} y={36} size={10.5} anchor="start">Oestrogen</W><W x={110} y={168} size={10.5}>Menopause</W>
        <Tumbler x={262} y={96} scale={1.4} full={0.2} /><W x={262} y={146} size={10}>Drink enough</W>
      </>}
      <Caption>{["Mostly E coli from the bowel", "A shorter urethra in women", "Pregnancy, blockages, catheters", "Sex and spermicide can raise risk", "After the menopause; too few fluids"][at]}</Caption>
    </svg>} />;
}

function Signpost(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const arm = [0, 0, 1, 2, 3][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Where to go" title="Pharmacy, GP, 111 or 999?" label="Pharmacist, GP or 111" credit={urgentCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A signpost to a pharmacy, a GP, NHS 111 and 999">
      <path d="M40 22 V188" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      {["Pharmacy", "GP", "NHS 111", "999"].map((label, index) => {
        const y = 30 + index * 40, on = arm === index;
        return <g key={label}>
          <path d={`M40 ${y} H170 L182 ${y + 14} L170 ${y + 28} H40 Z`} fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
          <W x={105} y={y + 19} size={10.5} fill={on ? WHITE : TEXT}>{label}</W>
        </g>;
      })}
      {at === 0 && <>
        <W x={250} y={50} size={11}>Women 16 to 64</W>
        <rect x="200" y="64" width="100" height="16" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x="216" y="64" width="48" height="16" fill={INK} />
        <W x={216} y={98} size={10}>16</W><W x={264} y={98} size={10}>64</W>
      </>}
      {at === 1 && <>
        <Person x={250} y={118} scale={1.4} />
        <rect x="282" y="40" width="22" height="28" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M286 48 H300 M286 54 H300 M286 60 H296" stroke={SOFT} strokeWidth="2" />
        <W x={250} y={156} size={10.5}>Pharmacist</W>
      </>}
      {at === 2 && <Tags x={196} y={30} labels={["65 or older", "Men", "Pregnant", "No better in 48h"]} lit={() => true} width={110} gap={36} />}
      {at === 3 && <><Phone x={250} y={96} scale={1.4} /><W x={250} y={98} size={12} fill={INK}>111</W><W x={250} y={156} size={10}>Online or call</W></>}
      {at === 4 && <>
        <Car x={250} y={70} /><Cross x={250} y={62} color={GOLD} size={2.2} />
        <W x={250} y={104} size={10.5}>Do not drive</W>
        <W x={250} y={140} size={9.5}>Ask for an ambulance</W>
      </>}
      <Caption>{["Pharmacy First: women aged 16 to 64", "Advice, treatment or a referral", "65+, men, pregnant: urgent GP or 111", "111 online, the app, or call 111", "Confused or drowsy: 999; do not drive"][at]}</Caption>
    </svg>} />;
}

function WaitClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Antibiotics" title="Antibiotics, and easing it yourself" label="Antibiotics and self-care" credit="Illustration: Rehyn. Take antibiotics only as prescribed for you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A 48-hour clock and a back-up prescription, a full course of antibiotics, and self-care">
      {at === 0 && <>
        <Clock x={90} y={90} r={40} hand={Math.PI * 1.5} /><W x={90} y={154} size={11}>48 hours</W>
        <rect x="180" y="60" width="80" height="54" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Pill x={220} y={87} />
        <W x={220} y={136} size={10.5}>Back-up</W>
      </>}
      {at === 1 && <><Pill x={56} y={100} rotate={-30} /><Tags x={110} y={30} labels={["Pregnant women", "Men", "Under 16", "Kidney infection"]} lit={() => true} width={160} gap={38} /></>}
      {at === 2 && <>
        <rect x="30" y="50" width="176" height="76" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {Array.from({ length: 10 }, (_, index) => <circle key={index} cx={54 + (index % 5) * 32} cy={index < 5 ? 72 : 104} r="9" fill={INK} />)}
        <g opacity="0.5"><rect x="236" y="56" width="62" height="40" rx="6" fill={TINT} stroke={INK} strokeWidth="2" /></g>
        <Cross x={267} y={76} color={GOLD} size={1.8} />
        <W x={267} y={118} size={10}>Leftovers</W>
        <W x={118} y={150} size={10.5}>Finish the course</W>
      </>}
      {at === 3 && <>
        <W x={82} y={30} size={10.5}>Common</W>
        <Tags x={14} y={40} labels={["Feeling sick", "Bloating", "Diarrhoea"]} lit={() => false} width={136} gap={38} />
        <W x={236} y={30} size={10.5}>Serious allergy</W>
        <Tile x={168} y={40} width={136} height={34} label="999 or A&E" lit />
        <W x={236} y={100} size={10}>Wheezing, swelling</W>
      </>}
      {at === 4 && <>
        <rect x="40" y="62" width="90" height="46" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={85} y={89} size={10}>Paracetamol</W>
        <Tumbler x={180} y={86} scale={1.4} full={0.75} />
        <Moon x={262} y={84} />
        <W x={85} y={134} size={9.5}>Up to 4 times a day</W><W x={180} y={134} size={10}>Pale pee</W><W x={262} y={134} size={10}>Rest</W>
      </>}
      <Caption>{["Not always needed; a back-up option", "Some are offered them straight away", "Finish the course; never use leftovers", "Severe allergy signs: call 999 or A&E", "Paracetamol, rest and fluids"][at]}</Caption>
    </svg>} />;
}

function RepeatStrip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Coming back" title="When UTIs keep returning" label="Recurrent UTIs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year with infections marked, the options a GP may offer, and support">
      {at === 0 && <>
        {months.map((month, index) => <g key={index}>
          <rect x={24 + index * 23} y="56" width="20" height="40" rx="4" fill={index < 6 ? TINT : WHITE} stroke={LINE} strokeWidth="1.5" />
          <W x={34 + index * 23} y={112} size={10}>{month}</W>
        </g>)}
        {[1, 4].map(index => <Drop key={index} x={34 + index * 23} y={78} fill={GOLD} />)}
        <Drop x={34 + 9 * 23} y={78} />
        <path d="M24 44 H160" stroke={INK} strokeWidth="2" /><W x={92} y={36} size={10}>2 in 6 months</W>
        <path d="M24 128 H298" stroke={INK} strokeWidth="2" /><W x={161} y={148} size={10}>or 3 in 12 months</W>
      </>}
      {at === 1 && <><Person x={80} y={140} scale={1.6} /><Tick x={80} y={56} color={GOLD} size={2} /><Tags x={168} y={40} labels={["Scan if frequent", "Urology clinic", "All men"]} lit={() => false} width={136} gap={38} /></>}
      {at === 2 && <>
        <path d="M30 18 V188 M290 18 V188" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
        <Tags x={40} y={22} labels={["Different antibiotic", "Low-dose antibiotic", "Vaginal oestrogen", "Methenamine hippurate", "Daily antibiotics"]} lit={() => false} width={240} gap={33} />
      </>}
      {at === 3 && <>
        <path d="M84 46 C86 56, 84 60, 80 62 M116 46 C114 56, 116 60, 120 62 M100 136 V160" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <path d="M60 80 C60 56, 140 56, 140 80 C140 116, 116 136, 100 136 C84 136, 60 116, 60 80 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M70 82 C70 66, 130 66, 130 82 C130 110, 112 126, 100 126 C88 126, 70 110, 70 82 Z" fill="none" stroke={SOFT} strokeWidth="3" strokeDasharray="4 4" />
        <Bug x={84} y={98} rotate={60} /><Bug x={116} y={104} rotate={-40} />
        <Person x={240} y={136} scale={1.5} /><W x={240} y={172} size={10.5}>Specialist</W>
      </>}
      {at === 4 && <>
        <Phone x={96} y={96} scale={1.6} /><W x={96} y={160} size={10.5}>0121 702 0820</W>
        <Person x={206} y={130} scale={1.2} /><Person x={258} y={130} scale={1.2} fill={SOFT} />
        <W x={232} y={160} size={10.5}>Phone-Pal</W>
      </>}
      <Caption>{["2 in 6 months or 3 in a year: see GP", "Most need no special tests", "Several options a GP may offer", "Symptoms persist? Ask for a specialist", "Bladder Health UK offers support"][at]}</Caption>
    </svg>} />;
}

function AlertCard(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Urgent help" title="Know the signs that mean 999" label="When to get urgent help" credit={urgentCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A 999 card, the signs of sepsis, and when to get an urgent GP appointment">
      {at === 0 && <>
        <Tile x={24} y={34} width={120} height={60} label="999" lit size={24} />
        <Car x={232} y={60} /><Cross x={232} y={52} color={GOLD} size={2.2} />
        <W x={232} y={100} size={10.5}>Do not drive</W>
        <W x={160} y={150} size={10.5}>Bring any medicines you take</W>
      </>}
      {at === 1 && <>
        <Kidney x={66} y={100} scale={1.1} stroke={GOLD} fill={TINT} />
        <path d="M118 98 H164" stroke={INK} strokeWidth="3" strokeDasharray="6 5" className={still ? undefined : "lib-types-flow"} /><Head x={166} y={98} angle={0} />
        <Tile x={176} y={80} width={120} height={36} label="Sepsis" lit />
        <W x={236} y={140} size={10}>Develops very quickly</W>
      </>}
      {at === 2 && <>
        <TileRow y={26} labels={["Confusion", "Slurred speech"]} lit={() => true} />
        <TileRow y={66} labels={["Shivering", "Hard to breathe"]} lit={() => true} />
        <TileRow y={106} labels={["Blotchy skin", "Very little pee"]} lit={() => true} />
        <W x={160} y={162} size={10}>Check palms and soles too</W>
      </>}
      {at === 3 && <>
        <Person x={96} y={146} scale={1.7} />
        <circle cx="150" cy="56" r="20" fill={GOLD} /><W x={150} y={65} size={22} fill={INK}>!</W>
        <Tags x={198} y={84} labels={["Young children", "Dementia", "Communicating"]} lit={() => false} width={108} gap={34} />
      </>}
      {at === 4 && <>
        <Tile x={90} y={30} width={140} height={36} label="Urgent GP or 111" lit />
        <TileRow y={92} labels={["Back or tummy pain", "Blood in pee"]} />
        <TileRow y={132} labels={["Worse quickly", "No pee all day"]} />
      </>}
      <Caption>{["Confused or drowsy? 999, do not drive", "A kidney infection can cause sepsis", "Confusion, shivering, blotchy skin", "Not every symptom: trust your instinct", "Back pain or blood: urgent GP or 111"][at]}</Caption>
    </svg>} />;
}

function HabitIcons(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows: string[][] = [["Front to back", "Don't hold on", "Empty fully"], [], ["Cotton", "Plain soap", "No bubble bath"], ["Pee after sex", "No spermicide"], ["Change pads", "Less sugar"]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Prevention" title="Small habits, fewer infections" label="Preventing UTIs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five everyday habits: wiping, drinks, washing, sex and contraception, and pads">
      {[0, 1, 2, 3, 4].map(index => {
        const cx = 40 + index * 60, on = at === index;
        return <g key={index}>
          <circle cx={cx} cy="54" r="24" fill={on ? TINT : WHITE} stroke={on ? GOLD : INK} strokeWidth={on ? 3.5 : 2} />
          {index === 0 && <><path d={`M${cx - 12} 54 H${cx + 10}`} stroke={INK} strokeWidth="3" strokeLinecap="round" /><Head x={cx + 11} y={54} angle={0} /></>}
          {index === 1 && <Tumbler x={cx} y={56} scale={0.8} full={0.7} />}
          {index === 2 && <><rect x={cx - 12} y="48" width="24" height="16" rx="6" fill={SOFT} stroke={INK} strokeWidth="2" /><circle cx={cx - 6} cy="42" r="3" fill="none" stroke={INK} strokeWidth="1.5" /><circle cx={cx + 4} cy="40" r="4" fill="none" stroke={INK} strokeWidth="1.5" /></>}
          {index === 3 && <HeartShape x={cx} y={58} size={28} fill={SOFT} width={2} />}
          {index === 4 && <><rect x={cx - 8} y="40" width="16" height="30" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x={cx - 4} y="46" width="8" height="18" rx="4" fill={SOFT} /></>}
        </g>;
      })}
      {at === 1 ? <><W x={160} y={124} size={14}>About 2 litres a day</W><W x={160} y={148} size={10.5}>three to four pints</W></>
        : <TileRow y={112} labels={rows[at]} lit={() => true} height={34} />}
      <Caption>{["Wipe front to back; empty fully", "About 2 litres of liquid a day", "Cotton underwear and plain soap", "Pee soon after sex; no spermicide", "Change pads promptly; less sugar"][at]}</Caption>
    </svg>} />;
}

function OestrogenLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Menopause" title="Less oestrogen, more infections" label="UTIs after the menopause" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Oestrogen falling after the menopause, the forms of vaginal oestrogen, and other help">
      {at === 0 && <>
        <path d="M30 40 V150 H296" fill="none" stroke={LINE} strokeWidth="3" />
        <path d="M30 60 C110 62, 150 120, 296 132" fill="none" stroke={INK} strokeWidth="4" />
        <path d="M150 40 V150" stroke={SOFT} strokeWidth="2" strokeDasharray="5 4" />
        {[[196, 84], [238, 72], [272, 92]].map(([x, y]) => <Bug key={x} x={x} y={y} rotate={30} />)}
        <W x={36} y={34} size={10.5} anchor="start">Oestrogen</W><W x={150} y={168} size={10.5}>Menopause</W>
      </>}
      {at === 1 && <><Person x={80} y={140} scale={1.7} fill={SOFT} /><Tags x={160} y={40} labels={["Burning", "Peeing more often", "Dryness"]} lit={() => true} width={144} gap={40} /></>}
      {at === 2 && <>
        <TileRow y={72} labels={["Cream", "Gel", "Tablet", "Pessary", "Ring"]} lit={() => true} height={34} />
        <W x={160} y={140} size={10.5}>Low-dose, put inside the vagina</W>
      </>}
      {at === 3 && <>
        <path d="M100 52 L136 64 V100 C136 126, 118 142, 100 150 C82 142, 64 126, 64 100 V64 Z" fill={TINT} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <Tick x={100} y={98} size={1.8} />
        <Tags x={166} y={44} labels={["Acts locally", "Without progestogen", "Review in 12 months"]} lit={() => false} width={138} gap={38} />
      </>}
      {at === 4 && <>
        <rect x="70" y="70" width="40" height="70" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M84 70 V58 H100" fill="none" stroke={INK} strokeWidth="3" />
        <W x={90} y={164} size={10.5}>Unperfumed</W>
        <path d="M196 72 H244 V110 L234 132 H206 L196 110 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><rect x="210" y="132" width="20" height="10" rx="2" fill={SOFT} stroke={INK} strokeWidth="2" />
        <W x={220} y={164} size={10.5}>Moisturiser</W>
      </>}
      <Caption>{["Less oestrogen after the menopause", "More UTIs, or symptoms like one", "Cream, gel, tablet, pessary or ring", "Absorbed locally, in small amounts", "Unperfumed washes and moisturisers"][at]}</Caption>
    </svg>} />;
}

function LegBag(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Catheters" title="Catheter care that keeps infection out" label="UTIs with a catheter" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A catheter draining to a leg bag kept below the bladder, and how to care for it">
      <path d="M14 30 H140" stroke={LINE} strokeWidth="2" strokeDasharray="5 4" />
      <W x={14} y={22} size={10} anchor="start">Bladder level</W>
      <path d="M66 36 C58 80, 58 130, 64 186 M114 36 C120 80, 116 130, 108 186" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <path d="M90 30 V110" stroke={INK} strokeWidth="2.5" />
      <rect x="74" y="110" width="32" height="52" rx="8" fill={TINT} stroke={at === 2 ? GOLD : INK} strokeWidth={at === 2 ? 3.5 : 2.5} />
      <path d="M77 142 H103 V152 C103 158, 77 158, 77 152 Z" fill={GOLD} />
      {at === 0 && <><Bug x={90} y={70} rotate={90} /><Bug x={90} y={92} rotate={90} />
        <Clock x={228} y={84} r={26} hand={2.2} /><W x={228} y={140} size={10.5}>Only as long as needed</W>
        <path d="M100 80 H180" stroke={SOFT} strokeWidth="2" strokeDasharray="5 4" className={still ? undefined : "lib-types-flow"} /></>}
      {at === 1 && <Tags x={160} y={50} labels={["Tummy or groin pain", "Fever or shivers", "Confusion"]} lit={() => true} width={144} gap={38} />}
      {at === 2 && <Tags x={160} y={32} labels={["Wash daily", "Hands before, after", "Bag below bladder", "No kinks"]} lit={index => index === 2} width={144} gap={36} />}
      {at === 3 && <>
        <Tile x={160} y={56} width={144} height={34} label="Bags: every 7 days" lit />
        <Tile x={160} y={104} width={144} height={34} label="Catheter: 3 months" lit />
        <W x={232} y={164} size={10}>Empty before it is full</W>
      </>}
      {at === 4 && <>
        <Person x={204} y={112} scale={1.4} /><Phone x={276} y={100} />
        <W x={204} y={156} size={10}>Community nurse</W><W x={276} y={156} size={10}>Or 111</W>
      </>}
      <Caption>{["Longer use, greater infection risk", "Pain, fever, shivers or confusion", "Wash daily; keep the bag low", "Bags weekly; catheter every 3 months", "Call your community nurse, or 111"][at]}</Caption>
    </svg>} />;
}

function FourJars(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [[0], [1], [0, 1], [2, 3], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Questions" title="Cranberry, D-mannose and the evidence" label="Cranberry and other questions" credit="Illustration: Rehyn. Ask a pharmacist before trying a product."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four jars on a shelf, cranberry, D-mannose, sachets and probiotics, and leftover antibiotics crossed out">
      <g opacity={at === 4 ? 0.35 : 1}>
        {["Cranberry", "D-mannose", "Sachets", "Probiotic"].map((label, index) => {
          const x = 22 + index * 74, on = lit.includes(index);
          return <g key={label}>
            <rect x={x + 6} y="62" width="48" height="12" rx="3" fill={SOFT} />
            <rect x={x} y="72" width="60" height="76" rx="10" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
            <W x={x + 30} y={116} size={9.5} fill={on ? WHITE : TEXT}>{label}</W>
          </g>;
        })}
      </g>
      <path d="M14 150 H306" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <W x={52} y={46} size={22}>?</W>}
      {at === 1 && <W x={126} y={46} size={10.5}>May help</W>}
      {at === 2 && <>
        <rect x="70" y="30" width="14" height="14" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="88" y="30" width="14" height="14" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" />
        <W x={86} y={22} size={10}>Sugar</W>
        <Pill x={262} y={40} /><Cross x={262} y={40} color={GOLD} size={1.6} /><W x={262} y={20} size={10}>Warfarin</W>
      </>}
      {at === 3 && <W x={237} y={46} size={10.5}>Evidence unclear</W>}
      {at === 4 && <>
        <rect x="110" y="12" width="100" height="44" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Pill x={160} y={34} />
        <Cross x={160} y={34} color={GOLD} size={2.6} />
        <W x={160} y={176} size={10.5}>Leftover antibiotics</W>
      </>}
      <Caption>{["Cranberry: the evidence is uncertain", "D-mannose may help prevent cystitis", "Watch the sugar; ask if pregnant", "Sachets: no evidence they treat it", "Never take leftover antibiotics"][at]}</Caption>
    </svg>} />;
}

export function RenalPieceView({ piece, ...props }: { piece: RenalPiece } & PieceProps) {
  switch (piece) {
    case "ks-stone-sizes": return <StoneSizes {...props} />;
    case "ks-pain-path": return <PainPath {...props} />;
    case "ks-dark-glass": return <DarkGlass {...props} />;
    case "ks-test-cards": return <TestCards {...props} />;
    case "ks-ruler-slide": return <RulerSlide {...props} />;
    case "ks-three-routes": return <ThreeRoutes {...props} />;
    case "ks-relief-curve": return <ReliefCurve {...props} />;
    case "ks-help-signs": return <HelpSigns {...props} />;
    case "ks-day-glasses": return <DayGlasses {...props} />;
    case "ks-plate-salt": return <PlateSalt {...props} />;
    case "ks-half-ring": return <HalfRing {...props} />;
    case "ks-follow-line": return <FollowLine {...props} />;
    case "aki-dip-line": return <DipLine {...props} />;
    case "aki-four-arrows": return <FourArrows {...props} />;
    case "aki-people-row": return <PeopleRow {...props} />;
    case "aki-creatinine-tube": return <CreatinineTube {...props} />;
    case "aki-bed-kit": return <BedKit {...props} />;
    case "aki-pause-organiser": return <PauseOrganiser {...props} />;
    case "aki-recovery-ruler": return <RecoveryRuler {...props} />;
    case "aki-week-grid": return <WeekGrid {...props} />;
    case "aki-sip-glass": return <SipGlass {...props} />;
    case "aki-three-years": return <ThreeYears {...props} />;
    case "aki-counter": return <Counter {...props} />;
    case "aki-plan-card": return <PlanCard {...props} />;
    case "uti-tract-map": return <TractMap {...props} />;
    case "uti-two-panels": return <TwoPanels {...props} />;
    case "uti-climb": return <Climb {...props} />;
    case "uti-short-route": return <ShortRoute {...props} />;
    case "uti-signpost": return <Signpost {...props} />;
    case "uti-wait-clock": return <WaitClock {...props} />;
    case "uti-repeat-strip": return <RepeatStrip {...props} />;
    case "uti-alert-card": return <AlertCard {...props} />;
    case "uti-habit-icons": return <HabitIcons {...props} />;
    case "uti-oestrogen-line": return <OestrogenLine {...props} />;
    case "uti-leg-bag": return <LegBag {...props} />;
    case "uti-four-jars": return <FourJars {...props} />;
  }
}
