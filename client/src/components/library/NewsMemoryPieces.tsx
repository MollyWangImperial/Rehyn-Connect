import { useState, type ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { Band, Choices, useStill, type PieceProps } from "./NewsPieceParts";

// The Dementia & memory pages' own pieces (content/ischaemic-news.ts, keyed "<condition>/<piece>"). They sit
// on pale lavender bands in the purples of the Dementia card on the Brain page. Each is steered by the
// card's sections: the choices are the section headings, and the words are the section's own checked
// paragraphs. Pictures show ideas, not scans, measurements or plans, and say so.

const MEMORY_PIECES = [
  // Vascular dementia, and pieces shared across the Dementia pages.
  "small-vessels", "step-chart", "scan-compare", "recipe-steps", "protect-dials", "spark", "venn-mixed", "home-light", "fridge-board",
] as const;
type MemoryPiece = (typeof MEMORY_PIECES)[number];
export const isMemoryPiece = (piece: NewsPiece): piece is MemoryPiece => (MEMORY_PIECES as readonly string[]).includes(piece);

/** The purples, and one warm colour for blood and for what matters most. */
export const INK = "#3B1F5E";
export const PURPLE = "#6A3E9E";
export const LAVENDER = "#CDB6EA";
export const PALE = "#FBF8FE";
export const WARM = "#D9674A";
export const GOLD = "#D9A441";
export const SANS = "DM Sans, sans-serif";
export const SERIF = "Newsreader, Georgia, serif";

export function useSection(props: PieceProps, count: number, start = "0") {
  const [which, setWhich] = useState(start);
  const choices = props.article.sections.slice(0, count).map((section, index) => ({ id: String(index), label: section.heading }));
  return { which, setWhich, at: Number(which), choices };
}

/** A light band: the picture, then the choices and the chosen section's words. */
export function MemoryBand({ props, tone, kicker, title, credit, label, state, art }: {
  props: PieceProps; tone: "lilac" | "heather" | "orchid" | "mist" | "sky" | "ice" | "frost" | "steel" | "theme" | "theme-deep"; kicker: string; title: string; credit: string; label: string;
  state: ReturnType<typeof useSection>; art: ReactNode;
}) {
  return <Band tone={tone} kicker={kicker} title={title} credit={credit} art={art}>
    <Choices items={state.choices} active={state.which} onPick={state.setWhich} label={label} />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{props.article.sections[state.at]?.paragraphs.join(" ") ?? ""}</p>
  </Band>;
}

const Label = ({ x, y, children, anchor = "middle", size = 13, fill = INK }: { x: number; y: number; children: ReactNode; anchor?: "start" | "middle" | "end"; size?: number; fill?: string }) =>
  <text x={x} y={y} textAnchor={anchor} fontFamily={SANS} fontSize={size} fontWeight="700" fill={fill}>{children}</text>;

/** A brain outline, in the house style. */
export const BrainShape = ({ fill = "#FFFFFF", stroke = PURPLE }: { fill?: string; stroke?: string }) =>
  <path d="M160 34 C126 14, 78 30, 80 72 C58 88, 62 132, 92 144 C98 176, 140 184, 160 160 C180 184, 222 176, 228 144 C258 132, 262 88, 240 72 C242 30, 194 14, 160 34 Z" fill={fill} stroke={stroke} strokeWidth="5" strokeLinejoin="round" />;

// ---- What vascular dementia is: the brain's blood supply --------------------------------------------

function SmallVessels(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const vessels = ["M160 190 C160 150 150 120 120 96 C100 80 98 64 104 52", "M160 190 C160 150 170 120 200 96 C220 80 222 64 216 52", "M160 150 C140 140 120 140 100 130", "M160 150 C180 140 200 140 220 130"];
  return <MemoryBand props={props} state={s} tone="lilac" kicker="Blood flow" title="The brain's blood supply" label="Vascular dementia" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A brain with the blood vessels that supply it">
      <BrainShape />
      {vessels.map((d, index) => <path key={index} d={d} fill="none" stroke={WARM} strokeWidth={index < 2 ? 7 : 4} strokeLinecap="round" opacity={at === 0 && index > 1 ? 0.35 : 0.9} />)}
      {vessels.slice(0, 2).map((d, index) => <path key={`f${index}`} d={d} fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="4 12" className={still ? undefined : "lib-types-flow"} />)}
      {at === 2 && <g><circle cx="120" cy="96" r="9" fill={INK} /><circle cx="120" cy="96" r="18" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} /><Label x={120} y={206}>A stroke blocks a vessel</Label></g>}
      {at === 3 && <g stroke={PURPLE} strokeWidth="1.8" fill="none">{[0, 1, 2, 3, 4, 5].map(index => <path key={index} d={`M${130 + index * 12} 120 q 4 14 -2 28`} />)}<Label x={160} y={206}>Small vessels, deep inside</Label></g>}
      {at === 1 && <g>{[{ w: 120, l: "Alzheimer's" }, { w: 70, l: "Vascular" }].map((bar, index) => <g key={bar.l} transform={`translate(20 ${18 + index * 26})`}><rect width={bar.w} height="18" rx="5" fill={index === 1 ? PURPLE : LAVENDER} /><Label x={bar.w + 8} y={14} anchor="start" size={12}>{bar.l}</Label></g>)}</g>}
      {at === 0 && <Label x={160} y={206}>Less blood reaches the brain</Label>}
    </svg>} />;
}

