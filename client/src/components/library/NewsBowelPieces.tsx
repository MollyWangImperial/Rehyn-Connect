import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { BOWEL_PIECES, type BowelPiece } from "@/content/bowel-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Coeliac disease, Diverticular disease and Constipation pages' own pieces (content/bowel-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Kidneys, liver & digestion pieces. Each is steered by the card's
// sections; pictures show ideas, never anyone's own body or results.

export const isBowelPiece = (piece: NewsPiece): piece is BowelPiece => (BOWEL_PIECES as readonly string[]).includes(piece);

// ==== Shapes ================================================================================================

/** The caption under a picture. */
const Say = ({ y = 206, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;

/** A labelled tile; filled when lit. */
const Tile = ({ x, y, width, label, lit, height = 28, size = 10.5 }: { x: number; y: number; width: number; label: string; lit: boolean; height?: number; size?: number }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
    <W x={x + width / 2} y={y + height / 2 + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{label}</W></g>;

/** A column of tiles from (x, y) downwards. */
const Column = ({ x, y, labels, lit, width = 120, gap = 34 }: { x: number; y: number; labels: string[]; lit: (index: number) => boolean; width?: number; gap?: number }) =>
  <g>{labels.map((label, index) => <Tile key={label} x={x} y={y + index * gap} width={width} height={26} label={label} lit={lit(index)} />)}</g>;

const Tick = ({ x, y, color = GOLD, size = 1 }: { x: number; y: number; color?: string; size?: number }) =>
  <path transform={`translate(${x} ${y}) scale(${size})`} d="M-7 0 L-2 6 L8 -6" fill="none" stroke={color} strokeWidth={3.5 / size} strokeLinecap="round" strokeLinejoin="round" />;
const Cross = ({ x, y, color = INK, size = 1 }: { x: number; y: number; color?: string; size?: number }) =>
  <path transform={`translate(${x} ${y}) scale(${size})`} d="M-6 -6 L6 6 M6 -6 L-6 6" fill="none" stroke={color} strokeWidth={3.5 / size} strokeLinecap="round" />;

/** The large bowel as a thick, rounded frame. */
const Bowel = ({ d, glow = false }: { d: string; glow?: boolean }) =>
  <g fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} stroke={INK} strokeWidth="20" /><path d={d} stroke={glow ? GOLD : TINT} strokeWidth="13" /></g>;

/** A blood test tube. */
const Tube = ({ x, y, rotate = 0 }: { x: number; y: number; rotate?: number }) =>
  <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
    <rect x="-7" y="-22" width="14" height="44" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path d="M-5.5 0 H5.5 V14 A5.5 5.5 0 0 1 -5.5 14 Z" fill={INK} />
    <rect x="-9" y="-26" width="18" height="8" rx="2" fill={SOFT} />
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

/** An ear of wheat, about 24 wide and 50 tall. */
const Wheat = ({ x, y, scale = 1, color = INK }: { x: number; y: number; scale?: number; color?: string }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M0 22 V-18" stroke={color} strokeWidth={2.5 / scale} strokeLinecap="round" />
    {[-12, -3, 6].map(dy => <g key={dy}><ellipse cx="-5" cy={dy} rx="3.5" ry="6.5" transform={`rotate(-30 -5 ${dy})`} fill={color} /><ellipse cx="5" cy={dy} rx="3.5" ry="6.5" transform={`rotate(30 5 ${dy})`} fill={color} /></g>)}
    <ellipse cx="0" cy="-22" rx="3" ry="6" fill={color} />
  </g>;

/** A slice of bread. */
const Bread = ({ x, y, scale = 1, fill = WHITE }: { x: number; y: number; scale?: number; fill?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${scale})`} d="M-14 16 V-2 C-22 -4, -22 -20, -10 -20 C-6 -26, 6 -26, 10 -20 C22 -20, 22 -4, 14 -2 V16 Z" fill={fill} stroke={INK} strokeWidth={2.5 / scale} strokeLinejoin="round" />;

/** A loaf, about 36 wide. */
const Loaf = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}><path d="M-18 14 V-2 C-18 -16, 18 -16, 18 -2 V14 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M-8 -8 L-4 -2 M2 -10 L6 -4" stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" /></g>;

/** A bag of flour. */
const Bag = ({ x, y }: { x: number; y: number }) =>
  <g transform={`translate(${x} ${y})`}><path d="M-14 16 V-12 L-8 -18 H8 L14 -12 V16 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M-8 -2 H8" stroke={SOFT} strokeWidth="3" strokeLinecap="round" /></g>;

/** A drop of liquid. */
const Drop = ({ x, y, r = 8, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r * 1.7} C${x + r * 0.4} ${y - r}, ${x + r} ${y - r * 0.4}, ${x + r} ${y + r * 0.1} A${r} ${r} 0 0 1 ${x - r} ${y + r * 0.1} C${x - r} ${y - r * 0.4}, ${x - r * 0.4} ${y - r}, ${x} ${y - r * 1.7} Z`} fill={fill} />;

const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;

/** A thermometer, its bulb at (x, y + 16). */
const Thermo = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 7} y={y - 30} width="14" height="44" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 3} y={y - 16} width="6" height="30" fill={INK} /><circle cx={x} cy={y + 16} r="10" fill={INK} /></g>;

/** A phone, about 26 wide and 44 tall. */
const Phone = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 13} y={y - 22} width="26" height="44" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 9} y={y - 16} width="18" height="28" rx="2" fill={TINT} /><circle cx={x} cy={y + 17} r="2" fill={INK} /></g>;

/** A letter in its envelope. */
const Letter = ({ x, y, width = 56, height = 38 }: { x: number; y: number; width?: number; height?: number }) =>
  <g><rect x={x - width / 2} y={y - height / 2} width={width} height={height} rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <path d={`M${x - width / 2} ${y - height / 2} L${x} ${y + 4} L${x + width / 2} ${y - height / 2}`} fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /></g>;

