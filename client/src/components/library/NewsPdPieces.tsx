import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, SANS, SERIF, useSection, WARM } from "./NewsMemoryPieces";

// The Parkinson's disease page's own pieces (content/ischaemic-news.ts, keyed "parkinsons-disease/…"), on
// pale blue bands in the colours of the Parkinson's & movement card. Each is steered by the card's sections;
// pictures show ideas, not scans, measurements or plans, and say so.

const PD_PIECES = ["dopamine-relay", "symptom-orbit", "clinic-tests", "rest-or-move", "night-to-morning", "on-off-wave", "activity-ring", "voice-meter", "dbs-lead", "freeze-cues", "sleep-routine", "home-route", "licence-card", "care-team"] as const;
type PdPiece = (typeof PD_PIECES)[number];
export const isPdPiece = (piece: NewsPiece): piece is PdPiece => (PD_PIECES as readonly string[]).includes(piece);

/** The blues of the Parkinson's & movement card. */
export const NAVY = "#1A2C5E";
export const BLUE = "#34509E";
export const MID = "#6F86C8";
export const PALE = "#B5C4EC";
export const WHITE = "#FFFFFF";

export const T = ({ x, y, children, anchor = "middle", size = 13, fill = NAVY }: { x: number; y: number; children: ReactNode; anchor?: "start" | "middle" | "end"; size?: number; fill?: string }) =>
  <text x={x} y={y} textAnchor={anchor} fontFamily={SANS} fontSize={size} fontWeight="700" fill={fill}>{children}</text>;
export const Figure = ({ x, y, fill = BLUE, scale = 1 }: { x: number; y: number; fill?: string; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} fill={fill}><circle cx="0" cy="-30" r="11" /><path d="M-18 14 C-18 -8, -10 -16, 0 -16 C10 -16, 18 -8, 18 14 Z" /></g>;
/** A row of labelled tiles, one of them lit. */
export const Tiles = ({ labels, lit, y = 176, fill = BLUE }: { labels: string[]; lit: number; y?: number; fill?: string }) => {
  const width = 300 / labels.length;
  return <g>{labels.map((label, index) => <g key={label} transform={`translate(${10 + index * width} ${y})`}>
    <rect width={width - 8} height="32" rx="10" fill={index === lit ? fill : WHITE} stroke={fill} strokeWidth="2" />
    <T x={(width - 8) / 2} y={21} size={10.5} fill={index === lit ? WHITE : NAVY}>{label}</T>
  </g>)}</g>;
};

// ---- Dopamine: messengers between two cells ----------------------------------------------------------

function DopamineRelay(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const dots = at >= 2 ? 3 : 8;
  return <MemoryBand props={props} state={s} tone="sky" kicker="Inside the brain" title="The messenger that keeps movement smooth" label="Dopamine" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two nerve cells passing dopamine messengers between them">
      <circle cx="70" cy="90" r="40" fill={WHITE} stroke={BLUE} strokeWidth="4" />
      <circle cx="250" cy="90" r="40" fill={WHITE} stroke={BLUE} strokeWidth="4" />
      <path d="M110 90 H210" stroke={PALE} strokeWidth="18" strokeLinecap="round" />
      {Array.from({ length: dots }, (_, index) => <circle key={index} cx={118 + index * (84 / Math.max(1, dots - 1))} cy="90" r="5" fill={GOLD} className={still ? undefined : "lib-bubble-drift"} style={{ animationDelay: `${index * 0.25}s`, animationDirection: "reverse" }} />)}
      {at === 0 && <g><circle cx="70" cy="90" r="22" fill={at === 0 ? PALE : BLUE} /><T x={70} y={150} size={11}>Substantia nigra</T></g>}
      {at === 1 && <T x={160} y={150}>A messenger for movement</T>}
      {at === 2 && <T x={160} y={150}>About half the activity lost before symptoms</T>}
      {at === 3 && <g><T x={160} y={150} size={20}>166,000</T><T x={160} y={172} size={11}>people with Parkinson's in the UK</T></g>}
    </svg>} />;
}

// ---- The symptoms nobody expects: an orbit ------------------------------------------------------------

function SymptomOrbit(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const items = ["Smell", "Sleep", "Mood", "Gut", "Voice", "Tiredness"];
  const lit = [[0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 5], [0], [4]][at] ?? [];
  return <MemoryBand props={props} state={s} tone="ice" kicker="More than movement" title="The symptoms nobody expects" label="Symptoms" credit="Illustration: Rehyn. A picture of the idea; everyone's mix is different."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={`Symptoms around a person: ${items.join(", ")}`}>
      <circle cx="160" cy="110" r="80" fill="none" stroke={PALE} strokeWidth="2" strokeDasharray="5 6" />
      <Figure x={160} y={124} fill={NAVY} scale={1.2} />
      {items.map((item, index) => {
        const angle = (index / items.length) * Math.PI * 2 - Math.PI / 2;
        const x = 160 + Math.cos(angle) * 80;
        const y = 110 + Math.sin(angle) * 80;
        const on = lit.includes(index);
        return <g key={item} className={on && at > 1 ? "lib-bulge" : undefined}><rect x={x - 36} y={y - 13} width="72" height="26" rx="13" fill={on ? BLUE : WHITE} stroke={BLUE} strokeWidth="2" /><T x={x} y={y + 5} size={11} fill={on ? WHITE : NAVY}>{item}</T></g>;
      })}
      {at === 0 && <T x={160} y={214} size={11}>Over 40 symptoms</T>}
      {at === 2 && <T x={160} y={214} size={11}>Sometimes years before</T>}
    </svg>} />;
}

