import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { DUSK_PIECES, type DuskPiece } from "@/content/dusk-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Perimenopause and mood, Self-harm and Narcolepsy pages' own pieces (content/dusk-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Mind & mood pieces. Each is steered by the card's sections; pictures
// show ideas, calmly, never anyone's own body or results. Self-harm pictures follow safe messaging: people talking,
// helplines, signposts, paths and seasons, and never any method, injury or wound.

export const isDuskPiece = (piece: NewsPiece): piece is DuskPiece => (DUSK_PIECES as readonly string[]).includes(piece);

const medCredit = "Illustration: Rehyn. Never stop a medicine without your doctor.";
const crisisCredit = "Illustration: Rehyn. In danger now? Call 999.";

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A box with a big line and a small line under it. */
const Tile = ({ x, y, w, h = 40, top, bottom, lit = false, size = 12 }: { x: number; y: number; w: number; h?: number; top: string; bottom: string; lit?: boolean; size?: number }) =>
  <g><rect x={x} y={y} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
    <W x={x + w / 2} y={y + h / 2 - 1} size={size} fill={lit ? WHITE : TEXT}>{top}</W>
    <W x={x + w / 2} y={y + h / 2 + 12} size={9.5} fill={lit ? WHITE : TEXT}>{bottom}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 206, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
/** A plain cloud with nothing inside it. */
const Cloud = ({ x, y, s, fill = SOFT, opacity = 1 }: { x: number; y: number; s: number; fill?: string; opacity?: number }) =>
  <g opacity={opacity} fill={fill}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 12 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Arrow = ({ d, head, color = GOLD }: { d: string; head: string; color?: string }) =>
  <g stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 11} y={y - 18} width="22" height="36" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 11} r="2.2" fill={lit ? WHITE : INK} /></g>;
