import type { NewsPiece } from "@/content/ischaemic-news";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, SERIF, useSection, WARM } from "./NewsMemoryPieces";
import { BLUE, Figure, MID, NAVY, PALE, T, Tiles, WHITE } from "./NewsPdPieces";

// The Essential tremor and Dystonia pages' own pieces (content/ischaemic-news.ts, keyed
// "essential-tremor/…" and "dystonia/…"), on pale blue bands in the colours of the Parkinson's & movement
// card. Each is steered by the card's sections; pictures show ideas, not measurements or plans.

const TREMOR_PIECES = [
  "tremor-trace", "rest-action", "family-tree", "trigger-dial", "pill-scale", "ultrasound-beam", "steady-table", "signature", "alcohol-rebound", "voice-head", "tremor-support",
  "signal-pull", "dystonia-map", "referral-path", "touch-trick", "injection-cycle", "tablet-reach", "physio-care", "dbs-chest", "pillow-ease", "desk-drive", "calm-meter", "explain-card",
] as const;
type TremorPiece = (typeof TREMOR_PIECES)[number];
export const isTremorPiece = (piece: NewsPiece): piece is TremorPiece => (TREMOR_PIECES as readonly string[]).includes(piece);

const STEEL = "#2D4C8C";
const shake = (x: number, y: number, width: number, height: number) => {
  let d = `M${x} ${y}`;
  for (let step = 0; step < width / 10; step++) d += ` l5 ${step % 2 ? height : -height} l5 ${step % 2 ? -height : height}`;
  return d;
};

// ==== Essential tremor =====================================================================================

function TremorTrace(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const spots = [{ x: 210, y: 150, t: "Hands" }, { x: 160, y: 40, t: "Head" }, { x: 160, y: 80, t: "Voice" }];
  return <MemoryBand props={props} state={s} tone="sky" kicker="What it is" title="A rhythm the body didn't choose" label="Essential tremor" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with the hands, head and voice marked, and a tremor line">
      <circle cx="160" cy="40" r="22" fill={WHITE} stroke={BLUE} strokeWidth="3" />
      <path d="M120 200 C120 120, 136 70, 160 70 C184 70, 200 120, 200 200 Z" fill={WHITE} stroke={BLUE} strokeWidth="3" />
      <path d="M190 110 L214 150" stroke={BLUE} strokeWidth="10" strokeLinecap="round" />
      {(at === 0 || at === 1) && spots.slice(0, at === 0 ? 1 : 3).map(spot => <g key={spot.t}><circle cx={spot.x} cy={spot.y} r="12" fill="none" stroke={WARM} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} /><T x={spot.x + 50} y={spot.y + 4} size={11}>{spot.t}</T></g>)}
      <path d={shake(20, 196, 90, at === 3 ? 0.5 : 8)} stroke={WARM} strokeWidth="3" fill="none" className={!still && at !== 3 ? "lib-ecg" : undefined} />
      {at === 2 && <T x={260} y={110} size={12}>The most common</T>}
      {at === 2 && <T x={260} y={128} size={12}>disabling tremor</T>}
      {at === 3 && <T x={64} y={180} size={11}>still in sleep</T>}
    </svg>} />;
}

function RestAction(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="ice" kicker="Not Parkinson's" title="Moving, or resting" label="The difference" credit="Illustration: Rehyn. A picture of the idea, not a real tracing."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two tremor lines: one when moving, one at rest">
      <T x={20} y={40} anchor="start" size={12}>Moving (essential tremor)</T>
      <path d={shake(20, 70, 280, at === 0 || at === 3 ? 10 : 3)} stroke={at === 0 || at === 3 ? BLUE : PALE} strokeWidth="3" fill="none" />
      <T x={20} y={120} anchor="start" size={12}>At rest (Parkinson's)</T>
      <path d={shake(20, 150, 280, at === 1 || at === 3 ? 10 : 3)} stroke={at === 1 || at === 3 ? WARM : PALE} strokeWidth="3" fill="none" />
      {at === 2 && <g><rect x="110" y="176" width="100" height="30" rx="15" fill={BLUE} /><T x={160} y={196} size={12} fill={WHITE}>DaTscan</T></g>}
      {at === 3 && <T x={160} y={200} size={12}>Both at once is possible</T>}
    </svg>} />;
}

