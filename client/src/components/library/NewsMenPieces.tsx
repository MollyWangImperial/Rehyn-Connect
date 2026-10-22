import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { MEN_PIECES, type MenPiece } from "@/content/men-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Testicular, Penile and Thyroid cancer pages' own pieces (content/men-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Cancer & recovery pieces. Each is steered by the card's sections;
// pictures show ideas, calmly, and never anyone's own body, scans or results. Intimate topics are drawn as
// simple, abstract shapes and words only.

export const isMenPiece = (piece: NewsPiece): piece is MenPiece => (MEN_PIECES as readonly string[]).includes(piece);

const idea = "Illustration: Rehyn. A picture of the idea, not anyone's own body.";

/** The one-line caption for the chosen section. */
const Cap = ({ children }: { children: string }) => <W x={160} y={206} size={11.5}>{children}</W>;
/** A labelled box; `lit` fills it. */
const Box = ({ x, y, width, text, lit = false, height = 28, size = 10.5 }: { x: number; y: number; width: number; text: string; lit?: boolean; height?: number; size?: number }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x + width / 2} y={y + height / 2 + 4} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A row of small squares, the first `filled` of them filled. */
const Squares = ({ x, y, count, filled, size = 18, gap = 22, labels }: { x: number; y: number; count: number; filled: number; size?: number; gap?: number; labels?: string[] }) =>
  <g>{Array.from({ length: count }, (_, index) => <g key={index}>
    <rect x={x + index * gap} y={y} width={size} height={size} rx="4" fill={index < filled ? INK : WHITE} stroke={INK} strokeWidth="1.5" />
    {labels && <W x={x + index * gap + size / 2} y={y + size / 2 + 4} size={9.5} fill={index < filled ? WHITE : TEXT}>{labels[index]}</W>}
  </g>)}</g>;
/** A phone, centred on (x, y), with a short line on its screen. */
const Phone = ({ x, y, text, width = 60 }: { x: number; y: number; text?: string; width?: number }) =>
  <g>
    <rect x={x - width / 2} y={y - 40} width={width} height="80" rx="9" fill={INK} /><rect x={x - width / 2 + 5} y={y - 32} width={width - 10} height="58" rx="4" fill={WHITE} />
    {text && <W x={x} y={y + 2} size={10}>{text}</W>}<circle cx={x} cy={y + 33} r="2.5" fill={WHITE} />
  </g>;
