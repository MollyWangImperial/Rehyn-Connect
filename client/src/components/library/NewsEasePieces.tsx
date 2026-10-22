import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { EASE_PIECES, type EasePiece } from "@/content/ease-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, HeartShape, INK, LINE, Person, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Stress and Grief pages' own pieces (content/ease-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Mind & mood pieces. Each is steered by the card's sections; pictures are
// calm and hopeful and never show anyone's own thoughts, body or harm.

export const isEasePiece = (piece: NewsPiece): piece is EasePiece => (EASE_PIECES as readonly string[]).includes(piece);

// ---- Shared parts -------------------------------------------------------------------------------------------

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5, opacity = 1 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number; opacity?: number }) =>
  <g opacity={opacity}><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 204, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Phone = ({ x, y, color = INK }: { x: number; y: number; color?: string }) =>
  <g fill="none" stroke={color} strokeWidth="2.5"><rect x={x - 7} y={y - 11} width="14" height="22" rx="3" /><circle cx={x} cy={y + 6} r="1.6" fill={color} /></g>;
const Cup = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 12} y={y - 13} width="24" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 12} ${y - 7} h5 a6 6 0 0 1 0 12 h-5`} fill="none" stroke={INK} strokeWidth="2.5" /></g>;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** A battery on its side, `level` of 4 cells full. */
const Battery = ({ x, y, level, gold = false }: { x: number; y: number; level: number; gold?: boolean }) =>
  <g><rect x={x} y={y} width="72" height="34" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x + 72} y={y + 10} width="6" height="14" rx="2" fill={INK} />
    {Array.from({ length: 4 }, (_, index) => <rect key={index} x={x + 6 + index * 16} y={y + 6} width="12" height="22" rx="2" fill={index < level ? (gold ? GOLD : INK) : LINE} />)}</g>;
/** A speech bubble centred on (x, y) with its tail to the lower left, or the lower right. */
const Speech = ({ x, y, w, right = false, children }: { x: number; y: number; w: number; right?: boolean; children: ReactNode }) =>
  <g><rect x={x - w / 2} y={y - 16} width={w} height="32" rx="14" fill={WHITE} stroke={INK} strokeWidth="2" />
    <path d={right ? `M${x + w / 2 - 18} ${y + 15} l8 12 l-18 -12` : `M${x - w / 2 + 18} ${y + 15} l-8 12 l18 -12`} fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />{children}</g>;

// ==== Stress and burnout ====================================================================================

function StrPressureLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The body's reaction to pressure", "Hormones rise, then return to normal", "A little stress can help you focus", "Stressed all the time can be a problem", "Common, and support is available"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Pressure, and how the body responds" label="What stress is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A line rising under pressure and settling again, and a line that stays up">
      <path d="M20 140 H300" stroke={LINE} strokeWidth="3" /><W x={300} y={156} size={10} anchor="end">Time</W>
      <path d="M90 38 V140" stroke={GOLD} strokeWidth="2" strokeDasharray="4 5" /><W x={90} y={28} size={10.5}>Pressure</W>
      <path d="M20 128 H80 C102 128, 108 56, 130 56 S158 128, 186 128 H300" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" opacity={at === 3 ? 0.25 : 1} />
      {at === 3 && <><path d="M20 128 H80 C102 128, 108 56, 130 56 H300" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" /><W x={236} y={44} size={10.5}>Stress all the time</W></>}
      {at === 1 && <><Box x={244} y={64} w={96} text="Adrenaline" lit /><Box x={244} y={96} w={96} text="Cortisol" lit /></>}
      {at === 2 && <><circle cx="130" cy="56" r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" /><Box x={244} y={64} w={110} text="Get things done" /><Box x={244} y={96} w={110} text="Focus" /></>}
      {at === 4 && <><Box x={96} y={174} w={108} text="Talk to a GP" lit /><Box x={216} y={174} w={108} text="Refer yourself" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function StrSignsTabs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Headaches, tension, a faster heartbeat", "Hard to focus, worried, irritable", "Changes in sleep, eating and drinking", "Not always easy to recognise", "Worried about symptoms? See a GP"];
  const lists = [
    ["Headaches", "Muscle tension", "Stomach problems", "Faster heartbeat"],
    ["Hard to concentrate", "Constant worry", "Irritable or tearful", "Racing thoughts"],
    ["Sleep too much or too little", "Eat too much or too little", "Drink or smoke more", "See people less"],
    ["Different for everyone", "Sleep and memory", "Eating habits", "Less exercise"],
    ["Worried? See a GP", "Immediate help: 999 or A&E"],
  ][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The signs" title="Body, mind and habits: the signs" label="Signs of stress" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three kinds of sign: in the body, in the mind and mood, and in what you do">
      {["Body", "Mind and mood", "What you do"].map((tab, index) => <Box key={tab} x={58 + index * 102} y={24} w={94} text={tab} lit={at === index} />)}
      <Person x={62} y={152} scale={1.5} fill={at === 3 ? SOFT : INK} />
      {at === 0 && [100, 140, 160].map(y => <circle key={y} cx="62" cy={y} r="5" fill={GOLD} stroke={WHITE} strokeWidth="2" />)}
      {at === 1 && <circle cx="62" cy="107" r="24" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      {at === 2 && <Moon x={106} y={76} r={9} fill={GOLD} />}
      {at === 3 && <W x={100} y={84} size={20} fill={INK}>?</W>}
      <Tags x={128} y={58} labels={lists} lit={() => at === 4} width={180} gap={32} />
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function StrPressureRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Causes vary from person to person", "Work, family, money, health and more", "Even happy changes can bring stress", "Loss of control is a main cause", "Knowing the cause helps you manage it"];
  const spots = [[64, 46], [160, 30], [256, 46], [56, 112], [264, 112]];
  const labels = at === 2 ? ["New home", "A baby", "A wedding"] : ["Work", "Family", "Money", "Health", "Housing"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The causes" title="Where the pressure comes from" label="What causes stress" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The pressures around a person: work, family, money, health and housing">
      {at === 0 ? <>
        {[{ x: 90, r: 6 }, { x: 160, r: 14 }, { x: 230, r: 9 }].map((p, index) => <g key={p.x}><Person x={p.x} y={160} scale={1.1} fill={index === 1 ? INK : SOFT} /><circle cx={p.x} cy={96 - p.r} r={p.r} fill={GOLD} /></g>)}
      </> : <>
        {labels.map((label, index) => <g key={label} opacity={at === 3 || (at === 4 && index > 0) ? 0.4 : 1}>
          <path d={`M${spots[index][0]} ${spots[index][1]} L160 118`} stroke={LINE} strokeWidth="2.5" />
          <Box x={spots[index][0]} y={spots[index][1]} w={92} text={label} lit={at === 4 && index === 0} />
        </g>)}
        {at === 3 && <circle cx="160" cy="128" r="46" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="8 8" />}
        <Person x={160} y={150} scale={1.3} />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function StrBatteries(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Physical and emotional exhaustion", "Stress: too much. Burnout: empty", "Work-related, not a medical condition", "Drained, detached, withdrawing", "Recovery is possible; it takes time"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Burnout" title="When stress turns to burnout" label="Burnout" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A battery running down from full to empty, and charging again">
      {at === 0 && <>
        {[4, 2, 0].map((level, index) => <Battery key={level} x={22 + index * 100} y={56} level={level} />)}
        <Arrow d="M40 122 H284" head="M276 115 L284 122 L276 129" />
        <W x={160} y={150} size={10.5}>It can build up gradually</W>
      </>}
      {at === 1 && <>
        <Battery x={44} y={60} level={1} /><W x={80} y={120} size={11.5}>Stress</W><W x={80} y={138} size={10}>Too much</W>
        <Battery x={200} y={60} level={0} /><W x={236} y={120} size={11.5}>Burnout</W><W x={236} y={138} size={10}>Nothing left to give</W>
      </>}
      {at === 2 && <>
        <W x={62} y={70} size={11}>WHO: three parts</W><Battery x={24} y={82} level={0} />
        <Tags x={140} y={50} labels={["Exhausted", "Distant from the job", "Less done at work"]} lit={() => false} width={168} gap={36} />
      </>}
      {at === 3 && <>
        <Battery x={24} y={82} level={1} />
        <Tags x={140} y={36} labels={["Tired and drained", "Losing motivation", "Withdrawing", "Sleep or appetite change"]} lit={() => false} width={168} gap={32} />
      </>}
      {at === 4 && <>
        <Battery x={110} y={56} level={3} gold />
        <path d="M188 73 H222 M222 63 V83 M222 66 H236 M222 80 H236" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" className={still ? undefined : "lib-why-pulse"} />
        <Box x={160} y={134} w={160} text="Deal with the cause" lit />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function StrSortSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Sort worries, plan for what you can", "Small targets, one at a time", "Time for you, and people around you", "Write down 3 things that went well", "Solve what you can; avoid quick fixes"];
  const heads = ["Sort worries", "To do", "This week", "Went well", "Solve it"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Small changes" title="Small steps back to control" label="Small changes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A notepad of small plans beside a staircase of small steps">
      <rect x="20" y="26" width="140" height="152" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {[44, 72, 100, 128].map(x => <circle key={x} cx={x + 8} cy="26" r="4" fill={INK} />)}
      <W x={90} y={50} size={11.5}>{heads[at]}</W>
      {at === 0 && ["Can act on", "Time will help", "Cannot change"].map((label, index) => <Box key={label} x={90} y={78 + index * 32} w={118} text={label} lit={index === 0} size={10} />)}
      {at === 1 && [0, 1, 2, 3].map(index => <g key={index}>
        <rect x="34" y={66 + index * 26} width="14" height="14" rx="3" fill={index < 2 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {index < 2 && <path d={`M37 ${73 + index * 26} l3 3 l6 -6`} stroke={WHITE} strokeWidth="2" fill="none" />}
        <path d={`M58 ${73 + index * 26} H${140 - index * 12}`} stroke={index < 2 ? LINE : SOFT} strokeWidth="5" strokeLinecap="round" />
      </g>)}
      {at === 2 && ["Me time", "See friends", "A small favour"].map((label, index) => <Box key={label} x={90} y={78 + index * 32} w={118} text={label} size={10} />)}
      {at === 3 && [1, 2, 3].map(n => <g key={n}><W x={42} y={84 + (n - 1) * 30} size={11}>{n}</W><path d={`M56 ${80 + (n - 1) * 30} H140`} stroke={SOFT} strokeWidth="5" strokeLinecap="round" /></g>)}
      {at === 4 && <><Clock x={90} y={80} r={18} hand={1.6} /><W x={90} y={118} size={10.5}>5 or 10 minutes</W><Box x={100} y={150} w={96} text="Quick fixes" size={10} /><Cross x={38} y={150} s={8} /></>}
      {Array.from({ length: 5 }, (_, index) => <rect key={index} x={178 + index * 26} y={160 - index * 24} width="26" height={18 + index * 24} fill={index <= at ? TINT : WHITE} stroke={INK} strokeWidth="2" />)}
      <circle cx={191 + at * 26} cy={151 - at * 24} r="7" fill={GOLD} stroke={WHITE} strokeWidth="2" />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function StrBellyBreath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Slow, deep breaths can calm you", "In for 5, out for 5, for 5 minutes", "Hand on tummy, hand on chest: 3 times", "Notice the moment; come back to now", "Try another way if one does not suit"];
  const wave = at === 0 || at === 1 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Breathing" title="Breathe, slow down, notice" label="Breathing and relaxation" credit="Illustration: Rehyn. Follow the steps in the article."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person sitting comfortably, breathing slowly in and out">
      <path d="M44 100 V184 M44 160 H104 M52 160 V184 M98 160 V184" stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none" />
      <Person x={72} y={140} scale={1.4} />
      <ellipse cx="72" cy="146" rx="9" ry="7" fill={GOLD} opacity=".9" className={still ? undefined : "lib-v2-breathe is-slow"} />
      {at === 2 && <><circle cx="72" cy="126" r="6" fill={WHITE} stroke={GOLD} strokeWidth="3" /><circle cx="82" cy="150" r="6" fill={WHITE} stroke={GOLD} strokeWidth="3" /></>}
      <path d="M144 90 Q164 50 184 90 T224 90 T264 90 T304 90" stroke={wave ? INK : LINE} strokeWidth="4" fill="none" strokeLinecap="round" />
      {at === 0 && <W x={224} y={150} size={10.5}>A slower heart, a relaxed body</W>}
      {at === 1 && <><W x={164} y={58} size={10.5}>In: 1 to 5</W><W x={204} y={130} size={10.5}>Out: 1 to 5</W><W x={250} y={160} size={10.5}>At least 5 minutes</W></>}
      {at === 2 && <><Box x={224} y={54} w={120} text="Hand on chest" lit /><Box x={224} y={130} w={120} text="Hand on tummy" lit /><W x={224} y={164} size={10.5}>Breathe in: tummy rises</W></>}
      {at === 3 && <><circle cx="224" cy="90" r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" /><W x={224} y={150} size={10.5}>Gently back to now</W></>}
      {at === 4 && ["Yoga", "Tai chi", "Massage", "Meditation"].map((label, index) => <Box key={label} x={190 + (index % 2) * 80} y={130 + Math.floor(index / 2) * 32} w={74} text={label} size={10} />)}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function StrTwoChairs(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Talking can help offload worries", "Refer yourself, no diagnosis needed", "Guided self-help, CBT, counselling", "Asking for help is not a failure"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Talking" title="Talking it through helps" label="Talking therapies" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people talking, and a signpost to free talking therapies">
      <path d="M38 112 V182 M38 166 H82 M150 166 H194 M194 112 V182" stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none" />
      <Person x={64} y={152} scale={1.2} /><Person x={168} y={152} scale={1.2} fill={SOFT} />
      <Speech x={116} y={58} w={104}><W x={116} y={62} size={10.5}>How I feel</W></Speech>
      {at === 0 && <><Box x={262} y={96} w={108} text="Samaritans" lit /><W x={262} y={126} size={10.5}>116 123, any time</W></>}
      {at === 1 && <>
        <rect x="248" y="56" width="8" height="126" rx="3" fill={INK} />
        <path d="M206 60 H296 L308 73 L296 86 H206 Z" fill={INK} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><W x={254} y={77} size={10.5} fill={WHITE}>Refer yourself</W>
        <path d="M308 98 H218 L206 111 L218 124 H308 Z" fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><W x={260} y={115} size={10.5}>Free on the NHS</W>
      </>}
      {at === 2 && <Tags x={210} y={44} labels={["Guided self-help", "CBT: 5 to 15", "Counselling"]} lit={index => index === 1} width={102} gap={36} />}
      {at === 2 && <W x={261} y={164} size={10}>CBT sessions</W>}
      {at === 3 && <><Sun x={262} y={80} r={16} /><W x={262} y={140} size={10.5}>Get help early</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function StrGpNotes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Struggling, or self-help not working", "Tell a GP about worrying symptoms", "Bring a list, and a stress diary", "Talking, exercise, groups or medicine", "Urgent: 111. Emergency: 999 or A&E"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Seeing a GP" title="Knowing when to see a GP" label="When to see a GP" credit="Illustration: Rehyn. In an emergency, call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person handing notes across a desk to a GP">
      <Person x={48} y={150} scale={1.2} /><Person x={272} y={150} scale={1.2} fill={SOFT} />
      <path d="M90 154 H230 M102 154 V184 M218 154 V184" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at <= 2 && <g transform={`translate(${at * 10} 0)`}>
        <rect x="116" y="66" width="84" height="80" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {at === 0 && [0, 1, 2].map(index => <g key={index}><rect x="126" y={80 + index * 20} width="12" height="12" rx="3" fill={INK} /><path d={`M128 ${86 + index * 20} l3 3 l5 -5`} stroke={WHITE} strokeWidth="2" fill="none" /><path d={`M146 ${86 + index * 20} H188`} stroke={SOFT} strokeWidth="5" strokeLinecap="round" /></g>)}
        {at === 1 && <HeartShape x={158} y={110} size={44} fill={WHITE} stroke={GOLD} width={3} />}
        {at === 2 && <><W x={158} y={86} size={10.5}>Stress diary</W>{[0, 1, 2].map(index => <path key={index} d={`M128 ${102 + index * 14} H188`} stroke={SOFT} strokeWidth="5" strokeLinecap="round" />)}</>}
      </g>}
      {at === 3 && ["Self-help", "Talking therapy", "Exercise", "Medicine"].map((label, index) => <Box key={label} x={160} y={40 + index * 30} w={120} text={label} />)}
      {at === 4 && <><Box x={160} y={70} w={150} text="Urgent: NHS 111" lit /><Box x={160} y={110} w={150} text="Emergency: 999 or A&E" lit /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function StrDeskTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Common, and not a weakness", "Longer hours, less confidence", "Six areas of work that can cause it", "Talk to your manager early", "Flexible working, fit notes, support"];
  const six = ["Demands", "Control", "Support", "Relationships", "Role", "Change"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="At work" title="Stress at work, and your rights" label="Stress at work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person at a desk, and the six areas of work that can cause stress">
      <Person x={160} y={128} scale={1.1} />
      <path d="M140 128 L146 110 H174 L180 128" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M108 132 H212 M118 132 V160 M202 132 V160" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      {at === 0 && <><W x={160} y={36} size={13}>964,000 workers</W><W x={160} y={54} size={10}>in Great Britain, 2024 to 2025</W></>}
      {at === 1 && ["Withdrawn", "Less confident", "Longer hours", "More time off"].map((label, index) => <Box key={label} x={84 + (index % 2) * 152} y={30 + Math.floor(index / 2) * 32} w={132} text={label} />)}
      {at === 2 && six.map((label, index) => <Box key={label} x={index < 3 ? 56 : 264} y={50 + (index % 3) * 50} w={96} text={label} lit />)}
      {at === 3 && <><Bubble x={160} y={46} text="Talk to your manager" width={140} /><Box x={56} y={150} w={96} text="Take breaks" /><Box x={264} y={150} w={96} text="Finish on time" /></>}
      {at === 4 && <><Box x={64} y={44} w={112} text="Flexible working" lit /><Box x={256} y={44} w={112} text="Fit note: 7+ days" lit /><Box x={160} y={176} w={120} text="Access to Work" lit /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function StrCarerBench(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["74% of carers felt stressed or anxious", "Notice it; do not struggle on", "Ask the council for a free assessment", "A break helps stop exhaustion", "A carers' group can be a great help"];
  const out = at >= 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Carers" title="Looking after yourself as a carer" label="Stress when caring" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A carer at home, and stepping out to a bench while someone else helps">
      <path d="M10 178 H310" stroke={LINE} strokeWidth="3" />
      <path d="M20 70 L95 28 L170 70 V178 H20 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <Person x={130} y={162} scale={1.05} fill={SOFT} />
      {!out && <Person x={60} y={162} scale={1.05} />}
      {at === 3 && <Person x={60} y={162} scale={1.05} fill={GOLD} />}
      {at === 1 && <circle cx="60" cy="140" r="30" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      <path d="M296 178 V112" stroke={INK} strokeWidth="5" /><circle cx="296" cy="98" r="18" fill={SOFT} />
      <path d="M190 160 H280 M190 146 H280 M196 160 V178 M274 160 V178" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 2 && <><Box x={240} y={44} w={120} text="Carer's assessment" lit /><W x={240} y={74} size={10.5}>Free, over 18s</W></>}
      {at === 3 && <Person x={236} y={146} />}
      {at === 4 && <><Person x={206} y={146} fill={SOFT} /><Person x={236} y={146} /><Person x={266} y={146} fill={SOFT} /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function StrDayClock(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Most adults need 7 to 9 hours", "Same wake time; 1 hour to wind down", "Aim for 150 active minutes a week", "A drink's relief is short-lived"];
  const xy = (hour: number, r: number) => { const a = hour / 24 * 2 * Math.PI - Math.PI / 2; return [96 + r * Math.cos(a), 108 + r * Math.sin(a)]; };
  const point = (hour: number, r: number) => xy(hour, r).join(" ");
  const [walkX, walkY] = xy(10, 64);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sleep and activity" title="Sleep, movement, and why alcohol is no fix" label="Sleep, activity and alcohol" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A 24-hour day: the night's sleep, time to wind down, and time to move">
      <circle cx="96" cy="108" r="64" fill="none" stroke={LINE} strokeWidth="12" />
      <path d={`M${point(23, 64)} A64 64 0 0 1 ${point(7, 64)}`} fill="none" stroke={INK} strokeWidth="12" />
      <Moon x={96} y={70} r={11} /><Sun x={96} y={146} r={8} />
      {at === 1 && <path d={`M${point(17, 80)} A80 80 0 0 1 ${point(23, 80)}`} fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />}
      {at === 2 && <><circle cx={walkX} cy={walkY} r="13" fill={GOLD} stroke={WHITE} strokeWidth="3" /><Person x={walkX} y={walkY + 4} scale={0.32} fill={WHITE} /></>}
      {at === 0 && <><Box x={250} y={70} w={124} text="7 to 9 hours" lit /><Box x={250} y={104} w={124} text="Body more alert" /><Box x={250} y={138} w={124} text="Worrying thoughts" /></>}
      {at === 1 && <><Box x={250} y={56} w={126} text="Same wake-up time" /><Box x={250} y={90} w={126} text="1 hour to unwind" /><Box x={250} y={124} w={126} text="No caffeine, alcohol" lit size={10} /><W x={250} y={156} size={10}>for 6 hours before bed</W></>}
      {at === 2 && <><Box x={250} y={70} w={126} text="150 minutes a week" lit size={10} /><W x={250} y={100} size={10}>or 75 vigorous</W><Box x={250} y={128} w={126} text="Walking counts" /></>}
      {at === 3 && <><Box x={262} y={66} w={100} text="Alcohol to cope" size={10} /><Cross x={198} y={66} s={8} /><W x={250} y={100} size={10}>Relief is short-lived</W><Box x={250} y={128} w={126} text="Get medical advice" lit size={10} /><W x={250} y={156} size={10}>before stopping</W><W x={250} y={170} size={10}>heavy drinking</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function StrHelpTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["No need to be in crisis to reach out", "Samaritans 116 123, or text 85258", "111: choose the mental health option", "Life at risk: 999 or A&E now", "Focus on getting through today"];
  const tiles = [{ t: "999 or A&E", n: "If life is at risk" }, { t: "NHS 111", n: "Mental health option" }, { t: "Samaritans", n: "116 123, any time" }, { t: "Text SHOUT", n: "to 85258, 24/7" }];
  const on = [[], [2, 3], [1], [0], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Help, any hour" title="Help is there, day and night" label="If it feels too much" credit="Illustration: Rehyn. In danger now? Call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four ways to get help, day or night: 999, NHS 111, Samaritans and Shout">
      <Moon x={40} y={28} r={11} /><Sun x={280} y={28} r={9} /><W x={160} y={32} size={11}>Day or night</W>
      {tiles.map((tile, index) => { const x = 84 + (index % 2) * 152, y = 76 + Math.floor(index / 2) * 58; const lit = on.includes(index); return <g key={tile.t}>
        <rect x={x - 72} y={y - 24} width="144" height="48" rx="12" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={x} y={y - 2} size={13} fill={lit ? WHITE : TEXT}>{tile.t}</W><W x={x} y={y + 15} size={10} fill={lit ? WHITE : TEXT}>{tile.n}</W>
      </g>; })}
      {at === 4 && <path d="M60 172 C120 160, 200 160, 260 172" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" />}
      <Say y={202}>{caps[at]}</Say>
    </svg>} />;
}

// ==== Grief and bereavement =================================================================================

function GriefFeelings(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Natural, normal, and not an illness", "Shock and numbness often come first", "Sadness, anger, guilt, even relief", "Feelings can arrive unexpectedly", "Feelings become less intense in time"];
  const words = ["Shock", "Numb", "Sadness", "Anger", "Guilt", "Relief", "Exhausted", "Empty", "Sensing them near", "Sudden feelings"];
  const on = [[], [0, 1], [2, 3, 4, 5, 6, 7], [8, 9], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Many feelings, all of them normal" label="What grief feels like" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A drift of feelings around one person: shock, sadness, anger, guilt and relief">
      {words.map((word, index) => { const row3 = index >= 8; const x = row3 ? (index === 8 ? 66 : 254) : 46 + (index % 4) * 76; const y = row3 ? 100 : 30 + Math.floor(index / 4) * 34; const lit = on.includes(index);
        return <g key={word} opacity={lit ? 1 : at === 4 ? 0.2 : 0.35}><rect x={x - (row3 ? 56 : 35)} y={y - 13} width={row3 ? 112 : 70} height="26" rx="13" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + 4} size={10} fill={lit ? WHITE : TEXT}>{word}</W></g>; })}
      {at === 4 && <Sun x={160} y={100} r={9} />}
      <Person x={160} y={170} scale={1.3} />
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function GriefRings(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Useful, but every grief is unique", "No set order, and feelings can return", "Acceptance does not mean liking it", "Grief stays; life grows around it", "No set stages or time limits"];
  const stages = ["Denial", "Anger", "Bargaining", "Depression", "Acceptance"];
  const notes = ["shock, disbelief", "blaming", "guilty questions", "tired, hopeless", "ready to move forward"];
  const slot = at === 1 ? [2, 0, 4, 1, 3] : [0, 1, 2, 3, 4];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="No right way" title="No map, and no right way" label="No right way to grieve" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The five stages in no fixed order, and life growing around grief">
      {at <= 2 && stages.map((stage, index) => <g key={stage}>
        <Box x={70} y={34 + slot[index] * 30} w={100} text={stage} lit={at === 2 && index === 4} />
        {at === 2 && <W x={130} y={38 + slot[index] * 30} size={10} anchor="start">{notes[index]}</W>}
      </g>)}
      {at === 0 && <><Arrow d="M134 24 V156" head="M127 148 L134 156 L141 148" /><W x={230} y={86} size={10.5}>Kübler-Ross's model,</W><W x={230} y={104} size={10.5}>later used for grief</W></>}
      {at === 1 && <path d="M146 40 C300 30, 150 110, 250 92 S200 172, 300 160" stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinecap="round" />}
      {at === 3 && [{ x: 56, r: 28 }, { x: 156, r: 40 }, { x: 262, r: 52 }].map((ring, index) => <g key={ring.x}>
        <circle cx={ring.x} cy="96" r={ring.r} fill={WHITE} stroke={SOFT} strokeWidth="2.5" />
        <circle cx={ring.x} cy="96" r="28" fill={INK} opacity=".85" /><W x={ring.x} y={100} size={10} fill={WHITE}>Grief</W>
        {index > 0 && <W x={ring.x} y={96 - (ring.r + 28) / 2 + 4} size={9.5}>Life</W>}
      </g>)}
      {at === 3 && <Arrow d="M40 160 H280" head="M272 153 L280 160 L272 167" />}
      {at === 4 && <><Person x={90} y={160} scale={1.2} /><Person x={230} y={160} scale={1.2} fill={SOFT} /><Bubble x={112} y={70} text="Crying often" width={104} /><Bubble x={252} y={70} text="Feeling numb" width={104} /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function GriefBodySigns(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Grief can be felt as a real pain", "Slowly rebuild a night-time routine", "Eating anything is better than nothing", "Tired, anxious; a gentle walk helps", "Still in pain after weeks? See a GP"];
  const on = [[], [0], [1], [2, 3], []][at];
  const rows = [{ y: 40, t: "Sleep" }, { y: 82, t: "Appetite" }, { y: 124, t: "Palpitations" }, { y: 166, t: "Energy" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="In the body" title="When grief is felt in the body" label="Grief in the body" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person, with sleep, appetite, heartbeat and energy marked beside them">
      <Person x={96} y={150} scale={1.7} />
      {at === 0 && <ellipse cx="96" cy="126" rx="48" ry="62" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      {at === 4 && <Box x={96} y={36} w={92} text="See a GP" lit />}
      {rows.map((row, index) => { const lit = on.includes(index); return <g key={row.t} opacity={lit ? 1 : 0.35}>
        {lit && <path d={`M124 ${index < 2 ? 112 : 140} L178 ${row.y}`} stroke={GOLD} strokeWidth="2.5" strokeDasharray="5 5" />}
        {index === 0 && <Moon x={196} y={row.y} r={11} />}
        {index === 1 && <g fill="none" stroke={INK} strokeWidth="2.5"><circle cx="196" cy={row.y} r="12" /><circle cx="196" cy={row.y} r="6" /></g>}
        {index === 2 && <HeartShape x={196} y={row.y} size={28} fill={WHITE} stroke={INK} width={2.5} />}
        {index === 3 && <g><rect x="182" y={row.y - 7} width="26" height="14" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="208" y={row.y - 3} width="3" height="6" fill={INK} /><rect x="185" y={row.y - 4} width="6" height="8" fill={INK} /></g>}
        <W x={220} y={row.y + 4} size={10.5} anchor="start">{row.t}</W>
      </g>; })}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function GriefFork(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Many kinds of loss bring grief", "Illness can change work and hobbies", "Grief before a loss is very real", "No normal way to react; help is there"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Other losses" title="Grieving the life you had" label="Loss of health or a way of life" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path that forks, one way fading and one way going on">
      {at === 0 ? <path d="M160 184 V30" stroke={LINE} strokeWidth="10" strokeLinecap="round" /> : <>
        <path d="M160 184 V128" stroke={LINE} strokeWidth="10" strokeLinecap="round" />
        <path d="M160 128 C150 92, 100 70, 56 38" stroke={LINE} strokeWidth="10" strokeLinecap="round" fill="none" strokeDasharray="2 14" />
        <path d="M160 128 C170 92, 220 70, 264 38" stroke={GOLD} strokeWidth="6" strokeLinecap="round" fill="none" />
      </>}
      {at === 0 && ["A relationship ends", "Losing a job", "Moving home", "Someone close is ill"].map((label, index) => <Box key={label} x={index % 2 ? 242 : 78} y={52 + Math.floor(index / 2) * 40} w={132} text={label} />)}
      <Person x={160} y={150} scale={0.8} />
      {at === 1 && <><W x={52} y={70} size={10.5}>Work</W><W x={88} y={100} size={10.5}>Hobbies</W></>}
      {at === 2 && <><Person x={222} y={74} scale={0.8} /><Person x={258} y={74} scale={0.8} fill={SOFT} /><HeartShape x={240} y={32} size={20} fill={GOLD} stroke={GOLD} width={2} /></>}
      {at === 3 && <>
        <rect x="206" y="70" width="8" height="110" rx="3" fill={INK} />
        <path d="M190 74 H296 L308 87 L296 100 H190 Z" fill={INK} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><W x={246} y={91} size={10.5} fill={WHITE}>Talking therapies</W>
        <path d="M308 110 H222 L210 123 L222 136 H308 Z" fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><W x={262} y={127} size={10.5}>Your doctors</W>
      </>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function GriefDoors(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Many things help, not just counselling", "A free helpline, for anyone in the UK", "One to one sessions, or a local group", "GP, or refer yourself for therapy", "Ask locally: Age UK, library, surgery"];
  const notes = ["Reading, a call, a group, a friend", "Cruse: 0808 808 1677", "Usually 1 to 6 sessions", "18 or over, or 16 in some areas", "Or a place of worship"];
  const on = [[], [0], [1, 2], [3], [4]][at];
  const doors = ["Helpline", "1 to 1", "Groups", "GP", "Nearby"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Support" title="Help to talk, in many forms" label="Bereavement support" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A row of doors to support: a helpline, one to one, groups, a GP and local services">
      {doors.map((door, index) => { const x = 14 + index * 60; const lit = on.includes(index); const c = lit ? WHITE : INK; const cx = x + 26; return <g key={door}>
        <rect x={x} y="40" width="52" height="94" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <circle cx={x + 42} cy="92" r="3" fill={c} />
        {index === 0 && <Phone x={cx} y={70} color={c} />}
        {index === 1 && <g stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round"><path d={`M${cx - 16} 62 V80 H${cx - 6} V88 M${cx + 16} 62 V80 H${cx + 6} V88`} /></g>}
        {index === 2 && [0, 1, 2, 3, 4].map(n => <circle key={n} cx={cx + 12 * Math.cos(n * 1.257)} cy={70 + 12 * Math.sin(n * 1.257)} r="3.5" fill={c} />)}
        {index === 3 && <path d={`M${cx} 60 V80 M${cx - 10} 70 H${cx + 10}`} stroke={c} strokeWidth="5" strokeLinecap="round" />}
        {index === 4 && <path d={`M${cx - 12} 80 V68 L${cx} 58 L${cx + 12} 68 V80 Z`} fill="none" stroke={c} strokeWidth="2.5" strokeLinejoin="round" />}
        <W x={cx} y={152} size={10}>{door}</W>
      </g>; })}
      <W x={160} y={178} size={11}>{notes[at]}</W>
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function GriefStairs(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Register within 5 days (8 in Scotland)", "Tell Us Once: use it within 28 days", "Register first, then the funeral date", "Friends can help you work through it"];
  const steps = [["Confirm"], ["Register"], ["Tell Us", "Once"], ["Funeral"], ["Estate"]];
  const on = [[0, 1], [2], [3, 4], []][at];
  const k = [1, 2, 4, 2][at];
  const top = (index: number) => 150 - index * 26;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Practical steps" title="One step at a time after a death" label="Practical things after a death" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A short staircase of practical steps after a death, with someone helping">
      {at === 3 && <path d="M14 122 L310 18" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />}
      {steps.map((label, index) => { const x = 12 + index * 60; const lit = on.includes(index); return <g key={label.join(" ")}>
        <rect x={x} y={top(index)} width="58" height={178 - top(index)} rx="4" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {label.map((line, n) => <W key={line} x={x + 29} y={top(index) + 17 + n * 12} size={label.length > 1 ? 9.5 : 10} fill={lit ? WHITE : TEXT}>{line}</W>)}
      </g>; })}
      <Person x={12 + k * 60 + 29} y={top(k) - 9} scale={0.6} />
      {at === 3 && <Person x={12 + 1 * 60 + 29} y={top(1) - 9} scale={0.6} fill={SOFT} />}
      <W x={84} y={40} size={10.5}>{["5 days, or 8 in Scotland", "Within 28 days", "Register first", ""][at]}</W>
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function GriefDayRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Small targets, not everything at once", "Regular meals, and sleep when you can", "Start with a five minute walk", "Talk, or write a sentence or two", "Try not to use alcohol to cope"];
  const middle = ["One thing at a time", "Meals and rest", "5 minute walk", "Talk and write", "Mindful of alcohol"];
  const on = [[0, 2], [0, 1], [2], [3, 4], []][at];
  const spot = (index: number) => { const a = (-90 + index * 72) * Math.PI / 180; return [160 + 64 * Math.cos(a), 100 + 64 * Math.sin(a)]; };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Self-care" title="Small, steady acts of care" label="Looking after yourself" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day ring of small acts of care: meals, rest, a walk, talking and writing">
      <circle cx="160" cy="100" r="64" fill="none" stroke={LINE} strokeWidth="6" />
      {[0, 1, 2, 3, 4].map(index => { const [x, y] = spot(index); const lit = on.includes(index); const c = lit ? WHITE : INK; return <g key={index}>
        <circle cx={x} cy={y} r="20" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        {index === 0 && <g fill="none" stroke={c} strokeWidth="2.2"><circle cx={x} cy={y} r="10" /><circle cx={x} cy={y} r="5" /></g>}
        {index === 1 && <Moon x={x - 2} y={y} r={9} fill={c} />}
        {index === 2 && <path d={`M${x - 11} ${y + 6} V${y - 6} H${x - 3} L${x} ${y - 1} L${x + 11} ${y + 2} V${y + 6} Z`} fill="none" stroke={c} strokeWidth="2.2" strokeLinejoin="round" />}
        {index === 3 && <Phone x={x} y={y} color={c} />}
        {index === 4 && <g fill="none" stroke={c} strokeWidth="2.2"><rect x={x - 8} y={y - 10} width="16" height="20" rx="2" /><path d={`M${x - 4} ${y - 4} H${x + 4} M${x - 4} ${y + 1} H${x + 4} M${x - 4} ${y + 6} H${x + 1}`} /></g>}
      </g>; })}
      <W x={160} y={120} size={11}>{middle[at]}</W>
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function GriefTwoLines(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["For some, grief stays intense", "Feelings that do not ease with months", "Sudden loss can make it harder", "If grief does not lift, a GP can help", "A steady routine and safe people"];
  const chips = [[], ["Not easing", "Hard to accept", "No enjoyment"], ["Sudden loss", "Earlier losses", "Family conflict"], ["Sadness", "Hopelessness", "A GP can help"], ["Routine", "Rest and meals", "Talking"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="When it does not ease" title="When grief stays the same" label="When grief does not ease" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Grief easing over the months for most people, and staying intense for some">
      <path d="M30 124 H300" stroke={LINE} strokeWidth="3" /><W x={300} y={138} size={10} anchor="end">Months</W>
      <path d="M190 32 V124" stroke={GOLD} strokeWidth="2" strokeDasharray="4 5" /><W x={190} y={24} size={10.5}>6 months</W>
      <path d="M30 44 C90 44, 130 104, 300 110" stroke={SOFT} strokeWidth="4" fill="none" strokeLinecap="round" /><W x={262} y={98} size={10}>For most</W>
      <path d={at === 4 ? "M30 44 C110 46, 160 46, 190 46" : "M30 44 C110 46, 220 46, 300 48"} stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
      {at === 4 && <path d="M190 46 C230 48, 250 80, 300 92" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="2 8" />}
      <W x={262} y={36} size={10}>For some</W>
      {chips.map((chip, index) => <Box key={chip} x={60 + index * 100} y={160} w={96} text={chip} size={10} lit={at === 3 && index === 2} />)}
      <Say y={204}>{caps[at]}</Say>
    </svg>} />;
}

function GriefCalendar(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Dates, music, a smell: reminders", "Plan ahead, and leave room to change", "Keep traditions, or let the day pass", "Photos, a place, a letter to them"];
  const circled = [[5, 19], [19], [12, 25], [19]][at];
  const side = [["Anniversary", "Birthday", "Music, a smell"], ["Favourite films", "An event for them", "Free to change"], ["Keep a tradition", "Or skip the day", "Get fresh air"], ["Old photos", "A special place", "A letter to them"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Special days" title="Hard dates, gently planned" label="Anniversaries and special days" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A calendar with a few dates circled, and ideas for each day">
      <rect x="20" y="26" width="172" height="154" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M20 48 H192" stroke={INK} strokeWidth="2" /><rect x="20" y="26" width="172" height="22" rx="8" fill={INK} />
      {Array.from({ length: 28 }, (_, index) => { const x = 34 + (index % 7) * 24, y = 72 + Math.floor(index / 7) * 30; return <g key={index}>
        {circled.includes(index + 1) && <circle cx={x} cy={y - 4} r="11" fill={TINT} stroke={GOLD} strokeWidth="3" />}
        <W x={x} y={y} size={9.5}>{index + 1}</W>
      </g>; })}
      {at === 1 && <path d="M150 164 L176 138 L182 144 L156 170 Z M150 164 L146 174 L156 170" fill={GOLD} stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />}
      {side.map((label, index) => <Box key={label} x={257} y={60 + index * 36} w={108} text={label} size={10} lit={at === 1 && index === 2} />)}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function GriefHeights(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Honest words, suited to their age", "Understanding grows with age", "Children dip in and out of grief", "Let them know they are loved", "Childline: 0800 1111, for under 19s"];
  const scales = [0.55, 0.7, 0.85, 1, 1.15];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Children" title="Honest words for young hearts" label="Children and grief" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An adult talking with a child, and children of different ages">
      {(at === 0 || at === 3) && <>
        <Person x={110} y={158} scale={1.3} /><Person x={186} y={160} scale={0.85} fill={SOFT} />
        {at === 0 && <Speech x={130} y={62} w={130}><W x={130} y={66} size={10.5}>Clear and honest</W></Speech>}
        {at === 3 && <><HeartShape x={148} y={70} size={40} fill={GOLD} stroke={GOLD} width={2} /><Box x={262} y={120} w={92} text="Memory box" /></>}
      </>}
      {at === 1 && scales.map((scale, index) => <g key={scale}>
        <Person x={40 + index * 60} y={168 - 14 * scale} scale={scale} fill={index === 4 ? INK : SOFT} />
        <W x={40 + index * 60} y={186} size={10}>{["Baby", "3 to 5", "6 to 8", "9 to 12", "Teen"][index]}</W>
      </g>)}
      {at === 2 && <><Person x={160} y={150} fill={SOFT} />{["Anger", "Worry", "Sleep changes", "Tummy ache"].map((label, index) => <Box key={label} x={index % 2 ? 252 : 68} y={70 + Math.floor(index / 2) * 52} w={104} text={label} />)}</>}
      {at === 4 && <>
        <Person x={90} y={154} scale={1.15} fill={SOFT} />
        <Box x={226} y={70} w={150} text="Childline" lit /><W x={226} y={98} size={10.5}>0800 1111, under 19s</W>
        <Box x={226} y={130} w={150} text="Child Bereavement UK" /><W x={226} y={158} size={10.5}>0800 028 8840</W>
      </>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

function GriefTeaTable(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["If unsure what to say, say so", "Listen; you do not have to fix it", "Offer something specific", "Keep checking in; remember dates", "Look after your own sleep and meals"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Helping others" title="What to say, and what to do" label="Supporting someone who is grieving" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people at a table with mugs of tea, one listening to the other">
      <g opacity={at === 4 ? 0.35 : 1}><Person x={64} y={150} scale={1.3} fill={SOFT} /></g>
      <Person x={256} y={150} scale={1.3} />
      <path d="M100 150 H220 M120 150 V182 M200 150 V182" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <Cup x={138} y={137} /><Cup x={176} y={137} />
      {at === 0 && <Speech x={190} y={58} w={124} right><W x={190} y={62} size={10.5}>So sorry to hear</W></Speech>}
      {at === 1 && <Speech x={124} y={58} w={88}>{[0, 1, 2].map(n => <circle key={n} cx={112 + n * 12} cy="58" r="3.5" fill={INK} />)}</Speech>}
      {at === 2 && <g transform="rotate(-3 160 64)"><rect x="104" y="38" width="112" height="52" rx="4" fill={TINT} stroke={INK} strokeWidth="1.8" /><W x={160} y={60} size={10.5}>Tuesday:</W><W x={160} y={78} size={10.5}>school pick-up</W></g>}
      {at === 3 && <>
        <rect x="118" y="22" width="84" height="78" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="118" y="22" width="84" height="16" rx="6" fill={INK} />
        {Array.from({ length: 12 }, (_, index) => <circle key={index} cx={132 + (index % 4) * 19} cy={52 + Math.floor(index / 4) * 17} r={index === 6 ? 7 : 3} fill={index === 6 ? WHITE : SOFT} stroke={index === 6 ? GOLD : "none"} strokeWidth="3" />)}
      </>}
      {at === 4 && <><Moon x={256} y={72} r={11} /><Box x={160} y={60} w={124} text="Your own support" lit /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function GriefHandsClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Talking is not a sign of weakness", "In danger now: 999 or A&E", "111, Samaritans 116 123, or text 85258", "Just focus on getting through today", "Cruse helpline: 0808 808 1677"];
  const tiles = ["999 or A&E", "NHS 111, mental health", "Samaritans 116 123", "Text SHOUT to 85258", "Cruse 0808 808 1677"];
  const on = [[], [0], [1, 2, 3], [], [4]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Help, any hour" title="Help is there, right now" label="If you are struggling to cope" credit="Illustration: Rehyn. In danger now? Call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock for any hour, two people side by side, and five places to get help">
      {at === 3 ? <><Sun x={62} y={58} r={16} /><W x={62} y={108} size={11}>Today</W></> : <>
        <circle cx="62" cy="58" r="32" fill={WHITE} stroke={INK} strokeWidth="3" />
        {Array.from({ length: 12 }, (_, index) => { const a = index * Math.PI / 6; return <path key={index} d={`M${62 + 26 * Math.sin(a)} ${58 - 26 * Math.cos(a)} L${62 + 30 * Math.sin(a)} ${58 - 30 * Math.cos(a)}`} stroke={INK} strokeWidth="2" />; })}
        <path d="M62 58 V36 M62 58 L78 66" stroke={TEXT} strokeWidth="3" strokeLinecap="round" />
        <W x={62} y={108} size={11}>Any hour</W>
      </>}
      <Person x={44} y={168} scale={0.9} /><Person x={86} y={168} scale={0.9} fill={SOFT} />
      <path d="M50 128 Q65 114 80 128" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />
      {tiles.map((tile, index) => { const lit = on.includes(index); return <g key={tile}>
        <rect x="150" y={18 + index * 34} width="160" height="28" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={230} y={36 + index * 34} size={10.5} fill={lit ? WHITE : TEXT}>{tile}</W>
      </g>; })}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

export function EasePieceView({ piece, ...props }: { piece: EasePiece } & PieceProps) {
  switch (piece) {
    case "str-pressure-line": return <StrPressureLine {...props} />;
    case "str-signs-tabs": return <StrSignsTabs {...props} />;
    case "str-pressure-ring": return <StrPressureRing {...props} />;
    case "str-batteries": return <StrBatteries {...props} />;
    case "str-sort-steps": return <StrSortSteps {...props} />;
    case "str-belly-breath": return <StrBellyBreath {...props} />;
    case "str-two-chairs": return <StrTwoChairs {...props} />;
    case "str-gp-notes": return <StrGpNotes {...props} />;
    case "str-desk-tiles": return <StrDeskTiles {...props} />;
    case "str-carer-bench": return <StrCarerBench {...props} />;
    case "str-day-clock": return <StrDayClock {...props} />;
    case "str-help-tiles": return <StrHelpTiles {...props} />;
    case "grief-feelings-cloud": return <GriefFeelings {...props} />;
    case "grief-growing-rings": return <GriefRings {...props} />;
    case "grief-body-signs": return <GriefBodySigns {...props} />;
    case "grief-fork-path": return <GriefFork {...props} />;
    case "grief-support-doors": return <GriefDoors {...props} />;
    case "grief-step-stairs": return <GriefStairs {...props} />;
    case "grief-day-ring": return <GriefDayRing {...props} />;
    case "grief-two-lines": return <GriefTwoLines {...props} />;
    case "grief-calendar": return <GriefCalendar {...props} />;
    case "grief-heights": return <GriefHeights {...props} />;
    case "grief-tea-table": return <GriefTeaTable {...props} />;
    case "grief-hands-clock": return <GriefHandsClock {...props} />;
  }
}