// ---- Steps, or a slow slope ----------------------------------------------------------------------------

function StepChart(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const steps = "M20 40 H90 V80 H170 V115 H250 V155 H300";
  const slope = "M20 40 C100 60, 200 110, 300 160";
  return <MemoryBand props={props} state={s} tone="heather" kicker="Over time" title="Steps, or a slow slope" label="How it changes" credit="Illustration: Rehyn. A picture of the idea; nobody's course can be predicted from it."
    art={<svg viewBox="0 0 320 210" role="img" aria-label={at === 3 ? "A line that slopes down slowly" : "A line that stays level, then drops in steps"}>
      <path d="M20 180 H300 M20 20 V180" stroke="#BFA3E3" strokeWidth="2" />
      <Label x={24} y={16} anchor="start" size={11}>Everyday abilities</Label>
      <Label x={300} y={198} anchor="end" size={11}>Time</Label>
      <path d={at === 3 ? slope : steps} fill="none" stroke={PURPLE} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      {at === 1 && [[20, 90], [90, 170], [170, 250]].map(([a, b]) => <rect key={a} x={a} y={[40, 80, 115][[20, 90, 170].indexOf(a)] - 14} width={b - a} height="28" rx="6" fill="#FFFFFF" opacity=".6" />)}
      {at === 2 && [90, 170, 250].map(x => <g key={x}><circle cx={x} cy={[60, 97, 135][[90, 170, 250].indexOf(x)]} r="10" fill={WARM} className="lib-why-pulse" /></g>)}
      {at === 2 && <Label x={200} y={40} size={12}>New strokes</Label>}
      {at === 0 && <Label x={210} y={40} size={12}>Hard to predict when</Label>}
    </svg>} />;
}

// ---- Diagnosis: a scan, and the pattern ----------------------------------------------------------------

function ScanCompare(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="mist" kicker="Diagnosis" title="Pieces of a picture" label="Diagnosis" credit="Illustration: Rehyn. Not a real scan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A brain scan, and the other pieces of information that go with it">
      {at !== 2 && <g>
        <rect x="70" y="20" width="180" height="150" rx="14" fill="#1E1A45" />
        <ellipse cx="160" cy="95" rx="60" ry="64" fill="#3C3670" />
        <path d="M160 36 V154" stroke="#1E1A45" strokeWidth="3" />
        {at === 1 && [[130, 80], [190, 70], [175, 120], [140, 125]].map(([x, y]) => <circle key={`${x}`} cx={x} cy={y} r="6" fill="#F2F0FF" opacity=".9" className={still ? undefined : "lib-why-pulse"} />)}
        {at === 0 && <g fontFamily={SANS} fontWeight="700" fontSize="12">{["Scan", "History", "Thinking tests"].map((piece, index) => <g key={piece} transform={`translate(${20 + index * 100} 182)`}><rect width="88" height="28" rx="8" fill={index === 0 ? "#4A3F9C" : "#FFFFFF"} stroke="#4A3F9C" strokeWidth="2" /><text x="44" y="19" textAnchor="middle" fill={index === 0 ? "#FFFFFF" : "#2F2770"}>{piece}</text></g>)}</g>}
        {at === 1 && <Label x={160} y={196}>Blood vessel damage shows on MRI</Label>}
      </g>}
      {at === 2 && <g>
        {[{ x: 20, t: "Alzheimer's", first: "Memory first" }, { x: 168, t: "Vascular", first: "Slower thinking first" }].map((card, index) => <g key={card.t} transform={`translate(${card.x} 30)`}>
          <rect width="132" height="150" rx="14" fill="#FFFFFF" stroke={index === 1 ? "#4A3F9C" : "#C3BDEB"} strokeWidth="3" />
          <text x="66" y="36" textAnchor="middle" fontFamily={SERIF} fontSize="20" fontWeight="600" fill="#2F2770">{card.t}</text>
          <text x="66" y="92" textAnchor="middle" fontFamily={SANS} fontSize="12" fontWeight="700" fill="#4A3F9C">{card.first}</text>
        </g>)}
      </g>}
    </svg>} />;
}