// ---- Diagnosis: writing, speaking, medicine, scans ----------------------------------------------------

function ClinicTests(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="frost" kicker="Diagnosis" title="No single test" label="Diagnosis" credit="Illustration: Rehyn. Not a real test or scan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A specialist's checks: writing, speaking, a trial of medicine, and a scan">
      {at === 0 && <g><circle cx="160" cy="90" r="50" fill={WHITE} stroke={BLUE} strokeWidth="4" /><text x="160" y="110" textAnchor="middle" fontFamily={SERIF} fontSize="56" fill={BLUE}>?</text></g>}
      {at === 1 && <g>
        <rect x="40" y="30" width="140" height="110" rx="8" fill={WHITE} stroke={BLUE} strokeWidth="2" />
        <text x="54" y="70" fontFamily={SERIF} fontSize="26" fill={NAVY}>Parkin</text><text x="128" y="70" fontFamily={SERIF} fontSize="14" fill={NAVY}>son's</text>
        <path d="M54 100 c10 -10 20 10 30 0 s16 6 22 0 s10 4 14 0 s6 2 8 0" stroke={NAVY} strokeWidth="2" fill="none" />
        <g transform="translate(220 40)"><rect x="14" width="24" height="44" rx="12" fill={BLUE} /><path d="M4 30 a22 22 0 0 0 44 0 M26 52 v18" stroke={BLUE} strokeWidth="4" fill="none" /><path d="M58 20 q8 10 0 20" stroke={MID} strokeWidth="3" fill="none" /></g>
        <T x={110} y={160} size={11}>Writing that gets smaller</T><T x={246} y={160} size={11}>A soft voice</T>
      </g>}
      {at === 2 && <g>{[0, 1, 2, 3].map(week => <g key={week} transform={`translate(${40 + week * 64} 50)`}><rect width="54" height="60" rx="8" fill={WHITE} stroke={BLUE} strokeWidth="2" /><path d={`M12 40 L42 ${40 - week * 8}`} stroke={week > 1 ? "#2F6851" : MID} strokeWidth="4" strokeLinecap="round" /><T x={27} y={78} size={10}>{`Week ${week * 4 + 1}`}</T></g>)}<T x={160} y={160} size={12}>Symptoms improve on medicine</T></g>}
      {at === 3 && <g><ellipse cx="160" cy="90" rx="70" ry="60" fill="#14234A" /><path d="M130 100 c-10 -6 -10 -22 0 -26 c10 4 10 20 0 26 M190 100 c10 -6 10 -22 0 -26 c-10 4 -10 20 0 26" fill="#E7ECFB" opacity=".85" /><T x={160} y={176} size={11}>A scan can rule other causes out</T><T x={160} y={194} size={11} fill={WARM}>but cannot prove it alone</T></g>}
    </svg>} />;
}

// ---- Tremor: at rest, or on the move ------------------------------------------------------------------

