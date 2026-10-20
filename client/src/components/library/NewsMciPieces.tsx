import type { NewsPiece } from "@/content/ischaemic-news";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, INK, LAVENDER, MemoryBand, PURPLE, SANS, SERIF, useSection, WARM } from "./NewsMemoryPieces";

// The Mild cognitive impairment page's own pieces (content/ischaemic-news.ts, keyed
// "mild-cognitive-impairment/…"). Light purples, steered by the card's sections. No test scores are ever
// shown; pictures show ideas, not measurements.

const MCI_PIECES = ["forget-scale", "mci-paths", "test-desk", "mimic-list", "risk-wheel", "key-hook", "sound-waves", "review-calendar", "worry-clouds", "sleep-moon"] as const;
type MciPiece = (typeof MCI_PIECES)[number];
export const isMciPiece = (piece: NewsPiece): piece is MciPiece => (MCI_PIECES as readonly string[]).includes(piece);

const T = ({ x, y, children, anchor = "middle", size = 13, fill = INK }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end"; size?: number; fill?: string }) =>
  <text x={x} y={y} textAnchor={anchor} fontFamily={SANS} fontSize={size} fontWeight="700" fill={fill}>{children}</text>;

// ---- Ordinary forgetting, MCI, dementia: a scale ----------------------------------------------------------

function ForgetScale(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const marker = [50, 70, 160, 160][at] ?? 50;
  return <MemoryBand props={props} state={s} tone="lilac" kicker="How to tell" title="From everyday slips to something more" label="Forgetting" credit="Illustration: Rehyn. A picture of the idea, not a test."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A scale from ordinary ageing, to mild cognitive impairment, to dementia">
      <defs><linearGradient id="lib-forget-grad" x1="0" x2="1"><stop offset="0" stopColor="#E4D6F5" /><stop offset=".5" stopColor="#B99BE0" /><stop offset="1" stopColor={PURPLE} /></linearGradient></defs>
      <rect x="20" y="100" width="280" height="20" rx="10" fill="url(#lib-forget-grad)" />
      {["Ageing", "MCI", "Dementia"].map((label, index) => <T key={label} x={50 + index * 110} y={146} size={12}>{label}</T>)}
      <g transform={`translate(${marker} 70)`} className="lib-road-walker"><path d="M0 26 L-10 10 H10 Z" fill={INK} /><circle cy="0" r="12" fill={GOLD} /></g>
      {at === 1 && <g transform="translate(200 20)"><rect width="38" height="62" rx="8" fill={INK} /><rect x="5" y="8" width="28" height="42" rx="3" fill="#E4D6F5" /><path d="M-60 60 l10 -6 M-44 50 l10 -6 M-28 40 l10 -6" stroke={PURPLE} strokeWidth="5" strokeLinecap="round" /></g>}
      {at === 2 && <g transform="translate(110 168)">{Array.from({ length: 6 }, (_, index) => <rect key={index} x={index * 18} width="14" height="16" rx="3" fill={PURPLE} opacity={0.4 + index * 0.1} />)}<T x={52} y={36} size={11}>More than a few months</T></g>}
      {at === 3 && <g transform="translate(130 160)"><rect width="60" height="40" rx="8" fill={PURPLE} /><T x={30} y={26} size={14} fill="#FFFFFF">GP</T></g>}
    </svg>} />;
}

// ---- What MCI is: three paths -------------------------------------------------------------------------------

function MciPaths(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const paths = [{ d: "M60 110 C140 60, 200 50, 300 50", t: "Gets better", on: [2] }, { d: "M60 110 H300", t: "Stays the same", on: [1, 2] }, { d: "M60 110 C140 160, 200 170, 300 170", t: "Dementia", on: [3] }];
  return <MemoryBand props={props} state={s} tone="heather" kicker="Understanding MCI" title="Three ways it can go" label="What MCI is" credit="Illustration: Rehyn. A picture of the idea; your own path can't be read from it."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path splitting three ways: getting better, staying the same, and dementia">
      {paths.map(path => <g key={path.t}><path d={path.d} fill="none" stroke={path.on.includes(at) ? "#5B3F8C" : "#D3C2EC"} strokeWidth={path.on.includes(at) ? 8 : 5} strokeLinecap="round" /><T x={300} y={path.t === "Dementia" ? 196 : path.t === "Gets better" ? 40 : 100} anchor="end" size={12}>{path.t}</T></g>)}
      <circle cx="60" cy="110" r="16" fill={GOLD} />
      {at === 0 && <T x={60} y={150} size={11}>Everyday tasks still OK</T>}
      {at === 2 && <g transform="translate(150 58)"><rect width="74" height="26" rx="13" fill="#5B3F8C" /><T x={37} y={18} size={12} fill="#FFFFFF">4 in 10</T></g>}
      {at === 3 && <g transform="translate(118 150)"><rect width="96" height="44" rx="10" fill="#FFFFFF" stroke="#5B3F8C" strokeWidth="2" /><T x={48} y={18} size={10}>1 in 7 in a year</T><T x={48} y={34} size={10}>1 in 2 by 5 years</T></g>}
    </svg>} />;
}

