import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, SANS, SERIF, useSection } from "./NewsMemoryPieces";

// The Heart & lungs pages' own pieces (content/ischaemic-news.ts, keyed "<condition>/<piece>"). They are
// drawn in the page's own card colours (the --t-… variables set by lib/library-theme.ts), so one picture
// sits in the reds of Blood pressure or the blues of the lung pages without changing. Each is steered by
// the card's sections; pictures show ideas, not measurements, tracings or anyone's own readings.

const HEART_PIECES = [
  // High blood pressure
  "hbp-two-numbers", "hbp-stroke-link", "hbp-causes", "hbp-targets", "hbp-home-cuff", "hbp-tablets", "hbp-side-fork", "hbp-salt", "hbp-week", "hbp-units", "hbp-pillbox", "hbp-white-coat", "hbp-day-curve",
  // Atrial fibrillation
  "af-chambers", "af-clot-path", "af-types", "af-tests", "af-feelings", "af-scale", "af-reset", "af-ablation", "af-pulse", "af-triggers", "af-card", "af-steps", "af-support",
  // Heart attack
  "mi-statin-days", "mi-artery-stent", "mi-stemi", "mi-test-tiles", "mi-risk-balance", "mi-rehab-stones", "mi-pill-jobs", "mi-six-weeks", "mi-gtn-flow", "mi-road-weeks", "mi-plate", "mi-stairs", "mi-weather", "mi-quit-line",
  // Angina
  "ang-supply", "ang-traffic", "ang-test-panels", "ang-pain-map", "ang-spray-clock", "ang-two-jobs", "ang-road-detour", "ang-threshold", "ang-triggers", "ang-travel", "ang-clear-artery", "ang-calm",
  // COPD
  "copd-airways", "copd-spiro", "copd-flare-signs", "copd-cycle", "copd-inhalers", "copd-rehab-weeks", "copd-rescue", "copd-oxygen-gauge", "copd-candle", "copd-never-late", "copd-jab-calendar", "copd-pace-day", "copd-worry-loop",
  // Asthma
  "ast-three-changes", "ast-trigger-ring", "ast-three-tests", "ast-life-line", "ast-two-inhalers", "ast-plan-sheet", "ast-attack-steps", "ast-review-check", "ast-runner", "ast-home-rooms", "ast-smoke-free", "ast-pollen",
  // Sleep apnoea
  "osa-throat", "osa-links", "osa-study", "osa-ahi", "osa-cpap-kit", "osa-jaw", "osa-side-sleep", "osa-dvla-path", "osa-cabin-bag", "osa-partner-bed", "osa-day-energy",
] as const;
type HeartPiece = (typeof HEART_PIECES)[number];
export const isHeartPiece = (piece: NewsPiece): piece is HeartPiece => (HEART_PIECES as readonly string[]).includes(piece);

/** The page's own colours. */
export const INK = "var(--t-ink)";
export const TEXT = "var(--t-text)";
export const SOFT = "var(--t-soft)";
export const LINE = "var(--t-line)";
export const TINT = "var(--t-tint)";
export const WHITE = "#FFFFFF";

export const credit = "Illustration: Rehyn. A picture of the idea.";

export const W = ({ x, y, children, anchor = "middle", size = 12, fill = TEXT, serif = false }: { x: number; y: number; children: ReactNode; anchor?: "start" | "middle" | "end"; size?: number; fill?: string; serif?: boolean }) =>
  <text x={x} y={y} textAnchor={anchor} fontFamily={serif ? SERIF : SANS} fontSize={size} fontWeight={serif ? 600 : 700} fill={fill}>{children}</text>;
export const Person = ({ x, y, fill = INK, scale = 1 }: { x: number; y: number; fill?: string; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} fill={fill}><circle cx="0" cy="-30" r="11" /><path d="M-18 14 C-18 -8, -10 -16, 0 -16 C10 -16, 18 -8, 18 14 Z" /></g>;
/** A row of labelled tiles, one of them lit. */
export const Chips = ({ labels, lit, y = 180 }: { labels: string[]; lit: number; y?: number }) => {
  const width = 300 / labels.length;
  return <g>{labels.map((label, index) => <g key={label} transform={`translate(${10 + index * width} ${y})`}>
    <rect width={width - 8} height="30" rx="10" fill={index === lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
    <W x={(width - 8) / 2} y={20} size={10.5} fill={index === lit ? WHITE : TEXT}>{label}</W>
  </g>)}</g>;
};
/** A heart outline, centred on (x, y), `size` across. */
export const HeartShape = ({ x, y, size = 120, fill = WHITE, stroke = INK, width = 4 }: { x: number; y: number; size?: number; fill?: string; stroke?: string; width?: number }) =>
  <path transform={`translate(${x - size / 2} ${y - size * 0.45}) scale(${size / 180})`} d="M90 160 C30 120, 0 86, 10 52 C20 20, 66 14, 90 46 C114 14, 160 20, 170 52 C180 86, 150 120, 90 160 Z" fill={fill} stroke={stroke} strokeWidth={width * 180 / size} strokeLinejoin="round" />;
/** A pressure gauge: an arc with a needle at `value` (0 to 1). */
export const Gauge = ({ x, y, r = 60, value, label }: { x: number; y: number; r?: number; value: number; label?: string }) => {
  const angle = Math.PI * (1 - value);
  return <g>
    <path d={`M${x - r} ${y} A${r} ${r} 0 0 1 ${x + r} ${y}`} fill="none" stroke={LINE} strokeWidth="12" strokeLinecap="round" />
    <path d={`M${x - r} ${y} A${r} ${r} 0 0 1 ${x + r * Math.cos(angle)} ${y - r * Math.sin(angle)}`} fill="none" stroke={INK} strokeWidth="12" strokeLinecap="round" />
    <path d={`M${x} ${y} L${x + (r - 18) * Math.cos(angle)} ${y - (r - 18) * Math.sin(angle)}`} stroke={TEXT} strokeWidth="4" strokeLinecap="round" />
    <circle cx={x} cy={y} r="6" fill={TEXT} />
    {label && <W x={x} y={y + 24} size={11}>{label}</W>}
  </g>;
};
export const Pill = ({ x, y, fill = INK, rotate = 0 }: { x: number; y: number; fill?: string; rotate?: number }) =>
  <g transform={`translate(${x} ${y}) rotate(${rotate})`}><rect x="-18" y="-8" width="36" height="16" rx="8" fill={WHITE} stroke={fill} strokeWidth="3" /><path d="M0 -8 V8" stroke={fill} strokeWidth="3" /><path d="M0 -8 H10 a8 8 0 0 1 0 16 H0 Z" fill={fill} /></g>;
export const Clock = ({ x, y, r = 18, hand = 0 }: { x: number; y: number; r?: number; hand?: number }) =>
  <g><circle cx={x} cy={y} r={r} fill={WHITE} stroke={INK} strokeWidth="3" /><path d={`M${x} ${y} V${y - r + 6} M${x} ${y} L${x + (r - 7) * Math.sin(hand)} ${y - (r - 7) * Math.cos(hand)}`} stroke={TEXT} strokeWidth="3" strokeLinecap="round" /></g>;
/** A regular trace across, or an uneven one (`uneven`), from x to x + width at height y. */
const trace = (x: number, y: number, width: number, uneven = false) => {
  let d = `M${x} ${y}`;
  const gaps = uneven ? [26, 14, 34, 18, 30, 12, 24, 22] : [32, 32, 32, 32, 32, 32, 32, 32];
  let at = x;
  for (let index = 0; at < x + width - 40; index++) {
    const gap = gaps[index % gaps.length];
    d += ` H${at + gap} l5 -${uneven ? 6 + (index % 3) * 6 : 30} l5 ${uneven ? 12 + (index % 2) * 8 : 42} l5 -${uneven ? 6 + (index % 2) * 8 : 12}`;
    at += gap + 15;
  }
  return `${d} H${x + width}`;
};

// ==== High blood pressure ==================================================================================

function TwoNumbers(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="The numbers" title="Two numbers, one simple story" label="The numbers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A blood pressure reading with a top and a bottom number">
      <HeartShape x={66} y={86} size={92} fill={at === 0 ? TINT : WHITE} />
      {at === 0 && <g className={still ? undefined : "lib-why-pulse"}><W x={66} y={156} size={11}>Squeeze: top</W><W x={66} y={172} size={11}>Relax: bottom</W></g>}
      <text x="226" y="80" textAnchor="middle" fontFamily={SERIF} fontSize="46" fontWeight="600" fill={at === 3 ? INK : TEXT}>{at === 3 ? "150" : "120"}</text>
      <path d="M180 94 H272" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <text x="226" y="138" textAnchor="middle" fontFamily={SERIF} fontSize="46" fontWeight="600" fill={TEXT}>80</text>
      {at === 1 && <><W x={226} y={160} size={11}>mmHg</W><W x={226} y={178} size={11}>"120 over 80"</W></>}
      {at === 2 && <><rect x="20" y="176" width="134" height="34" rx="12" fill={INK} /><W x={87} y={198} size={11} fill={WHITE}>Clinic: 140/90+</W>
        <rect x="166" y="176" width="134" height="34" rx="12" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={233} y={198} size={11}>Home: 135/85+</W></>}
      {at === 3 && <W x={226} y={178} size={11}>One high number is enough</W>}
    </svg>} />;
}

function StrokeLink(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="After a stroke" title="The number that protects your brain" label="Why it matters" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A brain with its blood vessels, and a pressure gauge">
      <path d="M200 40 C176 26, 140 36, 142 66 C126 78, 130 110, 152 118 C156 142, 186 148, 200 130 C214 148, 244 142, 248 118 C270 110, 274 78, 258 66 C260 36, 224 26, 200 40 Z" fill={WHITE} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
      <path d="M200 160 V120 M200 120 C190 100, 172 92, 166 74 M200 120 C212 100, 230 92, 236 72 M200 120 V84" fill="none" stroke={at === 2 ? INK : SOFT} strokeWidth={at === 2 ? 4 : 3} strokeLinecap="round" />
      {at === 1 && <><circle cx="170" cy="82" r="7" fill={TEXT} /><path d="M234 76 l8 -8 M238 82 l10 -2" stroke={TEXT} strokeWidth="3" strokeLinecap="round" /></>}
      <Gauge x={70} y={130} r={46} value={at === 4 ? 0.5 : 0.85} label={at === 4 ? "a little lower" : "high"} />
      {at === 0 && <W x={70} y={190} size={11}>The biggest risk factor</W>}
      {at === 3 && <W x={200} y={190} size={11}>Treatment helps prevent another</W>}
      {at === 4 && <W x={200} y={190} size={11}>10 mmHg lower: over 25% less risk</W>}
    </svg>} />;
}

function Causes(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const change = ["Salt", "Weight", "Alcohol", "Smoking", "Activity"];
  const fixed = ["Age", "Family", "Background"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="What pushes the numbers up" label="Causes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Things you can change and things you cannot">
      <W x={86} y={28} size={12} fill={at === 1 ? INK : TEXT}>Can change</W>
      <W x={234} y={28} size={12} fill={at === 2 ? INK : TEXT}>Can't change</W>
      {change.map((label, index) => <g key={label}><rect x="20" y={40 + index * 30} width="132" height="24" rx="10" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={86} y={57 + index * 30} size={11} fill={at === 1 ? WHITE : TEXT}>{label}</W></g>)}
      {fixed.map((label, index) => <g key={label}><rect x="168" y={40 + index * 30} width="132" height="24" rx="10" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={234} y={57 + index * 30} size={11} fill={at === 2 ? WHITE : TEXT}>{label}</W></g>)}
      {at === 0 && <W x={234} y={150} size={12}>Often no single cause</W>}
      {at === 3 && <><rect x="168" y="138" width="132" height="44" rx="12" fill={INK} /><W x={234} y={156} size={11} fill={WHITE}>Kidneys, other</W><W x={234} y={172} size={11} fill={WHITE}>conditions, medicines</W></>}
    </svg>} />;
}

function Targets(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const board = (x: number, title: string, clinic: string, home: string, lit: boolean) => <g>
    <circle cx={x} cy="100" r="62" fill={lit ? TINT : WHITE} stroke={INK} strokeWidth="3" />
    <circle cx={x} cy="100" r="40" fill="none" stroke={SOFT} strokeWidth="3" />
    <circle cx={x} cy="100" r="16" fill={lit ? INK : SOFT} />
    <W x={x} y={28} size={12}>{title}</W>
    <W x={x} y={186} size={11}>Clinic {clinic}</W>
    <W x={x} y={202} size={11} fill={at === 2 ? INK : TEXT}>Home {home}</W>
  </g>;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Targets" title="Your target depends on you" label="Targets" credit="Illustration: Rehyn. Targets from NICE; ask your team for yours."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two targets: under 80, and 80 and over">
      {at < 3 || at === 4 ? <>{board(84, "Under 80", "<140/90", "<135/85", at === 0)}{board(236, "80 and over", "<150/90", "<145/85", at === 1)}</>
        : <><circle cx="160" cy="100" r="62" fill={TINT} stroke={INK} strokeWidth="3" /><circle cx="160" cy="100" r="16" fill={INK} /><W x={160} y={186} size={12}>Some people: below 130/80</W><W x={160} y={204} size={11}>kidney disease, type 1 diabetes</W></>}
      {at === 4 && <g><rect x="110" y="84" width="100" height="32" rx="12" fill={INK} /><W x={160} y={105} size={11} fill={WHITE}>Ask: what's mine?</W></g>}
    </svg>} />;
}

function HomeCuff(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const days = Array.from({ length: 7 }, (_, index) => index);
  return <MemoryBand props={props} state={s} tone="theme" kicker="At home" title="Five quiet minutes, then measure" label="Measuring" credit="Illustration: Rehyn. Follow the instructions with your own monitor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person seated with an arm resting on a table and a cuff above the elbow">
      {at < 3 ? <>
        <path d="M60 196 V120 H104 V196 M60 150 H104" fill="none" stroke={SOFT} strokeWidth="4" strokeLinecap="round" />
        <Person x={92} y={130} />
        <path d="M108 118 L150 132 H230" fill="none" stroke={INK} strokeWidth="10" strokeLinecap="round" />
        <path d="M150 140 H290 M180 140 V196 M270 140 V196" stroke={SOFT} strokeWidth="4" strokeLinecap="round" />
        <rect x="116" y="110" width="28" height="22" rx="6" fill={at === 2 ? INK : TINT} stroke={INK} strokeWidth="2" transform="rotate(18 130 121)" />
        <path d="M80 196 H120" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        {at === 0 && <W x={230} y={110} size={11}>An upper-arm monitor</W>}
        {at === 1 && <><Clock x={240} y={76} r={24} hand={still ? 1 : 0} /><W x={240} y={122} size={11}>Sit quietly first</W></>}
        {at === 2 && <W x={230} y={110} size={11}>Cuff just above the elbow</W>}
      </> : <>
        <W x={160} y={36} size={12}>{at === 3 ? "Morning and evening, for a week" : "Write each reading down"}</W>
        {days.map(day => <g key={day}><rect x={22 + day * 40} y="56" width="34" height="96" rx="10" fill={at === 3 || day < 5 ? TINT : WHITE} stroke={INK} strokeWidth="2" />
          <circle cx={39 + day * 40} cy="84" r="7" fill={at === 3 || day < 5 ? INK : WHITE} stroke={INK} strokeWidth="2" /><circle cx={39 + day * 40} cy="122" r="7" fill={at === 3 || day < 5 ? INK : WHITE} stroke={INK} strokeWidth="2" /></g>)}
        <W x={160} y={180} size={11}>{at === 3 ? "Two readings each time" : "Take the record to your appointment"}</W>
      </>}
    </svg>} />;
}

