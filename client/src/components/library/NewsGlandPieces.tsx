import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { GLAND_PIECES, type GlandPiece } from "@/content/gland-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The PCOS and Addison's disease pages' own pieces (content/gland-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Diabetes & metabolism pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body or results.

export const isGlandPiece = (piece: NewsPiece): piece is GlandPiece => (GLAND_PIECES as readonly string[]).includes(piece);

// ==== Shared shapes =========================================================================================

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5, dim = false }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number; dim?: boolean }) =>
  <g opacity={dim ? 0.4 : 1}><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A column of labelled boxes from (x, y) downwards; `lit` boxes are filled, the rest faded when `fade`. */
const Stack = ({ x, y, labels, lit, width = 130, gap = 32, size = 10.5, fade = false }: { x: number; y: number; labels: string[]; lit: (index: number) => boolean; width?: number; gap?: number; size?: number; fade?: boolean }) =>
  <g>{labels.map((label, index) => <g key={label} opacity={fade && !lit(index) ? 0.4 : 1}><Box x={x + width / 2} y={y + 13 + index * gap} w={width} text={label} lit={lit(index)} size={size} /></g>)}</g>;
/** The caption under a picture. */
const Say = ({ y = 206, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
const Tick = ({ x, y, s = 8 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y} l${s * 0.7} ${s * 0.7} l${s * 1.3} ${-s * 1.4}`} stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const Drop = ({ x, y, r = 8, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r * 1.7} C${x + r * 0.4} ${y - r}, ${x + r} ${y - r * 0.4}, ${x + r} ${y + r * 0.1} A${r} ${r} 0 0 1 ${x - r} ${y + r * 0.1} C${x - r} ${y - r * 0.4}, ${x - r * 0.4} ${y - r}, ${x} ${y - r * 1.7} Z`} fill={fill} />;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
/** A speech bubble with its tail pointing down-left, centred on (x, y). */
const Bubble = ({ x, y, text, width = 120 }: { x: number; y: number; text: string; width?: number }) =>
  <g>
    <rect x={x - width / 2} y={y - 15} width={width} height="30" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" />
    <path d={`M${x - width / 2 + 18} ${y + 14} l-8 12 l18 -12`} fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <W x={x} y={y + 4} size={10.5}>{text}</W>
  </g>;
/** A syringe centred on (x, y). */
const Syringe = ({ x, y, rotate = -35, lit = true }: { x: number; y: number; rotate?: number; lit?: boolean }) =>
  <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
    <rect x="-20" y="-7" width="34" height="14" rx="3" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
    <path d="M14 0 H30 M-20 -11 V11 M-20 0 H-30 M-30 -8 V8" stroke={INK} strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </g>;
/** A phone centred on (x, y) with a number on its screen. */
const Phone = ({ x, y, text, lit = false, w = 40, h = 64 }: { x: number; y: number; text: string; lit?: boolean; w?: number; h?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="7" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={x} y={y + 4} size={11} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A blood test tube centred on (x, y). */
const Tube = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 8} y={y - 28} width="16" height="56" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 6} y={y} width="12" height="26" rx="6" fill={lit ? INK : SOFT} /><rect x={x - 10} y={y - 32} width="20" height="8" rx="3" fill={INK} /></g>;
/** A kidney centred on (x, y), with its adrenal gland on top; `flip` mirrors it. */
const Kidney = ({ x, y, flip = false, gland = WHITE, opacity = 1 }: { x: number; y: number; flip?: boolean; gland?: string; opacity?: number }) =>
  <g transform={flip ? `translate(${2 * x} 0) scale(-1 1)` : undefined} opacity={opacity}>
    <path d={`M${x} ${y - 32} C${x - 30} ${y - 32}, ${x - 32} ${y + 32}, ${x} ${y + 32} C${x + 16} ${y + 32}, ${x + 18} ${y + 10}, ${x + 8} ${y} C${x + 18} ${y - 10}, ${x + 16} ${y - 32}, ${x} ${y - 32} Z`} fill={TINT} stroke={INK} strokeWidth="3" />
    <path d={`M${x - 20} ${y - 26} Q${x - 6} ${y - 60} ${x + 12} ${y - 30} Q${x - 4} ${y - 36} ${x - 20} ${y - 26} Z`} fill={gland} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
  </g>;

// ==== PCOS (now called PMOS) ================================================================================

function PcosOvary(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["1 in 8 women in the UK, says Verity", "Renamed PMOS on 12 May 2026", "Insulin resistance: more insulin made", "Cause unknown; it can run in families"];
  const follicles = [[50, 80], [72, 72], [94, 82], [48, 104], [70, 112], [96, 104], [72, 92]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="One hormone condition, a new name" label="What PCOS is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An ovary with small follicles, beside how common PCOS is, its new name, the hormones involved and family links">
      <ellipse cx="72" cy="92" rx="52" ry="38" fill={WHITE} stroke={INK} strokeWidth="3" />
      {follicles.map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r="6.5" fill={at === 1 ? TINT : SOFT} stroke={at === 1 ? INK : "none"} strokeWidth="2" />)}
      <W x={72} y={150} size={10.5}>{at === 1 ? "Follicles, not true cysts" : "Ovary"}</W>
      {at === 0 && <>{Array.from({ length: 8 }, (_, index) => <Person key={index} x={176 + (index % 4) * 38} y={index < 4 ? 70 : 128} scale={0.75} fill={index === 0 ? INK : SOFT} />)}<W x={233} y={170} size={13}>1 in 8</W></>}
      {at === 1 && <><Box x={186} y={92} w={62} text="PCOS" size={11} /><path d="M164 92 H208" stroke={GOLD} strokeWidth="3" /><Arrow d="M222 92 H244" head="M238 86 L245 92 L238 98" /><Box x={280} y={92} w={62} text="PMOS" lit size={11} /></>}
      {at === 2 && <>
        <path d="M168 150 H300" stroke={LINE} strokeWidth="3" />
        <rect x="180" y="56" width="36" height="94" rx="6" fill={INK} />
        <rect x="248" y="96" width="36" height="54" rx="6" fill={SOFT} />
        <path d="M242 110 H290" stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" />
        <W x={198} y={168} size={10.5}>Insulin</W><W x={266} y={168} size={10.5}>Testosterone</W>
      </>}
      {at === 3 && <>{[0, 1, 2].map(index => <Person key={index} x={186 + index * 46} y={112} scale={0.95} fill={index === 1 ? INK : SOFT} />)}<W x={232} y={152} size={10.5}>Mothers, aunts, sisters</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PcosBodySigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Periods, hair, skin, weight and mood", "Mild, severe, or no symptoms at all", "Usually from puberty to menopause", "Irregular: under 21 or over 35 days", "Sudden changes: urgent GP appointment"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Periods, hair, skin and mood" label="Symptoms of PCOS" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person beside the symptoms of PCOS, when they start, and what counts as an irregular cycle">
      <Person x={70} y={146} scale={1.7} fill={at === 4 ? INK : SOFT} />
      {(at === 0 || at === 1) && <Stack x={152} y={22} labels={["Periods", "Hair", "Skin and acne", "Weight", "Mood"]} lit={index => at === 0 || index === 0 || index === 2} width={140} gap={31} fade={at === 1} />}
      {at === 2 && <>
        <path d="M160 104 H296" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        <circle cx="160" cy="104" r="9" fill={GOLD} /><circle cx="296" cy="104" r="9" fill={SOFT} />
        <W x={152} y={134} size={10.5} anchor="start">Puberty</W><W x={304} y={134} size={10.5} anchor="end">Menopause</W>
        <W x={152} y={78} size={10.5} anchor="start">Often under 18</W>
      </>}
      {at === 3 && <>
        <path d="M150 112 H300" stroke={LINE} strokeWidth="4" />
        <rect x="213" y="98" width="42" height="28" rx="6" fill={TINT} stroke={INK} strokeWidth="2" />
        <circle cx="234" cy="112" r="7" fill={GOLD} />
        <W x={213} y={144} size={10.5}>21</W><W x={255} y={144} size={10.5}>35</W>
        <W x={226} y={78} size={10.5}>About 28 days on average</W>
        <W x={226} y={166} size={10}>days between periods</W>
      </>}
      {at === 4 && <><W x={222} y={44} size={11}>Ask urgently if:</W><Stack x={152} y={58} labels={["Sudden new hair", "A lower voice", "Bigger muscles"]} lit={() => true} width={140} gap={34} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PcosTwoOfThree(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Blood tests, and a scan if over 18", "Usually 2 of 3 features are needed", "A scan is not always needed", "Other blood tests rule out causes", "Symptoms come and go, so it takes time"];
  const venn = at === 1 || at === 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Diagnosis" title="Two out of three features" label="How PCOS is diagnosed" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three overlapping circles for the three features of PCOS, and the tests used">
      {venn && <>
        <circle cx="130" cy="78" r="46" fill={INK} fillOpacity=".22" stroke={INK} strokeWidth="2.5" />
        <circle cx="190" cy="78" r="46" fill={INK} fillOpacity=".22" stroke={INK} strokeWidth="2.5" />
        <circle cx="160" cy="128" r="46" fill={INK} fillOpacity={at === 2 ? 0.05 : 0.22} stroke={INK} strokeWidth="2.5" strokeDasharray={at === 2 ? "7 6" : undefined} />
        <W x={104} y={24} size={10.5}>Ovulation</W><W x={216} y={24} size={10.5}>Androgen</W><W x={214} y={166} size={10.5} anchor="start">Scan</W>
        {at === 1 && <W x={160} y={102} size={11}>2 of 3</W>}
      </>}
      {at === 0 && <>
        <Tube x={95} y={80} lit />
        <rect x="195" y="52" width="60" height="44" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M208 88 L225 62 L242 88 Z" fill={SOFT} /><path d="M225 96 V108 M210 108 H240" stroke={INK} strokeWidth="2.5" />
        <Box x={95} y={140} w={100} text="Blood tests" lit /><Box x={225} y={140} w={110} text="Ultrasound scan" />
      </>}
      {at === 3 && <>
        <Tube x={100} y={80} /><Tube x={220} y={80} />
        <Box x={100} y={140} w={110} text="Thyroid test" lit /><Box x={220} y={140} w={110} text="Prolactin" lit />
      </>}
      {at === 4 && <>
        <path d="M30 150 H296" stroke={LINE} strokeWidth="3" />
        <path d="M30 110 C55 60, 75 60, 100 110 S145 160, 170 110 S215 60, 240 110 S285 150, 296 120" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <W x={296} y={170} size={10.5} anchor="end">Months</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PcosLifeChecks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["PCOS can raise some health risks", "1 or 2 in 10 go on to get diabetes", "Blood pressure is checked and treated", "Progestogen can protect the lining", "Check-ups and healthy habits help"];
  const tiles = ["Diabetes", "Heart", "Womb", "Liver"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Long-term health" title="Looking after your future health" label="Long-term health" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four health areas linked to PCOS, and the checks and habits that lower the risks">
      {tiles.map((tile, index) => <g key={tile} opacity={at === 0 || at === 4 || at === index + 1 ? 1 : 0.4}>
        <rect x={18 + index * 74} y="24" width="66" height="48" rx="10" fill={at === index + 1 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={51 + index * 74} y={52} size={10.5} fill={at === index + 1 ? WHITE : TEXT}>{tile}</W>
        {at === 4 && <Tick x={74 + index * 74} y={26} s={7} />}
      </g>)}
      {at === 0 && <><path d="M30 140 H284" stroke={INK} strokeWidth="5" strokeLinecap="round" /><path d="M276 132 L288 140 L276 148" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" /><W x={160} y={122} size={11}>A condition for life</W></>}
      {at === 1 && <>{Array.from({ length: 10 }, (_, index) => <Person key={index} x={34 + index * 28} y={156} scale={0.72} fill={index === 0 ? INK : index === 1 ? GOLD : SOFT} />)}<W x={160} y={106} size={11}>Whatever your weight</W></>}
      {at === 2 && <Gauge x={160} y={158} r={48} value={0.72} label="Blood pressure" />}
      {at === 3 && <>
        <W x={140} y={125} size={10.5} anchor="end">Few periods</W><rect x="150" y="108" width="140" height="24" rx="6" fill={SOFT} />
        <W x={140} y={162} size={10.5} anchor="end">Protected</W><rect x="150" y="151" width="140" height="12" rx="6" fill={INK} />
      </>}
      {at === 4 && ["Healthy food", "Exercise", "Check-ups"].map((label, index) => <Box key={label} x={58 + index * 102} y={130} w={92} text={label} lit={index === 2} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PcosPeriodCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The pill or an IUS can help", "A period every 3 to 4 months", "Options depend on plans for a baby", "Pregnancy is possible without periods", "Bleeding between periods? See a GP"];
  const marked: number[] = at === 1 || at === 2 ? [0, 3, 7, 10] : [];
  // The womb lining builds month by month, and is shed with each period.
  let lining = "";
  if (at === 1) { let level = 0; for (let month = 0; month < 12; month++) { level = marked.includes(month) ? 0 : level + 1; lining += `${month ? "L" : "M"}${25 + month * 25} ${160 - level * 10} `; if (marked.includes(month + 1)) lining += `L${25 + (month + 1) * 25} ${160 - (level + 1) * 10} L${25 + (month + 1) * 25} 160 `; } }
  return <MemoryBand props={props} state={s} tone="theme" kicker="Irregular periods" title="A bleed every few months" label="Treating irregular periods" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year of months with a period every few months, and the treatments that help">
      {"JFMAMJJASOND".split("").map((month, index) => <g key={index}>
        <rect x={14 + index * 25} y="24" width="22" height="26" rx="5" fill={marked.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="1.8" />
        <W x={25 + index * 25} y={41} size={10} fill={marked.includes(index) ? WHITE : TEXT}>{month}</W>
      </g>)}
      {at === 0 && <>
        <g transform="translate(60 104) scale(1.4)"><Pill x={0} y={0} /></g>
        <g transform="translate(160 104) scale(1.4)"><Pill x={0} y={0} fill={SOFT} /></g>
        <path d="M244 88 Q260 100 276 88 M260 96 V128" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
        <W x={60} y={150} size={10}>Combined pill</W><W x={160} y={150} size={10}>Progestogen pill</W><W x={260} y={150} size={10}>IUS</W>
      </>}
      {at === 1 && <><path d={lining} stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" /><path d="M25 160 H300" stroke={LINE} strokeWidth="2" /><W x={300} y={180} size={10} anchor="end">Womb lining</W></>}
      {at === 2 && <Stack x={70} y={70} labels={["Progestogen tablets", "A contraceptive pill", "The Mirena IUS"]} lit={() => true} width={180} gap={34} />}
      {at === 3 && <Box x={160} y={110} w={230} text="Ask a GP about contraception" lit />}
      {at === 4 && <>
        <Drop x={56} y={96} r={9} /><Drop x={160} y={96} r={9} /><Drop x={264} y={96} r={9} />
        {["Over 7 days", "Between periods", "Pattern changes"].map((label, index) => <Box key={label} x={56 + index * 104} y={136} w={98} text={label} size={10} lit={index === 1} />)}
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PcosCareShelf(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Home removal, creams or tablets", "Longer-lasting, not usually permanent", "Gentle cleanser twice a day", "Hair loss can be upsetting; ask a GP", "Some options do not suit pregnancy"];
  const notes = ["Shave, wax, pluck, cream or bleach", "Not usually on the NHS", "No picking or squeezing spots", "Losing 50 to 100 hairs a day is normal", "Weight loss helps some, not all"];
  const lit = [[0, 1, 2], [3], [4, 1], [5], [2]][at];
  const on = (index: number) => lit.includes(index);
  const f = (index: number) => on(index) ? INK : WHITE;
  const d = (index: number) => on(index) ? WHITE : INK;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Hair and skin" title="Options for hair and skin" label="Hair and skin" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A shelf of hair and skin options: a razor, cream, tablets, laser, cleanser and minoxidil">
      <W x={160} y={44} size={10.5}>{notes[at]}</W>
      <path d="M12 140 H308" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <g opacity={on(0) ? 1 : 0.4}><rect x="32" y="98" width="6" height="40" rx="3" fill={f(0)} stroke={INK} strokeWidth="2" /><rect x="21" y="88" width="28" height="11" rx="3" fill={f(0)} stroke={INK} strokeWidth="2" /></g>
      <g opacity={on(1) ? 1 : 0.4}><rect x="75" y="96" width="20" height="42" rx="4" fill={f(1)} stroke={INK} strokeWidth="2" /><rect x="79" y="87" width="12" height="9" rx="2" fill={INK} /><path d="M80 112 H90" stroke={d(1)} strokeWidth="2" /></g>
      <g opacity={on(2) ? 1 : 0.4}><rect x="120" y="100" width="30" height="38" rx="4" fill={f(2)} stroke={INK} strokeWidth="2" />{[0, 1, 2, 3, 4, 5].map(index => <circle key={index} cx={128 + (index % 2) * 14} cy={109 + Math.floor(index / 2) * 11} r="3.5" fill={d(2)} />)}</g>
      <g opacity={on(3) ? 1 : 0.4}><rect x="179" y="98" width="12" height="40" rx="6" fill={f(3)} stroke={INK} strokeWidth="2" /><path d="M185 92 V80 M176 88 L170 80 M194 88 L200 80" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /></g>
      <g opacity={on(4) ? 1 : 0.4}><rect x="223" y="104" width="24" height="34" rx="5" fill={f(4)} stroke={INK} strokeWidth="2" /><rect x="231" y="94" width="8" height="10" fill={INK} /><path d="M235 94 V88 H246" stroke={INK} strokeWidth="3" fill="none" /></g>
      <g opacity={on(5) ? 1 : 0.4}><rect x="274" y="106" width="22" height="32" rx="4" fill={f(5)} stroke={INK} strokeWidth="2" /><rect x="281" y="96" width="8" height="10" fill={INK} /><circle cx="285" cy="92" r="5" fill={INK} /></g>
      {["Razor", "Cream", "Tablets", "Laser", "Cleanser", "Minoxidil"].map((label, index) => <W key={label} x={35 + index * 50} y={160} size={10}>{label}</W>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PcosEggPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["An egg may not be released each month", "Not pregnant after a year? See a GP", "Clomifene helps release an egg", "If not, ovarian drilling or IVF", "NHS funding varies; a GP can advise"];
  const egg = [[60, 96], [60, 96], [114, 140], [222, 104], [60, 96]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fertility" title="Helping an egg on its way" label="Fertility" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An ovary and an egg, with a path of treatments that can help">
      <ellipse cx="60" cy="96" rx="42" ry="32" fill={WHITE} stroke={INK} strokeWidth="3" />
      {[[42, 84], [80, 86], [46, 110], [76, 110]].map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r="5.5" fill={SOFT} />)}
      <W x={60} y={146} size={10.5}>Ovary</W>
      <path d="M100 106 C112 150, 125 150, 140 152 S200 118, 220 118 S268 84, 280 80" stroke={SOFT} strokeWidth="3" strokeDasharray="6 7" fill="none" opacity={at === 0 ? 0.4 : 1} />
      <Box x={150} y={152} w={84} text="Medicines" lit={at === 2} dim={at === 0} />
      <Box x={220} y={118} w={74} text="Drilling" lit={at === 3} dim={at === 0} />
      <Box x={282} y={80} w={50} text="IVF" lit={at === 3} dim={at === 0} />
      {at === 1 && <>{Array.from({ length: 12 }, (_, index) => <rect key={index} x={120 + index * 15} y="20" width="12" height="14" rx="3" fill={SOFT} />)}<W x={210} y={52} size={10.5}>A year of trying</W></>}
      <circle cx={egg[0]} cy={egg[1]} r="7" fill={GOLD} stroke={WHITE} strokeWidth="2" className={still || at !== 2 ? undefined : "lib-why-pulse"} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PcosPlateWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Healthy habits can help symptoms", "Even 5% can reduce insulin resistance", "Balanced meals, eaten regularly", "30 minutes, at least 3 times a week", "A GP can refer you to a dietitian"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Food and activity" title="Small changes you can keep" label="Weight, food and activity" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balanced plate beside a week of activity and the support on offer">
      <g opacity={at === 2 || at === 0 ? 1 : 0.5}>
        <circle cx="76" cy="98" r="58" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M76 52 A46 46 0 0 0 76 144 Z" fill={at === 2 ? INK : SOFT} opacity=".8" />
        <path d="M76 52 A46 46 0 0 1 122 98 L76 98 Z" fill={TINT} stroke={INK} strokeWidth="1.5" />
        <path d="M122 98 A46 46 0 0 1 76 144 L76 98 Z" fill={at === 2 ? SOFT : LINE} />
      </g>
      {at === 0 && <Stack x={156} y={38} labels={["Hormones", "Weight", "General health", "Quality of life"]} lit={() => true} width={140} gap={32} />}
      {at === 1 && <>
        <rect x="160" y="84" width="140" height="28" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x="284" y="84" width="16" height="28" rx="6" fill={GOLD} />
        <W x={292} y={74} size={11}>5%</W>
        <W x={230} y={142} size={10.5}>For those who are overweight</W>
        <W x={230} y={162} size={10}>It does not work for everyone</W>
      </>}
      {at === 2 && <Stack x={156} y={38} labels={["Fruit and veg", "Whole foods", "Lean protein", "Regular meals"]} lit={index => index < 3} width={140} gap={32} />}
      {at === 3 && <>{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}>
        <rect x={160 + index * 20} y="66" width="16" height="64" rx="5" fill={index % 2 === 0 && index < 5 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={168 + index * 20} y={146} size={10}>{day}</W>
      </g>)}<W x={230} y={54} size={10.5}>30 minutes, 3 days</W></>}
      {at === 4 && <><Person x={196} y={150} scale={1.2} /><Box x={250} y={70} w={110} text="NHS dietitian" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PcosCheckList(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Checks spot problems early", "Diabetes test every 1 to 3 years", "Blood pressure at least once a year", "A period every 3 to 4 months; mood too"];
  const rows = ["Blood sugar", "Blood pressure", "Cholesterol", "Womb and mood"];
  const done = [[], [0], [1, 2], [3]][at];
  const notes = [["Regular", "check-ups"], ["Every", "1 to 3 years"], ["Cholesterol", "at diagnosis"], ["A counsellor", "if you need one"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Regular checks" title="The checks worth keeping up" label="Regular checks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clipboard of regular checks, ticked one by one">
      <rect x="22" y="26" width="164" height="160" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="74" y="18" width="60" height="16" rx="5" fill={INK} />
      {rows.map((row, index) => <g key={row} opacity={at === 0 || done.includes(index) ? 1 : 0.45}>
        <rect x="36" y={52 + index * 34} width="18" height="18" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" />
        {done.includes(index) && <Tick x={41} y={61 + index * 34} s={6} />}
        <W x={64} y={65 + index * 34} size={11} anchor="start">{row}</W>
      </g>)}
      <rect x="200" y="64" width="104" height="72" rx="10" fill={TINT} stroke={INK} strokeWidth="2" />
      <W x={252} y={94} size={11}>{notes[0]}</W><W x={252} y={114} size={10.5}>{notes[1]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PcosMirrorTalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["It can affect how you see yourself", "Depression and anxiety are more common", "Refer yourself to talking therapies", "Peer support, like Verity's group", "Help is there, day or night"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="When PCOS weighs on you" label="Mood and body image" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person, a mirror and the people and services that can help">
      <Person x={64} y={150} scale={1.5} />
      {at === 0 && <><rect x="150" y="44" width="70" height="120" rx="30" fill={TINT} stroke={INK} strokeWidth="3" /><g opacity=".6"><Person x={185} y={140} scale={1.1} fill={SOFT} /></g><path d="M185 164 V180 M165 180 H205" stroke={INK} strokeWidth="3" /></>}
      {at === 1 && <Stack x={146} y={36} labels={["Low mood", "Anxiety", "Body image", "Binge eating"]} lit={index => index < 2} width={140} gap={32} />}
      {at === 2 && <><Bubble x={210} y={68} text="Talking therapy" width={130} /><Box x={226} y={132} w={146} text="Without seeing a GP" lit /></>}
      {at === 3 && <><HeartShape x={232} y={56} size={40} fill={GOLD} stroke={GOLD} width={2} />{[0, 1, 2].map(index => <Person key={index} x={182 + index * 50} y={146} scale={0.95} fill={index === 1 ? INK : SOFT} />)}</>}
      {at === 4 && <Stack x={146} y={46} labels={["111 online or by phone", "Samaritans 116 123", "999 or A&E"]} lit={index => index === 1} width={156} gap={36} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PcosPregnancyLine(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Checks help find risks early", "Folic acid and vitamin D first", "A diabetes test at 24 to 28 weeks", "A test 6 to 13 weeks after the birth"];
  const flags = ["Before", "By 20 weeks", "24 to 28 weeks", "After birth"];
  const lit = [[], [0], [1, 2], [3]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pregnancy" title="Extra checks for a safer pregnancy" label="Pregnancy with PCOS" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pregnancy timeline with checks before, during and after">
      <path d="M28 124 H292" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {flags.map((flag, index) => { const x = 50 + index * 73; return <g key={flag} opacity={at === 0 || lit.includes(index) ? 1 : 0.4}>
        <path d={`M${x} 124 V92`} stroke={INK} strokeWidth="3" />
        <path d={`M${x} 92 L${x + 22} 99 L${x} 106 Z`} fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <W x={x} y={146} size={10}>{flag}</W>
      </g>; })}
      {at === 0 && ["Diabetes", "Blood pressure", "Early birth"].map((label, index) => <Box key={label} x={60 + index * 100} y={50} w={92} text={label} size={10} />)}
      {at === 1 && <><Pill x={46} y={50} /><Box x={140} y={50} w={96} text="Folic acid" lit /><Box x={246} y={50} w={96} text="Vitamin D" lit /></>}
      {at === 2 && <><Clock x={110} y={50} r={18} hand={2} /><W x={140} y={55} size={10.5} anchor="start">Glucose test, about 2 hours</W></>}
      {at === 3 && <W x={160} y={56} size={10.5}>Then once a year, if normal</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PcosSupportCircle(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Support from others can help", "Verity: the UK PCOS charity", "Other groups the NHS lists", "Look for evidence-based information"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You are not on your own" label="Getting support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="People around a source of support: the team, Verity and other organisations">
      {[[46, 120], [274, 120], [104, 56], [216, 56]].map(([x, y], index) => <Person key={index} x={x} y={y} scale={0.85} fill={at === 0 ? INK : SOFT} />)}
      {at === 0 && <><HeartShape x={160} y={110} size={54} fill={GOLD} stroke={GOLD} width={2} /><W x={160} y={166} size={10.5}>Your team, and others too</W></>}
      {at === 1 && <><Box x={160} y={106} w={92} text="Verity" lit size={12} /><W x={160} y={142} size={10.5}>Over 12,000 in its group</W></>}
      {at === 2 && <Stack x={76} y={84} labels={["The Lowdown", "British Fertility Society", "Fertility Network UK"]} lit={() => false} width={168} gap={32} size={10} />}
      {at === 3 && <>{["Verity", "NICE", "Guidelines"].map((label, index) => <g key={label}><Box x={84 + index * 76} y={150} w={68} text={label} lit size={10} /><Tick x={80 + index * 76} y={124} s={6} /></g>)}</>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Addison's disease =====================================================================================

function AddGlands(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Two small glands on top of the kidneys", "Cortisol is essential for life", "Usually the immune system damages them", "Most often between ages 30 and 50", "Secondary: problem in the pituitary"];
  const gland = at === 0 ? GOLD : at === 2 ? SOFT : INK;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Two small glands, two vital hormones" label="What Addison's disease is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two kidneys with an adrenal gland on top of each, and the hormones they make">
      <g className={still || at !== 0 ? undefined : "lib-why-pulse"}><Kidney x={66} y={124} gland={gland} /><Kidney x={150} y={124} flip gland={gland} /></g>
      <W x={108} y={180} size={10.5}>Kidneys</W>
      {at === 0 && <><W x={108} y={58} size={10.5}>Adrenal glands</W><W x={252} y={78} size={10.5}>They make:</W><Stack x={190} y={90} labels={["Cortisol", "Aldosterone"]} lit={() => false} width={124} gap={34} /></>}
      {at === 1 && <><Arrow d="M162 82 C176 70, 182 66, 188 66" head="M182 60 L189 66 L182 72" /><Stack x={190} y={52} labels={["Cortisol: blood sugar", "Aldosterone: salt"]} lit={() => true} width={124} gap={40} size={10} /></>}
      {at === 2 && <>
        {[[38, 74], [62, 62], [128, 62], [156, 74], [96, 70]].map(([x, y], index) => <path key={index} d={`M${x} ${y + 8} V${y} M${x} ${y} L${x - 5} ${y - 6} M${x} ${y} L${x + 5} ${y - 6}`} stroke={INK} strokeWidth="2.5" strokeLinecap="round" fill="none" />)}
        <W x={252} y={100} size={16}>70% to 90%</W><W x={252} y={120} size={10.5}>of UK cases</W>
      </>}
      {at === 3 && <><W x={252} y={86} size={16}>About 8,400</W><W x={252} y={106} size={10.5}>people in the UK</W><W x={252} y={136} size={10.5}>More women than men</W></>}
      {at === 4 && <>
        <circle cx="108" cy="36" r="18" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="108" cy="40" r="5" fill={GOLD} />
        <path d="M108 56 V74" stroke={GOLD} strokeWidth="3" strokeDasharray="4 4" />
        <Box x={252} y={86} w={124} text="Primary: adrenals" /><Box x={252} y={124} w={124} text="Secondary: pituitary" lit />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AddSlowCreep(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Early on, like depression or flu", "Slowly, over months or years", "Darker skin: creases, scars, gums", "If it suddenly gets worse, call 999"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="The slow creep of Addison's" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Symptoms building slowly over months, changes in the skin, and when to get help">
      {at === 0 && <><Person x={64} y={150} scale={1.5} fill={SOFT} /><Stack x={146} y={36} labels={["Very tired", "Weak muscles", "Low mood", "Craving salt"]} lit={() => true} width={146} gap={32} /></>}
      {at === 1 && <>
        <path d="M30 166 H300" stroke={LINE} strokeWidth="3" />
        <path d="M30 158 C110 154, 190 140, 236 126" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M236 126 L254 62" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <W x={250} y={48} size={10.5}>Illness or accident</W>
        <W x={120} y={186} size={10.5}>Months or years</W>
      </>}
      {at === 2 && <>
        {[0, 1, 2, 3].map(index => <rect key={index} x={54 + index * 17} y="40" width="14" height="60" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" />)}
        <path d="M40 120 L28 96" stroke={INK} strokeWidth="12" strokeLinecap="round" />
        <rect x="44" y="88" width="80" height="84" rx="20" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M54 118 C74 110, 96 110, 116 120 M52 140 C72 132, 92 134, 112 142" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <Stack x={150} y={56} labels={["Palm creases", "Scars", "Lips and gums"]} lit={() => true} width={140} gap={34} />
      </>}
      {at === 3 && <><Box x={92} y={110} w={130} text="Worried? See a GP" /><Phone x={240} y={110} text="999" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AddSynacthen(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Blood pressure lying, then standing", "Sodium, potassium and cortisol", "Blood at the start, 30 and 60 minutes", "More tests can find the cause", "Treatment starts before results come"];
  const points = [{ x: 44, t: "Start" }, { x: 122, t: "Injection" }, { x: 200, t: "30 min" }, { x: 278, t: "60 min" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Diagnosis" title="One injection, a few blood samples" label="Tests and diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The tests for Addison's disease, from blood pressure checks to the short Synacthen test">
      {at === 0 && <>
        <path d="M24 136 H136" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <circle cx="40" cy="118" r="10" fill={SOFT} /><rect x="54" y="110" width="66" height="18" rx="9" fill={SOFT} />
        <Arrow d="M150 118 H186" head="M180 112 L187 118 L180 124" />
        <Person x={232} y={136} scale={1.3} />
        <W x={80} y={162} size={10.5}>Lying down</W><W x={232} y={172} size={10.5}>Standing up</W>
      </>}
      {at === 1 && <>{["Sodium", "Potassium", "Cortisol"].map((label, index) => <g key={label}>
        <W x={80 + index * 80} y={40} size={10.5}>{["Low?", "High?", "Low?"][index]}</W>
        <Tube x={80 + index * 80} y={86} lit />
        <Box x={80 + index * 80} y={146} w={74} text={label} size={10} />
      </g>)}</>}
      {at === 2 && <>
        <path d="M44 110 H278" stroke={LINE} strokeWidth="5" strokeLinecap="round" />
        {points.map((point, index) => <g key={point.t}>
          <circle cx={point.x} cy={110} r="7" fill={index === 1 ? GOLD : INK} />
          {index === 1 ? <Syringe x={point.x} y={70} /> : <Drop x={point.x} y={76} r={10} />}
          <W x={point.x} y={138} size={10.5}>{point.t}</W>
        </g>)}
        <W x={160} y={172} size={10.5}>Healthy glands make more cortisol</W>
      </>}
      {at === 3 && <>
        {["Aldosterone", "ACTH", "Antibodies", "Thyroid"].map((label, index) => <Box key={label} x={100 + (index % 2) * 120} y={56 + Math.floor(index / 2) * 42} w={106} text={label} lit={index === 2} />)}
        <W x={160} y={160} size={10.5}>A CT or MRI scan, for some</W>
      </>}
      {at === 4 && <><Syringe x={96} y={70} rotate={-20} /><rect x="210" y="40" width="40" height="56" rx="8" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M230 96 V118" stroke={INK} strokeWidth="2.5" /><Box x={96} y={146} w={100} text="Steroids" lit /><Box x={230} y={146} w={100} text="Fluids" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AddCrisisSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Symptoms get worse very quickly", "Weak, sick, dizzy, cold or confused", "Inject 100mg, then call 999", "If in doubt, inject; then to hospital", "About 8 in 100 a year: learn the signs"];
  const lit = [[], [], [0, 1, 2], [0, 1, 3], [0, 1, 2, 3]][at];
  const on = (index: number) => lit.includes(index);
  const steps = ["Inject", "Call 999", "Rest safely", "Hospital"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Adrenal crisis" title="Inject, then call 999" label="Adrenal crisis" credit="Illustration: Rehyn. In an adrenal crisis: inject if you have a kit, then call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The steps in an adrenal crisis: inject, call 999, rest safely, hospital">
      {at === 0 && ["Infection", "Injury", "Surgery", "Stress"].map((label, index) => <Box key={label} x={44 + index * 78} y={50} w={70} text={label} size={10} />)}
      {at === 1 && ["Very weak", "Being sick", "Dizzy", "Confused"].map((label, index) => <Box key={label} x={44 + index * 78} y={50} w={70} text={label} size={10} lit />)}
      {at === 2 && <Box x={160} y={46} w={290} text="Say “steroid-dependent” and “adrenal crisis”" size={10} />}
      {at === 3 && <Box x={160} y={46} w={170} text="If in doubt, inject" lit />}
      {at === 4 && <Box x={160} y={46} w={220} text="Teach the people around you" />}
      {at === 2 && <W x={44} y={90} size={10.5}>100mg</W>}
      <g opacity={on(0) ? 1 : 0.4}><Syringe x={44} y={122} lit={on(0)} /></g>
      <g opacity={on(1) ? 1 : 0.4} className={still || at !== 2 ? undefined : "lib-why-pulse"}><Phone x={122} y={122} text="999" lit={on(1)} w={34} h={52} /></g>
      <g opacity={on(2) ? 1 : 0.4}><path d="M176 140 H226" stroke={INK} strokeWidth="3" strokeLinecap="round" /><circle cx="182" cy="126" r="8" fill={on(2) ? INK : SOFT} /><rect x="192" y="120" width="34" height="13" rx="6" fill={on(2) ? INK : SOFT} /></g>
      <g opacity={on(3) ? 1 : 0.4}><rect x="256" y="100" width="44" height="42" rx="4" fill={on(3) ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><path d="M278 108 V128 M268 118 H288" stroke={on(3) ? WHITE : INK} strokeWidth="4" strokeLinecap="round" /></g>
      {steps.map((step, index) => <W key={step} x={44 + index * 78} y={166} size={10} fill={on(index) ? TEXT : SOFT}>{step}</W>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AddCortisolCurve(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Daily tablets replace the hormones", "Largest dose on waking, smaller later", "Fludrocortisone helps keep salt in", "Fine-tuned over weeks and months", "Talk to your doctor before stopping"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Daily tablets" title="Copying the body's daily rhythm" label="Hydrocortisone and fludrocortisone" credit="Illustration: Rehyn. The shape of the idea, not anyone's own doses."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The body's natural cortisol curve through the day, with tablets spaced to copy it">
      <path d="M30 160 H300" stroke={LINE} strokeWidth="3" />
      <path d="M30 150 C50 150, 55 148, 64 140 C80 110, 95 50, 115 50 C150 52, 200 110, 278 148 L300 150" stroke={at === 1 ? INK : SOFT} strokeWidth={at === 1 ? 4 : 3} fill="none" strokeLinecap="round" />
      {[{ x: 64, t: "3am" }, { x: 120, t: "8am" }, { x: 188, t: "2pm" }, { x: 278, t: "10pm" }].map(tick => <W key={tick.t} x={tick.x} y={182} size={10}>{tick.t}</W>)}
      {at === 1 && <><g transform="translate(120 160) scale(1.3)"><Pill x={0} y={0} /></g><g transform="translate(188 160) scale(0.9)"><Pill x={0} y={0} /></g><g transform="translate(240 160) scale(0.7)"><Pill x={0} y={0} /></g><Box x={250} y={40} w={120} text="2 or 3 times a day" size={10} /></>}
      {at === 0 && <><Box x={248} y={38} w={124} text="Hydrocortisone" lit /><Box x={248} y={72} w={124} text="Fludrocortisone" lit /></>}
      {at === 2 && <><Box x={248} y={38} w={124} text="Fludrocortisone" lit /><Box x={248} y={72} w={124} text="Keeps salt in" /></>}
      {at === 3 && <><Box x={248} y={38} w={124} text="Doses vary" /><Box x={248} y={72} w={124} text="Weeks to months" lit /></>}
      {at === 4 && <Box x={248} y={50} w={124} text="Never stop suddenly" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AddSickDay(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Illness raises the need for cortisol", "When illness or injury needs extra", "Extra for 48 hours, then step down", "Sick again? Injection, then A&E", "Keep 3 months' reserve; get a flu jab"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Sick day rules" title="When you are ill, take more" label="Sick day rules" credit="Illustration: Rehyn. Follow the sick day rules your own team gives you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Extra medicine when you are ill: when to start, how long for, and what to do if you are being sick">
      {at === 0 && <>
        <rect x="60" y="40" width="16" height="96" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="68" cy="146" r="16" fill={INK} /><rect x="64" y="70" width="8" height="70" fill={INK} />
        <Gauge x={210} y={140} r={56} value={0.85} label="Cortisol needed" />
      </>}
      {at === 1 && <>
        {["Fever over 37.5°C", "Bed rest", "Antibiotics", "An injury"].map((label, index) => <Box key={label} x={92 + (index % 2) * 136} y={60 + Math.floor(index / 2) * 42} w={124} text={label} lit />)}
        <Box x={160} y={150} w={170} text="Stress, such as exams" />
      </>}
      {at === 2 && <>
        <path d="M30 160 H300" stroke={LINE} strokeWidth="3" />
        <path d="M30 136 H80 V76 H200 V96 H230 V116 H260 V136 H300" stroke={INK} strokeWidth="4" fill="none" strokeLinejoin="round" />
        <path d="M80 60 V54 H200 V60" stroke={GOLD} strokeWidth="3" fill="none" />
        <W x={140} y={44} size={11}>48 hours</W>
        <W x={52} y={126} size={10}>Usual</W><W x={254} y={92} size={10}>Step down</W>
      </>}
      {at === 3 && <>
        <Box x={160} y={50} w={240} text="Sick within 30 minutes of a dose" />
        <Arrow d="M160 66 V80" head="M154 74 L160 81 L166 74" />
        <Box x={160} y={98} w={240} text="Double dose once it stops" />
        <Arrow d="M160 114 V128" head="M154 122 L160 129 L166 122" />
        <Box x={160} y={146} w={240} text="Sick again: injection and A&E" lit />
      </>}
      {at === 4 && <>
        <rect x="38" y="52" width="36" height="40" rx="5" fill={INK} /><rect x="46" y="44" width="36" height="40" rx="5" fill={WHITE} stroke={INK} strokeWidth="2" />
        <Syringe x={160} y={70} rotate={-20} lit={false} />
        <rect x="252" y="50" width="26" height="36" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="255" y="64" width="20" height="19" rx="3" fill={SOFT} />
        {["Medicine reserve", "Flu jab", "Drink regularly"].map((label, index) => <Box key={label} x={58 + index * 104} y={130} w={98} text={label} size={10} lit={index < 2} />)}
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AddKitBox(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["For adrenal crisis, or if being sick", "Injection, needles, syringes and guide", "Into the upper arm or thigh; then 999", "Practise twice a year, on an orange", "Check expiry dates; keep spare kits"];
  const full = at === 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Emergency injection" title="The kit that keeps you safe" label="The emergency injection" credit="Illustration: Rehyn. After the injection, call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An emergency injection kit, where the injection goes, and practising">
      <rect x="18" y="92" width="156" height="80" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M18 92 L34 68 H158 L174 92" fill={TINT} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="32" y="106" width="16" height="42" rx="4" fill={full ? INK : SOFT} />
      <path d="M66 108 V150 M76 108 V150" stroke={full ? INK : SOFT} strokeWidth="3" strokeLinecap="round" />
      <rect x="92" y="106" width="9" height="44" rx="2" fill={full ? INK : SOFT} /><rect x="108" y="106" width="9" height="44" rx="2" fill={full ? INK : SOFT} />
      <rect x="130" y="104" width="32" height="50" rx="3" fill={WHITE} stroke={full ? INK : SOFT} strokeWidth="2" /><path d="M136 116 H156 M136 126 H156 M136 136 H150" stroke={full ? INK : SOFT} strokeWidth="2" />
      {at === 0 && <><W x={252} y={86} size={11}>Keeps you safe</W><W x={252} y={106} size={10.5}>until more care</W></>}
      {at === 1 && <>{[0, 1, 2].map(index => <rect key={index} x={204 + index * 34} y="74" width="28" height="22" rx="4" fill={index < 2 ? INK : WHITE} stroke={INK} strokeWidth="2" />)}<W x={252} y={122} size={10.5}>2 or 3 kits</W></>}
      {at === 2 && <>
        <circle cx="236" cy="56" r="11" fill={INK} />
        <path d="M236 68 V128 M236 80 L218 112 M236 80 L254 112 M236 128 L224 178 M236 128 L248 178" stroke={INK} strokeWidth="5" strokeLinecap="round" fill="none" />
        <circle cx="245" cy="96" r="5" fill={GOLD} /><circle cx="242" cy="150" r="5" fill={GOLD} />
        <W x={258} y={96} size={10} anchor="start">Upper arm</W><W x={256} y={152} size={10} anchor="start">Thigh</W>
      </>}
      {at === 3 && <><circle cx="252" cy="62" r="24" fill={GOLD} /><path d="M252 38 V32" stroke={INK} strokeWidth="3" strokeLinecap="round" /><Box x={252} y={116} w={110} text="1 March" lit /><Box x={252} y={150} w={110} text="1 September" lit /></>}
      {at === 4 && <><Box x={252} y={62} w={124} text="Expiry dates" lit /><rect x="214" y="100" width="34" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="258" y="100" width="34" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={253} y={146} size={10.5}>Spares in other places</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AddDentistChair(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Operations may need a bigger dose", "Tell the whole team before you go in", "A filling needs extra; plan it ahead", "Tell them you take hydrocortisone"];
  const chair = at === 2 || at === 3, table = at === 1;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Operations and dental work" title="Planning ahead for the dentist's chair" label="Operations and dental work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A dentist's chair and an operating table, and the planning that keeps you safe">
      <g opacity={at === 1 ? 0.4 : 1}>
        <path d="M36 150 H94 L118 112" stroke={chair ? INK : SOFT} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="122" cy="104" r="7" fill={chair ? INK : SOFT} />
        <path d="M66 154 V176 M48 176 H84" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      </g>
      <g opacity={chair ? 0.4 : 1}>
        <rect x="186" y="142" width="116" height="10" rx="4" fill={table ? INK : SOFT} />
        <path d="M200 152 V176 M288 152 V176" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <circle cx="204" cy="128" r="9" fill={table ? INK : SOFT} /><rect x="216" y="122" width="74" height="16" rx="8" fill={table ? INK : SOFT} />
      </g>
      {at === 0 && <><g transform="translate(70 70) scale(1.2)"><Pill x={0} y={0} /></g><W x={104} y={76} size={14}>+</W><g transform="translate(232 70) scale(1.2)"><Pill x={0} y={0} /></g><W x={266} y={76} size={14}>+</W></>}
      {at === 1 && <Stack x={180} y={28} labels={["Tell the whole team", "Show your card"]} lit={index => index === 0} width={128} gap={36} />}
      {at === 2 && <Stack x={10} y={28} labels={["Check-up: usually none", "Filling: extra needed"]} lit={index => index === 1} width={150} gap={36} />}
      {at === 3 && <Stack x={10} y={28} labels={["Unwell? An extra dose", "Say where your kit is"]} lit={() => true} width={150} gap={36} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AddSteroidCard(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["It speaks for you if you cannot", "Adults: the red NHS steroid card", "ID prompts staff to look for the card", "Phone ID, and ambulance registration"];
  const card = at === 0 || at === 1, band = at === 2, phone = at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Card and ID" title="The card that speaks for you" label="The steroid emergency card and ID" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A steroid emergency card, a phone with a copy of it, and a medical ID wristband">
      <g opacity={card ? 1 : 0.45}>
        <rect x="18" y="46" width="132" height="84" rx="10" fill={card ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={84} y={78} size={11} fill={card ? WHITE : TEXT}>Steroid</W><W x={84} y={96} size={10.5} fill={card ? WHITE : TEXT}>emergency card</W>
        {at === 1 && <g>{[0, 1, 2].map(index => <rect key={index} x={120 + (index % 2) * 9} y={106 + Math.floor(index / 2) * 9} width="7" height="7" fill={WHITE} />)}</g>}
      </g>
      <g opacity={phone ? 1 : 0.45}>
        <rect x="170" y="40" width="46" height="92" rx="8" fill={phone ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="176" y="68" width="34" height="22" rx="3" fill={phone ? WHITE : SOFT} />
      </g>
      <g opacity={band ? 1 : 0.45}>
        <ellipse cx="270" cy="88" rx="32" ry="42" fill="none" stroke={band ? INK : SOFT} strokeWidth="9" />
        <rect x="252" y="76" width="36" height="24" rx="5" fill={band ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
        <W x={270} y={92} size={10}>ID</W>
      </g>
      <W x={84} y={156} size={10.5}>Card</W><W x={193} y={156} size={10.5}>Phone</W><W x={270} y={156} size={10.5}>Medical ID</W>
      {band && <W x={160} y={180} size={10.5}>“Steroid-dependent”</W>}
      {at === 1 && <W x={84} y={180} size={10.5}>Credit-card size</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AddSunSalt(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Usually no extra, if well hydrated", "Small extra dose before hard exercise", "Heat: water and salt lost in sweat", "Crave salt? Eat something salty"];
  const lit = [[0], [], [0, 1], [1, 2]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercise and heat" title="Sweat, salt and staying active" label="Exercise, heat and salt" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A runner in the sun, with water, soup and salt">
      <g opacity={at === 2 ? 1 : 0.45}><Sun x={40} y={42} r={at === 2 ? 15 : 12} /></g>
      <path d="M20 172 H184" stroke={LINE} strokeWidth="3" />
      <circle cx="114" cy="62" r="11" fill={INK} />
      <path d="M110 74 L104 118 M108 84 L126 98 L138 86 M108 84 L92 100 L80 92 M104 118 L122 140 L116 170 M104 118 L92 142 L74 148" stroke={INK} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {at === 2 && <><Drop x={140} y={110} r={6} fill={SOFT} /><Drop x={152} y={132} r={6} fill={SOFT} /><Drop x={86} y={70} r={6} fill={SOFT} /></>}
      {at === 1 && <><Pill x={168} y={58} /><W x={168} y={38} size={10.5}>Before</W></>}
      <g opacity={lit.includes(0) ? 1 : 0.4}><rect x="200" y="112" width="20" height="46" rx="6" fill={lit.includes(0) ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><rect x="204" y="102" width="12" height="10" fill={INK} /></g>
      <g opacity={lit.includes(1) ? 1 : 0.4}><path d="M236 132 H284 A24 24 0 0 1 236 132 Z" fill={lit.includes(1) ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M250 124 Q254 116 250 108 M266 124 Q270 116 266 108" stroke={SOFT} strokeWidth="2.5" fill="none" strokeLinecap="round" /></g>
      <g opacity={lit.includes(2) ? 1 : 0.4}><path d="M292 112 Q292 100 302 100 Q312 100 312 112 V158 H292 Z" fill={lit.includes(2) ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />{[0, 1, 2].map(index => <circle key={index} cx={296 + index * 6} cy={108} r="1.6" fill={lit.includes(2) ? WHITE : INK} />)}</g>
      <W x={210} y={178} size={10}>Water</W><W x={260} y={178} size={10}>Soup</W><W x={302} y={178} size={10}>Salt</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AddSuitcase(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Pack double medicine, plus your kit", "Crisis guidelines in 20+ languages", "Medicine and kit in hand luggage", "Keep medicine out of direct sunlight", "Being sick: inject, then call for help"];
  const bag = at === 2 || at === 0;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Travel" title="Pack double, keep it close" label="Travel" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A suitcase and a hand luggage bag holding medicine and the emergency kit">
      {at === 0 && <><Box x={84} y={40} w={136} text="Repeat prescription" size={10} /><Box x={238} y={40} w={136} text="Travel insurance" size={10} /></>}
      {at === 1 && ["GP letter", "Steroid card", "Guidelines"].map((label, index) => <Box key={label} x={58 + index * 102} y={40} w={94} text={label} lit />)}
      {at === 2 && <><W x={74} y={46} size={10.5}>Spares in another bag</W><W x={236} y={46} size={10.5}>Hand luggage</W></>}
      {at === 3 && <><Sun x={40} y={40} /><Box x={150} y={40} w={104} text="Drink plenty" size={10} /><Box x={262} y={40} w={104} text="Salty snacks" size={10} /></>}
      {at === 4 && <><Box x={84} y={40} w={136} text="999 in the UK" lit size={10} /><Box x={238} y={40} w={136} text="112 in much of Europe" lit size={10} /></>}
      <g opacity={at === 2 ? 0.45 : 1}>
        <rect x="20" y="78" width="110" height="94" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M58 78 V66 H92 V78" stroke={INK} strokeWidth="3" fill="none" />
        <path d="M48 78 V172 M102 78 V172" stroke={LINE} strokeWidth="3" />
        {at === 2 && <rect x="64" y="118" width="22" height="28" rx="4" fill={SOFT} />}
      </g>
      <g opacity={bag || at === 4 ? 1 : 0.6}>
        <path d="M200 100 C200 74, 270 74, 270 100" stroke={INK} strokeWidth="3" fill="none" />
        <rect x="168" y="100" width="134" height="72" rx="12" fill={at === 2 ? TINT : WHITE} stroke={INK} strokeWidth={at === 2 ? 4 : 3} />
        <rect x="182" y="118" width="24" height="34" rx="4" fill={INK} /><rect x="212" y="118" width="24" height="34" rx="4" fill={at === 0 ? INK : SOFT} />
        <rect x="246" y="120" width="44" height="30" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M268 126 V144 M259 135 H277" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AddEnergyDay(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Bouts of tiredness are common", "A late dose can bring exhaustion", "Low for 2 weeks or more? See a GP", "Adjustments at work can help"];
  const levels = [[1, 0.75, 0.4, 0.6, 0.35], [1, 0.8, 0.2, 0.6, 0.5], [0.7, 0.6, 0.5, 0.5, 0.4], [0.9, 0.75, 0.6, 0.65, 0.5]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Everyday life" title="Living well with low-energy days" label="Energy, mood and everyday life" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Energy across a day, shown as batteries, with the dose, mood and work support that help">
      {["8am", "11am", "2pm", "5pm", "8pm"].map((time, index) => { const x = 24 + index * 58; return <g key={time}>
        <rect x={x} y="30" width="44" height="24" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x + 44} y="37" width="4" height="10" rx="1" fill={INK} />
        <rect x={x + 3} y="33" width={38 * levels[index]} height="18" rx="3" fill={levels[index] < 0.3 ? GOLD : INK} opacity={levels[index] < 0.3 ? 1 : 0.85} />
        <W x={x + 22} y={74} size={10}>{time}</W>
      </g>; })}
      {at === 0 && <><Box x={76} y={126} w={120} text="Daily medicine" lit /><Person x={160} y={160} scale={1.1} fill={SOFT} /><Box x={244} y={126} w={120} text="Some harder days" /></>}
      {at === 1 && <><Pill x={46} y={104} /><path d="M162 104 C180 92, 200 92, 214 100" stroke={GOLD} strokeWidth="3" fill="none" strokeDasharray="5 4" /><Pill x={220} y={106} fill={SOFT} /><W x={190} y={136} size={10.5}>Late dose</W><Box x={160} y={164} w={220} text="Tell your endocrinologist" /></>}
      {at === 2 && <><Person x={92} y={164} scale={1.2} /><Bubble x={210} y={118} text="Talking therapies" width={136} /></>}
      {at === 3 && <><path d="M40 168 H280 M60 168 V186 M260 168 V186" stroke={INK} strokeWidth="4" strokeLinecap="round" />{["Flexible hours", "Time off", "Quiet space"].map((label, index) => <Box key={label} x={58 + index * 102} y={124} w={96} text={label} size={10} lit={index === 0} />)}</>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function GlandPieceView({ piece, ...props }: { piece: GlandPiece } & PieceProps) {
  switch (piece) {
    case "pcos-ovary-key": return <PcosOvary {...props} />;
    case "pcos-body-signs": return <PcosBodySigns {...props} />;
    case "pcos-two-of-three": return <PcosTwoOfThree {...props} />;
    case "pcos-life-checks": return <PcosLifeChecks {...props} />;
    case "pcos-period-calendar": return <PcosPeriodCalendar {...props} />;
    case "pcos-care-shelf": return <PcosCareShelf {...props} />;
    case "pcos-egg-path": return <PcosEggPath {...props} />;
    case "pcos-plate-week": return <PcosPlateWeek {...props} />;
    case "pcos-check-list": return <PcosCheckList {...props} />;
    case "pcos-mirror-talk": return <PcosMirrorTalk {...props} />;
    case "pcos-pregnancy-line": return <PcosPregnancyLine {...props} />;
    case "pcos-support-circle": return <PcosSupportCircle {...props} />;
    case "add-glands-kidneys": return <AddGlands {...props} />;
    case "add-slow-creep": return <AddSlowCreep {...props} />;
    case "add-synacthen-clock": return <AddSynacthen {...props} />;
    case "add-crisis-steps": return <AddCrisisSteps {...props} />;
    case "add-cortisol-curve": return <AddCortisolCurve {...props} />;
    case "add-sick-day-steps": return <AddSickDay {...props} />;
    case "add-kit-box": return <AddKitBox {...props} />;
    case "add-dentist-chair": return <AddDentistChair {...props} />;
    case "add-steroid-card": return <AddSteroidCard {...props} />;
    case "add-sun-salt": return <AddSunSalt {...props} />;
    case "add-suitcase": return <AddSuitcase {...props} />;
    case "add-energy-day": return <AddEnergyDay {...props} />;
  }
}
