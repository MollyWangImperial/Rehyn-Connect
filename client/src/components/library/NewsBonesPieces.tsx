import type { NewsPiece } from "@/content/ischaemic-news";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, SERIF, useSection } from "./NewsMemoryPieces";
import { Chips, credit, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Bones, joints & muscles pages' own pieces (content/ischaemic-news.ts, keyed "<condition>/<piece>"), drawn
// in the page's card colours (the --t-… variables), like the Heart & lungs and Diabetes pieces. Each is steered
// by the card's sections; pictures show ideas, not anyone's own joints, scans or results.

const BONES_PIECES = [
  // Osteoarthritis
  "oa-week-ruler", "oa-two-knees", "oa-xray-gauge", "oa-two-hands", "oa-sit-stand", "oa-ladder", "oa-knee-load", "oa-implant-years", "oa-stairs", "oa-hand-tools", "oa-three-ways", "oa-loop",
  // Back pain
  "back-spine-dial", "back-three-lights", "back-two-scans", "back-alarm", "back-five-moves", "back-pill-days", "back-physio-path", "back-hundred", "back-desk", "back-bed", "back-three-paths", "back-neck-pillow",
  // Osteoporosis
  "op-honeycomb", "op-tscore", "op-four-risks", "op-wedge", "op-tablet-morning", "op-year-calendar", "op-food-sun", "op-three-panels", "op-safe-home", "op-heal-weeks", "op-hip-hinge", "op-tooth",
  // Rheumatoid arthritis
  "ra-joint-lining", "ra-jigsaw", "ra-body-spots", "ra-flare-wave", "ra-week-mtx", "ra-steps", "ra-bridge", "ra-hand-moves", "ra-morning-clock", "ra-batteries", "ra-adjust-desk", "ra-shield", "ra-family-line",
] as const;
type BonesPiece = (typeof BONES_PIECES)[number];
export const isBonesPiece = (piece: NewsPiece): piece is BonesPiece => (BONES_PIECES as readonly string[]).includes(piece);

/** A knee joint side on, centred on (x, y): thigh bone above, shin below, cartilage between (`worn` thins it). */
export const Knee = ({ x, y, scale = 1, worn = false, spur = false }: { x: number; y: number; scale?: number; worn?: boolean; spur?: boolean }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} strokeLinejoin="round">
    <path d="M-26 -90 V-20 C-26 -6, -14 2, 0 2 C14 2, 26 -6, 26 -20 V-90" fill={WHITE} stroke={INK} strokeWidth="3" />
    <path d="M-28 90 V22 C-28 12, -14 8, 0 8 C14 8, 28 12, 28 22 V90" fill={WHITE} stroke={INK} strokeWidth="3" />
    <path d={worn ? "M-18 3 C-6 6, 6 2, 18 5" : "M-24 0 C-10 8, 10 8, 24 0 M-26 10 C-10 4, 10 4, 26 10"} stroke={SOFT} strokeWidth={worn ? 2 : 5} fill="none" />
    {spur && <path d="M26 18 l10 -4 l-6 10 Z" fill={TEXT} />}
  </g>;
/** A hand, palm out, fingertips up, centred on (x, y); `dots` mark joints by index (0 thumb base). */
const Hand = ({ x, y, dots = [] as number[], scale = 1 }: { x: number; y: number; dots?: number[]; scale?: number }) => {
  const joints = [[-40, 14], [-22, -28], [-10, -42], [2, -38], [14, -26], [-22, -4], [-10, -8], [2, -6], [14, 0]];
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M-30 70 C-34 40, -48 30, -50 10 C-50 0, -40 0, -36 10 L-28 30 V-40 a6 6 0 0 1 12 0 V-10 V-56 a6 6 0 0 1 12 0 V-10 V-52 a6 6 0 0 1 12 0 V-8 V-40 a6 6 0 0 1 12 0 V30 C32 56, 20 70, 10 70 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    {dots.map(index => <circle key={index} cx={joints[index][0]} cy={joints[index][1]} r="5" fill={GOLD} />)}
  </g>;
};

// ==== Osteoarthritis =======================================================================================

function WeekRuler(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const weeks = ["1", "2", "3", "6", "12"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="After a knee replacement" title="Week three: sore, swollen, on the way" label="Recovery" credit="Illustration: Rehyn. Your own team will guide your recovery."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline of the first three months after a knee replacement">
      <path d="M30 120 H290" stroke={LINE} strokeWidth="10" strokeLinecap="round" />
      {weeks.map((week, index) => <g key={week}><circle cx={40 + index * 60} cy="120" r={index === 2 ? 12 : 7} fill={index === 2 ? INK : SOFT} /><W x={40 + index * 60} y={150} size={10.5}>Week {week}</W></g>)}
      {at === 4 ? <><rect x="50" y="34" width="220" height="44" rx="12" fill={INK} /><W x={160} y={53} size={11} fill={WHITE}>Leg pain and swelling with breathing</W><W x={160} y={69} size={11} fill={WHITE}>trouble or chest pain: 999</W></>
        : <W x={160} y={60} size={11.5}>{["Months to recover fully", "One crutch, then a stick", "Bruising pain is normal for a while", "Heavy jobs wait about three months"][at]}</W>}
      <W x={160} y={196} size={11}>Swelling can last up to three months</W>
    </svg>} />;
}

function TwoKnees(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="What it is" title="Not worn out, repairing less well" label="Osteoarthritis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A healthy knee and a knee with thinner cartilage and a small bony spur">
      <Knee x={90} y={106} scale={0.95} />
      <Knee x={230} y={106} scale={0.95} worn={at >= 1} spur={at === 1 || at === 2} />
      <W x={90} y={210} size={10.5}>Smooth cartilage</W><W x={230} y={210} size={10.5}>{at >= 1 ? "Thinner, rougher" : "Joints repair all the time"}</W>
      {at === 3 && <W x={160} y={20} size={11}>Most often over 45</W>}
      {at === 4 && <W x={160} y={20} size={11}>It does not have to get worse</W>}
    </svg>} />;
}

function XrayGauge(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Flare-ups" title="Why the X-ray and the pain disagree" label="Good days and bad" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An X-ray beside a pain gauge pointing to a different level">
      <rect x="30" y="30" width="110" height="140" rx="10" fill={TEXT} /><g transform="translate(85 100) scale(0.55)"><Knee x={0} y={0} worn /></g>
      <path d="M180 140 A50 50 0 0 1 280 140" stroke={LINE} strokeWidth="12" fill="none" />
      <path d={`M230 140 L${230 + 40 * Math.cos(Math.PI * (at === 1 ? 0.25 : at === 2 ? 0.8 : 0.5))} ${140 - 40 * Math.sin(Math.PI * (at === 1 ? 0.25 : at === 2 ? 0.8 : 0.5))}`} stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <W x={230} y={166} size={10.5}>Pain today</W>
      <W x={160} y={204} size={11.5}>{["Symptoms come and go", "Good days and bad days", "Damage and pain often differ", "X-rays are rarely needed", "Ice, rest; hot and swollen: GP"][at]}</W>
    </svg>} />;
}