function Tablets(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const kinds = [{ t: "ACE / ARB", n: "Vessels relax" }, { t: "Calcium blocker", n: "Arteries widen" }, { t: "Diuretic", n: "Less water" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tablets" title="Different tablets, different jobs" label="Tablets" credit="Illustration: Rehyn. Never stop or change medicines without your team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three kinds of blood pressure tablet and what each does">
      {kinds.map((kind, index) => {
        const lit = at === index || at === 4 || (at === 3 && index < 2);
        return <g key={kind.t} transform={`translate(${14 + index * 100} 30)`}>
          <rect width="92" height="132" rx="14" fill={lit ? WHITE : TINT} stroke={lit ? INK : SOFT} strokeWidth="3" />
          <Pill x={46} y={34} fill={lit ? INK : SOFT} />
          {index === 0 && <path d="M14 82 C30 70, 62 70, 78 82 M14 106 C30 118, 62 118, 78 106" stroke={lit ? INK : SOFT} strokeWidth="3" fill="none" />}
          {index === 1 && <path d="M22 76 V112 M70 76 V112" stroke={lit ? INK : SOFT} strokeWidth="3" />}
          {index === 2 && <path d="M46 74 C34 92, 34 106, 46 110 C58 106, 58 92, 46 74 Z" fill={lit ? INK : SOFT} />}
          <W x={46} y={150} size={10}>{kind.t}</W>
        </g>;
      })}
      <W x={160} y={196} size={11}>{at === 3 ? "Which first can depend on age and background" : at === 4 ? "Many people take more than one" : kinds[Math.min(at, 2)].n}</W>
    </svg>} />;
}

function SideFork(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const doors = ["Lower dose", "Another tablet", "A combination"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Side effects" title="Talk, don't stop" label="Side effects" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path that splits: stopping tablets, or talking to your doctor">
      {at === 0 && <><Pill x={160} y={80} /><W x={160} y={130} size={13}>Many people have none</W></>}
      {at === 1 && <><Chips labels={["Cough", "Dizzy", "Ankles", "Tired"]} lit={-1} y={70} /><W x={160} y={140} size={12}>Common ones, often mild</W></>}
      {at === 2 && <><Person x={110} y={150} /><path d="M140 150 C160 100, 190 90, 210 90" stroke={INK} strokeWidth="3" fill="none" strokeDasharray="6 6" /><Person x={220} y={110} /><W x={160} y={196} size={12}>Stand up slowly</W></>}
      {at === 3 && <>
        <rect x="20" y="40" width="120" height="34" rx="12" fill={WHITE} stroke={SOFT} strokeWidth="2" />
        <W x={80} y={62} size={11} fill={SOFT}>Just stopping</W>
        <path d="M30 57 H130" stroke={TEXT} strokeWidth="3" />
        <W x={235} y={30} size={11}>Talk to your team about</W>
        {doors.map((door, index) => <g key={door}><rect x="170" y={44 + index * 34} width="130" height="26" rx="10" fill={INK} /><W x={235} y={61 + index * 34} size={10.5} fill={WHITE}>{door}</W></g>)}
        <path d="M80 92 C80 130, 120 150, 160 140" stroke={SOFT} strokeWidth="3" fill="none" strokeDasharray="5 6" />
        <W x={80} y={196} size={11}>Stopping can let it rise again</W>
      </>}
      {at === 4 && <><rect x="70" y="60" width="180" height="70" rx="16" fill={INK} /><W x={160} y={90} size={18} fill={WHITE} serif>999 or A&amp;E</W><W x={160} y={114} size={11} fill={WHITE}>Swollen lips, tongue or face</W></>}
    </svg>} />;
}

function Salt(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const hidden = 0.75;
  const r = 52;
  const end = 2 * Math.PI * hidden;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Salt" title="Most salt hides in shopping" label="Salt" credit="Illustration: Rehyn. Proportions from the NHS: around three quarters."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A teaspoon for 6g a day, and a circle showing most salt is already in food we buy">
      <g transform="translate(20 0)">
        <ellipse cx="60" cy="100" rx="34" ry="22" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="3" />
        <path d="M92 104 L150 128" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        <W x={70} y={150} size={at === 1 ? 14 : 12} fill={at === 1 ? INK : TEXT}>6g a day</W>
        <W x={70} y={168} size={10.5}>about a level teaspoon</W>
      </g>
      <g opacity={at === 1 ? 0.35 : 1}>
        <circle cx="240" cy="96" r={r} fill={WHITE} stroke={LINE} strokeWidth="2" />
        <path d={`M240 96 L240 ${96 - r} A${r} ${r} 0 1 1 ${240 + r * Math.sin(end)} ${96 - r * Math.cos(end)} Z`} fill={at === 2 ? INK : SOFT} />
        <W x={240} y={170} size={11}>3 in 4 already in food</W>
      </g>
      {at === 0 && <W x={160} y={204} size={11}>Too much salt raises blood pressure</W>}
      {at === 3 && <><rect x="196" y="176" width="110" height="34" rx="10" fill={INK} /><W x={251} y={198} size={11} fill={WHITE}>Check the label</W></>}
      {at === 4 && <W x={160} y={204} size={11}>Herbs and spices; taste adjusts in weeks</W>}
    </svg>} />;
}

function Week(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const filled = at === 3 ? 3 : 5;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Moving" title="Build it up to 150 minutes" label="Exercise" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of activity adding up to 150 minutes">
      {days.map((day, index) => <g key={index} transform={`translate(${18 + index * 42} 40)`}>
        <rect width="34" height="110" rx="10" fill={WHITE} stroke={LINE} strokeWidth="2" />
        {index < filled && <rect y={at === 3 ? 80 : 50} width="34" height={at === 3 ? 30 : 60} rx="10" fill={at === 1 || at === 2 ? INK : SOFT} />}
        <W x={17} y={-8} size={11}>{day}</W>
      </g>)}
      <W x={160} y={176} size={12}>{["Aerobic exercise helps the heart and vessels", "Walking, cycling, swimming, dancing", "150 minutes a week: talk, but not sing", "Three 10-minute sessions count", "Check first if your reading is very high"][at]}</W>
    </svg>} />;
}

function Units(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const glasses = Array.from({ length: 14 }, (_, index) => index);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Alcohol and weight" title="Less drink, less weight, lower numbers" label="Alcohol and weight" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Fourteen units a week, and a small weight loss">
      {at < 2 ? <>
        {glasses.map(index => <path key={index} transform={`translate(${30 + (index % 7) * 38} ${50 + Math.floor(index / 7) * 54})`} d="M0 0 H22 L18 34 H4 Z" fill={at === 1 ? INK : TINT} stroke={INK} strokeWidth="2" />)}
        <W x={160} y={176} size={12}>{at === 1 ? "No more than 14 units a week" : "Too much alcohol raises blood pressure"}</W>
        {at === 1 && <W x={160} y={196} size={11}>and not more than 6 in 6 hours</W>}
      </> : <>
        <Person x={110} y={120} scale={1.6} fill={SOFT} />
        <Person x={210} y={120} scale={1.45} fill={INK} />
        <path d="M140 100 H178" stroke={TEXT} strokeWidth="3" markerEnd="none" /><path d="M170 92 L180 100 L170 108" stroke={TEXT} strokeWidth="3" fill="none" />
        <W x={160} y={176} size={12}>{at === 2 ? "Losing 5 to 10% can make a big difference" : "Small changes add up"}</W>
      </>}
    </svg>} />;
}

function Pillbox(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Missed a dose" title="Missed one? Don't double up" label="Missed doses" credit="Illustration: Rehyn. Check the leaflet for each of your own medicines."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A seven-day pill box with one day still full">
      {days.map((day, index) => <g key={index} transform={`translate(${20 + index * 40} 40)`}>
        <rect width="34" height="44" rx="8" fill={index === 3 ? TINT : WHITE} stroke={INK} strokeWidth="2" />
        {(index === 3 || index > 3) && <circle cx="17" cy="24" r="7" fill={INK} />}
        <W x={17} y={-8} size={11}>{day}</W>
      </g>)}
      {at === 0 && <g><Pill x={130} y={140} /><Pill x={190} y={140} /><path d="M100 116 L220 166 M220 116 L100 166" stroke={TEXT} strokeWidth="4" strokeLinecap="round" /></g>}
      {at === 1 && <W x={160} y={140} size={12}>Each medicine's leaflet says what to do</W>}
      {at === 2 && <><rect x="110" y="120" width="100" height="40" rx="12" fill={INK} /><W x={160} y={146} size={16} fill={WHITE} serif>Call 111</W></>}
      {at === 3 && <><Clock x={160} y={142} r={26} hand={0.9} /><W x={160} y={196} size={11}>Same time, every day</W></>}
      {at === 4 && <W x={160} y={146} size={12}>Then carry on as usual</W>}
    </svg>} />;
}

function WhiteCoat(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="White coat" title="Why clinic readings can run high" label="Which readings count" credit="Illustration: Rehyn. Average differences, from Blood Pressure UK."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two gauges: a clinic one higher than a home one">
      <Gauge x={86} y={110} r={54} value={at === 3 || at === 4 ? 0.6 : 0.8} label="Clinic" />
      <Gauge x={234} y={110} r={54} value={0.6} label="Home" />
      <path d="M70 30 L60 60 H112 L102 30 Z" fill={WHITE} stroke={SOFT} strokeWidth="2" />
      <path d="M210 40 L234 22 L258 40 V62 H210 Z" fill={WHITE} stroke={SOFT} strokeWidth="2" />
      <W x={160} y={176} size={12}>{["Clinics can push the numbers up", "About 10 higher on top, 5 below", "High in clinic, lower at home", "Home or 24-hour readings help", "Sit quietly, and say if you're nervous"][at]}</W>
    </svg>} />;
}

function DayCurve(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Stress and sleep" title="Stress spikes, sleep dips" label="Stress and sleep" credit="Illustration: Rehyn. A picture of the idea, not a real recording."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Blood pressure over a day: short rises at stressful moments and a dip at night">
      <path d="M20 160 H300" stroke={LINE} strokeWidth="2" />
      <path d={`M20 100 C50 96, 60 ${at === 0 ? 50 : 96}, 80 98 S120 100, 140 ${at === 1 ? 70 : 96} S190 92, 210 100 C240 ${at === 2 ? 140 : 100}, 270 ${at === 2 ? 140 : 104}, 300 100`} fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" className={still ? undefined : "lib-road-walker"} />
      <W x={50} y={182} size={11}>Morning</W><W x={160} y={182} size={11}>Day</W><W x={270} y={182} size={11}>Night</W>
      {at === 0 && <W x={70} y={40} size={11}>A short rise</W>}
      {at === 1 && <W x={140} y={56} size={11}>Long-term stress</W>}
      {at === 2 && <W x={255} y={156} size={11}>Night-time dip</W>}
      {at === 3 && <><W x={160} y={40} size={11}>Sleep apnoea: pauses in breathing</W><W x={160} y={56} size={11}>linked to high blood pressure</W></>}
      {at === 4 && <W x={160} y={208} size={11}>Rest, movement and sleep routines</W>}
    </svg>} />;
}

// ==== Atrial fibrillation ==================================================================================

const HeartChambers = ({ x, y, sparks, lit }: { x: number; y: number; sparks: boolean; lit?: boolean }) => <g>
  <HeartShape x={x} y={y} size={130} fill={lit ? TINT : WHITE} />
  <path d={`M${x - 40} ${y - 6} H${x + 40} M${x} ${y - 6} V${y + 44}`} stroke={SOFT} strokeWidth="3" />
  {sparks
    ? [[-30, -30], [-18, -18], [-36, -14], [22, -30], [32, -16], [14, -20], [-6, -30]].map(([dx, dy], index) => <path key={index} d={`M${x + dx} ${y + dy} l4 -6 l3 8 l4 -6`} stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" className="lib-why-pulse" style={{ animationDelay: `${-index * 0.3}s` }} />)
    : <><circle cx={x - 26} cy={y - 30} r="6" fill={INK} /><path d={`M${x - 20} ${y - 26} C${x - 4} ${y - 18}, ${x} ${y}, ${x} ${y + 30}`} stroke={INK} strokeWidth="3" fill="none" strokeDasharray="5 6" /></>}
</g>;

function Chambers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When the top chambers twitch" label="Atrial fibrillation" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A heart beating in rhythm, and a heart with uncoordinated signals in its top chambers">
      {at === 1 ? <HeartChambers x={160} y={92} sparks={false} /> : at === 2 || at === 0 ? <><HeartChambers x={90} y={92} sparks={false} /><HeartChambers x={232} y={92} sparks lit /></> : <HeartChambers x={160} y={92} sparks />}
      <path d={trace(20, 204, 280, at !== 1)} stroke={INK} strokeWidth="2.5" fill="none" />
      {at === 0 && <><W x={90} y={22} size={11}>Steady</W><W x={232} y={22} size={11}>Irregular</W></>}
      {at === 1 && <W x={160} y={22} size={11}>One signal starts each beat</W>}
      {at === 2 && <W x={232} y={22} size={11}>Extra, uncoordinated signals</W>}
      {at === 3 && <W x={160} y={22} size={11}>Often linked to other conditions</W>}
      {at === 4 && <W x={160} y={22} size={11}>No cure, but treatment helps</W>}
    </svg>} />;
}

function ClotPath(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stroke risk" title="From a pooled clot to a stroke" label="Why stroke" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clot forming in the heart and travelling to the brain">
      {at < 3 ? <>
        <HeartShape x={90} y={150} size={100} fill={WHITE} />
        <path d="M230 30 C210 18, 184 26, 186 50 C174 60, 178 84, 196 90 C200 108, 222 112, 230 98 C238 112, 260 108, 264 90 C282 84, 286 60, 274 50 C276 26, 250 18, 230 30 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
        {(at === 1 || at === 2) && <circle cx="72" cy="128" r="9" fill={INK} />}
        {at === 1 && <path d="M80 122 C130 90, 170 80, 214 60" stroke={INK} strokeWidth="3" fill="none" strokeDasharray="6 7" className={still ? undefined : "lib-road-walker"} />}
        {at === 0 && <W x={240} y={150} size={11}>Not life-threatening,</W>}
        {at === 0 && <W x={240} y={166} size={11}>but a stroke risk</W>}
        {at === 2 && <><rect x="176" y="140" width="128" height="34" rx="12" fill={INK} /><W x={240} y={162} size={11} fill={WHITE}>Ask about your risk</W></>}
      </> : <Chips labels={["Face", "Arms", "Speech", "Time: 999"]} lit={3} y={90} />}
    </svg>} />;
}

