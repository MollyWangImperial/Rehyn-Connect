import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { BLOOD_PIECES, type BloodPiece } from "@/content/blood-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Lymphoma, Leukaemia and Myeloma pages' own pieces (content/blood-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Cancer & recovery pieces. Each is steered by the card's sections;
// pictures show ideas, calmly, and never anyone's own body, scans or results.

export const isBloodPiece = (piece: NewsPiece): piece is BloodPiece => (BLOOD_PIECES as readonly string[]).includes(piece);

const bodyCredit = "Illustration: Rehyn. A picture of the idea, not anyone's own body.";
const teamCredit = "Illustration: Rehyn. Always follow your own team's advice.";

/** The one-line caption for the chosen section. */
const Cap = ({ children, y = 206 }: { children: string; y?: number }) => <W x={160} y={y} size={11.5}>{children}</W>;
/** A labelled box; `lit` fills it. */
const Box = ({ x, y, width, text, lit = false, height = 28, size = 10.5 }: { x: number; y: number; width: number; text: string; lit?: boolean; height?: number; size?: number }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x + width / 2} y={y + height / 2 + 4} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A row of small day or month squares, the first `filled` of them filled. */
const Squares = ({ x, y, count, filled, size = 18, gap = 22, labels }: { x: number; y: number; count: number; filled: number; size?: number; gap?: number; labels?: string[] }) =>
  <g>{Array.from({ length: count }, (_, index) => <g key={index}>
    <rect x={x + index * gap} y={y} width={size} height={size} rx="4" fill={index < filled ? INK : WHITE} stroke={INK} strokeWidth="1.5" />
    {labels && <W x={x + index * gap + size / 2} y={y + size / 2 + 4} size={9.5} fill={index < filled ? WHITE : TEXT}>{labels[index]}</W>}
  </g>)}</g>;
const fade = (lit: boolean) => (lit ? 1 : 0.35);
/** A thermometer whose tube starts at (x, y), filled to `level` (0 to 1). */
const Thermo = ({ x, y, h = 110, level, hot = false }: { x: number; y: number; h?: number; level: number; hot?: boolean }) =>
  <g>
    <rect x={x - 11} y={y} width="22" height={h} rx="11" fill={WHITE} stroke={INK} strokeWidth="3" />
    <rect x={x - 5} y={y + 8 + (h - 8) * (1 - level)} width="10" height={(h - 8) * level + 4} rx="5" fill={hot ? GOLD : INK} />
    <circle cx={x} cy={y + h + 9} r="16" fill={hot ? GOLD : INK} stroke={INK} strokeWidth="2.5" />
  </g>;
/** A phone with a line or two of words on its screen. */
const Phone = ({ x, y, w = 60, h = 100, lit = false, lines = [] }: { x: number; y: number; w?: number; h?: number; lit?: boolean; lines?: string[] }) =>
  <g>
    <rect x={x - w / 2} y={y} width={w} height={h} rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
    <rect x={x - w / 2 + 6} y={y + 12} width={w - 12} height={h - 30} rx="4" fill={WHITE} stroke={LINE} strokeWidth="1.5" />
    <circle cx={x} cy={y + h - 9} r="3.5" fill={lit ? WHITE : INK} />
    {lines.map((line, index) => <W key={line} x={x} y={y + 12 + (h - 30) / 2 + 4 + (index - (lines.length - 1) / 2) * 15} size={10}>{line}</W>)}
  </g>;
/** A drip bag hanging from a hook at (x, y), with its tube running down 86 below. */
const Drip = ({ x, y, fill = WHITE }: { x: number; y: number; fill?: string }) =>
  <g>
    <path d={`M${x} ${y} V${y + 8}`} stroke={INK} strokeWidth="2.5" />
    <rect x={x - 16} y={y + 8} width="32" height="42" rx="8" fill={fill} stroke={INK} strokeWidth="2.5" />
    <path d={`M${x} ${y + 50} V${y + 60} M${x} ${y + 72} V${y + 86}`} stroke={INK} strokeWidth="2.5" />
    <rect x={x - 4} y={y + 60} width="8" height="12" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" />
  </g>;
/** A gold cross over something to check first. */
const Cross = ({ x, y, r = 22 }: { x: number; y: number; r?: number }) =>
  <path d={`M${x - r} ${y - r} L${x + r} ${y + r} M${x + r} ${y - r} L${x - r} ${y + r}`} stroke={GOLD} strokeWidth="4" strokeLinecap="round" />;
/** A Y-shaped antibody at (x, y), turned by `angle` degrees. */
const Antibody = ({ x, y, angle = 0, fill = INK, bent = false }: { x: number; y: number; angle?: number; fill?: string; bent?: boolean }) =>
  <path transform={`translate(${x} ${y}) rotate(${angle})`} d={bent ? "M0 0 V-10 M0 -10 L-6 -15 L-3 -20 M0 -10 L5 -16" : "M0 0 V-10 M0 -10 L-5 -16 M0 -10 L5 -16"} stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />;
/** A sun of radius r. */
const Sun = ({ x, y, r = 16, opacity = 1 }: { x: number; y: number; r?: number; opacity?: number }) =>
  <g opacity={opacity}><circle cx={x} cy={y} r={r} fill={GOLD} />{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 5) * Math.cos(a)} ${y + (r + 5) * Math.sin(a)} L${x + (r + 12) * Math.cos(a)} ${y + (r + 12) * Math.sin(a)}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}</g>;
/** A soft cloud centred on (x, y). */
const Cloud = ({ x, y, fill = TINT, opacity = 1 }: { x: number; y: number; fill?: string; opacity?: number }) =>
  <path opacity={opacity} d={`M${x - 34} ${y + 14} a16 16 0 0 1 6 -28 a22 22 0 0 1 40 -6 a16 16 0 0 1 20 20 a14 14 0 0 1 -6 14 Z`} fill={fill} stroke={SOFT} strokeWidth="2" />;

// ==== Lymphoma ==============================================================================================

const BODY = "M78 58 H102 C116 58 124 66 126 78 L134 126 L124 128 L116 88 V134 L112 184 H98 L92 142 H88 L82 184 H68 L64 134 V88 L56 128 L46 126 L54 78 C56 66 64 58 78 58 Z";

function LymNetwork(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const nodes = [[83, 66], [97, 66], [68, 84], [112, 84], [90, 98], [90, 116], [80, 132], [100, 132]];
  const surface = [0, 1, 2, 3, 6, 7];
  const cells: [number, number][] = [];
  for (let y = 66; y <= 110; y += 11) for (let x = 192; x <= 280; x += 11) if (((x - 236) / 50) ** 2 + ((y - 88) / 30) ** 2 <= 1) cells.push([x, y]);
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Where lymphoma starts, and why" label="What lymphoma is" credit={bodyCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body outline with the lymphatic network, lymph nodes and spleen, and what goes wrong">
      <circle cx="90" cy="40" r="14" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d={BODY} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M83 66 L90 98 L97 66 M68 84 L90 98 L112 84 M90 98 V116 L80 132 M90 116 L100 132" stroke={at === 1 ? INK : LINE} strokeWidth={at === 1 ? 2.5 : 2} fill="none" />
      <ellipse cx="108" cy="106" rx="6" ry="4" fill={at === 1 ? INK : SOFT} />
      {nodes.map(([x, y], index) => <circle key={index} cx={x} cy={y} r={at === 2 && index === 1 ? 8 : 4.5} fill={(at === 3 && surface.includes(index)) || (at === 2 && index === 1) ? GOLD : INK} stroke={WHITE} strokeWidth="1.5" />)}
      {at === 0 && <g>
        {[[192, 64], [236, 54], [280, 68]].map(([x, y]) => <g key={x}><circle cx={x} cy={y} r="18" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x + 2} cy={y - 1} r="11" fill={SOFT} /></g>)}
        <W x={236} y={112} size={11}>Lymphocytes</W>
        <W x={236} y={130} size={10}>White blood cells</W>
      </g>}
      {at === 1 && <Tags x={176} y={34} width={128} gap={34} labels={["Lymph vessels", "Lymph nodes", "Spleen", "Bone marrow"]} lit={() => true} />}
      {at === 2 && <g>
        <ellipse cx="236" cy="88" rx="56" ry="38" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {cells.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" fill={INK} />)}
        <W x={236} y={146} size={10.5}>Cells build up in a node</W>
      </g>}
      {at === 3 && <Tags x={176} y={48} width={120} gap={36} labels={["Neck", "Armpit", "Groin"]} lit={() => false} />}
      {at === 4 && <Tags x={170} y={60} width={136} gap={38} labels={["Cannot be caught", "Not passed on"]} lit={() => false} />}
      <Cap>{["Lymphocytes that grow out of control", "Tubes, nodes, spleen and bone marrow", "Cells that do not die when they should", "Painless lumps: neck, armpit, groin", "In most cases, there is no known cause"][at]}</Cap>
    </svg>} />;
}

function LymFamily(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [["hodgkin", "non"], ["hodgkin", "classical"], ["non"], ["high", "low"], ["high", "low"]][at];
  const box = (id: string, x: number, y: number, width: number, text: string) => <Box x={x} y={y} width={width} text={text} lit={lit.includes(id)} size={10} />;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Types" title="Hodgkin, non-Hodgkin, fast and slow" label="Types of lymphoma" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A family tree of lymphoma: Hodgkin and non-Hodgkin, then their main types">
      <path d="M160 46 V60 M80 60 H245 M80 60 V74 M245 60 V74 M80 102 V116 M44 116 H116 M44 116 V132 M116 116 V132 M245 102 V116 M204 116 H276 M204 116 V132 M276 116 V132" stroke={LINE} strokeWidth="2.5" fill="none" />
      <Box x={110} y={18} width={100} text="Lymphoma" size={11} />
      {box("hodgkin", 34, 74, 92, "Hodgkin")}
      {box("non", 194, 74, 102, "Non-Hodgkin")}
      {box("classical", 10, 132, 68, "Classical")}
      {box("nlphl", 82, 132, 68, "NLPHL")}
      {box("high", 170, 132, 68, "High grade")}
      {box("low", 242, 132, 68, "Low grade")}
      {at === 3 && <g>
        <path d="M186 168 l8 6 l-8 6 M198 168 l8 6 l-8 6 M210 168 l8 6 l-8 6" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {[262, 272, 282, 292].map(x => <circle key={x} cx={x} cy={174} r="2.5" fill={SOFT} />)}
      </g>}
      {at === 4 && <g><W x={204} y={176} size={9.5}>Diffuse large</W><W x={204} y={188} size={9.5}>B cell</W><W x={276} y={176} size={9.5}>Follicular</W></g>}
      <Cap>{["Two groups, by how the cells look", "Classical is the most common type", "Over 60 types; most from B cells", "High grade: fast. Low grade: slow.", "Your team will tell you which type"][at]}</Cap>
    </svg>} />;
}

