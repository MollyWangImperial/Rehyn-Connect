import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { NEURO_PIECES, type NeuroPiece } from "@/content/neuro-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The ADHD in adults and Autism in adults pages' own pieces (content/neuro-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Mind & mood pieces. Each is steered by the card's sections; pictures
// show ideas, calmly, never anyone's own body or results. ADHD and autism are shown as differences, with strengths.

export const isNeuroPiece = (piece: NewsPiece): piece is NeuroPiece => (NEURO_PIECES as readonly string[]).includes(piece);

const medsCredit = "Illustration: Rehyn. Talk to your doctor before changing a medicine.";
const helpCredit = "Illustration: Rehyn. If you need help now, call 111, Samaritans or 999.";
const pathCredit = "Illustration: Rehyn. A picture of the idea; every path is different.";

// ==== Shared drawing helpers ================================================================================

/** The caption under a picture. */
const Say = ({ children }: { children: ReactNode }) => <W x={160} y={206} size={11}>{children}</W>;
/** A labelled rounded box centred on (x, y); `lit` boxes are filled, `dashed` ones outlined. */
const Box = ({ x, y, w, text, lit = false, dashed = false, h = 24, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; dashed?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" strokeDasharray={dashed ? "5 4" : undefined} />
    <W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** Boxes one under another, centred on x, from y, `gap` apart. */
const Stack = ({ x, y, w, labels, lit = () => false, gap = 32, h = 24, size = 10.5, dashed = false }: { x: number; y: number; w: number; labels: string[]; lit?: (index: number) => boolean; gap?: number; h?: number; size?: number; dashed?: boolean }) =>
  <g>{labels.map((label, index) => <Box key={label} x={x} y={y + index * gap} w={w} h={h} size={size} text={label} lit={lit(index)} dashed={dashed} />)}</g>;
/** Boxes side by side across the picture at height y. */
const Row = ({ y, labels, lit = () => false, size = 10.5, from = 20, to = 300 }: { y: number; labels: string[]; lit?: (index: number) => boolean; size?: number; from?: number; to?: number }) => {
  const step = (to - from) / labels.length;
  return <g>{labels.map((label, index) => <Box key={label} x={from + step * (index + 0.5)} y={y} w={step - 10} size={size} text={label} lit={lit(index)} />)}</g>;
};
/** Lines of centred text from (x, y), `gap` apart. */
const Lines = ({ x, y, lines, gap = 16, size = 10.5 }: { x: number; y: number; lines: string[]; gap?: number; size?: number }) =>
  <g>{lines.map((line, index) => <W key={line} x={x} y={y + index * gap} size={size}>{line}</W>)}</g>;
const Arrow = ({ d, head, stroke = GOLD }: { d: string; head: string; stroke?: string }) =>
  <g stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 10 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
/** A gold tick. */
const Tick = ({ x, y, s = 10 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y} L${x - s * 0.3} ${y + s * 0.7} L${x + s} ${y - s * 0.8}`} stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
/** A gold ring round what the section is about. */
const Ring = ({ x, y, r, still }: { x: number; y: number; r: number; still: boolean }) =>
  <circle cx={x} cy={y} r={r} fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />;
/** A speech bubble centred on (x, y) with its tail pointing down towards `side`. */
const Bubble = ({ x, y, text, w, side = "left", faded = false }: { x: number; y: number; text: string; w: number; side?: "left" | "right"; faded?: boolean }) => {
  const tail = side === "left" ? `M${x - w / 2 + 16} ${y + 14} l-10 14 l22 -14` : `M${x + w / 2 - 16} ${y + 14} l10 14 l-22 -14`;
  return <g opacity={faded ? 0.4 : 1}>
    <rect x={x - w / 2} y={y - 15} width={w} height="30" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" strokeDasharray={faded ? "5 4" : undefined} />
    <path d={tail} fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <W x={x} y={y + 4} size={10.5}>{text}</W>
  </g>;
};
/** A mobile phone centred on (x, y), with optional words on its screen. */
const Phone = ({ x, y, w = 44, h = 70, text, size = 12 }: { x: number; y: number; w?: number; h?: number; text?: string; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - w / 2 + 4} y={y - h / 2 + 7} width={w - 8} height={h - 22} rx="2" fill={TINT} /><circle cx={x} cy={y + h / 2 - 7} r="3" fill={INK} />
    {text && <W x={x} y={y + size * 0.1} size={size} fill={INK}>{text}</W>}</g>;
/** Headphones centred on (x, y). */
const Headphones = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}><path d="M-18 4 A18 18 0 0 1 18 4" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
    <rect x="-23" y="0" width="10" height="18" rx="4" fill={INK} /><rect x="13" y="0" width="10" height="18" rx="4" fill={INK} /></g>;
/** A sheet of written notes, (x, y) its top left. */
const Paper = ({ x, y, w = 28, h = 34, lit = false }: { x: number; y: number; w?: number; h?: number; lit?: boolean }) =>
  <g><rect x={x} y={y} width={w} height={h} rx="3" fill={WHITE} stroke={lit ? GOLD : INK} strokeWidth={lit ? 3 : 2} />
    {[0, 1, 2, 3].filter(row => 8 + row * 7 < h - 4).map(row => <path key={row} d={`M${x + 5} ${y + 8 + row * 7} H${x + w - 5}`} stroke={SOFT} strokeWidth="2" strokeLinecap="round" />)}</g>;

// ==== ADHD in adults =========================================================================================

function AdhdThreeCircles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const circles = [{ x: 84, y: 76 }, { x: 136, y: 76 }, { x: 110, y: 120 }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A different way of being wired" label="What ADHD is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three overlapping circles for inattention, hyperactivity and impulsivity, and what each section adds">
      {at === 1 && <ellipse cx="110" cy="100" rx="78" ry="66" fill="none" stroke={SOFT} strokeWidth="2.5" strokeDasharray="6 6" />}
      {circles.map((circle, index) => <circle key={index} cx={circle.x} cy={circle.y} r="40" fill={INK} fillOpacity={at === 0 || at === 4 ? 0.18 : 0.08} stroke={at === 4 ? GOLD : INK} strokeWidth="3" />)}
      {at === 4 && <Ring x={110} y={92} r={8} still={still} />}
      <W x={62} y={26} size={10.5}>Inattention</W><W x={158} y={26} size={10.5}>Hyperactivity</W><W x={110} y={182} size={10.5}>Impulsivity</W>
      {at === 0 && <><W x={256} y={92} size={24} fill={INK}>3 to 4</W><Lines x={256} y={114} lines={["in every 100", "adults"]} /></>}
      {at === 1 && <Lines x={256} y={80} lines={["Neurodiversity:", "the many different", "ways brains work"]} />}
      {at === 2 && <Stack x={256} y={60} w={108} labels={["Genes", "In the womb", "Born early"]} lit={index => index === 0} />}
      {at === 3 && <><Box x={256} y={50} w={104} text="Childhood" /><Arrow d="M256 66 V82" head="M250 76 L256 83 L262 76" /><Box x={256} y={98} w={104} text="Adulthood" lit /><Box x={256} y={146} w={112} text="Valid diagnosis" dashed /></>}
      {at === 4 && <Stack x={256} y={60} w={112} labels={["Hyperfocus", "In a crisis", "Creative ideas"]} lit={() => true} />}
      <Say>{["Focus, restlessness and impulsivity", "A difference in how the brain develops", "Genes and environment, often together", "Starts in childhood, a valid diagnosis", "A difference, with strengths too"][at]}</Say>
    </svg>} />;
}

function AdhdInnerBuzz(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const tags = [
    ["Running about", "Inner restlessness"],
    ["Hard to focus", "Losing things", "Fidgeting", "Interrupting"],
    ["Work", "Living independently", "Money", "Parenthood"],
    ["Often inattentive", "Harder to recognise", "Diagnosed later"],
    ["Missed appointments", "Unfinished projects", "Managing money", "Low self-esteem"],
  ][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="In adults" title="When restlessness turns inward" label="ADHD in adults" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An adult whose restlessness is felt inside, with signs and demands alongside">
      <W x={46} y={30} size={10}>Childhood</W><W x={124} y={30} size={10}>Adulthood</W>
      <Arrow d="M22 42 H146" head="M140 36 L147 42 L140 48" stroke={at === 0 ? GOLD : LINE} />
      <Person x={84} y={160} scale={1.6} fill={at === 3 ? SOFT : INK} />
      {(at === 0 || at === 1) && <g className={still ? undefined : "lib-why-pulse"} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M44 118 l6 -6 l6 6 l6 -6" /><path d="M108 118 l6 -6 l6 6 l6 -6" /><path d="M48 150 l6 -6 l6 6" /><path d="M108 150 l6 -6 l6 6" />
      </g>}
      <Stack x={240} y={tags.length > 3 ? 56 : 72} w={136} labels={tags} lit={index => at === 0 ? index === 1 : at === 1} />
      <Say>{["Restlessness may turn inward in adults", "Signs in at least two areas of life", "More demands, often less support", "Recognised less often in women", "A GP can help you find support"][at]}</Say>
    </svg>} />;
}

function AdhdPathStops(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stops = ["GP", "Waiting", "Specialist", "Support"];
  const xs = [40, 120, 200, 280];
  const lit = [0, 2, 1, -1, 3][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Getting assessed" title="From a GP chat to a specialist answer" label="Getting assessed" credit={pathCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from the GP, through waiting, to a specialist and support, with a private route alongside">
      <path d="M40 112 H280" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      <g stroke={at === 3 ? GOLD : LINE} strokeWidth="3" fill="none" strokeDasharray="6 5"><path d="M40 134 C40 166, 60 170, 82 170" /><path d="M158 170 C180 170, 200 166, 200 134" /></g>
      {stops.map((stop, index) => { const on = index === lit; const x = xs[index]; return <g key={stop}>
        <circle cx={x} cy="112" r="22" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        {index === 0 && <path d={`M${x} 102 V122 M${x - 10} 112 H${x + 10}`} stroke={on ? WHITE : INK} strokeWidth="4" strokeLinecap="round" />}
        {index === 1 && <path d={`M${x - 8} 100 H${x + 8} L${x - 8} 124 H${x + 8} Z`} fill="none" stroke={on ? WHITE : INK} strokeWidth="2.5" strokeLinejoin="round" />}
        {index === 2 && <Clock x={x} y={112} r={12} hand={2.2} />}
        {index === 3 && <HeartShape x={x} y={113} size={24} fill={on ? WHITE : TINT} stroke={on ? WHITE : INK} width={2} />}
        <W x={x} y={78} size={10.5} fill={on ? INK : TEXT}>{stop}</W>
      </g>; })}
      <Box x={120} y={170} w={76} text="Private" lit={at === 3} />
      <Say>{["Start with an open talk with a GP", "A 45 to 90 minute discussion", "Waits vary; Right to Choose in England", "Private? Check the NHS will accept it", "Many feel relief at an explanation"][at]}</Say>
    </svg>} />;
}

function AdhdBubbleCluster(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const items = [{ t: "Anxiety", x: 70, y: 40 }, { t: "Depression", x: 250, y: 40 }, { t: "Autism", x: 56, y: 100 }, { t: "Dyslexia", x: 264, y: 100 }, { t: "Tics", x: 70, y: 160 }, { t: "Sleep disorders", x: 250, y: 160 }];
  const lit = [[0, 1, 2, 3, 4, 5], [2, 3, 4], [0, 1], [0, 1], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Other conditions" title="Rarely just one thing" label="ADHD alongside other conditions" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="ADHD in the middle, linked to anxiety, depression, autism, dyslexia, tics and sleep disorders">
      {items.map(item => <path key={item.t} d={`M160 100 L${item.x} ${item.y}`} stroke={LINE} strokeWidth="2.5" />)}
      {items.map((item, index) => <Box key={item.t} x={item.x} y={item.y} w={item.t.length > 10 ? 104 : 86} h={26} text={item.t} lit={lit.includes(index)} />)}
      <circle cx="160" cy="100" r="30" fill={at === 3 ? WHITE : TINT} stroke={INK} strokeWidth="3" strokeDasharray={at === 3 ? "6 5" : undefined} />
      <W x={160} y={105} size={13} fill={at === 3 ? SOFT : INK}>ADHD</W>
      {at === 4 && <Ring x={160} y={100} r={38} still={still} />}
      <Say>{["Other conditions are more common", "Often alongside autism or dyslexia", "They can make ADHD symptoms worse", "ADHD underneath can be missed", "Tell someone: help is available now"][at]}</Say>
    </svg>} />;
}

function AdhdDoseSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots = [[34, 158], [70, 134], [106, 110], [142, 86]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Slow start, steady steps" label="ADHD medicines" credit={medsCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A dose climbing slowly in steps, with the medicine types and how to take them safely">
      <Pill x={52} y={70} />
      <path d="M16 168 H52 V144 H88 V120 H124 V96 H160" stroke={INK} strokeWidth="4" fill="none" strokeLinejoin="round" />
      {at === 2 && spots.map(([x, y], index) => <circle key={index} cx={x} cy={y} r="7" fill={index === 3 ? GOLD : SOFT} />)}
      {at === 4 && <Arrow d="M148 80 C120 96, 64 128, 30 150" head="M38 151 L29 151 L33 143" />}
      {at === 0 && <><Box x={248} y={70} w={128} text="Changes first" lit /><Arrow d="M248 86 V104" head="M242 98 L248 105 L254 98" /><Box x={248} y={122} w={128} text="Medicine if needed" /></>}
      {at === 1 && <Stack x={248} y={56} w={128} labels={["Lisdexamfetamine", "Methylphenidate", "Dexamfetamine"]} lit={() => true} />}
      {at === 2 && <><Clock x={248} y={74} r={26} hand={1.6} /><W x={248} y={124} size={10.5}>30 to 60 minutes</W><W x={248} y={140} size={10}>once the dose is right</W></>}
      {at === 3 && <><Stack x={248} y={64} w={124} labels={["Atomoxetine", "Guanfacine"]} lit={() => true} /><W x={248} y={132} size={10.5}>Slower to start</W></>}
      {at === 4 && <Stack x={248} y={56} w={128} labels={["Reduce gradually", "Avoid alcohol", "Prescribed only"]} />}
      <Say>{["Not everyone needs or wants medicine", "Stimulants are usually offered first", "Start low, increase gradually", "Non-stimulants take longer to work", "Do not stop suddenly; talk to a doctor"][at]}</Say>
    </svg>} />;
}

function AdhdToolbox(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const cards = [{ t: "CBT", x: 85, y: 58 }, { t: "Mindfulness", x: 235, y: 58 }, { t: "Coaching", x: 85, y: 122 }, { t: "Occupational therapy", x: 235, y: 122 }];
  const lit = [[0], [1], [2, 3], [0], [0]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Therapy" title="Skills to work with your brain" label="CBT and coaching" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four kinds of help: CBT, mindfulness, coaching and occupational therapy">
      {cards.map((card, index) => { const on = lit.includes(index); return <g key={card.t} opacity={on ? 1 : 0.5}>
        <rect x={card.x - 65} y={card.y - 26} width="130" height="52" rx="10" fill={on ? TINT : WHITE} stroke={on ? GOLD : INK} strokeWidth={on ? 3 : 2} />
        {index === 0 && <Paper x={card.x - 8} y={card.y - 20} w={16} h={20} />}
        {index === 1 && <path d={`M${card.x - 10} ${card.y - 4} C${card.x - 10} ${card.y - 16}, ${card.x + 4} ${card.y - 20}, ${card.x + 10} ${card.y - 20} C${card.x + 10} ${card.y - 8}, ${card.x} ${card.y - 4}, ${card.x - 10} ${card.y - 4} Z`} fill={SOFT} stroke={INK} strokeWidth="2" />}
        {index === 2 && <><Person x={card.x - 8} y={card.y - 6} scale={0.45} /><Person x={card.x + 8} y={card.y - 6} scale={0.45} fill={SOFT} /></>}
        {index === 3 && <Clock x={card.x} y={card.y - 10} r={9} hand={1} />}
        <W x={card.x} y={card.y + 16} size={10.5}>{card.t}</W>
      </g>; })}
      {at === 3 && <W x={160} y={176} size={10.5}>Free on the NHS</W>}
      {at === 4 && Array.from({ length: 15 }, (_, index) => <circle key={index} cx={48 + index * 16} cy="174" r="5" fill={index < 5 ? INK : TINT} stroke={INK} strokeWidth="1.5" />)}
      <Say>{["CBT: organising, time and feelings", "Mindfulness, or gentle yoga or walking", "Help with time and daily life skills", "Find a therapist who knows ADHD", "Usually 5 to 15 sessions"][at]}</Say>
    </svg>} />;
}

function AdhdDeskReminders(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const labels = ["Headphones", "Reminders", "Phone off", "Bills", "Sleep"];
  const xs = [40, 110, 180, 236, 286];
  const fade = (index: number) => (index === at ? 1 : 0.35);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Organising" title="Let the reminders do the remembering" label="Tools for organising life" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Headphones, a fridge of reminder notes, a phone switched off, bills and a regular bedtime">
      <g opacity={fade(0)}><Headphones x={40} y={92} /></g>
      <g opacity={fade(1)}>
        <rect x="84" y="36" width="52" height="120" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M84 76 H136 M128 50 V64 M128 88 V104" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        {[[90, 84], [108, 96], [92, 114], [110, 130]].map(([x, y]) => <g key={`${x}${y}`}><rect x={x} y={y} width="16" height="14" rx="2" fill={TINT} stroke={INK} strokeWidth="1.5" /><path d={`M${x + 4} ${y} h8`} stroke={GOLD} strokeWidth="3" /></g>)}
      </g>
      <g opacity={fade(2)}><Phone x={180} y={98} w={30} h={48} /><Cross x={180} y={92} s={8} /></g>
      <g opacity={fade(3)}><rect x="216" y="84" width="40" height="28" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M216 84 L236 100 L256 84" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /></g>
      <g opacity={fade(4)}><path d="M286 64 A12 12 0 1 0 296 82 A9 9 0 1 1 286 64 Z" fill={INK} /><Clock x={286} y={116} r={14} hand={0} /></g>
      {labels.map((label, index) => <W key={label} x={xs[index]} y={172} size={10} fill={index === at ? INK : TEXT}>{label}</W>)}
      <path d={`M${xs[at] - 20} 180 H${xs[at] + 20}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
      <Say>{["Change surroundings, not just yourself", "Reminders that do the remembering", "Block out time with no disturbances", "A debt advice charity can help", "Same bedtime and wake time each day"][at]}</Say>
    </svg>} />;
}

function AdhdCheckCalendar(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const marked = at === 1 ? [5, 11] : at === 2 ? [11] : [];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Health checks" title="Checks that keep medicine safe" label="Health checks on medicine" credit="Illustration: Rehyn. Your own checks are set by your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pulse and blood pressure gauge beside a year of months, with checks every 6 months and a yearly review">
      <g opacity={at < 2 ? 1 : 0.4}><Gauge x={78} y={110} r={50} value={0.45} label="Pulse and pressure" /></g>
      {at === 0 && <Stack x={234} y={60} w={140} labels={["Medical history", "Current medicines", "Height and weight"]} />}
      {(at === 1 || at === 2) && <>
        {months.map((month, index) => { const x = 158 + (index % 6) * 25, y = 44 + Math.floor(index / 6) * 32; const on = marked.includes(index); return <g key={index}>
          <rect x={x} y={y} width="22" height="26" rx="5" fill={on ? INK : WHITE} stroke={INK} strokeWidth="1.5" /><W x={x + 11} y={y + 17} size={10} fill={on ? WHITE : TEXT}>{month}</W></g>; })}
        {at === 2 && <circle cx="294" cy="89" r="18" fill="none" stroke={GOLD} strokeWidth="3" />}
        <W x={232} y={134} size={10.5}>{at === 1 ? "Every 6 months" : "A yearly review"}</W>
      </>}
      {at === 3 && <><Phone x={196} y={90} text="111" /><Phone x={272} y={90} text="999" /><W x={196} y={144} size={10}>Doctor or 111</W><W x={272} y={144} size={10}>999 or A&amp;E</W></>}
      <Say>{["Pulse, blood pressure, weight, history", "Blood pressure checks every 6 months", "A review at least once a year", "Chest pains or a fit: call 999 or A&E"][at]}</Say>
    </svg>} />;
}