function FamilyTree(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  const lit = at === 1 ? [0, 2, 3] : at === 0 ? [0, 3] : [];
  const people = [{ x: 100, y: 60 }, { x: 220, y: 60 }, { x: 70, y: 150 }, { x: 160, y: 150 }, { x: 250, y: 150 }];
  return <MemoryBand props={props} state={s} tone="frost" kicker="Families" title="Sometimes it runs in the family" label="Families" credit="Illustration: Rehyn. A picture of the idea, not anyone's real risk."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A family tree with some members affected">
      <path d="M100 74 H220 M160 74 V110 H70 V130 M160 110 V130 M160 110 H250 V130" stroke={PALE} strokeWidth="3" fill="none" />
      {people.map((person, index) => <Figure key={index} x={person.x} y={person.y + 10} fill={lit.includes(index) ? BLUE : PALE} />)}
      {at === 0 && <T x={160} y={204} size={12}>Some types run in families</T>}
      {at === 1 && <T x={160} y={204} size={12}>More often when it starts young</T>}
      {at === 2 && <g><text x="160" y="120" textAnchor="middle" fontFamily={SERIF} fontSize="40" fill={MID}>?</text><T x={160} y={204} size={12}>The genes are not yet known</T></g>}
    </svg>} />;
}

function TriggerDial(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const triggers = ["Stress, tiredness", "Caffeine, alcohol", "Hot or cold", "Being watched"];
  return <MemoryBand props={props} state={s} tone="steel" kicker="Triggers" title="Why some days are shakier" label="Triggers" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={`Things that can make a tremor more noticeable: ${triggers.join(", ")}`}>
      <path d={shake(20, 70, 280, 4 + at * 3)} stroke={WARM} strokeWidth="3" fill="none" className="lib-road-walker" />
      {at === 1 && <g transform="translate(130 100)"><path d="M0 0 H50 L44 44 H6 Z" fill={WHITE} stroke={STEEL} strokeWidth="3" /><path d="M50 10 h8 a10 10 0 0 1 0 20 h-10" stroke={STEEL} strokeWidth="3" fill="none" /></g>}
      {at === 2 && <g transform="translate(150 96)"><rect x="-6" width="12" height="44" rx="6" fill={WHITE} stroke={STEEL} strokeWidth="3" /><circle cy="50" r="10" fill={WARM} /></g>}
      {at === 3 && <g><path d="M160 96 L120 150 H200 Z" fill={GOLD} opacity=".3" /><Figure x={160} y={150} fill={STEEL} /></g>}
      {at === 0 && <path d="M130 130 a20 20 0 0 1 38 -8 a16 16 0 0 1 24 18 H134 a12 12 0 0 1 -4 -10 Z" fill={WHITE} stroke={STEEL} strokeWidth="3" />}
      <Tiles labels={triggers} lit={at} y={178} fill={STEEL} />
    </svg>} />;
}

function PillScale(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const tilt = at === 3 ? 8 : -8;
  return <MemoryBand props={props} state={s} tone="sky" kicker="Medicines" title="Help, with trade-offs" label="Tablets" credit="Illustration: Rehyn. Your doctor decides what suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balance with less shaking on one side and side effects on the other">
      <path d="M160 40 V180 M120 190 H200" stroke={NAVY} strokeWidth="5" strokeLinecap="round" />
      <g transform={`rotate(${tilt} 160 60)`} className="lib-road-walker">
        <path d="M70 60 H250" stroke={NAVY} strokeWidth="5" strokeLinecap="round" />
        <path d="M50 60 l20 40 h-40 Z M270 60 l-20 40 h40 Z" fill={PALE} />
        <T x={70} y={124} size={11}>Less shaking</T><T x={250} y={124} size={11}>Side effects</T>
      </g>
      {at === 1 && <Tiles labels={["Every day", "When needed"]} lit={-1} y={150} />}
      {at === 2 && <g>{["Propranolol", "Primidone"].map((name, index) => <g key={name} transform={`translate(${30 + index * 160} 150)`}><rect width="100" height="26" rx="13" fill={BLUE} /><T x={50} y={18} size={11} fill={WHITE}>{name}</T></g>)}</g>}
      {at === 0 && <T x={160} y={214} size={12}>Not a cure</T>}
    </svg>} />;
}