/** A drip bag and its line, the bag centred on (x, y). */
const Drip = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 13} y={y - 20} width="26" height="32" rx="6" fill={INK} stroke={INK} strokeWidth="2.5" /><path d={`M${x} ${y + 12} V${y + 42}`} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 46} r="3.5" fill={INK} /></g>;
/** A sheet of paper with a title and a few lines. */
const Doc = ({ x, y, width = 70, height = 86, title }: { x: number; y: number; width?: number; height?: number; title?: string }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    {title && <W x={x + width / 2} y={y + 18} size={9.5}>{title}</W>}
    {[0, 1, 2, 3].map(line => <path key={line} d={`M${x + 10} ${y + 32 + line * 14} H${x + width - 10}`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
  </g>;
/** A blood tube centred on (x, y), with an optional short label on it. */
const Tube = ({ x, y, label, fill = SOFT }: { x: number; y: number; label?: string; fill?: string }) =>
  <g><rect x={x - 11} y={y - 40} width="22" height="12" rx="3" fill={INK} /><rect x={x - 9} y={y - 28} width="18" height="62" rx="9" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <rect x={x - 6} y={y} width="12" height="31" rx="6" fill={fill} />{label && <W x={x} y={y - 8} size={10}>{label}</W>}</g>;
/** A sun, centred on (x, y). */
const Sun = ({ x, y, r = 16 }: { x: number; y: number; r?: number }) =>
  <g><circle cx={x} cy={y} r={r} fill={GOLD} />{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 6) * Math.cos(a)} ${y + (r + 6) * Math.sin(a)} L${x + (r + 13) * Math.cos(a)} ${y + (r + 13) * Math.sin(a)}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}</g>;
/** A small cloud, its left end at (x, y). */
const Cloud = ({ x, y }: { x: number; y: number }) =>
  <path d={`M${x} ${y} a20 20 0 0 1 10 -36 a26 26 0 0 1 48 -6 a20 20 0 0 1 24 26 a18 18 0 0 1 -8 16 Z`} fill={TINT} stroke={SOFT} strokeWidth="2" />;
/** Three help signs on a post, the last one lit. */
const Signs = ({ x, y, width, labels }: { x: number; y: number; width: number; labels: string[] }) =>
  <g><path d={`M${x + width / 2} ${y - 6} V186`} stroke={INK} strokeWidth="4" strokeLinecap="round" />
    {labels.map((label, index) => <Box key={label} x={x} y={y + index * 42} width={width} text={label} lit={index === labels.length - 1} />)}</g>;
/** A thyroid gland: two lobes joined in the middle, centred on (x, y). */
const Butterfly = ({ x, y, scale = 1, fill = WHITE, dashed = false }: { x: number; y: number; scale?: number; fill?: string; dashed?: boolean }) => {
  const dash = dashed ? "6 5" : undefined;
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <ellipse cx="-20" cy="0" rx="17" ry="30" transform="rotate(-14 -20 0)" fill={fill} stroke={INK} strokeWidth="3" strokeDasharray={dash} />
    <ellipse cx="20" cy="0" rx="17" ry="30" transform="rotate(14 20 0)" fill={fill} stroke={INK} strokeWidth="3" strokeDasharray={dash} />
    <rect x="-10" y="6" width="20" height="12" rx="5" fill={fill} stroke={INK} strokeWidth="3" strokeDasharray={dash} />
  </g>;
};
/** The two sides of a neck, centred on x. */
const Neck = ({ x, top = 16 }: { x: number; top?: number }) =>
  <path d={`M${x - 50} ${top} C${x - 42} ${top + 44}, ${x - 44} ${top + 84}, ${x - 70} 186 M${x + 50} ${top} C${x + 42} ${top + 44}, ${x + 44} ${top + 84}, ${x + 70} 186`} stroke={LINE} strokeWidth="4" fill="none" strokeLinecap="round" />;

// ==== Testicular cancer =====================================================================================

function MenFork(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const right = ["Surveillance", "Chemotherapy", "Radiotherapy", "Node surgery"];
  const lit = [[], [], [0, 1], [2, 3]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What you had" title="Surgery first, then a plan made for you" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Surgery, then a team meeting, then four possible next steps">
      <Box x={12} y={86} width={84} text="Surgery" lit={at === 1} />
      <path d="M96 100 H122" stroke={INK} strokeWidth="3" />
      <circle cx="146" cy="100" r="24" fill={at === 0 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
      <W x={146} y={104} size={10.5} fill={at === 0 ? WHITE : TEXT}>Team</W>
      {right.map((label, index) => { const y = 24 + index * 40, on = lit.includes(index); return <g key={label}>
        <path d={`M170 100 C184 100, 182 ${y + 14}, 196 ${y + 14}`} stroke={on ? INK : LINE} strokeWidth="3" fill="none" />
        <Box x={196} y={y} width={112} text={label} lit={on} />
      </g>; })}
      {at === 0 && <W x={54} y={140} size={10}>After surgery</W>}
      {at === 1 && <W x={54} y={140} size={10}>Day patient</W>}
      <Cap>{["A team of specialists plans with you", "Orchidectomy may be the only treatment", "Regular checks, or chemotherapy", "Radiotherapy or lymph node surgery"][at]}</Cap>
    </svg>} />;
}

function MenGerm(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const age = (years: number) => 40 + (years - 10) * (250 / 45);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Types and stage" title="Reading the words on your results" label="Types and stage" credit={idea}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Germ cells, the two main types by age, stages 1 to 3, tumour markers and treatment">
      {at === 0 && <g>
        {[[80, 80], [104, 74], [122, 96], [110, 120], [84, 124], [66, 102], [94, 100]].map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r="13" fill={index === 6 ? INK : SOFT} stroke={INK} strokeWidth="2" />)}
        <W x={94} y={160} size={10.5}>Germ cells</W>
        <Tags x={170} y={56} width={130} gap={38} labels={["Seminoma", "Non-seminoma", "Mixed"]} lit={index => index < 2} />
      </g>}
      {at === 1 && <g>
        <W x={age(15)} y={62} size={10.5} anchor="start">Seminoma</W>
        <rect x={age(15)} y={70} width={age(50) - age(15)} height="18" rx="9" fill={INK} />
        <W x={age(15)} y={112} size={10.5} anchor="start">Non-seminoma</W>
        <rect x={age(15)} y={120} width={age(35) - age(15)} height="18" rx="9" fill={SOFT} />
        <path d={`M40 152 H290`} stroke={LINE} strokeWidth="3" />
        {[15, 35, 50].map(years => <g key={years}><path d={`M${age(years)} 148 V156`} stroke={INK} strokeWidth="2" /><W x={age(years)} y={172} size={10}>{years}</W></g>)}
      </g>}
      {at === 2 && ["In the testicle", "Nearby nodes", "Further away"].map((label, index) => { const top = 130 - index * 30; return <g key={label}>
        <rect x={34 + index * 92} y={top} width="76" height={40 + index * 30} rx="6" fill={index === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={72 + index * 92} y={top + 24} size={16} fill={index === 0 ? WHITE : TEXT} serif>{String(index + 1)}</W>
        <W x={72 + index * 92} y={top - 8} size={10}>{label}</W>
      </g>; })}
      {at === 3 && <g>
        <Tube x={70} y={100} /><W x={70} y={160} size={10}>Blood test</W>
        <Tags x={130} y={30} width={72} gap={34} labels={["AFP", "HCG", "LDH"]} lit={() => true} />
        <Squares x={130} y={140} count={4} filled={0} size={30} gap={40} labels={["S0", "S1", "S2", "S3"]} />
      </g>}
      {at === 4 && <g>
        <Bubble x={160} y={40} text="Ask your team about your stage" width={220} />
        <Box x={30} y={96} width={90} text="Type" /><Box x={30} y={140} width={90} text="Stage" />
        <path d="M122 110 C150 110, 160 132, 186 132 M122 154 C150 154, 160 132, 186 132" stroke={INK} strokeWidth="2.5" fill="none" />
        <Box x={190} y={118} width={116} text="Treatment" lit />
      </g>}
      <Cap>{["Most start in germ cells", "Two main types, at different ages", "Stage 1: only in the testicle", "3 markers: AFP, HCG and LDH", "Type and stage guide the treatment"][at]}</Cap>
    </svg>} />;
}

function MenFiveYears(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const dots = [4, 3, 2, 2, 1];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="The checks that spread out over time" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five years of check-ups, closer together at first, with what happens at them">
      {dots.map((count, row) => <g key={row}>
        <W x={18} y={40 + row * 30} size={10} anchor="start">Year {row + 1}</W>
        <path d={`M68 ${36 + row * 30} H150`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />
        {Array.from({ length: count }, (_, index) => <circle key={index} cx={76 + index * 20} cy={36 + row * 30} r="6" fill={at === 1 ? INK : SOFT} />)}
      </g>)}
      {at === 0 && <Tags x={172} y={44} width={134} gap={36} labels={["Blood tests", "X-rays", "Scans"]} lit={() => false} />}
      {at === 1 && <Box x={172} y={80} width={134} text="Usually 5 years" lit />}
      {at === 2 && <g><Person x={210} y={150} scale={1.1} /><Bubble x={252} y={56} text="How do you feel?" width={110} /></g>}
      {at === 3 && <Phone x={238} y={96} text="Any time" />}
      {at === 4 && <g><Person x={212} y={150} scale={1.1} /><Person x={266} y={150} scale={1.1} fill={SOFT} /><HeartShape x={239} y={74} size={34} fill={GOLD} /></g>}
      <Cap>{["Check-ups: blood tests, x-rays, scans", "Every 3 or 6 months, then less often", "An examination and blood tests", "No need to wait for your next visit", "Sharing worries can help"][at]}</Cap>
    </svg>} />;
}

function MenMonthly(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const ticked = at === 0 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Self-checks" title="A monthly check that matters" label="Self-checks" credit={idea}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A calendar of twelve months, a shower, and what to look out for">
      {months.map((month, index) => { const x = 18 + (index % 4) * 28, y = 30 + Math.floor(index / 4) * 28; return <g key={index}>
        <rect x={x} y={y} width="24" height="24" rx="5" fill={ticked ? INK : WHITE} stroke={INK} strokeWidth="1.5" />
        <W x={x + 12} y={y + 16} size={10} fill={ticked ? WHITE : TEXT}>{month}</W>
      </g>; })}
      {at === 0 && <W x={66} y={136} size={10.5}>Once a month</W>}
      {at === 1 && <g>
        <path d="M230 18 V30 M206 30 H254 L246 42 H214 Z" stroke={INK} strokeWidth="3" fill={INK} strokeLinejoin="round" />
        {[214, 226, 238, 250].map((x, index) => <path key={x} d={`M${x - 2} ${50 + (index % 2) * 6} l-4 12`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
        <Tags x={150} y={86} width={150} gap={32} labels={["Warm bath or shower", "Smooth and firm", "Not hard"]} lit={index => index === 1} />
      </g>}
      {at === 2 && <Tags x={150} y={26} width={156} gap={36} labels={["A lump or swelling", "Getting bigger", "Heavy, firm or hard", "An ache or pain"]} lit={() => false} />}
      {at === 3 && <Tags x={150} y={40} width={156} gap={38} labels={["Your GP", "Sexual health clinic", "Your cancer team"]} lit={index => index === 0} />}
      {at === 4 && <g><Person x={210} y={160} scale={1.1} fill={SOFT} /><Bubble x={240} y={66} text="Talk to your team" width={124} /></g>}
      <Cap>{["Check your remaining testicle monthly", "Easier after a warm bath or shower", "See a GP about anything unusual", "Doctors are used to this", "Checking constantly can add worry"][at]}</Cap>
    </svg>} />;
}

function MenFortnight(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [[0], [0], [1, 2], [], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="After surgery" title="Home the same day, back in a fortnight" label="After surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three milestones after surgery, with the wound, work and signs to act on">
      <g opacity={at >= 3 ? 0.35 : 1}>
        {["Day 0: home", "2 weeks: work", "1 month: lifting"].map((label, index) => <Box key={label} x={10 + index * 102} y={16} width={96} text={label} size={10} lit={lit.includes(index)} />)}
      </g>
      {at === 0 && <g><Person x={110} y={150} scale={1.2} /><Person x={156} y={150} scale={1.2} fill={SOFT} /><Box x={196} y={112} width={110} text="First 24 hours" lit /></g>}
      {at === 1 && <g>
        <rect x="100" y="72" width="120" height="64" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M120 104 H200" stroke={GOLD} strokeWidth="3.5" strokeDasharray="5 6" strokeLinecap="round" />
        <W x={160} y={160} size={10.5}>Dressing</W>
      </g>}
      {at === 2 && <g>
        <Box x={100} y={70} width={120} text="About 2 weeks" lit />
        <path d="M90 140 H230 M104 140 V176 M216 140 V176" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <rect x="136" y="116" width="48" height="24" rx="3" fill={SOFT} />
      </g>}
      {at === 3 && <g>
        <Tags x={24} y={62} width={150} gap={36} labels={["High temperature", "Throbbing wound", "Red, hot or swollen"]} lit={() => false} />
        <Phone x={250} y={116} text="24 hours" />
      </g>}
      {at === 4 && <g>
        <W x={160} y={72} size={10.5}>Lymph node surgery (RPLND)</W>
        <Box x={60} y={86} width={200} text="About 7 days in hospital" />
        <Box x={60} y={128} width={200} text="No heavy lifting for 6 weeks" lit />
      </g>}
      <Cap>{["Someone stays with you for 24 hours", "Dissolving stitches under a dressing", "Work again after about 2 weeks", "Infection signs? Call 24-hour line", "Lymph node surgery: 2 to 4 months"][at]}</Cap>
    </svg>} />;
}

function MenNowLater(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const cards = at === 0 || at === 1 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="A prosthesis" title="Your choice, now or later" label="A prosthesis" credit={idea}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two choices, at surgery or later, each shown as a simple smooth oval">
      {cards && ["At surgery", "Later"].map((label, index) => { const x = 24 + index * 152, on = at === 1 || (at === 4 && index === 1); return <g key={label}>
        <rect x={x} y={24} width="120" height="124" rx="14" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={x + 60} y={48} size={11} fill={on ? WHITE : TEXT}>{label}</W>
        <ellipse cx={x + 60} cy={98} rx="22" ry="28" fill={on ? WHITE : SOFT} stroke={INK} strokeWidth="2" />
      </g>; })}
      {cards && <W x={160} y={104} size={24} serif>?</W>}
      {at === 0 && <W x={160} y={172} size={10.5}>A silicone implant</W>}
      {at === 2 && <g>
        <ellipse cx="130" cy="92" rx="24" ry="30" fill={SOFT} stroke={INK} strokeWidth="2" />
        <ellipse cx="192" cy="96" rx="20" ry="25" fill={WHITE} stroke={INK} strokeWidth="2" strokeDasharray="5 4" />
        <W x={160} y={150} size={10.5}>May look slightly different</W>
        <W x={160} y={170} size={10.5}>Stays the same size</W>
      </g>}
      {at === 3 && <Tags x={60} y={40} width={200} gap={40} labels={["Scar tissue, discomfort", "Rupture: exceptionally rare", "Infection"]} lit={index => index === 2} />}
      {at === 4 && <W x={160} y={172} size={10.5}>Your surgeon can help you decide</W>}
      <Cap>{["A silicone implant, if you want one", "During surgery, or after treatment", "It may not match exactly in size", "Infection can sometimes mean removal", "It can usually be fitted later"][at]}</Cap>
    </svg>} />;
}

function MenVial(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const vial = (x: number) => <g>
    <rect x={x - 20} y="38" width="40" height="12" rx="3" fill={INK} />
    <rect x={x - 17} y="50" width="34" height="96" rx="9" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    {[0, 60, 120].map(angle => <path key={angle} d={`M${x} 82 V118`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" transform={`rotate(${angle} ${x} 100)`} />)}
  </g>;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fertility" title="Protecting the chance of a family" label="Fertility" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Each treatment's effect on fertility, a stored sample, and the sperm count recovering">
      {at === 0 && <Tags x={40} y={40} width={240} gap={42} labels={["Surgery: not usually affected", "Chemotherapy: often for a time", "Radiotherapy: not usually"]} lit={index => index === 1} />}
      {at === 1 && <g>{vial(90)}<Box x={150} y={64} width={146} text="Usually 10 years" lit /><Box x={150} y={108} width={146} text="Up to 55 years" /></g>}
      {at === 2 && <g>{vial(90)}<Clock x={200} y={80} r={24} hand={1} /><Box x={150} y={122} width={150} text="Before more treatment" lit /></g>}
      {at === 3 && <g>
        <path d="M40 160 H290 M40 160 V40" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
        <path d="M44 150 C120 148, 170 120, 194 96 S250 64, 286 60" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M194 168 V164 H242 V168" stroke={INK} strokeWidth="2" fill="none" />
        <W x={218} y={182} size={10}>18 months to 2 years</W>
        <W x={48} y={36} size={10} anchor="start">Sperm count</W>
      </g>}
      {at === 4 && <g><Person x={110} y={150} scale={1.2} /><Person x={160} y={150} scale={1.2} fill={SOFT} /><Bubble x={232} y={60} text="Support groups" width={120} /></g>}
      <Cap>{["Chemotherapy: often a temporary effect", "Usually stored 10 years, up to 55", "Even in the first days of chemotherapy", "Recovery: about 18 months to 2 years", "Your nurse can help, and counselling"][at]}</Cap>
    </svg>} />;
}

function MenMorning(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Hormones" title="The morning blood test that answers it" label="Hormones" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A testosterone dial, signs of a low level, a morning blood test and ways of replacing it">
      {(at === 0 || at === 1) && <Gauge x={160} y={130} r={64} value={at === 0 ? 0.62 : 0.32} label={at === 0 ? "Testosterone" : "After chemotherapy"} />}
      {at === 2 && <g>
        <Tags x={30} y={34} width={124} gap={40} labels={["Lower sex drive", "Tiredness", "Low mood"]} lit={() => false} />
        <Tags x={166} y={34} width={124} gap={40} labels={["Thinner bones", "Hot flushes", "Weight gain"]} lit={() => false} />
      </g>}
      {at === 3 && <g>
        <Sun x={100} y={110} r={16} /><path d="M40 140 H160" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <rect x="40" y="141" width="120" height="20" fill={TINT} />
        <W x={100} y={178} size={10.5}>Early morning</W>
        <Tube x={226} y={100} /><W x={226} y={178} size={10.5}>Blood test</W>
      </g>}
      {at === 4 && ["Gel", "Injection", "Implant", "Skin patch"].map((label, index) => <Box key={label} x={36 + (index % 2) * 128} y={50 + Math.floor(index / 2) * 48} width={120} text={label} lit={index === 0} />)}
      <Cap>{["One testicle usually makes enough", "Chemo may lower it for a few months", "Tell your doctor about any symptoms", "Test it early in the morning", "Full effect may take 3 months"][at]}</Cap>
    </svg>} />;
}

function MenCloseness(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Relationships" title="Closeness after treatment" label="Relationships" credit={idea}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people on a bench, with time, talking and support">
      <path d="M26 158 H150 M36 158 V184 M140 158 V184" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <Person x={66} y={144} scale={1.1} fill={at === 2 ? SOFT : INK} /><Person x={112} y={144} scale={1.1} fill={at === 3 ? INK : SOFT} />
      {at === 3 && <HeartShape x={89} y={86} size={30} fill={GOLD} />}
      {at === 0 && <g><Box x={176} y={70} width={124} text="2 to 3 weeks" lit /><W x={238} y={124} size={10.5}>Once healed</W></g>}
      {at === 1 && <g><Bubble x={238} y={52} text="Contraception" width={124} /><Bubble x={238} y={116} text="Not infectious" width={124} /></g>}
      {at === 2 && <g><ellipse cx="238" cy="96" rx="36" ry="50" fill={TINT} stroke={INK} strokeWidth="3" /><Person x={238} y={114} scale={1} fill={SOFT} /></g>}
      {at === 3 && <Bubble x={238} y={64} text="Talk openly" width={110} />}
      {at === 4 && <Tags x={172} y={30} width={134} gap={36} labels={["Counsellor", "Sex therapist", "Orchid", "LGBT Foundation"]} lit={index => index === 0} />}
      <Cap>{["Usually 2 to 3 weeks, once healed", "Contraception during and after chemo", "Give yourself time to adapt", "Talking openly can bring you closer", "Doctors deal with this all the time"][at]}</Cap>
    </svg>} />;
}

function MenBodyMap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const limbs = at === 1, chest = at === 2 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Late effects" title="Knowing which effects to mention" label="Late effects" credit={idea}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A simple figure with the places late effects can show, and what to tell your doctor">
      <circle cx="70" cy="48" r="18" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M42 80 C42 70, 54 68, 70 68 C86 68, 98 70, 98 80 V140 H42 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M42 80 L28 136 M98 80 L112 136 M56 140 L54 180 M84 140 L86 180" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      {limbs && [[28, 138], [112, 138], [54, 180], [86, 180], [52, 48], [88, 48]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill={GOLD} />)}
      {chest && <HeartShape x={70} y={98} size={22} fill={GOLD} stroke={INK} width={2} />}
      {at === 0 && <Tags x={150} y={56} width={150} gap={44} labels={["During treatment", "Many years later"]} lit={index => index === 1} />}
      {at === 1 && <Tags x={150} y={40} width={150} gap={38} labels={["Pins and needles", "Cold hands", "High-pitched sounds"]} lit={() => false} />}
      {at === 2 && <Tags x={146} y={24} width={160} gap={36} labels={["Chest pain or tightness", "Short of breath", "Swollen ankles", "Palpitations"]} lit={() => false} />}
      {at === 3 && <g><Box x={150} y={56} width={150} height={40} text="Benefits of treatment" lit /><Box x={170} y={118} width={110} height={24} size={10} text="Slightly higher risk" /></g>}
      {at === 4 && <Tags x={150} y={28} width={150} gap={36} labels={["Regular exercise", "Eat healthily", "Healthy weight", "Stop smoking"]} lit={() => true} />}
      <Cap>{["Some effects can come years later", "Tell your doctor about hearing changes", "Some have regular heart check-ups", "Benefits usually far outweigh the risk", "Brisk walks can help with tiredness"][at]}</Cap>
    </svg>} />;
}

function MenThreeDoors(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [[0], [0], [0, 1], [1], [2]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and study" title="Back to work, study and sport" label="Work and study" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three doors, for work, study and sport, with what helps at each">
      {["Work", "Study", "Sport"].map((label, index) => { const x = 40 + index * 90, on = lit.includes(index); return <g key={label}>
        <rect x={x} y={20} width="60" height="76" rx="6" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <circle cx={x + 48} cy={60} r="3.5" fill={on ? WHITE : INK} />
        <W x={x + 30} y={112} size={10.5}>{label}</W>
      </g>; })}
      {at === 0 && <Box x={90} y={130} width={140} text="About 2 weeks" lit />}
      {at === 1 && <g>
        {[0, 1, 2, 3].map(index => <rect key={index} x={40 + index * 44} y={176 - (index + 1) * 12} width="36" height={(index + 1) * 12} rx="4" fill={index === 3 ? INK : SOFT} />)}
        <W x={220} y={166} size={10.5} anchor="start">Phased return</W>
      </g>}
      {at === 2 && <Box x={70} y={130} width={180} text="Equality Act 2010" lit />}
      {at === 3 && ["Extensions", "From home", "Exam help"].map((label, index) => <Box key={label} x={14 + index * 100} y={134} width={92} text={label} />)}
      {at === 4 && <Box x={70} y={130} width={180} text="Start slow, build up" lit />}
      <Cap>{["Most go back after about 2 weeks", "Plan a gradual return if you can", "The law treats cancer as a disability", "Adjustments at college or uni", "Start slow and build up"][at]}</Cap>
    </svg>} />;
}

function MenSignposts(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="When the feelings arrive afterwards" label="Mood" credit="Illustration: Rehyn. If you need help now, call 111 or Samaritans on 116 123."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with their feelings, and the places to find support">
      <Person x={50} y={166} scale={1.3} fill={at >= 2 ? INK : SOFT} />
      {at === 0 && ["Shocked", "Frightened", "Angry", "Sad"].map((label, index) => <Box key={label} x={110 + (index % 2) * 100} y={44 + Math.floor(index / 2) * 46} width={90} text={label} />)}
      {at === 1 && <g><Box x={110} y={60} width={190} text="Weeks or months, not days" lit /><Box x={110} y={104} width={190} text="See a GP" /></g>}
      {at === 2 && <g><W x={200} y={38} size={11}>Orchid</W><Phone x={200} y={96} text="0808 802 0010" width={110} /></g>}
      {at === 3 && <Tags x={120} y={30} width={170} gap={36} labels={["Eat well", "Sleep enough", "Be active", "Write it down"]} lit={() => true} />}
      {at === 4 && <Signs x={130} y={30} width={150} labels={["111", "Samaritans 116 123", "999"]} />}
      <Cap>{["No right or wrong way to feel", "Sad for weeks? It may be depression", "Orchid: free counselling by phone", "Focus on what you can control", "Samaritans: 116 123, day or night"][at]}</Cap>
    </svg>} />;
}