function Types(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const rows = [{ t: "Comes and goes", d: "M20 0 H60 M100 0 H124 M190 0 H220" }, { t: "Lasts longer", d: "M20 0 H200" }, { t: "Permanent", d: "M20 0 H300" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Types" title="Comes and goes, lasts, or stays" label="Types" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three timelines: episodes that come and go, one that lasts longer, and one that stays">
      {rows.map((row, index) => <g key={row.t} transform={`translate(0 ${50 + index * 50})`}>
        <W x={20} y={-12} size={11} anchor="start" fill={at === index ? INK : TEXT}>{row.t}</W>
        <path d="M20 0 H300" stroke={LINE} strokeWidth="10" strokeLinecap="round" />
        <path d={row.d} stroke={at === index || at === 3 ? INK : SOFT} strokeWidth="10" strokeLinecap="round" />
      </g>)}
      {at === 3 && <W x={160} y={204} size={11}>Not sure? Ask your doctor or nurse</W>}
    </svg>} />;
}

function Tests(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [-1, 0, 1, 2, 3][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="The tests that find the rhythm" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An ECG, a heart scan, a small monitor and a watch">
      {at === 0 ? <><Person x={160} y={120} scale={1.3} /><path d="M188 104 l8 -6" stroke={INK} strokeWidth="3" /><W x={160} y={180} size={12}>Often found at a routine check</W></> : <>
        <g opacity={lit === 0 ? 1 : 0.4}><rect x="18" y="40" width="130" height="64" rx="12" fill={WHITE} stroke={INK} strokeWidth="2" /><path d={trace(26, 76, 114, true)} stroke={INK} strokeWidth="2" fill="none" /><W x={83} y={124} size={10.5}>ECG</W></g>
        <g opacity={lit === 0 || lit === 1 ? 1 : 0.4}><rect x="172" y="40" width="130" height="64" rx="12" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M200 92 L236 52 L272 92" stroke={SOFT} strokeWidth="2" fill="none" /><HeartShape x={237} y={78} size={34} /><W x={237} y={124} size={10.5}>Echo</W></g>
        <g opacity={lit === 2 ? 1 : 0.4}><rect x="58" y="140" width="56" height="40" rx="10" fill={TINT} stroke={INK} strokeWidth="2" /><W x={86} y={198} size={10.5}>24-hour</W></g>
        <g opacity={lit === 3 ? 1 : 0.4}><rect x="214" y="138" width="36" height="44" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M222 138 V128 H242 V138 M222 182 V192 H242 V182" stroke={INK} strokeWidth="2" fill="none" /><W x={232} y={208} size={10.5}>Watch</W></g>
        {at === 2 && <W x={160} y={24} size={10.5}>Also: blood tests, a chest X-ray</W>}
      </>}
    </svg>} />;
}

function Feelings(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const spots = at === 0 ? [{ x: 172, y: 92, t: "Pounding, fluttering" }] : at === 1 ? [{ x: 160, y: 40, t: "Dizzy" }, { x: 172, y: 92, t: "Breathless" }, { x: 160, y: 160, t: "Tired" }] : [];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="Pounding, fluttering, or nothing at all" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with places where symptoms can be felt">
      <circle cx="160" cy="46" r="22" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M120 200 C120 120, 136 76, 160 76 C184 76, 200 120, 200 200 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      {spots.map(spot => <g key={spot.t}><circle cx={spot.x} cy={spot.y} r="10" fill="none" stroke={INK} strokeWidth="3" className="lib-why-pulse" /><W x={spot.x + 26} y={spot.y + 4} size={11} anchor="start">{spot.t}</W></g>)}
      {at === 2 && <><W x={262} y={104} size={11}>Some people</W><W x={262} y={120} size={11}>feel nothing</W></>}
      {at === 3 && <><rect x="8" y="88" width="100" height="40" rx="12" fill={INK} /><W x={58} y={113} size={12} fill={WHITE}>Chest pain: 999</W></>}
    </svg>} />;
}

function Scale(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tilt = at === 2 ? -12 : 0;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Blood thinners" title="Weighing clot risk against bleeding" label="Anticoagulants" credit="Illustration: Rehyn. Your team weighs your own risks with you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balance between lower stroke risk and bleeding risk">
      {at === 1 ? <><Pill x={100} y={90} /><Pill x={160} y={90} rotate={20} /><Pill x={220} y={90} rotate={-20} /><W x={160} y={140} size={12}>Warfarin, or a newer one</W><W x={160} y={158} size={11}>such as apixaban</W></>
        : at === 3 ? <><rect x="120" y="40" width="80" height="100" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M146 40 V64 H174 V40" stroke={INK} strokeWidth="3" fill="none" /><circle cx="160" cy="98" r="14" fill={INK} /><W x={160} y={170} size={12}>Regular blood tests (INR)</W></>
        : at === 4 ? <><Clock x={160} y={90} r={36} hand={0.5} /><W x={160} y={160} size={12}>Every day, at the same time</W></>
        : <>
          <path d="M160 190 V70" stroke={TEXT} strokeWidth="4" />
          <g transform={`rotate(${tilt} 160 70)`}>
            <path d="M60 70 H260" stroke={TEXT} strokeWidth="4" strokeLinecap="round" />
            <path d="M60 70 L40 120 H80 Z M260 70 L240 120 H280 Z" fill="none" stroke={SOFT} strokeWidth="2" />
            <rect x="34" y="120" width="52" height="16" rx="6" fill={INK} /><rect x="234" y="120" width="52" height="16" rx="6" fill={SOFT} />
            <W x={60} y={156} size={10.5}>Lower stroke risk</W><W x={260} y={156} size={10.5}>Bleeding risk</W>
          </g>
          {at === 0 && <W x={160} y={206} size={11}>They make blood less likely to clot</W>}
        </>}
    </svg>} />;
}

function Reset(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Rate and rhythm" title="Slowing the beat, resetting the rhythm" label="Treatment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An uneven heart trace becoming a regular one">
      <path d={trace(16, 90, 130, true)} stroke={SOFT} strokeWidth="3" fill="none" />
      <circle cx="160" cy="90" r="22" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="3" />
      {at === 2 ? <path d="M164 74 L152 92 H168 L156 108" stroke={WHITE} strokeWidth="3" fill="none" strokeLinejoin="round" /> : at === 4 ? <rect x="148" y="80" width="24" height="20" rx="6" fill={INK} /> : <Pill x={160} y={90} />}
      <path d={trace(174, 90, 130)} stroke={INK} strokeWidth="3" fill="none" />
      <W x={160} y={160} size={12}>{["First, any cause is looked for", "Medicines to slow it or steady it", "Cardioversion: a controlled shock", "A pill in the pocket, for some", "A pacemaker, for some people"][at]}</W>
    </svg>} />;
}

function Ablation(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Ablation" title="Blocking the stray signals" label="Ablation" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A heart with a thin tube reaching its upper chamber">
      <HeartShape x={190} y={86} size={130} />
      {(at === 0 || at === 1) && <path d="M40 210 C60 160, 120 150, 168 64" stroke={INK} strokeWidth="3" fill="none" strokeDasharray={at === 1 ? "none" : "6 6"} />}
      {at === 0 && [0, 1, 2].map(index => <circle key={index} cx={164 + index * 10} cy={60 + (index % 2) * 8} r="5" fill={INK} className={still ? undefined : "lib-why-pulse"} />)}
      {at === 1 && <W x={60} y={150} size={11}>Through a vein</W>}
      {at === 2 && <><Clock x={70} y={110} r={30} hand={2} /><W x={70} y={170} size={11}>A few hours</W></>}
      {at === 3 && <W x={190} y={196} size={11}>When medicines have not helped</W>}
    </svg>} />;
}

function Pulse(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your pulse" title="Two fingers, thirty seconds, double it" label="Checking your pulse" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two fingers on a wrist, and a timer">
      <path d="M20 150 C70 140, 130 140, 190 120 L250 100" stroke={SOFT} strokeWidth="34" strokeLinecap="round" fill="none" />
      <path d="M140 70 C150 100, 152 116, 150 126 M160 64 C172 96, 172 112, 170 124" stroke={INK} strokeWidth="14" strokeLinecap="round" fill="none" />
      {(at === 1 || at === 2) && <circle cx="160" cy="132" r="8" fill="none" stroke={INK} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      <rect x="234" y="30" width="70" height="56" rx="12" fill={WHITE} stroke={INK} strokeWidth="2" />
      <W x={269} y={66} size={at === 2 ? 18 : 14} serif>{at === 2 || at === 3 ? "60s" : "30s"}</W>
      <W x={160} y={200} size={11.5}>{["Sit and rest for five minutes", "Below your thumb, on the wrist", "Count for 30 seconds, then double", "Irregular? Count for a full 60", "Fast or uneven: contact your GP"][at]}</W>
    </svg>} />;
}

function Triggers(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const ring = ["Alcohol", "Caffeine", "Spicy food", "Smoking", "Stress", "Too little water"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Triggers" title="Know what sets yours off" label="Triggers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label={`Common triggers: ${ring.join(", ")}`}>
      <HeartShape x={160} y={110} size={70} />
      {ring.map((label, index) => {
        const angle = (index / ring.length) * Math.PI * 2 - Math.PI / 2;
        const x = 160 + Math.cos(angle) * 112;
        const y = 106 + Math.sin(angle) * 78;
        const lit = at === 0 || (at === 1 && index === 0) || (at === 2 && index > 0);
        return <g key={label}><rect x={x - 46} y={y - 13} width="92" height="26" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + 4} size={10} fill={lit ? WHITE : TEXT}>{label}</W></g>;
      })}
      {at === 3 && <W x={160} y={216} size={11}>A diary can show your own</W>}
    </svg>} />;
}

function Card(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="On a blood thinner" title="Cards, dentists and bleeding checks" label="Everyday safety" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An alert card, a tooth and a timer">
      <g opacity={at === 0 ? 1 : 0.4}><rect x="20" y="40" width="120" height="76" rx="12" fill={INK} /><W x={80} y={72} size={11} fill={WHITE}>I take an</W><W x={80} y={90} size={11} fill={WHITE}>anticoagulant</W></g>
      <g opacity={at === 1 ? 1 : 0.4}><path d="M196 44 C176 44, 172 66, 180 84 C186 100, 186 116, 194 116 C202 116, 200 98, 210 98 C220 98, 218 116, 226 116 C234 116, 234 100, 240 84 C248 66, 244 44, 224 44 C216 44, 214 50, 210 50 C206 50, 204 44, 196 44 Z" fill={WHITE} stroke={INK} strokeWidth="3" /></g>
      <g opacity={at === 2 || at === 3 ? 1 : 0.4}><Clock x={274} y={80} r={26} hand={1.6} /></g>
      <W x={160} y={170} size={12}>{["Carry your alert card", "Tell your dentist or surgeon", "Head injury: get checked", "Long or heavy bleeding: get help", "Check before other medicines"][at]}</W>
    </svg>} />;
}

function Steps(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const bars = [30, 50, 70, 90, 70, 40];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercise" title="Moving well with AF" label="Exercise" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Activity building up gradually, with a warm-up and a cool-down">
      {bars.map((height, index) => <rect key={index} x={30 + index * 44} y={150 - (at === 1 ? Math.min(height, 70) : height)} width="34" height={at === 1 ? Math.min(height, 70) : height} rx="8" fill={index === 0 || index === 5 ? SOFT : INK} opacity={at === 2 ? 0.3 : 1} />)}
      <path d="M20 150 H300" stroke={LINE} strokeWidth="2" />
      <W x={47} y={170} size={10}>Warm up</W><W x={267} y={170} size={10}>Cool down</W>
      <W x={160} y={204} size={12}>{["It can help with symptoms", "Not too hard: you can still talk", "During an episode, stop and rest", "Build up gradually"][at]}</W>
    </svg>} />;
}

function Support(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const circles = [{ x: 60, y: 50, t: "GP or nurse" }, { x: 260, y: 50, t: "Family" }, { x: 60, y: 170, t: "Helpline" }, { x: 260, y: 170, t: "Support group" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Worry" title="When worry gets in the way" label="Coping" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person linked to the people who can support them">
      {circles.map((circle, index) => <g key={circle.t} opacity={at >= 1 ? 1 : 0.35}><path d={`M160 110 L${circle.x} ${circle.y}`} stroke={SOFT} strokeWidth="3" strokeDasharray={at === 2 ? "none" : "5 6"} />
        <rect x={circle.x - 52} y={circle.y - 15} width="104" height="30" rx="12" fill={at === 2 || (at === 3 && index === 0) ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={circle.x} y={circle.y + 5} size={10.5} fill={at === 2 || (at === 3 && index === 0) ? WHITE : TEXT}>{circle.t}</W></g>)}
      <circle cx="160" cy="110" r="34" fill={TINT} stroke={INK} strokeWidth="3" />
      <Person x={160} y={120} scale={0.8} />
      {at === 0 && <W x={160} y={212} size={11}>A common feeling</W>}
    </svg>} />;
}

// ==== Heart attack =========================================================================================

/** An artery seen from the side: walls, with fatty build-up (`fat`), a clot (`clot`) or a stent (`stent`). */
const Artery = ({ x, y, width = 240, fat = 0, clot = false, stent = false, flow = true }: { x: number; y: number; width?: number; fat?: number; clot?: boolean; stent?: boolean; flow?: boolean }) => {
  const mid = x + width / 2;
  return <g>
    <path d={`M${x} ${y - 26} H${x + width} M${x} ${y + 26} H${x + width}`} stroke={INK} strokeWidth="4" strokeLinecap="round" />
    {fat > 0 && <path d={`M${mid - 50} ${y - 26} C${mid - 20} ${y - 26 + fat}, ${mid + 20} ${y - 26 + fat}, ${mid + 50} ${y - 26} M${mid - 50} ${y + 26} C${mid - 20} ${y + 26 - fat}, ${mid + 20} ${y + 26 - fat}, ${mid + 50} ${y + 26}`} fill={GOLD} opacity=".55" stroke={GOLD} strokeWidth="2" />}
    {clot && <ellipse cx={mid} cy={y} rx="16" ry={26 - fat + 4} fill={TEXT} />}
    {stent && <path d={`M${mid - 44} ${y - 22} l11 44 l11 -44 l11 44 l11 -44 l11 44 l11 -44 l11 44 l11 -44`} stroke={SOFT} strokeWidth="3" fill="none" />}
    {flow && !clot && <path d={`M${x + 14} ${y} H${x + width - 24} M${x + width - 34} ${y - 8} L${x + width - 24} ${y} L${x + width - 34} ${y + 8}`} stroke={SOFT} strokeWidth="3" fill="none" strokeDasharray="8 8" strokeLinecap="round" />}
  </g>;
};

function StatinDays(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const days = Array.from({ length: 14 }, (_, index) => index);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Statins" title="A daily tablet that guards your arteries" label="Statins" credit="Illustration: Rehyn. Never stop or change medicines without your team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A row of daily tablets running on, and a cholesterol gauge held low">
      {at === 0 && <><Gauge x={160} y={120} r={60} value={0.3} label="Cholesterol, kept lower" /></>}
      {at === 1 && <>{days.map(day => <circle key={day} cx={24 + day * 22} cy="100" r="8" fill={INK} opacity={1 - day * 0.06} />)}<path d="M296 100 h16 M304 92 l8 8 l-8 8" stroke={INK} strokeWidth="3" fill="none" /><W x={160} y={150} size={12}>Every day, usually for life</W></>}
      {at === 2 && <><Gauge x={160} y={120} r={60} value={0.75} label="Stopping lets it rise again" /></>}
      {at === 3 && <><Pill x={110} y={96} /><Pill x={160} y={96} fill={SOFT} /><Pill x={210} y={96} fill={TEXT} /><W x={160} y={140} size={12}>Side effects? Other statins and doses</W></>}
    </svg>} />;
}

function ArteryStent(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="What happened" title="One artery, one clot, one fix" label="What happened" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An artery with fatty build-up, a clot, and a stent holding it open">
      {at === 4 ? <>
        <HeartShape x={90} y={100} size={110} />
        <W x={90} y={176} size={11}>Heart attack:</W><W x={90} y={192} size={11}>blood supply blocked</W>
        <HeartShape x={232} y={100} size={110} fill={TINT} />
        <path d={trace(180, 100, 104)} stroke={SOFT} strokeWidth="2" fill="none" opacity=".4" />
        <W x={232} y={176} size={11}>Cardiac arrest:</W><W x={232} y={192} size={11}>the heart stops pumping</W>
      </> : <>
        <Artery x={40} y={100} fat={at === 0 ? 0 : 14} clot={at === 0 || at === 1} stent={at === 3 || at === 2} />
        <W x={160} y={176} size={12}>{["The heart muscle loses its blood supply", "Fatty build-up, then a clot", "Blood flowing again: medicines or a stent", "A small mesh tube holds it open", ""][at]}</W>
      </>}
    </svg>} />;
}

