import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { HEPATIC_PIECES, type HepaticPiece } from "@/content/hepatic-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Cirrhosis, Alcohol-related liver disease and Hepatitis B and C pages' own pieces (content/hepatic-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Kidneys, liver & digestion pieces. Each is steered by the card's
// sections; pictures show ideas, never anyone's own body or results.

export const isHepaticPiece = (piece: NewsPiece): piece is HepaticPiece => (HEPATIC_PIECES as readonly string[]).includes(piece);

const urgentCredit = "Illustration: Rehyn. In an emergency, call 999.";

// ==== Shapes ================================================================================================

/** A liver outline centred on (x, y), about 190 x 118 at scale 1; children are drawn in the outline's own space (0 to 200 across). */
const Liver = ({ x, y, scale = 1, fill = WHITE, stroke = INK, children }: { x: number; y: number; scale?: number; fill?: string; stroke?: string; children?: ReactNode }) =>
  <g transform={`translate(${x} ${y}) scale(${scale}) translate(-100 -60)`}>
    <path d="M10 40 C20 10, 90 0, 170 8 C196 11, 204 30, 188 46 C160 74, 120 104, 80 112 C50 118, 22 104, 12 80 C6 66, 6 52, 10 40 Z" fill={fill} stroke={stroke} strokeWidth={4 / scale} strokeLinejoin="round" />
    {children}
  </g>;

/** Bands of scar tissue, drawn inside a Liver. */
const Scars = ({ width = 8 }: { width?: number }) =>
  <path d="M30 50 C60 44, 90 64, 120 56 M50 88 C76 74, 108 84, 136 68 M104 24 C126 38, 152 28, 178 32" fill="none" stroke={INK} strokeWidth={width} strokeLinecap="round" />;

/** A labelled tile; filled when lit. */
const Tile = ({ x, y, width, label, lit, height = 28, size = 10.5 }: { x: number; y: number; width: number; label: string; lit: boolean; height?: number; size?: number }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
    <W x={x + width / 2} y={y + height / 2 + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{label}</W></g>;

/** A column of labelled tiles. */
const Tags = ({ x, y, labels, lit, width = 120, gap = 34 }: { x: number; y: number; labels: string[]; lit: (index: number) => boolean; width?: number; gap?: number }) =>
  <g>{labels.map((label, index) => <Tile key={label} x={x} y={y + index * gap} width={width} height={26} label={label} lit={lit(index)} />)}</g>;

const Tick = ({ x, y, color = INK, size = 1 }: { x: number; y: number; color?: string; size?: number }) =>
  <path transform={`translate(${x} ${y}) scale(${size})`} d="M-7 0 L-2 6 L8 -6" fill="none" stroke={color} strokeWidth={3.5 / size} strokeLinecap="round" strokeLinejoin="round" />;
const Cross = ({ x, y, color = INK, size = 1 }: { x: number; y: number; color?: string; size?: number }) =>
  <path transform={`translate(${x} ${y}) scale(${size})`} d="M-6 -6 L6 6 M6 -6 L-6 6" fill="none" stroke={color} strokeWidth={3.5 / size} strokeLinecap="round" />;
const Arrow = ({ x1, x2, y, color = INK }: { x1: number; x2: number; y: number; color?: string }) =>
  <path d={`M${x1} ${y} H${x2} M${x2 - 6} ${y - 5} L${x2} ${y} L${x2 - 6} ${y + 5}`} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />;

/** A blood test tube. */
const Tube = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <rect x="-7" y="-22" width="14" height="44" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path d="M-5.5 0 H5.5 V14 A5.5 5.5 0 0 1 -5.5 14 Z" fill={INK} />
    <rect x="-9" y="-26" width="18" height="8" rx="2" fill={SOFT} />
  </g>;

/** A wine glass, about 24 wide and 40 tall. */
const WineGlass = ({ x, y, scale = 1, fill = INK }: { x: number; y: number; scale?: number; fill?: string }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={fill} strokeWidth={2.5 / scale} strokeLinecap="round" strokeLinejoin="round">
    <path d="M-11 -20 H11 C11 -6, 5 0, 0 0 C-5 0, -11 -6, -11 -20 Z" fill={WHITE} /><path d="M-9 -10 H9 C7 -4, 3 -2, 0 -2 C-3 -2, -7 -4, -9 -10 Z" fill={fill} stroke="none" />
    <path d="M0 0 V16 M-8 16 H8" />
  </g>;

/** A glass, `full` from 0 to 1. */
const Tumbler = ({ x, y, full = 0.6, scale = 1, fill = SOFT }: { x: number; y: number; full?: number; scale?: number; fill?: string }) => {
  const top = 17 - 32 * full;
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d={`M${-10.5 + 1.5 * (1 - full)} ${top} L-9 16 H9 L${10.5 - 1.5 * (1 - full)} ${top} Z`} fill={fill} />
    <path d="M-12 -17 L-9 17 H9 L12 -17" fill="none" stroke={INK} strokeWidth={2.5 / scale} strokeLinejoin="round" strokeLinecap="round" />
  </g>;
};

const SaltShaker = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}>
    <path d="M-12 18 V-6 C-12 -18, 12 -18, 12 -6 V18 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    {[[-4, -8], [4, -8], [0, -12]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="1.8" fill={INK} />)}
  </g>;

/** A drop, about 16 wide and 23 tall at scale 1. */
const Drop = ({ x, y, scale = 1, fill = SOFT }: { x: number; y: number; scale?: number; fill?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${scale})`} d="M0 -10 C6 -2, 8 2, 8 5 A8 8 0 0 1 -8 5 C-8 2, -6 -2, 0 -10 Z" fill={fill} stroke={INK} strokeWidth={2 / scale} strokeLinejoin="round" />;

/** A virus: a round body with eight short spikes. */
const Virus = ({ x, y, r = 16, label, fill = WHITE, stroke = INK }: { x: number; y: number; r?: number; label?: string; fill?: string; stroke?: string }) =>
  <g>
    {Array.from({ length: 8 }, (_, index) => {
      const a = index * Math.PI / 4;
      return <g key={index}><path d={`M${x + r * Math.cos(a)} ${y + r * Math.sin(a)} L${x + (r + 6) * Math.cos(a)} ${y + (r + 6) * Math.sin(a)}`} stroke={stroke} strokeWidth="2.5" />
        <circle cx={x + (r + 7) * Math.cos(a)} cy={y + (r + 7) * Math.sin(a)} r="2.6" fill={stroke} /></g>;
    })}
    <circle cx={x} cy={y} r={r} fill={fill} stroke={stroke} strokeWidth="2.5" />
    {label && <W x={x} y={y + Math.max(10, r * 0.8) * 0.36} size={Math.max(10, r * 0.8)}>{label}</W>}
  </g>;

/** A mobile phone, 32 x 56. */
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g transform={`translate(${x} ${y})`}>
    <rect x="-16" y="-28" width="32" height="56" rx="6" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
    <rect x="-11" y="-20" width="22" height="34" rx="2" fill={lit ? GOLD : TINT} />
    <circle cx="0" cy="21" r="2.5" fill={lit ? WHITE : INK} />
  </g>;

/** A small syringe, about 40 long. */
const Syringe = ({ x, y, rotate = 0, scale = 1, lit = false }: { x: number; y: number; rotate?: number; scale?: number; lit?: boolean }) =>
  <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
    <rect x="-14" y="-5" width="24" height="10" rx="2" fill={lit ? GOLD : WHITE} stroke={INK} strokeWidth={2 / scale} />
    <path d="M10 0 H20 M-14 0 H-20 M-20 -6 V6" fill="none" stroke={INK} strokeWidth={2 / scale} strokeLinecap="round" />
  </g>;

/** A baby in a wrap, 28 wide and 48 tall at scale 1. */
const Baby = ({ x, y, scale = 1, fill = TINT }: { x: number; y: number; scale?: number; fill?: string }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <ellipse cx="0" cy="8" rx="14" ry="16" fill={fill} stroke={INK} strokeWidth={2.5 / scale} />
    <circle cx="0" cy="-14" r="10" fill={WHITE} stroke={INK} strokeWidth={2.5 / scale} />
  </g>;

/** A speech bubble with its tail at the bottom left. */
const Bubble = ({ x, y, width, height }: { x: number; y: number; width: number; height: number }) =>
  <path d={`M${x} ${y + 8} Q${x} ${y} ${x + 8} ${y} H${x + width - 8} Q${x + width} ${y} ${x + width} ${y + 8} V${y + height - 8} Q${x + width} ${y + height} ${x + width - 8} ${y + height} H${x + 26} L${x + 14} ${y + height + 10} L${x + 16} ${y + height} H${x + 8} Q${x} ${y + height} ${x} ${y + height - 8} Z`}
    fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />;

const Car = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}>
    <path d="M-26 6 V-4 L-16 -16 H14 L24 -4 H28 V6 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="-14" cy="8" r="5" fill={INK} /><circle cx="16" cy="8" r="5" fill={INK} />
  </g>;

const Ambulance = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}>
    <path d="M-48 18 V-22 H18 V-8 H34 L46 6 V18 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M-16 -14 V8 M-27 -3 H-5" stroke={GOLD} strokeWidth="5" />
    <circle cx="-28" cy="20" r="7" fill={INK} /><circle cx="28" cy="20" r="7" fill={INK} />
  </g>;

const Brain = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M-36 0 C-40 -22, -18 -32, 0 -26 C18 -34, 42 -22, 36 0 C44 18, 22 30, 0 24 C-20 32, -44 20, -36 0 Z" fill={WHITE} stroke={INK} strokeWidth={3 / scale} />
    <path d="M-18 -8 C-8 -14, 0 -4, 10 -10 M-14 8 C-4 2, 6 12, 18 6" fill="none" stroke={SOFT} strokeWidth={2.5 / scale} />
  </g>;

/** Sound waves from a scan, above (x, y). */
const Waves = ({ x, y }: { x: number; y: number }) =>
  <g fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round">{[0, 1, 2].map(ring => <path key={ring} d={`M${x - 10 - ring * 7} ${y - ring * 6} Q${x} ${y + 8 - ring * 4} ${x + 10 + ring * 7} ${y - ring * 6}`} />)}</g>;

const polar = (cx: number, cy: number, r: number, deg: number) => [cx + r * Math.cos(deg * Math.PI / 180), cy + r * Math.sin(deg * Math.PI / 180)];
const sector = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const [x0, y0] = polar(cx, cy, r, a0), [x1, y1] = polar(cx, cy, r, a1);
  return `M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1} ${y1} Z`;
};
const arc = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const [x0, y0] = polar(cx, cy, r, a0), [x1, y1] = polar(cx, cy, r, a1);
  return `M${x0} ${y0} A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1} ${y1}`;
};

const Ring = ({ x, y, r }: { x: number; y: number; r: number }) => {
  const still = useStill();
  return <circle cx={x} cy={y} r={r} fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />;
};

// ==== Cirrhosis ==============================================================================================

function ScarBands(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Scarred, but often still working" label="What cirrhosis is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A liver with bands of scar tissue, and what the scarring means">
      <Liver x={106} y={92} scale={0.9} fill={at === 2 ? TINT : WHITE} stroke={at === 4 ? GOLD : INK}>
        <g opacity={at === 0 ? 0.3 : 1}><Scars /></g>
        {at === 1 && <path d="M150 62 C164 74, 170 88, 172 100" fill="none" stroke={GOLD} strokeWidth="6" strokeDasharray="8 8" className={still ? undefined : "lib-types-flow"} />}
      </Liver>
      {at === 0 && <><Clock x={258} y={74} r={26} hand={2.2} /><W x={258} y={124} size={10.5}>Many years</W></>}
      {at === 1 && <Tags x={212} y={46} labels={["Bands form", "Shrinks", "Blood slows"]} lit={() => true} width={98} gap={38} />}
      {at === 2 && <><Tile x={210} y={52} width={100} label="Compensated" lit size={10} />
        <path d="M260 84 V100 M254 94 L260 101 L266 94" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <Tile x={210} y={106} width={100} label="Decompensated" lit={false} size={10} /></>}
      {at === 3 && <><rect x="240" y="56" width="11" height="42" rx="3" fill={GOLD} /><rect x="263" y="56" width="11" height="42" rx="3" fill={GOLD} /><W x={257} y={122} size={10.5}>Slow or stop</W></>}
      {at === 4 && <><HeartShape x={258} y={68} size={50} fill={TINT} /><Person x={258} y={146} scale={1.1} /></>}
      <W x={160} y={206} size={11}>{["Scarring that builds over many years", "Scarring makes the liver's jobs harder", "Compensated: scarred but working OK", "Treatment can slow it or stop it", "Many feel well and live for many years"][at]}</W>
    </svg>} />;
}

function ManyRoads(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const causes = ["Alcohol", "Weight", "Viruses", "Immune", "Genes"];
  const lit = (index: number) => at === 0 || (at === 2 && index < 2) || (at === 3 && index === 2) || (at === 4 && index > 2);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="Many roads to one scar" label="What causes cirrhosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five causes, from alcohol to genes, all leading to the same scarred liver">
      {at !== 1 && causes.map((cause, index) => <path key={cause} d={`M${36 + index * 62} 50 C${36 + index * 62} 92, 160 84, 160 118`} fill="none" stroke={lit(index) ? INK : LINE} strokeWidth="3"
        strokeDasharray={lit(index) ? "6 6" : undefined} className={lit(index) && !still ? "lib-types-flow" : undefined} />)}
      <g opacity={at === 1 ? 0.4 : 1}>{causes.map((cause, index) => <Tile key={cause} x={8 + index * 62} y={20} width={56} label={cause} lit={lit(index) && at !== 1} size={10} />)}</g>
      {at === 1 && <>{["Fat", "Inflamed", "Scarred"].map((label, index) => <Tile key={label} x={14 + index * 102} y={64} width={86} height={26} label={label} lit={index === 2} />)}
        <Arrow x1={102} x2={113} y={77} /><Arrow x1={204} x2={215} y={77} /></>}
      <Liver x={160} y={148} scale={0.5} fill={TINT}><Scars width={10} /></Liver>
      <W x={160} y={206} size={11}>{["Long-term damage, from many causes", "Fat, then inflammation, then scarring", "Alcohol and weight are common causes", "Hepatitis B and C can both cause it", "Autoimmune and genetic causes too"][at]}</W>
    </svg>} />;
}

const Body = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}>
    <path d="M-24 -30 L-38 22 M24 -30 L38 22" stroke={INK} strokeWidth="9" strokeLinecap="round" />
    <path d="M-11 20 L-13 72 M11 20 L13 72" stroke={INK} strokeWidth="11" strokeLinecap="round" />
    <rect x="-26" y="-40" width="52" height="66" rx="16" fill={TINT} stroke={INK} strokeWidth="2.5" />
    <circle cx="0" cy="-58" r="15" fill={WHITE} stroke={INK} strokeWidth="2.5" />
  </g>;

function BodySigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots: Record<string, [number, number, number]> = { head: [78, 42, 19], tummy: [78, 98, 16], handL: [40, 122, 9], handR: [116, 122, 9], ankleL: [65, 172, 9], ankleR: [91, 172, 9] };
  const marked = [[], ["tummy"], ["head", "handL", "handR", "ankleL", "ankleR"], ["head"], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="Quiet at first, then easier to see" label="Symptoms of cirrhosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body outline with the places symptoms can show, and a list of signs">
      <g opacity={at === 0 ? 0.55 : 1}><Body x={78} y={100} /></g>
      {marked.map(key => { const [cx, cy, r] = spots[key]; return <Ring key={key} x={cx} y={cy} r={r} />; })}
      {at === 0 && <Tags x={158} y={56} labels={["No symptoms", "Ask your GP"]} lit={index => index === 0} width={148} gap={40} />}
      {at === 1 && <Tags x={158} y={34} labels={["Tired, unwell", "Off your food", "Feeling sick", "Tummy pain"]} lit={() => true} width={148} gap={36} />}
      {at === 2 && <Tags x={158} y={34} labels={["Yellow skin, eyes", "Itchy skin", "Swelling", "Bruising easily"]} lit={() => true} width={148} gap={36} />}
      {at === 3 && <><Tags x={158} y={34} labels={["Forgetful", "Confused", "Sleep changes"]} lit={() => true} width={148} gap={36} />
        <Person x={214} y={170} scale={0.75} fill={SOFT} /><Person x={250} y={170} scale={0.75} fill={SOFT} /></>}
      {at === 4 && <><Tile x={158} y={30} width={148} height={32} label="999 or A&E" lit size={12} />
        <Tags x={158} y={74} labels={["Vomiting blood", "Black poo", "Sudden confusion"]} lit={() => false} width={148} gap={30} />
        <W x={232} y={178} size={10.5}>Do not drive to A&E</W></>}
      <W x={160} y={206} size={11}>{["Often no symptoms, especially early on", "Tired, off your food, feeling sick", "Later: jaundice, itching, swelling", "Confusion others may spot first", "Vomiting blood? Call 999 or go to A&E"][at]}</W>
    </svg>} />;
}

function TestRow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const xs = [40, 100, 160, 220, 280];
  const names = ["Questions", "Blood", "Scans", "Endoscopy", "Score"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="Building the picture, test by test" label="Tests and scores" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five stations of testing, from questions to a score">
      <path d="M18 70 H302" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {xs.map((x, index) => {
        const on = at === index, c = on ? WHITE : INK;
        return <g key={x}>
          <circle cx={x} cy="70" r="22" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          {index === 0 && <path d={`M${x - 12} 61 H${x + 12} V75 H${x - 2} L${x - 8} 81 V75 H${x - 12} Z`} fill="none" stroke={c} strokeWidth="2.5" strokeLinejoin="round" />}
          {index === 1 && <><rect x={x - 5} y="56" width="10" height="28" rx="5" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x - 3} 72 H${x + 3} V79 A3 3 0 0 1 ${x - 3} 79 Z`} fill={on ? GOLD : INK} /></>}
          {index === 2 && [0, 1, 2].map(ring => <path key={ring} d={`M${x - 6 - ring * 5} ${62 + ring * 4} Q${x} ${72 + ring * 6} ${x + 6 + ring * 5} ${62 + ring * 4}`} fill="none" stroke={c} strokeWidth="2.5" />)}
          {index === 3 && <><path d={`M${x - 12} 82 C${x - 12} 60, ${x + 10} 56, ${x + 9} 70`} fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" /><circle cx={x + 9} cy="72" r="3.5" fill={on ? GOLD : INK} /></>}
          {index === 4 && <W x={x} y={74} size={10.5} fill={c}>ABC</W>}
          <W x={x} y={110} size={10}>{names[index]}</W>
        </g>;
      })}
      {at === 0 && ["Symptoms", "Alcohol", "Medicines"].map((label, index) => <Tile key={label} x={16 + index * 100} y={136} width={88} label={label} lit={false} />)}
      {at === 1 && <><Tile x={24} y={136} width={128} label="Liver blood test" lit /><Arrow x1={158} x2={174} y={150} /><Tile x={180} y={136} width={116} label="Full screen" lit={false} /></>}
      {at === 2 && <><W x={24} y={160} size={10.5} anchor="start">Soft</W>
        {[0, 1, 2, 3, 4, 5].map(index => <rect key={index} x={62 + index * 34} y="146" width="32" height="20" rx="4" fill={INK} opacity={0.15 + index * 0.17} />)}
        <W x={300} y={160} size={10.5} anchor="end">Stiff</W></>}
      {at === 3 && <><Tile x={40} y={136} width={110} label="Varices check" lit /><Tile x={170} y={136} width={110} label="Bone check" lit={false} /></>}
      {at === 4 && <><W x={22} y={155} size={10.5} anchor="start">Child-Pugh</W>{["A", "B", "C"].map((label, index) => <Tile key={label} x={112 + index * 60} y={136} width={50} label={label} lit={false} />)}</>}
      <W x={160} y={206} size={11}>{["Questions on symptoms, alcohol, weight", "A liver blood test, then a full screen", "FibroScan measures liver stiffness", "An endoscopy checks for varices", "Scores are averages for lots of people"][at]}</W>
    </svg>} />;
}