// ---- Thinking, not only memory: a recipe card ---------------------------------------------------------

function RecipeSteps(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const lines = ["Boil the water", "Add the pasta", "Make the sauce", "Drain and serve"];
  return <MemoryBand props={props} state={s} tone="orchid" kicker="Not only memory" title="One step at a time" label="Symptoms" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A recipe card with four steps">
      <rect x="40" y="16" width="240" height="176" rx="14" fill="#FFFFFF" stroke="#D9BDEB" strokeWidth="3" />
      <text x="60" y="46" fontFamily={SERIF} fontSize="20" fontWeight="600" fill="#4A1F5E">Supper</text>
      {lines.map((line, index) => {
        const jumbled = at === 1 && (index === 1 || index === 2);
        return <g key={line} transform={`translate(${jumbled ? (index === 1 ? 14 : -8) : 0} ${jumbled ? (index === 1 ? 34 : -34) : 0})`} className="lib-road-walker">
          <circle cx="70" cy={76 + index * 34} r="11" fill={jumbled ? WARM : "#8A3E9E"} />
          <text x="70" y={80 + index * 34} textAnchor="middle" fontFamily={SANS} fontSize="11" fontWeight="700" fill="#FFFFFF">{index + 1}</text>
          <text x="92" y={81 + index * 34} fontFamily={SANS} fontSize="14" fontWeight="600" fill="#4A1F5E" opacity={at === 0 && index > 1 ? 0.35 : 1}>{line}</text>
        </g>;
      })}
      {at === 2 && <g><rect x="40" y="16" width="240" height="176" rx="14" fill="#F7EFFB" opacity=".75" /><Label x={160} y={110} size={16} fill="#4A1F5E">A moment of confusion</Label></g>}
      {at === 3 && <g transform="translate(250 150)"><circle r="22" fill="#8A3E9E" /><path d="M-6 -10 a4 4 0 1 0 0.1 0 M-6 -4 v14 M-6 2 l8 6 M-6 10 l-6 10 M-6 10 l6 10" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" /></g>}
      {at === 0 && <Label x={240} y={46} size={12} fill="#8A3E9E">slower</Label>}
    </svg>} />;
}

// ---- Slowing it down: three dials and the habits -------------------------------------------------------

function ProtectDials(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const dials = ["Blood pressure", "Cholesterol", "Clots"];
  const habits = ["Stop smoking", "Get fit", "Less alcohol"];
  return <MemoryBand props={props} state={s} tone="lilac" kicker="Treating the cause" title="Protecting the brain" label="Treatment" credit="Illustration: Rehyn. A picture of the idea, not targets; your team sets yours."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three dials for blood pressure, cholesterol and clots, and three everyday habits">
      {dials.map((dial, index) => {
        const on = at === 1 || at === 0 || at === 3;
        return <g key={dial} transform={`translate(${60 + index * 100} 70)`}>
          <path d="M-40 0 A40 40 0 0 1 40 0" fill="none" stroke={LAVENDER} strokeWidth="10" strokeLinecap="round" />
          <path d="M-40 0 A40 40 0 0 1 0 -40" fill="none" stroke={on ? PURPLE : LAVENDER} strokeWidth="10" strokeLinecap="round" />
          <path d="M0 0 L-20 -26" stroke={INK} strokeWidth="4" strokeLinecap="round" className="lib-road-walker" transform={on ? undefined : "rotate(50)"} />
          <circle r="6" fill={INK} />
          <Label x={0} y={24} size={11}>{dial}</Label>
        </g>;
      })}
      {habits.map((habit, index) => <g key={habit} transform={`translate(${14 + index * 102} 136)`}>
        <rect width="92" height="34" rx="17" fill={at === 2 || at === 3 ? PURPLE : "#FFFFFF"} stroke={PURPLE} strokeWidth="2" />
        <text x="46" y="22" textAnchor="middle" fontFamily={SANS} fontSize="12" fontWeight="700" fill={at === 2 || at === 3 ? "#FFFFFF" : INK}>{habit}</text>
      </g>)}
      {at === 4 && <g><rect x="40" y="180" width="240" height="30" rx="10" fill="#FFFFFF" stroke={WARM} strokeWidth="2" /><Label x={160} y={200} size={12}>Alzheimer's medicines: only if mixed</Label></g>}
      {at === 3 && <Label x={160} y={200} size={12}>Found early, it may be slowed</Label>}
    </svg>} />;
}

