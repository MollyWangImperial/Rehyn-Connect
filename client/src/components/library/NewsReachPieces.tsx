import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { REACH_PIECES, type ReachPiece } from "@/content/reach-features";
import type { PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Loneliness and Alcohol pages' own pieces (content/reach-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Mind & mood pieces. Each is steered by the card's sections; pictures are
// calm and hopeful and never show anyone's own thoughts, body or harm. Drinks are only ever plain outlines.

export const isReachPiece = (piece: NewsPiece): piece is ReachPiece => (REACH_PIECES as readonly string[]).includes(piece);

const crisisCredit = "Illustration: Rehyn. In danger now? Call 999.";
const withdrawalCredit = "Illustration: Rehyn. If you drink heavily, do not stop suddenly without medical advice.";

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5, faint = false }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number; faint?: boolean }) =>
  <g opacity={faint ? 0.35 : 1}><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 204, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 11} y={y - 18} width="22" height="36" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 11} r="2.2" fill={lit ? WHITE : INK} /></g>;
/** A teacup. */
const Cup = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 12} y={y - 13} width="24" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 12} ${y - 7} h5 a6 6 0 0 1 0 12 h-5`} fill="none" stroke={INK} strokeWidth="2.5" /></g>;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Tick = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - 7 * s} ${y} l${5 * s} ${6 * s} l${10 * s} ${-12 * s}`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const Cloud = ({ x, y, s, opacity = 1 }: { x: number; y: number; s: number; opacity?: number }) =>
  <g opacity={opacity} fill={SOFT}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
/** A plain, empty glass outline standing on y (never filled, never shown as anything inviting). */
const Tumbler = ({ x, y, w = 30, h = 40, fill = WHITE }: { x: number; y: number; w?: number; h?: number; fill?: string }) =>
  <path d={`M${x - w / 2} ${y - h} L${x + w / 2} ${y - h} L${x + w / 2 - 3} ${y} L${x - w / 2 + 3} ${y} Z`} fill={fill} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />;
/** A plain, empty stemmed glass outline standing on y; `r` is half the bowl's width. */
const Stemmed = ({ x, y, r = 14 }: { x: number; y: number; r?: number }) =>
  <g fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round"><path d={`M${x - r} ${y - 52 * r / 14} C${x - r} ${y - 24 * r / 14}, ${x + r} ${y - 24 * r / 14}, ${x + r} ${y - 52 * r / 14} Z`} fill={WHITE} /><path d={`M${x} ${y - 30 * r / 14} V${y}`} /><path d={`M${x - r * 0.7} ${y} H${x + r * 0.7}`} /></g>;
/** A row of signboards on a post, all lit: the crisis routes as the answers give them. */
const Signposts = ({ boards }: { boards: string[] }) =>
  <g><rect x="36" y="16" width="8" height="166" rx="3" fill={INK} />
    {boards.map((board, index) => { const y = 24 + index * 38; return <g key={board}>
      <path d={`M44 ${y} H218 L230 ${y + 14} L218 ${y + 28} H44 Z`} fill={INK} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <W x={131} y={y + 18} size={10.5} fill={WHITE}>{board}</W>
    </g>; })}</g>;

// ==== Loneliness =============================================================================================