function UltrasoundBeam(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="ice" kicker="Procedures" title="When tablets aren't enough" label="Procedures" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head with focused ultrasound beams meeting at one point">
      <ellipse cx="130" cy="110" rx="70" ry="80" fill={WHITE} stroke={BLUE} strokeWidth="4" />
      <path d="M130 30 V190" stroke={PALE} strokeWidth="2" strokeDasharray="4 4" />
      {(at === 1 || at === 2) && [-60, -30, 0, 30, 60].map(angle => <path key={angle} d={`M${130 + Math.sin((angle * Math.PI) / 180) * 120} ${110 - Math.cos((angle * Math.PI) / 180) * 120} L112 110`} stroke={GOLD} strokeWidth="2" opacity=".8" className={still ? undefined : "lib-bleed-push"} />)}
      {(at === 1 || at === 2) && <circle cx="112" cy="110" r="6" fill={WARM} />}
      {at === 2 && <g><circle cx="148" cy="110" r="6" fill="none" stroke={WARM} strokeWidth="2" strokeDasharray="3 3" /><T x={212} y={100} anchor="start" size={10.5}>second side,</T><T x={212} y={116} anchor="start" size={10.5}>9 to 12 months</T><T x={212} y={132} anchor="start" size={10.5}>later?</T><T x={212} y={156} anchor="start" size={10.5} fill={WARM}>NICE: Jan 2027</T></g>}
      {at === 1 && <T x={250} y={110} size={12}>One side</T>}
      {at === 3 && <g><path d="M130 110 C160 130, 190 160, 230 170" stroke={GOLD} strokeWidth="3" fill="none" /><rect x="226" y="160" width="26" height="20" rx="5" fill={GOLD} /><T x={250} y={200} size={11}>Deep brain stimulation</T></g>}
      {at === 0 && <T x={250} y={110} size={12}>Rarely, surgery</T>}
    </svg>} />;
}

function SteadyTable(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="frost" kicker="Every day" title="Steadier at the table" label="Aids" credit="Illustration: Rehyn. An occupational therapist can suggest what suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A table with weighted cutlery, a half-filled mug and a thick pen">
      <path d="M10 170 H310" stroke={PALE} strokeWidth="8" strokeLinecap="round" />
      <g opacity={at === 0 ? 1 : 0.35}><path d="M60 160 V90" stroke={BLUE} strokeWidth="14" strokeLinecap="round" /><path d="M60 90 V50 M52 50 V70 M68 50 V70" stroke={BLUE} strokeWidth="4" strokeLinecap="round" /><T x={60} y={200} size={11}>Weighted</T></g>
      <g opacity={at === 1 ? 1 : 0.35} transform="translate(130 90)"><path d="M0 0 H56 L50 70 H6 Z" fill={WHITE} stroke={BLUE} strokeWidth="4" /><rect x="5" y="40" width="46" height="28" fill={MID} /><path d="M-4 20 h-10 a10 10 0 0 0 0 24 h12 M60 20 h10 a10 10 0 0 1 0 24 h-12" stroke={BLUE} strokeWidth="4" fill="none" /><T x={28} y={110} size={11}>Half full</T></g>
      <g opacity={at === 2 ? 1 : 0.35} transform="translate(240 70)"><rect x="-8" width="16" height="90" rx="6" fill={BLUE} /><path d="M-10 30 h20 M-10 44 h20" stroke={GOLD} strokeWidth="4" /><T x={0} y={130} size={11}>Thick pen</T></g>
    </svg>} />;
}

function Signature(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="steel" kicker="Out and about" title="Public moments, made easier" label="Out and about" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A long signature becoming a short one, and an alert card">
      {at === 2 ? <g>
        <path d={`${shake(30, 70, 200, 6)}`} stroke={PALE} strokeWidth="3" fill="none" /><T x={130} y={50} size={11}>Before</T>
        <text x="160" y="150" textAnchor="middle" fontFamily={SERIF} fontSize="40" fontStyle="italic" fill={STEEL}>J. M.</text><T x={160} y={180} size={11}>Shorter, and registered with your bank</T>
      </g> : at === 3 ? <g>
        <rect x="80" y="50" width="160" height="100" rx="12" fill={STEEL} /><T x={160} y={92} size={13} fill={WHITE}>I have a tremor.</T><T x={160} y={114} size={12} fill={PALE}>Please give me a little time.</T>
      </g> : <g>
        <ellipse cx="160" cy="130" rx="100" ry="40" fill={WHITE} stroke={STEEL} strokeWidth="3" />
        <Figure x={90} y={100} fill={STEEL} /><Figure x={230} y={100} fill={PALE} />
        <circle cx="160" cy="130" r="18" fill={PALE} />
        <T x={160} y={204} size={12}>{at === 0 ? "Writing, drinking, eating" : "Keep eating out"}</T>
      </g>}
    </svg>} />;
}

