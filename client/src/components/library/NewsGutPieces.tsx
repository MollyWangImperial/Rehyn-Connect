import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { GUT_PIECES, type GutPiece } from "@/content/gut-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Tags } from "./NewsMindPieces";

// The Kidneys, liver & digestion pages' own pieces (content/gut-features.ts), drawn in the page's card colours
// (the --t-… variables), like the Mind & mood pieces. Each is steered by the card's sections; pictures show
// ideas, never anyone's own organs or results.

export const isGutPiece = (piece: NewsPiece): piece is GutPiece => (GUT_PIECES as readonly string[]).includes(piece);

// ==== Shapes ================================================================================================

/** A kidney bean centred near (x, y), its dip facing left; `flip` turns it to face right. */
const Kidney = ({ x, y, scale = 1, flip = false, fill = WHITE, stroke = INK }: { x: number; y: number; scale?: number; flip?: boolean; fill?: string; stroke?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`} d="M4 -30 C24 -30, 30 -12, 28 4 C26 22, 14 32, 0 30 C-12 28, -14 18, -8 10 C-4 4, -4 -4, -8 -10 C-14 -20, -10 -30, 4 -30 Z"
    fill={fill} stroke={stroke} strokeWidth={3 / scale} strokeLinejoin="round" />;

/** A liver outline centred on (x, y), about 190 x 118 at scale 1; children are drawn in the outline's own space (0 to 200 across). */
const Liver = ({ x, y, scale = 1, fill = WHITE, stroke = INK, children }: { x: number; y: number; scale?: number; fill?: string; stroke?: string; children?: ReactNode }) =>
  <g transform={`translate(${x} ${y}) scale(${scale}) translate(-100 -60)`}>
    <path d="M10 40 C20 10, 90 0, 170 8 C196 11, 204 30, 188 46 C160 74, 120 104, 80 112 C50 118, 22 104, 12 80 C6 66, 6 52, 10 40 Z" fill={fill} stroke={stroke} strokeWidth={4 / scale} strokeLinejoin="round" />
    {children}
  </g>;

/** The large bowel as a thick, rounded frame. */
const Bowel = ({ d, glow = false }: { d: string; glow?: boolean }) =>
  <g fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} stroke={INK} strokeWidth="20" /><path d={d} stroke={glow ? GOLD : TINT} strokeWidth="13" /></g>;

const Tick = ({ x, y, color = INK, size = 1 }: { x: number; y: number; color?: string; size?: number }) =>
  <path transform={`translate(${x} ${y}) scale(${size})`} d="M-7 0 L-2 6 L8 -6" fill="none" stroke={color} strokeWidth={3.5 / size} strokeLinecap="round" strokeLinejoin="round" />;
const Cross = ({ x, y, color = INK, size = 1 }: { x: number; y: number; color?: string; size?: number }) =>
  <path transform={`translate(${x} ${y}) scale(${size})`} d="M-6 -6 L6 6 M6 -6 L-6 6" fill="none" stroke={color} strokeWidth={3.5 / size} strokeLinecap="round" />;

/** A blood test tube. */
const Tube = ({ x, y, rotate = 18 }: { x: number; y: number; rotate?: number }) =>
  <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
    <rect x="-7" y="-22" width="14" height="44" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path d="M-5.5 0 H5.5 V14 A5.5 5.5 0 0 1 -5.5 14 Z" fill={INK} />
    <rect x="-9" y="-26" width="18" height="8" rx="2" fill={SOFT} />
  </g>;

/** A wine glass, about 24 wide and 40 tall. */
const WineGlass = ({ x, y, scale = 1, fill = INK }: { x: number; y: number; scale?: number; fill?: string }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={fill} strokeWidth={2.5 / scale} strokeLinecap="round" strokeLinejoin="round">
    <path d="M-11 -20 H11 C11 -6, 5 0, 0 0 C-5 0, -11 -6, -11 -20 Z" fill={WHITE} /><path d="M-9 -10 H9 C7 -4, 3 -2, 0 -2 C-3 -2, -7 -4, -9 -10 Z" fill={fill} stroke="none" />
    <path d="M0 0 V16 M-8 16 H8" />
  </g>;

/** A glass of water, `full` from 0 to 1. */
const Tumbler = ({ x, y, full = 0.6, scale = 1, fill = SOFT }: { x: number; y: number; full?: number; scale?: number; fill?: string }) => {
  const top = 17 - 32 * full;
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d={`M${-10.5 + 1.5 * (1 - full)} ${top} L-9 16 H9 L${10.5 - 1.5 * (1 - full)} ${top} Z`} fill={fill} />
    <path d="M-12 -17 L-9 17 H9 L12 -17" fill="none" stroke={INK} strokeWidth={2.5 / scale} strokeLinejoin="round" strokeLinecap="round" />
  </g>;
};

/** A plate seen from above. */
const Plate = ({ x, y, r = 20, stroke = INK }: { x: number; y: number; r?: number; stroke?: string }) =>
  <g><circle cx={x} cy={y} r={r} fill={WHITE} stroke={stroke} strokeWidth="2.5" /><circle cx={x} cy={y} r={r * 0.68} fill="none" stroke={LINE} strokeWidth="2" /></g>;

const SaltShaker = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}>
    <path d="M-12 18 V-6 C-12 -18, 12 -18, 12 -6 V18 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    {[[-4, -8], [4, -8], [0, -12]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="1.8" fill={INK} />)}
  </g>;

const polar = (cx: number, cy: number, r: number, deg: number) => [cx + r * Math.cos(deg * Math.PI / 180), cy + r * Math.sin(deg * Math.PI / 180)];
const sector = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const [x0, y0] = polar(cx, cy, r, a0), [x1, y1] = polar(cx, cy, r, a1);
  return `M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1} ${y1} Z`;
};

/** A labelled tile; filled when lit. */
const Tile = ({ x, y, width, label, lit, height = 28, size = 10.5 }: { x: number; y: number; width: number; label: string; lit: boolean; height?: number; size?: number }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
    <W x={x + width / 2} y={y + height / 2 + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{label}</W></g>;

// ==== Chronic kidney disease =================================================================================

function TwoBeans(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="What the kidneys do" title="Two small filters, many big jobs" label="What the kidneys do" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two kidneys either side of the spine, and their three main jobs">
      <path d="M40 30 C40 18, 140 18, 140 30 V170 C140 182, 40 182, 40 170 Z" fill={TINT} stroke={LINE} strokeWidth="3" />
      <path d="M90 32 V172" stroke={LINE} strokeWidth="7" strokeDasharray="9 5" />
      {[44, 58, 72].map(y => <path key={y} d={`M52 ${y + 9} C64 ${y + 1}, 78 ${y - 1}, 86 ${y} M94 ${y} C102 ${y - 1}, 116 ${y + 1}, 128 ${y + 9}`} stroke={LINE} strokeWidth="3" fill="none" strokeLinecap="round" />)}
      {at === 1 && <path d="M78 116 C84 130, 88 140, 90 152 M102 116 C96 130, 92 140, 90 152" stroke={INK} strokeWidth="2.5" fill="none" strokeDasharray="5 4" className={still ? undefined : "lib-types-flow"} />}
      {at === 1 && <ellipse cx="90" cy="160" rx="14" ry="9" fill={WHITE} stroke={INK} strokeWidth="2.5" />}
      <g opacity={at === 4 ? 0.5 : 1}><Kidney x={70} y={104} scale={0.8} flip /><Kidney x={110} y={104} scale={0.8} /></g>
      {at === 0 && [64, 116].map(cx => <ellipse key={cx} cx={cx} cy="104" rx="21" ry="31" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />)}
      <g opacity={at === 0 || at === 4 ? 0.55 : 1}><Tags x={168} y={48} labels={["Filter the blood", "Water and salts", "Make hormones"]} lit={index => index === at - 1} width={134} gap={36} /></g>
      <W x={160} y={206} size={11}>{["Two, just below the ribs, fist-sized", "About a million filters in each one", "Keeping water and salts in balance", "Renin, EPO and active vitamin D", "Many live long lives with CKD"][at]}</W>
    </svg>} />;
}

function EgfrScale(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const X = (v: number) => 20 + v * 280 / 120;
  const bands = [{ a: 0, b: 15, t: "5" }, { a: 15, b: 30, t: "4" }, { a: 30, b: 45, t: "3b" }, { a: 45, b: 60, t: "3a" }, { a: 60, b: 90, t: "2" }, { a: 90, b: 120, t: "1" }];
  const lit = (index: number) => at === 2 || (at === 4 && (index === 2 || index === 3));
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="eGFR" title="Your kidney number, decoded" label="eGFR and the stages" credit="Illustration: Rehyn. Stage bands as the NHS gives them; not a result."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A scale of kidney function from 0 to above 90, split into the five stages">
      {bands.map((band, index) => <g key={band.t}>
        <rect x={X(band.a)} y="92" width={X(band.b) - X(band.a)} height="34" fill={lit(index) ? (index % 2 ? INK : SOFT) : WHITE} stroke={INK} strokeWidth="2" />
        <W x={(X(band.a) + X(band.b)) / 2} y={114} size={11} fill={lit(index) ? WHITE : TEXT}>{band.t}</W>
      </g>)}
      {[15, 30, 45, 60, 90].map(v => <W key={v} x={X(v)} y={143} size={10}>{v}</W>)}
      <W x={160} y={164} size={10}>eGFR in ml/min, by stage</W>
      {at === 0 && <><Tube x={70} y={52} /><W x={96} y={57} size={11} anchor="start">Creatinine</W></>}
      {at === 1 && <><path d={`M${X(50) - 8} 78 H${X(50) + 8} L${X(50)} 89 Z`} fill={GOLD} /><W x={X(50)} y={68} size={11}>About 50%</W><W x={300} y={68} size={10.5} anchor="end">Higher is better</W></>}
      {at === 3 && [48, 56, 52].map((v, index) => <path key={index} d={`M${X(v) - 6} ${60 + index * 9} H${X(v) + 6} L${X(v)} ${69 + index * 9} Z`} fill={index === 2 ? GOLD : SOFT} />)}
      {at === 4 && <><path d={`M${X(45) - 8} 78 H${X(45) + 8} L${X(45)} 89 Z`} fill={GOLD} /><W x={X(45)} y={68} size={11}>Stage 3</W></>}
      <W x={160} y={204} size={11}>{["From a creatinine blood test", "50ml/min is about 50% working", "Stages from above 90 to below 15", "One reading is not the whole story", "Most stay stable at stage 3"][at]}</W>
    </svg>} />;
}

function StrainLoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const tiles = [{ x: 56, y: 34, t: "Diabetes" }, { x: 164, y: 34, t: "Blood pressure" }, { x: 56, y: 70, t: "Other causes" }, { x: 164, y: 70, t: "Age, family" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Why kidneys come under strain" label="Causes of CKD" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A kidney carrying the load of the conditions that strain it">
      {tiles.map((tile, index) => <Tile key={tile.t} x={tile.x} y={tile.y} width={100} label={tile.t} lit={at === 0 || at === index + 1} />)}
      <rect x="50" y="106" width="220" height="8" rx="4" fill={SOFT} />
      <g className={still || at !== 0 ? undefined : "lib-bulge"}><Kidney x={154} y={150} scale={1} /></g>
      <W x={160} y={206} size={11}>{["Usually several things together", "Too much glucose strains the filters", "High pressure strains the vessels", "Infections, blockages, some medicines", "Around 4 in 10 over 70 have some form"][at]}</W>
    </svg>} />;
}

function Sieve(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const leak = at !== 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Protein" title="When the filters start to leak" label="Protein in the urine" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A filter holding back protein, a few pieces slipping through, and a urine sample">
      <path d="M26 70 Q96 150 166 70" fill={TINT} stroke={INK} strokeWidth="3" />
      <path d="M44 92 Q96 136 148 92" fill="none" stroke={SOFT} strokeWidth="2" strokeDasharray="3 5" />
      {[[70, 84], [96, 92], [122, 84], [84, 70], [110, 70]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="9" fill={INK} />)}
      {leak && <><circle cx="92" cy="128" r="7" fill={GOLD} /><circle cx="106" cy="146" r="7" fill={GOLD} /></>}
      <g opacity={at === 0 ? 0.45 : 1}>
        <rect x="214" y="44" width="52" height="12" rx="3" fill={SOFT} />
        <rect x="218" y="56" width="44" height="64" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={240} y={at === 3 ? 98 : 93} size={at === 3 ? 22 : 11}>{at === 3 ? "?" : "ACR"}</W>
      </g>
      {["A1", "A2", "A3"].map((stage, index) => {
        const on = (at === 2) || (at === 4 && index === 2);
        return <g key={stage} opacity={at === 2 || at === 4 ? 1 : 0.4}><rect x={192 + index * 36} y="136" width="32" height="26" rx="7" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" opacity={at === 2 ? 0.45 + index * 0.27 : 1} />
          <W x={208 + index * 36} y={153} size={10.5} fill={on ? WHITE : TEXT}>{stage}</W></g>;
      })}
      <W x={160} y={204} size={11}>{["Damage can let albumin leak through", "The ACR test: an early-morning sample", "A1 to A3: higher may be more serious", "Not always a kidney problem", "Guides blood pressure treatment"][at]}</W>
    </svg>} />;
}

function PressureLoop(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const cut = at === 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Blood pressure" title="Break the pressure loop" label="Blood pressure and CKD" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Blood pressure and the kidneys in a loop, and what breaks it">
      <Gauge x={80} y={112} r={44} value={[0.8, 0.45, 0.6, 0.6, 0.5][at]} />
      <Kidney x={232} y={100} scale={1.05} />
      <path d="M112 58 C140 30, 190 30, 214 60" fill="none" stroke={INK} strokeWidth="3" strokeDasharray={at === 0 ? "6 6" : undefined} className={at === 0 && !still ? "lib-types-flow" : undefined} />
      <path d="M206 54 L215 62 L203 64" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M216 142 C190 170, 140 170, 114 138" fill="none" stroke={cut ? LINE : INK} strokeWidth="3" strokeDasharray={at === 0 || cut ? "6 6" : undefined} className={at === 0 && !still ? "lib-types-flow" : undefined} />
      <path d="M122 142 L113 136 L112 148" fill="none" stroke={cut ? LINE : INK} strokeWidth="3" strokeLinejoin="round" />
      {cut && <><Pill x={128} y={164} /><Pill x={166} y={170} rotate={-10} /><Pill x={204} y={164} rotate={12} /></>}
      {at === 3 && Array.from({ length: 7 }, (_, index) => <circle key={index} cx={112 + index * 16} cy="176" r="6" fill={INK} />)}
      {at === 4 && <><SaltShaker x={160} y={98} /><Cross x={160} y={98} color={GOLD} size={1.9} /></>}
      <W x={160} y={206} size={11}>{["Pressure and kidneys feed each other", "Below 140/90; 130/80 with diabetes", "Often a few medicines together", "Keep taking them, even feeling well", "Less salt, more activity, no smoking"][at]}</W>
    </svg>} />;
}

function TwoShelves(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const top = ["SGLT2", "BP tablet", "Statin"], low = ["Ibuprofen", "Potassium", "Fizzy"];
  const topLit = (index: number) => at === 0 || (at === 1 && index === 0) || (at === 2 && index > 0);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Allies and risks in the medicine cabinet" label="Medicines and CKD" credit="Illustration: Rehyn. Check every medicine with your doctor or pharmacist."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A medicine cabinet with a shelf of medicines that can protect and a shelf to take care with">
      <rect x="16" y="22" width="220" height="156" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M16 102 H236" stroke={INK} strokeWidth="3" />
      <W x={28} y={40} size={10.5} anchor="start">Can protect</W>
      <W x={28} y={120} size={10.5} anchor="start">Take care</W>
      {top.map((label, index) => <Tile key={label} x={26 + index * 68} y={50} width={64} height={40} label={label} lit={topLit(index)} size={10} />)}
      {low.map((label, index) => <Tile key={label} x={26 + index * 68} y={128} width={64} height={40} label={label} lit={at === 3} size={10} />)}
      <g opacity={at === 4 ? 1 : 0.35}><Person x={278} y={118} scale={1.3} fill={at === 4 ? INK : SOFT} /><W x={278} y={160} size={10}>Pharmacist</W></g>
      <W x={160} y={204} size={11}>{["No cure, but medicines protect", "SGLT2 inhibitors: one tablet a day", "Blood pressure tablets and statins", "Avoid NSAIDs, potassium supplements", "Tell every doctor and pharmacist"][at]}</W>
    </svg>} />;
}

function KidneyPlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Food" title="Mostly just a healthy plate" label="Eating with CKD" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A healthy plate, with salt, protein, potassium and fluids beside it">
      <circle cx="96" cy="100" r="70" fill={WHITE} stroke={at === 0 ? GOLD : INK} strokeWidth={at === 0 ? 5 : 3} />
      <circle cx="96" cy="100" r="54" fill="none" stroke={LINE} strokeWidth="2" />
      {[[78, 78], [94, 70], [70, 96], [86, 92]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="11" fill={SOFT} />)}
      {[[112, 112], [122, 118], [116, 126], [128, 108], [106, 124]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="5" fill={at === 2 ? GOLD : INK} />)}
      <rect x="104" y="70" width="30" height="20" rx="6" fill={TINT} stroke={INK} strokeWidth="2" />
      <Tags x={190} y={30} labels={["Salt", "Protein", "Potassium", "Fluids"]} lit={index => index === at - 1} width={110} gap={36} />
      <W x={160} y={204} size={11}>{["Most need no special diet", "Under 6g of salt, about a teaspoon", "More pulses, a little less meat", "Potassium: limit only if advised", "Check before cutting back on fluids"][at]}</W>
    </svg>} />;
}

function FourPaths(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const arms = [{ t: "Haemodialysis", y: 62, left: true }, { t: "Peritoneal", y: 90, left: false }, { t: "Transplant", y: 118, left: true }, { t: "Supportive care", y: 146, left: false }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Later stages" title="Four paths if the kidneys fail" label="Dialysis and transplant" credit="Illustration: Rehyn. 1 in 50 is Kidney Care UK's figure."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Fifty dots with one marked, and a signpost with four treatment paths">
      {Array.from({ length: 50 }, (_, index) => <circle key={index} cx={28 + (index % 25) * 11} cy={index < 25 ? 24 : 36} r={index === 49 ? 4.5 : 3.5} fill={index === 49 ? GOLD : at === 0 ? SOFT : LINE} />)}
      <path d="M160 54 V178" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      {arms.map((arm, index) => {
        const on = at === index + 1;
        const d = arm.left ? `M160 ${arm.y} H54 L42 ${arm.y + 12} L54 ${arm.y + 24} H160 Z` : `M160 ${arm.y} H266 L278 ${arm.y + 12} L266 ${arm.y + 24} H160 Z`;
        return <g key={arm.t}><path d={d} fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
          <W x={arm.left ? 101 : 219} y={arm.y + 16} size={10.5} fill={on ? WHITE : TEXT}>{arm.t}</W></g>;
      })}
      <W x={160} y={206} size={11}>{["Only 1 in 50; time to plan ahead", "About 4 hours, 3 times a week", "Fluid in the tummy, at home", "A transplant, often most effective", "Supportive care is still treatment"][at]}</W>
    </svg>} />;
}

function PauseBox(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const boxes = ["ACE / ARB", "Diuretic", "Metformin", "SGLT2"];
  const paused = (index: number) => at === 1 || (at === 2 && index === 3);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sick days" title="A plan for the days you are ill" label="Sick-day rules" credit="Illustration: Rehyn. Only pause a medicine if your own team says so."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A thermometer, a glass of water and a pill box with some medicines paused">
      <g opacity={at === 0 ? 1 : 0.4}><rect x="44" y="28" width="16" height="54" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="52" cy="88" r="11" fill={INK} /><rect x="49" y="48" width="6" height="36" fill={INK} /></g>
      <g opacity={at === 4 ? 1 : 0.4}><Tumbler x={268} y={60} full={at === 4 ? 0.85 : 0.35} scale={1.3} /></g>
      {(at === 1 || at === 2) && <><Clock x={160} y={52} r={22} hand={Math.PI} /><W x={160} y={94} size={10.5}>48 hours</W></>}
      {at === 3 && <><rect x="118" y="38" width="84" height="32" rx="10" fill={INK} /><W x={160} y={59} size={12} fill={WHITE}>NHS 111</W></>}
      {boxes.map((label, index) => <g key={label}>
        <rect x={24 + index * 70} y="118" width="64" height="48" rx="8" fill={paused(index) ? TINT : WHITE} stroke={paused(index) ? SOFT : INK} strokeWidth="2.5" strokeDasharray={paused(index) ? "6 5" : undefined} />
        <W x={56 + index * 70} y={146} size={10} fill={paused(index) ? SOFT : TEXT}>{label}</W>
      </g>)}
      <W x={160} y={204} size={11}>{["Illness and dehydration add risk", "Some medicines may be paused", "SGLT2s paused while unwell", "Peeing much less? Call GP or NHS 111", "Drink so your pee is pale and regular"][at]}</W>
    </svg>} />;
}

function PharmacyRow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const packs = ["Paracetamol", "Ibuprofen", "Gels", "Codeine"];
  const lit = (index: number) => (at === 0 && index === 0) || (at === 1 && index === 1) || (at === 2 && index === 2) || (at === 3 && index === 3);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Painkillers" title="Choose the kinder painkiller" label="Painkillers and the kidneys" credit="Illustration: Rehyn. Ask a pharmacist before starting a painkiller."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four painkillers on a shelf, marked safe, to avoid, or to ask about">
      {packs.map((label, index) => <g key={label} opacity={at === 4 ? 0.45 : 1}>
        <Tile x={12 + index * 76} y={96} width={70} height={52} label={label} lit={lit(index)} size={10} />
        {index === 0 ? <Tick x={47} y={172} /> : index === 3 ? <W x={276} y={177} size={10.5}>Ask</W> : <Cross x={47 + index * 76} y={172} />}
      </g>)}
      {at === 0 && <Pill x={160} y={54} />}
      {(at === 1 || at === 2) && <Kidney x={156} y={52} scale={0.8} stroke={GOLD} />}
      {at === 3 && <Clock x={160} y={52} r={20} hand={1.2} />}
      {at === 4 && <><Person x={124} y={78} scale={1.1} /><W x={146} y={56} size={10.5} anchor="start">GP or pharmacist</W></>}
      <W x={160} y={206} size={11}>{["Paracetamol, at standard doses", "NSAIDs can harm the kidneys", "Gels and cold remedies count too", "Codeine: small doses, with a doctor", "Lasting pain? See your doctor"][at]}</W>
    </svg>} />;
}

function EpoCells(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const level = [1, 1, 1, 2, 3][at], cells = [3, 2, 2, 5, 5][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tiredness" title="When tiredness has a cause" label="Tiredness and anaemia" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A kidney sending EPO to the bone marrow to make red blood cells, beside an energy battery">
      <rect x="40" y="46" width="20" height="8" rx="2" fill={INK} />
      <rect x="26" y="54" width="48" height="100" rx="9" fill={WHITE} stroke={INK} strokeWidth="3" />
      {[0, 1, 2, 3].map(index => <rect key={index} x="33" y={130 - index * 23} width="34" height="18" rx="4" fill={index < level ? INK : LINE} />)}
      {at === 0 && ["Waste", "Sleep", "Mood"].map((label, index) => <Tile key={label} x={110 + index * 66} y={18} width={60} height={24} label={label} lit size={10} />)}
      <Kidney x={136} y={100} scale={0.9} />
      <path d="M168 100 H218" stroke={INK} strokeWidth="3" strokeDasharray="6 6" className={!still && (at === 1 || at === 3) ? "lib-types-flow" : undefined} opacity={at === 1 || at === 3 ? 1 : 0.5} />
      <W x={193} y={90} size={10.5}>EPO</W>
      <path d="M232 92 a8 8 0 1 1 8 -8 H276 a8 8 0 1 1 8 8 a8 8 0 1 1 -8 8 H240 a8 8 0 1 1 -8 -8 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {Array.from({ length: cells }, (_, index) => <circle key={index} cx={226 + index * 16} cy="136" r="6.5" fill={INK} stroke={WHITE} strokeWidth="1.5" />)}
      {at === 3 && <Pill x={258} y={58} />}
      {at === 2 && <W x={258} y={64} size={10.5}>Fewer cells</W>}
      <W x={160} y={204} size={11}>{["Many reasons to feel tired", "Less EPO means fewer red cells", "Tiredness, breathlessness, headaches", "A blood test; iron is often first", "A little activity on better days"][at]}</W>
    </svg>} />;
}

function YearGrid(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const monthLit = (index: number) => (at === 0 && index === 4) || (at === 3 && index >= 3 && index <= 5);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Checks" title="Your year of kidney checks" label="The checks" credit="Illustration: Rehyn. Your practice sets the dates."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year of months with the kidney review marked, and what is checked">
      {months.map((month, index) => <g key={index}>
        <rect x={22 + (index % 6) * 47} y={index < 6 ? 22 : 58} width="40" height="30" rx="7" fill={monthLit(index) ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={42 + (index % 6) * 47} y={index < 6 ? 41 : 77} size={10.5} fill={monthLit(index) ? WHITE : TEXT}>{month}</W>
      </g>)}
      {at === 0 && <rect x="206" y="17" width="48" height="40" rx="10" fill="none" stroke={GOLD} strokeWidth="3" />}
      {at === 0 && ["Blood", "Urine", "Weight", "BP"].map((label, index) => <Tile key={label} x={16 + index * 74} y={118} width={66} label={label} lit size={10.5} />)}
      {at === 1 && <><Person x={120} y={168} scale={1.1} /><Person x={200} y={168} scale={1.1} fill={SOFT} /><W x={160} y={132} size={22}>?</W></>}
      {at === 2 && ["Home BP", "Flu jab", "Pneumococcal"].map((label, index) => <Tile key={label} x={14 + index * 100} y={118} width={92} label={label} lit={index < 2} size={10.5} />)}
      {at === 3 && <><Tube x={130} y={140} rotate={0} /><Tube x={160} y={140} rotate={0} /><Tube x={190} y={140} rotate={0} /></>}
      {at === 4 && <><path d="M30 160 L80 150 L130 156 L180 146 L230 150 L290 144" fill="none" stroke={SOFT} strokeWidth="3" />
        {[[30, 160], [80, 150], [130, 156], [180, 146], [230, 150], [290, 144]].map(([cx, cy]) => <circle key={cx} cx={cx} cy={cy} r="5" fill={INK} />)}</>}
      <W x={160} y={206} size={11}>{["Blood and urine tests, once a year", "A chance to ask questions", "Home BP and the yearly flu jab", "Repeated within three months", "The trend can matter more"][at]}</W>
    </svg>} />;
}

// ==== Fatty liver ============================================================================================

function FatDrops(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const drops = [[40, 50], [70, 34], [104, 28], [138, 26], [168, 28], [58, 72], [92, 60], [126, 52], [154, 46], [80, 92], [112, 80]];
  const count = at === 1 ? 11 : 7;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Fat where it does not belong" label="What fatty liver is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A liver with droplets of fat building up inside it">
      <Liver x={124} y={84} scale={0.95}>
        {drops.slice(0, count).map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="9" fill={GOLD} stroke={WHITE} strokeWidth="2" />)}
      </Liver>
      {at === 2 && <><Tile x={244} y={36} width={66} label="NAFLD" lit={false} /><path d="M277 70 V92 M270 85 L277 93 L284 85" fill="none" stroke={INK} strokeWidth="2.5" /><Tile x={244} y={98} width={66} label="MASLD" lit /></>}
      {at === 3 && [0, 1, 2, 3].map(index => <Person key={index} x={258 + (index % 2) * 34} y={index < 2 ? 82 : 140} scale={0.8} fill={index === 0 ? INK : LINE} />)}
      {at === 4 && <Person x={276} y={130} scale={1.3} fill={SOFT} />}
      <W x={160} y={202} size={11}>{["Fat builds up where it should not", "More than 5% of liver cells hold fat", "MASLD: the new name for NAFLD", "About 1 in 4 UK adults have it", "Usually no symptoms"][at]}</W>
    </svg>} />;
}

function FourCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const cards = ["GP", "Blood test", "Score", "Scan"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="Blood tests, scores and scans" label="Tests for fatty liver" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four steps of testing, from the GP to a scan, and the risk result">
      {cards.map((label, index) => {
        const on = at === index;
        const cx = 49 + index * 76;
        return <g key={label} opacity={at === 4 ? 0.5 : 1}>
          <rect x={cx - 35} y="30" width="70" height="88" rx="10" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          {index === 0 && <Person x={cx} y={84} scale={0.9} fill={on ? WHITE : INK} />}
          {index === 1 && <g transform={`translate(${cx} 68)`}><rect x="-7" y="-22" width="14" height="44" rx="7" fill={WHITE} stroke={on ? WHITE : INK} strokeWidth="2.5" /><path d="M-5.5 0 H5.5 V14 A5.5 5.5 0 0 1 -5.5 14 Z" fill={on ? GOLD : INK} /></g>}
          {index === 2 && <g><path d={`M${cx - 22} 80 A22 22 0 0 1 ${cx + 22} 80`} fill="none" stroke={on ? WHITE : LINE} strokeWidth="7" /><path d={`M${cx} 80 L${cx + 12} 64`} stroke={on ? GOLD : INK} strokeWidth="3.5" strokeLinecap="round" /></g>}
          {index === 3 && [0, 1, 2].map(ring => <path key={ring} d={`M${cx - 10 - ring * 7} ${56 + ring * 4} Q${cx} ${76 + ring * 9} ${cx + 10 + ring * 7} ${56 + ring * 4}`} fill="none" stroke={on ? WHITE : INK} strokeWidth="2.5" />)}
          <W x={cx} y={108} size={10} fill={on ? WHITE : TEXT}>{label}</W>
        </g>;
      })}
      {at === 4 && ["Low", "Unclear", "High"].map((label, index) => <Tile key={label} x={40 + index * 82} y={138} width={76} label={label} lit={index === 0} />)}
      <W x={160} y={204} size={11}>{["Questions, weight, waist and alcohol", "Blood tests alone cannot rule it out", "Scores combine several blood tests", "Painless scans with sound waves", "Low risk: retest every 3 to 5 years"][at]}</W>
    </svg>} />;
}

function StageRow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const stages = ["Fatty", "MASH", "Fibrosis", "Cirrhosis"];
  const ring = [2, 0, -1, 3, -1][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Scarring" title="Scarring is what matters" label="Fibrosis and cirrhosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four livers from fatty to scarred, with an arrow back showing damage can reverse">
      {at === 4 && <HeartShape x={160} y={40} size={44} fill={TINT} />}
      {stages.map((label, index) => {
        const cx = 50 + index * 73;
        return <g key={label}>
          {ring === index && <rect x={cx - 34} y="62" width="68" height="70" rx="12" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-bulge"} />}
          <Liver x={cx} y={90} scale={0.3} fill={index === 3 ? TINT : WHITE}>
            {index === 0 && [[60, 50], [110, 40], [80, 80]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="14" fill={GOLD} />)}
            {index === 1 && [[60, 50], [110, 40]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="14" fill={GOLD} />)}
            {index === 1 && <path d="M40 80 q12 -16 24 0 t24 0" fill="none" stroke={SOFT} strokeWidth="10" />}
            {index >= 2 && <path d="M30 50 L90 70 M70 30 L120 60 M100 20 L170 30 M60 90 L110 80" fill="none" stroke={INK} strokeWidth="9" strokeLinecap="round" opacity={index === 2 ? 0.55 : 1} />}
            {index === 3 && <path d="M40 40 L60 100 M130 20 L120 70 M150 40 L90 100" fill="none" stroke={INK} strokeWidth="9" strokeLinecap="round" />}
          </Liver>
          <W x={cx} y={146} size={10.5}>{label}</W>
        </g>;
      })}
      <path d="M30 162 H286 M278 156 L287 162 L278 168" fill="none" stroke={LINE} strokeWidth="3" strokeLinejoin="round" />
      {at === 2 && <path d="M232 174 H44 M54 168 L43 174 L54 180" fill="none" stroke={GOLD} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />}
      <W x={160} y={206} size={11}>{["Repeated repair leaves scar tissue", "Four stages; most stay at the first", "Damage can slow or even reverse", "A liver specialist can help", "Heart health is a key first step"][at]}</W>
    </svg>} />;
}

function TwoRoads(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const left = at === 0 || at === 1 || at === 3 || at === 4, right = at === 0 || at === 3;
  const colour = (on: boolean) => on ? (at >= 3 ? GOLD : INK) : LINE;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Alcohol or metabolic" title="Two roads to a fatty liver" label="Alcohol-related or metabolic" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two roads, from alcohol and from metabolism, meeting at the liver">
      <WineGlass x={60} y={44} scale={1.2} />
      <W x={60} y={84} size={10.5}>Alcohol</W>
      <Plate x={260} y={42} r={20} />
      <W x={260} y={84} size={10.5}>Metabolism</W>
      <path d="M60 94 C60 130, 116 120, 136 146" fill="none" stroke={colour(left)} strokeWidth="5" strokeLinecap="round" />
      <path d="M260 94 C260 130, 204 120, 184 146" fill="none" stroke={colour(right)} strokeWidth="5" strokeLinecap="round" />
      {at === 1 && <W x={86} y={140} size={20}>?</W>}
      {at === 2 && <><W x={160} y={38} size={12}>MASLD</W><W x={160} y={56} size={10.5}>once called NAFLD</W></>}
      <g className={at === 3 && !still ? "lib-bulge" : undefined}><Liver x={160} y={164} scale={0.36} /></g>
      <W x={160} y={208} size={11}>{["Two causes of a fatty liver", "The GP asks how much you drink", "Use whichever name feels right", "Both together raise the risk", "Alcohol adds strain either way"][at]}</W>
    </svg>} />;
}

function WaistBand(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const X = (p: number) => 172 + p * 128 / 15;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Weight" title="Five to ten per cent can help" label="Weight and the liver" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with a tape at the waist, and what helps with weight">
      <Person x={80} y={150} scale={2.6} fill={SOFT} />
      {at === 2 && <><rect x="36" y="146" width="88" height="9" rx="3" fill={GOLD} />{[48, 60, 72, 84, 96, 108].map(x => <path key={x} d={`M${x} 146 V151`} stroke={INK} strokeWidth="1.5" />)}</>}
      {at === 0 && <><rect x={X(0)} y="90" width={X(15) - X(0)} height="20" rx="5" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x={X(5)} y="90" width={X(10) - X(5)} height="20" fill={INK} />
        <W x={X(5)} y={128} size={10.5}>5%</W><W x={X(10)} y={128} size={10.5}>10%</W><W x={236} y={146} size={10}>of body weight</W></>}
      {at === 1 && [0, 1, 2, 3, 4].map(index => <Person key={index} x={186 + index * 26} y={110} scale={0.75} fill={index === 0 ? INK : LINE} />)}
      {at === 2 && <><circle cx="250" cy="96" r="24" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="250" cy="96" r="8" fill={SOFT} /><path d="M226 112 H180" stroke={GOLD} strokeWidth="8" /></>}
      {at === 3 && <path d="M180 60 H206 V88 H232 V116 H258 V144 H292" fill="none" stroke={INK} strokeWidth="4" strokeLinejoin="round" />}
      {at === 4 && <><Person x={236} y={150} scale={1.8} /><W x={236} y={62} size={10.5}>Support</W></>}
      <W x={160} y={206} size={11}>{["Losing 5% to 10% can help", "Healthy weight? It can still happen", "Measure midway, rib to hip", "At most 1 kg a week, steadily", "A dietitian or programme can help"][at]}</W>
    </svg>} />;
}

function BalancedPlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const parts = [{ a: 90, b: 270, t: "Veg, fruit", x: 66, y: 104, fill: INK }, { a: -90, b: 30, t: "Starch", x: 130, y: 84, fill: SOFT }, { a: 30, b: 90, t: "Protein", x: 124, y: 134, fill: TINT }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Food" title="No miracle diet, just balance" label="Eating for your liver" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balanced plate, and the changes that help most">
      <circle cx="100" cy="100" r="72" fill={WHITE} stroke={at === 0 ? GOLD : INK} strokeWidth={at === 0 ? 5 : 3} />
      {parts.map(part => <g key={part.t}>
        <path d={sector(100, 100, 62, part.a, part.b)} fill={at === 1 ? part.fill : WHITE} stroke={SOFT} strokeWidth="2" />
        <W x={part.x} y={part.y} size={10} fill={at === 1 && part.fill === INK ? WHITE : TEXT}>{part.t}</W>
      </g>)}
      <Tags x={192} y={44} labels={["Less sugar", "No detox", "Small changes"]} lit={index => index === at - 2} width={116} gap={40} />
      <W x={160} y={204} size={11}>{["No special diet cures it", "5 a day; starch up to a third", "Less sugar, fat and processed meat", "You cannot detox your liver", "Pick one or two small changes"][at]}</W>
    </svg>} />;
}

function WeekBlocks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const fill = [[1, 0, 2, 0, 1, 0, 0], [3, 3, 3, 3, 3, 0, 0], [3, 3, 3, 3, 3, 0, 0], [1, 1, 1, 0, 1, 1, 0], [2, 1, 2, 1, 2, 2, 1]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Moving" title="Ten minutes at a time" label="Movement and the liver" credit="Illustration: Rehyn. 150 minutes a week is the NHS guide for adults."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of days filling with 10-minute blocks of activity">
      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}>
        {[0, 1, 2].map(block => <rect key={block} x={26 + index * 40} y={128 - block * 24} width="30" height="20" rx="5" fill={block < fill[index] ? INK : WHITE} stroke={block < fill[index] ? INK : LINE} strokeWidth="2" />)}
        <W x={41 + index * 40} y={168} size={10.5}>{day}</W>
      </g>)}
      {at === 2 && [1, 4].map(index => <g key={index} transform={`translate(${41 + index * 40} 64)`}><rect x="-12" y="-2" width="24" height="4" fill={GOLD} /><rect x="-15" y="-8" width="6" height="16" rx="2" fill={GOLD} /><rect x="9" y="-8" width="6" height="16" rx="2" fill={GOLD} /></g>)}
      {at === 1 && <W x={160} y={50} size={11}>30 minutes on 5 days</W>}
      {at === 3 && <W x={160} y={50} size={11}>Each block: 10 minutes</W>}
      <W x={160} y={204} size={11}>{["Movement lowers liver fat", "150 minutes a week, talk but not sing", "Strength work twice a week", "Start with 10 minutes and build", "Walk a bit more on everyday trips"][at]}</W>
    </svg>} />;
}

function Hub(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const nodes = [{ x: 14, y: 26, t: "Diabetes" }, { x: 196, y: 26, t: "Cholesterol" }, { x: 14, y: 156, t: "Blood pressure" }, { x: 196, y: 156, t: "Heart" }];
  const lit = (index: number) => at === 0 || at === 4 || (at === 1 && index === 0) || (at === 2 && index === 3) || (at === 3 && index < 3);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Linked conditions" title="One metabolism, linked conditions" label="Linked conditions" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The liver joined to diabetes, cholesterol, blood pressure and the heart">
      {nodes.map((node, index) => <path key={node.t} d={`M${node.x + 55} ${node.y + 14} L160 104`} stroke={lit(index) ? INK : LINE} strokeWidth="3" strokeDasharray={at === 0 ? "6 6" : undefined} className={at === 0 && !still ? "lib-types-flow" : undefined} />)}
      {at === 4 && <ellipse cx="160" cy="104" rx="58" ry="40" fill="none" stroke={GOLD} strokeWidth="3" />}
      <Liver x={160} y={104} scale={0.45} />
      {nodes.map((node, index) => <Tile key={node.t} x={node.x} y={node.y} width={110} label={node.t} lit={lit(index)} />)}
      {at === 3 && <Pill x={160} y={170} />}
      <W x={160} y={208} size={11}>{["Linked through metabolism", "Two-thirds with type 2 also have it", "Heart health comes first", "Treating the linked conditions", "One review, managed together"][at]}</W>
    </svg>} />;
}

function WeekUnits(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Alcohol" title="Easing the load on your liver" label="Alcohol and a fatty liver" credit="Illustration: Rehyn. 14 units a week is the UK guide."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week with drinks spread out and alcohol-free days in a row">
      {at === 0 && <><Liver x={130} y={66} scale={0.4} /><WineGlass x={212} y={64} scale={1.2} /></>}
      {at === 1 && <W x={160} y={74} size={11.5}>2 to 3 alcohol-free days</W>}
      {at === 2 && <Liver x={160} y={66} scale={0.4} stroke={GOLD} />}
      {at === 3 && <><Person x={140} y={100} scale={1.2} /><path d="M188 52 H200 V40 H212 V52 H224 V64 H212 V76 H200 V64 H188 Z" fill={INK} /></>}
      {at === 4 && <><Person x={134} y={100} scale={1.2} /><Person x={190} y={100} scale={1.2} fill={SOFT} /></>}
      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}>
        <rect x={22 + index * 40} y="118" width="36" height="46" rx="7" fill={WHITE} stroke={INK} strokeWidth="2" />
        {at === 1 && [0, 2, 4].includes(index) && <WineGlass x={40 + index * 40} y={142} scale={0.7} />}
        {((at === 1 && index >= 5) || at === 2) && <Tick x={40 + index * 40} y={141} color={GOLD} />}
        <W x={40 + index * 40} y={182} size={10.5}>{day}</W>
      </g>)}
      <W x={160} y={206} size={11}>{["Alcohol adds strain to the liver", "No more than 14 units, spread out", "With advanced scarring, stop fully", "Get help before stopping suddenly", "Your GP can refer you to support"][at]}</W>
    </svg>} />;
}

function Intake(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const items = ["Prescribed", "Paracetamol", "Herbal", "Grapefruit"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Check before you take it" label="Medicines and supplements" credit="Illustration: Rehyn. Check with a pharmacist or doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Medicines, painkillers, herbal remedies and grapefruit all passing through the liver">
      {items.map((label, index) => {
        const x = 40 + index * 80, on = at === index + 1;
        return <g key={label}>
          <path d={`M${x} 80 L160 128`} stroke={at === 0 || on ? INK : LINE} strokeWidth="3" strokeDasharray={at === 0 ? "6 6" : undefined} className={at === 0 && !still ? "lib-types-flow" : undefined} />
          <circle cx={x} cy="40" r="22" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          {index === 0 && <Pill x={x} y={40} fill={on ? GOLD : INK} />}
          {index === 1 && <rect x={x - 11} y="30" width="22" height="20" rx="3" fill={on ? GOLD : SOFT} />}
          {index === 2 && <path d={`M${x - 10} ${50} C${x - 12} ${34}, ${x} ${28}, ${x + 10} ${30} C${x + 12} ${44}, ${x} ${52}, ${x - 10} ${50} Z M${x - 10} 50 L${x + 4} 36`} fill={on ? GOLD : SOFT} stroke={on ? WHITE : INK} strokeWidth="2" />}
          {index === 3 && <><circle cx={x} cy="40" r="12" fill={on ? GOLD : SOFT} />{[0, 60, 120].map(a => <path key={a} d={`M${x + 12 * Math.cos(a * Math.PI / 180)} ${40 + 12 * Math.sin(a * Math.PI / 180)} L${x - 12 * Math.cos(a * Math.PI / 180)} ${40 - 12 * Math.sin(a * Math.PI / 180)}`} stroke={WHITE} strokeWidth="1.5" />)}</>}
          <W x={x} y={76} size={10.5}>{label}</W>
        </g>;
      })}
      <Liver x={160} y={150} scale={0.5} />
      <W x={160} y={208} size={11}>{["The liver breaks down medicines", "About 2% are linked to medicines", "Paracetamol: check it suits you", "Natural remedies can still harm", "Grapefruit affects many medicines"][at]}</W>
    </svg>} />;
}

function Timeline(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const X = (year: number) => 30 + year * 52;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Checks" title="Checks that catch it early" label="How often to be checked" credit="Illustration: Rehyn. Your own team sets your checks."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five years of checks on a timeline">
      <path d={`M${X(0)} 120 H${X(5)}`} stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {[1, 2, 3, 4, 5].map(year => <g key={year}><circle cx={X(year)} cy="120" r="8" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={X(year)} y={146} size={10.5}>{year}</W></g>)}
      <W x={X(0)} y={146} size={10.5}>Years</W>
      {at === 3 && Array.from({ length: 10 }, (_, index) => <circle key={index} cx={X((index + 1) / 2)} cy="100" r="4.5" fill={GOLD} />)}
      {at === 0 && <g transform="translate(160 62)"><circle r="20" fill={WHITE} stroke={INK} strokeWidth="3.5" /><path d="M14 14 L28 28" stroke={INK} strokeWidth="5" strokeLinecap="round" /></g>}
      {at === 2 && <><Person x={100} y={76} scale={1.1} /><W x={136} y={64} size={10.5} anchor="start">GP</W><Person x={220} y={76} scale={1.1} fill={SOFT} /><W x={256} y={64} size={10.5} anchor="start">Later</W></>}
      {at === 4 && <><path d="M160 36 L184 80 H136 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><W x={160} y={74} size={16}>!</W></>}
      <W x={160} y={200} size={11}>{["Damage is often silent, so check", "A check-up at least once a year", "Your GP first, a specialist later", "Cirrhosis: a scan every 6 months", "Yellow skin? Tell a doctor at once"][at]}</W>
    </svg>} />;
}

// ==== IBS ====================================================================================================

const BOWEL = "M166 176 V76 C166 58, 178 50, 196 50 H238 C256 50, 268 60, 268 78 V156 C268 170, 256 176, 244 170 C230 164, 220 174, 208 180";

function GutBrain(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When gut and brain miscommunicate" label="What IBS is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The brain and the gut joined by nerves that are too sensitive">
      <path transform="translate(66 56)" d="M-36 0 C-40 -22, -18 -32, 0 -26 C18 -34, 42 -22, 36 0 C44 18, 22 30, 0 24 C-20 32, -44 20, -36 0 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path transform="translate(66 56)" d="M-18 -8 C-8 -14, 0 -4, 10 -10 M-14 8 C-4 2, 6 12, 18 6" fill="none" stroke={SOFT} strokeWidth="2.5" />
      <path d="M104 62 C130 70, 140 92, 160 102" fill="none" stroke={INK} strokeWidth="2.5" strokeDasharray="4 6" className={at === 1 && !still ? "lib-types-flow" : undefined} />
      <Bowel d={BOWEL} glow={at === 1} />
      {at === 1 && <circle cx="268" cy="112" r="14" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      {at === 0 && <path d="M18 146 C30 126, 42 126, 54 146 S78 166, 90 146 S114 126, 126 146" fill="none" stroke={INK} strokeWidth="3" />}
      {at === 2 && <g><rect x="48" y="118" width="40" height="50" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="58" y="113" width="20" height="9" rx="3" fill={SOFT} /><Tick x={68} y={145} /></g>}
      {at === 3 && <W x={68} y={156} size={26}>?</W>}
      {at === 4 && Array.from({ length: 10 }, (_, index) => <circle key={index} cx={18 + index * 12} cy="144" r="4.5" fill={index === 0 ? INK : LINE} />)}
      <W x={160} y={206} size={11}>{["Symptoms that come and go", "Gut and brain signals, too sensitive", "Tests rule out other causes", "Exact cause unknown; many links", "4 in 100 to 1 in 10 people worldwide"][at]}</W>
    </svg>} />;
}

function ThreeLights(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lamps = ["999 or A&E", "Urgent GP or NHS 111", "Tell your GP"];
  const on = [[2], [0, 1], [1], [2], [2]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Red flags" title="When it isn't IBS: get checked" label="Symptoms that need checking" credit="Illustration: Rehyn. Follow the answer for which symptoms go where."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three lights: 999, an urgent GP appointment, and telling your GP">
      <rect x="40" y="24" width="60" height="152" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" />
      {lamps.map((label, index) => <g key={label}>
        <circle cx="70" cy={54 + index * 46} r="17" fill={on.includes(index) ? INK : TINT} stroke={INK} strokeWidth="2" />
        <W x={114} y={58 + index * 46} size={10.5} anchor="start" fill={on.includes(index) ? TEXT : SOFT}>{label}</W>
      </g>)}
      {at === 3 && <><Person x={256} y={176} scale={0.8} /><Person x={282} y={176} scale={0.8} fill={SOFT} /></>}
      {at === 4 && <path d="M248 176 V160 C248 146, 296 146, 296 160 V176 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />}
      <W x={160} y={206} size={11}>{["Some symptoms are not typical of IBS", "Weight loss, bleeding, a lump: urgent", "A change lasting weeks: get checked", "Tell the GP about family history", "Keep eating gluten before the test"][at]}</W>
    </svg>} />;
}

function ThreeLanes(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const lanes = ["IBS-D", "IBS-C", "IBS-M"];
  const laneLit = (index: number) => at === 0 || at === index + 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Types" title="Too fast, too slow, or both" label="Types of IBS" credit="Illustration: Rehyn. The stool scale is the Bristol Stool Chart."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three lanes, fast, slow and mixed, above the seven stool types with type 4 marked">
      {lanes.map((label, index) => {
        const y = 40 + index * 38;
        return <g key={label} opacity={laneLit(index) ? 1 : 0.4}>
          <W x={14} y={y + 4} size={11} anchor="start">{label}</W>
          <rect x="70" y={y - 12} width="230" height="24" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" />
          {index === 0 && <path d={`M82 ${y} H288`} stroke={INK} strokeWidth="4" strokeDasharray="12 14" strokeLinecap="round" className={still ? undefined : "lib-types-flow"} />}
          {index === 1 && [0, 1, 2, 3, 4].map(dot => <circle key={dot} cx={170 + dot * 11} cy={y} r="5" fill={INK} />)}
          {index === 2 && <><path d={`M82 ${y} H170`} stroke={INK} strokeWidth="4" strokeDasharray="12 14" strokeLinecap="round" />{[0, 1, 2, 3].map(dot => <circle key={dot} cx={220 + dot * 11} cy={y} r="5" fill={INK} />)}</>}
        </g>;
      })}
      <W x={14} y={170} size={10.5} anchor="start">Type</W>
      {Array.from({ length: 7 }, (_, index) => {
        const on = (at === 2 && index < 2) || (at === 3 && index === 3);
        return <g key={index}><rect x={58 + index * 34} y="152" width="30" height="26" rx="6" fill={on ? (at === 3 ? GOLD : INK) : WHITE} stroke={INK} strokeWidth="2" />
          <W x={73 + index * 34} y={169} size={10.5} fill={on && at === 2 ? WHITE : TEXT}>{index + 1}</W></g>;
      })}
      <W x={160} y={206} size={11}>{["About 1 in 3 each for C and D", "D: watery poo and urgency", "C: straining, hard poo", "Aim for type 4: soft, well formed"][at]}</W>
    </svg>} />;
}

function FlareLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const peaks = [{ x: 55, t: "No reason" }, { x: 130, t: "Food" }, { x: 205, t: "Stress" }, { x: 280, t: "Infection" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Triggers" title="Finding what sets it off" label="Triggers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Symptoms rising and falling, with a possible trigger at each flare-up">
      {at === 4 && <path d="M14 156 C34 156, 40 102, 55 102 S76 156, 92 156 S115 102, 130 102 S151 156, 167 156 S190 102, 205 102 S226 156, 242 156 S265 102, 280 102 S300 156, 310 156" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 6" />}
      <path d="M14 150 C34 150, 40 96, 55 96 S76 150, 92 150 S115 96, 130 96 S151 150, 167 150 S190 96, 205 96 S226 150, 242 150 S265 96, 280 96 S300 150, 310 150" fill="none" stroke={INK} strokeWidth="4" />
      {peaks.map((peak, index) => {
        const on = at === index;
        return <g key={peak.t} opacity={at === 4 ? 0.45 : 1}>
          <path d={`M${peak.x} 80 V92`} stroke={on ? INK : LINE} strokeWidth="2.5" />
          <Tile x={peak.x - 31} y={52} width={62} height={26} label={peak.t} lit={on} size={10} />
          <circle cx={peak.x} cy="96" r="6" fill={on ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
        </g>;
      })}
      <W x={160} y={200} size={11}>{["Flare-ups, sometimes for no reason", "Fatty food, alcohol, sweeteners", "Stress hormones change the gut", "Infections and antibiotics too", "Endometriosis can look like IBS"][at]}</W>
    </svg>} />;
}

function DayRows(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const row = (index: number) => at === index ? 1 : 0.32;
  return <MemoryBand props={props} state={s} tone="theme" kicker="First steps" title="Simple changes before big ones" label="First steps" credit="Illustration: Rehyn. Amounts as the NHS gives them."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three meals, drinks, fruit and fibre across a day">
      <g opacity={row(0)}><W x={14} y={44} size={10.5} anchor="start">Meals</W>{[120, 190, 260].map(x => <Plate key={x} x={x} y={40} r={16} />)}</g>
      <g opacity={row(1)}><W x={14} y={88} size={10.5} anchor="start">Drinks</W>
        {Array.from({ length: 10 }, (_, index) => <Tumbler key={index} x={80 + index * 15} y={84} scale={0.5} full={0.75} fill={index < 8 ? INK : SOFT} />)}
        {[244, 268, 292].map(x => <g key={x}><rect x={x - 8} y="76" width="16" height="17" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><path d={`M${x + 8} 80 h3 a4 4 0 0 1 0 8 h-3`} fill="none" stroke={INK} strokeWidth="2" /></g>)}
      </g>
      <g opacity={row(2)}><W x={14} y={132} size={10.5} anchor="start">Fruit</W>{[120, 150, 180].map(x => <g key={x}><circle cx={x} cy="128" r="10" fill={SOFT} stroke={INK} strokeWidth="2" /><path d={`M${x} 118 q2 -6 6 -7`} stroke={INK} strokeWidth="2" fill="none" /></g>)}</g>
      <g opacity={row(3)}><W x={14} y={172} size={10.5} anchor="start">Fibre</W>
        <path d="M104 162 H136 A16 14 0 0 1 104 162 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M160 176 H180 V168 H200 V160 H220 V152" fill="none" stroke={INK} strokeWidth="3" />
      </g>
      {at === 4 && <><Person x={282} y={176} scale={0.9} /><W x={282} y={140} size={10.5}>GP</W></>}
      <W x={160} y={208} size={11}>{["Three regular meals, taken slowly", "8 to 10 drinks; caffeine up to 3", "Up to 3 portions of fruit a day", "Fibre: change it gradually", "Not helping? A GP can refer you"][at]}</W>
    </svg>} />;
}

function FodmapSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const steps = [{ x: 24, top: 146, t: "Reduce" }, { x: 112, top: 116, t: "Reintroduce" }, { x: 200, top: 86, t: "What suits" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Low FODMAP" title="Three stages, with a dietitian" label="The low FODMAP diet" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three steps of the low FODMAP diet, with a dietitian alongside">
      {steps.map(step => <g key={step.t}>
        <rect x={step.x} y={step.top} width="88" height={176 - step.top} fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={step.x + 44} y={step.top + 18} size={10.5} fill={at === 2 ? WHITE : TEXT}>{step.t}</W>
      </g>)}
      {at === 2 && <circle cx="244" cy="74" r="9" fill={GOLD} />}
      {at === 0 && <g><circle cx="44" cy="62" r="13" fill={SOFT} stroke={INK} strokeWidth="2" /><rect x="68" y="44" width="22" height="34" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M68 54 L79 44 L90 54" fill="none" stroke={INK} strokeWidth="2" /><path d="M104 78 V60 C104 48, 136 48, 136 60 V78 Z" fill={TINT} stroke={INK} strokeWidth="2" /></g>}
      {at === 1 && <><Tile x={24} y={40} width={98} label="Simple advice" lit={false} /><path d="M128 54 H142 M136 48 L143 54 L136 60" fill="none" stroke={INK} strokeWidth="2.5" /><Tile x={148} y={40} width={98} label="Low FODMAP" lit /></>}
      {at === 3 && <><Person x={44} y={130} scale={1} /><W x={44} y={80} size={10.5}>Dietitian</W></>}
      {at === 4 && Array.from({ length: 6 }, (_, index) => <circle key={index} cx={32 + index * 16} cy="64" r="6" fill={index < 3 ? INK : index === 3 ? SOFT : LINE} />)}
      <W x={160} y={206} size={11}>{["Short-chain carbs in some foods", "After simpler diet advice", "Reduce, then reintroduce foods", "With a registered dietitian", "Helps about half to two thirds"][at]}</W>
    </svg>} />;
}

function SymptomShelf(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const columns = ["Cramps", "Constipation", "Diarrhoea"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="The right medicine for your symptom" label="Medicines for IBS" credit="Illustration: Rehyn. Ask a pharmacist or GP which suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Medicines sorted by symptom, with a stronger option from a GP above">
      <rect x="96" y="22" width="128" height="38" rx="10" fill={at === 4 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
      <W x={160} y={45} size={10.5} fill={at === 4 ? WHITE : TEXT}>From a GP</W>
      <path d="M160 60 V84" stroke={LINE} strokeWidth="3" strokeDasharray="4 4" />
      {columns.map((label, index) => {
        const on = at === 0 || at === index + 1;
        return <g key={label}>
          <rect x={14 + index * 99} y="90" width="94" height="84" rx="10" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          <W x={61 + index * 99} y={110} size={10.5} fill={on ? WHITE : TEXT}>{label}</W>
          <Pill x={61 + index * 99} y={146} fill={on ? GOLD : INK} />
        </g>;
      })}
      <W x={160} y={204} size={11}>{["Matched to your main symptom", "Cramps: antispasmodics, peppermint", "Constipation: try a bulk laxative", "Diarrhoea: loperamide, as directed", "Low-dose amitriptyline, from a GP"][at]}</W>
    </svg>} />;
}

function CalmWave(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Therapy" title="Calming the gut through the mind" label="Gut-directed therapy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with a calm wave running from mind to gut">
      <Person x={64} y={150} scale={2} />
      {at === 0 && <><path d="M96 92 C140 70, 170 120, 206 104" fill="none" stroke={INK} strokeWidth="2.5" strokeDasharray="5 6" className={still ? undefined : "lib-types-flow"} />
        <Bowel d="M216 150 V96 C216 84, 224 78, 236 78 H262 C276 78, 284 86, 284 98 V148" /></>}
      {at === 1 && Array.from({ length: 15 }, (_, index) => <circle key={index} cx={168 + (index % 5) * 28} cy={72 + Math.floor(index / 5) * 28} r="8" fill={index < 5 ? INK : SOFT} />)}
      {at === 2 && <path d="M110 110 C130 96, 150 96, 170 110 S210 124, 230 110 S270 96, 300 110" fill="none" stroke={INK} strokeWidth="4" strokeDasharray="10 8" className={still ? undefined : "lib-types-flow"} />}
      {at === 3 && <><rect x="168" y="70" width="30" height="52" rx="6" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="183" cy="114" r="2.5" fill={INK} />
        <rect x="222" y="74" width="62" height="40" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M212 122 H294" stroke={INK} strokeWidth="4" strokeLinecap="round" /></>}
      {at === 4 && <><rect x="232" y="58" width="52" height="92" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="272" cy="106" r="3.5" fill={INK} />
        <path d="M120 106 H218 M208 98 L219 106 L208 114" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></>}
      <W x={160} y={206} size={11}>{["Brain and gut are linked", "IBS-specific CBT: 5 to 15 sessions", "Hypnotherapy for deep relaxation", "Works by phone, online or in groups", "Refer yourself, or ask a GP"][at]}</W>
    </svg>} />;
}

function WorldCircle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const r = [34, 62, 62, 62, 82][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Out and about" title="Making the world bigger again" label="Toilets, travel and eating out" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A circle of places around home, shrinking and widening again">
      <circle cx="110" cy="104" r="82" fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="4 6" />
      <circle cx="110" cy="104" r={r} fill={TINT} stroke={at === 4 ? GOLD : INK} strokeWidth="3" strokeDasharray={at === 0 ? "6 6" : undefined} />
      {[-40, 70, 190].map(angle => { const [x, y] = polar(110, 104, r, angle); return <circle key={angle} cx={x} cy={y} r="6" fill={INK} />; })}
      <path d="M96 116 V100 L110 88 L124 100 V116 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      {at === 1 && <><rect x="222" y="58" width="80" height="48" rx="7" fill={INK} /><W x={262} y={86} size={10.5} fill={WHITE}>Can't Wait</W>
        <g transform="translate(262 140)"><circle cx="-14" cy="0" r="9" fill="none" stroke={INK} strokeWidth="3" /><path d="M-5 0 H18 M12 0 V7 M17 0 V6" stroke={INK} strokeWidth="3" /></g></>}
      {at === 2 && <><path d="M226 160 C250 140, 236 110, 262 96 S296 70, 290 50" fill="none" stroke={INK} strokeWidth="3" strokeDasharray="6 6" />{[[226, 160], [262, 96], [290, 50]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="6" fill={GOLD} stroke={INK} strokeWidth="2" />)}</>}
      {at === 3 && <><Plate x={262} y={100} r={24} /><path d="M228 84 V118 M296 84 V118" stroke={INK} strokeWidth="3" strokeLinecap="round" /></>}
      {at === 4 && <path d="M200 104 H246 M236 96 L247 104 L236 112" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />}
      <W x={160} y={208} size={11}>{["Avoiding places can shrink your world", "A Can't Wait card, a RADAR key", "Plan long journeys ahead", "Small portions, eaten slowly", "Build back up, step by step"][at]}</W>
    </svg>} />;
}

function StressLoop(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const nodes = [{ x: 160, y: 32, t: "Symptoms" }, { x: 258, y: 100, t: "Pain" }, { x: 160, y: 168, t: "Stress" }, { x: 62, y: 100, t: "Avoidance" }];
  const lit = (index: number) => at === 1 || ((at === 0 || at === 2) && index === 2) || (at === 0 && index === 0);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stress" title="Breaking the stress-gut loop" label="Stress and the gut" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A loop of symptoms, pain, stress and avoidance, with slow breathing at its centre">
      <ellipse cx="160" cy="100" rx="98" ry="68" fill="none" stroke={at === 2 || at === 3 ? LINE : SOFT} strokeWidth="4" strokeDasharray={at === 1 ? "6 8" : undefined} className={at === 1 && !still ? "lib-types-flow" : undefined} />
      {nodes.map((node, index) => <Tile key={node.t} x={node.x - 46} y={node.y - 13} width={92} height={26} label={node.t} lit={lit(index)} />)}
      <circle cx="160" cy="100" r="34" fill={TINT} stroke={SOFT} strokeWidth="2" />
      {at === 3 && <circle cx="160" cy="100" r="22" fill={INK} opacity=".85" className={still ? undefined : "lib-v2-breathe is-slow"} />}
      {at === 4 && <><Person x={148} y={118} scale={0.8} /><Person x={172} y={118} scale={0.8} fill={SOFT} /></>}
      <W x={160} y={208} size={11}>{["Stress hormones reach the gut", "A loop: symptoms, pain, stress", "Manage stress, rather than remove it", "Breathe slowly, counting 1 to 5", "GP, talking therapies, Samaritans"][at]}</W>
    </svg>} />;
}

function Desk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Support to stay in work" label="IBS at work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk with a calendar, a clock, a note of adjustments and a grant letter">
      <rect x="30" y="56" width="84" height="62" rx="5" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M72 118 V132 M56 134 H88" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {Array.from({ length: 12 }, (_, index) => <rect key={index} x={38 + (index % 4) * 18} y={63 + Math.floor(index / 4) * 17} width="14" height="13" rx="2" fill={at === 2 ? INK : index === 5 && at === 0 ? GOLD : TINT} />)}
      <g opacity={at === 1 ? 1 : 0.4}><Clock x={150} y={64} r={20} hand={2} /></g>
      <g opacity={at === 1 ? 1 : 0.4}><rect x="186" y="66" width="56" height="54" rx="3" fill={at === 1 ? INK : TINT} stroke={INK} strokeWidth="2" /><W x={214} y={97} size={10} fill={at === 1 ? WHITE : TEXT}>Adjust</W></g>
      <g opacity={at === 3 ? 1 : 0.4}><rect x="250" y="94" width="56" height="38" rx="3" fill={at === 3 ? INK : WHITE} stroke={INK} strokeWidth="2" /><path d="M250 94 L278 116 L306 94" fill="none" stroke={at === 3 ? WHITE : INK} strokeWidth="2" /></g>
      {at === 4 && [150, 172, 194].map(x => <g key={x}><rect x={x - 8} y="122" width="16" height="16" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><path d={`M${x + 8} 126 h3 a4 4 0 0 1 0 8 h-3`} fill="none" stroke={INK} strokeWidth="2" /></g>)}
      <path d="M16 140 H304 M36 140 V180 M284 140 V180" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <W x={160} y={206} size={11}>{["IBS can mean days off work", "Employers make reasonable adjustments", "Long-term means 12 months or more", "Access to Work: a grant, not a loan", "Don't skip meals; caffeine up to 3"][at]}</W>
    </svg>} />;
}

function DiaryPage(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const typeFill = (index: number) => at === 2 ? (index === 3 ? GOLD : index < 2 ? INK : WHITE) : WHITE;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diary" title="Patterns on paper" label="A food and symptom diary" credit="Illustration: Rehyn. The scale is the Bristol Stool Chart."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An open diary with food and symptom columns, and the stool scale">
      <path d="M160 34 C130 26, 60 24, 24 30 V176 C60 170, 130 172, 160 180 C190 172, 260 170, 296 176 V30 C260 24, 190 26, 160 34 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M160 34 V180" stroke={INK} strokeWidth="2" />
      <W x={58} y={54} size={10.5}>Food</W><W x={122} y={54} size={10.5}>Symptoms</W>
      {[72, 94, 116, 138, 160].map(y => <g key={y}><path d={`M36 ${y} H150`} stroke={LINE} strokeWidth="1.5" />
        <path d={`M40 ${y - 6} H${66 + (y % 3) * 6} M100 ${y - 6} H${126 + (y % 4) * 5}`} stroke={at === 0 || at === 1 ? INK : SOFT} strokeWidth="3" strokeLinecap="round" /></g>)}
      {Array.from({ length: 7 }, (_, index) => <g key={index}><rect x="172" y={42 + index * 18} width="28" height="15" rx="4" fill={typeFill(index)} stroke={INK} strokeWidth="1.5" />
        <W x={186} y={53.5 + index * 18} size={9.5} fill={at === 2 && index < 2 ? WHITE : TEXT}>{index + 1}</W></g>)}
      {at === 1 && <Clock x={252} y={80} r={20} hand={1} />}
      {at === 3 && [0, 1, 2, 3].map(index => <g key={index}><rect x={216 + (index % 2) * 36} y={58 + Math.floor(index / 2) * 40} width="30" height="30" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" /><Tick x={231 + (index % 2) * 36} y={73 + Math.floor(index / 2) * 40} /></g>)}
      {at === 4 && <><Person x={250} y={124} scale={1.2} /><W x={250} y={154} size={10.5}>GP</W></>}
      <W x={160} y={206} size={11}>{["Note what you eat and how you feel", "When, how often, how long", "Bristol chart: type 4 is the aim", "One change at a time", "Take it to your GP or dietitian"][at]}</W>
    </svg>} />;
}

export function GutPieceView({ piece, ...props }: { piece: GutPiece } & PieceProps) {
  switch (piece) {
    case "ckd-two-beans": return <TwoBeans {...props} />;
    case "ckd-egfr-scale": return <EgfrScale {...props} />;
    case "ckd-strain-load": return <StrainLoad {...props} />;
    case "ckd-sieve": return <Sieve {...props} />;
    case "ckd-pressure-loop": return <PressureLoop {...props} />;
    case "ckd-two-shelves": return <TwoShelves {...props} />;
    case "ckd-plate": return <KidneyPlate {...props} />;
    case "ckd-four-paths": return <FourPaths {...props} />;
    case "ckd-pause-box": return <PauseBox {...props} />;
    case "ckd-pharmacy-row": return <PharmacyRow {...props} />;
    case "ckd-epo-cells": return <EpoCells {...props} />;
    case "ckd-year-grid": return <YearGrid {...props} />;
    case "fl-fat-drops": return <FatDrops {...props} />;
    case "fl-four-cards": return <FourCards {...props} />;
    case "fl-stage-row": return <StageRow {...props} />;
    case "fl-two-roads": return <TwoRoads {...props} />;
    case "fl-waist-band": return <WaistBand {...props} />;
    case "fl-balanced-plate": return <BalancedPlate {...props} />;
    case "fl-week-blocks": return <WeekBlocks {...props} />;
    case "fl-hub": return <Hub {...props} />;
    case "fl-week-units": return <WeekUnits {...props} />;
    case "fl-intake": return <Intake {...props} />;
    case "fl-timeline": return <Timeline {...props} />;
    case "ibs-gut-brain": return <GutBrain {...props} />;
    case "ibs-three-lights": return <ThreeLights {...props} />;
    case "ibs-three-lanes": return <ThreeLanes {...props} />;
    case "ibs-flare-line": return <FlareLine {...props} />;
    case "ibs-day-rows": return <DayRows {...props} />;
    case "ibs-fodmap-steps": return <FodmapSteps {...props} />;
    case "ibs-symptom-shelf": return <SymptomShelf {...props} />;
    case "ibs-calm-wave": return <CalmWave {...props} />;
    case "ibs-world-circle": return <WorldCircle {...props} />;
    case "ibs-stress-loop": return <StressLoop {...props} />;
    case "ibs-desk": return <Desk {...props} />;
    case "ibs-diary-page": return <DiaryPage {...props} />;
  }
}