function AdhdOfficePlan(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const fade = (on: boolean) => (on ? 1 : 0.4);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Your right to adjustments at work" label="Work and reasonable adjustments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An office floor plan with a quiet room, a reserved desk, written instructions and an Access to Work badge">
      {at === 0 && <W x={160} y={18} size={11} fill={INK}>Equality Act 2010</W>}
      <rect x="20" y="28" width="280" height="148" rx="8" fill={WHITE} stroke={at === 0 ? GOLD : INK} strokeWidth={at === 0 ? 3.5 : 2.5} />
      <g opacity={fade(at === 0 || at === 1)}>
        <rect x="20" y="28" width="100" height="70" rx="6" fill={at === 1 ? TINT : WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M100 98 A20 20 0 0 0 80 78" fill="none" stroke={INK} strokeWidth="2" strokeDasharray="4 3" />
        <W x={58} y={60} size={10}>Quiet room</W>
        <rect x="150" y="44" width="60" height="30" rx="4" fill={at === 1 ? TINT : WHITE} stroke={INK} strokeWidth="2" /><W x={180} y={63} size={10}>Reserved</W>
        <Paper x={244} y={40} w={40} h={48} lit={at === 1} /><W x={264} y={102} size={10}>Written</W>
      </g>
      <g opacity={fade(at === 0 || at === 2)}>
        <circle cx="70" cy="138" r="26" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={70} y={136} size={9.5} fill={at === 2 ? WHITE : TEXT}>Access</W><W x={70} y={148} size={9.5} fill={at === 2 ? WHITE : TEXT}>to Work</W>
      </g>
      <g opacity={fade(at === 0 || at === 3)}>
        <Person x={142} y={156} scale={0.8} /><Person x={184} y={156} scale={0.8} fill={SOFT} />
        <Box x={256} y={146} w={76} h={24} size={10} text="Welfare pack" lit={at === 3} />
      </g>
      <Say>{["The Equality Act covers ADHD", "A quiet space and written instructions", "Access to Work: no diagnosis needed", "A welfare pack can start the talk"][at]}</Say>
    </svg>} />;
}

