import type { NewsPiece } from "@/content/ischaemic-news";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, SERIF, useSection } from "./NewsMemoryPieces";
import { Chips, credit, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Diabetes & metabolism pages' own pieces (content/ischaemic-news.ts, keyed "<condition>/<piece>"), drawn
// in the page's card colours (the --t-… variables), like the Heart & lungs pieces. Each is steered by the
// card's sections; pictures show ideas, not anyone's own readings or results.

const METABOLISM_PIECES = [
  // Prediabetes
  "pre-hba1c-bar", "pre-mix", "pre-fork", "pre-calendar", "pre-course", "pre-scales", "pre-day-clock", "pre-swaps", "pre-night", "pre-units", "pre-household",
  // Type 1 diabetes
  "t1d-beta-cells", "t1d-gauge", "t1d-ketones", "t1d-two-numbers", "t1d-basal-bolus", "t1d-carb-scale", "t1d-loop", "t1d-sick-kit", "t1d-late-low", "t1d-five-drive", "t1d-drink-night", "t1d-distress", "t1d-pregnancy-line",
  // Underactive thyroid
  "hypo-thermostat", "hypo-antibodies", "hypo-seesaw", "hypo-checklist", "hypo-morning", "hypo-steps", "hypo-four-hours", "hypo-scales", "hypo-fog", "hypo-pregnancy-line", "hypo-test-calendar",
  // Overactive thyroid
  "hyper-fast", "hyper-five", "hyper-seesaw", "hyper-eye", "hyper-sore-throat", "hyper-capsule", "hyper-three-ops", "hyper-heart-calm", "hyper-calm-head", "hyper-smoke-eyes", "hyper-pregnancy-line", "hyper-pendulum",
  // Type 2 diabetes
  "t2d-sticky-cell", "t2d-key", "t2d-four-spots", "t2d-remission-line", "t2d-hypo-steps", "t2d-pill-cards", "t2d-pen-week", "t2d-hand-portions", "t2d-walk-meal", "t2d-meter-fork", "t2d-nine-grid", "t2d-foot-check", "t2d-ill-kit", "t2d-dashboard", "t2d-backpack",
] as const;
type MetabolismPiece = (typeof METABOLISM_PIECES)[number];
export const isMetabolismPiece = (piece: NewsPiece): piece is MetabolismPiece => (METABOLISM_PIECES as readonly string[]).includes(piece);

/** An HbA1c line in mmol/mol: below 42, 42 to 47, 48 and over; `lit` picks a band (-1 for none). */
export const HbA1cBar = ({ y = 90, lit = -1 }: { y?: number; lit?: number }) => {
  const bands = [{ t: "Below 42", x: 20, w: 120, fill: SOFT }, { t: "42 to 47", x: 140, w: 80, fill: GOLD }, { t: "48 and over", x: 220, w: 80, fill: TEXT }];
  return <g>
    {bands.map((band, index) => <g key={band.t} opacity={lit < 0 || lit === index ? 1 : 0.35}>
      <rect x={band.x} y={y} width={band.w} height="30" fill={band.fill} rx={index === 0 ? 0 : 0} />
      <W x={band.x + band.w / 2} y={y + 50} size={10.5}>{band.t}</W>
    </g>)}
    <rect x="20" y={y} width="280" height="30" rx="8" fill="none" stroke={INK} strokeWidth="2" />
    <W x={80} y={y - 10} size={10} fill={SOFT}>Normal</W><W x={180} y={y - 10} size={10}>Prediabetes</W><W x={260} y={y - 10} size={10}>Type 2</W>
  </g>;
};

/** A blood-sugar drop shape centred on (x, y). */
export const Drop = ({ x, y, size = 40, fill = INK }: { x: number; y: number; size?: number; fill?: string }) =>
  <path d={`M${x} ${y - size} C${x - size * 0.6} ${y - size * 0.2}, ${x - size * 0.6} ${y + size * 0.5}, ${x} ${y + size * 0.5} C${x + size * 0.6} ${y + size * 0.5}, ${x + size * 0.6} ${y - size * 0.2}, ${x} ${y - size} Z`} fill={fill} />;

// ==== Prediabetes ==========================================================================================

function Hba1cLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it means" title="Higher than it should be" label="Prediabetes" credit="Illustration: Rehyn. HbA1c ranges from Diabetes UK, in mmol/mol."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An HbA1c line: below 42 is normal, 42 to 47 is prediabetes, 48 and over is type 2 diabetes">
      <HbA1cBar y={70} lit={at === 1 ? -1 : at === 3 ? 2 : at === 4 ? 0 : 1} />
      <W x={160} y={180} size={12}>{["Above normal, but not diabetes", "Found on an HbA1c blood test", "Usually no symptoms", "It does not go away on its own", "It can come back below 42"][at]}</W>
    </svg>} />;
}

function Mix(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const ring = ["Age", "Family", "Weight", "Hidden fat", "Background", "Sleep", "Smoking"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Why it happens" title="Not one cause, but a mix" label="Causes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label={`Factors that combine: ${ring.join(", ")}`}>
      {at === 0 ? <>
        <circle cx="110" cy="100" r="40" fill={WHITE} stroke={INK} strokeWidth="3" /><W x={110} y={104} size={11}>Cell</W>
        <path d="M200 70 v60" stroke={INK} strokeWidth="6" strokeLinecap="round" /><W x={200} y={150} size={11}>Insulin</W>
        <path d="M156 100 h30" stroke={SOFT} strokeWidth="3" strokeDasharray="5 5" /><path d="M150 92 l12 16 M162 92 l-12 16" stroke={TEXT} strokeWidth="3" />
        <W x={160} y={196} size={11.5}>The cells do not respond properly</W>
      </> : at === 2 ? <>
        <Person x={160} y={130} scale={1.6} fill={WHITE} />
        <path d="M134 130 C140 100, 180 100, 186 130" stroke={INK} strokeWidth="3" fill="none" /><ellipse cx="160" cy="120" rx="16" ry="10" fill={GOLD} />
        <W x={160} y={196} size={11.5}>Fat around the liver and pancreas</W>
      </> : <>
        {ring.map((label, index) => {
          const angle = (index / ring.length) * Math.PI * 2 - Math.PI / 2;
          const x = 160 + Math.cos(angle) * 116; const y = 104 + Math.sin(angle) * 80;
          const lit = at === 1 || (at === 3 && (index === 1 || index === 4)) || (at === 4 && (index === 5 || index === 6));
          return <g key={label}><rect x={x - 42} y={y - 12} width="84" height="24" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + 4} size={10.5} fill={lit ? WHITE : TEXT}>{label}</W></g>;
        })}
        <Drop x={160} y={110} size={30} />
      </>}
    </svg>} />;
}

function Fork(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="The odds" title="A high risk, not a certainty" label="The odds" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path that splits: towards type 2 diabetes, or back towards the normal range">
      <path d="M30 180 C90 160, 120 120, 160 110" stroke={INK} strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M160 110 C200 100, 240 60, 290 40" stroke={at === 0 ? INK : SOFT} strokeWidth={at === 0 ? 10 : 6} fill="none" strokeLinecap="round" />
      <path d="M160 110 C210 120, 250 150, 296 160" stroke={at === 2 || at === 3 ? INK : SOFT} strokeWidth={at === 2 || at === 3 ? 12 : 6} fill="none" strokeLinecap="round" />
      <W x={262} y={30} size={11}>Type 2</W><W x={262} y={186} size={11}>Normal range</W>
      <W x={70} y={110} size={11.5}>{["A high risk", "Not a certainty", "Support can halve it", "Any lowering helps", "It can creep back"][at]}</W>
    </svg>} />;
}

function YearCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="Once a year, at least" label="Testing" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year with one blood test ringed">
      {months.map((month, index) => <g key={index}><rect x={14 + index * 25} y="60" width="21" height="40" rx="6" fill={index === 4 ? INK : WHITE} stroke={INK} strokeWidth="1.5" /><W x={24 + index * 25} y={85} size={10} fill={index === 4 ? WHITE : TEXT}>{month}</W></g>)}
      {at === 1 && <><rect x="140" y="120" width="40" height="64" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="140" y="150" width="40" height="34" rx="8" fill={TEXT} /><W x={160} y={206} size={11}>An average of 2 to 3 months</W></>}
      {at !== 1 && <W x={160} y={150} size={12}>{["Your GP should offer it yearly", "", "Back to the GP after a course", "Home kits can't confirm diabetes", "Know the signs between tests"][at]}</W>}
    </svg>} />;
}