function LymDiaphragm(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const dots = (cx: number, stage: number) => stage === 1 ? [[cx - 8, 40]] : stage === 2 ? [[cx - 8, 40], [cx + 8, 46]] : [[cx - 8, 40], [cx + 8, 70]];
  const items = ["Biopsy", "Results", "PET scan", "A or B"];
  const litItem = [0, 1, 2, -1, 3][at];
  const icon = (index: number, x: number, y: number, c: string) => {
    if (index === 0) return <g><path d={`M${x - 13} ${y + 13} L${x + 6} ${y - 6}`} stroke={c} strokeWidth="6" strokeLinecap="round" /><path d={`M${x + 6} ${y - 6} L${x + 15} ${y - 15}`} stroke={c} strokeWidth="2.5" strokeLinecap="round" /></g>;
    if (index === 1) return <Clock x={x} y={y} r={15} hand={2.4} />;
    if (index === 2) return <g><circle cx={x} cy={y} r="13" fill="none" stroke={c} strokeWidth="5" />{at === 2 && [[-4, -3], [5, 4]].map(([dx, dy]) => <circle key={dx} cx={x + dx} cy={y + dy} r="3" fill={GOLD} />)}</g>;
    return <W x={x} y={y + 6} size={15} fill={c} serif>A/B</W>;
  };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tests" title="Biopsy, scans and the stage, explained" label="Tests and staging" credit="Illustration: Rehyn. A picture of the idea, not anyone's own results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four small body outlines showing stages 1 to 4 around the diaphragm, and the tests along the way">
      {[1, 2, 3, 4].map((stage, index) => { const px = 16 + index * 74, cx = px + 33; return <g key={stage} opacity={at === 3 ? 1 : 0.45}>
        <rect x={px} y="14" width="66" height="90" rx="8" fill={WHITE} stroke={at === 3 ? INK : LINE} strokeWidth="2" />
        <ellipse cx={cx} cy="52" rx="20" ry="30" fill={TINT} stroke={INK} strokeWidth="2" />
        <path d={`M${cx - 24} 56 H${cx + 24}`} stroke={SOFT} strokeWidth="2" strokeDasharray="4 3" />
        {stage === 4 && <ellipse cx={cx - 6} cy="72" rx="7" ry="5" fill={GOLD} stroke={INK} strokeWidth="1.5" />}
        {dots(cx, stage).map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={GOLD} stroke={INK} strokeWidth="1.5" />)}
        <W x={cx} y={98} size={10}>Stage {stage}</W>
      </g>; })}
      {items.map((item, index) => { const x = 46 + index * 76, on = litItem === index; return <g key={item} opacity={fade(on)}>
        <circle cx={x} cy="136" r="23" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, x, 136, on ? WHITE : INK)}
        <W x={x} y={176} size={10}>{item}</W>
      </g>; })}
      <Cap>{["Usually, only a biopsy can confirm it", "Results usually within 2 weeks", "Lymphoma shows as hot spots on PET", "4 stages, around the diaphragm", "B: night sweats, fevers, weight loss"][at]}</Cap>
    </svg>} />;
}

function LymWatch(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Watch and wait" title="Watched, not waiting" label="Watch and wait" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year of months with a few check-ups, a toolbox of treatment for when it is needed, and a phone">
      {months.map((month, index) => { const on = at === 2 && index % 3 === 0; return <g key={index} opacity={at === 2 ? 1 : 0.5}>
        <rect x={16 + index * 24.5} y="20" width="20" height="22" rx="4" fill={on ? INK : WHITE} stroke={INK} strokeWidth="1.5" />
        <W x={26 + index * 24.5} y={35} size={9.5} fill={on ? WHITE : TEXT}>{month}</W>
      </g>; })}
      <g opacity={fade(at === 0)}>
        <rect x="30" y="86" width="80" height="50" rx="7" fill={at === 0 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M56 86 V76 H84 V86" fill="none" stroke={INK} strokeWidth="3" />
        <path d="M30 104 H110" stroke={at === 0 ? WHITE : INK} strokeWidth="2" />
        <W x={70} y={154} size={10}>Treatment,</W><W x={70} y={168} size={10}>when needed</W>
      </g>
      <g opacity={fade(at === 3)}>
        <Phone x={282} y={70} w={44} h={76} lit={at === 3} />
        <W x={282} y={166} size={10}>Your team</W>
      </g>
      {at === 1 && <Tags x={130} y={78} width={110} gap={36} labels={["Low grade", "Slow growing"]} lit={() => true} />}
      {at === 2 && <path d="M150 110 l14 14 l28 -32" stroke={GOLD} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      {at === 3 && <path d="M160 108 H236 M226 98 L238 108 L226 118" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      {at === 4 && <g><Person x={160} y={164} scale={1.1} /><Bubble x={196} y={86} text="A long-term illness" width={128} /></g>}
      <Cap>{["Treatment offered when you need it", "For slow-growing, low-grade types", "Between 1 and 4 check-ups a year", "New symptoms? Contact your team", "Many people adapt well"][at]}</Cap>
    </svg>} />;
}

function LymAntibody(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatment" title="Three treatments, one plan" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A lymphoma cell, with antibodies, chemotherapy cycles and radiotherapy beams around it">
      <circle cx="92" cy="100" r="40" fill={WHITE} stroke={INK} strokeWidth="3" />
      <circle cx="96" cy="96" r="18" fill={SOFT} />
      {at === 2 && [0, 60, 120, 180, 240, 300].map(angle => { const r = (angle - 90) * Math.PI / 180; return <Antibody key={angle} x={92 + 41 * Math.cos(r)} y={100 + 41 * Math.sin(r)} angle={angle} fill={GOLD} />; })}
      {at === 3 && <path d="M304 40 L136 94 M304 100 L136 100 M304 160 L136 106" stroke={GOLD} strokeWidth="3" strokeDasharray="7 5" />}
      {at === 0 && <Tags x={180} y={46} width={124} gap={36} labels={["Chemotherapy", "Antibodies", "Radiotherapy"]} lit={() => true} />}
      {at === 1 && <g><Drip x={240} y={24} /><Squares x={178} y={134} count={6} filled={4} size={18} gap={22} labels={["1", "2", "3", "4", "5", "6"]} /></g>}
      {at === 2 && <g><W x={246} y={92} size={15} serif>Rituximab</W><W x={246} y={114} size={10.5}>sticks to CD20</W></g>}
      {at === 4 && <g><Drip x={244} y={30} fill={GOLD} /><W x={244} y={140} size={10.5}>Stem cells</W></g>}
      <Cap>{["A plan made with your specialist team", "Usually 4 to 6 cycles, into a vein", "Rituximab: an antibody for CD20", "Sessions of around 10 to 20 minutes", "Healthy cells replace damaged ones"][at]}</Cap>
    </svg>} />;
}

function LymTemperature(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Infections" title="A temperature is never wait-and-see" label="Infections" credit={teamCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A thermometer beside the days after chemotherapy, the signs of infection and who to call">
      <Thermo x={46} y={24} h={118} level={[0.4, 0.82, 0.82, 0.88, 0.45][at]} hot={at >= 1 && at <= 3} />
      {at === 0 && <g>
        {Array.from({ length: 21 }, (_, index) => { const on = index >= 6 && index <= 13; return <g key={index}>
          <rect x={106 + (index % 7) * 28} y={34 + Math.floor(index / 7) * 30} width="22" height="22" rx="4" fill={on ? INK : WHITE} stroke={INK} strokeWidth="1.5" />
          <W x={117 + (index % 7) * 28} y={49 + Math.floor(index / 7) * 30} size={9.5} fill={on ? WHITE : TEXT}>{index + 1}</W>
        </g>; })}
        <W x={205} y={144} size={10.5}>Days after chemotherapy</W>
      </g>}
      {at === 1 && <Tags x={110} y={30} width={180} gap={34} labels={["Above 38°C or below 35°C", "Chills, sweats, shivering", "Sore throat or cough", "Feeling generally unwell"]} lit={index => index === 0} />}
      {at === 2 && <g>
        <Phone x={160} y={28} w={64} h={108} lit lines={["Day or", "night"]} />
        <path d="M196 82 H244 M234 72 L246 82 L234 92" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="256" y="48" width="44" height="74" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M278 66 V86 M268 76 H288" stroke={INK} strokeWidth="4" />
        <W x={160} y={160} size={10}>Your team</W><W x={278} y={140} size={10}>Hospital</W>
      </g>}
      {at === 3 && <g>
        <Box x={120} y={44} width={76} height={36} text="999" lit size={14} />
        <Box x={212} y={44} width={76} height={36} text="A&E" size={13} />
        <Box x={120} y={100} width={168} text="Do not drive to A&E" />
      </g>}
      {at === 4 && <g>
        <path d="M130 52 H170 V64 H184 V80 H170" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        {[94, 108].map(y => <circle key={y} cx={177} cy={y} r="3.5" fill={SOFT} />)}
        <rect x="208" y="54" width="86" height="56" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="208" y="54" width="86" height="16" rx="6" fill={INK} />
        <W x={251} y={94} size={10}>Medical card</W>
      </g>}
      <Cap>{["Highest risk: 7 to 14 days after chemo", "Signs of infection to act on", "Call your team now. Don't wait.", "Sepsis signs: call 999 or go to A&E", "Wash hands; carry your medical card"][at]}</Cap>
    </svg>} />;
}

function LymEnergy(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const level = [0.2, 0.25, 0.35, 0.5, 0.62][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tiredness" title="Tired in a new way" label="Tiredness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A jar of energy that rest fills and tasks spend, with a walking shoe">
      <rect x="34" y="50" width="96" height="112" rx="16" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M68 50 H96" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <rect x="41" y={155 - 98 * level} width="82" height={98 * level} rx="10" fill={at === 0 ? SOFT : INK} />
      <W x={82} y={78} size={11}>Energy</W>
      {at === 0 && <g><path d="M160 96 C180 56, 204 136, 228 84 S270 118, 300 70" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" /><W x={160} y={150} size={10} anchor="start">Morning</W><W x={300} y={150} size={10} anchor="end">Evening</W></g>}
      {at === 1 && <Tags x={170} y={28} width={130} gap={34} labels={["Treatment", "Infection", "Worry", "Anaemia"]} lit={() => false} />}
      {at === 2 && <g>{Array.from({ length: 12 }, (_, index) => <rect key={index} x={156 + index * 12.4} y="74" width="10" height="24" rx="3" fill={INK} opacity={1 - index * 0.07} />)}<W x={230} y={122} size={10.5}>Months after treatment</W></g>}
      {at === 3 && <g>
        <circle cx="82" cy="24" r="9" fill={GOLD} stroke={INK} strokeWidth="1.5" /><path d="M82 35 V45" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        <Tags x={160} y={56} width={140} gap={38} labels={["Rest adds to it", "Tasks draw on it"]} lit={index => index === 0} />
      </g>}
      {at === 4 && <g><path d="M186 112 L190 84 L212 84 L218 96 C236 98 262 100 272 112 V122 H186 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><path d="M186 122 H272" stroke={INK} strokeWidth="5" /><W x={230} y={150} size={10.5}>Short walks first</W></g>}
      <Cap>{["Exhaustion beyond usual tiredness", "Treatment, infection, worry, anaemia", "Can take many months to ease", "Rest adds energy; tasks take it out", "Walking quickly can ease fatigue"][at]}</Cap>
    </svg>} />;
}

function LymLater(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const labels = ["Summary", "Heart", "Thyroid", "Vaccines", "Alert card"];
  const icon = (index: number, x: number, y: number, c: string) => {
    if (index === 0) return <g><rect x={x - 10} y={y - 13} width="20" height="26" rx="2" fill="none" stroke={c} strokeWidth="2.5" />{[-5, 1, 7].map(dy => <path key={dy} d={`M${x - 5} ${y + dy} H${x + 5}`} stroke={c} strokeWidth="2" />)}</g>;
    if (index === 1) return <HeartShape x={x} y={y + 2} size={28} fill="none" stroke={c} width={2.5} />;
    if (index === 2) return <g><ellipse cx={x - 7} cy={y} rx="7" ry="10" fill="none" stroke={c} strokeWidth="2.5" /><ellipse cx={x + 7} cy={y} rx="7" ry="10" fill="none" stroke={c} strokeWidth="2.5" /></g>;
    if (index === 3) return <g transform={`rotate(-40 ${x} ${y})`}><rect x={x - 5} y={y - 12} width="10" height="20" rx="2" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x} ${y + 8} V${y + 16} M${x - 6} ${y - 14} H${x + 6}`} stroke={c} strokeWidth="2.5" /></g>;
    return <g><rect x={x - 13} y={y - 9} width="26" height="18" rx="3" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x} ${y - 5} V${y + 5} M${x - 5} ${y} H${x + 5}`} stroke={c} strokeWidth="2.5" /></g>;
  };
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Late effects" title="The effects that come later" label="Late effects" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline running on from the end of treatment, with the late effects to know about along it">
      <W x={20} y={30} size={10} anchor="start">End of treatment</W><W x={300} y={30} size={10} anchor="end">Years later</W>
      <path d="M20 84 H296 M288 76 L298 84 L288 92" stroke={LINE} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {labels.map((label, index) => { const x = 40 + index * 60, on = at === index; return <g key={label} opacity={fade(on)}>
        <circle cx={x} cy="84" r="22" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, x, 84, on ? WHITE : INK)}
        <W x={x} y={124} size={10}>{label}</W>
      </g>; })}
      {at === 1 && ["Breathless", "Cough", "Wheezing"].map((label, index) => <Box key={label} x={14 + index * 98} y={146} width={94} text={label} size={10} />)}
      {at === 3 && <Box x={80} y={146} width={160} text="Ask before any vaccine" />}
      {at === 4 && <Box x={80} y={146} width={160} text="Irradiated blood only" lit />}
      <Cap>{["Your treatment summary lists them", "Breathless or wheezy? Tell your team", "Neck radiotherapy: yearly thyroid test", "Signs of infection? Get it treated", "Irradiated blood; carry the alert card"][at]}</Cap>
    </svg>} />;
}