function AlcoholRebound(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="sky" kicker="Alcohol" title="A short dip, then a rebound" label="Alcohol" credit="Illustration: Rehyn. A picture of the idea, not advice to drink."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A line where the tremor dips in the evening and rises again the next morning">
      <path d="M20 150 H300" stroke={PALE} strokeWidth="2" />
      <path d={at >= 1 ? "M20 80 C60 80, 80 130, 120 130 S180 120, 200 60 S260 70, 300 70" : "M20 80 C60 80, 80 130, 120 130 S180 110, 220 90 S280 80, 300 80"} fill="none" stroke={BLUE} strokeWidth="5" strokeLinecap="round" className="lib-road-walker" />
      <T x={120} y={170} size={11}>evening</T><T x={240} y={170} size={11}>next morning</T>
      {at === 1 && <T x={220} y={46} size={12} fill={WARM}>rebound</T>}
      {at === 2 && <g><rect x="90" y="186" width="140" height="26" rx="13" fill={WHITE} stroke={WARM} strokeWidth="2" /><T x={160} y={204} size={11}>No more than 14 units a week</T></g>}
      {at === 3 && <g><rect x="90" y="186" width="140" height="26" rx="13" fill={WARM} /><T x={160} y={204} size={11} fill={WHITE}>Avoid with propranolol</T></g>}
      {at === 0 && <T x={120} y={112} size={11}>eases in about half of people</T>}
    </svg>} />;
}

function VoiceHead(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="ice" kicker="Voice and head" title="When it reaches the voice" label="Voice and head" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head in profile with a wavering sound wave">
      <path d={at === 3 ? "M90 200 V140 C90 120 96 100 100 90 C80 80 76 50 88 30 C102 6 150 4 166 30 C176 48 174 72 164 84 L172 100 L162 104 L164 116 C162 124 154 128 146 130 V200 Z" : "M80 200 V146 C80 126 88 108 92 96 C70 86 66 56 78 36 C92 12 140 10 156 36 C166 54 164 78 154 90 L162 106 L152 110 L154 122 C152 130 144 134 136 136 V200 Z"} fill={WHITE} stroke={BLUE} strokeWidth="3" />
      <path d={shake(190, 100, 110, at === 1 ? 3 : 9)} stroke={at === 2 ? MID : WARM} strokeWidth="3" fill="none" />
      {at === 0 && <T x={245} y={150} size={11}>Head, then voice</T>}
      {at === 1 && <g><path d="M220 150 l20 -20 M236 134 l8 -8" stroke={BLUE} strokeWidth="5" strokeLinecap="round" /><T x={245} y={180} size={11}>Injections</T></g>}
      {at === 2 && <g transform="translate(220 140)"><rect width="50" height="30" rx="8" fill={BLUE} /><path d="M50 15 l20 -12 v24 Z" fill={BLUE} /><T x={35} y={56} size={11}>Amplifier</T></g>}
      {at === 3 && <T x={245} y={160} size={11}>Sit up straight</T>}
    </svg>} />;
}

function TremorSupport(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="frost" kicker="Telling people" title="Your story, your choice" label="Telling people" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="People talking in a circle, and a car">
      {at === 3 ? <g><path d="M70 150 V120 L94 96 H190 L214 120 V150 Z" fill={BLUE} /><circle cx="104" cy="154" r="14" fill={NAVY} /><circle cx="180" cy="154" r="14" fill={NAVY} /><T x={142} y={200} size={12}>Tell DVLA if driving is affected</T></g> : <g>
        <Figure x={160} y={120} fill={BLUE} scale={1.3} />
        {(at === 1 ? [[100, 150]] : at === 2 ? [[80, 120], [240, 120], [110, 180], [210, 180]] : [[90, 130], [230, 130]]).map(([x, y], index) => <Figure key={index} x={x} y={y} fill={PALE} scale={at === 1 ? 0.7 : 1} />)}
        {at === 1 && <g><rect x="40" y="60" width="110" height="32" rx="12" fill={WHITE} stroke={BLUE} strokeWidth="2" /><T x={95} y={81} size={11}>Why do you shake?</T></g>}
        {at === 0 && <T x={160} y={30} size={12}>How much you share is up to you</T>}
        {at === 2 && <T x={160} y={30} size={12}>A support group</T>}
      </g>}
    </svg>} />;
}

