import type { NewsPiece } from "@/content/ischaemic-news";
import { CARE_PIECES, type CarePiece } from "@/content/care-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Chips, credit, HeartShape, INK, LINE, Person, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Lymphoedema and Living with secondary cancer pages' own pieces (content/care-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Cancer & recovery pieces. Each is steered by the card's sections;
// pictures show ideas, calmly, and never anyone's own body, scans or results. The secondary cancer pictures are about
// support, comfort, people and everyday life, never about time.

export const isCarePiece = (piece: NewsPiece): piece is CarePiece => (CARE_PIECES as readonly string[]).includes(piece);

/** The one-line caption for the chosen section. */
const Cap = ({ children }: { children: string }) => <W x={160} y={206} size={11}>{children}</W>;
/** A labelled box; `lit` fills it. */
const Box = ({ x, y, width, text, lit = false, height = 28, size = 10.5 }: { x: number; y: number; width: number; text: string; lit?: boolean; height?: number; size?: number }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x + width / 2} y={y + height / 2 + 4} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A limb or tube drawn as a thick outlined stroke along `d`. */
const Limb = ({ d, width = 14, fill = WHITE }: { d: string; width?: number; fill?: string }) =>
  <g><path d={d} stroke={INK} strokeWidth={width + 5} strokeLinecap="round" strokeLinejoin="round" fill="none" /><path d={d} stroke={fill} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" fill="none" /></g>;
/** A water drop of radius r, its round end centred on (x, y). */
const Drop = ({ x, y, r, fill = SOFT }: { x: number; y: number; r: number; fill?: string }) =>
  <path d={`M${x} ${y - r * 2} C${x + r * 0.4} ${y - r}, ${x + r} ${y - r * 0.6}, ${x + r} ${y} A${r} ${r} 0 0 1 ${x - r} ${y} C${x - r} ${y - r * 0.6}, ${x - r * 0.4} ${y - r}, ${x} ${y - r * 2} Z`} fill={fill} stroke={INK} strokeWidth="2" />;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g><circle cx={x} cy={y} r={r} fill={GOLD} />{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}</g>;
const Moon = ({ x, y, r = 13 }: { x: number; y: number; r?: number }) =>
  <path d={`M${x + 4} ${y - r} A${r} ${r} 0 1 0 ${x + 4} ${y + r} A${r * 1.15} ${r * 1.15} 0 0 1 ${x + 4} ${y - r} Z`} fill={SOFT} stroke={INK} strokeWidth="2" />;
/** An open notebook, centred on (x, y). */
const Diary = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 40} y={y - 24} width="40" height="48" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x} y={y - 24} width="40" height="48" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    {[0, 1, 2, 3].map(index => <path key={index} d={`M${x - 32} ${y - 12 + index * 10} H${x - 8} M${x + 8} ${y - 12 + index * 10} H${x + 32}`} stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" />)}</g>;
/** A small house: a hospice or a home, its floor at y. */
const House = ({ x, y, width = 70, heart = false }: { x: number; y: number; width?: number; heart?: boolean }) =>
  <g><path d={`M${x - width / 2} ${y} V${y - width * 0.6} L${x} ${y - width} L${x + width / 2} ${y - width * 0.6} V${y} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <rect x={x - 8} y={y - 22} width="16" height="22" rx="3" fill={SOFT} stroke={INK} strokeWidth="2" />
    {heart && <HeartShape x={x} y={y - width * 0.5} size={width * 0.36} fill={GOLD} width={2} />}</g>;
const fade = (lit: boolean) => (lit ? 1 : 0.35);

// ==== Lymphoedema ==========================================================================================

/** A standing figure with its lymph nodes, the head centred on (x, y). `swollen` widens the right arm. */
const Figure = ({ x, y, swollen = false, lit = false, blocked = false }: { x: number; y: number; swollen?: boolean; lit?: boolean; blocked?: boolean }) => {
  const nodes = [[-6, 17], [6, 17], [-17, 32], [17, 32], [-8, 84], [8, 84]];
  return <g>
    <Limb d={`M${x - 18} ${y + 28} L${x - 34} ${y + 94}`} width={13} />
    <Limb d={`M${x + 18} ${y + 28} L${x + 34} ${y + 94}`} width={swollen ? 22 : 13} fill={swollen ? TINT : WHITE} />
    <Limb d={`M${x - 9} ${y + 84} L${x - 13} ${y + 150}`} width={14} /><Limb d={`M${x + 9} ${y + 84} L${x + 13} ${y + 150}`} width={14} />
    <rect x={x - 22} y={y + 16} width="44" height="74" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" />
    <circle cx={x} cy={y} r="12" fill={WHITE} stroke={INK} strokeWidth="3" />
    <path d={`M${x - 33} ${y + 90} L${x - 17} ${y + 32} L${x - 6} ${y + 17} M${x + 33} ${y + 90} L${x + 17} ${y + 32} L${x + 6} ${y + 17} M${x - 12} ${y + 146} L${x - 8} ${y + 86} M${x + 12} ${y + 146} L${x + 8} ${y + 86}`}
      stroke={lit ? INK : SOFT} strokeWidth="1.8" fill="none" />
    {nodes.map(([dx, dy]) => <circle key={`${dx} ${dy}`} cx={x + dx} cy={y + dy} r="3.5" fill={lit ? GOLD : INK} stroke={WHITE} strokeWidth="1" />)}
    {blocked && <><path d={`M${x + 12} ${y + 27} L${x + 22} ${y + 37} M${x + 22} ${y + 27} L${x + 12} ${y + 37}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />
      {[0.4, 0.6, 0.8].map(t => <circle key={t} cx={x + 18 + t * 16 + 3} cy={y + 28 + t * 66} r="2.5" fill={INK} />)}</>}
  </g>;
};

function DrainMap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="The lymphatic system" title="When the body's drainage backs up" label="What lymphoedema is" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with its lymph vessels and nodes, and one arm swollen where fluid has built up">
      <Figure x={80} y={24} swollen={at === 0 || at === 2} lit={at === 1} blocked={at === 2} />
      {at === 0 && <Tags x={170} y={40} labels={["Arms or legs", "Chest or back", "Head and neck"]} lit={index => index === 0} width={130} />}
      {at === 1 && <>{[["Neck", 41], ["Armpit", 56], ["Groin", 108]].map(([label, y]) => <g key={label}>
        <path d={`M${label === "Armpit" ? 101 : 92} ${y} H164`} stroke={SOFT} strokeWidth="2" strokeDasharray="3 3" /><W x={170} y={(y as number) + 4} size={11} anchor="start">{label}</W></g>)}</>}
      {at === 2 && <Tags x={172} y={40} labels={["Blocked", "Removed", "Damaged"]} lit={() => false} width={126} />}
      {at === 3 && <><rect x="170" y="30" width="134" height="46" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={237} y={50} size={11}>Primary</W><W x={237} y={66} size={10}>rare, from genes</W>
        <rect x="170" y="86" width="134" height="46" rx="10" fill={INK} /><W x={237} y={106} size={11} fill={WHITE}>Secondary</W><W x={237} y={122} size={10} fill={WHITE}>much more common</W>
        <W x={237} y={156} size={10}>More than 200,000</W><W x={237} y={170} size={10}>people in the UK</W></>}
      {at === 4 && <Tags x={166} y={40} labels={["Limit fluid build-up", "Help fluid flow", "Lead very full lives"]} lit={index => index === 2} width={140} />}
      <Cap>{["Long-term swelling, usually arm or leg", "Tubes and nodes drain fluid away", "More fluid than the system can carry", "Secondary is much more common", "Not cured, but usually well controlled"][at]}</Cap>
    </svg>} />;
}

