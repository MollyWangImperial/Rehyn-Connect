import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { AUTOIMMUNE_PIECES, type AutoimmunePiece } from "@/content/autoimmune-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Chips, Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Giant cell arteritis, Sjögren's syndrome and Systemic sclerosis pages' own pieces (content/autoimmune-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isAutoimmunePiece = (piece: NewsPiece): piece is AutoimmunePiece => (AUTOIMMUNE_PIECES as readonly string[]).includes(piece);

// ---- Shared drawing parts -------------------------------------------------------------------------------------

/** A labelled rounded box centred on (x, y), as wide as its words unless `w` is given; `lit` boxes are filled. */
const Box = ({ x, y, text, w, lit = false, h = 26, size = 10 }: { x: number; y: number; text: string; w?: number; lit?: boolean; h?: number; size?: number }) => {
  const width = w ?? Math.round(text.length * size * 0.58 + 18);
  return <g><rect x={x - width / 2} y={y - h / 2} width={width} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
};
/** A column of boxes, one of them lit. */
const Stack = ({ x, y, items, gap = 38, lit = 0, size = 10 }: { x: number; y: number; items: string[]; gap?: number; lit?: number; size?: number }) =>
  <g>{items.map((text, index) => <Box key={text} x={x} y={y + index * gap} text={text} lit={index === lit} size={size} />)}</g>;
/** Lines of words, one under another. */
const Lines = ({ x, y, items, gap = 20, size = 10.5, anchor = "middle" }: { x: number; y: number; items: string[]; gap?: number; size?: number; anchor?: "start" | "middle" | "end" }) =>
  <g>{items.map((text, index) => <W key={text} x={x} y={y + index * gap} size={size} anchor={anchor}>{text}</W>)}</g>;
