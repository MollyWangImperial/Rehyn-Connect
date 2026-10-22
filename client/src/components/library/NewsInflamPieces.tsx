import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { INFLAM_PIECES, type InflamPiece } from "@/content/inflam-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Chips, Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Knee } from "./NewsBonesPieces";
import { Bubble } from "./NewsMindPieces";

// The Psoriatic arthritis and Axial spondyloarthritis pages' own pieces (content/inflam-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isInflamPiece = (piece: NewsPiece): piece is InflamPiece => (INFLAM_PIECES as readonly string[]).includes(piece);

// ==== Shared shapes ===========================================================================================

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 206, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Moon = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={INK} />;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 11} y={y - 18} width="22" height="36" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 11} r="2.2" fill={lit ? WHITE : INK} /></g>;
const Cloud = ({ x, y, s }: { x: number; y: number; s: number }) =>
  <g fill={SOFT}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
/** A blood test tube, centred on x, top at y. */
const Tube = ({ x, y, fill = INK }: { x: number; y: number; fill?: string }) =>
  <g><rect x={x - 7} y={y} width="14" height="38" rx="7" fill="none" stroke={fill} strokeWidth="2.5" /><rect x={x - 4.5} y={y + 17} width="9" height="18" rx="4.5" fill={fill} /></g>;