function Course(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = Array.from({ length: 9 }, (_, index) => index);
  const topics = ["Food", "Weight", "Exercise", "Stress", "Sleep"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The programme" title="Nine months to change course" label="Prevention programme" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A nine-month programme, in a group or online">
      {at === 2 ? <Chips labels={topics} lit={-1} y={90} />
        : at === 4 ? <Chips labels={["England", "N. Ireland", "Scotland", "Wales"]} lit={-1} y={90} />
        : at === 1 ? <><g><Person x={80} y={120} scale={0.8} /><Person x={110} y={124} scale={0.8} fill={SOFT} /><Person x={140} y={120} scale={0.8} /></g><W x={110} y={170} size={11}>Group, face to face</W>
          <rect x="210" y="70" width="44" height="72" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><W x={232} y={170} size={11}>Digital</W></>
        : <>{months.map(month => <rect key={month} x={20 + month * 31} y="80" width="26" height="40" rx="6" fill={at === 3 && month > 6 ? WHITE : INK} opacity={0.4 + month * 0.07} />)}
          <W x={160} y={150} size={12}>{at === 3 ? "Ages 18 to 80: ask your GP" : "Nine months, called Healthier You"}</W></>}
    </svg>} />;
}

function Scales(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Weight" title="Smaller than you think" label="Weight" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Bathroom scales, and a small bracket for 1 to 9 per cent of body weight">
      <rect x="100" y="60" width="120" height="110" rx="18" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M130 96 A30 30 0 0 1 190 96" stroke={SOFT} strokeWidth="6" fill="none" />
      <path d="M160 96 L172 78" stroke={TEXT} strokeWidth="3" strokeLinecap="round" />
      {at === 1 && <><path d="M240 70 h12 v40 h-12" stroke={INK} strokeWidth="3" fill="none" /><W x={286} y={94} size={12}>1% to 9%</W></>}
      <W x={160} y={200} size={11.5}>{["Less hidden fat can help", "At 75kg: a pound and a half to a stone", "Not everyone needs to", "A diet you can stick to", "Your GP and a course can help"][at]}</W>
    </svg>} />;
}

function DayClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const marks = Array.from({ length: 8 }, (_, index) => index);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Moving" title="Slightly out of breath, often" label="Moving more" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day with standing breaks and a walk after a meal">
      {at === 2 ? <>
        <rect x="40" y="70" width="240" height="30" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="40" y="70" width="240" height="30" rx="10" fill={INK} /><W x={160} y={90} size={11} fill={WHITE}>150 minutes moderate</W>
        <rect x="40" y="120" width="120" height="30" rx="10" fill={SOFT} /><W x={100} y={140} size={11} fill={WHITE}>or 75 vigorous</W>
        <W x={160} y={186} size={11}>Strength on 2 days too</W>
      </> : <>
        <path d="M30 110 H290" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
        {marks.map(mark => <g key={mark}><circle cx={40 + mark * 34} cy="110" r="6" fill={at === 3 ? INK : SOFT} className={at === 3 && !still ? "lib-why-pulse" : undefined} /></g>)}
        {at === 4 || at === 0 ? <><Person x={226} y={92} scale={0.7} /><W x={226} y={46} size={10.5}>A walk after a meal</W></> : null}
        <W x={160} y={160} size={11.5}>{["It helps insulin work better", "Talk, but not sing", "", "Stand up every 30 to 45 minutes", "Start with 10 minutes"][at]}</W>
      </>}
    </svg>} />;
}

function Swaps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const pairs = [["Cola", "Water"], ["White bread", "Wholemeal"], ["Sausages", "Lentils"], ["Crisps", "Unsalted nuts"]];
  const lit = [-1, 0, 1, 2, 3][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Food" title="One swap at a time" label="Food swaps" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four food swaps">
      {pairs.map(([from, to], index) => <g key={from} transform={`translate(0 ${24 + index * 44})`} opacity={lit < 0 || lit === index ? 1 : 0.35}>
        <rect x="20" y="0" width="110" height="32" rx="10" fill={WHITE} stroke={SOFT} strokeWidth="2" /><W x={75} y={21} size={11} fill={SOFT}>{from}</W>
        <path d="M140 16 h30 M162 8 l8 8 l-8 8" stroke={INK} strokeWidth="3" fill="none" />
        <rect x="180" y="0" width="120" height="32" rx="10" fill={INK} /><W x={240} y={21} size={11} fill={WHITE}>{to}</W>
      </g>)}
      {at === 0 && <W x={160} y={208} size={11}>No banned foods</W>}
    </svg>} />;
}

function Night(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sleep and stress" title="Short nights, stress and sugar" label="Sleep and stress" credit="Illustration: Rehyn. A picture of the idea, not a real reading."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A moon and a blood-sugar line that rises with short sleep or stress">
      <path d="M80 50 A30 30 0 1 0 110 90 A24 24 0 1 1 80 50 Z" fill={at < 3 ? INK : SOFT} />
      <path d={`M30 170 C80 170, 120 ${at === 0 || at === 3 ? 110 : 150} 160 ${at === 0 || at === 3 ? 110 : 150} S250 170, 290 170`} stroke={INK} strokeWidth="4" fill="none" />
      {at === 3 && <W x={220} y={90} size={11}>Cortisol, adrenaline</W>}
      {at === 2 && <W x={210} y={70} size={14} serif>7 to 9 hours</W>}
      <W x={160} y={204} size={11.5}>{["Short sleep raises appetite", "Sleep apnoea raises the risk", "", "Stress hormones raise sugar", "Regular bedtimes; time to unwind"][at]}</W>
    </svg>} />;
}

function Units(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const pints = Array.from({ length: 6 }, (_, index) => index);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Alcohol" title="Fourteen units, and the calories" label="Alcohol" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Six pints of beer, which is 14 units">
      {pints.map(index => <path key={index} transform={`translate(${36 + index * 44} 60)`} d="M0 0 H28 L24 60 H4 Z" fill={at === 1 ? INK : TINT} stroke={INK} strokeWidth="2" />)}
      <W x={160} y={150} size={12}>{["Too much raises type 2 risk", "14 units: about six pints of beer", "It adds calories and hunger", "It disturbs sleep", "Smaller glasses, water in between"][at]}</W>
    </svg>} />;
}

function Household(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Together" title="Easier when everyone joins in" label="As a household" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A family together">
      {[90, 140, 190, 240].map((x, index) => <Person key={x} x={x} y={130} scale={index === 3 ? 0.7 : 1} fill={index === 1 ? INK : SOFT} />)}
      {at === 2 && <><rect x="40" y="160" width="60" height="22" rx="6" fill={SOFT} /><rect x="110" y="160" width="60" height="22" rx="6" fill={GOLD} /><W x={230} y={176} size={11}>Green and amber labels</W></>}
      <W x={160} y={40} size={11.5}>{["Family history raises the risk", "Changes stick when everyone joins in", "Shop and cook together", "Move together", "Be there, and listen"][at]}</W>
    </svg>} />;
}

// ==== Type 1 diabetes ======================================================================================

/** A blood-sugar dial in mmol/l: low below 4, the middle, high; the needle at `value` (0 to 1). */
const SugarDial = ({ x, y, r = 70, value, low = false, high = false }: { x: number; y: number; r?: number; value: number; low?: boolean; high?: boolean }) => {
  const at = (share: number) => [x + r * Math.cos(Math.PI * (1 - share)), y - r * Math.sin(Math.PI * (1 - share))];
  const [lx, ly] = at(0.2); const [hx, hy] = at(0.75); const [nx, ny] = at(value);
  return <g>
    <path d={`M${x - r} ${y} A${r} ${r} 0 0 1 ${lx} ${ly}`} stroke={low ? TEXT : LINE} strokeWidth="14" fill="none" />
    <path d={`M${lx} ${ly} A${r} ${r} 0 0 1 ${hx} ${hy}`} stroke={SOFT} strokeWidth="14" fill="none" />
    <path d={`M${hx} ${hy} A${r} ${r} 0 0 1 ${x + r} ${y}`} stroke={high ? GOLD : LINE} strokeWidth="14" fill="none" />
    <path d={`M${x} ${y} L${x + (nx - x) * 0.75} ${y + (ny - y) * 0.75}`} stroke={INK} strokeWidth="4" strokeLinecap="round" /><circle cx={x} cy={y} r="6" fill={INK} />
    <W x={x - r - 6} y={y + 20} size={10.5}>Low</W><W x={x + r + 6} y={y + 20} size={10.5}>High</W>
  </g>;
};

function BetaCells(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const cells = [[110, 80], [140, 70], [170, 84], [200, 72], [125, 112], [160, 110], [195, 108]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Not lifestyle, and nobody's fault" label="Type 1 diabetes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The cells that make insulin, being attacked by the immune system">
      {at === 4 ? <Chips labels={["Toilet", "Thirsty", "Tired", "Thinner"]} lit={-1} y={90} />
        : <>
          <path d="M70 100 C70 50, 240 40, 250 90 C258 130, 200 140, 150 132 C110 128, 70 140, 70 100 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
          {cells.map(([x, y], index) => <g key={index}><circle cx={x} cy={y} r="9" fill={at >= 1 && index % 2 === 0 ? LINE : INK} />{at >= 1 && index % 2 === 0 && <path d={`M${x - 7} ${y - 7} l14 14 M${x + 7} ${y - 7} l-14 14`} stroke={TEXT} strokeWidth="2.5" />}</g>)}
          {at === 1 && [[90, 60], [230, 60], [160, 150]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="7" fill="none" stroke={TEXT} strokeWidth="3" strokeDasharray="3 3" />)}
          <W x={160} y={186} size={11.5}>{["The body cannot make insulin", "The immune system attacks the cells", "Not caused by diet or lifestyle", "Often starts young, but any age"][at]}</W>
        </>}
    </svg>} />;
}