function TapOff(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const valves = [{ x: 48, t: "Alcohol" }, { x: 112, t: "Weight" }, { x: 208, t: "Hepatitis" }, { x: 272, t: "Immune" }];
  const off = (index: number) => at === 0 || at === index + 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treating the cause" title="Take away the cause" label="Treating the cause" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pipe of causes feeding the liver, with taps being turned off">
      <path d="M154 50 V94 H166 V50" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="14" y="40" width="292" height="16" rx="8" fill={TINT} stroke={INK} strokeWidth="2.5" />
      {valves.map((valve, index) => <g key={valve.t}>
        {off(index) ? <rect x={valve.x - 16} y="24" width="32" height="7" rx="3" fill={GOLD} /> : <rect x={valve.x - 3.5} y="18" width="7" height="22" rx="3" fill={INK} />}
        <circle cx={valve.x} cy="48" r="11" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={valve.x} y={78} size={10.5}>{valve.t}</W>
      </g>)}
      {at !== 0 && <path d="M160 96 V116" stroke={SOFT} strokeWidth="4" strokeDasharray="4 5" className={still ? undefined : "lib-types-flow"} />}
      <Liver x={160} y={150} scale={0.55} stroke={at === 0 ? GOLD : INK}><Scars width={9} /></Liver>
      <W x={160} y={206} size={11}>{["Treat the cause to stop it worsening", "Stop alcohol, with a safe plan", "Weight loss can help; control diabetes", "Hepatitis C tablets: 8 to 12 weeks", "Turning down the immune system"][at]}</W>
    </svg>} />;
}

