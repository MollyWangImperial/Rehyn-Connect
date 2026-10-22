import type { SVGProps } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { SUPPORT_PIECES, type SupportPiece } from "@/content/support-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Chips, Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Secondary bone cancer and Caring for someone with advanced cancer pages' own pieces (content/support-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Cancer & recovery pieces. Each is steered by the card's sections;
// pictures show ideas, calmly, and never anyone's own body, scans or results. These are advanced cancer and carer
// pictures: they are about comfort, help, people and everyday life, never about time.

export const isSupportPiece = (piece: NewsPiece): piece is SupportPiece => (SUPPORT_PIECES as readonly string[]).includes(piece);

/** The one-line caption for the chosen section. */
const Cap = ({ children }: { children: string }) => <W x={160} y={206} size={11}>{children}</W>;
/** A labelled box with its top-left at (x, y); `lit` fills it. */
const Box = ({ x, y, width, text, lit = false, height = 28, size = 10.5 }: { x: number; y: number; width: number; text: string; lit?: boolean; height?: number; size?: number }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x + width / 2} y={y + height / 2 + 4} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
const fade = (lit: boolean) => (lit ? 1 : 0.35);
/** A row with a tick (`ok`) or a gentle cross at its right-hand end. */
const Row = ({ x, y, width, text, ok }: { x: number; y: number; width: number; text: string; ok: boolean }) =>
  <g><rect x={x} y={y} width={width} height="26" rx="9" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={x + 10} y={y + 17} size={10.5} anchor="start">{text}</W>
    {ok ? <path d={`M${x + width - 22} ${y + 13} l4 5 l9 -10`} stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      : <path d={`M${x + width - 21} ${y + 8} l10 10 M${x + width - 11} ${y + 8} l-10 10`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />}</g>;
/** A long bone, centred on (cx, cy), drawn as one outlined shape. */
const Bone = ({ cx, cy, len = 80, r = 11, fill = WHITE, vertical = false }: { cx: number; cy: number; len?: number; r?: number; fill?: string; vertical?: boolean }) => {
  const parts = (style: SVGProps<SVGGElement>) => <g {...style}>
    <circle cx={-len / 2} cy={-r * 0.8} r={r} /><circle cx={-len / 2} cy={r * 0.8} r={r} /><circle cx={len / 2} cy={-r * 0.8} r={r} /><circle cx={len / 2} cy={r * 0.8} r={r} />
    <rect x={-len / 2} y={-r * 0.75} width={len} height={r * 1.5} /></g>;
  return <g transform={`translate(${cx} ${cy})${vertical ? " rotate(90)" : ""}`}>{parts({ fill: INK, stroke: INK, strokeWidth: 5 })}{parts({ fill })}</g>;
};
/** A stack of spinal bones, the top one at y; `lit` picks the gold one. */
const Spine = ({ x, y, count = 6, lit = -1 }: { x: number; y: number; count?: number; lit?: number }) =>
  <g><rect x={x - 4} y={y} width="8" height={count * 24 - 6} rx="4" fill={SOFT} />
    {Array.from({ length: count }, (_, index) => <rect key={index} x={x - 22} y={y + index * 24} width="44" height="18" rx="7" fill={index === lit ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" />)}</g>;
/** A phone centred on (x, y); `lit` darkens it. */
const Phone = ({ x, y, lit = false, scale = 1 }: { x: number; y: number; lit?: boolean; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}><rect x="-24" y="-40" width="48" height="80" rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="3" />
    <rect x="-17" y="-31" width="34" height="54" rx="3" fill={lit ? GOLD : TINT} /><circle cx="0" cy="31" r="3.5" fill={lit ? WHITE : INK} /></g>;
/** A small house, its floor at y; `heart` puts a gold heart on it. */
const House = ({ x, y, width = 70, heart = false }: { x: number; y: number; width?: number; heart?: boolean }) =>
  <g><path d={`M${x - width / 2} ${y} V${y - width * 0.6} L${x} ${y - width} L${x + width / 2} ${y - width * 0.6} V${y} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <rect x={x - 8} y={y - 22} width="16" height="22" rx="3" fill={SOFT} stroke={INK} strokeWidth="2" />
    {heart && <HeartShape x={x} y={y - width * 0.5} size={width * 0.34} fill={GOLD} width={2} />}</g>;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g><circle cx={x} cy={y} r={r} fill={GOLD} />{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}</g>;
const Moon = ({ x, y, r = 14 }: { x: number; y: number; r?: number }) =>
  <path d={`M${x + 4} ${y - r} A${r} ${r} 0 1 0 ${x + 4} ${y + r} A${r * 1.15} ${r * 1.15} 0 0 1 ${x + 4} ${y - r} Z`} fill={SOFT} stroke={INK} strokeWidth="2" />;
/** A tooth centred on (x, y). */
const Tooth = ({ x, y, scale = 1, fill = WHITE }: { x: number; y: number; scale?: number; fill?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${scale})`} d="M-28 -30 C-28 -46 -12 -48 0 -38 C12 -48 28 -46 28 -30 C28 -10 22 0 18 28 C16 40 8 40 6 28 L2 8 L-2 8 L-6 28 C-8 40 -16 40 -18 28 C-22 0 -28 -10 -28 -30 Z" fill={fill} stroke={INK} strokeWidth={3 / scale} strokeLinejoin="round" />;
/** A clipboard with a few lines, its top-left at (x, y). */
const Clipboard = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x} y={y} width="56" height="76" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x + 16} y={y - 6} width="24" height="12" rx="4" fill={INK} />
    {[20, 34, 48, 62].map(dy => <path key={dy} d={`M${x + 10} ${y + dy} H${x + 46}`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}</g>;

// ==== Secondary bone cancer =================================================================================

function BmNewPlace(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const dots = (points: number[][]) => points.map(([x, y]) => <circle key={`${x} ${y}`} cx={x} cy={y} r="5.5" fill={GOLD} stroke={WHITE} strokeWidth="1.5" />);
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The first cancer, in a new place" label="What it is" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Cancer cells travelling from where the cancer started to a bone, where they stay the same type">
      <path d="M112 92 C150 132, 190 124, 216 98" stroke={SOFT} strokeWidth="6" strokeLinecap="round" fill="none" strokeDasharray={at === 0 ? undefined : "2 9"} />
      <path d="M26 78 C26 50, 52 38, 76 42 C104 46, 116 66, 112 88 C108 110, 86 120, 62 116 C38 112, 26 98, 26 78 Z" fill={TINT} stroke={INK} strokeWidth="2.5" />
      {dots([[58, 70], [74, 62], [72, 84], [88, 76], [56, 92]])}
      {at === 0 && [[150, 117], [184, 116]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="5" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />)}
      <Bone cx={256} cy={78} len={68} fill={at === 3 ? TINT : WHITE} />
      {at !== 0 && at !== 3 && dots([[246, 74], [264, 82]])}
      {at === 3 && [[238, 74], [256, 82], [272, 73]].map(([x, y]) => <ellipse key={x} cx={x} cy={y} rx="5" ry="3.5" fill={SOFT} stroke={INK} strokeWidth="1.2" />)}
      <W x={70} y={140} size={10}>Where it started</W><W x={256} y={124} size={10}>The bone</W>
      {at === 1 && <W x={160} y={28} size={10.5}>Same cells, same cancer</W>}
      {at === 3 && <W x={256} y={34} size={10.5}>Thinner, weaker bone</W>}
      {at === 2 && <Chips labels={["Breast", "Prostate", "Lung", "Kidney", "Thyroid"]} lit={-1} y={154} />}
      {at === 4 && <Chips labels={["Control the cancer", "Relieve symptoms"]} lit={-1} y={154} />}
      <Cap>{["Cells can travel to the bone", "Same cells as the first cancer", "Any cancer can; these most often", "Bone breaks down faster than it grows", "Aims: control it, ease symptoms"][at]}</Cap>
    </svg>} />;
}

function BmAcheMap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const spots = [[[70, 134]], [[70, 128], [100, 166], [56, 176]], [[70, 134]], [[70, 140], [56, 176]], [[70, 128]]][at];
  const sets = [["Dull ache", "Gnawing", "Worse when moving"], ["Spine and back", "Arms and legs", "Ribs"], ["Lasts over 2 weeks", "Pain when moving", "Wakes you at night", "Back pain down a leg"],
    ["Weaker bones", "Tired, breathless", "More infections", "Bruising, bleeding"], ["Weak arms or legs", "Bladder or bowel", "High calcium signs"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Bone pain, and when to speak up" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with places bone pain can be felt, beside the signs to tell the team about">
      <Person x={70} y={150} scale={2.2} fill={SOFT} />
      {spots.map(([x, y], index) => <circle key={index} cx={x} cy={y} r="8" fill="none" stroke={GOLD} strokeWidth="3" className={index === 0 && at === 0 && !still ? "lib-why-pulse" : undefined} />)}
      {at === 2 && <Moon x={30} y={40} r={12} />}
      <Tags x={136} y={at === 4 ? 24 : 30} labels={sets} lit={() => at === 2} width={168} />
      {at === 4 && <Box x={136} y={136} width={168} text="No answer? Go to A&E" lit />}
      <Cap>{["Often a dull, gnawing ache", "Where it is felt can vary", "Tell your team about pain like this", "Weaker bones and blood changes", "Some signs need help straight away"][at]}</Cap>
    </svg>} />;
}

function BmUrgent(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Urgent help" title="Two warnings that cannot wait" label="Urgent help" credit="Illustration: Rehyn. If you have these signs, get help straight away."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A spine, a drop for calcium and a phone, beside the warning signs and who to call">
      {at <= 2 && <><Spine x={64} y={30} lit={2} />{at === 0 && <circle cx="64" cy="87" r="30" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}</>}
      {at === 3 && <><path d="M64 46 C72 64, 92 84, 92 106 A28 28 0 0 1 36 106 C36 84, 56 64, 64 46 Z" fill={TINT} stroke={INK} strokeWidth="2.5" /><W x={64} y={160} size={10.5}>Calcium</W></>}
      {at === 4 && <Phone x={64} y={98} lit />}
      {at === 0 && <Tags x={128} y={50} labels={["Pressure on the spinal cord", "Needs treatment quickly"]} lit={() => false} width={176} />}
      {at === 1 && <Tags x={128} y={24} labels={["Back or neck pain", "Weak arms or legs", "Numbness, pins and needles", "Bladder or bowel changes"]} lit={() => false} width={176} />}
      {at === 2 && <><Box x={128} y={34} width={176} text="Call your hospital team now" /><Box x={128} y={80} width={176} text="No answer? Go to A&E" lit /><Box x={128} y={126} width={176} text="Show your alert card" /></>}
      {at === 3 && <Tags x={128} y={24} labels={["Sick or thirsty", "Drowsy or confused", "Constipated", "Passing urine more"]} lit={() => false} width={176} />}
      {at === 4 && <><Tags x={128} y={24} labels={["Who to call by day", "Who to call at night", "At the weekend"]} lit={() => false} width={176} /><Box x={128} y={136} width={176} text="Chest pain: call 999" lit /></>}
      <Cap>{["An emergency: treated quickly", "Know the warning signs", "Do not wait for more symptoms", "High calcium: tell your team now", "Know who to call, day and night"][at]}</Cap>
    </svg>} />;
}

function BmScanDay(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const xs = [36, 98, 160, 222, 284];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="What each scan is looking for" label="Scans and tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The steps of tests and scans, from the first appointment to the results">
      <path d="M36 150 H284" stroke={LINE} strokeWidth="4" strokeDasharray="2 8" strokeLinecap="round" />
      {xs.map((x, index) => <g key={x} opacity={index === at ? 1 : 0.5}>
        {index === at && <circle cx={x} cy="150" r="13" fill="none" stroke={GOLD} strokeWidth="3" />}
        <circle cx={x} cy="150" r="7" fill={index <= at ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x} y={178} size={10}>{["Why", "Blood test", "Bone scan", "More scans", "Results"][index]}</W></g>)}
      {at === 0 && <><Person x={100} y={120} scale={1.2} /><Bubble x={210} y={58} text="Any symptoms?" width={124} /></>}
      {at === 1 && <><rect x="92" y="36" width="20" height="64" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="95" y="70" width="14" height="27" rx="7" fill={GOLD} />
        <rect x="178" y="32" width="64" height="76" rx="6" fill={INK} /><Bone cx={210} cy={70} len={34} r={7} vertical />
        <W x={102} y={122} size={10.5}>Calcium</W><W x={210} y={126} size={10.5}>X-ray</W></>}
      {at === 2 && <><Box x={20} y={50} width={78} text="Tracer" /><Box x={106} y={50} width={116} text="Wait 2 to 3 hours" /><Box x={230} y={50} width={70} text="Scan" lit />
        <W x={160} y={110} size={10.5}>About 4 to 5 hours in all</W></>}
      {at === 3 && <Chips labels={["CT", "MRI", "PET-CT", "Biopsy"]} lit={1} y={56} />}
      {at === 4 && <><Clock x={118} y={74} r={28} hand={2} /><W x={160} y={80} size={12} anchor="start">1 or 2 weeks</W></>}
      <Cap>{["Tests depend on your symptoms", "Blood calcium and bone x-rays", "Hot spots are not always cancer", "CT, MRI, PET-CT, sometimes a biopsy", "Results usually within 1 or 2 weeks"][at]}</Cap>
    </svg>} />;
}

function BmBoneShield(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const holes = [[62, 72], [104, 70], [70, 116], [108, 110], [56, 96], [112, 90]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Bone medicines" title="Medicines that make bone stronger" label="Bone-strengthening medicines" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A slice of bone with its gaps filling in, and how bone-strengthening medicines are given">
      <circle cx="84" cy="92" r="58" fill={WHITE} stroke={INK} strokeWidth="3" />
      <circle cx="84" cy="92" r="26" fill={TINT} stroke={SOFT} strokeWidth="2" />
      {holes.map(([x, y], index) => <ellipse key={index} cx={x} cy={y} rx="7" ry="5" fill={at === 0 && index < 3 ? GOLD : SOFT} />)}
      <W x={84} y={172} size={10}>Bone</W>
      {at === 0 && <Tags x={162} y={40} labels={["Fewer fractures", "Less high calcium", "Help with pain"]} lit={() => false} width={142} />}
      {at === 1 && <><rect x="166" y="38" width="26" height="40" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M179 78 V118" stroke={INK} strokeWidth="2.5" />
        <Pill x={232} y={92} />
        <rect x="278" y="52" width="12" height="44" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M284 52 V40 M278 40 H290 M284 96 V114" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        <W x={178} y={140} size={10}>Drip</W><W x={232} y={140} size={10}>Tablets</W><W x={284} y={140} size={10}>Injection</W></>}
      {at === 2 && <Tags x={162} y={24} labels={["Breast", "Prostate", "Myeloma", "Other cancers"]} lit={() => false} width={142} />}
      {at === 3 && <Tags x={162} y={40} labels={["Flu-like, at first", "Tingling round mouth", "Kidney checks first"]} lit={() => false} width={142} />}
      {at === 4 && <><Tooth x={232} y={78} scale={0.9} /><Box x={162} y={130} width={142} text="See a dentist first" lit /></>}
      <Cap>{["They help strengthen the bones", "A drip, tablets or an injection", "For many cancers that spread to bone", "Side effects are usually mild", "See a dentist before you start"][at]}</Cap>
    </svg>} />;
}

function BmBeam(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Radiotherapy" title="A beam aimed at the ache" label="Radiotherapy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A radiotherapy machine aiming a beam at a bone, and how the pain eases afterwards">
      {at < 4 && <>
        <rect x="30" y="22" width="84" height="26" rx="8" fill={INK} /><rect x="60" y="48" width="24" height="10" rx="3" fill={INK} />
        <path d="M62 58 H82 L100 124 H44 Z" fill={GOLD} opacity={at <= 1 ? 0.45 : 0.15} className={at === 0 && !still ? "lib-why-pulse" : undefined} />
        <Bone cx={72} cy={136} len={84} />
      </>}
      {at === 4 && <><Bone cx={56} cy={70} len={44} r={9} fill={TINT} /><Bone cx={100} cy={112} len={44} r={9} fill={TINT} /><Bone cx={60} cy={150} len={44} r={9} fill={TINT} />
        {[[44, 66], [108, 116], [70, 152]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="4.5" fill={GOLD} />)}</>}
      {at === 0 && <Tags x={150} y={40} labels={["Shrinks cancer cells", "Eases pressure on nerves", "Time for bone to repair"]} lit={() => false} width={156} />}
      {at === 1 && <Tags x={150} y={40} labels={["One session, or a few", "A few minutes each", "Not radioactive after"]} lit={() => false} width={156} />}
      {at === 2 && <g>
        <path d="M156 46 V104" stroke={INK} strokeWidth="3" /><circle cx="156" cy="46" r="6" fill={GOLD} /><circle cx="156" cy="104" r="6" fill={INK} />
        <W x={170} y={50} size={12} anchor="start">7 to 10 days</W><W x={170} y={66} size={10.5} anchor="start">pain starts to ease</W>
        <W x={170} y={108} size={12} anchor="start">Up to 6 weeks</W><W x={170} y={124} size={10.5} anchor="start">the full benefit</W>
        <Pill x={190} y={160} /><W x={216} y={164} size={10.5} anchor="start">As prescribed</W></g>}
      {at === 3 && <Tags x={150} y={40} labels={["Feeling sick", "More tired", "Skin redness"]} lit={() => false} width={156} />}
      {at === 4 && <Tags x={150} y={40} labels={["A drink", "Capsules", "An injection"]} lit={() => false} width={156} />}
      <Cap>{["Shrinking cells that press on nerves", "Safe to be with others afterwards", "Keep taking your painkillers", "Usually very few side effects", "Can treat several bones at once"][at]}</Cap>
    </svg>} />;
}

function BmPainLadder(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rungs = [[150, "Mild: paracetamol"], [108, "Moderate: codeine"], [66, "Severe: morphine"]] as const;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pain" title="Easing bone pain, step by step" label="Managing pain" credit="Illustration: Rehyn. Your team chooses the right medicine for you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ladder of painkillers from mild to severe pain, with other ways to ease pain and people who help">
      <g opacity={fade(at === 2)}>
        <path d="M36 30 V182 M88 30 V182" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        {rungs.map(([y]) => <path key={y} d={`M36 ${y} H88`} stroke={INK} strokeWidth="4" />)}
      </g>
      {at === 2 && rungs.map(([y, label]) => <g key={y}><circle cx="62" cy={y - 12} r="6" fill={GOLD} /><W x={102} y={y + 4} size={11} anchor="start">{label}</W></g>)}
      {at === 0 && <><HeartShape x={208} y={84} size={70} fill={GOLD} /><W x={208} y={150} size={11}>Relieved or reduced</W></>}
      {at === 1 && <><rect x="146" y="30" width="44" height="54" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="190" y="30" width="44" height="54" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[0, 1, 2, 3].map(index => <path key={index} d={`M154 ${44 + index * 10} H182 M198 ${44 + index * 10} H226`} stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" />)}
        <W x={190} y={102} size={10.5}>Pain diary</W><Bubble x={226} y={140} text="Where it hurts" width={130} /></>}
      {at === 3 && <Tags x={118} y={28} labels={["Radiotherapy", "Bone-strengthening drugs", "Warm or cold packs", "Changing position"]} lit={() => false} width={186} />}
      {at === 4 && <Tags x={118} y={28} labels={["Palliative care nurse", "Specialist pain team", "Physio and OT", "A short hospice stay"]} lit={index => index === 0} width={186} />}
      <Cap>{["For most people, pain can be managed", "Tell your team; a pain diary helps", "Regular doses, as prescribed", "Other treatments and simple comforts", "Palliative care nurses can help"][at]}</Cap>
    </svg>} />;
}

function BmBonePin(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Surgery" title="Pins, joints and bone cement" label="Surgery" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A long bone with a metal pin inside, and a spinal bone being filled with cement">
      {at !== 2 && <g opacity={at === 4 ? 0.5 : 1}>
        <Bone cx={70} cy={104} len={112} r={13} vertical />
        {at === 0 && <path d="M56 98 L66 106 L74 99 L84 107" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
        {at === 1 && <rect x="66" y="54" width="8" height="100" rx="3" fill={GOLD} stroke={INK} strokeWidth="1.5" />}
        {at === 3 && <g stroke={GOLD} strokeWidth="3" strokeLinecap="round">{[[132, 40], [140, 72], [132, 104]].map(([x, y]) => <path key={y} d={`M${x} ${y} L${94} ${(y + 104) / 2}`} />)}</g>}
      </g>}
      {at === 2 && <><Spine x={70} y={34} lit={3} /><path d="M126 92 L96 112" stroke={TEXT} strokeWidth="2.5" strokeLinecap="round" /><circle cx="126" cy="92" r="4" fill={TEXT} /></>}
      {at === 0 && <Tags x={150} y={50} labels={["Strengthen a bone", "Repair a break"]} lit={() => false} width={156} />}
      {at === 1 && <Tags x={150} y={40} labels={["Metal pin or plate", "Joint replacement", "Rods in the spine"]} lit={index => index === 0} width={156} />}
      {at === 2 && <Tags x={150} y={40} labels={["Bone cement", "About an hour", "Usually home that day"]} lit={index => index === 0} width={156} />}
      {at === 3 && <Tags x={150} y={40} labels={["Before surgery", "After surgery", "Or both"]} lit={() => false} width={156} />}
      {at === 4 && <><Bubble x={228} y={56} text="Is it right for me?" width={150} /><Tags x={150} y={100} labels={["Where the bone is", "How well you are"]} lit={() => false} width={156} /></>}
      <Cap>{["Surgery can strengthen a weak bone", "A pin, a new joint or spinal rods", "Cement can strengthen a spinal bone", "Radiotherapy before or after", "Not for everyone: ask your doctor"][at]}</Cap>
    </svg>} />;
}

function BmMoveTicks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Moving" title="Moving safely with bone secondaries" label="Staying active" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Activities that are usually safe, with ticks, and ones best avoided, with crosses">
      {at === 0 && <><Sun x={70} y={46} /><Person x={70} y={150} scale={1.6} /><Tags x={140} y={44} labels={["Bone health", "Mood", "General fitness"]} lit={() => false} width={164} /></>}
      {at === 1 && <><Person x={50} y={150} scale={1.4} /><Person x={110} y={150} scale={1.4} fill={SOFT} /><Bubble x={222} y={50} text="Is this safe for me?" width={150} />
        <Tags x={156} y={96} labels={["Physiotherapist", "Exercise physiologist"]} lit={() => false} width={148} /></>}
      {(at === 2 || at === 3) && <>
        <g opacity={fade(at === 3)}><W x={82} y={30} size={11}>Usually safe</W>{["Walking", "Swimming", "Cycling", "Tai chi"].map((text, index) => <Row key={text} x={20} y={42 + index * 32} width={124} text={text} ok />)}</g>
        <g opacity={fade(at === 2)}><W x={238} y={30} size={11}>Best avoided</W>{["Running", "Tennis, squash", "Sit-ups", "Uneven ground"].map((text, index) => <Row key={text} x={176} y={42 + index * 32} width={124} text={text} ok={false} />)}</g></>}
      {at === 4 && <><Box x={30} y={50} width={260} text="Unusual back or bone pain: stop" lit /><Box x={30} y={96} width={260} text="Feeling unwell? Do not exercise" /><Box x={30} y={142} width={260} text="A stick or frame may help" /></>}
      <Cap>{["Being active is still good for you", "Ask your team before you start", "Avoid high impact and falls", "Start slowly and build up", "Stop and see a doctor straight away"][at]}</Cap>
    </svg>} />;
}