function HypoGauge(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Hypos and hypers" title="Too low, too high: the fixes" label="Hypos and hypers" credit="Illustration: Rehyn. Follow the plan your own team gave you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A blood sugar dial, low to high">
      <SugarDial x={160} y={140} value={at < 3 ? 0.08 : 0.92} low={at < 3} high={at >= 3} />
      <W x={160} y={40} size={12}>{["A hypo: usually below 4mmol/l", "15 to 20g of fast-acting sugar", "Unconscious: nothing by mouth", "A hyper: too high", "Water, insulin, check ketones"][at]}</W>
      {at === 1 && <W x={160} y={196} size={11}>Rest 10 to 15 minutes, test again</W>}
      {at === 2 && <W x={160} y={196} size={11}>Recovery position; call 999 if needed</W>}
    </svg>} />;
}

function Ketones(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const dots = Array.from({ length: at === 0 || at === 2 || at === 4 ? 14 : 6 }, (_, index) => index);
  return <MemoryBand props={props} state={s} tone="theme" kicker="DKA" title="The emergency ketones warn about" label="DKA" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A drop of blood filling with ketones">
      <Drop x={100} y={110} size={64} fill={WHITE} />
      <path d={`M100 46 C62 86, 62 128, 100 142 C138 128, 138 86, 100 46 Z`} fill="none" stroke={INK} strokeWidth="3" />
      {dots.map(index => <circle key={index} cx={84 + (index % 4) * 11} cy={98 + Math.floor(index / 4) * 11} r="3.5" fill={GOLD} />)}
      {at === 4 ? <><rect x="180" y="80" width="120" height="50" rx="12" fill={INK} /><W x={240} y={104} size={11} fill={WHITE}>Ketones over 3:</W><W x={240} y={120} size={11} fill={WHITE}>999 or A&amp;E</W></>
        : <W x={160} y={200} size={11.5}>{["Ketones make the blood acidic", "Illness, missed insulin", "Usually over about 24 hours", "Blood or urine test"][at]}</W>}
    </svg>} />;
}

function TwoNumbersT1(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const ring = 2 * Math.PI * 44;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The numbers" title="Two numbers, two different stories" label="HbA1c and time in range" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three months of HbA1c beside a day of time in range">
      <g opacity={at <= 2 || at === 4 ? 1 : 0.35}>{[0, 1, 2].map(month => <rect key={month} x={24 + month * 40} y="60" width="34" height="80" rx="8" fill={INK} opacity={0.5 + month * 0.25} />)}<W x={82} y={164} size={11}>HbA1c: 3 months</W>{at === 1 && <W x={82} y={184} size={11}>48 or below</W>}</g>
      <g opacity={at >= 3 ? 1 : 0.35}><circle cx="240" cy="100" r="44" fill="none" stroke={LINE} strokeWidth="16" /><circle cx="240" cy="100" r="44" fill="none" stroke={INK} strokeWidth="16" strokeDasharray={`${ring * 0.7} ${ring}`} transform="rotate(-90 240 100)" /><W x={240} y={105} size={13} serif>70%</W><W x={240} y={164} size={11}>Time in range</W></g>
      {at === 2 && <W x={160} y={206} size={11}>Every three to six months, for most</W>}
    </svg>} />;
}

function BasalBolus(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Insulin" title="Background all day, a burst at meals" label="Basal and bolus" credit="Illustration: Rehyn. A picture of the idea, not a dose."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A steady background insulin line, with three mealtime peaks">
      <path d="M20 170 H300" stroke={LINE} strokeWidth="2" />
      <path d="M20 140 H300" stroke={at === 1 || at === 3 || at === 0 ? INK : SOFT} strokeWidth="6" strokeLinecap="round" />
      {[70, 160, 250].map(x => <path key={x} d={`M${x - 26} 140 C${x - 10} 140, ${x - 8} 70, ${x} 70 S${x + 14} 140, ${x + 36} 140`} fill={at === 2 || at === 3 ? INK : SOFT} opacity={at === 2 || at === 3 ? 0.8 : 0.3} />)}
      <W x={70} y={190} size={10.5}>Breakfast</W><W x={160} y={190} size={10.5}>Lunch</W><W x={250} y={190} size={10.5}>Dinner</W>
      <W x={160} y={40} size={11.5}>{["Daily insulin: you can't live without it", "Basal: the background", "Bolus: a burst for meals", "Often 4 to 8 injections a day", "A pump: small amounts all the time"][at]}</W>
    </svg>} />;
}

function CarbScale(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Carb counting" title="Count the carbs, match the insulin" label="Carb counting" credit="Illustration: Rehyn. An example ratio; yours is set by your team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate on scales showing 70 grams, matched to 7 units of insulin">
      <rect x="40" y="130" width="120" height="30" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
      <ellipse cx="100" cy="116" rx="50" ry="12" fill={TINT} stroke={INK} strokeWidth="3" />
      <W x={100} y={150} size={12}>{at === 2 ? "70g" : "?g"}</W>
      <path d="M170 120 h30 M192 112 l8 8 l-8 8" stroke={INK} strokeWidth="3" fill="none" />
      <rect x="214" y="100" width="80" height="22" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="214" y="100" width="40" height="22" rx="10" fill={INK} />
      <W x={254} y={150} size={12}>{at === 2 ? "7 units" : "units"}</W>
      <W x={160} y={50} size={11.5}>{["Match insulin to the food", "Your own ratio, fine-tuned", "1 unit per 10g: 70g needs 7", "Labels and scales help", "Courses such as DAFNE teach it"][at]}</W>
    </svg>} />;
}

function Loop(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Technology" title="Sensor and pump, talking to each other" label="Sensors and pumps" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with a sensor on the arm and a pump at the waist">
      <circle cx="160" cy="40" r="20" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M126 190 C126 120, 140 70, 160 70 C180 70, 194 120, 194 190 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M126 90 L96 150 M194 90 L224 150" stroke={INK} strokeWidth="8" strokeLinecap="round" />
      <circle cx="104" cy="120" r="9" fill={at === 0 || at === 1 || at === 3 ? INK : SOFT} />
      <rect x="168" y="140" width="22" height="30" rx="5" fill={at >= 2 ? INK : SOFT} />
      {at === 3 && <path d="M110 110 C130 60, 190 60, 186 136" stroke={GOLD} strokeWidth="3" fill="none" strokeDasharray="5 5" />}
      <W x={160} y={214} size={11}>{["A sensor reads glucose day and night", "It can lag 15 minutes: keep a finger-prick kit", "A pump gives insulin day and night", "A hybrid closed loop links the two", "Ask your team what you can have"][at]}</W>
    </svg>} />;
}

function SickKit(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Sick days" title="When you're ill, keep the insulin going" label="Sick-day rules" credit="Illustration: Rehyn. Follow the sick-day rules your own team gave you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A thermometer, a clock, a ketone strip and a glass of water">
      <g opacity={at === 0 ? 1 : 0.4}><rect x="30" y="50" width="16" height="90" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="38" cy="150" r="14" fill={INK} /></g>
      <g opacity={at === 1 ? 1 : 0.4}><rect x="80" y="60" width="44" height="22" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="80" y="60" width="22" height="22" rx="10" fill={INK} /><W x={102} y={110} size={10.5}>Insulin</W></g>
      <g opacity={at === 2 ? 1 : 0.4}><circle cx="180" cy="90" r="30" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M180 90 V68 M180 90 L196 98" stroke={TEXT} strokeWidth="3" /><W x={180} y={140} size={10.5}>Every 4 hours</W></g>
      <g opacity={at === 3 ? 1 : 0.4}><path d="M240 60 H280 L274 140 H246 Z" fill={TINT} stroke={INK} strokeWidth="3" /><W x={260} y={160} size={10.5}>Drink plenty</W></g>
      <W x={160} y={200} size={11.5}>{["Illness can trigger DKA", "Never stop insulin", "Check sugar and ketones more", "Little and often; flat fizzy drinks", "Ketones over 3: 999 or A&E"][at]}</W>
    </svg>} />;
}

