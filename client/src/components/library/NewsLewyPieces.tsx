import type { NewsPiece } from "@/content/ischaemic-news";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { BrainShape, GOLD, INK, LAVENDER, MemoryBand, PURPLE, SANS, SERIF, useSection, WARM } from "./NewsMemoryPieces";

// The Lewy body dementia page's own pieces (content/ischaemic-news.ts, keyed "lewy-body/…"), in the light
// purples of the Dementia card. Each is steered by the card's sections; pictures show ideas, not scans.

const LEWY_PIECES = ["lewy-clumps", "alert-dial", "seeing-things", "look-alikes", "medicine-cards", "dream-bed", "falls-steps", "stand-slowly", "calm-reply", "mirror-room"] as const;
type LewyPiece = (typeof LEWY_PIECES)[number];
export const isLewyPiece = (piece: NewsPiece): piece is LewyPiece => (LEWY_PIECES as readonly string[]).includes(piece);

const Text = ({ x, y, children, anchor = "middle", size = 13, fill = INK, weight = 700 }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end"; size?: number; fill?: string; weight?: number }) =>
  <text x={x} y={y} textAnchor={anchor} fontFamily={SANS} fontSize={size} fontWeight={weight} fill={fill}>{children}</text>;

// ---- What Lewy bodies are: clumps inside a cell ----------------------------------------------------------

function LewyClumps(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const areas = [{ x: 130, y: 70, t: "Thinking" }, { x: 210, y: 90, t: "Seeing" }, { x: 160, y: 140, t: "Movement" }];
  return <MemoryBand props={props} state={s} tone="lilac" kicker="Inside the brain" title="Clumps of a protein" label="Lewy bodies" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A brain cell with clumps of protein inside, and the areas of the brain they affect">
      {at === 0 && <g>
        <path d="M160 40 C210 40, 240 80, 236 116 C232 160, 190 180, 160 178 C120 176, 84 150, 86 110 C88 70, 118 40, 160 40 Z" fill="#FFFFFF" stroke={PURPLE} strokeWidth="4" />
        <path d="M236 110 C262 104, 286 92, 304 70 M236 120 C262 128, 286 140, 300 160 M86 104 C60 96, 40 80, 20 60" stroke={PURPLE} strokeWidth="4" fill="none" strokeLinecap="round" />
        {[[140, 90, 14], [178, 118, 10], [150, 140, 8], [190, 82, 7]].map(([x, y, r], index) => <circle key={index} cx={x} cy={y} r={r} fill={PURPLE} className={still ? undefined : "lib-why-pulse"} style={{ animationDelay: `${index * 0.4}s` }} />)}
        <Text x={160} y={206}>Lewy bodies inside a nerve cell</Text>
      </g>}
      {at === 1 && <g>
        <BrainShape />
        {areas.map(area => <g key={area.t}><circle cx={area.x} cy={area.y} r="16" fill={PURPLE} opacity=".85" /><Text x={area.x} y={area.y + 34} size={12}>{area.t}</Text></g>)}
      </g>}
      {at === 2 && <g fontFamily={SANS}>
        {[{ y: 40, t: "Dementia with Lewy bodies", a: "Thinking", b: "Movement", gap: 0 }, { y: 120, t: "Parkinson's disease dementia", a: "Movement", b: "Thinking", gap: 70 }].map(row => <g key={row.t} transform={`translate(20 ${row.y})`}>
          <Text x={0} y={0} anchor="start" size={12}>{row.t}</Text>
          <rect x="0" y="12" width="140" height="24" rx="6" fill={PURPLE} /><Text x={70} y={29} fill="#FFFFFF" size={12}>{row.a}</Text>
          <rect x={row.gap === 0 ? 0 : 140 + 10} y="44" width="140" height="24" rx="6" fill={LAVENDER} /><Text x={(row.gap === 0 ? 0 : 150) + 70} y={61} size={12}>{row.b}</Text>
          {row.gap > 0 && <Text x={146} y={-2} anchor="start" size={11} fill={PURPLE}>a year or more later</Text>}
        </g>)}
      </g>}
      {at === 3 && <g>{Array.from({ length: 20 }, (_, index) => <g key={index} transform={`translate(${40 + (index % 10) * 25} ${50 + Math.floor(index / 10) * 60})`}>
        <circle cx="10" cy="10" r="8" fill={index < 3 ? PURPLE : index === 3 ? "#A88BD0" : LAVENDER} />
        <path d="M0 44 C0 26, 20 26, 20 44" fill={index < 3 ? PURPLE : index === 3 ? "#A88BD0" : LAVENDER} />
      </g>)}<Text x={160} y={200}>3 to 4 in every 20 people with dementia</Text></g>}
    </svg>} />;
}

