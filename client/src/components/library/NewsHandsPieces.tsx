import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { HANDS_PIECES, type HandsPiece } from "@/content/hands-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Trigger finger and De Quervain's tenosynovitis pages' own pieces (content/hands-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isHandsPiece = (piece: NewsPiece): piece is HandsPiece => (HANDS_PIECES as readonly string[]).includes(piece);

const urgentCredit = "Illustration: Rehyn. If you are worried, get help straight away.";
const medsCredit = "Illustration: Rehyn. Check with a pharmacist or GP.";
const moveCredit = "Illustration: Rehyn. Follow your own hand team's advice.";
const ideaCredit = "Illustration: Rehyn. A picture of the idea, not a measurement.";

// ==== Shared drawing helpers ================================================================================

/** The caption under a picture. */
const Say = ({ children }: { children: ReactNode }) => <W x={160} y={206} size={11}>{children}</W>;
/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w = 150, text, lit = false, h = 24, size = 10.5 }: { x: number; y: number; w?: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="8" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 12 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
/** A gold ring round what the section is about. */
const Ring = ({ x, y, r, still }: { x: number; y: number; r: number; still: boolean }) =>
  <circle cx={x} cy={y} r={r} fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** Lines of left-aligned text from (x, y), `gap` apart, each with a small dot. */
const List = ({ x, y, lines, gap = 24, size = 10 }: { x: number; y: number; lines: string[]; gap?: number; size?: number }) =>
  <g>{lines.map((line, index) => <g key={line}><circle cx={x} cy={y + index * gap - size * 0.35} r="3" fill={GOLD} /><W x={x + 9} y={y + index * gap} size={size} anchor="start">{line}</W></g>)}</g>;
/** Lines of centred text from (x, y), `gap` apart. */
const Lines = ({ x, y, lines, gap = 16, size = 10 }: { x: number; y: number; lines: string[]; gap?: number; size?: number }) =>
  <g>{lines.map((line, index) => <W key={line} x={x} y={y + index * gap} size={size}>{line}</W>)}</g>;
/** A calendar page. */
const Cal = ({ x, y, w = 40, lit = false }: { x: number; y: number; w?: number; lit?: boolean }) =>
  <g><rect x={x - w / 2} y={y - w * 0.42} width={w} height={w * 0.86} rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - w / 2} y={y - w * 0.42} width={w} height={w * 0.22} rx="3" fill={lit ? GOLD : INK} />
    {[0, 1, 2].map(row => [0, 1, 2].map(col => <circle key={`${row}${col}`} cx={x - w * 0.25 + col * w * 0.25} cy={y + row * w * 0.17} r={w * 0.045} fill={SOFT} />))}</g>;
/** A pain scale from 0 to 10, from x across 238, at height y; boxes up to `upTo` are filled. */
const PainScale = ({ x, y, upTo }: { x: number; y: number; upTo: number }) =>
  <g>{Array.from({ length: 11 }, (_, index) => <rect key={index} x={x + index * 22} y={y} width="18" height="16" rx="4" fill={index <= upTo ? INK : WHITE} stroke={INK} strokeWidth="1.5" />)}
    {[0, 5, 10].map(n => <W key={n} x={x + n * 22 + 9} y={y + 30} size={10}>{String(n)}</W>)}</g>;
/** A cold pack wrapped in a towel, centred on (x, y). */
const ColdPack = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 28} y={y - 18} width="56" height="36" rx="8" fill={TINT} stroke={INK} strokeWidth="2.5" />
    {[[-14, -6], [0, 4], [12, -4], [-8, 8], [14, 8]].map(([dx, dy]) => <rect key={`${dx}${dy}`} x={x + dx - 3} y={y + dy - 3} width="6" height="6" rx="1" fill={WHITE} stroke={SOFT} strokeWidth="1" />)}
    <path d={`M${x - 32} ${y - 8} H${x + 32} M${x - 32} ${y + 10} H${x + 32}`} stroke={INK} strokeWidth="2" strokeDasharray="4 3" /></g>;
/** A crescent moon. */
const Moon = ({ x, y }: { x: number; y: number }) => <path d={`M${x} ${y - 16} a16 16 0 1 0 18 21 a12 12 0 1 1 -18 -21 Z`} fill={GOLD} />;
/** A sun. */
const Sun = ({ x, y, r = 10 }: { x: number; y: number; r?: number }) =>
  <g><circle cx={x} cy={y} r={r} fill={GOLD} />{[0, 1, 2, 3, 4, 5, 6, 7].map(index => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}</g>;
/** A mobile phone centred on (x, y), with a number on its screen. */
const Phone = ({ x, y, w = 40, h = 70, text }: { x: number; y: number; w?: number; h?: number; text?: string }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - w / 2 + 4} y={y - h / 2 + 7} width={w - 8} height={h - 22} rx="2" fill={TINT} /><circle cx={x} cy={y + h / 2 - 7} r="3" fill={INK} />
    {text && <W x={x} y={y + 2} size={12} fill={INK}>{text}</W>}</g>;
/** A clockwise loop arrow round (x, y). */
const Loop = ({ x, y, r }: { x: number; y: number; r: number }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={`M${x + r} ${y} A${r} ${r} 0 1 1 ${x} ${y - r}`} /><path d={`M${x - 8} ${y - r - 7} L${x} ${y - r} L${x - 8} ${y - r + 7}`} /></g>;
/** A drop, for blood sugar. */
const Drop = ({ x, y, r }: { x: number; y: number; r: number }) =>
  <path d={`M${x} ${y - r} C${x + r * 0.2} ${y - r * 0.5} ${x + r * 0.8} ${y} ${x + r * 0.8} ${y + r * 0.35} A${r * 0.8} ${r * 0.8} 0 0 1 ${x - r * 0.8} ${y + r * 0.35} C${x - r * 0.8} ${y} ${x - r * 0.2} ${y - r * 0.5} ${x} ${y - r} Z`} fill={TINT} stroke={INK} strokeWidth="3" strokeLinejoin="round" />;
/** A blood glucose meter with a rising arrow on its screen. */
const Meter = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 24} y={y - 38} width="48" height="76" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x={x - 17} y={y - 30} width="34" height="28" rx="3" fill={TINT} />
    <path d={`M${x - 8} ${y - 8} L${x + 6} ${y - 22} M${x - 1} ${y - 23} H${x + 7} V${y - 15}`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx={x - 8} cy={y + 14} r="5" fill={SOFT} /><circle cx={x + 8} cy={y + 14} r="5" fill={SOFT} /><rect x={x - 5} y={y + 26} width="10" height="16" rx="2" fill={INK} /></g>;
/** A syringe: the needle tip at (x, y), the body running back along -x before `rotate`. */
const Syringe = ({ x, y, rotate = 0, s = 1 }: { x: number; y: number; rotate?: number; s?: number }) =>
  <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${s})`} strokeLinecap="round" strokeLinejoin="round">
    <path d="M0 0 H-16" stroke={TEXT} strokeWidth="2" />
    <rect x="-56" y="-7" width="40" height="14" rx="3" fill={TINT} stroke={INK} strokeWidth="2.5" />
    {[-46, -36, -26].map(tx => <path key={tx} d={`M${tx} -7 V-2`} stroke={INK} strokeWidth="1.5" />)}
    <path d="M-56 0 H-70 M-70 -8 V8" stroke={INK} strokeWidth="3" /></g>;
/** A jar with an opener gripping its lid. */
const Jar = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 24} y={y - 22} width="48" height="54" rx="9" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x={x - 27} y={y - 36} width="54" height="16" rx="4" fill={INK} />
    <rect x={x - 31} y={y - 39} width="62" height="22" rx="6" fill="none" stroke={GOLD} strokeWidth="3.5" /><rect x={x + 31} y={y - 33} width="44" height="10" rx="5" fill={GOLD} />
    <path d={`M${x - 14} ${y} H${x + 14} M${x - 14} ${y + 12} H${x + 8}`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" /></g>;
/** A toolbox. */
const Toolbox = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 16} ${y - 18} V${y - 32} H${x + 16} V${y - 18}`} stroke={INK} strokeWidth="5" fill="none" strokeLinejoin="round" />
    <rect x={x - 40} y={y - 18} width="80" height="46" rx="6" fill={TINT} stroke={INK} strokeWidth="3" /><path d={`M${x - 40} ${y} H${x + 40}`} stroke={INK} strokeWidth="2.5" /><rect x={x - 7} y={y - 4} width="14" height="9" rx="2" fill={INK} /></g>;
/** A steering wheel. */
const Wheel = ({ x, y, r }: { x: number; y: number; r: number }) =>
  <g><circle cx={x} cy={y} r={r} fill="none" stroke={INK} strokeWidth="8" /><circle cx={x} cy={y} r={r * 0.2} fill={INK} />
    <path d={`M${x - r} ${y} H${x + r} M${x} ${y} V${y + r}`} stroke={INK} strokeWidth="6" /></g>;