function RestOrMove(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const restOn = at === 0 || at === 1 || at === 3;
  const moveOn = at === 2 || at === 3;
  const wave = (x: number, y: number, on: boolean) => <path d={`M${x} ${y} q6 -8 12 0 t12 0 t12 0 t12 0 t12 0`} stroke={on ? WARM : PALE} strokeWidth="3" fill="none" className={on && !still ? "lib-ecg" : undefined} />;
  return <MemoryBand props={props} state={s} tone="sky" kicker="Two kinds of tremor" title="At rest, or on the move" label="Tremor" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hand resting on a lap, and a hand holding a cup">
      <g transform="translate(40 40)">
        <rect width="110" height="120" rx="14" fill={WHITE} stroke={restOn ? BLUE : PALE} strokeWidth={restOn ? 4 : 2} />
        <path d="M20 90 h70" stroke={PALE} strokeWidth="10" strokeLinecap="round" />
        <path d="M40 80 c0 -20 30 -20 30 0" fill={MID} />
        {wave(28, 50, restOn)}
        <T x={55} y={140} size={12}>{at === 1 ? "Pill-rolling, at rest" : "Parkinson's: at rest"}</T>
      </g>
      <g transform="translate(170 40)">
        <rect width="110" height="120" rx="14" fill={WHITE} stroke={moveOn ? BLUE : PALE} strokeWidth={moveOn ? 4 : 2} />
        <path d="M40 60 h30 v34 a8 8 0 0 1 -8 8 h-14 a8 8 0 0 1 -8 -8 Z M70 70 h8 a8 8 0 0 1 0 16 h-8" fill={MID} />
        {wave(28, 40, moveOn)}
        <T x={55} y={140} size={12}>Essential: when moving</T>
      </g>
      {at === 3 && <T x={160} y={200} size={12}>Some people have both</T>}
    </svg>} />;
}

// ---- Mornings: the medicine level overnight -----------------------------------------------------------

function NightToMorning(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  const level = at === 2 ? "M20 60 C80 60, 160 80, 220 90 S280 100, 300 70" : "M20 60 C80 60, 140 120, 220 150 S280 150, 300 60";
  return <MemoryBand props={props} state={s} tone="ice" kicker="Overnight" title="When medicine wears off in the night" label="Mornings" credit="Illustration: Rehyn. A picture of the idea, not a measure of anyone's medicine."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A line showing medicine falling overnight and rising after the morning dose">
      <rect x="20" y="20" width="200" height="160" fill="#14234A" opacity=".12" />
      <path d="M50 40 a14 14 0 1 0 12 20 a11 11 0 1 1 -12 -20 Z" fill={BLUE} />
      <circle cx="280" cy="40" r="14" fill={GOLD} />
      <path d={level} fill="none" stroke={BLUE} strokeWidth="5" strokeLinecap="round" className="lib-road-walker" />
      <path d="M20 180 H300" stroke={PALE} strokeWidth="2" />
      <T x={30} y={200} anchor="start" size={11}>Last dose, bedtime</T><T x={300} y={200} anchor="end" size={11}>First dose</T>
      {at === 0 && <T x={150} y={128} size={11} fill={WARM}>stiffness, tremor, pain</T>}
      {at === 1 && <T x={230} y={170} size={11} fill={WARM}>'off' cramps on waking</T>}
      {at === 2 && <T x={150} y={110} size={11}>slow-release at night</T>}
    </svg>} />;
}

// ---- 'On' and 'off': the day's medicine wave ------------------------------------------------------------

function OnOffWave(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const doses = [40, 120, 200, 280];
  return <MemoryBand props={props} state={s} tone="frost" kicker="Medicines" title="On, off, and on time" label="Levodopa" credit="Illustration: Rehyn. A picture of the idea, not a dosing plan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Medicine level rising after each dose, with on and off periods">
      <rect x="20" y="40" width="280" height="50" fill="#2F6851" opacity={at === 1 ? 0.15 : 0.06} />
      <rect x="20" y="120" width="280" height="40" fill={WARM} opacity={at === 1 ? 0.15 : 0.06} />
      <T x={24} y={34} anchor="start" size={11} fill="#2F6851">'On': well controlled</T>
      <T x={24} y={176} anchor="start" size={11} fill={WARM}>'Off': symptoms return</T>
      <path d={at === 1 ? "M20 140 C30 60, 60 60, 80 140 C100 60, 130 60, 160 140 C180 60, 210 60, 240 140 C260 60, 290 60, 300 120" : "M20 140 C30 60, 60 60, 110 110 C120 60, 150 60, 190 110 C200 60, 230 60, 270 110 C280 60, 300 70, 300 90"} fill="none" stroke={BLUE} strokeWidth="4" className="lib-road-walker" />
      {doses.map(x => <g key={x}><circle cx={x} cy="196" r="9" fill={at === 2 ? BLUE : PALE} /><path d={`M${x} 186 V160`} stroke={PALE} strokeWidth="2" strokeDasharray="3 3" /></g>)}
      {at === 2 && <T x={160} y={214} size={11}>The same times every day</T>}
      {at === 3 && <g><rect x="90" y="96" width="140" height="28" rx="14" fill={WHITE} stroke={WARM} strokeWidth="2" /><T x={160} y={115} size={11} fill={WARM}>Never stop suddenly</T></g>}
    </svg>} />;
}

