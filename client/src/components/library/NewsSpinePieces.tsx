import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { SPINE_PIECES, type SpinePiece } from "@/content/spine-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Neck pain and Spinal stenosis pages' own pieces (content/spine-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isSpinePiece = (piece: NewsPiece): piece is SpinePiece => (SPINE_PIECES as readonly string[]).includes(piece);

const urgentCredit = "Illustration: Rehyn. If you are worried, get help straight away.";
const medsCredit = "Illustration: Rehyn. Check with a pharmacist or GP.";
const moveCredit = "Illustration: Rehyn. Get advice from a physiotherapist first.";
const ideaCredit = "Illustration: Rehyn. A picture of the idea, not a measurement.";

/** The caption under a picture. */
const Say = ({ children }: { children: ReactNode }) => <W x={160} y={206} size={11}>{children}</W>;
/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 24, size = 10.5, dim = false }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number; dim?: boolean }) =>
  <g opacity={dim ? 0.4 : 1}><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="8" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 12 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
/** A gold ring round what the section is about. */
const Ring = ({ x, y, r, still }: { x: number; y: number; r: number; still: boolean }) =>
  <circle cx={x} cy={y} r={r} fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />;
const Arrow = ({ d, head, stroke = GOLD }: { d: string; head: string; stroke?: string }) =>
  <g stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** Lines of left-aligned text from (x, y), `gap` apart, each with a small dot. */
const List = ({ x, y, lines, gap = 24, size = 10 }: { x: number; y: number; lines: string[]; gap?: number; size?: number }) =>
  <g>{lines.map((line, index) => <g key={line}><circle cx={x} cy={y + index * gap - size * 0.35} r="3" fill={GOLD} /><W x={x + 9} y={y + index * gap} size={size} anchor="start">{line}</W></g>)}</g>;
/** A simple figure: hips at (x, y), the body leaning `lean` degrees forward (to the right); `sit` bends the legs. */
const Figure = ({ x, y, lean = 0, sit = false, legs = INK, arms = INK, hand, scale = 1 }: { x: number; y: number; lean?: number; sit?: boolean; legs?: string; arms?: string; hand?: [number, number]; scale?: number }) => {
  const a = lean * Math.PI / 180;
  const sx = x + 44 * Math.sin(a), sy = y - 44 * Math.cos(a);
  const hx = x + 60 * Math.sin(a), hy = y - 60 * Math.cos(a);
  const [ax, ay] = hand ?? [sx + 8, sy + 34];
  return <g strokeLinecap="round" strokeLinejoin="round" fill="none" transform={scale === 1 ? undefined : `translate(${x} ${y}) scale(${scale}) translate(${-x} ${-y})`}>
    <path d={sit ? `M${x} ${y} H${x + 30} V${y + 40}` : `M${x} ${y} L${x - 9} ${y + 54} M${x} ${y} L${x + 9} ${y + 54}`} stroke={legs} strokeWidth="7" />
    <path d={`M${x} ${y} L${sx} ${sy}`} stroke={INK} strokeWidth="9" />
    <path d={`M${sx} ${sy} L${ax} ${ay}`} stroke={arms} strokeWidth="6" />
    <circle cx={hx} cy={hy} r="11" fill={INK} stroke="none" />
  </g>;
};
/** A car, side on, centred on (x, y). */
const Car = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 26} ${y + 6} V${y - 4} L${x - 14} ${y - 6} L${x - 6} ${y - 16} H${x + 12} L${x + 20} ${y - 6} L${x + 26} ${y - 4} V${y + 6} Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx={x - 14} cy={y + 7} r="5" fill={INK} /><circle cx={x + 14} cy={y + 7} r="5" fill={INK} /></g>;
/** A hot water bottle centred on (x, y). */
const Bottle = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 6} y={y - 30} width="12" height="12" rx="2" fill={INK} /><rect x={x - 20} y={y - 20} width="40" height="44" rx="12" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
    {[-8, 2, 12].map(dy => <path key={dy} d={`M${x - 12} ${y + dy} H${x + 12}`} stroke={lit ? WHITE : SOFT} strokeWidth="2" />)}</g>;
/** A pain scale from 0 to 10, from x across 242, at height y; boxes up to `upTo` are filled. */
const PainScale = ({ x, y, upTo }: { x: number; y: number; upTo: number }) =>
  <g>{Array.from({ length: 11 }, (_, index) => <rect key={index} x={x + index * 22} y={y} width="18" height="16" rx="4" fill={index <= upTo ? INK : WHITE} stroke={INK} strokeWidth="1.5" />)}
    {[0, 5, 10].map(n => <W key={n} x={x + n * 22 + 9} y={y + 30} size={10}>{String(n)}</W>)}</g>;
/** A calendar page. */
const Cal = ({ x, y, w = 40, lit = false }: { x: number; y: number; w?: number; lit?: boolean }) =>
  <g><rect x={x - w / 2} y={y - w * 0.42} width={w} height={w * 0.86} rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - w / 2} y={y - w * 0.42} width={w} height={w * 0.22} rx="3" fill={lit ? GOLD : INK} />
    {[0, 1, 2].map(row => [0, 1, 2].map(col => <circle key={`${row}${col}`} cx={x - w * 0.25 + col * w * 0.25} cy={y + row * w * 0.17} r={w * 0.045} fill={SOFT} />))}</g>;

// ==== Neck pain ============================================================================================

