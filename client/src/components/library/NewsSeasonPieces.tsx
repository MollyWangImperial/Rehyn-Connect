import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { SEASON_PIECES, type SeasonPiece } from "@/content/season-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Seasonal affective disorder, Postnatal depression and Restless legs pages' own pieces (content/season-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Mind & mood pieces. Each is steered by the card's sections; pictures are
// calm and hopeful and never show anyone's own thoughts, body or harm.

export const isSeasonPiece = (piece: NewsPiece): piece is SeasonPiece => (SEASON_PIECES as readonly string[]).includes(piece);

const medCredit = "Illustration: Rehyn. Never stop a medicine without your doctor.";
const crisisCredit = "Illustration: Rehyn. In danger now? Call 999.";

/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** The caption under a picture. */
const Say = ({ y = 204, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
const Moon = ({ x, y, r = 12, fill = INK }: { x: number; y: number; r?: number; fill?: string }) =>
  <path d={`M${x} ${y - r} A${r} ${r} 0 1 0 ${x + r * 0.86} ${y + r * 0.57} A${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z`} fill={fill} />;
const Sun = ({ x, y, r = 12 }: { x: number; y: number; r?: number }) =>
  <g>{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 4) * Math.cos(a)} ${y + (r + 4) * Math.sin(a)} L${x + (r + 9) * Math.cos(a)} ${y + (r + 9) * Math.sin(a)}`} stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />; })}<circle cx={x} cy={y} r={r} fill={GOLD} /></g>;
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 14 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Cup = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 12} y={y - 13} width="24" height="26" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x + 12} ${y - 7} h5 a6 6 0 0 1 0 12 h-5`} fill="none" stroke={INK} strokeWidth="2.5" /></g>;
const Phone = ({ x, y, lit = false }: { x: number; y: number; lit?: boolean }) =>
  <g><rect x={x - 11} y={y - 18} width="22" height="36" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x} cy={y + 11} r="2.2" fill={lit ? WHITE : INK} /></g>;
const Cloud = ({ x, y, s, opacity = 1 }: { x: number; y: number; s: number; opacity?: number }) =>
  <g opacity={opacity} fill={SOFT}><circle cx={x - s * 0.6} cy={y} r={s * 0.55} /><circle cx={x} cy={y - s * 0.25} r={s * 0.7} /><circle cx={x + s * 0.6} cy={y} r={s * 0.55} /><rect x={x - s * 0.6} y={y - s * 0.1} width={s * 1.2} height={s * 0.65} /></g>;
const Arrow = ({ d, head }: { d: string; head: string }) =>
  <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
/** A small baby, head above a wrapped body, standing on (x, y). */
const Baby = ({ x, y, fill = INK }: { x: number; y: number; fill?: string }) =>
  <g fill={fill}><circle cx={x} cy={y - 16} r="6" /><rect x={x - 9} y={y - 10} width="18" height="12" rx="6" opacity=".75" /></g>;
/** A point `r` from (cx, cy), `deg` degrees clockwise from the top. */
const pt = (cx: number, cy: number, r: number, deg: number) => [cx + r * Math.sin(deg * Math.PI / 180), cy - r * Math.cos(deg * Math.PI / 180)];
/** A ring segment from `a0` to `a1` degrees (clockwise from the top), between radii r1 and r2. */
const wedge = (cx: number, cy: number, r1: number, r2: number, a0: number, a1: number) => {
  const [x1, y1] = pt(cx, cy, r2, a0), [x2, y2] = pt(cx, cy, r2, a1), [x3, y3] = pt(cx, cy, r1, a1), [x4, y4] = pt(cx, cy, r1, a0);
  return `M${x1} ${y1} A${r2} ${r2} 0 0 1 ${x2} ${y2} L${x3} ${y3} A${r1} ${r1} 0 0 0 ${x4} ${y4} Z`;
};
const Bath = ({ x, y }: { x: number; y: number }) =>
  <path d={`M${x - 34} ${y - 6} H${x + 34} V${y} a14 14 0 0 1 -14 14 H${x - 20} a14 14 0 0 1 -14 -14 Z`} fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />;

// ==== Seasonal affective disorder ===========================================================================