// ==== Penile cancer =========================================================================================

function MenLayers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What you had" title="From creams to surgery, each with a job" label="Treatments" credit={idea}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A specialist team, layers of skin and tissue, and the treatments for each">
      {at === 0 && <g>
        {[100, 140, 180, 220].map((x, index) => <Person key={x} x={x} y={110} scale={0.85} fill={index % 2 ? SOFT : INK} />)}
        <path d="M80 126 H240" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <W x={160} y={158} size={10.5}>A specialist hospital</W>
      </g>}
      {at === 1 && <g>
        <rect x="24" y="50" width="120" height="26" rx="6" fill={INK} /><W x={84} y={67} size={10} fill={WHITE}>Top layers</W>
        <rect x="24" y="76" width="120" height="70" rx="6" fill={TINT} stroke={SOFT} strokeWidth="2" /><W x={84} y={116} size={10}>Deeper tissue</W>
        <Tags x={172} y={44} width={130} gap={38} labels={["Cream", "Laser", "Freezing"]} lit={() => true} />
      </g>}
      {at === 2 && <Tags x={60} y={22} width={200} gap={32} labels={["Circumcision", "Glans resurfacing", "Wide local excision", "Glansectomy", "Penectomy"]} lit={() => false} />}
      {at === 3 && <g>
        <Drip x={90} y={70} />
        {[[190, 40], [230, 34], [270, 40]].map(([x, y]) => <path key={x} d={`M${x} ${y} L230 118`} stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" />)}
        <circle cx="230" cy="122" r="7" fill={INK} />
        <W x={90} y={156} size={10.5}>Chemotherapy</W><W x={230} y={156} size={10.5}>Radiotherapy</W>
      </g>}
      {at === 4 && <g><Doc x={60} y={50} width={80} height={100} title="Booklet" /><Bubble x={226} y={74} text="Ask your team" width={130} /></g>}
      <Cap>{["A specialist team plans your care", "Top layers: cream, laser or freezing", "Surgery keeps as much as possible", "Chemo and radiotherapy, alone or both", "Ask for a booklet to read at home"][at]}</Cap>
    </svg>} />;
}