function Stemi(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="The letters" title="Two letters on the ECG" label="STEMI and NSTEMI" credit="Illustration: Rehyn. A picture of the idea, not a real tracing."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two arteries: one fully blocked, one partly blocked">
      {at < 3 ? <>
        <g opacity={at === 2 ? 0.35 : 1}><W x={80} y={30} size={13}>STEMI</W><path d="M20 60 H50 l6 -10 l6 20 l6 -40 l8 10 H140" stroke={INK} strokeWidth="3" fill="none" /><g transform="translate(0 64) scale(0.5)"><Artery x={40} y={120} width={240} clot flow={false} /></g><W x={80} y={168} size={10.5}>Fully blocked</W></g>
        <g opacity={at === 1 ? 0.35 : 1}><W x={240} y={30} size={13}>NSTEMI</W><path d="M180 60 H210 l6 -10 l6 20 l6 -24 l6 14 H300" stroke={INK} strokeWidth="3" fill="none" /><g transform="translate(160 64) scale(0.5)"><Artery x={40} y={120} width={240} fat={22} /></g><W x={240} y={168} size={10.5}>Partly blocked</W></g>
        {at === 0 && <W x={160} y={200} size={11}>Either way: call 999</W>}
      </> : <>{["Acute coronary syndrome", "Myocardial infarction (MI)", "Coronary thrombosis"].map((name, index) => <g key={name}><rect x="50" y={44 + index * 46} width="220" height="34" rx="12" fill={index === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={160} y={66 + index * 46} size={12} fill={index === 0 ? WHITE : TEXT}>{name}</W></g>)}</>}
    </svg>} />;
}

function TestTiles(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const tiles = [{ t: "ECG", x: 20, y: 30 }, { t: "Troponin", x: 168, y: 30 }, { t: "Angiogram", x: 20, y: 118 }, { t: "Echo", x: 168, y: 118 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="Four tests, four questions" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four tests: ECG, troponin, angiogram and echo">
      {tiles.map((tile, index) => <g key={tile.t} opacity={at === index ? 1 : 0.38}>
        <rect x={tile.x} y={tile.y} width="132" height="76" rx="12" fill={WHITE} stroke={INK} strokeWidth="2" />
        {index === 0 && <path d={trace(tile.x + 8, tile.y + 38, 116)} stroke={INK} strokeWidth="2" fill="none" />}
        {index === 1 && <path d={`M${tile.x + 66} ${tile.y + 14} C${tile.x + 52} ${tile.y + 34}, ${tile.x + 52} ${tile.y + 50}, ${tile.x + 66} ${tile.y + 54} C${tile.x + 80} ${tile.y + 50}, ${tile.x + 80} ${tile.y + 34}, ${tile.x + 66} ${tile.y + 14} Z`} fill={INK} />}
        {index === 2 && <path d={`M${tile.x + 66} ${tile.y + 12} V${tile.y + 40} M${tile.x + 66} ${tile.y + 40} L${tile.x + 40} ${tile.y + 62} M${tile.x + 66} ${tile.y + 40} L${tile.x + 92} ${tile.y + 62} M${tile.x + 52} ${tile.y + 52} L${tile.x + 40} ${tile.y + 44}`} stroke={INK} strokeWidth="3" fill="none" />}
        {index === 3 && <><path d={`M${tile.x + 30} ${tile.y + 62} L${tile.x + 66} ${tile.y + 14} L${tile.x + 102} ${tile.y + 62}`} stroke={SOFT} strokeWidth="2" fill="none" /><HeartShape x={tile.x + 66} y={tile.y + 46} size={34} /></>}
        <W x={tile.x + 66} y={tile.y + 72} size={10}>{tile.t}</W>
      </g>)}
    </svg>} />;
}

function RiskBalance(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const change = ["Smoking", "Blood pressure", "Cholesterol", "Weight", "Activity"];
  const fixed = ["Age", "Family history", "Sex"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Why me?" title="What you can change, and what you can't" label="Causes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Risks you can change and risks you cannot">
      {at === 0 ? <><Artery x={40} y={90} fat={14} clot /><W x={160} y={160} size={12}>Usually a clot in a narrowed artery</W></>
        : at === 3 ? <><W x={160} y={90} size={13}>Less often:</W><W x={160} y={112} size={12}>other causes, which your team</W><W x={160} y={130} size={12}>can explain</W></>
        : <>
          <W x={86} y={28} size={12} fill={at === 1 || at === 4 ? INK : TEXT}>Can change</W>
          <W x={234} y={28} size={12} fill={at === 2 ? INK : TEXT}>Can't change</W>
          {change.map((label, index) => <g key={label}><rect x="20" y={40 + index * 30} width="132" height="24" rx="10" fill={at === 1 || at === 4 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={86} y={57 + index * 30} size={11} fill={at === 1 || at === 4 ? WHITE : TEXT}>{label}</W></g>)}
          {fixed.map((label, index) => <g key={label}><rect x="168" y={40 + index * 30} width="132" height="24" rx="10" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={234} y={57 + index * 30} size={11} fill={at === 2 ? WHITE : TEXT}>{label}</W></g>)}
        </>}
    </svg>} />;
}

function RehabStones(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const stones = ["Assessment", "Exercise", "Information", "Support"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Cardiac rehab" title="Rehab: part of the treatment" label="Cardiac rehab" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Stepping stones: assessment, exercise, information and support">
      {stones.map((stone, index) => <g key={stone}><ellipse cx={50 + index * 72} cy={150 - index * 24} rx="40" ry="16" fill={at === 2 || at === 3 ? INK : index === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={50 + index * 72} y={155 - index * 24} size={10} fill={at === 2 || at === 3 || index === 0 ? WHITE : TEXT}>{stone}</W></g>)}
      <W x={160} y={200} size={11.5}>{["Exercise, information and support, together", "Offered to everyone, at any age", "Your goals, then exercise tailored to you", "It helps your heart and your wellbeing"][at]}</W>
      {at === 1 && <Person x={50} y={110} scale={0.8} />}
    </svg>} />;
}

function PillJobs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const jobs = [{ t: "Antiplatelet", n: "Stops clots" }, { t: "ACE inhibitor", n: "Protects the heart" }, { t: "Beta blocker", n: "Steadies the heart" }, { t: "Statin", n: "Lowers cholesterol" }, { t: "GTN", n: "Eases chest pain" }];
  const lit = [[0, 1, 2, 3, 4], [0], [1, 2], [3, 4], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your tablets" title="Five medicines, five jobs" label="Tablets" credit="Illustration: Rehyn. Never stop or change medicines without your team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pill organiser with each compartment labelled by its job">
      {jobs.map((job, index) => <g key={job.t} transform={`translate(20 ${16 + index * 32})`} opacity={lit.includes(index) || at === 4 ? 1 : 0.35}>
        <rect width="280" height="26" rx="10" fill={lit.includes(index) ? WHITE : TINT} stroke={INK} strokeWidth="2" />
        <Pill x={26} y={13} />
        <W x={54} y={18} size={11} anchor="start">{job.t}</W>
        <W x={270} y={18} size={11} anchor="end" fill={INK}>{job.n}</W>
      </g>)}
      <W x={160} y={196} size={11.5}>{at === 4 ? "Side effects? Talk to your team first" : at === 1 ? "Often for 1 year, plus lifelong aspirin" : "Each one has its own job"}</W>
    </svg>} />;
}

function SixWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const steps = ["Home", "Light jobs", "Short walks", "More", "Drive, work"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The first weeks" title="Small steps, week by week" label="The first six weeks" credit="Illustration: Rehyn. Your own team will guide your timing."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Steps rising over six weeks">
      {steps.map((step, index) => <g key={step}><rect x={16 + index * 60} y={160 - index * 24} width="56" height={20 + index * 24} rx="6" fill={at === 1 || index <= at ? INK : WHITE} stroke={INK} strokeWidth="2" opacity={at === 2 && index > 1 ? 0.4 : 1} />
        <W x={44 + index * 60} y={150 - index * 24} size={9.5}>{step}</W></g>)}
      <W x={160} y={204} size={11.5}>{["Usually 2 to 5 days in hospital", "Build up gradually", "Rest, and accept support", "Driving, work and sex: ask when", "Feeling low or scared is common"][at]}</W>
    </svg>} />;
}

function GtnFlow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const steps = ["Sit, spray", "5 minutes", "Second dose", "5 minutes", "Still pain: 999"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Chest pain" title="GTN first, 999 if it stays" label="Chest pain" credit="Illustration: Rehyn. Follow the plan your own team gave you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Steps: sit and spray, wait 5 minutes, second dose, wait 5 minutes, call 999">
      {at < 2 ? steps.map((step, index) => <g key={step}><rect x="70" y={14 + index * 38} width="180" height="30" rx="10" fill={index === 4 ? INK : at === 0 && index < 4 ? TINT : WHITE} stroke={INK} strokeWidth="2" />
        <W x={160} y={34 + index * 38} size={11} fill={index === 4 ? WHITE : TEXT}>{step}</W>{index < 4 && <path d={`M160 ${44 + index * 38} v8`} stroke={INK} strokeWidth="2" />}</g>)
        : at === 2 ? <Chips labels={["Indigestion", "Muscles", "Anxiety"]} lit={-1} y={90} />
        : at === 3 ? <><HeartShape x={110} y={96} size={80} /><path d="M190 90 q14 -14 28 0 t28 0" stroke={INK} strokeWidth="3" fill="none" /><W x={160} y={170} size={12}>Unsure? It's safest to call 999</W></>
        : <><rect x="80" y="70" width="160" height="60" rx="14" fill={INK} /><W x={160} y={98} size={12} fill={WHITE}>More breathless, or pain</W><W x={160} y={116} size={12} fill={WHITE}>and feeling sick: 111</W></>}
    </svg>} />;
}

function RoadWeeks(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Back on the road" title="Back behind the wheel, safely" label="Driving and work" credit="Illustration: Rehyn. Check with your doctor, and the government's driving pages."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A road with signposts at 1, 4 and 6 weeks">
      <path d="M10 150 H310" stroke={SOFT} strokeWidth="26" strokeLinecap="round" />
      <path d="M20 150 H300" stroke={WHITE} strokeWidth="3" strokeDasharray="14 12" />
      {[{ x: 70, t: "1 week", n: "after a successful angioplasty" }, { x: 160, t: "4 weeks", n: "otherwise" }, { x: 250, t: "6 weeks", n: "bus, coach, lorry" }].map((sign, index) => {
        const lit = (at === 0 && index < 2) || (at === 1 && index === 2);
        return <g key={sign.t} opacity={at > 1 ? 0.35 : lit ? 1 : 0.4}><path d={`M${sign.x} 136 V80`} stroke={TEXT} strokeWidth="3" /><rect x={sign.x - 34} y="56" width="68" height="28" rx="8" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={sign.x} y={75} size={11} fill={lit ? WHITE : TEXT}>{sign.t}</W></g>;
      })}
      <W x={160} y={200} size={11.5}>{["Car: no need to tell DVLA", "Bus, coach, lorry: tell DVLA", "Stents: work after 2 to 4 weeks, for some", "Flying: GTN spray is fine on the plane"][at]}</W>
    </svg>} />;
}

function Plate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const r = 70;
  const parts = [{ t: "Fruit & veg", share: 0.4 }, { t: "Wholegrain bread", share: 0.25 }, { t: "Fish", share: 0.2 }, { t: "Plant oils", share: 0.15 }];
  let angle = -Math.PI / 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Food" title="Mediterranean, not miserable" label="Eating well" credit="Illustration: Rehyn. A picture of the idea, not a measured plate."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A Mediterranean-style plate">
      <circle cx="120" cy="110" r={r + 10} fill={WHITE} stroke={LINE} strokeWidth="3" />
      {parts.map((part, index) => {
        const start = angle; angle += part.share * Math.PI * 2;
        const large = part.share > 0.5 ? 1 : 0;
        const lit = (at === 2 && index === 0) || (at === 0) || (at === 3 && index === 3);
        return <path key={part.t} d={`M120 110 L${120 + r * Math.cos(start)} ${110 + r * Math.sin(start)} A${r} ${r} 0 ${large} 1 ${120 + r * Math.cos(angle)} ${110 + r * Math.sin(angle)} Z`} fill={lit ? INK : SOFT} opacity={lit ? 1 - index * 0.15 : 0.35} stroke={WHITE} strokeWidth="3" />;
      })}
      {parts.map((part, index) => <W key={part.t} x={214} y={60 + index * 26} size={11} anchor="start">{part.t}</W>)}
      <W x={160} y={208} size={11}>{["A Mediterranean style of eating", "Balance, not a strict diet", "More fruit, vegetables and fibre", "Less saturated fat and salt", "Supplements are not advised"][at]}</W>
    </svg>} />;
}

function Stairs(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Intimacy" title="Intimacy after a heart attack" label="Sex" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two flights of stairs, and a calendar">
      {at === 1 || at === 0 ? <>
        <path d="M30 190 H80 V160 H120 V130 H160 V100 H200 V70 H240 V40 H290" stroke={INK} strokeWidth="4" fill="none" strokeLinejoin="round" />
        <Person x={180} y={86} scale={0.8} />
        <W x={90} y={70} size={11}>{at === 0 ? "No greater risk" : "Two flights,"}</W>
        {at === 1 && <W x={90} y={86} size={11}>comfortably</W>}
        {at === 1 && <W x={230} y={150} size={11}>Usually after about 4 weeks</W>}
      </> : at === 2 ? <><path d="M120 70 C120 50, 200 50, 200 70 C200 100, 160 110, 160 130" stroke={INK} strokeWidth="4" fill="none" /><circle cx="160" cy="150" r="5" fill={INK} /><W x={160} y={190} size={12}>Worries are common: you can ask</W></>
        : <><rect x="100" y="60" width="44" height="80" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><W x={122} y={160} size={11}>GTN</W><rect x="180" y="74" width="40" height="52" rx="8" fill={TINT} stroke={INK} strokeWidth="3" /><path d="M176 70 L224 130" stroke={TEXT} strokeWidth="4" /><W x={200} y={160} size={11}>Not together</W></>}
    </svg>} />;
}

function Weather(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood" title="The low weeks are common" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A cloud giving way to the sun over several weeks">
      <path d="M60 110 a26 26 0 0 1 48 -10 a20 20 0 0 1 30 24 H66 a14 14 0 0 1 -6 -14 Z" fill={at === 1 ? INK : SOFT} />
      <circle cx="240" cy="96" r={at === 3 ? 30 : 20} fill={GOLD} opacity={at === 3 ? 1 : 0.5} className={still ? undefined : "lib-v2-node"} />
      <path d="M40 160 C100 170, 180 150, 290 130" stroke={INK} strokeWidth="3" fill="none" strokeDasharray="6 8" />
      <W x={160} y={200} size={11.5}>{["Fear, anger, low mood: all common", "Weeks of feeling low? It may be depression", "Your mood matters for your heart too", "Your GP and rehab team can help"][at]}</W>
    </svg>} />;
}

