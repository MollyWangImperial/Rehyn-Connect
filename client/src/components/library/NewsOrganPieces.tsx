import type { NewsPiece } from "@/content/ischaemic-news";
import { ORGAN_PIECES, type OrganPiece } from "@/content/organ-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Bladder, Kidney and Pancreatic cancer pages' own pieces (content/organ-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Cancer & recovery pieces. Each is steered by the card's sections;
// pictures show ideas, calmly, and never anyone's own body, scans or results.

export const isOrganPiece = (piece: NewsPiece): piece is OrganPiece => (ORGAN_PIECES as readonly string[]).includes(piece);

const ideaCredit = "Illustration: Rehyn. A picture of the idea, not anyone's own results.";

/** The one-line caption for the chosen section. */
const Cap = ({ children }: { children: string }) => <W x={160} y={206} size={11.5}>{children}</W>;
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
/** A number or short word on a dark tile, such as 999. */
const Badge = ({ x, y, text, width = 60 }: { x: number; y: number; text: string; width?: number }) =>
  <g><rect x={x - width / 2} y={y - 18} width={width} height="36" rx="10" fill={INK} /><W x={x} y={y + 6} size={16} fill={WHITE}>{text}</W></g>;
const Thermo = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 7} y={y - 38} width="14" height="54" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 2.5} y={y - 24} width="5" height="40" fill={INK} /><circle cx={x} cy={y + 22} r="11" fill={INK} /></g>;
const Moon = ({ x, y, fill = SOFT }: { x: number; y: number; fill?: string }) =>
  <path transform={`translate(${x} ${y})`} d="M0 -22 A22 22 0 1 0 22 14 A17 17 0 1 1 0 -22 Z" fill={fill} />;
const Phone = ({ x, y, text }: { x: number; y: number; text?: string }) =>
  <g><rect x={x - 20} y={y - 34} width="40" height="68" rx="8" fill={INK} /><rect x={x - 15} y={y - 26} width="30" height="48" rx="3" fill={WHITE} />
    {text && <W x={x} y={y + 4} size={11}>{text}</W>}<circle cx={x} cy={y + 28} r="2.5" fill={WHITE} /></g>;
/** A scanner ring with a bed through it. */
const Scanner = ({ x, y, r = 20 }: { x: number; y: number; r?: number }) =>
  <g><circle cx={x} cy={y} r={r} fill="none" stroke={INK} strokeWidth={r * 0.35} /><path d={`M${x - r * 1.5} ${y + r * 0.35} H${x + r * 1.5}`} stroke={SOFT} strokeWidth="4" strokeLinecap="round" /></g>;
const Battery = ({ x, y, level, width = 100, height = 48, fill = INK }: { x: number; y: number; level: number; width?: number; height?: number; fill?: string }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="9" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x={x + width} y={y + height / 2 - 10} width="8" height="20" rx="2" fill={INK} />
    <rect x={x + 7} y={y + 7} width={(width - 14) * level} height={height - 14} rx="5" fill={fill} /></g>;
const Doc = ({ x, y, width = 100, height = 110 }: { x: number; y: number; width?: number; height?: number }) =>
  <path d={`M${x} ${y} H${x + width - 18} L${x + width} ${y + 18} V${y + height} H${x} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />;
const Footsteps = ({ points }: { points: [number, number][] }) => <g>{points.map(([x, y]) => <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="4" ry="2.5" fill={GOLD} />)}</g>;

/** A bladder, with the tubes from the kidneys above and the urethra below. */
const Bladder = ({ x, y, fill = WHITE, wall = INK, wallWidth = 3 }: { x: number; y: number; fill?: string; wall?: string; wallWidth?: number }) =>
  <g transform={`translate(${x} ${y})`}>
    <path d="M-30 -26 C-38 -40 -40 -50 -46 -62 M30 -26 C38 -40 40 -50 46 -62" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M-6 34 V60 M6 34 V60" stroke={INK} strokeWidth="3" />
    <path d="M-42 -6 C-46 -40, 46 -40, 42 -6 C40 22, 16 36, 0 36 C-16 36, -40 22, -42 -6 Z" fill={fill} stroke={wall} strokeWidth={wallWidth} strokeLinejoin="round" />
  </g>;
/** A kidney, about 64 wide and 90 tall at scale 1, centred on (x, y). */
const Kidney = ({ x, y, s = 1, fill = WHITE, dash = false }: { x: number; y: number; s?: number; fill?: string; dash?: boolean }) =>
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M8 -45 C-24 -48 -34 -20 -32 0 C-34 22 -22 46 8 45 C26 44 32 30 22 18 C14 8 14 -8 22 -18 C32 -30 26 -44 8 -45 Z" fill={fill} stroke={INK} strokeWidth={3 / s} strokeDasharray={dash ? "6 5" : undefined} />;
const PANCREAS = {
  head: "M-70 -4 C-78 -30 -46 -34 -34 -18 L-30 14 C-48 30 -66 22 -70 -4 Z",
  body: "M-34 -18 C-14 -21 6 -23 22 -25 L22 2 C6 6 -12 10 -30 14 Z",
  tail: "M22 -25 C40 -28 56 -31 62 -31 C78 -32 80 -18 66 -12 C52 -6 38 -2 22 2 Z",
};
type PancreasPart = keyof typeof PANCREAS;
/** A pancreas in three parts (head, body and tail), about 150 wide at scale 1; `lit` parts are filled. */
const Pancreas = ({ x, y, s = 1, lit = [] }: { x: number; y: number; s?: number; lit?: PancreasPart[] }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}>{(Object.keys(PANCREAS) as PancreasPart[]).map(part =>
    <path key={part} d={PANCREAS[part]} fill={lit.includes(part) ? INK : WHITE} stroke={INK} strokeWidth={2.5 / s} strokeLinejoin="round" />)}</g>;
/** Three cell shapes, from like normal cells (1) to very unlike them (3). */
const Cells = ({ x, y, gap = 44 }: { x: number; y: number; gap?: number }) =>
  <g>
    <circle cx={x} cy={y} r="14" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path transform={`translate(${x + gap} ${y})`} d="M-2 -15 C14 -14 16 8 4 14 C-10 18 -16 -4 -2 -15 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path transform={`translate(${x + gap * 2} ${y})`} d="M-4 -16 L10 -8 L4 0 L14 12 L-8 14 L-14 2 L-6 -4 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    {["1", "2", "3"].map((grade, index) => <W key={grade} x={x + index * gap} y={y + 36} size={11}>{grade}</W>)}
  </g>;

// ==== Bladder cancer ========================================================================================

function BlcRoutes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your treatment" title="Each treatment had its own job" label="Your treatment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bladder, with a camera through the urethra, medicine put inside, and treatment for the muscle wall">
      <Bladder x={92} y={96} wall={at === 3 ? GOLD : INK} wallWidth={at === 3 ? 8 : 3} />
      {at === 1 && <g><path d="M92 186 V72" stroke={INK} strokeWidth="4" strokeLinecap="round" /><circle cx="92" cy="70" r="7" fill={GOLD} stroke={INK} strokeWidth="2" /></g>}
      {at === 2 && <g><path d="M92 186 V116" stroke={INK} strokeWidth="3" strokeDasharray="5 4" />{[[76, 92], [100, 80], [112, 104], [80, 112], [96, 98]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" fill={GOLD} />)}</g>}
      {at === 0 && <g>{[196, 240, 284].map((x, index) => <Person key={x} x={x} y={92} scale={0.9} fill={index === 1 ? INK : SOFT} />)}<rect x="176" y="110" width="128" height="10" rx="5" fill={INK} /><W x={240} y={144} size={10.5}>A team of specialists</W></g>}
      {at === 1 && <Tags x={168} y={50} width={138} labels={["TURBT", "Through the urethra", "No cut in the skin"]} lit={index => index === 0} />}
      {at === 2 && <Tags x={168} y={66} width={138} labels={["Chemotherapy", "BCG"]} lit={() => true} />}
      {at === 3 && <Tags x={168} y={44} width={138} labels={["Cystectomy", "Radiotherapy", "Chemotherapy"]} lit={index => index < 2} />}
      {at === 4 && <Tags x={168} y={44} width={138} labels={["High temperature", "Swollen, warm leg", "Breathlessness"]} lit={() => true} />}
      <Cap>{["Your MDT talked over the best plan", "TURBT: removed through the urethra", "Medicine into the bladder by catheter", "Muscle: cystectomy or radiotherapy", "Signs of infection: call your team now"][at]}</Cap>
    </svg>} />;
}

function BlcLayers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const layers = ["Lining", "Connective tissue", "Muscle", "Fat"];
  const bars = [{ x: 122, to: 134, t: "T2" }, { x: 144, to: 160, t: "T3" }, { x: 166, to: 178, t: "T4" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Types and stages" title="Lining, muscle, and beyond" label="Types and stages" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The layers of the bladder wall, with how deep early and muscle-invasive cancers reach">
      <g opacity={at === 2 || at === 4 ? 0.45 : 1}>
        {layers.map((layer, index) => <g key={layer}>
          <rect x="20" y={56 + index * 26} width="160" height="26" fill={at === 0 && index === 0 ? INK : index % 2 ? WHITE : TINT} stroke={LINE} strokeWidth="1.5" />
          <W x={28} y={73 + index * 26} size={10} anchor="start" fill={at === 0 && index === 0 ? WHITE : TEXT}>{layer}</W>
        </g>)}
      </g>
      {at === 1 && <g>
        <rect x="114" y="56" width="16" height="5" fill={GOLD} stroke={INK} strokeWidth="1" />
        <path d="M144 56 V48 M134 48 C134 36, 154 36, 154 48 Z" fill={GOLD} stroke={INK} strokeWidth="2" />
        <path d="M160 56 C160 74, 176 74, 176 56 Z" fill={GOLD} stroke={INK} strokeWidth="2" />
        <W x={122} y={30} size={10}>CIS</W><W x={144} y={30} size={10}>Ta</W><W x={168} y={30} size={10}>T1</W>
      </g>}
      {at === 3 && bars.map(bar => <g key={bar.t}><rect x={bar.x - 6} y="56" width="12" height={bar.to - 56} rx="5" fill={GOLD} stroke={INK} strokeWidth="1.5" /><W x={bar.x} y={46} size={10}>{bar.t}</W></g>)}
      {at === 0 && <Tags x={192} y={56} width={118} labels={["Urothelial", "Starts in lining"]} lit={index => index === 0} />}
      {at === 1 && <Tags x={192} y={56} width={118} labels={["Not in muscle", "CIS, Ta or T1"]} lit={() => false} />}
      {at === 2 && <Tags x={192} y={44} width={118} labels={["Low", "Intermediate", "High"]} lit={index => index === 1} />}
      {at === 3 && <Tags x={192} y={44} width={118} labels={["T2: muscle", "T3: fatty tissue", "T4: outside"]} lit={() => true} />}
      {at === 4 && <Cells x={210} y={96} gap={42} />}
      <Cap>{["Most start in the bladder lining", "Ta, T1 or CIS: not in the muscle", "Low, intermediate or high risk", "T2 to T4: into or through the muscle", "Grade: how like normal cells they look"][at]}</Cap>
    </svg>} />;
}

function BlcCamera(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const x = (month: number) => 70 + month * 3.8;
  const rows = [{ t: "Low", m: [3, 12] }, { t: "Moderate", m: [3, 9, 18, 30, 42, 54] }, { t: "High", m: [3, 6, 9, 12, 15, 18, 21, 24, 30, 36, 42, 48, 60] }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="The camera check that keeps watch" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A thin camera tube, and how often cystoscopies happen for each risk group">
      {at === 0 && <g><Person x={80} y={150} scale={1.3} /><Bubble x={206} y={66} text="How are you feeling?" width={160} /></g>}
      {at === 1 && <g>
        <path d="M24 170 C80 170, 120 120, 184 92" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="192" cy="88" r="12" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="192" cy="88" r="5" fill={INK} />
        {[-14, 0, 14].map(dy => <path key={dy} d={`M208 ${88 + dy / 2} L236 ${88 + dy * 1.6}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />)}
        <Tags x={180} y={120} width={120} labels={["You are awake", "A few minutes"]} lit={() => false} />
      </g>}
      {at === 2 && <g>
        {rows.map((row, index) => { const y = 64 + index * 36; return <g key={row.t}>
          <path d={`M${x(0)} ${y} H${x(60)}`} stroke={LINE} strokeWidth="2" />
          <W x={20} y={y + 4} size={10} anchor="start">{row.t}</W>
          {row.m.map(month => <circle key={month} cx={x(month)} cy={y} r="4" fill={INK} />)}
        </g>; })}
        <W x={20} y={170} size={10} anchor="start">Years</W>
        {[1, 2, 3, 4, 5].map(year => <W key={year} x={x(year * 12)} y={170} size={10}>{year}</W>)}
      </g>}
      {at === 3 && <g>
        {[{ x: 80, t: "6 months" }, { x: 160, t: "12 months" }, { x: 240, t: "24 months" }].map(scan => <g key={scan.t}><Scanner x={scan.x} y={80} r={24} /><W x={scan.x} y={132} size={10.5}>{scan.t}</W></g>)}
        <W x={160} y={164} size={10.5}>And blood tests at least once a year</W>
      </g>}
      {at === 4 && <g>
        <circle cx="90" cy="100" r="44" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />
        <Phone x={90} y={100} /><Bubble x={222} y={70} text="New symptoms?" width={130} />
      </g>}
      <Cap>{["Checks ask how you are feeling", "A thin camera; a few minutes, awake", "Often every 3 to 6 months at first", "After removal: CT at 6, 12, 24 months", "New symptoms? Contact your team"][at]}</Cap>
    </svg>} />;
}