// ---- Exercise: a ring that fills to 2.5 hours ------------------------------------------------------------

function ActivityRing(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  const ring = 2 * Math.PI * 64;
  const share = [1, 1, 0.6][at] ?? 1;
  return <MemoryBand props={props} state={s} tone="steel" kicker="Exercise" title="Part of the treatment" label="Exercise" credit="Illustration: Rehyn. A picture of the idea, not an exercise plan. Ask your team what suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ring filling up to two and a half hours of activity a week">
      <circle cx="110" cy="110" r="64" fill="none" stroke={PALE} strokeWidth="18" />
      <circle cx="110" cy="110" r="64" fill="none" stroke="#2D4C8C" strokeWidth="18" strokeLinecap="round" strokeDasharray={`${ring * share} ${ring}`} transform="rotate(-90 110 110)" className="lib-road-walker" />
      <text x="110" y="112" textAnchor="middle" fontFamily={SERIF} fontSize="32" fontWeight="600" fill={NAVY}>2.5 h</text>
      <T x={110} y={132} size={11}>a week</T>
      {at === 0 && <T x={240} y={110} size={12}>as important as</T>}
      {at === 0 && <T x={240} y={128} size={12}>the right dose</T>}
      {at === 1 && <T x={240} y={118} size={12}>push yourself</T>}
      {at === 2 && <g transform="translate(200 70)"><Figure x={40} y={50} fill="#2D4C8C" /><T x={40} y={90} size={11}>a physiotherapist</T><T x={40} y={106} size={11}>who knows Parkinson's</T></g>}
    </svg>} />;
}

// ---- Voice and swallowing: a loudness meter ---------------------------------------------------------------

function VoiceMeter(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  const still = useStill();
  const bars = at === 1 ? 9 : 4;
  return <MemoryBand props={props} state={s} tone="sky" kicker="Voice and swallowing" title="Loud enough, and safe to swallow" label="Voice and swallowing" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={at === 2 ? "A throat, and the signs of a swallowing problem" : "A loudness meter"}>
      {at !== 2 ? <g>
        {Array.from({ length: 10 }, (_, index) => <rect key={index} x={40 + index * 24} y={150 - index * 10} width="16" height={20 + index * 10} rx="4" fill={index < bars ? (index > 6 ? GOLD : BLUE) : PALE} className={index === bars - 1 && !still ? "lib-bulge" : undefined} />)}
        <T x={60} y={196} size={11}>quiet</T><T x={270} y={196} size={11}>loud</T>
        <T x={160} y={40} size={12}>{at === 1 ? "Trained to speak more loudly" : "Speech and language therapy"}</T>
      </g> : <g>
        <path d="M120 30 C150 30, 160 60, 160 90 V200 M200 30 C180 50, 180 80, 180 110 V200" fill="none" stroke={BLUE} strokeWidth="6" strokeLinecap="round" />
        <path d="M160 120 L180 110" stroke={WARM} strokeWidth="4" strokeDasharray="4 4" />
        <T x={250} y={90} size={11}>coughing</T><T x={250} y={108} size={11}>when eating</T><T x={250} y={140} size={11}>a gurgly voice</T>
      </g>}
    </svg>} />;
}

// ---- Deep brain stimulation: the lead and the device -------------------------------------------------------

function DbsLead(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  const can = ["Tremor", "Slowness", "Stiffness", "Dyskinesia"];
  return <MemoryBand props={props} state={s} tone="ice" kicker="Treatment" title="Deep brain stimulation" label="Deep brain stimulation" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head and chest with a thin lead from the brain to a small device">
      <circle cx="90" cy="60" r="40" fill={WHITE} stroke={BLUE} strokeWidth="4" />
      <path d="M60 210 C60 140, 70 110, 90 110 C110 110, 120 140, 120 210" fill={WHITE} stroke={BLUE} strokeWidth="4" />
      <path d="M90 60 C110 70, 120 100, 104 150" stroke={GOLD} strokeWidth="3" fill="none" />
      <rect x="94" y="146" width="22" height="16" rx="5" fill={GOLD} />
      <circle cx="90" cy="60" r="5" fill={WARM} />
      {at === 0 && <g><T x={230} y={100} size={12}>When medicines no longer</T><T x={230} y={118} size={12}>control symptoms well</T></g>}
      {at === 1 && <g>{can.map((item, index) => <g key={item} transform={`translate(160 ${40 + index * 36})`}><rect width="120" height="28" rx="14" fill={BLUE} /><T x={60} y={19} size={11} fill={WHITE}>{item}</T></g>)}</g>}
      {at === 2 && <g><rect x="160" y="80" width="130" height="40" rx="12" fill={WHITE} stroke={WARM} strokeWidth="2" /><T x={225} y={105} size={12} fill={WARM}>Not a cure</T></g>}
    </svg>} />;
}