function TwoHands(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Which arthritis?" title="Same word, two different conditions" label="Osteo or rheumatoid" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two hands: osteoarthritis at the thumb base and fingertips, rheumatoid in many joints on both hands">
      <Hand x={90} y={100} dots={at === 2 || at === 0 ? [0, 1, 2, 3, 4] : [0]} />
      <Hand x={230} y={100} dots={at === 2 || at === 0 ? [5, 6, 7, 8, 0] : [5, 6]} />
      <W x={90} y={196} size={11}>Osteoarthritis</W><W x={230} y={196} size={11}>Rheumatoid</W>
      <W x={160} y={20} size={11}>{["Two different conditions", "Stiffness: under 30 minutes, or longer", "Which joints, and both sides", "Rheumatoid can affect more than joints", "Don't self-diagnose: see a GP"][at]}</W>
    </svg>} />;
}

function SitStand(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Strength" title="Stronger muscles, steadier joints" label="Strength exercises" credit="Illustration: Rehyn. Check with your GP or physiotherapist first."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person standing up from a chair without using their hands">
      <path d="M60 180 V120 H120 V180 M60 150 H120 M60 120 V70" stroke={SOFT} strokeWidth="5" fill="none" strokeLinecap="round" />
      <g className={still ? undefined : "lib-v2-breathe is-slow"}><Person x={100} y={110} scale={1.1} /></g>
      {at === 4 ? <>{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}><rect x={160 + index * 20} y="80" width="16" height="30" rx="5" fill={index === 1 || index === 4 ? INK : WHITE} stroke={INK} strokeWidth="1.5" /><W x={168 + index * 20} y={100} size={9} fill={index === 1 || index === 4 ? WHITE : TEXT}>{day}</W></g>)}<W x={230} y={136} size={11}>At least 2 days a week</W></>
        : <W x={230} y={100} size={11.5}>{["Strong muscles steady joints", "Check with your GP first", "Knees: leg raises, sit to stand", "Hips: bridging, side leg lifts"][at]}</W>}
    </svg>} />;
}

function Ladder(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rungs = ["Gels and creams", "Tablets", "Capsaicin cream", "Steroid injection"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pain relief" title="Gels first, then the other options" label="Painkillers" credit="Illustration: Rehyn. Your GP advises what suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Steps of pain relief: gels, tablets, capsaicin cream, steroid injections">
      {rungs.map((rung, index) => <g key={rung} transform={`translate(${40 + index * 20} ${160 - index * 40})`}>
        <rect width="200" height="30" rx="10" fill={at === index + 1 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={100} y={20} size={11} fill={at === index + 1 ? WHITE : TEXT}>{rung}</W>
      </g>)}
      {at === 0 && <W x={160} y={24} size={11}>Alongside self-help, not instead</W>}
    </svg>} />;
}

function KneeLoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Weight" title="Every step weighs on the knee" label="Weight" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A knee with an arrow showing the force of up to three times body weight">
      <Knee x={110} y={110} scale={0.9} />
      <path d="M200 40 V100" stroke={INK} strokeWidth={at === 2 ? 6 : 12} strokeLinecap="round" /><path d="M188 90 L200 108 L212 90" stroke={INK} strokeWidth="4" fill="none" />
      <W x={240} y={80} size={11} anchor="start">{at === 2 ? "A little lighter" : "Up to 3 times"}</W><W x={240} y={96} size={11} anchor="start">{at === 2 ? "" : "body weight"}</W>
      <W x={160} y={204} size={11.5}>{["Extra weight strains joints", "It can raise inflammation too", "A small loss can help", "A balanced, reduced diet", "Exercise matters at any weight"][at]}</W>
    </svg>} />;
}

function ImplantYears(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Joint replacement" title="When a new joint is worth it" label="Replacement" credit="Illustration: Rehyn. A picture of the idea, not an implant."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A knee implant and how long replacements can last">
      <g transform="translate(80 106)"><path d="M-26 -80 V-20 C-26 -8, -14 -2, 0 -2 C14 -2, 26 -8, 26 -20 V-80" fill={WHITE} stroke={INK} strokeWidth="3" />
        <rect x="-30" y="-12" width="60" height="12" rx="4" fill={SOFT} /><rect x="-30" y="2" width="60" height="10" rx="3" fill={TINT} stroke={INK} strokeWidth="2" />
        <path d="M-28 80 V16 H28 V80" fill={WHITE} stroke={INK} strokeWidth="3" /></g>
      {at === 4 ? <><rect x="160" y="70" width="60" height="30" rx="8" fill={SOFT} /><W x={190} y={90} size={11} fill={WHITE}>Hip: 15+</W><rect x="160" y="110" width="120" height="30" rx="8" fill={INK} /><W x={220} y={130} size={11} fill={WHITE}>Knee: up to 25</W><W x={220} y={160} size={10.5}>years, for many</W></>
        : <W x={230} y={110} size={11.5}>{["When pain rules life", "Metal and plastic parts", "Prepare while you wait", "Months to recover"][at]}</W>}
    </svg>} />;
}

function Stairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Around the house" title="Up with the good, down with the bad" label="Stairs and chairs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Stairs with a handrail, and a high chair with armrests">
      {at === 0 ? <>
        <path d="M30 190 H80 V160 H130 V130 H180 V100 H230 V70 H290" stroke={INK} strokeWidth="4" fill="none" />
        <path d="M40 150 L280 30" stroke={SOFT} strokeWidth="5" strokeLinecap="round" />
        <W x={100} y={70} size={11}>Up: good leg first</W><W x={220} y={150} size={11}>Down: bad leg first</W>
      </> : at === 1 || at === 2 ? <>
        <path d="M110 70 V180 M210 70 V180 M100 120 H220 M110 120 C110 100, 120 90, 130 90 M210 120 C210 100, 200 90, 190 90" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
        <rect x="104" y="96" width="112" height="24" rx="6" fill={TINT} stroke={INK} strokeWidth="2" />
        <W x={160} y={204} size={11.5}>{at === 1 ? "As high as you can, feet flat" : "Armrests help you push up"}</W>
      </> : <W x={160} y={110} size={12}>{at === 3 ? "Rails, a bath board, non-slip mats" : "Councils assess needs for free"}</W>}
    </svg>} />;
}

function HandTools(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Hands" title="Easing the grip on everyday jobs" label="Hand arthritis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hand with the thumb base and fingertip joints marked, and gadgets that help">
      <Hand x={100} y={100} dots={at === 0 ? [0, 1, 2, 3, 4] : [0]} />
      {at === 2 && <><rect x="200" y="70" width="80" height="22" rx="8" fill={SOFT} /><W x={240} y={86} size={10} fill={WHITE}>Key turner</W><rect x="200" y="104" width="80" height="22" rx="8" fill={SOFT} /><W x={240} y={120} size={10} fill={WHITE}>Tap turner</W></>}
      {at === 3 && <path d="M64 120 C70 140, 96 150, 110 140" stroke={INK} strokeWidth="10" fill="none" opacity=".5" />}
      <W x={160} y={204} size={11.5}>{["Thumb base and finger joints", "It often settles after a few years", "Gadgets ease the strain", "A splint for the thumb base", "Warm water, then gentle movement"][at]}</W>
    </svg>} />;
}