function BlcCatheter(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const wall = [[60, 84], [72, 70], [92, 64], [112, 70], [124, 84], [120, 106], [104, 120], [80, 120], [64, 106]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Into the bladder" title="Medicine that goes straight in" label="Treatment into the bladder" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bladder with medicine put in through a catheter, a clock, and when to call">
      <Bladder x={92} y={96} />
      {at === 0 && wall.map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />)}
      {(at === 2 || at === 3) && <path d="M92 186 V112" stroke={INK} strokeWidth="3" strokeDasharray="5 4" />}
      {at === 0 && <Tags x={176} y={60} width={128} labels={["BCG", "Mitomycin C"]} lit={() => false} />}
      {at === 1 && <g><Squares x={172} y={60} count={6} filled={6} labels={["1", "2", "3", "4", "5", "6"]} /><W x={238} y={102} size={10.5}>Induction course</W><W x={238} y={128} size={10.5}>Then maintenance</W></g>}
      {at === 2 && <g><Clock x={238} y={84} r={30} hand={1.05} /><W x={238} y={136} size={10.5}>2 hours with BCG</W></g>}
      {at === 3 && <Tags x={166} y={40} width={142} labels={["Sit to pass urine", "Bleach, 15 minutes", "2 to 3 litres a day"]} lit={() => false} />}
      {at === 4 && <Tags x={166} y={40} width={142} labels={["Fever and chills", "Joint or muscle pain", "Cough or a rash"]} lit={() => true} />}
      <Cap>{["Helps stop it coming back or growing", "Once a week for 6 weeks, to start", "Hold it in for 2 hours with BCG", "Precautions for 6 hours after BCG", "Fever, chills: contact your doctor now"][at]}</Cap>
    </svg>} />;
}

function BlcRecoveryPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stops = ["Surgery", "Ward", "Home", "Outside"];
  const lit = [[0, 1, 2, 3], [0], [1], [2, 3], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Bladder removal" title="A big operation, a steady recovery" label="Bladder removal" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from surgery to the ward, home and outside, with what helps along the way">
      <path d="M44 160 H284" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {stops.map((stop, index) => { const x = 44 + index * 80, on = lit.includes(index); return <g key={stop} opacity={fade(on)}>
        <circle cx={x} cy={160} r="11" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={x} y={188} size={10}>{stop}</W>
      </g>; })}
      {at === 0 && <g><Person x={120} y={104} scale={1.1} fill={SOFT} /><Person x={160} y={104} scale={1.1} /><Person x={200} y={104} scale={1.1} fill={SOFT} /></g>}
      {at === 1 && <g>
        <Box x={16} y={40} width={92} text="Urostomy" /><Box x={114} y={40} width={92} text="Neobladder" /><Box x={212} y={40} width={92} text="Pouch" />
        <W x={160} y={104} size={10.5}>Made from part of your bowel</W>
      </g>}
      {at === 2 && <g>
        <rect x="84" y="104" width="80" height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M84 96 V130 M164 118 V130" stroke={INK} strokeWidth="3" />
        <ellipse cx="100" cy="100" rx="11" ry="5" fill={SOFT} />
        <W x={124} y={76} size={12}>5 to 14 days</W>
        <W x={246} y={100} size={10.5}>Drip, drains, catheter</W>
      </g>}
      {at === 3 && <g><Footsteps points={[[150, 150], [168, 146], [190, 150], [216, 146]]} /><Person x={252} y={128} scale={1.1} /></g>}
      {at === 4 && <g>
        <Tags x={24} y={30} width={160} labels={["Chest pain", "Short of breath", "Coughing up blood"]} lit={() => true} />
        <Badge x={250} y={68} text="999" width={70} />
      </g>}
      <Cap>{["With support, people usually cope well", "A new way to pass urine is made", "5 to 14 days in hospital", "Do a bit more every day", "Chest pain, breathless: call 999 now"][at]}</Cap>
    </svg>} />;
}

function BlcFlatBag(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const tags = [
    ["Made from the ileum", "No nerves: no pain", "Mucus is normal"],
    ["Flat and watertight", "A tap to empty it", "A bigger bag at night"],
    ["Clean the stoma", "Empty the bag", "Change it"],
    ["Blood from inside", "Sore skin around it", "A bulge nearby"],
    ["Work", "Hobbies", "Swimming"],
  ][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Urostomy" title="A flat bag, a full life" label="Urostomy" credit="Illustration: Rehyn. A picture of the idea, not anyone's own body."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body outline with a small stoma and a flat bag under clothes, and life carrying on">
      <circle cx="80" cy="36" r="15" fill={SOFT} />
      <path d="M30 186 V100 C30 70 50 58 80 58 C110 58 130 70 130 100 V186" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="108" cy="124" r="6" fill={GOLD} stroke={INK} strokeWidth="1.5" className={at === 0 && !still ? "lib-why-pulse" : undefined} />
      {at > 0 && <g>
        <rect x="94" y="112" width="30" height="58" rx="10" fill={TINT} stroke={INK} strokeWidth="2" opacity=".9" />
        <rect x="104" y="170" width="10" height="9" rx="2" fill={at === 1 ? GOLD : INK} />
      </g>}
      <Tags x={152} y={44} width={154} labels={tags} lit={() => at === 2 || at === 4} />
      <Cap>{["The stoma does not hurt: no nerves", "A flat bag, emptied by a small tap", "A nurse shows you how to change it", "Report blood from inside the stoma", "Many go back to work and swimming"][at]}</Cap>
    </svg>} />;
}

function BlcClockPint(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const level = 0.4, top = 170 - 128 * level, spread = 10 * (170 - top) / 128;
  return <MemoryBand props={props} state={s} tone="theme" kicker="A new bladder" title="Learning a new bladder by the clock" label="A new bladder" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A new bladder, a clock for emptying it every few hours, and a pint glass">
      {(at === 0 || at === 1 || at === 4) && <Bladder x={84} y={92} fill={at === 0 ? TINT : WHITE} />}
      {at === 1 && <path d="M84 186 V110" stroke={INK} strokeWidth="3" strokeDasharray="5 4" />}
      {at === 2 && <g>
        <Clock x={84} y={96} r={54} hand={0} />
        {[0, 1, 2, 3, 4, 5].map(index => { const angle = index * Math.PI / 3; return <circle key={index} cx={84 + 44 * Math.sin(angle)} cy={96 - 44 * Math.cos(angle)} r="5" fill={GOLD} />; })}
        <path d="M196 42 L284 42 L274 170 L206 170 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <path d={`M${206 - spread} ${top} H${274 + spread} L274 170 H206 Z`} fill={SOFT} />
        <W x={240} y={190} size={10.5}>About a pint, in time</W>
      </g>}
      {at === 3 && <Moon x={80} y={90} />}
      {at === 0 && <Tags x={166} y={44} width={142} labels={["Made from bowel", "Joined to urethra", "Not for everyone"]} lit={index => index === 0} />}
      {at === 1 && <Tags x={166} y={60} width={142} labels={["A few weeks", "Flush it every day"]} lit={() => false} />}
      {at === 3 && <Tags x={156} y={60} width={152} labels={["Pelvic floor exercises", "Fewer evening drinks"]} lit={index => index === 0} />}
      {at === 4 && <Tags x={166} y={44} width={142} labels={["Wash-outs", "Blood tests", "A toilet card"]} lit={() => false} />}
      <Cap>{["Made from a section of bowel", "A catheter for a few weeks at first", "Empty it every 2 to 3 hours at first", "Pelvic floor exercises help control", "It gets easier with time and practice"][at]}</Cap>
    </svg>} />;
}

function BlcSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const step = [0, 0, 1, 2, 3][at];
  const top = (index: number) => 180 - (index + 1) * 26;
  const px = 130 + step * 34 + 17;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Fatigue" title="Building back your energy" label="Fatigue" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person climbing a flight of steps, one at a time">
      <path d="M130 180 V154 H164 V128 H198 V102 H232 V76 H266 V50 H300 V180 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <Person x={px} y={top(step) - 13} scale={0.9} fill={at === 0 ? SOFT : INK} />
      {at === 0 && <Moon x={60} y={70} />}
      {at === 1 && <Tags x={16} y={34} width={104} labels={["Surgery", "Radiotherapy", "BCG"]} lit={() => true} />}
      {at === 2 && <Footsteps points={[[140, 150], [154, 152], [176, 124], [190, 126]]} />}
      {at === 3 && <g><rect x="22" y="34" width="90" height="110" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={67} y={56} size={10.5}>Diary</W>{[76, 96, 116].map(y => <path key={y} d={`M34 ${y} H100`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}<W x={67} y={136} size={12} serif>0 to 10</W></g>}
      {at === 4 && <Bubble x={164} y={36} text="Tell your team" width={116} />}
      <Cap>{["Exhausted even after rest and sleep", "Surgery, radiotherapy and BCG tire you", "Walking quickly can reduce fatigue", "Score it from 0 to 10 in a diary", "Tell your team about fatigue"][at]}</Cap>
    </svg>} />;
}

function BlcQuitLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const aids = [{ x: 50, t: "Patches" }, { x: 120, t: "Gum" }, { x: 190, t: "Sprays" }, { x: 260, t: "Tablets" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Stopping smoking" title="It is never too late to stop" label="Stopping smoking" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A cigarette, what changes after stopping, and the support and aids that help">
      {at === 0 && <g>
        <rect x="20" y="70" width="96" height="16" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="96" y="70" width="20" height="16" rx="3" fill={SOFT} />
        <path d="M24 62 c-6 -8 6 -12 0 -20 M36 60 c-6 -8 6 -12 0 -20" stroke={SOFT} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <Tags x={168} y={30} width={136} gap={44} labels={["Smoke chemicals", "Into the pee", "Bladder lining"]} lit={index => index === 2} />
        {[56, 100].map(y => <path key={y} d={`M236 ${y + 2} V${y + 14} M230 ${y + 8} L236 ${y + 14} L242 ${y + 8}`} stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />)}
      </g>}
      {at === 1 && <g><circle cx="74" cy="108" r="40" fill="none" stroke={GOLD} strokeWidth="3" /><Person x={74} y={140} scale={1.3} /><Tags x={150} y={44} width={156} labels={["Heals more quickly", "Fewer chest infections", "Better circulation"]} lit={() => true} /></g>}
      {at === 2 && <g>
        <path d="M30 120 H290" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
        {[{ x: 40, t: "Stop" }, { x: 160, t: "48 hours" }, { x: 270, t: "72 hours" }].map(mark => <g key={mark.t}><circle cx={mark.x} cy={120} r="9" fill={INK} /><W x={mark.x} y={148} size={10.5}>{mark.t}</W></g>)}
        <circle cx="160" cy="78" r="20" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={160} y={83} size={12}>CO</W>
        {[64, 78, 92].map(y => <path key={y} d={`M250 ${y} q10 -6 20 0 t20 0`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />)}
      </g>}
      {at === 3 && <g><Phone x={74} y={100} /><W x={206} y={80} size={11}>Smokefree helpline</W><W x={206} y={106} size={15} serif>0300 123 1044</W><W x={206} y={138} size={10.5}>Support up to 12 weeks</W></g>}
      {at === 4 && <g>
        <rect x="34" y="80" width="32" height="32" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="50" cy="96" r="6" fill={SOFT} />
        <rect x="104" y="88" width="32" height="16" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="180" y="84" width="20" height="30" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="185" y="76" width="10" height="8" fill={INK} />
        <Pill x={260} y={96} />
        {aids.map(aid => <W key={aid.t} x={aid.x} y={140} size={10.5}>{aid.t}</W>)}
      </g>}
      <Cap>{["Around half are caused by smoking", "Stopping may help treatment work", "After 48 hours: carbon monoxide drops", "4 times more likely to quit with help", "Patches, gum, sprays and tablets"][at]}</Cap>
    </svg>} />;
}

function BlcHands(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Closeness" title="Closeness, in your own time" label="Sex and intimacy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people side by side, with the help that is there and a heart between them">
      <Person x={56} y={170} scale={1.2} /><Person x={264} y={170} scale={1.2} fill={SOFT} />
      {at === 0 && <Tags x={96} y={34} width={128} labels={["Tablets", "Vacuum pump", "Implants"]} lit={() => false} />}
      {at === 1 && <Tags x={96} y={34} width={128} labels={["Dilators", "Lubricant", "Moisturiser"]} lit={() => false} />}
      {at === 2 && <Tags x={90} y={34} width={140} labels={["Gels and creams", "Dilators", "Erection treatments"]} lit={() => false} />}
      {at === 3 && <g><HeartShape x={160} y={130} size={50} /><Tags x={90} y={34} width={140} labels={["Empty the bag first", "A bag that fits well"]} lit={() => true} /></g>}
      {at === 4 && <g><path d="M80 160 Q160 118 240 160" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" /><HeartShape x={160} y={82} size={56} fill={GOLD} /></g>}
      <Cap>{["Tablets, pumps and implants can help", "Dilators and lubricants can help", "Gels, creams and dilators can help", "Sex will not harm the stoma", "Hugs and touch can help you feel close"][at]}</Cap>
    </svg>} />;
}

function BlcSuitcase(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and travel" title="Back to work, and away again" label="Work and travel" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk with a laptop and a toilet sign, the Equality Act, and a suitcase">
      <g opacity={fade(at === 0 || at === 2)}>
        <rect x="50" y="108" width="60" height="30" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M20 140 H150 M30 140 V182 M140 140 V182" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      </g>
      {at === 0 && <g><rect x="30" y="34" width="70" height="28" rx="6" fill={INK} /><W x={65} y={52} size={11} fill={WHITE}>Toilet</W><path d="M65 62 V100" stroke={INK} strokeWidth="2" strokeDasharray="4 4" /></g>}
      {at === 1 && <g><Doc x={186} y={34} width={110} height={120} /><W x={241} y={86} size={12}>Equality</W><W x={241} y={104} size={12}>Act 2010</W></g>}
      {at === 2 && <g><Squares x={178} y={48} count={5} filled={3} size={20} gap={25} labels={["M", "T", "W", "T", "F"]} /><W x={238} y={96} size={10.5}>Phased return</W><Clock x={238} y={132} r={18} hand={2} /></g>}
      {(at === 3 || at === 4) && <g opacity={at === 3 ? 1 : 0.4}>
        <rect x="196" y="96" width="100" height="74" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M228 96 V84 H264 V96" stroke={INK} strokeWidth="3" fill="none" />
        {at === 3 && <W x={246} y={138} size={11}>2 x supplies</W>}
      </g>}
      {at === 4 && <Bubble x={238} y={54} text="Ask before booking" width={140} />}
      <Cap>{["Toilet access at work after diversion", "The law treats cancer as a disability", "A phased return and extra breaks", "Pack twice your normal stoma supplies", "Ask your team before you book"][at]}</Cap>
    </svg>} />;
}

function BlcSignposts(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const signs = [{ y: 40, t: "111", right: true }, { y: 74, t: "116 123", right: false }, { y: 108, t: "999", right: true }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="The worry, and the way through" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person on a path into open ground, with support along the way and signposts to help">
      <path d="M20 196 C100 176, 110 140, 180 132 S280 112, 320 104" stroke={LINE} strokeWidth="14" fill="none" strokeLinecap="round" />
      <Person x={84} y={156} scale={1.1} />
      {at === 0 && <g>{[[150, 52, 10, GOLD], [186, 76, 6, SOFT], [226, 44, 14, SOFT], [266, 70, 8, GOLD]].map(([cx, cy, r, fill]) => <circle key={`${cx}`} cx={cx as number} cy={cy as number} r={r as number} fill={fill as string} className={still ? undefined : "lib-v2-breathe is-slow"} />)}</g>}
      {at === 1 && <Tags x={166} y={14} width={142} gap={30} labels={["Get involved", "Talk about feelings", "Manage stress", "Do what you enjoy"]} lit={() => true} />}
      {at === 2 && <g><ellipse cx="230" cy="56" rx="64" ry="26" fill={WHITE} stroke={SOFT} strokeWidth="3" /><W x={230} y={60} size={11}>Not a weakness</W></g>}
      {at === 3 && <g><Bubble x={210} y={34} text="See a GP" width={100} /><Tags x={166} y={64} width={142} labels={["Talking therapies", "Medicine"]} lit={() => false} /></g>}
      {at === 4 && <g>
        <path d="M240 24 V140" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        {signs.map(sign => <g key={sign.t}>
          <path d={sign.right ? `M240 ${sign.y - 12} H298 L308 ${sign.y} L298 ${sign.y + 12} H240 Z` : `M240 ${sign.y - 12} H182 L172 ${sign.y} L182 ${sign.y + 12} H240 Z`} fill={WHITE} stroke={INK} strokeWidth="2" />
          <W x={sign.right ? 272 : 208} y={sign.y + 4} size={11}>{sign.t}</W>
        </g>)}
      </g>}
      <Cap>{["All sorts of feelings come and go", "Focus on what you can control", "Depression is a real illness", "See a GP; talking therapies can help", "Urgent help: 111, 116 123 or 999"][at]}</Cap>
    </svg>} />;
}