/** The caption under a picture. */
const Say = ({ children }: { children: ReactNode }) => <W x={160} y={205} size={11}>{children}</W>;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Zigzag = ({ x, y }: { x: number; y: number }) =>
  <path d={`M${x - 15} ${y} l5 -8 l5 8 l5 -8 l5 8 l5 -8`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const Sun = ({ x, y, r = 8 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${(x + (r + 3) * Math.cos(a)).toFixed(1)} ${(y + (r + 3) * Math.sin(a)).toFixed(1)} L${(x + (r + 7) * Math.cos(a)).toFixed(1)} ${(y + (r + 7) * Math.sin(a)).toFixed(1)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Drop = ({ x, y, s = 1, fill = INK }: { x: number; y: number; s?: number; fill?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M0 -10 C6 -2 8 2 8 5 A8 8 0 0 1 -8 5 C-8 2 -6 -2 0 -10 Z" fill={fill} />;
/** An eye seen from the front; `shade` darkens the top half, like a curtain over sight. */
const Eye = ({ x, y, s = 1, fill = WHITE, shade = false }: { x: number; y: number; s?: number; fill?: string; shade?: boolean }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}><path d="M-14 0 Q0 -11 14 0 Q0 11 -14 0 Z" fill={fill} stroke={INK} strokeWidth={2 / s} /><circle r="4.5" fill={INK} />{shade && <path d="M-14 0 Q0 -11 14 0 Z" fill={INK} opacity=".55" />}</g>;
const Face = ({ x, y, r = 13, fill = WHITE }: { x: number; y: number; r?: number; fill?: string }) =>
  <g><circle cx={x} cy={y} r={r} fill={fill} stroke={INK} strokeWidth="2" /><circle cx={x - r * 0.35} cy={y - r * 0.2} r={r * 0.1} fill={INK} /><circle cx={x + r * 0.35} cy={y - r * 0.2} r={r * 0.1} fill={INK} /><path d={`M${x - r * 0.4} ${y + r * 0.25} Q${x} ${y + r * 0.55} ${x + r * 0.4} ${y + r * 0.25}`} stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" /></g>;
const Germ = ({ x, y, r = 8 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 6 }, (_, index) => { const a = index * Math.PI / 3; return <path key={index} d={`M${(x + r * Math.cos(a)).toFixed(1)} ${(y + r * Math.sin(a)).toFixed(1)} L${(x + (r + 5) * Math.cos(a)).toFixed(1)} ${(y + (r + 5) * Math.sin(a)).toFixed(1)}`} stroke={INK} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={SOFT} stroke={INK} strokeWidth="2" /></g>;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 13} y={y - 22} width="26" height="44" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 8} y={y - 15} width="16" height="24" rx="2" fill={lit ? SOFT : TINT} /><circle cx={x} cy={y + 15} r="2.5" fill={lit ? WHITE : INK} /></g>;
/** A small blood tube, its cap at the top, centred on x from y to y + 46. */
const Tube = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 7} y={y + 4} width="14" height="40" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 5} y={y + 24} width="10" height="18" rx="5" fill={INK} /><rect x={x - 10} y={y} width="20" height="7" rx="2" fill={INK} /></g>;
const Spot = ({ x, y, r = 8, on = true, pulse = false }: { x: number; y: number; r?: number; on?: boolean; pulse?: boolean }) =>
  <circle cx={x} cy={y} r={r} fill={GOLD} opacity={on ? 0.9 : 0.2} className={pulse ? "lib-why-pulse" : undefined} />;
/** A simple standing figure, head centred on (x, y). Children are drawn in its own frame. */
const Figure = ({ x, y, s = 1, children, limbs = SOFT }: { x: number; y: number; s?: number; children?: ReactNode; limbs?: string }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <g stroke={limbs} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M0 16 V70" />
      <path d="M-22 26 H22 M-22 26 L-30 56 L-32 84 M22 26 L30 56 L32 84" />
      <path d="M-12 72 H12 M-12 72 L-16 108 L-18 138 M12 72 L16 108 L18 138" />
    </g>
    <circle r="13" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    {children}
  </g>;
const Shield = ({ x, y, s = 1, fill = INK, stroke = INK }: { x: number; y: number; s?: number; fill?: string; stroke?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M0 -24 L20 -16 V2 C20 16 10 24 0 28 C-10 24 -20 16 -20 2 V-16 Z" fill={fill} stroke={stroke} strokeWidth={2.5 / s} strokeLinejoin="round" />;
const Kidney = ({ x, y, s = 1, flip = false, fill = WHITE }: { x: number; y: number; s?: number; flip?: boolean; fill?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`} d="M-4 -32 C20 -36 32 -12 28 8 C25 28 6 36 -9 29 C-19 24 -10 11 -14 2 C-18 -7 -30 -26 -4 -32 Z" fill={fill} stroke={INK} strokeWidth={3 / s} strokeLinejoin="round" />;
const Bone = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    {[[-14, -5], [-14, 5], [14, -5], [14, 5]].map(([cx, cy]) => <circle key={`${cx} ${cy}`} cx={cx} cy={cy} r="6" fill={WHITE} stroke={INK} strokeWidth={2 / s} />)}
    <rect x="-15" y="-4.5" width="30" height="9" fill={WHITE} />
    <path d="M-14 -4.5 H14 M-14 4.5 H14" stroke={INK} strokeWidth={2 / s} />
  </g>;
/** A tooth, centred on (x, y). */
const Tooth = ({ x, y, s = 1, fill = WHITE, stroke = INK }: { x: number; y: number; s?: number; fill?: string; stroke?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M-20 -22 C-26 -22 -28 -14 -28 -6 C-28 8 -22 14 -20 30 C-18 40 -10 40 -8 30 L-4 14 C-2 10 2 10 4 14 L8 30 C10 40 18 40 20 30 C22 14 28 8 28 -6 C28 -14 26 -22 20 -22 C12 -22 8 -18 0 -18 C-8 -18 -12 -22 -20 -22 Z" fill={fill} stroke={stroke} strokeWidth={3 / s} strokeLinejoin="round" />;
/** Two lungs, centred on (x, y). */
const Lungs = ({ x, y, s = 1, fill = TINT, stroke = INK }: { x: number; y: number; s?: number; fill?: string; stroke?: string }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`} fill={fill} stroke={stroke} strokeWidth={2.5 / s} strokeLinejoin="round">
    <path d="M-4 -18 C-10 -20 -24 -6 -24 12 C-24 22 -14 24 -6 20 C-4 10 -4 -4 -4 -18 Z" />
    <path d="M4 -18 C10 -20 24 -6 24 12 C24 22 14 24 6 20 C4 10 4 -4 4 -18 Z" />
    <path d="M0 -26 V-12" fill="none" />
  </g>;
const Snowflake = ({ x, y, r = 16 }: { x: number; y: number; r?: number }) =>
  <g stroke={INK} strokeWidth="3" strokeLinecap="round">{[0, 60, 120].map(a => <g key={a} transform={`translate(${x} ${y}) rotate(${a})`}><path d={`M0 ${-r} V${r} M-5 ${-r + 5} L0 ${-r + 10} L5 ${-r + 5} M-5 ${r - 5} L0 ${r - 10} L5 ${r - 5}`} fill="none" /></g>)}</g>;
const Briefcase = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 10} ${y - 16} V${y - 24} H${x + 10} V${y - 16}`} stroke={INK} strokeWidth="3" fill="none" /><rect x={x - 26} y={y - 16} width="52" height="34" rx="5" fill={INK} /><path d={`M${x - 26} ${y - 2} H${x + 26}`} stroke={SOFT} strokeWidth="2" /></g>;
/** A row of seven day boxes, `lit` filled. */
const WeekRow = ({ x, y, lit }: { x: number; y: number; lit: number }) =>
  <g>{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}>
    <rect x={x + index * 22} y={y} width="18" height="20" rx="4" fill={index === lit ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
    <W x={x + index * 22 + 9} y={y + 14} size={10}>{day}</W>
  </g>)}</g>;
/** A row of icon tiles with labels, `on` saying which are lit. */
const Tiles = ({ xs, y, labels, on, children }: { xs: number[]; y: number; labels: string[]; on: (index: number) => boolean; children: (x: number, index: number) => ReactNode }) =>
  <g>{xs.map((x, index) => <g key={labels[index]} opacity={on(index) ? 1 : 0.45}>
    <rect x={x - 31} y={y} width="62" height="58" rx="12" fill={on(index) ? TINT : WHITE} stroke={on(index) ? GOLD : INK} strokeWidth={on(index) ? 3.5 : 2} />
    {children(x, index)}
    <W x={x} y={y + 76} size={10.5}>{labels[index]}</W>
  </g>)}</g>;

// ==== Giant cell arteritis ===================================================================================

const HEAD = "M72 186 C72 166 60 156 58 134 C54 100 62 64 94 46 C122 30 162 38 174 68 C180 82 178 92 180 100 L190 116 C192 120 188 122 184 122 C184 130 186 136 182 140 C178 144 178 150 174 154 C168 160 156 160 148 158 L146 186 Z";

function GcaTempleArtery(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const boxes = [["Giant cell arteritis", "Large inflammatory cells", "Arteries swell"], ["Head and neck", "Upper limbs", "The aorta"], [], ["Autoimmune", "Cause not yet known", "Nothing you did"], ["Steroid tablets", "Treated urgently", "Very treatable early"]][at];
  const caps = ["Temple arteries become inflamed", "Head and neck; sometimes the aorta", "Mostly over 50; peak age 60 to 80", "The immune system attacks arteries", "Steroids usually prevent complications"];
  const hot = at <= 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Inflamed arteries at the temples" label="What giant cell arteritis is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head from the side with the artery at the temple traced in gold, beside notes on giant cell arteritis">
      <g transform="translate(-16 4) scale(0.8)">
        <path d={HEAD} fill={WHITE} stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
        <ellipse cx="116" cy="110" rx="9" ry="14" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M156 96 Q164 90 172 96 Q164 102 156 96 Z" fill={INK} />
        <path d="M118 94 C110 84 124 78 116 68 C110 60 120 56 116 50 M116 68 C126 62 132 58 140 50" stroke={hot ? GOLD : SOFT} strokeWidth={at === 0 ? 7 : 5} fill="none" strokeLinecap="round" className={!still && at === 0 ? "lib-why-pulse" : undefined} />
        {at === 1 && <path d="M118 94 C114 120 112 150 110 184" stroke={GOLD} strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="2 7" />}
        {at === 4 && <circle cx="122" cy="72" r="22" fill="none" stroke={GOLD} strokeWidth="3" />}
      </g>
      {at === 1 && <path d="M64 168 C64 152 96 150 104 166" stroke={GOLD} strokeWidth="5" fill="none" strokeLinecap="round" />}
      {boxes.map((text, index) => <Box key={text} x={232} y={52 + index * 42} text={text} lit={index === 0} />)}
      {at === 2 && <g>
        <rect x="162" y="56" width="136" height="16" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x="185" y="56" width="113" height="16" rx="8" fill={SOFT} />
        <rect x="208" y="56" width="46" height="16" rx="4" fill={GOLD} />
        <W x={185} y={46} size={10.5}>50</W><W x={208} y={46} size={10.5}>60</W><W x={254} y={46} size={10.5}>80</W>
        <W x={230} y={92} size={10}>Age</W>
        <Lines x={230} y={122} items={["Peak age: 60 to 80", "More common in women", "Northern European descent"]} />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GcaThreeSigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const notes = [["New, unlike any before", "May not respond to usual painkillers"], ["Brushing or shaving may hurt", "Temples may feel thickened"], ["Builds as you chew; eases with rest", "Often mistaken for a dental problem"], ["Double, blurred or dimmed vision", "Tiredness, night sweats, weight loss"], []][at];
  const caps = ["A new, often severe headache", "Scalp tender to brush or shave", "Jaw pain that builds as you chew", "Sight changes, and feeling unwell", "Do not wait to see if it improves"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="A headache unlike any before" label="Symptoms of giant cell arteritis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four tiles for the signs of giant cell arteritis: a new headache, a tender scalp, jaw pain when chewing and sight changes">
      <Tiles xs={[46, 122, 198, 274]} y={18} labels={["Headache", "Scalp", "Jaw", "Sight"]} on={index => at === 4 || index === at}>
        {(x, index) => index === 0 ? <g><circle cx={x} cy={56} r="13" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Zigzag x={x} y={36} /></g>
          : index === 1 ? <g><rect x={x - 20} y={36} width="26" height="13" rx="4" fill={INK} /><path d={`M${x + 6} 42 H${x + 20}`} stroke={INK} strokeWidth="5" strokeLinecap="round" /><path d={`M${x - 16} 49 v8 M${x - 10} 49 v8 M${x - 4} 49 v8 M${x + 2} 49 v8`} stroke={INK} strokeWidth="2" /><path d={`M${x - 20} 64 Q${x - 6} 58 ${x + 8} 64`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" /></g>
          : index === 2 ? <g><path d={`M${x - 15} 34 Q${x - 15} 64 ${x} 64 Q${x + 15} 64 ${x + 15} 34`} stroke={INK} strokeWidth="3" fill={WHITE} /><path d={`M${x - 9} 40 v5 M${x - 3} 42 v5 M${x + 3} 42 v5 M${x + 9} 40 v5`} stroke={INK} strokeWidth="3" strokeLinecap="round" /><path d={`M${x - 20} 68 Q${x} 76 ${x + 20} 68`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" /></g>
          : <Eye x={x} y={48} s={1.3} shade={at === 3} />}
      </Tiles>
      <Lines x={160} y={136} items={notes} />
      {at === 4 && <><Box x={160} y={134} text="Urgent GP or NHS 111" lit /><Box x={160} y={168} text="Sight or jaw pain? Doctor straight away" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GcaSightToday(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const boxes = [["Blurred or dimmed", "Double vision", "Sight going dark"], ["Doctor straight away", "Cannot be seen? A&E", "Sudden loss: A&E or 999"], ["New head sensation", "Jaw pain when eating", "Urgent GP or NHS 111"], ["Treated before confirmed", "Same-day eye specialist", "Steroids by drip if needed"]][at];
  const caps = ["The eye's blood supply may be at risk", "Same day, even if only a few minutes", "Head or jaw symptoms: same day too", "Immediate treatment is so important"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Urgent" title="Sight changes: act the same day" label="If your sight changes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An eye with a darkening curtain over its upper half, a clock for the same day, and where to get help">
      <Eye x={80} y={72} s={3} shade={at <= 1} />
      {at === 0 && <W x={80} y={136} size={10.5}>Usually starts in one eye</W>}
      {at === 1 && <><Clock x={80} y={140} r={18} hand={1.2} /><W x={80} y={178} size={10.5}>The same day</W></>}
      {at === 2 && <Zigzag x={80} y={140} />}
      {at === 3 && <><Pill x={80} y={142} /><W x={80} y={176} size={10.5}>Prompt steroids</W></>}
      <Stack x={218} y={44} items={boxes} lit={at === 0 ? 0 : 2} />
      {at === 1 && <W x={218} y={156} size={10.5}>Do not drive yourself</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GcaTestTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lines = [["Asks about symptoms, examines temples", "Blood tests, then a specialist", "Treatment starts straight away"], ["Looks for inflammation", "Taken before steroids start", "Results not needed before treatment"], ["Ultrasound of the temple arteries", "Sometimes the armpit too", "Chest X-ray or CT for other causes"], ["Small piece of artery, local anaesthetic", "Wound about 3 to 4cm, near the hairline", "Follow-up about a week later"], ["Rheumatologist or eye specialist", "Neurologist or acute physician", "Tests are done quickly"]][at];
  const caps = ["A GP examines, tests and refers", "Normal results make it less likely", "Ultrasound can detect swollen vessels", "You can wash your hair with care", "Probably an urgent referral"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diagnosis" title="Blood test, scan, biopsy" label="Tests and diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four tiles for the steps to diagnosis: a GP, a blood test tube, an ultrasound probe and a small dressing after a biopsy">
      <Tiles xs={[46, 122, 198, 274]} y={16} labels={["GP", "Blood tests", "Scans", "Biopsy"]} on={index => at === 4 || index === at}>
        {(x, index) => index === 0 ? <Person x={x} y={62} scale={0.8} />
          : index === 1 ? <Tube x={x} y={22} />
          : index === 2 ? <g><rect x={x - 8} y={24} width="16" height="28" rx="5" fill={INK} /><path d={`M${x - 12} 54 H${x + 12}`} stroke={INK} strokeWidth="4" strokeLinecap="round" /><path d={`M${x - 10} 60 Q${x} 66 ${x + 10} 60 M${x - 14} 66 Q${x} 74 ${x + 14} 66`} stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" /></g>
          : <g><rect x={x - 18} y={36} width="36" height="18" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" transform={`rotate(-20 ${x} 45)`} /><rect x={x - 8} y={40} width="16" height="10" rx="2" fill={SOFT} transform={`rotate(-20 ${x} 45)`} /></g>}
      </Tiles>
      <Lines x={160} y={130} items={lines} gap={19} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GcaShieldDose(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["It usually works within a few days", "Started before it is confirmed", "Usually 40mg to 60mg a day", "Once a day, with breakfast", "Only stop if your doctor says so"];
  const tablets = [[-21, -5], [-7, -5], [7, -5], [21, -5], [-21, 7], [-7, 7], [7, 7], [21, 7]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Prednisolone" title="Steroids first, to protect sight" label="High-dose steroids" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A shield over an eye beside prednisolone tablets: steroids are started straight away to protect sight">
      <Shield x={74} y={88} s={2.4} fill={TINT} stroke={at === 1 ? GOLD : INK} />
      <Eye x={74} y={82} s={1.5} />
      <W x={74} y={176} size={10.5}>Protecting sight</W>
      {at === 0 && <g><Pill x={226} y={50} /><Lines x={226} y={90} items={["Prednisolone", "Usually works within days", "Not an anabolic steroid"]} gap={22} /></g>}
      {at === 1 && <Stack x={226} y={52} items={["Straight away", "Before it is confirmed", "Blood tests first"]} />}
      {at === 2 && <g>
        <W x={170} y={52} size={10.5} anchor="start">40mg a day</W>
        <rect x="170" y="60" width="80" height="16" rx="6" fill={INK} />
        <W x={170} y={102} size={10.5} anchor="start">60mg with eye symptoms</W>
        <rect x="170" y="110" width="120" height="16" rx="6" fill={GOLD} />
        <W x={170} y={156} size={10.5} anchor="start">Usually for 3 to 4 weeks</W>
      </g>}
      {at === 3 && <g>
        <Sun x={292} y={34} />
        <ellipse cx="228" cy="80" rx="56" ry="24" fill={WHITE} stroke={INK} strokeWidth="3" />
        <ellipse cx="228" cy="80" rx="42" ry="16" fill="none" stroke={LINE} strokeWidth="2" />
        {tablets.map(([dx, dy]) => <circle key={`${dx} ${dy}`} cx={228 + dx} cy={80 + dy} r="5" fill={INK} />)}
        <Lines x={228} y={130} items={["For 40mg: maybe 8 tablets", "No real liquorice"]} />
      </g>}
      {at === 4 && <g><Pill x={226} y={52} /><Cross x={226} y={52} s={20} /><Stack x={226} y={104} items={["Do not stop suddenly", "Could make you very ill"]} /></g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GcaLongTaper(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const counts = [8, 8, 6, 4, 3, 2, 1];
  const note = [["A high dose for a few weeks,", "then a lower dose, maybe years"], ["Usually 1 to 3 years", "Mostly on a low dose"], ["From about 10mg:", "1 to 2mg at a time"], ["Some aches may return", "Give it a few days"], ["Do not stop or change", "the dose yourself"]][at];
  const caps = ["A high dose, then a lower one", "Usually 1 to 3 years to come off", "From about 10mg, very gentle steps", "Some aches return; give it a few days", "Your body needs time to make cortisol"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Reducing the dose" title="The long, gentle step down" label="Reducing the dose" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Stacks of tablets getting smaller over time, from a high starting dose to a low dose over years">
      {at === 0 && <rect x="14" y="50" width="80" height="104" rx="8" fill="none" stroke={GOLD} strokeWidth="3" />}
      {at === 2 && <rect x="174" y="108" width="120" height="46" rx="8" fill="none" stroke={GOLD} strokeWidth="3" />}
      {counts.map((count, column) => <g key={column}>{Array.from({ length: count }, (_, row) => <rect key={row} x={20 + column * 40} y={140 - row * 12} width="28" height="9" rx="4.5" fill={INK} opacity={at === 2 && column < 4 ? 0.4 : 1} />)}</g>)}
      <path d="M16 160 H302" stroke={at === 1 ? GOLD : LINE} strokeWidth={at === 1 ? 5 : 3} strokeLinecap="round" />
      <path d="M94 154 V166" stroke={INK} strokeWidth="2.5" />
      <W x={34} y={178} size={10}>Start</W>
      <W x={104} y={178} size={10}>3 to 4 weeks</W>
      <W x={268} y={178} size={10}>1 to 3 years</W>
      {at === 3 && <Zigzag x={194} y={100} />}
      {at === 4 && <><path d="M80 52 V150" stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" /><Cross x={80} y={100} s={12} /></>}
      <Lines x={226} y={34} items={note} gap={18} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GcaHelperMedicines(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["They can help lower the steroid dose", "Tocilizumab: a weekly injection", "Methotrexate: once a week, same day", "Aspirin, stomach and bone protection", "Trials: understand them fully first"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Other medicines" title="Helpers that lower the steroid dose" label="Other medicines" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A prednisolone tablet with other medicines around it: a weekly injection, weekly tablets, and medicines that protect the heart, stomach and bones">
      <g transform="translate(56 58) scale(1.5)"><Pill x={0} y={0} /></g>
      <W x={56} y={92} size={10.5}>Prednisolone</W>
      {at === 0 && <g><Arrow d="M56 106 V146" head="M49 139 L56 146 L63 139" /><W x={56} y={166} size={10.5}>Less steroid</W>
        <Stack x={212} y={50} items={["If symptoms come back", "If steroids do not help", "If needed for a long time"]} gap={40} lit={-1} /></g>}
      {at === 1 && <g>
        <g transform="rotate(-20 214 56)"><rect x="174" y="48" width="70" height="16" rx="6" fill={INK} /><rect x="244" y="52" width="14" height="8" rx="2" fill={SOFT} /><path d="M258 56 H270" stroke={INK} strokeWidth="2" /></g>
        <WeekRow x={137} y={94} lit={0} />
        <Lines x={214} y={140} items={["Once a week, for up to one year", "Blood test every four weeks"]} />
      </g>}
      {at === 2 && <g>
        <Pill x={214} y={56} fill={SOFT} />
        <WeekRow x={137} y={86} lit={2} />
        <Lines x={214} y={136} items={["Taken the same day each week", "Up to 12 weeks to notice"]} />
      </g>}
      {at === 3 && <g>
        {[150, 210, 270].map((x, index) => <g key={x}>
          <circle cx={x} cy={64} r="24" fill={TINT} stroke={INK} strokeWidth="2" />
          {index === 0 && <HeartShape x={x} y={64} size={28} width={2.5} />}
          {index === 1 && <path d={`M${x - 6} 48 C${x - 6} 58 ${x - 14} 58 ${x - 14} 68 C${x - 14} 80 ${x + 12} 82 ${x + 12} 66 C${x + 12} 58 ${x + 2} 60 ${x + 2} 48`} fill={WHITE} stroke={INK} strokeWidth="2.5" />}
          {index === 2 && <Bone x={x} y={64} s={0.65} />}
          <W x={x} y={106} size={10}>{["Aspirin", "Stomach", "Bones"][index]}</W>
        </g>)}
        <Lines x={210} y={140} items={["Low-dose aspirin, if safe for you", "PPIs and bisphosphonates"]} />
      </g>}
      {at === 4 && <g>
        <rect x="190" y="34" width="48" height="62" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="204" y="28" width="20" height="10" rx="3" fill={INK} />
        <path d="M198 52 H230 M198 64 H230 M198 76 H220" stroke={SOFT} strokeWidth="3" strokeLinecap="round" />
        <Lines x={214} y={124} items={["A clinical trial?", "Talk it through with your doctor"]} />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GcaBalanceScale(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const notes = ["Higher dose, longer use: more risk", "Higher dose: more intense changes", "700 to 1,200mg calcium a day", "Optometrist every 12 months", "Take with food; no crash diets"];
  const caps = ["Benefits far outweigh the risks", "Mood changes? Talk to a doctor or 111", "Over three months: protect your bones", "Checks for sugar, pressure and eyes", "Chickenpox contact? Tell your doctor"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Side effects" title="Weighing benefits, watching for side effects" label="Side effects and your bones" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balance tipped towards protected sight, with side effects to watch on the lighter side">
      <path d="M160 64 V150" stroke={INK} strokeWidth="4" />
      <path d="M136 160 L160 140 L184 160 Z" fill={INK} />
      <path d="M74 78 L246 50" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <circle cx="160" cy="64" r="5" fill={GOLD} />
      <path d="M74 78 L50 108 M74 78 L98 108 M246 50 L222 80 M246 50 L270 80" stroke={LINE} strokeWidth="2" />
      <path d="M44 108 H104 Q74 128 44 108 Z" fill={at === 0 ? GOLD : SOFT} stroke={INK} strokeWidth="2" />
      <path d="M216 80 H276 Q246 100 216 80 Z" fill={at === 0 ? SOFT : GOLD} stroke={INK} strokeWidth="2" />
      <Shield x={74} y={92} s={0.55} fill={TINT} />
      <Eye x={74} y={90} s={0.6} />
      <g>
        {at === 0 && <Pill x={246} y={68} />}
        {at === 1 && <Face x={246} y={66} r={12} />}
        {at === 2 && <Bone x={246} y={68} s={0.7} />}
        {at === 3 && <><Drop x={234} y={68} /><Eye x={258} y={68} s={0.7} /></>}
        {at === 4 && <Germ x={246} y={66} r={7} />}
      </g>
      <W x={74} y={144} size={10.5}>Benefits</W>
      <W x={246} y={118} size={10.5}>Side effects</W>
      <W x={160} y={182} size={10.5}>{notes[at]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GcaLoopPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const path = "M16 172 C70 172 100 146 130 132 C166 116 182 84 160 74 C138 64 128 98 154 112 C190 130 240 80 304 64";
  const lines = [["Inflammation returns", "The dose may go up"], ["Formally diagnosed", "The tapering plan changes"], ["Give it a few days", "Paracetamol? Ask your doctor"], ["Methotrexate or tocilizumab", "More tests and scans"], ["Do not wait to see", "if it passes"]][at];
  const caps = ["Most common in the first 18 months", "A rheumatologist should assess it", "Not every ache is a relapse", "Methotrexate or tocilizumab may help", "Head, jaw or sight? GP urgently or A&E"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Relapse" title="When symptoms come back" label="If symptoms come back" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A winding path with a small loop back where symptoms return, then carrying on forward">
      <path d={path} stroke={LINE} strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d={path} stroke={WHITE} strokeWidth="2" strokeDasharray="6 8" fill="none" />
      <circle cx="160" cy="74" r="7" fill={at === 0 ? GOLD : SOFT} stroke={WHITE} strokeWidth="2" />
      {at === 0 && <W x={190} y={76} size={10.5} anchor="start">First 18 months</W>}
      <Lines x={94} y={30} items={lines} gap={18} />
      {at === 1 && <><Person x={252} y={146} /><W x={252} y={182} size={10.5}>Rheumatologist</W></>}
      {at === 2 && <Zigzag x={252} y={150} />}
      {at === 3 && <><Pill x={232} y={150} /><Pill x={276} y={150} fill={SOFT} /></>}
      {at === 4 && <Box x={248} y={150} text="GP urgently or A&E" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GcaTwoCircles(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const lines = [["PMR: often worse in the morning", "Often people have both"], ["PMR: up to 1 in 5 develop GCA", "GCA: up to half have PMR symptoms"], ["Not responding to steroids?", "Ask your GP about a referral"], ["PMR: usually 15mg a day to start", "GCA: 40mg to 60mg a day"]][at];
  const caps = ["Two closely related conditions", "GCA may follow PMR, even years later", "PMR not responding? Ask about referral", "GCA needs immediate medical attention"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Polymyalgia" title="Two conditions, closely linked" label="The link with polymyalgia rheumatica" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two overlapping circles, one for polymyalgia rheumatica and one for giant cell arteritis, with the overlap shaded">
      <defs><clipPath id="gca-venn-left"><circle cx="118" cy="78" r="56" /></clipPath></defs>
      <circle cx="118" cy="78" r="56" fill={WHITE} />
      <circle cx="202" cy="78" r="56" fill={WHITE} stroke={at === 3 ? GOLD : INK} strokeWidth={at === 3 ? 4 : 2.5} />
      <circle cx="202" cy="78" r="56" fill={at === 1 ? GOLD : SOFT} opacity={at === 1 ? 0.8 : 0.6} clipPath="url(#gca-venn-left)" />
      <circle cx="118" cy="78" r="56" fill="none" stroke={at === 2 ? GOLD : INK} strokeWidth={at === 2 ? 4 : 2.5} />
      <W x={103} y={74} size={15}>PMR</W>
      <W x={103} y={94} size={10}>Shoulders, hips</W>
      <W x={217} y={74} size={15}>GCA</W>
      <W x={217} y={94} size={10}>Head, jaw, sight</W>
      <Lines x={160} y={160} items={lines} gap={19} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** A small steroid card with a coloured band and its title. */
const SteroidCard = ({ x, y, title, band, bandText, lit }: { x: number; y: number; title: string; band: string; bandText: string; lit: boolean }) =>
  <g transform={`translate(${x} ${y})`}>
    <rect width="118" height="72" rx="9" fill={WHITE} stroke={lit ? GOLD : INK} strokeWidth={lit ? 4 : 2.5} />
    <path d="M0 9 A9 9 0 0 1 9 0 H109 A9 9 0 0 1 118 9 V22 H0 Z" fill={band} />
    <W x={59} y={15} size={10} fill={bandText}>{title}</W>
    <path d="M12 36 H90 M12 48 H104" stroke={LINE} strokeWidth="5" strokeLinecap="round" />
  </g>;

function GcaCardWallet(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Over 3 weeks, or over 40mg a day", "Above 15mg for 15 days: less cortisol", "Very sick or dizzy? Doctor or 111 now", "Show it before any treatment"];
  const blue = <SteroidCard x={20} y={28} title="Steroid card" band={INK} bandText={WHITE} lit={at === 0} />;
  const red = <SteroidCard x={42} y={50} title="Emergency card" band={GOLD} bandText={TEXT} lit={at === 1} />;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Steroid cards" title="A card to carry, and help when ill" label="Steroid cards and being ill" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A blue steroid card and a red steroid emergency card tucked in a wallet, and when they matter">
      {at === 1 ? <>{blue}{red}</> : <>{red}{blue}</>}
      <rect x="10" y="112" width="160" height="62" rx="12" fill={SOFT} stroke={INK} strokeWidth="2.5" />
      <path d="M10 130 H170" stroke={INK} strokeWidth="2" opacity=".4" />
      {at === 0 && <><Stack x={240} y={46} items={["Your dose", "How long", "Your doctor"]} lit={-1} /><W x={240} y={156} size={10.5}>Keep it updated</W></>}
      {at === 1 && <Lines x={240} y={56} items={["Adrenal glands may", "make less cortisol", "Ask if you need", "the red card"]} gap={22} />}
      {at === 2 && <g><Germ x={240} y={46} r={9} /><Lines x={240} y={90} items={["Very sick or dizzy?", "Weak or very tired?"]} /><Box x={240} y={148} text="Doctor or 111 now" lit /></g>}
      {at === 3 && <><Stack x={240} y={46} items={["Dentist", "Surgery", "Emergency"]} lit={-1} /><W x={240} y={156} size={10.5}>Show your card</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GcaHelplineTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lines = [["Many feel overwhelmed at first", "Many fear sight loss or a relapse"], ["Helpline: 0300 111 5090", "Monday to Friday, 9am to 5pm", "Local groups, Zoom and a forum"], ["You can usually keep working", "Part-time for a while may help", "Access to Work: a grant"], ["Think of your earlier level,", "then half of that", "Do not smoke"], ["Do not drive if sight is affected", "Keep a symptom diary", "Be kind to yourself"]][at];
  const caps = ["Feeling overwhelmed at first is common", "Volunteers who have been there", "Adjustments can help you keep working", "Think of half your earlier activity", "You could not have avoided it"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You do not face it alone" label="Support and everyday life" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five calm tiles: feelings, a helpline phone, work, gentle activity and looking after yourself">
      {["Feelings", "Helpline", "Work", "Activity", "Yourself"].map((label, index) => {
        const x = 34 + index * 63, lit = index === at;
        return <g key={label} opacity={lit ? 1 : 0.45}>
          <rect x={x - 27} y={16} width="54" height="54" rx="12" fill={lit ? TINT : WHITE} stroke={lit ? GOLD : INK} strokeWidth={lit ? 3.5 : 2} />
          {index === 0 && <Face x={x} y={43} r={14} />}
          {index === 1 && <g transform={`translate(${x} 43) scale(0.8) translate(${-x} -43)`}><Phone x={x} y={43} lit={lit} /></g>}
          {index === 2 && <g transform={`translate(${x} 47) scale(0.6) translate(${-x} -47)`}><Briefcase x={x} y={47} /></g>}
          {index === 3 && <g><rect x={x - 18} y={32} width="36" height="8" rx="4" fill={SOFT} /><rect x={x - 18} y={46} width="18" height="8" rx="4" fill={INK} /></g>}
          {index === 4 && <HeartShape x={x} y={44} size={30} fill={lit ? GOLD : WHITE} width={2.5} />}
          <W x={x} y={88} size={10}>{label}</W>
        </g>;
      })}
      <Lines x={160} y={126} items={lines} gap={20} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Sjögren's syndrome =====================================================================================

function SjoMoistGlands(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const glands = at <= 1 ? GOLD : SOFT;
  const caps = ["Glands for tears and spit stop working", "Eyes, mouth and more can become dry", "On its own, or with another condition", "Mostly women aged between 40 and 60", "Treatments help manage the symptoms"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When the immune system dries things up" label="What Sjögren's syndrome is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A face with the tear glands above the eyes and the saliva glands in the cheeks and under the jaw highlighted">
      <circle cx="86" cy="96" r="58" fill={WHITE} stroke={INK} strokeWidth="3" />
      <Eye x={64} y={88} s={0.85} />
      <Eye x={108} y={88} s={0.85} />
      {[[50, 72, -20], [122, 72, 20]].map(([x, y, a]) => <ellipse key={x} cx={x} cy={y} rx="9" ry="5" transform={`rotate(${a} ${x} ${y})`} fill={glands} className={!still && at === 0 ? "lib-why-pulse" : undefined} />)}
      {[[40, 114], [132, 114]].map(([x, y]) => <ellipse key={x} cx={x} cy={y} rx="7" ry="11" fill={glands} />)}
      {[[68, 146], [104, 146]].map(([x, y]) => <ellipse key={x} cx={x} cy={y} rx="8" ry="5" fill={glands} />)}
      <path d="M72 124 Q86 132 100 124" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {at === 0 && <Stack x={232} y={52} items={["Autoimmune", "Tears and spit", "Under recognised"]} gap={40} />}
      {at === 1 && <Stack x={232} y={52} items={["Eyes and mouth", "Skin and throat", "Gut and vagina"]} gap={40} />}
      {at === 2 && <g><Stack x={232} y={60} items={["Primary: on its own", "Secondary: with another"]} gap={44} lit={-1} /><W x={232} y={146} size={10.5}>Such as RA, lupus or SSc</W></g>}
      {at === 3 && <g><W x={232} y={66} size={20}>9 in 10</W><W x={232} y={88} size={10.5}>are women</W><Lines x={232} y={126} items={["Most often diagnosed", "between 40 and 60"]} gap={18} /></g>}
      {at === 4 && <Stack x={232} y={52} items={["No cure yet", "Treatments ease symptoms", "Usual activities"]} gap={40} lit={1} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SjoBodyLabels(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots = [[[-5, -3], [0, 6], [-22, 26], [22, 26], [-16, 108], [16, 108]], [[-5, -3], [5, -3]], [[0, 6], [-8, 14], [8, 14]], [[-22, 26], [22, 26], [-30, 56], [30, 56], [-16, 108], [16, 108]], []][at];
  const left = [["Dry eyes", "Dry mouth"], ["Gritty or sore", "Sticky eyes"], ["Mouth ulcers", "Hard to swallow"], ["Fatigue", "Low mood", "Dry skin"], []][at];
  const right = [["Aches", "Tiredness"], ["Bright lights", "Blurred vision"], ["Hoarse voice", "Swollen glands"], ["Painful joints", "Headaches", "Acid reflux"], []][at];
  const caps = ["Dry eyes, dry mouth, aches, tiredness", "Eyes may feel gritty or sore", "Dry mouth, ulcers, hard to swallow", "Fatigue and joint pain are common", "Symptoms flare up and settle down"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Dry eyes, dry mouth, and much more" label="Symptoms of Sjögren's" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A standing figure with the eyes, mouth and joints highlighted, labelled with the symptoms of Sjögren's">
      <g opacity={at === 4 ? 0.4 : 1}>
        <Figure x={at === 4 ? 70 : 160} y={34} s={0.86}>{spots.map(([x, y]) => <Spot key={`${x} ${y}`} x={x} y={y} r={at === 1 ? 4 : 6} />)}</Figure>
      </g>
      {left.map((text, index) => <Box key={text} x={60} y={50 + index * 40} text={text} lit={index === 0} />)}
      {right.map((text, index) => <Box key={text} x={260} y={50 + index * 40} text={text} />)}
      {at === 4 && <g>
        <path d="M150 112 H186 C202 112 206 52 222 52 C238 52 242 112 258 112 H306" stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" />
        <circle cx="222" cy="52" r="6" fill={GOLD} />
        <W x={222} y={40} size={10.5}>Flare-up</W>
        <W x={282} y={130} size={10.5}>Remission</W>
        <Box x={196} y={164} text="Track symptoms in a diary or app" />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SjoTestClues(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = (index: number) => (at === 2 && index < 2) || (at === 3 && index >= 2);
  const lines = [[], [], ["Paper in the eye's corner: 5 minutes", "Spit into a pot: 5 minutes", "Eye dye and a microscope"], ["Inflammation, anti-Ro and anti-La", "About two-thirds have one or both", "Ultrasound, X-ray or a lip biopsy"], ["A week before: list your symptoms", "Write down your questions", "Bring someone with you"]][at];
  const caps = ["Diagnosis can take around 10 years", "Rheumatologist, eye and mouth experts", "Tear and spit tests: 5 minutes each", "Blood tests, scans and a lip biopsy", "List symptoms in order; bring someone"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Diagnosis" title="Putting the clues together" label="Tests and diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four clues to a diagnosis: a tear test strip, a spit pot, a blood tube and the lower lip">
      <Tiles xs={[46, 122, 198, 274]} y={14} labels={["Tears", "Spit", "Blood", "Lip"]} on={lit}>
        {(x, index) => index === 0 ? <g><rect x={x - 6} y={22} width="12" height="42" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x={x - 5} y={44} width="10" height="19" fill={GOLD} /></g>
          : index === 1 ? <g><path d={`M${x - 16} 32 H${x + 16} L${x + 12} 64 H${x - 12} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><rect x={x - 11} y={52} width="22" height="11" fill={SOFT} /></g>
          : index === 2 ? <Tube x={x} y={20} />
          : <path d={`M${x - 20} 44 Q${x - 10} 32 ${x} 39 Q${x + 10} 32 ${x + 20} 44 Q${x} 62 ${x - 20} 44 Z`} fill={SOFT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />}
      </Tiles>
      {at === 0 && <g>
        <rect x="40" y="122" width="240" height="12" rx="6" fill={GOLD} opacity=".7" />
        <W x={40} y={114} size={10} anchor="start">Symptoms</W>
        <W x={280} y={114} size={10} anchor="end">Diagnosis</W>
        <W x={160} y={156} size={11}>Around 10 years, on average</W>
        <W x={160} y={176} size={10.5}>Symptoms mimic other conditions</W>
      </g>}
      {at === 1 && <g>
        {([["GP", 66], ["Rheumatologist", 160], ["Eye and mouth", 254]] as const).map(([label, x], index) => <g key={label}>
          <Person x={x} y={146} scale={0.75} fill={index === 1 ? INK : SOFT} />
          <W x={x} y={176} size={10.5}>{label}</W>
        </g>)}
      </g>}
      <Lines x={160} y={128} items={lines} gap={20} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SjoBeyondDryness(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots = [[], [[-22, 26], [22, 26], [-16, 108], [16, 108]], [[-32, 84], [32, 84], [-18, 138], [18, 138]], [[-7, 40], [7, 40], [0, 18], [0, 58]], [[-7, 16], [7, 16], [-18, 32], [18, 32], [-10, 76], [10, 76]]][at];
  const boxes = [[], ["Painful, swollen joints", "Inflammatory arthritis", "Rheumatoid arthritis"], ["Numbness, tingling", "Raynaud's: up to half", "Keep warm, keep active"], ["Lungs: breathless, cough", "Gut: IBS-like symptoms", "Thyroid: up to 1 in 5"], ["Glands that stay swollen", "Fever or night sweats", "Weight loss: see a GP"]][at];
  const caps = ["Over 1 in 3 have problems elsewhere", "Joints may be painful and swollen", "Up to half have Raynaud's", "Lungs, gut, kidneys or thyroid", "Rare, but see a GP about these signs"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Other organs" title="Beyond the eyes and mouth" label="Joints, nerves and other organs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A standing figure with soft highlights on the joints, hands and feet, chest and glands, the other places Sjögren's can affect">
      <Figure x={76} y={34} s={0.9}>{spots.map(([x, y]) => <Spot key={`${x} ${y}`} x={x} y={y} r={6} />)}</Figure>
      {at === 0 && <g>
        <W x={226} y={62} size={11}>More than</W>
        <W x={226} y={94} size={24}>1 in 3</W>
        <W x={226} y={118} size={10.5}>have problems elsewhere</W>
        <W x={226} y={152} size={10.5}>Your team will treat them</W>
      </g>}
      <Stack x={224} y={52} items={boxes} gap={40} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SjoEyeCare(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Regular eye checks help protect sight", "Over 3 times a day: preservative-free", "Specialist drops, plugs or tablets", "Warm flannel, glasses, screen breaks", "Sight changes: call 999 or go to A&E"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Eyes" title="Comfort and protection for dry eyes" label="Caring for dry eyes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A large eye with its tear film, beside eye drops, a warm flannel and wraparound glasses">
      <Eye x={80} y={86} s={3} />
      {at === 0 && <path d="M41 80 Q80 50 119 80" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" />}
      {at === 2 && <circle cx="42" cy="90" r="5" fill={GOLD} />}
      {at === 3 && <path d="M22 70 Q22 54 40 54 H120 Q138 54 138 70 V98 Q138 116 118 116 H42 Q22 116 22 98 Z" fill="none" stroke={INK} strokeWidth="4" />}
      {at === 0 && <Lines x={232} y={56} items={["Tears form a moist film", "Untreated, the front of", "the eye can be damaged", "See an optician regularly"]} gap={22} />}
      {at === 1 && <g>
        <path d="M222 38 H238 L240 50 H220 Z" fill={INK} />
        <rect x="212" y="50" width="36" height="52" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <Drop x={230} y={78} fill={GOLD} />
        <Lines x={230} y={128} items={["Over 3 times a day?", "Choose preservative-free", "Ointment at night can help"]} />
      </g>}
      {at === 2 && <Stack x={230} y={52} items={["Ciclosporin drops", "Tear duct plugs", "Pilocarpine tablets"]} gap={40} lit={1} />}
      {at === 3 && <g>
        <rect x="200" y="36" width="60" height="38" rx="6" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M206 48 H254 M206 58 H254" stroke={SOFT} strokeWidth="3" />
        <Lines x={230} y={104} items={["Warm flannel, then massage", "Glasses with side shields", "Screen breaks, humidifier"]} />
      </g>}
      {at === 4 && <g>
        <W x={228} y={52} size={11}>Painful and red?</W>
        <W x={228} y={70} size={10.5}>Urgent GP or NHS 111</W>
        <Box x={228} y={112} text="Sight changes: 999 or A&E" lit />
        <W x={228} y={148} size={10.5}>Do not drive to A&E</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SjoToothShield(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Saliva helps protect the teeth", "Brush with fluoride 2 or 3 times a day", "Sip water often; keep some by your bed", "Teeth need breaks from food and drink", "Sore, red or swollen mouth? See a GP"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mouth and teeth" title="Protecting teeth when saliva is low" label="Caring for a dry mouth" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tooth with a protective shield, beside a toothbrush, a glass of water and a clock for breaks between meals">
      {at === 1 && <path d="M22 70 Q80 6 138 70" stroke={GOLD} strokeWidth="6" fill="none" strokeLinecap="round" />}
      <Tooth x={80} y={98} s={1.8} />
      {at === 0 && [[60, 70], [74, 66], [92, 68], [104, 72]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="4" fill={SOFT} />)}
      {at === 0 && <Stack x={232} y={52} items={["Reduces plaque", "Neutralises acid", "Without it: decay"]} gap={40} lit={2} />}
      {at === 1 && <g>
        <rect x="190" y="40" width="80" height="10" rx="5" fill={INK} />
        <rect x="246" y="30" width="24" height="10" rx="2" fill={SOFT} />
        <Lines x={230} y={80} items={["2 or 3 times a day", "Fluoride toothpaste", "Do not rinse straight away", "Dentist every 6 months"]} />
      </g>}
      {at === 2 && <g>
        <path d="M212 30 H250 L246 88 H216 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M214 50 H248 L246 88 H216 Z" fill={TINT} />
        <rect x="222" y="58" width="12" height="12" rx="2" fill={WHITE} stroke={INK} strokeWidth="1.5" />
        <Lines x={230} y={114} items={["Regular sips of water", "Water by your bed", "Avoid acidic sprays"]} />
      </g>}
      {at === 3 && <g>
        <Clock x={230} y={56} r={24} hand={2} />
        <Lines x={230} y={104} items={["Gaps of 2 hours", "Less sugary or acidic food", "Sugar-free gum with xylitol"]} />
      </g>}
      {at === 4 && <Stack x={228} y={52} items={["Painful glands? Doctor", "White patches? See a GP", "Hard to talk or eat? GP"]} gap={40} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SjoSlowBar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Treatment depends on your symptoms", "Painkillers and anti-inflammatories", "May take 12 weeks or longer to help", "Regular eye checks while taking it", "Short steroids if joints are inflamed"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Easing joints and tiredness" label="Medicines" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A slowly filling bar from starting hydroxychloroquine to 12 weeks or longer, with the other medicines below">
      <g opacity={at === 2 ? 1 : 0.35}>
        <W x={30} y={28} size={10} anchor="start">Start</W>
        <W x={290} y={28} size={10} anchor="end">12 weeks or longer</W>
        <rect x="30" y="36" width="260" height="14" rx="7" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x="30" y="36" width={at === 2 ? 260 : 60} height="14" rx="7" fill={GOLD} />
      </g>
      {at === 0 && <g>
        <Bone x={70} y={100} s={0.9} /><Pill x={160} y={100} /><Drop x={250} y={102} s={1.4} fill={SOFT} />
        {([["Pain", 70], ["Immune system", 160], ["Tears, saliva", 250]] as const).map(([label, x]) => <W key={label} x={x} y={134} size={10.5}>{label}</W>)}
        <W x={160} y={166} size={10.5}>Pilocarpine: more tears and saliva</W>
      </g>}
      {at === 1 && <g>
        <Pill x={100} y={100} /><Pill x={220} y={100} fill={SOFT} />
        <W x={100} y={134} size={10.5}>Paracetamol</W>
        <W x={220} y={134} size={10.5}>Ibuprofen, naproxen</W>
        <W x={160} y={166} size={10.5}>Ease pain, swelling and stiffness</W>
      </g>}
      {at === 2 && <Lines x={160} y={88} items={["Hydroxychloroquine", "Helps joint pain and fatigue", "Does not help the dryness", "Keep taking it unless told to stop"]} gap={22} />}
      {at === 3 && <g>
        <Eye x={90} y={100} s={1.4} />
        <Clock x={230} y={100} r={20} hand={2} />
        <W x={90} y={138} size={10.5}>Eye checks</W>
        <W x={230} y={138} size={10.5}>Antacids 4 hours later</W>
        <W x={160} y={168} size={10.5}>With a meal or a glass of milk</W>
      </g>}
      {at === 4 && <Stack x={160} y={96} items={["Steroid injection or short course", "Other DMARDs: joints or organs"]} gap={44} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SjoYearWheel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const cx = 82, cy = 104, r = 58;
  const pos = (month: number) => { const a = (-90 + month * 30) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
  const markers: [number, string, number[]][] = [[0, "tooth", [1]], [6, "tooth", [1]], [3, "eye", [1]], [9, "drop", [2]], [11, "gland", [3]], [1, "pill", [4]]];
  const boxes = [["Protects eyes and teeth", "Prompt treatment", "Your team checks"], ["Eye checks: regularly", "Dentist: every 6 months"], ["Tiredness, fever", "Thyroid: up to 1 in 5", "Blood test changes"], ["Fever", "Glands that stay swollen", "Night sweats, weight loss"], ["At the start", "Yearly after five years", "New eye symptoms? Report"]][at];
  const caps = ["Prompt treatment may prevent problems", "Dentist every 6 months; eye checks", "Looking out for linked conditions", "Swollen glands, sweats? See your GP", "Hydroxychloroquine: eye checks"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Check-ups" title="Small checks that protect sight and teeth" label="Regular checks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year drawn as a wheel, with markers for eye checks, dental check-ups, blood tests and checking the glands">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={LINE} strokeWidth="6" />
      {Array.from({ length: 12 }, (_, month) => { const [x, y] = pos(month); return <circle key={month} cx={x} cy={y} r="2.5" fill={SOFT} />; })}
      <W x={cx} y={cy - 2} size={11}>A year</W>
      <W x={cx} y={cy + 14} size={10}>of checks</W>
      {markers.map(([month, kind, on]) => {
        const [x, y] = pos(month), lit = on.includes(at) || at === 0, strong = on.includes(at);
        return <g key={month} opacity={lit ? 1 : 0.4}>
          <circle cx={x} cy={y} r="13" fill={strong ? TINT : WHITE} stroke={strong ? GOLD : INK} strokeWidth={strong ? 3 : 2} />
          {kind === "tooth" && <Tooth x={x} y={y - 1} s={0.28} />}
          {kind === "eye" && <Eye x={x} y={y} s={0.6} />}
          {kind === "drop" && <Drop x={x} y={y} s={0.8} />}
          {kind === "gland" && <><circle cx={x - 3} cy={y} r="3.5" fill={SOFT} /><circle cx={x + 4} cy={y + 2} r="3.5" fill={SOFT} /></>}
          {kind === "pill" && <circle cx={x} cy={y} r="5" fill={INK} />}
        </g>;
      })}
      <Stack x={234} y={56} items={boxes} gap={40} lit={at === 0 ? 1 : at === 4 ? 2 : at === 3 ? 1 : 0} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SjoPacingSteps(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Not fixed by a good night's sleep", "Ask your team about possible causes", "Pacing: not all your energy in one go", "Start at three quarters, add a little"];
  const stairs = Array.from({ length: 9 }, (_, index) => `${index ? "" : "M30 164 "}H${56 + index * 28} V${152 - index * 12}`).join(" ");
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fatigue" title="More than tiredness: pacing fatigue" label="Fatigue and pacing" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A battery that runs low, and a staircase of small, even steps that builds activity up gently">
      {at === 0 && <g>
        <rect x="26" y="70" width="100" height="48" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
        <rect x="126" y="84" width="8" height="20" rx="2" fill={INK} />
        <rect x="32" y="76" width="18" height="36" rx="4" fill={GOLD} />
        <W x={226} y={72} size={20}>96 in 100</W>
        <Lines x={226} y={96} items={["ranked fatigue their most", "or second most disabling", "symptom"]} gap={18} />
      </g>}
      {at === 1 && <Stack x={160} y={50} items={["Side effect of a medicine?", "Active condition?", "Sleep, pain or low mood?"]} gap={42} lit={-1} />}
      {at === 2 && <g>
        <rect x="110" y="30" width="90" height="44" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
        <rect x="200" y="42" width="8" height="20" rx="2" fill={INK} />
        <rect x="116" y="36" width="40" height="32" rx="4" fill={GOLD} />
        <Chips labels={["Solve", "Plan", "Prioritise", "Pace"]} lit={3} y={100} />
        <W x={160} y={164} size={10.5}>Break tasks into smaller jobs</W>
      </g>}
      {at === 3 && <g>
        <path d={`${stairs} V164 Z`} fill={TINT} />
        <path d={stairs} stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" />
        <Arrow d="M226 74 C218 70 208 76 206 88" head="M201 82 L206 88 L212 83" />
        <W x={100} y={48} size={10.5}>Start at three quarters</W>
        <W x={100} y={66} size={10.5}>Add a little every 2 or 3 days</W>
        <W x={258} y={150} size={10.5}>Flare: back a few</W>
        <W x={258} y={166} size={10.5}>steps, not to zero</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SjoMoistAir(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const lines = [["Humidifier, plants, bowls of water", "Avoid smoky, dusty or windy places", "Emollients instead of drying soap"], ["Screen just below eye level", "Employers: reasonable adjustments", "Access to Work may help"], ["Glasses with side shields outside", "Sunscreen if your skin is sensitive"], ["Sip water; turn off the air vent", "Eye drops during the flight", "Medicines in hand luggage"]][at];
  const caps = ["Add moisture to the air at home", "Take breaks from screens", "Wraparound glasses outside", "Cabin air is dry: sip water, vent off"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Everyday life" title="Keeping moist at home, work and away" label="Dryness day to day" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four tiles: a humidifier at home, a computer screen, glasses in the sun and an aeroplane">
      <Tiles xs={[46, 122, 198, 274]} y={16} labels={["Home", "Screens", "Outdoors", "Flying"]} on={index => index === at}>
        {(x, index) => index === 0 ? <g><rect x={x - 14} y={42} width="22" height="26" rx="6" fill={INK} /><path d={`M${x - 6} 38 q-4 -6 0 -12 M${x + 2} 38 q4 -6 0 -12`} stroke={SOFT} strokeWidth="2.5" fill="none" strokeLinecap="round" /><path d={`M${x + 16} 68 V50 M${x + 16} 56 q8 -4 8 -12 q-8 0 -8 8`} stroke={INK} strokeWidth="2.5" fill={SOFT} /></g>
          : index === 1 ? <g><rect x={x - 20} y={28} width="40" height="28" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x} 56 V64 M${x - 10} 66 H${x + 10}`} stroke={INK} strokeWidth="3" strokeLinecap="round" /></g>
          : index === 2 ? <g><Sun x={x + 12} y={32} r={6} /><path d={`M${x - 22} 56 H${x + 22} M${x - 22} 56 Q${x - 22} 66 ${x - 12} 66 Q${x - 2} 66 ${x - 2} 56 M${x + 2} 56 Q${x + 2} 66 ${x + 12} 66 Q${x + 22} 66 ${x + 22} 56`} stroke={INK} strokeWidth="3" fill={INK} /></g>
          : <path d={`M${x - 22} 50 L${x + 18} 42 Q${x + 26} 42 ${x + 22} 48 L${x - 16} 56 Z M${x - 6} 47 L${x + 4} 30 L${x + 10} 30 L${x + 6} 45 M${x - 4} 53 L${x + 6} 66 L${x + 12} 66 L${x + 6} 51 M${x - 20} 51 L${x - 24} 42 L${x - 18} 42 L${x - 12} 49`} fill={INK} stroke={INK} strokeWidth="2" strokeLinejoin="round" />}
      </Tiles>
      <Lines x={160} y={130} items={lines} gap={20} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SjoBabyPlan(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const nodes = ["Planning", "Early", "During", "Birth"];
  const lit = (index: number) => (at === 0 && index === 0) || (at === 1 && (index === 1 || index === 2)) || (at === 2 && (index === 0 || index === 3));
  const lines = [["Talk to your team before trying", "Fertility is not affected", "Usually no problems in pregnancy"], ["Anti-Ro or anti-La?", "Aspirin may be suggested", "Extra heartbeat checks"], ["Hydroxychloroquine", "may be continued", "Check before breastfeeding"], ["Vaginal moisturiser", "Water-based lubricant", "No perfumed products"]][at];
  const caps = ["Fertility is not affected", "Antibodies mean extra heartbeat checks", "Discuss medicines before you plan", "Moisturisers and lubricants can help"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pregnancy" title="Planning a pregnancy with Sjögren's" label="Pregnancy and Sjögren's" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from planning a pregnancy to birth, with extra heartbeat checks along the way">
      <path d="M40 44 H280" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
      {nodes.map((label, index) => <g key={label}>
        <circle cx={40 + index * 80} cy={44} r="10" fill={lit(index) ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={40 + index * 80} y={74} size={10.5}>{label}</W>
      </g>)}
      {at === 0 && <Lines x={160} y={112} items={lines} gap={22} />}
      {at === 1 && <><HeartShape x={66} y={134} size={52} fill={TINT} width={3} /><path d="M36 136 H52 L58 124 L66 146 L72 136 H96" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinejoin="round" /></>}
      {at === 2 && <Pill x={66} y={132} />}
      {at === 3 && <g><rect x="52" y="104" width="28" height="56" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="58" y="96" width="16" height="10" rx="3" fill={INK} /><Drop x={66} y={136} fill={SOFT} /></g>}
      {at > 0 && <Lines x={204} y={112} items={lines} gap={22} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SjoCoffeeGroup(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const card = at === 4;
  const caps = ["Hard physically and emotionally", "Helpline: 0121 478 1133", "Meeting others can ease isolation", "Talking therapies can help mood", "Urgent help: NHS 111 or Samaritans"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You do not have to manage alone" label="Support and mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three people chatting calmly around a table with cups, beside a helpline phone and a card of numbers">
      {([[48, SOFT], [88, INK], [128, SOFT]] as const).map(([x, fill]) => <Person key={x} x={x} y={118} scale={0.8} fill={at === 2 ? INK : fill} />)}
      <ellipse cx="88" cy="134" rx="62" ry="14" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M66 148 V172 M110 148 V172" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {[70, 106].map(x => <rect key={x} x={x - 6} y={124} width="12" height="10" rx="2" fill={GOLD} />)}
      {at === 3 && <g><ellipse cx="88" cy="50" rx="26" ry="15" fill={GOLD} opacity=".85" /><path d="M78 62 L72 74 L90 63" fill={GOLD} opacity=".85" /></g>}
      {at === 0 && <Lines x={236} y={60} items={["Hard physically", "and emotionally", "Frustration, isolation", "and mental exhaustion"]} gap={22} />}
      {at === 1 && <g><Phone x={236} y={52} lit /><W x={236} y={102} size={12.5}>0121 478 1133</W><Lines x={236} y={124} items={["Mon to Wed, 9:30am to 4pm", "Thu and Fri, 9:30am to 8pm"]} gap={18} size={10} /></g>}
      {at === 2 && <Lines x={236} y={64} items={["Local groups", "Make a Friend scheme", "Arthritis UK helpline:", "0800 5200 520"]} gap={24} />}
      {at === 3 && <Lines x={236} y={64} items={["GP, rheumatologist", "or friends", "Talking therapies", "Exercise can help too"]} gap={24} />}
      {card && <g>
        <rect x="176" y="28" width="128" height="134" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {["NHS 111", "mental health option", "Samaritans", "116 123"].map((text, index) => <W key={text} x={240} y={56 + index * 28 - (index % 2) * 8} size={index % 2 === 0 ? 11 : 10.5}>{text}</W>)}
        <W x={240} y={182} size={10}>Not safe? 999 or A&E now</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Systemic sclerosis =====================================================================================

function SscCollagenScaffold(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const fibres = [84, 98, 112, 126, 140];
  const caps = ["The body makes too much collagen", "An overactive immune system", "Skin, blood vessels and organs", "Usually starts between 30 and 50", "For most, it can be managed"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When the body makes too much collagen" label="What systemic sclerosis is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A block of skin with collagen fibres like scaffolding, thickening as too much collagen builds up">
      <W x={84} y={44} size={10.5}>Skin</W>
      <rect x="18" y="54" width="132" height="100" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="18" y="54" width="132" height="16" rx="8" fill={SOFT} />
      {fibres.map((y, index) => <path key={y} d={`M24 ${y} q14 -6 28 0 t28 0 t28 0 t28 0 t16 0`} stroke={at === 0 ? GOLD : at === 2 ? INK : LINE} strokeWidth={at === 0 ? 4 + index % 2 : 2.5} fill="none" className={!still && at === 0 && index === 2 ? "lib-why-pulse" : undefined} />)}
      {at === 0 && <Stack x={234} y={56} items={["Collagen: scaffolding", "Too much builds up", "Fibrosis: scar-like"]} gap={40} lit={1} />}
      {at === 1 && <Stack x={234} y={56} items={["Overactive immune system", "Not contagious", "Cause not clear"]} gap={40} />}
      {at === 2 && <Stack x={234} y={56} items={["Blood vessels narrow", "Skin and muscles tighten", "Lungs, heart or gut"]} gap={40} lit={1} />}
      {at === 3 && <g><W x={234} y={62} size={16}>Around 19,000</W><W x={234} y={82} size={10.5}>people in the UK</W><Lines x={234} y={118} items={["4 to 5 women per man", "Usually starts 30 to 50"]} gap={22} /></g>}
      {at === 4 && <Stack x={234} y={56} items={["No cure yet", "A range of treatments", "Yearly health checks"]} gap={40} lit={1} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SscColourFingers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const fills = [[WHITE, INK, GOLD], [WHITE, WHITE, WHITE], [SOFT, SOFT, GOLD], [WHITE, INK, GOLD], [SOFT, SOFT, SOFT]][at];
  const caps = ["Pale, then blue, then red", "Cold, temperature change or stress", "Secondary Raynaud's is often worse", "Often the first sign of SSc", "See a GP if it is severe or worsening"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Raynaud's" title="Cold fingers, and what they can mean" label="Raynaud's" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three fingers turning pale, then dark blue, then red as blood flow returns in a Raynaud's attack">
      {[44, 92, 140].map((x, index) => <g key={x} opacity={at === 3 ? 0.6 : 1}>
        <rect x={x - 17} y={40} width="34" height="112" rx="17" fill={fills[index]} stroke={INK} strokeWidth="2.5" />
        <ellipse cx={x} cy={58} rx="9" ry="11" fill="none" stroke={index === 1 && fills[index] === INK ? WHITE : INK} strokeWidth="2" />
      </g>)}
      {at === 0 && ["Pale", "Blue", "Red"].map((label, index) => <W key={label} x={44 + index * 48} y={172} size={10.5}>{label}</W>)}
      {at === 0 && <Lines x={238} y={66} items={["Pale, then darker", "or blue, then red", "Painful as blood", "flow returns"]} gap={20} />}
      {at === 1 && <g><Snowflake x={238} y={56} r={18} /><Lines x={238} y={106} items={["Cold, or hot to cold", "Emotional stress", "Minutes or hours"]} gap={20} /></g>}
      {at === 2 && <Stack x={238} y={56} items={["Primary: 80% to 90%", "Usually milder", "Secondary: worse"]} gap={40} lit={2} />}
      {at === 3 && <g><W x={238} y={58} size={11}>More than</W><W x={238} y={86} size={22}>9 in 10</W><Lines x={238} y={108} items={["with SSc have it", "Often the first sign"]} gap={22} /></g>}
      {at === 4 && <Stack x={238} y={56} items={["Very bad or worse", "One side only", "First time over 30"]} gap={40} lit={-1} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SscTwoOutlines(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const limited = <path d="M-30 56 L-32 84 M30 56 L32 84 M-16 108 L-18 138 M16 108 L18 138" stroke={GOLD} strokeWidth="9" strokeLinecap="round" fill="none" />;
  const whole = <path d="M0 16 V70 M-22 26 H22 M-22 26 L-30 56 L-32 84 M22 26 L30 56 L32 84 M-12 72 H12 M-12 72 L-16 108 L-18 138 M12 72 L16 108 L18 138" stroke={GOLD} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity=".75" />;
  const organs = <g><circle cx="-9" cy="38" r="6" fill={INK} /><circle cx="9" cy="38" r="6" fill={INK} /><circle cx="0" cy="58" r="6" fill={INK} /></g>;
  const labels = at === 0 ? ["Localised", "Systemic"] : at === 3 ? ["Limited", "Sine sclerosis"] : ["Limited", "Diffuse"];
  const subs = [["Mostly skin", "Skin and organs"], ["Comes on gradually", ""], ["", "Comes on suddenly"], ["", "Few skin symptoms"], ["", ""]][at];
  const caps = ["Localised or systemic scleroderma", "Limited: hands, arms, legs and face", "Diffuse: comes on suddenly", "Sine: few skin signs, organs affected", "Each type brings different challenges"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Types" title="Limited or diffuse: two different paths" label="Limited and diffuse types" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two figures side by side: one with skin changes only on the hands, forearms, lower legs and face, the other all over with the organs marked">
      <g opacity={at === 2 || at === 3 ? 0.35 : 1}>
        <Figure x={92} y={28} s={0.82}>
          {at === 0 ? <circle cx="-30" cy="62" r="8" fill={GOLD} /> : limited}
          {at !== 0 && <circle r="13" fill={GOLD} opacity=".55" />}
        </Figure>
      </g>
      <g opacity={at === 1 ? 0.35 : 1}>
        <Figure x={228} y={28} s={0.82}>
          {at !== 3 && whole}
          {organs}
        </Figure>
      </g>
      <W x={92} y={164} size={11}>{labels[0]}</W>
      <W x={228} y={164} size={11}>{labels[1]}</W>
      {subs[0] && <W x={92} y={182} size={10}>{subs[0]}</W>}
      {subs[1] && <W x={228} y={182} size={10}>{subs[1]}</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SscOrganZones(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = (zone: number) => at === zone || at === 0;
  const boxes = [["Tissue can thicken", "Breathless, high BP", "Pulmonary hypertension"], ["Gut: up to 90%", "Reflux, heartburn", "Bloating, constipation"], ["Lungs: up to half", "Often stable", "Breathless, a cough"], ["Usually very mild", "About 1 in 10: PAH", "Mild breathlessness"], ["Mild change: common", "Renal crisis: 5 to 10%", "Urgent expert attention"]][at];
  const caps = ["It can affect organs as well as skin", "Up to 90% have some gut involvement", "Breathlessness is the main symptom", "Heart involvement is usually mild", "Renal crisis: urgent expert attention"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Organs" title="The organs worth keeping an eye on" label="Lungs, heart, gut and kidneys" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A torso outline with the lungs, heart, gut and kidneys, the organs systemic sclerosis can affect">
      <path d="M50 26 H120 C134 26 142 36 142 50 V150 C142 166 132 178 116 178 H54 C38 178 28 166 28 150 V50 C28 36 36 26 50 26 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      <Lungs x={85} y={70} s={1.15} fill={at === 2 ? GOLD : TINT} stroke={lit(2) ? INK : SOFT} />
      <HeartShape x={85} y={92} size={26} fill={at === 3 ? GOLD : WHITE} stroke={lit(3) ? INK : SOFT} width={2.5} />
      <path d="M70 122 q8 -8 15 0 t15 0 M70 134 q8 -8 15 0 t15 0 M70 146 q8 -8 15 0 t15 0" stroke={at === 1 ? GOLD : lit(1) ? INK : SOFT} strokeWidth={at === 1 ? 4.5 : 2.5} fill="none" strokeLinecap="round" />
      <Kidney x={48} y={140} s={0.32} fill={at === 4 ? GOLD : WHITE} />
      <Kidney x={122} y={140} s={0.32} flip fill={at === 4 ? GOLD : WHITE} />
      <Stack x={232} y={56} items={boxes} gap={40} lit={at === 0 ? -1 : at === 4 ? 2 : 0} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SscImmuneDial(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A plan agreed with a specialist team", "Calming an overactive immune system", "Up to four months to notice a benefit", "Steroids: usually in low doses", "Report a sore throat or fever at once"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Calming an overactive immune system" label="Medicines" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A dial for immune activity being turned down, beside a calendar of months and a blood test tube">
      <Gauge x={80} y={112} r={54} value={at === 0 ? 0.85 : 0.35} label="Immune activity" />
      {at === 1 && <Arrow d="M40 50 C56 36 82 34 98 42" head="M90 36 L98 42 L90 48" />}
      {at === 0 && <g>
        <Person x={204} y={84} /><Person x={264} y={84} fill={SOFT} />
        <W x={204} y={118} size={10.5}>You</W><W x={264} y={118} size={10.5}>Specialists</W>
        <W x={234} y={152} size={10.5}>A clear, agreed plan</W>
      </g>}
      {at === 1 && <Stack x={234} y={52} items={["Methotrexate", "Mycophenolate", "Rituximab: targeted"]} gap={40} lit={-1} />}
      {at === 2 && <g>
        {[1, 2, 3, 4].map(month => <g key={month}><rect x={178 + (month - 1) * 30} y={36} width="26" height="26" rx="5" fill={GOLD} opacity={0.4 + month * 0.15} stroke={INK} strokeWidth="2" /><W x={191 + (month - 1) * 30} y={54} size={10.5}>{String(month)}</W></g>)}
        <W x={234} y={84} size={10.5}>Up to four months</W>
        <Tube x={234} y={100} />
        <W x={234} y={170} size={10.5}>Regular blood tests</W>
      </g>}
      {at === 3 && <g><Pill x={234} y={52} /><Lines x={234} y={92} items={["Usually low doses", "High doses can raise", "blood pressure"]} gap={20} /></g>}
      {at === 4 && <g><Germ x={234} y={52} r={9} /><Lines x={234} y={96} items={["Sore throat or fever?", "Tell your team at once", "Flu and pneumonia jabs"]} gap={22} /></g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SscWiderVessel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const open = at !== 0;
  const caps = ["Medicines that relax and widen vessels", "Some take up to three weeks to work", "Iloprost by drip, for severe cases", "Infected ulcer? Get treatment quickly", "Injections or surgery for some"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Raynaud's and ulcers" title="Opening up the blood vessels" label="Treating Raynaud's and ulcers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A narrow blood vessel widening, with a tablet, a drip and a dressed fingertip">
      <path d={open ? "M20 40 H300 V82 H20 Z" : "M20 54 C120 54 200 40 300 40 V82 C200 82 120 68 20 68 Z"} fill={TINT} />
      <path d={open ? "M20 40 H300 M20 82 H300" : "M20 54 C120 54 200 40 300 40 M20 68 C120 68 200 82 300 82"} stroke={INK} strokeWidth="3" fill="none" />
      {[60, 120, 180, 240].map(x => <circle key={x} cx={x} cy={61} r="5" fill={GOLD} className={!still && at === 0 ? "lib-why-pulse" : undefined} />)}
      {at === 0 && <g><Pill x={64} y={134} /><Lines x={200} y={120} items={["Nifedipine: the only one", "licensed for Raynaud's", "Daily, or in cold weather"]} gap={20} /></g>}
      {at === 1 && <Lines x={160} y={120} items={["Diltiazem or sildenafil", "Up to three weeks for full effect", "No grapefruit with nifedipine"]} gap={20} />}
      {at === 2 && <g>
        <rect x="50" y="100" width="32" height="40" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="54" y="116" width="24" height="20" rx="3" fill={SOFT} />
        <path d="M66 140 V166 Q66 176 76 176" stroke={INK} strokeWidth="2" fill="none" />
        <Lines x={200} y={120} items={["Iloprost by drip", "About six hours a day", "For 3 to 5 days in a row"]} gap={20} />
      </g>}
      {at === 3 && <g>
        <rect x="50" y="104" width="32" height="70" rx="16" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="48" y="112" width="36" height="20" rx="5" fill={SOFT} stroke={INK} strokeWidth="1.5" />
        <Lines x={200} y={112} items={["About 45% get ulcers", "Keep them dressed and clean", "Pain, redness, smell?", "Get treatment quickly"]} gap={19} />
      </g>}
      {at === 4 && <g>
        <rect x="40" y="128" width="48" height="12" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M88 134 H104 M40 134 H30 M30 126 V142" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        <Lines x={200} y={120} items={["Injections to block nerves", "Surgery on tiny nerves", "Not always successful"]} gap={20} />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SscYearlyTests(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const lines = [["Spot changes early", "Preferably once a year"], ["Spirometry: one breath out", "X-ray, CT, six-minute walk"], ["Echocardiogram: 30 to 40 min", "Ask if tests are not offered"], ["High blood pressure: no symptoms", "Free checks: GP or pharmacy"], ["Can you still climb the stairs", "as well as 6 months before?"]][at];
  const caps = ["Check-ups, preferably once a year", "Breathing tests can spot early changes", "Heart scans: early detection is vital", "Blood pressure and kidneys checked", "Breathless? Contact your team"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Check-ups" title="Yearly checks that catch changes early" label="Regular checks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year of months with one check-up ringed, and tiles for lung tests, a heart scan, blood pressure and breathlessness on stairs">
      {months.map((month, index) => <g key={index}>
        <rect x={22 + index * 23} y={14} width="20" height="20" rx="4" fill={index === 8 ? (at === 0 ? GOLD : SOFT) : WHITE} stroke={INK} strokeWidth="1.5" />
        <W x={32 + index * 23} y={28} size={10}>{month}</W>
      </g>)}
      <Tiles xs={[52, 124, 196, 268]} y={46} labels={["Lungs", "Heart", "Pressure", "Stairs"]} on={index => at === 0 || index === at - 1}>
        {(x, index) => index === 0 ? <Lungs x={x} y={78} s={0.85} />
          : index === 1 ? <HeartShape x={x} y={76} size={34} fill={TINT} width={2.5} />
          : index === 2 ? <Gauge x={x} y={86} r={18} value={0.5} />
          : <path d={`M${x - 22} 92 H${x - 10} V82 H${x + 2} V72 H${x + 14} V62 H${x + 22}`} stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" />}
      </Tiles>
      <Lines x={160} y={156} items={lines} gap={19} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** A hand in one of four exercise poses, palm centred on (x, y). */
const Hand = ({ x, y, pose }: { x: number; y: number; pose: "fist" | "star" | "thumb" | "lift" }) => {
  if (pose === "fist") return <g><rect x={x - 18} y={y - 12} width="36" height="30" rx="10" fill={INK} />{[-12, -4, 4, 12].map(dx => <circle key={dx} cx={x + dx} cy={y - 12} r="5" fill={INK} />)}</g>;
  if (pose === "lift") return <g><path d={`M${x - 30} ${y + 16} H${x + 30}`} stroke={LINE} strokeWidth="4" /><rect x={x - 26} y={y + 4} width="50" height="11" rx="5" fill={INK} /><path d={`M${x + 8} ${y + 6} L${x + 16} ${y - 18}`} stroke={GOLD} strokeWidth="7" strokeLinecap="round" /></g>;
  const angles = pose === "star" ? [-160, -120, -90, -60, -20] : [-115, -95, -75, -55];
  return <g stroke={INK} strokeWidth="7" strokeLinecap="round">
    {angles.map(a => <path key={a} d={`M${x} ${y} L${(x + 26 * Math.cos(a * Math.PI / 180)).toFixed(1)} ${(y + 26 * Math.sin(a * Math.PI / 180)).toFixed(1)}`} />)}
    {pose === "thumb" && <path d={`M${x - 10} ${y + 2} Q${x - 26} ${y - 14} ${x - 11} ${y - 23}`} fill="none" />}
    <circle cx={x} cy={y + 4} r="13" fill={INK} stroke="none" />
    {pose === "thumb" && <circle cx={x - 11} cy={y - 24} r="4" fill={GOLD} stroke="none" />}
  </g>;
};

function SscHandStretches(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Moving keeps skin flexible", "Make a fist, then stretch like a star", "Mouth stretches, after warming up", "Moisturise every day", "An occupational therapist can help"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Therapy" title="Keeping skin and joints moving" label="Exercises and skin care" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Hand exercises: a fist, fingers stretched like a star, thumb to fingertip and lifting a finger from a table">
      {at === 1 && <g>
        {(["fist", "star", "thumb", "lift"] as const).map((pose, index) => <g key={pose}>
          <Hand x={46 + index * 76} y={80} pose={pose} />
          <W x={46 + index * 76} y={130} size={10.5}>{["Fist", "Star", "Thumb", "Lift"][index]}</W>
        </g>)}
        <W x={160} y={164} size={10.5}>A hand therapist can show you how</W>
      </g>}
      {at === 0 && <g><Hand x={80} y={100} pose="star" /><Lines x={226} y={70} items={["Skin stays flexible", "Joints less tight", "Blood keeps moving", "Mood can lift"]} gap={22} /></g>}
      {at === 2 && <g>
        <circle cx="80" cy="96" r="42" fill={WHITE} stroke={INK} strokeWidth="3" />
        <circle cx="66" cy="84" r="3.5" fill={INK} /><circle cx="94" cy="84" r="3.5" fill={INK} />
        <ellipse cx="80" cy="114" rx="12" ry="9" fill={SOFT} stroke={INK} strokeWidth="2" />
        <Arrow d="M56 114 H40" head="M46 108 L40 114 L46 120" />
        <Arrow d="M104 114 H120" head="M114 108 L120 114 L114 120" />
        <Lines x={226} y={74} items={["Warm up first", "Once or twice a day", "It should not hurt"]} gap={24} />
      </g>}
      {at === 3 && <g>
        <rect x="46" y="84" width="68" height="52" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="42" y="72" width="76" height="16" rx="6" fill={INK} />
        <path d="M58 106 H102" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <Lines x={226} y={62} items={["Moisturise daily", "Ointments hold moisture", "Cream after water", "Check your feet daily"]} gap={22} />
      </g>}
      {at === 4 && <g>
        <path d="M40 92 L80 58 L120 92 V140 H40 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <rect x="70" y="108" width="20" height="32" fill={SOFT} />
        <Lines x={226} y={72} items={["Home changes", "Equipment and splints", "Plan, prioritise, pace"]} gap={24} />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SscWarmLayers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Planning ahead helps prevent attacks", "Thin layers, a hat and gloves", "Avoid sudden changes in temperature", "Heat rooms you use to 18 degrees", "A hot meal, moving, and not smoking"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Warmth" title="Planning ahead to stay warm" label="Keeping warm" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A figure wrapped in thin layers with a hat and mittens, beside a thermostat and a flask">
      {at === 0 && <ellipse cx="72" cy="100" rx="52" ry="80" fill={TINT} />}
      <Figure x={72} y={40} s={0.8} limbs={at === 1 ? INK : SOFT}>
        {at === 1 && <><path d="M-14 -4 Q-14 -22 0 -22 Q14 -22 14 -4 Z" fill={GOLD} /><circle cx="-32" cy="88" r="8" fill={GOLD} /><circle cx="32" cy="88" r="8" fill={GOLD} /><path d="M-12 30 H12 M-12 42 H12 M-12 54 H12" stroke={WHITE} strokeWidth="2" /></>}
      </Figure>
      {at === 0 && <Lines x={226} y={66} items={["Plan ahead", "Warm body, good circulation", "Cover your face in the cold"]} gap={26} size={10} />}
      {at === 1 && <Stack x={226} y={56} items={["Thin layers", "Hat and gloves", "Warm socks indoors"]} gap={40} />}
      {at === 2 && <g>
        <rect x="214" y="30" width="26" height="54" rx="8" fill={INK} /><rect x="216" y="22" width="22" height="10" rx="3" fill={SOFT} />
        <Lines x={226} y={108} items={["Spare gloves in the car", "Insulated gloves for", "the freezer", "Breathe in through your nose"]} gap={19} size={10} />
      </g>}
      {at === 3 && <g>
        <circle cx="226" cy="64" r="32" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M200 76 A28 28 0 0 1 246 42" stroke={GOLD} strokeWidth="5" fill="none" strokeLinecap="round" />
        <W x={226} y={72} size={18}>18°</W>
        <Lines x={226} y={124} items={["Rooms you use a lot", "Draught excluders", "Hot water bottle"]} gap={20} />
      </g>}
      {at === 4 && <g>
        <path d="M196 56 H256 Q256 86 226 86 Q196 86 196 56 Z" fill={INK} />
        <path d="M214 46 q-4 -6 0 -12 M226 46 q-4 -6 0 -12 M238 46 q-4 -6 0 -12" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <Lines x={226} y={112} items={["A hot meal a day", "Move every hour or so", "Stop smoking"]} gap={20} />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SscSixPlates(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Gullet muscles can weaken", "Six small meals instead of three", "Raise the bed head 10 to 20cm", "Medicines can reduce stomach acid", "Swallowing trouble: urgent GP or 111"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Eating" title="Smaller meals, an easier swallow" label="Eating, swallowing and reflux" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock face with six small plates around it, the midday plate largest, and a bed with its head raised">
      {at === 0 && <g>
        <path d="M84 24 V112" stroke={INK} strokeWidth="14" strokeLinecap="round" />
        <path d="M84 24 V112" stroke={TINT} strokeWidth="7" strokeLinecap="round" />
        <path d="M84 110 C60 112 50 140 64 160 C80 180 126 172 124 140 C122 118 104 110 84 110 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
        <Arrow d="M84 130 V60" head="M77 67 L84 60 L91 67" />
        <Lines x={230} y={56} items={["Weaker gullet muscles", "Swallowing is harder", "Acid can leak upwards", "Gullet: 80 to 90%"]} gap={24} />
      </g>}
      {at === 1 && <g>
        <circle cx="88" cy="104" r="58" fill="none" stroke={LINE} strokeWidth="4" />
        {[-90, -30, 30, 90, 150, 210].map(a => { const x = 88 + 58 * Math.cos(a * Math.PI / 180), y = 104 + 58 * Math.sin(a * Math.PI / 180), big = a === -90; return <circle key={a} cx={x} cy={y} r={big ? 15 : 10} fill={WHITE} stroke={big ? GOLD : INK} strokeWidth={big ? 4 : 2.5} />; })}
        <W x={88} y={102} size={10.5}>Six small</W>
        <W x={88} y={118} size={10.5}>meals</W>
        <Lines x={232} y={66} items={["Eat slowly, chew well", "Water with meals", "Largest meal at midday", "Less in the evening"]} gap={24} />
      </g>}
      {at === 2 && <g>
        <path d="M20 150 H160" stroke={INK} strokeWidth="4" />
        <path d="M24 132 L156 116 L156 128 L24 144 Z" fill={SOFT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="140" y="128" width="20" height="22" fill={GOLD} />
        <ellipse cx="140" cy="108" rx="14" ry="8" fill={WHITE} stroke={INK} strokeWidth="2" />
        <W x={150} y={172} size={10}>10 to 20cm</W>
        <Lines x={234} y={70} items={["Raise the head of the bed", "Wood, bricks or books", "Not extra pillows"]} gap={24} />
      </g>}
      {at === 3 && <g><Pill x={60} y={80} /><Pill x={110} y={80} fill={SOFT} /><Pill x={85} y={120} rotate={20} /><Stack x={232} y={56} items={["Antacids", "Proton pump inhibitor", "Prokinetics"]} gap={40} lit={1} /></g>}
      {at === 4 && <g>
        <path d="M66 50 H112 L106 140 H72 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M68 80 H110 L106 140 H72 Z" fill={TINT} />
        <Stack x={232} y={52} items={["Keep up a good diet", "Dietitian if needed"]} gap={38} lit={-1} />
        <W x={232} y={136} size={11}>Trouble swallowing?</W>
        <W x={232} y={154} size={10.5}>Urgent GP or NHS 111</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SscPressureAlert(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Kidney crisis: urgent hospital care", "At risk? Check BP every other day", "Sudden chest pain: call 999 or A&E", "Ulcers need treatment quickly", "Report any new symptoms to your doctor"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Urgent" title="The signs that cannot wait" label="Symptoms to report quickly" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A blood pressure gauge near the top of its scale, beside the signs that need help quickly">
      <g opacity={at >= 2 ? 0.35 : 1}><Gauge x={80} y={112} r={54} value={at === 0 ? 0.92 : 0.5} label="Blood pressure" /></g>
      {at === 0 && <g><Stack x={232} y={46} items={["Very high blood pressure", "Headache, blurred vision", "Urgent hospital admission"]} gap={40} lit={2} /><W x={232} y={170} size={10}>Recognise and treat quickly</W></g>}
      {at === 1 && <Lines x={232} y={60} items={["At risk? Measure it", "at least every other day", "ACE inhibitors can", "treat or prevent it"]} gap={22} />}
      {at === 2 && <g><Lungs x={232} y={52} /><Lines x={232} y={100} items={["Breathing changes?", "Tell your doctor"]} gap={18} /><Box x={232} y={156} text="Chest pain: 999 or A&E" lit /></g>}
      {at === 3 && <g>
        <rect x="216" y="30" width="32" height="64" rx="16" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <circle cx="232" cy="46" r="7" fill={GOLD} />
        <Lines x={232} y={118} items={["More pain, redness,", "discharge or smell", "May need antibiotics"]} gap={20} />
      </g>}
      {at === 4 && <Stack x={232} y={52} items={["Any new symptom", "Worse? Get advice", "Emergency: 999"]} gap={40} lit={2} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SscChairCircle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const card = at === 4;
  const seats = Array.from({ length: 6 }, (_, index) => { const a = -Math.PI / 2 + index * Math.PI / 3; return [86 + 52 * Math.cos(a), 104 + 50 * Math.sin(a)]; });
  const caps = ["All sorts of feelings are common", "You are not alone if you struggle", "SRUK helpline: every day, 9am to 7pm", "A small change can make a difference", "Urgent help: NHS 111 or Samaritans"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You do not have to face it alone" label="Support and mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A circle of chairs seen from above with people sitting together, beside a helpline phone and a card of numbers">
      <circle cx="86" cy="104" r="24" fill={TINT} stroke={LINE} strokeWidth="2" />
      {seats.map(([x, y], index) => <g key={index}>
        <rect x={x - 11} y={y - 10} width="22" height="20" rx="5" fill={WHITE} stroke={INK} strokeWidth="2" />
        {index % 2 === 0 && <circle cx={x} cy={y} r="7" fill={(at === 1 && index < 3) || at === 2 ? INK : SOFT} />}
      </g>)}
      {at === 0 && <Stack x={236} y={42} items={["Relief", "Worry", "Frustration", "A sense of loss"]} gap={36} lit={-1} />}
      {at === 1 && <Stack x={236} y={52} items={["Family and friends", "Counselling, CBT", "Rheumatology nurse"]} gap={40} lit={-1} />}
      {at === 2 && <g><Phone x={236} y={50} lit /><W x={236} y={100} size={12.5}>0800 311 2756</W><Lines x={236} y={122} items={["Every day, 9am to 7pm", "Groups and online too"]} gap={20} /></g>}
      {at === 3 && <g><Briefcase x={236} y={54} /><Lines x={236} y={100} items={["Rest periods", "Adjusted start times", "Personal Independence", "Payment"]} gap={19} /></g>}
      {card && <g>
        <rect x="176" y="28" width="128" height="134" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {["NHS 111", "mental health option", "Samaritans", "116 123"].map((text, index) => <W key={text} x={240} y={56 + index * 28 - (index % 2) * 8} size={index % 2 === 0 ? 11 : 10.5}>{text}</W>)}
        <W x={240} y={182} size={10}>Not safe? 999 or A&E now</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function AutoimmunePieceView({ piece, ...props }: { piece: AutoimmunePiece } & PieceProps) {
  switch (piece) {
    case "gca-temple-artery": return <GcaTempleArtery {...props} />;
    case "gca-three-signs": return <GcaThreeSigns {...props} />;
    case "gca-sight-today": return <GcaSightToday {...props} />;
    case "gca-test-tiles": return <GcaTestTiles {...props} />;
    case "gca-shield-dose": return <GcaShieldDose {...props} />;
    case "gca-long-taper": return <GcaLongTaper {...props} />;
    case "gca-helper-medicines": return <GcaHelperMedicines {...props} />;
    case "gca-balance-scale": return <GcaBalanceScale {...props} />;
    case "gca-loop-path": return <GcaLoopPath {...props} />;
    case "gca-two-circles": return <GcaTwoCircles {...props} />;
    case "gca-card-wallet": return <GcaCardWallet {...props} />;
    case "gca-helpline-tiles": return <GcaHelplineTiles {...props} />;
    case "sjo-moist-glands": return <SjoMoistGlands {...props} />;
    case "sjo-body-labels": return <SjoBodyLabels {...props} />;
    case "sjo-test-clues": return <SjoTestClues {...props} />;
    case "sjo-beyond-dryness": return <SjoBeyondDryness {...props} />;
    case "sjo-eye-care": return <SjoEyeCare {...props} />;
    case "sjo-tooth-shield": return <SjoToothShield {...props} />;
    case "sjo-slow-bar": return <SjoSlowBar {...props} />;
    case "sjo-year-wheel": return <SjoYearWheel {...props} />;
    case "sjo-pacing-steps": return <SjoPacingSteps {...props} />;
    case "sjo-moist-air": return <SjoMoistAir {...props} />;
    case "sjo-baby-plan": return <SjoBabyPlan {...props} />;
    case "sjo-coffee-group": return <SjoCoffeeGroup {...props} />;
    case "ssc-collagen-scaffold": return <SscCollagenScaffold {...props} />;
    case "ssc-colour-fingers": return <SscColourFingers {...props} />;
    case "ssc-two-outlines": return <SscTwoOutlines {...props} />;
    case "ssc-organ-zones": return <SscOrganZones {...props} />;
    case "ssc-immune-dial": return <SscImmuneDial {...props} />;
    case "ssc-wider-vessel": return <SscWiderVessel {...props} />;
    case "ssc-yearly-tests": return <SscYearlyTests {...props} />;
    case "ssc-hand-stretches": return <SscHandStretches {...props} />;
    case "ssc-warm-layers": return <SscWarmLayers {...props} />;
    case "ssc-six-plates": return <SscSixPlates {...props} />;
    case "ssc-pressure-alert": return <SscPressureAlert {...props} />;
    case "ssc-chair-circle": return <SscChairCircle {...props} />;
  }
}