function LymCheckupGrid(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const visit = (row: number, month: number) => row < 2 ? month % 3 === 0 : month === 6;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="Check-ups that fit you" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three years of months, with check-ups every few months at first and fewer later">
      {[0, 1, 2].map(row => <g key={row} opacity={at === 1 ? 1 : 0.55}>
        <W x={18} y={36 + row * 22} size={10} anchor="start">Year {row + 1}</W>
        {Array.from({ length: 12 }, (_, month) => <rect key={month} x={66 + month * 19.5} y={24 + row * 22} width="16" height="16" rx="3" fill={visit(row, month) ? (row === 2 ? SOFT : INK) : WHITE} stroke={INK} strokeWidth="1.2" strokeDasharray={row === 2 && visit(row, month) ? "3 2" : undefined} />)}
      </g>)}
      {at === 0 && <g><rect x="118" y="100" width="84" height="82" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={160} y={120} size={10}>Treatment</W><W x={160} y={134} size={10}>summary</W>{[150, 162, 174].map(y => <path key={y} d={`M132 ${y} H188`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}</g>}
      {at === 1 && <Clock x={160} y={136} r={26} hand={Math.PI / 2} />}
      {at === 2 && <g><Person x={84} y={170} scale={1.2} /><Tags x={134} y={110} width={160} gap={36} labels={["Talk about how you are", "Maybe blood tests"]} lit={index => index === 0} /></g>}
      {at === 3 && <g><Tags x={30} y={100} width={150} gap={29} labels={["New lumps", "Night sweats", "Fevers over 38°C"]} lit={() => false} /><Phone x={250} y={98} w={56} h={84} lit lines={["Your", "team"]} /></g>}
      {at === 4 && <g>
        <rect x="70" y="102" width="72" height="80" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[120, 136, 152, 168].map(y => <path key={y} d={`M82 ${y} H130`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
        <Person x={204} y={174} scale={1.1} /><Person x={248} y={174} scale={1.1} fill={SOFT} />
      </g>}
      <Cap>{["A summary for you and your GP", "Every 3 months or so at first", "Usually talking and bloods, not scans", "New lumps or sweats? Call your team", "Nervous beforehand? That is natural"][at]}</Cap>
    </svg>} />;
}

function LymSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work" title="Back to work, on your terms" label="Work and money" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The Equality Act, weeks of work hours growing step by step, and a grant">
      <g opacity={fade(at === 1)}><path d="M18 22 H70 L86 38 V102 H18 Z" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><W x={52} y={60} size={10} fill={at === 1 ? WHITE : TEXT}>Equality</W><W x={52} y={76} size={10} fill={at === 1 ? WHITE : TEXT}>Act 2010</W></g>
      <g opacity={fade(at === 2 || at === 0)}>{[20, 34, 48, 62].map((h, index) => <g key={h}><rect x={116 + index * 26} y={102 - h} width="20" height={h} rx="4" fill={at === 2 ? INK : SOFT} /><W x={126 + index * 26} y={116} size={9.5}>W{index + 1}</W></g>)}</g>
      <g opacity={fade(at === 3)}><circle cx="262" cy="60" r="26" fill={at === 3 ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" /><W x={262} y={68} size={22} serif>£</W></g>
      {at === 0 && ["Your health", "Your role", "Physical work"].map((label, index) => <Box key={label} x={14 + index * 98} y={140} width={94} text={label} size={10} />)}
      {at === 1 && <Box x={70} y={140} width={180} text="From diagnosis, for life" lit />}
      {at === 2 && ["Phased return", "Extra breaks", "Other hours"].map((label, index) => <Box key={label} x={14 + index * 98} y={140} width={94} text={label} lit size={10} />)}
      {at === 3 && <Box x={70} y={140} width={180} text="A grant: not paid back" lit />}
      {at === 4 && <g><Box x={30} y={140} width={60} text="PIP" /><Box x={100} y={140} width={60} text="ESA" /><Box x={170} y={140} width={120} text="Universal Credit" /></g>}
      <Cap>{["Don't over-commit when you go back", "Cancer counts as a disability in law", "Phased return, breaks, other hours", "Access to Work grants: not repaid", "Free advice: Macmillan 0808 808 0000"][at]}</Cap>
    </svg>} />;
}

function LymFork(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fertility" title="Talk about fertility first" label="Fertility" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path that forks before treatment, one way past a freezer for stored sperm, eggs or embryos, both ending at a pram">
      <path d="M20 120 H258" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      <path d="M84 120 C108 120 110 64 146 64 H204 C238 64 238 120 258 120" stroke={LINE} strokeWidth="4" strokeDasharray="6 5" fill="none" />
      <Person x={36} y={106} scale={0.9} fill={at === 0 ? INK : SOFT} />
      <g opacity={fade(at === 1 || at === 3)}><rect x="150" y="100" width="60" height="40" rx="8" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={180} y={124} size={10} fill={at === 1 ? WHITE : TEXT}>Treatment</W></g>
      <g opacity={fade(at === 2)}>
        <rect x="150" y="46" width="50" height="38" rx="6" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M175 54 V76 M165 59 L185 71 M185 59 L165 71" stroke={at === 2 ? WHITE : INK} strokeWidth="2.5" strokeLinecap="round" />
        <W x={175} y={34} size={10}>{at === 2 ? "Sperm, eggs, embryos" : "Stored"}</W>
      </g>
      <g opacity={fade(at === 4)}>
        <path d="M266 100 H302 C302 116 292 122 284 122 C276 122 266 116 266 100 Z" fill={at === 4 ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M266 100 C266 86 282 82 290 100" fill="none" stroke={INK} strokeWidth="2.5" />
        <circle cx="272" cy="130" r="5" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx="296" cy="130" r="5" fill={WHITE} stroke={INK} strokeWidth="2" />
      </g>
      {at === 0 && <Bubble x={92} y={52} text="Before treatment" width={120} />}
      {at === 1 && <W x={180} y={160} size={10}>Not all drugs</W>}
      {at === 3 && <g><Squares x={214} y={150} count={3} filled={3} size={14} gap={18} labels={["1", "2", "3"]} /><W x={240} y={182} size={10}>months</W></g>}
      <Cap>{["Talk to your team before treatment", "Not all chemo affects fertility", "Sperm, eggs or embryos can be stored", "Contraception: during and after", "Try naturally first, then get advice"][at]}</Cap>
    </svg>} />;
}

function LymWeather(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const walker = [[44, 156], [104, 138], [164, 124], [226, 134], [286, 122]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="Living alongside the worry" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path walking out from under a cloud towards the sun, with support along the way">
      <Cloud x={62} y={34} fill={at === 0 ? SOFT : TINT} opacity={at <= 1 ? 1 : 0.4} />
      <Cloud x={160} y={36} opacity={at >= 1 && at <= 2 ? 0.9 : 0.35} />
      <Sun x={262} y={36} r={14} opacity={0.4 + at * 0.15} />
      <path d="M20 172 C80 160 100 126 160 132 S250 156 300 128" stroke={LINE} strokeWidth="10" fill="none" strokeLinecap="round" />
      <circle cx={walker[0]} cy={walker[1] - 12} r="8" fill={INK} />
      {at === 0 && ["Shock", "Fear", "Low mood"].map((label, index) => <Box key={label} x={30 + index * 90} y={74} width={80} height={26} text={label} size={10} />)}
      {at === 1 && <Clock x={160} y={90} r={18} hand={2} />}
      {at === 2 && ["Talk", "Keep active", "Nature"].map((label, index) => <Box key={label} x={30 + index * 90} y={74} width={80} height={26} text={label} lit size={10} />)}
      {at === 3 && <g><Box x={100} y={72} width={130} height={28} text="Your nurse or GP" lit /><path d="M200 152 H250 M206 152 V164 M244 152 V164 M200 144 H250" stroke={INK} strokeWidth="3" strokeLinecap="round" /></g>}
      {at === 4 && ["111", "116 123", "999"].map((label, index) => <Box key={label} x={60 + index * 70} y={72} width={64} height={26} text={label} lit={index === 1} size={10.5} />)}
      <Cap>{["No typical or right way to feel", "These feelings can ease over time", "Stay connected and keep active", "Your nurse or GP can refer you", "111, Samaritans 116 123, or 999"][at]}</Cap>
    </svg>} />;
}

// ==== Leukaemia =============================================================================================

const BONE = "M40 70 C24 56 12 78 26 88 C12 100 24 122 40 108 H140 C156 122 168 100 154 88 C168 78 156 56 140 70 Z";

function LeukMarrow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots = [[56, 82], [72, 94], [88, 82], [104, 94], [120, 82], [64, 100], [96, 100], [128, 98]];
  const crowd = Array.from({ length: 18 }, (_, index) => [50 + (index % 9) * 10.5, 82 + Math.floor(index / 9) * 13]);
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Inside the bone marrow's blood factory" label="What leukaemia is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bone with marrow inside, and a stem cell growing into red cells, white cells and platelets">
      <path d={BONE} fill={WHITE} stroke={INK} strokeWidth={at === 0 ? 3.5 : 2.5} strokeLinejoin="round" />
      <rect x="44" y="76" width="92" height="28" rx="10" fill={TINT} />
      {at === 2 ? crowd.map(([x, y], index) => <path key={index} d={`M${x - 4} ${y} q2 -6 6 -4 q5 2 2 7 q-3 4 -8 -3 Z`} fill={GOLD} stroke={INK} strokeWidth="1" />)
        : spots.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={SOFT} />)}
      <W x={90} y={142} size={10.5}>Bone marrow</W>
      {at <= 2 && <g opacity={at === 0 ? 0.45 : 1}>
        <circle cx="232" cy="38" r="13" fill={SOFT} stroke={INK} strokeWidth="2" /><W x={252} y={42} size={10} anchor="start">Stem cell</W>
        <path d="M232 51 L186 112 M232 51 V112 M232 51 L282 112" stroke={LINE} strokeWidth="2.5" />
        <ellipse cx="186" cy="126" rx="15" ry="10" fill={SOFT} stroke={INK} strokeWidth="2" /><ellipse cx="186" cy="126" rx="6" ry="4" fill={TINT} />
        <circle cx="234" cy="126" r="13" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M228 124 q3 -6 6 0 q3 6 6 0" stroke={INK} strokeWidth="2.5" fill="none" />
        {[[276, 122], [286, 130], [280, 134]].map(([x, y]) => <path key={x} d={`M${x - 4} ${y} l3 -4 l5 2 l-1 5 Z`} fill={INK} />)}
        {at === 2 && [[216, 150], [234, 156], [252, 150]].map(([x, y]) => <path key={x} d={`M${x - 7} ${y} q3 -9 9 -6 q7 3 3 10 q-5 6 -12 -4 Z`} fill={GOLD} stroke={INK} strokeWidth="1.5" />)}
        {at !== 2 && <g><W x={186} y={160} size={10}>Red</W><W x={234} y={160} size={10}>White</W><W x={282} y={160} size={10}>Platelets</W></g>}
      </g>}
      {at === 3 && <g><Box x={180} y={52} width={124} text="Acute: a few weeks" lit /><Box x={180} y={96} width={124} text="Chronic: slowly" /></g>}
      {at === 4 && <g>
        <path d="M196 40 C216 60, 236 20, 256 40 S296 20, 300 40 M196 70 C216 50, 236 90, 256 70 S296 90, 300 70" stroke={INK} strokeWidth="3" fill="none" />
        {[206, 226, 246, 266, 286].map(x => <path key={x} d={`M${x} 48 V62`} stroke={SOFT} strokeWidth="3" />)}
        <Box x={180} y={100} width={124} text="Happen in a lifetime" size={10} />
      </g>}
      <Cap>{["Blood cells are made in the marrow", "Red cells, white cells and platelets", "Abnormal cells crowd the marrow", "Chronic grows slowly; acute, fast", "Gene changes are not passed on"][at]}</Cap>
    </svg>} />;
}