function LateLow(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exercise" title="The low that comes hours later" label="Exercise" credit="Illustration: Rehyn. A picture of the idea, not a real reading."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day with exercise and a blood sugar dip at night">
      <path d="M20 160 H300" stroke={LINE} strokeWidth="2" />
      <path d={`M20 110 C60 110, 80 ${at === 0 ? 80 : 110}, 110 110 S180 110, 210 ${at === 2 ? 150 : 110} S280 110, 300 110`} stroke={INK} strokeWidth="4" fill="none" />
      <Person x={70} y={86} scale={0.6} />
      <path d="M240 40 A16 16 0 1 0 256 60 A12 12 0 1 1 240 40 Z" fill={SOFT} />
      <W x={70} y={182} size={10.5}>Exercise</W><W x={240} y={182} size={10.5}>2 to 3am</W>
      <W x={160} y={208} size={11.5}>{["Some exercise lowers it, some raises it", "Check before and during", "8 to 12 hours later, it can drop", "Steadier sugar over time"][at]}</W>
    </svg>} />;
}

function FiveDrive(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Driving" title="Five to drive" label="Driving" credit="Illustration: Rehyn. Check the DVLA rules for your licence."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A car dashboard showing a blood glucose of 5">
      <path d="M30 150 C30 70, 290 70, 290 150 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="120" y="96" width="80" height="44" rx="10" fill={at === 1 ? INK : TINT} /><W x={160} y={126} size={20} serif fill={at === 1 ? WHITE : TEXT}>{at === 2 ? "45 min" : "5+"}</W>
      <W x={160} y={186} size={11.5}>{["Tell the DVLA you take insulin", "5mmol/l or above before you drive", "Pull over, keys out, treat, wait", "Hypo treatment within reach"][at]}</W>
    </svg>} />;
}

function DrinkNight(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Alcohol" title="The hypo that hides behind a drink" label="Alcohol" credit="Illustration: Rehyn. A picture of the idea, not a real reading."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A glass, and a blood sugar line dipping overnight and into the next day">
      <path d="M40 60 H76 L70 120 H46 Z" fill={TINT} stroke={INK} strokeWidth="3" />
      <path d={`M100 100 C140 100, 170 ${at === 0 || at === 3 ? 160 : 110}, 210 ${at === 0 || at === 3 ? 160 : 110} S280 120, 300 110`} stroke={INK} strokeWidth="4" fill="none" />
      <W x={210} y={190} size={10.5}>Up to 24 hours</W>
      <W x={160} y={40} size={11.5}>{["Hypos are more likely", "No more than 14 units a week", "A hypo can look like being drunk", "Water, breakfast, keep checking", "Unconscious after drinking: 999"][at]}</W>
    </svg>} />;
}

function Distress(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Burnout" title="Worn down by the relentlessness" label="Diabetes distress" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four people, one of them highlighted">
      {[70, 130, 190, 250].map((x, index) => <Person key={x} x={x} y={120} fill={at === 1 && index === 0 ? INK : SOFT} />)}
      {at === 3 && <path d="M70 70 C100 40, 220 40, 250 70" stroke={INK} strokeWidth="3" fill="none" strokeDasharray="5 5" />}
      <W x={160} y={180} size={11.5}>{["Overwhelmed by the daily work", "1 in 4 have high distress", "Anger, worry, avoiding checks", "Your team and others with type 1", "Smaller goals; say high and low"][at]}</W>
    </svg>} />;
}

function PregnancyLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stops = [{ x: 40, t: "Plan ahead" }, { x: 110, t: "HbA1c" }, { x: 170, t: "Folic acid" }, { x: 230, t: "Pregnancy" }, { x: 290, t: "Birth" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pregnancy" title="Planning ahead for a healthy pregnancy" label="Pregnancy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from planning a pregnancy to the birth">
      <path d="M40 110 H290" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {stops.map((stop, index) => <g key={stop.t}><circle cx={stop.x} cy="110" r={index === at ? 12 : 8} fill={index === at ? INK : SOFT} /><W x={stop.x} y={index % 2 ? 146 : 86} size={10.5}>{stop.t}</W></g>)}
      <W x={160} y={196} size={11.5}>{["See your team 6 to 12 months before", "Ideally 48mmol/mol or below", "5mg a day, on prescription", "Checks every two weeks", "Feed your baby within 30 minutes"][at]}</W>
    </svg>} />;
}

// ==== The thyroid ==========================================================================================

/** The thyroid gland, centred on (x, y): two tall lobes joined low down, with part `cut` (0 none, 1 half, 2 all). */
const Gland = ({ x, y, scale = 1, fill = TINT, cut = 0 }: { x: number; y: number; scale?: number; fill?: string; cut?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} strokeLinejoin="round">
    <path d="M-12 30 C-24 42, -48 40, -52 12 C-56 -16, -44 -52, -32 -52 C-22 -52, -18 -32, -16 -8 C-14 8, -13 20, -12 30 Z" fill={cut === 2 ? "none" : fill} stroke={INK} strokeWidth="3" strokeDasharray={cut === 2 ? "5 5" : undefined} />
    <path d="M12 30 C24 42, 48 40, 52 12 C56 -16, 44 -52, 32 -52 C22 -52, 18 -32, 16 -8 C14 8, 13 20, 12 30 Z" fill={cut >= 1 ? "none" : fill} stroke={INK} strokeWidth="3" strokeDasharray={cut >= 1 ? "5 5" : undefined} />
    <path d="M-14 18 C-4 24, 4 24, 14 18 L14 30 C4 36, -4 36, -14 30 Z" fill={cut === 2 ? "none" : fill} stroke={INK} strokeWidth="2.5" />
  </g>;
/** A seesaw: left label down when `leftDown`. */
const Seesaw = ({ left, right, leftDown }: { left: string; right: string; leftDown: boolean }) => {
  const tilt = leftDown ? 10 : -10;
  return <g>
    <path d="M160 150 L144 180 H176 Z" fill={SOFT} />
    <g transform={`rotate(${tilt} 160 150)`}><path d="M50 150 H270" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <rect x="40" y="114" width="80" height="32" rx="10" fill={INK} /><W x={80} y={135} size={12} fill={WHITE}>{left}</W>
      <rect x="200" y="114" width="80" height="32" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={240} y={135} size={12}>{right}</W></g>
  </g>;
};

function Thermostat(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it does" title="The pace-setter that slowed down" label="The thyroid" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The thyroid in the neck, with the pituitary above it like a thermostat">
      <Gland x={110} y={120} fill={at === 0 ? INK : TINT} />
      <circle cx="110" cy="30" r="16" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="3" />
      <path d="M110 46 V64" stroke={INK} strokeWidth="3" strokeDasharray="4 4" />
      {at === 2 && <W x={150} y={34} size={11} anchor="start">Pituitary: more TSH</W>}
      {at === 3 ? <Chips labels={["Tired", "Cold", "Weight", "Constipation"]} lit={-1} y={176} /> : <W x={246} y={120} size={11.5}>{["A gland in the neck", "Too little: it all slows", "", "", "Common, and treatable"][at]}</W>}
    </svg>} />;
}

function Antibodies(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="When the immune system turns on the thyroid" label="Causes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The thyroid with antibodies around it">
      <Gland x={160} y={100} scale={1.2} />
      {at === 0 && [[90, 50], [230, 50], [80, 140], [240, 140], [160, 170]].map(([x, y]) => <path key={x} d={`M${x} ${y} v-12 M${x} ${y} l-9 8 M${x} ${y} l9 8`} stroke={TEXT} strokeWidth="3" strokeLinecap="round" />)}
      <W x={160} y={204} size={11.5}>{["Usually Hashimoto's disease", "Most often women aged 30 to 50", "After radioiodine, surgery, some medicines", "Thyroiditis, the pituitary, too much kelp"][at]}</W>
    </svg>} />;
}

function HypoSeesaw(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Blood tests" title="Reading TSH and T4" label="TSH and T4" credit="Illustration: Rehyn. Your doctor reads your own results with your symptoms."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A seesaw with TSH and T4">
      <Seesaw left="T4" right="TSH" leftDown={at === 1 || at === 0} />
      <W x={160} y={50} size={11.5}>{["When T4 falls, TSH rises", "Underactive: TSH high, T4 low", "Often TSH is tested first", "Raised TSH, normal T4: mild", "Illness and supplements can affect it"][at]}</W>
    </svg>} />;
}