function BmSmile(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Dental care" title="Looking after your jaw on bone medicines" label="Dental care" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tooth with a toothbrush, beside ways to look after the mouth and jaw">
      <Tooth x={80} y={96} scale={1.4} fill={at === 4 ? TINT : WHITE} />
      {at === 2 && <g transform="rotate(-30 130 60)"><rect x="100" y="54" width="70" height="10" rx="5" fill={INK} /><rect x="100" y="42" width="22" height="12" rx="3" fill={GOLD} stroke={INK} strokeWidth="1.5" /></g>}
      {at === 1 && <><circle cx="80" cy="96" r="72" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="4 6" /></>}
      {at === 0 && <Tags x={150} y={60} labels={["A rare jaw problem", "The risk is low"]} lit={() => false} width={154} />}
      {at === 1 && <Tags x={162} y={40} labels={["Check-up first", "Any treatment first", "Healing: 4 to 6 weeks"]} lit={index => index === 0} width={142} />}
      {at === 2 && <Tags x={162} y={24} labels={["Brush", "Floss", "Dentures that fit", "Regular check-ups"]} lit={() => false} width={142} />}
      {at === 3 && ["Fillings", "Scale and polish", "Tooth removal", "Implants"].map((text, index) => <Row key={text} x={160} y={28 + index * 34} width={144} text={text} ok={index < 2} />)}
      {at === 4 && <Tags x={162} y={24} labels={["Jaw pain or swelling", "Loose teeth", "Red or sore gums", "Ear pain"]} lit={() => false} width={142} />}
      <Cap>{["A rare problem; the risk is low", "A dental check-up before you start", "Brush, floss and keep check-ups", "Speak to your team before treatment", "Tell both your doctor and dentist"][at]}</Cap>
    </svg>} />;
}

