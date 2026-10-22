import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { SOFT_PIECES, type SoftPiece } from "@/content/soft-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Chips, Clock, credit, Gauge, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Fibromyalgia and Frozen shoulder pages' own pieces (content/soft-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isSoftPiece = (piece: NewsPiece): piece is SoftPiece => (SOFT_PIECES as readonly string[]).includes(piece);

/** The caption under a picture. */
const Say = ({ y = 204, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
/** A smaller line of words, usually across the top. */
const Note = ({ x = 160, y = 28, children }: { x?: number; y?: number; children: ReactNode }) => <W x={x} y={y} size={10.5}>{children}</W>;
/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A gold cross over something left out. */
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
const Sun = ({ x, y, r = 14 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 10) * Math.cos(a)} ${y + (r + 10) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Cloud = ({ x, y, s, opacity = 1 }: { x: number; y: number; s: number; opacity?: number }) =>
  <g opacity={opacity} fill={SOFT}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
/** A labelled tag with its top-left corner at (x, y). */
const Tag = ({ x, y, w, text, lit = false }: { x: number; y: number; w: number; text: string; lit?: boolean }) =>
  <g><rect x={x} y={y} width={w} height="26" rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x + w / 2} y={y + 17} size={10.5} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A shoulder seen from the front: the socket, the ball of the arm bone and the capsule around them (`capsule` is its size). */
const Joint = ({ x, y, capsule, width = 4, fill = "none" }: { x: number; y: number; capsule: number; width?: number; fill?: string }) =>
  <g>
    <path d={`M${x - 96} ${y - 74} Q${x - 10} ${y - 84}, ${x + 40} ${y - 30} L${x + 46} ${y + 70}`} fill="none" stroke={LINE} strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
    <path d={`M${x - 8} ${y - 36} L${x - 92} ${y - 54}`} stroke={SOFT} strokeWidth="9" strokeLinecap="round" />
    <path d={`M${x} ${y} L${x + 12} ${y + 66}`} stroke={SOFT} strokeWidth="22" strokeLinecap="round" />
    <path d={`M${x - 14} ${y - 34} C${x - 42} ${y - 22}, ${x - 42} ${y + 22}, ${x - 14} ${y + 34}`} stroke={SOFT} strokeWidth="9" fill="none" strokeLinecap="round" />
    <circle cx={x} cy={y} r="26" fill={WHITE} stroke={INK} strokeWidth="3" />
    <ellipse cx={x - 4} cy={y} rx={capsule} ry={capsule * 0.92} fill={fill} fillOpacity={fill === "none" ? undefined : 0.55} stroke={INK} strokeWidth={width} />
  </g>;

// ==== Fibromyalgia ==========================================================================================

function VolumeDial(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const loud = at === 1 || at === 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A nervous system turned up too high" label="What fibromyalgia is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with pain messages travelling to a dial turned up high">
      <Note>{["", "The brain, spinal cord and nerves", "Not from joint, bone or muscle damage", "Nearly 1 in 20 may be affected", "Exercise, therapy and medicine"][at]}</Note>
      <Person x={74} y={140} scale={1.6} />
      {at === 0 && <g fill={GOLD} className={still ? undefined : "lib-why-pulse"}>{[[40, 84], [110, 88], [34, 132], [114, 128], [50, 172], [98, 172], [74, 62]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" />)}</g>}
      {[100, 120].map(y => <path key={y} d={`M114 ${y} q7.5 -8 15 0 t15 0 t15 0 t15 0`} fill="none" stroke={loud ? INK : SOFT} strokeWidth={loud ? 4.5 : 2.5} strokeLinecap="round" />)}
      <Gauge x={232} y={124} r={52} value={[0.6, 0.9, 0.9, 0.6, 0.45][at]} label="Pain volume" />
      <Say y={200}>{["Long-term pain all over the body", "Pain messages handled differently", "Real symptoms, not all in your mind", "Typically starts between 25 and 55", "No cure yet, but treatments help"][at]}</Say>
    </svg>} />;
}

function FourTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const tiles = [{ x: 64, y: 52, t: "Pain" }, { x: 256, y: 52, t: "Fatigue" }, { x: 64, y: 152, t: "Fibro fog" }, { x: 256, y: 152, t: "Poor sleep" }];
  const lit = [[0, 1, 2, 3], [0], [1, 3], [2], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="More than pain: the four core symptoms" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with the four core symptoms of fibromyalgia around it">
      <Note y={22}>{["Four core symptoms", "Smoke, foods, bright lights", "Stiffness can be worst on waking", "Often linked to fatigue", "Low mood? Get help from a GP"][at]}</Note>
      {at === 1 && <circle cx="160" cy="112" r="44" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="5 6" className={still ? undefined : "lib-why-pulse"} />}
      <Person x={160} y={128} scale={1.5} fill={at === 4 ? SOFT : INK} />
      {tiles.map((tile, index) => <g key={tile.t} opacity={at === 4 || lit.includes(index) ? 1 : 0.4}><Box x={tile.x} y={tile.y} w={104} h={30} text={tile.t} lit={lit.includes(index)} /></g>)}
      <Say>{["Widespread pain, likely continuous", "Even a light touch may hurt", "Waking tired after plenty of sleep", "Trouble with memory and focus", "Headaches, IBS, dizziness and more"][at]}</Say>
    </svg>} />;
}

function SteppingPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stones = ["Your story", "Examination", "Tests", "Diagnosis"];
  const lit = [[2], [0, 1], [2], [3], []][at];
  const here = [2, 0, 2, 3, 3][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Diagnosis" title="No single test, but a clear path" label="Diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Stepping stones from your story to a diagnosis">
      <path d="M18 132 H302" stroke={at === 4 ? GOLD : LINE} strokeWidth="4" strokeDasharray="4 8" strokeLinecap="round" />
      {stones.map((stone, index) => <g key={stone}>
        <ellipse cx={52 + index * 72} cy="132" rx="30" ry="12" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={52 + index * 72} y={164} size={10}>{stone}</W>
      </g>)}
      <Person x={52 + here * 72} y={116} scale={0.8} fill={SOFT} />
      {at === 3
        ? <><Box x={62} y={64} w={94} text="Rheumatologist" size={10} /><Box x={160} y={64} w={94} text="Physio" size={10} /><Box x={258} y={64} w={94} text="Pain clinic" size={10} /></>
        : <W x={160} y={64} size={11}>{["Symptoms vary from person to person", "Severe pain for 3 months or more", "Fibromyalgia may be there as well", "", "Around 3 years from first appointment"][at]}</W>}
      <Say>{["No specific blood test or scan", "The GP asks how life is affected", "Tests check for other conditions", "Often diagnosed and treated by a GP", "Diagnosis can take a while"][at]}</Say>
    </svg>} />;
}

function TriggerRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tags = [["Stress", "Weather", "Activity"], ["Stress", "Poor sleep", "Low mood"], ["Smoke", "Some foods", "Bright lights", "Noise"], ["Serious injury", "Infection", "Major operation", "Emotional trauma"], ["Notice triggers", "Relax each day", "Pace good days"]][at];
  const top = 110 - (tags.length * 34 - 8) / 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Triggers" title="What turns the volume up" label="Triggers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Things that can turn symptoms up, linked to a dial">
      {tags.map((tag, index) => <path key={tag} d={`M176 ${top + index * 34 + 13} L144 118`} stroke={LINE} strokeWidth="2" />)}
      <Gauge x={86} y={128} r={54} value={[0.6, 0.8, 0.75, 0.6, 0.4][at]} label="Symptoms" />
      {tags.map((tag, index) => <Tag key={tag} x={176} y={top + index * 34} w={128} text={tag} lit={at === 4} />)}
      <Say>{["Symptoms can get better or worse", "Stress and poor sleep can worsen pain", "Sensitivities can bring on a flare", "Often starts after a stressful event", "Learn your triggers, relax each day"][at]}</Say>
    </svg>} />;
}

