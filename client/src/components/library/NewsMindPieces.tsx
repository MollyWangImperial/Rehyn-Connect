import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { MIND_PIECES, type MindPiece } from "@/content/mind-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Mind & mood pages' own pieces (content/ischaemic-news.ts, keyed "<condition>/<piece>"), drawn in the
// page's card colours (the --t-… variables), like the Bones pieces. Each is steered by the card's sections;
// pictures show ideas, calmly, and never anyone's own thoughts or results.

export const isMindPiece = (piece: NewsPiece): piece is MindPiece => (MIND_PIECES as readonly string[]).includes(piece);

/** A row of labelled boxes down the right-hand side; `lit` boxes are filled. */
const Tags = ({ x, y, labels, lit, width = 120, gap = 34 }: { x: number; y: number; labels: string[]; lit: (index: number) => boolean; width?: number; gap?: number }) =>
  <g>{labels.map((label, index) => <g key={label} transform={`translate(${x} ${y + index * gap})`}>
    <rect width={width} height="26" rx="9" fill={lit(index) ? INK : WHITE} stroke={INK} strokeWidth="2" />
    <W x={width / 2} y={17} size={10.5} fill={lit(index) ? WHITE : TEXT}>{label}</W>
  </g>)}</g>;

/** A speech bubble with its tail pointing down-left, centred on (x, y). */
const Bubble = ({ x, y, text, lit = true, width = 110 }: { x: number; y: number; text: string; lit?: boolean; width?: number }) =>
  <g opacity={lit ? 1 : 0.35}>
    <rect x={x - width / 2} y={y - 15} width={width} height="30" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" />
    <path d={`M${x - width / 2 + 18} ${y + 14} l-8 12 l18 -12`} fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <W x={x} y={y + 4} size={10.5}>{text}</W>
  </g>;

// ==== Anxiety ===============================================================================================

function Alarm(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The alarm that will not switch off" label="Anxiety in the body" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with its alarm ringing, and what it can feel like">
      <Person x={84} y={150} scale={1.5} />
      <circle cx="84" cy="110" r="22" fill="none" stroke={GOLD} strokeWidth="3" className={still || at === 0 || at === 4 ? undefined : "lib-why-pulse"} opacity={at === 4 ? 0.3 : 1} />
      <Tags x={170} y={40} labels={["Faster heart", "Quicker breathing", "Sweating", "Tight stomach"]} lit={index => at === 1 ? index < 2 : at === 2 || at === 3} />
      <W x={160} y={204} size={11}>{["An alarm meant to keep you safe", "Adrenaline speeds things up", "Real feelings in the body", "Sometimes the alarm gets stuck on", "A GP can check other causes too"][at]}</W>
    </svg>} />;
}

function PanicWave(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const dot = [[60, 150], [120, 60], [170, 74], [230, 140], [280, 160]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Panic attacks" title="Frightening, not dangerous, and over soon" label="Panic attacks" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A panic attack rising sharply and settling again">
      <path d="M20 160 C70 160, 90 50, 125 50 S200 150, 300 160" stroke={INK} strokeWidth="4" fill="none" />
      <path d="M20 176 H300" stroke={LINE} strokeWidth="3" /><W x={20} y={192} size={10} anchor="start">Start</W><W x={300} y={192} size={10} anchor="end">5 to 20 minutes</W>
      <circle cx={dot[0]} cy={dot[1]} r="9" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      <W x={160} y={24} size={11.5}>{["A sudden rush of fear", "Pounding heart, breathlessness", "Not a heart attack, not harmful", "New chest pain? Get it checked", "Fear of the next one keeps it going"][at]}</W>
    </svg>} />;
}

function CheckLoop(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const steps = ["Notice a twinge", "Check or search", "Brief relief", "Worry returns"];
  const spots = [[160, 46], [262, 108], [160, 170], [58, 108]];
  const broken = at >= 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Health anxiety" title="When every twinge feels like a warning" label="Health anxiety" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The loop of noticing, checking, relief and worry, and breaking it">
      <ellipse cx="160" cy="108" rx="102" ry="62" fill="none" stroke={broken ? LINE : SOFT} strokeWidth="4" strokeDasharray={broken ? "6 10" : undefined} />
      {steps.map((step, index) => <g key={step}><rect x={spots[index][0] - 54} y={spots[index][1] - 14} width="108" height="28" rx="10" fill={at === 2 && index === 1 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={spots[index][0]} y={spots[index][1] + 4} size={10.5} fill={at === 2 && index === 1 ? WHITE : TEXT}>{step}</W></g>)}
      <W x={160} y={212} size={11}>{["Worry that takes over", "Often after a health scare", "Checking keeps the loop going", "Small steps can break it", "A GP or talking therapy can help"][at]}</W>
    </svg>} />;
}

function Doors(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const doors = ["Generalised", "Panic", "Social", "Phobias"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The types" title="Many kinds of anxiety, one way in" label="Types of anxiety" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four doors, each a type of anxiety, opening onto one path">
      {doors.map((door, index) => <g key={door} opacity={at === 4 || at === index ? 1 : 0.4}>
        <rect x={22 + index * 72} y="40" width="60" height="96" rx="6" fill={at === index ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <circle cx={70 + index * 72} cy="92" r="3.5" fill={at === index ? WHITE : INK} />
        <W x={52 + index * 72} y={152} size={10}>{door}</W>
      </g>)}
      {at === 4 && <path d="M52 164 C120 190, 200 190, 268 164" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" />}
      <W x={160} y={208} size={11}>{["Worry about many things, most days", "Repeated panic attacks", "Fear of being judged", "Fear of something specific", "More than one is common; all are treatable"][at]}</W>
    </svg>} />;
}

function Triangle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const corners = [{ x: 160, y: 40, t: "Thoughts" }, { x: 70, y: 140, t: "Feelings" }, { x: 250, y: 140, t: "Actions" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="CBT" title="Thoughts, feelings, actions: breaking the loop" label="CBT" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Thoughts, feelings and actions joined in a triangle, and a row of sessions">
      <path d="M160 52 L82 130 H238 Z" fill={TINT} stroke={SOFT} strokeWidth="3" strokeLinejoin="round" />
      {corners.map(corner => <g key={corner.t}><rect x={corner.x - 46} y={corner.y - 14} width="92" height="28" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={corner.x} y={corner.y + 4} size={10.5}>{corner.t}</W></g>)}
      {Array.from({ length: 15 }, (_, index) => <circle key={index} cx={48 + index * 16} cy="176" r="5" fill={at >= 2 && index < (at === 4 ? 15 : 5) ? INK : index < 5 ? SOFT : LINE} />)}
      <W x={160} y={204} size={11}>{["Notice how they feed each other", "Ask a GP, or refer yourself", "Usually 5 to 15 sessions", "Test fears, step by step", "Keep using the skills afterwards"][at]}</W>
    </svg>} />;
}

function Breath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="In the moment" title="Five slow counts in, five out" label="Breathing" credit="Illustration: Rehyn. Follow the steps in the article."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A circle growing on the in-breath and shrinking on the out-breath">
      <circle cx="160" cy="88" r="62" fill={TINT} stroke={SOFT} strokeWidth="3" />
      <circle cx="160" cy="88" r="36" fill={INK} opacity=".85" className={still ? undefined : "lib-v2-breathe is-slow"} />
      <W x={160} y={93} size={12} fill={WHITE}>{at === 2 ? "1 2 3 4 5" : ""}</W>
      <W x={160} y={180} size={11.5}>{["Slow breathing calms the alarm", "Sit or lie comfortably", "In for 5, out for 5", "Notice what is around you", "Breathe slowly; it will pass"][at]}</W>
      <W x={160} y={200} size={10}>{at === 2 ? "for at least 5 minutes" : ""}</W>
    </svg>} />;
}

function Weeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Slow medicines, careful steps" label="Medicines" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Eight weeks for a medicine to work, then stopping slowly">
      {Array.from({ length: 8 }, (_, index) => <g key={index}><rect x={20 + index * 28} y="60" width="24" height="40" rx="6" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2" opacity={at === 2 ? 0.3 + index * 0.09 : 1} /><W x={32 + index * 28} y={116} size={9.5}>{index + 1}</W></g>)}
      <W x={130} y={134} size={10}>weeks</W>
      <Pill x={34} y={36} />
      <path d="M250 64 H270 V80 H286 V96 H302" stroke={at === 4 ? GOLD : SOFT} strokeWidth="4" fill="none" />
      <W x={160} y={176} size={11.5}>{["Alongside talking therapy, for some", "SSRIs, such as sertraline, often first", "Up to 8 weeks to work", "Other options if one does not suit", "Reduce slowly, with your doctor"][at]}</W>
    </svg>} />;
}

function WorryClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Worry time" title="Give worry a time slot" label="Worry time" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock with a short worry time, and worries written down">
      <circle cx="90" cy="100" r="60" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M90 100 L90 40 A60 60 0 0 1 150 100 Z" fill={at === 1 ? INK : SOFT} opacity={at === 1 ? 0.85 : 0.35} />
      <path d="M90 100 V58 M90 100 L118 112" stroke={TEXT} strokeWidth="4" strokeLinecap="round" />
      {[0, 1, 2].map(index => <g key={index} transform={`translate(${190 + (index % 2) * 18} ${40 + index * 40}) rotate(${index % 2 ? 4 : -4})`}>
        <rect width="90" height="32" rx="4" fill={TINT} stroke={INK} strokeWidth="1.5" />
        {at === 2 && <W x={45} y={21} size={10}>{["Can act on", "Let it go", "Can act on"][index]}</W>}
        {at !== 2 && <path d="M12 12 H70 M12 21 H56" stroke={SOFT} strokeWidth="3" strokeLinecap="round" />}
      </g>)}
      <W x={160} y={200} size={11}>{["Write worries down", "Save them for a set time each day", "What can you change, and what not?", "Catch a thought, check it, change it", "Back to the present moment"][at]}</W>
    </svg>} />;
}

function DayLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Caffeine and sleep" title="Coffee, a nightcap and a racing mind" label="Caffeine, alcohol and sleep" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day from morning coffee to bedtime, with caffeine stopped 6 hours before">
      <path d="M20 110 H300" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      <g opacity={at === 0 || at === 3 ? 1 : 0.4}><rect x="40" y="70" width="26" height="28" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M66 78 h6 a6 6 0 0 1 0 12 h-6" fill="none" stroke={INK} strokeWidth="2.5" /><W x={56} y={134} size={10}>Morning</W></g>
      {(at === 0 || at === 3) && <><path d="M150 44 V56 M290 44 V56" stroke={GOLD} strokeWidth="2" /><path d="M150 50 H290" stroke={GOLD} strokeWidth="3" /><W x={220} y={38} size={10.5}>No caffeine: at least 6 hours</W></>}
      <g opacity={at === 1 ? 1 : 0.4}><path d="M200 70 h22 l-11 18 Z M211 88 v14 M203 102 h16" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><W x={211} y={134} size={10}>Evening</W></g>
      <path d="M284 66 A14 14 0 1 0 296 88 A11 11 0 1 1 284 66 Z" fill={at >= 2 ? INK : SOFT} />
      <W x={160} y={176} size={11.5}>{["Caffeine can make it worse", "Alcohol eases it, then feeds it", "Poor sleep and worry feed each other", "A regular wind-down routine", "Still struggling? See a GP"][at]}</W>
    </svg>} />;
}

function Ladder(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rung = [0, 0, 1, 1, 2][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Avoidance" title="Small steps shrink big fears" label="Avoidance" credit="Illustration: Rehyn. Example ratings, as in Every Mind Matters."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ladder of steps, from a small fear to a big one">
      <path d="M60 180 V30 M140 180 V30" stroke={INK} strokeWidth="4" />
      {[{ y: 160, t: "10" }, { y: 110, t: "50" }, { y: 60, t: "100" }].map((step, index) => <g key={step.t}><path d={`M60 ${step.y} H140`} stroke={INK} strokeWidth="4" /><W x={160} y={step.y + 4} size={10.5} anchor="start">{step.t} out of 100</W>{index === rung && <circle cx="100" cy={step.y - 14} r="10" fill={GOLD} />}</g>)}
      <W x={160} y={204} size={11}>{["Relief now, more fear later", "Staying in, putting off, escaping", "Start with the smallest step", "Stay until fear falls by half", "A therapist can guide you"][at]}</W>
    </svg>} />;
}

function Chairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const bubbles = [{ t: "Just listen", i: 2 }, { t: "Be patient", i: 3 }, { t: "Take it seriously", i: 2 }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Telling people" title="Letting the people around you in" label="Telling people" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people talking, with what can help">
      <Person x={70} y={160} scale={1.3} /><Person x={250} y={160} scale={1.3} fill={SOFT} />
      {bubbles.map((bubble, index) => <Bubble key={bubble.t} x={160} y={42 + index * 38} text={bubble.t} lit={at === 0 || at === bubble.i || at === 4} width={118} />)}
      <W x={160} y={208} size={11}>{["Sharing can ease the load", "Worry about burdening others is common", "Say what would help", "Ideas they can try", "Your GP and helplines are there too"][at]}</W>
    </svg>} />;
}

function WeekMove(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const filled = [3, 7, 1, 5, 7][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercise" title="Move a little, worry a little less" label="Exercise" credit="Illustration: Rehyn. 150 minutes a week is the NHS guide for adults."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of days filling towards 150 minutes of activity">
      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}><rect x={22 + index * 40} y="60" width="34" height="60" rx="8" fill={index < filled ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={39 + index * 40} y={140} size={11}>{day}</W></g>)}
      <W x={160} y={40} size={11.5}>{at === 1 ? "150 minutes a week" : at === 2 ? "Start with a 10-minute walk" : ""}</W>
      <W x={160} y={182} size={11.5}>{["Lifts mood and burns off tension", "Moderate activity, most days", "Start small", "Choose something you enjoy", "Being active can help you sleep"][at]}</W>
    </svg>} />;
}