function SadYearWheel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Depression that comes with winter", "A recognised depression, not the blues", "Winter for most; summer for some", "About 1 in 15 in the UK each winter", "Treatment can help manage symptoms"];
  const winter = [0.9, 0.9, 0.45, 0.15, 0, 0, 0, 0, 0, 0.3, 0.55, 0.9];
  const shade = (m: number) => at === 2 && m >= 5 && m <= 7 ? 0.35 : at === 4 ? winter[m] * 0.45 : winter[m];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="When the seasons bring depression" label="What SAD is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A year wheel with the winter months shaded darkest, lightening through spring">
      {"JFMAMJJASOND".split("").map((letter, m) => { const a0 = 165 + m * 30; const [lx, ly] = pt(96, 104, 54, a0 + 15); return <g key={m}>
        <path d={wedge(96, 104, 30, 76, a0, a0 + 30)} fill={WHITE} stroke={LINE} strokeWidth="2" />
        {shade(m) > 0 && <path d={wedge(96, 104, 30, 76, a0, a0 + 30)} fill={INK} opacity={shade(m)} />}
        <W x={lx} y={ly + 3.5} size={10} fill={shade(m) > 0.6 ? WHITE : TEXT}>{letter}</W>
      </g>; })}
      {at === 4 ? <Sun x={96} y={104} r={10} /> : <Moon x={96} y={104} r={12} />}
      {at === 0 && <Tags x={186} y={54} labels={["Autumn: starts", "Winter: most severe", "Spring: improves"]} lit={index => index === 1} width={128} gap={36} />}
      {at === 1 && <><Box x={250} y={60} w={116} text="Winter blues" /><W x={250} y={100} size={10.5}>SAD is different</W><Box x={250} y={132} w={128} text="Recognised depression" size={10} lit /></>}
      {at === 2 && <Tags x={186} y={68} labels={["Most: in winter", "Some: in summer"]} lit={index => index === 0} width={128} gap={40} />}
      {at === 3 && <><W x={248} y={46} size={14}>1 in 15</W>{Array.from({ length: 15 }, (_, index) => <Person key={index} x={208 + (index % 5) * 20} y={86 + Math.floor(index / 5) * 34} scale={0.5} fill={index === 0 ? INK : SOFT} />)}</>}
      {at === 4 && <Tags x={186} y={54} labels={["Talking therapies", "Light therapy", "Antidepressants"]} lit={() => true} width={128} gap={36} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SadTwoStrips(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Low mood, tired, sleeping more", "Lethargic, tearful, easily annoyed", "Over about 2 weeks may be depression", "Summer SAD: insomnia, waking at night", "Dark thoughts? Tell someone, right now"];
  const rows: [string, number, (day: number) => number][] = [["Winter blues", 40, day => day < 3 ? 0.5 : 0], ["SAD", 88, () => 0.8]];
  const signs = [["Low mood", "More tired", "Sleep more"], ["Tearful", "Lethargic", "Alone more"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The signs" title="Winter blues, or something more?" label="Signs of SAD" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two strips of days: the winter blues lifting after a few days, and SAD staying low">
      {rows.map(([label, y, shade]) => <g key={label}>
        <W x={20} y={y - 6} size={10} anchor="start">{label}</W>
        {Array.from({ length: 14 }, (_, day) => <g key={day}><rect x={20 + day * 20} y={y} width="16" height="16" rx="3" fill={WHITE} stroke={INK} strokeWidth="1.5" />{shade(day) > 0 && <rect x={20 + day * 20} y={y} width="16" height="16" rx="3" fill={INK} opacity={shade(day)} />}</g>)}
      </g>)}
      {at === 2 && <><path d="M20 112 V118 H296 V112" stroke={GOLD} strokeWidth="3" fill="none" /><W x={160} y={136} size={10.5}>About 2 weeks</W></>}
      {signs && signs.map((label, index) => <Box key={label} x={62 + index * 98} y={160} w={88} text={label} lit size={10} />)}
      {at === 3 && <><Moon x={100} y={160} r={13} /><Box x={200} y={160} w={128} text="Awake at night" lit /></>}
      {at === 4 && <><Person x={60} y={176} scale={0.9} /><Person x={260} y={176} scale={0.9} fill={SOFT} /><Bubble x={160} y={150} text="Tell someone" width={110} /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function SadLightClock(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Linked to less daylight in winter", "More melatonin, less serotonin", "Light changes affect the body clock", "Family history may play a part too", "Morning light helps reset the clock"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The causes" title="Light, the body clock and mood" label="Causes of SAD" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A small winter sun, a body clock, and the brain chemicals that light affects">
      <Sun x={44} y={46} r={[8, 9, 9, 9, 14][at]} />
      {at === 0 && <Cloud x={72} y={52} s={20} />}
      {at === 2 && <circle cx="96" cy="122" r="45" fill="none" stroke={GOLD} strokeWidth="3" />}
      <Clock x={96} y={122} r={38} hand={[2, 2, 3.4, 2, 1][at]} />
      {at === 0 && <><W x={250} y={64} size={11}>Less daylight</W><Box x={250} y={100} w={132} text="1 in 10 in Scotland" lit /></>}
      {at === 1 && <>
        <rect x="196" y="54" width="40" height="96" rx="5" fill={INK} /><rect x="260" y="116" width="40" height="34" rx="5" fill={SOFT} />
        <path d="M188 150 H308" stroke={INK} strokeWidth="2" />
        <W x={216} y={168} size={10}>Melatonin</W><W x={280} y={168} size={10}>Serotonin</W>
      </>}
      {at === 2 && <><Box x={250} y={92} w={134} text="October clock change" size={10} lit /><W x={250} y={128} size={10.5}>Even one hour</W></>}
      {at === 3 && <Tags x={186} y={52} labels={["Family history", "Stress, big changes", "Other conditions"]} lit={() => true} width={126} gap={36} />}
      {at === 4 && <><Box x={252} y={60} w={110} text="Get outdoors" lit /><Person x={252} y={150} scale={1.2} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SadWintersStack(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["The pattern can take years to spot", "Questions, and maybe a questionnaire", "Same season, 2 years or longer", "A specialist team may assess you", "Refer yourself to talking therapies"];
  const shade = [0.85, 0.85, 0.4, 0, 0, 0, 0, 0, 0, 0.35, 0.6, 0.85];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diagnosis" title="Spotting the winter pattern" label="Getting SAD recognised" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three years of months, the same winter months shaded each year">
      {"JFMAMJJASOND".split("").map((letter, m) => <W key={m} x={73 + m * 20} y={22} size={9.5}>{letter}</W>)}
      {[0, 1, 2].map(row => { const y = 30 + row * 32; return <g key={row}>
        <W x={14} y={y + 15} size={10} anchor="start">Year {row + 1}</W>
        {shade.map((value, m) => <g key={m}><rect x={64 + m * 20} y={y} width="18" height="22" rx="3" fill={WHITE} stroke={LINE} strokeWidth="1.5" />{value > 0 && <rect x={64 + m * 20} y={y} width="18" height="22" rx="3" fill={INK} opacity={at === 0 ? value * (0.4 + row * 0.3) : value} />}</g>)}
        {at === 2 && row < 2 && <><rect x="61" y={y - 3} width="44" height="28" rx="5" fill="none" stroke={GOLD} strokeWidth="3" /><rect x="241" y={y - 3} width="64" height="28" rx="5" fill="none" stroke={GOLD} strokeWidth="3" /></>}
      </g>; })}
      {at === 0 && <Box x={160} y={152} w={170} text="It can take several years" lit size={10} />}
      {at === 1 && <>
        <rect x="72" y="130" width="36" height="46" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="80" y="125" width="20" height="9" rx="3" fill={INK} />
        <path d="M79 144 H101 M79 154 H101 M79 164 H95" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />
        <W x={120} y={157} size={10.5} anchor="start">Questionnaire</W><Person x={262} y={174} fill={SOFT} />
      </>}
      {at === 2 && <Box x={160} y={152} w={150} text="2 years or longer" lit />}
      {at === 3 && <><Person x={70} y={174} /><Arrow d="M98 152 H148" head="M141 146 L148 152 L141 158" /><Box x={220} y={152} w={124} text="Specialist team" lit /></>}
      {at === 4 && <><rect x="40" y="126" width="28" height="50" rx="3" fill={INK} /><circle cx="62" cy="152" r="2.5" fill={WHITE} /><W x={76} y={156} size={10.5} anchor="start">Refer yourself</W><Box x={240} y={152} w={124} text="Talking therapies" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SadWalkPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["As much natural daylight as you can", "At least 20 minutes out each morning", "A brisk 10-minute walk can help", "Let light into your home", "Helpful, but not a cure on its own"];
  const px = [100, 100, 170, 0, 100][at];
  const tree = (x: number) => <g key={x}><path d={`M${x} 166 V132`} stroke={INK} strokeWidth="4" /><circle cx={x} cy="120" r="18" fill={SOFT} /></g>;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Daylight" title="Chase the daylight" label="Daylight" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person walking outside in daylight, even under cloud">
      <path d="M0 172 C80 162, 220 180, 320 166" stroke={LINE} strokeWidth="6" fill="none" />
      <Sun x={262} y={42} r={14} />
      {at === 1 && <Cloud x={238} y={58} s={22} />}
      {(at === 0 || at === 1) && <path d={`M248 60 L${px + 16} 110`} stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 6" />}
      {at === 1 && <><Clock x={56} y={64} r={18} hand={2} /><W x={56} y={100} size={10.5}>20 minutes</W></>}
      {at === 2 && <>{tree(56)}{tree(266)}<W x={170} y={88} size={10.5}>10 minutes</W></>}
      {at === 3 && <>
        <path d="M250 58 L96 128" stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 6" />
        <rect x="30" y="108" width="92" height="58" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M22 110 L76 72 L130 110" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <rect x="58" y="122" width="38" height="26" fill={GOLD} opacity=".6" stroke={INK} strokeWidth="2" />
        <Box x={234} y={128} w={124} text="Light box? Ask a GP" size={10} />
      </>}
      {at === 4 && <><Box x={62} y={84} w={100} text="Light therapy" lit /><Box x={166} y={84} w={96} text="Counselling" lit /><Box x={262} y={84} w={84} text="Lifestyle" lit /></>}
      {at !== 3 && <Person x={px} y={156} scale={1.2} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SadLightBox(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A bright light to simulate daylight", "Mixed evidence, but many find it helps", "Speak to a GP before trying it", "10,000 lux, UV-free, UKCA or CE mark", "First thing; around 30 minutes a day"];
  const on = at === 0 || at === 3 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Light therapy" title="Light boxes: what to check first" label="Light therapy" credit="Illustration: Rehyn. Speak to a GP before trying light therapy."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A light box on a table, and what to check before using one">
      <rect x="24" y="150" width="150" height="8" rx="3" fill={INK} /><path d="M36 158 V186 M162 158 V186" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <rect x="50" y="66" width="74" height="84" rx="6" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="58" y="74" width="58" height="68" rx="4" fill={GOLD} opacity={on ? 0.85 : 0.25} />
      {on && [0, 1, 2].map(index => <path key={index} d={`M134 ${84 + index * 24} H${index === 1 ? 160 : 150}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />)}
      {at === 0 && <><W x={250} y={52} size={10.5}>Simulates daylight</W><Person x={250} y={156} scale={1.3} fill={SOFT} /></>}
      {at === 1 && <Tags x={186} y={48} labels={["Mixed evidence", "Many find it helps", "Short-term results"]} lit={index => index === 1} width={126} gap={36} />}
      {at === 2 && <>
        <Box x={250} y={60} w={124} text="Speak to a GP first" size={10} lit />
        <ellipse cx="250" cy="112" rx="26" ry="14" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="250" cy="112" r="7" fill={INK} />
        <W x={250} y={152} size={10.5}>Eyes, medicines</W>
      </>}
      {at === 3 && <Tags x={186} y={48} labels={["10,000 lux", "UV-free", "UKCA or CE mark"]} lit={() => true} width={126} gap={36} />}
      {at === 4 && <><Sun x={200} y={52} r={9} /><W x={222} y={56} size={10.5} anchor="start">Morning</W><Clock x={250} y={110} r={22} hand={3} /><W x={250} y={154} size={10.5}>About 30 minutes</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SadTalkChairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Talk with a trained professional", "CBT, counselling or guided self-help", "Refer yourself, or ask your GP", "Usually 5 to 15 sessions of CBT", "Work, university, charities, privately"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Talking therapies" title="Talking therapy, and how to start" label="Talking therapies" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people in chairs talking, and the ways into talking therapy">
      <ellipse cx="160" cy="186" rx="70" ry="6" fill={LINE} />
      <Person x={70} y={162} scale={1.3} /><Person x={250} y={162} scale={1.3} fill={SOFT} />
      <rect x="46" y="176" width="48" height="6" rx="3" fill={INK} /><rect x="226" y="176" width="48" height="6" rx="3" fill={INK} />
      {at === 0 && <Bubble x={150} y={72} text="Thoughts and feelings" width={150} />}
      {at === 1 && <><Box x={70} y={56} w={60} text="CBT" lit /><Box x={160} y={56} w={100} text="Counselling" lit /><Box x={260} y={56} w={84} text="Self-help" lit /></>}
      {at === 2 && <><Box x={96} y={60} w={118} text="Refer yourself" lit /><W x={166} y={64} size={10.5}>or</W><Box x={234} y={60} w={104} text="Ask your GP" /></>}
      {at === 3 && <>{Array.from({ length: 15 }, (_, index) => <rect key={index} x={40 + index * 16} y="30" width="10" height="28" rx="3" fill={index < 5 ? INK : SOFT} />)}
        <W x={45} y={76} size={10}>1</W><W x={109} y={76} size={10}>5</W><W x={189} y={76} size={10}>sessions</W><W x={269} y={76} size={10}>15</W></>}
      {at === 4 && <><Box x={66} y={56} w={84} text="Employer" lit /><Box x={160} y={56} w={92} text="University" lit /><Box x={254} y={56} w={80} text="Charity" lit /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function SadWinterDose(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Often only when symptoms are severe", "Start of winter, through to spring", "1 to 2 weeks to start, up to 8 to work", "Seen every 1 to 2 weeks at first", "Reduce slowly, with your doctor"];
  const seasons: [string, number, number][] = [["Autumn", 20, 84], ["Winter", 108, 104], ["Spring", 216, 84]];
  const litSeason = (index: number) => (at === 1 && index === 1) || (at === 4 && index === 2);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Antidepressants" title="Antidepressants across a winter" label="Antidepressants for SAD" credit={medCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Autumn, winter and spring, with an antidepressant started at the start of winter">
      {seasons.map(([label, x, w], index) => <g key={label}><rect x={x} y="24" width={w} height="26" rx="8" fill={litSeason(index) ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x + w / 2} y={41} size={10.5} fill={litSeason(index) ? WHITE : TEXT}>{label}</W></g>)}
      {at === 0 && <><g transform="translate(160 92) scale(1.5)"><Pill x={0} y={0} /></g><Box x={160} y={136} w={150} text="Often when severe" lit /></>}
      {at === 1 && <><rect x="108" y="60" width="192" height="6" rx="3" fill={GOLD} /><Pill x={108} y={90} /><W x={96} y={122} size={10.5} anchor="start">Start of winter</W><W x={300} y={122} size={10.5} anchor="end">to spring</W></>}
      {at === 2 && <>
        <path d="M40 96 C120 94, 200 76, 274 62" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" /><circle cx="274" cy="62" r="5" fill={GOLD} />
        {Array.from({ length: 8 }, (_, index) => <g key={index}><rect x={40 + index * 30} y="106" width="24" height="24" rx="5" fill={INK} opacity={0.2 + index * 0.1} /><W x={52 + index * 30} y={146} size={9.5}>{index + 1}</W></g>)}
        <W x={145} y={164} size={10}>weeks</W>
      </>}
      {at === 3 && <><Clock x={90} y={114} r={22} hand={2} /><W x={90} y={158} size={10.5}>Every 1 to 2 weeks</W><Person x={214} y={160} scale={1.2} /><Person x={274} y={160} scale={1.2} fill={SOFT} /></>}
      {at === 4 && <><path d="M222 64 H242 V84 H262 V104 H282 V124 H302" stroke={GOLD} strokeWidth="4" fill="none" /><Box x={124} y={120} w={176} text="A plan with your doctor" lit size={10} /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SadDayDial(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Regular sleep, meals and activity", "Same bedtime and wake time each day", "Morning light; no screens before bed", "6 hours before bed: no tea or coffee", "Active by early afternoon, with others"];
  const P = (hour: number, r: number) => pt(96, 104, r, hour * 15);
  const [sx, sy] = P(23, 68), [ex, ey] = P(7, 68);
  const [ax, ay] = P(7, 74), [bx, by] = P(14, 74);
  const [sunX, sunY] = P(9, 48), [phoneX, phoneY] = P(22, 46), [cupX, cupY] = P(17, 46), [walkX, walkY] = P(10.5, 46);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Routine" title="A steady day through the dark months" label="A winter routine" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A 24-hour dial with the same sleep times every day, morning light and a calm evening">
      <circle cx="96" cy="104" r="74" fill={WHITE} stroke={INK} strokeWidth="3" />
      <path d={`M96 104 L${sx} ${sy} A68 68 0 0 1 ${ex} ${ey} Z`} fill={SOFT} opacity=".55" />
      {at === 1 && <path d={`M${sx} ${sy} L96 104 L${ex} ${ey}`} stroke={GOLD} strokeWidth="3.5" fill="none" strokeLinejoin="round" />}
      {Array.from({ length: 8 }, (_, index) => { const [x1, y1] = P(index * 3, 74), [x2, y2] = P(index * 3, 66); return <path key={index} d={`M${x1} ${y1} L${x2} ${y2}`} stroke={INK} strokeWidth="2" />; })}
      <Moon x={96} y={58} r={10} />
      <g opacity={at === 2 || at === 4 ? 1 : 0.4}><Sun x={sunX} y={sunY} r={8} /></g>
      {at === 0 && [8, 13, 18].map(hour => { const [x, y] = P(hour, 60); return <circle key={hour} cx={x} cy={y} r="5" fill={GOLD} />; })}
      {at === 2 && <><Phone x={phoneX} y={phoneY} /><Cross x={phoneX} y={phoneY} s={11} /></>}
      {at === 3 && <><Cup x={cupX} y={cupY} /><Cross x={cupX} y={cupY} s={13} /></>}
      {at === 4 && <><path d={`M${ax} ${ay} A74 74 0 0 1 ${bx} ${by}`} stroke={GOLD} strokeWidth="6" fill="none" strokeLinecap="round" /><Person x={walkX} y={walkY + 8} scale={0.55} /></>}
      {at === 0 && <Tags x={194} y={50} labels={["Sleep", "Meals", "Activity"]} lit={() => true} width={116} gap={36} />}
      {at === 1 && <><Box x={252} y={70} w={116} text="Same times daily" lit /><W x={252} y={110} size={11.5}>7 to 9 hours</W><W x={252} y={128} size={10}>for most adults</W></>}
      {at === 2 && <Tags x={194} y={62} labels={["Morning light", "Screens off"]} lit={() => true} width={116} gap={40} />}
      {at === 3 && <><Box x={252} y={80} w={120} text="6 hours before bed" size={10} lit /><W x={252} y={116} size={10}>No tea, coffee or alcohol</W></>}
      {at === 4 && <Tags x={194} y={50} labels={["Active early", "Time with others", "Green spaces"]} lit={() => true} width={116} gap={36} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SadAutumnCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["It often comes back each winter", "Plan treatment with your GP", "Shift 10 to 15 minutes later each day", "Consider 10 micrograms of vitamin D", "Daylight, friends, and on to spring"];
  const months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];
  const lit = (index: number) => (at === 1 && index === 0) || (at === 2 && index === 1) || (at === 4 && index >= 6);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Planning ahead" title="Getting ready before autumn" label="Planning for winter" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Months from September to April, with plans pinned for the winter">
      {months.map((month, index) => <g key={month}>
        <rect x={18 + index * 36} y="26" width="32" height="30" rx="5" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x={18 + index * 36} y="26" width="32" height="30" rx="5" fill={INK} opacity={lit(index) ? 1 : index >= 2 && index <= 5 ? 0.15 : 0} />
        <W x={34 + index * 36} y={45} size={10} fill={lit(index) ? WHITE : TEXT}>{month}</W>
      </g>)}
      {at === 0 && <><path d="M290 62 C262 116, 62 116, 34 62" stroke={GOLD} strokeWidth="3" fill="none" /><path d="M28 72 L34 62 L44 68" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /><W x={160} y={132} size={11}>Every winter</W></>}
      {at === 1 && <><Person x={70} y={166} scale={1.1} /><Person x={128} y={166} scale={1.1} fill={SOFT} /><Box x={240} y={130} w={120} text="Plan with a GP" lit /></>}
      {at === 2 && <><Clock x={64} y={124} r={24} hand={0.6} /><W x={104} y={120} size={11} anchor="start">10 to 15 minutes later</W><W x={104} y={138} size={10} anchor="start">each day, the week before</W></>}
      {at === 3 && <>
        <path d="M54 66 V72 H266 V66" stroke={GOLD} strokeWidth="3" fill="none" /><W x={160} y={90} size={10.5}>October to early March</W>
        <rect x="64" y="104" width="26" height="10" rx="3" fill={INK} /><rect x="60" y="112" width="34" height="46" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={77} y={140} size={12}>D</W>
        <W x={108} y={132} size={11} anchor="start">10 micrograms</W><W x={108} y={150} size={10} anchor="start">of vitamin D a day</W>
      </>}
      {at === 4 && <>
        <Person x={70} y={168} /><Person x={112} y={168} fill={SOFT} /><Sun x={276} y={110} r={14} />
        {[208, 236].map(x => <g key={x}><path d={`M${x} 176 V152`} stroke={INK} strokeWidth="3" /><circle cx={x} cy="146" r="7" fill={GOLD} /></g>)}
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SadMovePlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Exercise can lift your mood", "Start small, build towards 150 minutes", "A balanced diet with all food groups", "Vitamin D in autumn and winter", "Cutting down on alcohol may lift mood"];
  const focus = [0, 0, 1, 2, -1][at];
  const fade = (index: number) => ({ opacity: focus === index ? 1 : 0.35 });
  return <MemoryBand props={props} state={s} tone="theme" kicker="Food and activity" title="Move, eat well, go easy on alcohol" label="Food, activity and energy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person walking, a plate with all the food groups, and the sun for vitamin D">
      <g {...fade(0)}><Person x={60} y={120} scale={1.2} /></g>
      <g {...fade(1)}><circle cx="160" cy="104" r="32" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="160" cy="104" r="22" fill="none" stroke={LINE} strokeWidth="2" />
        <circle cx="150" cy="98" r="6" fill={GOLD} /><ellipse cx="168" cy="100" rx="9" ry="5" fill={SOFT} /><rect x="152" y="108" width="16" height="7" rx="3" fill={INK} /></g>
      <g {...fade(2)}><Sun x={260} y={102} r={15} /></g>
      {at === 0 && <><Arrow d="M96 110 V74" head="M89 82 L96 74 L103 82" /><W x={60} y={160} size={10.5}>Lifts mood</W></>}
      {at === 1 && <><W x={60} y={158} size={10}>Start with 10 minutes</W><W x={60} y={174} size={10}>Aim: 150 min a week</W></>}
      {at === 2 && <W x={160} y={160} size={10.5}>All the food groups</W>}
      {at === 3 && <><W x={260} y={158} size={10.5}>10 micrograms</W><W x={260} y={174} size={10}>Oct to early March</W></>}
      {at === 4 && <><path d="M112 26 H136 L132 54 H116 Z" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><Cross x={124} y={40} s={12} /><Arrow d="M170 56 V26" head="M163 34 L170 26 L177 34" /><W x={184} y={45} size={10.5} anchor="start">Better mood</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function SadAnyHour(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Not helping? See a GP; tell someone", "Struggling? Samaritans will listen", "Call 111, the mental health option", "Samaritans 116 123; text SHOUT 85258", "In danger now: 999 or A&E"];
  const on = [[], [2], [1], [2, 3], [0]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Help, any hour" title="If winter gets too heavy" label="Where to get help" credit={crisisCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A clock for any hour, and where to get help: 999, NHS 111, Samaritans and Shout">
      {at === 3 && <circle cx="80" cy="70" r="47" fill="none" stroke={GOLD} strokeWidth="3" />}
      <Clock x={80} y={70} r={40} hand={2.4} />
      <W x={80} y={128} size={10.5}>Day or night</W>
      <Tags x={172} y={30} labels={["999 or A&E", "111, mental health", "Samaritans 116 123", "Text SHOUT to 85258"]} lit={index => on.includes(index)} width={140} gap={36} />
      {at === 0 && <><Box x={80} y={152} w={110} text="See a GP" lit /><Box x={80} y={180} w={110} text="Tell someone" lit /></>}
      <Say y={210}>{caps[at]}</Say>
    </svg>} />;
}

// ==== Postnatal depression ==================================================================================

function PndFirstYear(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["10 to 15 in 100 women having a baby", "In pregnancy, or up to a year after", "It is not your fault", "Usually better in 3 to 6 months"];
  const X = (month: number) => 110 + month * 15.8;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="Common, treatable, and not your fault" label="What postnatal depression is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from pregnancy to the baby's first birthday, and how it gets better">
      {at === 0 ? <>
        {Array.from({ length: 100 }, (_, index) => <circle key={index} cx={34 + (index % 10) * 11} cy={30 + Math.floor(index / 10) * 11} r="3.5" fill={index < 15 ? INK : LINE} opacity={index >= 10 && index < 15 ? 0.45 : 1} />)}
        <W x={226} y={70} size={18}>10 to 15</W><W x={226} y={94} size={11}>in every 100</W><W x={226} y={112} size={10.5}>women having a baby</W>
      </> : <>
        {at === 1 && <><rect x="40" y="112" width="260" height="16" rx="4" fill={SOFT} opacity=".55" /><rect x="110" y="112" width="31.6" height="16" fill={INK} opacity=".8" /><W x={196} y={70} size={10.5}>Often starts within 1 or 2 months</W></>}
        <rect x="24" y="112" width="86" height="16" rx="4" fill="none" stroke={LINE} strokeWidth="2" />
        <path d="M24 120 H300" stroke={INK} strokeWidth="3" />
        {Array.from({ length: 12 }, (_, index) => <path key={index} d={`M${X(index + 1)} 115 V125`} stroke={INK} strokeWidth="2" />)}
        <circle cx="110" cy="120" r="6" fill={GOLD} /><Baby x={110} y={104} />
        <W x={62} y={146} size={10}>Pregnancy</W><W x={300} y={146} size={10} anchor="end">1 year</W>
        {at === 2 && <><Person x={150} y={86} scale={1.1} /><Person x={204} y={86} scale={1.1} fill={SOFT} /><HeartShape x={177} y={30} size={26} fill={GOLD} stroke={GOLD} width={2} /></>}
        {at === 3 && <><path d={`M${X(3)} 100 V94 H${X(6)} V100`} stroke={GOLD} strokeWidth="3" fill="none" /><W x={X(4.5)} y={86} size={10.5}>3 to 6 months</W><Sun x={270} y={56} r={14} /></>}
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PndBluesDays(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["Common; often starts 3 to 4 days after", "Usually gone by about day 10", "Over 2 weeks: tell a health visitor", "Postpartum psychosis is an emergency"];
  const shade = (index: number) => at === 0 ? (index === 2 || index === 3 ? 0.6 : 0) : at === 1 ? (index >= 2 && index <= 8 ? 0.55 - (index - 2) * 0.07 : 0) : at === 2 ? 0.5 : 0.2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Baby blues" title="Two weeks that tell the difference" label="Baby blues or postnatal depression" credit="Illustration: Rehyn. Postpartum psychosis is a medical emergency."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The first two weeks after birth, with the baby blues passing, and when to tell someone">
      {Array.from({ length: 14 }, (_, index) => <g key={index} opacity={at === 3 ? 0.4 : 1}>
        <rect x={22 + index * 20} y="104" width="16" height="40" rx="4" fill={WHITE} stroke={at === 1 && index === 9 ? GOLD : INK} strokeWidth={at === 1 && index === 9 ? 3 : 1.5} />
        {shade(index) > 0 && <rect x={22 + index * 20} y="104" width="16" height="40" rx="4" fill={INK} opacity={shade(index)} />}
        <W x={30 + index * 20} y={158} size={9.5}>{index + 1}</W>
      </g>)}
      <W x={160} y={178} size={10}>Days after birth</W>
      {at === 0 && <Cloud x={80} y={72} s={18} />}
      {at === 1 && <><Cloud x={210} y={78} s={14} opacity={0.3} /><W x={206} y={52} size={10.5}>Day 10</W><Sun x={268} y={56} r={11} /></>}
      {at === 2 && <><path d="M290 30 V100" stroke={INK} strokeWidth="4" strokeLinecap="round" /><path d="M188 36 H284 V62 H188 L176 49 Z" fill={INK} /><W x={232} y={53} size={10.5} fill={WHITE}>Tell someone</W></>}
      {at === 3 && <><Box x={160} y={42} w={150} text="Medical emergency" lit /><Box x={160} y={76} w={160} text="Same-day assessment" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PndTwoParents(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Low mood, hard to enjoy anything", "Exhausted, yet unable to sleep", "Overwhelming worry, and guilt", "Partners can have depression too", "Thoughts of harm? Tell someone"];
  const sets = [["Low mood", "Hard to enjoy", "Hopeless"], ["Exhausted", "Cannot sleep", "Appetite changes"], ["Worry", "Guilt", "Less confident"], ["Low", "Irritable", "Avoiding people"]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="The signs" title="The signs, in you or your partner" label="Signs of postnatal depression" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A parent and a partner, with the signs of postnatal depression between them">
      <Person x={60} y={156} scale={1.4} fill={at === 3 ? SOFT : INK} />
      <Baby x={100} y={180} fill={SOFT} />
      <Person x={260} y={156} scale={1.4} fill={at === 3 ? INK : SOFT} />
      {at === 1 && <Moon x={60} y={52} r={13} />}
      {at < 4 && <Tags x={108} y={40} labels={sets[at]} lit={() => true} width={104} gap={34} />}
      {at === 4 && <><Bubble x={150} y={70} text="Tell someone" width={110} /><Box x={160} y={130} w={124} text="Ask your doctor" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PndStressStack(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const caps = ["No single cause; stresses can add up", "Past depression, or a physical cause", "Hard events, or not enough support", "Risk factors add stress, not certainty"];
  const count = [3, 5, 7, 9][at], before = [0, 3, 5, 7][at];
  const sets = [["Caring for a new baby", "Lack of sleep", "Hormone changes"], ["Depression before", "Underactive thyroid", "Low vitamin B12"], ["Difficult life events", "Little support", "Premature or unwell baby"], ["Birth trauma", "Money or housing", "In danger? Call 999"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The causes" title="Many small stresses, adding up" label="Causes of postnatal depression" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Small blocks stacking up, each a stress that can add to the load">
      <path d="M20 174 H120" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {Array.from({ length: count }, (_, index) => <rect key={index} x={30 + (index % 2) * 8} y={172 - (index + 1) * 16} width="74" height="14" rx="4" fill={index >= before ? INK : SOFT} />)}
      <Tags x={132} y={40} labels={sets[at]} lit={() => true} width={176} gap={36} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PndSayIt(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Tell a GP, midwife or health visitor", "Answer their questions honestly", "Your check at 6 to 8 weeks", "Getting help is best for you both", "Refer yourself, or try PANDAS"];
  const sets = [["GP", "Midwife", "Health visitor"], ["Questions", "Questionnaire", "Answer honestly"], ["6 to 8 weeks", "Postnatal check", "Say how you feel"], ["Care team support", "Best for you both", "Second opinion"], ["Refer yourself", "PANDAS WhatsApp", "Free callback"]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Getting help" title="Saying how you really feel" label="Getting help" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A parent and baby, and the people to tell about how you are feeling">
      <Person x={52} y={168} scale={1.3} /><Baby x={90} y={186} fill={SOFT} />
      {at === 0 && <Bubble x={112} y={70} text="How I feel" width={96} />}
      {at === 1 && <>
        <rect x="106" y="52" width="42" height="56" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="116" y="46" width="22" height="10" rx="3" fill={INK} />
        {[66, 80, 94].map(y => <g key={y}><path d={`M112 ${y} l3 3 l5 -6`} stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d={`M124 ${y} H142`} stroke={LINE} strokeWidth="2.5" strokeLinecap="round" /></g>)}
      </>}
      {at === 2 && <>
        <rect x="100" y="54" width="54" height="50" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="100" y="54" width="54" height="13" rx="4" fill={INK} />
        {Array.from({ length: 6 }, (_, index) => <circle key={index} cx={112 + (index % 3) * 15} cy={78 + Math.floor(index / 3) * 14} r="3.5" fill={index === 4 ? GOLD : LINE} />)}
      </>}
      {at === 3 && <HeartShape x={126} y={84} size={48} fill={GOLD} stroke={GOLD} width={2} />}
      {at === 4 && <Phone x={128} y={80} lit />}
      <Tags x={180} y={34} labels={sets[at]} lit={() => true} width={128} gap={36} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PndChairsCot(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Talking helps, however low you feel", "CBT: usually 5 to 15 sessions", "New parents usually get priority", "Parent and baby groups can help", "Guidelines: seen within a month"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Talking therapies" title="Talking helps, and new parents come first" label="Talking therapies and groups" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A parent with a baby seat beside them, talking with a therapist">
      <Person x={60} y={166} scale={1.2} /><Person x={262} y={166} scale={1.2} fill={SOFT} />
      <rect x="38" y="178" width="44" height="6" rx="3" fill={INK} /><rect x="240" y="178" width="44" height="6" rx="3" fill={INK} />
      <path d="M96 170 A16 16 0 0 1 128 170" stroke={at === 2 ? GOLD : INK} strokeWidth="3" fill="none" />
      <path d="M94 170 H130 L124 184 H100 Z" fill={WHITE} stroke={at === 2 ? GOLD : INK} strokeWidth="2.5" strokeLinejoin="round" /><circle cx="112" cy="166" r="5" fill={INK} />
      {at === 0 && <Bubble x={160} y={70} text="Talking it through" width={136} />}
      {at === 1 && <>
        <W x={160} y={30} size={12}>5 to 15 sessions</W>
        <Person x={80} y={82} scale={0.7} />
        <rect x="145" y="56" width="30" height="20" rx="2" fill={INK} /><path d="M139 79 H181" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <Phone x={240} y={64} lit />
        <W x={80} y={104} size={10}>In person</W><W x={160} y={104} size={10}>Online</W><W x={240} y={104} size={10}>Phone</W>
      </>}
      {at === 2 && <><Box x={160} y={46} w={180} text="Priority for new parents" lit /><W x={160} y={84} size={10.5}>You can often bring your baby</W></>}
      {at === 3 && <>{[118, 160, 202].map((x, index) => <Person key={x} x={x} y={index === 1 ? 82 : 92} scale={0.7} fill={index === 1 ? INK : SOFT} />)}<Baby x={246} y={96} fill={SOFT} /></>}
      {at === 4 && <><Box x={160} y={46} w={150} text="Seen within a month" lit /><W x={160} y={84} size={10.5}>Sometimes long waits</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PndFeedPlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["If depression is severe or not lifting", "Many are safe while breastfeeding", "A decision you make with your doctor", "At least 2 weeks to start working", "About 6 months after feeling better"];
  const marks: [number, string][] = [[30, "Start"], [92, "2 weeks"], [154, "8 weeks"], [216, "Feel better"], [280, "6 months"]];
  const dot = (index: number) => [[0], [0], [], [0, 1, 2], [3, 4]][at].includes(index);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Antidepressants" title="Medicines that fit with feeding" label="Antidepressants and breastfeeding" credit={medCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from starting an antidepressant to feeling better, with a parent and baby">
      <path d="M30 52 H280" stroke={LINE} strokeWidth="3" />
      {at === 3 && <path d="M30 52 H154" stroke={GOLD} strokeWidth="5" strokeLinecap="round" />}
      {at === 4 && <path d="M216 52 H280" stroke={GOLD} strokeWidth="5" strokeLinecap="round" />}
      {marks.map(([x, label], index) => <g key={label}><circle cx={x} cy="52" r="7" fill={dot(index) ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={76} size={9.5}>{label}</W></g>)}
      {at === 0 && <><g transform="translate(90 136) scale(1.6)"><Pill x={0} y={0} /></g><Box x={220} y={136} w={116} text="Not addictive" lit /></>}
      {at === 1 && <><Person x={80} y={176} scale={1.2} /><Baby x={114} y={180} fill={SOFT} /><Box x={230} y={140} w={124} text="Tell your doctor" lit /></>}
      {at === 2 && <><Box x={62} y={136} w={96} text="How severe" /><Box x={162} y={136} w={96} text="What helped" /><Box x={260} y={136} w={84} text="Feeding" /></>}
      {at === 3 && <><Clock x={90} y={140} r={20} hand={2} /><W x={210} y={144} size={10.5}>Seen every 1 to 2 weeks</W></>}
      {at === 4 && <><path d="M210 110 H230 V126 H250 V142 H270 V158 H296" stroke={GOLD} strokeWidth="4" fill="none" /><W x={110} y={136} size={11}>Reduce gradually</W><W x={110} y={154} size={10.5}>with your doctor</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PndRestList(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Rest when your baby sleeps", "Eat regularly; walk with the pram", "Let others help; try to do less", "Make time for small things you enjoy", "Alcohol and drugs can make it worse"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Self-care" title="Rest, meals and small breaks" label="Self-care" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five kinds of self-care, from rest to small breaks">
      {at === 0 && <>
        <Moon x={40} y={46} r={13} />
        <rect x="26" y="100" width="8" height="64" rx="3" fill={INK} /><rect x="26" y="136" width="144" height="12" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <circle cx="54" cy="124" r="10" fill={INK} /><rect x="66" y="118" width="84" height="16" rx="8" fill={SOFT} /><path d="M32 148 V166 M164 148 V166" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      </>}
      {at === 1 && <>
        <circle cx="60" cy="74" r="26" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="60" cy="74" r="17" fill="none" stroke={LINE} strokeWidth="2" /><circle cx="54" cy="70" r="5" fill={GOLD} /><ellipse cx="67" cy="78" rx="7" ry="4" fill={SOFT} />
        <path d="M96 142 A28 28 0 0 0 152 142 Z" fill={INK} /><path d="M152 142 L166 122" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="106" cy="172" r="7" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="142" cy="172" r="7" fill={WHITE} stroke={INK} strokeWidth="3" />
      </>}
      {at === 2 && <>
        <path d="M36 100 H88 L84 150 H40 Z" fill={INK} strokeLinejoin="round" /><path d="M50 100 V92 a12 12 0 0 1 24 0 V100" stroke={INK} strokeWidth="3" fill="none" />
        <Person x={136} y={160} scale={1.2} fill={SOFT} />
      </>}
      {at === 3 && <>
        <circle cx="58" cy="128" r="10" fill={INK} /><rect x="64" y="80" width="5" height="48" fill={INK} /><path d="M69 80 q18 6 12 24" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <Sun x={132} y={64} r={14} />
      </>}
      {at === 4 && <><path d="M64 76 H96 L91 124 H69 Z" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" /><Cross x={80} y={100} s={18} /></>}
      <Tags x={186} y={20} labels={["Rest", "Eat and move", "Let others help", "Small breaks", "No alcohol or drugs"]} lit={index => index === at} width={126} gap={33} />
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PndPartnerPair(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Up to 1 in 5 women, 1 in 10 men", "A partner's struggles can go unnoticed", "Listen, reassure, help with the baby", "Share your worries; see a GP if low", "Talking therapies; a PANDAS dads call"];
  const partnerLit = at === 0 || at === 3 || at === 4;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Partners" title="Partners need support too" label="Partners, dads and other parents" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A mother and her partner with their baby, and support for them both">
      {at === 1 && <circle cx="176" cy="140" r="42" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 7" />}
      <Person x={96} y={166} scale={1.3} />
      <Baby x={136} y={170} fill={SOFT} />
      <g opacity={at === 1 ? 0.55 : 1}><Person x={176} y={166} scale={1.3} fill={partnerLit ? INK : SOFT} /></g>
      {at === 0 && <>
        {Array.from({ length: 5 }, (_, index) => <Person key={`w${index}`} x={24 + index * 18} y={50} scale={0.45} fill={index === 0 ? INK : SOFT} />)}
        <W x={120} y={46} size={10.5} anchor="start">Up to 1 in 5 women</W>
        {Array.from({ length: 10 }, (_, index) => <Person key={`m${index}`} x={24 + index * 18} y={96} scale={0.45} fill={index === 0 ? INK : SOFT} />)}
        <W x={204} y={92} size={10.5} anchor="start">1 in 10 men</W>
      </>}
      {at === 1 && <Tags x={222} y={24} labels={["Short leave", "Money worries", "Focus on baby"]} lit={() => false} width={92} gap={32} />}
      {at === 2 && <><Bubble x={226} y={64} text="You will get better" width={132} /><path d="M224 140 H254 L251 176 H227 Z" fill={INK} /><path d="M232 140 V132 a7 7 0 0 1 14 0 V140" stroke={INK} strokeWidth="2.5" fill="none" /></>}
      {at === 3 && <><Arrow d="M204 136 C222 118, 234 102, 244 90" head="M236 92 L245 89 L244 98" /><Box x={262} y={70} w={110} text="Talk to your GP" lit /><Person x={270} y={170} scale={1.1} fill={SOFT} /></>}
      {at === 4 && <Tags x={198} y={40} labels={["Talking therapies", "Dads' support call"]} lit={() => true} width={116} gap={36} />}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PndBondThread(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Every parent bonds at their own pace", "Depression can make bonding harder", "Talk, sing, cuddle, and respond", "Reconnect when you can", "Midwife, health visitor or family hub"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Bonding" title="A bond that grows at its own pace" label="Bonding with your baby" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A thread between a parent and a baby that grows stronger over time">
      <Person x={60} y={162} scale={1.3} />
      <path d="M226 156 H286 L278 184 H234 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="244" cy="148" r="8" fill={INK} /><rect x="252" y="142" width="28" height="13" rx="6" fill={SOFT} />
      <path d="M86 132 C130 92, 200 92, 238 138" stroke={GOLD} strokeWidth={[2.5, 2, 4, 5, 6][at]} fill="none" strokeLinecap="round" strokeDasharray={at === 1 ? "4 7" : undefined} opacity={at === 1 ? 0.5 : 1} />
      {at === 0 && <HeartShape x={162} y={70} size={22} fill={GOLD} stroke={GOLD} width={2} />}
      {at === 1 && <Cloud x={60} y={80} s={20} opacity={0.8} />}
      {at === 2 && <><Box x={100} y={46} w={56} text="Talk" lit /><Box x={164} y={46} w={56} text="Sing" lit /><Box x={232} y={46} w={70} text="Cuddle" lit /></>}
      {at === 3 && <circle cx="162" cy="102" r="7" fill={WHITE} stroke={GOLD} strokeWidth="3" />}
      {at === 4 && <><Box x={72} y={44} w={84} text="Midwife" lit /><Box x={176} y={44} w={112} text="Health visitor" lit /><Box x={280} y={44} w={76} text="Family hub" size={10} lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function PndHelpLadder(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Urgent help: GP, A&E, or call 111", "Life at risk: call 999 or go to A&E", "Postpartum psychosis: an emergency", "See a GP at once; in danger, call 999", "Samaritans 116 123, any time"];
  const labels = ["999 or A&E", "Same-day GP", "NHS 111, mental health", "Samaritans 116 123", "Text SHOUT to 85258"];
  const on = [[0, 1, 2], [0], [], [0, 1], [3, 4]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Urgent help" title="When it cannot wait" label="When to get help straight away" credit={crisisCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ladder of help, from Samaritans and Shout to NHS 111, a same-day GP, and 999 or A&E">
      <g opacity={at === 2 ? 0.3 : 1}>
        <path d="M30 16 V186 M76 16 V186" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        {labels.map((label, index) => <g key={label}><path d={`M30 ${31 + index * 32} H76`} stroke={LINE} strokeWidth="4" />{on.includes(index) && <circle cx="53" cy={31 + index * 32} r="6" fill={GOLD} />}</g>)}
      </g>
      {at === 2 ? <>
        <Box x={180} y={44} w={170} text="Medical emergency" lit />
        <Tags x={100} y={84} labels={["Can get worse fast", "May not realise", "Others may spot it"]} lit={() => false} width={160} gap={32} />
      </> : <Tags x={96} y={18} labels={labels} lit={index => on.includes(index)} width={160} gap={32} />}
      {at === 3 && <><W x={286} y={35} size={11}>Now</W><W x={286} y={67} size={11}>Today</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function PndPlanAhead(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Thinking of a baby? Talk to a GP early", "Specialist advice, even when well", "Tell your doctor; do not stop suddenly", "Support, therapy and a wellbeing plan", "A care plan, made at about 32 weeks"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="A future pregnancy" title="Planning ahead to stay well" label="A future pregnancy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline from before pregnancy to after the birth, with plans and support along the way">
      <path d="M20 120 H70" stroke={INK} strokeWidth="3" strokeDasharray="4 5" />
      <rect x="70" y="112" width="166" height="16" rx="5" fill={SOFT} opacity=".7" />
      <path d="M236 120 H304" stroke={INK} strokeWidth="3" /><circle cx="236" cy="120" r="6" fill={GOLD} />
      <W x={44} y={146} size={10}>Before</W><W x={153} y={146} size={10}>Pregnancy</W><W x={272} y={146} size={10}>After</W>
      {at === 0 && <><Person x={44} y={96} scale={0.9} /><Box x={132} y={46} w={110} text="Talk to a GP" lit /></>}
      {at === 1 && <><Box x={153} y={62} w={140} text="Specialist advice" lit /><W x={153} y={92} size={10}>Perinatal or mental health team</W></>}
      {at === 2 && <><Pill x={100} y={72} /><Box x={196} y={72} w={124} text="Tell your doctor" lit /></>}
      {at === 3 && <><Box x={120} y={60} w={120} text="Wellbeing plan" lit />{[[250, 88], [272, 72], [294, 88]].map(([x, y], index) => <Person key={x} x={x} y={y} scale={0.6} fill={index === 1 ? INK : SOFT} />)}</>}
      {at === 4 && <>
        <path d="M203 112 V52" stroke={INK} strokeWidth="3" /><path d="M203 52 L229 60 L203 68 Z" fill={GOLD} /><W x={203} y={44} size={10.5}>32 weeks</W>
        <rect x="256" y="46" width="30" height="36" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M262 58 H280 M262 66 H280 M262 74 H274" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />
        <W x={271} y={98} size={10}>Care plan</W>
      </>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

// ==== Restless legs syndrome ================================================================================

function RlsUrgeSofa(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["An overwhelming urge to move the legs", "Tingling, itching or creepy-crawly", "Worse at rest, and in the evening", "Up to 1 in 10; women twice as likely", "Not life threatening; often treatable"];
  const wave = at <= 2 ? GOLD : LINE;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="The urge that comes when you rest" label="What restless legs syndrome is" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person resting on a sofa, with restless feelings in the legs">
      <rect x="22" y="92" width="126" height="50" rx="12" fill={SOFT} opacity=".7" />
      <rect x="22" y="136" width="132" height="22" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M30 158 V170 M146 158 V170" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <circle cx="60" cy="94" r="12" fill={INK} /><path d="M46 136 C46 112, 52 106, 60 106 C70 106, 76 114, 76 136 Z" fill={INK} />
      <path d="M70 132 H146 L150 172" stroke={INK} strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M160 146 q6 8 0 16 M168 142 q8 12 0 24 M176 138 q10 16 0 32" stroke={wave} strokeWidth={at === 2 ? 3.5 : 3} fill="none" strokeLinecap="round" />
      {at === 0 && <><Box x={254} y={70} w={116} text="Urge to move" lit /><W x={254} y={104} size={11}>Irresistible</W></>}
      {at === 1 && <Tags x={196} y={46} labels={["Tingling", "Itching", "Creepy-crawly"]} lit={() => true} width={116} gap={36} />}
      {at === 2 && <><Moon x={36} y={46} r={12} /><Tags x={196} y={46} labels={["Worse at rest", "Worse at night", "Moving eases it"]} lit={index => index < 2} width={116} gap={36} /></>}
      {at === 3 && <><W x={254} y={38} size={14}>1 in 10</W>{Array.from({ length: 10 }, (_, index) => <Person key={index} x={210 + (index % 5) * 22} y={82 + Math.floor(index / 5) * 38} scale={0.5} fill={index === 0 ? INK : SOFT} />)}<W x={254} y={154} size={10}>Women twice as likely</W></>}
      {at === 4 && <><Sun x={254} y={62} r={14} /><Box x={254} y={120} w={120} text="Often treatable" lit /></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function RlsCauseTags(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Linked to iron and dopamine levels", "Often no clear cause; runs in families", "Can come with another condition", "Some medicines, caffeine, alcohol", "Ask your GP before stopping a medicine"];
  const sets = [["Iron", "Dopamine", "Falls by evening"], ["Family history", "Starts before 40", "No clear cause"], ["Iron deficiency anaemia", "Kidney disease", "Diabetes, thyroid", "Pregnancy"], ["Some medicines", "Caffeine, alcohol", "Smoking, stress"], ["Check with your GP", "Dose or medicine change"]];
  const top = at === 2 ? 24 : 34, gap = at === 2 ? 32 : 36;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="The causes" title="Iron, dopamine and the usual triggers" label="Causes of restless legs" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A leg, with the things linked to restless legs pointing to it">
      <path d="M54 24 L62 100 L56 166 L98 174" stroke={SOFT} strokeWidth="22" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {at < 4 && sets[at].map((label, index) => { const y = top + index * gap + 13; const ty = 60 + index * 28; return <g key={label}><path d={`M132 ${y} L76 ${ty}`} stroke={GOLD} strokeWidth="2" strokeDasharray="3 4" /><circle cx="76" cy={ty} r="3.5" fill={GOLD} /></g>; })}
      {at === 4 && <Pill x={104} y={44} />}
      <Tags x={132} y={top} labels={sets[at]} lit={index => at === 4 ? index === 0 : true} width={176} gap={gap} />
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function RlsNightStrip(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Symptoms often start as you go to bed", "Leg jerks every 10 to 60 seconds", "Tired and hard to focus the next day", "Same bedtime; dark, quiet bedroom", "Stopping you sleeping? See a GP"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sleep" title="Why the night is the hardest part" label="Restless legs and sleep" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A night from bedtime to morning, with the legs moving and sleep broken">
      <Moon x={28} y={40} r={10} /><Sun x={296} y={40} r={7} />
      <path d="M46 40 H276" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {at === 0 && <path d="M46 40 H100" stroke={GOLD} strokeWidth="6" strokeLinecap="round" />}
      {at === 1 && Array.from({ length: 11 }, (_, index) => <path key={index} d={`M${60 + index * 21} 40 V24`} stroke={INK} strokeWidth="3" strokeLinecap="round" />)}
      <W x={46} y={64} size={10} anchor="start">Bedtime</W><W x={276} y={64} size={10} anchor="end">Morning</W>
      {at === 0 && <>
        <rect x="24" y="120" width="8" height="56" rx="3" fill={INK} /><rect x="24" y="150" width="120" height="12" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="60" y="140" width="80" height="12" rx="6" fill={SOFT} />
        <Arrow d="M150 146 C162 136, 170 136, 178 142" head="M171 136 L179 142 L171 147" />
        <Person x={204} y={172} scale={1.2} /><path d="M192 158 L180 134 M216 158 L228 134" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      </>}
      {at === 1 && <>
        <path d="M60 50 V56 H81 V50" stroke={GOLD} strokeWidth="2.5" fill="none" />
        <W x={160} y={92} size={11}>Every 10 to 60 seconds</W><W x={160} y={112} size={10}>Up to 80% also have leg jerks</W>
        <circle cx="70" cy="152" r="10" fill={INK} /><rect x="82" y="144" width="110" height="16" rx="8" fill={SOFT} />
        <path d="M200 144 q6 8 0 16 M208 140 q8 12 0 24" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />
      </>}
      {at === 2 && <><Cloud x={100} y={100} s={14} /><Person x={100} y={170} scale={1.2} /><rect x="124" y="150" width="46" height="6" rx="3" fill={INK} /><Box x={244} y={140} w={140} text="Hard to concentrate" lit /></>}
      {at === 3 && <Tags x={60} y={90} labels={["Same times each day", "Dark, quiet bedroom", "No caffeine after midday"]} lit={() => true} width={200} gap={32} />}
      {at === 4 && <><Box x={100} y={130} w={104} text="See a GP" lit /><Arrow d="M156 130 H186" head="M179 124 L186 130 L179 136" /><Box x={240} y={130} w={104} text="Sleep tests" /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function RlsFiveChecks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["No single test; based on symptoms", "An urge at rest, eased by moving", "Blood tests, including ferritin", "Sleep tests are not usually needed", "Diagnosis can take 10 to 20 years"];
  const list = at === 0 ? ["Your symptoms", "Medical history", "Family history", "Examination"] : ["Urge to move", "Starts at rest", "Eased by moving", "Evening or night", "Nothing else explains"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Diagnosis" title="No single test, but clear signs" label="Getting it diagnosed" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A checklist of what doctors look for, beside a blood test and a sleep test">
      <rect x="16" y="28" width="168" height="160" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="74" y="20" width="52" height="16" rx="4" fill={INK} />
      <g opacity={at >= 2 ? 0.35 : 1}>{list.map((label, index) => { const y = 58 + index * 25; return <g key={label}>
        <rect x="28" y={y - 10} width="14" height="14" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />
        {at <= 1 && <path d={`M31 ${y - 3} l3 4 l6 -8`} stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
        <W x={50} y={y + 2} size={10} anchor="start">{label}</W>
      </g>; })}</g>
      {at <= 1 && <><Person x={254} y={150} scale={1.4} fill={SOFT} /><W x={254} y={186} size={10.5}>Your GP</W></>}
      {at === 2 && <>
        <rect x="243" y="34" width="22" height="12" rx="3" fill={INK} /><rect x="243" y="44" width="22" height="70" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="246" y="76" width="16" height="35" rx="7" fill={INK} />
        <W x={254} y={132} size={10.5}>Ferritin</W><W x={254} y={150} size={10}>Kidney function</W>
      </>}
      {at === 3 && <><Moon x={254} y={52} r={12} /><W x={254} y={96} size={10}>Sleep tests if needed</W><Box x={254} y={140} w={100} text="Specialist" lit /></>}
      {at === 4 && <><W x={254} y={74} size={20}>10 to 20</W><W x={254} y={96} size={11}>years</W><Box x={254} y={140} w={112} text="Often treatable" lit /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function RlsDayHabits(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Mild? Small changes may be enough", "No caffeine after midday", "A gentle walk early in the evening", "A warm bath; a cool, dark bedroom", "No gadget is a proven cure"];
  const tiles = ["Morning", "Afternoon", "Evening", "Bedtime"];
  const lit = (index: number) => (at === 2 && index === 2) || (at === 3 && index === 3);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Self-help" title="Small habits, calmer legs" label="Habits that can ease it" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day from morning to bedtime, with the habits that can ease restless legs">
      {tiles.map((tile, index) => <g key={tile}><rect x={22 + index * 70} y="24" width="66" height="30" rx="8" fill={lit(index) ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={55 + index * 70} y={43} size={10} fill={lit(index) ? WHITE : TEXT}>{tile}</W></g>)}
      {at === 0 && <Box x={160} y={110} w={130} text="Small changes" lit />}
      {at === 1 && <>
        <path d="M90 20 V64" stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 4" /><W x={90} y={80} size={10}>Midday</W>
        <Cup x={55} y={104} />{[125, 195, 265].map(x => <g key={x}><Cup x={x} y={104} /><Cross x={x + 2} y={104} s={14} /></g>)}
        <W x={160} y={150} size={10.5}>No alcohol 2 hours before bed</W><W x={160} y={168} size={10}>Get help to stop smoking</W>
      </>}
      {at === 2 && <><path d="M130 176 H290" stroke={LINE} strokeWidth="4" strokeLinecap="round" /><W x={195} y={94} size={10.5}>Gentle walk</W><Person x={195} y={162} scale={1.1} /></>}
      {at === 3 && <>
        <Moon x={110} y={88} r={10} /><W x={110} y={124} size={10.5}>Cool, dark, quiet room</W>
        <path d="M250 98 q-4 -8 0 -16 M265 98 q-4 -8 0 -16 M280 98 q-4 -8 0 -16" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <Bath x={265} y={116} /><W x={265} y={154} size={10.5}>Warm bath</W>
      </>}
      {at === 4 && <><ellipse cx="90" cy="110" rx="26" ry="12" fill="none" stroke={INK} strokeWidth="4" /><Cross x={90} y={110} s={18} /><Box x={226} y={110} w={136} text="Ask a doctor first" lit /><W x={226} y={142} size={10}>before supplements</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function RlsIronStore(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["In the brain, iron helps dopamine work", "Ferritin shows how much iron is stored", "Low? Iron tablets, on a GP's advice", "Usually about 6 months, for anaemia", "Leafy greens, pulses, fortified cereal"];
  const level = [0.5, 0.3, 0.55, 0.65, 0.5][at] * 104;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Iron" title="The iron store behind the legs" label="Iron and blood tests" credit="Illustration: Rehyn. Take iron only on a doctor's advice."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A store jar of iron, called ferritin, partly full, and ways to fill it">
      <rect x="40" y="42" width="68" height="14" rx="4" fill={INK} />
      <rect x="34" y="54" width="80" height="112" rx="12" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="38" y={162 - level} width="72" height={level} rx="8" fill={SOFT} />
      <W x={74} y={186} size={10.5}>Ferritin</W>
      {at === 0 && <><Box x={174} y={64} w={64} text="Iron" /><Arrow d="M208 64 H222" head="M216 58 L223 64 L216 70" /><Box x={268} y={64} w={84} text="Dopamine" lit /><Moon x={176} y={118} r={11} /><W x={196} y={122} size={10.5} anchor="start">Both dip at night</W></>}
      {at === 1 && <>
        <path d="M176 52 C168 64, 166 70, 166 74 a10 10 0 0 0 20 0 C186 70, 184 64, 176 52 Z" fill={INK} /><W x={194} y={72} size={10.5} anchor="start">Blood iron varies</W>
        <Box x={236} y={120} w={132} text="Measure ferritin" lit /><W x={236} y={156} size={10}>Early morning, fasting</W>
      </>}
      {at === 2 && <><Arrow d="M150 70 H124" head="M131 64 L124 70 L131 76" /><Pill x={174} y={70} /><Pill x={222} y={70} /><Box x={232} y={116} w={130} text="On a GP's advice" lit /><W x={232} y={152} size={10.5}>Then recheck</W></>}
      {at === 3 && <>
        {Array.from({ length: 6 }, (_, index) => <rect key={index} x={148 + index * 26} y="52" width="22" height="22" rx="4" fill={INK} />)}
        <W x={224} y={96} size={11}>About 6 months</W><W x={224} y={128} size={10.5}>Orange juice may help</W><W x={224} y={148} size={10.5}>Keep from children</W>
      </>}
      {at === 4 && <>
        <path d="M156 76 C156 56, 176 50, 186 52 C186 70, 172 80, 156 76 Z" fill={SOFT} />
        {[[214, 70], [224, 63], [232, 72], [222, 77]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" fill={GOLD} />)}
        <path d="M256 62 H292 a18 18 0 0 1 -36 0 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={171} y={104} size={10}>Greens</W><W x={223} y={104} size={10}>Pulses</W><W x={274} y={104} size={10}>Cereal</W>
        <W x={228} y={144} size={10}>Tea, coffee: harder to absorb</W>
      </>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function RlsMedCards(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["For moderate or severe symptoms", "Pregabalin or gabapentin, often first", "Painkillers, with care over dependence", "Over time, some can make it worse", "Never stop ropinirole suddenly"];
  const cards: [number, string, string][] = [[18, "Pregabalin,", "gabapentin"], [116, "Painkillers,", "sleep medicine"], [214, "Dopamine", "medicines"]];
  const litCard = [-1, 0, 1, 2, 2][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Medicines" title="Medicines that help, and when they backfire" label="Medicines for restless legs" credit={medCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three kinds of medicine for restless legs, one of which can make it worse over time">
      {cards.map(([x, line1, line2], index) => { const lit = index === litCard; return <g key={line1}>
        <rect x={x} y="24" width="88" height="96" rx="8" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <Pill x={x + 44} y={50} fill={lit ? WHITE : INK} />
        <W x={x + 44} y={86} size={10} fill={lit ? WHITE : TEXT}>{line1}</W><W x={x + 44} y={102} size={10} fill={lit ? WHITE : TEXT}>{line2}</W>
      </g>; })}
      {at === 0 && <Box x={160} y={154} w={170} text="Always ask your doctor" lit />}
      {at === 1 && <><Moon x={60} y={154} r={12} /><W x={80} y={158} size={10.5} anchor="start">Taken in the evening</W></>}
      {at === 2 && <Box x={160} y={154} w={150} text="Risk of dependence" lit />}
      {at === 3 && <><path d="M240 176 C232 140, 290 138, 284 170" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M277 164 L284 171 L290 163" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <W x={120} y={150} size={10.5}>Augmentation:</W><W x={120} y={168} size={10.5}>worse over time</W></>}
      {at === 4 && <><path d="M214 134 H234 V146 H254 V158 H274 V170 H300" stroke={GOLD} strokeWidth="4" fill="none" /><W x={110} y={150} size={10.5}>Reduce gradually</W><W x={110} y={168} size={10.5}>with your doctor</W></>}
      <Say>{caps[at]}</Say>
    </svg>} />;
}

function RlsEaseRing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const caps = ["Walk, stretch or massage your legs", "A warm bath, or a hot or cold compress", "Read, or try a game or a puzzle", "Yoga, tai chi or slow breathing", "Not helping? See a GP"];
  const tiles: [number, number, number, string][] = [[160, 34, 70, "Move"], [262, 100, 96, "Warm or cold"], [160, 166, 78, "Distract"], [58, 100, 70, "Relax"]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="In the moment" title="Four ways through an attack" label="Easing an attack" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four ways to ease an attack around a circle: move, warmth or cold, distraction and relaxing">
      <circle cx="160" cy="100" r="66" fill="none" stroke={LINE} strokeWidth="2.5" strokeDasharray="4 6" />
      {tiles.map(([x, y, w, label], index) => <Box key={label} x={x} y={y} w={w} text={label} lit={index === at} />)}
      {at === 0 && <><ellipse cx="150" cy="96" rx="7" ry="12" fill={INK} /><ellipse cx="170" cy="108" rx="7" ry="12" fill={INK} /></>}
      {at === 1 && <><path d="M144 88 q-4 -8 0 -16 M160 88 q-4 -8 0 -16 M176 88 q-4 -8 0 -16" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" /><Bath x={160} y={104} /></>}
      {at === 2 && <><rect x="138" y="84" width="44" height="32" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M160 84 V116 M144 94 H154 M144 102 H154 M166 94 H176 M166 102 H176" stroke={INK} strokeWidth="2" /></>}
      {at === 3 && <><circle cx="160" cy="100" r="24" fill={INK} opacity=".85" className={still ? undefined : "lib-v2-breathe is-slow"} /><W x={160} y={104} size={10} fill={WHITE}>1 to 5</W></>}
      {at === 4 && <Box x={160} y={100} w={92} text="See a GP" lit />}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function RlsAisleSeat(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Cinemas, cars and planes can be hard", "Ask for an aisle seat", "Stop regularly for a good stretch", "Choose non-drowsy cold remedies", "Discuss anti-sickness medicines first"];
  const seats = [0, 1, 2, 3, 4, 5].map(index => 24 + index * 32).concat([266]);
  return <MemoryBand props={props} state={s} tone="theme" kicker="Evenings and travel" title="The aisle seat is your friend" label="Evenings, travel and long sitting" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Rows of seats from above with the aisle seat free, and a car stopping to stretch">
      <g opacity={at >= 2 ? 0.35 : 1}>
        <path d="M226 22 V92 M258 22 V92" stroke={LINE} strokeWidth="2" strokeDasharray="4 4" /><W x={242} y={61} size={10}>Aisle</W>
        {[30, 62].map(y => seats.map(x => { const aisle = at === 1 && y === 30 && x === 184; return <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="26" height="22" rx="5" fill={aisle ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
          {!aisle && <circle cx={x + 13} cy={y + 11} r="6" fill={SOFT} />}
        </g>; }))}
      </g>
      {at === 0 && <><Box x={70} y={128} w={84} text="Cinema" lit /><Box x={160} y={128} w={60} text="Car" lit /><Box x={250} y={128} w={76} text="Plane" lit /></>}
      {at === 1 && <><rect x="60" y="112" width="100" height="50" rx="6" fill={INK} /><W x={110} y={141} size={11} fill={WHITE}>Alert card</W><W x={244} y={140} size={10}>Feet flat on the ground</W></>}
      {at === 2 && <>
        <path d="M14 168 H306" stroke={INK} strokeWidth="3" />
        <rect x="62" y="140" width="64" height="18" rx="6" fill={INK} /><path d="M74 140 L82 128 H108 L116 140 Z" fill={INK} />
        <circle cx="76" cy="160" r="6" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="112" cy="160" r="6" fill={WHITE} stroke={INK} strokeWidth="3" />
        {[190, 260].map(x => <g key={x}><path d={`M${x} 168 V126`} stroke={INK} strokeWidth="2.5" /><path d={`M${x} 126 L${x + 16} 132 L${x} 138 Z`} fill={GOLD} /></g>)}
        <W x={226} y={118} size={10.5}>Stretch</W>
      </>}
      {at === 3 && <><Box x={96} y={136} w={110} text="Non-drowsy" lit /><rect x="204" y="116" width="44" height="30" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M226 116 V146" stroke={INK} strokeWidth="2" /><W x={226} y={166} size={10.5}>Distraction</W></>}
      {at === 4 && <><Box x={160} y={128} w={180} text="Anti-sickness medicines" lit /><W x={160} y={162} size={10.5}>Discuss before an operation</W></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function RlsTrimesters(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["Common from 27 weeks; usually passes", "Iron, folate, hormones or circulation", "Ask before taking any supplements", "Stretching, massage, a warm bath", "Talk to your midwife or doctor"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Pregnancy" title="Restless legs late in pregnancy" label="Restless legs in pregnancy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Pregnancy in three trimesters, with restless legs most common late on and easing after the birth">
      {["First", "Second", "Third"].map((label, index) => <g key={label}><rect x={24 + index * 74} y="96" width="72" height="20" rx="5" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={60 + index * 74} y={88} size={10}>{label}</W></g>)}
      <rect x="174" y="96" width="72" height="20" rx="5" fill={at === 0 ? INK : SOFT} opacity={at === 0 ? 0.85 : 0.6} />
      <circle cx="250" cy="106" r="6" fill={GOLD} /><path d="M258 106 H304" stroke={INK} strokeWidth="3" strokeDasharray="4 5" /><W x={281} y={88} size={10}>4 weeks</W>
      {at === 0 && <>
        <rect x="258" y="100" width="46" height="12" rx="4" fill={SOFT} opacity=".45" />
        <path d="M174 90 V122" stroke={GOLD} strokeWidth="3" /><W x={174} y={138} size={10}>27 weeks</W><W x={250} y={138} size={10}>Birth</W>
        {Array.from({ length: 5 }, (_, index) => <Person key={index} x={40 + index * 22} y={180} scale={0.55} fill={index === 0 ? INK : SOFT} />)}
        <W x={220} y={176} size={10.5}>About 1 in 5, last trimester</W>
      </>}
      {at === 1 && <><Box x={66} y={152} w={96} text="Iron, folate" lit /><Box x={166} y={152} w={86} text="Hormones" lit /><Box x={262} y={152} w={90} text="Circulation" lit /></>}
      {at === 2 && <><Pill x={100} y={152} /><Box x={186} y={152} w={92} text="Ask first" lit /></>}
      {at === 3 && <><Bath x={90} y={150} /><W x={210} y={156} size={11}>Warm, not hot</W></>}
      {at === 4 && <><Person x={70} y={178} scale={0.9} /><Person x={110} y={178} scale={0.9} fill={SOFT} /><Box x={230} y={154} w={130} text="Midwife or doctor" lit /></>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function RlsCloudLift(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["A hidden strain on mood", "Sleepless nights can lower mood", "Losing sleep or feeling low? See a GP", "Talking therapies; refer yourself", "Support groups; help is there now"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood" title="When broken nights wear you down" label="Tiredness, mood and coping" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A tired person under a cloud that lifts as help is added">
      <Cloud x={90} y={76} s={[28, 30, 22, 16, 10][at]} opacity={[1, 1, 0.8, 0.6, 0.4][at]} />
      <Person x={90} y={172} scale={1.3} />
      {at === 0 && <Tags x={176} y={46} labels={["A hidden disease", "More anxiety", "More depression"]} lit={() => true} width={136} gap={36} />}
      {at === 1 && <>{[206, 244, 282].map(x => <Moon key={x} x={x} y={50} r={10} />)}<W x={244} y={88} size={11}>Sleepless nights</W><W x={244} y={112} size={10.5}>Tired, low, anxious</W></>}
      {at === 2 && <><Arrow d="M128 120 C150 100, 170 90, 184 86" head="M176 84 L185 86 L180 94" /><Box x={240} y={80} w={104} text="See a GP" lit /><W x={240} y={116} size={10.5}>Sleep, mood, focus</W></>}
      {at === 3 && <><Box x={242} y={60} w={124} text="Refer yourself" lit /><Person x={212} y={160} /><Person x={272} y={160} fill={SOFT} /></>}
      {at === 4 && <><Sun x={244} y={44} r={12} /><Box x={244} y={92} w={132} text="Help is there now" lit />{[206, 244, 282].map((x, index) => <Person key={x} x={x} y={index === 1 ? 160 : 166} scale={0.8} fill={index === 1 ? INK : SOFT} />)}</>}
      <Say y={206}>{caps[at]}</Say>
    </svg>} />;
}

function RlsThreeDoors(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const caps = ["RLS-UK: run by volunteers", "Ask on the RLS-UK forum first", "Stories from people living with it", "Sleep Helpline: 03303 530 541", "Urgent help is there, day or night"];
  const doors: [number, string][] = [[36, "RLS-UK"], [130, "Helpline"], [224, "Urgent help"]];
  const litDoor = [0, 0, 0, 1, 2][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Support" title="You are not the only one awake" label="Support and charities" credit="Illustration: Rehyn. In danger now? Call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three doors to support: RLS-UK, the National Sleep Helpline and urgent help">
      {doors.map(([x, label], index) => { const lit = index === litDoor; return <g key={label}>
        <rect x={x} y="22" width="60" height="82" rx="4" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={x + 50} cy="66" r="3" fill={lit ? WHITE : INK} />
        <W x={x + 30} y={122} size={10.5}>{label}</W>
      </g>; })}
      {at === 0 && <Box x={160} y={154} w={150} text="Run by volunteers" lit />}
      {at === 1 && <><Bubble x={110} y={152} text="Forum first" width={100} /><Box x={240} y={156} w={100} text="Alert card" /></>}
      {at === 2 && <><rect x="110" y="138" width="60" height="40" rx="5" fill={INK} /><path d="M134 148 L150 158 L134 168 Z" fill={WHITE} /><W x={234} y={162} size={10.5}>Video stories</W></>}
      {at === 3 && <><Phone x={90} y={158} lit /><W x={190} y={156} size={12}>03303 530 541</W><W x={190} y={176} size={10}>Not a crisis service</W></>}
      {at === 4 && <><Box x={88} y={146} w={140} h={24} text="111, mental health" size={10} lit /><Box x={232} y={146} w={140} h={24} text="Samaritans 116 123" size={10} lit />
        <Box x={88} y={176} w={140} h={24} text="Text SHOUT 85258" size={10} lit /><Box x={232} y={176} w={140} h={24} text="999 or A&E" size={10} lit /></>}
      <Say y={208}>{caps[at]}</Say>
    </svg>} />;
}

export function SeasonPieceView({ piece, ...props }: { piece: SeasonPiece } & PieceProps) {
  switch (piece) {
    case "sad-year-wheel": return <SadYearWheel {...props} />;
    case "sad-two-strips": return <SadTwoStrips {...props} />;
    case "sad-light-clock": return <SadLightClock {...props} />;
    case "sad-winters-stack": return <SadWintersStack {...props} />;
    case "sad-walk-path": return <SadWalkPath {...props} />;
    case "sad-light-box": return <SadLightBox {...props} />;
    case "sad-talk-chairs": return <SadTalkChairs {...props} />;
    case "sad-winter-dose": return <SadWinterDose {...props} />;
    case "sad-day-dial": return <SadDayDial {...props} />;
    case "sad-autumn-calendar": return <SadAutumnCalendar {...props} />;
    case "sad-move-plate": return <SadMovePlate {...props} />;
    case "sad-any-hour": return <SadAnyHour {...props} />;
    case "pnd-first-year": return <PndFirstYear {...props} />;
    case "pnd-blues-days": return <PndBluesDays {...props} />;
    case "pnd-two-parents": return <PndTwoParents {...props} />;
    case "pnd-stress-stack": return <PndStressStack {...props} />;
    case "pnd-say-it": return <PndSayIt {...props} />;
    case "pnd-chairs-cot": return <PndChairsCot {...props} />;
    case "pnd-feed-plan": return <PndFeedPlan {...props} />;
    case "pnd-rest-list": return <PndRestList {...props} />;
    case "pnd-partner-pair": return <PndPartnerPair {...props} />;
    case "pnd-bond-thread": return <PndBondThread {...props} />;
    case "pnd-help-ladder": return <PndHelpLadder {...props} />;
    case "pnd-plan-ahead": return <PndPlanAhead {...props} />;
    case "rls-urge-sofa": return <RlsUrgeSofa {...props} />;
    case "rls-cause-tags": return <RlsCauseTags {...props} />;
    case "rls-night-strip": return <RlsNightStrip {...props} />;
    case "rls-five-checks": return <RlsFiveChecks {...props} />;
    case "rls-day-habits": return <RlsDayHabits {...props} />;
    case "rls-iron-store": return <RlsIronStore {...props} />;
    case "rls-med-cards": return <RlsMedCards {...props} />;
    case "rls-ease-ring": return <RlsEaseRing {...props} />;
    case "rls-aisle-seat": return <RlsAisleSeat {...props} />;
    case "rls-trimesters": return <RlsTrimesters {...props} />;
    case "rls-cloud-lift": return <RlsCloudLift {...props} />;
    case "rls-three-doors": return <RlsThreeDoors {...props} />;
  }
}