function Checklist(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const items = ["It can take months", "Take it the same way", "A small dose change?", "Iron, B12, vitamin D, coeliac", "Fatigue is not just tiredness"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Still tired?" title="Still tired? Check these first" label="Still tired" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A checklist of things to check">
      {items.map((item, index) => <g key={item} transform={`translate(40 ${20 + index * 38})`}>
        <rect width="22" height="22" rx="5" fill={index <= at ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {index <= at && <path d="M5 11 l4 5 l9 -10" stroke={WHITE} strokeWidth="2.5" fill="none" />}
        <W x={36} y={16} size={11.5} anchor="start" fill={index === at ? INK : TEXT}>{item}</W>
      </g>)}
    </svg>} />;
}

function Morning(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Levothyroxine" title="One tablet, empty stomach, every morning" label="Taking levothyroxine" credit="Illustration: Rehyn. Follow the instructions with your own medicine."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tablet on waking, then a gap of 30 to 60 minutes before breakfast">
      <path d="M30 110 H290" stroke={LINE} strokeWidth="10" strokeLinecap="round" />
      <rect x="70" y="100" width="110" height="20" rx="6" fill={SOFT} opacity=".6" />
      <circle cx="50" cy="110" r="14" fill={INK} /><W x={50} y={86} size={10.5}>Tablet</W>
      <W x={125} y={146} size={10.5}>30 to 60 minutes</W>
      <circle cx="210" cy="110" r="14" fill={WHITE} stroke={INK} strokeWidth="3" /><W x={210} y={86} size={10.5}>Breakfast, tea</W>
      <W x={160} y={196} size={11.5}>{["It replaces the missing hormone", "Empty stomach, with water", "Same time each day", "Missed one? Never double up", "Store it cool and dry"][at]}</W>
    </svg>} />;
}

function DoseSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The dose" title="Start low, test, adjust, repeat" label="Finding the dose" credit="Illustration: Rehyn. A picture of the idea, not a dose."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A staircase of dose steps, levelling off">
      <path d="M30 170 H80 V140 H130 V110 H180 V90 H290" stroke={INK} strokeWidth="4" fill="none" />
      {[80, 130, 180].map(x => <circle key={x} cx={x} cy={at === 2 ? 60 : 200} r="0" />)}
      {at === 2 && [80, 130, 180].map(x => <g key={x}><Drop x={x} y={60} size={14} fill={TEXT} /></g>)}
      <W x={160} y={204} size={11.5}>{["Weight, age, other conditions", "Start low, go up gradually", "Tests 3 months after a change", "Keep TSH in the range", "Weight changes, pregnancy, age"][at]}</W>
      {at === 3 && <rect x="180" y="80" width="110" height="20" rx="6" fill={SOFT} opacity=".5" />}
    </svg>} />;
}

function FourHours(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const r = 70;
  const mark = (hours: number) => [160 + r * Math.sin((hours / 12) * 2 * Math.PI), 110 - r * Math.cos((hours / 12) * 2 * Math.PI)];
  const [cx, cy] = mark(0.5); const [ix, iy] = mark(4);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Timing" title="Timing beats cutting things out" label="What gets in the way" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock: levothyroxine, coffee after 30 minutes, calcium or iron after four hours">
      <circle cx="160" cy="110" r={r} fill={WHITE} stroke={INK} strokeWidth="3" />
      <circle cx="160" cy="40" r="9" fill={INK} /><W x={160} y={24} size={10.5}>Tablet</W>
      <circle cx={cx} cy={cy} r="8" fill={at === 0 ? GOLD : SOFT} /><W x={cx + 50} y={cy} size={10.5}>Coffee: 30 min</W>
      <circle cx={ix} cy={iy} r="8" fill={at === 1 ? GOLD : SOFT} /><W x={ix + 50} y={iy - 2} size={10.5}>Calcium, iron:</W><W x={ix + 50} y={iy + 13} size={10.5}>4 hours</W>
      <W x={160} y={208} size={11.5}>{["Empty stomach, then wait", "Four hours apart", "Some medicines and supplements", "Kelp no; nori and kale are fine"][at]}</W>
    </svg>} />;
}

function ThyroidScales(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Weight" title="Thyroid and weight, honestly" label="Weight" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Scales, with a little extra weight from salt and water">
      <rect x="100" y="70" width="120" height="100" rx="18" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M130 104 A30 30 0 0 1 190 104" stroke={SOFT} strokeWidth="6" fill="none" /><path d="M160 104 L172 86" stroke={TEXT} strokeWidth="3" />
      {at === 1 && <><Drop x={250} y={110} size={24} fill={SOFT} /><W x={250} y={150} size={10.5}>Salt and water</W></>}
      <W x={160} y={204} size={11.5}>{["A slower metabolism", "Mostly salt and water", "Usually under 10% lost", "Then the same as anyone"][at]}</W>
    </svg>} />;
}

function Fog(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood and memory" title="Fog that lifts with treatment" label="Mood and memory" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head with a cloud that thins as treatment works">
      <path d="M150 40 C110 40, 90 70, 96 100 C80 120, 96 140, 110 146 L110 180 H170 L170 160 C196 160, 206 140, 200 120 L214 110 L200 100 C206 64, 186 40, 150 40 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M120 84 a18 18 0 0 1 34 -6 a14 14 0 0 1 22 14 H124 a10 10 0 0 1 -4 -8 Z" fill={SOFT} opacity={at === 3 ? 0.2 : 0.8} />
      <W x={160} y={206} size={11.5}>{["Common, and real", "Rarely as severe as dementia", "Hormone levels unsettle it", "It usually improves"][at]}</W>
    </svg>} />;
}

function HypoPregnancy(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stops = ["Planning", "First weeks", "Dose up", "Birth", "After"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pregnancy" title="A bigger dose for two" label="Pregnancy" credit="Illustration: Rehyn. Your team sets your own dose."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from planning to after the birth, with the dose going up and back down">
      <path d="M30 150 H110 V110 H230 V150 H290" stroke={INK} strokeWidth="5" fill="none" />
      {stops.map((stop, index) => <g key={stop}><circle cx={40 + index * 60} cy="180" r={index === at ? 9 : 6} fill={index === at ? INK : SOFT} /><W x={40 + index * 60} y={204} size={10}>{stop}</W></g>)}
      <W x={160} y={50} size={11.5}>{["Tell your doctor; test first", "The baby relies on your hormones", "Increase the dose straight away", "Back to your usual dose", "Thyroiditis: 5 to 10 in 100"][at]}</W>
    </svg>} />;
}

function TestCalendar(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const marks = at === 0 ? [0, 3, 6, 9] : at === 1 ? [6] : [2, 6];
  const months = Array.from({ length: 12 }, (_, index) => index);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tests" title="Every three months, then yearly" label="How often" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year with blood tests marked">
      {months.map(month => <g key={month}><rect x={14 + month * 25} y="70" width="21" height="44" rx="6" fill={marks.includes(month) ? INK : WHITE} stroke={INK} strokeWidth="1.5" /></g>)}
      <W x={160} y={150} size={11.5}>{["Every 3 months until stable", "Then once a year", "Sooner if things change", "Ask for your results"][at]}</W>
    </svg>} />;
}

function Fast(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="What it is" title="The pace-setter stuck on fast" label="Overactive thyroid" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with a racing heart and a shaking hand">
      <circle cx="120" cy="40" r="20" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M86 200 C86 120, 100 70, 120 70 C140 70, 154 120, 154 200 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      <Gland x={120} y={72} scale={0.3} fill={INK} />
      <path d="M128 110 l6 -8 l6 16 l6 -14 l6 8" stroke={INK} strokeWidth="3" fill="none" className={still ? undefined : "lib-why-pulse"} />
      <W x={240} y={110} size={11.5}>{["Cells work faster", "Anxious, hot, sleepless", "Goitre, fast heart, tremor", "Gradual, or sudden", "A blood test can show it"][at]}</W>
    </svg>} />;
}

function FiveFigures(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Four in five: Graves' disease" label="Causes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five people, four of them with Graves' disease">
      {[60, 110, 160, 210, 260].map((x, index) => <Person key={x} x={x} y={110} fill={index < 4 ? (at === 0 ? INK : SOFT) : (at >= 2 ? INK : LINE)} />)}
      <W x={160} y={170} size={11.5}>{["About 4 in 5: Graves' disease", "Smoking and stress play a part", "Lumps, usually over 60", "Medicines or thyroiditis"][at]}</W>
    </svg>} />;
}

function HyperSeesaw(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="Low TSH, high T4: what next?" label="Tests" credit="Illustration: Rehyn. Your doctor reads your own results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A seesaw with TSH low and T4 high">
      {at <= 1 ? <Seesaw left="TSH" right="T4" leftDown={false} /> : <><Gland x={160} y={110} scale={1.2} /><circle cx="200" cy="90" r="26" fill="none" stroke={INK} strokeWidth="4" /><path d="M218 108 L236 126" stroke={INK} strokeWidth="6" strokeLinecap="round" /></>}
      <W x={160} y={40} size={11.5}>{["TSH low, T3 or T4 high", "Normal depends on age and test", "Antibodies show the cause", "Inflammation tests and scans", "Tell them about every medicine"][at]}</W>
    </svg>} />;
}