function LeukGrid(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const cells = [{ t: "AML", col: 0, row: 0 }, { t: "ALL", col: 1, row: 0 }, { t: "CML", col: 0, row: 1 }, { t: "CLL", col: 1, row: 1 }];
  const litCell = ["", "AML", "ALL", "CLL", "CML"][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Types" title="Acute or chronic: four main types" label="Types of leukaemia" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A grid of the four main types: acute or chronic, myeloid or lymphoid">
      <W x={150} y={34} size={10.5}>Myeloid</W><W x={250} y={34} size={10.5}>Lymphoid</W>
      {[{ t: "Acute", sub: "Fast", y: 46 }, { t: "Chronic", sub: "Slow", y: 114 }].map(row => <g key={row.t}>
        <rect x="14" y={row.y} width="82" height="58" rx="9" fill={at === 0 ? INK : TINT} />
        <W x={55} y={row.y + 27} size={11} fill={at === 0 ? WHITE : TEXT}>{row.t}</W><W x={55} y={row.y + 43} size={10} fill={at === 0 ? WHITE : TEXT}>{row.sub}</W>
      </g>)}
      {cells.map(cell => { const x = 105 + cell.col * 100, y = 46 + cell.row * 68, on = litCell === cell.t, raise = (on && (cell.t === "CML" || cell.t === "CLL")) ? 8 : 0; return <g key={cell.t} opacity={at === 0 || on ? 1 : 0.45}>
        <rect x={x} y={y} width="90" height="58" rx="9" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x + 45} y={y + 37 - raise} size={22} fill={on ? WHITE : TEXT} serif>{cell.t}</W>
        {on && cell.t === "CML" && <Pill x={x + 45} y={y + 46} fill={GOLD} />}
        {on && cell.t === "CLL" && <W x={x + 45} y={y + 50} size={9.5} fill={WHITE}>Most common</W>}
      </g>; })}
      <Cap>{["Named by cell type and speed", "AML: fast; treated straight away", "ALL: most common in young children", "CLL: the most common, slow type", "CML: most take a daily tablet"][at]}</Cap>
    </svg>} />;
}

function LeukBiopsy(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tests" title="Blood test, bone marrow, then answers" label="Tests" credit="Illustration: Rehyn. A picture of the idea, not anyone's own test."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Blood test tubes, a person lying curled on their side for a bone marrow test, a clock and a calendar">
      <g opacity={at === 1 || at === 2 ? 1 : 0.4}>
        <path d="M118 152 H262 M126 152 V170 M254 152 V170" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <circle cx="136" cy="128" r="10" fill={INK} />
        <path d="M150 134 L204 136" stroke={INK} strokeWidth="16" strokeLinecap="round" />
        <path d="M206 136 L188 114 L216 106" stroke={INK} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {at === 1 && <circle cx="210" cy="128" r="6" fill={GOLD} stroke={WHITE} strokeWidth="2" />}
      </g>
      {at === 0 && <g>{[40, 64, 88].map((x, index) => <g key={x}><rect x={x - 7} y="30" width="14" height="52" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 4} y="58" width="8" height="21" rx="4" fill={index === 1 ? GOLD : SOFT} /><rect x={x - 9} y="24" width="18" height="10" rx="3" fill={INK} /></g>)}<W x={64} y={104} size={10}>Full blood count</W></g>}
      {at === 1 && <Clock x={276} y={58} r={24} hand={2.6} />}
      {at === 2 && <g><Tags x={20} y={24} width={96} gap={32} labels={["Not much", "Pulling", "Painful"]} lit={() => false} /><Box x={200} y={36} width={104} text="Painkillers" size={10} /></g>}
      {at === 3 && <g>
        <path d="M30 34 C46 50, 62 18, 78 34 S110 18, 116 34 M30 62 C46 46, 62 78, 78 62 S110 78, 116 62" stroke={INK} strokeWidth="3" fill="none" />
        {[40, 56, 72, 88, 104].map(x => <path key={x} d={`M${x} 40 V56`} stroke={GOLD} strokeWidth="3" />)}
        <W x={73} y={94} size={10}>Gene tests</W>
      </g>}
      {at === 4 && <g><Squares x={18} y={28} count={7} filled={7} size={12} gap={14.5} /><Squares x={18} y={44} count={7} filled={7} size={12} gap={14.5} /><W x={64} y={78} size={10}>1 or 2 weeks</W></g>}
      <Cap>{["A full blood count comes first", "20 to 30 mins; usually home same day", "Some feel little; the hip may ache", "Gene tests help pick treatment", "Bone marrow results: 1 or 2 weeks"][at]}</Cap>
    </svg>} />;
}

/** A small dial at (x, y), its needle at `value` (0 to 1); `band` marks a range around it. */
const Dial = ({ x, y, value, lit = false, band = false, r = 26 }: { x: number; y: number; value: number; lit?: boolean; band?: boolean; r?: number }) => {
  const a = Math.PI * (1 - value), a1 = Math.PI * (1 - Math.max(0, value - 0.15)), a2 = Math.PI * (1 - Math.min(1, value + 0.15));
  return <g opacity={lit ? 1 : 0.55}>
    <path d={`M${x - r} ${y} A${r} ${r} 0 0 1 ${x + r} ${y}`} fill="none" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
    {band && <path d={`M${x + r * Math.cos(a1)} ${y - r * Math.sin(a1)} A${r} ${r} 0 0 1 ${x + r * Math.cos(a2)} ${y - r * Math.sin(a2)}`} fill="none" stroke={GOLD} strokeWidth="8" />}
    <path d={`M${x} ${y} L${x + (r - 6) * Math.cos(a)} ${y - (r - 6) * Math.sin(a)}`} stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
    <circle cx={x} cy={y} r="4.5" fill={INK} />
  </g>;
};

function LeukDials(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const names = ["Haemoglobin", "White cells", "Neutrophils", "Platelets"];
  const values = at === 1 ? [0.3, 0.5, 0.18, 0.3] : at === 3 ? [0.5, 0.18, 0.18, 0.5] : [0.5, 0.5, 0.5, 0.5];
  const lit = (index: number) => at === 0 || at === 4 || (at === 1 && index !== 1) || (at === 3 && index === 1);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Blood counts" title="Four numbers worth understanding" label="Blood counts" credit="Illustration: Rehyn. A picture of the idea, not anyone's own results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four dials for haemoglobin, white cells, neutrophils and platelets">
      <W x={160} y={26} size={11}>Full blood count</W>
      {names.map((name, index) => { const x = 46 + index * 76; return <g key={name}>
        <Dial x={x} y={72} value={values[index]} lit={lit(index)} band={at === 4} />
        <W x={x} y={98} size={10}>{name}</W>
      </g>; })}
      {at === 1 && <g><Box x={10} y={116} width={72} text="Anaemia" size={10} /><Box x={158} y={116} width={80} text="Neutropenia" lit size={10} /></g>}
      {at === 2 && <g><Box x={30} y={118} width={120} text="-penia: low" lit /><Box x={170} y={118} width={120} text="-sis: too many" lit /><W x={90} y={170} size={10}>Neutropenic</W><W x={230} y={170} size={10}>Leukocytosis</W></g>}
      {at === 3 && <g>
        <rect x="102" y="118" width="76" height="60" fill={TINT} />
        <path d="M30 126 C80 126, 100 172, 140 172 S220 126, 290 126" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <W x={140} y={162} size={10}>Nadir</W><W x={30} y={118} size={9.5} anchor="start">Chemo</W>
      </g>}
      {at === 4 && <Box x={90} y={128} width={140} text="Your own ranges" lit />}
      <Cap>{["One test counts each kind of cell", "Low neutrophils: higher infection risk", "-penia means low; -sis, too many", "Lowest 7 to 14 days after chemo", "Ask your team for your own ranges"][at]}</Cap>
    </svg>} />;
}

