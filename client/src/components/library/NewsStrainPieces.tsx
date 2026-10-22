import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { STRAIN_PIECES, type StrainPiece } from "@/content/strain-features";
import type { PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Chips, Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Burnout and Carer stress pages' own pieces (content/strain-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Mind & mood pieces. Each is steered by the card's sections; pictures
// show ideas, calmly and hopefully, never anyone's own body, results or harm.

export const isStrainPiece = (piece: NewsPiece): piece is StrainPiece => (STRAIN_PIECES as readonly string[]).includes(piece);

const crisisCredit = "Illustration: Rehyn. In danger now? Call 999.";

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
const Tick = ({ x, y, s = 8, color = GOLD }: { x: number; y: number; s?: number; color?: string }) =>
  <path d={`M${x - s} ${y} L${x - s * 0.3} ${y + s * 0.7} L${x + s} ${y - s * 0.8}`} stroke={color} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const Arrow = ({ d, head, color = GOLD }: { d: string; head: string; color?: string }) =>
  <g stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** A small chevron pointing along `angle` (degrees). */
const Chevron = ({ x, y, angle, color = INK }: { x: number; y: number; angle: number; color?: string }) =>
  <path d="M-5 -6 L4 0 L-5 6" transform={`translate(${x} ${y}) rotate(${angle})`} stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
/** A plain cloud with nothing inside it. */
const Cloud = ({ x, y, s, fill = SOFT, opacity = 1 }: { x: number; y: number; s: number; fill?: string; opacity?: number }) =>
  <g opacity={opacity} fill={fill}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 11} y={y - 18} width="22" height="36" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 11} r="2.2" fill={lit ? WHITE : INK} /></g>;
const Cup = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 12} y={y - 13} width="24" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 12} ${y - 7} h5 a6 6 0 0 1 0 12 h-5`} fill="none" stroke={INK} strokeWidth="2.5" /></g>;
/** A desk with a screen, standing on y. */
const Desk = ({ x, y, w = 70 }: { x: number; y: number; w?: number }) =>
  <g>
    <path d={`M${x - w / 2} ${y - 24} H${x + w / 2} M${x - w / 2 + 7} ${y - 24} V${y} M${x + w / 2 - 7} ${y - 24} V${y}`} stroke={INK} strokeWidth="4" strokeLinecap="round" />
    <rect x={x - 17} y={y - 50} width="34" height="22" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x} ${y - 28} V${y - 24}`} stroke={INK} strokeWidth="3" />
  </g>;
