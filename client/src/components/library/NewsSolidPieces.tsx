import type { NewsPiece } from "@/content/ischaemic-news";
import { SOLID_PIECES, type SolidPiece } from "@/content/solid-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Lung cancer, Melanoma and Head and neck cancer pages' own pieces (content/solid-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Cancer & recovery pieces. Each is steered by the card's sections;
// pictures show ideas, calmly, and never anyone's own body, scans or results.

export const isSolidPiece = (piece: NewsPiece): piece is SolidPiece => (SOLID_PIECES as readonly string[]).includes(piece);

/** The one-line caption for the chosen section. */
const Cap = ({ children, y = 206 }: { children: string; y?: number }) => <W x={160} y={y} size={11.5}>{children}</W>;
/** A labelled box; `lit` fills it. */
const Box = ({ x, y, width, text, lit = false, height = 28, size = 10.5 }: { x: number; y: number; width: number; text: string; lit?: boolean; height?: number; size?: number }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x + width / 2} y={y + height / 2 + 4} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A row of small day or week squares, the first `filled` of them filled. */
const Squares = ({ x, y, count, filled, size = 18, gap = 22, labels }: { x: number; y: number; count: number; filled: number; size?: number; gap?: number; labels?: string[] }) =>
  <g>{Array.from({ length: count }, (_, index) => <g key={index}>
    <rect x={x + index * gap} y={y} width={size} height={size} rx="4" fill={index < filled ? INK : WHITE} stroke={INK} strokeWidth="1.5" />
    {labels && <W x={x + index * gap + size / 2} y={y + size / 2 + 4} size={9.5} fill={index < filled ? WHITE : TEXT}>{labels[index]}</W>}
  </g>)}</g>;
const fade = (lit: boolean) => (lit ? 1 : 0.35);
/** A phone, centred on (x, y), with a short line on its screen. */
const Phone = ({ x, y, text, lit = true }: { x: number; y: number; text?: string; lit?: boolean }) =>
  <g opacity={lit ? 1 : 0.4}>
    <rect x={x - 30} y={y - 40} width="60" height="80" rx="9" fill={INK} /><rect x={x - 25} y={y - 32} width="50" height="58" rx="4" fill={WHITE} />
    {text && <W x={x} y={y + 2} size={10}>{text}</W>}<circle cx={x} cy={y + 33} r="2.5" fill={WHITE} />
  </g>;