// ---- Fluctuations: a dial that swings through the day -------------------------------------------------------

function AlertDial(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const line = "M20 70 C40 40, 60 40, 80 100 S120 150, 140 80 S180 30, 200 120 S240 150, 260 60 S290 40, 300 90";
  return <MemoryBand props={props} state={s} tone="heather" kicker="Through the day" title="Clear, then foggy" label="Fluctuations" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A line that swings up and down through the day, between alert and foggy">
      <rect x="20" y="20" width="280" height="40" fill="#FFFFFF" opacity=".5" />
      <rect x="20" y="120" width="280" height="40" fill="#BFA3E3" opacity=".35" />
      <Text x={24} y={16} anchor="start" size={11}>Alert</Text>
      <Text x={24} y={176} anchor="start" size={11}>Foggy, sleepy</Text>
      <path d={line} fill="none" stroke="#5B3F8C" strokeWidth="5" strokeLinecap="round" className={still || at !== 1 ? undefined : "lib-ecg"} />
      {["Morning", "Midday", "Evening"].map((time, index) => <Text key={time} x={50 + index * 110} y={200} size={11} fill="#5B3F8C">{time}</Text>)}
      {at === 2 && <g><circle cx="200" cy="120" r="18" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} /><Text x={200} y={110} size={11}>switched off</Text></g>}
      {at === 3 && <g><circle cx="140" cy="80" r="18" fill="none" stroke={WARM} strokeWidth="3" /><Text x={140} y={70} size={11}>tested here</Text></g>}
    </svg>} />;
}

// ---- Hallucinations: a pile of clothes, or a dog ---------------------------------------------------------