// ==== Depression, Depression after stroke and Sleep problems ================================================

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 204, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Cup = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 12} y={y - 13} width="24" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 12} ${y - 7} h5 a6 6 0 0 1 0 12 h-5`} fill="none" stroke={INK} strokeWidth="2.5" /></g>;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 11} y={y - 18} width="22" height="36" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 11} r="2.2" fill={lit ? WHITE : INK} /></g>;
const Cloud = ({ x, y, s, opacity = 1 }: { x: number; y: number; s: number; opacity?: number }) =>
  <g opacity={opacity} fill={SOFT}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;

// ---- Depression --------------------------------------------------------------------------------------------

function DepTwoWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Persistently sad, for weeks or months", "Lasting over 2 weeks? See a GP", "Sad, hopeless, tired, sleeping badly", "Real, common, treatable: about 1 in 6", "Most people make a full recovery"];
  const shade = (day: number) => at === 0 ? (day < 3 ? 0.45 : 0) : at === 2 ? 0.55 : at === 4 ? Math.max(0.08, 1 - day * 0.07) : 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="More than a bad week" label="What depression is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two weeks of days: low mood that lasts, what it can feel like, and recovery">
      {Array.from({ length: 14 }, (_, day) => <g key={day} transform={`translate(${22 + (day % 7) * 40} ${22 + Math.floor(day / 7) * 42})`}>
        <rect width="36" height="36" rx="7" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect width="36" height="36" rx="7" fill={INK} opacity={shade(day)} />
        <W x={18} y={22} size={10.5} fill={shade(day) > 0.6 ? WHITE : TEXT}>{day + 1}</W>
      </g>)}
      {at === 1 && <><path d="M22 112 V118 H298 V112" stroke={GOLD} strokeWidth="3" fill="none" /><W x={160} y={138} size={11}>More than 2 weeks</W></>}
      {at === 2 && ["Sad", "Hopeless", "Tired", "Poor sleep"].map((label, index) => <Box key={label} x={50 + index * 73} y={140} w={64} text={label} lit size={10} />)}
      {at === 3 && <>{Array.from({ length: 6 }, (_, index) => <Person key={index} x={70 + index * 32} y={166} scale={0.9} fill={index === 0 ? INK : SOFT} />)}<W x={272} y={158} size={12}>1 in 6</W></>}
      {at === 4 && <Sun x={160} y={148} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DepOverlap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Two to three times more likely", "Stress, the thyroid, some medicines", "Work, money and loneliness can combine", "Often hardest when you are first told", "You still deserve help; refer yourself"];
  const inside = [[], ["Stress", "Thyroid", "Medicines"], ["Work", "Money", "Lonely"], ["First told", "Surgery", "Comes back"], []][at];
  const ring = at === 4 ? GOLD : INK;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Body and mind" title="When the body's illness weighs on the mind" label="Physical illness and depression" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two overlapping circles, physical illness and mood, and what links them">
      <W x={100} y={26} size={11}>Physical illness</W><W x={222} y={26} size={11}>Mood</W>
      <circle cx="118" cy="104" r="64" fill={WHITE} stroke={ring} strokeWidth={at === 4 ? 4 : 2.5} />
      <circle cx="202" cy="104" r="64" fill={WHITE} fillOpacity=".7" stroke={ring} strokeWidth={at === 4 ? 4 : 2.5} />
      <path d="M160 55.7 A64 64 0 0 1 160 152.3 A64 64 0 0 1 160 55.7 Z" fill={INK} opacity={at === 0 ? 0.85 : 0.2} />
      {inside.map((label, index) => <Box key={label} x={100} y={80 + index * 24} w={66} h={21} text={label} size={10} />)}
      {inside.length > 0 && <Arrow d="M138 104 H190" head="M183 98 L190 104 L183 110" />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DepBodyMap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Some only notice physical symptoms", "Hard to fall asleep, or waking early", "Little energy; appetite usually falls", "Aches, restlessness, hard to focus", "A GP can help work out the cause"];
  const lit = [[0, 1, 2, 3, 4], [0], [1, 2], [3, 4], []][at];
  const spots = [[104, 62], [112, 124], [104, 150], [126, 166], [98, 82]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="In the body" title="The symptoms you feel in your body" label="Physical symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with the places depression can show: sleep, energy, appetite, aches and focus">
      <Person x={86} y={150} scale={2.6} />
      {lit.map(index => <path key={index} d={`M176 ${35 + index * 30} L${spots[index][0]} ${spots[index][1]}`} stroke={GOLD} strokeWidth="2" strokeDasharray="3 4" />)}
      {lit.map(index => <circle key={`spot${index}`} cx={spots[index][0]} cy={spots[index][1]} r="4" fill={GOLD} />)}
      <Tags x={176} y={22} labels={["Sleep", "Energy", "Appetite", "Aches", "Focus"]} lit={index => lit.includes(index)} width={128} gap={30} />
      {at === 4 && <Box x={86} y={22} w={112} h={22} text="Illness or mood?" size={10} lit />}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function DepSignposts(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["You do not have to struggle alone", "In danger now: 999 or A&E", "111: choose the mental health option", "Someone to listen, day or night", "Focus on getting through today"];
  const boards = ["999 or A&E", "NHS 111, mental health", "Samaritans 116 123", "Text SHOUT to 85258"];
  const on = [[], [0], [1], [2, 3], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Help, any hour" title="Help is there, right now" label="Where to get help" credit="Illustration: Rehyn. In danger now? Call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A signpost to help: 999, NHS 111, Samaritans and Shout, with the sun rising">
      <Sun x={276} y={[146, 126, 108, 90, 62][at]} r={13} />
      <path d="M0 180 C90 172, 230 172, 320 180" stroke={LINE} strokeWidth="3" fill="none" />
      <rect x="36" y="18" width="8" height="160" rx="3" fill={INK} />
      {boards.map((board, index) => { const y = 26 + index * 34; const lit = on.includes(index); return <g key={board}>
        <path d={`M44 ${y} H210 L222 ${y + 13} L210 ${y + 26} H44 Z`} fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <W x={128} y={y + 17} size={10.5} fill={lit ? WHITE : TEXT}>{board}</W>
      </g>; })}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DepStones(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Talking to a trained professional", "CBT: usually 8 to 16 sessions", "Guided self-help: 6 to 8 sessions", "A GP can refer you, or refer yourself", "Keep using the skills afterwards"];
  const stones = [{ x: 98, y: 160, t: "Self-help" }, { x: 178, y: 146, t: "CBT" }, { x: 258, y: 160, t: "Counselling" }];
  const litStone = (index: number) => at === 4 || (at === 1 && index === 1) || (at === 2 && index !== 1);
  const people = at === 0 || at === 4 ? INK : SOFT;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Talking therapies" title="Talking therapies, and how to start" label="Talking therapies" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from a door marked refer yourself, over stepping stones, to two chairs">
      <path d="M56 152 C74 164, 82 162, 96 160 S150 146, 176 146 S236 162, 256 160 C280 156, 268 126, 258 116" stroke={at === 4 ? GOLD : LINE} strokeWidth="4" fill="none" strokeDasharray="2 8" strokeLinecap="round" />
      <W x={14} y={62} size={10} anchor="start">Refer yourself</W>
      <rect x="16" y="72" width="40" height="82" rx="4" fill={at === 3 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="48" cy="116" r="3.5" fill={at === 3 ? WHITE : INK} />
      {stones.map((stone, index) => <g key={stone.t}><ellipse cx={stone.x} cy={stone.y} rx="39" ry="15" fill={litStone(index) ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={stone.x} y={stone.y + 4} size={10} fill={litStone(index) ? WHITE : TEXT}>{stone.t}</W></g>)}
      <Person x={224} y={92} fill={people} /><Person x={288} y={92} fill={people} />
      <rect x="206" y="100" width="36" height="6" rx="3" fill={INK} /><rect x="270" y="100" width="36" height="6" rx="3" fill={INK} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DepWeekLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["SSRIs such as sertraline usually first", "Many side effects ease after 2 weeks", "1 to 2 weeks to start, up to 8 to work", "Speak to your doctor straight away", "At least 6 months, then reduce slowly"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Antidepressants" title="The first weeks on antidepressants" label="Antidepressants" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Eight weeks for an antidepressant to work, then at least 6 months, then reducing slowly">
      {at === 0 && <><Pill x={60} y={52} /><W x={88} y={56} size={11} anchor="start">SSRI, such as sertraline</W></>}
      {at === 1 && <><rect x="20" y="98" width="44" height="20" rx="6" fill={SOFT} /><W x={20} y={90} size={10.5} anchor="start">Side effects ease</W></>}
      {at >= 2 && <g opacity={at === 2 ? 1 : at === 3 ? 0.25 : 0.5}><path d="M30 118 C90 116, 130 80, 200 48" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" /><circle cx="200" cy="48" r="6" fill={GOLD} /></g>}
      {at === 3 && <Bubble x={160} y={50} text="Tell your doctor" width={124} />}
      {Array.from({ length: 8 }, (_, index) => <g key={index}>
        <rect x={20 + index * 24} y="124" width="20" height="20" rx="4" fill={at === 2 ? INK : WHITE} fillOpacity={at === 2 ? 0.25 + index * 0.1 : 1} stroke={INK} strokeWidth="2" />
        <W x={30 + index * 24} y={138} size={9.5} fill={at === 2 && index > 3 ? WHITE : TEXT}>{index + 1}</W>
      </g>)}
      <W x={110} y={162} size={10}>weeks</W>
      <rect x="218" y="124" width="52" height="20" rx="6" fill={at === 4 ? INK : WHITE} stroke={INK} strokeWidth="2" />
      <W x={244} y={162} size={10}>6 months+</W>
      <path d="M274 134 H284 V142 H294 V150 H304 V158" stroke={at === 4 ? GOLD : LINE} strokeWidth="3.5" fill="none" />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DepPlanner(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Doing less can keep low mood going", "Links what you do with how you feel", "Start with easier things, then build", "Try a plan for 3 days", "Make time for something you enjoy"];
  const plan: [number, number, string][] = [[0, 0, "Walk"], [0, 1, "Meal"], [1, 0, "Stairs"], [1, 2, "Friend"], [2, 1, "Hobby"], [2, 0, "Walk"], [0, 2, "Bath"]];
  const shown = [0, 1, 2, 6, 7][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Small steps" title="Small steps that lift mood" label="Behavioural activation" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A loop of staying in bed and feeling more tired, and a 3-day plan filling with small activities">
      <g opacity={at === 0 ? 1 : 0.35}>
        <circle cx="70" cy="104" r="46" fill="none" stroke={INK} strokeWidth="3" strokeDasharray={at === 0 ? undefined : "6 8"} />
        <path d="M18 110 L24 100 L30 110 M110 98 L116 108 L122 98" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <Box x={70} y={58} w={92} text="Stay in bed" size={10} /><Box x={70} y={150} w={92} text="More tired" size={10} />
      </g>
      {at > 0 && <Arrow d="M128 104 H142" head="M136 98 L143 104 L136 110" />}
      {["Day 1", "Day 2", "Day 3"].map((day, col) => <W key={day} x={171 + col * 50} y={38} size={10}>{day}</W>)}
      {[0, 1, 2].map(col => [0, 1, 2].map(row => <rect key={`${col}-${row}`} x={148 + col * 50} y={46 + row * 38} width="46" height="32" rx="6" fill={WHITE} stroke={LINE} strokeWidth="2" />))}
      {plan.slice(0, shown).map(([col, row, label], index) => <g key={index}>
        <rect x={148 + col * 50} y={46 + row * 38} width="46" height="32" rx="6" fill={index === 6 ? GOLD : INK} />
        <W x={171 + col * 50} y={66 + row * 38} size={9.5} fill={index === 6 ? TEXT : WHITE}>{label}</W>
      </g>)}
      <Say y={202}>{caps[at]}</Say>
    </svg>} />;
}

function DepSunArc(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A main treatment for mild depression", "Even a brisk 10-minute walk can help", "Get outside in daylight every day", "Most adults need 7 to 9 hours", "No tea or coffee 6 hours before bed"];
  const t = [0.18, 0.32, 0.5][at] ?? 0;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercise and sleep" title="Move, get daylight, sleep steady" label="Exercise, daylight and sleep" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The sun's path over a day, a walk, daylight, and a night of sleep">
      <path d="M40 150 A120 120 0 0 1 280 150" fill="none" stroke={LINE} strokeWidth="2.5" strokeDasharray="4 7" />
      <path d="M20 150 H300" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {at < 3 && <Sun x={160 - 120 * Math.cos(Math.PI * t)} y={150 - 120 * Math.sin(Math.PI * t)} />}
      <Person x={110} y={136} fill={at <= 1 ? INK : SOFT} />
      {at === 1 && <W x={110} y={84} size={10.5}>10 minutes</W>}
      {at === 3 && <><Moon x={160} y={44} r={14} /><W x={160} y={86} size={11.5}>7 to 9 hours</W></>}
      {at === 4 && <><Moon x={282} y={56} /><Cup x={226} y={128} /><Cross x={228} y={128} s={15} /><W x={226} y={96} size={10.5}>6 hours before bed</W></>}
      <Say y={192}>{caps[at]}</Say>
    </svg>} />;
}

function DepBench(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Sharing how you feel can help", "Someone supportive, a good listener", "It can take a few goes; keep trying", "Writing or art can help too", "What you tell a GP is confidential"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Telling someone" title="Finding the words to tell someone" label="Telling someone" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people side by side on a bench, talking, with a notebook as another way">
      <rect x="72" y="112" width="176" height="7" rx="3" fill={SOFT} />
      <Person x={125} y={146} scale={1.2} />
      <Person x={195} y={146} scale={1.2} fill={at === 1 ? INK : SOFT} />
      {at === 1 && <circle cx="195" cy="110" r="19" fill="none" stroke={GOLD} strokeWidth="3" />}
      <rect x="66" y="150" width="188" height="9" rx="3" fill={INK} /><path d="M82 159 V184 M238 159 V184" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <Bubble x={108} y={58} text="How I feel" width={104} />}
      {at === 2 && <><Bubble x={124} y={42} text="" width={104} lit={false} /><Bubble x={116} y={50} text="" width={104} lit={false} /><Bubble x={108} y={58} text="Keep trying" width={104} /></>}
      {at === 3 && <g>
        <W x={14} y={60} size={10} anchor="start">Write it down</W>
        <rect x="18" y="70" width="42" height="54" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" />
        <path d="M26 84 H52 M26 94 H52 M26 104 H44" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M64 122 L78 100" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
      </g>}
      {at === 4 && <g>
        <path d="M272 92 V84 a10 10 0 0 1 20 0 V92" stroke={INK} strokeWidth="3" fill="none" />
        <rect x="266" y="92" width="32" height="24" rx="4" fill={INK} />
        <W x={280} y={134} size={10}>Confidential</W>
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function DepStations(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Statutory Sick Pay: up to 28 weeks", "Over 7 days off? You need a fit note", "Ask about part-time or later starts", "Reasonable adjustments, by law", "Access to Work can help"];
  const xs = [36, 98, 160, 222, 284];
  const names = ["Time off", "Fit note", "Return", "Rights", "Support"];
  const icon = (index: number, x: number) => [
    <g key="home"><path d={`M${x - 15} 120 V102 L${x} 88 L${x + 15} 102 V120 Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><rect x={x - 5} y="108" width="10" height="12" fill={INK} /></g>,
    <g key="note"><rect x={x - 12} y="90" width="24" height="32" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x - 7} 100 H${x + 7} M${x - 7} 108 H${x + 7} M${x - 7} 116 H${x + 3}`} stroke={INK} strokeWidth="2" /></g>,
    <Clock key="clock" x={x} y={106} r={15} hand={2} />,
    <path key="scales" d={`M${x} 90 V122 M${x - 9} 122 H${x + 9} M${x - 16} 96 H${x + 16} M${x - 16} 96 L${x - 21} 108 H${x - 11} Z M${x + 16} 96 L${x + 11} 108 H${x + 21} Z`} stroke={INK} strokeWidth="2.5" fill="none" strokeLinejoin="round" />,
    <g key="badge"><circle cx={x} cy="106" r="14" fill={INK} /><path d={`M${x - 6} 106 L${x - 1} 111 L${x + 7} 101`} stroke={WHITE} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>,
  ][index];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work" title="Time off, and a way back" label="Work and sick notes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from time off, through a fit note and a planned return, to rights and support at work">
      <path d="M36 150 H284" stroke={LINE} strokeWidth="4" strokeDasharray="2 8" strokeLinecap="round" />
      {xs.map((x, index) => <g key={index} opacity={index === at ? 1 : 0.45}>
        {index === at && <circle cx={x} cy="106" r="27" fill={WHITE} stroke={GOLD} strokeWidth="3" />}
        {icon(index, x)}
        <circle cx={x} cy="150" r="6" fill={index <= at ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x} y={176} size={10}>{names[index]}</W>
      </g>)}
      {at === 0 && <W x={40} y={66} size={11}>28 weeks</W>}
      {at === 1 && <W x={98} y={66} size={11}>7 days</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DepWave(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Roughly 50:50 chance it returns", "Keep taking medicine as prescribed", "Talk, stay active, drink less alcohol", "Early signs: sleep, interest, people", "Think it is back? Get help early"];
  const dip = at === 0 || at >= 3;
  const signs: [string, number, number, number][] = [["Sleep", 100, 164, 104], ["Interest", 180, 180, 124.5], ["People", 260, 196, 146]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Staying well" title="Staying well, and catching a dip" label="Staying well" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A gently wavy line of mood, with early signs flagged before a dip">
      <path d={dip ? "M20 100 C60 88, 100 112, 140 100 S180 160, 220 152 S280 110, 300 104" : "M20 100 C60 88, 100 112, 140 100 S220 88, 300 100"} stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
      {at === 0 && <><circle cx="272" cy="46" r="16" fill="none" stroke={LINE} strokeWidth="8" /><path d="M272 30 A16 16 0 0 1 272 62" stroke={INK} strokeWidth="8" fill="none" /><W x={244} y={50} size={11} anchor="end">50:50</W></>}
      {at === 1 && <><Pill x={52} y={48} /><W x={78} y={52} size={10.5} anchor="start">As prescribed</W></>}
      {at === 2 && <><Box x={78} y={46} w={56} text="Talk" lit /><Box x={150} y={46} w={64} text="Active" lit /><Box x={238} y={46} w={96} text="Less alcohol" lit /></>}
      {at === 3 && signs.map(([label, bx, px, py]) => <g key={label}><path d={`M${bx} 57 L${px} ${py}`} stroke={GOLD} strokeWidth="2" strokeDasharray="3 4" /><circle cx={px} cy={py} r="5" fill={GOLD} /><Box x={bx} y={44} w={66} text={label} size={10} /></g>)}
      {at === 4 && <><path d="M120 59 L164 104" stroke={GOLD} strokeWidth="2" strokeDasharray="3 4" /><circle cx="164" cy="104" r="8" fill={GOLD} /><Box x={120} y={46} w={108} text="Get help early" lit /></>}
      <Say y={200}>{caps[at]}</Say>
    </svg>} />;
}

function DepCareTrio(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Listen; advice only if asked", "Small kindnesses, like the shopping", "Gently encourage them to get help", "Take it seriously; Samaritans 116 123", "Look after your own wellbeing too"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="For family and friends" title="Being there for someone low" label="Supporting someone" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Someone with depression, a person supporting them, and someone supporting the carer">
      <Person x={124} y={160} scale={1.3} fill={SOFT} />
      <Person x={192} y={160} scale={1.3} />
      <g opacity={at === 4 ? 1 : 0.3}><Person x={268} y={164} scale={1.1} /></g>
      {at === 0 && <Bubble x={218} y={64} text="How are you?" width={108} />}
      {at === 1 && <><path d="M44 136 H76 L80 176 H40 Z" fill={INK} /><path d="M52 136 V128 a8 8 0 0 1 16 0 V136" stroke={INK} strokeWidth="3" fill="none" /></>}
      {at === 2 && <><rect x="22" y="96" width="38" height="80" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="52" cy="138" r="3" fill={INK} /><W x={41} y={88} size={11}>GP</W>
        <Arrow d="M98 150 C86 150, 76 144, 68 138" head="M76 136 L67 137 L71 145" /></>}
      {at === 3 && <><Phone x={58} y={140} lit /><W x={58} y={108} size={11}>116 123</W></>}
      {at === 4 && <HeartShape x={232} y={104} size={30} fill={GOLD} stroke={GOLD} width={2} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ---- Depression after stroke -------------------------------------------------------------------------------

function PdsHalves(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["About 1 in 3 in the first year", "Shock, grief and loss are normal", "Stroke damage can affect emotions", "Fatigue looks similar but is different", "With treatment, most recover fully"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Why it happens" title="Why stroke so often brings depression" label="Why depression follows a stroke" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head in two halves: the injury itself, and the losses a stroke brings">
      <circle cx="110" cy="100" r="74" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M110 30 V170" stroke={LINE} strokeWidth="2.5" strokeDasharray="5 6" />
      <W x={78} y={58} size={10.5}>Injury</W><W x={144} y={58} size={10.5}>Losses</W>
      {at === 2 && <circle cx="76" cy="104" r="22" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      <path d="M76 88 L80 100 L92 104 L80 108 L76 120 L72 108 L60 104 L72 100 Z" fill={at === 2 ? GOLD : LINE} />
      <g opacity={at === 1 ? 1 : 0.3}>{["Shock", "Grief", "Lonely"].map((word, index) => <W key={word} x={146} y={94 + index * 22} size={10.5}>{word}</W>)}</g>
      {at === 0 && <>{[222, 256, 290].map((x, index) => <Person key={x} x={x} y={150} scale={0.9} fill={index === 0 ? INK : SOFT} />)}<W x={256} y={98} size={12}>1 in 3</W></>}
      {at === 3 && <><rect x="226" y="86" width="52" height="28" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="278" y="94" width="6" height="12" rx="2" fill={INK} /><rect x="231" y="91" width="12" height="18" rx="2" fill={INK} /><W x={254} y={136} size={10.5}>Fatigue</W></>}
      {at === 4 && <Sun x={256} y={100} r={14} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PdsSpikeWave(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Crying or laughing without warning", "About 1 in 5, in the first months", "Short outbursts, not long sadness", "Often better within six months", "Medicine for severe or lasting cases"];
  const heights = at === 3 ? [34, 22, 12, 5] : [36, 30, 38, 26];
  const d = "M20 86 " + [70, 130, 190, 250].map((x, index) => `H${x - 6} L${x} ${86 - heights[index]} L${x + 6} 86`).join(" ") + " H300";
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Emotionalism" title="Tears that arrive without warning" label="Emotionalism" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Short sudden spikes of emotion, set against the long low wave of depression">
      <W x={20} y={30} size={10.5} anchor="start">Emotionalism</W>
      <path d={d} stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" />
      {at === 1 && <><W x={86} y={168} size={12}>About 1 in 5</W>{Array.from({ length: 5 }, (_, index) => <Person key={index} x={180 + index * 26} y={174} scale={0.75} fill={index === 0 ? INK : SOFT} />)}</>}
      {at === 2 && <><W x={20} y={126} size={10.5} anchor="start">Depression</W><path d="M20 160 C80 148, 140 172, 200 160 S280 148, 300 158" stroke={SOFT} strokeWidth="6" fill="none" strokeLinecap="round" /></>}
      {at === 3 && <>{Array.from({ length: 6 }, (_, index) => <g key={index}><path d={`M${40 + index * 48} 90 V96`} stroke={INK} strokeWidth="2" /><W x={40 + index * 48} y={110} size={9.5}>{index + 1}</W></g>)}<W x={160} y={128} size={10}>months</W></>}
      {at === 4 && <g transform="translate(160 146) scale(1.6)"><Pill x={0} y={0} /></g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PdsSigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Low most of the time, for weeks", "Sad, hopeless, losing interest", "Low energy, poor sleep, staying in", "Ask open questions, and listen", "If life is at risk, call 999"];
  const sets = [["Low most of the time", "For several weeks", "Less enjoyment"], ["Sad or down", "Hopeless", "Lost interest", "Worried"], ["Low energy", "Sleep changes", "Appetite changes", "Staying in"], ["Sad or down", "Hopeless", "Lost interest", "Worried"], ["999 or A&E", "Samaritans 116 123", "NHS 111", "Text SHOUT 85258"]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The signs" title="When low mood becomes something more" label="Signs of depression" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A stroke survivor and someone close, with the signs of depression listed beside them">
      <Person x={56} y={150} scale={1.4} />
      <Person x={122} y={156} scale={1.2} fill={at === 3 ? INK : SOFT} />
      <g opacity={at === 3 ? 0.35 : 1}><Tags x={168} y={24} labels={sets[at]} lit={index => at === 4 ? index === 0 : at !== 3} width={136} gap={34} /></g>
      {at === 3 && <Bubble x={106} y={58} text="How do you feel?" width={124} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PdsDial(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Around 1 in 4 have anxiety in 5 years", "Racing heart, tension, poor sleep", "Talking therapy, usually CBT, first", "Sudden new symptoms? Call 999", "Activity is safe unless told otherwise"];
  const sets = [["Another stroke?", "Getting about", "Money, family"], ["Racing heart", "Tense, on edge", "Poor sleep"], ["Talking therapy", "Usually CBT first"], ["New symptoms?", "Call 999"], ["Take medicines", "Keep active"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Anxiety too" title="Living with the fear of another stroke" label="Anxiety after stroke" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A worry dial that turns down as help and steps to lower the risk are added">
      <Gauge x={100} y={140} r={70} value={[0.85, 0.85, 0.6, 0.7, 0.3][at]} />
      <Tags x={196} y={40} labels={sets[at]} lit={index => at === 2 || at === 4 || (at === 3 && index === 1)} width={116} gap={36} />
      <Say y={190}>{caps[at]}</Say>
    </svg>} />;
}

function PdsTableTalk(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["In person, online or over the phone", "CBT helps challenge negative thoughts", "Your stroke team or GP can refer you", "A communication card can help"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Talking therapy" title="Talking it through, in every way" label="Talking therapy after stroke" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people facing each other across a table with a laptop, a phone and a communication card">
      <Person x={52} y={152} scale={1.3} /><Person x={268} y={152} scale={1.3} fill={at === 0 ? INK : SOFT} />
      <rect x="30" y="166" width="44" height="6" rx="3" fill={INK} /><rect x="246" y="166" width="44" height="6" rx="3" fill={INK} />
      <rect x="110" y="140" width="100" height="6" rx="3" fill={INK} /><path d="M160 146 V182" stroke={INK} strokeWidth="4" />
      <rect x="114" y="114" width="30" height="22" rx="3" fill={at === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" /><path d="M110 138 H148" stroke={INK} strokeWidth="3" />
      <rect x="158" y="118" width="13" height="20" rx="3" fill={at === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" />
      <rect x="180" y="120" width="26" height="18" rx="3" fill={at === 3 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={193} y={133} size={9.5} fill={at === 3 ? WHITE : TEXT}>Aa</W>
      {at === 1 && <Bubble x={160} y={56} text="Spot and challenge thoughts" width={170} />}
      {at === 2 && <><Box x={118} y={56} w={100} text="Stroke team" lit /><Box x={208} y={56} w={56} text="GP" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PdsCheckFirst(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["They may ease symptoms, not a cure", "Tell your doctor every medicine", "Up to 8 weeks to work fully", "Stop only with a plan from your doctor", "No St John's wort with sertraline"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Antidepressants" title="What to know before an antidepressant" label="Antidepressants after stroke" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A list of other medicines to check, beside the weeks an antidepressant takes">
      <rect x="18" y="34" width="150" height="140" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="68" y="26" width="50" height="16" rx="4" fill={INK} />
      <W x={93} y={64} size={10.5}>Other medicines</W>
      {["Anticoagulants", "Aspirin, ibuprofen", "Herbal remedies"].map((label, index) => { const y = 92 + index * 28; const ticked = at === 1 || (at === 4 && index === 2); return <g key={label}>
        <rect x="28" y={y - 9} width="16" height="16" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />
        {ticked && <path d={`M31 ${y} L35 ${y + 4} L42 ${y - 5}`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
        <W x={52} y={y + 4} size={10} anchor="start">{label}</W>
      </g>; })}
      {at === 0 && <><Pill x={248} y={86} /><W x={248} y={122} size={10.5}>Eases symptoms</W></>}
      {at === 1 && <Box x={248} y={100} w={100} text="Check first" lit />}
      {at === 2 && <>{Array.from({ length: 8 }, (_, index) => <rect key={index} x={186 + index * 15} y="90" width="13" height="26" rx="3" fill={INK} opacity={0.2 + index * 0.1} />)}<W x={186} y={134} size={9.5} anchor="start">week 1</W><W x={304} y={134} size={9.5} anchor="end">week 8</W></>}
      {at === 3 && <><path d="M190 72 H218 V96 H246 V120 H274 V144 H304" stroke={INK} strokeWidth="4" fill="none" /><W x={248} y={170} size={10.5}>Reduce gradually</W></>}
      {at === 4 && <>
        <path d="M208 104 C206 84, 224 78, 232 80 C232 96, 218 106, 208 104 Z" fill={SOFT} /><Cross x={220} y={92} />
        <path d="M276 78 H296 L292 98 H280 Z M286 98 V108 M280 108 H292" stroke={INK} strokeWidth="2.5" fill="none" strokeLinejoin="round" /><Cross x={286} y={92} />
        <W x={220} y={130} size={9.5}>St John's wort</W><W x={286} y={130} size={9.5}>Alcohol</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PdsSmallSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Being active can lift your mood", "A short walk or chair exercises", "Plan activities you might avoid", "With fatigue, start slowly, add rests", "Do something you enjoy, regularly"];
  const names = ["Move", "Walk", "Plan", "Pace", "Enjoy"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Small steps" title="Small, steady steps to lift mood" label="Activity and mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A staircase of small steps, climbed one at a time">
      {names.map((name, index) => { const top = 148 - index * 22; const lit = index <= at; return <g key={name}>
        <rect x={20 + index * 48} y={top} width="48" height={180 - top} fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={44 + index * 48} y={top + 16} size={9.5} fill={lit ? WHITE : TEXT}>{name}</W>
      </g>; })}
      <Person x={44 + at * 48} y={135 - at * 22} scale={0.8} fill={GOLD} />
      {at === 4 && <Sun x={290} y={40} r={11} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PdsCircle(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["People with similar experiences", "Around 400 stroke groups in the UK", "Online, or a weekly volunteer call", "Feeling nervous at first is common"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Peer support" title="People who have been there too" label="Peer support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A circle of people with one seat free, linked to calls and an online community">
      <circle cx="112" cy="104" r="62" fill="none" stroke={LINE} strokeWidth="2.5" strokeDasharray="4 6" />
      {[0, 1, 2, 4, 5].map(index => { const a = (-90 + index * 60) * Math.PI / 180; return <Person key={index} x={112 + 62 * Math.cos(a)} y={110 + 62 * Math.sin(a)} scale={0.75} fill={at === 1 ? SOFT : INK} />; })}
      <rect x="98" y="156" width="28" height="20" rx="6" fill={at === 3 ? GOLD : WHITE} stroke={at === 3 ? GOLD : LINE} strokeWidth="2.5" />
      {at === 1 && <><W x={112} y={102} size={13}>About 400</W><W x={112} y={120} size={10.5}>groups</W></>}
      {at === 2 && <>
        <path d="M174 104 C200 104, 214 84, 234 80 M174 104 C210 110, 230 130, 256 134" stroke={GOLD} strokeWidth="2.5" strokeDasharray="3 5" fill="none" />
        <Phone x={246} y={72} lit /><W x={246} y={106} size={10}>Calls</W>
        <rect x="258" y="120" width="40" height="26" rx="3" fill={INK} /><path d="M252 148 H304" stroke={INK} strokeWidth="3" /><W x={278} y={168} size={10}>Online</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PdsBatteryLoop(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Rest does not seem to fix fatigue", "Low mood and tiredness feed each other", "A GP can check medicines and more", "Pace, plan and prioritise", "Fatigue often gets better over time"];
  const bars = [1, 1, 1, 2, 3][at];
  const loop = at === 1 ? GOLD : INK;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fatigue and mood" title="Breaking the tiredness and mood loop" label="Fatigue and mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A loop between a drained battery and a low cloud, cut by pacing, planning and prioritising">
      <rect x="24" y="86" width="60" height="34" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="84" y="96" width="6" height="14" rx="2" fill={INK} />
      {[0, 1, 2, 3].map(index => index < bars && <rect key={index} x={29 + index * 13} y="91" width="10" height="24" rx="2" fill={INK} />)}
      <path d="M236 118 a14 14 0 0 1 4 -27 a18 18 0 0 1 33 -6 a14 14 0 0 1 21 14 a12 12 0 0 1 -3 19 Z" fill={SOFT} />
      <W x={54} y={140} size={10.5}>Fatigue</W><W x={268} y={140} size={10.5}>Low mood</W>
      <g opacity={at === 1 ? 1 : at === 3 ? 0.3 : 0.55}>
        <path d="M90 84 C120 40, 200 40, 232 84" stroke={loop} strokeWidth="3" fill="none" strokeDasharray={at === 3 ? "6 8" : undefined} /><path d="M232 84 L222.7 79.6 L230.7 73.8 Z" fill={loop} />
        <path d="M236 124 C200 168, 120 168, 88 124" stroke={loop} strokeWidth="3" fill="none" strokeDasharray={at === 3 ? "6 8" : undefined} /><path d="M88 124 L97.3 128.4 L89.3 134.2 Z" fill={loop} />
      </g>
      {at === 2 && <Box x={160} y={103} w={84} text="Ask a GP" lit />}
      {at === 3 && ["Pace", "Plan", "Prioritise"].map((label, index) => <Box key={label} x={160} y={74 + index * 29} w={84} h={24} text={label} lit />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PdsMilestones(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["You can still achieve new things", "Small milestones, one step at a time", "Hobbies can lift mood and confidence", "Work or volunteering can give purpose", "New, manageable roles at home"];
  const stones = [[40, 172], [104, 150], [168, 124], [232, 98], [290, 72]];
  const count = [1, 3, 3, 4, 5][at];
  const tone = (index: number) => ({ opacity: at === index ? 1 : 0.3 });
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Purpose" title="New roles after the old ones change" label="Finding purpose" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path of milestone stones leading to a hobby, volunteering and a family table">
      <path d="M40 172 Q72 168 104 150 T168 124 T232 98 T290 72" stroke={LINE} strokeWidth="4" fill="none" strokeDasharray="2 8" strokeLinecap="round" />
      {at === 0 && <circle cx="40" cy="172" r="18" fill="none" stroke={GOLD} strokeWidth="3" />}
      {stones.map(([x, y], index) => <ellipse key={index} cx={x} cy={y} rx="14" ry="8" fill={index < count ? INK : WHITE} stroke={INK} strokeWidth="2" />)}
      <g {...tone(2)}><path d="M136 82 H158 V102 H136 Z" fill={INK} /><path d="M158 86 L172 74 M136 86 C126 86, 126 98, 136 98" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" /><circle cx="177" cy="70" r="2.5" fill={GOLD} /><circle cx="181" cy="78" r="2.5" fill={GOLD} /></g>
      <g {...tone(3)}><path d="M220 62 L216 76 M232 62 L236 76" stroke={INK} strokeWidth="3" strokeLinecap="round" /><circle cx="226" cy="52" r="12" fill={INK} /><circle cx="226" cy="52" r="5" fill={GOLD} /></g>
      <g {...tone(4)}><circle cx="276" cy="18" r="5" fill={INK} /><circle cx="292" cy="18" r="5" fill={INK} /><rect x="266" y="28" width="36" height="5" rx="2" fill={INK} /><path d="M270 33 V48 M298 33 V48" stroke={INK} strokeWidth="3" /></g>
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PdsUmbrella(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Caring can be tiring and lonely", "Low, tearful or not sleeping? Get help", "Even 10 minutes of yoga or mindfulness", "Support them to do things themselves", "Carers groups and helplines can help"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="For carers" title="Carers need care too" label="Carers' mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A carer sheltered by an umbrella beside the person they care for, with a short break and a helpline">
      <Person x={116} y={164} scale={1.3} />
      <Person x={190} y={164} scale={1.3} fill={at === 3 ? INK : SOFT} />
      {at === 0 ? <path d="M92 86 a12 12 0 0 1 4 -22 a16 16 0 0 1 30 -4 a12 12 0 0 1 18 12 a10 10 0 0 1 -2 14 Z" fill={SOFT} />
        : <><path d="M74 98 A42 36 0 0 1 158 98 Z" fill={GOLD} /><path d="M116 98 V108" stroke={INK} strokeWidth="3" /></>}
      {at === 1 && <circle cx="116" cy="125" r="20" fill="none" stroke={GOLD} strokeWidth="3" />}
      <g opacity={at === 2 ? 1 : 0.35}><Clock x={272} y={62} r={18} hand={2} /><W x={272} y={98} size={10.5}>10 minutes</W></g>
      <g opacity={at === 4 ? 1 : 0.35}><Phone x={272} y={142} lit={at === 4} /><W x={272} y={178} size={10}>Helplines</W></g>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ---- Sleep problems ----------------------------------------------------------------------------------------

function InsHypnogram(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The body repairs and sorts the day", "REM for dreams; deep sleep restores", "Cycles of about 90 minutes each", "Pressure builds over about 15 hours", "Brief waking at night is normal"];
  const levels: [string, number][] = [["Awake", 40], ["REM", 64], ["Light", 92], ["Deep", 128]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="How sleep works" title="The night's hidden work, cycle by cycle" label="What happens in sleep" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A night of sleep stepping down into deep sleep and up into REM, cycle after cycle">
      {at === 1 && <><rect x="58" y="58" width="242" height="12" fill={GOLD} opacity=".35" /><rect x="58" y="122" width="242" height="12" fill={SOFT} opacity=".5" /></>}
      <g opacity={at === 3 ? 0.15 : 1}>
        {levels.map(([label, y]) => <g key={label}><path d={`M58 ${y} H300`} stroke={LINE} strokeWidth="1" strokeDasharray="2 4" /><W x={10} y={y + 3.5} size={9.5} anchor="start">{label}</W></g>)}
        <path d="M60 40 V92 H68 V128 H88 V92 H96 V64 H108 V92 H116 V128 H132 V92 H140 V64 H156 V92 H176 V64 H192 V40 H196 V92 H224 V64 H240 V92 H264 V64 H284 V40 H300" stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" />
      </g>
      {at === 2 && <><path d="M60 144 V150 H108 V144" stroke={GOLD} strokeWidth="3" fill="none" /><W x={84} y={166} size={10}>90 min</W></>}
      {at === 3 && <><path d="M60 164 C140 160, 220 124, 300 52" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" /><W x={150} y={112} size={10.5}>Sleep pressure builds</W></>}
      {at === 4 && <><circle cx="194" cy="40" r="6" fill={GOLD} /><W x={194} y={26} size={10}>Brief waking</W></>}
      <Moon x={24} y={172} r={9} /><Sun x={300} y={172} r={6} />
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function InsCauses(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Under 3 months is short-term", "Stress, anxiety and low mood", "Long-term pain and many conditions", "Some medicines, and the menopause", "Noise, heat, caffeine, alcohol"];
  const tiles = [{ x: 56, y: 40, t: "Worry" }, { x: 264, y: 40, t: "Pain" }, { x: 56, y: 104, t: "Medicines" }, { x: 264, y: 104, t: "Menopause" }, { x: 56, y: 168, t: "Noise" }, { x: 264, y: 168, t: "Caffeine" }];
  const on = [[], [0], [1], [2, 3], [4, 5]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The causes" title="What keeps you awake at night" label="Causes of insomnia" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bed in the middle, with the things that can keep you awake around it">
      <rect x="120" y="96" width="8" height="52" rx="3" fill={INK} />
      <rect x="150" y="114" width="52" height="12" rx="4" fill={SOFT} />
      <rect x="120" y="124" width="82" height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <ellipse cx="140" cy="119" rx="11" ry="5" fill={WHITE} stroke={INK} strokeWidth="2" />
      <path d="M124 138 V150 M198 138 V150" stroke={INK} strokeWidth="3" />
      <Moon x={180} y={84} r={11} />
     {on.map(index => { const tile = tiles[index]; const left = tile.x < 160; return <g key={`arrow${index}`}><path d={`M${left ? tile.x + 46 : tile.x - 46} ${tile.y} L${left ? 116 : 206} 128`} stroke={GOLD} strokeWidth="2.5" strokeDasharray="3 4" /><circle cx={left ? 116 : 206} cy="128" r="3.5" fill={GOLD} /></g>; })}
      {tiles.map((tile, index) => <Box key={tile.t} x={tile.x} y={tile.y} w={88} h={28} text={tile.t} lit={on.includes(index)} size={10} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function InsTwoSleepers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Insomnia often feels tired but wired", "Breathing that stops and starts", "A sleep clinic test, often at home", "A strong urge to move the legs", "Still exhausted? Talk to a doctor"];
  const both = at === 0 || at === 4;
  const sleeper = (y: number, lit: boolean) => <g opacity={lit ? 1 : 0.4}><path d={`M20 ${y + 12} H170`} stroke={LINE} strokeWidth="4" strokeLinecap="round" /><circle cx="36" cy={y} r="10" fill={INK} /><rect x="48" y={y - 8} width="112" height="16" rx="8" fill={SOFT} /></g>;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Something else?" title="When it is not just insomnia" label="Sleep apnoea and restless legs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two sleepers: one whose breathing stops and starts, one with restless legs">
      {sleeper(64, both || at === 1 || at === 2)}
      <path d="M186 58 q8 -12 16 0 t16 0 t16 0 H262 q8 -12 16 0 t16 0" stroke={INK} strokeWidth="3" fill="none" opacity={at === 1 || at === 2 ? 1 : 0.35} />
      <W x={243} y={92} size={10.5}>Sleep apnoea</W>
      {(at === 1 || at === 2) && <W x={58} y={44} size={12}>Zz</W>}
      {at === 2 && <Box x={243} y={26} w={100} h={22} text="Test at home" size={10} lit />}
      {sleeper(140, both || at === 3)}
      <path d="M168 132 q6 8 0 16 M176 128 q8 12 0 24 M184 124 q10 16 0 32" stroke={at === 3 ? GOLD : LINE} strokeWidth="3" fill="none" strokeLinecap="round" />
      <W x={246} y={146} size={10.5}>Restless legs</W>
      {at === 0 && <Box x={160} y={108} w={124} h={24} text="Tired but wired" size={10} lit />}
      {at === 4 && <Box x={160} y={108} w={110} h={24} text="Tell a doctor" size={10} lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function InsShoeSizes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Adults need 7 to 9 hours, on average", "Judge it by how you feel in the day", "Sleep needs vary, like shoe sizes", "Needs stay much the same with age", "Often under 6 hours? Look at habits"];
  const hx = (hours: number) => 40 + (hours - 5) * 52;
  const band = at === 0 || at === 3;
  const shoe = (x: number, k: number) => `M${x - 18 * k} 172 H${x + 20 * k} C${x + 22 * k} ${172 - 8 * k}, ${x + 10 * k} ${172 - 10 * k}, ${x + 2 * k} ${172 - 12 * k} L${x - 6 * k} ${172 - 24 * k} H${x - 18 * k} Z`;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="How much sleep" title="Your sleep, your size" label="How much sleep" credit="Illustration: Rehyn. 7 to 9 hours is an average, not a rule."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A scale of hours with 7 to 9 shaded, and shoes of different sizes">
      <rect x={hx(7)} y="34" width="104" height="44" rx="6" fill={band ? INK : SOFT} opacity={band ? 1 : 0.35} />
      <W x={196} y={60} size={11} fill={band ? WHITE : TEXT}>7 to 9 hours</W>
      <path d="M40 86 H300" stroke={INK} strokeWidth="2.5" />
      {[5, 6, 7, 8, 9, 10].map(hours => <g key={hours}><path d={`M${hx(hours)} 86 V92`} stroke={INK} strokeWidth="2" /><W x={hx(hours)} y={104} size={9.5}>{hours}</W></g>)}
      <W x={170} y={118} size={9.5}>hours of sleep</W>
      {at === 4 && <><path d={`M${hx(6)} 32 V90`} stroke={GOLD} strokeWidth="3" strokeDasharray="4 4" /><W x={hx(6)} y={24} size={10}>Under 6 hours</W></>}
      {(at === 0 || at === 2) && [[70, 0.7], [135, 0.85], [205, 1], [275, 1.15]].map(([x, k]) => <path key={x} d={shoe(x, k)} fill={at === 2 ? INK : SOFT} opacity={at === 2 ? 1 : 0.5} />)}
      {at === 1 && <><Sun x={160} y={146} /><W x={160} y={186} size={10.5}>Well, alert and rested</W></>}
      {at === 3 && <W x={160} y={152} size={10.5}>Sleep quality often declines</W>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function InsSixWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The first treatment to try", "Thoughts and habits around sleep", "In person, online or an app", "Start with your GP", "Sleep may get worse before better"];
  const weeksLit = at === 2 || at === 4;
  const diary = at === 1 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme" kicker="CBT for insomnia" title="The treatment that is not a pill" label="CBT for insomnia" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Six weeks of sessions, a sleep diary, an app, and tangled thoughts being straightened">
      {Array.from({ length: 6 }, (_, index) => <g key={index}><rect x={14 + index * 50} y="22" width="44" height="30" rx="6" fill={weeksLit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={36 + index * 50} y={41} size={9.5} fill={weeksLit ? WHITE : TEXT}>Week {index + 1}</W></g>)}
      <g opacity={diary ? 1 : 0.5}>
        <rect x="22" y="74" width="80" height="94" rx="6" fill={WHITE} stroke={diary ? GOLD : INK} strokeWidth="2.5" />
        <W x={62} y={92} size={10}>Sleep diary</W>
        {[106, 120, 134, 148].map(y => <path key={y} d={`M32 ${y} H92`} stroke={LINE} strokeWidth="2" />)}
      </g>
      <Person x={160} y={164} scale={1.1} />
      {at === 3 ? <Box x={160} y={88} w={92} text="Your GP" lit />
        : at === 1 ? <path d="M140 84 H180 M140 96 H170" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        : <path d="M138 92 c10 -24 34 18 44 -4 s-34 -18 -26 8 s30 4 24 -14" stroke={SOFT} strokeWidth="3" fill="none" strokeLinecap="round" />}
      <g opacity={at === 2 ? 1 : 0.5}>
        <rect x="226" y="72" width="46" height="84" rx="9" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M236 92 H262 M236 104 H262 M236 116 H254" stroke={at === 2 ? WHITE : LINE} strokeWidth="2.5" strokeLinecap="round" />
        <W x={249} y={174} size={10}>App</W>
      </g>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function InsWindowClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Less time awake in bed", "Find the time you need in bed", "Move bedtime 15 minutes each week", "Same wake-up time, every day", "Check first; never drive if sleepy"];
  const bed = [300, 345, 337.5, 337.5, 337.5][at];
  const pt = (deg: number, r: number) => { const a = deg * Math.PI / 180; return [100 + r * Math.sin(a), 108 - r * Math.cos(a)]; };
  const [bx, by] = pt(bed, 66), [wx, wy] = pt(210, 66), mid = pt((bed + 570) / 2, 40);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The sleep window" title="Less time in bed, better sleep" label="The sleep window" credit="Illustration: Rehyn. Check with a doctor before trying it."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock with a shaded window from bedtime to a fixed wake-up time">
      <circle cx="100" cy="108" r="74" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d={`M100 108 L${bx} ${by} A66 66 0 1 1 ${wx} ${wy} Z`} fill={SOFT} opacity=".75" />
      {Array.from({ length: 12 }, (_, index) => { const [x1, y1] = pt(index * 30, 70); const [x2, y2] = pt(index * 30, 62); return <path key={index} d={`M${x1} ${y1} L${x2} ${y2}`} stroke={INK} strokeWidth="2" />; })}
      <W x={mid[0]} y={mid[1] + 4} size={10.5}>In bed</W>
      <Box x={250} y={60} w={96} text="Bedtime" lit={at === 2} />
      <Box x={250} y={150} w={96} text="Wake-up" lit={at === 3} />
      {at === 2 && <W x={250} y={92} size={10.5}>15 minutes</W>}
      {at === 3 && <W x={250} y={182} size={10.5}>Every day</W>}
      {at === 4 && <Box x={250} y={105} w={96} text="Works slowly" size={10} lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function InsPillWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Rarely prescribed for insomnia now", "Zopiclone: usually 4 weeks at most", "Melatonin: mainly for 55 and over", "A newer one for long-lasting insomnia", "Pharmacy aids: 1 to 2 weeks at most"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sleeping tablets" title="Short courses, careful stops" label="Sleeping tablets" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week's pill organiser, and how long each kind of sleeping tablet is used">
      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}>
        <rect x={22 + index * 40} y="28" width="36" height="36" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" />
        {(at === 1 || at === 2) && <circle cx={40 + index * 40} cy="46" r="7" fill={at === 2 ? GOLD : INK} />}
        <W x={40 + index * 40} y={80} size={9.5}>{day}</W>
      </g>)}
      {at === 0 && <W x={160} y={136} size={11.5}>Days, or weeks at most</W>}
      {at === 1 && <>{Array.from({ length: 4 }, (_, index) => <rect key={index} x={74 + index * 44} y="106" width="40" height="24" rx="5" fill={INK} />)}<W x={160} y={152} size={10.5}>4 weeks at most</W></>}
      {at === 2 && <><Clock x={104} y={132} r={18} hand={1} /><W x={210} y={136} size={10.5}>1 to 2 hours to work</W></>}
      {at === 3 && <Box x={160} y={132} w={200} text="Serious, long-lasting insomnia" lit />}
      {at === 4 && <>
        <path d="M80 146 V134 L92 120 H124 L136 134 V146 Z" fill={INK} /><circle cx="92" cy="148" r="6" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="124" cy="148" r="6" fill={WHITE} stroke={INK} strokeWidth="3" />
        <W x={108} y={110} size={10}>Drowsy?</W><W x={214} y={140} size={10.5}>1 to 2 weeks at most</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function InsPainBed(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Pain and poor sleep feed each other", "Pillows, a warm bath, gentle stretches", "Ask about timing your pain relief", "Same bedtime, regular waking, no naps", "Waking in pain? See a GP or physio"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pain at night" title="Breaking the pain and sleep cycle" label="Sleeping with pain" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person lying in bed, with pain and poor sleep feeding each other, and what helps">
      <g opacity={at === 0 ? 1 : 0.3}>
        <Box x={86} y={40} w={70} text="Pain" lit={at === 0} /><Box x={214} y={40} w={96} text="Poor sleep" lit={at === 0} />
        <path d="M126 34 H160 M154 29 L161 34 L154 39 M160 46 H126 M132 41 L125 46 L132 51" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {at === 4 && <Box x={160} y={84} w={110} text="GP or physio" lit />}
      <rect x="30" y="98" width="8" height="62" rx="3" fill={INK} />
      <ellipse cx="62" cy="126" rx="18" ry="5" fill={WHITE} stroke={INK} strokeWidth="2" />
      <circle cx="62" cy="112" r="10" fill={INK} />
      <path d="M74 106 H220 a10 10 0 0 1 0 20 H74 Z" fill={SOFT} />
      {at === 1 && <ellipse cx="178" cy="116" rx="9" ry="14" fill={WHITE} stroke={GOLD} strokeWidth="3" />}
      <path d="M232 82 L224 96 H232 L226 108" stroke={GOLD} strokeWidth="3" fill="none" strokeLinejoin="round" strokeLinecap="round" opacity={at === 0 || at === 4 ? 1 : 0.25} />
      <rect x="38" y="130" width="212" height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M44 144 V168 M244 144 V168" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <rect x="262" y="132" width="44" height="42" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <g opacity={at === 2 || at === 3 ? 1 : 0.4}><Clock x={284} y={114} r={14} hand={at === 3 ? 0 : 2} /></g>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function InsBedroom(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Relax for at least an hour before bed", "Screens off an hour before bed", "Caffeine: stop at least 6 hours before", "Cool, dark and quiet: about 16 to 18°C", "Keep the bedroom for sleep"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Evenings" title="Setting the scene for sleep" label="Evenings and the bedroom" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bedroom at night: a window with the moon, a bedside table and a bed kept for sleep">
      <rect x="20" y="24" width="70" height="60" rx="4" fill={at === 3 ? INK : SOFT} stroke={INK} strokeWidth="2.5" />
      <Moon x={52} y={54} r={13} fill={WHITE} />
      <g opacity={at === 3 ? 1 : 0.35}><rect x="110" y="26" width="12" height="50" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="113" y="52" width="6" height="26" fill={INK} /><circle cx="116" cy="82" r="9" fill={INK} /></g>
      {at === 3 && <W x={132} y={56} size={10.5} anchor="start">16 to 18°C</W>}
      {at === 4 && <><rect x="214" y="34" width="46" height="30" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M206 68 H268" stroke={INK} strokeWidth="3" /><Cross x={237} y={50} s={16} /></>}
      <rect x="84" y="134" width="56" height="42" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <g opacity={at === 1 ? 1 : 0.5}><rect x="92" y="108" width="14" height="24" rx="3" fill={INK} /></g>
      {at === 1 && <Cross x={99} y={120} s={11} />}
      <g opacity={at === 2 ? 1 : 0.5}><Cup x={124} y={120} /></g>
      {at === 2 && <Cross x={124} y={120} s={12} />}
      <rect x="292" y="102" width="10" height="72" rx="3" fill={INK} />
      <ellipse cx="276" cy="124" rx="14" ry="6" fill={WHITE} stroke={INK} strokeWidth="2" />
      <rect x="150" y="130" width="146" height="16" rx="4" fill={at === 4 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M156 146 V172" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <path d="M194 126 Q205 118 216 124 Q227 118 238 126 V130 Q227 124 216 130 Q205 124 194 130 Z" fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function InsNapDip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Naps use up night-time sleepiness", "Early afternoon, 20 to 30 minutes", "Light, fresh air and a short walk", "With illness, short naps before 4pm", "Morning daylight helps the body clock"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Naps" title="Getting through the afternoon dip" label="Naps and the day" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A line of energy through the day, dipping in the early afternoon">
      {at !== 4 && <W x={30} y={50} size={9.5} anchor="start">Energy</W>}
      <path d="M30 150 H290" stroke={LINE} strokeWidth="2.5" />
      <path d="M30 70 C80 64, 110 70, 138 96 C150 108, 170 108, 181 96 C200 74, 240 70, 290 90" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {at === 0 && <Box x={226} y={124} w={130} text="Less sleepy at night" size={10} />}
      {(at === 1 || at === 3) && <rect x="140" y="122" width="12" height="26" rx="3" fill={INK} />}
      {at === 1 && <><W x={158} y={140} size={10} anchor="start">20 to 30 min</W><W x={138} y={166} size={10}>1pm</W><W x={181} y={166} size={10}>3pm</W></>}
      {at === 2 && <><Sun x={226} y={36} r={11} /><Person x={110} y={136} scale={0.9} /></>}
      {at === 3 && <><path d="M203 60 V150" stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 5" /><W x={203} y={52} size={10}>Before 4pm</W><W x={203} y={166} size={10}>4pm</W></>}
      {at === 4 && <><Sun x={40} y={30} r={9} /><W x={66} y={34} size={10} anchor="start">Morning light</W></>}
      <Say y={200}>{caps[at]}</Say>
    </svg>} />;
}

function InsWorryPad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["At night, more time to think", "10 or 15 minutes of worry time", "Tense, relax; breathe slowly", "A thought, not a fact: let it drift", "Very low or anxious? Speak to a GP"];
  const shift = at === 3 ? 72 : 0;
  const fade = at === 0 ? [1, 1, 1] : at === 3 ? [0.6, 0.4, 0.25] : [0.35, 0.35, 0.35];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Night-time worry" title="Turning down the night-time worries" label="Night-time worry" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head on a pillow with thought clouds drifting away, and a notepad by the bed">
      {[[112, 112, 14], [160, 82, 18], [214, 54, 22]].map(([x, y, size], index) => <Cloud key={index} x={x + shift} y={y} s={size} opacity={fade[index]} />)}
      {at === 0 && <Cloud x={264} y={36} s={16} />}
      <ellipse cx="70" cy="172" rx="42" ry="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <circle cx="70" cy="152" r="16" fill={INK} />
      {at === 2 && <circle cx="70" cy="152" r="28" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-v2-breathe is-slow"} />}
      {at === 1 && <g>
        <W x={263} y={100} size={10}>Write it down</W>
        <rect x="232" y="108" width="62" height="72" rx="5" fill={WHITE} stroke={GOLD} strokeWidth="3" />
        {[124, 138, 152, 166].map(y => <path key={y} d={`M242 ${y} H284`} stroke={INK} strokeWidth="2" />)}
      </g>}
      {at === 4 && <Box x={250} y={140} w={104} text="Speak to a GP" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function InsDoubleBed(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A bed at least 5ft wide", "Side sleeping; earplugs for a partner", "Gasping? Bring your partner to the GP", "Gently guide a sleepwalker to bed", "Talk it through and find shared fixes"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Sharing a bed" title="Two sleepers, one good night" label="Sharing a bed" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A double bed from above, with two sleepers and what helps them both">
      {at === 0 && <><path d="M96 26 V20 H224 V26" stroke={GOLD} strokeWidth="3" fill="none" /><W x={160} y={14} size={10.5}>5ft</W></>}
      <rect x="96" y="34" width="128" height="150" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="104" y="44" width="52" height="20" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="164" y="44" width="52" height="20" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" />
      <rect x="96" y="96" width="128" height="88" rx="10" fill={SOFT} opacity=".45" />
      <circle cx="130" cy="74" r="12" fill={INK} /><circle cx="190" cy="74" r="12" fill={at === 2 ? INK : SOFT} />
      {(at === 1 || at === 2) && <W x={78} y={66} size={12}>Zz</W>}
      {at === 1 && <><circle cx="177" cy="74" r="3.5" fill={GOLD} /><circle cx="203" cy="74" r="3.5" fill={GOLD} /></>}
      {at === 2 && <><Box x={50} y={120} w={84} text="Gasping?" size={10} lit /><Box x={272} y={120} w={64} text="GP" lit /></>}
      {at === 3 && <><Person x={48} y={162} scale={0.8} fill={SOFT} /><Arrow d="M66 150 C80 136, 86 126, 92 118" head="M84 118 L93 117 L92 126" /></>}
      {at === 4 && <Bubble x={268} y={60} text="Talk it over" width={92} />}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

export function MindPieceView({ piece, ...props }: { piece: MindPiece } & PieceProps) {
  switch (piece) {
    case "anx-alarm": return <Alarm {...props} />;
    case "anx-panic-wave": return <PanicWave {...props} />;
    case "anx-check-loop": return <CheckLoop {...props} />;
    case "anx-doors": return <Doors {...props} />;
    case "anx-triangle": return <Triangle {...props} />;
    case "anx-breath": return <Breath {...props} />;
    case "anx-weeks": return <Weeks {...props} />;
    case "anx-worry-clock": return <WorryClock {...props} />;
    case "anx-day-line": return <DayLine {...props} />;
    case "anx-ladder": return <Ladder {...props} />;
    case "anx-chairs": return <Chairs {...props} />;
    case "anx-week-move": return <WeekMove {...props} />;
    case "dep-two-weeks": return <DepTwoWeeks {...props} />;
    case "dep-overlap": return <DepOverlap {...props} />;
    case "dep-body-map": return <DepBodyMap {...props} />;
    case "dep-signposts": return <DepSignposts {...props} />;
    case "dep-stepping-stones": return <DepStones {...props} />;
    case "dep-week-line": return <DepWeekLine {...props} />;
    case "dep-planner": return <DepPlanner {...props} />;
    case "dep-sun-arc": return <DepSunArc {...props} />;
    case "dep-bench": return <DepBench {...props} />;
    case "dep-stations": return <DepStations {...props} />;
    case "dep-wave-flags": return <DepWave {...props} />;
    case "dep-care-trio": return <DepCareTrio {...props} />;
    case "pds-halves": return <PdsHalves {...props} />;
    case "pds-spike-wave": return <PdsSpikeWave {...props} />;
    case "pds-signs-tags": return <PdsSigns {...props} />;
    case "pds-dial": return <PdsDial {...props} />;
    case "pds-table-talk": return <PdsTableTalk {...props} />;
    case "pds-check-first": return <PdsCheckFirst {...props} />;
    case "pds-small-steps": return <PdsSmallSteps {...props} />;
    case "pds-circle-chairs": return <PdsCircle {...props} />;
    case "pds-battery-loop": return <PdsBatteryLoop {...props} />;
    case "pds-milestones": return <PdsMilestones {...props} />;
    case "pds-umbrella": return <PdsUmbrella {...props} />;
    case "ins-hypnogram": return <InsHypnogram {...props} />;
    case "ins-cause-tiles": return <InsCauses {...props} />;
    case "ins-two-sleepers": return <InsTwoSleepers {...props} />;
    case "ins-shoe-sizes": return <InsShoeSizes {...props} />;
    case "ins-six-weeks": return <InsSixWeeks {...props} />;
    case "ins-window-clock": return <InsWindowClock {...props} />;
    case "ins-pill-week": return <InsPillWeek {...props} />;
    case "ins-pain-bed": return <InsPainBed {...props} />;
    case "ins-bedroom": return <InsBedroom {...props} />;
    case "ins-nap-dip": return <InsNapDip {...props} />;
    case "ins-worry-pad": return <InsWorryPad {...props} />;
    case "ins-double-bed": return <InsDoubleBed {...props} />;
  }
}

export { Bubble, Clock, Tags };
