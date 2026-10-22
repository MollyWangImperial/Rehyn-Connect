import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { BEYOND_PIECES, type BeyondPiece } from "@/content/beyond-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Brain fog, Fear of recurrence, Fertility after cancer and Late effects pages' own pieces (content/beyond-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Cancer & recovery pieces. Each is steered by the card's sections;
// pictures show ideas, calmly, and never anyone's own body, scans or results.

export const isBeyondPiece = (piece: NewsPiece): piece is BeyondPiece => (BEYOND_PIECES as readonly string[]).includes(piece);

const help = "Illustration: Rehyn. In danger now? Call 999.";

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 204, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Cloud = ({ x, y, s, opacity = 1, fill = SOFT }: { x: number; y: number; s: number; opacity?: number; fill?: string }) =>
  <g opacity={opacity} fill={fill}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 11} y={y - 18} width="22" height="36" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 11} r="2.2" fill={lit ? WHITE : INK} /></g>;
const Cup = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 12} y={y - 13} width="24" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 12} ${y - 7} h5 a6 6 0 0 1 0 12 h-5`} fill="none" stroke={INK} strokeWidth="2.5" /></g>;
const Notepad = ({ x, y, w = 26, h = 34, lit = false }: { x: number; y: number; w?: number; h?: number; lit?: boolean }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="3" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
    {[0.28, 0.5, 0.72].map(f => <path key={f} d={`M${x - w / 2 + 6} ${y - h / 2 + h * f} H${x + w / 2 - 6}`} stroke={lit ? WHITE : SOFT} strokeWidth="2" strokeLinecap="round" />)}</g>;
/** A gentle wavy stream between y and y + depth. */
const Stream = ({ y, depth }: { y: number; depth: number }) =>
  <path d={`M0 ${y} C60 ${y - 10}, 110 ${y + 10}, 170 ${y} S270 ${y - 10}, 320 ${y} V${y + depth} C260 ${y + depth + 10}, 210 ${y + depth - 10}, 150 ${y + depth} S50 ${y + depth + 10}, 0 ${y + depth} Z`} fill={SOFT} opacity=".35" />;

// ==== Brain fog after cancer ================================================================================

function FogHead(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Changes in memory and thinking", "Not only after chemotherapy", "Hard to focus, find words, juggle", "Up to 75 in 100 during treatment", "Usually mild; tell your team"];
  const sets = [["Memory", "Attention", "Language", "Learning"], ["Chemotherapy", "Other treatments", "The cancer itself"], ["Remembering", "Focusing", "Finding words", "One thing at once"], [], ["Tell your team", "Keep a record"]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When memory and focus go foggy" label="What brain fog is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head with a soft cloud inside it, and the kinds of thinking brain fog can touch">
      <circle cx="86" cy="96" r="60" fill={WHITE} stroke={INK} strokeWidth="3" />
      <Cloud x={86} y={100} s={34} opacity={at === 4 ? 0.3 : 0.85} />
      {at === 4 && <Sun x={112} y={66} r={9} />}
      {at === 3 ? <g>
        <W x={232} y={56} size={12}>Up to 75 in 100</W>
        {Array.from({ length: 4 }, (_, index) => <Person key={index} x={181 + index * 34} y={130} scale={0.9} fill={index < 3 ? INK : SOFT} />)}
        <W x={232} y={160} size={10}>during treatment</W>
      </g> : <Tags x={174} y={30} labels={sets[at]} lit={index => at === 2 || (at === 1 && index === 2) || (at === 4 && index === 0)} width={134} gap={34} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FogStreams(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Likely a mix of factors", "Chemo, hormone therapy, radiotherapy", "Stress, tiredness and poor sleep add", "Older age, lifestyle, genetics", "Benefits usually outweigh the risk"];
  const sets = [["Treatment", "The cancer", "Side effects", "Mood"], ["Chemotherapy", "Hormone therapy", "Radiotherapy", "Steroids"], ["The cancer", "Stress", "Tiredness", "Poor sleep"], ["Older age", "Lifestyle", "Genetics", "Anxiety"], ["Treatment", "The cancer", "Side effects", "Mood"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The causes" title="A mix of causes, not one" label="What can cause it" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Several streams, each a possible cause, flowing into one cloud">
      {[0, 1, 2, 3].map(index => <path key={index} d={`M140 ${43 + index * 34} C180 ${43 + index * 34}, 190 98, 226 98`} stroke={at === 4 ? LINE : GOLD} strokeWidth="2.5" fill="none" />)}
      <Tags x={16} y={30} labels={sets[at]} lit={() => at > 0 && at < 4} width={124} gap={34} />
      <Cloud x={264} y={98} s={30} opacity={at === 4 ? 0.4 : 0.9} />
      {at === 4 && <Box x={248} y={154} w={112} text="Ask your team" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FogYear(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Most improve within a year", "For some, it can last years", "Comes and goes; worse when tired", "A diary shows how it changes"];
  const fades = [[0.9, 0.6, 0.3, 0.12, 0.08], [0.9, 0.75, 0.62, 0.52, 0.45], [0.85, 0.25, 0.75, 0.2, 0.7]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="How long" title="For most, the fog lifts within a year" label="How long it lasts" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from the end of treatment, with the fog thinning by one year">
      {at < 3 && fades[at].map((opacity, index) => <Cloud key={index} x={50 + index * 56} y={86} s={22} opacity={opacity} />)}
      {at === 3 && <g>
        <W x={160} y={36} size={10.5}>My diary</W>
        {Array.from({ length: 7 }, (_, index) => <g key={index}><rect x={34 + index * 38} y="48" width="32" height="56" rx="5" fill={WHITE} stroke={INK} strokeWidth="2" />
          <rect x={40 + index * 38} y={98 - [40, 34, 36, 26, 22, 24, 16][index]} width="20" height={[40, 34, 36, 26, 22, 24, 16][index]} rx="3" fill={SOFT} /></g>)}
      </g>}
      <path d="M24 128 H296" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {[40, 170, 280].map(x => <path key={x} d={`M${x} 122 V134`} stroke={INK} strokeWidth="3" />)}
      <W x={24} y={152} size={10} anchor="start">Treatment ends</W><W x={170} y={152} size={10}>1 year</W><W x={296} y={152} size={10} anchor="end">Years later</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FogPuffs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tiredness and poor sleep add to it", "Anaemia or thyroid: a blood test", "Adults need 7 to 9 hours' sleep", "Stress and some medicines add too", "High temperature? Call your team now"];
  const puffs: [string, number, number, number][] = [["Tiredness", 80, 62, 84], ["Sleep", 160, 62, 64], ["Menopause", 240, 62, 88], ["Anaemia", 50, 110, 76], ["Thyroid", 126, 110, 66], ["Stress", 196, 110, 62], ["Medicines", 268, 110, 80]];
  const lit = [[0, 1], [3, 4], [1, 2], [5, 6], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="What adds to it" title="The extras that thicken the fog" label="Other things that add to it" credit="Illustration: Rehyn. Unwell during chemotherapy? Call your team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A cloud made of smaller puffs: tiredness, sleep, menopause, anaemia, thyroid, stress and medicines">
      {at < 4 ? <g>
        <Cloud x={160} y={98} s={76} opacity={0.25} />
        {puffs.map(([label, x, y, w], index) => <g key={label}><rect x={x - w / 2} y={y - 15} width={w} height="30" rx="15" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <W x={x} y={y + 4} size={10} fill={lit.includes(index) ? WHITE : TEXT}>{label}</W></g>)}
      </g> : <g>
        <rect x="82" y="38" width="16" height="74" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="86" y="62" width="8" height="50" fill={GOLD} /><circle cx="90" cy="122" r="14" fill={GOLD} stroke={INK} strokeWidth="2.5" />
        <W x={90} y={160} size={10.5}>High temperature</W>
        <Arrow d="M130 92 H186" head="M178 85 L187 92 L178 99" />
        <Phone x={226} y={92} lit />
        <W x={226} y={136} size={10.5}>24-hour number</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FogTiles(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["A diary shows your best times", "Write it down: lists and notes", "One thing at a time", "Plan ahead for busy days"];
  const tiles: [string, number, number][] = [["Diary", 88, 58], ["Lists", 232, 58], ["One thing", 88, 138], ["Plan ahead", 232, 138]];
  const icon = (index: number, x: number, y: number, on: boolean) => {
    const ink = on ? WHITE : INK;
    return [
      <g key="diary"><rect x={x - 12} y={y - 16} width="24" height="32" rx="3" fill="none" stroke={ink} strokeWidth="2.5" /><path d={`M${x - 6} ${y - 16} V${y + 16}`} stroke={ink} strokeWidth="2" /></g>,
      <g key="list">{[-10, 0, 10].map(dy => <g key={dy}><rect x={x - 14} y={y + dy - 4} width="8" height="8" rx="2" fill="none" stroke={ink} strokeWidth="2" /><path d={`M${x - 2} ${y + dy} H${x + 14}`} stroke={ink} strokeWidth="2.5" strokeLinecap="round" /></g>)}</g>,
      <g key="one"><circle cx={x} cy={y} r="15" fill="none" stroke={ink} strokeWidth="2.5" /><path d={`M${x - 3} ${y - 7} L${x + 1} ${y - 10} V${y + 9}`} stroke={ink} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>,
      <g key="plan"><rect x={x - 15} y={y - 14} width="30" height="28" rx="3" fill="none" stroke={ink} strokeWidth="2.5" /><path d={`M${x - 15} ${y - 6} H${x + 15} M${x - 5} ${y - 6} V${y + 14} M${x + 5} ${y - 6} V${y + 14} M${x - 15} ${y + 4} H${x + 15}`} stroke={ink} strokeWidth="1.5" /></g>,
    ][index];
  };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Everyday tricks" title="Lists, diaries and one task at a time" label="Everyday strategies" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four everyday helpers: a diary, lists, one thing at a time and planning ahead">
      {tiles.map(([label, x, y], index) => <g key={label} opacity={index === at ? 1 : 0.55}>
        <rect x={x - 66} y={y - 32} width="132" height="64" rx="12" fill={index === at ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, x - 38, y, index === at)}
        <W x={x + 16} y={y + 4} size={11} fill={index === at ? WHITE : TEXT}>{label}</W>
      </g>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FogDay(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Moving can help you feel more alert", "Build up slowly to 150 minutes", "7 to 9 hours, at regular times", "Breaks and relaxing help memory", "Eat well and keep hydrated"];
  const lit = [0, 0, 3, 1, 2][at];
  const xs = [52, 130, 208, 280];
  const top = ["", "Up to 150 minutes a week", "7 to 9 hours a night", "", ""][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Activity and rest" title="Move, sleep and rest for a clearer head" label="Activity, sleep and rest" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day with a walk, a break, a meal and a steady bedtime">
      <path d="M24 140 H296" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {xs.map((x, index) => <g key={x} opacity={index === lit ? 1 : 0.45}>
        {index === lit && <circle cx={x} cy="100" r="30" fill={WHITE} stroke={GOLD} strokeWidth="3" />}
        {index === 0 && <Person x={x} y={118} />}
        {index === 1 && <Cup x={x} y={102} />}
        {index === 2 && <g><ellipse cx={x - 6} cy="110" rx="18" ry="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x + 10} y="84" width="11" height="26" rx="2" fill={TINT} stroke={INK} strokeWidth="2" /></g>}
        {index === 3 && <Moon x={x} y={100} r={14} />}
        <circle cx={x} cy="140" r="5" fill={index === lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x} y={164} size={10.5}>{["Move", "Rest", "Eat", "Sleep"][index]}</W>
      </g>)}
      {top && <W x={160} y={40} size={11}>{top}</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FogPuzzle(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Puzzles, hobbies, learning new things", "Practising attention and memory", "Training is being tested in research", "Make time for what you enjoy"];
  const sets = [["Crosswords", "Sudoku", "A new hobby"], ["Attention", "Memory", "Speed"], ["Memory training", "Online CBT course", "More research"], ["A new hobby", "Things you enjoy", "Less stress for now"]];
  const dark = [1, 3, 6, 8, 12, 16, 18, 21, 23];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Keeping active" title="Keeping a busy mind" label="Keeping the mind active" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A crossword grid beside the ways of keeping the mind active">
      {Array.from({ length: 25 }, (_, index) => <rect key={index} x={22 + (index % 5) * 22} y={34 + Math.floor(index / 5) * 22} width="22" height="22" fill={dark.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="1.5" opacity={at === 2 ? 0.45 : 1} />)}
      {at === 3 && <Sun x={128} y={150} r={10} />}
      {at === 1 && <circle cx="77" cy="89" r="18" fill="none" stroke={GOLD} strokeWidth="3" />}
      <Tags x={162} y={40} labels={sets[at]} lit={index => at === 1 || index === 0} width={144} gap={36} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FogPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tell your doctor or nurse", "Write notes; take someone with you", "Blood tests or a scan rule things out", "No set medicine; research goes on", "Free helplines and online groups"];
  const xs = [36, 98, 160, 222, 284];
  const names = ["Tell", "Notes", "Checks", "Research", "Helplines"];
  const icon = (index: number, x: number) => [
    <g key="talk"><rect x={x - 15} y="92" width="30" height="22" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x - 6} 114 l-4 8 l10 -8`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /></g>,
    <Notepad key="notes" x={x} y={106} w={24} h={30} />,
    <g key="tube"><rect x={x - 6} y="88" width="12" height="36" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 4} y="108" width="8" height="14" rx="4" fill={INK} /></g>,
    <g key="flask"><path d={`M${x - 5} 88 V100 L${x - 15} 122 H${x + 15} L${x + 5} 100 V88 Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d={`M${x - 11} 114 H${x + 11} L${x + 14} 120 H${x - 14} Z`} fill={SOFT} /></g>,
    <Phone key="phone" x={x} y={106} />,
  ][index];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Getting help" title="Who to tell, and what follows" label="Getting help" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from telling your team, through notes and checks, to research and helplines">
      <path d="M36 150 H284" stroke={LINE} strokeWidth="4" strokeDasharray="2 8" strokeLinecap="round" />
      {xs.map((x, index) => <g key={x} opacity={index === at ? 1 : 0.45}>
        {index === at && <circle cx={x} cy="106" r="27" fill={WHITE} stroke={GOLD} strokeWidth="3" />}
        {icon(index, x)}
        <circle cx={x} cy="150" r="6" fill={index <= at ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x} y={176} size={10}>{names[index]}</W>
      </g>)}
      {at === 4 && <W x={230} y={50} size={10.5}>Macmillan: 0808 808 0000</W>}
      {at === 1 && <W x={98} y={50} size={10.5}>Take someone along</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FogDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often more noticeable back at work", "The law treats cancer as a disability", "Ask about reasonable adjustments", "Agree a flexible return plan", "Access to Work may give a grant"];
  const sets = [["Juggling tasks", "Meetings", "Feeling stressed"], ["Equality Act 2010", "From diagnosis", "After treatment too"], ["Shorter hours", "More breaks", "A quiet place"], ["Phased return", "Regular meetings", "A fit note"], ["Equipment", "Software", "No paying back"]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Brain fog at your desk" label="Work and brain fog" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Someone at a desk, with the things at work that help">
      <Person x={78} y={130} scale={1.2} />
      {at === 0 && [50, 78, 106].map((x, index) => <circle key={x} cx={x} cy={index === 1 ? 46 : 56} r="7" fill={GOLD} />)}
      <rect x="22" y="128" width="116" height="9" rx="3" fill={INK} /><path d="M32 137 V176 M128 137 V176" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <path d="M96 128 L102 108 H130 L124 128 Z" fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <Tags x={170} y={36} labels={sets[at]} lit={() => at > 0} width={136} gap={36} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FogRoad(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Very tired? Do not drive", "Ask for a lift or hospital transport", "Some medicines affect concentration", "DVLA: some conditions must be told"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Driving" title="Driving when your focus fades" label="Driving" credit="Illustration: Rehyn. Not sure? Ask your doctor or pharmacist."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A car on a road, with when not to drive and other ways to travel">
      <path d="M130 62 H190 L300 176 H20 Z" fill={SOFT} opacity=".35" />
      <path d="M160 66 V174" stroke={WHITE} strokeWidth="3" strokeDasharray="8 10" />
      <g opacity={at === 0 ? 0.5 : 1}>
        <path d="M128 136 L138 120 H182 L192 136 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="118" y="134" width="84" height="22" rx="7" fill={INK} />
        <circle cx="138" cy="158" r="8" fill={TEXT} /><circle cx="182" cy="158" r="8" fill={TEXT} />
      </g>
      {at === 0 && <><Moon x={52} y={44} r={14} /><Cross x={160} y={140} s={24} /></>}
      {at === 1 && <><Box x={160} y={34} w={150} text="Hospital transport" lit /><Person x={262} y={150} scale={0.9} /></>}
      {at === 2 && <><Pill x={56} y={44} /><Bubble x={226} y={40} text="Sleepy? Do not drive" width={140} /></>}
      {at === 3 && <><rect x="244" y="32" width="40" height="52" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M252 48 H276 M252 58 H276 M252 68 H268" stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" /><W x={264} y={102} size={11}>DVLA</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FogTable(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["A side effect others cannot see", "Telling people lets them help", "Help with shopping and meal plans", "Someone can come to appointments"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Family and friends" title="Explaining a side effect no one sees" label="Explaining it to others" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people at a table, talking about brain fog and sharing the load">
      <Person x={100} y={130} scale={1.2} />
      <Person x={220} y={130} scale={1.2} fill={at === 0 ? SOFT : INK} />
      <rect x="56" y="134" width="208" height="9" rx="3" fill={INK} /><path d="M76 143 V178 M244 143 V178" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <><Cloud x={100} y={62} s={18} opacity={0.6} /><W x={220} y={70} size={18}>?</W></>}
      {at === 1 && <Bubble x={134} y={44} text="It usually gets better" width={150} />}
      {at === 2 && <><Box x={160} y={44} w={120} text="Meal planning" lit /><Notepad x={160} y={116} w={24} h={30} /></>}
      {at === 3 && <Box x={160} y={44} w={130} text="Appointments" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FogSky(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Many people feel frustrated", "Relaxing can ease stress and the fog", "Low over 2 weeks? Talk to a doctor", "Counselling, CBT, support groups", "Samaritans: 116 123, any time"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="Easing the frustration and the low" label="Frustration and mood" credit={help}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Clouds slowly parting as the sun rises, with the help that is there">
      <Sun x={244} y={[150, 130, 110, 90, 66][at]} r={13} />
      <Cloud x={130} y={70} s={36} opacity={[1, 0.8, 0.65, 0.45, 0.3][at]} />
      <Cloud x={210} y={96} s={26} opacity={[1, 0.75, 0.55, 0.35, 0.2][at]} />
      <path d="M0 172 C90 164, 230 164, 320 172" stroke={LINE} strokeWidth="3" fill="none" />
      {at === 1 && <Box x={80} y={140} w={80} text="Relax" lit />}
      {at === 2 && <Box x={92} y={140} w={150} text="Doctor or nurse" lit />}
      {at === 3 && <><Box x={66} y={140} w={100} text="Counselling" lit /><Box x={156} y={140} w={60} text="CBT" lit /></>}
      {at === 4 && <><Phone x={46} y={136} lit /><W x={70} y={140} size={12} anchor="start">116 123</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Fear of cancer coming back ============================================================================

function FcrWave(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Very common after treatment", "Doctors may not use the word cure", "Fewer visits can bring more worry", "It comes and goes", "Often eases with time"];
  const dot = [[50, 65], [110, 155], [165, 76], [215, 137], [267, 94]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Why it is common" title="A worry almost everyone shares" label="Why the worry is common" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A wave of worry that rises and falls, getting gentler over time">
      <W x={20} y={30} size={10} anchor="start">Worry</W>
      <path d="M20 110 C40 50, 60 50, 80 110 S120 160, 140 110 S170 70, 190 110 S220 140, 240 110 S270 95, 300 110" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M20 176 H300" stroke={LINE} strokeWidth="3" /><W x={300} y={192} size={10} anchor="end">Time</W>
      <circle cx={dot[0]} cy={dot[1]} r="9" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      {at === 1 && <Bubble x={226} y={40} text="Is it cured?" width={100} />}
      {at === 4 && <Sun x={286} y={42} r={10} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FcrRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tests, check-ups and the news", "Everyday aches can feel alarming", "Holidays and big events", "Less contact once treatment ends", "A diary helps you spot triggers"];
  const tags: [string, number, number][] = [["Check-ups", 66, 60], ["The news", 254, 60], ["Aches", 60, 128], ["Big events", 260, 128], ["Fewer visits", 160, 30]];
  const lit = [[0, 1], [2], [3], [4], [0, 1, 2, 3, 4]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Triggers" title="The moments that bring it back" label="What can set it off" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with the moments that can bring the worry back around them">
      {tags.map(([label, x, y], index) => lit.includes(index) && <path key={label} d={`M${x} ${y} L160 111`} stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 5" />)}
      <Person x={160} y={150} scale={1.3} />
      {tags.map(([label, x, y], index) => <Box key={label} x={x} y={y} w={100} text={label} lit={lit.includes(index)} />)}
      {at === 4 && <Notepad x={216} y={160} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FcrNotes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Ask your team what to look out for", "New, unusual or lasting? Report it", "Get checked; never a waste of time", "No need to wait for follow-up", "Aware of changes, not always checking"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="Aware of your body, not on alert" label="Symptoms worth reporting" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A notepad of what to look out for, a phone for your team, and noticing without constant checking">
      <rect x="24" y="30" width="100" height="128" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {[54, 80, 106, 132].map((y, index) => <g key={y}><rect x="36" y={y - 7} width="14" height="14" rx="3" fill={index <= at - 1 || at === 4 ? INK : WHITE} stroke={INK} strokeWidth="2" /><path d={`M58 ${y} H112`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" /></g>)}
      {at === 0 && <Bubble x={228} y={60} text="What to look for?" width={140} />}
      {at === 1 && <Tags x={162} y={36} labels={["New", "Unusual", "Not going away"]} lit={() => true} width={136} gap={36} />}
      {at === 2 && <><Box x={228} y={64} w={120} text="Get checked" lit /><circle cx="228" cy="118" r="18" fill={WHITE} stroke={GOLD} strokeWidth="3" /><path d="M219 118 L226 125 L238 111" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></>}
      {at === 3 && <><Phone x={228} y={88} lit /><W x={228} y={134} size={11}>Your cancer team</W></>}
      {at === 4 && <><circle cx="214" cy="80" r="20" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M228 94 L246 112" stroke={INK} strokeWidth="5" strokeLinecap="round" /><Cross x={222} y={88} s={26} /><W x={228} y={146} size={11}>Be aware</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FcrDial(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["When worry gets in the way of life", "Racing thoughts, poor sleep, dread", "Asking early is not weakness", "GP, NHS 111 or refer yourself", "Samaritans 116 123, day or night"];
  const sets = [["Daily life", "Motivation", "Coping"], ["Racing thoughts", "Poor sleep", "Dread"], ["Ask any time", "Not weakness", "It takes courage"], ["GP", "NHS 111", "Talking therapies"], ["Samaritans 116 123", "Text SHOUT 85258", "111, mental health"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Getting help" title="When worry starts to take over" label="When to get help" credit={help}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A dial of worry easing as help is found, with where to turn">
      <Gauge x={92} y={128} r={58} value={[0.8, 0.8, 0.55, 0.35, 0.2][at]} label="Worry" />
      <Tags x={168} y={34} labels={sets[at]} lit={index => at >= 2 || (at === 0 && index === 0)} width={140} gap={36} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FcrCircles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Focus on what you can control", "Reliable information; ask your nurse", "Set a daily worry time", "One day at a time; small goals", "Slow breaths; a short walk"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Coping" title="Put your energy into today" label="Ways to manage the worry" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A big circle of what you can control, beside a small faded circle of what you cannot">
      <circle cx="262" cy="96" r="40" fill={SOFT} opacity=".35" />
      <W x={262} y={100} size={10}>What I can't</W>
      <circle cx="110" cy="102" r="76" fill={WHITE} stroke={INK} strokeWidth="3" />
      <W x={110} y={52} size={10.5}>What I can control</W>
      {at === 0 && <><Box x={110} y={80} w={100} text="Today" lit /><Box x={110} y={112} w={100} text="Feelings" lit /><Box x={110} y={144} w={100} text="Activities" lit /></>}
      {at === 1 && <><Box x={110} y={94} w={124} text="Ask your nurse" lit /><Box x={110} y={128} w={124} text="Check sources" /></>}
      {at === 2 && <><Clock x={110} y={102} r={26} hand={1} /><W x={110} y={152} size={10.5}>Worry time</W></>}
      {at === 3 && <><W x={110} y={80} size={10.5}>Small goals</W><rect x="68" y="130" width="28" height="22" fill={INK} /><rect x="96" y="116" width="28" height="36" fill={INK} opacity=".75" /><rect x="124" y="102" width="28" height="50" fill={INK} opacity=".5" /></>}
      {at === 4 && <><circle cx="110" cy="100" r="24" fill={INK} opacity=".8" className={still ? undefined : "lib-v2-breathe is-slow"} /><W x={110} y={150} size={10.5}>Slow breaths</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FcrWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Nerves before scans are common", "Every few months, then less often", "Write questions; take someone along", "Ask when results will come", "Family can come along too"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Check-ups" title="Getting through scan week" label="Before and after check-ups" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week with a scan and its results, and what helps on each day">
      {at === 1 ? <g>
        <path d="M24 100 H296" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        {[34, 66, 98, 130, 190, 270].map(x => <circle key={x} cx={x} cy="100" r="8" fill={INK} />)}
        <path d="M34 120 V126 H130 V120" stroke={GOLD} strokeWidth="3" fill="none" />
        <W x={82} y={144} size={10.5}>First year</W><W x={230} y={144} size={10.5}>Later</W>
      </g> : <g>
        {Array.from({ length: 7 }, (_, index) => <rect key={index} x={22 + index * 40} y="76" width="34" height="40" rx="6" fill={(at === 0 && index < 2) ? SOFT : index === 2 ? INK : WHITE} stroke={INK} strokeWidth="2" />)}
        <W x={119} y={136} size={10}>Scan</W><W x={239} y={136} size={10}>Results</W>
        {at === 2 && <><Notepad x={39} y={46} /><Person x={106} y={68} scale={0.6} /><Person x={132} y={68} scale={0.6} fill={SOFT} /></>}
        {at === 3 && <><circle cx="239" cy="96" r="26" fill="none" stroke={GOLD} strokeWidth="3" /><W x={239} y={52} size={11}>When?</W></>}
        {at === 4 && <><Person x={106} y={68} scale={0.6} /><Person x={132} y={68} scale={0.6} fill={SOFT} /><Person x={156} y={68} scale={0.6} fill={SOFT} /></>}
        {at === 0 && <W x={60} y={56} size={10.5}>Before the scan</W>}
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FcrChairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A trained therapist listens", "CBT or counselling can help", "In England, refer yourself", "It's okay to try someone else", "Talking can be a huge relief"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Talking therapies" title="A trained listener for the fear" label="Talking therapies" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people on chairs facing each other, talking">
      <Person x={90} y={146} scale={1.3} />
      <g opacity={at === 3 ? 0.35 : 1}><Person x={230} y={146} scale={1.3} fill={SOFT} /></g>
      {at === 3 && <><Person x={286} y={150} scale={1.1} fill={SOFT} /><Arrow d="M252 102 C264 92, 276 92, 284 102" head="M276 101 L285 103 L283 94" /></>}
      <rect x="64" y="160" width="52" height="7" rx="3" fill={INK} /><rect x="204" y="160" width="52" height="7" rx="3" fill={INK} />
      <path d="M70 167 V186 M110 167 V186 M210 167 V186 M250 167 V186" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {at === 0 && <Bubble x={160} y={46} text="Thoughts and feelings" width={156} />}
      {at === 1 && <><Box x={116} y={42} w={60} text="CBT" lit /><Box x={210} y={42} w={110} text="Counselling" lit /></>}
      {at === 2 && <Box x={160} y={42} w={140} text="Refer yourself" lit />}
      {at === 4 && <Bubble x={160} y={46} text="A huge relief" width={120} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FcrStream(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Thoughts as events that come and go", "Breathe in for 5, out for 5", "Yoga, visualisation, time with others", "An 8-week course, or a free app", "Not for everyone; walking helps some"];
  const shift = at * 14;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mindfulness" title="Watching thoughts come and go" label="Relaxation and mindfulness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Leaves floating past on a stream, like thoughts that come and go">
      <Stream y={124} depth={44} />
      {[40, 130, 220].map((x, index) => <g key={x} transform={`translate(${x + shift} ${146 + (index % 2 ? -4 : 4)}) rotate(${index % 2 ? 8 : -8})`}>
        <ellipse rx="28" ry="11" fill={WHITE} stroke={INK} strokeWidth="2" />
        {at === 0 && <W x={0} y={3.5} size={9.5}>What if</W>}
      </g>)}
      {at === 1 && <><circle cx="160" cy="62" r="34" fill={WHITE} stroke={SOFT} strokeWidth="3" /><circle cx="160" cy="62" r="20" fill={INK} opacity=".85" className={still ? undefined : "lib-v2-breathe is-slow"} /><W x={252} y={66} size={11}>1 2 3 4 5</W></>}
      {at === 2 && <><Box x={62} y={54} w={70} text="Yoga" lit /><Box x={162} y={54} w={110} text="Visualisation" lit /><Box x={268} y={54} w={80} text="Friends" lit /></>}
      {at === 3 && <>{Array.from({ length: 8 }, (_, index) => <g key={index}><rect x={42 + index * 30} y="40" width="24" height="24" rx="5" fill={INK} opacity={0.4 + index * 0.08} /><W x={54 + index * 30} y={56} size={9.5} fill={WHITE}>{index + 1}</W></g>)}<W x={160} y={90} size={10.5}>weeks</W></>}
      {at === 4 && <Person x={160} y={96} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FcrStairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Uncertainty can make plans hard", "Start with small, achievable goals", "Plans can move your focus", "Friends, holidays and hobbies again", "Plan ahead; pack your medicines"];
  const labels = ["A walk", "Friends", "A hobby", "A holiday"];
  const step = [-1, 0, 1, 2, 3][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Plans" title="Small steps back to the future" label="Making plans again" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A staircase of small goals, from a walk to a holiday, with a flag at the top">
      {labels.map((label, index) => <g key={label}>
        <rect x={30 + index * 62} y={150 - index * 30} width="62" height={30 + index * 30} fill={index <= step ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={61 + index * 62} y={168 - index * 30} size={10} fill={index <= step ? WHITE : TEXT}>{label}</W>
      </g>)}
      <path d="M270 60 V22" stroke={INK} strokeWidth="3" /><path d="M270 22 L296 30 L270 38 Z" fill={GOLD} />
      {step >= 0 && <circle cx={61 + step * 62} cy={138 - step * 30} r="9" fill={GOLD} stroke={WHITE} strokeWidth="3" />}
      {at === 0 && <W x={61} y={128} size={18} fill={GOLD}>?</W>}
      {at === 4 && <><rect x="282" y="146" width="30" height="24" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M290 146 V140 H304 V146" stroke={INK} strokeWidth="2.5" fill="none" /><Pill x={296} y={120} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FcrSofa(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Talking can bring you closer", "Others may think you're fine", "Write feelings down and share them", "Family may worry too", "'I don't know what to say' is okay"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Family" title="Breaking the protective silence" label="Talking with family" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people on a sofa, sharing their worries">
      <rect x="70" y="108" width="180" height="36" rx="10" fill={SOFT} opacity=".5" />
      <Person x={125} y={140} scale={1.2} />
      <Person x={195} y={140} scale={1.2} fill={at === 1 ? SOFT : INK} />
      <rect x="62" y="140" width="196" height="22" rx="8" fill={INK} /><path d="M78 162 V178 M242 162 V178" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <Bubble x={160} y={50} text="Let's talk" width={100} />}
      {at === 1 && <Bubble x={226} y={46} text="You're OK now" width={116} />}
      {at === 2 && <><Box x={160} y={46} w={110} text="My feelings" lit /><Notepad x={160} y={124} w={22} h={28} /></>}
      {at === 3 && <><circle cx="112" cy="70" r="15" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx="208" cy="70" r="15" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={112} y={75} size={13}>?</W><W x={208} y={75} size={13}>?</W></>}
      {at === 4 && <Bubble x={110} y={46} text="I don't know what to say" width={170} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FcrWalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Moving can lift mood and confidence", "Get advice; start gently", "Build towards 150 minutes a week", "Ask your key worker what helps", "Sleep, connect and eat well too"];
  const frac = [0.07, 0.07, 1, 0.45, 0.45][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Activity" title="Moving for your mood" label="Activity and wellbeing" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A walker moving along a bar from a short walk towards 150 minutes a week">
      <rect x="30" y="120" width="260" height="16" rx="8" fill={LINE} />
      <rect x="30" y="120" width={Math.max(16, 260 * frac)} height="16" rx="8" fill={INK} />
      <Person x={30 + 260 * frac} y={104} scale={0.9} />
      <W x={30} y={156} size={10} anchor="start">10 minutes</W><W x={290} y={156} size={10} anchor="end">150 minutes a week</W>
      {at === 0 && <Box x={160} y={46} w={140} text="Even a short walk" lit />}
      {at === 1 && <Box x={160} y={46} w={150} text="Ask a professional" lit />}
      {at === 2 && <Box x={160} y={46} w={120} text="Start gradually" lit />}
      {at === 3 && <Box x={160} y={46} w={150} text="Ask your key worker" lit />}
      {at === 4 && <><Box x={70} y={46} w={74} text="Sleep" lit /><Box x={160} y={46} w={88} text="Connect" lit /><Box x={252} y={46} w={84} text="Eat well" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FcrHub(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Feeling less alone", "A warm welcome; most groups are free", "Online forums and phone Buddies", "Courses after treatment", "Someone who has been there"];
  const nodes: [string, number, number][] = [["Local group", 64, 48], ["Online", 256, 48], ["Phone Buddy", 64, 160], ["Courses", 256, 160]];
  const lit = [[], [0], [1, 2], [3], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="People who know the feeling" label="Support groups" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person linked to a local group, an online forum, a phone buddy and a course">
      {nodes.map(([label, x, y], index) => <path key={label} d={`M${x} ${y} L160 104`} stroke={lit.includes(index) ? GOLD : LINE} strokeWidth="2.5" strokeDasharray="4 5" />)}
      {at === 0 && <circle cx="160" cy="104" r="40" fill="none" stroke={GOLD} strokeWidth="3" />}
      <Person x={at === 4 ? 146 : 160} y={124} scale={1.1} />
      {at === 4 && <Person x={180} y={126} scale={1} fill={SOFT} />}
      {nodes.map(([label, x, y], index) => <Box key={label} x={x} y={y} w={104} text={label} lit={lit.includes(index)} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Fertility after cancer ================================================================================

function FertTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Some treatments, not all", "Chemo: drugs and dose matter", "Radiotherapy to the pelvic area", "Surgery and hormones can play a part", "Ask about storing eggs or sperm early"];
  const names = ["Chemo", "Radiotherapy", "Surgery", "Hormones"];
  const lit = [[], [0], [1], [2, 3], []][at];
  const note = ["Some short-term, some long-term", "Drug, combination and dose", "Lower tummy, pelvis or groin", "One testicle: usually no effect", ""][at];
  const icon = (index: number, x: number, on: boolean) => {
    const ink = on ? WHITE : INK;
    return [
      <g key="drip"><rect x={x - 10} y="46" width="20" height="26" rx="5" fill="none" stroke={ink} strokeWidth="2.5" /><path d={`M${x} 72 V84`} stroke={ink} strokeWidth="2.5" /></g>,
      <g key="beam">{[-12, 0, 12].map(dx => <path key={dx} d={`M${x + dx} 46 L${x} 80`} stroke={ink} strokeWidth="2.5" strokeLinecap="round" />)}<circle cx={x} cy="80" r="4" fill={GOLD} /></g>,
      <path key="knife" d={`M${x - 14} 80 L${x + 8} 52 L${x + 14} 56 L${x - 6} 80 Z`} fill="none" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />,
      <Pill key="pill" x={x} y={64} fill={on ? WHITE : INK} />,
    ][index];
  };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatments" title="The drug, the dose, the area" label="How treatment affects fertility" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four kinds of cancer treatment, and which can affect fertility">
      {names.map((name, index) => <g key={name}>
        <rect x={10 + index * 76} y="34" width="72" height="76" rx="10" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, 46 + index * 76, lit.includes(index))}
        <W x={46 + index * 76} y={100} size={9.5} fill={lit.includes(index) ? WHITE : TEXT}>{name}</W>
      </g>)}
      {note && <W x={160} y={146} size={11}>{note}</W>}
      {at === 4 && <><g stroke={GOLD} strokeWidth="3" strokeLinecap="round">{[0, 60, 120].map(a => <path key={a} transform={`rotate(${a} 96 146)`} d="M96 132 V160" />)}</g><Box x={196} y={146} w={140} text="Before treatment" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FertMonths(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Eggs, a womb and the right hormones", "Periods often come back after", "Periods stopping before 45", "HRT can ease symptoms", "IVF, donors, surrogacy, adoption"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="For women" title="When periods pause, and when they stop" label="Fertility for women" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year of months with periods pausing during treatment and coming back, and the ages of menopause">
      {at === 0 && <><Box x={70} y={90} w={86} text="Healthy eggs" lit /><Box x={160} y={90} w={80} text="A womb" lit /><Box x={250} y={90} w={86} text="Hormones" lit /></>}
      {at === 1 && <g>
        <path d="M94 58 V52 H198 V58" stroke={GOLD} strokeWidth="3" fill="none" /><W x={146} y={44} size={10.5}>Treatment</W>
        {Array.from({ length: 12 }, (_, index) => <circle key={index} cx={28 + index * 24} cy="84" r="8" fill={index >= 3 && index <= 7 ? WHITE : INK} stroke={INK} strokeWidth="2" opacity={index > 7 ? 0.5 + (index - 7) * 0.12 : 1} />)}
        <W x={160} y={118} size={10.5}>Months</W>
      </g>}
      {at === 2 && <g>
        <path d="M30 100 H290" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        {[[117, "40"], [160, "45"], [247, "55"]].map(([x, label]) => <g key={label}><path d={`M${x} 92 V108`} stroke={INK} strokeWidth="3" /><W x={Number(x)} y={126} size={10.5}>{label}</W></g>)}
        <W x={73} y={84} size={10}>Premature</W><W x={138} y={84} size={10}>Early</W><W x={203} y={84} size={10}>Natural</W>
        <W x={160} y={150} size={10}>Age</W>
      </g>}
      {at === 3 && <><Pill x={96} y={84} /><Box x={196} y={84} w={130} text="HRT or the pill" lit /><W x={160} y={132} size={10.5}>Cannot restart eggs</W></>}
      {at === 4 && <><Box x={70} y={70} w={86} text="Frozen eggs" lit /><Box x={160} y={70} w={86} text="Donor eggs" lit /><Box x={250} y={70} w={86} text="Surrogacy" lit /><Box x={115} y={110} w={86} text="Adoption" lit /><Box x={205} y={110} w={86} text="IVF" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FertCount(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Sperm and testosterone", "Some chemo lowers sperm count", "One testicle removed: usually fine", "Erection problems usually ease", "Months or years for sperm to return"];
  const count = [12, 4, 12, 12, 8][at];
  const spots = Array.from({ length: 12 }, (_, index) => [42 + (index % 4) * 30 + (Math.floor(index / 4) % 2) * 10, 52 + Math.floor(index / 4) * 34]);
  return <MemoryBand props={props} state={s} tone="theme" kicker="For men" title="Sperm, hormones and time to recover" label="Fertility for men" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A field of sperm that thins with some treatments and can return over time">
      <rect x="22" y="30" width="136" height="120" rx="12" fill={WHITE} stroke={INK} strokeWidth="2" />
      {spots.map(([x, y], index) => <g key={index} opacity={index < count ? 1 : 0.15}><ellipse cx={x} cy={y} rx="5" ry="4" fill={INK} /><path d={`M${x + 5} ${y} c6 -5, 10 5, 16 0`} stroke={INK} strokeWidth="2" fill="none" /></g>)}
      {at === 0 && <Tags x={172} y={36} labels={["Healthy sperm", "Testosterone", "Hormones"]} lit={() => true} width={134} gap={36} />}
      {at === 1 && <Tags x={172} y={36} labels={["The drugs", "The dose", "Your age"]} lit={() => true} width={134} gap={36} />}
      {at === 2 && <><ellipse cx="220" cy="78" rx="16" ry="22" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeDasharray="5 5" /><ellipse cx="262" cy="78" rx="16" ry="22" fill={INK} /><W x={240} y={132} size={10.5}>Usually no effect</W></>}
      {at === 3 && <><path d="M182 120 C210 118, 230 90, 296 54" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" /><circle cx="296" cy="54" r="6" fill={GOLD} /><W x={240} y={142} size={10.5}>After treatment</W></>}
      {at === 4 && <><Clock x={240} y={74} r={26} hand={2} /><W x={240} y={124} size={10.5}>Months or years</W><W x={240} y={142} size={10}>Regular sperm counts</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FertTests(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tests show how fertility is affected", "Semen tests are free on the NHS", "Blood tests and an ultrasound scan", "Wait at least 6 to 12 months", "Results help you decide what next"];
  const scope = at === 0 || at === 1, screen = at === 0 || at === 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tests" title="A first result is not the last" label="Fertility tests" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A microscope for semen tests and a scan screen for the ovaries, with a loop for testing again">
      <g opacity={scope ? 1 : 0.45}>
        {at === 1 && <circle cx="80" cy="100" r="44" fill="none" stroke={GOLD} strokeWidth="3" />}
        <rect x="56" y="128" width="50" height="8" rx="3" fill={INK} /><path d="M92 128 V86 C92 72, 80 66, 70 70" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
        <rect x="60" y="62" width="14" height="40" rx="3" transform="rotate(-20 67 82)" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="58" y="106" width="30" height="5" rx="2" fill={INK} />
      </g>
      <g opacity={screen ? 1 : 0.45}>
        {at === 2 && <rect x="172" y="54" width="116" height="86" rx="10" fill="none" stroke={GOLD} strokeWidth="3" />}
        <rect x="180" y="62" width="100" height="70" rx="6" fill={INK} />
        {[[204, 86], [228, 100], [252, 82], [240, 114], [214, 112]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill={WHITE} opacity=".7" />)}
      </g>
      <W x={80} y={158} size={10.5}>Semen test</W><W x={230} y={158} size={10.5}>Scan and bloods</W>
      {at === 3 && <><Arrow d="M230 48 C200 22, 110 22, 84 52" head="M84 42 L83 53 L94 51" /><W x={156} y={46} size={10.5}>Test again</W></>}
      {at === 4 && <Box x={160} y={32} w={120} text="What next?" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FertTank(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Storing sperm, eggs or embryos", "Sperm banking is safe and simple", "8 to 14 days of injections for eggs", "Tissue freezing at a few UK clinics", "Stored up to 55 years in total"];
  const lit = [[0, 1, 2], [0], [1, 2], [3], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Preserving fertility" title="Storing eggs, sperm or embryos" label="Preserving fertility" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A storage tank holding straws of sperm, eggs, embryos and tissue, and how long they can be kept">
      <rect x="30" y="44" width="110" height="122" rx="16" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="44" y="34" width="82" height="14" rx="5" fill={INK} />
      <g stroke={GOLD} strokeWidth="2.5" strokeLinecap="round">{[0, 60, 120].map(a => <path key={a} transform={`rotate(${a} 85 18)`} d="M85 8 V28" />)}</g>
      {[52, 74, 96, 118].map((x, index) => <g key={x}><rect x={x - 5} y="60" width="10" height="90" rx="4" fill={lit.includes(index) || at === 4 ? INK : TINT} stroke={INK} strokeWidth="1.5" /></g>)}
      {at < 4 ? <Tags x={168} y={36} labels={["Sperm", "Eggs", "Embryos", "Tissue"]} lit={index => lit.includes(index)} width={124} gap={34} />
        : <g>
          <rect x="168" y="84" width="132" height="16" rx="8" fill={SOFT} /><rect x="168" y="84" width="24" height="16" rx="8" fill={INK} />
          <W x={168} y={122} size={10} anchor="start">10 years</W><W x={300} y={122} size={10} anchor="end">up to 55</W>
          <W x={234} y={64} size={10.5}>Renewed every 10 years</W>
        </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FertPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A big decision; talk it through", "Wait a while after treatment", "Health checks before you try", "Cancer is not passed to a child", "Try naturally, or ask for tests"];
  const stops: [string, number, number, number, number][] = [["Talk", 40, 160, 40, 184], ["Wait", 100, 128, 100, 152], ["Checks", 160, 106, 160, 132], ["Questions", 220, 80, 220, 106], ["Try", 280, 50, 280, 76]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Trying for a baby" title="Choosing the right time to try" label="Trying for a baby" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path rising from talking it through, past waiting and checks, to trying">
      <path d="M20 172 C60 150, 80 136, 100 128 S140 110, 160 106 S200 88, 220 80 S270 54, 300 40" stroke={LINE} strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="2 9" />
      {stops.map(([label, x, y, lx, ly], index) => <g key={label}>
        {index === at && <circle cx={x} cy={y} r="17" fill="none" stroke={GOLD} strokeWidth="3" />}
        <circle cx={x} cy={y} r="10" fill={index <= at ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={lx} y={ly} size={10.5}>{label}</W>
      </g>)}
      {at === 0 && <Bubble x={78} y={44} text="When is right?" width={116} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FertWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A referral to a licensed clinic", "IVF takes around 3 to 6 weeks", "NHS funding varies across the UK", "Ask for a fully costed plan", "Counselling before, during, after"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="IVF" title="IVF after cancer, step by step" label="IVF and fertility treatment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A six-week IVF cycle, and the funding rules across the UK">
      {at === 2 ? <g>
        {[["England", 100, 70], ["Scotland", 220, 70], ["Wales", 100, 112], ["Northern Ireland", 220, 112]].map(([label, x, y]) => <Box key={String(label)} x={Number(x)} y={Number(y)} w={112} h={30} text={String(label)} lit />)}
        <W x={160} y={154} size={10.5}>Each sets its own rules</W>
      </g> : <g opacity={at === 1 ? 1 : 0.45}>
        {Array.from({ length: 6 }, (_, index) => <g key={index}><rect x={30 + index * 44} y="90" width="38" height="30" rx="8" fill={at === 1 && index >= 2 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={49 + index * 44} y={109} size={10.5} fill={at === 1 && index >= 2 ? WHITE : TEXT}>{index + 1}</W></g>)}
        <W x={160} y={142} size={10.5}>weeks</W>
      </g>}
      {at === 0 && <Box x={160} y={44} w={180} text="Licensed fertility clinic" lit />}
      {at === 1 && <><path d="M118 80 V74 H290 V80" stroke={GOLD} strokeWidth="3" fill="none" /><W x={204} y={64} size={10.5}>3 to 6 weeks</W></>}
      {at === 3 && <Box x={160} y={44} w={160} text="Fully costed plan" lit />}
      {at === 4 && <Bubble x={160} y={46} text="Before, during, after" width={160} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FertDoors(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Donors, surrogacy, adoption and more", "Donors are screened and matched", "Surrogacy: legal, not on the NHS", "Adopt or foster, single or not", "Some decide not to have children"];
  const doors = ["Donor", "Surrogacy", "Adoption", "Fostering", "Co-parenting"];
  const lit = [[0, 1, 2, 3, 4], [0], [1], [2, 3], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Other routes" title="Donors, surrogacy, adoption and other paths" label="Other routes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A row of doors, each a different route, and the choice not to go through any">
      <path d="M10 124 H310" stroke={LINE} strokeWidth="3" />
      {doors.map((door, index) => <g key={door} opacity={at === 4 ? 0.4 : lit.includes(index) ? 1 : 0.45}>
        <rect x={17 + index * 60} y="40" width="46" height="84" rx="5" fill={lit.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <circle cx={54 + index * 60} cy="86" r="3" fill={lit.includes(index) ? WHITE : INK} />
        <W x={40 + index * 60} y={142} size={9.5}>{door}</W>
      </g>)}
      {at === 4 && <Box x={160} y={172} w={210} text="No right or wrong way to feel" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FertFaces(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["No right or wrong way to feel", "Feeling loss; you are not alone", "Fertility treatment can be hard", "Clinics have counsellors to talk to", "Samaritans 116 123, day or night"];
  const mouths = ["M-12 10 Q0 18 12 10", "M-12 14 H12", "M-12 16 Q0 8 12 16"];
  const lit = [[0, 1, 2], [2], [1], [0], [0]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Feelings" title="Grief, relief and everything between" label="Feelings about fertility" credit={help}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three faces with different feelings, and where to talk">
      {[70, 160, 250].map((x, index) => <g key={x} transform={`translate(${x} 78)`} opacity={lit.includes(index) ? 1 : 0.4}>
        <circle r="32" fill={lit.includes(index) ? WHITE : TINT} stroke={INK} strokeWidth="2.5" />
        <circle cx="-11" cy="-6" r="3.5" fill={INK} /><circle cx="11" cy="-6" r="3.5" fill={INK} />
        <path d={mouths[index]} stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>)}
      {at === 3 && <Box x={160} y={146} w={150} text="Clinic counsellor" lit />}
      {at === 4 && <><Phone x={90} y={146} lit /><W x={112} y={150} size={12} anchor="start">Samaritans 116 123</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FertTable(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Talking may bring you closer", "Decide together at the clinic", "Affection, at your partner's pace", "Single? Take your time", "Counsellors can help you both"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Relationships" title="Deciding together" label="Partners and relationships" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people facing each other across a shared notebook of choices">
      <Person x={80} y={140} scale={1.3} />
      <g opacity={at === 3 ? 0.25 : 1}><Person x={240} y={140} scale={1.3} fill={SOFT} /></g>
      <rect x="104" y="128" width="112" height="8" rx="3" fill={INK} /><path d="M120 136 V176 M200 136 V176" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at !== 3 && <><rect x="126" y="96" width="68" height="30" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={160} y={115} size={9.5}>Our choices</W></>}
      {at === 0 && <HeartShape x={160} y={54} size={34} fill={GOLD} stroke={GOLD} width={2} />}
      {at === 1 && <Box x={160} y={46} w={130} text="Fertility clinic" lit />}
      {at === 2 && <Box x={160} y={46} w={120} text="At their pace" lit />}
      {at === 3 && <Box x={160} y={46} w={130} text="Take your time" lit />}
      {at === 4 && <Box x={160} y={46} w={120} text="Counsellor" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FertShield(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Some treatments could harm a baby", "Use contraception during treatment", "And for a while after; ask how long", "Free and confidential on the NHS"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Contraception" title="Why contraception still matters" label="Contraception" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A shield over the time of treatment and a little after it">
      {at < 3 ? <g>
        <path d={at === 2 ? "M150 34 L196 46 V74 C196 98, 176 112, 150 120 C124 112, 104 98, 104 74 V46 Z" : "M120 34 L160 46 V74 C160 98, 142 112, 120 120 C98 112, 80 98, 80 74 V46 Z"} fill={at === 0 ? WHITE : INK} opacity={at === 0 ? 0.6 : 1} stroke={at === 0 ? INK : GOLD} strokeWidth="3" strokeLinejoin="round" />
        <rect x="40" y="134" width="160" height="16" rx="8" fill={INK} />
        <rect x="200" y="134" width="70" height="16" rx="8" fill={at === 2 ? GOLD : SOFT} />
        <W x={120} y={170} size={10.5}>Treatment</W><W x={235} y={170} size={10.5}>A while after</W>
      </g> : <g>
        <Box x={64} y={86} w={100} text="Sexual health" lit /><Box x={164} y={86} w={86} text="Some GPs" lit /><Box x={262} y={86} w={92} text="Pharmacies" lit />
        <W x={160} y={136} size={10.5}>Free and confidential</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function FertArc(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Your cancer team, GP or nurse", "Fertility clinic counsellors", "Helplines and online communities", "Charities for donors and adoption"];
  const nodes: [string, number, number][] = [["Your team", 54, 110], ["Clinic", 106, 46], ["Helplines", 214, 46], ["Charities", 266, 110]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="Who to talk to, and when" label="Where to get support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with an arc of places to turn: their team, the clinic, helplines and charities">
      {nodes.map(([label, x, y], index) => <path key={label} d={`M${x} ${y} L160 140`} stroke={index === at ? GOLD : LINE} strokeWidth="2.5" strokeDasharray="4 5" />)}
      <Person x={160} y={172} />
      {nodes.map(([label, x, y], index) => <Box key={label} x={x} y={y} w={96} text={label} lit={index === at} />)}
      {at === 2 && <W x={214} y={82} size={10}>0808 808 00 00</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Late effects of cancer treatment ======================================================================

function LateTimeline(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Some stay, some start years later", "Not everyone gets them", "Heart, bones, bowel, nerves and more", "New symptoms? Your team can check", "There is usually something to help"];
  const early = [36, 48, 60, 72, 84, 96, 108, 120];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What they are" title="Side effects that stay, or arrive later" label="What late effects are" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline where most side effects fade after treatment and a few appear later">
      <path d="M24 120 H296" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <rect x="24" y="116" width="70" height="8" rx="4" fill={SOFT} />
      {early.map((x, index) => <circle key={x} cx={x} cy={index % 2 ? 90 : 102} r="6" fill={INK} opacity={Math.max(0.12, 1 - index * 0.12)} />)}
      {[210, 250, 285].map(x => <circle key={x} cx={x} cy="98" r="6" fill={at === 1 ? WHITE : GOLD} stroke={GOLD} strokeWidth="2" />)}
      <W x={58} y={146} size={10}>Treatment</W><W x={160} y={146} size={10}>Months</W><W x={262} y={146} size={10}>Years</W>
      {at === 2 && <><Box x={50} y={46} w={62} text="Heart" lit size={10} /><Box x={120} y={46} w={62} text="Bones" lit size={10} /><Box x={190} y={46} w={62} text="Bowel" lit size={10} /><Box x={260} y={46} w={62} text="Nerves" lit size={10} /></>}
      {at === 3 && <><Box x={180} y={46} w={130} text="Your team checks" lit /><Phone x={276} y={48} /></>}
      {at === 4 && <><Box x={140} y={46} w={130} text="Tell your GP" lit /><Sun x={262} y={46} r={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LateBody(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Some chemo drugs affect organs", "Radiotherapy affects the area treated", "Hormones can affect heart and bones", "Surgery may affect nerves nearby", "Your team explains benefits and risks"];
  const spots: [number, number][][] = [[[226, 128], [246, 128], [236, 150]], [[236, 138]], [[226, 160], [246, 160]], [[214, 124]]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Which treatments" title="Each treatment leaves its own marks" label="Which treatments cause them" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four treatments linked to the parts of the body they can affect">
      {at < 4 && <Tags x={16} y={34} labels={["Chemotherapy", "Radiotherapy", "Hormonal therapy", "Surgery"]} lit={index => index === at} width={124} gap={36} />}
      <g opacity={at === 4 ? 0.5 : 1}><Person x={236} y={150} scale={2.2} fill={SOFT} /></g>
      {at < 4 && spots[at].map(([x, y]) => <g key={`${x}-${y}`}><path d={`M140 ${47 + at * 36} L${x} ${y}`} stroke={GOLD} strokeWidth="2" strokeDasharray="3 4" /><circle cx={x} cy={y} r="5" fill={GOLD} /></g>)}
      {at === 1 && <circle cx="236" cy="138" r="18" fill="none" stroke={GOLD} strokeWidth="3" />}
      {at === 4 && <><Box x={92} y={60} w={130} text="Benefits" lit /><Box x={92} y={100} w={130} text="Risks" /><Arrow d="M160 80 H196" head="M188 73 L197 80 L188 87" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LateHeart(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Many have no heart effects", "Doses are planned and recorded", "Breath hold can protect the heart", "Chest pain? Call 999 straight away", "Small changes make a difference"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The heart" title="Protecting the heart after cancer" label="The heart" credit="Illustration: Rehyn. Chest pain? Call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A heart, with how treatment is planned to protect it and the signs to act on">
      <HeartShape x={104} y={104} size={124} stroke={at === 4 ? GOLD : INK} />
      {at === 0 && <><Box x={248} y={80} w={120} text="Often no effects" lit /><Sun x={248} y={134} r={10} /></>}
      {at === 1 && <><Pill x={248} y={72} /><W x={248} y={112} size={10.5}>Doses recorded</W></>}
      {at === 2 && <><ellipse cx="232" cy="90" rx="18" ry="30" fill={WHITE} stroke={INK} strokeWidth="2.5" /><ellipse cx="270" cy="90" rx="18" ry="30" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={251} y={146} size={10.5}>Breath hold</W></>}
      {at === 3 && <><Phone x={250} y={84} lit /><W x={250} y={134} size={16}>999</W></>}
      {at === 4 && <><Person x={250} y={124} /><W x={250} y={156} size={10.5}>Keep active</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LateBones(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Lower hormones can thin bones", "Some breast and prostate treatments", "Early menopause: bones and heart", "A painless DEXA scan checks bones", "Calcium, vitamin D, weight-bearing"];
  const top = ["Less oestrogen or testosterone", "Aromatase inhibitors, prostate treatment", "Menopause before 45", "A DEXA scan, 10 to 20 minutes", "700mg calcium a day"][at];
  const holes = (cx: number, r: number) => Array.from({ length: 13 }, (_, index) => { const ring = index === 0 ? 0 : index < 7 ? 18 : 34; const a = index * 1.1; return <circle key={index} cx={cx + ring * Math.cos(a)} cy={96 + ring * Math.sin(a)} r={r} fill={TINT} stroke={SOFT} strokeWidth="1" />; });
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Bones and hormones" title="When hormones fall, bones thin" label="Bones and hormones" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two cross-sections of bone: a dense one, and a thinner one with wider gaps">
      <W x={160} y={26} size={10.5}>{top}</W>
      <circle cx="84" cy="96" r="50" fill={WHITE} stroke={INK} strokeWidth="3" />{holes(84, 3)}
      <circle cx="236" cy="96" r="50" fill={WHITE} stroke={INK} strokeWidth={at === 3 ? 4 : 3} />{holes(236, 7)}
      {at === 3 && <circle cx="236" cy="96" r="58" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 6" />}
      <Arrow d="M144 96 H174" head="M166 89 L175 96 L166 103" />
      <W x={84} y={166} size={10.5}>Stronger</W><W x={236} y={166} size={10.5}>Thinner</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LatePelvis(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often managed or treated well", "Any bleeding? Always get it checked", "Regular meals; 1 to 2 litres a day", "Pelvic floor exercises can help", "Specialists and continence advisers"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Bowel and bladder" title="Pelvic changes that can be managed" label="Bowel and bladder changes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A simple bowel and bladder, with what helps after pelvic treatment">
      {at === 1 && <><circle cx="90" cy="104" r="44" fill="none" stroke={GOLD} strokeWidth="3" /><circle cx="230" cy="104" r="44" fill="none" stroke={GOLD} strokeWidth="3" /></>}
      <path d="M62 76 C42 92, 82 100, 62 116 S92 140, 118 122 S108 86, 120 76" stroke={SOFT} strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d="M62 76 C42 92, 82 100, 62 116 S92 140, 118 122 S108 86, 120 76" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M200 76 Q198 134 230 136 Q262 134 260 76 Q230 66 200 76 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M202 102 Q204 130 230 131 Q256 130 258 102 Z" fill={SOFT} />
      <W x={90} y={166} size={10.5}>Bowel</W><W x={230} y={166} size={10.5}>Bladder</W>
      {at === 0 && <Box x={160} y={34} w={170} text="Can often be managed" lit />}
      {at === 2 && <><Cup x={110} y={36} /><W x={136} y={40} size={10.5} anchor="start">1 to 2 litres a day</W></>}
      {at === 3 && <Box x={160} y={34} w={176} text="Pelvic floor exercises" lit />}
      {at === 4 && <Box x={160} y={34} w={170} text="Continence adviser" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LateNerves(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Some drugs can affect nerves", "Tingling, numbness, hands and feet", "Most slowly improve over months", "Medicines, exercise and aids help", "Gloves, good shoes, test bath water"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Nerves" title="Numb hands, tingling feet, slow recovery" label="Nerve damage and numbness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hand and a foot with fine nerve lines, and how feeling slowly returns">
      <g>
        {[62, 76, 90, 104].map((x, index) => <rect key={x} x={x - 6} y={52 - (index === 1 || index === 2 ? 6 : 0)} width="12" height="42" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />)}
        <rect x="52" y="84" width="62" height="62" rx="14" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M54 104 L36 88" stroke={INK} strokeWidth="10" strokeLinecap="round" /><path d="M54 104 L36 88" stroke={WHITE} strokeWidth="5" strokeLinecap="round" />
        <path d="M83 140 V100 M83 112 L64 96 M83 112 L102 96" stroke={SOFT} strokeWidth="2" strokeDasharray="3 4" fill="none" />
        {at === 1 && [[62, 58], [76, 52], [90, 52], [104, 58]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="4" fill={GOLD} />)}
      </g>
      <W x={83} y={170} size={10.5}>Hands</W>
      {at === 2 ? <g>
        <path d="M180 140 C200 146, 210 150, 224 132 S270 72, 300 60" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" /><circle cx="300" cy="60" r="6" fill={GOLD} />
        <path d="M178 150 H302" stroke={LINE} strokeWidth="3" /><W x={240} y={170} size={10.5}>Months</W>
      </g> : <g>
        <path d="M200 134 C196 116, 206 104, 222 108 L268 118 C292 122, 296 146, 276 148 L214 148 C204 148, 200 142, 200 134 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M212 140 C236 132, 256 132, 280 136" stroke={SOFT} strokeWidth="2" strokeDasharray="3 4" fill="none" />
        {at === 1 && [[276, 128], [284, 136], [212, 132]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="4" fill={GOLD} />)}
        <W x={246} y={170} size={10.5}>Feet</W>
      </g>}
      {at === 0 && <Pill x={246} y={64} />}
      {at === 3 && <><Box x={246} y={46} w={118} text="Physiotherapy" lit /><Box x={246} y={80} w={118} text="Pain team" lit /></>}
      {at === 4 && <><Box x={246} y={46} w={118} text="Gloves" lit /><Box x={246} y={80} w={118} text="Good shoes" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LateCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Check-ups catch problems early", "Blood pressure, cholesterol, scans", "A DEXA scan for bone strength", "Tests can go on for some years", "Keep up NHS screening"];
  const marks: Record<number, string>[] = [{ 0: "Check-up", 3: "Check-up", 6: "Check-up", 10: "Check-up" }, { 1: "BP", 5: "Blood test", 9: "Heart scan" }, { 7: "DEXA" }, { 0: "Tests", 5: "Tests", 11: "Tests" }, { 2: "GP review", 8: "Screening" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Checks" title="The checks that catch problems early" label="Checks to ask about" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year of months with check-ups, heart and bone checks, and screening marked">
      {Array.from({ length: 12 }, (_, index) => { const x = 22 + (index % 4) * 70, y = 30 + Math.floor(index / 4) * 44; const label = marks[at][index]; return <g key={index}>
        <rect x={x} y={y} width="64" height="36" rx="6" fill={label ? INK : WHITE} stroke={INK} strokeWidth="2" opacity={label ? 1 : 0.5} />
        {label && <W x={x + 32} y={y + 22} size={9.5} fill={WHITE}>{label}</W>}
      </g>; })}
      <W x={160} y={176} size={10}>One year</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LateBalance(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Benefits usually outweigh any risk", "Not the same as secondary cancer", "Not smoking and being active help", "Keep up screening; report new signs"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Second cancers" title="A small risk, a bigger benefit" label="Second cancers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balance with the benefit of treatment far outweighing a small risk">
      {at === 0 && <g>
        <path d="M160 170 L146 186 H174 Z" fill={INK} /><path d="M160 170 V64" stroke={INK} strokeWidth="4" />
        <path d="M70 92 L250 50" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <path d="M70 92 V110 M250 50 V76" stroke={INK} strokeWidth="2" />
        <Box x={70} y={126} w={96} h={32} text="Benefit" lit />
        <circle cx="250" cy="84" r="8" fill={SOFT} stroke={INK} strokeWidth="2" /><W x={250} y={112} size={10}>Small risk</W>
      </g>}
      {at === 1 && <><Box x={86} y={84} w={136} text="Second cancer" lit /><Box x={234} y={84} w={136} text="Secondary cancer" /><W x={86} y={120} size={10}>New and different</W><W x={234} y={120} size={10}>Has spread</W></>}
      {at === 2 && <><Box x={62} y={54} w={96} text="No smoking" lit /><Box x={160} y={54} w={84} text="Active" lit /><Box x={258} y={54} w={92} text="Sun care" lit /><Person x={160} y={140} /></>}
      {at === 3 && <><Box x={96} y={70} w={130} text="NHS screening" lit /><Box x={236} y={70} w={130} text="New symptoms?" /><Phone x={236} y={124} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LateWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Healthy habits help recovery", "30 minutes, five times a week", "Lots of fruit and vegetables", "Stopping smoking: the healthiest step", "Relaxing eases strain on the heart"];
  const top = ["Healthy lifestyle", "Strength and balance: 2 days", "Fruit and vegetables", "", "Relaxation, meditation or yoga"][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Healthy living" title="Small habits that help after treatment" label="Healthy living" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of small healthy habits: activity, fruit and vegetables, no smoking and rest">
      {top && <W x={160} y={36} size={10.5}>{top}</W>}
      {at === 3 && <><rect x="124" y="26" width="72" height="12" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="180" y="26" width="16" height="12" fill={SOFT} /><Cross x={160} y={32} s={14} /></>}
      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => { const on = at === 1 ? index < 5 : at === 3 ? [1, 3, 5].includes(index) : at !== 0; return <g key={index}>
        <rect x={22 + index * 40} y="60" width="34" height="62" rx="8" fill={at === 1 && on ? INK : WHITE} stroke={at === 3 && on ? GOLD : INK} strokeWidth={at === 3 && on ? 3 : 2} />
        {at === 2 && <g><circle cx={39 + index * 40} cy="94" r="9" fill={GOLD} /><path d={`M${39 + index * 40} 85 V80`} stroke={INK} strokeWidth="2" /></g>}
        {at === 4 && <Moon x={39 + index * 40} y={92} r={9} />}
        {at === 0 && <circle cx={39 + index * 40} cy="91" r="6" fill={SOFT} />}
        <W x={39 + index * 40} y={140} size={10.5}>{day}</W>
      </g>; })}
      {at === 3 && <W x={160} y={166} size={10}>Several alcohol-free days</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LateCircle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Your GP gets a treatment summary", "Before surgery, mention your heart", "List every medicine, even herbal", "See your dentist regularly", "New symptoms? Your team will assess"];
  const nodes: [string, number, number][] = [["GP", 60, 54], ["Surgeon", 260, 54], ["Pharmacist", 60, 156], ["Dentist", 260, 156], ["Cancer team", 160, 28]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Other doctors" title="Who needs to know your history" label="Telling other doctors" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A treatment summary in the middle, shared with a GP, surgeon, pharmacist, dentist and the cancer team">
      {nodes.map(([label, x, y], index) => <path key={label} d={`M160 105 L${x} ${y}`} stroke={index === at ? GOLD : LINE} strokeWidth={index === at ? 3 : 2} strokeDasharray={index === at ? undefined : "4 5"} />)}
      <rect x="122" y="82" width="76" height="46" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <W x={160} y={102} size={10}>Treatment</W><W x={160} y={116} size={10}>summary</W>
      {nodes.map(([label, x, y], index) => <Box key={label} x={x} y={y} w={index === 4 ? 104 : 96} text={label} lit={index === at} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LateSheet(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["What you had, and what comes next", "Side effects, symptoms, contacts", "Not given a copy? Ask your team", "A care plan for your wider needs", "Take it to your GP review"];
  const rows = at === 3 ? ["Your life", "Your concerns", "Your plan", "Support now", "A new plan any time"] : ["Your treatment", "Side effects", "Symptoms", "Follow-up", "Contacts"];
  const lit = [[0], [1, 2, 4], [], [0, 1, 2, 3, 4], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatment summary" title="Your treatment, on one page" label="Your treatment summary" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="One sheet with rows for treatment, side effects, symptoms, follow-up and contacts">
      {at === 2 && <rect x="84" y="26" width="170" height="150" rx="8" fill={SOFT} opacity=".5" />}
      <rect x="70" y="18" width="170" height="150" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {rows.map((row, index) => <g key={row}>
        <rect x="82" y={30 + index * 26} width="146" height="20" rx="5" fill={lit.includes(index) ? INK : TINT} />
        <W x={92} y={44 + index * 26} size={10} anchor="start" fill={lit.includes(index) ? WHITE : TEXT}>{row}</W>
      </g>)}
      {at === 2 && <><circle cx="272" cy="60" r="16" fill={WHITE} stroke={GOLD} strokeWidth="3" /><path d="M264 60 L270 66 L281 54" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></>}
      {at === 4 && <><Arrow d="M244 100 H266" head="M258 93 L267 100 L258 107" /><Box x={290} y={100} w={44} text="GP" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LateBench(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Normal to feel isolated or frustrated", "Ask which symptoms to look out for", "Low over 2 weeks? Talk to a doctor", "Talking, groups and being active", "Samaritans 116 123, any time"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="Living with effects that last" label="Living with long-term effects" credit={help}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people on a bench as the sun rises, with the help that is there">
      <Sun x={272} y={[140, 120, 100, 82, 62][at]} r={12} />
      <rect x="72" y="112" width="176" height="7" rx="3" fill={SOFT} />
      <Person x={125} y={146} scale={1.2} />
      <Person x={195} y={146} scale={1.2} fill={SOFT} />
      <rect x="66" y="150" width="188" height="9" rx="3" fill={INK} /><path d="M82 159 V184 M238 159 V184" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <Cloud x={125} y={68} s={18} opacity={0.6} />}
      {at === 1 && <Bubble x={112} y={52} text="Which symptoms?" width={124} />}
      {at === 2 && <Bubble x={112} y={52} text="Talk to your doctor" width={140} />}
      {at === 3 && <><Box x={62} y={40} w={84} text="Talking" lit /><Box x={156} y={40} w={84} text="Groups" lit /><Box x={244} y={40} w={70} text="Active" lit /></>}
      {at === 4 && <><Phone x={34} y={120} lit /><W x={36} y={86} size={12}>116 123</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function BeyondPieceView({ piece, ...props }: { piece: BeyondPiece } & PieceProps) {
  switch (piece) {
    case "bey-fog-head": return <FogHead {...props} />;
    case "bey-fog-streams": return <FogStreams {...props} />;
    case "bey-fog-year": return <FogYear {...props} />;
    case "bey-fog-puffs": return <FogPuffs {...props} />;
    case "bey-fog-tiles": return <FogTiles {...props} />;
    case "bey-fog-day": return <FogDay {...props} />;
    case "bey-fog-puzzle": return <FogPuzzle {...props} />;
    case "bey-fog-path": return <FogPath {...props} />;
    case "bey-fog-desk": return <FogDesk {...props} />;
    case "bey-fog-road": return <FogRoad {...props} />;
    case "bey-fog-table": return <FogTable {...props} />;
    case "bey-fog-sky": return <FogSky {...props} />;
    case "bey-fcr-wave": return <FcrWave {...props} />;
    case "bey-fcr-ring": return <FcrRing {...props} />;
    case "bey-fcr-notes": return <FcrNotes {...props} />;
    case "bey-fcr-dial": return <FcrDial {...props} />;
    case "bey-fcr-circles": return <FcrCircles {...props} />;
    case "bey-fcr-week": return <FcrWeek {...props} />;
    case "bey-fcr-chairs": return <FcrChairs {...props} />;
    case "bey-fcr-stream": return <FcrStream {...props} />;
    case "bey-fcr-stairs": return <FcrStairs {...props} />;
    case "bey-fcr-sofa": return <FcrSofa {...props} />;
    case "bey-fcr-walk": return <FcrWalk {...props} />;
    case "bey-fcr-hub": return <FcrHub {...props} />;
    case "bey-fert-tiles": return <FertTiles {...props} />;
    case "bey-fert-months": return <FertMonths {...props} />;
    case "bey-fert-count": return <FertCount {...props} />;
    case "bey-fert-tests": return <FertTests {...props} />;
    case "bey-fert-tank": return <FertTank {...props} />;
    case "bey-fert-path": return <FertPath {...props} />;
    case "bey-fert-weeks": return <FertWeeks {...props} />;
    case "bey-fert-doors": return <FertDoors {...props} />;
    case "bey-fert-faces": return <FertFaces {...props} />;
    case "bey-fert-table": return <FertTable {...props} />;
    case "bey-fert-shield": return <FertShield {...props} />;
    case "bey-fert-arc": return <FertArc {...props} />;
    case "bey-late-timeline": return <LateTimeline {...props} />;
    case "bey-late-body": return <LateBody {...props} />;
    case "bey-late-heart": return <LateHeart {...props} />;
    case "bey-late-bones": return <LateBones {...props} />;
    case "bey-late-pelvis": return <LatePelvis {...props} />;
    case "bey-late-nerves": return <LateNerves {...props} />;
    case "bey-late-calendar": return <LateCalendar {...props} />;
    case "bey-late-balance": return <LateBalance {...props} />;
    case "bey-late-week": return <LateWeek {...props} />;
    case "bey-late-circle": return <LateCircle {...props} />;
    case "bey-late-sheet": return <LateSheet {...props} />;
    case "bey-late-bench": return <LateBench {...props} />;
  }
}