function Eye(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Eyes" title="Eyes that need a second look" label="Thyroid eye disease" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An eye pushed forward by swelling behind it">
      <path d="M60 110 C100 60, 220 60, 260 110 C220 160, 100 160, 60 110 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      <circle cx={at === 1 || at === 4 ? 170 : 160} cy="110" r="30" fill={SOFT} /><circle cx={at === 1 || at === 4 ? 170 : 160} cy="110" r="12" fill={TEXT} />
      {at === 4 ? <><rect x="60" y="172" width="200" height="34" rx="12" fill={INK} /><W x={160} y={194} size={11} fill={WHITE}>Bulging and vision change: 999</W></>
        : <W x={160} y={196} size={11.5}>{["Swelling behind the eye", "Gritty, watering, bulging, double", "Aching, not itching", "Drops, and treating the thyroid"][at]}</W>}
    </svg>} />;
}

function SoreThroat(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Carbimazole" title="The sore-throat rule" label="Carbimazole" credit="Illustration: Rehyn. Follow the instructions with your own medicine."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two lights: feeling better, and stop and call with a sore throat or fever">
      <rect x="40" y="40" width="70" height="140" rx="20" fill={TEXT} />
      <circle cx="75" cy="80" r="22" fill={SOFT} opacity={at === 3 ? 0.25 : 1} /><circle cx="75" cy="140" r="22" fill={GOLD} opacity={at === 3 ? 1 : 0.25} />
      <W x={130} y={84} size={11} anchor="start">{at === 1 ? "12 to 18 months, for many" : "Better in 1 to 3 weeks"}</W>
      <W x={130} y={144} size={11} anchor="start">Sore throat, fever, ulcers:</W>
      <W x={130} y={160} size={11} anchor="start">stop, and call now</W>
      <W x={160} y={208} size={11}>{["It blocks the iodine the gland uses", "", "Sickness, headaches, rash, early on", "", "Use contraception"][at]}</W>
    </svg>} />;
}

function Capsule(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Radioiodine" title="One capsule, a few careful weeks" label="Radioiodine" credit="Illustration: Rehyn. Your hospital gives your own instructions."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A capsule, then a timeline of precautions">
      <rect x="40" y="90" width="44" height="22" rx="11" fill={INK} />
      <path d="M100 100 H290" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {at === 2 && <><W x={160} y={80} size={10.5}>Distance from children</W><W x={250} y={140} size={10.5}>No pregnancy: 6 months</W></>}
      <W x={160} y={186} size={11.5}>{["It shrinks the overactive gland", "A drink or a capsule", "Some precautions for a while", "Not in pregnancy or with eye problems", "Often underactive later: tablets"][at]}</W>
    </svg>} />;
}

function ThreeOps(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Surgery" title="When surgery is the answer" label="Surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three thyroid glands: all removed, half removed, and most removed">
      {at === 1 ? <><Gland x={60} y={100} cut={2} scale={0.75} /><Gland x={160} y={100} cut={1} scale={0.75} /><Gland x={260} y={100} cut={2} scale={0.75} />
        <W x={60} y={170} size={10}>Total</W><W x={160} y={170} size={10}>Half</W><W x={260} y={170} size={10}>Near-total</W></>
        : <Gland x={160} y={100} scale={1.2} cut={at === 3 ? 2 : 0} />}
      <W x={160} y={204} size={11.5}>{["A large goitre or eye problems", "", "Ask about every risk", "Then levothyroxine for life"][at]}</W>
    </svg>} />;
}

function HeartCalm(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Beta blockers" title="Calming the racing heart" label="Beta blockers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A racing heart slowing down">
      <path d="M100 160 C60 130, 50 100, 60 80 C70 60, 96 60, 100 80 C104 60, 130 60, 140 80 C150 100, 140 130, 100 160 Z" fill={TINT} stroke={INK} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />
      <path d="M170 110 C190 110, 194 70, 206 70 S220 140, 232 140 S244 100, 260 100 S280 110, 300 110" stroke={INK} strokeWidth="3" fill="none" />
      <W x={160} y={204} size={11.5}>{["It slows the heart", "While other treatment starts", "The first dose can make you dizzy", "Breathless with a cough: call", "Never stop suddenly"][at]}</W>
    </svg>} />;
}

function CalmHead(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Anxiety" title="It's the thyroid, not you" label="Anxiety" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An anxious head and a calm head">
      {[90, 230].map((x, index) => <g key={x}><circle cx={x} cy="100" r="50" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d={index === 0 ? `M${x - 26} 90 l8 -10 l8 16 l8 -16 l8 16 l8 -10` : `M${x - 24} 100 q12 -10 24 0 t24 0`} stroke={index === 0 ? TEXT : INK} strokeWidth="3" fill="none" opacity={index === 0 ? (at >= 2 ? 0.4 : 1) : (at >= 2 ? 1 : 0.4)} /></g>)}
      <W x={160} y={190} size={11.5}>{["A symptom, not a failing", "Hormones unsettle emotions", "Exercise, stress care, propranolol", "Most people recover fully"][at]}</W>
    </svg>} />;
}

function SmokeEyes(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const rows = [{ t: "Non-smoker", n: 1 }, { t: "Smoker", n: 2 }, { t: "After radioiodine", n: 4 }, { t: "Heavy smoker", n: 8 }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Smoking" title="Every cigarette counts for your eyes" label="Smoking and eyes" credit="Illustration: Rehyn. How much more likely, from the British Thyroid Foundation."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Eye disease is 2 times as likely in smokers, 4 times after radioiodine, and 8 times in heavy smokers">
      {at === 3 ? <W x={160} y={110} size={13}>The risk falls quickly after stopping</W>
        : rows.map((row, index) => <g key={row.t} transform={`translate(0 ${30 + index * 42})`}>
          <W x={110} y={14} size={10.5} anchor="end">{row.t}</W>
          {Array.from({ length: row.n }, (_, eye) => <ellipse key={eye} cx={130 + eye * 22} cy="10" rx="9" ry="6" fill={index === 0 ? SOFT : INK} />)}
        </g>)}
      {at === 2 && <W x={160} y={208} size={11}>Treatment works less well while smoking</W>}
    </svg>} />;
}

function HyperPregnancy(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stops = ["Planning", "Control", "Medicine", "Antibodies", "After"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pregnancy" title="Planning a pregnancy with an overactive thyroid" label="Pregnancy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline through pregnancy">
      <path d="M40 110 H280" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {stops.map((stop, index) => <g key={stop}><circle cx={40 + index * 60} cy="110" r={index === at ? 11 : 7} fill={index === at ? INK : SOFT} /><W x={40 + index * 60} y={index % 2 ? 146 : 86} size={10}>{stop}</W></g>)}
      <W x={160} y={196} size={11.5}>{["Contraception, then a test first", "Control lowers the risks", "Usually a switch to PTU", "Tell your obstetrician", "A test around 3 months after"][at]}</W>
    </svg>} />;
}

function Pendulum(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  // Rotating clockwise swings the bob left, towards "Fast"; underactive (slow) swings it right.
  const angle = at === 0 || at === 1 ? -24 : at === 3 ? 24 : 0;
  return <MemoryBand props={props} state={s} tone="theme" kicker="After treatment" title="When fast turns slow" label="After treatment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pendulum swinging between fast and slow">
      <path d="M60 170 A110 110 0 0 1 260 170" stroke={LINE} strokeWidth="6" fill="none" />
      <W x={60} y={194} size={11}>Fast</W><W x={260} y={194} size={11}>Slow</W>
      <g transform={`rotate(${angle} 160 40)`}><path d="M160 40 V160" stroke={INK} strokeWidth="4" /><circle cx="160" cy="168" r="14" fill={INK} /></g>
      <W x={160} y={28} size={11.5}>{["Often underactive after radioiodine", "Tired, cold, weight gain", "Tests every 6 weeks at first", "After tablets, it can come back", "It can take time to feel normal"][at]}</W>
    </svg>} />;
}

// ==== Type 2 diabetes ======================================================================================

function StickyCell(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="HbA1c" title="One number for three months" label="HbA1c" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A red blood cell with sugar stuck to it, and three months">
      {at === 1 ? <HbA1cBar y={80} lit={0} /> : <>
        <ellipse cx="90" cy="100" rx="50" ry="40" fill={TINT} stroke={INK} strokeWidth="3" /><ellipse cx="90" cy="100" rx="20" ry="14" fill={WHITE} stroke={SOFT} strokeWidth="2" />
        {[[52, 80], [120, 76], [130, 116], [60, 126], [92, 60]].map(([x, y]) => <rect key={x} x={x - 6} y={y - 6} width="12" height="12" rx="2" fill={GOLD} />)}
        {[0, 1, 2].map(month => <rect key={month} x={176 + month * 40} y="70" width="34" height="60" rx="8" fill={INK} opacity={0.5 + month * 0.25} />)}
      </>}
      <W x={160} y={186} size={11.5}>{["Sugar sticks to red blood cells", "Ideally 48mmol/mol or below", "Every three to six months, for most", "High means more risk of complications", "Not the same as a finger-prick"][at]}</W>
    </svg>} />;
}