/** A drip bag and its line, the bag centred on (x, y). */
const Drip = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 13} y={y - 20} width="26" height="32" rx="6" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x} ${y + 12} V${y + 42}`} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 46} r="3.5" fill={INK} /></g>;
/** A sheet of paper with a title and a few lines. */
const Doc = ({ x, y, width = 70, height = 86, title }: { x: number; y: number; width?: number; height?: number; title?: string }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    {title && <W x={x + width / 2} y={y + 18} size={9.5}>{title}</W>}
    {[0, 1, 2, 3].map(line => <path key={line} d={`M${x + 10} ${y + 32 + line * 14} H${x + width - 10}`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
  </g>;
/** A small cloud, its left end at (x, y). */
const Cloud = ({ x, y, fill = TINT }: { x: number; y: number; fill?: string }) =>
  <path d={`M${x} ${y} a20 20 0 0 1 10 -36 a26 26 0 0 1 48 -6 a20 20 0 0 1 24 26 a18 18 0 0 1 -8 16 Z`} fill={fill} stroke={SOFT} strokeWidth="2" />;
/** A sun, centred on (x, y). */
const Sun = ({ x, y, r = 16, className }: { x: number; y: number; r?: number; className?: string }) =>
  <g className={className}><circle cx={x} cy={y} r={r} fill={GOLD} />{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 6) * Math.cos(a)} ${y + (r + 6) * Math.sin(a)} L${x + (r + 13) * Math.cos(a)} ${y + (r + 13) * Math.sin(a)}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}</g>;

// ==== Lung cancer ===========================================================================================

/** A pair of lungs and the windpipe, its top centre at (x, y), about 120 across; `part` picks out an area. */
function Lungs({ x, y, scale = 1, fill = WHITE, part, haze = 0 }: { x: number; y: number; scale?: number; fill?: string; part?: "lobe" | "outer" | "centre"; haze?: number }) {
  const left = "M-10 16 C-26 8, -56 34, -58 78 C-59 96, -42 100, -10 90 Z";
  const right = "M10 16 C26 8, 56 34, 58 78 C59 96, 42 100, 10 90 Z";
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d={left} fill={fill} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <path d={right} fill={fill} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    {haze > 0 && <g opacity={haze}><path d={left} fill={SOFT} /><path d={right} fill={SOFT} /></g>}
    <path d="M-14 52 L-50 44 M-14 72 L-56 68 M14 60 L52 50" stroke={LINE} strokeWidth="2" />
    {part === "lobe" && <path d="M-10 16 C-26 8, -46 24, -50 44 L-14 52 Z" fill={TINT} stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" strokeLinejoin="round" />}
    {part === "outer" && [[-46, 40], [-52, 64], [-40, 88], [46, 40], [52, 64], [40, 88]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="6" fill={GOLD} />)}
    {part === "centre" && [[-18, 44], [18, 44], [-22, 30], [22, 30]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="6" fill={GOLD} />)}
    <path d="M0 -8 V26 M0 26 L-16 40 M0 26 L16 40" stroke={INK} strokeWidth="5" strokeLinecap="round" fill="none" />
  </g>;
}

function LcPlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [[], [0], [1, 2], [3, 4], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What you had" title="Five treatments, one plan for you" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five lung cancer treatments in a list, with a picture of the one chosen">
      <Tags x={14} y={16} width={116} gap={34} labels={["Surgery", "Radiotherapy", "Chemotherapy", "Targeted drugs", "Immunotherapy"]} lit={index => lit.includes(index)} />
      {at === 0 && <g>
        {[170, 207, 244, 281].map((x, index) => <Person key={x} x={x} y={112} scale={0.75} fill={index % 2 ? SOFT : INK} />)}
        <path d="M156 128 H296" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <W x={226} y={156} size={10.5}>Multidisciplinary team</W>
      </g>}
      {at === 1 && <g><Lungs x={226} y={30} part="lobe" /><W x={226} y={156} size={10.5}>Lobectomy</W></g>}
      {at === 2 && <g>
        <path d="M160 40 L204 100 M190 30 L204 100 M226 36 L204 100" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" />
        <circle cx="204" cy="104" r="7" fill={INK} />
        <Drip x={272} y={66} lit />
      </g>}
      {at === 3 && <g>
        <Pill x={190} y={92} fill={INK} /><Drip x={266} y={68} lit />
        <W x={190} y={126} size={10}>Tablets</W><W x={266} y={136} size={10}>A drip</W>
        <W x={226} y={162} size={10.5}>Tests: EGFR or ALK</W>
      </g>}
      {at === 4 && <g><Phone x={192} y={92} text="24 hours" /><Doc x={240} y={50} width={62} title="Summary" /></g>}
      <Cap>{["A team of specialists met about you", "Most common: a lobectomy, one lobe", "Chemoradiation: both given together", "Tests on the cells guide the choice", "Side effects? Call the 24-hour number"][at]}</Cap>
    </svg>} />;
}

function LcHundred(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Types and stages" title="Your type and stage, explained" label="Types and stages" credit="Illustration: Rehyn. A picture of the idea, not anyone's own results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hundred squares for the two main types, a pair of lungs, and stages 1 to 4">
      {at === 0 && <g>
        {Array.from({ length: 100 }, (_, index) => <rect key={index} x={22 + (index % 10) * 13} y={30 + Math.floor(index / 10) * 13} width="10" height="10" rx="2" fill={index < 80 ? INK : index < 85 ? SOFT : WHITE} stroke={INK} strokeWidth="1" />)}
        <Tags x={170} y={60} width={136} gap={40} labels={["Non-small cell", "Small cell"]} lit={index => index === 0} />
      </g>}
      {(at === 1 || at === 2) && <Lungs x={88} y={42} part={at === 1 ? "outer" : "centre"} />}
      {at === 1 && <Tags x={170} y={40} width={136} gap={36} labels={["Adenocarcinoma", "Squamous cell", "Large cell"]} lit={index => index === 0} />}
      {at === 2 && <Tags x={170} y={56} width={136} gap={40} labels={["Limited stage", "Extensive stage"]} lit={() => false} />}
      {at === 3 && <g>
        {["1", "2", "3", "4"].map((stage, index) => <g key={stage}>
          <rect x={34 + index * 66} y={150 - index * 30} width="56" height={30 + index * 30} rx="6" fill={index === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <W x={62 + index * 66} y={170 - index * 30} size={14} fill={index === 0 ? WHITE : TEXT} serif>{stage}</W>
        </g>)}
        <W x={62} y={136} size={10}>Up to 4cm</W>
      </g>}
      {at === 4 && <g>
        <Bubble x={160} y={34} text="Ask as many questions as you need" width={220} />
        {[{ l: "T", t: "Tumour" }, { l: "N", t: "Node" }, { l: "M", t: "Metastases" }].map((item, index) => <g key={item.l}>
          <circle cx={80 + index * 80} cy={110} r="26" fill={INK} /><W x={80 + index * 80} y={119} size={24} fill={WHITE} serif>{item.l}</W>
          <W x={80 + index * 80} y={156} size={10.5}>{item.t}</W>
        </g>)}
      </g>}
      <Cap>{["80 to 85 in 100 are non-small cell", "Adenocarcinoma is the most common", "Chemo is usually the first treatment", "Stage 1: no bigger than 4cm", "Tumour, node and metastases"][at]}</Cap>
    </svg>} />;
}

function LcCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const dots = [4, 3, 2, 1, 1];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="The check-ups after treatment" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five years of check-ups, closer together at first, with what happens at them">
      {dots.map((count, row) => <g key={row}>
        <W x={18} y={40 + row * 30} size={10} anchor="start">Year {row + 1}</W>
        <path d={`M68 ${36 + row * 30} H150`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />
        {Array.from({ length: count }, (_, index) => <circle key={index} cx={76 + index * 20} cy={36 + row * 30} r="6" fill={at === 1 ? INK : SOFT} />)}
      </g>)}
      {at === 0 && <g><Person x={210} y={150} scale={1.1} /><Bubble x={252} y={56} text="How are you?" width={104} /></g>}
      {at === 1 && <Box x={172} y={80} width={134} text="At least 5 years" lit />}
      {at === 2 && <Tags x={172} y={46} width={134} gap={34} labels={["An examination", "Blood tests, x-rays", "CT or PET-CT scan"]} lit={index => index === 0} />}
      {at === 3 && <Phone x={238} y={96} text="Any time" />}
      {at === 4 && <g><Person x={212} y={150} scale={1.1} /><Person x={266} y={150} scale={1.1} fill={SOFT} /><HeartShape x={239} y={74} size={34} fill={GOLD} /></g>}
      <Cap>{["A chance to raise any concerns", "Every few months, then once a year", "An examination, and sometimes tests", "No need to wait for your next visit", "It can help to tell someone close"][at]}</Cap>
    </svg>} />;
}

function LcWhatIf(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Coming back" title="Living alongside the worry" label="Recurrence" credit="Illustration: Rehyn. A picture of the idea, not anyone's own risk."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with a worry, the places check-ups look, symptoms to report and where to get help">
      <Person x={56} y={166} scale={1.4} fill={at === 4 ? INK : SOFT} />
      {at === 0 && <g><circle cx="94" cy="108" r="4" fill={SOFT} /><circle cx="114" cy="92" r="7" fill={SOFT} /><Cloud x={170} y={100} /><W x={216} y={88} size={26} serif>?</W></g>}
      {at === 1 && <g>
        {[68, 44, 20].map((r, index) => <circle key={r} cx="212" cy="98" r={r} fill={[WHITE, TINT, WHITE][index]} stroke={INK} strokeWidth="2" />)}
        <W x={212} y={102} size={10}>Local</W><W x={212} y={72} size={10}>Regional</W><W x={212} y={46} size={10}>Distant</W>
      </g>}
      {at === 2 && <Tags x={128} y={22} width={176} gap={32} labels={["A cough not going away", "Shortness of breath", "Coughing up blood", "Chest or shoulder pain", "Tired all the time"]} lit={() => false} />}
      {at === 3 && <Tags x={118} y={30} width={188} gap={36} labels={["Coughed up blood: NHS 111", "Struggling to breathe: 999", "Chest or back pain: 999", "Do not drive to A&E"]} lit={index => index === 1 || index === 2} />}
      {at === 4 && <Tags x={136} y={30} width={168} gap={36} labels={["Your recovery", "Talking about feelings", "Knowing your triggers", "What you enjoy"]} lit={() => true} />}
      <Cap>{["Worry is common, and often gets better", "Why regular check-ups matter", "Tell your team about new symptoms", "Struggling to breathe? Call 999", "Focus on what you can control"][at]}</Cap>
    </svg>} />;
}

function LcFan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const breeze = still ? undefined : "lib-why-pulse";
  return <MemoryBand props={props} state={s} tone="theme" kicker="Breathlessness" title="Breathing easier, one technique at a time" label="Breathlessness" credit="Illustration: Rehyn. Follow your own team's advice."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person sitting in a chair, with slow breathing, a fan and people who can help">
      <path d="M38 118 V186 M38 162 H98 V186" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Person x={68} y={146} scale={1.2} />
      {at === 1 && <circle cx="68" cy="154" r="6" fill={GOLD} />}
      {at === 0 && <Tags x={130} y={26} width={174} gap={36} labels={["After surgery", "After radiotherapy", "Anaemia or an infection", "Feeling anxious"]} lit={() => false} />}
      {at === 1 && <g>
        <path d="M124 80 C146 44, 168 44, 190 80 S234 116, 256 80 S278 44, 300 80" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <W x={212} y={146} size={10.5}>Slow tummy breathing</W>
      </g>}
      {at === 2 && <g>
        <circle cx="222" cy="92" r="30" fill={WHITE} stroke={INK} strokeWidth="3" />
        {[0, 120, 240].map(angle => <ellipse key={angle} cx="222" cy="78" rx="7" ry="14" fill={SOFT} transform={`rotate(${angle} 222 92)`} />)}
        <circle cx="222" cy="92" r="4" fill={INK} /><path d="M222 122 V160 M204 160 H240" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        {[96, 108, 120].map(y => <path key={y} d={`M186 ${y} H${y === 108 ? 98 : 104}`} stroke={GOLD} strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" className={breeze} />)}
        <W x={270} y={40} size={10.5}>Blow as you go</W>
      </g>}
      {at === 3 && <Tags x={130} y={26} width={174} gap={36} labels={["A breathing clinic", "Physiotherapist", "Occupational therapist", "A diary and a plan"]} lit={index => index < 3} />}
      {at === 4 && <Tags x={124} y={36} width={182} gap={38} labels={["New or painful: doctor now", "Worse, no doctor: A&E", "Chest pain: always 999"]} lit={index => index === 2} />}
      <Cap>{["The remaining lung usually adapts", "10 minutes, at least twice a day", "A fan of cool air across your face", "Ask your team to refer you", "Chest pain or hard to breathe: 999"][at]}</Cap>
    </svg>} />;
}

function LcRecharge(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const levels = [[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2], [0.25, 0.2, 0.3, 0.25, 0.2, 0.3, 0.25], [0.3, 0.6, 0.4, 0.7, 0.35, 0.55, 0.45], [0.45, 0.5, 0.45, 0.55, 0.5, 0.6, 0.55], [0.5, 0.55, 0.5, 0.6, 0.6, 0.65, 0.65]][at];
  const chair = (x: number) => <path d={`M${x - 10} 140 V170 M${x - 10} 158 H${x + 12} V170`} stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
  const walk = (x: number) => <g fill={INK}><ellipse cx={x - 6} cy={164} rx="5" ry="8" /><ellipse cx={x + 7} cy={150} rx="5" ry="8" /></g>;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tiredness" title="The tiredness that lingers" label="Fatigue" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of energy levels, slowly rising, with what helps">
      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => { const x = 34 + index * 38; return <g key={index}>
        <rect x={x} y="26" width="26" height="74" rx="5" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x={x + 3} y={97 - 68 * levels[index]} width="20" height={68 * levels[index]} rx="3" fill={at === 0 || at === 1 ? SOFT : INK} />
        <W x={x + 13} y={116} size={10}>{day}</W>
      </g>; })}
      {at === 0 && <Box x={70} y={140} width={180} text="Even with enough rest and sleep" />}
      {at === 1 && ["Cancer", "Treatment", "Anaemia", "Worry"].map((label, index) => <Box key={label} x={14 + index * 74} y={140} width={70} text={label} size={10} />)}
      {at === 2 && <Box x={80} y={140} width={160} text="Physiotherapy can help" lit />}
      {at === 3 && <g>{[60, 130, 200, 270].map((x, index) => <g key={x}>{index % 2 ? walk(x) : chair(x)}<W x={x} y={186} size={10}>{index % 2 ? "Walk" : "Rest"}</W></g>)}</g>}
      {at === 4 && <Squares x={17} y={142} count={11} filled={0} size={22} gap={26} labels={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]} />}
      <Cap>{["Exhausted even after rest and sleep", "Very tired for weeks after surgery", "Varies by day; for most it gets better", "Balance rest with gentle activity", "Score it from 0 to 10 in a diary"][at]}</Cap>
    </svg>} />;
}

function LcScar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const scarLit = at === 1 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your chest" title="What is normal after chest surgery" label="After chest surgery" credit="Illustration: Rehyn. A picture of the idea, not anyone's own body."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An outline of a chest with a scar on one side, and what is normal while it heals">
      <path d="M30 186 V100 C30 70, 46 56, 70 52 L80 32 H104 L114 52 C138 56, 154 70, 154 100 V186" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M134 82 C150 106, 150 134, 132 158" stroke={scarLit ? GOLD : SOFT} strokeWidth={scarLit ? 5 : 3.5} fill="none" strokeLinecap="round" strokeDasharray={at === 1 ? "3 6" : undefined} />
      {[94, 112, 130, 148].map(y => <path key={y} d={`M${y === 94 || y === 148 ? 136 : 140} ${y} l8 0`} stroke={SOFT} strokeWidth="2" />)}
      {at === 0 && <g><Clock x={204} y={74} r={22} hand={1.4} /><Pill x={268} y={74} /><W x={236} y={128} size={10.5}>Taken regularly</W></g>}
      {at === 1 && <g>
        <path d="M176 60 C210 66, 240 96, 300 112" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <W x={176} y={48} size={10} anchor="start">Nerve pain</W><W x={300} y={130} size={10} anchor="end">Over years</W>
        <Box x={180} y={146} width={116} text="A pain clinic" />
      </g>}
      {at === 2 && <Tags x={168} y={44} width={138} gap={36} labels={["Clear or white", "Yellow or green: tell", "Blood: tell at once"]} lit={index => index === 2} />}
      {at === 3 && <g><W x={236} y={84} size={20} serif>10 to 20cm</W><W x={236} y={106} size={10.5}>after open surgery</W><Box x={180} y={128} width={112} text="Keyhole: smaller" /></g>}
      {at === 4 && <Tags x={168} y={30} width={138} gap={36} labels={["High temperature", "Red, swollen wound", "Leg hot and sore", "Chest pain: 999"]} lit={index => index === 3} />}
      <Cap>{["Take painkillers regularly", "For most, eases over a couple of years", "Coughing up blood? Tell them at once", "Stitches out after 7 to 10 days", "Clot signs: call 999 or go to A&E"][at]}</Cap>
    </svg>} />;
}

function LcSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const blocks = ["Sit less", "Indoors", "Outside", "150 min"];
  const here = [3, 0, 3, 1, 2][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Getting active" title="Small steps back to strength" label="Getting active" credit="Illustration: Rehyn. Check with your own team before exercising."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Steps rising from sitting less to walking outside, with a person climbing them">
      {blocks.map((label, index) => { const x = 30 + index * 68, top = 150 - index * 30, on = index === here; return <g key={label}>
        <rect x={x} y={top} width="62" height={186 - top} rx="6" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x + 31} y={top + 19} size={10} fill={on ? WHITE : TEXT}>{label}</W>
      </g>; })}
      <circle cx={61 + here * 68} cy={128 - here * 30} r="9" fill={GOLD} stroke={INK} strokeWidth="2" />
      {at === 0 && <Tags x={20} y={14} width={124} gap={30} labels={["More energy", "Better mood", "Better sleep"]} lit={() => true} />}
      {at === 1 && <Bubble x={92} y={50} text="Ask a professional" width={130} />}
      {at === 2 && <g><W x={86} y={70} size={30} serif>150</W><W x={86} y={92} size={10.5}>minutes a week</W></g>}
      {at === 3 && <Bubble x={92} y={50} text="Rest, then pick up" width={130} />}
      {at === 4 && <Tags x={20} y={14} width={136} gap={30} labels={["Dizzy", "Chest pain", "Racing heart"]} lit={() => false} />}
      <Cap>{["Helps you recover from treatment", "Talk to a professional first", "Build up to 150 minutes a week", "Rest if you feel below par", "Stop and see a doctor straight away"][at]}</Cap>
    </svg>} />;
}

function LcClear(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const haze = [0.8, 0.6, 0.4, 0.25, 0.15][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Smoking" title="Stopping smoking, even now" label="Stopping smoking" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pair of lungs clearing, with what happens after stopping smoking">
      <Lungs x={86} y={44} scale={1.05} haze={haze} />
      {at === 0 && <Box x={170} y={76} width={134} text="Never too late" lit />}
      {at === 1 && <Tags x={168} y={44} width={138} gap={36} labels={["Helps treatment work", "Heal more quickly", "Fewer late effects"]} lit={() => true} />}
      {at === 2 && <g>
        <path d="M184 40 V150" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
        {["8 hours", "48 hours", "72 hours", "3 to 9 months"].map((label, index) => <g key={label}>
          <circle cx="184" cy={44 + index * 34} r="7" fill={index === 2 ? GOLD : INK} />
          <W x={198} y={48 + index * 34} size={10.5} anchor="start">{label}</W>
        </g>)}
      </g>}
      {at === 3 && <g><W x={236} y={92} size={36} serif>4x</W><W x={236} y={120} size={10}>with specialist support</W><Box x={180} y={136} width={112} text="Free NHS service" /></g>}
      {at === 4 && <Tags x={168} y={56} width={138} gap={38} labels={["E-cigarettes can help", "Support for 12 weeks"]} lit={() => false} />}
      <Cap>{["Many benefits happen straight away", "It may help treatment work better", "After 72 hours, breathing may ease", "4 times more likely with support", "It may take you a few tries"][at]}</Cap>
    </svg>} />;
}

function LcLittleOften(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Eating" title="Little and often when food feels hard" label="Eating" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day with three small meals and snacks between, and ways to eat well">
      <path d="M30 164 H290" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
      {[60, 160, 260].map(x => <g key={x}><circle cx={x} cy="164" r="13" fill={WHITE} stroke={at === 1 ? INK : SOFT} strokeWidth="3" /><circle cx={x} cy="164" r="5" fill={at === 1 ? GOLD : SOFT} /></g>)}
      {[110, 210].map(x => <circle key={x} cx={x} cy="164" r="5" fill={at === 1 ? INK : SOFT} />)}
      <W x={30} y={190} size={10} anchor="start">Morning</W><W x={290} y={190} size={10} anchor="end">Evening</W>
      {at === 0 && <Tags x={90} y={24} width={140} gap={34} labels={["The cancer", "Treatment", "Worry"]} lit={() => false} />}
      {at === 1 && <g><circle cx="160" cy="76" r="44" fill="none" stroke={SOFT} strokeWidth="3" strokeDasharray="6 5" /><path d="M130 46 L190 106 M190 46 L130 106" stroke={SOFT} strokeWidth="3" strokeLinecap="round" /><W x={160} y={136} size={10.5}>Not one big plateful</W></g>}
      {at === 2 && <g>
        <Tags x={22} y={36} width={130} gap={36} labels={["Butter, olive oil", "Grated cheese"]} lit={() => false} />
        <Tags x={168} y={36} width={130} gap={36} labels={["Eggs, fish, beans", "Milk, nuts, seeds"]} lit={() => true} />
      </g>}
      {at === 3 && <g>
        <path d="M84 74 H156 C156 104, 140 116, 120 116 C100 116, 84 104, 84 74 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
        {[104, 120, 136].map(x => <path key={x} d={`M${x} 64 q6 -8 0 -16 q-6 -8 0 -16`} stroke={SOFT} strokeWidth="3" fill="none" strokeLinecap="round" />)}
        <path d="M196 44 H232 L226 116 H202 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><path d="M199 70 H229" stroke={SOFT} strokeWidth="3" />
        <W x={120} y={136} size={10}>Soups, stews</W><W x={214} y={136} size={10}>Sips</W>
      </g>}
      {at === 4 && <g>
        <rect x="80" y="70" width="70" height="40" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M100 84 A15 15 0 0 1 130 84" stroke={INK} strokeWidth="3" fill="none" /><path d="M115 84 L122 78" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <Person x={220} y={110} scale={1.1} /><W x={220} y={136} size={10}>A dietitian</W>
      </g>}
      <Cap>{["Loss of appetite is very common", "Three small meals, snacks between", "Include protein in each meal", "Soft, moist food can be easier", "Your team can refer you to a dietitian"][at]}</Cap>
    </svg>} />;
}

function LcRights(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const items = ["Rights", "Changes", "Grant", "Benefits", "Advice"];
  const icon = (index: number, x: number, c: string) => {
    const y = 104;
    if (index === 0) return <path d={`M${x} ${y - 14} L${x + 12} ${y - 9} V${y + 1} C${x + 12} ${y + 9}, ${x + 6} ${y + 13}, ${x} ${y + 15} C${x - 6} ${y + 13}, ${x - 12} ${y + 9}, ${x - 12} ${y + 1} V${y - 9} Z`} fill="none" stroke={c} strokeWidth="2.5" strokeLinejoin="round" />;
    if (index === 1) return <g><rect x={x - 13} y={y - 11} width="26" height="24" rx="3" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x - 13} ${y - 3} H${x + 13} M${x - 6} ${y - 15} V${y - 8} M${x + 6} ${y - 15} V${y - 8}`} stroke={c} strokeWidth="2.5" /></g>;
    if (index === 2) return <g><circle cx={x} cy={y} r="13" fill="none" stroke={c} strokeWidth="2.5" /><W x={x} y={y + 6} size={15} fill={c} serif>£</W></g>;
    if (index === 3) return <g><path d={`M${x - 11} ${y - 8} H${x + 11} V${y + 12} H${x - 11} Z`} fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x - 7} ${y - 13} H${x + 7}`} stroke={c} strokeWidth="2.5" /><circle cx={x} cy={y + 3} r="4" fill={c} /></g>;
    return <g><rect x={x - 8} y={y - 14} width="16" height="28" rx="3" fill="none" stroke={c} strokeWidth="2.5" /><circle cx={x} cy={y + 9} r="1.8" fill={c} /></g>;
  };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and money" title="Your rights at work, and help with money" label="Work and money" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five tiles: your rights, changes at work, a grant, benefits and free advice">
      <path d="M20 140 H300" stroke={LINE} strokeWidth="5" strokeLinecap="round" />
      {items.map((item, index) => { const x = 40 + index * 60, on = at === index; return <g key={item} opacity={fade(on)}>
        <rect x={x - 25} y="79" width="50" height="50" rx="12" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, x, on ? WHITE : INK)}
        <W x={x} y={160} size={10}>{item}</W>
      </g>; })}
      <Box x={70} y={24} width={180} text={["Equality Act 2010", "A return-to-work plan", "Access to Work", "Statutory Sick Pay", "0808 808 00 00"][at]} lit />
      <Cap>{["Protected from the day of diagnosis", "A phased return, extra breaks, rest", "A grant you do not have to pay back", "Statutory Sick Pay: up to 28 weeks", "Free benefits checks from Macmillan"][at]}</Cap>
    </svg>} />;
}

function LcRibbon(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const walker = [110, 150, 190, 230, 270][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="When the finish line feels flat" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person walking on past a finish line, with what helps and where to get help">
      <path d="M20 186 H300" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
      <path d="M30 186 V116 M84 186 V116" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <path d="M30 126 L52 132 M62 130 L84 126" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
      <Person x={walker} y={172} scale={0.9} />
      {at === 0 && <Cloud x={150} y={96} />}
      {at === 1 && <g><Squares x={150} y={28} count={7} filled={7} size={16} gap={20} /><Squares x={150} y={50} count={7} filled={7} size={16} gap={20} /><W x={218} y={90} size={10.5}>2 weeks</W></g>}
      {at === 2 && <Tags x={140} y={16} width={160} gap={30} labels={["Small goals", "Talking to someone", "Being active"]} lit={() => true} />}
      {at === 3 && <g><Box x={130} y={30} width={176} text="NHS talking therapies" lit /><Box x={130} y={66} width={176} text="Macmillan: 0808 808 00 00" /></g>}
      {at === 4 && ["111", "116 123", "999"].map((sign, index) => <Box key={sign} x={110 + index * 66} y={50} width={60} text={sign} lit={index === 1} />)}
      <Cap>{["Things should improve with time", "Over 2 weeks? Talk to doctor or nurse", "Small, achievable goals", "Self-refer to NHS talking therapies", "Help is there, any time, day or night"][at]}</Cap>
    </svg>} />;
}

// ==== Melanoma ==============================================================================================

function MelLayers(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const cells = Array.from({ length: 9 }, (_, index) => 110 + index * 22);
  return <MemoryBand props={props} state={s} tone="theme" kicker="What melanoma is" title="Where melanoma starts, and why early counts" label="What melanoma is" credit="Illustration: Rehyn. A picture of the idea, not anyone's own skin."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A slice of skin with pigment cells along the bottom of its top layer">
      <path d="M20 104 Q60 98 100 104 T180 104 T260 104 T300 104 V128 H20 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="20" y="128" width="280" height="54" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <W x={26} y={121} size={10} anchor="start">Epidermis</W><W x={26} y={160} size={10} anchor="start">Dermis</W>
      {cells.map(x => <circle key={x} cx={x} cy="124" r="4.5" fill={at === 0 ? GOLD : SOFT} stroke={INK} strokeWidth="1" />)}
      {at === 0 && <Box x={80} y={34} width={190} text="Melanocytes make melanin" lit />}
      {at === 1 && <g><Sun x={60} y={44} /><path d="M84 60 L130 98 M92 50 L176 98 M74 70 L96 98" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" /><W x={230} y={52} size={10.5}>Sun and sunbeds</W></g>}
      {(at === 2 || at === 3) && <ellipse cx="160" cy="104" rx="20" ry="6" fill={INK} />}
      {at === 2 && <g>
        <path d="M134 90 H100 M106 84 L100 90 L106 96 M186 90 H220 M214 84 L220 90 L214 96" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <W x={160} y={46} size={10.5}>Grows across, then deeper</W><W x={160} y={64} size={10}>Superficial spreading</W>
      </g>}
      {at === 3 && <g><circle cx="160" cy="88" r="28" fill="none" stroke={INK} strokeWidth="4" /><path d="M180 68 L204 44" stroke={INK} strokeWidth="7" strokeLinecap="round" /><W x={84} y={40} size={10.5}>A new or changing mole</W></g>}
      <Cap>{["Pigment cells called melanocytes", "UV light is the most common cause", "Most common: superficial spreading", "Found early, it can be easier to treat"][at]}</Cap>
    </svg>} />;
}

function MelRuler(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const depth = [56, 100, 62, 116, 80][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Your stage" title="Reading your stage, layer by layer" label="Stage" credit="Illustration: Rehyn. A picture of the idea, not anyone's own results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Layers of skin with a ruler beside them, measuring how deep a melanoma grew">
      <rect x="68" y="30" width="108" height="20" fill={TINT} stroke={INK} strokeWidth="2" />
      <rect x="68" y="50" width="108" height="80" fill={WHITE} stroke={INK} strokeWidth="2" />
      <rect x="68" y="130" width="108" height="46" fill={TINT} stroke={LINE} strokeWidth="2" />
      <path d={`M104 30 C102 ${depth}, 140 ${depth}, 138 30 Z`} fill={GOLD} stroke={INK} strokeWidth="2" />
      <rect x="54" y="30" width="8" height="146" fill={WHITE} stroke={INK} strokeWidth="1.5" />
      {[{ y: 70, t: "1mm" }, { y: 90, t: "2mm" }, { y: 130, t: "4mm" }].map(mark => <g key={mark.t}><path d={`M54 ${mark.y} h12`} stroke={INK} strokeWidth="2" /><W x={48} y={mark.y + 4} size={9.5} anchor="end">{mark.t}</W></g>)}
      {at === 1 && <path d={`M158 34 V${depth - 4} M152 ${depth - 12} L158 ${depth - 4} L164 ${depth - 12}`} stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      {at === 0 && <g><Clock x={244} y={72} r={22} hand={2.4} /><W x={244} y={116} size={10.5}>Excision biopsy</W><W x={244} y={134} size={10}>about 2 weeks</W></g>}
      {at === 1 && <Tags x={188} y={30} width={118} gap={32} labels={["T1: 1mm or less", "T2: 1 to 2mm", "T3: 2 to 4mm", "T4: over 4mm"]} lit={index => index === 1} />}
      {at === 2 && <g>{["0", "1", "2", "3", "4"].map((stage, index) => <Box key={stage} x={190 + index * 23} y={70} width={20} height={28} text={stage} lit={index < 3} size={11} />)}<W x={246} y={122} size={10.5}>Not spread</W></g>}
      {at === 3 && <g>
        <path d="M200 56 C230 70, 250 90, 290 96" stroke={LINE} strokeWidth="3" fill="none" />
        {[[204, 58], [236, 76], [266, 92]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="8" fill={GOLD} stroke={INK} strokeWidth="2" />)}
        <Box x={196} y={124} width={104} text="BRAF test" lit />
      </g>}
      {at === 4 && <g><Person x={222} y={150} scale={1.1} /><Person x={276} y={150} scale={1.1} fill={SOFT} /><Doc x={226} y={30} width={46} height={64} /></g>}
      <Cap>{["Biopsy results: about 2 weeks", "Thickness in millimetres: T1 to T4", "Stages 1 and 2 have not spread", "Stage 3: nearby nodes; a BRAF test", "Bring someone to take notes"][at]}</Cap>
    </svg>} />;
}

function MelMagnifier(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const moles = [[42, 46, 5], [134, 40, 4], [124, 96, 6], [44, 130, 4], [102, 158, 5], [150, 150, 3.5]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="Check-ups that thin out over time" label="Follow-up" credit="Illustration: Rehyn. A picture of the idea, not anyone's own skin."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A patch of skin with moles, a scar and lymph nodes being checked">
      <rect x="20" y="22" width="148" height="160" rx="16" fill={TINT} stroke={SOFT} strokeWidth="2" />
      {moles.map(([x, y, r]) => <circle key={`${x}${y}`} cx={x} cy={y} r={r} fill={INK} opacity={at === 0 ? 1 : 0.5} />)}
      <path d="M64 74 H106" stroke={at === 1 ? GOLD : SOFT} strokeWidth="4" strokeLinecap="round" />{[72, 82, 92, 100].map(x => <path key={x} d={`M${x} 68 V80`} stroke={at === 1 ? GOLD : SOFT} strokeWidth="2" strokeLinecap="round" />)}
      {at === 0 && <g><circle cx="124" cy="96" r="22" fill="none" stroke={INK} strokeWidth="4" /><path d="M140 112 L156 128" stroke={INK} strokeWidth="7" strokeLinecap="round" /></g>}
      {at === 1 && <g><circle cx="85" cy="74" r="28" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" />{[[40, 160], [52, 168], [64, 162]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="5" fill={GOLD} stroke={INK} strokeWidth="1.5" />)}</g>}
      {at === 2 && <Tags x={182} y={44} width={124} gap={36} labels={["In situ: once", "1A: 6 monthly", "3 and 4: 3 monthly"]} lit={() => false} />}
      {at === 3 && <Phone x={244} y={96} text="Any time" />}
      {at === 4 && <g><Person x={220} y={150} scale={1.1} /><Person x={274} y={150} scale={1.1} fill={SOFT} /><Bubble x={258} y={58} text="Talking helps" width={96} /></g>}
      {at === 1 && <W x={244} y={100} size={10.5}>Scar and nodes</W>}
      {at === 0 && <W x={244} y={100} size={10.5}>Skin examined</W>}
      <Cap>{["Your skin is examined carefully", "Your scar and nearest lymph nodes", "How often depends on your stage", "No need to wait for your next one", "Talking about how you feel may help"][at]}</Cap>
    </svg>} />;
}

function MelRings(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Coming back" title="The worry, and what to watch" label="Recurrence" credit="Illustration: Rehyn. A picture of the idea, not anyone's own risk."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A scar with rings around it for the nearby skin and lymph nodes, and ways to check">
      <circle cx="86" cy="104" r="70" fill={TINT} stroke={at === 2 ? INK : SOFT} strokeWidth="2" />
      <circle cx="86" cy="104" r="38" fill={WHITE} stroke={at === 2 ? INK : SOFT} strokeWidth="2" />
      <path d="M64 104 H108" stroke={INK} strokeWidth="4" strokeLinecap="round" />{[72, 82, 92, 102].map(x => <path key={x} d={`M${x} 98 V110`} stroke={INK} strokeWidth="2" strokeLinecap="round" />)}
      {at === 0 && <path d="M226 100 l18 18 l36 -40" stroke={GOLD} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      {at === 1 && <g>{[[58, 126], [116, 84], [102, 128]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="2.5" fill={SOFT} />)}<Bubble x={238} y={70} text="Your own risk" width={110} /><Person x={222} y={156} scale={1.1} /></g>}
      {at === 2 && <g>
        {[[140, 54], [150, 66]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="6" fill={GOLD} stroke={INK} strokeWidth="1.5" />)}
        <Tags x={180} y={40} width={124} gap={36} labels={["At the scar", "Nearby skin", "Lymph nodes"]} lit={() => true} />
      </g>}
      {at === 3 && <g>
        <path d="M214 36 H262 V52" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M248 52 H276 L270 62 H254 Z" fill={INK} />
        {[[252, 78], [262, 92], [272, 80], [258, 110], [270, 124]].map(([x, y]) => <path key={`${x}${y}`} d={`M${x} ${y} v8`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
        <W x={262} y={156} size={10.5}>In the shower</W>
      </g>}
      {at === 4 && <Tags x={176} y={36} width={130} gap={36} labels={["Your recovery", "Your feelings", "Your triggers"]} lit={() => true} />}
      <Cap>{["For many, it never comes back", "Your team will explain your own risk", "Scar, nearby skin, or lymph nodes", "Check your nodes in the shower", "Focus on what you can control"][at]}</Cap>
    </svg>} />;
}

function MelExcision(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stitches = Array.from({ length: 6 }, (_, index) => 58 + index * 14);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Surgery" title="Healing well after melanoma surgery" label="Surgery" credit="Illustration: Rehyn. A picture of the idea, not anyone's own skin."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A patch of skin with a closed wound, a graft and a scar fading over time">
      <rect x="20" y="30" width="140" height="146" rx="16" fill={TINT} stroke={SOFT} strokeWidth="2" />
      {at !== 1 && at !== 3 && <g>
        <path d="M50 104 C70 84, 120 84, 140 104 C120 124, 70 124, 50 104 Z" fill="none" stroke={SOFT} strokeWidth="2" strokeDasharray="4 4" />
        <path d="M56 104 H134" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        {stitches.map(x => <path key={x} d={`M${x} 97 V111`} stroke={INK} strokeWidth="2.5" strokeLinecap="round" />)}
      </g>}
      {at === 1 && <g><rect x="56" y="74" width="68" height="60" rx="6" fill={WHITE} stroke={GOLD} strokeWidth="3" strokeDasharray="6 4" /><W x={90} y={108} size={10}>Graft</W></g>}
      {at === 3 && [0, 1, 2].map(index => <path key={index} d={`M50 ${66 + index * 40} H130`} stroke={INK} strokeWidth="5" strokeLinecap="round" opacity={1 - index * 0.35} />)}
      {at === 0 && <Tags x={176} y={56} width={130} gap={38} labels={["Local anaesthetic", "Usually small"]} lit={() => false} />}
      {at === 1 && <g><Squares x={178} y={78} count={7} filled={5} size={14} gap={18} labels={["1", "2", "3", "4", "5", "6", "7"]} /><W x={240} y={120} size={10.5}>days to connect</W></g>}
      {at === 2 && <Tags x={170} y={56} width={136} gap={38} labels={["Red or sore: your GP", "Bleeding worse: A&E"]} lit={index => index === 1} />}
      {at === 3 && <g><W x={240} y={70} size={10.5}>Red at first</W><path d="M240 80 V122 M234 114 L240 122 L246 114" stroke={SOFT} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /><W x={240} y={142} size={10.5}>Paler in time</W></g>}
      {at === 4 && <Tags x={176} y={56} width={130} gap={38} labels={["A drain", "Physio exercises"]} lit={() => true} />}
      <Cap>{["Usually a small operation, numbed", "Grafts connect in about 5 to 7 days", "Stitches out after 5 to 14 days", "Scars get paler over time", "A physio shows you exercises"][at]}</Cap>
    </svg>} />;
}

function MelKey(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const cell = (x: number, y: number) => <path d={`M${x - 20} ${y - 4} L${x - 8} ${y - 20} L${x + 10} ${y - 18} L${x + 22} ${y - 2} L${x + 14} ${y + 18} L${x - 6} ${y + 20} L${x - 20} ${y + 8} Z`} fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Drug treatments" title="Drugs that help the body fight back" label="Immunotherapy and targeted drugs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An immune cell switched on to attack a cancer cell, and tablets for a BRAF change">
      {at === 0 && <g>
        <circle cx="64" cy="94" r="30" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="64" cy="94" r="10" fill={SOFT} />
        <path d="M100 94 H136 M128 86 L136 94 L128 102" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {cell(166, 94)}
        <Pill x={260} y={94} /><W x={260} y={126} size={10}>BRAF</W>
        <W x={112} y={150} size={10.5}>Immunotherapy</W><W x={260} y={150} size={10.5}>Targeted</W>
      </g>}
      {at === 1 && <g>
        <Box x={30} y={80} width={100} text="Surgery" />
        <path d="M138 94 H176 M168 86 L176 94 L168 102" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <Box x={186} y={80} width={110} text="Adjuvant drugs" lit />
      </g>}
      {at === 2 && <g>
        {Array.from({ length: 100 }, (_, index) => <circle key={index} cx={30 + (index % 10) * 13} cy={36 + Math.floor(index / 10) * 13} r="5" fill={index < 40 ? INK : index < 50 ? GOLD : WHITE} stroke={INK} strokeWidth="1" />)}
        <W x={236} y={84} size={11}>A BRAF change</W><W x={236} y={102} size={10}>can mean targeted drugs</W>
      </g>}
      {at === 3 && <g>
        <Drip x={90} y={64} lit /><W x={90} y={146} size={10.5}>A drip, in cycles</W>
        <Pill x={226} y={76} /><Pill x={246} y={100} rotate={20} /><W x={236} y={146} size={10.5}>Tablets, every day</W>
      </g>}
      {at === 4 && <g><Pill x={70} y={70} /><Pill x={92} y={100} rotate={-20} /><Tags x={150} y={40} width={154} gap={36} labels={["Contraception", "Other medicines", "No grapefruit"]} lit={() => false} /></g>}
      <Cap>{["Two kinds: immunotherapy, targeted", "Adjuvant: lowering the risk of return", "BRAF change: about 40 to 50 in 100", "A drip in cycles, or daily tablets", "Tell your team about other medicines"][at]}</Cap>
    </svg>} />;
}

function Mel24Hour(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Side effects" title="Know when to call, day or night" label="Side effects" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A phone with the 24-hour number, and the side effects to report">
      <Phone x={160} y={96} text="24 hours" lit={at !== 4} />
      {at === 0 && <Bubble x={244} y={40} text="Tell your team" width={110} />}
      {at === 1 && <g><rect x="212" y="70" width="90" height="56" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M212 88 H302" stroke={INK} strokeWidth="2" /><W x={257} y={84} size={9.5}>Alert card</W><path d="M224 102 H290 M224 114 H270" stroke={SOFT} strokeWidth="3" strokeLinecap="round" /></g>}
      {at === 2 && <g><Tags x={14} y={60} width={104} gap={36} labels={["Tiredness", "A rash"]} lit={() => false} /><Tags x={202} y={60} width={104} gap={36} labels={["Diarrhoea", "High temperature"]} lit={index => index === 1} /></g>}
      {at === 3 && <g><Tags x={14} y={48} width={104} gap={36} labels={["Diarrhoea", "Breathless", "Spreading rash"]} lit={() => false} /><Box x={202} y={80} width={104} text="Chest pain: 999" lit /></g>}
      {at === 4 && <g><Tags x={202} y={40} width={104} gap={36} labels={["Pace yourself", "Short walks", "SPF 30, a hat"]} lit={() => true} /></g>}
      <Cap>{["Do not treat side effects yourself", "Keep your alert card with you", "High temperature? Call straight away", "Chest pain or can't breathe: 999", "Pace yourself, and protect your skin"][at]}</Cap>
    </svg>} />;
}

function MelLymph(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const nodes = [[70, 66], [52, 82], [88, 82], [62, 132], [78, 132]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Swelling" title="Swelling after lymph node surgery" label="Lymphoedema" credit="Illustration: Rehyn. A picture of the idea, not anyone's own body."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A figure with lymph nodes at the neck, armpits and groin, and ways to lower the risk of swelling">
      <circle cx="70" cy="42" r="14" fill={INK} />
      <path d="M48 64 H92 V136 H48 Z" fill={INK} />
      <path d="M48 70 L30 128 M92 70 L110 128 M58 136 V184 M82 136 V184" stroke={INK} strokeWidth="11" strokeLinecap="round" />
      {at === 0 && <path d="M30 110 C40 90, 50 84, 60 90 M110 110 C100 90, 90 84, 80 90" stroke={TINT} strokeWidth="2.5" strokeDasharray="4 4" fill="none" />}
      {(at === 1 || at === 0) && nodes.map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="5" fill={at === 1 ? GOLD : WHITE} stroke={WHITE} strokeWidth="1.5" />)}
      {at === 0 && <g>{[[210, 70], [234, 92], [258, 70], [222, 116], [250, 120]].map(([x, y]) => <path key={x + y} d={`M${x} ${y - 10} C${x - 8} ${y}, ${x - 7} ${y + 8}, ${x} ${y + 8} C${x + 7} ${y + 8}, ${x + 8} ${y}, ${x} ${y - 10} Z`} fill={TINT} stroke={INK} strokeWidth="2" />)}<W x={234} y={154} size={10.5}>Lymph fluid</W></g>}
      {at === 1 && <Tags x={170} y={40} width={136} gap={36} labels={["Neck", "Armpit", "Groin"]} lit={() => true} />}
      {at === 2 && <Tags x={170} y={40} width={136} gap={36} labels={["Clothes feel tighter", "Heavy or full", "Aching"]} lit={() => false} />}
      {at === 3 && <Tags x={170} y={40} width={136} gap={36} labels={["Moisturise", "Gardening gloves", "Keep active"]} lit={() => true} />}
      {at === 4 && <Tags x={156} y={48} width={150} gap={38} labels={["Red or warm: your GP", "Very unwell: 999"]} lit={index => index === 1} />}
      <Cap>{["A build-up of lymph fluid", "Armpit, groin or neck nodes", "Clothes or jewellery feel tighter", "Protect the skin; keep active", "Cellulitis signs: GP straight away"][at]}</Cap>
    </svg>} />;
}

function MelShade(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const point = (t: number) => [160 - 120 * Math.cos(Math.PI * t), 150 - 110 * Math.sin(Math.PI * t)];
  const [sx, sy] = point(at === 1 ? 0.5 : 0.28);
  const arc = (a: number, b: number) => { const [x1, y1] = point(a), [x2, y2] = point(b); return `M${x1} ${y1} A120 110 0 0 1 ${x2} ${y2}`; };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sun safety" title="Enjoying the sun, safely, from now on" label="Sun safety" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The sun crossing the sky, with shade, clothing and sun cream">
      <path d={arc(0, 1)} stroke={LINE} strokeWidth="4" fill="none" strokeDasharray="3 8" strokeLinecap="round" />
      <path d="M24 150 H296" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
      {at === 1 && <g><path d={arc(0.36, 0.64)} stroke={INK} strokeWidth="9" fill="none" strokeLinecap="round" /><W x={point(0.36)[0] - 26} y={point(0.36)[1] + 4} size={10}>11am</W><W x={point(0.64)[0] + 24} y={point(0.64)[1] + 4} size={10}>3pm</W></g>}
      <Sun x={sx} y={sy} r={14} className={still ? undefined : "lib-why-pulse"} />
      {at === 0 && <Cloud x={sx - 20} y={sy + 20} fill={WHITE} />}
      {at === 0 && <W x={190} y={126} size={10.5}>Even when cloudy</W>}
      {at === 1 && <g><path d="M126 128 C126 108, 194 108, 194 128 M112 130 H208" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" /></g>}
      {at === 2 && <g><rect x="138" y="70" width="44" height="72" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="148" y="58" width="24" height="14" rx="3" fill={INK} /><W x={160} y={100} size={12}>SPF</W><W x={160} y={118} size={12}>30</W><W x={234} y={110} size={14} fill={GOLD}>★★★★</W><W x={234} y={130} size={10}>UVA</W></g>}
      {at === 3 && <g>{Array.from({ length: 8 }, (_, index) => <ellipse key={index} cx={88 + index * 20} cy={126} rx="8" ry="5" fill={index < 6 ? INK : SOFT} />)}<W x={160} y={106} size={10.5}>6 to 8 teaspoons</W></g>}
      {at === 4 && <g><rect x="112" y="108" width="96" height="22" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M118 100 H202" stroke={SOFT} strokeWidth="4" strokeLinecap="round" /><path d="M108 88 L212 140" stroke={GOLD} strokeWidth="5" strokeLinecap="round" /></g>}
      <Cap>{["You can burn in the UK, even if cloudy", "Shade between 11am and 3pm", "At least SPF 30 and 4 stars UVA", "Reapply every 2 hours", "Never use a sunbed or sunlamp"][at]}</Cap>
    </svg>} />;
}

function MelAbcde(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const xs = [40, 100, 160, 220, 280];
  const words = ["Uneven", "Jagged", "Colours", "Over 6mm", "Changing"];
  const mole = (index: number, x: number) => {
    const y = 78;
    if (index === 0) return <path d={`M${x - 14} ${y + 2} C${x - 16} ${y - 14}, ${x + 2} ${y - 16}, ${x + 6} ${y - 8} C${x + 18} ${y - 4}, ${x + 12} ${y + 14}, ${x - 2} ${y + 12} C${x - 10} ${y + 12}, ${x - 13} ${y + 8}, ${x - 14} ${y + 2} Z`} fill={INK} />;
    if (index === 1) return <path d={`M${x} ${y - 15} L${x + 5} ${y - 8} L${x + 14} ${y - 9} L${x + 10} ${y} L${x + 15} ${y + 8} L${x + 5} ${y + 9} L${x} ${y + 15} L${x - 6} ${y + 8} L${x - 15} ${y + 7} L${x - 10} ${y} L${x - 14} ${y - 9} L${x - 5} ${y - 8} Z`} fill={INK} />;
    if (index === 2) return <g><circle cx={x} cy={y} r="14" fill={INK} /><circle cx={x + 4} cy={y - 3} r="7" fill={GOLD} /><circle cx={x - 6} cy={y + 6} r="4" fill={SOFT} /></g>;
    if (index === 3) return <g><circle cx={x} cy={y} r="15" fill={INK} /><path d={`M${x - 15} ${y + 24} H${x + 15} M${x - 15} ${y + 20} V${y + 28} M${x + 15} ${y + 20} V${y + 28}`} stroke={TEXT} strokeWidth="2" /></g>;
    return <g><circle cx={x} cy={y} r="8" fill={INK} /><circle cx={x} cy={y} r="15" fill="none" stroke={INK} strokeWidth="2" strokeDasharray="4 4" /></g>;
  };
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Skin checks" title="Your monthly skin check, A to E" label="Skin checks" credit="Illustration: Rehyn. A picture of the idea, not anyone's own skin."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five moles for the ABCDE checklist, with when and how to check">
      {xs.map((x, index) => <g key={x} opacity={at === 1 ? 1 : 0.5}>
        <circle cx={x} cy={30} r="12" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={35} size={12} fill={at === 1 ? WHITE : TEXT}>{"ABCDE"[index]}</W>
        {mole(index, x)}
      </g>)}
      {at === 0 && <Squares x={22} y={140} count={12} filled={12} size={18} gap={23.3} labels={["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]} />}
      {at === 1 && xs.map((x, index) => <W key={x} x={x} y={130} size={10}>{words[index]}</W>)}
      {at === 2 && <g>
        <path d="M90 186 V150 C90 130, 130 130, 130 150 V186" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="98" y="142" width="24" height="26" rx="8" fill={TINT} stroke={INK} strokeWidth="2" /><path d="M110 143 V167" stroke={INK} strokeWidth="4" />
        <Tags x={160} y={126} width={140} gap={32} labels={["Bleeding or itchy", "Palms and soles too"]} lit={() => false} />
      </g>}
      {at === 3 && <g>
        <rect x="70" y="118" width="40" height="68" rx="18" fill={TINT} stroke={INK} strokeWidth="3" />
        <circle cx="200" cy="140" r="18" fill={TINT} stroke={INK} strokeWidth="3" /><path d="M212 154 L228 180" stroke={INK} strokeWidth="6" strokeLinecap="round" />
        <W x={90} y={110} size={10}>Full-length</W><W x={250} y={140} size={10} anchor="start">Hand</W>
      </g>}
      {at === 4 && <g><Phone x={100} y={146} text="Your nurse" /><Bubble x={222} y={140} text="Gets easier" width={110} /></g>}
      <Cap>{["Check at least once a month", "Shape, border, colour, size, change", "Nail changes? GP straight away", "Good light, and a full-length mirror", "Checking gets easier with time"][at]}</Cap>
    </svg>} />;
}

function MelYear(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const cx = 88, cy = 104, r = 66;
  const slice = (index: number) => {
    const a = (-90 + index * 30) * Math.PI / 180, b = (-60 + index * 30) * Math.PI / 180;
    return `M${cx} ${cy} L${cx + r * Math.cos(a)} ${cy + r * Math.sin(a)} A${r} ${r} 0 0 1 ${cx + r * Math.cos(b)} ${cy + r * Math.sin(b)} Z`;
  };
  const winter = (index: number) => (index >= 9 || index <= 1 ? 1 : index === 2 ? 0.5 : 0);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Vitamin D" title="Vitamin D without the sunbathing" label="Vitamin D" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year wheel with the autumn and winter months marked, and sources of vitamin D">
      {Array.from({ length: 12 }, (_, index) => <path key={index} d={slice(index)} fill={at === 3 && winter(index) ? INK : WHITE} fillOpacity={at === 3 && winter(index) ? winter(index) : 1} stroke={LINE} strokeWidth="2" />)}
      {Array.from({ length: 12 }, (_, index) => { const a = (-75 + index * 30) * Math.PI / 180; return <W key={index} x={cx + 52 * Math.cos(a)} y={cy + 52 * Math.sin(a) + 4} size={9.5} fill={at === 3 && winter(index) === 1 ? WHITE : TEXT}>{"JFMAMJJASOND"[index]}</W>; })}
      <circle cx={cx} cy={cy} r="26" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={cx} y={cy + 5} size={13} serif>D</W>
      {at === 0 && <Tags x={176} y={40} width={130} gap={36} labels={["Bones", "Teeth", "Muscles"]} lit={() => true} />}
      {at === 1 && <g><rect x="228" y="34" width="22" height="76" rx="11" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="232" y="70" width="14" height="36" rx="7" fill={GOLD} /><W x={239} y={134} size={10.5}>Vitamin D level</W></g>}
      {at === 2 && <Tags x={176} y={30} width={130} gap={32} labels={["Oily fish", "Red meat", "Egg yolks", "Fortified foods"]} lit={() => false} />}
      {at === 3 && <g><rect x="214" y="58" width="50" height="66" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="220" y="44" width="38" height="14" rx="3" fill={INK} /><W x={239} y={88} size={12} serif>10</W><W x={239} y={106} size={9.5}>mcg</W><W x={239} y={146} size={10}>October to March</W></g>}
      <Cap>{["For strong bones, teeth and muscles", "A blood test for your vitamin D level", "Oily fish, red meat and egg yolks", "10 micrograms a day, autumn and winter"][at]}</Cap>
    </svg>} />;
}

function MelBench(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const page = (x: number) => <g><rect x={x} y="120" width="44" height="46" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x} y="120" width="44" height="12" rx="4" fill={INK} /><circle cx={x + 22} cy="150" r="6" fill={GOLD} /></g>;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Worry" title="Living with the worry between check-ups" label="Worry" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path between two appointments, with a bench to talk and signs to help">
      {page(16)}{page(260)}
      <path d="M60 172 C110 186, 210 186, 260 172" stroke={LINE} strokeWidth="8" fill="none" strokeLinecap="round" />
      {at === 0 && <g><Person x={160} y={170} scale={0.9} fill={SOFT} /><Cloud x={120} y={110} /></g>}
      {at === 1 && <Tags x={90} y={22} width={140} gap={32} labels={["Write it down", "Time to relax", "What you enjoy"]} lit={() => true} />}
      {at === 2 && <g><path d="M112 150 H208 M118 150 V170 M202 150 V170 M112 136 H208" stroke={INK} strokeWidth="4" strokeLinecap="round" /><Person x={140} y={136} scale={0.8} /><Person x={180} y={136} scale={0.8} fill={SOFT} /><Box x={86} y={30} width={148} text="0808 801 0777" lit /></g>}
      {at === 3 && <g><Person x={160} y={160} scale={0.9} /><Bubble x={176} y={60} text="Cancer team or GP" width={140} /></g>}
      {at === 4 && <g>{["111", "116 123", "999"].map((sign, index) => <Box key={sign} x={74 + index * 60} y={30} width={54} text={sign} lit={index === 1} />)}<Box x={100} y={70} width={120} text="Text SHOUT 85258" /></g>}
      <Cap>{["Worry between visits is natural", "Writing feelings down can help", "Melanoma Focus nurses: 0808 801 0777", "Too much? Talk to your team or GP", "Samaritans: 116 123, day or night"][at]}</Cap>
    </svg>} />;
}

// ==== Head and neck cancer ==================================================================================

/** A head and neck seen from the side, facing right, from x 36 to 162 and down to the bottom of the picture. */
const HEAD = "M64 186 V152 C44 140, 36 112, 40 86 C44 50, 74 26, 106 28 C134 30, 152 50, 152 74 L162 96 L152 100 L154 112 L148 116 L150 128 C150 138, 140 142, 128 140 H120 V152 L122 186";
const Head = ({ fill = WHITE }: { fill?: string }) => <path d={HEAD} fill={fill} stroke={INK} strokeWidth="3" strokeLinejoin="round" />;

function HnMask(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What you had" title="Each treatment, and the job it did" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head and neck from the side, with surgery, a radiotherapy mask and drug treatments">
      <Head />
      {at === 1 && [[78, 160], [92, 170], [86, 148]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="5" fill={GOLD} stroke={INK} strokeWidth="1.5" />)}
      {at === 2 && <g opacity=".8">
        {[48, 60, 72, 84, 96, 108, 120, 132].map(y => <path key={y} d={`M84 ${y} H140`} stroke={GOLD} strokeWidth="1.5" />)}
        {[88, 100, 112, 124, 136].map(x => <path key={x} d={`M${x} 46 V136`} stroke={GOLD} strokeWidth="1.5" />)}
      </g>}
      {at === 0 && <Tags x={180} y={30} width={124} gap={34} labels={["Appearance", "Speech", "Swallowing", "Eating"]} lit={() => false} />}
      {at === 1 && <Tags x={180} y={40} width={124} gap={36} labels={["Simple or laser", "Neck dissection", "Reconstruction"]} lit={index => index === 1} />}
      {at === 2 && <g><Squares x={184} y={70} count={7} filled={4} size={14} gap={17} labels={["1", "2", "3", "4", "5", "6", "7"]} /><W x={244} y={108} size={10.5}>4 to 7 weeks</W><W x={244} y={140} size={10}>A mask made for you</W></g>}
      {at === 3 && <g><Drip x={204} y={60} lit /><Tags x={232} y={40} width={74} gap={34} labels={["Chemo", "Targeted", "Immune"]} lit={() => false} /></g>}
      {at === 4 && <Tags x={180} y={40} width={124} gap={36} labels={["Dentist", "Speech therapy", "Dietitian"]} lit={() => true} />}
      <Cap>{["Planned to spare speech and swallowing", "Surgery: one of the main treatments", "Chemoradiation over 4 to 7 weeks", "Immune effects: call straight away", "Side effects can take months to ease"][at]}</Cap>
    </svg>} />;
}

function HnZones(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const throat = [{ x: 112, y: 92, t: "Nasopharynx", ly: 56 }, { x: 104, y: 120, t: "Oropharynx", ly: 104 }, { x: 96, y: 150, t: "Hypopharynx", ly: 152 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Types" title="Mouth, throat or voice box" label="Types" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head and neck from the side, with the mouth, the three parts of the throat and the voice box">
      <Head />
      <path d="M112 84 C104 104, 100 130, 92 186" stroke={LINE} strokeWidth="10" fill="none" strokeLinecap="round" />
      <ellipse cx="134" cy="122" rx="12" ry="6" fill={at === 1 ? GOLD : at === 0 ? SOFT : TINT} stroke={INK} strokeWidth="1.5" />
      {throat.map(zone => <circle key={zone.t} cx={zone.x} cy={zone.y} r="8" fill={at === 2 ? GOLD : at === 0 ? SOFT : TINT} stroke={INK} strokeWidth="1.5" />)}
      <circle cx="112" cy="166" r="8" fill={at === 3 ? GOLD : at === 0 ? SOFT : TINT} stroke={INK} strokeWidth="1.5" />
      {at === 0 && <Tags x={180} y={30} width={126} gap={34} labels={["Mouth", "Throat", "Voice box", "Salivary glands"]} lit={() => false} />}
      {at === 1 && <g><path d="M146 120 L180 76" stroke={TEXT} strokeWidth="1.5" /><Tags x={182} y={44} width={124} gap={32} labels={["Gums", "Tongue", "Cheeks", "Lips"]} lit={() => true} /></g>}
      {at === 2 && throat.map(zone => <g key={zone.t}><path d={`M${zone.x + 8} ${zone.y} L182 ${zone.ly - 4}`} stroke={TEXT} strokeWidth="1.5" /><W x={186} y={zone.ly} size={10.5} anchor="start">{zone.t}</W></g>)}
      {at === 3 && <g>
        <path d="M120 166 L214 112" stroke={TEXT} strokeWidth="1.5" />
        <circle cx="252" cy="92" r="36" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M238 68 L248 116 M266 68 L256 116" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <W x={252} y={148} size={10.5}>2 vocal cords</W>
      </g>}
      {at === 4 && <g>
        {[[74, 162], [84, 174], [80, 148]].map(([x, y]) => <circle key={x + y} cx={x} cy={y} r="5" fill={GOLD} stroke={INK} strokeWidth="1.5" />)}
        <W x={244} y={150} size={10.5}>Lymph nodes</W><W x={244} y={166} size={10.5}>in the neck</W>
      </g>}
      <Cap>{["About 9 in 10: squamous cell", "Also called oral cancer", "The throat has 3 main parts", "The voice box holds 2 vocal cords", "Most often spreads to neck nodes"][at]}</Cap>
    </svg>} />;
}

function HnCheckups(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const visits = [...Array.from({ length: 12 }, (_, index) => 30 + (index + 1) * 52 / 6), ...Array.from({ length: 9 }, (_, index) => 134 + (index + 1) * 52 / 3)];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="Check-ups that space out over time" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five years of check-ups, every two months at first and further apart later">
      <path d="M30 140 H290" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {[1, 2, 3, 4].map(year => <path key={year} d={`M${30 + year * 52} 132 V148`} stroke={SOFT} strokeWidth="2" />)}
      {["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"].map((year, index) => <W key={year} x={56 + index * 52} y={166} size={10}>{year}</W>)}
      {visits.map(x => <circle key={x} cx={x} cy="140" r="3.5" fill={at === 1 ? INK : SOFT} />)}
      {at === 0 && <g><Person x={140} y={104} scale={1.1} /><Bubble x={210} y={36} text="How are you?" width={104} /></g>}
      {at === 1 && <g><W x={82} y={116} size={10.5}>Every 2 months</W><W x={212} y={116} size={10.5}>Every 3 to 6 months</W></g>}
      {at === 2 && <Tags x={90} y={14} width={140} gap={32} labels={["An examination", "Thyroid levels", "Dental check-ups"]} lit={index => index === 1} />}
      {at === 3 && <Tags x={70} y={14} width={180} gap={32} labels={["A new ulcer or neck lump", "Short of breath: NHS 111", "Gasping or choking: 999"]} lit={index => index === 2} />}
      {at === 4 && <g><Person x={136} y={104} scale={1.1} /><Person x={186} y={104} scale={1.1} fill={SOFT} /><HeartShape x={161} y={36} size={30} fill={GOLD} /></g>}
      <Cap>{["Your head and neck are examined", "Every 2 months for the first 2 years", "Thyroid levels are checked regularly", "No need to wait for your next visit", "It can help to tell someone close"][at]}</Cap>
    </svg>} />;
}

function HnVirus(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [80, 50, 0, 0, 0][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="HPV" title="A common virus, and what it means" label="HPV" credit="Illustration: Rehyn. A picture of the idea, not anyone's own risk."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hundred dots for how common HPV is, with tests, the vaccine and why cancer is not catching">
      {Array.from({ length: 100 }, (_, index) => <circle key={index} cx={30 + (index % 10) * 13} cy={36 + Math.floor(index / 10) * 13} r="5" fill={index < lit ? INK : WHITE} stroke={INK} strokeWidth="1" opacity={at >= 2 ? 0.35 : 1} />)}
      {at === 0 && <g><W x={240} y={70} size={11}>At some time</W><W x={240} y={100} size={10}>Usually cleared</W><W x={240} y={116} size={10}>within 2 years</W></g>}
      {at === 1 && <Tags x={176} y={56} width={130} gap={38} labels={["Tonsils", "Base of the tongue"]} lit={() => true} />}
      {at === 2 && <Tags x={176} y={48} width={130} gap={38} labels={["Tested for HPV", "Plans treatment"]} lit={index => index === 0} />}
      {at === 3 && <g><Person x={208} y={130} scale={1.1} /><Person x={268} y={130} scale={1.1} fill={SOFT} /><Box x={184} y={30} width={110} text="Not infectious" lit /></g>}
      {at === 4 && <g>
        <rect x="200" y="74" width="60" height="18" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M260 83 H286 M200 83 H186 M186 74 V92" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        <rect x="206" y="78" width="24" height="10" fill={GOLD} /><W x={236} y={124} size={10.5}>School year 8</W>
      </g>}
      <Cap>{["Around 80 in 100 get HPV at some time", "Around 50 in 100 oropharyngeal cancers", "Cells are tested for HPV", "Cancer is not catching", "Offered to all children aged 12 to 13"][at]}</Cap>
    </svg>} />;
}

function HnSwallow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const food = [[100, 156], [116, 162], [96, 160], [98, 170], [100, 176]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Swallowing" title="Learning to swallow again" label="Swallowing" credit="Illustration: Rehyn. Follow your own therapist's advice."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head and neck from the side, with the food pipe behind the windpipe, and steps back to eating">
      <Head />
      <path d="M134 122 C118 118, 102 124, 98 144 V186" stroke={LINE} strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M116 150 V186" stroke={TINT} strokeWidth="9" strokeLinecap="round" />
      <circle cx={food[0]} cy={food[1]} r="6" fill={at === 1 ? GOLD : INK} />
      {at === 1 && <path d="M100 146 L112 156" stroke={GOLD} strokeWidth="3" strokeDasharray="3 3" />}
      {at === 0 && <Tags x={176} y={36} width={130} gap={36} labels={["Weaker muscles", "Swelling", "Later: fibrosis"]} lit={() => false} />}
      {at === 1 && <g><Bubble x={236} y={64} text="A cough" width={90} /><Box x={178} y={110} width={126} text="Into the windpipe" /></g>}
      {at === 2 && <g><rect x="186" y="36" width="104" height="68" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={238} y={66} size={10.5}>Swallow test</W><W x={238} y={84} size={10}>painless</W><Squares x={190} y={124} count={5} filled={5} size={16} gap={20} /><W x={238} y={160} size={10}>Exercises, often</W></g>}
      {at === 3 && <g>
        <path d="M184 140 L214 120 L232 132 L262 96 L300 70" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="232" cy="132" r="6" fill={GOLD} /><W x={232} y={156} size={10} anchor="start">A setback</W>
        <W x={184} y={162} size={10} anchor="start">Soft</W><W x={300} y={58} size={10} anchor="end">More variety</W>
      </g>}
      {at === 4 && <g><Person x={206} y={150} scale={1} /><Person x={256} y={150} scale={1} fill={SOFT} /><Box x={180} y={40} width={124} text="07504 725 059" lit /></g>}
      <Cap>{["Treatment can weaken throat muscles", "Coughing as you eat can be a sign", "Exercises work best done regularly", "Setbacks are common before it improves", "Swallows 24/7 line: 07504 725 059"][at]}</Cap>
    </svg>} />;
}

function HnSaliva(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const drops = [2, 4, 4, 3, 3][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Dry mouth" title="Less saliva, more care for teeth" label="Dry mouth and teeth" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tooth and drops of water, with ways to ease a dry mouth and protect teeth">
      <path d="M44 62 C44 40, 66 34, 84 44 C102 34, 124 40, 124 62 C124 88, 114 100, 110 136 C108 154, 96 154, 94 136 L88 108 L80 136 C78 154, 66 154, 64 136 C60 100, 44 88, 44 62 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      {Array.from({ length: drops }, (_, index) => { const x = 40 + index * 30, y = 178; return <path key={index} d={`M${x} ${y - 14} C${x - 7} ${y - 4}, ${x - 7} ${y + 4}, ${x} ${y + 4} C${x + 7} ${y + 4}, ${x + 7} ${y - 4}, ${x} ${y - 14} Z`} fill={at === 0 ? SOFT : INK} />; })}
      {at === 4 && <g><circle cx="84" cy="80" r="22" fill="none" stroke={GOLD} strokeWidth="4" /><path d="M100 96 L114 110" stroke={GOLD} strokeWidth="6" strokeLinecap="round" /></g>}
      {at === 0 && <Tags x={160} y={40} width={146} gap={36} labels={["Eating", "Speaking", "Sleeping"]} lit={() => false} />}
      {at === 1 && <Tags x={160} y={40} width={146} gap={36} labels={["Frequent sips", "Ice cubes", "A lip salve"]} lit={() => true} />}
      {at === 2 && <Tags x={160} y={48} width={146} gap={38} labels={["Soups, casseroles", "Sauces and gravy"]} lit={() => true} />}
      {at === 3 && <Tags x={160} y={40} width={146} gap={36} labels={["High-fluoride paste", "Spit, do not rinse", "Every 3 to 6 months"]} lit={index => index === 2} />}
      {at === 4 && <Tags x={160} y={40} width={146} gap={36} labels={["Ulcers", "Red, white or dark", "Signs of decay"]} lit={() => false} />}
      <Cap>{["Treatment can affect salivary glands", "Carry water and take frequent sips", "Sips of water before each bite", "Dentist every 3 to 6 months", "Notice a change? Dentist straight away"][at]}</Cap>
    </svg>} />;
}

function HnVoice(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Speech" title="Finding your voice again" label="Speech and voice" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person speaking to a listener, with speech therapy and other ways to talk">
      <Person x={50} y={160} scale={1.3} /><Person x={270} y={160} scale={1.3} fill={SOFT} />
      {at === 3 && <circle cx="50" cy="132" r="5" fill={GOLD} stroke={WHITE} strokeWidth="2" />}
      {at === 0 && <Tags x={100} y={40} width={120} gap={34} labels={["Huskier", "Quieter", "More breathy"]} lit={() => false} />}
      {at === 1 && <g>{[{ x: 112, w: 40 }, { x: 160, w: 56 }, { x: 222, w: 72 }].map((bubble, index) => <Bubble key={index} x={bubble.x} y={92 - index * 22} text="· · ·" width={bubble.w} />)}</g>}
      {at === 2 && <g>
        <rect x="100" y="28" width="120" height="96" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={160} y={46} size={10}>Exercise chart</W>
        {Array.from({ length: 12 }, (_, index) => { const x = 116 + (index % 4) * 26, y = 64 + Math.floor(index / 4) * 20; return <path key={index} d={`M${x} ${y} l4 4 l8 -9`} stroke={index < 9 ? INK : LINE} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />; })}
      </g>}
      {at === 3 && <g><Box x={96} y={50} width={128} text="Voice prosthesis" lit /><W x={160} y={102} size={10}>A valve, and a finger</W></g>}
      {at === 4 && <g><rect x="116" y="40" width="88" height="66" rx="8" fill={INK} /><rect x="122" y="46" width="76" height="54" rx="4" fill={WHITE} /><W x={160} y={70} size={10}>Typed text</W><W x={160} y={86} size={10}>to speech</W></g>}
      <Cap>{["Your voice may sound different", "Often near normal as the area heals", "Make exercises part of your routine", "Most common: a voice prosthesis", "Quiet place, short sentences, rests"][at]}</Cap>
    </svg>} />;
}

function HnTube(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Eating" title="Eating enough, one step at a time" label="Eating" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate, a supplement drink, a feeding tube and a three-finger check, with ways to eat out">
      {(at === 0 || at === 1) && <g><circle cx="80" cy="106" r="54" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="80" cy="106" r="40" fill="none" stroke={LINE} strokeWidth="2" />
        {at === 1 ? [[64, 94], [96, 96], [78, 124]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="10" fill={GOLD} stroke={INK} strokeWidth="1.5" />) : <circle cx="80" cy="106" r="14" fill={SOFT} />}</g>}
      {at === 2 && <g><rect x="56" y="40" width="44" height="60" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M78 100 C78 140, 110 140, 120 170" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M64 60 H92" stroke={SOFT} strokeWidth="3" /></g>}
      {at === 3 && <g>
        <path d="M36 52 H132 M36 166 H132" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        {[52, 78, 104].map(x => <rect key={x} x={x} y="62" width="22" height="96" rx="11" fill={TINT} stroke={INK} strokeWidth="2.5" />)}
      </g>}
      {at === 4 && <g><circle cx="80" cy="70" r="24" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M60 82 L80 160 L100 82" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /></g>}
      {at === 0 && <Tags x={160} y={40} width={146} gap={36} labels={["A sore throat", "Less appetite", "Taste changes"]} lit={() => false} />}
      {at === 1 && <Tags x={160} y={40} width={146} gap={36} labels={["Small meals, often", "High in protein", "Supplement drinks"]} lit={() => true} />}
      {at === 2 && <Tags x={160} y={40} width={146} gap={36} labels={["Through the nose", "PEG or RIG tube", "Usually temporary"]} lit={index => index === 2} />}
      {at === 3 && <Tags x={160} y={56} width={146} gap={38} labels={["Only 1 or 2 fit?", "Tell your doctor"]} lit={index => index === 1} />}
      {at === 4 && <Tags x={160} y={40} width={146} gap={36} labels={["At home first", "Ask about the menu", "Restaurant Card"]} lit={index => index === 2} />}
      <Cap>{["Taste usually improves gradually", "Small meals often, high in protein", "A feeding tube is usually temporary", "Try fitting 3 fingers between teeth", "Start by eating with people you know"][at]}</Cap>
    </svg>} />;
}

function HnMirror(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Appearance" title="Getting used to a changed look" label="Appearance" credit="Illustration: Rehyn. A picture of the idea, not anyone's own face."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hand mirror, camouflage make-up and friends going out together">
      <path d="M72 128 L64 186 H96 L88 128" fill={INK} />
      <circle cx="80" cy="80" r="52" fill={TINT} stroke={INK} strokeWidth="4" />
      <Person x={80} y={112} scale={1.2} fill={SOFT} />
      {at === 0 && <path d="M90 76 C96 84, 98 92, 94 100" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="4 3" />}
      {at === 0 && <Tags x={160} y={48} width={146} gap={38} labels={["Swelling settles", "Scars fade over time"]} lit={() => false} />}
      {at === 1 && <Tags x={160} y={40} width={146} gap={36} labels={["Grief", "Fear", "Anger"]} lit={() => false} />}
      {at === 2 && <g><rect x="168" y="40" width="50" height="110" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="208" cy="98" r="3" fill={INK} /><Person x={248} y={150} scale={1} /><Person x={286} y={150} scale={1} fill={SOFT} /></g>}
      {at === 3 && <g><rect x="186" y="74" width="56" height="44" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="186" y="64" width="56" height="14" rx="5" fill={INK} /><path d="M262 120 L290 60" stroke={INK} strokeWidth="5" strokeLinecap="round" /><circle cx="292" cy="56" r="7" fill={GOLD} /><W x={240} y={146} size={10.5}>All skin tones</W></g>}
      {at === 4 && <Tags x={156} y={40} width={150} gap={36} labels={["Changing Faces", "Let's Face It", "Mouth Cancer Foundation"]} lit={() => true} />}
      <Cap>{["Swelling eases over a few months", "It takes time to get used to it", "First outings with someone close", "Camouflage make-up for all skin tones", "Support for any change in appearance"][at]}</Cap>
    </svg>} />;
}

function HnUnits(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Smoking and alcohol" title="Still worth stopping, even now" label="Smoking and alcohol" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A crossed-out cigarette and a glass, with help to stop and a week of alcohol units">
      <g opacity={at === 3 ? 0.4 : 1}><rect x="26" y="50" width="96" height="14" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="100" y="50" width="22" height="14" rx="3" fill={GOLD} /><path d="M30 34 L118 80" stroke={INK} strokeWidth="4" strokeLinecap="round" /></g>
      <g opacity={at === 2 ? 0.4 : 1}><path d="M54 112 H96 L90 176 H60 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><path d="M57 132 H93" stroke={SOFT} strokeWidth="3" /></g>
      {at === 0 && <Tags x={156} y={48} width={150} gap={38} labels={["Lowers the risk", "Helps recovery"]} lit={() => true} />}
      {at === 1 && <Tags x={156} y={40} width={150} gap={36} labels={["Dries the mouth", "Dental problems", "Jawbone blood supply"]} lit={() => false} />}
      {at === 2 && <g><Phone x={196} y={96} text="Quit app" /><W x={268} y={96} size={30} serif>4x</W><W x={268} y={118} size={10}>with support</W></g>}
      {at === 3 && <g>
        <Squares x={150} y={70} count={7} filled={0} size={18} gap={22} labels={["M", "T", "W", "T", "F", "S", "S"]} />
        {[0, 2, 4].map(day => <circle key={day} cx={159 + day * 22} cy={104} r="5" fill={GOLD} />)}
        <W x={226} y={138} size={10.5}>14 units over 3 or more days</W>
      </g>}
      {at === 4 && <Tags x={146} y={40} width={160} gap={36} labels={["Get advice first", "Severe symptoms: 999", "Drinkline 0300 123 1110"]} lit={index => index === 1} />}
      <Cap>{["It reduces the risk of it coming back", "Smoking dries and irritates the mouth", "4 times likelier to quit with support", "Not regularly over 14 units a week", "Severe withdrawal symptoms? Call 999"][at]}</Cap>
    </svg>} />;
}

function HnDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and money" title="Work, your rights and help with money" label="Work and money" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk with a laptop, a phone and a document, and the help that is there at work">
      <path d="M20 150 H300 M40 150 V186 M280 150 V186" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <g opacity={fade(at === 1 || at === 2)}><rect x="40" y="66" width="104" height="70" rx="6" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M30 146 H154" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        {at === 1 && <g><Squares x={50} y={84} count={5} filled={2} size={14} gap={18} /><W x={92} y={124} size={10}>Return plan</W></g>}
        {at === 2 && <g><path d="M54 84 H130 M54 98 H112" stroke={SOFT} strokeWidth="3" strokeLinecap="round" /><path d="M118 112 q6 6 0 12 M126 108 q10 10 0 20" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" /></g>}
      </g>
      <g opacity={fade(at === 2)}><rect x="170" y="98" width="28" height="48" rx="5" fill={INK} /><rect x="174" y="104" width="20" height="32" rx="2" fill={WHITE} /></g>
      <g opacity={fade(at === 0)}><Doc x={220} y={58} width={68} height={88} title="Equality Act" /></g>
      {at === 3 && <g><circle cx="184" cy="56" r="22" fill={GOLD} stroke={INK} strokeWidth="2.5" /><W x={184} y={64} size={20} serif>£</W></g>}
      {at === 4 && <Box x={56} y={24} width={208} text="Macmillan: 0808 808 00 00" lit />}
      {at === 0 && <W x={92} y={40} size={10.5}>From the day you are told</W>}
      <Cap>{["Cancer counts as a disability in law", "A flexible return-to-work plan", "Apps can turn typed text into speech", "Access to Work: nothing to pay back", "Free money advice from Macmillan"][at]}</Cap>
    </svg>} />;
}

function HnPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const sunY = [150, 128, 110, 92, 76][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="Finding your way after treatment ends" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Hills with the sun slowly rising, a bench to talk on and signs to help">
      <Sun x={250} y={sunY} r={18} />
      <path d="M0 160 C60 130, 120 140, 170 156 S270 150, 320 136 V186 H0 Z" fill={TINT} stroke={LINE} strokeWidth="2" />
      <path d="M40 186 C80 168, 120 168, 160 176" stroke={WHITE} strokeWidth="6" fill="none" strokeLinecap="round" />
      {at === 0 && <Person x={60} y={156} scale={0.9} />}
      {at === 1 && <g><Person x={60} y={156} scale={0.9} /><Cloud x={96} y={92} /></g>}
      {at === 2 && <g><Squares x={30} y={30} count={7} filled={7} size={16} gap={20} /><Squares x={30} y={52} count={7} filled={7} size={16} gap={20} /><W x={98} y={92} size={10.5}>2 weeks</W></g>}
      {at === 3 && <g><path d="M60 146 H140 M66 146 V160 M134 146 V160" stroke={INK} strokeWidth="4" strokeLinecap="round" /><Person x={84} y={136} scale={0.8} /><Person x={118} y={136} scale={0.8} fill={SOFT} /><Bubble x={130} y={48} text="Talk about it" width={110} /></g>}
      {at === 4 && <g>{["111", "116 123", "999"].map((sign, index) => <Box key={sign} x={20 + index * 62} y={30} width={56} text={sign} lit={index === 1} />)}<Box x={20} y={66} width={180} text="GP or nurse, straight away" /></g>}
      <Cap>{["It may take several months to recover", "Worry often gets better with time", "Low over 2 weeks? Tell doctor or nurse", "Talking means people can support you", "Samaritans: 116 123, any time"][at]}</Cap>
    </svg>} />;
}

export function SolidPieceView({ piece, ...props }: { piece: SolidPiece } & PieceProps) {
  switch (piece) {
    case "lc-plan": return <LcPlan {...props} />;
    case "lc-hundred": return <LcHundred {...props} />;
    case "lc-calendar": return <LcCalendar {...props} />;
    case "lc-what-if": return <LcWhatIf {...props} />;
    case "lc-fan": return <LcFan {...props} />;
    case "lc-recharge": return <LcRecharge {...props} />;
    case "lc-scar": return <LcScar {...props} />;
    case "lc-steps": return <LcSteps {...props} />;
    case "lc-clear": return <LcClear {...props} />;
    case "lc-little-often": return <LcLittleOften {...props} />;
    case "lc-rights": return <LcRights {...props} />;
    case "lc-ribbon": return <LcRibbon {...props} />;
    case "mel-layers": return <MelLayers {...props} />;
    case "mel-ruler": return <MelRuler {...props} />;
    case "mel-magnifier": return <MelMagnifier {...props} />;
    case "mel-rings": return <MelRings {...props} />;
    case "mel-excision": return <MelExcision {...props} />;
    case "mel-key": return <MelKey {...props} />;
    case "mel-24-hour": return <Mel24Hour {...props} />;
    case "mel-lymph": return <MelLymph {...props} />;
    case "mel-shade": return <MelShade {...props} />;
    case "mel-abcde": return <MelAbcde {...props} />;
    case "mel-year": return <MelYear {...props} />;
    case "mel-bench": return <MelBench {...props} />;
    case "hn-mask": return <HnMask {...props} />;
    case "hn-zones": return <HnZones {...props} />;
    case "hn-checkups": return <HnCheckups {...props} />;
    case "hn-virus": return <HnVirus {...props} />;
    case "hn-swallow": return <HnSwallow {...props} />;
    case "hn-saliva": return <HnSaliva {...props} />;
    case "hn-voice": return <HnVoice {...props} />;
    case "hn-tube": return <HnTube {...props} />;
    case "hn-mirror": return <HnMirror {...props} />;
    case "hn-units": return <HnUnits {...props} />;
    case "hn-desk": return <HnDesk {...props} />;
    case "hn-path": return <HnPath {...props} />;
  }
}
