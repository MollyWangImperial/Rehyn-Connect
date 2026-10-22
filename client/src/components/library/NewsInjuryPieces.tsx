import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { INJURY_PIECES, type InjuryPiece } from "@/content/injury-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Knee } from "./NewsBonesPieces";

// The Sprains and strains, Knee ligament injury and Torn meniscus pages' own pieces (content/injury-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isInjuryPiece = (piece: NewsPiece): piece is InjuryPiece => (INJURY_PIECES as readonly string[]).includes(piece);

const urgentCredit = "Illustration: Rehyn. If you are worried, get help straight away.";
const medsCredit = "Illustration: Rehyn. Check with a pharmacist or GP.";
const moveCredit = "Illustration: Rehyn. Follow your own physiotherapist's advice.";
const ideaCredit = "Illustration: Rehyn. A picture of the idea, not a measurement.";

// ==== Shared drawing helpers ================================================================================

/** The caption under a picture. */
const Say = ({ children }: { children: ReactNode }) => <W x={160} y={206} size={11}>{children}</W>;
/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 24, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="8" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 12 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
/** A gold tick. */
const Tick = ({ x, y, s = 10 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y} L${x - s * 0.3} ${y + s * 0.7} L${x + s} ${y - s * 0.8}`} stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
/** A gold ring round what the section is about. */
const Ring = ({ x, y, r, still }: { x: number; y: number; r: number; still: boolean }) =>
  <circle cx={x} cy={y} r={r} fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />;
const Arrow = ({ d, head, stroke = GOLD }: { d: string; head: string; stroke?: string }) =>
  <g stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
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
/** A week of days from x, `step` apart; `lit` days are filled. */
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const Week = ({ x, y, lit, step = 24 }: { x: number; y: number; lit: number[]; step?: number }) =>
  <g>{DAYS.map((day, index) => { const on = lit.includes(index); return <g key={index}><rect x={x + index * step} y={y} width={step - 4} height="24" rx="5" fill={on ? INK : WHITE} stroke={INK} strokeWidth="1.5" /><W x={x + index * step + (step - 4) / 2} y={y + 16} size={10} fill={on ? WHITE : TEXT}>{day}</W></g>; })}</g>;
/** A pain scale from 0 to 10, from x across 238, at height y; boxes up to `upTo` are filled. */
const PainScale = ({ x, y, upTo }: { x: number; y: number; upTo: number }) =>
  <g>{Array.from({ length: 11 }, (_, index) => <rect key={index} x={x + index * 22} y={y} width="18" height="16" rx="4" fill={index <= upTo ? INK : WHITE} stroke={INK} strokeWidth="1.5" />)}
    {[0, 5, 10].map(n => <W key={n} x={x + n * 22 + 9} y={y + 30} size={10}>{String(n)}</W>)}</g>;
/** A timeline from the first tick to the last at height y, filled as far as `reach`; labels alternate below and above. */
const Track = ({ ticks, reach, y = 150 }: { ticks: [number, string][]; reach: number; y?: number }) =>
  <g><path d={`M${ticks[0][0]} ${y} H${ticks[ticks.length - 1][0]}`} stroke={LINE} strokeWidth="8" strokeLinecap="round" /><path d={`M${ticks[0][0]} ${y} H${reach}`} stroke={INK} strokeWidth="8" strokeLinecap="round" />
    {ticks.map(([tx, label], index) => <g key={label}><circle cx={tx} cy={y} r="7" fill={tx <= reach ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={tx} y={index % 2 ? y - 16 : y + 24} size={10}>{label}</W></g>)}</g>;
/** A cold pack wrapped in a towel, centred on (x, y). */
const ColdPack = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 28} y={y - 18} width="56" height="36" rx="8" fill={TINT} stroke={INK} strokeWidth="2.5" />
    {[[-14, -6], [0, 4], [12, -4], [-8, 8], [14, 8]].map(([dx, dy]) => <rect key={`${dx}${dy}`} x={x + dx - 3} y={y + dy - 3} width="6" height="6" rx="1" fill={WHITE} stroke={SOFT} strokeWidth="1" />)}
    <path d={`M${x - 32} ${y - 8} H${x + 32} M${x - 32} ${y + 10} H${x + 32}`} stroke={INK} strokeWidth="2" strokeDasharray="4 3" /></g>;
/** A hot water bottle centred on (x, y). */
const Bottle = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 6} y={y - 30} width="12" height="12" rx="2" fill={INK} /><rect x={x - 20} y={y - 20} width="40" height="44" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    {[-8, 2, 12].map(dy => <path key={dy} d={`M${x - 12} ${y + dy} H${x + 12}`} stroke={SOFT} strokeWidth="2" />)}</g>;
/** A wine glass standing with its foot at y + 18. */
const Glass = ({ x, y }: { x: number; y: number }) =>
  <g strokeLinecap="round"><path d={`M${x - 13} ${y - 26} H${x + 13} C${x + 13} ${y - 8} ${x + 5} ${y - 2} ${x} ${y - 2} C${x - 5} ${y - 2} ${x - 13} ${y - 8} ${x - 13} ${y - 26} Z`} fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d={`M${x} ${y - 2} V${y + 18} M${x - 10} ${y + 18} H${x + 10}`} stroke={INK} strokeWidth="3" /></g>;
/** An open hand, palm out, centred on (x, y). */
const Palm = ({ x, y }: { x: number; y: number }) =>
  <g>{[-12, -4, 4, 12].map((dx, index) => <rect key={dx} x={x + dx - 3.5} y={y - 30 + (index === 3 ? 8 : index === 0 ? 4 : 0)} width="7" height="30" rx="3.5" fill={WHITE} stroke={INK} strokeWidth="2" />)}
    <rect x={x - 16} y={y - 4} width="32" height="26" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x - 14} ${y + 8} L${x - 26} ${y - 8}`} stroke={INK} strokeWidth="8" strokeLinecap="round" /></g>;
/** A mobile phone centred on (x, y), with a number on its screen. */
const Phone = ({ x, y, w = 40, h = 70, text }: { x: number; y: number; w?: number; h?: number; text?: string }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - w / 2 + 4} y={y - h / 2 + 7} width={w - 8} height={h - 22} rx="2" fill={TINT} /><circle cx={x} cy={y + h / 2 - 7} r="3" fill={INK} />
    {text && <W x={x} y={y + 2} size={12} fill={INK}>{text}</W>}</g>;
/** A pillow, (x, y) its top left. */
const Pillow = ({ x, y, w, h = 18 }: { x: number; y: number; w: number; h?: number }) =>
  <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={TINT} stroke={INK} strokeWidth="2.5" />;
/** An elbow crutch, its tip at (x, y). */
const Crutch = ({ x, y, h = 90, opacity = 1 }: { x: number; y: number; h?: number; opacity?: number }) =>
  <g stroke={TEXT} strokeWidth="4" strokeLinecap="round" fill="none" opacity={opacity}><path d={`M${x} ${y} V${y - h}`} /><path d={`M${x} ${y - h + 30} H${x + 12}`} /><path d={`M${x - 6} ${y - h - 6} C${x - 6} ${y - h + 4} ${x + 8} ${y - h + 4} ${x + 8} ${y - h - 6}`} /><circle cx={x} cy={y} r="2" fill={TEXT} /></g>;
/** A bed seen from the side: the mattress top at y. */
const Bed = ({ x, y, w = 110 }: { x: number; y: number; w?: number }) =>
  <g><path d={`M${x + 4} ${y} V${y - 22} M${x + 4} ${y + 14} V${y + 24} M${x + w - 4} ${y + 14} V${y + 24}`} stroke={INK} strokeWidth="4" strokeLinecap="round" /><rect x={x} y={y} width={w} height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /></g>;
/** A dark X-ray frame. */
const XRay = ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => <rect x={x} y={y} width={w} height={h} rx="8" fill={TEXT} />;
/** A stopwatch centred on (x, y) with words on its face. */
const Stopwatch = ({ x, y, r = 34, text, size = 20 }: { x: number; y: number; r?: number; text: string; size?: number }) =>
  <g><rect x={x - 7} y={y - r - 11} width="14" height="9" rx="2" fill={INK} /><path d={`M${x + r * 0.7} ${y - r * 0.7} l7 -7`} stroke={INK} strokeWidth="4" strokeLinecap="round" />
    <circle cx={x} cy={y} r={r} fill={WHITE} stroke={INK} strokeWidth="3" /><W x={x} y={y + size * 0.36} size={size} serif fill={INK}>{text}</W></g>;
/** A simple stick figure: hips at (x, y), legs apart by `stride`; `hand` places one hand. */
const Figure = ({ x, y, stride = 9, hand }: { x: number; y: number; stride?: number; hand?: [number, number] }) => {
  const [ax, ay] = hand ?? [x + 8, y - 12];
  return <g strokeLinecap="round" strokeLinejoin="round" fill="none">
    <path d={`M${x} ${y} L${x - stride} ${y + 52} M${x} ${y} L${x + stride} ${y + 52}`} stroke={INK} strokeWidth="7" />
    <path d={`M${x} ${y} L${x} ${y - 44}`} stroke={INK} strokeWidth="9" />
    <path d={`M${x} ${y - 40} L${ax} ${ay}`} stroke={INK} strokeWidth="6" />
    <circle cx={x} cy={y - 60} r="11" fill={INK} stroke="none" />
  </g>;
};
/** A walking (or, with `run`, jogging) figure, hips at (x, y). */
const Walker = ({ x, y, run = false, dim = false }: { x: number; y: number; run?: boolean; dim?: boolean }) =>
  <g strokeLinecap="round" strokeLinejoin="round" fill="none" opacity={dim ? 0.35 : 1}>
    <path d={run ? `M${x} ${y} L${x + 16} ${y + 20} L${x + 8} ${y + 40} M${x} ${y} L${x - 14} ${y + 16} L${x - 26} ${y + 24}` : `M${x} ${y} L${x + 10} ${y + 40} M${x} ${y} L${x - 10} ${y + 40}`} stroke={INK} strokeWidth="6" />
    <path d={`M${x} ${y} L${x + (run ? 8 : 2)} ${y - 36}`} stroke={INK} strokeWidth="8" />
    <path d={run ? `M${x + 6} ${y - 30} L${x + 20} ${y - 18} M${x + 6} ${y - 30} L${x - 8} ${y - 20}` : `M${x + 2} ${y - 30} L${x + 12} ${y - 10} M${x + 2} ${y - 30} L${x - 8} ${y - 10}`} stroke={INK} strokeWidth="5" />
    <circle cx={x + (run ? 10 : 3)} cy={y - 48} r="9" fill={INK} stroke="none" />
  </g>;
/** A figure standing on one leg, feet at y; `eyes` marks the eyes closed. */
const OneLeg = ({ x, y, eyes = false }: { x: number; y: number; eyes?: boolean }) =>
  <g strokeLinecap="round" strokeLinejoin="round" fill="none">
    <path d={`M${x} ${y - 50} V${y}`} stroke={INK} strokeWidth="6" /><path d={`M${x} ${y - 50} L${x + 12} ${y - 28} L${x + 4} ${y - 18}`} stroke={INK} strokeWidth="6" />
    <path d={`M${x} ${y - 50} V${y - 88}`} stroke={INK} strokeWidth="8" /><path d={`M${x} ${y - 84} L${x - 22} ${y - 66} M${x} ${y - 84} L${x + 22} ${y - 66}`} stroke={INK} strokeWidth="5" />
    <circle cx={x} cy={y - 100} r="9" fill={INK} stroke="none" />{eyes && <path d={`M${x - 11} ${y - 101} H${x + 11}`} stroke={GOLD} strokeWidth="4" />}
  </g>;
/** A figure lying on its back on a bed (mattress top at 150), one knee bending with an arrow. */
const LyingBend = () =>
  <g strokeLinecap="round" strokeLinejoin="round" fill="none">
    <Bed x={14} y={150} w={134} /><circle cx="30" cy="138" r="9" fill={INK} stroke="none" />
    <path d="M40 142 H86" stroke={INK} strokeWidth="8" /><path d="M86 143 H140" stroke={SOFT} strokeWidth="6" /><path d="M86 142 L108 116 L130 140" stroke={INK} strokeWidth="6" />
    <Arrow d="M140 124 C138 110 128 102 116 102" head="M122 97 L116 102 L122 108" />
  </g>;