function PortalDetour(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const VEIN = "M222 156 C196 146, 150 124, 134 84";
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Complications" title="Fluid, bleeding and confusion explained" label="Complications" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A scarred liver, a vein under pressure, swollen veins in the food pipe, fluid in the belly and the brain">
      <path d={VEIN} fill="none" stroke={INK} strokeWidth="11" strokeLinecap="round" />
      <path d={VEIN} fill="none" stroke={at === 0 ? GOLD : TINT} strokeWidth="5" strokeLinecap="round" />
      <path d="M222 156 C246 156, 262 146, 266 130" fill="none" stroke={at === 0 || at === 2 ? INK : LINE} strokeWidth="4" strokeDasharray="6 5" className={(at === 0 || at === 2) && !still ? "lib-types-flow" : undefined} />
      <Liver x={118} y={58} scale={0.5} fill={TINT}><Scars width={10} /></Liver>
      <rect x="256" y="22" width="22" height="108" rx="11" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {at === 2 && [[256, 50], [278, 70], [256, 90], [278, 110]].map(([cx, cy]) => <circle key={cy} cx={cx} cy={cy} r="7" fill={GOLD} stroke={INK} strokeWidth="1.5" />)}
      {at === 2 && <W x={246} y={64} size={10.5} anchor="end">Varices</W>}
      {at === 0 && <><Ring x={174} y={131} r={13} /><W x={196} y={114} size={10.5} anchor="start">Pressure</W></>}
      {at <= 2 && <><path d="M18 182 C18 130, 108 130, 108 182 Z" fill={at === 1 ? TINT : WHITE} stroke={at === 1 ? INK : LINE} strokeWidth="2.5" />
        {at === 1 && <><path d="M30 172 q8 -6 16 0 t16 0 t16 0 t16 0" fill="none" stroke={INK} strokeWidth="2.5" /><W x={63} y={160} size={10.5}>Ascites</W></>}</>}
      {at === 3 && <><Brain x={63} y={160} scale={0.8} /><Ring x={63} y={160} r={34} /></>}
      {at === 4 && <><Tile x={16} y={128} width={96} height={26} label="Infections" lit size={10} /><Tile x={16} y={160} width={96} height={26} label="Jaundice" lit size={10} /></>}
      <W x={160} y={206} size={11}>{["Pressure builds in a main liver vein", "Ascites: fluid builds up in the belly", "Varices: swollen veins, can be treated", "Toxins reach the brain: confusion", "Also infections, jaundice, weak bones"][at]}</W>
    </svg>} />;
}

function Cabinet(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const top = at === 1, low = at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Ask before any new medicine" label="Medicines and cirrhosis" credit="Illustration: Rehyn. Check every medicine with your pharmacist or liver team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A medicine cabinet of painkillers, herbal remedies and supplements, beside a pharmacist">
      <g opacity={at === 2 || at === 4 ? 0.4 : 1}>
        <rect x="16" y="18" width="190" height="160" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M16 98 H206" stroke={INK} strokeWidth="3" />
        <Tile x={28} y={46} width={84} height={44} label="Paracetamol" lit={top} size={10} />
        <Tile x={120} y={46} width={76} height={44} label="NSAIDs" lit={top} size={10} />
        <rect x="36" y="116" width="60" height="10" rx="3" fill={SOFT} />
        <Tile x={28} y={124} width={84} height={44} label="Herbal" lit={low} size={10} />
        <rect x="134" y="116" width="48" height="10" rx="3" fill={SOFT} />
        <Tile x={120} y={124} width={76} height={44} label="Supplements" lit={low} size={10} />
        {at === 0 && [[106, 42], [190, 42], [106, 120], [190, 120]].map(([x, y]) => <W key={`${x}${y}`} x={x} y={y} size={15} fill={GOLD}>?</W>)}
      </g>
      {at !== 4 && <><Person x={258} y={118} scale={1.4} fill={at === 0 || at === 2 ? INK : SOFT} /><W x={258} y={162} size={10.5}>{at === 2 ? "Hepatologist" : "Pharmacist"}</W></>}
      {at === 4 && <><Person x={226} y={118} scale={0.95} /><Person x={258} y={118} scale={0.95} fill={SOFT} /><Person x={290} y={118} scale={0.95} /><W x={258} y={162} size={10.5}>Every team</W></>}
      <W x={160} y={206} size={11}>{["Ask a pharmacist before any medicine", "Check paracetamol; NSAIDs carry risks", "No need to put up with itch or pain", "Herbal remedies can sometimes harm", "Tell every team you have cirrhosis"][at]}</W>
    </svg>} />;
}

function RoadStops(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const ROAD = "M24 160 H220 Q252 160 252 134 Q252 108 220 108 H100 Q68 108 68 82 Q68 56 100 56 H262";
  const stops = [{ x: 120, y: 160, t: "Assessment", ly: 186 }, { x: 170, y: 108, t: "Waiting list", ly: 94 }, { x: 150, y: 56, t: "The call", ly: 38 }];
  const lit = (index: number) => (at === 2 && index === 0) || (at === 3 && index > 0);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Transplant" title="The road to a new liver" label="Liver transplant" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A winding road from the assessment, through the waiting list and the call, to a new liver">
      <path d={ROAD} fill="none" stroke={LINE} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
      <path d={ROAD} fill="none" stroke={WHITE} strokeWidth="2" strokeDasharray="6 8" />
      {stops.map((stop, index) => <g key={stop.t}><circle cx={stop.x} cy={stop.y} r="10" fill={lit(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={stop.x} y={stop.ly} size={10}>{stop.t}</W></g>)}
      <Liver x={286} y={56} scale={0.22} stroke={at === 0 || at === 4 ? GOLD : INK} fill={at === 4 ? TINT : WHITE} />
      <W x={286} y={34} size={10}>New liver</W>
      {at === 0 && <Ring x={286} y={56} r={30} />}
      {at === 1 && <g fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round"><path d="M126 129 L174 123 M150 126 V148 M140 148 H160" /><path d="M118 129 Q126 141 134 129 M166 123 Q174 135 182 123" /></g>}
      {at === 2 && <><Tube x={140} y={136} scale={0.5} /><Tube x={160} y={136} scale={0.5} /></>}
      {at === 3 && <><rect x="132" y="124" width="36" height="24" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M142 124 V118 H158 V124" fill="none" stroke={INK} strokeWidth="2.5" /></>}
      {at === 4 && <HeartShape x={150} y={136} size={32} fill={TINT} />}
      <W x={160} y={208} size={11}>{["A transplant is the only cure", "When benefits outweigh the risks", "Assessment: tests over about 2 days", "Not a queue; keep a bag packed", "Up to a year; most have more energy"][at]}</W>
    </svg>} />;
}

function MealClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Food" title="Little and often, more protein" label="Eating with cirrhosis" credit="Illustration: Rehyn. Ask your team or a dietitian for your own plan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock with small meals through the day, beside protein, salt and activity">
      <circle cx="92" cy="100" r="68" fill={WHITE} stroke={INK} strokeWidth="3" />
      {Array.from({ length: 12 }, (_, index) => { const [x0, y0] = polar(92, 100, 60, index * 30), [x1, y1] = polar(92, 100, 66, index * 30); return <path key={index} d={`M${x0} ${y0} L${x1} ${y1}`} stroke={LINE} strokeWidth="2.5" />; })}
      {[0, 2.5, 5, 7.5, 10].map(hour => { const [cx, cy] = polar(92, 100, 44, hour * 30 - 90); return <circle key={hour} cx={cx} cy={cy} r="8" fill={at === 1 ? GOLD : SOFT} stroke={INK} strokeWidth="1.5" />; })}
      <path d="M92 100 V74 M92 100 L110 108" stroke={TEXT} strokeWidth="3" strokeLinecap="round" /><circle cx="92" cy="100" r="4" fill={TEXT} />
      {at === 0 && <Tags x={186} y={50} labels={["Energy", "Protein", "Less salt"]} lit={() => true} width={118} gap={40} />}
      {at === 1 && <><path d="M214 88 H274 C274 118, 214 118, 214 88 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M232 76 q4 -6 0 -12 M244 76 q4 -6 0 -12 M256 76 q4 -6 0 -12" fill="none" stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" />
        <W x={244} y={140} size={10.5}>Bedtime snack</W></>}
      {at === 2 && <Tags x={186} y={50} labels={["Beans, pulses", "Eggs, dairy", "Fish, meat"]} lit={() => true} width={118} gap={40} />}
      {at === 3 && <><SaltShaker x={244} y={92} /><Cross x={244} y={92} color={GOLD} size={1.9} /><W x={244} y={144} size={10.5}>No added salt</W></>}
      {at === 4 && <><Person x={244} y={110} scale={1.3} /><W x={244} y={150} size={10.5}>Keep active</W><W x={244} y={170} size={10.5}>Calcium, vitamin D</W></>}
      <W x={160} y={206} size={11}>{["Enough energy and protein, less salt", "Eat every 2 to 3 hours, and at bedtime", "More protein, spread over the day", "Less salt if fluid builds up", "Stay active; calcium and vitamin D"][at]}</W>
    </svg>} />;
}

function GlassDown(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Alcohol" title="Stopping safely, with support" label="Alcohol and cirrhosis" credit="Illustration: Rehyn. Get medical help before stopping heavy drinking."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A glass set aside, a safe plan with a doctor, a helpline and a friend">
      {at === 0 && <><path d="M24 150 H296" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
        <Liver x={104} y={98} scale={0.55} stroke={GOLD} /><path d="M96 46 H112 M104 38 V54" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <WineGlass x={236} y={130} scale={1.2} fill={SOFT} /></>}
      {at === 1 && <><Bubble x={100} y={36} width={120} height={38} /><W x={160} y={60} size={11}>A safe plan</W>
        <Person x={116} y={150} scale={1.3} /><Person x={204} y={150} scale={1.3} fill={SOFT} /></>}
      {at === 2 && <><Phone x={92} y={100} lit /><W x={130} y={88} size={11} anchor="start">Drinkline</W><W x={130} y={108} size={11} anchor="start">0300 123 1110</W><W x={130} y={128} size={10} anchor="start">Free, confidential</W></>}
      {at === 3 && <><rect x="112" y="44" width="16" height="24" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="100" y="66" width="40" height="86" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="104" y="96" width="32" height="28" rx="4" fill={TINT} /><W x={120} y={174} size={10.5}>Alcohol free</W>
        <circle cx="220" cy="100" r="26" fill={WHITE} stroke={INK} strokeWidth="4" /><path d="M238 118 L256 136" stroke={INK} strokeWidth="6" strokeLinecap="round" /><circle cx="220" cy="100" r="3.5" fill={GOLD} /></>}
      {at === 4 && <><Bubble x={60} y={38} width={110} height={36} /><W x={115} y={61} size={11}>No thanks</W>
        <Person x={110} y={150} scale={1.3} /><Person x={210} y={150} scale={1.3} fill={SOFT} /></>}
      <W x={160} y={206} size={11}>{["Alcohol adds to the liver's damage", "Get medical help before stopping", "Support makes success more likely", "Alcohol-free can hold a tiny amount", "It is ok to just say no thanks"][at]}</W>
    </svg>} />;
}

function ScanRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Checks" title="Checks that catch problems early" label="Regular checks" credit="Illustration: Rehyn. Your liver unit sets your checks."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year as a ring with a scan every 6 months, and the other checks">
      <circle cx="96" cy="100" r="68" fill="none" stroke={LINE} strokeWidth="8" />
      {at === 0 && <path d="M96 32 A68 68 0 0 1 96 168" fill="none" stroke={INK} strokeWidth="8" />}
      {Array.from({ length: 12 }, (_, index) => { const [cx, cy] = polar(96, 100, 68, index * 30 - 90); return <circle key={index} cx={cx} cy={cy} r="3" fill={WHITE} stroke={INK} strokeWidth="1.5" />; })}
      {[32, 168].map(cy => <circle key={cy} cx="96" cy={cy} r="11" fill={at === 0 ? GOLD : INK} stroke={WHITE} strokeWidth="2" />)}
      {at === 0 && <><W x={96} y={96} size={10.5}>Every</W><W x={96} y={114} size={13}>6 months</W>
        <Waves x={248} y={62} /><Liver x={248} y={100} scale={0.42} /></>}
      {at === 1 && <><Clock x={96} y={92} r={20} hand={2} /><W x={96} y={132} size={10.5}>15 to 30 min</W>
        <Tags x={188} y={44} labels={["Letter first", "Ultrasound", "Results: 1 month"]} lit={index => index === 1} width={118} gap={40} /></>}
      {at === 2 && <><W x={96} y={104} size={12}>Varices</W><Tags x={188} y={44} labels={["Endoscopy", "Blood test", "FibroScan"]} lit={index => index === 0} width={118} gap={40} /></>}
      {at === 3 && <><Syringe x={96} y={100} scale={1.4} /><Tags x={188} y={44} labels={["Bone density", "Flu vaccine", "Pneumococcal"]} lit={() => true} width={118} gap={40} /></>}
      {at === 4 && <><Person x={96} y={112} scale={1.1} fill={SOFT} /><Person x={222} y={112} scale={1.1} /><Person x={282} y={112} scale={1.1} fill={SOFT} />
        <W x={222} y={146} size={10.5}>Consultant</W><W x={282} y={146} size={10.5}>Nurse</W><W x={252} y={176} size={10.5}>Who to contact</W></>}
      <W x={160} y={206} size={11}>{["An ultrasound scan every 6 months", "15 to 30 minutes, and it does not hurt", "Checks for varices: endoscopy or scan", "Bone checks, flu and other vaccines", "A named consultant, and who to call"][at]}</W>
    </svg>} />;
}

function ThreeLanes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows = [{ t: "999 or A&E", y: 18 }, { t: "Urgent GP or NHS 111", y: 64 }, { t: "Your liver team", y: 110 }];
  const on = [[0], [0], [0, 2], [1], []][at];
  const notes: Record<number, string>[] = [{ 0: "Black poo, confusion" }, { 0: "Variceal bleed" }, { 0: "Not responding", 2: "Milder signs" }, { 1: "Yellow skin" }, {}];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Warning signs" title="Know the signs, know who to call" label="Warning signs" credit={urgentCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three lanes: 999 or A&E, an urgent GP or NHS 111, and the liver team">
      {rows.map((row, index) => {
        const lit = on.includes(index), cy = row.y + 19;
        return <g key={row.t}>
          <rect x="16" y={row.y} width="288" height="38" rx="12" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          <circle cx="40" cy={cy} r="12" fill={lit ? GOLD : TINT} />
          {index === 0 && <path d={`M40 ${cy - 7} V${cy + 7} M33 ${cy} H47`} stroke={INK} strokeWidth="3" strokeLinecap="round" />}
          {index === 1 && <path d={`M35 ${cy - 6} C35 ${cy + 2}, 38 ${cy + 6}, 46 ${cy + 7}`} fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />}
          {index === 2 && <Person x={40} y={cy + 9} scale={0.45} />}
          <W x={62} y={cy + 4} size={11} anchor="start" fill={lit ? WHITE : TEXT}>{row.t}</W>
          {notes[at][index] && <W x={294} y={cy + 4} size={10} anchor="end" fill={lit ? WHITE : TEXT}>{notes[at][index]}</W>}
        </g>;
      })}
      {(at === 0 || at === 1) && <><Car x={44} y={172} /><Cross x={44} y={168} color={GOLD} size={1.6} /><W x={78} y={177} size={10.5} anchor="start">Do not drive to A&E</W></>}
      {at === 2 && <W x={160} y={177} size={10.5}>Do not drive yourself</W>}
      {at === 3 && <W x={160} y={177} size={10.5}>Or 111 online</W>}
      {at === 4 && <><rect x="28" y="156" width="44" height="28" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M36 166 H64 M36 174 H56" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        <W x={84} y={175} size={10.5} anchor="start">Share it with those close to you</W></>}
      <W x={160} y={206} size={11}>{["Vomiting blood, black poo: 999 or A&E", "A variceal bleed is an emergency", "Confusion: get help straight away", "Yellow skin: urgent GP or NHS 111", "Carry an alert card if you have HE"][at]}</W>
    </svg>} />;
}

// ==== Alcohol-related liver disease ==========================================================================

function RepairScale(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const angle = [0, 9, 6, 9, -9][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A liver that can only take so much" label="What ARLD is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balance between the liver's repair and the damage from alcohol">
      {(at === 0 || at === 1 || at === 4) && <Liver x={160} y={56} scale={0.4} stroke={at === 4 ? GOLD : INK}>{at === 1 && <Scars width={12} />}</Liver>}
      {at === 2 && [110, 140, 170, 200, 230].map((x, index) => <Person key={x} x={x} y={72} scale={0.8} fill={index === 2 ? INK : SOFT} />)}
      {at === 3 && ["Hepatitis C", "Diabetes", "Weight"].map((label, index) => <Tile key={label} x={16 + index * 99} y={28} width={90} label={label} lit />)}
      <g transform={`rotate(${angle} 160 150)`}>
        <path d="M64 150 H256" stroke={INK} strokeWidth="6" strokeLinecap="round" />
        <circle cx="72" cy="128" r="16" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M64 128 H80 M72 120 V136" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <Drop x={236} y={134} /><Drop x={256} y={134} /><Drop x={246} y={116} />
        <W x={72} y={102} size={10.5}>Repair</W>
        <W x={246} y={98} size={10.5}>Damage</W>
      </g>
      <path d="M160 150 L144 178 H176 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <W x={160} y={206} size={11}>{["Liver damage from alcohol over time", "The liver repairs, but only so much", "Anyone regularly over the guidelines", "Hepatitis C, diabetes, weight add risk", "Stop, and the liver can often recover"][at]}</W>
    </svg>} />;
}

function ThreeLivers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const xs = [58, 160, 262];
  const ring = [-1, 0, 1, 2, -1][at];
  const back = (index: number) => at === 4 ? [6, 4, 2][index] : at === 1 && index === 0 ? 6 : at === 2 && index === 1 ? 3 : 0;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stages" title="Three stages, and a way back" label="The three stages" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three livers, fatty, inflamed and scarred, with arrows back showing recovery">
      {xs.map((x, index) => <W key={x} x={x} y={30} size={10.5}>{`Stage ${index + 1}`}</W>)}
      {ring >= 0 && <rect x={xs[ring] - 50} y="40" width="100" height="94" rx="12" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-bulge"} />}
      <Liver x={58} y={78} scale={0.4}>{[[50, 50], [100, 36], [140, 30], [80, 80]].map(([cx, cy]) => <circle key={cx} cx={cx} cy={cy} r="14" fill={GOLD} />)}</Liver>
      <Liver x={160} y={78} scale={0.46} fill={TINT}><path d="M30 60 q12 -14 24 0 t24 0 t24 0 t24 0 M70 30 q12 -14 24 0 t24 0 t24 0" fill="none" stroke={SOFT} strokeWidth="8" /></Liver>
      <Liver x={262} y={78} scale={0.4}><Scars width={12} /></Liver>
      <Arrow x1={102} x2={112} y={78} color={at === 0 ? INK : LINE} /><Arrow x1={210} x2={220} y={78} color={at === 0 ? INK : LINE} />
      {["Fatty liver", "Hepatitis", "Cirrhosis"].map((label, index) => <W key={label} x={xs[index]} y={126} size={10.5}>{label}</W>)}
      {xs.map((x, index) => back(index) > 0 && <path key={x} d={`M${x + 26} 144 C${x + 26} 170, ${x - 26} 170, ${x - 26} 148 M${x - 32} 154 L${x - 26} 146 L${x - 20} 154`} fill="none" stroke={GOLD} strokeWidth={back(index)} strokeLinecap="round" strokeLinejoin="round" />)}
      <W x={160} y={206} size={11}>{["Three stages, by how much damage", "Stage 1: fat builds up; can recover", "Stage 2: swollen and damaged", "Stage 3: scarring that usually stays", "The sooner you stop, the more repair"][at]}</W>
    </svg>} />;
}

const Chip = ({ x, y, width, label, state }: { x: number; y: number; width: number; label: string; state: "faint" | "lit" }) =>
  <g><rect x={x} y={y} width={width} height="26" rx="9" fill={state === "lit" ? INK : WHITE} stroke={state === "faint" ? LINE : INK} strokeWidth="2" strokeDasharray={state === "faint" ? "5 4" : undefined} />
    <W x={x + width / 2} y={y + 17} size={10.5} fill={state === "lit" ? WHITE : SOFT}>{label}</W></g>;

