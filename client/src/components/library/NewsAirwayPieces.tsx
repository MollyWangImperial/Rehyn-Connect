import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { AIRWAY_PIECES, type AirwayPiece } from "@/content/airway-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Chips, Clock, credit, Gauge, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Bronchiectasis, Pulmonary fibrosis and Snoring pages' own pieces (content/airway-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Heart & lungs pieces. Each is steered by the card's sections; pictures
// show ideas, never anyone's own heart, lungs or results.

export const isAirwayPiece = (piece: NewsPiece): piece is AirwayPiece => (AIRWAY_PIECES as readonly string[]).includes(piece);

// ==== Shared shapes ==========================================================================================

/** A pair of lungs, centred on x, top at y, `size` across (as on the COPD pieces). */
const Lungs = ({ x, y, size = 160, fill = WHITE }: { x: number; y: number; size?: number; fill?: string }) =>
  <g transform={`translate(${x - size / 2} ${y}) scale(${size / 160})`}>
    <path d="M80 0 V52 M80 52 C72 60, 64 64, 56 66 M80 52 C88 60, 96 64, 104 66" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M66 30 C38 20, 8 62, 12 112 C14 138, 38 146, 58 134 C68 124, 70 92, 66 30 Z" fill={fill} stroke={INK} strokeWidth="4" />
    <path d="M94 30 C122 20, 152 62, 148 112 C146 138, 122 146, 102 134 C92 124, 90 92, 94 30 Z" fill={fill} stroke={INK} strokeWidth="4" />
  </g>;
/** An airway in cross-section with an open centre of radius `inner`; `mucus` pools phlegm in it, `germs` adds bacteria. */
const Tube = ({ x, y, r, inner, mucus = false, germs = false }: { x: number; y: number; r: number; inner: number; mucus?: boolean; germs?: boolean }) =>
  <g>
    <circle cx={x} cy={y} r={r} fill={SOFT} opacity=".5" />
    <circle cx={x} cy={y} r={r} fill="none" stroke={INK} strokeWidth="3" />
    <circle cx={x} cy={y} r={inner} fill={WHITE} stroke={INK} strokeWidth="2" />
    {mucus && <path d={`M${x - inner * 0.87} ${y + inner * 0.5} A${inner} ${inner} 0 0 0 ${x + inner * 0.87} ${y + inner * 0.5} Z`} fill={GOLD} />}
    {germs && [[-0.4, 0.66], [0.08, 0.76], [0.44, 0.62]].map(([dx, dy], index) => <circle key={index} cx={x + dx * inner} cy={y + dy * inner} r="2.8" fill={INK} />)}
  </g>;
/** A head from the side (as on the sleep apnoea pieces); `narrow` closes the airway. */
const Head = ({ x, y, narrow = 0 }: { x: number; y: number; narrow?: number }) => <g transform={`translate(${x} ${y})`}>
  <path d="M-10 -60 C-60 -60, -76 -10, -60 30 C-56 44, -50 50, -50 70 L10 70 C10 50, 20 46, 30 40 C44 32, 40 20, 44 12 L54 6 L44 -4 C50 -30, 30 -60, -10 -60 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
  <path d={`M30 18 C10 18, ${-6 + narrow} 24, ${-8 + narrow} 70`} stroke={SOFT} strokeWidth="4" fill="none" />
  <path d={`M-30 70 C-30 40, ${-20 - narrow} 30, -10 20`} stroke={SOFT} strokeWidth="4" fill="none" />
</g>;
/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A column of labelled boxes, left edge at x; `lit` boxes are filled. */
const List = ({ x, y, labels, lit, width = 120, gap = 34 }: { x: number; y: number; labels: string[]; lit: (index: number) => boolean; width?: number; gap?: number }) =>
  <g>{labels.map((label, index) => <Box key={label} x={x + width / 2} y={y + 13 + index * gap} w={width} text={label} lit={lit(index)} />)}</g>;