/** The head and the seven neck bones, side on, the face to the right; `facet` lights one small joint. */
const NeckSide = ({ x, y, facet = -1, lit = false }: { x: number; y: number; facet?: number; lit?: boolean }) =>
  <g>
    <circle cx={x} cy={y} r="26" fill={WHITE} stroke={INK} strokeWidth="3" />
    <path d={`M${x + 24} ${y - 4} l9 8 l-8 3`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    {Array.from({ length: 7 }, (_, index) => {
      const top = y + 32 + index * 13, dx = Math.sin(index / 6 * Math.PI) * 7;
      return <g key={index}>
        <rect x={x - 14 + dx} y={top} width="28" height="9" rx="3" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {index < 6 && <ellipse cx={x + dx + 1} cy={top + 11} rx="12" ry="2" fill={SOFT} />}
        <circle cx={x - 19 + dx} cy={top + 4.5} r="3.4" fill={index === facet ? GOLD : SOFT} />
      </g>;
    })}
  </g>;

function NeckSevenBones(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Seven bones, small joints and discs", "Usually a strain of a small joint", "Scans and pain: not strongly linked", "Sleep, tension, stress: more sensitive", "Most neck pain lasts a few weeks"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The neck" title="Seven small bones, rarely serious damage" label="Why the neck hurts" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The head and the seven bones of the neck, with discs and small facet joints">
      <NeckSide x={90} y={44} facet={at === 1 ? 3 : -1} />
      <path d="M30 184 C56 172 120 172 150 184" fill="none" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
      {at === 1 && <Ring x={75} y={124} r={10} still={still} />}
      {at === 0 && ["7 small bones", "Discs between", "Facet joints"].map((label, index) => <Box key={label} x={242} y={66 + index * 36} w={124} text={label} lit={index === 0} />)}
      {at === 1 && <><Box x={242} y={70} w={138} text="A strained joint" lit /><W x={242} y={110} size={10.5}>Less often, a disc</W><W x={242} y={130} size={10.5}>Even less, the nerves</W></>}
      {at === 2 && <><rect x="196" y="34" width="92" height="104" rx="8" fill={TEXT} />
        {Array.from({ length: 5 }, (_, index) => <rect key={index} x={228} y={46 + index * 18} width="28" height="10" rx="3" fill={WHITE} opacity="0.85" />)}
        <W x={242} y={160} size={10.5}>Common with age</W><W x={242} y={176} size={10.5}>and often painless</W></>}
      {at === 3 && ["Poor sleep", "Muscle tension", "Less activity", "Stress"].map((label, index) => <Box key={label} x={242} y={52 + index * 34} w={124} text={label} />)}
      {at === 4 && <><W x={242} y={58} size={10.5}>A few weeks</W>
        {Array.from({ length: 8 }, (_, index) => <rect key={index} x={190 + index * 13} y={70} width="10" height="22" rx="3" fill={index < 3 ? INK : WHITE} stroke={INK} strokeWidth="1.5" />)}
        <Box x={242} y={130} w={138} text="Keep gently moving" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function NeckTriggers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Sleep, desks, a pinched nerve, injury", "Long spells matter more than posture", "Stress tightens the neck muscles", "Often for no obvious reason", "Ask what may have set it off"];
  const labels = at === 4 ? ["Less sleep?", "Sitting longer?", "More stress?", "Less exercise?"] : ["Sleeping awkwardly", "Long spells sitting", "Worry or stress", "An injury"];
  const lit = [[0, 1, 2, 3], [1], [0, 2, 3], [], [0, 1, 2, 3]][at];
  const spots = [{ x: 64, y: 50 }, { x: 256, y: 50 }, { x: 64, y: 134 }, { x: 256, y: 134 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="Not your posture: your stillness" label="Common causes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A neck with four common triggers around it: a pillow, a desk, stress and an injury">
      <circle cx="160" cy="84" r="24" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="150" y="108" width="20" height="22" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M116 156 C122 136 140 130 160 130 C180 130 198 136 204 156" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {at === 3 && <W x={160} y={92} size={22} fill={INK}>?</W>}
      <g opacity={lit.includes(0) ? 1 : 0.35}><rect x="42" y="40" width="44" height="20" rx="9" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M52 50 H76" stroke={SOFT} strokeWidth="2" /></g>
      <g opacity={lit.includes(1) ? 1 : 0.35}><path d="M228 62 H270" stroke={INK} strokeWidth="3" strokeLinecap="round" /><rect x="236" y="38" width="24" height="18" rx="3" fill={TINT} stroke={INK} strokeWidth="2" /><Clock x={280} y={42} r={10} hand={2} /></g>
      <g opacity={lit.includes(2) ? 1 : 0.35}><path d="M44 142 a10 10 0 0 1 2 -18 a13 13 0 0 1 24 -4 a10 10 0 0 1 14 18 Z" fill={SOFT} stroke={INK} strokeWidth="2" strokeLinejoin="round" /></g>
      <g opacity={lit.includes(3) ? 1 : 0.35}><Car x={256} y={132} /></g>
      {labels.map((label, index) => <W key={label} x={spots[index].x} y={spots[index].y + 34} size={10.5} fill={lit.includes(index) ? INK : TEXT}>{label}</W>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function NeckArmTingle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Pressure on a nerve: arm tingling", "A disc or bony lump can press on it", "It often settles by itself", "Medicines, scans and, rarely, surgery", "Weak or heavy arms: urgent GP or 111"];
  const tingling = at < 2 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Trapped nerve" title="When the neck speaks through the arm" label="A trapped nerve" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with a nerve running from the neck down one arm to the fingers">
      <circle cx="96" cy="40" r="20" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="88" y="58" width="16" height="16" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="58" y="74" width="76" height="102" rx="20" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M134 88 C152 96 160 120 162 142 L166 170" fill="none" stroke={INK} strokeWidth="20" strokeLinecap="round" />
      <path d="M134 88 C152 96 160 120 162 142 L166 170" fill="none" stroke={WHITE} strokeWidth="14" strokeLinecap="round" />
      <path d="M104 68 C122 74 148 92 154 114 C160 136 162 152 166 172" fill="none" stroke={tingling ? GOLD : SOFT} strokeWidth="3" strokeLinecap="round" strokeDasharray={tingling ? "5 6" : undefined} className={tingling && !still ? "lib-types-flow" : undefined} />
      {at === 1 && <circle cx="104" cy="68" r="7" fill={GOLD} />}
      {at === 0 && ["Numbness", "Pins and needles", "Tingling"].map((label, index) => <Box key={label} x={250} y={64 + index * 34} w={116} text={label} />)}
      {at === 1 && <><circle cx="250" cy="86" r="46" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="218" y="58" width="44" height="16" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="218" y="98" width="44" height="16" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" />
        <ellipse cx="246" cy="86" rx="26" ry="6" fill={GOLD} /><path d="M276 66 V108" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <path d="M262 98 l8 -6 l0 10 Z" fill={TEXT} />
        <W x={250} y={152} size={10.5}>Disc or bony lump</W></>}
      {at === 2 && <><Box x={250} y={70} w={124} text="Often settles" lit /><Box x={250} y={104} w={124} text="Keep active" /><Box x={250} y={138} w={124} text="Simple painkillers" /></>}
      {at === 3 && <><Box x={250} y={64} w={126} text="Nerve pain medicine" size={10} /><Box x={250} y={98} w={126} text="An MRI scan" size={10} /><Box x={250} y={132} w={126} text="Surgery, rarely" size={10} dim /></>}
      {at === 4 && <><Box x={250} y={62} w={124} text="Urgent GP or 111" lit /><W x={250} y={100} size={10.5}>Heavy or weak arms</W><W x={250} y={120} size={10.5}>Pins and needles</W><W x={250} y={136} size={10.5}>with neck or arm pain</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function NeckThreeTiers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["999: walking, bladder, co-ordination", "Meningitis signs: 999 or go to A&E", "Weak arms or sudden pain: urgent GP", "After an injury: urgent GP or 111", "No better after weeks: see a GP"];
  const tiers = ["999 or A&E", "Urgent GP or 111", "See a GP"];
  const lit = [0, 0, 1, 1, 2][at];
  const lines = [
    ["New trouble walking", "Bladder or bowel control", "Sudden poor co-ordination", "Face droops, speech changes"],
    ["Stiff neck", "Cannot look at bright light", "Very painful headache", "Rash that does not fade"],
    ["Sudden, severe neck pain", "Heavy or weak arms or legs", "Pins and needles in an arm", "Pain between shoulder blades"],
    ["Severe pain despite painkillers", "Tingling, one or both sides", "Electric shock feeling", "Do not drive or cycle"],
    ["Not better after a few weeks", "Painkillers have not worked", "Pins and needles, a cold arm", "Worried about the pain"],
  ][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Urgent signs" title="Neck symptoms that need help fast" label="When to get help" credit={urgentCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three levels of help: 999 or A&E, an urgent GP appointment or NHS 111, and seeing a GP">
      {tiers.map((tier, index) => <g key={tier} opacity={index === lit ? 1 : 0.4}>
        <rect x="12" y={28 + index * 52} width="112" height="40" rx="10" fill={index === lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={68} y={52 + index * 52} size={index === 1 ? 10 : 11} fill={index === lit ? WHITE : TEXT}>{tier}</W>
      </g>)}
      <path d={`M124 ${48 + lit * 52} H134 V30 M134 ${48 + lit * 52} V170`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />
      <List x={146} y={46} lines={lines} gap={36} size={10} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function NeckRestRuler(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Keep it moving; no collar", "Rest no more than a day or two", "Move it a little every hour", "Some aches are normal; stop if worse", "Most improve within 8 weeks"];
  const ticks = [{ x: 30, t: "Day 1" }, { x: 66, t: "Day 2" }, { x: 132, t: "2 weeks" }, { x: 218, t: "8 weeks" }, { x: 284, t: "3 months" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Keep moving" title="A day of rest, then keep moving" label="Rest and movement" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from the first day to three months, with only a day or two of rest">
      <path d="M30 128 H284" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {ticks.map((tick, index) => <g key={tick.t}><circle cx={tick.x} cy={128} r={at === 4 && index === 3 ? 10 : 7} fill={at === 4 && index === 3 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={tick.x} y={156} size={10}>{tick.t}</W></g>)}
      <g opacity={at === 1 ? 1 : 0.35}><rect x="26" y="98" width="44" height="12" rx="4" fill={at === 1 ? INK : SOFT} /><rect x="26" y="90" width="12" height="10" rx="3" fill={at === 1 ? INK : SOFT} /><path d="M26 110 V116 M70 110 V116" stroke={INK} strokeWidth="2.5" /></g>
      {at === 0 && <><Box x={104} y={52} w={124} text="Keep it moving" lit /><ellipse cx="236" cy="52" rx="26" ry="10" fill={TINT} stroke={INK} strokeWidth="2.5" /><Cross x={236} y={52} s={11} /><W x={236} y={82} size={10.5}>No collar</W></>}
      {at === 1 && <W x={48} y={78} size={10.5} anchor="start">A day or two at most</W>}
      {at === 2 && <><W x={174} y={52} size={10.5}>Every hour</W>{[90, 132, 174, 216, 258].map(x => <Clock key={x} x={x} y={88} r={11} hand={x / 40} />)}</>}
      {at === 3 && <><Box x={94} y={60} w={130} text="Some aches: normal" /><Box x={232} y={60} w={130} text="Much worse: stop" lit /></>}
      {at === 4 && <><Ring x={218} y={128} r={17} still={still} /><W x={218} y={96} size={10.5}>Most improved</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** A head and neck seen from the front, for the neck exercises: `tilt` in degrees, `turn` -1 to 1, `nod` lowers the chin. */
const FrontHead = ({ x, y, tilt = 0, turn = 0, nod = false, lit = true }: { x: number; y: number; tilt?: number; turn?: number; nod?: boolean; lit?: boolean }) =>
  <g opacity={lit ? 1 : 0.4}>
    <path d={`M${x - 34} ${y + 54} C${x - 24} ${y + 40} ${x + 24} ${y + 40} ${x + 34} ${y + 54}`} fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    <rect x={x - 8} y={y + 20} width="16" height="22" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    <g transform={`rotate(${tilt} ${x} ${y + 30}) translate(0 ${nod ? 6 : 0})`}>
      <circle cx={x} cy={y} r="22" fill={WHITE} stroke={INK} strokeWidth="3" />
      <circle cx={x - 8 + turn * 10} cy={y + (nod ? 6 : -3)} r="2.6" fill={INK} /><circle cx={x + 8 + turn * 10} cy={y + (nod ? 6 : -3)} r="2.6" fill={INK} />
      {turn !== 0 && <path d={`M${x + turn * 20} ${y - 2} l${turn * 6} 6 l${-turn * 6} 2`} fill="none" stroke={INK} strokeWidth="2" />}
    </g>
  </g>;

function NeckTiltTurnNod(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Get advice first; start slowly", "Tilt, turn, chin to chest: 5 seconds", "2 to 3 at a time, every hour", "Keep pain between 0 and 5 out of 10", "Stop if it makes things worse"];
  const moves = [{ x: 60, t: "Head tilt" }, { x: 160, t: "Head turn" }, { x: 260, t: "Chin to chest" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Exercises" title="A tilt, a turn and a nod" label="Neck exercises" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three gentle neck exercises: a head tilt, a head turn and chin to chest">
      <FrontHead x={60} y={48} tilt={at === 1 ? -18 : 0} lit={at !== 0} />
      <FrontHead x={160} y={48} turn={at === 1 ? 1 : 0} lit={at !== 0} />
      <FrontHead x={260} y={48} nod={at === 1} lit={at !== 0} />
      {moves.map(move => <W key={move.t} x={move.x} y={124} size={10.5} fill={at === 0 ? TEXT : INK}>{move.t}</W>)}
      {at === 0 && <Box x={160} y={158} w={196} text="Advice first, then slowly" lit />}
      {at === 1 && <W x={160} y={160} size={10.5}>Hold 5 seconds, 5 times each</W>}
      {at === 2 && <>{moves.map(move => [0, 1, 2].map(n => <circle key={`${move.x}${n}`} cx={move.x - 12 + n * 12} cy={146} r="4" fill={INK} />))}<W x={160} y={174} size={10.5}>Up to about 10 over time</W></>}
      {at === 3 && <PainScale x={39} y={142} upTo={5} />}
      {at === 4 && <Box x={160} y={158} w={196} text="Worse or new pain: stop" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function NeckPeasBottle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Paracetamol or ibuprofen, or a gel", "Ibuprofen: no more than 10 days", "Not for everyone: ask a pharmacist", "Cold 5 minutes, warmth 20 minutes", "Warmth and gentle massage can soothe"];
  const left = at <= 2 ? 1 : 0.35, right = at >= 3 ? 1 : 0.35;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pain relief" title="Ease the pain to keep moving" label="Painkillers, heat and cold" credit={medsCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Paracetamol, an ibuprofen gel, a wrapped bag of frozen peas and a hot water bottle">
      <g opacity={left}>
        <Pill x={70} y={42} /><W x={70} y={70} size={10.5}>Paracetamol</W>
        <rect x="44" y="88" width="44" height="18" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="88" y="91" width="10" height="12" rx="2" fill={INK} />
        <W x={70} y={126} size={10.5}>Ibuprofen gel</W>
      </g>
      <path d="M140 30 V140" stroke={LINE} strokeWidth="2" />
      <g opacity={right}>
        <rect x="170" y="44" width="48" height="40" rx="8" fill={TINT} stroke={INK} strokeWidth="2.5" />
        {[[182, 58], [194, 66], [206, 56], [186, 74], [204, 76]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="3.5" fill={SOFT} />)}
        <path d="M166 54 H222 M166 76 H222" stroke={INK} strokeWidth="2" strokeDasharray="4 3" />
        <W x={194} y={108} size={10.5}>{at === 3 ? "5 minutes" : "Cold"}</W>
        <Bottle x={268} y={66} lit={at === 4} />
        {at === 4 && <path d="M258 26 q4 -6 0 -12 M270 26 q4 -6 0 -12 M282 26 q4 -6 0 -12" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" />}
        <W x={268} y={108} size={10.5}>{at === 3 ? "20 minutes" : "Warmth"}</W>
      </g>
      {at === 1 && <>{Array.from({ length: 10 }, (_, day) => <rect key={day} x={30 + day * 26} y={150} width="20" height="20" rx="4" fill={INK} />)}<W x={160} y={186} size={10}>Days, at most, unless a doctor advises</W></>}
      {at === 2 && <><Box x={160} y={156} w={200} text="Ulcer, asthma, pregnancy?" /><W x={160} y={186} size={10}>Check before you start</W></>}
      {at === 3 && <W x={230} y={150} size={10.5}>Wrapped, never on skin</W>}
      {at === 4 && <><W x={230} y={146} size={10.5}>Soothes muscle spasms</W><W x={230} y={164} size={10.5}>Gentle massage helps</W></>}
      {at === 0 && <W x={70} y={150} size={10.5}>Paracetamol first</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function NeckPhysioVisits(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Hands-on help, exercises and advice", "In many areas you can refer yourself", "Hands-on help matters less over time", "Do your exercises between sessions", "Going private: look for MCSP"];
  const strip = [0, 1, 2, 3, 4].map(index => ({ x: 40 + index * 60, visit: index % 2 === 0 }));
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Physiotherapy" title="What a physiotherapist can do" label="Physiotherapy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Physiotherapy sessions with exercises at home in between">
      {strip.map(spot => spot.visit
        ? <g key={spot.x} opacity={at === 3 ? 0.4 : 1}><rect x={spot.x - 22} y={146} width="44" height="30" rx="8" fill={INK} /><W x={spot.x} y={165} size={10} fill={WHITE}>Visit</W></g>
        : <g key={spot.x}><path d={`M${spot.x - 18} ${158} L${spot.x} ${142} L${spot.x + 18} ${158}`} fill="none" stroke={at === 3 ? GOLD : INK} strokeWidth="3" strokeLinejoin="round" /><rect x={spot.x - 13} y={157} width="26" height="20" fill={WHITE} stroke={INK} strokeWidth="2.5" /></g>)}
      <path d="M62 161 H78 M122 161 H138 M182 161 H198 M242 161 H258" stroke={LINE} strokeWidth="3" />
      {(at === 0 || at === 1) && <><Person x={60} y={96} /><Person x={108} y={100} scale={0.9} fill={SOFT} /></>}
      {at === 0 && ["Hands-on help", "Exercises", "Advice"].map((label, index) => <Box key={label} x={236} y={36 + index * 32} w={120} text={label} lit={index === 0} />)}
      {at === 1 && <><Box x={230} y={44} w={132} text="Refer yourself" lit /><W x={230} y={80} size={10.5}>Free on the NHS</W><W x={230} y={98} size={10.5}>No diagnosis needed</W></>}
      {at === 2 && <><path d="M40 40 V110 H290 Z" fill={TINT} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><W x={50} y={36} size={10.5} anchor="start">Hands-on help</W><W x={286} y={128} size={10.5} anchor="end">The longer it has lasted</W></>}
      {at === 3 && <><W x={160} y={64} size={11.5}>Exercises at home</W><W x={160} y={84} size={10.5}>between appointments,</W><W x={160} y={100} size={10.5}>done regularly</W></>}
      {at === 4 && <><rect x="96" y="30" width="128" height="80" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={160} y={68} size={22} serif fill={INK}>MCSP</W><W x={160} y={94} size={10.5}>and HCPC registered</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function NeckScreenLevel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Long spells matter more than posture", "Top of the screen at eye level", "5 to 10 minutes' break every hour", "A headset, not a phone on the shoulder", "No need to be pain-free to return"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="At work" title="Screen up, phone off your shoulder" label="Desks, screens and phones" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person at a desk with the top of the screen at eye level, about an arm's length away">
      <path d="M150 126 H296 M160 126 V184 M286 126 V184" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <rect x="252" y="62" width="10" height="56" rx="3" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M257 118 V126 M246 126 H268" stroke={INK} strokeWidth="3" />
      <rect x="166" y="120" width="34" height="6" rx="2" fill={SOFT} />
      <path d="M78 92 V140 H128 M84 140 V184 M124 140 V184" stroke={SOFT} strokeWidth="6" strokeLinecap="round" fill="none" />
      <Person x={108} y={112} />
      {at === 1 && <><path d="M120 82 H252" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" /><W x={186} y={74} size={10.5}>Eye level</W>
        <Arrow d="M122 104 H246" head="M238 98 L246 104 L238 110" stroke={INK} /><W x={186} y={98} size={10}>Arm's length</W></>}
      {(at === 0 || at === 2) && <><Clock x={40} y={44} r={18} hand={at === 2 ? 1.6 : 4.2} />{at === 0 ? <Ring x={40} y={44} r={25} still={still} /> : <><W x={40} y={82} size={10}>5 to 10 min</W><W x={40} y={96} size={10}>every hour</W></>}</>}
      {at === 0 && <W x={200} y={44} size={10.5}>Hours in one position</W>}
      {at === 3 && <><path d="M94 80 C94 62 122 62 122 80" fill="none" stroke={GOLD} strokeWidth="4" /><path d="M122 80 C124 92 118 96 112 96" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /><W x={108} y={52} size={10.5}>Headset</W>
        <rect x="28" y="30" width="22" height="36" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Cross x={39} y={48} s={12} /></>}
      {at === 4 && <><Box x={223} y={150} w={110} text="Adjustments" lit size={10} /><W x={200} y={46} size={10.5}>Talk to your employer</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function NeckLowPillow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["A neck locked in an awkward position", "A low, firm pillow; head level", "Not on your front; a firm mattress", "Wind down; a painkiller may help", "Same bedtime, regular waking time"];
  const awkward = at === 0;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Sleep" title="One low pillow, head level" label="Pillows and sleeping" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A side sleeper on one low, firm pillow with the head level with the body">
      <rect x="20" y="124" width="280" height="30" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
      {awkward ? <><rect x="30" y="104" width="76" height="20" rx="8" fill={TINT} stroke={INK} strokeWidth="2" /><rect x="34" y="86" width="70" height="18" rx="8" fill={TINT} stroke={INK} strokeWidth="2" /></>
        : <rect x="30" y="110" width="76" height="14" rx="6" fill={TINT} stroke={at === 1 ? GOLD : INK} strokeWidth={at === 1 ? 3 : 2} />}
      <path d={awkward ? "M92 96 C150 104 230 110 290 112" : "M92 104 H290"} stroke={INK} strokeWidth="22" strokeLinecap="round" fill="none" />
      <circle cx="68" cy={awkward ? 70 : 92} r="17" fill={INK} />
      {awkward && <Ring x={88} y={88} r={14} still={still} />}
      {at === 1 && <><path d="M30 94 H300" stroke={GOLD} strokeWidth="2.5" strokeDasharray="6 5" /><W x={68} y={176} size={10.5}>Low, firm pillow</W><W x={220} y={78} size={10.5}>Head level with body</W></>}
      {at === 2 && <><rect x="200" y="30" width="96" height="44" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M214 58 H282" stroke={INK} strokeWidth="9" strokeLinecap="round" /><circle cx="214" cy="50" r="7" fill={INK} /><Cross x={248} y={52} s={14} />
        <W x={248} y={90} size={10.5}>Not on your front</W><W x={160} y={176} size={10.5}>A firm mattress</W></>}
      {at === 3 && <><path d="M226 36 a20 20 0 1 0 22 26 a15 15 0 1 1 -22 -26 Z" fill={GOLD} /><rect x="258" y="44" width="30" height="22" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M273 44 V66" stroke={INK} strokeWidth="2" />
        <W x={238} y={90} size={10.5}>A bath, a book, the radio</W></>}
      {at === 4 && <><Clock x={222} y={48} r={16} hand={5.2} /><Clock x={276} y={48} r={16} hand={3.6} /><W x={222} y={80} size={10.5}>Bed</W><W x={276} y={80} size={10.5}>Up</W><W x={160} y={176} size={10.5}>No naps in the day</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function NeckJoltTimeline(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Sudden head movement strains the neck", "Often a delay of 24 to 48 hours", "Keep moving; no collar or brace", "Usually better within 2 to 3 months", "Stress can play a part; support helps"];
  const ticks = [{ x: 36, t: "Hours" }, { x: 112, t: "24 to 48 hours" }, { x: 196, t: "6 weeks" }, { x: 272, t: "2 to 3 months" }];
  const litTick = [0, 1, -1, 3, -1][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Whiplash" title="After the jolt, keep going" label="Whiplash" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person in a car seat whose head was jolted, and a timeline of recovery">
      <path d="M48 30 H64 L70 50 L78 116 H138 V128 H66 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M100 112 L94 68" stroke={INK} strokeWidth="12" strokeLinecap="round" /><circle cx="90" cy="50" r="13" fill={INK} />
      {at === 0 && <><Arrow d="M110 34 C122 42 124 56 116 66" head="M112 58 L116 67 L123 61" /><Arrow d="M70 66 C60 56 60 42 68 34" head="M60 38 L68 33 L70 42" /></>}
      <path d="M36 152 H272" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {ticks.map((tick, index) => <g key={tick.t}><circle cx={tick.x} cy={152} r={index === litTick || (at === 3 && index === 2) ? 9 : 6} fill={index === litTick || (at === 3 && index === 2) ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={tick.x} y={176} size={10}>{tick.t}</W></g>)}
      {at === 0 && <><W x={236} y={60} size={10.5}>Traffic accidents,</W><W x={236} y={78} size={10.5}>falls and sport</W></>}
      {at === 1 && ["Neck pain", "Stiffness", "Headaches"].map((label, index) => <Box key={label} x={236} y={40 + index * 32} w={110} text={label} />)}
      {at === 2 && <><ellipse cx="236" cy="48" rx="26" ry="10" fill={TINT} stroke={INK} strokeWidth="2.5" /><Cross x={236} y={48} s={11} /><Box x={236} y={98} w={124} text="Keep moving" lit /></>}
      {at === 3 && <><W x={236} y={60} size={10.5}>Biggest change</W><W x={236} y={78} size={10.5}>in the first weeks</W></>}
      {at === 4 && <><Box x={234} y={50} w={146} text="Talk to GP or physio" size={10} /><Box x={234} y={92} w={146} text="Severe? Urgent GP, 111" size={10} lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function NeckLoopBreak(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Around half have it come back", "Less movement, weaker, stiffer muscles", "Exercise works best after 3 months", "Sleep, stress, stillness: triggers", "Pain programmes help you cope"];
  const nodes = [{ x: 160, y: 32, t: "Less movement" }, { x: 264, y: 98, t: "Weaker, stiffer" }, { x: 160, y: 164, t: "More pain" }, { x: 56, y: 98, t: "Avoiding things" }];
  const broken = at === 2 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="When it lingers" title="Breaking the cycle of neck pain" label="Neck pain that keeps coming back" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A loop of less movement, weaker muscles, more pain and avoiding things, broken by exercise">
      <g opacity={broken ? 0.4 : 1}>
        <Arrow d="M216 36 Q252 44 260 80" head="M254 73 L260 81 L266 73" />
        <Arrow d="M260 116 Q254 152 216 162" head="M224 156 L215 162 L224 168" />
        <Arrow d="M104 162 Q66 152 60 116" head="M54 123 L60 115 L66 123" />
        <Arrow d="M60 80 Q68 44 104 34" head="M96 28 L105 34 L96 40" />
      </g>
      {nodes.map((node, index) => <Box key={node.t} x={node.x} y={node.y} w={100} text={node.t} size={10} lit={at === 1 && index < 2} dim={broken} />)}
      {at === 0 && <><W x={160} y={78} size={10}>About</W><W x={160} y={104} size={24} serif fill={INK}>50%</W><W x={160} y={124} size={10}>come back</W></>}
      {at === 2 && <><Box x={160} y={98} w={88} text="Exercise" lit /><W x={160} y={128} size={10}>Any type you like</W></>}
      {at === 3 && <><W x={160} y={78} size={10.5}>Less sleep</W><W x={160} y={96} size={10.5}>More stress</W><W x={160} y={114} size={10.5}>One position</W></>}
      {at === 4 && <><W x={160} y={76} size={10}>Pain management</W><Box x={160} y={96} w={92} text="programme" lit size={10} /><W x={160} y={126} size={10}>Keep in touch</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Spinal stenosis =======================================================================================

/** The lower spine, side on: vertebrae to the left, the nerve tunnel behind them, narrowed at the lower levels. */
const LowerSpine = ({ x, y, narrow = true, squeezed = false, roots = false }: { x: number; y: number; narrow?: boolean; squeezed?: boolean; roots?: boolean }) =>
  <g transform={`translate(${x} ${y})`}>
    <rect x="44" y="0" width="34" height="164" fill={TINT} />
    {Array.from({ length: 5 }, (_, index) => <g key={index}>
      <rect x="0" y={index * 34} width="44" height="26" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {index < 4 && <rect x="3" y={index * 34 + 27} width="38" height="6" rx="3" fill={SOFT} />}
      <rect x="78" y={index * 34 + 2} width="26" height="22" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    </g>)}
    {narrow && [3, 4].map(level => <g key={level}><path d={`M44 ${level * 34 - 4} q10 8 0 16`} fill={TEXT} /><path d={`M78 ${level * 34 - 4} q-10 8 0 16`} fill={TEXT} /></g>)}
    <path d="M61 0 V164" stroke={squeezed ? GOLD : INK} strokeWidth="5" strokeLinecap="round" />
    {roots && [0, 1, 2, 3].map(level => <path key={level} d={`M61 ${level * 34 + 30} C70 ${level * 34 + 36} 96 ${level * 34 + 32} 118 ${level * 34 + 38}`} fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />)}
  </g>;

function SsNarrowTunnel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Narrowing of the tunnels for nerves", "24 bones, discs and nerve roots", "Most often the lower back or neck", "Many people have no symptoms", "Found by talking and an examination"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Narrow tunnels, adaptable nerves" label="Spinal stenosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The lower spine side on, with the tunnel for the nerves narrower at the lower levels">
      <LowerSpine x={24} y={20} narrow={at !== 1} squeezed={at === 0} roots={at === 1} />
      {at === 0 && <><Box x={236} y={60} w={130} text="Wider tunnel" /><Box x={236} y={150} w={130} text="Narrowed" lit /><Arrow d="M166 150 H136" head="M143 144 L136 150 L143 156" /></>}
      {at === 1 && <><Box x={236} y={44} w={124} text="24 vertebrae" /><Box x={236} y={80} w={124} text="Discs cushion" /><Box x={236} y={116} w={124} text="Nerve roots" lit /></>}
      {at === 2 && <><circle cx="236" cy="40" r="13" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M222 172 V64 C222 56 250 56 250 64 V172" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <circle cx="236" cy="62" r="6" fill={GOLD} /><circle cx="236" cy="136" r="6" fill={GOLD} /><W x={262} y={66} size={10} anchor="start">Neck</W><W x={262} y={140} size={10} anchor="start">Lower</W><W x={262} y={154} size={10} anchor="start">back</W></>}
      {at === 3 && <><W x={236} y={84} size={11}>Often part of ageing,</W><W x={236} y={102} size={11}>often no problems</W><Box x={236} y={140} w={140} text="Nerves can adapt" lit /></>}
      {at === 4 && ["Your symptoms", "An examination", "Scans, sometimes"].map((label, index) => <Box key={label} x={236} y={52 + index * 38} w={130} text={label} lit={index < 2} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SsStandLean(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Leg pain worse walking, eased sitting", "In the neck, it affects the arms", "One of the causes of sciatica", "Symptoms vary; changes are slow", "Both legs, bladder changes: 999 or A&E"];
  const legsAche = at === 0 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Worse walking, better leaning forward" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="One person standing with aching legs, and one leaning forward on a trolley with the ache eased">
      <g opacity={at === 3 ? 0.35 : 1}>
        <Figure x={88} y={110} legs={legsAche ? GOLD : INK} arms={at === 1 ? GOLD : INK} />
        {at === 2 && <path d="M94 112 L100 164" stroke={GOLD} strokeWidth="4" strokeLinecap="round" strokeDasharray="4 4" />}
        <W x={88} y={182} size={10.5}>{["Standing, walking", "Neck: the arms", "Bottom, back of leg", "", "Both legs"][at]}</W>
      </g>
      <g opacity={at === 0 ? 1 : 0.35}>
        <Figure x={208} y={110} lean={34} hand={[262, 96]} />
        <path d="M258 96 H290 L284 138 H262 Z M262 138 V160 M284 138 V160" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <circle cx="264" cy="164" r="4" fill={INK} /><circle cx="284" cy="164" r="4" fill={INK} />
        <W x={232} y={182} size={10.5}>Leaning forward</W>
      </g>
      {at === 3 && <Box x={160} y={22} w={200} text="Symptoms can vary" lit />}
      {at === 4 && <Box x={160} y={22} w={200} text="Call 999 or go to A&E" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** A short stack of vertebrae centred on x: `thin` discs and `spurs` for an older spine. */
const MiniSpine = ({ x, y, thin = false, spurs = false, lit = false }: { x: number; y: number; thin?: boolean; spurs?: boolean; lit?: boolean }) =>
  <g>{Array.from({ length: 4 }, (_, index) => { const top = y + index * (thin ? 30 : 34); return <g key={index}>
    <rect x={x - 22} y={top} width="44" height="24" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    {index < 3 && <rect x={x - 19} y={top + 25} width="38" height={thin ? 4 : 8} rx="2" fill={lit ? GOLD : SOFT} />}
    {spurs && index < 3 && <path d={`M${x + 22} ${top + 20} l7 4 l-7 3 Z M${x - 22} ${top + 20} l-7 4 l7 3 Z`} fill={lit ? GOLD : TEXT} />}
  </g>; })}</g>;

function SsYearsDiscs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Ageing can narrow the tunnels", "Thinner discs, small bony edges", "Injury, arthritis, or born narrow", "Narrowing is not the same as damage", "Stay active, pace, stop smoking"];
  const right = [[], [], ["Injury", "Rheumatoid", "Bone disease", "Born narrow"], [], ["Stay active", "Pace yourself", "Healthy weight", "Stop smoking"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Ageing, not damage" label="Why it happens" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A younger spine with thick discs beside an older spine with thinner discs and small bony edges">
      <MiniSpine x={62} y={36} />
      <MiniSpine x={160} y={36} thin spurs lit={at === 1} />
      <Arrow d="M92 26 H130" head="M123 20 L130 26 L123 32" stroke={at === 0 ? GOLD : LINE} />
      <W x={62} y={184} size={10.5}>Younger</W><W x={160} y={184} size={10.5}>Older</W>
      {at === 0 && <><W x={262} y={84} size={10.5}>Less space</W><W x={262} y={100} size={10.5}>around the</W><W x={262} y={116} size={10.5}>nerves</W></>}
      {at === 1 && <><W x={262} y={84} size={10.5}>Still strong,</W><W x={262} y={100} size={10.5}>usually</W><W x={262} y={116} size={10.5}>stiffer</W></>}
      {right.map((label, index) => <Box key={label} x={262} y={48 + index * 34} w={102} text={label} size={10} lit={at === 4 && index === 0} />)}
      {at === 3 && <><path d="M228 116 A34 34 0 0 1 296 116" fill="none" stroke={LINE} strokeWidth="10" strokeLinecap="round" /><path d="M262 116 L284 92" stroke={INK} strokeWidth="4" strokeLinecap="round" /><circle cx="262" cy="116" r="5" fill={INK} />
        <W x={262} y={64} size={10.5}>All pain is real</W><W x={262} y={140} size={10}>Stress, sleep, mood</W><W x={262} y={154} size={10}>turn up the volume</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SsHorseTail(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Rare, but early treatment matters", "Any of these: call 999 or go to A&E", "Do not drive: get a lift or call 999", "In Scotland: NHS inform says phone 111", "Worse balance: GP urgently, or 111"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Urgent signs" title="The rare signs that mean 999" label="Urgent help" credit={urgentCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The bundle of nerves at the base of the spine, called the cauda equina, and the signs that need urgent help">
      <rect x="56" y="18" width="48" height="20" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="56" y="44" width="48" height="20" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {Array.from({ length: 7 }, (_, index) => <path key={index} d={`M80 30 V70 C80 100 ${50 + index * 10} 120 ${50 + index * 10} 166`} fill="none" stroke={at === 0 ? GOLD : INK} strokeWidth="2.5" strokeLinecap="round" />)}
      <W x={80} y={186} size={10.5}>Cauda equina</W>
      {at === 0 && <><Box x={236} y={60} w={148} text="Rare, but serious" /><Box x={236} y={98} w={148} text="Early treatment helps" lit /><W x={236} y={136} size={10}>The nerves to the legs,</W><W x={236} y={150} size={10}>bladder and bowel</W></>}
      {at === 1 && <><Box x={234} y={32} w={150} text="999 or A&E" lit /><List x={164} y={66} lines={["Both legs: pain, numbness", "Numb genitals or anus", "Bladder or bowel changes", "Changes during sex"]} gap={26} /></>}
      {at === 2 && <><Car x={200} y={44} /><Cross x={200} y={40} s={16} /><W x={272} y={48} size={10.5}>Do not drive</W><Box x={234} y={92} w={150} text="Someone drives you" /><Box x={234} y={126} w={150} text="Or call 999" lit /><W x={234} y={158} size={10}>Bring your medicines</W></>}
      {at === 3 && <><Box x={234} y={32} w={150} text="Scotland: phone 111" lit /><List x={164} y={66} lines={["Numb between the thighs", "Numb round back passage", "Harder to pass urine", "Specialist spinal team"]} gap={26} /></>}
      {at === 4 && <><Box x={234} y={32} w={150} text="Urgent GP or 111" lit /><List x={164} y={66} lines={["Balance or walking worse", "New arm or leg weakness", "Clumsy hands", "Hot, shivery, unwell"]} gap={26} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SsKneeRolls(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Calmer nerves, not a wider tunnel", "Check with a physio first", "Knee rolls and knee hugs, lying down", "Keep pain within 0 to 5 out of 10", "Physiotherapy can help"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exercise" title="Calmer nerves, stronger body" label="Exercise and physiotherapy" credit={moveCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person lying on a bed with knees bent, doing gentle knee rolls">
      <rect x="20" y="128" width="280" height="24" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="28" y="112" width="46" height="16" rx="6" fill={TINT} stroke={INK} strokeWidth="2" />
      <circle cx="52" cy="102" r="12" fill={INK} />
      <path d="M66 116 H150" stroke={INK} strokeWidth="12" strokeLinecap="round" />
      {at === 2 && <path d="M150 116 L196 92 L226 120" fill="none" stroke={GOLD} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6" />}
      <path d="M150 116 L184 80 L218 120" fill="none" stroke={INK} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      {at === 0 && <><Box x={96} y={40} w={136} text="Calmer nerves" lit /><Box x={240} y={40} w={136} text="Tunnel unchanged" /></>}
      {at === 1 && <Box x={160} y={40} w={180} text="Ask a physio first" lit />}
      {at === 2 && <><Box x={96} y={40} w={120} text="Knee rolls" lit /><Box x={240} y={40} w={120} text="Knee hug" /></>}
      {at === 3 && <PainScale x={39} y={24} upTo={5} />}
      {at === 4 && <><Box x={96} y={40} w={136} text="Physiotherapy" lit /><Box x={240} y={40} w={136} text="Home exercises" /></>}
      {at === 3 && <W x={160} y={176} size={10.5}>No worse the morning after</W>}
      {at === 4 && <W x={160} y={176} size={10.5}>Free on the NHS; there may be a wait</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SsMedicineShelf(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Painkillers can help you keep moving", "Short course: a week to 10 days", "Nerve pain medicines take weeks", "NICE: not gabapentinoids for sciatica", "Review long-term medicines yearly"];
  const rows = ["Ibuprofen", "Paracetamol, with another", "Nerve pain medicines", "Opioids, for a short time"];
  const lit = [[], [0, 1], [2], [2], [3]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Short courses, careful reviews" label="Painkillers and nerve pain medicines" credit={medsCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A shelf of pain medicines: ibuprofen, paracetamol, nerve pain medicines and opioids">
      {rows.map((row, index) => <Box key={row} x={92} y={40 + index * 38} w={160} text={row} size={10} lit={lit.includes(index)} dim={lit.length > 0 && !lit.includes(index)} />)}
      {at === 3 && <Cross x={160} y={116} s={9} />}
      {at === 0 && <><Pill x={250} y={52} /><Figure x={250} y={130} lean={8} /></>}
      {at === 1 && <>{Array.from({ length: 10 }, (_, day) => <rect key={day} x={196 + (day % 5) * 22} y={60 + Math.floor(day / 5) * 24} width="18" height="18" rx="4" fill={INK} />)}<W x={250} y={130} size={10.5}>Not helped by then?</W><W x={250} y={146} size={10.5}>Unlikely to</W></>}
      {at === 2 && <><path d="M236 50 a20 20 0 1 0 22 26 a15 15 0 1 1 -22 -26 Z" fill={GOLD} /><W x={250} y={108} size={10.5}>Amitriptyline:</W><W x={250} y={124} size={10.5}>evening, 6 weeks</W></>}
      {at === 3 && <><Box x={252} y={62} w={110} text="Talk first" lit /><W x={252} y={100} size={10}>Do not stop</W><W x={252} y={114} size={10}>gabapentin</W><W x={252} y={128} size={10}>suddenly</W></>}
      {at === 4 && <><Cal x={250} y={74} w={52} lit /><W x={250} y={124} size={10.5}>At least once</W><W x={250} y={140} size={10.5}>a year</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SsPathStop(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Part of a plan, not on their own", "What NICE says about epidurals", "Less inflammation, less pain", "No more than 3 a year in one place", "Most people have no side effects"];
  const stops = [{ x: 40, t: "Exercise" }, { x: 120, t: "Medicines" }, { x: 200, t: "Injection" }, { x: 280, t: "Surgery" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Injections" title="Where an injection fits" label="Steroid injections" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A treatment path from exercise and medicines to an injection, with surgery further on">
      <path d="M40 78 H280" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {stops.map((stop, index) => <g key={stop.t} opacity={index === 3 ? 0.4 : 1}><circle cx={stop.x} cy={78} r={index === 2 ? 11 : 8} fill={index < 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={stop.x} y={106} size={10.5}>{stop.t}</W></g>)}
      <g transform="translate(200 42) rotate(-30)"><rect x="-16" y="-5" width="26" height="10" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M10 0 H22 M-16 0 H-22" stroke={INK} strokeWidth="2.5" /></g>
      {at === 0 && <><Ring x={200} y={78} r={17} still={still} /><Box x={160} y={152} w={250} text="If other treatments have not helped" size={10} /></>}
      {at === 1 && <><Box x={160} y={136} w={270} text="Consider: acute, severe sciatica" size={10} /><Box x={160} y={170} w={270} text="Not: claudication, central stenosis" size={10} lit /></>}
      {at === 2 && <><Box x={160} y={136} w={270} text="Some: within hours, for about a week" size={10} /><Box x={160} y={170} w={270} text="Others: a week, then 2 months or more" size={10} lit /></>}
      {at === 3 && <><Box x={160} y={136} w={270} text="Blood pressure and sugar checked" size={10} /><Box x={90} y={170} w={128} text="A lift home" size={10} /><Box x={232} y={170} w={150} text="Up to 3 a year" size={10} lit /></>}
      {at === 4 && <><W x={160} y={140} size={10.5}>A flare in 24 hours usually settles</W><Box x={160} y={170} w={260} text="Hot and more painful: see a doctor" size={10} lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SsRoomNerves(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["When other treatments have been tried", "Decompression frees squeezed nerves", "Asleep, for about 2 to 4 hours", "Back to work around 4 to 6 weeks", "New leg weakness? Call hospital or 111"];
  const open = at >= 1;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Surgery" title="Making room for the nerves" label="Surgery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A vertebra seen from above, with part of the bony arch removed to give the nerves more room">
      <ellipse cx="92" cy="58" rx="46" ry="32" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M62 84 L54 124 M122 84 L130 124" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <path d="M54 124 C70 146 114 146 130 124" fill="none" stroke={open ? GOLD : INK} strokeWidth="6" strokeLinecap="round" strokeDasharray={open ? "6 6" : undefined} />
      {!open && <path d="M92 142 V164" stroke={INK} strokeWidth="6" strokeLinecap="round" />}
      <ellipse cx="92" cy="110" rx={open ? 22 : 11} ry={open ? 18 : 12} fill={TINT} stroke={INK} strokeWidth="1.5" />
      <circle cx="92" cy="110" r="6" fill={open ? INK : GOLD} />
      <W x={92} y={184} size={10.5}>{open ? "More room" : "Squeezed nerves"}</W>
      {at === 0 && ["Medicines", "Physiotherapy", "Then, maybe"].map((label, index) => <Box key={label} x={246} y={52 + index * 36} w={118} text={label} lit={index < 2} dim={index === 2} />)}
      {at === 1 && <><Box x={246} y={60} w={128} text="Decompression" lit /><W x={246} y={96} size={10.5}>Small pieces of</W><W x={246} y={112} size={10.5}>bone removed</W></>}
      {at === 2 && <><Clock x={246} y={60} r={22} hand={2.2} /><W x={246} y={102} size={10.5}>2 to 4 hours</W><Box x={246} y={136} w={124} text="Home: 2 to 5 days" size={10} /></>}
      {at === 3 && <>{Array.from({ length: 12 }, (_, week) => <rect key={week} x={186 + week * 10} y={70} width="8" height="26" rx="2" fill={week < 6 ? INK : week < 12 ? SOFT : WHITE} />)}
        <W x={226} y={60} size={10}>Work: 4 to 6</W><W x={300} y={116} size={10} anchor="end">Up to 12 weeks</W><W x={300} y={132} size={10} anchor="end">for everything</W></>}
      {at === 4 && <><Box x={244} y={44} w={132} text="Hospital or 111" lit /><List x={184} y={80} lines={["New leg weakness", "Bladder or bowel", "Hot, red stitches"]} gap={24} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SsBenchRoute(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Safe to keep walking short distances", "Rest on a seat or lean on a wall", "Add a little each day or week", "A goal: 10 minutes, 3 times a week", "Over 65: 150 minutes a week"];
  const restLit = at === 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Walking" title="Short walks, planned rests" label="Walking further" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A walking route with a bench and a wall to rest at along the way">
      <path d="M24 112 C70 112 90 86 140 86 S220 66 296 56" fill="none" stroke={LINE} strokeWidth="12" strokeLinecap="round" />
      <path d="M24 112 C70 112 90 86 140 86 S220 66 296 56" fill="none" stroke={WHITE} strokeWidth="2" strokeDasharray="6 8" />
      <g opacity={restLit || at === 0 ? 1 : 0.45}><path d="M96 66 H130 M100 66 V80 M126 66 V80 M98 56 H128" stroke={restLit ? INK : TEXT} strokeWidth="4" strokeLinecap="round" /><W x={113} y={46} size={10}>Sit</W></g>
      <g opacity={restLit || at === 0 ? 1 : 0.45}>{[0, 1, 2].map(row => <rect key={row} x={214 + (row % 2) * 8} y={30 + row * 9} width="32" height="8" fill={restLit ? INK : SOFT} stroke={WHITE} strokeWidth="1" />)}<W x={234} y={24} size={10}>Lean</W></g>
      <circle cx="40" cy="112" r="7" fill={INK} />
      {at === 0 && <Box x={160} y={150} w={170} text="Short walks, often" lit />}
      {at === 1 && <Box x={160} y={150} w={200} text="Ask about a walking aid" />}
      {at === 2 && <>{[0, 1, 2, 3].map(index => <rect key={index} x={124 + index * 20} y={176 - (12 + index * 8)} width="14" height={12 + index * 8} rx="3" fill={INK} />)}<W x={160} y={128} size={10.5}>A little more, as you feel able</W></>}
      {at === 3 && <><Cal x={84} y={154} w={36} lit /><W x={196} y={158} size={10.5}>10 minutes, 3 times a week</W></>}
      {at === 4 && <><Clock x={76} y={152} r={18} hand={3.1} /><W x={160} y={158} size={10.5}>150 minutes</W><path d="M216 160 q8 -6 16 0 t16 0 t16 0 M216 170 q8 -6 16 0 t16 0 t16 0" fill="none" stroke={INK} strokeWidth="2.5" /><W x={240} y={146} size={10}>Pool class</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SsLeanChair(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Sitting or leaning forward eases it", "Change position often", "Edge forward, then push up to stand", "Back supported, feet on the floor", "Warmth for 15 to 20 minutes"];
  const op = (on: boolean) => (on ? 1 : 0.35);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Positions" title="Lean, sit, move often" label="Positions that ease it" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person leaning forward on a counter, a chair with arms and a reminder to move">
      <g opacity={op(at === 0 || at === 1)}>
        <Figure x={42} y={110} lean={30} hand={[86, 90]} />
        <path d="M80 90 H110 M100 90 V164" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <W x={66} y={182} size={10.5}>Lean forward</W>
      </g>
      <g opacity={op(at === 1 || at === 2 || at === 3)}>
        <path d="M140 78 V142 M140 120 H200 V164 M140 142 V164 M196 104 H208" stroke={SOFT} strokeWidth="6" strokeLinecap="round" fill="none" />
        <Figure x={at === 2 ? 168 : 150} y={116} lean={at === 2 ? 26 : 0} sit />
        {at === 2 && <Arrow d="M216 124 V88" head="M210 96 L216 88 L222 96" />}
        {at === 3 && <path d="M178 164 H210" stroke={GOLD} strokeWidth="5" strokeLinecap="round" />}
        <W x={172} y={182} size={10.5}>{at === 2 ? "Edge, brace, push" : at === 3 ? "Feet down" : "A chair"}</W>
      </g>
      <g opacity={op(at === 1 || at === 3 || at === 4)}>
        {at === 4 ? <Bottle x={270} y={120} lit /> : <><rect x="256" y="92" width="28" height="48" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Clock x={270} y={114} r={10} hand={1} /></>}
        <W x={270} y={182} size={10.5}>{at === 4 ? "Wrapped heat" : "Hourly timer"}</W>
      </g>
      {at === 1 && <Arrow d="M96 40 C140 26 220 26 262 40" head="M254 34 L262 40 L254 46" />}
      {at === 1 && <W x={178} y={22} size={10.5}>Move, change, repeat</W>}
      {at === 4 && <W x={270} y={78} size={10.5}>15 to 20 min</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SsWeekStrip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Active, paced, a healthy weight", "If overweight, less strain on the back", "BMI is only a rough guide", "Strength and balance, 2 days a week", "Smoking weakens disc tissue"];
  const icons = [{ x: 46, t: "Active" }, { x: 122, t: "Pacing" }, { x: 198, t: "Weight" }, { x: 274, t: "No smoking" }];
  const lit = [[0, 1, 2, 3], [2], [2], [0], [3]][at];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Everyday health" title="Small changes, steadier back" label="Weight and activity" credit={ideaCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four parts of looking after your back: staying active, pacing, weight and not smoking">
      <g opacity={lit.includes(0) ? 1 : 0.35}><Figure x={46} y={84} lean={10} scale={0.62} /></g>
      <g opacity={lit.includes(1) ? 1 : 0.35}><path d="M102 98 H114 V84 H128 V70 H142" fill="none" stroke={INK} strokeWidth="4" strokeLinejoin="round" /></g>
      <g opacity={lit.includes(2) ? 1 : 0.35}><ellipse cx="198" cy="82" rx="24" ry="12" fill="none" stroke={INK} strokeWidth="4" />{[-12, -4, 4, 12].map(dx => <path key={dx} d={`M${198 + dx} 92 v5`} stroke={INK} strokeWidth="2" />)}</g>
      <g opacity={lit.includes(3) ? 1 : 0.35}><rect x="252" y="77" width="34" height="10" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="286" y="77" width="9" height="10" rx="2" fill={GOLD} /><Cross x={273} y={82} s={12} /></g>
      {icons.map((icon, index) => <W key={icon.t} x={icon.x} y={130} size={10.5} fill={lit.includes(index) ? INK : TEXT}>{icon.t}</W>)}
      {at === 1 && <W x={160} y={162} size={10.5}>No special diet has been shown to help</W>}
      {at === 2 && <Box x={160} y={160} w={210} text="Speak to your doctor first" lit />}
      {at === 3 && days.map((day, index) => <g key={index}><rect x={42 + index * 34} y={146} width="28" height="28" rx="6" fill={index === 1 || index === 4 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={56 + index * 34} y={164} size={10.5} fill={index === 1 || index === 4 ? WHITE : TEXT}>{day}</W></g>)}
      {at === 4 && <W x={160} y={162} size={10.5}>Nicotine weakens the discs</W>}
      {at === 0 && <W x={160} y={162} size={10.5}>Plus managing stress</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SsFourSupports(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["All pain is real; mind matters too", "Pain and mood can feed each other", "Pacing: a break before it's too much", "A regular sleep routine; keep in touch", "Talking therapies and pain programmes"];
  const petals = [{ x: 72, y: 44, t: "Pacing" }, { x: 248, y: 44, t: "Sleep routine" }, { x: 72, y: 132, t: "Friends and family" }, { x: 248, y: 132, t: "Talking therapies" }];
  const lit = [[], [], [0], [1, 2], [3]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Wellbeing" title="Looking after yourself with long-term pain" label="Living with long-term pain" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person at the centre of four supports: pacing, sleep, friends and family, and talking therapies">
      <Person x={160} y={100} />
      {at === 0 && <Ring x={160} y={84} r={36} still={still} />}
      {at !== 1 && petals.map((petal, index) => <Box key={petal.t} x={petal.x} y={petal.y} w={124} text={petal.t} size={10} lit={lit.includes(index)} dim={lit.length > 0 && !lit.includes(index)} />)}
      {at === 1 && <><Box x={62} y={86} w={84} text="Pain" lit /><Box x={258} y={86} w={84} text="Mood" lit />
        <Arrow d="M104 70 C130 40 190 40 216 70" head="M208 66 L216 71 L210 78" /><Arrow d="M216 104 C190 134 130 134 104 104" head="M112 108 L104 103 L110 96" />
        <W x={160} y={156} size={10.5}>Be kind to yourself</W></>}
      {at === 0 && <W x={160} y={176} size={10.5}>A long-term condition</W>}
      {at === 2 && <W x={160} y={176} size={10.5}>Not too little, not too much</W>}
      {at === 4 && <W x={160} y={176} size={10.5}>Speak to your GP</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function SpinePieceView({ piece, ...props }: { piece: SpinePiece } & PieceProps) {
  switch (piece) {
    case "neck-seven-bones": return <NeckSevenBones {...props} />;
    case "neck-four-triggers": return <NeckTriggers {...props} />;
    case "neck-arm-tingle": return <NeckArmTingle {...props} />;
    case "neck-three-tiers": return <NeckThreeTiers {...props} />;
    case "neck-rest-ruler": return <NeckRestRuler {...props} />;
    case "neck-tilt-turn-nod": return <NeckTiltTurnNod {...props} />;
    case "neck-peas-bottle": return <NeckPeasBottle {...props} />;
    case "neck-physio-visits": return <NeckPhysioVisits {...props} />;
    case "neck-screen-level": return <NeckScreenLevel {...props} />;
    case "neck-low-pillow": return <NeckLowPillow {...props} />;
    case "neck-jolt-timeline": return <NeckJoltTimeline {...props} />;
    case "neck-loop-break": return <NeckLoopBreak {...props} />;
    case "ss-narrow-tunnel": return <SsNarrowTunnel {...props} />;
    case "ss-stand-lean": return <SsStandLean {...props} />;
    case "ss-years-discs": return <SsYearsDiscs {...props} />;
    case "ss-horse-tail": return <SsHorseTail {...props} />;
    case "ss-knee-rolls": return <SsKneeRolls {...props} />;
    case "ss-medicine-shelf": return <SsMedicineShelf {...props} />;
    case "ss-path-stop": return <SsPathStop {...props} />;
    case "ss-room-nerves": return <SsRoomNerves {...props} />;
    case "ss-bench-route": return <SsBenchRoute {...props} />;
    case "ss-lean-chair": return <SsLeanChair {...props} />;
    case "ss-week-strip": return <SsWeekStrip {...props} />;
    case "ss-four-supports": return <SsFourSupports {...props} />;
    default: return null;
  }
}