function MenTnm(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stage and grade" title="T, N, M and grade, decoded" label="Stage and grade" credit="Illustration: Rehyn. A picture of the idea, not anyone's own results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Stage and grade, the T, N and M scales, grades 1 to 4 and a hundred squares for the main type">
      {at === 0 && <g><Box x={30} y={60} width={260} text="Stage: where, how far, any spread" lit /><Box x={30} y={110} width={260} text="Grade: how the cells look" /></g>}
      {at === 1 && <g>
        {["Tis", "Ta", "T1", "T2", "T3", "T4"].map((label, index) => <Box key={label} x={14 + index * 50} y={70} width={44} text={label} lit={index === 2} />)}
        <W x={61} y={124} size={10}>Top layer</W><W x={136} y={124} size={10}>Below skin</W><W x={211} y={124} size={10}>Spongy tissue</W><W x={286} y={124} size={10}>Nearby</W>
      </g>}
      {at === 2 && <g>
        <W x={30} y={70} size={18} serif>N</W>
        {["N0", "N1", "N2", "N3"].map((label, index) => <Box key={label} x={60 + index * 58} y={50} width={50} text={label} lit={index === 0} />)}
        <W x={30} y={130} size={18} serif>M</W>
        {["M0", "M1"].map((label, index) => <Box key={label} x={60 + index * 58} y={110} width={50} text={label} lit={index === 0} />)}
        <W x={160} y={172} size={10.5}>Groin first, then pelvis</W>
      </g>}
      {at === 3 && <g>
        {[1, 2, 3, 4].map((grade, index) => { const height = 30 + index * 22; return <g key={grade}>
          <rect x={50 + index * 58} y={160 - height} width="46" height={height} rx="6" fill={index < 2 ? SOFT : INK} />
          <W x={73 + index * 58} y={160 - height + 20} size={14} fill={index < 2 ? TEXT : WHITE} serif>{String(grade)}</W>
        </g>; })}
        <W x={102} y={178} size={10}>Low grade</W><W x={218} y={178} size={10}>High grade</W>
      </g>}
      {at === 4 && <g>
        {Array.from({ length: 100 }, (_, index) => <rect key={index} x={22 + (index % 10) * 13} y={30 + Math.floor(index / 10) * 13} width="10" height="10" rx="2" fill={index < 96 ? INK : WHITE} stroke={INK} strokeWidth="1" />)}
        <W x={234} y={84} size={11}>More than 95 in 100</W><W x={234} y={104} size={11}>Squamous cell</W>
      </g>}
      <Cap>{["Stage and grade describe the cancer", "T: how far the tumour has grown", "Groin lymph nodes are usually first", "Graded from 1 to 4", "Over 95 in 100: squamous cell"][at]}</Cap>
    </svg>} />;
}

function MenSpacing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = [3, 6, 9, 12, 15, 18, 21, 24, 30, 36, 42, 48, 54, 60];
  const x = (month: number) => 20 + month * (280 / 60);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="Check-ups that spread out over time" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five years of check-ups, every 3 months for 2 years, then every 6 months">
      <path d="M20 40 H300" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
      {months.map(month => <circle key={month} cx={x(month)} cy="40" r="5" fill={at === 1 ? INK : SOFT} />)}
      <W x={x(24)} y={64} size={10}>2 years</W><W x={300} y={64} size={10} anchor="end">5 years</W>
      {at === 0 && <g><Person x={110} y={164} scale={1.1} /><Bubble x={196} y={104} text="Any worries?" width={110} /></g>}
      {at === 1 && <g><Box x={60} y={94} width={200} text="First visit: 2 to 4 weeks after" lit /><Box x={60} y={136} width={200} text="In touch for up to 10 years" /></g>}
      {at === 2 && <Phone x={160} y={136} text="Your nurse" width={80} />}
      {at === 3 && <g><Doc x={80} y={86} width={70} height={90} title="Summary" /><path d="M156 130 H180" stroke={INK} strokeWidth="3" /><Doc x={186} y={86} width={70} height={90} title="Your GP" /></g>}
      {at === 4 && <Phone x={160} y={136} text="0808 800 4040" width={100} />}
      <Cap>{["A chance to raise any concerns", "Every 3 months, then every 6 months", "No need to wait for your next visit", "A treatment summary, also for your GP", "Anxiety between visits is natural"][at]}</Cap>
    </svg>} />;
}

function MenCrowd(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="HPV" title="A common virus, not a verdict" label="HPV" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A crowd of people, most of whom have had HPV, and what it does and does not mean">
      {at === 0 && Array.from({ length: 24 }, (_, index) => <Person key={index} x={42 + (index % 8) * 34} y={58 + Math.floor(index / 8) * 46} scale={0.5} fill={index === 13 ? SOFT : INK} />)}
      {at === 1 && <g>
        <W x={160} y={66} size={10.5}>Penile cancers</W>
        <Squares x={40} y={80} count={10} filled={5} size={20} gap={24} />
        <W x={160} y={136} size={10.5}>Most people with HPV never get it</W>
      </g>}
      {at === 2 && <g>
        <Person x={80} y={150} scale={1.3} /><Person x={240} y={150} scale={1.3} fill={SOFT} />
        <path d="M118 120 H202" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <path d="M150 108 l20 24 M170 108 l-20 24" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <W x={160} y={80} size={10.5}>Cancer is not infectious</W>
      </g>}
      {at === 3 && <g><Person x={90} y={156} scale={1.3} /><Person x={140} y={156} scale={1.3} fill={SOFT} /><Bubble x={226} y={64} text="Screening, as offered" width={160} /></g>}
      {at === 4 && <Tags x={60} y={40} width={200} gap={40} labels={["HPV vaccine: age 12 to 13", "Condoms lower the chance", "Stopping smoking"]} lit={index => index === 0} />}
      <Cap>{["Most people have HPV at some point", "About half are caused by HPV", "You cannot pass cancer on to others", "Partners: keep up with screening", "Vaccine offered at age 12 to 13"][at]}</Cap>
    </svg>} />;
}

function MenFirstWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [[0], [0], [1], [], [2, 3]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="After surgery" title="The first weeks, one step at a time" label="After surgery" credit={idea}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Milestones from hospital to full healing, with dressings, going home and signs to act on">
      {["Hospital", "Home", "4 to 6 weeks", "3 months"].map((label, index) => <Box key={label} x={8 + index * 78} y={14} width={72} text={label} size={9.5} lit={lit.includes(index)} />)}
      {at === 0 && <g><Drip x={60} y={86} /><Tags x={120} y={62} width={180} gap={36} labels={["Wound drain", "Catheter", "Painkillers, regularly"]} lit={index => index === 2} /></g>}
      {at === 1 && <g>
        <rect x="90" y="66" width="140" height="64" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={160} y={103} size={12} serif>7 to 10 days</W>
        <W x={160} y={154} size={10.5}>Graft dressings</W>
      </g>}
      {at === 2 && <g><Box x={40} y={68} width={240} text="Circumcision: same or next day" /><Box x={40} y={110} width={240} text="Larger surgery: up to 5 days" lit /></g>}
      {at === 3 && <Tags x={40} y={58} width={240} gap={38} labels={["High temperature or shivering", "Red or swollen wound", "Chest pain or breathless: 999"]} lit={index => index === 2} />}
      {at === 4 && <Box x={40} y={90} width={240} text="Weak for a while? Physio can help" />}
      <Cap>{["Painkillers work best taken regularly", "Graft dressings stay 7 to 10 days", "Live alone? Tell the nurses early", "Breathless or chest pain: call 999", "Full healing can take up to 3 months"][at]}</Cap>
    </svg>} />;
}