function SeeingThings(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="orchid" kicker="Seeing things" title="Real to the person seeing it" label="Hallucinations" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={at === 2 ? "A pile of clothes on a chair that looks like a dog" : "A room with a figure and a cat that are not really there"}>
      <rect x="20" y="20" width="280" height="180" rx="14" fill="#FFFFFF" stroke="#D9BDEB" strokeWidth="3" />
      <path d="M20 160 H300" stroke="#E9D7F2" strokeWidth="3" />
      {/* An armchair. */}
      <path d="M190 160 V110 a20 20 0 0 1 20 -20 H260 a20 20 0 0 1 20 20 V160 Z" fill="#E9D7F2" />
      {at === 2
        ? <g>
          <rect x="20" y="20" width="280" height="180" rx="14" fill="#FFFFFF" />
          {/* A big pile of clothes on the floor… */}
          <path d="M70 168 C70 140, 96 132, 120 136 C130 116, 168 110, 190 124 C214 114, 246 126, 250 150 C258 156, 258 168, 250 168 Z" fill="#D9BDEB" />
          <path d="M96 150 C120 142, 150 146, 170 156 M150 128 C170 124, 196 132, 210 146" stroke="#B88FC9" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M224 140 l20 -6 l-4 14" fill="#8A3E9E" />
          {/* …and the dog it can look like, in dashes. */}
          <g className={still ? undefined : "lib-types-tia-dim"} opacity={still ? 0.7 : undefined} fill="none" stroke="#4A1F5E" strokeWidth="3.5" strokeDasharray="7 5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M80 168 C76 138, 110 124, 150 128 C178 130, 196 124, 206 108 L224 100 C236 96, 250 104, 248 118 C246 128, 236 132, 226 130 C220 148, 216 160, 214 168" />
            <path d="M226 102 l-6 -18 l16 10" /><path d="M84 150 C66 146, 58 132, 62 120" />
            <circle cx="234" cy="112" r="2.5" fill="#4A1F5E" strokeDasharray="0" />
          </g>
          <Text x={160} y={58} size={14}>A pile of clothes, or a dog?</Text>
        </g>
        : <g opacity={at === 3 ? 0.5 : 1}>
          <g className={still ? undefined : "lib-types-tia-dim"} opacity={still ? 0.6 : undefined}><circle cx="90" cy="88" r="16" fill="#B88FC9" /><path d="M68 160 C68 120, 76 106, 90 106 C104 106, 112 120, 112 160 Z" fill="#B88FC9" /></g>
          <g className={still ? undefined : "lib-types-tia-dim"} opacity={still ? 0.6 : undefined} style={{ animationDelay: "-2s" }}><ellipse cx="150" cy="150" rx="18" ry="10" fill="#8A3E9E" /><circle cx="166" cy="140" r="7" fill="#8A3E9E" /><path d="M162 134 l2 -6 l3 6 M168 134 l2 -6 l3 6" stroke="#8A3E9E" strokeWidth="2" /></g>
        </g>}
      {at === 1 && <Text x={160} y={52} size={12}>Vivid, and often of people or animals</Text>}
      {at === 3 && <Text x={160} y={52} size={12}>Not distressing? It may not need stopping</Text>}
      {at === 0 && <Text x={160} y={52} size={12}>A common early symptom</Text>}
    </svg>} />;
}

// ---- Diagnosis: look-alikes ---------------------------------------------------------------------------------

function LookAlikes(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const cards = [{ t: "Alzheimer's", n: "?" }, { t: "Delirium", n: "?" }, { t: "Lewy body", n: "✓" }];
  return <MemoryBand props={props} state={s} tone="mist" kicker="Diagnosis" title="Easily mistaken" label="Diagnosis" credit="Illustration: Rehyn. Not a real scan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three cards: Alzheimer's disease, delirium and Lewy body dementia">
      {at !== 3 && cards.map((card, index) => {
        const lit = at === 1 ? index < 2 : at === 0 ? index === 2 : index === 2;
        return <g key={card.t} transform={`translate(${16 + index * 100} ${lit ? 34 : 48})`} className="lib-road-walker">
          <rect width="88" height="120" rx="12" fill={lit ? "#4A3F9C" : "#FFFFFF"} stroke="#4A3F9C" strokeWidth="2" />
          <text x="44" y="64" textAnchor="middle" fontFamily={SERIF} fontSize="34" fontWeight="600" fill={lit ? "#FFFFFF" : "#4A3F9C"}>{at === 1 ? card.n : index === 2 ? "✓" : "·"}</text>
          <text x="44" y="100" textAnchor="middle" fontFamily={SANS} fontSize="11" fontWeight="700" fill={lit ? "#FFFFFF" : "#2F2770"}>{card.t}</text>
        </g>;
      })}
      {at === 2 && <Text x={160} y={196} fill="#2F2770">Tested on a good day, symptoms can be missed</Text>}
      {at === 0 && <Text x={160} y={196} fill="#2F2770">No single test</Text>}
      {at === 3 && <g>
        <ellipse cx="160" cy="100" rx="90" ry="76" fill="#1E1A45" />
        {[[140, 120], [180, 120]].map(([x, y]) => <path key={x} d={`M${x} ${y} c-10 -6 -10 -22 0 -26 c10 4 10 20 0 26`} fill="#F2F0FF" opacity=".85" />)}
        <Text x={160} y={200} fill="#2F2770">Dopamine nerve cells at the base of the brain</Text>
      </g>}
    </svg>} />;
}