function AdhdTwoBubbles(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Relationships" title="Understanding ADHD together" label="Relationships" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people talking about what helps, and support for them both">
      <Person x={60} y={168} scale={1.3} /><Person x={260} y={168} scale={1.3} fill={SOFT} />
      {at === 0 && <><Bubble x={236} y={64} w={84} text="Rude?" side="right" faded /><Box x={92} y={64} w={124} text="Eager and keen" lit /></>}
      {at === 1 && <><Bubble x={106} y={44} w={110} text="This helps" /><Bubble x={112} y={96} w={122} text="This does not" /></>}
      {at === 2 && <Bubble x={206} y={74} w={136} text="How can I help?" side="right" />}
      {at === 3 && <><Box x={160} y={56} w={134} text="Peer groups" lit /><Box x={160} y={96} w={134} text="Couples therapy" lit /></>}
      <Say>{["Eager and keen, not rude", "Say what does and does not help", "Learn about it, and ask how to help", "Peer groups and couples therapy"][at]}</Say>
    </svg>} />;
}

function AdhdRoadFork(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const car = [[160, 156], [104, 88], [160, 156], [216, 88]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Driving" title="Fit to drive? It depends" label="Driving and ADHD" credit="Illustration: Rehyn. If in doubt, ask your doctor and do not drive."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A road that forks: if driving is affected it leads to the DVLA, if not it goes straight on">
      <g stroke={LINE} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M160 176 V140 L78 64" /><path d="M160 140 L242 64" /></g>
      <g stroke={WHITE} strokeWidth="2" strokeDasharray="8 8" fill="none"><path d="M160 176 V140 L78 64" /><path d="M160 140 L242 64" /></g>
      <rect x="36" y="24" width="52" height="34" rx="4" fill={at === 1 ? TINT : WHITE} stroke={at === 1 ? GOLD : INK} strokeWidth={at === 1 ? 3 : 2.5} />
      <path d="M36 24 L62 40 L88 24" fill="none" stroke={INK} strokeWidth="2" strokeLinejoin="round" /><W x={62} y={53} size={10}>DVLA</W>
      <W x={64} y={118} size={10.5}>Affected</W><W x={262} y={118} size={10.5}>Not affected</W>
      {(at === 0 || at === 1) && <W x={258} y={44} size={10.5}>Drive on</W>}
      {at === 2 && <><Pill x={258} y={44} /><W x={258} y={22} size={10}>Wait and see</W></>}
      {at === 3 && <><Pill x={250} y={44} /><Tick x={282} y={44} s={8} /></>}
      <circle cx={car[0]} cy={car[1]} r="9" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      <Say>{["Driving affected? Tell the DVLA", "Report online or on form A1", "Wait to see how medicine affects you", "Legal if prescribed and not impaired"][at]}</Say>
    </svg>} />;
}

