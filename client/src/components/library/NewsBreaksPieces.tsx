import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { BREAKS_PIECES, type BreaksPiece } from "@/content/breaks-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Broken wrist and Broken ankle pages' own pieces (content/breaks-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isBreaksPiece = (piece: NewsPiece): piece is BreaksPiece => (BREAKS_PIECES as readonly string[]).includes(piece);

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
/** A cross-section of bone: small holes when strong, larger ones when `weak`. */
const Honeycomb = ({ x, y, r, weak = false }: { x: number; y: number; r: number; weak?: boolean }) => {
  const holes: [number, number][] = [];
  for (let row = -3; row <= 3; row++) for (let col = -3; col <= 3; col++) {
    const hx = col * r * 0.27 + (row % 2 ? r * 0.135 : 0), hy = row * r * 0.24;
    if (Math.hypot(hx, hy) < r * 0.78) holes.push([hx, hy]);
  }
  return <g><circle cx={x} cy={y} r={r} fill={WHITE} stroke={INK} strokeWidth="3" />
    {holes.map(([hx, hy], index) => <circle key={index} cx={x + hx} cy={y + hy} r={r * (weak ? 0.088 : 0.04)} fill={TINT} stroke={SOFT} strokeWidth="1.5" />)}</g>;
};
/** A cold pack wrapped in a towel, centred on (x, y). */
const ColdPack = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 28} y={y - 18} width="56" height="36" rx="8" fill={TINT} stroke={INK} strokeWidth="2.5" />
    {[[-14, -6], [0, 4], [12, -4], [-8, 8], [14, 8]].map(([dx, dy]) => <rect key={`${dx}${dy}`} x={x + dx - 3} y={y + dy - 3} width="6" height="6" rx="1" fill={WHITE} stroke={SOFT} strokeWidth="1" />)}
    <path d={`M${x - 32} ${y - 8} H${x + 32} M${x - 32} ${y + 10} H${x + 32}`} stroke={INK} strokeWidth="2" strokeDasharray="4 3" /></g>;
/** A hot water bottle centred on (x, y). */
const Bottle = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 6} y={y - 30} width="12" height="12" rx="2" fill={INK} /><rect x={x - 20} y={y - 20} width="40" height="44" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    {[-8, 2, 12].map(dy => <path key={dy} d={`M${x - 12} ${y + dy} H${x + 12}`} stroke={SOFT} strokeWidth="2" />)}</g>;
/** A mobile phone centred on (x, y), with a number on its screen. */
const Phone = ({ x, y, w = 40, h = 70, text }: { x: number; y: number; w?: number; h?: number; text?: string }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - w / 2 + 4} y={y - h / 2 + 7} width={w - 8} height={h - 22} rx="2" fill={TINT} /><circle cx={x} cy={y + h / 2 - 7} r="3" fill={INK} />
    {text && <W x={x} y={y + 2} size={12} fill={INK}>{text}</W>}</g>;
/** A crescent moon. */
const Moon = ({ x, y }: { x: number; y: number }) => <path d={`M${x} ${y - 16} a16 16 0 1 0 18 21 a12 12 0 1 1 -18 -21 Z`} fill={GOLD} />;
/** A sun. */
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g><circle cx={x} cy={y} r={r} fill={GOLD} />{[0, 1, 2, 3, 4, 5, 6, 7].map(index => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 10) * Math.cos(a)} ${y + (r + 10) * Math.sin(a)}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}</g>;
/** A pillow, (x, y) its top left. */
const Pillow = ({ x, y, w, h = 18 }: { x: number; y: number; w: number; h?: number }) =>
  <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={TINT} stroke={INK} strokeWidth="2.5" />;
/** A simple stick figure: hips at (x, y), legs apart by `stride`; `armUp` raises one arm. */
const Figure = ({ x, y, stride = 9, armUp = false, hand }: { x: number; y: number; stride?: number; armUp?: boolean; hand?: [number, number] }) => {
  const [ax, ay] = hand ?? (armUp ? [x + 14, y - 84] : [x + 8, y - 12]);
  return <g strokeLinecap="round" strokeLinejoin="round" fill="none">
    <path d={`M${x} ${y} L${x - stride} ${y + 52} M${x} ${y} L${x + stride} ${y + 52}`} stroke={INK} strokeWidth="7" />
    <path d={`M${x} ${y} L${x} ${y - 44}`} stroke={INK} strokeWidth="9" />
    <path d={`M${x} ${y - 40} L${ax} ${ay}`} stroke={INK} strokeWidth="6" />
    <circle cx={x} cy={y - 60} r="11" fill={INK} stroke="none" />
  </g>;
};
/** A walking frame, side on, its feet at (x, y). */
const Frame = ({ x, y }: { x: number; y: number }) =>
  <path d={`M${x} ${y} V${y - 52} H${x + 30} V${y} M${x + 4} ${y - 28} H${x + 26}`} fill="none" stroke={TEXT} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />;
/** An elbow crutch, its tip at (x, y). */
const Crutch = ({ x, y, h = 90 }: { x: number; y: number; h?: number }) =>
  <g stroke={TEXT} strokeWidth="4" strokeLinecap="round" fill="none"><path d={`M${x} ${y} V${y - h}`} /><path d={`M${x} ${y - h + 30} H${x + 12}`} /><path d={`M${x - 6} ${y - h - 6} C${x - 6} ${y - h + 4} ${x + 8} ${y - h + 4} ${x + 8} ${y - h - 6}`} /><circle cx={x} cy={y} r="2" fill={TEXT} /></g>;
/** A walking stick, its tip at (x, y). */
const Stick = ({ x, y, h = 80 }: { x: number; y: number; h?: number }) =>
  <path d={`M${x} ${y} V${y - h + 8} C${x} ${y - h - 4} ${x + 14} ${y - h - 4} ${x + 14} ${y - h + 6}`} stroke={TEXT} strokeWidth="4" strokeLinecap="round" fill="none" />;
/** A bed seen from the side: the mattress top at y. */
const Bed = ({ x, y, w = 110 }: { x: number; y: number; w?: number }) =>
  <g><path d={`M${x + 4} ${y} V${y - 22} M${x + 4} ${y + 14} V${y + 24} M${x + w - 4} ${y + 14} V${y + 24}`} stroke={INK} strokeWidth="4" strokeLinecap="round" /><rect x={x} y={y} width={w} height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /></g>;
/** A dark X-ray frame. */
const XRay = ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => <rect x={x} y={y} width={w} height={h} rx="8" fill={TEXT} />;

/** A forearm and hand seen from above: the elbow at (x, y), the hand to the right (turn with `rotate`). The two forearm
 *  bones show inside; `crack` marks a break near the wrist (`healed` fades it); `cast`, `splint` and `wires` dress it;
 *  `tips` colours the fingers. */
const Forearm = ({ x, y, scale = 1, rotate = 0, crack = false, healed = false, cast = false, splint = false, wires = false, tips = false }: { x: number; y: number; scale?: number; rotate?: number; crack?: boolean; healed?: boolean; cast?: boolean; splint?: boolean; wires?: boolean; tips?: boolean }) =>
  <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} strokeLinejoin="round" strokeLinecap="round">
    <path d="M178 -12 L192 -34" stroke={INK} strokeWidth="13" /><path d="M178 -12 L192 -34" stroke={tips ? GOLD : WHITE} strokeWidth="8" />
    {[[-15, 34], [-6.5, 38], [2, 35], [10.5, 28]].map(([fy, len]) => <rect key={fy} x="190" y={fy} width={len + 2} height="7" rx="3.5" fill={tips ? GOLD : WHITE} stroke={INK} strokeWidth="2" />)}
    <path d="M0 -20 C50 -20 110 -16 152 -15 L152 15 C110 16 50 20 0 20 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
    <rect x="146" y="-17" width="50" height="34" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
    <path d="M12 -7 H146" stroke={SOFT} strokeWidth="9" /><path d="M12 -7 H146" stroke={WHITE} strokeWidth="4.5" />
    <path d="M12 8 H140" stroke={SOFT} strokeWidth="7" /><path d="M12 8 H140" stroke={WHITE} strokeWidth="3" />
    {crack && <path d="M124 -14 L130 -9 L126 -5 L132 0" fill="none" stroke={healed ? SOFT : GOLD} strokeWidth="3.5" strokeDasharray={healed ? "3 4" : undefined} />}
    {splint && <><rect x="60" y="13" width="134" height="9" rx="3" fill={SOFT} stroke={INK} strokeWidth="1.5" />{[92, 150].map(cx => <rect key={cx} x={cx - 4} y="-21" width="8" height="43" rx="2" fill="none" stroke={TEXT} strokeWidth="2" />)}</>}
    {cast && <><rect x="40" y="-23" width="158" height="46" rx="10" fill={TINT} stroke={INK} strokeWidth="2.5" />{[70, 100, 130, 160].map(cx => <path key={cx} d={`M${cx + 6} -21 L${cx - 6} 21`} stroke={SOFT} strokeWidth="1.5" />)}</>}
    {wires && <path d="M112 -26 L148 6 M150 -26 L114 6" stroke={GOLD} strokeWidth="3" />}
  </g>;

/** The ankle from the front: the tibia and fibula coming down to the talus and the foot. Top centre at (x, y), about
 *  166 tall. `crack` marks a break across the fibula at height `at`; `plate`, `ligament`, `frayed`, `lump`, `worn`
 *  and `swollen` add to it; `xray` draws it pale on a dark film. */
