import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { BALANCE_PIECES, type BalancePiece } from "@/content/balance-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Bipolar disorder, Psychosis and Eating disorders pages' own pieces (content/balance-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Mind & mood pieces. Each is steered by the card's sections; pictures are
// calm and hopeful and never show anyone's own thoughts, body or harm. The eating disorder pictures follow Beat's
// media guidelines: no bodies, scales, plates, food amounts or numbers about weight.

export const isBalancePiece = (piece: NewsPiece): piece is BalancePiece => (BALANCE_PIECES as readonly string[]).includes(piece);

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 204, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Sun = ({ x, y, r = 12, className }: { x: number; y: number; r?: number; className?: string }) =>
  <g className={className}>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 11} y={y - 18} width="22" height="36" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 11} r="2.2" fill={lit ? WHITE : INK} /></g>;
const Cloud = ({ x, y, s, opacity = 1 }: { x: number; y: number; s: number; opacity?: number }) =>
  <g opacity={opacity} fill={SOFT}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
/** A blood drop centred on (x, y). */
const Drop = ({ x, y, fill = INK }: { x: number; y: number; fill?: string }) =>
  <path d={`M${x} ${y - 11} C${x + 8} ${y - 1}, ${x + 8} ${y + 8}, ${x} ${y + 8} C${x - 8} ${y + 8}, ${x - 8} ${y - 1}, ${x} ${y - 11} Z`} fill={fill} />;
/** A side-on car with its wheels, `x` the left edge and `y` the roof. */
const Car = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><path d={`M${x} ${y + 32} V${y + 18} Q${x} ${y + 12} ${x + 6} ${y + 12} H${x + 18} L${x + 28} ${y} H${x + 58} L${x + 70} ${y + 12} H${x + 78} Q${x + 84} ${y + 12} ${x + 84} ${y + 18} V${y + 32} Z`} fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx={x + 18} cy={y + 34} r="7" fill={INK} stroke={WHITE} strokeWidth="2" /><circle cx={x + 66} cy={y + 34} r="7" fill={INK} stroke={WHITE} strokeWidth="2" /></g>;
const Case = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><path d={`M${x - 10} ${y - 18} V${y - 26} H${x + 10} V${y - 18}`} stroke={INK} strokeWidth="3" fill="none" /><rect x={x - 28} y={y - 18} width="56" height="38" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /></g>;
/** A seat under a person sitting at (x, y). */
const Seat = ({ x, y }: { x: number; y: number }) => <g><rect x={x - 20} y={y + 8} width="40" height="6" rx="3" fill={INK} /><path d={`M${x - 14} ${y + 14} V${y + 28} M${x + 14} ${y + 14} V${y + 28}`} stroke={INK} strokeWidth="3" /></g>;

// ==== Bipolar disorder ======================================================================================

function BpdMoodScale(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Highs and lows, days to months each", "Far beyond everyday ups and downs", "Stable times: weeks, months or years", "Everyday moods sit from 4 to 6", "About 1 in 50 adults; treatment helps"];
  const wave = "M64 95 H92 C104 95, 108 51, 120 51 S136 95, 148 95 H184 C196 95, 200 139, 212 139 S228 95, 240 95 H304";
  let ripple = "M64 95";
  for (let index = 0; index < 12; index++) ripple += ` Q${74 + index * 20} ${index % 2 ? 102 : 88} ${84 + index * 20} 95`;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Highs, lows and the time between" label="What bipolar disorder is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A mood line on a scale from 0 to 10, swinging high and low with steady stretches between">
      {at === 3 && <><rect x="58" y="40" width="250" height="33" fill={TINT} /><rect x="58" y="117" width="250" height="33" fill={TINT} /></>}
      <rect x="58" y="84" width="250" height="22" fill={at === 3 ? SOFT : TINT} opacity={at === 3 ? 0.55 : 1} />
      <path d="M58 40 V150 H308" stroke={LINE} strokeWidth="2.5" fill="none" />
      {at === 3
        ? <><W x={12} y={60} size={10} anchor="start">7 to 10</W><W x={12} y={99} size={10} anchor="start">4 to 6</W><W x={12} y={138} size={10} anchor="start">0 to 3</W></>
        : <><W x={12} y={48} size={10} anchor="start">High</W><W x={12} y={99} size={10} anchor="start">Middle</W><W x={12} y={150} size={10} anchor="start">Low</W></>}
      <path d={wave} stroke={at === 4 ? LINE : INK} strokeWidth="4" fill="none" strokeLinecap="round" />
      {at === 1 && <path d={ripple} stroke={GOLD} strokeWidth="3" fill="none" />}
      {at === 2 && <path d="M64 95 H92 M148 95 H184 M240 95 H304" stroke={GOLD} strokeWidth="7" strokeLinecap="round" />}
      {at === 0 && <><circle cx="120" cy="51" r="7" fill={GOLD} /><circle cx="212" cy="139" r="7" fill={GOLD} /></>}
      {at === 4 && <path d="M64 95 C90 95, 100 80, 120 80 S150 95, 160 95 S196 110, 212 110 S240 95, 260 95 H304" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" />}
      <Say y={186}>{caps[at]}</Say>
    </svg>} />;
}