function QuietSigns(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const early = [{ x: 20, y: 112, w: 62, t: "Tired" }, { x: 90, y: 112, w: 84, t: "Less hungry" }];
  const later = [{ x: 184, y: 112, w: 72, t: "Itching" }, { x: 204, y: 76, w: 84, t: "Swelling" }, { x: 222, y: 40, w: 84, t: "Jaundice" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="Silent first, then clear signs" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Signs along a line from early to later, quiet at first and clearer as damage grows">
      {at < 3 && <>
        <path d="M20 152 H294 M286 146 L295 152 L286 158" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <W x={20} y={172} size={10.5} anchor="start">Early</W><W x={298} y={172} size={10.5} anchor="end">Later</W>
        {early.map(chip => <Chip key={chip.t} x={chip.x} y={chip.y} width={chip.w} label={chip.t} state={at === 1 ? "lit" : "faint"} />)}
        {later.map(chip => <Chip key={chip.t} x={chip.x} y={chip.y} width={chip.w} label={chip.t} state={at === 2 ? "lit" : "faint"} />)}
        {at === 0 && <Liver x={64} y={62} scale={0.35} />}</>}
      {at === 3 && <><Tile x={60} y={44} width={200} height={34} label="999 or A&E" lit size={12} /><Tile x={60} y={92} width={200} height={34} label="See a GP" lit={false} size={12} /></>}
      <W x={160} y={206} size={11}>{["Often no symptoms in the early stages", "Tired, less hungry, upper right pain", "Later: jaundice, swelling, bruising", "Vomit blood or black poo? 999 or A&E"][at]}</W>
    </svg>} />;
}

function FibrosisDial(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const ramp = at === 2 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="Measuring the scarring that matters" label="Tests and diagnosis" credit="Illustration: Rehyn. A picture of the scale, not a result."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A dial of liver scarring from 0 to 4, with the tests that measure it">
      {[0, 1, 2, 3, 4].map(index => {
        const [lx, ly] = polar(160, 156, 96, 198 + index * 36);
        return <g key={index}>
          <path d={arc(160, 156, 70, 181.5 + index * 36, 214.5 + index * 36)} fill="none" stroke={ramp ? INK : LINE} strokeOpacity={ramp ? 0.2 + index * 0.2 : 1} strokeWidth="22" />
          <W x={lx} y={ly + 4} size={11}>{index}</W>
        </g>;
      })}
      <circle cx="160" cy="156" r="6" fill={INK} />
      <W x={160} y={184} size={10.5}>Scarring, 0 to 4</W>
      {at === 0 && <><Bubble x={14} y={22} width={88} height={32} /><W x={58} y={43} size={10.5}>Questions</W><Person x={40} y={100} scale={0.9} /></>}
      {at === 1 && <><Tube x={36} y={70} /><Waves x={284} y={62} /><path d="M268 80 H300" stroke={INK} strokeWidth="3" strokeLinecap="round" /></>}
      {at === 3 && <><Bubble x={216} y={22} width={94} height={32} /><W x={263} y={43} size={10}>Ask for a scan</W><Person x={284} y={100} scale={0.9} /></>}
      {at === 4 && ["Low", "Unclear", "High"].map((label, index) => <Tile key={label} x={24 + index * 96} y={14} width={80} height={24} label={label} lit={false} />)}
      <W x={160} y={206} size={11}>{["Honest answers help the right care", "Blood tests, scans, sometimes a biopsy", "Scarring is scored from 0 to 4", "Over the guidelines? Get a liver check", "Low risk: retest every 2 years"][at]}</W>
    </svg>} />;
}

function SafeClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Stopping" title="Stopping safely, not suddenly" label="Stopping or cutting down" credit="Illustration: Rehyn. Get medical help before stopping heavy drinking."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock of the hours after a last drink, a doctor, steps down, and support at home">
      <g opacity={at === 0 ? 1 : 0.35}>
        <circle cx="70" cy="76" r="44" fill={WHITE} stroke={INK} strokeWidth="3" />
        {at === 0 && <path d="M70 120 A44 44 0 0 1 70 32" fill="none" stroke={GOLD} strokeWidth="7" />}
        <path d="M70 76 V46 M70 76 L92 76" stroke={TEXT} strokeWidth="3" strokeLinecap="round" />
      </g>
      {at === 0 && <><W x={70} y={144} size={10.5}>6 to 12 hours</W><W x={70} y={160} size={10}>after the last drink</W>
        <Tags x={156} y={40} labels={["Anxiety", "Sweating", "Shaking"]} lit={() => true} width={140} gap={38} /></>}
      {at === 1 && <><Bubble x={176} y={26} width={110} height={34} /><W x={231} y={48} size={10.5}>Speak first</W>
        <Person x={190} y={136} scale={1.3} /><Person x={266} y={136} scale={1.3} fill={SOFT} /><W x={266} y={176} size={10.5}>Doctor</W></>}
      {at === 2 && [90, 70, 50, 30, 14].map((h, index) => <rect key={index} x={156 + index * 30} y={150 - h} width="26" height={h} rx="4" fill={index === 4 ? GOLD : INK} />)}
      {at === 3 && <><path d="M168 98 L226 52 L284 98 V156 H168 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <Person x={206} y={140} scale={0.8} /><Person x={246} y={140} scale={0.8} fill={SOFT} /><W x={206} y={174} size={10}>Nurse</W><W x={246} y={174} size={10}>Family</W></>}
      {at === 4 && <><path d="M150 118 C186 118, 196 100, 220 104 S262 120, 296 112 M288 106 L297 112 L288 119" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <Person x={170} y={100} scale={0.9} /><circle cx="220" cy="104" r="5" fill={GOLD} /></>}
      <W x={160} y={206} size={11}>{["Stopping suddenly can be dangerous", "Shaking or sweating? Speak to a doctor", "Cutting down slowly can still help", "A planned detox, often at home", "A small mistake? Keep moving forward"][at]}</W>
    </svg>} />;
}

function SupportCircle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const nodes = [{ t: "GP", x: 160, y: 30 }, { t: "Drinkline", x: 266, y: 100 }, { t: "Groups", x: 160, y: 170 }, { t: "Liver nurse", x: 54, y: 100 }];
  const litIndex = [-1, 0, 2, 1, 3][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="Help is there, and it works" label="Support to stop drinking" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person at the centre of a circle of support: a GP, a helpline, groups and a liver nurse">
      <ellipse cx="160" cy="100" rx="106" ry="70" fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="5 6" />
      {nodes.map((node, index) => <path key={node.t} d={`M160 100 L${node.x} ${node.y}`} stroke={index === litIndex ? INK : LINE} strokeWidth="3" strokeDasharray={index === litIndex ? "6 6" : undefined} className={index === litIndex && !still ? "lib-types-flow" : undefined} />)}
      <circle cx="160" cy="100" r="30" fill={TINT} stroke={SOFT} strokeWidth="2" />
      {at === 0 && <Ring x={160} y={100} r={36} />}
      <Person x={160} y={112} scale={1} />
      {nodes.map((node, index) => <Tile key={node.t} x={node.x - 42} y={node.y - 14} width={84} label={node.t} lit={index === litIndex} />)}
      {at === 2 && <Pill x={236} y={172} fill={GOLD} />}
      <W x={160} y={206} size={11}>{["Nothing to feel ashamed about", "A GP is a good place to start", "Talking therapy, medicines, groups", "Drinkline: 0300 123 1110, free", "Liver UK nurses: 0800 652 7330"][at]}</W>
    </svg>} />;
}

function PillSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const boxes = ["Withdrawal", "Alcohol-free", "Vitamin B1"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="The right medicine at each step" label="Medicines that help" credit="Illustration: Rehyn. Medicines are chosen with your own care team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three medicine boxes along a path: during withdrawal, staying alcohol-free, and vitamin B1">
      <g opacity={at >= 3 ? 0.45 : 1}>
        {boxes.map((label, index) => {
          const on = at === index, x = 14 + index * 100;
          return <g key={label}>
            <rect x={x} y="30" width="92" height="76" rx="12" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
            <W x={x + 46} y={52} size={10.5} fill={on ? WHITE : TEXT}>{label}</W>
            <Pill x={x + 46} y={82} fill={on ? GOLD : INK} />
          </g>;
        })}
        <path d="M20 124 H292 M286 118 L293 124 L286 130" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {at === 3 && <><Liver x={70} y={160} scale={0.3} /><Person x={140} y={174} scale={0.85} /><W x={162} y={166} size={10.5} anchor="start">Specialist</W></>}
      {at === 4 && <><Person x={54} y={174} scale={0.85} /><W x={76} y={166} size={10.5} anchor="start">Pharmacist</W><Tick x={170} y={162} color={GOLD} size={1.4} /></>}
      <W x={160} y={206} size={11}>{["Medicine can ease withdrawal symptoms", "Medicines that help reduce cravings", "Thiamine, vitamin B1, is offered", "Liver medicines need a specialist", "Check with a pharmacist first"][at]}</W>
    </svg>} />;
}

function BestChance(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const links = ["M94 101 C106 101, 106 51, 118 51", "M94 101 C106 101, 106 153, 118 153", "M202 51 C214 51, 214 101, 226 101", "M202 153 C214 153, 214 101, 226 101"];
  const linkLit = (index: number) => (at === 1 && index < 2) || (at === 2 && (index === 1 || index === 3)) || ((at === 3 || at === 4) && index > 1);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Treatment" title="Giving the liver its best chance" label="Treatment for liver damage" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from stopping alcohol to repair or stabilising, then to regular checks or a transplant">
      {links.map((d, index) => <path key={d} d={d} fill="none" stroke={linkLit(index) ? INK : LINE} strokeWidth="3" />)}
      {at === 0 && <Liver x={52} y={50} scale={0.3} stroke={GOLD} />}
      <Tile x={10} y={86} width={84} height={30} label="Stop alcohol" lit={at === 0} />
      <Tile x={118} y={36} width={84} height={30} label="Repair" lit={at === 1} />
      <Tile x={118} y={138} width={84} height={30} label="Stabilise" lit={at === 1 || at === 2} />
      <Tile x={226} y={86} width={84} height={30} label={at === 4 ? "Transplant" : "Checks"} lit={at >= 3} />
      {at === 3 && <W x={268} y={138} size={10.5}>Every 2 years</W>}
      {at === 4 && <><rect x="254" y="24" width="30" height="46" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="277" cy="48" r="2.5" fill={GOLD} /></>}
      <W x={160} y={206} size={11}>{["The liver can repair itself", "Early: repair. Later: stabilise", "Complications can be treated", "Fibrosis tests every 2 years", "Transplants are possible with ARLD"][at]}</W>
    </svg>} />;
}

function UnitWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const units = [[1, 0, 0, 0, 0, 0, 0], [0, 4, 0, 5, 0, 5, 0], [0, 2, 0, 2, 0, 3, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Units" title="Counting units, one drink at a time" label="Units and guidelines" credit="Illustration: Rehyn. 14 units a week is the UK guide for a healthy liver."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of days with units stacked as blocks">
      <g opacity={at === 4 ? 0.3 : 1}>{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => {
        const x = 24 + index * 40;
        return <g key={index}>
          <rect x={x} y="92" width="32" height="70" rx="6" fill={WHITE} stroke={LINE} strokeWidth="2" />
          {Array.from({ length: units[index] }, (_, block) => <rect key={block} x={x + 3} y={160 - (block + 1) * 13} width="26" height="11" rx="3" fill={at === 0 ? GOLD : INK} />)}
          {at === 3 && <Tick x={x + 16} y={128} color={GOLD} />}
          <W x={x + 16} y={180} size={10.5}>{day}</W>
        </g>;
      })}</g>
      {at === 0 && <><rect x="44" y="26" width="40" height="40" rx="5" fill={GOLD} /><W x={98} y={42} size={12} anchor="start">1 unit</W><W x={98} y={62} size={10.5} anchor="start">10ml of pure alcohol</W></>}
      {at === 1 && <><W x={160} y={44} size={12}>14 units a week</W><W x={160} y={66} size={10.5}>Spread over 3 or more days</W></>}
      {at === 2 && <W x={160} y={54} size={12}>Less is lower risk</W>}
      {at === 3 && <Liver x={160} y={50} scale={0.32} stroke={GOLD} />}
      {at === 4 && <><Tumbler x={60} y={50} scale={1.3} full={0.8} fill={INK} /><W x={82} y={44} size={10.5} anchor="start">Strong lager</W><W x={82} y={62} size={11} anchor="start">3 units</W>
        <Tumbler x={186} y={50} scale={1.3} full={0.8} fill={SOFT} /><W x={208} y={44} size={10.5} anchor="start">Lower strength</W><W x={208} y={62} size={11} anchor="start">Just over 2</W></>}
      <W x={160} y={206} size={11}>{["One unit: 10ml of pure alcohol", "No more than 14 units, spread out", "Less than 14 is low risk, not safe", "With ARLD, the aim is to stop fully", "The alcohol counts, not the drink type"][at]}</W>
    </svg>} />;
}

function DayPlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const parts = [{ a: 180, b: 270, t: "Veg", fill: INK }, { a: 270, b: 360, t: "Fruit", fill: SOFT }, { a: 0, b: 90, t: "Grains", fill: TINT }, { a: 90, b: 180, t: "Protein", fill: LINE }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Food" title="Eating well to help the liver heal" label="Eating well" credit="Illustration: Rehyn. Ask your team or a dietitian for your own plan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balanced plate beside the liver, meal times, salt and supplements">
      <circle cx="96" cy="100" r="74" fill={WHITE} stroke={at === 0 ? GOLD : INK} strokeWidth={at === 0 ? 5 : 3} />
      {parts.map(part => {
        const [lx, ly] = polar(96, 100, 36, (part.a + part.b) / 2);
        return <g key={part.t}>
          <path d={sector(96, 100, 62, part.a, part.b)} fill={at === 1 ? part.fill : WHITE} stroke={SOFT} strokeWidth="2" />
          <W x={lx} y={ly + 4} size={10} fill={at === 1 && part.fill === INK ? WHITE : TEXT}>{part.t}</W>
        </g>;
      })}
      {at === 0 && <><Liver x={248} y={98} scale={0.42} /><path d="M240 50 H256 M248 42 V58" stroke={GOLD} strokeWidth="4" strokeLinecap="round" /></>}
      {at === 1 && <Tags x={190} y={44} labels={["Wholegrains", "Lean protein", "Less processed"]} lit={() => true} width={116} gap={40} />}
      {at === 2 && <><circle cx="248" cy="84" r="34" fill={WHITE} stroke={INK} strokeWidth="3" />
        {[0, 1, 2, 3, 4].map(index => { const [cx, cy] = polar(248, 84, 25, index * 72 - 90); return <circle key={index} cx={cx} cy={cy} r="5" fill={GOLD} />; })}
        <W x={248} y={140} size={10.5}>Every 2 to 3 hours</W><W x={248} y={160} size={10.5}>Snack at bedtime</W></>}
      {at === 3 && <><SaltShaker x={248} y={90} /><Cross x={248} y={90} color={GOLD} size={1.9} /><W x={248} y={142} size={10.5}>Ask a dietitian</W></>}
      {at === 4 && <><rect x="218" y="56" width="18" height="10" rx="2" fill={SOFT} /><rect x="214" y="64" width="26" height="48" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={227} y={96} size={16} fill={GOLD}>?</W><Person x={280} y={112} scale={1.1} /><W x={248} y={150} size={10.5}>Ask first</W></>}
      <W x={160} y={206} size={11}>{["Eating well helps the liver recover", "Veg, fruit, wholegrains, lean protein", "Little and often; enough protein", "Less salt, with a dietitian's advice", "Check before taking supplements"][at]}</W>
    </svg>} />;
}

function SideBySide(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Family and friends" title="Supporting them, and yourself" label="For family and friends" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people side by side, with what family and friends can share and the support for carers">
      {at === 4 && <ellipse cx="194" cy="124" rx="46" ry="60" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 6" />}
      <Person x={126} y={140} scale={1.6} />
      <Person x={194} y={140} scale={1.6} fill={SOFT} />
      {at === 0 && <HeartShape x={160} y={46} size={40} fill={TINT} stroke={GOLD} />}
      {at === 1 && <><Tumbler x={84} y={130} scale={0.9} full={0.7} /><Tumbler x={236} y={130} scale={0.9} full={0.7} /></>}
      {at === 2 && <Pill x={160} y={50} fill={GOLD} />}
      {at === 3 && <><Tile x={14} y={20} width={96} height={26} label="Medicines" lit={false} /><Tile x={116} y={20} width={100} height={26} label="Appointments" lit={false} /><Tile x={222} y={20} width={86} height={26} label="Diet" lit={false} /></>}
      {at === 4 && <Tile x={196} y={18} width={112} height={26} label="Al-Anon, Adfam" lit />}
      <W x={160} y={206} size={11}>{["Early help can make a big difference", "Changes made together are easier", "Support with their medicine, if agreed", "Day to day: medicines, appointments", "Caring for yourself matters too"][at]}</W>
    </svg>} />;
}

function RedCard(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const items = [["Vomiting blood", "Black, sticky poo", "Tummy pain", "Hard to breathe", "Sudden confusion"], ["Shaking visibly", "Very restless", "Confusion", "Seeing things", "A seizure or fit"],
    ["Vomiting blood", "Very dark poo", "Sudden confusion", "Slurred speech"], ["Get a lift,", "or call 999", "Bring medicines"], ["Liver symptoms", "Trouble stopping", "Worried for others"]][at];
  const dark = at < 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Warning signs" title="Signs that cannot wait" label="Warning signs" credit={urgentCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A card of warning signs beside an ambulance, a car not to drive, and a GP">
      <rect x="16" y="20" width="140" height="156" rx="12" fill={dark ? INK : at === 4 ? WHITE : TINT} stroke={INK} strokeWidth="2.5" />
      <W x={86} y={46} size={12} fill={dark ? WHITE : TEXT}>{at === 4 ? "See a GP" : "999 or A&E"}</W>
      {items.map((item, index) => <W key={item} x={30} y={72 + index * 22} size={10.5} anchor="start" fill={dark ? WHITE : TEXT}>{item}</W>)}
      <g opacity={at === 4 ? 0.35 : 1}><Ambulance x={240} y={72} />{at < 4 && <W x={240} y={124} size={11}>Call 999</W>}</g>
      {at === 3 && <><Car x={240} y={160} /><Cross x={240} y={156} color={GOLD} size={1.7} /></>}
      {at === 4 && <Person x={240} y={150} scale={1.2} />}
      <W x={160} y={206} size={11}>{["Black, sticky poo? 999 or go to A&E", "Severe withdrawal or a fit: call 999", "With cirrhosis: confused? 999 or A&E", "Do not drive: get a lift or call 999", "Worried about drinking? See a GP"][at]}</W>
    </svg>} />;
}

// ==== Hepatitis B and C =======================================================================================

function TwoViruses(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What they are" title="Two viruses, one liver" label="What hepatitis B and C are" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The hepatitis B and C viruses either side of a liver">
      <Liver x={160} y={102} scale={0.5} fill={at === 2 ? TINT : WHITE}>{at === 2 && <Scars width={10} />}</Liver>
      <Virus x={58} y={62} r={20} label="B" fill={at === 3 ? TINT : WHITE} />
      <Virus x={262} y={62} r={20} label="C" fill={at === 3 ? TINT : WHITE} />
      {at === 0 && <><W x={58} y={114} size={10.5}>Blood, fluids</W><W x={262} y={114} size={10.5}>Blood</W></>}
      {at === 1 && <><W x={160} y={150} size={10.5}>6 months</W><rect x="40" y="156" width="120" height="24" fill={TINT} stroke={INK} strokeWidth="2" /><W x={100} y={172} size={10.5}>Acute</W>
        <rect x="160" y="156" width="120" height="24" fill={INK} stroke={INK} strokeWidth="2" /><W x={220} y={172} size={10.5} fill={WHITE}>Chronic</W></>}
      {at === 3 && <><W x={58} y={114} size={10.5}>Controlled</W><W x={262} y={114} size={10.5}>Cured</W><Tick x={262} y={134} color={GOLD} size={1.3} /></>}
      {at === 4 && <>{[["A", 112], ["D", 160], ["E", 208]].map(([label, x]) => <Virus key={label} x={Number(x)} y={28} r={11} label={String(label)} />)}<Tile x={130} y={146} width={60} height={24} label="HIV" lit={false} /></>}
      <W x={160} y={206} size={11}>{["Two viruses that infect liver cells", "Over 6 months is called chronic", "Untreated, they can scar the liver", "C: cured with tablets. B: controlled", "With B, test for C, D and HIV too"][at]}</W>
    </svg>} />;
}

function BloodNotHugs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="How they spread" title="Blood, not hugs" label="How they spread" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two panels: what can pass the viruses on, and everyday things that cannot">
      <rect x="14" y="24" width="140" height="154" rx="12" fill={WHITE} stroke={at === 3 ? LINE : INK} strokeWidth="2.5" />
      <rect x="166" y="24" width="140" height="154" rx="12" fill={WHITE} stroke={at === 3 ? GOLD : INK} strokeWidth={at === 3 ? 4 : 2.5} />
      <W x={84} y={46} size={10.5} fill={at === 3 ? SOFT : TEXT}>Can pass it on</W>
      <W x={236} y={46} size={10.5}>Not passed on</W>
      {(at === 0 || at === 3) && <g opacity={at === 3 ? 0.3 : 1}><Drop x={84} y={96} scale={2.4} fill={GOLD} /><W x={84} y={148} size={11}>Blood</W><W x={84} y={166} size={10}>B: body fluids too</W></g>}
      {at === 1 && <><Syringe x={52} y={90} rotate={-30} scale={1.3} /><path d="M106 108 L126 72" stroke={INK} strokeWidth="8" strokeLinecap="round" /><path d="M104 112 L100 120" stroke={INK} strokeWidth="2.5" />
        <W x={52} y={128} size={10}>Needles</W><W x={116} y={128} size={10}>Tattoo kit</W></>}
      {at === 2 && <><rect x="62" y="62" width="44" height="58" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M64 94 H104 V112 A6 6 0 0 1 98 118 H70 A6 6 0 0 1 64 112 Z" fill={GOLD} />
        <path d="M84 120 V134" stroke={INK} strokeWidth="2.5" /><W x={84} y={158} size={11}>Before 1996</W></>}
      {at === 4 && ["Use a condom", "Do not share", "Licensed tattoos"].map((label, index) => <Tile key={label} x={24} y={62 + index * 36} width={120} label={label} lit={false} size={10} />)}
      <Person x={198} y={96} scale={1} /><Person x={214} y={96} scale={1} fill={SOFT} />
      <HeartShape x={270} y={86} size={30} fill={TINT} />
      <circle cx="238" cy="146" r="13" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="238" cy="146" r="8" fill="none" stroke={LINE} strokeWidth="2" />
      <W x={206} y={128} size={10}>Hugs</W><W x={270} y={118} size={10}>Kisses</W><W x={238} y={172} size={10}>Meals</W>
      <W x={160} y={206} size={11}>{["B: blood and body fluids. C: blood", "Shared needles and unsterile equipment", "Transfusion before 1996? Ask your GP", "Not by hugs, kisses or a shared meal", "Condoms, and do not share razors"][at]}</W>
    </svg>} />;
}

