import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { MINDSET_PIECES, type MindsetPiece } from "@/content/mindset-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, Gauge, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Schizophrenia, Personality disorder and Anger pages' own pieces (content/mindset-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Mind & mood pieces. Each is steered by the card's sections; pictures
// show ideas, calmly, never anyone's own body or results. No "split" faces, no menacing figures and no violence;
// self-harm appears only as signposts and helplines.

export const isMindsetPiece = (piece: NewsPiece): piece is MindsetPiece => (MINDSET_PIECES as readonly string[]).includes(piece);

const medCredit = "Illustration: Rehyn. Never stop a medicine without your doctor.";
const helpCredit = "Illustration: Rehyn. Not safe now? Call 999 or go to A&E.";
const dangerCredit = "Illustration: Rehyn. In immediate danger? Call 999.";

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 206, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 12 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Tick = ({ x, y, s = 8, color = GOLD }: { x: number; y: number; s?: number; color?: string }) =>
  <path d={`M${x - s} ${y} L${x - s / 3} ${y + s * 0.7} L${x + s} ${y - s * 0.7}`} stroke={color} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const Arrow = ({ d, head, color = GOLD }: { d: string; head: string; color?: string }) =>
  <g stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** A plain cloud with nothing inside it. */
const Cloud = ({ x, y, s, fill = SOFT, opacity = 1 }: { x: number; y: number; s: number; fill?: string; opacity?: number }) =>
  <g opacity={opacity} fill={fill}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 11} y={y - 18} width="22" height="36" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 11} r="2.2" fill={lit ? WHITE : INK} /></g>;
