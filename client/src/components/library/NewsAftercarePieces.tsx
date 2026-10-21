import type { NewsPiece } from "@/content/ischaemic-news";
import { AFTERCARE_PIECES, type AftercarePiece } from "@/content/aftercare-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Chips, Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Prostate cancer and Tiredness after treatment pages' own pieces (content/aftercare-features.ts), drawn in the page's card colours (the
// --t-… variables), like the Mind & mood pieces. Each is steered by the card's sections; pictures show ideas,
// calmly, and never anyone's own body, scans or results.

export const isAftercarePiece = (piece: NewsPiece): piece is AftercarePiece => (AFTERCARE_PIECES as readonly string[]).includes(piece);

/** A battery, filled to `level` (0 to 1): upright, or lying on its side. */
const Battery = ({ x, y, w, h, level, upright = false }: { x: number; y: number; w: number; h: number; level: number; upright?: boolean }) => upright
  ? <g><rect x={x + w / 2 - 12} y={y - 8} width="24" height="9" rx="3" fill={INK} /><rect x={x} y={y} width={w} height={h} rx="9" fill={WHITE} stroke={INK} strokeWidth="3" />
    <rect x={x + 7} y={y + 7 + (h - 14) * (1 - level)} width={w - 14} height={(h - 14) * level} rx="4" fill={INK} /></g>
  : <g><rect x={x + w - 1} y={y + h / 2 - 8} width="8" height="16" rx="3" fill={INK} /><rect x={x} y={y} width={w} height={h} rx="7" fill={WHITE} stroke={INK} strokeWidth="3" />
    <rect x={x + 5} y={y + 5} width={(w - 10) * level} height={h - 10} rx="3" fill={INK} /></g>;

/** A water drop of radius r, its round end centred on (x, y). */
const Drop = ({ x, y, r, fill = INK }: { x: number; y: number; r: number; fill?: string }) =>
  <path d={`M${x} ${y - r * 2} C${x + r * 0.4} ${y - r}, ${x + r} ${y - r * 0.6}, ${x + r} ${y} A${r} ${r} 0 0 1 ${x - r} ${y} C${x - r} ${y - r * 0.6}, ${x - r * 0.4} ${y - r}, ${x} ${y - r * 2} Z`} fill={fill} />;

const Cloud = ({ x, y, fill = SOFT }: { x: number; y: number; fill?: string }) =>
  <g fill={fill}><circle cx={x - 18} cy={y + 4} r="14" /><circle cx={x} cy={y - 6} r="20" /><circle cx={x + 20} cy={y + 4} r="14" /><rect x={x - 32} y={y + 4} width="66" height="14" rx="7" /></g>;