// ---- Medicines: cards to show every doctor ------------------------------------------------------------------

function MedicineCards(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const cards = [{ t: "Antipsychotics", n: "Avoid whenever possible", tone: WARM }, { t: "Donepezil, rivastigmine", n: "May help", tone: PURPLE }, { t: "Levodopa", n: "Monitored closely", tone: GOLD }];
  return <MemoryBand props={props} state={s} tone="lilac" kicker="Medicines" title="Handle with care" label="Medicines" credit="Illustration: Rehyn. Never stop or change medicines without your team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three medicine cards, and a note for every doctor">
      {at < 3 ? cards.map((card, index) => {
        const on = index === at;
        return <g key={card.t} transform={`translate(${12 + index * 100} ${on ? 30 : 46})`} className="lib-road-walker">
          <rect width="94" height="130" rx="12" fill="#FFFFFF" stroke={card.tone} strokeWidth={on ? 5 : 2} />
          <rect x="24" y="20" width="46" height="22" rx="11" fill={card.tone} opacity={on ? 1 : 0.5} />
          <foreignObject x="5" y="54" width="84" height="70"><div style={{ font: "700 10.5px DM Sans, sans-serif", color: INK, textAlign: "center", lineHeight: 1.25, overflowWrap: "anywhere" }}>{card.t}<br /><span style={{ color: card.tone === GOLD ? "#8A5A12" : card.tone }}>{card.n}</span></div></foreignObject>
        </g>;
      }) : <g>
        <rect x="50" y="40" width="220" height="130" rx="14" fill="#FFFFFF" stroke={PURPLE} strokeWidth="3" />
        <Text x={160} y={84} size={15}>Please note:</Text>
        <text x="160" y="116" textAnchor="middle" fontFamily={SERIF} fontSize="20" fontWeight="600" fill={PURPLE}>dementia with</text>
        <text x="160" y="142" textAnchor="middle" fontFamily={SERIF} fontSize="20" fontWeight="600" fill={PURPLE}>Lewy bodies</text>
      </g>}
    </svg>} />;
}

// ---- Sleep: acting out dreams --------------------------------------------------------------------------------

function DreamBed(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="heather" kicker="At night" title="Acting out dreams" label="Sleep" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bed at night, with a mattress beside it on the floor">
      <circle cx="270" cy="40" r="18" fill={GOLD} /><circle cx="262" cy="34" r="16" fill="#E8DCF6" />
      <rect x="60" y="110" width="170" height="40" rx="8" fill="#FFFFFF" stroke="#5B3F8C" strokeWidth="3" />
      <path d="M60 110 V80 M60 150 V176 M230 150 V176" stroke="#5B3F8C" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="90" cy="104" rx="20" ry="10" fill="#FFFFFF" stroke="#5B3F8C" strokeWidth="2" />
      <g className={still || at !== 0 ? undefined : "lib-alarm"}><path d="M110 112 C140 92, 190 92, 220 112" fill="#BFA3E3" /></g>
      {at === 0 && <g className={still ? undefined : "lib-bulge"}><rect x="120" y="44" width="80" height="30" rx="12" fill="#FFFFFF" /><Text x={160} y={64} size={12}>Shouting out</Text></g>}
      {at === 1 && <g>{[0, 1, 2].map(index => <text key={index} x={130 + index * 22} y={70 - index * 14} fontFamily={SERIF} fontSize={18 + index * 4} fill="#5B3F8C">z</text>)}<Text x={160} y={200} size={12}>Poor sleep can start years before</Text></g>}
      {at === 2 && <g><rect x="232" y="166" width="70" height="16" rx="5" fill="#BFA3E3" stroke="#5B3F8C" strokeWidth="2" /><Text x={268} y={200} size={11}>Mattress</Text><path d="M30 130 l12 12 M42 130 l-12 12" stroke={WARM} strokeWidth="3" /><Text x={36} y={160} size={10}>no sharp</Text></g>}
      {at === 3 && <g transform="translate(250 120)"><rect width="50" height="28" rx="14" fill="#5B3F8C" /><Text x={25} y={19} size={10} fill="#FFFFFF">Ask</Text></g>}
    </svg>} />;
}