/** A sheet of paper. */
const Doc = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 30} y={y - 40} width="60" height="80" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[-22, -10, 2, 14].map(ly => <path key={ly} d={`M${x - 18} ${y + ly} H${x + 18}`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
    <circle cx={x + 22} cy={y + 32} r="13" fill={GOLD} /><path d={`M${x + 16} ${y + 32} L${x + 21} ${y + 37} L${x + 29} ${y + 27}`} stroke={WHITE} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>;
/** A speech bubble. */
const Bubble = ({ x, y, w = 64, h = 40 }: { x: number; y: number; w?: number; h?: number }) =>
  <g><path d={`M${x - w / 2 + 10} ${y - h / 2} H${x + w / 2 - 10} Q${x + w / 2} ${y - h / 2} ${x + w / 2} ${y - h / 2 + 10} V${y + h / 2 - 10} Q${x + w / 2} ${y + h / 2} ${x + w / 2 - 10} ${y + h / 2} H${x - w / 2 + 22} L${x - w / 2 + 6} ${y + h / 2 + 12} L${x - w / 2 + 12} ${y + h / 2} H${x - w / 2 + 10} Q${x - w / 2} ${y + h / 2} ${x - w / 2} ${y + h / 2 - 10} V${y - h / 2 + 10} Q${x - w / 2} ${y - h / 2} ${x - w / 2 + 10} ${y - h / 2} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    {[-7, 3].map(dy => <path key={dy} d={`M${x - w / 2 + 12} ${y + dy} H${x + w / 2 - 12}`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}</g>;
/** A tube of gel. */
const Tube = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y}) rotate(-18)`}><path d="M-44 -14 H28 L38 -7 V7 L28 14 H-44 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><rect x="38" y="-7" width="14" height="14" rx="2" fill={INK} /><path d="M-36 -14 V14" stroke={SOFT} strokeWidth="3" /><path d="M-24 0 H18" stroke={GOLD} strokeWidth="4" strokeLinecap="round" /></g>;
/** A pair of scissors, a tap and a door handle, about 50 tall, centred on (x, y). */
const Scissors = ({ x, y }: { x: number; y: number }) =>
  <g stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round"><circle cx={x - 10} cy={y + 16} r="7" /><circle cx={x + 10} cy={y + 16} r="7" /><path d={`M${x - 6} ${y + 10} L${x + 8} ${y - 24} M${x + 6} ${y + 10} L${x - 8} ${y - 24}`} /></g>;
const Tap = ({ x, y }: { x: number; y: number }) =>
  <g stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={`M${x - 26} ${y - 8} H${x + 4} C${x + 16} ${y - 8} ${x + 18} ${y + 2} ${x + 18} ${y + 10}`} /><path d={`M${x - 8} ${y - 8} V${y - 20} M${x - 18} ${y - 22} H${x + 2}`} /><path d={`M${x + 18} ${y + 18} v8`} stroke={GOLD} strokeWidth="3" /></g>;
const Handle = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 10} y={y - 26} width="20" height="52" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x} ${y - 6} H${x + 30}`} stroke={INK} strokeWidth="8" strokeLinecap="round" /><circle cx={x} cy={y + 12} r="3" fill={INK} /></g>;
/** A parent holding a baby close with both arms. */
const Carry = ({ x, y }: { x: number; y: number }) =>
  <g strokeLinecap="round" strokeLinejoin="round"><Person x={x} y={y} scale={1.6} />
    <ellipse cx={x + 4} cy={y - 10} rx="25" ry="14" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x + 34} cy={y - 20} r="11" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path d={`M${x - 26} ${y - 22} C${x - 24} ${y + 8} ${x + 16} ${y + 10} ${x + 30} ${y - 2}`} fill="none" stroke={INK} strokeWidth="7" /></g>;

/** A finger seen from the side: the knuckle at (x, y), pointing right with the palm side down and the palm running
 *  off to the left. The tendon (soft line) runs along the palm side through the A1 pulley (a ring in the palm near the
 *  base of the finger). `bend` (0 to 1) curls it, or `angles` sets each joint; `nodule` and `thick` show the catch,
 *  `open` the released pulley, `stick` a lolly-stick splint. */
const SideFinger = ({ x, y, scale = 1, bend = 0, angles, nodule = false, thick = false, open = false, stick = false, pulley = true, palm = 80 }: { x: number; y: number; scale?: number; bend?: number; angles?: [number, number, number]; nodule?: boolean; thick?: boolean; open?: boolean; stick?: boolean; pulley?: boolean; palm?: number }) => {
  const [a, b, c] = angles ?? [62 * bend, 80 * bend, 54 * bend];
  return <g transform={`translate(${x} ${y}) scale(${scale})`} strokeLinejoin="round" strokeLinecap="round">
    <rect x={10 - palm} y="-20" width={palm} height="42" rx="16" fill={WHITE} stroke={INK} strokeWidth="3" />
    <path d={`M${16 - palm} 13 H-2`} stroke={SOFT} strokeWidth="6" />
    <g transform={`rotate(${a})`}>
      <rect x="-6" y="-13" width="62" height="26" rx="12" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M-4 8 H52" stroke={SOFT} strokeWidth="5" />
      <g transform={`translate(56 0) rotate(${b})`}>
        <rect x="-5" y="-12" width="39" height="24" rx="11" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M-3 7 H30" stroke={SOFT} strokeWidth="4" />
        <g transform={`translate(32 0) rotate(${c})`}>
          <rect x="-4" y="-11" width="30" height="22" rx="11" fill={WHITE} stroke={INK} strokeWidth="3" />
          <path d="M10 -11 H20" stroke={LINE} strokeWidth="3" />
        </g>
      </g>
    </g>
    {stick && <><rect x="-40" y="-25" width="160" height="9" rx="3" fill={TINT} stroke={INK} strokeWidth="2" />{[-22, 40, 92].map(sx => <rect key={sx} x={sx} y="-28" width="9" height="42" rx="2" fill={GOLD} />)}</>}
    {pulley && !open && <rect x="-22" y="3" width="16" height="20" rx="5" fill="none" stroke={thick ? GOLD : INK} strokeWidth={thick ? 5 : 3} />}
    {pulley && open && <><rect x="-22" y="3" width="16" height="20" rx="5" fill="none" stroke={SOFT} strokeWidth="3" strokeDasharray="5 5" /><path d="M-24 -2 L-4 28" stroke={GOLD} strokeWidth="3.5" /></>}
    {nodule && <ellipse cx="-30" cy="13" rx="8" ry="6" fill={GOLD} />}
  </g>;
};
/** Finger poses for exercises, as joint angles. */
const POSE = { straight: [0, 0, 0], hook: [0, 95, 70], fist: [85, 95, 60], straightFist: [80, 90, 0], table: [85, 0, 0] } satisfies Record<string, [number, number, number]>;
/** A row of small side-on fingers in different poses, with labels. */
const Poses = ({ y, poses, labels }: { y: number; poses: [number, number, number][]; labels: string[] }) =>
  <g>{poses.map((angles, index) => <g key={labels[index]}><SideFinger x={34 + index * 76} y={y} scale={0.42} angles={angles} pulley={false} palm={44} /><W x={50 + index * 76} y={y + 64} size={10}>{labels[index]}</W></g>)}</g>;

/** A hand seen from the palm side, upright, with the wrist at (x, y) and the thumb on the left. `bent` fingers (0 is the
 *  index) curl into the palm; `thumb` is out, up (a thumbs up) or in (across the palm). `arm` adds the forearm below.
 *  The rest mark things on it: a spot at the base of the ring finger, a scar in the palm, a ring, a lolly-stick splint
 *  on one finger, the two thumb tendons and their tunnel at the wrist, a thumb-and-wrist splint. */
const FINGERS: [number, number][] = [[-22, 44], [-7.5, 50], [7.5, 46], [22, 34]];
const THUMB = { out: "translate(-24 -22) rotate(-38)", up: "translate(-36 -34) rotate(-4)", in: "translate(-20 -14) rotate(52)" };
type HandProps = { x: number; y: number; scale?: number; rotate?: number; tilt?: number; arm?: boolean; bent?: number[]; lit?: number[]; thumb?: "out" | "up" | "in"; litThumb?: boolean; palmSpot?: boolean; wristSpot?: boolean; swollen?: boolean; scar?: boolean; wristScar?: boolean; ring?: boolean; tendons?: "plain" | "thick"; spica?: boolean; stick?: number; bandage?: boolean };
const Hand = ({ x, y, scale = 1, rotate = 0, tilt = 0, arm = false, bent = [], lit = [], thumb = "out", litThumb = false, palmSpot = false, wristSpot = false, swollen = false, scar = false, wristScar = false, ring = false, tendons, spica = false, stick, bandage = false }: HandProps) => {
  const thumbShape = <g transform={THUMB[thumb]}><rect x="-7.5" y="-44" width="15" height="48" rx="7.5" fill={litThumb ? GOLD : thumb === "in" ? TINT : WHITE} stroke={INK} strokeWidth="2.5" /></g>;
  return <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} strokeLinejoin="round" strokeLinecap="round">
    {arm && <path d="M-24 -4 L-27 84 H27 L24 -4 Z" fill={WHITE} stroke={INK} strokeWidth="3" />}
    <g transform={`rotate(${tilt})`}>
      {FINGERS.map(([fx, len], index) => { const bend = bent.includes(index), h = bend ? 18 : len; return <rect key={fx} x={fx - 6.5} y={-58 - h} width="13" height={h + 4} rx="6.5" fill={lit.includes(index) ? GOLD : bend ? TINT : WHITE} stroke={INK} strokeWidth="2.5" />; })}
      {thumb !== "in" && thumbShape}
      <rect x="-31" y="-64" width="62" height="68" rx="16" fill={WHITE} stroke={INK} strokeWidth="3" />
      {thumb === "in" && thumbShape}
      {palmSpot && <circle cx="7.5" cy="-55" r="6" fill={GOLD} />}
      {scar && <g stroke={GOLD} strokeWidth="3"><path d="M0 -57 L15 -52" />{[3, 8, 13].map(sx => <path key={sx} d={`M${sx} -59 L${sx - 1} -50`} strokeWidth="1.5" />)}</g>}
      {ring && <rect x="1" y="-75" width="13" height="6" rx="2" fill={GOLD} stroke={INK} strokeWidth="1" />}
      {stick !== undefined && <><rect x={FINGERS[stick][0] - 4} y={-62 - FINGERS[stick][1]} width="8" height={FINGERS[stick][1] + 14} rx="2" fill={TINT} stroke={INK} strokeWidth="1.5" />
        {[0.75, 0.3].map(f => <rect key={f} x={FINGERS[stick][0] - 9} y={-58 - FINGERS[stick][1] * f} width="18" height="6" rx="2" fill={GOLD} />)}</>}
      {bandage && <rect x="-34" y="-62" width="68" height="62" rx="16" fill={TINT} stroke={INK} strokeWidth="2.5" />}
    </g>
    {tendons && <g fill="none"><path d="M-28 -26 L-22 -2 L-20 70 M-20 -30 L-14 -2 L-12 70" stroke={SOFT} strokeWidth="4" />
      <rect x="-31" y="-12" width="22" height="20" rx="5" stroke={tendons === "thick" ? GOLD : INK} strokeWidth={tendons === "thick" ? 6 : 3} /></g>}
    {spica && <g>
      <g stroke={INK} strokeWidth="5"><rect x="-29" y="-14" width="58" height="74" rx="10" /><rect x="-33" y="-38" width="34" height="40" rx="10" /><g transform={THUMB.out}><rect x="-10" y="-28" width="20" height="34" rx="9" /></g></g>
      <g fill={TINT}><rect x="-29" y="-14" width="58" height="74" rx="10" /><rect x="-33" y="-38" width="34" height="40" rx="10" /><g transform={THUMB.out}><rect x="-10" y="-28" width="20" height="34" rx="9" /></g></g>
      <path d="M0 -6 V52" stroke={SOFT} strokeWidth="5" /></g>}
    {wristSpot && <circle cx="-20" cy="0" r="8" fill={GOLD} />}
    {swollen && <ellipse cx="-20" cy="0" rx="16" ry="22" fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="5 4" />}
    {wristScar && <path d="M-26 -10 L-18 10" stroke={GOLD} strokeWidth="3.5" />}
  </g>;
};

/** The two thumb tendons running through their tunnel (the sheath), magnified, centred on (x, y). `thick` narrows the
 *  tunnel; `opened` shows it split and healed wider. */
const Tunnel = ({ x, y, w = 120, thick = false, opened = false }: { x: number; y: number; w?: number; thick?: boolean; opened?: boolean }) =>
  <g strokeLinecap="round">
    <path d={`M${x - w / 2} ${y - 7} H${x + w / 2} M${x - w / 2} ${y + 7} H${x + w / 2}`} stroke={SOFT} strokeWidth="9" />
    {!thick && !opened && <rect x={x - 28} y={y - 22} width="56" height="44" rx="10" fill="none" stroke={INK} strokeWidth="3" />}
    {thick && <rect x={x - 28} y={y - 17} width="56" height="34" rx="10" fill="none" stroke={GOLD} strokeWidth="9" />}
    {opened && <><rect x={x - 30} y={y - 30} width="60" height="60" rx="12" fill="none" stroke={INK} strokeWidth="3" /><path d={`M${x - 24} ${y - 30} H${x + 24}`} stroke={GOLD} strokeWidth="3" strokeDasharray="4 4" /></>}
  </g>;

// ==== Trigger finger ========================================================================================

function TrfPulleyCatch(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Stuck bent, then it pops straight", "Tendons glide through tight pulleys", "A thickened tendon catches there", "Most often the thumb or ring finger", "Not harmful, though it can be painful"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The finger that sticks, then snaps" label="Trigger finger" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A finger seen from the side, its tendon running through a tight tunnel in the palm, where a small lump can catch">
      {at !== 3 && <SideFinger x={70} y={86} scale={0.74} bend={at === 0 ? 0.75 : at === 4 ? 0.35 : 0} nodule={at === 2} thick={at === 2} />}
      {at === 0 && <><Arrow d="M112 152 C140 148 154 126 152 102" head="M146 109 L152 102 L158 109" />
        <Box x={238} y={46} text="Clicks or locks" lit /><Arrow d="M238 62 V76" head="M233 71 L238 76 L243 71" /><Box x={238} y={92} text="Gets stuck bent" /><Arrow d="M238 108 V122" head="M233 117 L238 122 L243 117" /><Box x={238} y={138} text="Then pops straight" /></>}
      {at === 1 && <><Ring x={60} y={96} r={16} still={still} /><path d="M60 115 V126" stroke={LINE} strokeWidth="2.5" /><W x={60} y={140} size={10.5}>A1 pulley</W>
        <Box x={238} y={46} w={156} text="Tendon: tough tissue" /><Box x={238} y={88} w={156} text="Sheath: a covering" /><Box x={238} y={130} w={156} text="Pulleys: tight tunnels" lit size={10} /></>}
      {at === 2 && <><Ring x={48} y={96} r={15} still={still} />
        <Box x={238} y={46} text="The tendon thickens" lit /><Lines x={238} y={82} lines={["It can bunch up into", "a small lump"]} /><Box x={238} y={136} text="Catches at the tunnel" /></>}
      {at === 3 && <><Hand x={80} y={150} scale={0.9} lit={[2]} litThumb />
        <W x={238} y={64} size={26} serif fill={INK}>2 to 3%</W><W x={238} y={86} size={10}>of people develop it</W><Box x={238} y={120} text="Thumb or ring finger" lit size={10} /><Lines x={238} y={152} lines={["Any finger, and", "sometimes both hands"]} /></>}
      {at === 4 && <><Box x={238} y={42} text="Not harmful" lit /><Lines x={238} y={72} lines={["Some mild cases recover", "in a few weeks"]} />
        <List x={168} y={122} gap={22} lines={["A splint", "Steroid injections", "Surgery, if others fail"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TrfClickMorning(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Stuck bent, a click as it straightens", "Pain in the palm, maybe a small bump", "Often worse in the morning", "Not improving? See a GP", "Locked bent? It needs urgent review"];
  const bentRing = at === 0 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="A click, a catch, a locked finger" label="Symptoms" credit={at === 4 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hand seen from the palm, the ring finger bent and caught, with the sore spot at its base">
      <Hand x={78} y={156} scale={0.92} bent={bentRing ? [2] : []} palmSpot={at === 1} />
      {bentRing && <Ring x={85} y={88} r={14} still={still} />}
      {at === 0 && <><W x={122} y={56} size={12} serif fill={INK} anchor="start">click</W>
        <Box x={238} y={46} text="Stuck bent" lit /><Box x={238} y={88} w={156} text="Clicks as it straightens" size={10} /><Lines x={238} y={128} lines={["May need the other", "hand to straighten it"]} /></>}
      {at === 1 && <><Ring x={85} y={105} r={12} still={still} /><List x={168} y={52} gap={28} lines={["Pain in the palm", "Tender to press", "Stiffness", "A small bump"]} /></>}
      {at === 2 && <><Sun x={32} y={38} /><Box x={238} y={44} text="Worse in the morning" lit /><List x={168} y={86} gap={26} lines={["Preparing food", "Using tools", "Playing sport"]} /></>}
      {at === 3 && <><Box x={238} y={40} text="See a GP if" lit /><List x={168} y={74} gap={26} lines={["Not getting better", "Stops daily activities", "Tingling or numbness", "You have diabetes"]} /></>}
      {at === 4 && <><Box x={238} y={42} w={156} text="Locked, will not open" lit /><Box x={238} y={78} w={156} text="An urgent review" lit /><Lines x={238} y={122} lines={["Severe pain, or cannot", "move it or hold things:", "contact NHS 111"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TrfRiskIcons(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often there is no clear reason", "More likely over 40, and in women", "Diabetes and some other conditions", "Hand use can make the pain worse", "In young children it usually settles"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Who gets it" title="Over 40, diabetes, and plain chance" label="Who gets it" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The things that make trigger finger more likely, beside a hand, a person and a blood drop">
      {at === 0 && <><W x={80} y={126} size={84} serif fill={INK}>?</W>
        <W x={238} y={50} size={10}>Not always known</W><Box x={238} y={82} w={156} text="Often no clear reason" lit size={10} /><Lines x={238} y={124} lines={["Sometimes after", "an injury"]} /></>}
      {at === 1 && <><W x={82} y={90} size={38} serif fill={INK}>40+</W><Person x={58} y={156} scale={0.9} /><Person x={106} y={156} scale={0.9} fill={SOFT} />
        <Box x={238} y={62} text="Over 40" lit /><Box x={238} y={106} w={156} text="More common in women" size={10} /></>}
      {at === 2 && <><Drop x={80} y={96} r={38} />
        <List x={168} y={44} gap={24} lines={["Diabetes", "Rheumatoid arthritis", "Gout", "Underactive thyroid", "Dupuytren's contracture"]} /><W x={238} y={172} size={10}>Not caused by osteoarthritis</W></>}
      {at === 3 && <><Hand x={80} y={156} scale={0.9} palmSpot /><g stroke={GOLD} strokeWidth="3" strokeLinecap="round">{[0, 1, 2, 3, 4, 5].map(index => { const a = index * Math.PI / 3; return <path key={index} d={`M${87 + 12 * Math.cos(a)} ${106 + 12 * Math.sin(a)} L${87 + 19 * Math.cos(a)} ${106 + 19 * Math.sin(a)}`} />; })}</g>
        <List x={168} y={50} gap={28} lines={["An earlier palm injury", "Forceful manual work"]} /><Lines x={238} y={128} lines={["Little evidence that", "work causes it"]} /></>}
      {at === 4 && <><Person x={62} y={146} scale={1.3} /><Person x={116} y={160} scale={0.7} fill={SOFT} />
        <Box x={238} y={50} text="6 months to 2 years" lit /><Lines x={238} y={86} lines={["Less common", "than in adults"]} /><Lines x={238} y={134} lines={["Rarely painful,", "usually gets better"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TrfPressWatch(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Your symptoms and an examination", "A press on the palm, a watched bend", "Scans and blood tests sometimes used", "Many causes: do not self-diagnose", "Not better in 2 weeks? Visit your GP"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diagnosis" title="A look, a press, a watched bend" label="Diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A finger from the side, a fingertip pressing the palm below it, as the finger bends">
      {at === 0 && <><Hand x={80} y={156} scale={0.9} /><Box x={238} y={48} text="Your symptoms" lit /><W x={238} y={80} size={10}>and</W><Box x={238} y={106} text="An examination" /><Lines x={238} y={146} lines={["Your GP advises", "on treatments"]} /></>}
      {at === 1 && <><SideFinger x={74} y={78} scale={0.72} bend={0.35} /><Ring x={64} y={87} r={13} still={still} />
        <rect x="54" y="104" width="20" height="56" rx="10" fill={TINT} stroke={INK} strokeWidth="2.5" /><W x={64} y={176} size={10}>A press</W>
        <Arrow d="M148 70 C160 88 160 110 150 128" head="M144 122 L150 128 L156 121" />
        <List x={168} y={52} gap={28} lines={["Range of movement", "Feeling", "Strength", "Tenderness or a lump"]} /></>}
      {at === 2 && <><rect x="24" y="30" width="112" height="150" rx="8" fill={TEXT} /><Hand x={80} y={168} scale={0.72} />
        <Box x={201} y={56} w={70} text="Blood tests" size={10} /><Box x={277} y={56} w={70} text="X-ray" size={10} /><Box x={201} y={94} w={70} text="Ultrasound" size={10} /><Box x={277} y={94} w={70} text="CT or MRI" size={10} />
        <Lines x={239} y={136} lines={["Sometimes used for", "hand and wrist problems"]} /></>}
      {at === 3 && <>{[["Trigger finger", "Palm, base of", "the finger"], ["Carpal tunnel", "Tingling or", "numbness"], ["Mallet finger", "Fingertip will", "not straighten"]].map(([title, one, two], index) => <g key={title}>
        <rect x={12 + index * 101} y="34" width="94" height="124" rx="10" fill={index === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={59 + index * 101} y={64} size={10} fill={index === 0 ? WHITE : INK}>{title}</W><path d={`M${26 + index * 101} 78 H${92 + index * 101}`} stroke={index === 0 ? WHITE : LINE} strokeWidth="1.5" />
        <W x={59 + index * 101} y={104} size={10} fill={index === 0 ? WHITE : TEXT}>{one}</W><W x={59 + index * 101} y={120} size={10} fill={index === 0 ? WHITE : TEXT}>{two}</W></g>)}</>}
      {at === 4 && <><Cal x={72} y={86} w={70} lit /><W x={72} y={146} size={16} serif fill={INK}>2 weeks</W>
        <Box x={238} y={42} w={156} text="Visit your GP surgery" lit size={10} /><List x={168} y={82} gap={24} lines={["Not better in 2 weeks", "Getting worse", "Keeps coming back"]} /><W x={238} y={166} size={10}>Many areas: refer yourself</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TrfLollySplint(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Ease off what makes it worse", "A splint keeps it straight at night", "Clean, dry, and away from heat", "Wrapped ice for up to 20 minutes", "Improving can take up to 12 weeks"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Rest and a splint" title="Straight by night, gentle by day" label="Rest and a splint" credit={at === 3 ? medsCredit : at === 4 ? moveCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A finger held straight by a lolly-stick splint taped along it, under a crescent moon">
      {at !== 4 && <SideFinger x={72} y={at === 3 ? 124 : 100} scale={0.72} bend={at === 0 ? 0.3 : 0} stick={at === 1 || at === 2} />}
      {at === 0 && <><Box x={238} y={50} text="Ease off" lit /><Lines x={238} y={82} lines={["what makes it worse,", "until it improves"]} /><Lines x={238} y={136} lines={["Some mild cases recover", "in a few weeks"]} /></>}
      {at === 1 && <><Moon x={36} y={40} /><Box x={238} y={46} text="Straight at night" lit /><Lines x={238} y={80} lines={["Keeps the rough part", "in the tunnel, smoother"]} /><Box x={238} y={134} text="Even a lolly stick" /></>}
      {at === 2 && <><List x={168} y={48} gap={26} lines={["Wear it as advised", "Clean and dry", "Away from heat", "Do not alter it"]} /><W x={238} y={164} size={10}>Rubbing? Hand therapist</W></>}
      {at === 3 && <><ColdPack x={92} y={58} /><Box x={238} y={44} text="Wrapped ice" lit /><Lines x={238} y={74} lines={["Up to 20 minutes,", "every 2 to 3 hours"]} /><Box x={238} y={122} text="Ibuprofen can help" /><Lines x={238} y={154} lines={["Gentle moves", "after a few days"]} /></>}
      {at === 4 && <><Poses y={50} poses={[POSE.straight, POSE.hook, POSE.fist, POSE.table]} labels={["Straight", "Hook", "Full fist", "Table top"]} />
        <W x={160} y={144} size={10.5}>4 to 5 times a day</W><Box x={160} y={170} w={170} text="Up to 12 weeks" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TrfSheathSyringe(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Into the sheath, to ease swelling", "Works less often with diabetes", "Then rest it for 24 hours", "Helps within days, or several weeks", "Infection signs: call a doctor or 111"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Steroid injection" title="One small injection into the sheath" label="Steroid injections" credit={at === 4 ? urgentCredit : at === 3 ? medsCredit : at === 1 ? ideaCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A syringe pointing at the tendon sheath in the palm, near the lump that catches">
      {at === 0 && <><SideFinger x={86} y={72} scale={0.62} nodule /><Syringe x={66} y={87} rotate={-55} s={0.8} />
        <Box x={238} y={50} w={156} text="Into the tendon sheath" lit size={10} /><Lines x={238} y={86} lines={["Eases swelling so", "the tendon moves freely"]} /></>}
      {at === 1 && <>{[["BSSH: pain and triggering relieved", 0.7, "about 70%"], ["Gloucestershire: no further treatment", 0.9, "around 90%"]].map(([label, share, value], index) => <g key={label as string}>
        <W x={20} y={44 + index * 52} size={10} anchor="start">{label as string}</W>
        <rect x="20" y={52 + index * 52} width="190" height="14" rx="7" fill={WHITE} stroke={LINE} strokeWidth="2" /><rect x="20" y={52 + index * 52} width={190 * (share as number)} height="14" rx="7" fill={INK} />
        <W x={218} y={64 + index * 52} size={10.5} anchor="start" fill={INK}>{value as string}</W></g>)}
        <Box x={160} y={154} w={210} text="Lower success with diabetes" lit /></>}
      {at === 2 && <><Clock x={78} y={84} r={34} hand={2} /><W x={78} y={148} size={15} serif fill={INK}>24 hours</W>
        <List x={168} y={48} gap={28} lines={["GP surgery or clinic", "Sometimes numbed first", "Home afterwards", "Rest it for 24 hours"]} /></>}
      {at === 3 && <><path d="M30 96 H290" stroke={LINE} strokeWidth="4" strokeLinecap="round" />{[40, 150, 270].map(cx => <circle key={cx} cx={cx} cy={96} r="7" fill={INK} />)}
        <W x={100} y={72} size={10}>May feel worse at first</W><W x={40} y={124} size={10}>Injection</W><W x={150} y={124} size={10}>Within days</W><W x={268} y={124} size={10}>Or several weeks</W>
        <Lines x={160} y={156} lines={["Paracetamol or ibuprofen", "are safe to take"]} /></>}
      {at === 4 && <><Phone x={56} y={92} text="111" /><Phone x={110} y={92} text="999" />
        <Box x={238} y={40} text="A doctor or 111 now" lit /><Lines x={238} y={68} lines={["High temperature", "or chills"]} /><Box x={238} y={114} text="Call 999" lit /><Lines x={238} y={142} lines={["Lips or throat swell,", "struggling to breathe"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TrfPalmRelease(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Offered when other treatments fail", "The tight band is released", "Pain relief is usually rapid", "All operations carry some risk", "Easy meals, rings off, a lift home"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Surgery" title="A small cut, a freed tendon" label="Trigger finger release" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A palm with a short scar at the base of the ring finger, where the tight band was released">
      {at !== 1 && <Hand x={80} y={156} scale={0.92} bent={at === 0 ? [2] : []} scar={at === 2 || at === 3} />}
      {at === 0 && <><Ring x={87} y={88} r={14} still={still} /><Box x={238} y={44} w={156} text="Other treatments failed" lit size={10} /><Box x={238} y={80} w={156} text="Or locked bent" /><Lines x={238} y={122} lines={["Your choice: it is", "very rarely harmful"]} /></>}
      {at === 1 && <><SideFinger x={74} y={84} scale={0.72} open /><Ring x={64} y={93} r={15} still={still} />
        <Box x={238} y={44} text="Tight band released" lit /><Clock x={186} y={90} r={15} /><W x={210} y={94} size={10.5} anchor="start">Under 30 minutes</W><Lines x={238} y={134} lines={["Day case, usually", "local anaesthetic"]} /></>}
      {at === 2 && <><Ring x={87} y={105} r={14} still={still} /><Box x={238} y={44} text="Rapid pain relief" lit /><Lines x={238} y={74} lines={["Coming back after", "surgery is uncommon"]} /><Box x={238} y={118} text="Scar 2 to 3 cm" /><Lines x={238} y={148} lines={["Tender for weeks,", "seldom a problem later"]} /></>}
      {at === 3 && <><Box x={238} y={40} text="Wound infection" lit /><W x={238} y={66} size={10}>fewer than 1 in 100</W><Box x={238} y={96} text="Tender scar, swelling" /><W x={238} y={122} size={10}>fewer than 5 in 100</W><Lines x={238} y={152} lines={["Also stiffness, nerve", "or blood vessel injury"]} /></>}
      {at === 4 && <><circle cx="128" cy="44" r="8" fill="none" stroke={GOLD} strokeWidth="3.5" /><Arrow d="M92 58 L114 48" head="M106 46 L114 48 L109 55" />
        <List x={168} y={48} gap={28} lines={["Stock up on easy meals", "Take all rings off", "Someone to take you home", "Smoking slows healing"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TrfHealingWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Hand raised and bandaged for 48 hours", "Keep it dry until the wound check", "Gently move fingers, thumb and arm", "Back to normal, usually by 3 months", "Wound red or sore? Contact the surgeon"];
  const lit = [0, 1, 0, 3, -1][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="After surgery" title="Healing, week by week" label="Recovery after the operation" credit={at === 4 ? urgentCredit : at === 2 ? moveCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hand healing after the operation, above a timeline from the day of surgery to 6 months">
      <Hand x={78} y={134} scale={0.75} bandage={at === 0} scar={at === 1 || at === 3 || at === 4} />
      {at === 2 && <Arrow d="M38 88 C34 72 42 60 54 56" head="M46 54 L54 56 L50 63" />}
      {at === 0 && <Arrow d="M134 128 V68" head="M128 75 L134 68 L140 75" />}
      {at === 4 && <Ring x={84} y={94} r={13} still={still} />}
      <path d="M30 160 H290" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
      {["Day 1", "2 weeks", "6 weeks", "3 months", "6 months"].map((label, index) => <g key={label}><circle cx={40 + index * 60} cy={160} r="6" fill={index === lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={40 + index * 60} y={180} size={10}>{label}</W></g>)}
      {at === 0 && <><Box x={238} y={44} text="Raised for 48 hours" lit /><Lines x={238} y={76} lines={["Fingers move", "straight away"]} /><W x={238} y={128} size={10}>No driving yourself home</W></>}
      {at === 1 && <><Box x={238} y={44} text="Keep it dry" lit /><Lines x={238} y={76} lines={["Wound check at", "10 to 14 days"]} /><W x={238} y={128} size={10}>Shower at 2 weeks, usually</W></>}
      {at === 2 && <><List x={168} y={50} gap={28} lines={["Thumb to each fingertip", "Fingers fully straight", "A gentle fist"]} /><W x={238} y={138} size={10}>Follow your own team</W></>}
      {at === 3 && <List x={168} y={52} gap={32} lines={["6 weeks: grip weaker", "3 months: back to normal", "6 months: a thin scar"]} />}
      {at === 4 && <><Box x={238} y={40} text="Contact the surgeon" lit /><List x={168} y={72} gap={24} lines={["A temperature", "Discharge", "Red, sore or painful", "Feeling unwell"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TrfJarRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Ease off the tasks that hurt", "Gadgets and a looser grip", "Rings off; a bandage or splint helps", "Straight, hook, fist: tendon glides", "Keep active, building up gradually"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Everyday hands" title="Lighter grips for a sore hand" label="Easing strain on the hand" credit={at === 3 ? moveCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A jar with an opener on its lid, a ring taken off a sore finger, and a hand moving gently">
      {(at === 0 || at === 2) && <Hand x={80} y={156} scale={0.92} palmSpot={at === 0} />}
      {at === 0 && <><Box x={238} y={42} text="Ease off" lit /><List x={168} y={76} gap={24} lines={["Preparing food", "Using tools", "Gardening", "Sport"]} /></>}
      {at === 1 && <><Jar x={62} y={110} /><Box x={238} y={46} text="Do it differently" lit /><List x={168} y={82} gap={26} lines={["No heavy lifting", "A looser grip", "Gadgets for jars"]} /></>}
      {at === 2 && <><circle cx="126" cy="42" r="8" fill="none" stroke={GOLD} strokeWidth="3.5" /><Arrow d="M94 58 L114 48" head="M106 46 L114 48 L109 55" />
        <List x={168} y={46} gap={28} lines={["Rings off that finger", "A bandage to support", "A splint, at night"]} /><Box x={238} y={148} text="No heat if swollen" /></>}
      {at === 3 && <><Poses y={58} poses={[POSE.straight, POSE.hook, POSE.fist, POSE.straightFist]} labels={["Straight", "Hook", "Full fist", "Straight fist"]} />
        <W x={160} y={148} size={10.5}>Start slowly and build up</W></>}
      {at === 4 && <><path d="M24 150 H140" stroke={LINE} strokeWidth="3" strokeLinecap="round" />{[0, 1, 2, 3].map(index => <rect key={index} x={30 + index * 28} y={130 - index * 22} width="20" height={20 + index * 22} rx="4" fill={index === 3 ? INK : TINT} stroke={INK} strokeWidth="2" />)}
        <Box x={238} y={50} text="Keep active" lit /><Lines x={238} y={84} lines={["Limit it at first,", "then build up"]} /><Lines x={238} y={134} lines={["Do not stop using", "the finger completely"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TrfSugarMeter(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["More likely with diabetes", "Hand pain and diabetes? See a GP", "Check blood sugar more often after", "A second injection, or surgery"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diabetes" title="Diabetes, injections and blood sugar" label="Trigger finger and diabetes" credit={at === 2 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A blood glucose meter with a rising arrow beside a hand">
      {at === 0 && <><Drop x={54} y={92} r={32} /><Hand x={118} y={160} scale={0.6} bent={[2]} />
        <Box x={238} y={48} w={160} text="More likely with diabetes" lit size={10} /><Lines x={238} y={86} lines={["Most trigger fingers", "happen without it"]} /></>}
      {at === 1 && <><Hand x={78} y={156} scale={0.92} palmSpot /><Drop x={140} y={52} r={16} />
        <Box x={238} y={46} text="See a GP" lit /><Lines x={238} y={84} lines={["Hand problems can be", "more serious with", "diabetes"]} /></>}
      {at === 2 && <><Meter x={62} y={96} /><Syringe x={124} y={64} rotate={210} s={0.6} />
        <List x={168} y={46} gap={26} lines={["Tell the doctor first", "Check sugar more often"]} /><Box x={238} y={118} w={156} text="Very thirsty or confused?" lit size={10} /><W x={238} y={148} size={10}>A doctor or 111 now</W></>}
      {at === 3 && <><Hand x={80} y={156} scale={0.92} bent={[2]} /><Loop x={136} y={70} r={16} />
        <Box x={238} y={48} text="A second injection" /><W x={238} y={82} size={10}>or</W><Box x={238} y={110} text="Surgery" lit /><Lines x={238} y={146} lines={["if triggering", "persists"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TrfDeskToolbox(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Little evidence work causes it", "Rotate tasks or reduce hours", "Access to Work can help", "Desk jobs may go straight back", "Drive once healed and you can grip"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and hobbies" title="Desk, toolbox or steering wheel" label="Work and hobbies" credit={at === 3 ? ideaCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A toolbox, a desk job and a steering wheel, for work and driving after surgery">
      {(at === 0 || at === 1) && <Toolbox x={80} y={104} />}
      {at === 0 && <><Box x={200} y={50} w={70} text="Work" /><Box x={276} y={50} w={70} text="Home" /><Box x={200} y={88} w={70} text="Garden" /><Box x={276} y={88} w={70} text="Sport" />
        <Lines x={238} y={128} lines={["Hand use there can", "make the pain worse"]} /></>}
      {at === 1 && <><Loop x={80} y={98} r={58} /><List x={168} y={48} gap={28} lines={["Do tasks differently", "Rotate tasks", "Reduced hours", "Talk to manager or HR"]} /></>}
      {at === 2 && <><Doc x={78} y={100} /><Box x={238} y={46} text="Access to Work" lit /><Lines x={238} y={78} lines={["A grant for equipment", "or workplace changes"]} /><Box x={238} y={130} w={156} text="Reasonable adjustments" size={10} /></>}
      {at === 3 && <>{[["Desk job: may go straight back", 14], ["Light manual job", 90], ["Heavy manual job: may need longer", 180]].map(([label, width], index) => <g key={label as string}>
        <W x={20} y={46 + index * 40} size={10} anchor="start">{label as string}</W><rect x="20" y={53 + index * 40} width={width as number} height="12" rx="6" fill={index === 0 ? GOLD : INK} /></g>)}
        <W x={160} y={170} size={10}>The leaflets give different weeks</W></>}
      {at === 4 && <><Wheel x={78} y={100} r={44} /><List x={168} y={48} gap={28} lines={["Wound healed", "No dressings", "Can grip the wheel", "Ask your insurer"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TrfReturnLoop(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A second injection may help", "Exercises by day, a splint at night", "Return after surgery is uncommon", "Rarely harmful, but can become fixed", "See a GP, or refer yourself"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="If it comes back" title="When it comes back" label="If it comes back" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A loop arrow round a bent finger, for a trigger finger that comes back">
      {at === 0 && <><Loop x={86} y={100} r={58} /><SideFinger x={90} y={94} scale={0.48} bend={0.5} />
        <Box x={238} y={44} text="A second injection" lit /><Lines x={238} y={74} lines={["sometimes helps;", "Glasgow: 2 at most"]} /><Box x={238} y={126} text="Or surgery" /></>}
      {at === 1 && <><Moon x={36} y={40} /><SideFinger x={72} y={100} scale={0.72} stick />
        <List x={168} y={52} gap={30} lines={["Exercises keep it moving", "A splint stops locking", "Up to 12 weeks to ease"]} /></>}
      {at === 2 && <><Hand x={80} y={156} scale={0.92} scar /><Box x={238} y={44} w={156} text="Uncommon after surgery" lit size={10} /><Lines x={238} y={80} lines={["Stays locked bent,", "will not straighten?"]} /><Box x={238} y={128} text="Get in touch" /></>}
      {at === 3 && <><SideFinger x={74} y={70} scale={0.72} bend={0.85} /><Box x={238} y={48} text="Very rarely harmful" lit /><Lines x={238} y={84} lines={["Untreated, it can", "become fixed bent"]} /></>}
      {at === 4 && <><Person x={58} y={140} scale={1.3} /><Bubble x={116} y={64} />
        <List x={168} y={52} gap={30} lines={["See a GP", "Or refer yourself", "Severe? A surgeon review"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== De Quervain's tenosynovitis =============================================================================

function DqTunnelPair(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Two thumb tendons share one tunnel", "A thicker sheath makes it narrower", "Several names for one problem", "Settles by itself: weeks or months"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Two tendons, one tight tunnel" label="De Quervain's tenosynovitis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hand and wrist with the two thumb tendons running through one tunnel on the thumb side of the wrist">
      {at === 0 && <><Hand x={80} y={112} scale={0.8} arm tendons="plain" /><Ring x={64} y={110} r={14} still={still} />
        <Box x={238} y={46} text="Two thumb tendons" lit /><Lines x={238} y={80} lines={["share one tunnel,", "the sheath"]} /><Box x={238} y={128} w={156} text="Thumb away from hand" size={10} /></>}
      {at === 1 && <><Tunnel x={84} y={88} /><Tunnel x={236} y={88} thick /><W x={84} y={140} size={10.5}>Slides freely</W><W x={236} y={140} size={10.5}>Narrower, harder</W><W x={236} y={156} size={10}>Pain and swelling</W></>}
      {at === 2 && <><Hand x={72} y={116} scale={0.75} arm tendons="plain" /><W x={238} y={42} size={10}>de Quervain's</W>
        <Box x={238} y={68} text="syndrome" /><Box x={238} y={102} text="tendinitis" /><Box x={238} y={136} text="tendinopathy" lit /></>}
      {at === 3 && <><Cal x={76} y={86} w={70} /><W x={76} y={146} size={14} serif fill={INK}>Weeks or months</W>
        <Box x={238} y={52} text="Not harmful" lit /><Lines x={238} y={86} lines={["but can be a painful", "nuisance"]} /><Lines x={238} y={136} lines={["Some mild cases recover", "in a few weeks"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DqThumbsUp(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Worse lifting the thumb, or twisting", "Swelling, tenderness, maybe clicking", "No better after 2 weeks? See a GP", "Severe pain or a hot lump: NHS 111"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Where it hurts, and when" label="Symptoms" credit={at === 3 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hand giving a thumbs up, with the sore spot on the thumb side of the wrist">
      <Hand x={80} y={120} scale={0.8} arm bent={at === 0 ? [0, 1, 2, 3] : []} thumb={at === 0 ? "up" : "out"} wristSpot={at !== 2} swollen={at === 1} />
      {at === 0 && <><Ring x={64} y={120} r={14} still={still} /><Box x={238} y={44} text="Thumb side of wrist" lit /><List x={168} y={80} gap={26} lines={["Lifting the thumb", "Scissors, taps, doors", "Texting, gaming"]} /></>}
      {at === 1 && <><List x={168} y={46} gap={26} lines={["Swelling", "Tender to touch", "Clicking or snapping", "Weaker pinch or grip"]} /><W x={238} y={160} size={10}>Compare the other wrist</W></>}
      {at === 2 && <><Box x={238} y={40} text="See a GP if" lit /><List x={168} y={72} gap={24} lines={["No better in 2 weeks", "Worse or keeps returning", "Tingling or numbness", "You have diabetes"]} /></>}
      {at === 3 && <><Box x={238} y={38} text="Contact NHS 111" lit /><List x={168} y={68} gap={22} lines={["Severe wrist pain", "Cannot move it or hold", "Hot, red, painful lump"]} /><Box x={238} y={150} w={156} text="Snap, or numb: A&E" lit size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DqWomenBars(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Often the cause is unknown", "Long spells of repeated gripping", "Common in mothers of small babies", "More women than men; leaflets differ"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Often no clear reason at all" label="Why it happens" credit={at === 3 ? ideaCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="What may play a part in de Quervain's, with how much more often women are affected by each leaflet">
      {at === 0 && <><W x={80} y={126} size={84} serif fill={INK}>?</W><Box x={238} y={52} text="Cause often unknown" lit /><Lines x={238} y={88} lines={["Sometimes trauma,", "overuse or inflammation"]} /></>}
      {at === 1 && <><Loop x={80} y={104} r={56} /><g transform="translate(80 104) scale(1.5)"><Scissors x={0} y={-4} /></g>
        <List x={168} y={46} gap={26} lines={["Long repetitive tasks", "Long spells of gripping", "DIY or gardening", "A new sport or job"]} /></>}
      {at === 2 && <><Carry x={70} y={150} /><Box x={238} y={46} w={160} text="Mothers of small babies" lit size={10} /><Lines x={238} y={82} lines={["Hormones or lifting?", "It is not known"]} /><W x={238} y={132} size={10}>Also during pregnancy</W></>}
      {at === 3 && <><W x={160} y={38} size={10.5}>Times more often in women than men</W>
        {[["NHS inform", 10], ["Newcastle", 6], ["Gloucestershire", 3]].map(([label, times], index) => <g key={label as string}>
          <W x={20} y={70 + index * 32} size={10.5} anchor="start">{label as string}</W><rect x="118" y={59 + index * 32} width={(times as number) * 13} height="14" rx="7" fill={INK} />
          <W x={124 + (times as number) * 13} y={70 + index * 32} size={10.5} anchor="start" fill={INK}>{`${times} times`}</W></g>)}
        <W x={160} y={168} size={10}>Most common: 30 to 50, or 30 to 55</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DqFinkelstein(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Your story and an examination", "Simple wrist and thumb movements", "Scans are not usually needed", "You may be able to refer yourself"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diagnosis" title="Found by talking and touching" label="Diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hand with the thumb tucked in and the wrist bending towards the little finger, as in a simple movement test">
      {at === 0 && <><Person x={56} y={140} scale={1.3} /><Bubble x={116} y={70} /><Box x={238} y={48} text="Your story" lit /><W x={238} y={80} size={10}>and</W><Box x={238} y={106} text="An examination" /><Lines x={238} y={144} lines={["of the wrist", "and thumb"]} /></>}
      {at === 1 && <><Hand x={80} y={126} scale={0.8} arm bent={[0, 1, 2, 3]} thumb="in" tilt={24} /><Arrow d="M118 40 C138 52 146 72 144 94" head="M138 88 L144 94 L150 87" />
        <List x={168} y={46} gap={26} lines={["Wrist movement", "Pain or swelling", "Thumb against resistance"]} /><Box x={238} y={140} text="Finkelstein's test" lit /></>}
      {at === 2 && <><rect x="30" y="38" width="96" height="128" rx="8" fill={TEXT} /><Hand x={78} y={150} scale={0.55} arm={false} /><Cross x={78} y={102} s={34} />
        <Box x={238} y={46} text="Not usually needed" lit /><Lines x={238} y={80} lines={["X-ray or ultrasound", "only occasionally"]} /><Lines x={238} y={128} lines={["to rule out", "look-alikes"]} /></>}
      {at === 3 && <><Person x={56} y={140} scale={1.3} /><Phone x={118} y={92} /><Box x={238} y={44} w={156} text="Refer yourself: MSK" lit /><W x={238} y={72} size={10}>in many areas</W><Box x={238} y={110} text="A hand therapist" /><Lines x={238} y={142} lines={["via your GP or", "hospital team"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DqPeasTimer(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Rest, and cut down what causes pain", "Wrapped ice, up to 20 minutes", "Paracetamol or ibuprofen gel can help", "A pharmacist can advise"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Self-care" title="Rest, ice and the right painkiller" label="Rest, ice and painkillers" credit={at >= 2 ? medsCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A wrapped ice pack on the thumb side of a wrist, beside a clock">
      {at < 2 && <Hand x={78} y={116} scale={0.78} arm />}
      {at === 0 && <><Box x={238} y={44} text="Rest your thumb" lit /><List x={168} y={80} gap={26} lines={["Cut down what hurts", "Less at one time", "Micro breaks"]} /></>}
      {at === 1 && <><ColdPack x={70} y={120} /><Clock x={140} y={46} r={16} hand={2} /><W x={140} y={80} size={10}>20 min</W>
        <Box x={238} y={44} text="Wrapped ice" lit /><Lines x={238} y={74} lines={["Up to 20 minutes,", "every 2 to 3 hours"]} /><Box x={238} y={122} text="No heat if swollen" /><Lines x={238} y={150} lines={["Never ice on bare skin"]} /></>}
      {at === 2 && <><Pill x={60} y={66} /><Pill x={104} y={56} rotate={-20} /><Tube x={78} y={124} />
        <List x={168} y={46} gap={26} lines={["Paracetamol", "Ibuprofen gel", "Tablets, if needed"]} /><Lines x={238} y={134} lines={["Gel plus tablets:", "do not take too much"]} /></>}
      {at === 3 && <><Person x={64} y={140} scale={1.3} /><path d="M64 40 V72 M48 56 H80" stroke={GOLD} strokeWidth="9" strokeLinecap="round" />
        <List x={168} y={46} gap={26} lines={["Best painkiller", "Best splint", "Whether to see a GP"]} /><Box x={238} y={140} w={156} text="Pregnant? Paracetamol" lit size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DqThumbSpica(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Holds thumb and wrist, fingers free", "Get advice before you buy one", "Advice differs: ask your therapist", "Off for exercises; not all the time"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="A splint" title="A splint that holds both" label="A thumb splint" credit={at === 2 ? ideaCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A splint holding the thumb and the wrist, with a metal bar along the wrist and the fingers left free">
      {at !== 2 && <Hand x={80} y={112} scale={0.82} arm spica={at !== 3} />}
      {at === 0 && <><Box x={238} y={44} text="Thumb and wrist" lit /><List x={168} y={80} gap={26} lines={["A metal bar in it", "Fingers left free", "Thumb tip still bends"]} /></>}
      {at === 1 && <><List x={168} y={44} gap={24} lines={["Pharmacy", "Sports shop", "Online", "Physiotherapist"]} /><Box x={238} y={142} text="Ask a professional" lit /><W x={238} y={172} size={10}>Do not borrow one</W></>}
      {at === 2 && <>{[["NHS Lothian", "2 to 3 weeks"], ["Torbay", "3 to 4 weeks"], ["North Tees", "at least 6 weeks"], ["Bath (RUH)", "3 weeks to 3 months"]].map(([name, time], index) => <g key={name}>
        <W x={24} y={46 + index * 30} size={10.5} anchor="start">{name}</W><path d={`M96 ${42 + index * 30} H178`} stroke={LINE} strokeWidth="2" strokeDasharray="3 4" /><W x={296} y={46 + index * 30} size={10.5} anchor="end" fill={INK}>{time}</W></g>)}
        <Box x={160} y={168} w={200} text="Your therapist will say" lit /></>}
      {at === 3 && <><Arrow d="M124 132 C140 120 146 102 144 84" head="M138 90 L144 84 L150 90" /><Box x={238} y={44} text="Off for exercises" lit /><Lines x={238} y={76} lines={["Worn too much, the", "thumb gets stiff, weak"]} /><Box x={238} y={124} text="Stop if it rubs" /><Lines x={238} y={152} lines={["or leaves red marks"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DqTwoWeekBand(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Into the tendon sheath, if needed", "Takes weeks to work; figures vary", "Hot and more painful? See a doctor now", "Do not overdo it for two weeks"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Steroid injection" title="One small injection, a few weeks" label="Steroid injections" credit={at === 2 ? urgentCredit : at === 1 ? ideaCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A syringe at the tendon tunnel on the thumb side of the wrist, and a band showing two weeks of taking it easy">
      {at === 0 && <><Hand x={80} y={112} scale={0.82} arm tendons="thick" /><Syringe x={66} y={112} rotate={200} s={0.8} />
        <Box x={238} y={46} w={156} text="Into the tendon sheath" lit size={10} /><Lines x={238} y={80} lines={["If self-care has", "not helped"]} /><Lines x={238} y={128} lines={["Eases pain and", "swelling"]} /></>}
      {at === 1 && <><Cal x={72} y={84} w={64} /><W x={72} y={140} size={11}>Weeks to work</W>
        <Box x={238} y={44} text="BSSH: about 70%" lit /><Lines x={238} y={78} lines={["Other NHS leaflets:", "50 to 70%, up to 80%"]} /><Lines x={238} y={128} lines={["A repeat may", "be offered"]} /></>}
      {at === 2 && <><Meter x={70} y={100} /><List x={168} y={44} gap={24} lines={["Small risks", "Skin thinning, rarely", "Diabetes: check sugar"]} />
        <Box x={238} y={124} w={156} text="Hotter, more painful?" lit size={10} /><W x={238} y={152} size={10}>See a doctor immediately</W></>}
      {at === 3 && <><path d="M24 100 H296" stroke={LINE} strokeWidth="4" strokeLinecap="round" /><rect x="40" y="82" width="160" height="36" rx="8" fill={TINT} stroke={INK} strokeWidth="2" />
        <W x={120} y={104} size={10}>Take it easy: 2 weeks</W><circle cx="40" cy="100" r="7" fill={INK} /><circle cx="200" cy="100" r="7" fill={INK} />
        <W x={40} y={140} size={10}>Injection</W><W x={200} y={140} size={10}>2 weeks</W><Lines x={160} y={50} lines={["A flare in the first 24 hours", "usually settles in days"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DqRoofWidened(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Only when other treatments fail", "The sheath is opened to free tendons", "Stitches out at 10 to 14 days", "Problems? Your surgeon's team or GP"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Surgery" title="Widening the tendon tunnel" label="Surgery" credit={at === 3 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The tendon tunnel before the operation, narrow, and after it, opened and healed wider">
      {(at === 0 || at === 3) && <Hand x={76} y={112} scale={0.8} arm wristScar={at === 3} />}
      {at === 0 && <><Box x={238} y={40} w={156} text="Unusual cases only" lit /><List x={168} y={70} gap={24} lines={["Over a year", "Pain when resting", "No help from treatment", "Daily life affected"]} /></>}
      {at === 1 && <><Tunnel x={84} y={86} thick /><Arrow d="M150 86 H170" head="M164 80 L170 86 L164 92" /><Tunnel x={236} y={86} opened />
        <W x={84} y={136} size={10.5}>Before</W><W x={236} y={136} size={10.5}>Opened, heals wider</W><W x={160} y={168} size={10}>A day case, usually local anaesthetic</W></>}
      {at === 2 && <List x={36} y={48} gap={30} size={10.5} lines={["48 hours: bandaged", "10 to 14 days: stitches out", "2 to 3 weeks: light or desk work", "4 to 6 weeks: heavy manual work"]} />}
      {at === 3 && <><List x={168} y={44} gap={24} lines={["Infection under 1 in 100", "Brief numbness", "Sore scar for weeks"]} /><Box x={238} y={124} text="Any problems?" lit /><Lines x={238} y={152} lines={["Surgeon's team", "or your GP"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DqBabyHug(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Common in new mothers; cause unclear", "Two hands, held close, wrists straight", "Paracetamol is usually best", "Discuss an injection with your doctor"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Lifting" title="Lifting a baby, gently on the thumb" label="Lifting, including lifting a baby" credit={at >= 2 ? medsCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A parent holding a baby close to the chest with both arms">
      <Carry x={72} y={150} />
      {at === 0 && <><Box x={238} y={46} w={160} text="Common in new mothers" lit size={10} /><Lines x={238} y={82} lines={["Hormones or lifting?", "It is not known"]} /><W x={238} y={132} size={10}>Sometimes: mummy thumb</W></>}
      {at === 1 && <List x={168} y={46} gap={26} lines={["Carry things close", "Use two hands", "Keep wrists straight", "Do not grip with thumbs"]} />}
      {at === 2 && <><Box x={238} y={46} text="Breastfeeding" lit /><Lines x={238} y={78} lines={["Paracetamol is", "usually best"]} /><Lines x={238} y={128} lines={["Gel? Keep baby's skin", "off that area"]} /></>}
      {at === 3 && <><Box x={238} y={46} text="Talk to your doctor" lit /><Lines x={238} y={78} lines={["Single injections", "should not affect it"]} /><Box x={238} y={128} text="Or hand therapy" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DqStraightWrist(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Scissors, taps, texting and gaming", "Wrist in line; stand every 30 minutes", "Stop if the pain starts to rise", "Your employer and Access to Work"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Daily tasks" title="Phones, taps and keyboards, done differently" label="Phones, keyboards and daily tasks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A forearm and hand resting on a desk with a straight line through the wrist, and everyday things that can hurt">
      {at === 0 && <><Scissors x={50} y={80} /><Tap x={124} y={84} /><Phone x={198} y={80} w={30} h={52} /><Handle x={262} y={80} />
        {["Scissors", "Taps", "Texting", "Door handles"].map((label, index) => <W key={label} x={[50, 124, 198, 270][index]} y={134} size={10}>{label}</W>)}<W x={160} y={166} size={10}>Also secateurs and lifting</W></>}
      {at === 1 && <><path d="M20 126 H300" stroke={LINE} strokeWidth="3" strokeLinecap="round" /><Hand x={150} y={100} scale={0.66} rotate={90} arm /><path d="M20 100 H300" stroke={GOLD} strokeWidth="2.5" strokeDasharray="6 5" />
        <W x={160} y={40} size={10.5}>Wrist in line with the forearm</W><Lines x={160} y={152} lines={["A break every 30 minutes or so", "Wrists relaxed when typing"]} /></>}
      {at === 2 && <><Jar x={62} y={110} /><List x={168} y={44} gap={26} lines={["Stop if pain rises", "Less at one time", "Micro breaks", "A padded handle"]} /></>}
      {at === 3 && <><Person x={56} y={140} scale={1.3} /><Doc x={118} y={96} /><Box x={238} y={40} w={156} text="Talk to your employer" lit size={10} /><Lines x={238} y={68} lines={["An OT can suggest", "equipment or changes"]} /><Box x={238} y={118} text="Access to Work" /><W x={238} y={150} size={10}>No need to be pain free</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DqPainGauge(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Start as your therapist advises", "Lift the thumb gently, with help", "Later: wrist lowers and resisted lifts", "Keep pain between 0 and 5 out of 10"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exercises" title="Small movements, never into pain" label="Gentle exercises" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pain scale from 0 to 10 with 0 to 5 filled, and a hand doing a gentle thumb lift">
      {at === 0 && <><Hand x={78} y={114} scale={0.8} arm /><Arrow d="M118 150 C136 140 146 124 146 106" head="M140 112 L146 106 L152 112" />
        <Box x={238} y={44} text="Once pain settles" lit /><Lines x={238} y={76} lines={["Your therapist says", "what and when"]} /><Box x={238} y={124} w={156} text="Splint off to exercise" size={10} /></>}
      {at === 1 && <><Hand x={84} y={156} scale={0.9} /><Arrow d="M24 92 C18 74 24 60 38 52" head="M30 52 L38 52 L36 60" />
        <List x={168} y={46} gap={26} lines={["Thumb up and away", "Lower it slowly", "Glide to fingertips"]} /><W x={238} y={140} size={10}>10 times (Bath)</W></>}
      {at === 2 && <><rect x="16" y="104" width="104" height="56" rx="6" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M24 92 H112" stroke={INK} strokeWidth="28" strokeLinecap="round" /><path d="M24 92 H112" stroke={WHITE} strokeWidth="22" strokeLinecap="round" />
        <g transform="translate(120 92) rotate(60)"><rect x="-4" y="-12" width="46" height="24" rx="11" fill={WHITE} stroke={INK} strokeWidth="3" /></g><Arrow d="M150 82 C160 98 156 116 146 128" head="M144 120 L146 128 L153 123" />
        <List x={168} y={46} gap={26} lines={["Wrist lowers, then up", "Resisted thumb lifts", "Grip, as pain allows"]} /></>}
      {at === 3 && <><W x={160} y={46} size={10.5}>Pain out of 10 during exercise</W><PainScale x={40} y={62} upTo={5} /><Lines x={160} y={136} lines={["Aim for 0 to 5", "No worse the next morning"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DqThreeSteps(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Settle it, then rebuild strength", "No more than a few days of rest", "Treat pain as a warning", "Keeps coming back? See a GP"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Coming back" title="Keeping it from coming back" label="Stopping it coming back" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three steps: settle the pain, restore movement, then return to normal use">
      {at === 0 && <><Box x={58} y={70} w={92} text="Settle pain" lit /><Arrow d="M106 70 H112" head="M108 65 L113 70 L108 75" /><Box x={160} y={70} w={92} text="Movement" /><Arrow d="M208 70 H214" head="M210 65 L215 70 L210 75" /><Box x={262} y={70} w={92} text="Normal use" />
        <Lines x={160} y={124} lines={["Adapt what hurts at first,", "then build strength step by step"]} /></>}
      {at === 1 && <><Cal x={48} y={100} w={54} /><Arrow d="M82 100 H104" head="M98 94 L104 100 L98 106" /><Person x={134} y={116} scale={1.2} /><W x={50} y={146} size={10}>Rest a few days</W><W x={134} y={146} size={10}>Then active</W><Lines x={238} y={44} lines={["A few days' rest", "at most"]} /><List x={168} y={98} gap={26} lines={["Warm up first", "Stretch gently after", "Regular breaks"]} /></>}
      {at === 2 && <><Hand x={80} y={156} scale={0.9} wristSpot /><W x={136} y={74} size={44} serif fill={GOLD}>!</W><Box x={238} y={48} text="Pain is a warning" lit /><Lines x={238} y={84} lines={["A little at a time,", "with plenty of rest"]} /><W x={238} y={134} size={10}>Think how to do it differently</W></>}
      {at === 3 && <><Loop x={82} y={100} r={54} /><Hand x={82} y={150} scale={0.55} wristSpot /><Box x={238} y={40} text="See a GP" lit /><List x={168} y={72} gap={24} lines={["Keeps coming back", "Getting worse", "Stops normal activities"]} /><W x={238} y={160} size={10}>At most 3 injections a year</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function HandsPieceView({ piece, ...props }: { piece: HandsPiece } & PieceProps) {
  switch (piece) {
    case "trf-pulley-catch": return <TrfPulleyCatch {...props} />;
    case "trf-click-morning": return <TrfClickMorning {...props} />;
    case "trf-risk-icons": return <TrfRiskIcons {...props} />;
    case "trf-press-watch": return <TrfPressWatch {...props} />;
    case "trf-lolly-splint": return <TrfLollySplint {...props} />;
    case "trf-sheath-syringe": return <TrfSheathSyringe {...props} />;
    case "trf-palm-release": return <TrfPalmRelease {...props} />;
    case "trf-healing-weeks": return <TrfHealingWeeks {...props} />;
    case "trf-jar-ring": return <TrfJarRing {...props} />;
    case "trf-sugar-meter": return <TrfSugarMeter {...props} />;
    case "trf-desk-toolbox": return <TrfDeskToolbox {...props} />;
    case "trf-return-loop": return <TrfReturnLoop {...props} />;
    case "dq-tunnel-pair": return <DqTunnelPair {...props} />;
    case "dq-thumbs-up": return <DqThumbsUp {...props} />;
    case "dq-women-bars": return <DqWomenBars {...props} />;
    case "dq-finkelstein": return <DqFinkelstein {...props} />;
    case "dq-peas-timer": return <DqPeasTimer {...props} />;
    case "dq-thumb-spica": return <DqThumbSpica {...props} />;
    case "dq-two-week-band": return <DqTwoWeekBand {...props} />;
    case "dq-roof-widened": return <DqRoofWidened {...props} />;
    case "dq-baby-hug": return <DqBabyHug {...props} />;
    case "dq-straight-wrist": return <DqStraightWrist {...props} />;
    case "dq-pain-gauge": return <DqPainGauge {...props} />;
    case "dq-three-steps": return <DqThreeSteps {...props} />;
    default: return null;
  }
}