function BuildUp(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const heights = [[40, 48, 56, 64, 72, 80], [40, 48, 56, 64, 72, 80], [56, 60, 64, 68, 72, 76], [14, 22, 32, 44, 58, 74], [72, 76, 80, 84, 88, 94]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exercise" title="Start small, keep moving" label="Exercise" credit="Illustration: Rehyn. 150 minutes a week is the NHS guide for adults."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Bars of activity building up gradually">
      {at === 2
        ? <><Box x={62} y={38} w={92} text="Aerobic" lit /><Box x={160} y={38} w={92} text="Strength" lit /><Box x={258} y={38} w={92} text="Stretching" lit /></>
        : <Note y={34}>{["Helps fatigue and pain control", "Something you enjoy, long term", "", "Then build up gradually", "Not active for a while? Ask a GP"][at]}</Note>}
      {at === 4 && <><path d="M30 72 H290" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" /><W x={290} y={64} size={10.5} anchor="end">150 minutes a week</W></>}
      <path d="M24 172 H296" stroke={LINE} strokeWidth="3" />
      {heights.map((height, index) => <rect key={index} x={40 + index * 42} y={172 - height} width="30" height={height} rx="6" fill={at === 3 && index === 0 ? GOLD : INK} opacity={at === 2 ? 0.45 : 0.55 + index * 0.08} />)}
      <Say>{["Regular exercise can reduce pain", "Your GP may offer a programme", "Aerobic, strength and stretching", "Start with a 5 to 10 minute walk", "Aim for 150 minutes a week"][at]}</Say>
    </svg>} />;
}

function SixWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const heights = at === 3 ? [50, 50, 40, 30, 20, 10] : [50, 50, 50, 50, 50, 50];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Low doses, patience and a plan" label="Medicines" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Six weeks for a medicine to work, and stopping it gradually">
      <Note y={32}>{["Lower dose than for depression", "For adults aged 18 or over", "Full benefit: 4 to 6 weeks", "Side effects milder at pain doses", ""][at]}</Note>
      {at === 4
        ? <><Pill x={160} y={64} /><Box x={84} y={110} w={144} text="Not started now" size={10} lit /><Box x={236} y={110} w={144} text="Helping? Decide together" size={10} /></>
        : <>
          {heights.map((height, index) => <g key={index}>
            <rect x={22 + index * 48} y={110 - height} width="40" height={height} rx="7" fill={at === 2 ? INK : WHITE} fillOpacity={at === 2 ? 0.25 + index * 0.13 : 1} stroke={at === 2 && index >= 3 ? GOLD : INK} strokeWidth={at === 2 && index >= 3 ? 3 : 2} />
            {at === 2 && <Moon x={40 + index * 48} y={76} r={7} fill={index >= 3 ? WHITE : INK} />}
            {(at === 0 || at === 1) && <Pill x={42 + index * 48} y={85} rotate={-35} />}
            <W x={42 + index * 48} y={128} size={10}>{index + 1}</W>
          </g>)}
          <W x={160} y={146} size={10}>weeks</W>
        </>}
      <Say>{["Low doses can ease pain and sleep", "Amitriptyline, duloxetine and others", "Give it at least 6 weeks", "Stop gradually, with your doctor", "Some older medicines not started now"][at]}</Say>
    </svg>} />;
}