function LoneAloneTogether(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Lonely in company, content alone", "Different kinds, at different times", "Most people feel lonely sometimes", "Feeling lonely now and then is normal"];
  const kinds = [{ t: "Emotional", d: "no close attachment" }, { t: "Social", d: "no friends to go out with" }, { t: "Existential", d: "alone in a room of people" }, { t: "Chronic", d: "lonely all the time" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Lonely is not the same as alone" label="What loneliness is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="One person content alone on a bench, and one person lonely in a group">
      {(at === 0 || at === 3) && <>
        <path d="M10 150 H310" stroke={LINE} strokeWidth="3" />
        <path d="M40 112 H120" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <Person x={80} y={114} scale={1.1} />
        <path d="M36 128 H124 M46 128 V150 M114 128 V150" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        {[200, 280].map(x => <Person key={x} x={x} y={136} fill={SOFT} />)}
        <Person x={240} y={136} fill={INK} />
        {at === 0 && <circle cx="240" cy="112" r="30" fill="none" stroke={INK} strokeWidth="2" strokeDasharray="5 6" />}
        {at === 3 && <path d="M196 84 C220 66, 260 66, 284 84" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />}
        <Sun x={at === 3 ? 160 : 40} y={at === 3 ? 44 : 40} r={at === 3 ? 13 : 10} />
        {at === 0 && <><W x={80} y={172} size={10.5}>Alone, content</W><W x={240} y={172} size={10.5}>Lonely in company</W></>}
      </>}
      {at === 1 && kinds.map((kind, index) => { const x = index % 2 ? 230 : 90; const y = index < 2 ? 46 : 116; return <g key={kind.t}>
        <Box x={x} y={y} w={130} text={kind.t} lit={index === 0} />
        <W x={x} y={y + 30} size={9.5}>{kind.d}</W>
      </g>; })}
      {at === 2 && <>
        {Array.from({ length: 100 }, (_, index) => <circle key={index} cx={34 + (index % 10) * 14} cy={40 + Math.floor(index / 10) * 14} r="5" fill={index < 23 ? INK : index < 50 ? SOFT : LINE} />)}
        <rect x="180" y="58" width="12" height="12" rx="3" fill={INK} /><W x={198} y={69} size={11} anchor="start">23 in 100</W>
        <W x={198} y={85} size={9.5} anchor="start">often, always or</W><W x={198} y={98} size={9.5} anchor="start">some of the time</W>
        <rect x="180" y="118" width="12" height="12" rx="3" fill={SOFT} /><W x={198} y={129} size={11} anchor="start">27 in 100</W>
        <W x={198} y={145} size={9.5} anchor="start">occasionally</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LoneLifeChanges(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Losses and changes that keep us apart", "Health changes can knock confidence", "Even happy changes, like a new baby", "It can affect people of any age", "No clear reason? Talking can help"];
  const labels = ["Living alone", "Bereavement", "Moving", "Illness", "Retirement", "New baby"];
  const lit = [[0, 1, 2], [3], [4, 5], [], []][at];
  const spot = (index: number) => ({ x: index < 3 ? 62 : 258, y: 44 + (index % 3) * 56 });
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Why it happens" title="The changes that leave us lonely" label="Causes of loneliness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person surrounded by life changes that can bring loneliness">
      {lit.map(index => { const { x, y } = spot(index); return <path key={index} d={`M160 96 L${x < 160 ? x + 48 : x - 48} ${y}`} stroke={GOLD} strokeWidth="2.5" />; })}
      {labels.map((label, index) => { const { x, y } = spot(index); return <Box key={label} x={x} y={y} w={96} text={label} lit={lit.includes(index)} faint={at >= 3} />; })}
      {at < 3 && <Person x={160} y={128} scale={1.3} />}
      {at === 3 && <><Person x={120} y={140} scale={0.8} fill={SOFT} /><Person x={160} y={140} scale={1.2} /><Person x={200} y={140} scale={0.95} fill={SOFT} /></>}
      {at === 4 && <><Bubble x={160} y={52} text="Talking helps" width={96} /><Person x={160} y={150} scale={1.1} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LoneRipple(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["It can change how we feel and behave", "Lasting loneliness can harm health", "Harder to look after yourself", "Connection is good for body and mind"];
  const labels = [["Avoiding events", "Not cooking", "Poor sleep"], ["Low mood, depression", "Stress and anxiety", "Heart and immunity"], ["Drinking too much", "Over-eating", "Dropping hobbies"], ["Belonging", "Emotional support", "Staying sharp"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood and health" title="What loneliness does to body and mind" label="Loneliness and health" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person, what loneliness can bring, and people together">
      {at < 3 && <><circle cx="70" cy="122" r="50" fill={TINT} stroke={SOFT} strokeWidth="2.5" strokeDasharray="6 7" /><Person x={70} y={150} scale={1.5} /></>}
      {at === 3 && <><path d="M36 92 C56 70, 104 70, 124 92" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" /><Person x={40} y={152} scale={1.05} fill={SOFT} /><Person x={80} y={152} scale={1.3} /><Person x={120} y={152} scale={1.05} fill={SOFT} /></>}
      <Tags x={150} y={42} labels={labels} lit={() => at === 3} width={156} gap={44} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LoneDoorstep(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Often too embarrassed to ask", "Not their usual self lately", "Older people living alone, or bereaved", "Let them know you are there"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Signs to notice" title="The quiet signs someone is lonely" label="Signs of loneliness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A house with someone at the window, and a neighbour calling round">
      <path d="M10 178 H310" stroke={LINE} strokeWidth="3" />
      <path d="M24 74 L90 30 L156 74 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="34" y="74" width="112" height="104" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="100" y="124" width="30" height="54" rx="3" fill={SOFT} stroke={INK} strokeWidth="2" />
      <rect x="46" y="90" width="42" height="36" rx="3" fill={at === 1 ? SOFT : WHITE} stroke={INK} strokeWidth="2" />
      {at !== 1 && <Person x={67} y={120} scale={0.45} />}
      {at === 0 && <Bubble x={240} y={70} text="I'd like some company" width={140} lit={false} />}
      {at === 1 && <Tags x={172} y={44} labels={["Not their usual self", "Routine slipping", "Withdrawing"]} lit={() => false} width={136} gap={40} />}
      {at === 2 && <Tags x={172} y={28} labels={["Living alone", "Recently bereaved", "Poor health", "Sight or hearing loss"]} lit={() => false} width={140} gap={34} />}
      {at === 3 && <><Person x={200} y={164} fill={SOFT} /><Bubble x={248} y={74} text="I'm here for you" width={116} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LoneStairSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Set small targets you can achieve", "Regular chats help, both ways", "Smile, say hello, invite someone over", "Plan things to look forward to", "Be upfront about how you feel"];
  const steps = ["Message", "Get out", "Plan", "Talk"];
  const spot = at === 0 ? { x: 28, y: 166 } : { x: 56 + (at - 1) * 64 + 31, y: 150 - (at - 1) * 30 - 10 };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Small steps" title="Small steps back to people" label="Small steps to reconnect" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four small steps up: a message, getting out, a plan and talking">
      <path d="M10 176 H310" stroke={LINE} strokeWidth="3" />
      {steps.map((step, index) => { const top = 150 - index * 30; const on = at === index + 1; const done = index + 1 < at; return <g key={step}>
        <rect x={56 + index * 64} y={top} width="62" height={176 - top} rx="5" fill={on ? INK : done ? SOFT : WHITE} stroke={at === 0 && index === 0 ? GOLD : INK} strokeWidth={at === 0 && index === 0 ? 3.5 : 2} />
        <W x={87 + index * 64} y={top + 19} size={10} fill={on ? WHITE : TEXT}>{step}</W>
      </g>; })}
      <Person x={spot.x} y={spot.y} scale={0.7} fill={at === 0 ? INK : SOFT} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LoneNoticeboard(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Groups built around what you enjoy", "Clubs, tea parties and activity groups", "With others going through the same", "Volunteering can boost wellbeing"];
  const cards = [["Walking"], ["Choir"], ["Tea party"], ["Men in", "Sheds"], ["Support", "group"], ["Volunteers"]];
  const lit = [[0, 1], [2, 3], [4], [5]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Groups" title="Finding your people" label="Groups, classes and volunteering" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A noticeboard of groups, clubs, support groups and volunteering">
      <rect x="16" y="14" width="288" height="170" rx="10" fill={TINT} stroke={INK} strokeWidth="2.5" />
      {cards.map((lines, index) => { const x = 30 + (index % 3) * 92; const y = index < 3 ? 30 : 104; const on = lit.includes(index); return <g key={lines.join(" ")} transform={`rotate(${index % 2 ? 2 : -2} ${x + 38} ${y + 30})`} opacity={on ? 1 : 0.55}>
        <rect x={x} y={y} width="76" height="60" rx="5" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <circle cx={x + 38} cy={y + 6} r="4" fill={GOLD} />
        {lines.map((line, row) => <W key={line} x={x + 38} y={y + (lines.length === 1 ? 38 : 32 + row * 14)} size={10.5} fill={on ? WHITE : TEXT}>{line}</W>)}
      </g>; })}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LoneAnyHour(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Free, 24 hours, every day of the year", "A weekly call with a volunteer", "A volunteer who visits for a chat", "Struggling to cope? Call or text, free"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Befriending" title="A friendly voice, any hour" label="Befriending and phone services" credit={at === 3 ? crisisCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with a phone, and the friendly services they can reach">
      <Person x={58} y={150} scale={1.3} />
      {at !== 2 && <Phone x={90} y={110} lit={at === 3} />}
      {at === 0 && <>
        <circle cx="225" cy="84" r="48" fill={WHITE} stroke={GOLD} strokeWidth="5" />
        <Sun x={225} y={66} r={7} /><Moon x={222} y={106} r={10} />
        <W x={225} y={154} size={11.5}>0800 4 70 80 90</W><W x={225} y={170} size={10}>Aged 55 and over</W>
      </>}
      {at === 1 && <>
        <W x={224} y={54} size={10.5}>Same time each week</W>
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}><rect x={142 + index * 24} y="68" width="20" height="28" rx="5" fill={index === 2 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={152 + index * 24} y={112} size={10}>{day}</W></g>)}
        <W x={224} y={142} size={10.5}>About 30 minutes a call</W>
      </>}
      {at === 2 && <>
        <rect x="196" y="46" width="56" height="116" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="242" cy="106" r="3.5" fill={INK} />
        <Person x={282} y={160} scale={1.1} fill={SOFT} /><Cup x={148} y={150} />
      </>}
      {at === 3 && <Tags x={140} y={60} labels={["Samaritans 116 123", "Text SHOUT to 85258"]} lit={() => true} width={168} gap={44} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LoneVideoCall(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["See each other as you chat", "Calls, group chats and online groups", "Test call first, on strong Wi-Fi", "Guard your details; never send money", "Do not rely on screens alone"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Online" title="Closer on screen, safely" label="Staying in touch online" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tablet showing a video call, with Wi-Fi and a padlock for staying safe">
      <g opacity={at === 4 ? 0.35 : 1}>
        <rect x="64" y="16" width="192" height="152" rx="14" fill={INK} />
        <rect x="74" y="26" width="172" height="132" rx="6" fill={WHITE} />
        {(at === 0 || at === 4) && <><rect x="80" y="34" width="78" height="116" rx="5" fill={TINT} /><Person x={119} y={128} scale={1.2} /><rect x="162" y="34" width="78" height="116" rx="5" fill={TINT} /><Person x={201} y={128} scale={1.2} fill={SOFT} /></>}
        {at === 1 && [{ x: 84, y: 40, w: 110, f: TINT }, { x: 132, y: 74, w: 104, f: SOFT }, { x: 84, y: 108, w: 120, f: TINT }].map((bubble, index) => <g key={index}>
          <rect x={bubble.x} y={bubble.y} width={bubble.w} height="26" rx="12" fill={bubble.f} />
          <path d={`M${bubble.x + 14} ${bubble.y + 13} H${bubble.x + bubble.w - 20}`} stroke={WHITE} strokeWidth="4" strokeLinecap="round" />
        </g>)}
        {at === 2 && <>
          {[12, 24, 36].map(r => <path key={r} d={`M${160 - r * 0.8} ${88 - r * 0.6} A${r} ${r} 0 0 1 ${160 + r * 0.8} ${88 - r * 0.6}`} stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />)}
          <circle cx="160" cy="88" r="4.5" fill={INK} />
          <rect x="116" y="104" width="16" height="24" rx="8" fill={INK} /><path d="M110 120 a14 14 0 0 0 28 0 M124 134 V140" stroke={INK} strokeWidth="2.5" fill="none" />
          <rect x="180" y="108" width="26" height="20" rx="4" fill={INK} /><path d="M206 118 L218 110 V126 Z" fill={INK} />
          <W x={124} y={152} size={10}>Mic on</W><W x={199} y={152} size={10}>Camera on</W>
        </>}
        {at === 3 && <>
          <path d="M148 80 V66 a12 12 0 0 1 24 0 V80" stroke={INK} strokeWidth="5" fill="none" />
          <rect x="138" y="78" width="44" height="34" rx="6" fill={INK} /><circle cx="160" cy="93" r="4" fill={WHITE} />
          <W x={160} y={136} size={10.5}>Keep details private</W>
        </>}
      </g>
      {at === 4 && <><Person x={32} y={168} scale={1.1} /><Person x={288} y={168} scale={1.1} fill={SOFT} /><path d="M50 150 C120 196, 200 196, 270 150" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LoneWorldWidens(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Hospital stays and illness can isolate", "For some, harder than the illness", "Peer groups and weekly volunteer calls", "Ask a GP about social prescribing", "Even a walk to the shops can help"];
  const r = [46, 46, 78, 78, 86][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="After an illness" title="When illness shrinks your world" label="Loneliness after an illness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person's small circle widening to include other people and support">
      <circle cx="160" cy="104" r={r} fill={at < 2 ? TINT : "none"} stroke={at < 2 ? INK : SOFT} strokeWidth={at < 2 ? 3 : 2.5} strokeDasharray={at < 2 ? undefined : "7 8"} />
      {at === 1 && <Cloud x={160} y={44} s={22} opacity={0.85} />}
      <Person x={160} y={126} scale={1.2} />
      {at === 2 && <><Person x={92} y={136} scale={0.8} fill={SOFT} /><Person x={228} y={136} scale={0.8} fill={SOFT} /><Person x={160} y={52} scale={0.8} fill={SOFT} /><Phone x={238} y={60} /></>}
      {at === 3 && <><Box x={42} y={104} w={60} text="GP" lit /><Arrow d="M74 104 H96" head="M90 98 L96 104 L90 110" /><Box x={272} y={104} w={84} text="Link worker" lit /></>}
      {at === 4 && <><Arrow d="M182 104 C220 96, 250 80, 272 62" head="M262 60 L273 61 L271 72" /><Sun x={290} y={38} r={11} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LoneLinkPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Support that is not a medicine", "Listens, then helps make a plan", "Groups, gardening, money help and more", "Ask your GP, or refer yourself", "Or find activities yourself"];
  const right = ["Befriending", "Art class", "Gardening", "Money help"];
  const rightLit = at === 0 || at === 2 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Social prescribing" title="A prescription for connection" label="Social prescribing" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from the GP to a link worker, branching to local activities">
      <g opacity={at === 4 ? 0.3 : 1}>
        <path d="M68 104 H82" stroke={at === 3 ? GOLD : INK} strokeWidth="3" />
        {right.map((_, index) => <path key={index} d={`M178 104 C192 104, 190 ${40 + index * 42}, 204 ${40 + index * 42}`} stroke={at === 2 ? GOLD : SOFT} strokeWidth="2.5" fill="none" />)}
        <Box x={40} y={104} w={56} text="GP" lit={at === 3} />
        <Box x={130} y={104} w={96} text="Link worker" lit={at === 1} />
      </g>
      {right.map((label, index) => <Box key={label} x={256} y={40 + index * 42} w={104} text={label} lit={rightLit} />)}
      {at === 0 && <><Pill x={130} y={50} /><Cross x={130} y={50} s={12} /></>}
      {at === 1 && <Bubble x={128} y={50} text="What matters to you?" width={136} />}
      {at === 4 && <><Person x={44} y={168} scale={0.8} /><Arrow d="M62 160 C120 148, 160 150, 200 162" head="M192 156 L201 162 L192 168" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LoneStreetDoors(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Stop and talk, and give them time", "Shopping, lifts and small jobs", "No right way: a walk, a text, a call", "30 minutes a week can mean a lot", "Worried? Call their doctor or 111"];
  const me = [96, 160, 130, 250, 160][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Helping others" title="Small kindnesses that matter" label="Helping someone who is lonely" credit={at === 4 ? crisisCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A street of front doors, and a neighbour offering small kindnesses">
      {[0, 1, 2].map(index => { const x = 20 + index * 100; return <g key={index}>
        <path d={`M${x - 4} 82 L${x + 40} 52 L${x + 84} 82 Z`} fill={TINT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <rect x={x} y="82" width="80" height="68" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x={x + 28} y="112" width="24" height="38" rx="3" fill={SOFT} stroke={INK} strokeWidth="1.5" />
        <rect x={x + 8} y="92" width="14" height="14" rx="2" fill={TINT} stroke={INK} strokeWidth="1.5" />
      </g>; })}
      <path d="M8 150 H312" stroke={LINE} strokeWidth="3" />
      {(at === 0 || at === 2) && <Person x={at === 0 ? 140 : 190} y={172} scale={0.9} fill={SOFT} />}
      <Person x={me} y={172} scale={0.9} />
      {at === 0 && <Bubble x={110} y={28} text="Hello" width={70} />}
      {at === 1 && <><Box x={60} y={26} w={92} text="Shopping" /><Box x={160} y={26} w={92} text="A lift" /><Box x={260} y={26} w={92} text="Small jobs" /></>}
      {at === 2 && <Bubble x={160} y={28} text="How are you feeling?" width={150} />}
      {at === 3 && <><Phone x={110} y={30} lit /><W x={200} y={35} size={11}>30 minutes a week</W></>}
      {at === 4 && <><Box x={70} y={26} w={110} text="Their doctor" lit /><Box x={180} y={26} w={84} text="NHS 111" lit /><Box x={272} y={26} w={88} text="Samaritans" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function LoneTwoWeeks(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Low mood often lifts in days or weeks", "2 weeks or more could mean depression", "See a GP, or refer yourself", "Help is available right now"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Low mood" title="When lonely becomes low" label="When loneliness becomes low mood" credit={crisisCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two weeks of days, help from a GP, and where to get help right now">
      {at < 3 && <>
        {Array.from({ length: 14 }, (_, day) => <rect key={day} x={13 + day * 21} y="30" width="18" height="56" rx="5" fill={at === 0 ? (day < 4 ? SOFT : WHITE) : INK} opacity={at === 2 ? 0.35 : 1} stroke={INK} strokeWidth="1.5" />)}
        <W x={13} y={104} size={10} anchor="start">Day 1</W><W x={304} y={104} size={10} anchor="end">Day 14</W>
      </>}
      {at === 0 && <Sun x={160} y={146} r={13} />}
      {at === 1 && <>
        <path d="M13 22 V16 H304 V22" stroke={GOLD} strokeWidth="3" fill="none" /><W x={160} y={12} size={10.5}>2 weeks or more</W>
        <Box x={58} y={140} w={96} text="No enjoyment" size={10} /><Box x={160} y={140} w={92} text="Hopeless" size={10} /><Box x={262} y={140} w={92} text="Tired" size={10} />
      </>}
      {at === 2 && <><Box x={88} y={136} w={110} text="See a GP" lit /><Box x={230} y={136} w={140} text="Talking therapies" lit /><W x={160} y={174} size={10.5}>Most people make a full recovery</W></>}
      {at === 3 && <><Signposts boards={["999 or A&E", "NHS 111, mental health", "Samaritans 116 123", "Text SHOUT to 85258"]} /><Sun x={276} y={70} r={13} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Alcohol and your health =================================================================================

function AlcUnitBlocks(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["1 unit: 10ml of pure alcohol", "From 1 unit in a shot to 10 a bottle", "No more than 14 units a week", "No safe level: less is lower risk"];
  const drinks = [{ x: 46, name: "Single shot", units: "1 unit", n: 1 }, { x: 118, name: "Weaker pint", units: "About 2", n: 2 }, { x: 190, name: "Large wine", units: "3 units", n: 3 }, { x: 262, name: "Bottle", units: "10 units", n: 10 }];
  const week = [5, 0, 5, 0, 4, 0, 0];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Units" title="What is really in a drink" label="Units and guidelines" credit="Illustration: Rehyn. Units from the NHS guide."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Units shown as blocks: in common drinks, and across a week">
      {at === 0 && <>
        <rect x="50" y="46" width="70" height="70" rx="10" fill={INK} /><W x={85} y={86} size={13} fill={WHITE}>1 unit</W>
        <W x={150} y={70} size={13} anchor="start">10ml or 8g</W><W x={150} y={88} size={11} anchor="start">of pure alcohol</W>
        <Clock x={164} y={138} r={16} hand={1.6} />
        <W x={188} y={136} size={10.5} anchor="start">About an hour</W><W x={188} y={150} size={10} anchor="start">to process</W>
      </>}
      {at === 1 && drinks.map(drink => { const x = drink.x; return <g key={drink.name}>
        {drink.n === 1 && <Tumbler x={x} y={148} w={18} h={20} />}
        {drink.n === 2 && <Tumbler x={x} y={148} w={26} h={48} />}
        {drink.n === 3 && <Stemmed x={x} y={148} r={14} />}
        {drink.n === 10 && <path d={`M${x - 5} 56 V74 C${x - 5} 80, ${x - 13} 82, ${x - 13} 92 V148 H${x + 13} V92 C${x + 13} 82, ${x + 5} 80, ${x + 5} 74 V56 Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />}
        {Array.from({ length: drink.n }, (_, index) => <rect key={index} x={x + 19} y={140 - index * 10} width="8" height="8" rx="1.5" fill={INK} />)}
        <W x={x + 8} y={166} size={10}>{drink.name}</W><W x={x + 8} y={180} size={10}>{drink.units}</W>
      </g>; })}
      {at === 2 && <>
        <W x={160} y={24} size={11}>Spread over 3 or more days</W>
        <circle cx="114" cy="38" r="5" fill={GOLD} /><W x={124} y={42} size={10} anchor="start">Drink-free days</W>
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}>
          {Array.from({ length: week[index] }, (_, block) => <rect key={block} x={30 + index * 40} y={141 - block * 11} width="30" height="9" rx="2" fill={INK} />)}
          {week[index] === 0 && <circle cx={45 + index * 40} cy="144" r="5" fill={GOLD} />}
          <path d={`M${28 + index * 40} 152 H${62 + index * 40}`} stroke={LINE} strokeWidth="2" />
          <W x={45 + index * 40} y={170} size={10.5}>{day}</W>
        </g>)}
      </>}
      {at === 3 && <>
        <path d="M40 40 V160 H290" stroke={INK} strokeWidth="2.5" fill="none" />
        <W x={40} y={30} size={10} anchor="start">Risk</W><W x={290} y={178} size={10} anchor="end">Units</W>
        <path d="M40 148 C120 142, 200 104, 286 46" stroke={SOFT} strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="80" cy="145" r="7" fill={GOLD} />
        <W x={150} y={72} size={11}>Low risk, not safe</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AlcCalmDip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The relaxed feeling is short-lived", "Anxious and jittery the morning after", "Heavy drinking is linked to depression", "Less REM sleep, less refreshed", "Cutting down can improve mood"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood and sleep" title="The calm that doesn't last" label="Alcohol, mood and sleep" credit={at === 2 ? crisisCredit : "Illustration: Rehyn. A picture of the idea, not a measurement."}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Mood rising briefly after a drink, then dipping lower, and broken sleep">
      {at !== 3 && <>
        <path d="M20 100 H300" stroke={LINE} strokeWidth="3" strokeDasharray="6 6" />
        <W x={24} y={92} size={10} anchor="start">Mood</W>
      </>}
      {(at === 0 || at === 1 || at === 2) && <>
        <path d="M20 100 H60 C80 100, 88 66, 108 66 C130 66, 140 100, 160 122 C185 146, 240 140, 300 128" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M60 94 V106" stroke={TEXT} strokeWidth="2.5" /><W x={60} y={120} size={10}>A drink</W>
      </>}
      {at === 0 && <><W x={108} y={56} size={10.5}>Relaxed, briefly</W><W x={226} y={164} size={10.5}>Lower over time</W></>}
      {at === 1 && <><Box x={230} y={56} w={124} text="Fight or flight" lit /><Box x={230} y={90} w={124} text="Anxious, jittery" /></>}
      {at === 2 && <><Cloud x={210} y={56} s={26} /><Box x={110} y={170} w={190} text="Unsafe? Call 999 or go to A&E" lit /></>}
      {at === 3 && <>
        <Moon x={40} y={44} r={14} />
        {[[40, 110], [118, 170], [178, 236], [244, 290]].map(([from, to]) => <rect key={from} x={from} y="96" width={to - from} height="22" rx="6" fill={INK} />)}
        {[114, 174, 240].map(x => <path key={x} d={`M${x} 84 V90`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />)}
        <W x={40} y={142} size={10.5} anchor="start">Falls asleep</W><W x={290} y={142} size={10.5} anchor="end">Wakes, less REM</W>
      </>}
      {at === 4 && <><path d="M20 128 C90 126, 160 108, 290 76" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" /><Sun x={286} y={40} r={12} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AlcBodyMarkers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Over 14 units a week risks health", "At least seven types of cancer", "Raises blood pressure over time", "Early liver damage may not show", "Cutting down lowers many risks"];
  const marks = [{ x: 80, y: 38 }, { x: 80, y: 64 }, { x: 92, y: 92 }, { x: 68, y: 116 }, { x: 80, y: 152 }];
  const lit = [[], [1, 4], [2], [3], [0]][at];
  const labels = [[], ["Mouth and throat", "Breast", "Bowel"], ["Higher blood pressure", "Weaker heart muscle", "Irregular heartbeat"], ["Fat builds up", "Can recover if you stop", "Cirrhosis: usually lasting"], ["Memory and behaviour", "Pancreatitis", "Cut down, lower risk"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Long-term health" title="What drinking does over years" label="Alcohol and long-term health" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An outline of the body with the places alcohol can affect">
      <circle cx="80" cy="38" r="20" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M36 188 V100 C36 80, 54 70, 80 70 C106 70, 124 80, 124 100 V188" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d="M36 102 C28 122, 24 142, 24 164 M124 102 C132 122, 136 142, 136 164" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
      {marks.map((mark, index) => <circle key={index} cx={mark.x} cy={mark.y} r="8" fill={lit.includes(index) ? INK : SOFT} opacity={lit.includes(index) || at === 0 ? 1 : 0.45} stroke={lit.includes(index) ? GOLD : "none"} strokeWidth="3" />)}
      {at === 0 && <><W x={226} y={78} size={12}>Less alcohol,</W><W x={226} y={96} size={12}>lower risk</W><Arrow d="M226 110 V150" head="M218 142 L226 151 L234 142" /></>}
      {at > 0 && <Tags x={148} y={50} labels={labels} lit={index => index === 0} width={164} gap={40} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AlcSpectrum(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A spectrum, from mild to severe", "Signs: hard to cut down, cravings", "Withdrawal? Get help before stopping", "Often several things play a part", "A GP or local service can help"];
  const labels = [[], ["More than you meant", "Hard to cut down", "Cravings", "Needing more"], ["Anxiety", "Sweating", "Shaking", "Poor sleep"], ["Stress or loss", "Pressure from others", "Family genes", "Easing anxiety"], ["A GP", "Local alcohol service", "Questionnaire", "Tell the DVLA"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Dependence" title="When drinking gets hard to control" label="Alcohol dependence" credit={at === 2 ? withdrawalCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A scale from mild to severe dependence, with signs and help">
      <g opacity={at === 0 ? 1 : 0.5}>
        <rect x="30" y="34" width="90" height="14" rx="7" fill={LINE} /><rect x="116" y="34" width="90" height="14" fill={SOFT} /><rect x="200" y="34" width="90" height="14" rx="7" fill={INK} />
        <W x={30} y={68} size={10.5} anchor="start">Mild</W><W x={160} y={68} size={10.5}>Moderate</W><W x={290} y={68} size={10.5} anchor="end">Severe</W>
      </g>
      {at === 0 && <><W x={160} y={118} size={12}>Around 1 in 100 UK adults</W><W x={160} y={138} size={11}>are dependent on alcohol</W></>}
      {labels.map((label, index) => <Box key={label} x={index % 2 ? 234 : 86} y={index < 2 ? 104 : 140} w={140} text={label} lit={at === 2 || (at === 4 && index < 2)} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AlcWeekPlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Withdrawal signs? Get advice first", "Set a limit and keep a diary", "Smaller, weaker, with water between", "List your triggers, plan other things", "A blip? Next week is a fresh start"];
  const free = [0, 2, 4, 5];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Cutting down" title="Small steps that add up" label="Cutting down" credit={at === 0 ? withdrawalCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week planner with drink-free days, smaller drinks and triggers to plan around">
      {at === 0 && <>
        <Box x={160} y={52} w={230} h={30} text="Shaking, sweating, anxious?" />
        <Arrow d="M160 72 V104" head="M153 97 L160 105 L167 97" />
        <Box x={160} y={130} w={270} h={30} text="Get medical advice before stopping" lit />
      </>}
      {at === 1 && <>
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}>
          <rect x={22 + index * 40} y="44" width="36" height="56" rx="7" fill={WHITE} stroke={INK} strokeWidth="2" />
          {free.includes(index) ? <Tick x={40 + index * 40} y={74} /> : <path d={`M${30 + index * 40} 66 H${50 + index * 40} M${30 + index * 40} 78 H${46 + index * 40}`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />}
          <W x={40 + index * 40} y={118} size={10.5}>{day}</W>
        </g>)}
        <Tick x={112} y={146} /><W x={126} y={150} size={10.5} anchor="start">Drink-free days</W>
      </>}
      {at === 2 && <>
        <Stemmed x={60} y={136} r={20} /><Arrow d="M90 100 H118" head="M111 94 L118 100 L111 106" /><Stemmed x={146} y={136} r={12} />
        <Tumbler x={236} y={136} w={32} h={50} fill={TINT} />
        <W x={60} y={160} size={10.5}>Large</W><W x={146} y={160} size={10.5}>Small</W><W x={236} y={160} size={10.5}>Water in between</W>
      </>}
      {at === 3 && <>
        {["Stress", "Boredom", "End of the day", "Being offered one"].map((label, index) => <Box key={label} x={index % 2 ? 234 : 86} y={index < 2 ? 44 : 80} w={140} text={label} />)}
        <Arrow d="M160 100 V124" head="M153 117 L160 125 L167 117" />
        <Box x={160} y={146} w={200} text="A walk, a film, a hobby" lit />
      </>}
      {at === 4 && <>
        <W x={12} y={66} size={10} anchor="start">This week</W><W x={12} y={130} size={10} anchor="start">Next week</W>
        {[0, 1].map(row => Array.from({ length: 7 }, (_, index) => <g key={`${row}-${index}`}>
          <rect x={80 + index * 32} y={row ? 112 : 48} width="28" height="28" rx="6" fill={WHITE} stroke={row === 0 && index === 4 ? GOLD : INK} strokeWidth={row === 0 && index === 4 ? 3.5 : 2} />
          {(row === 1 ? free : [0, 2]).includes(index) && <Tick x={94 + index * 32} y={(row ? 112 : 48) + 15} s={0.8} />}
        </g>))}
        <Arrow d="M300 76 C312 90, 312 100, 300 112" head="M298 103 L299 113 L308 110" />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AlcSignposts(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Start with a GP, or refer yourself", "Counselling, CBT, groups, medicines", "Drinkline: free and confidential", "AA, SMART Recovery, longer-term help", "Dependent? Get advice before stopping"];
  const lit = [[0, 1], [1], [2], [3], [0, 1]][at];
  const spots = [{ x: 70, y: 40, w: 100, end: [118, 50] }, { x: 250, y: 40, w: 120, end: [192, 50] }, { x: 70, y: 166, w: 120, end: [128, 156] }, { x: 250, y: 166, w: 120, end: [192, 156] }];
  const labels = ["GP", "Local service", lit.includes(2) ? "0300 123 1110" : "Drinkline", lit.includes(3) ? "AA, SMART Recovery" : "Groups"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="Help is free, and closer than you think" label="Free support and services" credit={at === 4 ? withdrawalCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person in the middle, with paths to a GP, a local service, a helpline and groups">
      {spots.map((spot, index) => <path key={index} d={`M160 100 L${spot.end[0]} ${spot.end[1]}`} stroke={lit.includes(index) ? GOLD : SOFT} strokeWidth={lit.includes(index) ? 3 : 2} strokeDasharray={lit.includes(index) ? undefined : "5 6"} />)}
      <Person x={160} y={122} scale={1.1} />
      {spots.map((spot, index) => <Box key={index} x={spot.x} y={spot.y} w={spot.w} text={labels[index]} lit={lit.includes(index)} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AlcGentleStairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Dependent? Stopping suddenly is risky", "Signs you may need medicine", "Reduce slowly, safest with help", "Most feel better within a week", "Severe withdrawal: call 999 or A&E"];
  const fade = [1, 1, 0.6, 0.45, 0.32, 0.22, 0.14];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Stopping safely" title="Stopping safely, with help" label="Stopping safely" credit={withdrawalCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A sudden drop next to gentle steps down, and help along the way">
      {at === 0 && <>
        <W x={58} y={40} size={11}>Suddenly</W><W x={235} y={40} size={11}>Slowly, with help</W>
        <path d="M16 64 H100 V176 H16 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <Cross x={128} y={112} s={13} />
        <path d="M170 64 H196 V86 H222 V108 H248 V130 H274 V152 H300 V176 H170 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <Tick x={290} y={70} />
        <path d="M10 176 H310" stroke={LINE} strokeWidth="3" />
      </>}
      {at === 1 && <>
        <Box x={86} y={34} w={140} text="Anxious on waking" /><Box x={234} y={34} w={140} text="Sweats, mild tremor" /><Box x={160} y={68} w={150} text="Sick in the morning" />
        <path d="M140 118 V112 H290 V118" stroke={GOLD} strokeWidth="3" fill="none" /><W x={215} y={104} size={10.5}>Usually 3 to 7 days</W>
        <path d="M30 136 H290" stroke={INK} strokeWidth="3" /><path d="M30 128 V144 M140 128 V144" stroke={INK} strokeWidth="3" />
        <W x={30} y={160} size={10} anchor="start">Last drink</W><W x={140} y={160} size={10}>6 to 12 hours</W>
      </>}
      {at === 2 && <>
        <path d="M20 50 H70 V74 H120 V98 H170 V122 H220 V146 H270 V170 H300 V176 H20 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <Person x={96} y={63} scale={0.8} fill={SOFT} /><Person x={142} y={87} scale={0.8} />
        <Pill x={250} y={60} />
      </>}
      {at === 3 && <>
        <path d="M22 50 V44 H98 V50" stroke={GOLD} strokeWidth="3" fill="none" /><W x={22} y={36} size={10.5} anchor="start">First 48 hours: the hardest</W>
        {fade.map((opacity, index) => <g key={index}>
          <rect x={22 + index * 40} y="56" width="36" height="40" rx="7" fill={WHITE} stroke={INK} strokeWidth="2" />
          <rect x={22 + index * 40} y="56" width="36" height="40" rx="7" fill={INK} opacity={opacity} />
          <W x={40 + index * 40} y={81} size={10.5} fill={opacity > 0.5 ? WHITE : TEXT}>{index + 1}</W>
        </g>)}
        <W x={300} y={114} size={10} anchor="end">days</W>
        <Box x={56} y={146} w={96} text="Stay hydrated" size={10} /><Box x={160} y={146} w={96} text="Eat regularly" size={10} /><Box x={264} y={146} w={96} text="Ways to relax" size={10} />
      </>}
      {at === 4 && <>
        <Box x={160} y={48} w={170} h={34} text="999 or A&E" lit size={13} />
        <Box x={160} y={100} w={200} text="Do not drive yourself" />
        <Box x={160} y={140} w={200} text="Bring your medicines" />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AlcLeafletCheck(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Alcohol interacts with some medicines", "Some antibiotics: no alcohol at all", "Antidepressants: check before drinking", "Check painkillers and blood thinners", "Read the leaflet, ask, keep taking it"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Your medicines and a drink" label="Alcohol and your medicines" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A medicine packet and a plain glass, with what to check">
      <rect x="30" y="40" width="90" height="76" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      {[0, 1, 2, 3, 4, 5].map(index => <ellipse key={index} cx={index % 2 ? 98 : 52} cy={56 + Math.floor(index / 2) * 22} rx="11" ry="7" fill={SOFT} />)}
      {at < 4 ? <W x={160} y={92} size={28}>?</W> : <Tick x={162} y={82} s={1.4} />}
      {at < 4 && <Tumbler x={232} y={116} w={40} h={70} />}
      {at === 1 && <Cross x={232} y={81} s={20} />}
      {at === 4 && <>
        <rect x="200" y="40" width="50" height="72" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {[54, 66, 78, 90].map(y => <path key={y} d={`M208 ${y} H242`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
        <Person x={286} y={114} scale={0.9} fill={SOFT} />
      </>}
      {at === 0 && <><W x={160} y={152} size={11}>Less effective, or dangerous</W><W x={160} y={170} size={10.5}>Older adults: take extra care</W></>}
      {at === 1 && <><W x={160} y={152} size={10.5}>Metronidazole, and 48 hours after</W><W x={160} y={170} size={10.5}>Tinidazole, and 72 hours after</W></>}
      {at === 2 && <Box x={160} y={158} w={230} text="Sertraline: best not to drink" lit />}
      {at === 3 && <><W x={160} y={152} size={10.5}>Tramadol, gabapentin, codeine: avoid</W><W x={160} y={170} size={10}>On blood thinners, heavy drinking risks bleeding</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AlcTableTalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Pressure to drink is often subtle", "Decide your limit before you go", "Be firm; no need to explain", "Swap rather than add", "Going for drinks is not the only way"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Social life" title="Out with friends, on your terms" label="Social life and saying no" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Friends around a table, and one of them saying no thanks">
      {at < 4 && <>
        <Person x={100} y={134} fill={SOFT} /><Person x={160} y={134} /><Person x={220} y={134} fill={SOFT} />
        <rect x="50" y="136" width="220" height="12" rx="4" fill={INK} />
        <path d="M72 148 V180 M248 148 V180" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      </>}
      {at === 0 && <><Bubble x={92} y={42} text="Stay for one more" width={124} /><Bubble x={238} y={42} text="Top up?" width={80} /></>}
      {at === 1 && <><Box x={96} y={42} w={130} text="Decide your limit" lit /><Box x={236} y={42} w={110} text="Eat first" lit /></>}
      {at === 2 && <Bubble x={180} y={44} text="I'm just taking it easy tonight" width={206} />}
      {at === 3 && <Box x={160} y={44} w={170} text="Low or alcohol-free" lit />}
      {at === 4 && <>
        <Box x={60} y={40} w={92} text="A film" /><Box x={160} y={40} w={92} text="Coffee, walk" lit /><Box x={260} y={40} w={92} text="A class" />
        <path d="M10 166 C100 156, 220 156, 310 166" stroke={LINE} strokeWidth="4" fill="none" />
        <Person x={120} y={150} fill={SOFT} /><Person x={160} y={150} /><Person x={200} y={150} fill={SOFT} />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AlcSofaTalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["You're not alone in worrying", "Calm, sober, quiet: listen and ask", "They have to want to change", "Look after yourself too", "Support for families and children"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Family and friends" title="When someone you love drinks too much" label="Family and friends" credit={at === 2 ? withdrawalCredit : credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people talking calmly over tea on a sofa, and support for families">
      <rect x="60" y="88" width="200" height="50" rx="14" fill={SOFT} opacity=".5" />
      <Person x={120} y={130} scale={1.1} /><Person x={200} y={130} scale={1.1} fill={SOFT} />
      <rect x="40" y="108" width="24" height="48" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="256" y="108" width="24" height="48" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" />
      <rect x="56" y="132" width="208" height="24" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" />
      <rect x="124" y="180" width="72" height="7" rx="3" fill={INK} />
      <Cup x={146} y={167} /><Cup x={176} y={167} />
      {at === 0 && <><Box x={160} y={28} w={170} text="Secretive, tired, low?" /><W x={160} y={66} size={10.5}>Almost 3 in 10 adults have worried</W></>}
      {at === 1 && <Bubble x={150} y={44} text="I've been worried" width={130} />}
      {at === 2 && <Box x={160} y={36} w={276} text="Shaking first thing? Medical help first" lit />}
      {at === 3 && <><Box x={160} y={36} w={230} text="Decide what help you'll give" lit /><Sun x={292} y={30} r={9} /></>}
      {at === 4 && ["Al-Anon", "Adfam", "Drinkline", "Nacoa"].map((label, index) => <Box key={label} x={index % 2 ? 234 : 86} y={index < 2 ? 24 : 58} w={120} text={label} lit />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AlcRecoveryRoad(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Ask your doctor if and when to drink", "Cutting down lowers stroke risk", "It can make fatigue and falls worse", "Liver disease? Get help to stop safely", "Never stop a medicine without advice"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="After an illness" title="Drinking after a stroke or illness" label="Alcohol after an illness" credit={at === 3 ? withdrawalCredit : "Illustration: Rehyn. Never stop a medicine without your doctor."}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A road of recovery, with advice at each stage">
      <path d="M20 168 H300" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {[40, 100, 160, 220, 280].map((x, index) => <circle key={x} cx={x} cy="168" r={index === at ? 9 : 6} fill={index === at ? GOLD : WHITE} stroke={index === at ? WHITE : INK} strokeWidth={index === at ? 3 : 2} />)}
      {at === 0 && <><Person x={90} y={128} scale={1.2} fill={SOFT} /><Person x={220} y={128} scale={1.2} /><Bubble x={252} y={40} text="Can I drink again?" width={130} /></>}
      {at === 1 && <><Box x={90} y={50} w={140} text="Blood pressure" /><Box x={240} y={50} w={120} text="Cholesterol" /><Box x={160} y={92} w={170} text="Atrial fibrillation" /><Arrow d="M160 112 V140" head="M153 133 L160 141 L167 133" /></>}
      {at === 2 && ["Fatigue", "Balance", "Sleep", "Falls"].map((label, index) => <Box key={label} x={index % 2 ? 230 : 90} y={index < 2 ? 52 : 96} w={120} text={label} />)}
      {at === 3 && <><Box x={160} y={52} w={230} text="Cancer treatment: ask your team" /><Box x={160} y={98} w={270} text="Liver disease: stop with medical help" lit /></>}
      {at === 4 && <><Pill x={96} y={60} /><Box x={206} y={60} w={150} text="Keep taking it" lit /><Box x={160} y={108} w={230} text="Ask your pharmacist or GP" /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function AlcHelpTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Severe withdrawal: 999 or A&E", "Alcohol poisoning: call 999", "Liver warning signs: 999 or A&E", "You will not be wasting anyone's time", "Don't stop suddenly without advice"];
  const lit = [[0], [0], [0], [0, 1, 2, 3], [4]][at];
  const sub = ["Severe withdrawal: do not drive yourself", "Stay with them; no more alcohol", "Vomiting blood, or black, sticky poo", "If you cannot keep yourself safe", "For emergencies"][at];
  const tiles = [{ x: 20, y: 76, t: "NHS 111", d: "mental health option" }, { x: 164, y: 76, t: "Samaritans", d: "116 123, any time" }, { x: 20, y: 126, t: "Shout", d: "text SHOUT to 85258" }, { x: 164, y: 126, t: "A GP", d: "or alcohol service" }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Urgent help" title="When to call for help now" label="When to get urgent help" credit={crisisCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Tiles for 999, NHS 111, Samaritans, Shout and a GP or alcohol service">
      <g opacity={lit.includes(0) ? 1 : 0.4}>
        <rect x="20" y="16" width="280" height="50" rx="10" fill={lit.includes(0) ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={160} y={37} size={13} fill={lit.includes(0) ? WHITE : TEXT}>999 or A&amp;E</W>
        <W x={160} y={55} size={10} fill={lit.includes(0) ? WHITE : TEXT}>{sub}</W>
      </g>
      {tiles.map((tile, index) => { const on = lit.includes(index + 1); return <g key={tile.t} opacity={on ? 1 : 0.4}>
        <rect x={tile.x} y={tile.y} width="136" height="42" rx="10" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={tile.x + 68} y={tile.y + 18} size={11.5} fill={on ? WHITE : TEXT}>{tile.t}</W>
        <W x={tile.x + 68} y={tile.y + 33} size={9.5} fill={on ? WHITE : TEXT}>{tile.d}</W>
      </g>; })}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function ReachPieceView({ piece, ...props }: { piece: ReachPiece } & PieceProps) {
  switch (piece) {
    case "lone-alone-together": return <LoneAloneTogether {...props} />;
    case "lone-life-changes": return <LoneLifeChanges {...props} />;
    case "lone-ripple": return <LoneRipple {...props} />;
    case "lone-doorstep": return <LoneDoorstep {...props} />;
    case "lone-stair-steps": return <LoneStairSteps {...props} />;
    case "lone-noticeboard": return <LoneNoticeboard {...props} />;
    case "lone-any-hour": return <LoneAnyHour {...props} />;
    case "lone-video-call": return <LoneVideoCall {...props} />;
    case "lone-world-widens": return <LoneWorldWidens {...props} />;
    case "lone-link-path": return <LoneLinkPath {...props} />;
    case "lone-street-doors": return <LoneStreetDoors {...props} />;
    case "lone-two-weeks": return <LoneTwoWeeks {...props} />;
    case "alc-unit-blocks": return <AlcUnitBlocks {...props} />;
    case "alc-calm-dip": return <AlcCalmDip {...props} />;
    case "alc-body-markers": return <AlcBodyMarkers {...props} />;
    case "alc-spectrum": return <AlcSpectrum {...props} />;
    case "alc-week-plan": return <AlcWeekPlan {...props} />;
    case "alc-signposts": return <AlcSignposts {...props} />;
    case "alc-gentle-stairs": return <AlcGentleStairs {...props} />;
    case "alc-leaflet-check": return <AlcLeafletCheck {...props} />;
    case "alc-table-talk": return <AlcTableTalk {...props} />;
    case "alc-sofa-talk": return <AlcSofaTalk {...props} />;
    case "alc-recovery-road": return <AlcRecoveryRoad {...props} />;
    case "alc-help-tiles": return <AlcHelpTiles {...props} />;
  }
}