// ==== Dystonia ============================================================================================

function SignalPull(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="steel" kicker="What it is" title="A signal that pulls too hard" label="Dystonia" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A brain sending an uneven signal down to a neck muscle that pulls the head to one side">
      <path d="M110 30 C90 20, 60 30, 62 56 C50 68, 54 92, 72 98 C76 116, 100 120, 110 108 C120 120, 144 116, 148 98 C166 92, 170 68, 158 56 C160 30, 130 20, 110 30 Z" fill={WHITE} stroke={STEEL} strokeWidth="4" />
      <path d={`M110 110 ${shake(110, 130, 30, 6).slice(8)} L140 170`} stroke={at === 1 ? WARM : PALE} strokeWidth="3" fill="none" className={at === 1 && !still ? "lib-ecg" : undefined} />
      <g transform="translate(220 120)"><circle cx="0" cy="-40" r="22" fill={WHITE} stroke={STEEL} strokeWidth="3" transform={at === 0 || at === 1 ? "rotate(-20 0 0)" : undefined} className="lib-road-walker" /><path d="M-26 70 C-26 20, -14 0, 0 0 C14 0, 26 20, 26 70 Z" fill={WHITE} stroke={STEEL} strokeWidth="3" /><path d="M-6 -16 L12 4" stroke={WARM} strokeWidth="5" strokeLinecap="round" /></g>
      {at === 2 && <T x={160} y={210} size={12}>Usually lifelong, but treatable</T>}
      {at === 3 && <T x={160} y={210} size={12}>At least 100,000 people in the UK</T>}
    </svg>} />;
}

function DystoniaMap(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const spots = [[{ x: 160, y: 80 }], [{ x: 160, y: 80 }, { x: 160, y: 46 }], [{ x: 160, y: 96 }], [{ x: 214, y: 156 }]][at] ?? [];
  const labels = ["Focal, segmental, generalised", "Neck and eyes", "Voice", "Hand"];
  return <MemoryBand props={props} state={s} tone="sky" kicker="Types" title="Where it shows" label="Types" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={`A body with ${labels[at] ?? ""} marked`}>
      <circle cx="160" cy="50" r="24" fill={at === 0 ? PALE : WHITE} stroke={BLUE} strokeWidth="3" />
      <path d="M150 74 h20 v20 h-20 z" fill={at === 0 ? PALE : WHITE} stroke={BLUE} strokeWidth="3" />
      <path d="M116 200 C116 130, 132 96, 160 96 C188 96, 204 130, 204 200 Z" fill={at === 0 ? PALE : WHITE} stroke={BLUE} strokeWidth="3" />
      <path d="M196 120 L216 160" stroke={BLUE} strokeWidth="10" strokeLinecap="round" />
      {spots.map((spot, index) => <circle key={index} cx={spot.x} cy={spot.y} r="11" fill="none" stroke={WARM} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />)}
      <T x={160} y={214} size={12}>{labels[at]}</T>
    </svg>} />;
}

function ReferralPath(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const stops = ["GP", "Neurologist", "Tests", "Eye or ENT"];
  return <MemoryBand props={props} state={s} tone="frost" kicker="Diagnosis" title="From the GP to a neurologist" label="Diagnosis" credit="Illustration: Rehyn. A picture of the idea; every path is different."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from the GP to a neurologist, tests, and sometimes another specialist">
      <path d="M30 110 H290" stroke={PALE} strokeWidth="8" strokeLinecap="round" strokeDasharray="2 14" />
      {stops.map((stop, index) => <g key={stop} transform={`translate(${40 + index * 80} 110)`}><circle r="26" fill={index <= at ? BLUE : WHITE} stroke={BLUE} strokeWidth="3" /><T x={0} y={4} size={index === 1 ? 9 : 11} fill={index <= at ? WHITE : NAVY}>{stop}</T></g>)}
      {at === 2 && <T x={160} y={180} size={12}>Ruling other conditions out</T>}
      {at === 3 && <T x={160} y={180} size={12}>For eyes or voice</T>}
    </svg>} />;
}