function BodyMind(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Talking therapies" title="Changing how pain runs your life" label="Talking therapies" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Body and mind linked both ways, with therapy sessions and a group">
      <circle cx="104" cy="84" r="44" fill={WHITE} stroke={INK} strokeWidth="3" /><W x={104} y={89} size={13}>Body</W>
      <circle cx="216" cy="84" r="44" fill={TINT} stroke={INK} strokeWidth="3" /><W x={216} y={89} size={13}>Mind</W>
      <g stroke={at === 1 ? GOLD : SOFT} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={at === 1 && !still ? "lib-why-pulse" : undefined}>
        <path d="M140 56 Q160 40 180 56" /><path d="M172 50 L180 56 L170 59" />
        <path d="M180 112 Q160 128 140 112" /><path d="M148 118 L140 112 L150 109" />
      </g>
      {at === 0 && <><Box x={115} y={162} w={80} text="ACT" lit /><Box x={205} y={162} w={80} text="CBT" lit /></>}
      {at === 2 && Array.from({ length: 15 }, (_, index) => <circle key={index} cx={48 + index * 16} cy="162" r="5.5" fill={index < 5 ? INK : SOFT} />)}
      {at === 3 && [120, 160, 200].map((x, index) => <Person key={x} x={x} y={172} scale={0.7} fill={index === 1 ? INK : SOFT} />)}
      {at === 4 && <><Box x={88} y={162} w={140} text="GP referral" size={10} lit /><Box x={232} y={162} w={140} text="Self-referral, England" size={10} lit /></>}
      <Say>{["ACT and CBT may help reduce pain", "Pain and emotions affect each other", "Usually 5 to 15 sessions", "A programme helps you manage pain", "Ask a GP, or refer yourself"][at]}</Say>
    </svg>} />;
}

function NightRoom(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Sleep" title="Sleep deep enough to refresh" label="Sleep" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bedroom at night, with a routine that helps sleep">
      <rect x="24" y="28" width="70" height="56" rx="4" fill={TINT} stroke={INK} strokeWidth="2.5" />
      <Moon x={59} y={56} r={11} />
      {at === 2 && <><rect x="24" y="28" width="35" height="56" fill={SOFT} stroke={INK} strokeWidth="2" /><rect x="59" y="28" width="35" height="56" fill={SOFT} stroke={INK} strokeWidth="2" /></>}
      <Note x={206} y={40}>{["Hard to fall or stay asleep", "Good sleep may also ease pain", "Same time up every morning", "", "Tablets not usually recommended"][at]}</Note>
      {at === 3 && <g><rect x="246" y="58" width="24" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M270 64 h5 a6 6 0 0 1 0 12 h-5" fill="none" stroke={INK} strokeWidth="2.5" /><Cross x={258} y={71} s={17} /></g>}
      <rect x="40" y="130" width="40" height="34" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {at === 3
        ? <g><rect x="48" y="100" width="24" height="28" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M52 108 H68 M52 114 H68 M52 120 H62" stroke={SOFT} strokeWidth="2" /></g>
        : <Clock x={60} y={112} r={15} hand={2.2} />}
      <rect x="96" y="98" width="9" height="68" rx="2" fill={INK} />
      <rect x="96" y="134" width="196" height="18" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M102 152 V166 M286 152 V166" stroke={INK} strokeWidth="4" />
      <ellipse cx="126" cy="128" rx="16" ry="7" fill={WHITE} stroke={INK} strokeWidth="2" />
      <circle cx="128" cy="118" r="10" fill={SOFT} />
      <path d="M142 134 C152 110, 270 110, 290 134 Z" fill={INK} opacity=".85" />
      {at === 1 && <path d="M190 98 l6 -8 l6 8 l6 -8 M226 100 l6 -8 l6 8 l6 -8" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      <Say>{["Sleep that does not refresh", "Poor sleep can make pain worse", "Dark, quiet and comfortable", "No caffeine 8 hours before bed", "Still struggling? See a GP"][at]}</Say>
    </svg>} />;
}

function BoomBust(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spiky = at === 0 ? 1 : at === 1 || at === 2 ? 0.45 : 0.2;
  const steady = at === 3 ? 1 : at === 0 ? 0.3 : 0.6;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pacing" title="Breaking the boom and bust cycle" label="Pacing" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An energy line that spikes and crashes, beside a steady paced line">
      {at === 4
        ? <>
          <Note y={32}>Try it over a couple of weeks</Note>
          {["Sleep", "Activity", "Rest", "Bedtime"].map((row, index) => <g key={row}>
            <W x={20} y={66 + index * 24} size={10} anchor="start">{row}</W>
            {Array.from({ length: 7 }, (_, day) => <circle key={day} cx={110 + day * 28} cy={62 + index * 24} r="6.5" fill={(day + index) % 3 === 0 ? INK : (day + index) % 3 === 1 ? SOFT : WHITE} stroke={INK} strokeWidth="1.5" />)}
          </g>)}
        </>
        : <>
          <path d="M40 30 h22" stroke={INK} strokeWidth="3.5" /><W x={68} y={34} size={10.5} anchor="start">Boom and bust</W>
          <path d="M196 30 h22" stroke={GOLD} strokeWidth="4" /><W x={224} y={34} size={10.5} anchor="start">Paced</W>
          <path d="M20 120 L55 52 L78 138 L120 132 L142 50 L166 138 L208 130 L232 52 L256 138 L300 128" fill="none" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" opacity={spiky} />
          <path d="M20 100 C60 92, 90 92, 120 100 S180 108, 210 100 S270 92, 300 98" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" opacity={steady} />
        </>}
      {at === 1 && <Chips labels={["Solve", "Plan", "Prioritise", "Pace"]} lit={3} y={150} />}
      {(at === 2 || at === 3) && Array.from({ length: 7 }, (_, day) => <g key={day}>
        <rect x={22 + day * 40} y="152" width="34" height={at === 2 ? 12 : 9} rx="3" fill={INK} />
        <rect x={22 + day * 40} y={at === 2 ? 168 : 165} width="34" height="8" rx="3" fill={TINT} stroke={SOFT} strokeWidth="1.5" />
      </g>)}
      <Say>{["Push on, then crash the next day", "Use the four Ps each day or week", "Break big jobs into smaller tasks", "Spread jobs out, with rest between", "A fatigue chart can show trends"][at]}</Say>
    </svg>} />;
}