/** A speech bubble, (x, y) its top left, with three dots. */
const Bubble = ({ x, y, w = 56, h = 30, tail = "left" }: { x: number; y: number; w?: number; h?: number; tail?: "left" | "right" }) =>
  <g><rect x={x} y={y} width={w} height={h} rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path d={tail === "left" ? `M${x + 12} ${y + h} L${x + 4} ${y + h + 12} L${x + 24} ${y + h}` : `M${x + w - 12} ${y + h} L${x + w - 4} ${y + h + 12} L${x + w - 24} ${y + h}`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    {[-1, 0, 1].map(d => <circle key={d} cx={x + w / 2 + d * 12} cy={y + h / 2} r="3.5" fill={GOLD} />)}</g>;
/** A house, its floor centred at (x, y), `w` across. */
const House = ({ x, y, w = 40 }: { x: number; y: number; w?: number }) =>
  <g strokeLinejoin="round"><path d={`M${x - w / 2 - 6} ${y - w * 0.7} L${x} ${y - w * 1.2} L${x + w / 2 + 6} ${y - w * 0.7}`} fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    <rect x={x - w / 2} y={y - w * 0.7} width={w} height={w * 0.7} fill={WHITE} stroke={INK} strokeWidth="3" /><rect x={x - 5} y={y - 16} width="10" height="16" fill={INK} /></g>;
/** A desk with a screen, the desk top at y. */
const Desk = ({ x, y, w = 100 }: { x: number; y: number; w?: number }) =>
  <g strokeLinecap="round"><path d={`M${x} ${y} H${x + w} M${x + 8} ${y} V${y + 56} M${x + w - 8} ${y} V${y + 56}`} stroke={INK} strokeWidth="4" />
    <rect x={x + w / 2 - 22} y={y - 36} width="44" height="28" rx="3" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d={`M${x + w / 2} ${y - 8} V${y}`} stroke={INK} strokeWidth="3" /></g>;
/** The car's pedals, with a foot (in a `boot` if given) ready to press the brake. */
const Pedals = ({ press = false, boot = false }: { press?: boolean; boot?: boolean }) =>
  <g><path d="M16 60 H150" stroke={INK} strokeWidth="4" strokeLinecap="round" />
    {[[70, 18], [104, 24], [136, 12]].map(([px, pw]) => <g key={px}><path d={`M${px} 60 V112`} stroke={TEXT} strokeWidth="4" /><rect x={px - pw / 2} y={112} width={pw} height="22" rx="4" fill={px === 104 && press ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" /></g>)}
    <LegSide x={24} y={70} rotate={-30} scale={0.62} boot={boot} /></g>;
/** An MRI scanner from the side, centred on (x, y), with its bed; `dim` fades it. */
const Mri = ({ x, y, dim = false }: { x: number; y: number; dim?: boolean }) =>
  <g opacity={dim ? 0.4 : 1}><rect x={x - 44} y={y - 50} width="88" height="84" rx="22" fill={TINT} stroke={INK} strokeWidth="3" /><circle cx={x} cy={y - 8} r="24" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <rect x={x - 70} y={y + 2} width="96" height="10" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" /><path d={`M${x - 58} ${y + 12} V${y + 44} M${x - 34} ${y + 12} V${y + 44}`} stroke={INK} strokeWidth="3" strokeLinecap="round" /></g>;
/** An envelope centred on (x, y). */
const Envelope = ({ x, y }: { x: number; y: number }) =>
  <g strokeLinejoin="round"><rect x={x - 44} y={y - 30} width="88" height="60" rx="6" fill={WHITE} stroke={INK} strokeWidth="3" /><path d={`M${x - 44} ${y - 26} L${x} ${y + 6} L${x + 44} ${y - 26}`} fill="none" stroke={INK} strokeWidth="2.5" /><circle cx={x + 30} cy={y + 16} r="7" fill={GOLD} /></g>;
/** A padlock centred on (x, y). */
const Padlock = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 16} ${y - 10} V${y - 26} a16 16 0 0 1 32 0 V${y - 10}`} stroke={INK} strokeWidth="6" fill="none" /><rect x={x - 26} y={y - 12} width="52" height="42" rx="7" fill={TINT} stroke={INK} strokeWidth="3" /><circle cx={x} cy={y + 6} r="5" fill={INK} /><path d={`M${x} ${y + 8} V${y + 18}`} stroke={INK} strokeWidth="4" strokeLinecap="round" /></g>;
/** A bicycle side on, its wheels' hubs at height y + 20. */
const Bike = ({ x, y }: { x: number; y: number }) =>
  <g fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx={x - 26} cy={y + 20} r="18" stroke={INK} strokeWidth="3" /><circle cx={x + 26} cy={y + 20} r="18" stroke={INK} strokeWidth="3" />
    <path d={`M${x - 26} ${y + 20} L${x - 8} ${y - 6} H${x + 16} L${x + 26} ${y + 20} M${x - 8} ${y - 6} L${x} ${y + 20} L${x + 16} ${y - 6} M${x + 16} ${y - 6} L${x + 12} ${y - 18} H${x + 22} M${x - 12} ${y - 12} H${x}`} stroke={TEXT} strokeWidth="3.5" /></g>;
/** Two lines of water. */
const Waves = ({ x, y, w = 110 }: { x: number; y: number; w?: number }) =>
  <g stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round">{[0, 14].map(dy => <path key={dy} d={`M${x} ${y + dy} ${Array.from({ length: Math.floor(w / 20) }, () => "q5 -6 10 0 q5 6 10 0").join(" ")}`} />)}</g>;
/** A laced shoe side on, heel at (x, y); `high` gives it a higher ankle. */
const Shoe = ({ x, y, high = false }: { x: number; y: number; high?: boolean }) =>
  <g strokeLinejoin="round" strokeLinecap="round"><path d={`M${x} ${y} H${x + 70} C${x + 80} ${y} ${x + 80} ${y - 10} ${x + 72} ${y - 13} L${x + 46} ${y - 22} L${x + 38} ${y - (high ? 52 : 36)} H${x + 6} C${x + 1} ${y - (high ? 52 : 36)} ${x} ${y - (high ? 46 : 30)} ${x} ${y - (high ? 40 : 24)} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path d={`M${x - 1} ${y + 1} H${x + 72}`} stroke={INK} strokeWidth="5" />{[0, 1, 2].map(i => <path key={i} d={`M${x + 34 - i * 2} ${y - 18 - i * 8} l9 3`} stroke={GOLD} strokeWidth="2.5" />)}</g>;
/** A high-heeled shoe, its heel tip at (x, y). */
const Heel = ({ x, y }: { x: number; y: number }) =>
  <path d={`M${x} ${y} L${x + 3} ${y - 28} C${x + 20} ${y - 26} ${x + 44} ${y - 12} ${x + 66} ${y - 6} C${x + 72} ${y - 4} ${x + 72} ${y + 2} ${x + 66} ${y + 2} H${x + 18} L${x + 10} ${y - 12} L${x + 7} ${y} Z`} fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />;
/** A small burst, for a pop. */
const Burst = ({ x, y, r = 14 }: { x: number; y: number; r?: number }) =>
  <polygon points={Array.from({ length: 16 }, (_, i) => { const a = i * Math.PI / 8, rr = i % 2 ? r * 0.45 : r; return `${x + rr * Math.cos(a)},${y + rr * Math.sin(a)}`; }).join(" ")} fill={GOLD} stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />;
/** A flight of stairs rising to the right from (x, y), `n` steps of `w` by `h`. */
const Stairs = ({ x, y, n = 4, w = 30, h = 28 }: { x: number; y: number; n?: number; w?: number; h?: number }) =>
  <path d={`M${x} ${y} ${Array.from({ length: n }, () => `h${w} v${-h}`).join(" ")} h${w}`} fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />;
/** A muscle as a spindle from (x, y) down `h`, with tendons at each end; `torn` breaks it, `lit` colours it. */
const Muscle = ({ x, y, h = 110, torn = false, lit = false }: { x: number; y: number; h?: number; torn?: boolean; lit?: boolean }) =>
  <g strokeLinecap="round"><path d={`M${x} ${y - 14} V${y + 4} M${x} ${y + h - 4} V${y + h + 14}`} stroke={INK} strokeWidth="4" />
    <path d={`M${x} ${y} C${x + 24} ${y + h * 0.25} ${x + 24} ${y + h * 0.75} ${x} ${y + h} C${x - 24} ${y + h * 0.75} ${x - 24} ${y + h * 0.25} ${x} ${y} Z`} fill={lit ? TINT : WHITE} stroke={INK} strokeWidth="3" />
    {[-8, 0, 8].map(dx => <path key={dx} d={`M${x + dx * 0.3} ${y + 8} C${x + dx * 1.6} ${y + h * 0.35} ${x + dx * 1.6} ${y + h * 0.65} ${x + dx * 0.3} ${y + h - 8}`} stroke={SOFT} strokeWidth="1.5" fill="none" />)}
    {torn && <path d={`M${x - 16} ${y + h * 0.5 - 4} L${x - 6} ${y + h * 0.5 + 3} L${x + 4} ${y + h * 0.5 - 5} L${x + 16} ${y + h * 0.5 + 2}`} stroke={GOLD} strokeWidth="3.5" fill="none" />}</g>;
/** A bathroom scale centred on (x, y). */
const Scales = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 46} y={y - 16} width="92" height="32" rx="9" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x={x - 16} y={y - 10} width="32" height="12" rx="3" fill={TINT} stroke={INK} strokeWidth="1.5" /><path d={`M${x} ${y} L${x + 6} ${y - 8}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" /></g>;

/** A foot from the side, the heel at (x, y), tipped `tilt` degrees (positive points the toes up). */
const Foot = ({ x, y, tilt = 0 }: { x: number; y: number; tilt?: number }) =>
  <g transform={`rotate(${-tilt} ${x} ${y})`}><path d={`M${x} ${y - 30} V${y - 6} C${x} ${y + 2} ${x + 4} ${y + 4} ${x + 10} ${y + 4} H${x + 44} C${x + 52} ${y + 4} ${x + 52} ${y - 6} ${x + 44} ${y - 8} L${x + 14} ${y - 16} V${y - 30}`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /></g>;

/** A lower leg and foot from the side: the knee at (x, y), the toes pointing right (turn with `rotate`); `boot` dresses
 *  it and `wrap` adds a bandage round the ankle. */
const LegSide = ({ x, y, scale = 1, rotate = 0, boot = false, wrap = false }: { x: number; y: number; scale?: number; rotate?: number; boot?: boolean; wrap?: boolean }) =>
  <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} strokeLinejoin="round" strokeLinecap="round">
    <path d="M-14 0 V96 C-14 108 -18 112 -18 118 C-18 124 -14 126 -8 126 H56 C64 126 66 118 58 114 L14 100 V0 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
    {wrap && <><path d="M-17 76 H15 V104 L30 108 L26 122 H-17 Z" fill={TINT} stroke={INK} strokeWidth="2" />{[84, 96, 108].map(cy => <path key={cy} d={`M-15 ${cy + 6} L15 ${cy - 4}`} stroke={SOFT} strokeWidth="1.5" />)}</>}
    {boot && <><path d="M-20 28 H20 V94 L62 108 C70 112 70 130 62 132 H-16 C-24 132 -26 124 -24 116 Z" fill={TINT} stroke={INK} strokeWidth="2.5" />
      {[46, 66, 86].map(cy => <path key={cy} d={`M-20 ${cy} H20`} stroke={INK} strokeWidth="2" />)}<path d="M-22 134 H64" stroke={INK} strokeWidth="5" /></>}
  </g>;

/** The ankle from the front: the tibia and fibula coming down to the talus and the foot. Top centre at (x, y), about
 *  166 tall. `ligament` marks the outer ankle ligaments (`frayed` dashes them), `crack` a break across the fibula,
 *  `xray` draws it pale on a dark film. */
const AnkleBones = ({ x, y, scale = 1, crack = false, ligament = false, frayed = false, xray = false }: { x: number; y: number; scale?: number; crack?: boolean; ligament?: boolean; frayed?: boolean; xray?: boolean }) => {
  const line = xray ? WHITE : INK, fill = xray ? SOFT : WHITE;
  return <g transform={`translate(${x} ${y}) scale(${scale})`} strokeLinejoin="round" strokeLinecap="round">
    <path d="M-34 134 C-40 146 -48 156 -50 166 H42 C40 156 34 146 30 134 Z" fill={xray ? SOFT : TINT} stroke={line} strokeWidth="3" />
    {[-40, -24, -8, 8, 24].map(tx => <circle key={tx} cx={tx + 4} cy={166} r="5" fill={fill} stroke={line} strokeWidth="2" />)}
    <ellipse cx="-4" cy="124" rx="24" ry="13" fill={fill} stroke={line} strokeWidth="3" />
    <path d="M-14 6 V104" stroke={line} strokeWidth="28" /><path d="M-14 6 V104" stroke={fill} strokeWidth="22" />
    <path d="M18 6 V122" stroke={line} strokeWidth="13" /><path d="M18 6 V122" stroke={fill} strokeWidth="8" />
    {crack && <path d="M8 96 L15 100 L20 96 L28 102" fill="none" stroke={GOLD} strokeWidth="3.5" />}
    {ligament && <path d="M20 124 L30 140 M16 126 L6 138" stroke={GOLD} strokeWidth="4" strokeDasharray={frayed ? "3 3" : undefined} fill="none" />}
  </g>;
};

type Lig = "acl" | "pcl" | "mcl" | "lcl";
/** A knee from the front: the thighbone above, the shinbone and fibula below, the two side (collateral) ligaments and
 *  the two crossing (cruciate) ligaments, and the two menisci between the bones. Top centre at (x, y), about 170 tall.
 *  `lit` colours ligaments; `torn` breaks the ACL; `graft` draws a new one in bony tunnels with a screw at each end;
 *  `menisci` colours the cushions, `ends` the cartilage on the bone ends; `swell`, `worn` and `camera` add to it. */
const KneeFront = ({ x, y, scale = 1, lit = [], torn = false, graft = false, menisci = false, ends = false, swell = false, worn = false, camera = false }: { x: number; y: number; scale?: number; lit?: Lig[]; torn?: boolean; graft?: boolean; menisci?: boolean; ends?: boolean; swell?: boolean; worn?: boolean; camera?: boolean }) => {
  const col = (lig: Lig) => lit.includes(lig) ? GOLD : SOFT;
  return <g transform={`translate(${x} ${y}) scale(${scale})`} strokeLinejoin="round" strokeLinecap="round">
    <path d="M28 128 C26 120 40 118 42 124 L38 134 V170 H31 V134 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path d="M-38 112 C-38 104 38 104 38 112 L36 118 C28 124 16 126 15 134 V170 H-15 V134 C-16 126 -28 124 -36 118 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
    <path d="M-17 0 V54 C-17 62 -36 64 -36 78 C-36 90 -24 94 -14 92 C-6 91 -4 86 0 86 C4 86 6 91 14 92 C24 94 36 90 36 78 C36 64 17 62 17 54 V0" fill={WHITE} stroke={INK} strokeWidth="3" />
    {ends && <path d="M-32 88 C-24 95 -10 93 -3 88 M3 88 C10 93 24 95 32 88 M-34 109 C-12 105 12 105 34 109" fill="none" stroke={GOLD} strokeWidth="3.5" />}
    {[-1, 1].map(side => <path key={side} d={`M${side * 38} 106 C${side * 38} 100 ${side * 32} 96 ${side * 24} 96 L${side * 8} 100 V104 Z`} fill={menisci ? GOLD : TINT} stroke={INK} strokeWidth="1.5" />)}
    <path d="M-35 74 L-37 128" stroke={col("mcl")} strokeWidth="6" /><path d="M35 74 L37 121" stroke={col("lcl")} strokeWidth="6" />
    <path d="M-10 86 L8 106" stroke={col("pcl")} strokeWidth="5" />
    {graft ? <><path d="M10 86 L20 62 M-8 106 L-16 130" stroke={GOLD} strokeWidth="3" strokeDasharray="4 3" /><path d="M10 86 L-8 106" stroke={GOLD} strokeWidth="6" /><circle cx="20" cy="62" r="4.5" fill={INK} /><circle cx="-16" cy="130" r="4.5" fill={INK} /></>
      : torn ? <path d="M10 86 L4 93 M-2 99 L-8 106" stroke={GOLD} strokeWidth="5" />
      : <path d="M10 86 L-8 106" stroke={col("acl")} strokeWidth="5" />}
    {worn && [-24, -14, 14, 24].map(dx => <circle key={dx} cx={dx} cy={99} r="2.5" fill={GOLD} />)}
    {swell && <ellipse cx="0" cy="98" rx="58" ry="36" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" />}
    {camera && <><path d="M76 128 L16 100" stroke={TEXT} strokeWidth="4" /><circle cx="16" cy="100" r="4.5" fill={GOLD} /></>}
  </g>;
};

/** The top of the shinbone seen from above, centred on (x, y), with the inner and outer menisci as two C shapes;
 *  `lit` colours them, `tear` adds a torn flap to the inner one. */
const MenTop = ({ x, y, scale = 1, lit = false, tear = false }: { x: number; y: number; scale?: number; lit?: boolean; tear?: boolean }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="0" cy="0" rx="68" ry="42" fill={WHITE} stroke={INK} strokeWidth="3" />
    {[-1, 1].map(side => { const d = `M${side * 14} -26 C${side * 46} -30 ${side * 60} -10 ${side * 56} 4 C${side * 52} 22 ${side * 36} 28 ${side * 14} 26`; return <g key={side} fill="none"><path d={d} stroke={INK} strokeWidth="15" /><path d={d} stroke={lit ? GOLD : TINT} strokeWidth="10" /></g>; })}
    {tear && <><path d="M-62 -8 L-46 -4" stroke={INK} strokeWidth="3" /><path d="M-46 -4 L-34 4 L-44 10 Z" fill={GOLD} stroke={INK} strokeWidth="2" /></>}
  </g>;

// ==== Sprains and strains ===================================================================================

function SprLigamentMuscle(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Common injuries of muscles, ligaments", "A sprain: a torn or twisted ligament", "A strain: an overstretched muscle", "Ankle sprains: foot twisted inwards"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Ligament or muscle: know which" label="Sprain or strain" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An ankle from the front with its outer ligaments marked, beside a muscle with tendons at each end">
      <AnkleBones x={52} y={22} scale={0.72} ligament frayed={at === 1} /><Muscle x={124} y={36} h={100} torn={at === 2} lit={at === 2} />
      <W x={50} y={164} size={10}>Ligament</W><W x={124} y={174} size={10}>Muscle</W>
      {at === 0 && <><Box x={238} y={44} w={150} text="Soft tissue injuries" lit size={10} /><Lines x={238} y={80} lines={["Ligaments, muscles", "and tendons"]} /><Box x={238} y={140} w={150} text="Most treated at home" size={10} /></>}
      {at === 1 && <><Ring x={67} y={118} r={16} still={still} /><Box x={238} y={44} w={150} text="Sprain: a ligament" lit size={10} /><Lines x={238} y={80} lines={["Torn or twisted; it", "connects the joints"]} /><List x={176} y={132} gap={22} lines={["Wrists, ankles", "Thumbs, knees"]} /></>}
      {at === 2 && <><Ring x={124} y={86} r={28} still={still} /><Box x={238} y={44} w={150} text="Strain: a muscle" lit size={10} /><Lines x={238} y={80} lines={["Overstretched or torn:", "a pulled muscle"]} /><List x={176} y={132} gap={22} lines={["Feet, legs", "Back"]} /></>}
      {at === 3 && <><Arrow d="M88 150 C96 132 90 116 76 110" head="M84 106 L76 110 L80 118" /><List x={168} y={44} gap={26} lines={["No warm-up", "Tired muscles", "Playing sport"]} /><Lines x={238} y={136} lines={["30 to 50 in 100 bone,", "joint, muscle injuries"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SprBruiseClock(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Pain, swelling, bruising, weakness", "A sprain may feel like it gives way", "A strain: pain, cramping and spasm", "Bruising can take up to 24 hours"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Pain, swelling, then the bruise" label="What it feels like" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A lower leg and foot from the side, with swelling round the ankle and a bruise that appears later">
      <LegSide x={56} y={24} scale={0.85} />
      {at !== 2 && <ellipse cx="60" cy="112" rx="26" ry="15" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" />}
      {at === 3 && <ellipse cx="74" cy="122" rx="16" ry="7" fill={SOFT} opacity="0.8" />}
      {at === 0 && <List x={164} y={44} gap={26} lines={["Pain or tenderness", "Weakness", "Swelling, bruising", "Hard to put weight on", "Spasms or cramping"]} />}
      {at === 1 && <><Ring x={52} y={110} r={20} still={still} /><Box x={238} y={44} w={130} text="A sprain" lit /><Lines x={238} y={80} lines={["Pain round the joint,", "swelling, bruising"]} /><Lines x={238} y={134} lines={["Severe: it may feel", "like it gives way"]} /></>}
      {at === 2 && <><Ring x={56} y={58} r={24} still={still} /><Box x={238} y={44} w={130} text="A strain" lit /><List x={176} y={80} gap={24} lines={["Muscle pain", "Cramping, spasm", "Weakness"]} /><W x={238} y={164} size={10}>Hamstring: maybe a pop</W></>}
      {at === 3 && <><Clock x={134} y={42} r={18} hand={2.6} /><Box x={238} y={44} w={130} text="Up to 24 hours" lit /><W x={238} y={78} size={10}>for a bruise to show</W><Lines x={238} y={114} lines={["Inflammation: pain,", "swelling, mild heat"]} /><W x={238} y={164} size={10}>The first days are worst</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SprTwoSignposts(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Crack, odd angle, numb: 999 or A&E", "Very painful or no weight on it: 111", "Broken ankle? Do not treat it yourself", "How it happened helps decide an X-ray"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Warning signs" title="When a sprain is not a sprain" label="Signs and where to go" credit={at <= 2 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An ankle with a crack in the fibula, beside the signs that need 999, A&E or NHS 111">
      {at === 0 && <><AnkleBones x={70} y={22} scale={0.8} crack /><Ring x={83} y={101} r={16} still={still} /><Box x={236} y={36} w={150} text="Call 999 or go to A&E" lit size={10} />
        <List x={164} y={70} gap={22} lines={["Heard a crack", "Odd angle or shape", "Numb or tingling", "Blue, grey or cold skin"]} /><Box x={236} y={166} w={150} text="Do not drive to A&E" size={10} /></>}
      {at === 1 && <><Phone x={72} y={96} w={46} h={80} text="111" /><Box x={236} y={36} w={150} text="Get help from NHS 111" lit size={10} />
        <List x={164} y={72} gap={24} lines={["Very painful or worse", "Lots of swelling", "No weight on it", "Hot, cold or shivery"]} /><W x={236} y={176} size={10}>Or an urgent treatment centre</W></>}
      {at === 2 && <><AnkleBones x={62} y={22} scale={0.8} ligament frayed crack /><W x={130} y={64} size={30} serif fill={INK}>?</W>
        <Lines x={238} y={44} lines={["Hard to tell: you will", "probably need an X-ray"]} /><Lines x={238} y={98} lines={["Think the ankle is", "broken? Do not treat", "it yourself"]} /><Box x={238} y={164} w={150} text="Contact NHS 111" lit /></>}
      {at === 3 && <><XRay x={20} y={24} w={112} h={160} /><AnkleBones x={76} y={30} scale={0.78} xray />
        <List x={164} y={50} gap={26} lines={["How it happened", "When it happened", "Swelling, bruising", "A change of shape"]} /><W x={238} y={166} size={10}>help decide on an X-ray</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SprEightWeekTrack(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Most feel better after 2 weeks", "Mild heals in weeks; severe in months", "An ankle: about six weeks to heal", "Skipped exercises can delay recovery", "No better in 6 weeks? Get advice"];
  const ticks: [number, string][] = [[26, "Injury"], [90, "2 weeks"], [160, "6 weeks"], [224, "8 weeks"], [292, "Months"]];
  const reach = [90, 292, 160, 160, 160][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Healing" title="Two weeks better, eight to run" label="How long it takes" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A lower leg with its swelling easing above a timeline from the injury through 2, 6 and 8 weeks to months">
      <LegSide x={62} y={14} scale={0.62} /><ellipse cx="66" cy="78" rx={[24, 22, 18, 18, 14][at]} ry={[14, 13, 11, 11, 9][at]} fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="5 4" />
      <Track ticks={ticks} reach={reach} />
      {at === 0 && <><W x={238} y={44} size={18} serif fill={INK}>2 weeks</W><W x={238} y={64} size={10}>most feel better</W><W x={238} y={98} size={10}>No running: up to 8 weeks</W></>}
      {at === 1 && <List x={162} y={36} gap={24} lines={["Mild: a few weeks", "Moderate: re-injury risk", "Severe: months"]} />}
      {at === 2 && <><Lines x={238} y={40} lines={["Ankle: about six", "weeks to heal fully"]} /><Lines x={238} y={84} lines={["Swelling: up to", "12 months"]} /></>}
      {at === 3 && <List x={162} y={30} gap={22} lines={["An earlier injury there", "Exercises not kept up", "Back to sport too early", "Obesity or diabetes"]} />}
      {at === 4 && <><Box x={238} y={40} w={150} text="No better in 6 weeks?" lit size={10} /><W x={238} y={72} size={10}>Talk to a professional</W><W x={238} y={98} size={10}>Getting worse? See a GP</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SprPriceTiles(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["PRICE for the first 2 to 3 days", "Ice in a towel; bandage off for sleep", "No heat, alcohol or massage at first", "Too much rest can slow recovery"];
  const price = ["Protect", "Rest", "Ice", "Compression", "Elevation"];
  const lit = [[0, 1, 2, 3, 4], [2, 3], [], [1]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The first days" title="PRICE for the first few days" label="The first days" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five tiles for protect, rest, ice, compression and elevation, above what to do and avoid">
      {price.map((word, index) => { const on = lit.includes(index); return <g key={word}><rect x={18 + index * 60} y={22} width="44" height="44" rx="10" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={40 + index * 60} y={52} size={22} serif fill={on ? WHITE : INK}>{word[0]}</W><W x={40 + index * 60} y={84} size={9.5}>{word}</W></g>; })}
      {at === 0 && <><Lines x={160} y={114} lines={["For the first 2 to 3 days, to bring", "down swelling and support it"]} /><W x={160} y={168} size={10}>Ice: up to 20 minutes, every 2 to 3 hours</W></>}
      {at === 1 && <><ColdPack x={62} y={138} /><Lines x={214} y={116} lines={["Never ice straight on", "the skin: use a towel"]} /><Lines x={214} y={158} lines={["Bandage: snug, not tight;", "off before sleep"]} /></>}
      {at === 2 && <><W x={160} y={106} size={10}>Avoid for the first couple of days</W><Bottle x={66} y={146} /><Glass x={160} y={144} /><Palm x={254} y={150} />
        {[66, 160, 254].map(cx => <Cross key={cx} x={cx} y={144} s={14} />)}<W x={66} y={186} size={10}>Heat</W><W x={160} y={186} size={10}>Alcohol</W><W x={254} y={186} size={10}>Massage</W></>}
      {at === 3 && <><Clock x={62} y={138} r={28} hand={1} /><Lines x={214} y={114} lines={["Ankle: move it gently", "10 to 20 seconds", "every hour awake"]} /><Box x={214} y={170} w={150} text="No need to be pain free" size={10} lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SprPharmacyCounter(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Ask a pharmacist what suits you", "Paracetamol: follow the dose limits", "Ibuprofen gel has fewer side effects", "Advice differs on the first 48 hours"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Painkillers" title="Gel first, tablets if needed" label="Painkillers" credit={medsCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pharmacy counter with a pharmacist, a tablet, a tube of gel and a clock">
      {at === 0 && <><path d="M16 46 H144 M16 76 H144" stroke={LINE} strokeWidth="4" strokeLinecap="round" />{[26, 44, 104, 122].map(bx => <rect key={bx} x={bx} y={30} width="12" height="16" rx="2" fill={TINT} stroke={INK} strokeWidth="1.5" />)}
        <Person x={80} y={120} scale={1.3} /><rect x="14" y="124" width="132" height="18" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Pill x={44} y={114} />
        <Box x={238} y={44} w={150} text="Speak to a pharmacist" lit size={10} /><Lines x={238} y={80} lines={["Tablets, or a cream", "or gel on the skin"]} /><Lines x={238} y={132} lines={["Paracetamol, and", "ibuprofen gel at first"]} /></>}
      {at === 1 && <><g transform="translate(76 96) scale(2.2)"><Pill x={0} y={0} /></g><Box x={238} y={38} w={130} text="Paracetamol" lit />
        <List x={168} y={72} gap={24} lines={["500mg: 1 or 2 a dose", "4 hours between doses", "Up to 8 in 24 hours"]} /><Lines x={238} y={154} lines={["Over 3 days only if", "a doctor says so"]} /></>}
      {at === 2 && <><g transform="rotate(-20 76 100)"><rect x="34" y="86" width="72" height="28" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="106" y="92" width="14" height="16" rx="2" fill={INK} /><path d="M34 88 L26 100 L34 112" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M50 100 H90" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /></g>
        <Box x={238} y={38} w={130} text="Ibuprofen" lit /><List x={164} y={72} gap={24} lines={["Eases pain, swelling", "Gel: fewer side effects", "Tablets: up to 10 days"]} /><Lines x={238} y={154} lines={["Ulcers, asthma or", "pregnant? Check first"]} /></>}
      {at === 3 && <><Clock x={76} y={82} r={36} hand={4.2} /><W x={76} y={146} size={18} serif fill={INK}>48 hours</W><Lines x={238} y={42} lines={["Some advice: anti-", "inflammatories only", "after 48 hours"]} />
        <Lines x={238} y={110} lines={["Others: gel or", "paracetamol first"]} /><Box x={238} y={160} w={150} text="After 4 days? Pharmacist" size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SprAlphabetFoot(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Start moving it as soon as you can", "Up and down, circles, the alphabet", "Calf stretch and heel raises", "Keep exercise pain within 0 to 5", "Unsure? Ask a professional first"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Moving again" title="Move early, gently, a little more" label="Exercises" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A foot pointing up and down, drawing circles and the letters of the alphabet, and a pain scale from 0 to 10">
      {at === 0 && <><path d="M18 154 H146" stroke={LINE} strokeWidth="4" strokeLinecap="round" /><Walker x={80} y={112} /><Arrow d="M112 70 C126 66 136 72 140 84" head="M133 80 L140 84 L142 76" />
        <Lines x={238} y={44} lines={["Too much rest can", "slow recovery"]} /><Box x={238} y={100} w={150} text="No need to be pain free" lit size={10} /><Lines x={238} y={144} lines={["Start moving it as", "soon as you can"]} /></>}
      {at === 1 && <><Foot x={30} y={112} tilt={14} /><Arrow d="M88 70 C98 82 98 98 90 108" head="M98 104 L90 108 L87 100" /><Foot x={126} y={112} /><circle cx="186" cy="82" r="14" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="10 5" />
        <W x={266} y={96} size={24} serif fill={INK}>A B C</W><path d="M234 106 C250 116 280 116 296 104" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />
        <W x={60} y={142} size={10}>Up and down</W><W x={160} y={142} size={10}>Circles</W><W x={266} y={142} size={10}>The alphabet</W><W x={160} y={176} size={10}>Up to 10 times, 2 or 3 times a day</W></>}
      {at === 2 && <g strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M18 130 H150" stroke={LINE} strokeWidth="4" /><circle cx="36" cy="62" r="10" fill={INK} stroke="none" />
        <path d="M38 74 L48 124" stroke={INK} strokeWidth="8" /><path d="M48 124 H128 L132 104" stroke={INK} strokeWidth="7" /><path d="M42 86 L76 100" stroke={INK} strokeWidth="5" /><path d="M76 100 C100 90 126 92 134 104" stroke={GOLD} strokeWidth="4" /></g>}
      {at === 2 && <><Lines x={238} y={44} lines={["Towel calf stretch:", "pull the foot up"]} /><Lines x={238} y={96} lines={["Heel raises at a", "wall or chair"]} /><Box x={238} y={148} w={150} text="Hold 20 to 30 seconds" lit size={10} /></>}
      {at === 3 && <><PainScale x={41} y={40} upTo={5} /><W x={160} y={100} size={10.5}>Keep pain within 0 to 5</W><Box x={160} y={132} w={170} text="Start with 2 to 3" lit /><W x={160} y={168} size={10}>Later, up to 2 sets of 15</W></>}
      {at === 4 && <><Person x={70} y={110} scale={1.4} /><Bubble x={96} y={36} /><Lines x={238} y={44} lines={["Diagnosed, or had", "recent surgery?"]} /><Box x={238} y={98} w={150} text="Follow your own team" lit size={10} /><Lines x={238} y={140} lines={["Worried? Ask a", "professional first"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SprRouteMap(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Slow to heal? Physio may help", "In many areas, refer yourself", "Assessment, then exercises and advice", "Pain not easing in 2 weeks? Self-refer"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Physiotherapy" title="When it is slow to heal" label="Physiotherapy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A map from home to a physiotherapy clinic, either by way of the GP surgery or by a direct path">
      <path d="M34 140 C34 100 56 84 70 80 M90 80 C110 86 126 104 126 128" fill="none" stroke={SOFT} strokeWidth="3" strokeDasharray="6 5" strokeLinecap="round" />
      <path d="M52 156 H106" stroke={at === 1 ? GOLD : LINE} strokeWidth={at === 1 ? 5 : 3} strokeLinecap="round" />
      <House x={32} y={168} w={34} /><rect x="60" y="52" width="40" height="34" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={80} y={74} size={11} fill={INK}>GP</W>
      <rect x="106" y="134" width="40" height="34" rx="4" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><path d="M126 142 V160 M117 151 H135" stroke={at === 2 ? WHITE : GOLD} strokeWidth="4" strokeLinecap="round" />
      <W x={32} y={186} size={10}>Home</W><W x={126} y={186} size={10}>Physio</W>
      {at === 2 && <Ring x={126} y={151} r={28} still={still} />}
      {at === 0 && <><Lines x={238} y={44} lines={["Slower than usual", "to get better?"]} /><Box x={238} y={98} w={150} text="Physio may help" lit /><Lines x={238} y={140} lines={["Not normally needed", "after an ankle sprain"]} /></>}
      {at === 1 && <><List x={166} y={48} gap={28} lines={["Self-refer in many areas", "Or through a GP", "Or privately"]} /><Lines x={238} y={148} lines={["Private? Chartered and", "HCPC registered"]} /></>}
      {at === 2 && <List x={166} y={46} gap={28} lines={["Symptoms, history", "Strength, balance", "Exercises, hands-on", "Home exercises"]} />}
      {at === 3 && <><Lines x={238} y={44} lines={["Pain not improving", "after two weeks?"]} /><Box x={238} y={98} w={150} text="You could self-refer" lit size={10} /><Lines x={238} y={140} lines={["Getting worse? Seek", "advice"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SprPoolToPitch(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["No running for up to 8 weeks", "Low impact first; twisting sport later", "Going back to work helps recovery", "No driving in a boot or ankle splint"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sport and work" title="Back to the pitch, step by step" label="Sport, work and driving" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Steps rising from a swimming pool to a sports pitch, a desk, and a foot by the car pedals">
      {at === 0 && <><Cal x={76} y={78} w={74} lit /><W x={76} y={140} size={15} serif fill={INK}>Up to 8 weeks</W><Lines x={238} y={44} lines={["No strenuous exercise,", "such as running"]} />
        <Box x={238} y={98} w={160} text="Full, painless movement" lit size={10} /><Lines x={238} y={140} lines={["and strength back", "before sport"]} /></>}
      {at === 1 && <><Stairs x={14} y={176} n={3} w={30} h={34} /><Waves x={18} y={156} w={40} /><Walker x={58} y={102} /><Walker x={90} y={66} run />
        <List x={166} y={48} gap={28} lines={["Low impact first", "Swimming: maybe sooner", "Normal walking easy?", "Then twisting sports"]} /></>}
      {at === 2 && <><Desk x={22} y={110} w={110} /><Lines x={238} y={44} lines={["Desk job: once you", "can sit comfortably"]} /><Lines x={238} y={94} lines={["Physical job: once", "stronger, less pain"]} /><Box x={238} y={148} w={150} text="Work helps recovery" lit /></>}
      {at === 3 && <><Pedals boot /><Cross x={104} y={150} /><Box x={238} y={40} w={160} text="Not in a boot or splint" lit size={10} /><Lines x={238} y={76} lines={["Emergency stop,", "without pain, first"]} /><Box x={238} y={130} w={140} text="Tell your insurer" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SprWarmUpWatch(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["You cannot always prevent them", "A warm-up of at least 6 minutes", "Build fitness up gradually", "Good shoes, days off, strong ankles"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Prevention" title="A proper warm-up, built up slowly" label="Preventing injuries" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A stopwatch at six minutes beside warm-up moves, rising steps and a sports shoe">
      {at === 0 && <><Lines x={80} y={56} lines={["You cannot always", "prevent them"]} /><Shoe x={40} y={140} /><List x={166} y={44} gap={26} lines={["No warm-up", "Tired muscles", "Unsuitable shoes", "Weaker, stiffer muscles", "Poor technique"]} /></>}
      {at === 1 && <><Stopwatch x={76} y={84} r={38} text="6" size={30} /><W x={76} y={148} size={10}>at least 6 minutes</W><List x={166} y={44} gap={26} lines={["March: 3 minutes", "Heel digs", "Knee lifts", "Shoulder rolls", "Knee bends"]} /></>}
      {at === 2 && <><path d="M18 168 H146" stroke={LINE} strokeWidth="3" strokeLinecap="round" />{[0, 1, 2, 3, 4].map(index => <rect key={index} x={22 + index * 24} y={168 - (index + 1) * 22} width="18" height={(index + 1) * 22} rx="3" fill={index === 4 ? INK : TINT} stroke={INK} strokeWidth="2" />)}
        <Arrow d="M24 38 C60 34 100 28 134 24" head="M126 19 L134 24 L127 30" /><Box x={238} y={44} w={150} text="Same run 3 or 4 times" lit size={10} /><W x={238} y={76} size={10}>before going further</W><Lines x={238} y={120} lines={["Feeling tired?", "Do not exercise"]} /></>}
      {at === 3 && <><Shoe x={30} y={112} high /><Week x={14} y={140} step={19} lit={[2, 6]} /><List x={166} y={48} gap={30} lines={["Replace worn shoes", "Regular days off", "Strength, flexibility", "Strong ankles"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SprOneLegCounter(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["An ankle can feel like it gives way", "Not fully healed? More likely again", "Balance on one foot, up to one minute", "Keeps coming back? See a GP"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Giving way" title="Steady ankles, one leg at a time" label="Ankles that give way" credit={at === 2 ? moveCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A figure balancing on one leg at a kitchen counter, then on a cushion, then with eyes closed">
      {at === 0 && <><AnkleBones x={74} y={22} scale={0.8} ligament frayed /><Arrow d="M22 92 C12 110 12 128 22 146" head="M14 140 L22 146 L26 138" /><Arrow d="M126 92 C136 110 136 128 126 146" head="M134 140 L126 146 L122 138" />
        <Box x={238} y={44} w={150} text="Up to 70 in 100" lit /><Lines x={238} y={80} lines={["may get instability", "after an ankle sprain"]} /><Lines x={238} y={132} lines={["Especially if not", "fully rehabilitated"]} /></>}
      {at === 1 && <><Stairs x={14} y={176} n={4} w={26} h={30} /><Walker x={92} y={76} /><List x={166} y={48} gap={28} lines={["Not fully healed", "Uneven ground, stairs", "Unsupportive shoes", "Poorer balance"]} /></>}
      {at === 2 && <><W x={160} y={30} size={10.5}>Build up towards one minute</W>
        <rect x="22" y="84" width="22" height="66" rx="3" fill={TINT} stroke={INK} strokeWidth="2.5" /><OneLeg x={66} y={150} />
        <ellipse cx="160" cy="154" rx="24" ry="7" fill={TINT} stroke={INK} strokeWidth="2.5" /><OneLeg x={160} y={148} /><OneLeg x={256} y={150} eyes />
        <W x={52} y={176} size={10}>At a counter</W><W x={160} y={176} size={10}>On a cushion</W><W x={256} y={176} size={10}>Eyes closed</W></>}
      {at === 3 && <><Person x={64} y={120} scale={1.5} /><Bubble x={92} y={40} /><Box x={238} y={44} w={140} text="See a GP" lit /><Lines x={238} y={80} lines={["Worse, or keeps", "coming back"]} /><Lines x={238} y={132} lines={["Bracing or taping:", "a physio may consider"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SprBootToShoe(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Protect it: a support or good shoes", "Hospitals differ on ankle bandages", "Use supports less as time goes on", "Flat, supportive shoes; no high heels"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Supports" title="Bandage, boot or just good shoes" label="Supports and shoes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bandaged ankle, a walking boot, crutches fading away and a flat lace-up shoe">
      {at === 0 && <><Shoe x={30} y={150} high /><g transform="translate(70 70)"><circle cx="0" cy="0" r="24" fill={TINT} stroke={INK} strokeWidth="2.5" /><circle cx="0" cy="0" r="8" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M0 24 H44" stroke={INK} strokeWidth="2.5" /></g>
        <Lines x={238} y={44} lines={["A support, or shoes", "that support it"]} /><Box x={238} y={98} w={160} text="Bandage: snug, not tight" lit size={10} /><W x={238} y={132} size={10}>Off before you sleep</W></>}
      {at === 1 && <><LegSide x={58} y={28} scale={0.95} wrap /><Box x={238} y={38} w={150} text="Advice differs" lit />
        <List x={164} y={74} gap={26} lines={["One: no longer advised", "One: an elastic one", "Many do not need one"]} /><Box x={238} y={166} w={150} text="Ask your pharmacist" size={10} /></>}
      {at === 2 && <><Crutch x={30} y={170} h={110} /><Crutch x={66} y={170} h={110} opacity={0.6} /><Crutch x={102} y={170} h={110} opacity={0.3} /><Arrow d="M24 186 H124" head="M117 180 L124 186 L117 192" stroke={SOFT} />
        <Lines x={238} y={44} lines={["Early on, they can", "make you comfortable"]} /><Box x={238} y={98} w={150} text="Rely on them less" lit /><Lines x={238} y={140} lines={["A cast: usually", "not needed"]} /></>}
      {at === 3 && <><Shoe x={26} y={86} /><Tick x={124} y={64} /><Heel x={30} y={156} /><Cross x={124} y={140} />
        <Lines x={238} y={44} lines={["Wide, low heel,", "soft sole"]} /><Box x={238} y={98} w={150} text="Flat and supportive" lit /><Lines x={238} y={140} lines={["No high heels or", "tight, pointy shoes"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Knee ligament injury ==================================================================================

function AclFourRopes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Four ligaments hold the knee together", "Two on the sides, two crossing inside", "The ACL keeps the knee stable", "Stretched is a sprain; torn, a rupture", "Not every ACL injury needs surgery"];
  const lit: Lig[] = [["acl", "pcl", "mcl", "lcl"], ["acl", "pcl", "mcl", "lcl"], ["acl"], [], []][at] as Lig[];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Four ropes that hold the knee" label="The knee's ligaments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A knee from the front with two ligaments down the sides, two crossing in an X inside the joint and two cushions between the bones">
      <KneeFront x={78} y={16} scale={0.98} lit={lit} torn={at === 3} menisci={at === 3} />
      {at === 0 && <><Lines x={238} y={40} lines={["Thighbone, shinbone", "and kneecap meet"]} /><Box x={238} y={96} w={150} text="Four main ligaments" lit size={10} /><Lines x={238} y={134} lines={["Like strong ropes,", "holding bones together"]} /></>}
      {at === 1 && <><Box x={238} y={40} w={150} text="Two on the sides" lit size={10} /><W x={238} y={72} size={10}>control sideways moves</W><Box x={238} y={114} w={150} text="Two cross inside: an X" lit size={10} /><Lines x={238} y={146} lines={["control backwards and", "forwards moves"]} /></>}
      {at === 2 && <><Ring x={79} y={110} r={20} still={still} /><Box x={238} y={44} w={130} text="The ACL" lit /><Lines x={238} y={80} lines={["Stops the shinbone", "sliding forward"]} /><W x={238} y={128} size={10}>Resists twisting</W></>}
      {at === 3 && <List x={166} y={48} gap={26} lines={["Stretched: a sprain", "Torn: a rupture", "Menisci may be hurt", "Twists, landings, a hit"]} />}
      {at === 4 && <><Box x={238} y={44} w={150} text="Not all need surgery" lit size={10} /><Lines x={238} y={84} lines={["Some manage well", "with intensive rehab"]} /><Lines x={238} y={136} lines={["Most sprains: better", "after 2 weeks"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AclPopWobble(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Pain, swelling and a wobbly knee", "Fast swelling or a pop: go to A&E", "Locks or gives way: NHS 111", "Most knee injuries: 2 to 3 weeks"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="A pop, a swelling, a wobble" label="What it feels like" credit={at === 1 || at === 2 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A knee with a burst for a pop and a ring of swelling, and a staircase with a zigzag where the knee gives way">
      {(at === 0 || at === 1) && <KneeFront x={76} y={16} scale={0.96} swell lit={at === 1 ? ["acl"] : []} />}
      {at === 0 && <List x={164} y={44} gap={26} lines={["Severe pain", "Swelling", "Unsteady on stairs", "Cannot fully straighten", "May lock or give way"]} />}
      {at === 1 && <><Burst x={128} y={60} r={16} /><Box x={236} y={40} w={140} text="Go to A&E" lit /><List x={164} y={78} gap={26} lines={["Very swollen, quickly", "Felt a pop or snap"]} /><Box x={236} y={156} w={150} text="Do not drive to A&E" size={10} /></>}
      {at === 2 && <><Stairs x={14} y={176} n={4} w={26} h={30} /><path d="M24 126 L46 104 L38 96 L62 74 L54 66 L78 44" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <Box x={236} y={40} w={150} text="Get advice from 111" lit size={10} /><List x={164} y={76} gap={24} lines={["Locks", "Gives way", "Clicks painfully"]} /><W x={236} y={164} size={10}>Painless clicking: normal</W></>}
      {at === 3 && <><Cal x={76} y={80} w={74} lit /><W x={76} y={142} size={15} serif fill={INK}>2 to 3 weeks</W><Lines x={238} y={48} lines={["Most knee injuries", "take 2 to 3 weeks"]} /><Lines x={238} y={104} lines={["Sometimes up to 6", "to feel comfortable"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AclExamToMri(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Symptoms and an examination first", "No better after physio? Maybe an MRI", "An MRI: 15 minutes to an hour", "Results usually take 1 to 2 weeks", "A camera can look inside the joint"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Diagnosis" title="From examination to scan" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from questions and an examination, to an MRI scanner, to a letter with the results, to a camera inside the knee">
      {at === 0 && <><Person x={50} y={120} scale={1.5} /><Bubble x={80} y={40} /><List x={166} y={52} gap={28} lines={["Your symptoms", "How you move", "Muscles, nerves, joints"]} /></>}
      {at === 1 && <><Cal x={76} y={78} w={74} lit /><W x={76} y={140} size={15} serif fill={INK}>4 to 6 weeks</W><Lines x={238} y={44} lines={["No better after 4 to", "6 weeks of physio?"]} />
        <Box x={238} y={98} w={150} text="Maybe an MRI scan" lit size={10} /><Lines x={238} y={140} lines={["After a sprain: an", "X-ray, sometimes"]} /></>}
      {at === 2 && <><Mri x={84} y={100} /><Box x={238} y={40} w={150} text="15 minutes to 1 hour" lit size={10} /><List x={166} y={78} gap={26} lines={["Lie still", "Loud: ear plugs", "Tell them about metal"]} /></>}
      {at === 3 && <><Envelope x={78} y={96} /><Box x={238} y={44} w={140} text="1 to 2 weeks" lit /><Lines x={238} y={80} lines={["A radiologist writes", "to your doctor"]} /><Lines x={238} y={132} lines={["Heard nothing in a few", "weeks? Contact them"]} /></>}
      {at === 4 && <><KneeFront x={70} y={16} scale={0.96} camera /><Box x={238} y={44} w={140} text="Arthroscopy" lit /><Lines x={238} y={80} lines={["Keyhole surgery to", "check or repair"]} /><Lines x={238} y={132} lines={["A camera checks", "inside the knee"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AclAeOr111(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Crack, odd angle, cold skin: 999, A&E", "A pop or fast swelling: go to A&E", "Kneecap out? Keep it still and padded", "Locks, gives way, no weight: 111 now", "After surgery: breathless? 999 or A&E"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Warning signs" title="Know when it is A&E" label="When to get help" credit={urgentCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A knee beside the signs that need 999 or A&E and the signs that need NHS 111">
      {(at === 0 || at === 1) && <KneeFront x={70} y={16} scale={0.96} swell={at === 1} />}
      {at === 0 && <><Ring x={70} y={110} r={30} still={still} /><Box x={236} y={36} w={150} text="Call 999 or go to A&E" lit size={10} /><List x={164} y={70} gap={22} lines={["Heard a crack", "Changed shape, odd angle", "Numb or tingling", "Blue, grey or cold skin"]} /><Box x={236} y={166} w={150} text="Do not drive to A&E" size={10} /></>}
      {at === 1 && <><Burst x={122} y={56} r={14} /><Box x={236} y={36} w={150} text="Go to A&E" lit /><List x={164} y={70} gap={22} lines={["Changed shape", "Very swollen, quickly", "A pop or snap", "Bone showing, bleeding"]} /><Box x={236} y={166} w={150} text="Do not drive to A&E" size={10} /></>}
      {at === 2 && <><Pillow x={20} y={128} w={120} h={24} /><path d="M14 120 L76 112 L140 122" stroke={INK} strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none" /><path d="M14 120 L76 112 L140 122" stroke={WHITE} strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <Ring x={76} y={112} r={20} still={still} /><List x={166} y={48} gap={28} lines={["Keep it still, padded", "Do not raise it", "Do not stand on it", "Do not reset the kneecap"]} /></>}
      {at === 3 && <><Phone x={72} y={96} w={46} h={80} text="111" /><Box x={236} y={36} w={150} text="Get advice from 111 now" lit size={10} /><List x={164} y={70} gap={24} lines={["Very painful", "No weight on it", "Locks or gives way", "Hot, red, shivery"]} /><W x={236} y={176} size={10}>Or a walk-in centre</W></>}
      {at === 4 && <><Person x={62} y={130} scale={1.7} /><Ring x={62} y={124} r={20} still={still} /><Box x={236} y={36} w={150} text="Call 999 or go to A&E" lit size={10} />
        <Lines x={236} y={72} lines={["After ACL surgery:", "leg pain and swelling,", "with breathing trouble", "or chest pain"]} /><W x={236} y={160} size={10}>Could be a clot in the lungs</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AclBraceIceHour(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Protect, rest, ice, compress, raise", "No heat, alcohol, running or massage", "Move it gently for 10 to 20 seconds", "A pharmacist can advise on painkillers", "Two simple exercises, lying down"];
  const leg = at === 0 || at === 2 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="First days" title="Protect, ice, raise, then move" label="The first days" credit={at === 3 ? medsCredit : at === 4 ? moveCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A leg raised on a pillow with an ice pack on the knee, and a clock for moving the knee every hour">
      {leg && <><Pillow x={84} y={140} w={66} h={20} /><path d="M12 176 L76 140 L140 130" stroke={INK} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" fill="none" /><path d="M12 176 L76 140 L140 130" stroke={WHITE} strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" fill="none" /><path d="M140 130 L146 108" stroke={INK} strokeWidth="9" strokeLinecap="round" /></>}
      {at === 0 && <><ColdPack x={74} y={112} /><List x={166} y={44} gap={26} lines={["Protect, rest", "Ice: up to 20 minutes", "Bandage by day", "Raise on a pillow"]} /><W x={238} y={162} size={10}>For the first 2 to 3 days</W></>}
      {at === 1 && <><Bottle x={40} y={66} /><Glass x={112} y={64} /><Shoe x={4} y={164} /><Palm x={114} y={160} />{[[40, 66], [112, 62], [40, 146], [114, 146]].map(([cx, cy]) => <Cross key={`${cx}${cy}`} x={cx} y={cy} s={14} />)}
        <Box x={238} y={40} w={150} text="Do no HARM" lit /><List x={166} y={76} gap={24} lines={["No heat", "No alcohol", "No running", "No massage"]} /><W x={238} y={180} size={10}>for 48 to 72 hours</W></>}
      {at === 2 && <><Clock x={40} y={56} r={24} hand={0.5} /><Lines x={238} y={44} lines={["Awake? Move it", "gently every hour"]} /><Box x={238} y={98} w={150} text="10 to 20 seconds" lit /><Lines x={238} y={140} lines={["Crutches: rely on", "them less over time"]} /></>}
      {at === 3 && <><g transform="translate(64 64) scale(2)"><Pill x={0} y={0} /></g><Box x={238} y={40} w={150} text="Ask a pharmacist" lit /><Lines x={238} y={76} lines={["Paracetamol, and", "ibuprofen gel at first"]} /><Lines x={238} y={128} lines={["NHS inform: anti-", "inflammatories after", "48 hours"]} /></>}
      {at === 4 && <><LyingBend /><Lines x={238} y={44} lines={["Bend and straighten", "the leg, 10 times"]} /><Lines x={238} y={100} lines={["Push the knees down:", "hold 5 seconds,", "10 times"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AclStrengthSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Physio eases pain and helps movement", "Protect first, then strength, balance", "Intensive rehab can be enough for some", "Within 0 to 5, little and often", "Home exercises, done regularly"];
  const steps = ["Protect", "Move", "Strength", "Balance", "Full fitness"];
  const upTo = [1, 5, 3, 2, 4][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Physiotherapy" title="Building strength back, step by step" label="Physiotherapy" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ladder of steps from protecting the knee to moving, strength, balance and full fitness">
      {steps.map((step, index) => <Box key={step} x={52 + index * 16} y={170 - index * 32} w={84} text={step} lit={index < upTo} size={10} />)}
      {at === 0 && <><Lines x={238} y={40} lines={["Exercise, massage and", "other techniques"]} /><Box x={238} y={96} w={150} text="Self-refer in many areas" lit size={10} /><Lines x={238} y={138} lines={["Waits can be long", "in some places"]} /></>}
      {at === 1 && <><Lines x={238} y={40} lines={["First: crutches, a", "support or ice"]} /><Lines x={238} y={92} lines={["Then strength and", "balance, to full fitness"]} /><W x={238} y={144} size={10}>Hands-on treatment too</W></>}
      {at === 2 && <><Box x={238} y={40} w={150} text="Instead of surgery?" lit size={10} /><Lines x={238} y={76} lines={["Some manage well", "with intensive rehab"]} /><Lines x={238} y={128} lines={["Surgery if it has not", "helped, or gives way"]} /></>}
      {at === 3 && <><W x={238} y={50} size={18} serif fill={INK}>0 to 5</W><W x={238} y={70} size={10}>out of 10, while exercising</W><Lines x={238} y={106} lines={["No worse the", "morning after"]} /><Box x={238} y={156} w={150} text="Start with 2 to 3" lit /></>}
      {at === 4 && <><Lines x={238} y={40} lines={["Home exercises", "between sessions"]} /><Box x={238} y={94} w={150} text="Do them regularly" lit /><Lines x={238} y={136} lines={["After surgery: physio", "for several months"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AclGraftTunnel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Surgery if physio has not helped", "A graft, often from the hamstring", "1 to 3 hours; usually home same day", "Through small cuts, with a camera", "Most have no complications"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="ACL surgery" title="A new ligament from your own tendon" label="ACL reconstruction" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A knee with a new ligament graft running through two small bony tunnels, fixed by a screw at each end">
      {at !== 2 && <KneeFront x={78} y={16} scale={0.98} torn={at === 0} graft={at !== 0} camera={at === 3} />}
      {at === 0 && <List x={164} y={44} gap={26} lines={["Physio has not helped", "Lots of sport", "A very physical job", "Gives way a lot", "Other parts damaged"]} />}
      {at === 1 && <><W x={36} y={30} size={10}>Hamstring</W><Arrow d="M30 40 C32 70 46 92 64 102" head="M55 100 L64 102 L62 93" /><Box x={238} y={44} w={140} text="A graft" lit /><Lines x={238} y={80} lines={["Often from the", "hamstring"]} /><Lines x={238} y={132} lines={["Or the patella tendon,", "below the kneecap"]} /></>}
      {at === 2 && <><Clock x={76} y={82} r={40} hand={1.6} /><W x={76} y={150} size={15} serif fill={INK}>1 to 3 hours</W><Lines x={238} y={44} lines={["Asleep, or a spinal:", "numb below the waist"]} /><Box x={238} y={100} w={150} text="Home the same day" lit /><W x={238} y={134} size={10}>usually</W></>}
      {at === 3 && <List x={164} y={48} gap={26} lines={["Small cuts", "A camera checks inside", "Graft held by screws", "Stitches, a dressing"]} />}
      {at === 4 && <><List x={164} y={44} gap={26} lines={["Blood clots", "Wound infection", "Nerve or tissue damage", "Ongoing knee problems"]} /><W x={238} y={162} size={10}>Torn graft: more surgery</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AclMonthsRoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Most activities back within months", "A check-up at about 2 to 3 weeks", "Raised leg, but no pillow under knee", "Avoid twisting; walk as advised", "Breathless or chest pain: 999 or A&E"];
  const ticks: [number, string][] = [[24, "Same day"], [90, "10 to 14 days"], [156, "2 to 3 weeks"], [222, "Months"], [280, "Up to a year"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="After surgery" title="Home the same day, months of work" label="Recovery" credit={at === 4 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from going home the same day to months of physiotherapy, and a leg raised without a pillow under the knee">
      {at <= 1 && <Track ticks={ticks} reach={[280, 156][at]} />}
      {at === 0 && <><Lines x={160} y={44} lines={["Most activities back", "within a few months"]} /><Box x={160} y={98} w={190} text="Sport: up to a year" lit /></>}
      {at === 1 && <List x={40} y={40} gap={24} lines={["Crutches and a brace at first", "Follow-up at 2 to 3 weeks", "Stitches out: 10 to 14 days"]} />}
      {at === 2 && <><Pillow x={104} y={140} w={46} h={18} /><Pillow x={50} y={152} w={34} h={14} /><Cross x={67} y={159} s={11} /><path d="M12 150 L140 134" stroke={INK} strokeWidth="20" strokeLinecap="round" /><path d="M12 150 L140 134" stroke={WHITE} strokeWidth="15" strokeLinecap="round" /><ColdPack x={74} y={110} />
        <Lines x={238} y={44} lines={["Ice 15 to 20 minutes,", "every 2 to 3 hours"]} /><Box x={238} y={98} w={150} text="Numb? Stop icing" lit /><Lines x={238} y={140} lines={["Leg raised, but no", "pillow under the knee"]} /></>}
      {at === 3 && <><Figure x={80} y={98} /><Crutch x={52} y={150} h={90} /><Crutch x={108} y={150} h={90} /><rect x="80" y="122" width="16" height="26" rx="4" fill={TINT} stroke={INK} strokeWidth="2" />
        <List x={166} y={48} gap={28} lines={["Crutches, brace", "No twisting", "Walk as advised", "Keep the wound dry"]} /></>}
      {at === 4 && <><LegSide x={62} y={30} scale={0.95} /><Ring x={64} y={76} r={22} still={still} /><Box x={236} y={36} w={150} text="Urgent GP or NHS 111" size={10} />
        <List x={164} y={66} gap={22} lines={["Throbbing calf pain", "High temperature", "Oozing wound"]} /><Box x={236} y={146} w={160} text="Breathless: 999 or A&E" lit size={10} /><W x={236} y={176} size={10}>or chest pain</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AclGoalGates(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Sport can take up to a year", "Goals reached, not dates, guide it", "Sprain only? No running up to 8 weeks", "Warm up for around 10 to 15 minutes", "Add 10 per cent a week, at most"];
  const ticks: [number, string][] = [[30, "Operation"], [110, "A few months"], [196, "6 months"], [284, "1 year"]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Back to sport" title="Goals before the final whistle" label="Getting back to sport" credit={at === 3 || at === 4 ? moveCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A track from the operation to a year, with gates that open when goals are reached rather than on a date">
      {at === 0 && <><Track ticks={ticks} reach={284} /><W x={160} y={48} size={18} serif fill={INK}>Up to a year</W><W x={160} y={70} size={10}>to play sport after surgery</W><W x={160} y={100} size={10}>Earliest return: about 6 months</W></>}
      {at === 1 && <><path d="M20 150 H300" stroke={LINE} strokeWidth="8" strokeLinecap="round" />{[80, 160, 240].map(gx => <g key={gx}><path d={`M${gx - 18} 150 V96 M${gx + 18} 150 V96 M${gx - 18} 108 H${gx + 18}`} stroke={INK} strokeWidth="4" strokeLinecap="round" /><Tick x={gx} y={128} /><W x={gx} y={176} size={10}>A goal</W></g>)}
        <Lines x={160} y={40} lines={["Your physio says when", "you are capable"]} /></>}
      {at === 2 && <><Cal x={76} y={78} w={74} lit /><W x={76} y={140} size={15} serif fill={INK}>8 weeks</W><Lines x={238} y={40} lines={["After a sprain:", "no running for up", "to 8 weeks"]} /><Lines x={238} y={118} lines={["Sport once less sore,", "with good movement"]} /></>}
      {at === 3 && <><Stopwatch x={76} y={88} r={42} text="10 to 15" size={14} /><W x={76} y={150} size={10}>minutes</W><List x={166} y={48} gap={26} lines={["Raise heart rate", "Dynamic stretches", "Strength, balance", "Moves for your sport"]} /></>}
      {at === 4 && <><path d="M16 170 H148" stroke={LINE} strokeWidth="3" strokeLinecap="round" />{[0, 1, 2, 3, 4, 5].map(index => <rect key={index} x={20 + index * 21} y={170 - 40 * Math.pow(1.1, index)} width="15" height={40 * Math.pow(1.1, index)} rx="3" fill={index === 5 ? INK : TINT} stroke={INK} strokeWidth="2" />)}
        <Lines x={238} y={44} lines={["Run 10 per cent more", "a week, or less"]} /><Box x={238} y={98} w={150} text="A rest day each week" lit size={10} /><Lines x={238} y={140} lines={["2 resistance sessions", "a week"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AclStairsKeys(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Good leg leads up, sore leg leads down", "Clear floors, things within reach", "Drive only once your team says so", "Usually back at work at 4 to 6 weeks", "Agree a timetable with your employer"];
  const bars: [string, number][] = [["Desk job: about 2 to 3 weeks", 3], ["Usually: about 4 to 6 weeks", 6], ["Heavy or twisting: up to 12 to 16 weeks", 16]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Daily life" title="Stairs, car keys and the office" label="Work, stairs and driving" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A staircase with arrows for which leg leads, the car pedals, and bars for time off work">
      {at === 0 && <><Stairs x={14} y={176} n={4} w={26} h={30} /><path d="M20 130 L132 22" stroke={SOFT} strokeWidth="3" strokeLinecap="round" /><Arrow d="M34 150 L112 74" head="M102 75 L112 74 L111 84" />
        <Box x={238} y={44} w={150} text="Up: good leg first" lit /><Box x={238} y={88} w={150} text="Down: sore leg first" lit /><W x={238} y={126} size={10}>Use a handrail</W><W x={238} y={152} size={10}>Crutches: stop when told</W></>}
      {at === 1 && <><House x={80} y={150} w={96} /><rect x="44" y="140" width="40" height="8" rx="3" fill={TINT} stroke={INK} strokeWidth="1.5" /><Cross x={64} y={144} s={9} />
        <List x={166} y={44} gap={26} lines={["Clear the floors", "No loose rugs, cables", "Things within reach", "Meals in the freezer"]} /><W x={238} y={162} size={10}>Avoid long standing</W></>}
      {at === 2 && <><Pedals press /><Box x={238} y={36} w={160} text="When your team says" lit size={10} /><List x={166} y={70} gap={22} lines={["Off crutches", "Sitting comfortably", "Emergency stop"]} /><Box x={238} y={156} w={150} text="Tell your insurer" size={10} /></>}
      {at === 3 && <>{bars.map(([label, weeks], index) => <g key={label}><W x={20} y={42 + index * 46} size={10} anchor="start">{label}</W><rect x="20" y={50 + index * 46} width={weeks * 17} height="14" rx="4" fill={index === 1 ? INK : TINT} stroke={INK} strokeWidth="2" /></g>)}
        <W x={160} y={182} size={10}>Ask about a phased return</W></>}
      {at === 4 && <><Person x={40} y={120} scale={1.3} /><Person x={112} y={120} scale={1.3} /><Bubble x={46} y={36} w={60} /><Lines x={238} y={44} lines={["No need to be", "symptom free"]} /><Box x={238} y={98} w={150} text="Agree a timetable" lit /><Lines x={238} y={140} lines={["Access to Work can", "help with equipment"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AclTrustSteps(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["A knee can feel unstable on stairs", "A little more every day or few days", "Heel down first; avoid a limp", "Feeling low? Talk to someone"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Confidence" title="Learning to trust the knee" label="Confidence in the knee" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A knee with wobble arrows, small rising steps of confidence, heel-first footprints and two people talking">
      {at === 0 && <><KneeFront x={76} y={16} scale={0.96} /><Arrow d="M22 80 C12 98 12 118 22 136" head="M14 130 L22 136 L26 128" /><Arrow d="M132 80 C142 98 142 118 132 136" head="M140 130 L132 136 L128 128" />
        <Lines x={238} y={44} lines={["Can feel unstable,", "especially on stairs"]} /><Box x={238} y={98} w={150} text="Physio can help" lit /><Lines x={238} y={140} lines={["Keeps giving way?", "Often a reconstruction"]} /></>}
      {at === 1 && <><path d="M16 170 H148" stroke={LINE} strokeWidth="3" strokeLinecap="round" />{Array.from({ length: 8 }, (_, index) => <rect key={index} x={18 + index * 16} y={162 - index * 14} width="12" height={8 + index * 14} rx="3" fill={index === 7 ? INK : TINT} stroke={INK} strokeWidth="1.5" />)}
        <Lines x={238} y={44} lines={["Slow at first, then", "a little more each day"]} /><Box x={238} y={98} w={160} text="No need to be pain free" lit size={10} /><Lines x={238} y={140} lines={["Within acceptable", "pain limits"]} /></>}
      {at === 2 && <>{[[36, 166, -8], [66, 136, 8], [92, 104, -8], [122, 74, 8]].map(([fx, fy, rot]) => <g key={fx} transform={`rotate(${rot} ${fx} ${fy})`}><ellipse cx={fx} cy={fy} rx="9" ry="16" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={fx} cy={fy + 9} r="5" fill={GOLD} /></g>)}
        <List x={166} y={48} gap={28} lines={["Heel down first", "Avoid a limp", "Not on a bent knee", "Crutches if needed"]} /></>}
      {at === 3 && <><Person x={40} y={130} scale={1.3} /><Person x={112} y={130} scale={1.3} /><Bubble x={46} y={44} w={60} /><Lines x={238} y={40} lines={["Low or anxious?", "Talk to someone"]} />
        <List x={168} y={92} gap={24} lines={["A friend or relative", "A partner", "A doctor"]} /><W x={238} y={176} size={10}>Counselling: 6 to 12 sessions</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AclLaterRoad(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["A past injury raises arthritis risk", "Arthritis does not always get worse", "Most find daily life improves", "150 minutes a week, plus strength"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Later years" title="Looking after the knee for life" label="The knee in later years" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A knee with thinner cartilage, a road that forks, a knee with a graft and a week of activity">
      {at === 0 && <><Knee x={76} y={100} scale={0.8} worn /><Lines x={238} y={44} lines={["A past injury is one", "risk for arthritis"]} /><Lines x={238} y={100} lines={["Especially if used", "hard before healing"]} /></>}
      {at === 1 && <><path d="M80 186 V124 M80 124 C80 94 48 72 36 30 M80 124 C80 94 112 72 124 30" fill="none" stroke={LINE} strokeWidth="12" strokeLinecap="round" /><path d="M80 124 C80 94 112 72 124 30" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
        <Lines x={238} y={44} lines={["Knee pain is most", "often not arthritis"]} /><Lines x={238} y={100} lines={["Arthritis does not", "always get worse"]} /><Lines x={238} y={152} lines={["It can sometimes", "slowly improve"]} /></>}
      {at === 2 && <><KneeFront x={76} y={16} scale={0.96} graft /><Box x={238} y={44} w={150} text="Daily life improves" lit size={10} /><W x={238} y={76} size={10}>for most people</W><List x={166} y={112} gap={26} lines={["Some: pain, stiffness", "Torn graft: more surgery"]} /></>}
      {at === 3 && <><W x={80} y={52} size={20} serif fill={INK}>150 minutes</W><W x={80} y={74} size={10}>a week, moderate</W><Week x={14} y={96} step={19} lit={[0, 2, 4]} /><W x={80} y={146} size={10}>such as fast walking</W>
        <List x={166} y={48} gap={28} lines={["Strength on 2 days", "Sitting leg raises", "Sit to stands", "A little weight off"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Torn meniscus =========================================================================================

function MenTwoCushions(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Two cushions sit between the bones", "They spread weight across the knee", "Torn cartilage usually means meniscus", "A tear can be like a moving flap"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Two cushions inside every knee" label="The meniscus" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A knee from the front with two cushions between the bones, and the top of the shinbone seen from above with two C-shaped menisci">
      {(at === 0 || at === 2) && <KneeFront x={78} y={16} scale={0.98} menisci={at === 0} ends={at === 2} />}
      {(at === 1 || at === 3) && <><MenTop x={80} y={96} lit={at === 1} tear={at === 3} /><W x={42} y={158} size={10}>Inner</W><W x={118} y={158} size={10}>Outer</W></>}
      {at === 0 && <><Lines x={238} y={40} lines={["Thighbone, shinbone", "and kneecap meet"]} /><Box x={238} y={96} w={150} text="Two menisci" lit /><Lines x={238} y={134} lines={["Shock absorbers", "between the bones"]} /></>}
      {at === 1 && <List x={166} y={48} gap={28} lines={["Cushions the joint", "Spreads the weight", "Smooth, stable moves", "Crescent shaped"]} />}
      {at === 2 && <><Lines x={238} y={40} lines={["Articular cartilage", "covers the bone ends"]} /><Box x={238} y={96} w={150} text="Torn cartilage?" lit /><Lines x={238} y={132} lines={["Usually a torn", "meniscus"]} /></>}
      {at === 3 && <><Ring x={36} y={96} r={18} still={still} /><Lines x={238} y={40} lines={["A flap can move and", "get wedged"]} /><Box x={238} y={96} w={150} text="Often from an injury" size={10} lit /><Lines x={238} y={136} lines={["Many tears cause", "no pain or limits"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MenLateSwelling(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Pain, stiffness and a clicking knee", "Often pain at one point on the side", "Swelling may start hours or days later", "Locks or gives way: NHS 111 now", "Many tears cause no symptoms"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Pain, late swelling, a knee that catches" label="What it feels like" credit={at === 3 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A knee with a sore point at the side of the joint, a clock for swelling that comes later, and a padlock for locking">
      {(at === 0 || at === 1) && <KneeFront x={76} y={16} scale={0.96} menisci={at === 0} />}
      {at === 0 && <List x={164} y={44} gap={26} lines={["Pain or tenderness", "Stiffness, swelling", "Hard to bend", "May give way", "Clicking, crunching"]} />}
      {at === 1 && <><Ring x={40} y={112} r={13} still={still} /><Lines x={238} y={40} lines={["At the sides, along", "the joint line"]} /><List x={166} y={94} gap={24} lines={["Stairs, squatting", "Turning", "A deep, toothache pain"]} /></>}
      {at === 2 && <><Clock x={76} y={74} r={38} hand={3.4} /><W x={76} y={140} size={15} serif fill={INK}>Hours or days</W><Box x={238} y={40} w={150} text="Swelling comes later" lit size={10} />
        <Lines x={238} y={76} lines={["Builds over the", "day or night"]} /><Lines x={238} y={130} lines={["Swollen at once after", "a twist? Phone 111"]} /></>}
      {at === 3 && <><Padlock x={76} y={96} /><Box x={238} y={40} w={150} text="Get advice from 111 now" lit size={10} /><List x={166} y={76} gap={24} lines={["Locks", "Gives way", "Clicks painfully"]} /><W x={238} y={164} size={10}>Painless clicking: normal</W></>}
      {at === 4 && <><MenTop x={80} y={96} tear /><Tick x={136} y={44} /><Lines x={238} y={56} lines={["Tears are common in", "knees with no pain"]} /><Box x={238} y={110} w={150} text="Often no symptoms" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MenTwistAndWear(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Usually a twist on a bent knee", "Acute under 50, wear and tear over 50", "Sport injuries: often aged 15 to 40", "You do not have to be sporty"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Younger knees twist, older knees wear" label="How it happens" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A figure twisting on a bent knee, and a line of ages split at 50">
      {at === 0 && <><g strokeLinecap="round" strokeLinejoin="round" fill="none"><circle cx="80" cy="34" r="11" fill={INK} stroke="none" /><path d="M80 46 L76 94" stroke={INK} strokeWidth="9" /><path d="M78 56 L54 76 M78 56 L104 70" stroke={INK} strokeWidth="5" />
        <path d="M76 94 L56 128 L70 166 M76 94 L104 126 L118 162" stroke={INK} strokeWidth="7" /><path d="M40 166 H136" stroke={LINE} strokeWidth="4" /></g>
        <Arrow d="M36 126 C40 112 72 112 76 126" head="M68 122 L76 126 L76 117" /><Lines x={238} y={44} lines={["A twist on a bent", "knee, bearing weight"]} /><Box x={238} y={98} w={150} text="Often in sport" lit /><Lines x={238} y={140} lines={["Or a smaller twist,", "standing up"]} /></>}
      {at === 1 && <><path d="M20 112 H300" stroke={LINE} strokeWidth="10" strokeLinecap="round" /><path d="M20 112 H160" stroke={INK} strokeWidth="10" strokeLinecap="round" /><path d="M160 92 V132" stroke={GOLD} strokeWidth="4" strokeLinecap="round" /><W x={160} y={152} size={12} serif fill={INK}>50</W>
        <Box x={88} y={60} w={130} text="Under 50" lit /><W x={88} y={140} size={10}>Acute: a twist</W><Box x={232} y={60} w={130} text="Over 50" /><W x={232} y={140} size={10}>Wear and tear</W></>}
      {at === 2 && <><path d="M24 120 H296" stroke={LINE} strokeWidth="10" strokeLinecap="round" /><path d="M75 120 H126" stroke={INK} strokeWidth="10" strokeLinecap="round" />
        {[0, 20, 40, 60, 80].map(age => <g key={age}><path d={`M${24 + age * 3.4} 128 V136`} stroke={INK} strokeWidth="2" /><W x={24 + age * 3.4} y={152} size={10}>{String(age)}</W></g>)}
        <W x={160} y={52} size={18} serif fill={INK}>15 to 40</W><W x={160} y={74} size={10}>more often, as a sporting injury</W><W x={160} y={180} size={10}>Or a twist in a slip or trip</W></>}
      {at === 3 && <><Person x={64} y={130} scale={1.6} /><path d="M98 168 V96 C98 88 108 88 108 96" stroke={TEXT} strokeWidth="4" fill="none" strokeLinecap="round" /><Lines x={238} y={40} lines={["Normal age changes", "can flare it now", "and again"]} />
        <Box x={238} y={110} w={150} text="Not just the sporty" lit /><W x={238} y={146} size={10}>A very common knee injury</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MenStoryFirst(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Your story tells the team the most", "Tender at the sides of the joint", "Many people do not need an MRI", "Scans can find tears causing no issue", "Results usually in 1 to 2 weeks"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diagnosis" title="Your story first, a scan second" label="Diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person telling their story, a knee with sore points at the sides, and a faded MRI scanner">
      {at === 0 && <><Person x={50} y={120} scale={1.5} /><Bubble x={80} y={40} /><Lines x={238} y={40} lines={["A knee team listens", "carefully first"]} /><Box x={238} y={96} w={150} text="Your symptoms" lit /><Lines x={238} y={132} lines={["tell them more than", "pushing the knee about"]} /></>}
      {at === 1 && <><KneeFront x={76} y={16} scale={0.96} /><Ring x={40} y={112} r={13} still={still} /><Ring x={112} y={112} r={13} still={still} />
        <Box x={238} y={44} w={150} text="Joint line tenderness" lit size={10} /><Lines x={238} y={80} lines={["Common with a", "meniscal injury"]} /><Lines x={238} y={132} lines={["Questions, then an", "examination"]} /></>}
      {at === 2 && <><Mri x={84} y={100} dim /><Box x={238} y={44} w={150} text="Not necessarily" lit /><Lines x={238} y={80} lines={["Many do not need", "an MRI scan"]} /><Lines x={238} y={132} lines={["An X-ray or MRI", "is sometimes offered"]} /></>}
      {at === 3 && <><MenTop x={80} y={58} scale={0.56} tear /><MenTop x={80} y={136} scale={0.56} tear /><Tick x={136} y={58} /><Tick x={136} y={136} />
        <Lines x={238} y={40} lines={["Tears show up in", "knees with no pain"]} /><Box x={238} y={96} w={150} text="Findings can mislead" lit size={10} /><Lines x={238} y={132} lines={["and lead to the", "wrong treatment"]} /></>}
      {at === 4 && <><Mri x={84} y={100} /><List x={166} y={44} gap={28} lines={["15 minutes to 1 hour", "Loud: ear plugs", "Results: 1 to 2 weeks", "Anxious? Tell them"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MenIcePillow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Rest it, raise it, keep it moving", "Wrapped ice, not heat, on a new injury", "A support by day; nothing heavy", "Regular painkillers at the right dose", "After 48 hours, use your leg more"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Self-care" title="Rest, ice, raise, support" label="The first few days" credit={at === 3 ? medsCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A leg resting straight on a pillow with a wrapped ice pack on the knee and a knee support">
      {at !== 4 && <><Pillow x={90} y={136} w={60} h={22} /><path d="M12 160 L146 126" stroke={INK} strokeWidth="22" strokeLinecap="round" /><path d="M12 160 L146 126" stroke={WHITE} strokeWidth="17" strokeLinecap="round" /><path d="M146 126 L150 104" stroke={INK} strokeWidth="9" strokeLinecap="round" /></>}
      {at === 0 && <><Clock x={44} y={60} r={24} hand={0.5} /><Lines x={238} y={40} lines={["Rest it; keep it", "raised on a pillow"]} /><Box x={238} y={94} w={150} text="Move it every hour" lit /><Lines x={238} y={130} lines={["10 to 20 seconds,", "while awake"]} /></>}
      {at === 1 && <><ColdPack x={76} y={112} /><Bottle x={34} y={52} /><Cross x={34} y={52} s={14} /><Box x={238} y={40} w={150} text="Up to 20 minutes" lit /><W x={238} y={72} size={10}>every 2 to 3 hours</W><Lines x={238} y={112} lines={["No heat on a new", "injury"]} /></>}
      {at === 2 && <><rect x="58" y="126" width="36" height="28" rx="6" fill={TINT} stroke={INK} strokeWidth="2.5" transform="rotate(-14 76 140)" /><List x={166} y={46} gap={28} lines={["Bandage or support", "Off when you sleep", "No alcohol, no massage", "Carry nothing heavy"]} /></>}
      {at === 3 && <><g transform="translate(70 66) scale(2)"><Pill x={0} y={0} /></g><Lines x={238} y={40} lines={["Paracetamol, or", "ibuprofen gel or tablets"]} /><Box x={238} y={94} w={160} text="At the recommended dose" lit size={10} /><Lines x={238} y={128} lines={["NHS inform: anti-", "inflammatories after", "48 hours"]} /></>}
      {at === 4 && <><Stairs x={14} y={176} n={4} w={26} h={30} /><path d="M20 130 L132 22" stroke={SOFT} strokeWidth="3" strokeLinecap="round" /><Box x={238} y={40} w={150} text="Use your leg more" lit /><Lines x={238} y={80} lines={["Up: good leg first", "Down: sore leg first"]} /><W x={238} y={128} size={10}>A handrail, if there is one</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MenHeelSlide(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Keep it moving, keep the thigh strong", "Get advice before a new exercise plan", "Heel slides and knee presses in bed", "Strength work as swelling settles", "Pain 0 to 5; build up to 2 sets of 15"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercises" title="Movement first, then strength" label="Exercises" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A figure lying in bed sliding one heel up, a figure standing up from a chair, and a pain scale from 0 to 10">
      {at === 0 && <><Muscle x={76} y={28} h={100} lit /><circle cx="76" cy="152" r="11" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={76} y={182} size={10}>Thigh muscle</W>
        <Lines x={238} y={40} lines={["Movement and strength", "support healing"]} /><Box x={238} y={94} w={160} text="Keep the thigh strong" lit size={10} /><Lines x={238} y={130} lines={["Or kneecap pain", "can follow"]} /></>}
      {at === 1 && <><Person x={52} y={120} scale={1.5} /><rect x="88" y="58" width="44" height="58" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[74, 88, 102].map(ly => <path key={ly} d={`M96 ${ly} H124`} stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" />)}
        <Box x={238} y={40} w={150} text="Ask a physio first" lit /><Lines x={238} y={76} lines={["before a new", "exercise plan"]} /><Lines x={238} y={130} lines={["Worse pain from it?", "Get urgent advice"]} /></>}
      {at === 2 && <><LyingBend /><Lines x={238} y={44} lines={["Slide the heel up,", "hold 2 seconds"]} /><Lines x={238} y={100} lines={["Press the knee down,", "hold 10 seconds"]} /></>}
      {at === 3 && <><g strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M24 92 V164 M24 130 H58 V164" stroke={TEXT} strokeWidth="4" /><path d="M14 164 H146" stroke={LINE} strokeWidth="3" /></g><Figure x={86} y={110} stride={7} hand={[110, 92]} /><Arrow d="M118 150 V112" head="M112 119 L118 112 L124 119" />
        <List x={166} y={46} gap={28} lines={["Sit to stand", "Step up and down", "Partial squat", "Cycling or water"]} /></>}
      {at === 4 && <><PainScale x={41} y={40} upTo={5} /><W x={160} y={100} size={10.5}>Keep pain within 0 to 5</W><Box x={160} y={132} w={170} text="Start with 2 to 3" lit /><W x={160} y={168} size={10}>Build up to 2 sets of 15</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MenWideNarrowPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Most tears improve without surgery", "For a few: repair or remove the tear", "Small cuts and a tiny camera", "It may not help; there are risks", "Washouts are not for osteoarthritis"];
  const fork = at === 0 || at === 1 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Surgery" title="Keyhole surgery helps only a few" label="Keyhole surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path forking into a wide road marked exercise and a narrow one marked surgery, and a knee with a thin camera inside">
      {fork && <><path d="M80 176 C80 136 50 110 40 46" fill="none" stroke={at === 1 ? LINE : INK} strokeWidth="24" strokeLinecap="round" /><path d="M80 176 C80 136 110 110 122 46" fill="none" stroke={at === 1 ? GOLD : LINE} strokeWidth="7" strokeLinecap="round" />
        <W x={40} y={32} size={10}>Exercise</W><W x={122} y={32} size={10}>Surgery</W></>}
      {at === 0 && <><Lines x={238} y={44} lines={["Most improve without", "an operation"]} /><Box x={238} y={98} w={160} text="Often as well, or better" lit size={10} /></>}
      {at === 1 && <><Lines x={238} y={44} lines={["Severe damage, or", "lasting symptoms"]} /><Box x={238} y={98} w={150} text="Repair or remove" lit /><Lines x={238} y={140} lines={["Ligaments may be", "repaired too"]} /></>}
      {(at === 2 || at === 4) && <KneeFront x={76} y={16} scale={0.96} camera={at === 2} worn={at === 4} />}
      {at === 2 && <><Box x={238} y={44} w={150} text="Cuts 2mm to 3mm" lit /><Lines x={238} y={80} lines={["30 minutes to", "3 hours"]} /><W x={238} y={128} size={10}>Usually home the same day</W></>}
      {at === 3 && <><List x={166} y={46} gap={26} lines={["May not help", "Bleeding", "Infection", "Pain, the anaesthetic"]} /><Lines x={238} y={164} lines={["Doing nothing is", "unlikely to harm"]} /></>}
      {at === 4 && <><Lines x={238} y={44} lines={["Keyhole washouts:", "not for osteoarthritis"]} /><Lines x={238} y={100} lines={["Unless clear problems,", "such as locking"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MenDayStrip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Home the same day, with a lift", "Small scars, covered for 48 hours", "Short walks from about day 3", "Office work often at 10 to 14 days", "Fever or worse pain: 111 or hospital"];
  const ticks: [number, string][] = [[26, "Same day"], [90, "Day 3"], [154, "Week 1"], [218, "Week 2"], [284, "Week 6"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="After surgery" title="Home the same day, walking by day three" label="Recovery" credit={at === 4 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A strip of days from the operation to six weeks, with short walks, small scars and a phone for help">
      {at !== 4 && <Track ticks={ticks} reach={[26, 218, 154, 218][at]} />}
      {at === 0 && <><W x={160} y={40} size={10.5}>Someone takes you home</W><W x={160} y={62} size={10}>Sore, swollen and tired at first</W><Box x={160} y={96} w={210} text="Get up, get dressed, move about" lit size={10} /></>}
      {at === 1 && <><circle cx="56" cy="66" r="24" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[[-30, 4], [30, 6], [-14, 30], [16, 30]].map(([dx, dy]) => <path key={`${dx}${dy}`} d={`M${56 + dx - 5} ${66 + dy} H${56 + dx + 5}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />)}
        <List x={110} y={42} gap={22} lines={["2 to 4 small scars", "Covered for 48 hours", "Stitches out: 7 to 14 days"]} /></>}
      {at === 2 && <><Walker x={56} y={64} /><Lines x={200} y={36} lines={["Day 3: walks of", "5 to 10 minutes"]} /><Lines x={200} y={80} lines={["Week 1: walking, swim,", "cycle, light exercise"]} /></>}
      {at === 3 && <List x={40} y={40} gap={24} lines={["Office: 10 to 14 days, on average", "Physical job: up to 6 weeks", "Driving: at least 2 weeks"]} />}
      {at === 4 && <><Phone x={68} y={96} w={46} h={80} text="111" /><Box x={236} y={36} w={160} text="NHS 111 or the hospital" lit size={10} /><List x={160} y={70} gap={22} lines={["High temperature", "Worse joint pain", "Smelly liquid from cuts", "Severe swelling, redness", "Numbness, bleeding"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MenBikePoolPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Moving is part of recovery", "Cycling and swimming are low impact", "A brisk 10-minute walk each day", "Keep your routine; lift light for now", "150 minutes a week, strength on 2 days"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Staying active" title="Keep moving while it settles" label="Staying active" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bicycle, a swimming pool and a walking path">
      {at === 0 && <><path d="M18 154 H146" stroke={LINE} strokeWidth="4" strokeLinecap="round" /><Walker x={80} y={112} /><Lines x={238} y={40} lines={["Too much rest can", "slow recovery"]} /><Box x={238} y={94} w={160} text="After 48 hours: use it" lit size={10} /><Lines x={238} y={130} lines={["No need to be", "pain free"]} /></>}
      {at === 1 && <><Bike x={76} y={56} /><Waves x={22} y={136} w={110} /><circle cx="76" cy="128" r="8" fill={INK} />
        <Lines x={238} y={40} lines={["Cycling, swimming:", "low impact"]} /><Lines x={238} y={96} lines={["Water supports", "your joints"]} /><W x={238} y={144} size={10}>Pool classes may help</W></>}
      {at === 2 && <><path d="M14 160 C50 150 90 150 146 120" stroke={LINE} strokeWidth="14" fill="none" strokeLinecap="round" /><Walker x={70} y={104} />
        <Box x={238} y={40} w={160} text="A brisk 10-minute walk" lit size={10} /><W x={238} y={72} size={10}>each day</W><Lines x={238} y={112} lines={["Add distance", "gradually"]} /></>}
      {at === 3 && <><Desk x={22} y={110} w={110} /><Lines x={238} y={40} lines={["Keep your routine;", "work helps recovery"]} /><Box x={238} y={94} w={150} text="No heavy lifting yet" lit size={10} /><Lines x={238} y={130} lines={["Lighter duties or", "fewer hours a while"]} /></>}
      {at === 4 && <><W x={160} y={56} size={20} serif fill={INK}>150 minutes a week</W><W x={160} y={78} size={10}>of moderate activity</W><Week x={76} y={102} lit={[1, 4]} /><W x={160} y={160} size={10}>Strengthening on at least 2 days</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MenBikeToBall(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Small milestones, not a rush back", "Healing can take 3 to 6 months or more", "Bike, trainer, treadmill, then sport", "Graded plans, shaped with your physio", "Warm up 10 to 15 minutes first"];
  const steps: [string, string][] = [["Bike", "2 weeks"], ["Cross trainer", "4 weeks"], ["Treadmill", "6 weeks"], ["Sport", "8 weeks"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Back to sport" title="Small milestones back to the pitch" label="Getting back to sport" credit={at === 4 ? moveCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Steps rising from an exercise bike at two weeks to sport at eight weeks">
      {at === 0 && <><Stairs x={14} y={176} n={5} w={22} h={24} />{[0, 1, 2, 3, 4].map(index => <g key={index}><path d={`M${44 + index * 22} ${152 - index * 24} V${130 - index * 24}`} stroke={INK} strokeWidth="2" /><path d={`M${44 + index * 22} ${130 - index * 24} l12 4 l-12 4 Z`} fill={GOLD} /></g>)}
        <Lines x={238} y={40} lines={["Small milestones,", "built on one by one"]} /><Box x={238} y={94} w={160} text="No running with pain" lit size={10} /><Lines x={238} y={130} lines={["No twisting sports", "while it is sore"]} /></>}
      {at === 1 && <><Cal x={76} y={78} w={74} lit /><W x={76} y={140} size={15} serif fill={INK}>3 to 6 months</W><Lines x={238} y={44} lines={["The meniscus has a", "poor blood supply"]} /><Lines x={238} y={100} lines={["Strong muscles give", "it more chance"]} /></>}
      {at === 2 && <><W x={160} y={30} size={10}>Impact sports: avoid for up to 6 weeks</W>{steps.map(([what, when], index) => <g key={what}><rect x={22 + index * 72} y={150 - (index + 1) * 20} width="56" height={(index + 1) * 20} rx="4" fill={index === 3 ? INK : TINT} stroke={INK} strokeWidth="2" />
        <W x={50 + index * 72} y={142 - (index + 1) * 20} size={10}>{what}</W><W x={50 + index * 72} y={170} size={10}>{when}</W></g>)}</>}
      {at === 3 && <><Box x={80} y={56} w={124} text="Not set in stone" lit size={10} /><Lines x={80} y={96} lines={["Talk them through", "with your physio"]} /><List x={176} y={48} gap={28} lines={["Rugby", "Netball", "Football", "Running"]} /></>}
      {at === 4 && <><Stopwatch x={76} y={88} r={42} text="10 to 15" size={14} /><W x={76} y={150} size={10}>minutes</W><Lines x={238} y={40} lines={["Strength and balance", "in the warm-up"]} /><Box x={238} y={94} w={160} text="Same run 3 or 4 times" lit size={10} /><W x={238} y={128} size={10}>before going further</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MenLockedFlap(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["A torn flap can get wedged", "Knee locks or gives way: NHS 111 now", "Odd angle or no feeling: go to A&E", "An arthroscopy may check the cause"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Locking" title="A locked knee needs advice now" label="If the knee locks" credit={at === 1 || at === 2 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The top of the shinbone with a torn flap of meniscus, a phone for NHS 111 and a knee with a camera inside">
      {at === 0 && <><MenTop x={80} y={96} tear /><Ring x={36} y={96} r={18} still={still} /><Lines x={238} y={44} lines={["Locking: a symptom", "of a torn meniscus"]} /><Lines x={238} y={100} lines={["A torn flap can get", "wedged between bones"]} /></>}
      {at === 1 && <><Phone x={72} y={96} w={46} h={80} text="111" /><Box x={236} y={40} w={150} text="Get advice from 111 now" lit size={10} /><List x={164} y={76} gap={24} lines={["Locks", "Gives way", "Clicks painfully"]} /><Lines x={236} y={156} lines={["Or your GP; 111 if", "the practice is closed"]} /></>}
      {at === 2 && <><KneeFront x={70} y={16} scale={0.96} /><Ring x={70} y={110} r={30} still={still} /><Box x={236} y={34} w={150} text="Urgent GP or NHS 111" size={10} /><List x={164} y={60} gap={20} lines={["Cannot bend, straighten", "No weight on it", "Very bad pain"]} />
        <Box x={236} y={126} w={150} text="Go to A&E" lit /><W x={236} y={152} size={10}>Odd angle, or no feeling</W><Box x={236} y={174} w={150} text="Do not drive to A&E" size={10} /></>}
      {at === 3 && <><KneeFront x={76} y={16} scale={0.96} camera /><Lines x={238} y={44} lines={["An arthroscopy can", "check the cause"]} /><Lines x={238} y={100} lines={["Lasting symptoms? An", "operation may be advised"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MenThreeRoads(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Heal, come and go, or slowly worsen", "Most knee symptoms improve with time", "Past injury: one arthritis factor", "Keep up exercises, even when better", "A little weight off can help a lot"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Later years" title="Strong thighs for the knee's later years" label="The knee in later years" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three roads from one point: one rising, one going up and down, one gently falling, beside a knee and a week of activity">
      {at === 0 && <><g fill="none" strokeLinecap="round" stroke={INK} strokeWidth="5"><path d="M20 176 C60 150 100 90 130 48" /><path d="M20 176 C50 150 70 120 90 116 C104 112 112 124 130 108" /><path d="M20 176 C70 172 100 170 130 172" /></g>
        <W x={140} y={52} size={10} anchor="start">Heals over several months</W><W x={140} y={112} size={10} anchor="start">Comes and goes</W><W x={140} y={176} size={10} anchor="start">Gradually gets worse</W></>}
      {at === 1 && <><path d="M18 154 H146" stroke={LINE} strokeWidth="4" strokeLinecap="round" /><Walker x={80} y={112} /><Lines x={238} y={40} lines={["Most knee symptoms", "improve with time"]} /><Lines x={238} y={96} lines={["Many find daily life", "is not affected"]} /><Lines x={238} y={148} lines={["Age can bring the", "odd flare-up"]} /></>}
      {at === 2 && <><Knee x={76} y={100} scale={0.8} worn /><Lines x={238} y={40} lines={["A past injury can", "play a part"]} /><Box x={238} y={94} w={150} text="Osteoarthritis" lit /><Lines x={238} y={130} lines={["Overusing a joint", "before it heals"]} /></>}
      {at === 3 && <><W x={80} y={52} size={20} serif fill={INK}>150 minutes</W><W x={80} y={74} size={10}>a week, moderate</W><Week x={14} y={96} step={19} lit={[0, 2, 4]} />
        <Lines x={238} y={40} lines={["Strength exercises", "on 2 or more days"]} /><Box x={238} y={94} w={150} text="Keep up exercises" lit /><Lines x={238} y={130} lines={["even when", "symptoms improve"]} /></>}
      {at === 4 && <><Scales x={76} y={120} /><Lines x={238} y={40} lines={["Extra weight makes", "joint pain likelier"]} /><Box x={238} y={94} w={160} text="A little off can help" lit size={10} /><Lines x={238} y={130} lines={["Balanced diet,", "regular exercise"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function InjuryPieceView({ piece, ...props }: { piece: InjuryPiece } & PieceProps) {
  switch (piece) {
    case "spr-ligament-muscle": return <SprLigamentMuscle {...props} />;
    case "spr-bruise-clock": return <SprBruiseClock {...props} />;
    case "spr-two-signposts": return <SprTwoSignposts {...props} />;
    case "spr-eight-week-track": return <SprEightWeekTrack {...props} />;
    case "spr-price-tiles": return <SprPriceTiles {...props} />;
    case "spr-pharmacy-counter": return <SprPharmacyCounter {...props} />;
    case "spr-alphabet-foot": return <SprAlphabetFoot {...props} />;
    case "spr-route-map": return <SprRouteMap {...props} />;
    case "spr-pool-to-pitch": return <SprPoolToPitch {...props} />;
    case "spr-warm-up-watch": return <SprWarmUpWatch {...props} />;
    case "spr-one-leg-counter": return <SprOneLegCounter {...props} />;
    case "spr-boot-to-shoe": return <SprBootToShoe {...props} />;
    case "acl-four-ropes": return <AclFourRopes {...props} />;
    case "acl-pop-wobble": return <AclPopWobble {...props} />;
    case "acl-exam-to-mri": return <AclExamToMri {...props} />;
    case "acl-ae-or-111": return <AclAeOr111 {...props} />;
    case "acl-brace-ice-hour": return <AclBraceIceHour {...props} />;
    case "acl-strength-steps": return <AclStrengthSteps {...props} />;
    case "acl-graft-tunnel": return <AclGraftTunnel {...props} />;
    case "acl-months-road": return <AclMonthsRoad {...props} />;
    case "acl-goal-gates": return <AclGoalGates {...props} />;
    case "acl-stairs-keys": return <AclStairsKeys {...props} />;
    case "acl-trust-steps": return <AclTrustSteps {...props} />;
    case "acl-later-road": return <AclLaterRoad {...props} />;
    case "men-two-cushions": return <MenTwoCushions {...props} />;
    case "men-late-swelling": return <MenLateSwelling {...props} />;
    case "men-twist-and-wear": return <MenTwistAndWear {...props} />;
    case "men-story-first": return <MenStoryFirst {...props} />;
    case "men-ice-pillow": return <MenIcePillow {...props} />;
    case "men-heel-slide": return <MenHeelSlide {...props} />;
    case "men-wide-narrow-path": return <MenWideNarrowPath {...props} />;
    case "men-day-strip": return <MenDayStrip {...props} />;
    case "men-bike-pool-path": return <MenBikePoolPath {...props} />;
    case "men-bike-to-ball": return <MenBikeToBall {...props} />;
    case "men-locked-flap": return <MenLockedFlap {...props} />;
    case "men-three-roads": return <MenThreeRoads {...props} />;
    default: return null;
  }
}
