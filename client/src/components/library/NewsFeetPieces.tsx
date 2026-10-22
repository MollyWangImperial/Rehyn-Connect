import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { FEET_PIECES, type FeetPiece } from "@/content/feet-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Achilles tendinopathy and Bunions pages' own pieces (content/feet-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isFeetPiece = (piece: NewsPiece): piece is FeetPiece => (FEET_PIECES as readonly string[]).includes(piece);

const checkFirst = "Illustration: Rehyn. Check with a physiotherapist before starting new exercises.";
const yourTeam = "Illustration: Rehyn. Your own GP or team will say what suits you.";
const pharmacist = "Illustration: Rehyn. Ask a pharmacist which painkiller suits you.";
const notPrediction = "Illustration: Rehyn. A picture of the idea, not a prediction.";

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
const Waves = ({ x, y }: { x: number; y: number }) =>
  <path d={`M${x} ${y} q9 -8 18 0 t18 0 t18 0 t18 0`} fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />;
/** A swimmer in the water, head at (x, y). */
const Swimmer = ({ x, y }: { x: number; y: number }) =>
  <g><Waves x={x - 26} y={y + 14} /><circle cx={x} cy={y} r="8" fill={INK} /><path d={`M${x + 8} ${y + 4} C${x + 14} ${y - 16} ${x + 34} ${y - 18} ${x + 42} ${y - 4}`} fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" /></g>;
/** A bicycle, back wheel centred on (x, y). */
const Bike = ({ x, y }: { x: number; y: number }) =>
  <g fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx={x} cy={y} r="16" /><circle cx={x + 44} cy={y} r="16" />
    <path d={`M${x} ${y} L${x + 16} ${y - 24} H${x + 38} L${x + 44} ${y} M${x + 16} ${y - 24} L${x + 22} ${y} L${x + 38} ${y - 24} M${x + 22} ${y} H${x} M${x + 10} ${y - 30} H${x + 24} M${x + 38} ${y - 24} L${x + 42} ${y - 32} H${x + 50}`} /></g>;

/** A lower leg and foot side on, heel on the ground at (x, y), toes to the right, with the Achilles tendon behind. */
const LEG = "M14 0 C30 0 40 -10 56 -10 C74 -10 84 0 98 0 L120 0 C132 0 134 -8 128 -12 C112 -18 92 -24 70 -34 C52 -42 34 -50 28 -64 C26 -96 30 -126 30 -150 L-12 -150 C-26 -124 -22 -92 -10 -64 L-8 -40 C-16 -26 -12 0 14 0 Z";
const Leg = ({ x, y, s = 1, tendon, spot, insert = false, tears = false, bone = false, calf = false, band = false, pack = false, dim = false }: {
  x: number; y: number; s?: number; tendon?: "lit" | "soft"; spot?: boolean; insert?: boolean; tears?: boolean; bone?: boolean; calf?: boolean; band?: boolean; pack?: boolean; dim?: boolean;
}) =>
  <g transform={`translate(${x} ${y}) scale(${s})`} strokeLinejoin="round" opacity={dim ? 0.35 : 1}>
    <path d={LEG} fill={WHITE} stroke={INK} strokeWidth={3 / s} />
    {calf && <ellipse cx="2" cy="-112" rx="11" ry="26" fill={TINT} />}
    {bone && <ellipse cx="6" cy="-20" rx="13" ry="11" fill={TINT} stroke={LINE} strokeWidth={2 / s} />}
    {tendon && <path d="M-6 -96 C-3 -70 -3 -46 -3 -22" fill="none" stroke={tendon === "lit" ? GOLD : SOFT} strokeWidth={(tendon === "lit" ? 6 : 4.5) / s} strokeLinecap="round" />}
    {tears && <path d="M-10 -58 l7 4 l-7 4 l7 4 l-7 4" fill="none" stroke={GOLD} strokeWidth={3 / s} strokeLinecap="round" strokeLinejoin="round" />}
    {spot && <circle cx="-3" cy="-44" r="6.5" fill={GOLD} />}
    {insert && <circle cx="-4" cy="-16" r="5.5" fill={SOFT} />}
    {band && <rect x="-16" y="-84" width="48" height="16" rx="4" fill={GOLD} opacity="0.85" />}
    {pack && <g><rect x="-32" y="-58" width="22" height="42" rx="6" fill={TINT} stroke={INK} strokeWidth={2.5 / s} /><path d="M-32 -44 H-10 M-32 -30 H-10" stroke={LINE} strokeWidth={2 / s} /></g>}
  </g>;
/** A laced running shoe side on, heel at (x, y); `wedge` adds a heel raise inside. */
const Shoe = ({ x, y, s = 1, lit = false, wedge = false }: { x: number; y: number; s?: number; lit?: boolean; wedge?: boolean }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`} strokeLinejoin="round">
    <path d="M2 -24 C0 -56 22 -66 46 -62 L62 -46 C92 -44 128 -38 148 -16 L60 -16 Z" fill={WHITE} stroke={INK} strokeWidth={2.5 / s} />
    {wedge && <path d="M4 -27 L52 -19 L4 -40 Z" fill={GOLD} stroke={INK} strokeWidth={1.5 / s} />}
    <path d="M0 -26 L60 -16 H148 C156 -14 156 0 144 0 H6 C0 0 -2 -12 0 -26 Z" fill={SOFT} stroke={INK} strokeWidth={2.5 / s} />
    <path d="M66 -44 L72 -36 M76 -44 L82 -36 M86 -43 L92 -35" stroke={lit ? GOLD : INK} strokeWidth={3 / s} strokeLinecap="round" />
  </g>;
/** An everyday laced shoe side on with a low heel, heel at (x, y), toe to the right. */
const Lace = ({ x, y, s = 1, laces = false, insole = false, dim = false }: { x: number; y: number; s?: number; laces?: boolean; insole?: boolean; dim?: boolean }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`} strokeLinejoin="round" opacity={dim ? 0.3 : 1}>
    <path d="M4 -14 C2 -46 14 -62 36 -64 L56 -58 C82 -56 120 -52 150 -38 C170 -30 178 -20 176 -14 Z" fill={WHITE} stroke={INK} strokeWidth={2.5 / s} />
    <path d="M0 -14 H178 C182 -10 182 0 172 0 H6 C0 0 -2 -8 0 -14 Z" fill={SOFT} stroke={INK} strokeWidth={2.5 / s} />
    <path d="M2 0 H36 V8 H4 Z" fill={INK} />
    {insole && <path d="M10 -18 H168" stroke={GOLD} strokeWidth={5 / s} strokeLinecap="round" />}
    <path d="M62 -56 L70 -46 M74 -54 L82 -44 M86 -52 L94 -42" stroke={laces ? GOLD : INK} strokeWidth={3 / s} strokeLinecap="round" />
  </g>;