function ThreeWays(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const ways = [{ t: "Walk", i: 1 }, { t: "Swim", i: 2 }, { t: "Cycle", i: 3 }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Moving" title="Walk, swim, cycle: gentle on joints" label="Low-impact exercise" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Walking, swimming and cycling, building to 150 minutes a week">
      {ways.map((way, index) => <g key={way.t} opacity={at === 0 || at === way.i || at === 4 ? 1 : 0.35}><circle cx={70 + index * 90} cy="80" r="34" fill={WHITE} stroke={INK} strokeWidth="3" /><W x={70 + index * 90} y={85} size={12}>{way.t}</W></g>)}
      <rect x="40" y="150" width="240" height="20" rx="10" fill={LINE} /><rect x="40" y="150" width={at === 4 ? 240 : 80} height="20" rx="10" fill={INK} />
      <W x={160} y={198} size={11}>{at === 4 ? "150 minutes a week, built up slowly" : "Low impact, and something you enjoy"}</W>
    </svg>} />;
}

function PainLoop(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const nodes = [{ t: "Pain", x: 160, y: 40 }, { t: "Sleep", x: 70, y: 150 }, { t: "Mood", x: 250, y: 150 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pain, sleep and mood" title="Breaking the loop" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Pain, sleep and mood linked in a loop">
      <path d="M140 52 L90 130 M100 160 H220 M230 130 L180 52" stroke={SOFT} strokeWidth="4" strokeDasharray={at === 3 ? "6 8" : undefined} />
      {nodes.map((node, index) => <g key={node.t}><circle cx={node.x} cy={node.y} r="28" fill={(at === 1 && index === 1) || (at === 2 && index === 2) || at === 0 ? INK : WHITE} stroke={INK} strokeWidth="3" />
        <W x={node.x} y={node.y + 5} size={11} fill={(at === 1 && index === 1) || (at === 2 && index === 2) || at === 0 ? WHITE : TEXT}>{node.t}</W></g>)}
      <W x={160} y={208} size={11}>{["Each can make the others worse", "Poor sleep lowers the pain threshold", "Low for weeks? Talk to your doctor", "Exercise, routine, people", "Pain programmes and support"][at]}</W>
    </svg>} />;
}

// ==== Back pain ============================================================================================

/** A column of vertebrae, centred on x, top at y; `lit` marks one by index; `disc` shows a bulging disc. */
const Spine = ({ x, y, count = 7, lit = -1, disc = false, scale = 1 }: { x: number; y: number; count?: number; lit?: number; disc?: boolean; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    {Array.from({ length: count }, (_, index) => <g key={index}>
      <rect x={-26 + Math.sin(index / 2.4) * 8} y={index * 24} width="52" height="16" rx="6" fill={index === lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
      {index < count - 1 && <ellipse cx={Math.sin(index / 2.4) * 8 + (disc && index === count - 3 ? 6 : 0)} cy={index * 24 + 20} rx={disc && index === count - 3 ? 26 : 20} ry="3" fill={disc && index === count - 3 ? GOLD : SOFT} />}
    </g>)}
  </g>;

function SpineDial(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What hurts" title="Sore, sensitive, rarely damaged" label="Back pain" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A spine of stacked vertebrae, and a volume dial">
      <Spine x={90} y={22} disc={at === 2} />
      {at === 3 ? <>
        <path d="M180 140 A50 50 0 0 1 280 140" stroke={LINE} strokeWidth="12" fill="none" />
        <path d="M230 140 L262 108" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <W x={230} y={166} size={10.5}>Sleep, stress, fear, moving less</W>
      </> : <W x={230} y={110} size={11.5}>{["One of the strongest parts", "Often no single cause", "A disc can press on a nerve", "", "Ageing is normal, not damage"][at]}</W>}
    </svg>} />;
}

function ThreeLights(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lights = [{ t: "999: numb, bladder, both legs", fill: INK }, { t: "111: feverish, unwell", fill: GOLD }, { t: "GP: no better after weeks", fill: SOFT }];
  const lit = [-1, 0, 1, 2, 0][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Urgent signs" title="Three levels of urgent" label="Red flags" credit="Illustration: Rehyn. Rare, but important to know."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three levels: 999, 111 and the GP">
      <rect x="30" y="20" width="70" height="180" rx="20" fill={TEXT} />
      {lights.map((light, index) => <g key={light.t}><circle cx="65" cy={50 + index * 60} r="22" fill={light.fill} opacity={lit < 0 || index === lit ? 1 : 0.25} />
        <W x={118} y={55 + index * 60} size={10.5} anchor="start" fill={index === lit ? INK : TEXT}>{light.t}</W></g>)}
    </svg>} />;
}

function TwoScans(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Scans" title="Why the scanner can wait" label="Scans" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two spine scans showing the same disc bulge, one with pain and one without">
      {[90, 230].map((x, index) => <g key={x}><rect x={x - 60} y="20" width="120" height="150" rx="10" fill={TEXT} /><Spine x={x} y={30} count={6} disc scale={0.85} /><W x={x} y={190} size={11}>{index === 0 ? "Pain" : "No pain"}</W></g>)}
      <W x={160} y={212} size={10.5}>{["Talking and an examination", "NICE: not routinely", "Normal changes are common", "After injury, or a serious worry", "MRI: 15 minutes to an hour"][at]}</W>
    </svg>} />;
}

function Alarm(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Long-lasting pain" title="An alarm that keeps ringing" label="Persistent pain" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An alarm over a healed back, turning down">
      <circle cx="110" cy="80" r="40" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="110" cy="80" r="10" fill={at === 4 ? SOFT : GOLD} className={still || at === 4 ? undefined : "lib-why-pulse"} />
      {at !== 4 && <path d="M60 56 q-12 24 0 48 M160 56 q12 24 0 48" stroke={GOLD} strokeWidth="3" fill="none" />}
      <path d="M200 140 A40 40 0 0 1 280 140" stroke={LINE} strokeWidth="10" fill="none" /><path d={`M240 140 L${at === 4 ? 214 : 266} ${at === 4 ? 116 : 116}`} stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <W x={160} y={196} size={11.5}>{["Pain is meant to protect", "Over three months: chronic pain", "Hurt does not always mean harm", "Body, thoughts, life: all count", "It can become less sensitive"][at]}</W>
    </svg>} />;
}

function FiveMoves(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const moves = ["Pelvic tilt", "Knee rolls", "Knees to chest", "Back stabiliser", "Hamstring stretch"];
  const lit = [[], [], [0, 1, 2], [3, 4], [0, 1, 2, 3, 4]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exercise" title="Five gentle moves to start" label="Back exercises" credit="Illustration: Rehyn. Get advice from a physiotherapist first."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five gentle back exercises">
      {moves.map((move, index) => <g key={move} transform={`translate(40 ${18 + index * 32})`} opacity={lit.includes(index) || at < 2 ? 1 : 0.35}>
        <rect width="240" height="26" rx="10" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={120} y={18} size={11} fill={lit.includes(index) ? WHITE : TEXT}>{move}</W>
      </g>)}
      <W x={160} y={198} size={11}>{["Strong muscles, fewer episodes", "Get advice first; start slowly", "Lying down", "On all fours, and standing", "Any exercise you enjoy helps"][at]}</W>
    </svg>} />;
}

function PillDays(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Painkillers" title="The right pill, briefly" label="Painkillers" credit="Illustration: Rehyn. Check with a pharmacist or GP."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Ibuprofen for up to 10 days, codeine for up to 3">
      {[{ t: "Ibuprofen tablets", n: 10, y: 50 }, { t: "Codeine", n: 3, y: 110 }].map(row => <g key={row.t} opacity={(at === 1 && row.n === 10) || (at === 3 && row.n === 3) || at === 0 ? 1 : 0.4}>
        <W x={30} y={row.y - 10} size={11} anchor="start">{row.t}</W>
        {Array.from({ length: 10 }, (_, day) => <rect key={day} x={30 + day * 26} y={row.y} width="22" height="22" rx="5" fill={day < row.n ? INK : WHITE} stroke={INK} strokeWidth="1.5" />)}
      </g>)}
      <W x={160} y={176} size={11}>{["Ibuprofen may help; not for everyone", "No more than 10 days without advice", "Some people should check first", "Codeine: only for a short time", "They don't speed up recovery"][at]}</W>
      <W x={160} y={196} size={10}>Days, at most, unless a doctor advises</W>
    </svg>} />;
}

function PhysioPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Physiotherapy" title="Book your own physio" label="Physiotherapy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from home to a physiotherapist's door">
      <path d="M40 170 C100 170, 120 90, 180 90 S250 60, 280 60" stroke={LINE} strokeWidth="14" fill="none" strokeLinecap="round" />
      <rect x="20" y="150" width="40" height="34" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M16 152 L40 132 L64 152" stroke={INK} strokeWidth="2" fill="none" />
      <rect x="264" y="30" width="34" height="50" rx="4" fill={INK} />
      {at === 1 && <><rect x="120" y="120" width="100" height="26" rx="8" fill={INK} /><W x={170} y={138} size={10.5} fill={WHITE}>Refer yourself</W></>}
      <W x={160} y={208} size={11}>{["Not settling over 2 to 3 weeks?", "Often no GP referral needed", "Questions, then a plan", "Exercises, advice, hands-on help", "Practise at home between visits"][at]}</W>
    </svg>} />;
}

function Hundred(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Injections and surgery" title="Surgery: the rare exception" label="Injections and surgery" credit="Illustration: Rehyn. A picture of the idea, not a figure."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Many people, very few of them needing an operation">
      {Array.from({ length: 40 }, (_, index) => <circle key={index} cx={30 + (index % 10) * 28} cy={40 + Math.floor(index / 10) * 30} r="9" fill={index === 0 ? INK : SOFT} opacity={index === 0 ? 1 : 0.55} />)}
      <W x={160} y={176} size={11.5}>{["Very few people need an operation", "NICE: spinal injections not for back pain", "Sealing nerves, for some", "Decompression, for stenosis or sciatica", "Losing bladder control: urgent"][at]}</W>
    </svg>} />;
}

function Desk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Back to work, back sooner" label="Work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk, a supportive chair and a reminder to move">
      <path d="M150 100 H290 M170 100 V170 M270 100 V170" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <rect x="200" y="62" width="60" height="38" rx="4" fill={TINT} stroke={INK} strokeWidth="2" />
      <path d="M70 90 V150 H130 M70 150 V180 M130 150 V180" stroke={SOFT} strokeWidth="6" strokeLinecap="round" fill="none" />
      <Person x={104} y={124} scale={0.9} />
      {at === 4 && <><rect x="150" y="20" width="130" height="28" rx="10" fill={INK} /><W x={215} y={39} size={10.5} fill={WHITE}>Access to Work</W></>}
      <W x={160} y={206} size={11}>{["Work often helps recovery", "Talk to your employer", "Chair, desk and regular breaks", "Bend your knees, keep it close", "Grants that don't need paying back"][at]}</W>
    </svg>} />;
}

function Bed(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Sleep" title="No perfect mattress" label="Sleep" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person sleeping on their side with a pillow between the knees">
      <rect x="30" y="80" width="260" height="70" rx="12" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="40" y="90" width="56" height="30" rx="10" fill={TINT} />
      <path d="M100 116 C140 96, 200 130, 260 112" stroke={INK} strokeWidth="14" strokeLinecap="round" fill="none" /><circle cx="86" cy="106" r="13" fill={INK} />
      {at === 0 && <ellipse cx="226" cy="118" rx="16" ry="8" fill={SOFT} />}
      <W x={160} y={40} size={11.5}>{["Whatever feels comfortable is best", "Sleep lowers stress and pain", "Seven and a half to eight hours", "A warm bath; dark, quiet, cool", "Worse at night? See a GP"][at]}</W>
    </svg>} />;
}

function ThreePaths(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fear of moving" title="Hurt is not harm" label="Getting past fear" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three patterns: avoiding, boom and bust, and pacing">
      <g opacity={at === 2 || at === 0 ? 1 : 0.35}><path d="M30 60 H290" stroke={SOFT} strokeWidth="4" /><W x={30} y={50} size={10.5} anchor="start">Avoiding everything</W></g>
      <g opacity={at === 2 ? 1 : 0.35}><path d="M30 120 L60 90 L90 130 L120 86 L150 132 L180 92 L210 130 L240 88 L270 128" stroke={GOLD} strokeWidth="4" fill="none" /><W x={30} y={80} size={10.5} anchor="start">Boom and bust</W></g>
      <g opacity={at === 3 || at === 4 || at === 1 ? 1 : 0.35}><path d="M30 190 H80 V180 H130 V170 H180 V160 H230 V150 H290" stroke={INK} strokeWidth="4" fill="none" /><W x={30} y={146} size={10.5} anchor="start">Pacing</W></g>
      <W x={230} y={146} size={10.5}>{["Fear can feed pain", "Moving is almost always safe", "", "Build up gradually", "Setbacks happen"][at]}</W>
    </svg>} />;
}

