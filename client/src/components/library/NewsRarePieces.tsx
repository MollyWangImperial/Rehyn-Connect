import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { RARE_PIECES, type RarePiece } from "@/content/rare-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Brain tumours, Sarcoma and Mesothelioma pages' own pieces (content/rare-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Cancer & recovery pieces. Each is steered by the card's sections;
// pictures show ideas, calmly, and never anyone's own body, scans or results.

export const isRarePiece = (piece: NewsPiece): piece is RarePiece => (RARE_PIECES as readonly string[]).includes(piece);

// ==== Shared drawing helpers ================================================================================

/** The caption under a picture. */
const Say = ({ y = 204, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A column of labelled boxes; `lit` boxes are filled. */
const Tags = ({ x, y, labels, lit, width = 130, gap = 34, size = 10.5 }: { x: number; y: number; labels: string[]; lit: (index: number) => boolean; width?: number; gap?: number; size?: number }) =>
  <g>{labels.map((label, index) => <g key={label} transform={`translate(${x} ${y + index * gap})`}>
    <rect width={width} height="26" rx="9" fill={lit(index) ? INK : WHITE} stroke={INK} strokeWidth="2" />
    <W x={width / 2} y={13 + size * 0.36} size={size} fill={lit(index) ? WHITE : TEXT}>{label}</W>
  </g>)}</g>;
/** A speech bubble with its tail pointing down-left, centred on (x, y). */
const Bubble = ({ x, y, text, width = 110 }: { x: number; y: number; text: string; width?: number }) =>
  <g>
    <rect x={x - width / 2} y={y - 15} width={width} height="30" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" />
    <path d={`M${x - width / 2 + 18} ${y + 14} l-8 12 l18 -12`} fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <W x={x} y={y + 4} size={10.5}>{text}</W>
  </g>;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 13} y={y - 22} width="26" height="44" rx="6" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 14} r="2.5" fill={lit ? WHITE : INK} /></g>;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
const Cloud = ({ x, y, s, opacity = 1 }: { x: number; y: number; s: number; opacity?: number }) =>
  <g opacity={opacity} fill={SOFT}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