/** A joint side on, centred on (x, y), with its lining; `inflamed` thickens and warms the lining. */
const Joint = ({ x, y, inflamed = false, scale = 1 }: { x: number; y: number; inflamed?: boolean; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M-20 -80 V-14 C-20 -4, -10 0, 0 0 C10 0, 20 -4, 20 -14 V-80 M-22 80 V16 C-22 8, -10 6, 0 6 C10 6, 22 8, 22 16 V80" fill={WHITE} stroke={INK} strokeWidth="3" />
    <ellipse cx="0" cy="3" rx={inflamed ? 46 : 34} ry={inflamed ? 32 : 22} fill="none" stroke={inflamed ? GOLD : SOFT} strokeWidth={inflamed ? 7 : 3} />
  </g>;
const FINGERS = [{ x: -24, h: 46 }, { x: -8, h: 56 }, { x: 8, h: 52 }, { x: 24, h: 42 }];
/** A hand, back on, fingertips up, palm top at (x, y): `swollen` widens one finger, `pits` dents the nails, `dots` mark finger joints. */
const Hand = ({ x, y, scale = 1, swollen = -1, nails = false, pits = false, dots = [] as number[] }: { x: number; y: number; scale?: number; swollen?: number; nails?: boolean; pits?: boolean; dots?: number[] }) => {
  const order = [0, 1, 2, 3].sort((a, b) => (a === swollen ? 1 : 0) - (b === swollen ? 1 : 0));
  return <g transform={`translate(${x} ${y}) scale(${scale})`} strokeLinejoin="round">
    <path d="M-30 36 C-44 26, -54 12, -52 2 C-50 -6, -40 -6, -36 2 L-28 16" fill={WHITE} stroke={INK} strokeWidth="3" />
    {order.map(index => { const finger = FINGERS[index]; const width = index === swollen ? 22 : 14; return <rect key={index} x={finger.x - width / 2} y={-finger.h} width={width} height={finger.h + 10} rx={width / 2} fill={index === swollen ? TINT : WHITE} stroke={index === swollen ? GOLD : INK} strokeWidth="3" />; })}
    <rect x="-32" y="0" width="64" height="62" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" />
    {nails && FINGERS.map((finger, index) => <g key={index}><rect x={finger.x - 4.5} y={-finger.h + 3} width="9" height="10" rx="3" fill={pits ? TINT : WHITE} stroke={pits ? INK : SOFT} strokeWidth="1.5" />
      {pits && <><circle cx={finger.x - 1.5} cy={-finger.h + 7} r="1.3" fill={INK} /><circle cx={finger.x + 2} cy={-finger.h + 10} r="1.3" fill={INK} /></>}</g>)}
    {dots.map(index => <circle key={index} cx={FINGERS[index].x} cy={-FINGERS[index].h * 0.45} r="4.5" fill={GOLD} />)}
  </g>;
};
/** A foot side on, heel on the left, centred on (x, y). */
const Foot = ({ x, y }: { x: number; y: number }) =>
  <path transform={`translate(${x} ${y})`} d="M-36 20 C-46 20, -46 -4, -36 -12 L-30 -34 H-14 L-8 -6 C8 0, 34 4, 42 12 C46 18, 42 22, 36 22 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />;
/** An eye, centred on (x, y); `red` shows it inflamed. */
const Eye = ({ x, y, s = 1, red = false }: { x: number; y: number; s?: number; red?: boolean }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M-34 0 C-18 -22, 18 -22, 34 0 C18 22, -18 22, -34 0 Z" fill={WHITE} stroke={INK} strokeWidth={3 / s} />
    {red && <path d="M-27 -2 l8 3 M-25 6 l9 -2 M27 -2 l-8 3 M25 6 l-9 -2" stroke={GOLD} strokeWidth={2.2 / s} strokeLinecap="round" />}
    <circle r="11" fill={SOFT} stroke={red ? GOLD : INK} strokeWidth={(red ? 3.5 : 2) / s} />
    <circle r="4.5" fill={INK} />
  </g>;
/** A column of vertebrae, centred on x, top at y; `glow` marks where tendons and ligaments attach. */
const Column = ({ x, y, count = 6, glow = false }: { x: number; y: number; count?: number; glow?: boolean }) =>
  <g transform={`translate(${x} ${y})`}>{Array.from({ length: count }, (_, index) => <g key={index}>
    <rect x="-22" y={index * 20} width="44" height="14" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    {index < count - 1 && <ellipse cx="0" cy={index * 20 + 17} rx="16" ry="2.5" fill={SOFT} />}
    {glow && <><circle cx="-27" cy={index * 20 + 7} r="3.5" fill={GOLD} /><circle cx="27" cy={index * 20 + 7} r="3.5" fill={GOLD} /></>}
  </g>)}</g>;

// ==== Psoriatic arthritis =====================================================================================

function SkinJoint(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["About 1 in 4 with psoriasis get it", "The joint lining becomes inflamed", "Any age; men and women equally", "Often uneven: not the same both sides", "Early treatment gives the best chance"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When skin and joints share a cause" label="Psoriatic arthritis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Psoriasis on the skin, linked to a joint whose lining can become inflamed">
      {at === 2 ? <><Person x={112} y={140} scale={1.6} /><Person x={208} y={140} scale={1.6} fill={SOFT} /><W x={160} y={120} size={22}>=</W></>
        : at === 3 ? <><Hand x={95} y={92} dots={[0, 1, 2]} /><Hand x={235} y={92} dots={[3]} /><W x={95} y={178} size={10.5}>One hand</W><W x={235} y={178} size={10.5}>The other</W></>
        : <>
          <rect x="24" y="40" width="104" height="110" rx="16" fill={TINT} stroke={INK} strokeWidth="2.5" />
          {[[52, 70, 14], [96, 84, 18], [62, 120, 12]].map(([cx, cy, r]) => <ellipse key={cx} cx={cx} cy={cy} rx={r} ry={r * 0.7} fill={SOFT} stroke={INK} strokeWidth="1.5" />)}
          <path d="M132 95 H188" stroke={GOLD} strokeWidth="3" strokeDasharray="5 6" />
          <Joint x={232} y={95} scale={0.8} inflamed={at === 1} />
          {at === 4 && <Clock x={160} y={52} r={16} hand={1.2} />}
          <W x={76} y={172} size={10.5}>Skin</W><W x={232} y={180} size={10.5}>Joint</W>
        </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SausageFinger(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Stiffness after rest, over 30 minutes", "A whole finger or toe can swell", "Nail changes in around 4 in 5", "Pains can move; keep a note", "Red, painful eye: get urgent help"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Fingers, heels, nails and more" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hand with one swollen finger and pitted nails, a heel and an eye">
      <Hand x={84} y={106} scale={1.15} swollen={at === 1 ? 1 : -1} nails pits={at === 2} dots={at === 0 ? [0, 1, 2, 3] : at === 3 ? [0, 3] : []} />
      {at === 3 && <path d="M56 36 C70 18, 96 18, 112 38 M104 34 L112 38 L113 29" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      <g opacity={at === 1 ? 1 : 0.35}><Foot x={240} y={60} /><circle cx="202" cy="70" r="6" fill={GOLD} opacity={at === 1 ? 1 : 0} /><W x={240} y={104} size={10.5}>Heel</W></g>
      <g opacity={at === 4 ? 1 : 0.35}><Eye x={240} y={148} red={at === 4} /><W x={240} y={182} size={10.5}>Eyes</W></g>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ClueTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tiles = ["GP", "Clues", "Blood tests", "Scans", "Your team"];
  const below = [["Rheumatologist"], ["Psoriasis", "Nails", "Swollen finger"], ["RF", "Anti-CCP", "ESR, CRP"], ["X-ray", "Ultrasound", "MRI"], ["Blood tests", "X-rays", "Ultrasound, MRI"]][at];
  const caps = ["A GP refers you to a rheumatologist", "No single test; many clues", "RF and anti-CCP: often negative", "X-ray, ultrasound and MRI help", "Then a team and regular checks"];
  const icon = (index: number, cx: number, c: string) => [
    <Person key="gp" x={cx} y={88} scale={0.8} fill={c} />,
    <g key="clue" stroke={c} strokeWidth="3" fill="none" strokeLinecap="round"><circle cx={cx - 4} cy={64} r="12" /><path d={`M${cx + 5} ${73} L${cx + 14} ${84}`} /></g>,
    <Tube key="tube" x={cx} y={50} fill={c} />,
    <g key="scan" stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round"><rect x={cx - 16} y="48" width="32" height="42" rx="4" /><path d={`M${cx - 6} 56 V82 M${cx + 6} 56 V82`} strokeWidth="3.5" /></g>,
    <g key="team">{[-16, 0, 16].map(dx => <Person key={dx} x={cx + dx} y={90} scale={0.5} fill={c} />)}</g>,
  ][index];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Diagnosis" title="Piecing the clues together" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five steps to a diagnosis: the GP, the clues, blood tests, scans and the team">
      {tiles.map((tile, index) => { const lit = index === at; const cx = 34 + index * 63; return <g key={tile}>
        <rect x={cx - 28} y="34" width="56" height="70" rx="12" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, cx, lit ? WHITE : INK)}
        <W x={cx} y={124} size={10}>{tile}</W>
      </g>; })}
      {below.map((label, index) => <Box key={label} x={below.length === 1 ? 160 : 62 + index * 98} y={162} w={below.length === 1 ? 130 : 92} text={label} size={10} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FlareTide(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const dot = [[70, 70], [160, 60], [205, 150], [115, 150], [300, 150]][at];
  const caps = ["Worse, then better, then worse again", "Stress may bring on a flare", "Rest, then exercise; ice in a towel", "Deep breathing and good sleep", "Medicine not helping? Tell your doctor"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Flares" title="Riding the waves of a flare" label="Flares" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Symptoms rising and settling in waves, and what can help">
      <path d="M20 150 C45 150, 50 70, 70 70 S95 150, 115 150 S135 60, 160 60 S185 150, 205 150 S225 80, 250 80 S275 150, 300 150" stroke={INK} strokeWidth="4" fill="none" />
      <path d="M20 168 H300" stroke={LINE} strokeWidth="3" />
      <circle cx={dot[0]} cy={dot[1]} r="9" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      {at === 1 && <Cloud x={160} y={32} s={16} />}
      {at === 2 && <g><rect x="232" y="22" width="40" height="26" rx="6" fill={TINT} stroke={INK} strokeWidth="2" /><path d="M252 27 V43 M245 31 L259 39 M259 31 L245 39" stroke={INK} strokeWidth="2" strokeLinecap="round" /></g>}
      {at === 3 && <g><circle cx="38" cy="44" r="8" fill={SOFT} /><circle cx="38" cy="44" r="17" fill="none" stroke={SOFT} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} /></g>}
      {at === 4 && <Phone x={286} y={44} lit />}
      <Say y={200}>{caps[at]}</Say>
    </svg>} />;
}

function MtxWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const caps = ["They slow it and calm inflammation", "Up to three months to feel an effect", "Methotrexate: same day, once a week", "Regular blood tests and checks", "Sulfasalazine may take 1 to 3 months"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="DMARDs" title="Slow medicines for skin and joints" label="DMARDs" credit="Illustration: Rehyn. Follow the instructions with your own medicine."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week with one methotrexate day, and weeks for the medicine to work">
      {at === 0 && <><Box x={110} y={44} w={90} text="Skin" lit /><Box x={210} y={44} w={90} text="Joints" lit /></>}
      {(at === 1 || at === 4) && <>
        {Array.from({ length: 12 }, (_, index) => <rect key={index} x={22 + index * 23} y="26" width="19" height="22" rx="5" fill={at === 4 ? (index >= 4 ? GOLD : WHITE) : INK} stroke={INK} strokeWidth="1.5" opacity={at === 1 ? 0.25 + index * 0.065 : 1} />)}
        <W x={160} y={68} size={10}>{at === 1 ? "Up to three months" : "1 to 3 months"}</W>
      </>}
      {at === 3 && [120, 160, 200].map(x => <Tube key={x} x={x} y={22} />)}
      {days.map((day, index) => { const lit = at === 2 && index === 0; return <g key={index}>
        <rect x={22 + index * 40} y="94" width="34" height="44" rx="8" fill={lit ? INK : at === 2 && index === 3 ? TINT : WHITE} stroke={INK} strokeWidth="2" />
        <W x={39 + index * 40} y={121} size={11} fill={lit ? WHITE : TEXT}>{day}</W>
      </g>; })}
      {at === 2 && <><W x={39} y={158} size={10}>Methotrexate</W><W x={159} y={158} size={10}>Folic acid</W></>}
      <Say y={198}>{caps[at]}</Say>
    </svg>} />;
}

function Messengers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["When DMARDs have not helped", "Anti-TNF and interleukin inhibitors", "Injections can be given at home", "Tablets: apremilast and tofacitinib", "A TB check first; watch for infection"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Biologics" title="Targeting the messengers of inflammation" label="Biologics and newer medicines" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two messengers of inflammation blocked, an injection pen and tablets">
      <g opacity={at === 1 ? 1 : 0.35}>
        {[{ y: 60, t: "TNF" }, { y: 136, t: "Interleukin" }].map(m => <g key={m.t}><circle cx="62" cy={m.y} r="24" fill={INK} /><path d={`M42 ${m.y + 20} L82 ${m.y - 20}`} stroke={GOLD} strokeWidth="6" strokeLinecap="round" /><W x={62} y={m.y + 42} size={10.5}>{m.t}</W></g>)}
      </g>
      {(at === 0 || at === 4) && <Box x={232} y={24} w={124} text={at === 0 ? "After DMARDs" : "TB check first"} lit />}
      <g opacity={at === 2 ? 1 : 0.35}>
        <rect x="150" y="58" width="100" height="22" rx="11" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="250" y="63" width="16" height="12" rx="4" fill={INK} /><rect x="170" y="63" width="30" height="12" rx="4" fill={SOFT} />
        <W x={208} y={102} size={10.5}>Injection pen</W>
      </g>
      <g opacity={at === 3 ? 1 : 0.35}><Pill x={184} y={142} /><Pill x={236} y={142} rotate={-20} /><W x={210} y={176} size={10.5}>Tablets</W></g>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function ReliefTrio(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["NSAIDs ease symptoms, not damage", "Stomach protection may be prescribed", "Paracetamol: check other remedies", "Injections: usually up to 3 a year", "Go easy for the first two weeks"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pain relief" title="Easing pain while treatment works" label="Pain relief" credit="Illustration: Rehyn. Check with a pharmacist or your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An anti-inflammatory tablet, paracetamol and a steroid injection into a joint">
      <g opacity={at <= 1 ? 1 : 0.35}><Pill x={62} y={50} /><W x={62} y={80} size={10.5}>NSAIDs</W></g>
      {at === 1 && <path d="M106 32 L124 38 V52 C124 62, 116 68, 106 72 C96 68, 88 62, 88 52 V38 Z" fill={TINT} stroke={GOLD} strokeWidth="2.5" strokeLinejoin="round" />}
      <g opacity={at === 2 ? 1 : 0.35}><circle cx="62" cy="128" r="14" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M50 128 H74" stroke={INK} strokeWidth="2.5" /><W x={62} y={160} size={10.5}>Paracetamol</W></g>
      <g opacity={at >= 3 ? 1 : 0.35}>
        <Knee x={228} y={100} scale={0.72} />
        <g transform="rotate(-35 258 100)"><rect x="258" y="94" width="40" height="12" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M258 100 H244 M298 94 V106 M298 100 H306" stroke={INK} strokeWidth="2" /></g>
        <W x={228} y={186} size={10.5}>Steroid injection</W>
      </g>
      {at === 3 && [0, 1, 2].map(index => <circle key={index} cx={210 + index * 18} cy="22" r="5" fill={GOLD} />)}
      {at === 4 && <Clock x={150} y={60} r={16} hand={2} />}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function SkinShelf(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const items = [{ x: 55, t: "Moisturiser" }, { x: 130, t: "Creams" }, { x: 205, t: "Light therapy" }, { x: 275, t: "Medicines" }];
  const lit = [[0, 1], [0], [2, 3], [], []][at];
  const op = (index: number) => lit.includes(index) ? 1 : 0.35;
  const caps = ["Creams help skin, not the joints", "Moisturise at least twice a day", "Light therapy, or arthritis medicines", "Ask both teams to share plans", "Pus-filled bumps, red skin: 999 or A&E"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Skin" title="Caring for the skin side too" label="Skin care" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A shelf of skin treatments: moisturiser, creams, light therapy and medicines">
      <path d="M20 122 H300" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <g opacity={op(0)}><rect x="35" y="88" width="40" height="32" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="31" y="78" width="48" height="11" rx="3" fill={SOFT} stroke={INK} strokeWidth="2" /></g>
      <g opacity={op(1)}><path d="M120 120 V84 L124 76 H136 L140 84 V120 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><rect x="124" y="66" width="12" height="10" rx="2" fill={INK} /></g>
      <g opacity={op(2)}><rect x="186" y="70" width="38" height="50" rx="6" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M194 82 H216 M194 94 H216 M194 106 H216" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /></g>
      <g opacity={op(3)}><Pill x={275} y={108} /></g>
      {items.map((item, index) => <g key={item.t} opacity={op(index)}><W x={item.x} y={142} size={10}>{item.t}</W></g>)}
      {at === 3 && <><Box x={88} y={40} w={110} text="Skin team" lit /><Box x={232} y={40} w={110} text="Joint team" lit /><path d="M148 40 H172 M154 34 L148 40 L154 46 M166 34 L172 40 L166 46" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></>}
      {at === 4 && <Box x={160} y={40} w={124} text="999 or A&E" lit />}
      <Say y={196}>{caps[at]}</Say>
    </svg>} />;
}

function MoveMix(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tiles = ["Stretch", "Strengthen", "Cardio"];
  const lit = [[0, 1, 2], [0, 1, 2], [0], [0, 2], [0, 1, 2]][at];
  const below = [["Strong muscles", "Mobile joints"], ["Every day", "Alternate days", "Swim or cycle"], ["Fingers", "Feet", "Neck"], ["Gentle range", "", "Swim"], []][at];
  const caps = ["Strong muscles, mobile joints", "Stretching, strength and cardio", "Finger bends, toe wiggles, neck tilts", "Swollen day? Gentle range, or swim", "Build up slowly: 150 minutes a week"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exercise" title="Little and often keeps you moving" label="Exercise" credit="Illustration: Rehyn. Check with your GP or physiotherapist first if unsure."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Stretching, strengthening and cardio, building up through the week">
      {tiles.map((tile, index) => { const on = lit.includes(index); const c = on ? WHITE : INK; const cx = 60 + index * 100; return <g key={tile} opacity={on ? 1 : 0.4}>
        <rect x={cx - 44} y="22" width="88" height="82" rx="12" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <g stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {index === 0 && <><circle cx={cx} cy="38" r="6" fill={c} /><path d={`M${cx} 44 V62 M${cx} 50 L${cx - 12} 36 M${cx} 50 L${cx + 12} 36 M${cx} 62 L${cx - 8} 76 M${cx} 62 L${cx + 8} 76`} /></>}
          {index === 1 && <><path d={`M${cx - 20} 58 H${cx + 20}`} strokeWidth="4" /><rect x={cx - 27} y="46" width="8" height="24" rx="2" fill={c} /><rect x={cx + 19} y="46" width="8" height="24" rx="2" fill={c} /></>}
          {index === 2 && <><circle cx={cx - 8} cy="48" r="6" fill={c} /><path d={`M${cx - 2} 52 L${cx + 14} 42 M${cx - 30} 68 q7 -6 14 0 t14 0 t14 0 t14 0`} /></>}
        </g>
        <W x={cx} y={94} size={10.5} fill={on ? WHITE : TEXT}>{tile}</W>
      </g>; })}
      {below.map((label, index) => label && <Box key={label} x={below.length === 2 ? 100 + index * 120 : 60 + index * 100} y={138} w={below.length === 2 ? 110 : 92} text={label} size={10} />)}
      {at === 4 && <>{Array.from({ length: 7 }, (_, index) => <rect key={index} x={62 + index * 30} y="126" width="22" height="22" rx="5" fill={INK} opacity={0.2 + index * 0.13} />)}<W x={160} y={168} size={10}>150 minutes a week</W></>}
      <Say y={200}>{caps[at]}</Say>
    </svg>} />;
}

function EnergyDays(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const level = [0.15, 0.15, 0.55, 0.6, 0.55][at];
  const days = ["M", "T", "W", "T", "F"];
  const caps = ["Not eased much by rest or sleep", "Inflammation, pain, poor sleep, stress", "Spread chores over a few days", "A 5 to 10 minute walk to start", "Tell your team; a diary helps"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Fatigue" title="More than tired: pacing your energy" label="Fatigue" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An energy store, and chores piled on one day or spread across the week">
      <rect x="44" y="32" width="24" height="9" rx="2" fill={INK} />
      <rect x="28" y="40" width="56" height="120" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="32" y={156 - 112 * level} width="48" height={112 * level} rx="6" fill={level < 0.3 ? GOLD : INK} opacity=".85" />
      <W x={56} y={180} size={10.5}>Energy</W>
      <path d="M114 162 H306" stroke={LINE} strokeWidth="3" />
      {days.map((day, index) => <W key={index} x={135 + index * 38} y={180} size={10.5}>{day}</W>)}
      {at < 2 ? [0, 1, 2, 3, 4].map(index => <rect key={index} x="120" y={140 - index * 20} width="30" height="18" rx="4" fill={INK} opacity=".8" />)
        : days.map((_, index) => <rect key={index} x={120 + index * 38} y="140" width="30" height="18" rx="4" fill={INK} opacity=".8" />)}
      {at === 1 && <><Box x={196} y={30} w={84} text="Inflammation" size={10} /><Box x={270} y={30} w={60} text="Sleep" size={10} /></>}
      {at === 3 && <><Person x={210} y={104} scale={0.9} /><Moon x={276} y={52} /></>}
      {at === 4 && <g><rect x="186" y="40" width="64" height="76" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M198 40 V116" stroke={INK} strokeWidth="2" /><path d="M206 58 H240 M206 72 H240 M206 86 H232 M206 100 H238" stroke={SOFT} strokeWidth="3" strokeLinecap="round" /></g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function HeartChecks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tags = [["Blood pressure", "Cholesterol", "Diabetes"], ["Blood pressure", "Cholesterol", "Blood glucose"], ["No smoking", "Regular exercise", "Healthy diet"], ["Crohn's disease", "Fatty liver"], []][at];
  const caps = ["A slightly higher heart risk", "Blood pressure checked every year", "No smoking, activity, healthy food", "Linked: Crohn's and fatty liver", "Chest pain that squeezes: call 999"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Whole-body health" title="Looking after more than joints" label="Heart and other health" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A heart beside the checks and steps that help protect it">
      <HeartShape x={86} y={100} size={112} fill={at === 3 ? WHITE : TINT} stroke={at === 4 ? GOLD : INK} />
      {tags.map((tag, index) => <Box key={tag} x={232} y={52 + index * 40} w={136} text={tag} lit={at !== 0} />)}
      {at === 4 && <><rect x="176" y="62" width="112" height="72" rx="14" fill={INK} /><W x={232} y={106} size={22} fill={WHITE}>999</W></>}
      <Say y={200}>{caps[at]}</Say>
    </svg>} />;
}

function WorkDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Working is possible with treatment", "Equality Act: 12 months or more", "Talk early, and write it down", "Equipment, flexible hours, breaks", "Access to Work: no need to pay back"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work" title="Work, with the right support" label="Work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person at a desk with a laptop, a note and adjustments">
      <path d="M120 128 H300 M136 128 V186 M284 128 V186" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <g opacity={at === 0 ? 1 : 0.6}><rect x="176" y="84" width="64" height="40" rx="4" fill={at === 0 ? INK : TINT} stroke={INK} strokeWidth="2.5" /><path d="M168 126 H248" stroke={INK} strokeWidth="4" strokeLinecap="round" /></g>
      <Person x={70} y={152} scale={1.3} />
      {(at === 1 || at === 2) && <g><rect x="256" y="88" width="30" height="38" rx="3" fill={at === 2 ? TINT : WHITE} stroke={INK} strokeWidth="2" /><path d="M262 98 H280 M262 106 H280 M262 114 H274" stroke={SOFT} strokeWidth="2" /></g>}
      {at === 1 && <W x={271} y={76} size={10}>12 months</W>}
      {at === 2 && <Bubble x={112} y={50} text="Talk early" width={104} />}
      {at === 3 && <><Clock x={150} y={108} r={16} hand={1} /><rect x="256" y="114" width="38" height="9" rx="4.5" fill={SOFT} stroke={INK} strokeWidth="1.5" /></>}
      {at === 4 && <Box x={210} y={44} w={140} text="Access to Work" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Axial spondyloarthritis =================================================================================

function SpinePelvis(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["One condition, two names", "Inflamed where tendons meet bone", "About 1 in 200 UK adults", "Develops gradually; may come and go", "Exercise, physio and medicine help"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Inflammation where spine meets pelvis" label="Axial spondyloarthritis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The spine and pelvis, with the sacroiliac joints where they meet">
      <Column x={160} y={18} glow={at === 1} />
      <path d="M100 152 C100 138, 128 134, 146 142 L160 148 L174 142 C192 134, 220 138, 220 152 C220 176, 192 192, 160 188 C128 192, 100 176, 100 152 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M148 136 H172 L160 172 Z" fill={SOFT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      {[152, 168].map(cx => <circle key={cx} cx={cx} cy="150" r="5" fill={GOLD} className={still || at > 1 ? undefined : "lib-why-pulse"} />)}
      <W x={92} y={146} size={10} anchor="end">Where spine</W><W x={92} y={159} size={10} anchor="end">meets pelvis</W>
      {at === 0 && <><W x={262} y={46} size={10.5}>Two names</W><Box x={262} y={72} w={100} text="Seen on X-ray" size={10} /><Box x={262} y={106} w={100} text="Not on X-ray" size={10} /></>}
      {at === 2 && <><W x={262} y={82} size={22} serif>1 in 200</W><W x={262} y={102} size={10.5}>UK adults</W></>}
      {at === 3 && <><path d="M222 96 C236 76, 248 76, 262 96 S288 116, 302 96" stroke={SOFT} strokeWidth="3" fill="none" /><W x={262} y={132} size={10}>Comes and goes</W></>}
      {at === 4 && ["Exercise", "Physio", "Medicine"].map((label, index) => <Box key={label} x={262} y={52 + index * 34} w={92} text={label} lit />)}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function TwoLines(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const boxes = [[], [], ["Hips", "Knees", "Heels", "Ribs"], ["Fatigue", "Weight loss", "Night sweats"], ["See your GP"]][at];
  const caps = ["Most back pain is mechanical", "Eases with exercise, not with rest", "Ribs too: get chest pain checked", "Fatigue, and sometimes night sweats", "Persistent symptoms? See your GP"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Back pain" title="Back pain that eases with movement" label="Inflammatory back pain" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Inflammatory back pain through the day: worst in the morning and at night, easing with activity">
      <path d="M36 160 H292" stroke={LINE} strokeWidth="3" />
      <g opacity={at >= 2 ? 0.2 : 1}>
        {at === 0 && <><path d="M40 140 C100 140, 130 80, 170 80 S250 130, 290 130" stroke={SOFT} strokeWidth="4" fill="none" strokeDasharray="8 7" /><W x={290} y={150} size={10} anchor="end">Mechanical</W></>}
        <path d="M40 50 C90 60, 120 130, 165 130 S250 70, 290 60" stroke={INK} strokeWidth="5" fill="none" />
        <W x={290} y={48} size={10} anchor="end" fill={INK}>Inflammatory</W>
        {at === 1 && <circle cx="165" cy="130" r="9" fill={GOLD} stroke={WHITE} strokeWidth="3" />}
        <W x={40} y={178} size={10} anchor="start">Morning</W><W x={165} y={178} size={10}>Moving</W><W x={290} y={178} size={10} anchor="end">Night</W>
      </g>
      {boxes.map((label, index) => <Box key={label} x={boxes.length === 1 ? 160 : boxes.length === 3 ? 64 + index * 96 : 52 + index * 72} y={100} w={boxes.length === 1 ? 140 : boxes.length === 3 ? 86 : 62} text={label} lit size={10} />)}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function LongRoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const road = "M24 186 C110 186, 80 124, 160 120 S230 48, 296 42";
  const signs = [{ x: 70, y: 148, w: 44, t: "GP", post: "M70 161 V170", on: [1] }, { x: 150, y: 90, w: 60, t: "Tests", post: "M160 103 V113", on: [2] }, { x: 222, y: 146, w: 84, t: "X-ray, MRI", post: "M212 133 V116", on: [2] }, { x: 240, y: 18, w: 108, t: "Rheumatologist", post: "M284 31 L290 37", on: [3] }];
  const dot = [[24, 186], [70, 176], [160, 120], [296, 42], [296, 42]][at];
  const caps = ["Average wait: eight and a half years", "Mention eyes, gut, skin and family", "Normal blood tests do not rule it out", "Only a rheumatologist can confirm it", "Track symptoms to show your team"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Diagnosis" title="The long road to a name" label="Diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A long road from the GP, through tests and scans, to a rheumatologist">
      <path d={road} stroke={LINE} strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d={road} stroke={WHITE} strokeWidth="2" fill="none" strokeDasharray="6 8" />
      {signs.map(sign => <g key={sign.t}><path d={sign.post} stroke={INK} strokeWidth="2.5" strokeLinecap="round" /><Box x={sign.x} y={sign.y} w={sign.w} text={sign.t} lit={sign.on.includes(at)} h={24} size={10} /></g>)}
      <circle cx={dot[0]} cy={dot[1]} r="9" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      {at === 0 && <W x={80} y={60} size={10.5}>Eight and a half years</W>}
      {at === 4 && <Box x={80} y={60} w={110} text="Track symptoms" lit size={10} />}
      <Say y={212}>{caps[at]}</Say>
    </svg>} />;
}

function BodyMap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [["eyes", "skin", "gut"], ["eyes"], ["skin", "gut"], ["bones"], ["spine"]][at];
  const op = (spot: string) => lit.includes(spot) ? 1 : 0.3;
  const caps = ["Eyes, gut and skin can be affected", "Painful red eye: get seen urgently", "Bowel disease 7%, psoriasis 9%", "After a fall, say you have axial SpA", "Cauda equina signs: A&E or 999"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Beyond the spine" title="More than a back condition" label="Beyond the spine" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with the eyes, skin, gut, bones and lower spine marked">
      <circle cx="160" cy="34" r="18" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M128 186 C128 116, 142 66, 160 66 C178 66, 192 116, 192 186 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      <g opacity={op("eyes")}><circle cx="153" cy="32" r="3.5" fill={lit.includes("eyes") ? GOLD : INK} /><circle cx="167" cy="32" r="3.5" fill={lit.includes("eyes") ? GOLD : INK} /><W x={110} y={38} size={10.5} anchor="end">Eyes</W></g>
      <g opacity={op("skin")}><ellipse cx="174" cy="102" rx="6" ry="4.5" fill={lit.includes("skin") ? GOLD : INK} /><W x={212} y={106} size={10.5} anchor="start">Skin</W></g>
      <g opacity={op("gut")}><path d="M146 132 c6 -8 10 8 16 0 s10 8 16 0" stroke={lit.includes("gut") ? GOLD : INK} strokeWidth="3.5" fill="none" strokeLinecap="round" /><W x={212} y={136} size={10.5} anchor="start">Gut</W></g>
      <g opacity={op("bones")}><path d="M160 74 V158" stroke={lit.includes("bones") ? GOLD : INK} strokeWidth="3" strokeDasharray="5 5" /><W x={110} y={110} size={10.5} anchor="end">Bones</W></g>
      <g opacity={op("spine")}><circle cx="160" cy="172" r="7" fill={lit.includes("spine") ? GOLD : INK} /><W x={110} y={176} size={10.5} anchor="end">Lower spine</W></g>
      {at === 4 && <Box x={258} y={174} w={96} text="A&E or 999" lit size={10} />}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function ThreeMoves(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The most important thing you can do", "Strength, cardio and stretching", "Wall push, waist turn, deep breaths", "Stretch while the kettle boils", "Check first; keep within your limits"];
  const panels = at !== 1 && at !== 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exercise" title="A little movement, every day" label="Exercise" credit="Illustration: Rehyn. Check with a health professional before a new programme."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three exercises: pushing the head back against a wall, a waist turn and deep breathing">
      {panels && <g opacity={at === 4 ? 0.45 : 1}>
        {[58, 160, 262].map(cx => <rect key={cx} x={cx - 46} y="22" width="92" height="118" rx="12" fill={WHITE} stroke={at === 0 ? INK : LINE} strokeWidth="2" />)}
        <g stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 30 V132" strokeWidth="4" />
          <circle cx="36" cy="48" r="8" fill={INK} /><path d="M33 56 V96 M33 96 V130 M37 96 V130 M33 64 L44 88" />
          <circle cx="160" cy="46" r="8" fill={INK} /><path d="M160 54 V96 M160 96 L150 130 M160 96 L170 130 M160 66 L148 80 L158 88 M160 66 L172 80 L162 88" />
          <circle cx="228" cy="110" r="8" fill={INK} /><path d="M236 112 H270 L282 96 L296 112" /><path d="M216 122 H306" stroke={SOFT} strokeWidth="3" />
        </g>
        {at === 2 && <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M60 48 H48 M53 43 L48 48 L53 53" />
          <path d="M136 78 C140 64, 180 64, 184 78 M178 72 L184 78 L186 70" />
          <path d="M244 106 C248 96, 256 96, 260 106" />
        </g>}
        <W x={58} y={160} size={10.5}>Wall push</W><W x={160} y={160} size={10.5}>Waist turn</W><W x={262} y={160} size={10.5}>Breathing</W>
      </g>}
      {at === 1 && <Chips labels={["Strength", "Cardio", "Stretching"]} lit={-1} y={70} />}
      {at === 3 && <Chips labels={["In bed", "Kettle", "Teeth", "Doorway", "Sofa"]} lit={1} y={70} />}
      {at === 4 && <Box x={160} y={82} w={150} text="Check with a professional" lit size={10} />}
      <Say y={200}>{caps[at]}</Say>
    </svg>} />;
}

function NsaidPlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Usually the first medicine offered", "With food; full effect up to 2 weeks", "Do not take 2 NSAIDs together", "Only naproxen not linked to heart risk", "Paracetamol or codeine if needed"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="NSAIDs" title="Usually the first medicine to try" label="NSAIDs" credit="Illustration: Rehyn. Take your own medicine as your doctor directs."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tablet with a plate of food and a glass of water, and how long it takes to work">
      <Pill x={70} y={70} />
      <ellipse cx="70" cy="132" rx="48" ry="14" fill={WHITE} stroke={INK} strokeWidth="2.5" /><ellipse cx="70" cy="130" rx="32" ry="8" fill={SOFT} />
      <rect x="128" y="88" width="24" height="46" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="131" y="104" width="18" height="27" rx="2" fill={TINT} />
      <W x={90} y={168} size={10.5}>With food and water</W>
      {at === 0 && <Box x={244} y={90} w={110} text="First medicine" lit />}
      {at === 1 && <><path d="M184 94 H292" stroke={LINE} strokeWidth="6" strokeLinecap="round" />{[184, 236, 290].map(cx => <circle key={cx} cx={cx} cy="94" r="7" fill={INK} />)}
        <W x={184} y={120} size={10}>Hours</W><W x={236} y={76} size={10}>2 weeks</W><W x={280} y={120} size={10}>2 to 4 weeks</W></>}
      {at === 2 && <><Pill x={216} y={86} /><Pill x={268} y={86} /><Cross x={242} y={86} s={22} /></>}
      {at === 3 && <HeartShape x={244} y={90} size={80} fill={TINT} />}
      {at === 4 && <><Box x={244} y={74} w={120} text="Paracetamol" /><Box x={244} y={108} w={120} text="Codeine" /></>}
      <Say y={202}>{caps[at]}</Say>
    </svg>} />;
}

function Targeted(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const icons = at >= 1 && at <= 3;
  const caps = ["When NSAIDs and physio are not enough", "Anti-TNF: a pen, or a drip", "Anti-IL-17A, or JAK inhibitor tablets", "About 8 in 10 respond meaningfully", "TB check first; report infections"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Biologics" title="When NSAIDs and exercise are not enough" label="Biologics and JAK inhibitors" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An injection pen, a drip and a tablet, and eight in ten people responding">
      {icons && <>
        <g opacity={at === 1 || at === 2 ? 1 : 0.35}><rect x="22" y="50" width="76" height="18" rx="9" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="98" y="54" width="10" height="10" rx="3" fill={INK} /><rect x="36" y="54" width="24" height="10" rx="3" fill={SOFT} /><W x={62} y={100} size={10.5}>Pen</W></g>
        <g opacity={at === 1 ? 1 : 0.35}><path d="M146 30 H174 V60 C174 70, 146 70, 146 60 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M160 68 V84" stroke={INK} strokeWidth="2.5" /><W x={160} y={100} size={10.5}>Drip</W></g>
        <g opacity={at === 2 ? 1 : 0.35}><Pill x={260} y={60} /><W x={260} y={100} size={10.5}>Tablet</W></g>
      </>}
      {at === 0 && <Box x={160} y={60} w={200} text="NSAIDs and physio first" lit />}
      {at === 4 && <><Box x={100} y={60} w={110} text="TB check" lit /><Box x={220} y={60} w={110} text="Alert card" lit /></>}
      {at === 3 && Array.from({ length: 10 }, (_, index) => <Person key={index} x={34 + index * 28} y={172} scale={0.7} fill={index < 8 ? INK : SOFT} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function WarmPool(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["At diagnosis, then at least yearly", "Posture, flexibility, a plan for you", "Waist-deep: about half your weight", "Only the exercises your physio shows", "GP, rheumatologist, or self-refer"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Physiotherapy" title="Warm water, easier stretches" label="Physiotherapy and hydrotherapy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person standing waist-deep in a warm pool">
      <rect x="24" y="110" width="272" height="74" rx="10" fill={TINT} stroke={INK} strokeWidth="2.5" />
      <Person x={110} y={120} scale={1.5} />
      <rect x="26" y="113" width="268" height="69" rx="8" fill={SOFT} opacity=".45" />
      <path d="M24 112 q17 -6 34 0 t34 0 t34 0 t34 0 t34 0 t34 0 t34 0 t34 0" stroke={INK} strokeWidth="2" fill="none" />
      {at === 0 && <><Box x={232} y={34} w={130} text="At diagnosis" lit /><Box x={232} y={68} w={130} text="At least yearly" lit /></>}
      {at === 1 && <g><rect x="212" y="26" width="50" height="64" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="227" y="20" width="20" height="10" rx="3" fill={INK} /><path d="M222 46 H252 M222 58 H252 M222 70 H244" stroke={SOFT} strokeWidth="3" strokeLinecap="round" /></g>}
      {at === 2 && <g><rect x="256" y="22" width="12" height="54" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="259" y="46" width="6" height="34" fill={GOLD} /><circle cx="262" cy="84" r="10" fill={GOLD} /><W x={240} y={54} size={10.5} anchor="end">33 to 34°C</W></g>}
      {at === 3 && <Person x={252} y={100} fill={SOFT} />}
      {at === 4 && ["GP", "Rheumatologist", "Self-refer"].map((label, index) => <Box key={label} x={232} y={24 + index * 30} w={130} h={24} text={label} lit size={10} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function WallCheck(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows = [{ t: "Upright chair", on: [0] }, { t: "Medium-firm bed", on: [2] }, { t: at === 4 ? "Adjustments" : "Moving at work", on: [3, 4] }];
  const caps = ["Upright chairs over low, soft sofas", "A wall check, about once a month", "Medium-firm bed, regular times", "Short walks and stretches at work", "Adjustments and Access to Work"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Daily life" title="Sit tall, sleep well, keep working" label="Posture, sleep and work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person checking their posture against a wall, beside a chair, a bed and a desk">
      <g opacity={at === 1 ? 1 : 0.5}>
        <path d="M34 18 V184" stroke={INK} strokeWidth="4" /><path d="M34 184 H134" stroke={LINE} strokeWidth="3" />
        <rect x="96" y="30" width="34" height="110" rx="4" fill={TINT} stroke={SOFT} strokeWidth="2" />
        <circle cx="60" cy="46" r="12" fill={INK} /><rect x="40" y="62" width="24" height="70" rx="9" fill={INK} /><path d="M46 132 V182 M58 132 V182" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        {at === 1 && <path d="M37 46 H47 M37 41 V51 M47 41 V51" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />}
      </g>
      {rows.map((row, index) => { const on = row.on.includes(at); const c = on ? WHITE : INK; const top = 22 + index * 60; return <g key={index} opacity={on ? 1 : 0.45}>
        <rect x="150" y={top} width="152" height="48" rx="12" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <g stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {index === 0 && <path d={`M168 ${top + 8} V${top + 40} M168 ${top + 26} H186 V${top + 40}`} />}
          {index === 1 && <><path d={`M162 ${top + 12} V${top + 40} M162 ${top + 30} H194 V${top + 40}`} /><rect x="166" y={top + 20} width="12" height="7" rx="3" fill={c} /></>}
          {index === 2 && <><path d={`M162 ${top + 30} H194 M166 ${top + 30} V${top + 42} M190 ${top + 30} V${top + 42}`} /><rect x="172" y={top + 10} width="16" height="13" rx="2" /></>}
        </g>
        <W x={204} y={top + 28} size={10.5} anchor="start" fill={on ? WHITE : TEXT}>{row.t}</W>
      </g>; })}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function RestClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Not solved by a couple of good nights", "Rest 10 minutes every hour", "Plan, prioritise, pace, problem-solve", "A written flare plan, and keep moving", "Frequent flares? Speak to your team"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Fatigue and flares" title="Pacing through fatigue and flares" label="Fatigue and flares" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock with ten minutes of rest in every hour">
      <circle cx="88" cy="96" r="58" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M88 96 L88 38 A58 58 0 0 1 138.2 67 Z" fill={GOLD} opacity={at === 1 ? 0.9 : 0.35} />
      {Array.from({ length: 12 }, (_, index) => { const a = index * Math.PI / 6; return <path key={index} d={`M${88 + 50 * Math.sin(a)} ${96 - 50 * Math.cos(a)} L${88 + 56 * Math.sin(a)} ${96 - 56 * Math.cos(a)}`} stroke={TEXT} strokeWidth="2" />; })}
      <path d="M88 96 V50 M88 96 L112 108" stroke={TEXT} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <g><rect x="230" y="38" width="20" height="8" rx="2" fill={INK} /><rect x="214" y="46" width="52" height="100" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="218" y="126" width="44" height="16" rx="4" fill={GOLD} /></g>}
      {at === 1 && <><W x={240} y={92} size={16} serif>10 minutes</W><W x={240} y={112} size={11}>every hour</W></>}
      {at === 2 && ["Planning", "Prioritising", "Pacing", "Problem solving"].map((label, index) => <Box key={label} x={242} y={44 + index * 32} w={120} text={label} lit size={10} />)}
      {at === 3 && <g><rect x="196" y="34" width="92" height="118" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={242} y={58} size={11}>Flare plan</W><path d="M208 78 H276 M208 96 H276 M208 114 H266 M208 132 H256" stroke={SOFT} strokeWidth="3" strokeLinecap="round" /></g>}
      {at === 4 && <><Phone x={242} y={88} lit /><W x={242} y={130} size={10.5}>Your team</W></>}
      <Say y={200}>{caps[at]}</Say>
    </svg>} />;
}

function RedEye(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["About a quarter will have an attack", "Pain, redness, light hurts, blurring", "Cannot see? Go to A&E or call 999", "Steroid and dilating eye drops"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Eyes" title="A red, painful eye: act today" label="Uveitis" credit="Illustration: Rehyn. A red, painful eye needs urgent help."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An inflamed eye, and where to get urgent help">
      <Eye x={100} y={92} s={2} red />
      {at === 0 && [0, 1, 2, 3].map(index => <Person key={index} x={216 + index * 26} y={110} scale={0.8} fill={index === 0 ? INK : SOFT} />)}
      {at === 1 && <Sun x={252} y={60} r={14} />}
      {at === 2 && <><Box x={248} y={52} w={132} text="Urgent GP or 111" size={10} /><Box x={248} y={92} w={132} text="Eye casualty" size={10} /><Box x={248} y={132} w={132} text="A&E or 999" lit size={10} /></>}
      {at === 3 && <g><ellipse cx="248" cy="22" rx="10" ry="8" fill={INK} /><rect x="241" y="26" width="14" height="38" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M244 64 L248 74 L252 64" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <ellipse cx="248" cy="90" rx="4" ry="6" fill={GOLD} /><ellipse cx="248" cy="108" rx="4" ry="6" fill={GOLD} /><W x={248} y={140} size={10.5}>Eye drops</W></g>}
      <Say y={196}>{caps[at]}</Say>
    </svg>} />;
}

function YearRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows = ["Helpline", "Branches", "Meetups", "Your GP", "Tracking"];
  const lit = [[], [0, 1], [2], [3], [4]][at];
  const caps = ["2 hours a year with a professional", "A helpline, guides and local branches", "Monthly online meetups and a forum", "Feeling low? Talk to your GP", "Track symptoms; ask for appointments"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You are not managing alone" label="Support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year with a small slice of appointments, and the support around it">
      <circle cx="100" cy="102" r="62" fill="none" stroke={LINE} strokeWidth="16" />
      <path d="M100 40 A62 62 0 0 1 108.6 40.6" stroke={at === 0 ? GOLD : INK} strokeWidth="16" fill="none" />
      {at === 0 ? <><W x={100} y={100} size={13}>2 hours a year</W><W x={100} y={116} size={10}>with a professional</W></> : <W x={100} y={106} size={11}>Your year</W>}
      {rows.map((row, index) => <g key={row} opacity={lit.includes(index) ? 1 : 0.4}><circle cx="206" cy={30 + index * 36} r="9" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={222} y={34 + index * 36} size={10.5} anchor="start">{row}</W></g>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function InflamPieceView({ piece, ...props }: { piece: InflamPiece } & PieceProps) {
  switch (piece) {
    case "psa-skin-joint": return <SkinJoint {...props} />;
    case "psa-sausage-finger": return <SausageFinger {...props} />;
    case "psa-clue-tiles": return <ClueTiles {...props} />;
    case "psa-flare-tide": return <FlareTide {...props} />;
    case "psa-mtx-week": return <MtxWeek {...props} />;
    case "psa-messengers": return <Messengers {...props} />;
    case "psa-relief-trio": return <ReliefTrio {...props} />;
    case "psa-skin-shelf": return <SkinShelf {...props} />;
    case "psa-move-mix": return <MoveMix {...props} />;
    case "psa-energy-days": return <EnergyDays {...props} />;
    case "psa-heart-checks": return <HeartChecks {...props} />;
    case "psa-work-desk": return <WorkDesk {...props} />;
    case "axspa-spine-pelvis": return <SpinePelvis {...props} />;
    case "axspa-two-lines": return <TwoLines {...props} />;
    case "axspa-long-road": return <LongRoad {...props} />;
    case "axspa-body-map": return <BodyMap {...props} />;
    case "axspa-three-moves": return <ThreeMoves {...props} />;
    case "axspa-nsaid-plate": return <NsaidPlate {...props} />;
    case "axspa-targeted": return <Targeted {...props} />;
    case "axspa-warm-pool": return <WarmPool {...props} />;
    case "axspa-wall-check": return <WallCheck {...props} />;
    case "axspa-rest-clock": return <RestClock {...props} />;
    case "axspa-red-eye": return <RedEye {...props} />;
    case "axspa-year-ring": return <YearRing {...props} />;
  }
}
