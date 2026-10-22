import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { DISCS_PIECES, type DiscsPiece } from "@/content/discs-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Slipped disc and Scoliosis pages' own pieces (content/discs-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isDiscsPiece = (piece: NewsPiece): piece is DiscsPiece => (DISCS_PIECES as readonly string[]).includes(piece);

const urgentCredit = "Illustration: Rehyn. If you are worried, get help straight away.";
const medsCredit = "Illustration: Rehyn. Check with a pharmacist or GP.";
const moveCredit = "Illustration: Rehyn. Get advice from a physiotherapist first.";
const ideaCredit = "Illustration: Rehyn. A picture of the idea, not a measurement.";

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
/** Lines of centred text from (x, y), `gap` apart. */
const Lines = ({ x, y, lines, gap = 16, size = 10.5, fill = TEXT }: { x: number; y: number; lines: string[]; gap?: number; size?: number; fill?: string }) =>
  <g>{lines.map((line, index) => <W key={line} x={x} y={y + index * gap} size={size} fill={fill}>{line}</W>)}</g>;
/** A simple figure: hips at (x, y), the body leaning `lean` degrees forward (to the right); `sit` bends the legs. */
const Figure = ({ x, y, lean = 0, sit = false, legs = INK, hand, scale = 1 }: { x: number; y: number; lean?: number; sit?: boolean; legs?: string; hand?: [number, number]; scale?: number }) => {
  const a = lean * Math.PI / 180;
  const sx = x + 44 * Math.sin(a), sy = y - 44 * Math.cos(a);
  const hx = x + 60 * Math.sin(a), hy = y - 60 * Math.cos(a);
  const [ax, ay] = hand ?? [sx + 8, sy + 34];
  return <g strokeLinecap="round" strokeLinejoin="round" fill="none" transform={scale === 1 ? undefined : `translate(${x} ${y}) scale(${scale}) translate(${-x} ${-y})`}>
    <path d={sit ? `M${x} ${y} H${x + 30} V${y + 40}` : `M${x} ${y} L${x - 9} ${y + 54} M${x} ${y} L${x + 9} ${y + 54}`} stroke={legs} strokeWidth="7" />
    <path d={`M${x} ${y} L${sx} ${sy}`} stroke={INK} strokeWidth="9" />
    <path d={`M${sx} ${sy} L${ax} ${ay}`} stroke={INK} strokeWidth="6" />
    <circle cx={hx} cy={hy} r="11" fill={INK} stroke="none" />
  </g>;
};
/** A hot water bottle centred on (x, y). */
const Bottle = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 6} y={y - 30} width="12" height="12" rx="2" fill={INK} /><rect x={x - 20} y={y - 20} width="40" height="44" rx="12" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
    {[-8, 2, 12].map(dy => <path key={dy} d={`M${x - 12} ${y + dy} H${x + 12}`} stroke={lit ? WHITE : SOFT} strokeWidth="2" />)}</g>;
/** A pain scale from 0 to 10, from x across 242, at height y; boxes up to `upTo` are filled. */
const PainScale = ({ x, y, upTo }: { x: number; y: number; upTo: number }) =>
  <g>{Array.from({ length: 11 }, (_, index) => <rect key={index} x={x + index * 22} y={y} width="18" height="16" rx="4" fill={index <= upTo ? INK : WHITE} stroke={INK} strokeWidth="1.5" />)}
    {[0, 5, 10].map(n => <W key={n} x={x + n * 22 + 9} y={y + 30} size={10}>{String(n)}</W>)}</g>;
/** A calendar page. */
const Cal = ({ x, y, w = 40, lit = false }: { x: number; y: number; w?: number; lit?: boolean }) =>
  <g><rect x={x - w / 2} y={y - w * 0.42} width={w} height={w * 0.86} rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - w / 2} y={y - w * 0.42} width={w} height={w * 0.22} rx="3" fill={lit ? GOLD : INK} />
    {[0, 1, 2].map(row => [0, 1, 2].map(col => <circle key={`${row}${col}`} cx={x - w * 0.25 + col * w * 0.25} cy={y + row * w * 0.17} r={w * 0.045} fill={SOFT} />))}</g>;
/** A car, side on, centred on (x, y). */
const Car = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 26} ${y + 6} V${y - 4} L${x - 14} ${y - 6} L${x - 6} ${y - 16} H${x + 12} L${x + 20} ${y - 6} L${x + 26} ${y - 4} V${y + 6} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx={x - 14} cy={y + 7} r="5" fill={INK} /><circle cx={x + 14} cy={y + 7} r="5" fill={INK} /></g>;
/** A cigarette centred on (x, y). */
const Cigarette = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 36} y={y - 6} width="62" height="12" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x + 26} y={y - 6} width="10" height="12" rx="2" fill={GOLD} /><path d={`M${x - 20} ${y - 6} V${y + 6}`} stroke={INK} strokeWidth="2" /></g>;
/** A crescent moon centred on (x, y). */
const Moon = ({ x, y }: { x: number; y: number }) =>
  <path d={`M${x} ${y - 14} A14 14 0 1 0 ${x + 13} ${y + 6} A11 11 0 1 1 ${x} ${y - 14} Z`} fill={INK} />;
/** A box (a load to lift) with its top-left corner at (x, y). */
const Load = ({ x, y, w = 34, h = 26 }: { x: number; y: number; w?: number; h?: number }) =>
  <g><rect x={x} y={y} width={w} height={h} rx="3" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d={`M${x} ${y + 8} H${x + w}`} stroke={INK} strokeWidth="1.5" /></g>;

// ==== Slipped disc ==========================================================================================

/** Vertebrae side on, front of the body to the left, from (x, y): discs between, the spinal cord and nerve roots
 *  behind; disc `bulge` pushes back onto its nerve root. */
const DiscStack = ({ x, y, n = 4, bulge = -1, lit = false, roots = true, thin = false }: { x: number; y: number; n?: number; bulge?: number; lit?: boolean; roots?: boolean; thin?: boolean }) =>
  <g>
    <path d={`M${x + 84} ${y - 6} V${y + n * 40 - 8}`} stroke={INK} strokeWidth="5" strokeLinecap="round" />
    {Array.from({ length: n }, (_, index) => {
      const top = y + index * 40, disc = top + 28;
      return <g key={index}>
        <rect x={x} y={top} width="60" height="28" rx="6" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <path d={`M${x + 60} ${top + 6} H${x + 72} V${top + 22} H${x + 60}`} fill="none" stroke={INK} strokeWidth="2" />
        {index < n - 1 && <rect x={x + 3} y={disc + (thin ? 4 : 1)} width="54" height={thin ? 4 : 10} rx={thin ? 2 : 4} fill={thin ? GOLD : SOFT} />}
        {index === bulge && <ellipse cx={x + 64} cy={disc + 6} rx="11" ry="6" fill={GOLD} />}
        {roots && index < n - 1 && <path d={`M${x + 84} ${disc + 6} C${x + 96} ${disc + 8} ${x + 110} ${disc + 14} ${x + 124} ${disc + 22}`} fill="none" stroke={index === bulge ? GOLD : INK} strokeWidth="3" strokeLinecap="round" />}
      </g>;
    })}
  </g>;