function LeukRange(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stops = [{ x: 54, t: "Tablets" }, { x: 160, t: "Chemo" }, { x: 266, t: "Hospital" }];
  const litStop = (index: number) => at === 1 ? index > 0 : at === 2 ? index === 0 : false;
  const icon = (index: number, x: number, c: string) => {
    if (index === 0) return <Pill x={x} y={88} fill={c === WHITE ? GOLD : INK} />;
    if (index === 1) return <g><rect x={x - 9} y={70} width="18" height="22" rx="4" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x} 92 V106`} stroke={c} strokeWidth="2.5" /></g>;
    return <path d={`M${x - 18} 100 V78 M${x - 18} 92 H${x + 18} V100 M${x - 12} 86 h10`} stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" />;
  };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatment" title="From a daily tablet to intensive chemo" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A scale from daily tablets to intensive chemotherapy in hospital, and the team who plans it">
      <W x={30} y={24} size={10} anchor="start">Daily tablets</W><W x={290} y={24} size={10} anchor="end">Intensive</W>
      <rect x="30" y="32" width="260" height="10" rx="5" fill={LINE} />
      <rect x="30" y="32" width={at === 1 ? 260 : at === 2 ? 70 : 0} height="10" rx="5" fill={INK} />
      {stops.map((stop, index) => { const on = litStop(index); return <g key={stop.t} opacity={fade(on || at === 0)}>
        <circle cx={stop.x} cy="88" r="26" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, stop.x, on ? WHITE : INK)}
        <W x={stop.x} y={130} size={10}>{stop.t}</W>
      </g>; })}
      {at === 0 && [120, 160, 200].map((x, index) => <Person key={x} x={x} y={178} scale={0.7} fill={index === 1 ? INK : SOFT} />)}
      {at === 1 && <g><Box x={20} y={146} width={134} text="Intensive: hospital" size={10} /><Box x={166} y={146} width={134} text="Non-intensive: home" size={10} /></g>}
      {at === 2 && <g><Box x={20} y={146} width={134} text="CML: daily TKI" lit size={10} /><Box x={166} y={146} width={134} text="CLL: may wait" size={10} /></g>}
      {at === 3 && ["Antibiotics", "Transfusions", "Vaccines"].map((label, index) => <Box key={label} x={14 + index * 98} y={146} width={94} text={label} lit size={10} />)}
      {at === 4 && <Bubble x={160} y={160} text="No need to wait" width={130} />}
      <Cap>{["Your doctor will tell you the aim", "Acute: chemotherapy is the main one", "CML: daily tablets; CLL may wait", "Support to prevent and manage symptoms", "Worried? Talk to your specialists"][at]}</Cap>
    </svg>} />;
}

function LeukTransplant(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const steps = [{ x: 50, t: "Ready" }, { x: 125, t: "Transplant" }, { x: 200, t: "Own room" }, { x: 275, t: "Recovery" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stem cell transplant" title="New stem cells, one drip at a time" label="Stem cell transplant" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The steps of a stem cell transplant: a donor, conditioning, the drip, your own room and recovery">
      <path d="M30 44 H290" stroke={LINE} strokeWidth="5" strokeLinecap="round" />
      {steps.map((step, index) => { const on = at === index + 1; return <g key={step.t} opacity={fade(on)}>
        <circle cx={step.x} cy="44" r="8" fill={on ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={step.x} y={28} size={10}>{step.t}</W>
      </g>; })}
      {at === 0 && <g>
        <Person x={96} y={146} scale={1.3} fill={SOFT} /><Person x={224} y={146} scale={1.3} />
        <path d="M128 118 H190 M180 108 L192 118 L180 128" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <W x={96} y={180} size={10.5}>Donor</W><W x={224} y={180} size={10.5}>You</W>
      </g>}
      {at === 1 && <g><W x={158} y={90} size={10.5}>Conditioning</W><Squares x={50} y={102} count={10} filled={10} size={18} gap={22} labels={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]} /></g>}
      {at === 2 && <g><Drip x={110} y={62} fill={GOLD} /><path d="M110 148 C130 170, 170 160, 190 142" stroke={INK} strokeWidth="2" fill="none" /><Person x={214} y={164} scale={1.3} /></g>}
      {at === 3 && <g>
        <rect x="80" y="66" width="160" height="116" rx="6" fill={WHITE} stroke={INK} strokeWidth="3" />
        <rect x="190" y="80" width="36" height="30" fill={TINT} stroke={INK} strokeWidth="2" /><path d="M208 80 V110 M190 95 H226" stroke={INK} strokeWidth="2" />
        <Person x={130} y={164} scale={1.1} /><rect x="160" y="140" width="22" height="16" rx="3" fill={INK} />
      </g>}
      {at === 4 && <g><Squares x={40} y={104} count={12} filled={12} size={16} gap={20.5} /><W x={40} y={142} size={10} anchor="start">Month 1</W><W x={282} y={142} size={10} anchor="end">Month 12</W></g>}
      <Cap>{["Best match: often a brother or sister", "Conditioning: usually 1 to 10 days", "Not painful, like a transfusion", "Your own room while counts are low", "Up to a year to fully recover"][at]}</Cap>
    </svg>} />;
}

function LeukHotline(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Infections" title="Know your 24-hour number" label="Infections" credit={teamCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A phone showing a 24-hour number, with a thermometer, the signs of sepsis and an alert card">
      <Phone x={160} y={22} w={72} h={128} lit={at === 2} lines={["24-hour", "number"]} />
      {at === 0 && <g><rect x="18" y="40" width="88" height="80" rx="12" fill={TINT} />{[[44, 66], [80, 96]].map(([x, y]) => <g key={x}><circle cx={x} cy={y} r="11" fill={WHITE} stroke={INK} strokeWidth="2" /><path d={`M${x - 5} ${y - 1} q2.5 -5 5 0 q2.5 5 5 0`} stroke={INK} strokeWidth="2" fill="none" /></g>)}<W x={62} y={138} size={10}>Neutrophils</W></g>}
      {at === 1 && <Thermo x={62} y={30} h={96} level={0.6} />}
      {at === 2 && <Bubble x={258} y={70} text="Call it now" width={96} />}
      {at === 3 && <g><Box x={218} y={36} width={84} height={34} text="999" lit size={14} /><Box x={218} y={80} width={84} height={30} text="A&E" /><Box x={212} y={122} width={96} text="Don't drive" size={10} /></g>}
      {at === 4 && <g><rect x="214" y="48" width="92" height="58" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="214" y="48" width="92" height="16" rx="6" fill={INK} /><W x={260} y={90} size={10}>Alert card</W></g>}
      <Cap>{["Signs can be mild, even with no fever", "Feel unwell? Check your temperature", "Call your 24-hour number straight away", "Sepsis signs: call 999 right away", "In A&E, say you're at risk of sepsis"][at]}</Cap>
    </svg>} />;
}

function LeukTransfusion(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tiredness" title="Drained, and what can help" label="Tiredness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person in a chair beside a blood transfusion, with a fatigue scale and their team">
      <g opacity={at === 1 || at === 2 ? 1 : 0.45}>
        <path d="M60 20 V176 M40 176 H80 M60 24 H76" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <rect x="58" y="30" width="36" height="52" rx="10" fill={SOFT} stroke={INK} strokeWidth="2.5" />
        <path d="M76 82 C80 120, 110 130, 132 132" stroke={INK} strokeWidth="2" fill="none" />
      </g>
      <Person x={150} y={162} scale={1.2} fill={at === 0 ? SOFT : INK} />
      <path d="M124 178 H178 M128 178 V186 M174 178 V186" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {at === 0 && <g><rect x="212" y="48" width="78" height="40" rx="7" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="290" y="60" width="6" height="16" rx="2" fill={INK} /><rect x="218" y="54" width="12" height="28" rx="3" fill={SOFT} /></g>}
      {at === 1 && <g>{[[222, 64, 1], [256, 58, 1], [290, 66, 0.3]].map(([x, y, o]) => <g key={x} opacity={o}><ellipse cx={x} cy={y} rx="14" ry="10" fill={SOFT} stroke={INK} strokeWidth="2" /><ellipse cx={x} cy={y} rx="5" ry="3.5" fill={TINT} /></g>)}<W x={256} y={100} size={10}>Fewer red cells</W></g>}
      {at === 2 && <g><Clock x={256} y={66} r={24} hand={4} /><W x={256} y={112} size={10.5}>Per bag</W></g>}
      {at === 3 && <g>
        {Array.from({ length: 11 }, (_, index) => <g key={index}><rect x={202 + (index % 6) * 18} y={36 + Math.floor(index / 6) * 22} width="16" height="18" rx="3" fill={index === 4 ? INK : WHITE} stroke={INK} strokeWidth="1.5" /><W x={210 + (index % 6) * 18} y={49 + Math.floor(index / 6) * 22} size={9.5} fill={index === 4 ? WHITE : TEXT}>{index}</W></g>)}
        <W x={256} y={96} size={10}>Fatigue score</W>
      </g>}
      {at === 4 && <Bubble x={252} y={60} text="Tell your team" width={110} />}
      <Cap>{["Drained, even after rest or sleep", "Anaemia: a low level of red cells", "Up to four hours per bag", "Rest and activity both help", "Tiredness new or worse? Tell your team"][at]}</Cap>
    </svg>} />;
}

function LeukSpread(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = [3, 6, 9, 12, 15, 18, 21, 24, 28, 32, 36, 40, 44, 48, 54, 60];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="Check-ups that slowly spread out" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five years of check-ups, close together at first and further apart later">
      <path d="M30 104 H290" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {[1, 2, 3, 4].map(year => <path key={year} d={`M${30 + year * 52} 96 V112`} stroke={SOFT} strokeWidth="2" />)}
      {[1, 2, 3, 4, 5].map(year => <W key={year} x={4 + year * 52} y={130} size={10}>Year {year}</W>)}
      {months.map(month => <circle key={month} cx={30 + month * 260 / 60} cy="104" r="5" fill={at === 1 ? INK : SOFT} />)}
      {at === 0 && <g><Box x={40} y={36} width={110} text="Blood tests" /><Box x={170} y={36} width={110} text="Late effects" /></g>}
      {at === 1 && <g><W x={82} y={158} size={10}>Every 3 months</W><W x={186} y={158} size={10}>Every 4 months</W><W x={264} y={158} size={10}>Every 6</W></g>}
      {at === 2 && <g><rect x="104" y="28" width="14" height="50" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="107" y="52" width="8" height="23" rx="4" fill={GOLD} /><Box x={134} y={38} width={120} text="PCR blood test" lit /></g>}
      {at === 3 && <g><rect x="128" y="20" width="64" height="68" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={160} y={42} size={10}>Summary</W>{[56, 68, 78].map(y => <path key={y} d={`M140 ${y} H180`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}</g>}
      {at === 4 && <g><rect x="134" y="24" width="32" height="56" rx="6" fill={INK} /><rect x="139" y="32" width="22" height="36" rx="2" fill={WHITE} /><Bubble x={232} y={44} text="Don't wait" width={100} /></g>}
      <Cap>{["Checks for return and late effects", "Visits gradually become less frequent", "CML: PCR test every 3 months at first", "A summary sent to you and your GP", "No need to wait for your next visit"][at]}</Cap>
    </svg>} />;
}

function LeukPlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Food" title="Safe food, without a strict diet" label="Eating" credit={teamCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate split into safer foods and higher-risk foods, with a tap and a food hygiene rating">
      <W x={66} y={28} size={10.5}>Safer</W><W x={130} y={28} size={10.5}>Higher risk</W>
      <circle cx="96" cy="104" r="64" fill={WHITE} stroke={INK} strokeWidth="3" />
      {at === 2 && <path d="M96 52 A52 52 0 0 1 96 156 Z" fill={TINT} />}
      <circle cx="96" cy="104" r="52" fill="none" stroke={LINE} strokeWidth="2" />
      <path d="M96 46 V162" stroke={SOFT} strokeWidth="2" strokeDasharray="4 4" />
      <g opacity={at === 2 ? 0.45 : 1}>
        <path d="M54 94 L84 94 L84 74 Z" fill={GOLD} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <circle cx="70" cy="124" r="13" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx="70" cy="124" r="6" fill={GOLD} />
      </g>
      <g opacity={at === 2 || at === 0 ? 1 : 0.45}>
        <path d="M108 84 C108 72, 134 70, 136 82 C140 94, 120 98, 108 84 Z" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M122 82 q4 6 2 14" stroke={GOLD} strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M106 126 C114 114, 132 114, 138 126 C132 136, 114 136, 106 126 Z M138 126 L146 118 V134 Z" fill={SOFT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      </g>
      {at === 0 && <Tags x={180} y={56} width={128} gap={38} labels={["Energy for treatment", "Helps recovery"]} lit={() => true} />}
      {at === 1 && <g>
        <path d="M200 50 H244 V62 H258 V78 H244" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        {[92, 106].map(y => <circle key={y} cx={251} cy={y} r="3.5" fill={SOFT} />)}
        <Tags x={184} y={124} width={120} gap={34} labels={["Wash hands", "Clean boards"]} lit={() => false} />
      </g>}
      {at === 2 && <Tags x={180} y={46} width={128} gap={36} labels={["Raw or runny eggs", "Raw fish", "Unpasteurised milk"]} lit={() => false} />}
      {at === 3 && <g>
        <path d="M232 34 h12 v10 c8 4 10 10 10 18 v66 c0 6 -4 8 -8 8 h-16 c-4 0 -8 -2 -8 -8 v-66 c0 -8 2 -14 10 -18 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M226 84 H262" stroke={SOFT} strokeWidth="3" /><W x={244} y={166} size={10}>Bottled water is safe</W>
      </g>}
      {at === 4 && <g><circle cx="244" cy="84" r="36" fill={GOLD} stroke={INK} strokeWidth="2.5" /><W x={244} y={96} size={30} serif>5</W><W x={244} y={140} size={10}>Hygiene rating</W></g>}
      <Cap>{["You can still eat a balanced diet", "Cook through; reheat only once", "Your team will say what to avoid", "Strict diets do not reduce infection", "Eat out where hygiene is rated 5"][at]}</Cap>
    </svg>} />;
}

function LeukHome(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Work, with the law on your side" label="Work and money" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A home with a laptop, the Equality Act, a return to work that builds up, and help with costs">
      <path d="M20 84 L84 36 L148 84 V180 H20 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <g opacity={fade(at === 3)}><rect x="58" y="114" width="52" height="34" rx="3" fill={at === 3 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><path d="M48 154 H120" stroke={INK} strokeWidth="4" strokeLinecap="round" /></g>
      {at === 0 && <g><path d="M196 30 H262 L280 48 V130 H196 Z" fill={INK} strokeLinejoin="round" /><W x={238} y={74} size={10} fill={WHITE}>Equality</W><W x={238} y={90} size={10} fill={WHITE}>Act 2010</W></g>}
      {at === 1 && <g><Bubble x={240} y={56} text="Your choice" width={110} /><Box x={186} y={100} width={116} text="Kept private" size={10} /></g>}
      {at === 2 && <g>{[20, 36, 52, 68].map((h, index) => <g key={h}><rect x={186 + index * 28} y={130 - h} width="22" height={h} rx="4" fill={INK} /><W x={197 + index * 28} y={146} size={9.5}>W{index + 1}</W></g>)}</g>}
      {at === 3 && <Box x={170} y={76} width={136} text="Less infection risk" size={10} lit />}
      {at === 4 && <g><circle cx="238" cy="66" r="26" fill={GOLD} stroke={INK} strokeWidth="2.5" /><W x={238} y={74} size={22} serif>£</W><Box x={176} y={116} width={124} text="Benefits advice" size={10} /></g>}
      <Cap>{["Covered by the law from diagnosis", "You choose whether to tell work", "Part-time first, then build up", "Work from home to cut infection risk", "Benefits advice: 0808 808 00 00"][at]}</Cap>
    </svg>} />;
}

function LeukFog(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const fog = [0.85, 0.65, 0.5, 0.3, 0.15][at];
  const walker = [[60, 172], [100, 152], [150, 132], [200, 114], [244, 100]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="Living with not knowing" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path leading out of a fog towards the sun, with people and help along the way">
      <Sun x={276} y={40} r={15} opacity={0.35 + at * 0.16} />
      <path d="M40 188 C90 150, 150 130, 256 94" stroke={LINE} strokeWidth="12" fill="none" strokeLinecap="round" />
      <g opacity={fog}><ellipse cx="200" cy="70" rx="64" ry="18" fill={LINE} /><ellipse cx="240" cy="110" rx="56" ry="16" fill={LINE} /><ellipse cx="170" cy="150" rx="50" ry="14" fill={LINE} /></g>
      <circle cx={walker[0]} cy={walker[1] - 12} r="8" fill={INK} />
      {at === 0 && <g><Box x={22} y={36} width={104} text="Good days" /><Box x={22} y={74} width={104} text="Bad days" /></g>}
      {at === 1 && <Tags x={22} y={30} width={124} gap={32} labels={["Here and now", "Stay connected", "Things you enjoy"]} lit={index => index === 0} />}
      {at === 2 && <Tags x={22} y={30} width={124} gap={32} labels={["Low most days", "Lost interest", "Sleep changes"]} lit={() => false} />}
      {at === 3 && <g><Box x={22} y={36} width={130} text="Support lines" lit /><Box x={22} y={74} width={130} text="Support groups" /></g>}
      {at === 4 && <g><path d="M70 30 V128" stroke={INK} strokeWidth="4" />{["116 123", "111", "999"].map((sign, index) => <Box key={sign} x={30} y={30 + index * 30} width={80} height={24} text={sign} lit={index === 0} size={10.5} />)}</g>}
      <Cap>{["Good and bad days are normal", "Focus on what you can do now", "Over 2 weeks? Talk to your doctor", "Blood Cancer UK: 0808 2080 888", "Samaritans 116 123, day or night"][at]}</Cap>
    </svg>} />;
}

// ==== Myeloma ===============================================================================================

/** A plasma cell: an oval with its nucleus to one side. */
const Plasma = ({ x, y, fill = WHITE, scale = 1 }: { x: number; y: number; fill?: string; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}><ellipse rx="13" ry="10" fill={fill} stroke={INK} strokeWidth="2" /><circle cx="-4" cy="0" r="5" fill={fill === WHITE ? SOFT : INK} /></g>;

function MyePlasma(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots = [[42, 56], [84, 50], [126, 58], [56, 92], [100, 88], [132, 100], [44, 128], [86, 124], [122, 134]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The plasma cell that lost its way" label="What myeloma is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Bone marrow with plasma cells making antibodies, then filling with myeloma cells">
      <g opacity={at === 3 ? 0.4 : 1}>
        <rect x="16" y="30" width="136" height="124" rx="14" fill={TINT} stroke={SOFT} strokeWidth="2" />
        {spots.map(([x, y], index) => at === 1 || at === 2 ? <Plasma key={index} x={x} y={y} fill={GOLD} /> : index === 4 ? <Plasma key={index} x={x} y={y} /> : <circle key={index} cx={x} cy={y} r="8" fill={SOFT} />)}
        <W x={84} y={172} size={10.5}>Bone marrow</W>
      </g>
      {at === 0 && <g>{[[196, 60, -20], [236, 48, 10], [276, 64, 30], [212, 100, -10], [260, 104, 20]].map(([x, y, a]) => <Antibody key={x} x={x} y={y} angle={a} />)}<W x={236} y={146} size={10.5}>Antibodies</W></g>}
      {at === 1 && <g><Plasma x={236} y={70} fill={GOLD} scale={2} /><W x={236} y={126} size={10.5}>Myeloma cells</W></g>}
      {at === 2 && <g>{[[196, 60, -20], [236, 48, 10], [276, 64, 30], [212, 100, -10], [260, 104, 20]].map(([x, y, a]) => <Antibody key={x} x={x} y={y} angle={a} fill={GOLD} bent />)}<W x={236} y={146} size={10.5}>Paraprotein</W><W x={236} y={162} size={10}>(M protein)</W></g>}
      {at === 3 && <g>
        <circle cx="240" cy="32" r="14" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M240 46 V128 M240 60 C224 62, 216 70, 214 84 M240 60 C256 62, 264 70, 266 84 M240 74 C226 76, 220 82, 220 92 M240 74 C254 76, 260 82, 260 92 M240 60 L204 108 M240 60 L276 108" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M222 128 H258 L252 142 H228 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M230 142 L222 186 M250 142 L258 186" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
        {[[240, 26], [240, 100], [240, 134], [216, 84], [226, 166], [210, 100]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" fill={GOLD} stroke={INK} strokeWidth="1.5" />)}
      </g>}
      {at === 4 && <Tags x={172} y={60} width={136} gap={38} labels={["Often under control", "Managed with treatment"]} lit={index => index === 1} />}
      <Cap>{["Plasma cells make antibodies", "Myeloma cells fill up the marrow", "Paraprotein: an abnormal antibody", "Spine, skull, pelvis, ribs, long bones", "Not infectious; cannot be passed on"][at]}</Cap>
    </svg>} />;
}

function MyeCrab(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tiles = [{ l: "C", t: "Calcium" }, { l: "R", t: "Kidneys" }, { l: "A", t: "Anaemia" }, { l: "B", t: "Bones" }];
  const lit = (index: number) => at === 0 || (at === 1 && (index === 0 || index === 3)) || (at === 2 && index === 2) || (at === 3 && index === 1);
  const icon = (index: number, x: number, y: number) => {
    if (index === 0) return <path d={`M${x} ${y - 18} C${x - 14} ${y}, ${x - 12} ${y + 16}, ${x} ${y + 16} C${x + 12} ${y + 16}, ${x + 14} ${y}, ${x} ${y - 18} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" />;
    if (index === 1) return <path d={`M${x + 4} ${y - 18} C${x - 20} ${y - 22}, ${x - 22} ${y + 20}, ${x + 2} ${y + 18} C${x + 10} ${y + 17}, ${x + 6} ${y + 6}, ${x + 2} ${y} C${x + 6} ${y - 6}, ${x + 12} ${y - 17}, ${x + 4} ${y - 18} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" />;
    if (index === 2) return <g><ellipse cx={x} cy={y} rx="17" ry="12" fill={SOFT} stroke={INK} strokeWidth="2" /><ellipse cx={x} cy={y} rx="7" ry="4.5" fill={TINT} /></g>;
    return <g><rect x={x - 20} y={y - 4} width="40" height="8" fill={WHITE} stroke={INK} strokeWidth="2" />{[[-20, -5], [-20, 5], [20, -5], [20, 5]].map(([dx, dy]) => <circle key={`${dx}${dy}`} cx={x + dx} cy={y + dy} r="5.5" fill={WHITE} stroke={INK} strokeWidth="2" />)}<path d={`M${x - 3} ${y - 6} l4 4 l-3 3 l4 5`} stroke={GOLD} strokeWidth="2.5" fill="none" /></g>;
  };
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="C, R, A, B: what myeloma can do" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four tiles spelling CRAB: calcium, kidneys, anaemia and bones">
      {tiles.map((tile, index) => { const x = 14 + index * 76, on = lit(index); return <g key={tile.l} opacity={at === 4 ? 0.35 : fade(on)}>
        <rect x={x} y="20" width="64" height="62" rx="10" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x + 32} y={63} size={30} fill={on ? WHITE : TEXT} serif>{tile.l}</W>
        <W x={x + 32} y={100} size={10.5}>{tile.t}</W>
        {at !== 4 && icon(index, x + 32, 140)}
      </g>; })}
      {at === 4 && <g><Box x={60} y={124} width={90} height={34} text="Call 999" lit size={13} /><Box x={166} y={124} width={100} height={34} text="Do not drive" /></g>}
      <Cap>{["Calcium, kidneys, anaemia, bones", "Bone pain: back, ribs or hips", "Fewer normal blood cells: anaemia", "Regular blood tests check kidneys", "Suddenly lose feeling? Call 999"][at]}</Cap>
    </svg>} />;
}

function MyeTrend(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const ys = [74, 72, 76, 70, 40, 71, 68, 69, 66, 64];
  const trend = ys.map((y, index) => index === 4 ? 70 : y);
  const items = ["Blood", "Urine", "Marrow", "Scan"];
  const lit = (index: number) => at === 0 || (at === 1 && index < 2) || (at === 2 && index >= 2);
  const icon = (index: number, x: number, y: number, c: string) => {
    if (index === 0) return <g><rect x={x - 6} y={y - 14} width="12" height="28" rx="6" fill="none" stroke={c} strokeWidth="2.5" /><rect x={x - 3} y={y} width="6" height="11" rx="3" fill={GOLD} /></g>;
    if (index === 1) return <path d={`M${x - 10} ${y - 12} H${x + 10} L${x + 8} ${y + 13} H${x - 8} Z M${x - 12} ${y - 12} H${x + 12}`} fill="none" stroke={c} strokeWidth="2.5" strokeLinejoin="round" />;
    if (index === 2) return <g><path d={`M${x - 12} ${y + 12} L${x + 6} ${y - 6}`} stroke={c} strokeWidth="5" strokeLinecap="round" /><path d={`M${x + 6} ${y - 6} L${x + 14} ${y - 14}`} stroke={c} strokeWidth="2.5" /></g>;
    return <g><circle cx={x} cy={y} r="13" fill="none" stroke={c} strokeWidth="5" /><path d={`M${x - 18} ${y + 4} H${x + 18}`} stroke={c} strokeWidth="2.5" /></g>;
  };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tests" title="Reading the trend, not one result" label="Tests" credit="Illustration: Rehyn. A picture of the idea, not anyone's own results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A chart of paraprotein results over time with one high result, and the blood, urine, marrow and scan tests">
      {at !== 4 ? <g opacity={at === 3 ? 1 : 0.5}>
        <W x={30} y={18} size={10} anchor="start">Paraprotein</W>
        <path d="M30 24 V100 H296" stroke={LINE} strokeWidth="2" fill="none" />
        <path d={trend.map((y, index) => `${index ? "L" : "M"}${44 + index * 27} ${y}`).join(" ")} stroke={INK} strokeWidth="2.5" fill="none" />
        {ys.map((y, index) => <circle key={index} cx={44 + index * 27} cy={y} r={index === 4 ? 6 : 4} fill={index === 4 ? GOLD : INK} />)}
        {at === 3 && <circle cx={152} cy={40} r="12" fill="none" stroke={GOLD} strokeWidth="2.5" />}
      </g> : <g><Squares x={90} y={28} count={7} filled={7} size={16} gap={20} /><Squares x={90} y={52} count={7} filled={7} size={16} gap={20} /><W x={160} y={92} size={10}>Two weeks</W></g>}
      {items.map((item, index) => { const x = 52 + index * 72, on = lit(index); return <g key={item} opacity={fade(on)}>
        <circle cx={x} cy="140" r="22" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, x, 140, on ? WHITE : INK)}
        <W x={x} y={178} size={10}>{item}</W>
      </g>; })}
      <Cap>{["No single test: several together", "Blood and urine: paraprotein levels", "Bone marrow sample, and a scan", "One high result is not the trend", "Results in 1 to 2 weeks"][at]}</Cap>
    </svg>} />;
}

function MyePath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const signs = [{ x: 48, w: 78, t: "Smouldering", py: 146 }, { x: 118, w: 56, t: "Active", py: 102 }, { x: 204, w: 72, t: "Remission", py: 122 }, { x: 274, w: 62, t: "Relapse", py: 108 }];
  const litSign = [0, 1, -1, 2, 3][at];
  const walker = [[48, 134], [118, 90], [118, 90], [204, 110], [262, 96]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stages" title="Quiet, active, settled, back again" label="Stages" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A rolling path past four signposts: smouldering, active, remission and relapse">
      <path d="M16 150 C50 150 60 148 80 146 C100 144 104 104 130 100 C150 98 156 120 176 122 H232 C246 122 252 108 262 108 C276 108 282 124 304 126" stroke={LINE} strokeWidth="8" fill="none" strokeLinecap="round" />
      {at === 3 && <path d="M176 122 H232" stroke={GOLD} strokeWidth="8" strokeLinecap="round" />}
      {signs.map((sign, index) => { const on = litSign === index; return <g key={sign.t} opacity={at === 2 ? 0.45 : fade(on)}>
        <path d={`M${sign.x} 60 V${sign.py - 6}`} stroke={INK} strokeWidth="2.5" />
        <Box x={sign.x - sign.w / 2} y={36} width={sign.w} height={24} text={sign.t} lit={on} size={10} />
      </g>; })}
      <circle cx={walker[0]} cy={walker[1]} r="7" fill={INK} />
      {at === 2 && <g>{["1", "2", "3"].map((stage, index) => <Box key={stage} x={96 + index * 30} y={158} width={26} height={24} text={stage} size={10.5} lit />)}<Box x={200} y={158} width={70} height={24} text="CRAB" size={10.5} /></g>}
      <Cap>{["No symptoms? Monitoring may be best", "Symptoms mean treatment usually starts", "3 stages, plus the CRAB checks", "Remission may last months or years", "Relapse: usually there are options"][at]}</Cap>
    </svg>} />;
}

function MyeVenn(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rings = [{ x: 70, y: 70, t: "Targeted", tx: 56, ty: 62 }, { x: 122, y: 70, t: "Steroid", tx: 138, ty: 62 }, { x: 96, y: 116, t: "Chemo", tx: 96, ty: 140 }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatment" title="Several drugs, working in different ways" label="Treatment combinations" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three overlapping circles for targeted drugs, steroids and chemotherapy, with treatment cycles">
      {rings.map(ring => <circle key={ring.t} cx={ring.x} cy={ring.y} r="42" fill={at === 1 ? SOFT : TINT} fillOpacity={0.55} stroke={INK} strokeWidth="2.5" />)}
      {rings.map(ring => <W key={ring.t} x={ring.tx} y={ring.ty} size={10}>{ring.t}</W>)}
      {at === 0 && <g><circle cx="96" cy="86" r="8" fill={GOLD} stroke={INK} strokeWidth="1.5" /><Box x={180} y={76} width={124} text="Named by initials" size={10} /></g>}
      {at === 1 && <Tags x={180} y={40} width={128} gap={36} labels={["Bortezomib", "Dexamethasone", "Melphalan"]} lit={() => false} />}
      {at === 2 && <g><Squares x={176} y={64} count={6} filled={4} size={18} gap={22} labels={["1", "2", "3", "4", "5", "6"]} /><W x={240} y={108} size={10}>Cycles</W></g>}
      {at === 3 && <g>{["Induction", "Consolidation", "Maintenance"].map((label, index) => <Box key={label} x={182} y={30 + index * 44} width={118} text={label} lit={index === 0} size={10} />)}<path d="M241 58 V74 M241 102 V118" stroke={GOLD} strokeWidth="3" /></g>}
      {at === 4 && <Phone x={244} y={30} w={64} h={110} lit lines={["Any", "time"]} />}
      <Cap>{["Drugs that work in different ways", "Targeted drugs, steroids and chemo", "4 to 6 cycles, each 21 to 35 days", "First treatment comes in stages", "Call any time, day or night"][at]}</Cap>
    </svg>} />;
}

function MyeLoop(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const node = (x: number, y: number, on: boolean, children: ReactNode) => <g opacity={fade(on)}><circle cx={x} cy={y} r="20" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />{children}</g>;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stem cell transplant" title="Your own cells, collected and returned" label="Stem cell transplant" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A loop: your stem cells are collected and stored, then given back after high-dose chemotherapy">
      <circle cx="160" cy="104" r="56" fill="none" stroke={LINE} strokeWidth="4" />
      {[[120, 64, 45], [200, 64, 135], [200, 144, 225], [120, 144, 315]].map(([x, y, a]) => <path key={a} transform={`translate(${x} ${y}) rotate(${a})`} d="M-6 -5 L2 0 L-6 5" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />)}
      {node(104, 104, at === 1 || at === 4, <Person x={104} y={112} scale={0.55} fill={at === 1 || at === 4 ? WHITE : INK} />)}
      {node(160, 48, at === 2, <g><rect x="150" y="40" width="20" height="16" rx="3" fill="none" stroke={at === 2 ? WHITE : INK} strokeWidth="2.5" /><path d="M160 42 V54 M154 45 L166 51 M166 45 L154 51" stroke={at === 2 ? WHITE : INK} strokeWidth="1.5" /></g>)}
      {node(216, 104, at === 0, <g><rect x="209" y="92" width="14" height="18" rx="4" fill="none" stroke={at === 0 ? WHITE : INK} strokeWidth="2.5" /><path d="M216 110 V118" stroke={at === 0 ? WHITE : INK} strokeWidth="2.5" /></g>)}
      {node(160, 160, at === 0, <g><rect x="148" y="157" width="24" height="6" fill="none" stroke={at === 0 ? WHITE : INK} strokeWidth="2" /><circle cx="148" cy="157" r="3" fill={at === 0 ? WHITE : INK} /><circle cx="148" cy="163" r="3" fill={at === 0 ? WHITE : INK} /><circle cx="172" cy="157" r="3" fill={at === 0 ? WHITE : INK} /><circle cx="172" cy="163" r="3" fill={at === 0 ? WHITE : INK} /></g>)}
      <W x={56} y={108} size={10.5}>You</W><W x={160} y={20} size={10.5}>Collect</W><W x={268} y={108} size={10.5}>High dose</W><W x={186} y={170} size={10.5} anchor="start">Cells back</W>
      {at === 0 && <g><W x={160} y={100} size={10}>Your own</W><W x={160} y={114} size={10}>stem cells</W></g>}
      {at === 1 && <g><W x={160} y={100} size={10}>Well</W><W x={160} y={114} size={10}>enough?</W></g>}
      {at === 2 && <Clock x={160} y={104} r={16} hand={3.5} />}
      {at === 3 && <path d="M140 116 V96 M140 108 H180 V116 M146 102 h12" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />}
      {at === 4 && <path d="M144 118 V100 L160 88 L176 100 V118 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />}
      <Cap>{["High-dose chemo, then your own cells", "You need to be well enough for it", "Collected over 3 or 4 hours, stored", "In hospital for perhaps 3 to 4 weeks", "Strength may take months to return"][at]}</Cap>
    </svg>} />;
}

function MyeSpine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Bones" title="Strong bones, safe pain relief" label="Bones" credit={teamCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A spine, with a bone-strengthening drip, a dentist visit, gentle exercise and signs to act on">
      {Array.from({ length: 10 }, (_, index) => { const weak = (at === 0 && (index === 3 || index === 6)) || (at === 4 && index === 5); return <rect key={index} x="36" y={22 + index * 16} width="44" height="12" rx="4" fill={weak ? (at === 4 ? GOLD : TINT) : WHITE} stroke={INK} strokeWidth="2" strokeDasharray={at === 0 && weak ? "4 3" : undefined} />; })}
      {at === 0 && <g><path d="M244 56 A36 36 0 1 1 208 92" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" /><path d="M200 84 L208 94 L218 86" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d="M214 60 l10 8" stroke={GOLD} strokeWidth="5" strokeLinecap="round" /><W x={232} y={150} size={10.5}>Bone renewal</W></g>}
      {at === 1 && <g>
        <Drip x={164} y={30} fill={INK} /><W x={164} y={136} size={10}>Every 4 weeks</W>
        <path d="M252 54 C240 54, 238 70, 244 84 L248 104 C250 110, 256 110, 258 102 L262 90 L266 102 C268 110, 274 110, 276 104 L280 84 C286 70, 284 54, 272 54 C266 54, 264 58, 262 58 C260 58, 258 54, 252 54 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={262} y={136} size={10}>Dentist first</W>
      </g>}
      {at === 2 && <g><Box x={120} y={30} width={140} text="Tell your team" lit /><W x={185} y={84} size={10}>Ibuprofen</W><rect x="160" y="92" width="50" height="36" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M172 110 H198" stroke={SOFT} strokeWidth="6" strokeLinecap="round" /><Cross x={185} y={110} r={18} /><W x={185} y={156} size={10}>Ask first</W></g>}
      {at === 3 && <g><Tags x={150} y={40} width={150} gap={36} labels={["Physio exercises", "Walking, swimming"]} lit={() => true} /><Box x={150} y={130} width={150} text="No heavy lifting" /></g>}
      {at === 4 && <g><Box x={128} y={56} width={170} text="Get advice now" lit /><Box x={128} y={100} width={170} text="Sudden? Call 999" /></g>}
      <Cap>{["Myeloma interrupts bone renewal", "Bisphosphonate drip every 4 weeks", "Tell your team about any bone pain", "Gentle walking, swimming, tai chi", "Spine signs: get advice immediately"][at]}</Cap>
    </svg>} />;
}

function MyeVials(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Infections" title="Know the number before you need it" label="Infections and vaccines" credit={teamCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A thermometer, a phone with an emergency number, and a row of vaccines">
      <g opacity={fade(at === 1)}><Thermo x={44} y={20} h={74} level={at === 1 ? 0.85 : 0.45} hot={at === 1} />{at === 1 && [36, 56].map(y => <path key={y} d={`M68 ${y} q6 -5 0 -10 q-6 -5 0 -10`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />)}</g>
      <g opacity={fade(at === 2)}><Phone x={154} y={18} w={66} h={98} lit={at === 2} lines={["Emergency", "number"]} /></g>
      {at === 0 && <path d="M206 100 C240 96, 262 74, 290 30 M276 34 L291 28 L292 44" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      {at === 2 && <Box x={222} y={44} width={84} height={32} text="Or 999" size={12} />}
      {at === 4 && <Tags x={200} y={30} width={110} gap={34} labels={["Antibiotics", "Antivirals"]} lit={() => true} />}
      {[40, 96, 152, 208, 264].map(x => <g key={x} opacity={fade(at === 3)}>
        <rect x={x - 12} y="128" width="24" height="10" rx="3" fill={at === 3 ? GOLD : INK} />
        <rect x={x - 10} y="136" width="20" height="40" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x={x - 7} y="154" width="14" height="19" rx="3" fill={at === 3 ? INK : TINT} />
      </g>)}
      <Cap>{["Infections can get serious quickly", "Temperature up or down, or shivery", "Call your emergency number at once", "Flu, covid-19, pneumococcal, Shingrix", "Wash hands; keep away from infections"][at]}</Cap>
    </svg>} />;
}

function MyeFilters(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Kidneys" title="Keeping the filters clear" label="Kidneys" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A kidney with its small tubes, a blood test, a jug of water and a painkiller to check first">
      <path d="M110 36 C40 24, 22 110, 50 150 C70 176, 110 170, 112 140 C114 124, 100 112, 102 100 C104 88, 124 80, 124 64 C124 46, 118 38, 110 36 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M62 70 C74 80, 80 92, 96 98 M52 104 H96 M60 138 C72 126, 82 112, 96 106" stroke={at === 0 ? INK : LINE} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M104 104 C130 110, 130 150, 140 180" stroke={INK} strokeWidth="3" fill="none" />
      {at === 0 && [[70, 80], [80, 104], [74, 128], [86, 94]].map(([x, y]) => <rect key={`${x}-${y}`} x={x - 4} y={y - 3} width="8" height="6" rx="1.5" fill={GOLD} stroke={INK} strokeWidth="1" />)}
      {at === 0 && <W x={236} y={96} size={10.5}>Light chains</W>}
      {at === 1 && <g><rect x="220" y="36" width="20" height="74" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="224" y="70" width="12" height="36" rx="6" fill={GOLD} /><rect x="216" y="30" width="28" height="12" rx="3" fill={INK} /><W x={230} y={138} size={10.5}>Blood tests</W></g>}
      {at === 2 && <g>
        <path d="M184 60 H226 L222 136 H188 Z M226 72 C242 72, 242 104, 224 104" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        {[250, 276].map(x => <path key={x} d={`M${x} 102 H${x + 18} L${x + 16} 136 H${x + 2} Z`} fill={TINT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />)}
      </g>}
      {at === 3 && <g><W x={235} y={52} size={10}>Ibuprofen</W><rect x="210" y="62" width="50" height="36" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M222 80 H248" stroke={SOFT} strokeWidth="6" strokeLinecap="round" /><Cross x={235} y={80} r={18} /><W x={235} y={130} size={10.5}>Check first</W></g>}
      {at === 4 && <g><Drip x={236} y={22} /><Box x={176} y={130} width={124} text="Fluids by drip" size={10} /></g>}
      <Cap>{["Light chains can block kidney tubes", "Regular blood tests spot early changes", "Generally 2 to 3 litres a day", "Check before taking ibuprofen", "Treat the myeloma: it is the cause"][at]}</Cap>
    </svg>} />;
}

function MyeWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const levels = [[0.25, 0.3, 0.2, 0.3, 0.25, 0.3, 0.2], [0.3, 0.35, 0.3, 0.35, 0.3, 0.35, 0.3], [0.4, 0.4, 0.68, 0.15, 0.4, 0.4, 0.4], [0.2, 0.28, 0.36, 0.44, 0.52, 0.6, 0.68], [0.4, 0.45, 0.4, 0.45, 0.4, 0.15, 0.45]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tiredness" title="Plan, pace and prioritise" label="Tiredness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week planner with energy through each day, busy days, rest days and short walks">
      {days.map((day, index) => { const x = 20 + index * 41, h = 76 * levels[index]; return <g key={index}>
        <W x={x + 17} y={22} size={10}>{day}</W>
        <rect x={x} y="30" width="34" height="80" rx="6" fill={(at === 2 && index === 3) || (at === 4 && index === 5) ? TINT : WHITE} stroke={INK} strokeWidth="2" />
        <rect x={x + 4} y={106 - h} width="26" height={h} rx="4" fill={at === 0 ? SOFT : INK} />
      </g>; })}
      {at === 2 && <g><W x={119} y={44} size={9.5}>Busy</W><W x={160} y={70} size={10}>Rest</W></g>}
      {at === 4 && <W x={242} y={70} size={10}>Rest</W>}
      {at === 1 && ["Anaemia", "Pain", "Kidneys"].map((label, index) => <Box key={label} x={14 + index * 98} y={140} width={94} text={label} size={10} />)}
      {at === 3 && <g><path d="M126 162 L130 136 L150 136 L156 146 C170 148 190 150 198 162 V170 H126 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><path d="M126 170 H198" stroke={INK} strokeWidth="5" /></g>}
      {at === 4 && <Bubble x={160} y={150} text="Have a rest day" width={130} />}
      <Cap>{["Not fully relieved by rest or sleep", "Your doctor can try to treat causes", "Busy day? Rest the following day", "Short walks, a little longer each day", "You're not being lazy"][at]}</Cap>
    </svg>} />;
}

const HAND = "M-30 70 C-34 40, -48 30, -50 10 C-50 0, -40 0, -36 10 L-28 30 V-40 a6 6 0 0 1 12 0 V-10 V-56 a6 6 0 0 1 12 0 V-10 V-52 a6 6 0 0 1 12 0 V-8 V-40 a6 6 0 0 1 12 0 V30 C32 56, 20 70, 10 70 Z";

function MyeFingertips(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const glow = [1, 0.9, 0.8, 0.6, 0.5][at];
  const tips = [[-46, 4], [-22, -46], [-10, -62], [2, -58], [14, -46]];
  const pulse = still || at !== 0 ? undefined : "lib-why-pulse";
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tingling" title="When fingers and toes tingle" label="Neuropathy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pair of hands with tingling at the fingertips, and ways to ease and protect them">
      {[{ x: 72, flip: 1 }, { x: 152, flip: -1 }].map(hand => <g key={hand.x} transform={`translate(${hand.x} 112) scale(${hand.flip * 0.92} 0.92)`}>
        <path d={HAND} fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        {tips.map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="5" fill={GOLD} opacity={glow} className={pulse} />)}
      </g>)}
      {at === 0 && <g><circle cx="258" cy="70" r="18" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[[-5, -5], [5, -5], [-5, 5], [5, 5]].map(([dx, dy]) => <circle key={`${dx}${dy}`} cx={258 + dx} cy={70 + dy} r="2.5" fill={INK} />)}<W x={258} y={112} size={10}>Fiddly tasks</W></g>}
      {at === 1 && <g><Pill x={258} y={70} /><W x={258} y={104} size={10}>Some drugs</W></g>}
      {at === 2 && <Bubble x={258} y={62} text="Tell early" width={96} />}
      {at === 3 && <Tags x={214} y={40} width={92} gap={34} labels={["Medicines", "Creams", "Physio"]} lit={() => true} />}
      {at === 4 && <Tags x={214} y={40} width={92} gap={34} labels={["Gloves", "Socks", "Good light"]} lit={() => true} />}
      <Cap>{["Tingling, numbness, pins and needles", "Some myeloma drugs can cause it", "Tell your team early: dose may change", "Medicines and physio can help", "Gloves, good shoes; test bath water"][at]}</Cap>
    </svg>} />;
}

function MyeHills(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const walker = [[200, 104], [100, 134], [150, 118], [250, 128], [296, 124]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="Living well with uncertainty" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Rolling hills with ups and downs, a long calm stretch, and help along the way">
      <Sun x={276} y={36} r={14} opacity={at === 1 || at === 2 ? 0.55 : 1} />
      {(at === 1 || at === 2) && <Cloud x={226} y={44} opacity={0.9} />}
      <path d="M0 150 C40 120 70 120 100 140 C130 160 160 100 200 110 C240 120 260 150 320 130 V186 H0 Z" fill={TINT} />
      <path d="M0 150 C40 120 70 120 100 140 C130 160 160 100 200 110 C240 120 260 150 320 130" stroke={SOFT} strokeWidth="3" fill="none" />
      {at === 0 && <path d="M168 108 C184 104, 196 106, 214 112" stroke={GOLD} strokeWidth="6" fill="none" strokeLinecap="round" />}
      <circle cx={walker[0]} cy={walker[1] - 10} r="7" fill={INK} />
      {at === 1 && ["Upbeat", "Numb", "Sad"].map((label, index) => <Box key={label} x={30 + index * 70} y={40} width={62} height={26} text={label} size={10} />)}
      {at === 2 && <Box x={60} y={40} width={130} text="Over 2 weeks?" lit />}
      {at === 3 && ["Lists", "Calendar", "Goals"].map((label, index) => <Box key={label} x={30 + index * 76} y={40} width={68} height={26} text={label} lit size={10} />)}
      {at === 4 && ["111", "116 123", "999"].map((label, index) => <Box key={label} x={30 + index * 70} y={40} width={64} height={26} text={label} lit={index === 1} size={10.5} />)}
      <Cap>{["Long periods may be under control", "No need to be positive all the time", "More than 2 weeks? Tell your doctor", "Talking and practical plans can help", "Samaritans free on 116 123, any time"][at]}</Cap>
    </svg>} />;
}

export function BloodPieceView({ piece, ...props }: { piece: BloodPiece } & PieceProps) {
  switch (piece) {
    case "lym-network": return <LymNetwork {...props} />;
    case "lym-family": return <LymFamily {...props} />;
    case "lym-diaphragm": return <LymDiaphragm {...props} />;
    case "lym-watch": return <LymWatch {...props} />;
    case "lym-antibody": return <LymAntibody {...props} />;
    case "lym-temperature": return <LymTemperature {...props} />;
    case "lym-energy": return <LymEnergy {...props} />;
    case "lym-later": return <LymLater {...props} />;
    case "lym-checkup-grid": return <LymCheckupGrid {...props} />;
    case "lym-steps": return <LymSteps {...props} />;
    case "lym-fork": return <LymFork {...props} />;
    case "lym-weather": return <LymWeather {...props} />;
    case "leuk-marrow": return <LeukMarrow {...props} />;
    case "leuk-grid": return <LeukGrid {...props} />;
    case "leuk-biopsy": return <LeukBiopsy {...props} />;
    case "leuk-dials": return <LeukDials {...props} />;
    case "leuk-range": return <LeukRange {...props} />;
    case "leuk-transplant": return <LeukTransplant {...props} />;
    case "leuk-hotline": return <LeukHotline {...props} />;
    case "leuk-transfusion": return <LeukTransfusion {...props} />;
    case "leuk-spread": return <LeukSpread {...props} />;
    case "leuk-plate": return <LeukPlate {...props} />;
    case "leuk-home": return <LeukHome {...props} />;
    case "leuk-fog": return <LeukFog {...props} />;
    case "mye-plasma": return <MyePlasma {...props} />;
    case "mye-crab": return <MyeCrab {...props} />;
    case "mye-trend": return <MyeTrend {...props} />;
    case "mye-path": return <MyePath {...props} />;
    case "mye-venn": return <MyeVenn {...props} />;
    case "mye-loop": return <MyeLoop {...props} />;
    case "mye-spine": return <MyeSpine {...props} />;
    case "mye-vials": return <MyeVials {...props} />;
    case "mye-filters": return <MyeFilters {...props} />;
    case "mye-week": return <MyeWeek {...props} />;
    case "mye-fingertips": return <MyeFingertips {...props} />;
    case "mye-hills": return <MyeHills {...props} />;
  }
}