function BpdHighColumn(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Hypomania, then mania above it", "Energy, little sleep, racing thoughts", "Impulsive choices and big spending", "Others usually notice before you do", "Urgent: 111, mental health option"];
  const bands = [{ y: 26, h: 40, t: "Mania", fill: INK, o: 0.85 }, { y: 70, h: 40, t: "Hypomania", fill: SOFT, o: 0.9 }, { y: 114, h: 62, t: "Balanced", fill: TINT, o: 1 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mania and hypomania" title="When a high goes too high" label="Mania and hypomania" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A column of moods from balanced up to hypomania and mania, with what a high can bring">
      {bands.map(band => <rect key={band.t} x="40" y={band.y} width="44" height={band.h} rx="10" fill={band.fill} opacity={band.o} stroke={INK} strokeWidth="2" />)}
      <circle cx="62" cy={at >= 3 ? 46 : 90} r="9" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      {at === 0 && bands.map((band, index) => <W key={band.t} x={98} y={[50, 94, 149][index]} size={11} anchor="start">{band.t}</W>)}
      {at === 1 && <Tags x={112} y={32} width={196} labels={["Lots of energy", "Little need for sleep", "Racing thoughts", "Talking quickly"]} lit={() => false} />}
      {at === 2 && <Tags x={112} y={40} width={196} labels={["Impulsive decisions", "Spending lots of money", "Grand, unrealistic plans"]} lit={() => false} />}
      {at === 3 && <g>
        <Person x={150} y={150} fill={SOFT} /><Person x={210} y={150} /><Person x={270} y={150} />
        <circle cx="210" cy="120" r="17" fill="none" stroke={GOLD} strokeWidth="3" /><circle cx="270" cy="120" r="17" fill="none" stroke={GOLD} strokeWidth="3" />
      </g>}
      {at === 4 && <Tags x={112} y={40} width={196} labels={["111, mental health option", "Your local crisis team", "999 or A&E"]} lit={() => true} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BpdLowValley(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["More intense, and lasting longer", "Low energy, hopeless, hard to decide", "A mild low can be hidden, and tiring", "Severe lows can need urgent help", "Tell someone: help is there any hour"];
  const tiles = [{ x: 88, y: 24, t: "999 or A&E" }, { x: 232, y: 24, t: "111, mental health" }, { x: 88, y: 58, t: "Samaritans 116 123" }, { x: 232, y: 58, t: "Text SHOUT to 85258" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The lows" title="The lows, and help at any hour" label="Bipolar depression" credit="Illustration: Rehyn. In danger now? Call 999 or go to A&E."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path dipping into a long, low valley, with the people to contact for help">
      {at === 0 && <path d="M20 86 C90 86, 100 108, 160 108 S230 86, 300 86" stroke={LINE} strokeWidth="3" strokeDasharray="6 6" fill="none" />}
      <path d="M20 86 C90 86, 100 160, 160 160 S230 86, 300 86" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
      {(at === 0 || at === 1) && <circle cx="160" cy="160" r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" />}
      {at === 1 && <><Box x={90} y={24} w={120} text="Sad or upset" /><Box x={230} y={24} w={120} text="Very tired" /><Box x={90} y={54} w={120} text="Hopeless" /><Box x={230} y={54} w={120} text="Hard to decide" /></>}
      {(at === 2 || at === 3) && <><Person x={160} y={146} scale={0.9} /><circle cx="160" cy="119" r="20" fill="none" stroke={at === 2 ? SOFT : GOLD} strokeWidth="3" strokeDasharray={at === 2 ? "4 5" : undefined} /></>}
      {at === 2 && <Person x={276} y={72} scale={0.9} fill={SOFT} />}
      {at === 3 && <Box x={160} y={40} w={130} text="Urgent support" lit />}
      {at === 4 && <>{tiles.map((tile, index) => <Box key={tile.t} x={tile.x} y={tile.y} w={136} h={28} text={tile.t} lit={index === 0} />)}<circle cx="226" cy="123" r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" /></>}
      <Say y={200}>{caps[at]}</Say>
    </svg>} />;
}

function BpdThreeLines(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A psychiatrist makes the diagnosis", "At least one manic episode", "Hypomania and severe lows, no mania", "Milder swings, for at least 2 years", "Rapid cycling: 4 or more in a year"];
  const typeOne = (y: number) => `M92 ${y} C112 ${y}, 116 ${y - 24}, 130 ${y - 24} S148 ${y}, 162 ${y} C182 ${y}, 186 ${y + 22}, 204 ${y + 22} S224 ${y}, 238 ${y} H304`;
  const typeTwo = (y: number) => `M92 ${y} C104 ${y}, 108 ${y - 10}, 118 ${y - 10} S130 ${y}, 140 ${y} C164 ${y}, 170 ${y + 22}, 200 ${y + 22} S236 ${y}, 250 ${y} H304`;
  const ripples = (y: number) => { let d = `M92 ${y}`; for (let index = 0; index < 10; index++) d += ` Q${92 + 21.2 * index + 10.6} ${y + (index % 2 ? 9 : -9)} ${92 + 21.2 * (index + 1)} ${y}`; return d; };
  const rows = [{ y: 46, t: "Type I", d: typeOne(46) }, { y: 98, t: "Type II", d: typeTwo(98) }, { y: 150, t: "Cyclothymia", d: ripples(150) }];
  let rapid = "M30 70";
  for (let index = 0; index < 8; index++) rapid += ` Q${30 + 32.5 * index + 16.25} ${70 + (index % 2 ? 22 : -22)} ${30 + 32.5 * (index + 1)} 70`;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The types" title="Bipolar I, bipolar II and cyclothymia" label="Types of bipolar" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three mood lines: tall swings for type I, deep lows for type II and gentle ripples for cyclothymia">
      {at < 4 && rows.map((row, index) => { const on = at === 0 || at === index + 1; return <g key={row.t}>
        <path d={`M92 ${row.y} H304`} stroke={LINE} strokeWidth="1.5" strokeDasharray="3 5" />
        <path d={row.d} stroke={on ? INK : LINE} strokeWidth={on ? 3.5 : 2.5} fill="none" strokeLinecap="round" />
        <W x={12} y={row.y + 4} size={10.5} anchor="start" fill={on ? TEXT : SOFT}>{row.t}</W>
      </g>; })}
      {at === 4 && <g>
        <path d={rapid} stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M30 104 V110 H290 V104" stroke={GOLD} strokeWidth="3" fill="none" />
        <W x={160} y={128} size={10.5}>12 months</W>
        <Box x={92} y={160} w={140} text="Mixed features" /><Box x={236} y={160} w={140} text="Seasonal pattern" />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BpdLevelBar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Lithium evens out highs and lows", "Weekly tests, then every 3 to 6 months", "Drink plenty, especially when hot", "Signs of too high a level: 999 or A&E", "Do not stop suddenly, even if well"];
  const mark = [160, 160, 226, 272, 160][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood stabilisers" title="Keeping lithium in the steady zone" label="Lithium and other mood stabilisers" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bar from too low to too high with the right level in the middle, and what keeps lithium there">
      <rect x="24" y="50" width="96" height="28" rx="8" fill={WHITE} stroke={LINE} strokeWidth="2" />
      <rect x="124" y="50" width="72" height="28" rx="8" fill={TINT} stroke={INK} strokeWidth="2.5" />
      <rect x="200" y="50" width="96" height="28" rx="8" fill={at === 3 ? SOFT : WHITE} stroke={LINE} strokeWidth="2" />
      <W x={72} y={98} size={10.5}>Too low</W><W x={160} y={98} size={10.5}>Right level</W><W x={248} y={98} size={10.5}>Too high</W>
      <path d={`M${mark - 9} 30 L${mark + 9} 30 L${mark} 44 Z`} fill={GOLD} />
      {at === 0 && <><g transform="translate(160 136) scale(1.4)"><Pill x={0} y={0} /></g><W x={160} y={170} size={10.5}>Lithium</W></>}
      {at === 1 && <g>
        {[40, 64, 88, 112].map(x => <Drop key={x} x={x} y={138} />)}
        <Drop x={220} y={138} /><Drop x={280} y={138} fill={SOFT} />
        <W x={76} y={172} size={10.5}>Weekly</W><W x={250} y={172} size={10.5}>Every 3 to 6 months</W>
      </g>}
      {at === 2 && <g>
        <Sun x={70} y={138} />
        <path d="M116 120 L120 158 H140 L144 120 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M118.5 132 L121 156 H139 L141.5 132 Z" fill={SOFT} />
        <Box x={230} y={138} w={110} text="Drink plenty" />
      </g>}
      {at === 3 && <Box x={160} y={140} w={120} text="999 or A&E" lit />}
      {at === 4 && <><path d="M40 120 H90 V134 H140 V148 H190 V162 H240" stroke={GOLD} strokeWidth="4" fill="none" strokeLinejoin="round" /><W x={160} y={124} size={10.5} anchor="start">Reduced gradually</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function BpdMedCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Depends on symptoms and the phase", "Antipsychotics, often first for mania", "For lows, chosen with your doctor", "Sleepy or dizzy? Do not drive", "Health checks at least once a year"];
  const cards = ["Antipsychotic", "Antidepressant", "Health checks"];
  const lit = [-1, 0, 1, -1, 2][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Other medicines" title="Finding the right mix of medicines" label="Other medicines" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three cards for antipsychotics, antidepressants and health checks, and what goes with each">
      {cards.map((card, index) => <g key={card}>
        <rect x={12 + index * 100} y="30" width="96" height="44" rx="10" fill={lit === index ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={60 + index * 100} y={56} size={10} fill={lit === index ? WHITE : TEXT}>{card}</W>
      </g>)}
      {at === 0 && [{ x: 60, t: "Symptoms" }, { x: 160, t: "How severe" }, { x: 260, t: "Phase" }].map(chip => <g key={chip.t}>
        <Arrow d={`M${chip.x} 112 V84`} head={`M${chip.x - 6} 91 L${chip.x} 84 L${chip.x + 6} 91`} />
        <Box x={chip.x} y={128} w={90} text={chip.t} />
      </g>)}
      {at === 1 && <><Box x={110} y={128} w={90} text="Tablets" /><Box x={210} y={128} w={90} text="Injection" /></>}
      {at === 2 && <><Person x={110} y={178} scale={0.9} /><Person x={210} y={178} scale={0.9} fill={SOFT} /><Bubble x={160} y={116} text="The right dose" width={120} /></>}
      {at === 3 && <><Car x={118} y={114} /><Cross x={160} y={132} s={22} /></>}
      {at === 4 && <g>
        {Array.from({ length: 12 }, (_, index) => <rect key={index} x={28 + index * 22} y="118" width="18" height="18" rx="4" fill={index === 11 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />)}
        <W x={160} y={160} size={10.5}>12 months</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BpdThreeRings(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Used together, often the best way", "A GP refers you; it is worth asking", "CBT: usually 5 to 20 sessions", "Learning about it, often in groups", "Plans to stay well, and if unwell"];
  const rings = [{ cx: 128, cy: 70, t: "Medicine", lx: 115, ly: 56 }, { cx: 192, cy: 70, t: "Therapy", lx: 205, ly: 56 }, { cx: 160, cy: 124, t: "Learning", lx: 160, ly: 150 }];
  const on = (index: number) => (at === 1 || at === 2) ? index === 1 : at === 3 ? index === 2 : false;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Talking therapies" title="Therapy and knowing your condition" label="Talking therapies and psychoeducation" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three overlapping rings: medicine, therapy and learning about bipolar">
      {rings.map((ring, index) => <circle key={ring.t} cx={ring.cx} cy={ring.cy} r="42" fill={on(index) ? INK : TINT} fillOpacity={on(index) ? 0.85 : 0.6} stroke={at === 4 ? GOLD : INK} strokeWidth={at === 4 ? 3.5 : 2.5} />)}
      {rings.map((ring, index) => <W key={ring.t} x={ring.lx} y={ring.ly} size={10.5} fill={on(index) ? WHITE : TEXT}>{ring.t}</W>)}
      {at === 0 && <circle cx="160" cy="88" r="7" fill={GOLD} />}
      {at === 1 && <Box x={268} y={150} w={88} text="Ask your GP" />}
      {at === 2 && Array.from({ length: 20 }, (_, index) => <circle key={index} cx={55 + index * 11} cy="182" r="3.5" fill={index < 5 ? INK : SOFT} />)}
      {at === 3 && <Box x={268} y={150} w={92} text="Group sessions" />}
      {at === 4 && <Box x={266} y={150} w={96} text="Stay-well plan" lit />}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function BpdTeamPlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A team, often with a care coordinator", "Warning signs, coping, people to call", "Write your wishes down in advance", "Crisis teams support you at home", "111, 999 or A&E, Samaritans 116 123"];
  const team = [[160, 44], [82, 76], [238, 76], [70, 150], [250, 150]].slice(0, at === 4 ? 3 : 5);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Care team" title="A team and a plan, made while well" label="Your care team and crisis plan" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A care team around a recovery plan, and where to get help now">
      {team.map(([x, y], index) => <Person key={index} x={x} y={y} scale={0.8} fill={at === 0 ? INK : SOFT} />)}
      {at === 0 && <><Person x={160} y={130} /><circle cx="160" cy="100" r="18" fill="none" stroke={GOLD} strokeWidth="3" /></>}
      {(at === 1 || at === 4) && <g>
        <path d="M130 86 V80 H150 L154 84 H190 V126 H130 Z" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={160} y={110} size={11} fill={at === 1 ? WHITE : TEXT}>Plan</W>
      </g>}
      {at === 2 && <g>
        <rect x="134" y="76" width="52" height="62" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={160} y={94} size={10}>Wishes</W>
        <path d="M142 108 H178 M142 118 H178 M142 128 H166" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M182 130 L202 106" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
      </g>}
      {at === 3 && <g>
        <path d="M128 108 L160 80 L192 108" stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" />
        <rect x="134" y="104" width="52" height="36" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="153" y="118" width="14" height="22" fill={GOLD} />
      </g>}
      {at === 4 && <><Box x={60} y={160} w={90} text="111" /><Box x={160} y={160} w={96} text="999 or A&E" lit /><Box x={260} y={160} w={90} text="116 123" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BpdMoodDiary(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Notice mild signs, and act early", "About 2 minutes a day in the app", "Sleep changes can be an early sign", "Hard events, and happy ones too", "Put your signs in your recovery plan"];
  const mood = [0, 0, 1, 0, 0, 0, 1, 0, 1, 2, 3, 4, 5, 6];
  const sleep = [24, 24, 22, 24, 24, 22, 24, 24, 20, 18, 14, 12, 10, 10];
  const line = mood.map((value, index) => `${index ? "L" : "M"}${70 + index * 16} ${58 - value * 4}`).join(" ");
  const moodOn = at !== 2;
  const sleepOn = at === 1 || at === 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Warning signs" title="Catching the mild signs early" label="Early warning signs" credit="Illustration: Rehyn. An example diary, not anyone's results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A two-week mood and sleep diary, with the point where mood starts to rise">
      <rect x="14" y="20" width="292" height="100" rx="10" fill={WHITE} stroke={LINE} strokeWidth="2" />
      <W x={22} y={50} size={10} anchor="start">Mood</W><W x={22} y={96} size={10} anchor="start">Sleep</W>
      <g opacity={moodOn ? 1 : 0.3}><path d={line} stroke={INK} strokeWidth="2.5" fill="none" />{mood.map((value, index) => <circle key={index} cx={70 + index * 16} cy={58 - value * 4} r="3" fill={INK} />)}</g>
      <g opacity={sleepOn ? 1 : 0.3}>{sleep.map((height, index) => <rect key={index} x={66 + index * 16} y={110 - height} width="8" height={height} rx="2" fill={at === 2 && index > 8 ? GOLD : SOFT} />)}</g>
      {at === 0 && <path d="M214 46 V24 L228 29 L214 34" fill={GOLD} stroke={GOLD} strokeWidth="2" strokeLinejoin="round" />}
      {at === 1 && <Phone x={160} y={150} lit />}
      {at === 2 && <Moon x={160} y={150} r={14} />}
      {at === 3 && <><Box x={66} y={150} w={100} text="Bereavement" /><Box x={166} y={150} w={96} text="Money worries" /><Box x={262} y={150} w={84} text="A holiday" /></>}
      {at === 4 && <Box x={160} y={150} w={130} text="Recovery plan" lit />}
      <Say y={196}>{caps[at]}</Say>
    </svg>} />;
}

function BpdDayClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Same times each day give structure", "Breakfast soon after you wake", "Same bedtime, morning daylight", "Less caffeine, alcohol, night shifts", "20 minutes, three times a week"];
  const tags = [["Same mealtimes", "Same bedtime", "Shop once a week"], ["Wake at set times", "Breakfast soon after", "Avoid late meals"], ["Same bedtime", "Morning daylight", "Wind down before bed"], ["Less caffeine", "Less alcohol", "Avoid night shifts"], ["Exercise, mornings", "Time to relax", "Things you enjoy"]][at];
  const point = (hour: number, r: number) => { const a = hour / 24 * 2 * Math.PI - Math.PI / 2; return [92 + r * Math.cos(a), 100 + r * Math.sin(a)]; };
  const arc = (from: number, to: number) => { const [x1, y1] = point(from, 70); const [x2, y2] = point(to, 70); return `M${x1} ${y1} A70 70 0 0 1 ${x2} ${y2}`; };
  const [sunX, sunY] = point(7, 46);
  const [moonX, moonY] = point(22.5, 46);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Routine" title="A steady body clock, a steadier mood" label="Sleep, routine and mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A 24-hour clock with waking and bedtime kept the same each day, and what helps">
      <circle cx="92" cy="100" r="70" fill={WHITE} stroke={INK} strokeWidth="3" />
      {[0, 6, 12, 18].map(hour => { const [x1, y1] = point(hour, 62); const [x2, y2] = point(hour, 70); return <path key={hour} d={`M${x1} ${y1} L${x2} ${y2}`} stroke={INK} strokeWidth="3" />; })}
      {at === 1 && <path d={arc(7, 8.2)} stroke={GOLD} strokeWidth="8" fill="none" />}
      {at === 4 && <path d={arc(8, 9.2)} stroke={GOLD} strokeWidth="8" fill="none" />}
      {at === 3 && <path d={arc(18, 23.9)} stroke={SOFT} strokeWidth="8" fill="none" strokeDasharray="5 5" />}
      {at === 2 && <>{[7, 22.5].map(hour => { const [x, y] = point(hour, 70); return <circle key={hour} cx={x} cy={y} r="7" fill={GOLD} stroke={WHITE} strokeWidth="2" />; })}</>}
      <Sun x={sunX} y={sunY} r={8} />
      <Moon x={moonX} y={moonY} r={10} />
      <W x={92} y={104} size={10.5}>24 hours</W>
      <Tags x={178} y={44} width={134} gap={38} labels={tags} lit={() => false} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BpdWalletLock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Spending can change with mood", "Set limits while you are well", "Free help with debt; tell someone", "Reasonable adjustments at work", "Tell the DVLA about bipolar"];
  const walletLit = at <= 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and money" title="Protecting your money and your work" label="Work and money" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A wallet, a work bag and a car: protecting money, returning to work and driving">
      <g opacity={walletLit ? 1 : 0.4}>
        <rect x="30" y="76" width="60" height="40" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M30 88 H90 M72 96 H90 V108 H72 Z" stroke={INK} strokeWidth="2.5" fill={TINT} />
      </g>
      <g opacity={at === 3 ? 1 : 0.4}><Case x={160} y={96} lit={at === 3} /></g>
      <g opacity={at === 4 ? 1 : 0.4}><Car x={218} y={74} lit={at === 4} /></g>
      <W x={60} y={146} size={10.5}>Money</W><W x={160} y={146} size={10.5}>Work</W><W x={260} y={146} size={10.5}>Driving</W>
      {at === 0 && <><Arrow d="M104 106 V80" head="M98 87 L104 80 L110 87" /><Arrow d="M116 80 V106" head="M110 99 L116 106 L122 99" /></>}
      {at === 1 && <g><path d="M50 76 V66 a10 10 0 0 1 20 0 V76" stroke={GOLD} strokeWidth="3.5" fill="none" /><rect x="46" y="74" width="28" height="22" rx="4" fill={GOLD} /></g>}
      {at === 2 && <Bubble x={110} y={36} text="Free debt help" width={120} />}
      {at === 3 && <Box x={160} y={36} w={170} text="Reasonable adjustments" />}
      {at === 4 && <Box x={250} y={36} w={110} text="Tell the DVLA" lit />}
      <Say y={196}>{caps[at]}</Say>
    </svg>} />;
}

function BpdSidePath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Your support really does help", "Patient, and not taking it personally", "Appointments, prescriptions, routines", "Emergency: 999 or A&E; urgent: 111", "It's okay to take a break"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Family and friends" title="Being there, and looking after yourself" label="For family and friends" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people walking side by side on a path, with a bench for a break">
      <path d="M110 190 L150 40 H170 L210 190 Z" fill={TINT} />
      <path d="M110 190 L150 40 M210 190 L170 40" stroke={LINE} strokeWidth="3" />
      <Person x={140} y={166} scale={0.9} />
      {at !== 4 && <Person x={180} y={166} scale={0.9} fill={at === 1 ? SOFT : INK} />}
      {at === 0 && <HeartShape x={160} y={112} size={28} fill={GOLD} stroke={GOLD} width={2} />}
      {at === 1 && <Cloud x={180} y={110} s={14} opacity={0.8} />}
      {at === 2 && <Tags x={10} y={60} width={100} gap={34} labels={["Appointments", "Prescriptions", "Routines"]} lit={() => false} />}
      {at === 3 && <><Box x={262} y={70} w={100} text="999 or A&E" lit /><Box x={262} y={106} w={100} text="NHS 111" /><Box x={262} y={142} w={100} text="Crisis team" /></>}
      {at === 4 && <g>
        <Sun x={276} y={44} />
        <rect x="222" y="118" width="80" height="5" rx="2" fill={SOFT} />
        <Person x={262} y={138} scale={0.9} fill={SOFT} />
        <rect x="222" y="140" width="80" height="6" rx="3" fill={INK} />
        <path d="M230 146 V166 M294 146 V166" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

// ==== Psychosis =============================================================================================

function PsyTwoCircles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Hard to tell what is real and not", "Three main kinds of symptom", "Hard to notice from the inside", "Common, and often a full recovery", "See a GP straight away, first time"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When reality is hard to tell apart" label="What psychosis is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two overlapping circles, what others see and what you experience">
      <W x={96} y={24} size={10.5}>What others see</W><W x={226} y={24} size={10.5}>What you experience</W>
      <circle cx="124" cy="92" r="58" fill={WHITE} stroke={at === 3 ? GOLD : INK} strokeWidth={at === 3 ? 3.5 : 2.5} />
      <circle cx="196" cy="92" r="58" fill={TINT} fillOpacity=".8" stroke={at === 3 ? GOLD : INK} strokeWidth={at === 3 ? 3.5 : 2.5} strokeDasharray={at === 2 ? "6 6" : undefined} />
      <path d="M160 46.5 A58 58 0 0 1 160 137.5 A58 58 0 0 1 160 46.5 Z" fill={INK} opacity={at === 0 ? 0.7 : 0.15} />
      {at === 1 && <><Box x={58} y={168} w={96} text="Hallucinations" size={10} /><Box x={150} y={168} w={76} text="Delusions" size={10} /><Box x={252} y={168} w={110} text="Muddled thinking" size={10} /></>}
      {at === 2 && <Person x={160} y={112} scale={0.9} />}
      {at === 3 && <Sun x={160} y={92} r={10} />}
      {at === 4 && <Box x={160} y={168} w={100} text="See a GP" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PsySensesRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Hearing voices is the most common", "Strong beliefs others do not share", "Racing thoughts, hard to follow", "It can feel real, and be frightening", "Urgent GP or NHS 111; 999 if danger"];
  const senses = [{ x: 56, y: 64, t: "See" }, { x: 264, y: 64, t: "Hear" }, { x: 44, y: 122, t: "Feel" }, { x: 276, y: 122, t: "Smell" }, { x: 160, y: 178, t: "Taste" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The symptoms" title="Voices, beliefs and racing thoughts" label="Symptoms of psychosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with the five senses around them, and the kinds of symptom psychosis can bring">
      <Person x={160} y={138} scale={1.3} fill={at === 3 ? SOFT : INK} />
      {(at === 0 || at === 3) && senses.map((sense, index) => <Box key={sense.t} x={sense.x} y={sense.y} w={64} text={sense.t} lit={at === 0 && index === 1} />)}
      {(at === 1 || at === 3) && <circle cx="160" cy="99" r="26" fill="none" stroke={GOLD} strokeWidth="3" />}
      {at === 1 && <Box x={160} y={34} w={180} text="Beliefs others don't share" />}
      {at === 2 && <g stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" strokeLinecap="round">
        <path d="M30 92 l10 -12 l10 24 l10 -24 l10 24 l10 -24 l10 12" /><path d="M220 92 l10 -12 l10 24 l10 -24 l10 24 l10 -24 l10 12" />
      </g>}
      {at === 4 && <><Box x={98} y={40} w={150} text="Urgent GP or 111" /><Box x={246} y={40} w={104} text="999 or A&E" lit /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function PsyManyRoads(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Can be part of another condition", "Some illnesses, rarely a medicine", "Stress, trauma or lack of sleep", "Some drugs, alcohol, or withdrawal", "After a baby: a medical emergency"];
  const roads = ["A condition", "Illness", "Stress, sleep", "Drugs, alcohol", "After a baby"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Many roads, and never your fault" label="Causes of psychosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five roads, each a possible cause, meeting at one point">
      {roads.map((road, index) => { const y = 28 + index * 36; return <path key={road} d={`M118 ${y} C190 ${y}, 200 100, 244 100`} stroke={at === index ? INK : LINE} strokeWidth={at === index ? 4 : 3} fill="none" />; })}
      {roads.map((road, index) => <Box key={road} x={64} y={28 + index * 36} w={108} text={road} lit={at === index} />)}
      <circle cx="258" cy="100" r="14" fill={INK} />
      {at === 2 && <Box x={258} y={150} w={104} text="Not your fault" lit />}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function PsyWeekNotes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Hard to see in yourself", "Poor sleep, worry, hard to focus", "Not wanting to leave their room", "Your own signs, agreed in a plan", "A GP or early intervention team"];
  const tags = [[], ["Poor sleep", "Feeling anxious", "Hard to focus"], ["Staying in their room", "Not talking to anyone", "Hard to concentrate"], ["Unique to you", "Agree a plan", "Someone you trust"], ["Your GP", "Early intervention team"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Early signs" title="Small changes worth noticing early" label="Early signs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of days, a person and a friend, and the small changes worth noticing">
      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}>
        <rect x={20 + index * 40} y="20" width="36" height="34" rx="7" fill={WHITE} stroke={INK} strokeWidth="2" />
        {(at === 1 || at === 2) && index > 3 && <rect x={20 + index * 40} y="20" width="36" height="34" rx="7" fill={INK} opacity=".3" />}
        <W x={38 + index * 40} y={42} size={10.5}>{day}</W>
      </g>)}
      <Person x={56} y={160} scale={1.1} />
      <Person x={108} y={160} scale={1.1} fill={SOFT} />
      {at === 0 && <circle cx="56" cy="127" r="18" fill="none" stroke={SOFT} strokeWidth="3" strokeDasharray="4 5" />}
      {(at === 1 || at === 3) && <circle cx="56" cy="127" r="18" fill="none" stroke={GOLD} strokeWidth="3" />}
      {(at === 2 || at === 3) && <circle cx="108" cy="127" r="18" fill="none" stroke={GOLD} strokeWidth="3" />}
      <Tags x={158} y={76} width={150} labels={tags} lit={() => at === 4} />
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PsyTwoWeekTeam(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["For a first episode of psychosis", "Medicine, therapy and wider support", "A GP, you or family can refer", "They aim to see you within 2 weeks", "Crisis team too; 111 any hour"];
  const team = [70, 115, 205, 250];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Early intervention" title="A specialist team, within two weeks" label="Early intervention teams" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Fourteen days from referral to being seen, and a team around one person">
      {Array.from({ length: 14 }, (_, index) => <rect key={index} x={22 + index * 20} y="26" width="16" height="16" rx="3" fill={at === 3 ? (index === 13 ? GOLD : INK) : WHITE} fillOpacity={at === 3 && index < 13 ? 0.2 + index * 0.05 : 1} stroke={INK} strokeWidth="1.5" />)}
      <W x={22} y={62} size={10} anchor="start">Referral</W><W x={298} y={62} size={10} anchor="end">Seen</W>
      {at === 3 && <W x={160} y={64} size={11}>2 weeks</W>}
      {team.map(x => <Person key={x} x={x} y={170} scale={0.85} fill={at === 1 ? INK : SOFT} />)}
      <Person x={160} y={170} />
      {at === 0 && <circle cx="160" cy="140" r="18" fill="none" stroke={GOLD} strokeWidth="3" />}
      {at === 2 && [{ x: 80, t: "GP" }, { x: 160, t: "You" }, { x: 240, t: "Family" }].map(box => <g key={box.t}>
        <Arrow d={`M${box.x} 86 V72`} head={`M${box.x - 5} 78 L${box.x} 72 L${box.x + 5} 78`} />
        <Box x={box.x} y={100} w={72} text={box.t} />
      </g>)}
      {at === 4 && <><Box x={96} y={104} w={110} text="Crisis team" lit /><Box x={230} y={104} w={140} text="NHS 111, any hour" /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PsyTwoCurves(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Usually the first treatment", "Hours for anxiety, weeks for others", "You may try more than one", "Troublesome side effects? Tell a GP", "Stop only with your doctor, slowly"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Antipsychotics" title="Antipsychotics: what to expect" label="Antipsychotic medicines" credit="Illustration: Rehyn. A picture of the idea; never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Anxiety easing within hours and other symptoms over weeks, and finding the right medicine">
      <g opacity={at === 1 ? 1 : 0.2}>
        <path d="M40 150 H300" stroke={LINE} strokeWidth="3" />
        <path d="M40 50 C60 50, 66 130, 96 130 H300" stroke={GOLD} strokeWidth="3.5" fill="none" />
        <path d="M40 60 C150 60, 220 130, 300 130" stroke={INK} strokeWidth="3.5" fill="none" />
      </g>
      {at === 1 && <><W x={130} y={123} size={10.5}>Anxiety</W><W x={262} y={104} size={10.5}>Other symptoms</W><W x={70} y={168} size={10}>Hours</W><W x={160} y={168} size={10}>Days</W><W x={260} y={168} size={10}>Weeks</W></>}
      {at === 0 && <g transform="translate(160 92) scale(1.6)"><Pill x={0} y={0} /></g>}
      {at === 2 && <>{[100, 160, 220].map(x => <Pill key={x} x={x} y={92} fill={x === 220 ? INK : SOFT} />)}<path d="M210 112 L218 120 L232 104" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></>}
      {at === 3 && <Bubble x={160} y={80} text="Tell a GP" width={110} />}
      {at === 4 && <><path d="M60 60 H110 V80 H160 V100 H210 V120 H260" stroke={GOLD} strokeWidth="4" fill="none" strokeLinejoin="round" /><W x={240} y={74} size={10.5}>Gradually</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PsyChairsTable(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Offered alongside medicine", "CBT: at least 16 weekly sessions", "Family sessions: 3 months to 1 year", "Art therapy and peer support"];
  const left = at === 0 || at === 1 ? INK : SOFT;
  const right = at === 0 || at === 2 ? INK : SOFT;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Talking therapies" title="Therapy alongside medicine" label="Talking therapies and family work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people in therapy one to one, and a family round a table together">
      <Person x={62} y={130} fill={left} /><Seat x={62} y={130} />
      <Person x={132} y={130} fill={left} /><Seat x={132} y={130} />
      <Person x={204} y={112} scale={0.8} fill={right} /><Person x={244} y={98} scale={0.8} fill={right} /><Person x={284} y={112} scale={0.8} fill={right} />
      <ellipse cx="244" cy="126" rx="46" ry="12" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <W x={97} y={174} size={10.5}>One to one</W><W x={244} y={160} size={10.5}>With family</W>
      {at === 0 && <><Pill x={130} y={40} /><W x={164} y={46} size={14}>+</W><Box x={212} y={40} w={90} text="Therapy" lit /></>}
      {at === 1 && Array.from({ length: 16 }, (_, index) => <circle key={index} cx={40 + index * 15} cy="190" r="3.5" fill={INK} />)}
      {at === 2 && <Box x={244} y={40} w={140} text="At least 10 sessions" />}
      {at === 3 && <><Box x={96} y={40} w={110} text="Art therapies" /><Box x={224} y={40} w={110} text="Peer support" /></>}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function PsyHelpClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Life at risk: 999 or A&E now", "Not an emergency: 111, mental health", "Help them to A&E, a GP or 999", "After a baby: see a GP the same day", "Samaritans 116 123; text SHOUT 85258"];
  const tiles = [{ x: 66, y: 44, t: "999 or A&E" }, { x: 254, y: 44, t: "NHS 111" }, { x: 66, y: 148, t: "Samaritans 116 123" }, { x: 254, y: 148, t: "Text SHOUT to 85258" }];
  const lit = [[0], [1], [0], [1], [2, 3]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Urgent help" title="Help is there, day or night" label="Getting urgent help" credit="Illustration: Rehyn. In danger now? Call 999 or go to A&E."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock at any hour, with 999, NHS 111, Samaritans and Shout around it">
      {tiles.map((tile, index) => <Box key={tile.t} x={tile.x} y={tile.y} w={124} h={30} size={10} text={tile.t} lit={lit.includes(index)} />)}
      {at === 2
        ? <><Person x={146} y={118} scale={0.8} fill={SOFT} /><Person x={178} y={118} scale={0.8} /></>
        : <><Clock x={160} y={92} r={30} hand={at === 3 ? 2 : 4} /><W x={160} y={140} size={10.5}>{at === 3 ? "Same day" : "Any hour"}</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PsyWindingRoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Setbacks are normal on the way", "A staying well plan, with your team", "Adjustments such as a phased return", "Day centres and peer support help", "Tell the DVLA; not during an episode"];
  const stops = [{ x: 36, y: 176, bx: 42, t: "Recovery", w: 72 }, { x: 120, y: 122, bx: 120, t: "Plan", w: 56 }, { x: 186, y: 150, bx: 186, t: "Work", w: 56 }, { x: 240, y: 104, bx: 240, t: "Home life", w: 78 }, { x: 292, y: 58, bx: 284, t: "Driving", w: 64 }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Recovery" title="Getting back to everyday life" label="Recovery and getting back to life" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A winding road with stops for a plan, work, home life and driving">
      <path d="M20 176 C80 176, 70 122, 120 122 S166 150, 186 150 S214 104, 240 104 S270 60, 296 58" stroke={LINE} strokeWidth="12" fill="none" strokeLinecap="round" />
      <path d="M20 176 C80 176, 70 122, 120 122 S166 150, 186 150 S214 104, 240 104 S270 60, 296 58" stroke={WHITE} strokeWidth="2" fill="none" strokeDasharray="6 6" />
      {stops.map((stop, index) => <g key={stop.t}>
        <circle cx={stop.x} cy={stop.y} r={index === at ? 9 : 6} fill={index === at ? GOLD : INK} stroke={WHITE} strokeWidth="2" />
        <Box x={stop.bx} y={stop.y - 24} w={stop.w} text={stop.t} lit={index === at} />
      </g>)}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PsyClearSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Drugs and alcohol can trigger it", "Younger and stronger: higher risk", "Dependent? Get advice before stopping", "They can react with your medicine", "Be honest with your GP; FRANK can help"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Drugs and alcohol" title="Cannabis, alcohol and psychosis" label="Cannabis, alcohol and other drugs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="How drugs and alcohol link to psychosis, and an open door to help">
      {at === 0 && <g>
        <Box x={76} y={56} w={96} text="Drugs" /><Box x={76} y={100} w={96} text="Alcohol" />
        <Arrow d="M126 58 L174 74" head="M166 68 L174 74 L166 80" /><Arrow d="M126 98 L174 84" head="M166 78 L174 84 L167 91" />
        <Box x={238} y={78} w={124} text="Psychotic episode" lit />
      </g>}
      {at === 1 && <g>
        <Arrow d="M40 160 L110 56" head="M100 60 L110 56 L111 67" />
        <W x={52} y={98} size={10.5}>Risk</W>
        <Tags x={150} y={50} width={156} labels={["Starting younger", "Stronger cannabis", "Using more often"]} lit={() => false} />
      </g>}
      {at === 2 && <><Box x={160} y={70} w={140} text="Get advice first" lit /><Box x={160} y={112} w={180} text="Severe withdrawal: 999" /></>}
      {at === 3 && <><Pill x={110} y={90} /><W x={142} y={95} size={14}>+</W><Box x={220} y={90} w={120} text="Tell your doctor" /></>}
      {at === 4 && <g>
        <rect x="130" y="40" width="60" height="96" fill={GOLD} opacity=".35" stroke={INK} strokeWidth="2.5" />
        <path d="M130 40 L106 52 V128 L130 136 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <Box x={160} y={162} w={150} text="FRANK 0300 123 6600" />
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PsyCheckRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Heart health and diabetes risk", "A full check before you start", "A free check once a year", "Eat regularly, keep active", "Stopping smoking? Talk to your GP"];
  const tags = [["Heart health", "Diabetes risk", "Some medicines"], ["Blood tests", "Blood pressure", "Heart check (ECG)"], ["Free, once a year", "About 45 minutes", "Ask if no letter"], ["Eat regularly", "Stay active", "Regular sleep"], ["NHS stop smoking help", "Talk to your GP first"]][at];
  const point = (deg: number) => { const a = (deg - 90) * Math.PI / 180; return `${96 + 62 * Math.cos(a)} ${102 + 62 * Math.sin(a)}`; };
  const gold = (index: number) => (at === 1 && (index === 0 || index === 2)) || (at === 2 && index === 0);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Physical health" title="Your body's health matters too" label="Looking after your physical health" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ring of twelve months around a heart, with the checks that look after physical health">
      {Array.from({ length: 12 }, (_, index) => <path key={index} d={`M${point(index * 30 + 3)} A62 62 0 0 1 ${point(index * 30 + 27)}`} stroke={gold(index) ? GOLD : at === 2 ? SOFT : LINE} strokeWidth="14" fill="none" />)}
      <HeartShape x={96} y={102} size={54} fill={at === 0 ? INK : WHITE} />
      <Tags x={180} y={44} width={132} gap={36} labels={tags} lit={() => false} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PsySofaListen(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Support, not blame, helps recovery", "Respond to the feeling, not the belief", "Finances, appointments, the care plan", "Meetings over 3 months or more", "A free carer's assessment"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Family and carers" title="Being there for someone with psychosis" label="For family and carers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people side by side on a sofa, talking and listening">
      <rect x="86" y="96" width="148" height="34" rx="10" fill={SOFT} opacity=".5" />
      <Person x={130} y={134} scale={1.1} />
      <Person x={190} y={134} scale={1.1} fill={at === 4 ? INK : SOFT} />
      <rect x="80" y="126" width="160" height="26" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="72" y="112" width="16" height="40" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="232" y="112" width="16" height="40" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M90 152 V162 M230 152 V162" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <HeartShape x={160} y={72} size={24} fill={GOLD} stroke={GOLD} width={2} />}
      {at === 1 && <Bubble x={204} y={44} text="That sounds scary" width={128} />}
      {at === 2 && <><Box x={50} y={52} w={80} text="Finances" /><Box x={160} y={30} w={104} text="Appointments" /><Box x={272} y={52} w={84} text="Care plan" /></>}
      {at === 3 && <><Person x={40} y={160} scale={0.9} fill={SOFT} /><Person x={282} y={160} scale={0.9} fill={SOFT} /><Box x={160} y={36} w={130} text="Family meetings" /></>}
      {at === 4 && <><Box x={160} y={36} w={140} text="Carer's assessment" lit /><circle cx="190" cy="101" r="18" fill="none" stroke={GOLD} strokeWidth="3" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Eating disorders ======================================================================================

function EatdFeelingsHeart(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["A way of coping with feelings", "Serious, and never anyone's fault", "Anyone, at any age or background", "About 1 in 20 people in the UK", "Treatable, and full recovery possible"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What they are" title="About feelings, not just food" label="What eating disorders are" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A heart for feelings, and what an eating disorder is: a way of coping, and treatable">
      <HeartShape x={86} y={96} size={96} fill={at === 0 ? TINT : WHITE} />
      <W x={86} y={100} size={11}>Feelings</W>
      {at === 0 && <><Arrow d="M140 96 H170" head="M163 90 L170 96 L163 102" /><Box x={236} y={96} w={120} text="A way of coping" lit /></>}
      {at === 1 && <><Box x={232} y={76} w={130} text="Not a choice" lit /><Box x={232} y={116} w={130} text="Never their fault" /></>}
      {at === 2 && [[170, 90], [205, 90], [240, 90], [275, 90], [187, 150], [222, 150], [257, 150]].map(([x, y], index) => <Person key={index} x={x} y={y} scale={0.8} fill={index % 2 ? SOFT : INK} />)}
      {at === 3 && <g>
        {Array.from({ length: 20 }, (_, index) => <circle key={index} cx={176 + (index % 10) * 13} cy={76 + Math.floor(index / 10) * 20} r="4.5" fill={index === 0 ? GOLD : SOFT} />)}
        <W x={234} y={126} size={12}>1 in 20</W>
      </g>}
      {at === 4 && <><Sun x={232} y={66} r={13} className={still ? undefined : "lib-v2-breathe is-slow"} /><Box x={232} y={120} w={150} text="Recovery is possible" lit /></>}
      <Say y={196}>{caps[at]}</Say>
    </svg>} />;
}

function EatdFiveCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Anorexia: a serious mental illness", "Bulimia: often hidden from the outside", "Binge eating disorder: losing control", "ARFID: not about weight or shape", "OSFED: common, and just as serious"];
  const cards = [["Anorexia"], ["Bulimia"], ["Binge", "eating"], ["ARFID"], ["OSFED"]];
  const xs = [36, 98, 160, 222, 284];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The types" title="Different names, equally serious" label="Types of eating disorder" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five equal cards, one for each type of eating disorder, joined to show people can move between them">
      {cards.map((lines, index) => <g key={lines.join(" ")}>
        <rect x={xs[index] - 28} y="34" width="56" height="80" rx="10" fill={at === index ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        {lines.map((line, row) => <W key={line} x={xs[index]} y={(lines.length === 1 ? 78 : 70) + row * 14} size={10} fill={at === index ? WHITE : TEXT}>{line}</W>)}
      </g>)}
      {xs.slice(0, 4).map((x, index) => <path key={x} d={`M${x + 4} 126 Q${x + 31} 146 ${xs[index + 1] - 4} 126`} stroke={at === 4 ? GOLD : LINE} strokeWidth="3" fill="none" strokeLinecap="round" />)}
      <Say y={186}>{caps[at]}</Say>
    </svg>} />;
}

function EatdSignColumns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Mood and behaviour often change first", "Withdrawal, anxiety, low self-esteem", "Feeling cold, tired or dizzy", "ARFID: anxious at mealtimes", "Worried? Talk, and say you're there"];
  const left = at === 3 ? ["Eating feels a chore", "Avoids food events", "Anxious at mealtimes", "Takes a long time"] : ["Withdrawn", "Anxious or low", "Secretive about food", "Mood swings"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The signs" title="The signs that often show first" label="Signs of an eating disorder" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two columns of signs: mood and behaviour, and physical signs">
      {at < 4 && <g>
        <W x={80} y={30} size={11}>{at === 3 ? "ARFID" : "Mood and behaviour"}</W><W x={240} y={30} size={11}>Physical</W>
        <g opacity={at === 2 ? 0.45 : 1}><Tags x={12} y={42} width={138} gap={32} labels={left} lit={() => at !== 2} /></g>
        <g opacity={at === 2 ? 1 : 0.45}><Tags x={172} y={42} width={136} gap={32} labels={["Feeling cold", "Tired or dizzy", "Digestion problems"]} lit={() => at === 2} /></g>
      </g>}
      {at === 4 && <><Person x={96} y={160} scale={1.2} fill={SOFT} /><Person x={224} y={160} scale={1.2} /><Bubble x={160} y={70} text="I'm here for you" width={130} /></>}
      <Say y={200}>{caps[at]}</Say>
    </svg>} />;
}

function EatdFourCircles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Many factors combine", "Family history, stress, perfectionism", "It can feel familiar and safe", "Often alongside anxiety or depression", "Not a choice; families help recovery"];
  const rings = [{ cx: 130, cy: 58, t: "Genes", lx: 84, ly: 46, anchor: "end" as const }, { cx: 190, cy: 58, t: "Biology", lx: 236, ly: 46, anchor: "start" as const }, { cx: 130, cy: 108, t: "Psychology", lx: 84, ly: 124, anchor: "end" as const }, { cx: 190, cy: 108, t: "Surroundings", lx: 236, ly: 124, anchor: "start" as const }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="No single reason, and no blame" label="Why eating disorders happen" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four overlapping circles: genes, biology, psychology and surroundings">
      {rings.map(ring => <circle key={ring.t} cx={ring.cx} cy={ring.cy} r="40" fill={TINT} fillOpacity=".55" stroke={INK} strokeWidth="2" />)}
      {rings.map(ring => <W key={ring.t} x={ring.lx} y={ring.ly} size={10.5} anchor={ring.anchor}>{ring.t}</W>)}
      {at === 0 && <circle cx="160" cy="83" r="7" fill={GOLD} />}
      {at === 2 && <Box x={160} y={83} w={72} text="Coping" lit />}
      {at === 1 && <><Box x={62} y={166} w={104} text="Family history" /><Box x={164} y={166} w={84} text="Pressure" /><Box x={262} y={166} w={100} text="Perfectionism" /></>}
      {at === 3 && <><Box x={76} y={166} w={96} text="Depression" /><Box x={166} y={166} w={76} text="Anxiety" /><Box x={240} y={166} w={60} text="OCD" /></>}
      {at === 4 && <>{[120, 160, 200].map((x, index) => <Person key={x} x={x} y={184} scale={0.75} fill={index === 1 ? INK : SOFT} />)}<HeartShape x={244} y={172} size={26} fill={GOLD} stroke={GOLD} width={2} /></>}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function EatdGpSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["See a GP early, even if unsure", "Write down what you want to say", "The GP asks how you are feeling", "Referral to a specialist team", "You can ask to see a different GP"];
  const doors = [{ x: 50, t: "Home" }, { x: 160, t: "GP" }, { x: 270, t: "Specialist" }];
  const lit = [1, 0, 1, 2, 1][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Getting help" title="Your first steps with a GP" label="Getting help" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Stepping stones from home to the GP to a specialist team">
      {doors.map((door, index) => <g key={door.t}>
        <rect x={door.x - 22} y="46" width="44" height="70" rx="4" fill={lit === index ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <circle cx={door.x + 12} cy="84" r="3" fill={lit === index ? WHITE : INK} />
        <W x={door.x} y={132} size={10.5}>{door.t}</W>
      </g>)}
      <ellipse cx="105" cy="150" rx="22" ry="8" fill={SOFT} /><ellipse cx="215" cy="150" rx="22" ry="8" fill={SOFT} />
      {at === 0 && <><Person x={92} y={186} scale={0.75} /><Person x={120} y={186} scale={0.75} fill={SOFT} /></>}
      {at === 1 && <g>
        <rect x="88" y="54" width="34" height="42" rx="3" fill={WHITE} stroke={GOLD} strokeWidth="2.5" />
        <path d="M95 66 H115 M95 75 H115 M95 84 H109" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      </g>}
      {at === 2 && <Bubble x={168} y={22} text="How are you feeling?" width={150} />}
      {at === 3 && <Arrow d="M188 92 H240" head="M233 86 L240 92 L233 98" />}
      {at === 4 && <Box x={160} y={24} w={170} text="Ask for a different GP" />}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function EatdTherapyRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Therapy, with physical health checks", "CBT, MANTRA or SSCM for adults", "Guided self-help first, then CBT", "Tailored to the person", "Most go home after appointments"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Treatments" title="Talking therapy at the heart" label="Talking therapies and specialist care" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people talking in therapy, with the kinds of treatment around them">
      <Person x={128} y={150} scale={1.1} /><Seat x={128} y={152} />
      <Person x={192} y={150} scale={1.1} fill={SOFT} /><Seat x={192} y={152} />
      {at === 0 && <><Box x={160} y={36} w={130} text="Talking therapy" lit /><Box x={160} y={70} w={120} text="Health checks" /></>}
      {at === 1 && <><Box x={64} y={36} w={60} text="CBT" /><Box x={160} y={36} w={84} text="MANTRA" /><Box x={256} y={36} w={64} text="SSCM" /><Box x={160} y={70} w={116} text="Family therapy" /></>}
      {at === 2 && <><Box x={100} y={40} w={130} text="Guided self-help" /><Arrow d="M170 40 H194" head="M187 34 L194 40 L187 46" /><Box x={236} y={40} w={70} text="CBT" lit /></>}
      {at === 3 && <Box x={160} y={40} w={160} text="Tailored to the person" lit />}
      {at === 4 && <><Box x={66} y={40} w={96} text="Outpatient" lit /><Box x={166} y={40} w={96} text="Day patient" /><Box x={262} y={40} w={84} text="Hospital" /></>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function EatdCheckBoard(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Many effects can improve with help", "Blood tests and a heart check (ECG)", "A bone scan; regular dentist visits", "Regular check-ups during treatment", "Urgent: 111. Life in danger: 999"];
  const rows = ["Heart (ECG)", "Blood tests", "Bone scan", "Dentist"];
  const on = (index: number) => at === 3 || (at === 1 && index < 2) || (at === 2 && index >= 2);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Physical health" title="Checks that help keep you safe" label="Physical health checks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A checklist of health checks, a heart trace and a calendar of check-ups">
      <rect x="20" y="26" width="136" height="154" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="66" y="18" width="44" height="16" rx="4" fill={INK} />
      {rows.map((row, index) => { const y = 60 + index * 34; return <g key={row}>
        <rect x="34" y={y - 11} width="16" height="16" rx="3" fill={on(index) ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {on(index) && <path d={`M37 ${y - 3} L41 ${y + 1} L47 ${y - 7}`} stroke={WHITE} strokeWidth="2" fill="none" strokeLinecap="round" />}
        <W x={58} y={y + 2} size={10.5} anchor="start">{row}</W>
      </g>; })}
      {at === 0 && <Sun x={236} y={90} r={14} />}
      {at === 1 && <path d="M172 96 H200 L208 76 L216 116 L224 96 H246 L254 76 L262 116 L270 96 H304" stroke={GOLD} strokeWidth="3" fill="none" strokeLinejoin="round" />}
      {at === 2 && <path d="M220 70 C220 58, 236 58, 238 64 C240 58, 256 58, 256 70 C256 86, 250 104, 246 104 C242 104, 242 88, 238 88 C234 88, 234 104, 230 104 C226 104, 220 86, 220 70 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />}
      {at === 3 && Array.from({ length: 12 }, (_, index) => <rect key={index} x={186 + (index % 4) * 30} y={52 + Math.floor(index / 4) * 30} width="24" height="24" rx="4" fill={index === 5 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />)}
      {at === 4 && <><Box x={238} y={76} w={90} text="111" /><Box x={238} y={114} w={110} text="999 or A&E" lit /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function EatdRisingTrail(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Different for everyone; most recover", "Good days and bad days", "Never back to the start", "Green, amber, red: a plan to stay well", "Find your own path, with support"];
  const walker = [[90, 140], [170, 108], [112, 152], [170, 108], [252, 72]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Recovery" title="Recovery is rarely a straight line" label="What recovery can look like" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A trail rising with small dips towards a flag, and a plan to stay well">
      <path d="M24 178 L90 140 L112 152 L170 108 L192 120 L252 72 L296 46" stroke={INK} strokeWidth="4" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M296 46 V22" stroke={INK} strokeWidth="3" /><path d="M296 22 L312 27 L296 32 Z" fill={GOLD} />
      {at === 0 && <Sun x={226} y={32} r={11} />}
      {at === 1 && <><Cloud x={112} y={124} s={14} /><Sun x={176} y={80} r={9} /></>}
      {at === 2 && <><circle cx="112" cy="152" r="12" fill="none" stroke={SOFT} strokeWidth="3" /><circle cx="192" cy="120" r="12" fill="none" stroke={SOFT} strokeWidth="3" /></>}
      {at === 3 && <><Box x={78} y={30} w={136} text="Green: staying well" /><Box x={78} y={62} w={136} text="Amber: early signs" /><Box x={78} y={94} w={136} text="Red: what to do" lit /></>}
      {at === 4 && <Person x={226} y={100} scale={0.7} fill={SOFT} />}
      <circle cx={walker[0]} cy={walker[1]} r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function EatdTableTalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Encourage help; keep inviting them", "Ask about feelings, not food", "Keep talk neutral and light", "Families can help in treatment", "Resting isn't selfish"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Family and friends" title="Being there for someone you love" label="For family, friends and carers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people talking at a table, and what helps">
      {at === 3 && <Person x={160} y={104} scale={0.9} fill={SOFT} />}
      <Person x={110} y={118} scale={1.1} />
      <Person x={210} y={118} scale={1.1} fill={at === 4 ? SOFT : INK} />
      <rect x="70" y="118" width="180" height="10" rx="4" fill={INK} />
      <path d="M86 128 V170 M234 128 V170" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <><Box x={70} y={40} w={76} text="Listen" /><Box x={246} y={40} w={112} text="Give your time" /></>}
      {at === 1 && <Bubble x={168} y={40} text="How are you feeling?" width={150} />}
      {at === 2 && <Box x={160} y={40} w={140} text="Neutral, light talk" lit />}
      {at === 3 && <Box x={160} y={34} w={120} text="Treatment team" />}
      {at === 4 && <><Box x={140} y={40} w={110} text="Time to rest" lit /><Moon x={262} y={40} r={12} /></>}
      <Say y={200}>{caps[at]}</Say>
    </svg>} />;
}

function EatdWordBubbles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Choose a calm time and a safe place", "Talk about feelings, starting with I", "Stay calm, and say you'll be there", "Write it, or send a message", "A disability under the Equality Act"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Starting the conversation" title="Finding the words, gently" label="Starting the conversation" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people facing each other, finding the words to talk">
      <Person x={60} y={168} scale={1.3} />
      <Person x={260} y={168} scale={1.3} fill={SOFT} />
      {at === 0 && <><Box x={160} y={44} w={110} text="A calm time" /><Box x={160} y={80} w={110} text="A safe place" lit /></>}
      {at === 1 && <Bubble x={150} y={70} text="I'm worried because…" width={160} />}
      {at === 2 && <Bubble x={170} y={70} text="I'll be there" width={120} />}
      {at === 3 && <><Phone x={160} y={112} lit /><Box x={160} y={52} w={100} text="A message" /></>}
      {at === 4 && <><Case x={160} y={112} /><Box x={160} y={44} w={140} text="Equality Act 2010" /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function EatdSafeHouse(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Beat is not a crisis service", "999 or A&E if a life is at risk", "111: choose the mental health option", "Samaritans 116 123; SHOUT to 85258", "Get through today, near other people"];
  const walker = [[40, 176], [90, 170], [140, 156], [190, 140], [226, 134]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Urgent help" title="Urgent help, any hour" label="When to get urgent help" credit="Illustration: Rehyn. In danger now? Call 999 or go to A&E."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path to a safe house with a lit window, and who to contact for urgent help">
      <path d="M16 176 C90 176, 140 134, 232 134" stroke={LINE} strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M232 106 L264 80 L296 106" stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" />
      <rect x="238" y="104" width="52" height="40" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="256" y="114" width="16" height="14" fill={at === 4 ? GOLD : TINT} stroke={INK} strokeWidth="1.5" />
      <circle cx={walker[0]} cy={walker[1]} r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      {at === 0 && <Box x={120} y={40} w={180} text="Beat is not a crisis line" />}
      {at === 1 && <Box x={120} y={40} w={120} text="999 or A&E" lit />}
      {at === 2 && <Box x={120} y={40} w={180} text="111, mental health option" />}
      {at === 3 && <><Box x={110} y={34} w={140} text="Samaritans 116 123" lit /><Box x={110} y={68} w={140} text="Text SHOUT to 85258" lit /></>}
      {at === 4 && <><Person x={206} y={176} scale={0.75} fill={SOFT} /><Person x={256} y={176} scale={0.75} fill={SOFT} /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function EatdChatCircle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Free, 3pm to 8pm, Monday to Friday", "Webchat, email and online groups", "Not a crisis line: 999 or 116 123", "Support for families and friends too", "Talk ED, YoungMinds and peer groups"];
  const ring = [[90, 70], [230, 70], [76, 146], [244, 146], [160, 180]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You don't have to do this alone" label="Helplines and support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A phone at the centre of helplines, chat and groups, with people around it">
      <rect x="136" y="56" width="48" height="80" rx="8" fill={at === 0 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="143" y="66" width="34" height="50" rx="3" fill={at === 0 ? WHITE : TINT} opacity={at === 0 ? 0.25 : 1} />
      <circle cx="160" cy="126" r="3" fill={at === 0 ? WHITE : INK} />
      {at === 0 && <><Box x={80} y={78} w={96} text="Free to call" /><Clock x={236} y={78} r={20} hand={2.4} /></>}
      {at === 1 && <g>
        <Bubble x={78} y={46} text="Webchat" width={92} />
        <rect x="224" y="56" width="44" height="30" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M224 58 L246 74 L268 58" stroke={INK} strokeWidth="2" fill="none" />
        {[110, 135, 185, 210].map(x => <Person key={x} x={x} y={180} scale={0.6} fill={SOFT} />)}
      </g>}
      {at === 2 && <><Box x={90} y={164} w={120} text="Up to 30 minutes" /><Box x={230} y={164} w={120} text="Not a crisis line" lit /></>}
      {at === 3 && <><Person x={84} y={130} /><Person x={236} y={130} /><circle cx="84" cy="100" r="17" fill="none" stroke={GOLD} strokeWidth="3" /><circle cx="236" cy="100" r="17" fill="none" stroke={GOLD} strokeWidth="3" /></>}
      {at === 4 && ring.map(([x, y], index) => <Person key={index} x={x} y={y} scale={0.75} fill={index % 2 ? SOFT : INK} />)}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

export function BalancePieceView({ piece, ...props }: { piece: BalancePiece } & PieceProps) {
  switch (piece) {
    case "bpd-mood-scale": return <BpdMoodScale {...props} />;
    case "bpd-high-column": return <BpdHighColumn {...props} />;
    case "bpd-low-valley": return <BpdLowValley {...props} />;
    case "bpd-three-lines": return <BpdThreeLines {...props} />;
    case "bpd-level-bar": return <BpdLevelBar {...props} />;
    case "bpd-med-cards": return <BpdMedCards {...props} />;
    case "bpd-three-rings": return <BpdThreeRings {...props} />;
    case "bpd-team-plan": return <BpdTeamPlan {...props} />;
    case "bpd-mood-diary": return <BpdMoodDiary {...props} />;
    case "bpd-day-clock": return <BpdDayClock {...props} />;
    case "bpd-wallet-lock": return <BpdWalletLock {...props} />;
    case "bpd-side-path": return <BpdSidePath {...props} />;
    case "psy-two-circles": return <PsyTwoCircles {...props} />;
    case "psy-senses-ring": return <PsySensesRing {...props} />;
    case "psy-many-roads": return <PsyManyRoads {...props} />;
    case "psy-week-notes": return <PsyWeekNotes {...props} />;
    case "psy-two-week-team": return <PsyTwoWeekTeam {...props} />;
    case "psy-two-curves": return <PsyTwoCurves {...props} />;
    case "psy-chairs-table": return <PsyChairsTable {...props} />;
    case "psy-help-clock": return <PsyHelpClock {...props} />;
    case "psy-winding-road": return <PsyWindingRoad {...props} />;
    case "psy-clear-steps": return <PsyClearSteps {...props} />;
    case "psy-check-ring": return <PsyCheckRing {...props} />;
    case "psy-sofa-listen": return <PsySofaListen {...props} />;
    case "eatd-feelings-heart": return <EatdFeelingsHeart {...props} />;
    case "eatd-five-cards": return <EatdFiveCards {...props} />;
    case "eatd-sign-columns": return <EatdSignColumns {...props} />;
    case "eatd-four-circles": return <EatdFourCircles {...props} />;
    case "eatd-gp-steps": return <EatdGpSteps {...props} />;
    case "eatd-therapy-ring": return <EatdTherapyRing {...props} />;
    case "eatd-check-board": return <EatdCheckBoard {...props} />;
    case "eatd-rising-trail": return <EatdRisingTrail {...props} />;
    case "eatd-table-talk": return <EatdTableTalk {...props} />;
    case "eatd-word-bubbles": return <EatdWordBubbles {...props} />;
    case "eatd-safe-house": return <EatdSafeHouse {...props} />;
    case "eatd-chat-circle": return <EatdChatCircle {...props} />;
  }
}