function Key(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const open = at === 0;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="What it is" title="The key that stops fitting" label="Type 2 diabetes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Insulin as a key to a cell: one opens, one stays shut and sugar builds up">
      <circle cx="210" cy="100" r="56" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="150" y="86" width="14" height="28" rx="3" fill={open ? WHITE : INK} stroke={INK} strokeWidth="2" />
      <g transform="translate(60 100)"><circle cx="0" cy="0" r="14" fill="none" stroke={INK} strokeWidth="5" /><path d="M14 0 H66 M52 0 V12 M62 0 V10" stroke={INK} strokeWidth="5" /></g>
      {(open ? [[200, 90], [222, 110], [214, 78]] : [[40, 160], [60, 170], [80, 158], [100, 172], [120, 162]]).map(([x, y]) => <Drop key={x} x={x} y={y} size={10} fill={GOLD} />)}
      {at === 3 ? <Chips labels={["Age", "Background", "Family", "Weight"]} lit={-1} y={180} /> : <W x={160} y={200} size={11.5}>{["Insulin: the key to the cells", "Not enough, or it does not work", "Cells stop responding", "", "Often found on a blood test"][at]}</W>}
    </svg>} />;
}

function FourSpots(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots = [{ x: 160, y: 44, t: "Eyes", i: 1 }, { x: 180, y: 108, t: "Kidneys", i: 2 }, { x: 150, y: 88, t: "Heart", i: 3 }, { x: 140, y: 200, t: "Feet", i: 4 }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Why the checks matter" title="Four places high sugar shows" label="Complications" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with the eyes, heart, kidneys and feet marked">
      <circle cx="160" cy="40" r="20" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M126 190 C126 120, 140 70, 160 70 C180 70, 194 120, 194 190 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M136 190 V204 M184 190 V204" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      {spots.map(spot => <g key={spot.t} opacity={at === 0 || at === spot.i ? 1 : 0.3}><circle cx={spot.x} cy={spot.y} r="8" fill={INK} /><W x={spot.x < 160 ? 104 : 220} y={spot.y + 4} size={11} anchor={spot.x < 160 ? "end" : "start"}>{spot.t}</W></g>)}
    </svg>} />;
}

function RemissionLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Remission" title="Below the line, without the tablets" label="Remission" credit="Illustration: Rehyn. A picture of the idea, not a real result."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An HbA1c line falling below the diabetes line and staying there">
      <path d="M30 100 H300" stroke={TEXT} strokeWidth="2" strokeDasharray="6 6" /><W x={296} y={92} size={10} anchor="end">48 mmol/mol</W>
      <path d={`M30 60 C80 60, 110 130, 150 130 S${at === 4 ? "220 120, 250 96 S290 80, 300 76" : "240 136, 300 134"}`} stroke={INK} strokeWidth="4" fill="none" />
      <W x={160} y={186} size={11.5}>{["Below 48 for 3 months, no medicine", "Mainly through weight loss", "Better chances, sooner after diagnosis", "Soups and shakes, with support", "It can rise again: keep your checks"][at]}</W>
    </svg>} />;
}

function HypoSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const steps = ["Below 4: sugary drink", "Check after 10 to 15 min", "Still low? Again", "Then a snack or meal"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Hypos" title="Low sugar: spot it, fix it" label="Hypos" credit="Illustration: Rehyn. Follow the plan your own team gave you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Steps for treating a hypo">
      {at === 2 ? steps.map((step, index) => <g key={step}><rect x="60" y={20 + index * 46} width="200" height="36" rx="12" fill={index === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={160} y={43 + index * 46} size={11.5} fill={index === 0 ? WHITE : TEXT}>{step}</W></g>)
        : at === 1 ? <Chips labels={["Hungry", "Shaky", "Sweaty", "Dizzy"]} lit={-1} y={90} />
        : at === 3 ? <><rect x="50" y="70" width="220" height="60" rx="14" fill={INK} /><W x={160} y={96} size={12} fill={WHITE}>Unconscious: nothing by mouth</W><W x={160} y={114} size={11} fill={WHITE}>Recovery position; 999 if needed</W></>
        : <><SugarDial x={160} y={140} value={0.1} low /><W x={160} y={40} size={11.5}>{at === 0 ? "Mostly with insulin or some tablets" : "Regular meals; care with alcohol"}</W></>}
    </svg>} />;
}

function PillCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const cards = [{ t: "Metformin", n: "Liver releases less" }, { t: "SGLT2 inhibitor", n: "Protects heart, kidneys" }, { t: "Gliclazide", n: "Pancreas makes more" }, { t: "Gliptin", n: "More insulin after food" }];
  const lit = [[0, 1, 2, 3], [0], [1], [2, 3], [0, 1, 2, 3]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tablets" title="Different tablets, different jobs" label="Tablets" credit="Illustration: Rehyn. Never stop or change medicines without your team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four kinds of diabetes tablet and what each does">
      {cards.map((card, index) => <g key={card.t} transform={`translate(20 ${18 + index * 40})`} opacity={lit.includes(index) ? 1 : 0.35}>
        <rect width="280" height="32" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" /><Pill x={26} y={16} />
        <W x={54} y={21} size={11} anchor="start">{card.t}</W><W x={270} y={21} size={10.5} anchor="end" fill={INK}>{card.n}</W>
      </g>)}
      <W x={160} y={200} size={11.5}>{["Not a sign of failure", "Usually the first", "Often alongside metformin", "Others, for some people", "Keep taking them"][at]}</W>
    </svg>} />;
}

function PenWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Injections" title="When the pen joins the pills" label="Injections" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week with one weekly injection, and an insulin pen">
      {at < 3 ? <>
        {days.map((day, index) => <g key={index}><rect x={22 + index * 40} y="60" width="34" height="50" rx="8" fill={index === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={39 + index * 40} y={90} size={11} fill={index === 0 ? WHITE : TEXT}>{day}</W></g>)}
        <W x={160} y={150} size={11.5}>{["GLP-1: often once a week", "Who is offered one", "Sickness, constipation, diarrhoea"][at]}</W>
      </> : <>
        <rect x="70" y="90" width="180" height="26" rx="13" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="70" y="90" width="70" height="26" rx="13" fill={INK} /><path d="M250 103 h20" stroke={INK} strokeWidth="3" />
        {[0, 1, 2, 3].map(index => <Person key={index} x={110 + index * 34} y={190} scale={0.6} fill={index === 0 ? INK : SOFT} />)}
        <W x={160} y={60} size={11.5}>{at === 3 ? "About 1 in 4 take insulin" : "A pen; the needles are very small"}</W>
      </>}
    </svg>} />;
}

function HandPortions(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Food" title="No special diet, just better choices" label="Food" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate with portions">
      <circle cx="110" cy="110" r="70" fill={WHITE} stroke={LINE} strokeWidth="3" />
      <path d="M110 110 L110 40 A70 70 0 0 1 176 132 Z" fill={SOFT} opacity=".7" />
      <path d="M110 110 L176 132 A70 70 0 0 1 60 160 Z" fill={INK} opacity=".7" />
      <W x={250} y={70} size={11}>{at === 1 ? "Whole grains, pulses" : at === 3 ? "Whole fruit, not juice" : at === 2 ? "Hands can guide" : "No 'diabetic' foods"}</W>
      <W x={160} y={206} size={11.5}>{["No one-size-fits-all way of eating", "Carb amount matters most", "Portions: a dietitian can help", "Water over sugary drinks", "Realistic changes stick"][at]}</W>
    </svg>} />;
}

function WalkMeal(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Moving" title="Walk it down" label="Moving" credit="Illustration: Rehyn. A picture of the idea, not a real reading."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A walk after a meal, with blood sugar coming down">
      <path d="M30 150 H300" stroke={LINE} strokeWidth="2" />
      <path d="M30 140 C70 140, 90 70, 130 70 S180 130, 220 136 S280 140, 300 140" stroke={INK} strokeWidth="4" fill="none" />
      <Person x={170} y={70} scale={0.7} />
      <W x={160} y={190} size={11.5}>{["It helps insulin work better", "Walking, cycling, swimming, yoga", "Two and a half hours a week", "A 10-minute walk after a meal", "On insulin? Check before and after"][at]}</W>
    </svg>} />;
}

function MeterFork(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Checking" title="Who needs to check, and how" label="Monitoring" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two paths: a yearly blood test, or a meter and a sensor">
      <path d="M30 170 C90 160, 120 120, 160 110" stroke={INK} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M160 110 C200 100, 230 60, 280 50" stroke={at === 4 ? INK : SOFT} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M160 110 C200 120, 230 160, 280 170" stroke={at >= 1 && at <= 3 ? INK : SOFT} strokeWidth="6" fill="none" strokeLinecap="round" />
      <W x={240} y={36} size={10.5}>HbA1c for everyone</W><W x={240} y={194} size={10.5}>Some medicines: home checks</W>
      <W x={80} y={100} size={11.5}>{["Not everyone", "Finger-prick: a snapshot", "Sensors: no pricks", "Ask your team for targets", "At least once a year"][at]}</W>
    </svg>} />;
}