const Sun = ({ x, y, r = 16 }: { x: number; y: number; r?: number }) =>
  <g><circle cx={x} cy={y} r={r} fill={GOLD} />{Array.from({ length: 8 }, (_, index) => { const a = index * Math.PI / 4; return <path key={index} d={`M${x + (r + 5) * Math.cos(a)} ${y + (r + 5) * Math.sin(a)} L${x + (r + 11) * Math.cos(a)} ${y + (r + 11) * Math.sin(a)}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}</g>;

/** An open notebook, centred on (x, y). */
const Diary = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 44} y={y - 26} width="44" height="52" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x} y={y - 26} width="44" height="52" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
    {[0, 1, 2, 3].map(index => <path key={index} d={`M${x - 36} ${y - 14 + index * 10} H${x - 8} M${x + 8} ${y - 14 + index * 10} H${x + 36}`} stroke={SOFT} strokeWidth="2.5" strokeLinecap="round" />)}</g>;

const Plate = ({ x, y, r }: { x: number; y: number; r: number }) =>
  <g><circle cx={x} cy={y} r={r} fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx={x} cy={y} r={r * 0.72} fill="none" stroke={LINE} strokeWidth="2.5" /></g>;

/** A point t (0 to 1) along a cubic curve. */
const cubic = (t: number, [a, b, c, d]: number[][]) => [0, 1].map(k => (1 - t) ** 3 * a[k] + 3 * (1 - t) ** 2 * t * b[k] + 3 * (1 - t) * t ** 2 * c[k] + t ** 3 * d[k]);

// ==== Prostate cancer =======================================================================================

function FourPaths(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const labels = ["Watching", "Surgery", "Radiotherapy", "Hormone therapy"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What you had" title="Four paths after a prostate diagnosis" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="One path splitting four ways: watching, surgery, radiotherapy and hormone therapy">
      <Person x={56} y={128} scale={1.3} />
      {labels.map((label, index) => <path key={label} d={`M84 104 C128 104, 128 ${37 + index * 36}, 170 ${37 + index * 36}`} stroke={at === index ? INK : at === 4 ? GOLD : LINE} strokeWidth={at === index ? 4 : 3} fill="none" />)}
      <Tags x={170} y={24} labels={labels} lit={index => at === index} width={132} gap={36} />
      <W x={160} y={200} size={11}>{["Some cancers are watched, not treated", "Surgery removes the whole prostate", "X-ray beams from outside the body", "Taking away testosterone", "No overall best treatment"][at]}</W>
    </svg>} />;
}

function PsaLines(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="PSA" title="Reading your PSA after treatment" label="PSA after treatment" credit="Illustration: Rehyn. The shape of the idea, not anyone's results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="How PSA can fall after surgery or radiotherapy, and what a rise looks like">
      <path d="M40 30 V160 H300" stroke={LINE} strokeWidth="3" fill="none" />
      <W x={40} y={22} size={10}>PSA</W><W x={300} y={176} size={10} anchor="end">Time</W>
      {at === 0 && <><Drop x={170} y={110} r={30} /><W x={170} y={115} size={13} fill={WHITE}>PSA</W></>}
      {at === 1 && <><path d="M44 50 C80 56, 100 150, 130 156 H296" stroke={INK} strokeWidth="4" fill="none" /><path d="M130 160 V166" stroke={TEXT} strokeWidth="2" /><W x={130} y={178} size={10}>4 to 8 weeks</W></>}
      {at === 2 && <><path d="M44 50 C120 90, 170 122, 200 128 C214 118, 226 118, 240 128 H296" stroke={INK} strokeWidth="4" fill="none" /><W x={220} y={110} size={10}>bounce</W><path d="M200 160 V166" stroke={TEXT} strokeWidth="2" /><W x={196} y={178} size={10}>18 months to 3 years</W></>}
      {at === 3 && <><path d="M44 150 H150 L200 136 L250 112 L296 84" stroke={INK} strokeWidth="4" fill="none" />{[[200, 136], [250, 112], [296, 84]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="7" fill={GOLD} stroke={WHITE} strokeWidth="2" />)}</>}
      {at === 4 && <><Clock x={170} y={86} r={30} hand={2} /><W x={170} y={140} size={12}>48 hours</W></>}
      {at === 1 && <circle cx="140" cy="156" r="7" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />}
      <W x={160} y={204} size={11}>{["A blood test for a protein, PSA", "After surgery: too low to detect", "Radiotherapy: a slower fall, not zero", "More than one rise is usually needed", "No vigorous exercise 48 hours before"][at]}</W>
    </svg>} />;
}

function GradeSum(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const box = (x: number, y: number, text: string, lit = false) => <g><rect x={x - 25} y={y} width="50" height="50" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={x} y={y + 33} size={22} fill={lit ? WHITE : TEXT}>{text}</W></g>;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your results" title="Grade, stage and your CPG" label="Test results" credit="Illustration: Rehyn. An example from the article, not anyone's results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="How the Gleason score, grade group, stage and CPG are put together">
      {at === 0 && <>{box(70, 46, "3")}<W x={110} y={80} size={20}>+</W>{box(150, 46, "4")}<W x={195} y={80} size={20}>=</W>{box(240, 46, "7", true)}
        <W x={70} y={118} size={10}>Most common</W><W x={150} y={118} size={10}>Highest other</W><W x={240} y={118} size={10}>Gleason score</W></>}
      {at === 1 && <>{[0, 1, 2, 3, 4].map(index => <g key={index}><rect x={32 + index * 54} y={130 - (24 + index * 18)} width="46" height={24 + index * 18} rx="6" fill={index === 0 ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={55 + index * 54} y={148} size={11}>{index + 1}</W></g>)}
        <W x={32} y={168} size={10} anchor="start">Least aggressive</W><W x={288} y={168} size={10} anchor="end">Most aggressive</W></>}
      {at === 2 && <>{[["T", "In and around", 70], ["N", "Lymph nodes", 160], ["M", "Other parts", 250]].map(([letter, note, x]) => <g key={letter}>
        <rect x={(x as number) - 32} y="46" width="64" height="50" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={x as number} y={80} size={22}>{letter}</W><W x={x as number} y={118} size={10}>{note}</W></g>)}
        <W x={70} y={132} size={10}>the prostate</W></>}
      {at === 3 && <>{["PSA", "Grade", "T stage"].map((label, index) => <g key={label}><rect x="26" y={34 + index * 40} width="84" height="28" rx="9" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={68} y={52 + index * 40} size={10.5}>{label}</W>
        <path d={`M112 ${48 + index * 40} C150 ${48 + index * 40}, 150 88, 182 88`} stroke={SOFT} strokeWidth="3" fill="none" /></g>)}
        <rect x="182" y="54" width="110" height="68" rx="12" fill={INK} /><W x={237} y={84} size={16} fill={WHITE}>CPG</W><W x={237} y={104} size={11} fill={WHITE}>1 to 5</W></>}
      {at === 4 && <><circle cx="100" cy="92" r="52" fill={TINT} stroke={INK} strokeWidth="3" /><circle cx="100" cy="92" r="28" fill={SOFT} />
        <W x={176} y={80} size={11} anchor="start">Clear margin:</W><W x={176} y={98} size={10.5} anchor="start">normal tissue</W><W x={176} y={114} size={10.5} anchor="start">all the way round</W></>}
      <W x={160} y={202} size={11}>{["Most common + highest other grade", "Five groups, 1 least aggressive", "T, N and M: how far it has spread", "PSA, grade and T stage give a CPG", "A clearer picture after surgery"][at]}</W>
    </svg>} />;
}

function WatchTimeline(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const dots = [40, 70, 100, 130, 168, 214];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Active surveillance" title="Watched, not treated, still in control" label="Active surveillance" credit="Illustration: Rehyn. An example timetable, as in Prostate Cancer UK's guide."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline of regular checks, with the door to treatment always open">
      <path d="M24 80 H230" stroke={LINE} strokeWidth="6" strokeLinecap="round" /><path d="M150 68 V92" stroke={SOFT} strokeWidth="2" strokeDasharray="3 3" />
      {dots.map(x => <circle key={x} cx={x} cy="80" r="7" fill={at === 2 ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" />)}
      <W x={85} y={106} size={10}>Year 1</W><W x={190} y={106} size={10}>Year 2</W>
      {at === 2 && <><W x={85} y={124} size={10}>Every 3 to 4 months</W><W x={190} y={124} size={10}>Every 6 months</W></>}
      {at === 0 && <g><ellipse cx="96" cy="44" rx="24" ry="13" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="96" cy="44" r="7" fill={INK} /></g>}
      <rect x="248" y="36" width="48" height="88" rx="4" fill={at === 3 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="286" cy="82" r="3.5" fill={at === 3 ? WHITE : INK} />
      <W x={272} y={140} size={10}>Treatment</W>
      {at === 1 && [0, 1, 2, 3, 4].map(index => <g key={index} opacity={index < 3 ? 1 : 0.45}><rect x={20 + index * 58} y="150" width="50" height="28" rx="9" fill={index < 2 ? INK : index === 2 ? TINT : WHITE} stroke={INK} strokeWidth="2" />
        <W x={45 + index * 58} y={168} size={10.5} fill={index < 2 ? WHITE : TEXT}>{`CPG ${index + 1}`}</W></g>)}
      {at === 4 && <Chips labels={["Eat well", "Keep active", "No smoking"]} lit={-1} y={150} />}
      <W x={160} y={204} size={11}>{["Often grows slowly, if at all", "Suits CPG 1 or 2, sometimes 3", "Regular PSA tests, MRI and checks", "You can choose treatment at any time", "Eat well, keep active, stop smoking"][at]}</W>
    </svg>} />;
}

function Sling(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pelvic floor" title="Small squeezes, steady progress" label="Pelvic floor exercises" credit="Illustration: Rehyn. Follow the steps in the article."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The pelvic floor as a sling under the bladder, lifting when squeezed">
      <circle cx="90" cy="70" r="26" fill={TINT} stroke={INK} strokeWidth="2.5" /><W x={90} y={74} size={10}>Bladder</W>
      <path d={`M30 100 Q90 ${at === 2 || at === 3 ? 116 : 140} 150 100`} stroke={at === 0 || at === 2 || at === 3 ? INK : SOFT} strokeWidth="8" strokeLinecap="round" fill="none" className={at === 3 && !still ? "lib-v2-breathe is-slow" : undefined} />
      <circle cx="30" cy="100" r="6" fill={TEXT} /><circle cx="150" cy="100" r="6" fill={TEXT} />
      <W x={90} y={156} size={10.5}>Pelvic floor</W>
      {at === 0 && <Tags x={176} y={40} labels={["Supports bladder", "Helps control", "Helps erections"]} lit={() => false} width={128} />}
      {at === 1 && <g><rect x="180" y="40" width="114" height="84" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="180" y="40" width="114" height="18" rx="9" fill={INK} />
        <W x={237} y={88} size={12}>4 to 6 weeks</W><W x={237} y={106} size={10.5}>before surgery</W></g>}
      {at === 2 && <g><path d="M237 126 V52 M217 72 L237 52 L257 72" stroke={INK} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" /><W x={237} y={148} size={10.5}>Squeeze, then relax</W></g>}
      {at === 3 && <g>{Array.from({ length: 10 }, (_, index) => <circle key={index} cx={190 + (index % 5) * 24} cy={index < 5 ? 56 : 84} r="8" fill={INK} />)}
        <W x={238} y={120} size={10}>Hold 10 seconds</W><W x={238} y={136} size={10}>Rest 10 seconds</W></g>}
      {at === 4 && <g><path d="M184 130 H210 V114 H236 V96 H262 V76 H296" stroke={INK} strokeWidth="4" fill="none" /><circle cx="296" cy="76" r="7" fill={GOLD} className={still ? undefined : "lib-why-pulse"} /><W x={296} y={150} size={10} anchor="end">up to 3 months</W></g>}
      <W x={160} y={200} size={11}>{["A sling under the bladder and bowel", "Start 4 to 6 weeks before surgery", "Squeeze as if stopping wind and urine", "Hold 10 seconds, rest, up to 10 times", "Up to 3 months for a real difference"][at]}</W>
    </svg>} />;
}

function Drops(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Bladder" title="Leaks and urgency, and what helps" label="Bladder problems" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The bladder, leaks that lessen over time, and what can help">
      <ellipse cx="80" cy="80" rx="46" ry="40" fill={TINT} stroke={INK} strokeWidth="3" /><path d="M80 120 V156" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <W x={80} y={84} size={10.5}>Bladder</W>
      {at === 0 && <><path d="M60 128 Q80 142 100 128" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" /><Tags x={176} y={56} labels={["Nerves", "Muscles"]} lit={() => true} width={120} /></>}
      {at === 1 && <>{[0, 1, 2, 3, 4, 5].map(index => <g key={index}><Drop x={184 + index * 22} y={100} r={11 - index * 1.4} /><W x={184 + index * 22} y={130} size={10}>{index + 1}</W></g>)}<W x={239} y={150} size={10}>months</W></>}
      {at === 2 && <Tags x={170} y={40} labels={["Going often", "Sudden urge", "Burning feeling"]} lit={() => true} width={130} />}
      {at === 3 && <Tags x={170} y={40} labels={["Pads and pants", "Sheaths", "Bladder training"]} lit={() => false} width={130} />}
      {at === 4 && <><rect x="186" y="48" width="104" height="60" rx="12" fill={INK} /><W x={238} y={86} size={22} fill={WHITE}>A&amp;E</W><W x={238} y={130} size={10.5}>or call your team</W></>}
      <W x={160} y={200} size={11}>{["Treatment can affect bladder control", "Leaks usually improve with time", "Radiotherapy can irritate the bladder", "Pads, sheaths and bladder training", "Cannot urinate? Get help straight away"][at]}</W>
    </svg>} />;
}

function SlowCurve(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const tools = ["Tablets", "Vacuum pump", "Injections", "Implant"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Erections" title="Erections after treatment, and what helps" label="Erections" credit="Illustration: Rehyn. The shape of the idea; everyone's recovery differs."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Erections returning slowly over months or years, and the treatments that can help">
      {(at === 1 || at === 2) && <><path d="M40 40 V150 H300" stroke={LINE} strokeWidth="3" fill="none" /></>}
      {at === 0 && <><HeartShape x={160} y={78} size={70} fill={TINT} /><Chips labels={["Nerves", "Blood flow", "Testosterone"]} lit={-1} y={130} /></>}
      {at === 1 && <><path d="M44 146 C120 140, 180 110, 296 64" stroke={INK} strokeWidth="4" fill="none" /><circle cx="296" cy="64" r="7" fill={GOLD} className={still ? undefined : "lib-why-pulse"} />
        <W x={100} y={168} size={10}>Months</W><W x={262} y={168} size={10}>Years</W></>}
      {at === 2 && <><path d="M44 60 H140 C190 60, 220 90, 296 110" stroke={INK} strokeWidth="4" fill="none" /><path d="M190 146 V156" stroke={TEXT} strokeWidth="2" /><W x={190} y={168} size={10}>up to 2 years</W></>}
      {at === 3 && tools.map((tool, index) => <g key={tool}><rect x={index % 2 ? 168 : 32} y={index < 2 ? 46 : 100} width="120" height="34" rx="11" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={(index % 2 ? 168 : 32) + 60} y={(index < 2 ? 46 : 100) + 21} size={10.5}>{tool}</W></g>)}
      {at === 4 && <><Person x={96} y={160} scale={1.3} /><Person x={236} y={160} scale={1.3} fill={SOFT} /><Bubble x={170} y={60} text="It is okay to ask" width={140} /></>}
      <W x={160} y={204} size={11}>{["Nerves, blood flow and hormones matter", "Can take months or years to return", "Radiotherapy: changes can show later", "Tablets, pumps, injections, implants", "Free on the NHS, with no age limit"][at]}</W>
    </svg>} />;
}

function BodyTags(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const marker = [null, [80, 84], [80, 146], [80, 172], [80, 84]][at];
  const tags = [["Hot flushes", "Tiredness", "Weaker bones", "Mood changes"], ["Cool room, fan", "Cotton or linen", "A flush diary"], ["Walking", "Resistance bands", "Light weights"], ["Calcium, vitamin D", "Stay active", "Stop smoking"], ["Feeling emotional", "Hard to concentrate", "Less interest in sex"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Hormone therapy" title="Living well on hormone therapy" label="Hormone therapy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A body with the changes hormone therapy can bring, and what helps each">
      <Person x={80} y={150} scale={2.2} />
      {marker && <circle cx={marker[0]} cy={marker[1]} r="10" fill={GOLD} stroke={WHITE} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      <Tags x={166} y={tags.length === 4 ? 26 : 40} labels={tags} lit={() => at === 0} width={140} />
      <W x={160} y={206} size={11}>{["Less testosterone, many changes", "Hot flushes can ease over time", "Activity helps tiredness and muscle", "A bone scan may be suggested", "Talk to your team if it is hard"][at]}</W>
    </svg>} />;
}

function StepUp(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const step = [0, 1, 2, 2, 1][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exercise" title="Muscle, bones and mood: keep moving" label="Exercise" credit="Illustration: Rehyn. Check with your team before starting."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person climbing three steps of activity, with what each kind of exercise helps">
      <path d="M20 160 V130 H70 V100 H120 V70 H170 V160 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <Person x={45 + step * 50} y={130 - step * 30 - 13} scale={0.9} />
      {at === 0 && <Tags x={188} y={40} labels={["Weight", "Muscle", "Side effects"]} lit={() => false} width={118} />}
      {at === 1 && <><W x={248} y={62} size={11}>10 to 15 minutes</W><path d="M248 72 V92" stroke={SOFT} strokeWidth="3" /><path d="M241 86 L248 94 L255 86" stroke={SOFT} strokeWidth="3" fill="none" /><W x={248} y={112} size={11}>30 minutes,</W><W x={248} y={128} size={10.5}>3 to 5 days a week</W></>}
      {at === 2 && <Tags x={186} y={40} labels={["Walking, swimming", "Yoga, Pilates", "Light weights"]} lit={() => false} width={124} />}
      {at === 3 && <><Sun x={248} y={78} r={20} /><W x={248} y={140} size={10.5}>Fatigue and mood</W></>}
      {at === 4 && <Bubble x={248} y={78} text="Check first" width={110} />}
      <W x={160} y={200} size={11}>{["Any movement counts, not just sport", "Start gently and build up", "Aerobic plus strength, for bones", "Can ease fatigue and lift mood", "Check with your team before starting"][at]}</W>
    </svg>} />;
}

function TwoClose(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const [left, right] = [[70, 250], [80, 240], [125, 195], [64, 256], [120, 0]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Relationships" title="Staying close through the changes" label="Relationships" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people, talking and staying close">
      <Person x={left} y={160} scale={1.3} />
      {right > 0 && <Person x={right} y={160} scale={1.3} fill={SOFT} />}
      {at === 0 && <path d="M110 140 H210" stroke={LINE} strokeWidth="3" strokeDasharray="6 8" />}
      {at === 1 && <Bubble x={160} y={60} text="Talk, rather than guess" width={150} />}
      {at === 2 && <HeartShape x={160} y={70} size={52} fill={GOLD} />}
      {at === 3 && <><Person x={160} y={150} scale={1.1} fill={TEXT} /><W x={160} y={184} size={10}>Counsellor</W></>}
      {at === 4 && <Bubble x={206} y={64} text="When you feel ready" width={140} />}
      <W x={160} y={206} size={11}>{["Cancer can change a relationship", "Share how you feel; ask, not guess", "Hold hands, cuddle, try new things", "A counsellor can help you both", "Treatments are there if you are single"][at]}</W>
    </svg>} />;
}

function DeskCase(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tags = [["From diagnosis", "After treatment"], ["Appointments", "Extra breaks", "Suitable toilets"], ["Extra breaks", "Working from home", "Flexible hours"], ["Hand luggage", "Extra medicines", "Labelled packs"], ["Aisle seat", "Spare pads", "Toilet card"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work and travel" title="Your rights at work and on the move" label="Work and travel" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Rights at work, adjustments, and packing for travel">
      {at === 0 && <><path d="M90 36 L140 52 V96 C140 126, 112 146, 90 156 C68 146, 40 126, 40 96 V52 Z" fill={INK} /><W x={90} y={92} size={11} fill={WHITE}>Equality</W><W x={90} y={108} size={11} fill={WHITE}>Act 2010</W></>}
      {at === 1 && <><Clock x={90} y={70} r={24} hand={1} /><path d="M30 112 H150 M44 112 V156 M136 112 V156" stroke={INK} strokeWidth="5" strokeLinecap="round" /></>}
      {at === 2 && <>{Array.from({ length: 8 }, (_, index) => <rect key={index} x={30 + (index % 4) * 30} y={index < 4 ? 50 : 82} width="24" height="24" rx="5" fill={INK} opacity={0.35 + index * 0.08} />)}<W x={88} y={130} size={11}>8 weeks</W><W x={88} y={146} size={10}>no heavy lifting</W></>}
      {at === 3 && <><path d="M76 66 V54 H114 V66" stroke={INK} strokeWidth="4" fill="none" /><rect x="48" y="66" width="94" height="76" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" /><Pill x={95} y={104} /></>}
      {at === 4 && <><rect x="58" y="44" width="64" height="100" rx="6" fill={WHITE} stroke={INK} strokeWidth="3" /><W x={90} y={102} size={18}>WC</W></>}
      <Tags x={170} y={tags.length === 2 ? 56 : 40} labels={tags} lit={() => at === 0} width={136} />
      <W x={160} y={200} size={11}>{["Protected from the day of diagnosis", "Reasonable adjustments at work", "No heavy lifting for 8 weeks", "Medicines in your hand luggage", "Plan for toilets on the move"][at]}</W>
    </svg>} />;
}

function SunrisePath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const curve = [[24, 176], [110, 176], [200, 150], [296, 96]];
  const [x, y] = cubic([0.05, 0.28, 0.5, 0.72, 0.92][at], curve);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="Low after treatment: you are not alone" label="Mood" credit="Illustration: Rehyn. If you need help now, see the last section."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from a cloud towards the sun, with the help along the way">
      <path d="M24 176 C110 176, 200 150, 296 96" stroke={LINE} strokeWidth="8" strokeLinecap="round" fill="none" />
      <Cloud x={56} y={60} fill={at < 3 ? SOFT : LINE} />
      <g opacity={at >= 3 ? 1 : 0.35}><Sun x={282} y={56} /></g>
      {at === 2 && <g>{Array.from({ length: 14 }, (_, index) => <rect key={index} x={112 + (index % 7) * 16} y={index < 7 ? 52 : 70} width="12" height="12" rx="3" fill={INK} />)}<W x={168} y={104} size={10.5}>2 weeks</W></g>}
      {at === 3 && <Tags x={104} y={24} labels={["Talk", "Move", "Relax"]} lit={() => false} width={120} gap={30} />}
      {at === 4 && <Tags x={98} y={24} labels={["NHS 111", "Samaritans 116 123", "999 or A&E"]} lit={() => true} width={136} gap={30} />}
      <circle cx={x} cy={y} r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" className={still || at !== 4 ? undefined : "lib-why-pulse"} />
      <W x={160} y={206} size={11}>{["Hormone therapy itself can affect mood", "Feelings can hit after treatment ends", "Low for over 2 weeks? Tell your team", "Talking, moving and relaxing can help", "Urgent help is there at any time"][at]}</W>
    </svg>} />;
}

// ==== Tiredness after treatment =============================================================================

function BatteryDrain(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tags = [[], ["Repair and healing", "Anaemia", "Hormone changes"], ["Surgery", "Radiotherapy", "Chemotherapy", "Hormone therapy"], ["Feeling sick", "Poor sleep", "Feeling low", "Pain"], []][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Why it happens" title="Why treatment drains you" label="Why it happens" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A battery running low, and what drains it">
      <Battery x={44} y={48} w={72} h={124} level={[0.22, 0.3, 0.2, 0.14, 0.4][at]} upright />
      {at === 0 && <><W x={232} y={92} size={24}>Almost 65</W><W x={232} y={114} size={11}>in 100 people</W><W x={232} y={130} size={11}>with cancer</W></>}
      {tags.length > 0 && <Tags x={162} y={tags.length === 4 ? 30 : 44} labels={tags} lit={() => false} width={140} />}
      {at === 4 && <Bubble x={226} y={80} text="Tell your team" width={120} />}
      <W x={160} y={204} size={11}>{["More than ordinary tiredness", "The body may use energy to repair", "Each treatment tires in its own way", "Side effects can add to it", "More likely a side effect of treatment"][at]}</W>
    </svg>} />;
}

function TwoBeds(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const bed = (x: number, label: string, level: number) => <g key={label}>
    <W x={x + 55} y={56} size={10.5}>{label}</W><Battery x={x + 30} y={68} w={44} h={20} level={level} />
    <rect x={x} y="120" width="110" height="26" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x} y="104" width="10" height="56" rx="3" fill={INK} />
    <circle cx={x + 26} cy="112" r="10" fill={INK} /><path d={`M${x + 38} 120 H${x + 104}`} stroke={SOFT} strokeWidth="8" strokeLinecap="round" /></g>;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Not laziness" title="Real fatigue, not a lack of effort" label="Not laziness" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Ordinary tiredness and cancer fatigue side by side, and how fatigue can feel">
      {at === 0 && <>{bed(30, "Tiredness", 1)}{bed(180, "Cancer fatigue", 0.2)}</>}
      {at === 1 && <><Person x={64} y={150} scale={1.4} /><Tags x={130} y={44} labels={["Getting dressed", "Cooking", "Concentrating"]} lit={() => false} width={150} /></>}
      {at === 2 && <><circle cx="160" cy="112" r="50" fill="none" stroke={SOFT} strokeWidth="3" strokeDasharray="6 8" /><Person x={160} y={140} scale={1.3} /><Person x={50} y={150} scale={1.1} fill={SOFT} /><Person x={270} y={150} scale={1.1} fill={SOFT} /></>}
      {at === 3 && <><path d="M30 100 H290" stroke={LINE} strokeWidth="6" strokeLinecap="round" />{Array.from({ length: 11 }, (_, index) => <g key={index}><circle cx={30 + index * 26} cy="100" r="6" fill={WHITE} stroke={INK} strokeWidth="2" /><W x={30 + index * 26} y={124} size={10}>{index}</W></g>)}
        <W x={26} y={150} size={10} anchor="start">No fatigue</W><W x={294} y={150} size={10} anchor="end">Worst possible</W></>}
      {at === 4 && <><path d="M20 120 C60 80, 100 160, 140 120 S220 80, 300 110" stroke={INK} strokeWidth="4" fill="none" /><Sun x={70} y={60} r={12} /><Cloud x={180} y={70} fill={LINE} /></>}
      <W x={160} y={204} size={11}>{["Rest does not usually fix it", "Easy things can feel like hard work", "Others may underestimate it", "A score from 0 to 10 can help", "Some days are better than others"][at]}</W>
    </svg>} />;
}

function Weights(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const bricks = ["Anaemia", "Thyroid and others", "Sleep, mood, pain", "Medicines"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Other causes" title="The hidden extras worth checking" label="Other causes" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Things that can add to fatigue, stacked up, each worth checking">
      <Person x={66} y={170} scale={1.3} />
      <path d="M96 128 C112 112, 118 100, 126 86" stroke={SOFT} strokeWidth="3" fill="none" strokeDasharray="5 6" />
      {bricks.map((brick, index) => { const lit = at === index + 1; return <g key={brick} transform={`translate(${lit ? 140 : 130} ${24 + index * 34})`}>
        <rect width="170" height="30" rx="5" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><W x={85} y={20} size={10.5} fill={lit ? WHITE : TEXT}>{brick}</W></g>; })}
      <W x={160} y={206} size={11}>{["Often several causes, worth checking", "Anaemia: a blood test can check", "Thyroid and other conditions too", "Sleep, mood and pain all add to it", "Some medicines can make you drowsy"][at]}</W>
    </svg>} />;
}

function RoadBack(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lines = [
    "M34 120 C80 140, 100 140, 110 135 C160 120, 220 70, 296 50",
    "M34 120 C80 140, 100 140, 110 135 C160 120, 220 70, 296 50",
    "M34 120 C80 140, 100 140, 110 135 C170 132, 220 120, 296 100",
    "M34 120 C60 140, 90 140, 110 135 C130 100, 150 130, 170 105 S210 110, 230 80 S270 85, 296 60",
    "M34 120 C80 140, 100 140, 110 135 C160 120, 220 70, 296 50",
  ];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="How long" title="The slow road back to energy" label="How long it lasts" credit="Illustration: Rehyn. The shape of the idea; everyone's recovery differs."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Energy dipping during treatment and slowly coming back afterwards">
      <path d="M30 30 V160 H300" stroke={LINE} strokeWidth="3" fill="none" /><W x={30} y={22} size={10}>Energy</W>
      <path d="M110 36 V160" stroke={SOFT} strokeWidth="2" strokeDasharray="4 5" /><W x={110} y={178} size={10}>Treatment ends</W>
      <path d={lines[at]} stroke={INK} strokeWidth="4" fill="none" opacity={at === 1 ? 0.3 : 1} />
      {at === 1 && <Tags x={168} y={30} labels={["Surgery", "Radiotherapy", "Chemotherapy"]} lit={() => false} width={120} gap={32} />}
      {at === 2 && <><path d="M236 36 V160" stroke={GOLD} strokeWidth="3" strokeDasharray="4 5" /><W x={236} y={178} size={10}>6 months or more</W></>}
      {at === 4 && <Bubble x={200} y={92} text="Tell your team" width={116} />}
      <W x={160} y={204} size={11}>{["Most people improve after treatment", "Depends on the treatment", "For some, 6 months or longer", "Recovery can have ups and downs", "Not improving? Tell your cancer team"][at]}</W>
    </svg>} />;
}

function EnergyBlocks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const energy = [104, 74, 82, 100, 118, 108, 124, 136];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pacing" title="Spend energy where it matters" label="Pacing" credit="Illustration: Rehyn. An example day, not a plan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day split into small blocks of activity and rest">
      {(at === 0 || at === 2) && <>{Array.from({ length: 8 }, (_, index) => { const rest = index % 2 === 1; return <rect key={index} x={20 + index * 36} y={rest ? 76 : 56} width="30" height={rest ? 34 : 54} rx="6"
        fill={at === 2 ? (rest ? GOLD : LINE) : rest ? TINT : index === 0 ? GOLD : INK} stroke={INK} strokeWidth="2" />; })}
        <W x={20} y={132} size={10} anchor="start">Morning</W><W x={300} y={132} size={10} anchor="end">Evening</W>
        <rect x="70" y="148" width="14" height="14" rx="3" fill={INK} /><W x={90} y={159} size={10} anchor="start">Do</W><rect x="150" y="148" width="14" height="14" rx="3" fill={at === 2 ? GOLD : TINT} stroke={INK} strokeWidth="1.5" /><W x={170} y={159} size={10} anchor="start">Rest</W></>}
      {at === 1 && <><Diary x={64} y={92} /><path d={`M128 ${energy[0]} ${energy.map((y, index) => `L${128 + index * 24} ${y}`).join(" ")}`} stroke={INK} strokeWidth="3" fill="none" />
        {energy.map((y, index) => <circle key={index} cx={128 + index * 24} cy={y} r="5" fill={index === 1 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />)}<W x={152} y={58} size={10}>Best time</W></>}
      {at === 3 && <>{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}><rect x={24 + index * 40} y="56" width="32" height="70" rx="7" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x={28 + index * 40} y="104" width="24" height="18" rx="4" fill={INK} /><W x={40 + index * 40} y={146} size={10.5}>{day}</W></g>)}</>}
      {at === 4 && <><Person x={100} y={160} scale={1.3} /><Person x={226} y={160} scale={1.3} fill={SOFT} /><Bubble x={176} y={62} text="Pace yourself" width={120} /></>}
      <W x={160} y={204} size={11}>{["Save energy for what matters most", "A diary shows your best times", "Rest a few times through the day", "Spread jobs out over the week", "An occupational therapist can help"][at]}</W>
    </svg>} />;
}

function WalkWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Gentle exercise" title="Moving a little, gaining energy back" label="Gentle exercise" credit="Illustration: Rehyn. 150 minutes a week is the UK guide for adults."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A short daily walk building up over the weeks, and energy coming back">
      {at !== 2 && <path d="M20 160 H300" stroke={LINE} strokeWidth="6" strokeLinecap="round" />}
      {at === 0 && <><Person x={80} y={142} scale={1.2} /><Battery x={180} y={60} w={90} h={38} level={0.65} /><W x={225} y={124} size={10.5}>Energy</W></>}
      {at === 1 && <><path d="M40 160 H120" stroke={INK} strokeWidth="6" strokeLinecap="round" /><Person x={110} y={142} scale={1.2} /><Clock x={228} y={84} r={28} hand={1.6} /><W x={228} y={134} size={10.5}>15 minutes</W></>}
      {at === 2 && <><W x={160} y={40} size={12}>150 minutes a week</W>{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={index}>
        {[0, 1, 2].map(row => <rect key={row} x={27 + index * 38} y={58 + row * 24} width="30" height="20" rx="5" fill={index < 5 ? INK : WHITE} stroke={INK} strokeWidth="1.5" opacity={index < 5 ? 1 : 0.5} />)}
        <W x={42 + index * 38} y={148} size={10.5}>{day}</W></g>)}<W x={160} y={168} size={10}>3 x 10 minutes, 5 days</W></>}
      {at === 3 && <><Person x={74} y={142} scale={1.2} /><Tags x={156} y={40} labels={["Feeling unwell", "Dizzy", "Chest pain"]} lit={() => false} width={130} /></>}
      {at === 4 && <>{[70, 150, 230].map((x, index) => <Person key={x} x={x} y={142} scale={1.1} fill={index === 1 ? INK : SOFT} />)}<circle cx="150" cy="70" r="8" fill={GOLD} className={still ? undefined : "lib-why-pulse"} /></>}
      <W x={160} y={204} size={11}>{["Activity is one of the best helps", "Start with a short daily walk", "Build up to 150 minutes a week", "Unwell or dizzy? Stop and get advice", "Ask about exercise programmes"][at]}</W>
    </svg>} />;
}

function NightLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Sleep" title="Exhausted but awake at night" label="Sleep" credit="Illustration: Rehyn. An example day, not a timetable."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day from waking to bed, with a short early nap and time to wind down">
      <path d="M30 116 H290" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      <Sun x={40} y={84} r={10} /><path d="M282 72 A14 14 0 1 0 296 96 A11 11 0 1 1 282 72 Z" fill={at === 0 ? INK : SOFT} />
      <W x={40} y={140} size={10.5}>Wake</W><W x={284} y={140} size={10.5}>Bed</W>
      {at === 1 && <><path d="M40 104 V128 M284 104 V128" stroke={GOLD} strokeWidth="4" strokeLinecap="round" /><W x={162} y={84} size={11}>Same times each day</W><W x={162} y={168} size={10.5}>7 to 9 hours a night</W></>}
      {at === 2 && <><rect x="104" y="106" width="30" height="20" rx="5" fill={GOLD} stroke={INK} strokeWidth="2" /><W x={119} y={94} size={10.5}>20 to 30 minutes</W></>}
      {at === 3 && <><path d="M170 74 H280" stroke={GOLD} strokeWidth="3" /><path d="M170 68 V80 M280 68 V80" stroke={GOLD} strokeWidth="2" /><W x={225} y={62} size={10}>No caffeine: 6 hours</W>
        <path d="M250 100 H280" stroke={INK} strokeWidth="3" /><W x={198} y={104} size={10}>No screens: 1 hour</W></>}
      {at === 0 && <Chips labels={["Worry", "Pain", "Hot flushes"]} lit={-1} y={152} />}
      {at === 4 && <Chips labels={["Sleep diary", "CBT for insomnia"]} lit={1} y={152} />}
      <W x={160} y={206} size={11}>{["Worry, pain or sweats can keep you up", "Same bedtime, same wake-up time", "Keep naps short and early", "Wind down: bath, book or music", "CBT for insomnia can help"][at]}</W>
    </svg>} />;
}

function LittleOften(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const groups = [{ t: "Fruit and veg", f: INK }, { t: "Starchy foods", f: SOFT }, { t: "Protein", f: TINT }, { t: "Milk and dairy", f: LINE }];
  const arc = (from: number, to: number) => { const r = 54, cx = 96, cy = 96; const a = (from - 0.25) * 2 * Math.PI, b = (to - 0.25) * 2 * Math.PI;
    return `M${cx} ${cy} L${cx + r * Math.cos(a)} ${cy + r * Math.sin(a)} A${r} ${r} 0 ${to - from > 0.5 ? 1 : 0} 1 ${cx + r * Math.cos(b)} ${cy + r * Math.sin(b)} Z`; };
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Food" title="Little and often for energy" label="Eating for energy" credit="Illustration: Rehyn. A picture of the idea, not a diet plan."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Small meals through the day, a balanced plate and plenty to drink">
      {at === 0 && <><Plate x={96} y={96} r={54} /><path d="M164 96 H184" stroke={SOFT} strokeWidth="4" strokeLinecap="round" /><path d="M178 88 L188 96 L178 104" stroke={SOFT} strokeWidth="4" fill="none" strokeLinecap="round" /><Battery x={200} y={78} w={86} h={36} level={0.7} /></>}
      {at === 1 && <><path d="M30 120 H290" stroke={LINE} strokeWidth="6" strokeLinecap="round" />{[50, 120, 190, 260].map(x => <Plate key={x} x={x} y={120} r={16} />)}
        <path d="M50 88 H120 M50 82 V94 M120 82 V94" stroke={GOLD} strokeWidth="3" /><W x={85} y={74} size={10.5}>3 to 4 hours</W></>}
      {at === 2 && <><circle cx="96" cy="96" r="58" fill={WHITE} stroke={INK} strokeWidth="3" />{[[0, 0.36], [0.36, 0.7], [0.7, 0.88], [0.88, 1]].map(([from, to], index) => <path key={index} d={arc(from, to)} fill={groups[index].f} stroke={WHITE} strokeWidth="2" />)}
        {groups.map((group, index) => <g key={group.t}><rect x="180" y={48 + index * 28} width="14" height="14" rx="3" fill={group.f} stroke={INK} strokeWidth="1.5" /><W x={202} y={59 + index * 28} size={10.5} anchor="start">{group.t}</W></g>)}</>}
      {at === 3 && <><rect x="40" y="44" width="92" height="112" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M40 84 H132 M116 58 V72 M116 98 V116" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <Tags x={166} y={44} labels={["Frozen meals", "Tins", "Meal delivery"]} lit={() => false} width={128} /></>}
      {at === 4 && <>{Array.from({ length: 8 }, (_, index) => <path key={index} d={`M${34 + index * 34} 64 h22 l-3 54 h-16 Z`} fill={index < 6 ? INK : WHITE} stroke={INK} strokeWidth="2" opacity={index < 6 ? 1 : 0.6} />)}
        <W x={160} y={146} size={11}>6 to 8 cups or glasses</W></>}
      <W x={160} y={204} size={11}>{["Food is where energy comes from", "Small meals and snacks, often", "Lots of fruit, vegetables and starch", "Ready meals can help on tired days", "6 to 8 drinks a day, more if unwell"][at]}</W>
    </svg>} />;
}

function PhasedReturn(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Back to work, at your pace" label="Work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Rights at work, adjustments for tiredness and a gradual return">
      {at === 0 && <><rect x="40" y="36" width="96" height="122" rx="8" fill={WHITE} stroke={INK} strokeWidth="3" /><W x={88} y={72} size={11}>Equality</W><W x={88} y={88} size={11}>Act 2010</W>
        {[0, 1, 2].map(index => <path key={index} d={`M56 ${108 + index * 14} H120`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
        <Tags x={166} y={40} labels={["From diagnosis", "After treatment", "New employers too"]} lit={() => true} width={134} /></>}
      {at === 1 && <><path d="M36 100 L70 70 L104 100 V150 H36 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /><rect x="220" y="66" width="68" height="84" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" />
        {[0, 1, 2].map(index => <rect key={index} x="232" y={78 + index * 22} width="44" height="12" rx="2" fill={TINT} />)}
        <Person x={160} y={142} scale={1.2} /><path d="M120 110 H136 M184 110 H200" stroke={SOFT} strokeWidth="3" strokeDasharray="4 4" />
        <W x={70} y={170} size={10.5}>Home</W><W x={254} y={170} size={10.5}>Work</W></>}
      {at === 2 && <><path d="M48 84 h48 v40 a16 16 0 0 1 -16 16 h-16 a16 16 0 0 1 -16 -16 Z" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M96 94 h8 a10 10 0 0 1 0 20 h-8" fill="none" stroke={INK} strokeWidth="3" />
        <Tags x={146} y={26} labels={["Phased return", "Extra breaks", "A quiet place to rest", "Working from home"]} lit={() => false} width={150} /></>}
      {at === 3 && <>{[0, 1, 2, 3].map(index => <g key={index}><rect x={50 + index * 60} y={150 - (34 + index * 22)} width="40" height={34 + index * 22} rx="6" fill={INK} opacity={0.5 + index * 0.16} />
        <W x={70 + index * 60} y={168} size={10}>{`Week ${index + 1}`}</W></g>)}</>}
      {at === 4 && <><circle cx="90" cy="96" r="38" fill={GOLD} /><W x={90} y={101} size={13}>Grant</W><Tags x={168} y={66} labels={["Equipment", "Travel to work"]} lit={() => false} width={128} /></>}
      <W x={160} y={204} size={11}>{["Cancer counts as a disability in law", "Too well for home, not quite for work", "Adjustments that allow for tiredness", "Agree a flexible return-to-work plan", "Access to Work can give a grant"][at]}</W>
    </svg>} />;
}

function HelpingHands(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Asking for help" title="Saying yes to help" label="Asking for help" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with family and friends around, sharing the load">
      <Person x={160} y={156} scale={1.4} />
      {at !== 4 && <Person x={58} y={160} scale={1.2} fill={SOFT} />}<Person x={262} y={160} scale={1.2} fill={SOFT} />
      {at === 0 && <HeartShape x={160} y={52} size={44} fill={GOLD} />}
      {at === 1 && <Bubble x={206} y={58} text="Yes, please" width={104} />}
      {at === 2 && <Chips labels={["Shopping", "Hoovering", "School run"]} lit={-1} y={28} />}
      {at === 3 && <Bubble x={218} y={58} text="I'm a bit worried" width={132} />}
      {at === 4 && <Chips labels={["Support groups", "Macmillan Buddies"]} lit={-1} y={28} />}
      <W x={160} y={206} size={11}>{["Just about everyone needs support", "Say yes now, or ask them later", "Hand over the heavy jobs", "Let people know how you really feel", "Support groups and Macmillan Buddies"][at]}</W>
    </svg>} />;
}

function LoopBreaks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const broken = at >= 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood" title="Breaking the tired, low loop" label="Fatigue and mood" credit="Illustration: Rehyn. If you are struggling now, see the last section."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Fatigue and low mood feeding each other, and the help that breaks the loop">
      {at < 4 && <>
        <Battery x={44} y={92} w={70} h={30} level={0.2} /><Cloud x={240} y={100} fill={at === 1 ? INK : SOFT} />
        <W x={80} y={146} size={10.5}>Fatigue</W><W x={240} y={146} size={10.5}>Low mood</W>
        <path d="M126 92 C146 56, 178 56, 198 88" stroke={INK} strokeWidth="3.5" fill="none" strokeDasharray={broken ? "10 9" : undefined} /><path d="M188 84 L199 90 L200 77" stroke={INK} strokeWidth="3.5" fill="none" />
        <path d="M200 124 C180 158, 146 158, 126 128" stroke={INK} strokeWidth="3.5" fill="none" strokeDasharray={broken ? "10 9" : undefined} /><path d="M136 132 L125 126 L124 139" stroke={INK} strokeWidth="3.5" fill="none" />
      </>}
      {at === 2 && <Chips labels={["Talk", "Be active", "CBT"]} lit={-1} y={160} />}
      {at === 3 && <Person x={162} y={128} scale={0.9} fill={TEXT} />}
      {at === 4 && <><Tags x={70} y={40} labels={["Samaritans 116 123", "NHS 111", "999 or A&E"]} lit={() => true} width={146} /><Sun x={262} y={70} /></>}
      <W x={160} y={208} size={11}>{["Tiredness and low mood feed each other", "More than 2 weeks? Talk to a doctor", "Talking, moving and CBT can help", "Your GP or nurse can refer you", "Help is there, day or night"][at]}</W>
    </svg>} />;
}

function TogetherDiary(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Family and friends" title="How the people around can help" label="For family and friends" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A carer and the person they support, planning together">
      <Person x={70} y={160} scale={1.3} /><Person x={250} y={160} scale={1.3} fill={SOFT} />
      {at === 0 && <Bubble x={190} y={58} text="How are you?" width={112} />}
      {(at === 1 || at === 2) && <Diary x={160} y={124} />}
      {at === 1 && <Chips labels={["Shopping", "Cooking", "A walk"]} lit={-1} y={26} />}
      {at === 2 && <><rect x="112" y="34" width="96" height="44" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M112 48 H208" stroke={INK} strokeWidth="2.5" /><W x={160} y={68} size={10.5}>Appointment</W></>}
      {at === 3 && <><Plate x={160} y={120} r={22} /><circle cx="160" cy="120" r="7" fill={SOFT} /></>}
      {at === 4 && <HeartShape x={250} y={60} size={46} fill={GOLD} />}
      <W x={160} y={206} size={11}>{["Fatigue is hard; keep offering support", "Practical help and a gentle walk", "Take the diary to appointments", "Smaller meals, without pressure", "Look after yourself too"][at]}</W>
    </svg>} />;
}

export function AftercarePieceView({ piece, ...props }: { piece: AftercarePiece } & PieceProps) {
  switch (piece) {
    case "pc-four-paths": return <FourPaths {...props} />;
    case "pc-psa-lines": return <PsaLines {...props} />;
    case "pc-grade-sum": return <GradeSum {...props} />;
    case "pc-watch-timeline": return <WatchTimeline {...props} />;
    case "pc-sling": return <Sling {...props} />;
    case "pc-drops": return <Drops {...props} />;
    case "pc-slow-curve": return <SlowCurve {...props} />;
    case "pc-body-tags": return <BodyTags {...props} />;
    case "pc-step-up": return <StepUp {...props} />;
    case "pc-two-close": return <TwoClose {...props} />;
    case "pc-desk-case": return <DeskCase {...props} />;
    case "pc-sunrise-path": return <SunrisePath {...props} />;
    case "cf-battery-drain": return <BatteryDrain {...props} />;
    case "cf-two-beds": return <TwoBeds {...props} />;
    case "cf-weights": return <Weights {...props} />;
    case "cf-road-back": return <RoadBack {...props} />;
    case "cf-energy-blocks": return <EnergyBlocks {...props} />;
    case "cf-walk-weeks": return <WalkWeeks {...props} />;
    case "cf-night-line": return <NightLine {...props} />;
    case "cf-little-often": return <LittleOften {...props} />;
    case "cf-phased-return": return <PhasedReturn {...props} />;
    case "cf-helping-hands": return <HelpingHands {...props} />;
    case "cf-loop-breaks": return <LoopBreaks {...props} />;
    case "cf-together-diary": return <TogetherDiary {...props} />;
  }
}