function DiscCushionBulge(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["A soft cushion bulges onto a nerve", "24 vertebrae, discs and nerve roots", "Outer layer tears; jelly bulges out", "Moving and loading keep discs strong", "Often no symptoms; nerves recover"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A cushion that bulges, not slips" label="A slipped disc" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Bones of the spine side on, with soft discs between them and one disc bulging onto a nerve root">
      <g opacity={at === 2 ? 0.4 : 1}><DiscStack x={24} y={20} bulge={at === 0 || at === 4 ? 1 : -1} /></g>
      {at === 0 && <><Ring x={88} y={74} r={16} still={still} /><Box x={244} y={56} w={120} text="Disc bulges" lit /><Box x={244} y={92} w={120} text="Presses a nerve" /><W x={244} y={130} size={10.5}>Also called prolapsed</W><W x={244} y={146} size={10.5}>or herniated</W></>}
      {at === 1 && <><Box x={244} y={40} w={124} text="24 vertebrae" /><Box x={244} y={78} w={124} text="Discs cushion" lit /><Box x={244} y={116} w={124} text="Nerve roots" /><W x={244} y={154} size={10.5}>The cord runs inside</W></>}
      {at === 2 && <><ellipse cx="236" cy="94" rx="54" ry="38" fill={WHITE} stroke={INK} strokeWidth="9" />
        <ellipse cx="232" cy="94" rx="24" ry="16" fill={GOLD} />
        <rect x="282" y="88" width="14" height="12" fill={WHITE} /><path d="M252 94 C268 92 282 92 300 94" stroke={GOLD} strokeWidth="9" strokeLinecap="round" fill="none" />
        <W x={236} y={44} size={10.5}>Fibrous outer layer</W><W x={236} y={152} size={10.5}>Jelly-like centre</W></>}
      {at === 3 && <><Box x={244} y={52} w={124} text="Movement helps" lit /><Box x={244} y={88} w={124} text="Loading helps" /><W x={244} y={128} size={10.5}>&ldquo;Slipped&rdquo; is not</W><W x={244} y={144} size={10.5}>an accurate word</W></>}
      {at === 4 && <><Box x={244} y={56} w={130} text="Often no symptoms" /><Box x={244} y={92} w={130} text="Nerves recover" lit /><W x={244} y={130} size={10.5}>Nerves are resilient</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DiscNervePaths(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Back or neck pain, tingling, weakness", "Sciatica: bottom and back of one leg", "Pins and needles, burning, hot or cold", "Worse arm numbness: GP urgently or 111", "Sciatica usually improves in 12 weeks"];
  const leg = at !== 3, arm = at === 0 || at === 3;
  const limb = (d: string) => <><path d={d} fill="none" stroke={INK} strokeWidth="14" strokeLinecap="round" /><path d={d} fill="none" stroke={WHITE} strokeWidth="8" strokeLinecap="round" /></>;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="From the spine to the toes" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body outline with one nerve running from the lower back down a leg and another from the neck down an arm">
      <g opacity={at === 4 ? 0 : 1}>
        <circle cx="86" cy="30" r="15" fill={WHITE} stroke={INK} strokeWidth="3" />
        {limb("M68 58 L54 120")}{limb("M104 58 L120 120")}{limb("M78 116 L74 182")}{limb("M96 116 L100 182")}
        <rect x="64" y="48" width="44" height="72" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M92 104 C96 120 98 150 100 182" fill="none" stroke={leg ? GOLD : SOFT} strokeWidth="3" strokeLinecap="round" strokeDasharray={leg ? "5 5" : undefined} className={leg && !still ? "lib-types-flow" : undefined} />
        <path d="M92 50 C104 58 112 90 120 120" fill="none" stroke={arm ? GOLD : SOFT} strokeWidth="3" strokeLinecap="round" strokeDasharray={arm ? "5 5" : undefined} className={arm && !still ? "lib-types-flow" : undefined} />
      </g>
      {at === 0 && <List x={168} y={52} lines={["Back or neck pain", "Numbness, tingling", "Muscle weakness", "Pain in hips or legs"]} gap={30} />}
      {at === 1 && <><Box x={234} y={46} w={120} text="Sciatica" lit /><Lines x={234} y={84} lines={["Bottom and back of", "one leg, often the toes"]} /><Lines x={234} y={136} lines={["Worse moving,", "sneezing or coughing"]} /></>}
      {at === 2 && ["Pins and needles", "Burning, shooting", "Hot or cold", "Hard to describe"].map((label, index) => <Box key={label} x={234} y={40 + index * 36} w={136} text={label} size={10} lit={index === 0} />)}
      {at === 3 && <><Box x={234} y={44} w={140} text="Urgent GP or 111" lit /><List x={170} y={84} lines={["Clumsy hands", "Arm numbness worse", "Arm weakness worse", "Balance or walking"]} gap={24} /></>}
      {at === 4 && <><W x={160} y={52} size={11}>Usually improves within</W>
        {Array.from({ length: 12 }, (_, week) => <rect key={week} x={40 + week * 20} y={70} width="16" height="22" rx="4" fill={INK} />)}
        <W x={160} y={112} size={10.5}>12 weeks</W><W x={160} y={146} size={10.5}>For some, up to a year</W><W x={160} y={166} size={10.5}>Sleep and stress play a part</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DiscAgeLoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Ageing, lifting, sitting, inactivity", "More likely as you get older", "Sudden or repeated overload", "Nicotine weakens the disc tissue", "Stress and poor sleep turn up pain"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Age, load and a few habits" label="Why it happens" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A short stack of spine bones and discs, with the everyday things that can strain a disc">
      <DiscStack x={20} y={28} roots={false} lit={at === 3} />
      {at === 0 && <List x={126} y={42} lines={["Ageing", "Exercising too hard", "Lifting the wrong way", "Long sitting or driving", "Inactive or overweight"]} gap={28} />}
      {at === 1 && <><g opacity="0.9"><DiscStack x={126} y={28} n={4} roots={false} thin /></g>
        <Arrow d="M108 16 H130" head="M123 10 L130 16 L123 22" />
        <W x={50} y={186} size={10.5}>Younger</W><W x={156} y={186} size={10.5}>Older</W>
        <Box x={268} y={70} w={92} text="Still strong" size={10} /><Box x={268} y={110} w={92} text="Stiffer" size={10} lit /></>}
      {at === 2 && <><Arrow d="M50 4 V22" head="M44 15 L50 22 L56 15" /><Arrow d="M80 4 V22" head="M74 15 L80 22 L86 15" />
        <Box x={226} y={52} w={150} text="Sudden overload" /><Box x={226} y={88} w={150} text="Repeated overload" lit />
        <Lines x={226} y={128} lines={["Pain in the back, or", "into the buttock and legs"]} /></>}
      {at === 3 && <><Cigarette x={222} y={60} /><Cross x={222} y={60} s={16} /><Lines x={222} y={104} lines={["Nicotine weakens", "the disc tissue"]} /><W x={222} y={150} size={10.5}>Raises sciatica risk</W></>}
      {at === 4 && <><Gauge x={222} y={100} r={50} value={0.78} /><W x={222} y={34} size={10.5}>Pain turned up by</W><Lines x={222} y={142} lines={["Stress, tiredness,", "poor sleep, low mood"]} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DiscRedFlags(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Numb bottom, cannot pee: 999 or A&E", "Do not drive: get a lift or call 999", "Cauda equina: an emergency", "In Scotland: NHS inform says phone 111", "Unwell or sudden pain: urgent GP, 111"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Urgent help" title="Signs that need help straight away" label="Urgent help" credit={urgentCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The bundle of nerves at the base of the spine, with the signs that need help straight away">
      {[16, 44, 72].map(top => <rect key={top} x="48" y={top} width="44" height="22" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />)}
      {Array.from({ length: 9 }, (_, index) => <path key={index} d={`M70 30 V96 C70 120 ${30 + index * 10} 134 ${30 + index * 10} 176`} fill="none" stroke={at === 2 ? GOLD : INK} strokeWidth="2.5" strokeLinecap="round" />)}
      {at === 0 && <><Box x={230} y={28} w={150} text="Call 999 or A&E" lit /><List x={162} y={66} lines={["Numb bottom or genitals", "Cannot pee", "Lost feeling in a leg", "No bladder or bowel control"]} gap={28} size={9.5} /></>}
      {at === 1 && <><Car x={230} y={44} /><Cross x={230} y={40} s={16} /><Box x={230} y={88} w={152} text="Ask someone to drive" /><Box x={230} y={122} w={152} text="Or call 999" lit /><W x={230} y={160} size={10.5}>Bring your medicines</W></>}
      {at === 2 && <><Box x={230} y={46} w={140} text="An emergency" lit /><Box x={230} y={82} w={140} text="Rare but serious" /><W x={230} y={120} size={10.5}>Urgent help via A&amp;E</W><W x={230} y={154} size={10}>Cauda equina means</W><W x={230} y={168} size={10}>horse&apos;s tail</W></>}
      {at === 3 && <><Box x={230} y={28} w={150} text="Scotland: phone 111" lit /><List x={162} y={66} lines={["Numb inner thighs", "Numb around back passage", "Harder to pee", "Leaking urine"]} gap={28} size={9.5} /></>}
      {at === 4 && <><Box x={230} y={28} w={150} text="Urgent GP or 111" lit /><List x={162} y={66} lines={["Hot, cold or shivery", "Generally unwell", "Severe, sudden pain", "Getting worse quickly"]} gap={28} size={9.5} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DiscStepPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Rest at first, then walk, swim, yoga", "Moving may hurt, but is not harmful", "Build up little and often", "Heat or ice: always use a towel", "Most improve within 6 weeks"];
  const Bed = ({ x, y }: { x: number; y: number }) => <g><rect x={x} y={y} width="56" height="12" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x} y={y - 10} width="14" height="10" rx="3" fill={SOFT} /><path d={`M${x} ${y + 12} V${y + 20} M${x + 56} ${y + 12} V${y + 20}`} stroke={INK} strokeWidth="2.5" /></g>;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Keep moving" title="Moving hurts, but it helps" label="Rest and movement" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Bars that grow a little each day, from rest towards gentle walking, swimming and yoga">
      {at !== 4 && <g opacity={at === 2 ? 1 : 0.3}>{Array.from({ length: 7 }, (_, day) => <rect key={day} x={28 + day * 40} y={164 - (12 + day * 8)} width="26" height={12 + day * 8} rx="4" fill={INK} />)}
        <path d="M20 166 H300" stroke={LINE} strokeWidth="3" /></g>}
      {at === 0 && <><Bed x={22} y={56} /><Arrow d="M88 58 H118" head="M111 52 L118 58 L111 64" />{["Walking", "Swimming", "Yoga"].map((label, index) => <Box key={label} x={160 + index * 60} y={58} w={56} text={label} size={9.5} lit={index === 0} />)}</>}
      {at === 1 && <><Bed x={30} y={56} /><Cross x={58} y={54} s={18} /><W x={58} y={98} size={10}>Long bed rest</W><Box x={210} y={46} w={160} text="Moving: not harmful" lit /><W x={210} y={82} size={10.5}>It can help you get better</W></>}
      {at === 2 && <><W x={160} y={44} size={11}>A little more each day</W><W x={160} y={64} size={10.5}>Sore at first is usually not harm</W></>}
      {at === 3 && <><Bottle x={60} y={58} lit /><rect x="32" y="84" width="56" height="8" rx="3" fill={GOLD} /><Box x={210} y={40} w={150} text="A towel between" lit /><Box x={210} y={74} w={150} text="Change position" /></>}
      {at === 4 && <><path d="M30 120 H290" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
        {[{ x: 30, t: "Start" }, { x: 110, t: "2 weeks" }, { x: 230, t: "6 weeks" }].map(tick => <g key={tick.t}><circle cx={tick.x} cy={120} r={tick.x === 230 ? 10 : 7} fill={tick.x === 230 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={tick.x} y={150} size={10}>{tick.t}</W></g>)}
        <Ring x={230} y={120} r={17} still={still} /><W x={110} y={88} size={10.5}>Biggest change</W><W x={230} y={88} size={10.5}>Most improved</W><W x={160} y={176} size={10}>If not, talk to a professional</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DiscPillDays(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Ibuprofen taken regularly", "Paracetamol alone: not for back pain", "Codeine: only for a few days", "Amitriptyline can take 6 weeks to work", "After 4 days: ask a pharmacist"];
  const strip = (count: number, lit: number, label: string) => <g>{Array.from({ length: count }, (_, index) => <rect key={index} x={160 - count * 12 + index * 24} y={130} width="20" height="20" rx="4" fill={index < lit ? INK : WHITE} stroke={INK} strokeWidth="1.5" />)}<W x={160} y={172} size={10}>{label}</W></g>;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Regular, short and checked" label="Pain medicines" credit={medsCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Pain medicines for a slipped disc, with how long each is used">
      {at === 0 && <><Pill x={64} y={52} /><W x={64} y={86} size={10.5}>Ibuprofen</W><Box x={210} y={46} w={130} text="Regularly" lit /><W x={210} y={80} size={10}>up to the daily amount</W>{strip(10, 10, "Tablets: no more than 10 days, unless a doctor says")}</>}
      {at === 1 && <><Pill x={64} y={52} fill={TEXT} /><W x={64} y={86} size={10.5}>Paracetamol</W><Box x={210} y={46} w={150} text="Not on its own" /><W x={210} y={80} size={10}>May go with another</W><Box x={160} y={136} w={210} text="Unlikely to help sciatica" lit /></>}
      {at === 2 && <><Box x={90} y={50} w={130} text="Codeine" lit /><Lines x={90} y={86} lines={["A few days only:", "it can be addictive"]} size={10} /><Box x={236} y={50} w={130} text="Muscle relaxant" /><Lines x={236} y={86} lines={["Diazepam: short", "term, up to 4 weeks"]} size={10} />{strip(4, 4, "Up to 4 weeks for diazepam")}</>}
      {at === 3 && <><Moon x={58} y={52} /><W x={64} y={92} size={10.5}>Evening</W><Box x={210} y={46} w={140} text="Amitriptyline" lit /><W x={210} y={80} size={10}>Low dose, for nerve pain</W>{strip(6, 6, "Weeks it can take to work")}</>}
      {at === 4 && <><path d="M54 40 h12 v12 h12 v12 h-12 v12 h-12 v-12 h-12 v-12 h12 Z" fill={INK} /><Box x={210} y={46} w={150} text="Ask a pharmacist" lit /><Lines x={210} y={80} lines={["Other medicines?", "Other health problems?"]} size={10} />{strip(5, 4, "Still need pain relief after 4 days?")}</>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DiscKneeRolls(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Many areas: refer yourself to MSK", "Assessment, then exercises at home", "Ask a physiotherapist before starting", "Knee rolls and a knee hug, lying down", "Keep pain within 0 to 5 out of 10"];
  const legs = (rot: number, opacity = 1) => <g opacity={opacity} transform={`rotate(${rot} 112 96)`}><path d="M112 96 L132 66 L152 94" fill="none" stroke={INK} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /></g>;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Physiotherapy" title="Little and often, with a guide" label="Physiotherapy" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person lying on a bed with knees bent, doing gentle exercises">
      <rect x="18" y="104" width="160" height="12" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M24 116 V130 M172 116 V130" stroke={INK} strokeWidth="3" />
      <circle cx="40" cy="90" r="11" fill={INK} /><path d="M52 96 H112" stroke={INK} strokeWidth="9" strokeLinecap="round" />
      {at === 3 ? <>{legs(28, 0.35)}{legs(0)}</> : legs(0)}
      {at === 0 && <><Box x={250} y={46} w={118} text="Refer yourself" lit /><Lines x={250} y={82} lines={["NHS MSK services,", "no GP needed", "in many areas"]} size={10} /></>}
      {at === 1 && <List x={196} y={42} lines={["Assess movement", "Home exercises", "Advice on pain", "Hands-on care"]} gap={28} />}
      {at === 2 && <><Box x={250} y={46} w={110} text="Ask first" lit /><Lines x={250} y={82} lines={["A physiotherapist or", "health professional"]} size={10} /><W x={250} y={130} size={10}>Stop if it hurts</W></>}
      {at === 3 && <><Box x={250} y={46} w={110} text="Knee rolls" lit /><Box x={250} y={82} w={110} text="Knee hug" /><W x={250} y={120} size={10}>Slowly, side to side</W></>}
      {at === 4 && <><Lines x={250} y={44} lines={["Higher? Fewer reps,", "slower, more rest"]} size={10} /><PainScale x={39} y={144} upTo={5} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DiscStepsPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Severe sciatica: perhaps an epidural", "Steroids ease inflammation and pain", "MRI if symptoms do not get better", "Surgery is not usually needed", "Back to work around 4 to 6 weeks"];
  const stops = [{ x: 50, t: "Everyday care" }, { x: 125, t: "Injection" }, { x: 200, t: "MRI scan" }, { x: 275, t: "Surgery" }];
  const lit = [1, 1, 2, 3, 3][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Treatment" title="When the usual steps are not enough" label="Injections and surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path of treatment steps: everyday care, an injection, an MRI scan and, rarely, surgery">
      <path d="M30 104 H295" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {stops.map((stop, index) => <g key={stop.t} opacity={index === lit || index === 0 ? 1 : 0.45}><circle cx={stop.x} cy={104} r={index === lit ? 11 : 8} fill={index === lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={stop.x} y={132} size={10}>{stop.t}</W></g>)}
      {at === 0 && <><W x={160} y={36} size={10.5}>Severe sciatica, not helped?</W><Box x={160} y={64} w={140} text="An epidural" lit /></>}
      {at === 1 && <><Box x={98} y={46} w={136} text="Less inflammation" /><Arrow d="M170 46 H192" head="M185 40 L192 46 L185 52" /><Box x={246} y={46} w={92} text="Less pain" lit /><W x={160} y={78} size={10}>Most have no side effects</W></>}
      {at === 2 && <><W x={160} y={36} size={10.5}>Not getting better?</W><Box x={160} y={64} w={170} text="MRI: 15 min to 1 hour" lit /><W x={160} y={162} size={10}>Results usually in 1 to 2 weeks</W></>}
      {at === 3 && <><Box x={160} y={50} w={170} text="Not usually needed" lit /><Lines x={160} y={160} lines={["Other treatments not helped, or", "worse weakness or numbness"]} size={10} /></>}
      {at === 4 && <><Box x={160} y={50} w={130} text="Discectomy" lit />
        <rect x="40" y="164" width="240" height="12" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="40" y="164" width="120" height="12" rx="6" fill={INK} />
        <W x={100} y={156} size={10}>Work: 4 to 6 weeks</W><W x={236} y={156} size={10}>All: up to 12</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DiscLiftClose(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Lifting the wrong way can play a part", "Stop and think; ask for help", "Bend your knees, keep it close", "Never twist and bend together", "Loading keeps discs healthy"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Lifting" title="Stop, bend, keep it close" label="Lifting and bending" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person lifting a box with bent knees, keeping it close to the body">
      {at === 0 && <><Figure x={80} y={112} lean={48} hand={[140, 148]} /><Load x={136} y={144} /><Cross x={110} y={70} s={12} /><Box x={250} y={56} w={116} text="Lift safely" lit /><Lines x={250} y={92} lines={["It may help prevent", "more back pain"]} size={10} /></>}
      {at === 1 && <><Figure x={80} y={112} /><circle cx="122" cy="40" r="16" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="104" cy="58" r="4" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={122} y={46} size={16} fill={INK}>?</W><Load x={128} y={140} w={40} h={30} />
        <List x={198} y={50} lines={["The load", "The distance", "Your back", "Ask for help"]} gap={28} /></>}
      {at === 2 && <><Figure x={78} y={124} sit lean={14} hand={[118, 120]} /><Load x={110} y={106} /><Box x={250} y={52} w={120} text="Bend your knees" lit /><Box x={250} y={88} w={120} text="Keep it close" /><Box x={250} y={124} w={120} text="Feet hip width" /></>}
      {at === 3 && <><Figure x={80} y={112} /><rect x="56" y="150" width="16" height="20" rx="3" fill={TINT} stroke={INK} strokeWidth="2" /><rect x="94" y="150" width="16" height="20" rx="3" fill={TINT} stroke={INK} strokeWidth="2" />
        <Box x={244} y={52} w={136} text="No twist and bend" lit /><Box x={244} y={88} w={136} text="Use both hands" /><Box x={244} y={124} w={136} text="Rucksack, 2 straps" /></>}
      {at === 4 && <><Figure x={80} y={112} /><Box x={244} y={52} w={140} text="Loading helps discs" lit /><Lines x={244} y={92} lines={["Too much alone?", "Get help or", "use equipment"]} size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DiscDeskTimer(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["No need to be pain free to go back", "Lighter duties or fewer hours a while", "Back supported, feet on the floor", "Move every 20 to 45 minutes", "Access to Work can help with costs"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work" title="Back to work, step by step" label="Work and sitting" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person sitting at a desk with a supported back, feet down and the screen in front of them">
      <path d="M62 70 V128 H110 M66 128 V168" fill="none" stroke={TEXT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {at === 2 && <rect x="62" y="98" width="10" height="20" rx="4" fill={GOLD} />}
      <Figure x={80} y={122} sit hand={[132, 110]} />
      {at === 2 && <rect x="98" y="164" width="30" height="8" rx="3" fill={GOLD} />}
      <path d="M124 114 H204 M134 114 V168 M196 114 V168" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <rect x="152" y="74" width="40" height="30" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M172 104 V114" stroke={INK} strokeWidth="3" />
      {at === 0 && <><Box x={262} y={50} w={96} text="Go back" lit /><Lines x={262} y={84} lines={["No need to be", "pain free first"]} size={10} /></>}
      {at === 1 && <List x={212} y={50} lines={["Talk to employer", "Lighter duties", "Fewer hours", "Occupational", "health advice"]} gap={22} />}
      {at === 2 && <List x={212} y={50} lines={["Back supported", "Feet on floor", "Or a footrest", "Screen ahead"]} gap={26} />}
      {at === 3 && <><Clock x={262} y={58} r={22} hand={2} /><Lines x={262} y={104} lines={["Every 20 to 45", "minutes: get up,", "stretch, move"]} size={10} /></>}
      {at === 4 && <><Box x={262} y={46} w={100} text="Access to Work" lit size={10} /><Lines x={262} y={80} lines={["Equipment,", "travel costs,", "workplace", "changes"]} size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DiscMattressHand(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Regular bed and wake times; no naps", "Most comfortable is best", "Big gap under your back: too hard", "Roll to your side, push up with arms", "A low, firm pillow, head level"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sleep" title="Comfort beats the perfect mattress" label="Sleep" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person lying on a mattress, with a hand sliding under the small of the back to test it">
      <rect x="16" y="112" width="186" height="22" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M22 134 V150 M196 134 V150" stroke={INK} strokeWidth="3" />
      {at === 4 && <ellipse cx="42" cy="104" rx="22" ry="7" fill={GOLD} />}
      {at === 3 ? <><circle cx="44" cy="94" r="11" fill={INK} /><path d="M56 100 C80 96 104 98 120 100 L148 86 L164 102" fill="none" stroke={INK} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <Arrow d="M150 66 C140 50 124 46 110 50" head="M117 44 L110 50 L118 55" /></>
        : <><circle cx="44" cy={at === 4 ? 92 : 98} r="11" fill={INK} /><path d="M56 104 H184" stroke={INK} strokeWidth="9" strokeLinecap="round" /></>}
      {at === 2 && <><ellipse cx="104" cy="109" rx="16" ry="4" fill={GOLD} /><path d="M120 109 H136" stroke={GOLD} strokeWidth="5" strokeLinecap="round" /></>}
      {at === 0 && <><Moon x={256} y={44} /><Lines x={262} y={86} lines={["Same bedtime,", "same wake time,", "no daytime naps"]} size={10} /></>}
      {at === 1 && <><Box x={262} y={50} w={106} text="Comfort first" lit size={10} /><Lines x={262} y={86} lines={["No best position", "or mattress"]} size={10} /></>}
      {at === 2 && <><W x={262} y={46} size={10}>Large gap:</W><Box x={262} y={66} w={96} text="Too hard" lit /><W x={262} y={104} size={10}>Hard to push in:</W><Box x={262} y={124} w={96} text="Too soft" /></>}
      {at === 3 && <List x={210} y={50} lines={["Roll to your side", "Push up with arms", "Leg to the floor"]} gap={28} />}
      {at === 4 && <Lines x={262} y={52} lines={["Low, firm pillow", "Head level with", "your body", "Not on your front"]} gap={20} size={10} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DiscWeekPlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Some things reduce the chance", "150 minutes a week, strength on 2 days", "Lift safely, sit well at a computer", "Healthy weight; do not smoke", "Find and manage causes of stress"];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Prevention" title="Keeping it from coming back" label="Stopping it coming back" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of regular activity, with habits that help stop back pain coming back">
      <g opacity={at === 1 ? 1 : 0.4}>{days.map((day, index) => <g key={index}>
        <W x={42 + index * 40} y={30} size={10}>{day}</W>
        <rect x={26 + index * 40} y={38} width="32" height="62" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x={30 + index * 40} y={70} width="24" height="26" rx="4" fill={INK} />
        {(index === 1 || index === 4) && <><rect x={30 + index * 40} y={44} width="24" height="20" rx="4" fill={GOLD} /><W x={42 + index * 40} y={58} size={10} fill={INK}>S</W></>}
      </g>)}</g>
      {at === 0 && <><Box x={160} y={136} w={160} text="It can come back" /><W x={160} y={170} size={10.5}>Exercise, safe lifting, not smoking</W></>}
      {at === 1 && <><W x={160} y={128} size={10.5}>150 minutes of moderate activity</W><W x={160} y={148} size={10.5}>S: strength, including the back</W></>}
      {at === 2 && <><Box x={90} y={136} w={116} text="Lift safely" lit /><Box x={230} y={136} w={116} text="Sit well" /><W x={160} y={172} size={10.5}>Keep muscles strong, flexible</W></>}
      {at === 3 && <><Box x={90} y={140} w={130} text="Healthy weight" /><Cigarette x={232} y={136} /><Cross x={232} y={136} s={14} /><W x={232} y={168} size={10.5}>Do not smoke</W></>}
      {at === 4 && <><W x={160} y={132} size={10.5}>Stress can make pain worse</W><Box x={160} y={160} w={170} text="Find the causes" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Scoliosis ============================================================================================

/** A spine seen from behind, from (x, y) down: `n` small vertebrae, curving `amp` to the side in a C or an S. */
const BackSpine = ({ x, y, n = 11, gap = 13, amp = 0, kind = "c", lit = false, mark = [] }: { x: number; y: number; n?: number; gap?: number; amp?: number; kind?: "c" | "s"; lit?: boolean; mark?: number[] }) => {
  const at = (index: number) => { const t = index / (n - 1); return x + amp * (kind === "c" ? Math.sin(Math.PI * t) : Math.sin(2 * Math.PI * t)); };
  const points = Array.from({ length: n }, (_, index) => [at(index), y + index * gap + 5] as const);
  return <g>
    <path d={points.map(([px, py], index) => `${index ? "L" : "M"}${px} ${py}`).join(" ")} fill="none" stroke={LINE} strokeWidth="4" />
    {points.map(([px, py], index) => <rect key={index} x={px - 11} y={py - 5} width="22" height="10" rx="3" fill={mark.includes(index) ? GOLD : lit ? INK : WHITE} stroke={INK} strokeWidth="2" />)}
  </g>;
};
/** A neutral outline of a back, neck at (x, y); `tilt` makes one shoulder higher than the other. */
const BackOutline = ({ x, y, tilt = 0 }: { x: number; y: number; tilt?: number }) =>
  <g fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round">
    <circle cx={x} cy={y - 16} r="13" fill={WHITE} />
    <path d={`M${x - 46} ${y + 12 + tilt} Q${x} ${y - 4} ${x + 46} ${y + 12 - tilt} L${x + 38} ${y + 84} L${x + 44} ${y + 128} L${x - 44} ${y + 128} L${x - 38} ${y + 84 + tilt / 2} Z`} fill={WHITE} />
  </g>;

function ScolCAndS(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Curves to the side, sometimes an S", "Not rare, and nobody's fault", "8 in 10: the cause is unknown", "In the chest or the lower back", "Most people live normal, active lives"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A curve, a twist, nobody's fault" label="Scoliosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two spines seen from behind: one with a single sideways curve and one curving like an S">
      <BackSpine x={64} y={26} amp={16} mark={at === 3 ? [2, 3, 4] : []} />
      <BackSpine x={144} y={26} amp={13} kind="s" mark={at === 3 ? [7, 8, 9] : []} />
      <W x={70} y={186} size={10}>One curve</W><W x={144} y={186} size={10}>An S shape</W>
      {at === 0 && <><Ring x={80} y={80} r={20} still={still} /><Box x={250} y={56} w={116} text="Curve and twist" lit /><Lines x={250} y={92} lines={["The twist can pull", "the ribcage out of place"]} size={10} /></>}
      {at === 1 && <><Box x={250} y={52} w={116} text="Over 2 million" lit /><W x={250} y={80} size={10}>in the UK</W><Lines x={250} y={116} lines={["Not posture, and", "not anyone's fault"]} size={10} /></>}
      {at === 2 && <>{Array.from({ length: 10 }, (_, index) => <circle key={index} cx={214 + (index % 5) * 18} cy={56 + Math.floor(index / 5) * 22} r="7" fill={index < 8 ? INK : WHITE} stroke={INK} strokeWidth="2" />)}
        <W x={250} y={114} size={10.5}>Cause unknown</W><Lines x={250} y={140} lines={["Can run in", "families"]} size={10} /></>}
      {at === 3 && <><Box x={250} y={60} w={120} text="Chest: thoracic" size={10} /><Box x={250} y={140} w={120} text="Lower back: lumbar" size={10} /></>}
      {at === 4 && <><Box x={250} y={56} w={116} text="Normal lives" lit /><Lines x={250} y={92} lines={["Most activities,", "exercise and sport"]} size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ScolAbcd(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Uneven shoulders, hips or waist", "Asymmetry, bend, curve, diagnosis", "Bending forward can show a rib bulge", "Adults: back pain, less flexibility", "Think it is scoliosis? See a GP"];
  const tiles = [{ l: "A", t: "Asymmetry" }, { l: "B", t: "Bend" }, { l: "C", t: "Curve" }, { l: "D", t: "Diagnosis" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Signs" title="The ABCD of spotting a curve" label="Signs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An outline of a back with one shoulder a little higher, and a person bending forward">
      {at === 2 ? <g>
        <path d="M62 112 L56 172 M62 112 L70 172" stroke={INK} strokeWidth="7" strokeLinecap="round" />
        <path d="M62 112 C80 100 112 100 132 112" fill="none" stroke={INK} strokeWidth="10" strokeLinecap="round" />
        <path d="M84 102 C92 90 106 92 110 104" fill={GOLD} stroke={GOLD} strokeWidth="2" />
        <path d="M128 114 L130 152" stroke={INK} strokeWidth="6" strokeLinecap="round" /><circle cx="140" cy="128" r="11" fill={INK} />
      </g> : <g>
        <BackOutline x={90} y={44} tilt={7} />
        <BackSpine x={90} y={52} n={9} gap={12} amp={7} />
        {at === 0 && <path d="M30 50 H150 M30 154 H150" stroke={GOLD} strokeWidth="2" strokeDasharray="4 4" />}
      </g>}
      {at === 0 && <List x={180} y={52} lines={["Uneven shoulders", "One hip sticks out", "Ribs out on one side", "Clothes not fitting"]} gap={30} />}
      {at === 1 && tiles.map((tile, index) => { const cx = 210 + (index % 2) * 64, cy = 50 + Math.floor(index / 2) * 70; return <g key={tile.l}>
        <rect x={cx - 24} y={cy - 22} width="48" height="40" rx="8" fill={index === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={cx} y={cy + 6} size={20} fill={index === 0 ? WHITE : INK}>{tile.l}</W><W x={cx} y={cy + 34} size={10}>{tile.t}</W></g>; })}
      {at === 2 && <><Box x={244} y={52} w={124} text="Bend forward" lit /><Lines x={244} y={88} lines={["A bulge may show", "on one side"]} size={10} /><W x={244} y={140} size={10}>Not a diagnosis</W></>}
      {at === 3 && <List x={180} y={56} lines={["Back pain", "Weak legs or feet", "Less flexibility"]} gap={32} />}
      {at === 4 && <><Box x={244} y={56} w={110} text="See a GP" lit /><Lines x={244} y={92} lines={["Unlikely to be", "serious, but best", "checked"]} size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** Three vertebrae from the front, centred on x, each tilted a little more than the last, with discs between. */
const TiltStack = ({ x, y, tilts, thin = false }: { x: number; y: number; tilts: number[]; thin?: boolean }) => {
  const rot = (px: number, py: number, cx: number, cy: number, deg: number) => { const a = deg * Math.PI / 180; return [cx + (px - cx) * Math.cos(a) - (py - cy) * Math.sin(a), cy + (px - cx) * Math.sin(a) + (py - cy) * Math.cos(a)]; };
  const centre = (index: number) => [x + index * 6 * (tilts[index] ? 1 : 0), y + index * 44] as const;
  const corner = (index: number, dx: number, dy: number) => { const [cx, cy] = centre(index); return rot(cx + dx, cy + dy, cx, cy, tilts[index]); };
  return <g>
    {tilts.slice(0, -1).map((_, index) => { const pts = [corner(index, -32, 14), corner(index, 32, 14), corner(index + 1, 32, -14), corner(index + 1, -32, -14)];
      return <path key={index} d={`M${pts.map(([px, py]) => `${px} ${py}`).join(" L")} Z`} fill={thin ? GOLD : SOFT} />; })}
    {tilts.map((deg, index) => { const [cx, cy] = centre(index); return <rect key={index} x={cx - 32} y={cy - 14} width="64" height="28" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" transform={`rotate(${deg} ${cx} ${cy})`} />; })}
  </g>;
};

function ScolTiltedDiscs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A curve from youth, or a new one", "Uneven wear tilts the vertebrae", "Joint, nerve and tired muscle pain", "Many have no symptoms", "Most adults will not need surgery"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Adults" title="When age bends the spine" label="Scoliosis in adults" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three spine bones from the front, tilting more as the discs between them wear unevenly">
      {at !== 4 && <TiltStack x={78} y={46} tilts={at === 1 ? [0, 8, 16] : [0, 4, 8]} thin={at === 1} />}
      {at === 0 && <><Box x={236} y={50} w={136} text="Since younger" /><Box x={236} y={86} w={136} text="New: de novo" lit /><W x={236} y={124} size={10}>Often found after 50</W></>}
      {at === 1 && <Lines x={236} y={60} lines={["Discs lose height", "and wear unevenly,", "so the bones tilt", "and rotate"]} gap={18} size={10} />}
      {at === 2 && <List x={176} y={56} lines={["Worn joints", "Squashed nerves", "Tired muscles"]} gap={32} />}
      {at === 3 && <><Box x={236} y={52} w={136} text="Many: no symptoms" lit size={10} /><Lines x={236} y={92} lines={["Under 30 degrees:", "rarely gets bigger"]} size={10} /></>}
      {at === 4 && <><Figure x={86} y={118} lean={10} hand={[116, 128]} /><path d="M118 126 L122 172" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <Box x={236} y={46} w={136} text="Most: no surgery" lit size={10} /><List x={178} y={84} lines={["Painkillers", "Physiotherapy", "Low-impact exercise", "A stick or rollator"]} gap={22} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ScolCobbAngle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["GP, then specialist and an X-ray", "The Cobb angle: the curve in degrees", "Some curves flatten lying down", "MRI for nerves, CT for bone", "A few minutes; tell them if pregnant"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="One angle, measured standing up" label="X-rays and measuring" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An X-ray outline of a curved spine with two lines drawn to measure the angle of the curve">
      <rect x="28" y="18" width="112" height="168" rx="8" fill={TEXT} />
      <g opacity="0.9"><BackSpine x={76} y={28} n={12} gap={13} amp={at === 2 ? 4 : 14} /></g>
      {at === 1 && <><path d="M48 30 L150 46 M48 166 L150 130" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /><path d="M136 44 A40 40 0 0 1 136 134" fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="3 3" /></>}
      {at === 0 && <List x={170} y={60} lines={["See a GP", "Specialist referral", "An X-ray of the back"]} gap={32} />}
      {at === 1 && <><Box x={236} y={56} w={120} text="Cobb angle" lit /><Lines x={236} y={92} lines={["The size of the", "curve, in degrees"]} size={10} /></>}
      {at === 2 && <><Lines x={236} y={46} lines={["Standing: the spine", "under load"]} size={10} /><circle cx="190" cy="140" r="9" fill={INK} /><path d="M202 142 H290" stroke={INK} strokeWidth="8" strokeLinecap="round" /><W x={236} y={170} size={10}>Lying: may flatten</W></>}
      {at === 3 && <List x={160} y={60} lines={["MRI: nerves, discs", "CT: the bones", "DEXA: bone density"]} gap={32} />}
      {at === 4 && <><Clock x={236} y={56} r={20} hand={1} /><W x={236} y={98} size={10}>A few minutes</W><Box x={236} y={130} w={140} text="Might be pregnant?" lit size={10} /><W x={236} y={162} size={10}>Tell them first</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ScolWatchDial(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Small curves: often just watched", "Children: checks every 6 to 12 months", "Adults: under 30 degrees rarely grows", "X-rays mainly when there are symptoms"];
  const cx = 104, cy = 140, r = 74;
  const point = (deg: number, radius = r) => { const a = Math.PI * (1 - deg / 60); return [cx + radius * Math.cos(a), cy - radius * Math.sin(a)] as const; };
  const arc = (from: number, to: number) => { const [x1, y1] = point(from), [x2, y2] = point(to); return `M${x1} ${y1} A${r} ${r} 0 0 1 ${x2} ${y2}`; };
  const needle = [15, 20, 25, -1][at];
  const [nx, ny] = point(Math.max(needle, 0), r - 18);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Monitoring" title="Most curves just need watching" label="Checks and monitoring" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A dial of curve sizes from 0 to 60 degrees, with small curves at the low end">
      <path d={arc(0, 60)} fill="none" stroke={LINE} strokeWidth="14" strokeLinecap="round" />
      <path d={arc(0, 30)} fill="none" stroke={at === 2 ? INK : SOFT} strokeWidth="14" strokeLinecap="round" />
      <path d={arc(50, 60)} fill="none" stroke={at === 2 ? GOLD : LINE} strokeWidth="14" strokeLinecap="round" />
      {needle >= 0 && <><path d={`M${cx} ${cy} L${nx} ${ny}`} stroke={TEXT} strokeWidth="4" strokeLinecap="round" /><circle cx={cx} cy={cy} r="6" fill={TEXT} /></>}
      <W x={30} y={164} size={10}>0°</W><W x={104} y={52} size={10}>30°</W><W x={178} y={164} size={10}>60°</W>
      {at === 0 && <><Box x={262} y={56} w={92} text="Watch it" lit /><Lines x={262} y={92} lines={["Seen again to", "see how it", "changes"]} size={10} /></>}
      {at === 1 && <><Cal x={240} y={56} w={34} lit /><Cal x={284} y={56} w={34} /><Lines x={262} y={100} lines={["Every 6 to", "12 months", "while growing"]} size={10} /></>}
      {at === 2 && <><Lines x={262} y={52} lines={["Under 30°:", "rarely grows"]} size={10} /><Lines x={262} y={104} lines={["50° or more:", "about 1° a year"]} size={10} /></>}
      {at === 3 && <><Box x={262} y={56} w={96} text="Symptoms" lit size={10} /><Lines x={262} y={90} lines={["guide X-rays", "and treatment"]} size={10} /><W x={262} y={140} size={10}>Stay active</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ScolBracePads(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Adults: support for pain, sparingly", "Children: may stop a curve worsening", "Custom-made; usually 23 hours a day", "In one study, fewer needed surgery", "It can be hard; you are not alone"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Braces" title="A support, not a straightener" label="Back braces" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body outline wearing a back brace with pads that press on the curve">
      <g opacity={at === 3 ? 0.35 : 1}>
        <BackOutline x={86} y={44} />
        <rect x="48" y="86" width="76" height="62" rx="16" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M52 100 H120 M52 136 H120" stroke={INK} strokeWidth="1.5" strokeDasharray="4 3" />
        {[[58, 104], [114, 118], [58, 132]].map(([px, py]) => <rect key={`${px}${py}`} x={px - 5} y={py - 7} width="10" height="14" rx="3" fill={at === 1 ? GOLD : SOFT} />)}
      </g>
      {at === 0 && <><Box x={236} y={52} w={144} text="Supports, eases pain" lit size={10} /><Lines x={236} y={88} lines={["Use sparingly, so", "muscles stay strong"]} size={10} /></>}
      {at === 1 && <><W x={236} y={42} size={10}>While growing:</W><Box x={236} y={66} w={150} text="May stop it worsening" lit size={10} /><W x={236} y={102} size={10}>It will not correct it</W></>}
      {at === 2 && <><Clock x={236} y={56} r={22} hand={5.6} /><Box x={236} y={102} w={120} text="23 hours a day" lit size={10} /><Lines x={236} y={136} lines={["Custom-made, fitted", "by an orthotist"]} size={10} /></>}
      {at === 3 && <><W x={232} y={36} size={10}>Did not need surgery</W>
        <rect x="186" y={160 - 94} width="40" height="94" rx="4" fill={INK} /><rect x="242" y={160 - 69} width="40" height="69" rx="4" fill={SOFT} />
        <W x={206} y={60} size={10.5}>72%</W><W x={262} y={85} size={10.5}>53%</W><W x={206} y={176} size={10}>Brace</W><W x={262} y={176} size={10}>No brace</W></>}
      {at === 4 && <><ellipse cx="226" cy="52" rx="40" ry="18" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={226} y={56} size={10}>Hard at times</W>
        <ellipse cx="256" cy="98" rx="46" ry="18" fill={INK} /><W x={256} y={102} size={10} fill={WHITE}>Not alone</W><Lines x={236} y={140} lines={["Peer groups, and", "people you trust"]} size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ScolRodsRecovery(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Considered for severe curves or pain", "Decompression, or fusion with rods", "A major operation, with risks", "Over 10 days in hospital, then help", "Work around 3 months, normal by 6"];
  const rods = at >= 1;
  const stops = ["Over 10 days: hospital", "8 weeks: no driving", "3 months: work", "6 months: normal"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Surgery" title="Rods, bone and a long recovery" label="Surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A spine seen from behind, held straighter by two rods, beside the steps of recovery">
      <BackSpine x={80} y={26} amp={rods ? 3 : 15} />
      {rods && <><path d="M66 30 V172 M96 30 V172" stroke={at === 1 ? GOLD : INK} strokeWidth="4" strokeLinecap="round" />
        {[40, 82, 124, 166].map(py => <g key={py}><circle cx="66" cy={py} r="3.5" fill={INK} /><circle cx="96" cy={py} r="3.5" fill={INK} /></g>)}</>}
      {at === 0 && ["Severe curve", "Severe pain", "Squashed nerves"].map((label, index) => <Box key={label} x={226} y={52 + index * 38} w={140} text={label} lit={index === 0} />)}
      {at === 1 && <><Box x={226} y={48} w={140} text="Decompression" /><Box x={226} y={84} w={140} text="Fusion with rods" lit /><Lines x={226} y={122} lines={["Bone grows solid,", "over about 12 months"]} size={10} /></>}
      {at === 2 && <><Box x={226} y={48} w={140} text="Better for leg pain" lit size={10} /><List x={166} y={88} lines={["Infection", "A blood clot", "Rarely, nerve damage"]} gap={24} /></>}
      {at >= 3 && <><path d="M160 40 V148" stroke={LINE} strokeWidth="4" />
        {stops.map((label, index) => { const on = at === 3 ? index < 2 : index >= 2; return <g key={label} opacity={on ? 1 : 0.4}><circle cx="160" cy={40 + index * 36} r="7" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={174} y={44 + index * 36} size={10} anchor="start">{label}</W></g>; })}
        <W x={226} y={178} size={10}>{at === 3 ? "Help to cook, clean, shop" : "Full recovery: a year or more"}</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ScolPainSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Nerves, joints and tired muscles", "NSAIDs first; see a GP if not working", "Injections and a pain management team", "Heat or cold for 15 to 20 minutes", "Numb genitals, both legs: 999 or A&E"];
  const steps = ["Painkillers", "Injections", "Pain team", "Heat, exercise"];
  const lit = [[], [0], [1, 2], [3], []][at];
  return <MemoryBand props={props} state={s} tone={"theme-deep"} kicker="Pain" title="Easing pain, knowing the urgent signs" label="Managing pain" credit={at === 4 ? urgentCredit : medsCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Steps for easing back pain, and the urgent signs that mean calling 999">
      {at !== 4 && steps.map((label, index) => <Box key={label} x={80} y={40 + index * 38} w={124} text={label} lit={lit.includes(index)} dim={at !== 0 && !lit.includes(index)} />)}
      {at === 0 && <List x={168} y={56} lines={["Irritated nerves", "Strained joints", "Tight, tired muscles"]} gap={32} />}
      {at === 1 && <><Pill x={236} y={48} /><W x={236} y={80} size={10}>NSAIDs first</W><W x={236} y={110} size={10}>Not helping?</W><Box x={236} y={134} w={100} text="See a GP" lit /></>}
      {at === 2 && <><Lines x={236} y={52} lines={["Injections last", "weeks or months"]} size={10} /><Box x={236} y={106} w={110} text="Pain team" lit /><W x={236} y={140} size={10}>Ways to cope</W></>}
      {at === 3 && <><Bottle x={236} y={64} lit /><W x={236} y={112} size={10}>15 to 20 minutes</W><W x={236} y={132} size={10}>Never on the skin</W></>}
      {at === 4 && <><Box x={160} y={32} w={200} text="Call 999 or go to A&E" lit /><List x={56} y={74} lines={["Both legs: numb, weak, tingling", "Lost feeling: genitals or anus", "Bladder or bowel changes", "Do not drive: a lift, or 999"]} gap={28} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ScolMoveWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Good for health; may ease back pain", "Check with a GP or physio first", "Pick something you enjoy", "Keep it up, or the benefits fade", "150 minutes a week, strength on 2 days"];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exercise" title="Move more, whatever your curve" label="Exercise and sport" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Swimming, Pilates and yoga, three activities that keep the back moving">
      <g opacity={at === 2 || at === 0 ? 1 : 0.45}>
        <circle cx="62" cy="54" r="9" fill={INK} /><path d="M40 62 C52 48 72 48 84 60" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <path d="M30 74 q8 -6 16 0 t16 0 t16 0 t16 0 M30 86 q8 -6 16 0 t16 0 t16 0 t16 0" fill="none" stroke={SOFT} strokeWidth="3" strokeLinecap="round" />
        <rect x="128" y="88" width="64" height="6" rx="3" fill={SOFT} /><circle cx="140" cy="76" r="8" fill={INK} /><path d="M150 80 L182 84 L170 60" fill="none" stroke={INK} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="260" cy="40" r="9" fill={INK} /><path d="M260 50 V74 M260 74 L250 92 M260 74 L270 92 M260 56 L244 40 M260 56 L276 40" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <W x={62} y={112} size={10}>Swimming</W><W x={160} y={112} size={10}>Pilates</W><W x={260} y={112} size={10}>Yoga</W>
      </g>
      {at === 0 && <><Box x={160} y={142} w={170} text="May ease back pain" lit /><W x={160} y={176} size={10}>Not clear it changes the curve</W></>}
      {at === 1 && <><Box x={160} y={142} w={210} text="Check first: GP or physio" lit /><W x={160} y={176} size={10}>Especially after a long break</W></>}
      {at === 2 && <><Box x={160} y={142} w={180} text="Choose what you enjoy" lit /><W x={160} y={176} size={10}>If something hurts, stop</W></>}
      {at === 3 && <><Box x={96} y={142} w={136} text="Physio exercises" /><Arrow d="M168 142 H186" head="M179 136 L186 142 L179 148" /><Box x={246} y={142} w={110} text="Keep them up" lit /><W x={160} y={178} size={10}>May help pain, not the curve</W></>}
      {at === 4 && <>{days.map((day, index) => <g key={index}><rect x={48 + index * 34} y={130} width="26" height="24" rx="5" fill={index === 1 || index === 4 ? GOLD : WHITE} stroke={INK} strokeWidth="2" /><W x={61 + index * 34} y={146} size={10}>{day}</W></g>)}
        <W x={160} y={178} size={10}>150 min moderate, or 75 vigorous</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ScolTalkCircle(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Teenagers and adults can feel it", "Meet others in a similar situation", "Refer yourself to NHS talking therapy", "Try not to compare yourself to others"];
  const ring = [[270, 110], [215, 160], [105, 160], [50, 110], [105, 62], [215, 62]];
  const Chair = ({ x, flip = false }: { x: number; flip?: boolean }) => <path d={flip ? `M${x + 22} 96 V150 M${x + 22} 128 H${x - 12} V150` : `M${x - 22} 96 V150 M${x - 22} 128 H${x + 12} V150`} fill="none" stroke={TEXT} strokeWidth="3" strokeLinecap="round" />;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Wellbeing" title="Confidence with a curved spine" label="Body image and confidence" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="People talking together in a support group, a hopeful picture of not being alone">
      {at === 0 && <><Person x={170} y={130} scale={1.3} /><ellipse cx="246" cy="58" rx="54" ry="22" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M214 74 L196 92 L226 78" fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <W x={246} y={62} size={10}>Body image</W><Lines x={70} y={70} lines={["Children,", "teenagers", "and adults"]} size={10} /></>}
      {at === 1 && <><Person x={160} y={120} />{ring.map(([px, py]) => <Person key={`${px}${py}`} x={px} y={py} scale={0.7} fill={TEXT} />)}<W x={160} y={186} size={10}>Online groups, led by a counsellor</W></>}
      {at === 2 && <><Box x={160} y={34} w={176} text="NHS talking therapies" lit /><Chair x={112} /><Chair x={208} flip /><Person x={112} y={112} /><Person x={208} y={112} fill={TEXT} />
        <ellipse cx="160" cy="74" rx="16" ry="9" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={160} y={178} size={10}>18 or over, or 16 in some areas</W></>}
      {at === 3 && <>{[40, 96, 152, 208, 264].map(px => <ellipse key={px} cx={px} cy={164} rx="22" ry="7" fill={px <= 96 ? INK : SOFT} />)}<Person x={96} y={136} />
        <Lines x={230} y={56} lines={["Your own pace", "Not hard on yourself", "Talk to someone"]} gap={22} size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ScolBirthPlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Most have a straightforward pregnancy", "A stable curve changes only slightly", "The 20-week scan checks baby's spine", "Plan pain relief with an anaesthetist", "Numb legs or genitals: 999 or A&E"];
  const stops = [{ x: 30, t: "Plan" }, { x: 95, t: "20 weeks" }, { x: 160, t: "Anaesthetist" }, { x: 225, t: "Labour" }, { x: 290, t: "After" }];
  const lit = [[0], [], [1], [2, 3], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pregnancy" title="Planning a birth with scoliosis" label="Pregnancy" credit={at === 4 ? urgentCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pregnancy timeline from planning to after the birth, with pain relief planned ahead">
      <path d="M30 60 H290" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {stops.map((stop, index) => <g key={stop.t}><circle cx={stop.x} cy={60} r={lit.includes(index) ? 11 : 8} fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={stop.x} y={88} size={10}>{stop.t}</W></g>)}
      {at === 0 && <><Box x={160} y={124} w={210} text="Pre-pregnancy counselling" lit size={10} /><W x={160} y={158} size={10}>Ask your GP for a referral</W></>}
      {at === 1 && <><BackSpine x={52} y={110} n={6} gap={12} amp={6} /><Lines x={196} y={124} lines={["Stable curve: slight change", "Back pain usually goes", "by 3 months after birth"]} size={10} /></>}
      {at === 2 && <><Box x={160} y={124} w={180} text="Baby's spine checked" lit size={10} /><W x={160} y={158} size={10}>Breathing tests if needed</W></>}
      {at === 3 && <><Box x={160} y={124} w={160} text="Pain relief plan" lit /><W x={160} y={158} size={10}>An epidural can be used in labour</W></>}
      {at === 4 && <><Box x={92} y={126} w={120} text="999 or A&E" lit /><Lines x={236} y={118} lines={["Lost feeling: legs,", "bum or genitals"]} size={10} /><W x={160} y={170} size={10}>Later back pain: GP or midwife urgently</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ScolHelplineMap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["One UK charity since the 2023 merger", "Helpline: weekdays, 9am to 5pm", "Find a specialist, then ask your GP", "Online groups and yearly events", "A second opinion, or ask PALS"];
  const lit = [-1, 0, 1, 2, 3][at];
  const on = (index: number) => lit === -1 || lit === index ? 1 : 0.4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You do not have to do it alone" label="Support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A phone, a map pin, a group of people and a hospital: places to find support">
      <g opacity={on(0)}><rect x="30" y="26" width="30" height="54" rx="6" fill={lit === 0 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="45" cy="72" r="3" fill={lit === 0 ? WHITE : INK} /><W x={45} y={104} size={10}>Helpline</W></g>
      <g opacity={on(1)}><path d="M120 80 C108 64 102 56 102 46 a18 18 0 0 1 36 0 c0 10 -6 18 -18 34 Z" fill={lit === 1 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="120" cy="46" r="6" fill={lit === 1 ? WHITE : INK} /><W x={120} y={104} size={10}>Specialist</W></g>
      <g opacity={on(2)}><Person x={186} y={66} scale={0.7} fill={lit === 2 ? INK : TEXT} /><Person x={214} y={66} scale={0.7} fill={INK} /><Person x={200} y={74} scale={0.8} fill={lit === 2 ? INK : TEXT} /><W x={200} y={104} size={10}>Groups</W></g>
      <g opacity={on(3)}><rect x="256" y="40" width="40" height="40" rx="3" fill={lit === 3 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><path d="M270 54 h4 v-4 h4 v4 h4 v4 h-4 v4 h-4 v-4 h-4 Z" fill={lit === 3 ? WHITE : INK} /><W x={276} y={104} size={10}>PALS</W></g>
      {at === 0 && <><Box x={160} y={138} w={220} text={"Scoliosis Support & Research"} lit size={10} /><W x={160} y={172} size={10}>Formed in 2023, from a 1981 group</W></>}
      {at === 1 && <Lines x={160} y={136} lines={["Monday to Friday, 9am to 5pm", "Leave a voicemail if busy", "Staff are not medically qualified"]} size={10} />}
      {at === 2 && <Lines x={160} y={136} lines={["Nearest specialist,", "then ask your GP", "No referral? Ask why"]} size={10} />}
      {at === 3 && <Lines x={160} y={136} lines={["Groups led by a counsellor", "Talking therapy for adults", "Patient events each year"]} size={10} />}
      {at === 4 && <Lines x={160} y={140} lines={["Ask for a second opinion", "or the hospital's PALS"]} gap={20} size={10.5} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function DiscsPieceView({ piece, ...props }: { piece: DiscsPiece } & PieceProps) {
  switch (piece) {
    case "disc-cushion-bulge": return <DiscCushionBulge {...props} />;
    case "disc-nerve-paths": return <DiscNervePaths {...props} />;
    case "disc-age-load": return <DiscAgeLoad {...props} />;
    case "disc-red-flags": return <DiscRedFlags {...props} />;
    case "disc-step-path": return <DiscStepPath {...props} />;
    case "disc-pill-days": return <DiscPillDays {...props} />;
    case "disc-knee-rolls": return <DiscKneeRolls {...props} />;
    case "disc-steps-path": return <DiscStepsPath {...props} />;
    case "disc-lift-close": return <DiscLiftClose {...props} />;
    case "disc-desk-timer": return <DiscDeskTimer {...props} />;
    case "disc-mattress-hand": return <DiscMattressHand {...props} />;
    case "disc-week-plan": return <DiscWeekPlan {...props} />;
    case "scol-c-and-s": return <ScolCAndS {...props} />;
    case "scol-abcd": return <ScolAbcd {...props} />;
    case "scol-tilted-discs": return <ScolTiltedDiscs {...props} />;
    case "scol-cobb-angle": return <ScolCobbAngle {...props} />;
    case "scol-watch-dial": return <ScolWatchDial {...props} />;
    case "scol-brace-pads": return <ScolBracePads {...props} />;
    case "scol-rods-recovery": return <ScolRodsRecovery {...props} />;
    case "scol-pain-steps": return <ScolPainSteps {...props} />;
    case "scol-move-week": return <ScolMoveWeek {...props} />;
    case "scol-talk-circle": return <ScolTalkCircle {...props} />;
    case "scol-birth-plan": return <ScolBirthPlan {...props} />;
    case "scol-helpline-map": return <ScolHelplineMap {...props} />;
    default: return null;
  }
}