function FlareWave(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const dot = [[270, 150], [78, 100], [177, 100], [240, 150], null][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Flare-ups" title="Riding out a flare-up" label="Flare-ups" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A flare-up rising and settling again, with what can help">
      <Note y={26}>{["Usually temporary", "Sometimes no cause is found", "", "How much can you do before a flare?", "Warning signs should not be ignored"][at]}</Note>
      <path d="M20 150 C70 150, 90 50, 125 50 S190 150, 240 150 H300" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" opacity={at === 4 ? 0.3 : 1} />
      {dot && <circle cx={dot[0]} cy={dot[1]} r="9" fill={GOLD} stroke={WHITE} strokeWidth="3" />}
      {at === 4 && <g className={still ? undefined : "lib-why-pulse"}><path d="M270 42 L296 86 H244 Z" fill={WHITE} stroke={GOLD} strokeWidth="3.5" strokeLinejoin="round" /><W x={270} y={80} size={18}>!</W></g>}
      {at === 2 && <><Box x={58} y={176} w={96} text="Heat" size={10} lit /><Box x={160} y={176} w={96} text="Rest" size={10} lit /><Box x={262} y={176} w={96} text="Relaxation" size={10} lit /></>}
      {at === 4 && <><Box x={58} y={176} w={96} text="Acute pain" size={10} /><Box x={160} y={176} w={96} text="Short of breath" size={10} /><Box x={262} y={176} w={96} text="High fever" size={10} /></>}
      <Say y={210}>{["Pain gets worse from time to time", "Stress and weather can bring one on", "Heat, rest and relaxation can help", "Something to learn from, not fear", "New symptoms? Get them checked"][at]}</Say>
    </svg>} />;
}

function DeskAdjust(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const on = (states: number[]) => states.includes(at) ? 1 : 0.35;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Staying in work, with adjustments" label="Work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk with adjustments, reminders and an Access to Work grant">
      <Note y={22}>{["", "Long-term means 12 months or more", "No rule says you have to tell", "", ""][at]}</Note>
      <g opacity={on([3])}>
        <rect x="24" y="34" width="76" height="46" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M32 46 H90 M32 56 H82 M32 66 H74" stroke={SOFT} strokeWidth="3" strokeLinecap="round" />
        <Clock x={276} y={58} r={18} hand={1.2} />
        <path d="M30 96 V170 M30 132 H62 M34 138 V170 M60 138 V170" stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none" />
      </g>
      <rect x="60" y="128" width="190" height="8" rx="3" fill={INK} />
      <path d="M72 136 V176 M238 136 V176" stroke={INK} strokeWidth="4" />
      <g opacity={on([0, 3])}>
        <rect x="130" y="78" width="64" height="42" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M162 120 V128" stroke={INK} strokeWidth="3" />
        {at === 0 && <path d="M138 104 l8 -10 l8 14 l8 -8 l8 6 l8 -12 l8 10" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinejoin="round" />}
      </g>
      <g opacity={on([2])}><rect x="206" y="108" width="28" height="20" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M211 114 H229 M211 120 H224" stroke={SOFT} strokeWidth="2" /></g>
      <g opacity={on([4])}><rect x="254" y="146" width="54" height="32" rx="5" fill={at === 4 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={281} y={166} size={10} fill={at === 4 ? WHITE : TEXT}>Grant</W></g>
      <Say>{["Symptoms can vary from day to day", "Employers make reasonable adjustments", "Talk early; write down what you agree", "Longer breaks, better kit, reminders", "Access to Work can give a grant"][at]}</Say>
    </svg>} />;
}

function PathLight(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const walker = [[56, 167], [95, 143], [150, 117], [194, 110], [236, 95]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood and support" title="Low days are common, and help is there" label="Mood and support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path leading out from under soft clouds towards the sun">
      <Cloud x={64} y={78} s={22} opacity={[0.9, 0.7, 0.5, 0.3, 0][at]} />
      <Cloud x={124} y={58} s={17} opacity={[0.8, 0.6, 0.4, 0.25, 0][at]} />
      <g className={at === 4 && !still ? "lib-why-pulse" : undefined}><Sun x={276} y={64} r={16} /></g>
      <path d="M40 178 C110 172, 80 136, 150 128 S240 108, 258 86" fill="none" stroke={LINE} strokeWidth="14" strokeLinecap="round" />
      <path d="M40 178 C110 172, 80 136, 150 128 S240 108, 258 86" fill="none" stroke={WHITE} strokeWidth="2" strokeDasharray="5 8" />
      <Person x={walker[0]} y={walker[1]} scale={0.8} />
      {at === 4
        ? <><Box x={96} y={40} w={172} h={24} text="111: mental health option" size={10} /><Box x={96} y={70} w={172} h={24} text="Samaritans: 116 123" size={10} /><Box x={96} y={100} w={172} h={24} text="Text SHOUT to 85258" size={10} /></>
        : <Note x={150} y={24}>{["Low mood can make pain feel worse", "Counselling or CBT can help", "Find ways to talk about feelings", "FMA UK helpline: 0300 999 3333", ""][at]}</Note>}
      <Say>{["Feeling low at times is normal", "Think you may be depressed? See a GP", "Keep up the things you enjoy", "Talking to someone who knows can help", "Life at risk? Call 999 or go to A&E"][at]}</Say>
    </svg>} />;
}

// ==== Frozen shoulder =======================================================================================

function Capsule(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const size = [32, 44, 32, 36, 48][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A capsule that tightens, then lets go" label="What frozen shoulder is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ball-and-socket shoulder with a tight capsule around it">
      <Note x={210} y={30}>{["", "", "", "Can follow an injury or surgery", "Most make a full recovery"][at]}</Note>
      <Joint x={130} y={106} capsule={size} width={[7, 3, 6, 5, 3][at]} />
      {(at === 0 || at === 2) && <ellipse cx="126" cy="106" rx={size + 10} ry={(size + 10) * 0.92} fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="4 6" className={still ? undefined : "lib-why-pulse"} />}
      {at === 1 && <><W x={130} y={110} size={10.5}>Ball</W><W x={60} y={110} size={10.5}>Socket</W><W x={184} y={96} size={10.5} anchor="start">Capsule</W></>}
      {at === 2 && <Moon x={252} y={62} r={13} />}
      <Say>{["Inflamed tissue tightens and shrinks", "A ball-and-socket joint", "Pain, often at night, and stiffness", "Often no clear reason why", "Pain and stiffness usually go away"][at]}</Say>
    </svg>} />;
}