function AdhdCallGrid(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You do not have to do this alone" label="Support and charities" credit={helpCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A video call of a peer group, charities, and a phone with Samaritans' number">
      <g opacity={at < 2 ? 1 : 0.35}>{Array.from({ length: 6 }, (_, index) => { const x = 20 + (index % 3) * 54, y = 30 + Math.floor(index / 3) * 46; return <g key={index}>
        <rect x={x} y={y} width="48" height="40" rx="6" fill={TINT} stroke={INK} strokeWidth="2" /><Person x={x + 24} y={y + 33} scale={0.5} fill={index % 2 ? SOFT : INK} /></g>; })}</g>
      {at === 1 && <Stack x={98} y={140} w={130} gap={30} labels={["ADHD UK", "ADHD Adult UK"]} lit={() => true} />}
      <Phone x={258} y={92} w={64} h={112} text={at === 3 ? "116 123" : undefined} size={12} />
      {at < 2 && <><rect x="234" y="56" width="36" height="16" rx="7" fill={WHITE} stroke={INK} strokeWidth="1.5" /><rect x="246" y="80" width="36" height="16" rx="7" fill={INK} /><rect x="234" y="104" width="30" height="16" rx="7" fill={WHITE} stroke={INK} strokeWidth="1.5" /></>}
      {at === 2 && <>{[66, 90, 114].map((y, index) => <path key={y} d={`M236 ${y} H266`} stroke={SOFT} strokeWidth="4" strokeLinecap="round" />)}<Tick x={278} y={66} s={5} /><Cross x={278} y={90} s={4} /><Tick x={278} y={114} s={5} /></>}
      {at === 3 && <W x={250} y={172} size={10}>Text SHOUT to 85258</W>}
      <Say>{["People who understand ADHD", "Video groups and free advice clinics", "Online information varies in quality", "Samaritans 116 123, day or night"][at]}</Say>
    </svg>} />;
}