function TouchTrick(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  const touching = at === 0;
  return <MemoryBand props={props} state={s} tone="ice" kicker="The sensory trick" title="A touch that can help" label="Sensory trick" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={touching ? "A hand touching the chin, and the head turning back to the middle" : "A musician's hand in a glove"}>
      {at !== 1 ? <g>
        <g transform={`rotate(${touching ? 0 : -18} 160 140)`} className="lib-road-walker"><circle cx="160" cy="70" r="30" fill={WHITE} stroke={BLUE} strokeWidth="3" /></g>
        <path d="M110 210 C110 150, 130 120, 160 120 C190 120, 210 150, 210 210 Z" fill={WHITE} stroke={BLUE} strokeWidth="3" />
        <path d={touching ? "M200 150 C220 120, 200 96, 184 92" : "M200 150 C220 170, 230 180, 240 190"} stroke={MID} strokeWidth="10" strokeLinecap="round" fill="none" className="lib-road-walker" />
        {at === 2 && <T x={160} y={30} size={12} fill={WARM}>Stress can make it worse</T>}
      </g> : <g>
        <path d="M60 140 H260" stroke={NAVY} strokeWidth="10" strokeLinecap="round" />
        {[100, 140, 180, 220].map(x => <circle key={x} cx={x} cy="140" r="8" fill={WHITE} stroke={NAVY} strokeWidth="3" />)}
        <path d="M120 120 c0 -30 40 -30 40 0 v30 h-40 Z" fill={PALE} stroke={BLUE} strokeWidth="2" />
        <T x={160} y={190} size={12}>Small changes for musicians</T>
      </g>}
    </svg>} />;
}

function InjectionCycle(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const ring = 2 * Math.PI * 60;
  return <MemoryBand props={props} state={s} tone="sky" kicker="Injections" title="A three-month rhythm" label="Botulinum toxin" credit="Illustration: Rehyn. A picture of the idea; your team sets your timing."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ring for the roughly three months between injections">
      <circle cx="110" cy="110" r="60" fill="none" stroke={PALE} strokeWidth="16" />
      <circle cx="110" cy="110" r="60" fill="none" stroke={BLUE} strokeWidth="16" strokeDasharray={`${ring * (at === 1 ? 0.9 : at === 2 ? 0.4 : 0.75)} ${ring}`} transform="rotate(-90 110 110)" className="lib-road-walker" />
      <text x="110" y="112" textAnchor="middle" fontFamily={SERIF} fontSize="26" fontWeight="600" fill={NAVY}>~3</text>
      <T x={110} y={132} size={11}>months</T>
      {at === 0 && <T x={240} y={110} size={12}>Calms the overactive muscle</T>}
      {at === 1 && <g><T x={240} y={96} size={12}>Works in a few days</T><T x={240} y={116} size={12}>Lasts 12 to 16 weeks</T></g>}
      {at === 2 && <T x={240} y={110} size={12}>Several rounds to settle</T>}
      {at === 3 && <g><T x={240} y={96} size={12} fill={WARM}>Sore or bruised</T><T x={240} y={116} size={12} fill={WARM}>Muscle weakness</T></g>}
    </svg>} />;
}

function TabletReach(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="steel" kicker="Tablets" title="When more of the body is involved" label="Tablets" credit="Illustration: Rehyn. Your neurologist decides what suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body lit all over, and a tablet">
      <circle cx="110" cy="50" r="22" fill={at !== 2 ? PALE : WHITE} stroke={STEEL} strokeWidth="3" />
      <path d="M70 200 C70 130, 86 80, 110 80 C134 80, 150 130, 150 200 Z" fill={at !== 2 ? PALE : WHITE} stroke={STEEL} strokeWidth="3" />
      {at === 0 && <T x={230} y={100} size={12}>Best for generalised</T>}
      {at === 1 && <g>{["Anticholinergic", "GABA agonist"].map((name, index) => <g key={name} transform={`translate(180 ${70 + index * 44})`}><rect width="120" height="30" rx="15" fill={STEEL} /><T x={60} y={20} size={11} fill={WHITE}>{name}</T></g>)}</g>}
      {at === 2 && <g transform="translate(200 80)"><rect width="80" height="34" rx="17" fill={GOLD} /><T x={40} y={22} size={12}>Levodopa</T><T x={40} y={70} size={11}>Dopa-responsive</T><T x={40} y={86} size={11}>dystonia</T></g>}
    </svg>} />;
}