function BmHouse(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Help at home" title="The help that makes home easier" label="Help at home" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A home with a handrail and a shower seat, beside the people and help that make home easier">
      <path d="M24 180 V92 L90 38 L156 92 V180 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M24 180 H156" stroke={INK} strokeWidth="3" />
      {at === 2 ? <g>
        <path d="M36 128 H72 M40 128 V140 M68 128 V140" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <rect x="100" y="146" width="34" height="8" rx="3" fill={INK} /><path d="M104 154 V172 M130 154 V172" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <rect x="40" y="152" width="30" height="20" rx="6" fill={SOFT} stroke={INK} strokeWidth="2" />
      </g> : at !== 3 && <Person x={90} y={164} scale={1.2} fill={at === 4 ? SOFT : INK} />}
      {at === 4 && <Person x={126} y={166} scale={0.95} />}
      {at === 3 && <Clipboard x={62} y={70} />}
      {at === 0 && <Tags x={170} y={40} labels={["GP", "Cancer doctor", "Specialist nurse"]} lit={() => false} width={136} />}
      {at === 1 && <Tags x={170} y={56} labels={["Physiotherapist", "Occupational therapist"]} lit={() => false} width={136} />}
      {at === 2 && <Tags x={170} y={24} labels={["Handrails", "Shower seat", "Raised toilet seat", "Riser chair"]} lit={() => false} width={136} />}
      {at === 3 && <><Box x={170} y={30} width={136} text="Free, anyone can ask" lit /><Tags x={170} y={76} labels={["Washing", "Dressing", "Cooking"]} lit={() => false} width={136} /></>}
      {at === 4 && <Tags x={170} y={24} labels={["District nurse", "Palliative nurse", "Marie Curie", "British Red Cross"]} lit={() => false} width={136} />}
      <Cap>{["Ask your team what support there is", "Advice on moving and everyday tasks", "Equipment can make home safer", "Ask your council for an assessment", "Nurses can visit and support carers"][at]}</Cap>
    </svg>} />;
}