function Iceberg(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const chips = [[], [["Tired", "Feeling sick"], ["Jaundice", "High temp"]], [["Tiredness", "Itchy skin"], ["Brain fog", "Mood changes"]], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="Silent for years" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An iceberg: a few symptoms above the water, and most of it, no symptoms, below">
      <rect x="8" y="84" width="304" height="98" rx="10" fill={TINT} />
      <path d="M8 84 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke={SOFT} strokeWidth="2" />
      <g opacity={at === 3 ? 0.4 : 1}>
        <path d="M100 84 H226 L262 118 L234 166 L156 176 L84 150 L74 112 Z" fill={WHITE} stroke={at === 0 ? GOLD : INK} strokeWidth={at === 0 ? 3.5 : 2.5} strokeLinejoin="round" />
        <path d="M128 84 L146 48 L160 58 L178 36 L198 84 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        {at !== 3 && <W x={166} y={134} size={13} fill={at === 0 ? TEXT : SOFT}>No symptoms</W>}
      </g>
      {chips.length > 0 && <><Tags x={16} y={26} labels={chips[0]} lit={() => true} width={96} gap={32} /><Tags x={212} y={26} labels={chips[1]} lit={() => true} width={96} gap={32} /></>}
      {at === 3 && <Tile x={70} y={110} width={180} height={34} label="Urgent GP or 111" lit size={12} />}
      <W x={160} y={206} size={11}>{["Most with hepatitis C have no symptoms", "New infection: tired, sick, jaundice", "Years later: tiredness, brain fog", "Think it's hepatitis? Urgent GP or 111"][at]}</W>
    </svg>} />;
}

function TestKit(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Testing" title="One blood test tells you" label="Getting tested" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A finger-prick test kit, where to get tested, and the two kinds of result">
      <g opacity={at === 2 ? 1 : 0.45}>
        <rect x="18" y="40" width="90" height="100" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <Drop x={63} y={80} scale={1.5} fill={GOLD} /><rect x="48" y="102" width="30" height="8" rx="4" fill={SOFT} />
        <W x={63} y={130} size={10.5}>Home kit</W>
      </g>
      {at === 0 && <Liver x={214} y={92} scale={0.5}><Tick x={100} y={60} color={GOLD} size={2.4} /></Liver>}
      {at === 1 && <>{[146, 184, 222, 260, 296].map((x, index) => <Person key={x} x={x} y={112} scale={0.9} fill={index === 2 ? INK : SOFT} />)}<W x={222} y={154} size={10.5}>Even with no symptoms</W></>}
      {at === 2 && <><Tile x={128} y={44} width={84} label="GP" lit={false} /><Tile x={220} y={44} width={84} label="Clinic" lit={false} />
        <Tile x={128} y={82} width={84} label="Pharmacy" lit={false} /><Tile x={220} y={82} width={84} label="At home" lit /></>}
      {at === 3 && <><Tile x={124} y={62} width={78} height={44} label="Antibody" lit={false} /><Arrow x1={208} x2={222} y={84} /><Tile x={228} y={62} width={78} height={44} label="RNA" lit />
        <W x={163} y={128} size={10}>Ever had it?</W><W x={267} y={128} size={10}>Virus now?</W></>}
      {at === 4 && <><rect x="134" y="54" width="92" height="58" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M134 54 L180 88 L226 54" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={180} y={134} size={10.5}>Up to 2 weeks</W><Person x={262} y={110} /><Person x={290} y={110} fill={SOFT} /></>}
      <W x={160} y={206} size={11}>{["Hep C can be cured, so get tested", "Worth a test, even with no symptoms", "GP, clinics, pharmacies, or at home", "Antibody test, then an RNA test", "Results can take up to 2 weeks"][at]}</W>
    </svg>} />;
}

function TwelveWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Hepatitis C" title="Tablets that cure hepatitis C" label="Hepatitis C treatment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Twelve weeks of daily tablets, then a test for cure">
      {Array.from({ length: 12 }, (_, index) => {
        const filled = at === 2 || (at === 0 && index < 8), soft = at === 0 && index >= 8;
        const x = 14 + index * 19;
        return <g key={index}><rect x={x} y="70" width="16" height="22" rx="4" fill={filled ? INK : soft ? SOFT : WHITE} stroke={INK} strokeWidth="1.5" />
          <circle cx={x + 8} cy="81" r="3" fill={filled || soft ? WHITE : INK} /></g>;
      })}
      <Arrow x1={244} x2={260} y={81} />
      <circle cx="284" cy="81" r="17" fill={at === 3 ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" />
      <g opacity={at === 3 ? 1 : 0.4}><Tick x={284} y={82} color={at === 3 ? WHITE : INK} /></g>
      <W x={120} y={112} size={10.5}>Weeks of tablets</W><W x={284} y={116} size={10.5}>Cure test</W>
      {at === 0 && <><Pill x={60} y={38} /><W x={88} y={42} size={11} anchor="start">Every day</W></>}
      {at === 1 && <><Tube x={50} y={38} scale={0.8} /><path d="M80 22 L92 52" stroke={INK} strokeWidth="6" strokeLinecap="round" /><circle cx="93" cy="55" r="5" fill={SOFT} stroke={INK} strokeWidth="2" />
        <W x={112} y={44} size={10.5} anchor="start">Specialist nurse</W><Person x={250} y={48} scale={0.8} /></>}
      {at === 3 && <W x={270} y={50} size={10.5}>12 weeks later</W>}
      {at === 4 && <><rect x="66" y="147" width="50" height="6" rx="3" fill={INK} /><rect x="112" y="139" width="12" height="9" rx="2" fill={SOFT} stroke={INK} strokeWidth="1.5" />
        <rect x="146" y="147" width="40" height="6" rx="3" fill={INK} /><rect x="184" y="138" width="8" height="22" rx="2" fill={SOFT} stroke={INK} strokeWidth="1.5" />
        <W x={206} y={154} size={10.5} anchor="start">Replace</W></>}
      <W x={160} y={206} size={11}>{["Tablets every day for 8 to 12 weeks", "First, blood tests and a FibroScan", "Finish the course, even feeling better", "A test for cure 12 weeks after", "It is possible to get it again"][at]}</W>
    </svg>} />;
}

function ViralDial(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Hepatitis B" title="Controlled, checked, kept low" label="Hepatitis B treatment" credit="Illustration: Rehyn. A picture of the idea, not a result."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A dial of the virus level turned down, beside treatment and check-ups">
      <Gauge x={92} y={120} r={56} value={[0.15, 0.5, 0.05, 0.3, 0.1][at]} label="Viral load" />
      <W x={36} y={142} size={10}>Low</W><W x={148} y={142} size={10}>High</W>
      {at === 0 && <><Person x={212} y={128} scale={1.3} /><Tumbler x={270} y={118} scale={1.2} /><W x={240} y={172} size={10.5}>Rest and water</W></>}
      {at === 1 && <><Person x={240} y={124} scale={1.3} fill={SOFT} /><W x={240} y={168} size={10.5}>Liver specialist</W></>}
      {at === 2 && <><Pill x={206} y={78} /><Pill x={248} y={94} rotate={-15} /><Pill x={288} y={78} /><W x={248} y={136} size={10.5}>Every day</W></>}
      {at === 3 && <><Syringe x={246} y={92} rotate={-30} scale={1.8} /><W x={246} y={144} size={10.5}>About a year</W></>}
      {at === 4 && <><path d="M180 104 H300" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
        {[3, 6, 9, 12, 18, 24].map(month => <circle key={month} cx={180 + month * 5} cy="104" r="5" fill={month <= 12 ? INK : SOFT} stroke={WHITE} strokeWidth="1.5" />)}
        <W x={210} y={84} size={10}>3-monthly</W><W x={270} y={84} size={10}>6-monthly</W><W x={210} y={128} size={10}>Year 1</W><W x={270} y={128} size={10}>Year 2</W></>}
      <W x={160} y={206} size={11}>{["A new infection usually clears itself", "Chronic B can be controlled", "Daily tablets aim for undetectable", "Interferon: about a year of injections", "Check-ups every 3, then 6 months"][at]}</W>
    </svg>} />;
}

function ThreeDoses(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Vaccine" title="Three doses of protection" label="The hepatitis B vaccine" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A baby and an adult either side of a shield, with three doses each">
      <g opacity={at === 4 ? 0.4 : 1}><path d="M160 46 L198 60 V92 C198 118, 180 132, 160 140 C140 132, 122 118, 122 92 V60 Z" fill={TINT} stroke={at === 0 ? GOLD : INK} strokeWidth="3" strokeLinejoin="round" />
        <W x={160} y={100} size={13}>Hep B</W></g>
      <Baby x={60} y={92} scale={1.3} fill={at === 1 ? INK : TINT} />
      <Person x={260} y={118} scale={1.3} fill={at === 2 || at === 4 ? INK : SOFT} />
      {at === 0 && <><W x={60} y={152} size={12}>Over 98%</W><W x={60} y={170} size={10}>of babies</W><W x={260} y={156} size={12}>90%</W><W x={260} y={174} size={10}>of adults</W></>}
      {at === 1 && ["8 wk", "12 wk", "16 wk"].map((label, index) => <Tile key={label} x={104 + index * 38} y={152} width={36} height={24} label={label} lit size={10} />)}
      {at === 2 && <W x={260} y={160} size={10.5}>Higher risk</W>}
      {at === 3 && <>{[36, 60, 84, 236, 260, 284].map(x => <Syringe key={x} x={x} y={162} rotate={-45} scale={0.8} lit />)}<W x={160} y={170} size={10.5}>1 month apart</W></>}
      {at === 4 && <><Syringe x={160} y={92} rotate={-30} scale={1.6} /><W x={250} y={162} size={10}>As soon as possible</W></>}
      <W x={160} y={206} size={11}>{["90% of adults, over 98% of babies", "Babies: at 8, 12 and 16 weeks", "Adults at higher risk need it", "At least 3 doses, a month apart", "Exposed? Speak to a doctor quickly"][at]}</W>
    </svg>} />;
}

function LoadOff(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const blocks = ["Alcohol", "Weight", "Smoking", "Medicines"];
  const lifted = (index: number) => (at === 1 && index === 0) || (at === 2 && index === 1) || (at === 3 && index >= 2);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Liver care" title="Lightening your liver's load" label="Looking after your liver" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Weights resting on a liver, lifted off one by one">
      <g opacity={at === 4 ? 0.3 : 1}>{blocks.map((label, index) => {
        const y = 108 - index * 26;
        return lifted(index)
          ? <g key={label}><rect x="112" y={y} width="96" height="22" rx="6" fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="5 4" />
            <rect x="214" y={y - 6} width="96" height="22" rx="6" fill={WHITE} stroke={GOLD} strokeWidth="3" /><W x={262} y={y + 9} size={10.5}>{label}</W></g>
          : <g key={label}><rect x="112" y={y} width="96" height="22" rx="6" fill={INK} /><W x={160} y={y + 15} size={10.5} fill={WHITE}>{label}</W></g>;
      })}</g>
      <Liver x={160} y={160} scale={0.46} fill={at === 0 ? TINT : WHITE} stroke={at === 4 ? GOLD : INK} />
      {at === 4 && <><path d="M262 56 L292 66 V92 C292 114, 278 126, 262 132 C246 126, 232 114, 232 92 V66 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={262} y={100} size={12}>A, B</W><W x={262} y={150} size={10.5}>Vaccines</W></>}
      <W x={160} y={206} size={11}>{["Weight, alcohol, smoking add damage", "Alcohol: the NHS advises none with B", "A balanced diet and staying active", "Stopping smoking helps the liver", "Ask about hepatitis A and B vaccines"][at]}</W>
    </svg>} />;
}

