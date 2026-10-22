import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { SUGAR_PIECES, type SugarPiece } from "@/content/sugar-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Drop } from "./NewsMetabolismPieces";
import { Bubble } from "./NewsMindPieces";

// The Gestational diabetes, Hypos and Thyroid nodules and goitre pages' own pieces (content/sugar-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Diabetes & metabolism pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body or results.

export const isSugarPiece = (piece: NewsPiece): piece is SugarPiece => (SUGAR_PIECES as readonly string[]).includes(piece);

// ---- Shared shapes -----------------------------------------------------------------------------------------

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5, dim = false }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number; dim?: boolean }) =>
  <g opacity={dim ? 0.4 : 1}><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 206, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Tick = ({ x, y, s = 10, stroke = GOLD }: { x: number; y: number; s?: number; stroke?: string }) =>
  <path d={`M${x - s} ${y} L${x - s * 0.3} ${y + s * 0.7} L${x + s} ${y - s * 0.8}`} stroke={stroke} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
/** A pregnant figure, drawn simply and calmly. */
const Mum = ({ x, y, fill = INK, scale = 1 }: { x: number; y: number; fill?: string; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} fill={fill}><circle cx="0" cy="-32" r="11" /><path d="M-15 14 C-16 -6, -10 -17, 0 -17 C8 -17, 12 -11, 12 -5 C25 -1, 26 12, 17 14 Z" /></g>;
/** A swaddled baby, head to the left of (x, y). */
const Baby = ({ x, y, s = 1.4 }: { x: number; y: number; s?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}><ellipse cx="6" cy="0" rx="16" ry="10" fill={TINT} stroke={INK} strokeWidth={2 / s} /><path d="M14 -9 V9" stroke={INK} strokeWidth={1.5 / s} /><circle cx="-12" cy="-2" r="8" fill={WHITE} stroke={INK} strokeWidth={2 / s} /><path d="M-15 1 q3 2 6 0" stroke={INK} strokeWidth={1.2 / s} fill="none" /></g>;
/** A blood sugar meter with a word on its screen. */
const Meter = ({ x, y, text = "", lit = false }: { x: number; y: number; text?: string; lit?: boolean }) =>
  { const half = Math.max(19, text.length * 3.2 + 4); return <g><rect x={x - half - 7} y={y - 34} width={half * 2 + 14} height="68" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - half} y={y - 26} width={half * 2} height="26" rx="4" fill={lit ? INK : TINT} /><W x={x} y={y - 9} size={10} fill={lit ? WHITE : TEXT}>{text}</W><circle cx={x} cy={y + 18} r="6" fill="none" stroke={INK} strokeWidth="2" /></g>; };
/** A blood sample tube. */
const Tube = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 7} y={y - 18} width="14" height="38" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x - 7} ${y + 4} H${x + 7} V${y + 13} a7 7 0 0 1 -14 0 Z`} fill={INK} /><rect x={x - 9} y={y - 25} width="18" height="8" rx="2" fill={INK} /></g>;
/** An insulin pen lying across (x, y). */
const Pen = ({ x, y, lit = true }: { x: number; y: number; lit?: boolean }) =>
  <g opacity={lit ? 1 : 0.4}><rect x={x - 32} y={y - 7} width="52" height="14" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x + 20} y={y - 6} width="12" height="12" rx="3" fill={INK} /><path d={`M${x - 32} ${y} H${x - 40}`} stroke={INK} strokeWidth="2.5" strokeLinecap="round" /><path d={`M${x - 10} ${y - 7} V${y + 7} M${x - 4} ${y - 7} V${y + 7}`} stroke={SOFT} strokeWidth="2" /></g>;
const Glass = ({ x, y, fill = TINT }: { x: number; y: number; fill?: string }) =>
  <g><path d={`M${x - 12} ${y - 16} H${x + 12} L${x + 9} ${y + 16} H${x - 9} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d={`M${x - 10} ${y - 4} H${x + 10} L${x + 9} ${y + 14} H${x - 9} Z`} fill={fill} /></g>;
const Plate = ({ x, y, r = 30 }: { x: number; y: number; r?: number }) =>
  <g><circle cx={x} cy={y} r={r} fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y} r={r - 7} fill="none" stroke={LINE} strokeWidth="2" /></g>;
const Phone = ({ x, y, text = "", lit = false }: { x: number; y: number; text?: string; lit?: boolean }) =>
  <g><rect x={x - 20} y={y - 32} width="40" height="64" rx="7" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={x} y={y + 4} size={11} fill={lit ? WHITE : TEXT}>{text}</W><circle cx={x} cy={y + 24} r="2.5" fill={lit ? WHITE : INK} /></g>;
const Calendar = ({ x, y, w = 70, h = 56, lit = false }: { x: number; y: number; w?: number; h?: number; lit?: boolean }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - w / 2} y={y - h / 2} width={w} height="14" rx="7" fill={lit ? GOLD : INK} />
    {Array.from({ length: 8 }, (_, index) => <rect key={index} x={x - w / 2 + 8 + (index % 4) * ((w - 16) / 4)} y={y - h / 2 + 20 + Math.floor(index / 4) * 14} width={(w - 16) / 4 - 4} height="9" rx="2" fill={LINE} />)}</g>;
const Car = ({ x, y, fill = INK }: { x: number; y: number; fill?: string }) =>
  <g><path d={`M${x - 36} ${y} V${y - 14} L${x - 22} ${y - 30} H${x + 16} L${x + 30} ${y - 14} H${x + 36} V${y} Z`} fill={fill} /><rect x={x - 18} y={y - 26} width="30" height="11" rx="3" fill={WHITE} opacity=".8" /><circle cx={x - 20} cy={y} r="8" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx={x + 20} cy={y} r="8" fill={WHITE} stroke={INK} strokeWidth="3" /></g>;