const AnkleBones = ({ x, y, scale = 1, crack = false, at = 104, plate = false, ligament = false, frayed = false, lump = false, worn = false, swollen = false, xray = false, foot = true }: { x: number; y: number; scale?: number; crack?: boolean; at?: number; plate?: boolean; ligament?: boolean; frayed?: boolean; lump?: boolean; worn?: boolean; swollen?: boolean; xray?: boolean; foot?: boolean }) => {
  const line = xray ? WHITE : INK, fill = xray ? SOFT : WHITE;
  return <g transform={`translate(${x} ${y}) scale(${scale})`} strokeLinejoin="round" strokeLinecap="round">
    {foot && <><path d="M-34 134 C-40 146 -48 156 -50 166 H42 C40 156 34 146 30 134 Z" fill={xray ? SOFT : TINT} stroke={line} strokeWidth="3" />
      {[-40, -24, -8, 8, 24].map(tx => <circle key={tx} cx={tx + 4} cy={166} r="5" fill={fill} stroke={line} strokeWidth="2" />)}</>}
    <ellipse cx="-4" cy="124" rx="24" ry="13" fill={fill} stroke={line} strokeWidth="3" />
    <circle cx="-26" cy="110" r="10" fill={line} /><circle cx="-26" cy="110" r="6.5" fill={fill} />
    <path d="M-14 6 V104" stroke={line} strokeWidth="28" /><path d="M-14 6 V104" stroke={fill} strokeWidth="22" />
    <path d="M18 6 V122" stroke={line} strokeWidth="13" /><path d="M18 6 V122" stroke={fill} strokeWidth="8" />
    {lump && <ellipse cx="27" cy={at} rx="6" ry="9" fill={GOLD} />}
    {crack && <path d={`M8 ${at - 4} L15 ${at} L20 ${at - 4} L28 ${at + 2}`} fill="none" stroke={GOLD} strokeWidth="3.5" />}
    {plate && <><rect x="26" y="68" width="8" height="52" rx="3" fill={GOLD} />{[78, 94, 110].map(sy => <path key={sy} d={`M34 ${sy} H8`} stroke={GOLD} strokeWidth="3" />)}</>}
    {ligament && <path d="M20 124 L30 140 M16 126 L6 138" stroke={GOLD} strokeWidth="4" strokeDasharray={frayed ? "3 3" : undefined} fill="none" />}
    {worn && [-22, -12, -2, 8].map(dx => <circle key={dx} cx={dx} cy={110} r="2.5" fill={GOLD} />)}
    {swollen && <ellipse cx="-4" cy="122" rx="54" ry="32" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" />}
  </g>;
};

/** A lower leg and foot from the side: the knee at (x, y), the toes pointing right (turn with `rotate`).
 *  `boot` or `cast` dress it. */
const LegSide = ({ x, y, scale = 1, rotate = 0, boot = false, cast = false }: { x: number; y: number; scale?: number; rotate?: number; boot?: boolean; cast?: boolean }) =>
  <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} strokeLinejoin="round" strokeLinecap="round">
    <path d="M-14 0 V96 C-14 108 -18 112 -18 118 C-18 124 -14 126 -8 126 H56 C64 126 66 118 58 114 L14 100 V0 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
    {cast && <><path d="M-17 14 H17 V98 L44 106 V129 H-12 C-20 129 -22 120 -20 112 Z" fill={TINT} stroke={INK} strokeWidth="2.5" />{[34, 58, 82].map(cy => <path key={cy} d={`M-15 ${cy + 8} L15 ${cy - 6}`} stroke={SOFT} strokeWidth="1.5" />)}</>}
    {boot && <><path d="M-20 28 H20 V94 L62 108 C70 112 70 130 62 132 H-16 C-24 132 -26 124 -24 116 Z" fill={TINT} stroke={INK} strokeWidth="2.5" />
      {[46, 66, 86].map(cy => <path key={cy} d={`M-20 ${cy} H20`} stroke={INK} strokeWidth="2" />)}<path d="M-22 134 H64" stroke={INK} strokeWidth="5" /></>}
  </g>;

// ==== Broken wrist ==========================================================================================