function ThreePhases(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const x = (month: number) => 30 + month * 270 / 42;
  const phases = [{ from: 2, to: 9, y: 50, t: "Painful" }, { from: 4, to: 12, y: 86, t: "Stiff" }, { from: 12, to: 42, y: 122, t: "Resolution" }];
  const lit = [[0, 1, 2], [0], [1], [2], [0]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The stages" title="Pain, then stiffness, then a slow thaw" label="The stages" credit="Illustration: Rehyn. Months are the usual ranges in NICE guidance."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three overlapping phases along a line of months">
      <Note y={32}>{["Pain first, then stiffness", "Pain can disturb sleep", "Pain eases, stiffness stays", "Most settle in 18 to 24 months", "Injections not advised when stiff"][at]}</Note>
      {phases.map((phase, index) => <g key={phase.t} opacity={lit.includes(index) ? 1 : 0.4}>
        <rect x={x(phase.from)} y={phase.y} width={x(phase.to) - x(phase.from)} height="24" rx="8" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {index < 2
          ? <W x={x(phase.to) + 8} y={phase.y + 17} size={10.5} anchor="start">{phase.t}</W>
          : <W x={(x(phase.from) + x(phase.to)) / 2} y={phase.y + 17} size={10.5} fill={lit.includes(index) ? WHITE : TEXT}>{phase.t}</W>}
      </g>)}
      <path d="M30 160 H300" stroke={LINE} strokeWidth="3" />
      {[0, 12, 24, 42].map(month => <path key={month} d={`M${x(month)} 155 V165`} stroke={LINE} strokeWidth="3" />)}
      <W x={30} y={178} size={10}>0</W><W x={x(12)} y={178} size={10}>12</W><W x={x(24)} y={178} size={10}>24</W><W x={300} y={178} size={10} anchor="end">42 months</W>
      <Say>{["Three phases that overlap", "Painful phase: about 2 to 9 months", "Stiff phase: about 4 to 12 months", "Resolution: about 12 to 42 months", "Pain relief matters most early on"][at]}</Say>
    </svg>} />;
}

function AgeLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const age = (years: number) => 30 + (years - 20) * 260 / 60;
  const lit = [[], [0, 1], [2], [3, 4], []][at];
  const tags = [{ x: 18, y: 92, t: "Women" }, { x: 18, y: 126, t: "Had it in other arm" }, { x: 166, y: 92, t: "Diabetes" }, { x: 166, y: 126, t: "Injury or surgery" }, { x: 166, y: 160, t: "Heart attack, stroke" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Who gets it" title="Middle age, women and diabetes" label="Who gets it" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An age line with 40 to 60 marked, and the things linked with frozen shoulder">
      <W x={30} y={34} size={10} anchor="start">Age</W>
      {at === 0 && <W x={age(54)} y={30} size={10.5}>UK FROST average age: 54</W>}
      <path d="M30 50 H290" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      <rect x={age(40)} y="44" width={age(60) - age(40)} height="12" rx="6" fill={at === 0 ? INK : SOFT} />
      {at === 0 && <circle cx={age(54)} cy="50" r="6" fill={GOLD} stroke={WHITE} strokeWidth="2" />}
      {[20, 40, 60, 80].map(years => <W key={years} x={age(years)} y={72} size={10}>{years}</W>)}
      {tags.map((tag, index) => <g key={tag.t} opacity={lit.includes(index) ? 1 : 0.45}><Tag x={tag.x} y={tag.y} w={136} text={tag.t} lit={lit.includes(index)} /></g>)}
      {at === 2 && <Tag x={18} y={160} w={136} text="About 13 in 100" />}
      {at === 4 && <Tag x={18} y={160} w={136} text="No cause: primary" lit />}
      <Say y={208}>{["Typically aged between 40 and 60", "More common in women", "More common with diabetes", "Can follow injury, surgery or illness", "Often no clear cause is found"][at]}</Say>
    </svg>} />;
}

function TurnOut(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const turned = at === 1;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diagnosis" title="The answer is in how it moves" label="Diagnosis" credit="Illustration: Rehyn. Seen from above; a picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An arm, seen from above, turning outwards only a little way">
      {at === 4
        ? <><Box x={160} y={58} w={210} text="Sudden or very bad pain" /><Box x={160} y={92} w={210} text="Cannot move your arm" /><Box x={160} y={126} w={210} text="Feverish or unwell" /></>
        : <>
          <Note y={30}>{["Which movements hurt most?", "Even when someone else moves it", "Diabetes test may be considered", "Often physio without a GP referral", ""][at]}</Note>
          <ellipse cx="120" cy="150" rx="58" ry="20" fill={SOFT} />
          <circle cx="120" cy="150" r="15" fill={INK} />
          <path d="M184 84 A62 62 0 0 1 246 146" fill="none" stroke={LINE} strokeWidth="4" strokeDasharray="5 6" />
          {turned && <path d="M184 84 A62 62 0 0 1 215 92.3" fill="none" stroke={GOLD} strokeWidth="7" strokeLinecap="round" />}
          <path d={turned ? "M184 146 L212 97.5" : "M184 146 L184 92"} stroke={INK} strokeWidth="9" strokeLinecap="round" />
          <circle cx="184" cy="146" r="7" fill={INK} />
          <circle cx={turned ? 212 : 184} cy={turned ? 97.5 : 92} r="8" fill={SOFT} stroke={INK} strokeWidth="2" />
          {at === 2 && <g><rect x="252" y="44" width="54" height="70" rx="5" fill={INK} opacity=".8" /><path d="M279 54 V104 M270 58 Q279 50 288 58" stroke={WHITE} strokeWidth="5" fill="none" strokeLinecap="round" /><Cross x={279} y={79} s={20} /></g>}
          {at === 3 && Array.from({ length: 14 }, (_, day) => <rect key={day} x={20 + (day % 7) * 13} y={day < 7 ? 46 : 60} width="10" height="10" rx="2" fill={INK} />)}
          <W x={120} y={186} size={10}>Seen from above</W>
        </>}
      <Say>{["From your symptoms and an examination", "Turning the arm outwards is limited", "X-rays are not routinely needed", "Not better after 2 weeks? See a GP", "Urgent GP appointment, or NHS 111"][at]}</Say>
    </svg>} />;
}

function ThreeSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const labels = at === 0 ? ["Pain relief", "Stronger", "Movement"] : ["Paracetamol", "Ibuprofen", "Stronger"];
  const steps = [{ x: 24, y: 140, w: 96 }, { x: 120, y: 108, w: 96 }, { x: 216, y: 76, w: 84 }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pain relief" title="Three steps to easing the ache" label="Pain relief" credit="Illustration: Rehyn. Check the leaflet, or ask a pharmacist."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three steps of pain relief, and a wrapped heat pack">
      <Note y={36}>{["Pain relief helps you keep moving", "At least 4 hours between doses", "Not suitable for everyone", "Codeine, or a steroid injection", "Or ice, if swollen and warm"][at]}</Note>
      {at === 4
        ? <>
          <rect x="50" y="80" width="100" height="62" rx="14" fill={TINT} stroke={INK} strokeWidth="3" />
          <path d="M72 124 q6 -10 0 -20 t0 -16 M100 124 q6 -10 0 -20 t0 -16 M128 124 q6 -10 0 -20 t0 -16" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
          <Clock x={232} y={108} r={30} hand={2.09} />
          <W x={232} y={162} size={10.5}>20 minutes</W>
        </>
        : steps.map((step, index) => { const on = at === 0 || at === index + 1; return <g key={index} opacity={on ? 1 : 0.4}>
          <rect x={step.x} y={step.y} width={step.w} height={176 - step.y} rx="4" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <W x={step.x + step.w / 2} y={step.y + 22} size={10.5} fill={on ? WHITE : TEXT}>{labels[index]}</W>
        </g>; })}
      <Say>{["Relief, stronger relief, then movement", "Paracetamol at regular intervals", "Then ibuprofen, if it suits you", "Stronger relief, for a short time", "Heat pack, wrapped, up to 20 minutes"][at]}</Say>
    </svg>} />;
}

function WallClimb(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const hand = [150, 150, 78, 110, 96][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercises" title="Gentle moves, not a gym workout" label="Exercises" credit="Illustration: Rehyn. Check with your GP or physiotherapist first."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Fingers walking up a wall, in place of heavy gym weights">
      <Note x={130} y={30}>{["No gym kit or strenuous moves", "Worse pain? Seek urgent advice", "", "Videos by BESS physiotherapists", "Stretching, strength and posture"][at]}</Note>
      <rect x="236" y="40" width="18" height="144" fill={LINE} />
      <path d="M20 184 H300" stroke={LINE} strokeWidth="3" />
      {at === 0 && <g><path d="M46 96 H94" stroke={INK} strokeWidth="5" /><rect x="38" y="82" width="12" height="28" rx="3" fill={INK} /><rect x="90" y="82" width="12" height="28" rx="3" fill={INK} /><Cross x={70} y={96} s={20} /></g>}
      {at === 2 && [150, 132, 114, 96, 78].map(y => <circle key={y} cx="228" cy={y} r="4" fill={GOLD} />)}
      {at === 4 && Array.from({ length: 6 }, (_, week) => <rect key={week} x={24 + week * 18} y="160" width="14" height="14" rx="3" fill={INK} />)}
      <Person x={170} y={162} scale={1.4} />
      <path d={`M182 146 L232 ${hand}`} stroke={INK} strokeWidth="7" strokeLinecap="round" />
      <Say>{["Keep moving; stillness worsens pain", "Get advice before you start", "Circle, wall climb, assisted lift", "No better in 6 to 12 weeks? Get advice", "Physio usually lasts at least 6 weeks"][at]}</Say>
    </svg>} />;
}

function StretchCapsule(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const needle = at === 0 || at === 1 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Injections" title="Calming the joint so it can move" label="Injections" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An injection into the shoulder, and the capsule stretching with fluid">
      <Joint x={110} y={100} capsule={at === 3 ? 52 : 36} fill={at === 3 ? TINT : "none"} />
      {at === 3 && <g stroke={GOLD} strokeWidth="3" strokeLinecap="round"><path d="M50 100 H38 M106 44 V32 M68 140 L60 150" /></g>}
      {needle && <g transform="translate(134 76) rotate(-35)">
        <path d="M0 0 H26" stroke={TEXT} strokeWidth="2.5" />
        <rect x="26" y="-8" width="50" height="16" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M76 0 H90 M90 -8 V8" stroke={INK} strokeWidth="3" />
      </g>}
      {at === 2 && <><Box x={226} y={56} w={60} text="Day 1" lit /><Box x={290} y={56} w={56} text="Day 2" lit /></>}
      {at === 4 && <g><rect x="232" y="40" width="44" height="64" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="240" y="50" width="28" height="18" rx="3" fill={TINT} /><path d="M290 100 V62 M282 70 L290 60 L298 70" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>}
      <Note y={186}>{["Usually given with a local anaesthetic", "Usually no more than 2 or 3", "Severe pain, fever? Urgent advice", "Guided by ultrasound or X-ray", "Hot and more painful? See a doctor"][at]}</Note>
      <Say y={206}>{["Eases inflammation so it moves better", "Early on, if progress is slow", "Take it easy for the first 2 days", "Fluid stretches the capsule lining", "Diabetes? Monitor blood sugar after"][at]}</Say>
    </svg>} />;
}

