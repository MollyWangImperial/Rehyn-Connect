import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { TENDON_PIECES, type TendonPiece } from "@/content/tendon-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Tennis elbow and Plantar fasciitis pages' own pieces (content/tendon-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isTendonPiece = (piece: NewsPiece): piece is TendonPiece => (TENDON_PIECES as readonly string[]).includes(piece);

const checkFirst = "Illustration: Rehyn. Check with a physiotherapist before starting new exercises.";
const yourTeam = "Illustration: Rehyn. Your own GP or team will say what suits you.";

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
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** A calendar page with a few words on it. */
const Cal = ({ x, y, w = 60, text, lit = false }: { x: number; y: number; w?: number; text: string; lit?: boolean }) =>
  <g><rect x={x - w / 2} y={y - 22} width={w} height="44" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - w / 2} y={y - 22} width={w} height="11" rx="4" fill={lit ? GOLD : INK} /><W x={x} y={y + 13} size={10}>{text}</W></g>;
/** A limb drawn as an outlined tube along `d`. */
const Limb = ({ d, w = 26 }: { d: string; w?: number }) =>
  <g fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} stroke={INK} strokeWidth={w + 6} /><path d={d} stroke={WHITE} strokeWidth={w} /></g>;
const Fist = ({ x, y, r = 13 }: { x: number; y: number; r?: number }) =>
  <g><circle cx={x} cy={y} r={r} fill={WHITE} stroke={INK} strokeWidth="3" /><path d={`M${x - r * 0.5} ${y - r * 0.3} h${r} M${x - r * 0.5} ${y + r * 0.25} h${r}`} stroke={LINE} strokeWidth="2" strokeLinecap="round" /></g>;
/** An arm hanging down, seen from the front, elbow at (x, y); `left` or `right` marks that side of the elbow. */
const ArmDown = ({ x, y, left = false, right = false, tendon = false, bones = false, strap }: { x: number; y: number; left?: boolean; right?: boolean; tendon?: boolean; bones?: boolean; strap?: "plain" | "lit" }) =>
  <g>
    <Limb d={`M${x} ${y - 74} L${x} ${y} L${x + 4} ${y + 58}`} />
    <ellipse cx={x + 5} cy={y + 72} rx="12" ry="15" fill={WHITE} stroke={INK} strokeWidth="3" />
    {bones && <g stroke={SOFT} strokeWidth="4" strokeLinecap="round"><path d={`M${x} ${y - 66} V${y - 8}`} /><path d={`M${x - 5} ${y + 8} L${x - 2} ${y + 52} M${x + 5} ${y + 8} L${x + 8} ${y + 52}`} /><circle cx={x - 9} cy={y - 4} r="3" fill={INK} stroke="none" /><circle cx={x + 9} cy={y - 4} r="3" fill={INK} stroke="none" /></g>}
    {tendon && <path d={`M${x + 13} ${y} L${x + 17} ${y + 46}`} stroke={GOLD} strokeWidth="5" strokeLinecap="round" />}
    {strap && <rect x={x - 15} y={y + 14} width="34" height="10" rx="3" fill={strap === "lit" ? GOLD : INK} />}
    {left && <circle cx={x - 14} cy={y} r="8" fill={GOLD} />}
    {right && <circle cx={x + 14} cy={y} r="8" fill={GOLD} />}
  </g>;

/** A foot side on, heel on the ground at (x, y), toes to the right; `band` draws the plantar fascia. */
const FOOT = "M14 0 C30 0 40 -10 56 -10 C74 -10 84 0 98 0 L120 0 C132 0 134 -8 128 -12 C112 -18 92 -24 70 -34 C52 -42 34 -50 26 -62 L24 -100 L-6 -100 L-8 -40 C-16 -26 -12 0 14 0 Z";
const Foot = ({ x, y, s = 1, band, heel = false, bone = false, spur = false, rotate = 0 }: { x: number; y: number; s?: number; band?: "lit" | "soft"; heel?: boolean; bone?: boolean; spur?: boolean; rotate?: number }) =>
  <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${s})`} strokeLinejoin="round">
    <path d={FOOT} fill={WHITE} stroke={INK} strokeWidth={3 / s} />
    {bone && <ellipse cx="6" cy="-20" rx="13" ry="11" fill={TINT} stroke={LINE} strokeWidth={2 / s} />}
    {spur && <path d="M16 -13 l11 5 l-11 4 Z" fill={TEXT} />}
    {band && <path d="M6 -5 C28 -6 42 -15 56 -15 C74 -15 86 -6 112 -5" fill="none" stroke={band === "lit" ? GOLD : SOFT} strokeWidth={(band === "lit" ? 5 : 4) / s} strokeLinecap="round" />}
    {heel && <circle cx="8" cy="-6" r={8 / Math.max(s, 1)} fill={GOLD} />}
  </g>;
/** A laced sports shoe side on, heel at (x, y), with a sole thicker at the heel. */
const Shoe = ({ x, y, s = 1, lit = false, dim = false }: { x: number; y: number; s?: number; lit?: boolean; dim?: boolean }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`} opacity={dim ? 0.3 : 1} strokeLinejoin="round">
    <path d="M2 -24 C0 -56 22 -66 46 -62 L62 -46 C92 -44 128 -38 148 -16 L60 -16 Z" fill={WHITE} stroke={INK} strokeWidth={2.5 / s} />
    <path d="M0 -26 L60 -16 H148 C156 -14 156 0 144 0 H6 C0 0 -2 -12 0 -26 Z" fill={SOFT} stroke={INK} strokeWidth={2.5 / s} />
    <path d="M66 -44 L72 -36 M76 -44 L82 -36 M86 -43 L92 -35" stroke={lit ? GOLD : INK} strokeWidth={3 / s} strokeLinecap="round" />
  </g>;