// ---- Mood and apathy: a spark that dims, and is helped back ----------------------------------------------

function Spark(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const size = [1, 0.8, 0.55, 1.1][at] ?? 1;
  return <MemoryBand props={props} state={s} tone="heather" kicker="Mood" title="When the spark dims" label="Mood and apathy" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A candle whose flame dims, then grows again with help">
      <rect x="138" y="120" width="44" height="80" rx="8" fill="#FFFFFF" stroke={PURPLE} strokeWidth="3" />
      <path d="M160 120 V108" stroke={INK} strokeWidth="3" />
      <g transform={`translate(160 104) scale(${size})`} className={still ? undefined : "lib-bulge"}>
        <path d="M0 -46 C18 -20, 18 0, 0 6 C-18 0, -18 -20, 0 -46 Z" fill={at === 2 ? "#BFA3E3" : GOLD} />
        <path d="M0 -24 C8 -12, 8 -2, 0 2 C-8 -2, -8 -12, 0 -24 Z" fill="#FFFFFF" opacity=".8" />
      </g>
      {at === 1 && <g stroke={PURPLE} strokeWidth="2" fill="none" strokeDasharray="4 4"><path d="M60 60 C90 40, 110 60, 140 80" /><path d="M260 60 C230 40, 210 60, 180 80" /></g>}
      {at === 3 && <g>{[{ x: 60, t: "GP" }, { x: 260, t: "CBT" }].map(help => <g key={help.t}><circle cx={help.x} cy="150" r="28" fill={PURPLE} /><Label x={help.x} y={155} fill="#FFFFFF">{help.t}</Label></g>)}</g>}
      {at === 2 && <Label x={160} y={30}>Less interest, less enthusiasm</Label>}
    </svg>} />;
}

// ---- Mixed dementia: two circles ----------------------------------------------------------------------------

function VennMixed(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="mist" kicker="More than one type" title="Where two kinds overlap" label="Mixed dementia" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two overlapping circles: Alzheimer's disease and vascular dementia, with mixed dementia where they overlap">
      <circle cx="122" cy="104" r="74" fill="#C3BDEB" opacity=".75" />
      <circle cx="198" cy="104" r="74" fill="#8A7FD0" opacity=".6" />
      <path d="M160 41 A74 74 0 0 1 160 167 A74 74 0 0 1 160 41 Z" fill="#4A3F9C" opacity={at === 0 || at === 1 ? 0.9 : 0.5} />
      <Label x={92} y={108}>Alzheimer's</Label>
      <Label x={230} y={108}>Vascular</Label>
      <Label x={160} y={108} fill="#FFFFFF" size={12}>Mixed</Label>
      {at === 1 && <Label x={160} y={206}>At least 1 in 10 people with dementia</Label>}
      {at === 2 && <Label x={160} y={206}>Alzheimer's medicines may be used</Label>}
    </svg>} />;
}

// ---- The home: lights on, floors clear --------------------------------------------------------------------