function ThreeDoors(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const doors = ["Physio", "Manipulation", "Release"];
  const lit = [[], [1], [2], [0, 1, 2], [1, 2]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Surgery" title="When the shoulder will not settle" label="Surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three doors for three hospital treatments, leading to the same place at 12 months">
      {at === 0
        ? Array.from({ length: 10 }, (_, index) => <circle key={index} cx={70 + index * 20} cy="34" r="6.5" fill={index === 9 ? GOLD : SOFT} />)
        : <Note y={34}>{["", "No cut, so no wound", "Small cuts around the joint", "503 people, 35 UK hospitals", "Often done as a day case"][at]}</Note>}
      {doors.map((door, index) => <g key={door} opacity={at === 0 ? 0.45 : lit.includes(index) ? 1 : 0.4}>
        <rect x={39 + index * 90} y="56" width="62" height="80" rx="6" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <circle cx={90 + index * 90} cy="100" r="3.5" fill={lit.includes(index) ? WHITE : INK} />
        <W x={70 + index * 90} y={153} size={10}>{door}</W>
      </g>)}
      {at === 3 && <><path d="M30 170 H300" stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" /><W x={300} y={188} size={10} anchor="end">12 months</W></>}
      <Say y={208}>{["Around 1 in 10 referred to hospital", "Moved under anaesthetic to loosen it", "Keyhole surgery releases the capsule", "All three similar at 12 months", "Move early and keep up exercises"][at]}</Say>
    </svg>} />;
}

function Pillows(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tiles = [{ x: 14, y: 16, t: "Sleeping" }, { x: 166, y: 16, t: "Sitting" }, { x: 14, y: 104, t: "Reaching" }, { x: 166, y: 104, t: "Housework" }];
  const drawings = [
    <g key="bed"><rect x="12" y="44" width="116" height="12" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><ellipse cx="26" cy="38" rx="13" ry="5" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx="30" cy="27" r="8" fill={SOFT} /><ellipse cx="74" cy="34" rx="34" ry="9" fill={INK} /><ellipse cx="72" cy="20" rx="16" ry="5" fill={GOLD} /><ellipse cx="116" cy="34" rx="6" ry="10" fill={WHITE} stroke={INK} strokeWidth="2" /></g>,
    <g key="chair"><path d="M40 14 V58 M40 46 H84 M46 46 V60 M80 46 V60" stroke={INK} strokeWidth="3" strokeLinecap="round" fill="none" /><circle cx="58" cy="14" r="7" fill={SOFT} /><path d="M56 22 L54 42 L78 42 L80 58" stroke={SOFT} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" /><ellipse cx="46" cy="36" rx="5" ry="9" fill={GOLD} /></g>,
    <g key="reach"><circle cx="50" cy="12" r="7" fill={SOFT} /><path d="M50 20 V46 M50 46 L42 62 M50 46 L58 62" stroke={SOFT} strokeWidth="6" strokeLinecap="round" fill="none" /><path d="M52 26 L56 40 L72 26" stroke={GOLD} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" /><path d="M84 24 H124" stroke={INK} strokeWidth="3" /></g>,
    <g key="bags"><rect x="30" y="30" width="30" height="28" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M37 30 Q45 16 53 30" fill="none" stroke={INK} strokeWidth="2.5" /><rect x="80" y="30" width="30" height="28" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M87 30 Q95 16 103 30" fill="none" stroke={INK} strokeWidth="2.5" /></g>,
  ];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Daily tasks" title="Pillows, elbows and short bursts" label="Daily tasks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four everyday tasks: sleeping, sitting, reaching and housework">
      {tiles.map((tile, index) => { const on = at === 4 || at === index; return <g key={tile.t} transform={`translate(${tile.x} ${tile.y})`} opacity={on ? 1 : 0.4}>
        <rect width="140" height="80" rx="10" fill={WHITE} stroke={at === index ? GOLD : INK} strokeWidth={at === index ? 3 : 2} />
        {drawings[index]}
        <W x={70} y={74} size={10}>{tile.t}</W>
      </g>; })}
      <Say y={206}>{["Lie on your good side, with pillows", "A cushion behind your lower back", "Elbow bent and close to your side", "Short sweeps, two bags, lots of breaks", "Short bursts, with regular breaks"][at]}</Say>
    </svg>} />;
}

function HundredRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const round = 2 * Math.PI * 56;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diabetes" title="A known link, still not fully explained" label="Diabetes" credit="Illustration: Rehyn. Around 13 in 100 is an estimate in NICE guidance."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ring with 13 in 100 filled, beside a blood sugar meter">
      <Note y={24}>{["It is unclear why", "", "Often resolves over time", "If diabetes is suspected", "Talk to your doctor first"][at]}</Note>
      <g opacity={at === 0 || at === 2 ? 1 : 0.55}>
        <circle cx="92" cy="106" r="56" fill="none" stroke={LINE} strokeWidth="18" />
        <circle cx="92" cy="106" r="56" fill="none" stroke={INK} strokeWidth="18" strokeDasharray={`${round * 0.13} ${round}`} transform="rotate(-90 92 106)" />
        <W x={92} y={110} size={26} serif>13</W>
        <W x={92} y={128} size={10}>in 100</W>
      </g>
      {at === 1
        ? <><Tag x={182} y={50} w={124} text="Eyes" lit /><Tag x={182} y={84} w={124} text="Kidneys" lit /><Tag x={182} y={118} w={124} text="Nerves" lit /></>
        : <g opacity={at === 3 || at === 4 ? 1 : 0.4}>
          <rect x="212" y="50" width="64" height="96" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
          <rect x="222" y="62" width="44" height="28" rx="4" fill={TINT} stroke={SOFT} strokeWidth="1.5" />
          <circle cx="244" cy="120" r="8" fill={INK} />
          {at === 4 && <path d="M294 112 V66 M286 74 L294 64 L302 74" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
        </g>}
      <Say y={200}>{["Around 13 in 100 with diabetes", "Long-standing diabetes, or older age", "Often more severe, harder to treat", "A GP may test for diabetes", "Blood sugar may rise for a few days"][at]}</Say>
    </svg>} />;
}