// ---- Movement and falls ---------------------------------------------------------------------------------------

function FallsSteps(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const helps = ["Strength and balance", "Eyesight test", "Medicines review"];
  return <MemoryBand props={props} state={s} tone="orchid" kicker="Moving" title="Steady on your feet" label="Movement" credit="Illustration: Rehyn. A picture of the idea, not an exercise plan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person walking, with three things that can lower the risk of falls">
      <g transform="translate(70 40)" stroke="#8A3E9E" strokeWidth="6" strokeLinecap="round" fill="none">
        <circle cx="30" cy="14" r="12" fill="#F7EFFB" />
        <path d="M30 26 V80 M30 40 L10 60 M30 40 L50 58 M30 80 L16 120 M30 80 L46 120" transform={at === 1 ? "rotate(12 30 80)" : undefined} />
      </g>
      {at === 1 && <path d="M60 170 H160" stroke={WARM} strokeWidth="4" strokeDasharray="6 6" />}
      {(at === 2 || at === 3) && helps.map((help, index) => <g key={help} transform={`translate(168 ${40 + index * 50})`}><rect width="136" height="38" rx="19" fill={at === 2 ? "#8A3E9E" : "#FFFFFF"} stroke="#8A3E9E" strokeWidth="2" /><Text x={68} y={24} size={11} fill={at === 2 ? "#FFFFFF" : "#4A1F5E"}>{help}</Text></g>)}
      {at === 0 && <Text x={230} y={100} size={12} fill="#4A1F5E">Like Parkinson's</Text>}
      {at === 3 && <Text x={110} y={200} size={12} fill="#4A1F5E">Physically, mentally, socially</Text>}
    </svg>} />;
}

// ---- Dizzy on standing ------------------------------------------------------------------------------------------

function StandSlowly(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="mist" kicker="Standing up" title="Rise slowly" label="Low blood pressure" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person moving from sitting to standing, in three slow steps">
      {[0, 1, 2].map(step => <g key={step} transform={`translate(${40 + step * 90} 40)`} opacity={at === 2 || step === 0 ? 1 : 0.4}>
        <circle cx="30" cy={step === 2 ? 10 : 30 - step * 10} r="11" fill="#4A3F9C" />
        <path d={step === 0 ? "M30 42 V80 H60 V120 M30 80 L20 120" : step === 1 ? "M30 32 L36 76 L56 96 V130 M36 76 L24 130" : "M30 22 V84 M30 84 L22 140 M30 84 L40 140"} stroke="#4A3F9C" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>)}
      {at === 0 && <g className={still ? undefined : "lib-bulge"}><path d="M240 30 c8 -8 18 -8 22 0 M236 42 c10 -10 24 -10 30 0" stroke={WARM} strokeWidth="3" fill="none" /><Text x={252} y={70} size={11} fill="#2F2770">dizzy</Text></g>}
      {at === 1 && <Text x={160} y={200} fill="#2F2770">Dizziness, falls and bladder problems</Text>}
      {at === 2 && <Text x={160} y={200} fill="#2F2770">One step at a time</Text>}
    </svg>} />;
}

// ---- Responding to hallucinations: two speech bubbles ------------------------------------------------------------

