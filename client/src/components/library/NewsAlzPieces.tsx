import type { NewsPiece } from "@/content/ischaemic-news";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { BrainShape, GOLD, INK, LAVENDER, MemoryBand, PURPLE, SANS, SERIF, useSection, WARM } from "./NewsMemoryPieces";

// The Alzheimer's disease page's own pieces, and the ones every Dementia page shares for planning,
// driving, carers and telling people (content/ischaemic-news.ts). Light purples, steered by the card's
// sections; pictures show ideas, not scans or plans.

const ALZ_PIECES = ["plaques-tangles", "clinic-path", "three-stages", "beyond-memory", "tablet-truth", "cst-circle", "other-checks", "good-days", "lpa-keys", "dvla-letter", "care-circle", "telling-circles"] as const;
type AlzPiece = (typeof ALZ_PIECES)[number];
export const isAlzPiece = (piece: NewsPiece): piece is AlzPiece => (ALZ_PIECES as readonly string[]).includes(piece);

const T = ({ x, y, children, anchor = "middle", size = 13, fill = INK }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end"; size?: number; fill?: string }) =>
  <text x={x} y={y} textAnchor={anchor} fontFamily={SANS} fontSize={size} fontWeight="700" fill={fill}>{children}</text>;
const Person = ({ x, y, fill, scale = 1 }: { x: number; y: number; fill: string; scale?: number }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`} fill={fill}><circle cx="0" cy="-30" r="11" /><path d="M-18 14 C-18 -8, -10 -16, 0 -16 C10 -16, 18 -8, 18 14 Z" /></g>;

// ---- What Alzheimer's does: plaques, tangles and the memory shelf ---------------------------------------

function PlaquesTangles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="lilac" kicker="Inside the brain" title="Plaques, tangles and memory" label="Alzheimer's disease" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={s.choices[at]?.label ?? "Alzheimer's disease"}>
      {at === 0 && <g>{[0, 1, 2].map(index => <Person key={index} x={90 + index * 70} y={120} fill={index < 2 ? PURPLE : LAVENDER} scale={1.6} />)}<T x={160} y={200}>Two in three people with dementia</T></g>}
      {at === 1 && <g>
        {[[100, 100], [220, 110]].map(([x, y], index) => <g key={index}>
          <circle cx={x} cy={y} r="38" fill="#FFFFFF" stroke={PURPLE} strokeWidth="4" />
          <path d={`M${x - 14} ${y - 6} c6 -10 14 6 20 -4 s10 10 6 16`} stroke={WARM} strokeWidth="3" fill="none" className={still ? undefined : "lib-alarm"} />
        </g>)}
        {[[150, 70], [160, 140], [270, 70], [60, 160], [170, 100]].map(([x, y], index) => <circle key={index} cx={x} cy={y} r={6 + (index % 2) * 3} fill={GOLD} opacity=".85" />)}
        <T x={80} y={200} size={12}>Plaques: outside cells</T><T x={240} y={200} size={12}>Tangles: inside</T>
      </g>}
      {at === 2 && <g><BrainShape /><ellipse cx="190" cy="120" rx="22" ry="12" fill={PURPLE} className={still ? undefined : "lib-why-pulse"} /><T x={160} y={204}>The hippocampus: new memories</T></g>}
      {at === 3 && <g>
        {[0, 1, 2, 3].map(row => <g key={row}>
          <path d={`M40 ${60 + row * 38} H280`} stroke={LAVENDER} strokeWidth="4" />
          {[0, 1, 2, 3, 4, 5].map(book => <rect key={book} x={50 + book * 36} y={30 + row * 38} width="24" height="28" rx="3" fill={row === 0 ? "#E4D6F5" : PURPLE} opacity={row === 0 ? 0.6 : 1} />)}
        </g>)}
        <T x={300} y={50} anchor="end" size={11}>Recent</T><T x={300} y={184} anchor="end" size={11}>Long ago</T>
      </g>}
      {at === 4 && <g><path d="M30 120 H290" stroke={LAVENDER} strokeWidth="6" strokeLinecap="round" /><path d="M30 120 H220" stroke={PURPLE} strokeWidth="6" strokeLinecap="round" opacity=".5" strokeDasharray="4 8" /><circle cx="30" cy="120" r="9" fill={PURPLE} /><circle cx="230" cy="120" r="12" fill={WARM} /><T x={30} y={150} anchor="start" size={11}>Changes begin</T><T x={230} y={150} size={11}>Symptoms show</T><T x={130} y={100} size={12}>Many years</T></g>}
    </svg>} />;
}

// ---- Diagnosis: the path from the GP ----------------------------------------------------------------------

function ClinicPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stops = [{ x: 40, t: "?" }, { x: 110, t: "GP" }, { x: 180, t: "Clinic" }, { x: 250, t: "Scan" }];
  const walker = stops[Math.min(at, 3)].x;
  return <MemoryBand props={props} state={s} tone="heather" kicker="Diagnosis" title="The road to a diagnosis" label="Diagnosis" credit="Illustration: Rehyn. A picture of the idea; every path is different."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from the GP to the memory clinic and a scan">
      <path d="M30 140 C80 100, 120 170, 170 130 S260 100, 300 130" fill="none" stroke="#BFA3E3" strokeWidth="10" strokeLinecap="round" strokeDasharray="2 14" />
      {stops.map((stop, index) => <g key={stop.t}><circle cx={stop.x} cy={index % 2 ? 136 : 124} r="20" fill={index <= at ? "#5B3F8C" : "#FFFFFF"} stroke="#5B3F8C" strokeWidth="3" /><T x={stop.x} y={(index % 2 ? 136 : 124) + 5} size={index === 0 ? 18 : 11} fill={index <= at ? "#FFFFFF" : "#5B3F8C"}>{stop.t}</T></g>)}
      <g transform={`translate(${walker} 70)`} className="lib-road-walker"><Person x={0} y={20} fill={GOLD} /></g>
      {at === 4 && <g transform="translate(190 160)">{Array.from({ length: 6 }, (_, index) => <rect key={index} x={index * 18} width="14" height="16" rx="3" fill={index < 4 ? "#5B3F8C" : "#E8DCF6"} />)}<T x={52} y={36} size={11}>Several months, or sooner</T></g>}
    </svg>} />;
}

// ---- Stages: three hills ---------------------------------------------------------------------------------------

function ThreeStages(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const stages = [{ x: 60, t: "Early" }, { x: 160, t: "Middle" }, { x: 260, t: "Later" }];
  return <MemoryBand props={props} state={s} tone="orchid" kicker="Over time" title="Early, middle, later" label="Stages" credit="Illustration: Rehyn. A picture of the idea; nobody follows it exactly."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three stages, early, middle and later, along a path">
      {stages.map((stage, index) => {
        const on = at === 0 || at === index || at === 3;
        return <g key={stage.t}><path d={`M${stage.x - 56} 170 Q${stage.x} ${90 - index * 10} ${stage.x + 56} 170 Z`} fill={on ? "#D9BDEB" : "#F1E3F7"} /><T x={stage.x} y={196} fill="#4A1F5E">{stage.t}</T></g>;
      })}
      {at === 1 && <g><Person x={60} y={128} fill="#8A3E9E" /><Person x={86} y={136} fill={LAVENDER} scale={0.8} /><T x={60} y={60} size={11} fill="#4A1F5E">Many things still on your own</T></g>}
      {at === 2 && <g><Person x={160} y={120} fill="#8A3E9E" /><T x={160} y={50} size={11} fill="#4A1F5E">More severe, more wide-ranging</T></g>}
      {at === 3 && <g fill="none" strokeWidth="3" strokeLinecap="round"><path d="M10 80 C90 60, 170 110, 310 70" stroke="#8A3E9E" /><path d="M10 80 C110 100, 200 60, 310 110" stroke={GOLD} strokeDasharray="6 6" /><path d="M10 80 C80 120, 220 120, 310 90" stroke={WARM} strokeDasharray="2 6" /></g>}
    </svg>} />;
}

// ---- Not only memory: five petals --------------------------------------------------------------------------

function BeyondMemory(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const petals = ["Words", "Time and place", "Decisions", "Feelings", "Behaviour"];
  return <MemoryBand props={props} state={s} tone="mist" kicker="Not only memory" title="More than forgetting" label="Symptoms" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={`Five areas that can change: ${petals.join(", ")}`}>
      <circle cx="160" cy="110" r="30" fill="#4A3F9C" /><T x={160} y={115} fill="#FFFFFF" size={12}>Memory</T>
      {petals.map((petal, index) => {
        const angle = (index / petals.length) * Math.PI * 2 - Math.PI / 2;
        const x = 160 + Math.cos(angle) * 80;
        const y = 110 + Math.sin(angle) * 78;
        const on = index === at;
        return <g key={petal}>
          <path d={`M160 110 L${x} ${y}`} stroke="#C3BDEB" strokeWidth="3" />
          <rect x={x - 48} y={y - 15} width="96" height="30" rx="15" fill={on ? "#4A3F9C" : "#FFFFFF"} stroke="#4A3F9C" strokeWidth="2" className={on ? "lib-bulge" : undefined} />
          <T x={x} y={y + 5} size={11} fill={on ? "#FFFFFF" : "#2F2770"}>{petal}</T>
        </g>;
      })}
    </svg>} />;
}

// ---- The medicines: four, and two not on the NHS -----------------------------------------------------------

function TabletTruth(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const names = ["Donepezil", "Rivastigmine", "Galantamine", "Memantine"];
  return <MemoryBand props={props} state={s} tone="lilac" kicker="Medicines" title="What the tablets can do" label="Medicines" credit="Illustration: Rehyn. Your specialist decides what suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four approved medicines, and two newer medicines that are not on the NHS">
      {at !== 3 && names.map((name, index) => <g key={name} transform={`translate(${24 + index * 70} 40)`}>
        <rect width="60" height="26" rx="13" fill={at === 2 && index === 3 ? WARM : index % 2 ? PURPLE : "#8A5BB8"} />
        <rect width="30" height="26" rx="13" fill="#FFFFFF" opacity=".35" />
        <T x={30} y={44} size={10}>{name}</T>
      </g>)}
      {at === 1 && <g><path d="M40 160 H280" stroke={LAVENDER} strokeWidth="10" strokeLinecap="round" /><path d="M40 160 H150" stroke={PURPLE} strokeWidth="10" strokeLinecap="round" /><T x={95} y={186} size={12}>6 to 12 months steadier</T><T x={220} y={186} size={11} fill={WARM}>does not stop it</T></g>}
      {at === 2 && <g transform="translate(110 120)"><rect width="100" height="60" rx="10" fill="#FFFFFF" stroke={PURPLE} strokeWidth="2" /><T x={50} y={26} size={11}>Specialist</T><T x={50} y={44} size={10} fill={PURPLE}>or GP on their advice</T></g>}
      {at === 3 && <g>{["Lecanemab", "Donanemab"].map((name, index) => <g key={name} transform={`translate(${50 + index * 120} 60)`}>
        <rect width="100" height="34" rx="17" fill={LAVENDER} /><T x={50} y={22} size={12}>{name}</T>
        <g transform="translate(36 54)"><rect width="28" height="22" rx="4" fill={INK} /><path d="M6 0 v-6 a8 8 0 0 1 16 0 v6" stroke={INK} strokeWidth="3" fill="none" /></g>
      </g>)}<T x={160} y={180}>Approved in the UK, not on the NHS</T></g>}
      {at === 0 && <T x={160} y={150}>Four medicines approved in the UK</T>}
    </svg>} />;
}

// ---- Keeping active: a group around a table ------------------------------------------------------------------

function CstCircle(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="heather" kicker="Keeping active" title="Better together" label="Cognitive stimulation" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A group of people around a table, doing activities together">
      <ellipse cx="160" cy="120" rx="70" ry="34" fill="#FFFFFF" stroke="#5B3F8C" strokeWidth="3" />
      {[[80, 100], [130, 70], [190, 70], [240, 100], [110, 170], [210, 170]].map(([x, y], index) => <Person key={index} x={x} y={y} fill={at === 2 ? LAVENDER : index % 2 ? "#5B3F8C" : "#8A5BB8"} scale={0.9} />)}
      {at !== 2 && <g className={still ? undefined : "lib-bulge"}><rect x="140" y="108" width="40" height="24" rx="4" fill={GOLD} /><T x={160} y={125} size={11}>quiz</T></g>}
      {at === 2 && <g transform="translate(130 92)"><rect width="60" height="50" rx="8" fill="#FFFFFF" stroke={WARM} strokeWidth="2" /><path d="M8 8 L52 42 M52 8 L8 42" stroke={WARM} strokeWidth="3" /></g>}
      {at === 2 && <T x={160} y={30}>Brain training on its own: not recommended</T>}
      {at === 1 && <T x={160} y={30}>Mild to moderate dementia</T>}
      {at === 3 && <T x={160} y={30}>Ask your memory service</T>}
      {at === 0 && <T x={160} y={30}>Themed sessions over several weeks</T>}
    </svg>} />;
}

// ---- Other things that make memory worse: a checklist ---------------------------------------------------------

function OtherChecks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const items = ["Infection?", "Delirium or stroke?", "Medicines?", "Low mood?", "Sight and hearing?"];
  return <MemoryBand props={props} state={s} tone="orchid" kicker="Worth checking" title="Could something else be adding to it?" label="Other causes" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={`A checklist: ${items.join(", ")}`}>
      <rect x="50" y="14" width="220" height="196" rx="14" fill="#FFFFFF" stroke="#D9BDEB" strokeWidth="3" />
      <rect x="130" y="6" width="60" height="18" rx="6" fill="#8A3E9E" />
      {items.map((item, index) => {
        const on = index === at;
        return <g key={item} transform={`translate(70 ${42 + index * 34})`}>
          <rect width="22" height="22" rx="5" fill={on ? "#8A3E9E" : "#FFFFFF"} stroke="#8A3E9E" strokeWidth="2" />
          {on && <path d="M5 11 l5 5 l8 -10" stroke="#FFFFFF" strokeWidth="3" fill="none" />}
          <text x="34" y="16" fontFamily={SANS} fontSize="14" fontWeight={on ? 800 : 600} fill="#4A1F5E">{item}</text>
        </g>;
      })}
    </svg>} />;
}

// ---- Living well: a good day ----------------------------------------------------------------------------------

function GoodDays(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const scenes = ["Still you", "Doing what you enjoy", "A memory café", "Moving", "Accepting help"];
  return <MemoryBand props={props} state={s} tone="lilac" kicker="Living well" title="Good days" label="Living well" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={scenes[at] ?? "Good days"}>
      <g className={still ? undefined : "lib-bulge"}><circle cx="270" cy="44" r="22" fill={GOLD} /></g>
      <path d="M0 190 C80 170, 200 200, 320 180 V220 H0 Z" fill="#DCC9F2" />
      <Person x={110} y={150} fill={PURPLE} scale={1.4} />
      {at === 0 && <g><circle cx="110" cy="90" r="34" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="4 6" /></g>}
      {at === 1 && <g transform="translate(160 100)"><rect width="70" height="54" rx="4" fill="#FFFFFF" stroke={PURPLE} strokeWidth="2" /><path d="M10 40 C24 20, 40 34, 60 14" stroke={WARM} strokeWidth="4" fill="none" /></g>}
      {at === 2 && <g><Person x={190} y={154} fill="#8A5BB8" scale={1.2} /><Person x={240} y={154} fill="#B99BE0" scale={1.2} /><rect x="150" y="150" width="120" height="10" rx="4" fill={INK} /><path d="M196 136 h14 v12 h-14 z" fill="#FFFFFF" /></g>}
      {at === 3 && <g stroke={PURPLE} strokeWidth="4" fill="none" strokeLinecap="round"><path d="M140 120 C160 100, 180 130, 200 110" /><path d="M150 140 C170 120, 190 150, 210 130" opacity=".5" /></g>}
      {at === 4 && <g><Person x={180} y={150} fill="#B99BE0" scale={1.4} /><path d="M128 140 H160" stroke={GOLD} strokeWidth="6" strokeLinecap="round" /></g>}
      <T x={110} y={210} size={12}>{scenes[at] ?? ""}</T>
    </svg>} />;
}

// ---- Planning ahead: two keys -------------------------------------------------------------------------------

function LpaKeys(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const keys = [{ t: "Health and welfare", y: 70 }, { t: "Property and money", y: 130 }];
  return <MemoryBand props={props} state={s} tone="mist" kicker="Planning ahead" title="Two keys to hand over" label="Lasting power of attorney" credit="Illustration: Rehyn. A picture of the idea, not legal advice."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two keys: health and welfare, and property and financial affairs">
      {keys.map((key, index) => {
        const on = at === 1 || at === 0 || (at === 3);
        return <g key={key.t} transform={`translate(30 ${key.y})`} opacity={on || index === 0 ? 1 : 0.6}>
          <circle cx="20" cy="0" r="20" fill="none" stroke="#4A3F9C" strokeWidth="8" />
          <path d="M40 0 H170 M140 0 V18 M160 0 V14" stroke="#4A3F9C" strokeWidth="8" strokeLinecap="round" />
          <text x="54" y="-14" fontFamily={SANS} fontSize="13" fontWeight="700" fill="#2F2770">{key.t}</text>
        </g>;
      })}
      {at === 0 && <g transform="translate(230 70)"><Person x={30} y={60} fill="#4A3F9C" scale={1.2} /><T x={30} y={110} size={11} fill="#2F2770">Your attorney</T></g>}
      {at === 2 && <g transform="translate(220 50)"><rect width="80" height="100" rx="10" fill="#FFFFFF" stroke="#4A3F9C" strokeWidth="2" /><T x={40} y={46} size={12} fill="#2F2770">While you</T><T x={40} y={64} size={12} fill="#2F2770">can decide</T></g>}
      {at === 3 && <g transform="translate(220 60)"><rect width="84" height="70" rx="8" fill="#4A3F9C" /><T x={42} y={30} size={11} fill="#FFFFFF">Registered</T><T x={42} y={50} size={11} fill="#C3BDEB">8 to 10 weeks</T></g>}
      {at === 1 && <T x={160} y={200} size={12} fill="#2F2770">One, or both</T>}
    </svg>} />;
}

// ---- Driving: the DVLA letter -----------------------------------------------------------------------------------

function DvlaLetter(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="heather" kicker="Driving" title="Tell DVLA, then wait for the letter" label="Driving" credit="Illustration: Rehyn. A picture of the idea; DVLA decides each case."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A car, and a letter from DVLA">
      <g transform={`translate(${at === 3 ? 30 : 40} 120)`} className="lib-road-walker" opacity={at === 3 ? 0.5 : 1}>
        <path d="M0 40 V20 L20 0 H90 L110 20 V40 Z" fill="#5B3F8C" /><circle cx="24" cy="44" r="12" fill={INK} /><circle cx="86" cy="44" r="12" fill={INK} />
      </g>
      <path d="M20 180 H300" stroke="#BFA3E3" strokeWidth="4" strokeDasharray="12 10" />
      <g transform="translate(180 30)">
        <rect width="110" height="76" rx="6" fill="#FFFFFF" stroke="#5B3F8C" strokeWidth="2" />
        <path d="M0 0 L55 40 L110 0" fill="none" stroke="#5B3F8C" strokeWidth="2" />
        <T x={55} y={66} size={12} fill="#5B3F8C">DVLA</T>
      </g>
      {at === 0 && <T x={235} y={126} size={11}>Up to £1,000 fine if you don't</T>}
      {at === 1 && <T x={110} y={110} size={11}>You can usually keep driving while DVLA decides</T>}
      {at === 2 && <g>{["Doctor", "Exam", "Driving test"].map((step, index) => <g key={step} transform={`translate(${30 + index * 50} 30)`}><circle cx="20" cy="20" r="18" fill="#5B3F8C" /><T x={20} y={54} size={10}>{step}</T></g>)}</g>}
      {at === 3 && <T x={110} y={110} size={11}>Often stopping in the middle stage</T>}
    </svg>} />;
}

// ---- Carers: the circle around the person caring --------------------------------------------------------------

function CareCircle(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const supports = [{ t: "Council", a: -150 }, { t: "Admiral Nurse", a: -30 }, { t: "Helplines", a: 90 }];
  return <MemoryBand props={props} state={s} tone="orchid" kicker="For carers" title="Care for the carer" label="Support for carers" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A carer in the middle, with support around them">
      <circle cx="160" cy="110" r="76" fill="none" stroke="#D9BDEB" strokeWidth="3" strokeDasharray="6 8" />
      <Person x={150} y={124} fill="#8A3E9E" scale={1.3} />
      <Person x={176} y={130} fill="#D9BDEB" scale={1.1} />
      {at === 0 && <path d="M160 64 c-10 -14, -32 -6, -24 12 c6 12, 24 22, 24 22 c0 0, 18 -10, 24 -22 c8 -18, -14 -26, -24 -12 z" fill={WARM} transform="translate(0 -24) scale(1)" className="lib-bulge" />}
      {supports.map((support, index) => {
        const angle = (support.a * Math.PI) / 180;
        const x = 160 + Math.cos(angle) * 100;
        const y = 110 + Math.sin(angle) * 82;
        const on = index + 1 === at || (at === 3 && index === 2);
        return <g key={support.t}><rect x={x - 50} y={y - 15} width="100" height="30" rx="15" fill={on ? "#8A3E9E" : "#FFFFFF"} stroke="#8A3E9E" strokeWidth="2" /><T x={x} y={y + 5} size={11} fill={on ? "#FFFFFF" : "#4A1F5E"}>{support.t}</T></g>;
      })}
    </svg>} />;
}

// ---- Telling people: ripples outward -------------------------------------------------------------------------

function TellingCircles(props: PieceProps) {
  const s = useSection(props, 3);
  const { at } = s;
  const rings = [{ r: 40, t: "Close family" }, { r: 70, t: "Friends" }, { r: 100, t: "Work" }];
  return <MemoryBand props={props} state={s} tone="lilac" kicker="Telling people" title="In your own time" label="Telling people" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Circles of people around you: close family, friends and work">
      {rings.slice().reverse().map((ring, index) => {
        const level = rings.length - 1 - index;
        const on = at === 0 ? level === 0 : at === 1 ? level <= 1 : level === 2;
        return <circle key={ring.t} cx="130" cy="110" r={ring.r} fill={on ? "#E4D6F5" : "#FFFFFF"} stroke={PURPLE} strokeWidth="2" />;
      })}
      <Person x={130} y={124} fill={PURPLE} />
      {rings.map((ring, index) => <T key={ring.t} x={250} y={70 + index * 40} anchor="start" size={12} fill={(at === 0 && index === 0) || (at === 1 && index <= 1) || (at === 2 && index === 2) ? PURPLE : "#9C86B8"}>{ring.t}</T>)}
      {at === 2 && <g transform="translate(212 150)"><rect width="34" height="26" rx="4" fill={PURPLE} /><path d="M10 0 v-6 h14 v6" stroke={PURPLE} strokeWidth="3" fill="none" /></g>}
      {at === 1 && <g transform="translate(176 30)"><rect width="104" height="30" rx="12" fill={PURPLE} /><text x="52" y="20" textAnchor="middle" fontFamily={SERIF} fontSize="14" fill="#FFFFFF">Talk it through</text></g>}
    </svg>} />;
}

export function AlzPieceView({ piece, ...props }: { piece: AlzPiece } & PieceProps) {
  switch (piece) {
    case "plaques-tangles": return <PlaquesTangles {...props} />;
    case "clinic-path": return <ClinicPath {...props} />;
    case "three-stages": return <ThreeStages {...props} />;
    case "beyond-memory": return <BeyondMemory {...props} />;
    case "tablet-truth": return <TabletTruth {...props} />;
    case "cst-circle": return <CstCircle {...props} />;
    case "other-checks": return <OtherChecks {...props} />;
    case "good-days": return <GoodDays {...props} />;
    case "lpa-keys": return <LpaKeys {...props} />;
    case "dvla-letter": return <DvlaLetter {...props} />;
    case "care-circle": return <CareCircle {...props} />;
    case "telling-circles": return <TellingCircles {...props} />;
  }
}