// ==== Autism in adults =======================================================================================

function AutPetals(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const scales = at === 3 ? [1, 0.6, 1.25, 0.8, 1.1] : [1, 1, 1, 1, 1];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A different way of experiencing the world" label="What autism is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A flower of five petals, each a different part of how autism can show">
      {scales.map((scale, index) => <ellipse key={index} transform={`translate(104 100) rotate(${index * 72}) translate(0 ${-36 - 4 * scale})`} rx="20" ry={32 * scale} fill={at === 2 ? INK : TINT} fillOpacity={at === 2 ? 0.85 : 1} stroke={INK} strokeWidth="2.5" />)}
      <circle cx="104" cy="100" r="16" fill={GOLD} />
      {at === 0 && <Lines x={252} y={92} gap={18} size={11} lines={["A lifelong", "neurodivergence"]} />}
      {at === 1 && <Stack x={252} y={60} gap={34} w={122} labels={["Not an illness", "Born with it", "Not from vaccines"]} lit={index => index === 0} />}
      {at === 2 && <Stack x={252} y={48} gap={32} w={122} labels={["Communication", "Interests", "Routine", "Senses"]} lit={() => true} />}
      {at === 3 && <>{[60, 25, 80, 40, 70, 20, 50].map((height, index) => <rect key={index} x={200 + index * 15} y={140 - height} width="10" height={height} rx="3" fill={index % 2 ? SOFT : INK} />)}<W x={252} y={162} size={10.5}>A spiky profile</W></>}
      {at === 4 && <>{Array.from({ length: 100 }, (_, index) => <circle key={index} cx={207 + (index % 10) * 9.5} cy={40 + Math.floor(index / 10) * 9.5} r={index === 0 ? 4 : 3} fill={index === 0 ? GOLD : SOFT} />)}<W x={252} y={150} size={10.5}>More than 1 in 100</W></>}
      <Say>{["A difference in how the brain develops", "Born autistic; not an illness", "Communication, behaviour and senses", "A spectrum, not a straight line", "More than 1 in 100 people"][at]}</Say>
    </svg>} />;
}

function AutMaskSigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tags = [
    ["Learned to adapt", "Can be exhausting"],
    ["Take things literally", "Direct and honest", "Sense of justice"],
    ["Fixed routines", "Focused interests", "Stimming", "Light and sound"],
    ["Felt different", "Effort: eye contact", "Interviews harder"],
    ["Copying others", "Hiding feelings", "Missed by stereotypes"],
  ][at];
  const masked = at === 0 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Signs" title="The signs that were there all along" label="Signs of autism in adults" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person holding up a mask, beside signs of autism that can be hidden">
      <Person x={76} y={166} scale={1.5} />
      <g opacity={masked ? 1 : 0.3}>
        <path d="M92 152 L104 140" stroke={INK} strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="106" cy="116" rx="18" ry="22" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <ellipse cx="100" cy="110" rx="3" ry="2.2" fill={INK} /><ellipse cx="112" cy="110" rx="3" ry="2.2" fill={INK} />
        <path d="M98 123 Q106 130 114 123" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      </g>
      <Stack x={236} y={tags.length > 3 ? 52 : 68} gap={34} w={148} labels={tags} lit={() => at > 0 && at < 4} />
      <Say>{["Signs can be hidden by masking", "Social rules can feel confusing", "Routines, focused interests, stimming", "Many have always felt different", "Signs in women may be harder to see"][at]}</Say>
    </svg>} />;
}

