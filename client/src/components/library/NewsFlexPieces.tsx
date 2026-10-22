import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { FLEX_PIECES, type FlexPiece } from "@/content/flex-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Knee } from "./NewsBonesPieces";

// The Joint hypermobility and Bursitis pages' own pieces (content/flex-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isFlexPiece = (piece: NewsPiece): piece is FlexPiece => (FLEX_PIECES as readonly string[]).includes(piece);

/** The caption under a picture. */
const Say = ({ y = 204, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
/** A smaller line of words, usually across the top. */
const Note = ({ x = 160, y = 26, children }: { x?: number; y?: number; children: ReactNode }) => <W x={x} y={y} size={10.5}>{children}</W>;
/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A gold cross over something to avoid. */
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
/** A gold tick. */
const Tick = ({ x, y, s = 10 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y} L${x - s / 3} ${y + s * 0.7} L${x + s} ${y - s * 0.7}`} stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
/** A gold warning triangle. */
const Warn = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x} ${y - 20} L${x + 22} ${y + 18} H${x - 22} Z`} fill={WHITE} stroke={GOLD} strokeWidth="3.5" strokeLinejoin="round" /><W x={x} y={y + 13} size={17}>!</W></g>;
/** A simple figure seen from the front, centred on x: head at y 48, feet at y 180. Joint points are listed in `JOINTS`. */
const Body = ({ x, fill = SOFT }: { x: number; fill?: string }) =>
  <g>
    <g stroke={fill} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d={`M${x - 12} 72 L${x - 38} 100 L${x - 50} 130`} /><path d={`M${x + 12} 72 L${x + 38} 100 L${x + 50} 130`} />
      <path d={`M${x - 8} 122 L${x - 14} 152 L${x - 16} 178`} /><path d={`M${x + 8} 122 L${x + 14} 152 L${x + 16} 178`} />
    </g>
    <rect x={x - 15} y="62" width="30" height="64" rx="12" fill={fill} />
    <circle cx={x} cy="46" r="13" fill={fill} />
  </g>;
const Syringe = ({ x, y, rotate = 0 }: { x: number; y: number; rotate?: number }) =>
  <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
    <rect x="-14" y="-6" width="26" height="12" rx="2" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path d="M-14 0 H-21 M-21 -6 V6 M12 0 H24" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M-6 -6 V6 M2 -6 V6" stroke={SOFT} strokeWidth="1.5" />
  </g>;
const Tube = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}>
    <path d="M-6 0 V10 a6 6 0 0 0 12 0 V0 Z" fill={GOLD} />
    <path d="M-6 -18 V10 a6 6 0 0 0 12 0 V-18 M-9 -18 H9" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
  </g>;
/** A clockwise arc around (cx, cy) from angle a0 to a1, in degrees. */
const arc = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const p = (a: number) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)].map(n => n.toFixed(1)).join(" ");
  return `M${p(a0)} A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${p(a1)}`;
};

// ==== Joint hypermobility ===================================================================================

function BendFurther(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const bend = at === 4 ? 0.16 : 0.4;
  const wx = 230 + 56 * Math.sin(bend), wy = 100 + 56 * Math.cos(bend);
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Bendier than most, and often fine" label="What joint hypermobility is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two arms side by side, one straight and one whose elbow bends further than most">
      <Note>{["Some call it being double-jointed", "Common in dancers and gymnasts", "Called symptomatic hypermobility", "Often runs in families", "More common in women and children"][at]}</Note>
      <circle cx="90" cy="46" r="10" fill={SOFT} />
      <path d="M90 46 V100 V156" stroke={INK} strokeWidth="16" strokeLinecap="round" fill="none" />
      <circle cx="90" cy="162" r="8" fill={INK} />
      <path d="M104 82 V118" stroke={SOFT} strokeWidth="3" strokeLinecap="round" />
      <W x={90} y={186} size={10.5}>Most people</W>
      <path d="M230 100 V160" stroke={LINE} strokeWidth="3" strokeDasharray="5 5" />
      <circle cx="230" cy="46" r="10" fill={SOFT} />
      <path d={`M230 46 V100 L${wx.toFixed(1)} ${wy.toFixed(1)}`} stroke={INK} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx={wx + 4 * Math.sin(bend)} cy={wy + 6} r="8" fill={INK} />
      <path d={arc(230, 100, 34, 90 - bend * 57.3, 90)} stroke={GOLD} strokeWidth="3" fill="none" />
      <path d="M216 80 q-5 4.5 0 9 q5 4.5 0 9 q-5 4.5 0 9 q5 4.5 0 9 q-5 4.5 0 9" stroke={at === 3 ? GOLD : SOFT} strokeWidth={at === 3 ? 4 : 3} fill="none" strokeLinecap="round" />
      <W x={236} y={186} size={10.5}>Hypermobile</W>
      {at === 0 && <><W x={160} y={96} size={10}>Hyper: more</W><W x={160} y={114} size={10}>Mobility:</W><W x={160} y={128} size={10}>movement</W></>}
      {at === 1 && <><Tick x={160} y={96} s={18} /><W x={160} y={136} size={10.5}>No problems</W></>}
      {at === 2 && <>
        {["Pain", "Fatigue", "Injuries"].map((tag, index) => <Box key={tag} x={160} y={66 + index * 34} w={80} text={tag} lit />)}
        <g fill={GOLD} className={still ? undefined : "lib-why-pulse"}><circle cx="244" cy="100" r="5" /><circle cx="226" cy="66" r="4" /></g>
      </>}
      {at === 3 && <><W x={160} y={92} size={12}>Collagen</W><W x={160} y={108} size={10}>is different</W><W x={160} y={140} size={10}>Shallow sockets</W></>}
      {at === 4 && <><W x={160} y={72} size={11}>Child</W><path d="M160 82 V114 M152 106 L160 116 L168 106" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /><W x={160} y={136} size={11}>Adult</W></>}
      <Say>{["Joints that move more than most", "Many have no problems at all", "For some: pain, fatigue and injuries", "Ligaments are looser than usual", "Often gets better as you get older"][at]}</Say>
    </svg>} />;
}