function WfxForearmCrack(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Fracture, break, crack: the same thing", "Hard to tell, so probably an X-ray", "Common after a fall, or weak bones", "Most healing happens in 6 to 12 weeks", "Smoking and some medicines slow it"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Fracture, break, crack: same thing" label="A broken wrist" credit={at === 4 ? medsCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A forearm and hand with the two forearm bones drawn in and a small crack near the wrist">
      <Forearm x={12} y={96} scale={0.6} crack healed={at === 3} />
      {at === 0 && <><Ring x={88} y={92} r={16} still={still} /><Lines x={82} y={140} lines={["Muscles, tendons and", "nerves are hurt too"]} />
        <Box x={238} y={44} w={120} text="Fracture" lit /><Box x={238} y={80} w={120} text="Break" lit /><Box x={238} y={116} w={120} text="Crack" lit /><W x={238} y={152} size={10}>All mean the same thing</W></>}
      {at === 1 && <><W x={52} y={68} size={10}>Radius</W><W x={52} y={132} size={10}>Ulna</W>
        <Box x={238} y={48} w={150} text="Distal radius fracture" lit size={10} /><Lines x={238} y={88} lines={["Broken, dislocated or", "badly sprained?"]} /><Box x={238} y={142} w={150} text="Probably an X-ray" /></>}
      {at === 2 && <><Arrow d="M118 30 V58" head="M112 51 L118 58 L124 51" /><path d="M14 124 H150" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
        <Box x={238} y={46} w={150} text="Often after a fall" lit /><Lines x={238} y={82} lines={["Learn why you fell", "and build balance"]} /><Box x={238} y={140} w={150} text="Common in osteoporosis" size={10} /></>}
      {at === 3 && <><W x={238} y={58} size={18} serif fill={INK}>6 to 12 weeks</W><W x={238} y={78} size={10}>most of the healing</W>
        <Lines x={238} y={112} lines={["Osteoporosis does not", "affect bone healing"]} /><W x={238} y={158} size={10}>Some aches after are normal</W></>}
      {at === 4 && <><List x={168} y={50} gap={28} lines={["Smoking", "Diabetes", "Some medicines", "Ibuprofen or naproxen"]} /><Lines x={82} y={146} lines={["Medicine worries?", "Ask a professional"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function WfxThreeTags(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Pain, swelling, bruising after injury", "Numb, bone out, odd angle: A&E or 999", "Very painful or swollen: NHS 111", "Sling, wrapped ice, rings off", "Hurt head, back or hip in a fall: 999"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The signs" title="Sprain or break? Know the signs" label="Signs and where to go" credit={at === 1 || at === 4 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A raised forearm and hand with a crack near the wrist, beside lists of signs and where to get help">
      {at !== 4 && <Forearm x={74} y={184} rotate={-90} scale={0.6} crack />}
      {at === 0 && <><Ring x={72} y={104} r={18} still={still} /><List x={160} y={46} gap={26} lines={["Sudden pain", "Swelling, bruising", "Hard to move", "Bent or twisted", "Numb, or a colour change"]} /></>}
      {at === 1 && <><Ring x={72} y={104} r={18} still={still} /><Box x={236} y={38} w={150} text="Go to A&E or call 999" lit size={10} />
        <List x={164} y={72} gap={22} lines={["Numb or tingling", "Bone through the skin", "Odd angle or colour", "Bad cut, heavy bleeding"]} /><Box x={236} y={168} w={150} text="Do not drive to A&E" size={10} /></>}
      {at === 2 && <><Box x={236} y={40} w={150} text="Get help from NHS 111" lit size={10} /><List x={164} y={78} gap={26} lines={["Very painful or worse", "Lots of swelling", "Very stiff", "Hot, cold or shivery"]} /></>}
      {at === 3 && <><ColdPack x={72} y={104} /><List x={160} y={50} gap={30} lines={["A towel as a sling", "Ice: up to 20 minutes", "Rings and watch off", "Nothing to eat or drink"]} /></>}
      {at === 4 && <><path d="M14 160 H140" stroke={LINE} strokeWidth="3" strokeLinecap="round" /><g transform="rotate(-90 70 146)"><Person x={70} y={146} scale={1.3} /></g><Phone x={110} y={66} text="999" />
        <Box x={236} y={44} w={150} text="Call 999" lit /><Lines x={236} y={78} lines={["Head, back, neck or hip", "or cannot get up"]} /><Box x={236} y={130} w={150} text="NHS 111" /><W x={236} y={162} size={10}>In pain, hurt or unwell</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** A wrist on an X-ray: the two forearm bones, the small wrist bones and the hand bones; top centre at (cx, top). */
const WristFilm = ({ cx, top, crack = false, wires = false }: { cx: number; top: number; crack?: boolean; wires?: boolean }) =>
  <g strokeLinecap="round">
    <path d={`M${cx - 10} ${top + 130} V${top + 48}`} stroke={WHITE} strokeWidth="11" /><path d={`M${cx + 12} ${top + 130} V${top + 52}`} stroke={WHITE} strokeWidth="7" />
    {[[-12, 38], [0, 34], [12, 40], [-6, 26], [7, 26]].map(([dx, dy]) => <circle key={`${dx}${dy}`} cx={cx + dx} cy={top + dy} r="5" fill={WHITE} />)}
    {[-15, -5, 5, 15].map(dx => <path key={dx} d={`M${cx + dx} ${top + 18} L${cx + dx * 1.4} ${top - 8}`} stroke={WHITE} strokeWidth="4" />)}
    {crack && <path d={`M${cx - 20} ${top + 64} L${cx - 12} ${top + 59} L${cx - 8} ${top + 66} L${cx} ${top + 61}`} fill="none" stroke={GOLD} strokeWidth="3" />}
    {wires && <path d={`M${cx - 28} ${top + 50} L${cx + 6} ${top + 80} M${cx - 28} ${top + 80} L${cx + 6} ${top + 50}`} stroke={GOLD} strokeWidth="3" />}
  </g>;

function WfxCastWires(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Splint, painkillers and an X-ray", "Usually a plaster cast, then home", "Bones moved back, with pain relief", "Wires can hold a very bad break", "Painkillers, cast advice, follow-ups"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatment" title="Cast, splint or wires" label="Treatment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A wrist on an X-ray, a forearm in a plaster cast, a forearm in a splint, and an X-ray with two thin wires across the break">
      {at === 0 && <><XRay x={24} y={24} w={110} h={160} /><WristFilm cx={79} top={44} crack />
        <List x={160} y={52} gap={30} lines={["A splint for support", "Painkillers", "An X-ray of the break"]} /><Lines x={236} y={150} lines={["Pain checked", "on a scale"]} /></>}
      {at === 1 && <><Forearm x={12} y={62} scale={0.55} cast /><Forearm x={12} y={140} scale={0.55} splint />
        <Box x={240} y={52} w={130} text="Plaster cast" lit /><Lines x={240} y={84} lines={["Most often; then home"]} /><Box x={240} y={130} w={130} text="Or a splint" /><Lines x={240} y={162} lines={["Off to wash or bathe"]} /></>}
      {at === 2 && <><Forearm x={12} y={100} scale={0.6} crack /><Arrow d="M150 58 C136 62 124 70 116 82" head="M118 73 L116 82 L125 81" />
        <Box x={238} y={44} w={150} text="Medicine first" lit /><Lines x={238} y={80} lines={["Then moved back", "by hand, before a cast"]} /><Lines x={238} y={134} lines={["NICE: a Bier's block,", "not gas and air alone"]} /></>}
      {at === 3 && <><XRay x={24} y={24} w={110} h={160} /><WristFilm cx={79} top={44} crack wires />
        <Box x={238} y={44} w={150} text="Wires hold the bones" lit /><Lines x={238} y={80} lines={["Within 72 hours or 7 days,", "by the type of break"]} /><Lines x={238} y={134} lines={["A full cast later,", "once swelling eases"]} /></>}
      {at === 4 && <><Pill x={50} y={52} /><Cal x={110} y={54} w={46} lit /><rect x="30" y="94" width="50" height="70" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[110, 124, 138, 152].map(ly => <path key={ly} d={`M40 ${ly} H70`} stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" />)}
        <path d="M96 100 L140 100 L118 156 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <List x={160} y={52} gap={30} lines={["Painkillers to take home", "Cast care advice", "Maybe a sling", "Follow-up appointments"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function WfxBoneScan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Weaker bones break after a small fall", "Over 50? A bone check is normal", "Age, menopause, steroids, family", "A DEXA scan takes 10 to 20 minutes", "Calcium, vitamin D and exercise help"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Bone health" title="Was it a small fall? Check your bones" label="Weaker bones" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Cross-sections of a stronger and a weaker bone, and a bone density scanner">
      {at === 0 && <><Honeycomb x={44} y={76} r={32} /><Honeycomb x={116} y={76} r={32} weak /><W x={44} y={130} size={10}>Stronger</W><W x={116} y={130} size={10}>Weaker</W>
        <Box x={238} y={50} w={150} text="A small fall or bump" lit /><W x={238} y={84} size={10}>can break weaker bones</W><Lines x={238} y={124} lines={["Called a fragility", "fracture"]} /></>}
      {at === 1 && <><Person x={56} y={110} scale={1.5} /><circle cx="112" cy="70" r="18" fill="none" stroke={GOLD} strokeWidth="4" /><path d="M125 83 L140 98" stroke={GOLD} strokeWidth="5" strokeLinecap="round" />
        <Box x={238} y={40} w={110} text="Over 50" lit /><Box x={238} y={76} w={110} text="Risk factors" /><Lines x={238} y={118} lines={["Broke a bone in a", "simple slip or trip?"]} /><W x={238} y={160} size={10}>Speak to your GP</W></>}
      {at === 2 && <><Honeycomb x={72} y={96} r={52} weak />{["Bone loss from 35", "After the menopause", "Steroids over 3 months", "A parent's hip fracture", "Heavy drinking, smoking"].map((label, index) => <Box key={label} x={238} y={36 + index * 30} w={150} text={label} size={10} />)}</>}
      {at === 3 && <><rect x="20" y="132" width="120" height="12" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M28 144 V170 M132 144 V170 M134 132 V58" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <rect x="60" y="54" width="78" height="18" rx="5" fill={TINT} stroke={INK} strokeWidth="2.5" /><circle cx="36" cy="122" r="9" fill={INK} /><rect x="46" y="116" width="76" height="14" rx="6" fill={SOFT} />
        <Box x={238} y={44} w={120} text="DEXA scan" lit /><Lines x={238} y={78} lines={["10 to 20 minutes,", "short and painless"]} /><W x={238} y={126} size={10}>Over 50, broke a wrist?</W><Box x={238} y={156} w={150} text="Fracture liaison" /></>}
      {at === 4 && <><Sun x={50} y={60} /><Pill x={116} y={60} /><rect x="34" y="112" width="32" height="44" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="34" y="128" width="32" height="28" rx="3" fill={TINT} />
        <path d="M96 134 H136" stroke={INK} strokeWidth="5" strokeLinecap="round" /><rect x="90" y="120" width="10" height="28" rx="3" fill={INK} /><rect x="132" y="120" width="10" height="28" rx="3" fill={INK} />
        <List x={164} y={48} gap={28} lines={["Bone medicines", "Calcium-rich food", "Time outside: vitamin D", "Weight-bearing exercise"]} /><W x={236} y={168} size={10}>Vitamin D: 10 micrograms</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function WfxRaisedCast(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Holds the bone still for about 6 weeks", "Hand raised, cast dry, move slowly", "Itchy? Nothing down the cast", "Keep shoulder, elbow, fingers moving", "Loose, tight, cracked or smelly: 111"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Cast care" title="Dry, raised and left alone" label="Looking after a cast" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An arm in a cast resting on a pillow, the hand raised higher than the elbow">
      <Pillow x={14} y={140} w={130} h={22} />
      <Forearm x={22} y={136} rotate={-20} scale={0.58} cast />
      {at === 0 && <><Box x={238} y={44} w={150} text="Holds tissues in place" lit size={10} /><W x={238} y={78} size={10}>Usually plaster of paris</W><Box x={238} y={118} w={150} text="About six weeks" /><Lines x={238} y={150} lines={["until the bone", "has healed"]} /></>}
      {at === 1 && <><Ring x={140} y={88} r={20} still={still} /><List x={168} y={46} gap={30} lines={["Hand above elbow", "A pillow at night", "Slowly: it is heavy", "Keep it dry"]} /></>}
      {at === 2 && <><path d="M44 30 L124 62" stroke={TEXT} strokeWidth="4" strokeLinecap="round" /><Cross x={84} y={46} />
        <Lines x={238} y={52} lines={["Itchy for a few days,", "but it should pass"]} /><Box x={238} y={104} w={150} text="Nothing down the cast" lit size={10} /><Lines x={238} y={142} lines={["It could cause infection", "or damage the skin"]} /></>}
      {at === 3 && <><Arrow d="M150 58 C166 64 168 88 156 98" head="M163 92 L156 98 L152 90" /><Arrow d="M14 100 C8 116 12 128 22 134" head="M14 130 L22 134 L24 125" />
        <List x={182} y={52} gap={30} lines={["Shoulder", "Elbow", "Fingers and thumb"]} /><Lines x={238} y={146} lines={["Open and close", "your hand to a fist"]} /></>}
      {at === 4 && <><Box x={238} y={38} w={120} text="Phone 111" lit /><List x={170} y={70} gap={24} lines={["Too loose or too tight", "Cracked or rubbing", "Smell or discharge", "Calf pain, breathless", "New numbness"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** A small hand: `open`, a `fist`, or the thumb `touch`ing the little finger; centred on (x, y). */
const Hand = ({ x, y, kind }: { x: number; y: number; kind: "open" | "fist" | "touch" }) =>
  <g strokeLinecap="round" strokeLinejoin="round">
    {kind !== "fist" && [-12, -4, 4, 12].map((dx, index) => <rect key={dx} x={x + dx - 3.5} y={y - 30 + (index === 3 ? 8 : index === 0 ? 4 : 0)} width="7" height="30" rx="3.5" fill={WHITE} stroke={INK} strokeWidth="2" />)}
    <rect x={x - 16} y={y - (kind === "fist" ? 16 : 4)} width="32" height={kind === "fist" ? 36 : 24} rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    {kind === "fist" && [-6, 2, 10].map(dy => <path key={dy} d={`M${x - 12} ${y + dy - 6} H${x + 10}`} stroke={SOFT} strokeWidth="2" />)}
    {kind === "open" && <path d={`M${x - 14} ${y + 8} L${x - 26} ${y - 8}`} stroke={INK} strokeWidth="8" />}
    {kind === "touch" && <path d={`M${x - 14} ${y + 8} C${x - 8} ${y - 6} ${x + 4} ${y - 12} ${x + 12} ${y - 20}`} stroke={GOLD} strokeWidth="6" fill="none" />}
    {kind === "fist" && <path d={`M${x - 14} ${y + 10} H${x + 6}`} stroke={INK} strokeWidth="6" />}
  </g>;

function WfxHandPoses(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Four moves with the cast on", "Cast off at 4 to 6 weeks; often stiff", "Start once your professional advises", "2 to 3 at a time, up to 2 sets of 15", "Keep pain within 0 to 5 out of 10"];
  const tiles = [46, 122, 198, 274];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercises" title="Little and often, within 0 to 5" label="Wrist exercises" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Small hand poses: a fist, a flat hand and the thumb touching the little finger, and a pain scale from 0 to 10">
      {at === 0 && <>{tiles.map(tx => <rect key={tx} x={tx - 34} y={38} width="68" height="96" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" />)}
        <circle cx="46" cy="68" r="7" fill={INK} /><path d="M46 76 V110 M46 110 L40 128 M46 110 L52 128 M46 82 L58 50" stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none" /><Arrow d="M66 92 C70 74 68 60 62 50" head="M58 56 L62 50 L68 54" />
        <path d="M110 120 V86 L132 62" stroke={INK} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" /><Arrow d="M140 96 C142 82 138 72 132 66" head="M131 74 L132 66 L139 69" />
        <Hand x={198} y={92} kind="fist" /><Hand x={274} y={96} kind="touch" />
        {["Shoulder", "Elbow", "Fist", "Thumb touch"].map((label, index) => <W key={label} x={tiles[index]} y={152} size={10}>{label}</W>)}<W x={160} y={176} size={10}>With the cast on</W></>}
      {at === 1 && <><Forearm x={12} y={100} scale={0.6} /><path d="M38 72 C60 62 100 62 128 70" fill="none" stroke={SOFT} strokeWidth="5" strokeLinecap="round" strokeDasharray="8 5" /><path d="M38 128 C60 138 100 138 128 130" fill="none" stroke={SOFT} strokeWidth="5" strokeLinecap="round" strokeDasharray="8 5" />
        <Box x={238} y={44} w={130} text="4 to 6 weeks" lit /><W x={238} y={80} size={10}>Stiff is not unusual</W><Lines x={238} y={114} lines={["Gentle exercises,", "as guided"]} /><Lines x={238} y={160} lines={["Exercise can lower", "the chance of CRPS"]} /></>}
      {at === 2 && <><circle cx="160" cy="48" r="17" fill={INK} /><path d="M154 39 L169 48 L154 57 Z" fill={WHITE} />
        <List x={34} y={92} gap={24} lines={["Wrist bend", "Palm up, palm down", "Hand wave"]} /><List x={182} y={92} gap={24} lines={["Flat fist", "Full finger bend", "Thumb stretch"]} /><W x={160} y={176} size={10}>After surgery? Follow your own team</W></>}
      {at === 3 && <><Clock x={70} y={78} r={34} hand={0} /><W x={70} y={134} size={10}>Little and often,</W><W x={70} y={150} size={10}>such as every hour</W>
        <W x={238} y={52} size={18} serif fill={INK}>2 to 3</W><W x={238} y={70} size={10}>at a time</W><Box x={238} y={102} w={150} text="Up to 2 sets of 15" lit /><Lines x={238} y={140} lines={["Stretches: hold", "20 to 30 seconds"]} /></>}
      {at === 4 && <><Hand x={60} y={58} kind="open" /><Hand x={260} y={58} kind="fist" /><PainScale x={41} y={92} upTo={5} />
        {[["0 to 3", "Minimal", 83], ["4 to 5", "Acceptable", 150], ["6 to 10", "Excessive", 226]].map(([range, word, cx]) => <g key={range}><W x={Number(cx)} y={142} size={10}>{range}</W><W x={Number(cx)} y={158} size={10}>{word}</W></g>)}
        <W x={160} y={182} size={10}>No worse the morning after</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function WfxPillowArm(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Some pain is normal, even once healed", "Use the painkillers you were given", "Raise it above your heart; massage", "Stiff and sore once the cast is off", "Warmth, cold packs and relaxing"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pain and swelling" title="Raise it, move it, pace it" label="Pain, stiffness and swelling" credit={at === 1 ? medsCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A forearm resting on two stacked pillows, the hand raised above heart level">
      <Pillow x={14} y={150} w={132} h={20} /><Pillow x={22} y={130} w={116} h={20} />
      <Forearm x={22} y={124} rotate={-14} scale={0.56} />
      {at === 2 && <><HeartShape x={30} y={64} size={26} fill={GOLD} stroke={INK} width={2} /><path d="M46 64 H150" stroke={GOLD} strokeWidth="2.5" strokeDasharray="6 5" />
        <Arrow d="M140 70 C110 82 80 92 46 104" head="M54 98 L46 104 L54 109" /></>}
      {at === 0 && <List x={164} y={52} gap={30} lines={["Pain at rest is common", "It varies day to day", "Some after healing", "Colder weather aches"]} />}
      {at === 1 && <><Pill x={238} y={46} /><Lines x={238} y={82} lines={["Use the painkillers", "you were given"]} /><Box x={238} y={136} w={150} text="Pharmacy can advise" lit /><W x={238} y={170} size={10}>Ibuprofen may delay healing</W></>}
      {at === 2 && <List x={164} y={52} gap={28} lines={["Above heart level", "Keep joints moving", "Rest and activity", "Massage to the elbow"]} />}
      {at === 2 && <W x={236} y={172} size={10}>Bruising is normal too</W>}
      {at === 3 && <List x={164} y={52} gap={30} lines={["Stiff and sore: normal", "Movement: weeks", "Strength: months", "Moisturise dry skin"]} />}
      {at === 4 && <><Bottle x={196} y={64} /><ColdPack x={272} y={64} /><W x={196} y={110} size={10}>Warm bath</W><W x={272} y={110} size={10}>Cold pack</W>
        <Box x={236} y={140} w={150} text="Relaxation" lit /><W x={236} y={174} size={10}>Use more than one at once</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function WfxFingertips(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Numb, blue or white fingers: NHS 111", "Calf pain or breathless: phone 111", "Sudden, severe pain: 999 or A&E", "Pain stopping daily life? See a GP"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Warning signs" title="Changes that cannot wait" label="Warning signs" credit={urgentCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A raised arm in a cast with the fingertips coloured, beside the signs that need help">
      <Forearm x={74} y={186} rotate={-90} scale={0.6} cast tips={at === 0} />
      {at === 0 && <><Ring x={78} y={56} r={22} still={still} /><Box x={236} y={36} w={150} text="Get help from NHS 111" lit size={10} />
        <List x={164} y={68} gap={24} lines={["Pain getting worse", "Very hot or shivery", "Cast broken or tight", "Numb, blue or white", "Smell or discharge"]} /></>}
      {at === 1 && <><Phone x={128} y={150} w={34} h={56} text="111" /><Box x={236} y={36} w={120} text="Phone 111" lit />
        <List x={160} y={68} gap={24} lines={["Pain in your calf", "Short of breath", "New redness, swelling", "Constant pins and needles", "Rubbing or cracked cast"]} /></>}
      {at === 2 && <><Ring x={74} y={110} r={30} still={still} /><Box x={236} y={38} w={150} text="Call 999 or go to A&E" lit size={10} />
        <W x={236} y={74} size={10.5}>Sudden, severe pain</W><Lines x={236} y={100} lines={["It can follow a cast", "that is too tight"]} /><Box x={236} y={156} w={150} text="Do not drive to A&E" size={10} /></>}
      {at === 3 && <><Lines x={236} y={46} lines={["Pain far worse and", "longer than normal"]} /><Lines x={236} y={92} lines={["Skin very sensitive;", "swollen, stiff or", "a colour change"]} /><Box x={236} y={158} w={150} text="See a GP: help early" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function WfxOneHandKitchen(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Do what you can, then a little more", "Tap grips and a dressing stick help", "A tipping kettle, a basket in the pan", "Keep what you use most within reach", "Council needs assessments are free"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Everyday tasks" title="One hand, a few clever aids" label="Everyday tasks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A kitchen counter with a tipping kettle, a pan with a wire basket, a tap grip and a grab tool">
      {at !== 0 && at !== 4 && <path d="M12 160 H150" stroke={INK} strokeWidth="4" strokeLinecap="round" />}
      {at === 0 && <>{[0, 1, 2, 3, 4].map(index => <rect key={index} x={20 + index * 24} y={150 - (index + 1) * 20} width="18" height={(index + 1) * 20} rx="3" fill={index === 4 ? INK : TINT} stroke={INK} strokeWidth="2" />)}
        <Arrow d="M24 40 C60 36 100 30 132 26" head="M124 21 L132 26 L125 32" />
        <Lines x={238} y={52} lines={["Keep doing what", "you are able to"]} /><Box x={238} y={108} w={150} text="A little more over time" lit size={10} /><W x={238} y={144} size={10}>as pain allows</W></>}
      {at === 1 && <><path d="M30 160 V96 H62 V108" stroke={TEXT} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" /><rect x="22" y="80" width="40" height="12" rx="6" fill={GOLD} stroke={INK} strokeWidth="2" />
        <path d="M100 60 L132 158" stroke={TEXT} strokeWidth="4" strokeLinecap="round" /><path d="M100 60 C92 52 98 42 106 48" stroke={TEXT} strokeWidth="4" fill="none" strokeLinecap="round" />
        <List x={164} y={50} gap={28} lines={["Tap grips", "Long-handled sponge", "Dressing stick", "Sock and zip aids"]} /><W x={236} y={170} size={10}>Cast covers: pharmacies</W></>}
      {at === 2 && <><path d="M20 158 L30 116 H76 L84 158" fill="none" stroke={TEXT} strokeWidth="3" strokeLinejoin="round" /><g transform="rotate(-18 52 112)"><rect x="32" y="88" width="40" height="40" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M72 98 L84 92" stroke={INK} strokeWidth="4" strokeLinecap="round" /><path d="M40 86 C40 74 64 74 64 86" stroke={INK} strokeWidth="3" fill="none" /></g>
        <rect x="96" y="126" width="48" height="32" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M100 118 V150 H140 V118" fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="3 3" /><path d="M120 118 V100" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        <List x={164} y={52} gap={28} lines={["Tipping kettle", "Basket in the pan", "Easy-grip cutlery", "A kitchen trolley"]} /></>}
      {at === 3 && <><path d="M16 70 H84" stroke={INK} strokeWidth="4" strokeLinecap="round" />{[24, 44, 64].map(cx => <rect key={cx} x={cx} y={50} width="14" height="20" rx="3" fill={TINT} stroke={INK} strokeWidth="2" />)}
        {[30, 54].map(cx => <rect key={cx} x={cx} y={132} width="16" height="28" rx="3" fill={INK} />)}<path d="M138 156 L96 76" stroke={TEXT} strokeWidth="4" strokeLinecap="round" /><path d="M96 76 L90 66 M96 76 L86 76" stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />
        <Box x={238} y={44} w={150} text="Most-used within reach" lit size={10} /><Lines x={238} y={80} lines={["A grab tool reaches", "higher things"]} /><Lines x={238} y={130} lines={["Tired or sore?", "A little at a time"]} /></>}
      {at === 4 && <><path d="M12 80 L72 34 L132 80" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><rect x="22" y="80" width="100" height="84" fill={WHITE} stroke={INK} strokeWidth="3" />
        <rect x="52" y="96" width="40" height="54" rx="4" fill={TINT} stroke={INK} strokeWidth="2" />{[110, 122, 134].map(ly => <path key={ly} d={`M60 ${ly} H84`} stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" />)}<path d="M62 100 H82" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <Box x={238} y={44} w={150} text="Free needs assessment" lit size={10} /><W x={238} y={78} size={10}>from your local council</W><Lines x={238} y={108} lines={["Equipment is free", "if you need it"]} /><Box x={238} y={160} w={150} text="Occupational therapist" size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function WfxWheelHands(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["No cast or sling, and full control", "Drowsy from painkillers? Do not drive", "Phased return or changed duties", "Contact sports at 12 weeks"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Driving and work" title="Out of the cast, in full control" label="Driving and work" credit={at === 1 ? medsCredit : at === 3 ? ideaCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A steering wheel held by two bare hands, beside the checks before driving">
      {at === 0 && <><circle cx="78" cy="98" r="50" fill="none" stroke={INK} strokeWidth="9" /><circle cx="78" cy="98" r="12" fill={INK} /><path d="M30 98 H66 M90 98 H126 M78 110 V146" stroke={INK} strokeWidth="6" />
        <circle cx="40" cy="70" r="11" fill={TINT} stroke={INK} strokeWidth="2.5" /><circle cx="116" cy="70" r="11" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <List x={164} y={48} gap={26} lines={["No cast or sling", "Pain-free strength", "An emergency stop", "Full control"]} /><Box x={236} y={160} w={140} text="Tell your insurer" lit /></>}
      {at === 1 && <><Pill x={50} y={70} rotate={-20} /><Moon x={110} y={66} /><W x={78} y={124} size={22} serif fill={INK}>z z</W>
        <W x={236} y={52} size={10.5}>Sleepy or slow?</W><Box x={236} y={86} w={130} text="Do not drive" lit /><Lines x={236} y={128} lines={["Practise on a quiet road,", "with someone with you"]} /></>}
      {at === 2 && <><rect x="28" y="70" width="96" height="66" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M58 70 V58 H94 V70" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" /><path d="M28 100 H124" stroke={INK} strokeWidth="2.5" /><rect x="68" y="94" width="16" height="12" rx="2" fill={GOLD} />
        <Box x={236} y={44} w={140} text="Phased return" lit /><W x={236} y={78} size={10}>or changed duties</W><Lines x={236} y={118} lines={["No need to see a", "professional first"]} /><W x={236} y={164} size={10}>Pace yourself</W></>}
      {at === 3 && <><path d="M30 106 H290" stroke={LINE} strokeWidth="8" strokeLinecap="round" /><path d="M30 106 H260" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        {[[60, "4 to 6 weeks", "Out of the cast"], [160, "6 to 8 weeks", "Normal activity"], [260, "12 weeks", "Contact sports"]].map(([cx, top, low]) => <g key={String(cx)}><circle cx={Number(cx)} cy={106} r="9" fill={INK} stroke={WHITE} strokeWidth="2.5" /><W x={Number(cx)} y={82} size={10}>{top}</W><W x={Number(cx)} y={134} size={10}>{low}</W></g>)}
        <W x={160} y={44} size={11}>Building up activity</W><W x={160} y={170} size={10}>Frustration is normal, and eases</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function WfxLitStairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Had a fall? Tell your GP practice", "A falls service checks many things", "Strength and balance on 2 days a week", "Light the stairs, move rugs, add rails", "Good shoes, eye tests, medicine review"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Preventing falls" title="Stop the next fall" label="Preventing another fall" credit={at === 2 ? moveCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A well-lit staircase with a handrail, a rug crossed out, and a person doing a supported balance exercise">
      {at === 0 && <><Person x={56} y={120} scale={1.6} /><rect x="94" y="62" width="50" height="62" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M119 74 V98 M107 86 H131" stroke={GOLD} strokeWidth="6" strokeLinecap="round" />
        <Box x={238} y={44} w={150} text="Tell your GP practice" lit size={10} /><W x={238} y={78} size={10}>even if you are not hurt</W><Lines x={238} y={120} lines={["Many causes of falls", "can be treated"]} /></>}
      {at === 1 && <><rect x="30" y="34" width="90" height="128" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="58" y="28" width="34" height="12" rx="3" fill={INK} />
        {[60, 88, 116, 144].map(ly => <g key={ly}><path d={`M42 ${ly} l5 5 l9 -10`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d={`M64 ${ly} H108`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" /></g>)}
        <List x={162} y={48} gap={28} lines={["Muscle weakness", "Bones and eyesight", "Strength and balance", "Home and medicines"]} /><W x={236} y={170} size={10}>You may refer yourself</W></>}
      {at === 2 && <><path d="M20 128 V74 H46 V128 M20 104 H46" stroke={TEXT} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" /><Figure x={78} y={72} stride={4} hand={[46, 76]} />
        <Lines x={232} y={46} lines={["65 and over:", "strength and balance", "at least 2 days a week"]} /><Week x={148} y={128} lit={[1, 4]} /></>}
      {at === 3 && <><path d="M18 176 H46 V150 H70 V124 H94 V98 H118 V72 H142" fill="none" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" /><path d="M30 146 L130 46" stroke={GOLD} strokeWidth="4" strokeLinecap="round" /><path d="M30 146 V164 M130 46 V64" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        <circle cx="62" cy="40" r="11" fill={GOLD} className={still ? undefined : "lib-why-pulse"} /><path d="M62 18 V28" stroke={INK} strokeWidth="2.5" />
        <List x={164} y={52} gap={28} lines={["Move rugs and mats", "No trailing wires", "Light the stairs", "Handrails fitted"]} /></>}
      {at === 4 && <><path d="M22 76 H52 C62 76 70 82 72 88 H22 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M20 92 H74" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <path d="M94 72 C104 58 128 58 138 72 C128 86 104 86 94 72 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="116" cy="72" r="7" fill={INK} />
        <Pill x={48} y={136} /><Phone x={116} y={136} w={28} h={46} />
        <List x={160} y={46} gap={26} lines={["Shoes that grip", "Eye and hearing tests", "Medicines reviewed", "Get up slowly", "Carry a phone"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function WfxLongPath(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Some take as long as 12 months", "A physio can help stiffness, weakness", "Exercises lower the chance of CRPS", "Low mood is normal and should ease"];
  const marks: [number, number, string][] = [[30, 170, "Cast off"], [140, 112, "6 to 12 weeks"], [292, 52, "12 months"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Longer recovery" title="When recovery takes its time" label="When it takes longer" credit={at === 0 ? ideaCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A long winding path from the cast coming off to twelve months, with markers along the way">
      <path d="M24 170 C90 172 70 112 140 112 S230 56 296 52" fill="none" stroke={LINE} strokeWidth="10" strokeLinecap="round" />
      {at === 0 && <path d="M24 170 C90 172 70 112 140 112 S230 56 296 52" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeDasharray="2 10" />}
      {marks.map(([mx, my, label], index) => <g key={label}><circle cx={mx} cy={my} r="8" fill={at === 0 || index === 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />{at === 0 && <W x={mx + (index === 2 ? -10 : index === 0 ? -14 : 0)} y={index === 1 ? my + 26 : my - 18} size={10} anchor={index === 2 ? "end" : index === 0 ? "start" : "middle"}>{label}</W>}</g>)}
      {at === 0 && <Lines x={88} y={48} lines={["Stiff and weak", "for months, at times"]} />}
      {at === 1 && <><List x={20} y={42} gap={20} lines={["Age, smoking", "How bad the injury was", "An operation", "Other illnesses"]} /><Box x={236} y={152} w={150} text="A physiotherapist" lit /><W x={236} y={182} size={10}>No better in 6 weeks? Ask</W></>}
      {at === 2 && <><Lines x={84} y={44} lines={["Exercises before and", "after the cast lower", "the chance of CRPS"]} /><Box x={236} y={152} w={150} text="Osteoarthritis or CRPS" size={10} /><W x={236} y={182} size={10}>Occasionally, longer-term</W></>}
      {at === 3 && <><Sun x={32} y={44} r={10} /><Lines x={116} y={42} lines={["Frustration is normal", "and it gets better"]} /><Box x={236} y={148} w={150} text="Samaritans: 116 123" lit /><W x={236} y={178} size={10}>24 hours a day</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Broken ankle ==========================================================================================

function AfxThreeBones(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Tibia, fibula and talus meet here", "Usually the fibula: Weber A, B or C", "Swelling, pain, bruising; an X-ray", "Not sure? Get it checked by a doctor"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Three bones, one common break" label="A broken ankle" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The ankle from the front: the tibia and fibula coming down to the talus, with a crack across the lower fibula">
      <AnkleBones x={80} y={26} scale={0.86} crack={at === 1} at={100} swollen={at === 2} ligament={at === 3} />
      {at === 0 && <><W x={30} y={60} size={10}>Tibia</W><W x={124} y={60} size={10}>Fibula</W><W x={134} y={138} size={10}>Talus</W><path d="M114 134 H122" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
        <Box x={240} y={44} w={140} text="Three bones meet" lit /><Lines x={240} y={82} lines={["Thicker shin bone: tibia", "Thinner, outside: fibula", "Top of the foot: talus"]} gap={18} /><W x={240} y={158} size={10}>Ligaments may be hurt</W></>}
      {at === 1 && <><Ring x={95} y={112} r={14} still={still} />{[["C", 64], ["B", 88], ["A", 108]].map(([letter, ly]) => <g key={letter}><path d={`M104 ${Number(ly) + 26} H114`} stroke={TEXT} strokeWidth="2" /><W x={122} y={Number(ly) + 30} size={11} fill={INK}>{letter}</W></g>)}
        <Box x={240} y={44} w={140} text="Usually the fibula" lit /><Lines x={240} y={80} lines={["Below, at or above", "the ankle joint"]} /><W x={240} y={128} size={10}>Weber A, B or C</W><W x={240} y={160} size={10}>Sometimes the tibia too</W></>}
      {at === 2 && <List x={160} y={46} gap={26} lines={["Swelling: ankle, foot", "Pain straight away", "Bruising into the foot", "Hard to stand on it", "An X-ray to confirm"]} />}
      {at === 3 && <><Lines x={238} y={48} lines={["Muscles, ligaments,", "tendons and nerves", "are hurt too"]} /><Box x={238} y={128} w={150} text="Not sure? Get it checked" lit size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AfxLigamentBone(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["A sprain is ligament; a fracture, bone", "Both cause pain, swelling, bruising", "A crack, odd angle or numb: A&E or 999", "An X-ray takes a few minutes", "PRICE for 2 to 3 days after a sprain"];
  const price = ["Protect", "Rest", "Ice", "Compression", "Raise"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Sprain or break" title="Stretched ligament or broken bone?" label="Sprain or break" credit={at === 2 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two ankles side by side: one with a frayed ligament, one with a cracked bone">
      {(at === 0 || at === 1) && <><AnkleBones x={78} y={26} scale={0.74} ligament frayed /><AnkleBones x={242} y={26} scale={0.74} crack at={102} />
        {at === 0 ? <><W x={78} y={170} size={10}>Sprain: a ligament</W><W x={242} y={170} size={10}>Fracture: a bone</W></> : <><W x={160} y={92} size={30} serif fill={INK}>?</W><W x={160} y={176} size={10}>Pain, swelling, bruising in both</W></>}</>}
      {at === 2 && <><AnkleBones x={70} y={26} scale={0.74} crack at={102} /><Ring x={83} y={102} r={16} still={still} /><Box x={236} y={36} w={150} text="Call 999 or go to A&E" lit size={10} />
        <List x={164} y={70} gap={22} lines={["Heard a crack", "Odd angle or shape", "Numb or tingling", "Blue, grey or cold skin"]} /><Box x={236} y={166} w={150} text="Do not drive to A&E" size={10} /></>}
      {at === 3 && <><XRay x={20} y={24} w={112} h={160} /><AnkleBones x={78} y={32} scale={0.78} xray crack at={102} />
        <Box x={238} y={44} w={120} text="An X-ray" lit /><Lines x={238} y={78} lines={["A few minutes;", "you will not feel it"]} /><Lines x={238} y={134} lines={["A very minor break:", "maybe no treatment"]} /></>}
      {at === 4 && <>{price.map((word, index) => <g key={word}><rect x={18 + index * 60} y={56} width="44" height="44" rx="10" fill={index === 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={40 + index * 60} y={86} size={22} serif fill={index === 2 ? WHITE : INK}>{word[0]}</W><W x={40 + index * 60} y={122} size={9.5}>{word}</W></g>)}
        <W x={160} y={160} size={10}>Most sprains feel better after 2 weeks</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AfxBootCastPlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Boot, cast or surgery: it depends", "A boot holds the ankle in position", "A backslab leaves room for swelling", "Unstable breaks: plate and screws", "Follow-ups check it is healing well"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatment" title="Boot, cast or plate and screws" label="Treatment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A walking boot, a plaster cast with the toes showing, and an ankle X-ray with a plate and screws">
      {at === 0 && <><LegSide x={46} y={50} scale={0.66} boot /><LegSide x={146} y={50} scale={0.66} cast /><XRay x={226} y={40} w={76} h={110} /><AnkleBones x={264} y={46} scale={0.56} xray plate foot={false} />
        <W x={58} y={150} size={10}>Boot</W><W x={158} y={150} size={10}>Cast</W><W x={264} y={170} size={10}>Surgery</W><W x={110} y={180} size={10}>A very minor break: maybe none</W></>}
      {at === 1 && <><LegSide x={70} y={34} boot /><Box x={238} y={44} w={150} text="Aircast or moon boot" lit size={10} /><Lines x={238} y={80} lines={["Holds the ankle and", "foot in position"]} /><Lines x={238} y={132} lines={["Small stable break:", "no more than six weeks"]} /></>}
      {at === 2 && <><LegSide x={70} y={34} cast /><Box x={238} y={44} w={140} text="Backslab first" lit /><Lines x={238} y={78} lines={["A gap for swelling,", "then maybe a full cast"]} /><List x={170} y={126} gap={22} lines={["Keep it dry", "Nothing down it", "Toes and knees moving"]} /></>}
      {at === 3 && <><XRay x={22} y={24} w={116} h={162} /><AnkleBones x={80} y={30} scale={0.8} xray plate />
        <Box x={238} y={44} w={140} text="Plate and screws" lit /><Lines x={238} y={80} lines={["Usually within 3 weeks", "of the injury"]} /><Lines x={238} y={132} lines={["Home the same day", "or the next"]} /></>}
      {at === 4 && <><Cal x={80} y={86} w={80} lit /><Box x={238} y={50} w={150} text="About 2 weeks after" lit size={10} /><Lines x={238} y={84} lines={["surgery: the wounds", "are checked"]} /><Lines x={238} y={136} lines={["Follow-ups check", "healing"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** A long bone on its side, centred on (x, y): `crack` across the middle, `knit` part-healed, `lump` the new bone. */
const LongBone = ({ x, y, crack = false, knit = false, lump = false }: { x: number; y: number; crack?: boolean; knit?: boolean; lump?: boolean }) =>
  <g strokeLinecap="round" strokeLinejoin="round">
    <path d={`M${x - 50} ${y} H${x + 50}`} stroke={INK} strokeWidth="18" /><path d={`M${x - 50} ${y} H${x + 50}`} stroke={WHITE} strokeWidth="12" />
    {[-1, 1].map(side => <g key={side}><circle cx={x + side * 58} cy={y - 8} r="10" fill={INK} /><circle cx={x + side * 58} cy={y + 8} r="10" fill={INK} /><circle cx={x + side * 58} cy={y - 8} r="7" fill={WHITE} /><circle cx={x + side * 58} cy={y + 8} r="7" fill={WHITE} /><rect x={x + side * 52 - 6} y={y - 6} width="12" height="12" fill={WHITE} /></g>)}
    {lump && <ellipse cx={x} cy={y - 10} rx="12" ry="7" fill={GOLD} />}
    {(crack || knit) && <path d={`M${x - 4} ${y - 9} L${x + 3} ${y - 3} L${x - 3} ${y + 3} L${x + 4} ${y + 9}`} fill="none" stroke={knit ? SOFT : GOLD} strokeWidth="3.5" strokeDasharray={knit ? "3 3" : undefined} />}
  </g>;

function AfxHealingRuler(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Usually heals in 6 to 8 weeks", "Smoking and diabetes can slow healing", "Eat well, keep active, avoid smoking", "Stiff and weak after the cast: normal", "New bone settles over 12 to 18 months"];
  const ticks: [number, string][] = [[26, "Break"], [86, "6 to 8 weeks"], [156, "6 to 12 months"], [226, "12 to 18 months"], [292, "2 years"]];
  const reach = [86, 86, 86, 156, 292][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Healing" title="Weeks to heal, months to settle" label="How long it takes" credit={at === 1 ? medsCredit : ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bone knitting together above a timeline from the break to two years">
      <LongBone x={82} y={60} crack={at <= 1} knit={at === 2 || at === 3} lump={at === 4} />
      <path d="M26 148 H292" stroke={LINE} strokeWidth="8" strokeLinecap="round" /><path d={`M26 148 H${reach}`} stroke={INK} strokeWidth="8" strokeLinecap="round" />
      {ticks.map(([tx, label], index) => <g key={label}><circle cx={tx} cy={148} r="7" fill={tx <= reach ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={tx} y={index % 2 ? 132 : 172} size={10}>{label}</W></g>)}
      {at === 0 && <><W x={238} y={52} size={16} serif fill={INK}>6 to 8 weeks</W><W x={238} y={72} size={10}>to heal, maybe longer</W></>}
      {at === 1 && <List x={172} y={38} gap={22} lines={["Smoking", "Diabetes", "Ibuprofen or naproxen"]} />}
      {at === 2 && <List x={172} y={38} gap={22} lines={["Protein-rich food", "No smoking", "Rest; take it slow"]} />}
      {at === 3 && <Lines x={238} y={50} lines={["Stiff, weak, swollen:", "normal, and improves"]} />}
      {at === 4 && <Lines x={238} y={50} lines={["A lump can form:", "this is normal"]} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** One stage of walking: crutch tips (`tips`), a stick (`stick`) and two feet, the injured one pale until `full`. */
const Prints = ({ x, y, tips = 0, stick = false, full = false, lit = true }: { x: number; y: number; tips?: number; stick?: boolean; full?: boolean; lit?: boolean }) =>
  <g opacity={lit ? 1 : 0.35}>
    <ellipse cx={x - 8} cy={y} rx="6" ry="11" fill={INK} /><ellipse cx={x + 8} cy={y + 10} rx="6" ry="11" fill={full ? INK : LINE} stroke={INK} strokeWidth="1.5" />
    {tips >= 1 && <circle cx={x + 24} cy={y + 2} r="4.5" fill={GOLD} />}{tips >= 2 && <circle cx={x - 24} cy={y + 2} r="4.5" fill={GOLD} />}
    {stick && <rect x={x + 20} y={y - 2} width="8" height="8" rx="2" fill={GOLD} />}
  </g>;

function AfxCrutchSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Your team says how much weight", "Crutches: steadier than a stick", "More weight as your pain allows", "Two crutches, one, a stick, then none", "Get your balance before you move"];
  const stages = [{ tips: 2 }, { tips: 1 }, { stick: true }, { full: true }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Weight bearing" title="From two crutches to none" label="Putting weight on it" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Footprints going from two crutch marks beside one foot, to one crutch, to a stick, to two feet">
      {at !== 1 && stages.map((stage, index) => <Prints key={index} x={48 + index * 74} y={150} {...stage} full={stage.full || (at === 2 && index >= 2)} lit={at === 3 || at === 2} />)}
      {at === 0 && <><Box x={160} y={46} w={210} text="Your team says how much" lit /><Lines x={160} y={82} lines={["You may be told to keep", "weight off it at first"]} /></>}
      {at === 1 && <><Stick x={60} y={130} h={84} /><Crutch x={150} y={130} h={86} /><Crutch x={170} y={130} h={86} /><Frame x={244} y={130} />
        <W x={66} y={152} size={10}>Stick</W><W x={160} y={152} size={10}>Crutches</W><W x={258} y={152} size={10}>Frame</W><Arrow d="M60 172 H262" head="M255 166 L262 172 L255 178" stroke={SOFT} /><W x={160} y={188} size={9.5}>steadier</W></>}
      {at === 2 && <><Lines x={160} y={46} lines={["Hard at first: your body", "is protecting the injury"]} size={10.5} /><W x={160} y={96} size={10}>Then more weight as pain settles</W></>}
      {at === 3 && <>{["Two crutches", "One crutch", "A stick", "None"].map((label, index) => <W key={label} x={48 + index * 74} y={122} size={10}>{label}</W>)}<Lines x={160} y={50} lines={["One crutch goes in the", "hand opposite the injury"]} /></>}
      {at === 4 && <><path d="M24 104 V70 H50 V104 M24 86 H50" stroke={TEXT} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" /><Person x={76} y={92} scale={1.2} />
        <Lines x={226} y={44} lines={["Stand up slowly", "Get your balance", "Keep the leg moving"]} gap={20} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** A foot from the side, the heel at (x, y), tipped `tilt` degrees (positive points the toes up). */
const Foot = ({ x, y, tilt = 0, fill = WHITE }: { x: number; y: number; tilt?: number; fill?: string }) =>
  <g transform={`rotate(${-tilt} ${x} ${y})`}><path d={`M${x} ${y - 30} V${y - 6} C${x} ${y + 2} ${x + 4} ${y + 4} ${x + 10} ${y + 4} H${x + 44} C${x + 52} ${y + 4} ${x + 52} ${y - 6} ${x + 44} ${y - 8} L${x + 14} ${y - 16} V${y - 30}`} fill={fill} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /></g>;

function AfxAnkleMoves(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["In a cast: knee, thigh and toe moves", "Foot up and down, circles: 10 each", "Calf raises and one-leg balance", "Sharp shooting pain? Ease off", "Short-term goals, and allow setbacks"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercises" title="Toes first, then balance" label="Ankle exercises" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Exercise outlines in order: toes wiggling in a cast, the foot pointing up and down, a calf raise at a chair and standing on one leg">
      {at === 0 && <><LegSide x={62} y={30} cast /><Arrow d="M122 138 C134 130 136 116 128 106" head="M136 110 L128 106 L126 114" /><Arrow d="M30 40 C20 28 26 16 40 14" head="M32 10 L40 14 L34 21" />
        <List x={166} y={50} gap={28} lines={["Squeeze buttocks", "Bend the knee up", "Tighten the thigh", "Wiggle your toes"]} /></>}
      {at === 1 && <><Foot x={30} y={110} tilt={14} /><Arrow d="M86 70 C96 82 96 98 88 108" head="M96 104 L88 108 L85 100" />
        <Foot x={124} y={110} /><circle cx="176" cy="96" r="14" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="10 5" />
        <g transform="translate(262 96)"><ellipse cx="-12" cy="0" rx="9" ry="22" transform="rotate(-16 -12 0)" fill={WHITE} stroke={INK} strokeWidth="2.5" /><ellipse cx="12" cy="0" rx="9" ry="22" transform="rotate(16 12 0)" fill={WHITE} stroke={INK} strokeWidth="2.5" /></g>
        <W x={58} y={140} size={10}>Up and down</W><W x={150} y={140} size={10}>Circles</W><W x={262} y={140} size={10}>Toes apart</W><W x={160} y={176} size={10}>10 times, 3 to 4 times a day</W></>}
      {at === 2 && <><path d="M24 132 V80 H50 V132 M24 106 H50" stroke={TEXT} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" /><Figure x={80} y={76} stride={3} hand={[50, 80]} /><path d="M70 132 L86 132" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        <path d="M220 30 V138" stroke={TEXT} strokeWidth="5" strokeLinecap="round" /><circle cx="252" cy="20" r="11" fill={INK} /><path d="M252 30 V74 M252 74 V132 M252 74 L266 98 L258 104 M252 40 L226 56" stroke={INK} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <Lines x={80} y={160} lines={["Calf raise:", "up to 3 sets of 10"]} /><Lines x={246} y={160} lines={["One-leg balance:", "aim for 30 seconds"]} /></>}
      {at === 3 && <><PainScale x={41} y={46} upTo={5} /><W x={160} y={110} size={10}>Keep it within 0 to 5</W><Box x={160} y={138} w={210} text="Sharp shooting pain: ease off" lit size={10} /><W x={160} y={176} size={10}>Should settle within 24 hours</W></>}
      {at === 4 && <><path d="M20 160 H50 V136 H80 V112 H96 V124 H124 V92 H150" fill="none" stroke={INK} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" /><path d="M150 92 V52" stroke={INK} strokeWidth="3" /><path d="M150 52 L176 60 L150 68 Z" fill={GOLD} />
        <W x={110} y={148} size={9.5}>a setback</W><Lines x={248} y={48} lines={["Not enough: no benefit", "Too much: may do harm"]} /><Box x={248} y={110} w={130} text="Short-term goals" lit /><W x={248} y={144} size={10}>Pace your activities</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AfxRaisedLeg(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Swelling is the start of healing", "Foot above knee, knee above hip", "Wrapped ice for 10 to 15 minutes", "Painkillers work best taken sooner", "Some discomfort, changing day to day"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Swelling and pain" title="Foot up, ice wrapped, ahead of pain" label="Swelling and pain" credit={at === 3 ? medsCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A leg raised on stacked pillows above the level of the hip, with a towel-wrapped ice pack">
      <Pillow x={84} y={154} w={72} h={20} /><Pillow x={90} y={134} w={60} h={20} />
      <path d="M12 168 L58 150" stroke={INK} strokeWidth="24" strokeLinecap="round" /><path d="M12 168 L58 150" stroke={WHITE} strokeWidth="19" strokeLinecap="round" />
      <LegSide x={58} y={150} rotate={-104} scale={0.6} />
      {at === 0 && <><ellipse cx="118" cy="132" rx="26" ry="18" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" className={still ? undefined : "lib-why-pulse"} />
        <Box x={238} y={44} w={150} text="The start of healing" lit /><Lines x={238} y={80} lines={["Changes with position,", "activity, time of day"]} /><W x={238} y={132} size={10}>Can last for months</W></>}
      {at === 1 && <><path d="M12 168 H36 M66 150 H82 M120 102 H148" stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 3" /><W x={24} y={186} size={9.5}>hip</W><W x={60} y={136} size={9.5}>knee</W><W x={134} y={92} size={9.5}>foot</W>
        <List x={170} y={50} gap={28} lines={["Foot above the knee", "Knee above the hip", "Wriggle your toes", "Pillows at night"]} /></>}
      {at === 2 && <><ColdPack x={124} y={110} /><Clock x={40} y={60} r={20} hand={1.2} />
        <Box x={238} y={44} w={150} text="10 to 15 minutes" lit /><W x={238} y={78} size={10}>Wrapped in a damp towel</W><W x={238} y={98} size={10}>Pale skin? Stop</W><Lines x={238} y={140} lines={["Heat and alcohol", "can add swelling"]} /></>}
      {at === 3 && <><Pill x={44} y={60} /><Clock x={110} y={60} r={20} hand={0.6} />
        <Lines x={238} y={50} lines={["Take them sooner,", "not once pain is bad"]} /><Box x={238} y={112} w={150} text="A pharmacist can advise" lit size={10} /></>}
      {at === 4 && <><g stroke={GOLD} strokeWidth="3" strokeLinecap="round">{[0, 1, 2].map(index => { const a = index * Math.PI / 3; return <path key={index} d={`M${40 - 16 * Math.cos(a)} ${60 - 16 * Math.sin(a)} L${40 + 16 * Math.cos(a)} ${60 + 16 * Math.sin(a)}`} />; })}</g>
        <List x={166} y={50} gap={30} lines={["Some discomfort: normal", "Changes day to day", "Nearby joints ache", "Colder weather aches"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** A standing person from the front, one leg in a cast; feet at y 184. */
const Body = () =>
  <g strokeLinecap="round" strokeLinejoin="round">
    <circle cx="68" cy="34" r="13" fill={INK} />
    <path d="M48 54 H88 L92 112 H44 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
    <path d="M48 58 L36 104 M88 58 L100 104" stroke={INK} strokeWidth="6" fill="none" />
    <path d="M58 112 V176 M78 112 V140" stroke={INK} strokeWidth="9" fill="none" />
    <rect x="70" y="136" width="18" height="44" rx="5" fill={TINT} stroke={INK} strokeWidth="2.5" />
    <path d="M50 182 H64" stroke={INK} strokeWidth="6" /><path d="M74 182 H94" stroke={INK} strokeWidth="5" />
  </g>;

function AfxLegZones(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Tight cast, blue toes, worse pain: 111", "Calf pain and swelling: urgent GP, 111", "Sudden breathlessness: 999 or A&E", "Sudden, severe pain: 999 or A&E", "Red wound or fever: contact your team"];
  const zone = [[86, 180, 14], [79, 150, 20], [68, 78, 24], [79, 156, 30], [80, 172, 16]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Warning signs" title="Know which signs need 999" label="Warning signs" credit={urgentCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A standing person with one leg in a cast, with the toes, calf or chest circled beside the signs to look for">
      <Body /><Ring x={zone[0]} y={zone[1]} r={zone[2]} still={still} />
      {at === 0 && <><Box x={226} y={34} w={150} text="Get help from NHS 111" lit size={10} /><List x={154} y={64} gap={23} lines={["Pain getting worse", "Very hot or shivery", "Numb or burning toes", "Cast tight, rubbing, loose", "Smell or discharge"]} /></>}
      {at === 1 && <><Box x={226} y={34} w={150} text="Urgent GP or NHS 111" size={10} /><List x={154} y={66} gap={23} lines={["Throbbing calf pain", "Swelling", "Red or darkened skin"]} />
        <Box x={226} y={146} w={150} text="Breathless? 999 or A&E" lit size={10} /><W x={226} y={176} size={10}>or chest pain</W></>}
      {at === 2 && <><Box x={226} y={36} w={150} text="Call 999 or go to A&E" lit size={10} /><List x={150} y={70} gap={24} lines={["Sudden breathing trouble", "Chest or upper back pain", "A very fast heartbeat"]} /><W x={226} y={162} size={10}>Complete any course given</W></>}
      {at === 3 && <><Box x={226} y={36} w={150} text="Call 999 or go to A&E" lit size={10} /><W x={226} y={72} size={10.5}>Sudden, severe pain</W><Lines x={226} y={98} lines={["It can follow a cast", "that is too tight"]} /><W x={226} y={150} size={10}>Burning pain, numbness</W></>}
      {at === 4 && <><Box x={226} y={36} w={150} text="Contact your team" lit size={10} /><List x={154} y={70} gap={24} lines={["Red, swollen wound", "A fever", "Lost feeling or movement"]} /><Box x={226} y={162} w={150} text="Do not drive to A&E" size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AfxHomeCrutches(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Stairs hard? Perhaps a bed downstairs", "Clear rugs and mats; learn the stairs", "Raised seat, rails, a non-slip mat", "Keep the cast dry; no baths in it", "Carry nothing heavy; rest it raised"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="At home" title="A home that works on crutches" label="Getting around at home" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A house cut away to show a bed downstairs, a banister on the stairs and a rug crossed out">
      <path d="M12 64 L80 24 L148 64" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><rect x="20" y="64" width="120" height="120" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M20 124 H96" stroke={INK} strokeWidth="3" />
      <path d="M96 184 V172 H104 V160 H112 V148 H120 V136 H128 V124 H140" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M96 160 L132 112" stroke={at === 1 ? GOLD : SOFT} strokeWidth={at === 1 ? 4 : 2.5} strokeLinecap="round" />
      {at === 0 && <><Bed x={26} y={162} w={60} /><Box x={238} y={44} w={150} text="An OT can assess you" lit size={10} /><Lines x={238} y={80} lines={["Stairs hard? A bed", "or commode downstairs"]} /><Lines x={238} y={132} lines={["Help with washing", "and dressing too"]} /></>}
      {at === 1 && <><rect x="30" y="112" width="40" height="8" rx="3" fill={TINT} stroke={INK} strokeWidth="1.5" /><Cross x={50} y={116} s={9} /><Crutch x={70} y={184} h={50} />
        <List x={164} y={52} gap={30} lines={["A walking aid, shown", "Stairs with crutches", "Clear rugs and mats", "No trip hazards"]} /></>}
      {at === 2 && <><path d="M40 184 V160 H66 V184 M34 160 H72" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" /><rect x="36" y="150" width="34" height="8" rx="3" fill={GOLD} /><path d="M80 140 V170" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <List x={164} y={50} gap={28} lines={["Raised toilet seat", "Bath or shower rail", "Non-slip mat", "Sock and tights aids"]} /><W x={236} y={168} size={10}>Council assessment is free</W></>}
      {at === 3 && <><path d="M44 74 V86 M30 86 H58" stroke={INK} strokeWidth="3" strokeLinecap="round" />{[36, 44, 52].map(dx => <path key={dx} d={`M${dx} 94 V104`} stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" />)}<LegSide x={74} y={74} scale={0.36} cast />
        <Box x={238} y={44} w={150} text="Keep the cast dry" lit /><Lines x={238} y={78} lines={["Covers for washing;", "no baths in a cast"]} /><Lines x={238} y={130} lines={["Boot off to wash,", "on to stand and walk"]} /></>}
      {at === 4 && <><rect x="30" y="150" width="34" height="30" rx="3" fill={TINT} stroke={INK} strokeWidth="2.5" /><Cross x={47} y={165} />
        <rect x="30" y="96" width="44" height="20" rx="4" fill={TINT} stroke={INK} strokeWidth="2" /><LegSide x={34} y={84} rotate={-90} scale={0.3} />
        <Box x={238} y={50} w={140} text="Nothing heavy" lit /><Lines x={238} y={88} lines={["Rest and raise", "your ankle when", "you can"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AfxPedalStop(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["No driving in a cast or a boot", "A pain-free emergency stop comes first", "Desk work can start almost at once", "Back once you can do normal duties"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Driving and work" title="Pedals, insurer, then the road" label="Driving and work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A foot by the car pedals ready to press the brake, beside the checks before driving">
      {(at === 0 || at === 1) && <><path d="M16 60 H150" stroke={INK} strokeWidth="4" strokeLinecap="round" />{[[70, 18], [104, 24], [136, 12]].map(([px, pw]) => <g key={px}><path d={`M${px} 60 V112`} stroke={TEXT} strokeWidth="4" /><rect x={px - pw / 2} y={112} width={pw} height="22" rx="4" fill={px === 104 && at === 1 ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" /></g>)}
        <LegSide x={24} y={70} rotate={-30} scale={0.62} boot={at === 0} />{at === 0 && <Cross x={104} y={150} />}</>}
      {at === 0 && <><Box x={238} y={44} w={150} text="Not in a cast or boot" lit size={10} /><Lines x={238} y={80} lines={["Left ankle? You may", "drive an automatic"]} /><W x={238} y={130} size={10}>Check with your team</W></>}
      {at === 1 && <><Box x={238} y={40} w={160} text="Emergency stop, no pain" lit size={10} /><Lines x={238} y={74} lines={["Usually 6 to 8 weeks", "after the plaster is off"]} /><W x={238} y={120} size={10}>9 to 12 weeks after surgery</W><Box x={238} y={156} w={140} text="Tell your insurer" /></>}
      {at === 2 && <><path d="M18 100 H120 M28 100 V168 M110 100 V168" stroke={INK} strokeWidth="4" strokeLinecap="round" /><rect x="40" y="74" width="40" height="26" rx="3" fill={TINT} stroke={INK} strokeWidth="2" />
        <rect x="112" y="150" width="34" height="18" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><LegSide x={92} y={128} rotate={-80} scale={0.3} />
        <Box x={238} y={44} w={160} text="Desk work: almost at once" lit size={10} /><W x={238} y={78} size={10}>if you can raise your foot</W><Lines x={238} y={112} lines={["Active work: likely", "at least 2 months"]} /><W x={238} y={162} size={10}>A sick note, if needed</W></>}
      {at === 3 && <><rect x="34" y="40" width="80" height="120" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="56" y="34" width="36" height="12" rx="3" fill={INK} />
        <path d="M54 102 l14 14 l26 -30" stroke={GOLD} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <Lines x={238} y={50} lines={["Back when you can do", "your normal duties"]} /><Box x={238} y={110} w={160} text="No sign-off needed" lit size={10} /><Lines x={238} y={144} lines={["Talk timing over", "with your doctor"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** A walking (or, with `run`, jogging) figure, hips at (x, y). */
const Walker = ({ x, y, run = false, dim = false }: { x: number; y: number; run?: boolean; dim?: boolean }) =>
  <g strokeLinecap="round" strokeLinejoin="round" fill="none" opacity={dim ? 0.35 : 1}>
    <path d={run ? `M${x} ${y} L${x + 16} ${y + 20} L${x + 8} ${y + 40} M${x} ${y} L${x - 14} ${y + 16} L${x - 26} ${y + 24}` : `M${x} ${y} L${x + 10} ${y + 40} M${x} ${y} L${x - 10} ${y + 40}`} stroke={INK} strokeWidth="6" />
    <path d={`M${x} ${y} L${x + (run ? 8 : 2)} ${y - 36}`} stroke={INK} strokeWidth="8" />
    <path d={run ? `M${x + 6} ${y - 30} L${x + 20} ${y - 18} M${x + 6} ${y - 30} L${x - 8} ${y - 20}` : `M${x + 2} ${y - 30} L${x + 12} ${y - 10} M${x + 2} ${y - 30} L${x - 8} ${y - 10}`} stroke={INK} strokeWidth="5" />
    <circle cx={x + (run ? 10 : 3)} cy={y - 48} r="9" fill={INK} stroke="none" />
  </g>;

function AfxWalkRunTrack(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Most walk reasonably well by 6 weeks", "No sport for 6 weeks, then build up", "Heel raises, balance, then squats", "Allow setbacks; chart your successes", "150 minutes of activity a week"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Walking and sport" title="Six weeks off, six weeks back" label="Back to walking and sport" credit={at === 2 ? moveCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A track with a walking figure at six weeks and a jogging figure at twelve weeks">
      {at <= 2 && <><path d="M20 150 H300" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
        {[[30, "Start"], [140, "6 weeks"], [260, "12 weeks"]].map(([tx, label]) => <g key={String(label)}><circle cx={Number(tx)} cy={150} r="7" fill={INK} /><W x={Number(tx)} y={176} size={10}>{label}</W></g>)}
        <Walker x={140} y={104} dim={at === 1} /><Walker x={260} y={104} run dim={at === 0} /></>}
      {at === 0 && <Lines x={64} y={52} lines={["A daily brisk walk", "helps blood flow"]} />}
      {at === 1 && <><path d="M140 150 H260" stroke={INK} strokeWidth="8" strokeLinecap="round" /><Lines x={160} y={28} gap={14} lines={["Most: no running or sport for", "6 weeks, then 6 weeks building"]} /></>}
      {at === 2 && <><Lines x={64} y={50} lines={["Heel raises,", "one-leg balance,", "then squats"]} /><path d="M140 150 H260" stroke={INK} strokeWidth="8" strokeLinecap="round" strokeDasharray="4 8" /></>}
      {at === 3 && <><path d="M24 160 H150 M24 160 V40" stroke={INK} strokeWidth="2.5" strokeLinecap="round" /><path d="M30 146 L56 124 L76 132 L100 98 L118 106 L144 60" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="144" cy="60" r="6" fill={INK} />
        <Lines x={238} y={50} lines={["Plan short-term goals", "and share them"]} /><Box x={238} y={112} w={150} text="Setbacks happen" lit /><Lines x={238} y={146} lines={["Loss of confidence", "is common too"]} /></>}
      {at === 4 && <><W x={160} y={60} size={20} serif fill={INK}>150 minutes a week</W><W x={160} y={82} size={10}>of moderate activity, like brisk walking</W><Week x={76} y={110} lit={[1, 4]} /><W x={160} y={160} size={10}>Strengthening on at least 2 days</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AfxYearStrip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Swelling for up to a year is normal", "Moving it stops it getting stiff", "A bony lump can form; it is normal", "Arthritis can follow a serious injury", "Not progressing? Contact your clinic"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Longer term" title="Why it still feels different" label="Stiffness and swelling" credit={at === 0 ? ideaCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A strip of twelve months with a swollen ankle outline gently fading along it">
      {Array.from({ length: 12 }, (_, index) => <g key={index}><rect x={16 + index * 24} y={144} width="20" height="22" rx="4" fill={at === 0 ? INK : WHITE} stroke={INK} strokeWidth="1.5" opacity={at === 0 ? 1 - index * 0.06 : 1} />{(index === 0 || index === 5 || index === 11) && <W x={26 + index * 24} y={184} size={10}>{`Month ${index + 1}`}</W>}</g>)}
      {at === 0 && <>{[[40, 26], [160, 18], [280, 10]].map(([cx, rr]) => <g key={cx}><LegSide x={cx - 10} y={56} scale={0.42} /><ellipse cx={cx - 10} cy={102} rx={rr} ry={rr * 0.7} fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="5 4" /></g>)}<W x={160} y={36} size={10.5}>Swelling and discomfort for up to a year</W></>}
      {at === 1 && <><LegSide x={56} y={32} scale={0.72} /><Arrow d="M118 92 C128 100 128 116 118 124" head="M126 120 L118 124 L116 116" />
        <Lines x={238} y={48} lines={["Weak and wobbly at", "first: use it as normal"]} /><Lines x={238} y={98} lines={["Walk a little further,", "guided by your pain"]} /></>}
      {at === 2 && <><AnkleBones x={70} y={20} scale={0.66} lump at={96} /><Lines x={238} y={44} lines={["Dry skin: wash gently,", "unscented moisturiser"]} /><Box x={238} y={92} w={150} text="A bony lump: normal" lit /><W x={238} y={126} size={10}>Reshapes over 12 to 18 months</W></>}
      {at === 3 && <><AnkleBones x={70} y={20} scale={0.66} worn /><Lines x={238} y={44} lines={["After a serious injury,", "arthritis is a risk"]} /><Lines x={238} y={96} lines={["Some have ongoing", "stiffness and pain"]} /></>}
      {at === 4 && <><Phone x={70} y={80} w={44} h={78} /><Box x={238} y={44} w={140} text="Fracture clinic" lit /><W x={238} y={78} size={10}>or physiotherapy team</W><Lines x={238} y={108} lines={["Persistent pain?", "See a GP"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function BreaksPieceView({ piece, ...props }: { piece: BreaksPiece } & PieceProps) {
  switch (piece) {
    case "wfx-forearm-crack": return <WfxForearmCrack {...props} />;
    case "wfx-three-tags": return <WfxThreeTags {...props} />;
    case "wfx-cast-wires": return <WfxCastWires {...props} />;
    case "wfx-bone-scan": return <WfxBoneScan {...props} />;
    case "wfx-raised-cast": return <WfxRaisedCast {...props} />;
    case "wfx-hand-poses": return <WfxHandPoses {...props} />;
    case "wfx-pillow-arm": return <WfxPillowArm {...props} />;
    case "wfx-fingertips": return <WfxFingertips {...props} />;
    case "wfx-one-hand-kitchen": return <WfxOneHandKitchen {...props} />;
    case "wfx-wheel-hands": return <WfxWheelHands {...props} />;
    case "wfx-lit-stairs": return <WfxLitStairs {...props} />;
    case "wfx-long-path": return <WfxLongPath {...props} />;
    case "afx-three-bones": return <AfxThreeBones {...props} />;
    case "afx-ligament-bone": return <AfxLigamentBone {...props} />;
    case "afx-boot-cast-plate": return <AfxBootCastPlate {...props} />;
    case "afx-healing-ruler": return <AfxHealingRuler {...props} />;
    case "afx-crutch-steps": return <AfxCrutchSteps {...props} />;
    case "afx-ankle-moves": return <AfxAnkleMoves {...props} />;
    case "afx-raised-leg": return <AfxRaisedLeg {...props} />;
    case "afx-leg-zones": return <AfxLegZones {...props} />;
    case "afx-home-crutches": return <AfxHomeCrutches {...props} />;
    case "afx-pedal-stop": return <AfxPedalStop {...props} />;
    case "afx-walk-run-track": return <AfxWalkRunTrack {...props} />;
    case "afx-year-strip": return <AfxYearStrip {...props} />;
    default: return null;
  }
}