const Racquet = ({ x, y, s = 1, thick = false }: { x: number; y: number; s?: number; thick?: boolean }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <ellipse cx="0" cy="0" rx="18" ry="24" fill={WHITE} stroke={INK} strokeWidth="3" />
    <path d="M-9 -20 V20 M0 -23 V23 M9 -20 V20 M-16 -10 H16 M-18 0 H18 M-16 10 H16" stroke={LINE} strokeWidth="1.5" />
    <path d="M0 24 V66" stroke={INK} strokeWidth="5" strokeLinecap="round" />
    <rect x={thick ? -8 : -4} y="44" width={thick ? 16 : 8} height="24" rx="3" fill={thick ? GOLD : INK} />
  </g>;
const Waves = ({ x, y, fill = INK }: { x: number; y: number; fill?: string }) =>
  <path d={`M${x} ${y} q9 -8 18 0 t18 0 t18 0 t18 0`} fill="none" stroke={fill} strokeWidth="3" strokeLinecap="round" />;

// ==== Tennis elbow =========================================================================================

function TeOuterElbow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Pain around the outside of the elbow", "A hinge joint where three bones meet", "Tendons join forearm muscle to bone", "Racquet sports: fewer than 10%", "More common between 35 and 54"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Tennis elbow, without the tennis" label="Tennis elbow" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An arm hanging by the body, with the outer side of the elbow marked">
      <path d="M52 8 C38 50 36 120 44 182" fill="none" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
      <W x={22} y={104} size={10}>Body</W>
      <ArmDown x={96} y={88} bones={at === 1} tendon={at === 2} right={at === 0 || at === 2} />
      {at === 0 && <><circle cx={82} cy={88} r="6" fill={SOFT} /><Ring x={110} y={88} r={16} still={still} /><path d="M128 88 H150" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        <Box x={232} y={70} w={156} text="Outside: tennis elbow" lit /><Box x={232} y={106} w={156} text="Inside: golfer's elbow" /></>}
      {at === 1 && <><path d="M114 40 H172 M116 88 H172 M120 136 H172" stroke={LINE} strokeWidth="2" />
        <Box x={232} y={40} w={120} text="Humerus" /><Box x={232} y={88} w={120} text="Hinge joint" lit /><Box x={232} y={136} w={120} text="Radius and ulna" /></>}
      {at === 2 && <><Box x={232} y={64} w={140} text="Tendons" lit /><W x={232} y={96} size={10.5}>Muscle to bone</W><W x={232} y={130} size={10}>Also called lateral</W><W x={232} y={144} size={10}>epicondylitis</W></>}
      {at === 3 && <><Racquet x={186} y={64} s={0.85} /><W x={264} y={72} size={18} serif>Under</W><W x={264} y={96} size={18} serif>10%</W><Box x={232} y={152} w={156} text="Repetitive hand use" lit /></>}
      {at === 4 && <><W x={232} y={62} size={24} serif>35 to 54</W><W x={232} y={84} size={10.5}>years of age</W>
        <Person x={206} y={140} scale={0.8} /><Person x={258} y={140} scale={0.8} /><W x={232} y={172} size={10.5}>Women and men equally</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TeGripTwist(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Gripping and twisting, over and over", "Computer, manual and leisure tasks", "Tiny tears where the tendon attaches", "Often starts slowly, in the main arm", "Many do the same job without problems"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The causes" title="The grip and twist behind it" label="What causes it" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hand gripping and twisting a screwdriver, with the tasks linked with tennis elbow">
      <Limb d="M70 -12 L70 56" w={24} />
      <rect x="63" y="86" width="14" height="24" rx="4" fill={INK} />
      <path d="M70 110 V148" stroke={TEXT} strokeWidth="4" strokeLinecap="round" /><path d="M66 148 h8 l-4 8 Z" fill={TEXT} />
      <rect x="48" y="52" width="44" height="40" rx="12" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M54 63 H86 M54 72 H86 M54 81 H86" stroke={LINE} strokeWidth="2" strokeLinecap="round" />
      <Arrow d="M46 122 C50 136 90 136 94 122" head="M88 120 L94 122 L92 129" />
      {at === 0 && <><Box x={225} y={50} w={140} text="Grip" lit /><Box x={225} y={90} w={140} text="Twist the wrist" lit /><Box x={225} y={130} w={140} text="Again and again" /></>}
      {at === 1 && <>
        {[["Typing", 186, 46], ["Mouse", 266, 46], ["Sewing", 186, 82], ["Screwdriver", 266, 82]].map(([label, x, y]) => <Box key={label as string} x={x as number} y={y as number} w={76} text={label as string} size={10} />)}
        <Box x={226} y={118} w={156} text="Tennis or music" lit /><Box x={226} y={154} w={156} text="Lifting heavy boxes" />
      </>}
      {at === 2 && <>
        <rect x="258" y="46" width="48" height="90" rx="14" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <rect x="150" y="78" width="112" height="24" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M156 86 H244 M156 94 H244" stroke={LINE} strokeWidth="2" />
        <path d="M240 80 l4 5 l-4 5 l4 5 l-4 5 M250 80 l4 5 l-4 5 l4 5 l-4 5" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <W x={200} y={66} size={10.5}>Tendon</W><W x={282} y={156} size={10.5}>Bone</W><W x={206} y={124} size={10.5}>Tiny tears</W>
      </>}
      {at === 3 && <><W x={225} y={48} size={10.5}>Often no clear start</W><Box x={225} y={90} w={156} text="The arm you use most" lit />
        <path d="M150 162 C210 160 260 144 300 114" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" /></>}
      {at === 4 && <><W x={225} y={48} size={10.5}>Same job, for years</W>
        {[165, 200, 235, 270, 305].map(x => <Person key={x} x={x} y={110} scale={0.7} />)}
        <W x={225} y={150} size={10.5}>Many have no problem</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TeTwoSides(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Pain on the outside of the elbow", "Tenderness, forearm pain, stiffness", "Golfer's elbow: tendons on the inside", "Still sore after 2 weeks? See a GP", "Severe pain with fever: go to A&E"];
  const small = at === 1 || at === 3 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="Outside or inside: telling them apart" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with both arms: tennis elbow on the outer side, golfer's elbow on the inner side">
      <g transform={small ? "translate(-36 24) scale(0.66)" : undefined}>
        <path d="M126 150 V40 C126 24 140 16 160 16 C180 16 194 24 194 40 V150" fill={WHITE} stroke={LINE} strokeWidth="3" />
        <ArmDown x={102} y={80} left />
        <g opacity={at === 2 ? 1 : 0.35}><ArmDown x={218} y={80} left={at === 2} /></g>
        {!small && <Ring x={88} y={80} r={15} still={still} />}
        {at === 2 && <><Ring x={204} y={80} r={15} still={still} /><W x={160} y={74} size={10}>Tennis</W><W x={160} y={88} size={10}>elbow is</W><W x={160} y={106} size={10}>7 times</W><W x={160} y={120} size={10}>more</W><W x={160} y={134} size={10}>common</W></>}
      </g>
      {at === 0 && <><W x={102} y={188} size={10.5}>Tennis elbow</W><W x={218} y={188} size={10.5} fill={SOFT}>Golfer's elbow</W></>}
      {at === 2 && <><W x={102} y={188} size={10.5}>Tennis: outside</W><W x={218} y={188} size={10.5}>Golfer's: inside</W></>}
      {at === 1 && ["Tender or swollen", "Pain in the forearm", "Hard to straighten", "Hard to lift a cup"].map((label, index) => <Box key={label} x={225} y={44 + index * 36} w={170} text={label} lit={index === 0} />)}
      {at === 3 && <><Cal x={225} y={62} w={80} text="2 weeks" lit /><Box x={225} y={118} w={170} text="Tingling or numbness" /><Box x={225} y={152} w={170} text="Weakness in the hand" /></>}
      {at === 4 && <><W x={225} y={44} size={14}>Go to A&amp;E</W>
        {["Severe pain", "Swelling, fever, heat", "A snap when lifting"].map((label, index) => <Box key={label} x={225} y={76 + index * 34} w={170} text={label} lit={index === 0} />)}</>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TeMonthsLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often better after weeks of rest", "Most people better within a year", "Some things can slow it down", "GP at 2 weeks, physio at 6 weeks", "It can return; strength helps"];
  const ticks = [{ x: 30, t: "Start" }, { x: 80, t: "2 weeks" }, { x: 136, t: "6 weeks" }, { x: 196, t: "6 months" }, { x: 250, t: "1 year" }, { x: 296, t: "2 years" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="How long" title="Months, not days, but it eases" label="How long it lasts" credit="Illustration: Rehyn. A picture of the idea, not a prediction."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from the start to two years, with a line of improvement rising">
      {at === 1 && <rect x="196" y="30" width="100" height="112" rx="6" fill={SOFT} opacity="0.3" />}
      <path d="M30 150 H296" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {ticks.map(tick => <g key={tick.t}><circle cx={tick.x} cy={150} r="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={tick.x} y={172} size={10}>{tick.t}</W></g>)}
      <path d="M30 138 C90 134 150 104 196 80 C230 64 262 54 296 50" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" opacity={at === 2 || at === 3 || at === 4 ? 0.2 : 1} />
      {at === 0 && <Box x={100} y={40} w={140} text="Rest for a few weeks" lit />}
      {at === 1 && <><circle cx="250" cy="57" r="7" fill={GOLD} /><W x={246} y={100} size={10.5}>Most better</W><W x={246} y={114} size={10.5}>within a year</W></>}
      {at === 2 && <>{["Bad pain at the start", "Neck or shoulder pain", "Manual or repeated work", "Smoking, heavy drinking"].map((label, index) => <Box key={label} x={index % 2 ? 240 : 80} y={44 + Math.floor(index / 2) * 36} w={146} text={label} size={10} />)}
        <Box x={160} y={116} w={146} text="Earlier episodes" size={10} /></>}
      {at === 3 && [{ x: 80, t: "GP" }, { x: 136, t: "Physio" }, { x: 223, t: "Surgery?" }].map(flag => <g key={flag.t}>
        <path d={`M${flag.x} 150 V96`} stroke={INK} strokeWidth="2.5" /><rect x={flag.x} y={96} width="52" height="20" rx="3" fill={INK} /><W x={flag.x + 26} y={110} size={10} fill={WHITE}>{flag.t}</W></g>)}
      {at === 4 && <><circle cx="96" cy="84" r="32" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="150 52" /><path d="M118 58 L126 62 L124 70" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        <W x={96} y={82} size={10.5}>It can</W><W x={96} y={96} size={10.5}>return</W><Box x={228} y={84} w={150} text="Physio builds strength" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TeIceGel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Ease off what hurts, but keep moving", "A wrapped pack for up to 20 minutes", "Paracetamol or gel; no flames with gel", "Short courses, unless a doctor says", "Jobs in short bursts, with breaks"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Self-care" title="Ice, gel, and keep it moving" label="Self-care" credit="Illustration: Rehyn. Ask a pharmacist which painkiller suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bent arm with a wrapped cold pack, a gel tube and a painkiller">
      <Limb d="M34 26 L34 104 L150 104" />
      <Fist x={164} y={104} />
      {at === 1 && <g><rect x="12" y="84" width="46" height="40" rx="8" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M12 97 H58 M12 111 H58" stroke={LINE} strokeWidth="2" /></g>}
      {at === 0 && <><Cal x={255} y={58} w={96} text="2 to 4 weeks" /><Box x={255} y={122} w={118} text="Keep it moving" lit />
        <Arrow d="M150 80 C156 66 170 64 178 74" head="M171 73 L178 74 L178 67" /></>}
      {at === 1 && <><Clock x={255} y={58} r={22} hand={2} /><W x={255} y={104} size={12}>20 minutes</W><W x={255} y={122} size={10}>every 2 to 3 hours</W></>}
      {at === 2 && <>
        <rect x="200" y="50" width="46" height="18" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="246" y="53" width="10" height="12" rx="2" fill={INK} /><W x={226} y={88} size={10.5}>Gel</W>
        <path d="M287 42 C298 54 298 70 287 76 C276 70 276 54 287 42 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Cross x={287} y={59} s={11} /><W x={287} y={92} size={10}>No flames</W>
        <Pill x={255} y={128} /><W x={255} y={154} size={10.5}>Paracetamol</W>
      </>}
      {at === 3 && <><Box x={255} y={60} w={118} text="Ibuprofen: 10 days" size={10} /><Box x={255} y={96} w={118} text="Paracetamol: 3 days" size={10} /><W x={255} y={132} size={10}>Unless a doctor says</W></>}
      {at === 4 && <>{[200, 236, 272].map(x => <rect key={x} x={x} y={60} width="26" height="30" rx="4" fill={INK} />)}
        <W x={255} y={118} size={11}>Short bursts,</W><W x={255} y={134} size={11}>regular breaks</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TeTinLift(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Ask a physio first; start slowly", "Move gently as soon as pain eases", "Wrist stretch: hold 15 to 30 seconds", "Palm-down lift: 8 to 12 weeks", "Turning the forearm, palm up and down"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercises" title="A tin of beans and a table" label="Exercises" credit={checkFirst}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A forearm resting on a table, the hand holding a tin over the edge">
      <g opacity={at === 0 ? 0.35 : 1}>
        <rect x="4" y="118" width="116" height="8" rx="2" fill={INK} /><path d="M16 126 V176 M108 126 V176" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <Limb d="M26 30 L26 104 L118 104" w={22} />
        <Fist x={at === 2 ? 130 : 132} y={at === 2 ? 120 : 104} r={12} />
        {(at === 0 || at === 3) && <g><rect x="122" y="114" width="22" height="28" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M122 122 H144 M122 134 H144" stroke={LINE} strokeWidth="2" /></g>}
      </g>
      {at === 0 && <><Box x={252} y={60} w={120} text="Ask a physio" lit /><Box x={252} y={96} w={120} text="Start slowly" /><Box x={252} y={132} w={120} text="Then build up" /></>}
      {at === 1 && <><Arrow d="M116 86 C112 58 92 42 62 42" head="M68 36 L62 42 L69 47" /><W x={252} y={74} size={12}>Bend and</W><W x={252} y={90} size={12}>straighten</W><Box x={252} y={130} w={120} text="As pain eases" lit /></>}
      {at === 2 && <><Arrow d="M148 98 C156 106 156 118 148 126" head="M150 118 L148 126 L141 122" />
        <W x={252} y={70} size={20} serif>15 to 30</W><W x={252} y={90} size={10.5}>seconds</W><W x={252} y={128} size={10.5}>3 times each wrist</W></>}
      {at === 3 && <><Arrow d="M162 90 V138" head="M156 96 L162 90 L168 96 M156 132 L162 138 L168 132" />
        <W x={252} y={58} size={10.5}>3 sets of 15,</W><W x={252} y={74} size={10.5}>twice a day</W><Box x={252} y={118} w={120} text="8 to 12 weeks" lit /></>}
      {at === 4 && <><path d="M132 92 V54" stroke={INK} strokeWidth="4" strokeLinecap="round" /><rect x="118" y="44" width="30" height="12" rx="3" fill={INK} />
        <Arrow d="M112 116 A20 9 0 1 0 152 116" head="M146 110 L152 116 L145 121" />
        <W x={252} y={74} size={12}>Palm up,</W><W x={252} y={90} size={12}>palm down</W><Box x={252} y={130} w={120} text="Hammer turn" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TeStrapPlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["If home care has not helped by 6 weeks", "An exercise plan for your own arm", "Massage and acupuncture: little value", "A brace can sometimes reduce pain", "Often you can refer yourself"];
  const headers = ["After 6 weeks", "Your own plan", "What helps", "Supports", "Getting physio"];
  const rows = [["Stretching", "Strengthening", "Massage", "Ultrasound"], ["Diagnosis", "Often no scans", "Exercises", "Do them at home"], ["Exercises", "Massage", "Electrotherapy", "Acupuncture"], ["Forearm strap", "Wrist brace", "Elbow brace", "Clasp"], ["Self-refer", "Free on the NHS", "May be a wait", "Check MCSP"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Physiotherapy" title="What a physio and a strap can do" label="Physiotherapy and braces" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An arm with a strap below the elbow, beside a clipboard with an exercise plan">
      <ArmDown x={70} y={70} strap={at === 3 ? "lit" : "plain"} />
      {at === 3 && <W x={96} y={94} size={10.5} anchor="start">Strap</W>}
      <rect x="168" y="22" width="134" height="154" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="214" y="14" width="42" height="16" rx="4" fill={INK} />
      <W x={235} y={52} size={11}>{headers[at]}</W>
      {rows.map((row, index) => { const y = 78 + index * 26, off = at === 2 && index > 0; return <g key={row} opacity={off ? 0.45 : 1}>
        <rect x="180" y={y - 10} width="12" height="12" rx="2" fill={off ? WHITE : INK} stroke={INK} strokeWidth="2" />
        {off && <path d={`M182 ${y - 8} l8 8 M190 ${y - 8} l-8 8`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />}
        <W x={200} y={y} size={10.5} anchor="start">{row}</W>
      </g>; })}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TeFourCards(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Steroid jabs: not recommended", "PRP: evidence still inadequate", "Shockwave: evidence inconsistent", "Surgery may follow 6 to 12 months"];
  const labels = ["Steroid", "PRP", "Shockwave", "Surgery"];
  const icon = (index: number, cx: number, c: string) => {
    const cy = 42;
    if (index === 0) return <g stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round"><rect x={cx - 14} y={cy - 6} width="22" height="12" rx="2" /><path d={`M${cx - 22} ${cy} H${cx - 14} M${cx - 22} ${cy - 6} V${cy + 6} M${cx + 8} ${cy} H${cx + 22}`} /></g>;
    if (index === 1) return <path d={`M${cx} ${cy - 14} C${cx + 5} ${cy - 6} ${cx + 10} ${cy} ${cx + 10} ${cy + 5} A10 10 0 0 1 ${cx - 10} ${cy + 5} C${cx - 10} ${cy} ${cx - 5} ${cy - 6} ${cx} ${cy - 14} Z`} fill={c} />;
    if (index === 2) return <path d={`M${cx - 12} ${cy - 10} q7 10 0 20 M${cx - 2} ${cy - 14} q10 14 0 28 M${cx + 8} ${cy - 18} q13 18 0 36`} fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" />;
    return <g><path d={`M${cx - 20} ${cy + 8} L${cx + 2} ${cy - 2}`} stroke={c} strokeWidth="5" strokeLinecap="round" /><path d={`M${cx + 2} ${cy - 2} L${cx + 20} ${cy - 12} C${cx + 18} ${cy - 2} ${cx + 12} ${cy + 2} ${cx + 2} ${cy + 4} Z`} fill={c} /></g>;
  };
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Other treatments" title="Why the quick fix may not help" label="Injections and other treatments" credit={yourTeam}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four cards: a steroid injection, a blood injection, shockwave therapy and surgery">
      {labels.map((label, index) => { const cx = 44 + index * 77, lit = index === at; return <g key={label} opacity={lit ? 1 : 0.55}>
        <rect x={cx - 33} y={14} width="66" height="74" rx="8" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, cx, lit ? WHITE : INK)}
        <W x={cx} y={76} size={10} fill={lit ? WHITE : TEXT}>{label}</W>
      </g>; })}
      {at === 0 && <>
        <path d="M40 132 H96 L112 168 H150 C188 160 222 122 286 112" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <W x={131} y={185} size={10.5}>Short relief</W><W x={222} y={106} size={10.5}>Lasts longer overall</W></>}
      {at === 1 && <><W x={160} y={120} size={11}>Your own blood, more platelets</W><Box x={160} y={154} w={200} text="Not in all UK hospitals" /></>}
      {at === 2 && <><path d="M140 110 q8 12 0 24 M154 104 q12 18 0 36 M168 98 q16 24 0 48" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" /><Box x={160} y={168} w={220} text="Only with special arrangements" /></>}
      {at === 3 && <><W x={160} y={120} size={11}>Keyhole, or a 4 to 5cm cut</W><Box x={160} y={156} w={210} text="Several weeks to recover" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TeSwapGrips(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Change or stop the movement first", "Keep using it, in short bursts", "Less force, gripping and vibration", "A mouse, and a thicker racquet grip", "An OT can suggest new ways to move"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Everyday tasks" title="Same jobs, gentler grips" label="Changing how you grip and lift" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Swaps for everyday tasks: short bursts, lighter grips, a mouse and a thicker racquet grip">
      {at === 0 && <><Box x={160} y={46} w={210} text="The movement that hurts" dim /><Arrow d="M160 64 V102" head="M153 95 L160 102 L167 95" /><Box x={160} y={124} w={210} text="Change it, or stop it" lit /></>}
      {at === 1 && <><W x={160} y={56} size={11}>Keep using the arm</W>
        {[0, 1, 2, 3, 4, 5].map(index => <g key={index}><rect x={42 + index * 40} y={76} width="36" height="34" rx="5" fill={index % 2 ? WHITE : INK} stroke={INK} strokeWidth="2" /><W x={60 + index * 40} y={97} size={9.5} fill={index % 2 ? TEXT : WHITE}>{index % 2 ? "Break" : "Work"}</W></g>)}
        <W x={160} y={140} size={11}>Not all in one go</W></>}
      {at === 2 && <>
        <circle cx="64" cy="100" r="18" fill={INK} /><path d="M52 86 C52 66 76 66 76 86" fill="none" stroke={INK} strokeWidth="4" />
        <Fist x={160} y={94} r={20} />
        <rect x="234" y="80" width="36" height="16" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="238" y="96" width="12" height="22" rx="3" fill={INK} /><path d="M270 88 H286" stroke={TEXT} strokeWidth="3" strokeLinecap="round" />
        <path d="M228 72 l-5 -4 l5 -4 M286 72 l5 -4 l-5 -4" fill="none" stroke={TEXT} strokeWidth="2" strokeLinecap="round" />
        {[64, 160, 256].map(x => <Cross key={x} x={x} y={94} s={22} />)}
        <W x={64} y={142} size={10.5}>High force</W><W x={160} y={142} size={10.5}>Tight gripping</W><W x={256} y={142} size={10.5}>Strong vibration</W>
      </>}
      {at === 3 && <>
        <rect x="30" y="50" width="80" height="50" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M20 100 H120 L114 112 H26 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="60" y="103" width="20" height="6" rx="2" fill={LINE} /><Cross x={70} y={106} s={9} />
        <ellipse cx="140" cy="100" rx="9" ry="13" fill={INK} /><path d="M140 88 V96" stroke={WHITE} strokeWidth="2" />
        <path d="M186 40 V150" stroke={LINE} strokeWidth="2" />
        <Racquet x={248} y={60} s={0.9} thick />
        <W x={84} y={142} size={10.5}>A mouse, not the trackpad</W><W x={248} y={142} size={10.5}>A thicker grip</W>
      </>}
      {at === 4 && <>
        <rect x="100" y="28" width="120" height="30" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M126 58 L120 70 L138 58" fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><W x={160} y={47} size={10.5}>New ways to move</W>
        <Person x={112} y={118} scale={1.1} /><Person x={208} y={118} scale={1.1} fill={SOFT} />
        <Box x={160} y={160} w={200} text="Occupational therapist" lit />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TeDeskTools(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Desk work and manual work can cause it", "Talk to your employer about changes", "A mouse, not the trackpad", "Less hard manual work for 6 weeks", "Grants and reasonable adjustments"];
  const still = useStill();
  const desk = at === 0 || at === 2 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work" title="Keyboards, tools and a word with work" label="Work, keyboards and tools" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk with a laptop and mouse, and a toolbox">
      {desk && <>
        <path d="M14 124 H306" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <g opacity={at === 3 ? 0.3 : 1}>
          <rect x="44" y="70" width="72" height="46" rx="4" fill={at === 0 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          <path d="M34 116 H126 L120 124 H40 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="72" y="117" width="16" height="5" rx="2" fill={LINE} />
          {at === 2 && <Cross x={80} y={119} s={7} />}
          <ellipse cx="146" cy="114" rx="8" ry="10" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        </g>
        <g opacity={at === 2 ? 0.3 : 1}>
          <rect x="210" y="88" width="82" height="36" rx="4" fill={at === 0 || at === 3 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          <path d="M236 88 V76 H266 V88" fill="none" stroke={INK} strokeWidth="3" />
          <path d="M282 88 L296 64" stroke={TEXT} strokeWidth="4" strokeLinecap="round" />
        </g>
      </>}
      {at === 0 && <><W x={90} y={146} size={10.5}>Typing, a mouse</W><W x={251} y={146} size={10.5}>Tools, vibration</W></>}
      {at === 2 && <><Ring x={146} y={114} r={16} still={still} /><W x={90} y={146} size={10.5}>Mouse, not trackpad</W></>}
      {at === 3 && <><Cal x={251} y={46} w={64} text="6 weeks" lit /><W x={251} y={146} size={10.5}>Occupational health</W></>}
      {at === 1 && <>
        <rect x="75" y="26" width="170" height="30" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={160} y={45} size={10.5}>Mix tasks, more breaks</W>
        <Person x={110} y={112} scale={1.1} fill={SOFT} /><Person x={210} y={112} scale={1.1} />
        <W x={110} y={150} size={10.5}>You</W><W x={210} y={150} size={10.5}>Your employer</W>
      </>}
      {at === 4 && <>
        <Box x={160} y={46} w={200} text="Access to Work grant" lit /><Box x={160} y={82} w={200} text="Reasonable adjustments" />
        <rect x="104" y="116" width="112" height="40" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[0, 1, 2].map(row => [0, 1, 2, 3, 4, 5, 6].map(col => <rect key={`${row}${col}`} x={112 + col * 14} y={122 + row * 10} width="10" height="7" rx="1.5" fill={row === 2 && col > 1 && col < 5 ? INK : SOFT} />))}
        <W x={160} y={176} size={10}>A special keyboard</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TeCourtSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Racquet sports: under 10% of cases", "Ease off for a while, but stay active", "A thicker grip; a strap or brace", "Then strengthen the wrist and elbow", "Staying active helps more than rest"];
  const tops = ["Tennis, squash, badminton", "Ease off, stay active", "Change your kit", "Strengthen gradually", "Keep active while you wait"];
  const current = [-1, 0, -1, 2, 3][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sport" title="Back on court, step by step" label="Sport" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ring showing fewer than 10 in 100 cases come from racquets, and steps back to sport">
      {at === 2 ? <Racquet x={70} y={66} s={1.1} thick /> : <g opacity={at === 0 ? 1 : 0.35}>
        <circle cx="70" cy="90" r="44" fill="none" stroke={LINE} strokeWidth="14" />
        <path d="M70 46 A44 44 0 0 1 91.2 51.4" fill="none" stroke={GOLD} strokeWidth="14" />
        <W x={70} y={86} size={10.5}>Under</W><W x={70} y={104} size={16} serif>10%</W><W x={70} y={156} size={10}>from racquets</W>
      </g>}
      <W x={225} y={36} size={11}>{tops[at]}</W>
      <g opacity={at === 0 || at === 2 ? 0.35 : 1}>
        {[0, 1, 2, 3].map(index => { const x = 140 + index * 42, top = 170 - (index + 1) * 28, lit = index === current || (at === 4 && index < 3); return <g key={index}>
          <rect x={x} y={top} width="40" height={(index + 1) * 28} rx="4" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <W x={x + 20} y={top + 18} size={10.5} fill={lit ? WHITE : TEXT}>{String(index + 1)}</W>
        </g>; })}
      </g>
      {current >= 0 && <circle cx={160 + current * 42} cy={170 - (current + 1) * 28 - 10} r="6" fill={GOLD} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TeLoopBreak(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["More likely to return after a jab", "Simple exercises keep it strong", "Look again at what set it off", "Not settling? See a GP or physio", "Some conditions can look similar"];
  const centre = [["It can", "come back"], ["Keep the", "arm strong"], ["Change", "the cause"], ["GP or", "physio"], ["Could it be", "something else?"]][at];
  const spots = [{ x: 160, y: 30 }, { x: 224, y: 94 }, { x: 160, y: 158 }, { x: 96, y: 94 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Coming back" title="When it keeps coming back" label="If it keeps coming back" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A loop around the elbow broken by exercise, a changed task and a review">
      <circle cx="160" cy="94" r="64" fill="none" stroke={LINE} strokeWidth="6" />
      {at === 0 && <circle cx="160" cy="94" r="64" fill="none" stroke={GOLD} strokeWidth="4" strokeDasharray="60 40" className={still ? undefined : "lib-why-pulse"} />}
      {spots.map((spot, index) => <circle key={index} cx={spot.x} cy={spot.y} r="20" fill={WHITE} stroke={INK} strokeWidth="2.5" opacity={at === 0 || at === index + 1 ? 1 : 0.45} />)}
      <g opacity={at === 0 || at === 1 ? 1 : 0.45}><path d="M148 30 H172" stroke={INK} strokeWidth="4" /><rect x="142" y="22" width="7" height="16" rx="2" fill={INK} /><rect x="171" y="22" width="7" height="16" rx="2" fill={INK} /></g>
      <g opacity={at === 0 || at === 2 ? 1 : 0.45}><path d="M213 105 L220 98" stroke={INK} strokeWidth="7" strokeLinecap="round" /><path d="M220 98 L234 84" stroke={TEXT} strokeWidth="3" strokeLinecap="round" /></g>
      <g opacity={at === 0 || at === 3 ? 1 : 0.45}><Person x={160} y={168} scale={0.45} /></g>
      <g opacity={at === 0 || at === 4 ? 1 : 0.45}><W x={96} y={101} size={18}>?</W></g>
      {at > 0 && <Ring x={spots[at - 1].x} y={spots[at - 1].y} r={26} still={still} />}
      <W x={160} y={92} size={10.5}>{centre[0]}</W><W x={160} y={106} size={10.5}>{centre[1]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Plantar fasciitis ====================================================================================

function PfBand(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A strong band from heel to toes", "Overload causes tiny tears at the heel", "Spurs are common, but not the cause", "About 1 in 10 at some point in life", "Usually settles; GP if not in 2 weeks"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The band under your foot, strained" label="Plantar fasciitis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A foot side on, with the band under the sole running from the heel to the toes">
      <Foot x={60} y={168} s={1.45} band={at === 0 ? "lit" : "soft"} bone={at === 2} spur={at === 2} />
      {at === 1 && <path d="M68 156 l4 6 l4 -6 l4 6 l4 -6 l4 6" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}
      {at === 0 && <><Box x={232} y={40} w={150} text="Plantar fascia" lit /><W x={232} y={72} size={10.5}>Heel to the toes</W></>}
      {at === 1 && <><Box x={232} y={40} w={150} text="Tiny tears" lit /><W x={232} y={72} size={10.5}>where it starts at the heel</W></>}
      {at === 2 && <><Box x={232} y={40} w={150} text="Heel spur" /><W x={232} y={72} size={10.5}>Often seen, not the cause</W></>}
      {at === 3 && <>{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => <Person key={index} x={180 + (index % 5) * 26} y={index < 5 ? 44 : 82} scale={0.5} fill={index === 0 ? INK : SOFT} />)}
        <W x={232} y={108} size={10.5}>About 1 in 10</W></>}
      {at === 4 && <><Box x={232} y={40} w={150} text="Usually settles" lit /><Box x={232} y={76} w={150} text="GP if not in 2 weeks" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfLoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Strain, though not always clear why", "Doing a lot more than usual", "Unsupportive shoes, tight calves", "Being 40 to 60, or overweight", "Not all heel pain is plantar fasciitis"];
  const lists = [[], ["Long standing", "Running more", "Hard surfaces"], ["Poor cushioning", "Flip-flops", "Tight calf"], [], ["Broken heel bone", "Achilles problems", "Bursitis"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The causes" title="Too much load, too soon" label="Why it happens" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A foot with the things that load the heel listed beside it">
      <Foot x={46} y={168} s={1.05} band={at === 0 ? "lit" : "soft"} heel={at === 1 || at === 3} />
      {at === 2 && <path d="M40 66 L38 124" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />}
      {at === 0 && <><W x={254} y={86} size={34}>?</W><W x={254} y={120} size={10.5}>Not always clear</W></>}
      {lists.map((label, index) => <Box key={label} x={254} y={56 + index * 34} w={116} text={label} size={10} lit={at !== 4} />)}
      {at === 3 && <><Box x={254} y={60} w={116} text="Age 40 to 60" /><Box x={254} y={96} w={116} text="Extra weight" lit /><Arrow d="M120 48 V118" head="M113 111 L120 118 L127 111" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfDayCurve(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Under the heel and arch, often sharp", "Worst with the first steps after rest", "Worse after standing a long time", "No better in 2 weeks? See a GP", "Injury, snap or cannot walk: NHS 111"];
  const boxes = [["Heel and arch", "Sharp, like stones"], ["First steps", "Then it eases"], ["Long on your feet", "End of the day"], ["No better in 2 weeks", "Tingling, diabetes"], []][at];
  const lit = [0, 0, 1, 0, -1][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="Sharpest at the very first step" label="Symptoms" credit="Illustration: Rehyn. A picture of a typical day, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Heel pain through a day: worst at the first steps, easing, then rising by evening">
      <path d="M36 70 V160 H300" fill="none" stroke={LINE} strokeWidth="2" />
      {[{ x: 52, t: "Waking" }, { x: 168, t: "Midday" }, { x: 284, t: "Evening" }].map(tick => <W key={tick.t} x={tick.x} y={178} size={10}>{tick.t}</W>)}
      <path d="M44 80 C60 84 74 132 104 140 C150 150 196 146 234 126 C262 112 280 100 296 94" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" opacity={at === 1 || at === 2 ? 1 : 0.3} />
      {at === 1 && <Ring x={44} y={80} r={13} still={still} />}
      {at === 2 && <Ring x={294} y={94} r={13} still={still} />}
      {boxes.map((label, index) => <Box key={label} x={index ? 230 : 90} y={36} w={136} text={label} size={10} lit={index === lit} />)}
      {at === 4 && <Box x={160} y={36} w={250} text="NHS 111: injury, snap, cannot walk" size={10} lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfHeelTimeline(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Slow, but usually settles in time", "One review: 80% improve in 12 months", "Treated early, often gone in weeks", "If it lasts, a referral may follow", "Check in with a GP if not improving"];
  const ticks = [{ x: 50, t: "2 weeks" }, { x: 116, t: "12 weeks" }, { x: 184, t: "6 months" }, { x: 240, t: "1 year" }, { x: 290, t: "18 months" }];
  const lit = [[4], [3], [0, 1], [2], [0]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="How long" title="Months, not days, to settle" label="How long it lasts" credit="Illustration: Rehyn. A picture of the idea, not a prediction."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from two weeks to eighteen months for heel pain to settle">
      <path d="M30 140 H300" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {at === 2 && <path d="M50 140 H116" stroke={GOLD} strokeWidth="8" strokeLinecap="round" />}
      {ticks.map((tick, index) => <g key={tick.t}><circle cx={tick.x} cy={140} r="7" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={tick.x} y={164} size={10}>{tick.t}</W></g>)}
      {at === 0 && <><Box x={200} y={70} w={180} text="Up to 18 months to recover" size={10} /><Arrow d="M40 116 H280" head="M273 110 L280 116 L273 122" /></>}
      {at === 1 && <>{Array.from({ length: 10 }, (_, index) => <circle key={index} cx={70 + index * 20} cy={64} r="7" fill={index < 8 ? INK : SOFT} />)}
        <W x={160} y={100} size={10.5}>80 in 100 improve within 12 months</W></>}
      {at === 2 && <><Box x={100} y={60} w={140} text="Treat it early" lit /><Box x={226} y={100} w={160} text="Tissues: 6 to 12 weeks" /></>}
      {at === 3 && <Box x={184} y={80} w={200} text="A referral may be considered" lit />}
      {at === 4 && <><Box x={96} y={70} w={150} text="2 weeks: see a GP" lit /><Box x={232} y={104} w={150} text="Night pain: a doctor" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfStretches(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Stretch regularly for 4 to 6 weeks", "Ask first, then start gently", "Towel stretch: hold for 30 seconds", "Roll the arch on a tin, twice a day", "Against a wall: repeat 10 times"];
  const panel = (index: number) => at === 0 || at === index + 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Stretches" title="A towel, a tin, a wall" label="Stretches" credit={checkFirst}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three stretches: a towel round the foot, a foot rolling a tin, and a calf stretch against a wall">
      {[10, 112, 214].map((x, index) => <g key={x} opacity={panel(index) ? 1 : 0.35}>
        <rect x={x} y={30} width="96" height="124" rx="10" fill={WHITE} stroke={at === index + 2 ? INK : LINE} strokeWidth={at === index + 2 ? 3 : 2} />
        <W x={x + 48} y={174} size={10.5}>{["Towel", "Tin", "Wall"][index]}</W>
      </g>)}
      <g opacity={panel(0) ? 1 : 0.35}>
        <Foot x={36} y={132} s={0.5} band="soft" />
        <path d="M88 133 C100 140 106 124 98 112 C90 94 72 70 58 54" fill="none" stroke={GOLD} strokeWidth="5" strokeLinecap="round" />
        <Fist x={56} y={50} r={9} />
      </g>
      <g opacity={panel(1) ? 1 : 0.35}>
        <Foot x={130} y={106} s={0.55} band="soft" />
        <circle cx="161" cy="114" r="9" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M122 126 H200" stroke={LINE} strokeWidth="2" />
        <Arrow d="M140 140 H182" head="M147 134 L140 140 L147 146 M175 134 L182 140 L175 146" />
      </g>
      <g opacity={panel(2) ? 1 : 0.35} stroke={INK} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M296 36 V148" /><path d="M222 148 H296" stroke={LINE} strokeWidth="2" />
        <circle cx="258" cy="54" r="8" fill={INK} stroke="none" />
        <path d="M256 62 L246 102 M254 72 L294 76 M246 102 L266 122 L264 146 M246 102 L226 146" />
        {at === 4 && <path d="M238 122 L230 140" stroke={GOLD} strokeWidth="6" />}
      </g>
      {at === 1 && <Box x={160} y={92} w={180} text="Ask a physio first" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfShoeLift(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Cushioned heel, about 2 to 3cm raised", "Not flip-flops, heels or flat shoes", "Insoles and heel pads can help", "A podiatrist can advise if no better", "Leave a 1cm gap; get feet measured"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Footwear" title="Cushion the heel, lift it slightly" label="Shoes and insoles" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A laced sports shoe with a slightly raised heel, beside shoes to avoid">
      <Shoe x={16} y={150} s={1.1} lit={at === 0} dim={at === 1 || at === 3} />
      {at === 0 && <><path d="M8 150 V121 M4 150 H12 M4 121 H12" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /><W x={8} y={170} size={10} anchor="start">2 to 3cm</W>
        {["Laces or a strap", "Cushioned heel", "Arch support"].map((label, index) => <Box key={label} x={255} y={60 + index * 34} w={116} text={label} size={10} lit={index === 1} />)}</>}
      {at === 1 && <>
        <path d="M208 58 C218 62 232 72 246 72 V76 H214 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M210 60 V80" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="286" cy="70" rx="20" ry="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M276 66 L286 71 L296 66" fill="none" stroke={INK} strokeWidth="2.5" />
        <path d="M206 132 H246 C246 122 236 116 224 116 C216 116 214 126 214 132" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M266 132 H306 C306 124 298 120 288 120 H274 C268 120 266 126 266 132 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        {[[226, 68], [286, 70], [226, 124], [286, 126]].map(([x, y]) => <Cross key={`${x}${y}`} x={x} y={y} s={14} />)}
        <W x={226} y={100} size={9.5}>Heels</W><W x={286} y={100} size={9.5}>Flip-flops</W><W x={226} y={158} size={9.5}>Slippers</W><W x={286} y={158} size={9.5}>Flat shoes</W>
      </>}
      {at === 2 && <><path d="M25 123 L82 133 H170" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" /><ellipse cx="36" cy="125" rx="12" ry="4" fill={GOLD} />
        <Box x={255} y={56} w={116} text="Insoles" lit /><Box x={255} y={90} w={116} text="Heel pads" lit /><W x={255} y={128} size={10}>Magnetic ones:</W><W x={255} y={142} size={10}>no proof better</W></>}
      {at === 3 && <><W x={255} y={40} size={10.5}>Insoles, shoes,</W><W x={255} y={56} size={10.5}>night splints</W><Person x={255} y={116} /><Box x={255} y={152} w={116} text="Podiatrist" lit /></>}
      {at === 4 && <><path d="M182 104 H194 M182 98 V110 M194 98 V110" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /><W x={170} y={90} size={10.5}>1cm gap</W>
        {["Get measured", "Try on later", "Take your insoles"].map((label, index) => <Box key={label} x={258} y={46 + index * 34} w={110} text={label} size={10} lit={index === 0} />)}</>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfIceStool(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Rest and raise your foot on a stool", "Wrapped ice for up to 20 minutes", "Paracetamol or gel; ask a pharmacist", "Smallest dose, for the shortest time", "Taken too much? Get help from 111"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pain relief" title="Ice, rest and the right painkiller" label="Ice, rest and painkillers" credit="Illustration: Rehyn. Ask a pharmacist which painkiller suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A leg resting with the foot raised on a stool and a wrapped ice pack on the heel">
      <Limb d="M24 114 L140 114" w={18} />
      <Foot x={212} y={120} s={0.75} rotate={-90} />
      {(at === 1 || at === 4) && <g opacity={at === 4 ? 0.4 : 1}><rect x="210" y="92" width="24" height="36" rx="6" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M210 104 H234 M210 116 H234" stroke={LINE} strokeWidth="2" /></g>}
      <rect x="160" y="130" width="88" height="10" rx="3" fill={at === 0 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M170 140 L164 180 M238 140 L244 180" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <><Box x={84} y={40} w={140} text="Rest and raise" lit /><Box x={84} y={74} w={140} text="Avoid long standing" size={10} /></>}
      {at === 1 && <><Clock x={30} y={52} r={16} hand={1.5} /><W x={104} y={48} size={12}>20 minutes</W><W x={104} y={64} size={10}>every 2 to 3 hours</W></>}
      {at === 2 && <><Box x={84} y={40} w={140} text="Paracetamol" /><Box x={84} y={74} w={140} text="Ibuprofen gel" /></>}
      {at === 3 && <><Box x={84} y={40} w={140} text="Ibuprofen: 10 days" size={10} /><Box x={84} y={74} w={140} text="Paracetamol: 3 days" size={10} /></>}
      {at === 4 && <><Box x={84} y={40} w={140} text="Too much? NHS 111" lit /><Box x={84} y={74} w={140} text="A&E? Do not drive" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfCareStairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A physio checks how you walk and move", "Insoles, shoes and night splints", "Injections: usually up to 3 a year", "Sound waves; evidence inconsistent", "Less commonly, a surgeon referral"];
  const steps = ["Physio", "Podiatry", "Injection", "Shockwave", "Surgery"];
  const notes = [["Often no GP referral", "Exercises and taping"], ["Insoles and shoes", "Splints for the night"], ["Up to 3 a year", "Can be very painful"], ["Sound waves", "Special arrangements"], ["Less common", "Check HCPC registration"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Further treatment" title="When home care is not enough" label="Further treatment" credit={yourTeam}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Steps of treatment: physiotherapy, podiatry, injection, shockwave therapy and surgery">
      {steps.map((step, index) => { const x = 14 + index * 60, top = 170 - (index + 1) * 26, lit = index === at; return <g key={step}>
        <rect x={x} y={top} width="56" height={(index + 1) * 26} rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x + 28} y={top + 17} size={9.5} fill={lit ? WHITE : TEXT}>{step}</W>
        {lit && <circle cx={x + 28} cy={top - 12} r="6" fill={GOLD} />}
      </g>; })}
      <Box x={92} y={36} w={150} text={notes[0]} lit />
      <W x={92} y={66} size={10.5}>{notes[1]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfTillShift(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Long standing in unsupportive shoes", "Cushioned shoes for long shifts", "Break up standing; rest your foot", "Talk to your manager, HR or union rep", "Access to Work: a grant, not a loan"];
  const tops = ["Long standing, unsupportive shoes", "More depth and cushioning", "A break if you work 6 hours", "Manager, HR or union rep", "Access to Work grant"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="At work" title="On your feet all shift" label="Standing at work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A worker standing at a till in cushioned boots">
      <Box x={160} y={30} w={230} text={tops[at]} lit={at !== 0} />
      <path d="M142 136 V166 M158 136 V166" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <rect x="130" y="162" width="20" height="12" rx="3" fill={at === 1 ? GOLD : INK} /><rect x="152" y="162" width="20" height="12" rx="3" fill={at === 1 ? GOLD : INK} />
      <Person x={150} y={118} scale={1.3} />
      {at === 3 ? <Person x={252} y={100} scale={0.9} fill={SOFT} /> : <g><rect x="266" y="78" width="32" height="26" rx="3" fill={INK} /><rect x="271" y="83" width="22" height="8" rx="2" fill={TINT} /></g>}
      <rect x="196" y="104" width="108" height="72" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {at === 3 && <g><rect x="178" y="56" width="48" height="22" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" />{[190, 202, 214].map(x => <circle key={x} cx={x} cy={67} r="2.5" fill={INK} />)}</g>}
      {(at === 0 || at === 2) && <><Clock x={60} y={96} r={22} hand={2.2} />{at === 2 && <path d="M60 96 L60 74 A22 22 0 0 1 82 96 Z" fill={GOLD} opacity="0.7" />}<W x={60} y={140} size={10.5}>{at === 0 ? "Long hours" : "Rest and raise"}</W></>}
      {at === 1 && <><W x={60} y={96} size={10.5}>Kitemark</W><W x={60} y={110} size={10.5}>or CE mark</W></>}
      {at === 4 && <><W x={60} y={96} size={10.5}>Equipment</W><W x={60} y={110} size={10.5}>or changes</W><W x={60} y={134} size={10}>Not paid back</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfSwimBike(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Swimming and cycling spare the heel", "Pause the activity causing the pain", "Back to running: build up slowly", "Aim for 150 moderate minutes a week", "Warm up, start slowly, build up"];
  const gentle = at === 0 || at === 3 || at === 4;
  const run = at === 1 || at === 2 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Staying active" title="Swim and cycle while it heals" label="Staying active" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A swimmer, an exercise bike and a running shoe">
      <g opacity={gentle ? 1 : 0.3}>
        <Waves x={24} y={112} /><circle cx="50" cy="98" r="8" fill={INK} /><path d="M58 102 C64 82 84 80 92 94" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <g fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="138" cy="108" r="16" /><circle cx="182" cy="108" r="16" />
          <path d="M138 108 L154 84 H176 L182 108 M154 84 L160 108 L176 84 M160 108 H138 M148 78 H162 M176 84 L180 76 H188" /></g>
      </g>
      <g opacity={run ? 1 : 0.3}><Shoe x={222} y={118} s={0.5} lit={at === 2} /></g>
      {at === 1 && <g fill={GOLD}><rect x="250" y="44" width="7" height="22" rx="2" /><rect x="263" y="44" width="7" height="22" rx="2" /></g>}
      <W x={60} y={146} size={10.5}>Swimming</W><W x={160} y={146} size={10.5}>Cycling</W><W x={260} y={146} size={10.5}>Running</W>
      {at === 0 && <W x={160} y={42} size={11}>Less pressure on your feet</W>}
      {at === 2 && <W x={160} y={42} size={11}>3 or 4 similar runs, then more</W>}
      {at === 3 && <W x={160} y={44} size={16} serif>150 minutes a week</W>}
      {at === 4 && <Arrow d="M40 64 C120 60 200 50 280 34" head="M272 32 L280 34 L275 41" />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfEaseStrain(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Extra weight adds strain to the heels", "Even a small loss can ease pain", "BMI is only a rough guide", "Small changes; a free 12-week plan", "The water supports your weight"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Weight" title="Small changes, less strain" label="Weight and foot strain" credit="Illustration: Rehyn. A picture of the idea, not a target."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A foot with an arrow of load pressing down on the heel, easing">
      <Foot x={70} y={168} s={1.2} band="soft" heel={at === 0 || at === 1} />
      {(at === 0 || at === 1) && <g stroke={GOLD} strokeWidth={at === 0 ? 8 : 3} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M81 6 V36" /><path d="M71 28 L81 40 L91 28" /></g>}
      {at === 0 && <><Box x={256} y={46} w={108} text="Extra load" /><W x={256} y={80} size={10.5}>One of several</W><W x={256} y={94} size={10.5}>risk factors</W></>}
      {at === 1 && <><Box x={256} y={46} w={108} text="A small loss" lit /><W x={256} y={80} size={10.5}>can ease pain</W></>}
      {at === 2 && <><rect x="238" y="24" width="36" height="50" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="244" y="30" width="24" height="12" rx="2" fill={TINT} />
        {[0, 1].map(row => [0, 1, 2].map(col => <circle key={`${row}${col}`} cx={247 + col * 9} cy={52 + row * 11} r="2.5" fill={SOFT} />))}
        <W x={256} y={96} size={10.5}>BMI and waist</W><W x={256} y={110} size={10.5}>to height</W></>}
      {at === 3 && <><Cal x={256} y={52} w={70} text="12 weeks" lit /><W x={256} y={96} size={10.5}>Small, realistic</W><W x={256} y={110} size={10.5}>changes</W></>}
      {at === 4 && <><Waves x={214} y={66} /><circle cx="240" cy="54" r="8" fill={INK} /><path d="M248 58 C254 42 270 40 278 52" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <W x={256} y={100} size={10.5}>Swimming</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfYearWheel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["The habits that ease it keep it away", "Supportive shoes, even in summer", "Keep up calf and sole stretches", "Build up running slowly; warm up", "Keeps coming back? See a GP"];
  const centre = [["Same", "habits"], ["All", "year"], ["Keep", "going"], ["Step", "by step"], ["See a", "GP"]][at];
  const cx = 160, cy = 96, R = 68;
  const wedge = (a0: number, a1: number) => `M${cx} ${cy} L${cx + R * Math.cos(a0)} ${cy + R * Math.sin(a0)} A${R} ${R} 0 0 1 ${cx + R * Math.cos(a1)} ${cy + R * Math.sin(a1)} Z`;
  const quarters = [{ a: Math.PI, icon: { x: 124, y: 60 } }, { a: Math.PI * 1.5, icon: { x: 196, y: 60 } }, { a: 0, icon: { x: 196, y: 132 } }, { a: Math.PI * 0.5, icon: { x: 124, y: 132 } }];
  const litQuarter = [-1, 1, 2, 3, -1][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Prevention" title="Keeping the heel settled" label="Stopping it coming back" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A wheel of habits round the year: good shoes, summer, stretches and building up">
      <circle cx={cx} cy={cy} r={R} fill={WHITE} />
      {quarters.map((quarter, index) => (at === 0 || index === litQuarter) && <path key={index} d={wedge(quarter.a, quarter.a + Math.PI / 2)} fill={SOFT} opacity={at === 0 ? 0.45 : 0.8} />)}
      <path d={`M${cx - R} ${cy} H${cx + R} M${cx} ${cy - R} V${cy + R}`} stroke={LINE} strokeWidth="2" />
      <circle cx={cx} cy={cy} r={R} fill="none" stroke={INK} strokeWidth="3" />
      <Shoe x={108} y={70} s={0.22} />
      <circle cx="196" cy="60" r="8" fill={GOLD} />
      <path d="M196 44 V48 M196 72 V76 M180 60 H184 M208 60 H212 M185 49 L188 52 M204 68 L207 71 M207 49 L204 52 M188 68 L185 71" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
      {at === 1 && <><ellipse cx="214" cy="80" rx="9" ry="4" fill={WHITE} stroke={INK} strokeWidth="2" /><Cross x={214} y={80} s={8} /></>}
      <path d="M184 146 H208" stroke={INK} strokeWidth="3" strokeLinecap="round" /><Arrow d="M196 142 V118" head="M190 124 L196 118 L202 124" />
      {[0, 1, 2].map(index => <rect key={index} x={110 + index * 10} y={142 - (index + 1) * 7} width="8" height={(index + 1) * 7} rx="1.5" fill={INK} />)}
      {litQuarter >= 0 && <Ring x={quarters[litQuarter].icon.x} y={quarters[litQuarter].icon.y} r={20} still={still} />}
      <circle cx={cx} cy={cy} r="30" fill={at === 4 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
      <W x={cx} y={cy - 2} size={10} fill={at === 4 ? WHITE : TEXT}>{centre[0]}</W><W x={cx} y={cy + 12} size={10} fill={at === 4 ? WHITE : TEXT}>{centre[1]}</W>
      <W x={46} y={64} size={10.5}>Good shoes</W><W x={46} y={136} size={10.5}>Build up</W><W x={274} y={64} size={10.5}>Summer</W><W x={274} y={136} size={10.5}>Stretches</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function TendonPieceView({ piece, ...props }: { piece: TendonPiece } & PieceProps) {
  switch (piece) {
    case "te-outer-elbow": return <TeOuterElbow {...props} />;
    case "te-grip-twist": return <TeGripTwist {...props} />;
    case "te-two-sides": return <TeTwoSides {...props} />;
    case "te-months-line": return <TeMonthsLine {...props} />;
    case "te-ice-gel": return <TeIceGel {...props} />;
    case "te-tin-lift": return <TeTinLift {...props} />;
    case "te-strap-plan": return <TeStrapPlan {...props} />;
    case "te-four-cards": return <TeFourCards {...props} />;
    case "te-swap-grips": return <TeSwapGrips {...props} />;
    case "te-desk-tools": return <TeDeskTools {...props} />;
    case "te-court-steps": return <TeCourtSteps {...props} />;
    case "te-loop-break": return <TeLoopBreak {...props} />;
    case "pfas-band": return <PfBand {...props} />;
    case "pfas-load-list": return <PfLoad {...props} />;
    case "pfas-day-curve": return <PfDayCurve {...props} />;
    case "pfas-heel-timeline": return <PfHeelTimeline {...props} />;
    case "pfas-towel-tin-wall": return <PfStretches {...props} />;
    case "pfas-shoe-lift": return <PfShoeLift {...props} />;
    case "pfas-ice-stool": return <PfIceStool {...props} />;
    case "pfas-care-stairs": return <PfCareStairs {...props} />;
    case "pfas-till-shift": return <PfTillShift {...props} />;
    case "pfas-swim-bike": return <PfSwimBike {...props} />;
    case "pfas-ease-strain": return <PfEaseStrain {...props} />;
    case "pfas-year-wheel": return <PfYearWheel {...props} />;
    default: return null;
  }
}