function PhysioCare(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="frost" kicker="Therapy" title="The right kind of help" label="Physiotherapy" credit="Illustration: Rehyn. A picture of the idea, not an exercise plan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A physiotherapist guiding a person's arm, and a warning about the wrong stretches">
      <Figure x={110} y={140} fill={BLUE} scale={1.4} />
      <Figure x={190} y={140} fill={PALE} scale={1.4} />
      <path d="M126 120 L170 110" stroke={BLUE} strokeWidth="6" strokeLinecap="round" />
      {at === 1 && <g transform="translate(240 40)"><circle r="20" fill={WHITE} stroke={WARM} strokeWidth="3" /><path d="M-8 -8 L8 8 M8 -8 L-8 8" stroke={WARM} strokeWidth="3" /><T x={0} y={40} size={10}>wrong stretches</T></g>}
      {at === 2 && <T x={160} y={200} size={12}>Not a quick fix</T>}
      {at === 3 && <g transform="translate(240 40)"><path d="M0 30 L20 10 L40 30 V60 H0 Z" fill={WHITE} stroke={BLUE} strokeWidth="3" /><T x={20} y={80} size={10}>home, work</T></g>}
      {at === 0 && <T x={160} y={200} size={12}>Physio and occupational therapy</T>}
    </svg>} />;
}

function DbsChest(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="ice" kicker="Treatment" title="A pacemaker for movement" label="Deep brain stimulation" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A lead from the brain to a small device under the skin of the chest">
      <circle cx="120" cy="56" r="36" fill={WHITE} stroke={BLUE} strokeWidth="4" />
      <path d="M80 210 C80 140, 96 104, 120 104 C144 104, 160 140, 160 210" fill={WHITE} stroke={BLUE} strokeWidth="4" />
      <path d="M120 56 C150 70, 160 110, 140 150" stroke={GOLD} strokeWidth="3" fill="none" />
      <rect x={at === 1 ? 128 : 130} y="146" width="24" height="18" rx="5" fill={GOLD} className={at === 1 ? "lib-bulge" : undefined} />
      {at === 0 && <g><T x={240} y={90} size={11}>severe generalised,</T><T x={240} y={106} size={11}>neck dystonia,</T><T x={240} y={122} size={11}>or dystonic tremor</T></g>}
      {at === 1 && <T x={240} y={150} size={11}>under the skin</T>}
      {at === 2 && <g><T x={240} y={96} size={11}>often still with</T><T x={240} y={112} size={11}>injections or tablets</T></g>}
      {at === 3 && <T x={240} y={110} size={12}>NICE supports it</T>}
    </svg>} />;
}

function PillowEase(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="steel" kicker="Pain" title="Easing the ache" label="Pain" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person resting with pillows arranged to support the neck">
      <rect x="40" y="130" width="240" height="40" rx="10" fill={WHITE} stroke={STEEL} strokeWidth="3" />
      <ellipse cx={at === 3 ? 90 : 80} cy="118" rx="36" ry="16" fill={at === 3 ? GOLD : PALE} className="lib-road-walker" />
      {at === 3 && <ellipse cx="140" cy="122" rx="20" ry="10" fill={GOLD} opacity=".7" />}
      <circle cx="96" cy="100" r="16" fill={STEEL} />
      <path d="M112 112 H240" stroke={STEEL} strokeWidth="18" strokeLinecap="round" />
      {at === 0 && <g><path d="M96 70 l6 -12 l6 12" stroke={WARM} strokeWidth="3" fill="none" /><T x={200} y={60} size={12}>Pain is common</T></g>}
      {at === 1 && <T x={200} y={60} size={12}>Treating the dystonia</T>}
      {at === 2 && <T x={200} y={60} size={12}>Some therapies help</T>}
      {at === 3 && <T x={200} y={60} size={12}>Pillows and position</T>}
    </svg>} />;
}