// ---- The tests: what they look at ------------------------------------------------------------------------------

function TestDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const abilities = ["Memory", "Attention", "Language", "Time and place"];
  return <MemoryBand props={props} state={s} tone="mist" kicker="The tests" title="What the questions look at" label="Memory tests" credit="Illustration: Rehyn. No scores are shown: they only make sense with your clinician."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clipboard with the abilities the tests look at">
      <rect x="40" y="20" width="150" height="190" rx="12" fill="#FFFFFF" stroke="#4A3F9C" strokeWidth="3" />
      <rect x="85" y="12" width="60" height="18" rx="6" fill="#4A3F9C" />
      {abilities.map((ability, index) => <g key={ability} transform={`translate(56 ${52 + index * 38})`}><circle cx="10" cy="10" r="10" fill={at === 1 ? "#4A3F9C" : "#C3BDEB"} /><text x="28" y="15" fontFamily={SANS} fontSize="13" fontWeight="700" fill="#2F2770">{ability}</text></g>)}
      {at === 0 && <g transform="translate(220 60)"><circle cx="30" cy="20" r="16" fill="#4A3F9C" /><path d="M8 80 C8 50, 18 40, 30 40 C42 40, 52 50, 52 80 Z" fill="#4A3F9C" /><T x={30} y={104} size={11}>The GP asks</T></g>}
      {at === 2 && <g transform="translate(210 70)"><rect width="90" height="56" rx="10" fill="#FFFFFF" stroke={WARM} strokeWidth="2" /><T x={45} y={24} size={11}>Can't diagnose</T><T x={45} y={42} size={11} fill="#4A3F9C">can point the way</T></g>}
      {at === 3 && <g transform="translate(220 50)"><rect x="10" width="20" height="70" rx="8" fill="#FFFFFF" stroke="#4A3F9C" strokeWidth="2" /><rect x="10" y="38" width="20" height="32" rx="8" fill={WARM} /><ellipse cx="70" cy="40" rx="26" ry="30" fill="#1E1A45" /><T x={50} y={100} size={10}>Blood tests, maybe a scan</T></g>}
      {at === 4 && <g transform="translate(220 60)"><circle cx="20" cy="20" r="14" fill="#4A3F9C" /><circle cx="64" cy="24" r="12" fill="#C3BDEB" /><path d="M0 80 C0 52, 8 40, 20 40 C32 40, 40 52, 40 80 Z M46 80 C46 58, 54 46, 64 46 C74 46, 82 58, 82 80 Z" fill="#4A3F9C" opacity=".85" /><T x={42} y={104} size={11}>Bring someone</T></g>}
    </svg>} />;
}

// ---- Things that mimic it: six tiles -----------------------------------------------------------------------------

function MimicList(props: PieceProps) {
  const s = useSection(props, 6);
  const { at } = s;
  const tiles = ["Not always dementia", "Sleep", "Medicines", "Mood, stress", "Senses, infections", "Thyroid, B12"];
  return <MemoryBand props={props} state={s} tone="orchid" kicker="Could it be…" title="Things that look like it" label="Other causes" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={`Other causes of memory problems: ${tiles.slice(1).join(", ")}`}>
      {tiles.slice(1).map((tile, index) => {
        const on = index + 1 === at || at === 0;
        const x = 20 + (index % 3) * 98;
        const y = 30 + Math.floor(index / 3) * 90;
        return <g key={tile} transform={`translate(${x} ${y})`} className={index + 1 === at ? "lib-bulge" : undefined}>
          <rect width="88" height="74" rx="12" fill={on ? "#8A3E9E" : "#FFFFFF"} stroke="#8A3E9E" strokeWidth="2" />
          <text x="44" y="32" textAnchor="middle" fontFamily={SERIF} fontSize="22" fill={on ? "#FFFFFF" : "#8A3E9E"}>?</text>
          <T x={44} y={56} size={10.5} fill={on ? "#FFFFFF" : "#4A1F5E"}>{tile}</T>
        </g>;
      })}
      <g transform="translate(216 120)"><rect width="88" height="74" rx="12" fill="#F7EFFB" stroke="#D9BDEB" strokeWidth="2" strokeDasharray="5 5" /><T x={44} y={42} size={11} fill="#8A3E9E">Ask the GP</T></g>
    </svg>} />;
}