function MenStream(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Passing urine" title="Practical fixes for a changed stream" label="Passing urine" credit={idea}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A spraying stream becoming steady, sitting down, a funnel, and toilet cards and keys">
      {at === 0 && <g>
        {[60, 100, 140].map(y => <path key={y} d={`M50 100 L180 ${y}`} stroke={SOFT} strokeWidth="4" strokeDasharray="4 8" strokeLinecap="round" />)}
        <path d="M200 100 H290" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <W x={115} y={170} size={10.5}>Spraying</W><W x={245} y={130} size={10.5}>Often settles</W>
      </g>}
      {at === 1 && <g>
        <path d="M60 80 V160 M60 130 H120 V160" stroke={INK} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <Person x={92} y={116} scale={1.1} />
        <path d="M196 70 H244 L226 112 V132 H214 V112 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <W x={90} y={180} size={10.5}>Sit down</W><W x={220} y={160} size={10.5}>Male funnel</W>
      </g>}
      {at === 2 && <Tags x={50} y={40} width={220} gap={42} labels={["You keep control", "Sit down to pass urine", "Or a tube and a bag"]} lit={index => index === 0} />}
      {at === 3 && <g>
        <path d="M40 70 H130 C160 70, 170 92, 200 92 H280 M40 130 H130 C160 130, 170 108, 200 108 H280" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <W x={240} y={70} size={10.5}>Narrowing</W>
        <Box x={60} y={148} width={200} text="A small operation can help" lit />
      </g>}
      {at === 4 && <g>
        <rect x="40" y="56" width="120" height="76" rx="10" fill={INK} />
        <W x={100} y={92} size={11} fill={WHITE}>Toilet card</W><W x={100} y={112} size={10} fill={WHITE}>Macmillan</W>
        <circle cx="216" cy="94" r="16" fill="none" stroke={INK} strokeWidth="5" /><path d="M232 94 H286 M272 94 V108 M282 94 V104" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <W x={250} y={150} size={10.5}>National Key Scheme</W>
      </g>}
      <Cap>{["Spraying may settle as you heal", "Sitting down to pass urine can help", "You still have control, sitting down", "Hard to pass urine? Tell your doctor", "Over 9,000 locked disabled toilets"][at]}</Cap>
    </svg>} />;
}

function MenLegs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Lymph nodes" title="Protecting your legs after lymph node surgery" label="Lymph nodes" credit={idea}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A simple outline of the legs, with the groin lymph nodes, a drain and ways to protect the skin">
      <rect x="40" y="30" width="110" height="34" rx="14" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x={at === 2 ? 42 : 46} y="54" width={at === 2 ? 48 : 40} height="128" rx="18" fill={at === 2 ? SOFT : WHITE} stroke={at === 4 ? GOLD : INK} strokeWidth={at === 4 ? 4 : 2.5} />
      <rect x="104" y="54" width="40" height="128" rx="18" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {[[70, 72], [80, 84], [112, 72], [122, 84]].map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r="5" fill={at === 0 && index === 0 ? GOLD : SOFT} stroke={INK} strokeWidth="1.5" />)}
      {at === 0 && <Tags x={170} y={56} width={136} gap={44} labels={["Sentinel node biopsy", "Node dissection"]} lit={index => index === 0} />}
      {at === 1 && <g>
        <path d="M128 84 C160 90, 180 110, 196 128" stroke={INK} strokeWidth="3" fill="none" />
        <rect x="186" y="128" width="30" height="40" rx="6" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <Box x={176} y={40} width={130} text="Out after 2 weeks" lit />
      </g>}
      {at === 2 && <Tags x={170} y={40} width={136} gap={34} labels={["Compression", "Skin care", "Exercise", "Massage"]} lit={() => false} />}
      {at === 3 && <Tags x={170} y={30} width={136} gap={36} labels={["Always wear shoes", "Long trousers", "Insect repellent", "Avoid sunburn"]} lit={index => index === 0} />}
      {at === 4 && <g><Tags x={170} y={40} width={136} gap={36} labels={["Red", "Painful", "Swollen"]} lit={() => true} /><W x={238} y={162} size={10.5}>Or call 111</W></g>}
      <Cap>{["A biopsy finds the first lymph nodes", "A drain, usually out after 2 weeks", "Swelling is easier to control early", "Protect your legs and feet from cuts", "Red, painful or swollen? See a doctor"][at]}</Cap>
    </svg>} />;
}

function MenThreePanels(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [[0], [1], [1], [2], [1, 2]][at];
  const panel = (index: number, label: string, icon: ReactNode) => { const x = 20 + index * 100, on = lit.includes(index); return <g key={label}>
    <rect x={x} y={14} width="80" height="74" rx="10" fill={on ? TINT : WHITE} stroke={on ? INK : LINE} strokeWidth={on ? 3 : 2} />
    {icon}<W x={x + 40} y={80} size={10}>{label}</W>
  </g>; };
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Other treatments" title="Creams, rays and drips: what to expect" label="Other treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three treatments, a cream, radiotherapy and a drip, with what to expect from each">
      {panel(0, "Cream", <g><rect x="44" y="28" width="32" height="30" rx="5" fill={INK} /><rect x="54" y="20" width="12" height="9" rx="2" fill={SOFT} /></g>)}
      {panel(1, "Radiotherapy", <g>{[[130, 24], [160, 20], [190, 24]].map(([x, y]) => <path key={x} d={`M${x} ${y} L160 60`} stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" />)}<circle cx="160" cy="62" r="5" fill={INK} /></g>)}
      {panel(2, "Chemotherapy", <g><rect x="248" y="22" width="24" height="26" rx="5" fill={INK} /><path d="M260 48 V64" stroke={INK} strokeWidth="2.5" /></g>)}
      {at === 0 && <Box x={40} y={116} width={240} text="Every day for several weeks" lit />}
      {at === 1 && <g><Squares x={56} y={110} count={6} filled={6} size={28} gap={36} labels={["1", "2", "3", "4", "5", "6"]} /><W x={160} y={166} size={10.5}>Weeks, each weekday</W></g>}
      {at === 2 && <Box x={30} y={116} width={260} text="Urethra narrower? It can be widened" />}
      {at === 3 && <g>
        <rect x="74" y="104" width="14" height="56" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="81" cy="164" r="10" fill={GOLD} stroke={INK} strokeWidth="2.5" />
        <W x={200} y={128} size={11}>Very high or low temperature</W><W x={200} y={150} size={10.5}>Call the advice line</W>
      </g>}
      {at === 4 && <g>{[110, 160, 210].map((x, index) => <Person key={x} x={x} y={170} scale={0.9} fill={index === 1 ? INK : SOFT} />)}<HeartShape x={160} y={120} size={30} fill={GOLD} /></g>}
      <Cap>{["Cream daily for several weeks", "Each weekday for 4 to 6 weeks", "Skin colour changes? Tell your doctor", "Infection signs: call straight away", "Support to manage symptoms"][at]}</Cap>
    </svg>} />;
}

function MenSideBySide(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Relationships" title="Closeness after penile cancer surgery" label="Relationships" credit={idea}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people side by side, with time to heal, closeness, help and talking">
      <Person x={60} y={150} scale={1.2} fill={at === 4 ? INK : SOFT} /><Person x={110} y={150} scale={1.2} />
      {at === 2 && <HeartShape x={85} y={80} size={34} fill={GOLD} />}
      {at === 0 && <g><Squares x={160} y={70} count={4} filled={4} size={30} gap={36} labels={["1", "2", "3", "4"]} /><W x={229} y={126} size={10.5}>About 4 weeks</W></g>}
      {at === 1 && <Bubble x={230} y={70} text="Usually as before" width={140} />}
      {at === 2 && <Tags x={170} y={50} width={130} gap={36} labels={["Hugging", "Kissing", "Touch"]} lit={() => true} />}
      {at === 3 && <Tags x={170} y={26} width={136} gap={36} labels={["Tablets", "Injections", "Vacuum pumps", "Implants"]} lit={() => false} />}
      {at === 4 && <Bubble x={228} y={60} text="Talk it over" width={120} />}
      <Cap>{["About 4 weeks after a circumcision", "Often carry on as usual once healed", "Hugging and kissing can be fulfilling", "Erection lasts 4 hours? Get help", "Talking can make you both comfortable"][at]}</Cap>
    </svg>} />;
}

function MenMirror(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Body image" title="Coming to terms with a changed body" label="Body image" credit={idea}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person in a mirror, with time, feelings, support and self-care">
      <ellipse cx="90" cy="96" rx="50" ry="66" fill={TINT} stroke={INK} strokeWidth="4" />
      <path d="M90 162 V184 M66 184 H114" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <Person x={90} y={124} scale={1.2} fill={at === 4 ? INK : SOFT} />
      {at === 0 && <g><Box x={160} y={40} width={146} text="Swollen at first" /><Box x={160} y={84} width={146} text="Improves over time" /><Box x={160} y={128} width={146} text="Up to 3 months" lit /></g>}
      {at === 1 && <Tags x={170} y={40} width={130} gap={40} labels={["Shock", "Relief", "Adjusting"]} lit={index => index === 2} />}
      {at === 2 && <Tags x={166} y={40} width={140} gap={40} labels={["Your surgeon", "Someone similar", "Family, friends"]} lit={() => true} />}
      {at === 3 && <g><Bubble x={232} y={60} text="How I feel" width={120} /><Person x={232} y={150} scale={1.1} fill={SOFT} /></g>}
      {at === 4 && <g><HeartShape x={232} y={92} size={60} fill={GOLD} /><W x={232} y={160} size={10.5}>Nice things for you</W></g>}
      <Cap>{["Swelling is temporary; it improves", "Adjusting to change is natural", "Orchid runs online support groups", "Tell your partner how you feel", "Be proud of getting through treatment"][at]}</Cap>
    </svg>} />;
}

function MenPhased(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Back to work, with the law behind you" label="Work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Time off, choices about work, a phased return, a grant and help with benefits">
      {at === 0 && <g><Box x={30} y={50} width={260} text="Larger surgery: at least 4 weeks off" /><Box x={30} y={96} width={260} text="Minor surgery: within a week" lit /></g>}
      {at === 1 && ["Time off", "Fewer hours", "Change jobs", "Stop working"].map((label, index) => <Box key={label} x={30 + (index % 2) * 136} y={50 + Math.floor(index / 2) * 46} width={124} text={label} />)}
      {at === 2 && <g>
        <Box x={40} y={24} width={240} text="Reasonable adjustments" lit />
        {[0, 1, 2, 3].map(index => { const height = 20 + index * 22; return <g key={index}>
          <rect x={60 + index * 56} y={176 - height} width="44" height={height} rx="5" fill={index === 3 ? INK : SOFT} />
          <W x={82 + index * 56} y={170} size={9.5} fill={index === 3 ? WHITE : TEXT}>{`Week ${index + 1}`}</W>
        </g>; })}
      </g>}
      {at === 3 && <g><Box x={40} y={56} width={240} text="Access to Work grant" lit /><Box x={40} y={102} width={240} text="Equipment or travel to work" /></g>}
      {at === 4 && <g><Person x={110} y={150} scale={1.2} /><Person x={160} y={150} scale={1.2} fill={SOFT} /><Bubble x={236} y={60} text="Benefits check" width={124} /></g>}
      <Cap>{["Minor surgery: back within a week", "Do what is right for you", "The law sees cancer as a disability", "A grant you do not pay back", "A social worker can check benefits"][at]}</Cap>
    </svg>} />;
}

