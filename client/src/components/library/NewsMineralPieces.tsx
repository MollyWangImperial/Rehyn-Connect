import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { MINERAL_PIECES, type MineralPiece } from "@/content/mineral-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, GOLD, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";

// The Gout and Vitamin D deficiency pages' own pieces (content/mineral-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Diabetes & metabolism pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body or results.

export const isMineralPiece = (piece: NewsPiece): piece is MineralPiece => (MINERAL_PIECES as readonly string[]).includes(piece);

const chart = "Illustration: Rehyn. A picture of the idea, not anyone's own result.";

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5, dashed = false }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number; dashed?: boolean }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" strokeDasharray={dashed ? "5 4" : undefined} /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 205, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
/** One needle-shaped urate crystal. */
const Needle = ({ x, y, a, l = 10, color = INK }: { x: number; y: number; a: number; l?: number; color?: string }) => {
  const dx = Math.cos(a * Math.PI / 180) * l / 2, dy = Math.sin(a * Math.PI / 180) * l / 2;
  return <path d={`M${(x - dx).toFixed(1)} ${(y - dy).toFixed(1)} L${(x + dx).toFixed(1)} ${(y + dy).toFixed(1)}`} stroke={color} strokeWidth="2.2" strokeLinecap="round" />;
};
/** A kidney, centred on (x, y). */
const Kidney = ({ x, y, s = 1, fill = WHITE, stroke = INK }: { x: number; y: number; s?: number; fill?: string; stroke?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M-4 -32 C20 -36 32 -12 28 8 C25 28 6 36 -9 29 C-19 24 -10 11 -14 2 C-18 -7 -30 -26 -4 -32 Z" fill={fill} stroke={stroke} strokeWidth={3 / s} strokeLinejoin="round" />;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${(x + (r + 4) * Math.cos(a)).toFixed(1)} ${(y + (r + 4) * Math.sin(a)).toFixed(1)} L${(x + (r + 9) * Math.cos(a)).toFixed(1)} ${(y + (r + 9) * Math.sin(a)).toFixed(1)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
/** A drop of blood, for a blood test. */
const Drop = ({ x, y, s = 1, fill = INK }: { x: number; y: number; s?: number; fill?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M0 -10 C6 -2 8 2 8 5 A8 8 0 0 1 -8 5 C-8 2 -6 -2 0 -10 Z" fill={fill} />;
/** A small bone, centred on (x, y). */
const Bone = ({ x, y, s = 1, fill = WHITE }: { x: number; y: number; s?: number; fill?: string }) =>
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    {[[-14, -5], [-14, 5], [14, -5], [14, 5]].map(([cx, cy]) => <circle key={`${cx} ${cy}`} cx={cx} cy={cy} r="6" fill={fill} stroke={INK} strokeWidth={2 / s} />)}
    <rect x="-15" y="-4.5" width="30" height="9" fill={fill} />
    <path d="M-14 -4.5 H14 M-14 4.5 H14" stroke={INK} strokeWidth={2 / s} />
  </g>;
/** An annular sector of a ring around (cx, cy), from angle a0 to a1 (radians). */
const sector = (cx: number, cy: number, r0: number, r1: number, a0: number, a1: number) => {
  const p = (r: number, a: number) => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
  return `M${p(r1, a0)} A${r1} ${r1} 0 0 1 ${p(r1, a1)} L${p(r0, a1)} A${r0} ${r0} 0 0 0 ${p(r0, a0)} Z`;
};

// ==== Gout ==================================================================================================

function GoutCrystalJoint(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const inCartilage = [[76, 83, 20], [98, 85, -25], [110, 82, 40], [80, 107, -30], [102, 108, 25]];
  const spilled = [[70, 96, 10], [84, 95, -35], [98, 97, 30], [112, 96, -15]];
  const crystals = at === 1 || at === 2 || at === 3 ? [...inCartilage.slice(0, 2), ...spilled] : inCartilage;
  const tags = [["Urate in the blood", "Levels stay high", "Crystals form"], ["Crystals spill out", "Rub the lining", "Pain and swelling"], ["Hot, red, swollen", "Even a sheet hurts", "Worst in 12 to 24 hours"], ["Feet and ankles", "Hands and wrists", "Elbows and knees"], ["Can come back", "Months or years later", "Very treatable"]][at];
  const caps = ["Too much urate can form crystals", "Sharp crystals rub the joint lining", "Often the big toe, often at night", "Cooler joints at the ends of limbs", "Lasts 1 to 2 weeks if untreated"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Sharp crystals, sudden pain, big toe" label="What gout is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A joint close up, with urate crystals forming in the cartilage and spilling into the joint">
      <W x={90} y={18} size={10}>A joint, close up</W>
      <ellipse cx="90" cy="96" rx="60" ry="38" fill={TINT} stroke={at === 1 || at === 2 ? GOLD : SOFT} strokeWidth={at === 1 || at === 2 ? 4 : 2.5} className={!still && at === 1 ? "lib-why-pulse" : undefined} />
      <path d="M62 28 V80 Q62 90 90 90 Q118 90 118 80 V28 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M62 166 V112 Q62 102 90 102 Q118 102 118 112 V166 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M65 81 Q67 87 90 87 Q113 87 115 81 M65 111 Q67 105 90 105 Q113 105 115 111" stroke={SOFT} strokeWidth="6" fill="none" strokeLinecap="round" />
      {crystals.map(([x, y, a]) => <Needle key={`${x} ${y}`} x={x} y={y} a={a} />)}
      {tags.map((tag, index) => <Box key={tag} x={246} y={56 + index * 40} w={128} h={28} size={10} text={tag} lit={index === 0 && at !== 4} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GoutUratePie(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Three-quarters made by the body", "Genes can slow how kidneys clear it", "About 4 times more common in men", "Weight, medicines and other conditions", "High temperature, injury, dehydration"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Causes" title="Mostly made by the body, not eaten" label="Why gout happens" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Where urate comes from, three-quarters from the body and a quarter from food, and what raises it">
      <path d="M86 92 L142 92 A56 56 0 1 1 86 36 Z" fill={INK} />
      <path d="M86 92 L86 36 A56 56 0 0 1 142 92 Z" fill={SOFT} />
      <circle cx="86" cy="92" r="56" fill="none" stroke={WHITE} strokeWidth="2" />
      <W x={68} y={118} size={11} fill={WHITE}>Body</W>
      <W x={110} y={72} size={10}>Food</W>
      <W x={86} y={170} size={10}>Where urate comes from</W>
      {at === 0 && <><Kidney x={240} y={76} /><Arrow d="M240 116 V140" head="M233 133 L240 140 L247 133" /><W x={240} y={160} size={10.5}>Kidneys clear urate</W></>}
      {at === 1 && <><Person x={204} y={110} scale={0.9} /><Person x={240} y={110} scale={0.9} /><Person x={274} y={116} scale={0.65} fill={SOFT} /><W x={240} y={150} size={10.5}>Runs in families</W></>}
      {at === 2 && <>{[192, 214, 236, 258].map(x => <Person key={x} x={x} y={110} scale={0.6} />)}<Person x={292} y={110} scale={0.6} fill={SOFT} /><W x={225} y={140} size={10.5}>Men</W><W x={292} y={140} size={10.5}>Women</W></>}
      {at === 3 && ["Extra weight", "Water tablets", "Linked conditions"].map((label, index) => <Box key={label} x={240} y={58 + index * 36} w={130} text={label} lit={index === 1} />)}
      {at === 4 && ["High temperature", "Knock or injury", "Big meal, alcohol", "Dehydration"].map((label, index) => <Box key={label} x={240} y={46 + index * 34} w={130} text={label} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GoutTestTrio(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [0, 1, 1, 2, -1][at];
  const notes = ["Asks about diet and alcohol", "Most with high urate never get gout", "360 micromol/L or more", "Or a scan, if still unclear", "Could be an infection in the joint"];
  const caps = ["Often clear when symptoms are typical", "It supports, but cannot confirm alone", "360 or more, with symptoms, confirms", "Joint fluid checked for crystals", "Urgent GP or NHS 111 if getting worse"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Diagnosis" title="A blood test helps, crystals confirm" label="How gout is diagnosed" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three steps: the GP, a blood test and joint fluid under a microscope">
      <g opacity={lit === 0 ? 1 : 0.35}><Person x={60} y={116} scale={1.2} /><W x={60} y={152} size={10.5}>GP</W></g>
      <g opacity={lit === 1 ? 1 : 0.35}>
        <rect x="150" y="40" width="20" height="82" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
        <rect x="153" y="78" width="14" height="41" rx="7" fill={INK} />
        <rect x="145" y="33" width="30" height="10" rx="3" fill={INK} />
        {at === 2 && <path d="M176 78 H190" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />}
        <W x={160} y={152} size={10.5}>Blood test</W>
      </g>
      <g opacity={lit === 2 ? 1 : 0.35}>
        <circle cx="260" cy="82" r="38" fill={WHITE} stroke={INK} strokeWidth="3" />
        {[[246, 70, 30], [266, 66, -40], [252, 92, -20], [274, 88, 50], [262, 104, 10], [242, 84, 70]].map(([x, y, a]) => <Needle key={`${x} ${y}`} x={x} y={y} a={a} l={13} />)}
        <W x={260} y={152} size={10.5}>Joint fluid</W>
      </g>
      <Box x={160} y={175} w={Math.max(150, notes[at].length * 6.3 + 24)} text={notes[at]} lit={at === 4} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GoutBodySpots(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tophi = [[113, 36], [76, 86], [124, 86], [70, 114], [130, 114], [76, 176], [124, 176]];
  const joints = [[90, 142], [110, 142], [88, 172]];
  const notes = ["Other joints can be affected", "White crystal lumps", "Daily pain with use", "Around 14%", "Tophi often gradually reduce"];
  const caps = ["Untreated, attacks come more often", "Firm lumps of crystals under the skin", "Can damage cartilage and bone", "Kidney stones in around 14% with gout", "Lowering urate stops most of it"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Complications" title="Lumps, stones and damage that can be stopped" label="Complications" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with small lumps called tophi, a joint and a kidney, and how treatment stops them">
      <g stroke={SOFT} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M100 52 V106" /><path d="M100 60 L76 86 L70 112 M100 60 L124 86 L130 112" /><path d="M100 106 L90 142 L88 172 L76 176 M100 106 L110 142 L112 172 L124 176" />
      </g>
      <circle cx="100" cy="36" r="13" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <g opacity={at === 4 ? 0.25 : 1}>
        {tophi.map(([x, y]) => <circle key={`${x} ${y}`} cx={x} cy={y} r={at === 1 ? 6 : 4.5} fill={at === 1 ? WHITE : INK} stroke={INK} strokeWidth="2" />)}
        {at === 2 && joints.map(([x, y]) => <circle key={`${x} ${y}`} cx={x} cy={y} r="9" fill="none" stroke={GOLD} strokeWidth="3.5" />)}
      </g>
      <g opacity={at === 3 ? 1 : 0.45}><Kidney x={238} y={80} s={1.05} fill={at === 3 ? TINT : WHITE} />{at === 3 && <path d="M240 88 l6 -5 l6 4 l-2 7 l-7 1 Z" fill={INK} />}</g>
      <W x={238} y={136} size={10.5}>Kidneys</W>
      <W x={238} y={166} size={10.5}>{notes[at]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GoutFirstSign(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const cards = ["NSAID", "Colchicine", "Steroids"];
  const litCard = (index: number) => at === 0 || at === index + 2;
  const notes = ["Many learn what works best for them", "A supply at home, if your doctor agrees", "Naproxen, diclofenac or etoricoxib", "No grapefruit juice with it", "Keep taking urate-lowering medicine"];
  const caps = ["An NSAID, colchicine or steroids", "Start at the first sign of an attack", "Ease pain; not suitable for everyone", "Calms inflammation; keep to the dose", "A short course, or an injection"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="An attack" title="Act fast at the first twinge" label="Treating an attack" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from the first sign of an attack, and three medicines that treat it">
      <path d="M40 48 H290" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
      <circle cx="40" cy="48" r={at === 1 ? 9 : 6} fill={at === 1 ? GOLD : INK} />
      <W x={34} y={30} size={10.5} anchor="start">First sign</W>
      {at === 1 && <><path d="M40 60 V66 H220 V60" stroke={GOLD} strokeWidth="3" fill="none" /><W x={290} y={30} size={10.5} anchor="end">Working within 2 days</W></>}
      {cards.map((card, index) => <g key={card} transform={`translate(${22 + index * 96} 80)`}>
        <rect width="84" height="68" rx="10" fill={litCard(index) ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <Pill x={42} y={24} fill={litCard(index) ? SOFT : INK} />
        <W x={42} y={54} size={11} fill={litCard(index) ? WHITE : TEXT}>{card}</W>
      </g>)}
      <W x={160} y={174} size={10.5}>{notes[at]}</W>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GoutCrystalsShrink(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots = [[-8, -6, 30], [6, -9, -40], [-2, 2, 70], [9, 4, 10], [-10, 8, -20], [3, 11, 45], [0, -13, 0]];
  const counts = [7, 5, 4, 2, 0];
  const caps = ["Offered for frequent attacks or tophi", "Less urate made; crystals dissolve", "Start low, build up slowly", "Early attacks: a sign it is working", "Rash? Stop, and speak to a doctor now"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Long-term treatment" title="Dissolving the crystals, one day at a time" label="Allopurinol and long-term treatment" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Crystals in a joint shrinking over time as a daily medicine lowers urate">
      <g opacity={at === 0 || at === 4 ? 0.4 : 1}>
        {counts.map((count, frame) => <g key={frame} transform={`translate(${40 + frame * 60} 50)`}>
          <circle r="22" fill={WHITE} stroke={INK} strokeWidth="2.5" />
          {spots.slice(0, count).map(([x, y, a]) => <Needle key={`${x} ${y}`} x={x} y={y} a={a} l={9} />)}
        </g>)}
      </g>
      {at === 3 && [100, 160].map(x => <path key={x} d={`M${x - 4} 12 L${x + 2} 19 L${x - 2} 21 L${x + 4} 28`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />)}
      {at === 0 && ["Frequent attacks", "Tophi", "Kidney disease", "Water tablets"].map((label, index) => <Box key={label} x={index % 2 ? 232 : 88} y={index < 2 ? 116 : 150} w={128} text={label} lit={index === 0} />)}
      {at === 1 && <><Arrow d="M30 88 H290" head="M282 81 L290 88 L282 95" /><W x={160} y={120} size={11}>Months or years to clear</W><W x={160} y={144} size={10.5}>Then no more attacks or tophi</W></>}
      {at === 2 && <><path d="M40 150 H90 V136 H140 V122 H190 V108 H240 V94 H280" stroke={GOLD} strokeWidth="4" fill="none" strokeLinejoin="round" /><W x={60} y={166} size={10}>Start low</W><W x={185} y={166} size={10}>2 to 4 weeks after an attack</W></>}
      {at === 3 && <><path d="M18 80 V86 H182 V80" stroke={GOLD} strokeWidth="3" fill="none" /><W x={100} y={102} size={10.5}>First six months</W><W x={160} y={136} size={10.5}>Colchicine or an NSAID may help</W><W x={160} y={160} size={10.5}>Keep taking it unless told to stop</W></>}
      {at === 4 && <><Pill x={100} y={120} /><Pill x={220} y={120} fill={SOFT} /><W x={100} y={148} size={11}>Allopurinol</W><W x={220} y={148} size={11}>Febuxostat</W><W x={84} y={170} size={9.5}>First with heart disease</W><W x={236} y={170} size={9.5}>Broken down by the liver</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GoutUrateLine(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const points = at === 3 ? [[60, 44], [95, 56], [130, 64], [165, 66], [200, 66]] : [[60, 44], [95, 58], [130, 72], [165, 90], [200, 98], [235, 99], [270, 99]];
  const notes = ["Different people need different doses", "micromol per litre", "", "Ask about a higher dose"];
  const caps = ["No single dose: aim for the target", "Below 360; below 300 for some", "Monthly tests, then once a year", "Still attacks? Ask about your urate"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Blood tests" title="Below the line, the crystals dissolve" label="Uric acid targets" credit="Illustration: Rehyn. Targets as NICE sets them; not anyone's own result."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Urate falling with each blood test until it is below the 360 target line">
      <W x={40} y={22} size={10} anchor="start">Urate</W>
      <path d="M40 30 V150 H300" stroke={LINE} strokeWidth="3" fill="none" />
      <path d="M40 82 H268" stroke={INK} strokeWidth={at === 1 ? 3.5 : 2.5} strokeDasharray="7 5" opacity={at === 1 || at === 0 ? 1 : 0.6} />
      <path d="M40 116 H268" stroke={SOFT} strokeWidth="2.5" strokeDasharray="4 5" opacity={at === 1 ? 1 : 0.6} />
      <W x={300} y={86} size={11} anchor="end">360</W><W x={300} y={120} size={11} anchor="end">300</W>
      <path d={points.map(([x, y], index) => `${index ? "L" : "M"}${x} ${y}`).join(" ")} stroke={SOFT} strokeWidth="2.5" fill="none" />
      {points.map(([x, y], index) => <circle key={x} cx={x} cy={y} r="6" fill={at === 2 ? GOLD : at === 3 && index === points.length - 1 ? GOLD : INK} stroke={WHITE} strokeWidth="2" />)}
      {at === 1 && <W x={160} y={138} size={10}>300: for some, with tophi</W>}
      {at === 2 && <><W x={130} y={168} size={10.5}>Each month</W><W x={252} y={168} size={10.5}>Then yearly</W></>}
      {notes[at] && <W x={160} y={172} size={10.5}>{notes[at]}</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GoutRaisedFoot(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Wrapped ice, up to 20 minutes", "Rest and raise it; no pressure", "Keep the bedclothes off the joint", "Water, and medicine as soon as you can"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Self-help" title="Ice, rest, raise: small comforts" label="Rest, ice and raising the joint" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A foot raised on a cushion, with an ice pack, a bed cage and a glass of water">
      {at === 2 && <><path d="M52 134 V62 Q52 14 120 14 H160 Q228 14 228 62 V134" stroke={SOFT} strokeWidth="4" strokeDasharray="6 5" fill="none" /><path d="M60 134 V64 Q60 22 120 22 H160 Q220 22 220 64 V134" stroke={INK} strokeWidth="3" fill="none" /><Moon x={272} y={44} /><W x={272} y={112} size={10.5}>Bed cage</W></>}
      <ellipse cx="110" cy="136" rx="84" ry="12" fill={at === 1 ? INK : SOFT} />
      <path d="M20 96 H140 Q150 96 152 86 L156 52 Q158 42 168 42 Q180 42 180 54 L178 110 Q176 124 160 124 H20 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="168" cy="56" r="9" fill={GOLD} opacity=".55" />
      {at === 0 && <><rect x="182" y="40" width="30" height="26" rx="6" fill={TINT} stroke={INK} strokeWidth="2" /><path d="M187 48 H207 M187 56 H207" stroke={SOFT} strokeWidth="2" /><W x={262} y={92} size={10.5}>In a towel</W></>}
      {at === 1 && <><Arrow d="M250 140 V86" head="M242 94 L250 86 L258 94" /><W x={250} y={160} size={10.5}>Raise the limb</W></>}
      {at === 3 && <>
        <Box x={160} y={22} w={238} text="Getting worse? Urgent GP or NHS 111" lit />
        <path d="M224 70 L228 130 H250 L254 70 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M226 90 L229 127 H249 L252 90 Z" fill={SOFT} />
        <Pill x={284} y={112} rotate={-20} />
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GoutPlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const foods = ["Eggs", "Pulses", "Dairy", "Fruit"];
  const drink = [-1, -1, 1, 0, 2][at];
  const notes: string[][] = [["Most also need", "medicine"], ["Red meat, offal,", "seafood: in moderation"], ["Keep eating fruit"], ["14 units is about", "6 pints of beer"], ["At least 2 litres", "after kidney stones"]];
  const caps = ["Diet alone has only a small effect", "Nothing banned; some in moderation", "Fewer sugary drinks; keep fruit", "No more than 14 units, spread out", "Plenty of fluids, to avoid dehydration"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Food and drink" title="A balanced plate, not a banned list" label="Food, drink and gout" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balanced plate, and drinks: beer, a sugary drink and water">
      <circle cx="96" cy="94" r="64" fill={WHITE} stroke={INK} strokeWidth="3" />
      <circle cx="96" cy="94" r="52" fill="none" stroke={LINE} strokeWidth="2" />
      {foods.map((food, index) => <Box key={food} x={index % 2 ? 124 : 68} y={index < 2 ? 78 : 110} w={52} h={24} size={10} text={food} lit={(at === 1 && index < 3) || (at === 2 && index === 3)} />)}
      {at === 0 && <Pill x={250} y={70} />}
      {at === 1 && <><circle cx="250" cy="72" r="30" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M234 66 Q250 54 266 66 Q262 84 250 86 Q236 84 234 66 Z" fill={SOFT} /></>}
      {at >= 2 && <g>
        <g opacity={drink === 0 ? 1 : 0.35}><path d="M208 46 L211 100 H229 L232 46 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M209 58 L211 98 H229 L231 58 Z" fill={SOFT} /><W x={220} y={118} size={10}>Beer</W></g>
        <g opacity={drink === 1 ? 1 : 0.35}><rect x="241" y="52" width="22" height="48" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="241" y="66" width="22" height="16" fill={SOFT} /><W x={252} y={118} size={10}>Sugary</W></g>
        <g opacity={drink === 2 ? 1 : 0.35}><path d="M276 62 L279 100 H295 L298 62 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M278 74 L280 98 H294 L296 74 Z" fill={TINT} stroke={SOFT} strokeWidth="1.5" /><W x={287} y={118} size={10}>Water</W></g>
      </g>}
      {notes[at].map((line, index) => <W key={line} x={252} y={(at < 2 ? 128 : 150) + index * 15} size={10}>{line}</W>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GoutGentlePath(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const steps = Array.from({ length: 7 }, (_, index) => [40 + index * 40, 160 - index * 13.3 + (index % 2 ? -5 : 5)]);
  const caps = ["Extra weight can mean more urate", "Gradual change; avoid crash diets", "A little is better than none", "Rest until the swelling goes down"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Weight and activity" title="Gentle steps beat crash diets" label="Weight and activity" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A gentle path of footsteps, compared with a crossed-out crash diet">
      <path d="M30 168 L290 82" stroke={LINE} strokeWidth="16" strokeLinecap="round" opacity=".7" />
      {steps.map(([x, y], index) => <ellipse key={index} cx={x} cy={y} rx="5" ry="8" transform={`rotate(70 ${x} ${y})`} fill={at === 3 && index > 3 ? SOFT : INK} opacity={at === 3 && index > 3 ? 0.5 : 1} />)}
      {at === 0 && ["Lower urate", "Fewer attacks", "Less strain on knees"].map((label, index) => <Box key={label} x={84} y={36 + index * 32} w={130} text={label} lit={index === 0} />)}
      {at === 1 && <><path d="M150 100 L165 34 L178 70 L196 22" stroke={SOFT} strokeWidth="4" fill="none" strokeLinejoin="round" /><Cross x={173} y={60} s={16} /><W x={240} y={30} size={10.5}>Crash diet</W><W x={268} y={64} size={10.5}>Gradual</W></>}
      {at === 2 && <>{[1, 3, 5].map(index => <Person key={index} x={steps[index][0]} y={steps[index][1] - 22} scale={0.75} />)}<W x={110} y={40} size={10.5}>Dancing, walking, tennis</W></>}
      {at === 3 && <><circle cx="60" cy="52" r="18" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="52" y="43" width="5" height="18" rx="1.5" fill={INK} /><rect x="63" y="43" width="5" height="18" rx="1.5" fill={INK} /><W x={92} y={56} size={10.5} anchor="start">Begin again when it settles</W><W x={205} y={176} size={10.5}>Aim for 150 minutes a week</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GoutLinkedChecks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const nodes = [{ x: 60, y: 54, t: "Heart" }, { x: 260, y: 54, t: "Kidneys" }, { x: 60, y: 140, t: "Medicines" }, { x: 260, y: 140, t: "Check-up" }];
  const lit = (index: number) => at === 0 || at === index + 1;
  const caps = ["Often linked with other conditions", "Long-term, arteries can narrow", "About 25% also have kidney disease", "Some water tablets raise the risk", "A check-up once an attack settles"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Heart and kidneys" title="One check-up for joints, heart and kidneys" label="Gout, the heart and the kidneys" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Gout in the middle, linked to the heart, the kidneys, medicines and a check-up">
      {nodes.map((node, index) => <path key={node.t} d={`M160 96 L${node.x} ${node.y}`} stroke={lit(index) && at !== 0 ? GOLD : LINE} strokeWidth="3" />)}
      <circle cx="160" cy="96" r="28" fill={INK} /><W x={160} y={100} size={12} fill={WHITE}>Gout</W>
      {nodes.map((node, index) => <g key={node.t} opacity={lit(index) ? 1 : 0.4}>
        <circle cx={node.x} cy={node.y} r="26" fill={WHITE} stroke={INK} strokeWidth={lit(index) ? 3 : 2} />
        <W x={node.x} y={node.y + 44} size={10.5}>{node.t}</W>
      </g>)}
      <g opacity={lit(0) ? 1 : 0.4}><HeartShape x={60} y={56} size={30} fill={TINT} width={2.5} /></g>
      <g opacity={lit(1) ? 1 : 0.4}><Kidney x={260} y={54} s={0.55} fill={TINT} /></g>
      <g opacity={lit(2) ? 1 : 0.4}><Pill x={60} y={140} /></g>
      <g opacity={lit(3) ? 1 : 0.4}><rect x="250" y="127" width="20" height="26" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><rect x="255" y="123" width="10" height="7" rx="2" fill={INK} /><path d="M254 138 H266 M254 145 H263" stroke={SOFT} strokeWidth="2" /></g>
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function GoutDayStrip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const labels = ["Work", "Support", "Shoes", "Sleep", "Talk"];
  const icon = (index: number) => [
    <g key="cal"><rect x="-14" y="-12" width="28" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M-14 -4 H14" stroke={INK} strokeWidth="2" /><circle cx="4" cy="6" r="3.5" fill={GOLD} /></g>,
    <g key="case"><rect x="-15" y="-8" width="30" height="20" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" /><path d="M-5 -8 V-12 H5 V-8 M0 -2 V6 M-4 2 H4" stroke={INK} strokeWidth="2" fill="none" /></g>,
    <g key="shoe"><path d="M-16 8 V-6 Q-16 -10 -10 -10 L-2 -6 Q8 -2 14 2 Q18 4 18 8 V10 H-16 Z" fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><path d="M-8 -6 L0 2" stroke={GOLD} strokeWidth="2.5" /></g>,
    <g key="moon"><Moon x={0} y={0} r={13} /></g>,
    <g key="talk"><Person x={-8} y={8} scale={0.45} /><Person x={9} y={8} scale={0.45} fill={SOFT} /></g>,
  ][index];
  const caps = ["Most people keep working", "Adjustments, and Access to Work", "Roomy, round toes; adjustable straps", "Sleep habits, and help with low mood", "Be open about the support you need"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Everyday life" title="Keeping working through the flares" label="Work and everyday life" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Work, support, shoes, sleep and talking, and what helps with each">
      {labels.map((label, index) => <g key={label} transform={`translate(${36 + index * 62} 48)`} opacity={at === index ? 1 : 0.45}>
        <rect x="-25" y="-24" width="50" height="48" rx="10" fill={TINT} stroke={at === index ? GOLD : INK} strokeWidth={at === index ? 3.5 : 2} />
        {icon(index)}
        <W x={0} y={42} size={10}>{label}</W>
      </g>)}
      {at === 0 && <>{Array.from({ length: 7 }, (_, day) => <rect key={day} x={62 + day * 28} y="114" width="22" height="22" rx="5" fill={day === 2 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />)}<W x={160} y={160} size={10.5}>Some time off may be needed</W></>}
      {at === 1 && <>{["Equipment", "Role", "Work pattern"].map((label, index) => <Box key={label} x={66 + index * 94} y={126} w={88} size={10} text={label} />)}<W x={160} y={166} size={10.5}>Access to Work may help too</W></>}
      {at === 2 && <>{["Room for toes", "Adjustable fastening"].map((label, index) => <Box key={label} x={index ? 234 : 86} y={126} w={136} size={10} text={label} lit={index === 1} />)}<W x={160} y={166} size={10.5}>Comfortable from the start</W></>}
      {at === 3 && <><W x={160} y={124} size={10.5}>A dark, quiet room and a routine</W><W x={160} y={146} size={10.5}>No caffeine 8 hours before bed</W><W x={160} y={168} size={10.5}>Feeling low? Talk to your GP</W></>}
      {at === 4 && <>{["Family", "Friends", "Employers"].map((label, index) => <Box key={label} x={66 + index * 94} y={126} w={88} size={10} text={label} />)}<W x={160} y={166} size={10.5}>Start treatment early</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Vitamin D deficiency ==================================================================================

function VitdSunToBone(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const labels = ["Sun", "Skin", "Liver, kidneys", "Gut", "Bones"];
  const lit = [[4], [0, 1], [2, 3], [4], []][at];
  const notes = ["Calcium and phosphate", "Too weak October to early March", "Calcitriol: the form the body uses", "Bone pain, weak muscles, falls", ""];
  const caps = ["Keeps bones, teeth, muscles healthy", "Sun on skin, late March to September", "Liver and kidneys make calcitriol", "Too little: rickets or osteomalacia", "Not enough evidence for other uses"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it does" title="From summer sun to strong bones" label="What vitamin D does" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Vitamin D from the sun to the skin, the liver and kidneys, the gut and the bones">
      {[0, 1, 2, 3].map(index => <path key={index} d={`M${34 + index * 63 + 27} 70 H${34 + (index + 1) * 63 - 27}`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
      {labels.map((label, index) => <g key={label} opacity={lit.includes(index) || at === 4 ? 1 : 0.45}>
        <circle cx={34 + index * 63} cy="70" r="24" fill={WHITE} stroke={lit.includes(index) ? INK : LINE} strokeWidth={lit.includes(index) ? 3 : 2} strokeDasharray={at === 3 && index === 4 ? "5 4" : undefined} />
        <W x={34 + index * 63} y={112} size={10}>{label}</W>
      </g>)}
      <g opacity={lit.includes(0) || at === 4 ? 1 : 0.45}><Sun x={34} y={70} r={8} /></g>
      <g opacity={lit.includes(1) || at === 4 ? 1 : 0.45}><Person x={97} y={82} scale={0.6} /></g>
      <g opacity={lit.includes(2) || at === 4 ? 1 : 0.45}><Kidney x={160} y={70} s={0.5} fill={TINT} /></g>
      <g opacity={lit.includes(3) || at === 4 ? 1 : 0.45}><path d="M211 62 H233 Q237 62 237 66 Q237 70 233 70 H213 Q209 70 209 74 Q209 78 213 78 H235" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" /></g>
      <g opacity={lit.includes(4) || at === 4 ? 1 : 0.45}><Bone x={286} y={70} s={0.7} fill={at === 3 ? TINT : WHITE} /></g>
      {notes[at] && <Box x={160} y={152} w={notes[at].length * 6.3 + 28} text={notes[at]} lit={at !== 3} />}
      {at === 4 && ["COVID-19", "Cancer", "Heart disease"].map((label, index) => <Box key={label} x={66 + index * 94} y={152} w={88} size={10} text={label} dashed />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function VitdWhoLow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const chips = ["Indoors", "Skin", "Age", "Health", "How common"];
  const icon = (index: number) => [
    <path key="house" d="M-9 6 V-2 L0 -9 L9 -2 V6 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
    <circle key="sun" r="6" fill={GOLD} />,
    <g key="age"><circle cx="-4" cy="-4" r="3.5" fill="currentColor" /><circle cx="5" cy="-1" r="2.5" fill="currentColor" /><path d="M-9 8 Q-4 -1 1 8 M2 8 Q5 2 8 8" stroke="currentColor" strokeWidth="2" fill="none" /></g>,
    <path key="pill" d="M-8 -3 H4 A3 3 0 0 1 4 3 H-8 A3 3 0 0 1 -8 -3 Z" fill="none" stroke="currentColor" strokeWidth="2" />,
    <g key="cal"><rect x="-8" y="-7" width="16" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M-8 -2 H8" stroke="currentColor" strokeWidth="2" /></g>,
  ][index];
  const boxes = [["Rarely outdoors", "In a care home", "Skin mostly covered"], [], ["65 or older", "Pregnant or breastfeeding", "Babies and ages 1 to 4"], ["Crohn's or coeliac", "Severe liver disease", "End-stage kidney disease", "Some medicines"], []][at];
  const caps = ["Rarely outdoors or covered up", "Darker skin needs more sun time", "65 and over, pregnancy, young children", "Some bowel, liver, kidney conditions", "Most common from January to March"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Risk" title="Who runs short, and when" label="Who is more likely to be low" credit={chart}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Who is more likely to run low on vitamin D, and how common low levels are">
      {chips.map((chip, index) => <g key={chip} transform={`translate(20 ${16 + index * 34})`} color={at === index ? WHITE : INK}>
        <rect width="112" height="28" rx="9" fill={at === index ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <g transform="translate(16 14)">{icon(index)}</g>
        <W x={34} y={18} size={10} anchor="start" fill={at === index ? WHITE : TEXT}>{chip}</W>
      </g>)}
      {boxes.map((label, index) => <Box key={label} x={222} y={(boxes.length > 3 ? 36 : 48) + index * (boxes.length > 3 ? 34 : 40)} w={168} size={10} text={label} lit={index === 0} />)}
      {at === 1 && <><W x={222} y={42} size={10.5}>Time in sunlight needed</W>
        <rect x="142" y="62" width="56" height="16" rx="5" fill={SOFT} /><W x={206} y={74} size={10} anchor="start">Lighter skin</W>
        <rect x="142" y="98" width="140" height="16" rx="5" fill={INK} /><W x={142} y={132} size={10} anchor="start">Brown or black skin</W></>}
      {at === 4 && [{ x: 142, n: 18, t: "19 to 64" }, { x: 232, n: 12, t: "65 and over" }].map(grid => <g key={grid.t}>
        {Array.from({ length: 100 }, (_, index) => <circle key={index} cx={grid.x + 4 + (index % 10) * 7.4} cy={34 + Math.floor(index / 10) * 7.4} r="2.6" fill={index < grid.n ? INK : LINE} />)}
        <W x={grid.x + 37} y={124} size={10}>{grid.t}</W><W x={grid.x + 37} y={140} size={10}>{`${grid.n} in 100`}</W>
      </g>)}
      {at === 4 && <W x={222} y={164} size={10}>Adults, 2019 to 2023</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function VitdAcheMap(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots = [[84, 58], [104, 74], [96, 92], [96, 106], [70, 106], [122, 106], [88, 142], [104, 142]];
  const adult = at === 0 || at === 1 || at === 3 || at === 4;
  const child = at === 0 || at === 2 || at === 3;
  const caps = ["Bones become soft and weak", "Aches in back, ribs, pelvis or legs", "Rickets: legs that bow outwards", "Bone loss, weakness, falls, fractures", "Usually better in weeks or months"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Symptoms" title="Aching bones and tired muscles" label="Symptoms" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An adult with aching spots, and a child whose legs bow outwards">
      <g opacity={adult ? 1 : 0.35}>
        <g stroke={SOFT} strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M96 48 V104" strokeWidth="14" /><path d="M96 56 L74 82 L70 108 M96 56 L118 82 L122 108" strokeWidth="8" /><path d="M96 104 L88 138 L86 166 M96 104 L104 138 L106 166" strokeWidth="9" /></g>
        <circle cx="96" cy="34" r="12" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {spots.map(([x, y]) => <circle key={`${x} ${y}`} cx={x} cy={y} r="6" fill={GOLD} opacity={at === 1 || at === 3 ? 0.9 : at === 4 ? 0.15 : 0.35} />)}
      </g>
      <g opacity={child ? 1 : 0.35}>
        <circle cx="232" cy="78" r="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M232 90 V122 M232 96 L218 114 M232 96 L246 114" stroke={SOFT} strokeWidth="7" strokeLinecap="round" />
        <path d="M228 122 Q206 146 224 168 M236 122 Q258 146 240 168" stroke={at === 2 ? INK : SOFT} strokeWidth={at === 2 ? 8 : 7} strokeLinecap="round" fill="none" />
        {at === 2 && <path d="M218 145 H246" stroke={GOLD} strokeWidth="3" strokeDasharray="4 3" />}
      </g>
      {at === 0 && <><W x={96} y={186} size={10}>Osteomalacia</W><W x={232} y={186} size={10}>Rickets</W></>}
      {at === 3 && <W x={232} y={40} size={10.5}>Risk rises below 25 nmol/L</W>}
      {at === 4 && <W x={232} y={40} size={10.5}>As levels return to normal</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function VitdLevelBands(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const x = (value: number) => 30 + value * 260 / 75;
  const caps = ["Most people do not need a test", "For bone pain, weakness, bone disease", "Above 50 nmol/L is enough for most", "Calcium, phosphate and other tests", "Tests at 1 month, then 3 to 6 months"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The blood test" title="One number, three ranges" label="The vitamin D blood test" credit="Illustration: Rehyn. UK ranges for GPs; not anyone's own result."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A vitamin D scale from 0 to 75 nmol/L, with ranges below 25, 25 to 50 and above 50">
      <W x={160} y={22} size={10.5}>Vitamin D in the blood, nmol/L</W>
      <g opacity={at === 2 ? 1 : 0.5}>
        <rect x={x(0)} y="54" width={x(25) - x(0)} height="24" fill={LINE} />
        <rect x={x(25)} y="54" width={x(50) - x(25)} height="24" fill={SOFT} />
        <rect x={x(50)} y="54" width={x(75) - x(50)} height="24" fill={INK} />
        {[0, 25, 50, 75].map(value => <W key={value} x={x(value)} y={46} size={10}>{value}</W>)}
      </g>
      {at === 2 && <><W x={(x(0) + x(25)) / 2} y={96} size={9.5}>Risk rises</W><W x={(x(25) + x(50)) / 2} y={96} size={9.5}>Low for some</W><W x={(x(50) + x(75)) / 2} y={96} size={9.5}>Enough for most</W><W x={160} y={144} size={10.5}>A picture of recent weeks</W></>}
      {at === 0 && <Box x={160} y={136} w={200} text="Unsure? Start a supplement" lit />}
      {at === 1 && ["Bone pain", "Weakness", "Bone disease", "Bone medicines"].map((label, index) => <Box key={label} x={index % 2 ? 230 : 90} y={index < 2 ? 122 : 156} w={124} text={label} lit={index === 0} />)}
      {at === 3 && ["Calcium", "Phosphate", "Parathyroid hormone", "Kidney, liver, thyroid"].map((label, index) => <Box key={label} x={index % 2 ? 232 : 88} y={index < 2 ? 122 : 156} w={140} size={10} text={label} lit={index === 0} />)}
      {at === 4 && <><path d="M40 146 H280" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
        {[{ p: 60, t: "Start" }, { p: 140, t: "1 month" }, { p: 250, t: "3 to 6 months" }].map((mark, index) => <g key={mark.t}><circle cx={mark.p} cy="146" r="5" fill={INK} />{index > 0 && <Drop x={mark.p} y={124} s={1.1} fill={GOLD} />}<W x={mark.p} y={168} size={10.5}>{mark.t}</W></g>)}</>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function VitdYearWheel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = "JFMAMJJASOND".split("");
  const winter = (month: number) => month >= 9 || month <= 2;
  const caps = ["Autumn and winter: 10 micrograms a day", "All year if rarely outdoors", "Most adults need 10 micrograms a day", "D3, or plant-based D2", "With your main meal; never 2 doses"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Supplements" title="One small tablet, every winter" label="Daily supplements" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year wheel: a supplement from October to March, sunlight from April to September">
      {at === 1 && <circle cx="96" cy="100" r="74" fill="none" stroke={GOLD} strokeWidth="5" />}
      {months.map((month, index) => {
        const a0 = -Math.PI / 2 + index * Math.PI / 6, a1 = a0 + Math.PI / 6, mid = (a0 + a1) / 2;
        const dark = winter(index) && (at === 0 || at === 1 || at === 4);
        return <g key={index}>
          <path d={sector(96, 100, 28, 66, a0, a1)} fill={at === 1 ? INK : dark ? INK : winter(index) ? SOFT : TINT} stroke={WHITE} strokeWidth="2" />
          <W x={96 + 47 * Math.cos(mid)} y={100 + 47 * Math.sin(mid) + 3.5} size={9.5} fill={at === 1 || dark ? WHITE : TEXT}>{month}</W>
        </g>;
      })}
      {at === 3 ? <W x={96} y={104} size={10.5}>D</W> : <Pill x={96} y={100} />}
      {at === 0 && <><Box x={248} y={64} w={124} text="October to March" lit /><W x={248} y={100} size={10}>Sun too weak to make it</W><Sun x={248} y={138} r={9} /><W x={248} y={170} size={10}>April to September</W></>}
      {at === 1 && ["Rarely outdoors", "In a care home", "Skin covered", "Dark skin"].map((label, index) => <Box key={label} x={248} y={44 + index * 34} w={124} text={label} lit={index === 0} />)}
      {at === 2 && <><W x={248} y={70} size={13}>10 micrograms</W><W x={248} y={92} size={10}>is the same as</W><W x={248} y={116} size={13}>400 IU</W><W x={248} y={150} size={9.5}>More is unlikely to</W><W x={248} y={164} size={9.5}>make bones stronger</W></>}
      {at === 3 && <><Box x={248} y={64} w={110} text="Vitamin D3" lit /><W x={248} y={92} size={9.5}>Slightly more effective</W><Box x={248} y={124} w={110} text="Vitamin D2" /><W x={248} y={152} size={9.5}>Plant-based</W></>}
      {at === 4 && <><circle cx="248" cy="66" r="24" fill={WHITE} stroke={INK} strokeWidth="2.5" /><Pill x={248} y={66} /><W x={248} y={116} size={10.5}>Swallow it whole,</W><W x={248} y={134} size={10.5}>with some water</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function VitdLoadingLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Raises low levels quickly", "Daily or weekly for 6 to 10 weeks", "Tell your doctor about these first", "Weeks or months; blood tests check", "Then a lower daily dose, long term"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Treatment" title="A short boost, then a steady dose" label="Treating a deficiency" credit={chart}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A high loading dose for some weeks, blood tests, then a lower daily dose for the long term">
      <path d="M30 150 H300" stroke={LINE} strokeWidth="3" />
      <rect x="40" y="56" width="70" height="94" rx="6" fill={at <= 1 ? INK : SOFT} />
      <W x={75} y={108} size={11} fill={at <= 1 ? WHITE : TEXT}>Loading</W>
      <rect x="112" y="124" width="188" height="26" rx="6" fill={at === 4 ? INK : SOFT} opacity={at === 4 ? 1 : 0.7} />
      <W x={206} y={141} size={11} fill={at === 4 ? WHITE : TEXT}>Maintenance</W>
      {at === 0 && <><W x={206} y={72} size={10.5}>High strength,</W><W x={206} y={90} size={10.5}>on prescription only</W></>}
      {at === 1 && <><W x={206} y={84} size={10.5}>Up to 300,000IU in all</W><W x={75} y={168} size={10.5}>6 to 10 weeks</W></>}
      {at === 2 && ["Peanut or soya allergy", "High calcium", "Kidney problems"].map((label, index) => <Box key={label} x={214} y={40 + index * 30} w={150} size={10} text={label} lit={index === 0} />)}
      {at === 3 && <><Drop x={75} y={38} s={1.2} fill={GOLD} /><Drop x={175} y={106} s={1.2} fill={GOLD} /><W x={75} y={168} size={10.5}>1 month</W><W x={175} y={168} size={10.5}>3 to 6 months</W></>}
      {at === 4 && <W x={206} y={110} size={10.5}>800IU to 2,000IU a day</W>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function VitdFoodPlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const show = (food: number) => at === 1 || at === 4 || (at === 3 && food === 0);
  const notes: string[][] = [["Sunshine is the", "best source"], [], ["UK cows' milk:", "not fortified"], ["Pregnant: up to", "2 portions a week,", "and no liver"], ["No cod liver oil", "or multivitamin too"]];
  const caps = ["Few foods contain vitamin D", "Oily fish, eggs, red meat, fortified", "UK cows' milk is not a good source", "One portion of oily fish a week", "Food and a supplement work together"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Food" title="Where vitamin D hides on your plate" label="Vitamin D in food" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate with oily fish, an egg, a mushroom and fortified cereal">
      <circle cx="104" cy="100" r="66" fill={WHITE} stroke={INK} strokeWidth="3" />
      <circle cx="104" cy="100" r="54" fill="none" stroke={LINE} strokeWidth="2" />
      <g opacity={show(0) ? 1 : 0.3}><path d="M66 82 L56 73 V91 Z" fill={SOFT} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><ellipse cx="86" cy="82" rx="22" ry="9" fill={SOFT} stroke={INK} strokeWidth="2" /><circle cx="100" cy="80" r="1.8" fill={INK} /></g>
      <g opacity={show(1) ? 1 : 0.3}><ellipse cx="136" cy="80" rx="15" ry="11" fill={WHITE} stroke={INK} strokeWidth="2" /><circle cx="136" cy="80" r="6" fill={GOLD} /></g>
      <g opacity={show(2) ? 1 : 0.3}><path d="M74 122 Q88 102 102 122 Z" fill={SOFT} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><rect x="84" y="122" width="8" height="12" rx="2" fill={WHITE} stroke={INK} strokeWidth="2" /></g>
      <g opacity={show(3) ? 1 : 0.3}><path d="M118 116 Q134 142 150 116 Z" fill={WHITE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />{[124, 132, 140, 128, 136].map((cx, index) => <circle key={index} cx={cx} cy={index < 3 ? 113 : 108} r="3" fill={GOLD} />)}</g>
      {at === 0 && <Sun x={252} y={66} r={13} />}
      {at === 1 && ["Oily fish", "Egg yolks", "Red meat", "Fortified"].map((label, index) => <Box key={label} x={252} y={42 + index * 34} w={104} text={label} lit={index === 0} />)}
      {at === 2 && <><path d="M240 40 L252 30 L264 40 V96 H240 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><path d="M240 58 H264" stroke={SOFT} strokeWidth="2" /><Box x={252} y={166} w={110} size={10} text="Check the label" lit /></>}
      {at === 4 && <Pill x={252} y={60} />}
      {notes[at].map((line, index) => <W key={line} x={252} y={(at === 2 ? 118 : at === 3 ? 74 : 108) + index * 15} size={10}>{line}</W>)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function VitdSunArc(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const t = [0.5, 0.3, 0.5, 0.7, 0.5][at];
  const sx = (1 - t) * (1 - t) * 24 + 2 * (1 - t) * t * 110 + t * t * 196, sy = (1 - t) * (1 - t) * 140 + t * t * 140;
  const caps = ["April to September in the UK", "Short spells, not long ones", "Shade from 11am to 3pm; factor 30", "Keep babies out of strong sun", "Sunbeds are not the answer"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Sunlight" title="A little sun, never a burn" label="Sunlight safely" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The sun's path across a summer day, with shade in the middle of the day">
      <rect x="96" y="44" width="57" height="96" fill={INK} opacity={at === 2 ? 0.28 : 0.1} />
      {at === 2 && <W x={124} y={130} size={10}>Shade</W>}
      <path d="M24 140 Q110 0 196 140" stroke={SOFT} strokeWidth="2.5" strokeDasharray="5 5" fill="none" />
      <path d="M16 140 H204" stroke={LINE} strokeWidth="3" />
      <W x={96} y={158} size={10}>11am</W><W x={153} y={158} size={10}>3pm</W>
      <g className={!still && at === 1 ? "lib-why-pulse" : undefined}><Sun x={sx} y={sy} r={10} /></g>
      {at === 0 && ["Strength of the sun", "How much skin shows", "Your age, skin tone", "Cloudy: it takes longer"].map((line, index) => <W key={line} x={258} y={50 + index * 26} size={10}>{line}</W>)}
      {at === 1 && <><Clock x={262} y={66} r={24} hand={Math.PI / 2} /><W x={262} y={116} size={10.5}>Around 10 to 15</W><W x={262} y={132} size={10.5}>minutes</W><W x={262} y={160} size={9.5}>No need to burn or tan</W></>}
      {at === 2 && <><Box x={262} y={60} w={104} size={10} text="Factor 30 or more" lit /><Box x={262} y={94} w={104} size={10} text="4-star UVA" /><W x={262} y={130} size={10}>You can burn</W><W x={262} y={145} size={10}>even when cloudy</W></>}
      {at === 3 && <><Person x={228} y={92} scale={0.9} /><W x={228} y={126} size={9.5}>Brown or</W><W x={228} y={139} size={9.5}>black skin:</W><W x={228} y={152} size={9.5}>more time</W>
        <path d="M268 70 Q286 52 304 70 Z M286 70 V106" stroke={INK} strokeWidth="2" fill={SOFT} /><circle cx="286" cy="104" r="6" fill={INK} /><W x={287} y={126} size={9.5}>Babies:</W><W x={287} y={139} size={9.5}>shade</W></>}
      {at === 4 && <><rect x="216" y="96" width="92" height="14" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M222 88 Q262 58 302 88" stroke={INK} strokeWidth="2.5" fill="none" /><path d="M240 84 V92 M262 78 V92 M284 84 V92" stroke={SOFT} strokeWidth="2" /><Cross x={262} y={90} s={22} /><W x={262} y={140} size={10}>Raise skin cancer risk</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function VitdLimitBars(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const bars = [{ v: 100, t: "11 and over" }, { v: 50, t: "1 to 10" }, { v: 25, t: "Under 1" }];
  const caps = ["Too much over time raises calcium", "Limits: 100, 50 and 25 micrograms", "Check every label for vitamin D", "Over the limit? Contact 111 now"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Safety" title="When more is not better" label="Taking too much" credit="Illustration: Rehyn. NHS daily limits; follow your doctor if they advise otherwise."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The daily upper limits of vitamin D by age, and where to get advice">
      <path d="M22 160 H190" stroke={LINE} strokeWidth="3" />
      {bars.map((bar, index) => <g key={bar.t}>
        <rect x={32 + index * 56} y={160 - bar.v * 1.1} width="36" height={bar.v * 1.1} rx="4" fill={at === 1 ? INK : SOFT} opacity={at === 1 ? 1 : 0.6} />
        <W x={50 + index * 56} y={154 - bar.v * 1.1} size={11}>{bar.v}</W>
        <W x={50 + index * 56} y={176} size={9.5}>{bar.t}</W>
      </g>)}
      {at === 0 && <><W x={250} y={30} size={10.5}>Too much calcium</W>{["Bones", "Kidneys", "Heart"].map((label, index) => <Box key={label} x={250} y={58 + index * 36} w={100} text={label} />)}</>}
      {at === 1 && <><W x={250} y={70} size={11}>micrograms</W><W x={250} y={88} size={11}>a day, at most</W><W x={250} y={126} size={10}>Or as your doctor</W><W x={250} y={140} size={10}>advises</W></>}
      {at === 2 && <>{["Vitamin D", "Multivitamin", "Cod liver oil"].map((label, index) => <Box key={label} x={250} y={44 + index * 46} w={112} text={label} lit={index === 0} />)}<W x={250} y={72} size={12}>+</W><W x={250} y={118} size={12}>+</W></>}
      {at === 3 && <><rect x="226" y="38" width="48" height="84" rx="9" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="232" y="50" width="36" height="56" rx="4" fill={INK} /><W x={250} y={84} size={14} fill={WHITE}>111</W><circle cx="250" cy="114" r="3" fill={INK} /><W x={250} y={146} size={10.5}>For advice now</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function VitdBonePillars(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const pillars = ["Calcium", "Vitamin D", "Movement"];
  const lit = [1, 0, -1, 2, 1][at];
  const notes = ["Bones, teeth and muscles", "Milk, greens, sardines", "Over 1,500mg: side effects", "Over 65: 150 minutes a week", "Low levels treated first"];
  const caps = ["Vitamin D helps absorb calcium", "Most adults: 700mg calcium a day", "More than advised is unlikely to help", "Weight-bearing, strength and balance", "A test before some bone medicines"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Bones" title="Calcium, vitamin D and movement" label="Vitamin D and bone health" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bone held up by three pillars: calcium, vitamin D and movement">
      {[[62, 36], [62, 56], [258, 36], [258, 56]].map(([cx, cy]) => <circle key={`${cx} ${cy}`} cx={cx} cy={cy} r="11" fill={WHITE} stroke={INK} strokeWidth="3" />)}
      <rect x="62" y="36" width="196" height="20" fill={WHITE} />
      <path d="M62 36 H258 M62 56 H258" stroke={INK} strokeWidth="3" />
      <W x={160} y={50} size={10}>{notes[at]}</W>
      {pillars.map((pillar, index) => <g key={pillar}>
        <rect x={67 + index * 70} y="68" width="46" height="82" rx="5" fill={lit === index ? INK : at === 2 ? SOFT : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={90 + index * 70} y={168} size={10.5}>{pillar}</W>
      </g>)}
      {at === 0 && <Arrow d="M156 110 H118" head="M125 103 L118 110 L125 117" />}
      {at === 2 && <><rect x="276" y="68" width="30" height="82" rx="5" fill="none" stroke={LINE} strokeWidth="2.5" strokeDasharray="5 4" /><Cross x={291} y={108} s={11} /><W x={291} y={168} size={10}>Extra</W></>}
      {at === 4 && <Drop x={160} y={112} s={1.4} fill={GOLD} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function VitdLifeRow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const labels = ["Babies", "1 to 4", "Pregnancy", "Fertility", "Over 65"];
  const fill = (index: number) => at === index ? INK : SOFT;
  const notes = ["Not if over 500ml formula a day", "Vitamins A, C and D every day", "Check your multivitamin first", "Tell your doctor about treatment", "Calcium and vitamin D may help"];
  const caps = ["Breastfed babies: drops from birth", "Ages 1 to 4: 10 micrograms a day", "10 micrograms, October to March", "No evidence it reduces fertility", "Housebound or in care: all year"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Life stages" title="From newborn to grandparent" label="Children, pregnancy and older people" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A baby, a young child, a pregnant woman, a couple and an older person">
      <path d="M12 122 H308" stroke={LINE} strokeWidth="3" />
      <g fill={fill(0)}><circle cx="24" cy="108" r="7" /><ellipse cx="42" cy="111" rx="14" ry="8" /></g>
      <Person x={98} y={108} scale={0.7} fill={fill(1)} />
      <g fill={fill(2)}><Person x={160} y={104} scale={1} fill={fill(2)} /><ellipse cx="170" cy="108" rx="9" ry="10" /></g>
      <Person x={212} y={106} scale={0.8} fill={fill(3)} /><Person x={234} y={106} scale={0.8} fill={fill(3)} />
      {at === 3 && <HeartShape x={223} y={62} size={16} fill={GOLD} stroke={GOLD} width={1.5} />}
      <Person x={282} y={104} scale={1} fill={fill(4)} /><path d="M302 92 V122" stroke={fill(4)} strokeWidth="3" strokeLinecap="round" />
      {labels.map((label, index) => <W key={label} x={[36, 98, 160, 223, 284][index]} y={142} size={10}>{label}</W>)}
      <Box x={160} y={172} w={notes[at].length * 6.3 + 28} text={notes[at]} lit />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function VitdPillBox(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const flagged = [[], [0, 3, 5], [2, 4], [6], []][at];
  const boxes = [["Bowel", "Liver", "Kidneys"], ["Epilepsy", "Steroids", "Cholestyramine"], ["Digoxin", "Some water tablets"], ["Alfacalcidol", "Calcitriol"], ["No foods to avoid", "Alcohol is OK"]][at];
  const caps = ["Some gut, liver and kidney conditions", "Some medicines can lower it", "Some can push calcium too high", "Other forms can suit kidney disease", "Contraception still works"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Medicines" title="Medicines that change the picture" label="Medicines and conditions" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A weekly pill box, with some medicines flagged, linked to a vitamin D capsule">
      {"MTWTFSS".split("").map((day, index) => <g key={index} transform={`translate(${20 + index * 41} 26)`}>
        <rect width="38" height="38" rx="6" fill={flagged.includes(index) ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={19} y={24} size={10.5} fill={flagged.includes(index) ? WHITE : TEXT}>{day}</W>
      </g>)}
      {flagged.map(index => <path key={index} d={`M${39 + index * 41} 66 L160 92`} stroke={GOLD} strokeWidth="2.5" strokeDasharray="5 4" />)}
      <rect x="136" y="90" width="48" height="22" rx="11" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <path d="M160 90 H147 A11 11 0 0 0 147 112 H160 Z" fill={at === 3 ? GOLD : INK} />
      <W x={208} y={106} size={10} anchor="start">Vitamin D</W>
      {boxes.map((label, index) => <Box key={label} x={boxes.length === 3 ? 60 + index * 100 : 100 + index * 120} y={150} w={boxes.length === 3 ? 94 : 112} size={10} text={label} lit={index === 0 && at !== 4} />)}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

export function MineralPieceView({ piece, ...props }: { piece: MineralPiece } & PieceProps) {
  switch (piece) {
    case "gout-crystal-joint": return <GoutCrystalJoint {...props} />;
    case "gout-urate-pie": return <GoutUratePie {...props} />;
    case "gout-test-trio": return <GoutTestTrio {...props} />;
    case "gout-body-spots": return <GoutBodySpots {...props} />;
    case "gout-first-sign": return <GoutFirstSign {...props} />;
    case "gout-crystals-shrink": return <GoutCrystalsShrink {...props} />;
    case "gout-urate-line": return <GoutUrateLine {...props} />;
    case "gout-raised-foot": return <GoutRaisedFoot {...props} />;
    case "gout-plate": return <GoutPlate {...props} />;
    case "gout-gentle-path": return <GoutGentlePath {...props} />;
    case "gout-linked-checks": return <GoutLinkedChecks {...props} />;
    case "gout-day-strip": return <GoutDayStrip {...props} />;
    case "vitd-sun-to-bone": return <VitdSunToBone {...props} />;
    case "vitd-who-low": return <VitdWhoLow {...props} />;
    case "vitd-ache-map": return <VitdAcheMap {...props} />;
    case "vitd-level-bands": return <VitdLevelBands {...props} />;
    case "vitd-year-wheel": return <VitdYearWheel {...props} />;
    case "vitd-loading-line": return <VitdLoadingLine {...props} />;
    case "vitd-food-plate": return <VitdFoodPlate {...props} />;
    case "vitd-sun-arc": return <VitdSunArc {...props} />;
    case "vitd-limit-bars": return <VitdLimitBars {...props} />;
    case "vitd-bone-pillars": return <VitdBonePillars {...props} />;
    case "vitd-life-row": return <VitdLifeRow {...props} />;
    case "vitd-pill-box": return <VitdPillBox {...props} />;
  }
}