/** A warning triangle. */
const Warn = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x} ${y - 30} L${x + 30} ${y + 22} H${x - 30} Z`} fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><W x={x} y={y + 14} size={20}>!</W></g>;

// ==== Coeliac disease ========================================================================================

function Villi(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const flat = at === 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When the body mistakes gluten for a threat" label="What coeliac disease is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The lining of the small bowel, its finger-like villi flattened when the immune system reacts to gluten">
      {Array.from({ length: 13 }, (_, index) => {
        const x = 32 + index * 21, h = flat ? 12 : 46;
        return <path key={index} d={`M${x - 7} 162 V${162 - h + 7} a7 7 0 0 1 14 0 V162`} fill={at === 4 ? TINT : WHITE} stroke={flat ? GOLD : INK} strokeWidth="2.5" />;
      })}
      <rect x="20" y="160" width="280" height="14" rx="4" fill={SOFT} />
      {at === 0 && ["Wheat", "Barley", "Rye"].map((label, index) => <g key={label}><Wheat x={62 + index * 98} y={46} scale={1.05} /><W x={62 + index * 98} y={94} size={10.5}>{label}</W></g>)}
      {at === 1 && <><g className={still ? undefined : "lib-why-pulse"}><circle cx="160" cy="54" r="17" fill={WHITE} stroke={INK} strokeWidth="3" />
        {[0, 60, 120, 180, 240, 300].map(a => <circle key={a} cx={160 + 22 * Math.cos(a * Math.PI / 180)} cy={54 + 22 * Math.sin(a * Math.PI / 180)} r="3.5" fill={INK} />)}</g>
        <W x={160} y={102} size={10.5}>Gliadin mistaken for a threat</W></>}
      {at === 2 && <>{["Allergy", "Intolerance", "Autoimmune"].map((label, index) => <Tile key={label} x={18 + index * 98} y={34} width={88} label={label} lit={index === 2} />)}
        <Cross x={62} y={86} /><Cross x={160} y={86} /><Tick x={258} y={86} size={1.4} /></>}
      {at === 3 && Array.from({ length: 100 }, (_, index) => <circle key={index} cx={36 + (index % 20) * 13} cy={30 + Math.floor(index / 20) * 13} r="3.5" fill={index === 0 ? GOLD : LINE} />)}
      {at === 4 && <><Plate x={160} y={56} r={28} /><Tick x={160} y={56} size={1.6} /><W x={160} y={104} size={10.5}>Gluten-free, for life</W></>}
      <Say y={204}>{["Gluten: in wheat, barley and rye", "Flattened villi absorb less", "Autoimmune, not an allergy", "At least 1 in 100 people in the UK", "Gluten-free, the gut lining repairs"][at]}</Say>
    </svg>} />;
}

function BodyMap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const ring = (cx: number, cy: number, r = 11) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Far more than a gut problem" label="Symptoms of coeliac disease" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body outline with symptoms marked in the gut, the mouth, the hands and the skin">
      <Person x={84} y={150} scale={2.4} fill={at === 0 ? LINE : SOFT} />
      {at === 1 && ring(84, 154, 17)}
      {at === 2 && <>{ring(84, 88, 9)}{ring(50, 172)}{ring(118, 172)}</>}
      {at === 3 && [[54, 136], [60, 146], [114, 136], [108, 146], [58, 176], [110, 176]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="3.5" fill={GOLD} />)}
      {at === 4 && <><W x={28} y={70} size={20}>?</W><W x={142} y={70} size={20}>?</W></>}
      <Column x={176} y={30} labels={["Mild or silent", "In the gut", "Beyond the gut", "An itchy rash", "Easily mistaken"]} lit={index => index === at} width={130} gap={31} />
      <Say y={206}>{["Mild, severe, or no symptoms at all", "Diarrhoea, bloating, stomach ache", "Tiredness, mouth ulcers, tingling", "Itchy rash: around 1 in 4 get it", "Often mistaken for IBS or stress"][at]}</Say>
    </svg>} />;
}

function TestPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const xs = [56, 160, 264];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Testing" title="Keep eating gluten until the tests are done" label="Testing for coeliac disease" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three steps: eating gluten, a blood test and a biopsy">
      <path d="M92 108 H122 M116 102 L123 108 L116 114 M196 108 H226 M220 102 L227 108 L220 114" fill="none" stroke={LINE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {["Eat gluten", "Blood test", "Biopsy"].map((label, index) => {
        const on = at === index + 1, cx = xs[index];
        return <g key={label} opacity={on ? 1 : 0.45}>
          <circle cx={cx} cy="108" r="32" fill={WHITE} stroke={on ? GOLD : INK} strokeWidth={on ? 4 : 2.5} />
          {index === 0 && <Bread x={cx} y={110} />}
          {index === 1 && <Tube x={cx} y={110} />}
          {index === 2 && <><path d={`M${cx - 20} 90 C${cx - 6} 90, ${cx + 2} 102, ${cx + 4} 120`} fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" /><circle cx={cx + 4} cy="124" r="4.5" fill={GOLD} /></>}
          <W x={cx} y={160} size={10.5}>{label}</W>
        </g>;
      })}
      {at === 0 && [124, 160, 196].map((x, index) => <Person key={x} x={x} y={62} scale={0.7} fill={index === 1 ? GOLD : INK} />)}
      {at === 1 && <W x={56} y={60} size={12}>6 weeks</W>}
      {at === 2 && <W x={160} y={60} size={11}>Antibodies</W>}
      {at === 3 && <W x={264} y={60} size={11}>In hospital</W>}
      {at === 4 && <><rect x="132" y="26" width="52" height="32" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={158} y={46} size={10.5}>Kit</W><Cross x={202} y={42} color={GOLD} size={1.3} /></>}
      <Say y={204}>{["Symptoms or a close relative: test", "Eat gluten daily for at least 6 weeks", "A blood test looks for antibodies", "A biopsy: tiny samples, in hospital", "Home test kits do not diagnose it"][at]}</Say>
    </svg>} />;
}

function FamilyTree(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const nodes = [[70, 38], [130, 38], [46, 100], [154, 100], [76, 160], [124, 160]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Family" title="Who else should be tested" label="Family and related conditions" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A family tree with one person who has coeliac disease and the close relatives around them">
      <path d="M82 38 H118 M100 38 V70 M46 70 H154 M46 70 V88 M100 70 V88 M154 70 V88 M100 112 V134 M76 134 H124 M76 134 V148 M124 134 V148" fill="none" stroke={at === 0 ? INK : LINE} strokeWidth="3" strokeDasharray={at === 0 ? "5 5" : undefined} />
      {nodes.map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="12" fill={at === 0 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />)}
      <circle cx="100" cy="100" r="12" fill={GOLD} stroke={INK} strokeWidth="2.5" />
      {at === 0 && <><W x={250} y={94} size={15}>About 1 in 10</W><W x={250} y={114} size={10.5}>close relatives</W></>}
      {at === 1 && <><path d="M232 40 C272 60, 272 84, 232 104 C192 124, 192 148, 232 168 M232 40 C192 60, 192 84, 232 104 C272 124, 272 148, 232 168" fill="none" stroke={INK} strokeWidth="3" />
        <path d="M212 60 H252 M206 72 H258 M212 84 H252 M212 124 H252 M206 136 H258 M212 148 H252" stroke={SOFT} strokeWidth="2.5" />
        <W x={290} y={110} size={18}>?</W></>}
      {at === 2 && <><Tile x={186} y={62} width={124} label="Type 1 diabetes" lit /><Tile x={186} y={104} width={124} label="Thyroid disease" lit /></>}
      {at === 3 && <><Tile x={186} y={48} width={124} label="Down's syndrome" lit /><Tile x={186} y={88} width={124} label="Turner syndrome" lit /><Tile x={186} y={128} width={124} label="Autoimmune" lit={false} /></>}
      {at === 4 && <><Tube x={216} y={100} /><Person x={276} y={122} scale={1.1} /><W x={276} y={154} size={10.5}>GP</W></>}
      <Say y={204}>{["About 1 in 10 close relatives at risk", "Common genes, plus another trigger", "Type 1 diabetes: 4 to 9% also have it", "Also linked: Down's, Turner syndrome", "Tested negative? See a GP if symptoms"][at]}</Say>
    </svg>} />;
}

function GlutenFreePlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="The diet" title="Your plate, gluten-free" label="Going gluten-free" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate with gluten foods crossed out on one half and naturally gluten-free foods on the other">
      <circle cx="96" cy="100" r="74" fill={WHITE} stroke={at === 0 ? GOLD : INK} strokeWidth={at === 0 ? 5 : 3} />
      {at === 1 && <path d="M96 38 A62 62 0 0 0 96 162 Z" fill={TINT} />}
      {at === 2 && <path d="M96 38 A62 62 0 0 1 96 162 Z" fill={TINT} />}
      <circle cx="96" cy="100" r="62" fill="none" stroke={LINE} strokeWidth="2" />
      <path d="M96 38 V162" stroke={LINE} strokeWidth="2" strokeDasharray="4 4" />
      <g opacity={at === 2 ? 0.4 : 1}><Bread x={66} y={78} scale={0.9} /><Wheat x={68} y={130} scale={0.85} /></g>
      {at === 1 && <><Cross x={66} y={78} color={GOLD} size={2} /><Cross x={68} y={130} color={GOLD} size={1.6} /></>}
      <g opacity={at === 1 ? 0.4 : 1}>
        <ellipse cx="120" cy="76" rx="12" ry="9" fill={SOFT} stroke={INK} strokeWidth="2" /><ellipse cx="138" cy="94" rx="10" ry="8" fill={SOFT} stroke={INK} strokeWidth="2" />
        {[[112, 118], [120, 113], [128, 119], [116, 127], [124, 130], [132, 126]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="3.2" fill={INK} />)}
        <circle cx="142" cy="122" r="8" fill={GOLD} />
      </g>
      <Column x={190} y={38} labels={["Cut out", "Still eat", "Dietitian", "Within weeks"]} lit={index => index === at - 1} width={120} gap={38} />
      <Say y={204}>{["The diet is the treatment", "No wheat, barley or rye", "Meat, fish, rice, potatoes, fruit", "A dietitian helps you start", "Symptoms ease within weeks"][at]}</Say>
    </svg>} />;
}

function FoodLabel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Labels" title="Read it in bold, every time" label="Labels and cross-contamination" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A food label with the gluten cereals in bold, beside a gluten-free mark and a toaster">
      <rect x="20" y="22" width="156" height="152" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
      <W x={34} y={46} size={11} anchor="start">Ingredients</W>
      <path d="M34 54 H162" stroke={LINE} strokeWidth="2" />
      {at === 0 && <rect x="28" y="80" width="140" height="44" rx="5" fill={TINT} />}
      {at === 2 && <rect x="28" y="132" width="140" height="24" rx="5" fill={TINT} />}
      <W x={34} y={74} size={10.5} anchor="start" fill={SOFT}>Water, rice flour,</W>
      <W x={34} y={96} size={10.5} anchor="start">WHEAT flour,</W>
      <W x={34} y={116} size={10.5} anchor="start">BARLEY malt, salt.</W>
      <W x={34} y={148} size={10} anchor="start" fill={at === 2 ? TEXT : SOFT}>May contain: oats.</W>
      {at === 0 && <><circle cx="246" cy="88" r="28" fill={WHITE} stroke={INK} strokeWidth="4" /><path d="M266 108 L288 130" stroke={INK} strokeWidth="7" strokeLinecap="round" /><W x={246} y={92} size={10.5}>WHEAT</W></>}
      {at === 1 && <><circle cx="250" cy="92" r="42" fill={INK} /><W x={250} y={88} size={10.5} fill={WHITE}>Gluten-free</W><W x={250} y={106} size={12} fill={WHITE}>20 ppm</W></>}
      {at === 2 && <Warn x={250} y={92} />}
      {at === 3 && <><rect x="236" y="44" width="28" height="28" rx="4" fill={SOFT} stroke={INK} strokeWidth="2.5" /><path d="M212 96 H288 C288 124, 270 138, 250 138 C230 138, 212 124, 212 96 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /></>}
      {at === 4 && <><rect x="224" y="40" width="22" height="40" rx="2" fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 3" />
        <rect x="208" y="76" width="84" height="56" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M224 76 V70 H246 V76 M256 76 V70 H278 V76" fill="none" stroke={INK} strokeWidth="2.5" />
        <W x={250} y={156} size={10.5}>Toaster bag</W></>}
      <Say y={204}>{["Gluten cereals shown in bold", "Gluten-free: no more than 20 ppm", "May contain: a voluntary warning", "Check soups, sauces, stock cubes", "Toaster bags, clean cutlery, clean oil"][at]}</Say>
    </svg>} />;
}

function NutrientShelf(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const jars = ["Iron", "B12", "Folate", "Calcium", "Vit D", "Fibre"];
  const lit = (index: number) => (at === 1 && index === 0) || (at === 2 && (index === 1 || index === 2)) || (at === 3 && (index === 3 || index === 4)) || (at === 4 && index === 5);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Nutrition" title="Topping up while the gut heals" label="Iron, calcium and vitamins" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Six jars on a shelf for iron, vitamin B12, folate, calcium, vitamin D and fibre">
      {at === 0 && <Tube x={160} y={34} />}
      {jars.map((label, index) => {
        const cx = 32 + index * 51, on = lit(index), level = on ? 0.85 : 0.3;
        return <g key={label}>
          <rect x={cx - 15} y="66" width="30" height="9" rx="3" fill={SOFT} />
          <rect x={cx - 20} y="74" width="40" height="76" rx="9" fill={WHITE} stroke={INK} strokeWidth="2.5" />
          <rect x={cx - 15} y={146 - 68 * level} width="30" height={68 * level} rx="5" fill={on ? INK : LINE} />
          <W x={cx} y={172} size={10.5}>{label}</W>
        </g>;
      })}
      <path d="M8 153 H312" stroke={INK} strokeWidth="3" />
      <Say y={204}>{["Low levels: a blood test checks", "Iron: red meat, greens, pulses", "B12 and folate: tablets or injections", "700mg calcium; vitamin D in winter", "Aim for 30g of fibre a day"][at]}</Say>
    </svg>} />;
}

const Syringe = ({ x, y, rotate = -20 }: { x: number; y: number; rotate?: number }) =>
  <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
    <rect x="-22" y="-7" width="36" height="14" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="-18" y="-4" width="18" height="8" fill={SOFT} />
    <path d="M14 0 H32 M-22 0 H-30 M-30 -8 V8" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
  </g>;

function TwoYears(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const X = (month: number) => 30 + month * 260 / 36;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Follow-up" title="Your first two years of care" label="Follow-up and reviews" credit="Illustration: Rehyn. Your own team sets your checks."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from diagnosis to three years, with follow-up, a bone scan and yearly reviews">
      <path d={`M${X(0)} 124 H${X(36)}`} stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {at === 0 && <path d={`M${X(0)} 124 H${X(24)}`} stroke={INK} strokeWidth="6" strokeLinecap="round" />}
      {at === 0 && [3, 6, 9, 18].map(month => <circle key={month} cx={X(month)} cy="124" r="4.5" fill={GOLD} />)}
      {[0, 12, 24, 36].map(month => <g key={month}>
        <circle cx={X(month)} cy="124" r="8" fill={(at === 1 && month === 12) || (at === 2 && month > 0) ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={X(month)} y={150} size={10.5}>{["Start", "1 year", "2 years", "3 years"][month / 12]}</W>
      </g>)}
      {at === 0 && <><Person x={100} y={92} scale={0.8} /><Person x={134} y={92} scale={0.8} fill={SOFT} /></>}
      {at === 1 && <><path d={`M${X(12) - 7} 102 H${X(12) + 7} L${X(12)} 111 Z`} fill={GOLD} /><W x={X(12)} y={92} size={11}>DEXA scan</W></>}
      {at === 2 && <W x={246} y={98} size={11}>Every year</W>}
      {at === 3 && <><Syringe x={160} y={60} /><W x={160} y={98} size={10.5}>Vaccines</W></>}
      {at === 4 && <><Person x={160} y={92} scale={1} /><W x={192} y={60} size={18}>?</W></>}
      <Say y={204}>{["Regular follow-up for two years", "A DEXA bone scan at about one year", "A yearly review with your GP", "Flu and pneumococcal vaccines", "Symptoms carry on? Ask for a review"][at]}</Say>
    </svg>} />;
}

function EatingOut(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const xs = [42, 104, 166, 228, 284];
  const labels = ["Call", "Check", "Takeaway", "Travel", "Insure"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Eating out" title="Plan ahead, then enjoy the meal" label="Eating out and travelling" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A table with a phone, a plate marked GF, a takeaway box, a suitcase and a form">
      {xs.map((x, index) => {
        const on = at === index;
        return <g key={labels[index]} opacity={on ? 1 : 0.4}>
          {index === 0 && <Phone x={x} y={122} />}
          {index === 1 && <><circle cx={x} cy="124" r="20" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={x} y={128} size={10.5}>GF</W></>}
          {index === 2 && <><path d={`M${x - 18} 108 H${x + 18} L${x + 14} 144 H${x - 14} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d={`M${x - 18} 108 L${x - 12} 98 M${x + 18} 108 L${x + 12} 98`} stroke={INK} strokeWidth="2.5" strokeLinecap="round" /></>}
          {index === 3 && <><rect x={x - 20} y="106" width="40" height="38" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x - 8} 106 V98 H${x + 8} V106 M${x - 20} 120 H${x + 20}`} fill="none" stroke={INK} strokeWidth="2.5" /></>}
          {index === 4 && <><rect x={x - 16} y="98" width="32" height="46" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x - 9} 110 H${x + 9} M${x - 9} 120 H${x + 9} M${x - 9} 130 H${x + 3}`} stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" /></>}
          <W x={x} y={174} size={10.5}>{labels[index]}</W>
          {on && <path d={`M${x - 18} 182 H${x + 18}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />}
        </g>;
      })}
      <rect x="14" y="146" width="292" height="8" rx="4" fill={SOFT} />
      {at === 0 && <><rect x="16" y="34" width="132" height="30" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M36 63 l-6 14 l18 -14" fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><W x={82} y={53} size={10.5}>Gluten-free, please</W></>}
      {at === 1 && <W x={104} y={82} size={22}>?</W>}
      {at === 2 && <><Drop x={166} y={66} r={10} fill={GOLD} /><W x={166} y={94} size={10.5}>Same oil?</W></>}
      {at === 3 && <W x={228} y={84} size={10.5}>Book GF meals</W>}
      {at === 4 && <W x={306} y={84} size={10.5} anchor="end">Tell them</W>}
      <Say y={206}>{["Call ahead and speak to the chef", "Double check, then confirm your order", "Takeaways: check the oil and sauces", "Book GF meals; carry snacks", "Tell insurers and hospital staff"][at]}</Say>
    </svg>} />;
}

function FourNations(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const nations = [{ x: 16, y: 34, t: "England" }, { x: 104, y: 34, t: "Scotland" }, { x: 16, y: 78, t: "Wales" }, { x: 104, y: 78, t: "N. Ireland" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Prescriptions" title="What you can get depends on where you live" label="Gluten-free food on prescription" credit="Illustration: Rehyn. Your GP and local area decide what is prescribed."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The four UK nations, a prescription, a loaf and a bag of flour">
      <g opacity={at === 1 ? 1 : 0.45}>{nations.map((nation, index) => <Tile key={nation.t} x={nation.x} y={nation.y} width={82} height={34} label={nation.t} lit={at === 1 && index > 0} />)}</g>
      {at === 1 && <><W x={16} y={138} size={10} anchor="start">England: bread and flour mixes</W><W x={16} y={156} size={10} anchor="start">Elsewhere: bread, flour, pasta</W></>}
      {at === 0 && <><rect x="214" y="30" width="80" height="100" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={254} y={64} size={18}>Rx</W>
        <path d="M228 84 H280 M228 98 H280 M228 112 H264" stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" /><Loaf x={254} y={160} /></>}
      {at === 2 && <><Loaf x={226} y={88} /><Bag x={284} y={86} /><W x={226} y={124} size={10.5}>1 unit</W><W x={284} y={124} size={10.5}>2 units</W>
        <W x={226} y={142} size={10}>400g bread</W><W x={284} y={142} size={10}>500g mix</W></>}
      {at === 3 && <><W x={254} y={60} size={13}>35% more</W><W x={254} y={78} size={10}>a weekly shop</W>
        {[0, 1, 2, 3].map(index => <ellipse key={index} cx="254" cy={140 - index * 9} rx="22" ry="7" fill={index === 3 ? GOLD : SOFT} stroke={INK} strokeWidth="2" />)}</>}
      {at === 4 && <><Letter x={254} y={92} width={70} height={46} /><W x={254} y={140} size={10.5}>ICB or MP</W></>}
      <Say y={204}>{["Staple food, collected like medicine", "Different rules in each UK nation", "400g of bread or rolls is 1 unit", "Struggling? Talk to your GP", "Withdrawn? Contact your ICB or MP"][at]}</Say>
    </svg>} />;
}

function BoneSection(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const holes = [[-28, -22], [0, -32], [26, -20], [-36, 6], [-8, -4], [20, 8], [-22, 28], [6, 30], [36, -2], [30, 28]];
  const r = at === 0 ? 9 : 4.5;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Bones" title="Rebuilding bone after diagnosis" label="Bone health" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A cross-section of bone becoming denser, with a bone scan, milk, sunshine and exercise">
      <circle cx="96" cy="100" r="62" fill={WHITE} stroke={INK} strokeWidth="4" />
      <circle cx="96" cy="100" r="52" fill="none" stroke={LINE} strokeWidth="2" />
      {holes.map(([dx, dy]) => <circle key={`${dx}${dy}`} cx={96 + dx} cy={100 + dy} r={r} fill={TINT} stroke={SOFT} strokeWidth="1.5" />)}
      {at === 1 && <><path d="M190 150 V64 M180 76 L190 62 L200 76" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><W x={250} y={110} size={11}>Denser</W></>}
      {at === 2 && <><rect x="186" y="124" width="122" height="10" rx="4" fill={SOFT} /><rect x="288" y="48" width="12" height="76" fill={INK} /><path d="M262 58 H288" stroke={INK} strokeWidth="4" />
        <rect x="236" y="50" width="28" height="36" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="200" cy="114" r="8" fill={INK} /><rect x="210" y="108" width="70" height="14" rx="7" fill={INK} />
        <W x={246} y={156} size={10.5}>Quick, painless</W></>}
      {at === 3 && <><Tumbler x={214} y={98} scale={1.4} full={0.8} fill={WHITE} /><Sun x={282} y={74} /><W x={214} y={146} size={11}>700mg</W><W x={282} y={114} size={10.5}>Vitamin D</W></>}
      {at === 4 && <><Person x={224} y={150} scale={1.3} /><path d="M188 104 H200 M184 118 H198" stroke={SOFT} strokeWidth="3" strokeLinecap="round" />
        <path d="M262 112 H302" stroke={INK} strokeWidth="4" /><rect x="260" y="100" width="8" height="24" rx="2" fill={INK} /><rect x="296" y="100" width="8" height="24" rx="2" fill={INK} /></>}
      <Say y={204}>{["Poor absorption can weaken bones", "Density usually improves gluten-free", "A DEXA scan a year after starting", "700mg calcium, plus vitamin D", "Walking, dancing, lifting weights"][at]}</Say>
    </svg>} />;
}

function Friends(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const ring = [-90, -18, 54, 126, 198].map(a => [160 + 62 * Math.cos(a * Math.PI / 180), 112 + 56 * Math.sin(a * Math.PI / 180)]);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Day to day" title="It gets easier, and you are not alone" label="Living with it day to day" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path that gets smoother, a helpline, friends at a table and a circle of support">
      {at === 0 && <><path d="M26 150 C60 150, 60 108, 96 108 S130 150, 166 122 S226 72, 290 70" fill="none" stroke={INK} strokeWidth="4" strokeDasharray="8 7" strokeLinecap="round" />
        <circle cx="290" cy="70" r="8" fill={GOLD} /><W x={26} y={172} size={10.5} anchor="start">First weeks</W><W x={296} y={50} size={10.5} anchor="end">Easier</W></>}
      {at === 1 && <><rect x="136" y="40" width="48" height="92" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="142" y="50" width="36" height="64" rx="3" fill={TINT} />
        <circle cx="160" cy="124" r="3" fill={INK} /><W x={160} y={156} size={10.5}>Helpline</W></>}
      {at === 2 && <>{[100, 160, 220].map((x, index) => <Person key={x} x={x} y={126} scale={1} fill={index === 1 ? GOLD : INK} />)}
        <rect x="56" y="132" width="208" height="9" rx="4" fill={SOFT} /><path d="M80 141 V172 M240 141 V172" stroke={SOFT} strokeWidth="5" strokeLinecap="round" /></>}
      {at === 3 && <><HeartShape x={160} y={112} size={34} fill={GOLD} stroke={GOLD} />{ring.map(([x, y], index) => <Person key={index} x={x} y={y + 14} scale={0.7} fill={index === 0 ? INK : SOFT} />)}</>}
      {at === 4 && <><Person x={120} y={140} scale={1.3} /><rect x="184" y="62" width="54" height="74" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[80, 98, 116].map(y => <g key={y}><Tick x={198} y={y} size={0.8} /><path d={`M208 ${y} H228`} stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" /></g>)}
        <W x={211} y={156} size={10.5}>Review</W></>}
      <Say y={204}>{["A learning process that gets easier", "Occasional mistakes: try not to worry", "Keep eating out with friends", "Local groups and mentors can help", "Struggling? Speak to your GP or team"][at]}</Say>
    </svg>} />;
}

// ==== Diverticular disease ===================================================================================

const COLON = "M48 178 V62 C48 46, 60 38, 76 38 H128 C144 38, 156 46, 156 62 V146 C156 166, 140 176, 122 170 C106 164, 98 174, 92 186";

function Pouches(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const pouches = [[172, 104], [172, 126], [172, 148], [140, 184]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Three words, one small pouch" label="Diverticulosis, diverticular disease and diverticulitis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The large bowel with small pouches bulging from its lower left wall, and the three names">
      <Bowel d={COLON} />
      {pouches.map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r={index === 3 ? 6 : 7} fill={at === 1 && index === 2 ? GOLD : TINT} stroke={at === 0 ? GOLD : INK} strokeWidth="2.5" className={at === 0 && !still ? "lib-why-pulse" : undefined} />)}
      <g opacity={at === 2 ? 0.35 : 1}><Column x={184} y={40} labels={["Diverticulosis", "Diverticular disease", "Diverticulitis"]} lit={index => at === 1 || (at === 3 && index === 0)} width={126} gap={36} /></g>
      {at === 2 && <>{[194, 216, 238].map((x, index) => <Person key={x} x={x} y={164} scale={0.6} fill={index === 0 ? INK : LINE} />)}
        {[268, 290].map((x, index) => <Person key={x} x={x} y={164} scale={0.6} fill={index === 0 ? INK : LINE} />)}
        <W x={216} y={190} size={10}>1 in 3</W><W x={279} y={190} size={10}>1 in 2</W></>}
      {at === 3 && <Tick x={248} y={168} size={2} />}
      <Say y={206}>{["Small pouches, mostly lower left", "No symptoms, symptoms, or inflamed", "Around 1 in 3, rising to 1 in 2", "Most never have symptoms"][at]}</Say>
    </svg>} />;
}

function Tummy(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Where it hurts, and when" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tummy outline with the lower left marked, and when to get help">
      <path d="M44 28 H116 C130 28, 136 42, 136 58 V146 C136 170, 116 184, 80 184 C44 184, 24 170, 24 146 V58 C24 42, 30 28, 44 28 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      <circle cx="80" cy="100" r="3" fill={INK} />
      {(at === 1 || at === 2) && <><ellipse cx="108" cy="146" rx={at === 2 ? 24 : 20} ry={at === 2 ? 22 : 18} fill={at === 2 ? INK : SOFT} className={at === 1 && !still ? "lib-why-pulse" : undefined} />
        <W x={56} y={150} size={10}>Lower left</W></>}
      {at === 0 && <>{[182, 216, 250, 284].map((x, index) => <Person key={x} x={x} y={108} scale={0.75} fill={index === 0 ? INK : LINE} />)}<W x={234} y={142} size={10.5}>1 in 4 get symptoms</W></>}
      {at === 1 && <><path d="M170 80 C185 50, 200 50, 215 80 S245 110, 260 80 S290 50, 300 70" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" /><W x={235} y={126} size={10.5}>Comes and goes</W></>}
      {at === 2 && <><Thermo x={196} y={84} /><W x={258} y={92} size={10.5}>Constant pain</W></>}
      {at === 3 && ["IBS", "Colitis", "Others"].map((label, index) => <Tile key={label} x={180} y={44 + index * 40} width={112} label={label} lit={false} />)}
      {at === 4 && <><Tile x={174} y={58} width={130} label="999 or A&E" lit={false} /><Tile x={174} y={102} width={130} label="Urgent GP or 111" lit /></>}
      <Say y={206}>{["1 in 4 with pouches get symptoms", "Lower left pain that comes and goes", "Constant pain, a high temperature", "Can look like IBS or other conditions", "Blood or worse pain: urgent GP or 111"][at]}</Say>
    </svg>} />;
}

function WeakSpot(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const X = (age: number) => 30 + (age - 20) * 260 / 60;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Why weak spots appear" label="Why pouches form" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The bowel wall with the lining pushing out through a weak spot to form a pouch">
      <rect x="16" y="44" width="288" height="26" fill={TINT} stroke={INK} strokeWidth="3" />
      <path d="M146 70 C142 110, 178 110, 174 70" fill={WHITE} stroke={at === 0 ? GOLD : INK} strokeWidth="3" />
      <path d="M148 70 H172" stroke={WHITE} strokeWidth="4" />
      {at === 0 && <g className={still ? undefined : "lib-types-flow"}>{[100, 160, 220].map(x => <path key={x} d={`M${x} 12 V34 M${x - 6} 28 L${x} 35 L${x + 6} 28`} fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />)}</g>}
      {at === 1 && <><path d="M30 168 H290" stroke={LINE} strokeWidth="3" />
        <path d={`M30 158 L${X(40)} 156 C${X(55)} 148, ${X(70)} 134, 290 122`} fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <circle cx={X(40)} cy="156" r="6" fill={GOLD} /><W x={X(40)} y={140} size={10.5}>After 40</W>
        {[20, 40, 60, 80].map(age => <W key={age} x={X(age)} y={186} size={10}>{age}</W>)}</>}
      {at === 2 && ["Weight", "Inactivity", "Smoking"].map((label, index) => <Tile key={label} x={18 + index * 97} y={136} width={90} height={30} label={label} lit />)}
      {at === 3 && <><Plate x={120} y={152} r={24} /><W x={190} y={160} size={22}>?</W></>}
      {at === 4 && [120, 160, 200].map((x, index) => <Person key={x} x={x} y={176} scale={0.85} fill={index === 1 ? GOLD : SOFT} />)}
      <Say y={206}>{["Pressure pushes through weak spots", "Chances rise after the age of 40", "Weight, inactivity and smoking", "Fibre: the evidence is mixed", "Rarely, family conditions weaken it"][at]}</Say>
    </svg>} />;
}

function ScanCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const cards = ["GP", "Camera", "CT scan", "Results"];
  const litCard = [0, 1, 2, 2, 3][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="A camera, a scan, an answer" label="Tests and scans" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four cards: the GP, a camera test, a CT scan and the results letter">
      {cards.map((label, index) => {
        const cx = 46 + index * 76, on = litCard === index;
        return <g key={label} opacity={on ? 1 : 0.45}>
          <rect x={cx - 34} y="26" width="68" height="92" rx="10" fill={WHITE} stroke={on ? GOLD : INK} strokeWidth={on ? 4 : 2} />
          {index === 0 && <Person x={cx} y={84} scale={0.9} />}
          {index === 1 && <><path d={`M${cx - 26} 50 C${cx - 6} 50, ${cx + 4} 62, ${cx + 6} 80`} fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" /><circle cx={cx + 7} cy="85" r="5" fill={GOLD} /></>}
          {index === 2 && <><circle cx={cx} cy="64" r="21" fill="none" stroke={INK} strokeWidth="8" /><path d={`M${cx - 28} 92 H${cx + 28}`} stroke={SOFT} strokeWidth="6" strokeLinecap="round" /></>}
          {index === 3 && <Letter x={cx} y={66} width={44} height={30} />}
          <W x={cx} y={110} size={10}>{label}</W>
        </g>;
      })}
      {at === 0 && <><Tube x={136} y={158} /><rect x="168" y="146" width="26" height="30" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="166" y="140" width="30" height="8" rx="2" fill={SOFT} /></>}
      {(at === 1 || at === 2) && <><Clock x={124} y={160} r={18} hand={at === 1 ? 3.6 : 1.6} /><W x={152} y={165} size={11} anchor="start">{at === 1 ? "30 to 45 min" : "10 to 20 min"}</W></>}
      {at === 3 && <Tile x={90} y={144} width={140} label="Hospital, same day" lit />}
      {at === 4 && <Phone x={160} y={160} />}
      <Say y={206}>{["Questions, a blood test, a poo sample", "A camera tube: about 30 to 45 minutes", "A CT scan: about 10 to 20 minutes", "Complicated? Hospital the same day", "No news after 3 to 4 weeks? Call"][at]}</Say>
    </svg>} />;
}

function FibreGauge(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fibre" title="Slow and steady with fibre" label="Fibre and fluids" credit="Illustration: Rehyn. 30g a day is the UK guideline for adults."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate of fibre-rich food beside the daily target, drinks and a slow climb">
      <circle cx="84" cy="98" r="58" fill={WHITE} stroke={at === 0 ? GOLD : INK} strokeWidth={at === 0 ? 5 : 3} />
      <circle cx="84" cy="98" r="46" fill="none" stroke={LINE} strokeWidth="2" />
      <Bread x={64} y={84} scale={0.7} />
      {[[96, 72], [106, 80], [98, 88], [112, 92]].map(([cx, cy]) => <ellipse key={`${cx}${cy}`} cx={cx} cy={cy} rx="5" ry="3.5" fill={INK} />)}
      {[[70, 120], [86, 126], [102, 118]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="8" fill={SOFT} />)}
      {at === 1 && <><W x={176} y={50} size={10} anchor="start">Advised</W><rect x="176" y="56" width="120" height="22" rx="5" fill={INK} /><W x={236} y={71} size={10.5} fill={WHITE}>30g a day</W>
        <W x={176} y={96} size={10} anchor="start">Most eat</W><rect x="176" y="102" width="80" height="22" rx="5" fill={LINE} /><W x={216} y={117} size={10.5}>About 20g</W></>}
      {at === 2 && <><path d="M176 156 H206 V132 H236 V108 H266 V84 H296" fill="none" stroke={INK} strokeWidth="4" strokeLinejoin="round" /><circle cx="296" cy="84" r="6" fill={GOLD} /><W x={236} y={176} size={10.5}>A few weeks</W></>}
      {at === 3 && <>{[190, 222, 254, 286].map(x => <Tumbler key={x} x={x} y={96} full={0.75} />)}<W x={238} y={140} size={11}>2 litres</W></>}
      {at === 4 && <><path d="M196 62 L204 54 L212 62 L220 54 L228 62 L236 54 L244 62 L252 54 L260 62 L268 54 L276 62 L280 58 V140 H196 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><W x={238} y={104} size={10}>Bulk-forming</W></>}
      <Say y={204}>{["Fibre makes poo bigger and softer", "Aim for 30g a day; most eat 20g", "Increase slowly, over a few weeks", "At least 2 litres of drinks a day", "A bulk-forming laxative may help"][at]}</Say>
    </svg>} />;
}

function FlarePath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [0, 1, 2, -1, 1][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diverticulitis" title="When a pouch flares up" label="Treating diverticulitis" credit="Illustration: Rehyn. Your own doctor decides where treatment happens."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from home to the GP to hospital, with what each step may involve">
      <path d="M56 108 H264" stroke={LINE} strokeWidth="3" strokeDasharray="6 6" />
      <g opacity={lit === 0 ? 1 : 0.4}><path d="M30 92 V62 L56 40 L82 62 V92 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><rect x="50" y="72" width="12" height="20" fill={SOFT} /></g>
      <g opacity={lit === 1 ? 1 : 0.4}><Person x={160} y={90} scale={1.1} /></g>
      <g opacity={lit === 2 ? 1 : 0.4}><rect x="236" y="44" width="56" height="48" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M264 54 V80 M251 67 H277" stroke={INK} strokeWidth="5" strokeLinecap="round" /></g>
      {[56, 160, 264].map((x, index) => <g key={x}><circle cx={x} cy="108" r="6" fill={lit === index ? GOLD : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={130} size={10.5}>{["Home", "GP", "Hospital"][index]}</W></g>)}
      {at === 0 && <><Pill x={56} y={162} /><W x={84} y={166} size={10.5} anchor="start">Paracetamol</W></>}
      {at === 1 && [124, 160, 196].map(x => <Pill key={x} x={x} y={162} />)}
      {at === 2 && <><rect x="252" y="142" width="24" height="30" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M264 172 V186" stroke={INK} strokeWidth="2.5" /><W x={240} y={162} size={10.5} anchor="end">Drip</W></>}
      {at === 3 && <Plate x={160} y={162} r={22} />}
      {at === 4 && <><path d="M140 148 C160 148, 172 160, 174 176" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" /><circle cx="175" cy="181" r="4.5" fill={GOLD} /></>}
      <Say y={206}>{["Paracetamol; often treated at home", "Antibiotics? Finish the whole course", "In hospital: a drip and antibiotics", "A normal, balanced diet may be fine", "A test may follow once it settles"][at]}</Say>
    </svg>} />;
}

function PainShelf(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const packs = ["Paracetamol", "Ibuprofen", "Codeine", "Mebeverine"];
  const lit = (index: number) => (at === 0 && index === 0) || (at === 1 && (index === 1 || index === 2)) || (at === 3 && index === 3);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pain relief" title="The right painkiller matters" label="Pain relief to use and avoid" credit="Illustration: Rehyn. Check every medicine with a pharmacist or GP."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A medicine cabinet with paracetamol, ibuprofen, codeine and mebeverine">
      <rect x="16" y="22" width="288" height="124" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M16 92 H304" stroke={INK} strokeWidth="3" />
      {packs.map((label, index) => {
        const cx = 52 + index * 72, on = lit(index);
        return <g key={label} opacity={at === 2 || on ? 1 : 0.45}>
          <rect x={cx - 30} y="40" width="60" height="46" rx="5" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          <Pill x={cx} y={63} fill={on ? GOLD : INK} />
          <W x={cx} y={114} size={10}>{label}</W>
        </g>;
      })}
      {at === 0 && <><Tick x={52} y={166} size={1.3} /><Clock x={226} y={168} r={16} hand={2} /><W x={250} y={172} size={10.5} anchor="start">4 hours</W></>}
      {at === 1 && <><Cross x={124} y={166} color={GOLD} size={1.3} /><Cross x={196} y={166} color={GOLD} size={1.3} /></>}
      {at === 2 && <><Person x={136} y={182} scale={0.8} /><Person x={184} y={182} scale={0.8} fill={SOFT} /></>}
      {at === 3 && <><Tick x={268} y={166} size={1.3} /><Plate x={200} y={168} r={14} /></>}
      <Say y={206}>{["Paracetamol, 4 hours between doses", "Avoid NSAIDs and codeine", "Ask before stopping any medicine", "Mebeverine, 20 minutes before meals"][at]}</Say>
    </svg>} />;
}

function SurgeryLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const nodes = ["Decide", "Operation", "Stoma", "Recovery"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Surgery" title="Surgery is the exception" label="When surgery is needed" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from deciding about surgery to recovery, with a balance of risks and benefits">
      <path d="M40 116 H280" stroke={LINE} strokeWidth="5" strokeLinecap="round" />
      {nodes.map((label, index) => {
        const x = 40 + index * 80, on = at === index + 1;
        return <g key={label} opacity={at === 0 ? 0.45 : 1}><circle cx={x} cy="116" r="15" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={x} y={148} size={10.5}>{label}</W></g>;
      })}
      {at === 0 && <><path d="M160 34 V88 M140 90 H180" stroke={INK} strokeWidth="4" strokeLinecap="round" /><path d="M110 40 L210 54" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <path d="M92 46 Q110 64 128 46 M192 60 Q210 78 228 60" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={110} y={80} size={10.5}>Benefits</W><W x={210} y={92} size={10.5}>Risks</W></>}
      {at === 1 && <><Person x={100} y={80} scale={0.85} /><Person x={140} y={80} scale={0.85} fill={SOFT} /></>}
      {at === 2 && <><Tile x={70} y={38} width={84} label="Open" lit={false} /><Tile x={166} y={38} width={84} label="Keyhole" lit={false} /></>}
      {at === 3 && <path d="M184 34 H216 C222 34, 224 40, 224 46 V64 C224 74, 214 80, 200 80 C186 80, 176 74, 176 64 V46 C176 40, 178 34, 184 34 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />}
      {at === 4 && <><W x={236} y={44} size={10.5}>8 weeks</W>{Array.from({ length: 8 }, (_, index) => <rect key={index} x={172 + index * 16} y="56" width="12" height="18" rx="3" fill={INK} />)}</>}
      <Say y={204}>{["Usually not needed: risks outweigh it", "Sometimes, after serious complications", "Removing the damaged part of the bowel", "A stoma is often temporary", "About 8 weeks to recover"][at]}</Say>
    </svg>} />;
}

function UrgentLights(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lamps = ["999 or A&E", "Urgent GP or NHS 111", "Your GP"];
  const on = [[0], [0], [1], [0], [2]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Urgent help" title="999, 111 or your GP" label="Signs to get urgent help" credit="Illustration: Rehyn. Follow the answer for which signs go where."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three lights: 999 or A&E, an urgent GP appointment or NHS 111, and your GP">
      <rect x="30" y="20" width="60" height="160" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" />
      {lamps.map((label, index) => <g key={label}>
        <circle cx="60" cy={52 + index * 48} r="18" fill={on.includes(index) ? INK : TINT} stroke={INK} strokeWidth="2" />
        <W x={104} y={56 + index * 48} size={10.5} anchor="start" fill={on.includes(index) ? TEXT : SOFT}>{label}</W>
      </g>)}
      {at === 0 && <Warn x={272} y={60} />}
      {at === 1 && <Thermo x={272} y={64} />}
      {at === 2 && <Drop x={272} y={126} r={10} fill={SOFT} />}
      {at === 3 && <Drop x={272} y={66} r={13} fill={INK} />}
      {at === 4 && <Person x={272} y={170} scale={1} />}
      <Say y={206}>{["Severe pain and vomiting: call 999", "Sepsis: get immediate medical help", "Blood or a fever: urgent GP or 111", "Heavy bleeding: call 999 or go to A&E", "New or changed symptoms: tell your GP"][at]}</Say>
    </svg>} />;
}

function NutBowl(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const nuts = [[56, 92, -20], [78, 88, 15], [100, 90, -10], [122, 87, 25], [144, 92, -15], [68, 80, 30], [90, 77, -25], [112, 77, 10], [134, 81, -30]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Food questions" title="Nuts and seeds are fine" label="Nuts, seeds and other food questions" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bowl of nuts and seeds, beside a crossed-out old sign">
      {nuts.map(([cx, cy, a]) => <ellipse key={`${cx}${cy}`} cx={cx} cy={cy} rx="10" ry="7" transform={`rotate(${a} ${cx} ${cy})`} fill={SOFT} stroke={INK} strokeWidth="2" />)}
      {[[84, 70], [104, 66], [120, 69], [96, 64]].map(([cx, cy]) => <ellipse key={`${cx}${cy}`} cx={cx} cy={cy} rx="2.5" ry="4" fill={INK} />)}
      <path d="M30 96 H170 C170 140, 136 162, 100 162 C64 162, 30 140, 30 96 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      {at === 1 && <Tick x={100} y={36} size={2.2} />}
      {at === 0 && <><rect x="196" y="46" width="110" height="40" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={251} y={71} size={11}>Avoid nuts</W>
        <path d="M202 80 L300 52" stroke={GOLD} strokeWidth="4" strokeLinecap="round" /><W x={251} y={108} size={10.5} fill={SOFT}>Old advice</W></>}
      {at === 2 && <><Person x={250} y={118} scale={1.2} /><W x={250} y={152} size={10.5}>Only if advised</W></>}
      {at === 3 && <><W x={250} y={80} size={20}>70g</W><W x={250} y={100} size={10.5}>a day, at most</W><W x={250} y={120} size={10}>red, processed meat</W></>}
      <Say y={206}>{["No need to avoid seeds or nuts", "They do not raise the risk", "Cut fibre only if a professional says", "Limit red and processed meat to 70g"][at]}</Say>
    </svg>} />;
}

function WeekWalks(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const tiles = ["Weight", "Activity", "Smoking"];
  const lit = (index: number) => at === 0 || (at === 1 && index === 1) || (at === 2 && index === 0) || (at === 3 && index === 2);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Lifestyle" title="Small changes, lower risk" label="Activity, weight and smoking" credit="Illustration: Rehyn. 150 minutes a week is the NHS guide for adults."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Weight, activity and smoking, with a week of activity, a pair of scales and a snapped cigarette">
      {tiles.map((label, index) => <Tile key={label} x={16 + index * 99} y={30} width={90} height={30} label={label} lit={lit(index)} />)}
      {at === 1 && ["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => <g key={day}>
        <rect x={30 + index * 52} y="102" width="48" height="32" rx="6" fill={INK} /><W x={54 + index * 52} y={122} size={11} fill={WHITE}>30</W>
        <W x={54 + index * 52} y={156} size={10}>{day}</W></g>)}
      {at === 2 && <><rect x="116" y="88" width="88" height="80" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M136 116 A24 24 0 0 1 184 116" fill="none" stroke={LINE} strokeWidth="6" />
        <path d="M160 116 L170 100" stroke={INK} strokeWidth="3" strokeLinecap="round" /><circle cx="160" cy="116" r="4" fill={INK} /></>}
      {at === 3 && <><rect x="64" y="122" width="72" height="14" rx="2" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="64" y="122" width="20" height="14" rx="2" fill={SOFT} />
        <rect x="152" y="112" width="56" height="14" rx="2" fill={WHITE} stroke={INK} strokeWidth="2.5" transform="rotate(12 180 119)" />
        <path d="M140 112 L146 124 L140 136" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /><Phone x={258} y={124} /></>}
      <Say y={206}>{["Weight, activity and smoking matter", "150 minutes of activity a week", "Keep to a healthy weight", "Free stop smoking support"][at]}</Say>
    </svg>} />;
}

function TwoColumns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const helps = ["Fibre for life", "Fluids", "No smoking", "Healthy weight"];
  const not = ["Antibiotics", "Aminosalicylates", "Probiotics"];
  const helpLit = (index: number) => (at === 1 && index < 2) || (at === 2 && index >= 2);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Another flare" title="Fibre for life, not antibiotics" label="Lowering the chance of another flare" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two columns: what helps, and medicines that are not advised to prevent another flare">
      <g opacity={at === 0 || at === 4 ? 0.45 : 1}>
        <W x={85} y={40} size={11.5}>Helps</W><W x={235} y={40} size={11.5}>Not advised</W>
        {helps.map((label, index) => <Tile key={label} x={20} y={52 + index * 28} width={130} height={24} label={label} lit={helpLit(index)} />)}
        {not.map((label, index) => <Tile key={label} x={170} y={52 + index * 28} width={130} height={24} label={label} lit={at === 3} />)}
      </g>
      {at === 3 && <Cross x={235} y={150} color={GOLD} size={1.4} />}
      {at === 0 && <W x={160} y={188} size={20}>?</W>}
      {at === 4 && <Tile x={110} y={166} width={100} height={24} label="Your GP" lit />}
      <Say y={210}>{["Why flare-ups happen isn't clear", "Keep up a high-fibre diet for life", "Stop smoking, keep a healthy weight", "Antibiotics are not used to prevent it", "Worse? Contact your GP straight away"][at]}</Say>
    </svg>} />;
}

// ==== Constipation ===========================================================================================

function WeekStrip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const row = (y: number, marks: (index: number) => number, label?: string, ring = false) => <g>
    {label && <W x={14} y={y + 18} size={10} anchor="start">{label}</W>}
    {days.map((day, index) => {
      const x = 70 + index * 34, count = marks(index);
      return <g key={index}><rect x={x} y={y} width="30" height="28" rx="6" fill={WHITE} stroke={ring && count ? GOLD : INK} strokeWidth={ring && count ? 3 : 2} />
        {Array.from({ length: count }, (_, dot) => <circle key={dot} cx={x + 15 + (dot - (count - 1) / 2) * 8} cy={y + 14} r="3.5" fill={INK} />)}</g>;
    })}
  </g>;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Three a day to three a week" label="What constipation is" credit="Illustration: Rehyn. The scale is the Bristol Stool Chart."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of days with bowel movements marked, above the seven stool types">
      {at === 0 && row(40, index => (index === 1 || index === 5 ? 1 : 0), "Less often")}
      {at === 1 && <>{row(26, () => 3, "3 a day")}{row(70, index => (index % 2 === 0 && index < 6 ? 1 : 0), "3 a week")}</>}
      {at === 2 && row(40, index => (index === 2 || index === 5 ? 1 : 0), "This week", true)}
      {at === 3 && <g opacity={0.3}>{row(40, index => (index === 2 || index === 5 ? 1 : 0))}</g>}
      {at === 4 && <><rect x="40" y="40" width="240" height="50" rx="25" fill={TINT} stroke={INK} strokeWidth="3" />
        {[96, 136, 176, 216].map(cx => <circle key={cx} cx={cx} cy="65" r="9" fill={INK} />)}
        {[116, 156, 196].map(x => <Drop key={x} x={x} y={24} r={6} fill={SOFT} />)}</>}
      <g opacity={at === 3 ? 1 : 0.45}>
        <W x={14} y={157} size={10.5} anchor="start">Type</W>
        {Array.from({ length: 7 }, (_, index) => {
          const on = at === 3 && index < 2;
          return <g key={index}><rect x={58 + index * 34} y="138" width="30" height="26" rx="6" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
            <W x={73 + index * 34} y={155} size={10.5} fill={on ? WHITE : TEXT}>{index + 1}</W></g>;
        })}
      </g>
      <Say y={204}>{["Pooing less often, or finding it hard", "Three a day to three a week", "Fewer than 3 times in the last week", "Types 1 and 2: hard to pass", "Stools stay too long and dry out"][at]}</Say>
    </svg>} />;
}

function CausesWeb(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const tiles = [{ x: 14, y: 30, t: "Fibre" }, { x: 14, y: 86, t: "Fluids" }, { x: 14, y: 142, t: "Moving" }, { x: 210, y: 30, t: "Routine" }, { x: 210, y: 86, t: "Mood" }, { x: 210, y: 142, t: "Medicines" }];
  const lit = (index: number) => (at === 1 && index < 3) || (at === 2 && index === 3) || (at === 3 && index > 3);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="Fibre, fluid, routine and the brain" label="Causes of constipation" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The bowel in the middle, with food, fluids, moving, routine, mood and medicines around it">
      <g opacity={at === 4 ? 0.35 : 1}>
        {tiles.map((tile, index) => <path key={tile.t} d={`M${tile.x < 100 ? 110 : 210} ${tile.y + 14} L160 108`} stroke={lit(index) ? INK : LINE} strokeWidth="3" strokeDasharray={at === 0 ? "6 6" : undefined} className={at === 0 && !still ? "lib-types-flow" : undefined} />)}
        {tiles.map((tile, index) => <Tile key={tile.t} x={tile.x} y={tile.y} width={96} label={tile.t} lit={lit(index)} />)}
      </g>
      {at !== 4 && <Bowel d="M140 140 V88 C140 78, 146 72, 156 72 H164 C174 72, 180 78, 180 88 V132 C180 140, 172 144, 166 140 C160 136, 156 142, 152 148" glow={at === 0} />}
      {at === 4 && [136, 160, 184].map((x, index) => <Person key={x} x={x} y={126} scale={0.8} fill={index < 2 ? INK : SOFT} />)}
      <Say y={206}>{["Often no single, obvious reason", "Too little fibre, fluid or movement", "Ignoring the urge, a changed routine", "Stress, mood and medicines play a part", "Twice as many women as men"][at]}</Say>
    </svg>} />;
}

function Armchair(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Older age" title="Easy to miss, easy to help" label="Constipation in older age" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An older person in an armchair, with medicines, food and drink, and help nearby">
      <rect x="28" y="58" width="26" height="108" rx="9" fill={SOFT} />
      <Person x={86} y={128} scale={1.3} />
      <rect x="28" y="126" width="112" height="28" rx="9" fill={SOFT} />
      <rect x="114" y="104" width="28" height="50" rx="9" fill={LINE} stroke={SOFT} strokeWidth="2" />
      <path d="M36 154 V172 M132 154 V172" stroke={SOFT} strokeWidth="5" strokeLinecap="round" />
      {at === 0 && <><W x={240} y={96} size={18}>Over 65</W><W x={240} y={118} size={10.5}>more common</W></>}
      {at === 1 && <><W x={86} y={64} size={20}>?</W><Person x={248} y={150} scale={1.4} fill={SOFT} /></>}
      {at === 2 && <>{Array.from({ length: 7 }, (_, index) => <rect key={index} x={178 + index * 18} y="52" width="14" height="16" rx="3" fill={index % 3 === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" />)}
        <W x={240} y={92} size={10.5}>Medicines</W><path d="M180 150 H300" stroke={INK} strokeWidth="3" strokeDasharray="6 6" /><W x={240} y={172} size={10.5}>Light activity</W></>}
      {at === 3 && <><Plate x={210} y={100} r={24} /><Tumbler x={272} y={100} scale={1.2} full={0.75} /></>}
      {at === 4 && <><path d="M196 60 V160 M196 104 H244" stroke={INK} strokeWidth="6" strokeLinecap="round" /><Person x={278} y={152} scale={1.1} fill={SOFT} /></>}
      <Say y={204}>{["More common over 65", "Watch for changes, such as confusion", "Some medicines; move a little daily", "Enough fibre and enough to drink", "Help to reach the toilet, and privacy"][at]}</Say>
    </svg>} />;
}

function ConLight(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lamps = ["999 or A&E", "Urgent GP or NHS 111", "See a GP"];
  const on = [[2], [2], [0, 1], [], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Checks" title="Know which changes need a GP" label="Changes that need checking" credit="Illustration: Rehyn. Follow the answer for which signs go where."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three lights: 999 or A&E, an urgent GP appointment or NHS 111, and seeing a GP">
      <rect x="22" y="22" width="56" height="156" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" />
      {lamps.map((label, index) => <g key={label}>
        <circle cx="50" cy={52 + index * 48} r="17" fill={on.includes(index) ? INK : TINT} stroke={INK} strokeWidth="2" />
        <W x={90} y={56 + index * 48} size={10.5} anchor="start" fill={on.includes(index) ? TEXT : SOFT}>{label}</W>
      </g>)}
      {at === 2 && <><W x={90} y={72} size={9.5} anchor="start">Non-stop or heavy bleeding</W><W x={90} y={120} size={9.5} anchor="start">Black or dark red poo</W></>}
      {at === 0 && <W x={268} y={157} size={14}>14 days</W>}
      {at === 1 && <W x={268} y={157} size={12}>Over 40?</W>}
      {at === 3 && <><Tube x={270} y={96} /><W x={270} y={140} size={11}>FIT</W></>}
      {at === 4 && <><Person x={250} y={118} scale={0.9} /><Person x={288} y={118} scale={0.9} fill={SOFT} /></>}
      <Say y={206}>{["Not getting better? See a GP", "A sudden change? Tell your GP", "Heavy bleeding: call 999 or go to A&E", "A FIT kit checks for bleeding", "Doctors are used to talking about it"][at]}</Say>
    </svg>} />;
}

function Sponge(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const big = at === 0;
  const top = big ? 78 : 92, height = big ? 66 : 50;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fibre and fluids" title="A sponge that needs water" label="Fibre, fluids and movement" credit="Illustration: Rehyn. 30g a day is the UK guideline for adults."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A sponge soaking up water, beside the daily fibre target, drinks and a walk">
      <rect x="30" y={top} width="124" height={height} rx="12" fill={big ? SOFT : WHITE} stroke={INK} strokeWidth="3" />
      {[[52, 0.3], [80, 0.6], [110, 0.35], [134, 0.65], [64, 0.75], [98, 0.2]].map(([cx, f]) => <ellipse key={`${cx}${f}`} cx={cx} cy={top + height * f} rx="6" ry="4" fill={TINT} stroke={INK} strokeWidth="1.5" />)}
      {big && <g className={still ? undefined : "lib-bulge"}>{[60, 94, 128].map((x, index) => <Drop key={x} x={x} y={44 + (index % 2) * 10} r={7} fill={SOFT} />)}</g>}
      {at === 0 && <><Tumbler x={236} y={104} scale={1.6} full={0.7} /><path d="M206 112 H170 M178 106 L170 112 L178 118" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></>}
      {at === 1 && <><W x={217} y={42} size={10}>Aim</W><rect x="200" y="50" width="34" height="100" rx="5" fill={INK} /><W x={275} y={76} size={10}>Average</W><rect x="258" y="84" width="34" height="66" rx="5" fill={LINE} />
        <W x={217} y={168} size={11}>30g</W><W x={275} y={168} size={11}>20g</W></>}
      {at === 2 && <><path d="M184 150 C220 148, 262 120, 300 70" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />{[[184, 150], [226, 142], [264, 116], [300, 70]].map(([cx, cy]) => <circle key={cx} cx={cx} cy={cy} r="5" fill={GOLD} />)}<W x={240} y={172} size={10.5}>Slowly</W></>}
      {at === 3 && <>{Array.from({ length: 8 }, (_, index) => <Tumbler key={index} x={200 + (index % 4) * 30} y={index < 4 ? 66 : 116} scale={0.8} full={0.75} fill={index < 6 ? INK : SOFT} />)}<W x={245} y={162} size={10.5}>6 to 8 a day</W></>}
      {at === 4 && <><Person x={240} y={150} scale={1.4} /><path d="M196 110 H210 M192 126 H208" stroke={SOFT} strokeWidth="3" strokeLinecap="round" /></>}
      <Say y={204}>{["Fibre soaks up water, like a sponge", "30g a day; most eat about 20g", "Add fibre slowly to avoid bloating", "6 to 8 drinks; pale yellow pee", "Move more: 150 minutes a week"][at]}</Say>
    </svg>} />;
}

function Footstool(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const up = at === 2;
  const hip = [114, 112], shoulder = up ? [128, 66] : [112, 64], head = up ? [136, 48] : [112, 46], knee = up ? [158, 96] : [160, 114], foot = up ? [160, 142] : [164, 168];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Routine" title="Feet up, knees high, no rush" label="Toilet routine and position" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A simple side view of someone seated on a toilet, with their feet on a low stool">
      <path d="M20 172 H204" stroke={LINE} strokeWidth="3" />
      <rect x="50" y="70" width="22" height="52" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M62 118 H140 V126 C140 142, 126 150, 110 150 L114 170 H82 L86 150 C74 146, 62 138, 62 126 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      {up && <rect x="136" y="146" width="54" height="24" rx="4" fill={INK} />}
      <g fill="none" stroke={SOFT} strokeLinecap="round" strokeLinejoin="round">
        <path d={`M${hip[0]} ${hip[1]} L${shoulder[0]} ${shoulder[1]}`} strokeWidth="13" />
        <path d={`M${hip[0]} ${hip[1]} L${knee[0]} ${knee[1]} L${foot[0]} ${foot[1]} H${foot[0] + 12}`} strokeWidth="11" />
        <path d={`M${shoulder[0]} ${shoulder[1] + 6} L${knee[0] - 8} ${knee[1] - 6}`} strokeWidth="8" />
      </g>
      <circle cx={head[0]} cy={head[1]} r="11" fill={SOFT} />
      {at === 0 && <><Clock x={258} y={78} r={26} hand={1} /><W x={258} y={128} size={10.5}>Same time</W></>}
      {at === 1 && <Tile x={210} y={64} width={96} label="Don't delay" lit />}
      {at === 2 && <><path d="M100 112 H200" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" /><W x={258} y={70} size={10.5}>Knees above hips</W></>}
      {at === 3 && <><Tile x={210} y={56} width={96} label="No straining" lit /><Tile x={210} y={96} width={96} label="No lingering" lit /></>}
      {at === 4 && <><rect x="232" y="40" width="52" height="100" rx="3" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="274" cy="92" r="3.5" fill={INK} /><rect x="270" y="100" width="8" height="10" rx="2" fill={GOLD} /><W x={258} y={160} size={10.5}>Privacy</W></>}
      <Say y={204}>{["A regular time, with plenty of time", "Go when you feel the urge", "Feet on a stool, knees above hips", "Don't push hard or linger", "Time, privacy, and support if needed"][at]}</Say>
    </svg>} />;
}

function FourLanes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lanes = [{ t: "Bulk-forming", d: "Up to 3 days" }, { t: "Osmotic", d: "2 to 3 days" }, { t: "Softener", d: "12 hours to 3 days" }, { t: "Stimulant", d: "6 to 12 hours" }];
  const lit = (index: number) => at === 1 || (at === 2 && index === 0) || (at === 3 && index < 2);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Laxatives" title="Four types, four speeds" label="Laxatives: types and how to use them" credit="Illustration: Rehyn. Ask a pharmacist which laxative suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four lanes for the four types of laxative, with how long each takes to work">
      {lanes.map((lane, index) => {
        const y = 26 + index * 32, on = lit(index);
        return <g key={lane.t} opacity={at === 0 || at === 4 || on ? 1 : 0.4}>
          <W x={14} y={y + 17} size={10.5} anchor="start">{lane.t}</W>
          <rect x="100" y={y} width="204" height="26" rx="13" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <W x={292} y={y + 17} size={10} anchor="end" fill={on ? WHITE : TEXT}>{lane.d}</W>
        </g>;
      })}
      {at === 2 && <rect x="8" y="20" width="90" height="38" rx="10" fill="none" stroke={GOLD} strokeWidth="3" />}
      {at === 0 && <><Person x={110} y={184} scale={0.75} /><W x={132} y={178} size={10.5} anchor="start">Pharmacist</W></>}
      {at === 3 && <><Tumbler x={118} y={172} scale={0.9} full={0.75} />{Array.from({ length: 7 }, (_, index) => <rect key={index} x={150 + index * 18} y="164" width="14" height="14" rx="3" fill={INK} />)}</>}
      {at === 4 && <Tile x={70} y={160} width={180} label="Does not cause weight loss" lit={false} />}
      <Say y={206}>{["Lifestyle first, then a pharmacist", "Four main types, four speeds", "Try a bulk-forming laxative first", "Drink plenty; bought ones, 7 days max", "Side effects are usually mild"][at]}</Say>
    </svg>} />;
}

function Cabinet(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const packs = ["Codeine", "Morphine", "Iron", "Antacids", "Calcium", "Diuretics"];
  const lit = (index: number) => at === 0 || ((at === 1 || at === 4) && index < 2) || (at === 2 && index === 2);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="When a medicine slows the bowel" label="Medicines that can cause it" credit="Illustration: Rehyn. Only stop a medicine if your GP says so."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A medicine cabinet with medicines that can cause constipation, and a GP">
      <rect x="14" y="22" width="222" height="158" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M14 101 H236" stroke={INK} strokeWidth="3" />
      {packs.map((label, index) => <g key={label} opacity={at === 3 || lit(index) ? 1 : 0.4}><Tile x={24 + (index % 3) * 70} y={index < 3 ? 48 : 126} width={64} height={38} label={label} lit={lit(index)} size={10} /></g>)}
      {at === 2 && <><Tumbler x={277} y={84} scale={1.2} full={0.8} /><W x={277} y={122} size={10.5}>Water</W></>}
      {at === 3 && <><Person x={277} y={124} scale={1.2} /><W x={277} y={160} size={11}>GP</W></>}
      {at === 4 && <><Tile x={244} y={56} width={66} height={30} label="Osmotic" lit size={10} /><Tile x={244} y={94} width={66} height={30} label="Stimulant" lit size={10} />
        <g opacity={0.5}><Tile x={244} y={132} width={66} height={30} label="Bulk" lit={false} size={10} /></g><Cross x={277} y={176} color={GOLD} /></>}
      <Say y={206}>{["A common side effect of medicines", "Codeine and morphine often cause it", "Iron: more fibre, water and walking", "Speak to the GP before stopping", "Opioids: osmotic or stimulant types"][at]}</Say>
    </svg>} />;
}

function ThreeMonths(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const full = at === 0 || at === 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Long-term" title="When it lasts for months" label="Long-term constipation" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three months of calendars, the types of long-term constipation, and further options">
      {[16, 114, 212].map((x, month) => <g key={x} opacity={full ? 1 : 0.5}>
        <rect x={x} y="22" width="92" height="70" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x={x} y="22" width="92" height="16" rx="6" fill={full ? INK : SOFT} />
        <W x={x + 46} y={34} size={9.5} fill={WHITE}>{`Month ${month + 1}`}</W>
        {Array.from({ length: 28 }, (_, index) => <rect key={index} x={x + 4 + (index % 7) * 12.4} y={44 + Math.floor(index / 7) * 11} width="9" height="8" rx="1.5" fill={full ? INK : LINE} />)}
      </g>)}
      {at === 0 && <path d="M16 100 V106 H304 V100" fill="none" stroke={GOLD} strokeWidth="3" />}
      {at === 1 && ["Slow transit", "Normal transit", "Pelvic floor"].map((label, index) => <Tile key={label} x={12 + index * 102} y={130} width={94} height={30} label={label} lit size={10} />)}
      {at === 2 && <><path d="M30 170 C90 168, 150 150, 290 130" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" /><circle cx="290" cy="130" r="6" fill={GOLD} /></>}
      {at === 3 && [{ x: 20, y: 160, t: "Medicines" }, { x: 117, y: 136, t: "Biofeedback" }, { x: 214, y: 112, t: "Irrigation" }].map(step => <Tile key={step.t} x={step.x} y={step.y} width={86} height={26} label={step.t} lit size={10} />)}
      {at === 4 && <><Person x={140} y={168} scale={1} /><Person x={180} y={168} scale={1} fill={SOFT} /></>}
      <Say y={206}>{["Chronic: at least 3 months", "Slow, normal transit, or pelvic floor", "Treatment may take several months", "Newer medicines, biofeedback, more", "Report any sudden change"][at]}</Say>
    </svg>} />;
}

function Plug(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const width = [90, 90, 90, 50, 0][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Impaction" title="The leak that is not diarrhoea" label="Faecal impaction" credit="Illustration: Rehyn. A diagram of the idea, not a body."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A simple tube with a build-up blocking it, and how it is treated">
      <rect x="30" y="56" width="240" height="56" rx="28" fill={WHITE} stroke={INK} strokeWidth="3" />
      {width > 0 && <rect x={120} y="68" width={width} height="32" rx="16" fill={INK} />}
      {at === 0 && <W x={165} y={44} size={10.5}>Build-up</W>}
      {at === 1 && <g className={still ? undefined : "lib-types-flow"}><path d="M50 63 H250 M50 105 H250" stroke={GOLD} strokeWidth="3" strokeDasharray="8 7" strokeLinecap="round" /></g>}
      {at === 2 && <><Person x={100} y={176} scale={1} /><Tile x={150} y={144} width={130} label="GP or hospital" lit /></>}
      {at === 3 && ["Laxatives", "Suppository", "Mini enema"].map((label, index) => <Tile key={label} x={12 + index * 102} y={140} width={94} height={30} label={label} lit size={10} />)}
      {at === 4 && ["Fibre", "Fluids", "Activity"].map((label, index) => <Tile key={label} x={12 + index * 102} y={140} width={94} height={30} label={label} lit size={10} />)}
      <Say y={206}>{["A build-up in the rectum", "Overflow leaks can look like diarrhoea", "Needs prompt treatment by a GP", "Laxatives, suppositories, a mini enema", "Fibre, fluids and moving help after"][at]}</Say>
    </svg>} />;
}

function Suitcase(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Travel" title="Packing for a regular gut" label="Travel and routine changes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An open suitcase with a water bottle, medicines and snacks, beside a clock, a map pin and a calendar">
      <rect x="30" y="40" width="170" height="60" rx="8" fill={LINE} stroke={INK} strokeWidth="3" />
      <rect x="40" y="50" width="150" height="40" rx="5" fill="none" stroke={SOFT} strokeWidth="2" />
      <rect x="30" y="104" width="170" height="70" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" />
      <g opacity={at === 2 ? 1 : 0.45}><rect x="54" y="108" width="12" height="8" rx="2" fill={INK} /><rect x="50" y="114" width="20" height="50" rx="7" fill={at === 2 ? SOFT : WHITE} stroke={INK} strokeWidth="2.5" /></g>
      <g opacity={at === 1 ? 1 : 0.45}><rect x="86" y="124" width="40" height="32" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M106 132 V148 M98 140 H114" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <rect x="140" y="134" width="46" height="20" rx="4" fill={at === 1 ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" /></g>
      {at === 0 && <><Clock x={262} y={70} r={22} hand={4} /><Plate x={262} y={140} r={24} /></>}
      {at === 2 && <Sun x={262} y={80} r={14} />}
      {at === 3 && <><path d="M262 50 C246 50, 238 62, 238 74 C238 92, 262 114, 262 114 C262 114, 286 92, 286 74 C286 62, 278 50, 262 50 Z" fill={INK} /><W x={262} y={80} size={11} fill={WHITE}>WC</W>
        <rect x="244" y="132" width="36" height="32" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={262} y={184} size={10}>Aisle</W></>}
      {at === 4 && <>{Array.from({ length: 21 }, (_, index) => <rect key={index} x={220 + (index % 7) * 12} y={44 + Math.floor(index / 7) * 14} width="9" height="9" rx="2" fill={index >= 14 ? GOLD : INK} />)}<Person x={262} y={152} scale={1} /></>}
      <Say y={204}>{["New food, time zones, routines", "Pack medicines and food that suits you", "Refill a water bottle; drink more", "Look up toilets; pick an aisle seat", "Over 2 to 3 weeks? See your doctor"][at]}</Say>
    </svg>} />;
}

function BedPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="After illness" title="Back on your feet, back to normal" label="After illness or surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bed, then a trail of footsteps leading away from it, with medicines and drinks along the way">
      {at === 0 && <rect x="10" y="84" width="130" height="78" rx="10" fill="none" stroke={GOLD} strokeWidth="3" />}
      <g opacity={at === 0 ? 1 : 0.5}>
        <rect x="18" y="92" width="10" height="64" rx="3" fill={INK} />
        <rect x="18" y="124" width="114" height="18" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M30 142 V156 M124 142 V156" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <circle cx="46" cy="112" r="9" fill={INK} /><rect x="58" y="108" width="68" height="16" rx="8" fill={SOFT} />
      </g>
      {[150, 176, 202, 228, 254].map((x, index) => <ellipse key={x} cx={x} cy={index % 2 ? 172 : 162} rx="6" ry="3.5" fill={at === 3 ? INK : LINE} />)}
      {at === 1 && <><Pill x={196} y={62} /><Pill x={244} y={76} rotate={20} /></>}
      {at === 2 && <><path d="M188 40 H226 L222 104 H192 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><path d="M190 64 H224 L222 104 H192 Z" fill={SOFT} /><Tumbler x={266} y={86} scale={1.2} full={0.7} /></>}
      {at === 3 && <Person x={286} y={150} scale={1.1} />}
      {at === 4 && <><Person x={250} y={100} scale={1.2} /><W x={250} y={136} size={11}>GP</W></>}
      <Say y={204}>{["Surgery and less moving add to it", "Codeine and morphine can cause it", "Drink more while you recover", "A daily walk can help", "Not better, or tummy pain? See a GP"][at]}</Say>
    </svg>} />;
}

export function BowelPieceView({ piece, ...props }: { piece: BowelPiece } & PieceProps) {
  switch (piece) {
    case "coe-villi": return <Villi {...props} />;
    case "coe-body-map": return <BodyMap {...props} />;
    case "coe-test-path": return <TestPath {...props} />;
    case "coe-family-tree": return <FamilyTree {...props} />;
    case "coe-plate": return <GlutenFreePlate {...props} />;
    case "coe-label": return <FoodLabel {...props} />;
    case "coe-shelf": return <NutrientShelf {...props} />;
    case "coe-two-years": return <TwoYears {...props} />;
    case "coe-table": return <EatingOut {...props} />;
    case "coe-four-nations": return <FourNations {...props} />;
    case "coe-bone": return <BoneSection {...props} />;
    case "coe-friends": return <Friends {...props} />;
    case "div-pouches": return <Pouches {...props} />;
    case "div-tummy": return <Tummy {...props} />;
    case "div-weak-spot": return <WeakSpot {...props} />;
    case "div-scan-cards": return <ScanCards {...props} />;
    case "div-fibre-gauge": return <FibreGauge {...props} />;
    case "div-flare-path": return <FlarePath {...props} />;
    case "div-pain-shelf": return <PainShelf {...props} />;
    case "div-surgery-line": return <SurgeryLine {...props} />;
    case "div-three-lights": return <UrgentLights {...props} />;
    case "div-nut-bowl": return <NutBowl {...props} />;
    case "div-week-walks": return <WeekWalks {...props} />;
    case "div-two-columns": return <TwoColumns {...props} />;
    case "con-week-strip": return <WeekStrip {...props} />;
    case "con-causes-web": return <CausesWeb {...props} />;
    case "con-armchair": return <Armchair {...props} />;
    case "con-light": return <ConLight {...props} />;
    case "con-sponge": return <Sponge {...props} />;
    case "con-footstool": return <Footstool {...props} />;
    case "con-four-lanes": return <FourLanes {...props} />;
    case "con-cabinet": return <Cabinet {...props} />;
    case "con-three-months": return <ThreeMonths {...props} />;
    case "con-plug": return <Plug {...props} />;
    case "con-suitcase": return <Suitcase {...props} />;
    case "con-bed-path": return <BedPath {...props} />;
  }
}