function BmVoices(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const centre = at <= 1;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Feelings" title="Your feelings, and who to call" label="Mood and support" credit="Illustration: Rehyn. Need help now? Samaritans: 116 123."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with their feelings around them, and the people and lines that can help">
      <Person x={centre ? 160 : 56} y={160} scale={1.4} />
      {at === 0 && <><Bubble x={76} y={44} text="Uncertain" width={98} /><Bubble x={248} y={44} text="Frightened" width={104} /><Bubble x={160} y={78} text="Sad" width={70} /></>}
      {at === 1 && <><Sun x={262} y={56} /><Tags x={14} y={40} labels={["Your choices", "Your time"]} lit={() => false} width={112} gap={40} /></>}
      {at === 2 && <Tags x={108} y={30} labels={["Someone you trust", "Macmillan 0808 808 00 00", "Marie Curie 0800 090 2309"]} lit={() => false} width={196} />}
      {at === 3 && <>{Array.from({ length: 14 }, (_, index) => <rect key={index} x={114 + (index % 7) * 27} y={36 + Math.floor(index / 7) * 28} width="22" height="22" rx="5" fill={INK} opacity={0.55} />)}
        <path d="M114 96 V102 H296 V96" stroke={GOLD} strokeWidth="3" fill="none" /><W x={205} y={122} size={11}>More than 2 weeks</W></>}
      {at === 4 && <Tags x={108} y={30} labels={["Samaritans 116 123", "111, mental health option", "999 or A&E"]} lit={() => true} width={196} />}
      <Cap>{["No right or wrong way to feel", "Think about what you can control", "Talking helps; support lines are free", "Low for over 2 weeks? Tell your team", "Help is there, any time of day"][at]}</Cap>
    </svg>} />;
}