// ==== Kidney cancer =========================================================================================

function KcOptions(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your treatment" title="Surgery first, other options when needed" label="Your treatment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A kidney, with surgery, freezing, heating, scans and drug treatments around it">
      <Kidney x={84} y={100} s={1.15} />
      <circle cx="90" cy="62" r="9" fill={GOLD} stroke={INK} strokeWidth="1.5" />
      {at === 1 && <path d="M46 80 H124" stroke={INK} strokeWidth="2.5" strokeDasharray="6 5" />}
      {at === 0 && <Tags x={166} y={44} width={140} labels={["Type and size", "Has it spread?", "Your general health"]} lit={() => false} />}
      {at === 1 && <g>
        <Kidney x={204} y={92} s={0.6} /><path d="M184 80 H222" stroke={INK} strokeWidth="2.5" strokeDasharray="5 4" /><rect x="186" y="62" width="34" height="18" fill={GOLD} opacity=".6" />
        <Kidney x={272} y={92} s={0.6} fill={INK} />
        <W x={204} y={140} size={10.5}>Part</W><W x={272} y={140} size={10.5}>Whole</W>
      </g>}
      {at === 2 && <g>
        <g transform="translate(190 82)" stroke={INK} strokeWidth="3" strokeLinecap="round">{[0, 60, 120].map(angle => <path key={angle} transform={`rotate(${angle})`} d="M0 -16 V16 M-5 -11 L0 -6 L5 -11 M-5 11 L0 6 L5 11" fill="none" />)}</g>
        {[0, 1, 2].map(index => <path key={index} d={`M${232 + index * 8} 66 q6 8 0 16 q-6 8 0 16`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />)}
        <ellipse cx="288" cy="82" rx="18" ry="11" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="288" cy="82" r="5" fill={INK} />
        <W x={190} y={126} size={10.5}>Freeze</W><W x={240} y={126} size={10.5}>Heat</W><W x={288} y={126} size={10.5}>Scans</W>
      </g>}
      {at === 3 && <Tags x={160} y={44} width={146} labels={["Targeted medicines", "Immunotherapy", "Embolisation"]} lit={index => index < 2} />}
      {at === 4 && <g><Person x={232} y={156} scale={1.2} fill={SOFT} /><Bubble x={226} y={56} text="Ask any questions" width={140} /></g>}
      <Cap>{["Stage 1 or 2: usually surgery", "Part or all of the kidney removed", "Freeze, heat, or scan and watch", "Drugs if it spread or came back", "Your nurse specialist: main contact"][at]}</Cap>
    </svg>} />;
}

function KcRuler(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const cm = (value: number) => 40 + value * 24;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stage and grade" title="Stage, grade and type, explained" label="Stage and grade" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A kidney beside a ruler marked at 4cm and 7cm, with the letters of staging and the grades">
      <Kidney x={80} y={72} s={0.85} />
      <circle cx="84" cy="44" r={at === 1 || at === 2 ? 11 : 8} fill={GOLD} stroke={INK} strokeWidth="1.5" />
      {at === 0 && <g>
        {Array.from({ length: 10 }, (_, index) => <circle key={index} cx={44 + index * 26} cy={148} r="8" fill={index < 8 ? INK : WHITE} stroke={INK} strokeWidth="2" />)}
        <Tags x={168} y={30} width={130} labels={["Type", "Stage", "Grade"]} lit={() => false} />
      </g>}
      {(at === 1 || at === 2) && <g>
        <path d={`M${cm(0)} 150 H${cm(10)}`} stroke={INK} strokeWidth="3" />
        {Array.from({ length: 11 }, (_, index) => <path key={index} d={`M${cm(index)} 150 V${index === 4 || index === 7 ? 136 : 142}`} stroke={index === 7 && at === 1 ? GOLD : INK} strokeWidth={index === 4 || index === 7 ? 3.5 : 2} />)}
        <W x={cm(4)} y={170} size={10.5}>4cm</W><W x={cm(7)} y={170} size={10.5}>7cm</W>
      </g>}
      {at === 1 && ["1", "2", "3", "4"].map((stage, index) => <Box key={stage} x={168 + index * 34} y={40} width={28} height={30} text={stage} size={11} />)}
      {at === 2 && <g>
        <W x={cm(4)} y={126} size={11}>T1a</W><W x={cm(7)} y={126} size={11}>T1</W>
        {[{ l: "T", t: "Size" }, { l: "N", t: "Nodes" }, { l: "M", t: "Spread" }].map((item, index) => <g key={item.l}>
          <rect x={170 + index * 44} y="26" width="36" height="36" rx="8" fill={INK} /><W x={188 + index * 44} y={51} size={18} fill={WHITE} serif>{item.l}</W>
          <W x={188 + index * 44} y={80} size={10}>{item.t}</W>
        </g>)}
      </g>}
      {at === 3 && <g><Cells x={196} y={70} gap={44} /><W x={196} y={140} size={10.5}>Low grade</W><W x={284} y={140} size={10.5}>High grade</W></g>}
      {at === 4 && <g><Person x={224} y={158} scale={1.2} fill={SOFT} /><Bubble x={224} y={58} text="Ask your doctor" width={130} /></g>}
      <Cap>{["Around 80 in 100 are renal cell", "Stage 1: 7cm or smaller, in the kidney", "T: size; N: lymph nodes; M: spread", "Low grade cells grow slowly", "Ask your doctor what applies to you"][at]}</Cap>
    </svg>} />;
}

function KcRoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="Five years of checks, step by step" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A road of check-ups that thin out over the years, with scans and a phone for between visits">
      <g opacity={at === 3 || at === 4 ? 0.4 : 1}>
        <path d="M20 132 H300" stroke={LINE} strokeWidth="18" strokeLinecap="round" />
        <path d="M24 132 H296" stroke={WHITE} strokeWidth="2" strokeDasharray="8 8" />
      </g>
      {at === 0 && <g>
        {[40, 60, 80, 104, 134, 172, 220, 280].map(x => <circle key={x} cx={x} cy={132} r="5" fill={INK} />)}
        <W x={50} y={164} size={10.5}>Year 1</W><W x={276} y={164} size={10.5}>Later</W>
      </g>}
      {at === 1 && <g>
        <Phone x={60} y={68} />
        <rect x="124" y="40" width="60" height="58" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="124" y="40" width="60" height="14" rx="6" fill={INK} />
        <W x={154} y={80} size={16} serif>6</W><W x={154} y={92} size={9.5}>weeks</W>
        <circle cx="60" cy="132" r="6" fill={INK} /><circle cx="154" cy="132" r="6" fill={INK} />
      </g>}
      {at === 2 && <g>
        {[50, 110, 170, 230].map(x => <Scanner key={x} x={x} y={72} r={18} />)}
        <rect x="270" y="48" width="32" height="52" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={286} y={80} size={11}>GP</W>
        <W x={160} y={166} size={10.5}>Then follow-up with your GP</W>
      </g>}
      {at === 3 && <g><Person x={64} y={100} scale={1.1} fill={SOFT} /><Tags x={150} y={24} width={152} labels={["Examination", "Kidney function tests", "Your questions"]} lit={index => index === 1} /></g>}
      {at === 4 && <g><circle cx="160" cy="72" r="44" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} /><Phone x={160} y={72} /></g>}
      <Cap>{["Fewer appointments as years go by", "First visit about 6 weeks after", "CT scans for at least 5 years", "Tests to check how your kidneys work", "Worried between visits? Get in touch"][at]}</Cap>
    </svg>} />;
}

function KcTwoFilters(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="One kidney" title="One kidney, doing the work of two" label="One kidney" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="One kidney doing the work of two, with tests and ways to protect it">
      <Kidney x={88} y={96} s={1.2} fill={at === 0 ? INK : WHITE} />
      {at === 0 && <g>
        <circle cx="80" cy="76" r="8" fill={GOLD} /><circle cx="80" cy="116" r="8" fill={GOLD} />
        <Kidney x={220} y={96} s={1.2} dash />
      </g>}
      {at === 1 && <g>
        <path d="M150 70 H126 M134 62 L126 70 L134 78" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
        <Tags x={166} y={40} width={140} labels={["Filters the blood", "Fluid and salt", "Blood pressure"]} lit={() => true} />
      </g>}
      {at === 2 && <g>
        <path d="M188 64 H212 L208 112 H192 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><rect x="186" y="56" width="28" height="8" rx="2" fill={INK} />
        <path d="M270 58 C282 76, 288 86, 288 96 A18 18 0 0 1 252 96 C252 86, 258 76, 270 58 Z" fill={GOLD} stroke={INK} strokeWidth="2.5" />
        <W x={200} y={140} size={10.5}>Urine test</W><W x={270} y={140} size={10.5}>Blood test</W>
      </g>}
      {at === 3 && <g>
        <Tags x={166} y={24} width={140} labels={["Stop smoking", "Less alcohol", "Be more active"]} lit={() => true} />
        <ellipse cx="236" cy="160" rx="22" ry="12" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M226 160 H246" stroke={INK} strokeWidth="2" />
        <path d="M206 176 L266 144" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      </g>}
      {at === 4 && <g><Bubble x={236} y={58} text="Ask your doctor first" width={150} /><Pill x={236} y={124} /></g>}
      <Cap>{["One kidney can do the work of two", "Filters blood and helps blood pressure", "Regular urine and blood tests check it", "You may need to avoid contact sports", "Ask before taking ibuprofen or aspirin"][at]}</Cap>
    </svg>} />;
}

function KcTwelveWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stops = [{ x: 50, t: "Hospital" }, { x: 165, t: "6 weeks" }, { x: 280, t: "12 weeks" }];
  const lit = [[0], [0], [1, 2], [], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="After surgery" title="Twelve weeks back to yourself" label="After surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A line from a hospital bed to six and twelve weeks, with walking, a wound and signs to act on">
      <path d="M50 152 H280" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {stops.map((stop, index) => <g key={stop.t} opacity={fade(lit.includes(index) || at > 2)}><circle cx={stop.x} cy={152} r="9" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={stop.x} y={178} size={10}>{stop.t}</W></g>)}
      {(at === 0 || at === 1) && <g>
        <rect x="20" y="104" width="74" height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M20 94 V132 M94 118 V132" stroke={INK} strokeWidth="3" />
        <ellipse cx="36" cy="100" rx="11" ry="5" fill={SOFT} />
      </g>}
      {at === 0 && <g><Pill x={170} y={72} /><Clock x={234} y={72} r={22} hand={1.5} /></g>}
      {at === 1 && <g><Person x={150} y={110} scale={1.1} /><Footsteps points={[[178, 124], [196, 120], [214, 124]]} /></g>}
      {at === 2 && <g><Battery x={110} y={44} level={0.8} /><Person x={280} y={118} scale={1.1} /></g>}
      {at === 3 && <g>
        <circle cx="150" cy="30" r="13" fill={SOFT} /><path d="M110 136 V82 C110 62 126 50 150 50 C174 50 190 62 190 82 V136" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[[136, 92], [164, 100], [150, 120]].map(([x, y]) => <path key={`${x}-${y}`} d={`M${x - 8} ${y} H${x + 8}`} stroke={GOLD} strokeWidth="4" strokeLinecap="round" />)}
        <W x={262} y={84} size={16} serif>10 days</W>
      </g>}
      {at === 4 && <g><Tags x={20} y={24} width={160} labels={["Swollen, hot leg", "Chest pain", "Short of breath"]} lit={() => true} /><Badge x={250} y={62} text="999" width={70} /></g>}
      <Cap>{["Painkillers work best taken regularly", "Moving early helps you recover", "Most feel recovered by about 12 weeks", "A bulge by the scar? Tell your team", "Clot signs: call 999 or go to A&E"][at]}</Cap>
    </svg>} />;
}

function KcTabletDrip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const left = at !== 3, right = at !== 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Cancer drugs" title="Tablets at home, drips every few weeks" label="Cancer drugs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A strip of weeks of tablets beside a drip stand, with a treatment card">
      <g opacity={fade(left)}>
        <Pill x={86} y={50} />
        <Squares x={24} y={76} count={6} filled={4} size={18} gap={21} labels={["1", "2", "3", "4", "5", "6"]} />
        <W x={86} y={122} size={10.5}>{at === 2 ? "4 weeks on, 2 off" : "Targeted tablets"}</W>
      </g>
      <g opacity={fade(right)}>
        <path d="M236 26 V164 M216 164 H256" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
        <rect x="218" y="34" width="36" height="46" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="222" y="54" width="28" height="22" rx="3" fill={SOFT} />
        <path d="M236 80 C236 110, 210 120, 210 150" stroke={INK} strokeWidth="2" strokeDasharray="4 4" fill="none" />
        <W x={236} y={186} size={10.5}>Immunotherapy</W>
      </g>
      {at === 1 && <W x={160} y={110} size={26} serif>+</W>}
      {at === 3 && <g><rect x="262" y="96" width="48" height="30" rx="5" fill={GOLD} stroke={INK} strokeWidth="2" /><W x={286} y={115} size={10}>Card</W></g>}
      {at === 4 && <g><path d="M146 92 A16 16 0 1 1 152 116" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" /><path d="M144 110 L152 117 L160 110" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" /></g>}
      <Cap>{["Targeted drugs and immunotherapy", "Main treatment for advanced cancer", "Sunitinib: 4 weeks on, 2 weeks off", "A drip every 3 to 6 weeks", "Other drugs can be tried"][at]}</Cap>
    </svg>} />;
}

