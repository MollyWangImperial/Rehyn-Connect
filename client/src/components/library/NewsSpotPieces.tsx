import type { NewsPiece } from "@/content/ischaemic-news";
import { SPOT_PIECES, type SpotPiece } from "@/content/spot-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Non-melanoma skin cancer, MDS and Vulval cancer pages' own pieces (content/spot-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Cancer & recovery pieces. Each is steered by the card's sections;
// pictures show ideas, calmly, and never anyone's own body, scans or results. Intimate topics are drawn only as
// simple shapes and words.

export const isSpotPiece = (piece: NewsPiece): piece is SpotPiece => (SPOT_PIECES as readonly string[]).includes(piece);

const resultsCredit = "Illustration: Rehyn. A picture of the idea, not anyone's own results.";
const careCredit = "Illustration: Rehyn. Follow your own team's advice.";

/** The one-line caption for the chosen section. */
const Cap = ({ children }: { children: string }) => <W x={160} y={206} size={11.5}>{children}</W>;
/** A labelled box; `lit` fills it. */
const Box = ({ x, y, width, text, lit = false, height = 28, size = 10.5 }: { x: number; y: number; width: number; text: string; lit?: boolean; height?: number; size?: number }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x + width / 2} y={y + height / 2 + 4} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A row of labelled boxes of one width, starting at x. */
const Row = ({ x, y, width, gap, labels, lit = () => false, size = 10 }: { x: number; y: number; width: number; gap: number; labels: string[]; lit?: (index: number) => boolean; size?: number }) =>
  <g>{labels.map((label, index) => <Box key={label} x={x + index * gap} y={y} width={width} text={label} lit={lit(index)} size={size} />)}</g>;
/** A row of small day or week squares, the first `filled` of them filled. */
const Squares = ({ x, y, count, filled, size = 18, gap = 22, labels, fill = INK }: { x: number; y: number; count: number; filled: number; size?: number; gap?: number; labels?: string[]; fill?: string }) =>
  <g>{Array.from({ length: count }, (_, index) => <g key={index}>
    <rect x={x + index * gap} y={y} width={size} height={size} rx="4" fill={index < filled ? fill : WHITE} stroke={INK} strokeWidth="1.5" />
    {labels && <W x={x + index * gap + size / 2} y={y + size / 2 + 4} size={9.5} fill={index < filled && fill === INK ? WHITE : TEXT}>{labels[index]}</W>}
  </g>)}</g>;
/** A month of four weeks, one day picked out. */
const Month = ({ x, y, tick }: { x: number; y: number; tick?: number }) =>
  <g>{Array.from({ length: 28 }, (_, index) => <rect key={index} x={x + (index % 7) * 20} y={y + Math.floor(index / 7) * 20} width="16" height="16" rx="4" fill={index === tick ? GOLD : WHITE} stroke={INK} strokeWidth="1.5" />)}</g>;
const nums = (count: number, from = 1) => Array.from({ length: count }, (_, index) => String(index + from));
const WEEK = ["M", "T", "W", "T", "F", "S", "S"];

/** A mobile phone, centred on (x, y). */
const Phone = ({ x, y, text }: { x: number; y: number; text?: string }) =>
  <g><rect x={x - 20} y={y - 34} width="40" height="68" rx="7" fill={INK} /><rect x={x - 15} y={y - 26} width="30" height="46" rx="3" fill={WHITE} />{text && <W x={x} y={y + 2} size={9.5}>{text}</W>}</g>;
/** A drop, centred on (x, y). */
const Drop = ({ x, y, fill = GOLD }: { x: number; y: number; fill?: string }) =>
  <path transform={`translate(${x} ${y})`} d="M0 -24 C10 -10, 18 0, 18 8 A18 18 0 0 1 -18 8 C-18 0, -10 -10, 0 -24 Z" fill={fill} stroke={INK} strokeWidth="2.5" />;
/** A glass of water, its rim centred on (x, y). */
const Glass = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 24} ${y} H${x + 24} L${x + 18} ${y + 80} H${x - 18} Z`} fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <path d={`M${x - 21} ${y + 26} H${x + 21} L${x + 17} ${y + 77} H${x - 17} Z`} fill={SOFT} /></g>;
/** A test tube, centred on x, from y down. */
const Tube = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 12} y={y} width="24" height="96" rx="12" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x={x - 8} y={y + 48} width="16" height="44" rx="8" fill={GOLD} /><path d={`M${x - 16} ${y} H${x + 16}`} stroke={INK} strokeWidth="4" strokeLinecap="round" /></g>;
/** A cloud, roughly centred on (x, y), `s` times its usual size. */
const Cloud = ({ x, y, s = 1, fill = SOFT }: { x: number; y: number; s?: number; fill?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M-44 18 a20 20 0 0 1 10 -36 a26 26 0 0 1 48 -6 a20 20 0 0 1 24 26 a18 18 0 0 1 -8 16 Z" fill={fill} stroke={SOFT} strokeWidth={2 / s} />;
/** A gold coin with a pound sign. */
const Coin = ({ x, y }: { x: number; y: number }) =>
  <g><circle cx={x} cy={y} r="22" fill={GOLD} stroke={INK} strokeWidth="2.5" /><W x={x} y={y + 7} size={20} serif>£</W></g>;
/** The sun, with short rays. */
const Sun = ({ x, y, r = 16, opacity = 1 }: { x: number; y: number; r?: number; opacity?: number }) =>
  <g opacity={opacity}><circle cx={x} cy={y} r={r} fill={GOLD} />
    {Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + Math.cos(a) * (r + 5)} ${y + Math.sin(a) * (r + 5)} L${x + Math.cos(a) * (r + 11)} ${y + Math.sin(a) * (r + 11)}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}</g>;
/** A thermometer from y down, filled to `level` (0 to 1). */
const Thermo = ({ x, y, level = 0.5 }: { x: number; y: number; level?: number }) =>
  <g><rect x={x - 10} y={y} width="20" height="110" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <rect x={x - 5} y={y + 106 - level * 96} width="10" height={level * 96 + 10} rx="5" fill={GOLD} />
    <circle cx={x} cy={y + 122} r="16" fill={GOLD} stroke={INK} strokeWidth="2.5" /></g>;
/** A magnifying glass. */
const Lens = ({ x, y, r = 22 }: { x: number; y: number; r?: number }) =>
  <g><circle cx={x} cy={y} r={r} fill={WHITE} fillOpacity=".6" stroke={INK} strokeWidth="3" /><path d={`M${x + r * 0.7} ${y + r * 0.7} L${x + r * 1.3} ${y + r * 1.3}`} stroke={INK} strokeWidth="5" strokeLinecap="round" /></g>;
/** A signpost of urgent numbers. */
const Signposts = ({ x, labels, lit = 1 }: { x: number; labels: string[]; lit?: number }) =>
  <g><path d={`M${x} 30 V140`} stroke={INK} strokeWidth="4" />{labels.map((sign, index) => <Box key={sign} x={x - 44} y={28 + index * 30} width={88} height={24} text={sign} lit={index === lit} />)}</g>;
/** Gentle hills along the bottom. */
const Hills = () => <path d="M10 186 C70 150, 130 160, 190 146 S270 120, 310 130 V186 Z" fill={WHITE} stroke={LINE} strokeWidth="3" />;
/** A tube of cream or ointment, from (x, y). */
const CreamTube = ({ x, y, text = "Cream" }: { x: number; y: number; text?: string }) =>
  <g><rect x={x} y={y} width="72" height="34" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 7} ${y} V${y + 34}`} stroke={SOFT} strokeWidth="2" />
    <rect x={x + 72} y={y + 8} width="16" height="18" rx="3" fill={INK} /><W x={x + 40} y={y + 21} size={10}>{text}</W></g>;
/** A bladder shape, centred on (x, y). */
const Bladder = ({ x, y }: { x: number; y: number }) =>
  <path transform={`translate(${x} ${y})`} d="M-22 -18 C-22 -30, 22 -30, 22 -18 C28 4, 18 24, 0 28 C-18 24, -28 4, -22 -18 Z" fill={WHITE} stroke={INK} strokeWidth="3" />;
/** A bone, centred on (x, y). */
const Bone = ({ x, y }: { x: number; y: number }) =>
  <g fill={INK}><rect x={x - 18} y={y - 5} width="36" height="10" rx="4" />{[[-18, -6], [-18, 6], [18, -6], [18, 6]].map(([dx, dy]) => <circle key={`${dx}${dy}`} cx={x + dx} cy={y + dy} r="6" />)}</g>;