function MenOpenDoor(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const open = [0, 0, 0.4, 0.8, 0.8][at];
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="Talking about the hardest part" label="Mood" credit="Illustration: Rehyn. If you need help now, call 111 or Samaritans on 116 123."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A door slowly opening, with talking, support and where to get help now">
      <rect x="24" y="30" width="70" height="150" rx="4" fill={GOLD} opacity="0.35" stroke={INK} strokeWidth="3" />
      <path d={`M24 30 L${24 + 70 * (1 - open)} ${30 + 10 * open} V${180 - 10 * open} L24 180 Z`} fill={INK} style={still ? undefined : { transition: "d 0.6s ease" }} />
      {at === 0 && <g>
        <path d="M120 110 C140 70, 160 70, 180 110 S220 150, 240 110 S280 70, 300 110" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <W x={210} y={168} size={10.5}>Up one day, down the next</W>
      </g>}
      {at === 1 && <g><Box x={120} y={60} width={186} text="More than 2 weeks" lit /><Box x={120} y={104} width={186} text="Talk to your doctor" /></g>}
      {at === 2 && <g><W x={213} y={40} size={11}>Orchid helpline</W><Phone x={213} y={102} text="0808 802 0010" width={110} /></g>}
      {at === 3 && <Tags x={130} y={34} width={170} gap={40} labels={["Your GP or nurse", "A counsellor", "Online groups"]} lit={() => true} />}
      {at === 4 && <Signs x={130} y={34} width={166} labels={["111", "Samaritans 116 123", "999"]} />}
      <Cap>{["Feelings can change day to day", "Low over 2 weeks? Talk to your doctor", "Talking is often the first step", "Do not stop antidepressants suddenly", "Samaritans: 116 123, day or night"][at]}</Cap>
    </svg>} />;
}

// ==== Thyroid cancer ========================================================================================

function MenButterfly(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What you had" title="Surgery first, then tablets and iodine" label="Treatments" credit={idea}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A neck with the thyroid gland, and the treatments: surgery, tablets, radioactive iodine and others">
      <Neck x={80} />
      <Butterfly x={80} y={116} dashed={at === 1} fill={at === 3 ? TINT : WHITE} />
      {at === 3 && [[64, 108], [96, 108], [80, 124]].map(([cx, cy]) => <circle key={cx * cy} cx={cx} cy={cy} r="4" fill={GOLD} />)}
      {at === 0 && <g><Bubble x={233} y={56} text="Decide together" width={120} /><Person x={212} y={156} scale={1} /><Person x={254} y={156} scale={1} fill={SOFT} /></g>}
      {at === 1 && <Tags x={170} y={56} width={136} gap={40} labels={["Whole thyroid", "Part of it"]} lit={index => index === 0} />}
      {at === 2 && <g><Pill x={233} y={70} /><Clock x={233} y={132} r={24} hand={0.5} /></g>}
      {at === 3 && <g>
        {[30, 22].map(r => <circle key={r} cx="233" cy="96" r={r} fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="4 4" />)}
        <Pill x={233} y={96} fill={INK} /><W x={233} y={150} size={10.5}>A capsule</W>
      </g>}
      {at === 4 && <Tags x={160} y={40} width={146} gap={40} labels={["External radiotherapy", "Targeted medicines", "Chemotherapy"]} lit={() => false} />}
      <Cap>{["A plan made together with your team", "Surgery: the most common treatment", "Levothyroxine every day, for life", "Radioactive iodine, taken as a capsule", "Other treatments are sometimes used"][at]}</Cap>
    </svg>} />;
}

function MenCells(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const filled = [0, 80, 10, 4, 2][at];
  const big = ["", "8 in 10", "1 in 10", "Under 5 in 100", "1 to 2 in 100"][at];
  const name = ["", "Papillary", "Follicular", "Medullary", "Anaplastic"][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Types" title="Which cell it started in matters" label="Types" credit="Illustration: Rehyn. A picture of the idea, not anyone's own results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The two kinds of thyroid cell, and a hundred squares for how common each type is">
      {at === 0 && <g>
        {Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <circle key={index} cx={90 + 26 * Math.cos(a)} cy={96 + 26 * Math.sin(a)} r="10" fill={SOFT} stroke={INK} strokeWidth="2" />; })}
        <W x={90} y={160} size={10.5}>Follicular cells</W>
        <circle cx="230" cy="96" r="18" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="230" cy="96" r="6" fill={INK} />
        <W x={230} y={160} size={10.5}>C cells</W><W x={230} y={178} size={10}>make calcitonin</W>
      </g>}
      {at > 0 && <g>
        {Array.from({ length: 100 }, (_, index) => <rect key={index} x={20 + (index % 10) * 13} y={30 + Math.floor(index / 10) * 13} width="10" height="10" rx="2" fill={index < filled ? INK : WHITE} stroke={INK} strokeWidth="1" />)}
        <W x={232} y={88} size={18} serif>{big}</W><W x={232} y={114} size={11}>{name}</W>
      </g>}
      <Cap>{["Most start in follicular cells", "About 8 in 10 are papillary", "Follicular: about 1 in 10", "Medullary: fewer than 5 in 100", "Anaplastic: rarest, 1 to 2 in 100"][at]}</Cap>
    </svg>} />;
}

function MenTg(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="The blood test that keeps watch" label="Follow-up" credit="Illustration: Rehyn. A picture of the idea, not anyone's own results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="How long follow-up lasts, a blood tube for thyroglobulin, a neck scan and a phone">
      {at === 0 && <g><Box x={40} y={40} width={240} text="Low risk: at least 5 years" /><Box x={40} y={84} width={240} text="Intermediate: at least 10 years" /><Box x={40} y={128} width={240} text="High risk: for life" /></g>}
      {at === 1 && <g><Tube x={90} y={100} /><W x={90} y={160} size={10.5}>Blood tests</W><Box x={160} y={70} width={140} text="Up to 4 weeks" lit /><Box x={160} y={112} width={140} text="Tell family, friends" /></g>}
      {at === 2 && <g><Tube x={90} y={100} label="Tg" fill={INK} /><W x={90} y={160} size={10.5}>Thyroglobulin</W><Bubble x={232} y={76} text="What does it mean?" width={140} /></g>}
      {at === 3 && <g>
        <rect x="64" y="52" width="40" height="70" rx="12" fill={INK} /><path d="M70 122 H98 L94 134 H74 Z" fill={SOFT} />
        {[14, 24, 34].map(r => <path key={r} d={`M${84 - r} ${140 + r * 0.4} Q84 ${148 + r}, ${84 + r} ${140 + r * 0.4}`} stroke={SOFT} strokeWidth="2.5" fill="none" />)}
        <Box x={160} y={70} width={140} text="Neck ultrasound" /><Box x={160} y={112} width={140} text="9 to 12 months" lit />
      </g>}
      {at === 4 && <g><Phone x={90} y={100} text="Any time" /><Tags x={160} y={66} width={140} gap={40} labels={["Supplements", "Vitamins"]} lit={() => false} /></g>}
      <Cap>{["Every few months, then less often", "Lab results may take up to 4 weeks", "Ask your specialist what it means", "Neck ultrasound, 9 to 12 months on", "Ask before taking supplements"][at]}</Cap>
    </svg>} />;
}