function QuitLine(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Smoking" title="Stopping smoking: the big one" label="Stopping smoking" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline of benefits after stopping smoking">
      {at === 0 ? <><Artery x={40} y={100} fat={18} /><W x={160} y={170} size={12}>Smoking damages the arteries</W></>
        : at === 1 ? <>
          <path d="M30 110 H290" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
          <circle cx="40" cy="110" r="10" fill={INK} /><W x={40} y={88} size={11}>20 minutes</W><W x={60} y={140} size={10.5}>heart rate and blood</W><W x={60} y={154} size={10.5}>pressure settle</W>
          <circle cx="280" cy="110" r="10" fill={INK} /><W x={272} y={88} size={11}>1 year</W><W x={252} y={140} size={10.5}>heart attack risk</W><W x={252} y={154} size={10.5}>half a smoker's</W>
        </>
        : at === 2 ? <><rect x="50" y="70" width="220" height="50" rx="14" fill={INK} /><W x={160} y={100} size={12} fill={WHITE}>Local NHS stop smoking services</W><W x={160} y={160} size={12}>Free, and they improve your chances</W></>
        : <><Clock x={160} y={96} r={40} hand={0.5} /><W x={160} y={170} size={12}>Cravings pass in about 5 minutes</W></>}
    </svg>} />;
}

// ==== Angina ===============================================================================================

function Supply(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When the heart asks for more" label="Angina" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A narrowed artery feeding the heart, with enough blood at rest and too little on effort">
      <Artery x={20} y={70} width={170} fat={at === 0 ? 0 : 16} />
      <HeartShape x={250} y={84} size={100} fill={at === 2 ? TINT : WHITE} />
      {at === 2 && <g className={still ? undefined : "lib-why-pulse"}><path d="M250 50 l-8 14 h12 l-8 14" stroke={INK} strokeWidth="3" fill="none" /></g>}
      <W x={160} y={180} size={12}>{["Chest pain from too little blood to the heart", "Usually narrowed arteries", "Effort: the heart needs more than gets through", "Rest: the need drops, and the pain eases", "A warning sign to act on"][at]}</W>
      {at === 3 && <W x={250} y={156} size={11}>Usually under 10 minutes</W>}
    </svg>} />;
}

function Traffic(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const lights = [{ t: "Stable: effort, eases with rest", fill: SOFT }, { t: "Worse or more often: 111", fill: GOLD }, { t: "At rest, won't settle: 999", fill: INK }];
  const lit = [0, 2, 2, 1][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stable or unstable" title="Know your pattern, spot the change" label="When to get help" credit="Illustration: Rehyn. Follow the plan your own team gave you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three lights: stable, worse, emergency">
      <rect x="30" y="20" width="70" height="180" rx="20" fill={TEXT} />
      {lights.map((light, index) => <g key={light.t}><circle cx="65" cy={50 + index * 60} r="22" fill={light.fill} opacity={index === lit ? 1 : 0.25} />
        <W x={118} y={55 + index * 60} size={11} anchor="start" fill={index === lit ? INK : TEXT}>{light.t}</W></g>)}
    </svg>} />;
}

function TestPanels(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tests" title="Tests that find the narrowing" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An ECG, a CT scanner, a stress test and an angiogram">
      {at === 0 && <><Person x={160} y={110} scale={1.3} /><W x={160} y={170} size={12}>A referral to a heart specialist</W></>}
      {at === 1 && <><rect x="40" y="50" width="240" height="80" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" /><path d={trace(50, 92, 220)} stroke={INK} strokeWidth="2.5" fill="none" /><W x={160} y={160} size={11.5}>A normal ECG does not rule it out</W></>}
      {at === 2 && <><circle cx="160" cy="96" r="64" fill="none" stroke={INK} strokeWidth="14" /><HeartShape x={160} y={100} size={60} fill={TINT} /><W x={160} y={186} size={12}>A CT scan of the heart's arteries</W></>}
      {at === 3 && <><path d="M60 160 L260 130" stroke={TEXT} strokeWidth="10" strokeLinecap="round" /><Person x={160} y={126} /><W x={160} y={190} size={12}>Watching the heart under effort</W></>}
      {at === 4 && <><HeartShape x={200} y={90} size={110} /><path d="M40 200 C70 150, 140 110, 186 74" stroke={INK} strokeWidth="3" fill="none" /><W x={84} y={120} size={11}>A thin tube and a dye</W></>}
    </svg>} />;
}

function PainMap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots = [{ x: 186, y: 120, t: "Stomach: heartburn", i: 1 }, { x: 140, y: 100, t: "Ribs: muscles", i: 2 }, { x: 160, y: 40, t: "Anxiety", i: 3 }, { x: 172, y: 92, t: "Heart: angina", i: 0 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Not angina?" title="Not every chest pain is angina" label="Other chest pains" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with the places other chest pains can come from">
      <circle cx="160" cy="40" r="22" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M120 210 C120 120, 136 70, 160 70 C184 70, 200 120, 200 210 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      {spots.filter(spot => at === 0 || spot.i === at).map(spot => <g key={spot.t}><circle cx={spot.x} cy={spot.y} r="8" fill={INK} /><W x={spot.x < 160 ? 110 : 210} y={spot.y + 4} size={10.5} anchor={spot.x < 160 ? "end" : "start"}>{spot.t}</W></g>)}
      {at === 4 && <><rect x="10" y="90" width="100" height="40" rx="12" fill={INK} /><W x={60} y={115} size={11} fill={WHITE}>Unsure? Get help</W></>}
    </svg>} />;
}

function SprayClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const marks = [{ a: 0, t: "Spray" }, { a: 1.6, t: "5 min" }, { a: 3.14, t: "Again" }, { a: 4.7, t: "5 min: 999" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="GTN spray" title="The two-dose rule" label="Using GTN" credit="Illustration: Rehyn. Follow the instructions with your own spray."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock face: spray, 5 minutes, second dose, 5 minutes, call 999">
      {at === 2 ? <>
        <circle cx="160" cy="104" r="70" fill={WHITE} stroke={INK} strokeWidth="4" />
        {marks.map(mark => {
          const side = Math.sin(mark.a);
          return <g key={mark.t}><circle cx={160 + 70 * side} cy={104 - 70 * Math.cos(mark.a)} r="9" fill={INK} />
            <W x={side > 0.5 ? 246 : side < -0.5 ? 74 : 160} y={side > 0.5 || side < -0.5 ? 108 : 108 - 92 * Math.cos(mark.a)} anchor={side > 0.5 ? "start" : side < -0.5 ? "end" : "middle"} size={10.5}>{mark.t}</W></g>;
        })}
        <W x={160} y={110} size={13} serif>No more than 2</W>
      </> : <>
        <rect x="136" y="40" width="48" height="110" rx="12" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="148" y="24" width="24" height="18" rx="4" fill={INK} />
        <W x={160} y={186} size={12}>{["It widens the blood vessels", "Sit down, spray under your tongue", "", "Headache or dizziness: sit down", "Before activity: 1 or 2 sprays"][at]}</W>
      </>}
    </svg>} />;
}

function TwoJobs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tablets" title="Tablets that prevent attacks" label="Tablets" credit="Illustration: Rehyn. Never stop or change medicines without your team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two boxes: tablets that prevent angina and tablets that protect you">
      <g opacity={at === 0 || at === 1 || at === 2 ? 1 : 0.4}><rect x="16" y="30" width="138" height="130" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={85} y={54} size={11}>Prevent angina</W>
        <g opacity={at === 2 ? 0.35 : 1}><Pill x={46} y={86} /><W x={70} y={90} size={10} anchor="start">Beta blocker</W></g>
        <g opacity={at === 1 ? 0.35 : 1}><Pill x={46} y={124} fill={SOFT} /><W x={70} y={128} size={10} anchor="start">Calcium blocker</W></g></g>
      <g opacity={at === 0 || at === 3 ? 1 : 0.4}><rect x="166" y="30" width="138" height="130" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={235} y={54} size={11}>{at === 3 ? "Other options" : "Protect you"}</W>
        {at === 3 ? ["Long-acting nitrates", "Ranolazine", "Nicorandil", "Ivabradine"].map((name, index) => <W key={name} x={235} y={80 + index * 20} size={10}>{name}</W>)
          : <><Pill x={196} y={86} fill={TEXT} /><W x={220} y={90} size={10} anchor="start">Aspirin</W><Pill x={196} y={124} fill={TEXT} /><W x={220} y={128} size={10} anchor="start">Statin</W></>}</g>
      <W x={160} y={196} size={11.5}>{at === 4 ? "Reviewed 2 to 4 weeks after a change" : "Your doctor advises which suits you"}</W>
    </svg>} />;
}

function RoadDetour(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Stents or bypass" title="Widen the road, or build a detour" label="Procedures" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A narrowed artery held open by a stent, and a new route around it">
      {at === 0 && <><Pill x={120} y={100} /><path d="M150 100 h40" stroke={TEXT} strokeWidth="3" /><W x={230} y={104} size={12}>Not enough?</W></>}
      {at === 1 && <><Artery x={40} y={100} fat={10} stent /><W x={160} y={146} size={11}>Stent: holds the artery open</W></>}
      {at === 2 && <><Artery x={40} y={120} fat={22} flow={false} /><path d="M70 94 C100 40, 220 40, 250 94" stroke={INK} strokeWidth="6" fill="none" strokeLinecap="round" /><W x={160} y={176} size={11}>Bypass: a new route around</W></>}
      {at === 3 && <>
        <rect x="16" y="40" width="138" height="120" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={85} y={66} size={12}>Stent</W><W x={85} y={98} size={10.5}>Quicker recovery</W><W x={85} y={118} size={10.5}>The artery may</W><W x={85} y={134} size={10.5}>narrow again</W>
        <rect x="166" y="40" width="138" height="120" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={235} y={66} size={12}>Bypass</W><W x={235} y={98} size={10.5}>Most normal</W><W x={235} y={118} size={10.5}>activities after</W><W x={235} y={134} size={10.5}>about 6 weeks</W>
      </>}
    </svg>} />;
}

function Threshold(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercise" title="Moving more, safely" label="Exercise" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Exercise with a warm-up and a cool-down">
      {at === 2 ? <>
        <rect x="20" y="60" width="90" height="70" rx="12" fill={SOFT} /><W x={65} y={92} size={11} fill={WHITE}>15 min</W><W x={65} y={108} size={11} fill={WHITE}>warm-up</W>
        <rect x="116" y="40" width="90" height="90" rx="12" fill={INK} /><W x={161} y={90} size={11} fill={WHITE}>Activity</W>
        <rect x="212" y="70" width="90" height="60" rx="12" fill={SOFT} /><W x={257} y={96} size={11} fill={WHITE}>10 min</W><W x={257} y={112} size={11} fill={WHITE}>cool-down</W>
      </> : at === 3 ? <><rect x="136" y="40" width="48" height="100" rx="12" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="148" y="24" width="24" height="18" rx="4" fill={INK} /><W x={160} y={170} size={12}>Keep your GTN with you</W></>
        : at === 4 ? <><rect x="70" y="70" width="180" height="60" rx="14" fill={INK} /><W x={160} y={98} size={12} fill={WHITE}>Unstable angina:</W><W x={160} y={116} size={12} fill={WHITE}>don't exercise</W></>
        : <><Person x={120} y={120} scale={1.2} /><path d="M160 80 h70 a10 10 0 0 1 10 10 v20 a10 10 0 0 1 -10 10 h-46 l-14 12 v-12 a10 10 0 0 1 -10 -10 Z" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={200} y={104} size={11}>{at === 0 ? "It helps" : "Can still talk"}</W></>}
      <W x={160} y={200} size={11.5}>{at === 0 ? "Most people with angina can exercise safely" : at === 1 ? "Breathing harder, but able to talk" : ""}</W>
    </svg>} />;
}

function AnginaTriggers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const ring = ["Cold", "Big meals", "Stress", "Effort"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Triggers" title="Know your triggers, plan around them" label="Triggers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Common triggers: cold, big meals, stress and effort">
      <HeartShape x={160} y={110} size={70} />
      {ring.map((label, index) => {
        const angle = (index / ring.length) * Math.PI * 2 - Math.PI / 4;
        const x = 160 + Math.cos(angle) * 108; const y = 106 + Math.sin(angle) * 70;
        const lit = at === 0 || at === index + 1 || (at === 4);
        return <g key={label}><rect x={x - 42} y={y - 13} width="84" height="26" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + 4} size={10.5} fill={lit ? WHITE : TEXT}>{label}</W></g>;
      })}
      <W x={160} y={212} size={11}>{["", "Wrap up; heat a room to at least 18°C", "Smaller meals", "Stress can bring it on", "Plan ahead, and keep GTN handy"][at]}</W>
    </svg>} />;
}

function Travel(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Driving, work, travel" title="Driving on with angina" label="Driving and travel" credit="Illustration: Rehyn. Check with your doctor, and the government's driving pages."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A car, a lorry with a form, and a plane">
      <g opacity={at === 0 ? 1 : 0.35}><rect x="20" y="80" width="80" height="34" rx="10" fill={INK} /><circle cx="40" cy="118" r="9" fill={TEXT} /><circle cx="82" cy="118" r="9" fill={TEXT} /><W x={60} y={150} size={10.5}>Car: carry on</W><W x={60} y={164} size={10.5}>unless symptoms</W></g>
      <g opacity={at === 1 ? 1 : 0.35}><rect x="120" y="66" width="80" height="48" rx="8" fill={INK} /><circle cx="140" cy="118" r="9" fill={TEXT} /><circle cx="182" cy="118" r="9" fill={TEXT} /><W x={160} y={150} size={10.5}>Lorry, bus:</W><W x={160} y={164} size={10.5}>tell DVLA</W></g>
      <g opacity={at === 3 ? 1 : 0.35}><path d="M226 98 L300 82 L306 90 L268 104 L278 124 L268 126 L252 108 L232 112 Z" fill={INK} /><W x={264} y={150} size={10.5}>Flying: take</W><W x={264} y={164} size={10.5}>enough medicine</W></g>
      {at === 2 && <W x={160} y={200} size={11.5}>Work: often little change, unless very physical</W>}
    </svg>} />;
}

function ClearArtery(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Food and smoking" title="Kind to your arteries" label="Food and smoking" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A narrowing artery and a clearer one">
      <Artery x={40} y={70} fat={at === 1 ? 20 : 12} />
      <W x={160} y={128} size={11}>{at === 1 ? "Smoking narrows the arteries faster" : "Habits can slow the narrowing"}</W>
      {at >= 2 && <Chips labels={at === 2 ? ["Less salt: 6g", "Less sat. fat", "More veg"] : at === 3 ? ["14 units max", "3+ days", "Healthy weight"] : ["Supplements: ask first"]} lit={-1} y={156} />}
    </svg>} />;
}

function Calm(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Worry" title="A warning, not a life sentence" label="Living with it" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A gauge from worry to calm">
      <Gauge x={160} y={130} r={80} value={[0.35, 0.25, 0.75, 0.3][at]} />
      <W x={70} y={150} size={11}>Calm</W><W x={250} y={150} size={11}>Worry</W>
      <W x={160} y={190} size={11.5}>{["A warning to act on", "Life can carry on", "Worry is common with a heart problem", "Talking it through helps"][at]}</W>
    </svg>} />;
}

// ==== COPD =================================================================================================

/** A pair of lungs, centred on x, top at y, `size` across. */
const Lungs = ({ x, y, size = 160, fill = WHITE }: { x: number; y: number; size?: number; fill?: string }) =>
  <g transform={`translate(${x - size / 2} ${y}) scale(${size / 160})`}>
    <path d="M80 0 V52 M80 52 C72 60, 64 64, 56 66 M80 52 C88 60, 96 64, 104 66" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M66 30 C38 20, 8 62, 12 112 C14 138, 38 146, 58 134 C68 124, 70 92, 66 30 Z" fill={fill} stroke={INK} strokeWidth="4" />
    <path d="M94 30 C122 20, 152 62, 148 112 C146 138, 122 146, 102 134 C92 124, 90 92, 94 30 Z" fill={fill} stroke={INK} strokeWidth="4" />
  </g>;