/** A heavy bag with a line through it. */
const NoLifting = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 24} y={y - 18} width="48" height="36" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x - 10} ${y - 18} V${y - 26} H${x + 10} V${y - 18}`} fill="none" stroke={INK} strokeWidth="2.5" />
    <W x={x} y={y + 4} size={10}>Heavy</W><path d={`M${x - 32} ${y + 24} L${x + 32} ${y - 30}`} stroke={GOLD} strokeWidth="4" strokeLinecap="round" /></g>;
/** A line through something that should be avoided. */
const Strike = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) =>
  <path d={`M${x1} ${y1} L${x2} ${y2}`} stroke={GOLD} strokeWidth="4" strokeLinecap="round" />;
/** A short arrow to the right. */
const Arrow = ({ x, y, length = 30 }: { x: number; y: number; length?: number }) =>
  <path d={`M${x} ${y} H${x + length} M${x + length - 8} ${y - 8} L${x + length + 1} ${y} L${x + length - 8} ${y + 8}`} stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />;

// ==== Non-melanoma skin cancer ==============================================================================

function SkLayers(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const basal = Array.from({ length: 11 }, (_, index) => 130 + index * 16);
  const squamous = Array.from({ length: 8 }, (_, index) => 134 + index * 22);
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Two common skin cancers, side by side" label="The types" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A slice of skin: the top layer with basal cells along its base and squamous cells above, the deeper layer below, and the sun overhead">
      <Sun x={44} y={38} opacity={at === 3 ? 1 : 0.45} />
      {at === 3 && [70, 100, 130].map(x => <path key={x} d={`M58 52 L${x} 76`} stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" strokeLinecap="round" />)}
      <rect x="20" y="78" width="280" height="44" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" />
      <rect x="20" y="122" width="280" height="56" rx="6" fill={TINT} stroke={INK} strokeWidth="2" />
      {squamous.map(x => <ellipse key={x} cx={x} cy={93} rx="9" ry="5" fill={at === 2 ? GOLD : SOFT} stroke={INK} strokeWidth="1" />)}
      {basal.map(x => <circle key={x} cx={x} cy={112} r="5" fill={at === 1 ? GOLD : INK} />)}
      <W x={28} y={104} size={10} anchor="start">Epidermis</W>
      <W x={28} y={154} size={10} anchor="start">Dermis</W>
      {at === 0 && <Box x={120} y={26} width={180} text="Two main types: BCC, SCC" size={10} />}
      {at === 1 && <g><Box x={120} y={26} width={180} text="BCC: from basal cells" lit /><W x={210} y={154} size={10.5}>Most grow very slowly</W></g>}
      {at === 2 && <g><Box x={120} y={26} width={180} text="SCC: from cells above" lit /><W x={210} y={154} size={10.5}>Often on sun-damaged skin</W></g>}
      {at === 3 && <Box x={150} y={26} width={150} text="UV: sun and sunbeds" lit />}
      <Cap>{["Both start in the top layer of skin", "Around 75 in 100 are BCCs", "SCC: the second most common type", "UV light is the most common cause"][at]}</Cap>
    </svg>} />;
}

function SkTools(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Treatments" title="From a small operation to other options" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A care team, a small operation with a margin of normal skin, thin layers checked under a lens, other treatments and a drip">
      {at === 0 && <g>
        {[70, 125, 180, 235].map((x, index) => <Person key={x} x={x} y={150} scale={1.1} fill={index % 2 ? SOFT : INK} />)}
        <Bubble x={160} y={56} text="Your wishes matter too" width={170} />
      </g>}
      {at === 1 && <g>
        <ellipse cx="90" cy="100" rx="58" ry="36" fill={TINT} stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" />
        <circle cx="90" cy="100" r="14" fill={SOFT} stroke={INK} strokeWidth="2" />
        <W x={90} y={158} size={10}>Margin of normal skin</W>
        <Tags x={170} y={52} width={130} labels={["Excision", "Curettage", "Cryotherapy"]} lit={index => index === 0} />
      </g>}
      {at === 2 && <g>
        {[0, 1, 2, 3].map(index => <rect key={index} x="36" y={56 + index * 24} width="120" height="16" rx="5" fill={index === 0 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />)}
        <Lens x={214} y={78} r={26} />
        <Box x={170} y={140} width={136} text="Half a day on average" size={10} />
      </g>}
      {at === 3 && <Tags x={60} y={28} width={200} gap={32} labels={["Imiquimod cream", "Fluorouracil cream", "Photodynamic therapy", "Radiotherapy"]} lit={() => false} />}
      {at === 4 && <g>
        <rect x="58" y="34" width="56" height="72" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="62" y="70" width="48" height="32" rx="9" fill={SOFT} />
        <path d="M86 106 V170" stroke={INK} strokeWidth="2.5" />
        <Box x={140} y={52} width={166} text="Cemiplimab: a drip" lit /><Box x={140} y={92} width={166} text="Targeted drugs" />
      </g>}
      <Cap>{["A team plans the best treatment", "Most are removed in a minor operation", "Mohs: thin layers, checked one by one", "Creams, light or radiotherapy instead", "Drug options if it has spread"][at]}</Cap>
    </svg>} />;
}

function SkCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="Check-ups shaped around your risk" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A dial for risk, a single check-up beside regular ones over 5 years, a skin check, a phone and a helpline">
      {at === 0 && <g><Gauge x={86} y={130} r={56} value={0.5} /><Tags x={170} y={34} width={136} gap={32} labels={["Size and depth", "Type and grade", "Immune system", "Skin cancers before"]} lit={() => false} /></g>}
      {at === 1 && <g>
        <W x={20} y={60} size={10.5} anchor="start">Lower risk</W>
        <path d="M120 56 H300" stroke={LINE} strokeWidth="5" strokeLinecap="round" /><circle cx="130" cy="56" r="7" fill={INK} />
        <W x={300} y={80} size={10} anchor="end">Then often discharged</W>
        <W x={20} y={124} size={10.5} anchor="start">Higher risk SCC</W>
        <path d="M120 120 H300" stroke={LINE} strokeWidth="5" strokeLinecap="round" />
        {Array.from({ length: 12 }, (_, index) => <circle key={index} cx={130 + index * 15} cy={120} r="5" fill={GOLD} stroke={INK} strokeWidth="1.5" />)}
        <W x={300} y={146} size={10} anchor="end">For at least 5 years</W>
      </g>}
      {at === 2 && <g><Person x={80} y={156} scale={1.3} /><Lens x={128} y={84} r={18} /><Tags x={176} y={44} width={130} labels={["Skin check", "Sun advice", "How you are"]} lit={() => false} /></g>}
      {at === 3 && <g><Phone x={80} y={96} /><Bubble x={214} y={62} text="No need to wait" width={140} /><Box x={140} y={110} width={166} text="Your nurse specialist" /></g>}
      {at === 4 && <g><Person x={84} y={150} scale={1.2} /><Person x={134} y={150} scale={1.2} fill={SOFT} /><Box x={180} y={52} width={126} text="0808 800 4040" lit /><W x={243} y={100} size={10}>Cancer Research UK</W><W x={243} y={116} size={10}>nurses, weekdays</W></g>}
      <Cap>{["How often depends on your risk", "Higher risk: every 4 to 6 months", "Your skin is checked at each visit", "No need to wait for your next visit", "Many find follow-up worrying"][at]}</Cap>
    </svg>} />;
}

function SkMap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Another one" title="Why one skin cancer can follow another" label="Why another can appear" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with sun-exposed skin marked, years of sun building up, and things that raise or lower the risk">
      <Person x={70} y={152} scale={1.9} fill={at === 2 ? GOLD : INK} />
      <circle cx="70" cy="95" r="27" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" opacity={at <= 1 ? 1 : 0.3} />
      {at === 0 && <Tags x={140} y={56} width={160} gap={38} labels={["Same area again", "Somewhere new"]} lit={() => false} />}
      {at === 1 && <g>
        {[0, 1, 2, 3, 4].map(index => <rect key={index} x={150 + index * 30} y={160 - (24 + index * 20)} width="22" height={24 + index * 20} rx="4" fill={index === 4 ? GOLD : SOFT} stroke={INK} strokeWidth="1.5" />)}
        <W x={210} y={180} size={10}>Years of sun</W>
      </g>}
      {at === 2 && <Tags x={136} y={34} width={170} gap={32} labels={["Weakened immune system", "Skin that burns easily", "Past radiotherapy", "Long-term scarring"]} lit={() => false} />}
      {at === 3 && <Tags x={140} y={44} width={160} gap={34} labels={["Check skin monthly", "Never use sunbeds", "Fake tan instead"]} lit={index => index === 0} />}
      {at === 4 && <g><Bubble x={220} y={66} text="Talk to your team" width={150} /><Box x={140} y={110} width={166} text="Keep an eye on things" /></g>}
      <Cap>{["Risk is higher after one skin cancer", "Sun damage builds up over time", "Some people have a higher risk", "Early checks make treatment easier", "Worry is common after treatment"][at]}</Cap>
    </svg>} />;
}

function SkDressing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const scar = (x: number, y: number, stroke: string) => <g><path d={`M${x - 16} ${y} Q${x} ${y - 6} ${x + 16} ${y}`} stroke={stroke} strokeWidth="4" fill="none" strokeLinecap="round" /></g>;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Wound care" title="Helping your wound heal well" label="Wound and scar" credit={careCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A patch of skin with a dressing, days for stitches, a drop kept off, signs to act on, a scab and a scar fading">
      <rect x="20" y="50" width="120" height="110" rx="12" fill={TINT} stroke={LINE} strokeWidth="2" />
      {at <= 2 && <rect x="46" y="76" width="68" height="58" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />}
      {at <= 2 && <rect x="54" y="84" width="52" height="42" rx="5" fill="none" stroke={SOFT} strokeWidth="1.5" strokeDasharray="4 3" />}
      {at === 3 && <ellipse cx="80" cy="105" rx="20" ry="13" fill={SOFT} stroke={INK} strokeWidth="2" />}
      {at === 4 && scar(80, 108, INK)}
      {at === 0 && <g>
        <W x={232} y={44} size={10.5}>Stitches out</W>
        <path d="M162 62 H302" stroke={LINE} strokeWidth="6" strokeLinecap="round" /><rect x="176" y="55" width="112" height="14" rx="7" fill={GOLD} />
        <W x={176} y={88} size={10}>Day 5</W><W x={288} y={88} size={10}>Day 14</W>
        <Box x={158} y={108} width={148} text="Some stitches dissolve" size={10} />
      </g>}
      {at === 1 && <g><Drop x={226} y={74} fill={WHITE} /><Strike x1={196} y1={98} x2={256} y2={48} /><Box x={160} y={126} width={146} text="48 hours after Mohs" /></g>}
      {at === 2 && <g><Thermo x={172} y={36} level={0.8} /><Tags x={200} y={46} width={108} labels={["Redness, heat", "Swelling", "Oozing"]} lit={() => true} /></g>}
      {at === 3 && <Tags x={158} y={50} width={148} labels={["Dry for 24 hours", "Wash gently", "Do not pick the scab"]} lit={index => index === 2} />}
      {at === 4 && <g>
        {[["At first", INK], ["Later", SOFT], ["Over time", LINE]].map(([label, stroke], index) => <g key={label}>
          <rect x={154 + index * 52} y="60" width="48" height="52" rx="8" fill={WHITE} stroke={LINE} strokeWidth="1.5" />{scar(178 + index * 52, 90, stroke)}
          <W x={178 + index * 52} y={132} size={10}>{label}</W>
        </g>)}
      </g>}
      <Cap>{["Your team explains dressing care", "Keep your dressings dry at first", "Infection signs: tell your team", "After freezing, a scab forms", "Scars get paler over time"][at]}</Cap>
    </svg>} />;
}

function SkMirror(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Skin checks" title="Your monthly look at your skin" label="Checking your skin" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A month with one day marked, changes to look for, two mirrors and a phone photo with a ruler, and when to see a GP">
      {at === 0 && <g><Month x={92} y={40} tick={9} /><W x={160} y={146} size={10.5}>Know how your skin normally looks</W></g>}
      {at === 1 && <Tags x={60} y={30} width={200} gap={32} labels={["New or changing spot", "Sore that does not heal", "Red or dark patch", "Scab that keeps coming back"]} lit={() => false} />}
      {at === 2 && <g>
        <rect x="30" y="30" width="70" height="140" rx="30" fill={TINT} stroke={INK} strokeWidth="3" />
        <Person x={150} y={156} scale={1.3} fill={SOFT} />
        <circle cx="196" cy="84" r="16" fill={TINT} stroke={INK} strokeWidth="3" /><path d="M196 100 V126" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <Phone x={262} y={92} />
        <rect x="236" y="140" width="52" height="12" rx="2" fill={WHITE} stroke={INK} strokeWidth="1.5" />
        {[0, 1, 2, 3, 4, 5].map(index => <path key={index} d={`M${242 + index * 8} 140 V146`} stroke={INK} strokeWidth="1.5" />)}
      </g>}
      {at === 3 && <g><Box x={80} y={44} width={160} text="See your GP" lit /><Box x={80} y={84} width={160} text="More than 4 weeks" /><W x={160} y={148} size={10.5}>Many skin changes are not cancer</W></g>}
      <Cap>{["Check your skin once a month", "Changes can look very different", "Two mirrors, or ask someone to look", "Lasts over 4 weeks? See a GP"][at]}</Cap>
    </svg>} />;
}

function SkCream(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const reaction = [12, 44, 62, 50, 28, 12];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Creams" title="When red and sore means it is working" label="Treatment creams" credit={careCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tube of cream, a six-week course, the skin reaction peaking then settling, and the sun to avoid">
      <CreamTube x={22} y={70} />
      {at === 0 && <Tags x={150} y={50} width={150} gap={38} labels={["Imiquimod", "Fluorouracil (5FU)"]} lit={() => false} />}
      {at === 1 && <g>
        {WEEK.map((day, index) => <W key={index} x={148 + index * 22} y={26} size={9.5}>{day}</W>)}
        {Array.from({ length: 42 }, (_, index) => <rect key={index} x={140 + (index % 7) * 22} y={34 + Math.floor(index / 7) * 22} width="16" height="16" rx="4" fill={index % 7 < 5 ? INK : WHITE} stroke={INK} strokeWidth="1.5" />)}
        <W x={70} y={130} size={10}>6 weeks</W>
      </g>}
      {at === 2 && <g>
        <path d="M134 150 H306" stroke={LINE} strokeWidth="2.5" />
        {reaction.map((height, index) => <g key={index}><rect x={142 + index * 27} y={150 - height} width="20" height={height} rx="4" fill={index === 1 || index === 2 ? GOLD : SOFT} stroke={INK} strokeWidth="1.5" /><W x={152 + index * 27} y={166} size={9.5}>{String(index + 1)}</W></g>)}
        <W x={220} y={182} size={10}>weeks</W>
      </g>}
      {at === 3 && <g><Phone x={160} y={90} /><Tags x={196} y={50} width={112} labels={["Severe or worse", "Target spots", "Sore eyes"]} lit={() => true} /></g>}
      {at === 4 && <g><Sun x={226} y={44} /><Tags x={150} y={92} width={150} gap={34} labels={["Clothing and a hat", "Sunscreen"]} lit={() => true} /></g>}
      <Cap>{["For cancers in the top layer of skin", "Imiquimod: 5 days a week, 6 weeks", "Redness shows the cream is working", "Severe reactions: contact your team", "Treated skin is more sensitive to sun"][at]}</Cap>
    </svg>} />;
}

function SkFace(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Appearance" title="Scars, confidence and feeling like you" label="How you look" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A simple face with a small scar, feelings, a camouflage pot with shades, and getting back to things">
      <circle cx="90" cy="100" r="58" fill={WHITE} stroke={INK} strokeWidth="3" />
      <circle cx="70" cy="88" r="4" fill={INK} /><circle cx="110" cy="88" r="4" fill={INK} />
      <path d="M72 122 Q90 134 108 122" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M112 104 L130 114" stroke={at === 0 ? GOLD : SOFT} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <Tags x={170} y={66} width={136} gap={36} labels={["Often minor", "Paler over time"]} lit={() => false} />}
      {at === 1 && <Tags x={170} y={48} width={136} labels={["Self-conscious", "On your mind", "Manageable"]} lit={() => false} />}
      {at === 2 && <g>
        <rect x="200" y="54" width="84" height="14" rx="5" fill={INK} /><rect x="204" y="68" width="76" height="46" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={242} y={96} size={10}>Camouflage</W>
        {[TINT, SOFT, INK].map((fill, index) => <circle key={index} cx={214 + index * 28} cy={146} r="11" fill={fill} stroke={INK} strokeWidth="1.5" />)}
      </g>}
      {at === 3 && <Tags x={170} y={48} width={136} labels={["Work", "Sports", "Hobbies"]} lit={() => true} />}
      <Cap>{["Many have only minor scarring", "Everyone's reactions are different", "Skin camouflage can cover a scar", "Back to work, sports or hobbies"][at]}</Cap>
    </svg>} />;
}

function SkShade(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sun safety" title="Shade, clothing and sunscreen, together" label="Sun safety" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The sun, the months when it is strong, a clock shaded from 11 to 3, a hat and sunglasses, sunscreen, a sunbed crossed out and a suitcase">
      {at !== 1 && <Sun x={278} y={40} opacity={0.8} />}
      {at === 0 && <g>
        {months.map((month, index) => { const on = index >= 2 && index <= 9; return <g key={index}><rect x={10 + index * 22} y="76" width="19" height="26" rx="5" fill={on ? INK : WHITE} stroke={INK} strokeWidth="1.5" /><W x={19.5 + index * 22} y={93} size={10} fill={on ? WHITE : TEXT}>{month}</W></g>; })}
        <Box x={70} y={124} width={180} text="UV index 3 or higher" lit />
      </g>}
      {at === 1 && <g>
        <circle cx="80" cy="96" r="46" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M80 96 L57 56.2 A46 46 0 0 1 126 96 Z" fill={GOLD} opacity=".7" />
        <path d="M80 96 V60 M80 96 L106 96" stroke={TEXT} strokeWidth="3" strokeLinecap="round" />
        <W x={80} y={164} size={10.5}>11am to 3pm</W>
        <path d="M190 100 C190 72, 250 72, 250 100 Z" fill={INK} /><ellipse cx="220" cy="100" rx="56" ry="9" fill={INK} />
        <circle cx="204" cy="144" r="12" fill={INK} /><circle cx="236" cy="144" r="12" fill={INK} /><path d="M216 142 H224" stroke={INK} strokeWidth="3" />
      </g>}
      {at === 2 && <g>
        <rect x="74" y="46" width="22" height="14" rx="3" fill={INK} /><rect x="58" y="60" width="54" height="100" rx="12" fill={WHITE} stroke={INK} strokeWidth="3" />
        <W x={85} y={104} size={12}>SPF</W><W x={85} y={124} size={12}>30+</W>
        <Box x={150} y={60} width={110} text="4 or 5 stars" />
        {Array.from({ length: 8 }, (_, index) => <circle key={index} cx={162 + index * 14} cy={118} r="5.5" fill={index < 6 ? INK : GOLD} />)}
        <W x={211} y={142} size={10}>6 to 8 teaspoons</W>
      </g>}
      {at === 3 && <g>
        <path d="M60 130 H260" stroke={INK} strokeWidth="14" strokeLinecap="round" /><path d="M70 120 C110 90, 210 90, 250 120" stroke={SOFT} strokeWidth="6" fill="none" strokeLinecap="round" />
        <Strike x1={60} y1={150} x2={260} y2={86} />
        <Box x={60} y={34} width={170} text="Fake tan, if you want a tan" size={10} />
      </g>}
      {at === 4 && <g>
        <rect x="56" y="82" width="84" height="64" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M84 82 V70 H112 V82" stroke={INK} strokeWidth="3" fill="none" /><path d="M56 106 H140" stroke={SOFT} strokeWidth="3" />
        <Box x={164} y={80} width={142} text="Check the UV forecast" size={10} /><Box x={164} y={118} width={142} text="May burn more easily" size={10} />
      </g>}
      <Cap>{["Mid-March to mid-October in the UK", "Shade and cover up, 11am to 3pm", "SPF 30+, reapply every 2 hours", "Never use a sunbed or sunlamp", "Protect your skin on holiday too"][at]}</Cap>
    </svg>} />;
}

function SkVitd(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const letters = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Vitamin D" title="Vitamin D without the sunbathing" label="Vitamin D" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bone, a blood test, a plate with fish and an egg, and a year with autumn and winter months marked">
      {at === 0 && <g><Bone x={90} y={96} /><Tags x={170} y={50} width={130} labels={["Bones", "Teeth", "Muscles"]} lit={() => true} /></g>}
      {at === 1 && <g><Tube x={90} y={44} /><Box x={150} y={64} width={156} text="Ask to check levels" /><Box x={150} y={104} width={156} text="Supplements if low" /></g>}
      {at === 2 && <g>
        <circle cx="90" cy="100" r="54" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="90" cy="100" r="42" fill="none" stroke={LINE} strokeWidth="2" />
        <path d="M58 88 C68 74, 98 74, 108 88 C98 102, 68 102, 58 88 Z" fill={SOFT} stroke={INK} strokeWidth="2" /><path d="M108 88 L120 78 V98 Z" fill={SOFT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <ellipse cx="94" cy="122" rx="15" ry="11" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx="94" cy="122" r="5" fill={GOLD} />
        <Tags x={170} y={34} width={136} gap={32} labels={["Oily fish", "Eggs", "Red meat", "Fortified cereals"]} lit={() => false} />
      </g>}
      {at === 3 && <g>
        {letters.map((letter, index) => {
          const a = index * Math.PI / 6, on = index >= 9 || index <= 2;
          const x = 90 + 56 * Math.sin(a), y = 100 - 56 * Math.cos(a);
          return <g key={index}><circle cx={x} cy={y} r="11" fill={on ? INK : WHITE} stroke={INK} strokeWidth="1.5" /><W x={x} y={y + 3.5} size={9.5} fill={on ? WHITE : TEXT}>{letter}</W></g>;
        })}
        <W x={90} y={104} size={11}>Year</W>
        <Box x={170} y={60} width={136} text="10 micrograms a day" size={10} lit /><Box x={170} y={100} width={136} text="Not over 100 micrograms" size={9.5} />
      </g>}
      <Cap>{["Vitamin D for bones, teeth, muscles", "Not often outdoors? Get checked", "Some foods contain vitamin D", "Consider it daily in autumn and winter"][at]}</Cap>
    </svg>} />;
}

function SkOutdoors(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Outdoors" title="Sun-smart habits on the job" label="Working outdoors" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Outdoor workers under the sun, a worker in a hat resting in the shade of a tree, someone checking a back, and work options">
      <Sun x={278} y={40} opacity={at === 3 ? 0.35 : 0.9} />
      {at !== 3 && <path d="M14 172 H306" stroke={LINE} strokeWidth="3" />}
      {at === 0 && <g><Person x={60} y={158} scale={1.2} /><Person x={110} y={158} scale={1.2} fill={SOFT} /><Tags x={160} y={74} width={120} gap={36} labels={["Builders", "Farmers"]} lit={() => false} /></g>}
      {at === 1 && <g>
        <rect x="94" y="90" width="12" height="82" fill={SOFT} /><circle cx="100" cy="76" r="44" fill={TINT} stroke={SOFT} strokeWidth="2" />
        <Person x={146} y={158} scale={1.2} />
        <rect x="134" y="104" width="24" height="12" rx="4" fill={INK} /><path d="M126 116 H166" stroke={INK} strokeWidth="4" strokeLinecap="round" /><path d="M162 116 V130" stroke={INK} strokeWidth="3" />
        <Tags x={196} y={84} width={110} gap={30} labels={["Top on", "Hat with flap", "Shade"]} lit={() => true} />
      </g>}
      {at === 2 && <g><Person x={110} y={158} scale={1.4} fill={SOFT} /><Person x={176} y={158} scale={1.4} /><Lens x={130} y={104} r={14} /></g>}
      {at === 3 && <Tags x={60} y={44} width={200} labels={["Time off for appointments", "Reasonable adjustments", "Access to Work"]} lit={() => false} />}
      <Cap>{["Years outdoors raise the risk", "Keep your top on and find shade", "Ask someone to check hard-to-see skin", "Talk to your employer early"][at]}</Cap>
    </svg>} />;
}

function SkPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const sun = [[262, 116], [258, 96], [256, 82], [252, 64], [262, 46]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="Living with the worry after skin cancer" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person on open hills with the sun rising, feelings, people to talk to and signposts to urgent help">
      <circle cx={sun[0]} cy={sun[1]} r="18" fill={GOLD} opacity={[0.35, 0.5, 0.7, 0.85, 1][at]} className={still || at < 3 ? undefined : "lib-why-pulse"} />
      {at === 1 && <Cloud x={244} y={70} s={0.9} />}
      <Hills />
      <Person x={70} y={160} />
      {at === 0 && <Tags x={30} y={24} width={130} gap={32} labels={["Shocked", "Frightened", "Uncertain"]} lit={() => false} />}
      {at === 1 && <Box x={24} y={40} width={156} text="Triggers: tests, news" />}
      {at === 2 && <Tags x={24} y={24} width={170} gap={32} labels={["Get involved in recovery", "Talk about feelings", "Do things you enjoy"]} lit={() => true} />}
      {at === 3 && <Tags x={24} y={24} width={170} gap={32} labels={["Family and friends", "Macmillan Support Line", "NHS talking therapies"]} lit={() => true} />}
      {at === 4 && <Signposts x={150} labels={["111", "116 123", "999"]} />}
      <Cap>{["Feelings come and go", "Worry often gets better with time", "Focus on what you can control", "Talking about feelings can help", "Urgent help: 111, Samaritans, 999"][at]}</Cap>
    </svg>} />;
}

// ==== MDS ===================================================================================================

function MdMarrow(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const outputs: [number, string, string][] = [[50, "Red cells", INK], [100, "White cells", WHITE], [150, "Platelets", GOLD]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The blood cell factory that misfires" label="What MDS is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bone with marrow inside, stem cells becoming blasts and then blood cells, people of different ages, and a slow curve over years">
      {at === 0 && <g>
        {[[44, 86], [44, 124], [276, 86], [276, 124]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="20" fill={WHITE} stroke={INK} strokeWidth="3" />)}
        <rect x="44" y="78" width="232" height="54" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
        <rect x="36" y="81" width="248" height="48" fill={WHITE} />
        <rect x="70" y="92" width="180" height="26" rx="13" fill={TINT} stroke={SOFT} strokeWidth="2" />
        {[84, 104, 126, 150, 172, 196, 220, 236].map((x, index) => <circle key={x} cx={x} cy={index % 2 ? 100 : 110} r="4" fill={SOFT} />)}
        <Box x={100} y={22} width={120} text="Bone marrow" lit /><path d="M160 50 V90" stroke={INK} strokeWidth="2" />
      </g>}
      {at === 1 && <g>
        <circle cx="44" cy="100" r="22" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={44} y={104} size={10}>Stem</W>
        <Arrow x={70} y={100} length={28} />
        <circle cx="128" cy="100" r="20" fill={SOFT} stroke={INK} strokeWidth="2.5" /><W x={128} y={104} size={10}>Blast</W>
        {[[112, 128], [126, 132], [140, 128]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="6" fill={SOFT} stroke={INK} strokeWidth="1.5" />)}
        {outputs.map(([y, label, fill]) => <g key={label}>
          <path d={`M150 100 L198 ${y}`} stroke={INK} strokeWidth="2.5" strokeDasharray="5 4" />
          <circle cx="210" cy={y} r="10" fill={fill} stroke={INK} strokeWidth="2" /><W x={226} y={y + 4} size={10.5} anchor="start">{label}</W>
        </g>)}
        <W x={100} y={160} size={10}>Some stay as blasts</W>
      </g>}
      {at === 2 && <g><Box x={80} y={34} width={160} text="Typical age: about 75" lit />{[50, 105, 160, 215, 270].map((x, index) => <Person key={x} x={x} y={150} scale={1.1} fill={index === 2 ? GOLD : SOFT} />)}</g>}
      {at === 3 && <g>
        <path d="M30 160 C110 156, 200 120, 290 70" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        {[[70, 158], [130, 150], [190, 128], [250, 96]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="5" fill={GOLD} stroke={INK} strokeWidth="1.5" />)}
        <Tags x={40} y={34} width={130} gap={34} labels={["Often slow", "Sometimes faster"]} lit={index => index === 0} />
        <W x={250} y={176} size={10}>Over several years</W>
      </g>}
      <Cap>{["MDS affects the bone marrow", "In MDS, some cells do not mature", "More common as you get older", "Often develops slowly, over years"][at]}</Cap>
    </svg>} />;
}

function MdScale(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const groups = ["Very low", "Low", "Intermediate", "High", "Very high"];
  const types = ["One cell type", "Two or three types", "Ring sideroblasts", "Excess blasts", "Isolated del (5q)", "Unclassifiable"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Types" title="Your type, and your risk group" label="Type and risk" credit={resultsCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two boxes for type and risk group, six tiles for the types, and five risk groups split into lower and higher">
      {at === 0 && <g>
        <Box x={30} y={50} width={120} height={56} text="Type" size={12} /><Box x={170} y={50} width={120} height={56} text="Risk group" size={12} lit />
        <W x={90} y={134} size={10}>Which cells,</W><W x={90} y={150} size={10}>blasts and genes</W>
        <W x={230} y={134} size={10}>How it may</W><W x={230} y={150} size={10}>develop</W>
      </g>}
      {at === 1 && <g>{types.map((type, index) => <Box key={type} x={14 + (index % 2) * 150} y={34 + Math.floor(index / 2) * 40} width={142} text={type} size={10} />)}</g>}
      {(at === 2 || at === 3) && <Tags x={156} y={24} width={150} gap={30} labels={groups} lit={index => at === 3 && index < 2} />}
      {at === 2 && <g><Box x={24} y={70} width={110} text="IPSS-R" lit /><W x={79} y={122} size={10.5}>Five risk groups</W></g>}
      {at === 3 && <g>
        <path d="M146 26 H140 V96 H146 M146 100 H140 V168 H146" stroke={INK} strokeWidth="2.5" fill="none" />
        <W x={132} y={64} size={10.5} anchor="end">Lower risk</W><W x={132} y={138} size={10.5} anchor="end">Higher risk</W>
      </g>}
      {at === 4 && <g><Person x={80} y={150} scale={1.3} /><Person x={140} y={150} scale={1.3} fill={SOFT} /><Bubble x={226} y={62} text="It is up to you" width={130} /></g>}
      <Cap>{["Type and risk group are different", "Blood Cancer UK: six main types", "The IPSS-R has five risk groups", "Lower risk or higher risk MDS", "Choose how much you want to know"][at]}</Cap>
    </svg>} />;
}

function MdTube(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [0, 1, 2, -1, 0][at];
  const helix = (sign: number) => Array.from({ length: 26 }, (_, index) => { const x = 40 + index * 4; return `${index ? "L" : "M"}${x} ${116 + sign * 24 * Math.sin((x - 40) / 16)}`; }).join(" ");
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tests" title="From a blood test to an answer" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three steps, a blood test, a bone marrow test from the hip and genetic tests, with weeks of waiting">
      <Row x={10} y={18} width={94} gap={103} labels={["Blood test", "Bone marrow", "Genes"]} lit={index => index === lit} />
      {at === 0 && <g><Tube x={70} y={66} /><Box x={124} y={82} width={182} text="Full blood count" /><W x={215} y={138} size={10}>Counts each type of blood cell</W></g>}
      {at === 1 && <g>
        <g transform="translate(90 116) scale(2.2)"><Bone x={0} y={0} /></g>
        <W x={90} y={164} size={10.5}>Hip bone</W>
        <path d="M180 66 L104 110" stroke={INK} strokeWidth="3" strokeLinecap="round" /><circle cx="104" cy="110" r="5" fill={GOLD} stroke={INK} strokeWidth="1.5" />
        <Box x={186} y={98} width={120} text="20 to 30 minutes" /><Box x={186} y={134} width={120} text="Local anaesthetic" size={10} />
      </g>}
      {at === 2 && <g>
        <path d={helix(1)} stroke={INK} strokeWidth="3" fill="none" /><path d={helix(-1)} stroke={GOLD} strokeWidth="3" fill="none" />
        {Array.from({ length: 9 }, (_, index) => { const x = 44 + index * 12; const dy = 24 * Math.sin((x - 40) / 16); return <path key={x} d={`M${x} ${116 + dy} V${116 - dy}`} stroke={SOFT} strokeWidth="2" />; })}
        <Tags x={170} y={82} width={136} gap={36} labels={["Confirms MDS", "Type and risk group"]} lit={() => true} />
      </g>}
      {at === 3 && <g>
        {Array.from({ length: 21 }, (_, index) => <rect key={index} x={40 + (index % 7) * 20} y={70 + Math.floor(index / 7) * 20} width="16" height="16" rx="4" fill={WHITE} stroke={INK} strokeWidth="1.5" />)}
        <W x={108} y={150} size={10.5}>A few weeks</W>
        <Person x={230} y={150} scale={1.1} /><Person x={270} y={150} scale={1.1} fill={SOFT} />
      </g>}
      {at === 4 && <g>{[70, 130, 190, 250].map(x => <Tube key={x} x={x} y={66} />)}</g>}
      <Cap>{["Full blood count: often one is low", "A sample from the back of the hip", "Genes show the type and risk group", "Results can take a few weeks", "Regular blood tests from now on"][at]}</Cap>
    </svg>} />;
}

function MdCounts(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows: { name: string; range: string; m: number; band: boolean }[] = [
    { name: "Haemoglobin", range: "Healthy: 115 to 180", m: 0.2, band: true },
    { name: "Platelets", range: "Healthy: 150 to 400", m: 0.24, band: true },
    { name: "White cells", range: "Healthy: 4 to 11", m: 0.28, band: true },
    { name: "Blasts", range: "Too many in some types", m: 0.86, band: false },
  ];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Blood counts" title="Reading your blood counts" label="Blood counts" credit={resultsCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A results sheet with four rows, haemoglobin, platelets, white cells and blasts, each with a healthy band and a marker">
      {rows.map((row, index) => {
        const y = 36 + index * 40, on = at === 0 || at === index + 1;
        return <g key={row.name} opacity={on ? 1 : 0.35}>
          <W x={16} y={y + 4} size={10.5} anchor="start">{row.name}</W>
          <rect x="110" y={y - 5} width="190" height="10" rx="5" fill={WHITE} stroke={SOFT} strokeWidth="1.5" />
          {row.band && <rect x="170" y={y - 5} width="80" height="10" rx="5" fill={LINE} />}
          <circle cx={110 + row.m * 190} cy={y} r="7" fill={at === index + 1 ? GOLD : INK} stroke={INK} strokeWidth="1.5" />
          {at === index + 1 && <W x={210} y={y + 22} size={9.5}>{row.range}</W>}
        </g>;
      })}
      <Cap>{["MDS often lowers at least one count", "Low red cells is called anaemia", "Low platelets: bruise, bleed easily", "Neutrophils help fight infections", "Blasts are very young blood cells"][at]}</Cap>
    </svg>} />;
}

function MdWatch(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Watch and wait" title="Waiting, safely and watchfully" label="Watch and wait" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A line of regular check-ups, a blood test, a symptom diary, a phone and a person with a small cloud of worry">
      <g opacity={at === 0 ? 1 : 0.35}>
        <path d="M30 172 H290" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
        {Array.from({ length: 7 }, (_, index) => <circle key={index} cx={46 + index * 38} cy={172} r="6" fill={GOLD} stroke={INK} strokeWidth="1.5" />)}
      </g>
      {at === 0 && <g><Box x={70} y={40} width={180} text="Active monitoring" lit /><W x={160} y={100} size={10.5}>Also called watch and wait</W></g>}
      {at === 1 && <Tags x={50} y={50} width={220} gap={36} labels={["Treatment saved for later", "Avoids side effects for now"]} lit={() => true} />}
      {at === 2 && <g><Tube x={50} y={30} /><Tags x={100} y={34} width={190} labels={["Tiredness", "Breathlessness", "Bruising or bleeding"]} lit={() => false} /></g>}
      {at === 3 && <g>
        <rect x="56" y="30" width="84" height="110" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="56" y="30" width="12" height="110" rx="4" fill={SOFT} />
        {[56, 76, 96, 116].map(y => <path key={y} d={`M78 ${y} H128`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
        <Phone x={226} y={76} /><W x={226} y={132} size={10}>Your nurse</W>
      </g>}
      {at === 4 && <g><Person x={90} y={146} scale={1.2} /><Cloud x={110} y={64} s={0.6} fill={TINT} /><Bubble x={226} y={84} text="Talk to your nurse" width={140} /></g>}
      <Cap>{["Regular check-ups, no treatment yet", "Waiting is safe in this situation", "Blood tests, and questions on symptoms", "A symptom diary helps you notice", "Anxiety can rise before check-ups"][at]}</Cap>
    </svg>} />;
}

function MdBag(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Transfusions" title="A top-up, and what to watch for" label="Transfusions" credit={careCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A blood bag on a line, a clock, how often, an iron gauge and the signs to act on">
      <g opacity={at <= 1 ? 1 : 0.4}>
        <rect x="36" y="28" width="56" height="76" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="40" y="62" width="48" height="38" rx="9" fill={SOFT} />
        <path d="M64 104 V170" stroke={INK} strokeWidth="2.5" />
      </g>
      {at === 0 && <Tags x={120} y={46} width={186} gap={38} labels={["Red cells: less tired", "Platelets: if bleeding"]} lit={() => false} />}
      {at === 1 && <g><Clock x={160} y={82} r={30} hand={Math.PI * 2 / 3} /><Box x={206} y={68} width={100} text="Up to 4 hours" lit /><W x={206} y={140} size={10}>Checks before, during, after</W></g>}
      {at === 2 && <Tags x={120} y={46} width={186} gap={38} labels={["Every few months", "Or every week or so"]} lit={index => index === 1} />}
      {at === 3 && <g><Gauge x={210} y={126} r={56} value={0.72} label="Iron" /></g>}
      {at === 4 && <Tags x={116} y={34} width={190} gap={34} labels={["Mild: temperature, rash", "Later: urgent GP or 111", "Severe breathing: 999"]} lit={index => index === 2} />}
      <Cap>{["Donated blood tops up healthy cells", "Usually takes up to 4 hours", "Gaps may get shorter over time", "Your team monitors iron levels", "Many people have no side effects"][at]}</Cap>
    </svg>} />;
}

function MdLanes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const grid = (filled: number, fill: string) => <g>{Array.from({ length: 28 }, (_, index) => <rect key={index} x={152 + (index % 7) * 21} y={30 + Math.floor(index / 7) * 21} width="16" height="16" rx="4" fill={index < filled ? fill : WHITE} stroke={INK} strokeWidth="1.5" />)}</g>;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatments" title="Easing it, slowing it, or aiming to clear it" label="Treatments" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three lanes of treatment, supportive, non-intensive and intensive, with 28-day cycles of injections and capsules">
      <g opacity={at === 0 || at === 1 ? 1 : 0.35}>
        {["Supportive", "Non-intensive", "Intensive"].map((lane, index) => <Box key={lane} x={14} y={30 + index * 40} width={116} text={lane} lit={at === 1 && index === 0} />)}
      </g>
      {at === 0 && <Tags x={146} y={31} width={160} gap={40} labels={["Controls symptoms", "Tries to slow it", "Aims to get rid of it"]} lit={() => false} />}
      {at === 1 && <Tags x={146} y={31} width={160} gap={36} labels={["Transfusions", "Growth factors", "Antibiotics"]} lit={() => true} />}
      {at === 2 && <g>{grid(7, GOLD)}<W x={225} y={136} size={10}>7 days on, 3 weeks off</W></g>}
      {at === 3 && <g>{grid(21, INK)}<Pill x={72} y={170} fill={INK} /><W x={225} y={136} size={10}>Capsules, 21 days on</W></g>}
      {at === 4 && <Tags x={146} y={31} width={160} gap={36} labels={["Tell your team", "Treatments can help", "Clinical trials"]} lit={index => index === 0} />}
      <Cap>{["Not everyone needs active treatment", "Supportive care controls symptoms", "Azacitidine: usually at least 6 cycles", "Lenalidomide: 21 days on, 7 off", "Side effects can often be helped"][at]}</Cap>
    </svg>} />;
}

function MdRoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const marker = [64, 100, 140, 180, 250][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Transplant" title="New cells, and a long road home" label="Stem cell transplant" credit={careCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A road from hospital to home, donor cells, a family, days of conditioning, weeks in hospital and a one-year flag">
      <rect x="22" y="138" width="36" height="34" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M40 146 V164 M31 155 H49" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
      <path d="M270 150 L284 136 L298 150 V172 H270 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M62 180 H266" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      <circle cx={marker} cy={180} r="7" fill={GOLD} stroke={INK} strokeWidth="2" />
      {at === 0 && <g><Box x={20} y={40} width={124} text="Donor stem cells" /><Arrow x={152} y={54} length={30} /><Box x={196} y={40} width={110} text="Bone marrow" lit /><W x={160} y={104} size={10}>Called an allogeneic transplant</W></g>}
      {at === 1 && <g>{[60, 110, 160].map(x => <Person key={x} x={x} y={110} scale={0.9} fill={x === 110 ? GOLD : SOFT} />)}<Box x={196} y={58} width={110} text="Donor registry" /></g>}
      {at === 2 && <g><Squares x={50} y={50} count={10} filled={10} size={18} gap={22} labels={nums(10)} /><W x={150} y={100} size={11}>Conditioning, in days</W></g>}
      {at === 3 && <g>
        <rect x="40" y="34" width="90" height="80" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="56" y="48" width="30" height="24" rx="3" fill={TINT} stroke={INK} strokeWidth="1.5" />
        <Squares x={150} y={50} count={6} filled={6} size={20} gap={26} labels={nums(6)} /><W x={218} y={96} size={10}>weeks, at least</W>
      </g>}
      {at === 4 && <g>
        <Box x={30} y={40} width={176} text="Check-ups, weekly at first" size={10} /><Box x={30} y={78} width={176} text="Short walks, small meals" size={10} />
        <path d="M244 68 V132" stroke={INK} strokeWidth="3" /><path d="M244 68 H276 L268 78 L276 88 H244 Z" fill={GOLD} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <W x={252} y={56} size={10}>1 year</W>
      </g>}
      <Cap>{["Donor cells replace damaged ones", "Best match: often a brother or sister", "Conditioning lasts 1 to 10 days", "At least 6 weeks in hospital", "Up to a year to fully recover"][at]}</Cap>
    </svg>} />;
}

function MdThermo(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Infections" title="Know the number before you need it" label="Infections" credit={careCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A thermometer, the signs of infection, a phone for the emergency number, sepsis signs and ways to lower the risk">
      <Thermo x={50} y={28} level={at === 1 ? 0.7 : 0.45} />
      {at === 0 && <Tags x={100} y={30} width={200} gap={32} labels={["More infections", "Harder to fight", "Can start suddenly", "Fever may not show"]} lit={() => false} />}
      {at === 1 && <g>
        <path d="M60 64 H74 M60 110 H74" stroke={INK} strokeWidth="2.5" />
        <W x={80} y={68} size={10} anchor="start">37 and a half or more</W><W x={80} y={114} size={10} anchor="start">Below 36</W>
        <Box x={206} y={78} width={100} text="Get advice" lit />
      </g>}
      {at === 2 && <g><Phone x={130} y={86} text="Call" /><Tags x={176} y={52} width={130} gap={36} labels={["Emergency number", "No answer? 999"]} lit={index => index === 0} /></g>}
      {at === 3 && <g><Box x={96} y={34} width={210} text="Sepsis is an emergency" lit /><Tags x={96} y={78} width={210} gap={32} labels={["Confusion or slurred speech", "Severe breathlessness", "Mottled skin"]} lit={() => false} /></g>}
      {at === 4 && <Tags x={100} y={30} width={200} gap={32} labels={["Clean hands often", "Vaccines that are not live", "Soft toothbrush", "Gloves for gardening"]} lit={() => true} />}
      <Cap>{["Low white cells raise infection risk", "Get advice if too high or too low", "Get medical advice straight away", "Sepsis signs: 999 or A&E right away", "Simple steps lower your risk"][at]}</Cap>
    </svg>} />;
}

function MdSeesaw(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const levels = [50, 24, 56, 24, 50, 30, 40];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tiredness" title="Rest and move, in balance" label="Tiredness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Ten people with eight marked, treatments for anaemia, a see-saw with a bed and a shoe, a paced week and helpers">
      {at === 0 && <g>
        <W x={160} y={64} size={24} serif>About 8 in 10</W>
        {Array.from({ length: 10 }, (_, index) => <Person key={index} x={34 + index * 28} y={132} scale={0.7} fill={index < 8 ? INK : SOFT} />)}
        <W x={160} y={164} size={10}>with MDS have anaemia</W>
      </g>}
      {at === 1 && <Tags x={50} y={50} width={220} gap={38} labels={["Red cell transfusions", "Erythropoietin injections"]} lit={() => true} />}
      {at === 2 && <g>
        <path d="M160 134 L140 170 H180 Z" fill={SOFT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="50" y="126" width="220" height="8" rx="4" fill={INK} />
        <rect x="64" y="104" width="66" height="22" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="68" y="96" width="22" height="10" rx="4" fill={SOFT} />
        <path d="M200 126 V104 H222 C228 112, 240 114, 250 116 C258 118, 258 126, 250 126 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={97} y={86} size={10.5}>Rest</W><W x={228} y={90} size={10.5}>Activity</W>
      </g>}
      {at === 3 && <g>
        <rect x="60" y="28" width="14" height="14" rx="3" fill={INK} /><W x={80} y={40} size={10} anchor="start">Activity</W>
        <rect x="170" y="28" width="14" height="14" rx="3" fill={WHITE} stroke={INK} strokeWidth="1.5" /><W x={190} y={40} size={10} anchor="start">Rest</W>
        <path d="M32 170 H294" stroke={LINE} strokeWidth="2.5" />
        {levels.map((level, index) => <g key={index}><rect x={40 + index * 36} y={170 - level * 1.6} width="26" height={level * 1.6} rx="4" fill={index % 2 ? WHITE : INK} stroke={INK} strokeWidth="1.5" /><W x={53 + index * 36} y={186} size={9.5}>{WEEK[index]}</W></g>)}
      </g>}
      {at === 4 && <g><Person x={80} y={146} scale={1.3} /><Person x={130} y={146} scale={1.3} fill={SOFT} /><Tags x={170} y={56} width={136} gap={36} labels={["Occupational therapy", "Physiotherapy"]} lit={() => true} /></g>}
      <Cap>{["About 8 in 10 with MDS have anaemia", "Transfusions help anaemia symptoms", "You need both rest and activity", "Plan rest between activities", "Therapists can help you pace yourself"][at]}</Cap>
    </svg>} />;
}

function MdPlatelets(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const cluster = [[150, 116], [162, 110], [172, 122], [158, 126], [178, 112], [144, 126]];
  const loose = [[70, 74], [116, 64], [222, 72], [254, 94], [96, 160], [226, 158]];
  const spots = [[124, 72], [142, 92], [162, 112], [182, 80], [198, 118], [114, 118], [152, 64], [208, 94], [134, 134], [176, 136], [236, 70], [88, 92]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Bleeding" title="When bruises come too easily" label="Bruising and bleeding" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Platelets clustering over a cut, a glass pressed over small spots, a phone for the 24-hour number and ways to lower the risk">
      {at === 0 && <g>
        <path d="M50 120 C90 110, 120 130, 160 120 S230 110, 270 120" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
        {cluster.map(([x, y]) => <ellipse key={`${x}${y}`} cx={x} cy={y} rx="8" ry="5" fill={GOLD} stroke={INK} strokeWidth="1.5" />)}
        {loose.map(([x, y]) => <ellipse key={`${x}${y}`} cx={x} cy={y} rx="8" ry="5" fill={SOFT} stroke={INK} strokeWidth="1" />)}
        <W x={160} y={38} size={10.5}>Platelets stick together</W>
      </g>}
      {at === 1 && <g>
        {spots.map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="3" fill={INK} />)}
        <circle cx="160" cy="100" r="48" fill={WHITE} fillOpacity=".35" stroke={INK} strokeWidth="3" /><circle cx="160" cy="100" r="41" fill="none" stroke={LINE} strokeWidth="2" />
        <W x={160} y={172} size={10.5}>The spots do not fade</W>
      </g>}
      {at === 2 && <g><Phone x={84} y={92} text="24h" /><Box x={140} y={58} width={166} text="Platelet transfusion" /><Box x={140} y={98} width={166} text="Severe headache: 999" lit /></g>}
      {at === 3 && <Tags x={50} y={40} width={220} gap={34} labels={["Usually avoid ibuprofen, aspirin", "Soft bristle toothbrush", "Helmet for cycling"]} lit={() => false} />}
      <Cap>{["Platelets help your blood to clot", "Spots that do not fade under a glass", "Bleeding? Call the 24-hour number", "Ways to lower the risk of bleeding"][at]}</Cap>
    </svg>} />;
}

function MdBench(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const wave = Array.from({ length: 28 }, (_, index) => `${index ? "L" : "M"}${30 + index * 10} ${84 + 22 * Math.sin(index / 2)}`).join(" ");
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="Living with not knowing" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person on a bench with a line of ups and downs, the sun, a day to look forward to, support groups and signposts to urgent help">
      <path d="M14 182 H306" stroke={LINE} strokeWidth="3" />
      <Person x={100} y={160} scale={1.1} />
      <path d="M50 168 H150 M60 168 V182 M140 168 V182" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <path d={wave} stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      {at === 1 && <g><Sun x={250} y={70} r={20} /><Tags x={24} y={30} width={150} gap={34} labels={["One day at a time", "Time with loved ones"]} lit={() => false} /></g>}
      {at === 2 && <g><Month x={164} y={34} tick={18} /><circle cx="252" cy="82" r="14" fill="none" stroke={INK} strokeWidth="2.5" className={still ? undefined : "lib-why-pulse"} /></g>}
      {at === 3 && <Tags x={156} y={30} width={150} gap={34} labels={["Local support groups", "Leukaemia Care", "Blood Cancer UK"]} lit={() => true} />}
      {at === 4 && <Signposts x={240} labels={["111", "116 123", "999"]} />}
      <Cap>{["Ups and downs are normal", "Taking each day as it comes can help", "Something to look forward to helps", "People in a similar situation help", "Help now: 111, 116 123 or 999"][at]}</Cap>
    </svg>} />;
}

// ==== Vulval cancer =========================================================================================

const intimateCredit = "Illustration: Rehyn. Shown only as simple shapes and words.";

function VuPlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [-1, 0, 1, 2, -1][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What you had" title="What each part of treatment was for" label="Treatments" credit={intimateCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three treatments in a row, a care team, a dashed margin around a small area, radiotherapy timing, weekly chemotherapy and signs to act on">
      <Row x={10} y={18} width={94} gap={103} labels={["Surgery", "Radiotherapy", "Chemotherapy"]} lit={index => index === lit} />
      {at === 0 && <g>{[80, 130, 180, 230].map((x, index) => <Person key={x} x={x} y={160} scale={1.1} fill={index % 2 ? SOFT : INK} />)}<Bubble x={160} y={84} text="Questions? Just ask" width={150} /></g>}
      {at === 1 && <g>
        <circle cx="90" cy="112" r="40" fill={TINT} stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" /><circle cx="90" cy="112" r="14" fill={SOFT} stroke={INK} strokeWidth="2" />
        <W x={90} y={174} size={10}>Margin of healthy tissue</W>
        <Tags x={170} y={70} width={136} gap={32} labels={["Wide local excision", "Partial vulvectomy", "Lymph nodes"]} lit={() => false} />
      </g>}
      {at === 2 && <Tags x={50} y={70} width={220} gap={34} labels={["Before surgery: to shrink it", "After surgery: lower the risk", "Instead of surgery"]} lit={() => false} />}
      {at === 3 && <g><Squares x={50} y={76} count={6} filled={6} size={30} gap={38} labels={nums(6)} /><W x={160} y={136} size={10.5}>Cisplatin, once a week</W></g>}
      {at === 4 && <g><Phone x={60} y={112} /><Tags x={110} y={66} width={196} gap={32} labels={["High temperature", "Leg swelling, warmth", "Sudden breathlessness"]} lit={() => true} /></g>}
      <Cap>{["Your plan was made around you", "The aim is to remove all the cancer", "Radiotherapy before or after surgery", "Often given together with radiotherapy", "Infection or clot signs: call now"][at]}</Cap>
    </svg>} />;
}

function VuRings(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const arcs = [{ n: 4, r: 88 }, { n: 3, r: 66 }, { n: 2, r: 44 }, { n: 1, r: 22 }];
  const isLit = (n: number) => (at === 1 && n <= 2) || (at === 2 && n >= 3);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stage and grade" title="Stage and grade, in plain words" label="Stage and grade" credit={resultsCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four arcs spreading out for stages 1 to 4, cells for the grade, and support">
      <g opacity={at >= 3 ? 0.35 : 1}>
        {arcs.map(arc => <path key={arc.n} d={`M${100 - arc.r} 176 A${arc.r} ${arc.r} 0 0 1 ${100 + arc.r} 176 Z`} fill={isLit(arc.n) ? (arc.n % 2 ? INK : SOFT) : WHITE} stroke={INK} strokeWidth="2" />)}
        {arcs.map(arc => <W key={arc.n} x={100} y={176 - arc.r + 15} size={11} fill={isLit(arc.n) && arc.n % 2 ? WHITE : TEXT}>{String(arc.n)}</W>)}
      </g>
      {at === 0 && <g><W x={254} y={56} size={10.5}>FIGO stages</W><Row x={200} y={66} width={24} gap={28} labels={nums(4)} size={11} /></g>}
      {at === 1 && <Tags x={196} y={60} width={114} gap={36} labels={["1: only the vulva", "2: nearby tissue"]} lit={() => true} />}
      {at === 2 && <Tags x={196} y={60} width={114} gap={36} labels={["3: lymph nodes", "4: further away"]} lit={() => true} />}
      {at === 3 && <g>
        <circle cx="210" cy="80" r="14" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M236 70 C250 64, 264 72, 260 84 C258 96, 242 96, 238 88 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M276 68 L290 62 L302 72 L296 80 L304 92 L284 96 L278 84 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        {nums(3).map((grade, index) => <W key={grade} x={210 + index * 42} y={120} size={11}>{grade}</W>)}
      </g>}
      {at === 4 && <g><Box x={186} y={44} width={124} text="Symptom control" lit /><Tags x={186} y={84} width={124} gap={34} labels={["Macmillan", "Marie Curie"]} lit={() => false} /></g>}
      <Cap>{["Doctors usually use the FIGO system", "Stages 1 and 2: early-stage cancers", "Stages 3 and 4: advanced-stage", "Grade: how the cells look", "A team to help you feel comfortable"][at]}</Cap>
    </svg>} />;
}

function VuYears(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const dots = [36, 50, 64, 78, 90, 104, 118, 132, 164, 194, 218, 248, 272, 300].map(x => x - 6);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="Check-ups, and what to report" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people talking, five years of check-ups closer together at first, an examination, a phone and the symptoms to report">
      {at === 0 && <g><Person x={90} y={150} scale={1.3} /><Person x={160} y={150} scale={1.3} fill={SOFT} /><Bubble x={232} y={60} text="Any worries?" width={120} /></g>}
      {at === 1 && <g>
        <path d="M24 110 H298" stroke={LINE} strokeWidth="5" strokeLinecap="round" />
        {[24, 79, 134, 188, 243, 298].map(x => <path key={x} d={`M${x} 100 V120`} stroke={SOFT} strokeWidth="2" />)}
        {dots.map((x, index) => <circle key={x} cx={x} cy={110} r="5" fill={index < 8 ? INK : GOLD} stroke={INK} strokeWidth="1.5" />)}
        {nums(5).map((year, index) => <W key={year} x={51 + index * 55} y={138} size={10}>{`Year ${year}`}</W>)}
        <W x={80} y={82} size={10}>Every 3 to 6 months</W><W x={226} y={82} size={10}>Every 6 to 12 months</W>
      </g>}
      {at === 2 && <Tags x={60} y={40} width={200} labels={["An examination", "How you are feeling", "Tests at some visits"]} lit={index => index === 0} />}
      {at === 3 && <g><Phone x={56} y={96} /><Tags x={100} y={26} width={206} gap={32} labels={["An open sore or growth", "Itch, bleeding, soreness", "Patches or a changing mole", "A lump in the groin"]} lit={() => false} /></g>}
      {at === 4 && <g><Person x={90} y={150} scale={1.2} /><Cloud x={112} y={66} s={0.6} fill={TINT} /><Bubble x={228} y={92} text="Tell someone close" width={140} /></g>}
      <Cap>{["A chance to raise any concerns", "Closer together for the first 2 years", "Your doctor or nurse examines you", "Report new symptoms between visits", "Check-ups can bring back anxiety"][at]}</Cap>
    </svg>} />;
}

function VuOintment(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Skin conditions" title="Skin conditions that still need care" label="Skin conditions" credit={intimateCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three skin conditions named, a tube of ointment, years of check-ups, soap crossed out beside an emollient, and changes to report">
      {at === 0 && <Tags x={60} y={46} width={200} gap={36} labels={["VIN", "Lichen sclerosus", "Lichen planus"]} lit={() => false} />}
      {at === 1 && <g><CreamTube x={24} y={80} text="Steroid" /><Tags x={146} y={44} width={160} labels={["Not an infection", "Not contagious", "Steroid ointment"]} lit={index => index === 2} /></g>}
      {at === 2 && <g>
        <Squares x={46} y={56} count={8} filled={8} size={22} gap={30} labels={nums(8)} fill={SOFT} />
        <W x={160} y={102} size={10.5}>Regular checks, often for years</W>
        <Box x={70} y={122} width={180} text="Not smoking helps" />
      </g>}
      {at === 3 && <g>
        <rect x="46" y="62" width="80" height="44" rx="14" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Strike x1={40} y1={116} x2={132} y2={52} />
        <rect x="186" y="54" width="76" height="14" rx="5" fill={INK} /><rect x="190" y="68" width="68" height="44" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={86} y={134} size={10.5}>Soap</W><W x={224} y={134} size={10.5}>Emollient</W>
        <Box x={70} y={146} width={180} text="Cotton or silk underwear" size={10} />
      </g>}
      {at === 4 && <g><Box x={50} y={56} width={220} text="Ulcer or lump? Do not wait" lit /><Box x={50} y={96} width={220} text="Lasting over 2 weeks? See a GP" size={10} /></g>}
      <Cap>{["Some skin conditions can lead to it", "Steroid ointment eases the symptoms", "VIN can come back, so checks go on", "Wash with an emollient, not soap", "Sudden changes: talk to your doctor"][at]}</Cap>
    </svg>} />;
}

function VuJug(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const week = (n: number) => 30 + n * 32.5;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Wound care" title="Rinse, dry gently, watch for infection" label="Wound healing" credit={careCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Days for stitches, a jug of water, signs to act on, a glass of water and a ruler of weeks with no heavy lifting">
      {at === 0 && <g>
        {nums(10).map((day, index) => <g key={day}><rect x={40 + index * 24} y="56" width="20" height="20" rx="4" fill={index >= 6 ? GOLD : WHITE} stroke={INK} strokeWidth="1.5" /><W x={50 + index * 24} y={70} size={9.5}>{day}</W></g>)}
        <W x={160} y={102} size={10.5}>If not soluble, out at 7 to 10 days</W>
        <Box x={80} y={124} width={160} text="Usually soluble" lit />
      </g>}
      {at === 1 && <g>
        <path d="M44 70 H104 L98 150 H50 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><path d="M104 80 C120 80, 122 110, 100 118" stroke={INK} strokeWidth="3" fill="none" />
        <path d="M47 96 H101 L98 147 H50 Z" fill={SOFT} /><path d="M44 70 C36 66, 32 74, 30 84" stroke={SOFT} strokeWidth="4" fill="none" strokeLinecap="round" />
        <Tags x={146} y={50} width={160} labels={["Rinse gently", "Cool hairdryer", "Loose cotton"]} lit={() => true} />
      </g>}
      {at === 2 && <g><Thermo x={56} y={30} level={0.8} /><Tags x={100} y={40} width={200} labels={["Hot, swollen or red", "Fluid or pus", "A sore, swollen leg"]} lit={() => true} /></g>}
      {at === 3 && <g><Glass x={70} y={50} /><Tags x={130} y={46} width={170} labels={["Painkillers help", "Plenty of fluids", "Leg exercises"]} lit={() => false} /></g>}
      {at === 4 && <g>
        <rect x={week(6)} y="122" width={week(8) - week(6)} height="16" rx="8" fill={GOLD} opacity=".7" />
        <path d={`M${week(0)} 130 H${week(8)}`} stroke={LINE} strokeWidth="6" strokeLinecap="round" />
        {nums(9, 0).map(n => <path key={n} d={`M${week(Number(n))} 124 V136`} stroke={SOFT} strokeWidth="2" />)}
        {[0, 2, 4, 6, 8].map(n => <W key={n} x={week(n)} y={156} size={10}>{String(n)}</W>)}
        <W x={160} y={174} size={10}>weeks</W>
        <NoLifting x={160} y={62} />
      </g>}
      <Cap>{["Stitches are usually soluble", "Keep the wound clean and dry", "Signs to tell your nurse or doctor", "Pain is normal for a week or so", "6 to 8 weeks after a bigger operation"][at]}</Cap>
    </svg>} />;
}

function VuLeg(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Leg swelling" title="When a leg starts to swell" label="Lymphoedema" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A simple leg with lymph channels running up to the nodes, a tight band at the ankle, care tips and the signs of cellulitis">
      <path d="M64 34 C60 84, 62 120, 68 152 L66 180 H122 C122 170, 108 164, 96 162 C98 120, 102 84, 100 34 Z" fill={at === 4 ? TINT : WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M82 40 C80 84, 82 120, 84 160" stroke={SOFT} strokeWidth="2.5" strokeDasharray="5 4" fill="none" />
      {[[70, 24], [86, 20], [100, 26]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="6" fill={at === 0 ? LINE : SOFT} stroke={INK} strokeWidth="1.5" strokeDasharray={at === 0 ? "3 2" : undefined} />)}
      {at === 1 && <path d="M66 150 Q82 158 98 152" stroke={GOLD} strokeWidth="5" fill="none" strokeLinecap="round" />}
      {at === 0 && <Tags x={146} y={58} width={160} gap={38} labels={["One or both legs", "Can start much later"]} lit={() => false} />}
      {at === 1 && <Tags x={146} y={44} width={160} labels={["Shoes feel tighter", "Heavy or tight leg", "Aching"]} lit={() => false} />}
      {at === 2 && <g><Box x={140} y={36} width={166} text="Lymphoedema specialist" lit /><Tags x={140} y={78} width={166} labels={["Skin care", "Compression", "Lymphatic drainage"]} lit={() => false} /></g>}
      {at === 3 && <Tags x={140} y={30} width={166} gap={34} labels={["No bare feet", "Clean cuts quickly", "Avoid sunburn", "Keep gently active"]} lit={() => true} />}
      {at === 4 && <g><Thermo x={160} y={30} level={0.8} /><Tags x={190} y={40} width={116} labels={["Red and hot", "Painful, swollen", "Feeling shivery"]} lit={() => true} /></g>}
      <Cap>{["Lymph fluid can build up in the legs", "Clothes may feel tight before swelling", "Easier to control if treated early", "Protect your legs and feet", "Cellulitis needs treating quickly"][at]}</Cap>
    </svg>} />;
}

function VuWave(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Radiotherapy" title="Side effects that build, then ease" label="After radiotherapy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Six weeks of weekday sessions, a curve of side effects rising then easing, skin changes, the bladder and changes that can last">
      {at === 0 && <g>
        {nums(6).map((n, index) => <W key={n} x={69 + index * 36} y={32} size={10}>{`W${n}`}</W>)}
        {WEEK.slice(0, 5).map((day, index) => <W key={index} x={50} y={52 + index * 22} size={9.5} anchor="end">{day}</W>)}
        {Array.from({ length: 30 }, (_, index) => <rect key={index} x={60 + Math.floor(index / 5) * 36} y={40 + (index % 5) * 22} width="18" height="18" rx="4" fill={INK} />)}
        <W x={160} y={166} size={10.5}>A rest at the weekends</W>
      </g>}
      {at === 1 && <g>
        <path d="M30 40 V160 H300" stroke={LINE} strokeWidth="2.5" fill="none" />
        <path d="M180 48 V160" stroke={SOFT} strokeWidth="2" strokeDasharray="5 4" />
        <path d="M40 150 C80 150, 110 118, 150 90 C180 70, 200 60, 215 62 C240 66, 260 130, 296 150" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="214" cy="62" r="6" fill={GOLD} stroke={INK} strokeWidth="1.5" />
        <W x={40} y={178} size={10} anchor="start">Start</W><W x={180} y={178} size={10}>Treatment ends</W>
      </g>}
      {at === 2 && <Tags x={60} y={40} width={200} labels={["Red or darker", "Sore, itchy or warm", "Dry and flaky"]} lit={() => false} />}
      {at === 3 && <g><Bladder x={76} y={92} /><W x={76} y={142} size={10.5}>Bladder</W><Tags x={136} y={44} width={170} labels={["Loose poo", "Burning when you pee", "Cannot pass urine: call"]} lit={index => index === 2} /></g>}
      {at === 4 && <Tags x={50} y={40} width={220} labels={["Early menopause", "Dryness: lubricants can help", "Swelling: gentle massage"]} lit={() => false} />}
      <Cap>{["Usually daily, Monday to Friday", "Easing about 2 weeks after the end", "Skin usually settles in 2 to 4 weeks", "Often better a week or so after", "Some changes can last longer"][at]}</Cap>
    </svg>} />;
}

function VuGlass(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Bladder and bowel" title="Bladder and bowel: what can change" label="Bladder and bowel" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Notes about surgery, a glass of water, a bladder, a sign to get blood checked, and a toilet card">
      {at === 0 && <Tags x={50} y={50} width={220} gap={38} labels={["Stream may go to one side", "A catheter for a while"]} lit={() => false} />}
      {at === 1 && <g><Glass x={70} y={44} /><Tags x={130} y={44} width={170} labels={["Eat well", "Plenty of fluids", "Laxatives if needed"]} lit={index => index === 1} /></g>}
      {at === 2 && <g><Bladder x={76} y={92} /><W x={76} y={142} size={10.5}>Bladder</W><Tags x={136} y={44} width={170} labels={["Peeing more often", "A burning feeling", "Tummy cramps"]} lit={() => false} /></g>}
      {at === 3 && <g><Box x={50} y={56} width={220} text="Blood in urine: get checked" lit /><Box x={50} y={96} width={220} text="Rushing to go? Tell your doctor" size={10} /></g>}
      {at === 4 && <g>
        <rect x="36" y="56" width="132" height="80" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="36" y="56" width="132" height="22" rx="10" fill={INK} />
        <W x={102} y={106} size={12}>Toilet card</W><W x={102} y={124} size={10}>From Macmillan</W>
        <Glass x={240} y={44} /><W x={240} y={146} size={10.5}>1 to 2 litres</W>
      </g>}
      <Cap>{["Usually no long-term bladder problems", "Fluids help avoid constipation", "Peeing more often during radiotherapy", "Some effects can come months later", "1 to 2 litres a day after radiotherapy"][at]}</Cap>
    </svg>} />;
}

function VuHands(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Closeness" title="Closeness, at your own pace" label="Sex and intimacy" credit={intimateCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people side by side, with time to heal, talking, things that help with comfort and support">
      <Person x={70} y={162} scale={1.2} /><Person x={122} y={162} scale={1.2} fill={SOFT} />
      {at === 0 && <g><Bubble x={232} y={64} text="When you feel ready" width={150} /><Box x={170} y={108} width={136} text="Your nurse can help" size={10} /></g>}
      {at === 1 && <g><HeartShape x={96} y={92} size={30} fill={GOLD} /><Squares x={170} y={64} count={6} filled={6} size={18} gap={22} labels={nums(6)} /><W x={234} y={106} size={10.5}>weeks, at least</W></g>}
      {at === 2 && <g><Bubble x={70} y={74} text="· · ·" width={64} /><Bubble x={150} y={54} text="· · ·" width={64} /><Box x={196} y={104} width={110} text="Take your time" /></g>}
      {at === 3 && <Tags x={170} y={46} width={136} labels={["Lubricants", "Moisturisers", "Ask your nurse"]} lit={() => true} />}
      {at === 4 && <g><Box x={170} y={60} width={136} text="Psychosexual therapist" size={9.5} lit /><Box x={170} y={98} width={136} text="Your GP or nurse" /></g>}
      <Cap>{["Look when you feel ready", "Usually no sex for at least 6 weeks", "Explore what feels good now", "Help for tightness and dryness", "Others who have been there feel it too"][at]}</Cap>
    </svg>} />;
}

function VuTorch(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Self-checks" title="A mirror, good light, a few minutes" label="Checking yourself" credit={intimateCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A month with one day marked, a hand mirror and a torch, a checklist of changes and a phone">
      {at === 0 && <g><Month x={92} y={40} tick={12} /><W x={160} y={146} size={10.5}>Know what is normal for you</W></g>}
      {at === 1 && <g>
        <circle cx="80" cy="78" r="34" fill={TINT} stroke={INK} strokeWidth="3" /><path d="M80 112 V164" stroke={INK} strokeWidth="7" strokeLinecap="round" />
        <rect x="126" y="70" width="46" height="22" rx="6" fill={INK} /><path d="M172 72 L196 60 V102 L172 90 Z" fill={GOLD} opacity=".7" />
        <Tags x={204} y={46} width={104} labels={["Wash hands", "Good light", "Look, then feel"]} lit={() => false} />
      </g>}
      {at === 2 && <Tags x={50} y={30} width={220} gap={32} labels={["Lumps, bumps or sores", "Red, white or dark patches", "Itch, pain or soreness", "A changing mole"]} lit={() => false} />}
      {at === 3 && <g><Phone x={70} y={96} /><Box x={120} y={62} width={186} text="Ask Eve: 0808 802 0019" lit /><Box x={120} y={102} width={186} text="No need to wait" /></g>}
      <Cap>{["The Eve Appeal: check once a month", "A mirror and good light", "Look first, then feel for lumps", "Notice a change? Contact your team"][at]}</Cap>
    </svg>} />;
}

function VuDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and life" title="Back to everyday life and work" label="Work and everyday life" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A chair with an air cushion, no heavy lifting, a document of your rights, a stair of gradual steps and a coin">
      {at === 0 && <g>
        <rect x="50" y="122" width="80" height="10" rx="4" fill={INK} /><rect x="120" y="70" width="10" height="62" rx="4" fill={INK} /><path d="M58 132 V176 M122 132 V176" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="86" cy="114" rx="34" ry="8" fill={TINT} stroke={GOLD} strokeWidth="3" />
        <Tags x={170} y={44} width={136} labels={["Rest a few weeks", "Keep moving", "Air cushion"]} lit={index => index === 1} />
      </g>}
      {at === 1 && <g><NoLifting x={80} y={82} /><Box x={150} y={62} width={156} text="Driving: about 6 weeks" /><W x={228} y={114} size={10}>Check with your insurer</W></g>}
      {at === 2 && <g>
        <path d="M30 30 H84 L100 46 V130 H30 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        {[62, 78, 94, 110].map(y => <path key={y} d={`M42 ${y} H88`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
        <Tags x={126} y={30} width={180} gap={32} labels={["Phased return", "Different hours", "Extra breaks", "Parking nearby"]} lit={() => false} />
      </g>}
      {at === 3 && <g>
        <path d="M30 176 H80 V146 H130 V116 H180 V86 H230 V60 H290" stroke={INK} strokeWidth="4" fill="none" strokeLinejoin="round" />
        <Person x={260} y={44} scale={0.9} />
      </g>}
      {at === 4 && <g><Coin x={70} y={84} /><Tags x={120} y={44} width={186} labels={["Access to Work", "Benefits adviser", "Hospital social worker"]} lit={index => index === 0} /></g>}
      <Cap>{["Rest, but keep moving", "No heavy lifting for 6 to 8 weeks", "Cancer counts as a disability in law", "Plan a gradual return if you can", "Get advice on money and benefits"][at]}</Cap>
    </svg>} />;
}

function VuCloud(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="The low months after treatment ends" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person on open hills under a cloud that thins as the sun comes out, people to talk to and signposts to urgent help">
      <circle cx="262" cy={[96, 84, 72, 60, 48][at]} r="18" fill={GOLD} opacity={[0.3, 0.45, 0.6, 0.8, 1][at]} className={still || at < 3 ? undefined : "lib-why-pulse"} />
      <Cloud x={250} y={86} s={[1.1, 0.9, 0.75, 0.6, 0.45][at]} fill={at >= 3 ? TINT : SOFT} />
      <Hills />
      <Person x={70} y={160} />
      {at === 0 && <Tags x={24} y={24} width={140} gap={32} labels={["Relief", "Side effects", "Other emotions"]} lit={() => false} />}
      {at === 1 && <Box x={20} y={40} width={176} text="Focus on what you control" size={10} />}
      {at === 2 && <Tags x={20} y={24} width={170} gap={34} labels={["Friends and family", "Women who have been there"]} lit={() => true} />}
      {at === 3 && <Box x={20} y={40} width={170} text="Sad for weeks? See a GP" lit />}
      {at === 4 && <Signposts x={140} labels={["111", "116 123", "999"]} />}
      <Cap>{["Relief, and other feelings too", "Uncertainty often gets better", "Women with similar treatment can help", "Depression is a real illness", "Urgent help: 111, 116 123 or 999"][at]}</Cap>
    </svg>} />;
}

export function SpotPieceView({ piece, ...props }: { piece: SpotPiece } & PieceProps) {
  switch (piece) {
    case "spot-sk-layers": return <SkLayers {...props} />;
    case "spot-sk-tools": return <SkTools {...props} />;
    case "spot-sk-calendar": return <SkCalendar {...props} />;
    case "spot-sk-map": return <SkMap {...props} />;
    case "spot-sk-dressing": return <SkDressing {...props} />;
    case "spot-sk-mirror": return <SkMirror {...props} />;
    case "spot-sk-cream": return <SkCream {...props} />;
    case "spot-sk-face": return <SkFace {...props} />;
    case "spot-sk-shade": return <SkShade {...props} />;
    case "spot-sk-vitd": return <SkVitd {...props} />;
    case "spot-sk-outdoors": return <SkOutdoors {...props} />;
    case "spot-sk-path": return <SkPath {...props} />;
    case "spot-md-marrow": return <MdMarrow {...props} />;
    case "spot-md-scale": return <MdScale {...props} />;
    case "spot-md-tube": return <MdTube {...props} />;
    case "spot-md-counts": return <MdCounts {...props} />;
    case "spot-md-watch": return <MdWatch {...props} />;
    case "spot-md-bag": return <MdBag {...props} />;
    case "spot-md-lanes": return <MdLanes {...props} />;
    case "spot-md-road": return <MdRoad {...props} />;
    case "spot-md-thermo": return <MdThermo {...props} />;
    case "spot-md-seesaw": return <MdSeesaw {...props} />;
    case "spot-md-platelets": return <MdPlatelets {...props} />;
    case "spot-md-bench": return <MdBench {...props} />;
    case "spot-vu-plan": return <VuPlan {...props} />;
    case "spot-vu-rings": return <VuRings {...props} />;
    case "spot-vu-years": return <VuYears {...props} />;
    case "spot-vu-ointment": return <VuOintment {...props} />;
    case "spot-vu-jug": return <VuJug {...props} />;
    case "spot-vu-leg": return <VuLeg {...props} />;
    case "spot-vu-wave": return <VuWave {...props} />;
    case "spot-vu-glass": return <VuGlass {...props} />;
    case "spot-vu-hands": return <VuHands {...props} />;
    case "spot-vu-torch": return <VuTorch {...props} />;
    case "spot-vu-desk": return <VuDesk {...props} />;
    case "spot-vu-cloud": return <VuCloud {...props} />;
    default: return null;
  }
}