/** A court shoe for a special occasion, with a low, broad heel; heel at (x, y), toe to the right. */
const Court = ({ x, y, s = 1, lit = false, dim = false }: { x: number; y: number; s?: number; lit?: boolean; dim?: boolean }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`} strokeLinejoin="round" opacity={dim ? 0.3 : 1}>
    <path d="M4 -22 C24 -22 46 -10 72 -4 C100 1 140 0 166 -2 C176 -4 176 -14 166 -18 C140 -26 112 -36 86 -40 C74 -42 64 -38 58 -32 C48 -28 32 -34 20 -40 C10 -44 2 -38 4 -22 Z" fill={WHITE} stroke={INK} strokeWidth={2.5 / s} />
    <path d="M4 -22 H26 L24 0 H8 Z" fill={lit ? GOLD : INK} stroke={INK} strokeWidth={1.5 / s} />
  </g>;
/** A right foot seen from above, heel at (x, y), toes up; `lump` draws a bunion that size, `lean` tips the big toe in. */
const SOLE = "M0 6 C-16 6 -24 -6 -24 -28 C-24 -56 -32 -84 -34 -108 C-36 -126 -28 -136 -14 -138 L18 -134 C32 -132 38 -122 36 -108 C34 -84 22 -60 22 -32 C22 -8 14 6 0 6 Z";
const TOES: [number, number, number, number][] = [[-2, -150, 6.5, 9], [11, -146, 6, 8.5], [23, -139, 5.5, 7.5], [32, -129, 5, 6.5]];
/** The same sole with a bunion of size `b` bulging from the inner edge at the base of the big toe. */
const bunionSole = (b: number) => `M0 6 C-16 6 -24 -6 -24 -28 C-24 -56 -30 -82 -32 -98 C${-32 - b * 1.3} -100 ${-32 - b * 1.3} -128 -28 -130 C-24 -136 -20 -138 -14 -138 L18 -134 C32 -132 38 -122 36 -108 C34 -84 22 -60 22 -32 C22 -8 14 6 0 6 Z`;
const FootTop = ({ x, y, s = 1, lump = 0, lean = 0, bones = false, spread = false, dim = false }: { x: number; y: number; s?: number; lump?: number; lean?: number; bones?: boolean; spread?: boolean; dim?: boolean }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`} strokeLinejoin="round" opacity={dim ? 0.3 : 1}>
    {TOES.map(([tx, ty, rx, ry], index) => <ellipse key={index} cx={tx + (spread ? 5 + index * 5 : lean > 0 ? 2 : 0)} cy={ty - (spread ? 2 : 0)} rx={rx} ry={ry} fill={WHITE} stroke={INK} strokeWidth={2.5 / s} />)}
    <ellipse cx={spread ? -26 : -20} cy="-153" rx="10" ry="16" fill={WHITE} stroke={INK} strokeWidth={2.5 / s} transform={`rotate(${lean * 1.4} -24 -136)`} />
    <path d={lump > 0 ? bunionSole(lump) : SOLE} fill={WHITE} stroke={INK} strokeWidth={3 / s} />
    {bones && <g stroke={SOFT} strokeWidth={5 / s} strokeLinecap="round"><path d="M-12 -44 L-32 -112" /><path d="M-31 -120 L-14 -160" /><circle cx="-32" cy="-116" r="4.5" fill={INK} stroke="none" /></g>}
  </g>;
/** A stick figure: `pose` standing with a hand on a chair, up on tiptoe, or leaning into a calf stretch. */
const Figure = ({ pose, dim = false }: { pose: "stand" | "toes" | "stretch"; dim?: boolean }) =>
  <g opacity={dim ? 0.35 : 1}>
    <path d="M40 166 H190" stroke={LINE} strokeWidth="2" />
    <g stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none"><path d="M132 74 V166 M132 122 H170 M170 122 V166" /></g>
    <g stroke={INK} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {pose === "stretch" ? <>
        <path d="M116 66 L94 112 M114 76 L132 82 M94 112 L114 138 L112 164 M94 112 L58 162 L74 164" />
      </> : <>
        <path d="M92 60 V114 M92 72 L132 82" />
        {pose === "toes" ? <path d="M92 114 V146 L106 164" /> : <path d="M92 114 V164 H108" />}
      </>}
    </g>
    {pose === "stretch" && <path d="M70 146 L62 158" stroke={GOLD} strokeWidth="7" strokeLinecap="round" />}
    <circle cx={pose === "stretch" ? 120 : 92} cy={pose === "stretch" ? 56 : 50} r="10" fill={INK} />
    {pose === "toes" && <Arrow d="M76 162 V136" head="M70 142 L76 136 L82 142" />}
  </g>;

// ==== Achilles tendinopathy ================================================================================