function HomeLight(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="orchid" kicker="At home" title="A home that helps" label="The home" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A cut-away house with stairs, a bathroom and a kitchen">
      <path d="M30 80 L160 16 L290 80 V206 H30 Z" fill="#FFFFFF" stroke="#8A3E9E" strokeWidth="4" strokeLinejoin="round" />
      <path d="M30 140 H290 M160 80 V206" stroke="#D9BDEB" strokeWidth="3" />
      {/* Stairs, bottom left. */}
      <path d="M40 206 V194 H62 V182 H84 V170 H106 V158 H128 V146 H150" fill="none" stroke="#4A1F5E" strokeWidth="3" />
      {(at === 0) && <g fill={GOLD}><circle cx="96" cy="150" r="7" /><circle cx="226" cy="92" r="7" /></g>}
      {at === 0 && <g fill={GOLD} opacity=".25"><circle cx="96" cy="150" r="30" /><circle cx="226" cy="92" r="30" /></g>}
      {/* Bathroom, top right: the toilet seat in a contrasting colour. */}
      <rect x="208" y="110" width="36" height="24" rx="8" fill={at === 2 ? WARM : "#F1E3F7"} stroke="#4A1F5E" strokeWidth="2" />
      {at === 3 && <g><rect x="196" y="88" width="60" height="16" rx="4" fill="#8A3E9E" /><Label x={226} y={100} size={10} fill="#FFFFFF">Toilet</Label><rect x="186" y="156" width="60" height="30" rx="6" fill="#FFFFFF" stroke="#8A3E9E" strokeWidth="2" /><Label x={216} y={176} size={11} fill="#4A1F5E">Tue 3pm</Label></g>}
      {/* A rug on the floor, cleared away. */}
      {at === 1 ? <g><path d="M60 136 H150" stroke="#8A3E9E" strokeWidth="4" /><Label x={96} y={128} size={11} fill="#4A1F5E">Handrail</Label></g> : <rect x="70" y="200" width="70" height="6" rx="3" fill="#E7B9C9" />}
      {at === 2 && <g opacity=".5">{[0, 1, 2, 3, 4].map(index => <path key={index} d={`M40 ${90 + index * 9} H150`} stroke="#4A1F5E" strokeWidth="3" />)}<path d="M40 86 L150 136" stroke={WARM} strokeWidth="4" /></g>}
    </svg>} />;
}

// ---- Routines: the fridge board ----------------------------------------------------------------------------

function FridgeBoard(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return <MemoryBand props={props} state={s} tone="lilac" kicker="Every day" title="The week on the fridge" label="Routines and aids" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A fridge with a weekly timetable, a pill organiser, a label and a clock">
      <rect x="20" y="10" width="140" height="200" rx="14" fill="#FFFFFF" stroke={PURPLE} strokeWidth="3" />
      <path d="M20 80 H160 M140 30 V60 M140 100 V140" stroke={LAVENDER} strokeWidth="4" strokeLinecap="round" />
      {at === 0 && <g>{days.map((day, index) => <g key={day} transform={`translate(32 ${92 + index * 15})`}><rect width="96" height="12" rx="3" fill={index === 1 ? PURPLE : "#EFE6FA"} /><text x="4" y="10" fontFamily={SANS} fontSize="9" fontWeight="700" fill={index === 1 ? "#FFFFFF" : INK}>{day}</text></g>)}</g>}
      {at === 1 && <g transform="translate(180 60)">{days.map((day, index) => <g key={day} transform={`translate(${(index % 4) * 30} ${Math.floor(index / 4) * 44})`}><rect width="26" height="38" rx="5" fill={index === 1 ? PURPLE : "#FFFFFF"} stroke={PURPLE} strokeWidth="2" /><text x="13" y="24" textAnchor="middle" fontFamily={SANS} fontSize="8" fontWeight="700" fill={index === 1 ? "#FFFFFF" : INK}>{day.charAt(0)}</text></g>)}</g>}
      {at === 2 && <g transform="translate(184 70)"><rect width="110" height="40" rx="8" fill={PURPLE} /><Label x={55} y={26} fill="#FFFFFF" size={15}>Cups</Label><rect y="56" width="110" height="40" rx="8" fill={PURPLE} /><Label x={55} y={82} fill="#FFFFFF" size={15}>Toilet</Label></g>}
      {at === 3 && <g transform="translate(180 50)"><rect width="120" height="64" rx="10" fill={INK} /><Label x={60} y={28} fill="#FFFFFF" size={13}>Tuesday</Label><Label x={60} y={50} fill="#CDB6EA" size={12}>21 October, 3 pm</Label><rect y="80" width="120" height="70" rx="8" fill="#FFFFFF" stroke={PURPLE} strokeWidth="2" /><path d="M14 100 H96 M14 118 H80 M14 136 H90" stroke={LAVENDER} strokeWidth="4" strokeLinecap="round" /></g>}
    </svg>} />;
}

export function MemoryPieceView({ piece, ...props }: { piece: MemoryPiece } & PieceProps) {
  switch (piece) {
    case "small-vessels": return <SmallVessels {...props} />;
    case "step-chart": return <StepChart {...props} />;
    case "scan-compare": return <ScanCompare {...props} />;
    case "recipe-steps": return <RecipeSteps {...props} />;
    case "protect-dials": return <ProtectDials {...props} />;
    case "spark": return <Spark {...props} />;
    case "venn-mixed": return <VennMixed {...props} />;
    case "home-light": return <HomeLight {...props} />;
    case "fridge-board": return <FridgeBoard {...props} />;
  }
}