function MenCapsule(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [[], [0], [1, 2], [], [3]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Radioactive iodine" title="A capsule, a quiet room, a few days" label="Radioactive iodine" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four steps: a diet, a capsule, a room of your own and home, with what each involves">
      {["Diet", "Capsule", "Own room", "Home"].map((label, index) => <Box key={label} x={8 + index * 78} y={16} width={72} text={label} size={10} lit={lit.includes(index)} />)}
      {at === 0 && <g>
        <Butterfly x={110} y={116} fill={TINT} />
        {[[94, 110], [126, 110], [110, 126]].map(([cx, cy]) => <circle key={cx * cy} cx={cx} cy={cy} r="4" fill={GOLD} />)}
        <path d="M206 112 C180 112, 160 110, 144 112" stroke={GOLD} strokeWidth="3" strokeDasharray="5 5" fill="none" />
        <Pill x={232} y={112} />
      </g>}
      {at === 1 && <g><Tags x={30} y={60} width={124} gap={38} labels={["Fish, seafood", "Seaweed", "Soy, takeaways"]} lit={() => false} /><Box x={170} y={86} width={136} text="1 to 2 weeks" lit /></g>}
      {at === 2 && <g>
        <rect x="100" y="64" width="120" height="110" rx="6" fill={WHITE} stroke={INK} strokeWidth="3" />
        <rect x="194" y="112" width="20" height="62" fill={SOFT} />
        <Person x={140} y={150} scale={1} /><W x={160} y={88} size={10.5}>1 to 3 days</W>
      </g>}
      {at === 3 && <Tags x={60} y={64} width={200} gap={38} labels={["Sore or tight neck", "Feeling a bit sick", "Dry mouth, taste changes"]} lit={() => false} />}
      {at === 4 && <g>
        <path d="M70 110 L110 76 L150 110 V170 H70 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><rect x="100" y="134" width="20" height="36" fill={SOFT} />
        <Doc x={190} y={70} width={90} height={100} title="For 7 days" />
      </g>}
      <Cap>{["Only thyroid cells use iodine", "Low iodine diet for 1 to 2 weeks", "A room on your own for 1 to 3 days", "Many people have no side effects", "Carry the written advice for 7 days"][at]}</Cap>
    </svg>} />;
}

function MenDailyDose(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Levothyroxine" title="One tablet, every day, the right dose" label="Levothyroxine" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A daily tablet, a dial for TSH, the gap before calcium, a missed dose and a TSH alert card">
      {at === 0 && <g><Pill x={100} y={100} rotate={-20} /><W x={210} y={104} size={28} serif>T4</W><W x={210} y={130} size={10.5}>Levothyroxine</W></g>}
      {at === 1 && <Gauge x={160} y={146} r={64} value={0.15} label="TSH kept low" />}
      {at === 2 && <g>
        <Clock x={60} y={86} r={24} hand={0.3} /><Pill x={60} y={146} />
        <path d="M100 116 H200" stroke={INK} strokeWidth="3" strokeLinecap="round" strokeDasharray="6 5" />
        <W x={150} y={104} size={10.5}>At least 4 hours</W>
        <Box x={212} y={84} width={94} text="Calcium" /><Box x={212} y={124} width={94} text="Zinc" />
      </g>}
      {at === 3 && <g>
        <Pill x={130} y={100} /><Pill x={190} y={100} />
        <path d="M174 84 l32 32 M206 84 l-32 32" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <W x={160} y={150} size={10.5}>Not 2 at once</W>
      </g>}
      {at === 4 && <g><rect x="90" y="56" width="140" height="80" rx="10" fill={INK} /><W x={160} y={92} size={12} fill={WHITE}>TSH alert card</W><W x={160} y={112} size={10} fill={WHITE}>Carry it</W><W x={160} y={164} size={10.5}>Your thyroid team</W></g>}
      <Cap>{["Replaces the hormone T4, every day", "A slightly higher dose keeps TSH low", "4 hours apart from calcium or zinc", "Missed one? Never take 2 together", "Only your thyroid team changes dose"][at]}</Cap>
    </svg>} />;
}

function MenVoice(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Voice and calcium" title="Voice and calcium: both usually recover" label="Voice and calcium" credit={idea}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The thyroid with the voice nerves and four small parathyroid glands beside it">
      <rect x="96" y="28" width="28" height="22" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <Butterfly x={110} y={116} />
      <path d="M92 150 C84 110, 92 70, 102 50 M128 150 C136 110, 128 70, 118 50" stroke={at === 0 ? GOLD : LINE} strokeWidth={at === 0 ? 3.5 : 2} fill="none" />
      {[[92, 100], [92, 130], [128, 100], [128, 130]].map(([cx, cy]) => <circle key={cx * cy} cx={cx} cy={cy} r="5" fill={at === 1 ? GOLD : SOFT} stroke={INK} strokeWidth="1.5" />)}
      {at === 0 && <g>{[10, 18].map(r => <path key={r} d={`M${136 + r} ${30} q6 9 0 18`} stroke={INK} strokeWidth="2" fill="none" />)}<Tags x={180} y={60} width={126} gap={44} labels={["Hoarse, weak voice", "Voice therapist"]} lit={index => index === 1} /></g>}
      {at === 1 && <g><Box x={180} y={70} width={126} text="Size of a pea" /><Box x={180} y={114} width={126} text="Keep calcium normal" lit /></g>}
      {at === 2 && <Tags x={180} y={40} width={126} gap={38} labels={["Tingling hands", "Around the mouth", "Cramps, twitching"]} lit={() => false} />}
      {at === 3 && <g>
        {[0, 1, 2].map(index => <rect key={index} x={200 + index * 36} y={140 - (60 - index * 18)} width="26" height={60 - index * 18} rx="5" fill={index === 0 ? INK : SOFT} />)}
        <W x={249} y={162} size={10.5}>With your doctor</W>
      </g>}
      <Cap>{["Hoarseness usually improves in weeks", "4 pea-sized glands keep calcium normal", "Tingling? Tell your doctor or nurse", "Reduce calcium only with your doctor"][at]}</Cap>
    </svg>} />;
}

function MenNeckFold(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="The scar" title="A scar that fades in a skin fold" label="The scar" credit={idea}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A neck with a short scar in a skin fold, fading over time, with sun care, exercises and swelling">
      {at === 0 && ["Weeks", "6 months", "A year"].map((label, index) => { const x = 14 + index * 102; return <g key={label}>
        <rect x={x} y={20} width="88" height="124" rx="10" fill={WHITE} stroke={LINE} strokeWidth="2" />
        <path d={`M${x + 22} 30 C${x + 26} 70, ${x + 24} 100, ${x + 14} 136 M${x + 66} 30 C${x + 62} 70, ${x + 64} 100, ${x + 74} 136`} stroke={LINE} strokeWidth="3" fill="none" />
        <path d={`M${x + 30} 104 Q${x + 44} 110, ${x + 58} 104`} stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" opacity={[1, 0.55, 0.25][index]} />
        <W x={x + 44} y={164} size={10.5}>{label}</W>
      </g>; })}
      {at === 1 && <g>
        <Sun x={90} y={84} r={22} />
        <rect x="200" y="64" width="50" height="76" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="212" y="52" width="26" height="12" rx="3" fill={INK} />
        <W x={225} y={164} size={10.5}>High SPF</W>
      </g>}
      {at === 2 && <g>
        <Neck x={160} top={24} />
        <path d="M146 130 Q160 136, 174 130" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M86 70 C70 82, 70 100, 82 112 M234 70 C250 82, 250 100, 238 112" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M82 112 l-8 -2 M82 112 l2 -8 M238 112 l8 -2 M238 112 l-2 -8" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      </g>}
      {at === 3 && <g>
        <Neck x={110} top={24} />
        <path d="M96 130 Q110 136, 124 130" stroke={SOFT} strokeWidth="4" fill="none" strokeLinecap="round" />
        <ellipse cx="110" cy="128" rx="36" ry="20" fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="5 4" />
        <W x={250} y={86} size={10.5}>After a few weeks?</W>
        <Box x={196} y={106} width={110} text="Tell your doctor" lit />
      </g>}
      <Cap>{["A 4 to 6cm line in a skin fold", "High sun protection once it heals", "Neck exercises for 3 months", "Swelling after weeks? Tell your doctor"][at]}</Cap>
    </svg>} />;
}