/** An airway in cross-section: `squeeze` narrows it, `swell` thickens the lining, `mucus` adds a blob. */
const Airway = ({ x, y, r = 40, squeeze = 0, swell = 0, mucus = false }: { x: number; y: number; r?: number; squeeze?: number; swell?: number; mucus?: boolean }) =>
  <g>
    <circle cx={x} cy={y} r={r} fill={SOFT} opacity=".5" stroke={INK} strokeWidth="3" />
    <circle cx={x} cy={y} r={r - 8 - squeeze - swell} fill={WHITE} stroke={swell ? INK : SOFT} strokeWidth={swell ? 4 : 2} />
    {squeeze > 0 && <circle cx={x} cy={y} r={r - 2} fill="none" stroke={TEXT} strokeWidth="4" strokeDasharray="6 5" />}
    {mucus && <ellipse cx={x + 4} cy={y + 4} rx="9" ry="6" fill={GOLD} />}
  </g>;

function CopdAirways(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Narrow airways, trapped air" label="COPD" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Lungs, a narrowed airway, and air sacs">
      {at === 4 ? <><Lungs x={160} y={20} size={150} /><W x={160} y={196} size={12}>Mostly smoking: around 9 in 10 cases</W></> : <>
        <Lungs x={86} y={30} size={130} fill={at === 2 ? TINT : WHITE} />
        {at === 0 || at === 1 ? <><Airway x={232} y={90} r={44} swell={12} /><W x={232} y={160} size={11}>{at === 0 ? "Narrowed airways" : "Hard to breathe out fast"}</W>
          {at === 1 && [0, 1, 2].map(index => <circle key={index} cx={222 + index * 10} cy={90} r="4" fill={INK} />)}</>
          : at === 2 ? <><g>{[0, 1, 2, 3].map(index => <circle key={index} cx={214 + (index % 2) * 34} cy={74 + Math.floor(index / 2) * 34} r="16" fill={WHITE} stroke={INK} strokeWidth="3" strokeDasharray={index === 1 ? "5 5" : undefined} />)}</g><W x={232} y={160} size={11}>Damaged air sacs</W></>
          : <>{["Bronchitis", "Emphysema"].map((name, index) => <g key={name}><rect x="176" y={60 + index * 40} width="112" height="30" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={232} y={80 + index * 40} size={11}>{name}</W></g>)}<W x={232} y={160} size={11}>Often both together</W></>}
      </>}
    </svg>} />;
}

function Spiro(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Spirometry" title="One big breath out, measured" label="Spirometry" credit="Illustration: Rehyn. A picture of the idea, not a real result."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person blowing into a tube, and two bars for the air breathed out">
      <Person x={70} y={130} scale={1.3} />
      <path d="M92 86 H140" stroke={INK} strokeWidth="8" strokeLinecap="round" /><rect x="140" y="74" width="30" height="24" rx="6" fill={WHITE} stroke={INK} strokeWidth="3" />
      {at === 1 ? <W x={160} y={200} size={11.5}>No smoking or big meal first</W>
        : at === 4 ? <W x={160} y={200} size={11.5}>Sometimes a chest X-ray or blood tests</W>
        : <>
          <rect x="196" y="40" width="40" height="120" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="196" y={at === 3 ? 100 : 70} width="40" height={at === 3 ? 60 : 90} rx="8" fill={INK} />
          <rect x="250" y="40" width="40" height="120" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="250" y="50" width="40" height="110" rx="8" fill={SOFT} />
          <W x={216} y={178} size={10}>In 1 second</W><W x={270} y={178} size={10}>In total</W>
          {at === 3 && <W x={190} y={204} size={11}>Less in 1 second: obstruction</W>}
          {at === 2 && <W x={190} y={204} size={11}>Breathe in fully, then blow hard</W>}
        </>}
    </svg>} />;
}

function FlareSigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const signs = ["More breathless", "Coughing more", "More phlegm", "Phlegm changes colour"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Flare-ups" title="Spot a flare-up early" label="Flare-ups" credit="Illustration: Rehyn. Follow your own self-management plan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Signs of a flare-up">
      {at === 1 || at === 0 ? signs.map((sign, index) => <g key={sign}><rect x="40" y={22 + index * 40} width="240" height="32" rx="12" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={160} y={43 + index * 40} size={12} fill={at === 1 ? WHITE : TEXT}>{sign}</W></g>)
        : at === 2 ? <><rect x="90" y="40" width="140" height="100" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={160} y={70} size={12}>Your plan</W><W x={160} y={96} size={11}>Reliever inhaler</W><W x={160} y={116} size={11}>Steroids or antibiotics</W></>
        : at === 3 ? <><rect x="60" y="60" width="200" height="70" rx="14" fill={INK} /><W x={160} y={90} size={13} fill={WHITE}>Very hard to breathe:</W><W x={160} y={112} size={13} fill={WHITE}>999 or A&amp;E</W></>
        : <><path d="M30 160 C90 160, 120 60, 180 70 S270 140, 300 140" stroke={INK} strokeWidth="4" fill="none" /><W x={160} y={200} size={11.5}>Usually 7 to 10 days; most recover in 4 to 6 weeks</W></>}
    </svg>} />;
}

function Cycle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const steps = at === 3 ? ["Less active", "Weaker muscles", "More breathless"] : ["Breathless", "Worried", "Faster breathing"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Breathlessness" title="Breathless is normal; stillness isn't safer" label="Breathlessness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A cycle that can be broken">
      {at === 2 ? <><Person x={160} y={120} scale={1.4} /><path d="M196 80 q14 -10 28 0 q14 10 28 0" stroke={INK} strokeWidth="3" fill="none" /><W x={160} y={190} size={12}>Out of breath when active: normal</W></>
        : at === 4 ? <><circle cx="160" cy="100" r="50" fill={TINT} stroke={INK} strokeWidth="3" /><W x={160} y={105} size={13}>Slow down</W><W x={160} y={190} size={12}>Panic makes it worse: slow down</W></>
        : <>
          {steps.map((step, index) => {
            const angle = index * 2.094 - Math.PI / 2;
            return <g key={step}><rect x={160 + 80 * Math.cos(angle) - 56} y={100 + 64 * Math.sin(angle) - 14} width="112" height="28" rx="12" fill={INK} /><W x={160 + 80 * Math.cos(angle)} y={104 + 64 * Math.sin(angle)} size={11} fill={WHITE}>{step}</W></g>;
          })}
          <path d="M210 60 A80 64 0 0 1 220 140 M110 150 A80 64 0 0 1 100 70" stroke={SOFT} strokeWidth="3" fill="none" strokeDasharray="6 6" />
          {at === 1 && <W x={160} y={204} size={11.5}>Fast breathing doesn't empty the lungs</W>}
          {at === 3 && <W x={160} y={204} size={11.5}>Moving more breaks the cycle</W>}
        </>}
    </svg>} />;
}

function CopdInhalers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Inhalers" title="The right puff, the right way" label="Inhalers" credit="Illustration: Rehyn. Ask to be shown your own inhaler's technique."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An inhaler, and a puffer with a spacer">
      <g opacity={at === 1 || at === 0 || at === 3 ? 1 : 0.4}><path d="M60 50 h36 v80 h-36 Z" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M60 130 h50 v26 h-50 Z" fill={INK} /><W x={84} y={180} size={10.5}>Reliever: quick</W></g>
      <g opacity={at === 2 || at === 0 ? 1 : 0.4}><path d="M150 50 h36 v80 h-36 Z" fill={TINT} stroke={INK} strokeWidth="3" /><path d="M150 130 h50 v26 h-50 Z" fill={SOFT} /><W x={175} y={180} size={10.5}>Long-acting: daily</W></g>
      <g opacity={at === 3 || at === 4 ? 1 : 0.4}><path d="M226 110 C226 80, 300 80, 300 110 C300 140, 226 140, 226 110 Z" fill={WHITE} stroke={INK} strokeWidth="3" /><W x={263} y={180} size={10.5}>Spacer</W></g>
      <W x={160} y={208} size={11}>{["They open the airways", "For breathless moments", "12 to 24 hours, used regularly", "Technique matters", "Replace a spacer at least every year"][at]}</W>
    </svg>} />;
}

function RehabWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const weeks = Array.from({ length: 8 }, (_, index) => index);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pulmonary rehab" title="Weeks that build your breath" label="Pulmonary rehab" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Six to eight weeks, two sessions a week">
      {weeks.map(week => <g key={week} opacity={week > 5 ? 0.5 : 1}><rect x={18 + week * 37} y="60" width="32" height="70" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" />
        <circle cx={34 + week * 37} cy="82" r="7" fill={at === 1 || at === 2 ? INK : SOFT} /><circle cx={34 + week * 37} cy="108" r="7" fill={at === 1 || at === 2 ? INK : SOFT} />
        <W x={34 + week * 37} y={50} size={10}>{week + 1}</W></g>)}
      <W x={160} y={164} size={12}>{["Exercise and education, tailored to you", "6 to 8 weeks, two sessions a week", "9 in 10 who finish can do more", "Your GP or team can refer you", "Keep going afterwards"][at]}</W>
    </svg>} />;
}

function Rescue(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const steps = ["Flare-up signs", "Start the pack", "Tell your team"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Rescue pack" title="Rescue pack: start, then tell" label="Rescue pack" credit="Illustration: Rehyn. Follow the plan your own team gave you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Flare-up signs, then start the pack, then tell your team">
      {at === 4 ? <><rect x="60" y="60" width="200" height="70" rx="14" fill={INK} /><W x={160} y={90} size={13} fill={WHITE}>Very hard to breathe:</W><W x={160} y={112} size={13} fill={WHITE}>999 or A&amp;E</W></>
        : at === 2 ? <><W x={160} y={60} size={13}>3 or more courses in a year?</W><rect x="80" y="80" width="160" height="40" rx="12" fill={INK} /><W x={160} y={105} size={12} fill={WHITE}>Ask for a review</W></>
        : <>{steps.map((step, index) => <g key={step}><rect x={14 + index * 104} y="70" width="92" height="50" rx="12" fill={(at === 0 && index === 1) || (at === 1 && index === 0) || (at === 3 && index === 2) ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <W x={60 + index * 104} y={100} size={10.5} fill={(at === 0 && index === 1) || (at === 1 && index === 0) || (at === 3 && index === 2) ? WHITE : TEXT}>{step}</W>
          {index < 2 && <path d={`M${108 + index * 104} 95 h8`} stroke={INK} strokeWidth="3" />}</g>)}
          <W x={160} y={160} size={11.5}>{["Steroid tablets or antibiotics, kept at home", "Used when a flare-up starts", "", "So they can review your treatment"][at]}</W></>}
    </svg>} />;
}

function OxygenGauge(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Oxygen" title="Oxygen treats low oxygen, not breathlessness" label="Home oxygen" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A blood oxygen gauge with a low zone">
      {at === 3 ? <><path d="M120 120 C120 80, 200 80, 200 120" stroke={INK} strokeWidth="4" fill="none" /><path d="M110 60 L210 160 M210 60 L110 160" stroke={TEXT} strokeWidth="5" /><W x={160} y={196} size={12}>No smoking near oxygen</W></>
        : <>
          <path d="M60 140 A100 100 0 0 1 260 140" stroke={LINE} strokeWidth="18" fill="none" />
          <path d="M60 140 A100 100 0 0 1 90 70" stroke={INK} strokeWidth="18" fill="none" />
          <W x={60} y={166} size={11}>Low</W><W x={260} y={166} size={11}>Normal</W>
          <W x={160} y={196} size={11.5}>{["Only for low oxygen levels", "Long-term: 15 hours a day or more", "Blood gases measured twice", "", "Reviewed regularly"][at]}</W>
        </>}
    </svg>} />;
}

function Candle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Breathing" title="Breathe out like a candle" label="Breathing techniques" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Pursed-lip breathing towards a candle">
      {at === 3 ? <>{[60, 160, 260].map((x, index) => <g key={x}><Person x={x} y={130} scale={1.1} />{index === 0 && <path d={`M${x - 30} 150 H${x + 30} M${x + 24} 150 V180`} stroke={INK} strokeWidth="3" />}{index === 1 && <path d={`M${x - 20} 100 H${x + 30} V150`} stroke={INK} strokeWidth="3" fill="none" />}{index === 2 && <path d={`M${x + 22} 90 V180`} stroke={INK} strokeWidth="3" />}</g>)}<W x={160} y={204} size={11.5}>Leaning forward can help</W></>
        : at === 4 ? <><circle cx="120" cy="100" r="40" fill="none" stroke={INK} strokeWidth="4" /><path d="M120 60 V140 M80 100 H160" stroke={SOFT} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} /><path d="M160 100 h60" stroke={INK} strokeWidth="4" /><W x={160} y={186} size={12}>A handheld fan, about 6 inches away</W></>
        : <>
          <path d="M60 60 C100 60, 110 90, 110 110 C110 130, 96 150, 70 150" stroke={INK} strokeWidth="4" fill="none" />
          <ellipse cx="114" cy="110" rx="5" ry="3" fill={INK} />
          <path d="M126 110 h70" stroke={SOFT} strokeWidth="3" strokeDasharray="5 6" />
          <rect x="226" y="110" width="20" height="60" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" />
          <path d={at === 1 ? "M236 108 C230 96, 222 92, 232 78 C236 90, 244 94, 236 108 Z" : "M236 108 C228 96, 230 84, 236 74 C242 84, 244 96, 236 108 Z"} fill={GOLD} />
          <W x={160} y={196} size={11.5}>{["Gentle breaths, shoulders relaxed", "Lips pursed, as if to blow a candle", "Blow as you go: out during the effort"][at]}</W>
        </>}
    </svg>} />;
}

function NeverLate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Smoking" title="Never too late to stop" label="Stopping smoking" credit="Illustration: Rehyn. A picture of the idea, not real data."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Lung damage climbing, then levelling off after stopping smoking">
      {at < 2 ? <>
        <path d="M30 170 H300 M30 170 V30" stroke={LINE} strokeWidth="2" />
        <path d={`M30 160 C80 150, 130 120, 170 96 ${at === 1 ? "C200 84, 250 82, 300 80" : "C210 72, 260 50, 300 36"}`} stroke={INK} strokeWidth="4" fill="none" />
        {at === 1 && <><circle cx="170" cy="96" r="7" fill={GOLD} /><W x={170} y={124} size={11}>Stopped</W></>}
        <W x={160} y={200} size={11.5}>{at === 0 ? "Smoking is the main cause" : "It slows the damage, at any stage"}</W>
      </> : at === 2 ? <><rect x="50" y="70" width="220" height="50" rx="14" fill={INK} /><W x={160} y={100} size={12} fill={WHITE}>3 times more likely with support</W></>
        : at === 3 ? <Chips labels={["Patches", "Gum", "Medicines"]} lit={-1} y={90} />
        : <><Clock x={160} y={90} r={40} hand={1} /><W x={160} y={160} size={12}>Cravings last 5 or 10 minutes</W><W x={160} y={180} size={11}>28 days smoke-free: 5 times likelier to stop</W></>}
    </svg>} />;
}

function JabCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Vaccines" title="Your jabs before winter" label="Vaccines" credit="Illustration: Rehyn. Ask your GP or pharmacist which you can have."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Months from September to March, with the flu jab before the end of October">
      {months.map((month, index) => <g key={month}><rect x={14 + index * 42} y="70" width="38" height="50" rx="8" fill={index < 2 && at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={33 + index * 42} y={100} size={11} fill={index < 2 && at === 1 ? WHITE : TEXT}>{month}</W></g>)}
      <W x={160} y={160} size={11.5}>{["They lower the chance of a chest infection", "Flu jab: best before the end of October", "Pneumococcal: usually once", "COVID-19 and RSV, by age and health", "Flu and COVID-19 can be together"][at]}</W>
    </svg>} />;
}