function NineGrid(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const checks = ["HbA1c", "Cholesterol", "Kidney blood", "Urine ACR", "Blood pressure", "Weight", "Feet", "Eyes", "Smoking"];
  const lit = [[0, 1, 2, 3, 4, 5, 6, 7, 8], [0, 1, 2, 3], [4, 5, 6, 8], [7], [3, 6, 7]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Yearly checks" title="Nine checks, one healthier year" label="Annual checks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Nine yearly checks">
      {checks.map((check, index) => <g key={check} transform={`translate(${22 + (index % 3) * 94} ${16 + Math.floor(index / 3) * 52})`}>
        <rect width="86" height="42" rx="10" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={43} y={26} size={10.5} fill={lit.includes(index) ? WHITE : TEXT}>{check}</W>
      </g>)}
      <W x={160} y={204} size={11.5}>{["Part of your routine NHS care", "Blood and urine tests", "At your appointment", "Eye screening, separately", "The ones most often missed"][at]}</W>
    </svg>} />;
}

function FootCheck(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Feet" title="A minute a day for your feet" label="Foot care" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The sole of a foot, and a well-fitting shoe">
      <path d="M90 40 C60 40, 54 90, 60 130 C66 170, 80 190, 100 190 C120 190, 128 160, 124 130 C120 100, 124 60, 110 46 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      {[64, 76, 90, 104, 116].map((x, index) => <circle key={x} cx={x} cy={34 - (index === 0 ? 0 : 4)} r={index === 0 ? 8 : 5} fill={WHITE} stroke={INK} strokeWidth="2" />)}
      {at === 3 && <circle cx="96" cy="140" r="12" fill={GOLD} />}
      <path d="M180 140 C180 110, 220 110, 240 120 L290 130 C300 132, 300 160, 290 160 H186 C180 160, 178 150, 180 140 Z" fill={TINT} stroke={INK} strokeWidth="3" opacity={at === 2 ? 1 : 0.4} />
      <W x={230} y={70} size={11.5}>{["Nerves and blood supply", "Look twice a day", "Nails, cream, wide shoes", "A new problem: act today", "A foot check every year"][at]}</W>
    </svg>} />;
}

function IllKit(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sick days" title="Ill? Keep drinking, keep checking" label="Sick-day rules" credit="Illustration: Rehyn. Follow the sick-day rules your own team gave you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A thermometer, a glass of water and a clock">
      <g opacity={at === 0 ? 1 : 0.4}><rect x="40" y="50" width="16" height="90" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="48" cy="150" r="14" fill={INK} /></g>
      <g opacity={at === 1 ? 1 : 0.4}><path d="M110 60 H150 L144 140 H116 Z" fill={TINT} stroke={INK} strokeWidth="3" /></g>
      <g opacity={at === 2 ? 1 : 0.4}><Pill x={200} y={90} /><path d="M184 76 L216 104" stroke={TEXT} strokeWidth="3" /></g>
      <g opacity={at === 3 ? 1 : 0.4}><circle cx="270" cy="96" r="26" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M270 96 V78 M270 96 L284 104" stroke={TEXT} strokeWidth="3" /></g>
      <W x={160} y={196} size={11.5}>{["Illness can push sugar very high", "Keep drinking; little and often", "Some medicines pause: ask", "Check at least every 4 hours", "Sick with high sugar: 999"][at]}</W>
    </svg>} />;
}

function Dashboard(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Driving" title="Five to drive" label="Driving" credit="Illustration: Rehyn. Check the DVLA rules for your treatment and licence."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A car dashboard showing a blood glucose of 5">
      <path d="M30 150 C30 70, 290 70, 290 150 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="120" y="96" width="80" height="44" rx="10" fill={at === 3 ? INK : TINT} /><W x={160} y={126} size={20} serif fill={at === 3 ? WHITE : TEXT}>{at === 4 ? "45 min" : "5+"}</W>
      <W x={160} y={186} size={11.5}>{["Most people can drive", "Diet only: no need to tell DVLA", "Stricter for bus and lorry", "Check before, every 2 hours", "Pull over, keys out, treat, wait"][at]}</W>
    </svg>} />;
}

function Backpack(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Burnout" title="When diabetes wears you down" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person carrying a heavy backpack, helped by two others">
      <Person x={160} y={130} scale={1.3} />
      <rect x="168" y="96" width="44" height="54" rx="10" fill={at === 3 || at === 4 ? SOFT : GOLD} stroke={INK} strokeWidth="2" />
      {(at === 3 || at === 4) && <><Person x={90} y={140} fill={SOFT} /><Person x={240} y={140} fill={SOFT} /></>}
      <W x={160} y={200} size={11.5}>{["1 in 5 have high distress", "Anger, avoiding checks", "Two weeks of low mood: talk to your GP", "Smaller goals; talk to others", "Ask your team for support"][at]}</W>
    </svg>} />;
}

export function MetabolismPieceView({ piece, ...props }: { piece: MetabolismPiece } & PieceProps) {
  switch (piece) {
    case "t2d-sticky-cell": return <StickyCell {...props} />;
    case "t2d-key": return <Key {...props} />;
    case "t2d-four-spots": return <FourSpots {...props} />;
    case "t2d-remission-line": return <RemissionLine {...props} />;
    case "t2d-hypo-steps": return <HypoSteps {...props} />;
    case "t2d-pill-cards": return <PillCards {...props} />;
    case "t2d-pen-week": return <PenWeek {...props} />;
    case "t2d-hand-portions": return <HandPortions {...props} />;
    case "t2d-walk-meal": return <WalkMeal {...props} />;
    case "t2d-meter-fork": return <MeterFork {...props} />;
    case "t2d-nine-grid": return <NineGrid {...props} />;
    case "t2d-foot-check": return <FootCheck {...props} />;
    case "t2d-ill-kit": return <IllKit {...props} />;
    case "t2d-dashboard": return <Dashboard {...props} />;
    case "t2d-backpack": return <Backpack {...props} />;
    case "hypo-thermostat": return <Thermostat {...props} />;
    case "hypo-antibodies": return <Antibodies {...props} />;
    case "hypo-seesaw": return <HypoSeesaw {...props} />;
    case "hypo-checklist": return <Checklist {...props} />;
    case "hypo-morning": return <Morning {...props} />;
    case "hypo-steps": return <DoseSteps {...props} />;
    case "hypo-four-hours": return <FourHours {...props} />;
    case "hypo-scales": return <ThyroidScales {...props} />;
    case "hypo-fog": return <Fog {...props} />;
    case "hypo-pregnancy-line": return <HypoPregnancy {...props} />;
    case "hypo-test-calendar": return <TestCalendar {...props} />;
    case "hyper-fast": return <Fast {...props} />;
    case "hyper-five": return <FiveFigures {...props} />;
    case "hyper-seesaw": return <HyperSeesaw {...props} />;
    case "hyper-eye": return <Eye {...props} />;
    case "hyper-sore-throat": return <SoreThroat {...props} />;
    case "hyper-capsule": return <Capsule {...props} />;
    case "hyper-three-ops": return <ThreeOps {...props} />;
    case "hyper-heart-calm": return <HeartCalm {...props} />;
    case "hyper-calm-head": return <CalmHead {...props} />;
    case "hyper-smoke-eyes": return <SmokeEyes {...props} />;
    case "hyper-pregnancy-line": return <HyperPregnancy {...props} />;
    case "hyper-pendulum": return <Pendulum {...props} />;
    case "t1d-beta-cells": return <BetaCells {...props} />;
    case "t1d-gauge": return <HypoGauge {...props} />;
    case "t1d-ketones": return <Ketones {...props} />;
    case "t1d-two-numbers": return <TwoNumbersT1 {...props} />;
    case "t1d-basal-bolus": return <BasalBolus {...props} />;
    case "t1d-carb-scale": return <CarbScale {...props} />;
    case "t1d-loop": return <Loop {...props} />;
    case "t1d-sick-kit": return <SickKit {...props} />;
    case "t1d-late-low": return <LateLow {...props} />;
    case "t1d-five-drive": return <FiveDrive {...props} />;
    case "t1d-drink-night": return <DrinkNight {...props} />;
    case "t1d-distress": return <Distress {...props} />;
    case "t1d-pregnancy-line": return <PregnancyLine {...props} />;
    case "pre-hba1c-bar": return <Hba1cLine {...props} />;
    case "pre-mix": return <Mix {...props} />;
    case "pre-fork": return <Fork {...props} />;
    case "pre-calendar": return <YearCalendar {...props} />;
    case "pre-course": return <Course {...props} />;
    case "pre-scales": return <Scales {...props} />;
    case "pre-day-clock": return <DayClock {...props} />;
    case "pre-swaps": return <Swaps {...props} />;
    case "pre-night": return <Night {...props} />;
    case "pre-units": return <Units {...props} />;
    case "pre-household": return <Household {...props} />;
  }
}