/** A house standing on y, `w` across. */
const House = ({ x, y, w = 56 }: { x: number; y: number; w?: number }) => {
  const h = w * 0.55;
  return <g><path d={`M${x - w / 2} ${y} V${y - h} L${x} ${y - h - w * 0.38} L${x + w / 2} ${y - h} V${y} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><rect x={x - w * 0.1} y={y - h * 0.6} width={w * 0.2} height={h * 0.6} fill={INK} /></g>;
};
/** A garden bench with its seat at y. */
const Bench = ({ x, y, w = 96 }: { x: number; y: number; w?: number }) =>
  <g stroke={INK} strokeWidth="4" strokeLinecap="round"><path d={`M${x - w / 2} ${y} H${x + w / 2}`} /><path d={`M${x - w / 2 + 4} ${y - 22} H${x + w / 2 - 4}`} strokeWidth="3" /><path d={`M${x - w / 2 + 8} ${y} V${y + 18} M${x + w / 2 - 8} ${y} V${y + 18} M${x - w / 2 + 8} ${y} V${y - 22} M${x + w / 2 - 8} ${y} V${y - 22}`} strokeWidth="3" /></g>;
/** A person drawn as a dashed outline. */
const Ghost = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={INK} strokeWidth={2.2 / scale} strokeDasharray={`${4 / scale} ${4 / scale}`}><circle cx="0" cy="-30" r="11" /><path d="M-18 14 C-18 -8, -10 -16, 0 -16 C10 -16, 18 -8, 18 14 Z" /></g>;

// ==== Burnout ===============================================================================================

function BurnTank(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Exhaustion of body, mind and feelings", "WHO: drained, distant, less effective", "Long or severe stress, built gradually", "It does not tend to get better alone", "Recovery is possible, with support"];
  const level = [0.12, 0.2, 0.4, 0.06, 0.62][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Long stress, and the tank running dry" label="What burnout is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An energy gauge running low as stress goes on, then rising again with recovery">
      <Gauge x={86} y={122} r={58} value={level} />
      <W x={28} y={144} size={9.5}>Empty</W><W x={144} y={144} size={9.5}>Full</W>
      <W x={86} y={172} size={10.5}>Energy</W>
      {at === 0 && <Tags x={186} y={36} labels={["Body", "Mind", "Feelings"]} lit={() => true} width={116} gap={38} />}
      {at === 1 && <><Tags x={186} y={26} labels={["Drained", "Distant", "Less effective"]} lit={() => true} width={116} gap={34} /><W x={244} y={150} size={9.5}>Not a medical condition</W></>}
      {at === 2 && <g>
        <path d="M180 154 H306 M180 154 V34" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M180 112 H306" stroke={SOFT} strokeWidth="3" strokeDasharray="6 6" />
        <path d="M180 136 C220 130, 250 96, 304 46" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <W x={258} y={56} size={10} anchor="end">Demands</W>
        <W x={304} y={130} size={10} anchor="end">Resources</W>
        <W x={304} y={170} size={9.5} anchor="end">Time</W>
      </g>}
      {at === 3 && <><W x={244} y={30} size={10}>It can raise the risk of</W><Tags x={186} y={44} labels={["Heart disease", "Depression", "Anxiety"]} lit={() => false} width={116} gap={34} /></>}
      {at === 4 && <><Sun x={244} y={62} r={16} /><W x={244} y={122} size={10.5}>Recovery is possible</W><W x={244} y={140} size={10}>with the right support</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BurnFourSigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Withdrawn, trapped or overwhelmed", "Assuming the worst, or always worrying", "Exhausted, poor sleep, aches and pains", "Longer hours, or putting things off", "Just a few signs can point to it"];
  const rows = ["Feelings", "Thoughts", "The body", "Work, behaviour"];
  const icon = (index: number, x: number, y: number, c: string) => [
    <HeartShape key="f" x={x} y={y + 1} size={20} fill="none" stroke={c} width={2.5} />,
    <Cloud key="t" x={x} y={y + 3} s={9} fill={c} />,
    <Person key="b" x={x} y={y + 10} scale={0.42} fill={c} />,
    <g key="w"><rect x={x - 10} y={y - 5} width="20" height="14" rx="3" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x - 4} ${y - 5} V${y - 9} H${x + 4} V${y - 5}`} stroke={c} strokeWidth="2.5" fill="none" /></g>,
  ][index];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Signs" title="Feelings, thoughts, body and work" label="Signs of burnout" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four kinds of sign, feelings, thoughts, the body and work, beside a tired person">
      {rows.map((row, index) => { const y = 22 + index * 40; const lit = at === index; return <g key={row}>
        <rect x="14" y={y} width="184" height="32" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, 36, y + 16, lit ? WHITE : INK)}
        <W x={58} y={y + 20} size={10.5} anchor="start" fill={lit ? WHITE : TEXT}>{row}</W>
        {at === 4 && <><rect x="172" y={y + 9} width="14" height="14" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />{(index === 0 || index === 2) && <Tick x={179} y={y + 16} s={6} />}</>}
      </g>; })}
      <Person x={262} y={164} scale={1.4} fill={at === 4 ? INK : SOFT} />
      {at === 0 && <Cloud x={262} y={62} s={20} />}
      {at === 1 && <Bubble x={262} y={40} text="Assume the worst" width={112} />}
      {at === 2 && <><circle cx="262" cy="122" r="22" fill="none" stroke={GOLD} strokeWidth="3" /><circle cx="262" cy="160" r="15" fill="none" stroke={GOLD} strokeWidth="3" /></>}
      {at === 3 && <Clock x={262} y={58} r={22} hand={5.2} />}
      {at === 4 && <Box x={262} y={58} w={92} text="See a GP" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BurnLoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["No single cause; we are all different", "Too much work, too little control", "Caring, parenting or long-term illness", "Workload was the biggest driver", "Write down when the stress started"];
  const piles = [
    [{ t: "At work", w: 150 }, { t: "Outside work", w: 124 }],
    [{ t: "Workload", w: 150 }, { t: "Deadlines", w: 128 }, { t: "Little control", w: 138 }, { t: "Little support", w: 132 }],
    [{ t: "Caring", w: 150 }, { t: "Parenting", w: 128 }, { t: "Long-term illness", w: 140 }, { t: "Money worries", w: 132 }],
    [{ t: "Workload", w: 160 }, { t: "Unpaid overtime", w: 136 }, { t: "Job security", w: 124 }, { t: "Perfectionism", w: 116 }],
    [],
  ][at];
  const lit = [[], [0, 2], [0, 1, 2], [0], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Where the load comes from" label="Causes of burnout" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person beside a pile of blocks, each one a pressure that adds to the load">
      <Person x={64} y={174} scale={1.4} />
      {at === 0 && <Person x={122} y={180} scale={1} fill={SOFT} />}
      {piles.map((block, index) => <Box key={block.t} x={226} y={160 - index * 34} w={block.w} h={28} text={block.t} lit={lit.includes(index)} />)}
      {at === 4 && <g>
        <rect x="156" y="20" width="144" height="156" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={228} y={44} size={10.5}>When did it start?</W>
        {["Too much to do?", "Not enough time?", "Lots of change?", "Hard relationships?"].map((line, index) => <g key={line}>
          <circle cx="172" cy={68 + index * 26} r="4" fill={GOLD} />
          <W x={182} y={72 + index * 26} size={10} anchor="start">{line}</W>
        </g>)}
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BurnDeskHome(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Shared signs, so they can be confused", "Work only, or both work and home", "Burnout: feeling nothing left to give", "Depression: low for weeks or months", "Low for over 2 weeks? See a GP"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Burnout or depression?" title="Burnout or depression?" label="Burnout or depression" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Burnout and depression side by side: one centres on work, the other reaches home too">
      {at === 0 && <g>
        <circle cx="128" cy="100" r="64" fill={INK} fillOpacity=".15" stroke={INK} strokeWidth="2.5" />
        <circle cx="192" cy="100" r="64" fill={INK} fillOpacity=".15" stroke={INK} strokeWidth="2.5" />
        <W x={97} y={104} size={10.5}>Burnout</W><W x={224} y={104} size={10.5}>Depression</W>
        <W x={160} y={98} size={9.5}>Shared</W><W x={160} y={112} size={9.5}>signs</W>
      </g>}
      {at === 1 && [{ y: 92, t: "Burnout", home: false }, { y: 178, t: "Depression", home: true }].map(row => <g key={row.t}>
        <W x={20} y={row.y - 22} size={10.5} anchor="start">{row.t}</W>
        <Desk x={176} y={row.y} /><House x={262} y={row.y} />
        <Cloud x={176} y={row.y - 66} s={13} fill={INK} opacity={0.5} />
        {row.home && <Cloud x={262} y={row.y - 66} s={13} fill={INK} opacity={0.5} />}
      </g>)}
      {at === 2 && <g>
        {[{ x: 100, t: "Stress", level: 0.35, sub: "Too much" }, { x: 220, t: "Burnout", level: 0.04, sub: "Nothing left" }].map(b => <g key={b.t}>
          <rect x={b.x - 26} y="40" width="52" height="110" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
          <rect x={b.x - 10} y="32" width="20" height="8" rx="2" fill={INK} />
          <rect x={b.x - 20} y={146 - 102 * b.level} width="40" height={102 * b.level} rx="4" fill={b.t === "Stress" ? INK : SOFT} />
          <W x={b.x} y={170} size={10.5}>{b.t}</W>
          <W x={b.x} y={186} size={9.5}>{b.sub}</W>
        </g>)}
        <Arrow d="M142 128 V74" head="M136 82 L142 74 L148 82" />
      </g>}
      {at === 3 && <g>
        {Array.from({ length: 8 }, (_, index) => <rect key={index} x={24 + index * 35} y="112" width="30" height="30" rx="5" fill={SOFT} opacity={0.5 + index * 0.06} />)}
        <Cloud x={160} y={72} s={34} fill={INK} opacity={0.35} />
        <W x={160} y={166} size={10.5}>Weeks or months</W>
      </g>}
      {at === 4 && <g>
        {Array.from({ length: 14 }, (_, index) => <rect key={index} x={24 + (index % 7) * 26} y={44 + Math.floor(index / 7) * 26} width="22" height="22" rx="4" fill={INK} />)}
        <W x={113} y={118} size={10.5}>More than 2 weeks</W>
        <Box x={256} y={68} w={92} text="See a GP" lit />
        <W x={160} y={160} size={10}>Or refer yourself to talking therapies</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BurnStones(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["From a couple of months to years", "Time away can restore energy", "Deal with the cause, not just symptoms", "Me time, routine and mindfulness", "One small change; celebrate wins"];
  const stones = [[40, 174], [92, 152], [144, 130], [196, 106], [246, 80], [290, 54]];
  const dot = stones[[0, 2, 3, 3, 1][at]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Recovery" title="A gradual road back" label="Rest and recovery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Stepping stones climbing gently from now towards feeling like yourself again">
      <path d={`M${stones.map(([x, y]) => `${x} ${y}`).join(" L")}`} stroke={LINE} strokeWidth="3" fill="none" strokeDasharray="3 7" strokeLinecap="round" />
      {stones.map(([x, y], index) => <ellipse key={x} cx={x} cy={y} rx="22" ry="8" fill={at === 4 && index === 1 ? GOLD : index <= [0, 2, 3, 3, 1][at] ? INK : WHITE} stroke={INK} strokeWidth="2" />)}
      <circle cx={dot[0]} cy={dot[1] - 16} r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      {at === 0 && <><W x={144} y={112} size={10}>Months</W><W x={290} y={36} size={10}>Years</W></>}
      {at === 1 && <><Sun x={56} y={52} r={13} /><Bench x={252} y={164} w={84} /><Person x={252} y={160} scale={0.8} /></>}
      {at === 2 && <><Box x={90} y={38} w={136} text="In your control" lit /><Box x={90} y={74} w={136} text="Out of your control" /></>}
      {at === 3 && <Tags x={20} y={22} labels={["Me time", "Routine", "Mindfulness"]} lit={() => true} width={120} gap={32} />}
      {at === 4 && <Bubble x={100} y={96} text="One small change" width={120} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BurnFitNote(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Affecting daily life? Talk to a GP", "A fit note, counselling or support", "Blood tests can check other causes", "Bring your notes and stress diary", "Off over 7 days in a row: fit note"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Seeing a GP" title="What a GP can do" label="Talking to a GP" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A GP and a patient at a desk, with a fit note, a stress diary and a blood test">
      <Person x={52} y={152} scale={1} /><Person x={128} y={152} scale={1} fill={SOFT} />
      <rect x="20" y="150" width="140" height="8" rx="3" fill={INK} /><path d="M32 158 V184 M148 158 V184" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <><Box x={244} y={52} w={110} text="Talk to a GP" lit /><W x={244} y={88} size={10}>or NHS talking</W><W x={244} y={104} size={10}>therapies</W></>}
      {at === 1 && <Tags x={186} y={30} labels={["Fit note", "Counselling", "Support groups"]} lit={() => true} width={118} gap={36} />}
      {at === 2 && <g>
        <rect x="190" y="40" width="18" height="76" rx="9" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="193" y="80" width="12" height="33" rx="6" fill={INK} />
        <Tags x={222} y={34} labels={["Anaemia", "Diabetes", "Thyroid"]} lit={() => false} width={86} gap={34} />
      </g>}
      {at === 3 && <g>
        <rect x="192" y="26" width="104" height="110" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="192" y="26" width="10" height="110" rx="3" fill={INK} />
        <W x={250} y={50} size={10.5}>Stress diary</W>
        {[70, 88, 106, 124].map(y => <path key={y} d={`M214 ${y} H284`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}
      </g>}
      {at === 4 && <g>
        <rect x="198" y="18" width="88" height="70" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={242} y={38} size={10.5}>Fit note</W>
        {[54, 70].map(y => <path key={y} d={`M212 ${y} H272`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}
        {Array.from({ length: 8 }, (_, index) => <rect key={index} x={176 + index * 17} y="104" width="14" height="14" rx="3" fill={index < 7 ? INK : GOLD} />)}
        <W x={242} y={140} size={10}>More than 7 days</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** A side-on chair, its back on the left (or the right when `flip`). */
const Chair = ({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) => {
  const back = flip ? x + 20 : x - 20;
  return <g stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none"><path d={`M${x - 20} ${y + 14} H${x + 20}`} /><path d={`M${back} ${y + 14} V${y - 26}`} /><path d={`M${x - 16} ${y + 14} V${y + 40} M${x + 16} ${y + 14} V${y + 40}`} /></g>;
};

function BurnTherapyChairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Counselling, CBT or ACT can help", "Refer yourself; no diagnosis needed", "CBT: usually 5 to 15 sessions", "Counselling: 8 to 16 NHS sessions", "Catch it, check it, change it"];
  const nodes = [{ x: 252, y: 40, t: "Think" }, { x: 212, y: 106, t: "Feel" }, { x: 292, y: 106, t: "Act" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Talking therapies" title="Talking it through" label="Talking therapies" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people in chairs facing each other, talking, beside the kinds of therapy">
      <Chair x={60} y={140} /><Chair x={142} y={140} flip />
      <Person x={60} y={152} scale={0.9} /><Person x={142} y={152} scale={0.9} fill={SOFT} />
      {at === 0 && <Tags x={194} y={34} labels={["Counselling", "CBT", "ACT"]} lit={() => true} width={116} gap={38} />}
      {at === 1 && <><Box x={252} y={46} w={116} text="Refer yourself" lit /><W x={252} y={84} size={10.5}>18 or over</W><W x={252} y={102} size={9.5}>Registered with a GP</W><W x={252} y={120} size={9.5}>No diagnosis needed</W></>}
      {at === 2 && <g>
        <path d="M252 40 L212 106 L292 106 Z" stroke={SOFT} strokeWidth="3" fill="none" strokeLinejoin="round" />
        {nodes.map(node => <g key={node.t}><circle cx={node.x} cy={node.y} r="22" fill={INK} /><W x={node.x} y={node.y + 4} size={10} fill={WHITE}>{node.t}</W></g>)}
        <W x={252} y={152} size={10.5}>5 to 15 sessions</W>
      </g>}
      {at === 3 && <g>
        {Array.from({ length: 16 }, (_, index) => <circle key={index} cx={203 + (index % 8) * 14} cy={52 + Math.floor(index / 8) * 16} r="5" fill={index < 8 ? INK : SOFT} />)}
        <W x={252} y={106} size={10.5}>8 to 16 sessions</W>
        <W x={252} y={124} size={9.5}>50 to 60 minutes each</W>
      </g>}
      {at === 4 && <g>
        {["Catch it", "Check it", "Change it"].map((label, index) => <Box key={label} x={252} y={34 + index * 46} w={104} text={label} lit={index === 2} />)}
        <Chevron x={252} y={57} angle={90} color={GOLD} /><Chevron x={252} y={103} angle={90} color={GOLD} />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BurnBoundary(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Limits that protect time and energy", "Breaks, finish on time, switch off", "Tell your manager what is too much", "Prioritise; you cannot do everything", "Ask family to take a caring shift"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Boundaries" title="Saying no, without the guilt" label="Boundaries" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person inside a protective boundary line, with ways to keep time and energy safe">
      <ellipse cx="88" cy="112" rx="70" ry="66" fill={TINT} fillOpacity=".5" stroke={at === 0 ? GOLD : INK} strokeWidth="3" strokeDasharray="8 7" />
      <Person x={88} y={140} scale={1.3} />
      {at === 0 && <Tags x={186} y={40} labels={["Time", "Energy", "Wellbeing"]} lit={() => true} width={116} gap={38} />}
      {at === 1 && <g>
        <Phone x={208} y={58} /><Cross x={208} y={58} s={14} />
        <Clock x={276} y={58} r={22} hand={0} />
        <W x={208} y={100} size={9.5}>Switch off</W><W x={276} y={100} size={9.5}>Finish on time</W>
        <Box x={242} y={140} w={112} text="Take breaks" lit />
      </g>}
      {at === 2 && <><Bubble x={236} y={50} text="This is too much" width={124} /><Person x={268} y={156} scale={1.1} fill={SOFT} /></>}
      {at === 3 && <><Tags x={184} y={30} labels={["Most important", "Next", "Last"]} lit={index => index === 0} width={120} gap={34} /><W x={244} y={152} size={9.5}>Share tasks if you can</W></>}
      {at === 4 && <><Bubble x={232} y={40} text="Can you take a shift?" width={150} /><House x={248} y={170} w={84} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BurnPhased(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Keep in touch; think about adjustments", "A meeting to agree a plan and support", "Build up gradually, like reduced hours", "Breaks, flexible hours, check-ins", "Not straight back to the same pressure"];
  const bars = [34, 58, 82, 106];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Going back" title="Back to work, one step at a time" label="Going back to work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Bars building up step by step, like a phased return to work">
      <path d="M160 172 H310" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {bars.map((h, index) => <rect key={h} x={168 + index * 36} y={172 - h} width="28" height={h} rx="4" fill={at === 2 ? INK : at === 4 ? LINE : SOFT} opacity={at === 2 ? 0.55 + index * 0.15 : 1} />)}
      {at === 2 && <path d="M182 128 L218 104 L254 80 L290 56" stroke={GOLD} strokeWidth="3" fill="none" strokeDasharray="4 5" strokeLinecap="round" />}
      <W x={234} y={190} size={9.5}>Building up</W>
      {at === 0 && <><Phone x={36} y={62} /><Bubble x={98} y={38} text="How often?" width={92} /><W x={80} y={118} size={10}>Think about</W><W x={80} y={134} size={10}>adjustments</W></>}
      {at === 1 && <><Person x={46} y={150} /><Person x={112} y={150} fill={SOFT} /><rect x="18" y="150" width="122" height="8" rx="3" fill={INK} /><Box x={79} y={54} w={84} text="A plan" lit /></>}
      {at === 2 && <Tags x={10} y={32} labels={["Reduced hours", "Lighter workload", "Different work"]} lit={index => index === 0} width={134} gap={36} />}
      {at === 3 && <Tags x={10} y={22} labels={["More breaks", "Flexible hours", "Check-ins", "Access to Work"]} lit={() => true} width={134} gap={34} />}
      {at === 4 && <><Box x={78} y={50} w={136} text="Same high demands" /><W x={78} y={84} size={10}>may put you at risk</W><Box x={78} y={128} w={136} text="Outlets, support" lit /></>}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function BurnDayDial(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Sleep, exercise, food, managing stress", "Around 7 to 9 hours a night", "150 minutes a week; start gradually", "Do not rely on alcohol or caffeine", "Short breaks, a walk, simple stretches"];
  const cx = 92, cy = 104, R = 66;
  const point = (hour: number, r: number) => { const a = hour / 24 * 2 * Math.PI - Math.PI / 2; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
  const arc = (from: number, to: number, r: number) => { const [x1, y1] = point(from, r), [x2, y2] = point(to, r); const span = (to - from + 24) % 24; return `M${x1} ${y1} A${r} ${r} 0 ${span > 12 ? 1 : 0} 1 ${x2} ${y2}`; };
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Daily habits" title="Sleep, food and movement" label="Sleep, food and movement" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day drawn as a clock face, with a band for sleep and small moments for movement and breaks">
      <circle cx={cx} cy={cy} r={R} fill={WHITE} stroke={INK} strokeWidth="3" />
      {[0, 6, 12, 18].map(hour => { const [x1, y1] = point(hour, R - 4), [x2, y2] = point(hour, R - 12); return <path key={hour} d={`M${x1} ${y1} L${x2} ${y2}`} stroke={INK} strokeWidth="2.5" strokeLinecap="round" />; })}
      <path d={arc(23, 7, 52)} stroke={at === 1 ? INK : LINE} strokeWidth="12" fill="none" strokeLinecap="round" />
      <W x={cx} y={cy - 20} size={9.5}>Night</W><W x={cx} y={cy + 30} size={9.5}>Day</W>
      {at === 2 && <circle cx={point(13, 52)[0]} cy={point(13, 52)[1]} r="8" fill={GOLD} />}
      {at === 4 && [10.5, 13, 15.5].map(hour => <path key={hour} d={arc(hour - 0.35, hour + 0.35, 52)} stroke={GOLD} strokeWidth="12" fill="none" />)}
      {at === 0 && <Tags x={184} y={28} labels={["Sleep", "Exercise", "Food", "Managing stress"]} lit={() => true} width={124} gap={34} />}
      {at === 1 && <><Moon x={244} y={50} r={16} /><W x={244} y={104} size={16}>7 to 9 hours</W><W x={244} y={124} size={10.5}>a night</W><W x={244} y={150} size={9.5}>Same times each day</W></>}
      {at === 2 && <><Person x={244} y={84} scale={1} /><W x={244} y={128} size={15}>150 minutes</W><W x={244} y={146} size={10}>a week</W><W x={244} y={166} size={9.5}>Start gradually</W></>}
      {at === 3 && <g>
        <Cup x={216} y={58} /><Cross x={218} y={58} s={15} />
        <circle cx="278" cy="58" r="20" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="278" cy="58" r="11" fill="none" stroke={SOFT} strokeWidth="2.5" />
        <W x={246} y={114} size={10.5}>Balanced diet</W><W x={246} y={132} size={10.5}>Less caffeine</W>
      </g>}
      {at === 4 && <Tags x={184} y={36} labels={["Short breaks", "A walk", "Stretches"]} lit={() => true} width={124} gap={36} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BurnDuty(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A duty to assess stress and act on it", "Six areas, from demands to change", "Adjustments, and flexible working", "Review workloads and encourage breaks", "Spot the signs early and act on them"];
  const tiles = ["Demands", "Control", "Support", "Relationships", "Role", "Change"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Employers" title="What employers owe you" label="What employers can do" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Six areas of work an employer should manage, and what they can do to help">
      {tiles.map((tile, index) => { const x = 14 + (index % 3) * 100, y = 18 + Math.floor(index / 3) * 38; return <g key={tile}>
        <rect x={x} y={y} width="92" height="30" rx="8" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x + 46} y={y + 19} size={10} fill={at === 1 ? WHITE : TEXT}>{tile}</W>
      </g>; })}
      {at === 0 && <><Box x={96} y={130} w={150} text="Risk assessment" lit /><Arrow d="M178 130 H220" head="M213 124 L220 130 L213 136" /><Person x={256} y={150} /><W x={256} y={184} size={9.5}>Shared with you</W></>}
      {at === 1 && <><W x={160} y={130} size={11}>Six areas employers</W><W x={160} y={148} size={11}>should assess</W></>}
      {at === 2 && <><Box x={88} y={126} w={140} text="Adjustments" lit /><Box x={232} y={126} w={140} text="Flexible working" lit /><W x={88} y={160} size={9.5}>Even if not a disability</W><W x={232} y={160} size={9.5}>Ask from day one</W></>}
      {at === 3 && <><Box x={88} y={126} w={140} text="Review workloads" lit /><Box x={232} y={126} w={140} text="Encourage breaks" lit /><W x={160} y={164} size={10}>Counselling in work hours</W></>}
      {at === 4 && <><Box x={88} y={126} w={140} text="Spot the signs" lit /><Box x={232} y={126} w={140} text="Return to work" lit /><W x={160} y={164} size={10}>Keep workloads manageable</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BurnPlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Warning signs, coping, and support", "Spot it early; note what was happening", "Breaks, boundaries, people you trust", "Solve one problem in 5 or 10 minutes", "Not always preventable; not your fault"];
  const rows = ["Warning signs", "Coping", "Support"];
  const lit = [[0, 1, 2], [0], [1], [1], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Staying well" title="Stopping it coming back" label="Stopping burnout coming back" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A wellbeing plan on a clipboard, with early warning signs, coping and support">
      <rect x="20" y="26" width="136" height="154" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="64" y="16" width="48" height="18" rx="5" fill={INK} />
      {rows.map((row, index) => <g key={row}>
        <rect x="32" y={52 + index * 42} width="112" height="32" rx="8" fill={lit.includes(index) ? INK : TINT} stroke={INK} strokeWidth="1.5" />
        <W x={88} y={72 + index * 42} size={10.5} fill={lit.includes(index) ? WHITE : TEXT}>{row}</W>
      </g>)}
      {at === 0 && <><W x={240} y={52} size={11}>My wellbeing plan</W><Person x={240} y={150} scale={1.3} /></>}
      {at === 1 && <g>
        <rect x="218" y="22" width="44" height="114" rx="12" fill={INK} />
        {[44, 80, 116].map((y, index) => <circle key={y} cx="240" cy={y} r="13" fill={index === 1 ? GOLD : SOFT} />)}
        <W x={240} y={160} size={10.5}>Early signs</W>
      </g>}
      {at === 2 && <><Tags x={180} y={30} labels={["Breaks", "Boundaries", "People you trust"]} lit={() => true} width={126} gap={36} /><W x={243} y={160} size={9.5}>5 steps to wellbeing</W></>}
      {at === 3 && <g>
        <Clock x={240} y={72} r={30} hand={0} />
        <path d="M240 72 L240 46 A26 26 0 0 1 262.5 59 Z" fill={GOLD} opacity=".7" />
        <W x={240} y={126} size={10.5}>5 or 10 minutes</W><W x={240} y={144} size={10}>for one problem</W>
      </g>}
      {at === 4 && <><Sun x={240} y={58} r={16} /><W x={240} y={114} size={10.5}>Not always in</W><W x={240} y={130} size={10.5}>your control</W><W x={240} y={156} size={11}>Not your fault</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Carer stress ==========================================================================================

function CarerScales(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Practical help, or company and support", "Money, worry, isolation, broken sleep", "More exhausted, tense or irritable", "Recognise stress, and talk about it"];
  const tilt = [4, 14, 20, 0][at] * Math.PI / 180;
  const lx = 160 - 84 * Math.cos(tilt), ly = 86 + 84 * Math.sin(tilt), rx = 160 + 84 * Math.cos(tilt), ry = 86 - 84 * Math.sin(tilt);
  const pan = (x: number, y: number) => <g>
    <path d={`M${x} ${y} L${x - 34} ${y + 36} M${x} ${y} L${x + 34} ${y + 36}`} stroke={LINE} strokeWidth="2" />
    <path d={`M${x - 40} ${y + 36} Q${x} ${y + 58} ${x + 40} ${y + 36} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" />
  </g>;
  const weights = ["Money", "Worry", "Alone", "Sleep"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The quiet weight of caring" label="What carer stress is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A set of scales, with the weight of caring on one side and the carer on the other">
      <path d="M160 86 V180 M128 180 H192" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <path d={`M${lx} ${ly} L${rx} ${ry}`} stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <circle cx="160" cy="86" r="6" fill={GOLD} />
      {pan(lx, ly)}{pan(rx, ry)}
      {(at === 0 || at === 3) && <Box x={lx} y={ly + 24} w={64} h={22} text="Caring" size={10} />}
      {(at === 1 || at === 2) && weights.map((label, index) => <Box key={label} x={lx + (index % 2 === 0 ? -19 : 19)} y={ly + (index < 2 ? 26 : 4)} w={36} h={20} text={label} size={9.5} lit={at === 1} />)}
      <Person x={rx} y={ry + 36} scale={0.8} fill={at === 2 ? SOFT : INK} />
      {at === 0 && <Chips labels={["Practical help", "Company", "Watching over"]} lit={-1} y={12} />}
      {at === 1 && <W x={160} y={30} size={11}>The balance tips too far</W>}
      {at === 2 && <Chips labels={["Exhausted", "Tense", "Irritable"]} lit={-1} y={12} />}
      {at === 3 && <g>
        {[0, 1, 2, 3].map(index => <Person key={index} x={30 + index * 22} y={48} scale={0.55} fill={index < 3 ? INK : SOFT} />)}
        <W x={63} y={70} size={9.5}>Three quarters</W>
        <Bubble x={252} y={32} text="How I feel" width={92} />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CarerSignsBody(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Easy to miss when there is no time", "Racing thoughts, worry, forgetfulness", "Headaches, tension, a faster heartbeat", "Snappy, sleeping or eating differently", "Help is available right now"];
  const help = ["999 or A&E", "111, mental health", "Samaritans 116 123", "Text SHOUT to 85258"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Signs" title="Signs you might be missing" label="Signs of carer stress" credit={at === 4 ? crisisCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person, and where stress can show: in the mind, the body, sleep and what you do">
      {at < 4 && <Person x={96} y={164} scale={1.7} fill={at === 0 ? SOFT : INK} />}
      {at === 0 && <><Clock x={246} y={72} r={32} hand={1.9} /><W x={246} y={132} size={10.5}>Little time for you</W></>}
      {at === 1 && <><circle cx="96" cy="113" r="27" fill="none" stroke={GOLD} strokeWidth="3" /><Tags x={186} y={30} labels={["Racing thoughts", "Worry", "Forgetful"]} lit={() => true} width={118} gap={36} /></>}
      {at === 2 && <><circle cx="96" cy="113" r="27" fill="none" stroke={GOLD} strokeWidth="3" /><circle cx="96" cy="152" r="17" fill="none" stroke={GOLD} strokeWidth="3" /><Tags x={186} y={30} labels={["Headaches", "Tension", "Faster heartbeat"]} lit={() => true} width={118} gap={36} /></>}
      {at === 3 && <g>
        <Tags x={186} y={22} labels={["Snappy", "Sleep changes", "Eating changes"]} lit={() => true} width={118} gap={34} />
        <rect x="190" y="126" width="8" height="40" rx="3" fill={INK} /><rect x="190" y="148" width="116" height="14" rx="4" fill={INK} />
        <ellipse cx="216" cy="141" rx="13" ry="6" fill={SOFT} /><path d="M206 166 V176 M298 162 V176" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      </g>}
      {at === 4 && <g>
        <Person x={70} y={164} scale={1.3} /><Person x={112} y={170} scale={1} fill={SOFT} />
        <Bubble x={92} y={68} text="Tell someone" width={100} />
        {help.map((line, index) => <g key={line}><rect x="160" y={22 + index * 38} width="150" height="30" rx="10" fill={INK} /><W x={235} y={41 + index * 38} size={10.5} fill={WHITE}>{line}</W></g>)}
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CarerRightsShield(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Care Act: a right to an assessment", "Up to 1 week unpaid leave in 12 months", "Reasonable time off in an emergency", "Ask for flexible working from day one", "Protected from discrimination"];
  const rights = ["Carer's assessment", "Carer's leave", "Emergencies", "Flexible working", "Fair treatment"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your rights" title="Rights that are yours to use" label="Your rights as a carer" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A shield beside a list of a carer's rights: an assessment, leave, time off, flexible working and fair treatment">
      <path d="M26 26 H154 V98 C154 146 116 170 90 182 C64 170 26 146 26 98 Z" fill={INK} />
      {at === 0 && <g>
        <rect x="70" y="58" width="40" height="52" rx="4" fill="none" stroke={WHITE} strokeWidth="2.5" /><rect x="80" y="52" width="20" height="10" rx="3" fill={WHITE} />
        {[76, 88, 100].map(y => <path key={y} d={`M78 ${y} H102`} stroke={WHITE} strokeWidth="2.5" strokeLinecap="round" />)}
        <W x={90} y={140} size={11} fill={WHITE}>Care Act</W>
      </g>}
      {at === 1 && <><W x={90} y={96} size={18} fill={WHITE}>1 week</W><W x={90} y={118} size={10} fill={WHITE}>unpaid leave</W><W x={90} y={136} size={9.5} fill={WHITE}>every 12 months</W></>}
      {at === 2 && <g>
        <circle cx="90" cy="86" r="24" fill="none" stroke={WHITE} strokeWidth="3" />
        <path d="M90 72 V90" stroke={GOLD} strokeWidth="4" strokeLinecap="round" /><circle cx="90" cy="100" r="3" fill={GOLD} />
        <W x={90} y={138} size={11} fill={WHITE}>Time off</W>
      </g>}
      {at === 3 && <g>
        <circle cx="90" cy="86" r="24" fill="none" stroke={WHITE} strokeWidth="3" />
        <path d="M90 86 V70 M90 86 L102 92" stroke={WHITE} strokeWidth="3" strokeLinecap="round" />
        <W x={90} y={136} size={10.5} fill={WHITE}>From day one</W>
      </g>}
      {at === 4 && <g>
        <path d="M70 78 H110 M70 94 H110" stroke={GOLD} strokeWidth="5" strokeLinecap="round" />
        <W x={90} y={134} size={10.5} fill={WHITE}>Equality Act</W>
      </g>}
      <Tags x={168} y={20} labels={rights} lit={index => index === at} width={140} gap={34} />
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function CarerAssessmentTalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Free, and anyone over 18 can ask", "Ask the council, by phone or online", "List the ways you support them", "At least an hour; be honest", "If you qualify, a support plan"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Carer's assessment" title="A conversation, not a test" label="The carer's assessment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A carer and someone from the council talking at a table about how caring affects them">
      <Person x={60} y={162} /><Person x={260} y={162} fill={SOFT} />
      <rect x="100" y="150" width="120" height="8" rx="3" fill={INK} /><path d="M112 158 V184 M208 158 V184" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <rect x="148" y="128" width="24" height="22" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />
      {at === 0 && <><Box x={110} y={48} w={90} text="Free" lit /><Box x={214} y={48} w={100} text="Over 18" lit /><W x={160} y={94} size={11}>Not a test</W></>}
      {at === 1 && <g>
        <Phone x={124} y={56} lit />
        <rect x="178" y="40" width="56" height="36" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M170 80 H242" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <W x={160} y={106} size={10.5}>Adult social services</W>
      </g>}
      {at === 2 && <g>
        <rect x="96" y="12" width="128" height="104" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={160} y={32} size={10.5}>How I help</W>
        {["Emotional support", "Managing money", "Personal needs"].map((line, index) => <g key={line}><Tick x={114} y={54 + index * 22} s={5} /><W x={126} y={58 + index * 22} size={9.5} anchor="start">{line}</W></g>)}
      </g>}
      {at === 3 && <><circle cx="160" cy="56" r="35" fill="none" stroke={GOLD} strokeWidth="3" /><Clock x={160} y={56} r={28} hand={0} /><W x={160} y={112} size={10.5}>At least an hour</W></>}
      {at === 4 && <g>
        <rect x="110" y="14" width="100" height="90" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={160} y={34} size={10.5}>Support plan</W>
        {[52, 68].map(y => <path key={y} d={`M124 ${y} H196`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}
        <Tick x={186} y={88} s={9} />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CarerRespiteWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Breaks stop you becoming run down", "Sitting, day care, or a short stay", "Councils fund breaks after assessment", "Some are free; ask about grants", "Leave notes on meals and medicines"];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Breaks" title="Time out is not giving up" label="Breaks and respite" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week with time set aside for a break, and the kinds of respite care">
      {days.map((day, index) => <g key={index}>
        <W x={43 + index * 40} y={22} size={10}>{day}</W>
        <rect x={26 + index * 40} y="30" width="34" height="46" rx="6" fill={index === 2 && at === 0 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
      </g>)}
      <g><rect x="114" y="45" width="17" height="18" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M131 49 h3 a4 4 0 0 1 0 9 h-3" fill="none" stroke={INK} strokeWidth="2.5" /></g>
      {at === 0 && <><W x={160} y={112} size={10.5}>Time apart can help them too</W><Person x={110} y={174} /><Person x={210} y={174} fill={SOFT} /></>}
      {at === 1 && <><Chips labels={["Sitting", "Day care", "Short stay"]} lit={0} y={100} /><W x={160} y={160} size={10}>Night sitting, for a proper sleep</W></>}
      {at === 2 && <><Box x={88} y={126} w={150} text="Carer's assessment" lit /><Box x={240} y={126} w={134} text="Needs assessment" lit /><W x={160} y={166} size={10}>Then the council may fund it</W></>}
      {at === 3 && <><circle cx="88" cy="140" r="26" fill={GOLD} /><W x={88} y={148} size={22} fill={WHITE}>£</W><Box x={218} y={122} w={140} text="Some are free" /><Box x={218} y={160} w={140} text="Grants" lit /></>}
      {at === 4 && <g>
        <rect x="84" y="92" width="152" height="94" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={160} y={112} size={10.5}>For whoever steps in</W>
        {["Mealtimes", "Medicines", "Contacts"].map((line, index) => <g key={line}><circle cx="108" cy={130 + index * 18} r="4" fill={GOLD} /><W x={118} y={134 + index * 18} size={10} anchor="start">{line}</W></g>)}
      </g>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function CarerHours(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Caring at least 35 hours a week", "16 or over; earn £204 or less a week", "20 hours a week? Carer's Credit", "It can affect other benefits", "Report changes, to avoid overpayment"];
  const allowance = at !== 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Money" title="Money you may be missing" label="Money help for carers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two bars: 35 hours a week for Carer's Allowance and 20 hours for Carer's Credit">
      <W x={20} y={32} size={10.5} anchor="start">{"Carer's Allowance"}</W>
      <rect x="20" y="40" width="175" height="26" rx="6" fill={allowance ? INK : SOFT} />
      <W x={30} y={57} size={10.5} anchor="start" fill={WHITE}>35 hours a week</W>
      <W x={20} y={90} size={10.5} anchor="start">{"Carer's Credit"}</W>
      <rect x="20" y="98" width="100" height="26" rx="6" fill={allowance ? SOFT : INK} />
      <W x={30} y={115} size={10.5} anchor="start" fill={WHITE}>20 hours</W>
      {at === 0 && <><circle cx="250" cy="53" r="20" fill={GOLD} /><W x={250} y={60} size={18} fill={WHITE}>£</W><Box x={160} y={160} w={220} text="They get certain benefits" /></>}
      {at === 1 && <><Box x={90} y={158} w={130} text="16 or over" lit /><Box x={234} y={158} w={140} text="£204 or less a week" lit /></>}
      {at === 2 && <g>
        <rect x="214" y="84" width="96" height="62" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={262} y={104} size={10}>National</W><W x={262} y={120} size={10}>Insurance</W><W x={262} y={136} size={10}>credits</W>
        <W x={160} y={170} size={10.5}>Savings do not affect it</W>
      </g>}
      {at === 3 && <><W x={160} y={146} size={10}>Totals usually go up or stay the same</W><Box x={84} y={172} w={136} text={"Carer's Allowance"} lit /><Arrow d="M156 172 H184" head="M177 166 L184 172 L177 178" /><Box x={246} y={172} w={116} text="Other benefits" /></>}
      {at === 4 && <><Box x={160} y={152} w={160} text="Report any change" lit /><W x={160} y={182} size={10}>Even £1 over the limit matters</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function CarerGpRecord(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tell your GP, so it is on your record", "Referrals and more tailored advice", "You should be offered a free flu jab", "A health check, and talk about mood", "Double appointments save time"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your GP" title="Put caring on your record" label="Telling your GP" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A GP record with the carer box ticked, and the help that can follow">
      <rect x="18" y="22" width="150" height="148" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="18" y="22" width="150" height="26" rx="6" fill={INK} />
      <W x={93} y={40} size={10.5} fill={WHITE}>My GP record</W>
      {[66, 82].map(y => <path key={y} d={`M34 ${y} H150`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}
      <rect x="34" y="100" width="20" height="20" rx="4" fill={WHITE} stroke={at === 0 ? GOLD : INK} strokeWidth="2.5" /><Tick x={44} y={110} s={6} />
      <W x={64} y={115} size={12} anchor="start">Carer</W>
      {[140, 154].map(y => <path key={y} d={`M34 ${y} H150`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}
      {at === 0 && <><rect x="210" y="46" width="76" height="50" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M210 46 L248 74 L286 46" stroke={INK} strokeWidth="2.5" fill="none" strokeLinejoin="round" /><W x={248} y={120} size={10}>Letter template</W></>}
      {at === 1 && <Tags x={188} y={30} labels={["Local support", "Specialists", "Home visits"]} lit={() => true} width={120} gap={36} />}
      {at === 2 && <g>
        <g transform="rotate(-25 248 66)"><rect x="216" y="55" width="64" height="22" rx="11" fill={TINT} stroke={INK} strokeWidth="2" /><rect x="238" y="55" width="20" height="22" fill={WHITE} stroke={INK} strokeWidth="2" /></g>
        <W x={248} y={120} size={11}>Free flu jab</W><W x={248} y={138} size={10}>GP or pharmacy</W>
      </g>}
      {at === 3 && <><HeartShape x={248} y={66} size={48} fill={GOLD} stroke={GOLD} width={2} /><W x={248} y={118} size={11}>Health check</W><W x={248} y={136} size={10}>Mood, stress, sleep</W></>}
      {at === 4 && <g>
        <rect x="204" y="40" width="40" height="48" rx="6" fill={INK} /><rect x="252" y="40" width="40" height="48" rx="6" fill={INK} />
        <Person x={224} y={78} scale={0.6} fill={WHITE} /><Person x={272} y={78} scale={0.6} fill={WHITE} />
        <W x={248} y={114} size={10}>Double appointments</W>
        <Pill x={248} y={144} />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CarerGroup(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Refer yourself if 18 or over", "Guided self-help, CBT or counselling", "Others may feel the same way", "Helplines for advice, or to listen"];
  const seats = [-90, -30, 30, 90, 150, 210].map(a => ({ x: 104 + 58 * Math.cos(a * Math.PI / 180), y: 112 + 58 * Math.sin(a * Math.PI / 180) + 10 }));
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="Talk to someone who gets it" label="Talking and support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A circle of carers around a table, and where to find talking therapy and helplines">
      <circle cx="104" cy="112" r="26" fill={TINT} stroke={INK} strokeWidth="2" />
      {seats.map((seat, index) => <Person key={index} x={seat.x} y={seat.y} scale={0.62} fill={at === 2 || index === 3 ? INK : SOFT} />)}
      {at === 2 && <Cup x={104} y={112} />}
      {at === 0 && <><Box x={254} y={46} w={112} text="Refer yourself" lit /><W x={254} y={82} size={10.5}>18 or over</W><W x={254} y={100} size={9.5}>16 in some areas</W><W x={254} y={118} size={9.5}>Registered with a GP</W></>}
      {at === 1 && <Tags x={196} y={30} labels={["Guided self-help", "CBT", "Counselling"]} lit={() => true} width={116} gap={36} />}
      {at === 2 && <Bubble x={250} y={46} text="Me too" width={80} />}
      {at === 3 && <g>
        <rect x="192" y="22" width="118" height="60" rx="10" fill={INK} />
        <W x={251} y={48} size={12} fill={WHITE}>0808 808 7777</W><W x={251} y={68} size={10} fill={WHITE}>Carers UK</W>
        <rect x="192" y="94" width="118" height="60" rx="10" fill={INK} />
        <W x={251} y={122} size={14} fill={WHITE}>116 123</W><W x={251} y={142} size={10} fill={WHITE}>Samaritans</W>
      </g>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function CarerSelfCare(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["42 in 100 said their health suffered", "Regular bedtime; devices away from bed", "A walk, or 10 minutes of yoga", "Regular meals; less caffeine, alcohol", "Ask about training in safer lifting"];
  const spots = [{ x: 60, y: 50, t: "Sleep" }, { x: 260, y: 50, t: "Moving more" }, { x: 60, y: 136, t: "Food and drink" }, { x: 260, y: 136, t: "Your back" }];
  const icon = (index: number, x: number, y: number, c: string) => [
    <Moon key="s" x={x} y={y} r={12} fill={c} />,
    <path key="m" d={`M${x - 14} ${y + 8} L${x - 12} ${y - 8} H${x - 4} L${x + 2} ${y} H${x + 10} a4 4 0 0 1 4 4 V${y + 8} Z`} fill={c} />,
    <g key="f"><circle cx={x + 3} cy={y} r="12" fill="none" stroke={c} strokeWidth="2.5" /><circle cx={x + 3} cy={y} r="6" fill="none" stroke={c} strokeWidth="2" /><path d={`M${x - 15} ${y - 12} V${y + 12}`} stroke={c} strokeWidth="2.5" strokeLinecap="round" /></g>,
    <g key="b"><rect x={x - 11} y={y - 2} width="22" height="14" rx="2" fill={c} /><path d={`M${x} ${y - 6} V${y - 16} M${x - 5} ${y - 11} L${x} ${y - 16} L${x + 5} ${y - 11}`} stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>,
  ][index];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your health" title="Look after the one who cares" label="Looking after your health" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A carer at the centre of four things to look after: sleep, moving more, food and drink, and their back">
      {at === 0 ? <g>
        {Array.from({ length: 100 }, (_, index) => <circle key={index} cx={40 + (index % 10) * 13} cy={32 + Math.floor(index / 10) * 13} r="4.6" fill={index < 42 ? INK : LINE} />)}
        <W x={238} y={84} size={20}>42 in 100</W>
        <W x={238} y={106} size={10}>carers said their</W>
        <W x={238} y={122} size={9.5}>physical health suffered</W>
      </g> : <g>
        <Person x={160} y={126} scale={1.4} />
        {spots.map((spot, index) => { const lit = index === at - 1; return <g key={spot.t}>
          <circle cx={spot.x} cy={spot.y} r="26" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
          {icon(index, spot.x, spot.y, lit ? WHITE : INK)}
          <W x={spot.x} y={spot.y + 42} size={10}>{spot.t}</W>
        </g>; })}
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CarerWorkHome(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Nearly 3 million balance work and care", "Give at least 3 days' notice for a day", "Time off when usual care breaks down", "Flexi-time, home working, part time", "Telling your employer is your choice"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work" title="Making work and care fit" label="Work and caring" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path between a desk at work and a home, with ways to fit work and caring together">
      <Desk x={70} y={182} w={90} /><House x={252} y={182} w={80} />
      <path d="M122 172 H206" stroke={GOLD} strokeWidth="3" strokeDasharray="3 7" strokeLinecap="round" />
      <Person x={164} y={164} scale={0.8} />
      {at === 0 && <><W x={160} y={52} size={20}>Nearly 3 million</W><W x={160} y={74} size={10.5}>people in the UK</W></>}
      {at === 1 && <g>
        {Array.from({ length: 7 }, (_, index) => <rect key={index} x={56 + index * 30} y="24" width="26" height="26" rx="5" fill={index === 5 ? INK : index >= 2 && index <= 4 ? GOLD : WHITE} fillOpacity={index >= 2 && index <= 4 ? 0.55 : 1} stroke={INK} strokeWidth="2" />)}
        <W x={160} y={76} size={10.5}>{"3 days' notice, then leave"}</W>
      </g>}
      {at === 2 && <><Phone x={160} y={44} lit /><path d="M134 32 A30 30 0 0 0 134 56 M186 32 A30 30 0 0 1 186 56" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" /><W x={160} y={84} size={10.5}>Reasonable time off</W></>}
      {at === 3 && <><Box x={60} y={34} w={96} text="Flexi-time" lit /><Box x={163} y={34} w={96} text="From home" lit /><Box x={264} y={34} w={96} text="Part time" lit /><Box x={163} y={72} w={150} text="Compressed hours" /></>}
      {at === 4 && <><Bubble x={160} y={44} text="Your choice" width={110} /><W x={160} y={92} size={10}>{"Your workplace may have a carer's policy"}</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CarerEmergencyPlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Who could step in for a few hours?", "Contacts, medicines, allergies, GP", "Share it, and keep it up to date", "Emergency card schemes, in some areas", "Anyone at immediate risk? Call 999"];
  const rows = ["Contacts", "Medicines", "Allergies", "GP, pharmacy", "Door keys"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Emergency plan" title="A plan for if you cannot be there" label="An emergency plan" credit={at === 4 ? crisisCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A written emergency plan, and someone ready to step in">
      <g opacity={at === 0 ? 0.45 : 1}>
        <rect x="18" y="18" width="132" height="166" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={84} y={40} size={10.5}>Emergency plan</W>
        {rows.map((row, index) => <g key={row}><circle cx="32" cy={62 + index * 24} r="4.5" fill={at === 1 && index < 4 ? GOLD : SOFT} /><W x={42} y={66 + index * 24} size={10} anchor="start">{row}</W></g>)}
      </g>
      {at === 0 && <><Person x={204} y={164} /><Person x={276} y={164} fill={SOFT} /><Bubble x={248} y={62} text="I can step in" width={112} /></>}
      {at === 1 && <g>
        <Pill x={210} y={62} />
        <circle cx="266" cy="62" r="10" fill="none" stroke={INK} strokeWidth="3" /><path d="M276 62 H300 M294 62 V70 M300 62 V68" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <W x={240} y={112} size={10.5}>Leave notes</W><W x={240} y={130} size={9.5}>where they are easy to see</W>
      </g>}
      {at === 2 && <g>
        {[0, 1, 2].map(index => <g key={index}><rect x={184 + index * 38} y="34" width="40" height="52" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" /><path d={`M${192 + index * 38} 52 H${216 + index * 38} M${192 + index * 38} 64 H${210 + index * 38}`} stroke={LINE} strokeWidth="2.5" strokeLinecap="round" /></g>)}
        <W x={242} y={118} size={11}>Share copies</W><W x={242} y={136} size={9.5}>Review it now and then</W>
      </g>}
      {at === 3 && <><rect x="180" y="34" width="128" height="72" rx="10" fill={INK} /><W x={244} y={64} size={11} fill={WHITE}>Emergency</W><W x={244} y={82} size={11} fill={WHITE}>card</W><Clock x={216} y={144} r={18} hand={2} /><W x={270} y={148} size={10.5}>24 hours</W></>}
      {at === 4 && <><Box x={240} y={56} w={130} h={40} text="Call 999" size={14} lit /><Box x={240} y={110} w={130} text="NHS 111" /><W x={240} y={150} size={9.5}>Emergency duty team</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function CarerUpsDowns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Feelings can change, day to day", "Nobody is perfect; you are human", "Resentment does not make you bad", "Grief for who someone used to be", "Talk it through; do not bottle it up"];
  const track = "M10 150 C40 150, 50 70, 90 70 S130 160, 170 160 S220 60, 250 60 S290 130, 310 130";
  const fade = at >= 3 ? 0.22 : at > 0 ? 0.45 : 1;
  const cart = [[90, 60], [170, 150], [30, 140], [0, 0], [0, 0]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Feelings" title="Mixed feelings are normal" label="Feelings about caring" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A rollercoaster of ups and downs, and two people talking things through on a bench">
      <g opacity={fade}><path d={track} stroke={INK} strokeWidth="6" fill="none" strokeLinecap="round" /><path d={track} stroke={WHITE} strokeWidth="2" fill="none" strokeDasharray="2 8" /></g>
      {at < 3 && <circle cx={cart[0]} cy={cart[1]} r="9" fill={GOLD} stroke={WHITE} strokeWidth="3" />}
      {at === 0 && <><Sun x={250} y={30} r={9} /><Cloud x={170} y={128} s={14} /></>}
      {at === 1 && <Bubble x={170} y={30} text="Nobody is perfect" width={136} />}
      {at === 2 && <Bubble x={176} y={30} text="Natural and common" width={140} />}
      {at === 3 && <><Person x={128} y={150} scale={1.3} /><Ghost x={194} y={150} scale={1.3} /></>}
      {at === 4 && <><Bench x={160} y={164} w={104} /><Person x={138} y={160} scale={0.9} /><Person x={182} y={160} scale={0.9} fill={SOFT} /><Bubble x={236} y={72} text="Talk it through" width={120} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function StrainPieceView({ piece, ...props }: { piece: StrainPiece } & PieceProps) {
  switch (piece) {
    case "burn-tank": return <BurnTank {...props} />;
    case "burn-four-signs": return <BurnFourSigns {...props} />;
    case "burn-load": return <BurnLoad {...props} />;
    case "burn-desk-home": return <BurnDeskHome {...props} />;
    case "burn-stones": return <BurnStones {...props} />;
    case "burn-fit-note": return <BurnFitNote {...props} />;
    case "burn-therapy-chairs": return <BurnTherapyChairs {...props} />;
    case "burn-boundary": return <BurnBoundary {...props} />;
    case "burn-phased": return <BurnPhased {...props} />;
    case "burn-day-dial": return <BurnDayDial {...props} />;
    case "burn-duty": return <BurnDuty {...props} />;
    case "burn-plan": return <BurnPlan {...props} />;
    case "carer-scales": return <CarerScales {...props} />;
    case "carer-signs-body": return <CarerSignsBody {...props} />;
    case "carer-rights-shield": return <CarerRightsShield {...props} />;
    case "carer-assessment-talk": return <CarerAssessmentTalk {...props} />;
    case "carer-respite-week": return <CarerRespiteWeek {...props} />;
    case "carer-hours": return <CarerHours {...props} />;
    case "carer-gp-record": return <CarerGpRecord {...props} />;
    case "carer-group": return <CarerGroup {...props} />;
    case "carer-self-care": return <CarerSelfCare {...props} />;
    case "carer-work-home": return <CarerWorkHome {...props} />;
    case "carer-emergency-plan": return <CarerEmergencyPlan {...props} />;
    case "carer-ups-downs": return <CarerUpsDowns {...props} />;
  }
}