const Cup = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 12} y={y - 13} width="24" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 12} ${y - 7} h5 a6 6 0 0 1 0 12 h-5`} fill="none" stroke={INK} strokeWidth="2.5" /></g>;
/** A door with its handle; `lit` doors are filled. */
const Door = ({ x, y, lit = false, w = 44, h = 84 }: { x: number; y: number; lit?: boolean; w?: number; h?: number }) =>
  <g><rect x={x} y={y} width={w} height={h} rx="4" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x + w - 9} cy={y + h / 2} r="3.2" fill={lit ? WHITE : INK} /></g>;
/** A drop of sweat. */
const Drop = ({ x, y }: { x: number; y: number }) =>
  <path d={`M${x} ${y - 10} C${x + 6} ${y - 2}, ${x + 8} ${y + 3}, ${x} ${y + 8} C${x - 8} ${y + 3}, ${x - 6} ${y - 2}, ${x} ${y - 10} Z`} fill={SOFT} stroke={INK} strokeWidth="1.5" />;
/** A bed seen from the side: headboard at x, mattress top at y. */
const Bed = ({ x, y, w = 150, fill = SOFT }: { x: number; y: number; w?: number; fill?: string }) =>
  <g>
    <rect x={x} y={y - 40} width="10" height="58" rx="3" fill={INK} />
    <rect x={x + 6} y={y} width={w} height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" />
    <ellipse cx={x + 30} cy={y - 6} rx="16" ry="7" fill={WHITE} stroke={INK} strokeWidth="2" />
    <rect x={x + 48} y={y - 10} width={w - 42} height="12" rx="5" fill={fill} />
    <path d={`M${x + w} ${y + 14} V${y + 26}`} stroke={INK} strokeWidth="4" strokeLinecap="round" />
  </g>;
/** A clipboard with a few lines. */
const Clipboard = ({ x, y, w = 56, h = 70 }: { x: number; y: number; w?: number; h?: number }) =>
  <g><rect x={x} y={y} width={w} height={h} rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x + w / 2 - 12} y={y - 6} width="24" height="11" rx="3" fill={GOLD} />
    {[0, 1, 2, 3].map(index => <path key={index} d={`M${x + 10} ${y + 18 + index * 13} H${x + w - 10 - (index % 2) * 10}`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}</g>;

// ==== Perimenopause and mood =================================================================================

function PeriStages(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Usually affects ages 45 to 55", "Falling oestrogen can affect mood", "Poor sleep and life changes add to it", "Mental symptoms are just as real"];
  const bands = [{ x: 14, w: 116, t: "Perimenopause" }, { x: 130, w: 82, t: "Menopause" }, { x: 212, w: 94, t: "Postmenopause" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What happens" title="Hormones, mood and a big life change" label="Perimenopause and mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Perimenopause, menopause and postmenopause along a line, with oestrogen falling and other changes adding to it">
      {bands.map((band, index) => { const lit = at === 0 && index < 2; return <g key={band.t}>
        <rect x={band.x} y="146" width={band.w} height="30" rx="6" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={band.x + band.w / 2} y={165} size={10} fill={lit ? WHITE : TEXT}>{band.t}</W>
      </g>; })}
      {at === 0 && <g>
        <W x={160} y={74} size={24}>45 to 55</W><W x={160} y={94} size={10.5}>the usual ages</W>
        <W x={72} y={136} size={10}>Periods change</W><W x={171} y={136} size={10}>No period, 12 months</W>
      </g>}
      {at === 1 && <g>
        <path d="M20 50 C80 48, 120 60, 160 92 S250 126, 300 128" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M20 124 C90 122, 130 108, 170 84 S250 58, 300 56" stroke={GOLD} strokeWidth="3" fill="none" strokeDasharray="6 6" strokeLinecap="round" />
        <W x={20} y={40} size={10.5} anchor="start">Oestrogen</W><W x={300} y={44} size={10.5} anchor="end">Cortisol</W>
      </g>}
      {at === 2 && <g>
        <Box x={86} y={52} w={136} text="Poor sleep" lit size={10} /><Box x={234} y={52} w={136} text="Career changes" size={10} />
        <Box x={86} y={92} w={136} text="Children leaving" size={10} /><Box x={234} y={92} w={136} text="Caring for parents" size={10} />
      </g>}
      {at === 3 && <g>
        <W x={160} y={42} size={12}>Equally real</W>
        <rect x="104" y="56" width="44" height="64" rx="6" fill={INK} /><rect x="172" y="56" width="44" height="64" rx="6" fill={SOFT} />
        <W x={126} y={136} size={10}>Mental</W><W x={194} y={136} size={10}>Physical</W>
      </g>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function PeriFeelings(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Mood swings, worry, anger, low mood", "Brain fog: losing words, losing focus", "Poor sleep can make it all feel worse", "Usually 7 to 9 years, and they change", "Withdrawing, or more alcohol, caffeine"];
  const tops = ["Mood", "Worry", "Brain fog", "Sleep", "Habits"];
  const litTop = [[0, 1], [2], [3], [0, 1], [4]][at];
  const row = (labels: string[], y: number, w = 92) => labels.map((label, index) => <Box key={label} x={62 + index * 98} y={y} w={w} text={label} size={10} />);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Naming the feelings around the menopause" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with the kinds of symptoms around the menopause: mood, worry, brain fog, sleep and habits">
      {tops.map((top, index) => <Box key={top} x={36 + index * 62} y={30} w={58} text={top} lit={litTop.includes(index)} size={10} />)}
      {at === 0 && <>{row(["Mood swings", "Low mood", "Anxiety"], 80)}{row(["Irritability", "Panic attacks", "Tearful"], 112)}</>}
      {at === 1 && <><Bubble x={160} y={84} text="What's the word?" width={128} /><W x={160} y={134} size={10.5}>Hard to focus</W></>}
      {at === 2 && <><Moon x={124} y={92} r={16} /><Drop x={172} y={86} /><Drop x={192} y={104} /><W x={160} y={138} size={10.5}>Night sweats</W></>}
      {at === 3 && <g>
        <Box x={84} y={92} w={104} text="Hot flushes" />
        <Arrow d="M140 92 H174" head="M167 86 L174 92 L167 98" />
        <Box x={240} y={92} w={118} text="Low mood, anxiety" lit size={10} />
        <W x={160} y={134} size={11}>Usually 7 to 9 years</W>
      </g>}
      {at === 4 && row(["Withdrawing", "Less motivation", "More caffeine"], 92, 96)}
      <Person x={160} y={184} scale={0.8} fill={SOFT} />
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function PeriTwoLines(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Swings come and go; depression stays", "Sad for weeks or months, not days", "Symptoms overlap; midlife adds stress", "HRT, CBT or antidepressants may help"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Telling the difference" title="Mood swings, or a low that stays?" label="Menopause or depression" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two mood lines over time: one that rises and falls, and one that stays low">
      {at < 2 && <g>
        <path d="M30 24 H50" stroke={INK} strokeWidth="3.5" strokeLinecap="round" /><W x={56} y={28} size={10} anchor="start">Mood swings</W>
        <path d="M168 24 H188" stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" /><W x={194} y={28} size={10} anchor="start">A low that stays</W>
        <path d="M30 44 V160 H300" stroke={LINE} strokeWidth="2" fill="none" />
        <path d="M30 84 C50 58, 70 58, 90 84 S130 110, 150 84 S190 58, 210 84 S250 110, 270 84 S290 66, 300 72" stroke={at === 1 ? SOFT : INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M30 92 C44 124, 56 140, 74 140 H300" stroke={GOLD} strokeWidth={at === 1 ? 5 : 3.5} fill="none" strokeLinecap="round" />
        {at === 1 && <><path d="M74 166 V172 H300 V166" stroke={GOLD} strokeWidth="2.5" fill="none" /><W x={187} y={188} size={10.5}>Weeks or months</W></>}
      </g>}
      {at === 2 && <g>
        <circle cx="126" cy="100" r="60" fill={WHITE} fillOpacity=".7" stroke={INK} strokeWidth="2.5" />
        <circle cx="194" cy="100" r="60" fill={INK} fillOpacity=".12" stroke={INK} strokeWidth="2.5" />
        <W x={98} y={104} size={10.5}>Menopause</W><W x={160} y={104} size={10}>Overlap</W><W x={224} y={104} size={10.5}>Depression</W>
      </g>}
      {at === 3 && <g>
        <Box x={64} y={70} w={72} text="HRT" lit /><Box x={148} y={70} w={72} text="CBT" lit /><Box x={252} y={70} w={124} text="Antidepressants" lit size={10} />
        <Sun x={160} y={142} r={14} />
      </g>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function PeriNotepad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Want to know your options? See a GP", "No routine test: age and symptoms", "List symptoms; ask for a double slot", "Talk about body and mood, then and now", "Not heard? Rebook, or see another GP"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Getting help" title="Being heard at the GP" label="Talking to a GP" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A notepad of symptoms and questions, and a GP's door">
      <g opacity={at === 2 ? 1 : 0.5}>
        <rect x="20" y="26" width="110" height="152" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="20" y="26" width="110" height="12" rx="4" fill={GOLD} />
        <W x={75} y={58} size={10.5}>Symptoms</W>
        {[0, 1, 2].map(index => <g key={index}><rect x="32" y={68 + index * 18} width="10" height="10" rx="2" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="1.5" /><path d={`M50 ${73 + index * 18} H118`} stroke={LINE} strokeWidth="3" strokeLinecap="round" /></g>)}
        <W x={75} y={136} size={10.5}>Questions</W>
        <path d="M32 150 H118 M32 166 H100" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
      </g>
      {at === 0 && <g><W x={225} y={46} size={11}>GP</W><Door x={200} y={54} w={50} h={96} lit /><Person x={286} y={150} scale={0.9} /></g>}
      {at === 1 && <g>
        <Box x={232} y={60} w={140} text="No routine test" lit />
        <Box x={188} y={110} w={64} text="Age" /><W x={229} y={115} size={16}>+</W><Box x={272} y={110} w={76} text="Symptoms" size={10} />
      </g>}
      {at === 2 && <g>
        <Clock x={232} y={76} r={26} hand={2} />
        <path d="M232 44 A32 32 0 1 1 200 76" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />
        <W x={232} y={130} size={10.5}>Double appointment</W><W x={232} y={148} size={10}>Bring someone</W>
      </g>}
      {at === 3 && <g><Person x={196} y={166} scale={1} /><Person x={272} y={166} scale={1} fill={SOFT} /><Bubble x={232} y={64} text="Mood and body" width={120} /></g>}
      {at === 4 && <g>
        <Door x={176} y={60} /><Door x={250} y={60} lit />
        <Arrow d="M198 52 C212 36, 256 36, 270 52" head="M262 48 L270 52 L268 43" />
        <W x={198} y={162} size={10}>Rebook</W><W x={272} y={162} size={10}>Another GP</W>
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PeriHrtForms(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Replaces oestrogen and progesterone", "It can help anxiety and low mood", "Start low; review at 3 months", "Benefits usually outweigh the risks", "Side effects usually pass in 3 months"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="HRT" title="Can HRT help your mood?" label="HRT and mood" credit={medCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="HRT as tablets, patches, gel or spray, with a review at 3 months">
      <g opacity={at === 0 ? 1 : 0.35}>
        <Pill x={70} y={46} />
        <rect x="116" y="32" width="28" height="28" rx="6" fill={TINT} stroke={INK} strokeWidth="2.5" /><rect x="123" y="39" width="14" height="14" rx="3" fill="none" stroke={INK} strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x="178" y="38" width="24" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="186" y="30" width="8" height="8" fill={INK} /><path d="M194 32 H204" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <rect x="240" y="34" width="20" height="30" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="244" y="28" width="12" height="6" fill={INK} />
        <circle cx="266" cy="30" r="2" fill={GOLD} /><circle cx="272" cy="26" r="2" fill={GOLD} /><circle cx="272" cy="34" r="2" fill={GOLD} />
        <W x={70} y={82} size={10}>Tablets</W><W x={130} y={82} size={10}>Patches</W><W x={190} y={82} size={10}>Gel</W><W x={250} y={82} size={10}>Spray</W>
      </g>
      {at === 0 && <g>
        <Box x={104} y={124} w={112} text="Oestrogen" lit /><W x={170} y={129} size={16}>+</W><Box x={236} y={124} w={120} text="Progestogen" />
        <W x={236} y={158} size={10}>If you have a womb</W>
      </g>}
      {at === 1 && <g><Box x={100} y={120} w={104} text="Anxiety" lit /><Box x={220} y={120} w={104} text="Low mood" lit /><W x={160} y={160} size={10.5}>Also hot flushes and sleep</W></g>}
      {at === 2 && <g>
        {[0, 1, 2].map(index => <g key={index}><rect x={40 + index * 70} y="110" width="60" height="34" rx="6" fill={index === 2 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={70 + index * 70} y={131} size={10} fill={index === 2 ? WHITE : TEXT}>{`Month ${index + 1}`}</W></g>)}
        <ellipse cx="210" cy="127" rx="40" ry="26" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" />
        <W x={282} y={132} size={11}>Review</W>
      </g>}
      {at === 3 && <g>
        <rect x="157" y="112" width="6" height="64" fill={INK} /><path d="M136 178 H184" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <g transform="rotate(-8 160 112)">
          <rect x="70" y="109" width="180" height="6" rx="3" fill={INK} />
          <path d="M90 115 V125 M230 115 V125" stroke={INK} strokeWidth="2" />
          <Box x={90} y={138} w={96} text="Benefits" lit /><Box x={230} y={138} w={80} text="Risks" />
        </g>
      </g>}
      {at === 4 && <g>
        <path d="M30 120 C46 96, 62 96, 78 120 S110 140, 126 124 S170 112, 200 122 S260 128, 300 126" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M110 150 V158 M200 150 V158 M290 150 V158" stroke={INK} strokeWidth="2.5" />
        <W x={110} y={174} size={10}>1 month</W><W x={200} y={174} size={10}>2 months</W><W x={288} y={174} size={10}>3 months</W>
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PeriCbtTriangle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Mood, anxiety, sleep and hot flushes", "Thoughts, feelings and actions", "Usually 5 to 15 sessions, your way", "Counselling and mindfulness can help", "In England you can refer yourself"];
  const lit = at === 1;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Talking therapy" title="Talking your way through the change" label="CBT and talking therapies" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Thoughts, feelings and actions linked in a triangle, and the ways to have CBT">
      <g opacity={at <= 1 ? 1 : 0.45}>
        <path d="M88 54 L60 134 M116 54 L144 134 M94 148 H110" stroke={lit ? GOLD : LINE} strokeWidth="3.5" strokeLinecap="round" />
        <Box x={102} y={40} w={88} text="Thoughts" lit={lit} /><Box x={48} y={148} w={88} text="Feelings" lit={lit} /><Box x={156} y={148} w={88} text="Actions" lit={lit} />
      </g>
      {at === 0 && <Tags x={214} y={28} labels={["Low mood", "Anxiety", "Sleep", "Hot flushes"]} lit={() => true} width={96} gap={34} />}
      {at === 1 && <><W x={262} y={86} size={12}>Practise</W><W x={262} y={104} size={10}>between sessions</W></>}
      {at === 2 && <g>
        <Phone x={228} y={56} />
        <rect x="252" y="40" width="46" height="30" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M246 74 H304" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <W x={262} y={116} size={18}>5 to 15</W><W x={262} y={134} size={10}>sessions</W>
      </g>}
      {at === 3 && <><Box x={262} y={70} w={96} text="Counselling" lit size={10} /><Box x={262} y={108} w={96} text="Mindfulness" lit size={10} /></>}
      {at === 4 && <g><Door x={240} y={40} w={44} h={80} lit /><W x={262} y={142} size={10.5}>Refer yourself</W><W x={262} y={158} size={10}>18 or over</W></g>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function PeriSignpost(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["If HRT does not suit, there are others", "SSRIs or SNRIs: up to 8 weeks to work", "Clonidine or fezolinetant for flushes", "Little evidence for herbal remedies", "Never stop an antidepressant suddenly"];
  const arms = ["Antidepressants", "Hot flushes", "Herbal remedies"];
  const litArm = [-1, 0, 1, 2, 0][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Other medicines" title="Beyond HRT: other options" label="Other medicines" credit={medCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A signpost with three arms: antidepressants, hot flushes and herbal remedies">
      <rect x="52" y="24" width="8" height="160" rx="2" fill={INK} /><path d="M24 184 H90" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {arms.map((arm, index) => { const y = 36 + index * 44; const lit = litArm === index; return <g key={arm}>
        <path d={`M60 ${y} H176 L190 ${y + 14} L176 ${y + 28} H60 Z`} fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <W x={120} y={y + 18} size={10} fill={lit ? WHITE : TEXT}>{arm}</W>
      </g>; })}
      {at === 0 && <g><Box x={256} y={56} w={80} text="HRT" /><Cross x={256} y={56} s={16} /><W x={256} y={100} size={10.5}>Other options</W><W x={256} y={116} size={10}>are available</W></g>}
      {at === 1 && <g>
        <Pill x={256} y={48} />
        {Array.from({ length: 8 }, (_, index) => <rect key={index} x={204 + index * 13} y="74" width="10" height="18" rx="3" fill={INK} opacity={0.25 + index * 0.1} />)}
        <W x={256} y={114} size={11}>Up to 8 weeks</W>
      </g>}
      {at === 2 && <><Box x={256} y={56} w={104} text="Clonidine" lit size={10} /><Box x={256} y={92} w={104} text="Fezolinetant" lit size={10} /></>}
      {at === 3 && <g>
        <rect x="238" y="50" width="36" height="52" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="246" y="40" width="20" height="12" rx="2" fill={INK} />
        <W x={256} y={86} size={20}>?</W><W x={256} y={128} size={10.5}>Little evidence</W>
      </g>}
      {at === 4 && <g>
        <Pill x={222} y={52} /><path d="M244 46 H258 V60 H272 V74 H286 V88 H300" stroke={GOLD} strokeWidth="3.5" fill="none" />
        <W x={256} y={122} size={10.5}>Reduce slowly</W><W x={256} y={138} size={10}>with your doctor</W>
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PeriCoolRoom(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Poor sleep can bring stress and worry", "A cool room: 16 to 18°C is ideal", "Awake a long time? Up for 15 minutes", "CBT and HRT can both help sleep"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Sleep" title="Cooler nights, calmer days" label="Sleep and night sweats" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bedroom at night with a window, a bed and a thermometer">
      <rect x="20" y="22" width="84" height="70" rx="4" fill={TINT} stroke={INK} strokeWidth="2.5" /><path d="M62 22 V92 M20 57 H104" stroke={INK} strokeWidth="2" />
      <Moon x={42} y={40} r={9} />
      <Bed x={130} y={140} w={170} />
      <rect x="46" y="110" width="12" height="52" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" />
      <rect x="49" y={at === 1 ? 140 : 122} width="6" height={at === 1 ? 26 : 44} fill={at === 1 ? GOLD : SOFT} />
      <circle cx="52" cy="170" r="10" fill={at === 1 ? GOLD : SOFT} stroke={INK} strokeWidth="2" />
      {at === 0 && <><Cloud x={226} y={68} s={18} /><Drop x={196} y={100} /><Drop x={262} y={102} /></>}
      {at === 1 && <><W x={214} y={64} size={18}>16 to 18°C</W><W x={214} y={86} size={10.5}>ideal for sleeping</W></>}
      {at === 2 && <><Clock x={214} y={60} r={22} hand={1.6} /><W x={214} y={106} size={10.5}>Up for 15 minutes</W></>}
      {at === 3 && <><Box x={196} y={52} w={64} text="CBT" lit /><Box x={272} y={52} w={64} text="HRT" lit /><W x={234} y={92} size={10.5}>Both can help</W></>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function PeriHabits(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Alongside HRT, or instead of it", "Yoga, walking and weights can help", "Calcium-rich food for healthy bones", "No more than 14 units a week"];
  const litTile = [[0, 1, 2, 3], [0], [1], [2, 3]][at];
  const labels = ["Move more", "Eat well", "Less alcohol", "No smoking"];
  const row = (items: string[]) => items.map((item, index) => <Box key={item} x={70 + index * 90} y={152} w={82} text={item} />);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Everyday habits" title="Small habits, steadier moods" label="Exercise, food and alcohol" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four everyday habits: moving more, eating well, less alcohol and not smoking">
      {labels.map((label, index) => { const x = 16 + index * 76, cx = x + 35, lit = litTile.includes(index), c = lit ? WHITE : INK; return <g key={label}>
        <rect x={x} y="24" width="70" height="90" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {index === 0 && <Person x={cx} y={84} scale={0.7} fill={c} />}
        {index === 1 && <g><path d={`M${cx - 20} 64 A20 18 0 0 0 ${cx + 20} 64 Z`} fill={SOFT} stroke={c} strokeWidth="2.5" /><path d={`M${cx - 4} 60 C${cx - 6} 46, ${cx + 6} 40, ${cx + 12} 48 C${cx + 8} 54, ${cx + 2} 58, ${cx - 4} 60 Z`} fill={c} /></g>}
        {index === 2 && <g><path d={`M${cx - 13} 44 H${cx + 13} L${cx + 8} 84 H${cx - 8} Z`} fill="none" stroke={c} strokeWidth="2.5" strokeLinejoin="round" /><path d={`M${cx - 10} 64 H${cx + 10} L${cx + 8} 84 H${cx - 8} Z`} fill={SOFT} /></g>}
        {index === 3 && <g><rect x={cx - 20} y="60" width="34" height="8" rx="2" fill="none" stroke={c} strokeWidth="2" /><rect x={cx + 14} y="60" width="6" height="8" fill={GOLD} /><Cross x={cx} y={64} s={13} /></g>}
        <W x={cx} y={104} size={10} fill={lit ? WHITE : TEXT}>{label}</W>
      </g>; })}
      {at === 0 && <g><Pill x={98} y={152} /><W x={136} y={158} size={16}>+</W><Box x={210} y={152} w={116} text="Everyday habits" lit size={10} /></g>}
      {at === 1 && row(["Yoga", "Walking", "Weights"])}
      {at === 2 && row(["Milk", "Yoghurt", "Kale"])}
      {at === 3 && <><W x={160} y={152} size={18}>14 units</W><W x={160} y={172} size={10}>a week, at most</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PeriDesk(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["45% felt a negative impact on work", "Private, and you decide what to share", "Flexible hours, breaks, a fan", "Sometimes a disability: adjustments"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work" title="Support at work is your right" label="Menopause at work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk by a window with a laptop and a fan, and the support that can help at work">
      <rect x="20" y="22" width="76" height="62" rx="4" fill={TINT} stroke={INK} strokeWidth="2.5" />
      {[0, 1, 2, 3].map(index => <path key={index} d={`M24 ${36 + index * 12} H92`} stroke={LINE} strokeWidth="2" />)}
      <path d="M14 150 H196 M28 150 V188 M182 150 V188" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <rect x="40" y="114" width="56" height="34" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M32 150 H104" stroke={INK} strokeWidth="4" />
      <g stroke={at === 2 ? GOLD : INK} strokeWidth="2.5" fill="none">
        <circle cx="160" cy="114" r="16" fill={WHITE} /><path d="M160 98 V130 M144 114 H176" /><path d="M160 130 V150" strokeWidth="4" />
      </g>
      {at === 0 && <g>
        <W x={260} y={72} size={22}>45%</W>
        <rect x="212" y="88" width="96" height="14" rx="7" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="212" y="88" width="43" height="14" rx="7" fill={INK} />
        <W x={260} y={126} size={10}>in one survey</W>
      </g>}
      {at === 1 && <g><Bubble x={260} y={60} text="In private" width={92} /><Person x={236} y={160} scale={0.9} /><Person x={286} y={160} scale={0.9} fill={SOFT} /></g>}
      {at === 2 && <Tags x={212} y={28} labels={["Flexible hours", "Breaks", "A fan", "A place to rest"]} lit={() => true} width={98} gap={32} />}
      {at === 3 && <g><Box x={260} y={60} w={104} text="Equality Act" size={10} /><Box x={260} y={100} w={104} text="Adjustments" lit size={10} /><W x={260} y={138} size={10}>In some cases</W></g>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function PeriSofa(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["It can strain relationships at home", "Talking helps them know how to help", "Treatments can help; ask your GP", "Ask how they feel; make no assumptions", "Menopause Cafes and online groups"];
  const ax = at === 0 ? 100 : 124, bx = at === 0 ? 220 : 196;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Relationships" title="Letting the people close to you in" label="Relationships" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people on a sofa, talking and staying close">
      <rect x="64" y="104" width="192" height="40" rx="12" fill={SOFT} opacity=".5" />
      <Person x={ax} y={146} scale={1.1} fill={at === 3 ? SOFT : INK} />
      <Person x={bx} y={146} scale={1.1} fill={at === 1 ? SOFT : INK} />
      <rect x="54" y="140" width="212" height="22" rx="8" fill={INK} /><rect x="46" y="120" width="16" height="42" rx="6" fill={INK} /><rect x="258" y="120" width="16" height="42" rx="6" fill={INK} />
      <path d="M70 162 V176 M250 162 V176" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <path d="M136 92 L148 80 L160 94 L172 80 L184 92" stroke={GOLD} strokeWidth="3" fill="none" strokeLinejoin="round" />}
      {at === 1 && <Bubble x={150} y={48} text="How I'm feeling" width={126} />}
      {at === 2 && <><HeartShape x={112} y={56} size={32} fill={GOLD} stroke={GOLD} width={2} /><Box x={222} y={56} w={120} text="GP practice" lit /></>}
      {at === 3 && <Bubble x={170} y={48} text="How do you feel?" width={132} />}
      {at === 4 && <><Cup x={70} y={56} /><Cup x={116} y={56} /><Box x={236} y={56} w={128} text="Menopause Cafe" lit /></>}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function PeriHelpPhone(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["You do not have to struggle alone", "Not safe? Call 999 or go to A&E", "Call 111, the mental health option", "Samaritans 116 123, or text SHOUT", "Focus on getting through today"];
  const rows = [["999", "or A&E"], ["111", "mental health"], ["116 123", "Samaritans"], ["85258", "text SHOUT"]];
  const on = [[], [0], [1], [2, 3], []][at];
  const together = at === 0 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Urgent help" title="Help is there, day or night" label="Urgent help" credit={crisisCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A phone listing 999, 111, Samaritans and Shout, and two people together">
      <rect x="20" y="10" width="128" height="182" rx="18" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M70 19 H98" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {rows.map(([number, label], index) => { const y = 28 + index * 40; const lit = on.includes(index); return <g key={number}>
        <rect x="32" y={y} width="104" height="34" rx="8" fill={lit ? INK : TINT} />
        <W x={84} y={y + 15} size={13} fill={lit ? WHITE : TEXT}>{number}</W><W x={84} y={y + 28} size={9.5} fill={lit ? WHITE : TEXT}>{label}</W>
      </g>; })}
      <Person x={206} y={166} scale={1} /><Person x={262} y={166} scale={1} fill={together ? INK : SOFT} />
      {at === 0 && <Bubble x={246} y={60} text="Tell someone" width={104} />}
      {at === 2 && <Box x={240} y={60} w={104} text="Urgent GP" />}
      {at === 3 && <><Clock x={240} y={62} r={22} hand={4.2} /><W x={240} y={104} size={10}>Any time</W></>}
      {at === 4 && <Sun x={240} y={58} r={14} />}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

// ==== Self-harm ==============================================================================================

function ShWeather(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often a way to cope with distress", "A sign of distress, not an illness", "About 1 in 10 young people, any age", "Not your fault; everyone deserves help", "Help for you, and family and friends"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A way of coping with overwhelming feelings" label="What self-harm is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person under a cloud of feelings, and the help and support around them">
      {at !== 2 && <Person x={110} y={170} scale={1.3} />}
      {at === 0 && <><Cloud x={110} y={68} s={32} fill={INK} opacity={0.85} /><W x={110} y={76} size={11} fill={WHITE}>Feelings</W><Box x={240} y={110} w={124} text="A way of coping" lit /></>}
      {at === 1 && <><Cloud x={110} y={68} s={32} /><W x={110} y={76} size={11}>Distress</W><Box x={240} y={86} w={124} text="Not an illness" /><Box x={240} y={126} w={124} text="A sign of distress" lit size={10} /></>}
      {at === 2 && <g>
        <W x={160} y={82} size={24}>1 in 10</W><W x={160} y={104} size={11}>young people</W>
        {Array.from({ length: 10 }, (_, index) => <Person key={index} x={34 + index * 28} y={170} scale={0.7} fill={index === 4 ? INK : SOFT} />)}
      </g>}
      {at === 3 && <Bubble x={204} y={64} text="Not your fault" width={120} />}
      {at === 4 && <><Sun x={262} y={52} r={16} /><Person x={190} y={170} scale={1.3} fill={SOFT} /><Person x={262} y={178} scale={1} fill={SOFT} /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function ShStack(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Many reasons; they can change", "Feelings can build until overwhelming", "Often many smaller things build up", "Feeling alone or unheard adds to it", "Should always be taken seriously"];
  const scattered = [{ x: 76, y: 46, t: "Coping" }, { x: 200, y: 40, t: "Control" }, { x: 262, y: 86, t: "Relief" }, { x: 92, y: 104, t: "A cry for help" }, { x: 200, y: 132, t: "Unknown" }];
  const blocks = ["Bullying", "Pressure at work", "Family arguments", "Money worries", "Low self-esteem"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Reasons" title="Many small things, building up" label="Why people self-harm" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Many smaller things building up, and someone to talk to">
      {at === 0 && scattered.map((item, index) => <Box key={item.t} x={item.x} y={item.y} w={100} text={item.t} lit={index === 4} />)}
      {at === 1 && <g>
        <rect x="110" y="40" width="100" height="136" rx="14" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="114" y="60" width="92" height="112" rx="10" fill={INK} opacity=".8" />
        <W x={160} y={120} size={11} fill={WHITE}>Feelings</W>
        <Arrow d="M240 160 V62" head="M232 70 L240 62 L248 70" />
      </g>}
      {at === 2 && blocks.map((block, index) => <Box key={block} x={160 + [0, 6, -4, 8, -6][index]} y={172 - index * 28} w={150} h={24} text={block} lit={index % 2 === 0} size={10} />)}
      {at === 3 && <g>
        <circle cx="160" cy="124" r="44" fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 6" />
        <Person x={160} y={156} scale={1.3} /><Person x={40} y={172} scale={0.8} fill={SOFT} /><Person x={280} y={172} scale={0.8} fill={SOFT} />
      </g>}
      {at === 4 && <><Person x={120} y={166} scale={1.2} /><Person x={200} y={166} scale={1.2} fill={SOFT} /><HeartShape x={160} y={72} size={34} fill={GOLD} stroke={GOLD} width={2} /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function ShWindow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often kept secret, so hard to spot", "Covered up, even in hot weather", "Withdrawn, low, or lost interest", "Loss, money, bullying or loneliness", "Stay calm; ask calm, simple questions"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Signs" title="Signs that are easy to miss" label="Signs in someone you care about" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person who may be struggling, and a friend who notices and offers support">
      <Person x={100} y={170} scale={1.3} fill={at === 0 || at === 2 ? SOFT : INK} />
      {at === 0 && <Door x={190} y={56} w={60} h={114} />}
      {at === 1 && <g>
        <path d="M74 154 L70 186 M126 154 L130 186" stroke={INK} strokeWidth="9" strokeLinecap="round" />
        <Sun x={236} y={56} r={16} />
        <rect x="282" y="40" width="10" height="62" rx="5" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="284" y="50" width="6" height="56" fill={GOLD} /><circle cx="287" cy="108" r="8" fill={GOLD} stroke={INK} strokeWidth="2" />
      </g>}
      {at === 2 && <><Cloud x={100} y={70} s={22} /><Tags x={180} y={40} labels={["Withdrawn", "Low mood", "Lost interest"]} lit={() => false} width={118} gap={36} /></>}
      {at === 3 && <Tags x={176} y={28} labels={["Loss", "Money worries", "Bullying", "Loneliness"]} lit={() => false} width={124} gap={34} />}
      {at === 4 && <><Person x={220} y={170} scale={1.3} /><Bubble x={166} y={64} text="You're not alone" width={128} /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function ShHelpButtons(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Not safe? Call 999 or go to A&E", "Urgent: 111, the mental health option", "Samaritans 116 123, or text SHOUT", "Treated with respect at A&E", "Focus on getting through today"];
  const buttons = ["999 or A&E", "111, mental health", "Samaritans 116 123", "Text SHOUT to 85258"];
  const on = [[0], [1], [2, 3], [], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Help now" title="Who to call, right now" label="If you need help now" credit={crisisCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four ways to get help: 999 or A&E, 111, Samaritans and Shout">
      {buttons.map((button, index) => { const y = 16 + index * 44; const lit = on.includes(index); return <g key={button}>
        <rect x="12" y={y} width="176" height="36" rx="18" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={100} y={y + 23} size={12} fill={lit ? WHITE : TEXT}>{button}</W>
      </g>; })}
      {at === 3 ? <><Person x={228} y={170} scale={1.1} /><Person x={284} y={170} scale={1.1} fill={SOFT} /><HeartShape x={256} y={64} size={34} fill={GOLD} stroke={GOLD} width={2} /></> : <Person x={256} y={170} scale={1.1} />}
      {at === 0 && <Phone x={256} y={70} lit />}
      {at === 1 && <Box x={256} y={64} w={100} text="Urgent GP" />}
      {at === 2 && <><Clock x={256} y={62} r={22} hand={2.6} /><W x={256} y={104} size={10}>Any hour</W></>}
      {at === 4 && <Sun x={256} y={60} r={14} />}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function ShLetter(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Many feel less alone after talking", "Someone you trust, or a helpline", "In person, or by letter, text or video", "A time and place that suits you both", "Patience helps them understand"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Telling someone" title="Finding the words to tell someone" label="Telling someone" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Ways to reach someone you trust: in person, a letter, a text or a recording">
      <Person x={262} y={166} scale={1.4} />
      {at === 0 && <><Person x={70} y={166} scale={1.1} /><HeartShape x={166} y={90} size={30} fill={GOLD} stroke={GOLD} width={2} /></>}
      {at === 1 && <><Tags x={20} y={24} labels={["Friend", "Family", "GP", "Helpline"]} lit={() => false} width={104} gap={36} /><path d="M132 90 C170 90, 200 100, 228 112" stroke={GOLD} strokeWidth="2.5" fill="none" strokeDasharray="4 6" /></>}
      {at === 2 && <g>
        <rect x="30" y="28" width="54" height="36" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M30 28 L57 50 L84 28" stroke={INK} strokeWidth="2" fill="none" />
        <W x={100} y={50} size={10.5} anchor="start">Letter</W>
        <Phone x={57} y={104} /><W x={100} y={108} size={10.5} anchor="start">Text</W>
        <rect x="36" y="142" width="42" height="30" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M52 150 L64 157 L52 164 Z" fill={INK} />
        <W x={100} y={162} size={10.5} anchor="start">Recording</W>
        <path d="M168 104 C190 104, 210 108, 230 116" stroke={GOLD} strokeWidth="2.5" fill="none" strokeDasharray="4 6" />
      </g>}
      {at === 3 && <><Clock x={86} y={74} r={24} hand={5} /><W x={86} y={120} size={10}>A time that suits</W><Person x={150} y={170} scale={1} fill={SOFT} /></>}
      {at === 4 && <><Person x={70} y={166} scale={1.1} /><Bubble x={190} y={62} text="Any questions?" width={116} /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function ShCarePath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A GP listens and discusses options", "An assessment with a care team", "A care plan, and emergency contacts", "CBT or DBT: often 4 to 10 sessions", "Not working? Ask about other options"];
  const stations = [{ x: 40, t: "GP" }, { x: 116, t: "Assessment" }, { x: 196, t: "Care plan" }, { x: 276, t: "Therapy" }];
  const lit = [0, 1, 2, 3, 3][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Getting support" title="From the GP to the right support" label="GP, therapy and support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from a GP to an assessment, a care plan and talking therapy">
      <path d="M40 116 H276" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      {stations.map((station, index) => <g key={station.t}>
        <circle cx={station.x} cy="116" r="12" fill={index === lit ? INK : WHITE} stroke={INK} strokeWidth="3" />
        <W x={station.x} y={146} size={10.5}>{station.t}</W>
      </g>)}
      <circle cx={stations[lit].x} cy="116" r="5" fill={GOLD} />
      {at === 0 && <><Person x={30} y={86} scale={0.7} /><Person x={62} y={86} scale={0.7} fill={SOFT} /></>}
      {at === 1 && <Box x={116} y={60} w={124} text="Kindness, respect" size={10} />}
      {at === 2 && <><Clipboard x={168} y={30} /><W x={196} y={176} size={10.5}>Emergency contacts</W></>}
      {at === 3 && <><Box x={276} y={60} w={96} text="CBT or DBT" lit size={10} />{Array.from({ length: 10 }, (_, index) => <circle key={index} cx={70 + index * 20} cy="176" r="6" fill={index < 4 ? INK : SOFT} />)}</>}
      {at === 4 && <><Box x={236} y={46} w={128} text="Another option" lit size={10} /><Box x={236} y={80} w={128} text="Second opinion" size={10} /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function ShSignpost(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["999 or A&E; not sure? Call 111", "A GP can give advice and treatment", "You have the right to be respected", "Share only what you want to share"];
  const arms = [{ dir: -1, y: 30, t: "A&E" }, { dir: 1, y: 70, t: "111" }, { dir: -1, y: 110, t: "GP" }];
  const on = [[0, 1], [2], [], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Getting care" title="Care for your body, with respect" label="Getting care" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A signpost to A&E, 111 and a GP, and people treated with respect">
      <rect x="156" y="24" width="8" height="160" rx="2" fill={INK} /><ellipse cx="160" cy="186" rx="40" ry="5" fill={SOFT} />
      <g opacity={at >= 2 ? 0.4 : 1}>
        {arms.map((arm, index) => { const lit = on.includes(index); const d = arm.dir < 0 ? `M156 ${arm.y} H80 L66 ${arm.y + 14} L80 ${arm.y + 28} H156 Z` : `M164 ${arm.y} H240 L254 ${arm.y + 14} L240 ${arm.y + 28} H164 Z`; return <g key={arm.t}>
          <path d={d} fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
          <W x={arm.dir < 0 ? 112 : 206} y={arm.y + 18} size={11} fill={lit ? WHITE : TEXT}>{arm.t}</W>
        </g>; })}
      </g>
      {at === 1 && <Box x={250} y={140} w={104} text="Tetanus jab?" size={10} />}
      {at === 2 && <><Person x={60} y={182} scale={1} /><Person x={254} y={182} scale={1} fill={SOFT} /><HeartShape x={254} y={126} size={28} fill={GOLD} stroke={GOLD} width={2} /></>}
      {at === 3 && <><Person x={184} y={190} scale={0.8} /><Bubble x={252} y={128} text="I'd rather not say" width={116} /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function ShWave(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["The urge can pass with time", "Wait 5 minutes, then a little longer", "Talk, walk, music, or make something", "Breathe in 4, hold 4, out 4, wait 4", "A safety plan, made when calm"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Coping" title="Riding out the urge" label="Coping with urges" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An urge that rises and then falls over time, with things to do while it passes">
      <path d="M20 172 H300" stroke={LINE} strokeWidth="2" /><W x={300} y={188} size={10} anchor="end">Time</W>
      <path d="M20 160 C70 160, 92 64, 130 64 S190 160, 300 160" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" opacity={at === 3 ? 0.3 : 1} />
      {at === 0 && <><W x={130} y={50} size={11}>Urge</W><circle cx="240" cy="159" r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" /></>}
      {at === 1 && <><Clock x={252} y={62} r={20} hand={0.5} /><W x={252} y={102} size={10.5}>5 minutes</W><W x={252} y={118} size={10}>then longer</W></>}
      {at === 2 && <><Box x={196} y={36} w={54} text="Talk" /><Box x={256} y={36} w={54} text="Walk" /><Box x={196} y={70} w={54} text="Music" /><Box x={256} y={70} w={54} text="Create" /></>}
      {at === 3 && <g>
        <rect x="214" y="30" width="52" height="52" rx="6" fill={TINT} stroke={INK} strokeWidth="3" />
        <circle cx="240" cy="56" r="11" fill={INK} opacity=".85" className={still ? undefined : "lib-v2-breathe is-slow"} />
        <W x={240} y={22} size={10}>In 4</W><W x={272} y={60} size={10} anchor="start">Hold 4</W><W x={240} y={98} size={10}>Out 4</W><W x={208} y={60} size={10} anchor="end">Wait 4</W>
      </g>}
      {at === 4 && <><Clipboard x={212} y={30} w={56} h={70} /><W x={240} y={120} size={10.5}>Safety plan</W></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function ShJournal(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Feelings, situations, people, times", "Look back only when you feel safe", "A journal can show patterns", "Plan a safer response with someone", "Restrict or block triggering content"];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Patterns" title="Spotting your own patterns" label="Noticing triggers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week in a journal, with a pattern noticed and a plan for each trigger">
      {at === 0 && <g>
        <Box x={86} y={62} w={136} text="Feelings" lit /><Box x={234} y={62} w={136} text="Situations" lit />
        <Box x={86} y={106} w={136} text="People" lit /><Box x={234} y={106} w={136} text="Times of day" lit />
      </g>}
      {at === 1 && <><Box x={160} y={56} w={160} text="When you feel safe" lit /><Person x={160} y={172} scale={1.2} /></>}
      {at === 2 && <g>
        <W x={160} y={32} size={10.5}>This week</W>
        {days.map((day, index) => <g key={index}><rect x={22 + index * 40} y="44" width="34" height="74" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={39 + index * 40} y={136} size={10}>{day}</W></g>)}
        <path d="M79 100 H239" stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 5" />
        {[1, 3, 5].map(index => <circle key={index} cx={39 + index * 40} cy="100" r="7" fill={GOLD} />)}
      </g>}
      {at === 3 && <g>
        <Box x={84} y={66} w={122} text="Feeling sad" size={10} /><Arrow d="M150 66 H170" head="M164 60 L171 66 L164 72" /><Box x={236} y={66} w={122} text="Call a friend" lit size={10} />
        <Box x={84} y={116} w={122} text="Overwhelmed" size={10} /><Arrow d="M150 116 H170" head="M164 110 L171 116 L164 122" /><Box x={236} y={116} w={122} text="A safe space" lit size={10} />
      </g>}
      {at === 4 && <g>
        <rect x="74" y="26" width="64" height="120" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <circle cx="106" cy="84" r="20" fill="none" stroke={GOLD} strokeWidth="4" /><path d="M92 70 L120 98" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <Tags x={170} y={60} labels={["Restrict", "Block"]} lit={() => true} width={120} gap={36} />
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function ShHelplines(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Samaritans 116 123, free, any time", "Text SHOUT to 85258, any hour", "Harmless, Self Injury Support, Mind", "YoungMinds helpline for parents", "Keep seeing your GP alongside"];
  const left = [["Samaritans", "116 123"], ["Shout", "text 85258"], ["Childline", "0800 1111"]];
  const right = [["Harmless", "any age"], ["Self Injury", "Support"], ["Mind", "0300 123 3393"]];
  const litLeft = [[0], [1, 2], [], [], []][at], litRight = at === 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You do not have to face it alone" label="Charities and helplines" credit={crisisCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Helplines and self-harm charities around a person">
      {left.map(([top, bottom], index) => <Tile key={top} x={8} y={18 + index * 48} w={104} top={top} bottom={bottom} lit={litLeft.includes(index)} />)}
      {right.map(([top, bottom], index) => <Tile key={top} x={208} y={18 + index * 48} w={104} top={top} bottom={bottom} lit={litRight} />)}
      <Person x={160} y={124} scale={1.2} />
      {at === 0 && <Bubble x={160} y={40} text="Listening" width={84} />}
      {at === 3 && <Box x={160} y={178} w={196} text="YoungMinds Parents Helpline" lit size={10} />}
      {at === 4 && <Box x={160} y={178} w={110} text="Your GP" lit />}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function ShTwoChairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Your feelings are normal; stay calm", "Listen without judgement", "Be there; offer to go to the GP", "No promises, threats or pressure", "Get support for yourself too"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Family and friends" title="Supporting someone, and yourself" label="Supporting someone" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people sitting and talking, and a third chair for the supporter's own support">
      <path d="M60 110 V156 H112 M64 156 V186 M108 156 V186" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M260 110 V156 H208 M256 156 V186 M212 156 V186" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Person x={88} y={150} scale={1.2} fill={at === 0 ? SOFT : INK} />
      <Person x={232} y={150} scale={1.2} fill={at === 1 ? SOFT : INK} />
      {at === 0 && <Cloud x={232} y={62} s={22} />}
      {at === 1 && <Bubble x={132} y={56} text="How I feel" width={96} />}
      {at === 2 && <Bubble x={222} y={56} text="I'm here for you" width={124} />}
      {at === 3 && <g><Box x={150} y={36} w={118} text="Promises" /><Cross x={228} y={36} s={9} /><Box x={150} y={72} w={118} text="Pressure" /><Cross x={228} y={72} s={9} /></g>}
      {at === 4 && <g>
        <Person x={292} y={150} scale={0.9} fill={SOFT} /><HeartShape x={160} y={64} size={32} fill={GOLD} stroke={GOLD} width={2} />
      </g>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function ShSeasons(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Many people learn to cope and recover", "It takes time; try different ideas", "Someone to call, and two safe ways", "Treating the cause, such as depression", "Keep your safety plan up to date"];
  const dot = [[24, 184], [110, 146], [170, 118], [222, 110], [292, 54]][at];
  const leaves = [[46, 58], [74, 52], [60, 44], [50, 72], [72, 70]].slice(0, at + 1);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Recovery" title="Recovery takes time, and it happens" label="Recovery" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path winding gently uphill, and a small tree coming into leaf">
      <path d="M20 186 C60 170, 70 140, 110 146 S150 120, 170 118 S200 132, 222 110 S260 70, 296 52" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M60 106 V58 M60 78 L46 64 M60 70 L74 56" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {leaves.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="8" fill={at === 4 ? GOLD : SOFT} />)}
      <circle cx={dot[0]} cy={dot[1]} r="9" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      {at === 0 && <Box x={244} y={160} w={128} text="Many recover" size={10} />}
      {at === 1 && <Clock x={250} y={160} r={18} hand={2} />}
      {at === 2 && <><Box x={240} y={146} w={130} text="Someone to call" size={10} /><Box x={240} y={176} w={130} text="Two safe ways" lit size={10} /></>}
      {at === 3 && <Box x={244} y={160} w={128} text="Treat the cause" lit size={10} />}
      {at === 4 && <><Sun x={250} y={34} r={12} /><Box x={244} y={160} w={120} text="Safety plan" lit size={10} /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

// ==== Narcolepsy =============================================================================================

function NarcSwitch(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const caps = ["The sleep-wake cycle is not regulated", "Broken nights; REM sleep comes fast", "About 1 in 2,500 people", "Lifelong, and different for everyone"];
  const lever = (deg: number) => { const a = (deg - 90) * Math.PI / 180; return `M96 104 L${96 + 46 * Math.cos(a)} ${104 + 46 * Math.sin(a)}`; };
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When the sleep switch misfires" label="What narcolepsy is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A dial between sleep and wake with a switch that does not hold its place">
      <circle cx="96" cy="104" r="70" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M96 34 A70 70 0 0 0 96 174 Z" fill={SOFT} />
      <circle cx="96" cy="104" r="70" fill="none" stroke={INK} strokeWidth="3" />
      <Moon x={58} y={104} r={12} /><Sun x={134} y={104} r={9} />
      <W x={50} y={24} size={10.5}>Sleep</W><W x={142} y={24} size={10.5}>Wake</W>
      {at === 0 ? <><path d={`${lever(-35)} ${lever(35)}`} stroke={GOLD} strokeWidth="4" strokeDasharray="5 5" strokeLinecap="round" />{!still && <circle cx="96" cy="104" r="18" fill="none" stroke={GOLD} strokeWidth="2" className="lib-why-pulse" />}</>
        : <path d={lever(at === 1 ? -40 : 0)} stroke={INK} strokeWidth="5" strokeLinecap="round" />}
      <circle cx="96" cy="104" r="8" fill={INK} />
      {at === 0 && <g>
        <Box x={250} y={70} w={104} text="Sleep" /><Box x={250} y={138} w={104} text="Wake" />
        <path d="M250 86 V122 M244 92 L250 85 L256 92 M244 116 L250 123 L256 116" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>}
      {at === 1 && <g>
        <W x={194} y={56} size={10} anchor="start">Night</W>
        <path d="M194 72 H206 V122 H218 V72 H228 V122 H240 V86 H250 V122 H262 V72 H274 V122 H286 V80 H306" stroke={INK} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        <W x={250} y={146} size={10.5}>Many awakenings</W>
      </g>}
      {at === 2 && <><W x={250} y={86} size={18}>1 in 2,500</W><W x={250} y={106} size={10.5}>people</W><W x={250} y={136} size={12}>About 30,000</W><W x={250} y={152} size={10}>in the UK</W></>}
      {at === 3 && <><Box x={250} y={52} w={100} text="Lifelong" lit /><Person x={214} y={150} scale={0.8} /><Person x={250} y={150} scale={0.8} fill={SOFT} /><Person x={286} y={150} scale={0.8} /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function NarcDayNight(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["An irresistible urge to sleep by day", "Strong feelings bring sudden weakness", "Vivid dreams; sleep paralysis passes", "Routine tasks done not fully awake"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="Sleepiness, cataplexy and the night" label="Symptoms of narcolepsy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day and night strip, with sleepiness by day, weakness with strong feelings, and dreams at night">
      <rect x="14" y="16" width="292" height="36" rx="18" fill={WHITE} stroke={INK} strokeWidth="2" />
      <path d="M160 16 H288 A18 18 0 0 1 288 52 H160 Z" fill={INK} />
      <Sun x={44} y={34} r={8} /><Moon x={274} y={34} r={10} fill={WHITE} />
      <W x={100} y={38} size={11}>Day</W><W x={220} y={38} size={11} fill={WHITE}>Night</W>
      {at === 0 && <rect x="12" y="14" width="150" height="40" rx="20" fill="none" stroke={GOLD} strokeWidth="3" />}
      {at === 2 && <rect x="158" y="14" width="150" height="40" rx="20" fill="none" stroke={GOLD} strokeWidth="3" />}
      {at === 0 && <g>
        <Person x={96} y={170} scale={1.2} />
        <W x={124} y={110} size={12}>z</W><W x={138} y={98} size={14}>z</W><W x={154} y={84} size={16}>z</W>
        <Box x={236} y={100} w={120} text="Sleep attacks" /><Box x={236} y={140} w={120} text="Micro-sleeps" />
      </g>}
      {at === 1 && <g>
        <circle cx="100" cy="112" r="34" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M86 104 q4 -5 8 0 M106 104 q4 -5 8 0" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M84 120 Q100 136 116 120" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
        <W x={100} y={170} size={10.5}>Under 2 minutes</W>
        <Tags x={186} y={72} labels={["Laughter", "Anger", "Surprise"]} lit={() => true} width={110} gap={34} />
      </g>}
      {at === 2 && <g><Cloud x={100} y={110} s={28} /><Box x={236} y={96} w={124} text="Sleep paralysis" /><W x={236} y={130} size={10.5}>Scary, but harmless</W></g>}
      {at === 3 && <g><Cup x={76} y={118} /><Person x={140} y={170} scale={1.1} fill={SOFT} /><Box x={236} y={100} w={124} text="Routine tasks" /><Box x={236} y={140} w={124} text="Hard to focus" /></g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function NarcMessenger(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Cells making hypocretin are lost", "Generally thought to be autoimmune", "Generally does not run in families", "A brain disease, not a lack of effort"];
  const cells = Array.from({ length: 6 }, (_, index) => { const a = index * Math.PI / 3; return { x: 68 + 16 * Math.cos(a), y: 64 + 16 * Math.sin(a), lost: index === 1 || index === 3 || index === 4 }; });
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="The missing wake-up messenger" label="Why narcolepsy happens" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A brain where some of the cells that make a wake-up messenger are lost, so fewer messages get through">
      <g transform="translate(-28 6) scale(.6)"><path d="M160 34 C126 14, 78 30, 80 72 C58 88, 62 132, 92 144 C98 176, 140 184, 160 160 C180 184, 222 176, 228 144 C258 132, 262 88, 240 72 C242 30, 194 14, 160 34 Z" fill={WHITE} stroke={INK} strokeWidth="6" strokeLinejoin="round" /></g>
      {cells.map((cell, index) => <circle key={index} cx={cell.x} cy={cell.y} r="6" fill={cell.lost ? SOFT : INK} opacity={cell.lost ? 0.35 : 1} />)}
      <circle cx="68" cy="64" r="6" fill={INK} />
      <W x={180} y={50} size={10.5}>Hypocretin</W>
      {Array.from({ length: 6 }, (_, index) => <circle key={index} cx={136 + index * 16} cy="66" r="4.5" fill={index % 3 === 0 ? GOLD : LINE} />)}
      <Box x={268} y={66} w={80} text="Awake" />
      {at === 0 && <W x={160} y={152} size={11}>Also called orexin</W>}
      {at === 1 && <g>
        <Box x={100} y={152} w={110} text="Immune system" lit size={10} />
        <Arrow d="M178 152 H160" head="M166 146 L159 152 L166 158" />
        <Box x={240} y={152} w={118} text="Flu-like illness" size={10} />
      </g>}
      {at === 2 && <><Person x={70} y={176} scale={0.7} /><Person x={104} y={176} scale={0.7} /><Person x={138} y={176} scale={0.7} fill={SOFT} /><Box x={244} y={154} w={116} text="Not usually" /></>}
      {at === 3 && <><Box x={100} y={152} w={124} text="Brain disease" lit size={10} /><Box x={228} y={152} w={112} text="Lack of effort" size={10} /><Cross x={298} y={152} s={9} /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function NarcSleepStudy(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Bring a sleep diary to your GP", "Epworth: 8 situations, each 0 to 3", "A night's study, then daytime naps", "Sometimes a test of spinal fluid", "Type 1 is narcolepsy with cataplexy"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diagnosis" title="What a sleep study shows" label="Sleep studies and diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A sleep diary, a sleepiness questionnaire and an overnight sleep study">
      {at === 0 && <g>
        <rect x="34" y="30" width="104" height="136" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="34" y="30" width="10" height="136" fill={INK} />
        <W x={91} y={54} size={10.5}>Sleep diary</W>
        {[0, 1, 2, 3, 4].map(index => <path key={index} d={`M56 ${72 + index * 18} H${126 - (index % 2) * 18}`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}
        <Box x={240} y={84} w={90} text="GP" lit /><Person x={240} y={170} scale={1} />
      </g>}
      {at === 1 && <g>
        <W x={160} y={30} size={10.5}>8 everyday situations</W>
        {Array.from({ length: 8 }, (_, index) => { const cx = 44 + (index % 4) * 77, y = 44 + Math.floor(index / 4) * 54; return <g key={index}>
          <rect x={cx - 28} y={y} width="56" height="40" rx="8" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={cx} y={y + 25} size={10}>0 to 3</W>
        </g>; })}
      </g>}
      {at === 2 && <g>
        <rect x="24" y="94" width="8" height="58" rx="2" fill={INK} /><rect x="28" y="134" width="140" height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" />
        <circle cx="52" cy="124" r="9" fill={INK} /><ellipse cx="102" cy="128" rx="42" ry="8" fill={SOFT} />
        <path d="M60 116 C100 70, 160 70, 196 74" stroke={GOLD} strokeWidth="2" fill="none" />
        <rect x="196" y="36" width="108" height="72" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M204 72 l8 -10 l8 18 l8 -14 l8 10 l8 -6 l8 12 l8 -16 l8 10 l8 -4 l8 6 l8 -8" stroke={INK} strokeWidth="2" fill="none" strokeLinejoin="round" />
        {Array.from({ length: 5 }, (_, index) => <rect key={index} x={200 + index * 21} y="122" width="16" height="16" rx="3" fill={SOFT} />)}
        <W x={252} y={158} size={10}>Next day: naps</W><W x={98} y={172} size={10.5}>Overnight</W>
      </g>}
      {at === 3 && <g>
        <rect x="140" y="40" width="40" height="88" rx="14" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="136" y="32" width="48" height="12" rx="3" fill={INK} />
        <rect x="144" y="104" width="32" height="20" rx="8" fill={SOFT} />
        <W x={160} y={150} size={11}>Low hypocretin</W><W x={160} y={166} size={10}>a strong sign</W>
      </g>}
      {at === 4 && <><Box x={100} y={84} w={124} text="Type 1" lit /><Box x={224} y={84} w={124} text="Type 2" /><W x={100} y={118} size={10}>With cataplexy</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function NarcMedMix(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Chosen for your main symptom", "Wake-promoting, such as modafinil", "Some for cataplexy; some for both", "Often several tried; GP shares care", "Tell your doctor about side effects"];
  const jars = [{ x: 70, t: "Sleepiness" }, { x: 160, t: "Cataplexy" }, { x: 250, t: "Both" }];
  const on = [[0, 1, 2], [0], [1, 2], [0, 1, 2], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Finding the right mix of medicines" label="Medicines for narcolepsy" credit={medCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three medicine jars: for sleepiness, for cataplexy and for both">
      <g opacity={at >= 3 ? 0.45 : 1}>
        {jars.map((jar, index) => { const lit = on.includes(index); return <g key={jar.t}>
          <rect x={jar.x - 30} y="76" width="60" height="12" rx="3" fill={lit ? GOLD : SOFT} />
          <rect x={jar.x - 28} y="86" width="56" height="62" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          <Pill x={jar.x} y={117} fill={lit ? GOLD : INK} />
          <W x={jar.x} y={168} size={10.5}>{jar.t}</W>
        </g>; })}
      </g>
      {at === 0 && <W x={160} y={44} size={11}>For your main symptom</W>}
      {at === 1 && <Box x={70} y={44} w={116} text="Wake-promoting" lit size={10} />}
      {at === 2 && <><Box x={130} y={44} w={116} text="Fluoxetine" size={10} /><Box x={250} y={44} w={116} text="Pitolisant" size={10} /></>}
      {at === 3 && <g>
        <Box x={84} y={40} w={104} text="Specialist" lit /><Box x={236} y={40} w={80} text="GP" lit />
        <path d="M142 34 H190 M184 29 L191 34 L184 39 M190 46 H142 M148 41 L141 46 L148 51" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>}
      {at === 4 && <g>
        <rect x="128" y="12" width="52" height="56" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[0, 1, 2].map(index => <path key={index} d={`M138 ${28 + index * 12} H170`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}
        <W x={192} y={44} size={10.5} anchor="start">Side effects?</W>
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function NarcNapClock(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["A short nap can leave you refreshed", "15 to 30 minutes, 2pm to 4pm", "Quiet, cool and dim; a mask helps", "Naps before long drives"];
  const point = (deg: number) => { const a = deg * Math.PI / 180; return `${100 + 72 * Math.sin(a)} ${106 - 72 * Math.cos(a)}`; };
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Planned naps" title="Planned naps, not a battle" label="Planned naps" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock with the early afternoon marked for a planned nap">
      <circle cx="100" cy="106" r="72" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d={`M100 106 L${point(60)} A72 72 0 0 1 ${point(120)} Z`} fill={at === 1 ? GOLD : SOFT} opacity=".8" />
      <ellipse cx="128" cy="106" rx="13" ry="7" fill={WHITE} stroke={INK} strokeWidth="2" />
      <W x={100} y={48} size={10}>12</W><W x={160} y={110} size={10}>3</W><W x={100} y={172} size={10}>6</W><W x={40} y={110} size={10}>9</W>
      <circle cx="100" cy="106" r="5" fill={INK} />
      {at === 0 && <g>
        <Box x={250} y={74} w={110} text="A short nap" lit />
        <Arrow d="M250 92 V118" head="M244 111 L250 118 L256 111" />
        <Box x={250} y={136} w={110} text="Refreshed" />
      </g>}
      {at === 1 && <><W x={250} y={86} size={20}>15 to 30</W><W x={250} y={106} size={10.5}>minutes</W><W x={250} y={144} size={13}>2pm to 4pm</W></>}
      {at === 2 && <g>
        <path d="M206 80 C206 64, 246 64, 250 76 C254 64, 294 64, 294 80 C294 96, 254 98, 250 86 C246 98, 206 96, 206 80 Z" fill={INK} />
        <path d="M206 78 H196 M294 78 H304" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <W x={250} y={122} size={10.5}>Quiet, cool, dim</W>
        <circle cx="236" cy="146" r="6" fill={SOFT} /><circle cx="264" cy="146" r="6" fill={SOFT} />
      </g>}
      {at === 3 && <g>
        <path d="M250 120 V176" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <rect x="222" y="60" width="56" height="60" rx="8" fill={INK} /><ellipse cx="250" cy="90" rx="16" ry="9" fill={WHITE} />
        <path d="M182 172 V160 L194 150 H222 L232 160 V172 Z" fill={INK} /><circle cx="194" cy="174" r="5" fill={TEXT} /><circle cx="222" cy="174" r="5" fill={TEXT} />
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function NarcWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Same bed and wake times, all week", "Dark, quiet and comfortable", "No caffeine at night; avoid alcohol", "Morning light; exercise, not late", "Avoid tasks risky if you fall asleep"];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sleep habits" title="A steady routine for steadier days" label="Sleep habits" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week with the same bedtime every night, and the habits that help sleep">
      {at === 0 && days.map((day, index) => { const x = 22 + index * 40; const weekend = index > 4; return <g key={index}>
        <rect x={x} y="30" width="32" height="120" rx="6" fill={WHITE} stroke={weekend ? GOLD : INK} strokeWidth={weekend ? 3 : 2} />
        <rect x={x + 2} y="100" width="28" height="48" rx="4" fill={INK} />
        <W x={x + 16} y={168} size={10}>{day}</W>
      </g>; })}
      {at === 1 && <g><rect x="40" y="24" width="240" height="150" rx="10" fill={INK} opacity=".12" /><Moon x={240} y={60} r={16} /><Bed x={60} y={140} w={200} /></g>}
      {at === 2 && <g>
        <Cup x={106} y={80} /><Cross x={110} y={80} s={18} />
        <path d="M206 60 H234 L228 100 H212 Z" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><Cross x={220} y={80} s={18} />
        <W x={110} y={128} size={10.5}>Caffeine at night</W><W x={220} y={128} size={10.5}>Alcohol</W>
      </g>}
      {at === 3 && <><Sun x={90} y={64} r={16} /><W x={90} y={118} size={10.5}>Morning light</W><Box x={222} y={46} w={120} text="Not late at night" size={10} /><Person x={222} y={150} scale={1.1} /></>}
      {at === 4 && <><Box x={160} y={60} w={200} text="Safe at home and work" lit /><Person x={160} y={170} scale={1.2} /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function NarcClinicPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Referred to a specialist sleep centre", "Your symptoms, and when they began", "A mix of medicine and lifestyle", "Shared with your GP, for the long term", "Talking therapies can help you cope"];
  const stops = [{ x: 34, y: 150, t: "GP", below: true }, { x: 100, y: 96, t: "Sleep centre", below: false }, { x: 164, y: 150, t: "Your history", below: true }, { x: 228, y: 96, t: "Treatment", below: false }, { x: 290, y: 150, t: "Review", below: true }];
  const on = [[0, 1], [2], [3], [4], [3]][at];
  const dot = stops[[1, 2, 3, 4, 3][at]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The sleep clinic" title="Your path through the sleep clinic" label="The sleep clinic" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A winding path from the GP to the sleep centre, treatment and long-term review">
      <path d="M34 150 C60 150, 70 96, 100 96 S140 150, 164 150 S200 96, 228 96 S270 150, 290 150" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
      {stops.map((stop, index) => <g key={stop.t}>
        <circle cx={stop.x} cy={stop.y} r="11" fill={on.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="3" />
        <W x={stop.x} y={stop.below ? stop.y + 28 : stop.y - 18} size={10}>{stop.t}</W>
      </g>)}
      <circle cx={dot.x} cy={dot.y} r="5" fill={GOLD} />
      {at === 0 && <Box x={160} y={34} w={190} text="Specialist sleep centre" />}
      {at === 1 && <Box x={160} y={34} w={140} text="A symptom diary" lit />}
      {at === 2 && <><Box x={110} y={34} w={100} text="Medicine" lit /><W x={167} y={39} size={16}>+</W><Box x={224} y={34} w={100} text="Lifestyle" lit /></>}
      {at === 3 && <><Box x={160} y={34} w={160} text="Specialist and GP" lit /><circle cx="290" cy="150" r="17" fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 5" /></>}
      {at === 4 && <Box x={160} y={34} w={150} text="Talking therapies" lit />}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function NarcCar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tell the DVLA; fines up to £1,000", "Controlled for at least 3 months", "A licence for 1, 2 or 3 years", "Stricter rules for bus and lorry", "Many people with narcolepsy drive"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Driving" title="Driving with narcolepsy: the rules" label="Driving" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A car on the road, with the DVLA rules for driving">
      <rect x="0" y="150" width="320" height="34" fill={SOFT} opacity=".45" /><path d="M10 167 H310" stroke={WHITE} strokeWidth="3" strokeDasharray="14 10" />
      <path d="M40 160 V146 L56 132 H100 L116 146 V160 Z" fill={INK} /><path d="M60 136 H96 L106 146 H52 Z" fill={WHITE} opacity=".7" />
      <circle cx="58" cy="162" r="7" fill={TEXT} /><circle cx="100" cy="162" r="7" fill={TEXT} />
      {at === 0 && <g>
        <rect x="200" y="44" width="96" height="60" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M200 44 L248 74 L296 44" stroke={INK} strokeWidth="2" fill="none" />
        <W x={248} y={96} size={11}>DVLA</W>
      </g>}
      {at === 1 && <g>
        {[0, 1, 2].map(index => <g key={index}><rect x={192 + index * 42} y="48" width="36" height="44" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x={192 + index * 42} y="48" width="36" height="9" rx="3" fill={GOLD} /><W x={210 + index * 42} y={84} size={13}>{String(index + 1)}</W></g>)}
        <W x={252} y={116} size={10.5}>At least 3 months</W>
      </g>}
      {at === 2 && <g>
        <rect x="192" y="40" width="116" height="70" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={250} y={62} size={11}>Licence</W>
        {[0, 1, 2].map(index => <g key={index}><circle cx={224 + index * 26} cy="88" r="10" fill={INK} /><W x={224 + index * 26} y={92} size={10} fill={WHITE}>{String(index + 1)}</W></g>)}
      </g>}
      {at === 3 && <g>
        <W x={250} y={46} size={10.5}>Bus or lorry</W>
        <rect x="192" y="60" width="116" height="56" rx="8" fill={INK} />
        {[0, 1, 2, 3].map(index => <rect key={index} x={200 + index * 26} y="68" width="20" height="16" rx="2" fill={WHITE} />)}
        <circle cx="214" cy="118" r="7" fill={TEXT} /><circle cx="286" cy="118" r="7" fill={TEXT} />
      </g>}
      {at === 4 && <g>
        <path d="M248 140 V84" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <rect x="220" y="40" width="56" height="48" rx="8" fill={INK} /><ellipse cx="248" cy="64" rx="15" ry="8" fill={WHITE} />
        <Sun x={150} y={60} r={12} />
      </g>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function NarcDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["It does not affect intelligence", "Telling your employer helps", "Long-term means 12 months or more", "Access to Work: no need to pay back", "Extra exam time; Students' Allowance"];
  const on = [[], [0, 1, 2], [], [3], [4]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Work and study" title="Adjustments that help work and study" label="Work and study" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk with a laptop and a recorder, and the adjustments that help at work and study">
      <path d="M14 160 H186 M28 160 V190 M172 160 V190" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <rect x="40" y="120" width="64" height="38" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M34 160 H110" stroke={INK} strokeWidth="4" />
      <rect x="128" y="144" width="26" height="14" rx="3" fill={INK} /><circle cx="148" cy="151" r="3" fill={GOLD} />
      <Tags x={200} y={20} labels={["Naps", "Recording", "Flexible hours", "Access to Work", "Extra exam time"]} lit={index => on.includes(index)} width={110} gap={32} />
      {at === 0 && <><Box x={100} y={40} w={150} text="Concentration" /><Box x={100} y={80} w={150} text="Intelligence" lit /><W x={100} y={108} size={10}>Not directly affected</W></>}
      {at === 1 && <Bubble x={100} y={60} text="I have narcolepsy" width={140} />}
      {at === 2 && <g>
        <rect x="74" y="52" width="52" height="58" rx="5" fill={INK} /><rect x="74" y="52" width="52" height="12" rx="4" fill={GOLD} />
        <W x={100} y={88} size={16} fill={WHITE}>12</W><W x={100} y={102} size={9.5} fill={WHITE}>months</W>
      </g>}
      {at === 3 && <Box x={100} y={60} w={150} text="A grant for support" size={10} />}
      {at === 4 && <Box x={100} y={60} w={150} text="Students' Allowance" lit size={10} />}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function NarcCloudLift(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Frustration and low mood can happen", "Real feelings, not a mental illness", "Talking openly eases isolation", "Sad for weeks? See a GP", "111 mental health option, or 116 123"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood" title="Mood, confidence and narcolepsy" label="Mood and narcolepsy" credit={at === 4 ? crisisCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with a cloud overhead that lifts as they talk and get support">
      <Person x={100} y={170} scale={1.3} />
      {at === 0 && <><Cloud x={100} y={66} s={26} /><Tags x={190} y={40} labels={["Frustration", "Low mood", "Confidence"]} lit={() => false} width={116} gap={36} /></>}
      {at === 1 && <><Cloud x={100} y={60} s={22} opacity={0.5} /><Box x={246} y={70} w={124} text="Brain condition" size={10} /><Box x={246} y={112} w={124} text="Real feelings" lit size={10} /></>}
      {at === 2 && <><Person x={196} y={170} scale={1.3} fill={SOFT} /><HeartShape x={148} y={74} size={30} fill={GOLD} stroke={GOLD} width={2} /><Cloud x={276} y={44} s={12} opacity={0.4} /></>}
      {at === 3 && <g>
        <Cloud x={100} y={66} s={26} />
        {Array.from({ length: 8 }, (_, index) => <rect key={index} x={186 + index * 15} y="40" width="11" height="24" rx="3" fill={SOFT} />)}
        <W x={244} y={90} size={10.5}>Weeks or months</W><Box x={244} y={128} w={80} text="GP" lit />
      </g>}
      {at === 4 && <><Tile x={194} y={30} w={112} h={44} top="111" bottom="mental health" lit /><Tile x={194} y={86} w={112} h={44} top="116 123" bottom="Samaritans" lit /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function NarcCircle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Narcolepsy UK, for people and families", "Helpline: 0345 450 0394", "Events and conferences to meet others", "Family and friends can learn about it", "Call 111, or Samaritans on 116 123"];
  const seats = [{ x: 52, y: 146 }, { x: 92, y: 108 }, { x: 160, y: 96 }, { x: 228, y: 108 }, { x: 268, y: 146 }];
  const table = ["Narcolepsy UK", "Helpline", "Conference", "Family, friends", "Samaritans 116 123"][at];
  const fill = (index: number) => at === 2 ? INK : at === 3 ? (index === 2 ? INK : SOFT) : at === 4 ? (index === 2 ? INK : SOFT) : (index % 2 === 0 ? INK : SOFT);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="Finding others who understand" label="Support and charities" credit={at === 4 ? crisisCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="People around a table, meeting others with narcolepsy">
      {seats.map((seat, index) => <Person key={index} x={seat.x} y={seat.y} scale={0.75} fill={fill(index)} />)}
      <ellipse cx="160" cy="140" rx="76" ry="28" fill={INK} />
      <W x={160} y={144} size={11} fill={WHITE}>{table}</W>
      {at === 1 && <Phone x={262} y={44} lit />}
      {at === 2 && <Sun x={262} y={42} r={12} />}
      {at === 4 && <Box x={160} y={34} w={120} text="NHS 111" lit />}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

export function DuskPieceView({ piece, ...props }: { piece: DuskPiece } & PieceProps) {
  switch (piece) {
    case "peri-stages": return <PeriStages {...props} />;
    case "peri-feelings": return <PeriFeelings {...props} />;
    case "peri-two-lines": return <PeriTwoLines {...props} />;
    case "peri-notepad": return <PeriNotepad {...props} />;
    case "peri-hrt-forms": return <PeriHrtForms {...props} />;
    case "peri-cbt-triangle": return <PeriCbtTriangle {...props} />;
    case "peri-signpost": return <PeriSignpost {...props} />;
    case "peri-cool-room": return <PeriCoolRoom {...props} />;
    case "peri-habits": return <PeriHabits {...props} />;
    case "peri-desk": return <PeriDesk {...props} />;
    case "peri-sofa": return <PeriSofa {...props} />;
    case "peri-help-phone": return <PeriHelpPhone {...props} />;
    case "sh-weather": return <ShWeather {...props} />;
    case "sh-stack": return <ShStack {...props} />;
    case "sh-window": return <ShWindow {...props} />;
    case "sh-help-buttons": return <ShHelpButtons {...props} />;
    case "sh-letter": return <ShLetter {...props} />;
    case "sh-care-path": return <ShCarePath {...props} />;
    case "sh-signpost": return <ShSignpost {...props} />;
    case "sh-wave": return <ShWave {...props} />;
    case "sh-journal": return <ShJournal {...props} />;
    case "sh-helplines": return <ShHelplines {...props} />;
    case "sh-two-chairs": return <ShTwoChairs {...props} />;
    case "sh-seasons": return <ShSeasons {...props} />;
    case "narc-switch": return <NarcSwitch {...props} />;
    case "narc-day-night": return <NarcDayNight {...props} />;
    case "narc-messenger": return <NarcMessenger {...props} />;
    case "narc-sleep-study": return <NarcSleepStudy {...props} />;
    case "narc-med-mix": return <NarcMedMix {...props} />;
    case "narc-nap-clock": return <NarcNapClock {...props} />;
    case "narc-week": return <NarcWeek {...props} />;
    case "narc-clinic-path": return <NarcClinicPath {...props} />;
    case "narc-car": return <NarcCar {...props} />;
    case "narc-desk": return <NarcDesk {...props} />;
    case "narc-cloud-lift": return <NarcCloudLift {...props} />;
    case "narc-circle": return <NarcCircle {...props} />;
  }
}