// ---- What protects the brain: fourteen slices ---------------------------------------------------------------------

function RiskWheel(props: PieceProps) {
  const s = useSection(props, 6);
  const { at } = s;
  const still = useStill();
  const upTo = (count: number) => Array.from({ length: count }, (_, index) => index);
  const lit = [upTo(14), upTo(7), [0], [1, 2], [3], upTo(14)][at] ?? [];
  const slice = (index: number) => {
    const a0 = (index / 14) * Math.PI * 2 - Math.PI / 2;
    const a1 = ((index + 1) / 14) * Math.PI * 2 - Math.PI / 2 - 0.04;
    const [r0, r1] = [44, 92];
    const p = (r: number, a: number) => `${96 + Math.cos(a) * r} ${110 + Math.sin(a) * r}`;
    return `M${p(r0, a0)} L${p(r1, a0)} A${r1} ${r1} 0 0 1 ${p(r1, a1)} L${p(r0, a1)} A${r0} ${r0} 0 0 0 ${p(r0, a0)} Z`;
  };
  const labels = ["", "Almost half", "Moving", "Smoking, heart", "Social", "Never too late"];
  return <MemoryBand props={props} state={s} tone="lilac" kicker="Brain health" title="Fourteen things that can change" label="Risk factors" credit="Illustration: Rehyn. A picture of the idea; slices are not to scale."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A wheel of 14 risk factors that can be changed">
      {Array.from({ length: 14 }, (_, index) => <path key={index} d={slice(index)} fill={lit.includes(index) ? PURPLE : LAVENDER} opacity={lit.includes(index) ? 1 : 0.6} className={at === 5 && !still ? "lib-why-pulse" : undefined} style={{ animationDelay: `${index * 0.1}s` }} />)}
      <circle cx="96" cy="110" r="40" fill="#FFFFFF" />
      <text x="96" y="122" textAnchor="middle" fontFamily={SERIF} fontSize="34" fontWeight="600" fill={INK}>14</text>
      <T x={204} y={104} anchor="start" size={13}>{labels[at] || "Lancet Commission"}</T>
      {at === 0 && <T x={204} y={124} anchor="start" size={11} fill={PURPLE}>2024</T>}
      {at === 1 && <T x={204} y={124} anchor="start" size={11} fill={PURPLE}>prevented or delayed</T>}
    </svg>} />;
}

// ---- Memory aids: the hallway -------------------------------------------------------------------------------------

function KeyHook(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="heather" kicker="Every day" title="A place for everything" label="Memory aids" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hallway with a key hook, a calendar, a phone and a pill checklist">
      <rect x="20" y="20" width="280" height="180" rx="10" fill="#FFFFFF" stroke="#BFA3E3" strokeWidth="3" />
      {/* Key hook. */}
      <g opacity={at === 1 ? 1 : 0.45}><path d="M50 60 H110" stroke="#5B3F8C" strokeWidth="6" strokeLinecap="round" /><path d="M70 60 v10 M92 60 v10" stroke="#5B3F8C" strokeWidth="4" /><circle cx="70" cy="80" r="8" fill="none" stroke={GOLD} strokeWidth="4" /><path d="M70 88 v18 M70 100 h6" stroke={GOLD} strokeWidth="4" /></g>
      {/* Calendar. */}
      <g transform="translate(150 40)" opacity={at === 2 || at === 4 ? 1 : 0.45}><rect width="80" height="70" rx="6" fill="#E8DCF6" stroke="#5B3F8C" strokeWidth="2" />{Array.from({ length: 12 }, (_, index) => <rect key={index} x={8 + (index % 4) * 18} y={18 + Math.floor(index / 4) * 16} width="12" height="10" fill={index < 6 ? "#5B3F8C" : "#FFFFFF"} />)}{at === 4 && <path d="M100 60 l10 10 M110 60 l-10 10" stroke={WARM} strokeWidth="3" transform="translate(-60 -10)" />}</g>
      {/* Phone. */}
      <g transform="translate(250 50)" opacity={at === 2 ? 1 : 0.45}><rect width="30" height="54" rx="6" fill={INK} /><rect x="4" y="8" width="22" height="34" rx="2" fill={GOLD} /></g>
      {/* Pill checklist. */}
      <g transform="translate(60 130)" opacity={at === 3 ? 1 : 0.45}>{["Mon", "Tue", "Wed"].map((day, index) => <g key={day} transform={`translate(${index * 70} 0)`}><rect width="56" height="44" rx="8" fill="#FFFFFF" stroke="#5B3F8C" strokeWidth="2" /><T x={28} y={20} size={11}>{day}</T>{index < 2 && <path d="M18 30 l6 6 l12 -12" stroke="#5B3F8C" strokeWidth="3" fill="none" />}</g>)}</g>
      {at === 0 && <T x={160} y={190}>One thing at a time</T>}
    </svg>} />;
}