function AchHeelCord(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["The cord from calf muscles to heel", "An overuse injury: pain and stiffness", "Tendinopathy: not always inflammation", "Mostly 2 to 6cm above the heel", "Active or not; peak age 40 to 59"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The strongest tendon, under strain" label="Achilles tendinopathy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A lower leg side on, with the Achilles tendon running from the calf to the heel">
      <Leg x={72} y={178} tendon={at === 0 ? "lit" : "soft"} calf={at === 0} bone={at === 0} tears={at === 1} spot={at === 3} insert={at === 3} />
      {at === 0 && <><path d="M84 66 L163 40 M70 134 L163 84 M86 158 L163 124" stroke={LINE} strokeWidth="2" />
        <Box x={228} y={40} w={130} text="Calf muscles" /><Box x={228} y={84} w={130} text="Achilles tendon" lit /><Box x={228} y={124} w={130} text="Heel bone" /></>}
      {at === 1 && ["Pain", "Stiffness", "Swelling"].map((label, index) => <Box key={label} x={228} y={44 + index * 36} w={120} text={label} lit={index === 0} />)}
      {at === 2 && <><W x={228} y={30} size={10}>Older words</W><Box x={228} y={48} w={130} text="Tendinitis" dim /><Box x={228} y={80} w={130} text="Tendinosis" dim />
        <W x={228} y={108} size={10}>Preferred now</W><Box x={228} y={128} w={130} text="Tendinopathy" lit /></>}
      {at === 3 && <><Ring x={69} y={134} r={13} still={still} /><path d="M44 156 V112 M40 156 H48 M40 112 H48" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        <Box x={228} y={48} w={170} text="Middle: most common" lit /><W x={228} y={80} size={10.5}>2 to 6cm above the heel</W><Box x={228} y={116} w={170} text="Where it joins the heel" /></>}
      {at === 4 && <><Box x={228} y={40} w={160} text="Active or inactive" /><W x={228} y={74} size={10.5}>Under 1 in 20 people</W><W x={228} y={90} size={10.5}>Up to half of athletes</W>
        <Box x={228} y={124} w={150} text="Peak age 40 to 59" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AchLoadSeesaw(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Too much load disrupts its repair", "A sudden change, hills, harder runs", "Standing still, sitting, poor shoes", "Age, arches and some health conditions", "Some medicines can affect the tendon"];
  const pairs: [string, string][] = [["", ""], ["A sudden change", "Hills, harder runs"], ["Standing still", "Sitting a lot"], ["Getting older", "High or flat arches"], ["", ""]];
  const notes = ["Disrupts the tendon's repair", "Hard or sloping surfaces", "Poor shoes, smoking", "Diabetes, arthritis and more", "Steroids, statins, some antibiotics"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The causes" title="Load the tendon was not ready for" label="Why it happens" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A see-saw tipped down by a block of load against the tendon">
      <path d="M24 156 H296" stroke={LINE} strokeWidth="2" />
      <path d="M160 128 L146 156 H174 Z" fill={INK} />
      <g transform="rotate(-12 160 128)">
        <rect x="36" y="124" width="248" height="8" rx="4" fill={INK} />
        <rect x="52" y="86" width="58" height="38" rx="6" fill={at === 0 ? GOLD : INK} />
        <W x={81} y={110} size={11} fill={WHITE}>Load</W>
        <rect x="224" y="100" width="58" height="24" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" />
        <W x={253} y={116} size={10}>Tendon</W>
      </g>
      {at === 0 && <Box x={160} y={34} w={230} text="Too much, repeated or unusual load" lit />}
      {at === 4 && <Box x={160} y={34} w={240} text="Serious side effect? Call NHS 111" lit />}
      {pairs[at][0] && <><Box x={92} y={34} w={128} text={pairs[at][0]} lit /><Box x={232} y={34} w={128} text={pairs[at][1]} /></>}
      <W x={160} y={64} size={10.5}>{notes[at]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AchSnapSigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Pain, stiffness, swelling, tenderness", "Gradual: first only during activity", "Rupture: sudden pain, a snap or pop", "Think it has ruptured? NHS 111", "No better in 2 to 3 weeks? See a GP"];
  const lists: string[][] = [["Pain and swelling", "Morning stiffness", "Tender to touch"], [], ["As if kicked", "A snap or pop", "Cannot go on tiptoe"], ["Get help: NHS 111", "Emergency department", "Minor injuries unit"], []];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="Stiff mornings, or a sudden snap" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A lower leg side on: the usual signs of Achilles tendinopathy, and the signs of a rupture">
      <Leg x={62} y={178} s={0.9} tendon={at === 2 ? "lit" : "soft"} spot={at === 0 || at === 1} />
      {at === 2 && <path d="M30 112 L46 128 L36 130 L52 148" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />}
      {lists[at].map((label, index) => <Box key={label} x={240} y={44 + index * 36} w={160} text={label} lit={index === 0} />)}
      {at === 1 && <><Box x={240} y={48} w={150} text="At first: in activity" /><Arrow d="M240 64 V94" head="M234 88 L240 94 L246 88" /><Box x={240} y={112} w={150} text="Later: even at rest" lit /></>}
      {at === 4 && <><Cal x={240} y={52} w={96} text="2 to 3 weeks" lit /><Box x={240} y={100} w={150} text="Tingling or numbness" /><Box x={240} y={134} w={150} text="Diabetes and foot pain" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AchYearLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Months, sometimes a year or longer", "75% settle within 3 to 6 months", "12 weeks of exercise: clear gains", "Check in at 2 to 3 weeks and 12 weeks", "Over 6 weeks, a scan may be considered"];
  const ticks = [{ x: 28, t: "Start" }, { x: 82, t: "2 to 3 weeks" }, { x: 140, t: "6 weeks" }, { x: 194, t: "12 weeks" }, { x: 248, t: "6 months" }, { x: 294, t: "A year+" }];
  const lit = [[5], [3, 4], [3], [1, 3], [2, 4]][at];
  const flags: { x: number; y: number; w: number; t: string }[] = [[], [], [], [{ x: 82, y: 92, w: 86, t: "GP or physio" }, { x: 194, y: 92, w: 80, t: "Get advice" }], [{ x: 140, y: 92, w: 86, t: "X-ray or scan" }, { x: 248, y: 62, w: 68, t: "Specialist" }]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="How long" title="Months, sometimes a year" label="How long it lasts" credit={notPrediction}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from the start to a year or more, with the points to check in">
      <path d="M28 140 H294" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {at === 1 && <path d="M194 140 H248" stroke={GOLD} strokeWidth="8" strokeLinecap="round" />}
      {ticks.map((tick, index) => <g key={tick.t}><circle cx={tick.x} cy={140} r="7" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={tick.x} y={index % 2 ? 178 : 162} size={10}>{tick.t}</W></g>)}
      {flags.map(flag => <g key={flag.t}><path d={`M${flag.x} 140 V${flag.y}`} stroke={INK} strokeWidth="2.5" /><rect x={flag.x} y={flag.y} width={flag.w} height="20" rx="3" fill={INK} /><W x={flag.x + flag.w / 2} y={flag.y + 14} size={10} fill={WHITE}>{flag.t}</W></g>)}
      {at === 0 && <><Box x={160} y={48} w={200} text="Several months or more" lit /><W x={160} y={80} size={10.5}>Full recovery: a year or longer</W><Arrow d="M28 116 H288" head="M281 110 L288 116 L281 122" /></>}
      {at === 1 && <>{[115, 145, 175, 205].map((x, index) => <circle key={x} cx={x} cy={58} r="11" fill={index < 3 ? INK : SOFT} />)}<W x={160} y={98} size={10.5}>Most cases improve over time</W></>}
      {at === 2 && <><Box x={194} y={64} w={110} text="Clear gains" lit /><W x={194} y={100} size={10.5}>More likely up to 52 weeks</W></>}
      {at === 3 && <W x={160} y={50} size={10.5}>If no better, or getting worse</W>}
      {at === 4 && <W x={140} y={46} size={10.5}>To check for other conditions</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AchHeelRaise(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A loading plan, 2 to 3 times a week", "Check with a GP or physio first", "Heel raises, seated or standing", "Calf stretches, held up to 30 seconds", "Keep pain at 5 out of 10 or less"];
  const pose = at === 2 ? "toes" : at === 3 ? "stretch" : "stand";
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exercises" title="Build the tendon up slowly" label="Loading exercises" credit={checkFirst}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A figure holding a chair for heel raises, beside a pain guide from 0 to 10">
      <Figure pose={pose} dim={at === 1 || at === 4} />
      {at === 0 && <><Cal x={250} y={56} w={104} text="2 to 3 a week" lit /><W x={250} y={104} size={10.5}>Built up over time</W></>}
      {at === 1 && <><Box x={250} y={60} w={130} text="GP or physio first" lit /><W x={250} y={96} size={10.5}>Stop if it gets worse</W></>}
      {at === 2 && ["Seated or standing", "Lift heels slowly", "Lower slowly"].map((label, index) => <Box key={label} x={250} y={52 + index * 36} w={124} text={label} lit={index === 1} />)}
      {at === 3 && <><Box x={250} y={60} w={140} text="Hold 20 to 30 seconds" lit /><W x={250} y={96} size={10.5}>Towel: 30 seconds,</W><W x={250} y={112} size={10.5}>three times each foot</W></>}
      {at === 4 && <><W x={250} y={40} size={10.5}>Pain out of 10</W><Gauge x={250} y={110} r={46} value={0.5} /><W x={204} y={130} size={10}>0</W><W x={296} y={130} size={10}>10</W>
        <W x={250} y={154} size={10.5}>No worse next morning</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AchIceBreaks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Less of what hurts, not complete rest", "Wrapped heat or ice, up to 20 minutes", "A pharmacist can suggest a painkiller", "Smallest dose, for the shortest time", "A snug bandage, off before bed"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Self-care" title="Less of what hurts, not bed rest" label="Rest, ice and painkillers" credit={pharmacist}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A lower leg with a wrapped pack at the heel, beside painkillers and a bandage">
      <Leg x={64} y={178} s={0.9} tendon="soft" pack={at === 1} band={at === 4} />
      {at === 0 && <>{["Take breaks", "Do less", "Change activity"].map((label, index) => <Box key={label} x={240} y={44 + index * 36} w={140} text={label} lit={index === 0} />)}<W x={240} y={146} size={10.5}>Not complete rest</W></>}
      {at === 1 && <><Clock x={240} y={58} r={22} hand={2.1} /><W x={240} y={104} size={10.5}>Up to 20 minutes</W><W x={240} y={120} size={10.5}>Never on bare skin</W></>}
      {at === 2 && <><Pill x={240} y={54} /><W x={240} y={88} size={10.5}>Ask a pharmacist</W><W x={240} y={112} size={10}>Paracetamol, ibuprofen</W></>}
      {at === 3 && <><Box x={240} y={40} w={160} text="Paracetamol: 3 days" size={10} /><Box x={240} y={74} w={160} text="Ibuprofen tablets: 10 days" size={10} /><Box x={240} y={108} w={160} text="Too much? NHS 111" lit />
        <W x={240} y={138} size={10}>Unless a doctor advises</W></>}
      {at === 4 && <><Box x={240} y={44} w={140} text="Snug, not tight" lit /><Box x={240} y={80} w={140} text="Off before bed" /><W x={240} y={116} size={10.5}>Keep it moving</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AchHeelWedge(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Well-fitting shoes ease the load", "A small heel raise, on both sides", "Insoles: little evidence they help", "Fitted running shoes, softer ground", "Wide, low heel, soft sole; 1cm gap"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Footwear" title="A small lift, on both sides" label="Shoes and heel raises" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two shoes, each with a small heel raise, and a level between them">
      {at === 0 && <><Shoe x={20} y={150} s={0.95} lit /><Box x={248} y={60} w={130} text="Well-fitting" lit /><Box x={248} y={96} w={130} text="Right for the activity" size={10} /></>}
      {at === 1 && <><Shoe x={10} y={156} s={0.78} wedge /><Shoe x={166} y={156} s={0.78} wedge />
        <rect x="110" y="40" width="100" height="22" rx="11" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M150 42 V60 M170 42 V60" stroke={LINE} strokeWidth="2" /><ellipse cx="160" cy="51" rx="9" ry="6" fill={GOLD} />
        <W x={160} y={86} size={10.5}>Keeps you balanced</W></>}
      {at === 2 && <><g transform="translate(30 110) rotate(90) scale(0.9)"><path d={SOLE} fill={TINT} stroke={INK} strokeWidth="3" /></g>
        {["Referral if needed", "Little or no evidence", "Magnetic: no better"].map((label, index) => <Box key={label} x={246} y={50 + index * 36} w={140} text={label} size={10} lit={index === 1} />)}</>}
      {at === 3 && <><Shoe x={16} y={132} s={0.9} /><path d="M10 150 q12 -8 24 0 t24 0 t24 0 t24 0 t24 0 t24 0" fill="none" stroke={SOFT} strokeWidth="4" strokeLinecap="round" />
        <Box x={250} y={56} w={120} text="Get fitted" /><Box x={250} y={92} w={120} text="Softer surface" lit /><W x={250} y={128} size={10}>No need to spend a lot</W></>}
      {at === 4 && <><Lace x={20} y={150} s={0.85} /><path d="M158 136 H170 M158 130 V142 M170 130 V142" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        <Box x={250} y={50} w={130} text="Wide, low heel" lit /><Box x={250} y={84} w={130} text="Soft sole" /><W x={250} y={120} size={10.5}>1cm toe gap</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AchCareSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Physio: often no GP referral needed", "Loading exercises and stretches", "Steroid injections: advised against", "Shockwaves: evidence inconsistent", "Surgery: after at least 6 months"];
  const stations = [{ x: 40, y: 150, t: "Physio" }, { x: 100, y: 126, t: "Loading" }, { x: 160, y: 102, t: "Steroid" }, { x: 220, y: 78, t: "Shockwave" }, { x: 280, y: 54, t: "Surgery" }];
  const notes = [["Often no GP referral", "Exercises, taping, a splint"], ["Loading and stretches", "Taping: limited evidence"], ["Advised against", "Risk of the tendon tearing"], ["Evidence inconsistent", "Special arrangements"], ["After at least 6 months", "Removes damaged tissue"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Further treatment" title="Physiotherapy first, then other options" label="Further treatment" credit={yourTeam}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path of five stops: physiotherapy, loading, steroid injection crossed out, shockwave and surgery">
      <path d="M40 150 L100 126 L160 102 L220 78 L280 54" stroke={LINE} strokeWidth="4" strokeDasharray="6 6" fill="none" />
      {stations.map((station, index) => <g key={station.t}>
        <circle cx={station.x} cy={station.y} r="17" fill={index === at ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={station.x} y={station.y + 4} size={11} fill={index === at ? WHITE : TEXT}>{String(index + 1)}</W>
        <W x={station.x} y={station.y + 32} size={10}>{station.t}</W>
      </g>)}
      <Cross x={160} y={102} s={10} />
      <Ring x={stations[at].x} y={stations[at].y} r={23} still={still} />
      <Box x={96} y={36} w={170} text={notes[0]} lit />
      <W x={96} y={64} size={10.5}>{notes[1]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AchRunBuild(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Running and jumping load the tendon", "A sharp pain stops running altogether", "Fewer miles and hills; swim or cycle", "3 or 4 similar runs before more", "Warm up 5 to 10 minutes first"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sport" title="Ease off, then build back" label="Running and sport" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A running route, then easing off, swimming and cycling, and building back up run by run">
      {at === 0 && <><path d="M16 150 C50 150 60 100 100 100 C140 100 150 150 190 150 C220 150 230 120 260 120 C280 120 290 150 304 150" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <Shoe x={78} y={96} s={0.32} lit /><Box x={160} y={34} w={230} text="Running, jumping, throwing" lit /><W x={160} y={64} size={10}>6 to 10% of runners, at any one time</W></>}
      {at === 1 && <><rect x="138" y="44" width="14" height="44" rx="3" fill={GOLD} /><rect x="168" y="44" width="14" height="44" rx="3" fill={GOLD} />
        <Box x={160} y={122} w={200} text="Rest until the pain goes" lit /><W x={160} y={156} size={10.5}>Get it checked if it stays</W></>}
      {at === 2 && <><Box x={160} y={36} w={210} text="Fewer miles, fewer hills" lit /><Swimmer x={70} y={98} /><Bike x={196} y={112} />
        <W x={76} y={142} size={10.5}>Swimming</W><W x={218} y={150} size={10.5}>Cycling</W></>}
      {at === 3 && <><Box x={160} y={34} w={230} text="Re-injury is common if too soon" />
        {[0, 1, 2, 3, 4].map(index => <rect key={index} x={60 + index * 44} y={index < 4 ? 116 : 90} width="32" height={index < 4 ? 44 : 70} rx="4" fill={index < 4 ? INK : GOLD} />)}
        <path d="M40 160 H290" stroke={LINE} strokeWidth="2" /><W x={126} y={100} size={10.5}>3 or 4 similar runs</W><W x={252} y={78} size={10.5}>Then more</W></>}
      {at === 4 && <><Clock x={90} y={90} r={30} hand={0.9} /><W x={90} y={144} size={10.5}>5 to 10 minutes</W>
        <Box x={228} y={72} w={150} text="Brisk walk or jog" lit /><W x={228} y={108} size={10.5}>150 moderate minutes a week</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AchShiftBoots(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Staying in work helps recovery", "Break up long spells on your feet", "Cushioned boots, and regular breaks", "Talk to your manager, HR or union rep", "Access to Work may give a grant"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="At work" title="Staying in work helps recovery" label="Standing and walking at work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A worker in safety boots, with breaks in a long shift and a talk with a manager">
      <Person x={70} y={124} scale={1.3} />
      <path d="M62 140 V168 M78 140 V168" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <rect x="48" y="164" width="22" height="12" rx="3" fill={at === 2 ? GOLD : INK} /><rect x="72" y="164" width="22" height="12" rx="3" fill={at === 2 ? GOLD : INK} />
      {at === 0 && <><Box x={225} y={56} w={170} text="Keep working, or return" lit /><W x={225} y={90} size={10.5}>No need to be symptom free</W><W x={225} y={108} size={10.5}>It helps recovery</W></>}
      {at === 1 && <><W x={225} y={46} size={10.5}>Long spells on your feet</W><rect x="150" y="60" width="150" height="20" rx="4" fill={INK} />
        {[186, 222, 258].map(x => <rect key={x} x={x} y={60} width="8" height="20" fill={GOLD} />)}
        <W x={225} y={106} size={10.5}>Break them up</W><W x={225} y={122} size={10.5}>Raise it when resting</W></>}
      {at === 2 && <><Box x={225} y={52} w={170} text="Deeper, cushioned boots" lit /><W x={225} y={84} size={10.5}>Kitemark or CE mark</W>
        <Clock x={176} y={128} r={18} hand={3} /><W x={252} y={124} size={10.5}>Rest break</W><W x={252} y={138} size={10}>if 6 hours or more</W></>}
      {at === 3 && <><rect x="98" y="38" width="60" height="26" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" />{[114, 128, 142].map(x => <circle key={x} cx={x} cy={51} r="3" fill={INK} />)}
        <Person x={240} y={124} scale={1.1} fill={SOFT} /><W x={240} y={50} size={10.5}>Manager, HR</W><W x={240} y={64} size={10.5}>or union rep</W><W x={240} y={160} size={10}>Reasonable adjustments</W></>}
      {at === 4 && <><Box x={225} y={52} w={160} text="Access to Work" lit /><W x={225} y={86} size={10.5}>A grant, not paid back</W><W x={225} y={104} size={10.5}>Equipment or travel costs</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AchEasyLoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Weight is one of many factors", "A small loss can make a difference", "BMI is only a rough guide", "Small changes; a free 12-week plan", "Exercise matters whatever your weight"];
  const chips = [{ x: 160, y: 30, t: "Activity" }, { x: 232, y: 74, t: "Footwear" }, { x: 214, y: 152, t: "Age" }, { x: 106, y: 152, t: "Health" }, { x: 88, y: 74, t: "Weight" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Weight" title="Small changes, less load" label="Weight and tendon strain" credit="Illustration: Rehyn. A picture of the idea, not a target."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Weight as one of several factors around the tendon, and gentle ways to move">
      {at === 0 ? <>
        {chips.map(chip => <path key={chip.t} d={`M160 98 L${chip.x} ${chip.y}`} stroke={LINE} strokeWidth="2" />)}
        <circle cx="160" cy="98" r="32" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={160} y={95} size={10.5}>The</W><W x={160} y={109} size={10.5}>tendon</W>
        {chips.map((chip, index) => <Box key={chip.t} x={chip.x} y={chip.y} w={82} text={chip.t} size={10} lit={index === 4} />)}
      </> : <Leg x={66} y={178} s={0.9} tendon="soft" />}
      {at === 1 && <><Arrow d="M70 6 V34" head="M64 28 L70 34 L76 28" /><Box x={240} y={56} w={140} text="A small loss" lit /><W x={240} y={90} size={10.5}>can make a difference</W></>}
      {at === 2 && <><rect x="222" y="26" width="36" height="52" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="228" y="32" width="24" height="12" rx="2" fill={TINT} />
        {[0, 1].map(row => [0, 1, 2].map(col => <circle key={`${row}${col}`} cx={231 + col * 9} cy={54 + row * 11} r="2.5" fill={SOFT} />))}
        <W x={240} y={104} size={10.5}>BMI: a rough guide</W><W x={240} y={120} size={10.5}>And waist to height</W></>}
      {at === 3 && <><Cal x={240} y={56} w={84} text="12 weeks" lit /><W x={240} y={100} size={10.5}>Free NHS plan</W><W x={240} y={116} size={10.5}>Small, realistic changes</W></>}
      {at === 4 && <><Swimmer x={214} y={52} /><Bike x={210} y={110} /><W x={240} y={146} size={10.5}>Swimming, cycling</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AchEarlyLight(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Re-injury is common if back too soon", "Spot early signs, adjust load early", "Warm up, good shoes, regular breaks", "Keep building calf strength", "Build up slowly; get help if worse"];
  const lamp = [0, 1, 2, 2, 1][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Prevention" title="Spot it early, keep it settled" label="Stopping it coming back" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A traffic light beside the habits that keep the tendon settled">
      <path d="M64 158 V186" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <rect x="40" y="30" width="48" height="128" rx="12" fill={INK} />
      {[56, 94, 132].map((y, index) => <circle key={y} cx={64} cy={y} r="14" fill={index === lamp ? GOLD : LINE} />)}
      {at === 0 && <><Box x={205} y={48} w={180} text="Re-injury is common" lit /><W x={205} y={82} size={10.5}>One study: 41% later had</W><W x={205} y={98} size={10.5}>symptoms in the other leg</W></>}
      {at === 1 && <><Box x={205} y={56} w={170} text="Stiff again?" /><Arrow d="M205 72 V96" head="M199 90 L205 96 L211 90" /><Box x={205} y={114} w={170} text="Adjust load early" lit /></>}
      {at === 2 && ["Warm up first", "Supportive shoes", "Regular breaks"].map((label, index) => <Box key={label} x={205} y={48 + index * 36} w={170} text={label} lit={index === 0} />)}
      {at === 3 && <><Box x={205} y={56} w={170} text="Calf strengthening" lit /><W x={205} y={90} size={10.5}>A loading programme</W><W x={205} y={106} size={10.5}>lowers re-injury risk</W></>}
      {at === 4 && <><Box x={205} y={52} w={190} text="3 or 4 similar runs, then more" size={10} /><Box x={205} y={96} w={190} text="Worse? Talk to a professional" size={10} lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Bunions ==============================================================================================

function BunToeLean(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["A bony lump by the big toe", "The toe drifts in, the bone drifts out", "Not every lump is a bunion", "Only surgery removes it; pain can ease"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A big toe that leans in" label="Bunions" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A foot seen from above, with the big toe leaning in and a lump at its base">
      <FootTop x={92} y={180} s={0.95} lump={12} lean={22} bones={at === 1} />
      {at === 0 && <><Ring x={56} y={72} r={18} still={still} /><Box x={230} y={52} w={150} text="A hard, bony lump" lit /><W x={230} y={86} size={10}>Big toe points to the others</W><Box x={230} y={120} w={150} text="Hallux valgus" /></>}
      {at === 1 && <><Arrow d="M44 110 H22" head="M28 104 L22 110 L28 116" /><Arrow d="M100 28 H124" head="M118 22 L124 28 L118 34" />
        <W x={230} y={50} size={10.5}>Big toe drifts in</W><W x={230} y={74} size={10.5}>Long bone drifts out</W><Box x={230} y={112} w={150} text="Ball of foot widens" lit /></>}
      {at === 2 && <><Box x={230} y={48} w={160} text="Bursa: a fluid sac" /><Box x={230} y={84} w={160} text="Hallux rigidus: stiff toe" size={10} /><W x={230} y={118} size={10.5}>Not the same as</W><W x={230} y={134} size={10.5}>a hallux valgus bunion</W></>}
      {at === 3 && <><Box x={230} y={48} w={160} text="Only surgery removes it" /><Box x={230} y={84} w={160} text="Shoes, pads ease pain" lit /><W x={230} y={118} size={10.5}>Tends to worsen</W><W x={230} y={134} size={10.5}>over time</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BunThreeRoots(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The cause is not always known", "Foot shape runs in families", "Tight shoes make it worse", "Linked to arthritis and arch shape", "Anyone, even children; more in women"];
  const circles = [{ x: 84, y: 78, t: "Family", lx: 70, ly: 70 }, { x: 150, y: 78, t: "Shoes", lx: 164, ly: 70 }, { x: 117, y: 136, t: "Arthritis", lx: 117, ly: 160 }];
  const lit = [-1, 0, 1, 2, -1][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The causes" title="Genes first, shoes make it worse" label="Why bunions form" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three overlapping circles for family, shoes and arthritis">
      <g opacity={at === 4 ? 0.35 : 1}>
        {circles.map((circle, index) => <circle key={circle.t} cx={circle.x} cy={circle.y} r="42" fill={index === lit ? SOFT : WHITE} fillOpacity={index === lit ? 0.75 : 0.6} stroke={INK} strokeWidth={index === lit ? 3 : 2} />)}
        {circles.map(circle => <W key={circle.t} x={circle.lx} y={circle.ly} size={10.5}>{circle.t}</W>)}
        {at === 0 && <W x={117} y={106} size={22}>?</W>}
      </g>
      {at === 0 && <><W x={258} y={70} size={10.5}>Not always</W><W x={258} y={86} size={10.5}>known</W><Box x={258} y={124} w={108} text="3 factors" lit /></>}
      {at === 1 && <><Box x={258} y={60} w={110} text="Runs in families" size={10} lit /><W x={258} y={96} size={10.5}>Foot shape and</W><W x={258} y={112} size={10.5}>structure</W></>}
      {at === 2 && <><Box x={258} y={60} w={110} text="Tight toe area" size={10} lit /><W x={258} y={96} size={10.5}>High heels</W><W x={258} y={112} size={10}>or shoes that pinch</W></>}
      {at === 3 && <><Box x={258} y={52} w={110} text="Osteoarthritis" size={10} /><Box x={258} y={86} w={110} text="Rheumatoid" size={10} lit /><W x={258} y={120} size={10}>High or low arches</W></>}
      {at === 4 && <><W x={258} y={44} size={10.5}>More in women</W><Person x={232} y={96} scale={0.6} /><Person x={258} y={96} scale={0.6} /><Person x={284} y={102} scale={0.42} fill={SOFT} />
        <W x={258} y={132} size={10.5}>Anyone, even</W><W x={258} y={148} size={10.5}>children</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BunSoreSpots(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["A hard lump; worse in shoes, walking", "Size and pain do not always match", "Crowded toes, corns, calluses", "Could be something else, like gout"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="More than a lump by the toe" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A foot from above with the sore spots a bunion can bring">
      {at === 1 ? <>
        <FootTop x={80} y={184} s={0.62} lump={13} lean={24} /><FootTop x={196} y={184} s={0.62} lump={6} lean={10} />
        <path d="M40 106 l4 5 l-4 5" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M150 94 l9 8 l-9 8 l9 8 l-9 8" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <W x={80} y={52} size={10.5}>Large, but</W><W x={80} y={66} size={10.5}>painless</W><W x={196} y={52} size={10.5}>Small, but</W><W x={196} y={66} size={10.5}>very painful</W>
        <W x={278} y={120} size={10}>Wide shoes</W><W x={278} y={134} size={10}>hard to find</W>
      </> : <FootTop x={84} y={182} s={0.95} lump={12} lean={22} />}
      {at === 0 && <><circle cx="49" cy="74" r="7" fill={GOLD} /><Ring x={49} y={74} r={18} still={still} />
        <Box x={232} y={48} w={150} text="Hard lump by big toe" lit /><Box x={232} y={84} w={150} text="Red, hard or swollen" /><W x={232} y={118} size={10.5}>Worse in shoes</W><W x={232} y={134} size={10.5}>and when walking</W></>}
      {at === 2 && <><Ring x={106} y={52} r={24} still={still} />
        {["Crowded smaller toes", "Corns or calluses", "Pain under 2nd toe", "Bursitis"].map((label, index) => <Box key={label} x={232} y={40 + index * 34} w={160} text={label} size={10} lit={index === 0} />)}</>}
      {at === 3 && ["Comes and goes: gout?", "Stiff mornings: arthritis?", "After an injury: a break?", "Broken toe? NHS 111"].map((label, index) => <Box key={label} x={232} y={40 + index * 34} w={170} text={label} size={10} lit={index === 3} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BunWhoToSee(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Not better after a few weeks? See a GP", "Usually diagnosed without scans", "Podiatrists: foot, ankle and leg care", "You may be able to refer yourself", "Hot, red foot and shivery? Phone 111"];
  const arms = [{ y: 52, t: "GP" }, { y: 96, t: "Podiatrist" }, { y: 140, t: "111" }];
  const lit = [0, 0, 1, 1, 2][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Getting help" title="When to get your bunion checked" label="When to see a GP or podiatrist" credit={yourTeam}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A signpost pointing to a GP, a podiatrist and NHS 111">
      <path d="M40 186 H110" stroke={LINE} strokeWidth="2" />
      <rect x="66" y="34" width="8" height="152" rx="2" fill={INK} />
      {arms.map((arm, index) => <g key={arm.t}>
        <path d={`M74 ${arm.y - 14} H150 L164 ${arm.y} L150 ${arm.y + 14} H74 Z`} fill={index === lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={114} y={arm.y + 4} size={11} fill={index === lit ? WHITE : TEXT}>{arm.t}</W>
      </g>)}
      {at === 0 && <><W x={240} y={46} size={10.5}>A few weeks, no better</W><W x={240} y={64} size={10.5}>Stops normal activity</W><W x={240} y={82} size={10.5}>Getting worse</W><Box x={240} y={118} w={140} text="Diabetes: see a GP" lit /></>}
      {at === 1 && <><W x={240} y={52} size={10.5}>Looks at your foot</W><W x={240} y={70} size={10.5}>Asks about symptoms</W><Box x={240} y={108} w={140} text="Usually no scans" lit /></>}
      {at === 2 && <><Box x={240} y={52} w={140} text="Foot, ankle, leg" lit /><W x={240} y={86} size={10.5}>Pads, insoles, splints</W><W x={240} y={104} size={10.5}>Shoe and exercise advice</W><W x={240} y={128} size={10}>Also called chiropodists</W></>}
      {at === 3 && <><Box x={240} y={52} w={140} text="Refer yourself?" lit /><W x={240} y={86} size={10.5}>Ask your GP surgery</W><W x={240} y={104} size={10.5}>Rules vary by area</W><W x={240} y={128} size={10}>Private: check registration</W></>}
      {at === 4 && <><W x={240} y={46} size={10.5}>Very high temperature</W><W x={240} y={64} size={10.5}>Hot and shivery</W><W x={240} y={82} size={10.5}>Red or hot foot</W><Box x={240} y={118} w={140} text="Phone 111" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BunRoomyShoe(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Wide, low heel, soft sole, laces", "A deep, roomy toe box; heel up to 3cm", "1cm toe gap; shop in the afternoon", "Avoid flip-flops and ballet pumps"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Shoes" title="Wide, low and laced up" label="Shoes that help" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A wide, low-heeled laced shoe, with the parts that help a bunion marked">
      {at < 3 && <Lace x={36} y={166} s={1.15} laces={at === 0} />}
      {at === 0 && ["Wide", "Low heel", "Soft sole", "Laces"].map((label, index) => <Box key={label} x={48 + index * 72} y={36} w={64} text={label} size={10} lit={index === 3} />)}
      {at === 1 && <><ellipse cx="216" cy="142" rx="36" ry="24" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" /><path d="M216 70 V116" stroke={LINE} strokeWidth="2" /><W x={216} y={62} size={10.5}>Deep, roomy toe box</W>
        <path d="M30 166 V176" stroke={GOLD} strokeWidth="4" strokeLinecap="round" /><path d="M40 70 L34 160" stroke={LINE} strokeWidth="2" /><W x={60} y={62} size={10.5}>Heel up to 3cm</W></>}
      {at === 2 && <><path d="M232 146 H246 M232 140 V152 M246 140 V152" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /><W x={282} y={150} size={11}>1cm</W>
        <Clock x={50} y={40} r={18} hand={4.2} /><W x={50} y={76} size={10.5}>Afternoon</W><Box x={180} y={48} w={120} text="Get fitted" lit /></>}
      {at === 3 && <>
        <ellipse cx="60" cy="76" rx="26" ry="9" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M44 72 L60 62 L76 72" fill="none" stroke={INK} strokeWidth="2.5" />
        <path d="M134 82 C134 68 146 64 160 66 C172 68 184 72 186 80 C186 84 182 86 176 86 H140 C136 86 134 84 134 82 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M236 84 C236 64 250 60 262 62 L286 74 C290 78 290 86 284 86 H240 C236 86 236 86 236 84 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[[60, 72], [160, 76], [262, 74]].map(([x, y]) => <Cross key={x} x={x} y={y} s={14} />)}
        <W x={60} y={116} size={10.5}>Flip-flops</W><W x={160} y={116} size={10.5}>Ballet pumps</W><W x={262} y={116} size={10.5}>Slip-ons</W>
        <Box x={160} y={156} w={220} text="Take your insoles when buying" lit />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BunPadRow(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Bunion pads stop shoes rubbing", "Insoles, with a good fitting shoe", "Toe spacers may ease pressure", "They ease it, but cannot straighten it"];
  const xs = [36, 98, 160, 222, 284];
  const labels = ["Pad", "Insole", "Spacer", "Splint", "Shield"];
  const lit = [[0, 4], [1], [2, 3], []][at];
  const info = [["Stop shoes rubbing", "Sticky padding can irritate skin"], ["With a good fitting shoe", "Moulded ones: get advice first"], ["May ease pressure", "Splints: limited evidence"], ["Ease symptoms, not the toe", "Severe bunions: only surgery"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pads and supports" title="Pads ease it, they cannot straighten it" label="Pads, insoles and spacers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A row of supports: a bunion pad, an insole, a toe spacer, a splint and a shield">
      {xs.map((x, index) => { const on = lit.includes(index); return <g key={x} opacity={at === 3 || on ? 1 : 0.4}>
        <rect x={x - 28} y={36} width="56" height="68" rx="10" fill={WHITE} stroke={on ? INK : LINE} strokeWidth={on ? 3 : 2} />
        <W x={x} y={124} size={10.5}>{labels[index]}</W>
      </g>; })}
      <g opacity={at === 3 || lit.includes(0) ? 1 : 0.4}><ellipse cx="36" cy="70" rx="18" ry="13" fill={TINT} stroke={INK} strokeWidth="2.5" /><ellipse cx="36" cy="70" rx="7" ry="5" fill={WHITE} stroke={INK} strokeWidth="2" /></g>
      <g opacity={at === 3 || lit.includes(1) ? 1 : 0.4} transform="translate(98 92) scale(0.36)"><path d={SOLE} fill={TINT} stroke={INK} strokeWidth="7" /></g>
      <g opacity={at === 3 || lit.includes(2) ? 1 : 0.4}><ellipse cx="148" cy="70" rx="8" ry="13" fill={WHITE} stroke={INK} strokeWidth="2.5" /><ellipse cx="172" cy="70" rx="8" ry="13" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="155" y="60" width="10" height="22" rx="4" fill={GOLD} /></g>
      <g opacity={at === 3 || lit.includes(3) ? 1 : 0.4}><rect x="216" y="44" width="12" height="52" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="208" y="54" width="28" height="6" rx="2" fill={INK} /><rect x="208" y="80" width="28" height="6" rx="2" fill={INK} /></g>
      <g opacity={at === 3 || lit.includes(4) ? 1 : 0.4}><path d="M266 86 C266 56 302 56 302 86 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /></g>
      <Box x={160} y={152} w={220} text={info[0]} lit />
      <W x={160} y={180} size={10.5}>{info[1]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BunCoolWarm(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Paracetamol or ibuprofen can help", "Ibuprofen is not suitable for everyone", "Wrapped ice, up to 5 minutes at a time", "Wide shoes and pads ease pain too"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pain relief" title="Cool, warm, or a tablet" label="Pain relief" credit={pharmacist}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Painkillers, a wrapped ice pack and a heat pack, and a wide shoe with a bunion pad">
      {at === 0 && <><Pill x={110} y={70} rotate={-20} /><Pill x={210} y={70} /><W x={110} y={106} size={10.5}>Paracetamol</W><W x={210} y={106} size={10.5}>Ibuprofen</W>
        <W x={160} y={140} size={10.5}>Can help you move</W><W x={160} y={156} size={10.5}>more comfortably</W></>}
      {at === 1 && <><Pill x={60} y={60} /><W x={60} y={94} size={10.5}>Ibuprofen</W><W x={60} y={128} size={10}>Tablets: no more</W><W x={60} y={142} size={10}>than 10 days, unless</W><W x={60} y={156} size={10}>a doctor says</W>
        {["Stomach ulcer", "Asthma", "Heart, liver or kidney", "Pregnancy"].map((label, index) => <Box key={label} x={224} y={40 + index * 32} w={170} text={label} size={10} lit={index === 0} />)}</>}
      {at === 2 && <>
        <rect x="40" y="60" width="70" height="46" rx="10" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M40 75 H110 M40 90 H110" stroke={LINE} strokeWidth="2" /><W x={75} y={128} size={10.5}>Ice: up to 5 min</W>
        <rect x="140" y="60" width="70" height="46" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M156 96 q6 -8 0 -16 t0 -16 M175 96 q6 -8 0 -16 t0 -16 M194 96 q6 -8 0 -16 t0 -16" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
        <W x={175} y={128} size={10.5}>Heat: may help</W><Clock x={268} y={78} r={24} hand={0.52} /><W x={268} y={124} size={10.5}>5 minutes</W>
        <W x={160} y={162} size={10.5}>Diabetes or numb feet: avoid</W></>}
      {at === 3 && <><Lace x={20} y={160} s={0.7} /><W x={84} y={86} size={10.5}>Wide, low heel</W>
        <ellipse cx="230" cy="96" rx="26" ry="18" fill={TINT} stroke={INK} strokeWidth="2.5" /><ellipse cx="230" cy="96" rx="10" ry="7" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={230} y={136} size={10.5}>Bunion pads</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BunOpMonths(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Offered for pain, not for looks", "Usually home the same day", "Feet raised for at least 2 weeks", "Toes may be stiffer; it can come back", "Clot signs: urgent GP or NHS 111"];
  const ticks = [{ x: 28, t: "Same day" }, { x: 82, t: "2 weeks" }, { x: 140, t: "6 to 8 weeks" }, { x: 210, t: "3 to 6 months" }, { x: 292, t: "1 year" }];
  const lit = [[], [0], [1, 2, 3], [4], []][at];
  const lists: string[][] = [[], [], ["Feet raised: at least 2 weeks", "No driving: 6 to 8 weeks", "No sport: 3 to 6 months"], ["Toes may be stiffer", "May not be fully straight", "Bunions can come back"],
    ["Throbbing, swollen leg: urgent GP or 111", "Breathless or chest pain: 999 or A&E", "Infection signs: a doctor straight away"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Surgery" title="A day in hospital, months to heal" label="Bunion surgery and recovery" credit={yourTeam}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from the day of bunion surgery to a year, with signs that need help">
      <g opacity={at === 4 ? 0.3 : 1}>
        <path d="M28 140 H292" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
        {ticks.map((tick, index) => <g key={tick.t}><circle cx={tick.x} cy={140} r="7" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={tick.x} y={index % 2 ? 176 : 162} size={10}>{tick.t}</W></g>)}
      </g>
      {at === 0 && <><Box x={160} y={48} w={260} text="Very painful, or a big effect on life" lit /><W x={160} y={82} size={10.5}>Not just to change how feet look</W><W x={160} y={100} size={10}>Not everyone gets the same operation</W></>}
      {at === 1 && <><Box x={160} y={44} w={220} text="Most go home the same day" lit /><W x={160} y={76} size={10.5}>Osteotomy: the most common</W><W x={160} y={94} size={10.5}>Usually up to an hour</W></>}
      {lists[at].map((label, index) => <Box key={label} x={160} y={at === 4 ? 34 + index * 34 : 36 + index * 32} w={at === 4 ? 296 : 220} text={label} size={10}
        lit={at === 4 ? index === 1 : at === 2 ? index === 0 : index === 2} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BunWalkWeek(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Walking is simple, free and easy", "Comfy, supportive, cushioned shoes", "A brisk 10 minutes a day counts", "Toe spread: hold 5 seconds, 10 times"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Staying active" title="Keep walking, in the right shoes" label="Walking and staying active" credit={checkFirst}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person walking in comfortable shoes, a week of short walks, and a toe spread exercise">
      {at < 3 && <g>
        <circle cx="64" cy="52" r="10" fill={INK} />
        <path d="M64 62 L60 112 M62 76 L44 98 M62 76 L82 94 M60 112 L44 158 M60 112 L80 156" stroke={INK} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="34" y="156" width="18" height="9" rx="4" fill={at === 1 ? GOLD : INK} /><rect x="74" y="154" width="18" height="9" rx="4" fill={at === 1 ? GOLD : INK} />
        <path d="M20 166 H110" stroke={LINE} strokeWidth="2" />
      </g>}
      {at === 0 && <><Box x={230} y={56} w={150} text="Simple and free" lit /><W x={230} y={90} size={10.5}>Keeps muscles and</W><W x={230} y={106} size={10.5}>joints strong</W></>}
      {at === 1 && ["Comfortable", "Supportive", "Cushioned soles"].map((label, index) => <Box key={label} x={230} y={48 + index * 36} w={140} text={label} lit={index === 2} />)}
      {at === 2 && <><W x={222} y={40} size={10.5}>Brisk 10 minutes a day</W><W x={222} y={58} size={10}>counts towards 150 a week</W>
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}><rect x={148 + index * 22} y={100} width="16" height="50" rx="3" fill={INK} /><W x={156 + index * 22} y={166} size={9.5}>{day}</W></g>)}</>}
      {at === 3 && <><FootTop x={232} y={186} s={0.75} spread /><Arrow d="M196 70 H180" head="M186 64 L180 70 L186 76" /><Arrow d="M270 76 H286" head="M280 70 L286 76 L280 82" />
        <W x={90} y={70} size={10.5}>Spread your toes</W><W x={90} y={96} size={10.5}>Hold 5 seconds</W><W x={90} y={122} size={10.5}>Repeat 10 times</W><W x={90} y={148} size={10.5}>Start slowly</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BunTwoShoes(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Insoles for work shoes; change at work", "A broad heel, 3cm high at most", "No need to be symptom free to work", "Access to Work may help with costs"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work and occasions" title="Work shoes, best shoes, kinder shoes" label="Work and special occasions" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A work shoe with an insole beside an occasion shoe with a low, broad heel">
      <Lace x={18} y={176} s={0.6} insole={at === 0} dim={at !== 0} />
      <Court x={186} y={176} s={0.62} lit={at === 1} dim={at !== 1} />
      {at === 1 && <path d="M180 162 V176 M176 162 H184 M176 176 H184" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />}
      {at === 0 && <><Box x={160} y={40} w={230} text="Insoles for work shoes" lit /><W x={160} y={72} size={10.5}>Comfy shoes for the walk in</W><W x={160} y={90} size={10.5}>Then change at work</W><W x={160} y={112} size={10}>A podiatrist can advise</W></>}
      {at === 1 && <><Box x={160} y={40} w={230} text="Heel no more than 3cm" lit /><W x={160} y={72} size={10.5}>Broad and stable</W><W x={160} y={90} size={10.5}>Laces, buckles or straps</W><W x={160} y={112} size={10}>Surgery can change this</W></>}
      {at === 2 && <><Cal x={160} y={56} w={110} text="2 to 12 weeks" lit /><W x={160} y={98} size={10.5}>Off work after surgery</W><W x={160} y={116} size={10.5}>Going back helps recovery</W></>}
      {at === 3 && <><Box x={160} y={40} w={200} text="Access to Work" lit /><W x={160} y={72} size={10.5}>Equipment or travel costs</W><W x={160} y={90} size={10}>Not for reasonable adjustments</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BunSoftSkin(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Pressure and rubbing build hard skin", "Corns: small; calluses: larger patches", "Soak, file gently, moisturise", "Check and wash your feet every day", "Diabetes? See a GP or foot specialist"];
  const lists: string[][] = [[], [], ["Soak in warm water", "File gently", "Moisturise"], ["Check every day", "Wash and dry well", "Nails straight across"], []];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Foot care" title="Taking the pressure off the skin" label="Corns, hard skin and foot care" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A foot from above with a corn and a patch of hard skin, beside simple foot care">
      <FootTop x={80} y={184} s={0.95} lump={12} lean={22} />
      {at === 0 && <><path d="M28 58 C18 68 18 84 28 94 M20 50 C6 64 6 88 20 102" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        <Box x={232} y={48} w={150} text="Pressure" lit /><Box x={232} y={84} w={150} text="Rubbing" /><W x={232} y={118} size={10.5}>Hard skin builds up</W></>}
      {at === 1 && <><ellipse cx="86" cy="72" rx="14" ry="8" fill={SOFT} /><circle cx="102" cy="52" r="4.5" fill={GOLD} />
        <Box x={232} y={48} w={160} text="Corn: small, hard" lit /><Box x={232} y={84} w={160} text="Callus: larger patch" /><W x={232} y={118} size={10.5}>Can come back in</W><W x={232} y={134} size={10.5}>4 to 6 weeks</W></>}
      {lists[at].map((label, index) => <Box key={label} x={232} y={44 + index * 34} w={160} text={label} lit={index === 0} />)}
      {at === 2 && <W x={232} y={150} size={10.5}>Do not cut them yourself</W>}
      {at === 4 && <><Box x={232} y={48} w={160} text="Diabetes, circulation" lit /><W x={232} y={80} size={10.5}>See a GP or</W><W x={232} y={96} size={10.5}>foot specialist</W><Box x={232} y={130} w={160} text="Bleeds or pus: GP" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BunFamilyTree(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Often seen across generations", "Foot structure can run in families", "Anyone, even children; more with age", "Right size, room for the toes"];
  const people = [{ x: 100, y: 58, mark: true }, { x: 56, y: 112, mark: true }, { x: 144, y: 112, mark: false }, { x: 34, y: 168, mark: true }, { x: 88, y: 168, mark: false }, { x: 144, y: 168, mark: false }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Families" title="Bunions across the generations" label="Bunions in families" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A family tree of three generations, some with a bunion marked">
      <path d="M100 70 V80 M56 80 H144 M56 80 V84 M144 80 V84 M56 124 V134 M34 134 H88 M34 134 V138 M88 134 V138 M144 124 V138" stroke={LINE} strokeWidth="2.5" fill="none" />
      {people.map((person, index) => <g key={index}><Person x={person.x} y={person.y} scale={0.75} fill={at === 1 && person.mark ? INK : SOFT} />
        {person.mark && (at === 0 || at === 1) && <circle cx={person.x + 10} cy={person.y + 12} r="4.5" fill={GOLD} />}</g>)}
      {at === 2 && <rect x="12" y="132" width="156" height="52" rx="12" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      {at === 0 && <><Box x={250} y={56} w={120} text="Across generations" size={10} lit /><W x={250} y={90} size={10.5}>Most likely</W><W x={250} y={106} size={10.5}>inherited</W></>}
      {at === 1 && <><W x={250} y={52} size={10.5}>Foot structure</W><W x={250} y={68} size={10.5}>can be passed on</W><Box x={250} y={104} w={120} text="More in women" /></>}
      {at === 2 && <><W x={250} y={52} size={10.5}>Anyone, even</W><W x={250} y={68} size={10.5}>children</W><Box x={250} y={104} w={120} text="More with age" lit /></>}
      {at === 3 && <><Box x={250} y={44} w={120} text="Right size" /><Box x={250} y={78} w={120} text="Room for toes" lit /><W x={250} y={112} size={10}>Fitted if possible</W><Lace x={198} y={172} s={0.6} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function FeetPieceView({ piece, ...props }: { piece: FeetPiece } & PieceProps) {
  switch (piece) {
    case "ach-heel-cord": return <AchHeelCord {...props} />;
    case "ach-load-seesaw": return <AchLoadSeesaw {...props} />;
    case "ach-snap-signs": return <AchSnapSigns {...props} />;
    case "ach-year-line": return <AchYearLine {...props} />;
    case "ach-heel-raise": return <AchHeelRaise {...props} />;
    case "ach-ice-breaks": return <AchIceBreaks {...props} />;
    case "ach-heel-wedge": return <AchHeelWedge {...props} />;
    case "ach-care-steps": return <AchCareSteps {...props} />;
    case "ach-run-build": return <AchRunBuild {...props} />;
    case "ach-shift-boots": return <AchShiftBoots {...props} />;
    case "ach-easy-load": return <AchEasyLoad {...props} />;
    case "ach-early-light": return <AchEarlyLight {...props} />;
    case "bun-toe-lean": return <BunToeLean {...props} />;
    case "bun-three-roots": return <BunThreeRoots {...props} />;
    case "bun-sore-spots": return <BunSoreSpots {...props} />;
    case "bun-who-to-see": return <BunWhoToSee {...props} />;
    case "bun-roomy-shoe": return <BunRoomyShoe {...props} />;
    case "bun-pad-row": return <BunPadRow {...props} />;
    case "bun-cool-warm": return <BunCoolWarm {...props} />;
    case "bun-op-months": return <BunOpMonths {...props} />;
    case "bun-walk-week": return <BunWalkWeek {...props} />;
    case "bun-two-shoes": return <BunTwoShoes {...props} />;
    case "bun-soft-skin": return <BunSoftSkin {...props} />;
    case "bun-family-tree": return <BunFamilyTree {...props} />;
    default: return null;
  }
}
