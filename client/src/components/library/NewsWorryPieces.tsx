import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { WORRY_PIECES, type WorryPiece } from "@/content/worry-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The OCD and PTSD pages' own pieces (content/worry-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Mind & mood pieces. Each is steered by the card's sections; pictures are
// calm and hopeful and never show anyone's own thoughts, body or harm. OCD pictures never show what an
// intrusive thought is about, and PTSD pictures never show a traumatic event.

export const isWorryPiece = (piece: NewsPiece): piece is WorryPiece => (WORRY_PIECES as readonly string[]).includes(piece);

const medCredit = "Illustration: Rehyn. Never stop a medicine without your doctor.";

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 206, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 12 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Arrow = ({ d, head, color = GOLD }: { d: string; head: string; color?: string }) =>
  <g stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** A plain cloud with nothing inside it. */
const Cloud = ({ x, y, s, fill = SOFT, opacity = 1 }: { x: number; y: number; s: number; fill?: string; opacity?: number }) =>
  <g opacity={opacity} fill={fill}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 11} y={y - 18} width="22" height="36" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 11} r="2.2" fill={lit ? WHITE : INK} /></g>;
const Cup = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 12} y={y - 13} width="24" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 12} ${y - 7} h5 a6 6 0 0 1 0 12 h-5`} fill="none" stroke={INK} strokeWidth="2.5" /></g>;
/** A small chevron pointing along `angle` (degrees). */
const Chevron = ({ x, y, angle, color = INK }: { x: number; y: number; angle: number; color?: string }) =>
  <path d="M-5 -6 L4 0 L-5 6" transform={`translate(${x} ${y}) rotate(${angle})`} stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />;

// ==== OCD ===================================================================================================

function OcdLoop(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Obsession, anxiety, then a compulsion", "Brief relief, then the cycle again", "Can affect anyone: about 1 in 50", "Several things may play a part", "Not your fault, and it can be treated"];
  const stops = [{ x: 160, y: 34, t: "Obsession" }, { x: 262, y: 100, t: "Anxiety" }, { x: 160, y: 166, t: "Compulsion" }, { x: 58, y: 100, t: "Brief relief" }];
  const lit = (index: number) => at === 0 ? index < 3 : at === 1;
  const turns = [-0.25, 0.25, 0.75, 1.25].map(t => { const a = t * Math.PI; return { x: 160 + 102 * Math.cos(a), y: 100 + 66 * Math.sin(a), angle: Math.atan2(66 * Math.cos(a), -102 * Math.sin(a)) * 180 / Math.PI }; });
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The loop that keeps OCD going" label="What OCD is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A loop from obsession to anxiety, compulsion and brief relief, and back again">
      <ellipse cx="160" cy="100" rx="102" ry="66" fill="none" stroke={at === 1 ? GOLD : at === 4 ? LINE : SOFT} strokeWidth="4" strokeDasharray={at === 4 ? "6 10" : undefined} />
      {at !== 4 && turns.map((turn, index) => <Chevron key={index} x={turn.x} y={turn.y} angle={turn.angle} color={at === 1 ? GOLD : SOFT} />)}
      {stops.map((stop, index) => <Box key={stop.t} x={stop.x} y={stop.y} w={100} text={stop.t} lit={lit(index)} />)}
      {at === 2 && <><W x={160} y={102} size={20}>1 in 50</W><W x={160} y={120} size={10}>people</W></>}
      {at === 3 && ["Family history", "The brain", "Life events"].map((label, index) => <W key={label} x={160} y={82 + index * 18} size={10}>{label}</W>)}
      {at === 4 && <><W x={160} y={96} size={10.5}>Refer yourself</W><W x={160} y={112} size={10.5}>or see a GP</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function OcdCloudDrift(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Up to 80% have unwanted thoughts", "Persistent, distressing thoughts", "Fears, doubts and a need for order", "Thoughts do not mean you will act", "Mild curiosity, and they often fade"];
  const focus = at === 1 || at === 3 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Intrusive thoughts" title="Just a thought, not a wish" label="Intrusive thoughts" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A row of people, most with an empty thought cloud, and one cloud drifting away">
      {Array.from({ length: 10 }, (_, index) => <g key={index}>
        <Person x={34 + index * 28} y={176} scale={0.7} fill={focus && index !== 4 ? SOFT : INK} />
        {at === 0 && index !== 2 && index !== 7 && <Cloud x={34 + index * 28} y={132} s={9} />}
      </g>)}
      {at === 0 && <W x={160} y={74} size={22}>Up to 80%</W>}
      {at === 1 && <><Cloud x={164} y={66} s={26} opacity={0.35} /><Cloud x={154} y={76} s={26} opacity={0.6} /><Cloud x={146} y={88} s={26} /></>}
      {at === 2 && <><Box x={57} y={60} w={98} text="Contamination" size={10} /><Box x={161} y={60} w={98} text="Symmetry, order" size={10} /><Box x={265} y={60} w={98} text="Doubts" size={10} /></>}
      {at === 3 && <><Cloud x={146} y={120} s={10} /><Bubble x={190} y={70} text="Just a thought" width={120} /></>}
      {at === 4 && <><Cloud x={146} y={124} s={10} opacity={0.9} /><path d="M154 112 C180 90, 200 80, 236 60" stroke={GOLD} strokeWidth="2.5" fill="none" strokeDasharray="3 6" strokeLinecap="round" /><Cloud x={200} y={86} s={12} opacity={0.55} /><Cloud x={254} y={46} s={18} opacity={0.3} /></>}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function OcdSeesaw(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Done to ease anxiety, just in case", "Actions, or done in the head", "Relief is short; the urge grows", "Brief relief, then the doubts return", "Anxiety improves when fears are faced"];
  const tilt = [10, 10, 14, 8, 0][at];
  const r = [22, 22, 28, 22, 14][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Compulsions" title="Why the relief never lasts" label="Compulsions" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A see-saw with a compulsion on one side and anxiety on the other">
      {at === 1 && ["Washing", "Checking", "Counting", "Ordering", "Reassurance", "In the head"].map((label, index) => <Box key={label} x={62 + (index % 3) * 98} y={30 + Math.floor(index / 3) * 32} w={92} text={label} size={10} lit={index === 5} />)}
      {at === 3 && <><Bubble x={112} y={30} text="" width={112} lit={false} /><Bubble x={104} y={44} text="Are you sure?" width={112} /></>}
      <path d="M160 168 L144 192 H176 Z" fill={INK} />
      <g transform={`rotate(${tilt} 160 166)`}>
        <rect x="50" y="162" width="220" height="8" rx="4" fill={INK} />
        <rect x="52" y="136" width="84" height="26" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" />
        <W x={94} y={153} size={10.5}>Compulsion</W>
        {at === 2 && <circle cx="240" cy={162 - 20} r="20" fill="none" stroke={SOFT} strokeWidth="2.5" strokeDasharray="4 5" />}
        <circle cx="240" cy={162 - r} r={r} fill={at === 4 ? TINT : INK} stroke={at === 4 ? GOLD : INK} strokeWidth="3" opacity={at === 2 ? 0.9 : 1} />
        <W x={240} y={162 - 2 * r - 8} size={10.5}>Anxiety</W>
      </g>
      <Say y={212}>{caps[at]}</Say>
    </svg>} />;
}

function OcdOverlap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Five main groups that often overlap", "Checking, or fear of contamination", "A need for order, or just right", "Repeated thoughts and rumination", "Collecting things you enjoy is not OCD"];
  const circles = [{ a: -90, t: "Contamination" }, { a: -18, t: "Checking" }, { a: 54, t: "Hoarding" }, { a: 126, t: "Thoughts" }, { a: 198, t: "Order" }];
  const lit = [[], [0, 1], [4], [3], [2]][at];
  const R = 56, cx = 160, cy = 100;
  const spot = (deg: number) => ({ x: cx + R * Math.cos(deg * Math.PI / 180), y: cy + R * Math.sin(deg * Math.PI / 180) });
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The forms" title="One condition, many forms" label="Forms of OCD" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five overlapping circles: checking, contamination, order, intrusive thoughts and hoarding">
      {circles.map(circle => { const p = spot(circle.a); return <circle key={circle.t} cx={p.x} cy={p.y} r="40" fill={at === 0 ? INK : WHITE} fillOpacity={at === 0 ? 0.18 : 0.7} stroke={INK} strokeWidth="2" />; })}
      {circles.map((circle, index) => { const p = spot(circle.a); return lit.includes(index) ? <circle key={circle.t} cx={p.x} cy={p.y} r="40" fill={INK} opacity=".85" /> : null; })}
      {circles.map((circle, index) => { const p = spot(circle.a); return <W key={circle.t} x={p.x} y={p.y + 4} size={10} fill={lit.includes(index) ? WHITE : TEXT}>{circle.t}</W>; })}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function OcdLadder(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Face fears, without compulsions", "Start at the bottom, one at a time", "Each time, anxiety rises less", "About 8 to 20 sessions if mild", "Too hard? Ask to make it easier"];
  const rungs = [170, 136, 102, 68, 34];
  const climber = [-1, 0, 1, 3, -1][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="CBT with ERP" title="Facing fears, one rung at a time" label="Exposure and response prevention" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ladder of fears from least to most, and anxiety falling each time a step is faced">
      <path d="M40 24 V186 M100 24 V186" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {rungs.map((y, index) => <path key={y} d={`M40 ${y} H100`} stroke={index === climber ? GOLD : INK} strokeWidth="4" />)}
      {climber >= 0 && <circle cx="70" cy={rungs[climber] - 12} r="9" fill={GOLD} />}
      {at === 4 && <><path d="M100 153 H128" stroke={GOLD} strokeWidth="4" strokeDasharray="4 4" /><circle cx="118" cy="141" r="9" fill={GOLD} /></>}
      <W x={108} y={38} size={10} anchor="start">Most</W>
      <W x={108} y={174} size={10} anchor="start">Least</W>
      {at === 0 && ["Thoughts", "Feelings", "Actions"].map((label, index) => <Box key={label} x={236} y={60 + index * 40} w={110} text={label} />)}
      {at === 1 && <g>
        <path d="M156 160 C176 64, 200 64, 220 92 S270 150, 306 156" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M156 116 H306" stroke={GOLD} strokeWidth="2" strokeDasharray="5 5" /><W x={306} y={110} size={10} anchor="end">Half</W>
        <W x={232} y={182} size={10.5}>10 to 90 minutes</W>
      </g>}
      {at === 2 && [0, 1, 2].map(index => <path key={index} d={`M156 160 C176 ${64 + index * 30}, 200 ${64 + index * 30}, 222 ${100 + index * 20} S272 154, 306 158`} stroke={INK} strokeWidth="3" fill="none" opacity={1 - index * 0.3} strokeLinecap="round" />)}
      {at === 3 && <g>
        {Array.from({ length: 20 }, (_, index) => <circle key={index} cx={162 + (index % 10) * 15} cy={80 + Math.floor(index / 10) * 20} r="5.5" fill={index < 8 ? INK : SOFT} />)}
        <W x={230} y={136} size={11}>8 to 20 sessions</W>
        <W x={230} y={154} size={10}>plus practice at home</W>
      </g>}
      {at === 4 && <Bubble x={236} y={70} text="A little easier?" width={124} />}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function OcdMedWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often alongside CBT, and your choice", "SSRIs, such as sertraline, once a day", "Up to 12 weeks to notice a benefit", "No help after 3 months? Another option", "At least a year, then reduce slowly"];
  const pillLabel = ["Alongside CBT", "SSRI, such as sertraline", "", "A different SSRI, or clomipramine", ""][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Patience with medicine" label="Medicines for OCD" credit={medCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Twelve weeks for a medicine to help, then at least a year, then reducing slowly">
      <Pill x={40} y={36} fill={at === 2 || at === 4 ? SOFT : INK} />
      {pillLabel && <W x={66} y={40} size={10.5} anchor="start">{pillLabel}</W>}
      {Array.from({ length: 12 }, (_, index) => <g key={index}>
        <rect x={20 + index * 23} y="68" width="19" height="24" rx="5" fill={at === 2 ? INK : at === 3 ? SOFT : WHITE} fillOpacity={at === 2 ? 0.2 + index * 0.07 : 1} stroke={INK} strokeWidth="2" />
        <W x={29.5 + index * 23} y={106} size={9.5}>{index + 1}</W>
      </g>)}
      <W x={156} y={122} size={10}>weeks</W>
      <rect x="20" y="138" width="212" height="24" rx="8" fill={at === 4 ? INK : WHITE} stroke={INK} strokeWidth="2" />
      <W x={126} y={154} size={10.5} fill={at === 4 ? WHITE : TEXT}>At least a year</W>
      <path d="M238 142 H254 V150 H270 V158 H286 V166 H302" stroke={at === 4 ? GOLD : LINE} strokeWidth="3.5" fill="none" />
      <Say y={198}>{caps[at]}</Say>
    </svg>} />;
}

/** A door with its handle; `lit` doors are filled. */
const Door = ({ x, y, lit = false, w = 44, h = 84 }: { x: number; y: number; lit?: boolean; w?: number; h?: number }) =>
  <g><rect x={x} y={y} width={w} height={h} rx="4" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x + w - 9} cy={y + h / 2} r="3.2" fill={lit ? WHITE : INK} /></g>;

function OcdTwoDoors(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Refer yourself, or see a GP", "Then an assessment with a therapist", "Diagnosis without sharing every detail", "A choice of CBT and medication", "Under 18? There is NHS help too"];
  const people = at === 1 ? INK : SOFT;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Getting help" title="Taking the first step" label="Getting help" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two doors, refer yourself and see a GP, both leading to a therapist">
      <W x={42} y={52} size={10}>Refer yourself</W><W x={118} y={52} size={10}>See a GP</W>
      <Door x={20} y={62} lit={at === 0} /><Door x={96} y={62} lit={at === 0} />
      <path d="M42 146 C60 176, 150 182, 240 176 M118 146 C130 170, 180 176, 240 176" stroke={at === 0 || at === 1 ? GOLD : LINE} strokeWidth="3.5" fill="none" strokeDasharray="2 7" strokeLinecap="round" />
      <Person x={236} y={150} scale={0.9} fill={people} /><Person x={290} y={150} scale={0.9} fill={people} />
      <rect x="218" y="156" width="36" height="6" rx="3" fill={INK} /><rect x="272" y="156" width="36" height="6" rx="3" fill={INK} />
      {at === 1 && <Box x={262} y={44} w={100} text="Assessment" lit />}
      {at === 2 && <g>
        <rect x="200" y="14" width="104" height="80" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" />
        <W x={252} y={32} size={10}>GP Ice Breaker</W>
        {[0, 1, 2].map(index => <g key={index}><rect x="212" y={42 + index * 16} width="10" height="10" rx="2" fill={index < 2 ? INK : WHITE} stroke={INK} strokeWidth="1.5" /><path d={`M230 ${47 + index * 16} H290`} stroke={LINE} strokeWidth="3" strokeLinecap="round" /></g>)}
      </g>}
      {at === 3 && <><Box x={204} y={44} w={64} text="CBT" lit /><Box x={280} y={44} w={72} text="Medicine" lit /></>}
      {at === 4 && <><Box x={210} y={44} w={88} text="Under 18" lit /><Person x={282} y={64} scale={0.6} /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function OcdNotebook(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Learn about OCD; write your hierarchy", "Resist the behaviour, not the thought", "Rituals and checking keep it turning", "Reading Well books from the library", "Regular exercise and regular sleep"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Self-help" title="What you can start while you wait" label="Self-help" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A notebook with a list of fears from least to most, and things that help alongside therapy">
      <g opacity={at === 0 ? 1 : 0.35}>
        <rect x="20" y="28" width="112" height="146" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={76} y={48} size={10.5}>My hierarchy</W>
        <W x={30} y={70} size={9.5} anchor="start">Most</W>
        {[0, 1, 2, 3, 4].map(index => <rect key={index} x="62" y={62 + index * 20} width={58 - index * 8} height="10" rx="4" fill={index === 4 && at === 0 ? GOLD : SOFT} />)}
        <W x={30} y={150} size={9.5} anchor="start">Least</W>
      </g>
      {at === 0 && <g>
        <path d="M176 70 Q206 58 232 70 Q258 58 288 70 V138 Q258 126 232 138 Q206 126 176 138 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M232 70 V138" stroke={INK} strokeWidth="2" />
        <W x={232} y={160} size={10.5}>Learn about OCD</W>
      </g>}
      {at === 1 && <g>
        <Box x={228} y={56} w={120} text="The thought" /><W x={228} y={88} size={10.5}>Do not resist</W>
        <Box x={228} y={124} w={120} text="The compulsion" lit /><W x={228} y={156} size={10.5}>Resist</W>
      </g>}
      {at === 2 && <g>
        <ellipse cx="230" cy="96" rx="82" ry="52" fill="none" stroke={SOFT} strokeWidth="3" strokeDasharray="5 7" />
        <Box x={190} y={70} w={76} text="Rituals" size={10} /><Box x={270} y={70} w={76} text="Checking" size={10} />
        <Box x={190} y={122} w={76} text="Avoiding" size={10} /><Box x={270} y={122} w={76} text="Reassurance" size={10} />
      </g>}
      {at === 3 && <g>
        <rect x="190" y="36" width="80" height="104" rx="5" fill={INK} /><rect x="190" y="36" width="10" height="104" fill={GOLD} />
        <W x={235} y={84} size={11} fill={WHITE}>Reading</W><W x={235} y={100} size={11} fill={WHITE}>Well</W>
        <W x={230} y={162} size={10.5}>From your library</W>
      </g>}
      {at === 4 && <g>
        <path d="M158 104 H194 a4 4 0 0 0 -2 -8 L178 92 L172 82 H160 Z" fill={INK} />
        <Moon x={230} y={96} r={14} />
        <path d="M284 112 V88 M284 96 C276 90, 270 90, 268 82 C276 80, 282 84, 284 96 M284 92 C290 84, 298 82, 302 86 C298 94, 290 94, 284 92" stroke={INK} strokeWidth="2.5" fill={TINT} strokeLinejoin="round" />
        <W x={176} y={136} size={10}>Exercise</W><W x={230} y={136} size={10}>Sleep</W><W x={284} y={136} size={10}>Gardening</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function OcdFamilyDoor(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Loved ones often get drawn in", "Reassurance: once is never enough", "Encourage, and say no to rituals", "Motivation, not reassurance", "Carers can get support too"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Family and friends" title="Helping without joining in" label="Family and friends" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people, one with OCD and one who cares for them, and how to help">
      <Person x={70} y={160} scale={1.3} />
      <Person x={250} y={160} scale={1.3} fill={at === 4 ? INK : SOFT} />
      {at === 0 && <><Person x={292} y={168} scale={0.9} fill={SOFT} /><path d="M98 130 C140 110, 180 110, 222 130" stroke={GOLD} strokeWidth="2.5" fill="none" strokeDasharray="4 6" /><path d="M98 146 C150 160, 200 168, 272 150" stroke={GOLD} strokeWidth="2.5" fill="none" strokeDasharray="4 6" /></>}
      {at === 1 && <><Bubble x={146} y={32} text="" width={112} lit={false} /><Bubble x={138} y={50} text="" width={112} lit={false} /><Bubble x={130} y={68} text="Are you sure?" width={112} /></>}
      {at === 2 && ["Encourage", "No to rituals", "Be patient"].map((label, index) => <Box key={label} x={160} y={36 + index * 34} w={120} text={label} lit />)}
      {at === 3 && <><Bubble x={200} y={60} text="Keep going" width={104} /><Box x={160} y={140} w={96} text="Homework" /></>}
      {at === 4 && <g>
        <circle cx="250" cy="52" r="34" fill={TINT} stroke={SOFT} strokeWidth="2" />
        {[226, 250, 274].map(x => <Person key={x} x={x} y={70} scale={0.55} fill={INK} />)}
        <HeartShape x={160} y={64} size={36} fill={GOLD} stroke={GOLD} width={2} />
      </g>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function OcdDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["It can take time others cannot see", "Equality Act: 12 months or more", "Access to Work: 16 or over, in work", "Students: Disabled Students' Allowance", "Ask Jobcentre Plus or OCD Action"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work and study" title="Rights and support at work and study" label="Work and study" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk with a clock and calendar, and the support at work and study">
      <path d="M14 152 H186 M30 152 V190 M170 152 V190" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <g opacity={at === 0 ? 1 : 0.4}><Clock x={44} y={124} r={20} hand={at === 0 ? 2.2 : 1} />{at === 0 && <circle cx="44" cy="124" r="27" fill="none" stroke={GOLD} strokeWidth="3" />}</g>
      <g opacity={at === 1 ? 1 : 0.4}>
        <rect x="82" y="98" width="46" height="50" rx="5" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><rect x="82" y="98" width="46" height="12" rx="4" fill={GOLD} />
        <W x={105} y={130} size={14} fill={at === 1 ? WHITE : TEXT}>12</W><W x={105} y={143} size={9.5} fill={at === 1 ? WHITE : TEXT}>months</W>
      </g>
      {at === 3 && <g><rect x="140" y="128" width="40" height="10" rx="2" fill={INK} /><rect x="144" y="117" width="34" height="10" rx="2" fill={SOFT} /><rect x="140" y="106" width="38" height="10" rx="2" fill={INK} /></g>}
      {at === 4 && <Phone x={158} y={130} lit />}
      {at === 2 && <Person x={160} y={142} scale={0.8} />}
      <Tags x={198} y={34} labels={["Adjustments", "Access to Work", "Students: DSA", "Advice"]} lit={index => index === at - 1} width={112} gap={34} />
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function OcdDipPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A blip or relapse is normal", "Plan for blips before therapy ends", "Top-up exposures every few weeks", "Keep medicine going at least 12 months", "Still struggling? Speak to a GP"];
  const dot = [[150, 150], [30, 62], [232, 96], [190, 131], [300, 40]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Setbacks" title="A blip, not a fall" label="Setbacks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path that dips for a while, then climbs again">
      <path d="M14 60 C60 60, 90 150, 150 150 S240 60, 306 36" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
      {at === 1 && <Box x={84} y={26} w={110} text="Relapse plan" lit />}
      {at === 2 && <>{[[190, 131], [232, 96], [272, 64]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="6" fill={GOLD} />)}<W x={250} y={140} size={10.5}>Top-up sessions</W></>}
      {at === 3 && <><Pill x={60} y={150} /><W x={84} y={154} size={10.5} anchor="start">12 months+</W></>}
      {at === 4 && <Box x={230} y={150} w={110} text="Speak to a GP" lit />}
      <circle cx={dot[0]} cy={dot[1]} r="10" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      <Say y={202}>{caps[at]}</Say>
    </svg>} />;
}

function OcdGroups(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Groups can ease feeling alone", "OCD-UK: free online groups and forums", "OCD Action: groups, camera on or off", "Choose groups with approved standards", "Help now, by phone or text"];
  const boards = ["999 or A&E", "111, mental health", "Samaritans 116 123", "Text SHOUT to 85258"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support groups" title="You are not alone with it" label="Support groups" credit={at === 4 ? "Illustration: Rehyn. In danger now? Call 999." : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An online group of people on screen, and helplines for when you need someone now">
      {at < 4 && Array.from({ length: 6 }, (_, index) => { const x = 24 + (index % 3) * 72, y = 30 + Math.floor(index / 3) * 58; const off = at === 2 && (index === 1 || index === 5); return <g key={index}>
        <rect x={x} y={y} width="64" height="50" rx="6" fill={off ? TINT : WHITE} stroke={INK} strokeWidth="2" />
        {off ? <circle cx={x + 32} cy={y + 25} r="12" fill={SOFT} /> : <Person x={x + 32} y={y + 42} scale={0.55} fill={at === 0 || index % 2 === 0 ? INK : SOFT} />}
      </g>; })}
      {at === 1 && <><Box x={277} y={46} w={70} text="OCD-UK" lit /><W x={277} y={84} size={10}>Groups</W><W x={277} y={100} size={10}>Forums</W></>}
      {at === 2 && <Box x={276} y={46} w={74} text="OCD Action" size={10} lit />}
      {at === 3 && <g><circle cx="277" cy="74" r="22" fill={INK} /><path d="M266 74 L274 82 L289 66" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" /><W x={277} y={116} size={10}>Approved</W></g>}
      {at === 4 && boards.map((board, index) => { const x = 10 + (index % 2) * 154, y = 36 + Math.floor(index / 2) * 52; return <g key={board}>
        <rect x={x} y={y} width="146" height="40" rx="10" fill={INK} /><W x={x + 73} y={y + 24} size={11} fill={WHITE}>{board}</W>
      </g>; })}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== PTSD ==================================================================================================

/** A small bell, ringing when `ring` is set. */
const Bell = ({ x, y, ring = false, opacity = 1 }: { x: number; y: number; ring?: boolean; opacity?: number }) =>
  <g opacity={opacity}>
    <path d={`M${x - 16} ${y + 14} C${x - 16} ${y - 12} ${x - 10} ${y - 20} ${x} ${y - 20} C${x + 10} ${y - 20} ${x + 16} ${y - 12} ${x + 16} ${y + 14} Z`} fill={ring ? GOLD : SOFT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx={x} cy={y - 23} r="3" fill={INK} /><circle cx={x} cy={y + 19} r="4" fill={INK} />
    {ring && <path d={`M${x - 26} ${y - 14} A28 28 0 0 0 ${x - 26} ${y + 10} M${x + 26} ${y - 14} A28 28 0 0 1 ${x + 26} ${y + 10}`} stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" />}
  </g>;

function PtsdFiling(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["When difficult memories do not settle", "Filed as now, not then: stuck on alert", "Not a sign of weakness", "About 1 in 20 adults screened positive", "Usually gets better; treatment helps"];
  const open = at < 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A memory still on high alert" label="What PTSD is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A filing cabinet with one memory not yet filed, and an alarm bell">
      <rect x="30" y="40" width="84" height="140" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {[0, 1, 2].map(index => <g key={index}><rect x="38" y={48 + index * 44} width="68" height="36" rx="4" fill={TINT} stroke={INK} strokeWidth="2" /><rect x="62" y={62 + index * 44} width="20" height="6" rx="3" fill={INK} /></g>)}
      {open && <g><rect x="58" y="92" width="76" height="36" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="112" y="106" width="16" height="6" rx="3" fill={INK} /></g>}
      {open && <g transform="rotate(10 166 96)">
        <rect x="144" y="66" width="46" height="58" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />
        {at === 1 ? <W x={167} y={100} size={12}>Now</W> : <path d="M152 82 H182 M152 92 H182 M152 102 H172" stroke={LINE} strokeWidth="3" strokeLinecap="round" />}
      </g>}
      {at < 2 && <Bell x={262} y={66} ring={at === 1} />}
      {at === 1 && !still && <circle cx="262" cy="62" r="34" fill="none" stroke={GOLD} strokeWidth="2" className="lib-why-pulse" />}
      {at === 2 && <><Person x={240} y={160} scale={1.4} /><circle cx="240" cy="118" r="24" fill="none" stroke={GOLD} strokeWidth="3" /></>}
      {at === 3 && <>{Array.from({ length: 20 }, (_, index) => <circle key={index} cx={196 + (index % 5) * 24} cy={58 + Math.floor(index / 5) * 24} r="8" fill={index === 0 ? INK : SOFT} />)}<W x={244} y={172} size={13}>1 in 20</W></>}
      {at === 4 && <><Sun x={250} y={70} r={16} /><Bell x={250} y={140} opacity={0.3} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PtsdFourPanels(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Reliving it: flashbacks, nightmares", "Avoiding reminders, or feeling numb", "On edge: jumpy, scanning for danger", "Changes in mood, beliefs and body", "After about 4 weeks, contact your GP"];
  const panels = [{ x: 14, y: 22, t: "Reliving" }, { x: 194, y: 22, t: "Avoiding" }, { x: 194, y: 100, t: "On edge" }, { x: 14, y: 100, t: "Mood, body" }];
  const icon = (index: number, x: number, y: number, c: string) => [
    <g key="r" stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round"><path d={`M${x + 9} ${y - 7} A11 11 0 1 0 ${x + 11} ${y + 3}`} /><path d={`M${x + 4} ${y - 9} L${x + 10} ${y - 7} L${x + 9} ${y - 1}`} /></g>,
    <g key="a"><rect x={x - 9} y={y - 14} width="18" height="28" rx="2" fill="none" stroke={c} strokeWidth="2.5" /><circle cx={x + 4} cy={y} r="2" fill={c} /></g>,
    <g key="e" stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round"><circle cx={x} cy={y} r="3" fill={c} /><path d={`M${x - 8} ${y - 8} A11 11 0 0 1 ${x + 8} ${y - 8} M${x - 13} ${y - 13} A18 18 0 0 1 ${x + 13} ${y - 13}`} /></g>,
    <Cloud key="m" x={x} y={y + 2} s={13} fill={c} />,
  ][index];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Reliving, avoiding, never switching off" label="Symptoms of PTSD" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four kinds of symptoms around a person: reliving, avoiding, being on edge, and mood and body">
      <Person x={160} y={142} scale={1.4} fill={at === 4 ? INK : SOFT} />
      {panels.map((panel, index) => { const lit = at === index; return <g key={panel.t} opacity={at === 4 ? 0.35 : 1}>
        <rect x={panel.x} y={panel.y} width="112" height="60" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, panel.x + 26, panel.y + 30, lit ? WHITE : INK)}
        <W x={panel.x + 48} y={panel.y + 34} size={10.5} anchor="start" fill={lit ? WHITE : TEXT}>{panel.t}</W>
      </g>; })}
      {at === 4 && <Box x={160} y={180} w={110} h={24} text="About 4 weeks" lit />}
      <Say y={212}>{caps[at]}</Say>
    </svg>} />;
}

function PtsdRoads(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Many kinds of event; every one valid", "Serious illness or intensive care too", "Some jobs carry more risk", "Around 20% go on to develop PTSD", "Support and a calmer setting can help"];
  const labels = [["Went through it", "Saw it happen", "Heard about it"], ["Intensive care", "Serious illness", "A difficult birth"], ["Paramedics", "Firefighters", "Midwives"], ["", "", ""], ["Family", "Friends", "Work"]][at];
  const end = at === 3 ? 196 : 232;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Many kinds of trauma, including illness" label="Causes of PTSD" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Several roads leading to one person, and support around them">
      {[50, 110, 170].map((y, index) => <g key={y}>
        <path d={`M20 ${y} C120 ${y}, 150 ${118 + (index - 1) * 2}, ${end} ${120 + (index - 1) * 2}`} stroke={at === 4 ? GOLD : at === 3 ? LINE : INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        {labels[index] && <W x={20} y={y - 9} size={10} anchor="start">{labels[index]}</W>}
      </g>)}
      {at === 3 ? <g>
        {Array.from({ length: 10 }, (_, index) => <Person key={index} x={222 + (index % 5) * 22} y={110 + Math.floor(index / 5) * 52} scale={0.55} fill={index < 2 ? INK : SOFT} />)}
        <W x={266} y={46} size={16}>20%</W>
      </g> : <Person x={262} y={146} scale={1.3} />}
      {at === 4 && <Person x={298} y={152} scale={1} fill={SOFT} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PtsdStones(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["PTSD symptoms, plus some more", "Often long-lasting, hard to escape", "Often 3 stages, not always in order", "More or longer sessions to build trust", "Healing is possible for many people"];
  const stones = [{ x: 64, y: 160, t: "Stabilise" }, { x: 160, y: 148, t: "Therapy" }, { x: 256, y: 160, t: "Reconnect" }];
  const litStone = at === 2 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Complex PTSD" title="When trauma went on and on" label="Complex PTSD" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three stepping stones: stabilise, therapy and reconnect">
      {at === 4 && <path d="M64 160 C110 136, 130 148, 160 148 S220 136, 256 160" stroke={GOLD} strokeWidth="4" fill="none" strokeDasharray="2 8" strokeLinecap="round" />}
      {stones.map(stone => <g key={stone.t}><ellipse cx={stone.x} cy={stone.y} rx="46" ry="16" fill={litStone ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={stone.x} y={stone.y + 4} size={10} fill={litStone ? WHITE : TEXT}>{stone.t}</W></g>)}
      {at === 0 && <><Box x={70} y={58} w={92} text="PTSD" lit /><W x={136} y={64} size={18}>+</W><Tags x={170} y={22} labels={["Emotions", "Self-worth", "Relationships"]} lit={() => false} width={128} gap={32} /></>}
      {at === 1 && <g>
        <path d="M30 74 H290" stroke={INK} strokeWidth="6" strokeLinecap="round" />
        {Array.from({ length: 14 }, (_, index) => <path key={index} d={`M${40 + index * 18} 64 V84`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
        <W x={30} y={106} size={10} anchor="start">Childhood</W><W x={290} y={106} size={10} anchor="end">Adult life</W>
      </g>}
      {at === 2 && <><Person x={64} y={136} scale={0.7} fill={GOLD} /><Arrow d="M150 128 C130 96, 96 96, 76 112" head="M84 108 L75 113 L80 121" color={SOFT} /><W x={200} y={92} size={10.5}>Not always in order</W></>}
      {at === 3 && <><Clock x={110} y={74} r={18} hand={1.2} /><Arrow d="M138 74 H166" head="M159 68 L166 74 L159 80" /><Clock x={206} y={74} r={30} hand={2.4} /></>}
      {at === 4 && <><Sun x={256} y={64} r={16} /><Person x={256} y={136} scale={0.7} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PtsdTherapyCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The first-choice therapies for PTSD", "Coming to terms with it, with support", "EMDR: eye movements, in your control", "Usually 8 to 12 weekly sessions", "Intense at first? Tell your therapist"];
  const cbt = at === 0 || at === 1, emdr = at === 0 || at === 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Therapy" title="The two therapies that work best" label="Trauma-focused therapy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two therapy cards, trauma-focused CBT and EMDR, and a row of weekly sessions">
      <g opacity={at >= 3 ? 0.4 : 1}>
        <rect x="16" y="16" width="136" height="98" rx="10" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth={cbt ? 3 : 2} />
        <W x={84} y={36} size={10.5} fill={at === 1 ? WHITE : TEXT}>Trauma-focused CBT</W>
        <Person x={62} y={96} scale={0.75} fill={at === 1 ? WHITE : INK} /><Person x={106} y={96} scale={0.75} fill={SOFT} />
        <rect x="168" y="16" width="136" height="98" rx="10" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth={emdr ? 3 : 2} />
        <W x={236} y={36} size={10.5} fill={at === 2 ? WHITE : TEXT}>EMDR</W>
        <path d="M204 74 Q236 50 268 74 Q236 98 204 74 Z" fill="none" stroke={at === 2 ? WHITE : INK} strokeWidth="2.5" />
        <circle cx="236" cy="74" r="7" fill={GOLD} />
        <path d="M188 100 H284 M194 95 L188 100 L194 105 M278 95 L284 100 L278 105" stroke={at === 2 ? WHITE : SOFT} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {at !== 4 && <g>
        {Array.from({ length: 12 }, (_, index) => <circle key={index} cx={28 + index * 24} cy="144" r="8" fill={at === 3 ? (index < 8 ? INK : SOFT) : WHITE} stroke={INK} strokeWidth="2" />)}
        <W x={160} y={176} size={10.5}>{at === 3 ? "8 to 12 sessions, weekly" : "Weekly sessions"}</W>
      </g>}
      {at === 4 && <g>
        <path d="M20 176 C60 128, 90 126, 120 144 S220 172, 300 168" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <Bubble x={218} y={136} text="Too much?" width={96} />
      </g>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function PtsdMedLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Not first choice, but it can help", "SSRIs such as sertraline or paroxetine", "1 to 2 weeks to start, up to 8 to work", "Tell your doctor about other medicines", "At least 6 months, then reduce slowly"];
  const showLine = at === 2 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Where medicine fits, and the first weeks" label="Medicines for PTSD" credit={medCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A medicine's effect building over 8 weeks, then at least 6 months, then reducing slowly">
      <path d="M20 132 H300" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
      <g opacity={showLine ? 1 : 0.25}>
        <path d="M20 128 C60 126, 110 96, 180 62 H236" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M236 62 H250 V78 H264 V94 H278 V110 H292 V126" stroke={at === 4 ? GOLD : SOFT} strokeWidth="3.5" fill="none" />
      </g>
      {at === 0 && <><Pill x={100} y={56} /><W x={140} y={62} size={18}>+</W><Box x={210} y={56} w={100} text="Therapy" lit /></>}
      {at === 1 && <><Box x={60} y={40} w={96} text="Sertraline" size={10} lit /><Box x={162} y={40} w={96} text="Paroxetine" size={10} lit /><Box x={264} y={40} w={96} text="Venlafaxine" size={10} /><Pill x={160} y={88} /></>}
      {at === 2 && <><path d="M44 132 V140 M180 132 V140" stroke={INK} strokeWidth="2.5" /><W x={44} y={156} size={10}>1 to 2 weeks</W><W x={180} y={156} size={10}>8 weeks</W><circle cx="180" cy="62" r="7" fill={GOLD} /></>}
      {at === 3 && <Tags x={92} y={26} labels={["Pregnant?", "Other medicines", "No St John's wort"]} lit={index => index === 1} width={136} gap={32} />}
      {at === 4 && <><W x={208} y={52} size={10.5}>At least 6 months</W><W x={268} y={156} size={10}>Slowly</W></>}
      <Say y={194}>{caps[at]}</Say>
    </svg>} />;
}

function PtsdRoute(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Still struggling at 4 weeks? See a GP", "Describe your symptoms to the GP", "Or refer yourself, without a GP", "Watchful waiting, or a treatment plan", "It is never too late for treatment"];
  const stations = [{ x: 40, t: "4 weeks" }, { x: 120, t: "GP" }, { x: 200, t: "Assessment" }, { x: 280, t: "Treatment" }];
  const lit = [[0], [1], [2], [1, 2], [3]][at];
  const dot = [40, 120, 200, 160, 280][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Getting help" title="Your first step, and what follows" label="Getting help" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A route from noticing symptoms, to a GP, an assessment and treatment, with a branch for referring yourself">
      <path d="M40 120 H280" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <path d="M40 40 H124 C170 40, 200 70, 200 110" stroke={at === 2 ? GOLD : LINE} strokeWidth="4" fill="none" strokeDasharray={at === 2 ? undefined : "4 6"} strokeLinecap="round" />
      <W x={40} y={32} size={10} anchor="start" fill={at === 2 ? TEXT : SOFT}>Refer yourself</W>
      {stations.map((station, index) => <g key={station.t}><circle cx={station.x} cy="120" r="11" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="3" /><W x={station.x} y={150} size={10}>{station.t}</W></g>)}
      <circle cx={dot} cy={at === 3 ? 104 : 120} r="6" fill={GOLD} />
      {at === 1 && <Bubble x={150} y={76} text="Since it happened" width={124} />}
      {at === 3 && <><path d="M120 106 C130 84, 190 84, 200 106" stroke={GOLD} strokeWidth="2.5" fill="none" strokeDasharray="4 5" /><Box x={280} y={80} w={56} text="Plan" lit /></>}
      {at === 4 && <Sun x={280} y={70} r={14} />}
      <Say y={190}>{caps[at]}</Say>
    </svg>} />;
}

function PtsdSenses(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Skills to learn with a professional", "Refocus on the present moment", "Slow breaths, at least 5 minutes", "A calm space, and feet on the floor", "Reach out; note what helped"];
  const senses = ["See", "Touch", "Hear", "Smell", "Taste"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Grounding" title="Back to the here and now" label="Coping in the moment" credit="Illustration: Rehyn. One tip people with PTSD have shared."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Counting 5, 4, 3, 2, 1 with the senses, slow breathing and feet on the floor">
      {senses.map((sense, index) => <g key={sense} opacity={at === 1 ? 1 : 0.4}>
        <circle cx={40 + index * 60} cy="44" r="20" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={40 + index * 60} y={50} size={15} fill={at === 1 ? WHITE : TEXT}>{5 - index}</W>
        <W x={40 + index * 60} y={82} size={10}>{sense}</W>
      </g>)}
      {(at === 0 || at === 4) && <><Person x={136} y={170} scale={1} /><Person x={184} y={170} scale={1} fill={SOFT} /></>}
      {at === 4 && <Bubble x={252} y={118} text="What helped?" width={104} />}
      {at === 2 && <><circle cx="160" cy="138" r="36" fill={TINT} stroke={SOFT} strokeWidth="3" /><circle cx="160" cy="138" r="20" fill={INK} opacity=".85" className={still ? undefined : "lib-v2-breathe is-slow"} /></>}
      {at === 3 && <g>
        <path d="M70 134 L104 106 L138 134 V172 H70 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <HeartShape x={104} y={150} size={22} fill={GOLD} stroke={GOLD} width={2} />
        <path d="M180 178 H290" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="220" cy="168" rx="9" ry="18" fill={INK} transform="rotate(-8 220 168)" /><ellipse cx="252" cy="168" rx="9" ry="18" fill={INK} transform="rotate(8 252 168)" />
      </g>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function PtsdNightLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Hard to fall asleep or stay asleep", "Therapy can help with nightmares", "Same wake time, and a wind-down", "No alcohol, tea or coffee before bed", "Struggling for months? See a GP"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sleep" title="Calmer nights after trauma" label="Sleep and nightmares" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An evening and night line, with a wind-down, bedtime and a steady wake time">
      <rect x="170" y="40" width="130" height="92" rx="8" fill={INK} opacity=".1" />
      <path d="M20 132 H300" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <path d="M156 122 V108 H184 V122 M156 116 H184" stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" /><circle cx="162" cy="110" r="3" fill={INK} />
      <W x={170} y={150} size={10}>Bed</W>
      <Moon x={276} y={60} r={14} fill={at === 1 ? GOLD : INK} />
      {at === 0 && <path d="M190 100 H210 L214 76 L218 100 H240 L244 70 L248 100 H262 L266 84 L270 100 H292" stroke={INK} strokeWidth="2.5" fill="none" strokeLinejoin="round" />}
      {at === 1 && <><Cloud x={236} y={84} s={16} opacity={0.5} /><path d="M190 104 C220 98, 260 98, 292 104" stroke={INK} strokeWidth="2.5" fill="none" /></>}
      {at === 2 && <><rect x="122" y="118" width="34" height="14" fill={GOLD} opacity=".7" /><W x={130} y={168} size={10}>Wind down</W><Clock x={292} y={156} r={14} hand={3.6} /></>}
      {at === 3 && <><path d="M50 150 V158 H156 V150" stroke={GOLD} strokeWidth="3" fill="none" /><W x={103} y={176} size={10.5}>6 hours</W><Cup x={50} y={104} /><Cross x={52} y={104} s={15} /></>}
      {at === 4 && <><W x={235} y={100} size={11} fill={TEXT}>7 to 9 hours</W><Box x={80} y={84} w={60} text="GP" lit /></>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function PtsdSofa(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["It can feel hard to stay close", "Even a call or text can help", "Be there, and listen without pressure", "Pushing someone is unlikely to help", "Supporters need looking after too"];
  const ax = at === 0 ? 96 : 120, bx = at === 0 ? 224 : 200;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Relationships" title="Staying close when you want to pull away" label="Relationships" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people on a sofa, staying connected">
      <rect x="62" y="104" width="196" height="40" rx="12" fill={SOFT} opacity=".5" />
      <Person x={ax} y={146} scale={1.1} fill={at === 0 ? SOFT : INK} />
      <Person x={bx} y={146} scale={1.1} fill={at === 4 ? INK : SOFT} />
      <rect x="52" y="140" width="216" height="22" rx="8" fill={INK} /><rect x="44" y="120" width="16" height="42" rx="6" fill={INK} /><rect x="260" y="120" width="16" height="42" rx="6" fill={INK} />
      <path d="M70 162 V176 M250 162 V176" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 1 && <><Phone x={160} y={58} lit /><path d="M178 44 h34 a6 6 0 0 1 6 6 v12 a6 6 0 0 1 -6 6 h-26 l-8 6 Z" fill={GOLD} /></>}
      {at === 2 && <Bubble x={228} y={52} text="I'm still here" width={110} />}
      {at === 3 && <><Bubble x={168} y={48} text="I know how you feel" width={146} /><Cross x={262} y={48} s={10} /></>}
      {at === 4 && <HeartShape x={200} y={64} size={34} fill={GOLD} stroke={GOLD} width={2} />}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function PtsdDiary(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Sounds, smells, places, dates", "The mind can present it as now", "A diary can show patterns over time", "Approach gradually, when you are ready", "Affects driving? Tell the DVLA"];
  const icons = [{ x: 76, y: 80, t: "Sounds" }, { x: 128, y: 80, t: "Smells" }, { x: 194, y: 80, t: "Crowds" }, { x: 246, y: 80, t: "Dates" }];
  const drawIcon = (index: number, x: number, y: number) => [
    <g key="s" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round"><path d={`M${x - 10} ${y - 5} H${x - 4} L${x + 3} ${y - 11} V${y + 11} L${x - 4} ${y + 5} H${x - 10} Z`} fill={INK} /><path d={`M${x + 8} ${y - 6} A8 8 0 0 1 ${x + 8} ${y + 6}`} /></g>,
    <g key="m" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round">{[-7, 0, 7].map(dx => <path key={dx} d={`M${x + dx} ${y + 11} C${x + dx - 5} ${y + 4}, ${x + dx + 5} ${y - 3}, ${x + dx} ${y - 11}`} />)}</g>,
    <g key="c">{[-10, 0, 10].map(dx => <Person key={dx} x={x + dx} y={y + 12} scale={0.42} fill={dx === 0 ? INK : SOFT} />)}</g>,
    <g key="d"><rect x={x - 12} y={y - 11} width="24" height="22" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 12} y={y - 11} width="24" height="7" rx="2" fill={INK} /></g>,
  ][index];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Triggers" title="Spotting what brings it back" label="Reminders and triggers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An open diary with sounds, smells, crowds and dates, and patterns spotted over time">
      {at < 3 && <g>
        <path d="M40 40 H158 V170 H40 Z M162 40 H280 V170 H162 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        {at === 1 ? <><W x={99} y={110} size={16} fill={SOFT}>Then</W><W x={221} y={110} size={16}>Now</W><Arrow d="M128 104 H190" head="M183 98 L190 104 L183 110" /></> : <>
          {icons.map((icon, index) => <g key={icon.t}>{drawIcon(index, icon.x, icon.y)}<W x={icon.x} y={112} size={9.5}>{icon.t}</W></g>)}
          {at === 2 && <><path d="M56 148 H142 M56 160 H120 M178 148 H264 M178 160 H240" stroke={LINE} strokeWidth="3" strokeLinecap="round" /><path d="M76 122 C100 138, 170 138, 194 122" stroke={GOLD} strokeWidth="2.5" fill="none" strokeDasharray="3 5" /><circle cx="76" cy="122" r="4" fill={GOLD} /><circle cx="194" cy="122" r="4" fill={GOLD} /></>}
        </>}
      </g>}
      {at === 3 && <g>
        {[0, 1, 2, 3].map(index => <rect key={index} x={60 + index * 52} y={168 - index * 22} width="52" height={10 + index * 22} fill={index === 0 ? INK : SOFT} rx="3" />)}
        <Person x={76} y={152} scale={0.8} /><Person x={100} y={152} scale={0.8} fill={SOFT} />
      </g>}
      {at === 4 && <g>
        <rect x="0" y="118" width="320" height="50" fill={SOFT} opacity=".45" /><path d="M10 143 H310" stroke={WHITE} strokeWidth="3" strokeDasharray="14 10" />
        <path d="M80 136 V124 L94 112 H130 L144 124 V136 Z" fill={INK} /><circle cx="94" cy="138" r="7" fill={TEXT} /><circle cx="132" cy="138" r="7" fill={TEXT} />
        <Box x={232} y={70} w={120} text="Tell the DVLA" lit />
      </g>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function PtsdHelpTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tell someone; help is there right now", "In danger now: 999 or A&E", "111: choose the mental health option", "Samaritans or Shout, any hour", "Focus on getting through today"];
  const tiles = [{ n: "999", t: "or A&E" }, { n: "111", t: "mental health" }, { n: "116 123", t: "Samaritans" }, { n: "85258", t: "Text SHOUT" }];
  const on = [[], [0], [1], [2, 3], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Help, any hour" title="Help is there, any hour" label="If you are struggling to cope" credit="Illustration: Rehyn. In danger now? Call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four ways to get help: 999, NHS 111, Samaritans and Shout, and two people together">
      {tiles.map((tile, index) => { const x = 150 + (index % 2) * 84, y = 22 + Math.floor(index / 2) * 72; const lit = on.includes(index); return <g key={tile.n}>
        <rect x={x} y={y} width="78" height="64" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x + 39} y={y + 30} size={15} fill={lit ? WHITE : TEXT}>{tile.n}</W>
        <W x={x + 39} y={y + 50} size={9.5} fill={lit ? WHITE : TEXT}>{tile.t}</W>
      </g>; })}
      <Person x={50} y={160} scale={1} fill={at === 0 || at === 4 ? INK : SOFT} /><Person x={100} y={160} scale={1} fill={SOFT} />
      {at === 0 && <Bubble x={84} y={60} text="Tell someone" width={100} />}
      {at === 2 && <Box x={75} y={60} w={92} text="Urgent GP" lit />}
      {at === 3 && <><Clock x={75} y={66} r={24} hand={4.2} /><W x={75} y={110} size={10}>Any hour</W></>}
      {at === 4 && <Sun x={75} y={62} r={14} />}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

export function WorryPieceView({ piece, ...props }: { piece: WorryPiece } & PieceProps) {
  switch (piece) {
    case "ocd-loop": return <OcdLoop {...props} />;
    case "ocd-cloud-drift": return <OcdCloudDrift {...props} />;
    case "ocd-seesaw": return <OcdSeesaw {...props} />;
    case "ocd-overlap": return <OcdOverlap {...props} />;
    case "ocd-ladder": return <OcdLadder {...props} />;
    case "ocd-med-weeks": return <OcdMedWeeks {...props} />;
    case "ocd-two-doors": return <OcdTwoDoors {...props} />;
    case "ocd-notebook": return <OcdNotebook {...props} />;
    case "ocd-family-door": return <OcdFamilyDoor {...props} />;
    case "ocd-desk": return <OcdDesk {...props} />;
    case "ocd-dip-path": return <OcdDipPath {...props} />;
    case "ocd-groups": return <OcdGroups {...props} />;
    case "ptsd-filing": return <PtsdFiling {...props} />;
    case "ptsd-four-panels": return <PtsdFourPanels {...props} />;
    case "ptsd-roads": return <PtsdRoads {...props} />;
    case "ptsd-stones": return <PtsdStones {...props} />;
    case "ptsd-therapy-cards": return <PtsdTherapyCards {...props} />;
    case "ptsd-med-line": return <PtsdMedLine {...props} />;
    case "ptsd-route": return <PtsdRoute {...props} />;
    case "ptsd-senses": return <PtsdSenses {...props} />;
    case "ptsd-night-line": return <PtsdNightLine {...props} />;
    case "ptsd-sofa": return <PtsdSofa {...props} />;
    case "ptsd-diary": return <PtsdDiary {...props} />;
    case "ptsd-help-tiles": return <PtsdHelpTiles {...props} />;
  }
}