function AutSteppingStones(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const xs = [40, 100, 160, 220, 280], ys = [144, 132, 126, 132, 144];
  const labels = ["GP", "Get ready", "Waiting", "Assessment", "Report"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Diagnosis" title="From GP to report, step by step" label="Getting an autism assessment" credit={pathCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Stepping stones across a stream, from the GP, through waiting and the assessment, to a report">
      <path d="M10 108 q25 -8 50 0 t50 0 t50 0 t50 0 t50 0 t50 0" stroke={LINE} strokeWidth="3" fill="none" />
      <path d="M10 186 q25 -8 50 0 t50 0 t50 0 t50 0 t50 0 t50 0" stroke={LINE} strokeWidth="3" fill="none" />
      {xs.map((x, index) => <g key={x}>
        <ellipse cx={x} cy={ys[index]} rx="24" ry="10" fill={index === at ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={x} y={ys[index] + 26} size={10} fill={index === at ? INK : TEXT}>{labels[index]}</W>
      </g>)}
      <Person x={xs[at]} y={ys[at] - 6} scale={0.65} fill={GOLD} />
      {at === 2 && <Clock x={200} y={72} r={14} hand={2} />}
      {at === 4 && <Paper x={266} y={56} w={28} h={34} lit />}
      <W x={160} y={36} size={10.5}>{["A referral from a GP", "Notes and questions", "NICE: up to 3 months", "Questionnaires and talking", "Strengths and needs"][at]}</W>
      <Say>{["Most people need a GP referral", "Bring notes, questions or a friend", "Many people wait much longer", "No correct or incorrect answers", "A report on strengths and needs"][at]}</Say>
    </svg>} />;
}

function AutBattery(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const level = [0.7, 0.5, 0.3, 0.1, 0.75][at];
  const tags = [
    ["At work", "At home", "With friends"],
    ["Forced eye contact", "Copying expressions", "Scripting"],
    ["To be accepted", "To keep jobs", "To keep friends"],
    ["Long exhaustion", "Loss of skills", "Less sensory tolerance"],
    ["Time to relax", "Time to stim", "Interests"],
  ][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Masking" title="The hidden cost of fitting in" label="Masking and burnout" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person holding a mask beside a battery that drains, then recharges">
      <Stack x={80} y={28} gap={28} h={22} w={140} size={10} labels={tags} lit={() => at === 4} />
      <Person x={70} y={170} scale={1.4} />
      {at < 4 && <g opacity={at === 3 ? 0.4 : 1}>
        <path d="M84 156 L96 144" stroke={INK} strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="96" cy="126" rx="16" ry="20" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M90 134 Q96 139 102 134" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      </g>}
      <rect x="214" y="36" width="24" height="10" rx="3" fill={INK} />
      <rect x="196" y="44" width="60" height="122" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="203" y={159 - 108 * level} width="46" height={108 * level} rx="5" fill={at === 3 ? SOFT : INK} />
      {at === 4 && <path d="M232 70 L214 108 H228 L220 140 L242 98 H228 Z" fill={GOLD} stroke={WHITE} strokeWidth="2" strokeLinejoin="round" className={still ? undefined : "lib-why-pulse"} />}
      <Say>{["Masking to blend in and be accepted", "Hiding stims and sensory discomfort", "Masking takes a lot of effort", "Burnout can last 3 months or more", "Know what drains you and recharges you"][at]}</Say>
    </svg>} />;
}

function AutSignpost(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const arms = [
    { t: "Support plan", d: "M160 30 H270 L284 42 L270 54 H160 Z", x: 218, y: 46 },
    { t: "Know yourself", d: "M160 64 H50 L36 76 L50 88 H160 Z", x: 102, y: 80 },
    { t: "Who to tell", d: "M160 98 H270 L284 110 L270 122 H160 Z", x: 218, y: 114 },
  ];
  const lit = [-1, 0, 0, 1, 2][at];
  const chips = [["Relief", "Anger", "Hope", "Worry"], ["Key worker", "Personal plan"], ["Council", "Benefits", "Work"], ["Strengths", "Needs", "Rest"], ["Your choice", "Meeting others"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="After diagnosis" title="The start of understanding yourself" label="After a diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A signpost to a support plan, knowing yourself and who to tell">
      <path d="M160 22 V148" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="160" cy="150" rx="26" ry="5" fill={LINE} />
      {arms.map((arm, index) => <g key={arm.t} opacity={at === 0 ? 0.45 : 1}>
        <path d={arm.d} fill={index === lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={arm.x} y={arm.y} size={10.5} fill={index === lit ? WHITE : TEXT}>{arm.t}</W>
      </g>)}
      <Row y={176} labels={chips} lit={() => at === 0} />
      <Say>{["Whatever you feel is okay", "A key worker and a personal plan", "Social care, benefits and work support", "The start of understanding yourself", "Who you tell is your decision"][at]}</Say>
    </svg>} />;
}

function AutSenseDials(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const xs = [28, 62, 96, 130, 164];
  const senses = ["Sight", "Sound", "Touch", "Smell", "Taste"];
  const levels = [[0.85, 0.2, 0.7, 0.35, 0.15], [0.9, 0.15, 0.8, 0.25, 0.55], [0.9, 0.95, 0.6, 0.85, 0.4], [1, 1, 1, 1, 1], [0.55, 0.5, 0.6, 0.45, 0.5]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Senses" title="When the world feels too loud" label="Sensory needs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A slider for each sense, some turned up and some down, and what can help">
      <W x={186} y={46} size={10} anchor="start">More</W><W x={186} y={142} size={10} anchor="start">Less</W>
      {xs.map((x, index) => <g key={x}>
        <path d={`M${x} 40 V140`} stroke={LINE} strokeWidth="6" strokeLinecap="round" />
        <circle cx={x} cy={140 - levels[index] * 100} r="9" fill={at === 3 ? GOLD : INK} stroke={WHITE} strokeWidth="2.5" className={at === 3 && !still ? "lib-why-pulse" : undefined} />
        <W x={x} y={160} size={9.5}>{senses[index]}</W>
      </g>)}
      {at === 0 && <><W x={266} y={86} size={18} fill={INK}>53 to 95</W><Lines x={266} y={106} gap={14} size={10} lines={["in every 100", "autistic people"]} /></>}
      {at === 1 && <Stack x={266} y={60} w={84} labels={["Too much", "Too little", "A mix"]} lit={index => index === 2} />}
      {at === 2 && <Stack x={266} y={44} gap={30} w={88} size={10} labels={["Bright lights", "Noise", "Crowds", "Smells"]} />}
      {at === 3 && <Stack x={266} y={56} gap={32} w={90} size={10} labels={["Quieter place", "Less talking", "Time and space"]} lit={() => true} />}
      {at === 4 && <><Headphones x={266} y={52} /><W x={266} y={88} size={10}>Ear defenders</W>
        <g fill={INK}><circle cx="254" cy="114" r="9" /><circle cx="278" cy="114" r="9" /></g><path d="M263 112 H269 M245 110 L238 106 M287 110 L294 106" stroke={INK} strokeWidth="2.5" strokeLinecap="round" /><W x={266} y={142} size={10}>Tinted glasses</W></>}
      <Say>{["More, or less, sensitive than others", "Too much, too little, or a mix", "Lights, noise, crowds and smells", "In overload: quiet, time and space", "A sensory diary and a sensory kit"][at]}</Say>
    </svg>} />;
}

/** An armchair facing right (or left, `flip`), centred on x. */
const Chair = ({ x, flip }: { x: number; flip: boolean }) =>
  <g transform={`translate(${x} 0) scale(${flip ? -1 : 1} 1)`}>
    <rect x="-36" y="112" width="16" height="56" rx="6" fill={SOFT} stroke={INK} strokeWidth="2" />
    <rect x="-30" y="144" width="62" height="22" rx="6" fill={TINT} stroke={INK} strokeWidth="2" />
    <rect x="20" y="134" width="12" height="34" rx="5" fill={SOFT} stroke={INK} strokeWidth="2" />
    <path d="M-26 168 V182 M26 168 V182" stroke={INK} strokeWidth="3" strokeLinecap="round" />
  </g>;

function AutLampChair(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mental health" title="Support that fits the way you think" label="Anxiety, depression and therapy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two chairs and a dimmable lamp, with what can add stress and what can help">
      <path d="M146 110 H174 L204 176 H116 Z" fill={GOLD} opacity={at === 3 ? 0.12 : 0.3} />
      <Chair x={74} flip={false} /><Chair x={246} flip />
      <path d="M160 110 V182" stroke={INK} strokeWidth="3" /><ellipse cx="160" cy="184" rx="16" ry="4" fill={INK} />
      <path d="M144 110 H176 L170 88 H150 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      {at === 0 && <><rect x="60" y="28" width="200" height="16" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="60" y="28" width="100" height="16" rx="8" fill={INK} /><W x={160} y={66} size={10.5}>Up to half: high anxiety</W></>}
      {at === 1 && <Row y={44} from={30} to={290} labels={["Changes", "Senses", "Social"]} />}
      {at === 2 && <Row y={44} from={30} to={290} labels={["Worry", "Low energy", "Meltdowns"]} />}
      {at === 3 && <Row y={44} from={30} to={290} labels={["Adapted CBT", "Dim lights", "More time"]} lit={() => true} />}
      {at === 4 && <><Pill x={160} y={36} /><W x={160} y={66} size={10.5}>Reviewed regularly</W></>}
      <Say>{["More common, and treatable", "Change and senses can add stress", "Worry, low energy, withdrawing more", "CBT can help if adapted", "Medicines, closely monitored"][at]}</Say>
    </svg>} />;
}

function AutDoorTags(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tags = [
    ["Bright lights", "Noises", "Tastes", "Waiting"],
    ["Easy read letters", "Priority appointment", "Longer appointment", "Quiet space"],
    ["Book online", "Bring someone", "More time", "Questions in writing", "Dim lights"],
    ["Adjustment Flag", "My Health Passport"],
    ["Eat well", "Stay active", "Sleep well", "Unscented products"],
  ][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Healthcare" title="Appointments that work for you" label="Getting healthcare that works for you" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A surgery building with tags for the adjustments that can make appointments easier">
      <path d="M14 60 L75 26 L136 60" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="20" y="58" width="110" height="122" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M75 34 V52 M66 43 H84" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
      <rect x="32" y="74" width="22" height="20" rx="2" fill={TINT} stroke={INK} strokeWidth="2" /><rect x="96" y="74" width="22" height="20" rx="2" fill={TINT} stroke={INK} strokeWidth="2" />
      <rect x="58" y="120" width="34" height="60" rx="3" fill={at === 1 || at === 2 ? INK : TINT} stroke={INK} strokeWidth="2.5" /><circle cx="85" cy="152" r="2.5" fill={at === 1 || at === 2 ? WHITE : INK} />
      <path d="M130 140 H146" stroke={LINE} strokeWidth="2" strokeDasharray="3 3" />
      <Stack x={230} y={tags.length > 4 ? 42 : tags.length > 2 ? 54 : 84} gap={30} w={150} labels={tags} lit={() => at > 0} dashed={at === 0} />
      <Say>{["Lights, noise and waiting can be hard", "Services must remove barriers", "Ask for changes that make it easier", "A flag and a passport share your needs", "Support to eat, move and sleep well"][at]}</Say>
    </svg>} />;
}

function AutQuietDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const fade = (on: boolean) => (on ? 1 : 0.45);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Your rights and adjustments at work" label="Work and reasonable adjustments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk in a quiet corner with headphones and written instructions, and an Access to Work badge">
      <path d="M304 20 V180 H16" stroke={at === 1 ? GOLD : LINE} strokeWidth="4" fill="none" strokeLinecap="round" />
      <Person x={46} y={164} scale={1.2} />
      <path d="M70 120 H252 M82 120 V180 M240 120 V180" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <rect x="122" y="72" width="70" height="42" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M157 114 V120" stroke={INK} strokeWidth="4" />
      <g opacity={fade(at === 1)}><Headphones x={222} y={100} s={0.7} /><Paper x={88} y={86} w={26} h={30} lit={at === 1} /></g>
      <g opacity={fade(at === 3)}>
        <circle cx="262" cy="50" r="26" fill={at === 3 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={262} y={48} size={9.5} fill={at === 3 ? WHITE : TEXT}>Access</W><W x={262} y={60} size={9.5} fill={at === 3 ? WHITE : TEXT}>to Work</W>
      </g>
      {at === 0 && <Box x={110} y={40} w={150} text="Reasonable adjustments" lit />}
      {at === 2 && <Bubble x={104} y={40} w={120} text="I am autistic" />}
      {at === 4 && <Box x={110} y={40} w={130} text="Manager or HR" lit />}
      <Say>{["Covered by the Equality Act 2010", "Quieter space, written instructions", "Telling your employer is your choice", "Access to Work: a job coach or support", "Raise it with a manager or HR"][at]}</Say>
    </svg>} />;
}

function AutBridgeBubbles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Relationships" title="Connection, on your own terms" label="Relationships and social life" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people on either side of a bridge, with differently shaped speech bubbles meeting in the middle">
      <rect x="10" y="150" width="72" height="34" rx="6" fill={TINT} stroke={INK} strokeWidth="2" /><rect x="238" y="150" width="72" height="34" rx="6" fill={TINT} stroke={INK} strokeWidth="2" />
      <path d="M82 152 Q160 180 238 152" fill="none" stroke={INK} strokeWidth="4" />
      {[110, 135, 160, 185, 210].map(x => <path key={x} d={`M${x} ${158 + (1 - ((x - 160) / 78) ** 2) * 10} v8`} stroke={INK} strokeWidth="2.5" strokeLinecap="round" />)}
      <Person x={46} y={136} scale={1.1} /><Person x={274} y={136} scale={1.1} fill={SOFT} />
      {at === 0 && <><circle cx="144" cy="72" r="28" fill={TINT} stroke={INK} strokeWidth="2.5" /><rect x="164" y="44" width="54" height="54" rx="6" fill={SOFT} fillOpacity=".6" stroke={INK} strokeWidth="2.5" /><path d="M130 100 L118 116 M190 98 L204 116" stroke={INK} strokeWidth="2.5" strokeLinecap="round" /></>}
      {at === 1 && <><Box x={100} y={64} w={104} text="Time alone" lit /><Box x={220} y={64} w={104} text="Loneliness" dashed /></>}
      {at === 2 && <><Box x={160} y={60} w={140} text="Shared interest" lit /><path d="M160 76 L160 92 M100 100 L140 80 M220 100 L180 80" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /></>}
      {at === 3 && <HeartShape x={160} y={78} size={60} fill={TINT} stroke={INK} width={3} />}
      {at === 4 && <Row y={56} from={40} to={280} labels={["Prepare", "Choose", "Recharge"]} lit={() => true} />}
      <Say>{["A two-way gap; effort on both sides", "Time alone is not the same as lonely", "Groups built around a shared interest", "Loving, successful relationships", "Prepare, choose events, then recharge"][at]}</Say>
    </svg>} />;
}