// ---- Freezing: cues to get moving -------------------------------------------------------------------------

function FreezeCues(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="frost" kicker="Walking" title="Unsticking your feet" label="Freezing" credit="Illustration: Rehyn. A picture of the idea; a physiotherapist can find the cues that suit you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Footprints on a floor with lines across it, and a sign saying stop, think, plan, do">
      <path d="M20 190 H300" stroke={PALE} strokeWidth="3" />
      {at === 3 && [80, 130, 180, 230].map(x => <path key={x} d={`M${x} 150 V200`} stroke={GOLD} strokeWidth="8" />)}
      {[0, 1, 2, 3].map(step => <ellipse key={step} cx={60 + step * 54} cy={step % 2 ? 182 : 168} rx="12" ry="7" fill={at === 0 && step > 0 ? PALE : BLUE} className={at === 2 && !still ? "lib-bulge" : undefined} style={{ animationDelay: `${step * 0.3}s` }} />)}
      {at === 0 && <T x={160} y={120} size={13}>Feet "glued" to the floor</T>}
      {at === 1 && <g>{["STOP", "THINK", "PLAN", "DO"].map((word, index) => <g key={word} transform={`translate(${20 + index * 74} 40)`}><rect width="66" height="40" rx="10" fill={index === 0 ? WARM : BLUE} /><T x={33} y={26} size={13} fill={WHITE}>{word}</T></g>)}</g>}
      {at === 2 && <g><T x={160} y={60} size={18}>one, two, three, step</T><path d="M150 100 L160 70 L170 100 Z" fill={BLUE} className={still ? undefined : "lib-alarm"} /></g>}
      {at === 3 && <T x={160} y={80} size={12}>Lines on the floor, or imagining the step</T>}
    </svg>} />;
}

// ---- Sleep: a routine ---------------------------------------------------------------------------------------

function SleepRoutine(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="steel" kicker="At night" title="A steadier night" label="Sleep" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A moon, an alarm clock and a short nap">
      <path d="M70 40 a30 30 0 1 0 26 44 a24 24 0 1 1 -26 -44 Z" fill="#2D4C8C" />
      {at === 0 && <T x={220} y={80} size={12}>Common, at any stage</T>}
      {at === 1 && <g><T x={220} y={70} size={12}>Symptoms</T><T x={220} y={92} size={12}>or medicines</T></g>}
      {at === 2 && <g>
        <g transform="translate(190 30)"><circle cx="30" cy="40" r="30" fill={WHITE} stroke="#2D4C8C" strokeWidth="4" /><path d="M30 40 V22 M30 40 H44" stroke="#2D4C8C" strokeWidth="4" strokeLinecap="round" /><path d="M6 14 l10 8 M54 14 l-10 8" stroke="#2D4C8C" strokeWidth="4" /></g>
        <rect x="60" y="150" width="200" height="16" rx="8" fill={PALE} /><rect x="60" y="150" width="40" height="16" rx="8" fill={GOLD} />
        <T x={160} y={190} size={11}>A short nap, around 30 minutes</T>
      </g>}
      {at === 3 && <g transform="translate(190 40)"><rect width="90" height="60" rx="12" fill="#2D4C8C" /><T x={45} y={36} size={14} fill={WHITE}>GP</T></g>}
    </svg>} />;
}

// ---- Falls: a clear route through the home ---------------------------------------------------------------