// ---- Hearing: sound waves ---------------------------------------------------------------------------------------

function SoundWaves(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="orchid" kicker="Hearing" title="Keep the sound coming in" label="Hearing" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An ear, sound waves, and a hearing aid">
      <path d="M90 60 C130 40, 170 70, 160 110 C154 132, 130 136, 130 160 C130 184, 100 190, 86 172" fill="none" stroke="#8A3E9E" strokeWidth="10" strokeLinecap="round" />
      {[0, 1, 2].map(index => <path key={index} d={`M${200 + index * 26} 70 C${220 + index * 26} 100, ${220 + index * 26} 130, ${200 + index * 26} 160`} fill="none" stroke="#8A3E9E" strokeWidth="4" strokeLinecap="round" opacity={at === 2 ? 1 : 0.35 + (2 - index) * 0.2} className={still ? undefined : "lib-why-pulse"} style={{ animationDelay: `${index * 0.3}s` }} />)}
      {at === 2 && <path d="M150 150 C170 150, 176 170, 160 180 C146 188, 140 170, 150 150 Z" fill={GOLD} />}
      {at === 0 && <T x={100} y={210} size={12}>Mid-life: 40 to 65</T>}
      {at === 1 && <T x={160} y={30} size={12}>A risk factor, not a certainty</T>}
      {at === 3 && <g>{[230, 270].map(x => <g key={x} fill="#D9BDEB"><circle cx={x} cy="40" r="10" /><path d={`M${x - 14} 74 C${x - 14} 58, ${x - 8} 52, ${x} 52 C${x + 8} 52, ${x + 14} 58, ${x + 14} 74 Z`} /></g>)}<T x={250} y={96} size={11}>staying in touch</T></g>}
      {at === 4 && <g transform="translate(220 20)"><rect width="84" height="34" rx="8" fill="#8A3E9E" /><T x={42} y={22} size={11} fill="#FFFFFF">Free test?</T></g>}
    </svg>} />;
}

// ---- Follow-up: the calendar --------------------------------------------------------------------------------------

function ReviewCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  return <MemoryBand props={props} state={s} tone="mist" kicker="Follow-up" title="Keeping an eye on it" label="Follow-up" credit="Illustration: Rehyn. Your own review plan comes from your team."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year calendar with reviews at 6 and 12 months">
      {months.map((month, index) => {
        const review = (at === 1 || at === 0) && (index === 5 || index === 11);
        return <g key={index} transform={`translate(${24 + (index % 6) * 46} ${40 + Math.floor(index / 6) * 60})`}>
          <rect width="38" height="46" rx="6" fill={review ? "#4A3F9C" : "#FFFFFF"} stroke="#4A3F9C" strokeWidth="2" />
          <T x={19} y={30} size={14} fill={review ? "#FFFFFF" : "#2F2770"}>{month}</T>
        </g>;
      })}
      {at === 2 && <g><path d="M280 180 C200 200, 100 200, 40 180" fill="none" stroke={WARM} strokeWidth="4" /><path d="M40 180 l12 -8 M40 180 l14 4" stroke={WARM} strokeWidth="4" strokeLinecap="round" /><T x={160} y={176} size={11} fill={WARM}>Worse? Back to the GP</T></g>}
      {at === 3 && <g>{["Mood", "Diabetes", "Blood pressure", "Weight"].map((item, index) => <g key={item} transform={`translate(${14 + index * 76} 166)`}><rect width="70" height="26" rx="13" fill="#4A3F9C" /><T x={35} y={17} size={10} fill="#FFFFFF">{item}</T></g>)}</g>}
      {at === 4 && <g transform="translate(110 168)"><rect width="100" height="30" rx="15" fill="#FFFFFF" stroke="#4A3F9C" strokeWidth="2" /><T x={50} y={20} size={11} fill="#2F2770">No licensed medicine</T></g>}
      {at === 0 && <T x={160} y={190} size={12} fill="#2F2770">Often back to your GP</T>}
    </svg>} />;
}