const Hourglass = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 18} ${y - 34} H${x + 18} L${x} ${y} L${x + 18} ${y + 34} H${x - 18} L${x} ${y} Z`} fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><path d={`M${x - 10} ${y + 30} L${x} ${y + 14} L${x + 10} ${y + 30} Z`} fill={GOLD} /></g>;
/** A brain seen from the side, centred on (x, y), `s` times the size of the house brain (200 wide). */
const Brain = ({ x, y, s, fill = WHITE }: { x: number; y: number; s: number; fill?: string }) =>
  <path transform={`translate(${x - 160 * s} ${y - 100 * s}) scale(${s})`} d="M160 34 C126 14, 78 30, 80 72 C58 88, 62 132, 92 144 C98 176, 140 184, 160 160 C180 184, 222 176, 228 144 C258 132, 262 88, 240 72 C242 30, 194 14, 160 34 Z" fill={fill} stroke={INK} strokeWidth={3 / s} strokeLinejoin="round" />;
const Drop = ({ x, y, fill = INK }: { x: number; y: number; fill?: string }) =>
  <path d={`M${x} ${y - 18} C${x + 13} ${y - 2}, ${x + 13} ${y + 12}, ${x} ${y + 13} C${x - 13} ${y + 12}, ${x - 13} ${y - 2}, ${x} ${y - 18} Z`} fill={fill} stroke={INK} strokeWidth="2" />;

// ==== Brain tumours =========================================================================================

const Head = ({ children }: { children?: ReactNode }) =>
  <g transform="translate(-14 10) scale(.85)">
    <path d="M70 176 V150 C46 140 36 112 42 86 C50 50 80 30 114 32 C150 34 172 62 168 96 L178 116 L166 120 V136 C166 146 156 150 144 148 L130 146 V176" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
    <ellipse cx="104" cy="84" rx="50" ry="36" fill={TINT} stroke={SOFT} strokeWidth="2" />
    {children}
  </g>;

function BtGrades(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A growth of cells in the brain", "Grades 1 and 2 low, 3 and 4 high", "Low grade usually grows slowly", "Benign or malignant: not always clear", "Over 100 types; over half are gliomas"];
  const tileFill = (index: number) => at === 1 ? INK : at === 2 ? (index < 2 ? INK : WHITE) : WHITE;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A growth in the brain, graded 1 to 4" label="What a brain tumour is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head with a small growth in the brain, beside a scale of grades from 1 to 4">
      <Head><g fill={at === 0 ? GOLD : INK}><circle cx="124" cy="76" r="7" /><circle cx="134" cy="86" r="5" /><circle cx="118" cy="88" r="4.5" /></g></Head>
      {at === 0 && <><Box x={232} y={62} w={140} text="Primary" lit /><W x={232} y={92} size={10}>starts in the brain</W>
        <Box x={232} y={124} w={140} text="Secondary" /><W x={232} y={154} size={10}>spread from elsewhere</W></>}
      {at >= 1 && at <= 3 && <g>
        <W x={229} y={38} size={10.5}>Grade</W>
        {[0, 1, 2, 3].map(index => <g key={index}><rect x={156 + index * 38} y="48" width="32" height="32" rx="7" fill={tileFill(index)} stroke={INK} strokeWidth="2" /><W x={172 + index * 38} y={69} size={12} fill={tileFill(index) === INK ? WHITE : TEXT}>{index + 1}</W></g>)}
        <path d="M158 88 V94 H224 V88 M234 88 V94 H300 V88" stroke={GOLD} strokeWidth="2.5" fill="none" />
        <W x={191} y={110} size={10}>Low grade</W><W x={267} y={110} size={10}>High grade</W>
        {at === 2 && <><W x={191} y={136} size={10}>Usually slower</W><W x={267} y={136} size={10}>Faster</W></>}
        {at === 3 && <><Box x={191} y={140} w={68} h={24} size={10} text="Benign" /><Box x={267} y={140} w={76} h={24} size={10} text="Malignant" /><path d="M227 140 h4" stroke={INK} strokeWidth="2" /></>}
      </g>}
      {at === 4 && <Tags x={160} y={44} labels={["Over 100 types", "Gliomas: over half", "Meningiomas"]} lit={index => index === 1} width={146} gap={38} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BtPressure(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Depends on where it is in the brain", "Headaches, seizures, feeling sick", "Sudden, or slowly over months or years", "Worried? No need to wait to ask", "Sudden severe headache? Call 999"];
  const spots = [[52, 82], [92, 62], [124, 104]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Where it sits shapes what you feel" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A brain with areas that can be affected, and the symptoms a tumour can cause">
      <Brain x={86} y={96} s={0.56} fill={TINT} />
      {spots.map(([x, y], index) => <circle key={index} cx={x} cy={y} r={at === 0 ? 8 : 5} fill={at === 0 ? GOLD : SOFT} />)}
      {at === 0 && <Gauge x={240} y={118} r={50} value={0.72} label="Pressure" />}
      {at === 1 && <Tags x={176} y={28} labels={["Headaches", "Seizures", "Feeling sick", "Drowsiness"]} lit={() => true} width={128} gap={36} />}
      {at === 2 && <g>
        <path d="M174 152 H306 M174 152 V40" stroke={LINE} strokeWidth="2.5" />
        <path d="M176 150 C198 150, 204 74, 226 66" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M176 150 C240 148, 270 126, 302 100" stroke={SOFT} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <W x={232} y={54} size={10}>Days or weeks</W><W x={256} y={172} size={10}>Months or years</W>
      </g>}
      {at === 3 && <><Bubble x={236} y={56} text="Tell your team" width={124} /><Phone x={236} y={126} /></>}
      {at === 4 && <><Phone x={240} y={92} lit /><W x={240} y={146} size={14}>999</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BtTeamTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A team of specialists plans treatment", "Surgery: often the main treatment", "Radiotherapy: daily, for 2 to 6 weeks", "Chemotherapy, sometimes as capsules", "Medicines for seizures, swelling, pain"];
  const notes = ["Size, position, type, grade", "Stitches out: 7 to 10 days", "Monday to Friday", "In cycles, with rest weeks", "Supportive care at any stage"];
  const tiles = [{ x: 186, y: 56, t: "Surgery" }, { x: 272, y: 56, t: "Radiotherapy" }, { x: 186, y: 98, t: "Chemotherapy" }, { x: 272, y: 98, t: "For symptoms" }];
  const team = at === 0 ? INK : SOFT;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatments" title="One team, several treatments" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A team of specialists around a table, and four kinds of treatment">
      <Person x={34} y={90} scale={0.75} fill={team} /><Person x={70} y={82} scale={0.75} fill={team} /><Person x={106} y={90} scale={0.75} fill={team} />
      <ellipse cx="70" cy="110" rx="56" ry="16" fill={TINT} stroke={at === 0 ? GOLD : INK} strokeWidth={at === 0 ? 4 : 2.5} />
      {tiles.map((tile, index) => <Box key={tile.t} x={tile.x} y={tile.y} w={80} h={32} size={10} text={tile.t} lit={at === index + 1} />)}
      <W x={228} y={146} size={10}>{notes[at]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BtScanLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Appointments space out if all is well", "MRI: 30 to 60 minutes, no radiation", "Active monitoring: regular MRI scans", "Results should take 1 to 2 weeks", "New symptoms? Do not wait to ask"];
  const spaced = [28, 46, 66, 90, 120, 160, 214, 290];
  const even = Array.from({ length: 8 }, (_, index) => 28 + index * 37.4);
  const xs = at === 2 ? even : spaced;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Follow-up" title="Scans, results and the wait between" label="Scans and follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Follow-up appointments along a line, an MRI scanner and an hourglass for results">
      <path d="M20 168 H300" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
      {xs.map((x, index) => <circle key={index} cx={x} cy="168" r="6" fill={at === 0 || at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2" />)}
      {at === 0 && <><W x={36} y={150} size={10} anchor="start">At first</W><W x={290} y={150} size={10} anchor="end">Less often</W>
        <Arrow d="M90 120 H230" head="M222 114 L230 120 L222 126" /></>}
      {at === 1 && <g>
        <circle cx="160" cy="76" r="48" fill="none" stroke={INK} strokeWidth="9" />
        <path d="M80 110 H250" stroke={SOFT} strokeWidth="6" strokeLinecap="round" />
        <rect x="128" y="94" width="72" height="14" rx="7" fill={INK} /><circle cx="216" cy="100" r="9" fill={INK} />
      </g>}
      {at === 2 && even.map((x, index) => <circle key={index} cx={x} cy="140" r="8" fill="none" stroke={GOLD} strokeWidth="3" />)}
      {at === 3 && <><Hourglass x={160} y={72} /><W x={160} y={136} size={12}>1 to 2 weeks</W></>}
      {at === 4 && <><Phone x={110} y={86} lit /><Bubble x={200} y={58} text="New symptoms?" width={124} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BtNewRoute(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Helping the brain re-learn", "Walking, speech, memory, mood and more", "A team of therapists can help", "Ask for a referral to neuro-rehab", "Celebrate the small gains"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Rehabilitation" title="Re-learning, one repetition at a time" label="Rehabilitation" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A network of links in the brain finding a new route around a blocked one">
      <path d="M30 100 L80 52 L136 100" stroke={LINE} strokeWidth="4" fill="none" strokeDasharray="5 6" />
      <path d="M30 100 L80 148 L136 100" stroke={at === 0 ? GOLD : SOFT} strokeWidth="5" fill="none" strokeLinecap="round" className={!still && at === 0 ? "lib-why-pulse" : undefined} />
      <circle cx="30" cy="100" r="11" fill={INK} /><circle cx="136" cy="100" r="11" fill={INK} /><circle cx="80" cy="148" r="11" fill={at === 0 ? GOLD : SOFT} />
      <circle cx="80" cy="52" r="11" fill={WHITE} stroke={LINE} strokeWidth="3" />
      {at === 1 && <Tags x={170} y={30} labels={["Walking and balance", "Speech", "Memory", "Mood"]} lit={() => true} width={138} gap={36} />}
      {at === 2 && <Tags x={164} y={30} labels={["Physiotherapist", "Occupational therapist", "Speech and language", "Neuropsychologist"]} lit={() => true} width={148} gap={36} size={10} />}
      {at === 3 && <><Box x={238} y={58} w={130} text="Your team or GP" /><Arrow d="M238 74 V108" head="M232 100 L238 108 L244 100" /><Box x={238} y={126} w={130} text="Neuro-rehab" lit /></>}
      {at === 4 && <g>{[0, 1, 2, 3, 4].map(index => <rect key={index} x={176 + index * 26} y={150 - index * 20} width="24" height={10 + index * 20} rx="3" fill={index <= 2 ? INK : WHITE} stroke={INK} strokeWidth="2" />)}
        <circle cx="240" cy="98" r="8" fill={GOLD} /></g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BtStopwatch(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A burst of abnormal activity", "Not every seizure involves falling", "Take medicines exactly as prescribed", "Over 5 minutes, or a first one: 999", "Stay calm, time it, cushion their head"];
  const sets = [["A common symptom", "May be short term"], ["Going blank", "Odd smells", "Stiffening", "Tired after"], ["As prescribed", "Never stop suddenly", "Showers, not baths"], ["First seizure", "Over 5 minutes", "3 or more in 24 hours"], ["Stay calm", "Time it", "Cushion the head", "Recovery position"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Seizures" title="Calm, time it, keep them safe" label="Seizures" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A stopwatch and the steps for keeping someone safe during a seizure">
      {at === 0 && <><Brain x={80} y={100} s={0.5} fill={TINT} /><path d="M58 92 L72 84 L80 100 L94 88 L104 102" stroke={GOLD} strokeWidth="4" fill="none" strokeLinejoin="round" strokeLinecap="round" /></>}
      {at === 1 && <Person x={80} y={140} scale={1.6} fill={SOFT} />}
      {at === 2 && <g transform="translate(80 100) scale(2)"><Pill x={0} y={0} /></g>}
      {at >= 3 && <g>
        <rect x="72" y="46" width="16" height="10" rx="3" fill={INK} />
        <circle cx="80" cy="104" r="46" fill={WHITE} stroke={INK} strokeWidth="4" />
        {at === 3 && <path d="M80 104 L80 58 A46 46 0 0 1 124 90 Z" fill={GOLD} opacity=".8" />}
        <path d="M80 104 L80 66" stroke={TEXT} strokeWidth="4" strokeLinecap="round" />
        {at === 3 && <W x={80} y={136} size={10}>5 minutes</W>}
      </g>}
      <Tags x={162} y={30} labels={sets[at]} lit={index => at !== 0 || index === 0} width={144} gap={36} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BtDeskTools(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Hard to focus, remember, find words", "Tumour, treatment or medicines", "Often fades if the cause is temporary", "Diary, pill box, checklists, alarms", "Tell your team about any changes"];
  const tools = at === 3 ? 1 : 0.55;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Thinking" title="When memory and focus slip" label="Memory and thinking" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Everyday tools for memory: a diary, a pill box, a checklist and an alarm">
      {at === 0 && <><Box x={62} y={46} w={96} text="Focus" /><Box x={160} y={46} w={96} text="Remember" /><Box x={258} y={46} w={96} text="Find words" /></>}
      {at === 1 && <><Box x={62} y={46} w={96} text="Tumour" lit /><Box x={160} y={46} w={96} text="Treatment" lit /><Box x={258} y={46} w={96} text="Medicines" lit /></>}
      {at === 2 && <><Cloud x={130} y={52} s={26} opacity={0.35} /><Sun x={206} y={44} r={13} /></>}
      {at === 3 && <W x={160} y={52} size={11}>One thing at a time</W>}
      {at === 4 && <Bubble x={160} y={46} text="Tell your team" width={132} />}
      <g opacity={tools}>
        <rect x="24" y="110" width="44" height="50" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M24 122 H68" stroke={INK} strokeWidth="2" /><path d="M34 106 V114 M58 106 V114" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <rect x="98" y="120" width="52" height="30" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[1, 2, 3].map(index => <path key={index} d={`M${98 + index * 13} 120 V150`} stroke={INK} strokeWidth="1.5" />)}<circle cx="104" cy="135" r="3" fill={GOLD} />
        <rect x="184" y="108" width="40" height="52" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[0, 1, 2].map(index => <path key={index} d={`M191 ${122 + index * 13} l4 4 l7 -8 M207 ${122 + index * 13} H218`} stroke={INK} strokeWidth="2" fill="none" />)}
        <Clock x={280} y={134} r={22} hand={2} />
      </g>
      {["Diary", "Pill box", "Checklist", "Alarm"].map((label, index) => <W key={label} x={[46, 124, 204, 280][index]} y={178} size={10}>{label}</W>)}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function BtSteroidSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["They reduce swelling around a tumour", "Usually once a day, in the morning", "Never stop suddenly; reduce slowly", "Indigestion, appetite, poor sleep", "Infection signs? A doctor or 111 now"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Steroids" title="Steroids: why, when and how to stop" label="Steroids" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A morning tablet, a steroid card, and a staircase stepping the dose down slowly">
      <path d="M210 70 H226 V92 H242 V114 H258 V136 H274 V158 H300" stroke={at === 2 ? GOLD : LINE} strokeWidth="4" fill="none" strokeLinejoin="round" />
      {at === 2 && <><W x={255} y={56} size={10.5}>Reduce slowly</W><g transform="translate(90 96) scale(1.8)"><Pill x={0} y={0} /></g><W x={90} y={140} size={10.5}>Over several weeks</W></>}
      {at === 0 && <><Brain x={90} y={100} s={0.48} fill={TINT} /><ellipse cx="96" cy="94" rx="30" ry="24" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="5 5" /><W x={90} y={170} size={10.5}>Less swelling</W></>}
      {at === 1 && <g>
        <Sun x={46} y={48} /><W x={46} y={88} size={10}>Morning</W>
        <ellipse cx="96" cy="140" rx="46" ry="14" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Pill x={96} y={134} />
        <rect x="112" y="40" width="80" height="40" rx="5" fill={INK} /><W x={152} y={64} size={9.5} fill={WHITE}>Steroid card</W>
      </g>}
      {at === 3 && <Tags x={20} y={34} labels={["Indigestion", "More appetite", "Poor sleep", "Restless"]} lit={() => true} width={140} gap={34} />}
      {at === 4 && <Tags x={20} y={44} labels={["High temperature", "Chills", "Very sore throat"]} lit={index => index === 0} width={150} gap={36} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BtCarKey(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["You need to tell DVLA", "Most people stop driving for a time", "Seizure: usually 6 to 12 months off", "Reapply up to 8 weeks before the end", "Lifts, buses and community transport"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Driving" title="Telling DVLA, and the road back" label="Driving" credit="Illustration: Rehyn. Your doctor can explain the rules for you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A parked car, a letter to DVLA, a calendar of months and a bus">
      <path d="M0 176 H320" stroke={LINE} strokeWidth="4" />
      <g opacity={at === 1 || at === 2 ? 0.45 : 1}>
        <path d="M24 162 V140 L44 120 H100 L118 140 H128 V162 Z" fill={at === 3 ? INK : WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <circle cx="48" cy="164" r="10" fill={INK} /><circle cx="104" cy="164" r="10" fill={INK} />
      </g>
      {at === 0 && <g><rect x="172" y="50" width="120" height="76" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M172 54 L232 96 L292 54" stroke={INK} strokeWidth="2.5" fill="none" /><W x={232} y={118} size={12}>DVLA</W></g>}
      {at === 1 && <><Clock x={232} y={84} r={34} hand={2.4} /><W x={232} y={146} size={10.5}>A period of time</W></>}
      {at === 2 && <g>
        <W x={232} y={62} size={12}>6 to 12 months</W>
        {Array.from({ length: 12 }, (_, index) => <rect key={index} x={160 + index * 12} y="78" width="10" height="26" rx="2" fill={index >= 5 ? GOLD : INK} opacity={index >= 5 ? 0.9 : 0.5} />)}
        <W x={165} y={124} size={9.5}>1</W><W x={297} y={124} size={9.5}>12</W>
      </g>}
      {at === 3 && <g><rect x="184" y="52" width="104" height="64" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="208" cy="78" r="9" fill={SOFT} /><path d="M196 102 C196 92 220 92 220 102" fill={SOFT} /><path d="M232 74 H276 M232 86 H270 M232 98 H262" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
        <W x={236} y={140} size={10.5}>8 weeks early</W></g>}
      {at === 4 && <g><rect x="176" y="80" width="126" height="70" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />{[0, 1, 2, 3].map(index => <rect key={index} x={186 + index * 28} y="90" width="22" height="20" rx="3" fill={TINT} stroke={INK} strokeWidth="1.5" />)}
        <circle cx="204" cy="152" r="10" fill={INK} /><circle cx="276" cy="152" r="10" fill={INK} /><Person x={140} y={150} scale={0.8} fill={SOFT} /></g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BtFivePs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Not eased by rest or sleep", "The body works hard to repair", "Many improve within 6 months to a year", "Rest 10 minutes out of every hour", "Short walks, sleep routine, fluids"];
  const level = [14, 20, 46, 56, 66][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tiredness" title="Tired in a way rest won't fix" label="Tiredness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A battery slowly recharging, beside the five Ps: prioritise, plan, pace, posture and permission">
      <rect x="24" y="74" width="90" height="48" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="114" y="88" width="8" height="20" rx="2" fill={INK} />
      <rect x="30" y="80" width={level} height="36" rx="4" fill={at < 2 ? SOFT : INK} />
      <W x={70} y={146} size={10}>Energy</W>
      {at === 0 && <Tags x={160} y={44} labels={["Tired", "Weak", "Slow or heavy"]} lit={() => true} width={140} gap={38} />}
      {at === 1 && <Tags x={160} y={44} labels={["Repairing tissue", "Treatments", "Medicines"]} lit={() => true} width={140} gap={38} />}
      {at === 2 && <g>
        <path d="M160 100 H300" stroke={LINE} strokeWidth="6" strokeLinecap="round" /><path d="M230 100 H300" stroke={GOLD} strokeWidth="6" strokeLinecap="round" />
        {[160, 230, 300].map(x => <circle key={x} cx={x} cy="100" r="6" fill={INK} />)}
        <W x={168} y={126} size={10}>Treatment</W><W x={230} y={82} size={10}>6 months</W><W x={292} y={126} size={10}>1 year</W>
      </g>}
      {at === 3 && <Tags x={168} y={20} labels={["Prioritise", "Plan", "Pace", "Posture", "Permission"]} lit={() => true} width={124} gap={32} />}
      {at === 4 && <Tags x={160} y={30} labels={["Short walks", "Sleep routine", "Little and often", "Plenty of fluids"]} lit={() => true} width={140} gap={36} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BtTwoPeople(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Mood and behaviour can change", "Swelling, the frontal lobe, medicines", "Low for 2 weeks or more? Tell your GP", "Step away for at least 30 minutes", "111, Samaritans 116 123, or 999"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood and personality" title="Not yourself? It is not your fault" label="Mood and personality" credit="Illustration: Rehyn. In danger now? Call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people side by side, a passing cloud, and the help that is there">
      {at <= 2 && <Cloud x={62} y={60} s={22} opacity={at === 2 ? 0.8 : 0.5} />}
      {at >= 3 && <Sun x={62} y={56} r={11} />}
      <Person x={60} y={156} scale={1.3} /><Person x={118} y={156} scale={1.3} fill={SOFT} />
      {at === 0 && <Tags x={162} y={28} labels={["Irritable", "Anxious", "Mood swings", "Less interest"]} lit={() => true} width={140} gap={36} />}
      {at === 1 && <Tags x={162} y={28} labels={["Swelling", "Frontal lobe", "Medicines", "The shock"]} lit={() => true} width={140} gap={36} />}
      {at === 2 && <><Tags x={162} y={30} labels={["Low mood", "Lost interest", "Sleep or appetite"]} lit={() => true} width={140} gap={36} /><W x={232} y={158} size={10.5}>2 or more weeks</W></>}
      {at === 3 && <><Clock x={232} y={88} r={36} hand={3.1} /><W x={232} y={150} size={11}>30 minutes</W></>}
      {at === 4 && <Tags x={156} y={36} labels={["111, mental health", "Samaritans 116 123", "999 or A&E"]} lit={index => index === 2} width={150} gap={38} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BtCarerBreak(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Unpaid help makes you a carer", "Ask how they are feeling", "Daily breaks of an hour or two", "A free carer's assessment", "Charity helplines can support you"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="For carers" title="Caring for them, and for you" label="For family and carers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A carer beside the person they care for, with a clock for breaks and places to find support">
      <Person x={66} y={156} scale={1.3} /><Person x={126} y={156} scale={1.3} fill={SOFT} />
      {at === 0 && <HeartShape x={236} y={96} size={72} fill={TINT} stroke={INK} width={3} />}
      {at === 1 && <Bubble x={210} y={60} text="How are you feeling?" width={156} />}
      {at === 2 && <><Clock x={236} y={86} r={38} hand={1} /><path d="M236 48 A38 38 0 0 1 272 74 L236 86 Z" fill={GOLD} opacity=".7" /><W x={236} y={150} size={11}>An hour or two</W></>}
      {at === 3 && <g><rect x="196" y="40" width="84" height="110" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={238} y={66} size={10}>Carer's</W><W x={238} y={80} size={10}>assessment</W>
        <path d="M208 96 H268 M208 108 H268 M208 120 H252" stroke={LINE} strokeWidth="3" strokeLinecap="round" /><path d="M248 134 l6 6 l12 -14" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" /></g>}
      {at === 4 && <Tags x={164} y={40} labels={["Brain Tumour Charity", "Brainstrust", "Macmillan"]} lit={() => true} width={146} gap={38} size={10} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Sarcoma ===============================================================================================

/** A standing figure, centred on x; limbs and bones can be lit. */
const Figure = ({ x, limbs = SOFT, bones }: { x: number; limbs?: string; bones?: string }) =>
  <g strokeLinecap="round">
    <circle cx={x} cy="34" r="13" fill={SOFT} />
    <path d={`M${x - 22} 60 L${x - 42} 116 M${x + 22} 60 L${x + 42} 116`} stroke={limbs} strokeWidth="12" />
    <path d={`M${x - 11} 116 L${x - 16} 184 M${x + 11} 116 L${x + 16} 184`} stroke={limbs} strokeWidth="14" />
    <rect x={x - 23} y="52" width="46" height="70" rx="14" fill={SOFT} />
    {bones && <g stroke={bones} strokeWidth="3" fill="none">
      <path d={`M${x - 12} 70 H${x + 12} M${x - 13} 80 H${x + 13} M${x - 12} 90 H${x + 12}`} />
      <path d={`M${x - 16} 110 C${x - 8} 120, ${x + 8} 120, ${x + 16} 110`} />
      <path d={`M${x - 24} 66 L${x - 40} 112 M${x + 24} 66 L${x + 40} 112 M${x - 11} 124 L${x - 15} 180 M${x + 11} 124 L${x + 15} 180`} strokeWidth="2.5" />
    </g>}
  </g>;

function SarTissueMap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Soft tissue or bone: two main types", "Soft tissue: most often arms and legs", "Bone: hips, ribs, arms and legs", "Named after the cell it looks like", "Can affect anyone, of any age"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A rare cancer of soft tissue or bone" label="What sarcoma is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A figure with its soft tissues and bones, and where sarcoma most often starts">
      <g opacity={at === 4 ? 0.35 : 1}><Figure x={80} limbs={at === 1 ? GOLD : SOFT} bones={at === 2 ? GOLD : at === 0 ? WHITE : undefined} /></g>
      {at === 0 && <><Box x={232} y={58} w={140} text="Soft tissue" lit /><Box x={232} y={102} w={140} text="Bone" lit /><W x={232} y={146} size={10.5}>Around 100 subtypes</W></>}
      {at === 1 && <Tags x={166} y={26} labels={["Muscle", "Fat", "Blood vessels", "Tendons"]} lit={() => true} width={132} gap={36} />}
      {at === 2 && <Tags x={166} y={40} labels={["Hips (pelvis)", "Ribs", "Arms and legs"]} lit={() => true} width={132} gap={38} />}
      {at === 3 && <><Box x={232} y={42} w={140} text="Smooth muscle" /><W x={232} y={74} size={10.5}>leiomyosarcoma</W><Box x={232} y={110} w={140} text="Fat cells" /><W x={232} y={142} size={10.5}>liposarcoma</W></>}
      {at === 4 && <g>{[[128, 0.8], [176, 1.05], [226, 1.3], [276, 0.95]].map(([x, scale], index) => <Person key={index} x={x} y={150} scale={scale} fill={index % 2 ? SOFT : INK} />)}</g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SarMdtTable(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Seen at a sarcoma specialist centre", "5 bone and 17 soft tissue centres", "The MDT usually meets once a week", "Your nurse specialist is your contact", "You decide together which to start"];
  const seats = [[96, 92], [160, 82], [224, 92]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Specialist centres" title="Rare cancer, specialist team" label="Specialist centres" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A specialist team around a table, and the specialist centres across the UK">
      {seats.map(([x, y], index) => <Person key={index} x={x} y={y} scale={0.85} fill={at === 2 || (at === 3 && index === 1) ? INK : SOFT} />)}
      {at === 3 && <circle cx="160" cy="56" r="14" fill="none" stroke={GOLD} strokeWidth="3" />}
      <ellipse cx="160" cy="112" rx="96" ry="22" fill={TINT} stroke={INK} strokeWidth="2.5" />
      {at === 0 && <Box x={160} y={160} w={196} text="Sarcoma specialist centre" lit />}
      {at === 1 && <><W x={84} y={166} size={20}>5</W><W x={84} y={184} size={10}>bone</W><W x={236} y={166} size={20}>17</W><W x={236} y={184} size={10}>soft tissue</W></>}
      {at === 2 && <g>{Array.from({ length: 7 }, (_, index) => <rect key={index} x={58 + index * 30} y="150" width="24" height="24" rx="5" fill={index === 2 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />)}</g>}
      {at === 3 && <><Phone x={160} y={162} lit /><W x={204} y={166} size={10.5} anchor="start">Key worker</W></>}
      {at === 4 && <Box x={160} y={162} w={150} text="Decide together" lit />}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function SarMargin(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tailored to your type of sarcoma", "Removing the tumour with a margin", "Radiotherapy: usually about 6 weeks", "Chemotherapy mainly for bone sarcomas", "Unwell? Call the 24-hour number"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatments" title="Surgery at the centre of treatment" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tumour with a margin of healthy tissue around it, radiotherapy beams and a drip">
      <circle cx="100" cy="100" r="50" fill={WHITE} stroke={LINE} strokeWidth="3" />
      <circle cx="100" cy="100" r="40" fill="none" stroke={at === 1 ? GOLD : SOFT} strokeWidth={at === 1 ? 4 : 2.5} strokeDasharray="6 6" />
      <circle cx="100" cy="100" r="24" fill={INK} opacity=".8" />
      {at === 1 && <W x={100} y={170} size={10.5}>Margin</W>}
      {at === 0 && <Tags x={180} y={50} labels={["Type", "Grade", "Stage"]} lit={() => true} width={110} gap={36} />}
      {at === 2 && <><g stroke={GOLD} strokeWidth="3" strokeLinecap="round"><path d="M176 40 L124 84" /><path d="M190 64 L128 96" /><path d="M196 92 L128 106" /></g><W x={246} y={70} size={12}>About 6 weeks</W><W x={246} y={92} size={10}>Monday to Friday</W></>}
      {at === 3 && <g><rect x="222" y="34" width="40" height="54" rx="9" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="228" y="56" width="28" height="26" rx="5" fill={SOFT} />
        <path d="M242 88 C242 120, 200 130, 158 112" stroke={INK} strokeWidth="2.5" fill="none" /><W x={242} y={150} size={10}>Before or after surgery</W></g>}
      {at === 4 && <><Phone x={244} y={94} lit /><W x={244} y={142} size={11}>24 hours</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SarSpacing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Follow-up begins after treatment", "Symptoms, an examination, chest X-rays", "Check-ups get less frequent over time", "New lump or pain? Contact your team", "Scanxiety is completely normal"];
  const dots = [20, 36, 52, 68, 84, 100, 116, 132, 148, 164, 188, 216, 244, 272, 300];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Follow-up" title="Check-ups that spread out over time" label="Follow-up" credit="Illustration: Rehyn. Your team will explain your own follow-up."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Check-ups along a line of years, close together at first and spreading out">
      <path d="M20 140 H300" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
      {dots.map((x, index) => <circle key={index} cx={x} cy="140" r="5" fill={at === 2 ? INK : index === 0 && at === 0 ? GOLD : SOFT} />)}
      <W x={20} y={164} size={9.5} anchor="start">Start</W>
      {[1, 2, 3, 4, 5].map(year => <W key={year} x={20 + year * 56} y={164} size={9.5}>{year}</W>)}
      <W x={300} y={180} size={9.5} anchor="end">years</W>
      {at === 0 && <><Person x={160} y={92} scale={1.2} /><W x={20} y={118} size={10.5} anchor="start">Treatment ends</W></>}
      {at === 1 && <><Box x={60} y={56} w={92} size={10} text="Symptoms" /><Box x={160} y={56} w={92} size={10} text="Examination" /><Box x={260} y={56} w={92} size={10} text="Chest X-ray" /></>}
      {at === 2 && <><W x={92} y={118} size={10}>Every few months</W><W x={244} y={118} size={10}>Then less often</W></>}
      {at === 3 && <Bubble x={160} y={62} text="New lump or pain?" width={150} />}
      {at === 4 && <><circle cx="124" cy="70" r="34" fill="none" stroke={INK} strokeWidth="8" /><Person x={210} y={100} scale={1.1} fill={SOFT} /><HeartShape x={250} y={48} size={26} fill={GOLD} stroke={GOLD} width={2} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SarPhysioPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["It can help to start early: prehab", "Strength, movement and walking", "Physio on the day or the day after", "Do your home exercises regularly", "Rest in between keeping active"];
  const xs = [40, 120, 200, 280];
  const where = xs[[0, 1, 1, 2, 3][at]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Physiotherapy" title="Getting moving, before and after surgery" label="Physiotherapy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from prehab, through hospital and home, to staying active for the long term">
      <path d="M40 150 H280" stroke={LINE} strokeWidth="4" strokeDasharray="2 8" strokeLinecap="round" />
      {xs.map((x, index) => <circle key={x} cx={x} cy="150" r="8" fill={x <= where ? INK : WHITE} stroke={INK} strokeWidth="2" />)}
      {["Prehab", "Hospital", "Home", "Long term"].map((label, index) => <W key={label} x={xs[index]} y={176} size={10}>{label}</W>)}
      <Person x={where} y={132} scale={0.9} fill={INK} />
      {at === 0 && <Box x={160} y={42} w={140} text="From diagnosis" lit />}
      {at === 1 && <><Box x={68} y={42} w={92} size={10} text="Strength" /><Box x={160} y={42} w={92} size={10} text="Movement" /><Box x={252} y={42} w={92} size={10} text="Walking" /></>}
      {at === 2 && <><Box x={112} y={42} w={124} size={10} text="Day of surgery" lit /><Box x={240} y={42} w={100} size={10} text="Day after" /></>}
      {at === 3 && <g>{Array.from({ length: 7 }, (_, index) => <g key={index}><rect x={58 + index * 30} y="30" width="24" height="24" rx="5" fill={WHITE} stroke={INK} strokeWidth="2" /><path d={`M${64 + index * 30} 42 l4 5 l8 -9`} stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" /></g>)}</g>}
      {at === 4 && <><Sun x={110} y={46} /><Moon x={210} y={46} r={14} /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function SarLimb(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Limb-sparing surgery is most common", "Low-impact exercise, such as swimming", "Rarely, part of a limb is removed", "Most go home 10 to 14 days after", "Most can be fitted with a prosthesis"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Limb surgery" title="Limb surgery, and the road afterwards" label="Limb surgery and prosthetics" credit="Illustration: Rehyn. A simple picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A leg with a joint implant, and later an artificial limb, drawn simply">
      {at <= 2 && <g opacity={at === 2 ? 0.45 : 1}>
        <rect x="58" y="26" width="36" height="78" rx="17" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <circle cx="76" cy="112" r="14" fill={WHITE} stroke={at < 2 ? GOLD : INK} strokeWidth={at < 2 ? 4 : 2.5} />
        <rect x="60" y="122" width="32" height="56" rx="15" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {at < 2 && <path d="M76 70 V136" stroke={GOLD} strokeWidth="5" strokeLinecap="round" />}
      </g>}
      {at === 3 && <g>
        <circle cx="76" cy="146" r="28" fill="none" stroke={INK} strokeWidth="4" /><circle cx="124" cy="168" r="6" fill={INK} />
        <path d="M56 90 V122 H108 L122 162" stroke={INK} strokeWidth="4" fill="none" strokeLinejoin="round" />
        <Person x={80} y={108} scale={0.8} fill={SOFT} />
      </g>}
      {at === 4 && <g>
        <rect x="58" y="26" width="36" height="78" rx="17" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="62" y="100" width="28" height="18" rx="5" fill={SOFT} stroke={INK} strokeWidth="2" />
        <circle cx="76" cy="126" r="8" fill={GOLD} />
        <path d="M76 134 V170" stroke={INK} strokeWidth="6" strokeLinecap="round" /><path d="M66 176 H98" stroke={INK} strokeWidth="7" strokeLinecap="round" />
      </g>}
      {at === 0 && <><Box x={226} y={60} w={140} text="Limb-sparing" lit /><W x={226} y={98} size={10}>A metal implant, bone</W><W x={226} y={114} size={10}>or an artificial joint</W></>}
      {at === 1 && <><Box x={226} y={70} w={128} text="Swimming" /><Box x={226} y={112} w={128} text="Riding a bike" /></>}
      {at === 2 && <><Person x={196} y={154} scale={1.1} fill={SOFT} /><Person x={262} y={154} scale={1.1} /><Bubble x={210} y={68} text="Ask questions" width={120} /></>}
      {at === 3 && <><W x={226} y={88} size={13}>10 to 14 days</W><W x={226} y={110} size={10.5}>then physiotherapy</W></>}
      {at === 4 && <><Box x={226} y={74} w={150} text="Limb fitting centre" lit /><W x={226} y={114} size={10.5}>Keep going with rehab</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SarScarFade(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Drains are removed after a few days", "Stitches usually out at the GP surgery", "Signs of infection? Call straight away", "Moving helps prevent blood clots", "Scars flatten and fade over time"];
  const scar = [1, 1, 0.9, 0.6, 0.3][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Wound and scars" title="Healing well, and knowing when to call" label="Wound healing and scars" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A healing wound with stitches, fading over time to a flat scar">
      <rect x="36" y="40" width="248" height="80" rx="18" fill={WHITE} stroke={LINE} strokeWidth="3" />
      <path d="M70 82 C120 74, 200 90, 250 80" stroke={INK} strokeWidth={at === 4 ? 2.5 : 4} fill="none" strokeLinecap="round" opacity={scar} />
      {at <= 1 && [92, 124, 156, 188, 220].map(x => <path key={x} d={`M${x} 72 V92`} stroke={at === 1 ? GOLD : INK} strokeWidth="2.5" strokeLinecap="round" />)}
      {at === 0 && <><path d="M250 80 C276 96, 282 120, 280 140" stroke={INK} strokeWidth="2.5" fill="none" /><rect x="264" y="140" width="32" height="40" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="268" y="162" width="24" height="14" rx="3" fill={SOFT} /><W x={252} y={164} size={10} anchor="end">Drain</W></>}
      {at === 1 && <W x={160} y={150} size={10.5}>Clips, stitches or glue</W>}
      {at === 2 && <><rect x="66" y="132" width="12" height="36" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx="72" cy="170" r="9" fill={GOLD} /><W x={190} y={156} size={10.5}>Heat, swelling, fluid</W></>}
      {at === 3 && <><Box x={96} y={156} w={116} text="Move around" lit /><Box x={226} y={156} w={116} text="Leg exercises" lit /></>}
      {at === 4 && <W x={160} y={156} size={10.5}>Everyone heals differently</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SarEnergySteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Very tired for weeks after surgery", "For most, it improves after treatment", "Plan, pace and keep a fatigue diary", "A bit more every day, then outside", "Breathless, dizzy? Call the hospital"];
  const where = [0, 1, 1, 2, 0][at];
  const level = [0.2, 0.5, 0.55, 0.8, 0.25][at];
  const xs = [56, 160, 264];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tiredness" title="Rebuilding energy, a little each day" label="Tiredness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A step-by-step route from the sofa, around the house, to walking outside">
      <rect x="244" y="20" width="52" height="26" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="296" y="28" width="5" height="10" rx="1" fill={INK} />
      <rect x="248" y="24" width={44 * level} height="18" rx="3" fill={at === 4 ? SOFT : INK} />
      <path d="M30 140 V120 C30 112 82 112 82 120 V140 Z M26 120 V146 M86 120 V146" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M136 146 V116 L160 96 L184 116 V146 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="264" cy="108" r="18" fill={SOFT} /><path d="M264 126 V146" stroke={INK} strokeWidth="4" />
      {["Rest", "Around the house", "Outside"].map((label, index) => <W key={label} x={xs[index]} y={168} size={10}>{label}</W>)}
      <Person x={xs[where] + 34} y={142} scale={0.75} fill={at === 4 ? SOFT : INK} />
      {at === 2 && <g><rect x="100" y="22" width="70" height="56" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={135} y={40} size={9.5}>Diary</W><path d="M110 52 H160 M110 64 H148" stroke={LINE} strokeWidth="3" strokeLinecap="round" /></g>}
      {at === 3 && <Arrow d="M90 80 C140 56, 200 56, 240 76" head="M231 70 L240 76 L230 81" />}
      {at === 4 && <><Phone x={140} y={52} lit /><W x={164} y={56} size={10.5} anchor="start">24-hour number</W></>}
      <Say y={202}>{caps[at]}</Say>
    </svg>} />;
}

function SarFourDoors(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The law counts sarcoma as a disability", "Ask for a phased return or more breaks", "Fewer hours or adapted PE to start", "Ask your surgical team about driving", "Ask about welfare and money advice"];
  const tops = ["Equality Act 2010", "Flexible working", "Meet your teachers", "Driving assessment", "Money advisers"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and money" title="Back to work, study and the road" label="Work, study and money" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four doors: work, school, driving and money">
      <W x={160} y={36} size={11}>{tops[at]}</W>
      {["Work", "School", "Driving", "Money"].map((label, index) => { const x = 24 + index * 74; const lit = at === 0 || at === index + 1; return <g key={label} opacity={lit ? 1 : 0.45}>
        <rect x={x} y="56" width="56" height="90" rx="6" fill={lit && at !== 0 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <circle cx={x + 44} cy="104" r="3.5" fill={lit && at !== 0 ? WHITE : INK} />
        <W x={x + 28} y={166} size={10}>{label}</W>
      </g>; })}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SarLaterRow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Some start years after treatment", "Long-lasting swelling: lymphoedema?", "Keep a stiff joint moving", "Heart checks, tingling, fertility", "Not smoking and being active can help"];
  const on = [[], [0], [1], [2, 3], [0, 1, 2, 3]][at];
  const xs = [50, 130, 210, 290];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Late effects" title="Effects that linger or arrive later" label="Late effects" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A line from treatment to years later, with swelling, joints, the heart and nerves">
      <W x={20} y={30} size={10} anchor="start">Treatment</W><W x={300} y={30} size={10} anchor="end">Years later</W>
      <Arrow d="M24 42 H296" head="M288 36 L296 42 L288 48" />
      {at === 4 && <W x={160} y={74} size={10.5}>Not smoking, healthy weight, active</W>}
      {xs.map((x, index) => <g key={x} opacity={on.includes(index) || at === 0 ? 1 : 0.35}>
        {at !== 4 && on.includes(index) && <circle cx={x} cy="120" r="30" fill={WHITE} stroke={GOLD} strokeWidth="3" />}
        {index === 0 && <Drop x={x} y={122} fill={SOFT} />}
        {index === 1 && <g stroke={INK} strokeWidth="6" strokeLinecap="round"><path d={`M${x - 16} 104 L${x} 120 M${x} 120 L${x + 4} 140`} /><circle cx={x} cy="120" r="6" fill={WHITE} strokeWidth="3" /></g>}
        {index === 2 && <HeartShape x={x} y={124} size={36} fill={SOFT} stroke={INK} width={2.5} />}
        {index === 3 && <path d={`M${x - 18} 120 L${x - 10} 108 L${x - 2} 132 L${x + 6} 108 L${x + 14} 132 L${x + 18} 120`} stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" />}
        <W x={x} y={170} size={10}>{["Swelling", "Joints", "Heart", "Nerves"][index]}</W>
      </g>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SarMirror(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["How you think and feel about your body", "Ask about scar massage or laser", "Time to grieve, and start coping", "Hair loss is almost always temporary", "Talking to people you trust can help"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Body image" title="Finding confidence after visible change" label="Body image and confidence" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person looking in a mirror, with a friend beside them">
      <rect x="176" y="20" width="104" height="156" rx="50" fill={TINT} stroke={INK} strokeWidth="4" />
      <Person x={228} y={146} scale={1.5} fill={SOFT} />
      <Person x={120} y={156} scale={1.6} />
      {at === 1 && <path d="M222 132 L236 150" stroke={GOLD} strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3" />}
      {at === 2 && <Clock x={48} y={52} r={20} hand={2} />}
      {at === 3 && <path d="M214 86 C218 76, 226 76, 228 86 M226 84 C230 74, 238 74, 242 84" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />}
      {at === 4 && <><Person x={50} y={160} scale={1.3} fill={SOFT} /><HeartShape x={84} y={54} size={30} fill={GOLD} stroke={GOLD} width={2} /></>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function SarNotAlone(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Support groups and forums can help", "Worry about it coming back is common", "Over 2 weeks? Talk to your doctor", "Walks, a diary and small daily goals", "Samaritans 116 123, any time"];
  const around = [[54, 120], [266, 120], [92, 176], [228, 176]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood and support" title="You are not alone with sarcoma" label="Mood and support" credit="Illustration: Rehyn. In danger now? Call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="One person joined by others around them, with ways to find support">
      {around.map(([x, y], index) => <g key={index} opacity={at === 0 ? 1 : 0.3}>
        {at === 0 && <path d={`M160 ${132} L${x} ${y - 20}`} stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 5" />}
        <Person x={x} y={y} scale={0.8} fill={SOFT} />
      </g>)}
      <Person x={160} y={150} scale={1.3} />
      {at === 1 && <Bubble x={170} y={48} text="Will it come back?" width={150} />}
      {at === 2 && <Box x={160} y={50} w={130} text="Over 2 weeks" lit />}
      {at === 3 && <><Box x={66} y={48} w={88} size={10} text="Walks" /><Box x={160} y={48} w={88} size={10} text="Diary" /><Box x={254} y={48} w={88} size={10} text="Small goals" /></>}
      {at === 4 && <Box x={160} y={50} w={170} text="Samaritans 116 123" lit />}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

// ==== Mesothelioma ==========================================================================================

/** A chest and tummy outline, with the lungs and their linings. */
const Torso = ({ pleura = INK, peritoneum = INK, pleuraWidth = 2, tummy = TINT }: { pleura?: string; peritoneum?: string; pleuraWidth?: number; tummy?: string }) =>
  <g>
    <path d="M118 24 C100 28 92 40 92 56 V184 H228 V56 C228 40 220 28 202 24 Z" fill={WHITE} stroke={LINE} strokeWidth="3" strokeLinejoin="round" />
    <ellipse cx="136" cy="80" rx="20" ry="38" fill={TINT} /><ellipse cx="184" cy="80" rx="20" ry="38" fill={TINT} />
    <ellipse cx="136" cy="80" rx="25" ry="43" fill="none" stroke={pleura} strokeWidth={pleuraWidth} /><ellipse cx="184" cy="80" rx="25" ry="43" fill="none" stroke={pleura} strokeWidth={pleuraWidth} />
    <ellipse cx="160" cy="150" rx="46" ry="22" fill={tummy} stroke={peritoneum} strokeWidth={peritoneum === GOLD ? 4 : 2} />
  </g>;

function MesoLining(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A cancer of the mesothelium lining", "Chest: the pleura can thicken", "Chest 95 in 100; tummy 4 in 100", "More than 2,700 diagnosed a year", "Chest pain, breathlessness, a cough"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The thin lining where it starts" label="What mesothelioma is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A chest and tummy with the thin linings around the lungs and the tummy organs">
      <Torso pleura={at === 0 || at === 1 ? GOLD : INK} pleuraWidth={at === 1 ? 5 : at === 0 ? 3 : 2} peritoneum={at === 0 ? GOLD : INK} />
      {at === 0 && <><W x={268} y={84} size={10.5}>Pleura</W><W x={268} y={154} size={10.5}>Peritoneum</W></>}
      {at === 1 && <><W x={268} y={78} size={10.5}>Pleura</W><W x={268} y={94} size={10}>thickens</W></>}
      {at === 2 && <><W x={48} y={84} size={12}>95 in 100</W><W x={48} y={154} size={12}>4 in 100</W></>}
      {at === 3 && <><W x={48} y={104} size={13}>2,700+</W><W x={48} y={122} size={10}>a year</W></>}
      {at === 4 && <><W x={268} y={62} size={10}>Chest pain</W><W x={268} y={84} size={10}>Breathless</W><W x={268} y={106} size={10}>Cough</W><W x={268} y={128} size={10}>Very tired</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function MesoFibres(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Used from the 1950s, banned in 1999", "Fibres can settle in the lung lining", "Many jobs, and their families too", "It can take 15 to 60 years to develop", "Not infectious; ask about compensation"];
  const lungs = at === 1 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Asbestos" title="Tiny fibres, a very long delay" label="Asbestos" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from asbestos use to its ban, a long delay, and fibres in the lung lining">
      <path d="M30 140 H120" stroke={at === 0 ? INK : SOFT} strokeWidth="6" strokeLinecap="round" />
      <path d="M120 140 H300" stroke={at === 3 ? GOLD : LINE} strokeWidth="5" strokeDasharray="3 8" strokeLinecap="round" />
      <circle cx="30" cy="140" r="7" fill={INK} /><circle cx="120" cy="140" r="7" fill={INK} />
      <W x={30} y={164} size={10}>1950s</W><W x={120} y={164} size={10}>1999 ban</W>
      {at === 3 && <W x={214} y={164} size={11}>15 to 60 years</W>}
      {lungs && <g>
        <ellipse cx="226" cy="66" rx="18" ry="34" fill={TINT} stroke={INK} strokeWidth="2" /><ellipse cx="270" cy="66" rx="18" ry="34" fill={TINT} stroke={INK} strokeWidth="2" />
        <g stroke={GOLD} strokeWidth="2.5" strokeLinecap="round"><path d="M210 50 l6 -4" /><path d="M208 74 l7 2" /><path d="M286 56 l-6 -4" /><path d="M287 82 l-7 1" /></g>
      </g>}
      {at === 0 && <g fill={WHITE} stroke={INK} strokeWidth="2.5"><rect x="40" y="60" width="50" height="50" rx="3" /><path d="M36 62 L65 38 L94 62" fill="none" /><rect x="58" y="82" width="14" height="28" /></g>}
      {at === 2 && <><Box x={62} y={46} w={98} size={10} text="Construction" /><Box x={160} y={46} w={88} size={10} text="Plumbers" /><Box x={258} y={46} w={98} size={10} text="Shipbuilders" /><Box x={160} y={90} w={130} size={10} text="Family members" lit /></>}
      {at === 4 && <><Box x={110} y={56} w={140} text="Not infectious" lit /><Box x={240} y={98} w={124} text="Ask a solicitor" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MesoFiveTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Aims to slow growth and ease symptoms", "Immunotherapy: the most common", "Chemotherapy may help with symptoms", "A drain for fluid around the lung", "High temperature? Call your team now"];
  const lit = [[0, 1, 2, 3, 4], [0], [1, 2], [3, 4], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatments" title="Slowing it down, easing symptoms" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The treatments for mesothelioma, and what they aim to do">
      <Tags x={176} y={22} labels={["Immunotherapy", "Chemotherapy", "Radiotherapy", "Surgery", "Drain"]} lit={index => at !== 0 && lit.includes(index)} width={130} gap={32} size={10} />
      {at === 0 && <><Box x={84} y={70} w={136} text="Slow the growth" lit /><Box x={84} y={112} w={136} text="Ease symptoms" lit /></>}
      {at === 1 && <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4 + 0.2; return <g key={index}><path d={`M${84 + 26 * Math.cos(a)} ${84 + 26 * Math.sin(a)} L${84 + 38 * Math.cos(a)} ${84 + 38 * Math.sin(a)}`} stroke={INK} strokeWidth="3" strokeLinecap="round" /><circle cx={84 + 40 * Math.cos(a)} cy={84 + 40 * Math.sin(a)} r="4.5" fill={GOLD} /></g>; })}
        <circle cx="84" cy="84" r="28" fill={INK} /><circle cx="76" cy="78" r="8" fill={SOFT} />
        <W x={84} y={150} size={10}>Every 3 and 6 weeks</W></g>}
      {at === 2 && <g><rect x="64" y="30" width="40" height="56" rx="9" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="70" y="54" width="28" height="26" rx="5" fill={SOFT} /><path d="M84 86 V150" stroke={INK} strokeWidth="2.5" /><circle cx="84" cy="154" r="5" fill={INK} /></g>}
      {at === 3 && <g><ellipse cx="80" cy="84" rx="30" ry="48" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M100 118 C120 130, 128 140, 130 150" stroke={INK} strokeWidth="2.5" fill="none" /><rect x="118" y="150" width="26" height="30" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="122" y="164" width="18" height="12" rx="2" fill={SOFT} /></g>}
      {at === 4 && <><Phone x={84} y={88} lit /><W x={84} y={140} size={10.5}>Your care team</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MesoTestPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Your GP asks about work and asbestos", "A CT scan takes 5 to 10 minutes", "A biopsy is more likely to confirm it", "Results can take several weeks", "A nurse specialist as your contact"];
  const xs = [48, 124, 200, 276];
  const where = xs[[0, 1, 2, 3, 3][at]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="The tests on the way to answers" label="Tests and diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Stepping stones from the GP, through scans and a biopsy, to the results">
      {["GP", "CT scan", "Biopsy", "Results"].map((label, index) => <g key={label}><ellipse cx={xs[index]} cy="160" rx="36" ry="14" fill={xs[index] <= where ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={xs[index]} y={164} size={10} fill={xs[index] <= where ? WHITE : TEXT}>{label}</W></g>)}
      <Person x={where} y={134} scale={0.85} fill={at === 4 ? SOFT : INK} />
      {at === 0 && <Bubble x={120} y={46} text="Your work history?" width={140} />}
      {at === 1 && <><circle cx="110" cy="62" r="28" fill="none" stroke={INK} strokeWidth="7" /><W x={218} y={66} size={11}>5 to 10 minutes</W></>}
      {at === 2 && <><Box x={110} y={50} w={120} text="Fluid sample" /><Box x={240} y={50} w={100} text="Biopsy" lit /></>}
      {at === 3 && <><Hourglass x={130} y={60} /><W x={226} y={66} size={11.5}>Several weeks</W></>}
      {at === 4 && <><Person x={222} y={134} scale={0.85} /><Box x={160} y={48} w={200} text="Clinical nurse specialist" lit /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function MesoDrainFan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Fluid can press on the lung", "Drained slowly through a tube", "Talc, or a drain you can use at home", "A fan, cool air, and how you sit", "Chest pain or hard to breathe: 999"];
  const fluid = [1, 0.6, 0.2, 0.2, 0.4][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Breathlessness" title="Easing breathlessness and fluid" label="Breathlessness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A lung with fluid in its lining being drained, and a fan for cool air">
      <ellipse cx="96" cy="94" rx="50" ry="74" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <ellipse cx="96" cy="90" rx="40" ry="62" fill={TINT} />
      <path d={`M50 ${130 - 26 * fluid} Q96 ${172 + 2 * fluid} 142 ${130 - 26 * fluid} Q96 ${150 - 6 * fluid} 50 ${130 - 26 * fluid} Z`} fill={SOFT} opacity={0.4 + 0.6 * fluid} />
      {at === 0 && <Tags x={172} y={34} labels={["Fluid", "Infection", "Pain", "Anxiety"]} lit={index => index === 0} width={128} gap={36} />}
      {at === 1 && <g><path d="M136 140 C160 150, 180 150, 196 146" stroke={INK} strokeWidth="2.5" fill="none" /><rect x="196" y="128" width="30" height="44" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="200" y="152" width="22" height="16" rx="3" fill={SOFT} /><W x={252} y={86} size={12}>Slowly</W></g>}
      {at === 2 && <><Box x={240} y={62} w={110} text="Talc" lit /><Box x={240} y={104} w={130} text="Catheter at home" /></>}
      {at === 3 && <g>
        <g className={still ? undefined : "lib-v2-breathe is-slow"}><circle cx="244" cy="78" r="32" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[0, 1, 2].map(index => <ellipse key={index} cx="244" cy="62" rx="7" ry="15" fill={SOFT} transform={`rotate(${index * 120} 244 78)`} />)}<circle cx="244" cy="78" r="5" fill={INK} /></g>
        <path d="M244 110 V150 M228 150 H260" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      </g>}
      {at === 4 && <><Phone x={244} y={90} lit /><W x={244} y={142} size={14}>999</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MesoPainDial(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tell your team early", "A pain record can show a pattern", "Take painkillers at regular intervals", "Liquids, patches or a syringe pump", "Radiotherapy, a nerve block or hospice"];
  const sets = [["Tell your team", "Treat it early"], ["Where it is", "How it affects you", "Painkillers taken"], ["Paracetamol", "Codeine", "Morphine", "For nerve pain"], ["Liquids", "Skin patches", "Syringe pump"], ["Radiotherapy", "Nerve block", "Hospice stay"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pain" title="Many ways to bring pain down" label="Managing pain" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A dial turning down, beside the ways pain can be treated">
      <Gauge x={92} y={128} r={62} value={[0.8, 0.7, 0.5, 0.4, 0.3][at]} label="Pain" />
      <Tags x={176} y={30} labels={sets[at]} lit={index => at !== 0 || index === 0} width={130} gap={36} size={10} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MesoSeesaw(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tired even after rest and sleep", "Anaemia can be checked and treated", "Balance rest with gentle walks", "Spread tasks out over the week", "Score it from 0 to 10 with your nurse"];
  const tilt = [-12, -8, 0, 0, -4][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tiredness" title="Balancing rest with gentle activity" label="Tiredness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A seesaw with rest on one side and walking on the other, finding a balance">
      <path d="M110 150 L94 170 H126 Z" fill={INK} />
      <g transform={`rotate(${tilt} 110 148)`}>
        <rect x="26" y="144" width="168" height="8" rx="4" fill={SOFT} />
        <path d="M40 144 V112 M40 128 H68 V144 M68 128 V112" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <g fill={INK}><ellipse cx="164" cy="134" rx="6" ry="9" /><ellipse cx="180" cy="126" rx="6" ry="9" /></g>
      </g>
      <W x={54} y={186} size={10}>Rest</W><W x={172} y={186} size={10}>Activity</W>
      {at === 0 && <><Moon x={262} y={60} r={16} /><W x={262} y={110} size={10.5}>Still tired</W></>}
      {at === 1 && <><Box x={260} y={64} w={100} text="Blood test" lit /><W x={260} y={104} size={10.5}>Anaemia</W></>}
      {at === 2 && <><Box x={260} y={56} w={96} text="Rest" /><Box x={260} y={96} w={100} text="Gentle walks" lit /></>}
      {at === 3 && <g>{Array.from({ length: 7 }, (_, index) => <rect key={index} x={218 + (index % 4) * 22} y={40 + Math.floor(index / 4) * 26} width="18" height="20" rx="4" fill={[0, 2, 5].includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2" />)}<W x={262} y={110} size={10.5}>One week</W></g>}
      {at === 4 && <><W x={262} y={74} size={18}>0 to 10</W><W x={262} y={96} size={10}>fatigue score</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function MesoTwoLayers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Helpful from when you are diagnosed", "Symptoms, feelings, family, benefits", "Alongside your other treatment", "Ask your doctor, nurse or GP", "Plan ahead, when you are ready"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Palliative care" title="Support from the start, not the end" label="Palliative care" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Palliative care running alongside treatment, from diagnosis onwards">
      <rect x="30" y="76" width="270" height="28" rx="10" fill={at === 0 || at === 2 ? INK : SOFT} stroke={at === 0 ? GOLD : INK} strokeWidth={at === 0 ? 3 : 2} />
      <W x={165} y={94} size={10.5} fill={WHITE}>Palliative care</W>
      <rect x="30" y="114" width="270" height="28" rx="10" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2" />
      <W x={165} y={132} size={10.5} fill={at === 2 ? WHITE : TEXT}>Treatment</W>
      <path d="M30 160 H300" stroke={LINE} strokeWidth="3" /><circle cx="30" cy="160" r="6" fill={at === 0 ? GOLD : INK} />
      <W x={24} y={180} size={10} anchor="start">Diagnosis</W>
      {at === 2 && <path d="M306 82 V138" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />}
      {at === 1 && <><Box x={66} y={40} w={88} size={10} text="Symptoms" /><Box x={160} y={40} w={88} size={10} text="Feelings" /><Box x={254} y={40} w={88} size={10} text="Benefits" /></>}
      {at === 3 && <Box x={160} y={40} w={180} text="Doctor, nurse or GP" lit />}
      {at === 4 && <><Box x={160} y={40} w={140} text="Your priorities" lit /><Arrow d="M240 40 H290" head="M282 34 L290 40 L282 46" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MesoSignposts(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Benefits and compensation can help", "A benefit for illness caused by work", "Lump sums: some within 12 months", "Civil claims: start within 3 years", "Choose a specialist solicitor"];
  const boards = ["Benefits", "Lump sums", "Civil claim", "Solicitor"];
  const on = [[0, 2], [0], [1], [2], [3]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Compensation" title="Financial help, and the time limits" label="Compensation and benefits" credit="Illustration: Rehyn. A specialist adviser can explain your own options."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A signpost to benefits, lump sums, a civil claim and a solicitor, with a clock for time limits">
      <path d="M0 184 H320" stroke={LINE} strokeWidth="3" />
      <rect x="36" y="18" width="8" height="166" rx="3" fill={INK} />
      {boards.map((board, index) => { const y = 26 + index * 36; const lit = on.includes(index); return <g key={board}>
        <path d={`M44 ${y} H186 L198 ${y + 13} L186 ${y + 26} H44 Z`} fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <W x={118} y={y + 17} size={10.5} fill={lit ? WHITE : TEXT}>{board}</W>
      </g>; })}
      {(at === 2 || at === 3) && <><Clock x={262} y={78} r={30} hand={at === 2 ? 1.6 : 4.2} /><W x={262} y={134} size={12}>{at === 2 ? "12 months" : "3 years"}</W></>}
      {at === 4 && <Person x={262} y={120} scale={1.2} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MesoSmallPlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Appetite and weight can fall", "Smaller meals, more often", "High-calorie drinks and protein", "Sit up at a table; eat slowly", "A dietitian can advise you"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Eating" title="Little and often at the table" label="Eating and weight" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Small plates through the day, a nourishing drink and someone sitting upright at a table">
      {at === 0 && <><circle cx="80" cy="96" r="44" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="80" cy="96" r="30" fill="none" stroke={LINE} strokeWidth="2" /><circle cx="80" cy="96" r="8" fill={SOFT} />
        <Tags x={166} y={44} labels={["Less appetite", "Weight loss", "Swollen tummy"]} lit={() => true} width={136} gap={38} /></>}
      {at === 1 && [60, 160, 260].map((x, index) => <g key={x}><circle cx={x} cy="96" r="26" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy="96" r="10" fill={INK} opacity=".7" /><Clock x={x} y={44} r={14} hand={index * 2} /></g>)}
      {at === 2 && <g>
        <path d="M94 50 H134 L128 140 H100 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M98 80 H130 L126 136 H102 Z" fill={SOFT} />
        <rect x="190" y="70" width="60" height="70" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="186" y="60" width="68" height="14" rx="4" fill={INK} />
        <W x={114} y={164} size={10}>Drinks</W><W x={220} y={164} size={10}>Protein powder</W>
      </g>}
      {at === 3 && <g>
        <rect x="150" y="116" width="150" height="8" rx="3" fill={INK} /><path d="M164 124 V176 M286 124 V176" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="226" cy="110" rx="24" ry="6" fill={WHITE} stroke={INK} strokeWidth="2" />
        <Person x={120} y={124} scale={1.3} /><path d="M100 142 H140 V176" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>}
      {at === 4 && <><Person x={90} y={150} scale={1.3} fill={SOFT} /><Person x={150} y={150} scale={1.3} /><Box x={240} y={80} w={110} text="Dietitian" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function MesoCarerCircle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Those close to them are affected too", "Take a break: respite care", "Carer's assessment and allowance", "Groups and an online Carers' Hour", "Try not to pressure them to eat"];
  const spots = [{ x: 160, y: 26, t: "Respite" }, { x: 266, y: 100, t: "Assessment" }, { x: 160, y: 174, t: "Allowance" }, { x: 54, y: 100, t: "Groups" }];
  const lit = [[], [0], [1, 2], [3], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="For family" title="Support for the people who care" label="Support for family" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A carer and the person they care for, inside a circle of support">
      <circle cx="160" cy="100" r="74" fill="none" stroke={LINE} strokeWidth="3" strokeDasharray="5 7" />
      <Person x={142} y={122} scale={1.1} /><Person x={180} y={126} scale={1.1} fill={SOFT} />
      {at === 0 && <circle cx="160" cy="100" r="50" fill="none" stroke={GOLD} strokeWidth="3" />}
      {at === 4 && <HeartShape x={160} y={62} size={28} fill={GOLD} stroke={GOLD} width={2} />}
      {spots.map((spot, index) => <Box key={spot.t} x={spot.x} y={spot.y} w={86} size={10} text={spot.t} lit={lit.includes(index)} />)}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function MesoFeelings(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["No right or wrong way to react", "Talking is a good place to start", "More than 2 weeks? Talk to your doctor", "Free support lines to call", "Samaritans 116 123, day or night"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood and support" title="Room for every feeling, and help" label="Mood and support" credit="Illustration: Rehyn. In danger now? Call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A row of different feelings, a person, and the people and lines that can help">
      <g opacity={at === 0 ? 1 : 0.35}>{["Shocked", "Numb", "Frightened", "Angry", "Sad"].map((word, index) => <g key={word}>
        <rect x={10 + index * 60} y="20" width="58" height="28" rx="9" fill={at === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={39 + index * 60} y={38} size={9.5} fill={at === 0 ? WHITE : TEXT}>{word}</W>
      </g>)}</g>
      <Person x={80} y={156} scale={1.4} />
      {at === 1 && <><Bubble x={196} y={86} text="How I feel" width={112} /><Person x={250} y={160} scale={1.2} fill={SOFT} /></>}
      {at === 2 && <Box x={226} y={100} w={150} text="More than 2 weeks" lit />}
      {at === 3 && <Tags x={160} y={66} labels={["Mesothelioma UK", "Macmillan", "Cancer Research UK"]} lit={() => true} width={148} gap={34} size={10} />}
      {at === 4 && <><Phone x={196} y={110} lit /><W x={262} y={116} size={13}>116 123</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function RarePieceView({ piece, ...props }: { piece: RarePiece } & PieceProps) {
  switch (piece) {
    case "rare-bt-grades": return <BtGrades {...props} />;
    case "rare-bt-pressure": return <BtPressure {...props} />;
    case "rare-bt-team-tiles": return <BtTeamTiles {...props} />;
    case "rare-bt-scan-line": return <BtScanLine {...props} />;
    case "rare-bt-new-route": return <BtNewRoute {...props} />;
    case "rare-bt-stopwatch": return <BtStopwatch {...props} />;
    case "rare-bt-desk-tools": return <BtDeskTools {...props} />;
    case "rare-bt-steroid-steps": return <BtSteroidSteps {...props} />;
    case "rare-bt-car-key": return <BtCarKey {...props} />;
    case "rare-bt-five-ps": return <BtFivePs {...props} />;
    case "rare-bt-two-people": return <BtTwoPeople {...props} />;
    case "rare-bt-carer-break": return <BtCarerBreak {...props} />;
    case "rare-sar-tissue-map": return <SarTissueMap {...props} />;
    case "rare-sar-mdt-table": return <SarMdtTable {...props} />;
    case "rare-sar-margin": return <SarMargin {...props} />;
    case "rare-sar-spacing": return <SarSpacing {...props} />;
    case "rare-sar-physio-path": return <SarPhysioPath {...props} />;
    case "rare-sar-limb": return <SarLimb {...props} />;
    case "rare-sar-scar-fade": return <SarScarFade {...props} />;
    case "rare-sar-energy-steps": return <SarEnergySteps {...props} />;
    case "rare-sar-four-doors": return <SarFourDoors {...props} />;
    case "rare-sar-later-row": return <SarLaterRow {...props} />;
    case "rare-sar-mirror": return <SarMirror {...props} />;
    case "rare-sar-not-alone": return <SarNotAlone {...props} />;
    case "rare-meso-lining": return <MesoLining {...props} />;
    case "rare-meso-fibres": return <MesoFibres {...props} />;
    case "rare-meso-five-tiles": return <MesoFiveTiles {...props} />;
    case "rare-meso-test-path": return <MesoTestPath {...props} />;
    case "rare-meso-drain-fan": return <MesoDrainFan {...props} />;
    case "rare-meso-pain-dial": return <MesoPainDial {...props} />;
    case "rare-meso-seesaw": return <MesoSeesaw {...props} />;
    case "rare-meso-two-layers": return <MesoTwoLayers {...props} />;
    case "rare-meso-signposts": return <MesoSignposts {...props} />;
    case "rare-meso-small-plate": return <MesoSmallPlate {...props} />;
    case "rare-meso-carer-circle": return <MesoCarerCircle {...props} />;
    case "rare-meso-feelings": return <MesoFeelings {...props} />;
    default: return null;
  }
}