// ==== Caring for someone with advanced cancer ===============================================================

function CaManyHands(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const people = [[70, "Partner"], [160, "Son or daughter"], [250, "Neighbour"]] as const;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Being a carer" title="You may already be a carer" label="Becoming a carer" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A partner, a son or daughter and a neighbour, each of them a carer">
      {at === 2 && <path d="M86 122 C120 104, 140 104, 160 112 C180 104, 210 104, 234 122" stroke={GOLD} strokeWidth="3" fill="none" strokeDasharray="5 6" strokeLinecap="round" />}
      {people.map(([x, label], index) => <g key={label}><Person x={x} y={160} scale={1.3} fill={at === 0 || index === 1 ? INK : SOFT} /><W x={x} y={186} size={10}>{label}</W></g>)}
      {at === 0 && <Box x={60} y={30} width={200} text="Each of them is a carer" lit />}
      {at === 1 && <Chips labels={["Personal care", "Shopping", "Appointments"]} lit={-1} y={34} />}
      {at === 2 && <Box x={60} y={30} width={200} text="Shared, or the main carer" />}
      {at === 3 && <Bubble x={160} y={46} text="I am their carer" width={150} />}
      {at === 4 && <HeartShape x={160} y={58} size={44} fill={GOLD} />}
      <Cap>{["Close family can be carers too", "Daily tasks, company and support", "Every caring situation is different", "Tell the GP and hospital team", "There is help for you too"][at]}</Cap>
    </svg>} />;
}

function CaCareCircle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Palliative care" title="The team around you both" label="Palliative care" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A home with the people in the palliative care team around it">
      <House x={240} y={178} width={100} heart={at === 1 || at === 3} />
      {at === 3 && <W x={240} y={66} size={11}>Hospice</W>}
      {at === 0 && <Tags x={20} y={34} labels={["Easing symptoms", "Emotional support", "Planning ahead"]} lit={() => false} width={150} />}
      {at === 1 && <Tags x={20} y={34} labels={["The person", "Family and friends", "Carers"]} lit={() => true} width={150} />}
      {at === 2 && <Tags x={20} y={24} labels={["GP", "District nurse", "Palliative care nurse", "Marie Curie nurse"]} lit={index => index === 2} width={156} />}
      {at === 3 && <Tags x={20} y={34} labels={["At home", "In a care home", "As a day patient"]} lit={() => false} width={150} />}
      {at === 4 && <><Bubble x={100} y={50} text="Can we be referred?" width={160} /><Tags x={20} y={96} labels={["GP", "District nurse"]} lit={() => false} width={150} /></>}
      <Cap>{["Comfort, support and practical help", "Support for family and carers too", "GP, district and palliative nurses", "Hospice care is free", "Ask the GP or district nurse"][at]}</Cap>
    </svg>} />;
}

function CaWatchSigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const sets = [["24-hour hospital number", "Key worker", "GP out of hours", "NHS 111"], ["New back or neck pain", "Weak legs", "Numbness", "Bladder or bowel"],
    ["Breathing very fast", "Confused or slurred", "Blue, pale or blotchy", "Very hot, cold, shivery"], ["Sudden confusion", "Restless", "Unusually sleepy"], ["Feeling sick", "Constipation", "Pain"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Warning signs" title="The changes that cannot wait" label="Symptoms to look out for" credit="Illustration: Rehyn. In an emergency, call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A phone with the numbers to call, beside the changes to act on">
      <rect x="24" y="34" width="72" height="132" rx="12" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="3" />
      <rect x="32" y="48" width="56" height="96" rx="4" fill={at === 2 ? GOLD : TINT} className={at === 0 && !still ? "lib-why-pulse" : undefined} />
      <circle cx="60" cy="155" r="4" fill={at === 2 ? WHITE : INK} />
      <W x={60} y={100} size={at === 2 ? 18 : 11}>{["24-hour", "Hospital", "999", "Doctor", "Nurse"][at]}</W>
      <Tags x={116} y={24} labels={sets} lit={() => false} width={188} />
      {at === 4 && <Box x={116} y={130} width={188} text="Just in case medicines" lit />}
      <Cap>{["Keep the 24-hour numbers to hand", "Spine signs: call the hospital now", "Possible sepsis: 999 or A&E", "A sudden change: tell their doctor", "Just in case medicines can help"][at]}</Cap>
    </svg>} />;
}

function CaTwoChairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Talking" title="Conversations that matter most" label="Talking" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people sitting either side of a small table by a window, talking">
      {at === 2 ? <Clock x={160} y={44} r={24} hand={1} /> : <g><rect x="135" y="18" width="50" height="50" rx="4" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M160 18 V68 M135 43 H185" stroke={INK} strokeWidth="2" /></g>}
      <Person x={70} y={150} scale={1.3} /><Person x={250} y={150} scale={1.3} fill={SOFT} />
      <path d="M46 172 V184 M94 172 V184 M226 172 V184 M274 172 V184" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <rect x="42" y="164" width="56" height="8" rx="3" fill={INK} /><rect x="222" y="164" width="56" height="8" rx="3" fill={INK} />
      <rect x="128" y="134" width="64" height="8" rx="3" fill={SOFT} stroke={INK} strokeWidth="2" /><path d="M140 142 V182 M180 142 V182" stroke={INK} strokeWidth="3" />
      <rect x="146" y="120" width="28" height="14" rx="2" fill={at === 3 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
      {at === 0 && <Bubble x={160} y={94} text="Talking together" width={124} />}
      {at === 1 && <Bubble x={150} y={94} text="I'm listening" width={116} />}
      {at === 3 && <W x={160} y={110} size={10.5}>My wishes</W>}
      {at === 4 && <HeartShape x={160} y={98} size={36} fill={GOLD} />}
      <Cap>{["Talking can ease worries", "Let them lead; listening is enough", "A quiet time and place helps", "An advance statement records wishes", "You can still stay closely involved"][at]}</Cap>
    </svg>} />;
}

function CaRoomPlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const bedLit = at === 1 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Care at home" title="Making care at home safer" label="Practical care" credit="Illustration: Rehyn. A room plan seen from above."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A room plan from above with a bed near the bathroom, and a pill organiser and rota">
      <rect x="20" y="24" width="150" height="156" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="20" y="24" width="58" height="58" fill={TINT} stroke={at === 0 || at === 3 ? GOLD : INK} strokeWidth={at === 0 || at === 3 ? 4 : 2} />
      <path d="M78 64 V82" stroke={WHITE} strokeWidth="5" /><W x={49} y={57} size={10}>Bathroom</W>
      <rect x="100" y="42" width="54" height="84" rx="6" fill={bedLit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="108" y="48" width="38" height="14" rx="4" fill={bedLit ? SOFT : TINT} />
      <W x={127} y={98} size={10.5} fill={bedLit ? WHITE : TEXT}>Bed</W>
      <rect x="132" y="134" width="22" height="18" rx="3" fill={at === 2 ? GOLD : SOFT} stroke={INK} strokeWidth="1.5" />
      <circle cx="48" cy="150" r="14" fill={SOFT} stroke={INK} strokeWidth="2" />
      {at === 0 && <Tags x={184} y={36} labels={["Their routine", "Products they like", "Privacy, dignity"]} lit={() => false} width={122} />}
      {at === 1 && <Tags x={184} y={36} labels={["Sliding sheets", "A hoist", "Fall? Do not move"]} lit={index => index === 2} width={122} />}
      {at === 2 && <g>{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}><rect x={190 + index * 16} y="48" width="14" height="22" rx="3" fill={index < 3 ? INK : WHITE} stroke={INK} strokeWidth="1.5" /><W x={197 + index * 16} y={88} size={9.5}>{day}</W></g>)}
        <W x={245} y={122} size={10.5}>Check each label</W></g>}
      {at === 3 && <Tags x={184} y={36} labels={["Hospital bed", "Near the bathroom", "Things in reach"]} lit={() => false} width={122} />}
      {at === 4 && <g><W x={245} y={36} size={10.5}>Who helps, when</W>
        {Array.from({ length: 12 }, (_, index) => <rect key={index} x={194 + (index % 4) * 26} y={48 + Math.floor(index / 4) * 26} width="22" height="22" rx="4" fill={[0, 5, 7, 10].includes(index) ? GOLD : [2, 3, 8].includes(index) ? INK : WHITE} stroke={INK} strokeWidth="1.5" />)}</g>}
      <Cap>{["Keep their routine and dignity", "Ask to be shown how to move them", "A pill organiser can help", "Ask about a free home assessment", "A rota shares the load"][at]}</Cap>
    </svg>} />;
}

function CaSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stones = [[40, 160], [100, 150], [160, 160], [220, 150], [280, 160]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Carer's assessment" title="A free assessment, just for you" label="A carer's assessment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five stepping stones from asking the council to a support plan">
      {stones.map(([x, y], index) => <g key={x} opacity={index === at ? 1 : 0.55}>
        <ellipse cx={x} cy={y} rx="26" ry="11" fill={index === at ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x} y={y + 4} size={10.5} fill={index === at ? WHITE : TEXT}>{index + 1}</W></g>)}
      {at === 0 && <><Box x={60} y={34} width={200} text="Free, for anyone over 18" lit /><Box x={60} y={80} width={200} text="Separate from their assessment" /></>}
      {at === 1 && <><Phone x={90} y={78} scale={0.8} /><Tags x={138} y={46} labels={["Adult social services", "Call or online"]} lit={() => false} width={160} /></>}
      {at === 2 && <><W x={160} y={36} size={11}>At least an hour</W><Person x={112} y={118} scale={1.1} /><Person x={208} y={118} scale={1.1} fill={SOFT} />
        <rect x="136" y="106" width="48" height="7" rx="3" fill={SOFT} stroke={INK} strokeWidth="1.5" /></>}
      {at === 3 && <><Clipboard x={48} y={36} /><Tags x={128} y={30} labels={["Your NHS number", "Your GP's details", "Their details"]} lit={() => false} width={172} /></>}
      {at === 4 && <><Chips labels={["A break", "Training", "Support groups"]} lit={-1} y={40} /><W x={160} y={108} size={11}>A care and support plan</W></>}
      <Cap>{["Not a test of how well you care", "Ask your local council", "A chat about how you are coping", "Be honest about the impact", "Help such as breaks or training"][at]}</Cap>
    </svg>} />;
}