/** A side-on chair, its seat at (x, y); `flip` turns it to face left. */
const Chair = ({ x, y, flip = false, color = INK }: { x: number; y: number; flip?: boolean; color?: string }) =>
  <path d="M-12 -30 V16 M-12 0 H12 V16" transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`} stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
/** A wall calendar, `w` by `h`, with a gold top bar. */
const Calendar = ({ x, y, w = 46, h = 50, lit = false, big, small }: { x: number; y: number; w?: number; h?: number; lit?: boolean; big?: string; small?: string }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - w / 2} y={y - h / 2} width={w} height="11" rx="4" fill={GOLD} />
    {big && <W x={x} y={y + (small ? 7 : 12)} size={14} fill={lit ? WHITE : TEXT}>{big}</W>}
    {small && <W x={x} y={y + 20} size={9.5} fill={lit ? WHITE : TEXT}>{small}</W>}</g>;
/** A clipboard with ruled lines. */
const Clipboard = ({ x, y, w = 64, h = 84, ticks = 0 }: { x: number; y: number; w?: number; h?: number; ticks?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 14} y={y - h / 2 - 5} width="28" height="11" rx="3" fill={INK} />
    {[0, 1, 2].map(index => <g key={index}><path d={`M${x - w / 2 + 24} ${y - h / 2 + 24 + index * 20} H${x + w / 2 - 10}`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />{index < ticks && <Tick x={x - w / 2 + 14} y={y - h / 2 + 24 + index * 20} s={5} />}</g>)}</g>;
/** A small bell, ringing when `ring` is set. */
const Bell = ({ x, y, ring = false }: { x: number; y: number; ring?: boolean }) =>
  <g>
    <path d={`M${x - 16} ${y + 14} C${x - 16} ${y - 12} ${x - 10} ${y - 20} ${x} ${y - 20} C${x + 10} ${y - 20} ${x + 16} ${y - 12} ${x + 16} ${y + 14} Z`} fill={ring ? GOLD : SOFT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx={x} cy={y - 23} r="3" fill={INK} /><circle cx={x} cy={y + 19} r="4" fill={INK} />
    {ring && <path d={`M${x - 26} ${y - 14} A28 28 0 0 0 ${x - 26} ${y + 10} M${x + 26} ${y - 14} A28 28 0 0 1 ${x + 26} ${y + 10}`} stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" />}
  </g>;
/** A simple building with columns, for a college. */
const College = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><path d={`M${x - 40} ${y - 22} L${x} ${y - 46} L${x + 40} ${y - 22} Z`} fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    {[-28, -10, 8, 26].map(dx => <rect key={dx} x={x + dx - 2} y={y - 18} width="6" height="34" fill={INK} />)}
    <rect x={x - 42} y={y + 16} width="84" height="8" rx="2" fill={INK} /></g>;
const Apple = ({ x, y, fill = SOFT }: { x: number; y: number; fill?: string }) =>
  <g><circle cx={x - 5} cy={y + 2} r="10" fill={fill} /><circle cx={x + 5} cy={y + 2} r="10" fill={fill} /><path d={`M${x} ${y - 8} C${x + 2} ${y - 14}, ${x + 6} ${y - 16}, ${x + 10} ${y - 16}`} stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" /></g>;
/** An open book. */
const Book = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}><path d="M-56 -34 Q-28 -46 0 -34 Q28 -46 56 -34 V34 Q28 22 0 34 Q-28 22 -56 34 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M0 -34 V34" stroke={INK} strokeWidth="2" />
    {[-14, 0, 14].map(dy => <path key={dy} d={`M-44 ${dy} H-12 M12 ${dy} H44`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}</g>;
const House = ({ x, y, fill = WHITE }: { x: number; y: number; fill?: string }) =>
  <path d={`M${x - 30} ${y} L${x} ${y - 28} L${x + 30} ${y} V${y + 34} H${x - 30} Z`} fill={fill} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />;
/** A slow breathing circle that gently pulses unless the reader asked for stillness. */
const Breath = ({ x, y, r = 30, still }: { x: number; y: number; r?: number; still: boolean }) =>
  <g><circle cx={x} cy={y} r={r} fill={TINT} stroke={SOFT} strokeWidth="3" /><circle cx={x} cy={y} r={r * 0.55} fill={INK} opacity=".85" className={still ? undefined : "lib-v2-breathe is-slow"} /></g>;
/** A row of `count` small figures, the first `lit` of them filled. */
const Figures = ({ x, y, count, lit, gap = 30, scale = 0.7 }: { x: number; y: number; count: number; lit: number; gap?: number; scale?: number }) =>
  <g>{Array.from({ length: count }, (_, index) => <Person key={index} x={x + index * gap} y={y} scale={scale} fill={index < lit ? INK : SOFT} />)}</g>;

// ==== Schizophrenia ==========================================================================================

function SczRealLayers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Long-term; hard to tell what is real", "Hallucinations, delusions and more", "Episodes, then times with few symptoms", "Not a split personality; many can work", "Many recover; see a GP early"];
  const dim = at === 1 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="What schizophrenia is, and what it is not" label="What schizophrenia is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person looking at a calm view of the world, with a second, dashed layer of their own thoughts over it">
      <Person x={52} y={160} scale={1.3} />
      <g opacity={dim ? 0.3 : 1} display={dim ? "none" : undefined}>
        <rect x="104" y="26" width="170" height="118" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {at !== 2 && <path d="M106 120 C140 96, 170 104, 196 116 S246 94, 272 104 V142 H106 Z" fill={SOFT} opacity=".55" />}
        {at === 2 && <g>
          <path d="M112 118 H132 C142 118, 144 60, 156 60 C168 60, 168 118, 180 118 H206 C214 118, 216 84, 226 84 C236 84, 236 118, 246 118 H268" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <W x={156} y={50} size={10}>Episode</W><W x={194} y={136} size={10}>Calmer times</W>
        </g>}
        {at !== 2 && <Sun x={240} y={58} r={at === 4 ? 14 : 10} />}
      </g>
      {at === 0 && <g>
        <rect x="128" y="44" width="170" height="118" rx="8" fill="none" stroke={GOLD} strokeWidth="2.5" strokeDasharray="6 6" />
        <W x={112} y={18} size={10} anchor="start">Reality</W><W x={298} y={178} size={10} anchor="end">Own thoughts</W>
      </g>}
      {at === 1 && <Tags x={120} y={24} labels={["Hallucinations", "Delusions", "Muddled thoughts", "Quieter signs"]} lit={index => index < 3} width={150} gap={32} />}
      {at === 2 && <W x={190} y={170} size={10.5}>Most often between 20 and 30</W>}
      {at === 3 && <g>
        <Box x={190} y={60} w={150} text="Split personality" /><path d="M136 60 H244" stroke={GOLD} strokeWidth="3" strokeLinecap="round" /><Cross x={284} y={60} s={8} />
        <Box x={190} y={112} w={150} text="Many can work" lit /><Tick x={284} y={112} />
      </g>}
      {at === 4 && <Box x={190} y={170} w={130} text="See a GP early" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SczPlusMinus(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Positive and negative: not good or bad", "Hearing voices is the most common", "Firm unusual beliefs, hazy thinking", "Quieter signs, not laziness", "Not every symptom, not all the time"];
  const left = at === 1 || at === 2, right = at === 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Symptoms" title="What gets added, and what slips away" label="Symptoms of schizophrenia" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two panels: symptoms added to experience, and things that slip away">
      {at < 4 && <g>
        <rect x="14" y="16" width="140" height="160" rx="12" fill={left ? INK : WHITE} stroke={INK} strokeWidth="2" opacity={right ? 0.35 : 1} />
        <rect x="166" y="16" width="140" height="160" rx="12" fill={right ? INK : WHITE} stroke={INK} strokeWidth="2" opacity={left ? 0.35 : 1} />
        <circle cx="38" cy="40" r="13" fill={left ? WHITE : INK} /><path d="M31 40 H45 M38 33 V47" stroke={left ? INK : WHITE} strokeWidth="3" strokeLinecap="round" />
        <W x={58} y={44} size={11} anchor="start" fill={left ? WHITE : TEXT}>Positive</W>
        <circle cx="190" cy="40" r="13" fill={right ? WHITE : INK} /><path d="M183 40 H197" stroke={right ? INK : WHITE} strokeWidth="3" strokeLinecap="round" />
        <W x={210} y={44} size={11} anchor="start" fill={right ? WHITE : TEXT}>Negative</W>
      </g>}
      {at === 0 && <g>
        <W x={84} y={100} size={13}>Added</W><W x={84} y={118} size={10}>to experience</W>
        <W x={236} y={100} size={13}>Taken away</W><W x={236} y={118} size={10}>stops happening</W>
      </g>}
      {at === 1 && <g stroke={WHITE} strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M84 120 C78 120, 76 112, 76 106 C76 92, 84 82, 96 82 C108 82, 114 92, 112 102 C110 110, 102 110, 102 118 C102 126, 94 130, 88 126" />
        <path d="M60 92 A20 20 0 0 0 60 120 M50 84 A32 32 0 0 0 50 128" stroke={GOLD} />
      </g>}
      {at === 1 && <W x={84} y={160} size={11} fill={WHITE}>Hearing voices</W>}
      {at === 2 && <g>
        <Cloud x={84} y={100} s={30} fill={WHITE} />
        {[[66, 98], [80, 90], [96, 102], [104, 92], [74, 108]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="2.6" fill={SOFT} />)}
        <W x={84} y={146} size={10.5} fill={WHITE}>Firm beliefs</W><W x={84} y={162} size={10.5} fill={WHITE}>Hazy thoughts</W>
      </g>}
      {at === 3 && <g>
        <rect x="206" y="78" width="54" height="30" rx="5" fill="none" stroke={WHITE} strokeWidth="3" /><rect x="260" y="86" width="6" height="14" rx="2" fill={WHITE} />
        <rect x="211" y="83" width="12" height="20" rx="2" fill={GOLD} />
        <W x={236} y={140} size={10.5} fill={WHITE}>Less motivation</W><W x={236} y={156} size={10.5} fill={WHITE}>Less emotion</W>
      </g>}
      {at === 4 && <g>
        {[0, 1, 2, 3, 4].map(index => { const x = 40 + index * 60; const marks = [["+"], ["-"], ["+", "-"], ["+"], ["-", "+"]][index]; return <g key={index}>
          <Person x={x} y={150} scale={1} fill={index % 2 ? SOFT : INK} />
          {marks.map((mark, m) => <g key={m}><circle cx={x - (marks.length - 1) * 10 + m * 20} cy={72} r="9" fill={mark === "+" ? INK : WHITE} stroke={INK} strokeWidth="2" /><path d={mark === "+" ? `M${x - (marks.length - 1) * 10 + m * 20 - 4.5} 72 H${x - (marks.length - 1) * 10 + m * 20 + 4.5} M${x - (marks.length - 1) * 10 + m * 20} 67.5 V76.5` : `M${x - (marks.length - 1) * 10 + m * 20 - 4.5} 72 H${x - (marks.length - 1) * 10 + m * 20 + 4.5}`} stroke={mark === "+" ? WHITE : INK} strokeWidth="2.5" strokeLinecap="round" /></g>)}
        </g>; })}
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SczThreads(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A mix of factors; no single cause", "Genes play a part, but not alone", "Brain chemicals such as dopamine", "Stress or drugs can trigger it", "Whatever the reason, not your fault"];
  const threads = [{ y: 38, t: "Genes" }, { y: 78, t: "The brain" }, { y: 122, t: "Stress" }, { y: 162, t: "Drugs" }];
  const lit = [[0, 1, 2, 3], [0], [1], [2, 3], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="Many threads, no single cause" label="Causes of schizophrenia" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four threads, genes, the brain, stress and drugs, loosely meeting in one knot">
      {threads.map((thread, index) => { const on = lit.includes(index); return <g key={thread.t}>
        <path d={`M20 ${thread.y} C100 ${thread.y}, 130 100, 180 100`} stroke={on ? INK : SOFT} strokeWidth={on ? 4 : 3} fill="none" strokeLinecap="round" strokeDasharray={at === 4 ? "4 7" : undefined} />
        <W x={20} y={thread.y - 8} size={10} anchor="start">{thread.t}</W>
      </g>; })}
      <circle cx="180" cy="100" r="13" fill={at === 4 ? TINT : INK} stroke={INK} strokeWidth="2.5" />
      {at === 0 && <><W x={258} y={96} size={12}>No single</W><W x={258} y={112} size={12}>cause</W></>}
      {at === 1 && <g>
        <W x={258} y={52} size={10}>Identical twin</W><W x={258} y={72} size={16}>1 in 2</W>
        <W x={258} y={112} size={10}>Everyone</W><W x={258} y={130} size={11}>about 1 in 100</W>
      </g>}
      {at === 2 && <><Box x={258} y={84} w={96} text="Dopamine" lit /><W x={258} y={122} size={10}>brain chemicals</W></>}
      {at === 3 && <><Box x={258} y={70} w={96} text="Life stress" lit /><Box x={258} y={108} w={96} text="Cannabis" lit /><W x={258} y={142} size={10}>can trigger it</W></>}
      {at === 4 && <Box x={256} y={100} w={104} text="Not your fault" lit />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SczSteppingPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["No single test: start with a GP", "A psychiatrist assesses; not an exam", "Two symptoms, for at least one month", "A diagnosis can take time", "Unhappy? Second opinion or advocate"];
  const stones = [{ x: 40, y: 168, t: "GP" }, { x: 100, y: 142, t: "Team" }, { x: 160, y: 116, t: "Checklist" }, { x: 220, y: 90, t: "Time" }, { x: 280, y: 64, t: "Your care" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diagnosis" title="From a GP visit to the right help" label="Diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Stepping stones rising from a GP to the team, a checklist, time and the right care">
      {stones.map((stone, index) => <g key={stone.t}>
        <ellipse cx={stone.x} cy={stone.y} rx="26" ry="9" fill={index === at ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={stone.x} y={stone.y + 24} size={10}>{stone.t}</W>
      </g>)}
      <circle cx={stones[at].x} cy={stones[at].y - 16} r="8" fill={GOLD} />
      {at === 0 && <Box x={80} y={40} w={124} text="No single test" lit />}
      {at === 1 && <><Box x={80} y={36} w={124} text="Not an exam" lit /><W x={80} y={68} size={10}>Start within 2 weeks</W></>}
      {at === 2 && <g>
        <rect x="22" y="18" width="116" height="84" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[0, 1].map(index => <g key={index}><Tick x={40} y={40 + index * 22} s={6} /><path d={`M56 ${40 + index * 22} H124`} stroke={LINE} strokeWidth="3" strokeLinecap="round" /></g>)}
        <W x={80} y={92} size={10.5}>1 month or more</W>
      </g>}
      {at === 3 && <Clock x={80} y={52} r={24} hand={2.6} />}
      {at === 4 && <><Box x={80} y={30} w={128} text="Second opinion" lit /><Box x={80} y={64} w={128} text="Advocate" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SczMedWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["4 in 5 find them successful", "Tablet, syrup or a depot injection", "Side effects? Tell your team", "Often 1 or 2 years; reduce slowly", "Check before other remedies or smoking"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Antipsychotics, and finding the right one" label="Antipsychotic medicines" credit={medCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Antipsychotic tablets, the ways they can be taken, and a timeline of taking them and reducing slowly">
      {at === 0 && <g>
        {[0, 1, 2, 3, 4].map(index => <Pill key={index} x={48 + index * 56} y={62} fill={index < 4 ? INK : SOFT} />)}
        <W x={160} y={118} size={22}>4 in 5</W>
        <W x={160} y={142} size={10.5}>Calmer in hours; hallucinations take weeks</W>
      </g>}
      {at === 1 && <g>
        <Pill x={70} y={76} /><W x={70} y={124} size={10.5}>Tablet</W>
        <path d="M148 52 H172 V60 C182 64, 184 72, 184 80 V104 H136 V80 C136 72, 138 64, 148 60 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><rect x="140" y="82" width="40" height="14" fill={SOFT} />
        <W x={160} y={124} size={10.5}>Syrup</W>
        <Calendar x={250} y={78} w={56} h={56} big="1 to 4" small="weeks" /><W x={250} y={124} size={10.5}>Depot</W>
      </g>}
      {at === 2 && <g>
        <Tags x={22} y={24} labels={["Drowsiness", "Weight gain", "Dry mouth", "Blurred vision"]} lit={() => false} width={124} gap={34} />
        <Bubble x={238} y={56} text="Tell your team" width={116} />
        <Person x={238} y={156} scale={1.1} />
      </g>}
      {at === 3 && <g>
        <rect x="20" y="78" width="200" height="30" rx="9" fill={INK} /><W x={120} y={98} size={11} fill={WHITE}>Often 1 or 2 years</W>
        <path d="M224 84 H240 V94 H256 V104 H272 V114 H288 V124 H302" stroke={GOLD} strokeWidth="3.5" fill="none" />
        <W x={262} y={148} size={10.5}>Slowly</W>
        <W x={120} y={140} size={10}>Longer if it comes back</W>
      </g>}
      {at === 4 && <g>
        <Pill x={58} y={70} />
        <Tags x={118} y={30} labels={["Painkillers", "Supplements", "Smoking"]} lit={() => false} width={140} gap={34} />
        <Box x={160} y={160} w={190} text="Reviewed once a year or more" size={10} lit />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SczChairs(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Works best alongside medicine", "CBT: at least 16 weekly sessions", "Family therapy: at least 10 sessions", "Arts therapies and peer support"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Therapy" title="Talking therapy, alongside medicine" label="Talking therapies" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two chairs for talking therapy, a family table and an easel for arts therapy">
      {at === 0 && <g>
        <Pill x={70} y={92} /><W x={70} y={130} size={10.5}>Medicine</W>
        <W x={130} y={98} size={22}>+</W>
        <Chair x={200} y={110} /><Chair x={262} y={110} flip />
        <W x={231} y={156} size={10.5}>Therapy</W>
      </g>}
      {at === 1 && <g>
        <Person x={116} y={96} scale={0.9} /><Chair x={110} y={104} />
        <Person x={204} y={96} scale={0.9} fill={SOFT} /><Chair x={210} y={104} flip />
        {Array.from({ length: 16 }, (_, index) => <circle key={index} cx={55 + (index % 8) * 30} cy={146 + Math.floor(index / 8) * 20} r="7" fill={INK} />)}
      </g>}
      {at === 2 && <g>
        {[{ x: 104, y: 112 }, { x: 140, y: 100 }, { x: 180, y: 100 }, { x: 216, y: 112 }].map((p, index) => <Person key={index} x={p.x} y={p.y} scale={0.8} fill={index === 1 ? INK : SOFT} />)}
        <ellipse cx="160" cy="124" rx="86" ry="20" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <W x={160} y={170} size={10.5}>3 months to a year</W>
      </g>}
      {at === 3 && <g>
        <path d="M60 40 H120 V96 H60 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M64 88 C78 70, 90 76, 100 82 S112 70, 116 74" stroke={SOFT} strokeWidth="3" fill="none" /><circle cx="104" cy="54" r="6" fill={GOLD} />
        <path d="M74 96 L62 150 M106 96 L118 150 M90 96 V146" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <path d="M170 80 V48 L196 42 V74" stroke={INK} strokeWidth="3" fill="none" /><circle cx="164" cy="80" r="7" fill={INK} /><circle cx="190" cy="74" r="7" fill={INK} />
        <W x={90} y={170} size={10.5}>Arts</W>
        <Person x={240} y={150} scale={0.9} /><Person x={282} y={150} scale={0.9} fill={SOFT} />
        <W x={261} y={182} size={10.5}>Peer support</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SczHelpList(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["999 or A&E; for urgent help, 111", "Samaritans 116 123, any time", "A crisis plan, and support at home", "Write down your wishes in advance", "Someone in crisis? Contact their team"];
  const rows = ["999 or A&E", "111, mental health", "Samaritans 116 123", "Text SHOUT to 85258"];
  const on = [[0, 1], [2, 3], [], [], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="In a crisis" title="Help is there, day or night" label="In a crisis" credit={helpCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A list of who to call: 999 or A&E, 111, Samaritans and Shout, beside a crisis plan">
      <g opacity={at >= 2 ? 0.4 : 1}>
        {rows.map((row, index) => { const lit = on.includes(index); return <g key={row}>
          <rect x="16" y={22 + index * 40} width="176" height="32" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <W x={104} y={42 + index * 40} size={10.5} fill={lit ? WHITE : TEXT}>{row}</W>
        </g>; })}
      </g>
      {at === 0 && <><W x={256} y={88} size={10}>You will not</W><W x={256} y={104} size={10}>be wasting</W><W x={256} y={120} size={10}>anyone's time</W></>}
      {at === 1 && <><Clock x={256} y={80} r={24} hand={4.2} /><W x={256} y={128} size={10.5}>Any time</W></>}
      {at === 2 && <><Clipboard x={256} y={84} ticks={3} /><W x={256} y={150} size={10.5}>Crisis plan</W></>}
      {at === 3 && <g>
        <rect x="226" y="34" width="60" height="80" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[0, 1, 2, 3].map(index => <path key={index} d={`M236 ${52 + index * 14} H276`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}
        <path d="M262 112 L292 82" stroke={GOLD} strokeWidth="5" strokeLinecap="round" />
        <W x={256} y={140} size={10}>Advance</W><W x={256} y={154} size={10}>statement</W>
      </g>}
      {at === 4 && <><Person x={236} y={130} scale={1} fill={SOFT} /><Person x={280} y={130} scale={1} /><W x={258} y={168} size={10}>Their team</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SczHealthCheck(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Heart health needs careful watching", "Checks before any antipsychotic", "A free check once a year", "Eat well, move more, sleep regularly"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Physical health" title="Your body matters too" label="Physical health checks" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with a heart, a checklist of health checks, a yearly calendar and everyday habits">
      {at === 0 && <g>
        <Person x={84} y={152} scale={1.7} />
        <HeartShape x={84} y={140} size={26} fill={GOLD} stroke={GOLD} width={2} />
        <Tags x={170} y={44} labels={["Cholesterol", "Blood sugar", "Blood pressure"]} lit={() => true} width={124} gap={36} />
      </g>}
      {at === 1 && <g>
        <rect x="24" y="22" width="166" height="156" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {["Blood tests", "Blood pressure", "Height, weight", "ECG of the heart"].map((label, index) => <g key={label}>
          <rect x="36" y={38 + index * 34} width="16" height="16" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><Tick x={44} y={46 + index * 34} s={5} />
          <W x={62} y={51 + index * 34} size={10.5} anchor="start">{label}</W>
        </g>)}
        <Pill x={252} y={76} /><W x={252} y={112} size={10.5}>Before</W><W x={252} y={128} size={10.5}>starting</W>
      </g>}
      {at === 2 && <g>
        <Calendar x={98} y={96} w={96} h={96} big="Once" small="a year" lit />
        <Clock x={230} y={84} r={28} hand={4.7} />
        <W x={230} y={136} size={10.5}>About 45 minutes</W>
      </g>}
      {at === 3 && <g>
        <Apple x={50} y={88} />
        <Person x={125} y={102} scale={0.9} />
        <Moon x={200} y={86} r={14} />
        <g><rect x="250" y="82" width="48" height="10" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="290" y="82" width="8" height="10" fill={SOFT} /><Cross x={274} y={87} s={14} /></g>
        {["Food", "Exercise", "Sleep", "Not smoking"].map((label, index) => <W key={label} x={50 + index * 75} y={138} size={10.5}>{label}</W>)}
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SczEarlyLights(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Ups and downs can still happen", "Early signs: sleep, appetite, worry", "Someone you trust can help you notice", "A care plan with steps and numbers", "Medicine as prescribed, even if well"];
  const lamps = ["Sleep", "Appetite", "Worry", "Quiet voices"];
  const lit = [[], [0, 1, 2], [0, 1, 2, 3], [], []][at];
  const icon = (index: number, x: number, y: number, c: string) => [
    <Moon key="m" x={x} y={y} r={9} fill={c} />,
    <g key="p"><circle cx={x} cy={y} r="10" fill="none" stroke={c} strokeWidth="2.5" /><circle cx={x} cy={y} r="4" fill={c} /></g>,
    <Cloud key="c" x={x} y={y + 2} s={11} fill={c} />,
    <path key="v" d={`M${x - 8} ${y - 6} A10 10 0 0 1 ${x - 8} ${y + 6} M${x} ${y - 10} A16 16 0 0 1 ${x} ${y + 10}`} stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round" />,
  ][index];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Relapse" title="Catching the first small signs" label="Early signs of relapse" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A row of small warning lights for sleep, appetite, worry and quiet voices, and a plan">
      {lamps.map((lamp, index) => { const x = 46 + index * 76, on = lit.includes(index); return <g key={lamp} opacity={at >= 3 ? 0.4 : 1}>
        {on && <circle cx={x} cy={44} r="27" fill="none" stroke={GOLD} strokeWidth="2.5" />}
        <circle cx={x} cy={44} r="21" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        {icon(index, x, 44, on ? WHITE : INK)}
        <W x={x} y={86} size={10}>{lamp}</W>
      </g>; })}
      {at === 0 && <><path d="M20 140 C70 140, 90 168, 130 166 S210 120, 300 116" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" /><circle cx="130" cy="166" r="7" fill={GOLD} /></>}
      {at === 1 && <W x={160} y={138} size={12}>Your relapse signature</W>}
      {at === 2 && <><Person x={110} y={176} scale={0.9} fill={SOFT} /><Person x={150} y={176} scale={0.9} /><Bubble x={222} y={124} text="Noticed a change?" width={128} /></>}
      {at === 3 && <g>
        <rect x="70" y="104" width="180" height="78" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {["Signs", "Steps", "Numbers"].map((label, index) => <g key={label}><Tick x={92} y={124 + index * 22} s={6} /><W x={108} y={128 + index * 22} size={10.5} anchor="start">{label}</W></g>)}
      </g>}
      {at === 4 && <><Pill x={96} y={142} /><W x={200} y={138} size={10.5}>As prescribed,</W><W x={200} y={154} size={10.5}>even when well</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SczWeekPlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Many can work, full or part time", "Equality Act: 12 months or more", "Access to Work: a grant or a plan", "PIP can help with extra living costs", "A weekly structure; tell the DVLA"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const blocks = at === 4 ? ["Centre", "Group", "Project", "Group", "Walk"] : ["Work", "Work", "", "Work", ""];
  const dim = at >= 1 && at <= 3;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Daily life" title="Work, money and a week with shape" label="Work, money and daily life" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A weekly planner, with work, support at work, money and a structure for the week">
      <g opacity={dim ? 0.35 : 1}>
        {days.map((day, index) => { const x = 20 + index * 58; return <g key={day}>
          <rect x={x} y="18" width="52" height="92" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" />
          <W x={x + 26} y={34} size={10}>{day}</W>
          {blocks[index] && <><rect x={x + 5} y="46" width="42" height="40" rx="5" fill={INK} /><W x={x + 26} y={70} size={9.5} fill={WHITE}>{blocks[index]}</W></>}
        </g>; })}
      </g>
      {at === 1 && <><Box x={96} y={150} w={160} text="Reasonable adjustments" size={10} lit /><Calendar x={250} y={150} w={56} h={54} big="12" small="months" /></>}
      {at === 2 && <><Box x={160} y={146} w={170} text="Access to Work" lit /><W x={160} y={178} size={10.5}>No need to pay it back</W></>}
      {at === 3 && <g>
        <path d="M70 128 H124 V180 H70 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="66" y="120" width="62" height="10" rx="3" fill={INK} />
        <W x={97} y={160} size={14}>PIP</W>
        <W x={220} y={146} size={10.5}>Even if</W><W x={220} y={162} size={10.5}>you are working</W>
      </g>}
      {at === 4 && <g>
        <path d="M60 162 V150 L74 136 H110 L124 150 V162 Z" fill={INK} /><circle cx="76" cy="164" r="7" fill={TEXT} /><circle cx="110" cy="164" r="7" fill={TEXT} />
        <Box x={220} y={152} w={130} text="Tell the DVLA" lit />
      </g>}
      {at === 0 && <W x={160} y={146} size={10.5}>More support, or shorter hours, if needed</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SczFeelingBubble(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["You matter in their recovery", "Validate the feeling, not the belief", "Small steps, and praise each one", "Ask to see the care plan", "Carers can get a free assessment"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Family and carers" title="Listening to the feeling, not the belief" label="For families and carers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people, one caring for the other, listening to how they feel">
      <Person x={84} y={170} scale={1.3} fill={at === 4 ? SOFT : INK} />
      <Person x={236} y={170} scale={1.3} fill={at === 4 ? INK : SOFT} />
      {at === 0 && <><HeartShape x={160} y={110} size={34} fill={GOLD} stroke={GOLD} width={2} /><W x={160} y={56} size={10.5}>Support and understanding</W></>}
      {at === 1 && <><Cloud x={78} y={70} s={22} /><Bubble x={226} y={56} text="That sounds scary" width={132} /></>}
      {at === 2 && <g>
        <path d="M112 150 H140 V128 H168 V106 H196 V84 H220" stroke={INK} strokeWidth="3.5" fill="none" strokeLinejoin="round" />
        {[[126, 140], [154, 118], [182, 96]].map(([x, y], index) => <circle key={x} cx={x} cy={y} r="5" fill={index < 2 ? GOLD : SOFT} />)}
      </g>}
      {at === 3 && <><Clipboard x={160} y={90} w={70} h={86} ticks={2} /><W x={160} y={152} size={10.5}>Care plan</W></>}
      {at === 4 && <><Box x={160} y={44} w={160} text="Carer's assessment" lit /><HeartShape x={236} y={92} size={28} fill={GOLD} stroke={GOLD} width={2} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SczCircle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Groups, face to face or online", "Charities that share coping ideas", "Recovery colleges: free courses", "Doing things you enjoy with others", "Treatable; many live fulfilling lives"];
  const seats = Array.from({ length: 6 }, (_, index) => { const a = -Math.PI / 2 + index * Math.PI / 3; return { x: 96 + 58 * Math.cos(a), y: 108 + 56 * Math.sin(a) }; });
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="Finding people who understand" label="Support and charities" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A circle of people in a support group, beside an online group, a college and a garden">
      <circle cx="96" cy="100" r="44" fill={TINT} stroke={at === 0 ? GOLD : SOFT} strokeWidth="2.5" strokeDasharray={at === 0 ? undefined : "5 6"} />
      {seats.map((seat, index) => <Person key={index} x={seat.x} y={seat.y} scale={0.6} fill={at === 0 || index % 2 === 0 ? INK : SOFT} />)}
      {at === 0 && <g>
        <rect x="200" y="62" width="96" height="64" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M190 132 H306" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <Person x={230} y={112} scale={0.55} /><Person x={266} y={112} scale={0.55} fill={SOFT} />
        <W x={248} y={156} size={10.5}>Online</W>
      </g>}
      {at === 1 && <Tags x={186} y={30} labels={["Hearing Voices", "Rethink", "SANE", "Mind"]} lit={index => index === 0} width={120} gap={34} />}
      {at === 2 && <><College x={248} y={100} lit /><W x={248} y={146} size={10.5}>Refer yourself</W></>}
      {at === 3 && <g>
        <path d="M228 120 H268 L262 156 H234 Z" fill={INK} />
        <path d="M248 120 V82 M248 98 C238 90, 230 90, 226 80 C238 78, 246 84, 248 98 M248 92 C256 82, 266 80, 272 84 C266 94, 256 94, 248 92" stroke={INK} strokeWidth="2.5" fill={TINT} strokeLinejoin="round" />
        <W x={248} y={176} size={10.5}>A gardening group</W>
      </g>}
      {at === 4 && <><Sun x={248} y={62} r={16} /><Phone x={248} y={128} lit /><W x={248} y={166} size={11}>Samaritans 116 123</W></>}
      {at === 4 && !still && <circle cx="248" cy="62" r="34" fill="none" stroke={GOLD} strokeWidth="2" className="lib-why-pulse" />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Personality disorder ===================================================================================

function PersdSliders(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Traits we all have, on a scale", "When traits make coping very hard", "Now described by severity and traits", "Around 1 in 20 people live with one", "Many people recover over time"];
  const traits = ["Feeling emotional", "Getting jealous", "Wanting to be liked"];
  const spots = [[0.4, 0.55, 0.48], [0.92, 0.86, 0.9], [0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [0.58, 0.62, 0.56]][at];
  const dim = at === 2 || at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Traits on a scale, not a flaw" label="What a personality disorder is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three sliders for personality traits, most set in the middle and, for some people, pushed far along">
      <g opacity={dim ? 0.3 : 1}>
        {traits.map((trait, index) => { const y = 42 + index * 42, x = 30 + 260 * spots[index]; return <g key={trait}>
          <W x={30} y={y - 12} size={10} anchor="start">{trait}</W>
          <rect x="30" y={y - 3} width="260" height="6" rx="3" fill={LINE} />
          <rect x="30" y={y - 3} width={x - 30} height="6" rx="3" fill={at === 1 ? INK : SOFT} />
          <circle cx={x} cy={y} r="9" fill={at === 1 ? GOLD : at === 4 ? GOLD : INK} stroke={WHITE} strokeWidth="2.5" />
        </g>; })}
        {at === 0 && <><W x={30} y={146} size={10} anchor="start">Less</W><W x={290} y={146} size={10} anchor="end">More intense</W></>}
      </g>
      {at === 2 && <><Box x={70} y={164} w={84} text="Mild" /><Box x={160} y={164} w={84} text="Moderate" lit /><Box x={250} y={164} w={84} text="Severe" /></>}
      {at === 3 && Array.from({ length: 20 }, (_, index) => <circle key={index} cx={27 + index * 14.0} cy={162} r="5.5" fill={index === 9 ? INK : SOFT} />)}
      {at === 4 && <W x={160} y={164} size={10.5}>BPD: 50 to 70 in 100 improve</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PersdFourAreas(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Also called EUPD; about 1 in 100", "Four main areas of symptoms", "Intense emotions; quick mood swings", "Upsetting thoughts and strong impulses", "With treatment, many recover"];
  const tiles = [{ x: 20, y: 18, t: "Emotions", d: "Intense, changing" }, { x: 164, y: 18, t: "Thinking", d: "Upsetting thoughts" }, { x: 20, y: 102, t: "Impulses", d: "Hard to control" }, { x: 164, y: 102, t: "Relating", d: "Intense, unstable" }];
  const lit = [[], [0, 1, 2, 3], [0], [1, 2], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="BPD" title="Emotions, thoughts, impulses, relationships" label="Borderline personality disorder" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four areas around a person: emotions, thinking, impulses and relationships">
      {tiles.map((tile, index) => { const on = lit.includes(index), tx = index % 2 ? tile.x + 76 : tile.x + 62; return <g key={tile.t} opacity={at === 4 || at === 0 ? 0.4 : 1}>
        <rect x={tile.x} y={tile.y} width="136" height="76" rx="12" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={tx} y={tile.y + (index < 2 ? 30 : 52)} size={11} fill={on ? WHITE : TEXT}>{tile.t}</W>
        {on && <W x={tx} y={tile.y + (index < 2 ? 48 : 34)} size={9.5} fill={WHITE}>{tile.d}</W>}
      </g>; })}
      {at === 2 && <path d="M30 84 C40 77, 50 77, 58 84 S76 91, 86 84 S104 77, 114 84" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" />}
      <circle cx="160" cy="98" r="32" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {at === 4 ? <Sun x={160} y={98} r={12} /> : <Person x={160} y={112} scale={0.62} />}
      {at === 0 && <W x={160} y={192} size={10}>Most common in early adulthood</W>}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function PersdRope(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Genes and life experiences together", "Genes, and how parts of the brain work", "Often, difficult childhood experiences", "Hard times do not make it certain", "A formulation: your full picture"];
  const strands = [{ y: 34, t: "Genes" }, { y: 74, t: "The brain" }, { y: 126, t: "Childhood" }, { y: 166, t: "Later life" }];
  const lit = [[0, 1, 2, 3], [0, 1], [2], [3], [0, 1, 2, 3]][at];
  const end = at === 4 ? 210 : 300;
  const twist = (k: number) => { let d = ""; for (let x = 170; x <= end; x += 5) d += `${x === 170 ? "M" : "L"}${x} ${(100 + 8 * Math.sin((x - 170) / 12 + k * Math.PI / 2)).toFixed(1)} `; return d; };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="No single cause, many strands" label="Causes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four strands, genes, the brain, childhood and later life, twisting into one rope">
      {strands.map((strand, k) => { const on = lit.includes(k), y1 = 100 + 8 * Math.sin(k * Math.PI / 2); return <g key={strand.t}>
        <path d={`M20 ${strand.y} C100 ${strand.y}, 120 ${y1}, 170 ${y1}`} stroke={on ? INK : SOFT} strokeWidth={on ? 4 : 3} fill="none" strokeLinecap="round" />
        <path d={twist(k)} stroke={on ? INK : SOFT} strokeWidth={on ? 4 : 3} fill="none" strokeLinecap="round" />
        <W x={20} y={strand.y - 8} size={10} anchor="start">{strand.t}</W>
      </g>; })}
      {at === 2 && <House x={250} y={150} fill={TINT} />}
      {at === 3 && <W x={232} y={150} size={10}>More likely, not certain</W>}
      {at === 4 && <g>
        <rect x="216" y="50" width="92" height="100" rx="8" fill={INK} />
        <W x={262} y={76} size={10.5} fill={WHITE}>Your full</W><W x={262} y={92} size={10.5} fill={WHITE}>picture</W>
        <Tick x={262} y={122} s={10} />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PersdTableTalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A GP refers; a psychiatrist diagnoses", "Not a test: about the right help", "Agreed together, and explained", "Some would like a new name", "Disagree? Review or second opinion"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diagnosis" title="A careful, shared diagnosis" label="Diagnosis" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people talking across a small table, agreeing on a diagnosis together">
      <Person x={94} y={146} scale={0.9} /><Chair x={88} y={154} />
      <Person x={226} y={146} scale={0.9} fill={SOFT} /><Chair x={232} y={154} flip />
      <path d="M134 140 H186 M160 140 V174" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <><Box x={70} y={44} w={64} text="GP" /><Arrow d="M108 44 H160" head="M153 38 L160 44 L153 50" /><Box x={232} y={44} w={120} text="Psychiatrist" lit /></>}
      {at === 1 && <Bubble x={150} y={52} text="What has helped you?" width={156} />}
      {at === 2 && <><Bubble x={110} y={46} text="Why it may help" width={124} /><Box x={250} y={60} w={86} text="Agreed" lit /><Tick x={250} y={88} /></>}
      {at === 3 && <Tags x={80} y={20} labels={["Complex emotional needs", "Complex PTSD"]} lit={index => index === 0} width={160} gap={34} />}
      {at === 4 && <><Box x={90} y={44} w={132} text="Ask for a review" lit /><Box x={236} y={44} w={132} text="Second opinion" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PersdSkillsWheel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["At least 3 months, often longer", "DBT: four modules, over 12 months", "MBT: thinking about thinking", "Schema, STEPPS, CAT and arts therapies", "If one does not suit, another may"];
  const parts = ["Distress", "Emotions", "People", "Mindful"];
  const cx = 92, cy = 100, r = 64;
  const wedge = (index: number) => { const a0 = -Math.PI / 2 + index * Math.PI / 2, a1 = a0 + Math.PI / 2; return `M${cx} ${cy} L${cx + r * Math.cos(a0)} ${cy + r * Math.sin(a0)} A${r} ${r} 0 0 1 ${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)} Z`; };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Therapy" title="Therapies that teach new skills" label="Talking therapies" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A wheel of four DBT skills, and the other therapies beside it">
      <g opacity={at === 1 ? 1 : 0.4}>
        {parts.map((part, index) => { const a = -Math.PI / 4 + index * Math.PI / 2; return <g key={part}>
          <path d={wedge(index)} fill={at === 1 ? (index % 2 ? INK : TEXT) : WHITE} stroke={INK} strokeWidth="2" />
          <W x={cx + 38 * Math.cos(a)} y={cy + 38 * Math.sin(a) + 4} size={9.5} fill={at === 1 ? WHITE : TEXT}>{part}</W>
        </g>; })}
      </g>
      {at === 0 && <><W x={244} y={78} size={11}>At least</W><W x={244} y={100} size={18}>3 months</W><W x={244} y={130} size={10.5}>often a year or more</W></>}
      {at === 1 && <><W x={244} y={66} size={10.5}>1 group and</W><W x={244} y={82} size={10.5}>1 individual</W><W x={244} y={98} size={10.5}>session a week</W><W x={244} y={128} size={14}>12 months</W></>}
      {at === 2 && <g>
        <Person x={214} y={150} scale={0.8} /><Person x={276} y={150} scale={0.8} fill={SOFT} />
        <Cloud x={214} y={90} s={14} /><Cloud x={276} y={90} s={14} fill={TINT} />
        <W x={245} y={180} size={10.5}>About 18 months</W>
      </g>}
      {at === 3 && <Tags x={186} y={26} labels={["Schema", "STEPPS", "CAT", "Arts"]} lit={() => true} width={116} gap={36} />}
      {at === 4 && <><Box x={244} y={60} w={116} text="One approach" /><Arrow d="M244 78 V116" head="M238 109 L244 116 L250 109" /><Box x={244} y={134} w={116} text="Another" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PersdMedLabel(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["No medicine is licensed for BPD", "Sometimes for another condition", "Crisis courses: no more than 1 week", "Decide together; do not stop suddenly"];
  const label = ["BPD", "Mood", "Short", ""][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Medicine for what comes alongside" label="Medicines" credit={medCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A medicine bottle with its label, showing what medicine may and may not be for">
      <rect x="72" y="30" width="56" height="22" rx="4" fill={INK} />
      <rect x="60" y="52" width="80" height="124" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="66" y="88" width="68" height="48" rx="4" fill={TINT} stroke={INK} strokeWidth="1.5" />
      {label ? <W x={100} y={117} size={12}>{label}</W> : <>{[0, 1, 2].map(index => <path key={index} d={`M76 ${102 + index * 12} H124`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}</>}
      {at === 0 && <><Cross x={100} y={112} s={16} /><W x={234} y={96} size={12}>No licensed</W><W x={234} y={114} size={12}>medicine</W></>}
      {at === 1 && <Tags x={176} y={46} labels={["Depression", "Anxiety", "Bipolar"]} lit={() => true} width={116} gap={36} />}
      {at === 2 && <g>
        {Array.from({ length: 7 }, (_, index) => <rect key={index} x={172 + index * 19} y="84" width="15" height="24" rx="3" fill={INK} />)}
        <W x={236} y={136} size={10.5}>1 week at most</W>
      </g>}
      {at === 3 && <g>
        <Person x={202} y={164} scale={0.8} /><Person x={284} y={164} scale={0.8} fill={SOFT} />
        <rect x="224" y="50" width="38" height="50" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />
        {[0, 1, 2].map(index => <path key={index} d={`M231 ${64 + index * 11} H255`} stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />)}
        <W x={243} y={122} size={10}>Written information</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PersdFoldedCard(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Talking to someone who understands", "Triggers, skills and who to call", "111: select the mental health option", "A GP asks what helped before", "Update the plan after a crisis"];
  const panels = ["Triggers", "Skills", "Numbers"];
  const showCard = at === 1 || at === 2 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Crisis plan" title="A crisis plan, written with you" label="A crisis plan" credit={helpCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A three-part crisis plan: triggers, skills and numbers to call">
      {showCard && panels.map((panel, index) => { const x = 26 + index * 92, lit = at === 2 && index === 2; return <g key={panel}>
        <rect x={x} y="24" width="84" height="120" rx="6" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={x + 42} y={44} size={10.5} fill={lit ? WHITE : TEXT}>{panel}</W>
        {index === 0 && <Cloud x={x + 42} y={92} s={18} />}
        {index === 1 && <g><rect x={x + 18} y="80" width="48" height="30" rx="4" fill={SOFT} /><path d={`M${x + 32} 80 V72 H${x + 52} V80`} stroke={INK} strokeWidth="3" fill="none" /></g>}
        {index === 2 && <Phone x={x + 42} y={92} lit={!lit} />}
        {index === 1 && at === 4 && <Tick x={x + 42} y={128} s={9} />}
      </g>; })}
      {at === 2 && <W x={160} y={170} size={10.5}>Urgent helpline: 24 hours, 7 days</W>}
      {at === 4 && <path d="M250 176 L292 134" stroke={GOLD} strokeWidth="5" strokeLinecap="round" />}
      {at === 0 && <><Person x={116} y={160} scale={1.2} /><Person x={204} y={160} scale={1.2} fill={SOFT} /><Bubble x={214} y={66} text="I understand" width={108} /></>}
      {at === 3 && <><Box x={160} y={40} w={60} text="GP" lit /><Bubble x={176} y={88} text="What helped before?" width={150} /><Person x={110} y={170} scale={1.1} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PersdWave(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Skills to handle distress safely", "Feelings are valid; step back", "Silently name it: this is anxiety", "Breathe slowly for at least 5 minutes", "Sleep, food, exercise and routine"];
  const amp = [26, 22, 18, 12, 8][at];
  const wy = (x: number) => 150 + amp * Math.sin((x - 20) / 36);
  let d = ""; for (let x = 10; x <= 310; x += 5) d += `${x === 10 ? "M" : "L"}${x} ${wy(x).toFixed(1)} `;
  const sx = 160, sy = wy(160);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Emotions" title="Riding out strong emotions" label="Managing intense emotions" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A small figure keeping balance on a wave that grows calmer">
      <path d={`${d} L310 190 L10 190 Z`} fill={SOFT} opacity=".3" />
      <path d={d} stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <ellipse cx={sx} cy={sy - 3} rx="20" ry="4" fill={GOLD} />
      <Person x={sx} y={sy - 15} scale={0.6} />
      {at === 0 && <><Box x={86} y={40} w={140} text="Distress tolerance" size={10} lit /><Box x={234} y={40} w={140} text="Emotion regulation" size={10} lit /></>}
      {at === 1 && <Bubble x={176} y={46} text="My feelings are valid" width={156} />}
      {at === 2 && <Bubble x={176} y={46} text="This is anxiety" width={124} />}
      {at === 3 && <><Breath x={256} y={56} r={28} still={still} /><W x={256} y={102} size={10.5}>5 minutes</W></>}
      {at === 4 && <g>
        <Moon x={70} y={40} r={13} /><Apple x={160} y={42} /><Clock x={250} y={40} r={14} hand={1.6} />
        <W x={70} y={74} size={10}>Sleep</W><W x={160} y={74} size={10}>Food</W><W x={250} y={74} size={10}>Routine</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PersdGreyBar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Fear of being left, or smothered", "Seeing it as all good or all bad", "Early experiences can play a part", "Skills to see the grey areas", "Share feelings with people you trust"];
  const marker = [-1, -1, -1, 0.5, -1][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Relationships" title="Finding the grey between extremes" label="Relationships" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bar from black to white, and a marker settling in the grey middle">
      <g opacity={at === 0 || at === 2 || at === 4 ? 0.4 : 1}>
        {Array.from({ length: 9 }, (_, index) => <rect key={index} x={30 + index * 29} y="130" width="29" height="24" fill={INK} opacity={1 - index * 0.115} />)}
        <rect x="30" y="130" width="261" height="24" fill="none" stroke={INK} strokeWidth="2" />
        <W x={30} y={174} size={10} anchor="start">Doomed</W><W x={290} y={174} size={10} anchor="end">Perfect</W>
      </g>
      {at === 1 && <g>
        <path d="M44 120 L36 108 H52 Z M276 120 L268 108 H284 Z" fill={GOLD} />
        <path d="M48 96 C110 40, 210 40, 272 96" stroke={GOLD} strokeWidth="2.5" fill="none" strokeDasharray="4 6" />
        <path d="M264 90 L272 96 L274 86" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>}
      {marker >= 0 && <><path d={`M${30 + 261 * marker} 122 L${22 + 261 * marker} 108 H${38 + 261 * marker} Z`} fill={GOLD} /><W x={30 + 261 * marker} y={96} size={11}>The grey area</W></>}
      {at === 0 && <><Person x={64} y={100} scale={1} /><Person x={256} y={100} scale={1} fill={SOFT} /><path d="M92 76 H228" stroke={GOLD} strokeWidth="2.5" strokeDasharray="3 7" strokeLinecap="round" /></>}
      {at === 2 && <House x={160} y={60} fill={TINT} />}
      {at === 4 && <><Person x={140} y={100} scale={1} /><Person x={180} y={100} scale={1} fill={SOFT} /><HeartShape x={160} y={36} size={28} fill={GOLD} stroke={GOLD} width={2} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PersdWaitTimer(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A way of coping with distress", "The earlier the help, the easier", "A GP, and therapy for safer ways", "Delay, and try something safer", "Tell someone you trust"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Self-harm" title="Safer ways through an urge" label="Self-harm and urges" credit={helpCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A short wait on a timer, and safer things to do: contact someone, write it down, go for a walk">
      {at === 0 && <><Person x={90} y={164} scale={1.3} /><Cloud x={90} y={66} s={26} /><W x={230} y={92} size={10.5}>Most people</W><W x={230} y={108} size={10.5}>try to hide it</W></>}
      {at === 1 && <g>
        <Person x={58} y={164} scale={1.2} />
        <path d="M86 150 C130 150, 160 140, 196 140" stroke={GOLD} strokeWidth="3" fill="none" strokeDasharray="4 6" strokeLinecap="round" />
        <Box x={250} y={140} w={110} text="Get support" lit />
        <Sun x={250} y={64} r={14} />
      </g>}
      {at === 2 && <g>
        <Person x={98} y={120} scale={0.9} /><Chair x={92} y={128} />
        <Person x={222} y={120} scale={0.9} fill={SOFT} /><Chair x={228} y={128} flip />
        <Box x={160} y={36} w={124} text="DBT, or a GP" lit />
        <W x={160} y={176} size={10.5}>4 to 10 sessions of therapy</W>
      </g>}
      {at === 3 && <g>
        <circle cx="76" cy="100" r="36" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="70" y="56" width="12" height="8" rx="2" fill={INK} />
        <path d="M76 100 V72" stroke={TEXT} strokeWidth="3" strokeLinecap="round" />
        <path d="M76 64 A36 36 0 0 1 108 84" stroke={GOLD} strokeWidth="5" fill="none" strokeLinecap="round" />
        <Tags x={146} y={44} labels={["Contact someone", "Write it down", "Go for a walk"]} lit={index => index === 0} width={150} gap={38} />
      </g>}
      {at === 4 && <g>
        <Phone x={86} y={86} lit /><path d="M104 66 h40 a6 6 0 0 1 6 6 v12 a6 6 0 0 1 -6 6 h-32 l-8 6 Z" fill={GOLD} />
        <rect x="184" y="64" width="64" height="44" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M184 66 L216 90 L248 66" stroke={INK} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        <Box x={160} y={154} w={170} text="A friend, GP or helpline" lit />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PersdSideBySide(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["It is okay to feel frustrated", "Read about BPD; ask how to help", "If they agree, join care planning", "Walking alongside, not fixing", "A free carer's assessment for you"];
  const close = at === 3;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Family and friends" title="Walking alongside, not fixing" label="For family and friends" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people walking side by side along a path">
      <path d="M10 184 C80 184, 140 176, 200 158 S280 118, 312 108" stroke={SOFT} strokeWidth="10" fill="none" strokeLinecap="round" />
      <Person x={close ? 92 : 84} y={166} scale={1.1} fill={at === 4 ? SOFT : INK} />
      <Person x={close ? 134 : 140} y={162} scale={1.1} fill={at === 4 ? INK : SOFT} />
      {close && <path d="M108 152 Q113 158, 118 150" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />}
      {at === 0 && <Cloud x={142} y={106} s={14} opacity={0.6} />}
      {at === 1 && <Book x={236} y={64} s={0.8} />}
      {at === 2 && <><Clipboard x={240} y={66} ticks={2} /><W x={240} y={126} size={10.5}>Care plan</W></>}
      {at === 3 && <path d="M150 140 C190 130, 220 110, 262 92" stroke={GOLD} strokeWidth="2.5" fill="none" strokeDasharray="3 7" strokeLinecap="round" />}
      {at === 4 && <><HeartShape x={142} y={98} size={26} fill={GOLD} stroke={GOLD} width={2} /><W x={240} y={56} size={10.5}>Carers UK</W><W x={240} y={74} size={11}>0808 808 7777</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PersdPeerRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Peer support: connected and hopeful", "Recovery colleges; refer yourself", "Emergence, BPD World and more", "Samaritans 116 123, any time", "Not happy with care? Contact PALS"];
  const faces = Array.from({ length: 7 }, (_, index) => { const a = -Math.PI / 2 + index * 2 * Math.PI / 7; return { x: 92 + 56 * Math.cos(a), y: 100 + 56 * Math.sin(a) }; });
  const tiles = [{ n: "116 123", t: "Samaritans" }, { n: "85258", t: "Text SHOUT" }, { n: "111", t: "Mental health" }, { n: "999", t: "or A&E" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="People who understand" label="Support and charities" credit={at === 3 ? helpCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ring of people in a peer group, beside a college, charities and helplines">
      {at !== 3 && <g opacity={at === 0 ? 1 : 0.4}>
        <circle cx="92" cy="100" r="56" fill="none" stroke={at === 0 ? GOLD : SOFT} strokeWidth="3" />
        {faces.map((face, index) => <g key={index}><circle cx={face.x} cy={face.y} r="14" fill={index % 2 ? SOFT : INK} stroke={WHITE} strokeWidth="2.5" /></g>)}
        <HeartShape x={92} y={102} size={30} fill={at === 0 ? GOLD : TINT} stroke={GOLD} width={2} />
      </g>}
      {at === 0 && <><W x={236} y={84} size={10.5}>Connected</W><W x={236} y={102} size={10.5}>Validated</W><W x={236} y={120} size={10.5}>Hopeful</W></>}
      {at === 1 && <><College x={240} y={92} lit /><W x={240} y={140} size={10.5}>1 day to 8 weeks</W></>}
      {at === 2 && <Tags x={182} y={44} labels={["Emergence", "BPD World", "Borderline Arts"]} lit={index => index === 0} width={124} gap={36} />}
      {at === 3 && tiles.map((tile, index) => { const x = 18 + (index % 2) * 146, y = 24 + Math.floor(index / 2) * 82; return <g key={tile.n}>
        <rect x={x} y={y} width="138" height="70" rx="10" fill={index === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x + 69} y={y + 32} size={16} fill={index === 0 ? WHITE : TEXT}>{tile.n}</W>
        <W x={x + 69} y={y + 54} size={10} fill={index === 0 ? WHITE : TEXT}>{tile.t}</W>
      </g>; })}
      {at === 4 && <><Box x={240} y={60} w={110} text="PALS" lit /><Box x={240} y={96} w={110} text="Advocate" /><Box x={240} y={132} w={110} text="Second opinion" size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Anger ==================================================================================================

function AngerDial(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Normal, healthy, and often useful", "Out of control, it harms relationships", "Anger is not the same as aggression", "Easier to see in others than ourselves"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A normal feeling, until it takes over" label="When anger becomes a problem" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A dial from calm to out of control, and anger compared with aggression">
      {at < 2 && <g>
        <Gauge x={160} y={140} r={86} value={at === 0 ? 0.35 : 0.92} />
        <W x={66} y={164} size={10} anchor="start">Calm</W><W x={254} y={164} size={10} anchor="end">Out of control</W>
        {at === 0 && <W x={160} y={40} size={10.5}>Alerts you, motivates you</W>}
      </g>}
      {at === 2 && <g>
        <Box x={84} y={70} w={130} text="Anger" lit /><W x={84} y={102} size={10.5}>a feeling</W>
        <Box x={236} y={70} w={130} text="Aggression" /><W x={236} y={102} size={10.5}>a way of behaving</W>
        <W x={160} y={152} size={10.5}>Some bottle it up instead</W>
      </g>}
      {at === 3 && <g>
        <W x={20} y={66} size={10} anchor="start">Someone close</W><rect x="112" y="52" width={0.32 * 180} height="22" rx="5" fill={INK} /><W x={176} y={68} size={11} anchor="start">32 in 100</W>
        <W x={20} y={116} size={10} anchor="start">Themselves</W><rect x="112" y="102" width={0.12 * 180} height="22" rx="5" fill={SOFT} /><W x={140} y={118} size={11} anchor="start">12 in 100</W>
        <W x={160} y={160} size={10}>Survey of 1,974 adults</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AngerAlarmBody(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Alarm: fight, flight or freeze", "Fast heartbeat, tense, feeling hot", "Flipping your lid: thinking offline", "It reacts to imagined threats too", "Notice early; breathe to calm"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The body" title="Your body's alarm, explained" label="What anger does in the body" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with the body's alarm signs, beside an alarm bell and the thinking and emotional parts of the brain">
      <Person x={84} y={156} scale={1.8} fill={at === 4 ? SOFT : INK} />
      {at === 1 && <g>
        <HeartShape x={84} y={142} size={22} fill={GOLD} stroke={GOLD} width={2} />
        <path d="M60 60 C56 52, 64 48, 60 40 M84 54 C80 46, 88 42, 84 34 M108 60 C104 52, 112 48, 108 40" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <Tags x={170} y={40} labels={["Fast heartbeat", "Tense muscles", "Feeling hot"]} lit={() => true} width={130} gap={38} />
      </g>}
      {at === 0 && <><Bell x={236} y={72} ring /><W x={236} y={132} size={10.5}>Fight, flight</W><W x={236} y={148} size={10.5}>or freeze</W></>}
      {at === 2 && <g>
        <Box x={236} y={52} w={130} text="Thinking brain" /><W x={236} y={80} size={10}>goes offline</W>
        <Box x={236} y={124} w={130} text="Emotional brain" lit /><W x={236} y={152} size={10}>takes over</W>
     </g>}
      {at === 3 && <><Bell x={236} y={72} ring /><W x={236} y={132} size={10.5}>Real or</W><W x={236} y={148} size={10.5}>imagined threat</W></>}
      {at === 4 && <><Breath x={236} y={86} r={32} still={still} /><W x={236} y={146} size={10.5}>Notice the signs early</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AngerIceberg(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Unfairness, threat, disrespect, stress", "Often fear, low mood or loss beneath", "Lessons from childhood, or PTSD", "Stress, tiredness, alcohol, money", "Talking it through can help"];
  const below = [[], ["Fear", "Low mood", "Loss and grief"], ["Learned as a child", "Trauma, PTSD"], ["Stress", "Tiredness", "Alcohol, drugs", "Money worries"], ["Trauma", "Grief", "Anxiety"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Causes" title="What lies beneath the anger" label="What lies underneath" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An iceberg with anger above the water and the feelings and pressures beneath it">
      <path d="M90 70 L56 138 L104 186 H206 L250 130 L224 70 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" opacity={at === 0 ? 0.5 : 1} />
      <path d="M10 70 C40 64, 60 76, 90 70 S150 64, 180 70 S250 76, 310 70" stroke={SOFT} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M122 70 L160 22 L198 70 Z" fill={INK} />
      <W x={160} y={62} size={11} fill={WHITE}>Anger</W>
      {at === 0 && <><W x={58} y={30} size={10}>Unfairness</W><W x={58} y={52} size={10}>Threat</W><W x={264} y={30} size={10}>Disrespect</W><W x={264} y={52} size={10}>Stress</W></>}
      {below.map((label, index) => <W key={label} x={150} y={(below.length === 4 ? 100 : 106) + index * (below.length === 4 ? 22 : 24)} size={10.5} fill={at === 4 ? SOFT : TEXT}>{label}</W>)}
      {at === 4 && <><Person x={266} y={170} scale={0.8} /><Person x={298} y={170} scale={0.8} fill={SOFT} /><Bubble x={276} y={108} text="Talk" width={56} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AngerHeadTriggers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Common after stroke or brain injury", "Brain changes, pain and frustration", "Noise, heat, interruptions, poor sleep", "A walk, a diary, an agreed sign", "Your GP, stroke team or a helpline"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="After illness" title="Anger after a stroke or brain injury" label="Anger after illness or injury" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head in profile with one area of the brain marked, beside common triggers and support">
      <path d="M58 182 V150 C38 138, 30 108, 38 82 C46 50, 76 34, 106 38 C136 42, 150 66, 148 94 L158 110 L148 114 C148 128, 142 138, 128 140 V182" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="96" cy="82" r="14" fill={at === 1 ? GOLD : SOFT} opacity={at === 1 ? 1 : 0.6} />
      {at === 0 && <Tags x={176} y={56} labels={["Stroke", "Brain injury"]} lit={() => true} width={124} gap={40} />}
      {at === 1 && <Tags x={176} y={40} labels={["Brain changes", "Pain, tiredness", "Frustration"]} lit={index => index === 0} width={124} gap={38} />}
      {at === 2 && <Tags x={176} y={26} labels={["Noise", "Heat", "Interruptions", "Poor sleep"]} lit={() => false} width={124} gap={36} />}
      {at === 3 && <Tags x={176} y={40} labels={["A walk", "A diary", "An agreed sign"]} lit={() => true} width={124} gap={38} />}
      {at === 4 && <g>
        <W x={184} y={52} size={10.5} anchor="start">Headway</W><W x={184} y={70} size={11} anchor="start">0808 800 2244</W>
        <W x={184} y={106} size={10.5} anchor="start">Stroke helpline</W><W x={184} y={124} size={11} anchor="start">0303 3033 100</W>
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AngerCountTen(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Count to 10 before reacting", "In for 4, hold, then out for 4", "Walk out, and say where you are going", "A walk, music, or a call to a friend", "Practise when calm, 5 minutes or more"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="In the moment" title="Count to ten, then breathe" label="Calming down in the moment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Counting from 1 to 10, a slow breath, a door for a time out and things that soothe">
      {Array.from({ length: 10 }, (_, index) => { const on = at === 0; return <g key={index} opacity={on ? 1 : 0.35}>
        <circle cx={25 + index * 30} cy="36" r="12" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" opacity={on ? 0.3 + index * 0.07 : 1} />
        <W x={25 + index * 30} y={40} size={10.5} fill={on && index > 5 ? WHITE : TEXT}>{index + 1}</W>
      </g>; })}
      {at === 0 && <><Person x={160} y={164} scale={1.2} /><W x={160} y={88} size={13}>Time to think</W></>}
      {at === 1 && <g>
        <path d="M30 150 L110 80 H140 L220 150 H290" stroke={INK} strokeWidth="3.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
        <W x={62} y={104} size={10.5}>In 4</W><W x={125} y={72} size={10.5}>Hold</W><W x={194} y={104} size={10.5}>Out 4</W>
        <W x={160} y={176} size={10.5}>A calming word between breaths</W>
      </g>}
      {at === 2 && <g>
        <rect x="214" y="74" width="56" height="100" rx="3" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M214 74 L246 84 V182 L214 174 Z" fill={INK} />
        <Person x={136} y={166} scale={1.1} />
        <Arrow d="M162 140 H198" head="M191 134 L198 140 L191 146" />
        <W x={80} y={96} size={10.5}>Walk out,</W><W x={80} y={112} size={10.5}>not storm out</W>
      </g>}
      {at === 3 && <g>
        <path d="M76 120 V88 L102 82 V114" stroke={INK} strokeWidth="3" fill="none" /><circle cx="70" cy="120" r="7" fill={INK} /><circle cx="96" cy="114" r="7" fill={INK} />
        <Person x={160} y={128} scale={0.9} />
        <Phone x={244} y={104} lit />
        <W x={86} y={154} size={10.5}>Music</W><W x={160} y={154} size={10.5}>A walk</W><W x={244} y={154} size={10.5}>A friend</W>
      </g>}
      {at === 4 && <><Breath x={160} y={116} r={36} still={still} /><W x={160} y={176} size={10.5}>Breathe gently, 1 to 5</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AngerCbtTriangle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Counselling, one to one or in a group", "Thoughts, feelings, actions: linked", "Through a GP, or refer yourself", "Private? Check they are registered", "A self-help guide, at your own pace"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Therapy" title="Learning to handle anger differently" label="Anger management and therapy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A CBT triangle of thoughts, feelings and actions, and the ways to get therapy">
      {at === 0 && <g>
        {[{ x: 48, y: 120 }, { x: 76, y: 96 }, { x: 110, y: 90 }, { x: 144, y: 96 }, { x: 172, y: 120 }].map((p, index) => <Person key={index} x={p.x} y={p.y} scale={0.7} fill={index === 2 ? INK : SOFT} />)}
        <ellipse cx="110" cy="130" rx="74" ry="14" fill="none" stroke={SOFT} strokeWidth="2.5" />
        <W x={110} y={166} size={10.5}>Group</W>
        <Person x={234} y={104} scale={0.8} /><Chair x={230} y={112} /><Person x={290} y={104} scale={0.8} fill={SOFT} /><Chair x={294} y={112} flip />
        <W x={262} y={166} size={10.5}>One to one</W>
      </g>}
      {at === 1 && <g>
        <path d="M160 46 L82 146 H238 Z" fill="none" stroke={GOLD} strokeWidth="3" strokeLinejoin="round" />
        <Box x={160} y={38} w={96} text="Thoughts" lit /><Box x={74} y={148} w={96} text="Feelings" lit /><Box x={246} y={148} w={96} text="Actions" lit />
        <W x={160} y={112} size={10.5}>5 to 15</W><W x={160} y={126} size={10}>sessions</W>
      </g>}
      {at === 2 && <g>
        <Box x={84} y={44} w={90} text="GP" /><Box x={236} y={44} w={130} text="Refer yourself" />
        <Arrow d="M84 60 C84 100, 130 110, 150 130" head="M141 128 L150 131 L148 122" />
        <Arrow d="M236 60 C236 100, 190 110, 170 130" head="M172 122 L170 131 L179 128" />
        <Box x={160} y={152} w={176} text="NHS talking therapies" lit />
      </g>}
      {at === 3 && <g>
        <circle cx="96" cy="84" r="32" fill={INK} /><path d="M80 112 L72 150 L90 140 L96 156 L102 140 L120 150 L112 112" fill={GOLD} /><Tick x={96} y={84} s={13} color={WHITE} />
        <W x={96} y={176} size={10.5}>Registered</W>
        <W x={232} y={68} size={10.5}>Sometimes free:</W><W x={232} y={92} size={10.5}>employer</W><W x={232} y={110} size={10.5}>university</W><W x={232} y={128} size={10.5}>local charity</W>
      </g>}
      {at === 4 && <><Book x={100} y={96} /><Clock x={240} y={86} r={26} hand={6} /><W x={240} y={136} size={10.5}>About an hour</W><W x={100} y={156} size={10.5}>Self-help guide</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AngerDiary(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Unfairness, criticism, being let down", "Note it down for a week or 2", "Swap always and never for how you feel", "Avoid or manage repeat triggers"];
  const cols = ["Where", "Who", "Felt", "Did", "Thought"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Triggers" title="Finding the patterns in your anger" label="Knowing your triggers" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An anger diary with columns for where, who, felt, did and thought, and a repeated trigger spotted">
      {at === 0 && <g>
        <Tags x={22} y={28} labels={["Treated unfairly", "Criticised", "Let down", "Embarrassed"]} lit={() => true} width={146} gap={36} />
        <Moon x={240} y={66} r={16} /><W x={240} y={110} size={10.5}>Tired or stressed?</W><W x={240} y={126} size={10}>More sensitive</W>
      </g>}
      {at === 1 && <g>
        <rect x="20" y="22" width="280" height="150" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {cols.map((col, index) => <g key={col}>
          <W x={48 + index * 56} y={42} size={10}>{col}</W>
          {index > 0 && <path d={`M${20 + index * 56} 30 V164`} stroke={LINE} strokeWidth="2" />}
          {[0, 1, 2].map(row => <path key={row} d={`M${30 + index * 56} ${72 + row * 34} H${66 + index * 56}`} stroke={row === 1 ? GOLD : SOFT} strokeWidth="3" strokeLinecap="round" />)}
        </g>)}
        <path d="M20 52 H300" stroke={INK} strokeWidth="2" />
      </g>}
      {at === 2 && <g>
        <Bubble x={130} y={52} text="You always do that" width={150} lit={false} /><Cross x={214} y={52} s={10} />
        <Bubble x={170} y={124} text="It bothers me when you do that" width={204} />
      </g>}
      {at === 3 && <g>
        <path d="M20 120 H120 C140 120, 140 60, 160 60 S180 120, 200 120 H300" stroke={GOLD} strokeWidth="4" fill="none" strokeDasharray="2 7" strokeLinecap="round" />
        <path d="M20 120 H300" stroke={SOFT} strokeWidth="4" strokeLinecap="round" opacity=".5" />
        <rect x="140" y="100" width="40" height="40" rx="6" fill={INK} />
        <W x={160} y={164} size={10.5}>The same trigger again</W>
        <circle cx="300" cy="120" r="8" fill={GOLD} />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AngerGpCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Struggling, or low for over 2 weeks", "Worried about your behaviour? Respect", "A GP can refer you on for help", "Fewer than 1 in 7 sought help", "Or refer yourself to talking therapy"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Seeing a GP" title="When to talk to a GP about anger" label="When to see a GP" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two weeks on a calendar, a GP, and the routes to help with anger">
      {at === 0 && <g>
        {Array.from({ length: 14 }, (_, index) => <rect key={index} x={24 + (index % 7) * 24} y={56 + Math.floor(index / 7) * 26} width="20" height="22" rx="3" fill={INK} opacity={0.4 + index * 0.04} />)}
        <W x={106} y={128} size={10.5}>2 weeks or more</W>
        <Box x={254} y={74} w={90} text="See a GP" lit />
      </g>}
      {at === 1 && <><Phone x={76} y={96} lit /><W x={200} y={78} size={11}>Respect Phoneline</W><W x={200} y={102} size={15}>0808 802 4040</W><W x={200} y={124} size={10.5}>Free</W></>}
      {at === 2 && <g>
        <Person x={60} y={150} scale={1.2} />
        <rect x="24" y="152" width="76" height="8" rx="3" fill={INK} />
        <Tags x={150} y={40} labels={["Anger programme", "Counselling", "Neuropsychologist"]} lit={index => index === 0} width={146} gap={38} />
      </g>}
      {at === 3 && <Figures x={40} y={130} count={7} lit={1} gap={40} scale={1} />}
      {at === 4 && <g>
        <Box x={84} y={52} w={60} text="GP" />
        <Person x={48} y={164} scale={1} />
        <path d="M84 66 C84 110, 150 140, 180 150" stroke={LINE} strokeWidth="3" fill="none" strokeDasharray="4 6" />
        <Arrow d="M70 150 H168" head="M161 144 L168 150 L161 156" />
        <Box x={240} y={150} w={130} text="Talking therapies" lit />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AngerIStatements(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Others may fear saying what they think", "Assertive: calm, clear, considerate", "Use I statements, without blame", "Calmer? Apologise and talk it over", "Look after your own safety"];
  const bx = at === 0 ? 270 : at === 4 ? 288 : 250;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Relationships" title="Words that build bridges" label="Relationships and repair" credit={at === 4 ? dangerCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people talking calmly, with words that help them understand each other">
      <Person x={70} y={172} scale={1.2} />
      <Person x={bx} y={172} scale={1.2} fill={SOFT} />
      {at === 0 && <Bubble x={226} y={84} text="" width={90} lit={false} />}
      {at === 1 && <g>
        <Box x={90} y={30} w={130} text="Passive" /><Box x={230} y={30} w={130} text="Aggressive" />
        <Box x={90} y={64} w={130} text="Passive aggressive" size={10} /><Box x={230} y={64} w={130} text="Assertive" lit />
      </g>}
      {at === 2 && <g>
        <Bubble x={150} y={40} text="You are annoying me" width={150} lit={false} /><Cross x={236} y={40} s={10} />
        <Bubble x={150} y={92} text="I am getting annoyed" width={150} />
      </g>}
      {at === 3 && <g>
        <path d="M98 140 C130 100, 190 100, 222 140" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" />
        {[0.2, 0.35, 0.5, 0.65, 0.8].map(t => { const u = 1 - t, x = u * u * u * 98 + 3 * u * u * t * 130 + 3 * u * t * t * 190 + t * t * t * 222, y = u * u * u * 140 + 3 * u * u * t * 100 + 3 * u * t * t * 100 + t * t * t * 140; return <path key={t} d={`M${x} ${y} v10`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}
        <Bubble x={150} y={50} text="Can we talk it over?" width={150} />
      </g>}
      {at === 4 && <g>
        <path d="M100 150 C150 150, 200 120, 250 120" stroke={GOLD} strokeWidth="2.5" fill="none" strokeDasharray="3 7" strokeLinecap="round" />
        <Box x={160} y={50} w={160} text="In danger? Call 999" lit />
      </g>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AngerCup(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Sleep 7 to 9 hours, at regular times", "No more than 14 units a week", "Solve problems, such as debt", "Exercise, and time to relax"];
  const tiles = ["Sleep", "Alcohol", "Stress", "Exercise"];
  const icon = (index: number, x: number, y: number, c: string) => [
    <Moon key="m" x={x} y={y} r={12} fill={c} />,
    <path key="g" d={`M${x - 10} ${y - 14} H${x + 10} L${x + 6} ${y + 14} H${x - 6} Z`} fill="none" stroke={c} strokeWidth="2.5" strokeLinejoin="round" />,
    <Cloud key="c" x={x} y={y + 4} s={14} fill={c} />,
    <Person key="p" x={x} y={y + 16} scale={0.6} fill={c} />,
  ][index];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Everyday life" title="Sleep, alcohol and stress" label="Sleep, alcohol and stress" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four tiles, sleep, alcohol, stress and exercise, with what helps for each">
      {tiles.map((tile, index) => { const x = 20 + index * 74, lit = index === at; return <g key={tile}>
        <rect x={x} y="18" width="66" height="76" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, x + 33, 46, lit ? WHITE : INK)}
        <W x={x + 33} y={84} size={10} fill={lit ? WHITE : TEXT}>{tile}</W>
      </g>; })}
      {at === 0 && <><W x={160} y={128} size={16}>7 to 9 hours</W><W x={160} y={152} size={10.5}>Bed and up at similar times</W><W x={160} y={172} size={10}>No screens for an hour before bed</W></>}
      {at === 1 && <g>
        <W x={160} y={122} size={11}>14 units a week at most</W>
        {Array.from({ length: 7 }, (_, index) => <rect key={index} x={78 + index * 24} y="134" width="20" height="20" rx="4" fill={index === 1 || index === 4 ? GOLD : SOFT} />)}
        <W x={160} y={176} size={10}>Several drink-free days</W>
      </g>}
      {at === 2 && <><Box x={96} y={140} w={124} text="Debt advice" lit /><Box x={232} y={140} w={124} text="Caffeine, smoking" size={10} /><Cross x={232} y={140} s={11} /></>}
      {at === 3 && <><W x={160} y={132} size={18}>150 minutes</W><W x={160} y={154} size={10.5}>a week of moderate activity</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AngerFork(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["There are places that offer help", "Change starts with seeing choices", "Free, confidential, no judgement", "Escalating? Stop, leave, take a walk", "Being harmed? Reach out for help"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Safety" title="Choosing to change" label="If anger turns to harm" credit={dangerCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path that forks, with a calmer way marked, and helplines for change and for safety">
      {at === 0 && <><House x={160} y={90} fill={TINT} /><HeartShape x={160} y={106} size={22} fill={GOLD} stroke={GOLD} width={2} /><Box x={160} y={158} w={150} text="Help and support" lit /></>}
      {at === 1 && <g>
        <path d="M160 188 V126 C160 100, 120 80, 70 50" stroke={SOFT} strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M160 126 C160 100, 200 80, 250 50" stroke={GOLD} strokeWidth="8" fill="none" strokeLinecap="round" />
        <Person x={160} y={170} scale={0.8} />
        <W x={250} y={34} size={10.5}>Choosing to change</W>
      </g>}
      {at === 2 && <><Phone x={70} y={96} lit /><W x={200} y={66} size={12}>Respect</W><W x={200} y={92} size={15}>0808 802 4040</W><W x={200} y={114} size={10}>Monday to Friday</W><W x={200} y={130} size={10}>10am to 5pm</W></>}
      {at === 3 && <g>
        <path d="M30 170 C100 170, 150 140, 200 120 S280 90, 306 84" stroke={SOFT} strokeWidth="8" fill="none" strokeLinecap="round" />
        <Person x={120} y={150} scale={1} />
        <Arrow d="M146 132 L186 116" head="M178 113 L186 116 L182 124" />
        <Box x={232} y={40} w={124} text="Emergency: 999" lit />
      </g>}
      {at === 4 && [{ x: 14, n: "0808 2000 247", t: "Domestic Abuse Helpline" }, { x: 164, n: "0808 8010 327", t: "Men's Advice Line" }].map(tile => <g key={tile.n}>
        <rect x={tile.x} y="56" width="142" height="76" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" />
        <W x={tile.x + 71} y={90} size={13}>{tile.n}</W><W x={tile.x + 71} y={112} size={9.5}>{tile.t}</W>
      </g>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AngerSignpost(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Via your GP, or refer yourself", "Private help: check registration", "Peer support, or Samaritans 116 123", "Helplines for particular situations", "58 in 100 would not know where to go"];
  const arms = [{ t: "GP referral", right: true }, { t: "Talking therapies", right: false }, { t: "Private help", right: true }, { t: "Peer support", right: false }, { t: "Helplines", right: true }];
  const lit = [[0, 1], [2], [3], [4], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="Where to turn for help with anger" label="Support and courses" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A signpost with arms pointing to a GP, talking therapies, private help, peer support and helplines">
      <rect x="156" y="20" width="8" height="168" rx="3" fill={INK} />
      {arms.map((arm, index) => { const y = 26 + index * 30, on = lit.includes(index); const d = arm.right ? `M164 ${y} H290 L302 ${y + 12} L290 ${y + 24} H164 Z` : `M156 ${y} H30 L18 ${y + 12} L30 ${y + 24} H156 Z`; return <g key={arm.t} opacity={at === 4 ? 0.45 : 1}>
        <path d={d} fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <W x={arm.right ? 228 : 92} y={y + 16} size={10} fill={on ? WHITE : TEXT}>{arm.t}</W>
      </g>; })}
      {at === 2 && <><W x={84} y={172} size={10}>Samaritans</W><W x={84} y={188} size={10.5}>116 123</W></>}
      {at === 3 && <><W x={84} y={172} size={10}>Respect, Headway,</W><W x={84} y={188} size={10}>Stroke Support</W></>}
      {at === 4 && <W x={84} y={182} size={16}>58 in 100</W>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

export function MindsetPieceView({ piece, ...props }: { piece: MindsetPiece } & PieceProps) {
  switch (piece) {
    case "scz-real-layers": return <SczRealLayers {...props} />;
    case "scz-plus-minus": return <SczPlusMinus {...props} />;
    case "scz-threads": return <SczThreads {...props} />;
    case "scz-stepping-path": return <SczSteppingPath {...props} />;
    case "scz-med-weeks": return <SczMedWeeks {...props} />;
    case "scz-chairs": return <SczChairs {...props} />;
    case "scz-help-list": return <SczHelpList {...props} />;
    case "scz-health-check": return <SczHealthCheck {...props} />;
    case "scz-early-lights": return <SczEarlyLights {...props} />;
    case "scz-week-plan": return <SczWeekPlan {...props} />;
    case "scz-feeling-bubble": return <SczFeelingBubble {...props} />;
    case "scz-circle": return <SczCircle {...props} />;
    case "persd-sliders": return <PersdSliders {...props} />;
    case "persd-four-areas": return <PersdFourAreas {...props} />;
    case "persd-rope": return <PersdRope {...props} />;
    case "persd-table-talk": return <PersdTableTalk {...props} />;
    case "persd-skills-wheel": return <PersdSkillsWheel {...props} />;
    case "persd-med-label": return <PersdMedLabel {...props} />;
    case "persd-folded-card": return <PersdFoldedCard {...props} />;
    case "persd-wave": return <PersdWave {...props} />;
    case "persd-grey-bar": return <PersdGreyBar {...props} />;
    case "persd-wait-timer": return <PersdWaitTimer {...props} />;
    case "persd-side-by-side": return <PersdSideBySide {...props} />;
    case "persd-peer-ring": return <PersdPeerRing {...props} />;
    case "anger-dial": return <AngerDial {...props} />;
    case "anger-alarm-body": return <AngerAlarmBody {...props} />;
    case "anger-iceberg": return <AngerIceberg {...props} />;
    case "anger-head-triggers": return <AngerHeadTriggers {...props} />;
    case "anger-count-ten": return <AngerCountTen {...props} />;
    case "anger-cbt-triangle": return <AngerCbtTriangle {...props} />;
    case "anger-diary": return <AngerDiary {...props} />;
    case "anger-gp-calendar": return <AngerGpCalendar {...props} />;
    case "anger-i-statements": return <AngerIStatements {...props} />;
    case "anger-cup": return <AngerCup {...props} />;
    case "anger-fork": return <AngerFork {...props} />;
    case "anger-signpost": return <AngerSignpost {...props} />;
  }
}