function PaceDay(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const blocks = ["Wash", "Rest", "Dress", "Rest", "Walk", "Rest"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pacing" title="Pace the day, save your breath" label="Pacing" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day of tasks with rests between">
      {at === 2 ? <><path d="M40 190 H90 V160 H130 V130 H170 V100 H210 V70 H260" stroke={INK} strokeWidth="4" fill="none" /><circle cx="150" cy="122" r="6" fill={GOLD} /><W x={150} y={110} size={10.5}>Pause</W><W x={160} y={208} size={11.5}>A few steps at a time, then rest</W></>
        : <>{blocks.map((block, index) => <g key={index}><rect x={14 + index * 50} y="70" width="44" height="60" rx="10" fill={block === "Rest" ? TINT : INK} stroke={INK} strokeWidth="2" /><W x={36 + index * 50} y={104} size={10.5} fill={block === "Rest" ? TEXT : WHITE}>{block}</W></g>)}
          <W x={160} y={166} size={11.5}>{["Plan the day, with plenty of rest", "A towelling robe, and loose clothes", "", "A wheeled cart or walking frame helps", "Exercise builds strength"][at]}</W></>}
    </svg>} />;
}

function WorryLoop(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood" title="When breath and worry feed each other" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Breathlessness and anxiety in a loop">
      {at === 4 ? <><rect x="40" y="60" width="240" height="70" rx="14" fill={INK} /><W x={160} y={90} size={12} fill={WHITE}>Thoughts of harming yourself:</W><W x={160} y={110} size={12} fill={WHITE}>999 or A&amp;E</W></> : <>
        <path d="M110 70 A60 50 0 0 1 210 70" stroke={INK} strokeWidth="4" fill="none" /><path d="M210 140 A60 50 0 0 1 110 140" stroke={INK} strokeWidth="4" fill="none" />
        <rect x="56" y="88" width="98" height="32" rx="12" fill={at === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={105} y={109} size={11} fill={at === 0 ? WHITE : TEXT}>Breathless</W>
        <rect x="166" y="88" width="98" height="32" rx="12" fill={at === 0 || at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={215} y={109} size={11} fill={at === 0 || at === 1 ? WHITE : TEXT}>{at === 1 ? "Low mood" : "Anxious"}</W>
        <W x={160} y={190} size={11.5}>{["Each can make the other worse", "Low mood is common with a long-term condition", "Your GP can help", "Talking to others in the same boat helps"][at]}</W>
      </>}
    </svg>} />;
}

// ==== Asthma ===============================================================================================

function ThreeChanges(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const changes = [{ t: "Muscles tighten", squeeze: 8, swell: 0, mucus: false }, { t: "Lining swells", squeeze: 0, swell: 10, mucus: false }, { t: "Mucus builds", squeeze: 0, swell: 4, mucus: true }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Tight, swollen, sticky" label="Asthma" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An airway three times: tightened, swollen and with mucus">
      {at === 0 ? <><Airway x={100} y={96} r={46} /><Airway x={220} y={96} r={46} squeeze={6} swell={6} /><W x={100} y={168} size={11}>Usual</W><W x={220} y={168} size={11}>Sensitive, reacting</W></>
        : at === 2 ? <><Chips labels={["Preventer: calms", "Reliever: opens"]} lit={-1} y={84} /></>
        : at === 3 || at === 4 ? <><Airway x={160} y={90} r={50} /><W x={160} y={170} size={12}>{at === 3 ? "About 8 in 100 people in the UK" : "Attacks can be serious: take it seriously"}</W></>
        : changes.map((change, index) => <g key={change.t}><Airway x={60 + index * 100} y={96} r={40} squeeze={change.squeeze} swell={change.swell} mucus={change.mucus} /><W x={60 + index * 100} y={160} size={10.5}>{change.t}</W></g>)}
    </svg>} />;
}

function TriggerRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const ring = ["Colds and flu", "Pollen", "Cold air", "Exercise", "Smoke", "Pets", "Feelings"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Triggers" title="Know what sets you off" label="Triggers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label={`Common triggers: ${ring.join(", ")}`}>
      <Airway x={160} y={108} r={30} squeeze={at === 0 ? 6 : 0} />
      {ring.map((label, index) => {
        const angle = (index / ring.length) * Math.PI * 2 - Math.PI / 2;
        const x = 160 + Math.cos(angle) * 116; const y = 108 + Math.sin(angle) * 82;
        const lit = at === 1 || (at === 3 && index === 0) || (at === 4 && index === 2);
        return <g key={label}><rect x={x - 44} y={y - 12} width="88" height="24" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + 4} size={10} fill={lit ? WHITE : TEXT}>{label}</W></g>;
      })}
      {at === 2 && <W x={160} y={160} size={10.5}>Triggers can change</W>}
    </svg>} />;
}

function ThreeTests(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tests = [{ t: "Peak flow", n: "How fast" }, { t: "Spirometry", n: "How much" }, { t: "FeNO", n: "Inflammation" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tests" title="Three tests, three different answers" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Peak flow, spirometry and FeNO tests">
      {tests.map((test, index) => <g key={test.t} opacity={at === 0 || at === index + 1 ? 1 : 0.35}>
        <rect x={14 + index * 100} y="40" width="92" height="110" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x={42 + index * 100} y="60" width="36" height="50" rx="8" fill={TINT} stroke={INK} strokeWidth="2" />
        <W x={60 + index * 100} y={128} size={11}>{test.t}</W><W x={60 + index * 100} y={144} size={10} fill={SOFT}>{test.n}</W>
      </g>)}
      <W x={160} y={190} size={11.5}>{at === 4 ? "Sometimes a blood test too" : "Tests help confirm it"}</W>
    </svg>} />;
}

function LifeLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Adult onset" title="Asthma can start at any age" label="Starting as an adult" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A life timeline with asthma starting in adulthood">
      <path d="M30 110 H290" stroke={LINE} strokeWidth="10" strokeLinecap="round" />
      <W x={30} y={140} size={10.5}>Childhood</W><W x={290} y={140} size={10.5}>Later life</W>
      <circle cx={at === 4 ? 60 : 200} cy="110" r="12" fill={INK} />
      {at === 4 && <circle cx="220" cy="110" r="12" fill={SOFT} />}
      <W x={160} y={186} size={11.5}>{["Some people are first diagnosed as adults", "Work, smoke, weight and hormones", "It is sometimes mistaken for COPD", "It can be harder to control", "Childhood asthma can come back"][at]}</W>
    </svg>} />;
}

function TwoInhalers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Inhalers" title="A preventer every day" label="Preventer and reliever" credit="Illustration: Rehyn. Use the inhalers and plan your own team gave you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A preventer inhaler and a reliever inhaler">
      <g opacity={at === 0 || at === 2 || at === 3 || at === 4 ? 1 : 0.35}><path d="M70 40 h40 v90 h-40 Z" fill={TINT} stroke={INK} strokeWidth="3" /><path d="M70 130 h56 v28 h-56 Z" fill={INK} /><W x={92} y={184} size={11}>Preventer: every day</W></g>
      <g opacity={at === 1 || at === 2 ? 1 : 0.35}><path d="M210 40 h40 v90 h-40 Z" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M210 130 h56 v28 h-56 Z" fill={SOFT} /><W x={232} y={184} size={11}>Reliever: when needed</W></g>
      <W x={160} y={210} size={11}>{["Calms the swelling over time", "Opens the airway, no steroid", "AIR or MART: one inhaler for both", "Technique matters: a spacer with a puffer", "Reliever 3 times a week or more? See your GP"][at]}</W>
    </svg>} />;
}

function PlanSheet(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const boxes = ["Every day", "When it gets worse", "In an attack"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Action plan" title="One page that tells you what to do" label="Action plan" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An action plan with three boxes">
      <rect x="90" y="16" width="140" height="190" rx="12" fill={WHITE} stroke={INK} strokeWidth="2" />
      {boxes.map((box, index) => <g key={box}><rect x="104" y={34 + index * 56} width="112" height="44" rx="8" fill={at === 0 ? [TINT, SOFT, INK][index] : TINT} /><W x={160} y={61 + index * 56} size={10.5} fill={at === 0 && index === 2 ? WHITE : TEXT}>{box}</W></g>)}
      {at === 3 && <><Person x={270} y={140} scale={0.8} fill={SOFT} /><Person x={50} y={140} scale={0.8} fill={SOFT} /><W x={160} y={218} size={10}>Copies for family and friends</W></>}
      {at === 1 && <W x={270} y={110} size={10.5}>Fewer attacks</W>}
      {at === 2 && <W x={50} y={110} size={10.5}>From your</W>}
      {at === 2 && <W x={50} y={124} size={10.5}>GP or nurse</W>}
      {at === 4 && <W x={270} y={110} size={10.5}>Update it</W>}
    </svg>} />;
}

function AttackSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const steps = at === 2 ? ["Sit up, keep calm", "1 puff every 1 to 3 min", "Up to 6 puffs", "Worse? 999"] : ["Sit up, keep calm", "1 puff every 30 to 60 s", "Up to 10 puffs", "Worse? 999"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="An attack" title="Sit up, puff, call 999" label="In an attack" credit="Illustration: Rehyn. Follow your own action plan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The steps in an asthma attack">
      {at === 0 ? <Chips labels={["Coughing", "Wheezing", "Tight chest", "Breathless"]} lit={-1} y={90} />
        : at === 3 ? <><rect x="50" y="70" width="220" height="60" rx="14" fill={INK} /><W x={160} y={96} size={12} fill={WHITE}>No reliever? Call 999</W><W x={160} y={114} size={11} fill={WHITE}>straight away</W></>
        : at === 4 ? <W x={160} y={110} size={12}>Afterwards: a follow-up with your GP</W>
        : steps.map((step, index) => <g key={step}><rect x="60" y={20 + index * 46} width="200" height="36" rx="12" fill={index === 3 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={160} y={43 + index * 46} size={11.5} fill={index === 3 ? WHITE : TEXT}>{step}</W></g>)}
    </svg>} />;
}

function ReviewCheck(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const list = ["Symptoms", "Medicines", "Inhaler technique", "Action plan"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Reviews" title="The check-up worth having when well" label="Asthma review" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A yearly review and what it covers">
      <rect x="20" y="40" width="110" height="110" rx="12" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx="75" cy="100" r="22" fill="none" stroke={INK} strokeWidth="4" /><W x={75} y={64} size={11}>Once a year</W>
      {list.map((item, index) => <g key={item}><rect x="150" y={40 + index * 30} width="16" height="16" rx="4" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={174} y={53 + index * 30} size={11} anchor="start">{item}</W></g>)}
      <W x={160} y={186} size={11.5}>{["At least once a year", "", "It keeps your asthma under control", "Bring your inhalers and questions", "No need to wait: ask sooner"][at]}</W>
    </svg>} />;
}

function Runner(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exercise" title="Exercise is fine; symptoms are a signal" label="Exercise" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person exercising, and a gauge">
      <Person x={90} y={130} scale={1.4} />
      <path d="M70 160 L50 200 M110 160 L130 196" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <Gauge x={230} y={130} r={56} value={at === 0 ? 0.35 : at === 1 ? 0.75 : 0.5} />
      <W x={230} y={170} size={11}>{["Breathing harder: normal", "Cough, wheeze: review", "Cold, dry air can trigger it", "Warm up; reliever handy", "Not back to normal: 999"][at]}</W>
    </svg>} />;
}

function HomeRooms(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rooms = [{ t: "Damp, mould", x: 60, y: 90 }, { t: "Dust mites", x: 160, y: 90 }, { t: "Pets", x: 260, y: 90 }, { t: "Smoke, sprays", x: 110, y: 160 }, { t: "Preventer", x: 210, y: 160 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="At home" title="Cut the triggers in your house" label="At home" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A house with rooms marked for common triggers">
      <path d="M20 60 L160 10 L300 60 V200 H20 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      {rooms.map((room, index) => <g key={room.t}><rect x={room.x - 46} y={room.y - 22} width="92" height="44" rx="10" fill={at === index ? INK : TINT} /><W x={room.x} y={room.y + 4} size={10.5} fill={at === index ? WHITE : TEXT}>{room.t}</W></g>)}
      {at === 1 && <W x={160} y={214} size={10.5}>Wash bedding at 60°C</W>}
    </svg>} />;
}

function SmokeFree(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Smoke and vapes" title="Smoke-free airways, smoke-free home" label="Smoking and vaping" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An airway and a crossed-out cigarette">
      <Airway x={90} y={100} r={50} swell={at === 0 || at === 1 ? 10 : 0} />
      <rect x="170" y="94" width="110" height="14" rx="4" fill={at === 3 || at === 4 ? SOFT : WHITE} stroke={INK} strokeWidth="2" /><rect x="262" y="94" width="18" height="14" fill={at === 3 || at === 4 ? INK : GOLD} />
      {at < 3 && <path d="M170 70 L280 130" stroke={TEXT} strokeWidth="4" />}
      <W x={160} y={186} size={11.5}>{["Smoke irritates the airways", "Other people's smoke too", "3 times likelier to quit with support", "Vaping is not risk-free", "Vaping to quit? Aim to stop in time"][at]}</W>
    </svg>} />;
}

function Pollen(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Hay fever" title="Start early, before pollen season" label="Hay fever" credit="Illustration: Rehyn. Pollen seasons vary; a picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Months with pollen shaded, and a start marker before them">
      {months.map((month, index) => <g key={month}><rect x={14 + index * 37} y="80" width="33" height="44" rx="8" fill={index > 0 && index < 7 ? SOFT : WHITE} opacity={index > 0 && index < 7 ? 0.8 : 1} stroke={INK} strokeWidth="2" /><W x={30 + index * 37} y={106} size={10}>{month}</W></g>)}
      {at === 1 && <><path d="M30 70 V40" stroke={INK} strokeWidth="3" /><circle cx="30" cy="36" r="6" fill={INK} /><W x={70} y={30} size={10.5}>Start early</W></>}
      <W x={160} y={164} size={11.5}>{["Pollen can trigger asthma", "Start hay fever treatment early", "Keep taking your preventer", "High pollen days: plan ahead", "Thunderstorms can trigger attacks"][at]}</W>
    </svg>} />;
}

// ==== Sleep apnoea =========================================================================================

const Head = ({ x, y, narrow = 0 }: { x: number; y: number; narrow?: number }) => <g transform={`translate(${x} ${y})`}>
  <path d="M-10 -60 C-60 -60, -76 -10, -60 30 C-56 44, -50 50, -50 70 L10 70 C10 50, 20 46, 30 40 C44 32, 40 20, 44 12 L54 6 L44 -4 C50 -30, 30 -60, -10 -60 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
  <path d={`M30 18 C10 18, ${-6 + narrow} 24, ${-8 + narrow} 70`} stroke={SOFT} strokeWidth="4" fill="none" />
  <path d={`M-30 70 C-30 40, ${-20 - narrow} 30, -10 20`} stroke={SOFT} strokeWidth="4" fill="none" />
</g>;