function DeskDrive(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const desk = at <= 1 ? 1 : 0.35, car = at >= 2 ? 1 : 0.35;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and driving" title="Work, the desk and the drive home" label="Work and driving" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk with the screen straight ahead, and a car">
      <Note y={30}>{["Get up and move every so often", "Avoid manual work that hurts", "An OT can advise on adaptations", "After hydrodilatation: work next day"][at]}</Note>
      <g opacity={desk}>
        <rect x="56" y="78" width="58" height="40" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M85 118 V128" stroke={INK} strokeWidth="3" />
        <rect x="62" y="120" width="46" height="6" rx="2" fill={SOFT} />
        <rect x="20" y="128" width="130" height="7" rx="3" fill={INK} />
        <path d="M28 135 V172 M142 135 V172" stroke={INK} strokeWidth="4" />
        {at === 0 && <path d="M30 64 L30 112 M30 64 L22 74 M30 64 L38 74" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      </g>
      <g opacity={car}>
        <path d="M176 142 L188 118 Q194 108 206 108 H262 Q274 108 282 118 L298 132 Q304 134 304 142 V152 H176 Z" fill={INK} />
        <rect x="200" y="116" width="30" height="16" rx="3" fill={TINT} /><rect x="238" y="116" width="34" height="16" rx="3" fill={TINT} />
        <circle cx="202" cy="154" r="11" fill={TEXT} stroke={WHITE} strokeWidth="3" /><circle cx="278" cy="154" r="11" fill={TEXT} stroke={WHITE} strokeWidth="3" />
        {at === 2 && <g><rect x="228" y="48" width="28" height="36" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M234 58 H250 M234 66 H250 M234 74 H244" stroke={SOFT} strokeWidth="2" /></g>}
        {at === 3 && <g><circle cx="232" cy="68" r="9" fill="none" stroke={INK} strokeWidth="3" /><path d="M241 68 H262 M256 68 V76" stroke={INK} strokeWidth="3" fill="none" /><Cross x={246} y={68} s={16} /></g>}
      </g>
      <Say y={200}>{["Screen and keyboard straight ahead", "Employers make reasonable changes", "Check if the DVLA needs to know", "Arrange a lift home after an injection"][at]}</Say>
    </svg>} />;
}

function LongRoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const road = "M30 178 C120 178, 60 112, 160 112 S250 50, 292 44";
  const walker = [[30, 178], [160, 112], [91, 145], [91, 145], [282, 46]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Recovery" title="The long road back to movement" label="Recovery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A long winding road to a flag, with checkpoints along the way">
      {at === 4 && <Note x={110} y={24}>1 in 10: hospital treatment</Note>}
      <path d={road} fill="none" stroke={LINE} strokeWidth="16" strokeLinecap="round" />
      <path d={road} fill="none" stroke={WHITE} strokeWidth="2" strokeDasharray="6 8" />
      <g opacity={at === 3 ? 1 : 0.4}><path d="M91 145 V122" stroke={at === 3 ? GOLD : INK} strokeWidth="3" /><W x={60} y={118} size={10}>6 to 12 weeks</W></g>
      <g opacity={at === 1 ? 1 : 0.4}><circle cx="160" cy="112" r="6" fill={at === 1 ? GOLD : INK} /><W x={160} y={96} size={10}>18 to 24 months</W></g>
      <g opacity={at === 0 || at === 4 ? 1 : 0.5}><path d="M292 44 V16" stroke={INK} strokeWidth="3" /><path d="M292 16 L310 22 L292 28 Z" fill={GOLD} /></g>
      {(at === 0 || at === 1) && <W x={282} y={30} size={10} anchor="end">{at === 0 ? "1 to 3 years" : "2 to 3 years"}</W>}
      <circle cx={walker[0]} cy={walker[1]} r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" className={at === 2 && !still ? "lib-why-pulse" : undefined} />
      <Say y={206}>{["Usually settles in one to three years", "Usually 18 to 24 months; some longer", "Keep using it, in short bursts", "No progress by 6 to 12 weeks? Check in", "Most make a full recovery"][at]}</Say>
    </svg>} />;
}

export function SoftPieceView({ piece, ...props }: { piece: SoftPiece } & PieceProps) {
  switch (piece) {
    case "fm-volume-dial": return <VolumeDial {...props} />;
    case "fm-four-tiles": return <FourTiles {...props} />;
    case "fm-stepping-path": return <SteppingPath {...props} />;
    case "fm-trigger-ring": return <TriggerRing {...props} />;
    case "fm-build-up": return <BuildUp {...props} />;
    case "fm-six-weeks": return <SixWeeks {...props} />;
    case "fm-body-mind": return <BodyMind {...props} />;
    case "fm-night-room": return <NightRoom {...props} />;
    case "fm-boom-bust": return <BoomBust {...props} />;
    case "fm-flare-wave": return <FlareWave {...props} />;
    case "fm-desk-adjust": return <DeskAdjust {...props} />;
    case "fm-path-light": return <PathLight {...props} />;
    case "fs-capsule": return <Capsule {...props} />;
    case "fs-three-phases": return <ThreePhases {...props} />;
    case "fs-age-line": return <AgeLine {...props} />;
    case "fs-turn-out": return <TurnOut {...props} />;
    case "fs-three-steps": return <ThreeSteps {...props} />;
    case "fs-wall-climb": return <WallClimb {...props} />;
    case "fs-stretch-capsule": return <StretchCapsule {...props} />;
    case "fs-three-doors": return <ThreeDoors {...props} />;
    case "fs-pillows": return <Pillows {...props} />;
    case "fs-hundred-ring": return <HundredRing {...props} />;
    case "fs-desk-drive": return <DeskDrive {...props} />;
    case "fs-long-road": return <LongRoad {...props} />;
  }
}
