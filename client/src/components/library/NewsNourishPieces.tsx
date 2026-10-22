import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { NOURISH_PIECES, type NourishPiece } from "@/content/nourish-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Binge eating disorder and ARFID pages' own pieces (content/nourish-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Mind & mood pieces. Each is steered by the card's sections; pictures
// show ideas, calmly, never anyone's own body or results. They follow Beat's media guidelines, as the Eating
// disorders pictures do: no bodies, weights, scales, numbers about weight or food, plates of food or before and
// after pictures; doors, paths, conversations, calendars, helplines and gentle shapes instead.

export const isNourishPiece = (piece: NewsPiece): piece is NourishPiece => (NOURISH_PIECES as readonly string[]).includes(piece);

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 206, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Sun = ({ x, y, r = 12, className }: { x: number; y: number; r?: number; className?: string }) =>
  <g className={className}>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
const Cloud = ({ x, y, s, fill = SOFT }: { x: number; y: number; s: number; fill?: string }) =>
  <g fill={fill}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
const Cup = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 14} y={y - 14} width="28" height="30" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 14} ${y - 6} h6 a7 7 0 0 1 0 14 h-6`} fill="none" stroke={INK} strokeWidth="2.5" />
    <path d={`M${x - 5} ${y - 20} q-4 -6 0 -12 M${x + 5} ${y - 20} q-4 -6 0 -12`} stroke={SOFT} strokeWidth="2" fill="none" strokeLinecap="round" /></g>;
/** A closed door, `x` its centre and `y` its top. */
const Door = ({ x, y, lit = false, w = 38, h = 60 }: { x: number; y: number; lit?: boolean; w?: number; h?: number }) =>
  <g><rect x={x - w / 2} y={y} width={w} height={h} rx="4" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x + w / 2 - 9} cy={y + h * 0.55} r="3" fill={lit ? WHITE : INK} /></g>;
/** A sheet of notes, (x, y) its top-left corner. */
const Note = ({ x, y, lit = false, w = 30, h = 40 }: { x: number; y: number; lit?: boolean; w?: number; h?: number }) =>
  <g><rect x={x} y={y} width={w} height={h} rx="3" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
    {[0.28, 0.48, 0.68].map(row => <path key={row} d={`M${x + 7} ${y + h * row} H${x + w - (row === 0.68 ? 13 : 7)}`} stroke={lit ? WHITE : SOFT} strokeWidth="2.5" strokeLinecap="round" />)}</g>;
/** A small clinic building, `x` its centre and `y` the top of its walls. */
const Clinic = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><path d={`M${x - 30} ${y} L${x} ${y - 18} L${x + 30} ${y}`} fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <rect x={x - 26} y={y} width="52" height="46" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
    {[-14, 6].map(dx => <rect key={dx} x={x + dx} y={y + 8} width="10" height="10" fill={lit ? WHITE : TINT} stroke={INK} strokeWidth="1.5" />)}
    <rect x={x - 7} y={y + 26} width="14" height="20" fill={lit ? WHITE : TINT} stroke={INK} strokeWidth="1.5" /></g>;
/** A seat under one person, `x` its centre and `y` its top. */
const Seat = ({ x, y, w = 40 }: { x: number; y: number; w?: number }) =>
  <g><rect x={x - w / 2} y={y} width={w} height="6" rx="3" fill={INK} /><path d={`M${x - w / 2 + 6} ${y + 6} V${y + 20} M${x + w / 2 - 6} ${y + 6} V${y + 20}`} stroke={INK} strokeWidth="3" /></g>;

// ==== Binge eating disorder ================================================================================

function BedKnotThread(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Hard to stop, and very distressing", "About feelings, not willpower", "Around 1 in 25 people in the UK", "Treatable, and most people recover"];
  const knot = "M20 84 H104 C136 84, 146 44, 124 44 C102 44, 108 84, 142 84 C176 84, 184 44, 162 44 C140 44, 146 84, 180 84 C214 84, 222 44, 200 44 C178 44, 184 84, 218 84 H300";
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="An illness, not a lack of willpower" label="What binge eating disorder is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A thread caught in tight loops, which can be loosened with help">
      {at < 3 && <path d={knot} stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      {at === 3 && <path d="M20 84 C90 70, 120 98, 170 84 S260 70, 300 84" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" />}
      {at === 0 && <><Box x={96} y={134} w={130} text="Not in control" lit /><Box x={236} y={134} w={130} text="Very distressing" /></>}
      {at === 1 && <><HeartShape x={88} y={140} size={56} fill={TINT} width={3} /><Box x={206} y={128} w={150} text="About feelings" lit /><Box x={206} y={162} w={150} text="Never their fault" /></>}
      {at === 2 && <g>
        {Array.from({ length: 25 }, (_, index) => <circle key={index} cx={64 + (index % 13) * 16} cy={124 + Math.floor(index / 13) * 18} r="5" fill={index === 0 ? GOLD : SOFT} />)}
        <W x={160} y={176} size={12}>1 in 25</W>
      </g>}
      {at === 3 && <><Sun x={70} y={140} r={13} className={still ? undefined : "lib-v2-breathe is-slow"} /><Box x={196} y={140} w={160} text="Recovery is possible" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BedSignWeather(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Hard to stop, even when full", "Guilt, shame and low self-esteem", "Behaviour often changes first", "Tired, poor sleep, stomach problems", "Only some signs? Still seek help"];
  const labels = [["Out of control", "Hard to stop", "Disconnected"], ["Guilt or shame", "Anxious, tense", "Low self-esteem"], ["Withdrawn", "Irritable", "Mood swings"], ["Tired", "Poor sleep", "Stomach problems"], ["Only some signs", "Still seek help", "See the GP"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The signs" title="The signs behind the shame" label="Signs and feelings" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A picture for each kind of sign, with the signs listed beside it">
      <rect x="20" y="36" width="116" height="124" rx="14" fill={TINT} stroke={LINE} strokeWidth="2" />
      {at === 0 && <><Cloud x={78} y={96} s={30} /><path d="M58 122 q10 10 20 0 q10 -10 20 0" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" /></>}
      {at === 1 && <Cloud x={78} y={100} s={30} fill={INK} />}
      {at === 2 && <Door x={78} y={56} w={50} h={88} />}
      {at === 3 && <Moon x={74} y={98} r={30} />}
      {at === 4 && <Sun x={78} y={98} r={22} />}
      <Tags x={160} y={48} width={140} gap={38} labels={labels} lit={index => at === 4 ? index === 2 : index === 0} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BedFourThreads(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["No single reason; many things combine", "Family history, stress, perfectionism", "Strict rules and guilt keep it going", "Often with depression or anxiety", "A serious illness, and not your fault"];
  const strands = [{ t: "Genes", y: 46 }, { t: "Biology", y: 80 }, { t: "Psychology", y: 114 }, { t: "Surroundings", y: 148 }];
  const right = [["Combined"], ["Family history", "Stress, trauma", "Perfectionism"], [], ["Depression", "Anxiety", "Low self-esteem"], ["Not a choice", "Not your fault"]][at];
  const loop = [{ x: 160, y: 40, t: "Strict rules" }, { x: 258, y: 100, t: "Hunger" }, { x: 160, y: 160, t: "Binge" }, { x: 62, y: 100, t: "Guilt" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Many threads, and nobody's fault" label="Why it happens" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four threads coming together, and the cycle that can keep binge eating going">
      {at !== 2 && <g>
        {strands.map(strand => <g key={strand.t}>
          <W x={18} y={strand.y} size={10.5} anchor="start">{strand.t}</W>
          <path d={`M100 ${strand.y - 4} C140 ${strand.y - 4}, 150 96, 186 96`} stroke={at === 0 || at === 4 ? INK : SOFT} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </g>)}
        <circle cx="190" cy="96" r="7" fill={GOLD} />
        {right.map((label, index) => <Box key={label} x={258} y={96 + (index - (right.length - 1) / 2) * 36} w={104} text={label} lit={index === 0} size={10} />)}
      </g>}
      {at === 2 && <g>
        <ellipse cx="160" cy="100" rx="98" ry="60" fill="none" stroke={SOFT} strokeWidth="4" strokeDasharray="8 8" />
        {loop.map((step, index) => <Box key={step.t} x={step.x} y={step.y} w={96} text={step.t} lit={index === 3} />)}
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BedGpRoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["See a GP as soon as you can", "Write things down; bring someone", "The GP asks how you're feeling", "Referral; GP check-ins while you wait", "You can ask to see a different GP"];
  const dot = [[52, 162], [128, 164], [204, 152], [276, 146], [204, 152]][at];
  const lit = [2, 1, 2, 3, 2][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Getting help" title="Your first GP appointment" label="Talking to a GP" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A road from talking to someone, to notes, to the GP and on to a specialist team">
      <path d="M16 166 C70 156, 100 172, 160 158 S250 140, 304 148" stroke={LINE} strokeWidth="10" fill="none" strokeLinecap="round" />
      <Person x={42} y={112} scale={0.55} /><Person x={64} y={112} scale={0.55} fill={SOFT} />
      <Note x={114} y={78} lit={lit === 1} />
      <Door x={204} y={64} lit={lit === 2} w={36} h={56} />
      <Clinic x={276} y={76} lit={lit === 3} />
      {["Talk", "Notes", "GP", "Specialist"].map((label, index) => <W key={label} x={[53, 129, 204, 276][index]} y={138} size={10}>{label}</W>)}
      <circle cx={dot[0]} cy={dot[1]} r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      {at === 0 && <Box x={128} y={34} w={150} text="As soon as you can" lit />}
      {at === 1 && <Box x={128} y={34} w={160} text="A double appointment" />}
      {at === 2 && <Bubble x={120} y={34} text="How are you feeling?" width={150} />}
      {at === 3 && <Box x={140} y={34} w={190} text="GP check-ins while waiting" />}
      {at === 4 && <Box x={128} y={34} w={170} text="Ask for a different GP" lit />}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function BedWorkbook(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Usually the first step; based on CBT", "4 to 9 sessions, about 20 minutes", "Practise between sessions", "No help after 4 weeks? CBT may follow", "An online group, no diagnosis needed"];
  const filled = (index: number) => at === 1 ? index < 4 : at === 2 ? index < 3 : at === 3 ? index < 4 : false;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Guided self-help" title="A guide, a helper and short sessions" label="Guided self-help" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An open self-help book beside a row of short sessions">
      <path d="M90 50 C72 40, 44 40, 26 46 V112 C44 106, 72 106, 90 116 Z" fill={at === 0 ? TINT : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M90 50 C108 40, 136 40, 154 46 V112 C136 106, 108 106, 90 116 Z" fill={at === 0 ? TINT : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      {[62, 76, 90].map(y => <path key={y} d={`M38 ${y} C54 ${y - 4}, 68 ${y - 4}, 80 ${y}`} stroke={SOFT} strokeWidth="2.5" fill="none" strokeLinecap="round" />)}
      {at === 2 && <path d="M104 98 L140 62 L146 68 L110 104 L100 108 Z" fill={GOLD} stroke={INK} strokeWidth="2" strokeLinejoin="round" />}
      {at === 0 && <><Box x={240} y={58} w={124} text="First step" lit /><Box x={240} y={94} w={124} text="Based on CBT" /></>}
      {at === 1 && <><Clock x={240} y={58} r={20} hand={4} /><Box x={240} y={104} w={136} text="About 20 minutes" /></>}
      {at === 2 && <><Box x={240} y={58} w={124} text="Practise" lit /><Box x={240} y={94} w={124} text="Keep a diary" /></>}
      {at === 3 && <><Arrow d="M168 76 H192" head="M185 70 L192 76 L185 82" /><Box x={250} y={76} w={108} text="CBT" lit /></>}
      {at === 4 && <><Bubble x={240} y={50} text="Anonymous" width={110} /><Bubble x={240} y={100} text="Chat-based" width={110} /></>}
      {Array.from({ length: 9 }, (_, index) => <rect key={index} x={28 + index * 30} y="138" width="24" height="24" rx="5" fill={filled(index) ? INK : at === 0 && index === 0 ? GOLD : WHITE} stroke={index < 4 || at !== 1 ? INK : SOFT} strokeWidth="2" strokeDasharray={at === 1 && index >= 4 ? "4 3" : undefined} />)}
      {at === 3 && <><path d="M28 170 V176 H142 V170" stroke={GOLD} strokeWidth="2.5" fill="none" /><W x={85} y={190} size={10}>4 weeks</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function BedCbtGroup(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Thoughts, feelings and actions link", "Usually a group, about 90 minutes", "Plan regular meals, spot triggers", "Not about weight; no dieting", "Scotland: CBT or interpersonal therapy"];
  const corners = [{ x: 62, t: "Thoughts" }, { x: 160, t: "Feelings" }, { x: 258, t: "Actions" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="CBT" title="Changing the cycle, step by step" label="CBT for binge eating" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Thoughts, feelings and actions linked, and a group meeting for CBT">
      {corners.map(corner => <Box key={corner.t} x={corner.x} y={40} w={84} text={corner.t} lit={at === 0} />)}
      <path d="M104 40 H118 M202 40 H216" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
      {at === 0 && <Arrow d="M258 56 C230 96, 90 96, 62 56" head="M62 56 L58 66 M62 56 L71 61" />}
      {at === 1 && <g>
        <ellipse cx="160" cy="150" rx="56" ry="14" fill={TINT} stroke={INK} strokeWidth="2" />
        {[92, 126, 160, 194, 228].map((x, index) => <Person key={x} x={x} y={132} scale={0.6} fill={index === 2 ? INK : SOFT} />)}
        <Clock x={276} y={140} r={18} hand={3} />
      </g>}
      {at === 2 && <><Box x={96} y={130} w={124} text="Regular meals" lit /><Box x={232} y={130} w={110} text="Triggers" /></>}
      {at === 3 && <Box x={160} y={130} w={170} text="Not about weight" lit />}
      {at === 4 && <><Box x={160} y={116} w={84} text="CBT" /><Box x={160} y={152} w={170} text="Interpersonal therapy" lit /></>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function BedDayRhythm(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Regular eating breaks the cycle", "Plan ahead; try not to skip meals", "Notes on feelings, not counting", "A list, a plan, support in evenings", "Ask where a food rule came from"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Regular eating" title="Steady days, fewer binges" label="Regular eating" credit="Illustration: Rehyn. A picture of the idea; a therapist helps plan the day."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A steady day from morning to evening, and ways to keep it steady">
      <Sun x={26} y={46} r={8} />
      <path d="M48 46 H272" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {Array.from({ length: 12 }, (_, index) => <path key={index} d={`M${56 + index * 19} 38 V54`} stroke={at === 1 ? INK : SOFT} strokeWidth="3" strokeLinecap="round" />)}
      <Moon x={294} y={46} r={10} fill={at === 3 ? GOLD : INK} />
      {at === 0 && <g>
        <Box x={98} y={120} w={92} text="Starve" /><Box x={222} y={120} w={92} text="Binge" />
        <path d="M144 120 H176" stroke={SOFT} strokeWidth="3" strokeDasharray="5 4" /><Cross x={160} y={120} s={9} />
      </g>}
      {at === 1 && <Box x={160} y={110} w={140} text="No long gaps" lit />}
      {at === 2 && <g>
        <rect x="64" y="80" width="192" height="94" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {["Where", "Doing", "Feeling"].map((label, index) => <W key={label} x={106 + index * 54} y={100} size={10}>{label}</W>)}
        <path d="M74 108 H246" stroke={INK} strokeWidth="2" />
        {[126, 144, 162].map(y => <path key={y} d={`M82 ${y} H130 M136 ${y} H184 M190 ${y} H238`} stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" />)}
      </g>}
      {at === 3 && <g>
        <rect x="58" y="78" width="74" height="96" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[98, 122, 146].map(y => <g key={y}><rect x="68" y={y - 7} width="12" height="12" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><path d={`M86 ${y - 1} H120`} stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" /></g>)}
        <Box x={226} y={126} w={130} text="Plan evenings" lit />
      </g>}
      {at === 4 && <Bubble x={170} y={116} text="Is this rule working now?" width={190} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BedTherapyFirst(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Therapy first; never medicine alone", "Sometimes, for anxiety or depression", "Up to 8 weeks to work fully", "Stop only with your doctor's plan"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Therapy first, medicine alongside" label="Medicines" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people in a talking therapy session, with a medicine set to one side">
      <Person x={66} y={146} scale={0.9} /><Seat x={66} y={154} />
      <Person x={126} y={146} scale={0.9} fill={SOFT} /><Seat x={126} y={154} />
      {at === 0 && <><Box x={96} y={56} w={130} text="Talking therapy" lit /><g opacity="0.45"><Pill x={240} y={80} /></g><W x={240} y={118} size={10.5}>Not on its own</W></>}
      {at === 1 && <><Pill x={240} y={40} /><Box x={240} y={78} w={110} text="Anxiety" /><Box x={240} y={110} w={110} text="Depression" /><Box x={240} y={142} w={110} text="OCD" /></>}
      {at === 2 && <g>
        {Array.from({ length: 8 }, (_, index) => <g key={index}><rect x={182 + (index % 4) * 30} y={48 + Math.floor(index / 4) * 36} width="24" height="28" rx="5" fill={INK} opacity={0.25 + index * 0.1} stroke={INK} strokeWidth="2" /><W x={194 + (index % 4) * 30} y={66 + Math.floor(index / 4) * 36} size={10} fill={index > 3 ? WHITE : TEXT}>{index + 1}</W></g>)}
        <W x={240} y={138} size={10.5}>weeks</W>
      </g>}
      {at === 3 && <><path d="M186 52 H210 V74 H234 V96 H258 V118 H282 V140" stroke={GOLD} strokeWidth="4" fill="none" strokeLinejoin="round" /><W x={234} y={168} size={10.5}>Slowly, with your doctor</W></>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function BedUrgeWave(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Many feelings can set off an urge", "Spot patterns, and name the feeling", "Ride the urge until it eases", "Setbacks are part of recovery", "Life at risk? Call 999 or go to A&E"];
  const dot = [[40, 138], [122, 76], [226, 112], [160, 50], [0, 0]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Feelings and triggers" title="Riding out the wave" label="Feelings, stress and triggers" credit="Illustration: Rehyn. In danger now? Call 999 or go to A&E."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An urge rising and easing like a wave, and who to contact for urgent help">
      {at < 4 && <g>
        <path d="M20 140 C90 140, 110 50, 160 50 S230 140, 300 140" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M20 148 H300" stroke={LINE} strokeWidth="3" />
        <circle cx={dot[0]} cy={dot[1]} r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      </g>}
      {at === 0 && <><Box x={54} y={44} w={64} text="Low" /><Box x={54} y={80} w={70} text="Bored" /><Box x={266} y={44} w={78} text="Anxious" /><Box x={266} y={80} w={84} text="Happy too" /></>}
      {at === 1 && <><Note x={30} y={56} /><Box x={266} y={50} w={90} text="Name it" lit /></>}
      {at === 2 && <><Box x={66} y={172} w={80} text="A walk" /><Box x={160} y={172} w={86} text="A hobby" /><Box x={258} y={172} w={104} text="Call someone" /></>}
      {at === 3 && <Box x={160} y={24} w={190} text="A relapse is not failure" lit />}
      {at === 4 && <g>
        <Box x={160} y={40} w={200} text="111, mental health option" />
        <Box x={160} y={76} w={160} text="Samaritans 116 123" lit />
        <Box x={160} y={112} w={160} text="Text SHOUT to 85258" lit />
        <Box x={160} y={148} w={120} text="999 or A&E" />
      </g>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function BedKindFeed(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Shaped by family, culture and media", "Weight loss is not the focus", "Stigma can make getting help harder", "A right to good quality treatment", "Mute or hide posts; limit your time"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Body image" title="Turning down the voices that judge" label="Body image and stigma" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A heart surrounded by what shapes how we feel, and a phone with posts muted">
      {at === 0 && <g>
        <HeartShape x={160} y={102} size={96} fill={TINT} width={3} />
        <W x={160} y={98} size={10.5}>How you</W><W x={160} y={112} size={10.5}>see yourself</W>
        <Box x={52} y={52} w={78} text="Family" /><Box x={268} y={52} w={80} text="Culture" /><Box x={52} y={150} w={78} text="Friends" /><Box x={268} y={150} w={78} text="Media" />
      </g>}
      {at === 1 && <g>
        <HeartShape x={72} y={102} size={84} fill={TINT} width={3} />
        <W x={232} y={34} size={10.5}>Treatment aims</W>
        <Tags x={166} y={48} width={132} gap={36} labels={["Fewer binges", "Tackle thoughts", "Improve mood"]} lit={() => true} />
      </g>}
      {at === 2 && <g>
        <Box x={160} y={50} w={140} text="Weight stigma" lit />
        <path d="M120 66 L94 92 M200 66 L226 92" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        <Box x={86} y={110} w={140} text="Harder to get care" /><Box x={240} y={110} w={116} text="Self-stigma" />
      </g>}
      {at === 3 && <g>
        <HeartShape x={80} y={102} size={76} fill={GOLD} stroke={GOLD} width={2} />
        <Box x={218} y={84} w={160} text="You deserve help" lit /><Box x={218} y={120} w={160} text="Good quality treatment" />
      </g>}
      {at === 4 && <g>
        <rect x="96" y="24" width="128" height="152" rx="14" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {["Mute", "Hide", "Limit time"].map((label, index) => { const y = 60 + index * 38; return <g key={label}>
          <W x={110} y={y + 4} size={10.5} anchor="start">{label}</W>
          <rect x="182" y={y - 8} width="28" height="16" rx="8" fill={INK} /><circle cx="201" cy={y} r="5.5" fill={WHITE} />
        </g>; })}
        <HeartShape x={266} y={92} size={40} fill={GOLD} stroke={GOLD} width={2} />
      </g>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function BedWordSwap(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Share your worry; suggest a GP", "Ask about feelings, not food", "Ask what would help, like evenings", "You're not to blame; rest matters"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Family and friends" title="Being there, in the right words" label="For family and friends" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people talking, with words that help and words to leave out">
      <Person x={56} y={170} scale={1.15} />
      <Person x={264} y={170} scale={1.15} fill={SOFT} />
      {at === 0 && <><Box x={160} y={50} w={170} text="A calm, private time" /><Box x={160} y={88} w={130} text="Suggest a GP" lit /></>}
      {at === 1 && <g>
        <g opacity="0.5"><Box x={160} y={40} w={170} text="Food or weight talk" /></g>
        <path d="M80 40 H240" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        <Bubble x={160} y={94} text="How are you feeling?" width={160} />
      </g>}
      {at === 2 && <><Moon x={96} y={52} r={14} /><Bubble x={186} y={52} text="What would help?" width={140} /><Box x={160} y={116} w={130} text="Shop together" /></>}
      {at === 3 && <><Cup x={160} y={72} /><Box x={160} y={128} w={150} text="Rest isn't selfish" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BedContactTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Free, 3pm to 8pm, Monday to Friday", "Webchat, email, a Friday evening group", "HelpFinder: support in your area", "Coaching for family members too", "Beat is not a crisis service"];
  const tiles = ["Helpline", "Webchat", "HelpFinder", "Family"];
  const crisis = at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="A helpline, a chat and a Friday group" label="Beat and other support" credit="Illustration: Rehyn. In immediate danger? Call 999 or Samaritans on 116 123."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four tiles for Beat's Helpline, webchat, HelpFinder and family support, and urgent help">
      {tiles.map((tile, index) => { const x = 22 + index * 74; const on = at === index; return <g key={tile} opacity={crisis ? 0.35 : 1}>
        <rect x={x} y="34" width="62" height="62" rx="12" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        {index === 0 && <><rect x={x + 21} y="45" width="20" height="38" rx="5" fill="none" stroke={on ? WHITE : INK} strokeWidth="2.5" /><circle cx={x + 31} cy="76" r="2" fill={on ? WHITE : INK} /></>}
        {index === 1 && <><rect x={x + 12} y="48" width="38" height="24" rx="10" fill="none" stroke={on ? WHITE : INK} strokeWidth="2.5" /><path d={`M${x + 20} 72 l-4 10 l12 -10`} fill="none" stroke={on ? WHITE : INK} strokeWidth="2.5" strokeLinejoin="round" /></>}
        {index === 2 && <><path d={`M${x + 31} 86 C${x + 18} 70, ${x + 17} 64, ${x + 17} 60 A14 14 0 0 1 ${x + 45} 60 C${x + 45} 64, ${x + 44} 70, ${x + 31} 86 Z`} fill="none" stroke={on ? WHITE : INK} strokeWidth="2.5" strokeLinejoin="round" /><circle cx={x + 31} cy="60" r="5" fill={on ? WHITE : INK} /></>}
        {index === 3 && <><Person x={x + 22} y={74} scale={0.5} fill={on ? WHITE : INK} /><Person x={x + 40} y={74} scale={0.5} fill={on ? WHITE : SOFT} /></>}
        {!crisis && <W x={x + 31} y={114} size={10}>{tile}</W>}
      </g>; })}
      {at === 0 && <><Box x={92} y={152} w={110} text="Free calls" /><Box x={226} y={152} w={136} text="Up to 30 minutes" /></>}
      {at === 1 && <><Box x={92} y={152} w={90} text="Email" /><Box x={216} y={152} w={150} text="Anonymous group" /></>}
      {at === 2 && <Box x={160} y={152} w={120} text="Advocacy" />}
      {at === 3 && <Box x={160} y={152} w={170} text="Telephone coaching" />}
      {crisis && <g>
        <Box x={160} y={128} w={210} text="999 or Samaritans 116 123" lit />
        <Box x={90} y={164} w={164} text="111, mental health option" size={10} />
        <Box x={244} y={164} w={134} text="Text SHOUT to 85258" size={10} lit />
      </g>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

// ==== ARFID =================================================================================================

function ArfidVenn(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Avoiding, restricting, or both", "Not about weight or body shape", "Children, teenagers and adults", "More than picky eating", "Treatable; start with your GP"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Avoidance, not body image" label="What ARFID is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two overlapping circles, avoiding and restricting, and what ARFID is and is not">
      <W x={46} y={40} size={10}>Avoiding</W><W x={112} y={40} size={10}>Restricting</W>
      <circle cx="58" cy="96" r="42" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <circle cx="104" cy="96" r="42" fill={WHITE} fillOpacity=".6" stroke={INK} strokeWidth="2.5" />
      <path d="M81 60.9 A42 42 0 0 1 81 131.1 A42 42 0 0 1 81 60.9 Z" fill={INK} opacity={at === 0 ? 0.85 : 0.2} />
      <W x={81} y={100} size={10} fill={at === 0 ? WHITE : TEXT}>Both</W>
      {at === 0 && <><Box x={240} y={74} w={136} text="Avoid some foods" /><Box x={240} y={110} w={136} text="Limit the amount" /></>}
      {at === 1 && <><Box x={248} y={74} w={120} text="Body image" /><Cross x={176} y={74} s={9} /><Box x={240} y={114} w={136} text="Not the reason" lit /></>}
      {at === 2 && <><Person x={196} y={140} scale={0.6} fill={SOFT} /><Person x={236} y={140} scale={0.8} /><Person x={282} y={140} scale={1} fill={SOFT} /></>}
      {at === 3 && <><Box x={240} y={58} w={120} text="Picky eating" /><Arrow d="M240 76 V98" head="M234 91 L240 98 L246 91" /><Box x={240} y={116} w={90} text="ARFID" lit /></>}
      {at === 4 && <><Sun x={240} y={66} r={13} className={still ? undefined : "lib-v2-breathe is-slow"} /><Box x={240} y={118} w={120} text="Treatable" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ArfidUmbrella(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Taste, texture, smell or look", "Fear after choking or being sick", "Eating can feel like a chore", "Often more than one: an umbrella", "Not if fasting, or due to allergies"];
  const icons = [{ x: 90, t: "Sensory" }, { x: 160, t: "Fear" }, { x: 230, t: "Low interest" }];
  const on = (index: number) => at === index || at === 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Three reasons" title="Three reasons, one umbrella" label="Sensory, fear and low interest" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An umbrella over three reasons for avoiding food: sensory, fear and low interest">
      <g opacity={at === 4 ? 0.35 : 1}>
        <path d="M160 20 V28" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <path d="M50 92 Q160 2 270 92 Q248 78 226 92 Q204 78 182 92 Q160 78 138 92 Q116 78 94 92 Q72 78 50 92 Z" fill={TINT} stroke={at === 3 ? GOLD : INK} strokeWidth={at === 3 ? 4 : 2.5} strokeLinejoin="round" />
      </g>
      {at < 4 && icons.map((icon, index) => { const lit = on(index); const ink = lit ? WHITE : INK; return <g key={icon.t}>
        <circle cx={icon.x} cy="128" r="22" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        {index === 0 && <path d={`M${icon.x - 11} 122 q5.5 -6 11 0 t11 0 M${icon.x - 11} 134 q5.5 -6 11 0 t11 0`} stroke={ink} strokeWidth="2.5" fill="none" strokeLinecap="round" />}
        {index === 1 && <path d={`M${icon.x} 114 L${icon.x + 11} 119 V128 C${icon.x + 11} 135, ${icon.x + 6} 140, ${icon.x} 143 C${icon.x - 6} 140, ${icon.x - 11} 135, ${icon.x - 11} 128 V119 Z`} fill="none" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />}
        {index === 2 && <><circle cx={icon.x} cy="128" r="11" fill="none" stroke={ink} strokeWidth="2.5" /><path d={`M${icon.x} 128 V121 M${icon.x} 128 L${icon.x + 5} 131`} stroke={ink} strokeWidth="2.5" strokeLinecap="round" /></>}
        <W x={icon.x} y={168} size={10.5}>{icon.t}</W>
      </g>; })}
      {at === 4 && <><Box x={62} y={130} w={96} text="Fasting" /><Box x={160} y={130} w={90} text="Allergies" /><Box x={260} y={130} w={104} text="Not available" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ArfidWeekStrip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often there for a long time", "Same meals, or foods of one colour", "Anxious at meals; avoiding events", "Deficiencies, such as low iron", "Not as simple as forcing yourself"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The signs" title="The quiet signs that last for years" label="Signs in adults" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of days, each the same, and the signs that can show">
      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}>
        <rect x={22 + index * 40} y="32" width="36" height="40" rx="7" fill={at === 2 && index === 5 ? TINT : WHITE} stroke={INK} strokeWidth="2" />
        {at === 2 && index === 5
          ? <><ellipse cx={40 + index * 40} cy="46" rx="7" ry="9" fill={GOLD} /><path d={`M${40 + index * 40} 55 q-3 6 0 12`} stroke={INK} strokeWidth="1.5" fill="none" /></>
          : <circle cx={40 + index * 40} cy="52" r="8" fill={at === 1 ? INK : SOFT} />}
        <W x={40 + index * 40} y={88} size={10}>{day}</W>
      </g>)}
      {at === 0 && <><path d="M22 104 H298" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /><path d="M290 98 L298 104 L290 110" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /><Box x={160} y={140} w={180} text="Often for a long time" lit /></>}
      {at === 1 && <><Box x={96} y={132} w={124} text="Same meals" lit /><Box x={226} y={132} w={124} text="One colour" /></>}
      {at === 2 && <><Box x={160} y={124} w={170} text="Anxious at mealtimes" /><Box x={160} y={160} w={170} text="Avoids food events" lit /></>}
      {at === 3 && <><Box x={96} y={132} w={124} text="Low iron" /><Box x={226} y={132} w={124} text="Supplements" lit /></>}
      {at === 4 && <Bubble x={160} y={132} text="Not just picky eating" width={170} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ArfidBattery(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A narrow range can miss nutrients", "Tired, weak and unwell", "Hard at home, at work, with friends", "Physical health is treated first", "Sudden decline? Get help quickly"];
  const level = [0.45, 0.15, 0.3, 0.85, 0.15][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Health" title="When nutrients run short" label="Effects on health" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An energy battery running low, and what can help fill it again">
      <rect x="22" y="70" width="96" height="54" rx="9" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="118" y="86" width="9" height="22" rx="3" fill={INK} />
      <rect x="29" y="77" width={82 * level} height="40" rx="5" fill={at === 3 ? GOLD : INK} />
      <W x={70} y={146} size={10.5}>Energy</W>
      {at === 0 && <Tags x={164} y={46} width={136} gap={36} labels={["Vitamins", "Minerals", "Nutrients"]} lit={() => false} />}
      {at === 1 && <Tags x={164} y={46} width={136} gap={36} labels={["Tired", "Weak", "Unwell"]} lit={index => index === 0} />}
      {at === 2 && <Tags x={164} y={46} width={136} gap={36} labels={["Home", "Work", "Friends"]} lit={() => false} />}
      {at === 3 && <Tags x={164} y={46} width={136} gap={36} labels={["Multivitamins", "Zinc or iron", "Safe foods"]} lit={() => true} />}
      {at === 4 && <><Box x={232} y={76} w={130} text="NHS 111" /><Box x={232} y={112} w={140} text="Emergency care" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ArfidStones(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Start with an appointment with a GP", "Notes, and a friend or loved one", "Services vary; the GP should refer", "Talking, and maybe blood tests"];
  const lit = [1, 0, 1, 2][at];
  const xs = [70, 160, 250];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Getting help" title="Your first step: the GP" label="Getting help" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Stepping stones across a stream, from notes to the GP to a specialist team">
      <path d="M10 150 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 M10 172 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke={LINE} strokeWidth="3" fill="none" />
      {xs.map(x => <ellipse key={x} cx={x} cy="160" rx="28" ry="9" fill={SOFT} />)}
      <Note x={54} y={94} lit={lit === 0} w={32} h={42} />
      <Door x={160} y={76} lit={lit === 1} w={38} h={60} />
      <Clinic x={250} y={90} lit={lit === 2} />
      {["Notes", "GP", "Team"].map((label, index) => <W key={label} x={xs[index]} y={188} size={10}>{label}</W>)}
      <circle cx={xs[lit] - 10} cy="150" r="7" fill={GOLD} stroke={WHITE} strokeWidth="2.5" />
      {at === 1 && <circle cx={xs[lit] + 12} cy="150" r="7" fill={INK} stroke={WHITE} strokeWidth="2.5" />}
      {at === 0 && <Box x={160} y={36} w={170} text="As soon as possible" />}
      {at === 1 && <Box x={160} y={36} w={180} text="A friend or loved one" lit />}
      {at === 2 && <><Box x={92} y={36} w={136} text="Services vary" /><Box x={236} y={36} w={136} text="GP should refer" lit /></>}
      {at === 3 && <Box x={160} y={36} w={180} text="Talk and blood tests" lit />}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function ArfidLadder(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tailored; usually as an outpatient", "CBT made for ARFID: set goals", "Foods ranked by anxiety, step by step", "Food chaining: very similar foods", "Practise, and keep using the skills"];
  const rungs = [164, 126, 88, 50];
  const step = [-1, 0, 1, 1, 2][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Therapy" title="Goals, steps and a therapist" label="CBT for ARFID" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ladder of small steps, ranked by anxiety, with a therapist alongside">
      <path d="M220 184 V30 M276 184 V30" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {rungs.map(y => <path key={y} d={`M220 ${y} H276`} stroke={INK} strokeWidth="4" />)}
      {(at === 1 || at === 4) && <><path d="M276 30 V8" stroke={INK} strokeWidth="3" /><path d="M276 8 L296 14 L276 20 Z" fill={GOLD} /></>}
      {at === 2 && <><W x={210} y={168} size={10} anchor="end">Least anxious</W><W x={210} y={54} size={10} anchor="end">Most anxious</W></>}
      {step >= 0 && <circle cx="248" cy={rungs[step] - 13} r="9" fill={GOLD} stroke={WHITE} strokeWidth="3" />}
      <Person x={56} y={170} scale={0.85} /><Person x={104} y={170} scale={0.85} fill={SOFT} />
      {at === 0 && <><Box x={90} y={44} w={140} text="Tailored to you" lit /><Box x={90} y={80} w={120} text="Outpatient" /></>}
      {at === 1 && <Box x={90} y={44} w={120} text="Set goals" lit />}
      {at === 3 && <g>
        <Box x={90} y={44} w={140} text="Food chaining" lit />
        {[56, 90, 124].map(x => <ellipse key={x} cx={x} cy="88" rx="20" ry="11" fill="none" stroke={INK} strokeWidth="3" />)}
      </g>}
      {at === 4 && <><Box x={90} y={44} w={110} text="Practise" lit /><Box x={90} y={80} w={140} text="Keep the skills" /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function ArfidGoodEnough(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["A dietitian, part of a team", "Vitamins and minerals, if needed", "Enough, even if it looks different", "Discomfort can affect eating too"];
  const labels = [["Dietitian", "Psychologist", "Speech and language", "Occupational therapy"], ["Multivitamins", "Zinc or iron", "Supplements"], [], ["Constipation", "Heartburn", "Toothache", "Mouth ulcers"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="A dietitian" title="Good enough, not perfect" label="Working with a dietitian" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A dial pointing to good enough, with the team and help around it">
      <Gauge x={84} y={128} r={58} value={[0.3, 0.4, 0.5, 0.5][at]} />
      {labels.length > 0 && <Tags x={166} y={34} width={140} gap={36} labels={labels} lit={index => at === 0 && index === 0} />}
      {at === 2 && <><Box x={236} y={80} w={130} text="Good enough" lit /><Box x={236} y={116} w={130} text="Not perfect" /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function ArfidSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Go at the person's own pace", "Look, touch, smell, then taste", "Graded steps, with a therapist", "Plan the day and time together", "Small changes are big progress"];
  const steps = [{ x: 24, y: 160, t: "Look" }, { x: 94, y: 136, t: "Touch" }, { x: 164, y: 112, t: "Smell" }, { x: 234, y: 88, t: "Taste" }];
  const reach = [-1, 1, 2, 0, 3][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="New foods" title="One small step at a time" label="Trying new foods slowly" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four small steps, look, touch, smell and taste, rising gently">
      {steps.map((step, index) => <g key={step.t}>
        <rect x={step.x} y={step.y} width="62" height="24" rx="8" fill={index <= reach ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={step.x + 31} y={step.y + 16} size={10.5} fill={index <= reach ? WHITE : TEXT}>{step.t}</W>
      </g>)}
      {reach >= 0 && <circle cx={steps[reach].x + 31} cy={steps[reach].y - 12} r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" />}
      {at === 0 && <><Box x={90} y={40} w={124} text="No pressure" lit /><Box x={90} y={76} w={124} text="Their own pace" /></>}
      {at === 1 && <Box x={90} y={40} w={150} text="Could take months" />}
      {at === 2 && <Box x={90} y={40} w={150} text="With a therapist" lit />}
      {at === 3 && <g>
        {Array.from({ length: 8 }, (_, index) => <rect key={index} x={30 + (index % 4) * 30} y={30 + Math.floor(index / 4) * 30} width="24" height="24" rx="4" fill={index === 5 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />)}
      </g>}
      {at === 4 && <Sun x={280} y={44} r={12} />}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function ArfidQuietTable(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Food-based events can feel isolating", "Know who will be there, and where", "A quieter place, or headphones", "Neutral talk; no pressure to try"];
  const seats = [{ x: 160, y: 66 }, { x: 160, y: 158 }, { x: 88, y: 112 }, { x: 232, y: 112 }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Eating with others" title="Making meals with others easier" label="Eating with others" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A table seen from above, with a quieter seat and a window">
      <rect x="262" y="26" width="44" height="44" rx="3" fill={at === 2 ? GOLD : TINT} stroke={INK} strokeWidth="2.5" />
      <path d="M284 26 V70 M262 48 H306" stroke={INK} strokeWidth="2" />
      <rect x="112" y="88" width="96" height="48" rx="14" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {seats.map((seat, index) => { const empty = at === 0 && index === 3; return <g key={index} opacity={empty ? 0.45 : 1}>
        <rect x={seat.x - 13} y={seat.y - 13} width="26" height="26" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" strokeDasharray={empty ? "4 3" : undefined} />
        {!empty && <circle cx={seat.x} cy={seat.y} r="8" fill={index === 2 ? INK : SOFT} />}
      </g>; })}
      {at === 2 && <path d="M74 112 A14 14 0 0 1 102 112" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" />}
      {at === 2 && <><rect x="70" y="108" width="7" height="12" rx="3" fill={GOLD} /><rect x="99" y="108" width="7" height="12" rx="3" fill={GOLD} /></>}
      {at === 1 && <><Note x={26} y={30} /><Box x={160} y={30} w={170} text="Who will be there?" /></>}
      {at === 3 && <Box x={160} y={30} w={130} text="Neutral talk" lit />}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function ArfidThreeRings(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Often alongside autism, ADHD, anxiety", "Senses can make some foods hard", "ARFID is more common with ADHD", "Ask for adjustments that help"];
  const rings = [{ cx: 100, cy: 74, t: "ARFID", lx: 100, ly: 60 }, { cx: 72, cy: 124, t: "Autism", lx: 56, ly: 140 }, { cx: 128, cy: 124, t: "ADHD", lx: 146, ly: 140 }];
  const tint = (index: number) => (at === 1 && index === 1) || (at === 2 && index === 2);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Autism and ADHD" title="When the senses shape eating" label="ARFID, autism and ADHD" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three overlapping circles for ARFID, autism and ADHD">
      {rings.map((ring, index) => <circle key={ring.t} cx={ring.cx} cy={ring.cy} r="40" fill={tint(index) ? INK : TINT} fillOpacity={tint(index) ? 0.3 : 0.5} stroke={INK} strokeWidth="2" />)}
      {rings.map(ring => <W key={ring.t} x={ring.lx} y={ring.ly} size={10.5}>{ring.t}</W>)}
      {at === 0 && <><circle cx="100" cy="106" r="7" fill={GOLD} /><Box x={248} y={74} w={124} text="Often together" lit /><Box x={248} y={110} w={124} text="Anxiety too" /></>}
      {at === 1 && <Tags x={190} y={30} width={116} gap={30} labels={["Light", "Sound", "Smell", "Taste", "Touch"]} lit={index => index === 2 || index === 3} />}
      {at === 2 && <Box x={248} y={96} w={130} text="More common" lit />}
      {at === 3 && <Tags x={186} y={48} width={124} gap={36} labels={["Quiet place", "Same person", "In writing"]} lit={index => index === 0} />}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function ArfidBench(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Talk, and suggest the GP together", "Not fussy, not a choice, no blame", "Their pace; keep inviting them", "You did not cause this; seek support"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Family and friends" title="Patience over pressure" label="For family and friends" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people side by side on a bench, with a small plant growing">
      <path d="M78 122 H242" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <Person x={128} y={140} /><Person x={192} y={140} fill={SOFT} />
      <rect x="70" y="150" width="180" height="9" rx="4" fill={INK} />
      <path d="M84 159 V182 M236 159 V182" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <path d="M262 162 h28 l-4 22 h-20 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M276 162 V144" stroke={INK} strokeWidth="2.5" />
      <g className={still || at !== 3 ? undefined : "lib-v2-breathe is-slow"}><HeartShape x={276} y={136} size={at === 3 ? 30 : 22} fill={GOLD} stroke={GOLD} width={2} /></g>
      {at === 3 && <Cup x={44} y={168} />}
      {at === 0 && <Bubble x={150} y={48} text="The GP together?" width={140} />}
      {at === 1 && <><Box x={96} y={44} w={120} text="Not a choice" lit /><Box x={228} y={44} w={124} text="Nobody's fault" /></>}
      {at === 2 && <><Box x={104} y={44} w={130} text="At their pace" lit /><Box x={232} y={44} w={110} text="Keep asking" /></>}
      {at === 3 && <Box x={160} y={44} w={170} text="Support for you, too" lit />}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function ArfidHelpLine(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Phone, webchat or email; free calls", "Thursdays, 6:45pm to 7:45pm", "ARFID Awareness UK and HelpFinder", "Beat does not run a crisis service"];
  const crisis = at === 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You are not alone" label="Support and charities" credit="Illustration: Rehyn. In immediate danger? Call 999 or Samaritans on 116 123."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A phone for Beat's Helpline, the weekly online group, and urgent help">
      <g opacity={crisis ? 0.35 : 1}>
        <rect x="30" y="40" width="56" height="104" rx="10" fill={at === 0 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="38" y="52" width="40" height="70" rx="3" fill={at === 0 ? WHITE : TINT} opacity={at === 0 ? 0.25 : 1} />
        <circle cx="58" cy="133" r="3.5" fill={at === 0 ? WHITE : INK} />
      </g>
      {at === 0 && <Tags x={130} y={46} width={150} gap={36} labels={["Phone", "Webchat", "Email"]} lit={index => index === 0} />}
      {at === 1 && <g>
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}>
          <rect x={112 + index * 28} y="60" width="24" height="30" rx="5" fill={index === 3 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
          <W x={124 + index * 28} y={80} size={10}>{day}</W>
        </g>)}
        <W x={208} y={118} size={10.5}>6:45pm to 7:45pm</W>
      </g>}
      {at === 2 && <><Box x={204} y={70} w={170} text="ARFID Awareness UK" lit /><Box x={204} y={108} w={130} text="HelpFinder" /></>}
      {crisis && <g>
        <Box x={196} y={56} w={210} text="999 or Samaritans 116 123" lit />
        <Box x={196} y={92} w={190} text="111, mental health option" />
        <Box x={196} y={128} w={170} text="Text SHOUT to 85258" lit />
      </g>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

export function NourishPieceView({ piece, ...props }: { piece: NourishPiece } & PieceProps) {
  switch (piece) {
    case "bed-knot-thread": return <BedKnotThread {...props} />;
    case "bed-sign-weather": return <BedSignWeather {...props} />;
    case "bed-four-threads": return <BedFourThreads {...props} />;
    case "bed-gp-road": return <BedGpRoad {...props} />;
    case "bed-workbook": return <BedWorkbook {...props} />;
    case "bed-cbt-group": return <BedCbtGroup {...props} />;
    case "bed-day-rhythm": return <BedDayRhythm {...props} />;
    case "bed-therapy-first": return <BedTherapyFirst {...props} />;
    case "bed-urge-wave": return <BedUrgeWave {...props} />;
    case "bed-kind-feed": return <BedKindFeed {...props} />;
    case "bed-word-swap": return <BedWordSwap {...props} />;
    case "bed-contact-tiles": return <BedContactTiles {...props} />;
    case "arfid-venn": return <ArfidVenn {...props} />;
    case "arfid-umbrella": return <ArfidUmbrella {...props} />;
    case "arfid-week-strip": return <ArfidWeekStrip {...props} />;
    case "arfid-battery": return <ArfidBattery {...props} />;
    case "arfid-stones": return <ArfidStones {...props} />;
    case "arfid-ladder": return <ArfidLadder {...props} />;
    case "arfid-good-enough": return <ArfidGoodEnough {...props} />;
    case "arfid-steps": return <ArfidSteps {...props} />;
    case "arfid-quiet-table": return <ArfidQuietTable {...props} />;
    case "arfid-three-rings": return <ArfidThreeRings {...props} />;
    case "arfid-bench": return <ArfidBench {...props} />;
    case "arfid-help-line": return <ArfidHelpLine {...props} />;
  }
}