function AutWeekPlanner(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const dim = at === 3 ? 0.3 : 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Routines" title="Calm in the routine, a plan for change" label="Routines and change" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A weekly planner with the same blocks each day, a countdown to a change and a plan B">
      <rect x="20" y="24" width="280" height="112" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M20 44 H300" stroke={INK} strokeWidth="2" />
      {days.map((day, index) => { const x = 20 + index * 40; const moved = at === 1 && index === 2; return <g key={index}>
        {index > 0 && <path d={`M${x} 24 V136`} stroke={LINE} strokeWidth="1.5" />}
        <W x={x + 20} y={39} size={10}>{day}</W>
        <rect x={x + 5} y={moved ? 80 : 52} width="30" height="18" rx="4" fill={moved ? WHITE : INK} opacity={dim} stroke={moved ? GOLD : "none"} strokeWidth="3" strokeDasharray={moved ? "4 3" : undefined} />
        <rect x={x + 5} y="108" width="30" height="18" rx="4" fill={SOFT} opacity={dim} />
      </g>; })}
      {at === 3 && <>{["3", "2", "1"].map((n, index) => <W key={n} x={160 + index * 40 + 20} y={96} size={16} fill={INK}>{n}</W>)}<W x={280} y={94} size={10} fill={INK}>New</W>
        <g transform="translate(176 150) rotate(-4)"><rect width="60" height="26" rx="3" fill={TINT} stroke={INK} strokeWidth="1.5" /><W x={30} y={17} size={10}>Plan B</W></g>
        <g transform="translate(244 150) rotate(3)"><rect width="60" height="26" rx="3" fill={TINT} stroke={INK} strokeWidth="1.5" /><W x={30} y={17} size={10}>Plan C</W></g></>}
      {at === 0 && <W x={160} y={164} size={10.5}>The same each day</W>}
      {at === 2 && <Tick x={160} y={160} s={12} />}
      {at === 4 && <><Box x={92} y={162} w={128} text="Told in advance" lit /><Box x={232} y={162} w={136} text="Regular timetable" lit /></>}
      <Say>{["Routines can keep things calm", "Unexpected change can cause anxiety", "No harm? No need to change them", "Count down, practise, have a plan B", "Being told about changes in advance"][at]}</Say>
    </svg>} />;
}