function DeskDrive(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="sky" kicker="Work and driving" title="Adjustments that help" label="Work and driving" credit="Illustration: Rehyn. DVLA decides each case."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk with a keyboard and pen, and a car">
      {at < 2 ? <g>
        <path d="M30 140 H290 M60 140 V200 M260 140 V200" stroke={BLUE} strokeWidth="6" strokeLinecap="round" />
        <rect x="120" y="60" width="90" height="60" rx="6" fill={WHITE} stroke={BLUE} strokeWidth="3" />
        <rect x="110" y="126" width="110" height="10" rx="3" fill={PALE} />
        <path d="M240 120 L266 96" stroke={NAVY} strokeWidth="6" strokeLinecap="round" />
        <T x={160} y={40} size={12}>{at === 0 ? "Writing and typing can trigger it" : "Say what you can do, and what you can't"}</T>
      </g> : <g>
        <path d="M60 150 V120 L86 92 H210 L236 120 V150 Z" fill={at === 3 ? MID : BLUE} /><circle cx="100" cy="154" r="16" fill={NAVY} /><circle cx="196" cy="154" r="16" fill={NAVY} />
        <T x={148} y={40} size={12}>{at === 2 ? "Tell DVLA if driving may be affected" : "Blepharospasm: tell DVLA"}</T>
      </g>}
    </svg>} />;
}

function CalmMeter(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const level = [0.7, 0.85, 0.45, 0.35][at] ?? 0.5;
  return <MemoryBand props={props} state={s} tone="frost" kicker="Feelings" title="Stress turns it up" label="Mood" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A stress dial, and people in a support group">
      <path d="M50 150 A110 110 0 0 1 270 150" fill="none" stroke={PALE} strokeWidth="18" strokeLinecap="round" />
      <path d="M50 150 A110 110 0 0 1 270 150" fill="none" stroke={at === 1 ? WARM : BLUE} strokeWidth="18" strokeLinecap="round" strokeDasharray={`${345 * level} 345`} className="lib-road-walker" />
      <T x={160} y={140} size={14}>{["Anxiety, low mood", "Stress", "Talking therapies", "Not alone"][at]}</T>
      {at === 3 && [120, 160, 200].map(x => <Figure key={x} x={x} y={200} fill={x === 160 ? BLUE : PALE} scale={0.7} />)}
    </svg>} />;
}

function ExplainCard(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  const lines = [["I find writing hard.", "I can still type."], ["It comes from the brain.", "I can't stop the spasms."], ["Here, I can just be me."]][at] ?? [];
  return <MemoryBand props={props} state={s} tone="steel" kicker="Telling people" title="A few clear words" label="Explaining dystonia" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={`A card that says: ${lines.join(" ")}`}>
      <rect x="50" y="40" width="220" height={40 + lines.length * 34} rx="14" fill={WHITE} stroke={STEEL} strokeWidth="3" />
      {lines.map((line, index) => <text key={line} x="70" y={80 + index * 34} fontFamily={SERIF} fontSize="18" fill={NAVY}>{line}</text>)}
      {at === 2 && [110, 160, 210].map(x => <Figure key={x} x={x} y={200} fill={x === 160 ? STEEL : PALE} scale={0.8} />)}
    </svg>} />;
}

export function TremorPieceView({ piece, ...props }: { piece: TremorPiece } & PieceProps) {
  switch (piece) {
    case "tremor-trace": return <TremorTrace {...props} />;
    case "rest-action": return <RestAction {...props} />;
    case "family-tree": return <FamilyTree {...props} />;
    case "trigger-dial": return <TriggerDial {...props} />;
    case "pill-scale": return <PillScale {...props} />;
    case "ultrasound-beam": return <UltrasoundBeam {...props} />;
    case "steady-table": return <SteadyTable {...props} />;
    case "signature": return <Signature {...props} />;
    case "alcohol-rebound": return <AlcoholRebound {...props} />;
    case "voice-head": return <VoiceHead {...props} />;
    case "tremor-support": return <TremorSupport {...props} />;
    case "signal-pull": return <SignalPull {...props} />;
    case "dystonia-map": return <DystoniaMap {...props} />;
    case "referral-path": return <ReferralPath {...props} />;
    case "touch-trick": return <TouchTrick {...props} />;
    case "injection-cycle": return <InjectionCycle {...props} />;
    case "tablet-reach": return <TabletReach {...props} />;
    case "physio-care": return <PhysioCare {...props} />;
    case "dbs-chest": return <DbsChest {...props} />;
    case "pillow-ease": return <PillowEase {...props} />;
    case "desk-drive": return <DeskDrive {...props} />;
    case "calm-meter": return <CalmMeter {...props} />;
    case "explain-card": return <ExplainCard {...props} />;
  }
}