function CalmReply(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const replies = [{ no: "There's nothing there!", yes: "I'm here with you." }, { no: "", yes: "What can you see?" }, { no: "", yes: "Let's put the light on." }, { no: "", yes: "We'll ask the doctor today." }];
  const reply = replies[at] ?? replies[0];
  return <MemoryBand props={props} state={s} tone="lilac" kicker="For families" title="Reassure, don't argue" label="Responding" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={`A calm reply: ${reply.yes}`}>
      <g fill="#E4D6F5"><circle cx="70" cy="150" r="20" /><path d="M40 220 C40 188, 52 176, 70 176 C88 176, 100 188, 100 220 Z" /></g>
      <g fill={PURPLE}><circle cx="250" cy="150" r="20" /><path d="M220 220 C220 188, 232 176, 250 176 C268 176, 280 188, 280 220 Z" /></g>
      {reply.no && <g opacity=".6"><rect x="120" y="24" width="180" height="40" rx="14" fill="#FFFFFF" stroke={WARM} strokeWidth="2" /><text x="210" y="49" textAnchor="middle" fontFamily={SANS} fontSize="13" fontWeight="700" fill={WARM} textDecoration="line-through">{reply.no}</text></g>}
      <g className="lib-bulge"><rect x="120" y="76" width="180" height="44" rx="14" fill={PURPLE} /><path d="M240 120 l6 14 l12 -14" fill={PURPLE} /><Text x={210} y={104} fill="#FFFFFF">{reply.yes}</Text></g>
    </svg>} />;
}

// ---- The home: mirrors, windows, patterns ------------------------------------------------------------------------

function MirrorRoom(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="heather" kicker="At home" title="Fewer shadows, fewer tricks of the light" label="The home" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A room with a window, a mirror, a rug and a lamp">
      <rect x="20" y="20" width="280" height="180" rx="12" fill="#FFFFFF" stroke="#BFA3E3" strokeWidth="3" />
      {/* Window with curtains. */}
      <rect x="40" y="40" width="80" height="80" fill={at === 1 ? "#E8DCF6" : "#3B2F5E"} />
      <path d={at === 1 ? "M40 40 H80 V120 H40 Z M80 40 H120 V120 H80 Z" : "M40 40 H52 V120 H40 Z M108 40 H120 V120 H108 Z"} fill="#BFA3E3" className="lib-road-walker" />
      {/* Mirror. */}
      <ellipse cx="220" cy="80" rx="28" ry="38" fill={at === 1 ? "#E8DCF6" : "#D9E4F2"} stroke="#5B3F8C" strokeWidth="3" />
      {at === 1 && <path d="M192 60 H248 V104 H192 Z" fill="#BFA3E3" opacity=".7" />}
      {/* Lamp and glare. */}
      <path d="M260 196 V150 M246 150 H274 L266 130 H254 Z" stroke="#5B3F8C" strokeWidth="3" fill="#F7E8C8" />
      {at === 0 && <g fill="#3B2F5E" opacity=".2"><path d="M150 200 L200 120 H230 L260 200 Z" /></g>}
      {/* Rug. */}
      <rect x="70" y="170" width="130" height="18" rx="4" fill={at === 2 ? "#FFFFFF" : "#E8DCF6"} stroke="#5B3F8C" strokeWidth="2" />
      {at !== 2 && [0, 1, 2, 3, 4, 5, 6].map(index => <path key={index} d={`M${80 + index * 17} 170 V188`} stroke="#5B3F8C" strokeWidth="4" />)}
      {at === 3 && <path d="M30 140 H140" stroke="#5B3F8C" strokeWidth="5" strokeLinecap="round" />}
    </svg>} />;
}

export function LewyPieceView({ piece, ...props }: { piece: LewyPiece } & PieceProps) {
  switch (piece) {
    case "lewy-clumps": return <LewyClumps {...props} />;
    case "alert-dial": return <AlertDial {...props} />;
    case "seeing-things": return <SeeingThings {...props} />;
    case "look-alikes": return <LookAlikes {...props} />;
    case "medicine-cards": return <MedicineCards {...props} />;
    case "dream-bed": return <DreamBed {...props} />;
    case "falls-steps": return <FallsSteps {...props} />;
    case "stand-slowly": return <StandSlowly {...props} />;
    case "calm-reply": return <CalmReply {...props} />;
    case "mirror-room": return <MirrorRoom {...props} />;
  }
}