function Kc24Hour(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Side effects" title="Know your 24-hour number" label="Side effects" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A phone with the hospital's 24-hour number, and the side effects to call about">
      {at === 1 && <circle cx="75" cy="100" r="74" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      <rect x="40" y="30" width="70" height="140" rx="12" fill={INK} /><rect x="48" y="44" width="54" height="106" rx="4" fill={WHITE} />
      <W x={75} y={100} size={20} serif>24h</W><W x={75} y={122} size={9.5}>Hospital</W>
      {at === 0 && <Tags x={140} y={60} width={166} labels={["Tell your team early", "Do not self-treat"]} lit={index => index === 0} />}
      {at === 1 && <g><Thermo x={176} y={94} /><W x={200} y={74} size={11} anchor="start">Above 37.5°C</W><W x={200} y={124} size={11} anchor="start">Below 36°C</W></g>}
      {at === 2 && <Tags x={140} y={34} width={166} gap={32} labels={["Tiredness", "Diarrhoea", "Sore mouth", "Sore hands or feet"]} lit={index => index === 3} />}
      {at === 3 && <Tags x={140} y={34} width={166} gap={32} labels={["Diarrhoea 4+ a day", "A cough that persists", "Yellow skin or eyes", "A spreading rash"]} lit={() => true} />}
      {at === 4 && <g>
        <path d="M156 66 H188 L184 118 H160 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M159 84 H185 L183 116 H161 Z" fill={SOFT} />
        <circle cx="262" cy="90" r="14" fill={GOLD} />{Array.from({ length: 8 }, (_, index) => { const r = index * Math.PI / 4; return <path key={index} d={`M${262 + 20 * Math.cos(r)} ${90 + 20 * Math.sin(r)} L${262 + 28 * Math.cos(r)} ${90 + 28 * Math.sin(r)}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}
        <W x={172} y={146} size={10.5}>2 litres</W><W x={262} y={146} size={10.5}>SPF 30</W>
      </g>}
      <Cap>{["Side effects can usually be managed", "Above 37.5 or below 36°C: call now", "Sore hands or feet? Call straight away", "Can start even after treatment ends", "Drink at least 2 litres a day"][at]}</Cap>
    </svg>} />;
}

function KcBedBattery(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const level = [0.18, 0.22, 0.3, 0.4, 0.55][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Fatigue" title="Healing takes energy" label="Fatigue" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bed and a battery that rest alone does not refill, with ways to build energy">
      <Battery x={36} y={40} level={level} width={96} />
      <rect x="24" y="140" width="126" height="16" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M24 116 V178 M150 156 V178" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="44" cy="134" rx="13" ry="6" fill={SOFT} />
      {at === 0 && <g>
        {Array.from({ length: 100 }, (_, index) => <circle key={index} cx={194 + (index % 10) * 10} cy={36 + Math.floor(index / 10) * 10} r="3.5" fill={index < 65 ? INK : LINE} />)}
        <W x={239} y={152} size={10.5}>65 in 100</W>
      </g>}
      {at === 1 && <g><Squares x={172} y={60} count={6} filled={6} labels={["1", "2", "3", "4", "5", "6"]} /><W x={238} y={104} size={10.5}>Weeks after surgery</W></g>}
      {at === 2 && <g>
        <path d="M190 112 V96 L206 80 H262 L280 96 H298 V112 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="212" cy="114" r="9" fill={INK} /><circle cx="276" cy="114" r="9" fill={INK} />
        <path d="M186 64 L302 136" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      </g>}
      {at === 3 && <Gauge x={238} y={112} r={52} value={0.4} label="0 to 10" />}
      {at === 4 && <g><Footsteps points={[[186, 150], [202, 146], [218, 150]]} /><Person x={252} y={132} scale={1.1} /></g>}
      <Cap>{["Affects almost 65 in 100 with cancer", "Tired for about 6 weeks after surgery", "Feeling sleepy? Do not drive", "Score it 0 to 10 at times of day", "A short walk each day, then more"][at]}</Cap>
    </svg>} />;
}

function KcWaterSalt(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Kidney function" title="Small habits that protect your kidney" label="Kidney function" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A kidney with a filtering gauge, water, less salt, and medicines to ask about">
      <Kidney x={70} y={100} />
      {at === 0 && <Gauge x={222} y={124} r={58} value={0.75} label="eGFR" />}
      {at === 1 && <g>
        <path d="M172 70 H206 L202 136 H176 Z M206 82 C222 82, 222 112, 204 112" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M175 90 H203 L201 134 H177 Z" fill={SOFT} />
        <path d="M258 96 C258 80, 282 80, 282 96 V134 H258 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[[266, 88], [274, 88], [270, 82]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.8" fill={INK} />)}
        <path d="M296 96 V124 M290 118 L296 124 L302 118" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <W x={189} y={160} size={10.5}>2 litres</W><W x={270} y={160} size={10.5}>Less salt</W>
      </g>}
      {at === 2 && <g><Tags x={158} y={34} width={148} labels={["Aspirin", "Ibuprofen", "Supplements"]} lit={() => false} /><W x={232} y={156} size={11}>Ask first</W></g>}
      {at === 3 && <Tags x={158} y={44} width={148} labels={["Stop smoking", "14 units or fewer", "A healthy weight"]} lit={() => true} />}
      {at === 4 && <Tags x={152} y={44} width={154} labels={["Cloudy or smelly pee", "Burning", "Need to go urgently"]} lit={() => false} />}
      <Cap>{["eGFR: how well your kidney filters", "2 litres a day; go easy on salt", "Ask before shop-bought painkillers", "No more than 14 units a week", "Cloudy or smelly urine? See your GP"][at]}</Cap>
    </svg>} />;
}

function KcCuff(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Blood pressure" title="The quiet pressure on your kidney" label="Blood pressure" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A blood pressure dial linked to a kidney, with readings and what helps">
      <Gauge x={90} y={128} r={62} value={[0.65, 0.65, 0.8, 0.55, 0.85][at]} />
      {at === 0 && <g><path d="M150 112 L206 96" stroke={INK} strokeWidth="2.5" strokeDasharray="5 4" /><Kidney x={244} y={96} s={0.9} /></g>}
      {at === 1 && <g><Box x={172} y={50} width={134} text="Clinic: 140/90" /><Box x={172} y={98} width={134} text="Home: 135/85" lit /></g>}
      {at === 2 && <g><Pill x={240} y={56} /><Tags x={172} y={86} width={134} labels={["Sunitinib", "Pembrolizumab"]} lit={() => false} /></g>}
      {at === 3 && <Tags x={168} y={40} width={138} labels={["150 minutes a week", "Less salt", "14 units or fewer"]} lit={() => true} />}
      {at === 4 && <g><Badge x={196} y={58} text="111" width={50} /><W x={230} y={63} size={10.5} anchor="start">Headaches</W><Badge x={196} y={112} text="999" width={50} /><W x={230} y={117} size={10.5} anchor="start">Chest pain</W></g>}
      <Cap>{["High blood pressure may have no signs", "High: 140/90 at clinic, 135/85 at home", "Sunitinib can raise blood pressure", "150 minutes of activity a week", "Sudden chest pain that stays: call 999"][at]}</Cap>
    </svg>} />;
}

function KcCalendarJar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and money" title="Back to work, with rights behind you" label="Work and money" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The Equality Act, a phased return week by week, a fit note, a grant jar and a money helpline">
      {(at === 0 || at === 1 || at === 3) && <Person x={74} y={150} scale={1.3} />}
      {at === 0 && <g><Doc x={186} y={34} width={110} height={120} /><W x={241} y={86} size={12}>Equality</W><W x={241} y={104} size={12}>Act 2010</W></g>}
      {at === 1 && <g><Bubble x={224} y={52} text="When you feel ready" width={150} /><Clock x={226} y={124} r={22} hand={2.4} /></g>}
      {at === 2 && <g>
        {[30, 50, 70, 90].map((height, index) => <g key={height}><rect x={30 + index * 32} y={160 - height} width="24" height={height} rx="4" fill={INK} /><W x={42 + index * 32} y={178} size={10}>{index + 1}</W></g>)}
        <Doc x={196} y={40} width={92} height={110} /><W x={242} y={74} size={11}>Fit note</W>{[94, 112, 130].map(y => <path key={y} d={`M210 ${y} H272`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
      </g>}
      {at === 3 && <g><path d="M206 64 H264 V74 C276 84, 276 150, 264 160 H206 C194 150, 194 84, 206 74 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><W x={235} y={124} size={28} serif>£</W><W x={235} y={182} size={10.5}>Access to Work</W></g>}
      {at === 4 && <g><Phone x={74} y={100} /><W x={210} y={96} size={15} serif>0808 808 00 00</W><W x={210} y={120} size={10}>Mon to Fri, 8am to 6pm</W></g>}
      <Cap>{["Protected from the day of diagnosis", "Ask your team how long you need off", "A phased return, with a fit note", "Access to Work: no need to pay back", "Money advice: 0808 808 00 00"][at]}</Cap>
    </svg>} />;
}

function KcScanWorry(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="After treatment, the feelings arrive" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with relief and worry, a scanner, and the people and numbers that help">
      <Person x={70} y={160} scale={1.4} />
      {at === 0 && <g><circle cx="150" cy="60" r="18" fill={GOLD} /><path d="M188 72 C176 72, 176 54, 190 54 C192 40, 216 38, 220 52 C234 50, 238 72, 224 72 Z" fill={SOFT} /><W x={150} y={104} size={10.5}>Relief</W><W x={208} y={104} size={10.5}>Worry</W></g>}
      {at === 1 && <g><Scanner x={226} y={104} r={40} /><path d="M108 84 C98 84, 98 70, 110 70 C112 60, 130 58, 134 68 C144 66, 146 84, 136 84 Z" fill={SOFT} /></g>}
      {at === 2 && <g>{Array.from({ length: 14 }, (_, index) => <rect key={index} x={180 + (index % 7) * 18} y={44 + Math.floor(index / 7) * 20} width="14" height="14" rx="3" fill={INK} />)}<W x={241} y={108} size={10.5}>More than 2 weeks?</W></g>}
      {at === 3 && <g><Person x={206} y={162} scale={1.1} fill={SOFT} /><Person x={256} y={162} scale={1.1} fill={SOFT} /><Bubble x={210} y={60} text="Talk it through" width={130} /></g>}
      {at === 4 && <g><Phone x={168} y={96} /><W x={254} y={96} size={17} serif>116 123</W><W x={254} y={120} size={10.5}>Day or night</W></g>}
      <Cap>{["Relief and worry can come together", "Scans can bring back the worry", "Low for over 2 weeks? Tell your doctor", "Talking with others can help", "Samaritans: 116 123, day or night"][at]}</Cap>
    </svg>} />;
}

// ==== Pancreatic cancer =====================================================================================

function PancShape(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const top = ["Scans show the type and stage", "Whipple's, distal or total", "Six months of chemotherapy", "A stent, or bypass surgery", "A high or low temperature"][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your treatment" title="Surgery, chemotherapy and symptom care" label="Your treatment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pancreas in three parts, head, body and tail, with the treatments around it">
      <W x={160} y={24} size={11}>{top}</W>
      <g opacity={at === 4 ? 0.35 : 1}><Pancreas x={150} y={86} s={1.5} lit={at === 1 ? ["head"] : []} /></g>
      {[{ x: 70, t: "Head" }, { x: 141, t: "Body" }, { x: 225, t: "Tail" }].map(part => <W key={part.t} x={part.x} y={156} size={10.5}>{part.t}</W>)}
      {at === 2 && <g><path d="M292 40 V120" stroke={INK} strokeWidth="3" /><rect x="280" y="44" width="24" height="32" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="283" y="58" width="18" height="15" rx="2" fill={SOFT} /></g>}
      {at === 3 && <rect x="48" y="74" width="40" height="12" rx="6" fill={GOLD} stroke={INK} strokeWidth="2" transform="rotate(-24 68 80)" />}
      {at === 4 && <Thermo x={160} y={84} />}
      <Cap>{["Type, stage and your health guide it", "Whipple's: the most common operation", "Chemo begins within 12 weeks", "A stent can ease jaundice", "Infection signs: call the 24-hour line"][at]}</Cap>
    </svg>} />;
}

function PancBilePipe(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const pinched = at === 0;
  const pipe = at < 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Why jaundice, pain and weight loss happen" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bile duct pinched by a lump and held open by a stent, an eye, and where pain and weight loss come from">
      <g opacity={pipe ? 1 : 0.3}>
        <path d={pinched ? "M24 66 H96 C110 66 112 80 120 80 C128 80 130 66 144 66 H200" : "M24 66 H200"} stroke={INK} strokeWidth="3" fill="none" />
        <path d="M24 94 H200" stroke={INK} strokeWidth="3" />
        <circle cx="120" cy={pinched ? 50 : 46} r="16" fill={SOFT} stroke={INK} strokeWidth="2" />
        {(at === 1 || at === 2) && <rect x="70" y="70" width="100" height="20" rx="4" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 3" />}
        {at === 2 && [92, 120, 146].map(x => <circle key={x} cx={x} cy={80} r="4" fill={INK} />)}
        <W x={112} y={120} size={10.5}>Bile duct</W>
      </g>
      {pipe && <g>
        <ellipse cx="262" cy="80" rx="34" ry="18" fill={at === 1 ? WHITE : GOLD} stroke={INK} strokeWidth="2.5" /><circle cx="262" cy="80" r="9" fill={INK} />
        <W x={262} y={120} size={10.5}>{["Yellow eyes", "2 to 3 weeks", "It may come back"][at]}</W>
      </g>}
      {at === 2 && <W x={160} y={160} size={10.5}>Tummy pain, high temperature</W>}
      {at === 3 && <g>
        {Array.from({ length: 8 }, (_, index) => { const r = index * Math.PI / 4; return <path key={index} d={`M${120 + 8 * Math.cos(r)} ${150 + 8 * Math.sin(r)} L${120 + 24 * Math.cos(r)} ${150 + 24 * Math.sin(r)}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}
        <circle cx="120" cy="150" r="7" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />
        <W x={158} y={154} size={10.5} anchor="start">Coeliac plexus</W>
      </g>}
      {at === 4 && <g>
        <Pill x={100} y={148} />
        <rect x="196" y="140" width="60" height="22" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M210 140 A16 16 0 0 1 242 140" stroke={INK} strokeWidth="2.5" fill="none" />
        <W x={100} y={182} size={10.5}>Enzymes</W><W x={226} y={182} size={10.5}>Weight</W>
      </g>}
      <Cap>{["A blocked bile duct causes jaundice", "A stent can open up the blockage", "Signs of infection: contact your team", "Pain can usually be well controlled", "Enzymes can help you digest food"][at]}</Cap>
    </svg>} />;
}

function PancFourStages(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [[0, 1, 2, 3], [0, 1], [2], [3], []][at];
  const note = ["", "Surgery may be possible", "Locally advanced", "Lungs, liver or tummy lining", "Start within 31 days of agreeing"][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Stages" title="What the stage means for you" label="Stages" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four small pancreas outlines for stages 1 to 4, the cancer reaching further in each">
      {[44, 118, 192, 266].map((x, index) => { const on = lit.includes(index); return <g key={x} opacity={at === 4 ? 0.5 : fade(on)}>
        <Pancreas x={x} y={64} s={0.45} />
        <circle cx={x - 20} cy={64} r="6" fill={GOLD} stroke={INK} strokeWidth="1.5" />
        {index >= 1 && [-10, 6].map(dx => <circle key={dx} cx={x + dx} cy={90} r="4" fill={index === 2 ? GOLD : WHITE} stroke={INK} strokeWidth="1.5" />)}
        {index >= 2 && <path d={`M${x - 4} 44 V84`} stroke={INK} strokeWidth="3" />}
        {index === 3 && [-22, 0, 22].map(dx => <circle key={dx} cx={x + dx} cy={30} r="5" fill={GOLD} stroke={INK} strokeWidth="1.5" />)}
        <Box x={x - 15} y={104} width={30} height={26} text={String(index + 1)} lit={on && at !== 4} size={11} />
      </g>; })}
      {at === 0 ? <g><Box x={14} y={148} width={94} text="T: size" /><Box x={113} y={148} width={94} text="N: nodes" /><Box x={212} y={148} width={94} text="M: spread" /></g>
        : <W x={160} y={166} size={11}>{note}</W>}
      <Cap>{["Size, and whether and where it spread", "Stages 1, 2: surgery may be possible", "Stage 3: chemotherapy often first", "Chemotherapy may slow its growth", "It is your choice, with your team"][at]}</Cap>
    </svg>} />;
}

function PancSixMonths(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const x = (year: number) => 30 + year * 52;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Follow-up" title="Check-ups after treatment, step by step" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five years of check-ups, every six months at first and then yearly, with ways to get in touch">
      <g opacity={at === 2 ? 1 : 0.35}>
        <path d={`M${x(0)} 128 H${x(5)}`} stroke={LINE} strokeWidth="5" strokeLinecap="round" />
        {[0.5, 1, 1.5, 2, 3, 4, 5].map(year => <circle key={year} cx={x(year)} cy={128} r="7" fill={at === 2 ? (year <= 2 ? GOLD : INK) : INK} stroke={INK} strokeWidth="1.5" />)}
        <W x={x(0)} y={154} size={10} anchor="start">Years</W>
        {[1, 2, 3, 4, 5].map(year => <W key={year} x={x(year)} y={154} size={10}>{year}</W>)}
      </g>
      {at === 0 && <g>
        <Person x={70} y={80} scale={1} />
        <Phone x={160} y={66} />
        <rect x="224" y="34" width="66" height="48" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Person x={257} y={70} scale={0.6} fill={SOFT} /><path d="M248 92 H266" stroke={INK} strokeWidth="3" />
      </g>}
      {at === 1 && <g>
        <path d="M100 40 C140 22, 200 30, 200 62 C200 96, 130 100, 106 84 C86 72, 82 50, 100 40 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeDasharray="6 4" />
        <W x={146} y={66} size={10.5}>Margins</W>
        {[230, 252, 274].map(cx => <circle key={cx} cx={cx} cy={52} r="8" fill={WHITE} stroke={INK} strokeWidth="2" />)}
        <W x={252} y={84} size={10.5}>Lymph nodes</W>
      </g>}
      {at === 2 && <g><W x={x(1.25)} y={104} size={10.5}>Every 6 months</W><W x={x(4)} y={104} size={10.5}>Every 12 months</W></g>}
      {at === 3 && <g><Phone x={90} y={70} /><Moon x={150} y={56} /><Bubble x={232} y={56} text="Who to call?" width={110} /></g>}
      {at === 4 && <g><Person x={84} y={96} scale={1.1} /><Bubble x={210} y={50} text="Tell someone close" width={140} /></g>}
      <Cap>{["In person, by phone or by video", "Results on the margins and nodes", "Every 6 months for the first 2 years", "Ask who to call out of hours", "Talking to someone close can help"][at]}</Cap>
    </svg>} />;
}

function PancCapsulePlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Enzyme capsules" title="Capsules that do the pancreas's job" label="Enzyme capsules" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate of food with enzyme capsules taken at the start and during the meal, and a cool drink">
      <circle cx="104" cy="104" r="62" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="104" cy="104" r="44" fill="none" stroke={LINE} strokeWidth="2" />
      <ellipse cx="88" cy="94" rx="18" ry="11" fill={SOFT} /><circle cx="120" cy="92" r="10" fill={TINT} stroke={INK} strokeWidth="1.5" /><rect x="90" y="112" width="34" height="12" rx="6" fill={LINE} />
      {at === 1 && <g><Pill x={44} y={170} fill={GOLD} /><Pill x={164} y={170} /></g>}
      {(at === 2 || at === 3) && <Pill x={104} y={180} />}
      {at === 0 && <Tags x={192} y={44} width={116} labels={["Fat", "Protein", "Carbohydrate"]} lit={() => false} />}
      {at === 1 && <Tags x={188} y={60} width={120} labels={["Half at the start", "Half during"]} lit={index => index === 0} />}
      {at === 2 && <g>
        <rect x="192" y="80" width="34" height="40" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M226 88 C238 88, 238 110, 226 110" stroke={INK} strokeWidth="2.5" fill="none" />
        <path d="M200 70 q4 -6 0 -12 M212 70 q4 -6 0 -12" stroke={SOFT} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M186 72 L234 128" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M262 80 H292 L288 120 H266 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={210} y={146} size={10.5}>Not hot</W><W x={278} y={146} size={10.5}>Cool drink</W>
      </g>}
      {at === 3 && <Tags x={188} y={60} width={120} labels={["Food diary", "Dose reviewed"]} lit={() => true} />}
      {at === 4 && <Tags x={188} y={60} width={120} labels={["Made from pork", "Tell ward staff"]} lit={index => index === 1} />}
      <Cap>{["PERT replaces the missing enzymes", "Half with the first mouthfuls", "Swallow whole with a cool drink", "Most people need more than at first", "Tell hospital staff you need PERT"][at]}</Cap>
    </svg>} />;
}

function PancSugarLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Type 3c diabetes" title="Type 3c: a different kind of diabetes" label="Type 3c diabetes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pancreas making insulin and glucagon, and a blood sugar line with 4mmol/l marked">
      <Pancreas x={66} y={58} s={0.55} />
      <g opacity={at === 0 ? 0.45 : 1}>
        <path d="M30 96 H96 M88 90 L96 96 L88 102" stroke={INK} strokeWidth="2.5" fill="none" strokeDasharray={at === 0 ? "4 4" : undefined} strokeLinecap="round" />
        <W x={58} y={120} size={10.5}>Insulin</W><W x={58} y={140} size={10.5}>Glucagon</W>
      </g>
      {(at === 0 || at === 3) && <g>
        <path d="M150 30 V160 H300" stroke={INK} strokeWidth="2.5" fill="none" />
        <path d="M150 132 H300" stroke={GOLD} strokeWidth="2.5" strokeDasharray="6 4" /><W x={298} y={150} size={10} anchor="end">4mmol/l</W>
        <path d={at === 0 ? "M156 70 C190 46, 220 92, 296 56" : "M156 88 C180 98, 196 150, 218 146 C240 142, 250 96, 296 92"} stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        {at === 3 && <circle cx="218" cy="146" r="6" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />}
      </g>}
      {at === 1 && <g><circle cx="232" cy="92" r="46" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="232" cy="92" r="32" fill="none" stroke={LINE} strokeWidth="2" /><ellipse cx="222" cy="86" rx="14" ry="9" fill={SOFT} /><circle cx="244" cy="98" r="8" fill={TINT} stroke={INK} strokeWidth="1.5" /></g>}
      {at === 2 && <Tags x={170} y={60} width={136} labels={["Tablets", "Insulin"]} lit={() => true} />}
      {at === 4 && <Tags x={160} y={60} width={146} labels={["Insulin: tell DVLA", "Illness can raise it"]} lit={() => false} />}
      <Cap>{["Too little insulin and glucagon made", "Managed around your diet", "Tablets or insulin; a nurse helps", "Below 4mmol/l: treat with fast sugar", "Sick for over half a day? Get help now"][at]}</Cap>
    </svg>} />;
}