function TippingScale(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tilt = [0.06, 0.06, 0.06, 0.2, 0][at];
  const dx = 90 * Math.cos(tilt), dy = 90 * Math.sin(tilt);
  const left = [160 - dx, 112 - dy], right = [160 + dx, 112 + dy];
  const tags = [["Pain", "Stiffness", "Sprains"], ["Reflux", "Bruising", "Soft skin"], ["Stand up", "Faster heart", "Dizzy"], ["Injury", "Stress", "Pregnancy"], ["New pain?", "Worried?", "See a GP"]][at];
  const pan = ([x, y]: number[], label: string) => <g>
    <path d={`M${x} ${y} L${x - 28} ${y + 20} M${x} ${y} L${x + 28} ${y + 20}`} stroke={SOFT} strokeWidth="2" />
    <path d={`M${x - 32} ${y + 20} Q${x} ${y + 42} ${x + 32} ${y + 20} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <W x={x} y={y + 54} size={10.5}>{label}</W>
  </g>;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="When it causes problems" title="From coping to not coping" label="When it causes problems" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balance tipping from coping towards not coping, with symptoms above it">
      {tags.map((tag, index) => <Box key={tag} x={64 + index * 96} y={42} w={88} text={tag} lit={at === 4 && index === 2} />)}
      {at === 3 && tags.map((tag, index) => <path key={tag} d={`M${64 + index * 96} 56 L${right[0] - 16 + index * 16} ${right[1] + 10}`} stroke={GOLD} strokeWidth="2" strokeDasharray="4 4" />)}
      <path d="M160 112 V176 M130 176 H190" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <path d={`M${left[0]} ${left[1]} L${right[0]} ${right[1]}`} stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <circle cx="160" cy="112" r="6" fill={GOLD} />
      {pan(left, "Coping")}
      {pan(right, "Not coping")}
      {at === 3 && [0, 1, 2].map(index => <rect key={index} x={right[0] - 22 + index * 16} y={right[1] + 8} width="12" height="12" rx="2" fill={GOLD} />)}
      <Say>{["Pain and stiffness, often by evening", "Symptoms can affect many body parts", "Dizzy on standing? See a GP", "A change can tip coping to not coping", "New pain or symptom? Get it checked"][at]}</Say>
    </svg>} />;
}

function TwoCircles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="HSD and hEDS" title="Two names, one way to manage" label="Hypermobility spectrum disorder and hEDS" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two overlapping circles for HSD and hEDS, sharing one way of managing them">
      <Note>{["Hypermobility is the main feature", "hEDS is the most common type", "Diagnosed by history and examination", "2017 criteria still being validated", "Passed on by 1 parent"][at]}</Note>
      {(at === 0 || at === 2 || at === 3) && <>
        <circle cx="122" cy="96" r="56" fill={TINT} stroke={INK} strokeWidth="3" opacity={at === 2 ? 0.4 : 1} />
        <circle cx="198" cy="96" r="56" fill={at === 2 ? TINT : "none"} stroke={INK} strokeWidth="3" />
        <W x={96} y={100} size={13}>HSD</W><W x={226} y={100} size={13}>hEDS</W>
        {at === 0 && <><W x={160} y={92} size={10}>Same</W><W x={160} y={106} size={10}>care</W></>}
        {at === 2 && ["Loose joints", "Tiredness", "Bruising"].map((tag, index) => <Box key={tag} x={58 + index * 102} y={176} w={94} h={24} text={tag} size={10} />)}
        {at === 3 && ["JHS", "EDS type 3", "Symptomatic"].map((tag, index) => <Box key={tag} x={58 + index * 102} y={176} w={94} h={24} text={tag} size={10} />)}
      </>}
      {at === 1 && <>
        {Array.from({ length: 12 }, (_, index) => { const a = index * Math.PI / 6; return <circle key={index} cx={160 + 62 * Math.cos(a)} cy={108 + 58 * Math.sin(a)} r="7" fill={WHITE} stroke={INK} strokeWidth="2" />; })}
        <circle cx="160" cy="108" r="28" fill={GOLD} /><W x={160} y={113} size={12}>hEDS</W>
      </>}
      {at === 4 && <>
        <path d="M160 100 L112 132 M160 100 L208 132" stroke={LINE} strokeWidth="3" />
        <Person x={160} y={92} scale={1.1} />
        <Person x={112} y={168} scale={0.8} />
        <Person x={208} y={168} scale={0.8} fill={SOFT} />
        <W x={160} y={160} size={12}>1 in 2</W>
      </>}
      <Say>{["Treated in the same way", "13 types of EDS, most of them rare", "No test yet to confirm hEDS", "Same symptoms, same management", "1 in 2 chance for each child"][at]}</Say>
    </svg>} />;
}

function NinePoints(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const x = 160;
  const dots = [[x - 44, 134], [x - 57, 133], [x + 44, 134], [x + 57, 133], [x - 38, 100], [x + 38, 100], [x - 14, 152], [x + 14, 152], [x, 96]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Assessment" title="Nine points, and the bigger picture" label="How it is assessed" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A figure with nine marked points for the Beighton score, with the shoulders and hips left out">
      <Note>{["Tests may rule out arthritis", "NHS inform: 4 or more, likely", "Shoulders and hips are not included", "A rheumatologist or genetics service", "Diagnosis can take 10 to 15 years"][at]}</Note>
      <Body x={x} />
      <g opacity={at === 2 ? 0.45 : 1}>{dots.map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill={at === 1 ? GOLD : INK} stroke={WHITE} strokeWidth="1.5" />)}</g>
      {at === 0 && ["Beighton", "Blood test", "X-ray"].map((tag, index) => <Box key={tag} x={266} y={86 + index * 34} w={88} text={tag} lit={index === 0} />)}
      {at === 1 && <><W x={52} y={106} size={13}>5 tests</W><W x={266} y={106} size={30} serif>9</W><W x={266} y={126} size={11}>points</W></>}
      {at === 2 && <g stroke={GOLD} strokeWidth="3" fill="none" strokeDasharray="5 4" className={still ? undefined : "lib-why-pulse"}>
        <circle cx={x - 15} cy="70" r="12" /><circle cx={x + 15} cy="70" r="12" /><ellipse cx={x} cy="124" rx="24" ry="12" />
      </g>}
      {at === 2 && <W x={250} y={92} size={26}>?</W>}
      {at === 3 && <><Box x={54} y={86} w={92} text="Rheumatologist" size={10} /><Box x={266} y={86} w={88} text="Genetics" /></>}
      {at === 4 && ["Physio", "Podiatry", "Pain management"].map((tag, index) => <Box key={tag} x={268} y={76 + index * 34} w={92} text={tag} size={index === 2 ? 9.5 : 10.5} />)}
      <Say>{["A GP checks how far joints bend", "5 tests adding up to 9 points", "The score cannot confirm a diagnosis", "No genetic test for hEDS or HSD", "Physio, podiatry or pain management"][at]}</Say>
    </svg>} />;
}

function MuscleStraps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const width = [7, 9, 9, 11, 11][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Strengthening" title="Muscles that do the holding" label="Strengthening and joint control" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A knee held steady by strong muscles on each side">
      <Note>{["", "", "GP referral, or refer yourself", "Water takes the weight off joints", "Regularly, between appointments"][at]}</Note>
      <Knee x={100} y={110} scale={0.8} />
      <g stroke={INK} strokeWidth={width} strokeLinecap="round" fill="none" opacity="0.6">
        <path d="M66 44 C54 90, 54 130, 68 176" /><path d="M134 44 C146 90, 146 130, 132 176" />
      </g>
      {at === 0 && ["Less pain", "Fewer dislocations", "Better balance"].map((tag, index) => <Box key={tag} x={240} y={70 + index * 36} w={128} text={tag} />)}
      {at === 1 && ["Balance", "Strength", "Steadier joints"].map((tag, index) => <Box key={tag} x={240} y={70 + index * 36} w={128} text={tag} lit />)}
      {at === 2 && <><Person x={240} y={118} scale={1.3} /><Box x={240} y={160} w={124} text="Physiotherapist" /></>}
      {at === 3 && <>
        <W x={240} y={74} size={11}>Hydrotherapy</W>
        <rect x="182" y="86" width="116" height="62" rx="8" fill={TINT} stroke={INK} strokeWidth="2.5" />
        {[104, 120, 136].map(y => <path key={y} d={`M190 ${y} q8 -6 16 0 t16 0 t16 0 t16 0 t16 0 t16 0`} fill="none" stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" />)}
      </>}
      {at === 4 && <>
        {Array.from({ length: 7 }, (_, day) => <circle key={day} cx={186 + day * 18} cy="100" r="6.5" fill={INK} />)}
        <W x={240} y={132} size={11}>Exercises at home</W>
      </>}
      <Say>{["Main treatment: strength and fitness", "Exercise can be key to managing it", "Ideally a physio who knows hEDS or HSD", "Static, balance and tummy exercises", "New to exercise? Speak to a GP first"][at]}</Say>
    </svg>} />;
}

function PainToolkit(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const labels = ["Varies", "Medicine", "Heat", "Moving", "Clinic"];
  const icon = (index: number, cx: number) => {
    const cy = 86;
    switch (index) {
      case 0: return <path d={`M${cx - 20} ${cy + 8} L${cx - 12} ${cy - 10} L${cx - 4} ${cy + 6} L${cx + 4} ${cy - 14} L${cx + 12} ${cy + 4} L${cx + 20} ${cy - 4}`} fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />;
      case 1: return <Pill x={cx} y={cy} rotate={-30} />;
      case 2: return <g><rect x={cx - 15} y={cy - 12} width="30" height="30" rx="9" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={cx - 5} y={cy - 20} width="10" height="9" rx="2" fill={INK} /><path d={`M${cx - 8} ${cy} q4 -4 8 0 t8 0 M${cx - 8} ${cy + 8} q4 -4 8 0 t8 0`} stroke={GOLD} strokeWidth="2.5" fill="none" /></g>;
      case 3: return <g stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none"><circle cx={cx} cy={cy - 16} r="5" fill={INK} stroke="none" /><path d={`M${cx} ${cy - 10} V${cy + 8} M${cx - 14} ${cy - 18} L${cx} ${cy - 6} L${cx + 14} ${cy - 18} M${cx} ${cy + 8} L${cx - 10} ${cy + 22} M${cx} ${cy + 8} L${cx + 10} ${cy + 22}`} /></g>;
      default: return <g><rect x={cx - 13} y={cy - 22} width="26" height="42" rx="2" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={cx + 6} cy={cy} r="2.5" fill={INK} /></g>;
    }
  };
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Managing pain" title="Many tools for changing pain" label="Managing pain" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A row of tools for managing pain, one picked out at a time">
      <Note>{["Not linked to the type of syndrome", "See a GP if pain gets worse", "Daily muscle relaxation helps", "Distraction helps too", "CBT can help some people"][at]}</Note>
      {labels.map((label, index) => { const cx = 39 + index * 61; return <g key={label} opacity={index === at ? 1 : 0.45}>
        <rect x={cx - 28} y="46" width="56" height="102" rx="10" fill={index === at ? TINT : WHITE} stroke={index === at ? GOLD : INK} strokeWidth={index === at ? 3.5 : 2} />
        {icon(index, cx)}
        <W x={cx} y={134} size={10}>{label}</W>
      </g>; })}
      <path d={`M${15 + at * 61} 160 H${63 + at * 61}`} stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
      <Say>{["Pain varies, so try different things", "Ask a pharmacist which suits you", "Warmth for tight muscles; slow breaths", "On bad days, gentle stretching helps", "A pain clinic can build your skills"][at]}</Say>
    </svg>} />;
}

function EnergyBattery(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const level = [0.2, 0.5, 0.55, 0.7, 0.4][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fatigue" title="Spending energy wisely" label="Fatigue and pacing" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An energy battery beside ways of pacing activity and rest">
      <Note>{["Rest or sleep may not fix fatigue", "Avoid boom and bust", "Break big jobs into smaller tasks", "Regular bed and wake times", "Tiredness has many causes"][at]}</Note>
      <rect x="44" y="44" width="20" height="9" rx="2" fill={INK} />
      <rect x="28" y="52" width="52" height="104" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="34" y={150 - 92 * level} width="40" height={92 * level} rx="4" fill={at === 0 ? GOLD : INK} opacity={at === 0 ? 1 : 0.7} />
      <W x={54} y={176} size={10.5}>Energy</W>
      {at === 0 && <>
        <path d="M90 104 H140" stroke={GOLD} strokeWidth="3" strokeDasharray="5 5" />
        <Person x={204} y={134} scale={1.5} />
        <g fill={GOLD} className={still ? undefined : "lib-why-pulse"}>{[[184, 104], [224, 104], [190, 150], [218, 150]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" />)}</g>
      </>}
      {at === 1 && <>
        {Array.from({ length: 7 }, (_, day) => <g key={day}>
          <rect x={112 + day * 27} y="62" width="22" height="34" rx="4" fill={INK} opacity="0.8" />
          <rect x={112 + day * 27} y="100" width="22" height="34" rx="4" fill={TINT} stroke={SOFT} strokeWidth="1.5" />
        </g>)}
        <rect x="118" y="154" width="12" height="12" rx="2" fill={INK} opacity="0.8" /><W x={136} y={164} size={10} anchor="start">Activity</W>
        <rect x="212" y="154" width="12" height="12" rx="2" fill={TINT} stroke={SOFT} strokeWidth="1.5" /><W x={230} y={164} size={10} anchor="start">Rest</W>
      </>}
      {at === 2 && ["Solve", "Plan", "Prioritise", "Pace"].map((tag, index) => <Box key={tag} x={156 + (index % 2) * 96} y={80 + Math.floor(index / 2) * 44} w={86} h={30} text={tag} lit={index === 3} />)}
      {at === 3 && <><Moon x={205} y={84} r={24} /><W x={205} y={144} size={15} serif>9 to 10 hours</W></>}
      {at === 4 && <><Clock x={205} y={74} r={22} hand={2} /><Box x={205} y={130} w={110} text="See a GP" lit /></>}
      <Say>{["Loose joints mean extra hidden work", "Balance activity with rest", "Four Ps at the start of each day", "You may need 9 to 10 hours of sleep", "Tired for weeks? See a GP"][at]}</Say>
    </svg>} />;
}

function SlipSignpost(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const off = [16, 38, 38, 0, 0][at];
  const boxes = [["Loose joints", "Shallow socket"], ["Go to A&E", "Do not drive", "Do not push it back"], ["NHS 111", "A&E", "999"], ["999 or A&E", "NHS 111"], ["Physiotherapy", "Strength", "Balance"]][at];
  const lit = [[], [0], [1], [0], [0]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Dislocations" title="When a joint slips out" label="Dislocations and subluxations" credit="Illustration: Rehyn. Never try to put a joint back yourself."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ball and socket joint slipping out of place, beside where to get help">
      <Note>{["Loose joints, shallow sockets", "Cannot get there? Call 999", "Even if it moves back, get it checked", "Sprain: PRICE for 2 to 3 days", "Shoulder recovery: 6 to 12 weeks"][at]}</Note>
      <path d="M46 112 H14" stroke={SOFT} strokeWidth="14" strokeLinecap="round" />
      <path d={`M${80 + off} 112 H${150 + off * 0.4}`} stroke={SOFT} strokeWidth="18" strokeLinecap="round" />
      <circle cx={80 + off} cy="112" r="26" fill={WHITE} stroke={off ? GOLD : INK} strokeWidth="3" className={off && !still ? "lib-why-pulse" : undefined} />
      <path d="M102 86 A34 34 0 1 0 102 138" fill="none" stroke={INK} strokeWidth="8" strokeLinecap="round" />
      {at === 3 && <Warn x={80} y={58} />}
      {at === 4 && <g stroke={INK} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.55"><path d="M36 70 Q84 50 140 82" /><path d="M36 154 Q84 174 140 142" /></g>}
      {boxes.map((text, index) => <Box key={text} x={246} y={boxes.length === 2 ? 92 + index * 40 : 74 + index * 38} w={116} text={text} lit={lit.includes(index)} />)}
      <Say>{["A joint can slip partly out of place", "Shoulder out of place? Go to A&E", "Kneecap: do not push it back yourself", "Odd angle or numb? 999 or A&E", "Stronger muscles lower the risk"][at]}</Say>
    </svg>} />;
}

function NeutralDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const on = (states: number[]) => states.includes(at) || at === 4 ? 1 : 0.35;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Everyday" title="Small changes, less strain" label="Posture, footwear and everyday tasks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person at a desk with a timer, a supportive shoe and an easy-grip pen">
      <Note x={130}>{["Physio can help improve posture", "Children may need to fidget", "A podiatrist can assess your feet", "Free via the NHS or social services", "Stay active, sleep well"][at]}</Note>
      <path d="M20 176 H300" stroke={LINE} strokeWidth="3" />
      <g opacity={on([0])}>
        <path d="M58 84 V176 M58 136 H112 M108 136 V176" stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none" />
        <Person x={88} y={124} scale={1.1} fill={at === 0 ? INK : SOFT} />
      </g>
      <g opacity={on([3])}>
        <rect x="122" y="116" width="110" height="7" rx="3" fill={INK} />
        <path d="M130 123 V176 M224 123 V176" stroke={INK} strokeWidth="4" />
        <g transform="rotate(-18 186 104)"><rect x="160" y="100" width="52" height="7" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="168" y="97" width="18" height="13" rx="4" fill={at === 3 ? GOLD : SOFT} /></g>
        {at === 3 && <path d="M244 120 V172 M238 128 L244 120 L250 128 M238 164 L244 172 L250 164" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      </g>
      <g opacity={on([1])}><Clock x={274} y={56} r={20} hand={3.1} />{at === 1 && <W x={274} y={96} size={10.5}>30 minutes</W>}</g>
      <g opacity={on([2])}>
        <path d="M250 172 H306 C306 160 296 156 284 154 L274 140 H254 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M256 166 Q276 158 300 166" stroke={at === 2 ? GOLD : SOFT} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <Say>{["Keep joints in their middle range", "Half an hour at most in one position", "Supportive shoes for flat feet", "An OT can make tasks easier", "Healthy weight eases joint strain"][at]}</Say>
    </svg>} />;
}

function TwoGroups(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const leftTags = at === 4 ? ["Chair dancing", "Gym ball", "Pilates", "The gym"] : ["Swimming", "Cycling", "Pilates", "Tai chi"];
  const rightTags = at === 4 ? ["With a friend", "In a group"] : ["Contact sports", "Running, jumping", "Sudden twists"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Choosing exercise" title="Low impact, high control" label="Choosing exercise" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Gentle kinds of exercise on one side and ones to take care with on the other">
      <Note>{["150 minutes a week, strength on 2 days", "Paddle your legs when swimming", "Do not overstretch in yoga", "Try not to be overprotective","A friend or group can help motivation"][at]}</Note>
      {at === 0 ? <>
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}>
          <circle cx={40 + index * 40} cy="96" r="16" fill={index === 1 || index === 4 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
          <W x={40 + index * 40} y={100} size={11}>{day}</W>
        </g>)}
        <W x={80} y={134} size={10}>Strength</W><W x={200} y={134} size={10}>Strength</W>
        <path d="M24 150 H296" stroke={INK} strokeWidth="6" strokeLinecap="round" opacity="0.6" />
      </> : at === 3 ? <>
        <Box x={160} y={62} w={190} text="Movement causes pain? Stop it" lit />
        <path d="M160 78 V90 M154 84 L160 92 L166 84" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <Box x={160} y={108} w={190} text="A physio advises on control" />
        <path d="M160 124 V136 M154 130 L160 138 L166 130" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <Box x={160} y={154} w={190} text="Return without more pain" />
      </> : <>
        <g opacity={at === 2 ? 0.35 : 1}>
          {at === 4 ? <W x={80} y={52} size={11}>Many ways</W> : <><Tick x={50} y={48} s={8} /><W x={66} y={52} size={11} anchor="start">Gentle start</W></>}
          {leftTags.map((tag, index) => <Box key={tag} x={80} y={74 + index * 30} w={120} h={24} text={tag} lit={at === 1 || at === 4} />)}
        </g>
        <g opacity={at === 1 ? 0.35 : 1}>
          {at === 4 ? <W x={240} y={52} size={11}>Stay motivated</W> : <><W x={198} y={53} size={14} fill={GOLD}>!</W><W x={210} y={52} size={11} anchor="start">Take care</W></>}
          {rightTags.map((tag, index) => <Box key={tag} x={240} y={74 + index * 30} w={120} h={24} text={tag} lit={at === 2 || at === 4} />)}
        </g>
      </>}
      <Say>{["Exercise helps fitness, sleep, balance", "Start low impact: swimming or cycling", "Take care with high impact and twists", "Movement hurts? Stop until it is clear", "Chair dancing and gym balls count too"][at]}</Say>
    </svg>} />;
}

function DeskAndClass(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const work = at <= 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and study" title="Making room at work and school" label="Work and study" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An office desk and a classroom chair side by side, each with changes that help">
      <Note>{["Special keyboard, flexible hours", "Equality Act 2010", "Aged 16 or over, in paid work", "Breaks, a laptop or extra exam time", "Unless a doctor or physio says not to"][at]}</Note>
      <path d="M160 40 V180" stroke={LINE} strokeWidth="2" strokeDasharray="5 6" />
      <g opacity={work ? 1 : 0.35}>
        <path d="M20 172 H144" stroke={LINE} strokeWidth="3" />
        <rect x="24" y="128" width="116" height="7" rx="3" fill={INK} />
        <path d="M32 135 V172 M132 135 V172" stroke={INK} strokeWidth="4" />
        <rect x="56" y="88" width="56" height="34" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M84 122 V128" stroke={INK} strokeWidth="3" />
        <rect x="52" y="122" width="64" height="5" rx="2" fill={at === 0 ? GOLD : SOFT} />
        {at === 1 && Array.from({ length: 12 }, (_, index) => <rect key={index} x={42 + (index % 6) * 14} y={44 + Math.floor(index / 6) * 14} width="10" height="10" rx="2" fill={GOLD} />)}
        {at === 2 && <g><rect x="40" y="38" width="88" height="40" rx="6" fill={WHITE} stroke={GOLD} strokeWidth="3" /><W x={84} y={63} size={11}>Grant</W></g>}
        <W x={80} y={188} size={10.5}>Work</W>
      </g>
      <g opacity={work ? 0.35 : 1}>
        <path d="M176 172 H304" stroke={LINE} strokeWidth="3" />
        <path d="M190 92 V172 M190 132 H226 M226 132 V172" stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none" />
        <ellipse cx="208" cy="126" rx="18" ry="5" fill={at === 3 ? GOLD : SOFT} />
        <rect x="236" y="118" width="64" height="6" rx="3" fill={INK} /><path d="M244 124 V172 M292 124 V172" stroke={INK} strokeWidth="4" />
        <rect x="250" y="94" width="36" height="22" rx="2" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="246" y="114" width="44" height="4" rx="2" fill={at === 3 ? GOLD : INK} />
        {at === 4 && <g><circle cx="282" cy="62" r="14" fill={WHITE} stroke={GOLD} strokeWidth="3" /><path d="M268 62 H296 M282 48 C276 56 276 68 282 76" stroke={GOLD} strokeWidth="2" fill="none" /></g>}
        <W x={240} y={188} size={10.5}>School</W>
      </g>
      <Say>{["Reasonable adjustments at work", "Long-term means 12 months or more", "A grant that is not paid back", "Most children go to school full time", "Some PE is better than none"][at]}</Say>
    </svg>} />;
}

function LinkedHands(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const content: { text: string; w: number; lit?: boolean }[][] = [
    [{ text: "Low", w: 84 }, { text: "Isolated", w: 84 }, { text: "Overwhelmed", w: 100 }],
    [{ text: "HMSA 0333 011 6388", w: 230 }, { text: "EDS UK 0800 907 8518", w: 230 }],
    [{ text: "Hobbies", w: 84, lit: true }, { text: "Friends", w: 84, lit: true }, { text: "Family", w: 100, lit: true }],
    [{ text: "Your GP or health team", w: 210 }, { text: "NHS talking therapies", w: 210, lit: true }],
    [{ text: "NHS 111: mental health option", w: 230 }, { text: "Urgent GP appointment", w: 230 }, { text: "Samaritans 116 123", w: 230, lit: true }],
  ];
  const row = content[at];
  const across = at === 0 || at === 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You are not on your own" label="Support and living well" credit="Illustration: Rehyn. Samaritans: 116 123, free, any time."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A row of people linked together above places to find support">
      <Note>{["These feelings are normal", "HMSA and Ehlers-Danlos Support UK", "Keep in touch with friends and family", "In England you can refer yourself", "999 or A&E if a life is at risk"][at]}</Note>
      <path d="M40 70 H280" stroke={at === 2 ? GOLD : LINE} strokeWidth="3" />
      {Array.from({ length: 7 }, (_, index) => <Person key={index} x={40 + index * 40} y={74} scale={0.62} fill={index === 3 || at === 2 ? INK : SOFT} />)}
      {row.map((item, index) => across
        ? <Box key={item.text} x={68 + index * 94} y={124} w={item.w} text={item.text} lit={item.lit} />
        : <Box key={item.text} x={160} y={row.length === 3 ? 106 + index * 30 : 116 + index * 36} w={item.w} h={row.length === 3 ? 24 : 26} text={item.text} lit={item.lit} />)}
      <Say>{["Feeling low or anxious is common", "Helplines from people who get it", "Keep up what you enjoy, at your pace", "Talking therapies can help", "Samaritans: 116 123, day or night"][at]}</Say>
    </svg>} />;
}

// ==== Bursitis ==============================================================================================

function Cushion(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const swollen = at === 0 || at === 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The small cushion that swells" label="What bursitis is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A small fluid-filled cushion between a bone and a tendon, flat and then swollen">
      <Note>{["Usually settles in a few weeks", "Helps bones and tendons slide", "Painful, swollen and hot", "Where something keeps rubbing", ""][at]}</Note>
      <path d="M24 150 H196 A26 26 0 0 0 196 98 H24 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <W x={150} y={130} size={10.5}>Bone</W>
      <path d="M14 70 C110 66, 200 60, 306 56" stroke={SOFT} strokeWidth="10" strokeLinecap="round" fill="none" />
      <W x={44} y={56} size={10.5}>Tendon</W>
      <ellipse cx="204" cy="82" rx={swollen ? 30 : 24} ry={swollen ? 14 : 8} fill={swollen ? GOLD : TINT} fillOpacity={swollen ? 0.75 : 1} stroke={INK} strokeWidth="2.5" className={swollen && !still ? "lib-why-pulse" : undefined} />
      {at === 2 && <path d="M246 92 q4 -6 0 -12 t0 -12 M258 94 q4 -6 0 -12 t0 -12" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" />}
      {at === 1 && <W x={262} y={98} size={10.5}>Bursa</W>}
      {at === 3 && <><ellipse cx="80" cy="85" rx="20" ry="7" fill={TINT} stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 3" /><W x={80} y={126} size={10.5}>New</W></>}
      {at === 4 && <><Box x={96} y={174} w={120} h={24} text="Non-septic" lit /><Box x={226} y={174} w={120} h={24} text="Septic" /></>}
      <Say>{["A cushion that becomes inflamed", "A thin pocket of jelly-like fluid", "More fluid makes it expand", "Your body can make new cushions", "At the elbow, 2 in 3 are not infected"][at]}</Say>
    </svg>} />;
}

function FourSpots(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const x = 100;
  const spots = [[x + 38, 100], [x + 8, 124], [x + 14, 70], [x + 38, 100], [x + 14, 152]];
  const order = [[x + 14, 70], [x + 8, 124], [x + 38, 100], [x + 14, 152], [x + 16, 180]];
  const label = ["And the feet", "Often both hips", "Overuse or a fall", "Student's elbow", "Warm and red"][at];
  const [bx, by] = at === 0 ? [x + 16, 178] : spots[at];
  const boxY = at === 0 ? 166 : by;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Where it happens" title="Hip, shoulder, elbow and knee" label="Hip, shoulder, elbow and knee" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A figure with the shoulder, hip, elbow and knee marked">
      <Note>{["Any joint can be affected", "Pain may spread down the leg", "Subacromial bursitis", "Olecranon bursitis", "Bending can make it worse"][at]}</Note>
      <Body x={x} />
      {order.map(([cx, cy], index) => { const lit = at === 0 ? index < 4 : cx === bx && cy === by; return <circle key={index} cx={cx} cy={cy} r={lit ? 8 : 5} fill={lit ? GOLD : WHITE} stroke={INK} strokeWidth="2" className={lit && !still ? "lib-why-pulse" : undefined} />; })}
      <path d={`M${bx + 10} ${by} L172 ${boxY}`} stroke={LINE} strokeWidth="2" />
      <Box x={240} y={boxY} w={136} text={label} lit />
      <Say>{["Shoulders, hips, elbows or knees", "Hip: tender over the bony part", "Shoulder: hard to raise your arm", "Elbow: from leaning on it", "Knee: kneeling makes it worse"][at]}</Say>
    </svg>} />;
}

function ThreeScenes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const jobs = ["Gardeners", "Carpet layers", "Mechanics", "Plumbers", "Roofers", "Students"];
  const others = ["Gout", "Rheumatoid arthritis", "Recurring injury", "Tendon problem"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Kneeling, leaning and a knock" label="Why it happens" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Scenes of kneeling, leaning and standing that press on a bursa">
      <Note>{["Jobs and hobbies with repetition", "Sports with throwing or impact", "Rheumatoid arthritis raises the risk", "Sometimes linked to the lower back", "More likely at the elbow"][at]}</Note>
      {at === 0 && <>
        {[14, 114, 214].map(px => <rect key={px} x={px} y="38" width="92" height="140" rx="10" fill={WHITE} stroke={LINE} strokeWidth="2" />)}
        <g stroke={INK} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M52 82 V112 L56 140 L90 144" /><path d="M52 92 L76 128" />
          <path d="M140 70 V108 M140 80 L160 116 L192 102" />
          <path d="M260 92 V130 M260 130 L254 150 M260 130 L266 150" />
        </g>
        <circle cx="52" cy="70" r="9" fill={INK} /><circle cx="140" cy="58" r="9" fill={INK} /><circle cx="260" cy="80" r="9" fill={INK} />
        <path d="M24 150 H96 M224 152 H296" stroke={LINE} strokeWidth="3" /><path d="M124 120 H198" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <Clock x={286} y={56} r={12} hand={2.4} />
        <g fill={GOLD} className={still ? undefined : "lib-why-pulse"}><circle cx="56" cy="146" r="6" /><circle cx="160" cy="122" r="6" /><circle cx="254" cy="154" r="5" /><circle cx="266" cy="154" r="5" /></g>
        <W x={60} y={170} size={10.5}>Kneeling</W><W x={160} y={170} size={10.5}>Leaning</W><W x={260} y={170} size={10.5}>Standing</W>
      </>}
      {at === 1 && jobs.map((job, index) => <Box key={job} x={index % 2 ? 230 : 90} y={60 + Math.floor(index / 2) * 40} w={128} text={job} />)}
      {at === 2 && others.map((other, index) => <Box key={other} x={160} y={54 + index * 36} w={200} text={other} lit={index === 1} />)}
      {at === 3 && <><Body x={110} /><circle cx="118" cy="124" r="8" fill={GOLD} stroke={INK} strokeWidth="2" /><W x={226} y={120} size={40} serif>?</W></>}
      {at === 4 && <>
        <path d="M60 60 L150 116 L262 80" stroke={SOFT} strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <ellipse cx="150" cy="134" rx="16" ry="10" fill={GOLD} stroke={INK} strokeWidth="2" />
        <path d="M134 154 l8 -6 M150 158 l8 -6" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        {[[126, 166], [170, 160], [148, 172], [184, 146]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill={INK} />)}
      </>}
      <Say>{["Repeated pressure, rubbing or overuse", "Jobs with knocks on the elbow", "Other conditions can raise the risk", "At the hip, often no obvious cause", "Infection can follow an injury"][at]}</Say>
    </svg>} />;
}

function HotSigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const lit = [[0], [], [1], [0, 1], [2]][at];
  const tags = [
    ["No better after 1 to 2 weeks", "High temperature, or shivery", "Cannot move the joint", "Broken skin over it"],
    ["Red, hot swelling", "Getting worse", "A cut or graze over it", "A fever"],
    ["Hip swollen and hot", "Unwell, high temperature", "Knee red or hot, shivery", "Arm swollen, high temperature"],
    ["Sudden severe pain", "Swelling round a joint", "Skin changed colour", "Unwell, high temperature"],
    ["Breathing very fast", "Confused or slurred speech", "Blue, pale or blotchy skin", "Rash that does not fade"],
  ][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Signs of infection" title="When a hot, swollen joint needs help" label="Signs of infection" credit="Illustration: Rehyn. Sepsis signs: call 999 or go to A&E."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three steps of help, GP, NHS 111 and 999, beside the signs that go with each">
      <Note>{["", "Harder to see on brown or black skin", "Or an urgent GP appointment", "Joint infection is serious", "Do not drive to A&E"][at]}</Note>
      <path d="M54 56 V160" stroke={LINE} strokeWidth="4" />
      {["GP", "111", "999"].map((name, index) => { const on = lit.includes(index); return <g key={name} className={on && index === 2 && !still ? "lib-why-pulse" : undefined}>
        <circle cx="54" cy={56 + index * 52} r="20" fill={on ? INK : WHITE} stroke={on && index === 2 ? GOLD : INK} strokeWidth={on && index === 2 ? 4 : 2.5} />
        <W x={54} y={60 + index * 52} size={12} fill={on ? WHITE : TEXT}>{name}</W>
      </g>; })}
      {tags.map((tag, index) => <g key={tag}>
        <rect x="104" y={42 + index * 34} width="204" height="26" rx="9" fill={WHITE} stroke={at === 4 ? GOLD : INK} strokeWidth="2" />
        <W x={206} y={59 + index * 34} size={10.5}>{tag}</W>
      </g>)}
      <Say>{["No better in 1 to 2 weeks? See a GP", "Hot, red swelling may mean infection", "Hot joint, high temperature: NHS 111", "Urgent GP or NHS 111, straight away", "Sepsis signs: call 999 or go to A&E"][at]}</Say>
    </svg>} />;
}

function IceRest(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Self-care" title="Rest, ice and a cushion" label="Rest, ice and painkillers" credit="Illustration: Rehyn. Always wrap ice in a towel."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A knee resting with a wrapped ice pack, a timer and cushions">
      <Note>{["Avoid things that press on it", "Not directly onto the skin", "Pain should ease in a couple of weeks", "Short courses, unless a doctor advises", "Avoid sleeping on the sore side"][at]}</Note>
      {at === 4 && <><ellipse cx="34" cy="112" rx="13" ry="36" fill={TINT} stroke={SOFT} strokeWidth="2" /><ellipse cx="106" cy="112" rx="13" ry="36" fill={TINT} stroke={SOFT} strokeWidth="2" /></>}
      <Knee x={70} y={112} scale={0.62} />
      {at === 1 && <g><rect x="42" y="96" width="56" height="30" rx="7" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M50 96 V126 M60 96 V126 M70 96 V126 M80 96 V126 M90 96 V126" stroke={SOFT} strokeWidth="1.5" /></g>}
      {at === 0 && <><Box x={215} y={90} w={150} text="Rest" lit /><Box x={215} y={130} w={150} text="Ease the pressure" /></>}
      {at === 1 && <><Clock x={215} y={96} r={30} hand={1.05} /><W x={215} y={150} size={11}>10 minutes</W></>}
      {at === 2 && <><Pill x={190} y={96} rotate={-25} /><Pill x={240} y={108} rotate={20} /><W x={215} y={148} size={10.5}>Pharmacy or supermarket</W></>}
      {at === 3 && <><Box x={215} y={84} w={160} text="Read the leaflet" /><Box x={215} y={122} w={160} text="Ask a pharmacist" lit /></>}
      {at === 4 && <><Moon x={215} y={90} r={22} /><W x={215} y={144} size={10.5}>Pillow behind your back</W></>}
      <Say>{["Rest, and take pressure off the joint", "Wrapped ice, 10 minutes at a time", "Painkillers can ease the pain", "Check the leaflet; ask a pharmacist", "Cushions around the joint at night"][at]}</Say>
    </svg>} />;
}

function WallChair(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercises" title="Moves matched to the joint" label="Exercises and physiotherapy" credit="Illustration: Rehyn. Check with your GP or physiotherapist first."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Exercises for bursitis: a leg lift beside a chair and fingers climbing a wall">
      <Note>{["Advice on reducing friction too", "Free on the NHS; there may be a wait", "Hold 5 seconds, 5 times each side", "Pain worse? Seek urgent advice", "Stop if joint pain does not ease"][at]}</Note>
      {at === 0 && <><Person x={70} y={140} scale={1.3} fill={SOFT} /><Person x={140} y={140} scale={1.3} /><Box x={250} y={84} w={116} text="Stretching" /><Box x={250} y={122} w={116} text="Strengthening" lit /></>}
      {at === 1 && <><Box x={88} y={90} w={136} text="GP referral" /><Box x={232} y={90} w={136} text="Refer yourself" lit /><W x={160} y={144} size={11}>Many areas need no GP referral</W></>}
      {at === 2 && <>
        <path d="M60 178 H260" stroke={LINE} strokeWidth="3" />
        <path d="M96 70 V178 M96 124 H136 V178" stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="180" cy="56" r="11" fill={INK} />
        <g stroke={INK} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M180 70 V128 L176 176" /><path d="M180 86 L100 72" /><path d="M180 128 L218 168" /></g>
        <path d="M200 182 Q222 182 230 160" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" className={still ? undefined : "lib-why-pulse"} /><path d="M224 162 L230 158 L232 166" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />
      </>}
      {at === 3 && <>
        <path d="M232 36 V180" stroke={LINE} strokeWidth="6" />
        <circle cx="170" cy="62" r="11" fill={INK} />
        <g stroke={INK} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M170 76 V132 L162 178 M170 132 L178 178" /><path d="M170 88 L224 60" /><path d="M170 88 L150 126" /></g>
        {[150, 128, 106, 84].map((y, index) => <circle key={y} cx="224" cy={y} r="4" fill={GOLD} opacity={0.4 + index * 0.2} />)}
      </>}
      {at === 4 && <>
        {Array.from({ length: 6 }, (_, index) => <rect key={index} x={46 + index * 40} y={168 - (16 + index * 18)} width="28" height={16 + index * 18} rx="5" fill={INK} opacity={0.45 + index * 0.1} />)}
        <path d="M30 170 H290" stroke={LINE} strokeWidth="3" />
      </>}
      <Say>{["Exercises matched to your problem", "Refer yourself, or ask your GP", "Hip: lift the leg out to the side", "Shoulder: walk fingers up a wall", "Start slowly and build up"][at]}</Say>
    </svg>} />;
}

function NeedleCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const labels = ["Checks", "Drain", "Injection", "Medicine", "Surgery"];
  const icon = (index: number, cx: number) => {
    const cy = 80;
    switch (index) {
      case 0: return <Tube x={cx} y={cy} />;
      case 1: return <Syringe x={cx} y={cy} />;
      case 2: return <g><Syringe x={cx} y={cy - 4} rotate={-40} /><path d={`M${cx + 14} ${cy + 10} q-5 7 0 10 q5 -3 0 -10 Z`} fill={GOLD} /></g>;
      case 3: return <Pill x={cx} y={cy} rotate={-30} />;
      default: return <g stroke={INK} strokeWidth="3.5" strokeLinecap="round"><path d={`M${cx - 14} ${cy + 14} L${cx + 2} ${cy - 2}`} /><path d={`M${cx + 2} ${cy - 2} L${cx + 14} ${cy - 16} L${cx + 8} ${cy + 2} Z`} fill={WHITE} strokeWidth="2.5" strokeLinejoin="round" /></g>;
    }
  };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Other treatments" title="Draining, injections and rarely surgery" label="Steroid injections and other treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Cards for the checks and treatments a doctor may offer, one at a time">
      {labels.map((label, index) => { const cx = 39 + index * 61; return <g key={label} opacity={index === at ? 1 : 0.45}>
        <rect x={cx - 28} y="40" width="56" height="86" rx="10" fill={index === at ? TINT : WHITE} stroke={index === at ? GOLD : INK} strokeWidth={index === at ? 3.5 : 2} />
        {icon(index, cx)}
        <W x={cx} y={116} size={9.5}>{label}</W>
      </g>; })}
      <W x={160} y={160} size={11}>{["A fluid sample, scan or blood test", "Elbow: half settle within 2 weeks", "Not used if there is an infection", "A doctor may suggest stronger ones", "The bursa may be drained or removed"][at]}</W>
      <Say>{["First, the GP examines the joint", "Draining fluid can ease the pressure", "An injection can reduce swelling", "Lowest dose that works, shortest time", "Surgery is rare, if it keeps returning"][at]}</Say>
    </svg>} />;
}

function CourseLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const dayX = (day: number) => 30 + day * 260 / 35;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Infected bursa" title="Seeing the treatment through" label="Treating an infected bursa" credit="Illustration: Rehyn. Take antibiotics as your GP or pharmacist tells you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A five-week timeline of treating an infected bursa">
      <Note>{["If infection is the cause", "Using a needle and syringe", "Not helping? Hospital referral", "No double dose for a missed one", "Some take up to 20 weeks"][at]}</Note>
      {at === 0 && <><path d={`M30 120 H${dayX(7)}`} stroke={GOLD} strokeWidth="10" strokeLinecap="round" /><Pill x={52} y={84} rotate={-20} /><W x={92} y={66} size={10.5}>At least 7 days</W></>}
      {at === 1 && <><Tube x={44} y={84} /><Syringe x={92} y={84} /><W x={160} y={66} size={10.5}>Fluid tested in a lab</W></>}
      {at === 2 && <><path d={`M${dayX(7)} 100 H${dayX(28)}`} stroke={GOLD} strokeWidth="4" strokeLinecap="round" /><W x={dayX(17.5)} y={88} size={10.5}>1 to 4 weeks of antibiotics</W></>}
      {at === 3 && [0, 1, 2, 3, 4].map(index => <Pill key={index} x={56 + index * 52} y={86} rotate={-20} />)}
      <path d="M30 120 H290" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {[0, 7, 14, 21, 28, 35].map((day, index) => <g key={day}><path d={`M${dayX(day)} 114 V126`} stroke={INK} strokeWidth="2.5" />{index > 0 && <W x={dayX(day)} y={142} size={10}>{index}</W>}</g>)}
      <W x={160} y={164} size={10.5}>weeks</W>
      {at === 2 && [3, 5].map(day => <circle key={day} cx={dayX(day)} cy="120" r="7" fill={GOLD} stroke={WHITE} strokeWidth="2.5" />)}
      {at === 4 && <circle cx={dayX(35)} cy="120" r="10" fill={GOLD} stroke={WHITE} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      <Say>{["Antibiotics for at least 7 days", "Fluid tested to find the infection", "Checked every 3 to 5 days", "Keep taking them as long as told", "Settles in 5 weeks on average"][at]}</Say>
    </svg>} />;
}

function PadPillow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Taking the pressure off" title="Take the weight off the cushion" label="Taking the pressure off" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Ways to take pressure off a sore bursa: padding, a pillow, a trolley and good shoes">
      <Note>{["Take regular breaks", "Keep pressure off the elbow", "Avoid lying on the sore side", "Use a trolley, not a basket", "Ask about choosing a walking stick"][at]}</Note>
      {at === 0 && <>
        <path d="M60 172 H260" stroke={LINE} strokeWidth="3" />
        <rect x="120" y="156" width="96" height="16" rx="5" fill={GOLD} opacity="0.8" />
        <circle cx="150" cy="66" r="12" fill={INK} />
        <g stroke={INK} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M150 80 V124 L156 154 L200 156" /><path d="M150 94 L180 136" /></g>
      </>}
      {at === 1 && <>
        <path d="M60 122 H270" stroke={INK} strokeWidth="6" strokeLinecap="round" /><path d="M76 122 V176 M254 122 V176" stroke={INK} strokeWidth="4" />
        <circle cx="104" cy="44" r="12" fill={INK} />
        <path d="M110 58 L150 104 L216 92" stroke={SOFT} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="150" cy="108" r="7" fill={GOLD} />
        <path d="M150 118 V114" stroke={GOLD} strokeWidth="3" /><Cross x={196} y={140} s={10} /><W x={196} y={168} size={10}>No leaning</W>
      </>}
      {at === 2 && <>
        <Moon x={276} y={50} r={14} />
        <rect x="36" y="132" width="250" height="16" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M44 148 V170 M278 148 V170" stroke={INK} strokeWidth="4" />
        <ellipse cx="66" cy="124" rx="22" ry="8" fill={WHITE} stroke={INK} strokeWidth="2" />
        <circle cx="72" cy="110" r="11" fill={INK} />
        <path d="M88 118 H236" stroke={SOFT} strokeWidth="18" strokeLinecap="round" />
        <ellipse cx="150" cy="98" rx="34" ry="9" fill={GOLD} opacity="0.85" />
      </>}
      {at === 3 && <>
        <path d="M20 176 H300" stroke={LINE} strokeWidth="3" />
        <path d="M40 112 V176 M40 152 H100 M100 152 V176" stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none" />
        <Cross x={70} y={128} s={14} /><W x={70} y={192} size={10}>Low chair</W>
        <rect x="186" y="96" width="74" height="42" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M186 108 H260 M186 120 H260" stroke={SOFT} strokeWidth="1.5" />
        <path d="M260 96 L278 80" stroke={INK} strokeWidth="4" strokeLinecap="round" /><circle cx="198" cy="152" r="8" fill={INK} /><circle cx="248" cy="152" r="8" fill={INK} />
        <Tick x={290} y={58} s={9} /><W x={224} y={192} size={10}>Trolley</W>
      </>}
      {at === 4 && <>
        <path d="M40 172 H300" stroke={LINE} strokeWidth="3" />
        <path d="M70 168 H190 C190 146 168 140 148 136 L128 104 H82 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <path d="M80 160 Q130 146 184 160" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M250 70 Q250 54 266 54 Q280 54 280 66 M250 70 L240 172" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
      </>}
      <Say y={210}>{["Padding under the knees when kneeling", "Avoid knocks and leaning on elbows", "A pillow behind you stops rolling", "Avoid low chairs and heavy carrying", "Well-fitted shoes ease foot pressure"][at]}</Say>
    </svg>} />;
}

function RestToMove(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const step = [0, 1, 2, 3, 3][at];
  const tops = [152, 132, 112, 92];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Staying active" title="Rest first, then keep moving" label="Staying active" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Steps rising from rest to regular activity, with a person climbing them">
      <Note>{["Short bursts with regular breaks", "Stopping use can stop it improving", "Warm up before you exercise", "150 minutes a week, strength 2 days", "Problems can start again quickly"][at]}</Note>
      {["Rest", "Move", "Build up", "Fitness"].map((label, index) => <g key={label}>
        <rect x={20 + index * 72} y={tops[index]} width="66" height={176 - tops[index]} rx="6" fill={index === step ? TINT : WHITE} stroke={index === step ? GOLD : INK} strokeWidth={index === step ? 3 : 2} />
        <W x={53 + index * 72} y={tops[index] + 18} size={10}>{label}</W>
      </g>)}
      <Person x={53 + step * 72} y={tops[step] - 16} scale={0.9} />
      {at === 4 && <g><path d="M290 92 V60" stroke={INK} strokeWidth="3" /><path d="M290 60 L308 66 L290 72 Z" fill={GOLD} /></g>}
      <Say>{["A few days' rest, then gentle moving", "Keep moving, but do not overdo it", "Start slowly and build up gradually", "Daily walks or swimming help", "Keep going, even once pain clears"][at]}</Say>
    </svg>} />;
}

function WorkBench(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const jobs = ["Carpet fitters", "Gardeners", "Plumbers", "Mechanics", "Roofers", "Drivers"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Kneeling, leaning and your employer" label="Work and repetitive tasks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Jobs linked with bursitis, breaks and padding, and talking to an employer">
      <Note>{["Or long hours on your feet", "Change the activity, protect the joint", "Home, work or while driving", "Footrest, back support or equipment", "Will not affect other benefits"][at]}</Note>
      {at === 0 && jobs.map((job, index) => <Box key={job} x={index % 2 ? 230 : 90} y={60 + Math.floor(index / 2) * 40} w={128} text={job} />)}
      {at === 1 && <><Clock x={90} y={96} r={30} hand={1.6} /><W x={90} y={152} size={10.5}>Regular breaks</W><rect x="180" y="96" width="100" height="20" rx="6" fill={GOLD} opacity="0.8" /><W x={230} y={152} size={10.5}>Padding</W></>}
      {at === 2 && <><Person x={70} y={130} scale={1.3} />{["Other ways of working", "Equipment", "Occupational health"].map((tag, index) => <Box key={tag} x={214} y={70 + index * 38} w={168} text={tag} lit={index === 0} />)}</>}
      {at === 3 && <>
        <rect x="26" y="48" width="112" height="34" rx="12" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M70 82 L78 94 L86 82" fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><W x={82} y={69} size={10.5}>Adjustments</W>
        <rect x="182" y="48" width="112" height="34" rx="12" fill={TINT} stroke={INK} strokeWidth="2" /><path d="M234 82 L242 94 L250 82" fill={TINT} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><W x={238} y={69} size={10.5}>Assessment</W>
        <Person x={82} y={150} scale={1.2} /><Person x={238} y={150} scale={1.2} fill={SOFT} />
      </>}
      {at === 4 && <><rect x="80" y="54" width="140" height="84" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={150} y={88} size={12}>Access to Work</W><W x={150} y={114} size={11}>Grant</W><Tick x={258} y={96} s={14} /></>}
      <Say>{["Jobs with kneeling, leaning or knocks", "Padding and regular breaks help", "An occupational therapist can help", "Ask for a workstation assessment", "A grant you do not pay back"][at]}</Say>
    </svg>} />;
}

function LoopBreak(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const cx = 92, cy = 112, r = 58;
  const [a0, a1] = at === 0 ? [-60, 250] : [-40, 220];
  const end = a1 * Math.PI / 180, tx = -Math.sin(end), ty = Math.cos(end);
  const ex = cx + r * Math.cos(end), ey = cy + r * Math.sin(end);
  const head = `M${(ex + tx * 10).toFixed(1)} ${(ey + ty * 10).toFixed(1)} L${(ex - ty * 7).toFixed(1)} ${(ey + tx * 7).toFixed(1)} L${(ex + ty * 7).toFixed(1)} ${(ey - tx * 7).toFixed(1)} Z`;
  const tags = [["Repeated knocks", "Pressure", "Earlier episodes"], ["Clean any cuts", "Warm up first", "Padding and breaks"], ["Healthy weight", "Less joint pressure", "Stopping smoking"], ["Rest", "Pain relief", "Physiotherapy"], ["Drained or removed", "2 months: referral", "Infected again: urgent"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stopping it coming back" title="Keeping it from coming back" label="Stopping it coming back" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A loop around a bursa, broken by the things that help stop it coming back">
      <Note>{["Especially after repeated knocks", "From the NHS and Arthritis UK", "Being overweight adds pressure", "Lasting pain does not mean damage", "Rare, if severe or recurring"][at]}</Note>
      {at === 3
        ? <><circle cx={cx} cy={cy} r={r} fill="none" stroke={LINE} strokeWidth="14" /><path d={arc(cx, cy, r, -90, 236)} fill="none" stroke={GOLD} strokeWidth="14" /><W x={cx} y={cy - 2} size={16} serif>Over 90%</W><W x={cx} y={cy + 16} size={10}>recover</W></>
        : <>
          <path d={arc(cx, cy, r, a0, a1)} fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
          <path d={head} fill={INK} />
          {at > 0 && <rect x={cx - 26} y={cy - r - 8} width="52" height="16" rx="5" fill={GOLD} />}
          <ellipse cx={cx} cy={cy} rx="24" ry="13" fill={at === 0 ? GOLD : TINT} stroke={INK} strokeWidth="2.5" />
        </>}
      {tags.map((tag, index) => <Box key={tag} x={240} y={70 + index * 38} w={140} text={tag} lit={at !== 0} />)}
      <Say>{["Treated, but it can come back", "Small habits help stop it returning", "A healthy weight eases joint pressure", "Outer hip: over 90% recover fully", "Severe or recurring: rarely surgery"][at]}</Say>
    </svg>} />;
}

export function FlexPieceView({ piece, ...props }: { piece: FlexPiece } & PieceProps) {
  switch (piece) {
    case "hmob-bend-further": return <BendFurther {...props} />;
    case "hmob-tipping-scale": return <TippingScale {...props} />;
    case "hmob-two-circles": return <TwoCircles {...props} />;
    case "hmob-nine-points": return <NinePoints {...props} />;
    case "hmob-muscle-straps": return <MuscleStraps {...props} />;
    case "hmob-pain-toolkit": return <PainToolkit {...props} />;
    case "hmob-energy-battery": return <EnergyBattery {...props} />;
    case "hmob-slip-signpost": return <SlipSignpost {...props} />;
    case "hmob-neutral-desk": return <NeutralDesk {...props} />;
    case "hmob-two-groups": return <TwoGroups {...props} />;
    case "hmob-desk-and-class": return <DeskAndClass {...props} />;
    case "hmob-linked-hands": return <LinkedHands {...props} />;
    case "burs-cushion": return <Cushion {...props} />;
    case "burs-four-spots": return <FourSpots {...props} />;
    case "burs-three-scenes": return <ThreeScenes {...props} />;
    case "burs-hot-signs": return <HotSigns {...props} />;
    case "burs-ice-rest": return <IceRest {...props} />;
    case "burs-wall-chair": return <WallChair {...props} />;
    case "burs-needle-cards": return <NeedleCards {...props} />;
    case "burs-course-line": return <CourseLine {...props} />;
    case "burs-pad-pillow": return <PadPillow {...props} />;
    case "burs-rest-to-move": return <RestToMove {...props} />;
    case "burs-work-bench": return <WorkBench {...props} />;
    case "burs-loop-break": return <LoopBreak {...props} />;
  }
}
