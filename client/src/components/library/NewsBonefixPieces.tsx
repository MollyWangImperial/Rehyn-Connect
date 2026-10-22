import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { BONEFIX_PIECES, type BonefixPiece } from "@/content/bonefix-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Knee } from "./NewsBonesPieces";

// The Hip fracture and Paget's disease of bone pages' own pieces (content/bonefix-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isBonefixPiece = (piece: NewsPiece): piece is BonefixPiece => (BONEFIX_PIECES as readonly string[]).includes(piece);

const urgentCredit = "Illustration: Rehyn. If you are worried, get help straight away.";
const medsCredit = "Illustration: Rehyn. Check with a pharmacist or GP.";
const moveCredit = "Illustration: Rehyn. Follow your own physiotherapist's advice.";
const ideaCredit = "Illustration: Rehyn. A picture of the idea, not a measurement.";

// ==== Shared drawing helpers ================================================================================

/** The caption under a picture. */
const Say = ({ children }: { children: ReactNode }) => <W x={160} y={206} size={11}>{children}</W>;
/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 24, size = 10.5, dim = false }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number; dim?: boolean }) =>
  <g opacity={dim ? 0.4 : 1}><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="8" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
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
/** A calendar page. */
const Cal = ({ x, y, w = 40, lit = false }: { x: number; y: number; w?: number; lit?: boolean }) =>
  <g><rect x={x - w / 2} y={y - w * 0.42} width={w} height={w * 0.86} rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - w / 2} y={y - w * 0.42} width={w} height={w * 0.22} rx="3" fill={lit ? GOLD : INK} />
    {[0, 1, 2].map(row => [0, 1, 2].map(col => <circle key={`${row}${col}`} cx={x - w * 0.25 + col * w * 0.25} cy={y + row * w * 0.17} r={w * 0.045} fill={SOFT} />))}</g>;
/** A week of days from x, `step` apart; `lit` days are filled. */
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const Week = ({ x, y, lit, step = 24 }: { x: number; y: number; lit: number[]; step?: number }) =>
  <g>{DAYS.map((day, index) => { const on = lit.includes(index); return <g key={index}><rect x={x + index * step} y={y} width={step - 4} height="26" rx="5" fill={on ? INK : WHITE} stroke={INK} strokeWidth="1.5" /><W x={x + index * step + (step - 4) / 2} y={y + 17} size={10} fill={on ? WHITE : TEXT}>{day}</W></g>; })}</g>;
/** A simple figure: hips at (x, y), the body leaning `lean` degrees forward (to the right). */
const Figure = ({ x, y, lean = 0, legs = INK, arms = INK, hand }: { x: number; y: number; lean?: number; legs?: string; arms?: string; hand?: [number, number] }) => {
  const a = lean * Math.PI / 180;
  const sx = x + 44 * Math.sin(a), sy = y - 44 * Math.cos(a);
  const hx = x + 60 * Math.sin(a), hy = y - 60 * Math.cos(a);
  const [ax, ay] = hand ?? [sx + 8, sy + 34];
  return <g strokeLinecap="round" strokeLinejoin="round" fill="none">
    <path d={`M${x} ${y} L${x - 9} ${y + 54} M${x} ${y} L${x + 9} ${y + 54}`} stroke={legs} strokeWidth="7" />
    <path d={`M${x} ${y} L${sx} ${sy}`} stroke={INK} strokeWidth="9" />
    <path d={`M${sx} ${sy} L${ax} ${ay}`} stroke={arms} strokeWidth="6" />
    <circle cx={hx} cy={hy} r="11" fill={INK} stroke="none" />
  </g>;
};
/** A walking frame, side on, its feet at (x, y). */
const Frame = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <path d={`M${x} ${y} V${y - 52} H${x + 30} V${y} M${x + 4} ${y - 28} H${x + 26}`} fill="none" stroke={lit ? GOLD : TEXT} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />;
/** A bed seen from the side: the mattress top at y. */
const Bed = ({ x, y, w = 110 }: { x: number; y: number; w?: number }) =>
  <g><path d={`M${x + 4} ${y} V${y - 26} M${x + 4} ${y + 14} V${y + 30} M${x + w - 4} ${y + 14} V${y + 30}`} stroke={INK} strokeWidth="4" strokeLinecap="round" /><rect x={x} y={y} width={w} height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /></g>;
/** A crescent moon. */
const Moon = ({ x, y }: { x: number; y: number }) => <path d={`M${x} ${y - 20} a20 20 0 1 0 22 26 a15 15 0 1 1 -22 -26 Z`} fill={GOLD} />;
/** A hot water bottle centred on (x, y). */
const Bottle = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 6} y={y - 30} width="12" height="12" rx="2" fill={INK} /><rect x={x - 20} y={y - 20} width="40" height="44" rx="12" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
    {[-8, 2, 12].map(dy => <path key={dy} d={`M${x - 12} ${y + dy} H${x + 12}`} stroke={lit ? WHITE : SOFT} strokeWidth="2" />)}</g>;
/** A cold pack wrapped in a towel, centred on (x, y). */
const ColdPack = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 28} y={y - 18} width="56" height="36" rx="8" fill={TINT} stroke={INK} strokeWidth="2.5" />
    {[[-14, -6], [0, 4], [12, -4], [-8, 8], [14, 8]].map(([dx, dy]) => <rect key={`${dx}${dy}`} x={x + dx - 3} y={y + dy - 3} width="6" height="6" rx="1" fill={WHITE} stroke={SOFT} strokeWidth="1" />)}
    <path d={`M${x - 32} ${y - 8} H${x + 32} M${x - 32} ${y + 10} H${x + 32}`} stroke={INK} strokeWidth="2" strokeDasharray="4 3" /></g>;
/** A pain scale from 0 to 10, from x across 242, at height y; boxes up to `upTo` are filled. */
const PainScale = ({ x, y, upTo }: { x: number; y: number; upTo: number }) =>
  <g>{Array.from({ length: 11 }, (_, index) => <rect key={index} x={x + index * 22} y={y} width="18" height="16" rx="4" fill={index <= upTo ? INK : WHITE} stroke={INK} strokeWidth="1.5" />)}
    {[0, 5, 10].map(n => <W key={n} x={x + n * 22 + 9} y={y + 30} size={10}>{String(n)}</W>)}</g>;
/** A car, side on, centred on (x, y). */
const Car = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 26} ${y + 6} V${y - 4} L${x - 14} ${y - 6} L${x - 6} ${y - 16} H${x + 12} L${x + 20} ${y - 6} L${x + 26} ${y - 4} V${y + 6} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx={x - 14} cy={y + 7} r="5" fill={INK} /><circle cx={x + 14} cy={y + 7} r="5" fill={INK} /></g>;
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
/** The hip joint from the front: the ball of the thigh bone in its socket, the neck, and the shaft below.
 *  `crack` marks a break across the neck (`healed` fades it); `fixed` adds a screw and plate; `replaced` an artificial ball. */
const HipJoint = ({ x, y, scale = 1, crack = false, healed = false, fixed = false, replaced = false }: { x: number; y: number; scale?: number; crack?: boolean; healed?: boolean; fixed?: boolean; replaced?: boolean }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} strokeLinejoin="round" strokeLinecap="round">
    <path d="M2 4 L34 30 L40 130" fill="none" stroke={INK} strokeWidth="30" />
    <circle cx="42" cy="26" r="14" fill={INK} />
    <path d="M2 4 L34 30 L40 130" fill="none" stroke={WHITE} strokeWidth="24" />
    <circle cx="42" cy="26" r="11" fill={WHITE} />
    {replaced && <path d="M2 4 L30 30 L35 92" fill="none" stroke={GOLD} strokeWidth="7" />}
    <circle cx="0" cy="0" r="18" fill={replaced ? GOLD : WHITE} stroke={INK} strokeWidth="3" />
    {fixed && <><path d="M54 46 L6 8" stroke={TEXT} strokeWidth="5" /><rect x="51" y="40" width="9" height="70" rx="3" fill={TINT} stroke={INK} strokeWidth="2" />{[56, 76, 96].map(cy => <circle key={cy} cx="55.5" cy={cy} r="2.2" fill={INK} />)}</>}
    <path d="M-52 -24 C-64 -46 -50 -70 -20 -72 C6 -74 30 -60 32 -40 C33 -32 32 -24 28 -18 C18 -34 -14 -36 -26 -14 C-36 -12 -46 -16 -52 -24 Z" fill={TINT} stroke={INK} strokeWidth="3" />
    {crack && <path d="M27 6 L20 13 L24 17 L16 22 L9 29" fill="none" stroke={healed ? SOFT : GOLD} strokeWidth="3.5" strokeDasharray={healed ? "3 4" : undefined} />}
  </g>;
/** A simple skeleton from the front, top at (x, y), about 170 tall; gold `spots` mark bones. */
type Spot = "skull" | "spine" | "pelvis" | "thigh" | "shin" | "arm" | "knee" | "hip";
const SPOTS: Record<Spot, [number, number]> = { skull: [0, 14], spine: [0, 56], pelvis: [0, 90], thigh: [-13, 114], shin: [-15, 150], arm: [27, 64], knee: [-14, 130], hip: [-12, 96] };
const Body = ({ x, y, spots = [], bowed = false, dim = false }: { x: number; y: number; spots?: Spot[]; bowed?: boolean; dim?: boolean }) =>
  <g transform={`translate(${x} ${y})`} strokeLinecap="round" strokeLinejoin="round" opacity={dim ? 0.45 : 1}>
    <circle cx="0" cy="14" r="13" fill={WHITE} stroke={INK} strokeWidth="3" />
    {[0, 1, 2, 3, 4, 5].map(index => <rect key={index} x="-5" y={30 + index * 8.5} width="10" height="6" rx="2" fill={INK} />)}
    <path d="M-24 36 H24 M-24 36 L-30 92 M24 36 L30 92" stroke={INK} strokeWidth="5" fill="none" />
    <path d={bowed ? "M-12 98 L-14 130 C-26 146 -24 160 -16 170" : "M-12 98 L-14 130 L-16 170"} stroke={INK} strokeWidth="5" fill="none" />
    <path d="M12 98 L14 130 L16 170" stroke={INK} strokeWidth="5" fill="none" />
    <path d="M-20 82 H20 L14 98 H-14 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
    {spots.map(spot => <circle key={spot} cx={SPOTS[spot][0]} cy={SPOTS[spot][1]} r="7" fill={GOLD} />)}
  </g>;