function CaHoursBars(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const bars = [[40, 20, at === 2], [96, 35, at === 0]] as const;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Money and work" title="Money help and your rights at work" label="Money, benefits and work" credit="Illustration: Rehyn. Hours of caring a week."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two bars for 20 and 35 hours of caring a week, beside money help and work rights">
      <g opacity={fade(at === 0 || at === 2)}>
        <path d="M24 170 H146" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        {bars.map(([x, hours, lit]) => <g key={x}><rect x={x} y={170 - hours * 3} width="40" height={hours * 3} rx="6" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <W x={x + 20} y={162 - hours * 3} size={10.5}>{`${hours} hours`}</W></g>)}
        <W x={85} y={186} size={10}>a week</W>
      </g>
      {at === 0 && <Tags x={162} y={40} labels={["Carer's Allowance", "Need not be related", "Backdate 3 months"]} lit={index => index === 0} width={142} />}
      {at === 1 && <><Box x={162} y={30} width={142} text="A benefit check" lit /><Tags x={162} y={76} labels={["Carers UK", "Citizens Advice", "Macmillan advisers"]} lit={() => false} width={142} /></>}
      {at === 2 && <Tags x={162} y={40} labels={["Carer's Credit", "National Insurance", "State Pension"]} lit={index => index === 0} width={142} />}
      {at === 3 && <><Box x={162} y={30} width={142} text="Special rules" lit /><Tags x={162} y={76} labels={["Faster access", "Highest rates", "No medical assessment"]} lit={() => false} width={142} /></>}
      {at === 4 && <Tags x={162} y={40} labels={["Flexible working", "Emergency time off", "Carer's leave"]} lit={() => false} width={142} />}
      <Cap>{["Caring 35 hours a week or more", "Get a free benefit check", "Protects your National Insurance", "Special rules can make claims easier", "Ask your employer about flexible work"][at]}</Cap>
    </svg>} />;
}

function CaSitterClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Breaks" title="Taking a break, without guilt" label="Breaks and respite" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A carer outside in the sun, a clock with a few hours set aside, and kinds of respite">
      {at === 0 && <><Sun x={80} y={48} /><Person x={80} y={156} scale={1.5} /><path d="M20 172 C80 164, 160 168, 300 172" stroke={LINE} strokeWidth="3" fill="none" />
        <Tags x={160} y={50} labels={["Time out for you", "Avoid exhaustion"]} lit={() => false} width={144} /></>}
      {at === 1 && <Tags x={60} y={24} labels={["Struggling emotionally", "Your health getting worse", "Not enough sleep", "No time to relax"]} lit={() => false} width={200} />}
      {at === 2 && <><circle cx="80" cy="96" r="52" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M80 96 L80 44 A52 52 0 0 1 132 96 Z" fill={GOLD} opacity=".6" />
        <path d="M80 96 V58 M80 96 L104 108" stroke={TEXT} strokeWidth="4" strokeLinecap="round" />
        <Tags x={160} y={26} labels={["Sitting service", "Night sitter", "Day centre", "Hospice short stay"]} lit={() => false} width={144} /></>}
      {at === 3 && <><Box x={40} y={36} width={240} text="Your carer's assessment" /><Box x={40} y={80} width={240} text="Their needs assessment" /><Box x={40} y={124} width={240} text="Some respite may be free" lit /></>}
      {at === 4 && <><rect x="40" y="30" width="80" height="150" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M40 84 H120" stroke={INK} strokeWidth="2.5" />
        <path d="M52 46 V70 M52 98 V140" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <g transform="rotate(5 92 112)"><rect x="72" y="96" width="38" height="34" rx="3" fill={GOLD} stroke={INK} strokeWidth="1.5" /><path d="M78 108 H104 M78 117 H98" stroke={INK} strokeWidth="2" strokeLinecap="round" /></g>
        <Tags x={146} y={40} labels={["Contacts list", "Their medicines", "What they like to eat"]} lit={() => false} width={158} /></>}
      <Cap>{["A break helps stop exhaustion", "Signs a break might help", "From a few hours to a short stay", "Assessments come first for funding", "Leave notes for whoever steps in"][at]}</Cap>
    </svg>} />;
}

function CaDayIcons(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [0, 1, 2, 3, 0][at];
  const still = useStill();
  const xs = [50, 125, 200, 275];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your health" title="Your health counts too" label="Looking after yourself" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four parts of a carer's own day: the GP, food and walking, sleep and time to relax">
      <path d="M50 70 H275" stroke={LINE} strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" />
      {xs.map((x, index) => <g key={x} opacity={index === lit ? 1 : 0.4}>
        <circle cx={x} cy="70" r="28" fill={WHITE} stroke={index === lit ? GOLD : INK} strokeWidth={index === lit ? 4 : 2} />
        <W x={x} y={118} size={10}>{["Your GP", "Eat, move", "Sleep", "Relax"][index]}</W></g>)}
      <g opacity={lit === 0 ? 1 : 0.4}><rect x="36" y="58" width="28" height="24" rx="4" fill={INK} /><path d="M50 63 V77 M43 70 H57" stroke={WHITE} strokeWidth="3" /></g>
      <g opacity={lit === 1 ? 1 : 0.4}><circle cx="125" cy="70" r="15" fill={TINT} stroke={INK} strokeWidth="2" /><circle cx="125" cy="70" r="8" fill={WHITE} stroke={SOFT} strokeWidth="2" /></g>
      <g opacity={lit === 2 ? 1 : 0.4}><Moon x={196} y={70} r={13} /></g>
      <g opacity={lit === 3 ? 1 : 0.4}><circle cx="275" cy="70" r="13" fill={SOFT} className={lit === 3 && !still ? "lib-v2-breathe is-slow" : undefined} /></g>
      {at === 0 && <Box x={60} y={140} width={200} text="Free flu jab, if main carer" />}
      {at === 1 && <Chips labels={["A cooked meal", "A daily walk"]} lit={-1} y={140} />}
      {at === 2 && <Chips labels={["Regular bedtime", "Notepad by the bed"]} lit={-1} y={140} />}
      {at === 3 && <Chips labels={["5 minutes out", "Slow breaths"]} lit={-1} y={140} />}
      {at === 4 && <Box x={40} y={140} width={240} text="Hard to cope? Talk to your GP" lit />}
      <Cap>{["Tell your GP you are a carer", "Eat well and get outside each day", "A regular bedtime can really help", "Step out for five minutes and breathe", "Your GP can suggest talking help"][at]}</Cap>
    </svg>} />;
}

