import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { HABIT_PIECES, type HabitPiece } from "@/content/habit-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { credit, INK, LINE, Person, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Clock, Tags } from "./NewsMindPieces";

// The Drug use, Gambling and Quitting smoking pages' own pieces (content/habit-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Mind & mood pieces. Each is steered by the card's sections; pictures
// show ideas, calmly, never anyone's own body or results. They never show drugs, equipment, betting or lit
// cigarettes: paths, helplines, calendars, people talking, shields and clocks instead.

export const isHabitPiece = (piece: NewsPiece): piece is HabitPiece => (HABIT_PIECES as readonly string[]).includes(piece);

// ==== Shared drawing helpers ================================================================================

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 206, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Arrow = ({ d, head, color = GOLD }: { d: string; head: string; color?: string }) =>
  <g stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Tick = ({ x, y, color = GOLD }: { x: number; y: number; color?: string }) =>
  <path d={`M${x - 6} ${y} l4 5 l9 -10`} stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 11} y={y - 18} width="22" height="36" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 11} r="2.2" fill={lit ? WHITE : INK} /></g>;
const Door = ({ x, y, w = 44, h = 70, lit = false }: { x: number; y: number; w?: number; h?: number; lit?: boolean }) =>
  <g><rect x={x} y={y} width={w} height={h} rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x + w - 9} cy={y + h / 2} r="3" fill={lit ? WHITE : INK} /></g>;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Cloud = ({ x, y, s, opacity = 1 }: { x: number; y: number; s: number; opacity?: number }) =>
  <g opacity={opacity} fill={SOFT}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
const Cup = ({ x, y, stroke = INK }: { x: number; y: number; stroke?: string }) =>
  <g><rect x={x - 12} y={y - 13} width="24" height="26" rx="4" fill={WHITE} stroke={stroke} strokeWidth="2.5" /><path d={`M${x + 12} ${y - 7} h5 a6 6 0 0 1 0 12 h-5`} fill="none" stroke={stroke} strokeWidth="2.5" /></g>;
/** A house outline standing on (x, y). */
const House = ({ x, y, s = 1, fill = WHITE, stroke = INK }: { x: number; y: number; s?: number; fill?: string; stroke?: string }) =>
  <path d={`M${x - 26 * s} ${y} V${y - 26 * s} L${x} ${y - 46 * s} L${x + 26 * s} ${y - 26 * s} V${y} Z`} fill={fill} stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />;
/** A shield centred on (x, y), `s` from the centre to the top. */
const Shield = ({ x, y, s, fill = INK, stroke = INK }: { x: number; y: number; s: number; fill?: string; stroke?: string }) =>
  <path d={`M${x} ${y - s} L${x + s * 0.8} ${y - s * 0.65} V${y + s * 0.05} C${x + s * 0.8} ${y + s * 0.6}, ${x + s * 0.35} ${y + s * 0.9}, ${x} ${y + s} C${x - s * 0.35} ${y + s * 0.9}, ${x - s * 0.8} ${y + s * 0.6}, ${x - s * 0.8} ${y + s * 0.05} V${y - s * 0.65} Z`} fill={fill} stroke={stroke} strokeWidth="3" strokeLinejoin="round" />;
/** A chair from the side; `flip` puts the back on the right. */
const Chair = ({ x, y, fill = INK, flip = false }: { x: number; y: number; fill?: string; flip?: boolean }) =>
  <g fill={fill}><rect x={x - 12} y={y - 3} width="24" height="5" rx="2" /><rect x={flip ? x + 8 : x - 12} y={y - 24} width="4" height="24" rx="2" /><rect x={x - 11} y={y} width="3.5" height="14" /><rect x={x + 7.5} y={y} width="3.5" height="14" /></g>;
const Star = ({ x, y, r = 14 }: { x: number; y: number; r?: number }) => {
  const points = Array.from({ length: 10 }, (_, index) => { const a = -Math.PI / 2 + index * Math.PI / 5; const radius = index % 2 ? r * 0.45 : r; return `${(x + radius * Math.cos(a)).toFixed(1)} ${(y + radius * Math.sin(a)).toFixed(1)}`; });
  return <path d={`M${points.join(" L")} Z`} fill={GOLD} />;
};

// ==== Drug use ==============================================================================================