function HomeRoute(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="sky" kicker="At home" title="A clear way through" label="Falls" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plan of a home with a clear route, lights, rails and a torch">
      <rect x="20" y="20" width="280" height="180" rx="10" fill={WHITE} stroke={BLUE} strokeWidth="3" />
      <path d="M160 20 V120 M20 120 H120" stroke={PALE} strokeWidth="4" />
      <path d="M40 180 C100 160, 140 150, 180 120 S260 60, 280 50" fill="none" stroke={at === 0 ? BLUE : PALE} strokeWidth="6" strokeDasharray="10 8" strokeLinecap="round" />
      {at !== 0 && [[70, 150], [210, 160], [250, 110]].map(([x, y], index) => <rect key={index} x={x} y={y} width="26" height="18" rx="4" fill="#C2CFF0" />)}
      {at === 1 && <g><circle cx="80" cy="60" r="10" fill={GOLD} /><circle cx="80" cy="60" r="30" fill={GOLD} opacity=".2" /><rect x="230" y="150" width="30" height="12" rx="3" fill={NAVY} /><T x={245} y={180} size={10}>torch</T></g>}
      {at === 2 && <path d="M180 40 V100" stroke={BLUE} strokeWidth="8" strokeLinecap="round" />}
      {at === 3 && <g><T x={160} y={110} size={14}>Take your time</T><g transform="translate(260 30)"><rect width="22" height="34" rx="5" fill={BLUE} /><circle cx="11" cy="26" r="3" fill={WHITE} /></g></g>}
    </svg>} />;
}

// ---- Driving and work: the licence and the form ------------------------------------------------------------

function LicenceCard(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="ice" kicker="Driving and work" title="Tell DVLA, keep going" label="Driving and work" credit="Illustration: Rehyn. DVLA decides each case."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A driving licence, form PK1 and a work bag">
      {at < 2 ? <g>
        <rect x="40" y="50" width="150" height="96" rx="10" fill="#E3EAF8" stroke={BLUE} strokeWidth="3" />
        <rect x="54" y="66" width="36" height="44" rx="4" fill={PALE} /><path d="M100 72 H174 M100 88 H160 M100 104 H170" stroke={BLUE} strokeWidth="5" strokeLinecap="round" />
        <g transform="translate(210 40)"><rect width="74" height="96" rx="6" fill={WHITE} stroke={BLUE} strokeWidth="2" /><T x={37} y={30} size={16}>PK1</T><path d="M14 50 H60 M14 64 H54 M14 78 H58" stroke={PALE} strokeWidth="4" /></g>
        <T x={160} y={180} size={12}>{at === 0 ? "You must tell DVLA" : "It doesn't necessarily affect your licence"}</T>
      </g> : <g>
        <rect x="100" y="70" width="120" height="84" rx="10" fill={BLUE} /><path d="M140 70 V56 H180 V70" stroke={BLUE} strokeWidth="6" fill="none" />
        <T x={160} y={190} size={12}>The law protects you at work</T>
      </g>}
    </svg>} />;
}

// ---- Carers: the team around you ---------------------------------------------------------------------------

function CareTeam(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="frost" kicker="For carers" title="Support for both of you" label="Carers" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A carer, a Parkinson's nurse and a phone line">
      <Figure x={110} y={140} fill={BLUE} scale={1.4} />
      <Figure x={150} y={146} fill={PALE} scale={1.2} />
      <Tiles labels={["Assessment", "Nurse", "Helpline"]} lit={at} y={20} fill={BLUE} />
      {at === 0 && <T x={250} y={130} size={12}>free</T>}
      {at === 1 && <Figure x={250} y={140} fill="#2D4C8C" scale={1.3} />}
      {at === 2 && <g><T x={250} y={120} size={14}>0808</T><T x={250} y={140} size={14}>800 0303</T></g>}
    </svg>} />;
}

export function PdPieceView({ piece, ...props }: { piece: PdPiece } & PieceProps) {
  switch (piece) {
    case "dopamine-relay": return <DopamineRelay {...props} />;
    case "symptom-orbit": return <SymptomOrbit {...props} />;
    case "clinic-tests": return <ClinicTests {...props} />;
    case "rest-or-move": return <RestOrMove {...props} />;
    case "night-to-morning": return <NightToMorning {...props} />;
    case "on-off-wave": return <OnOffWave {...props} />;
    case "activity-ring": return <ActivityRing {...props} />;
    case "voice-meter": return <VoiceMeter {...props} />;
    case "dbs-lead": return <DbsLead {...props} />;
    case "freeze-cues": return <FreezeCues {...props} />;
    case "sleep-routine": return <SleepRoutine {...props} />;
    case "home-route": return <HomeRoute {...props} />;
    case "licence-card": return <LicenceCard {...props} />;
    case "care-team": return <CareTeam {...props} />;
  }
}