/** The caption under a picture. */
const Say = ({ y = 204, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Tick = ({ x, y, s = 6, stroke = GOLD }: { x: number; y: number; s?: number; stroke?: string }) =>
  <path d={`M${x - s} ${y} l${s * 0.7} ${s * 0.7} l${s * 1.3} -${s * 1.4}`} stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
/** A sample pot, centred on x with its lid at y, filled `level` deep. */
const Pot = ({ x, y, fill = GOLD, opacity = 1, level = 0.5, lit = false }: { x: number; y: number; fill?: string; opacity?: number; level?: number; lit?: boolean }) =>
  <g>
    <rect x={x - 18} y={y} width="36" height="8" rx="3" fill={lit ? INK : SOFT} />
    <path d={`M${x - 15} ${y + 10} H${x + 15} V${y + 40} a4 4 0 0 1 -4 4 H${x - 11} a4 4 0 0 1 -4 -4 Z`} fill={WHITE} stroke={lit ? GOLD : INK} strokeWidth={lit ? 3.5 : 2.5} />
    {level > 0 && <rect x={x - 12} y={y + 42 - 28 * level} width="24" height={28 * level} rx="3" fill={fill} opacity={opacity} />}
  </g>;
/** A vaccine syringe, pointing right, centred on (x, y). */
const Jab = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g transform={`translate(${x} ${y})`}>
    <rect x="-20" y="-7" width="34" height="14" rx="3" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
    <path d="M14 0 H26 M-20 0 H-28 M-28 -7 V7" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
  </g>;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
const Germ = ({ x, y }: { x: number; y: number }) =>
  <g stroke={GOLD} strokeWidth="2.5" strokeLinecap="round">{[0, 1, 2, 3, 4, 5].map(index => { const a = index * Math.PI / 3; return <path key={index} d={`M${x + 7 * Math.cos(a)} ${y + 7 * Math.sin(a)} L${x + 11 * Math.cos(a)} ${y + 11 * Math.sin(a)}`} />; })}<circle cx={x} cy={y} r="7" fill={GOLD} /></g>;
const Glass = ({ x, y, fill = SOFT }: { x: number; y: number; fill?: string }) =>
  <g><path d={`M${x - 14} ${y} L${x - 10} ${y + 40} H${x + 10} L${x + 14} ${y} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d={`M${x - 12} ${y + 16} L${x - 10} ${y + 40} H${x + 10} L${x + 12} ${y + 16} Z`} fill={fill} opacity=".7" /></g>;
const Car = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 26} ${y + 6} V${y - 2} L${x - 15} ${y - 13} H${x + 12} L${x + 22} ${y - 2} H${x + 26} V${y + 6} Z`} fill={INK} /><circle cx={x - 14} cy={y + 8} r="5.5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x + 14} cy={y + 8} r="5.5" fill={WHITE} stroke={INK} strokeWidth="2.5" /></g>;
const Arrow = ({ d, head, dashed = false }: { d: string; head: string; dashed?: boolean }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={dashed ? 0.5 : 1}><path d={d} strokeDasharray={dashed ? "4 8" : undefined} /><path d={head} /></g>;
/** A nebuliser cup with its mouthpiece above, cup top at y. */
const Nebuliser = ({ x, y }: { x: number; y: number }) =>
  <g>
    <path d={`M${x} ${y} V${y - 24}`} stroke={INK} strokeWidth="6" />
    <rect x={x - 22} y={y - 36} width="44" height="12" rx="6" fill={INK} />
    <path d={`M${x - 16} ${y} L${x - 12} ${y + 30} H${x + 12} L${x + 16} ${y} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <rect x={x - 12} y={y + 14} width="24" height="14" rx="3" fill={TINT} />
    {[[-8, -10], [6, -14], [-2, -20]].map(([dx, dy], index) => <circle key={index} cx={x + dx + 20} cy={y + dy} r="3.5" fill={SOFT} />)}
  </g>;

// ==== Bronchiectasis ==========================================================================================

function BxAirways(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Airways damaged; a lot of phlegm", "Phlegm builds up; germs get trapped", "More common in women than men", "Affects everyone differently"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Wide airways, trapped phlegm" label="Bronchiectasis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Lungs beside a usual airway and a widened one where phlegm collects">
      <Lungs x={80} y={24} size={124} fill={at === 0 ? TINT : WHITE} />
      {at === 2 ? <>
        <W x={236} y={70} size={24} serif>1 in 200</W>
        <W x={236} y={94} size={10.5}>adults in the UK</W>
        <W x={236} y={126} size={10.5}>More likely over 70</W>
      </> : at === 3 ? <>
        {[0, 1, 2].map(index => <g key={index}>
          <Person x={194 + index * 46} y={104} scale={1.1} fill={index === 1 ? INK : SOFT} />
          {Array.from({ length: index + 1 }, (_, dot) => <circle key={dot} cx={194 + index * 46 - index * 6 + dot * 12} cy={138} r="4.5" fill={GOLD} />)}
        </g>)}
      </> : <>
        <Tube x={198} y={74} r={24} inner={12} />
        <Tube x={268} y={74} r={38} inner={26} mucus={at === 1} germs={at === 1} />
        <W x={198} y={132} size={10.5}>Usual</W><W x={268} y={132} size={10.5}>Widened</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BxCauses(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tags = [{ t: "Infections", x: 62, y: 40 }, { t: "Lung conditions", x: 258, y: 40 }, { t: "Immune system", x: 62, y: 100 }, { t: "Not known", x: 258, y: 100 }];
  const lit = [[3], [0], [1], [2], []][at];
  const caps = ["Inflammation damages the airways", "A severe infection, such as pneumonia", "Asthma, COPD or cystic fibrosis", "A problem with the immune system", "A specialist looks for the cause"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="Many roads to damaged airways" label="Causes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Lungs with possible causes around them, and 4 in 10 with no clear cause">
      <Lungs x={160} y={22} size={100} />
      {tags.map((tag, index) => <Box key={tag.t} x={tag.x} y={tag.y} w={104} text={tag.t} lit={lit.includes(index)} />)}
      {at === 4 && <g><circle cx="178" cy="92" r="14" fill={WHITE} fillOpacity=".6" stroke={GOLD} strokeWidth="4" /><path d="M188 102 L200 114" stroke={GOLD} strokeWidth="5" strokeLinecap="round" /></g>}
      {Array.from({ length: 10 }, (_, index) => <rect key={index} x={42 + index * 24} y="132" width="20" height="20" rx="5" fill={index < 4 ? (at === 0 ? INK : SOFT) : WHITE} stroke={INK} strokeWidth="2" />)}
      <W x={160} y={172} size={10.5}>About 4 in 10: no clear cause</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BxCough(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const heights = [20, 22, 18, 20, 22, 20, 18, 22, 20, 30, 46, 62, 70, 56];
  const flare = at === 2;
  const caps = ["A cough that does not go away", "Symptoms can change day to day", "A flare-up: usual symptoms get worse", "Know when to get help"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="The daily cough, and when it changes" label="Symptoms" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A steady daily cough that rises into a flare-up">
      {heights.map((height, index) => { const h = flare || index < 9 ? height : 20; return <rect key={index} x={28 + index * 19} y={148 - h} width="12" height={h} rx="4" fill={flare && index >= 9 ? INK : SOFT} />; })}
      <path d="M20 150 H300" stroke={LINE} strokeWidth="3" />
      <W x={160} y={168} size={10}>Each day</W>
      {at === 0 && <><Pot x={160} y={30} level={0.6} lit /><W x={160} y={100} size={10.5}>3 in 4 cough up phlegm daily</W></>}
      {at === 1 && [{ t: "Wheezing", x: 62, y: 50 }, { t: "Breathless", x: 160, y: 50 }, { t: "Very tired", x: 258, y: 50 }, { t: "Crackling", x: 111, y: 86 }, { t: "Chest pain", x: 209, y: 86 }].map(tag => <Box key={tag.t} x={tag.x} y={tag.y} w={90} text={tag.t} />)}
      {flare && <>
        <rect x="40" y="34" width="12" height="46" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="43" y="50" width="6" height="32" fill={GOLD} /><circle cx="46" cy="86" r="9" fill={GOLD} stroke={INK} strokeWidth="2.5" />
        <W x={64} y={66} size={10.5} anchor="start">38°C or more</W>
        <W x={247} y={64} size={10.5}>Flare-up</W>
      </>}
      {at === 3 && <>
        <Box x={160} y={40} w={250} text="Cough over 3 weeks: see a GP" />
        <Box x={160} y={72} w={250} text="Very bad or worse fast: GP or 111" />
        <Box x={160} y={104} w={250} text="Lots of blood or gasping: 999" lit />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BxTests(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const stops = [{ x: 48, t: "GP" }, { x: 124, t: "Sample" }, { x: 200, t: "X-ray" }, { x: 276, t: "CT scan" }];
  const lit = [[0], [3], [1, 2], [3]][at];
  const caps = ["A GP listens to your chest", "A CT scan: the most effective test", "Phlegm, X-ray, spirometry, blood tests", "CT results: usually 1 to 2 weeks"];
  const icon = (index: number, x: number, y: number, c: string) => [
    <g key="gp" stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round"><path d={`M${x - 10} ${y - 14} V${y - 2} a10 10 0 0 0 20 0 V${y - 14} M${x} ${y + 8} V${y + 10} a6 6 0 0 0 12 0 V${y + 4}`} /><circle cx={x + 12} cy={y + 1} r="3.5" fill={c} /></g>,
    <g key="pot"><rect x={x - 12} y={y - 16} width="24" height="5" rx="2" fill={c} /><path d={`M${x - 10} ${y - 9} H${x + 10} V${y + 13} a3 3 0 0 1 -3 3 H${x - 7} a3 3 0 0 1 -3 -3 Z`} fill="none" stroke={c} strokeWidth="2.5" /></g>,
    <g key="xray" stroke={c} strokeWidth="2" fill="none"><rect x={x - 13} y={y - 16} width="26" height="32" rx="3" strokeWidth="2.5" /><path d={`M${x} ${y - 11} V${y + 11} M${x - 8} ${y - 7} q8 4 16 0 M${x - 8} ${y} q8 4 16 0 M${x - 8} ${y + 7} q8 4 16 0`} /></g>,
    <g key="ct"><circle cx={x} cy={y - 2} r="14" fill="none" stroke={c} strokeWidth="6" /><path d={`M${x - 22} ${y + 10} H${x + 22}`} stroke={c} strokeWidth="3" strokeLinecap="round" /></g>,
  ][index];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="From stethoscope to CT scanner" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four stops: the GP, a phlegm sample, an X-ray and a CT scan">
      <path d="M48 86 H276" stroke={LINE} strokeWidth="4" strokeDasharray="4 8" />
      {stops.map((stop, index) => { const on = lit.includes(index); return <g key={stop.t}>
        <circle cx={stop.x} cy={86} r="30" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        {icon(index, stop.x, 86, on ? WHITE : INK)}
        <W x={stop.x} y={136} size={10.5}>{stop.t}</W>
      </g>; })}
      {at === 1 && <W x={306} y={158} size={10} anchor="end">10 to 20 minutes</W>}
      {at === 3 && <>{[0, 1, 2, 3].map(index => <g key={index}><rect x={100 + index * 30} y="150" width="26" height="20" rx="5" fill={index < 2 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={113 + index * 30} y={164} size={9.5} fill={index < 2 ? WHITE : TEXT}>{index + 1}</W></g>)}<W x={226} y={164} size={10} anchor="start">weeks</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BxClearance(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Daily exercises to clear phlegm", "Relax, breathe deep, then huff", "Hand-held devices, if recommended", "Your physio advises how often", "Water and a warm shower can help"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Airway clearance" title="Huff, don't cough" label="Airway clearance" credit="Illustration: Rehyn. Learn the technique from a physiotherapist first."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The breathing cycle that clears phlegm: breathing control, deep breaths, then a huff">
      {["Breathing control", "Deep breaths", "Huff"].map((step, index) => <Box key={step} x={240} y={40 + index * 50} w={124} text={step} lit={at === 1} />)}
      <Arrow d="M240 55 V74" head="M234 68 L240 75 L246 68" /><Arrow d="M240 105 V124" head="M234 118 L240 125 L246 118" />
      <Arrow d="M302 140 C318 140, 318 40, 302 40" head="M309 34 L302 40 L309 46" />
      {at === 0 && <>
        {Array.from({ length: 7 }, (_, index) => <g key={index}><rect x={16 + index * 21} y="42" width="18" height="18" rx="4" fill={INK} /><Tick x={25 + index * 21} y={51} s={4} stroke={WHITE} /></g>)}
        <W x={88} y={82} size={10.5}>Every day</W>
        <Person x={88} y={156} scale={1.2} />
      </>}
      {at === 1 && <>
        <Person x={70} y={150} scale={1.4} />
        <g stroke={GOLD} strokeWidth="3" strokeLinecap="round"><path d="M94 102 H116" /><path d="M96 110 H128" /><path d="M94 118 H116" /></g>
        <W x={88} y={46} size={10.5}>Huff: a big breath out</W>
      </>}
      {at === 2 && <>
        <rect x="30" y="80" width="104" height="26" rx="13" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="16" y="86" width="16" height="14" rx="3" fill={INK} />
        <circle cx="96" cy="93" r="8" fill={GOLD} />
        <W x={82} y={132} size={10.5}>No medicine inside</W>
      </>}
      {at === 3 && <>
        <Clock x={54} y={80} r={22} hand={2} /><Clock x={118} y={80} r={22} hand={4.2} />
        <W x={86} y={126} size={10.5}>Twice a day</W><W x={86} y={146} size={10.5}>10 to 30 minutes</W>
      </>}
      {at === 4 && <>
        <Glass x={56} y={66} />
        <path d="M110 52 H146 L140 62 H116 Z" fill={INK} /><path d="M128 52 V40" stroke={INK} strokeWidth="4" />
        {[0, 1, 2, 3].map(index => <path key={index} d={`M${118 + index * 7} ${70} v${12 + (index % 2) * 8}`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
        <W x={56} y={130} size={10.5}>Water</W><W x={128} y={130} size={10.5}>Warm shower</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BxCourse(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A phlegm sample is checked first", "A 14-day course for a flare-up", "A rescue pack to keep at home", "Long term, if over 3 infections a year", "Side effects: usually mild"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Antibiotics" title="Fourteen days, start to finish" label="Antibiotics" credit="Illustration: Rehyn. Follow your own team's instructions."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A phlegm sample, a 14-day course of antibiotics and a rescue pack">
      <Pot x={40} y={30} level={0.5} lit={at === 0} /><W x={40} y={94} size={10}>Sample</W>
      <path d="M266 32 V26 H288 V32" fill="none" stroke={INK} strokeWidth="2.5" />
      <rect x="250" y="32" width="54" height="42" rx="6" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M277 43 V63 M267 53 H287" stroke={at === 2 ? WHITE : INK} strokeWidth="4" strokeLinecap="round" />
      <W x={277} y={94} size={10}>Rescue pack</W>
      {Array.from({ length: 14 }, (_, index) => { const x = 76 + (index % 7) * 24, y = 30 + Math.floor(index / 7) * 26; return <g key={index}>
        <rect x={x} y={y} width="20" height="20" rx="4" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2" opacity={at >= 3 ? 0.4 : 1} />
        <W x={x + 10} y={y + 14} size={9.5} fill={at === 1 ? WHITE : TEXT}>{index + 1}</W>
      </g>; })}
      <W x={160} y={94} size={10.5}>14 days</W>
      {at === 0 && <Box x={160} y={138} w={210} text="Checked for a chest infection" />}
      {at === 1 && <W x={160} y={140} size={11}>Finish it, even if you feel better</W>}
      {at === 2 && <><Box x={160} y={130} w={220} text="Start on a sign of infection" /><W x={160} y={168} size={10.5}>Check the expiry date</W></>}
      {at === 3 && <><rect x="30" y="124" width="260" height="18" rx="9" fill={INK} /><W x={160} y={166} size={10.5}>To help prevent infections</W></>}
      {at === 4 && <Chips labels={["Feeling sick", "Bloating", "Diarrhoea"]} lit={-1} y={126} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BxMist(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Not always used; opens the airways", "Short-acting and long-acting", "Salt water mist thins the phlegm", "Mucolytics make phlegm less sticky", "Your team checks your technique"];
  const blobs = <>
    <ellipse cx="200" cy="90" rx="28" ry="20" fill={GOLD} />
    <Arrow d="M234 90 H250" head="M244 84 L251 90 L244 96" />
    <ellipse cx="278" cy="90" rx="26" ry="9" fill={GOLD} opacity=".55" />
    <W x={200} y={132} size={10.5}>Thick</W><W x={278} y={132} size={10.5}>Thinner</W>
  </>;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Inhalers" title="Mist that loosens phlegm" label="Inhalers and nebulisers" credit="Illustration: Rehyn. Use only what your team prescribes."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An inhaler opening an airway, and a nebuliser mist thinning thick phlegm">
      {at === 0 && <>
        <rect x="56" y="48" width="26" height="56" rx="6" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M56 104 H104 V122 H56 Z" fill={INK} />
        <Tube x={196} y={86} r={32} inner={12} /><Tube x={276} y={86} r={32} inner={24} />
        <W x={196} y={140} size={10.5}>Tight</W><W x={276} y={140} size={10.5}>Open</W>
      </>}
      {at === 1 && <>
        <W x={40} y={46} size={10.5} anchor="start">Reliever: works in minutes</W>
        <rect x="40" y="54" width="65" height="16" rx="8" fill={INK} /><W x={114} y={67} size={10} anchor="start">4 to 6 hours</W>
        <W x={40} y={106} size={10.5} anchor="start">Long-acting: once or twice a day</W>
        <rect x="40" y="114" width="260" height="16" rx="8" fill={SOFT} /><rect x="40" y="114" width="130" height="16" rx="8" fill={INK} />
        <W x={300} y={150} size={10} anchor="end">12 to 24 hours</W>
      </>}
      {at === 2 && <>{blobs}<Nebuliser x={80} y={118} /><W x={80} y={170} size={10.5}>Salt water mist</W></>}
      {at === 3 && <>{blobs}<Pill x={64} y={84} /><Pill x={100} y={106} rotate={20} /><W x={80} y={150} size={10.5}>Saline, carbocisteine</W></>}
      {at === 4 && <>
        <Clock x={80} y={86} r={26} hand={1.5} /><W x={80} y={136} size={10.5}>10 to 15 minutes</W>
        <Nebuliser x={226} y={110} /><Tick x={272} y={70} s={8} />
        <W x={236} y={166} size={10.5}>Clean after every use</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BxRehab(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const walker = [56, 158, 294, 294, 124][at];
  const caps = ["Exercise and advice, led by a physio", "6 to 8 weeks, in a group", "Cope better and feel less tired", "150 minutes a week, built up slowly", "Unwell? Stop and get advice"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pulmonary rehab" title="Breathless is part of getting stronger" label="Pulmonary rehab" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Eight weeks of rehab sessions, with a person walking further along them">
      {Array.from({ length: 8 }, (_, week) => <g key={week}>
        {[0, 1].map(session => <circle key={session} cx={56 + week * 34} cy={140 + session * 16} r="6" fill={at >= 1 && at <= 3 ? INK : WHITE} stroke={INK} strokeWidth="2" strokeDasharray={week >= 6 ? "3 3" : undefined} />)}
        <W x={56 + week * 34} y={182} size={9.5}>{week + 1}</W>
      </g>)}
      <W x={14} y={182} size={9.5} anchor="start">Week</W>
      <Person x={walker} y={112} />
      {at === 0 && ["Exercise", "Advice", "Support"].map((tag, index) => <Box key={tag} x={62 + index * 98} y={36} w={88} h={24} text={tag} />)}
      {at === 1 && <W x={160} y={40} size={10.5}>2 sessions a week, about 2 hours each</W>}
      {at === 2 && ["Breathing", "Energy", "Wellbeing"].map((tag, index) => <Box key={tag} x={62 + index * 98} y={36} w={88} h={24} text={tag} lit />)}
      {at === 3 && <W x={160} y={40} size={11}>About 20 minutes a day</W>}
      {at === 4 && <Box x={160} y={38} w={240} text="Chest pain, dizzy, sick or wheezy?" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BxPlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Your plan, made with your team", "Spotting the signs of a flare-up", "Follow the plan's steps", "In an emergency, call 999", "Share it with your team and family"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Self-management" title="A plan for when it flares" label="Flare-up plan" credit="Illustration: Rehyn. Follow your own plan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A one-page flare-up plan with four steps and an emergency line">
      <rect x="22" y="16" width="152" height="172" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <W x={98} y={38} size={11.5}>My plan</W>
      {["Phlegm sample", "Antibiotics", "Airway clearance", "See your team"].map((row, index) => { const y = 62 + index * 26; return <g key={row}>
        <rect x="34" y={y - 8} width="16" height="16" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />
        {at === 2 && <Tick x={42} y={y} s={5} />}
        <W x={58} y={y + 4} size={10.5} anchor="start">{row}</W>
      </g>; })}
      <rect x="34" y="160" width="128" height="18" rx="5" fill={at === 3 ? INK : TINT} />
      <W x={98} y={173} size={10} fill={at === 3 ? WHITE : TEXT}>Emergency: 999</W>
      {at === 0 && <><Person x={220} y={116} scale={1.1} /><Person x={282} y={116} scale={1.1} fill={SOFT} /><W x={251} y={150} size={10.5}>Made together</W></>}
      {at === 1 && <List x={194} y={28} labels={["More cough", "More phlegm", "Colour change", "More tired"]} lit={() => true} width={112} gap={32} />}
      {at === 2 && <><Clock x={250} y={86} r={30} hand={1} /><W x={250} y={140} size={11}>Act quickly</W></>}
      {at === 3 && <><rect x="226" y="50" width="48" height="80" rx="8" fill={INK} /><W x={250} y={96} size={16} fill={WHITE}>999</W></>}
      {at === 4 && <>
        {Array.from({ length: 12 }, (_, index) => <g key={index}><rect x={200 + (index % 4) * 26} y={40 + Math.floor(index / 4) * 26} width="22" height="22" rx="4" fill={index === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" />{index === 0 && <Tick x={211} y={51} s={4} stroke={WHITE} />}</g>)}
        <W x={250} y={138} size={10.5}>At least once a year</W>
      </>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function BxShield(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [[], [0], [1], [2, 3, 4], []][at];
  const caps = ["Vaccines may help prevent flare-ups", "Wash hands; keep away from colds", "A flu vaccine every year", "Pneumococcal, COVID-19 and RSV too", "Family and carers may get some too"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Infections" title="Shields against infection" label="Vaccines and infections" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A shield against germs, with habits and vaccines listed beside it">
      <path d="M100 26 L158 46 V98 C158 138, 130 162, 100 176 C70 162, 42 138, 42 98 V46 Z" fill={at === 0 ? WHITE : TINT} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      {at === 0 && <><Lungs x={100} y={56} size={70} /><Germ x={20} y={64} /><Germ x={174} y={84} /><Germ x={24} y={150} /></>}
      {at === 1 && <g fill={SOFT}>{[[86, 84], [110, 96], [94, 116]].map(([x, y]) => <path key={x} d={`M${x} ${y - 12} C${x + 8} ${y}, ${x + 8} ${y + 8}, ${x} ${y + 8} C${x - 8} ${y + 8}, ${x - 8} ${y}, ${x} ${y - 12} Z`} />)}</g>}
      {at === 2 && <><Jab x={100} y={92} lit /><W x={100} y={130} size={10.5}>Autumn or winter</W></>}
      {at === 3 && <><Jab x={100} y={80} lit /><Jab x={100} y={104} lit /><W x={100} y={138} size={10.5}>Ask your GP</W></>}
      {at === 4 && <><Person x={80} y={128} scale={0.8} fill={SOFT} /><Person x={100} y={118} scale={0.8} /><Person x={120} y={128} scale={0.8} fill={SOFT} /></>}
      <List x={188} y={22} labels={["Wash hands", "Flu", "Pneumococcal", "COVID-19", "RSV"]} lit={index => lit.includes(index)} width={116} gap={30} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function BxPhlegm(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const pots = [{ x: 52, t: "Clear", m: "Can be normal", fill: WHITE, opacity: 1 }, { x: 124, t: "Pale", m: "Maybe", fill: GOLD, opacity: 0.35 }, { x: 196, t: "Dark", m: "Likely", fill: GOLD, opacity: 1 }, { x: 268, t: "Brown", m: "Infection", fill: INK, opacity: 0.75 }];
  const lit = [[2, 3], [], [0], [], []][at];
  const caps = ["Changes can mean an infection", "A guide to the colours", "Know your normal; keep a diary", "Blood in phlegm: get help", "Water helps keep phlegm loose"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Phlegm" title="Read the colour" label="Phlegm" credit="Illustration: Rehyn. Colours as a guide; follow your own plan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four pots of phlegm from clear to brown, and what each colour can mean">
      {pots.map((pot, index) => <g key={pot.t} opacity={at === 3 ? 0.4 : 1}>
        <Pot x={pot.x} y={30} fill={pot.fill} opacity={pot.opacity} level={0.7} lit={lit.includes(index)} />
        <W x={pot.x} y={98} size={10.5}>{pot.t}</W>
        {at === 1 && <W x={pot.x} y={116} size={10}>{pot.m}</W>}
      </g>)}
      {at === 0 && <><Arrow d="M44 130 H276" head="M268 124 L276 130 L268 136" /><W x={160} y={154} size={10.5}>Darker, thicker or stickier</W></>}
      {at === 2 && <g><rect x="110" y="124" width="100" height="52" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M160 124 V176" stroke={INK} strokeWidth="2" />{[0, 1, 2].map(index => <path key={index} d={`M118 ${138 + index * 12} H150 M168 ${138 + index * 12} H202`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}</g>}
      {at === 3 && <><Box x={160} y={134} w={270} text="A few streaks: urgent GP or NHS 111" /><Box x={160} y={166} w={270} text="More than a few streaks: 999" lit /></>}
      {at === 4 && <>{Array.from({ length: 8 }, (_, index) => <g key={index} opacity={index < 6 ? 1 : 0.45}><Glass x={62 + index * 28} y={126} fill={index < 6 ? INK : SOFT} /></g>)}<W x={160} y={186} size={10.5}>6 to 8 glasses a day</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function BxDaily(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stop = [0, 1, 1, 2, 2][at];
  const caps = ["Ways to save energy", "Reasonable adjustments at work", "A grant you do not pay back", "See your doctor 2 months before travel", "Insurance that covers your lungs"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Daily life" title="Pace, plan and prioritise" label="Work, travel and tiredness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Home, work and travel along a path, with energy saved for each">
      <path d="M16 152 H304" stroke={LINE} strokeWidth="3" />
      <path d="M28 152 V116 L50 98 L72 116 V152 Z" fill={stop === 0 ? TINT : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><rect x="44" y="134" width="12" height="18" fill={INK} />
      <rect x="130" y="72" width="60" height="80" rx="3" fill={stop === 1 ? TINT : WHITE} stroke={INK} strokeWidth="2.5" />
      {Array.from({ length: 12 }, (_, index) => { const row = Math.floor(index / 3); return <rect key={index} x={140 + (index % 3) * 15} y={82 + row * 16} width="10" height="10" rx="2" fill={at === 1 && row === 3 ? INK : SOFT} />; })}
      <path d="M260 112 V104 H280 V112" fill="none" stroke={INK} strokeWidth="2.5" />
      <rect x="246" y="112" width="48" height="40" rx="6" fill={stop === 2 ? TINT : WHITE} stroke={INK} strokeWidth="2.5" />
      {["Home", "Work", "Travel"].map((label, index) => <W key={label} x={[50, 160, 270][index]} y={172} size={10.5}>{label}</W>)}
      {at === 0 && <g>
        <rect x="40" y="22" width="228" height="34" rx="6" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="268" y="31" width="8" height="16" rx="2" fill={INK} />
        {["Pace", "Plan", "Prioritise"].map((cell, index) => <g key={cell}><rect x={46 + index * 74} y="28" width="68" height="22" rx="4" fill={INK} /><W x={80 + index * 74} y={43} size={10.5} fill={WHITE}>{cell}</W></g>)}
      </g>}
      {at === 1 && <Box x={160} y={40} w={196} text="Flexible hours, ground floor" />}
      {at === 2 && <Box x={160} y={40} w={180} text="Access to Work" lit />}
      {at === 3 && <Box x={226} y={40} w={168} text="Medicines in hand luggage" />}
      {at === 4 && <Box x={226} y={40} w={168} text="Adaptor for a nebuliser" />}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

// ==== Pulmonary fibrosis ======================================================================================

function PfAirSacs(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const spots = [[-20, -14], [12, -18], [-26, 14], [6, 12], [30, -2]];
  const caps = ["Fibrosis means scarring in the lungs", "Harder for oxygen to reach the blood", "Often the cause is not known", "Scars stay; treatment can slow them"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When the lungs stiffen with scars" label="Pulmonary fibrosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Open air sacs passing oxygen into the blood, beside thick, scarred ones">
      <path d="M88 34 V54 M232 34 V54" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      {spots.map(([dx, dy], index) => <circle key={`h${index}`} cx={88 + dx} cy={80 + dy} r="15" fill={WHITE} stroke={INK} strokeWidth="2.5" />)}
      {spots.map(([dx, dy], index) => <g key={`s${index}`}>
        <circle cx={232 + dx} cy={80 + dy} r="13" fill={TINT} stroke={INK} strokeWidth={at === 0 ? 6 : 4.5} />
        <path d={`M${226 + dx} ${80 + dy} l3 -4 l3 4 l3 -4 l3 4`} stroke={INK} strokeWidth="1.8" fill="none" />
      </g>)}
      <W x={88} y={24} size={10.5}>Healthy air sacs</W><W x={232} y={24} size={10.5}>Scarred air sacs</W>
      {at === 2 ? <>{["Dusts", "Some medicines", "Autoimmune"].map((tag, index) => <Box key={tag} x={62 + index * 98} y={158} w={92} text={tag} />)}</> : <g opacity={at === 0 ? 0.35 : 1}>
        <rect x="24" y="146" width="272" height="16" rx="8" fill={TINT} stroke={SOFT} strokeWidth="2" />
        {at !== 0 && <>{[44, 62, 80, 98, 116, 134].map(x => <circle key={x} cx={x} cy="154" r="3.5" fill={INK} />)}<circle cx="236" cy="154" r="3.5" fill={INK} /></>}
        {at === 1 && <><Arrow d="M88 112 V138" head="M82 132 L88 139 L94 132" /><Arrow d="M232 112 V138" head="M226 132 L232 139 L238 132" dashed /></>}
      </g>}
      {at === 3 && <Pill x={160} y={80} />}
      <Say y={200}>{caps[at]}</Say>
    </svg>} />;
}

function PfTypes(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Over 200 types of ILD", "IPF: most common; no cause found", "Immune reactions or work dusts", "Some stay stable; some progress"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Types" title="One family, many kinds of scarring" label="Types" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A family tree of interstitial lung diseases, with idiopathic pulmonary fibrosis the largest">
      <path d="M160 42 V56 M74 56 H236 M74 56 V70 M236 56 V66" stroke={SOFT} strokeWidth="3" fill="none" />
      <Box x={160} y={28} w={230} h={28} text="Interstitial lung diseases: 200+" lit={at === 0} />
      <rect x="20" y="70" width="108" height="70" rx="10" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2.5" opacity={at === 3 ? 0.5 : 1} />
      <W x={74} y={102} size={18} serif fill={at === 1 ? WHITE : TEXT}>IPF</W>
      <W x={74} y={124} size={10.5} fill={at === 1 ? WHITE : TEXT}>Most common</W>
      <rect x="164" y="66" width="144" height="110" rx="12" fill="none" stroke={LINE} strokeWidth="2" />
      {at === 3 ? <>
        <W x={236} y={88} size={10.5}>Stable</W><path d="M178 104 H296" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <W x={236} y={130} size={10.5}>Progressive</W><path d="M178 164 L296 140" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      </> : ["Hypersensitivity", "Autoimmune", "Occupational", "Sarcoidosis"].map((type, index) => <Box key={type} x={236} y={84 + index * 26} w={132} h={22} text={type} lit={at === 2} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfSymptoms(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["They start slowly, then get worse", "Breathless when active, or at rest", "Signs a doctor may notice", "Get it checked: GP, 111 or 999"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="Breathless, coughing, tired: the slow start" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with the main symptoms and signs of pulmonary fibrosis">
      <Person x={78} y={150} scale={2.3} />
      {at === 0 && <><circle cx="78" cy="136" r="6" fill={GOLD} /><List x={176} y={24} labels={["Breathless", "Dry cough", "Tired", "Weight loss"]} lit={() => true} width={128} /></>}
      {at === 1 && <>
        <path d="M176 150 H200 V130 H224 V110 H248 V90 H272 V70 H300" stroke={INK} strokeWidth="4" fill="none" strokeLinejoin="round" />
        <Person x={236} y={98} scale={0.8} />
        <Box x={240} y={172} w={124} text="Or even at rest" />
      </>}
      {at === 2 && <><circle cx="100" cy="88" r="5" fill={GOLD} /><circle cx="78" cy="136" r="5" fill={GOLD} /><List x={170} y={40} labels={["Rounded fingertips", "Blueish lips", "Crackles"]} lit={() => true} width={136} /></>}
      {at === 3 && <List x={168} y={30} labels={["Cough 3 weeks: GP", "Worse: GP or 111", "Sudden, severe: 999"]} lit={index => index === 2} width={140} gap={40} />}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PfTests(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stones = [{ x: 40, y: 128, t: "GP" }, { x: 100, y: 116, t: "Breathing" }, { x: 160, y: 126, t: "Scans" }, { x: 220, y: 114, t: "Biopsy" }, { x: 280, y: 124, t: "Team" }];
  const tops = ["Asks about work, hobbies and family", "Spirometry and gas transfer", "X-ray, then high-resolution CT", "Bronchoscopy or biopsy", "Specialists review it together"];
  const caps = ["Your GP listens for crackles", "How well the lungs move oxygen", "An X-ray alone is not enough", "Only if results are still uncertain", "A careful diagnosis can take time"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="From a GP visit to a clear diagnosis" label="Tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Stepping stones from the GP to breathing tests, scans, a biopsy if needed, and the team">
      <path d="M40 128 C70 110, 80 112, 100 116 S140 130, 160 126 S200 110, 220 114 S260 128, 280 124" stroke={LINE} strokeWidth="3" fill="none" strokeDasharray="3 7" />
      {stones.map((stone, index) => <g key={stone.t} opacity={index === 3 && at !== 3 ? 0.45 : 1}>
        <ellipse cx={stone.x} cy={stone.y} rx="27" ry="12" fill={at === index ? INK : WHITE} stroke={INK} strokeWidth="2" strokeDasharray={index === 3 ? "5 4" : undefined} />
        <W x={stone.x} y={stone.y + 30} size={10}>{stone.t}</W>
      </g>)}
      <Person x={stones[at].x} y={stones[at].y - 16} scale={0.9} fill={SOFT} />
      <W x={160} y={36} size={10.5}>{tops[at]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfSlowing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["They slow scarring, not undo it", "Your team decides if one suits you", "Regular reviews check how it goes", "Side effects? Tell your team", "Ask your pharmacist about them"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Antifibrotics" title="Slowing the scars, not erasing them" label="Antifibrotic medicines" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Scarring rising over time, and rising more slowly once a medicine starts">
      <path d="M30 30 V150 H300" stroke={LINE} strokeWidth="3" fill="none" />
      <g transform="translate(20 92) rotate(-90)"><W x={0} y={0} size={10}>Scarring</W></g>
      <W x={300} y={168} size={10} anchor="end">Time</W>
      <path d="M40 140 L290 40" stroke={SOFT} strokeWidth="3" strokeDasharray="6 6" />
      <path d="M40 140 L130 104" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <path d="M130 104 L290 84" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <circle cx="130" cy="104" r="6" fill={GOLD} />
      {at === 0 && <><Pill x={54} y={44} /><W x={78} y={48} size={10.5} anchor="start">Antifibrotics</W><W x={290} y={104} size={10.5} anchor="end">Slower</W></>}
      {at === 1 && <><Pill x={54} y={36} /><W x={78} y={40} size={10.5} anchor="start">Pirfenidone</W><Pill x={54} y={62} /><W x={78} y={66} size={10.5} anchor="start">Nintedanib</W></>}
      {at === 2 && <><Clock x={54} y={50} r={16} hand={1.5} /><W x={78} y={46} size={10.5} anchor="start">Several times a day</W><W x={78} y={64} size={10.5} anchor="start">Regular blood tests</W></>}
      {at === 3 && <><W x={40} y={42} size={10.5} anchor="start">Sickness, diarrhoea, rash</W><W x={40} y={60} size={10.5} anchor="start">Pirfenidone: SPF50 sunscreen</W></>}
      {at === 4 && <><Pill x={54} y={50} fill={SOFT} /><W x={78} y={54} size={10.5} anchor="start">Immune-calming medicines</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfOxygen(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Only if blood oxygen is too low", "Some only need it when active", "Checked with a sensor and blood tests", "Installed and explained by an engineer", "Oxygen is highly flammable"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Oxygen" title="Oxygen for low levels, not every breath" label="Oxygen therapy" credit="Illustration: Rehyn. Use oxygen only as prescribed."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A blood oxygen gauge with a low zone, and oxygen equipment">
      <Gauge x={92} y={128} r={62} value={[0.18, 0.55, 0.35, 0.55, 0.55][at]} label="Blood oxygen" />
      <path d="M16 128 A76 76 0 0 1 38.3 74.3" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" />
      <W x={18} y={66} size={10} anchor="start">Low</W>
      {at === 0 && <><Box x={248} y={64} w={136} text="Low oxygen: yes" lit /><Box x={248} y={104} w={136} text="Breathless only: no" /></>}
      {at === 1 && <>
        <Person x={216} y={112} fill={SOFT} /><Person x={276} y={112} /><rect x="294" y="96" width="11" height="24" rx="3" fill={TINT} stroke={INK} strokeWidth="2" />
        <W x={216} y={146} size={10.5}>At rest</W><W x={276} y={146} size={10.5}>Active</W>
      </>}
      {at === 2 && <>
        <rect x="200" y="80" width="84" height="26" rx="13" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="244" y="72" width="30" height="42" rx="6" fill={INK} />
        <W x={248} y={140} size={10.5}>Finger sensor</W><W x={248} y={160} size={10}>Two checks, weeks apart</W>
      </>}
      {at === 3 && <>
        <circle cx="218" cy="78" r="24" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M238 86 C250 92, 252 104, 262 114" stroke={SOFT} strokeWidth="4" fill="none" strokeLinecap="round" />
        <rect x="262" y="106" width="38" height="46" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={218} y={126} size={10}>Nasal tubes</W><W x={280} y={170} size={10}>Concentrator</W>
      </>}
      {at === 4 && <>
        <path d="M248 56 C262 72, 262 92, 248 102 C234 92, 234 72, 248 56 Z" fill={GOLD} /><Cross x={248} y={80} s={22} />
        <W x={248} y={136} size={10.5}>No smoking near it</W><W x={248} y={156} size={10.5}>3 metres from flames</W>
      </>}
      <Say y={200}>{caps[at]}</Say>
    </svg>} />;
}

function PfRehab(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const walker = [[43, 174], [119, 147], [200, 105], [284, 71]][at];
  const flags = [[82, 164], [145, 134], [216, 98]];
  const caps = ["Exercise, advice and breathing skills", "In a group, with support throughout", "Stronger muscles, less breathless", "Set small goals; build up gradually"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pulmonary rehab" title="Small goals, stronger breathing" label="Pulmonary rehab" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person climbing a gentle hill, passing small goal flags">
      <path d="M16 176 C110 176, 170 100, 304 66 V176 Z" fill={TINT} opacity=".7" />
      <path d="M16 176 C110 176, 170 100, 304 66" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
      {flags.map(([x, y]) => <g key={x}><path d={`M${x} ${y} V${y - 26}`} stroke={INK} strokeWidth="2.5" /><path d={`M${x} ${y - 26} L${x + 16} ${y - 20} L${x} ${y - 14} Z`} fill={at === 3 || walker[0] > x ? GOLD : WHITE} stroke={GOLD} strokeWidth="2" /></g>)}
      <Person x={walker[0]} y={walker[1] - 14} />
      {at === 1 && <>{Array.from({ length: 8 }, (_, week) => <g key={week}><rect x={20 + week * 22} y="24" width="18" height="18" rx="4" fill={INK} opacity={week >= 6 ? 0.5 : 1} /><circle cx={25 + week * 22} cy="33" r="2.3" fill={WHITE} /><circle cx={33 + week * 22} cy="33" r="2.3" fill={WHITE} /></g>)}<W x={20} y={62} size={10.5} anchor="start">6 to 8 weeks, twice a week</W></>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function PfCough(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const broken = at === 2;
  const caps = ["Coughing can become a cycle", "Usual cough medicines may not work", "Sip water; a loose scarf in cold air", "Mention reflux or post-nasal drip", "Cough changed or worse? Get advice"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The cough" title="Breaking the cycle of coughing" label="Managing the cough" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A loop of coughing, an irritated throat and more sensitivity, and what can break it">
      <Arrow d="M204 44 C248 56, 262 96, 256 128" head="M249 122 L256 131 L263 122" dashed={broken} />
      <Arrow d="M196 156 C176 170, 144 170, 124 156" head="M131 151 L123 156 L131 162" dashed={broken} />
      <Arrow d="M64 130 C58 96, 80 56, 116 44" head="M107 40 L116 44 L110 52" dashed={broken} />
      <Box x={160} y={36} w={112} h={28} text="Cough" lit={at === 0} />
      <Box x={252} y={148} w={112} h={28} text="Irritated throat" lit={at === 0} />
      <Box x={68} y={148} w={112} h={28} text="More sensitive" lit={at === 0} />
      {at === 1 && <><rect x="152" y="76" width="16" height="8" fill={INK} /><rect x="146" y="84" width="28" height="40" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Cross x={160} y={104} s={18} /></>}
      {at === 2 && <><Glass x={140} y={80} /><path d="M164 86 C174 94, 188 82, 196 90 L194 102 C186 94, 174 106, 164 98 Z" fill={GOLD} /><path d="M188 100 L192 120 L184 120 Z" fill={GOLD} /></>}
      {at === 3 && <><W x={160} y={96} size={10.5}>Reflux?</W><W x={160} y={116} size={10.5}>Post-nasal drip?</W></>}
      {at === 4 && <Box x={160} y={100} w={104} text="Get advice" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfBreath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Moving less weakens muscles", "Breathing techniques slow your breath", "Lean forward; a fan near the face", "Pace, plan, prioritise", "Do not drive yourself to A&E"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Breathlessness" title="Getting your breath back, your way" label="Managing breathlessness" credit="Illustration: Rehyn. Ask your team which techniques suit you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Ways to manage breathlessness: breathing techniques, positions, a fan and pacing">
      {at === 0 && <>
        {["Move less", "Weaker muscles", "More breathless"].map((step, index) => <Box key={step} x={57 + index * 103} y={70} w={94} text={step} lit={index === 2} />)}
        <Arrow d="M263 86 C263 130, 57 130, 57 86" head="M51 94 L57 86 L63 94" />
        <Person x={160} y={168} scale={0.8} fill={SOFT} />
      </>}
      {at === 1 && <>
        <circle cx="84" cy="92" r="32" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="96" cy="84" r="3" fill={INK} /><ellipse cx="116" cy="104" rx="4" ry="3" fill={INK} />
        <path d="M124 104 H190" stroke={GOLD} strokeWidth="3" strokeDasharray="3 6" strokeLinecap="round" />
        <rect x="200" y="100" width="14" height="50" rx="2" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M207 98 C214 90, 210 82, 214 76 C204 82, 200 90, 207 98 Z" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />
        <W x={84} y={150} size={10.5}>Pursed lips</W>
      </>}
      {at === 2 && <>
        <circle cx="82" cy="92" r="22" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[0, 1, 2].map(index => <ellipse key={index} cx="82" cy="80" rx="5" ry="11" fill={SOFT} transform={`rotate(${index * 120} 82 92)`} />)}
        <circle cx="82" cy="92" r="4" fill={INK} /><path d="M82 114 V160" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <W x={88} y={180} size={10}>About 6 inches away</W>
        <rect x="176" y="120" width="124" height="8" rx="3" fill={INK} /><path d="M186 128 V172 M290 128 V172" stroke={INK} strokeWidth="4" />
        <ellipse cx="234" cy="113" rx="32" ry="7" fill={TINT} stroke={INK} strokeWidth="2" />
        <circle cx="222" cy="98" r="12" fill={INK} /><path d="M176 172 C176 140, 188 118, 208 108 L218 114 C204 126, 196 148, 198 172 Z" fill={INK} />
      </>}
      {at === 3 && <>
        <circle cx="34" cy="66" r="10" fill={GOLD} /><Moon x={286} y={66} />
        <W x={160} y={70} size={10.5}>Big tasks, split up</W>
        {[{ x: 30, w: 56, t: "Task" }, { x: 86, w: 32, t: "Rest" }, { x: 118, w: 56, t: "Task" }, { x: 174, w: 32, t: "Rest" }, { x: 206, w: 56, t: "Task" }, { x: 262, w: 32, t: "Rest" }].map(block => <g key={block.x}>
          <rect x={block.x} y="98" width={block.w} height="26" rx="6" fill={block.t === "Task" ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <W x={block.x + block.w / 2} y={115} size={10} fill={block.t === "Task" ? WHITE : TEXT}>{block.t}</W>
        </g>)}
      </>}
      {at === 4 && <><Box x={160} y={64} w={230} text="Breathing worse: GP or 111" /><Box x={160} y={104} w={230} text="Severe difficulty: 999" lit /></>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function PfVaccines(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const lit = [[], [0, 1], [2, 3], []][at];
  const caps = ["These infections can be more serious", "Flu jab before the end of October", "RSV and COVID-19, if eligible", "Keep away from colds; wash hands"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Infections" title="Your winter shield of vaccines" label="Vaccines and infections" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four vaccines, an October calendar and hand washing">
      {at === 0 && <><Lungs x={78} y={40} size={100} /><Germ x={24} y={60} /><Germ x={136} y={74} /><Germ x={30} y={150} /></>}
      {at === 1 && <g>
        <rect x="22" y="34" width="112" height="112" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M22 58 V42 a8 8 0 0 1 8 -8 H126 a8 8 0 0 1 8 8 V58 Z" fill={INK} />
        <W x={78} y={51} size={11} fill={WHITE}>October</W>
        {Array.from({ length: 20 }, (_, index) => <rect key={index} x={30 + (index % 5) * 20} y={66 + Math.floor(index / 5) * 19} width="16" height="15" rx="3" fill={TINT} stroke={index === 19 ? GOLD : "none"} strokeWidth="3" />)}
      </g>}
      {at === 2 && <><Person x={78} y={124} scale={1.4} /><W x={78} y={168} size={10}>Ask if you are eligible</W></>}
      {at === 3 && <>
        <path d="M30 52 H82 V64 M82 52 V44" stroke={INK} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {[0, 1, 2].map(index => <path key={index} d={`M${78 + index * 6} ${74 + index * 12} v8`} stroke={SOFT} strokeWidth="4" strokeLinecap="round" />)}
        <ellipse cx="86" cy="124" rx="34" ry="12" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <W x={80} y={160} size={10.5}>Warm water and soap</W>
      </>}
      {["Flu", "Pneumococcal", "RSV", "COVID-19"].map((name, index) => <g key={name} opacity={at === 3 ? 0.4 : 1}><Jab x={196} y={44 + index * 38} lit={lit.includes(index)} /><W x={230} y={48 + index * 38} size={10.5} anchor="start">{name}</W></g>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PfTravel(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const stops = [{ x: 40, a: "Your team", b: "Advice" }, { x: 112, a: "2 months", b: "Medicines" }, { x: 190, a: "4 to 6 weeks", b: "Fit-to-fly test" }, { x: 274, a: "Fly", b: "Hand luggage" }];
  const lit = [[0], [2], [3], [1, 3]][at];
  const caps = ["Most can travel; ask your team first", "Fitness-to-fly test: book 4 to 6 weeks", "Check with the airline before booking", "Medicines in hand luggage; get insured"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Travel" title="Plan early, then fly" label="Travel and flying" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from talking to your team, through medicines and a fitness-to-fly test, to the flight">
      <path d="M248 52 L300 40 L306 44 L256 58 Z M272 48 L262 30 H271 L286 46 M268 54 L262 70 H271 L282 52" fill={INK} stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
      {at === 2 && <rect x="226" y="36" width="11" height="26" rx="3" fill={GOLD} stroke={INK} strokeWidth="2" />}
      <path d="M40 112 H274" stroke={LINE} strokeWidth="4" />
      {stops.map((stop, index) => <g key={stop.x}>
        <circle cx={stop.x} cy="112" r="13" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={stop.x} y={88} size={10.5}>{stop.a}</W>
        <W x={stop.x} y={142} size={10}>{stop.b}</W>
      </g>)}
      {at === 3 && <><Pill x={112} y={168} /><path d="M262 160 V154 H286 V160" fill="none" stroke={INK} strokeWidth="2.5" /><rect x="254" y="160" width="40" height="22" rx="5" fill={TINT} stroke={INK} strokeWidth="2.5" /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PfSupport(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const people = [{ t: "Specialist team", x: 66, y: 44 }, { t: "GP", x: 254, y: 44 }, { t: "Charities", x: 58, y: 118 }, { t: "Helpline", x: 262, y: 118 }, { t: "Palliative care", x: 160, y: 176 }];
  const lit = [[0, 1], [2, 3], [4], [0]][at];
  const caps = ["Worried or low? Talk to your team", "Charities and helplines can help", "Palliative care: from diagnosis on", "Plan ahead; you can change it later"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You do not have to manage alone" label="Support and planning ahead" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person at the centre of a circle of support">
      {people.map(person => <path key={person.t} d={`M160 112 L${person.x} ${person.y}`} stroke={SOFT} strokeWidth="2.5" />)}
      <Person x={160} y={124} scale={1.2} />
      {people.map((person, index) => <Box key={person.t} x={person.x} y={person.y} w={104} text={person.t} lit={lit.includes(index)} />)}
      {at === 3 && <g><rect x="146" y="20" width="28" height="36" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M152 30 H168 M152 38 H168 M152 46 H162" stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" /></g>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

// ==== Snoring =================================================================================================

function SnThroat(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["Very common; not usually serious", "Parts vibrate as you breathe", "Relaxed tissues narrow the airway", "Sometimes it is sleep apnoea"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The sound of relaxed tissues" label="Why people snore" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head from the side, with the airway relaxing and narrowing in sleep">
      <Moon x={36} y={40} />
      <Head x={110} y={116} narrow={[4, 10, 16, 18][at]} />
      {(at === 1 || at === 2) && <path d="M100 150 q4 -5 8 0 t8 0 t8 0" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" className={still ? undefined : "lib-why-pulse"} />}
      {at === 0 && <><W x={246} y={76} size={18} serif>Z z z</W><W x={246} y={106} size={12}>Very common</W></>}
      {at === 1 && <List x={186} y={30} labels={["Tongue", "Mouth", "Throat", "Nose"]} lit={() => true} width={120} />}
      {at === 2 && <><Box x={246} y={80} w={124} text="Muscles relax" lit /><Box x={246} y={120} w={124} text="Alcohol: more so" /></>}
      {at === 3 && <Box x={246} y={100} w={124} text="Sleep apnoea?" lit />}
      <Say y={207}>{caps[at]}</Say>
    </svg>} />;
}

/** A breathing trace: regular waves from x0 to x1 at height y, as path commands after a starting point. */
const waves = (x0: number, x1: number) => {
  let d = "";
  for (let x = x0; x + 20 <= x1; x += 20) d += " q5 -12 10 0 q5 12 10 0";
  return d;
};

function SnTraces(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Snoring and sleep apnoea differ", "Breathing stops, then starts again", "Daytime tiredness and headaches too", "A partner may notice the pauses", "Sleep apnoea needs treating"];
  const apnoea = `M30 132${waves(30, 90)} H160 l6 -26 l6 40 l6 -14${waves(178, 238)}`;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Or sleep apnoea?" title="Snore, or a pause and a gasp?" label="Snoring or sleep apnoea" credit="Illustration: Rehyn. A picture of the idea, not a recording."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A steady snoring trace beside a sleep apnoea trace with a pause and a gasp">
      <Moon x={282} y={46} />
      <W x={30} y={34} size={10.5} anchor="start">Snoring</W>
      <path d={`M30 62${waves(30, 240)}`} stroke={at === 0 ? INK : SOFT} strokeWidth="3" fill="none" strokeLinecap="round" />
      <W x={30} y={104} size={10.5} anchor="start">Sleep apnoea</W>
      <path d={apnoea} stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {at === 1 && <><path d="M92 146 V152 H158 V146" stroke={GOLD} strokeWidth="3" fill="none" /><W x={125} y={168} size={10.5}>Pause</W><W x={186} y={102} size={10.5} anchor="start">Gasp</W></>}
      {at === 2 && <Chips labels={["Gasping", "Snorting", "Choking"]} lit={-1} y={156} />}
      {at === 3 && <><Person x={282} y={126} scale={1.1} fill={SOFT} /><W x={282} y={160} size={10.5}>Partner</W></>}
      {at === 4 && <Chips labels={["Blood pressure", "Stroke", "Heart disease"]} lit={-1} y={156} />}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function SnCauses(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tags = [{ t: "Weight", x: 62, y: 44 }, { t: "Smoking", x: 62, y: 96 }, { t: "Alcohol", x: 62, y: 148 }, { t: "On your back", x: 258, y: 44 }, { t: "Sleeping pills", x: 258, y: 96 }, { t: "Blocked nose", x: 258, y: 148 }];
  const lit = [[0, 1, 2, 3], [2], [4], [3], [5]][at];
  const value = at === 0 ? 0.9 : 0.6;
  const angle = (fraction: number) => (135 + fraction * 270) * Math.PI / 180;
  const caps = ["What makes snoring more likely", "Alcohol before bed makes it worse", "Sleeping pills can cause snoring", "Back sleeping can lead to snoring", "A blocked or narrow nose"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What makes it worse" title="The things that turn up the volume" label="What makes it worse" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A volume knob turned up, with the things that make snoring worse around it">
      {Array.from({ length: 9 }, (_, index) => { const a = angle(index / 8); return <path key={index} d={`M${160 + 40 * Math.cos(a)} ${98 + 40 * Math.sin(a)} L${160 + 46 * Math.cos(a)} ${98 + 46 * Math.sin(a)}`} stroke={index / 8 <= value ? INK : LINE} strokeWidth="3.5" strokeLinecap="round" />; })}
      <circle cx="160" cy="98" r="34" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="160" cy="98" r="24" fill={TINT} />
      <path d={`M160 98 L${160 + 26 * Math.cos(angle(value))} ${98 + 26 * Math.sin(angle(value))}`} stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <W x={160} y={168} size={10}>Volume</W>
      {tags.map((tag, index) => <Box key={tag.t} x={tag.x} y={tag.y} w={96} text={tag.t} lit={lit.includes(index)} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SnGpNotes(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Not helping, big impact, or gasping", "The GP checks your mouth and nose", "Keep a sleep diary; ask your partner", "A sleep test, usually at home"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Seeing a GP" title="When a snore needs a GP" label="When to see a GP" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A checklist of reasons to see a GP, a sleep diary and a home sleep test">
      <rect x="22" y="22" width="128" height="158" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="62" y="14" width="48" height="14" rx="4" fill={INK} />
      {["Not helping", "Big impact", "Gasps, pauses"].map((row, index) => { const y = 62 + index * 38; return <g key={row}>
        <rect x="34" y={y - 8} width="16" height="16" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />{at === 0 && <Tick x={42} y={y} s={5} />}
        <W x={58} y={y + 4} size={10.5} anchor="start">{row}</W>
      </g>; })}
      {at === 0 && <Box x={240} y={70} w={124} text="Sleepy by day" lit />}
      {at === 1 && <><Person x={214} y={112} scale={1.1} /><Person x={270} y={112} scale={1.1} fill={SOFT} /><W x={242} y={148} size={10.5}>Bring a partner</W></>}
      {at === 2 && <g>
        <rect x="186" y="34" width="108" height="120" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M198 34 V154" stroke={INK} strokeWidth="2" />
        <Moon x={222} y={58} r={9} /><circle cx="274" cy="58" r="8" fill={GOLD} />
        {[0, 1, 2, 3].map(index => <path key={index} d={`M208 ${86 + index * 16} H284`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
      </g>}
      {at === 3 && <><path d="M204 150 V100 L240 70 L276 100 V150 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><Moon x={240} y={118} r={11} /><W x={240} y={172} size={10.5}>Sleep clinic</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function SnSelfHelp(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Simple changes can help", "Lose weight if overweight", "No more than 14 units a week", "Sleep on your side", "No smoking, no sleeping pills"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Self-help" title="Small changes, quieter nights" label="Weight, alcohol and sleeping position" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person asleep on their side, and the changes that can reduce snoring">
      <rect x="22" y="64" width="10" height="70" rx="3" fill={INK} />
      <rect x="32" y="104" width="210" height="18" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <ellipse cx="62" cy="98" rx="24" ry="8" fill={TINT} stroke={INK} strokeWidth="2" />
      <circle cx="66" cy="84" r="12" fill={INK} />
      <rect x="84" y="80" width="156" height="24" rx="12" fill={TINT} stroke={INK} strokeWidth="2" />
      {at === 3 && <><circle cx="132" cy="74" r="8" fill={GOLD} /><path d="M126 70 C130 74, 130 76, 126 80 M138 68 C134 72, 134 76, 138 80" stroke={WHITE} strokeWidth="1.5" fill="none" /><W x={132} y={56} size={10}>Tennis ball</W></>}
      {at === 0 && <Moon x={280} y={62} r={14} />}
      {at === 1 && <g><rect x="258" y="62" width="44" height="30" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M268 76 A12 12 0 0 1 292 76" stroke={INK} strokeWidth="2.5" fill="none" /><path d="M280 76 L286 68" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" /></g>}
      {at === 2 && <><path d="M266 50 h28 l-14 22 Z M280 72 v16 M270 88 h20" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><Cross x={280} y={70} s={16} /></>}
      {at === 4 && <><rect x="258" y="48" width="44" height="10" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="296" y="48" width="6" height="10" fill={GOLD} /><Cross x={280} y={53} s={11} /><Pill x={280} y={88} /><Cross x={280} y={88} s={11} /></>}
      <Chips labels={["Simple", "Weight", "Alcohol", "Side", "Smoking"]} lit={at} y={148} />
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function SnDevices(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows = [{ c: "Tongue blocks throat", d: "Mouth device" }, { c: "Mouth falls open", d: "Chin strap" }, { c: "Blocked nose", d: "Nasal strips" }];
  const row = [-1, 0, 0, 1, 2][at];
  const caps = ["The device depends on the cause", "A mouth device brings the jaw forward", "A trained dentist fits it", "A chin strap keeps the mouth closed", "Nasal strips hold the nose open"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Devices" title="The right device for the cause" label="Mouth devices and nasal strips" credit="Illustration: Rehyn. Talk to a doctor about what suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three causes of snoring, each matched to a device">
      <W x={80} y={18} size={10.5}>Cause</W><W x={238} y={18} size={10.5}>Device</W>
      {rows.map((item, index) => { const y = 46 + index * 52; return <g key={item.c}>
        <Box x={80} y={y} w={136} text={item.c} lit={at === 0 || (at !== 2 && row === index)} />
        {at === 2 && index === 0
          ? <path d="M151 38 C151 33, 167 33, 167 38 C167 46, 164 56, 162 56 L159 48 L156 56 C154 56, 151 46, 151 38 Z" fill={WHITE} stroke={INK} strokeWidth="2" />
          : <Arrow d={`M152 ${y} H164`} head={`M159 ${y - 5} L165 ${y} L159 ${y + 5}`} />}
        <Box x={238} y={y} w={136} text={item.d} lit={row === index} />
      </g>; })}
      <Say y={200}>{caps[at]}</Say>
    </svg>} />;
}

function SnNose(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const grid = (labels: string[]) => labels.map((label, index) => <Box key={label} x={[188, 270][index % 2]} y={[62, 102][Math.floor(index / 2)]} w={76} text={label} />);
  const caps = ["A blocked nose is one cause", "Allergic rhinitis: a blocked nose", "Irritation without an allergy", "A pharmacist can advise", "Polyps: steroid drops or a spray"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The nose" title="When the nose is the problem" label="A blocked nose and allergies" credit="Illustration: Rehyn. Follow the packet and your pharmacist's advice."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A nose with a narrowed airway, its common causes and treatments">
      <Head x={86} y={112} />
      <path d="M126 116 C112 108, 94 106, 78 114 C70 118, 68 124, 70 130" stroke={SOFT} strokeWidth="5" fill="none" strokeLinecap="round" />
      {at === 4 && <><circle cx="108" cy="110" r="5.5" fill={GOLD} /><circle cx="94" cy="110" r="4.5" fill={GOLD} /></>}
      {at === 0 && <Box x={226} y={80} w={150} text="Blocked or narrow" lit />}
      {at === 1 && grid(["Pollen", "Dust mites", "Pets", "Mould"])}
      {at === 2 && grid(["Weather", "Smoke", "Perfume", "Spicy food"])}
      {at === 3 && <>
        <rect x="167" y="56" width="12" height="14" rx="2" fill={INK} /><rect x="160" y="70" width="26" height="50" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {Array.from({ length: 7 }, (_, index) => <rect key={index} x={202 + index * 15} y="86" width="12" height="18" rx="3" fill={index < 5 ? INK : WHITE} stroke={INK} strokeWidth="1.5" />)}
        <Cross x={278} y={95} s={9} /><Cross x={293} y={95} s={9} />
        <W x={254} y={130} size={10.5}>5 days at most</W>
      </>}
      {at === 4 && <>
        <rect x="216" y="52" width="20" height="12" rx="3" fill={INK} /><rect x="210" y="64" width="32" height="46" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M226 110 V124" stroke={INK} strokeWidth="2" /><circle cx="226" cy="130" r="3" fill={SOFT} />
        <W x={226} y={154} size={10.5}>To shrink them</W>
      </>}
      <Say y={200}>{caps[at]}</Say>
    </svg>} />;
}

function SnSurgery(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const steps = ["Lifestyle", "Devices", "Specialist", "Surgery"];
  const lit = [3, 2, 3, 3][at];
  const tops = ["Not widely available on the NHS", "After a hospital assessment", "Large tonsils or adenoids", "If polyps last about 12 weeks"];
  const caps = ["Only if other treatments do not help", "A specialist decides if it suits you", "For sleep apnoea, rarely suitable", "It helps most, but polyps can return"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Surgery" title="The last step, not the first" label="Surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A staircase of treatments, with surgery as a small last step">
      {steps.map((step, index) => { const top = 160 - (index + 1) * 30, x = 30 + index * 68, w = index === 3 ? 56 : 68; return <g key={step}>
        <rect x={x} y={top} width={w} height={160 - top} fill={index === lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeDasharray={index === 3 ? "6 4" : undefined} />
        <W x={x + w / 2} y={top + 19} size={10} fill={index === lit ? WHITE : TEXT}>{step}</W>
      </g>; })}
      <W x={24} y={36} size={11} anchor="start">{tops[at]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SnSharedBed(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const width = at === 4 ? 240 : 196;
  const left = 150 - width / 2;
  const sleeper = 150 - width / 4, partner = 150 + width / 4;
  const caps = ["A common cause of broken sleep", "Earplugs or white noise can help", "It may point to sleep apnoea", "You may notice the pauses first", "A bed big enough for two"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Partners" title="The person lying awake" label="Sleeping beside someone who snores" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people in bed, one snoring and one awake, with earplugs and white noise">
      <rect x={left} y="66" width={width} height="110" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x={sleeper - 32} y="76" width="64" height="22" rx="8" fill={TINT} stroke={INK} strokeWidth="2" />
      <rect x={partner - 32} y="76" width="64" height="22" rx="8" fill={TINT} stroke={INK} strokeWidth="2" />
      <circle cx={sleeper} cy="90" r="13" fill={at === 3 ? SOFT : INK} />
      <circle cx={partner} cy="90" r="13" fill={at === 3 ? INK : SOFT} />
      <rect x={left} y="108" width={width} height="68" rx="10" fill={TINT} stroke={INK} strokeWidth="2" />
      {at !== 3 && <path d={`M${sleeper + 18} 82 q6 8 0 16 M${sleeper + 26} 76 q9 14 0 28${at === 2 ? ` M${sleeper + 34} 70 q12 20 0 40` : ""}`} stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" className={still || at === 4 ? undefined : "lib-why-pulse"} />}
      {at === 1 && <><ellipse cx={partner + 15} cy="92" rx="4" ry="3" fill={GOLD} /><rect x="282" y="120" width="32" height="40" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="288" y="100" width="20" height="20" rx="4" fill={INK} /><circle cx="298" cy="110" r="5" fill={SOFT} /></>}
      {at === 2 && <W x={150} y={44} size={10.5}>Loud, frequent or ongoing</W>}
      {at === 3 && <W x={150} y={44} size={10.5}>Watching for pauses</W>}
      {at === 4 && <><Arrow d="M130 48 H40" head="M47 42 L40 48 L47 54" /><Arrow d="M170 48 H260" head="M253 42 L260 48 L253 54" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SnRoutine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Small changes make a difference", "Same times each day, even days off", "Wind down: read, music, breathing", "Big meals late can keep you awake", "Keep clocks out of view"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Routine" title="An evening built for sleep" label="A better night's routine" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An evening timeline: caffeine stopped early, screens off an hour before bed, then sleep">
      <path d="M20 112 H290" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      <g opacity={at === 3 ? 1 : 0.4}><rect x="38" y="70" width="24" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M62 76 h5 a6 6 0 0 1 0 12 h-5" fill="none" stroke={INK} strokeWidth="2.5" />{at === 3 && <Cross x={50} y={83} s={12} />}</g>
      <g opacity={at === 2 ? 1 : 0.4}><rect x="249" y="66" width="22" height="36" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="260" cy="95" r="2.2" fill={INK} />{at === 2 && <Cross x={260} y={84} s={12} />}</g>
      <Moon x={292} y={80} r={12} fill={at === 4 || at === 0 ? INK : SOFT} />
      {at === 0 && <W x={150} y={150} size={11}>Sometimes called sleep hygiene</W>}
      {at === 1 && <><circle cx="30" cy="80" r="10" fill={GOLD} /><W x={150} y={150} size={11}>Aim for 6 to 9 hours of sleep</W></>}
      {at === 2 && <><path d="M260 124 V132 H290 V124" stroke={GOLD} strokeWidth="3" fill="none" /><W x={290} y={152} size={10.5} anchor="end">1 hour: no screens</W></>}
      {at === 3 && <>
        <path d="M50 124 V132 H290 V124" stroke={GOLD} strokeWidth="3" fill="none" /><W x={170} y={150} size={10.5}>No caffeine for 8 hours</W>
        <path d="M230 160 V168 H290 V160" stroke={GOLD} strokeWidth="3" fill="none" /><W x={290} y={186} size={10.5} anchor="end">No alcohol or nicotine: 1 to 2 hours</W>
      </>}
      {at === 4 && <W x={150} y={150} size={11}>Quiet, dark and cool</W>}
      <Say y={207}>{caps[at]}</Say>
    </svg>} />;
}

function SnTiredness(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tired all the time? It can be a sign", "A sleepiness scale to share with a GP", "Ask your doctor about driving", "Drowsy? Pull over safely and rest", "Tired for weeks? See a GP"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Daytime tiredness" title="Snoring at night, tired all day" label="Daytime tiredness" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Energy through the day sagging, with a sleepiness scale, a car and a GP">
      <path d="M20 160 H300" stroke={LINE} strokeWidth="3" />
      <path d="M20 96 C80 80, 120 132, 160 138 S250 112, 300 126" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
      <W x={20} y={178} size={10} anchor="start">Morning</W><W x={300} y={178} size={10} anchor="end">Evening</W>
      {at === 0 && <circle cx="160" cy="138" r="7" fill={GOLD} />}
      {at === 1 && <><rect x="40" y="26" width="240" height="14" rx="7" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="150" y="26" width="130" height="14" rx="7" fill={SOFT} /><W x={40} y={58} size={10}>0</W><W x={150} y={58} size={10}>11</W><W x={280} y={58} size={10}>24</W></>}
      {at === 2 && <><Car x={150} y={52} /><W x={194} y={56} size={16}>?</W></>}
      {at === 3 && <><Car x={140} y={52} /><rect x="198" y="30" width="22" height="26" rx="4" fill={INK} /><W x={209} y={48} size={13} fill={WHITE}>P</W><W x={150} y={82} size={10.5}>20 minutes' rest</W></>}
      {at === 4 && <><rect x="252" y="26" width="34" height="52" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="280" cy="54" r="2.5" fill={INK} /><W x={269} y={94} size={11}>GP</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SnQuit(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stops = [{ x: 36, t: "Quit" }, { x: 110, t: "72 hours" }, { x: 190, t: "28 days" }, { x: 268, t: "3 to 9 months" }];
  const lit = [[0], [0], [0], [1, 3], [2]][at];
  const caps = ["Smoking makes snoring more likely", "Smoking can make sleep apnoea worse", "Nicotine can keep you awake", "It's never too late to quit", "Free local help to stop smoking"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Smoking" title="Stop smoking, breathe easier at night" label="Smoking and snoring" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from the last cigarette to easier breathing">
      {at === 0 && <><rect x="120" y="50" width="70" height="12" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="120" y="50" width="16" height="12" fill={SOFT} /><rect x="190" y="50" width="10" height="12" fill={GOLD} /><Cross x={160} y={56} s={18} /></>}
      {at === 1 && <Lungs x={160} y={18} size={70} />}
      {at === 2 && <><Moon x={136} y={56} r={14} /><ellipse cx="190" cy="56" rx="16" ry="9" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="190" cy="56" r="4.5" fill={INK} /></>}
      {at === 3 && <><W x={110} y={98} size={10.5}>Easier breathing</W><W x={304} y={98} size={10.5} anchor="end">Coughs improving</W></>}
      {at === 4 && <W x={190} y={98} size={10.5}>5 times more likely to quit</W>}
      <path d="M36 122 H268" stroke={LINE} strokeWidth="4" />
      {stops.map((stop, index) => <g key={stop.t}>
        <circle cx={stop.x} cy="122" r="12" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={stop.x} y={152} size={10}>{stop.t}</W>
      </g>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function AirwayPieceView({ piece, ...props }: { piece: AirwayPiece } & PieceProps) {
  switch (piece) {
    case "bx-airways": return <BxAirways {...props} />;
    case "bx-cause-map": return <BxCauses {...props} />;
    case "bx-cough-line": return <BxCough {...props} />;
    case "bx-test-path": return <BxTests {...props} />;
    case "bx-huff-cycle": return <BxClearance {...props} />;
    case "bx-14-days": return <BxCourse {...props} />;
    case "bx-mist": return <BxMist {...props} />;
    case "bx-rehab-weeks": return <BxRehab {...props} />;
    case "bx-plan-sheet": return <BxPlan {...props} />;
    case "bx-shield": return <BxShield {...props} />;
    case "bx-colour-pots": return <BxPhlegm {...props} />;
    case "bx-pace-path": return <BxDaily {...props} />;
    case "pf-air-sacs": return <PfAirSacs {...props} />;
    case "pf-ild-tree": return <PfTypes {...props} />;
    case "pf-slow-start": return <PfSymptoms {...props} />;
    case "pf-stones": return <PfTests {...props} />;
    case "pf-two-slopes": return <PfSlowing {...props} />;
    case "pf-oxygen-gauge": return <PfOxygen {...props} />;
    case "pf-goal-hill": return <PfRehab {...props} />;
    case "pf-cough-cycle": return <PfCough {...props} />;
    case "pf-catch-breath": return <PfBreath {...props} />;
    case "pf-autumn-jabs": return <PfVaccines {...props} />;
    case "pf-flight-plan": return <PfTravel {...props} />;
    case "pf-support-web": return <PfSupport {...props} />;
    case "sn-throat": return <SnThroat {...props} />;
    case "sn-two-traces": return <SnTraces {...props} />;
    case "sn-volume-dial": return <SnCauses {...props} />;
    case "sn-sleep-diary": return <SnGpNotes {...props} />;
    case "sn-side-sleeper": return <SnSelfHelp {...props} />;
    case "sn-cause-device": return <SnDevices {...props} />;
    case "sn-nose": return <SnNose {...props} />;
    case "sn-last-step": return <SnSurgery {...props} />;
    case "sn-shared-bed": return <SnSharedBed {...props} />;
    case "sn-evening-line": return <SnRoutine {...props} />;
    case "sn-energy-day": return <SnTiredness {...props} />;
    case "sn-quit-line": return <SnQuit {...props} />;
    default: return null;
  }
}
