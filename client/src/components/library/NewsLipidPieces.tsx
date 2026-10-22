import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { LIPID_PIECES, type LipidPiece } from "@/content/lipid-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The High cholesterol, Familial hypercholesterolaemia and Obesity pages' own pieces (content/lipid-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Diabetes & metabolism pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body or results. Weight pictures are neutral: no before and after, no scales.

export const isLipidPiece = (piece: NewsPiece): piece is LipidPiece => (LIPID_PIECES as readonly string[]).includes(piece);

const notMeasured = "Illustration: Rehyn. A picture of the idea, not a measurement.";

/** The caption under a picture. */
const Say = ({ children }: { children: ReactNode }) => <W x={160} y={206} size={11}>{children}</W>;
/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 24, size = 10.5, dim = false }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number; dim?: boolean }) =>
  <g opacity={dim ? 0.4 : 1}><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="8" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
const LIVER = "M0 20 C0 -6 52 -14 92 -2 C110 4 108 26 90 40 C64 58 18 62 4 46 C-2 38 0 28 0 20 Z";
const Liver = ({ x, y, s = 1, fill = WHITE }: { x: number; y: number; s?: number; fill?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${s})`} d={LIVER} fill={fill} stroke={INK} strokeWidth={3 / s} strokeLinejoin="round" />;
/** A blood sample tube. */
const Tube = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g transform={`translate(${x} ${y})`}><rect x="-7" y="-20" width="14" height="44" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M-5.5 4 H5.5 V17 A5.5 5.5 0 0 1 -5.5 17 Z" fill={lit ? INK : SOFT} /><rect x="-9" y="-26" width="18" height="8" rx="2" fill={INK} /></g>;
const Drop = ({ x, y, fill = INK }: { x: number; y: number; fill?: string }) =>
  <path transform={`translate(${x} ${y})`} d="M0 -14 C5 -6 10 0 10 5 A10 10 0 0 1 -10 5 C-10 0 -5 -6 0 -14 Z" fill={fill} />;
/** A cheek swab. */
const Swab = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x} ${y + 24} V${y - 10}`} stroke={INK} strokeWidth="3" strokeLinecap="round" /><ellipse cx={x} cy={y - 16} rx="6" ry="9" fill={WHITE} stroke={INK} strokeWidth="2.5" /></g>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 12 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
/** A gold ring round what the section is about. */
const Ring = ({ x, y, r, still }: { x: number; y: number; r: number; still: boolean }) =>
  <circle cx={x} cy={y} r={r} fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />;
const Cig = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 26} y={y - 5} width="42" height="10" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x={x + 16} y={y - 5} width="10" height="10" rx="2" fill={GOLD} /></g>;
const Glass = ({ x, y }: { x: number; y: number }) =>
  <path d={`M${x - 11} ${y - 16} h22 l-11 18 Z M${x} ${y + 2} v12 M${x - 8} ${y + 14} h16`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />;
const Cal = ({ x, y, w = 40, lit = false }: { x: number; y: number; w?: number; lit?: boolean }) =>
  <g><rect x={x - w / 2} y={y - w * 0.42} width={w} height={w * 0.86} rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - w / 2} y={y - w * 0.42} width={w} height={w * 0.22} rx="3" fill={lit ? GOLD : INK} />
    {[0, 1, 2].map(row => [0, 1, 2].map(col => <circle key={`${row}${col}`} cx={x - w * 0.25 + col * w * 0.25} cy={y + row * w * 0.17} r={w * 0.045} fill={SOFT} />))}</g>;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 11} y={y - 18} width="22" height="36" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 11} r="2.2" fill={lit ? WHITE : INK} /></g>;
const Envelope = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 16} y={y - 11} width="32" height="22" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.2" /><path d={`M${x - 16} ${y - 10} L${x} ${y + 2} L${x + 16} ${y - 10}`} fill="none" stroke={INK} strokeWidth="2.2" /></g>;
/** An injection pen, lying across from x. */
const Pen = ({ x, y, w = 110, lit = false }: { x: number; y: number; w?: number; lit?: boolean }) =>
  <g><rect x={x} y={y - 8} width={w} height="16" rx="8" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><rect x={x + w * 0.3} y={y - 4} width="22" height="8" rx="2" fill={lit ? WHITE : TINT} /><rect x={x + w - 2} y={y - 3} width="10" height="6" rx="2" fill={GOLD} /></g>;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
const STOMACH = "M-4 -38 V-26 C-24 -22 -30 0 -22 18 C-14 34 14 36 24 20 C32 6 22 -8 8 -10 C2 -12 4 -26 4 -38";

// ==== High cholesterol ======================================================================================