/** The thyroid: two lobes joined by the isthmus, centred on (x, y), about 80 wide at scale 1. */
const Thyroid = ({ x, y, s = 1, left = WHITE, right = WHITE }: { x: number; y: number; s?: number; left?: string; right?: string }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`} stroke={INK} strokeWidth={2.5 / s} strokeLinejoin="round">
    <path d="M-10 4 H10 V18 H-10 Z" fill={TINT} />
    <path d="M-6 -4 C-12 -34, -40 -36, -40 2 C-40 28, -18 38, -6 22 Z" fill={left} />
    <path d="M6 -4 C12 -34, 40 -36, 40 2 C40 28, 18 38, 6 22 Z" fill={right} />
  </g>;
const Nodule = ({ x, y, r = 8 }: { x: number; y: number; r?: number }) => <circle cx={x} cy={y} r={r} fill={GOLD} stroke={WHITE} strokeWidth="2" />;

// ==== Gestational diabetes =================================================================================

function GdHormoneKey(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["High blood sugar during pregnancy", "Hormones make insulin harder to use", "Not caused by sugar, not your fault", "Often no symptoms; found by testing", "Usually goes after the birth"];
  const r = at === 4 ? 22 : 60;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When pregnancy makes insulin harder to use" label="What gestational diabetes is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Sugar staying in the blood during pregnancy, and moving into the cells again after the birth">
      <Mum x={70} y={152} scale={1.6} />
      {at === 4 && <Baby x={150} y={164} s={1.2} />}
      <circle cx="220" cy="92" r="42" fill={WHITE} stroke={INK} strokeWidth="3" />
      {Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <circle key={index} cx={220 + r * Math.cos(a)} cy={92 + r * Math.sin(a)} r="6" fill={GOLD} />; })}
      {at === 1 && <><W x={220} y={88} size={10.5}>Hormones</W><W x={220} y={104} size={10}>get in the way</W></>}
      {at === 2 && <><rect x="208" y="80" width="24" height="24" rx="3" fill={TINT} stroke={INK} strokeWidth="2" /><Cross x={220} y={92} s={16} /></>}
      {at === 3 && <Drop x={220} y={100} size={24} />}
      <W x={220} y={178} size={10} fill={SOFT}>A body cell</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GdRiskRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Can affect anyone: about 1 in 8", "Age, weight, family, background", "Risk factors? You are offered a test", "Some healthy-weight women get it too", "Not always preventable; stay active"];
  const tags = ["Over 40", "BMI above 30", "Baby 10lb or more", "Had it before", "Parent or sibling", "Weight-loss surgery", "Background"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Who gets it" title="Who is offered the test, and why" label="Who is more likely to get it" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Who is more likely to get gestational diabetes, and the test that is offered">
      {at === 0 && <>{Array.from({ length: 8 }, (_, index) => <Mum key={index} x={34 + index * 36} y={130} scale={0.9} fill={index === 0 ? INK : SOFT} />)}<W x={160} y={52} size={13}>About 1 in 8</W></>}
      {at === 1 && tags.map((tag, index) => <Box key={tag} x={index === 6 ? 160 : index % 2 ? 236 : 84} y={26 + Math.floor(index / 2) * 36} w={136} text={tag} lit size={10} />)}
      {at === 2 && <><Box x={84} y={80} w={120} text="Risk factors" /><Arrow d="M148 80 H178" head="M171 73 L178 80 L171 87" /><Box x={240} y={80} w={110} text="Test offered" lit /><W x={160} y={140} size={10.5}>First appointment: week 8 to 12</W></>}
      {at === 3 && <><Mum x={110} y={130} scale={1.3} fill={SOFT} /><Mum x={210} y={130} scale={1.3} /><W x={160} y={40} size={11}>Not a time to try to lose weight</W></>}
      {at === 4 && <>{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}><rect x={22 + index * 40} y="64" width="34" height="56" rx="8" fill={INK} stroke={INK} strokeWidth="2" /><W x={39 + index * 40} y={140} size={10.5}>{day}</W></g>)}<W x={160} y={44} size={11.5}>150 minutes a week</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GdTestMorning(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Usually at 24 to 28 weeks", "Fast, a drink, then 2 hours' rest", "Water sips are fine; bring a snack", "Diagnosed? Seen within one week"];
  const stations = ["Fasting", "Blood test", "Drink", "2 hours", "Blood test"];
  const lit = (index: number) => at === 1 || (at === 2 && (index === 0 || index === 4)) || (at === 3 && index === 4);
  return <MemoryBand props={props} state={s} tone="theme" kicker="The test" title="A sugary drink and two blood tests" label="The glucose test" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The glucose test morning: fasting, a blood test, a sugary drink, two hours' rest and a second blood test">
      {at === 0 ? <>
        <rect x="20" y="90" width="280" height="22" rx="11" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x="188" y="90" width="28" height="22" fill={INK} />
        <circle cx="76" cy="101" r="7" fill={GOLD} />
        <W x={202} y={78} size={11}>24 to 28 weeks</W><W x={76} y={78} size={10}>First visit</W>
        {[0, 10, 20, 30, 40].map(week => <W key={week} x={20 + week * 7} y={132} size={10}>{week}</W>)}
        <W x={160} y={156} size={10.5} fill={SOFT}>Weeks of pregnancy</W>
      </> : <>
        <path d="M36 80 H284" stroke={LINE} strokeWidth="4" />
        {stations.map((station, index) => { const x = 36 + index * 62; return <g key={index} opacity={lit(index) ? 1 : 0.45}>
          <circle cx={x} cy="80" r="22" fill={WHITE} stroke={INK} strokeWidth="2.5" />
          {index === 0 && <Moon x={x - 2} y={80} r={10} />}
          {(index === 1 || index === 4) && <Tube x={x} y={82} />}
          {index === 2 && <Glass x={x} y={80} />}
          {index === 3 && <Clock x={x} y={80} r={14} hand={2} />}
          <W x={x} y={124} size={10}>{station}</W>
        </g>; })}
        {at === 1 && <W x={36} y={44} size={10}>8 to 10 hours</W>}
        {at === 2 && <><W x={36} y={44} size={10}>Sips of water</W><W x={304} y={44} size={10} anchor="end">A snack for after</W></>}
        {at === 3 && <Box x={160} y={162} w={190} text="Diabetes clinic and dietitian" lit />}
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GdScanWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Most babies are healthy", "Baby may grow larger than usual", "Child does not automatically get it", "Extra scans at 28, 32 and 36 weeks", "Moving less? Call your midwife now"];
  const wk = (week: number) => 20 + week * 7;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="You and your baby" title="Healthy babies, with a closer watch" label="What it can mean for your baby" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pregnancy timeline with extra scans, and a baby whose movements matter">
      <path d={`M${wk(0)} 140 H${wk(40)}`} stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {[20, 28, 32, 36].map(week => <circle key={week} cx={wk(week)} cy="140" r={at === 3 ? 8 : 5} fill={at === 3 ? INK : SOFT} />)}
      {at === 3 && <>{[20, 28, 32, 36].map(week => <W key={week} x={wk(week)} y={164} size={10}>{week}</W>)}<rect x={wk(38)} y="133" width={wk(40) - wk(38)} height="14" rx="4" fill={GOLD} /><W x={wk(40)} y={122} size={10} anchor="end">Checks from 38</W></>}
      <W x={wk(0)} y={164} size={10} anchor="start">0</W><W x={wk(40)} y={164} size={10} anchor="end">{at === 3 ? "" : "40 weeks"}</W>
      {(at === 0 || at === 4) && <><Baby x={at === 4 ? 122 : 160} y={70} />
        {at === 4 && <><path d="M86 52 Q78 70 86 88 M76 46 Q66 70 76 94" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" className={still ? undefined : "lib-why-pulse"} /><Phone x={230} y={70} text="Now" lit /><W x={230} y={118} size={10}>Day or night</W></>}
        {at === 0 && <W x={160} y={108} size={11}>Healthy, with good care</W>}</>}
      {at === 1 && ["Larger baby", "Extra fluid", "Early birth"].map((tag, index) => <Box key={tag} x={58 + index * 102} y={70} w={94} text={tag} size={10} />)}
      {at === 2 && <><Person x={90} y={96} scale={1.1} /><Box x={200} y={56} w={130} text="Keeping active" /><Box x={200} y={92} w={130} text="Healthy food" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GdFingerDay(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A lancet, a strip and a meter", "Before breakfast, 1 hour after meals", "Wash, dry, side of a different finger", "Share your readings with your team", "A sensor may help; aim above 4 mmol/l"];
  const times = ["Before breakfast", "1 hour after breakfast", "1 hour after lunch", "1 hour after dinner"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Checking" title="The finger-prick routine, made simple" label="Checking your blood sugar" credit="Illustration: Rehyn. Your team agrees the levels to aim for."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A meter, the times of day to check, and where to share the readings">
      <Meter x={56} y={88} text="mmol/l" lit={at === 0 || at === 4} />
      <W x={56} y={146} size={10}>Meter</W>
      {at === 0 && <><rect x="150" y="56" width="70" height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={250} y={67} size={10} anchor="start">Strip</W>
        <rect x="130" y="96" width="90" height="18" rx="9" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M130 105 H118" stroke={INK} strokeWidth="2.5" /><W x={250} y={110} size={10} anchor="start">Lancet</W></>}
      {at === 1 && times.map((time, index) => <g key={time}><Drop x={130} y={42 + index * 34} size={13} fill={index === 0 ? GOLD : INK} /><W x={148} y={42 + index * 34} size={10.5} anchor="start">{time}</W></g>)}
      {at === 2 && <><rect x="150" y="96" width="110" height="64" rx="18" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[0, 1, 2, 3].map(index => <rect key={index} x={156 + index * 26} y={36 + (index === 0 || index === 3 ? 14 : 0)} width="20" height={68 - (index === 0 || index === 3 ? 14 : 0)} rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />)}
        <circle cx="232" cy="66" r="5" fill={GOLD} /><W x={290} y={58} size={10}>Side of</W><W x={290} y={72} size={10}>finger</W></>}
      {at === 3 && <><rect x="120" y="42" width="66" height="84" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[0, 1, 2, 3, 4].map(index => <path key={index} d={`M130 ${60 + index * 13} H176`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}
        <Arrow d="M194 84 H222" head="M215 77 L222 84 L215 91" /><Person x={262} y={104} scale={1.1} fill={SOFT} /><W x={262} y={136} size={10}>Your team</W></>}
      {at === 4 && <><rect x="112" y="76" width="110" height="34" rx="17" fill={TINT} stroke={INK} strokeWidth="2" /><circle cx="166" cy="93" r="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <Arrow d="M228 93 H248" head="M241 86 L248 93 L241 100" /><Phone x={278} y={93} /><W x={166} y={136} size={10}>Sensor on the skin</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GdPlateSplit(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A dietitian helps plan your meals", "Regular meals, slow-release starches", "Breakfast carbs split: 15 to 20g each", "Not sugar-free; check drink labels", "No strict diets; 5 fruit and veg a day"];
  const Toast = ({ x, y }: { x: number; y: number }) => <path d={`M${x - 12} ${y + 12} V${y - 4} a12 10 0 0 1 24 0 V${y + 12} Z`} fill={TINT} stroke={INK} strokeWidth="2" />;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Food" title="Steadier carbs, spread through the day" label="Eating with gestational diabetes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Meals spread through the day, a breakfast split in two, and simple swaps">
      {at === 0 && <><Person x={80} y={120} scale={1.4} fill={SOFT} /><W x={80} y={160} size={10.5}>Dietitian</W><Plate x={210} y={90} r={40} /><path d="M196 82 H224 M196 92 H224 M196 102 H216" stroke={SOFT} strokeWidth="3" strokeLinecap="round" /></>}
      {at === 1 && ["Breakfast", "Lunch", "Dinner"].map((meal, index) => <g key={meal}><Plate x={60 + index * 100} y={84} r={34} /><W x={60 + index * 100} y={88} size={9.5}>{["Porridge", "Brown rice", "Pulses"][index]}</W><W x={60 + index * 100} y={140} size={10.5}>{meal}</W></g>)}
      {at === 2 && <><Plate x={70} y={84} r={34} /><Toast x={70} y={84} /><Plate x={250} y={84} r={34} /><Toast x={250} y={84} /><Clock x={160} y={84} r={20} hand={1.6} />
        <W x={160} y={124} size={10}>A few hours</W><W x={70} y={140} size={10.5}>15 to 20g</W><W x={250} y={140} size={10.5}>15 to 20g</W></>}
      {at === 3 && <>{[["Cake, biscuits", "Fruit, nuts"], ["Sugary drink", "Diet drink"]].map(([from, to], index) => <g key={from}>
        <Box x={80} y={60 + index * 50} w={120} text={from} /><Arrow d={`M146 ${60 + index * 50} H174`} head={`M167 ${53 + index * 50} L174 ${60 + index * 50} L167 ${67 + index * 50}`} /><Box x={240} y={60 + index * 50} w={120} text={to} lit /></g>)}
        <W x={160} y={164} size={10.5}>Juices and smoothies: check the label</W></>}
      {at === 4 && <>{Array.from({ length: 5 }, (_, index) => <circle key={index} cx={40 + index * 34} cy="84" r="13" fill={index % 2 ? SOFT : INK} />)}
        <W x={108} y={124} size={10.5}>5 a day</W>
        <path d="M222 84 C238 66, 268 66, 282 84 C268 102, 238 102, 222 84 Z M282 84 L298 72 V96 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><W x={256} y={124} size={10.5}>Lean protein</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GdThreeStones(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Extra help, not failure", "Metformin: tablets with or after meals", "Insulin by pen; the dose may go up", "Low? Have something sugary at once", "Usually stopped after the birth"];
  const stones = ["Food and activity", "Metformin", "Insulin"];
  const on = [0, 1, 2, -1, -1][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="When food alone needs a helping hand" label="Metformin and insulin" credit="Illustration: Rehyn. Take medicines as your team advises."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Stepping stones from food and activity to metformin and insulin">
      {stones.map((stone, index) => { const x = 60 + index * 100; return <g key={stone} opacity={on < 0 || on === index ? 1 : 0.45}>
        <ellipse cx={x} cy="122" rx="44" ry="15" fill={on === index ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={x} y={96} size={10.5}>{stone}</W>
        {index === 0 && <Plate x={x} y={60} r={20} />}
        {index === 1 && <Pill x={x} y={60} />}
        {index === 2 && <Pen x={x + 4} y={60} />}
      </g>; })}
      {at === 0 && <W x={110} y={156} size={10}>After 1 to 2 weeks, if needed</W>}
      {at === 3 && <Box x={160} y={162} w={250} text="Below 4: juice or 5 glucose tablets" lit size={10} />}
      {at === 4 && <Box x={160} y={162} w={230} text="Food and activity still matter" size={10} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GdWalkAfter(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Muscles use glucose when you move", "15 to 20 minutes, within 30 of a meal", "150 minutes a week, as you can", "Start gently: 15-minute walks first", "Eat first, drink water, stay cool"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Activity" title="A short walk after meals" label="Staying active in pregnancy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A meal, then a short walk, and building up activity gently">
      {at === 0 && <>{Array.from({ length: 6 }, (_, index) => <circle key={index} cx={50 + (index % 3) * 26} cy={70 + Math.floor(index / 3) * 30} r="7" fill={GOLD} />)}
        <Arrow d="M130 85 H170" head="M163 78 L170 85 L163 92" /><rect x="186" y="56" width="104" height="58" rx="26" fill={TINT} stroke={INK} strokeWidth="2.5" /><W x={238} y={89} size={11}>Muscle</W>
        <W x={76} y={140} size={10}>Glucose</W></>}
      {at === 1 && <><Plate x={50} y={84} r={26} /><path d="M86 60 V54 H186 V60" stroke={GOLD} strokeWidth="3" fill="none" /><W x={136} y={44} size={10}>Within 30 minutes</W>
        <Mum x={240} y={110} scale={1.3} /><path d="M206 132 H274" stroke={LINE} strokeWidth="4" strokeLinecap="round" /><W x={240} y={154} size={10.5}>Walk 15 to 20 min</W></>}
      {at === 2 && <>{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}><rect x={22 + index * 40} y="60" width="34" height="56" rx="8" fill={index < 5 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={39 + index * 40} y={136} size={10.5}>{day}</W></g>)}
        <W x={160} y={40} size={11}>Able to talk, not sing</W><W x={160} y={160} size={10}>Strength exercises on 2 days</W></>}
      {at === 3 && <><rect x="40" y="60" width="80" height="24" rx="8" fill={SOFT} /><W x={80} y={104} size={10.5}>15 minutes</W>
        <Arrow d="M130 72 H158" head="M151 65 L158 72 L151 79" /><rect x="170" y="60" width="130" height="24" rx="8" fill={INK} /><W x={235} y={104} size={10.5}>30 when ready</W>
        <W x={160} y={146} size={10}>Tell your midwife about new activities</W></>}
      {at === 4 && ["Not on an empty stomach", "Drink water", "Keep cool", "Stop if unwell"].map((tag, index) => <Box key={tag} x={160} y={36 + index * 36} w={200} text={tag} lit={index === 0} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GdBirthLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Usually around weeks 38 to 40", "Induction is your choice", "Bring your kit; levels watched", "Feed within 30 minutes of the birth", "Home after 24 hours if both well"];
  const stops = ["Timing", "Choice", "Labour", "First feed", "Home"];
  const notes = ["At a hospital with trained staff", "Talk it through with your team", "Insulin by drip, if needed", "Then every 2 to 3 hours", "Keep checking for 1 or 2 days"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The birth" title="Planning the birth, and the first days" label="Labour, birth and the first days" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="From the timing of the birth to going home, step by step">
      <path d="M36 80 C90 50, 120 110, 160 80 S240 50, 284 80" stroke={LINE} strokeWidth="5" fill="none" strokeLinecap="round" />
      {stops.map((stop, index) => { const x = 36 + index * 62; const y = 80; return <g key={stop}>
        <circle cx={x} cy={y} r="17" fill={index === at ? INK : index < at ? SOFT : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={x} y={y + 4} size={11} fill={index <= at ? WHITE : TEXT}>{index + 1}</W>
        <W x={x} y={y + 36} size={10}>{stop}</W>
      </g>; })}
      {at === 3 && <Baby x={160} y={36} />}
      {at === 4 && <path d="M270 44 L284 32 L298 44 V58 H270 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />}
      <Box x={160} y={160} w={230} text={notes[at]} size={10} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GdAfterCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tests matter, even if you feel well", "Test at 6 to 13 weeks, then yearly", "Healthier You: a nine-month course", "Keep the healthy habits going", "Postnatal check at 6 to 8 weeks"];
  const lit = (mark: string) => (at === 1 && (mark === "test" || mark === "year")) || (at === 4 && mark === "check");
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="After the birth" title="The checks that follow the birth" label="After the birth" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline after the birth: the postnatal check, a blood test, then a test every year">
      <path d="M24 56 H300" stroke={LINE} strokeWidth="5" strokeLinecap="round" />
      <circle cx="30" cy="56" r="7" fill={INK} /><W x={30} y={40} size={10}>Birth</W>
      <circle cx="84" cy="56" r="8" fill={lit("check") ? GOLD : SOFT} /><W x={84} y={40} size={10}>Check</W><W x={84} y={80} size={9.5}>6 to 8 wk</W>
      <circle cx="150" cy="56" r="8" fill={lit("test") ? GOLD : SOFT} /><W x={150} y={40} size={10}>Test</W><W x={150} y={80} size={9.5}>6 to 13 wk</W>
      {[206, 246, 286].map(x => <circle key={x} cx={x} cy="56" r="7" fill={lit("year") ? INK : SOFT} />)}<W x={246} y={40} size={10}>Every year</W>
      {at === 0 && <><Person x={100} y={150} scale={1.2} /><Box x={210} y={132} w={160} text="Many have no symptoms" /></>}
      {at === 1 && <Box x={160} y={140} w={200} text="No appointment? Book one" lit />}
      {at === 2 && <>{Array.from({ length: 9 }, (_, index) => <rect key={index} x={34 + index * 28} y="118" width="24" height="24" rx="5" fill={INK} opacity={0.45 + index * 0.06} />)}<W x={160} y={108} size={10.5}>9 months</W><W x={160} y={164} size={10}>Sign up yourself, or ask your GP</W></>}
      {at === 3 && ["Stairs", "Hoovering", "Breastfeeding"].map((tag, index) => <Box key={tag} x={62 + index * 98} y={134} w={90} text={tag} size={10} />)}
      {at === 4 && <><Bubble x={160} y={124} text="How are you feeling?" width={150} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GdTwoPregnancies(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["It can come back next time", "Planning? Get checked by your GP", "Tell them early; testing comes early", "Unplanned? Tell your GP you had it"];
  const wk = (week: number) => 96 + week * 5;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Next time" title="Planning ahead for another baby" label="A future pregnancy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two pregnancies side by side, the second with an earlier test">
      <W x={96} y={40} size={10.5} anchor="start">Last pregnancy</W>
      <rect x={wk(0)} y="50" width="200" height="18" rx="9" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x={wk(24)} y="50" width="20" height="18" fill={INK} />
      <W x={96} y={110} size={10.5} anchor="start">Next pregnancy</W>
      <rect x={wk(0)} y="120" width="200" height="18" rx="9" fill={WHITE} stroke={INK} strokeWidth="2" opacity={at === 0 ? 0.5 : 1} />
      {at >= 2 && <><rect x={wk(9)} y="120" width="12" height="18" fill={GOLD} /><rect x={wk(24)} y="120" width="20" height="18" fill={INK} /><W x={wk(11)} y={158} size={10}>Early test</W><W x={wk(26)} y={158} size={10}>24 to 28</W></>}
      {(at === 1 || at === 3) && <><circle cx="52" cy="129" r="16" fill={GOLD} /><W x={52} y={133} size={10.5} fill={WHITE}>GP</W><W x={52} y={160} size={10}>{at === 1 ? "Check first" : "Tell them"}</W></>}
      {at === 0 && <W x={196} y={160} size={10}>It may happen again</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GdKindTalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["It is not your fault", "Talk; ask your midwife for support", "Lasting 2 weeks? Talk straight away", "Talking therapies; you can self-refer", "Urgent: 111; life at risk: 999"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Feelings" title="It is not your fault" label="Feelings, worry and support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A parent talking with a midwife, and where to find support">
      <Mum x={70} y={170} scale={1.2} /><Person x={250} y={170} scale={1.2} fill={SOFT} />
      {at === 0 && <Bubble x={160} y={60} text="You did not cause this" width={170} />}
      {at === 1 && <><Bubble x={160} y={40} text="How are you now?" width={150} /><Box x={160} y={96} w={150} text="Ask for support" lit /></>}
      {at === 2 && <><Box x={160} y={40} w={240} text="Baby blues: usually under 2 weeks" size={10} /><Box x={160} y={84} w={240} text="Longer, or later? Talk straight away" lit size={10} /></>}
      {at === 3 && <><Box x={160} y={44} w={170} text="Talking therapy" lit /><Box x={160} y={84} w={170} text="Refer yourself" /></>}
      {at === 4 && <><Box x={160} y={34} w={240} text="111, mental health option" lit size={10} /><Box x={160} y={70} w={240} text="Samaritans: 116 123" size={10} /><Box x={160} y={106} w={240} text="Life at risk: 999 or A&E" lit size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Hypos ================================================================================================

function HypoDipLine(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Below 4mmol/L is a hypo", "Insulin and some tablets can cause it", "Act quickly, or it can become severe", "Rare without diabetes: see a GP"];
  const curve = at === 3 ? "M20 80 C90 76, 160 86, 220 78 S280 80, 300 80" : at === 2 ? "M20 80 C70 80, 100 168, 150 168 S230 80, 300 80" : "M20 80 C80 80, 110 140, 150 140 S220 80, 300 80";
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When blood sugar drops too low" label="What a hypo is" credit="Illustration: Rehyn. A picture of the idea, not a reading."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A blood sugar line dipping below 4mmol/L">
      <rect x="20" y="120" width="280" height="60" fill={TINT} />
      <path d="M20 120 H300" stroke={INK} strokeWidth="2" strokeDasharray="6 6" />
      <W x={296} y={114} size={10} anchor="end">4mmol/L</W>
      <path d={curve} stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
      {at === 0 && <W x={150} y={160} size={10.5}>Hypo</W>}
      {at === 1 && <><Pen x={226} y={42} /><Pill x={110} y={42} /><W x={110} y={66} size={10}>Some tablets</W><W x={222} y={66} size={10}>Insulin</W></>}
      {at === 2 && <><W x={232} y={146} size={10} anchor="start">Confused,</W><W x={232} y={160} size={10} anchor="start">drowsy</W><W x={80} y={50} size={10.5}>Mild: act quickly</W></>}
      {at === 3 && <><Person x={160} y={56} scale={0.9} fill={SOFT} /><W x={160} y={150} size={10.5}>Shaky or sweaty? A GP can check</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HypoEarlyLate(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Early: sweaty, shaky, hungry", "Untreated: confused, slurred speech", "Signs can change or fade over time", "Can look like being drunk: check"];
  const early = ["Sweating", "Shaking", "Hungry", "Fast pulse"];
  const late = ["Confused", "Slurred speech", "Odd behaviour", "A fit"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The signs" title="Shaky first, confused later" label="The signs of a hypo" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Early signs of a hypo, and later signs if it is not treated">
      {at < 3 ? <>
        <W x={85} y={28} size={11}>Early</W><W x={235} y={28} size={11}>If untreated</W>
        {early.map((tag, index) => <g key={tag} opacity={at === 2 ? 0.75 - index * 0.15 : at === 1 ? 0.4 : 1}><Box x={85} y={52 + index * 34} w={128} text={tag} lit={at === 0} /></g>)}
        {late.map((tag, index) => <Box key={tag} x={235} y={52 + index * 34} w={128} text={tag} lit={at === 1} dim={at !== 1} />)}
      </> : <>
        <Meter x={100} y={90} text="Below 4?" lit /><Arrow d="M140 90 H172" head="M165 83 L172 90 L165 97" /><Box x={238} y={90} w={110} text="Treat it" lit />
        <W x={160} y={160} size={10.5}>Like a hangover, or being drunk</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HypoBalanceTips(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Food, activity, medicine: off balance", "Too much insulin, or the same spot", "Missed meals, hard exercise, alcohol", "Illness, stress, hot or cold weather"];
  const left = [["Food"], ["Food"], ["Missed meal"], ["Food"]][at];
  const right = [["Medicine", "Activity"], ["Too much insulin"], ["Exercise", "Alcohol"], ["Medicine", "Activity"]][at];
  const tilt = [8, 12, 12, 4][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Why the balance tips" label="Why hypos happen" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balance of food against medicine and activity, tipping towards a hypo">
      <path d="M160 108 L144 142 H176 Z" fill={INK} />
      <g transform={`translate(160 106) rotate(${tilt})`}>
        <path d="M-124 0 H124" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        {left.map((tag, index) => <Box key={tag} x={-86} y={-20 - index * 32} w={92} text={tag} size={10} dim={at === 2} />)}
        {right.map((tag, index) => <Box key={tag} x={80} y={-20 - index * 32} w={right.length === 1 ? 112 : 92} text={tag} lit size={10} />)}
      </g>
      {at === 3 && ["Illness", "Stress", "Heat", "Cold"].map((tag, index) => <Box key={tag} x={48 + index * 75} y={168} w={66} text={tag} size={10} />)}
      {at === 1 && <W x={160} y={168} size={10}>Injecting in the same place too often</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HypoWarningLight(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["No warning signs; only a check shows", "More likely with many hypos", "Avoid hypos for weeks; it may return", "A monitor can sound an alarm", "Impaired awareness: do not drive"];
  const on = at === 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Unawareness" title="When the warning signs go quiet" label="Hypo unawareness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A warning light that has gone dark, and what can help bring it back">
      <circle cx="80" cy="78" r="34" fill={on ? GOLD : LINE} stroke={INK} strokeWidth="3" />
      <rect x="64" y="112" width="32" height="18" rx="4" fill={INK} />
      <W x={80} y={152} size={10.5}>Warning signs</W>
      {at === 0 && <Meter x={230} y={84} text="Check" lit />}
      {at === 1 && <>{Array.from({ length: 8 }, (_, index) => <Drop key={index} x={178 + (index % 4) * 34} y={70 + Math.floor(index / 4) * 44} size={14} fill={GOLD} />)}<W x={230} y={152} size={10}>Lots of hypos</W></>}
      {at === 2 && <>{Array.from({ length: 4 }, (_, index) => <g key={index}><rect x={166 + index * 36} y="64" width="30" height="34" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" /><Tick x={181 + index * 36} y={82} s={7} /></g>)}<W x={230} y={124} size={10}>A few weeks, no hypos</W></>}
      {at === 3 && <><Phone x={230} y={82} text="Low" lit /><path d="M262 64 Q272 82 262 100 M272 56 Q286 82 272 108" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" className={still ? undefined : "lib-why-pulse"} /><W x={230} y={136} size={10}>Day or night</W></>}
      {at === 4 && <><Car x={230} y={96} /><Cross x={230} y={76} s={22} /><W x={230} y={136} size={10}>Tell the DVLA</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HypoRule15(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Treat at once: 15 to 20g fast carbs", "5 glucose tablets or a small juice", "Rest 10 to 15 min, then check again", "Above 4? Something more filling"];
  const steps = ["Fast sugar", "Rest", "Check", "Then food"];
  const lit = [[0], [0], [1, 2], [3]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treating a hypo" title="15 to 20g, then check again" label="Treating a hypo" credit="Illustration: Rehyn. Follow your own diabetes team's plan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four steps: fast sugar, rest, check again, then something more filling">
      <path d="M45 80 H285" stroke={LINE} strokeWidth="4" />
      {steps.map((step, index) => { const x = 45 + index * 80; const on = lit.includes(index); return <g key={step}>
        <circle cx={x} cy="80" r="26" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={x} y={85} size={14} fill={on ? WHITE : TEXT}>{index + 1}</W>
        <W x={x} y={126} size={10.5}>{step}</W>
      </g>; })}
      {at === 0 && <W x={45} y={38} size={10.5}>15 to 20g</W>}
      {at === 1 && ["5 tablets", "4 jelly babies", "Juice 200ml"].map((tag, index) => <Box key={tag} x={58 + index * 102} y={164} w={94} text={tag} size={10} />)}
      {at === 2 && <><path d="M205 52 C190 24, 60 24, 45 50" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M38 44 L45 52 L53 45" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" /><W x={125} y={20} size={10}>Still below 4? Repeat</W><W x={125} y={164} size={10.5}>10 to 15 minutes</W></>}
      {at === 3 && ["Sandwich", "Toast", "Fruit"].map((tag, index) => <Box key={tag} x={58 + index * 102} y={164} w={94} text={tag} size={10} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HypoRecoveryPose(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Severe: needs help from someone else", "No food or drink; recovery position", "No glucagon, or not better: call 999", "Recovering and can swallow? Give sugar", "Afterwards, see a GP"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Severe hypos" title="When someone needs help with a hypo" label="Severe hypos and glucagon" credit="Illustration: Rehyn. In an emergency, call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Someone in the recovery position, a glucagon kit and a phone to call 999">
      <g opacity={at === 4 ? 0.4 : 1}>
        <circle cx="44" cy="138" r="11" fill={INK} />
        <path d="M58 132 H120 a8 8 0 0 1 0 16 H58 Z" fill={INK} />
        <path d="M118 134 L146 116 L162 140" stroke={INK} strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M60 146 L74 164" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        <path d="M24 160 H176" stroke={LINE} strokeWidth="3" />
      </g>
      {at === 1 && <W x={100} y={184} size={10}>On their side</W>}
      <g opacity={at === 0 || at === 2 ? 1 : 0.45}><rect x="196" y="40" width="70" height="40" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={231} y={64} size={10}>Glucagon</W></g>
      {at === 1 && <><Glass x={286} y={58} /><Cross x={286} y={58} s={18} /></>}
      {at === 2 && <><Phone x={240} y={136} text="999" lit /><W x={290} y={104} size={10}>Now</W></>}
      {at === 3 && <><Glass x={290} y={60} fill={GOLD} /><W x={240} y={120} size={10}>Once able to swallow</W></>}
      {at === 0 && <W x={240} y={120} size={10}>Stay with them</W>}
      {at === 4 && <><Person x={240} y={110} scale={1.1} fill={SOFT} /><W x={240} y={142} size={10}>GP or your team</W><W x={240} y={164} size={10}>Driving? Tell the DVLA</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HypoBedside(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Hypos can happen during sleep", "Morning clues: tired, headache, sweats", "Check before bed and in the night", "Alcohol or exercise: up to 24 hours", "Night hypos? Talk to your team"];
  const morning = at === 1 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme" kicker="At night" title="The hypo you might sleep through" label="Hypos at night" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bed, a bedside table with a meter, and a window showing night or morning">
      <rect x="236" y="24" width="64" height="52" rx="4" fill={morning ? WHITE : INK} stroke={INK} strokeWidth="2.5" />
      {morning ? <Sun x={268} y={50} r={10} /> : <Moon x={266} y={50} r={12} fill={WHITE} />}
      <rect x="24" y="110" width="12" height="62" rx="3" fill={INK} />
      <rect x="36" y="130" width="160" height="26" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M86 130 H196 V122 a10 10 0 0 0 -10 -10 H96 a10 10 0 0 0 -10 10 Z" fill={TINT} stroke={INK} strokeWidth="2" />
      <circle cx="62" cy="118" r="11" fill={INK} />
      <rect x="216" y="132" width="70" height="40" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="238" y="112" width="26" height="20" rx="4" fill={at === 2 ? INK : SOFT} />
      {at === 1 && ["Tired", "Headache", "Sweats"].map((tag, index) => <Box key={tag} x={56 + index * 70} y={46} w={64} text={tag} size={10} />)}
      {at === 2 && <Box x={116} y={50} w={170} text="Before bed, in the night" lit size={10} />}
      {at === 3 && <><Box x={62} y={42} w={78} text="Alcohol" size={10} /><Box x={62} y={76} w={78} text="Exercise" size={10} /><Arrow d="M106 59 H128" head="M121 52 L128 59 L121 66" /><Box x={180} y={59} w={86} text="24 hours" lit size={10} /></>}
      {at === 4 && <Box x={116} y={50} w={170} text="GP or diabetes team" lit size={10} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HypoDoseDiary(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Insulin and gliclazide can cause them", "Often, severe or night hypos? See a GP", "Doses or targets may be changed", "A pump or closed loop may help", "Record hypos; follow your plan"];
  const marks = [3, 9, 10, 17, 24];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="When the dose needs a rethink" label="Reviewing insulin and tablets" credit="Illustration: Rehyn. Do not change a medicine without your team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A diary of hypos, and the medicines and technology a review might change">
      <rect x="20" y="30" width="140" height="120" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {Array.from({ length: 28 }, (_, index) => <circle key={index} cx={36 + (index % 7) * 18} cy={52 + Math.floor(index / 7) * 26} r="5" fill={marks.includes(index) && at !== 0 ? GOLD : LINE} />)}
      <W x={90} y={170} size={10}>Hypo diary</W>
      {at === 0 && <><Pen x={248} y={60} /><W x={240} y={86} size={10}>Insulin</W><Pill x={240} y={118} /><W x={240} y={144} size={10}>Gliclazide</W></>}
      {at === 1 && ["Often", "Severe", "At night"].map((tag, index) => <Box key={tag} x={240} y={50 + index * 36} w={100} text={tag} lit size={10} />)}
      {at === 2 && <><Box x={240} y={56} w={100} text="Dose" lit /><Box x={240} y={100} w={100} text="Targets" lit /><W x={240} y={140} size={10}>With your team</W></>}
      {at === 3 && <><rect x="200" y="42" width="52" height="68" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={226} y={124} size={10}>Pump</W>
        <circle cx="286" cy="70" r="14" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M252 76 H272" stroke={GOLD} strokeWidth="3" strokeDasharray="4 4" /><W x={286} y={104} size={10}>Monitor</W></>}
      {at === 4 && <><Person x={240} y={104} scale={1.2} fill={SOFT} /><Arrow d="M170 90 H206" head="M199 83 L206 90 L199 97" /><W x={240} y={140} size={10}>Share with your team</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HypoCarCheck(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Low sugar: the greatest driving risk", "Check first, then every 2 hours", "4 or below? Do not drive", "Insulin over 3 months: tell the DVLA", "Tablets? Ask if the DVLA needs telling"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Driving" title="Check before you drive, stop if low" label="Driving and hypos" credit="Illustration: Rehyn. The DVLA's rules decide; check them for your licence."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A car on a road, with checks before and during the journey">
      <path d="M10 160 H310" stroke={LINE} strokeWidth="6" />
      <path d="M20 172 H60 M90 172 H130 M160 172 H200 M230 172 H270" stroke={LINE} strokeWidth="3" />
      <Car x={70} y={148} fill={at === 2 ? SOFT : INK} />
      {at === 2 && <Cross x={70} y={128} s={24} />}
      {at === 0 && <Box x={200} y={70} w={200} text="Slower reactions, poorer judgement" size={10} />}
      {at === 1 && [["Before", 140], ["2 hours", 210], ["4 hours", 280]].map(([label, x]) => <g key={label}><circle cx={Number(x)} cy="110" r="14" fill={INK} /><Tick x={Number(x)} y={110} s={7} stroke={WHITE} /><W x={Number(x)} y={82} size={10}>{label}</W></g>)}
      {at === 2 && <><Meter x={200} y={86} text="4 or less" lit /><W x={258} y={140} size={10}>Low? Stop safely</W></>}
      {at === 3 && <>{["Insulin over 3 months", "Severe hypo at the wheel", "Signs hard to notice"].map((tag, index) => <Box key={tag} x={210} y={40 + index * 34} w={180} text={tag} size={10} />)}</>}
      {at === 4 && <><Pill x={170} y={70} /><W x={170} y={98} size={10}>Ask your doctor</W><Box x={262} y={70} w={92} text="Lorry, bus" size={10} /><W x={262} y={98} size={10}>Separate rules</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HypoDay24(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Steady exercise tends to lower sugar", "4 or lower? Treat it; no exercise yet", "Check before, during and after", "Alcohol raises the risk of a hypo", "Eat with drinks; carry hypo treatment"];
  const ring = at === 2 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercise and alcohol" title="Active days and nights out" label="Exercise, alcohol and hypos" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A 24-hour clock with exercise and alcohol, and checks around them">
      <circle cx="90" cy="94" r="56" fill={WHITE} stroke={ring ? GOLD : LINE} strokeWidth={ring ? 8 : 4} />
      <W x={90} y={92} size={13}>24</W><W x={90} y={108} size={10}>hours</W>
      {at === 0 && <><Box x={236} y={60} w={130} text="Steady: lowers" lit size={10} /><Box x={236} y={104} w={130} text="Short bursts: raise" size={10} /></>}
      {at === 1 && <><Meter x={236} y={84} text="4 or less" lit /><W x={236} y={140} size={10}>Treat, then starchy carbs</W></>}
      {at === 2 && <>{[["Before", 300], ["During", 0], ["After", 60]].map(([label, deg]) => { const a = (Number(deg) - 90) * Math.PI / 180; return <circle key={label} cx={90 + 56 * Math.cos(a)} cy={94 + 56 * Math.sin(a)} r="8" fill={INK} />; })}
        {["Before", "During", "After"].map((tag, index) => <Box key={tag} x={236} y={52 + index * 36} w={110} text={tag} lit size={10} />)}</>}
      {at === 3 && <><Glass x={236} y={66} /><W x={236} y={106} size={10}>Risk lasts up to 24 hours</W><W x={236} y={124} size={10}>after drinking</W></>}
      {at === 4 && ["Eat when you drink", "Hypo treatment", "Medical ID", "Breakfast next day"].map((tag, index) => <Box key={tag} x={236} y={40 + index * 34} w={140} text={tag} size={10} lit={index === 0} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HypoHelpCard(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Family know the signs and what to do", "Out? Tell friends; wear medical ID", "Tell colleagues and the first aider", "Telling your employer is your choice", "Worried? A plan and your team help"];
  const who = ["Family", "Friends", "Work"];
  const on = [0, 1, 2, 2, -1][at];
  const card = ["Signs, and what to do", "Wear medical ID", "Tell the first aider", "Your choice", "Have a plan"][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Telling people" title="Who knows what to do?" label="Telling people what to do" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Family, friends and colleagues around a card about what to do in a hypo">
      <rect x="90" y="24" width="140" height="74" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <W x={160} y={46} size={10.5} fill={SOFT}>Hypo plan</W>
      <W x={160} y={68} size={10.5}>{card}</W>
      <path d="M110 84 H210" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
      {who.map((person, index) => <g key={person}><Person x={60 + index * 100} y={156} scale={1.1} fill={on === index ? INK : SOFT} /><W x={60 + index * 100} y={186} size={10}>{person}</W></g>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function HypoKitPouch(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Fast sugar, always with you", "A slower snack, meter and spares", "Glucagon kit and medical ID", "Any price works, if it has 15 to 20g", "By the bed, at work, in hand luggage"];
  const items = ["Glucose", "Juice", "Snack bar", "Meter", "Glucagon", "Medical ID"];
  const lit = [[0, 1], [2, 3], [4, 5], [0, 1], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Your kit" title="Your hypo kit, packed" label="Carrying a hypo kit" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An open pouch holding a hypo kit">
      <rect x="30" y="34" width="260" height="110" rx="18" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M44 34 H276" stroke={GOLD} strokeWidth="4" strokeDasharray="6 4" />
      {items.map((item, index) => <Box key={item} x={80 + (index % 3) * 80} y={70 + Math.floor(index / 3) * 40} w={72} text={item} size={10} lit={lit.includes(index)} />)}
      {at === 3 && <W x={160} y={170} size={10}>Some on prescription: ask your team</W>}
      {at === 4 && ["Bedside", "Work", "Hand luggage"].map((place, index) => <Box key={place} x={60 + index * 100} y={170} w={92} text={place} lit size={10} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Thyroid nodules and goitre ===========================================================================

function TnButterfly(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["A butterfly-shaped gland in the neck", "Goitre: swelling; nodules: lumps", "One nodule, many, or the whole gland", "Most are small; a GP should check"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What they are" title="A lump, or a whole gland growing" label="Nodules and goitre" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The butterfly-shaped thyroid in the neck, a nodule, and a goitre">
      {at === 2 ? <>
        {[0, 1, 2].map(index => <g key={index}><Thyroid x={60 + index * 100} y={90} s={index === 2 ? 1 : 0.85} left={index === 2 ? TINT : WHITE} right={index === 2 ? TINT : WHITE} />
          {index === 0 && <Nodule x={44} y={92} />}{index === 1 && <><Nodule x={136} y={84} r={6} /><Nodule x={148} y={102} r={6} /><Nodule x={180} y={92} r={6} /></>}</g>)}
        <W x={60} y={146} size={10}>One nodule</W><W x={160} y={146} size={10}>Several</W><W x={260} y={146} size={10}>Whole gland</W>
      </> : <>
        <path d="M112 20 C116 70, 104 120, 80 170 M208 20 C204 70, 216 120, 240 170" stroke={SOFT} strokeWidth="3" fill="none" />
        <rect x="150" y="20" width="20" height="160" rx="8" fill={TINT} stroke={INK} strokeWidth="2" />
        {[40, 56, 72, 140, 156].map(y => <path key={y} d={`M152 ${y} H168`} stroke={LINE} strokeWidth="2" />)}
        <Thyroid x={160} y={106} s={at === 1 ? 1.3 : 1} left={at === 1 ? TINT : WHITE} right={at === 1 ? TINT : WHITE} />
        {at === 1 && <><Nodule x={136} y={108} r={9} /><W x={250} y={100} size={10.5} anchor="start">Goitre</W><W x={70} y={150} size={10.5} anchor="end">Nodule</W><path d="M76 146 L126 114" stroke={GOLD} strokeWidth="2" /></>}
        {at === 0 && <><path d="M204 106 H230" stroke={INK} strokeWidth="2" /><W x={234} y={110} size={10.5} anchor="start">Thyroid</W><path d="M174 46 H230" stroke={INK} strokeWidth="2" /><W x={234} y={50} size={10.5} anchor="start">Windpipe</W></>}
        {at === 3 && <><Tick x={250} y={60} s={14} /><W x={262} y={100} size={10.5}>Usually</W><W x={262} y={114} size={10.5}>no problems</W></>}
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TnCauseRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often no clear cause", "Puberty, pregnancy or menopause", "Inflammation or the immune system", "Low iodine: rare in the UK", "Cancer is a rare cause"];
  const tags = [{ t: "Unknown", x: 70, y: 46 }, { t: "Hormone changes", x: 250, y: 46 }, { t: "Immune system", x: 70, y: 150 }, { t: "Iodine", x: 250, y: 150 }, { t: "Rarely cancer", x: 160, y: 178 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="Why the thyroid swells" label="Why they happen" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The thyroid with the causes of a lump or swelling around it">
      <Thyroid x={160} y={92} s={1.1} left={at === 2 ? TINT : WHITE} right={at === 2 ? TINT : WHITE} />
      {tags.map((tag, index) => <Box key={tag.t} x={tag.x} y={tag.y} w={112} text={tag.t} size={10} lit={index === at} dim={index !== at} />)}
      {at === 0 && <W x={160} y={20} size={10}>More common in women, and with age</W>}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function TnNeckSlice(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Most lumps cause no symptoms", "A painless swelling at the front", "Cough, hoarse voice, hard to swallow", "Symptoms change? See a GP"];
  const big = at >= 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="Often silent, sometimes in your voice" label="Symptoms" credit="Illustration: Rehyn. A slice across the neck, seen from above."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A slice across the neck: the windpipe, the gullet behind it, and the thyroid in front">
      <W x={160} y={16} size={10} fill={SOFT}>Front of the neck</W>
      <circle cx="160" cy="104" r="76" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {big && <path d="M110 46 C130 18, 190 18, 210 46" fill={TINT} stroke={INK} strokeWidth="2.5" />}
      <circle cx="160" cy="158" r="14" fill={SOFT} />
      <ellipse cx="160" cy="124" rx="13" ry="8" fill={TINT} stroke={INK} strokeWidth="2" />
      <circle cx="160" cy="88" r="16" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d={big ? "M128 92 C118 54, 150 40, 160 60 C170 40, 202 54, 192 92 C182 74, 138 74, 128 92 Z" : "M134 90 C128 66, 150 58, 160 70 C170 58, 192 66, 186 90 C176 78, 144 78, 134 90 Z"} fill={TINT} stroke={INK} strokeWidth="2.5" />
      <Nodule x={142} y={at >= 1 ? 66 : 74} r={at >= 1 ? 9 : 6} />
      {at === 2 && <><Arrow d="M160 54 V68" head="M154 62 L160 69 L166 62" /><Arrow d="M118 104 L140 116" head="M131 117 L141 117 L136 108" /></>}
      <W x={246} y={92} size={10} anchor="start">Windpipe</W><path d="M178 88 H242" stroke={INK} strokeWidth="1.5" />
      <W x={246} y={128} size={10} anchor="start">Gullet</W><path d="M175 124 H242" stroke={INK} strokeWidth="1.5" />
      {at === 2 && ["Cough", "Hoarse", "Swallowing"].map((tag, index) => <Box key={tag} x={42} y={66 + index * 34} w={72} text={tag} size={10} lit />)}
      {at === 3 && <><circle cx="44" cy="96" r="20" fill={GOLD} /><W x={44} y={100} size={11} fill={WHITE}>GP</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TnThreeChecks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A blood test checks hormone levels", "Ultrasound: painless, no radiation", "A fine needle takes a few cells", "Sore for a while; gone by 48 hours", "Reports can take up to three weeks"];
  const on = [0, 1, 2, 2, -1][at];
  const notes = ["Not a test for cancer", "Around 10 to 45 minutes", "Not every nodule needs one", "Paracetamol may help", "No news after 3 weeks? Ask"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="Blood, scan, needle: the three checks" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three checks: a blood test, an ultrasound scan and a fine needle test">
      {["Blood test", "Ultrasound", "Needle test"].map((label, index) => { const x = 60 + index * 100; return <g key={label} opacity={on < 0 || on === index ? 1 : 0.45}>
        <circle cx={x} cy="76" r="36" fill={TINT} stroke={on === index ? GOLD : INK} strokeWidth={on === index ? 4 : 2} />
        {index === 0 && <Tube x={x} y={78} />}
        {index === 1 && <g><rect x={x - 6} y="50" width="12" height="34" rx="5" fill={INK} /><path d={`M${x - 16} 84 H${x + 16} a6 6 0 0 1 -6 8 H${x - 10} a6 6 0 0 1 -6 -8 Z`} fill={INK} /><path d={`M${x - 14} 98 q14 8 28 0`} stroke={GOLD} strokeWidth="2.5" fill="none" /></g>}
        {index === 2 && <g><rect x={x - 20} y="70" width="30" height="12" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 10} 76 H${x + 26} M${x - 20} 76 H${x - 28}`} stroke={INK} strokeWidth="2.5" /></g>}
        <W x={x} y={130} size={10.5}>{label}</W>
      </g>; })}
      {at === 3 && <Clock x={30} y={166} r={12} hand={1} />}
      <Box x={160} y={166} w={220} text={notes[at]} size={10} lit={at === 4} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TnRulerWatch(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often no treatment is needed", "Benign result: usually discharged", "Blood tests every one to two years", "Millimetres over a year or two", "Grows or new symptoms? Scan again"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Watching" title="Watched, not treated" label="Keeping an eye on it" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A nodule beside a ruler in millimetres, and the checks that may follow">
      <rect x="30" y="148" width="260" height="22" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />
      {Array.from({ length: 27 }, (_, index) => <path key={index} d={`M${36 + index * 9.4} 148 V${index % 5 === 0 ? 162 : 155}`} stroke={at === 3 ? INK : SOFT} strokeWidth="1.5" />)}
      <circle cx="80" cy="96" r={at === 3 ? 26 : 22} fill={TINT} stroke={INK} strokeWidth="2.5" strokeDasharray={at === 3 ? "5 4" : undefined} />
      <Nodule x={80} y={96} r={10} />
      {at === 0 && <Box x={220} y={90} w={150} text="Scans, sometimes" />}
      {at === 1 && <><Tick x={220} y={84} s={18} /><W x={220} y={124} size={10.5}>Discharged from clinic</W></>}
      {at === 2 && <><Tube x={180} y={92} /><W x={250} y={86} size={10.5}>Every 1 to</W><W x={250} y={102} size={10.5}>2 years</W></>}
      {at === 3 && <W x={220} y={96} size={10.5}>Very slow growth</W>}
      {at === 4 && ["Bigger or harder", "A new lump", "Hard to swallow", "Hoarse voice"].map((tag, index) => <Box key={tag} x={222} y={30 + index * 30} w={140} text={tag} size={10} lit />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TnOptionFan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Treat only if it causes problems", "Medicines for over or underactive", "Radioactive iodine: a capsule or drink", "Drain a cyst, or heat to shrink", "A personal choice, made together"];
  const options = ["No treatment", "Medicines", "Radioactive iodine", "Drain or ablation", "Surgery"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Treatments" title="Options, from medicines to ablation" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The treatment options, from none to surgery, chosen together">
      {options.map((option, index) => <Box key={option} x={160} y={28 + index * 34} w={180} text={option} lit={index === at || (at === 0 && index === 4)} dim={at !== 4 && index !== at && !(at === 0 && index === 4)} />)}
      {at === 4 && <><Person x={36} y={110} scale={1.1} /><Person x={284} y={110} scale={1.1} fill={SOFT} /></>}
      {at === 0 && <><W x={284} y={160} size={9.5}>Breathing,</W><W x={284} y={173} size={9.5}>swallowing</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TnHalfWhole(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["For pressure, unclear cells or cancer", "Blood tests and a voice check first", "Half the gland, or all of it", "Home in one to two days, usually", "The scar usually fades to a white line"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Surgery" title="Half the gland, or all of it" label="Thyroid surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Removing half of the thyroid or all of it, and the scar afterwards">
      {at === 2 ? <>
        <Thyroid x={90} y={86} s={1.1} left={INK} /><Thyroid x={230} y={86} s={1.1} left={INK} right={INK} />
        <W x={90} y={140} size={10}>Half: lobectomy</W><W x={230} y={140} size={10}>All: total</W>
        <path d="M60 164 Q90 176 120 164 M200 164 Q230 176 260 164" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" /><W x={160} y={186} size={10}>Cut in a lower neck crease</W>
      </> : <>
        <Thyroid x={160} y={84} s={1.5} />
        {at === 0 && <Nodule x={136} y={88} r={11} />}
        {at === 1 && <><Tube x={50} y={84} /><W x={50} y={124} size={10}>Bloods</W><Box x={272} y={84} w={84} text="Voice check" size={10} /></>}
        {at === 3 && <>{["Day 1", "Day 2"].map((day, index) => <Box key={day} x={120 + index * 80} y={156} w={68} text={day} lit={index === 0} size={10} />)}</>}
        {at === 4 && <><path d="M70 156 Q100 170 130 156" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" /><path d="M190 156 Q220 170 250 156" stroke={WHITE} strokeWidth="4" fill="none" strokeLinecap="round" /><path d="M190 156 Q220 170 250 156" stroke={LINE} strokeWidth="1" fill="none" />
          <W x={100} y={186} size={10}>6 to 8 weeks</W><W x={220} y={186} size={10}>6 to 12 months</W></>}
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TnPeaGlands(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Hoarseness is usually temporary", "Tingling? Tell staff straight away", "Total removal: levothyroxine for life", "A blood test at six to eight weeks"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="After surgery" title="Voice, calcium and tablets after surgery" label="After surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The thyroid with the four small parathyroid glands behind it and the nerves to the voice box">
      <path d="M112 20 C104 70, 108 120, 116 170 M208 20 C216 70, 212 120, 204 170" stroke={at === 0 ? GOLD : LINE} strokeWidth={at === 0 ? 4 : 2.5} fill="none" />
      <Thyroid x={160} y={88} s={1.5} />
      {[[124, 70], [124, 106], [196, 70], [196, 106]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill={at === 1 ? GOLD : SOFT} stroke={WHITE} strokeWidth="2" />)}
      {at === 0 && <><W x={232} y={40} size={10} anchor="start">Voice box</W><W x={232} y={54} size={10} anchor="start">nerve</W></>}
      {at === 1 && <><W x={232} y={84} size={10} anchor="start">Parathyroids</W><W x={232} y={98} size={10} anchor="start">(calcium)</W></>}
      {at === 2 && <>{Array.from({ length: 7 }, (_, index) => <circle key={index} cx={64 + index * 32} cy="160" r="9" fill={INK} />)}<W x={160} y={184} size={10}>Each day, before breakfast</W></>}
      {at === 3 && <><Tube x={250} y={140} /><Calendar x={70} y={146} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TnHundredDots(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["95 in 100 lumps are not cancer", "Results take about two weeks", "Benign: be reassured", "A specialist team will look after you", "Talk to someone; help is there"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Worry" title="Waiting, with the facts" label="The worry of a lump" credit="Illustration: Rehyn. 95 in 100, as the British Thyroid Foundation gives it."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hundred dots, 95 of them for lumps that are not cancer">
      {Array.from({ length: 100 }, (_, index) => <circle key={index} cx={24 + (index % 10) * 12} cy={36 + Math.floor(index / 10) * 12} r="4.5" fill={index < 95 ? (at === 0 || at === 2 ? INK : SOFT) : LINE} />)}
      {at === 0 && <><W x={230} y={84} size={18}>95 in 100</W><W x={230} y={104} size={11}>not cancer</W></>}
      {at === 1 && <><Calendar x={230} y={80} w={84} h={64} /><W x={230} y={134} size={10.5}>About 2 weeks</W></>}
      {at === 2 && <><Tick x={230} y={78} s={22} /><W x={230} y={124} size={10.5}>No evidence of cancer</W></>}
      {at === 3 && <>{[0, 1, 2].map(index => <Person key={index} x={196 + index * 34} y={100} scale={0.9} fill={index === 1 ? INK : SOFT} />)}<W x={230} y={132} size={10}>Nurse specialist</W></>}
      {at === 4 && <><Phone x={230} y={82} text="Talk" lit /><W x={230} y={134} size={10}>Samaritans: 116 123</W></>}
      <Say y={180}>{caps[at]}</Say>
    </svg>} />;
}

function TnThreeLanes(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  const caps = ["Hard to breathe or wheezing: call 999", "Swallowing trouble: urgent GP or 111", "Neck lump or hoarse voice: see a GP"];
  const lanes = [["Hard to breathe", "999 or A&E"], ["Hard to swallow", "Urgent GP, 111"], ["Lump, hoarse voice", "See a GP"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="When to get help" title="When a neck needs help fast" label="Signs to get checked quickly" credit="Illustration: Rehyn. If it is hard to breathe, call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three lanes: breathing trouble to 999, swallowing trouble to an urgent GP or 111, a lump or hoarse voice to a GP">
      {lanes.map(([sign, place], index) => { const y = 44 + index * 52; return <g key={sign} opacity={index === at ? 1 : 0.4}>
        <Box x={88} y={y} w={146} h={32} text={sign} lit={index === at} />
        <Arrow d={`M166 ${y} H190`} head={`M183 ${y - 7} L190 ${y} L183 ${y + 7}`} />
        <Box x={254} y={y} w={116} h={32} text={place} lit={index === at} />
      </g>; })}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function TnIodineBalance(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Too little or too much can harm", "Milk, eggs and sea fish have iodine", "Avoid kelp and iodine drops", "No special thyroid diet needed"];
  const tilt = at === 2 ? 10 : 0;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Iodine" title="Not too little, not too much" label="Iodine and food" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balance: too little iodine on one side, too much on the other">
      <path d="M160 52 V146 M130 146 H190" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <g transform={`translate(160 52) rotate(${tilt})`}>
        <path d="M-104 0 H104" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <path d="M-104 0 L-124 40 H-84 Z M104 0 L84 40 H124 Z" fill="none" stroke={SOFT} strokeWidth="2" />
        <path d="M-130 40 H-78 a26 14 0 0 1 -52 0 Z M78 40 H130 a26 14 0 0 1 -52 0 Z" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <W x={-104} y={78} size={10.5}>Too little</W><W x={104} y={78} size={10.5}>Too much</W>
      </g>
      {at === 2 && <><W x={262} y={30} size={10}>Kelp, drops</W><Cross x={258} y={104} s={14} /></>}
      {at === 1 && ["Milk", "Eggs", "Sea fish"].map((food, index) => <Box key={food} x={64 + index * 96} y={172} w={84} text={food} lit size={10} />)}
      {at === 3 && <Box x={160} y={24} w={150} text="A balanced diet" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function TnCheckLines(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Benign: blood tests every 1 to 2 years", "After surgery: a test at 6 to 8 weeks", "After radioiodine: tests, then yearly", "Changes: GP; hard to breathe: 999"];
  const rows: { label: string; marks: number[]; notes: [string, number][] }[] = [
    { label: "Benign", marks: [150, 210, 270], notes: [["Every 1 to 2 years", 210]] },
    { label: "Surgery", marks: [126, 196, 236, 276], notes: [["6 to 8 wk", 126], ["Every 3 months", 236]] },
    { label: "Radioiodine", marks: [126, 176, 200, 224, 284], notes: [["4 to 6 wk", 126], ["1 to 3 months", 200], ["Yearly", 284]] },
  ];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Follow-up" title="The check-ups that follow" label="Follow-up and check-ups" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three lines of check-ups: after a benign result, after surgery and after radioactive iodine">
      {rows.map((row, index) => { const y = 46 + index * 52; const on = index === at; return <g key={row.label} opacity={at === 3 || on ? 1 : 0.4}>
        <W x={14} y={y + 4} size={10.5} anchor="start">{row.label}</W>
        <path d={`M100 ${y} H300`} stroke={LINE} strokeWidth="4" strokeLinecap="round" />
        {row.marks.map(x => <circle key={x} cx={x} cy={y} r="6" fill={on ? INK : SOFT} />)}
        {row.notes.map(([note, x]) => <W key={note} x={x} y={y - 12} size={9.5}>{note}</W>)}
      </g>; })}
      {at === 3 && <Box x={160} y={178} w={220} h={22} text="Waiting? Let the hospital know" size={10} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function SugarPieceView({ piece, ...props }: { piece: SugarPiece } & PieceProps) {
  switch (piece) {
    case "gd-hormone-key": return <GdHormoneKey {...props} />;
    case "gd-risk-ring": return <GdRiskRing {...props} />;
    case "gd-test-morning": return <GdTestMorning {...props} />;
    case "gd-scan-weeks": return <GdScanWeeks {...props} />;
    case "gd-finger-day": return <GdFingerDay {...props} />;
    case "gd-plate-split": return <GdPlateSplit {...props} />;
    case "gd-three-stones": return <GdThreeStones {...props} />;
    case "gd-walk-after": return <GdWalkAfter {...props} />;
    case "gd-birth-line": return <GdBirthLine {...props} />;
    case "gd-after-calendar": return <GdAfterCalendar {...props} />;
    case "gd-two-pregnancies": return <GdTwoPregnancies {...props} />;
    case "gd-kind-talk": return <GdKindTalk {...props} />;
    case "hypo-dip-line": return <HypoDipLine {...props} />;
    case "hypo-early-late": return <HypoEarlyLate {...props} />;
    case "hypo-balance-tips": return <HypoBalanceTips {...props} />;
    case "hypo-warning-light": return <HypoWarningLight {...props} />;
    case "hypo-rule-15": return <HypoRule15 {...props} />;
    case "hypo-recovery-pose": return <HypoRecoveryPose {...props} />;
    case "hypo-bedside": return <HypoBedside {...props} />;
    case "hypo-dose-diary": return <HypoDoseDiary {...props} />;
    case "hypo-car-check": return <HypoCarCheck {...props} />;
    case "hypo-day-24": return <HypoDay24 {...props} />;
    case "hypo-help-card": return <HypoHelpCard {...props} />;
    case "hypo-kit-pouch": return <HypoKitPouch {...props} />;
    case "tn-butterfly": return <TnButterfly {...props} />;
    case "tn-cause-ring": return <TnCauseRing {...props} />;
    case "tn-neck-slice": return <TnNeckSlice {...props} />;
    case "tn-three-checks": return <TnThreeChecks {...props} />;
    case "tn-ruler-watch": return <TnRulerWatch {...props} />;
    case "tn-option-fan": return <TnOptionFan {...props} />;
    case "tn-half-whole": return <TnHalfWhole {...props} />;
    case "tn-pea-glands": return <TnPeaGlands {...props} />;
    case "tn-hundred-dots": return <TnHundredDots {...props} />;
    case "tn-three-lanes": return <TnThreeLanes {...props} />;
    case "tn-iodine-balance": return <TnIodineBalance {...props} />;
    case "tn-check-lines": return <TnCheckLines {...props} />;
  }
}