/** A test tube centred on x, the liquid line at y. */
const Tube = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><path d={`M${x - 9} ${y - 34} V${y + 20} a9 9 0 0 0 18 0 V${y - 34}`} fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path d={`M${x - 7} ${y} V${y + 20} a7 7 0 0 0 14 0 V${y} Z`} fill={lit ? GOLD : SOFT} />
    <path d={`M${x - 13} ${y - 34} H${x + 13}`} stroke={INK} strokeWidth="3" strokeLinecap="round" /></g>;
/** A drip stand with its bag, the pole at x from y down. */
const Drip = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><path d={`M${x} ${y} V${y + 150} M${x - 18} ${y + 150} H${x + 18} M${x - 20} ${y + 4} H${x}`} stroke={INK} strokeWidth="3.5" strokeLinecap="round" fill="none" />
    <rect x={x - 34} y={y + 6} width="28" height="40" rx="8" fill={lit ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" />
    <path d={`M${x - 20} ${y + 46} V${y + 56} C${x - 20} ${y + 90} ${x + 30} ${y + 80} ${x + 46} ${y + 100}`} fill="none" stroke={SOFT} strokeWidth="2.5" /></g>;
/** A mobile phone centred on (x, y). */
const Phone = ({ x, y, w = 28, h = 48 }: { x: number; y: number; w?: number; h?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - w / 2 + 4} y={y - h / 2 + 6} width={w - 8} height={h - 20} rx="2" fill={TINT} /><circle cx={x} cy={y + h / 2 - 7} r="3" fill={INK} /></g>;
/** A simple house outline: walls from x to x + w, floor at y + h. */
const House = ({ x, y, w = 124, h = 104 }: { x: number; y: number; w?: number; h?: number }) =>
  <g strokeLinejoin="round"><path d={`M${x - 10} ${y} L${x + w / 2} ${y - 50} L${x + w + 10} ${y}`} fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" /><rect x={x} y={y} width={w} height={h} fill={WHITE} stroke={INK} strokeWidth="3" /></g>;

// ==== Hip fracture ==========================================================================================

function HipfxThighCrack(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["A break at the top of the thigh bone", "Hip and groin pain; cannot stand", "Severe pain after a fall: 999 or A&E", "Serious, and almost always surgery", "With osteoporosis it heals as normal"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A break at the top of the thigh" label="A hip fracture" credit={at === 2 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The hip joint, with a break across the neck of the thigh bone just below the ball of the joint">
      <HipJoint x={78} y={70} scale={0.8} crack healed={at === 4} />
      {at === 0 && <><Ring x={92} y={84} r={16} still={still} /><Box x={240} y={50} w={146} text="Top of the thigh bone" lit /><Box x={240} y={86} w={146} text="Close to the hip joint" /><Box x={240} y={122} w={146} text="Usually after a fall" /><W x={240} y={160} size={10}>Neck of femur fracture</W></>}
      {at === 1 && <List x={172} y={58} gap={30} lines={["Pain: hip, thigh, groin", "Cannot stand on the leg", "Leg may look shorter", "Swelling and bruising"]} />}
      {at === 2 && <><Box x={240} y={46} w={148} text="Call 999 or go to A&E" lit /><W x={240} y={82} size={10}>Severe pain after a fall</W><W x={240} y={100} size={10}>Cannot put weight on it</W><W x={240} y={118} size={10}>Tingling or no feeling</W><Box x={240} y={152} w={148} text="Do not drive to A&E" size={10} /></>}
      {at === 3 && <><Box x={240} y={50} w={150} text="Hospital straight away" lit /><Box x={240} y={86} w={150} text="Almost always surgery" /><Box x={240} y={122} w={150} text="Weeks or months" /><W x={240} y={156} size={10}>A higher risk of</W><W x={240} y={172} size={10}>another break</W></>}
      {at === 4 && <><Box x={240} y={64} w={140} text="Heals as normal" lit /><W x={240} y={100} size={10}>Osteoporosis does not</W><W x={240} y={116} size={10}>affect bone healing</W><W x={240} y={146} size={10}>Poor health: recovery</W><W x={240} y={162} size={10}>may take longer</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HipfxFallHoneycomb(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Usually a fall from standing height", "Weaker bones break more easily", "Family history, smoking, alcohol", "Falls: several risks together", "Had a fall? Tell your GP practice"];
  const figure = at === 0 || at === 3 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Why it happens" title="A small fall, a fragile bone" label="Falls and weaker bones" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person tripping from standing height beside a cross-section of bone with larger, weaker holes">
      {figure && <><path d="M20 168 H140" stroke={LINE} strokeWidth="3" strokeLinecap="round" /><Figure x={70} y={112} lean={at === 0 ? 18 : 0} hand={at === 0 ? [104, 86] : undefined} /></>}
      {at === 0 && <><path d="M28 50 V166 M22 50 H34 M22 166 H34" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" /><W x={232} y={58} size={10}>A fall from</W><W x={232} y={74} size={10}>standing height or less</W><Box x={232} y={110} w={150} text="Can mean weak bones" lit /><W x={232} y={146} size={10}>Even doing normal things</W></>}
      {at === 1 && <><Honeycomb x={96} y={84} r={46} /><Honeycomb x={224} y={84} r={46} weak /><W x={96} y={150} size={10.5}>Stronger</W><W x={224} y={150} size={10.5}>Weaker</W><W x={160} y={176} size={10}>Bone loss slowly rises after 35</W></>}
      {at === 2 && <><Honeycomb x={74} y={96} r={48} weak />{["A parent broke a hip", "Smoking", "Over 3 units a day", "Not being active"].map((label, index) => <Box key={label} x={222} y={44 + index * 36} w={150} text={label} lit={index === 0} />)}</>}
      {at === 3 && ["Weak muscles", "Poor balance", "Eyesight or hearing", "Some medicines"].map((label, index) => <Box key={label} x={216} y={44 + index * 36} w={150} text={label} />)}
      {at === 4 && <><Box x={218} y={56} w={168} text="Talk to your GP practice" lit /><W x={218} y={90} size={10}>even if you are not hurt</W><W x={218} y={124} size={10}>Many causes of falls</W><W x={218} y={140} size={10}>can be treated</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HipfxFixReplace(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Painkillers and an X-ray on arrival", "Fixed with screws, or part replaced", "Usually the same day or the next", "Up the day after, with a frame", "Leg swelling, breathless: 999 or A&E"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The operation" title="Fixed or replaced, then up next day" label="The operation" credit={at === 4 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two repaired hips: one fixed with a screw and plate, one with an artificial ball, and a walking frame">
      {at === 0 && <><rect x="24" y="20" width="120" height="164" rx="10" fill={TEXT} /><HipJoint x={74} y={74} scale={0.6} crack />
        <Pill x={232} y={52} /><W x={232} y={84} size={10}>Painkillers straight away</W><W x={232} y={118} size={10}>An X-ray to check,</W><W x={232} y={134} size={10}>then a plan</W></>}
      {at === 1 && <><HipJoint x={66} y={62} scale={0.7} fixed /><HipJoint x={196} y={62} scale={0.7} replaced />
        <W x={84} y={178} size={10}>Screws, nails, plates</W><W x={214} y={178} size={10}>Part or all replaced</W></>}
      {at === 2 && <><Box x={160} y={36} w={170} text="Surgery: either day" lit /><Cal x={100} y={84} w={54} /><Cal x={220} y={84} w={54} lit /><Arrow d="M134 84 H184" head="M177 78 L184 84 L177 90" />
        <W x={100} y={126} size={10}>The day you arrive</W><W x={220} y={126} size={10}>The next day</W><W x={160} y={158} size={10}>It may be delayed by an infection,</W><W x={160} y={174} size={10}>anaemia or heart problems</W></>}
      {at === 3 && <><Bed x={16} y={130} w={90} /><Figure x={146} y={112} hand={[170, 124]} /><Frame x={166} y={166} lit />
        <Box x={256} y={58} w={110} text="The day after" lit /><W x={256} y={94} size={10}>Out of bed</W><W x={256} y={110} size={10}>with a physio</W><W x={256} y={140} size={10}>Extra nutrition</W><W x={256} y={156} size={10}>helps recovery</W></>}
      {at === 4 && <><Box x={160} y={34} w={220} text="Call 999 or go to A&E" lit />
        <path d="M46 60 V118 C38 134 40 152 46 164 V172 H88 V164 L66 160 C72 146 72 132 66 118 V60" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <ellipse cx="56" cy="140" rx="17" ry="22" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" />
        <List x={110} y={82} gap={28} lines={["Pain and swelling in a leg", "and short of breath", "or chest pain"]} /><W x={200} y={170} size={10}>Clots can happen weeks later</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HipfxWeeksRuler(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Bone heals in about 6 to 12 weeks", "Usually 1 to 4 weeks in hospital", "Pain and swelling normal for 6 weeks", "Many things from 6 or 12 weeks", "Recovery goes on after hospital"];
  const ticks = [{ x: 30, t: "Day 1" }, { x: 100, t: "2 weeks" }, { x: 180, t: "6 weeks" }, { x: 262, t: "12 weeks" }];
  const lit = [[2, 3], [0], [0, 2], [2, 3], [3]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="How long" title="Weeks to heal, months to recover" label="Recovery time" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from the day after surgery to twelve weeks and beyond">
      <path d="M24 130 H296" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {at === 0 && <path d="M180 130 H262" stroke={INK} strokeWidth="8" strokeLinecap="round" />}
      {at === 1 && <path d="M30 130 H140" stroke={INK} strokeWidth="8" strokeLinecap="round" />}
      {at === 2 && <path d="M30 130 H180" stroke={INK} strokeWidth="8" strokeLinecap="round" />}
      {at === 4 && <Arrow d="M266 130 H294" head="M287 124 L294 130 L287 136" />}
      {ticks.map((tick, index) => <g key={tick.t}><circle cx={tick.x} cy={130} r={lit.includes(index) ? 9 : 6} fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={tick.x} y={156} size={10}>{tick.t}</W></g>)}
      {at === 0 && <><W x={160} y={46} size={10.5}>A broken bone usually heals in</W><W x={221} y={108} size={11}>6 to 12 weeks</W><W x={90} y={80} size={10}>A broken hip can</W><W x={90} y={96} size={10}>take longer</W></>}
      {at === 1 && <><Bed x={40} y={74} w={80} /><W x={232} y={70} size={11.5}>1 to 4 weeks</W><W x={232} y={88} size={10.5}>in hospital</W><W x={232} y={106} size={10}>Sometimes longer</W></>}
      {at === 2 && <><W x={160} y={42} size={10.5}>Pain and swelling are normal</W><rect x="88" y="90" width="24" height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M100 90 V104" stroke={SOFT} strokeWidth="2" /><W x={100} y={78} size={10}>Wound check</W>
        <path d="M164 92 H196 V100 C196 106 192 108 188 108 H172 C168 108 164 106 164 100 Z" fill={WHITE} stroke={INK} strokeWidth="2" /><Cross x={180} y={100} s={9} /><W x={180} y={78} size={10}>No bath</W></>}
      {at === 3 && <><W x={160} y={44} size={10}>From about 6 weeks</W><W x={160} y={60} size={10}>Light work, driving</W><W x={160} y={76} size={10}>if safe</W><Car x={160} y={104} />
        <W x={262} y={44} size={10}>From 12 weeks</W><W x={262} y={60} size={10}>Manual work</W><W x={262} y={76} size={10}>Running</W></>}
      {at === 4 && <><W x={150} y={46} size={10.5}>Fitness before the break</W><W x={150} y={62} size={10.5}>makes a difference</W><W x={150} y={92} size={10}>Some people use a stick or frame</W>
        <path d="M262 82 L282 66 L302 82 V110 H262 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><rect x="276" y="94" width="12" height="16" fill={TINT} stroke={INK} strokeWidth="1.5" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HipfxFootprints(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Up the day after the operation", "A frame first, then more each day", "Get up and dressed, even in hospital", "Even ground first, then further", "Bed and toilet: slow and controlled"];
  const steps = [100, 124, 150, 178, 208, 236, 262];
  const lit = [2, 3, 4, 7, 0][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Moving again" title="Every step builds on the last" label="Getting up and moving" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Footprints leading from a hospital bed towards a door, the steps getting longer">
      <Bed x={14} y={150} w={70} />
      <rect x="276" y="100" width="32" height="80" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="300" cy="142" r="3" fill={INK} />
      {steps.map((x, index) => <ellipse key={x} cx={x} cy={index % 2 ? 166 : 176} rx="7" ry="4.5" fill={index < lit ? INK : LINE} />)}
      {at === 0 && <><Cal x={110} y={62} w={48} lit /><W x={210} y={44} size={10.5}>The best chance</W><W x={210} y={60} size={10.5}>of recovery</W><W x={210} y={88} size={10}>Fewer chest infections</W><W x={210} y={104} size={10}>and blood clots</W></>}
      {at === 1 && <><Person x={124} y={80} scale={1.2} /><Frame x={146} y={98} lit /><W x={232} y={52} size={10.5}>A walking frame</W><W x={232} y={68} size={10.5}>at first</W><W x={232} y={96} size={10}>Take it steady</W></>}
      {at === 2 && <><path d="M100 44 L88 54 L96 66 L104 60 V96 H136 V60 L144 66 L152 54 L140 44 C134 52 106 52 100 44 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={226} y={52} size={10.5}>Up and dressed</W><W x={226} y={68} size={10.5}>each day</W><W x={226} y={96} size={10}>Keeps strength and routine</W></>}
      {at === 3 && <><Clock x={100} y={62} r={22} hand={1.6} /><W x={100} y={104} size={10}>5 minutes</W><W x={226} y={52} size={10.5}>Even surfaces,</W><W x={226} y={68} size={10.5}>then further</W><W x={226} y={96} size={10}>Walking outside</W><W x={226} y={110} size={10}>builds stamina</W></>}
      {at === 4 && <><Ring x={49} y={154} r={34} still={still} /><W x={190} y={42} size={10.5}>Back to the bed, legs square</W><W x={190} y={60} size={10.5}>Operated leg forward</W><W x={190} y={88} size={10}>Toilet: leg out, push with arms</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** Five small exercise outlines, side on, centred on cx with the bed or floor at y 96. */
const Pose = ({ kind, cx, lit }: { kind: number; cx: number; lit: boolean }) => {
  const line = { stroke: INK, strokeWidth: 4, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return <g opacity={lit ? 1 : 0.35}>
    <path d={`M${cx - 30} 98 H${cx + 30}`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />
    {kind === 0 && <><circle cx={cx - 22} cy={86} r="6" fill={INK} /><path d={`M${cx - 15} 90 L${cx + 4} 91 L${cx + 28} 91`} {...line} /><circle cx={cx + 14} cy={91} r="3.5" fill={GOLD} /></>}
    {kind === 1 && <><circle cx={cx - 22} cy={86} r="6" fill={INK} /><circle cx={cx + 10} cy={90} r="5" fill={TINT} stroke={INK} strokeWidth="1.5" /><path d={`M${cx - 15} 90 L${cx + 2} 91 L${cx + 10} 83 L${cx + 28} 83`} {...line} /></>}
    {kind === 2 && <><circle cx={cx - 24} cy={88} r="6" fill={INK} /><path d={`M${cx - 17} 91 L${cx + 2} 76 L${cx + 14} 68 L${cx + 20} 94`} {...line} /></>}
    {kind === 3 && <><path d={`M${cx + 4} 72 H${cx + 24} M${cx + 6} 72 V96 M${cx + 22} 72 V96 M${cx + 24} 72 V48`} stroke={SOFT} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <circle cx={cx - 12} cy={40} r="6" fill={INK} /><path d={`M${cx - 8} 47 L${cx + 2} 68 L${cx - 12} 78 L${cx - 10} 96`} {...line} /></>}
    {kind === 4 && <><path d={`M${cx + 18} 50 V96 M${cx + 18} 72 H${cx + 30} V96`} stroke={SOFT} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <circle cx={cx - 4} cy={34} r="6" fill={INK} /><path d={`M${cx - 4} 41 V70 M${cx - 4} 48 L${cx + 16} 52 M${cx - 4} 70 L${cx - 2} 96 M${cx - 4} 70 L${cx - 22} 90`} {...line} /></>}
  </g>;
};

function HipfxFiveMoves(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Do your physio's exercises regularly", "Quad press and leg raise: 10 seconds", "Bridge, sit to stand, leg back", "2 to 3 at a time, up to 2 sets of 15", "Keep pain between 0 and 5 out of 10"];
  const xs = [34, 97, 160, 223, 286];
  const names = ["Quad press", "Leg raise", "Bridge", "Sit to stand", "Leg back"];
  const lit = [[0, 1, 2, 3, 4], [0, 1], [2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercises" title="Five moves, a few at a time" label="Exercises at home" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five exercise outlines: a quad press, a supported leg raise, a bridge, sit to stand and standing hip extension">
      {xs.map((cx, index) => <Pose key={cx} kind={index} cx={cx} lit={lit.includes(index)} />)}
      {names.map((name, index) => <W key={name} x={xs[index]} y={118} size={10} fill={lit.includes(index) ? INK : TEXT}>{name}</W>)}
      {at === 0 && <><Box x={160} y={150} w={200} text="Keep them up at home" lit /><W x={160} y={178} size={10}>Follow your own physio</W></>}
      {at === 1 && <><W x={66} y={150} size={10.5}>Hold 10 seconds</W><W x={66} y={166} size={10}>then relax</W></>}
      {at === 2 && <W x={223} y={150} size={10.5}>Hold a few seconds</W>}
      {at === 3 && <><W x={90} y={150} size={10.5}>2 to 3 at a time</W><Arrow d="M146 146 H176" head="M169 140 L176 146 L169 152" /><W x={238} y={150} size={10.5}>Up to 2 sets of 15</W><W x={160} y={176} size={10}>Add 1 or 2 every few days</W></>}
      {at === 4 && <PainScale x={39} y={138} upTo={5} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HipfxAheadClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Pain is expected for 6 weeks or more", "Paracetamol every 6 hours in hospital", "Keep taking it; leg up when resting", "Ice or heat, always with a towel", "Same waking time; dark, quiet room"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pain and sleep" title="Stay ahead of the pain" label="Pain relief and sleep" credit={medsCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock with painkiller times, a leg raised on a cushion, a wrapped ice pack and a hot water bottle">
      {at === 0 && <><W x={160} y={36} size={10.5}>Strong painkillers at first</W>
        {[80, 66, 52, 38, 26, 14].map((h, index) => <rect key={index} x={50 + index * 38} y={148 - h} width="26" height={h} rx="5" fill={INK} opacity={1 - index * 0.1} />)}
        <W x={160} y={170} size={10}>Reduced gradually, with help</W></>}
      {at === 1 && <><circle cx="90" cy="94" r="40" fill={WHITE} stroke={INK} strokeWidth="3" />
        {[0, 1, 2, 3].map(index => <circle key={index} cx={90 + 40 * Math.sin(index * Math.PI / 2)} cy={94 - 40 * Math.cos(index * Math.PI / 2)} r="7" fill={GOLD} stroke={INK} strokeWidth="1.5" />)}
        <path d="M90 94 V66 M90 94 L108 104" stroke={TEXT} strokeWidth="3" strokeLinecap="round" /><W x={90} y={156} size={10}>Every 6 hours</W>
        <Box x={232} y={64} w={128} text="Paracetamol" lit /><Box x={232} y={100} w={128} text="Stronger, if needed" size={10} /><Box x={232} y={136} w={128} text="NSAIDs not advised" size={10} dim /></>}
      {at === 2 && <><path d="M22 70 V150 M22 122 H64 V150" fill="none" stroke={SOFT} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="100" y="120" width="40" height="22" rx="6" fill={TINT} stroke={INK} strokeWidth="2" /><path d="M140 142 V150 M100 142 V150" stroke={INK} strokeWidth="3" />
        <path d="M38 72 L42 114 L86 116 L128 112" fill="none" stroke={INK} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" /><path d="M128 112 L132 100" stroke={INK} strokeWidth="6" strokeLinecap="round" />
        <circle cx="36" cy="56" r="11" fill={INK} />
        <W x={80} y={168} size={10}>Leg raised when resting</W>
        <Pill x={210} y={50} /><Arrow d="M234 50 H256" head="M250 44 L257 50 L250 56" /><Person x={282} y={66} scale={0.8} />
        <W x={246} y={98} size={10}>Painkillers before</W><W x={246} y={114} size={10}>activity</W><W x={246} y={144} size={10}>Do not cut down</W><W x={246} y={160} size={10}>straight after leaving</W></>}
      {at === 3 && <><ColdPack x={92} y={78} /><W x={92} y={124} size={10.5}>Ice: earlier on</W><Bottle x={236} y={80} /><W x={236} y={124} size={10.5}>Heat: if stiff</W>
        <W x={160} y={156} size={10}>Never straight on the skin</W><W x={160} y={172} size={10}>A few hours between each</W></>}
      {at === 4 && <><Moon x={70} y={44} /><Clock x={80} y={118} r={18} hand={3.6} /><W x={80} y={154} size={10}>Same time up</W>
        <List x={150} y={56} gap={30} lines={["Bed when sleepy", "Relax an hour before", "Dark, quiet bedroom", "No coffee 6 hours before"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HipfxBedside(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Sudden confusion is called delirium", "Confused, sleepy or restless", "More likely over 65 or with dementia", "Sudden confusion at home: A&E or 999", "Glasses, hearing aids, a clock nearby"];
  const table = at === 0 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Delirium" title="When confusion comes on suddenly" label="Confusion after surgery" credit={at === 3 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person resting in a hospital bed, with a clock, a calendar, glasses and a family photo within reach">
      <path d="M18 128 V94 M18 142 V170 M150 142 V170" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <rect x="14" y="128" width="140" height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="22" y="114" width="34" height="14" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" />
      <circle cx="40" cy="108" r="11" fill={INK} />
      <rect x="52" y="112" width="98" height="18" rx="8" fill={TINT} stroke={INK} strokeWidth="2" />
      {at === 0 && <Ring x={40} y={108} r={18} still={still} />}
      {table && <><path d="M196 124 H292 M204 124 V170 M284 124 V170" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <Clock x={214} y={108} r={12} hand={2.4} /><circle cx="244" cy="114" r="6" fill="none" stroke={INK} strokeWidth="2.5" /><circle cx="260" cy="114" r="6" fill="none" stroke={INK} strokeWidth="2.5" /><path d="M250 114 H254" stroke={INK} strokeWidth="2.5" />
        <rect x="270" y="94" width="22" height="26" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx="281" cy="103" r="4" fill={SOFT} /><path d="M274 117 C276 109 286 109 288 117" fill={SOFT} />
        <Cal x={250} y={56} w={40} lit={at === 4} />
        {at === 4 && <Ring x={252} y={114} r={18} still={still} />}</>}
      {at === 0 && <><W x={84} y={48} size={10.5}>A sudden change,</W><W x={84} y={64} size={10.5}>over hours or days</W><W x={84} y={86} size={10}>Usually improves</W></>}
      {at === 1 && <><W x={84} y={50} size={10}>Family often</W><W x={84} y={66} size={10}>notice first</W><List x={170} y={46} gap={28} lines={["More confused", "Sleepy, less responsive", "Agitated or restless", "Awake at night", "Worse in the evening"]} /></>}
      {at === 2 && <><W x={84} y={50} size={10}>Staff keep</W><W x={84} y={66} size={10}>checking for it</W><List x={170} y={46} gap={28} lines={["Over 65", "Dementia", "Frailty", "Hearing or sight loss", "Had it before"]} /></>}
      {at === 3 && <><W x={84} y={50} size={10}>Find and treat</W><W x={84} y={66} size={10}>the trigger</W><Box x={236} y={46} w={150} text="Tell the ward staff" /><Box x={236} y={90} w={150} text="At home: A&E or 999" lit />
        <W x={236} y={126} size={10}>Do not drive to A&E</W><W x={236} y={142} size={10}>Get a lift or call 999</W></>}
      {at === 4 && <><W x={84} y={50} size={10}>Someone familiar,</W><W x={84} y={66} size={10}>short, simple sentences</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HipfxHomeCutaway(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Staff plan with you when to go home", "Free short-term help, up to 6 weeks", "Sock aid, raised seat, grab rails", "Free needs assessment: anyone can ask", "Carers can have their own assessment"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Going home" title="Help to get home and stay there" label="Going home" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A house cut away to show helpful equipment: a raised toilet seat, a grab rail and a sock aid">
      <House x={22} y={76} w={124} h={104} />
      {at === 0 && <><Person x={64} y={150} /><Person x={104} y={154} scale={0.9} fill={SOFT} />
        <List x={172} y={52} gap={32} lines={["When you will be ready", "Where you will go", "Medicines, equipment", "Your next steps"]} /></>}
      {at === 1 && <><Person x={52} y={152} scale={0.8} /><Person x={84} y={152} scale={0.8} fill={SOFT} /><Person x={116} y={152} scale={0.8} />
        <Box x={240} y={48} w={136} text="Free, short term" lit />{Array.from({ length: 6 }, (_, index) => <rect key={index} x={182 + index * 20} y={72} width="16" height="22" rx="4" fill={INK} />)}
        <W x={240} y={114} size={10.5}>Up to 6 weeks</W><W x={240} y={144} size={10}>Dressing, meals, stairs</W></>}
      {at === 2 && <><rect x="34" y="108" width="12" height="32" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" />
        <path d="M44 140 H76 V150 C76 166 68 172 60 172 C52 172 44 166 44 150 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="42" y="130" width="36" height="9" rx="3" fill={GOLD} />
        <rect x="92" y="104" width="7" height="46" rx="3" fill={GOLD} /><path d="M112 148 C112 172 136 172 136 148" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" /><path d="M112 148 L106 112 M136 148 L142 112" stroke={SOFT} strokeWidth="2" />
        <List x={172} y={44} gap={28} lines={["Sock aid, shoehorn", "Slip-on shoes", "Raised toilet seat", "Grab rails", "Free if assessed"]} /></>}
      {at === 3 && <><path d="M36 180 V160 H56 V140 H76 V120 H96 V100" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" /><path d="M40 150 L100 90" stroke={GOLD} strokeWidth="4" strokeLinecap="round" /><Person x={124} y={152} scale={0.8} fill={SOFT} />
        <Box x={240} y={48} w={146} text="Needs assessment" lit /><W x={240} y={78} size={10}>Free: anyone can ask</W><Box x={240} y={114} w={146} text="An OT home visit" /><W x={240} y={146} size={10}>Under £1,000: council pays</W></>}
      {at === 4 && <><Person x={64} y={150} /><Person x={104} y={150} fill={SOFT} />
        <Box x={240} y={48} w={150} text="Carer's assessment" lit /><W x={240} y={80} size={10}>Free, and separate</W><W x={240} y={96} size={10}>Can be at the same time</W><W x={240} y={128} size={10}>Bring someone along</W><W x={240} y={144} size={10}>Mention small things</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HipfxSaferStairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["After a break, falls risk is higher", "Strength and balance twice a week", "No clutter or rugs; good lighting", "Shoes with grip; eyes and medicines", "Can't get up or hurt hip: call 999"];
  const stairs = at === 0 || at === 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Preventing falls" title="Steady legs, safer home" label="Preventing the next fall" credit={at === 4 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A well-lit staircase with a handrail, a loose rug crossed out, and good shoes">
      {stairs && <g opacity={at === 0 ? 0.4 : 1}>
        <path d="M20 180 V156 H44 V132 H68 V108 H92 V84 H116 V60 H150" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <path d="M26 140 L122 44" stroke={at === 2 ? GOLD : SOFT} strokeWidth="4" strokeLinecap="round" /><path d="M32 134 V156 M80 86 V108" stroke={SOFT} strokeWidth="2.5" />
        {at === 2 && <><circle cx="146" cy="30" r="8" fill={GOLD} /><path d="M146 14 V8 M132 22 L127 18 M160 22 L165 18" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" /></>}
      </g>}
      {at === 0 && ["Falls service", "Strength, balance", "A safer home", "Medicine review"].map((label, index) => <Box key={label} x={240} y={44 + index * 36} w={136} text={label} lit={index === 0} />)}
      {at === 1 && <><path d="M20 168 H120" stroke={LINE} strokeWidth="3" strokeLinecap="round" /><Figure x={66} y={112} /><Week x={136} y={44} lit={[1, 4]} />
        <W x={220} y={98} size={10.5}>At least twice a week</W><W x={220} y={116} size={10}>Active every day</W><W x={220} y={148} size={10}>A physio-led class, if possible</W></>}
      {at === 2 && <><List x={180} y={50} gap={26} lines={["Handrails on stairs", "Well-lit landing", "No clutter or wires"]} />
        <rect x="196" y="152" width="70" height="14" rx="4" fill={TINT} stroke={INK} strokeWidth="2" /><Cross x={231} y={159} s={10} /><W x={231} y={140} size={10}>No loose rugs</W></>}
      {at === 3 && <><path d="M34 70 H62 C72 70 84 78 86 90 H34 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M34 95 H86" stroke={INK} strokeWidth="4" strokeDasharray="5 3" />
        <circle cx="148" cy="84" r="11" fill="none" stroke={INK} strokeWidth="3" /><circle cx="172" cy="84" r="11" fill="none" stroke={INK} strokeWidth="3" /><path d="M159 84 H161" stroke={INK} strokeWidth="3" />
        <Pill x={260} y={84} /><W x={60} y={130} size={10.5}>Good grip</W><W x={160} y={130} size={10.5}>Eye tests</W><W x={260} y={130} size={10.5}>Medicine review</W>
        <W x={160} y={166} size={10}>Ask your GP before stopping any</W></>}
      {at === 4 && <><Phone x={60} y={80} /><path d="M98 64 C98 80 122 80 122 64" fill="none" stroke={SOFT} strokeWidth="2" /><circle cx="110" cy="86" r="11" fill={GOLD} stroke={INK} strokeWidth="2" />
        <W x={84} y={130} size={10.5}>Alarm or phone</W><W x={84} y={146} size={10}>A key safe helps</W>
        <Box x={232} y={48} w={150} text="Call 999" lit /><W x={232} y={80} size={10}>Hurt head, back, neck, hip</W><W x={232} y={96} size={10}>or cannot get up</W><W x={232} y={128} size={10}>Keep warm, move gently</W><W x={232} y={144} size={10}>while you wait</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HipfxWeekTablet(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Ask about a fracture liaison service", "Bone medicines work in the background", "Once a week, then upright 30 minutes", "Tablets, liquid or injections", "Calcium, vitamin D and walking"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Bone treatment" title="Protecting against the next break" label="Bone treatment" credit={medsCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bone cross-section, a weekly tablet with a glass of tap water, and the sun for vitamin D">
      {at === 0 && <><Honeycomb x={80} y={96} r={50} weak /><Box x={232} y={56} w={156} text="Fracture liaison service" lit size={10} /><W x={232} y={92} size={10}>If you are over 50,</W><W x={232} y={108} size={10}>ask your GP surgery</W><W x={232} y={140} size={10}>It helps prevent</W><W x={232} y={156} size={10}>further breaks</W></>}
      {at === 1 && <><Honeycomb x={80} y={96} r={50} /><Box x={232} y={52} w={150} text="Slow bone breakdown" /><Box x={232} y={88} w={150} text="Help build new bone" /><W x={232} y={124} size={10}>No change you can feel,</W><W x={232} y={140} size={10}>but they are working</W></>}
      {at === 2 && <><Week x={76} y={34} lit={[0]} /><path d="M74 100 L80 150 H104 L110 100 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M77 118 L80 148 H104 L107 118 Z" fill={TINT} />
        <W x={92} y={172} size={10}>Tap water</W><Clock x={190} y={124} r={22} hand={3.1} /><W x={190} y={172} size={10}>30 minutes upright</W><W x={270} y={128} size={10}>Before food</W></>}
      {at === 3 && <><Pill x={70} y={70} /><rect x="148" y="58" width="24" height="36" rx="4" fill={TINT} stroke={INK} strokeWidth="2.5" /><rect x="152" y="50" width="16" height="9" rx="2" fill={INK} />
        <path d="M212 76 H226" stroke={INK} strokeWidth="2" /><rect x="226" y="70" width="40" height="12" rx="2" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M266 76 H280 M280 68 V84" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <W x={70} y={120} size={10.5}>Tablet</W><W x={160} y={120} size={10.5}>Liquid</W><W x={250} y={120} size={10.5}>Injection</W>
        <W x={160} y={154} size={10.5}>Reviewed every 3 to 5 years</W><W x={160} y={172} size={10}>Side effects? Ask about others</W></>}
      {at === 4 && <><circle cx="70" cy="62" r="15" fill={GOLD} />{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${70 + 20 * Math.cos(a)} ${62 + 20 * Math.sin(a)} L${70 + 27 * Math.cos(a)} ${62 + 27 * Math.sin(a)}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}
        <path d="M148 42 L152 88 H168 L172 42 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M149 54 L152 86 H168 L171 54 Z" fill={TINT} />
        <Person x={250} y={74} />
        <W x={70} y={110} size={10.5}>Vitamin D</W><W x={70} y={126} size={10}>10 micrograms</W><W x={160} y={110} size={10.5}>Calcium</W><W x={250} y={110} size={10.5}>Walking</W><W x={250} y={126} size={10}>or dancing</W>
        <W x={160} y={164} size={10}>Stop smoking, less alcohol</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HipfxGoalSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Some anxiety on leaving is normal", "Fear of falling is understandable", "Small goals, then build on them", "Talk to someone; breathe steadily", "Still anxious or low? Ask for help"];
  const blocks = [{ x: 128, top: 140, t: "A few steps" }, { x: 190, top: 110, t: "A short walk" }, { x: 255, top: 80, t: "Your routine" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Confidence" title="Small goals, steady confidence" label="Confidence and mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three steps of small goals, from a few steps at home to a normal routine, with a star at the top">
      {at === 0 && <><Person x={80} y={110} scale={1.2} /><List x={160} y={66} gap={32} lines={["Feeling anxious", "Scared of falling", "Some things are harder"]} /><W x={80} y={160} size={10}>A normal reaction</W></>}
      {at === 1 && <><Person x={80} y={110} scale={1.2} /><W x={80} y={160} size={10}>Not a weakness</W>
        <Box x={232} y={44} w={130} text="More worry" /><Box x={232} y={96} w={130} text="Less active" /><Box x={232} y={148} w={130} text="Less confidence" lit />
        <Arrow d="M232 58 V80" head="M226 74 L232 81 L238 74" /><Arrow d="M232 110 V132" head="M226 126 L232 133 L238 126" /></>}
      {at === 2 && <><path d="M20 180 H300" stroke={LINE} strokeWidth="3" strokeLinecap="round" /><Person x={70} y={164} />
        {blocks.map((block, index) => <rect key={block.t} x={block.x} y={block.top} width="50" height={180 - block.top} fill={index === 0 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />)}
        {blocks.map(block => <W key={block.t} x={block.x + 25} y={block.top - 8} size={10}>{block.t}</W>)}
        <path d="M280 34 l4 9 l10 1 l-7 7 l2 10 l-9 -5 l-9 5 l2 -10 l-7 -7 l10 -1 Z" fill={GOLD} /></>}
      {at === 3 && <><Person x={60} y={120} /><Person x={110} y={124} fill={SOFT} /><path d="M58 56 H112 a8 8 0 0 1 8 8 V80 a8 8 0 0 1 -8 8 H82 l-8 8 V88 H58 a8 8 0 0 1 -8 -8 V64 a8 8 0 0 1 8 -8 Z" fill={WHITE} stroke={INK} strokeWidth="2" />
        <path d="M66 72 H104" stroke={SOFT} strokeWidth="3" strokeLinecap="round" />
        <List x={170} y={60} gap={30} lines={["Talk it through", "Balanced thoughts", "Steady breaths", "Relaxation"]} /></>}
      {at === 4 && <><Box x={160} y={40} w={200} text="Ask for more help" lit /><List x={70} y={82} gap={26} lines={["Still anxious after trying", "Going on for some time", "Stopping you doing things", "Low all the time"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Paget's disease of bone ===============================================================================

function PagRenewalCells(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Old bone removed, new bone made", "Too fast: new bone larger, weaker", "Pelvis, spine, thigh, shin, skull", "Rare under 50; about 1% over 55", "Many people never have symptoms"];
  const band = at <= 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When bone renewal runs too fast" label="Paget's disease of bone" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Cells renewing a bone surface: one removing old bone, others making new bone">
      {band && <><rect x="20" y="130" width="280" height="50" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[40, 160, 270].map(x => <path key={x} d={`M${x} 150 h18 M${x + 6} 164 h18`} stroke={SOFT} strokeWidth="2" strokeLinecap="round" />)}</>}
      {at === 0 && <><path d="M86 130 C92 146 128 146 134 130" fill={TINT} stroke={INK} strokeWidth="2" /><ellipse cx="110" cy="112" rx="26" ry="16" fill={SOFT} stroke={INK} strokeWidth="2.5" />{[100, 110, 120].map(x => <circle key={x} cx={x} cy={112} r="3" fill={INK} />)}
        <path d="M190 130 C196 140 244 140 250 130" fill={TINT} stroke={INK} strokeWidth="2" />{[200, 215, 230, 245].map(x => <circle key={x} cx={x - 3} cy={118} r="8" fill={WHITE} stroke={INK} strokeWidth="2" />)}
        <Box x={160} y={36} w={110} text="Balanced" lit /><W x={110} y={78} size={10.5}>Osteoclasts</W><W x={110} y={92} size={10}>remove old bone</W><W x={222} y={78} size={10.5}>Osteoblasts</W><W x={222} y={92} size={10}>make new bone</W></>}
      {at === 1 && <><path d="M78 130 C84 164 136 164 142 130" fill={TINT} stroke={INK} strokeWidth="2" /><ellipse cx="110" cy="108" rx="34" ry="20" fill={GOLD} stroke={INK} strokeWidth="2.5" />{[96, 106, 116, 126].map(x => <circle key={x} cx={x} cy={108} r="3" fill={INK} />)}
        <path d="M186 130 C188 112 200 108 210 116 C220 104 236 108 240 118 C250 112 258 122 256 130 Z" fill={GOLD} stroke={INK} strokeWidth="2" />
        <W x={160} y={36} size={11}>Out of balance</W><W x={110} y={74} size={10.5}>Much faster</W><W x={222} y={92} size={10.5}>Larger, weaker</W></>}
      {at === 2 && <><Body x={70} y={14} spots={["skull", "spine", "pelvis", "thigh", "shin"]} /><List x={160} y={46} gap={26} lines={["Pelvis", "Spine", "Thigh bone", "Shin", "Skull"]} /><W x={226} y={180} size={10}>It does not spread</W></>}
      {at === 3 && <><W x={160} y={82} size={30} serif fill={INK}>About 1%</W><W x={160} y={106} size={10.5}>of people in the UK over 55</W><Box x={88} y={148} w={120} text="Rare under 50" /><Box x={228} y={148} w={140} text="More men than women" size={10} /></>}
      {at === 4 && ["No cure, but treatments help", "Many never have symptoms", "Not Paget's of the breast"].map((label, index) => <Box key={label} x={160} y={52 + index * 40} w={220} text={label} lit={index === 1} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PagNightAche(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often no symptoms at all", "A deep, dull ache, worse at night", "Warm skin; bone can change shape", "Partial loss of movement: 999 or A&E", "Lasting bone pain: see a GP"];
  const spots: Spot[][] = [[], ["shin", "skull", "spine", "pelvis"], ["shin"], ["spine"], []];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Often silent, sometimes a deep ache" label="Symptoms" credit={at === 3 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A skeleton outline with the bones Paget's disease often affects marked, and a moon for pain at night">
      <Body x={70} y={14} spots={spots[at]} bowed={at === 2} dim={at === 0} />
      {at === 2 && <path d="M38 152 q-6 -6 0 -12 M30 158 q-6 -8 0 -16" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />}
      {at === 3 && <path d="M70 70 V112 L57 130 L55 170" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />}
      {at === 0 && <><W x={225} y={56} size={10.5}>Often found by chance</W><W x={225} y={74} size={10}>on tests for something else</W><W x={225} y={116} size={22} serif fill={INK}>Under 10%</W><W x={225} y={136} size={10}>with X-ray signs come to</W><W x={225} y={150} size={10}>medical attention</W></>}
      {at === 1 && <><Moon x={232} y={46} /><W x={225} y={96} size={10.5}>Dull, deep ache</W><W x={225} y={114} size={10}>Constant, worse at night</W><W x={225} y={146} size={10}>Shin, head, back, pelvis</W></>}
      {at === 2 && ["Skin feels warm", "Bone gets larger", "Legs can bow"].map((label, index) => <Box key={label} x={225} y={58 + index * 38} w={140} text={label} />)}
      {at === 3 && <><List x={150} y={46} gap={24} lines={["Pain from spine to legs", "Numbness or tingling", "Balance problems"]} /><Box x={225} y={130} w={168} text="Call 999 or go to A&E" lit />
        <W x={225} y={160} size={10}>Some loss of limb movement,</W><W x={225} y={174} size={10}>bowel or bladder control</W></>}
      {at === 4 && <><Box x={225} y={48} w={140} text="See a GP" lit /><List x={150} y={86} gap={26} lines={["Lasting bone or joint pain", "Bones changing shape", "Numbness or tingling", "Balance problems"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PagThreeTests(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Your GP may start with blood tests", "ALP blood test: often raised", "An X-ray shows enlarged bone", "A bone scan lights up active areas", "Sometimes a CT, MRI or biopsy"];
  const lit = [-1, 0, 1, 2, -1][at];
  const panel = (index: number) => ({ opacity: lit === index ? 1 : 0.4 });
  return <MemoryBand props={props} state={s} tone="theme" kicker="Diagnosis" title="A blood test, an X-ray, a scan" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three tests: a blood sample tube marked ALP, an X-ray of an enlarged bone and a whole-body bone scan">
      {[60, 160, 260].map((x, index) => <rect key={x} x={x - 42} y="22" width="84" height="104" rx="10" fill={WHITE} stroke={lit === index ? GOLD : INK} strokeWidth={lit === index ? 3 : 2} opacity={lit === index ? 1 : 0.4} />)}
      <g {...panel(0)}><Tube x={60} y={70} lit={lit === 0} /><W x={60} y={116} size={10.5}>ALP</W></g>
      <g {...panel(1)}><rect x="128" y="30" width="64" height="70" rx="4" fill={TEXT} /><path d="M150 36 C144 54 140 74 146 94 H174 C180 74 176 54 170 36 Z" fill={WHITE} opacity="0.9" /><W x={160} y={116} size={10.5}>X-ray</W></g>
      <g {...panel(2)}><circle cx="260" cy="38" r="8" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="248" y="48" width="24" height="34" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M254 82 L252 100 M266 82 L268 100" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        {[[260, 38], [260, 76], [253, 94]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="4.5" fill={lit === 2 ? GOLD : SOFT} />)}<W x={260} y={116} size={10.5}>Bone scan</W></g>
      {at === 0 && <><W x={160} y={148} size={10.5}>A GP assesses your symptoms</W><W x={160} y={170} size={10}>Mention any family history</W></>}
      {at === 1 && <><W x={160} y={148} size={10.5}>Often raised, not always</W><W x={160} y={166} size={10}>so an X-ray or scan</W><W x={160} y={180} size={10}>is also needed</W></>}
      {at === 2 && <><W x={160} y={148} size={10.5}>Can show enlarged bone</W><W x={160} y={168} size={10}>One X-ray shows one area</W></>}
      {at === 3 && <><W x={160} y={148} size={10.5}>Highlights affected areas</W><W x={160} y={168} size={10}>Not the same as a DEXA scan</W></>}
      {at === 4 && <><W x={160} y={148} size={10.5}>Only if the diagnosis is unclear</W><W x={160} y={168} size={10}>A specialist assessment matters</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PagSkeletonCallouts(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Depends on which bones are affected", "Affected bones break more easily", "Osteoarthritis; bones can bend", "Hearing, tinnitus, pressed nerves", "Rarely: heart strain, bone cancer"];
  const spots: Spot[][] = [[], ["arm", "thigh"], ["hip", "knee"], ["skull", "spine"], []];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Complications" title="Which bones, which risks" label="Possible complications" credit={at === 3 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A skeleton outline with call-outs for broken bones, worn joints, hearing and the heart">
      <Body x={70} y={14} spots={spots[at]} bowed={at === 2} dim={at === 0} />
      {at === 1 && <path d="M62 108 L54 112 L60 116 L52 120" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />}
      {at === 4 && <HeartShape x={78} y={62} size={24} fill={GOLD} width={2} />}
      {at === 0 && <><W x={228} y={62} size={10.5}>It depends on</W><W x={228} y={80} size={10.5}>which bones</W><Box x={228} y={120} w={150} text="Many never have any" lit /><W x={228} y={158} size={10}>Early treatment matters</W></>}
      {at === 1 && <><Box x={228} y={52} w={150} text="Break more easily" lit /><W x={228} y={88} size={10}>Mostly arm and leg bones</W><W x={228} y={120} size={10}>Sudden, severe pain,</W><W x={228} y={136} size={10}>swelling or tenderness</W></>}
      {at === 2 && <><Box x={228} y={52} w={150} text="Osteoarthritis" lit /><W x={228} y={84} size={10}>Most often hip and knee</W><Box x={228} y={120} w={150} text="Bones can curve" /><W x={228} y={152} size={10}>Legs, spine or upper back</W></>}
      {at === 3 && <><Box x={228} y={44} w={150} text="Hearing loss" /><W x={228} y={72} size={10}>Ringing in the ears</W><W x={228} y={96} size={10}>Nerves: pain, weak legs</W><Box x={228} y={130} w={164} text="Call 999 or go to A&E" lit />
        <W x={228} y={160} size={10}>Some loss of limb movement,</W><W x={228} y={174} size={10}>bowel or bladder control</W></>}
      {at === 4 && <><Box x={228} y={50} w={150} text="Heart works harder" /><W x={228} y={78} size={10}>Very rarely, heart failure</W><Box x={228} y={116} w={150} text="Bone cancer: rare" /><W x={228} y={146} size={10}>New or worse pain:</W><W x={228} y={160} size={10}>see your doctor</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PagDripClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Pain: bisphosphonates usually given", "They calm the bone-absorbing cells", "One drip, about 15 to 30 minutes", "Or risedronate tablets for 2 months", "Flu-like symptoms for a day or 2"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Bisphosphonates" title="One drip, often years of relief" label="Bisphosphonate treatment" credit={medsCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A drip stand beside a clock shaded from 15 to 30 minutes">
      {at === 0 && <><Box x={86} y={64} w={140} text="Pain from Paget's" lit /><W x={86} y={96} size={10}>Bisphosphonates</W><W x={86} y={110} size={10}>normally given</W>
        <Box x={234} y={64} w={140} text="No symptoms" /><W x={234} y={96} size={10}>Your doctor may</W><W x={234} y={110} size={10}>keep an eye on it</W><W x={160} y={160} size={10}>No cure, but treatment helps</W></>}
      {at === 1 && <><rect x="30" y="124" width="140" height="34" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M70 124 C76 138 104 138 110 124" fill={TINT} stroke={INK} strokeWidth="2" />
        <ellipse cx="90" cy="100" rx="34" ry="20" fill={SOFT} stroke={INK} strokeWidth="2.5" />{[76, 86, 96, 106].map(x => <circle key={x} cx={x} cy={100} r="3" fill={INK} />)}
        {[[60, 66], [120, 62], [90, 54]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="5" fill={GOLD} />)}
        <W x={236} y={70} size={10.5}>Calms bone</W><W x={236} y={86} size={10.5}>breakdown</W><W x={236} y={120} size={10}>The full effect can take</W><W x={236} y={134} size={10}>several months</W></>}
      {at === 2 && <><Drip x={60} y={24} lit /><circle cx="200" cy="80" r="32" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M200 80 L232 80 A32 32 0 0 1 200 112 Z" fill={GOLD} />
        <path d="M200 80 V56 M200 80 L218 92" stroke={TEXT} strokeWidth="3" strokeLinecap="round" /><W x={200} y={136} size={10.5}>15 to 30 minutes</W><W x={200} y={166} size={10}>One dose often lasts years</W></>}
      {at === 3 && <><Pill x={90} y={70} /><Cal x={200} y={66} w={40} lit /><Cal x={250} y={66} w={40} lit /><W x={90} y={108} size={10.5}>Risedronate</W><W x={225} y={108} size={10.5}>Daily for 2 months</W>
        <W x={160} y={146} size={10}>Empty stomach, full glass of water</W><W x={160} y={164} size={10}>Upright for 30 minutes</W></>}
      {at === 4 && <><rect x="54" y="48" width="12" height="62" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="57" y="80" width="6" height="34" fill={GOLD} /><circle cx="60" cy="118" r="11" fill={GOLD} stroke={INK} strokeWidth="2.5" />
        <List x={130} y={58} gap={30} lines={["A day or 2 of flu-like", "Calcium and vitamin D", "Dental work first", "Kidney disease: not used"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PagPainPaths(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Find the cause to find the treatment", "Start small; paracetamol regularly", "Arthritis pain: exercise, gels", "Physio, a stick, warmth or cold", "Pace your day; CBT can help"];
  const causes = [{ x: 46, t: "The bone" }, { x: 122, t: "Joints" }, { x: 198, t: "A break" }, { x: 274, t: "Nerves" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pain" title="Find the cause, then ease it" label="Managing bone pain" credit={medsCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Bone pain branching to four causes, each with its own treatment">
      {at === 0 && <><Box x={160} y={34} w={120} text="Bone pain" lit />
        {causes.map((cause, index) => <g key={cause.t}><path d={`M160 46 L${cause.x} 88`} stroke={index === 0 ? GOLD : LINE} strokeWidth="3" strokeLinecap="round" /><Box x={cause.x} y={100} w={70} text={cause.t} size={10} lit={index === 0} /></g>)}
        <W x={46} y={136} size={10}>Bisphosphonate</W><W x={198} y={136} size={10}>Other treatments</W></>}
      {at === 1 && <><g transform="translate(90 70) scale(0.7)"><Pill x={0} y={0} /></g><g transform="translate(160 70)"><Pill x={0} y={0} /></g><g transform="translate(236 70) scale(1.3)"><Pill x={0} y={0} /></g>
        <W x={160} y={112} size={10.5}>Small doses first</W><W x={160} y={130} size={10}>Paracetamol, taken regularly</W><Box x={160} y={162} w={220} text="Ibuprofen: ask your doctor" size={10} /></>}
      {at === 2 && <><Knee x={74} y={92} scale={0.78} worn spur /><W x={74} y={180} size={10}>A worn knee</W><List x={150} y={56} gap={30} lines={["Strengthening exercises", "Creams and gels", "Weight loss, if overweight", "Joint replacement"]} /></>}
      {at === 3 && <><path d="M60 132 V66 C60 52 80 52 80 66" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" /><Bottle x={150} y={94} lit /><ColdPack x={250} y={98} />
        <W x={60} y={148} size={10.5}>A stick</W><W x={150} y={148} size={10.5}>Warmth</W><W x={250} y={148} size={10.5}>Covered cold</W>
        <W x={60} y={164} size={10}>Opposite side</W><W x={150} y={164} size={10}>Up to 20 minutes</W><W x={250} y={164} size={10}>Up to 15 minutes</W></>}
      {at === 4 && <><W x={160} y={50} size={10.5}>Breaks before you need them</W>
        {[[30, 80, INK], [86, 96, GOLD], [102, 152, INK], [158, 168, GOLD], [174, 224, INK], [230, 240, GOLD], [246, 290, INK]].map(([a, b, fill]) => <rect key={String(a)} x={Number(a)} y="66" width={Number(b) - Number(a)} height="24" rx="5" fill={String(fill)} />)}
        <W x={160} y={118} size={10}>Not too much on good days</W>{["Relaxation", "Distraction", "CBT"].map((label, index) => <Box key={label} x={60 + index * 100} y={152} w={90} text={label} lit={index === 2} size={10} />)}</>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PagBowedBone(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Surgery treats complications", "Hip or knee replacement works well", "Fixing breaks; straightening bones", "Making room for squashed nerves", "Bisphosphonate first; careful plans"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Surgery" title="When an operation helps most" label="When surgery is needed" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bowed shin bone before and after it is straightened, and a hip replacement">
      {at === 0 && <><Box x={90} y={52} w={140} text="Fractures" /><Box x={90} y={92} w={140} text="Deformities" /><Box x={90} y={132} w={140} text="Severe arthritis" />
        <Arrow d="M166 92 H200" head="M193 86 L200 92 L193 98" /><Box x={250} y={92} w={90} text="Surgery" lit /><W x={160} y={176} size={10}>Medicines seldom fix these</W></>}
      {at === 1 && <><HipJoint x={90} y={66} scale={0.75} replaced /><Box x={236} y={56} w={140} text="Hip or knee" lit /><W x={236} y={88} size={10}>Results like people</W><W x={236} y={102} size={10}>without Paget's</W>
        <W x={236} y={134} size={10}>Can be more complex</W><W x={236} y={148} size={10}>Complications: low overall</W></>}
      {at === 2 && <><path d="M60 30 C30 80 30 130 60 180" fill="none" stroke={INK} strokeWidth="18" strokeLinecap="round" /><path d="M60 30 C30 80 30 130 60 180" fill="none" stroke={WHITE} strokeWidth="12" strokeLinecap="round" />
        <path d="M30 105 H52" stroke={GOLD} strokeWidth="3" strokeDasharray="4 3" /><Arrow d="M86 105 H130" head="M123 99 L130 105 L123 111" />
        <path d="M170 30 V180" stroke={INK} strokeWidth="18" strokeLinecap="round" /><path d="M170 30 V180" stroke={WHITE} strokeWidth="12" strokeLinecap="round" /><path d="M160 105 H180" stroke={GOLD} strokeWidth="3" />
        <W x={268} y={70} size={10.5}>Osteotomy:</W><W x={268} y={86} size={10}>cut, reshaped</W><W x={268} y={100} size={10}>and reset</W><W x={268} y={138} size={10}>Breaks: a cast</W><W x={268} y={152} size={10}>or an operation</W></>}
      {at === 3 && <>{[0, 1, 2, 3].map(index => <rect key={index} x="56" y={36 + index * 36} width="48" height="28" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />)}
        <path d="M104 100 l12 6 l-12 6 Z" fill={TEXT} /><path d="M126 36 V176" stroke={GOLD} strokeWidth="4" strokeLinecap="round" /><Arrow d="M150 106 H134" head="M140 100 L133 106 L140 112" />
        <W x={236} y={70} size={10.5}>Bone moved away</W><W x={236} y={86} size={10.5}>from a nerve</W><Box x={236} y={126} w={150} text="More room for nerves" lit /></>}
      {at === 4 && <><Cal x={70} y={96} w={60} lit /><List x={146} y={60} gap={34} lines={["Bisphosphonate first", "General anaesthetic", "Plan with your consultant"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PagPersonNumber(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Response checked at 3 to 6 months", "ALP shows how active the disease is", "Treat symptoms, not just the number", "New or worse pain: see your doctor"];
  const ticks = [{ x: 40, t: "Treatment" }, { x: 170, t: "3 to 6 months" }, { x: 280, t: "Years later" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Follow-up" title="Treating the person, not the number" label="Follow-up and blood tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from treatment to a check at three to six months, and a person shown larger than a blood test number">
      {at === 0 && <><path d="M30 110 H292" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
        {ticks.map((tick, index) => <g key={tick.t}><circle cx={tick.x} cy={110} r={index === 1 ? 10 : 7} fill={index === 1 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={tick.x} y={138} size={10}>{tick.t}</W></g>)}
        <W x={170} y={62} size={10.5}>Response checked</W><Arrow d="M170 70 V92" head="M164 86 L170 93 L176 86" /><W x={160} y={172} size={10}>Repeated when it wears off</W></>}
      {at === 1 && <><Tube x={84} y={84} lit /><W x={84} y={140} size={10.5}>ALP</W><Gauge x={226} y={132} r={50} value={0.7} /><W x={226} y={38} size={10.5}>Often raised</W><W x={226} y={54} size={10}>when it is active</W><W x={160} y={174} size={10}>Not always; other tests may help</W></>}
      {at === 2 && <><Person x={96} y={118} scale={1.8} /><Box x={236} y={60} w={136} text="Treat the person" lit /><Box x={236} y={98} w={136} text="Not just the level" dim /><W x={236} y={138} size={10}>PRISM: more treatment</W><W x={236} y={152} size={10}>gave no better results</W></>}
      {at === 3 && <><Cal x={74} y={100} w={64} /><List x={140} y={70} gap={32} lines={["No symptoms: often watched", "Calcium and vitamin D", "Pain can have other causes"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PagHeelToe(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Strength and balance work best", "Check with a GP; start slowly", "Every day; strength 2 days a week", "Heel-to-toe, near a wall or chair", "Physio, a stick or insoles can help"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Staying active" title="Strong and steady on your feet" label="Staying active safely" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person walking heel to toe with a hand on the wall, and a week with two strength days">
      {at === 0 && <><Box x={90} y={56} w={120} text="Strength" lit /><Box x={230} y={56} w={120} text="Balance" lit /><W x={160} y={104} size={10.5}>Keeps joints moving and</W><W x={160} y={120} size={10.5}>muscle tone protects bone</W><W x={160} y={160} size={10}>Extreme exercise: ask first</W></>}
      {at === 1 && <><Person x={60} y={110} /><Person x={100} y={114} scale={0.9} fill={SOFT} />{[12, 20, 28, 36, 44, 52].map((h, index) => <rect key={h} x={160 + index * 24} y={140 - h} width="18" height={h} rx="4" fill={INK} opacity={0.5 + index * 0.1} />)}
        <W x={226} y={60} size={10.5}>Start slowly</W><W x={80} y={160} size={10}>Speak to a GP first</W><W x={226} y={160} size={10}>Then build up</W></>}
      {at === 2 && <><Week x={76} y={50} lit={[0, 1, 2, 3, 4, 5, 6]} />{[1, 4].map(day => <circle key={day} cx={76 + day * 24 + 10} cy={42} r="5" fill={GOLD} />)}
        <W x={160} y={100} size={10.5}>Active every day</W><W x={160} y={118} size={10}>Strength, balance: 2 days</W><W x={160} y={150} size={18} serif fill={INK}>150 minutes</W><W x={160} y={168} size={10}>of moderate activity a week</W></>}
      {at === 3 && <><rect x="20" y="30" width="14" height="150" fill={TINT} stroke={INK} strokeWidth="2" /><path d="M40 180 H140" stroke={LINE} strokeWidth="3" strokeLinecap="round" /><Figure x={84} y={124} hand={[36, 90]} />
        <List x={150} y={60} gap={30} lines={["Sideways walking", "Heel-to-toe walking", "One-leg stand"]} /><W x={225} y={160} size={10}>Near a wall or a chair</W></>}
      {at === 4 && <><path d="M60 128 V62 C60 48 80 48 80 62" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" /><Frame x={145} y={128} /><ellipse cx="250" cy="96" rx="16" ry="32" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <W x={64} y={150} size={10.5}>A stick</W><W x={160} y={150} size={10.5}>A frame</W><W x={250} y={150} size={10.5}>Insoles</W><W x={160} y={176} size={10}>Physio: less pain, fewer falls</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PagSkullEar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Skull changes can affect hearing", "Treatment usually advised; aids help", "Sudden hearing loss: urgent GP or 111", "Tinnitus: help early, soft sounds", "Tinnitus with sudden loss: A&E or 999"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Hearing" title="When the skull is affected" label="Hearing and Paget's disease" credit={at === 2 || at === 4 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head side on with the ear marked, sound waves fading, and a small hearing aid">
      <circle cx="90" cy="100" r="52" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M40 92 l-9 8 l8 3" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M104 86 C118 82 124 98 114 106 C110 110 112 118 104 120" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {at === 0 && <path d="M48 70 A52 52 0 0 1 132 70" fill="none" stroke={GOLD} strokeWidth="6" strokeLinecap="round" />}
      {at === 1 && <path d="M120 84 C130 88 130 108 120 114" fill="none" stroke={GOLD} strokeWidth="6" strokeLinecap="round" />}
      {(at === 0 || at === 3) && [0, 1, 2].map(index => <path key={index} d={`M${150 + index * 10} 84 Q${158 + index * 10} 102 ${150 + index * 10} 120`} fill="none" stroke={at === 3 ? SOFT : INK} strokeWidth="2.5" opacity={1 - index * 0.3} />)}
      {at === 0 && <><Box x={250} y={52} w={110} text="Hearing loss" lit /><W x={250} y={84} size={10}>Ringing (tinnitus)</W><W x={250} y={102} size={10}>A wider forehead</W><W x={250} y={120} size={10}>Headaches, vertigo</W></>}
      {at === 1 && <><W x={240} y={56} size={10.5}>Treatment usually</W><W x={240} y={72} size={10.5}>advised</W><Box x={240} y={110} w={130} text="Hearing aids" lit /><W x={240} y={140} size={10}>Louder and clearer</W></>}
      {at === 2 && <><W x={240} y={40} size={10}>Getting gradually worse</W><Box x={240} y={62} w={130} text="See a GP" /><W x={240} y={102} size={10}>Sudden hearing loss</W><Box x={240} y={124} w={130} text="Urgent GP or 111" lit /><W x={240} y={158} size={10}>Free tests at some</W><W x={240} y={172} size={10}>pharmacies, opticians</W></>}
      {at === 3 && <List x={190} y={56} gap={28} lines={["Help early", "Soft background sound", "A relaxing routine", "Ear protectors"]} />}
      {at === 4 && <><Box x={240} y={44} w={140} text="Urgent GP" /><W x={240} y={72} size={10}>If it beats with your pulse</W><Box x={240} y={104} w={140} text="A&E or call 999" lit /><W x={240} y={134} size={10}>After a head injury, or</W><W x={240} y={148} size={10}>with hearing loss, face</W><W x={240} y={162} size={10}>weakness or spinning</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PagFamilyTree(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["A gene, SQSTM1, plays a part", "About 1 in 8 have a family history", "Children: about 7 times more likely", "Gene tests: some research centres"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Families" title="Paget's disease in the family" label="Paget's disease in families" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A family of people with one marked, and a strand of DNA labelled SQSTM1">
      {at === 0 && <>{[1, -1].map(side => <path key={side} d={Array.from({ length: 29 }, (_, i) => `${i ? "L" : "M"}${(68 + side * 24 * Math.sin(i * Math.PI / 7)).toFixed(1)} ${30 + i * 5}`).join(" ")} fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />)}
        {[2, 5, 9, 12, 16, 19, 23, 26].map(i => { const dx = 24 * Math.sin(i * Math.PI / 7); return <path key={i} d={`M${(68 - dx).toFixed(1)} ${30 + i * 5} H${(68 + dx).toFixed(1)}`} stroke={i === 9 ? GOLD : SOFT} strokeWidth="3" strokeLinecap="round" />; })}
        <W x={220} y={60} size={20} serif fill={INK}>SQSTM1</W><W x={220} y={80} size={10}>the most important gene</W><W x={220} y={114} size={10}>Changes in 40% to 50%</W><W x={220} y={130} size={10}>with a family history</W><W x={220} y={156} size={10}>5% to 10% without one</W></>}
      {at === 1 && <><W x={175} y={30} size={10}>Genes and environment</W>{Array.from({ length: 8 }, (_, index) => <Person key={index} x={100 + (index % 4) * 50} y={index < 4 ? 82 : 146} scale={0.8} fill={index === 5 ? INK : SOFT} />)}<Ring x={150} y={136} r={30} still={still} /></>}
      {at === 2 && <><Person x={110} y={110} scale={1.2} /><Person x={176} y={124} scale={0.9} fill={GOLD} /><path d="M126 126 H160" stroke={LINE} strokeWidth="3" />
        <W x={258} y={90} size={20} serif fill={INK}>7 times</W><W x={258} y={110} size={10}>more likely</W><W x={160} y={164} size={10}>Healthy diet, exercise, weight</W></>}
      {at === 3 && <><Tube x={80} y={88} lit /><W x={220} y={60} size={10.5}>Gene tests</W><W x={220} y={78} size={10}>In some research centres</W><Box x={220} y={118} w={150} text="The ZiPP study" lit /><W x={220} y={148} size={10}>Testing and a scan found</W><W x={220} y={162} size={10}>early Paget's disease</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PagSupportCircle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A nurse helpline, in office hours", "Online groups, buddies, events", "Specialists; Centres of Excellence", "Booklets, a jargon buster, videos", "Ask for help when you need it"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="Nobody has to manage it alone" label="Support and information" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A phone for the nurse helpline, a video call of faces, and two people sitting together on a bench">
      {at === 0 && <><Phone x={80} y={96} w={48} h={90} /><W x={220} y={64} size={17} serif fill={INK}>0161 799 4646</W><W x={220} y={86} size={10}>UK office hours</W><Box x={220} y={122} w={150} text="A registered nurse" lit /><W x={220} y={156} size={10}>General advice only</W></>}
      {at === 1 && <>{[0, 1, 2, 3].map(index => <g key={index}><rect x={30 + (index % 2) * 52} y={40 + Math.floor(index / 2) * 52} width="46" height="46" rx="6" fill={TINT} stroke={INK} strokeWidth="2" /><Person x={53 + (index % 2) * 52} y={76 + Math.floor(index / 2) * 52} scale={0.55} fill={index === 0 ? INK : SOFT} /></g>)}
        <W x={230} y={56} size={10.5}>Every two months</W><W x={230} y={72} size={10}>on Zoom, about an hour</W><Box x={230} y={108} w={140} text="Paget's Buddy" lit /><W x={230} y={144} size={10}>Free events across the UK</W></>}
      {at === 2 && <><rect x="40" y="60" width="90" height="110" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M85 76 V100 M73 88 H97" stroke={GOLD} strokeWidth="6" strokeLinecap="round" />{[0, 1].map(row => [0, 1, 2].map(col => <rect key={`${row}${col}`} x={52 + col * 24} y={112 + row * 22} width="16" height="14" fill={TINT} />))}
        <W x={230} y={56} size={10.5}>Rheumatology or</W><W x={230} y={72} size={10.5}>endocrinology</W><Box x={230} y={110} w={150} text="Centre of Excellence" lit /><W x={230} y={142} size={10}>If none locally</W></>}
      {at === 3 && <>{[0, 1, 2].map(index => <rect key={index} x={30 + index * 16} y={40 + index * 12} width="60" height="76" rx="4" fill={index === 2 ? INK : WHITE} stroke={INK} strokeWidth="2" />)}
        <circle cx="76" cy="152" r="16" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M71 144 L84 152 L71 160 Z" fill={GOLD} />
        <List x={160} y={50} gap={28} lines={["The facts", "The tests", "Pain", "Surgery", "A jargon buster"]} /></>}
      {at === 4 && <><path d="M30 150 H130 M40 150 V174 M120 150 V174 M30 126 H130" stroke={INK} strokeWidth="3.5" strokeLinecap="round" /><Person x={60} y={136} scale={0.9} /><Person x={100} y={136} scale={0.9} fill={SOFT} />
        <Box x={230} y={52} w={150} text="Occupational therapy" size={10} /><W x={230} y={80} size={10}>Tasks, aids, home changes</W><W x={230} y={116} size={10}>Pain can affect mood</W><Box x={230} y={150} w={150} text="Ask for help" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function BonefixPieceView({ piece, ...props }: { piece: BonefixPiece } & PieceProps) {
  switch (piece) {
    case "hipfx-thigh-crack": return <HipfxThighCrack {...props} />;
    case "hipfx-fall-honeycomb": return <HipfxFallHoneycomb {...props} />;
    case "hipfx-fix-replace": return <HipfxFixReplace {...props} />;
    case "hipfx-weeks-ruler": return <HipfxWeeksRuler {...props} />;
    case "hipfx-footprints": return <HipfxFootprints {...props} />;
    case "hipfx-five-moves": return <HipfxFiveMoves {...props} />;
    case "hipfx-ahead-clock": return <HipfxAheadClock {...props} />;
    case "hipfx-bedside": return <HipfxBedside {...props} />;
    case "hipfx-home-cutaway": return <HipfxHomeCutaway {...props} />;
    case "hipfx-safer-stairs": return <HipfxSaferStairs {...props} />;
    case "hipfx-week-tablet": return <HipfxWeekTablet {...props} />;
    case "hipfx-goal-steps": return <HipfxGoalSteps {...props} />;
    case "pag-renewal-cells": return <PagRenewalCells {...props} />;
    case "pag-night-ache": return <PagNightAche {...props} />;
    case "pag-three-tests": return <PagThreeTests {...props} />;
    case "pag-skeleton-callouts": return <PagSkeletonCallouts {...props} />;
    case "pag-drip-clock": return <PagDripClock {...props} />;
    case "pag-pain-paths": return <PagPainPaths {...props} />;
    case "pag-bowed-bone": return <PagBowedBone {...props} />;
    case "pag-person-number": return <PagPersonNumber {...props} />;
    case "pag-heel-toe": return <PagHeelToe {...props} />;
    case "pag-skull-ear": return <PagSkullEar {...props} />;
    case "pag-family-tree": return <PagFamilyTree {...props} />;
    case "pag-support-circle": return <PagSupportCircle {...props} />;
    default: return null;
  }
}