function CholParcels(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["A fat your body needs, in every cell", "About 80% is made in the liver", "HDL brings it back, LDL takes it out", "Too much can stick to artery walls", "Triglycerides: another blood fat"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The fat your body makes itself" label="What cholesterol is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The liver sending cholesterol in parcels along an artery to the body's cells">
      <Liver x={14} y={74} fill={at === 1 ? INK : WHITE} />
      <W x={64} y={at === 1 ? 104 : 102} size={at === 1 ? 15 : 11} fill={at === 1 ? WHITE : TEXT}>{at === 1 ? "80%" : "Liver"}</W>
      <rect x="126" y="66" width="182" height="52" fill={TINT} />
      <path d="M126 66 H308 M126 118 H308" stroke={INK} strokeWidth="3" />
      <W x={217} y={56} size={10.5}>Artery</W>
      {at !== 2 && at !== 4 && <path d="M132 92 H302" stroke={SOFT} strokeWidth="3" strokeDasharray="6 12" className={still ? undefined : "lib-types-flow"} />}
      {(at === 0 || at === 1) && [164, 218, 272].map(x => <circle key={x} cx={x} cy={92} r="9" fill={INK} stroke={WHITE} strokeWidth="2" />)}
      {at === 0 && <>{[172, 212, 252, 292].map(x => <g key={x}><circle cx={x} cy={152} r="12" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx={x} cy={152} r="4" fill={SOFT} /></g>)}<W x={150} y={156} size={10.5} anchor="end">Cells</W></>}
      {at === 2 && <>
        {[150, 230].map(x => <g key={x}><rect x={x - 17} y={71} width="34" height="18" rx="9" fill={INK} /><W x={x} y={84} size={9.5} fill={WHITE}>LDL</W></g>)}
        {[190, 270].map(x => <g key={x}><rect x={x - 17} y={95} width="34" height="18" rx="9" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={108} size={9.5}>HDL</W></g>)}
        <Arrow d="M266 80 H298" head="M291 74 L298 80 L291 86" /><Arrow d="M162 104 H134" head="M141 98 L134 104 L141 110" />
        <W x={217} y={142} size={10}>To cells, and back to the liver</W>
      </>}
      {at === 3 && <><path d="M176 118 C188 94 240 94 252 118 Z" fill={GOLD} /><circle cx="204" cy="104" r="7" fill={INK} /><circle cx="226" cy="101" r="7" fill={INK} /></>}
      {at === 4 && <>{[160, 202, 244, 286].map(x => <path key={x} d={`M${x} ${84} l9 15 h-18 Z`} fill={GOLD} stroke={INK} strokeWidth="1.5" />)}<W x={217} y={142} size={10.5}>Triglycerides</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CholSlip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A blood test: arm or finger prick", "Ask for the breakdown, not just total", "Total below 5, non-HDL below 4", "After a heart attack, lower targets", "Your target depends on age and risk"];
  const rows = ["Total", "Non-HDL", "LDL", "HDL"];
  const values = [["", "", "", ""], ["Given", "Ask", "Ask", "Ask"], ["below 5", "below 4", "below 3", "above 1"], ["4 or below", "", "2 or below", ""], ["", "", "", ""]][at];
  const lit = (index: number) => (at === 1 && index === 0) || (at === 3 && (index === 0 || index === 2));
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The numbers" title="Three numbers worth asking for" label="Your cholesterol test" credit="Illustration: Rehyn. Guide levels from the NHS and the BHF, in mmol/L."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A cholesterol results slip with total, non-HDL, LDL and HDL">
      <rect x="20" y="16" width="180" height="162" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <W x={110} y={40} size={11.5}>{["Your results", "Your results", "Healthy guide", "Lower targets", "Your own target"][at]}</W>
      {rows.map((row, index) => { const y = 66 + index * 30; return <g key={row} opacity={at === 3 && (index === 1 || index === 3) ? 0.4 : 1}>
        <rect x="28" y={y - 13} width="164" height="24" rx="6" fill={lit(index) ? INK : TINT} />
        <W x={36} y={y + 4} size={10.5} anchor="start" fill={lit(index) ? WHITE : TEXT}>{row}</W>
        {values[index] ? <W x={184} y={y + 4} size={10.5} anchor="end" fill={lit(index) ? WHITE : TEXT}>{values[index]}</W> : <path d={`M130 ${y} H182`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />}
      </g>; })}
      {at === 0 && <><Tube x={238} y={82} /><Drop x={282} y={86} /><W x={260} y={134} size={10}>Arm or</W><W x={260} y={148} size={10}>finger prick</W></>}
      {at === 1 && <><circle cx="254" cy="88" r="26" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M272 107 L292 128" stroke={INK} strokeWidth="5" strokeLinecap="round" /><W x={254} y={95} size={18}>?</W></>}
      {at === 2 && <><W x={260} y={92} size={12}>mmol/L</W><W x={260} y={112} size={10}>for healthy</W><W x={260} y={126} size={10}>adults</W></>}
      {at === 3 && <><HeartShape x={260} y={84} size={62} /><W x={260} y={132} size={10}>After a heart</W><W x={260} y={146} size={10}>attack or stroke</W></>}
      {at === 4 && ["Age", "Conditions", "Heart risk"].map((label, index) => <Box key={label} x={258} y={60 + index * 34} w={92} text={label} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CholRoads(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Very common: about half of UK adults", "Food, activity, weight, smoking, drink", "Age, sex, menopause, background", "It can run in families, as with FH", "Some conditions and medicines too"];
  const change = ["Saturated fat", "Too little activity", "Excess weight", "Smoking, alcohol"];
  const fixed = ["Over 50, or a man", "Menopause", "Background", "Family genes"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The causes" title="The many roads to high cholesterol" label="Why it is high" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Causes of high cholesterol you can change and causes you cannot">
      {at === 0 && <>
        <W x={160} y={52} size={12}>Total above 5mmol/L</W>
        {Array.from({ length: 10 }, (_, index) => <Person key={index} x={30 + index * 29} y={128} scale={0.8} fill={index < 5 ? INK : SOFT} />)}
        <W x={160} y={164} size={11}>About 1 in 2 adults in the UK</W>
      </>}
      {at >= 1 && at <= 3 && <>
        <W x={82} y={30} size={11.5}>Can change</W><W x={238} y={30} size={11.5}>Cannot change</W>
        <path d="M160 40 V170" stroke={LINE} strokeWidth="2" />
        {change.map((label, index) => <Box key={label} x={82} y={56 + index * 32} w={134} text={label} lit={at === 1} dim={at !== 1} />)}
        {fixed.map((label, index) => <Box key={label} x={238} y={56 + index * 32} w={134} text={label} lit={(at === 2 && index < 3) || (at === 3 && index === 3)} dim={at === 1} />)}
      </>}
      {at === 4 && <>
        {["Underactive thyroid", "Kidney disease", "Liver disease", "Type 2 diabetes"].map((label, index) => <Box key={label} x={index % 2 ? 234 : 86} y={60 + Math.floor(index / 2) * 36} w={140} text={label} />)}
        <Box x={160} y={146} w={160} text="Some medicines" lit />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CholGauge(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Cholesterol is one part of your risk", "QRISK: an estimate over 10 years", "Under 10% low; 20% or more is high", "Often at an NHS Health Check, 40 to 74", "Not used if you have heart disease"];
  const tiles = [["Age", "Blood pressure", "Conditions", "Cholesterol"], ["Age and sex", "Smoking", "Family history", "Blood pressure"], ["Under 10%: low", "10 to 20%: moderate", "20% or more: high"], ["NHS Health Check", "Ages 40 to 74", "Every 5 years"], ["Heart disease", "Taking statins", "Aged 85 or over"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Your risk" title="Your number in context" label="Heart and stroke risk" credit="Illustration: Rehyn. A picture of the idea, not your own score."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A risk gauge fed by age, blood pressure, smoking and cholesterol">
      <g opacity={at === 4 ? 0.35 : 1}><Gauge x={98} y={150} r={64} value={at === 2 ? 0.55 : 0.35} /></g>
      {at === 1 && <W x={98} y={70} size={11}>Over 10 years</W>}
      {at === 2 && <><W x={34} y={172} size={10}>Low</W><W x={98} y={70} size={10}>Moderate</W><W x={162} y={172} size={10}>High</W></>}
      {tiles.map((label, index) => <Box key={label} x={250} y={(tiles.length === 4 ? 50 : 66) + index * 32} w={120} text={label} size={10} lit={at === 0 && index === 3} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CholStatin(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Less cholesterol made by the body", "If your risk is higher; your choice", "Once a day; a check after 3 months", "Most people have no side effects", "Serious side effects? Call 111"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Statins" title="One tablet, less cholesterol made" label="Statins" credit="Illustration: Rehyn. Never stop a medicine without talking to your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A liver making less cholesterol with a daily statin tablet">
      <Liver x={16} y={72} s={1.1} />
      <Pill x={74} y={98} />
      <W x={74} y={160} size={10.5}>Liver</W>
      {at === 0 && <Gauge x={250} y={128} r={46} value={0.2} label="Cholesterol made" />}
      {at === 1 && ["Higher risk", "Heart disease", "Your choice"].map((label, index) => <Box key={label} x={250} y={64 + index * 34} w={116} text={label} lit={index === 2} />)}
      {at === 2 && <><W x={250} y={42} size={10.5}>Once a day</W>{Array.from({ length: 7 }, (_, index) => <rect key={index} x={192 + index * 17} y={52} width="13" height="13" rx="3" fill={INK} />)}<Tube x={250} y={118} lit /><W x={250} y={166} size={10.5}>3 months</W></>}
      {at === 3 && <><W x={250} y={90} size={22} serif>62 of 66</W><W x={250} y={114} size={10}>listed side effects</W><W x={250} y={128} size={10}>may not be the statin</W></>}
      {at === 4 && ["Talk to a doctor", "Do not just stop", "Serious? Call 111"].map((label, index) => <Box key={label} x={250} y={64 + index * 34} w={124} text={label} lit={index === 2} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CholSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["If statins do not work or do not suit", "Ezetimibe: less taken in from food", "Bempedoic acid: works in the liver", "Injections every 2 weeks to 6 months", "Swelling or struggling to breathe: 999"];
  const steps = ["Statin", "Ezetimibe", "Bempedoic", "Injection"];
  const current = [0, 1, 2, 3, -1][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Other medicines" title="When statins need back-up" label="Other medicines" credit="Illustration: Rehyn. Your doctor will say which medicine suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Steps of treatment: a statin, ezetimibe, bempedoic acid and an injection">
      {steps.map((step, index) => { const x = 12 + index * 76, top = 150 - index * 30; return <g key={step} opacity={at === 4 ? 0.4 : 1}>
        <rect x={x} y={top} width="72" height={30 + index * 30} rx="6" fill={index === current ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x + 36} y={top + 19} size={10.5} fill={index === current ? WHITE : TEXT}>{step}</W>
        {index === current && <circle cx={x + 36} cy={top - 14} r="8" fill={GOLD} />}
      </g>; })}
      {at === 0 && <Cross x={48} y={112} s={9} />}
      {at === 3 && <Cal x={200} y={40} w={32} lit />}
      {at === 4 && <><Box x={92} y={36} w={156} text="999: sudden swelling" lit /><Box x={92} y={68} w={156} text="111: muscle pain" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CholPlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Swap saturated fat for unsaturated", "Less butter, pies, cheese and cakes", "More oily fish, wholegrains, beans", "Oats or barley: 2 to 3 portions a day", "Keep it up alongside any medicine"];
  const left = ["Butter", "Pies", "Cheese"];
  const right = at === 3 ? ["Oats", "Barley", "Nuts"] : ["Olive oil", "Oily fish", "Beans"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Food" title="Swap the fat, add the fibre" label="Eating to lower cholesterol" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate with foods high in saturated fat on one side and healthier swaps on the other">
      <circle cx="160" cy="96" r="74" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M160 34 A62 62 0 0 0 160 158 Z" fill={SOFT} opacity={at === 1 ? 0.5 : 0} />
      <path d="M160 34 A62 62 0 0 1 160 158 Z" fill={SOFT} opacity={at === 2 || at === 3 ? 0.5 : 0} />
      <circle cx="160" cy="96" r="62" fill="none" stroke={LINE} strokeWidth="2" />
      <path d="M160 26 V166" stroke={INK} strokeWidth="2" />
      {left.map((label, index) => <g key={label} opacity={at === 2 || at === 3 ? 0.4 : 1}><W x={118} y={74 + index * 26} size={10.5}>{label}</W>{at === 1 && <path d={`M96 ${70 + index * 26} H140`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />}</g>)}
      {right.map((label, index) => <W key={label} x={202} y={74 + index * 26} size={10.5}>{label}</W>)}
      {at === 0 && <Arrow d="M110 180 C140 192 180 192 210 180" head="M202 177 L210 180 L205 187" />}
      {at === 4 && <><W x={262} y={36} size={14}>+</W><Pill x={290} y={32} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CholHabits(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Moving helps clear bad cholesterol", "150 minutes a week; start slowly", "Losing 10% of weight helps lower it", "Quit smoking: risk halved in a year", "No more than 14 units a week"];
  const spots = [{ x: 54, y: 52, t: "Activity" }, { x: 266, y: 52, t: "Time" }, { x: 46, y: 134, t: "Weight" }, { x: 274, y: 134, t: "Smoking" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Everyday changes" title="Move more, smoke less" label="Activity, weight and smoking" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five everyday changes around a heart: activity, time, weight, smoking and alcohol">
      <HeartShape x={160} y={94} size={96} />
      <W x={160} y={98} size={12}>{["HDL up", "150 min", "10%", "Halved", "14 units"][at]}</W>
      <g opacity={at === 0 ? 1 : 0.4}><path d="M36 60 h36 v-6 c-9 0 -15 -4 -17 -12 h-9 v-4 h-10 Z" fill={INK} /></g>
      <g opacity={at === 1 ? 1 : 0.4}><Clock x={266} y={50} r={17} hand={2.4} /></g>
      <g opacity={at === 2 ? 1 : 0.4}><rect x="26" y="126" width="40" height="16" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />{[0, 1, 2, 3].map(index => <path key={index} d={`M${33 + index * 9} 126 v${index % 2 ? 5 : 8}`} stroke={INK} strokeWidth="1.5" />)}</g>
      <g opacity={at === 3 ? 1 : 0.4}><Cig x={278} y={134} /></g>
      <g opacity={at === 4 ? 1 : 0.4}><Glass x={160} y={170} /></g>
      {spots.map((spot, index) => <W key={spot.t} x={spot.x} y={spot.y + 32} size={10} fill={at === index ? INK : TEXT}>{spot.t}</W>)}
      <W x={182} y={174} size={10} anchor="start" fill={at === 4 ? INK : TEXT}>Alcohol</W>
      {at < 4 ? <Ring x={spots[at].x} y={spots[at].y - 2} r={26} still={still} /> : <Ring x={160} y={170} r={22} still={still} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CholRecheck(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["A blood test every year", "Started a statin? Check at 3 months", "GP, pharmacy or NHS Health Check", "Home kit? Follow up with a proper test"];
  const ticks = [{ x: 30, t: "Start" }, { x: 92, t: "3 months" }, { x: 278, t: "12 months" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Rechecks" title="Check, then check again" label="Rechecking your cholesterol" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year's timeline with cholesterol checks at 3 months and 12 months">
      <g opacity={at >= 2 ? 0.35 : 1}>
        <path d="M30 100 H278" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
        {ticks.map(tick => <g key={tick.t}><circle cx={tick.x} cy={100} r="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={tick.x} y={124} size={10}>{tick.t}</W></g>)}
        <Drop x={92} y={80} fill={at === 1 ? INK : SOFT} /><Drop x={278} y={80} fill={INK} />
        {at === 1 && <Pill x={30} y={76} />}
        {at === 0 && <><path d="M200 66 C214 34 264 30 276 58" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /><path d="M270 52 L276 60 L282 52" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /><W x={196} y={42} size={10.5}>Every year</W></>}
      </g>
      {at === 2 && ["GP surgery", "Pharmacy", "Health Check"].map((label, index) => <Box key={label} x={62 + index * 98} y={160} w={88} text={label} size={10} lit />)}
      {at === 3 && <>
        <rect x="34" y="140" width="56" height="38" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="40" y="146" width="44" height="18" rx="3" fill={TINT} /><W x={62} y={159} size={10}>Total</W>
        <Arrow d="M102 160 H222" head="M214 154 L222 160 L214 166" /><W x={162} y={150} size={10}>Then a proper test</W>
        <Tube x={250} y={158} lit />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CholLabel(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Compare per 100g, not per portion", "Over 5g saturates per 100g is high", "Red high, amber medium, green low", "Ingredients run from most to least"];
  const names = ["Energy", "Fat", "Saturates", "Sugars", "Salt"];
  const levels = ["Med", "High", "High", "Med", "Low"];
  const shade = (level: string) => level === "High" ? INK : level === "Med" ? SOFT : TINT;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Food labels" title="Reading the traffic lights" label="Reading food labels" credit="Illustration: Rehyn. An example label, drawn in the page's colours."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A front-of-pack label with five circles, and how to read saturated fat">
      {names.map((name, index) => { const fill = at === 2 ? shade(levels[index]) : at === 1 && index === 2 ? INK : WHITE; return <g key={name}>
        <circle cx={40 + index * 60} cy={50} r="24" fill={fill} stroke={INK} strokeWidth="2" />
        {at === 2 && <W x={40 + index * 60} y={54} size={10} fill={fill === INK ? WHITE : TEXT}>{levels[index]}</W>}
        <W x={40 + index * 60} y={92} size={9.5}>{name}</W>
      </g>; })}
      {at === 0 && <><Box x={100} y={140} w={110} text="Per 100g" lit /><Box x={220} y={140} w={110} text="Per portion" dim /></>}
      {at === 1 && <><path d="M30 156 H160" stroke={LINE} strokeWidth="10" strokeLinecap="round" /><path d="M160 156 H290" stroke={INK} strokeWidth="10" strokeLinecap="round" /><path d="M160 142 V170" stroke={GOLD} strokeWidth="3" /><W x={160} y={134} size={10.5}>5g per 100g</W><W x={226} y={182} size={10}>More: high</W></>}
      {at === 2 && [{ t: "High", f: INK }, { t: "Medium", f: SOFT }, { t: "Low", f: TINT }].map((key, index) => <g key={key.t}><circle cx={70 + index * 80} cy={146} r="9" fill={key.f} stroke={INK} strokeWidth="1.5" /><W x={84 + index * 80} y={150} size={10.5} anchor="start">{key.t}</W></g>)}
      {at === 3 && <>
        <rect x="26" y="110" width="268" height="72" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" />
        <W x={38} y={130} size={10} anchor="start">Ingredients, most first</W>
        {["Cream", "Butter", "Palm oil"].map((label, index) => <Box key={label} x={80 + index * 80} y={158} w={72} text={label} size={10} lit={index === 0} />)}
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CholMyths(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Eggs: fine for most people", "Prawns and liver: low in saturated fat", "Butter is about half saturated fat", "Coconut oil: almost all saturated fat", "With FH: 3 or 4 eggs a week"];
  const tabs = ["Eggs", "Shellfish", "Butter", "Coconut", "FH"];
  const share = at === 2 ? 0.5 : 0.92;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Myths" title="Eggs, butter and the truth" label="Eggs, butter and other questions" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Cards for eggs, shellfish, butter, coconut oil and FH">
      {tabs.map((tab, index) => <g key={tab}><rect x={10 + index * 60} y="12" width="56" height="26" rx="9" fill={index === at ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={38 + index * 60} y={29} size={10} fill={index === at ? WHITE : TEXT}>{tab}</W></g>)}
      {at === 0 && <><ellipse cx="110" cy="112" rx="32" ry="40" fill={WHITE} stroke={INK} strokeWidth="3" /><W x={226} y={106} size={14}>1 or 2 a day</W><W x={226} y={126} size={10.5}>fine for most adults</W></>}
      {at === 1 && <>
        <Box x={92} y={80} w={136} text="Prawns and crab" /><Box x={92} y={114} w={136} text="Liver and kidney" />
        <W x={238} y={92} size={11}>Low in</W><W x={238} y={108} size={11}>saturated fat</W>
        <W x={160} y={158} size={10}>Liver: no more than 1 portion a week</W>
      </>}
      {(at === 2 || at === 3) && <>
        {at === 2 ? <><rect x="56" y="88" width="104" height="56" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={108} y={120} size={11}>Butter</W></>
          : <><rect x="72" y="80" width="72" height="86" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="66" y="68" width="84" height="14" rx="4" fill={INK} /><W x={108} y={120} size={10.5}>Coconut</W><W x={108} y={134} size={10.5}>oil</W></>}
        <W x={242} y={58} size={10}>Saturated</W>
        <rect x="220" y="66" width="44" height="90" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x="222" y={66 + 90 * (1 - share)} width="40" height={90 * share - 2} rx="4" fill={INK} />
        <W x={242} y={176} size={10}>{at === 2 ? "About half" : "Almost all"}</W>
      </>}
      {at === 4 && <>{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}><rect x={22 + index * 40} y="74" width="34" height="44" rx="7" fill={WHITE} stroke={INK} strokeWidth="2" />{index % 2 === 0 && <ellipse cx={39 + index * 40} cy={96} rx="8" ry="11" fill={TINT} stroke={INK} strokeWidth="2" />}<W x={39 + index * 40} y={136} size={10}>{day}</W></g>)}</>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function CholFamily(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Families share genes and habits", "FH: a 1 in 2 chance for each child", "Many small genes can add up too", "Rare signs; a genetic test can help", "Test relatives; FH can be managed"];
  const kids = [90, 160, 230];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Families" title="Find it in one, protect them all" label="Cholesterol in the family" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two parents and three children, and how high cholesterol can be passed on">
      {at === 0 && <path d="M100 36 L160 10 L220 36" fill="none" stroke={SOFT} strokeWidth="3" strokeLinejoin="round" />}
      <path d="M120 100 V112 H200 V100 M160 112 V122 M90 122 H230 M90 122 V130 M160 122 V130 M230 122 V130" fill="none" stroke={LINE} strokeWidth="3" />
      <Person x={120} y={84} fill={at === 1 || at === 0 || at === 4 ? INK : SOFT} />
      <Person x={200} y={84} fill={at === 0 || at === 4 ? INK : SOFT} />
      {at === 1 && <Ring x={120} y={60} r={24} still={still} />}
      {kids.map(x => <g key={x}><Person x={x} y={168} scale={0.8} fill={at === 0 || at === 4 ? INK : SOFT} />
        {at === 1 && <g><circle cx={x + 24} cy={142} r="8" fill={WHITE} stroke={INK} strokeWidth="2" /><path d={`M${x + 24} 134 A8 8 0 0 0 ${x + 24} 150 Z`} fill={INK} /></g>}</g>)}
      {at === 1 && <W x={160} y={30} size={11}>1 in 2 for each child</W>}
      {at === 2 && Array.from({ length: 12 }, (_, index) => <circle key={index} cx={262 + (index % 3) * 14} cy={44 + Math.floor(index / 3) * 14} r="4.5" fill={GOLD} />)}
      {at === 3 && <><Tube x={36} y={150} lit /><Swab x={286} y={150} /></>}
      {at === 4 && <Envelope x={266} y={60} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Familial hypercholesterolaemia ========================================================================

function FhReceptors(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Passed down, high from birth", "LDL cannot be cleared, so it builds up", "Most: the LDL receptor gene", "About 1 in 250 people have FH", "Treatable once it is found"];
  const receptors = at === 4 ? [60, 100, 140, 180, 220, 260] : [80, 240];
  const balls = at === 4 ? [[66, 52], [150, 48], [262, 40]] : [[40, 60], [70, 48], [102, 38], [132, 60], [164, 42], [196, 60], [226, 38], [256, 58], [286, 42], [118, 76], [196, 78], [160, 74],
    ...(at === 1 ? [[34, 78], [140, 80], [218, 80], [290, 74], [100, 64]] : [])];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="One gene, a lifetime of high cholesterol" label="What FH is" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A liver cell catching LDL cholesterol from the blood, with fewer catchers in FH">
      <rect x="14" y="22" width="292" height="70" fill={TINT} />
      <path d="M14 22 H306" stroke={INK} strokeWidth="3" />
      <W x={22} y={38} size={10} anchor="start">Blood</W>
      {balls.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill={SOFT} stroke={INK} strokeWidth="1.5" />)}
      {(at <= 1 || at === 4) && <>
        <rect x="30" y="92" width="260" height="70" rx="18" fill={WHITE} stroke={INK} strokeWidth="3" />
        {receptors.map(x => <path key={x} d={`M${x} 92 V80 M${x} 80 l-7 -9 M${x} 80 l7 -9`} fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />)}
        {at === 4 && receptors.slice(0, 3).map(x => <circle key={x} cx={x} cy={66} r="6" fill={GOLD} />)}
        <W x={160} y={136} size={11}>{at === 4 ? "Medicines and a healthy lifestyle" : "Liver cell"}</W>
      </>}
      {at === 2 && <>
        <Box x={66} y={128} w={108} text="LDL receptor" lit /><Box x={174} y={128} w={84} text="APOB" /><Box x={262} y={128} w={76} text="PCSK9" />
        <W x={66} y={160} size={10}>Most</W><W x={174} y={160} size={10}>2 or 3 in 100</W><W x={262} y={160} size={10}>A few</W>
      </>}
      {at === 3 && Array.from({ length: 250 }, (_, index) => { const col = index % 25, row = Math.floor(index / 25); const one = row === 4 && col === 12;
        return <circle key={index} cx={40 + col * 10} cy={106 + row * 8} r={one ? 4 : 2.4} fill={one ? GOLD : SOFT} />; })}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FhClues(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Often no signs; a blood test finds it", "Rare signs: tendon lumps, an eye ring", "A high result, or early heart trouble", "Early: under 55 in men, 65 in women", "Ask for a cholesterol check"];
  const lit = [[0], [1, 2], [0], [], [0]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Signs" title="The clues are usually in the family" label="Signs and family history" credit="Illustration: Rehyn. Signs are rare; a blood test is how FH is found."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A blood test, an eye with a pale ring and lumps on the knuckles, and a family's heart history">
      <g opacity={lit.includes(0) ? 1 : 0.4}><Tube x={60} y={58} lit /><W x={60} y={104} size={10}>Blood test</W></g>
      <g opacity={lit.includes(1) ? 1 : 0.4}><path d="M136 58 Q160 40 184 58 Q160 76 136 58 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="160" cy="58" r="10" fill={SOFT} stroke={GOLD} strokeWidth="2.5" /><circle cx="160" cy="58" r="4" fill={INK} /><W x={160} y={104} size={10}>Eye ring</W></g>
      <g opacity={lit.includes(2) ? 1 : 0.4}>{[236, 252, 268, 284].map(x => <g key={x}><circle cx={x} cy={62} r="7" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx={x} cy={54} r="3" fill={GOLD} /></g>)}<path d="M228 72 H292" stroke={INK} strokeWidth="2.5" strokeLinecap="round" /><W x={260} y={104} size={10}>Tendon lumps</W></g>
      {lit.map(index => <Ring key={index} x={60 + index * 100} y={58} r={30} still={still} />)}
      {at === 2 && <><Box x={160} y={132} w={196} text="A high cholesterol result" /><Box x={160} y={164} w={196} text="Early heart attack or stroke" /></>}
      {at === 3 && <><Person x={100} y={166} scale={0.8} /><Person x={220} y={166} scale={0.8} fill={SOFT} /><W x={100} y={186} size={10}>Men: under 55</W><W x={220} y={186} size={10}>Women: under 65</W></>}
      {at === 4 && <Box x={160} y={146} w={210} text="Ask your GP surgery for a test" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FhStones(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["First, a cholesterol blood test", "Simon Broome: definite or possible", "Blood or cheek swab, after counselling", "First results: around 2 or 3 months", "Earlier treatment, family tested too"];
  const xs = [36, 98, 160, 222, 284], ys = [152, 130, 118, 130, 152];
  const names = ["Blood test", "Criteria", "Gene test", "Results", "Family"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Diagnosis" title="From a blood test to a gene" label="Diagnosis and the genetic test" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five stepping stones from a blood test to testing the family">
      {xs.map((x, index) => <g key={x}>
        <ellipse cx={x} cy={ys[index]} rx="26" ry="11" fill={index <= at ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x} y={ys[index] - 20} size={10}>{names[index]}</W>
      </g>)}
      <circle cx={xs[at]} cy={ys[at]} r="6" fill={GOLD} />
      {at === 0 && <Tube x={160} y={50} lit />}
      {at === 1 && <><Box x={114} y={48} w={86} text="Definite" lit /><Box x={206} y={48} w={86} text="Possible" /></>}
      {at === 2 && <><Tube x={128} y={50} lit /><W x={160} y={54} size={11}>or</W><Swab x={192} y={52} /></>}
      {at === 3 && <><Clock x={124} y={48} r={20} hand={2} /><W x={154} y={53} size={11} anchor="start">2 to 3 months</W></>}
      {at === 4 && [130, 160, 190].map((x, index) => <Person key={x} x={x} y={74} scale={0.7} fill={index === 1 ? INK : SOFT} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FhArteries(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["LDL builds up in artery walls", "Untreated: risk up to 13 times higher", "Treatment greatly reduces the risk", "Not QRISK: a review once a year", "Chest pain spreading? Call 999"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Your heart" title="Earlier risk, and how treatment changes it" label="What it means for your heart" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An artery narrowed by cholesterol beside a clear one with treatment">
      {at < 4 && <>
        <g opacity={at === 2 || at === 3 ? 0.35 : 1}><circle cx="88" cy="88" r="46" fill={GOLD} stroke={INK} strokeWidth="3" /><circle cx="88" cy="76" r="27" fill={WHITE} /><W x={88} y={154} size={11}>Untreated</W></g>
        <g opacity={at === 2 ? 1 : 0.35}><circle cx="232" cy="88" r="46" fill={TINT} stroke={INK} strokeWidth="3" /><circle cx="232" cy="88" r="36" fill={WHITE} /><W x={232} y={154} size={11}>Treated</W></g>
        {at === 1 && <W x={88} y={174} size={10}>Up to 13 times the risk</W>}
        {at === 2 && <Pill x={286} y={28} />}
        {at === 3 && <><Cal x={160} y={88} w={34} lit /><W x={160} y={26} size={11}>A review at least once a year</W></>}
      </>}
      {at === 4 && <>
        <Person x={92} y={154} scale={1.6} fill={SOFT} />
        <circle cx="92" cy="138" r="7" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />
        <rect x="196" y="40" width="50" height="84" rx="9" fill={INK} /><W x={221} y={90} size={18} fill={WHITE}>999</W>
        <W x={221} y={150} size={10.5}>Do not drive</W><W x={221} y={165} size={10.5}>yourself to A&amp;E</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FhStatinPull(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Less made, more taken from the blood", "Aim: LDL down by at least half", "Same time daily; checks at 3 months", "Side effects? Talk to a doctor", "Keep taking them; ask before stopping"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Statins" title="The daily tablet that does the heavy lifting" label="Statins and FH" credit="Illustration: Rehyn. Never stop a medicine without talking to your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A liver making less cholesterol and taking more out of the blood">
      <rect x="14" y="20" width="166" height="44" fill={TINT} /><path d="M14 20 H180" stroke={INK} strokeWidth="3" />
      {[34, 70, 106, 142, 166].map(x => <circle key={x} cx={x} cy={42} r="7" fill={SOFT} stroke={INK} strokeWidth="1.5" />)}
      {[60, 120].map(x => <g key={x}><path d={`M${x} 64 V86`} stroke={GOLD} strokeWidth="3" strokeDasharray="4 5" className={still ? undefined : "lib-types-flow"} /><path d={`M${x - 6} 80 L${x} 87 L${x + 6} 80`} fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /></g>)}
      <Liver x={26} y={100} s={1.15} />
      <W x={86} y={132} size={11}>Liver</W>
      {at === 0 && <Gauge x={250} y={128} r={44} value={0.2} label="Made in the liver" />}
      {at === 1 && <><W x={250} y={42} size={10.5}>At least half</W><rect x="216" y="60" width="30" height="100" rx="4" fill={SOFT} /><rect x="262" y="110" width="30" height="50" rx="4" fill={INK} /><W x={231} y={178} size={10}>Before</W><W x={277} y={178} size={10}>Aim</W></>}
      {at === 2 && <><Clock x={250} y={58} r={22} hand={1} /><W x={250} y={98} size={10.5}>Same time</W><Tube x={250} y={136} lit /><W x={250} y={180} size={10}>3 months</W></>}
      {at === 3 && <><Box x={250} y={60} w={120} text="Talk to a doctor" lit /><Person x={226} y={150} /><Person x={282} y={150} fill={SOFT} /></>}
      {at === 4 && <><Box x={250} y={60} w={120} text="Keep taking them" lit /><Box x={250} y={100} w={120} text="Planning a baby?" /><W x={250} y={132} size={10}>Tell your doctor</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FhLadder(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["When statins are not enough", "Ezetimibe, often with a statin", "Injections every 2 to 4 weeks", "Bempedoic acid, resins or fibrates", "Apheresis filters LDL from the blood"];
  const rungs = ["Statin", "Ezetimibe", "Other tablets", "Injections", "Apheresis"];
  const current = [0, 1, 3, 2, 4][at];
  const y = (index: number) => 168 - index * 36;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Other treatments" title="When statins need a partner" label="Other treatments" credit="Illustration: Rehyn. Your specialist will say which treatment suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ladder of treatments from a statin to LDL apheresis">
      <path d="M44 12 V184 M92 12 V184" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {rungs.map((rung, index) => <g key={rung}><path d={`M44 ${y(index)} H92`} stroke={INK} strokeWidth="4" /><Box x={180} y={y(index)} w={124} text={rung} lit={index === current} /></g>)}
      <circle cx="68" cy={y(current) - 10} r="7" fill={GOLD} />
      {at === 1 && <Pill x={278} y={y(1)} />}
      {at === 2 && <Pen x={252} y={y(3)} w={44} lit />}
      {at === 3 && <Pill x={278} y={y(2)} rotate={-20} />}
      {at === 4 && <><rect x="252" y="8" width="50" height="34" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M258 26 q6 -8 12 0 t12 0 t12 0" fill="none" stroke={GOLD} strokeWidth="2.5" /><path d="M262 42 C262 60 292 60 292 42" fill="none" stroke={INK} strokeWidth="3" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FhWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Food and activity alongside medicine", "Fewer eggs: 3 or 4 a week", "Oils, nuts, oily fish and oats help", "150 minutes of activity a week", "Stop smoking; keep to 14 units a week"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Food and activity" title="Food and movement, alongside the tablets" label="Food, activity and not smoking" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week planner with medicine, eggs and activity, and foods that help">
      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => { const x = 22 + index * 40; return <g key={index}>
        <rect x={x} y="24" width="34" height="72" rx="7" fill={WHITE} stroke={INK} strokeWidth="2" />
        <W x={x + 17} y={40} size={10}>{day}</W>
        {at === 0 && <rect x={x + 7} y="66" width="20" height="10" rx="5" fill={INK} />}
        {at === 1 && index % 2 === 0 && <ellipse cx={x + 17} cy={70} rx="8" ry="11" fill={TINT} stroke={INK} strokeWidth="2" />}
        {at === 3 && index < 5 && <rect x={x + 6} y="52" width="22" height="36" rx="4" fill={INK} />}
      </g>; })}
      {at === 0 && <><Box x={100} y={146} w={110} text="Medicine" lit /><Box x={226} y={146} w={130} text="Food and activity" /></>}
      {at === 1 && <><W x={160} y={126} size={10.5}>Cut down on</W>{["Red meat", "Full-fat dairy", "Fried food"].map((label, index) => <Box key={label} x={58 + index * 102} y={154} w={94} text={label} size={10} />)}</>}
      {at === 2 && ["Oils", "Nuts", "Oily fish", "Oats"].map((label, index) => <Box key={label} x={46 + index * 76} y={146} w={68} text={label} size={10} lit />)}
      {at === 3 && ["Brisk walk", "Swimming", "Cycling"].map((label, index) => <Box key={label} x={58 + index * 102} y={146} w={94} text={label} size={10} />)}
      {at === 4 && <><Cig x={110} y={146} /><Cross x={106} y={146} s={14} /><Glass x={210} y={146} /><W x={232} y={150} size={10.5} anchor="start">14 units</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FhClinic(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Specialist help for blood fats", "Side effects, or levels not low enough", "Lipid doctor, nurse, dietitian", "A review at least once a year", "Your GP can refer you"];
  const team = [{ x: 70, t: "Lipid doctor" }, { x: 128, t: "Nurse" }, { x: 192, t: "Dietitian" }, { x: 250, t: "Counsellor" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The lipid clinic" title="Meet your lipid clinic team" label="The lipid clinic" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A lipid clinic team round a table">
      {team.map(person => <g key={person.t}><Person x={person.x} y={130} scale={0.9} fill={at === 2 ? INK : SOFT} />{at === 2 && <W x={person.x} y={84} size={9.5}>{person.t}</W>}</g>)}
      <ellipse cx="160" cy="150" rx="104" ry="26" fill={WHITE} stroke={INK} strokeWidth="3" />
      <W x={160} y={155} size={11}>{at === 3 ? "Once a year" : "Lipid clinic"}</W>
      {at === 1 && <><Box x={96} y={40} w={120} text="Side effects" /><Box x={224} y={40} w={120} text="Not low enough" /></>}
      {at === 3 && <Cal x={160} y={46} w={40} lit />}
      {at === 4 && <><Envelope x={44} y={40} /><W x={44} y={68} size={10}>GP letter</W><Arrow d="M68 40 H142" head="M134 34 L142 40 L134 46" /><Box x={196} y={40} w={92} text="Clinic" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FhCascade(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Parents, siblings and children first", "Cascade testing: easier once found", "Feeling well does not rule it out", "A letter you can pass on", "Nurses can help explain it"];
  const middle = [80, 160, 240], bottom = [40, 100, 160, 220, 280];
  const midFill = at === 0 || at === 1 || at === 2 ? INK : SOFT;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Relatives" title="One diagnosis, a whole family protected" label="Testing your relatives" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A family tree lighting up from one person outwards">
      <path d="M160 70 V78 M80 78 H240 M80 78 V84 M160 78 V84 M240 78 V84 M80 130 V140 M40 140 H100 M40 140 V148 M100 140 V148 M160 130 V148 M240 130 V140 M220 140 H280 M220 140 V148 M280 140 V148" fill="none" stroke={LINE} strokeWidth="3" />
      <Person x={160} y={58} scale={0.8} />
      {middle.map(x => <Person key={x} x={x} y={118} scale={0.8} fill={midFill} />)}
      {bottom.map((x, index) => <Person key={x} x={x} y={176} scale={0.6} fill={at === 1 || (at === 2 && index !== 4) ? INK : at === 2 ? LINE : SOFT} />)}
      {at === 2 && <W x={302} y={162} size={13}>?</W>}
      {at === 3 && <><Envelope x={214} y={40} /><Arrow d="M182 44 H194" head="M188 38 L195 44 L188 50" /></>}
      {at === 4 && <Phone x={252} y={40} lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FhChildLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A 1 in 2 chance; test before age 10", "A pilot: heel prick at age 1 to 2", "Statins offered by the age of 10", "Healthy habits together, as a family", "No need for guilt; they can live well"];
  const kids = [{ x: 69, s: 0.45 }, { x: 160, s: 0.65 }, { x: 278, s: 0.85 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Children" title="Found early, growing up healthy" label="Children and FH" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A child growing up along a timeline from birth to age 10">
      <g opacity={at === 3 ? 0.35 : 1}>
        <path d="M30 150 H290" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
        {[{ x: 30, t: "Birth" }, { x: 69, t: "1 to 2" }, { x: 278, t: "Age 10" }].map(tick => <g key={tick.t}><circle cx={tick.x} cy={150} r="5" fill={(tick.x === 278 && (at === 0 || at === 2)) || (tick.x === 69 && at === 1) ? GOLD : INK} /><W x={tick.x} y={172} size={10}>{tick.t}</W></g>)}
      </g>
      {at !== 3 && kids.map((kid, index) => <Person key={kid.x} x={kid.x} y={138} scale={kid.s} fill={at === 4 || (at === 2 && index === 2) || (at === 1 && index === 0) ? INK : SOFT} />)}
      {at === 0 && <><W x={70} y={56} size={18}>1 in 2</W><W x={70} y={74} size={10.5}>chance</W></>}
      {at === 1 && <><Drop x={69} y={96} /><W x={69} y={70} size={10}>Heel prick</W></>}
      {at === 2 && <Pill x={278} y={84} />}
      {at === 3 && <><Person x={120} y={120} scale={1.1} /><Person x={164} y={124} scale={0.7} fill={SOFT} /><Person x={206} y={120} scale={1.05} /></>}
      {at === 4 && <HeartShape x={160} y={70} size={70} fill={TINT} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FhPlanStrip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["FH should not affect getting pregnant", "Stop statins 3 months before trying", "Stop them and contact your GP at once", "Lipid consultant care in pregnancy", "Talk about your baby and FH"];
  const fill = (index: number) => at === 1 && index < 3 ? SOFT : (at === 3 || at === 4) && index >= 3 ? TINT : WHITE;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pregnancy" title="Planning a pregnancy with FH" label="Pregnancy and FH" credit="Illustration: Rehyn. Plan any change to your medicines with your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A strip of months with medicines stopped before trying for a baby">
      {Array.from({ length: 12 }, (_, index) => <rect key={index} x={14 + index * 25} y="66" width="22" height="30" rx="5" fill={fill(index)} stroke={INK} strokeWidth="2" />)}
      <W x={14} y={52} size={10.5} anchor="start">{at === 1 ? "Statins stopped: 3 months" : "Months"}</W>
      {at === 1 && <><path d="M89 60 V102" stroke={GOLD} strokeWidth="3" /><W x={92} y={120} size={10.5} anchor="start">Then start trying</W></>}
      {at === 0 && <Box x={160} y={146} w={200} text="Talk to your doctor first" lit />}
      {at === 2 && <><Pill x={34} y={146} /><Cross x={34} y={146} s={11} /><Box x={172} y={146} w={210} text="Stop and contact your GP" lit /></>}
      {at === 3 && <><Box x={96} y={146} w={130} text="Lipid consultant" lit /><Box x={236} y={146} w={110} text="Obstetrician" /></>}
      {at === 4 && <Box x={160} y={146} w={190} text="When to test your child" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FhLivingShelf(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Treated FH: a normal, healthy life", "A statin every day, same time", "A full review at least once a year", "3 months of medicine per prescription", "Heart Helpline: weekdays 9am to 5pm"];
  const xs = [44, 102, 160, 218, 276];
  const names = ["Healthy life", "Daily", "Yearly", "Prescription", "Helpline"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Living well" title="Managing FH, not being managed by it" label="Living well with FH" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A shelf of everyday things for living with FH">
      <path d="M14 116 H306" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
      <g opacity={at === 0 ? 1 : 0.4}><HeartShape x={44} y={84} size={44} fill={TINT} /></g>
      <g opacity={at === 1 ? 1 : 0.4}><rect x="80" y="74" width="44" height="20" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" />{Array.from({ length: 6 }, (_, index) => <path key={index} d={`M${86.3 + index * 6.3} 74 V94`} stroke={INK} strokeWidth="1" />)}</g>
      <g opacity={at === 2 ? 1 : 0.4}><Cal x={160} y={84} w={38} lit /></g>
      <g opacity={at === 3 ? 1 : 0.4}><rect x="204" y="64" width="28" height="40" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />{[0, 1, 2].map(index => <path key={index} d={`M210 ${76 + index * 8} H226`} stroke={SOFT} strokeWidth="2.5" />)}</g>
      <g opacity={at === 4 ? 1 : 0.4}><Phone x={276} y={84} lit /></g>
      <Ring x={xs[at]} y={84} r={28} still={still} />
      {names.map((name, index) => <W key={name} x={xs[index]} y={138} size={10} fill={index === at ? INK : TEXT}>{name}</W>)}
      {at === 3 && <W x={160} y={170} size={10.5}>Once on a stable dose</W>}
      {at === 4 && <W x={160} y={172} size={13}>0808 802 1234</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Obesity ===============================================================================================

function ObTapeRatio(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["BMI: weight against height", "30 or more is obese for most adults", "BMI cannot tell muscle from fat", "Waist under half your height", "A reasonable target: talk it through"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it means" title="A number, a tape measure, a fuller picture" label="What obesity means, and BMI" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tape measure, BMI ranges and the waist to height ratio">
      <rect x="14" y="10" width="292" height="14" rx="3" fill={TINT} stroke={INK} strokeWidth="1.5" />
      {Array.from({ length: 29 }, (_, index) => <path key={index} d={`M${24 + index * 10} 10 v${index % 5 === 0 ? 8 : 4}`} stroke={INK} strokeWidth="1.2" />)}
      {at === 0 && <>
        <W x={160} y={62} size={20} serif>BMI</W>
        <W x={160} y={90} size={11.5}>weight in kg</W><path d="M96 98 H224" stroke={INK} strokeWidth="2" /><W x={160} y={116} size={11}>height in metres, squared</W>
        {["Underweight", "Healthy", "Overweight", "Obese"].map((label, index) => <Box key={label} x={46 + index * 76} y={156} w={70} text={label} size={9.5} />)}
      </>}
      {at === 1 && <>
        <rect x="30" y="80" width="120" height="22" fill={TINT} stroke={INK} strokeWidth="1.5" /><rect x="150" y="80" width="70" height="22" fill={SOFT} stroke={INK} strokeWidth="1.5" /><rect x="220" y="80" width="70" height="22" fill={INK} stroke={INK} strokeWidth="1.5" />
        <W x={150} y={70} size={11}>25</W><W x={220} y={70} size={11}>30</W>
        <W x={185} y={122} size={10}>Overweight</W><W x={255} y={122} size={10}>Obese</W>
        <W x={160} y={164} size={10}>For some backgrounds: 23 and 27.5</W>
      </>}
      {at === 2 && <>
        <rect x="66" y="58" width="74" height="74" rx="8" fill={INK} /><W x={103} y={99} size={11} fill={WHITE}>Muscle</W>
        <rect x="180" y="58" width="74" height="74" rx="8" fill={SOFT} /><W x={217} y={99} size={11}>Fat</W>
        <W x={160} y={102} size={20}>?</W>
      </>}
      {at === 3 && <>
        <W x={110} y={40} size={10}>Height</W><rect x="99" y="46" width="22" height="130" rx="4" fill={SOFT} />
        <W x={154} y={104} size={10}>Half</W><rect x="143" y="111" width="22" height="65" rx="4" fill={INK} />
        <ellipse cx="240" cy="124" rx="40" ry="13" fill="none" stroke={GOLD} strokeWidth="4" /><W x={240} y={100} size={10.5}>Waist</W>
      </>}
      {at === 4 && <>
        <path d="M40 172 C120 172 150 112 190 106 S250 72 270 58" fill="none" stroke={LINE} strokeWidth="4" strokeDasharray="6 8" />
        <Person x={40} y={176} scale={0.7} />
        <path d="M190 106 V74" stroke={INK} strokeWidth="2.5" /><path d="M190 74 h26 l-6 7 l6 7 h-26 Z" fill={GOLD} /><W x={202} y={128} size={10.5}>Your target</W>
        <g opacity={0.45}><path d="M270 58 V30" stroke={INK} strokeWidth="2.5" /><path d="M270 30 h26 l-6 7 l6 7 h-26 Z" fill={SOFT} /><W x={268} y={78} size={10}>Healthy BMI</W></g>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ObReasons(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Taking in more energy than is used", "Not a lack of willpower", "Some conditions and medicines", "Genes, age and busy lives", "Short sleep and stress play a part"];
  const tiles = [{ x: 160, y: 26, t: "Energy" }, { x: 244, y: 54, t: "Family" }, { x: 268, y: 100, t: "Surroundings" }, { x: 244, y: 146, t: "Conditions" }, { x: 160, y: 174, t: "Medicines" }, { x: 76, y: 146, t: "Genes, age" }, { x: 52, y: 100, t: "Sleep" }, { x: 76, y: 54, t: "Stress" }];
  const lit = [[0], [1, 2], [3, 4], [5], [6, 7]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The causes" title="Many reasons, not willpower" label="Why it happens" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Many causes of weight gain in a ring around the words many reasons">
      {tiles.map(tile => <path key={tile.t} d={`M160 100 L${tile.x} ${tile.y}`} stroke={LINE} strokeWidth="2" />)}
      <circle cx="160" cy="100" r="36" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
      <W x={160} y={97} size={12} fill={at === 1 ? WHITE : TEXT}>{at === 1 ? "Not" : "Many"}</W>
      <W x={160} y={112} size={12} fill={at === 1 ? WHITE : TEXT}>{at === 1 ? "willpower" : "reasons"}</W>
      {tiles.map((tile, index) => <Box key={tile.t} x={tile.x} y={tile.y} w={84} text={tile.t} size={10} lit={lit.includes(index)} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ObHidden(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Raises the risk of many conditions", "Fatty build-up in the arteries", "Hidden fat around organs matters most", "Around 90% with new type 2 diabetes", "Day to day too; 5 to 10% loss helps"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your health" title="The fat you cannot see" label="How it affects health" credit="Illustration: Rehyn. A simple diagram, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A simple diagram of fat under the skin and fat around the organs">
      <ellipse cx="84" cy="100" rx="60" ry="78" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <ellipse cx="84" cy="100" rx="52" ry="70" fill="none" stroke={SOFT} strokeWidth="8" opacity={at === 2 ? 0.5 : 0.8} />
      <ellipse cx="86" cy="100" rx="34" ry="48" fill={SOFT} opacity={at === 2 || at === 3 ? 0.75 : 0.2} />
      <HeartShape x={72} y={74} size={32} />
      <Liver x={64} y={106} s={0.45} />
      {at === 0 && ["Type 2 diabetes", "Heart disease", "Stroke", "Some cancers"].map((label, index) => <Box key={label} x={236} y={46 + index * 34} w={136} text={label} />)}
      {at === 1 && <><circle cx="236" cy="92" r="44" fill={GOLD} stroke={INK} strokeWidth="3" /><circle cx="236" cy="80" r="26" fill={WHITE} /><W x={236} y={160} size={10.5}>Artery</W></>}
      {at === 2 && <><W x={236} y={58} size={10.5}>Bigger risk</W><Box x={236} y={80} w={136} text="Around organs" lit /><Box x={236} y={116} w={136} text="Under the skin" /></>}
      {at === 3 && <>{Array.from({ length: 10 }, (_, index) => <circle key={index} cx={196 + (index % 5) * 20} cy={64 + Math.floor(index / 5) * 24} r="7" fill={index < 9 ? INK : WHITE} stroke={INK} strokeWidth="2" />)}<W x={236} y={130} size={13}>Around 90%</W><W x={236} y={148} size={10}>newly diagnosed</W></>}
      {at === 4 && ["Breathless", "Tired", "Joint pain", "Low mood"].map((label, index) => <Box key={label} x={236} y={46 + index * 34} w={120} text={label} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ObSlice(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Losing 5 to 10% can improve health", "A first goal: 10% of your weight", "More energy, better mood and sleep", "Aim for 1 to 2lbs a week"];
  const benefits = ["Blood pressure", "Cholesterol", "Energy", "Mood and sleep"];
  const lit = [[0, 1], [], [2, 3], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Small changes" title="Small losses, real gains" label="Why a small loss makes a difference" credit={notMeasured}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bar for weight today with a small slice marked off, and what it can improve">
      <W x={30} y={54} size={10.5} anchor="start">Your weight today</W>
      <rect x="30" y="64" width="260" height="34" rx="6" fill={TINT} stroke={INK} strokeWidth="2" />
      <rect x="264" y="64" width="26" height="34" fill={at <= 1 ? INK : SOFT} />
      {at === 0 && <path d="M277 64 V98" stroke={WHITE} strokeWidth="1.5" strokeDasharray="3 3" />}
      <W x={277} y={54} size={10.5}>{["5 to 10%", "10%", "", ""][at]}</W>
      {at !== 3 && benefits.map((label, index) => <Box key={label} x={index % 2 ? 230 : 90} y={132 + Math.floor(index / 2) * 32} w={130} text={label} lit={lit.includes(index)} />)}
      {at === 3 && <>
        <W x={160} y={128} size={11}>Half a kilo to 1kg a week</W>
        {Array.from({ length: 8 }, (_, index) => <ellipse key={index} cx={54 + index * 30} cy={index % 2 ? 150 : 162} rx="7" ry="10" fill={index < 3 ? INK : SOFT} />)}
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ObSignpost(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Coaching, groups and healthy eating", "You may be able to refer yourself", "Your GP can refer you for more help", "Free 12-week online programme", "Commercial plan? Ask questions first"];
  const arms = [{ right: true, y: 40, t: "Refer yourself" }, { right: false, y: 76, t: "Through your GP" }, { right: true, y: 112, t: "Online, 12 weeks" }, { right: false, y: 148, t: "Commercial plan" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Programmes" title="Support that fits your life" label="Weight management programmes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A signpost pointing to different kinds of weight management support">
      <rect x="154" y="14" width="12" height="172" rx="3" fill={INK} />
      {arms.map((arm, index) => { const lit = at - 1 === index, y = arm.y;
        const d = arm.right ? `M166 ${y - 13} H284 L298 ${y} L284 ${y + 13} H166 Z` : `M154 ${y - 13} H36 L22 ${y} L36 ${y + 13} H154 Z`;
        return <g key={arm.t} opacity={at === 0 ? 0.5 : 1}><path d={d} fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><W x={arm.right ? 230 : 90} y={y + 4} size={10.5} fill={lit ? WHITE : TEXT}>{arm.t}</W></g>; })}
      {at === 0 && [40, 64, 88, 232, 256, 280].map((x, index) => <Person key={x} x={x} y={184} scale={0.55} fill={index % 2 ? SOFT : INK} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ObPlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The best plan is one you can keep", "About 600 fewer calories a day", "Half the plate vegetables", "Smaller plates; juice 150ml a day", "Do not skip meals or whole food groups"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Food" title="A plate you can keep coming back to" label="Eating changes that last" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate with half vegetables, a quarter protein and a quarter starchy food">
      <circle cx="118" cy="100" r="72" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M118 38 A62 62 0 0 0 118 162 Z" fill={at === 2 ? INK : TINT} stroke={INK} strokeWidth="2" />
      <path d="M118 100 V38 A62 62 0 0 1 180 100 Z" fill={WHITE} stroke={INK} strokeWidth="2" />
      <path d="M118 100 H180 A62 62 0 0 1 118 162 Z" fill={WHITE} stroke={INK} strokeWidth="2" />
      <W x={88} y={104} size={10} fill={at === 2 ? WHITE : TEXT}>Vegetables</W><W x={147} y={82} size={10}>Protein</W><W x={147} y={128} size={10}>Starch</W>
      {at === 3 && <circle cx="118" cy="100" r="54" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 6" />}
      {at === 0 && ["Less fat", "Fewer carbs", "Count calories"].map((label, index) => <Box key={label} x={256} y={60 + index * 34} w={108} text={label} size={10} />)}
      {at === 1 && <><W x={256} y={32} size={13}>600</W><rect x="240" y="42" width="32" height="120" rx="4" fill={INK} />{[1, 2, 3].map(index => <path key={index} d={`M240 ${42 + index * 30} H272`} stroke={WHITE} strokeWidth="2" />)}<W x={256} y={180} size={10.5}>a day</W></>}
      {at === 3 && <><path d="M240 84 H272 L268 144 H244 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M242 112 H270 L268 144 H244 Z" fill={SOFT} /><W x={256} y={164} size={11}>150ml</W></>}
      {at === 4 && <><Box x={256} y={80} w={112} text="Regular meals" size={10} lit /><Box x={256} y={114} w={112} text="All food groups" size={10} lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ObPens(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Only if prescribed for you", "Injections reduce appetite", "Orlistat: less fat absorbed", "Serious side effects? Call NHS 111", "Alongside diet and activity"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="How the weight loss medicines work" label="Weight loss medicines" credit="Illustration: Rehyn. Only take a medicine prescribed for you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three injection pens and an orlistat capsule">
      {[{ y: 50, t: "Weekly" }, { y: 84, t: "Weekly" }, { y: 118, t: "Daily" }].map((pen, index) => <g key={index} opacity={at === 2 ? 0.4 : 1}><Pen x={26} y={pen.y} lit={at === 1} /><W x={150} y={pen.y + 4} size={10.5} anchor="start">{pen.t}</W></g>)}
      <g opacity={at === 1 ? 0.4 : 1}><Pill x={60} y={160} /><W x={90} y={164} size={10.5} anchor="start">3 times a day</W></g>
      {at === 0 && <><rect x="236" y="38" width="44" height="58" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[0, 1, 2].map(index => <path key={index} d={`M244 ${52 + index * 10} H272`} stroke={SOFT} strokeWidth="2.5" />)}<path d="M262 86 l6 6 l12 -14" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /><W x={258} y={116} size={10.5}>Prescribed</W><W x={258} y={130} size={10.5}>for you</W></>}
      {at === 1 && <><W x={258} y={80} size={12}>Less appetite</W><W x={258} y={100} size={10.5}>Fuller for longer</W></>}
      {at === 2 && <><W x={258} y={150} size={12}>Less fat</W><W x={258} y={166} size={12}>absorbed</W></>}
      {at === 3 && <Box x={254} y={84} w={112} text="Serious? Call 111" size={10} lit />}
      {at === 4 && <><Box x={258} y={56} w={104} text="Fewer calories" size={10} /><Box x={258} y={90} w={104} text="Activity" size={10} /><W x={258} y={124} size={10}>Do not stop</W><W x={258} y={138} size={10}>suddenly</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ObStomachs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A smaller stomach, fuller sooner", "BMI 40, or 35 with a condition", "Bypass, sleeve, band or balloon", "Fluids first; balanced food by week 8", "Severe pain or vomiting blood: 999"];
  const xs = [50, 123, 196, 269];
  const names = ["Bypass", "Sleeve", "Band", "Balloon"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Surgery" title="A smaller stomach, a lifelong plan" label="Weight loss surgery" credit="Illustration: Rehyn. Simple outlines, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four simple stomach outlines: a bypass, a sleeve, a band and a balloon">
      <g opacity={at === 0 || at === 2 ? 1 : 0.45}>
        <g transform={`translate(${xs[0]} 80)`}><path d={STOMACH} fill="none" stroke={SOFT} strokeWidth="2.5" strokeDasharray="5 4" /><ellipse cx="0" cy="-20" rx="9" ry="7" fill={INK} /></g>
        <g transform={`translate(${xs[1]} 80)`}><path d="M-4 -38 V-24 C-12 -10 -12 12 -6 24 C0 32 10 28 8 18 C4 6 6 -10 4 -24 V-38" fill={INK} stroke={INK} strokeWidth="2.5" /></g>
        <g transform={`translate(${xs[2]} 80)`}><path d={STOMACH} fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M-22 -16 H16" stroke={GOLD} strokeWidth="5" strokeLinecap="round" /></g>
        <g transform={`translate(${xs[3]} 80)`}><path d={STOMACH} fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="2" cy="10" r="12" fill={SOFT} /></g>
        {names.map((name, index) => <W key={name} x={xs[index]} y={136} size={10.5}>{name}</W>)}
      </g>
      {at === 1 && <><Box x={84} y={168} w={140} text="BMI 40 or more" lit /><Box x={236} y={168} w={156} text="35 to 40 and a condition" size={10} /></>}
      {at === 3 && <><path d="M50 160 H269" stroke={LINE} strokeWidth="4" />{["Fluids", "Runny", "Soft", "Balanced"].map((label, index) => <g key={label}><circle cx={xs[index]} cy={160} r="6" fill={INK} /><W x={xs[index]} y={182} size={10}>{label}</W></g>)}</>}
      {at === 4 && <Box x={160} y={168} w={250} text="999: severe pain, vomiting blood" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ObRoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Moving more helps keep weight off", "150 minutes a week; talk, not sing", "Start with 5 or 10 minutes", "There is an activity for everyone", "Missed a day? Just start again"];
  const stops = [{ x: 80, y: 160, t: "5 to 10 min", lx: 80, ly: 142 }, { x: 150, y: 130, t: "15 min walk", lx: 150, ly: 112 }, { x: 220, y: 100, t: "150 a week", lx: 220, ly: 82 }, { x: 296, y: 66, t: "Keep going", lx: 278, ly: 44 }];
  const lit = [[0, 1, 2, 3], [2], [0, 1], [], [3]][at];
  const walker = [3, 2, 0, -1, 0][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Activity" title="Start where you are" label="Getting more active" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path rising in small steps from a few minutes to 150 minutes a week">
      <path d="M20 178 L80 160 L150 130 L220 100 L296 66" fill="none" stroke={LINE} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 178 L80 160 L150 130 L220 100 L296 66" fill="none" stroke={WHITE} strokeWidth="2" strokeDasharray="6 8" />
      {stops.map((stop, index) => <g key={stop.t} opacity={at === 3 ? 0.4 : 1}><circle cx={stop.x} cy={stop.y} r="9" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={stop.lx} y={stop.ly} size={10}>{stop.t}</W></g>)}
      {walker >= 0 && <circle cx={stops[walker].x} cy={stops[walker].y} r="4" fill={GOLD} />}
      {at === 1 && <Box x={84} y={40} w={136} text="Talk, but not sing" lit />}
      {at === 3 && ["Walking", "Swimming", "Gardening", "Wheelchair"].map((label, index) => <Box key={label} x={index % 2 ? 150 : 60} y={30 + Math.floor(index / 2) * 32} w={84} text={label} size={10} lit />)}
      {at === 4 && <Arrow d="M110 176 C100 190 84 188 80 174" head="M74 180 L80 173 L86 180" />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ObChairs(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Stigma harms health and care", "Not a personal failing; not alone", "Respectful, person-centred care", "Ask your GP; take a food diary"];
  const words = ["", "You are not alone", "How can I help?", "I'd like some help"][at];
  const fromLeft = at === 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Talking about weight" title="Care without blame" label="Weight stigma and your doctor" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people sitting and talking across a desk">
      <path d="M40 104 V178 M52 148 H104 V178 M280 104 V178 M268 148 H216 V178" fill="none" stroke={SOFT} strokeWidth="4" strokeLinecap="round" />
      <Person x={78} y={144} scale={1.3} fill={SOFT} /><Person x={242} y={144} scale={1.3} />
      <path d="M128 150 H192 M136 150 V178 M184 150 V178" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <rect x="146" y="134" width="28" height="14" rx="2" fill={at === 3 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
      {at === 0 && <><Box x={160} y={52} w={96} text="Blame" /><path d="M118 52 H202" stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" /></>}
      {at > 0 && <g>
        <rect x="90" y="36" width="140" height="32" rx="15" fill={WHITE} stroke={INK} strokeWidth="2" />
        <path d={fromLeft ? "M112 67 l-10 14 l22 -14" : "M208 67 l10 14 l-22 -14"} fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <W x={160} y={56} size={11}>{words}</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ObHungers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Eating with feelings is human", "Stress can change how we eat", "Stomach hunger or heart hunger?", "Binge eating? See a GP soon", "Urgent? 111, Samaritans 116 123, 999"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood and eating" title="Hungry, or something else?" label="Mood, eating and stress" credit="Illustration: Rehyn. In a crisis, call 999 or go to A&E."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A stomach and a heart, for stomach hunger and heart hunger">
      {at < 4 && <g opacity={at === 3 ? 0.3 : 1}>
        <g transform="translate(90 86) scale(1.3)"><path d={STOMACH} fill={TINT} stroke={INK} strokeWidth="2" /></g>
        <HeartShape x={230} y={84} size={80} fill={TINT} />
        <W x={90} y={150} size={10.5}>Stomach hunger</W><W x={230} y={150} size={10.5}>Heart hunger</W>
      </g>}
      {at === 1 && <g fill={SOFT}><circle cx="148" cy="38" r="12" /><circle cx="162" cy="30" r="15" /><circle cx="178" cy="38" r="12" /><rect x="148" y="34" width="30" height="16" /><W x={163} y={45} size={10}>Stress</W></g>}
      {at === 2 && <><W x={160} y={92} size={22}>?</W><rect x="134" y="164" width="52" height="22" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M160 164 V186 M140 172 H154 M166 172 H180 M140 179 H154 M166 179 H180" stroke={SOFT} strokeWidth="1.8" /></>}
      {at === 3 && <Box x={160} y={100} w={210} text="See a GP as soon as you can" lit />}
      {at === 4 && <><Box x={160} y={52} w={236} text="111: the mental health option" /><Box x={160} y={88} w={236} text="Samaritans: 116 123" /><Box x={160} y={124} w={236} text="Not safe? 999 or A&E now" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ObSteady(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Holding steady through holidays counts", "Active 60 to 90 minutes a day", "Habits you can keep for the long run", "Keep an eye on your waist and weight", "A few pounds back? Do not panic"];
  const line = at === 4 ? "M30 48 C70 52 100 96 140 104 S200 108 230 108 C246 108 252 96 262 96 C272 96 278 106 290 108" : "M30 48 C70 52 100 96 140 104 S220 108 290 108";
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Keeping it off" title="Holding steady is a win" label="Keeping weight off" credit={notMeasured}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A line that falls and then holds steady through a holiday">
      <path d="M30 30 V150 H290" fill="none" stroke={LINE} strokeWidth="2.5" />
      <path d={line} fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <g opacity={at === 0 ? 1 : 0.4}><path d="M190 107 V76" stroke={INK} strokeWidth="2.5" /><path d="M190 76 h24 l-6 7 l6 7 h-24 Z" fill={GOLD} /><W x={190} y={68} size={10}>Holiday</W></g>
      {at === 0 && <W x={250} y={130} size={10.5}>Holding steady</W>}
      {at === 1 && <><Clock x={70} y={122} r={22} hand={3} /><W x={70} y={166} size={10}>60 to 90 min</W></>}
      {at === 2 && <Box x={220} y={150} w={160} text="A lifestyle, not a diet" lit />}
      {at === 3 && <><ellipse cx="220" cy="152" rx="36" ry="11" fill="none" stroke={GOLD} strokeWidth="4" /><W x={220} y={132} size={10.5}>Waist</W></>}
      {at === 4 && <Box x={190} y={160} w={200} text="Look at the cause; ask for support" size={10} lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function LipidPieceView({ piece, ...props }: { piece: LipidPiece } & PieceProps) {
  switch (piece) {
    case "chol-liver-parcels": return <CholParcels {...props} />;
    case "chol-results-slip": return <CholSlip {...props} />;
    case "chol-two-roads": return <CholRoads {...props} />;
    case "chol-risk-gauge": return <CholGauge {...props} />;
    case "chol-statin-dial": return <CholStatin {...props} />;
    case "chol-med-steps": return <CholSteps {...props} />;
    case "chol-swap-plate": return <CholPlate {...props} />;
    case "chol-five-habits": return <CholHabits {...props} />;
    case "chol-recheck-line": return <CholRecheck {...props} />;
    case "chol-traffic-label": return <CholLabel {...props} />;
    case "chol-myth-cards": return <CholMyths {...props} />;
    case "chol-family-tree": return <CholFamily {...props} />;
    case "fh-receptors": return <FhReceptors {...props} />;
    case "fh-clues": return <FhClues {...props} />;
    case "fh-stones": return <FhStones {...props} />;
    case "fh-arteries": return <FhArteries {...props} />;
    case "fh-statin-pull": return <FhStatinPull {...props} />;
    case "fh-ladder": return <FhLadder {...props} />;
    case "fh-week-board": return <FhWeek {...props} />;
    case "fh-clinic-table": return <FhClinic {...props} />;
    case "fh-cascade": return <FhCascade {...props} />;
    case "fh-child-line": return <FhChildLine {...props} />;
    case "fh-plan-strip": return <FhPlanStrip {...props} />;
    case "fh-living-shelf": return <FhLivingShelf {...props} />;
    case "ob-tape-ratio": return <ObTapeRatio {...props} />;
    case "ob-many-reasons": return <ObReasons {...props} />;
    case "ob-hidden-fat": return <ObHidden {...props} />;
    case "ob-small-slice": return <ObSlice {...props} />;
    case "ob-signpost": return <ObSignpost {...props} />;
    case "ob-plate": return <ObPlate {...props} />;
    case "ob-pens": return <ObPens {...props} />;
    case "ob-stomachs": return <ObStomachs {...props} />;
    case "ob-road": return <ObRoad {...props} />;
    case "ob-two-chairs": return <ObChairs {...props} />;
    case "ob-two-hungers": return <ObHungers {...props} />;
    case "ob-steady-line": return <ObSteady {...props} />;
    default: return null;
  }
}