function PancDayPlates(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots = Array.from({ length: 6 }, (_, index) => ({ meal: index % 2 === 0, angle: index * Math.PI / 3 }));
  return <MemoryBand props={props} state={s} tone="theme" kicker="Eating and weight" title="Eating well when weight is falling" label="Eating and weight" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day drawn as a ring of three small meals and three snacks, with a plate in the middle">
      <circle cx="100" cy="102" r="64" fill="none" stroke={LINE} strokeWidth="4" />
      {spots.map(spot => { const cx = 100 + 64 * Math.sin(spot.angle), cy = 102 - 64 * Math.cos(spot.angle); return spot.meal
        ? <circle key={spot.angle} cx={cx} cy={cy} r="12" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        : <circle key={spot.angle} cx={cx} cy={cy} r="7" fill={at === 2 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />; })}
      <circle cx="100" cy="102" r="26" fill={WHITE} stroke={INK} strokeWidth="2.5" /><ellipse cx="94" cy="98" rx="10" ry="6" fill={SOFT} />
      {at === 0 && <Tags x={186} y={60} width={122} labels={["Usual foods", "With enzymes"]} lit={index => index === 1} />}
      {at === 1 && <Tags x={186} y={40} width={122} labels={["Full fat milk", "Yoghurt", "Eggs, beans, nuts"]} lit={() => true} />}
      {at === 2 && <g><circle cx="198" cy="84" r="9" fill={INK} /><W x={214} y={88} size={11} anchor="start">3 small meals</W><circle cx="198" cy="116" r="6" fill={GOLD} stroke={INK} strokeWidth="2" /><W x={214} y={120} size={11} anchor="start">3 snacks</W></g>}
      {at === 3 && Array.from({ length: 8 }, (_, index) => { const cx = 196 + (index % 4) * 28, cy = 60 + Math.floor(index / 4) * 44; return <path key={index} d={`M${cx} ${cy} H${cx + 20} L${cx + 17} ${cy + 28} H${cx + 3} Z`} fill={TINT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />; })}
      {at === 4 && <g><Person x={246} y={150} scale={1.2} fill={SOFT} /><Bubble x={236} y={50} text="Ask for a dietitian" width={140} /></g>}
      <Cap>{["No special diet; take your enzymes", "More calories and protein", "3 small meals and 3 snacks a day", "About 8 cups of fluids a day", "Ask to see a dietitian"][at]}</Cap>
    </svg>} />;
}

function PancPainScale(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const level = [6, 6, 4, 3, 7][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pain" title="Getting pain under control" label="Pain" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pain scale from 0 to 10, with where pain comes from and what eases it">
      {Array.from({ length: 11 }, (_, index) => <g key={index}>
        <rect x={17 + index * 26} y="22" width="24" height="26" rx="5" fill={index === level ? INK : WHITE} stroke={INK} strokeWidth="1.5" />
        <W x={29 + index * 26} y={39} size={10} fill={index === level ? WHITE : TEXT}>{index}</W>
      </g>)}
      {at === 0 && <g>
        <Pancreas x={120} y={96} s={0.7} />
        {Array.from({ length: 8 }, (_, index) => { const r = index * Math.PI / 4; return <path key={index} d={`M${130 + 7 * Math.cos(r)} ${146 + 7 * Math.sin(r)} L${130 + 20 * Math.cos(r)} ${146 + 20 * Math.sin(r)}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}
        <circle cx="130" cy="146" r="6" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />
        <W x={166} y={150} size={10.5} anchor="start">Coeliac plexus</W>
      </g>}
      {at === 1 && <g><Box x={12} y={104} width={96} text="Background" /><Box x={112} y={104} width={96} text="Breakthrough" /><Box x={212} y={104} width={96} text="Nerve pain" /></g>}
      {at === 2 && <g>
        <Clock x={100} y={124} r={40} hand={0.9} />
        {[0, 1, 2, 3].map(index => { const angle = index * Math.PI / 2; return <circle key={index} cx={100 + 32 * Math.sin(angle)} cy={124 - 32 * Math.cos(angle)} r="5" fill={GOLD} />; })}
        <Pill x={220} y={120} /><W x={220} y={152} size={10.5}>At regular times</W>
      </g>}
      {at === 3 && <g><Tags x={24} y={84} width={128} labels={["Nerve block", "Relaxation"]} lit={() => true} /><Tags x={168} y={84} width={128} labels={["Breathing", "Massage"]} lit={() => true} /></g>}
      {at === 4 && <g><Person x={80} y={170} scale={1.2} /><Bubble x={210} y={104} text="Tell your team now" width={150} /></g>}
      <Cap>{["Pressure on nerves can cause pain", "Background, breakthrough, nerve pain", "Take painkillers at regular times", "Nerve blocks, relaxation, massage", "Worse pain? Tell your team now"][at]}</Cap>
    </svg>} />;
}

function PancTenMinutes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const strip = at === 2 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tiredness" title="Living with extreme tiredness" label="Tiredness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day drawn as a strip, with short blocks of gentle activity and a short nap">
      {at === 0 && <g><Battery x={24} y={66} level={0.15} width={100} fill={SOFT} /><Tags x={160} y={60} width={146} labels={["Mentally drained", "Physically exhausted"]} lit={() => false} /></g>}
      {at === 1 && <g><Tags x={24} y={60} width={128} labels={["Digestion", "Pain"]} lit={() => false} /><Tags x={168} y={60} width={128} labels={["Diabetes", "Feeling sick"]} lit={() => false} /></g>}
      {strip && <g>
        <rect x="24" y="88" width="272" height="30" rx="8" fill={TINT} stroke={INK} strokeWidth="2" />
        {at === 2 ? <g><rect x="116" y="88" width="88" height="30" rx="8" fill={INK} /><W x={160} y={108} size={10.5} fill={WHITE}>Nap: 30 min</W></g>
          : [50, 136, 222].map(x => <g key={x}><rect x={x} y="88" width="50" height="30" rx="8" fill={INK} /><W x={x + 25} y={108} size={10} fill={WHITE}>10 min</W></g>)}
        <W x={24} y={144} size={10.5} anchor="start">Morning</W><W x={296} y={144} size={10.5} anchor="end">Evening</W>
      </g>}
      {at === 4 && <g><Person x={70} y={160} scale={1.2} /><Person x={130} y={160} scale={1.2} fill={SOFT} /><Tags x={178} y={60} width={128} labels={["Chores", "Lifts to hospital"]} lit={() => true} /></g>}
      <Cap>{["Still tired, even after sleeping", "Pain, digestion and diabetes add to it", "Naps of about 30 minutes", "10 minutes, 3 times a day", "Let others take on specific tasks"][at]}</Cap>
    </svg>} />;
}

function PancBubbles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const words = [["Shock", "Fear", "Sadness", "Anger"], ["Down or hopeless?", "On edge?"], ["Your GP", "Your nurse", "Talking therapy", "Medicine"], ["Family", "Friends", "Writing", "Walking"], ["Samaritans", "116 123", "Call 111", "Text SHOUT"]][at];
  const spots = [{ x: 80, y: 36 }, { x: 240, y: 36 }, { x: 74, y: 86 }, { x: 246, y: 86 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood and worry" title="Coping with worry and low moods" label="Mood and worry" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with speech bubbles of feelings and the people and things that help">
      {at === 2 && <circle cx="160" cy="150" r="42" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-v2-breathe is-slow"} />}
      <Person x={160} y={172} scale={1.3} />
      {words.map((word, index) => <Bubble key={word} x={spots[index].x} y={spots[index].y} text={word} width={at === 1 ? 130 : 110} />)}
      <Cap>{["No right or wrong way to feel", "Low for over 2 weeks? Tell your team", "Talking therapy can help", "Gentle walks and small goals", "Samaritans: 116 123, any time"][at]}</Cap>
    </svg>} />;
}

function PancKitchenTable(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Family and carers" title="Supporting someone, and yourself" label="Family and carers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people at a table with a notebook of numbers and the jobs being shared">
      {at === 4 && <circle cx="250" cy="122" r="38" fill="none" stroke={GOLD} strokeWidth="3" />}
      <Person x={70} y={140} scale={1.2} fill={SOFT} /><Person x={250} y={140} scale={1.2} />
      <path d="M40 152 H280 M60 152 V186 M260 152 V186" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      {at === 1 && <g><rect x="130" y="116" width="60" height="34" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={160} y={137} size={10}>Numbers</W></g>}
      {at === 0 && <Bubble x={160} y={50} text="Who do we call?" width={130} />}
      {at === 2 && <g><Bubble x={130} y={40} text="Keep talking" width={110} /><Bubble x={206} y={88} text="I'm listening" width={110} /></g>}
      {at === 3 && <Tags x={100} y={20} width={120} gap={30} labels={["Lifts", "Cooking", "Shopping"]} lit={index => index !== 1} />}
      {at === 4 && <Bubble x={150} y={50} text="Carer's assessment" width={150} />}
      <Cap>{["Know who to call about symptoms", "Keep a note of important numbers", "Keep talking, as things may change", "Share the jobs out with others", "A carer's assessment is free"][at]}</Cap>
    </svg>} />;
}

function PancFolder(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Planning ahead" title="Planning ahead, at your own pace" label="Planning ahead" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A folder of plans, where care can happen, and copies shared with the people who matter">
      <g opacity={at === 0 || at === 1 ? 0.45 : 1}>
        <rect x="38" y="44" width="64" height="70" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" transform="rotate(-8 70 80)" />
        <rect x="64" y="38" width="64" height="70" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" transform="rotate(6 96 72)" />
        <path d="M24 84 H58 L66 76 H144 V172 H24 Z" fill={INK} />
      </g>
      {at === 0 && <Tags x={162} y={44} width={144} labels={["Pain", "Low mood", "Support for family"]} lit={() => false} />}
      {at === 1 && <Tags x={162} y={24} width={144} gap={32} labels={["Home", "Hospice", "Hospital", "Care home"]} lit={index => index === 0} />}
      {at === 2 && <g><Bubble x={232} y={50} text="What matters to me" width={146} /><path d="M232 108 A18 18 0 1 1 214 126" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" /><path d="M206 120 L214 127 L222 120" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" /></g>}
      {at === 3 && <Tags x={158} y={44} width={150} labels={["Advance statement", "Advance decision", "Power of attorney"]} lit={() => true} />}
      {at === 4 && <g>
        {[192, 242, 292].map(x => <g key={x}><rect x={x - 11} y="52" width="22" height="28" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><Person x={x} y={150} scale={0.9} fill={SOFT} /></g>)}
      </g>}
      <Cap>{["Available alongside treatment", "At home, hospice, hospital, care home", "Your choice; change it at any time", "Statement, decision, power of attorney", "Give copies to people who matter"][at]}</Cap>
    </svg>} />;
}

export function OrganPieceView({ piece, ...props }: { piece: OrganPiece } & PieceProps) {
  switch (piece) {
    case "blc-routes": return <BlcRoutes {...props} />;
    case "blc-layers": return <BlcLayers {...props} />;
    case "blc-camera": return <BlcCamera {...props} />;
    case "blc-catheter": return <BlcCatheter {...props} />;
    case "blc-recovery-path": return <BlcRecoveryPath {...props} />;
    case "blc-flat-bag": return <BlcFlatBag {...props} />;
    case "blc-clock-pint": return <BlcClockPint {...props} />;
    case "blc-steps": return <BlcSteps {...props} />;
    case "blc-quit-line": return <BlcQuitLine {...props} />;
    case "blc-hands": return <BlcHands {...props} />;
    case "blc-suitcase": return <BlcSuitcase {...props} />;
    case "blc-signposts": return <BlcSignposts {...props} />;
    case "kc-options": return <KcOptions {...props} />;
    case "kc-ruler": return <KcRuler {...props} />;
    case "kc-road": return <KcRoad {...props} />;
    case "kc-two-filters": return <KcTwoFilters {...props} />;
    case "kc-twelve-weeks": return <KcTwelveWeeks {...props} />;
    case "kc-tablet-drip": return <KcTabletDrip {...props} />;
    case "kc-24-hour": return <Kc24Hour {...props} />;
    case "kc-bed-battery": return <KcBedBattery {...props} />;
    case "kc-water-salt": return <KcWaterSalt {...props} />;
    case "kc-cuff": return <KcCuff {...props} />;
    case "kc-calendar-jar": return <KcCalendarJar {...props} />;
    case "kc-scan-worry": return <KcScanWorry {...props} />;
    case "panc-shape": return <PancShape {...props} />;
    case "panc-bile-pipe": return <PancBilePipe {...props} />;
    case "panc-four-stages": return <PancFourStages {...props} />;
    case "panc-six-months": return <PancSixMonths {...props} />;
    case "panc-capsule-plate": return <PancCapsulePlate {...props} />;
    case "panc-sugar-line": return <PancSugarLine {...props} />;
    case "panc-day-plates": return <PancDayPlates {...props} />;
    case "panc-pain-scale": return <PancPainScale {...props} />;
    case "panc-ten-minutes": return <PancTenMinutes {...props} />;
    case "panc-bubbles": return <PancBubbles {...props} />;
    case "panc-kitchen-table": return <PancKitchenTable {...props} />;
    case "panc-folder": return <PancFolder {...props} />;
    default: return null;
  }
}