function AutMapPins(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const pins = [[42, 62], [74, 48], [112, 58], [146, 74], [54, 98], [92, 88], [130, 106], [60, 130], [100, 124], [144, 132], [30, 116]];
  const people = at === 2 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You are not on your own" label="Support and the community" credit={helpCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Local branches as pins, an online community on a laptop, and a phone with Samaritans' number">
      <rect x="16" y="26" width="154" height="124" rx="30" fill={TINT} />
      <g opacity={people ? 0.25 : 1}>{pins.map(([x, y]) => <g key={`${x}${y}`}><path d={`M${x} ${y} c-5 -7 -7 -10 -7 -14 a7 7 0 0 1 14 0 c0 4 -2 7 -7 14 Z`} fill={at === 1 ? GOLD : INK} /><circle cx={x} cy={y - 14} r="2.5" fill={WHITE} /></g>)}</g>
      {people && <><Person x={60} y={124} scale={0.8} /><Person x={93} y={124} scale={0.8} fill={SOFT} /><Person x={126} y={124} scale={0.8} /></>}
      {at === 1 && <W x={93} y={170} size={10}>More than 60 branches</W>}
      <g opacity={at === 1 || at === 0 ? 1 : 0.35}>
        <rect x="196" y="28" width="96" height="60" rx="4" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        {[42, 56, 70].map(y => <path key={y} d={`M206 ${y} H${y === 56 ? 262 : 280}`} stroke={at === 1 ? WHITE : SOFT} strokeWidth="3" strokeLinecap="round" />)}
        <path d="M184 92 H304 L296 100 H192 Z" fill={SOFT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      </g>
      {at === 1 && <W x={244} y={118} size={10}>Online, 24 hours</W>}
      {at === 3 && <Box x={244} y={130} w={124} text="Carer's assessment" lit />}
      {at === 4 && <><Phone x={244} y={142} w={64} h={64} text="116 123" size={11} /><W x={244} y={188} size={10}>Text SHOUT to 85258</W></>}
      <Say>{["GP, council, work and charities", "Local branches and an online community", "Peer support: no diagnosis needed", "Carer's assessments and courses", "Samaritans 116 123, any time"][at]}</Say>
    </svg>} />;
}

export function NeuroPieceView({ piece, ...props }: { piece: NeuroPiece } & PieceProps) {
  switch (piece) {
    case "adhd-three-circles": return <AdhdThreeCircles {...props} />;
    case "adhd-inner-buzz": return <AdhdInnerBuzz {...props} />;
    case "adhd-path-stops": return <AdhdPathStops {...props} />;
    case "adhd-bubble-cluster": return <AdhdBubbleCluster {...props} />;
    case "adhd-dose-steps": return <AdhdDoseSteps {...props} />;
    case "adhd-toolbox": return <AdhdToolbox {...props} />;
    case "adhd-desk-reminders": return <AdhdDeskReminders {...props} />;
    case "adhd-check-calendar": return <AdhdCheckCalendar {...props} />;
    case "adhd-office-plan": return <AdhdOfficePlan {...props} />;
    case "adhd-two-bubbles": return <AdhdTwoBubbles {...props} />;
    case "adhd-road-fork": return <AdhdRoadFork {...props} />;
    case "adhd-call-grid": return <AdhdCallGrid {...props} />;
    case "aut-petals": return <AutPetals {...props} />;
    case "aut-mask-signs": return <AutMaskSigns {...props} />;
    case "aut-stepping-stones": return <AutSteppingStones {...props} />;
    case "aut-battery": return <AutBattery {...props} />;
    case "aut-signpost": return <AutSignpost {...props} />;
    case "aut-sense-dials": return <AutSenseDials {...props} />;
    case "aut-lamp-chair": return <AutLampChair {...props} />;
    case "aut-door-tags": return <AutDoorTags {...props} />;
    case "aut-quiet-desk": return <AutQuietDesk {...props} />;
    case "aut-bridge-bubbles": return <AutBridgeBubbles {...props} />;
    case "aut-week-planner": return <AutWeekPlanner {...props} />;
    case "aut-map-pins": return <AutMapPins {...props} />;
  }
}