function Circles(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const inner = [[144, 86], [56, 124]], outer = [[40, 70], [160, 70], [100, 178]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Telling others" title="Choosing who to tell" label="Telling partners and family" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Circles of people around one person: those close by, and trusted friends further out">
      <circle cx="100" cy="100" r="80" fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="5 6" />
      <circle cx="100" cy="100" r="44" fill="none" stroke={at === 1 ? INK : LINE} strokeWidth={at === 1 ? 3 : 2} />
      {at === 0 && <Ring x={100} y={100} r={24} />}
      <Person x={100} y={114} />
      {inner.map(([x, y]) => <Person key={x} x={x} y={y} scale={0.7} fill={at === 1 ? INK : SOFT} />)}
      {outer.map(([x, y]) => <Person key={x} x={x} y={y} scale={0.7} fill={SOFT} />)}
      {at === 0 && <Tags x={198} y={60} labels={["Who you trust", "Who was there"]} lit={() => true} width={110} gap={40} />}
      {at === 1 && <Tags x={198} y={44} labels={["Household", "Partners", "Test, vaccine"]} lit={() => true} width={110} gap={38} />}
      {at === 2 && <><Bubble x={196} y={30} width={112} height={52} /><W x={252} y={52} size={10.5}>It's curable</W><W x={252} y={70} size={10.5}>Hugs are safe</W>
        <Tile x={204} y={108} width={96} label="A leaflet" lit /></>}
      {at === 3 && <><rect x="226" y="70" width="60" height="42" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M244 70 V62 H268 V70" fill="none" stroke={INK} strokeWidth="2.5" />
        <W x={256} y={138} size={10.5}>Your choice</W><W x={256} y={158} size={10.5}>Equality Act</W></>}
      <W x={160} y={206} size={11}>{["Your choice who to tell", "Household and partners: test, vaccine", "Plan what to say; bring a leaflet", "Telling work is mostly up to you"][at]}</W>
    </svg>} />;
}

function BabyTimeline(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const doses = [{ x: 150, t: "Birth" }, { x: 178, t: "4w" }, { x: 206, t: "8w" }, { x: 234, t: "12w" }, { x: 262, t: "16w" }, { x: 292, t: "18m" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pregnancy" title="A protected start for baby" label="Pregnancy and hepatitis" credit="Illustration: Rehyn. Dose times as NHS England gives them."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from pregnancy to birth and a baby's vaccine doses">
      <path d="M16 130 H304" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
      <rect x="16" y="124" width="108" height="12" rx="6" fill={TINT} stroke={INK} strokeWidth="1.5" />
      <W x={70} y={156} size={10.5}>Pregnancy</W>
      <Person x={60} y={76} scale={1.1} />
      <Baby x={150} y={100} scale={0.8} fill={at === 2 ? GOLD : TINT} />
      {doses.map(dose => <g key={dose.t}><circle cx={dose.x} cy="130" r="6" fill={at === 2 ? GOLD : WHITE} stroke={INK} strokeWidth="2" /><W x={dose.x} y={156} size={10}>{dose.t}</W></g>)}
      {at === 0 && <><rect x="36" y="122" width="16" height="16" rx="3" fill={GOLD} /><W x={52} y={112} size={10.5}>8 to 12 weeks</W><Tube x={104} y={62} /></>}
      {at === 1 && <><circle cx="92" cy="130" r="7" fill={GOLD} stroke={INK} strokeWidth="2" /><W x={98} y={112} size={10.5}>Week 28</W><Pill x={104} y={48} fill={GOLD} /></>}
      {at === 2 && <Syringe x={230} y={80} rotate={-30} scale={1.4} lit />}
      {at === 3 && <>{Array.from({ length: 100 }, (_, index) => <circle key={index} cx={200 + (index % 10) * 8} cy={24 + Math.floor(index / 10) * 8} r="2.8" fill={index < 5 ? GOLD : LINE} />)}<W x={236} y={114} size={10.5}>5 in 100</W></>}
      <W x={160} y={206} size={11}>{["Tests in pregnancy, at 8 to 12 weeks", "Safe to have children with hep B", "Extra doses from birth to 18 months", "Hep C passes to about 5 in 100 babies"][at]}</W>
    </svg>} />;
}

function WordsMatter(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Stigma" title="Facts over fear" label="Stigma and support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An old, hurtful word crossed out, feelings, helplines and reliable information">
      {at === 0 && <><Bubble x={20} y={28} width={140} height={56} /><W x={90} y={62} size={15} fill={SOFT}>carrier</W><path d="M50 57 H130" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <Person x={214} y={140} scale={1.3} /><Person x={260} y={140} scale={1.3} fill={SOFT} /><path d="M228 126 H246" stroke={INK} strokeWidth="5" strokeLinecap="round" /></>}
      {at === 1 && <><Person x={80} y={140} scale={1.6} /><Tags x={168} y={30} labels={["Shocked", "Angry", "Relieved", "Numb"]} lit={() => false} width={120} gap={34} /></>}
      {at === 2 && <><Phone x={100} y={92} lit /><Phone x={220} y={92} /><W x={100} y={148} size={10.5}>Hep C Trust</W><W x={220} y={148} size={10.5}>Liver UK</W></>}
      {at === 3 && <><rect x="126" y="34" width="68" height="86" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M138 54 H182 M138 70 H182 M138 86 H170 M138 102 H176" stroke={SOFT} strokeWidth="3" strokeLinecap="round" />
        <W x={160} y={148} size={10.5}>Financial support</W><W x={160} y={168} size={10.5}>Psychological support</W></>}
      {at === 4 && <><rect x="100" y="40" width="120" height="74" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="108" y="48" width="104" height="58" rx="3" fill={TINT} />
        <path d="M86 122 H234" stroke={INK} strokeWidth="5" strokeLinecap="round" /><W x={160} y={84} size={14}>NHS</W><Tick x={250} y={60} color={GOLD} size={1.4} /></>}
      <W x={160} y={206} size={11}>{["Not passed on by hugs or handshakes", "No right or wrong way to react", "Helplines with people who understand", "Support if affected by infected blood", "Use reliable sources, like the NHS"][at]}</W>
    </svg>} />;
}

function CheckPage(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Checks" title="Checks after treatment" label="Checks after treatment" credit={urgentCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A calendar page with the timing of each check, beside the tests and the signs to act on">
      <rect x="22" y="30" width="104" height="124" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M22 56 V40 Q22 30 32 30 H116 Q126 30 126 40 V56 Z" fill={INK} />
      <rect x="44" y="22" width="6" height="16" rx="3" fill={SOFT} /><rect x="98" y="22" width="6" height="16" rx="3" fill={SOFT} />
      <W x={74} y={110} size={at === 2 ? 20 : 26}>{["12", "6", "6 to 12", "!"][at]}</W>
      <W x={74} y={136} size={10.5}>{["weeks after", "months", "months", "straight away"][at]}</W>
      {at === 0 && <><Tube x={186} y={86} /><Tube x={232} y={86} /><Tick x={186} y={130} color={GOLD} /><Tick x={232} y={130} color={GOLD} /><W x={209} y={160} size={10.5}>No virus</W></>}
      {at === 1 && <><Waves x={226} y={46} /><Liver x={226} y={86} scale={0.42} /><W x={226} y={140} size={10.5}>15 to 30 minutes</W><W x={226} y={160} size={10.5}>It does not hurt</W></>}
      {at === 2 && <><Tube x={190} y={86} /><W x={190} y={134} size={10.5}>Blood tests</W><Liver x={268} y={90} scale={0.3} /><W x={268} y={134} size={10.5}>Yearly scan</W></>}
      {at === 3 && <><Tags x={150} y={30} labels={["Tell your doctor", "Urgent GP or 111", "999 or A&E"]} lit={index => index === 2} width={156} gap={34} />
        <W x={228} y={148} size={10.5}>Do not drive to A&E</W><W x={228} y={166} size={10.5}>Bring your medicines</W></>}
      <W x={160} y={206} size={11}>{["Clear twice? Treatment has worked", "An ultrasound every 6 months for some", "Hep B: tests every 6 months to a year", "Yellow skin? Tell your doctor at once"][at]}</W>
    </svg>} />;
}

export function HepaticPieceView({ piece, ...props }: { piece: HepaticPiece } & PieceProps) {
  switch (piece) {
    case "cir-scar-bands": return <ScarBands {...props} />;
    case "cir-many-roads": return <ManyRoads {...props} />;
    case "cir-body-signs": return <BodySigns {...props} />;
    case "cir-test-row": return <TestRow {...props} />;
    case "cir-tap-off": return <TapOff {...props} />;
    case "cir-portal-detour": return <PortalDetour {...props} />;
    case "cir-cabinet": return <Cabinet {...props} />;
    case "cir-road-stops": return <RoadStops {...props} />;
    case "cir-meal-clock": return <MealClock {...props} />;
    case "cir-glass-down": return <GlassDown {...props} />;
    case "cir-scan-ring": return <ScanRing {...props} />;
    case "cir-three-lanes": return <ThreeLanes {...props} />;
    case "arld-repair-scale": return <RepairScale {...props} />;
    case "arld-three-livers": return <ThreeLivers {...props} />;
    case "arld-quiet-signs": return <QuietSigns {...props} />;
    case "arld-fibrosis-dial": return <FibrosisDial {...props} />;
    case "arld-safe-clock": return <SafeClock {...props} />;
    case "arld-support-circle": return <SupportCircle {...props} />;
    case "arld-pill-steps": return <PillSteps {...props} />;
    case "arld-best-chance": return <BestChance {...props} />;
    case "arld-unit-week": return <UnitWeek {...props} />;
    case "arld-day-plate": return <DayPlate {...props} />;
    case "arld-side-by-side": return <SideBySide {...props} />;
    case "arld-red-card": return <RedCard {...props} />;
    case "hep-two-viruses": return <TwoViruses {...props} />;
    case "hep-blood-not-hugs": return <BloodNotHugs {...props} />;
    case "hep-iceberg": return <Iceberg {...props} />;
    case "hep-test-kit": return <TestKit {...props} />;
    case "hep-twelve-weeks": return <TwelveWeeks {...props} />;
    case "hep-viral-dial": return <ViralDial {...props} />;
    case "hep-three-doses": return <ThreeDoses {...props} />;
    case "hep-load-off": return <LoadOff {...props} />;
    case "hep-circles": return <Circles {...props} />;
    case "hep-baby-timeline": return <BabyTimeline {...props} />;
    case "hep-words-matter": return <WordsMatter {...props} />;
    case "hep-check-page": return <CheckPage {...props} />;
  }
}