function Throat(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="What happens" title="The throat that closes at night" label="Sleep apnoea" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head from the side, with the airway narrowing in sleep">
      <Head x={110} y={110} narrow={at === 1 ? 14 : at === 0 ? 6 : 0} />
      {at === 2 && <path d="M100 40 l8 -14 l4 10 l8 -12" stroke={GOLD} strokeWidth="3" fill="none" className={still ? undefined : "lib-why-pulse"} />}
      <W x={250} y={100} size={11.5}>{["A narrow airway", "Relaxed muscles close it", "A brief waking", "You may not know"][at]}</W>
      {at === 1 && <W x={250} y={120} size={11}>Breathing stops</W>}
      {at === 2 && <W x={250} y={120} size={11}>Breathing starts again</W>}
    </svg>} />;
}

function Links(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const links = [{ t: "Heart", x: 70, y: 60 }, { t: "Blood pressure", x: 250, y: 60 }, { t: "Driving", x: 70, y: 160 }, { t: "Mood", x: 250, y: 160 }];
  const lit = [[0, 1, 2, 3], [0], [1], [2, 3]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Why it matters" title="More than snoring" label="Why it matters" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Sleep apnoea linked to the heart, blood pressure, driving and mood">
      {links.map(link => <path key={link.t} d={`M160 110 L${link.x} ${link.y}`} stroke={SOFT} strokeWidth="3" />)}
      <circle cx="160" cy="110" r="38" fill={TINT} stroke={INK} strokeWidth="3" /><W x={160} y={114} size={11}>Untreated</W>
      {links.map((link, index) => <g key={link.t}><rect x={link.x - 54} y={link.y - 15} width="108" height="30" rx="12" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={link.x} y={link.y + 5} size={11} fill={lit.includes(index) ? WHITE : TEXT}>{link.t}</W></g>)}
    </svg>} />;
}

function Study(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tests" title="A sleep study in your own bed" label="Sleep study" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person asleep in bed wearing small monitors">
      {at === 0 ? <><rect x="80" y="40" width="160" height="130" rx="12" fill={WHITE} stroke={INK} strokeWidth="2" />{[0, 1, 2, 3].map(index => <g key={index}><path d={`M96 ${70 + index * 24} H200`} stroke={LINE} strokeWidth="3" /><circle cx={216} cy={70 + index * 24} r="6" fill={index < 2 ? INK : WHITE} stroke={INK} strokeWidth="2" /></g>)}<W x={160} y={192} size={11.5}>A questionnaire about sleepiness</W></>
        : <>
          <path d="M20 150 H300 V180 H20 Z" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="30" y="122" width="60" height="28" rx="12" fill={TINT} />
          <circle cx="70" cy="110" r="18" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M86 136 H260 V150 H86 Z" fill={SOFT} opacity=".6" />
          {(at === 2 || at === 1) && <><circle cx="200" cy="138" r="7" fill={INK} /><path d="M120 128 h40" stroke={INK} strokeWidth="4" /><path d="M58 112 h-14" stroke={INK} strokeWidth="3" /></>}
          {at === 2 && <><W x={200} y={210} size={10.5}>Oxygen</W><W x={140} y={110} size={10.5}>Breathing</W><W x={44} y={86} size={10.5}>Airflow</W></>}
          <W x={160} y={36} size={11.5}>{at === 1 ? "Usually at home, overnight" : at === 3 ? "The results show how severe it is" : ""}</W>
        </>}
    </svg>} />;
}

function Ahi(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const bands = [{ t: "Mild: 5 to 14", fill: SOFT }, { t: "Moderate: 15 to 30", fill: INK }, { t: "Severe: over 30", fill: TEXT }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Severity" title="Mild, moderate, severe: your AHI" label="Severity" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three bands of the AHI score">
      {bands.map((band, index) => <g key={band.t} opacity={at === 1 || at === 0 ? 1 : 0.6}><rect x={14 + index * 100} y="70" width="94" height="40" rx="10" fill={band.fill} /><W x={61 + index * 100} y={95} size={10.5} fill={WHITE}>{band.t}</W></g>)}
      <W x={160} y={150} size={11.5}>{["Pauses in breathing, per hour of sleep", "Three bands", "Oxygen levels matter too", "Mild may need none; moderate to severe: CPAP"][at]}</W>
    </svg>} />;
}

function CpapKit(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="CPAP" title="Getting comfortable with CPAP" label="CPAP" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A CPAP machine, hose and mask">
      <rect x="30" y="110" width="90" height="60" rx="12" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="75" cy="140" r="12" fill={at === 3 ? INK : TINT} stroke={INK} strokeWidth="2" />
      <path d="M120 140 C170 140, 170 80, 210 80" stroke={SOFT} strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M210 60 C250 54, 270 70, 266 92 C262 110, 228 112, 210 100 Z" fill={at === 2 ? TINT : WHITE} stroke={INK} strokeWidth="3" />
      {at === 2 && <path d="M270 70 l12 -6 M272 84 l14 0" stroke={GOLD} strokeWidth="3" />}
      <W x={160} y={200} size={11.5}>{["Air keeps the airway open", "The first weeks take getting used to", "Leaks? Try another mask or fit", "Dry mouth: humidifier or chin strap", "Best used every night"][at]}</W>
    </svg>} />;
}

function Jaw(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mouthpiece" title="Holding the jaw forward" label="Mouthpiece" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A jaw before and with a mouthpiece">
      <g opacity={at === 0 ? 0.5 : 0.35}><Head x={90} y={110} narrow={10} /></g>
      <Head x={230} y={110} narrow={0} />
      <rect x="248" y="118" width="30" height="12" rx="4" fill={INK} />
      <W x={90} y={204} size={11}>Without</W><W x={230} y={204} size={11}>With a mouthpiece</W>
      <W x={160} y={24} size={11.5}>{["It holds your jaw forward", "Mild to moderate apnoea, or snoring", "Made to fit your teeth", "Some people get jaw or tooth aches"][at]}</W>
    </svg>} />;
}

function SideSleep(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Small changes" title="Small changes, easier breathing" label="Weight and position" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Sleeping on the back, and on the side">
      {at === 3 ? <>
        <g opacity=".5"><path d="M20 120 H140" stroke={INK} strokeWidth="18" strokeLinecap="round" /><circle cx="30" cy="104" r="14" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M14 80 L46 132 M46 80 L14 132" stroke={TEXT} strokeWidth="4" /></g>
        <path d="M180 120 C220 100, 260 140, 300 120" stroke={INK} strokeWidth="18" strokeLinecap="round" fill="none" /><circle cx="182" cy="100" r="14" fill={WHITE} stroke={INK} strokeWidth="3" />
        <W x={240} y={170} size={11}>On your side</W>
      </> : <Chips labels={[["Weight", "Alcohol", "Smoking", "", "Mild?"][at]]} lit={0} y={80} />}
      <W x={160} y={204} size={11.5}>{["Losing weight can help", "Alcohol relaxes the throat", "Smoking and sleeping pills can worsen it", "", "These alone may be enough if mild"][at]}</W>
    </svg>} />;
}

function DvlaPath(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const steps = ["Excessive sleepiness?", "Tell DVLA", "Don't drive until controlled"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Driving" title="Sleepiness, driving and the DVLA" label="Driving" credit="Illustration: Rehyn. Check with your doctor, and the government's driving pages."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path: sleepiness, tell DVLA, hold off driving">
      {steps.map((step, index) => <g key={step}><rect x="40" y={20 + index * 54} width="240" height="40" rx="12" fill={(at === 0 && index === 1) || (at === 1 && index === 2) || (at === 2 && index === 0) ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={160} y={45 + index * 54} size={12} fill={(at === 0 && index === 1) || (at === 1 && index === 2) || (at === 2 && index === 0) ? WHITE : TEXT}>{step}</W>
        {index < 2 && <path d={`M160 ${60 + index * 54} v14`} stroke={INK} strokeWidth="3" />}</g>)}
      <W x={160} y={200} size={11}>{["", "", "Not excessive? Ask your doctor", "Online, or form SL1 (SL1V for lorries)"][at]}</W>
    </svg>} />;
}

function CabinBag(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const items = ["Adapter, lead", "In hand luggage", "Clinic letter", "Insurance, water"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Travel" title="Packing CPAP for a trip" label="Travel" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A cabin bag with a CPAP machine">
      <rect x="40" y="50" width="120" height="130" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M80 50 V30 H120 V50" stroke={INK} strokeWidth="3" fill="none" />
      <rect x="64" y="96" width="72" height="44" rx="10" fill={TINT} stroke={INK} strokeWidth="2" />
      {items.map((item, index) => <g key={item}><rect x="180" y={44 + index * 36} width="124" height="28" rx="10" fill={at === index ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={242} y={63 + index * 36} size={10.5} fill={at === index ? WHITE : TEXT}>{item}</W></g>)}
    </svg>} />;
}

function PartnerBed(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Partners" title="The person next to you" label="Partners" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people in bed, one noticing pauses in the other's breathing">
      <path d="M20 140 H300 V180 H20 Z" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M30 120 H290 V140 H30 Z" fill={SOFT} opacity=".5" />
      <circle cx="90" cy="110" r="18" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="220" cy="104" r="18" fill={at === 0 ? TINT : WHITE} stroke={INK} strokeWidth="3" />
      {at === 3 ? <W x={90} y={70} size={14} serif>quieter</W> : <><W x={90} y={70} size={14} serif>zzz</W><W x={130} y={60} size={12}>· · pause · ·</W></>}
      <W x={160} y={208} size={11.5}>{["Partners often notice it first", "It can help to go to the GP together", "It can be hard for both of you", "Less snoring, and better sleep"][at]}</W>
    </svg>} />;
}

function DayEnergy(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your days" title="Getting your days back" label="Energy" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Energy through the day, before and after treatment">
      <path d="M20 160 H300" stroke={LINE} strokeWidth="2" />
      <path d="M20 130 C60 140, 90 100, 120 136 S200 150, 240 120 S290 140, 300 140" stroke={SOFT} strokeWidth="3" fill="none" opacity={at === 2 || at === 3 ? 0.4 : 1} />
      {(at === 2 || at === 3) && <path d="M20 90 C80 80, 160 84, 300 88" stroke={INK} strokeWidth="4" fill="none" />}
      <W x={50} y={182} size={10.5}>Morning</W><W x={270} y={182} size={10.5}>Evening</W>
      <W x={160} y={40} size={11.5}>{["Tired all day, even after a night's sleep", "A questionnaire checks your sleepiness", "Treatment: more refreshed", "Keep using it", "Exercise, and a dark, quiet bedroom"][at]}</W>
    </svg>} />;
}

export function HeartPieceView({ piece, ...props }: { piece: HeartPiece } & PieceProps) {
  switch (piece) {
    case "copd-airways": return <CopdAirways {...props} />;
    case "copd-spiro": return <Spiro {...props} />;
    case "copd-flare-signs": return <FlareSigns {...props} />;
    case "copd-cycle": return <Cycle {...props} />;
    case "copd-inhalers": return <CopdInhalers {...props} />;
    case "copd-rehab-weeks": return <RehabWeeks {...props} />;
    case "copd-rescue": return <Rescue {...props} />;
    case "copd-oxygen-gauge": return <OxygenGauge {...props} />;
    case "copd-candle": return <Candle {...props} />;
    case "copd-never-late": return <NeverLate {...props} />;
    case "copd-jab-calendar": return <JabCalendar {...props} />;
    case "copd-pace-day": return <PaceDay {...props} />;
    case "copd-worry-loop": return <WorryLoop {...props} />;
    case "ast-three-changes": return <ThreeChanges {...props} />;
    case "ast-trigger-ring": return <TriggerRing {...props} />;
    case "ast-three-tests": return <ThreeTests {...props} />;
    case "ast-life-line": return <LifeLine {...props} />;
    case "ast-two-inhalers": return <TwoInhalers {...props} />;
    case "ast-plan-sheet": return <PlanSheet {...props} />;
    case "ast-attack-steps": return <AttackSteps {...props} />;
    case "ast-review-check": return <ReviewCheck {...props} />;
    case "ast-runner": return <Runner {...props} />;
    case "ast-home-rooms": return <HomeRooms {...props} />;
    case "ast-smoke-free": return <SmokeFree {...props} />;
    case "ast-pollen": return <Pollen {...props} />;
    case "osa-throat": return <Throat {...props} />;
    case "osa-links": return <Links {...props} />;
    case "osa-study": return <Study {...props} />;
    case "osa-ahi": return <Ahi {...props} />;
    case "osa-cpap-kit": return <CpapKit {...props} />;
    case "osa-jaw": return <Jaw {...props} />;
    case "osa-side-sleep": return <SideSleep {...props} />;
    case "osa-dvla-path": return <DvlaPath {...props} />;
    case "osa-cabin-bag": return <CabinBag {...props} />;
    case "osa-partner-bed": return <PartnerBed {...props} />;
    case "osa-day-energy": return <DayEnergy {...props} />;
    case "mi-statin-days": return <StatinDays {...props} />;
    case "mi-artery-stent": return <ArteryStent {...props} />;
    case "mi-stemi": return <Stemi {...props} />;
    case "mi-test-tiles": return <TestTiles {...props} />;
    case "mi-risk-balance": return <RiskBalance {...props} />;
    case "mi-rehab-stones": return <RehabStones {...props} />;
    case "mi-pill-jobs": return <PillJobs {...props} />;
    case "mi-six-weeks": return <SixWeeks {...props} />;
    case "mi-gtn-flow": return <GtnFlow {...props} />;
    case "mi-road-weeks": return <RoadWeeks {...props} />;
    case "mi-plate": return <Plate {...props} />;
    case "mi-stairs": return <Stairs {...props} />;
    case "mi-weather": return <Weather {...props} />;
    case "mi-quit-line": return <QuitLine {...props} />;
    case "ang-supply": return <Supply {...props} />;
    case "ang-traffic": return <Traffic {...props} />;
    case "ang-test-panels": return <TestPanels {...props} />;
    case "ang-pain-map": return <PainMap {...props} />;
    case "ang-spray-clock": return <SprayClock {...props} />;
    case "ang-two-jobs": return <TwoJobs {...props} />;
    case "ang-road-detour": return <RoadDetour {...props} />;
    case "ang-threshold": return <Threshold {...props} />;
    case "ang-triggers": return <AnginaTriggers {...props} />;
    case "ang-travel": return <Travel {...props} />;
    case "ang-clear-artery": return <ClearArtery {...props} />;
    case "ang-calm": return <Calm {...props} />;
    case "hbp-two-numbers": return <TwoNumbers {...props} />;
    case "hbp-stroke-link": return <StrokeLink {...props} />;
    case "hbp-causes": return <Causes {...props} />;
    case "hbp-targets": return <Targets {...props} />;
    case "hbp-home-cuff": return <HomeCuff {...props} />;
    case "hbp-tablets": return <Tablets {...props} />;
    case "hbp-side-fork": return <SideFork {...props} />;
    case "hbp-salt": return <Salt {...props} />;
    case "hbp-week": return <Week {...props} />;
    case "hbp-units": return <Units {...props} />;
    case "hbp-pillbox": return <Pillbox {...props} />;
    case "hbp-white-coat": return <WhiteCoat {...props} />;
    case "hbp-day-curve": return <DayCurve {...props} />;
    case "af-chambers": return <Chambers {...props} />;
    case "af-clot-path": return <ClotPath {...props} />;
    case "af-types": return <Types {...props} />;
    case "af-tests": return <Tests {...props} />;
    case "af-feelings": return <Feelings {...props} />;
    case "af-scale": return <Scale {...props} />;
    case "af-reset": return <Reset {...props} />;
    case "af-ablation": return <Ablation {...props} />;
    case "af-pulse": return <Pulse {...props} />;
    case "af-triggers": return <Triggers {...props} />;
    case "af-card": return <Card {...props} />;
    case "af-steps": return <Steps {...props} />;
    case "af-support": return <Support {...props} />;
  }
}

export { GOLD };