// ---- Worry: clouds and the sun -------------------------------------------------------------------------------------

function WorryClouds(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const sun = at === 0 || at === 3 || at === 4;
  return <MemoryBand props={props} state={s} tone="lilac" kicker="Feelings" title="Relief, and not knowing" label="Living with uncertainty" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Clouds and sun, for the mix of relief and worry">
      <g className={still ? undefined : "lib-bulge"} opacity={sun ? 1 : 0.35}><circle cx="110" cy="80" r="34" fill={GOLD} /></g>
      <g className={still ? undefined : "lib-bob"}><path d="M150 120 a30 30 0 0 1 56 -14 a24 24 0 0 1 44 12 a20 20 0 0 1 -4 40 H160 a22 22 0 0 1 -10 -38 Z" fill={at === 2 ? "#8A6FB2" : "#FFFFFF"} stroke={PURPLE} strokeWidth="3" /></g>
      {at === 1 && <g transform="translate(60 140)"><path d="M0 0 H40 L22 26 L40 52 H0 L18 26 Z" fill="#FFFFFF" stroke={PURPLE} strokeWidth="3" /><T x={20} y={74} size={11}>wait and see</T></g>}
      {at === 3 && <path d="M110 170 c-10 -14, -32 -6, -24 12 c6 12, 24 22, 24 22 c0 0, 18 -10, 24 -22 c8 -18, -14 -26, -24 -12 z" fill={WARM} />}
      {at === 4 && <g>{[200, 240, 280].map((x, index) => <g key={x} fill={index === 1 ? PURPLE : LAVENDER}><circle cx={x} cy="186" r="9" /></g>)}<T x={240} y={212} size={11}>support groups</T></g>}
    </svg>} />;
}

// ---- Sleep: seven to nine hours ------------------------------------------------------------------------------------

function SleepMoon(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const arc = (from: number, to: number) => {
    const p = (h: number) => { const a = (h / 12) * Math.PI * 2 - Math.PI / 2; return `${110 + Math.cos(a) * 70} ${110 + Math.sin(a) * 70}`; };
    return `M${p(from)} A70 70 0 ${to - from > 6 ? 1 : 0} 1 ${p(to)}`;
  };
  return <MemoryBand props={props} state={s} tone="heather" kicker="At night" title="Seven to nine hours" label="Sleep" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock face with seven to nine hours of sleep marked">
      <circle cx="110" cy="110" r="70" fill="#FFFFFF" stroke="#5B3F8C" strokeWidth="3" />
      <path d={arc(11, 18)} transform="rotate(0 110 110)" fill="none" stroke="#5B3F8C" strokeWidth="14" strokeLinecap="round" opacity=".85" />
      <path d={arc(18, 20)} fill="none" stroke="#B99BE0" strokeWidth="14" strokeLinecap="round" />
      <circle cx="110" cy="110" r="5" fill={INK} />
      <path d="M260 40 a24 24 0 1 0 22 32 a20 20 0 1 1 -22 -32 Z" fill={GOLD} />
      {at === 0 && <T x={250} y={140}>At least 7 hours</T>}
      {at === 1 && <T x={250} y={140} size={12}>Linked, but not certain</T>}
      {at === 2 && <g><path d="M210 150 h20 M240 150 h0 M250 150 h20" stroke={WARM} strokeWidth="4" strokeLinecap="round" className={still ? undefined : "lib-bleed-push"} /><T x={250} y={180} size={11}>breathing pauses</T></g>}
      {at === 3 && <T x={250} y={140} size={12}>Hard to focus by day</T>}
    </svg>} />;
}

export function MciPieceView({ piece, ...props }: { piece: MciPiece } & PieceProps) {
  switch (piece) {
    case "forget-scale": return <ForgetScale {...props} />;
    case "mci-paths": return <MciPaths {...props} />;
    case "test-desk": return <TestDesk {...props} />;
    case "mimic-list": return <MimicList {...props} />;
    case "risk-wheel": return <RiskWheel {...props} />;
    case "key-hook": return <KeyHook {...props} />;
    case "sound-waves": return <SoundWaves {...props} />;
    case "review-calendar": return <ReviewCalendar {...props} />;
    case "worry-clouds": return <WorryClouds {...props} />;
    case "sleep-moon": return <SleepMoon {...props} />;
  }
}