function NeckPillow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Neck pain" title="Same rules, smaller spine" label="Neck pain" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A neck, a low firm pillow and timers">
      <circle cx="90" cy="60" r="30" fill={WHITE} stroke={INK} strokeWidth="3" /><Spine x={90} y={94} count={4} scale={0.6} />
      {at === 2 && <><rect x="170" y="60" width="110" height="28" rx="10" fill={SOFT} /><W x={225} y={79} size={10.5} fill={WHITE}>Cold: 5 minutes</W><rect x="170" y="100" width="110" height="28" rx="10" fill={INK} /><W x={225} y={119} size={10.5} fill={WHITE}>Warm, wrapped</W></>}
      {at === 3 && <rect x="170" y="90" width="110" height="20" rx="8" fill={TINT} stroke={INK} strokeWidth="2" />}
      <W x={160} y={200} size={11}>{["Usually a few weeks, rarely serious", "Keep it moving; no collar", "Painkillers, cold or warmth", "A low, firm pillow; regular breaks", "Weeks with no change: see a GP"][at]}</W>
    </svg>} />;
}

// ==== Osteoporosis =========================================================================================

/** A bone in cross-section: a shell and a honeycomb inside; `thin` widens the holes and thins the shell. */
const Honeycomb = ({ x, y, thin = false }: { x: number; y: number; thin?: boolean }) => {
  const holes = Array.from({ length: 16 }, (_, index) => [x - 36 + (index % 4) * 24, y - 36 + Math.floor(index / 4) * 24]);
  return <g>
    <circle cx={x} cy={y} r="58" fill={TINT} stroke={INK} strokeWidth={thin ? 3 : 9} />
    {holes.map(([hx, hy], index) => <circle key={index} cx={hx} cy={hy} r={thin ? 9 : 4} fill={WHITE} stroke={SOFT} strokeWidth="1.5" />)}
  </g>;
};

function HoneycombPiece(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When the rebuild falls behind" label="Osteoporosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A healthy bone with a thick shell and small holes, and a thinner bone with wide holes">
      <Honeycomb x={90} y={100} /><Honeycomb x={230} y={100} thin={at >= 1} />
      <W x={90} y={190} size={10.5}>Healthy bone</W><W x={230} y={190} size={10.5}>{at >= 1 ? "Thinner, more porous" : "Always renewing"}</W>
      <W x={160} y={20} size={11}>{["Bone is living tissue", "The shell thins, the holes widen", "Strongest until our late 20s", "Silent until a bone breaks", "Osteopenia: lower, not yet osteoporosis"][at]}</W>
    </svg>} />;
}

function Tscore(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The scan" title="One scan, one score, one plan" label="DEXA scan" credit="Illustration: Rehyn. A picture of the idea, not a result."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person under a scanning arm, and a T-score line">
      {at <= 2 ? <>
        <rect x="40" y="120" width="240" height="20" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" />
        <path d="M70 120 C70 90, 110 100, 150 112 S240 120, 260 116" stroke={INK} strokeWidth="10" strokeLinecap="round" fill="none" /><circle cx="64" cy="108" r="12" fill={INK} />
        <path d="M120 50 H200 V70 H120 Z M160 70 V100" stroke={SOFT} strokeWidth="4" fill={TINT} />
        <W x={160} y={180} size={11.5}>{["Low-dose X-rays measure density", "Over 50 with risks, or after a break", "No tunnel, no injection"][at]}</W>
      </> : <>
        <path d="M30 110 H290" stroke={LINE} strokeWidth="14" strokeLinecap="round" />
        <rect x="30" y="103" width="90" height="14" rx="7" fill={TEXT} /><rect x="120" y="103" width="70" height="14" fill={GOLD} /><rect x="190" y="103" width="100" height="14" rx="7" fill={SOFT} />
        <W x={75} y={90} size={10}>Osteoporosis</W><W x={155} y={90} size={10}>Osteopenia</W><W x={240} y={90} size={10}>Normal</W>
        <W x={120} y={140} size={10}>-2.5</W><W x={190} y={140} size={10}>-1</W>
        <W x={160} y={186} size={11.5}>{at === 3 ? "Compared with young adults" : "Put together with your fracture risk"}</W>
      </>}
    </svg>} />;
}

function FourRisks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const risks = ["Menopause", "Low testosterone", "Steroid tablets", "Family history", "Thin frame"];
  const lit = [[0], [1], [2], [3, 4], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Who gets it" title="Menopause, steroids, family, frame" label="Risks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Things that raise the risk of osteoporosis">
      {risks.map((risk, index) => <g key={risk} transform={`translate(40 ${18 + index * 34})`}><rect width="240" height="28" rx="10" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={120} y={19} size={11} fill={lit.includes(index) ? WHITE : TEXT}>{risk}</W></g>)}
      <W x={160} y={200} size={11}>{at === 4 ? "Other conditions, smoking, heavy drinking" : at === 1 ? "In most men, the cause is unknown" : "One of the things that can raise the risk"}</W>
    </svg>} />;
}

function Wedge(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The spine" title="Shorter, but not stuck" label="Spinal fractures" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A spine with two squashed, wedge-shaped bones">
      {Array.from({ length: 7 }, (_, index) => {
        const wedge = (index === 3 || index === 4) && at >= 0;
        return <path key={index} d={wedge ? `M${110 + index * 4} ${30 + index * 24} H${160 + index * 4} L${156 + index * 4} ${44 + index * 24} H${114 + index * 4} Z` : `M${110 + index * 4} ${30 + index * 24} h50 v16 h-50 Z`} fill={wedge ? INK : WHITE} stroke={INK} strokeWidth="2.5" />;
      })}
      <path d="M220 30 V200" stroke={SOFT} strokeWidth="3" />{[30, 70, 110, 150, 190].map(y => <path key={y} d={`M214 ${y} h12`} stroke={SOFT} strokeWidth="3" />)}
      <W x={60} y={110} size={11}>{["Squashed", "Height", "Pain, spasm", "Stay active", "Not paralysis"][at]}</W>
      <W x={160} y={214} size={10.5}>{["A bone in the spine squashes", "Several can mean height loss", "It can feel like back pain", "Usually no operation", "These fractures are stable"][at]}</W>
    </svg>} />;
}

function TabletMorning(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Bisphosphonates" title="Tap water, empty stomach, stand tall" label="Taking the tablets" credit="Illustration: Rehyn. Follow the instructions with your own medicine."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tablet with tap water, 30 minutes upright, then breakfast">
      <path d="M30 120 H290" stroke={LINE} strokeWidth="10" strokeLinecap="round" />
      <Pill x={50} y={120} /><W x={50} y={98} size={10.5}>Tap water</W>
      <rect x="80" y="112" width="120" height="16" rx="6" fill={SOFT} opacity=".6" /><W x={140} y={152} size={10.5}>30 minutes upright</W>
      <circle cx="230" cy="120" r="14" fill={WHITE} stroke={INK} strokeWidth="3" /><W x={230} y={98} size={10.5}>Breakfast</W>
      <W x={160} y={196} size={11.5}>{["They slow bone loss", "Once a week, same day", "Stay upright, then eat", "Missed? The morning after; never two", "Years to work fully"][at]}</W>
    </svg>} />;
}

function YearCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const marks = [[], [0], [0, 6], [], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Other treatments" title="Drips, jabs and bone builders" label="Other treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year with a yearly drip or injections every six months">
      {months.map((month, index) => <g key={index}><rect x={14 + index * 25} y="70" width="21" height="40" rx="6" fill={marks.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="1.5" /><W x={24 + index * 25} y={95} size={10} fill={marks.includes(index) ? WHITE : TEXT}>{month}</W></g>)}
      <W x={160} y={150} size={11.5}>{["Slow the loss, or build new bone", "Zoledronate: once a year", "Denosumab: every six months", "Teriparatide, romosozumab: to build", "Raloxifene and HRT, for some"][at]}</W>
      {at === 2 && <W x={160} y={172} size={10.5}>Plan ahead with your doctor before starting</W>}
    </svg>} />;
}

function FoodSun(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Calcium and vitamin D" title="Food first, sun second, then top up" label="Calcium and vitamin D" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Calcium from food, vitamin D from summer sun, and supplements in winter">
      {at === 2 || at === 3 ? <>
        {months.map((month, index) => <g key={index}><rect x={14 + index * 25} y="90" width="21" height="40" rx="6" fill={index >= 3 && index <= 8 ? GOLD : at === 3 ? INK : WHITE} stroke={INK} strokeWidth="1.5" /><W x={24 + index * 25} y={115} size={10} fill={!(index >= 3 && index <= 8) && at === 3 ? WHITE : TEXT}>{month}</W></g>)}
        <circle cx="160" cy="50" r="18" fill={GOLD} />
        <W x={160} y={160} size={11.5}>{at === 2 ? "Sun, spring to the end of September" : "A supplement through the winter"}</W>
      </> : <>
        <circle cx="160" cy="100" r="66" fill={WHITE} stroke={LINE} strokeWidth="3" />
        <W x={160} y={80} size={11}>Milk, cheese, yoghurt</W><W x={160} y={100} size={11}>Kale, broccoli</W><W x={160} y={120} size={11}>Tofu, sardines</W>
        <W x={160} y={196} size={11.5}>{["They keep bones strong", "700mg a day, from food", "", "", "More isn't better"][at]}</W>
      </>}
    </svg>} />;
}

function ThreePanels(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const panels = [{ t: "Impact", i: 1 }, { t: "Strength", i: 2 }, { t: "Balance", i: 3 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercise" title="Impact, strength and balance" label="Exercise for bones" credit="Illustration: Rehyn. Talk to your doctor or physiotherapist first."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Impact, strength and balance exercise">
      {panels.map((panel, index) => <g key={panel.t} opacity={at === 0 || at === panel.i || at === 4 ? 1 : 0.35}>
        <rect x={16 + index * 100} y="40" width="88" height="110" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" /><Person x={60 + index * 100} y={110} scale={0.8} /><W x={60 + index * 100} y={140} size={10.5}>{panel.t}</W></g>)}
      <W x={160} y={190} size={11.5}>{["Bones get stronger when used", "Feet hitting the ground", "Muscles against resistance", "Steadier, so fewer falls", "Stop if dizzy, sick or in pain"][at]}</W>
    </svg>} />;
}

function SafeHome(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const checks = ["Rugs secured", "Stairs lit", "Grab rails", "Good slippers", "Sight and hearing tests"];
  const lit = [[], [0, 1, 2], [3], [4], [0, 1, 2, 3, 4]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Falls" title="Trip-proof your home" label="Preventing falls" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A home checked for trip hazards">
      <path d="M20 70 L160 16 L300 70 V200 H20 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      {checks.map((check, index) => <g key={check} transform={`translate(60 ${78 + index * 24})`}><rect width="16" height="16" rx="4" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={26} y={13} size={10.5} anchor="start">{check}</W></g>)}
      {at === 0 && <W x={160} y={52} size={11}>Falls are when bones break</W>}
    </svg>} />;
}

function HealWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="After a break" title="Mend this break, block the next" label="Recovery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Six to twelve weeks of healing, then a check to prevent the next break">
      <path d="M30 110 H290" stroke={LINE} strokeWidth="10" strokeLinecap="round" />
      <rect x="30" y="102" width={at === 4 ? 260 : 180} height="16" rx="8" fill={INK} />
      <W x={30} y={90} size={10} anchor="start">Break</W><W x={210} y={90} size={10}>6 to 12 weeks</W>
      {at === 4 && <><rect x="196" y="130" width="94" height="28" rx="10" fill={GOLD} /><W x={243} y={149} size={10.5}>Next-break check</W></>}
      <W x={160} y={196} size={11.5}>{["Bones heal as normal", "Wrist: a cast; 6 to 12 weeks", "Hip: surgery, then up the next day", "Pain relief, warmth, relaxation", "One break raises the risk of another"][at]}</W>
    </svg>} />;
}

function HipHinge(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Bending and lifting" title="Bend at the hips, not the back" label="Lifting and gardening" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person hinging from the hips with a straight back">
      <circle cx="110" cy="70" r="14" fill={INK} />
      <path d="M118 82 L150 120 M150 120 L140 190 M150 120 L170 190 M126 92 L110 130" stroke={INK} strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M118 82 L150 120" stroke={GOLD} strokeWidth="2" strokeDasharray="4 4" />
      {at === 3 && <rect x="200" y="140" width="90" height="50" rx="8" fill={TINT} stroke={INK} strokeWidth="2" />}
      <W x={240} y={90} size={11.5}>{["Bending is generally safe", "Think straight", "Close, slow, knees bent", "Raised beds; breaks", "Keep things close"][at]}</W>
    </svg>} />;
}

function Tooth(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Your dentist" title="The dentist needs to know" label="Telling your dentist" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tooth beside a medicine box">
      <path d="M90 50 C60 50, 56 86, 64 110 C70 128, 70 160, 82 160 C94 160, 92 130, 104 130 C116 130, 114 160, 126 160 C138 160, 138 128, 144 110 C152 86, 148 50, 118 50 C110 50, 108 56, 104 56 C100 56, 98 50, 90 50 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="190" y="70" width="90" height="60" rx="8" fill={TINT} stroke={INK} strokeWidth="2" /><Pill x={235} y={100} />
      <W x={160} y={196} size={11.5}>{["A very rare jaw side effect", "The medicine is usually worth it", "Check-ups every 6 months", "Tell your dentist", "Loose teeth, sores, swelling: say"][at]}</W>
    </svg>} />;
}

// ==== Rheumatoid arthritis =================================================================================

/** A joint capsule in cross-section, centred on (x, y): `inflamed` thickens and warms the lining. */
const Capsule = ({ x, y, inflamed = false }: { x: number; y: number; inflamed?: boolean }) =>
  <g transform={`translate(${x} ${y})`}>
    <path d="M-20 -80 V-14 C-20 -4, -10 0, 0 0 C10 0, 20 -4, 20 -14 V-80 M-22 80 V16 C-22 8, -10 6, 0 6 C10 6, 22 8, 22 16 V80" fill={WHITE} stroke={INK} strokeWidth="3" />
    <ellipse cx="0" cy="3" rx={inflamed ? 48 : 34} ry={inflamed ? 34 : 22} fill="none" stroke={inflamed ? GOLD : SOFT} strokeWidth={inflamed ? 7 : 3} />
    {inflamed && [[-30, -14], [30, -10], [-26, 20], [28, 22]].map(([dx, dy]) => <circle key={dx * dy} cx={dx} cy={dy} r="3.5" fill={GOLD} />)}
  </g>;