function DrugLoop(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Most who try drugs do not keep on", "Urges and come downs keep it going", "Many reasons: to fit in, to escape", "It can affect health, mood and work", "A treatable condition; help is there"];
  const stops = [{ x: 100, y: 42, t: "Strong urge" }, { x: 154, y: 132, t: "Using again" }, { x: 46, y: 132, t: "Come down" }];
  const tags = [["Use", "Misuse", "Dependence"], [], ["Socialise", "Fit in", "Curiosity", "Escape"], ["Health", "Mood", "Work", "Relationships"], []][at];
  const lit = at === 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When using starts to take control" label="When drug use becomes a problem" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A loop of strong urges, using again and come downs, and a way out towards help">
      <ellipse cx="100" cy="94" rx="62" ry="50" fill="none" stroke={lit ? INK : at === 4 ? LINE : SOFT} strokeWidth={lit ? 4 : 3} strokeDasharray={at === 4 ? "6 9" : undefined} />
      {lit && <circle cx="162" cy="94" r="7" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />}
      {stops.map(stop => <Box key={stop.t} x={stop.x} y={stop.y} w={84} text={stop.t} lit={lit} size={10} />)}
      {tags.length > 0 && <Tags x={202} y={at === 0 ? 46 : 30} labels={tags} lit={() => false} width={108} />}
      {at === 4 && <><Arrow d="M162 94 C190 94, 200 100, 224 100" head="M217 94 L224 100 L217 106" /><Door x={232} y={62} w={48} h={76} lit /><W x={256} y={156} size={11}>Help</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DrugTwoWay(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Seems to help; can make things worse", "Can bring mood swings and anxiety", "Signs of psychosis: GP straight away", "Services should assess both needs"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mental health" title="Drugs, mood and the mind" label="Drugs and mental health" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two overlapping circles, drug use and mental health, with arrows running both ways">
      {at === 3 && <ellipse cx="160" cy="98" rx="150" ry="74" fill="none" stroke={GOLD} strokeWidth="4" />}
      <W x={92} y={24} size={11}>Drug use</W><W x={228} y={24} size={11}>Mental health</W>
      <circle cx="116" cy="98" r="60" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <circle cx="204" cy="98" r="60" fill={WHITE} fillOpacity=".7" stroke={INK} strokeWidth="2.5" />
      {at === 0 && <><Arrow d="M136 86 H184" head="M177 80 L184 86 L177 92" /><Arrow d="M184 112 H136" head="M143 106 L136 112 L143 118" /></>}
      {at === 1 && ["Mood swings", "Anxiety", "Paranoia"].map((label, index) => <Box key={label} x={226} y={70 + index * 28} w={84} text={label} size={10} />)}
      {at === 2 && <><Box x={226} y={84} w={84} text="Psychosis" lit size={10} /><Box x={226} y={116} w={84} text="See a GP" size={10} /></>}
      {at === 3 && <><Box x={90} y={98} w={64} text="Drugs" size={10} /><Box x={230} y={98} w={64} text="Mood" size={10} /><Box x={160} y={150} w={124} text="Both assessed" lit size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DrugDoseSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Some medicines can be addictive", "Over time, higher doses may be needed", "Hard to stop, or hiding how much", "Co-codamol: up to 3 days at a time", "The doctor lowers the dose gradually"];
  const heights = [[44, 44, 44, 44, 44, 44], [24, 36, 48, 62, 78, 96], [60, 60, 60, 60, 60, 60], [], [96, 80, 64, 48, 32, 18]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="When medicines become hard to stop" label="Prescription and over-the-counter medicines" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Doses as bars that can creep up over time, and come down gradually with a doctor">
      {heights.map((height, index) => <rect key={index} x={24 + index * 26} y={160 - height} width="20" height={height} rx="4" fill={at === 4 ? GOLD : at === 1 ? INK : SOFT} opacity={at === 1 || at === 4 ? 1 : 0.7} />)}
      {at !== 3 && <><path d="M18 162 H178" stroke={LINE} strokeWidth="3" /><W x={98} y={180} size={10}>{at === 1 ? "Higher doses over time" : at === 4 ? "Step by step" : "Dose"}</W></>}
      {at === 3 && <>{Array.from({ length: 7 }, (_, index) => <g key={index}><rect x={20 + index * 22} y="80" width="18" height="30" rx="4" fill={index < 3 ? INK : WHITE} stroke={INK} strokeWidth="2" opacity={index < 3 ? 1 : 0.4} /><W x={29 + index * 22} y={126} size={9.5}>{index + 1}</W></g>)}<W x={93} y={62} size={11}>Up to 3 days</W></>}
      {at === 0 && <Tags x={194} y={34} labels={["Codeine", "Diazepam", "Pregabalin", "Sleeping pills"]} lit={() => false} width={112} />}
      {at === 1 && <Box x={250} y={90} w={104} text="Tolerance" lit />}
      {at === 2 && <Tags x={194} y={50} labels={["Hard to stop", "Taking more often", "Hiding the amount"]} lit={() => true} width={116} />}
      {at === 3 && <><Box x={250} y={78} w={100} text="Pharmacy" /><Box x={250} y={114} w={100} text="Ask a doctor" size={10} /></>}
      {at === 4 && <><Box x={252} y={56} w={104} text="Your doctor" size={10} /><Person x={252} y={132} scale={1.2} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DrugChecklist(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Regular use, secrecy, using alone", "Hard to stop, a lot of time thinking", "Money, relationships, work, mood", "A sign: trying to stop, but unable"];
  const rows = [["Very regular use", "Cannot cut down", "Keeping it secret", "Using alone"], ["Hard to stop", "Thinking about it", "Using when risky", "Getting into debt"], ["Money", "Friendships", "Work", "Mood changes"], ["Tried to stop", "Not been able to"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The signs" title="Signs that use is becoming a problem" label="Signs of a problem" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A checklist of signs on a clipboard, beside a person">
      <rect x="24" y="22" width="168" height="164" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="84" y="14" width="48" height="16" rx="5" fill={INK} />
      {rows.map((row, index) => <g key={row}>
        <rect x="38" y={46 + index * 34} width="18" height="18" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" />
        <Tick x={46} y={55 + index * 34} />
        <W x={66} y={59 + index * 34} size={10.5} anchor="start">{row}</W>
      </g>)}
      <Person x={256} y={150} scale={1.4} fill={SOFT} />
      {at === 3 && <Bubble x={252} y={52} text="Not every day" width={108} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DrugTwoDoors(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["A GP, or refer yourself directly", "Same confidential NHS care as anyone", "A plan agreed, and a keyworker", "FRANK: 0300 123 6600, any time"];
  const way = at === 0 ? GOLD : SOFT;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Getting help" title="Free help, without judgement" label="Getting free help" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two ways in, through a GP or by referring yourself, to a local drug service">
      <Box x={62} y={60} w={92} text="GP" lit={at === 0} />
      <Box x={62} y={136} w={108} text="Refer yourself" lit={at === 0} />
      <Arrow d="M110 60 C140 60, 150 88, 166 92" head="M159 86 L166 92 L158 96" color={way} />
      <Arrow d="M118 136 C144 136, 150 112, 166 108" head="M158 104 L166 108 L160 115" color={way} />
      <Door x={172} y={58} w={52} h={86} lit={at === 2} />
      <W x={198} y={164} size={10.5}>Drug service</W>
      {at === 1 && <><Box x={198} y={34} w={124} text="Free, confidential" lit size={10} /><path d="M190 96 h16 v14 h-16 Z M193 96 v-5 a5 5 0 0 1 10 0 v5" fill="none" stroke={INK} strokeWidth="2.5" /></>}
      {at === 2 && <><Person x={198} y={124} scale={0.8} fill={WHITE} /><Box x={274} y={76} w={80} text="Keyworker" size={10} /><Box x={274} y={112} w={80} text="Your plan" size={10} /></>}
      {at === 3 && <><Phone x={276} y={70} lit /><W x={276} y={112} size={10.5}>FRANK</W><W x={276} y={128} size={9.5}>0300 123 6600</W><W x={276} y={144} size={9.5}>Text 82111</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DrugRamp(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Gradual reduction is often best", "Maintenance or a gradual detox", "Your doctor will reduce it gradually", "Cut down slowly over several weeks", "After detox, overdose risk is higher"];
  const step = [0, 1, 2, 3, 5][at];
  const sx = 100 + step * 32, sy = 64 + step * 18;
  const steps = `M100 64 ${Array.from({ length: 6 }, () => "h32 v18").join(" ")}`;
  const note = [null, null, "Your doctor", "Several weeks", "6 months' support"][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stopping" title="Stopping safely, step by step" label="Stopping safely" credit="Illustration: Rehyn. Talk to a GP or drug service before you stop."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A sudden drop crossed out, beside gentle steps down walked with a key worker">
      <path d="M20 64 H76 V176" stroke={at === 0 ? INK : SOFT} strokeWidth="4" fill="none" strokeLinejoin="round" />
      <W x={48} y={52} size={10}>Suddenly</W>
      {at === 0 && <Cross x={76} y={120} />}
      <path d={steps} stroke={at === 0 ? GOLD : INK} strokeWidth="4" fill="none" strokeLinejoin="round" />
      <W x={150} y={156} size={10}>Gradually</W>
      <Person x={sx + 26} y={sy - 9} scale={0.6} fill={SOFT} />
      <Person x={sx + 10} y={sy - 9} scale={0.6} />
      {at === 1 && <><Box x={252} y={26} w={110} text="Maintenance" size={10} /><Box x={252} y={58} w={110} text="Detox" size={10} /></>}
      {note && <Box x={250} y={34} w={132} text={note} size={10} lit={at === 4} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DrugTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Talking therapies, such as CBT", "A substitute medicine for opioids", "No substitute; talking therapies work", "Usually while living at home", "Cocaine: most have good results"];
  const lit = [[0], [1], [0], [2], [0, 1, 2]][at];
  const tiles = ["Talking", "Medicine", "At home"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Treatments" title="What treatment looks like" label="Talking therapies and medicines" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three tiles: talking therapy, medicine, and treatment while living at home">
      {tiles.map((tile, index) => {
        const on = lit.includes(index);
        const x = 22 + index * 96;
        const ink = on ? WHITE : INK;
        return <g key={tile} opacity={on ? 1 : 0.5}>
          <rect x={x} y="26" width="84" height="96" rx="12" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          {index === 0 && <><Chair x={x + 24} y={88} fill={ink} /><Chair x={x + 60} y={88} fill={ink} flip /></>}
          {index === 1 && <path d={`M${x + 34} 50 h16 v16 h16 v16 h-16 v16 h-16 v-16 h-16 v-16 h16 Z`} fill={ink} />}
          {index === 2 && <House x={x + 42} y={104} s={1.2} fill={on ? INK : WHITE} stroke={ink} />}
          <W x={x + 42} y={142} size={10.5}>{tile}</W>
        </g>;
      })}
      {at === 2 && <Cross x={160} y={74} s={26} />}
      {at === 1 && <W x={160} y={170} size={10.5}>Supervised for at least 3 months</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DrugEmergency(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Call 999 now if they will not wake up", "Stay with them; recovery position", "Naloxone reverses an opioid overdose", "Tell the crew everything you know", "It is normal to feel shaky afterwards"];
  const labels = ["999", "Stay", "Naloxone", "The crew"];
  const xs = [44, 124, 204, 280];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Emergency" title="If someone has taken too much" label="In an emergency" credit="Illustration: Rehyn. In an emergency, call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four steps in an emergency: call 999, stay with them, naloxone, and tell the ambulance crew">
      <path d="M44 80 H280" stroke={LINE} strokeWidth="3" strokeDasharray="4 8" />
      {xs.map((x, index) => {
        const on = at === index;
        const c = on ? WHITE : INK;
        return <g key={index} opacity={on ? 1 : 0.45}>
          <circle cx={x} cy="80" r="32" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          {index === 0 && <W x={x} y={86} size={16} fill={c}>999</W>}
          {index === 1 && <g fill={c}><circle cx={x - 16} cy={80} r="6" /><ellipse cx={x + 2} cy={84} rx="13" ry="6" /><path d={`M${x + 10} 86 l9 6 l-9 4`} stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d={`M${x - 24} 98 H${x + 24}`} stroke={c} strokeWidth="2" /></g>}
          {index === 2 && <g><rect x={x - 16} y={68} width="32" height="24" rx="4" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x} 73 v14 M${x - 7} 80 h14`} stroke={c} strokeWidth="3" strokeLinecap="round" /></g>}
          {index === 3 && <g><rect x={x - 20} y={70} width="28" height="20" rx="3" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x + 8} 76 h8 l5 6 v8 h-13 Z`} fill="none" stroke={c} strokeWidth="2.5" strokeLinejoin="round" /><circle cx={x - 12} cy={93} r="3.5" fill={c} /><circle cx={x + 12} cy={93} r="3.5" fill={c} /><path d={`M${x - 6} 74 v12 M${x - 12} 80 h12`} stroke={c} strokeWidth="2.5" /></g>}
          <W x={x} y={132} size={10.5}>{labels[index]}</W>
        </g>;
      })}
      {at === 0 && <W x={44} y={150} size={10}>or 112</W>}
      {at === 4 && <W x={160} y={166} size={11}>FRANK: 0300 123 6600</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DrugTrail(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Relapse can be part of recovery", "People, places, stress and cravings", "Use support, and keep busy", "Thinking just once? Talk to someone", "Talk to someone, and learn from it"];
  const dot = [[196, 146], [78, 146], [128, 114], [164, 130], [229, 115]][at];
  const road = "M20 176 C70 172, 90 120, 128 114 C160 110, 168 150, 196 146 C226 142, 234 92, 254 72";
  return <MemoryBand props={props} state={s} tone="theme" kicker="Relapse" title="A slip is not the end" label="Relapse and getting back on track" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A road with a dip that rejoins and climbs on, towards friends waiting further along">
      <path d={road} stroke={LINE} strokeWidth="12" fill="none" strokeLinecap="round" />
      <path d={road} stroke={SOFT} strokeWidth="2" fill="none" strokeDasharray="6 8" />
      <path d="M254 72 V42" stroke={INK} strokeWidth="2.5" /><path d="M254 42 h18 l-5 6 l5 6 h-18 Z" fill={GOLD} />
      <Person x={282} y={86} scale={0.65} fill={SOFT} /><Person x={304} y={86} scale={0.65} fill={SOFT} />
      <circle cx={dot[0]} cy={dot[1]} r="9" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      {at === 1 && ["People", "Places", "Stress", "Cravings"].map((label, index) => <Box key={label} x={62 + (index % 2) * 88} y={32 + Math.floor(index / 2) * 32} w={80} text={label} size={10} />)}
      {at === 2 && <><Box x={62} y={32} w={80} text="Groups" size={10} /><Box x={150} y={32} w={80} text="Hobbies" size={10} /><Box x={106} y={64} w={124} text="A planned week" size={10} lit /></>}
      {at === 3 && <Bubble x={100} y={44} text="Just once is okay?" width={140} />}
      {at === 4 && <><Bubble x={96} y={40} text="Talk to someone" width={130} /><W x={110} y={88} size={10}>After a break, tolerance drops</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DrugTeaTalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Lots of families face this too", "Listen more, speak less, do not judge", "You cannot force it, but you can help", "Support groups for families, too", "Not your fault. Childline: 0800 1111"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Family and friends" title="When someone you love uses drugs" label="For family and friends" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people talking over tea, with someone behind supporting the listener">
      <Person x={26} y={142} scale={0.95} fill={at === 3 ? INK : SOFT} />
      <Person x={70} y={152} scale={1.25} />
      <Person x={250} y={152} scale={1.25} fill={SOFT} />
      <rect x="100" y="128" width="120" height="8" rx="3" fill={INK} /><path d="M112 136 V176 M208 136 V176" stroke={INK} strokeWidth="4" />
      <Cup x={138} y={115} /><Cup x={178} y={115} />
      {at === 1 && <Bubble x={130} y={48} text="Here to help, not judge" width={160} />}
      {at === 2 && <><Box x={160} y={40} w={140} text="Suggest activities" size={10} /><Box x={160} y={74} w={150} text="Accurate information" size={10} /></>}
      {at === 3 && <Box x={62} y={44} w={116} text="Support for you" lit size={10} />}
      {at === 4 && <><W x={160} y={56} size={13}>Not your fault</W><W x={160} y={80} size={11}>You are not alone</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DrugShield(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Not ready to stop? Help is still there", "Mixing is always risky", "You never really know what is in it", "Alone, nobody can help in an overdose", "Free naloxone and a hepatitis C test"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Reducing harm" title="Staying safer if you are not ready to stop" label="Reducing harm" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A shield, and five ways to stay safer: help, no mixing, unknown contents, not alone and naloxone">
      <Shield x={84} y={96} s={64} />
      {at === 0 && <path d="M76 70 h16 v18 h18 v16 h-18 v18 h-16 v-18 h-18 v-16 h18 Z" fill={WHITE} />}
      {at === 1 && <><circle cx="72" cy="96" r="16" fill="none" stroke={WHITE} strokeWidth="3" /><circle cx="96" cy="96" r="16" fill="none" stroke={WHITE} strokeWidth="3" /><Cross x={84} y={96} s={22} /></>}
      {at === 2 && <W x={84} y={112} size={44} fill={WHITE}>?</W>}
      {at === 3 && <><Person x={70} y={116} scale={0.7} fill={WHITE} /><Person x={98} y={116} scale={0.7} fill={WHITE} /></>}
      {at === 4 && <><rect x="62" y="80" width="44" height="32" rx="5" fill="none" stroke={WHITE} strokeWidth="3" /><path d="M84 86 v20 M74 96 h20" stroke={WHITE} strokeWidth="3.5" strokeLinecap="round" /></>}
      <Tags x={166} y={22} labels={["Help to stay safe", "No mixing", "Unknown contents", "Not alone", "Naloxone"]} lit={index => index === at} width={140} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function DrugCircle(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Similar experiences, less alone", "NA: 0300 999 1212; CA: 0800 612 0225", "SMART Recovery: free; just observe", "Your keyworker knows the nearest group"];
  const seats = [[130, 56], [203, 80], [203, 128], [130, 152], [57, 128], [57, 80]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support groups" title="You do not have to do it alone" label="Support groups" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A circle of people in a support group, with one empty chair waiting">
      <ellipse cx="130" cy="104" rx="52" ry="24" fill={TINT} stroke={at === 0 ? GOLD : SOFT} strokeWidth={at === 0 ? 3 : 2} />
      {seats.map(([x, y], index) => index === 3 ? <Chair key={index} x={x} y={y} fill={GOLD} /> : <Person key={index} x={x} y={y + 8} scale={0.72} fill={at === 0 ? INK : SOFT} />)}
      {at === 1 && <><Box x={276} y={60} w={76} text="12 steps" size={10} lit /><W x={276} y={94} size={10}>NA and CA</W></>}
      {at === 2 && <><rect x="250" y="64" width="52" height="34" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M242 104 H310" stroke={INK} strokeWidth="4" strokeLinecap="round" /><circle cx="276" cy="81" r="7" fill={SOFT} /><W x={276} y={130} size={10}>Online too</W></>}
      {at === 3 && <><Box x={276} y={60} w={72} text="Keyworker" size={10} lit /><Person x={276} y={132} scale={0.8} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Gambling ==============================================================================================

const spiralPoint = (t: number) => { const r = 5 + 8.6 * t / Math.PI; return [96 + r * Math.cos(t), 100 + r * Math.sin(t)]; };
const SPIRAL = (() => {
  const points: string[] = [];
  for (let t = 0; t <= 6 * Math.PI + 0.01; t += 0.15) { const [x, y] = spiralPoint(t); points.push(`${x.toFixed(1)} ${y.toFixed(1)}`); }
  return `M${points.join(" L")}`;
})();

function GambSpiral(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A recognised condition: losing control", "2 to 3 in every 100 people", "Chasing losses: often bigger losses", "An escape that can make things worse", "Free NHS clinics; refer yourself"];
  const dot = at === 4 ? null : spiralPoint([6, 4.5, 1.5, 3.5][at] * Math.PI);
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The chase that leads further in" label="When gambling becomes a problem" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A spiral drawing inwards, the chase, and a way out towards help">
      <path d={SPIRAL} fill="none" stroke={at === 2 ? INK : at === 4 ? LINE : SOFT} strokeWidth="3.5" strokeLinecap="round" strokeDasharray={at === 4 ? "6 8" : undefined} />
      {dot && <circle cx={dot[0]} cy={dot[1]} r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" />}
      {at === 0 && <Tags x={198} y={50} labels={["Lost control", "Keeps going", "Comes first"]} lit={() => false} width={112} />}
      {at === 1 && <>{Array.from({ length: 100 }, (_, index) => <circle key={index} cx={206 + (index % 10) * 10} cy={42 + Math.floor(index / 10) * 10} r="3.2" fill={index < 2 ? INK : index === 2 ? SOFT : LINE} />)}<W x={251} y={156} size={10.5}>2 to 3 in 100</W></>}
      {at === 2 && <><Box x={250} y={46} w={96} text="A loss" size={10} /><Box x={250} y={96} w={96} text="Bet more" size={10} /><Box x={250} y={146} w={96} text="Bigger loss" lit size={10} /><Arrow d="M250 60 V80" head="M244 74 L250 81 L256 74" /><Arrow d="M250 110 V130" head="M244 124 L250 131 L256 124" /></>}
      {at === 3 && <Tags x={198} y={50} labels={["Reward system", "Advertising", "An escape"]} lit={() => false} width={112} />}
      {at === 4 && <><Arrow d="M156 100 H220" head="M213 94 L220 100 L213 106" /><Door x={226} y={62} w={50} h={78} lit /><W x={251} y={160} size={11}>Help</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GambNine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Nine questions, each scored 0 to 3", "Distant, quieter, out of character", "Early signs can get worse if unnoticed", "Two quick questions; a yes to either", "Support and treatment are available"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The signs" title="Nine honest questions" label="Signs of a gambling problem" credit="Illustration: Rehyn. The NHS's questions, without anyone's answers."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A card of nine questions, each with four answers from never to almost always">
      <g opacity={at >= 3 ? 0.35 : 1}>
        <rect x="18" y="14" width="152" height="178" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {Array.from({ length: 9 }, (_, index) => { const y = 34 + index * 18; return <g key={index}>
          <W x={32} y={y + 4} size={9.5}>{index + 1}</W>
          <path d={`M44 ${y} H110`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />
          {[0, 1, 2, 3].map(dot => <circle key={dot} cx={124 + dot * 12} cy={y} r="4" fill={WHITE} stroke={SOFT} strokeWidth="2" />)}
        </g>; })}
      </g>
      {at === 0 && ["0  Never", "1  Sometimes", "2  Most of the time", "3  Almost always"].map((line, index) => <W key={line} x={182} y={64 + index * 26} size={10.5} anchor="start">{line}</W>)}
      {at === 1 && <Tags x={186} y={56} labels={["Distant", "Quieter", "Out of character"]} lit={() => false} width={120} />}
      {at === 2 && <Tags x={186} y={40} labels={["Less for fun", "Drinking more", "Debts", "Missing work"]} lit={index => index >= 2} width={120} />}
      {at === 3 && <><Box x={246} y={76} w={128} text="Ever lied about it?" size={10} /><Box x={246} y={116} w={128} text="Ever bet too much?" size={10} /></>}
      {at === 4 && <><Box x={246} y={76} w={112} text="Support" lit /><Box x={246} y={116} w={112} text="Treatment" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GambEscape(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Shame, anxiety and poor sleep", "A distraction that can make it worse", "Drink and drugs make limits harder", "Some need treating at the same time", "Samaritans: 116 123, at any time"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood" title="When escape becomes the worry" label="Gambling, mood and anxiety" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person under a cloud, and the door marked escape that leads back again">
      <Person x={70} y={160} scale={1.4} />
      {at < 4 ? <Cloud x={70} y={62} s={30} opacity={at === 3 ? 0.4 : 1} /> : <Sun x={70} y={60} r={14} />}
      {at === 0 && <Tags x={168} y={36} labels={["Shame", "Anxiety", "Mood swings", "Poor sleep"]} lit={() => false} width={130} />}
      {at === 1 && <><Door x={226} y={50} w={52} h={84} /><W x={252} y={152} size={10.5}>Escape</W><Arrow d="M222 118 C196 168, 150 176, 108 152" head="M117 149 L107 152 L112 161" /></>}
      {at === 2 && <><Box x={196} y={54} w={72} text="Drink" size={10} /><Box x={276} y={54} w={64} text="Drugs" size={10} /><Arrow d="M200 68 L226 110" head="M218 106 L227 111 L226 101" /><Arrow d="M272 68 L248 110" head="M247 100 L247 111 L256 106" /><Box x={236} y={128} w={116} text="Harder limits" lit size={10} /></>}
      {at === 3 && <><ellipse cx="237" cy="100" rx="78" ry="58" fill="none" stroke={GOLD} strokeWidth="3.5" /><circle cx="212" cy="100" r="42" fill="none" stroke={INK} strokeWidth="2.5" /><circle cx="262" cy="100" r="42" fill="none" stroke={INK} strokeWidth="2.5" /><W x={198} y={104} size={10.5}>Mood</W><W x={274} y={104} size={10.5}>Gambling</W></>}
      {at === 4 && <><Phone x={236} y={72} lit /><W x={236} y={118} size={11}>Samaritans</W><W x={236} y={136} size={12}>116 123</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GambSeven(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Around 7 people affected for each one", "More arguments over money and debts", "These feelings are completely normal", "Borrowed in your name without asking", "Support for family and friends too"];
  const around = Array.from({ length: 7 }, (_, index) => { const a = -Math.PI / 2 + index * 2 * Math.PI / 7; return [160 + 120 * Math.cos(a), 104 + 66 * Math.sin(a)]; });
  const lit = (index: number) => at === 0 || at === 2 || at === 4 || (at === 1 && (index === 3 || index === 4));
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Others affected" title="One person gambles, seven feel it" label="How it affects others" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="One person in the middle, linked to seven people around them">
      {at === 4 && <ellipse cx="160" cy="104" rx="146" ry="88" fill="none" stroke={GOLD} strokeWidth="4" />}
      {around.map(([x, y], index) => <path key={index} d={`M160 100 L${x.toFixed(1)} ${y.toFixed(1)}`} stroke={LINE} strokeWidth="2" />)}
      {around.map(([x, y], index) => <Person key={index} x={x} y={y + 10} scale={0.6} fill={lit(index) ? INK : SOFT} />)}
      {at === 3
        ? <><rect x="138" y="76" width="44" height="58" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M146 92 H174 M146 104 H174 M146 116 H166" stroke={SOFT} strokeWidth="3" strokeLinecap="round" /><Cross x={160} y={104} s={20} /><W x={160} y={148} size={10}>Not yours to repay</W></>
        : <Person x={160} y={118} scale={1.1} fill={at === 2 ? SOFT : INK} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GambClinics(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Specialist NHS clinics in England", "A short online form to refer yourself", "Helpline: 0808 8020 133, 24 hours", "Gamblers Anonymous: no appointment", "Tell someone you trust as a first step"];
  const pins = [[62, 58], [100, 50], [112, 88], [74, 98], [120, 128], [84, 140], [56, 160]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Getting help" title="Free help, no letter needed" label="Free help and NHS clinics" credit="Illustration: Rehyn. A picture of the idea, not a map."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Clinic pins across a region, a referral form, a helpline and a trusted friend">
      <path d="M40 40 C70 20, 120 30, 132 60 C150 90, 140 130, 150 160 C120 182, 70 180, 48 166 C28 146, 48 112, 28 90 C18 70, 28 50, 40 40 Z" fill={TINT} stroke={SOFT} strokeWidth="2.5" />
      {pins.map(([x, y], index) => <g key={index} opacity={at === 0 ? 1 : 0.5}><path d={`M${x} ${y + 10} L${x - 6} ${y} A6 6 0 1 1 ${x + 6} ${y} Z`} fill={at === 0 ? INK : SOFT} /><circle cx={x} cy={y - 1} r="2.2" fill={WHITE} /></g>)}
      {at === 1 && <><rect x="200" y="36" width="96" height="120" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={248} y={58} size={10.5}>Referral</W>{[78, 98, 118].map(y => <path key={y} d={`M214 ${y} H282`} stroke={LINE} strokeWidth="3" strokeLinecap="round" />)}<Tick x={246} y={138} /></>}
      {at === 2 && <><Phone x={248} y={56} lit /><W x={248} y={100} size={11}>0808 8020 133</W><Clock x={248} y={134} r={16} hand={1.2} /><W x={248} y={172} size={10.5}>24 hours</W></>}
      {at === 3 && <><Box x={244} y={70} w={132} text="Gamblers Anonymous" size={10} lit /><Box x={244} y={106} w={132} text="No appointment" size={10} /><Box x={244} y={142} w={132} text="Every day" size={10} /></>}
      {at === 4 && <><Box x={246} y={64} w={124} text="A trusted friend" size={10} /><Person x={220} y={150} /><Person x={272} y={150} fill={SOFT} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GambLayers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["GAMSTOP: 6 months, 1 year or 5 years", "Blocking apps on phone and computer", "Bank block: no effect on credit score", "One request for venues in your area", "A formal agreement; get support too"];
  const rows = ["GAMSTOP", "Blocking app", "Bank block", "Venues"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Blocking" title="Layers between you and the bet" label="Blocking and self-exclusion" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four layers of protection, in front of a phone, a computer, a bank card and a shop">
      {at === 4 && <rect x="10" y="17" width="170" height="160" rx="12" fill="none" stroke={GOLD} strokeWidth="4" />}
      {rows.map((row, index) => {
        const y = 40 + index * 38;
        const on = at === index || at === 4;
        const c = on ? WHITE : INK;
        return <g key={row}>
          <rect x="20" y={y - 15} width="150" height="30" rx="9" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <Shield x={36} y={y} s={9} fill={on ? GOLD : SOFT} stroke={on ? GOLD : SOFT} />
          <W x={104} y={y + 4} size={10.5} fill={c}>{row}</W>
          <path d={`M174 ${y} H232`} stroke={LINE} strokeWidth="2.5" strokeDasharray="4 6" />
          <g opacity={on ? 1 : 0.5}>
            {index === 0 && <rect x={254} y={y - 14} width="16" height="28" rx="4" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />}
            {index === 1 && <><rect x={245} y={y - 12} width="34" height="20" rx="3" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M239 ${y + 12} H285`} stroke={INK} strokeWidth="3.5" strokeLinecap="round" /></>}
            {index === 2 && <><rect x={244} y={y - 11} width="36" height="22" rx="4" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M244 ${y - 3} H280`} stroke={on ? WHITE : INK} strokeWidth="3" /></>}
            {index === 3 && <House x={262} y={y + 14} s={0.62} fill={on ? INK : WHITE} />}
          </g>
        </g>;
      })}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GambSessions(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Group CBT: usually 8 to 10 sessions", "Challenge thoughts; tasks in between", "Motivation, barriers, then CBT", "Naltrexone, started by a specialist", "Keep using the skills afterwards"];
  const filled = [10, 5, 3, 8, 10][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Therapy" title="Changing the thoughts behind the bets" label="CBT and other therapies" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A row of therapy sessions, and a gambling thought being challenged">
      {Array.from({ length: 10 }, (_, index) => <circle key={index} cx={34 + index * 28} cy="36" r="9" fill={index < filled ? (at === 0 && index >= 8 ? SOFT : INK) : WHITE} stroke={INK} strokeWidth="2" />)}
      {at === 0 && <><W x={160} y={70} size={10.5}>A group: 8 to 10 sessions</W>{[100, 140, 180, 220].map((x, index) => <Person key={x} x={x} y={150} scale={0.8} fill={index % 2 ? SOFT : INK} />)}</>}
      {at === 1 && <><Bubble x={160} y={110} text="I can win it back" width={150} /><Cross x={258} y={110} s={14} /><W x={160} y={166} size={10.5}>Tasks between sessions</W></>}
      {at === 2 && <><Box x={62} y={120} w={92} text="Motivation" size={10} /><Box x={160} y={120} w={84} text="Barriers" size={10} /><Box x={258} y={120} w={84} text="CBT" size={10} lit /><Arrow d="M110 120 H116" head="M112 116 L117 120 L112 124" /><Arrow d="M204 120 H214" head="M210 116 L215 120 L210 124" /></>}
      {at === 3 && <><Box x={100} y={120} w={104} text="Specialist" lit /><Box x={220} y={120} w={104} text="Checks first" /></>}
      {at === 4 && <><W x={160} y={110} size={11}>Follow-up and peer support</W><Arrow d="M40 140 C120 160, 200 160, 280 140" head="M272 136 L281 140 L274 148" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GambPayday(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Free debt advice: 0808 808 4000", "Pay important bills on payday first", "You can complain to the lender", "Not a way to make money"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Money" title="Bills first, debts faced" label="Money and debt help" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A month with payday first and bills paid, and free debt advice">
      <rect x="20" y="24" width="146" height="14" rx="4" fill={INK} />
      {Array.from({ length: 20 }, (_, index) => { const x = 20 + (index % 5) * 30, y = 44 + Math.floor(index / 5) * 30; return <g key={index}>
        <rect x={x} y={y} width="26" height="24" rx="4" fill={index === 0 ? GOLD : at === 1 && index < 4 ? TINT : WHITE} stroke={INK} strokeWidth="1.5" />
        {at === 1 && index > 0 && index < 4 && <Tick x={x + 12} y={y + 12} color={INK} />}
      </g>; })}
      <W x={93} y={168} size={10}>Payday first</W>
      {at === 0 && <><Phone x={250} y={66} lit /><W x={250} y={112} size={10.5}>National Debtline</W><W x={250} y={130} size={11}>0808 808 4000</W></>}
      {at === 1 && <Tags x={184} y={50} labels={["Rent or mortgage", "Utility bills", "Food shopping"]} lit={() => true} width={124} />}
      {at === 2 && <><Box x={246} y={56} w={100} text="Lender" /><Box x={246} y={96} w={100} text="Complain" lit /><W x={246} y={140} size={10}>Loan shark? Police</W></>}
      {at === 3 && <><path d="M218 70 h56 v8 h-4 v52 a10 10 0 0 1 -10 10 h-28 a10 10 0 0 1 -10 -10 v-52 h-4 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><W x={246} y={112} size={10.5}>Savings</W><W x={246} y={164} size={10}>Not for gambling</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GambDetour(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Arguments and frustrations: triggers", "Change your route home", "Mute adverts; switch the channel", "Time with friends, or a new hobby", "Talk it through: 0808 8020 133"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Urges" title="Step around the trigger" label="Coping with urges" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Streets from home, with a route that goes around a gambling venue">
      <g stroke={LINE} strokeWidth="12" strokeLinecap="round" fill="none"><path d="M50 56 H290" /><path d="M20 156 H290" /><path d="M50 56 V156" /><path d="M290 36 V156" /></g>
      <path d="M50 156 V56 H290 V40" stroke={at === 1 ? SOFT : LINE} strokeWidth="2.5" fill="none" strokeDasharray="5 7" />
      <path d="M50 156 H290 V40" stroke={at === 1 ? GOLD : SOFT} strokeWidth={at === 1 ? 4 : 2.5} fill="none" strokeDasharray={at === 1 ? undefined : "5 7"} strokeLinejoin="round" />
      <rect x="150" y="32" width="56" height="30" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={178} y={51} size={10}>Venue</W>
      {at === 1 && <Cross x={110} y={56} s={11} />}
      <House x={34} y={146} s={0.7} fill={INK} />
      <circle cx="290" cy="24" r="11" fill={SOFT} /><path d="M290 35 V44" stroke={INK} strokeWidth="3" />
      {at === 0 && <><Box x={120} y={92} w={96} text="Arguments" size={10} /><Box x={224} y={92} w={100} text="Frustration" size={10} /><Box x={170} y={124} w={120} text="Escaping worry" size={10} /></>}
      {at === 2 && <><rect x="120" y="78" width="64" height="44" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M140 94 h6 l8 -7 v26 l-8 -7 h-6 Z" fill={INK} /><Cross x={166} y={100} s={6} /><W x={242} y={104} size={10}>Switch channel</W></>}
      {at === 3 && <><Person x={124} y={134} scale={0.75} /><Person x={150} y={134} scale={0.75} fill={SOFT} /><circle cx="214" cy="100" r="16" fill={SOFT} /><path d="M214 116 V138" stroke={INK} strokeWidth="3" /></>}
      {at === 4 && <><Phone x={138} y={104} lit /><W x={160} y={109} size={11} anchor="start">0808 8020 133</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GambNotebook(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Relapse is not shameful or a failure", "Risky time: after debts are paid off", "Write down what led to it", "Keep blocking tools in place", "Call 111 or Samaritans on 116 123"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Slips" title="A slip, not a fall" label="Slips and relapse" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An open notebook for writing down what led to a slip, and the support around it">
      <rect x="22" y="30" width="72" height="140" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="94" y="30" width="72" height="140" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {[56, 76, 96, 116, 136, 156].map(y => <g key={y}>{(at !== 2 || y > 96) && <path d={`M32 ${y} H84`} stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />}{(at !== 2 || y > 96) && <path d={`M104 ${y} H156`} stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />}</g>)}
      {at === 2 && <><W x={58} y={64} size={10.5}>What led</W><W x={58} y={82} size={10.5}>to it?</W><W x={130} y={64} size={10.5}>Watch for</W><W x={130} y={82} size={10.5}>next time</W></>}
      {at === 3 && [116, 136, 156].map(y => <Tick key={y} x={112} y={y - 4} />)}
      {at === 0 && <><Sun x={246} y={74} r={16} /><W x={246} y={130} size={11}>Not a failure</W></>}
      {at === 1 && <><Box x={246} y={70} w={116} text="Debts paid off" lit size={10} /><W x={246} y={110} size={11}>A risky time</W></>}
      {at === 2 && <>{["Extra CBT", "Peer support", "Relapse course"].map((label, index) => <Box key={label} x={246} y={50 + index * 36} w={120} text={label} size={10} />)}</>}
      {at === 3 && <><Shield x={246} y={80} s={40} /><Tick x={246} y={82} color={WHITE} /><W x={246} y={150} size={10.5}>Blocking tools</W></>}
      {at === 4 && <><Phone x={246} y={62} lit /><W x={246} y={108} size={11}>Call 111</W><W x={246} y={126} size={10.5}>Samaritans 116 123</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GambSofa(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Say you care; listen without judging", "Look after yourself too", "Block gambling on devices at home", "GamAnon, GamFam and NHS clinics help", "Celebrate progress; keep supporting"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Family and friends" title="Kindness, boundaries and help for you" label="For family and friends" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people on a sofa, one listening, with support for the family beside them">
      <rect x="26" y="96" width="184" height="44" rx="12" fill={SOFT} opacity=".45" />
      <Person x={86} y={126} scale={1.1} fill={at === 1 ? GOLD : INK} />
      <Person x={152} y={126} scale={1.1} fill={SOFT} />
      <rect x="26" y="132" width="184" height="28" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="14" y="112" width="20" height="48" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="202" y="112" width="20" height="48" rx="7" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {at === 0 && <Bubble x={110} y={50} text="I care" width={96} />}
      {at === 1 && <><Sun x={272} y={62} r={14} /><W x={272} y={110} size={10.5}>Time for you</W></>}
      {at === 2 && <><Shield x={272} y={76} s={34} /><Phone x={272} y={78} /><W x={270} y={136} size={10}>Devices blocked</W></>}
      {at === 3 && <><Door x={250} y={44} w={44} h={74} lit /><W x={272} y={136} size={10.5}>GamAnon</W></>}
      {at === 4 && <><Star x={272} y={70} r={20} /><W x={272} y={120} size={10.5}>Progress</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GambHelpTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["111, or 999 and A&E if life is at risk", "Samaritans: 116 123, day or night", "Helpline free on 0808 8020 133", "Just focus on getting through today", "A safety plan for hard moments"];
  const tiles = ["111: mental health", "Samaritans 116 123", "Text SHOUT to 85258", "999 or A&E"];
  const on = [[0, 3], [1, 2], [], [], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="In a crisis" title="You do not have to wait" label="If you feel you cannot cope" credit="Illustration: Rehyn. If a life is at risk, call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four places to get help now, a safe place with other people, and a safety plan">
      {tiles.map((tile, index) => { const x = 16 + (index % 2) * 148, y = 16 + Math.floor(index / 2) * 46; const lit = on.includes(index); return <g key={tile}>
        <rect x={x} y={y} width="140" height="40" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x + 70} y={y + 25} size={11} fill={lit ? WHITE : TEXT}>{tile}</W>
      </g>; })}
      {at === 2
        ? <Box x={160} y={146} w={190} text="Helpline 0808 8020 133" lit />
        : <>
          <g opacity={at === 3 ? 1 : 0.4}><House x={64} y={172} s={0.9} fill={at === 3 ? INK : WHITE} /><Person x={108} y={174} scale={0.7} fill={SOFT} /></g>
          <g opacity={at === 4 ? 1 : 0.4}><rect x="146" y="118" width="44" height="58" rx="5" fill={at === 4 ? INK : WHITE} stroke={INK} strokeWidth="2.5" />{[134, 148, 162].map(y => <path key={y} d={`M154 ${y} H182`} stroke={at === 4 ? WHITE : SOFT} strokeWidth="3" strokeLinecap="round" />)}</g>
          <Sun x={262} y={148} r={14} />
        </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Quitting smoking ======================================================================================

function SmokeTimeline(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The repair starts the day you stop", "Lung function up by up to 10%", "Big risks are significantly reduced", "Save around £49 a week", "More coughing for a while: a good sign"];
  const lines = [["20 minutes: pulse returning to normal", "48 hours: taste and smell improving"], ["2 to 12 weeks: circulation improves", "3 to 9 months: easier breathing"], ["1 year: heart attack risk halves", "15 years: risk like a non-smoker's"], ["Brighter skin, no tar stains", "Over £2,500 a year"], ["More cough or phlegm for a while", "Other changes are only temporary"]][at];
  const zones = [{ x: 62, t: "Hours, days" }, { x: 160, t: "Months" }, { x: 258, t: "Years" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Why quit" title="From 20 minutes to 15 years" label="What quitting does for your body" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline of what changes after stopping smoking, from hours to years">
      {zones.map((zone, index) => <Box key={zone.t} x={zone.x} y={36} w={zone.t.length > 6 ? 96 : 84} text={zone.t} lit={at === index} size={10} />)}
      <path d="M20 80 H300" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {zones.map((zone, index) => <circle key={zone.t} cx={zone.x} cy="80" r="7" fill={index <= at && at < 3 ? INK : WHITE} stroke={INK} strokeWidth="2" />)}
      {at < 3 && <circle cx={zones[at].x} cy="80" r="11" fill="none" stroke={GOLD} strokeWidth="3.5" />}
      {at >= 3 && <path d="M20 80 H300" stroke={GOLD} strokeWidth="2" strokeDasharray="2 10" />}
      <W x={160} y={124} size={10.5}>{lines[0]}</W>
      <W x={160} y={148} size={10.5}>{lines[1]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SmokeWave(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The brain comes to depend on nicotine", "Tar and toxins do almost all the harm", "Urges, restlessness, poor sleep", "Strongest in the first 3 days", "Stop smoking products and support help"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Nicotine" title="Withdrawal is real, and it passes" label="Nicotine, cravings and withdrawal" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Withdrawal as a wave that peaks in the first days and settles over weeks">
      {at === 3 && <rect x="20" y="96" width="46" height="80" fill={GOLD} opacity=".25" />}
      <path d="M20 168 C34 168, 40 112, 66 110 C96 108, 120 150, 170 160 C220 168, 260 170, 300 170" stroke={at === 3 ? INK : SOFT} strokeWidth={at === 3 ? 4 : 3} fill="none" />
      <path d="M20 176 H300" stroke={LINE} strokeWidth="3" />
      <W x={20} y={192} size={10} anchor="start">Start</W><W x={78} y={192} size={10}>3 days</W><W x={300} y={192} size={10} anchor="end">4 weeks</W>
      {at === 0 && <><Clock x={60} y={46} r={18} hand={2} /><W x={60} y={84} size={10.5}>Waking up</W><path d="M200 30 V72" stroke={INK} strokeWidth="3" /><rect x="186" y="22" width="28" height="18" rx="3" fill={INK} /><W x={200} y={35} size={9.5} fill={WHITE}>Bus</W><W x={200} y={88} size={10.5}>Waiting for a bus</W></>}
      {at === 1 && <><Box x={80} y={44} w={104} text="Nicotine" /><W x={80} y={76} size={10.5}>Addictive</W><Box x={230} y={44} w={124} text="Tar and toxins" lit /><W x={230} y={76} size={10.5}>Almost all the harm</W></>}
      {at === 2 && <>{[{ x: 60, w: 80, t: "Urges" }, { x: 160, w: 84, t: "Restless" }, { x: 260, w: 90, t: "Poor sleep" }].map(box => <Box key={box.t} x={box.x} y={40} w={box.w} text={box.t} size={10} />)}<Box x={110} y={74} w={90} text="Irritable" size={10} /><Box x={210} y={74} w={90} text="Low mood" size={10} /></>}
      {at === 3 && <><W x={170} y={44} size={11}>Strongest: first 3 days</W><W x={170} y={68} size={11}>3 to 4 weeks on average</W></>}
      {at === 4 && <><Box x={100} y={44} w={100} text="Products" /><Box x={220} y={44} w={100} text="Support" lit /><W x={160} y={84} size={10.5}>1 cigarette can restart the cycle</W></>}
      <Say y={212}>{caps[at]}</Say>
    </svg>} />;
}

function SmokeReliefLoop(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Brief relief, then the craving returns", "Less anxiety and stress after quitting", "Cravings usually subside by 28 days", "Harder, but many people have quit", "Some medicines: talk to your GP first"];
  const showLine = at <= 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mental health" title="The calm that cigarettes borrow" label="Smoking and mental health" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A loop of craving, smoking and brief relief, beside a calmer line after quitting">
      <ellipse cx="96" cy="96" rx="64" ry="52" fill="none" stroke={at === 0 ? INK : SOFT} strokeWidth={at === 0 ? 4 : 3} />
      {at === 0 && <circle cx="160" cy="96" r="7" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />}
      <Box x={96} y={44} w={80} text="Craving" size={10} lit={at === 0} />
      <Box x={140} y={136} w={64} text="Smoke" size={10} lit={at === 0} />
      <Box x={46} y={136} w={84} text="Brief relief" size={10} lit={at === 0} />
      {showLine && <><path d="M196 156 C236 150, 256 104, 304 84" stroke={at === 0 ? SOFT : GOLD} strokeWidth={at === 0 ? 3 : 4} fill="none" strokeLinecap="round" /><W x={252} y={180} size={10.5}>After quitting</W></>}
      {at === 1 && <W x={252} y={60} size={10}>As little as 6 weeks</W>}
      {at === 2 && <W x={252} y={60} size={11}>28 days</W>}
      {at === 3 && <><W x={250} y={72} size={10.5}>Many have quit</W>{[214, 248, 282].map(x => <Person key={x} x={x} y={150} scale={0.8} />)}</>}
      {at === 4 && <><Box x={252} y={70} w={104} text="GP first" lit /><Box x={252} y={110} w={104} text="Dose checked" size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SmokeScales(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Some weight gain; far bigger benefits", "It is never too late", "Quitting can lift mood, ease anxiety", "Other chemicals do almost all the harm", "3 times more likely with expert help"];
  const left = ["Some weight", "Your age", "Stress relief?", "Nicotine", "Willpower alone"][at];
  const right = ["Health benefits", "Never too late", "Better mood", "Other chemicals", "Expert help"][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Common worries" title="Worries, weighed against the facts" label="Common worries about quitting" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A set of scales weighing a worry against the facts">
      <path d="M124 180 H196 M160 180 V54" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <path d="M60 40 L260 68" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <circle cx="160" cy="54" r="6" fill={GOLD} />
      <path d="M60 40 V61 M260 68 V89" stroke={INK} strokeWidth="2" />
      <Box x={60} y={74} w={104} text={left} size={10} />
      <path d="M16 90 Q60 104 104 90" stroke={INK} strokeWidth="2.5" fill="none" />
      <Box x={260} y={102} w={108} text={right} size={10} lit />
      <path d="M214 118 Q260 132 306 118" stroke={INK} strokeWidth="2.5" fill="none" />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SmokeAdviser(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Expert help: 3 times more likely", "One-to-one, group, online or by phone", "Reasons, a quit date and a breath test", "Support for up to 12 weeks", "Smokefree Helpline: 0300 123 1044"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Stop smoking services" title="Free help, three times the chance" label="Free NHS stop smoking services" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person and a stop smoking adviser at a table, and what the service offers">
      <Person x={58} y={152} scale={1.25} />
      <Person x={262} y={152} scale={1.25} fill={SOFT} />
      <rect x="92" y="128" width="136" height="10" rx="3" fill={INK} /><path d="M104 138 V178 M216 138 V178" stroke={INK} strokeWidth="4" />
      {at === 0 && <><circle cx="160" cy="68" r="30" fill={GOLD} /><W x={160} y={76} size={20} fill={INK}>×3</W></>}
      {at === 1 && <><Box x={124} y={44} w={84} text="One-to-one" size={10} /><Box x={206} y={44} w={64} text="Group" size={10} /><Box x={124} y={78} w={84} text="Online" size={10} /><Box x={206} y={78} w={64} text="Phone" size={10} /></>}
      {at === 2 && <><Box x={160} y={50} w={96} text="Quit date" lit /><rect x="146" y="94" width="28" height="34" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={160} y={116} size={10}>CO</W></>}
      {at === 3 && <>{Array.from({ length: 12 }, (_, index) => <rect key={index} x={89 + index * 12} y="56" width="10" height="20" rx="2" fill={INK} />)}<W x={160} y={102} size={10.5}>Up to 12 weeks</W></>}
      {at === 4 && <><Phone x={160} y={62} lit /><W x={160} y={106} size={11}>0300 123 1044</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SmokePatch(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Can double your chances of quitting", "Patch: steady. Gum or spray: fast", "Combining gives the best results", "About 12 weeks, or as long as needed", "Safe in pregnancy; ask a professional"];
  const chart = at >= 1 && at <= 3;
  const spikes = at === 1 || at === 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Nicotine replacement" title="A patch for the day, a spray for the moment" label="Nicotine replacement" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A patch giving steady support, with short bursts from fast-acting products">
      {at === 0 && <>
        <rect x="35" y="58" width="30" height="30" rx="8" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <rect x="90" y="66" width="30" height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <circle cx="160" cy="73" r="12" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="203" y="56" width="24" height="34" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="261" y="62" width="18" height="28" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="265" y="52" width="10" height="10" rx="2" fill={INK} />
        {["Patch", "Gum", "Lozenge", "Inhaler", "Spray"].map((label, index) => <W key={label} x={50 + index * 55} y={116} size={10}>{label}</W>)}
      </>}
      {chart && <>
        <path d="M24 168 H300" stroke={LINE} strokeWidth="3" />
        <path d={at === 3 ? "M24 128 H230 L300 158 V162 H24 Z" : "M24 128 H300 V154 H24 Z"} fill={at === 2 ? INK : SOFT} opacity={at === 2 ? 1 : 0.8} />
        <W x={120} y={146} size={10.5} fill={at === 2 ? WHITE : TEXT}>Patch: steady</W>
        {[70, 160, 250].map(x => <path key={x} d={`M${x - 12} 128 L${x} 84 L${x + 12} 128 Z`} fill={spikes ? GOLD : LINE} />)}
        <W x={162} y={52} size={10.5}>{["", "Fast-acting: sudden cravings", "Patch plus fast-acting", "Reduce gradually when ready"][at]}</W>
        {at === 3 && <W x={300} y={186} size={10} anchor="end">About 12 weeks</W>}
      </>}
      {at === 4 && <><Box x={60} y={70} w={90} text="Pharmacy" size={10} /><Box x={160} y={70} w={96} text="Supermarket" size={10} /><Box x={262} y={70} w={96} text="GP or service" size={10} /><W x={160} y={124} size={11}>Safe in pregnancy</W><W x={160} y={146} size={10.5}>Ask a professional first</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

/** Fixed, gently scattered spots inside a jar. */
const JAR_SPOTS = Array.from({ length: 36 }, (_, index) => [56 + (index % 6) * 12 + ((index * 7) % 5), 66 + Math.floor(index / 6) * 16 + ((index * 3) % 6)]);

function SmokeJars(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A fraction of the risk, not risk-free", "Roughly twice as likely to quit", "Get advice on kit and strength", "Some side effects: cough, dry mouth", "Later, aim to stop vaping too"];
  const jar = (dx: number) => `M${44 + dx} 54 V156 Q${44 + dx} 172 ${60 + dx} 172 H${112 + dx} Q${128 + dx} 172 ${128 + dx} 156 V54 Z`;
  const vapeSpots = JAR_SPOTS.filter((_, index) => [7, 15, 20, 26, 33].includes(index)).slice(0, at === 4 ? 1 : 5);
  const top = ["Vaping: no tar, no carbon monoxide", "", "", "Out of reach of children; charge safely", "Lower the nicotine gradually"][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Vaping" title="A small fraction of the risk" label="Vaping to quit" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two jars: smoking full of harmful chemicals, vaping with far fewer">
      {top && <W x={160} y={26} size={10.5}>{top}</W>}
      <path d={jar(0)} fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="40" y="40" width="92" height="14" rx="4" fill={INK} />
      <path d={jar(150)} fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="190" y="40" width="92" height="14" rx="4" fill={INK} />
      {JAR_SPOTS.map(([x, y], index) => <circle key={index} cx={x} cy={y} r="4" fill={at <= 1 ? INK : SOFT} />)}
      {vapeSpots.map(([x, y], index) => <circle key={index} cx={x + 150} cy={y} r="4" fill={SOFT} />)}
      {at === 1 && <><circle cx="236" cy="110" r="24" fill={INK} /><W x={236} y={117} size={18} fill={WHITE}>×2</W></>}
      {at === 2 && <Box x={236} y={110} w={92} text="Advice first" size={10} lit />}
      {at === 4 && <Arrow d="M236 90 V140" head="M229 133 L236 141 L243 133" />}
      <W x={86} y={190} size={10.5}>Smoking</W><W x={236} y={190} size={10.5}>Vaping</W>
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

function SmokeStrip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Three medicines, none with nicotine", "Start 1 to 2 weeks before your date", "Feeling low? Call a doctor or 111", "Talk to your doctor before starting", "Combined: over 5 times more likely"];
  const lit = at === 1 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Tablets that take the pleasure out" label="Stop smoking medicines" credit="Illustration: Rehyn. Medicines are prescribed and checked by a doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A 12-week course that starts before the quit date, and what to know about it">
      {Array.from({ length: 12 }, (_, index) => <rect key={index} x={22 + index * 24} y="104" width="20" height="28" rx="4" fill={lit ? (index < 2 ? SOFT : INK) : WHITE} stroke={INK} strokeWidth="2" opacity={lit ? 1 : 0.45} />)}
      {at === 1 && <><path d="M68 100 V74" stroke={INK} strokeWidth="2.5" /><path d="M68 74 h28 l-6 6 l6 6 h-28 Z" fill={GOLD} /><W x={82} y={66} size={10}>Quit date</W><W x={32} y={152} size={10}>Start</W><W x={180} y={152} size={10.5}>12-week course</W></>}
      {at === 0 && <><Box x={60} y={44} w={96} text="Varenicline" size={10} /><Box x={162} y={44} w={88} text="Cytisine" size={10} /><Box x={262} y={44} w={92} text="Bupropion" size={10} /></>}
      {at === 2 && <><Box x={60} y={44} w={92} text="Headaches" size={10} /><Box x={162} y={44} w={96} text="Feeling sick" size={10} /><Box x={262} y={44} w={88} text="Dizzy" size={10} /></>}
      {at === 3 && <Box x={160} y={44} w={156} text="Talk to your doctor" lit />}
      {at === 4 && <><Box x={90} y={44} w={90} text="Tablets" /><W x={160} y={50} size={18}>+</W><Box x={232} y={44} w={112} text="Patch or vape" lit size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SmokeStopwatch(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Hardest in the first 28 days", "Coffee, breaks, meals, the phone", "Cravings only last up to 15 minutes", "Swap the habits tied to smoking", "Call a friend when a craving is strong"];
  const labels = at === 3 ? ["Juice", "Phone", "Alcohol-free", "Brush teeth"] : at === 4 ? ["Coffee", "A friend", "Alcohol", "Meals"] : ["Coffee", "Phone", "Alcohol", "Meals"];
  const icons = at === 1 || at === 3 ? 1 : 0.45;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Cravings" title="Fifteen minutes, then it passes" label="Getting through cravings" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A stopwatch counting a craving down to 15 minutes, with everyday triggers around it">
      <rect x="152" y="40" width="16" height="10" rx="2" fill={INK} />
      <circle cx="160" cy="104" r="54" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M160 104 L160 50 A54 54 0 0 1 214 104 Z" fill={GOLD} opacity={at === 2 ? 0.8 : 0.15} />
      <path d={at === 2 ? "M160 104 L200 104" : "M160 104 L160 64"} stroke={TEXT} strokeWidth="4" strokeLinecap="round" /><circle cx="160" cy="104" r="4" fill={TEXT} />
      {at === 0 && <W x={160} y={140} size={13}>28 days</W>}
      {at === 2 && <W x={160} y={140} size={10.5}>Up to 15 min</W>}
      {at === 4 && <W x={160} y={140} size={10.5}>Quit buddy</W>}
      <g opacity={icons}><Cup x={40} y={52} /></g>
      <g opacity={at === 4 ? 1 : icons}><Phone x={280} y={52} lit={at === 4} /></g>
      <g opacity={icons}><path d="M28 130 H52 Q52 148 40 148 Q28 148 28 130 Z M40 148 V162 M31 162 H49" stroke={INK} strokeWidth="2.5" fill={WHITE} strokeLinejoin="round" /></g>
      <g opacity={icons}><circle cx="280" cy="146" r="16" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="280" cy="146" r="9" fill="none" stroke={SOFT} strokeWidth="2" /></g>
      <W x={40} y={90} size={10}>{labels[0]}</W><W x={280} y={90} size={10}>{labels[1]}</W>
      <W x={42} y={184} size={10}>{labels[2]}</W><W x={280} y={184} size={10}>{labels[3]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SmokePlanCard(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Preparing ahead boosts your chances", "A date within the next 2 weeks", "Write your reasons where you see them", "Plan for triggers; have products ready", "Reach 28 days: 5 times more likely"];
  const rows = ["Quit date", "My reasons", "Get ready", "Track it"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Quit plan" title="A plan that sticks" label="Making a quit plan" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A quit plan card with a date, reasons, getting ready and tracking, beside a calendar">
      <rect x="18" y="16" width="152" height="176" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <W x={94} y={42} size={11}>My quit plan</W>
      {rows.map((row, index) => { const y = 74 + index * 32; const current = index === at - 1; return <g key={row}>
        <rect x="32" y={y - 11} width="18" height="18" rx="4" fill={current ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {index < at - 1 && <Tick x={40} y={y - 2} />}
        <W x={60} y={y + 4} size={10.5} anchor="start">{row}</W>
      </g>; })}
      {at === 0 && <><Box x={248} y={64} w={112} text="8-step plan" lit /><W x={248} y={104} size={10.5}>Prepare ahead</W></>}
      {at === 1 && <>{Array.from({ length: 14 }, (_, index) => <rect key={index} x={194 + (index % 7) * 16} y={56 + Math.floor(index / 7) * 16} width="13" height="13" rx="2" fill={index === 9 ? INK : WHITE} stroke={INK} strokeWidth="1.5" />)}<circle cx="234.5" cy="78.5" r="11" fill="none" stroke={GOLD} strokeWidth="3" /><W x={248} y={116} size={10.5}>Within 2 weeks</W></>}
      {at === 2 && <g transform="rotate(3 248 90)"><rect x="200" y="44" width="96" height="92" rx="4" fill={TINT} stroke={INK} strokeWidth="2" />{["Family", "Fitness", "Money"].map((reason, index) => <W key={reason} x={248} y={74 + index * 24} size={10.5}>{reason}</W>)}</g>}
      {at === 3 && <>{["Products ready", "Distractions", "Triggers planned"].map((label, index) => <Box key={label} x={248} y={56 + index * 36} w={120} text={label} size={10} />)}</>}
      {at === 4 && <>{Array.from({ length: 28 }, (_, index) => <rect key={index} x={194 + (index % 7) * 16} y={46 + Math.floor(index / 7) * 16} width="13" height="13" rx="2" fill={GOLD} />)}<W x={248} y={134} size={11}>28 days</W><W x={248} y={152} size={10}>5 times more likely</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SmokeDayDots(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Part of the process for most people", "One puff is a lapse: keep going", "Stress, tough times, willpower alone", "Write down how you will handle it", "A stop smoking adviser can help"];
  const days = Array.from({ length: 14 }, (_, index) => [30 + index * 20, index === 6 ? 128 : 100]);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Slips" title="One cigarette is a lapse, not the end" label="Slips and trying again" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A row of smoke-free days with one small dip, and the line carrying on">
      <path d={`M${days.map(([x, y]) => `${x} ${y}`).join(" L")}`} stroke={LINE} strokeWidth="3" fill="none" />
      {days.map(([x, y], index) => <circle key={index} cx={x} cy={y} r="7" fill={index === 6 ? (at === 1 ? GOLD : SOFT) : INK} stroke={WHITE} strokeWidth="2" />)}
      {at === 0 && <W x={160} y={56} size={11}>Smoke-free time is an achievement</W>}
      {at === 1 && <W x={150} y={154} size={10.5}>Lapse</W>}
      {at === 2 && <><Box x={60} y={50} w={76} text="Stress" size={10} /><Box x={158} y={50} w={96} text="Tough times" size={10} /><Box x={262} y={50} w={104} text="Willpower alone" size={10} /></>}
      {at === 3 && <><rect x="80" y="30" width="160" height="40" rx="6" fill={TINT} stroke={INK} strokeWidth="2" /><W x={160} y={55} size={10.5}>The trigger, and my plan</W></>}
      {at === 4 && <><Box x={160} y={50} w={160} text="Stop smoking service" lit size={10} /><Person x={160} y={176} scale={0.8} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SmokeHouse(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Most smoke goes into the air nearby", "It lingers, even with a window open", "Illegal in a car with anyone under 18", "Best not to vape around children", "Ask how to help, rather than nag"];
  const clouds = [[[73, 108]], [[73, 108], [140, 142], [206, 110]], [], [], []][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Smoke-free home" title="A smoke-free home for everyone" label="Smoke-free homes and family" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A house with three rooms, and how smoke spreads from one room to the rest">
      <path d="M28 70 L140 22 L252 70" stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" />
      <rect x="40" y="70" width="200" height="110" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M106 70 V180 M173 70 V180" stroke={INK} strokeWidth="2" />
      <rect x="126" y="92" width="28" height="26" fill={at === 1 ? TINT : WHITE} stroke={INK} strokeWidth="2" />
      {at === 1 && <path d="M154 92 L166 98 V124 L154 118" fill="none" stroke={INK} strokeWidth="2" />}
      {clouds.map(([x, y], index) => <Cloud key={index} x={x} y={y} s={16} opacity={0.75} />)}
      {at === 3 && <Cloud x={84} y={114} s={10} opacity={0.3} />}
      <Person x={73} y={172} scale={0.9} />
      <Person x={206} y={174} scale={0.65} fill={at === 2 || at === 3 ? INK : SOFT} />
      {at === 4 && <><Person x={140} y={172} scale={0.9} fill={SOFT} /><Sun x={290} y={44} r={13} /><Star x={290} y={120} r={16} /></>}
      {at === 2 && <><rect x="262" y="148" width="50" height="18" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M270 148 l6 -12 h22 l6 12" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><circle cx="274" cy="168" r="5" fill={INK} /><circle cx="300" cy="168" r="5" fill={INK} /><Cross x={287} y={150} s={12} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function HabitPieceView({ piece, ...props }: { piece: HabitPiece } & PieceProps) {
  switch (piece) {
    case "drug-loop": return <DrugLoop {...props} />;
    case "drug-two-way": return <DrugTwoWay {...props} />;
    case "drug-dose-steps": return <DrugDoseSteps {...props} />;
    case "drug-checklist": return <DrugChecklist {...props} />;
    case "drug-two-doors": return <DrugTwoDoors {...props} />;
    case "drug-ramp": return <DrugRamp {...props} />;
    case "drug-three-tiles": return <DrugTiles {...props} />;
    case "drug-999-steps": return <DrugEmergency {...props} />;
    case "drug-trail": return <DrugTrail {...props} />;
    case "drug-tea-talk": return <DrugTeaTalk {...props} />;
    case "drug-shield": return <DrugShield {...props} />;
    case "drug-circle-chairs": return <DrugCircle {...props} />;
    case "gamb-spiral": return <GambSpiral {...props} />;
    case "gamb-nine-questions": return <GambNine {...props} />;
    case "gamb-escape-door": return <GambEscape {...props} />;
    case "gamb-seven": return <GambSeven {...props} />;
    case "gamb-clinic-map": return <GambClinics {...props} />;
    case "gamb-layers": return <GambLayers {...props} />;
    case "gamb-sessions": return <GambSessions {...props} />;
    case "gamb-payday": return <GambPayday {...props} />;
    case "gamb-detour": return <GambDetour {...props} />;
    case "gamb-notebook": return <GambNotebook {...props} />;
    case "gamb-sofa": return <GambSofa {...props} />;
    case "gamb-help-tiles": return <GambHelpTiles {...props} />;
    case "smoke-timeline": return <SmokeTimeline {...props} />;
    case "smoke-withdrawal-wave": return <SmokeWave {...props} />;
    case "smoke-relief-loop": return <SmokeReliefLoop {...props} />;
    case "smoke-scales": return <SmokeScales {...props} />;
    case "smoke-adviser-table": return <SmokeAdviser {...props} />;
    case "smoke-patch-bursts": return <SmokePatch {...props} />;
    case "smoke-two-jars": return <SmokeJars {...props} />;
    case "smoke-12-week-strip": return <SmokeStrip {...props} />;
    case "smoke-stopwatch": return <SmokeStopwatch {...props} />;
    case "smoke-plan-card": return <SmokePlanCard {...props} />;
    case "smoke-day-dots": return <SmokeDayDots {...props} />;
    case "smoke-house": return <SmokeHouse {...props} />;
  }
}
