import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { SHOULDER_PIECES, type ShoulderPiece } from "@/content/shoulder-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Chips, Clock, credit, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Rotator cuff problems and Shoulder replacement pages' own pieces (content/shoulder-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isShoulderPiece = (piece: NewsPiece): piece is ShoulderPiece => (SHOULDER_PIECES as readonly string[]).includes(piece);

/** The caption under a picture. */
const Say = ({ y = 204, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
/** A smaller line of words, usually across the top. */
const Note = ({ x = 160, y = 26, children }: { x?: number; y?: number; children: ReactNode }) => <W x={x} y={y} size={10.5}>{children}</W>;
/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A labelled tag with its top-left corner at (x, y). */
const Tag = ({ x, y, w, text, lit = false }: { x: number; y: number; w: number; text: string; lit?: boolean }) =>
  <g><rect x={x} y={y} width={w} height="26" rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x + w / 2} y={y + 17} size={10.5} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A gold cross over something left out. */
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
/** A gold tick. */
const Tick = ({ x, y, s = 10 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y} L${x - s * 0.3} ${y + s * 0.7} L${x + s} ${y - s * 0.8}`} stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
/** An upward arrow in gold. */
const Up = ({ x, y, h = 26 }: { x: number; y: number; h?: number }) =>
  <path d={`M${x} ${y} V${y - h} M${x - 7} ${y - h + 8} L${x} ${y - h} L${x + 7} ${y - h + 8}`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
/** A right-pointing arrow between two boxes. */
const Arrow = ({ x, y, w = 14 }: { x: number; y: number; w?: number }) =>
  <path d={`M${x} ${y} H${x + w} M${x + w - 6} ${y - 5} L${x + w} ${y} L${x + w - 6} ${y + 5}`} stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
/** An arc of a circle, from angle a0 to a1 in degrees (0 is to the right, angles run clockwise). */
const arc = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const at = (a: number) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)].map(n => n.toFixed(1)).join(" ");
  return `M${at(a0)} A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${at(a1)}`;
};
/** A heavy box, for lifting. */
const Crate = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}><rect x="-24" y="-18" width="48" height="36" rx="4" fill={SOFT} stroke={INK} strokeWidth="2.5" /><path d="M-24 -6 H24 M-8 -18 V-6 M8 -18 V-6" stroke={INK} strokeWidth="2" /></g>;
/** A car, its top-left corner at (x, y), 128 wide. */
const Car = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}>
    <path d="M0 34 L12 10 Q18 0 30 0 H86 Q98 0 106 10 L122 24 Q128 26 128 34 V44 H0 Z" fill={INK} />
    <rect x="24" y="8" width="30" height="16" rx="3" fill={TINT} /><rect x="62" y="8" width="34" height="16" rx="3" fill={TINT} />
    <circle cx="26" cy="46" r="11" fill={TEXT} stroke={WHITE} strokeWidth="3" /><circle cx="102" cy="46" r="11" fill={TEXT} stroke={WHITE} strokeWidth="3" />
  </g>;
/** A mug, centred on (x, y). */
const Cup = ({ x, y, steam = false }: { x: number; y: number; steam?: boolean }) =>
  <g><path d={`M${x - 14} ${y - 12} H${x + 12} V${y + 8} Q${x + 12} ${y + 16} ${x + 4} ${y + 16} H${x - 6} Q${x - 14} ${y + 16} ${x - 14} ${y + 8} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path d={`M${x + 12} ${y - 6} h4 a6 6 0 0 1 0 12 h-4`} fill="none" stroke={INK} strokeWidth="2.5" />
    {steam && <path d={`M${x - 6} ${y - 18} q4 -6 0 -12 M${x + 4} ${y - 18} q4 -6 0 -12`} stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" />}</g>;

/** The four rotator cuff bands around the ball, by angle. */
const CUFF = [[-165, -122], [-112, -68], [-58, -16], [-6, 36]];
/** A shoulder seen from the front: the shoulder blade and its small socket, the ball of the arm bone, the bony roof
 * above, and the four rotator cuff bands wrapped over the ball (`lit` bands are dark, `torn` is broken). */
const Cuff = ({ x, y, lit = [], torn = -1 }: { x: number; y: number; lit?: number[]; torn?: number }) =>
  <g>
    <path d={`M${x - 34} ${y - 40} L${x - 108} ${y - 28} L${x - 70} ${y + 60} L${x - 34} ${y + 36} Z`} fill={SOFT} opacity=".3" />
    <path d={`M${x - 36} ${y - 34} Q${x - 22} ${y} ${x - 36} ${y + 34}`} stroke={SOFT} strokeWidth="10" fill="none" strokeLinecap="round" />
    <path d={`M${x - 70} ${y - 52} Q${x - 14} ${y - 72} ${x + 30} ${y - 52}`} stroke={SOFT} strokeWidth="10" fill="none" strokeLinecap="round" />
    <path d={`M${x + 8} ${y + 16} L${x + 20} ${y + 66}`} stroke={SOFT} strokeWidth="24" strokeLinecap="round" />
    <circle cx={x} cy={y} r="28" fill={WHITE} stroke={INK} strokeWidth="3" />
    {CUFF.map(([a0, a1], index) => <path key={index} d={arc(x, y, 37, a0, a1)} stroke={lit.includes(index) ? INK : SOFT} strokeWidth="9" fill="none" strokeLinecap="round" strokeDasharray={torn === index ? "9 9" : undefined} />)}
  </g>;
/** A small cut-away shoulder joint: natural, ball only, a cap on the ball, total, or reverse (ball and socket swapped). */
const Implant = ({ x, y, kind, s = 1 }: { x: number; y: number; kind: "natural" | "hemi" | "cap" | "total" | "reverse"; s?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M-30 -30 Q-18 0 -30 30" stroke={SOFT} strokeWidth="9" fill="none" strokeLinecap="round" />
    <path d="M4 14 L12 54" stroke={SOFT} strokeWidth="18" strokeLinecap="round" />
    {kind === "reverse"
      ? <>
        <circle cx="-12" cy="0" r="14" fill={GOLD} stroke={INK} strokeWidth="2.5" />
        <path d="M8 -17 Q-6 0 8 17" stroke={INK} strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M9 6 L13 46" stroke={GOLD} strokeWidth="5" strokeLinecap="round" />
      </>
      : <>
        {kind === "total" && <><path d="M-24 -20 Q-14 0 -24 20" stroke={INK} strokeWidth="8" fill="none" strokeLinecap="round" /><path d="M-24 -20 Q-14 0 -24 20" stroke={WHITE} strokeWidth="4" fill="none" strokeLinecap="round" /></>}
        <circle cx="0" cy="0" r="20" fill={kind === "hemi" || kind === "total" ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" />
        {kind === "cap" && <path d={arc(0, 0, 20, 100, 260)} stroke={GOLD} strokeWidth="6" fill="none" />}
        {(kind === "hemi" || kind === "total") && <path d="M4 12 L12 48" stroke={GOLD} strokeWidth="5" strokeLinecap="round" />}
      </>}
  </g>;

// ==== Rotator cuff problems =================================================================================

function FourTendons(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const names = ["Supraspinatus", "Infraspinatus", "Subscapularis", "Teres minor"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Four muscles holding a small socket" label="What the rotator cuff is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ball-and-socket shoulder with four tendon bands wrapped over the ball">
      <Note>{["Smaller than the hip's socket", "They control shoulder movement", "Tendons thin with age", "Torn, it becomes weak and painful", "Around 70 in 100 cases: rotator cuff"][at]}</Note>
      <Cuff x={124} y={114} lit={at === 1 || at === 2 ? [0, 1, 2, 3] : []} torn={at === 3 ? 1 : -1} />
      {at === 0 && <path d="M84 80 Q98 114 84 148" stroke={GOLD} strokeWidth="4" fill="none" strokeDasharray="5 6" strokeLinecap="round" className={still ? undefined : "lib-why-pulse"} />}
      {at === 2 && names.map((name, index) => <g key={name}>
        <circle cx="206" cy={84 + index * 24} r="5" fill={index === 0 ? GOLD : INK} />
        <W x={216} y={88 + index * 24} size={10} anchor="start">{name}</W>
      </g>)}
      {at === 3 && <path d="M116 70 l5 -7 l5 7 l5 -7" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      {at === 4 && Array.from({ length: 10 }, (_, index) => <circle key={index} cx={216 + (index % 5) * 18} cy={96 + Math.floor(index / 5) * 20} r="6.5" fill={index < 7 ? INK : LINE} />)}
      <Say>{["A ball in a very small socket", "Muscles and tendons hold the ball in", "Four muscles, each with a tendon", "Torn by wear or after an accident", "Most common shoulder pain GPs see"][at]}</Say>
    </svg>} />;
}

function NameTags(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const lit = [[0, 1, 2], [1], [2], [3], [4]][at];
  const row1 = [{ x: 14, t: "Tendinopathy" }, { x: 114, t: "Impingement" }, { x: 214, t: "Bursitis" }];
  const row2 = [{ x: 30, t: "Tear from wear" }, { x: 170, t: "Tear after injury" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Types" title="Many names, mostly one problem" label="Tendinopathy, impingement and tears" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Name tags for rotator cuff problems above a tendon running from muscle to bone">
      <Note>{["Usually responds to exercise", "Not tendons trapped by bone", "Hard to raise the arm overhead", "Many do not remember hurting it", "Severe pain and significant weakness"][at]}</Note>
      {row1.map((tag, index) => <g key={tag.t} opacity={lit.includes(index) ? 1 : 0.45}><Tag x={tag.x} y={40} w={92} text={tag.t} lit={lit.includes(index)} /></g>)}
      {row2.map((tag, index) => <g key={tag.t} opacity={lit.includes(index + 3) ? 1 : 0.45}><Tag x={tag.x} y={76} w={120} text={tag.t} lit={lit.includes(index + 3)} /></g>)}
      <ellipse cx="58" cy="150" rx="32" ry="18" fill={SOFT} />
      <rect x="222" y="120" width="82" height="56" rx="18" fill={SOFT} />
      {at === 4
        ? <><rect x="80" y="143" width="112" height="14" rx="6" fill={INK} /><rect x="208" y="143" width="26" height="14" rx="6" fill={INK} /><path d="M200 136 l-5 7 l8 4 l-6 7 l6 5" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className={still ? undefined : "lib-why-pulse"} /></>
        : <rect x="80" y={at === 1 ? 140 : 143} width="154" height={at === 1 ? 20 : 14} rx="7" fill={INK} stroke={at === 1 ? GOLD : "none"} strokeWidth="3" />}
      {at === 2 && <ellipse cx="160" cy="131" rx="30" ry="7" fill={TINT} stroke={GOLD} strokeWidth="2.5" />}
      {at === 3 && <><rect x="196" y="143" width="12" height="8" fill={WHITE} /><path d="M194 151 l4 -4 l4 4 l4 -4 l4 4" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" /></>}
      <W x={58} y={186} size={10}>Muscle</W><W x={150} y={186} size={10}>Tendon</W><W x={263} y={192} size={10}>Bone</W>
      <Say y={210}>{["Several names, the same symptoms", "From overuse or age-related changes", "An inflamed cushion of fluid", "More common in people over 40", "Needs urgent referral to a specialist"][at]}</Say>
    </svg>} />;
}

function PainfulArc(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const sx = 142, sy = 96, r = 60;
  const theta = [12, 95, 12, 75, 12][at] * Math.PI / 180;
  const hand = [sx + 52 * Math.sin(theta), sy + 52 * Math.cos(theta)];
  const point = (deg: number) => `${(sx + r * Math.sin(deg * Math.PI / 180)).toFixed(1)} ${(sy + r * Math.cos(deg * Math.PI / 180)).toFixed(1)}`;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="Lifting, reaching and the painful arc" label="Symptoms" credit="Illustration: Rehyn. The arc shows the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person raising an arm out to the side, with the painful part of the arc marked">
      {at === 4
        ? <><Box x={160} y={50} w={240} text="Sudden or very bad pain" /><Box x={160} y={84} w={240} text="Cannot move your arm" /><Box x={160} y={118} w={240} text="Changed shape or badly swollen" /><Box x={160} y={152} w={240} text="Serious injury? Emergency department" size={10} lit /></>
        : <>
          <Note y={20}>{["Can spread down the arm or to the neck", "Lifting a full kettle, reaching up", "Can make it difficult to sleep", "Tears often found by ultrasound or MRI"][at]}</Note>
          <path d={`M${point(0)} A${r} ${r} 0 0 0 ${point(180)}`} fill="none" stroke={LINE} strokeWidth="3" strokeDasharray="4 6" />
          {at === 1 && <path d={`M${point(70)} A${r} ${r} 0 0 0 ${point(120)}`} fill="none" stroke={GOLD} strokeWidth="8" strokeLinecap="round" className={still ? undefined : "lib-why-pulse"} />}
          {at === 3 && <><path d="M150 96 H300" stroke={GOLD} strokeWidth="2.5" strokeDasharray="6 5" /><W x={300} y={89} size={10} anchor="end">Shoulder height</W></>}
          <circle cx="120" cy="62" r="13" fill={INK} />
          <path d="M98 92 Q120 82 142 92 L138 152 H102 Z" fill={INK} />
          <path d="M100 96 L92 146" stroke={INK} strokeWidth="9" strokeLinecap="round" />
          <path d="M110 150 V180 M130 150 V180" stroke={INK} strokeWidth="9" strokeLinecap="round" />
          <path d={`M${sx} ${sy} L${hand[0].toFixed(1)} ${hand[1].toFixed(1)}`} stroke={INK} strokeWidth="9" strokeLinecap="round" />
          {at === 0 && <circle cx="140" cy="88" r="7" fill={GOLD} stroke={WHITE} strokeWidth="2" className={still ? undefined : "lib-why-pulse"} />}
          {at === 2 && <Moon x={262} y={60} r={15} />}
        </>}
      <Say>{["Top and outer side of the shoulder", "Painful arc: about 70 to 120 degrees", "Often worse at night", "Hard to raise above shoulder height", "Urgent GP appointment, or NHS 111"][at]}</Say>
    </svg>} />;
}

function ScanChoice(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [[0, 1], [1], [2], [3], []][at];
  const tiles = ["Your story", "Examination", "X-ray", "Scan"];
  const icon = (index: number, cx: number) => [
    <g key="story"><rect x={cx - 22} y="62" width="44" height="28" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${cx - 10} 90 l-4 10 l14 -10`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />{[-10, 0, 10].map(dx => <circle key={dx} cx={cx + dx} cy="76" r="2.5" fill={INK} />)}</g>,
    <g key="exam"><circle cx={cx - 8} cy="66" r="7" fill={INK} /><path d={`M${cx - 18} 100 Q${cx - 18} 78 ${cx - 8} 78 Q${cx + 2} 78 ${cx + 2} 100 Z`} fill={INK} /><path d={`M${cx - 2} 82 L${cx + 20} 70`} stroke={SOFT} strokeWidth="6" strokeLinecap="round" /><path d={arc(cx - 2, 82, 26, -60, -10)} stroke={GOLD} strokeWidth="2.5" fill="none" /></g>,
    <g key="xray"><rect x={cx - 20} y="58" width="40" height="46" rx="4" fill={INK} /><path d={`M${cx - 4} 66 Q${cx + 8} 66 ${cx + 6} 76 L${cx + 2} 98`} stroke={WHITE} strokeWidth="4" fill="none" strokeLinecap="round" /></g>,
    <g key="scan"><rect x={cx - 6} y="58" width="12" height="28" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${cx - 10} 86 H${cx + 10} V92 H${cx - 10} Z`} fill={INK} />{[8, 14].map(gap => <path key={gap} d={`M${cx - gap} ${98 + gap / 2} Q${cx} ${104 + gap} ${cx + gap} ${98 + gap / 2}`} stroke={GOLD} strokeWidth="2" fill="none" />)}</g>,
  ][index];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diagnosis" title="Your story, an examination, sometimes a scan" label="Examination and scans" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four steps: your story, an examination, an X-ray and a scan">
      <Note y={28}>{["Moved for you: full, but painful", "No single test is reliable alone", "They do not show soft tissue", "Not usually requested by GPs", "Physio can often diagnose, no scans"][at]}</Note>
      {tiles.map((tile, index) => { const cx = 46 + index * 76; const on = lit.includes(index); return <g key={tile} opacity={on ? 1 : 0.4}>
        <rect x={cx - 35} y="44" width="70" height="92" rx="10" fill={on ? TINT : WHITE} stroke={on ? GOLD : INK} strokeWidth={on ? 3 : 2} />
        {icon(index, cx)}
        <W x={cx} y={128} size={10}>{tile}</W>
      </g>; })}
      {at === 4 && <><Box x={92} y={164} w={124} text="See a GP" lit /><Box x={228} y={164} w={124} text="Refer yourself" lit /></>}
      <Say>{["Your history and an examination", "Both shoulders compared; neck too", "X-rays not usually needed at first", "Ultrasound or MRI can show a tear", "Worse, or not better in 2 weeks? GP"][at]}</Say>
    </svg>} />;
}

function PeasBottle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Self-care" title="Rest briefly, then keep it moving" label="Rest, ice and painkillers" credit="Illustration: Rehyn. Check the leaflet, or ask a pharmacist."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Rest then movement, a wrapped cold pack and hot water bottle, and painkillers">
      <Note y={30}>{["Do not stop using it completely", "Usually 2 weeks before pain eases", "Ice if swollen; heat for sore muscles", "At least 4 hours between doses", "Over two weeks? Seek medical advice"][at]}</Note>
      {at === 0 && <>
        <Box x={50} y={96} w={70} text="Rest" lit /><Arrow x={88} y={96} /><Box x={150} y={96} w={90} text="A bit more" /><Arrow x={198} y={96} w={10} /><Box x={260} y={96} w={100} text="Usual activities" />
        <path d="M30 168 C110 168, 150 150, 290 128" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
      </>}
      {at === 1 && <>
        <Person x={92} y={156} scale={1.3} />
        <path d="M104 136 L120 86" stroke={INK} strokeWidth="7" strokeLinecap="round" />
        <Cross x={114} y={100} s={14} />
        {[0, 1, 2, 3, 4].map(index => <rect key={index} x={176 + index * 24} y="108" width="14" height="48" rx="4" fill={INK} />)}
        <W x={226} y={176} size={10}>Short bursts, breaks</W>
      </>}
      {at === 2 && <>
        <rect x="36" y="78" width="84" height="54" rx="12" fill={TINT} stroke={INK} strokeWidth="2.5" />
        {[[56, 96], [74, 108], [92, 94], [62, 118], [100, 116], [84, 124]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill={SOFT} />)}
        <path d="M150 84 Q150 76 158 76 H168 V68 H184 V76 H194 Q202 76 202 84 V128 Q202 136 194 136 H158 Q150 136 150 128 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M162 124 q5 -8 0 -16 t0 -14 M176 124 q5 -8 0 -16 t0 -14 M190 124 q5 -8 0 -16 t0 -14" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
        <Clock x={262} y={104} r={26} hand={2.09} />
        <W x={78} y={156} size={10}>Cold</W><W x={176} y={156} size={10}>Heat</W><W x={262} y={156} size={10}>20 minutes</W>
      </>}
      {at === 3 && <>
        <Pill x={84} y={96} rotate={-30} /><Pill x={120} y={112} rotate={20} />
        <Clock x={226} y={100} r={28} hand={2.09} />
        <W x={102} y={150} size={10}>Regular doses</W><W x={226} y={150} size={10}>4 hours</W>
      </>}
      {at === 4 && <>
        <Pill x={70} y={100} />
        <g transform="rotate(-20 160 100)"><rect x="126" y="88" width="64" height="24" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M190 94 H200 V106 H190" fill={INK} /></g>
        <rect x="232" y="76" width="50" height="48" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M232 90 H282" stroke={INK} strokeWidth="2.5" />
        {[0, 1, 2, 3].map(index => <rect key={index} x={240 + index * 10} y="98" width="6" height="6" fill={index < 2 ? GOLD : SOFT} />)}
        <W x={70} y={150} size={10}>Tablets</W><W x={160} y={150} size={10}>Cream or gel</W><W x={257} y={150} size={10}>2 weeks</W>
      </>}
      <Say>{["Rest early, then gradually do more", "Change what makes it worse", "Wrapped cold or heat, up to 20 minutes", "Paracetamol first, at regular doses", "If not, a GP may consider ibuprofen"][at]}</Say>
    </svg>} />;
}

function WallSlide(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const hand = [96, 112, 76, 92, 84][at];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercises" title="Three moves, six days a week" label="Shoulder exercises" credit="Illustration: Rehyn. Check with your GP or physiotherapist first."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person sliding their hands up a wall, beside a weekly plan">
      <Note y={26}>{["Physio usually lasts 6 weeks", "Low intensity, often, within your pain", "8 times, three sets, a minute's rest", "Easy now? Add a light weight", "At least four days to get better"][at]}</Note>
      <rect x="250" y="40" width="14" height="144" fill={LINE} />
      <path d="M150 184 H300" stroke={LINE} strokeWidth="3" />
      <Person x={208} y={170} scale={1.25} />
      <path d={`M220 156 L248 ${hand}`} stroke={INK} strokeWidth="7" strokeLinecap="round" />
      {at === 0 && <>
        {Array.from({ length: 12 }, (_, week) => <rect key={week} x={14 + week * 14} y="92" width="11" height="22" rx="3" fill={week >= 5 ? GOLD : SOFT} />)}
        <W x={89} y={132} size={10}>6 to 12 weeks</W>
      </>}
      {at === 1 && <g><path d="M46 104 H112" stroke={INK} strokeWidth="5" /><rect x="36" y="86" width="14" height="36" rx="3" fill={INK} /><rect x="108" y="86" width="14" height="36" rx="3" fill={INK} /><Cross x={79} y={104} s={22} /></g>}
      {at === 2 && <><Box x={82} y={66} w={124} text="Wall slide" lit /><Box x={82} y={102} w={124} text="Wall push-up" lit /><Box x={82} y={138} w={124} text="Rotation" lit /></>}
      {at === 3 && <><Clock x={82} y={98} r={28} hand={Math.PI} /><W x={82} y={148} size={10}>30 minutes</W></>}
      {at === 4 && days.map((day, index) => <g key={index}>
        <circle cx={20 + index * 22} cy="100" r="8.5" fill={index < 6 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={20 + index * 22} y={124} size={10}>{day}</W>
      </g>)}
      <Say>{["Should feel better in 6 to 12 weeks", "Get advice first; no heavy gym kit", "Wall slides, push-ups and rotation", "Pain should settle within 30 minutes", "Six days a week, one day off"][at]}</Say>
    </svg>} />;
}

function OneInjection(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Injections" title="Calming the pain to get moving" label="Steroid injections" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An injection into the shoulder, with one dose marked and a second only sometimes">
      <Cuff x={118} y={98} lit={at === 0 ? [0, 1, 2, 3] : []} />
      <g transform="translate(150 70) rotate(-35)" opacity={at === 0 || at === 1 ? 1 : 0.4}>
        <path d="M0 0 H26" stroke={TEXT} strokeWidth="2.5" />
        <rect x="26" y="-8" width="50" height="16" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M76 0 H90 M90 -8 V8" stroke={INK} strokeWidth="3" />
      </g>
      {at === 1 && <><Box x={262} y={92} w={84} text="Injection" lit /><W x={262} y={120} size={12}>+</W><Box x={262} y={144} w={84} text="Physio" lit /></>}
      {at === 2 && <>
        <circle cx="222" cy="128" r="16" fill={INK} /><W x={222} y={133} size={13} fill={WHITE}>1</W>
        <circle cx="262" cy="128" r="16" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeDasharray="4 4" /><W x={262} y={133} size={13}>2</W>
        <circle cx="300" cy="128" r="14" fill={WHITE} stroke={LINE} strokeWidth="2" /><W x={300} y={133} size={12}>3</W><Cross x={300} y={128} s={13} />
      </>}
      {at === 3 && <><Clock x={262} y={118} r={26} hand={0} /><W x={262} y={160} size={10}>24 hours</W></>}
      {at === 4 && <g className={still ? undefined : "lib-why-pulse"}><path d="M262 96 L292 148 H232 Z" fill={WHITE} stroke={GOLD} strokeWidth="3.5" strokeLinejoin="round" /><W x={262} y={142} size={20}>!</W></g>}
      <Note y={186}>{["Often with a local anaesthetic", "Evidence is limited", "A second only after 6 weeks", "Numb arm? Arrange transport home", "Diabetes? Check blood sugar closely"][at]}</Note>
      <Say y={206}>{["Less inflammation, easier movement", "A shared decision, alongside physio", "Usually one, never more than two", "Rest the joint for 24 hours", "Severe pain after it? Urgent advice"][at]}</Say>
    </svg>} />;
}

function TendonAnchor(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Surgery" title="When a tendon needs stitching back" label="When surgery is offered" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tendon running to the bone, stitched back with small anchors">
      <Note y={26}>{["Referral if 6 weeks has not helped", "Usually keyhole, as a day case", "May have limited benefits", "About 20 in 100 still have symptoms", "Mostly one-handed at first"][at]}</Note>
      {at === 4
        ? <>
          <path d="M30 116 H290" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
          <rect x="30" y="110" width="50" height="12" rx="6" fill={INK} />
          <rect x="130" y="110" width="80" height="12" rx="6" fill={SOFT} />
          <rect x="210" y="110" width="80" height="12" rx="6" fill={GOLD} opacity=".7" />
          <W x={56} y={96} size={10}>Sling</W><W x={170} y={96} size={10}>Improving</W><W x={290} y={96} size={10} anchor="end">Still improving</W>
          <W x={56} y={144} size={10}>6 weeks</W><W x={170} y={144} size={10}>3 to 6 months</W><W x={290} y={144} size={10} anchor="end">18 months</W>
        </>
        : <>
          {at === 3
            ? Array.from({ length: 10 }, (_, index) => <circle key={index} cx={70 + index * 20} cy="52" r="6.5" fill={index < 2 ? GOLD : SOFT} />)
            : <rect x="110" y="56" width="170" height="14" rx="7" fill={SOFT} />}
          {at === 2 && <><rect x="150" y="68" width="90" height="8" rx="3" fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 4" /><path d="M196 82 V96" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /></>}
          <path d="M150 182 V138 Q150 104 190 104 H262 Q300 104 300 140 V182 Z" fill={SOFT} opacity=".6" />
          <ellipse cx="50" cy="111" rx="36" ry="18" fill={SOFT} />
          {at === 1
            ? <><rect x="76" y="104" width="110" height="14" rx="6" fill={INK} /><rect x="176" y="104" width="44" height="14" rx="6" fill={INK} />
              {[188, 210].map(cx => <g key={cx}><path d={`M${cx} 110 V132`} stroke={GOLD} strokeWidth="2.5" /><circle cx={cx} cy="136" r="5.5" fill={GOLD} stroke={WHITE} strokeWidth="2" className={still ? undefined : "lib-why-pulse"} /></g>)}</>
            : <rect x="76" y="104" width="144" height="14" rx="6" fill={INK} />}
          <W x={50} y={146} size={10}>Muscle</W><W x={252} y={164} size={10}>Bone</W>
        </>}
      <Say y={206}>{["Most improve without surgery", "Tendon sewn back with small anchors", "Trims bone to give tendons space", "Good for pain, less so for movement", "Sling for up to 6 weeks"][at]}</Say>
    </svg>} />;
}

function ElbowIn(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Daily tasks" title="Elbow in, palm up, pillows placed" label="Reaching, dressing and sleeping" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Everyday tasks: reaching, sleeping, sitting, housework and dressing">
      <Chips labels={["Reach", "Sleep", "Sit", "Home", "Dress"]} lit={at} y={10} />
      {at === 0 && <>
        <path d="M188 96 H292" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <rect x="236" y="76" width="16" height="18" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="262" y="76" width="16" height="18" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />
        <circle cx="130" cy="72" r="12" fill={INK} />
        <path d="M114 92 Q130 86 146 92 L142 160 H118 Z" fill={INK} />
        <path d="M124 160 V174 M136 160 V174" stroke={INK} strokeWidth="7" strokeLinecap="round" />
        <path d="M144 96 L148 128 L184 108" stroke={SOFT} strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="148" cy="128" r="5" fill={GOLD} />
        <path d="M178 100 Q186 110 196 100" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />
      </>}
      {at === 1 && <>
        <rect x="30" y="140" width="260" height="14" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M36 154 V172 M284 154 V172" stroke={INK} strokeWidth="4" />
        <ellipse cx="66" cy="130" rx="24" ry="8" fill={WHITE} stroke={INK} strokeWidth="2" />
        <circle cx="70" cy="114" r="11" fill={SOFT} />
        <ellipse cx="156" cy="122" rx="66" ry="15" fill={INK} />
        <ellipse cx="150" cy="96" rx="30" ry="8" fill={GOLD} />
        <ellipse cx="236" cy="110" rx="10" ry="18" fill={WHITE} stroke={INK} strokeWidth="2" />
      </>}
      {at === 2 && <>
        <path d="M100 70 V172 M100 136 H178 M108 136 V172 M172 136 V172" stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="126" cy="74" r="11" fill={INK} />
        <path d="M112 90 Q126 84 140 90 L140 134 H114 Z" fill={INK} />
        <path d="M122 132 H170" stroke={INK} strokeWidth="10" strokeLinecap="round" />
        <path d="M170 134 V168" stroke={INK} strokeWidth="9" strokeLinecap="round" />
        <ellipse cx="108" cy="118" rx="6" ry="14" fill={GOLD} />
        <ellipse cx="156" cy="122" rx="18" ry="6" fill={TINT} stroke={INK} strokeWidth="2" />
        <path d="M138 96 L144 118 L160 118" stroke={SOFT} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </>}
      {at === 3 && <>
        <Person x={110} y={164} scale={1.25} />
        <path d="M122 140 L150 160" stroke={INK} strokeWidth="6" strokeLinecap="round" />
        <path d="M150 112 L166 170" stroke={INK} strokeWidth="5" strokeLinecap="round" /><rect x="156" y="166" width="32" height="10" rx="3" fill={INK} />
        {[214, 262].map(x => <g key={x}><rect x={x} y="128" width="30" height="30" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 7} 128 Q${x + 15} 114 ${x + 23} 128`} fill="none" stroke={INK} strokeWidth="2.5" /></g>)}
      </>}
      {at === 4 && <>
        <path d="M128 76 L108 90 L118 110 L130 102 V166 H190 V102 L202 110 L212 90 L192 76 Q160 88 128 76 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <path d="M66 126 Q80 98 106 98" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" /><path d="M98 92 L108 98 L98 104" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M244 172 L272 82" stroke={INK} strokeWidth="4" strokeLinecap="round" /><ellipse cx="274" cy="74" rx="13" ry="9" fill={TINT} stroke={INK} strokeWidth="2" />
      </>}
      <Note y={188}>{["Palm facing the ceiling", "On your back? Pillows under the arm", "Change your position often", "Iron at waist height, essentials only", "Front-opening clothes after a repair"][at]}</Note>
      <Say y={208}>{["Elbow bent and at your side", "Good side, with pillows to support", "A cushion behind your lower back", "Short sweeps, two bags, many breaks", "An OT can advise on equipment"][at]}</Say>
    </svg>} />;
}

function DeskSling(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows = [{ t: "Arms close to your body: within 3 weeks", from: 0, to: 3 }, { t: "Most people: within 2 months", from: 0, to: 8.7 }, { t: "Heavy or overhead work: 3 to 6 months", from: 13, to: 26 }];
  const week = (n: number) => 20 + n * 270 / 26;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work" title="Desk, lifting and the drive back" label="Work and lifting" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Work at shoulder height, a desk set up straight, returning to work and a car">
      <Note y={26}>{["Vibrating hand tools too", "Use a headset, not your shoulder", "Access to Work grants are not repaid", "No kettle lifting for 8 to 12 weeks", "Usually 6 to 12 weeks after repair"][at]}</Note>
      {at === 0 && <>
        <rect x="70" y="58" width="80" height="12" rx="3" fill={SOFT} />
        <Person x={110} y={170} scale={1.3} />
        <path d="M98 150 L92 76 M122 150 L128 76" stroke={INK} strokeWidth="7" strokeLinecap="round" />
        <path d={arc(110, 100, 60, -40, 10)} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d={arc(110, 100, 60, -20, 30)} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" opacity=".5" />
        <Crate x={240} y={150} s={1.3} />
      </>}
      {at === 1 && <>
        <rect x="120" y="60" width="78" height="50" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M159 110 V122" stroke={INK} strokeWidth="3" />
        <rect x="124" y="124" width="70" height="8" rx="2" fill={SOFT} />
        <rect x="60" y="134" width="200" height="8" rx="3" fill={INK} />
        <path d="M70 142 V180 M250 142 V180" stroke={INK} strokeWidth="4" />
        <path d={arc(262, 96, 18, 180, 360)} stroke={INK} strokeWidth="4" fill="none" /><rect x="238" y="92" width="10" height="18" rx="4" fill={INK} /><rect x="276" y="92" width="10" height="18" rx="4" fill={INK} />
        <path d="M159 100 V70" stroke={GOLD} strokeWidth="2.5" strokeDasharray="3 4" />
      </>}
      {at === 2 && <><Box x={160} y={64} w={230} text="Reasonable adjustments" lit /><Box x={160} y={100} w={230} text="A phased return to work" /><Box x={160} y={136} w={230} text="Access to Work grant" lit /></>}
      {at === 3 && rows.map((row, index) => <g key={row.t}>
        <W x={20} y={60 + index * 40} size={10} anchor="start">{row.t}</W>
        <rect x="20" y={68 + index * 40} width="270" height="10" rx="5" fill={LINE} />
        <rect x={week(row.from)} y={68 + index * 40} width={week(row.to) - week(row.from)} height="10" rx="5" fill={index === 1 ? GOLD : INK} />
      </g>)}
      {at === 4 && <>
        <Car x={40} y={96} />
        <path d="M222 80 L266 80 L244 126 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M222 80 L236 56 M266 80 L252 56" stroke={INK} strokeWidth="2.5" />
        <Cross x={244} y={92} s={22} />
      </>}
      <Say y={206}>{["Overhead tasks or heavy lifting", "Screen and keyboard straight ahead", "Employers make reasonable adjustments", "Return depends on your job", "Illegal to drive wearing a sling"][at]}</Say>
    </svg>} />;
}

function BackToPlay(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sport" title="Building back to the game" label="Getting back to sport" credit="Illustration: Rehyn. Times are from hospital leaflets; your physio will guide you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Returning to sport step by step, from gentle activity to overhead play">
      <Note y={26}>{["A sudden jump in demand can hurt", "No heavy gym equipment", "Pain gone within 30 minutes is okay", "Not competitive for 3 months", "Your physio will guide you"][at]}</Note>
      {at === 0 && <>
        <Person x={110} y={168} scale={1.3} />
        <path d="M120 146 L104 98" stroke={INK} strokeWidth="7" strokeLinecap="round" />
        <circle cx="102" cy="88" r="8" fill={GOLD} />
        <path d="M110 80 Q180 34 270 96" fill="none" stroke={LINE} strokeWidth="3" strokeDasharray="5 7" />
      </>}
      {at === 1 && <>
        <Tag x={40} y={58} w={124} text="Walking" lit /><Tag x={40} y={96} w={124} text="Swimming" lit /><Tag x={40} y={134} w={124} text="Dancing" lit />
        <g><path d="M222 108 H282" stroke={INK} strokeWidth="5" /><rect x="212" y="92" width="14" height="32" rx="3" fill={INK} /><rect x="278" y="92" width="14" height="32" rx="3" fill={INK} /><Cross x={252} y={108} s={20} /></g>
      </>}
      {at === 2 && <><Box x={56} y={100} w={84} text="Wall" /><Arrow x={100} y={100} /><Box x={160} y={100} w={84} text="No wall" /><Arrow x={204} y={100} /><Box x={266} y={100} w={88} text="Light weight" lit /></>}
      {at === 3 && <>
        <path d="M30 122 H290" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
        <rect x="210" y="116" width="80" height="12" rx="6" fill={GOLD} opacity=".7" />
        {[46, 140].map(x => <circle key={x} cx={x} cy="122" r="7" fill={INK} />)}
        <W x={46} y={102} size={10}>Breaststroke</W><W x={140} y={102} size={10}>Golf, front crawl</W><W x={250} y={102} size={10}>Contact sports</W>
        <W x={46} y={148} size={10}>6 weeks</W><W x={140} y={148} size={10}>3 months</W><W x={250} y={148} size={10}>9 to 12 months</W>
      </>}
      {at === 4 && <>
        <path d="M24 176 H296" stroke={LINE} strokeWidth="3" />
        {[18, 30, 42, 56, 72, 90].map((height, index) => <rect key={index} x={40 + index * 42} y={176 - height} width="30" height={height} rx="6" fill={index === 0 ? GOLD : INK} opacity={0.5 + index * 0.1} />)}
      </>}
      <Say>{["Common with overhead activities", "Walking, swimming and dancing can help", "Progress: off the wall, light weight", "One leaflet: golf after 3 months", "Short, easy sessions, then build up"][at]}</Say>
    </svg>} />;
}

function PatientPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Long-term" title="When the shoulder takes its time" label="Pain that lasts" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A strip of twelve months, with ways to keep going while a shoulder recovers">
      {Array.from({ length: 12 }, (_, month) => <rect key={month} x={20 + month * 24} y="24" width="20" height="18" rx="4"
        fill={at === 0 && month < 6 ? INK : at === 1 && month >= 5 ? GOLD : WHITE} stroke={INK} strokeWidth="1.5" opacity={at === 0 || at === 1 ? 1 : 0.4} />)}
      <W x={30} y={58} size={10}>1</W><W x={150} y={58} size={10}>6</W><W x={294} y={58} size={10}>12 months</W>
      <Note y={84}>{["With exercise, 6 weeks to improve", "40 to 50 in 100 at 6 to 12 months", "Or refer yourself back", "Pace yourself; a bit more each day", "Talking therapies can help"][at]}</Note>
      {at === 0 && <><Person x={150} y={160} scale={1.1} /><path d="M40 176 H280" stroke={LINE} strokeWidth="4" strokeLinecap="round" /><path d="M280 176 V138" stroke={INK} strokeWidth="3" /><path d="M280 138 L298 144 L280 150 Z" fill={GOLD} /></>}
      {at === 1 && Array.from({ length: 10 }, (_, index) => <circle key={index} cx={70 + index * 20} cy="136" r="7" fill={index < 4 ? INK : index === 4 ? GOLD : LINE} />)}
      {at === 2 && <><Box x={96} y={136} w={120} text="Your GP" lit /><Box x={232} y={136} w={136} text="Physio service" lit /></>}
      {at === 3 && <><path d="M24 176 H296" stroke={LINE} strokeWidth="3" />{Array.from({ length: 7 }, (_, day) => <rect key={day} x={34 + day * 38} y={176 - (24 + day * 7)} width="26" height={24 + day * 7} rx="5" fill={INK} opacity={0.5 + day * 0.07} />)}</>}
      {at === 4 && <><Tag x={18} y={106} w={136} text="Gentle exercise" lit /><Tag x={166} y={106} w={136} text="Slow breathing" lit /><Tag x={18} y={142} w={136} text="Sleep routine" lit /><Tag x={166} y={142} w={136} text="Friends, family" lit /></>}
      <Say y={206}>{["6 months or longer to recover", "Pain that lasts or returns is common", "Still in pain? Go back to your GP", "Keep using it, in short bursts", "Gentle exercise, breathing and sleep"][at]}</Say>
    </svg>} />;
}

// ==== Shoulder replacement ==================================================================================

function FourTypes(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const kinds = [{ k: "hemi", t: "Ball only" }, { k: "cap", t: "Cap" }, { k: "total", t: "Total" }, { k: "reverse", t: "Reverse" }] as const;
  const lit = [[], [0, 1], [2, 3], [0, 1, 2, 3]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A new ball, sometimes a new socket" label="What a shoulder replacement involves" credit="Illustration: Rehyn. Simplified joints, not real implants."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A shoulder joint, and four kinds of shoulder replacement side by side">
      <Note y={26}>{["Arthritis can wear the surfaces", "Made of special plastics and metal", "Reverse when the rotator cuff is poor", "Full benefit can take several months"][at]}</Note>
      {at === 0
        ? <>
          <Implant x={160} y={90} kind="natural" s={1.6} />
          <W x={160} y={94} size={11}>Ball</W>
          <W x={104} y={94} size={10.5} anchor="end">Socket</W>
          <W x={196} y={160} size={10} anchor="start">Upper arm bone</W>
        </>
        : kinds.map((kind, index) => <g key={kind.k} opacity={lit.includes(index) ? 1 : 0.35}>
          <Implant x={50 + index * 74} y={88} kind={kind.k} s={1.1} />
          <W x={48 + index * 74} y={166} size={10.5}>{kind.t}</W>
        </g>)}
      <Say>{["Ball: humeral head. Socket: glenoid", "Ball only, or a metal cap on the ball", "Total: both. Reverse: swapped over", "Less pain and a better quality of life"][at]}</Say>
    </svg>} />;
}

function WeighScale(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tilt = [-8, -3, 6, -2, 0][at] * Math.PI / 180;
  const left = [160 - 100 * Math.cos(tilt), 62 - 100 * Math.sin(tilt)], right = [160 + 100 * Math.cos(tilt), 62 + 100 * Math.sin(tilt)];
  const leftWords = ["Medicines", "Injections", "Physiotherapy"];
  const rightWords = [["Surgery"], ["Pain affecting", "quality of life"], ["Less pain", "Better movement"], ["Less movement", "Wears out in time"], ["Your choice"]][at];
  const pan = ([x, y]: number[], words: string[], on: boolean) => <g opacity={on ? 1 : 0.45}>
    <path d={`M${x} ${y} L${x - 30} ${y + 30} M${x} ${y} L${x + 30} ${y + 30}`} stroke={INK} strokeWidth="2" />
    <path d={`M${x - 36} ${y + 30} Q${x} ${y + 48} ${x + 36} ${y + 30} Z`} fill={on ? TINT : WHITE} stroke={INK} strokeWidth="2.5" />
    {words.map((word, index) => <W key={word} x={x} y={y + 62 + index * 14} size={10}>{word}</W>)}
  </g>;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Deciding" title="Weighing up a new shoulder" label="Deciding whether to have one" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balance with other treatments on one side and a new shoulder on the other">
      <Note y={22}>{["Surgery only for a small number", "Also for some fractures near the joint", "Some pain and stiffness may remain", "Likely to last 10 years", "Family, friends, GP and physio too"][at]}</Note>
      {at !== 4 && <path d="M160 62 V170 M124 174 H196" stroke={INK} strokeWidth="5" strokeLinecap="round" />}
      <path d={`M${left[0].toFixed(1)} ${left[1].toFixed(1)} L${right[0].toFixed(1)} ${right[1].toFixed(1)}`} stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <circle cx="160" cy="62" r="6" fill={GOLD} />
      {pan(left, leftWords, at === 0 || at === 4)}
      {pan(right, rightWords, at !== 0)}
      {at === 3 && <><Up x={292} y={64} h={24} /><Cross x={292} y={50} s={9} /></>}
      {at === 4 && <><path d="M160 62 V150" stroke={INK} strokeWidth="5" strokeLinecap="round" /><Person x={120} y={176} scale={0.6} fill={SOFT} /><Person x={160} y={176} scale={0.6} /><Person x={200} y={176} scale={0.6} fill={SOFT} /></>}
      <Say y={206}>{["Other treatments usually come first", "When pain affects quality of life", "Less pain, better quality of life", "Less movement than a healthy joint", "Think it through with your surgeon"][at]}</Say>
    </svg>} />;
}

function HomeReady(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Preparing" title="Getting the home ready for one hand" label="Getting ready for the operation" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Getting ready: a waiting calendar, a check-up, a clinic visit, a kitchen in easy reach and a lift home">
      <Note y={28}>{["Stay active; do your exercises", "Smoking can raise complication risk", "Ask which medicines to stop", "Batch cook; keep things in reach", "Cough or cold? Tell your surgeon"][at]}</Note>
      {at === 0 && <>
        {Array.from({ length: 12 }, (_, week) => <g key={week}>
          <rect x={46 + (week % 6) * 40} y={50 + Math.floor(week / 6) * 38} width="34" height="28" rx="5" fill={week >= 5 ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <W x={63 + (week % 6) * 40} y={68 + Math.floor(week / 6) * 38} size={10} fill={week >= 5 ? WHITE : TEXT}>{week + 1}</W>
        </g>)}
        <W x={160} y={146} size={10}>weeks</W>
      </>}
      {at === 1 && <>
        <path d="M78 74 Q78 62 92 64 Q100 66 108 64 Q122 62 122 76 Q122 92 116 104 L112 132 Q110 138 106 132 L100 108 L94 132 Q90 138 88 132 L84 104 Q78 92 78 74 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <Tick x={140} y={70} s={10} />
        <rect x="190" y="98" width="86" height="14" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="262" y="98" width="14" height="14" fill={GOLD} />
        <Cross x={233} y={105} s={20} />
      </>}
      {at === 2 && <>
        <Tag x={40} y={50} w={110} text="Blood tests" lit /><Tag x={170} y={50} w={110} text="X-rays" lit />
        <Tag x={40} y={86} w={110} text="Urine sample" lit /><Tag x={170} y={86} w={110} text="ECG" lit />
        <path d="M40 150 H120 l8 -16 l8 30 l8 -22 l6 8 H280" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      </>}
      {at === 3 && <>
        <path d="M30 66 H140" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <rect x="58" y="44" width="18" height="20" rx="3" fill="none" stroke={SOFT} strokeWidth="2" strokeDasharray="3 3" />
        <rect x="30" y="140" width="130" height="10" rx="3" fill={INK} />
        <path d="M38 150 V180 M152 150 V180" stroke={INK} strokeWidth="4" />
        <rect x="104" y="118" width="18" height="20" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M80 62 Q104 80 110 112" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M104 106 L110 114 L115 105" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="200" y="50" width="84" height="128" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[72, 104, 136].map(y => <g key={y}><path d={`M206 ${y + 22} H278`} stroke={LINE} strokeWidth="2" /><rect x="212" y={y} width="26" height="18" rx="3" fill={TINT} stroke={SOFT} /><rect x="246" y={y} width="26" height="18" rx="3" fill={TINT} stroke={SOFT} /></g>)}
      </>}
      {at === 4 && <>
        <path d="M40 112 L80 78 L120 112 V170 H40 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <rect x="70" y="134" width="20" height="36" rx="2" fill={INK} />
        <path d="M128 168 H170" stroke={LINE} strokeWidth="4" strokeDasharray="6 6" />
        <Car x={176} y={120} />
      </>}
      <Say y={206}>{["Usually contacted in 6 to 12 weeks", "Dental check-up well before surgery", "A clinic check 2 to 3 weeks before", "Practise tasks with your other arm", "Arrange a lift there and back"][at]}</Say>
    </svg>} />;
}

function DayStrip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const steps = ["Arrive", "Anaesthetic", "Operation", "Waking up", "Home"];
  const icon = (index: number, cx: number, cy: number) => [
    <g key="door"><rect x={cx - 9} y={cy - 14} width="18" height="28" rx="2" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={cx + 4} cy={cy} r="2" fill={INK} /></g>,
    <g key="mask"><path d={`M${cx - 12} ${cy - 4} Q${cx} ${cy - 12} ${cx + 12} ${cy - 4} L${cx + 8} ${cy + 10} Q${cx} ${cy + 14} ${cx - 8} ${cy + 10} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d={`M${cx} ${cy + 12} V${cy + 18}`} stroke={INK} strokeWidth="2.5" /></g>,
    <Clock key="clock" x={cx} y={cy} r={13} hand={Math.PI} />,
    <g key="bed"><rect x={cx - 15} y={cy} width="30" height="8" rx="2" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={cx - 8} cy={cy - 5} r="5" fill={INK} /><path d={`M${cx - 15} ${cy - 10} V${cy + 12} M${cx + 15} ${cy + 8} V${cy + 12}`} stroke={INK} strokeWidth="2.5" /></g>,
    <g key="home"><path d={`M${cx - 13} ${cy - 1} L${cx} ${cy - 13} L${cx + 13} ${cy - 1} V${cy + 13} H${cx - 13} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><rect x={cx - 3} y={cy + 4} width="6" height="9" fill={INK} /></g>,
  ][index];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="In hospital" title="In on the morning, home in days" label="The operation and the hospital stay" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A strip from arriving at hospital, through the operation, to going home">
      <Note y={30}>{["Bath or shower before you come in", "Bring a book or music if awake", "Opened from the front or top", "A sling with a strap around your back", "Rehabilitation within 24 hours"][at]}</Note>
      <path d="M36 90 H284" stroke={LINE} strokeWidth="4" />
      {steps.map((step, index) => { const cx = 36 + index * 62; const on = at === index; return <g key={step} opacity={on ? 1 : 0.5}>
        <circle cx={cx} cy="90" r="25" fill={on ? TINT : WHITE} stroke={on ? GOLD : LINE} strokeWidth={on ? 3.5 : 2} className={on && !still ? "lib-why-pulse" : undefined} />
        {icon(index, cx, 90)}
        <W x={cx} y={index % 2 ? 148 : 132} size={10}>{step}</W>
      </g>; })}
      {at === 3 && <Box x={222} y={174} w={130} text="12 to 24 hours" size={10} />}
      {at === 4 && <Box x={284 - 50} y={174} w={100} text="2 to 3 nights" size={10} lit />}
      {at === 2 && <Box x={160} y={174} w={150} text="About an hour and a half" size={10} />}
      <Say y={206}>{["Admitted early; sign a consent form", "Asleep, a nerve block, or both", "Usually around an hour and a half", "Arm heavy and numb for 12 to 24 hours", "Usually 2 to 3 nights in hospital"][at]}</Say>
    </svg>} />;
}

function SlingWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const tick = (week: number) => 166 + week * 22;
  return <MemoryBand props={props} state={s} tone="theme" kicker="The sling" title="Wearing the sling well" label="The sling and the first weeks" credit="Illustration: Rehyn. Follow your own team's advice on the sling."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A seated person wearing a sling, beside a ruler of weeks">
      <Note y={26}>{["Off only for exercises and washing", "Wear it until you are told to stop", "Fitted sitting down, with help", "Drain usually out after 1 to 2 days", "Usually by 6 weeks: dress and wash"][at]}</Note>
      <rect x="44" y="150" width="92" height="9" rx="3" fill={SOFT} />
      <path d="M52 159 V186 M128 159 V186" stroke={SOFT} strokeWidth="4" />
      <circle cx="90" cy="62" r="13" fill={INK} />
      <path d="M66 82 Q90 74 114 82 L110 150 H70 Z" fill={INK} />
      <path d="M80 150 V184 M100 150 V184" stroke={INK} strokeWidth="8" strokeLinecap="round" />
      <path d={`M112 86 L118 124 L78 ${at === 3 ? 110 : 118}`} stroke={SOFT} strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M124 116 L74 108 L84 136 L124 134 Z" fill={TINT} stroke={GOLD} strokeWidth="2" strokeLinejoin="round" opacity=".92" />
      <path d="M76 110 L68 82 Q90 70 112 82" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />
      {at === 2 && <path d="M116 110 L104 110 L104 122" stroke={TEXT} strokeWidth="2.5" fill="none" />}
      {at === 0 && <g className={still ? undefined : "lib-why-pulse"}><path d="M236 62 L270 74 V102 Q270 126 236 140 Q202 126 202 102 V74 Z" fill={WHITE} stroke={GOLD} strokeWidth="3" strokeLinejoin="round" /><Tick x={236} y={100} s={12} /></g>}
      {at === 1 && <>
        <path d={`M${tick(0)} 104 H${tick(6)}`} stroke={LINE} strokeWidth="10" strokeLinecap="round" />
        <path d={`M${tick(0)} 104 H${tick(4)}`} stroke={GOLD} strokeWidth="10" strokeLinecap="round" />
        {[0, 3, 4, 6].map(week => <g key={week}><path d={`M${tick(week)} 112 V122`} stroke={INK} strokeWidth="2.5" /><W x={tick(week)} y={136} size={10}>{week}</W></g>)}
        <W x={tick(3)} y={156} size={10}>weeks</W>
      </>}
      {at === 2 && <><path d="M214 66 V140 H288" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d="M214 122 H232 V140" stroke={GOLD} strokeWidth="3" fill="none" /><path d={arc(214, 140, 44, -90, -45)} stroke={GOLD} strokeWidth="2.5" fill="none" strokeDasharray="4 4" /></>}
      {at === 3 && <><Up x={66} y={112} h={24} /><Box x={234} y={86} w={140} text="Hand above heart" size={10} /><Box x={234} y={122} w={140} text="Full fist, then stretch" size={10} /></>}
      {at === 4 && <><Cup x={234} y={102} steam /><W x={234} y={146} size={10}>6 weeks</W></>}
      <Say y={206}>{["Supports and protects while it heals", "Often up to 4 weeks; surgeons vary", "Elbow at a right angle or higher", "Clips or stitches out at 14 days", "Nothing heavier than a cup of tea"][at]}</Say>
    </svg>} />;
}

function Pendulum(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const swing = [0, 0, -14, 0, 8][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercises" title="Small moves, every day" label="Exercises after a shoulder replacement" credit="Illustration: Rehyn. Only do the exercises your physiotherapist has ticked."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person leaning on a table and letting the operated arm swing gently">
      <Note y={26}>{["No single programme for everyone", "Usually 3 sets a day", "Pendular swings, leaning on support", "Stuck? Call the physio department", "Outpatient physio to build strength"][at]}</Note>
      <rect x="196" y="116" width="104" height="8" rx="3" fill={INK} />
      <path d="M204 124 V184 M292 124 V184" stroke={INK} strokeWidth="4" />
      <path d="M140 140 L176 98" stroke={INK} strokeWidth="16" strokeLinecap="round" />
      <circle cx="190" cy="82" r="12" fill={INK} />
      <path d="M176 100 L204 116" stroke={INK} strokeWidth="7" strokeLinecap="round" />
      <path d="M140 140 L130 184 M140 140 L154 184" stroke={INK} strokeWidth="8" strokeLinecap="round" />
      <path d={`M172 104 L${172 + swing} 158`} stroke={SOFT} strokeWidth="8" strokeLinecap="round" />
      <circle cx={172 + swing} cy="160" r="6" fill={at === 2 ? GOLD : SOFT} />
      {at === 2 && <path d={arc(172, 104, 58, 68, 112)} stroke={GOLD} strokeWidth="3" fill="none" strokeDasharray="4 5" className={still ? undefined : "lib-why-pulse"} />}
      {at === 0 && <path d={arc(172, 104, 22, 200, 340)} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />}
      {at === 1 && <>
        <rect x="22" y="50" width="96" height="100" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[0, 1, 2].map(row => <g key={row}>
          <rect x="32" y={64 + row * 28} width="14" height="14" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />
          <path d={`M54 ${71 + row * 28} H106`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />
          {row !== 1 && <Tick x={39} y={71 + row * 28} s={7} />}
        </g>)}
      </>}
      {at === 2 && <><Clock x={64} y={88} r={24} hand={0} /><W x={64} y={130} size={10}>A fist,</W><W x={64} y={144} size={10}>10 times an hour</W></>}
      {at === 3 && <><Pill x={64} y={88} /><W x={64} y={120} size={10}>Before physio</W></>}
      {at === 4 && <><rect x="18" y="84" width="96" height="12" rx="6" fill={LINE} /><rect x="50" y="84" width="64" height="12" rx="6" fill={GOLD} /><W x={66} y={116} size={10}>12 to 18 months</W></>}
      <Say y={206}>{["Exercises stop the shoulder stiffening", "Only the exercises ticked for you", "A fist, 10 times every hour", "Pain relief before physiotherapy", "Improving for 12 to 18 months"][at]}</Say>
    </svg>} />;
}

function BackSleep(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pain and sleep" title="Comfortable days, easier nights" label="Pain and sleeping" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person asleep on their back, propped on pillows, with a bedside table">
      <rect x="240" y="24" width="64" height="50" rx="4" fill={TINT} stroke={INK} strokeWidth="2.5" />
      <Moon x={272} y={49} r={12} fill={at === 1 ? GOLD : INK} />
      <Note x={118} y={42}>{["Tell nurses early; do not wait", "Pain may rise slightly at 2 to 3 days", "Before physio, a shower or bed", "No pushing up on the arm for 4 weeks", "Or the hospital physio department"][at]}</Note>
      <rect x="62" y="96" width="10" height="80" rx="2" fill={INK} />
      <rect x="62" y="140" width="234" height="16" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M70 156 V176 M288 156 V176" stroke={INK} strokeWidth="4" />
      <ellipse cx="96" cy="132" rx="22" ry="8" fill={at === 3 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
      <ellipse cx="98" cy="122" rx="20" ry="7" fill={at === 3 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
      <circle cx="104" cy="106" r="11" fill={SOFT} />
      <path d="M116 112 C150 104, 260 116, 290 136 L116 138 Z" fill={INK} opacity=".85" />
      <rect x="8" y="140" width="44" height="36" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {at === 4
        ? <g className={still ? undefined : "lib-why-pulse"}><rect x="20" y="106" width="20" height="32" rx="4" fill={WHITE} stroke={GOLD} strokeWidth="3" /><circle cx="30" cy="132" r="2" fill={INK} /></g>
        : <g opacity={at === 0 || at === 2 ? 1 : 0.4}><Pill x={30} y={130} fill={at === 0 || at === 2 ? GOLD : INK} /></g>}
      <Say y={204}>{["Controlled pain lets you exercise", "Numbness may wear off at night", "Prevent pain rather than chase it", "On your back for two weeks", "Not settling? Contact your care team"][at]}</Say>
    </svg>} />;
}

function Signs999(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const tiers = ["GP surgery", "Urgent GP or 111", "999 or A&E"];
  const lit = [-1, 0, 1, 2, 1][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Warning signs" title="Know the signs: 111 or 999" label="Warning signs after surgery" credit="Illustration: Rehyn. If in doubt, get help straight away."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Signs after surgery matched to where to get help: the GP, urgent GP or 111, or 999">
      <Note y={26}>{["Your surgeon discusses risks first", "Contact them as soon as possible", "Swelling, throbbing pain, darker skin", "Sepsis signs too. Do not drive to A&E", "Badly swollen, hot or cold, no feeling"][at]}</Note>
      {tiers.map((tier, index) => <g key={tier} opacity={lit === index ? 1 : 0.45} className={lit === index && index === 2 && !still ? "lib-why-pulse" : undefined}>
        <Box x={250} y={66 + index * 42} w={112} h={30} text={tier} lit={lit === index} />
      </g>)}
      {at === 0 && <><circle cx="96" cy="108" r="40" fill={WHITE} stroke={INK} strokeWidth="3" /><Tick x={96} y={108} s={18} /></>}
      {at === 1 && <g transform="rotate(-20 96 108)"><rect x="52" y="92" width="88" height="32" rx="12" fill={TINT} stroke={INK} strokeWidth="2.5" /><rect x="80" y="92" width="32" height="32" fill={WHITE} stroke={INK} strokeWidth="2" />{[[88, 102], [104, 102], [96, 114]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.2" fill={SOFT} />)}</g>}
      {at === 2 && <><rect x="24" y="96" width="64" height="24" rx="12" fill={SOFT} /><rect x="84" y="90" width="64" height="36" rx="16" fill={INK} stroke={GOLD} strokeWidth="2.5" /><circle cx="158" cy="108" r="11" fill={SOFT} /></>}
      {at === 3 && <><path d="M90 66 V86 M90 86 Q70 82 60 104 Q52 128 62 140 Q76 146 86 128 Z M90 86 Q110 82 120 104 Q128 128 118 140 Q104 146 94 128 Z" fill={INK} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><Box x={90} y={170} w={150} text="Do not drive to A&E" size={10} lit /></>}
      {at === 4 && <><Person x={96} y={150} scale={1.6} fill={SOFT} /><circle cx="118" cy="134" r="14" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="4 4" /></>}
      <Say y={206}>{["Most problems are minor and treatable", "Signs of infection? Contact your GP", "Possible clot? Urgent GP or NHS 111", "Breathless or chest pain? Call 999", "Urgent GP or 111 if it changes shape"][at]}</Say>
    </svg>} />;
}

function ArmFirst(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tags = ["Dressing", "Washing", "Reaching", "Housework", "Help"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Daily life" title="Operated arm in first" label="Dressing, washing and reaching" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Everyday tasks after a shoulder replacement, from dressing to help at home">
      {tags.map((tag, index) => <g key={tag} opacity={at === index ? 1 : 0.45}><Tag x={12} y={20 + index * 32} w={96} text={tag} lit={at === index} /></g>)}
      {at === 0 && <>
        <path d="M188 66 L170 80 L180 100 L192 92 V156 H244 V92 L256 100 L266 80 L248 66 Q218 78 188 66 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <path d="M134 128 Q140 96 166 88" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" /><path d="M158 84 L168 88 L160 96" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </>}
      {at === 1 && <>
        <circle cx="200" cy="78" r="12" fill={INK} />
        <path d="M188 92 L226 118 L214 158 L180 150 Z" fill={INK} />
        <path d="M218 112 L236 146" stroke={SOFT} strokeWidth="8" strokeLinecap="round" />
        {[[256, 92], [270, 110], [258, 128]].map(([cx, cy]) => <path key={`${cx}-${cy}`} d={`M${cx} ${cy - 8} Q${cx + 6} ${cy} ${cx} ${cy + 4} Q${cx - 6} ${cy} ${cx} ${cy - 8} Z`} fill={TINT} stroke={INK} strokeWidth="1.5" />)}
      </>}
      {at === 2 && <>
        <path d="M160 140 L188 80" stroke={INK} strokeWidth="5" strokeLinecap="round" /><ellipse cx="192" cy="72" rx="14" ry="9" fill={TINT} stroke={INK} strokeWidth="2" transform="rotate(-25 192 72)" />
        <circle cx="210" cy="104" r="12" fill={WHITE} stroke={GOLD} strokeWidth="3" /><W x={210} y={109} size={13}>?</W>
        <path d="M244 120 V160 M244 146 H290 M250 146 V160 M284 146 V160" stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none" />
        <Cross x={267} y={140} s={16} />
      </>}
      {at === 3 && <><Cup x={180} y={104} /><Tick x={180} y={142} s={10} /><Crate x={262} y={104} /><Cross x={262} y={104} s={20} /></>}
      {at === 4 && <>
        <path d="M168 96 L214 58 L260 96 V160 H168 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <Person x={196} y={150} scale={0.8} /><Person x={234} y={150} scale={0.8} fill={SOFT} />
      </>}
      <Note x={214} y={186}>{["Loose, front-fastening tops", "Keep the sling dry", "Avoid low chairs and toilets", "Light dusting as you feel able", "Needs assessment is free"][at]}</Note>
      <Say y={208}>{["Operated arm in first, out last", "Wash under the arm without lifting it", "Check before rotating or reaching out", "No heavy lifting for the first 6 weeks", "An OT can suggest small changes"][at]}</Say>
    </svg>} />;
}

function RoadDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const week = (n: number) => 30 + n * 260 / 12;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Driving and work" title="Back on the road, back at work" label="Driving and going back to work" credit="Illustration: Rehyn. Your consultant will guide you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A line of weeks with driving and work marked, beside a car and a desk">
      <Note y={26}>{["Full control and an emergency stop", "Unable to drive at 3 months? Tell DVLA", "No heavy manual work at any time", "You cannot drive for a while", "Equipment, travel or workplace changes"][at]}</Note>
      {at === 0 && <Car x={96} y={58} />}
      {at === 1 && <><Box x={104} y={84} w={120} text="Your insurer" lit /><Box x={240} y={84} w={100} text="DVLA" /></>}
      {at === 2 && <>
        <rect x="190" y="50" width="62" height="40" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M221 90 V100" stroke={INK} strokeWidth="3" />
        <rect x="170" y="100" width="110" height="7" rx="3" fill={INK} />
        <Crate x={86} y={84} /><Cross x={86} y={84} s={20} />
      </>}
      {at === 3 && <>
        <rect x="100" y="66" width="40" height="40" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M108 66 Q120 50 132 66" fill="none" stroke={INK} strokeWidth="2.5" />
        <rect x="196" y="54" width="28" height="52" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="210" cy="98" r="2.5" fill={INK} />
      </>}
      {at === 4 && <><Box x={160} y={84} w={140} text="Access to Work" lit /></>}
      <path d={`M${week(0)} 140 H${week(12)}`} stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      <rect x={week(4)} y="134" width={week(6) - week(4)} height="12" rx="6" fill={at === 0 ? GOLD : SOFT} />
      <circle cx={week(12)} cy="140" r="8" fill={at === 1 || at === 2 ? GOLD : INK} />
      <W x={week(0)} y={164} size={10}>0</W><W x={week(5)} y={164} size={10}>4 to 6 weeks</W><W x={week(12)} y={164} size={10} anchor="end">3 months</W>
      <Say y={204}>{["No driving in the immobiliser", "Check with your insurance company", "Work may take up to 3 months", "Plan shopping: family or online", "Access to Work: a grant, not repaid"][at]}</Say>
    </svg>} />;
}

function ActiveWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Activity" title="Active, without the heavy lifting" label="Activity and sport with a new shoulder" credit="Illustration: Rehyn. 150 minutes a week is the NHS guide for adults."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Walking and cycling in, heavy lifting out, and a week of activity building up">
      <Note y={26}>{["Your physio guides your return", "Especially after a reverse replacement", "Everyday activities usually fine", "Not exercised for a while? See a GP", "Start slowly and build up"][at]}</Note>
      {at === 0 && <>
        <Person x={90} y={164} scale={1.3} />
        <path d="M82 164 L72 184 M98 164 L108 184" stroke={INK} strokeWidth="7" strokeLinecap="round" />
        <circle cx="206" cy="152" r="22" fill="none" stroke={INK} strokeWidth="3" /><circle cx="270" cy="152" r="22" fill="none" stroke={INK} strokeWidth="3" />
        <path d="M206 152 L230 116 H262 L270 152 M230 116 L244 152 L262 116 M226 108 H240" stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" />
      </>}
      {at === 1 && <>
        <Crate x={92} y={110} s={1.4} /><Cross x={92} y={110} s={26} />
        <path d="M186 110 q10 -14 20 0 t20 0 t20 0 t20 0" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" /><Cross x={226} y={110} s={22} />
      </>}
      {at === 2 && <>
        <Person x={160} y={176} scale={1.5} />
        <path d="M176 152 L210 116" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        <path d={arc(176, 152, 72, -88, -50)} stroke={LINE} strokeWidth="3" fill="none" strokeDasharray="5 6" />
        <Cross x={180} y={74} s={11} />
      </>}
      {at === 3 && <>
        <W x={50} y={72} size={10} anchor="start">Moderate: 150 minutes a week</W>
        <rect x="50" y="80" width="220" height="16" rx="8" fill={INK} />
        <W x={50} y={124} size={10} anchor="start">Or vigorous: 75 minutes</W>
        <rect x="50" y="132" width="110" height="16" rx="8" fill={GOLD} />
      </>}
      {at === 4 && <>
        <path d="M24 176 H296" stroke={LINE} strokeWidth="3" />
        {[30, 44, 58, 36, 48, 62, 78].map((height, index) => <rect key={index} x={30 + index * 38} y={176 - height} width="26" height={height} rx="5" fill={index === 3 ? GOLD : INK} opacity={index === 3 ? 1 : 0.7} />)}
      </>}
      <Say y={206}>{["Exercise helps mobility, balance, mood", "Avoid heavy lifting and jerky moves", "Reaching overhead may not be possible", "150 moderate minutes a week", "Sore for hours? Scale back, not stop"][at]}</Say>
    </svg>} />;
}

function TenYears(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const year = (n: number) => 40 + n * 24;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The long term" title="Built to last ten years" label="How long a new shoulder lasts" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A new shoulder on a line of ten years, with follow-up and care along the way">
      <Note y={26}>{["Reverse: lifespan still being studied", "Usually less effective than the first", "Heavy activity can loosen the parts", "New or worse pain? GP refers you", "Ask when to restart usual medicines"][at]}</Note>
      <Implant x={160} y={68} kind="total" s={0.8} />
      {at === 1 && <><Box x={250} y={74} w={104} text="Revision" size={10} lit /><Implant x={250} y={110} kind="total" s={0.45} /></>}
      {at === 2 && <><Crate x={66} y={80} /><Cross x={66} y={80} s={18} /><path d="M228 80 l10 -12 l10 12 l10 -12 l10 12 l10 -12" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" /><Cross x={253} y={74} s={16} /></>}
      <path d={`M${year(0)} 140 H${year(10)}`} stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {at === 0 && <rect x={year(0)} y="134" width={year(10) - year(0)} height="12" rx="6" fill={INK} />}
      {Array.from({ length: 11 }, (_, n) => <path key={n} d={`M${year(n)} 148 V154`} stroke={LINE} strokeWidth="2" />)}
      {at === 3 && <><path d={`M${year(0) + 2} 140 V102`} stroke={INK} strokeWidth="3" /><path d={`M${year(0) + 2} 102 L${year(0) + 20} 108 L${year(0) + 2} 114 Z`} fill={GOLD} /><W x={year(0) + 26} y={112} size={10} anchor="start">2 weeks</W></>}
      {at === 4 && <><rect x={year(1)} y="130" width={year(1.5) - year(1)} height="20" rx="4" fill={GOLD} /><W x={year(1.25)} y={118} size={10}>12 to 18 months</W></>}
      {at === 1 && <circle cx={year(10)} cy="140" r="8" fill={GOLD} />}
      <W x={year(0)} y={170} size={10}>0</W><W x={year(5)} y={170} size={10}>5</W><W x={year(10)} y={170} size={10}>10 years</W>
      <Say y={204}>{["Very good chance it lasts 10 years", "A second operation may be possible", "Avoid heavy loads and tugging", "Check-up after about 2 weeks", "Can keep improving for 12 to 18 months"][at]}</Say>
    </svg>} />;
}

export function ShoulderPieceView({ piece, ...props }: { piece: ShoulderPiece } & PieceProps) {
  switch (piece) {
    case "rc-four-tendons": return <FourTendons {...props} />;
    case "rc-name-tags": return <NameTags {...props} />;
    case "rc-painful-arc": return <PainfulArc {...props} />;
    case "rc-scan-choice": return <ScanChoice {...props} />;
    case "rc-peas-bottle": return <PeasBottle {...props} />;
    case "rc-wall-slide": return <WallSlide {...props} />;
    case "rc-one-injection": return <OneInjection {...props} />;
    case "rc-tendon-anchor": return <TendonAnchor {...props} />;
    case "rc-elbow-in": return <ElbowIn {...props} />;
    case "rc-desk-sling": return <DeskSling {...props} />;
    case "rc-back-to-play": return <BackToPlay {...props} />;
    case "rc-patient-path": return <PatientPath {...props} />;
    case "shr-four-types": return <FourTypes {...props} />;
    case "shr-weigh-scale": return <WeighScale {...props} />;
    case "shr-home-ready": return <HomeReady {...props} />;
    case "shr-day-strip": return <DayStrip {...props} />;
    case "shr-sling-weeks": return <SlingWeeks {...props} />;
    case "shr-pendulum": return <Pendulum {...props} />;
    case "shr-back-sleep": return <BackSleep {...props} />;
    case "shr-signs-999": return <Signs999 {...props} />;
    case "shr-arm-first": return <ArmFirst {...props} />;
    case "shr-road-desk": return <RoadDesk {...props} />;
    case "shr-active-week": return <ActiveWeek {...props} />;
    case "shr-ten-years": return <TenYears {...props} />;
  }
}