function BeadString(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const beads = [56, 104, 152, 200, 248];
  const bead = (x: number, y: number, r: number, gone = false, hard = false) => hard
    ? <rect key={x} x={x - r} y={y - r} width={r * 2} height={r * 2} rx="3" fill={INK} />
    : <circle key={x} cx={x} cy={y} r={r} fill={gone ? "none" : WHITE} stroke={INK} strokeWidth="2.5" strokeDasharray={gone ? "4 3" : undefined} />;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="How treatment can interrupt the flow" label="Why it follows treatment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A lymph vessel with its nodes, some removed by surgery and one hardened by radiotherapy">
      <path d={at === 0 ? "M24 50 H88 M168 50 H296" : "M24 50 H296"} stroke={INK} strokeWidth="3" />
      {at === 0 && <path d="M88 50 H168" stroke={SOFT} strokeWidth="2" strokeDasharray="4 4" />}
      {beads.map((x, index) => bead(x, 50, 9, at === 0 && (index === 1 || index === 2), at === 0 && index === 4))}
      {at === 0 && <>
        {[[234, 16, 243, 36], [248, 14, 248, 36], [262, 16, 253, 36]].map(([x1, y1, x2, y2]) => <path key={x1} d={`M${x1} ${y1} L${x2} ${y2}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />)}
        <g stroke={INK} strokeWidth="3" fill="none"><circle cx="120" cy="100" r="7" /><circle cx="136" cy="100" r="7" /><path d="M124 94 L140 68 M132 94 L116 68" strokeLinecap="round" /></g>
        <Drop x={40} y={96} r={7} /><Drop x={58} y={104} r={7} /><Drop x={76} y={96} r={7} />
        <W x={58} y={134} size={10}>Fluid builds up</W><W x={128} y={134} size={10}>Surgery</W><W x={248} y={134} size={10}>Radiotherapy</W></>}
      {at === 1 && <>
        <path d="M30 98 H120" stroke={INK} strokeWidth="2.5" />{[45, 75, 105].map(x => bead(x, 98, 7, x === 75))}<W x={136} y={102} size={10.5} anchor="start">Sentinel biopsy: 1 or 2</W>
        <path d="M30 142 H120" stroke={SOFT} strokeWidth="2.5" strokeDasharray="4 4" />{[45, 75, 105].map(x => bead(x, 142, 7, true))}<W x={136} y={146} size={10.5} anchor="start">A whole group removed</W></>}
      {at === 2 && <Chips labels={["Arm", "Leg", "Chest", "Pelvis", "Neck"]} lit={-1} y={104} />}
      {at === 3 && <><Tags x={24} y={88} labels={["Weight changes", "Skin infection"]} lit={() => false} width={132} gap={38} /><Tags x={164} y={88} labels={["Not moving about", "Injury or clot"]} lit={() => false} width={132} gap={38} /></>}
      {at === 4 && <><path d="M40 130 H280" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
        {[[70, WHITE], [170, GOLD], [260, GOLD]].map(([x, fill]) => <circle key={x} cx={x as number} cy="130" r="8" fill={fill as string} stroke={INK} strokeWidth="2.5" />)}
        <W x={70} y={156} size={10}>First days</W><W x={170} y={156} size={10}>Months</W><W x={260} y={156} size={10}>Years</W>
        <W x={70} y={110} size={10}>Scar swelling</W><W x={215} y={110} size={10}>Lymphoedema can start</W></>}
      <Cap>{["Surgery and radiotherapy block flow", "Removing 1 or 2 nodes: a lower risk", "Arm, leg, chest, pelvis, head or neck", "Weight, infection and not moving", "Can start months or even years later"][at]}</Cap>
    </svg>} />;
}

function RingSock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Early signs" title="A tight ring can be the first sign" label="Early signs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hand with a tight ring and an ankle with a sock leaving a dent">
      <g opacity={fade(at !== 2)}>
        {[22, 40, 58].map(x => <rect key={x} x={x} y="58" width="16" height="62" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />)}
        <rect x="72" y="112" width="13" height="40" rx="6.5" fill={WHITE} stroke={INK} strokeWidth="2.5" transform="rotate(-24 78 132)" />
        <rect x="18" y="104" width="62" height="66" rx="16" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="37" y="86" width="22" height="8" rx="3" fill={at === 0 ? GOLD : SOFT} stroke={INK} strokeWidth="1.5" />
        <rect x="98" y="134" width="58" height="26" rx="13" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="98" y="40" width="28" height="112" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="97" y="110" width="30" height="38" rx="6" fill={SOFT} />
        <path d="M96 110 H128" stroke={at === 0 ? GOLD : INK} strokeWidth="4" strokeLinecap="round" />
        {at === 1 && <ellipse cx="112" cy="76" rx="7" ry="5" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      </g>
      {at === 0 && <Tags x={172} y={40} labels={["Rings feel tighter", "Heavy, tight or full", "Aching or tingling"]} lit={index => index === 0} width={134} />}
      {at === 1 && <><Sun x={196} y={58} /><W x={222} y={62} size={10.5} anchor="start">More by day</W><Moon x={196} y={112} /><W x={222} y={116} size={10.5} anchor="start">Less overnight</W></>}
      {at === 2 && <Tags x={166} y={44} labels={["Face, mouth or throat", "Swallowing, speech", "Genital heaviness"]} lit={() => true} width={142} gap={36} />}
      {at === 3 && <><g>{Array.from({ length: 6 }, (_, index) => <g key={index}><rect x={176 + index * 22} y="66" width="18" height="18" rx="4" fill={INK} /><W x={185 + index * 22} y={79} size={9.5} fill={WHITE}>{index + 1}</W></g>)}</g>
        <W x={240} y={108} size={10}>weeks after surgery</W></>}
      {at === 4 && <Tags x={172} y={60} labels={["Doctor or nurse", "Your GP"]} lit={() => true} width={134} />}
      <Cap>{["Rings and clothes may feel tighter", "Worse in the day, down overnight", "Head, neck and genital signs too", "Surgery swelling: usually 6 weeks", "Report any change, as early as you can"][at]}</Cap>
    </svg>} />;
}

function TapeRings(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diagnosis" title="Measuring what the swelling is doing" label="Diagnosis" credit="Illustration: Rehyn. A picture of the idea, not anyone's measurements."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two arms side by side with tape-measure rings at regular intervals">
      <Limb d="M70 30 L70 168" width={26} /><Limb d="M130 30 L130 168" width={36} fill={TINT} />
      {[52, 84, 116, 148].map(y => <g key={y} stroke={at === 2 ? GOLD : LINE} strokeWidth="2.5" fill="none"><ellipse cx="70" cy={y} rx="17" ry="5" /><ellipse cx="130" cy={y} rx="22" ry="6" /></g>)}
      {at === 1 && <circle cx="130" cy="100" r="6" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      {at === 0 && <Tags x={180} y={40} labels={["Examination", "Medical history", "Specialist referral"]} lit={() => false} width={128} />}
      {at === 1 && <>{[0, 1, 2, 3].map(index => <g key={index}><rect x={182 + index * 32} y="60" width="26" height="30" rx="7" fill={index === 3 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={195 + index * 32} y={80} size={12} fill={index === 3 ? WHITE : TEXT}>{index}</W></g>)}
        <W x={195} y={110} size={10}>At risk</W><W x={291} y={110} size={10}>A lot</W></>}
      {at === 2 && <Tags x={180} y={30} labels={["Tape measure", "Perometry", "Water", "Bioimpedance"]} lit={index => index === 0} width={128} />}
      {at === 3 && <><path d="M190 40 V150 H300" stroke={LINE} strokeWidth="3" fill="none" />
        <path d="M200 112 L225 96 L250 104 L275 88 L296 92" stroke={INK} strokeWidth="3" fill="none" />
        {[[200, 112], [225, 96], [250, 104], [275, 88], [296, 92]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="5" fill={GOLD} stroke={WHITE} strokeWidth="1.5" />)}
        <W x={245} y={170} size={10}>Progress chart</W></>}
      <Cap>{["Often an exam and history are enough", "Severity is staged from 0 to 3", "A tape measure, compared side by side", "Keep a progress chart of measurements"][at]}</Cap>
    </svg>} />;
}

function SleeveArrows(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Compression" title="A sleeve for muscles to push against" label="Compression garments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An arm in a compression sleeve, with even pressure inwards and fluid moving towards the body">
      <Limb d="M36 100 H236" width={40} fill={TINT} />
      <rect x="76" y="76" width="150" height="48" rx="18" fill={SOFT} stroke={at === 3 ? GOLD : INK} strokeWidth="3" />
      <circle cx="258" cy="100" r="20" fill={WHITE} stroke={INK} strokeWidth="3" />
      {at === 0 && <>{[100, 130, 160, 190].map(x => <path key={x} d={`M${x} 52 V68 M${x - 5} 63 L${x} 69 L${x + 5} 63 M${x} 148 V132 M${x - 5} 137 L${x} 131 L${x + 5} 137`} stroke={INK} strokeWidth="2.5" strokeLinecap="round" fill="none" />)}
        <path d="M210 100 H74 M84 92 L72 100 L84 108" stroke={GOLD} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" className={still ? undefined : "lib-why-pulse"} /></>}
      {at === 1 && <Chips labels={["Sleeve", "Stocking", "Glove", "Bra, vest"]} lit={0} y={152} />}
      {at === 2 && <><Sun x={62} y={36} /><W x={86} y={40} size={10.5} anchor="start">First thing in the morning</W><Chips labels={["Fold back", "Ease up", "Smooth it"]} lit={-1} y={152} /></>}
      {at === 3 && <><Box x={100} y={22} width={120} text="Take it off" lit /><Chips labels={["Pain", "Numbness", "Colour change"]} lit={-1} y={152} /></>}
      {at === 4 && <><W x={160} y={44} size={10.5}>Hot weather: spare in the fridge</W><Chips labels={["2 garments", "Hand wash", "Dry flat"]} lit={0} y={152} /></>}
      <Cap>{["Even, firm pressure moves fluid on", "Measured and fitted by a specialist", "Ease it on; don't pull from the top", "Painful? Off, and tell your specialist", "At least 2, each lasting 3 to 6 months"][at]}</Cap>
    </svg>} />;
}

function SkinGuard(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  let skin = "M24 120";
  for (let x = 24; x < 296; x += 34) skin += " q17 -8 34 0";
  skin += " V176 H24 Z";
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Skin care" title="Small daily care, big protection" label="Skin care" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A layer of skin with a small cut, and the everyday care that keeps it whole">
      <path d={skin} fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M26 150 H294" stroke={LINE} strokeWidth="2" />
      {(at === 0 || at === 3) && <path d="M151 118 L160 136 L169 118" stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" />}
      {at === 0 && <>{[[146, 92, 30], [168, 80, -20], [160, 104, 10]].map(([x, y, a]) => <ellipse key={x} cx={x} cy={y} rx="7" ry="4" fill={INK} transform={`rotate(${a} ${x} ${y})`} />)}
        <path d="M184 70 C196 84, 184 104, 170 112" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" /></>}
      {at === 1 && <><Drop x={80} y={70} r={12} />
        <g><rect x="140" y="48" width="40" height="32" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M140 60 H180 M140 68 H180" stroke={SOFT} strokeWidth="3" /></g>
        <g><rect x="222" y="48" width="36" height="10" rx="3" fill={INK} /><rect x="225" y="56" width="30" height="24" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /></g>
        <W x={80} y={102} size={10.5}>Wash</W><W x={160} y={102} size={10.5}>Dry gently</W><W x={240} y={102} size={10.5}>Moisturise</W></>}
      {at === 2 && <Chips labels={["Gloves", "Repellent", "Sunscreen", "Shaver"]} lit={-1} y={44} />}
      {at === 3 && <><g transform="rotate(-10 160 124)"><rect x="132" y="114" width="56" height="20" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="150" y="117" width="20" height="14" rx="3" fill={SOFT} /></g>
        <Bubble x={160} y={56} text="Red and hot? Contact your team now" width={220} /></>}
      {at === 4 && <><g stroke={SOFT} strokeWidth="3" fill="none" strokeLinecap="round">{[60, 80, 100].map(x => <path key={x} d={`M${x} 96 C${x - 8} 86, ${x + 8} 76, ${x} 66 C${x - 8} 58, ${x + 6} 52, ${x} 46`} />)}</g>
        <g><path d="M214 92 L246 52" stroke={INK} strokeWidth="4" strokeLinecap="round" /><path d="M240 46 L254 58" stroke={INK} strokeWidth="5" strokeLinecap="round" />
          <circle cx="230" cy="72" r="24" fill="none" stroke={GOLD} strokeWidth="3.5" /><path d="M213 89 L247 55" stroke={GOLD} strokeWidth="3.5" /></g>
        <W x={80} y={36} size={10.5}>Hot tubs, saunas</W><W x={230} y={36} size={10.5}>Needles, tattoos</W></>}
      <Cap>{["A cut can let bacteria in", "Wash, dry gently, moisturise daily", "Gloves, repellent and sunscreen", "Clean it, add antiseptic, cover it", "Keep heat brief; needles elsewhere"][at]}</Cap>
    </svg>} />;
}

function ClearPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const healthy = at === 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Lymphatic drainage" title="Clear the path, then drain" label="Lymphatic drainage" credit="Illustration: Rehyn. Learn the steps from a lymphoedema specialist."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An upper body with a swollen arm, the healthy lymph nodes cleared first and fluid guided towards them">
      <Limb d="M58 104 L42 178" width={16} /><Limb d="M134 104 L152 178" width={26} fill={TINT} />
      <rect x="88" y="50" width="16" height="26" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M52 184 C52 118, 66 72, 96 72 C126 72, 140 118, 140 184 Z" fill={WHITE} stroke={INK} strokeWidth="3" />
      <circle cx="96" cy="38" r="17" fill={WHITE} stroke={INK} strokeWidth="3" />
      {[[86, 78, true], [106, 78, true], [64, 106, true], [128, 106, false]].map(([x, y, ok]) => <circle key={`${x}`} cx={x as number} cy={y as number} r="4.5" fill={healthy && ok ? GOLD : INK} stroke={WHITE} strokeWidth="1.2" className={healthy && ok && !still ? "lib-why-pulse" : undefined} />)}
      {(at === 1 || at === 2) && <path d="M148 160 C144 130, 136 112, 120 104 C100 96, 82 98, 70 104 M78 97 L68 105 L79 110" stroke={GOLD} strokeWidth="3" strokeDasharray={at === 2 ? "5 5" : undefined} fill="none" strokeLinecap="round" />}
      {at === 0 && <><g stroke={SOFT} strokeWidth="3" fill="none" strokeLinecap="round"><path d="M84 132 Q96 124 108 132" /><path d="M80 146 Q96 136 112 146" /></g>
        <Tags x={182} y={40} labels={["Light", "Slow", "Rhythmic"]} lit={() => false} width={124} /></>}
      {at === 1 && <Tags x={182} y={56} labels={["1. Healthy nodes", "2. Then the arm"]} lit={index => index === 0} width={124} gap={38} />}
      {at === 2 && <Tags x={182} y={40} labels={["Learn it first", "Healthy areas only", "No oils or creams"]} lit={() => false} width={124} />}
      {at === 3 && <><circle cx="96" cy="142" r="18" fill={SOFT} className={still ? undefined : "lib-v2-breathe is-slow"} />
        <Tags x={182} y={40} labels={["Hands on ribs", "Tummy rises", "Rest, then get up"]} lit={() => false} width={124} /></>}
      {at === 4 && <Tags x={182} y={30} labels={["Infection", "A blood clot", "Heart problems", "Cancer in the area"]} lit={() => false} width={124} />}
      <Cap>{["Light, slow, rhythmic movements", "Clear healthy nodes first, then drain", "Twice a day, about 20 minutes", "Breathe slowly in and out, 5 times", "Check first if any of these apply"][at]}</Cap>
    </svg>} />;
}

function CalfPump(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const foot = (up: boolean, ghost = false) => <g opacity={ghost ? 0.35 : 1}><Limb d={`M226 116 L${up ? 238 : 250} ${up ? 86 : 132}`} width={14} /></g>;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercise" title="Moving muscles, moving fluid" label="Exercise" credit="Illustration: Rehyn. Check with your lymphoedema specialist before starting."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A leg resting on a stool, the calf muscle squeezing the lymph vessels as the foot moves">
      <rect x="10" y="40" width="12" height="98" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="10" y="126" width="66" height="12" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M18 138 V176 M68 138 V176 M196 144 V172 M250 144 V172" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <rect x="186" y="132" width="74" height="12" rx="5" fill={SOFT} stroke={INK} strokeWidth="2.5" />
      {at === 2 && foot(false, true)}
      {foot(at !== 4)}
      <Limb d="M30 112 H128 L226 116" width={26} />
      <ellipse cx="176" cy="122" rx="30" ry="7" fill={at === 0 ? GOLD : SOFT} className={at === 0 && !still ? "lib-why-pulse" : undefined} />
      <path d="M40 112 H128 L220 116" stroke={at === 0 ? GOLD : LINE} strokeWidth="2" strokeDasharray="5 4" fill="none" />
      {at === 0 && [100, 150, 200].map(x => <path key={x} d={`M${x + 5} ${110} L${x} ${114} L${x + 5} ${118}`} stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />)}
      {at === 4 && <ellipse cx="150" cy="113" rx="22" ry="8" fill={GOLD} opacity="0.7" />}
      {at === 1 && <Chips labels={["Walking", "Swimming", "Yoga", "Cycling"]} lit={0} y={24} />}
      {at === 2 && <W x={150} y={50} size={10.5}>Not painful; a stretch is normal</W>}
      {at === 3 && <W x={150} y={50} size={10.5}>Fully supported under the knee</W>}
      {at === 4 && <Box x={110} y={30} width={100} text="Stop and rest" lit />}
      <Cap>{["Working muscles push lymph along", "Talk to your specialist, start gently", "Toes up and down, 5 to 10 times", "Leg up on a stool; move once an hour", "Changes? Stop and contact your team"][at]}</Cap>
    </svg>} />;
}

function ActLadder(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Cellulitis" title="Red, hot, swollen: act straight away" label="Cellulitis" credit="Illustration: Rehyn. If you have these signs, get help straight away."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A lower leg with a red, hot patch, beside the steps to take straight away">
      <rect x="48" y="140" width="66" height="30" rx="14" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <Limb d="M66 28 L66 150" width={34} />
      {at >= 1 && at <= 3 && <ellipse cx="66" cy="104" rx="14" ry="24" fill={GOLD} opacity="0.75" className={at === 1 && !still ? "lib-why-pulse" : undefined} />}
      {at === 0 && <><path d="M58 128 L64 136 L70 128" stroke={INK} strokeWidth="2.5" fill="none" />{[[48, 116], [82, 112], [76, 124]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="3.5" fill={INK} />)}
        <Tags x={140} y={40} labels={["A scratch", "An insect bite", "Athlete's foot"]} lit={() => false} width={166} /></>}
      {at === 1 && <><rect x="146" y="40" width="14" height="60" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="150" y="56" width="6" height="44" fill={GOLD} /><circle cx="153" cy="106" r="10" fill={GOLD} stroke={INK} strokeWidth="2.5" />
        <Tags x={176} y={40} labels={["Flu-like, shivery", "Red, hot, painful", "Darker or purple"]} lit={() => false} width={130} /></>}
      {at === 2 && <><path d="M150 50 V140" stroke={LINE} strokeWidth="4" />
        <Box x={140} y={36} width={166} height={32} text="GP straight away" lit /><Box x={140} y={80} width={166} height={32} text="Evenings, weekends: 111" /><Box x={140} y={124} width={166} height={32} text="Your 24 hour line" /></>}
      {at === 3 && <><Box x={140} y={28} width={166} height={40} text="999 or A&E" lit size={16} />
        <Tags x={140} y={84} labels={["Fast heartbeat or breath", "Dizzy, faint, confused", "Don't drive yourself"]} lit={() => false} width={166} gap={32} /></>}
      {at === 4 && <><g>{Array.from({ length: 14 }, (_, index) => <rect key={index} x={146 + (index % 7) * 22} y={index < 7 ? 48 : 72} width="18" height="18" rx="4" fill={INK} />)}</g>
        <W x={222} y={124} size={10.5}>Rest it raised, drink water</W></>}
      <Cap>{["The most common complication", "Feeling unwell, then red and hot", "GP straight away, or 111 out of hours", "Serious signs: call 999 or go to A&E", "Full course, usually 14 days"][at]}</Cap>
    </svg>} />;
}

function PlaneSeat(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Travel" title="Holidays, planned around your limb" label="Travel and flying" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A traveller in a seat, moving their ankles, with what to plan before and during a trip">
      <rect x="36" y="60" width="22" height="96" rx="9" fill={SOFT} stroke={INK} strokeWidth="2.5" />
      <path d="M48 156 V180 M108 156 V180" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <path d="M100 140 H134 L140 174" stroke={INK} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="36" y="136" width="84" height="20" rx="8" fill={SOFT} stroke={INK} strokeWidth="2.5" />
      <Person x={84} y={126} scale={1.25} />
      <ellipse cx="148" cy="178" rx="11" ry="5" fill={INK} />
      {at === 1 && <circle cx="146" cy="174" r="15" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" className={still ? undefined : "lib-why-pulse"} />}
      {at === 0 && <><rect x="208" y="34" width="60" height="58" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M226 34 V24 H250 V34 M238 44 V82" stroke={INK} strokeWidth="2.5" fill="none" />
        <circle cx="220" cy="98" r="5" fill={INK} /><circle cx="256" cy="98" r="5" fill={INK} />
        <Tags x={176} y={118} labels={["Usual routine", "Don't overdo it"]} lit={() => false} width={130} gap={32} /></>}
      {at === 1 && <Tags x={176} y={40} labels={["Gentle stretches", "Loose clothes", "Wheeled suitcase"]} lit={index => index === 0} width={130} />}
      {at === 2 && <><path d="M241 60 V130" stroke={LINE} strokeWidth="4" />
        <Box x={176} y={36} width={130} text="2 hours before" /><Box x={176} y={80} width={130} text="The flight" lit /><Box x={176} y={124} width={130} text="2 hours after" /></>}
      {at === 3 && <><Sun x={200} y={48} r={12} /><Tags x={176} y={76} labels={["Sun protection", "Insect repellent", "Antibiotics? Ask"]} lit={() => false} width={130} gap={32} /></>}
      <Cap>{["Plan ahead; keep your usual routine", "Move often, circle ankles, drink water", "A worn-in garment, before and after", "Protect skin; ask about antibiotics"][at]}</Cap>
    </svg>} />;
}

function Wardrobe(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const hanger = (x: number) => <path d={`M${x} 42 V48 L${x - 18} 58 H${x + 18} Z`} stroke={INK} strokeWidth="2" fill="none" strokeLinejoin="round" />;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Everyday life" title="Small swaps for everyday comfort" label="Everyday life" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A wardrobe with comfortable clothes and shoes, and changes that help at home and work">
      {at < 4 && <><rect x="24" y="20" width="132" height="164" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M34 42 H146" stroke={INK} strokeWidth="3" /></>}
      {at === 0 && <><circle cx="62" cy="112" r="16" fill="none" stroke={GOLD} strokeWidth="5" /><rect x="108" y="84" width="16" height="56" rx="4" fill={SOFT} /><circle cx="116" cy="112" r="13" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M44 94 L80 130 M80 94 L44 130 M98 94 L134 130 M134 94 L98 130" stroke={INK} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" /></>}
      {at === 1 && <>{hanger(90)}<path d="M64 112 L70 62 M116 112 L110 62" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        <ellipse cx="72" cy="120" rx="20" ry="15" fill={TINT} stroke={INK} strokeWidth="2.5" /><ellipse cx="108" cy="120" rx="20" ry="15" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M50 134 H130" stroke={INK} strokeWidth="6" strokeLinecap="round" /></>}
      {at === 2 && <>{hanger(66)}<path d="M42 58 H90 L98 166 H74 L66 104 L58 166 H34 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M104 176 V158 Q104 150 112 150 H124 Q132 150 136 160 L148 166 Q152 176 144 176 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /></>}
      {at === 3 && <g fill={SOFT} stroke={INK} strokeWidth="2.5">
        {[56, 72, 88, 104].map((x, index) => <rect key={x} x={x} y={index === 0 || index === 3 ? 72 : 62} width="14" height="50" rx="7" />)}
        <rect x="108" y="104" width="14" height="40" rx="7" transform="rotate(35 115 124)" />
        <rect x="54" y="100" width="66" height="56" rx="14" /><rect x="58" y="150" width="58" height="20" rx="4" fill={INK} /></g>}
      {at === 4 && <><rect x="24" y="96" width="132" height="10" rx="3" fill={INK} /><path d="M34 106 V170 M146 106 V170" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <rect x="64" y="66" width="52" height="30" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="66" y="156" width="52" height="16" rx="5" fill={SOFT} stroke={INK} strokeWidth="2.5" /></>}
      <Tags x={172} y={at === 4 ? 30 : 46} labels={[["Rings, watches", "Tight armholes", "Waistbands"], ["Get measured", "Light prosthesis", "Ask your nurse"], ["Extra wide shoes", "Odd sizes", "Batwing tops"], ["Gardening gloves", "Oven gloves", "Help from family"], ["Flexible hours", "Working from home", "A footstool", "Movement breaks"]][at]} lit={() => false} width={134} />
      <Cap>{["Avoid tight rings, cuffs and straps", "Wide, flexible straps, deep sides", "Extra wide shoes and altered clothes", "Gloves on; let others help with tasks", "Employers can often make changes"][at]}</Cap>
    </svg>} />;
}

function BenchTalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Feelings" title="Living with a visible change" label="Feelings" credit="Illustration: Rehyn. If you need help now, see the last section."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="People sitting on a bench, talking, with the support that is there">
      <path d="M56 156 V182 M264 156 V182" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <Person x={at === 4 ? 74 : 110} y={140} scale={1.3} />
      {at === 2 && <Person x={210} y={140} scale={1.3} fill={SOFT} />}
      <rect x="40" y="146" width="240" height="10" rx="4" fill={SOFT} stroke={INK} strokeWidth="2" />
      {at === 0 && <Chips labels={["Angry", "Frightened", "Sad"]} lit={-1} y={24} />}
      {at === 1 && <Bubble x={186} y={56} text="It's up to you" width={120} />}
      {at === 2 && <Bubble x={170} y={50} text="Family, friends, nurse" width={160} />}
      {at === 3 && <>{Array.from({ length: 14 }, (_, index) => <rect key={index} x={104 + (index % 7) * 20} y={index < 7 ? 26 : 48} width="16" height="16" rx="3" fill={INK} />)}<W x={250} y={48} size={11} anchor="start">2 weeks</W></>}
      {at === 4 && <Tags x={140} y={16} labels={["Samaritans 116 123", "111, mental health", "Text SHOUT to 85258", "999 or A&E"]} lit={() => true} width={164} gap={30} />}
      <Cap>{["However you feel, it is okay", "You choose how much to explain", "Talking with people you trust helps", "Low for over 2 weeks? Tell your doctor", "Urgent help is there, day or night"][at]}</Cap>
    </svg>} />;
}

// ==== Living with secondary cancer ==========================================================================

function SameCells(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const cells = (points: number[][]) => points.map(([x, y]) => <circle key={`${x} ${y}`} cx={x} cy={y} r="6" fill={GOLD} stroke={WHITE} strokeWidth="1.5" />);
  const labels = [["Where it started", "Somewhere new"], ["Breast", "Liver"], ["Primary", "Secondary"], ["", ""], ["", ""]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Spread" title="The same cancer, in a new place" label="What it means" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Cancer cells travelling from where they started to a new place, where they are still the same type">
      {at < 4 && <>
        <path d="M100 108 C140 160, 180 160, 222 108" stroke={SOFT} strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M30 78 C30 46, 60 36, 82 40 C112 44, 124 64, 120 88 C116 112, 92 122, 66 118 C42 114, 30 100, 30 78 Z" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <rect x="196" y="40" width="96" height="78" rx="34" fill={TINT} stroke={INK} strokeWidth="2.5" />
        {cells([[64, 72], [78, 64], [76, 84], [92, 76], [62, 90]])}
        {cells(at === 0 ? [[236, 76]] : [[234, 74], [248, 66], [246, 88], [260, 80]])}
        {at === 0 && [[140, 142], [182, 142]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="5" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />)}
        {labels[0] && <><W x={76} y={138} size={10}>{labels[0]}</W><W x={244} y={138} size={10}>{labels[1]}</W></>}
        {at === 1 && <W x={160} y={28} size={10.5}>Still breast cancer cells</W>}
        {at === 2 && <Chips labels={["Secondary", "Metastatic", "Stage 4"]} lit={-1} y={154} />}
        {at === 3 && <Chips labels={["Control the cancer", "Manage symptoms"]} lit={-1} y={154} />}</>}
      {at === 4 && <><HeartShape x={160} y={56} size={46} fill={GOLD} /><Person x={120} y={132} scale={1.4} /><Person x={200} y={132} scale={1.4} fill={SOFT} />
        <Box x={50} y={158} width={220} height={26} text="Macmillan: 0808 808 00 00" /></>}
      <Cap>{["Cells can travel and form a new tumour", "Still the same type of cancer", "Words doctors may use for spread", "Everyone responds differently", "Feelings usually get easier with time"][at]}</Cap>
    </svg>} />;
}

function Balance(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tilt = at === 3 ? 7 : 0;
  const a = tilt * Math.PI / 180;
  const ends = [[160 - 84 * Math.cos(a), 50 - 84 * Math.sin(a)], [160 + 84 * Math.cos(a), 50 + 84 * Math.sin(a)]];
  const labels = [["Control", "Feel well"], ["", ""], ["Ease symptoms", "Quality of life"], ["Benefits", "Side effects"], ["", ""]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Treatment aims" title="Control, comfort and your own choices" label="What treatment is for" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A set of scales weighing what treatment can do against its side effects">
      <rect x="156" y="50" width="8" height="92" fill={INK} /><rect x="116" y="138" width="88" height="8" rx="4" fill={INK} />
      <path d={`M${ends[0][0]} ${ends[0][1]} L${ends[1][0]} ${ends[1][1]}`} stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <circle cx="160" cy="50" r="6" fill={GOLD} />
      {ends.map(([x, y], index) => <g key={index}>
        <path d={`M${x} ${y} L${x - 30} ${y + 34} M${x} ${y} L${x + 30} ${y + 34}`} stroke={INK} strokeWidth="1.8" />
        <path d={`M${x - 36} ${y + 34} Q${x} ${y + 62} ${x + 36} ${y + 34} Z`} fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        {labels[index] && <W x={x} y={y + 66} size={10.5}>{labels[index]}</W>}
      </g>)}
      {at === 1 && <Chips labels={["Radiotherapy", "Chemotherapy", "Hormonal"]} lit={-1} y={154} />}
      {at === 2 && <Box x={105} y={156} width={110} text="It's OK to ask" />}
      {at === 3 && <Box x={100} y={156} width={120} text="Your choice" lit />}
      {at === 4 && <><Bubble x={90} y={160} text="What is it for?" width={124} /><Bubble x={232} y={160} text="Other options?" width={116} /></>}
      <Cap>{["Helping you feel as well as possible", "Many treatments, sometimes combined", "Palliative: easing symptoms", "Your choice, with your team's support", "Your doctors should help you decide"][at]}</Cap>
    </svg>} />;
}

function HelperCircle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const helpers = [["GP", 40], ["Nurse", 100], ["Palliative", 160], ["Physio", 220], ["OT", 280]] as const;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="Symptoms, and the people who help" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person at the centre, with the team who can help with symptoms around them">
      <Person x={160} y={160} scale={1.2} />
      {at === 0 && <Bubble x={196} y={84} text="New symptom?" width={120} />}
      {at === 1 && <Chips labels={["Pain", "Sickness", "Breathless", "Tired"]} lit={-1} y={40} />}
      {at === 2 && <><HeartShape x={160} y={100} size={34} fill={GOLD} width={2} /><Chips labels={["Medicines", "Non-drug help", "Self-help"]} lit={-1} y={34} /></>}
      {at === 3 && helpers.map(([label, x]) => <g key={label}>
        <path d={`M${x} 88 L${x + (160 - x) * 0.7} 112`} stroke={SOFT} strokeWidth="2" strokeDasharray="4 4" />
        <Person x={x} y={46} scale={0.75} fill={label === "Palliative" ? INK : SOFT} /><W x={x} y={80} size={10}>{label}</W></g>)}
      {at === 4 && <><rect x="20" y="34" width="170" height="50" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={105} y={55} size={10.5}>New breathlessness:</W><W x={105} y={72} size={10.5}>doctor straight away</W>
        <rect x="204" y="34" width="96" height="50" rx="10" fill={INK} /><W x={252} y={60} size={18} fill={WHITE}>999</W><W x={252} y={76} size={10} fill={WHITE}>Chest pain</W></>}
      <Cap>{["Check any new symptom with your team", "Everyone's symptoms are different", "For most people, pain can be managed", "Palliative teams are symptom experts", "Chest pain or hard to breathe: 999"][at]}</Cap>
    </svg>} />;
}

function CareRibbons(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const ribbon = (y: number, label: string, lit: boolean, fill: string, text: string) => <g opacity={fade(lit)}>
    <rect x="24" y={y} width="262" height="20" rx="10" fill={fill} /><path d={`M286 ${y - 2} L304 ${y + 10} L286 ${y + 22} Z`} fill={fill} />
    <W x={40} y={y + 14} size={10.5} anchor="start" fill={text}>{label}</W></g>;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Palliative care" title="Palliative care is for living" label="Palliative care" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Palliative care running alongside treatment from early on, with support for the whole person">
      {ribbon(126, "Your treatment", at === 2 || at === 3, INK, WHITE)}
      {ribbon(154, "Palliative care", true, GOLD, TEXT)}
      {at === 1 && [150, 210, 260].map(x => <circle key={x} cx={x} cy="164" r="6" fill={WHITE} stroke={INK} strokeWidth="2" />)}
      {at === 0 && <><Person x={64} y={92} scale={1.3} /><Tags x={128} y={18} labels={["Physical support", "Emotional support", "Practical support"]} lit={() => false} width={160} gap={32} /></>}
      {at === 1 && <Bubble x={160} y={56} text="Based on your needs" width={160} />}
      {at === 2 && <Chips labels={["Chemo", "Radiotherapy", "Specialists"]} lit={-1} y={48} />}
      {at === 3 && <><House x={84} y={106} width={78} heart /><Tags x={150} y={20} labels={["Day visits", "Short stays", "Care at home"]} lit={() => false} width={140} gap={32} /></>}
      {at === 4 && <><Person x={52} y={96} scale={1.2} /><Box x={96} y={30} width={204} text="Referral: GP or district nurse" /><Box x={96} y={72} width={204} text="Marie Curie 0800 090 2309" lit /></>}
      <Cap>{["Support for the whole person", "It can start soon after diagnosis", "Alongside chemo or radiotherapy", "Hospice care is free, at any stage", "Family can get support too"][at]}</Cap>
    </svg>} />;
}

function EaseSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const steps = [["Paracetamol", 24, 150], ["Codeine", 96, 122], ["Morphine", 168, 94]] as const;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptom control" title="Easing pain, step by step" label="Symptom control" credit="Illustration: Rehyn. Your team chooses the right medicine for you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three steps of painkillers, from paracetamol to morphine, with other ways to ease symptoms">
      {steps.map(([label, x, y]) => <g key={label} opacity={fade(at === 1 || at === 2)}>
        <rect x={x} y={y} width="70" height={180 - y} rx="6" fill={at === 1 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={x + 35} y={y + 18} size={10} fill={at === 1 ? WHITE : TEXT}>{label}</W></g>)}
      {at === 1 && <path d="M40 138 L210 80 M196 78 L210 80 L202 92" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" fill="none" strokeLinecap="round" />}
      {at === 0 && <><Diary x={110} y={48} /><W x={162} y={52} size={11} anchor="start">Pain diary</W></>}
      {at === 2 && <Bubble x={150} y={44} text="Ask about any worries" width={170} />}
      {at === 3 && <>
        <g><circle cx="70" cy="44" r="18" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[0, 1, 2].map(index => <ellipse key={index} cx="70" cy="34" rx="5" ry="10" fill={SOFT} transform={`rotate(${index * 120} 70 44)`} />)}<circle cx="70" cy="44" r="3" fill={INK} /></g>
        <path d="M144 62 V38 C144 26, 176 26, 176 38 V62 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M238 28 H262 L258 62 H242 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M241 40 H259" stroke={SOFT} strokeWidth="3" />
        <W x={70} y={80} size={10.5}>A fan</W><W x={160} y={80} size={10.5}>Dry foods</W><W x={250} y={80} size={10.5}>Cool drinks</W></>}
      {at === 4 && <><Box x={24} y={30} width={130} text="Radiotherapy" /><Box x={166} y={30} width={130} text="Bisphosphonates" /><House x={274} y={180} width={60} heart /></>}
      <Cap>{["Tell your team; keep a pain diary", "The weakest that keeps you pain-free", "Your team can help with side effects", "Small, often meals; a handheld fan", "Hospice care can help, then home again"][at]}</Cap>
    </svg>} />;
}

function CycleCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Ongoing treatment" title="Living around ongoing treatment" label="Ongoing treatments" credit="Illustration: Rehyn. An example pattern; your team plans your own."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A calendar of treatment days and breaks, with check-ups and a 24-hour number">
      <rect x="24" y="30" width="150" height="18" rx="5" fill={INK} />
      {Array.from({ length: 28 }, (_, index) => {
        const row = Math.floor(index / 7), col = index % 7, on = at === 1 && col === 0 && row % 2 === 0;
        return <rect key={index} x={24 + col * 22} y={56 + row * 28} width="18" height="20" rx="4" fill={on ? INK : WHITE} stroke={INK} strokeWidth="1.5" opacity={fade(at === 1 || at === 0)} />;
      })}
      {at === 0 && <><rect x="230" y="36" width="34" height="58" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="235" y="44" width="24" height="36" rx="3" fill={SOFT} /><circle cx="247" cy="87" r="3" fill={INK} />
        <Tags x={186} y={110} labels={["Face to face", "Phone or video"]} lit={() => false} width={122} gap={32} /></>}
      {at === 1 && <><rect x="196" y="70" width="18" height="18" rx="4" fill={INK} /><W x={222} y={84} size={10.5} anchor="start">Treatment</W>
        <rect x="196" y="104" width="18" height="18" rx="4" fill={WHITE} stroke={INK} strokeWidth="1.5" /><W x={222} y={118} size={10.5} anchor="start">A break</W></>}
      {at === 2 && <><g stroke={GOLD} strokeWidth="3" strokeLinecap="round">{[[220, 30], [247, 26], [274, 30]].map(([x, y]) => <path key={x} d={`M${x} ${y} L247 74`} />)}</g><circle cx="247" cy="80" r="8" fill={INK} />
        <Tags x={186} y={106} labels={["Sore skin", "Tiredness"]} lit={() => false} width={122} gap={32} /></>}
      {at === 3 && <><Box x={186} y={44} width={122} text="Clinical trials" lit /><path d="M238 84 V100 L224 132 Q222 140 230 140 H264 Q272 140 270 132 L256 100 V84 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M230 124 H264 L268 134 H226 Z" fill={GOLD} /></>}
      {at === 4 && <><rect x="186" y="34" width="122" height="58" rx="10" fill={INK} /><W x={247} y={60} size={12} fill={WHITE}>24-hour</W><W x={247} y={78} size={12} fill={WHITE}>number</W>
        <Tags x={186} y={106} labels={["High temperature", "Swollen, warm limb"]} lit={() => false} width={122} gap={32} /></>}
      <Cap>{["Regular check-ups with your team", "Cycles, with breaks to recover", "Most side effects go after treatment", "You can ask about clinical trials", "Infection signs? Call your team now"][at]}</Cap>
    </svg>} />;
}

function EnergyDay(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const heights = [[70, 40, 24], [50, 30, 20], [60, 44, 30], [70, 40, 24], [62, 54, 44]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Tiredness" title="Tiredness you can plan around" label="Tiredness" credit="Illustration: Rehyn. A picture of the idea; everyone's energy differs."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Energy through the day as three bars, with ways to plan and pace it">
      <path d="M20 164 H170" stroke={LINE} strokeWidth="3" />
      {["Morning", "Afternoon", "Evening"].map((label, index) => <g key={label}>
        <rect x={25 + index * 50} y={164 - heights[index]} width="40" height={heights[index]} rx="6" fill={at === 3 && index === 0 ? INK : TINT} stroke={INK} strokeWidth="2" />
        <W x={45 + index * 50} y={180} size={9.5}>{label}</W></g>)}
      {at === 3 && <path d="M45 72 L49 82 L60 82 L51 88 L55 99 L45 92 L35 99 L39 88 L30 82 L41 82 Z" fill={GOLD} stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />}
      {at === 0 && <Tags x={182} y={50} labels={["Varies in the day", "Each day differs"]} lit={() => false} width={124} gap={36} />}
      {at === 1 && <Tags x={182} y={24} labels={["Anaemia", "Pain", "Poor sleep", "Some medicines"]} lit={() => false} width={124} />}
      {at === 2 && <><rect x="190" y="30" width="14" height="140" rx="7" fill={WHITE} stroke={INK} strokeWidth="2" />
        {Array.from({ length: 11 }, (_, index) => <path key={index} d={`M204 ${36 + index * 12.8} H210`} stroke={INK} strokeWidth="1.5" />)}
        <W x={216} y={40} size={10} anchor="start">10: worst</W><W x={216} y={104} size={10} anchor="start">Your score</W><W x={216} y={170} size={10} anchor="start">0: none</W></>}
      {at === 3 && <Tags x={182} y={40} labels={["Pace yourself", "Short rests", "Ask for help"]} lit={() => false} width={124} />}
      {at === 4 && <><Person x={244} y={88} scale={1.2} /><Tags x={182} y={120} labels={["Ask first", "Physio or OT"]} lit={() => false} width={124} gap={32} /></>}
      <Cap>{["Fatigue affects everyone differently", "Anaemia, pain and sleep can add to it", "A score from 0 to 10, and a diary", "Plan the day around what matters", "Start slowly and build up gently"][at]}</Cap>
    </svg>} />;
}

function CallCard(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const lit = at === 0;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Urgent help" title="When to call, day or night" label="Urgent help" credit="Illustration: Rehyn. If you have these signs, get help straight away."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A card with a 24-hour number, beside the signs to report straight away">
      <rect x="24" y="24" width="120" height="160" rx="14" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="3" />
      <path d="M70 40 C66 52, 74 64, 86 70 L92 64 L102 70 L98 80 C80 80, 62 62, 62 44 L72 40 Z" fill={lit ? GOLD : SOFT} stroke={lit ? WHITE : INK} strokeWidth="1.5" strokeLinejoin="round" className={lit && !still ? "lib-why-pulse" : undefined} />
      <W x={84} y={100} size={13} fill={lit ? WHITE : TEXT}>24-hour</W><W x={84} y={116} size={13} fill={lit ? WHITE : TEXT}>number</W>
      {at === 1 && <><rect x="78" y="128" width="12" height="36" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="81" y="140" width="6" height="26" fill={GOLD} /><circle cx="84" cy="168" r="8" fill={GOLD} stroke={INK} strokeWidth="2" /></>}
      {at === 2 && Array.from({ length: 4 }, (_, index) => <rect key={index} x="72" y={128 + index * 12} width="24" height="9" rx="4" fill={SOFT} stroke={INK} strokeWidth="1.5" />)}
      {at === 3 && <g fill={SOFT} stroke={INK} strokeWidth="2"><path d="M84 128 V142" fill="none" /><path d="M80 142 C66 142, 60 162, 64 176 C72 178, 80 172, 80 160 Z" /><path d="M88 142 C102 142, 108 162, 104 176 C96 178, 88 172, 88 160 Z" /></g>}
      {at === 4 && <Drop x={84} y={164} r={12} />}
      {at === 0 && <Tags x={160} y={40} labels={["Your hospital team", "Evenings, weekends", "When to call: ask"]} lit={() => false} width={146} />}
      {at === 1 && <><Tags x={160} y={24} labels={["37 and a half or over", "Below 36", "Feeling unwell"]} lit={() => false} width={146} gap={32} /><Box x={160} y={128} width={146} height={34} text="Sepsis signs: 999" lit /></>}
      {at === 2 && <Tags x={160} y={24} labels={["New back or neck pain", "Weak legs", "Numbness", "Bladder or bowel"]} lit={() => false} width={146} />}
      {at === 3 && <><Tags x={160} y={24} labels={["Sudden breathlessness", "Painful, swollen limb"]} lit={() => false} width={146} /><Box x={160} y={110} width={146} height={34} text="Chest pain: 999" lit /></>}
      {at === 4 && <Tags x={160} y={24} labels={["Sick, thirsty, drowsy", "Confused, constipated", "Bruising or bleeding"]} lit={() => false} width={146} />}
      <Cap>{["Keep your 24-hour number to hand", "Signs of infection: call straight away", "Spine signs: get advice immediately", "Breathless or clot signs: call now", "Tell your team straight away"][at]}</Cap>
    </svg>} />;
}

function SmallGoals(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Day to day" title="One day, one small goal at a time" label="Living well" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of seven small squares, some holding a small goal, with people who help">
      {Array.from({ length: 7 }, (_, index) => <g key={index}>
        <rect x={24 + index * 40} y="26" width="34" height="34" rx="8" fill={at === 2 && index === 2 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
        {(index === 1 || index === 3 || index === 5) && <circle cx={41 + index * 40} cy="43" r="6" fill={at === 0 ? GOLD : SOFT} className={at === 0 && index === 1 && !still ? "lib-why-pulse" : undefined} />}
      </g>)}
      {at === 0 && <Chips labels={["Photo album", "Visit a friend"]} lit={-1} y={96} />}
      {at === 1 && <><Chips labels={["Eat well", "Keep active", "Medicines list"]} lit={-1} y={90} /><Chips labels={["Things you enjoy", "Mindfulness"]} lit={-1} y={130} /></>}
      {at === 2 && <><Chips labels={["Housework", "A pet", "Appointments"]} lit={-1} y={80} /><Person x={110} y={170} scale={1.1} /><Person x={210} y={170} scale={1.1} fill={SOFT} /></>}
      {at === 3 && <><HeartShape x={160} y={128} size={56} fill={GOLD} /><Person x={86} y={170} scale={1.1} /><Person x={234} y={170} scale={1.1} fill={SOFT} /></>}
      {at === 4 && <Tags x={60} y={84} labels={["111, mental health option", "Samaritans 116 123", "999 or A&E"]} lit={() => true} width={200} gap={32} />}
      <Cap>{["One day, or one week, at a time", "Eat well, stay active, enjoy things", "It is okay to ask for and accept help", "No right or wrong way to feel", "Help is there now, day or night"][at]}</Cap>
    </svg>} />;
}

function TableTalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const [left, right] = at === 2 ? [120, 200] : [90, 230];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Talking" title="Honest words for the people you love" label="Talking" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A family sitting together at a table, talking">
      <path d="M50 158 V184 M270 158 V184" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <Person x={left} y={146} scale={1.3} /><Person x={right} y={146} scale={1.3} fill={SOFT} />
      {at >= 3 && <Person x={160} y={148} scale={0.85} fill={TEXT} />}
      <rect x="30" y="148" width="260" height="10" rx="4" fill={SOFT} stroke={INK} strokeWidth="2" />
      {at === 0 && <>{[[124, 52], [196, 70]].map(([x, y]) => <g key={x}><ellipse cx={x} cy={y} rx="30" ry="16" fill={WHITE} stroke={INK} strokeWidth="2" />
        {[-10, 0, 10].map(dx => <circle key={dx} cx={x + dx} cy={y} r="2.5" fill={INK} />)}</g>)}</>}
      {at === 1 && <Bubble x={124} y={56} text="Ask, then listen" width={130} />}
      {at === 2 && <HeartShape x={160} y={66} size={50} fill={GOLD} />}
      {at === 3 && <Bubble x={160} y={52} text="Simple, honest words" width={160} />}
      {at === 4 && <><Tags x={20} y={22} labels={["Hospice family support", "Teachers, school nurse"]} lit={() => false} width={160} gap={32} />
        <g><path d="M212 50 L248 26 L284 50 Z" fill={INK} /><rect x="218" y="50" width="60" height="36" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="240" y="64" width="16" height="22" fill={SOFT} stroke={INK} strokeWidth="1.5" /></g></>}
      <Cap>{["Talking can bring you closer", "Start with a question, then listen", "Talking helps partners feel less alone", "Be honest, simple and reassuring", "Support for children and family too"][at]}</Cap>
    </svg>} />;
}

function ShieldJar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const shield = at <= 1, jar = at === 2 || at === 4, form = at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and money" title="Your rights, benefits and free help" label="Work and money" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A shield for your rights at work, a jar of savings and a benefits form">
      <g opacity={fade(shield)}><path d="M72 30 L112 44 V80 C112 104, 92 118, 72 126 C52 118, 32 104, 32 80 V44 Z" fill={shield ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={72} y={76} size={10.5} fill={shield ? WHITE : TEXT}>Equality</W><W x={72} y={92} size={10.5} fill={shield ? WHITE : TEXT}>Act 2010</W></g>
      <g opacity={fade(jar)}><rect x="138" y="38" width="44" height="14" rx="4" fill={INK} /><rect x="132" y="50" width="56" height="72" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[106, 96, 86].map(y => <ellipse key={y} cx="160" cy={y} rx="16" ry="5" fill={GOLD} stroke={INK} strokeWidth="1.5" />)}</g>
      <g opacity={fade(form)}><rect x="220" y="36" width="64" height="86" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[54, 68, 82].map(y => <path key={y} d={`M232 ${y} H272`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
        <rect x="232" y="96" width="14" height="14" rx="3" fill={form ? INK : WHITE} stroke={INK} strokeWidth="2" /><path d="M252 103 H272" stroke={SOFT} strokeWidth="3" strokeLinecap="round" /></g>
      <Chips labels={[["From diagnosis", "Treated fairly"], ["Hours", "Extra breaks", "Rest space"], ["Sick pay", "Pension rights", "Get advice"], ["Not means-tested", "Special rules"], ["Social worker", "Macmillan advisers"]][at]} lit={-1} y={150} />
      <Cap>{["Protected at work from diagnosis", "Reasonable adjustments at work", "Get advice before you decide", "PIP, Attendance Allowance and more", "Free money advice from Macmillan"][at]}</Cap>
    </svg>} />;
}

function WishFolder(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const docs = [[40, 50, "2"], [72, 42, "1"], [104, 50, "3"]] as const;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Planning ahead" title="Planning ahead, in your own time" label="Planning ahead" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A folder of written wishes, with a note on the fridge saying where it is kept">
      <path d="M28 70 V54 H80 L92 66 H164 V176 H28 Z" fill={SOFT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      {at !== 2 && docs.map(([x, y, n]) => <g key={n}><rect x={x} y={y} width="48" height="70" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" />
        {at === 0 && <W x={x + 24} y={y + 20} size={12}>{n}</W>}</g>)}
      {at === 2 && <g><rect x="48" y="18" width="96" height="100" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={96} y={38} size={10.5}>Advance</W><W x={96} y={52} size={10.5}>care plan</W>
        {[66, 78, 90, 102].map(y => <path key={y} d={`M62 ${y} H130`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}</g>}
      <rect x="28" y="96" width="136" height="80" rx="6" fill={TINT} stroke={INK} strokeWidth="2.5" />
      <W x={96} y={142} size={11}>Your plan</W>
      {at === 1 && <g transform="rotate(-35 124 66)"><rect x="100" y="60" width="56" height="12" rx="3" fill={GOLD} stroke={INK} strokeWidth="2" /><path d="M100 60 L88 66 L100 72 Z" fill={INK} /></g>}
      {at !== 3 && <g opacity={fade(at === 4)}><rect x="210" y="24" width="84" height="160" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M210 82 H294" stroke={INK} strokeWidth="2.5" />
        <path d="M222 40 V68 M222 96 V140" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <g transform="rotate(6 264 116)"><rect x="246" y="100" width="36" height="32" rx="3" fill={at === 4 ? GOLD : SOFT} stroke={INK} strokeWidth="1.5" className={at === 4 && !still ? "lib-why-pulse" : undefined} />
          <path d="M252 112 H276 M252 120 H270" stroke={INK} strokeWidth="2" strokeLinecap="round" /></g></g>}
      {at === 3 && <Tags x={184} y={40} labels={["Advance decision", "Power of attorney", "A will"]} lit={() => false} width={124} />}
      <Cap>{["Simple steps, in any order you like", "People will know your wishes", "Write down what matters to you", "A solicitor can help with legal papers", "A note on the fridge says where it is"][at]}</Cap>
    </svg>} />;
}

export function CarePieceView({ piece, ...props }: { piece: CarePiece } & PieceProps) {
  switch (piece) {
    case "lo-drain-map": return <DrainMap {...props} />;
    case "lo-bead-string": return <BeadString {...props} />;
    case "lo-ring-sock": return <RingSock {...props} />;
    case "lo-tape-rings": return <TapeRings {...props} />;
    case "lo-sleeve-arrows": return <SleeveArrows {...props} />;
    case "lo-skin-guard": return <SkinGuard {...props} />;
    case "lo-clear-path": return <ClearPath {...props} />;
    case "lo-calf-pump": return <CalfPump {...props} />;
    case "lo-act-ladder": return <ActLadder {...props} />;
    case "lo-plane-seat": return <PlaneSeat {...props} />;
    case "lo-wardrobe": return <Wardrobe {...props} />;
    case "lo-bench-talk": return <BenchTalk {...props} />;
    case "sc-same-cells": return <SameCells {...props} />;
    case "sc-balance": return <Balance {...props} />;
    case "sc-helper-circle": return <HelperCircle {...props} />;
    case "sc-care-ribbons": return <CareRibbons {...props} />;
    case "sc-ease-steps": return <EaseSteps {...props} />;
    case "sc-cycle-calendar": return <CycleCalendar {...props} />;
    case "sc-energy-day": return <EnergyDay {...props} />;
    case "sc-call-card": return <CallCard {...props} />;
    case "sc-small-goals": return <SmallGoals {...props} />;
    case "sc-table-talk": return <TableTalk {...props} />;
    case "sc-shield-jar": return <ShieldJar {...props} />;
    case "sc-wish-folder": return <WishFolder {...props} />;
  }
}