function MenBattery(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const level = [0.25, 0.15, 0.4, 0.6, 0.7][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tiredness" title="Tired while the dose settles" label="Tiredness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A battery slowly filling, with blood tests, activity, a diary and telling your team">
      <rect x="40" y="40" width="110" height="60" rx="8" fill={WHITE} stroke={INK} strokeWidth="4" /><rect x="150" y="58" width="10" height="24" rx="3" fill={INK} />
      <rect x="46" y="46" width={98 * level} height="48" rx="4" fill={at < 2 ? SOFT : INK} />
      {at === 0 && <g><Tube x={240} y={86} /><W x={240} y={146} size={10.5}>T4 and TSH</W></g>}
      {at === 1 && <Tags x={180} y={30} width={126} gap={36} labels={["Tired", "Cold", "Hard to focus"]} lit={() => false} />}
      {at === 2 && <Clock x={240} y={70} r={26} hand={2} />}
      {at === 3 && <g><Person x={240} y={84} scale={1} /><Squares x={28} y={140} count={11} filled={0} size={20} gap={24} labels={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]} /></g>}
      {at === 4 && <Bubble x={240} y={62} text="Tell your team" width={124} />}
      <Cap>{["Finding the dose can take months", "Avoid driving while off your tablets", "Usually gets better with time", "Brisk walking can ease tiredness", "Tell your team about tiredness"][at]}</Cap>
    </svg>} />;
}

function MenPlanning(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pregnancy" title="Planning a baby after treatment" label="Pregnancy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Six months after radioactive iodine, fertility, the dose in pregnancy and telling your midwife">
      {at === 0 && <g>
        <W x={160} y={44} size={10.5}>Months after radioactive iodine</W>
        <Squares x={34} y={60} count={6} filled={6} size={36} gap={44} labels={["1", "2", "3", "4", "5", "6"]} />
        {[184, 272].map(cx => <rect key={cx} x={cx - 22} y={56} width="44" height="44" rx="8" fill="none" stroke={GOLD} strokeWidth="3" />)}
        <W x={160} y={128} size={10.5}>Making someone pregnant: at least 4</W>
        <W x={160} y={148} size={10.5}>Getting pregnant: at least 6</W>
      </g>}
      {at === 1 && <Tags x={50} y={56} width={220} gap={44} labels={["Fertility not normally affected", "Sperm banking may be offered"]} lit={index => index === 0} />}
      {at === 2 && <g><Gauge x={110} y={140} r={54} value={0.72} label="Dose" /><Tube x={240} y={100} /><W x={240} y={160} size={10.5}>More tests</W></g>}
      {at === 3 && <g><Person x={100} y={156} scale={1.2} /><Person x={150} y={156} scale={1.2} fill={SOFT} /><Bubble x={232} y={64} text="Thyroid history" width={130} /></g>}
      <Cap>{["No pregnancy for at least 6 months", "Fertility is not normally affected", "Often a higher dose in pregnancy", "Tell your midwife about your thyroid"][at]}</Cap>
    </svg>} />;
}

function MenDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work" title="Back to work, at your own pace" label="Work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk, a heavy box to avoid, driving, your rights and help with work">
      {at === 0 && <g>
        <Box x={100} y={50} width={120} text="A few weeks" lit />
        <path d="M70 150 H250 M84 150 V184 M236 150 V184" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <rect x="132" y="120" width="56" height="30" rx="3" fill={SOFT} />
      </g>}
      {at === 1 && <g>
        <rect x="110" y="66" width="100" height="84" rx="6" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M110 66 L210 150 M210 66 L110 150" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <W x={160} y={176} size={10.5}>Heavy lifting</W>
      </g>}
      {at === 2 && <g>
        <circle cx="110" cy="110" r="44" fill="none" stroke={INK} strokeWidth="6" /><circle cx="110" cy="110" r="8" fill={INK} />
        <path d="M66 110 H102 M118 110 H154 M110 118 V154" stroke={INK} strokeWidth="5" />
        <Person x={240} y={130} scale={1.2} />
        <path d="M200 84 C210 70, 270 70, 280 84" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M200 84 l2 -9 M200 84 l9 -1 M280 84 l-2 -9 M280 84 l-9 -1" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
      </g>}
      {at === 3 && <g><Box x={40} y={56} width={240} text="Equality Act 2010" lit /><Box x={40} y={102} width={240} text="Northern Ireland: DDA 1995" /></g>}
      {at === 4 && <g><Box x={40} y={56} width={240} text="Access to Work" lit /><Box x={40} y={102} width={240} text="Equipment, travel, a support worker" /></g>}
      <Cap>{["Most return within a few weeks", "No heavy lifting for at least 4 weeks", "Able to turn your neck before driving", "Protection continues after treatment", "Access to Work: a grant for support"][at]}</Cap>
    </svg>} />;
}

function MenBalance(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const tilt = [0, -14, 8, 0][at];
  const leftY = 90 + tilt, rightY = 90 - tilt;
  const left = ["Thyroid levels", "Thyroid levels", "Tablets daily", "Thyroid levels"][at];
  const right = ["Weight", "Tired, less active", "Mood", "Mood"][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Weight and mood" title="When the levels settle, so do you" label="Weight and mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balance with thyroid levels on one side and weight or mood on the other">
      <path d="M160 90 V170 M130 176 H190" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <g>
        <path d={`M70 ${leftY} L250 ${rightY}`} stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <path d={`M70 ${leftY} V${leftY + 22} M250 ${rightY} V${rightY + 22}`} stroke={INK} strokeWidth="2" />
        <Box x={14} y={leftY + 22} width={112} text={left} lit={at === 2} />
        <Box x={194} y={rightY + 22} width={116} text={right} lit={at === 3} />
      </g>
      <circle cx="160" cy="90" r="6" fill={GOLD} />
      <Cap>{["Levels normal: weight works as usual", "Lose about 1 to 2 pounds a week", "Take tablets regularly for balance", "Symptoms ease as levels settle"][at]}</Cap>
    </svg>} />;
}

function MenBench(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="Living with the what-ifs" label="Mood" credit="Illustration: Rehyn. If you need help now, call 111 or Samaritans on 116 123."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person on a bench, with a worry, what helps, people to talk to and where to get help now">
      <path d="M20 160 H130 M30 160 V184 M120 160 V184" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <Person x={75} y={146} scale={1.1} fill={at === 0 ? SOFT : INK} />
      {at === 0 && <g><Cloud x={170} y={100} /><W x={212} y={88} size={11}>What if?</W></g>}
      {at === 1 && <Tags x={160} y={30} width={146} gap={36} labels={["Your recovery", "Your feelings", "Managing stress", "What you enjoy"]} lit={() => true} />}
      {at === 2 && <Phone x={232} y={96} text="Your team" width={76} />}
      {at === 3 && <Tags x={160} y={40} width={146} gap={38} labels={["Family, friends", "Support group", "Counselling"]} lit={index => index === 1} />}
      {at === 4 && <Signs x={160} y={30} width={146} labels={["111", "Samaritans 116 123", "999"]} />}
      <Cap>{["Worry often gets better with time", "Focus on what you can control", "Keep your team's numbers handy", "Macmillan: 0808 808 00 00", "Samaritans: 116 123, day or night"][at]}</Cap>
    </svg>} />;
}

export function MenPieceView({ piece, ...props }: { piece: MenPiece } & PieceProps) {
  switch (piece) {
    case "men-fork": return <MenFork {...props} />;
    case "men-germ": return <MenGerm {...props} />;
    case "men-five-years": return <MenFiveYears {...props} />;
    case "men-monthly": return <MenMonthly {...props} />;
    case "men-fortnight": return <MenFortnight {...props} />;
    case "men-now-later": return <MenNowLater {...props} />;
    case "men-vial": return <MenVial {...props} />;
    case "men-morning": return <MenMorning {...props} />;
    case "men-closeness": return <MenCloseness {...props} />;
    case "men-body-map": return <MenBodyMap {...props} />;
    case "men-three-doors": return <MenThreeDoors {...props} />;
    case "men-signposts": return <MenSignposts {...props} />;
    case "men-layers": return <MenLayers {...props} />;
    case "men-tnm": return <MenTnm {...props} />;
    case "men-spacing": return <MenSpacing {...props} />;
    case "men-crowd": return <MenCrowd {...props} />;
    case "men-first-weeks": return <MenFirstWeeks {...props} />;
    case "men-stream": return <MenStream {...props} />;
    case "men-legs": return <MenLegs {...props} />;
    case "men-three-panels": return <MenThreePanels {...props} />;
    case "men-side-by-side": return <MenSideBySide {...props} />;
    case "men-mirror": return <MenMirror {...props} />;
    case "men-phased": return <MenPhased {...props} />;
    case "men-open-door": return <MenOpenDoor {...props} />;
    case "men-butterfly": return <MenButterfly {...props} />;
    case "men-cells": return <MenCells {...props} />;
    case "men-tg": return <MenTg {...props} />;
    case "men-capsule": return <MenCapsule {...props} />;
    case "men-daily-dose": return <MenDailyDose {...props} />;
    case "men-voice": return <MenVoice {...props} />;
    case "men-neck-fold": return <MenNeckFold {...props} />;
    case "men-battery": return <MenBattery {...props} />;
    case "men-planning": return <MenPlanning {...props} />;
    case "men-desk": return <MenDesk {...props} />;
    case "men-balance": return <MenBalance {...props} />;
    case "men-bench": return <MenBench {...props} />;
  }
}