function JointLining(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When the body attacks its joints" label="Rheumatoid arthritis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A healthy joint lining and an inflamed one">
      {at === 2 ? <><Hand x={90} y={100} dots={[5, 6, 7, 8]} /><Hand x={230} y={100} dots={[5, 6, 7, 8]} /><W x={160} y={196} size={11}>Small joints, both sides</W></>
        : <><Capsule x={90} y={100} /><Capsule x={230} y={100} inflamed={at >= 1} /><W x={90} y={204} size={10.5}>Healthy lining</W><W x={230} y={204} size={10.5}>{at >= 1 ? "Inflamed lining" : "The immune system attacks"}</W>
          {(at === 3 || at === 4) && <W x={160} y={20} size={11}>{at === 3 ? "About 1 in 100 people in the UK" : "Early treatment protects joints"}</W>}</>}
    </svg>} />;
}

function Jigsaw(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const pieces = ["GP and symptoms", "Inflammation tests", "RF and anti-CCP", "Ultrasound, X-ray, MRI"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diagnosis" title="No single test, many clues" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four clues fitting together">
      {pieces.map((piece, index) => <g key={piece} transform={`translate(${30 + (index % 2) * 132} ${30 + Math.floor(index / 2) * 70})`}>
        <rect width="124" height="60" rx="12" fill={index === at || at === 4 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={62} y={35} size={10.5} fill={index === at || at === 4 ? WHITE : TEXT}>{piece}</W>
      </g>)}
      <W x={160} y={196} size={11}>{["Referral to a rheumatologist", "ESR and CRP show inflammation", "No test proves it alone", "Scans show inflamed joints", "Then regular checks over time"][at]}</W>
    </svg>} />;
}

function BodySpots(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots = [{ x: 168, y: 40, t: "Eyes", i: 1 }, { x: 146, y: 100, t: "Lungs", i: 2 }, { x: 170, y: 110, t: "Heart", i: 3 }, { x: 160, y: 62, t: "Neck", i: 4 }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Beyond the joints" title="More than a joint disease" label="The whole body" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with the eyes, lungs, heart and neck marked">
      <circle cx="160" cy="40" r="20" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M126 200 C126 120, 140 70, 160 70 C180 70, 194 120, 194 200 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      {spots.map(spot => <g key={spot.t} opacity={at === 0 || at === spot.i ? 1 : 0.3}><circle cx={spot.x} cy={spot.y} r="7" fill={INK} /><W x={spot.x < 160 ? 110 : 214} y={spot.y + 4} size={11} anchor={spot.x < 160 ? "end" : "start"}>{spot.t}</W></g>)}
    </svg>} />;
}

function FlareWave(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Flares" title="Riding out the flare" label="Flares" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A flare rising and settling">
      <path d="M20 160 C80 160, 100 60, 150 60 S220 150, 300 150" stroke={INK} strokeWidth="4" fill="none" />
      <circle cx={[60, 110, 190, 270][at]} cy={[150, 82, 92, 150][at]} r="9" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      <W x={160} y={196} size={11.5}>{["Symptoms worse for a while", "Stress, illness, overdoing it", "Rest, heat or cold, gentle movement", "Still high? Call your team"][at]}</W>
    </svg>} />;
}

function WeekMtx(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="DMARDs" title="Slow medicines, lasting control" label="DMARDs" credit="Illustration: Rehyn. Follow the instructions with your own medicine."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Methotrexate once a week, and a bar filling over weeks">
      {days.map((day, index) => <g key={index}><rect x={22 + index * 40} y="40" width="34" height="44" rx="8" fill={index === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={39 + index * 40} y={66} size={11} fill={index === 0 ? WHITE : TEXT}>{day}</W></g>)}
      <rect x="40" y="120" width="240" height="18" rx="9" fill={LINE} /><rect x="40" y="120" width={at === 2 ? 160 : 60} height="18" rx="9" fill={INK} />
      <W x={160} y={164} size={11}>{["They calm the immune attack", "Methotrexate: once a week", "3 to 12 weeks to start working", "Regular blood tests", "Others: hydroxychloroquine and more"][at]}</W>
    </svg>} />;
}

function Steps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The next step" title="The next step after tablets" label="Biologics and JAK inhibitors" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Steps from DMARD tablets to biologics and JAK inhibitors">
      <path d="M30 180 H110 V130 H200 V80 H290" stroke={INK} strokeWidth="4" fill="none" />
      {[[70, 180], [155, 130], [245, 80]].map(([cx, cy], index) => <circle key={cx} cx={cx} cy={cy} r="7" fill={(at === 0 ? 0 : at === 2 ? 2 : 1) === index ? GOLD : SOFT} />)}
      <W x={70} y={166} size={10.5}>DMARDs</W><W x={155} y={116} size={10.5}>Biologics</W><W x={245} y={66} size={10.5}>JAK inhibitors</W>
      <W x={160} y={26} size={11.5}>{["When DMARDs are not enough", "Injections or drips", "Tablets that block signals", "Checks for TB first", "Infections are more likely"][at]}</W>
    </svg>} />;
}

function Bridge(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Steroids" title="A fast bridge, not a destination" label="Steroids" credit="Illustration: Rehyn. Never stop steroids suddenly without advice."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bridge from diagnosis to the main medicines working">
      <path d="M20 140 H90 M230 140 H300" stroke={INK} strokeWidth="6" />
      <path d="M90 140 C120 90, 200 90, 230 140" stroke={SOFT} strokeWidth="8" fill="none" />
      <W x={55} y={166} size={10}>Diagnosis</W><W x={265} y={166} size={10}>DMARDs working</W>
      <W x={160} y={40} size={11.5}>{["Short-term relief", "Tablets or injections", "The lowest dose, shortest time", "Over 3 weeks? Reduce slowly", "Go easy for two weeks after"][at]}</W>
    </svg>} />;
}

function HandMoves(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Hands" title="Kinder ways to use your hands" label="Hands" credit="Illustration: Rehyn. Follow your own therapist's advice."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hand, with joints marked, and ways to protect it">
      <Hand x={100} y={112} scale={1.3} dots={at === 0 ? [0, 1, 2, 3, 4, 5, 6, 7, 8] : [5, 6, 7, 8]} />
      <W x={230} y={100} size={11.5}>{["Many small joints", "Gentle daily exercises", "Two hands, spread the load", "Splints and gadgets", "Pain is a warning"][at]}</W>
    </svg>} />;
}

function MorningClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mornings" title="Warm, slow and ready mornings" label="Mornings" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A morning clock, warmth and clothes laid out">
      <circle cx="100" cy="100" r="52" fill={WHITE} stroke={INK} strokeWidth="3" /><path d={`M100 100 V62 M100 100 L${100 + 30 * Math.sin((7 + at * 0.5) / 6 * Math.PI)} ${100 - 30 * Math.cos((7 + at * 0.5) / 6 * Math.PI)}`} stroke={TEXT} strokeWidth="4" strokeLinecap="round" />
      <W x={230} y={100} size={11.5}>{["Often worse in the morning", "Warm up first", "Gentle movement", "Get ready the night before", "Aids and better sleep"][at]}</W>
    </svg>} />;
}

function Batteries(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Fatigue" title="Not tired, but fatigued" label="Fatigue" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Energy used all at once, or paced through the week">
      <W x={60} y={40} size={10.5}>Boom and bust</W><W x={240} y={40} size={10.5}>Paced</W>
      <rect x="30" y="54" width="60" height="110" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="34" y="140" width="52" height="20" rx="4" fill={GOLD} />
      {[0, 1, 2, 3, 4].map(index => <g key={index}><rect x={160 + index * 26} y="54" width="20" height="110" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x={163 + index * 26} y="104" width="14" height="56" rx="3" fill={INK} /></g>)}
      <W x={160} y={196} size={11}>{["More than tiredness", "Inflammation, pain, sleep, mood", "The four Ps, and pacing", "Gentle exercise helps energy", "Tell your team if it is worse"][at]}</W>
    </svg>} />;
}

function AdjustDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Staying in work, with support" label="Work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk with adjustments">
      <path d="M150 110 H290 M170 110 V180 M270 110 V180" stroke={INK} strokeWidth="5" strokeLinecap="round" /><rect x="200" y="70" width="60" height="40" rx="4" fill={TINT} stroke={INK} strokeWidth="2" />
      <Person x={100} y={134} />
      <W x={160} y={40} size={11.5}>{["The Equality Act may cover you", "Telling your employer is your choice", "Reasonable adjustments", "Access to Work grants", "Occupational therapy and others"][at]}</W>
    </svg>} />;
}

function Shield(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const vials = [{ t: "Flu, yearly", i: 1 }, { t: "Pneumonia", i: 1 }, { t: "Shingles", i: 2 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Infections" title="Lower defences, simple protection" label="Infections and vaccines" credit="Illustration: Rehyn. Ask your team which vaccines suit you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A shield of vaccines">
      <path d="M160 20 L240 50 V110 C240 160, 200 190, 160 204 C120 190, 80 160, 80 110 V50 Z" fill={TINT} stroke={INK} strokeWidth="3" />
      {vials.map((vial, index) => <g key={vial.t}><rect x="110" y={60 + index * 38} width="100" height="28" rx="10" fill={at === vial.i ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={160} y={79 + index * 38} size={10.5} fill={at === vial.i ? WHITE : TEXT}>{vial.t}</W></g>)}
      <W x={160} y={214} size={10.5}>{["Some medicines lower defences", "", "Shingrix is not a live vaccine", "Live vaccines: check first", "Wash hands; fever? Call early"][at]}</W>
    </svg>} />;
}

function FamilyLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stops = ["Talk to the team", "Change medicines", "Pregnancy", "Birth"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pregnancy" title="Planning a family" label="Pregnancy" credit="Illustration: Rehyn. Check each medicine with your team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from planning to birth">
      <path d="M70 110 H250" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {stops.map((stop, index) => <g key={stop}><circle cx={70 + index * 60} cy="110" r={(at === 0 && index === 0) || (at === 1 && index === 1) || (at === 4 && index >= 2) ? 11 : 7} fill={INK} opacity={index <= at ? 1 : 0.35} /><W x={70 + index * 60} y={index % 2 ? 140 : 88} size={10.5}>{stop}</W></g>)}
      <W x={160} y={196} size={11.5}>{["Plan ahead with your team", "Some medicines change first", "Some can continue", "Unplanned? Tell the team soon", "Many notice improvement"][at]}</W>
    </svg>} />;
}

export function BonesPieceView({ piece, ...props }: { piece: BonesPiece } & PieceProps) {
  switch (piece) {
    case "ra-joint-lining": return <JointLining {...props} />;
    case "ra-jigsaw": return <Jigsaw {...props} />;
    case "ra-body-spots": return <BodySpots {...props} />;
    case "ra-flare-wave": return <FlareWave {...props} />;
    case "ra-week-mtx": return <WeekMtx {...props} />;
    case "ra-steps": return <Steps {...props} />;
    case "ra-bridge": return <Bridge {...props} />;
    case "ra-hand-moves": return <HandMoves {...props} />;
    case "ra-morning-clock": return <MorningClock {...props} />;
    case "ra-batteries": return <Batteries {...props} />;
    case "ra-adjust-desk": return <AdjustDesk {...props} />;
    case "ra-shield": return <Shield {...props} />;
    case "ra-family-line": return <FamilyLine {...props} />;
    case "op-honeycomb": return <HoneycombPiece {...props} />;
    case "op-tscore": return <Tscore {...props} />;
    case "op-four-risks": return <FourRisks {...props} />;
    case "op-wedge": return <Wedge {...props} />;
    case "op-tablet-morning": return <TabletMorning {...props} />;
    case "op-year-calendar": return <YearCalendar {...props} />;
    case "op-food-sun": return <FoodSun {...props} />;
    case "op-three-panels": return <ThreePanels {...props} />;
    case "op-safe-home": return <SafeHome {...props} />;
    case "op-heal-weeks": return <HealWeeks {...props} />;
    case "op-hip-hinge": return <HipHinge {...props} />;
    case "op-tooth": return <Tooth {...props} />;
    case "back-spine-dial": return <SpineDial {...props} />;
    case "back-three-lights": return <ThreeLights {...props} />;
    case "back-two-scans": return <TwoScans {...props} />;
    case "back-alarm": return <Alarm {...props} />;
    case "back-five-moves": return <FiveMoves {...props} />;
    case "back-pill-days": return <PillDays {...props} />;
    case "back-physio-path": return <PhysioPath {...props} />;
    case "back-hundred": return <Hundred {...props} />;
    case "back-desk": return <Desk {...props} />;
    case "back-bed": return <Bed {...props} />;
    case "back-three-paths": return <ThreePaths {...props} />;
    case "back-neck-pillow": return <NeckPillow {...props} />;
    case "oa-week-ruler": return <WeekRuler {...props} />;
    case "oa-two-knees": return <TwoKnees {...props} />;
    case "oa-xray-gauge": return <XrayGauge {...props} />;
    case "oa-two-hands": return <TwoHands {...props} />;
    case "oa-sit-stand": return <SitStand {...props} />;
    case "oa-ladder": return <Ladder {...props} />;
    case "oa-knee-load": return <KneeLoad {...props} />;
    case "oa-implant-years": return <ImplantYears {...props} />;
    case "oa-stairs": return <Stairs {...props} />;
    case "oa-hand-tools": return <HandTools {...props} />;
    case "oa-three-ways": return <ThreeWays {...props} />;
    case "oa-loop": return <PainLoop {...props} />;
  }
}

export { Chips, Pill, SERIF };