function CaFeelingCloud(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const words = [["Frightened", 70, 40], ["Sad", 160, 34], ["Angry", 246, 40], ["Guilty", 56, 82], ["Lonely", 150, 78], ["Tired", 240, 84], ["Hope", 96, 124], ["Grief", 196, 124], ["Low", 270, 128]] as const;
  const on = [["Frightened", "Sad", "Angry", "Guilty", "Lonely"], ["Guilty", "Angry"], ["Hope", "Grief"], ["Low", "Tired", "Sad"], []][at] as readonly string[];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Feelings" title="Every feeling has a place" label="Your feelings" credit="Illustration: Rehyn. Need help now? Samaritans: 116 123."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A cloud of feelings carers can have, and where to get help now">
      {at < 4 && <>
        {at === 2 && <path d="M120 124 H170" stroke={GOLD} strokeWidth="3" strokeDasharray="4 4" />}
        {words.map(([word, x, y]) => { const width = word.length * 6.4 + 22; const lit = on.includes(word); return <g key={word} opacity={at === 0 || lit ? 1 : 0.4}>
          <rect x={x - width / 2} y={y - 13} width={width} height="26" rx="13" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <W x={x} y={y + 4} size={10.5} fill={lit ? WHITE : TEXT}>{word}</W></g>; })}</>}
      {at === 4 && <><HeartShape x={160} y={40} size={34} fill={GOLD} /><Tags x={60} y={66} labels={["111, mental health option", "Samaritans 116 123", "Text SHOUT to 85258"]} lit={() => true} width={200} /></>}
      <Cap>{["Many feelings, and all are normal", "Talk, breathe deeply, take a walk", "Hope and grief can sit together", "Low for weeks? Talk to your GP", "Help is there, 24 hours a day"][at]}</Cap>
    </svg>} />;
}

function CaSofaTalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Children" title="Honest words for young minds" label="Supporting children" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An adult and a child side by side on a sofa, with a school bag and a ball by the door">
      <rect x="50" y="104" width="160" height="40" rx="10" fill={TINT} stroke={INK} strokeWidth="2" />
      <Person x={100} y={130} scale={1.3} />
      <Person x={168} y={at === 2 ? 132 : 134} scale={at === 2 ? 1.15 : 0.9} fill={SOFT} />
      <rect x="44" y="140" width="172" height="26" rx="10" fill={SOFT} stroke={INK} strokeWidth="2" />
      <path d="M64 166 V180 M196 166 V180" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at < 4 && <g><rect x="250" y="56" width="50" height="124" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="290" cy="122" r="3.5" fill={INK} /></g>}
      {at === 0 && <HeartShape x={134} y={52} size={30} fill={GOLD} />}
      {at === 1 && <Bubble x={150} y={34} text="Clear, simple words" width={150} />}
      {at === 2 && <Bubble x={156} y={34} text="Any questions?" width={124} />}
      {at === 3 && <><rect x="226" y="152" width="26" height="28" rx="5" fill={INK} /><path d="M232 152 V146 a7 7 0 0 1 14 0 V152" stroke={INK} strokeWidth="2.5" fill="none" />
        <circle cx="282" cy="168" r="12" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="282" cy="168" r="4" fill={INK} /></>}
      {at === 4 && <><House x={262} y={100} width={60} heart /><rect x="226" y="116" width="76" height="44" rx="8" fill={INK} />
        <W x={264} y={134} size={10} fill={WHITE}>Childline</W><W x={264} y={150} size={10} fill={WHITE}>0800 11 11</W></>}
      <Cap>{["Honesty helps children feel included", "Small chunks, and simple words", "Check in, and invite questions", "Routines, school and time for fun", "Support for children is there too"][at]}</Cap>
    </svg>} />;
}

function CaHelpLines(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const names = ["Macmillan", "Marie Curie", "Carers UK", "NHS 111", "Samaritans"];
  const full = ["Macmillan 0808 808 00 00", "Marie Curie 0800 090 2309", "Carers UK 0808 808 7777", "NHS 111", "Samaritans 116 123"];
  const on = [[0], [1], [2], [3, 4], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="Help is a call away" label="Helplines and support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A phone beside five helplines for carers, and people who understand">
      {at < 4 ? <Phone x={56} y={100} lit scale={1.2} /> : <><HeartShape x={56} y={60} size={30} fill={GOLD} /><Person x={36} y={140} scale={0.95} /><Person x={78} y={144} scale={0.95} fill={SOFT} /></>}
      <Tags x={110} y={24} labels={names.map((name, index) => on.includes(index) ? full[index] : name)} lit={index => on.includes(index)} width={194} gap={32} />
      <Cap>{["Macmillan: 8am to 8pm, every day", "Marie Curie: support for carers too", "Carers UK: rights, money, assessments", "111 out of hours; Samaritans any time", "Others who feel the same way"][at]}</Cap>
    </svg>} />;
}

export function SupportPieceView({ piece, ...props }: { piece: SupportPiece } & PieceProps) {
  switch (piece) {
    case "sup-bm-new-place": return <BmNewPlace {...props} />;
    case "sup-bm-ache-map": return <BmAcheMap {...props} />;
    case "sup-bm-urgent": return <BmUrgent {...props} />;
    case "sup-bm-scan-day": return <BmScanDay {...props} />;
    case "sup-bm-bone-shield": return <BmBoneShield {...props} />;
    case "sup-bm-beam": return <BmBeam {...props} />;
    case "sup-bm-pain-ladder": return <BmPainLadder {...props} />;
    case "sup-bm-bone-pin": return <BmBonePin {...props} />;
    case "sup-bm-move-ticks": return <BmMoveTicks {...props} />;
    case "sup-bm-smile": return <BmSmile {...props} />;
    case "sup-bm-house": return <BmHouse {...props} />;
    case "sup-bm-voices": return <BmVoices {...props} />;
    case "sup-ca-many-hands": return <CaManyHands {...props} />;
    case "sup-ca-care-circle": return <CaCareCircle {...props} />;
    case "sup-ca-watch-signs": return <CaWatchSigns {...props} />;
    case "sup-ca-two-chairs": return <CaTwoChairs {...props} />;
    case "sup-ca-room-plan": return <CaRoomPlan {...props} />;
    case "sup-ca-steps": return <CaSteps {...props} />;
    case "sup-ca-hours-bars": return <CaHoursBars {...props} />;
    case "sup-ca-sitter-clock": return <CaSitterClock {...props} />;
    case "sup-ca-day-icons": return <CaDayIcons {...props} />;
    case "sup-ca-feeling-cloud": return <CaFeelingCloud {...props} />;
    case "sup-ca-sofa-talk": return <CaSofaTalk {...props} />;
    case "sup-ca-help-lines": return <CaHelpLines {...props} />;
  }
}
