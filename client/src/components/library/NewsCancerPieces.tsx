import type { NewsPiece } from "@/content/ischaemic-news";
import { CANCER_PIECES, type CancerPiece } from "@/content/cancer-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Cancer & recovery pages' own pieces (content/cancer-features.ts), drawn in the page's card colours (the
// --t-… variables), like the Mind & mood pieces. Each is steered by the card's sections; pictures show ideas,
// calmly, and never anyone's own body, scans or results.

export const isCancerPiece = (piece: NewsPiece): piece is CancerPiece => (CANCER_PIECES as readonly string[]).includes(piece);

/** The one-line caption for the chosen section. */
const Cap = ({ children, y = 206 }: { children: string; y?: number }) => <W x={160} y={y} size={11.5}>{children}</W>;
/** A labelled box; `lit` fills it. */
const Box = ({ x, y, width, text, lit = false, height = 28, size = 10.5 }: { x: number; y: number; width: number; text: string; lit?: boolean; height?: number; size?: number }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x + width / 2} y={y + height / 2 + 4} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A row of small day or week squares, the first `filled` of them filled. */
const Squares = ({ x, y, count, filled, size = 18, gap = 22, labels }: { x: number; y: number; count: number; filled: number; size?: number; gap?: number; labels?: string[] }) =>
  <g>{Array.from({ length: count }, (_, index) => <g key={index}>
    <rect x={x + index * gap} y={y} width={size} height={size} rx="4" fill={index < filled ? INK : WHITE} stroke={INK} strokeWidth="1.5" />
    {labels && <W x={x + index * gap + size / 2} y={y + size / 2 + 4} size={9.5} fill={index < filled ? WHITE : TEXT}>{labels[index]}</W>}
  </g>)}</g>;
const fade = (lit: boolean) => (lit ? 1 : 0.35);

// ==== Breast cancer =========================================================================================

function BcTimeline(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const steps = ["Surgery", "Radiotherapy", "Chemo", "Hormones"];
  const icon = (index: number, x: number, lit: boolean) => {
    const c = lit ? WHITE : INK;
    if (index === 0) return <path d={`M${x - 13} ${109} L${x + 1} ${95} M${x + 1} ${95} L${x + 12} ${84}`} stroke={c} strokeWidth="4" strokeLinecap="round" />;
    if (index === 1) return <g><path d={`M${x - 13} ${83} L${x} ${102} M${x} ${80} V${102} M${x + 13} ${83} L${x} ${102}`} stroke={c} strokeWidth="2.5" strokeLinecap="round" /><circle cx={x} cy={106} r="4" fill={c} /></g>;
    if (index === 2) return <g><rect x={x - 8} y={80} width="16" height="18" rx="4" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x} 98 V108`} stroke={c} strokeWidth="2.5" /><circle cx={x} cy={112} r="2.5" fill={c} /></g>;
    return <Pill x={x} y={96} fill={lit ? GOLD : INK} />;
  };
  return <MemoryBand props={props} state={s} tone="theme" kicker="What you had" title="Each treatment, and what it was for" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four treatments on a line: surgery, radiotherapy, chemotherapy and hormone tablets">
      <path d="M20 96 H300" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {at === 0 && <path d="M26 58 V48 H294 V58" stroke={SOFT} strokeWidth="3" fill="none" />}
      {at === 3 && <path d="M198 66 C160 22, 50 22, 24 74" stroke={GOLD} strokeWidth="3" strokeDasharray="6 6" fill="none" />}
      {at === 4 && Array.from({ length: 10 }, (_, index) => <circle key={index} cx={190 + index * 12} cy={44} r="4" fill={GOLD} />)}
      {steps.map((step, index) => {
        const x = 46 + index * 76, on = at === index + 1;
        return <g key={step} opacity={at === 0 || on ? 1 : 0.4}>
          <circle cx={x} cy={96} r="26" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          {icon(index, x, on)}
          <W x={x} y={144} size={10.5}>{step}</W>
        </g>;
      })}
      <Cap>{["A plan your team made with you", "Surgery usually comes first", "5 to 15 days, Monday to Friday", "Chemo before or after surgery", "Usually 5 to 10 years of tablets"][at]}</Cap>
    </svg>} />;
}

function BcReport(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows = ["Grade", "Size and stage", "Receptors", "HER2"];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Your results" title="Reading your pathology report, word by word" label="Your results" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A pathology report with its lines picked out one at a time">
      <rect x="20" y="22" width="134" height="152" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <W x={87} y={42} size={10}>Pathology report</W>
      {rows.map((row, index) => <g key={row}>
        <rect x="28" y={56 + index * 28} width="118" height="22" rx="6" fill={at === index + 1 ? INK : TINT} />
        <W x={36} y={71 + index * 28} size={10.5} anchor="start" fill={at === index + 1 ? WHITE : TEXT}>{row}</W>
      </g>)}
      {at === 0 && <g><circle cx="228" cy="88" r="30" fill={TINT} stroke={INK} strokeWidth="4" /><path d="M250 110 L276 136" stroke={INK} strokeWidth="7" strokeLinecap="round" /></g>}
      {at === 1 && <g>
        <circle cx="194" cy="96" r="15" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M236 81 C252 82, 252 104, 238 111 C222 114, 218 92, 236 81 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M276 80 L290 90 L284 98 L292 110 L272 112 L264 100 L270 92 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {["1", "2", "3"].map((grade, index) => <W key={grade} x={194 + index * 42} y={136} size={11}>{grade}</W>)}
      </g>}
      {at === 2 && <g><W x={236} y={68} size={10.5}>Stage</W>{["1", "2", "3", "4"].map((stage, index) => <Box key={stage} x={180 + index * 29} y={80} width={25} height={30} text={stage} size={11} />)}</g>}
      {(at === 3 || at === 4) && <g>
        <circle cx="236" cy="98" r="36" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        {at === 3 ? [-60, -20, 20, 60].map(angle => { const r = (angle - 90) * Math.PI / 180, x = 236 + 36 * Math.cos(r), y = 98 + 36 * Math.sin(r); return <path key={angle} transform={`translate(${x} ${y}) rotate(${angle})`} d="M0 0 V-10 M0 -10 L-5 -16 M0 -10 L5 -16" stroke={GOLD} strokeWidth="3" strokeLinecap="round" fill="none" />; })
          : Array.from({ length: 14 }, (_, index) => { const r = index / 14 * Math.PI * 2; return <circle key={index} cx={236 + 36 * Math.cos(r)} cy={98 + 36 * Math.sin(r)} r="4" fill={GOLD} />; })}
        <W x={236} y={103} size={12}>{at === 3 ? "ER" : "HER2"}</W>
      </g>}
      <Cap>{["Results usually take 1 to 2 weeks", "Grade: how different the cells look", "Stage: size, and how far it spread", "If ER-positive, hormone therapy", "Under 1 in 5 are HER2-positive"][at]}</Cap>
    </svg>} />;
}

function BcCheckups(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots = [{ x: 50, t: "How you feel" }, { x: 122, t: "Who to call" }, { x: 194, t: "Scans" }, { x: 266, t: "GP review" }];
  const litSpot = [0, 1, -1, 2, 3][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="After treatment, still looked after" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five years of yearly mammograms, and the ways follow-up works">
      {Array.from({ length: 5 }, (_, index) => <g key={index} opacity={at === 2 ? 1 : 0.45}>
        <rect x={22 + index * 57} y="22" width="50" height="40" rx="8" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={47 + index * 57} y={47} size={10} fill={at === 2 ? WHITE : TEXT}>Year {index + 1}</W>
      </g>)}
      {spots.map((spot, index) => { const on = litSpot === index, c = on ? WHITE : INK, x = spot.x, y = 114; return <g key={spot.t} opacity={fade(on || at === 2)}>
        <circle cx={x} cy={y} r="27" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {index === 0 && <g><rect x={x - 15} y={y - 12} width="30" height="18" rx="8" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x - 8} ${y + 6} l-4 8 l10 -8`} fill="none" stroke={c} strokeWidth="2.5" strokeLinejoin="round" /></g>}
        {index === 1 && <g><rect x={x - 9} y={y - 16} width="18" height="30" rx="4" fill="none" stroke={c} strokeWidth="2.5" /><circle cx={x} cy={y + 9} r="2" fill={c} /></g>}
        {index === 2 && <g><circle cx={x} cy={y} r="13" fill="none" stroke={c} strokeWidth="5" /><path d={`M${x - 20} ${y + 4} H${x + 20}`} stroke={c} strokeWidth="3" /></g>}
        {index === 3 && <g><rect x={x - 10} y={y - 16} width="20" height="32" rx="2" fill="none" stroke={c} strokeWidth="2.5" /><circle cx={x + 5} cy={y + 1} r="2" fill={c} /></g>}
        <W x={x} y={158} size={10}>{spot.t}</W>
      </g>; })}
      <Cap>{["Appointments focus on how you feel", "Open access: you contact your team", "Mammograms every year, for 5 years", "No routine scans without symptoms", "Cancer Care Review within 12 months"][at]}</Cap>
    </svg>} />;
}

function BcWorryCurve(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Coming back" title="The worry, and the real numbers" label="Recurrence" credit="Illustration: Rehyn. A picture of the idea, not anyone's own risk."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with the worry about cancer coming back, and what can help">
      <Person x={64} y={160} scale={1.4} fill={at === 4 ? INK : SOFT} />
      {at === 4 && <circle cx="64" cy="118" r="24" fill="none" stroke={GOLD} strokeWidth="3" />}
      {at === 0 && <g><circle cx="94" cy="104" r="4" fill={SOFT} /><circle cx="108" cy="88" r="7" fill={SOFT} /><ellipse cx="200" cy="66" rx="76" ry="36" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={200} y={76} size={26} serif>?</W></g>}
      {at === 1 && <g>{Array.from({ length: 60 }, (_, index) => <circle key={index} cx={150 + (index % 10) * 15} cy={38 + Math.floor(index / 10) * 15} r="4.5" fill={SOFT} />)}<W x={217} y={146} size={10.5}>Large groups of people</W></g>}
      {at === 2 && <g>
        <path d="M144 36 V142 H300" stroke={LINE} strokeWidth="3" fill="none" />
        <path d="M150 50 C186 56, 204 112, 296 126" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <W x={152} y={30} size={10} anchor="start">Risk</W><W x={222} y={160} size={10}>Years after treatment</W>
      </g>}
      {at === 3 && <Tags x={162} y={28} width={136} gap={32} labels={["Lump or thickening", "Swelling", "Skin puckering", "Rash near the scar"]} lit={() => false} />}
      {at === 4 && <Tags x={152} y={40} width={148} gap={34} labels={["Talk about feelings", "Manage stress", "Do what you enjoy"]} lit={() => true} />}
      <Cap>{["Worry about it coming back is common", "Group numbers cannot predict yours", "Higher at first, usually reduces", "Report anything new or unusual", "No evidence worry alters prognosis"][at]}</Cap>
    </svg>} />;
}

function BcBattery(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const level = [0.15, 0.25, 0.45, 0.6, 0.7][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Fatigue" title="Not just tired: fatigue after treatment" label="Fatigue" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A battery slowly recharging, with a fatigue diary and a week of activity">
      <rect x="28" y="36" width="104" height="52" rx="9" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="132" y="52" width="8" height="20" rx="2" fill={INK} />
      <rect x="35" y="43" width={90 * level} height="38" rx="5" fill={at === 0 ? SOFT : INK} />
      {at === 0 && <path d="M232 40 A22 22 0 1 0 254 76 A17 17 0 1 1 232 40 Z" fill={SOFT} />}
      {at === 1 && <Tags x={176} y={22} width={120} gap={32} labels={["Treatments", "Worry", "Low mood", "Poor sleep"]} lit={() => true} />}
      {at === 2 && <g>
        {Array.from({ length: 10 }, (_, index) => <Box key={index} x={20 + index * 28.5} y={120} width={24} height={26} text={String(index + 1)} lit={index === 5} size={10} />)}
        <W x={20} y={164} size={10} anchor="start">No fatigue</W><W x={300} y={164} size={10} anchor="end">Extreme</W>
      </g>}
      {at === 3 && <Squares x={68} y={118} count={7} filled={5} size={22} gap={27} labels={["M", "T", "W", "T", "F", "S", "S"]} />}
      {at === 4 && <g><Person x={200} y={84} scale={1.1} /><Bubble x={252} y={30} text="Tell your team" width={110} /></g>}
      <Cap>{["Exhaustion that rest does not ease", "Treatment, worry and sleep play a part", "Score it every day, 1 to 10", "30 minutes, 5 times a week", "Fatigue may have a treatable cause"][at]}</Cap>
    </svg>} />;
}

function BcArmReach(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const hand = [[164, 140], [222, 100], [222, 70], [218, 58], [222, 64]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Arm and shoulder" title="Getting your shoulder moving again" label="Arm and shoulder" credit="Illustration: Rehyn. Follow your own team's advice on exercises."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person standing by a wall, reaching higher up it over time">
      <rect x="226" y="18" width="16" height="164" fill={TINT} stroke={SOFT} strokeWidth="2" />
      {[146, 118, 90, 62].map(y => <path key={y} d={`M226 ${y} h-6`} stroke={SOFT} strokeWidth="2" />)}
      {(at === 1 || at === 2) && [118, 100, 84].map((y, index) => <circle key={y} cx="220" cy={y} r="3.5" fill={GOLD} opacity={0.4 + index * 0.3} />)}
      <circle cx="150" cy="58" r="13" fill={INK} />
      <path d="M150 74 V138 M150 138 L138 184 M150 138 L162 184" stroke={INK} strokeWidth="9" strokeLinecap="round" />
      <path d={`M150 86 L${hand[0]} ${hand[1]}`} stroke={INK} strokeWidth="8" strokeLinecap="round" />
      <circle cx={hand[0]} cy={hand[1]} r="6" fill={INK} />
      {at === 3 && <path d={`M152 92 L${(150 + hand[0]) / 2 + 4} ${(86 + hand[1]) / 2 + 8} L${hand[0] - 10} ${hand[1] + 10}`} stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" fill="none" />}
      {at === 4 && <ellipse cx={(150 + hand[0]) / 2} cy={(86 + hand[1]) / 2} rx="44" ry="14" transform={`rotate(-14 ${(150 + hand[0]) / 2} ${(86 + hand[1]) / 2})`} fill={SOFT} opacity=".35" />}
      {at === 1 && <Clock x={70} y={70} r={22} hand={2.1} />}
      <Cap>{["Joints seize up quickly if not used", "3 times a day for the first 3 months", "You should not feel pain doing them", "Cording: physio and exercise help", "Swelling or heaviness? Get advice"][at]}</Cap>
    </svg>} />;
}

function BcTabletYears(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Hormone tablets" title="Living with years of hormone tablets" label="Hormone tablets" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Ten years of hormone tablets, with side effects and help along the way">
      {Array.from({ length: 10 }, (_, index) => <rect key={index} x={20 + index * 28.5} y="24" width="24" height="30" rx="5" fill={index < 5 ? INK : TINT} stroke={INK} strokeWidth="1.5" strokeDasharray={index < 5 ? undefined : "3 3"} opacity={at === 1 ? 1 : 0.5} />)}
      <W x={32} y={72} size={10}>Year 1</W><W x={288} y={72} size={10}>Year 10</W>
      <Pill x={46} y={128} />
      {at === 0 && <Tags x={100} y={98} width={200} gap={36} labels={["Tamoxifen blocks oestrogen", "Inhibitors lower oestrogen"]} lit={() => false} />}
      {at === 1 && <g><Clock x={160} y={128} r={20} hand={1.2} /><W x={190} y={132} size={10.5} anchor="start">Same time each day</W></g>}
      {at === 2 && <Tags x={110} y={90} width={150} gap={32} labels={["Hot flushes", "Night sweats", "Joint pain"]} lit={() => true} />}
      {at === 3 && <Tags x={100} y={90} width={180} gap={32} labels={["Bone density scans", "Clot signs: get help fast", "Ask about other medicines"]} lit={() => false} />}
      {at === 4 && <Bubble x={196} y={118} text="A break, or a switch?" width={150} />}
      <Cap>{["Blocking or lowering oestrogen", "Usually taken for 5 to 10 years", "Common: flushes and joint aches", "Know the signs of a blood clot", "Hard to live with? Talk to your team"][at]}</Cap>
    </svg>} />;
}

function BcFog(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const fog = [0.85, 0.85, 0.75, 0.5, 0.2][at];
  const words = [["Memory", "Attention", "Planning"], ["Memory", "Focus", "Finding words"], ["Fatigue", "Poor sleep", "Menopause"], ["Diary", "Reminders", "One task"], ["Talk to your team", "Work adjustments"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Chemo brain" title="Clearing the fog, slowly" label="Chemo brain" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A head with a patch of fog that lifts, and ways to cope">
      <path d="M78 180 V146 C58 134, 52 104, 60 82 C70 48, 108 30, 140 38 C170 46, 180 76, 174 98 L186 118 L172 122 V140 C172 148, 164 152, 154 152 H142 V180" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <g opacity={fog}><ellipse cx="106" cy="84" rx="34" ry="16" fill={LINE} /><ellipse cx="132" cy="102" rx="30" ry="14" fill={LINE} /><ellipse cx="96" cy="112" rx="24" ry="12" fill={LINE} /></g>
      <Tags x={198} y={36} width={116} gap={34} labels={words} lit={() => at !== 0 && at !== 2} />
      <Cap>{["Usually temporary and mild", "Memory, focus, finding words", "Anyone in cancer treatment can have it", "Write reminders down at the time", "Often mild, and gets better in time"][at]}</Cap>
    </svg>} />;
}

function BcMirror(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your body" title="Your body, your choice" label="Your body" credit="Illustration: Rehyn. A picture of the idea, not anyone's own body."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A full-length mirror, and the choices and changes after breast cancer">
      <rect x="28" y="18" width="92" height="166" rx="46" fill={TINT} stroke={INK} strokeWidth="4" />
      <Person x={74} y={148} scale={1.4} fill={SOFT} />
      {at === 0 && <g><Squares x={146} y={78} count={12} filled={12} size={10} gap={13.5} /><W x={146} y={118} size={10} anchor="start">Surgery</W><W x={302} y={118} size={10} anchor="end">1 year</W></g>}
      {at === 1 && <Tags x={146} y={40} width={156} gap={38} labels={["Clothed: 3 things", "In underwear", "When you feel ready"]} lit={index => index === 0} />}
      {at === 2 && <Tags x={146} y={40} width={156} gap={38} labels={["Flat", "Prosthesis", "Reconstruction"]} lit={() => false} />}
      {at === 3 && <g><path d="M168 82 C168 112, 212 112, 220 88 C228 112, 272 112, 272 82 M164 82 H276 M180 82 L186 46 M260 82 L254 46" stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" /><W x={220} y={136} size={10.5}>Soft, non-wired</W></g>}
      {at === 4 && <Bubble x={222} y={76} text="Talk it through" width={120} />}
      <Cap>{["It might take up to a year to settle", "Looking sooner can build confidence", "A very personal choice", "Skin can take 6 months to a year", "Concerns are part of your care"][at]}</Cap>
    </svg>} />;
}

function BcFlush(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const level = [0.5, 0.85, 0.7, 0.55, 0.45][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Menopause" title="A sudden menopause, and what helps" label="Menopause" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A thermometer rising and falling, with what helps menopausal symptoms">
      <rect x="50" y="28" width="22" height="128" rx="11" fill={WHITE} stroke={INK} strokeWidth="3" />
      <rect x="56" y={36 + 116 * (1 - level)} width="10" height={116 * level} rx="5" fill={INK} />
      <circle cx="61" cy="164" r="18" fill={INK} />
      {at === 1 && [44, 72, 100].map(y => <path key={y} d={`M88 ${y} q8 -7 0 -14 q-8 -7 0 -14`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />)}
      {at === 0 && <Tags x={140} y={40} width={156} gap={36} labels={["Hormone therapy", "Chemotherapy", "Ovary surgery"]} lit={() => false} />}
      {at === 1 && <Tags x={140} y={26} width={156} gap={34} labels={["A fan", "Loose layers", "Water to hand", "Less caffeine"]} lit={() => true} />}
      {at === 2 && <g><rect x="150" y="48" width="140" height="74" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={220} y={84} size={22} serif>HRT</W><W x={220} y={108} size={10}>Not usually advised</W></g>}
      {at === 3 && <Tags x={140} y={40} width={156} gap={36} labels={["Moisturisers", "Talking therapy (CBT)", "Bone scan"]} lit={() => true} />}
      {at === 4 && <g><rect x="170" y="34" width="110" height="122" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={225} y={56} size={10.5}>Symptom diary</W>{[76, 96, 116, 136].map(y => <path key={y} d={`M184 ${y} H266`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}</g>}
      <Cap>{["Treatment can bring on menopause", "The most common symptom: hot flushes", "HRT is not usually recommended", "Help for dryness, mood and bones", "Note symptoms; ask about a clinic"][at]}</Cap>
    </svg>} />;
}

function BcDesk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Back to work, with the law behind you" label="Going back to work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk with a fan and a clock, the Equality Act, a grant and a signpost">
      <g opacity={fade(at === 0)}><path d="M22 28 H80 L98 46 V124 H22 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><W x={60} y={70} size={10.5}>Equality</W><W x={60} y={86} size={10.5}>Act 2010</W></g>
      <g opacity={fade(at === 3)}><circle cx="136" cy="56" r="20" fill={at === 3 ? GOLD : WHITE} stroke={INK} strokeWidth="2.5" /><W x={136} y={63} size={18} serif>£</W></g>
      <path d="M140 134 H274 M150 134 V176 M264 134 V176" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <g opacity={fade(at === 1)}><Clock x={174} y={112} r={16} hand={at === 1 ? 2 : 0.8} /></g>
      <g opacity={fade(at === 2)}><circle cx="222" cy="106" r="16" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M222 106 l0 -12 M222 106 l11 6 M222 106 l-11 6" stroke={INK} strokeWidth="3" strokeLinecap="round" /><path d="M222 122 V134" stroke={INK} strokeWidth="3" /></g>
      <g opacity={fade(at === 4)}><path d="M292 30 V134" stroke={INK} strokeWidth="4" /><path d="M292 36 H312 l6 7 l-6 7 H292 Z" fill={at === 4 ? GOLD : WHITE} stroke={INK} strokeWidth="2" /><path d="M292 58 H272 l-6 7 l6 7 H292 Z" fill={at === 4 ? GOLD : WHITE} stroke={INK} strokeWidth="2" /></g>
      <Cap>{["Protected by the Equality Act 2010", "Plan your return with your team", "A phased return, a fan, extra breaks", "Access to Work: no need to repay", "Take time to weigh all your options"][at]}</Cap>
    </svg>} />;
}

function BcCloseness(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Closeness" title="Finding closeness again" label="Sex and intimacy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people side by side, finding closeness and talking">
      <Person x={104} y={160} scale={1.3} /><Person x={216} y={160} scale={1.3} fill={SOFT} />
      {(at === 0 || at === 2) && <HeartShape x={160} y={92} size={44} fill={at === 2 ? GOLD : WHITE} />}
      {at === 2 && <path d="M126 162 Q160 182 194 162" stroke={GOLD} strokeWidth="4" fill="none" strokeLinecap="round" />}
      {at === 1 && <Box x={75} y={30} width={170} text="Try different products" />}
      {at === 3 && <g><Bubble x={130} y={52} text="· · ·" width={70} /><Bubble x={206} y={40} text="· · ·" width={70} /></g>}
      {at === 4 && <Box x={85} y={30} width={150} text="Your breast care nurse" lit />}
      <Cap>{["Desire should improve as time goes on", "Moisturisers and lubricants can help", "Closeness with no expectations", "Talk when you are not being intimate", "Most do not need long-term therapy"][at]}</Cap>
    </svg>} />;
}

function BcPath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const walker = [[98, 147], [150, 127], [200, 118], [250, 128], [292, 128]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood" title="The low months, and the way through" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path leading away from a hospital into open ground, with signposts to help">
      <rect x="14" y="80" width="62" height="70" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M45 96 V116 M35 106 H55" stroke={INK} strokeWidth="4" />
      <path d="M76 150 C130 150, 150 112, 200 118 S270 140, 306 128" stroke={LINE} strokeWidth="10" fill="none" strokeLinecap="round" />
      {at >= 1 && at !== 4 && <circle cx="140" cy="40" r="16" fill={GOLD} opacity={0.5 + at * 0.15} />}
      <circle cx={walker[0]} cy={walker[1] - 14} r="9" fill={INK} />
      {at === 2 && <Tags x={196} y={20} width={110} gap={30} labels={["Distraction", "Relaxation", "Mindfulness"]} lit={() => false} />}
      {at === 3 && <Box x={176} y={36} width={130} text="Talking therapies" lit />}
      {at === 4 && <g><path d="M240 36 V120" stroke={INK} strokeWidth="4" />{["111", "116 123", "999"].map((sign, index) => <Box key={sign} x={204} y={30 + index * 26} width={72} height={22} text={sign} lit={index === 1} />)}</g>}
      <Cap>{["Some feel low when appointments stop", "Low mood often improves with time", "Exercise like a brisk walk can help", "Your team or GP can refer you", "Help is there, any time, day or night"][at]}</Cap>
    </svg>} />;
}

// ==== Bowel cancer ==========================================================================================

const COLON = "M96 170 V74 Q96 50 120 50 H200 Q224 50 224 74 V128 Q224 150 202 154 Q178 158 172 178";

function BwcColon(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="What you had" title="Three treatments, three different jobs" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The large bowel, with surgery, chemotherapy and radiotherapy shown around it">
      <path d={COLON} stroke={INK} strokeWidth="20" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d={COLON} stroke={WHITE} strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {at === 1 && <g><path d="M136 50 H180" stroke={GOLD} strokeWidth="12" /><path d="M136 36 V64 M180 36 V64" stroke={TEXT} strokeWidth="2.5" strokeDasharray="4 3" /></g>}
      <g opacity={fade(at === 2)}><rect x="22" y="30" width="30" height="38" rx="7" fill={at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" /><path d="M37 68 V112" stroke={INK} strokeWidth="2.5" /><circle cx="37" cy="118" r="4" fill={INK} /></g>
      {at === 3 && <path d="M300 130 L184 172 M304 160 L186 176 M300 190 L184 180" stroke={GOLD} strokeWidth="3" strokeDasharray="7 5" />}
      {at === 0 && <Person x={280} y={96} scale={1.1} fill={SOFT} />}
      {at === 4 && <path d="M140 104 l14 14 l28 -32" stroke={GOLD} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      <Cap>{["Your nurse specialist: main contact", "The part with the cancer is removed", "Chemo cycles every 2 to 3 weeks", "Radiotherapy for rectal cancer", "Most side effects ease in weeks"][at]}</Cap>
    </svg>} />;
}

function BwcTnm(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Your results" title="Reading your report, letter by letter" label="Your results" credit="Illustration: Rehyn. A picture of the idea, not anyone's own results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Layers of the bowel wall with a growth, nearby lymph nodes, and the letters T, N and M">
      <W x={84} y={32} size={10}>Bowel wall</W>
      {[0, 1, 2, 3].map(layer => <rect key={layer} x="24" y={40 + layer * 22} width="120" height="22" fill={layer % 2 ? WHITE : TINT} stroke={LINE} strokeWidth="1.5" />)}
      <path d={at === 0 ? "M66 40 C66 64, 102 64, 102 40 Z" : "M62 40 C60 96, 106 96, 104 40 Z"} fill={GOLD} stroke={INK} strokeWidth="2" />
      {[50, 84, 118].map((x, index) => <circle key={x} cx={x} cy="148" r="8" fill={at === 2 && index < 2 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />)}
      <W x={84} y={176} size={10}>Lymph nodes</W>
      {at === 0 && <Tags x={176} y={40} width={120} gap={36} labels={["Size", "Where it is", "Spread"]} lit={() => false} />}
      {at === 1 && <g>{[{ l: "T", t: "Wall" }, { l: "N", t: "Nodes" }, { l: "M", t: "Spread" }].map((item, index) => <g key={item.l}>
        <rect x={176 + index * 44} y="40" width="38" height="42" rx="8" fill={INK} /><W x={195 + index * 44} y={69} size={22} fill={WHITE} serif>{item.l}</W>
        <W x={195 + index * 44} y={100} size={10}>{item.t}</W></g>)}</g>}
      {at === 2 && <g><W x={236} y={54} size={18} serif>T3 N1 M0</W><path d="M236 64 V78" stroke={INK} strokeWidth="2.5" />{["1", "2", "3", "4"].map((stage, index) => <Box key={stage} x={180 + index * 29} y={84} width={25} height={28} text={stage} lit={index === 2} size={11} />)}</g>}
      {at === 3 && <g>
        <rect x="180" y="58" width="28" height="28" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M224 60 L252 56 L248 88 L226 84 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M268 62 L284 54 L296 66 L288 74 L298 88 L276 90 L270 78 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        {["1", "2", "3"].map((grade, index) => <W key={grade} x={194 + index * 46} y={112} size={11}>{grade}</W>)}
      </g>}
      {at === 4 && <Tags x={176} y={48} width={124} gap={36} labels={["MMR or MSI", "RAS and BRAF"]} lit={() => true} />}
      <Cap>{["The stage helps decide treatment", "How far it grew, nodes, and spread", "TNM gives a stage from 1 to 4", "Grade: how unusual the cells look", "Tests on the cells guide next steps"][at]}</Cap>
    </svg>} />;
}

function BwcYears(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const visits = [40, 52, 64, 76, 96, 120, 166, 218, 270];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Follow-up" title="Checks that thin out over five years" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five years of follow-up, with checks close together at first and further apart later">
      <path d="M30 120 H290" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {[1, 2, 3, 4].map(year => <path key={year} d={`M${30 + year * 52} 112 V128`} stroke={SOFT} strokeWidth="2" />)}
      {["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"].map((year, index) => <W key={year} x={56 + index * 52} y={148} size={10}>{year}</W>)}
      {visits.map(x => <circle key={x} cx={x} cy="120" r="5.5" fill={at === 2 ? INK : SOFT} />)}
      {[82, 238].map(x => <g key={x} opacity={fade(at === 1)}><circle cx={x} cy="94" r="9" fill="none" stroke={GOLD} strokeWidth="4" /><path d={`M${x} 103 V112`} stroke={GOLD} strokeWidth="3" /></g>)}
      {at === 0 && <Person x={160} y={72} scale={1} />}
      {at === 3 && <g><rect x="148" y="30" width="24" height="44" rx="5" fill={INK} /><circle cx="160" cy="66" r="3" fill={WHITE} /></g>}
      {at === 4 && <g><Person x={142} y={74} scale={1} /><Person x={180} y={74} scale={1} fill={SOFT} /></g>}
      <Cap>{["Checking how you are recovering", "Colonoscopy around years 1 and 4", "Up to five years, less often in time", "No need to wait for your next visit", "It can help to tell someone close"][at]}</Cap>
    </svg>} />;
}

function BwcStoma(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Stoma" title="A new opening, a new routine" label="Stoma" credit="Illustration: Rehyn. A picture of the idea, not anyone's own body."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An outline of a tummy with a stoma and a bag, and what to know about it">
      <path d="M40 30 C40 22, 130 22, 130 30 L138 150 C138 180, 32 180, 32 150 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="85" cy="92" r="3" fill={SOFT} />
      {at === 0 ? <circle cx="106" cy="118" r="10" fill={SOFT} stroke={INK} strokeWidth="2" />
        : <rect x="90" y="108" width="32" height="48" rx="13" fill={TINT} stroke={INK} strokeWidth="2.5" />}
      {at === 0 && <Tags x={186} y={40} width={110} gap={36} labels={["Soft", "Slippery", "Pink"]} lit={() => false} />}
      {at === 1 && [{ x: 160, h: "Colostomy", a: "Large bowel", b: "Left side" }, { x: 236, h: "Ileostomy", a: "Small bowel", b: "Right side" }].map(card => <g key={card.h}>
        <rect x={card.x} y="30" width="72" height="104" rx="10" fill={WHITE} stroke={INK} strokeWidth="2" />
        <rect x={card.x} y="30" width="72" height="28" rx="10" fill={INK} /><W x={card.x + 36} y={49} size={10} fill={WHITE}>{card.h}</W>
        <W x={card.x + 36} y={84} size={9.5}>{card.a}</W><W x={card.x + 36} y={112} size={9.5}>{card.b}</W>
      </g>)}
      {at === 2 && <g><path d="M166 86 H204 M256 86 H294" stroke={INK} strokeWidth="14" strokeLinecap="round" /><path d="M212 86 H224 M218 79 L225 86 L218 93 M248 86 H236 M242 79 L235 86 L242 93" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>}
      {at === 3 && <Squares x={170} y={58} count={8} filled={8} size={14} gap={17} labels={["1", "2", "3", "4", "5", "6", "7", "8"]} />}
      {at === 3 && <W x={240} y={100} size={10.5}>Weeks 1 to 8</W>}
      {at === 4 && <Tags x={180} y={34} width={120} gap={36} labels={["Less output", "Cramps", "Swelling"]} lit={() => true} />}
      <Cap>{["Swelling eases after 6 to 8 weeks", "Ileostomy bags: emptied 4 to 6 a day", "Temporary ones may be reversed", "About 8 weeks: avoid heavy lifting", "Call your stoma nurse urgently"][at]}</Cap>
    </svg>} />;
}

function BwcSettle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const points = Array.from({ length: 28 }, (_, index) => { const amp = 46 * Math.exp(-index / 8); return [30 + index * 10, 104 + (index % 2 ? -amp : amp * 0.5)]; });
  const dot = points[[1, 7, 13, 19, 27][at]];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Your bowels" title="Settling into a new normal" label="Bowel changes" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A jagged line of bowel changes that settles into a steadier pattern over a year">
      {at === 1 && <rect x="30" y="50" width="150" height="104" rx="6" fill={TINT} />}
      <path d="M30 162 H300" stroke={LINE} strokeWidth="3" />
      <W x={30} y={180} size={10} anchor="start">Surgery</W><W x={165} y={180} size={10}>6 months</W><W x={300} y={180} size={10} anchor="end">1 year</W>
      <path d={points.map((point, index) => `${index ? "L" : "M"}${point[0]} ${point[1]}`).join(" ")} stroke={INK} strokeWidth="3.5" fill="none" strokeLinejoin="round" />
      <circle cx={dot[0]} cy={dot[1]} r="8" fill={GOLD} stroke={WHITE} strokeWidth="3" />
      {at === 2 && <Box x={150} y={22} width={150} text="After rectal surgery" lit />}
      {at === 3 && <Squares x={124} y={24} count={12} filled={12} size={12} gap={15} />}
      <Cap>{["How often, how urgent, how complete", "Often up to a year, then a new normal", "LARS: tell your healthcare team", "Pelvic floor: at least 12 weeks", "Gentle skin care and a daily walk"][at]}</Cap>
    </svg>} />;
}

function BwcPlate(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const portions = at === 1 ? [[74, 82, 10], [104, 80, 10], [118, 106, 10], [92, 124, 10], [66, 108, 10]] : at === 4 ? [[80, 84, 4], [92, 78, 4], [104, 90, 4], [76, 102, 4], [98, 112, 4], [112, 100, 4]] : [[72, 80, 16], [110, 84, 14], [90, 120, 15]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Food" title="Low fibre first, then step by step" label="Eating" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A plate of small portions, a food diary and fibre being added back slowly">
      <circle cx="92" cy="100" r="64" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="92" cy="100" r="50" fill="none" stroke={LINE} strokeWidth="2" />
      {portions.map(([x, y, r], index) => <circle key={index} cx={x} cy={y} r={r} fill={[TINT, GOLD, SOFT][index % 3]} stroke={INK} strokeWidth="1.5" />)}
      {at === 0 && <Tags x={176} y={40} width={132} gap={36} labels={["White pasta", "Cooked, peeled veg", "Fish, eggs, tofu"]} lit={() => false} />}
      {at === 1 && <Tags x={172} y={54} width={136} gap={38} labels={["Small, frequent meals", "6 to 8 glasses a day"]} lit={() => true} />}
      {at === 2 && <g><rect x="184" y="26" width="112" height="140" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={240} y={46} size={10.5}>Food diary</W>
        {[68, 94, 120, 146].map((y, index) => <g key={y}><path d={`M198 ${y} H252`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />
          {index === 2 ? <path d={`M266 ${y - 6} l12 12 M278 ${y - 6} l-12 12`} stroke={TEXT} strokeWidth="2.5" /> : <path d={`M264 ${y} l5 5 l10 -11`} stroke={INK} strokeWidth="2.5" fill="none" />}</g>)}</g>}
      {at === 3 && <g>{[22, 40, 58, 76].map((h, index) => <rect key={h} x={186 + index * 28} y={150 - h} width="22" height={h} rx="4" fill={INK} opacity={0.4 + index * 0.2} />)}<W x={240} y={168} size={10.5}>A little more fibre</W></g>}
      {at === 4 && <Tags x={172} y={54} width={136} gap={38} labels={["Chew small hard foods", "Keep hydrated"]} lit={() => true} />}
      <Cap>{["Low fibre for about 6 weeks", "Small mouthfuls, chewed slowly", "Cut a food out, try again in weeks", "Add fibre back slowly, drink plenty", "With a stoma: small amounts, chew well"][at]}</Cap>
    </svg>} />;
}

function BwcTingle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const glow = at === 2 ? 0.35 : at >= 3 ? 0.6 : 1;
  const tips = [[-46, 4], [-22, -46], [-10, -62], [2, -58], [14, -46]];
  const pulse = still || at >= 2 ? undefined : "lib-why-pulse";
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Tingling" title="When chemotherapy leaves you tingling" label="Neuropathy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hand and a foot with tingling at the fingertips and toes, and ways to stay safe">
      <g transform="translate(88 112)">
        <path d="M-30 70 C-34 40, -48 30, -50 10 C-50 0, -40 0, -36 10 L-28 30 V-40 a6 6 0 0 1 12 0 V-10 V-56 a6 6 0 0 1 12 0 V-10 V-52 a6 6 0 0 1 12 0 V-8 V-40 a6 6 0 0 1 12 0 V30 C32 56, 20 70, 10 70 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        {tips.map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="5" fill={GOLD} opacity={glow} className={pulse} />)}
      </g>
      <g transform="translate(184 112)">
        <ellipse cx="0" cy="14" rx="18" ry="38" fill={WHITE} stroke={INK} strokeWidth="3" />
        {[[-12, -34, 6], [0, -40, 5], [10, -37, 4.5], [17, -31, 4], [21, -24, 3.5]].map(([x, y, r]) => <circle key={x} cx={x} cy={y} r={r} fill={GOLD} opacity={glow} stroke={INK} strokeWidth="1.5" />)}
      </g>
      {at === 1 && <path d="M270 52 V96 M251 63 L289 85 M251 85 L289 63" stroke={INK} strokeWidth="3" strokeLinecap="round" />}
      {at === 2 && <path d="M270 140 V70 M254 86 L270 70 L286 86" stroke={GOLD} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      {at === 3 && <Person x={270} y={128} scale={1.2} />}
      {at === 4 && <g><path d="M240 100 H302 V116 C302 134, 240 134, 240 116 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M248 90 q6 -6 12 0 t12 0 t12 0 t12 0" stroke={SOFT} strokeWidth="3" fill="none" /></g>}
      <Cap>{["Pins and needles, numbness, weakness", "Cold can trigger it: wear gloves", "For most, it slowly improves", "Exercise can help reduce symptoms", "Test bath water with your elbow"][at]}</Cap>
    </svg>} />;
}

function BwcFootpath(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const stations = [{ x: 46, t: "Bed" }, { x: 124, t: "Chair" }, { x: 202, t: "Home" }, { x: 280, t: "Park" }];
  const here = [1, 2, 2, 2, 3][at];
  const icon = (index: number, x: number) => {
    if (index === 0) return <path d={`M${x - 22} 132 V112 M${x - 22} 122 H${x + 22} V132 M${x - 18} 116 h10`} stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />;
    if (index === 1) return <path d={`M${x - 10} 100 V132 M${x - 10} 118 H${x + 12} V132`} stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
    if (index === 2) return <path d={`M${x - 18} 132 V112 L${x} 98 L${x + 18} 112 V132 Z`} fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />;
    return <g><path d={`M${x} 132 V114`} stroke={INK} strokeWidth="4" /><circle cx={x} cy={106} r="14" fill={SOFT} /></g>;
  };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Moving again" title="From the bedside to a daily walk" label="Moving after surgery" credit="Illustration: Rehyn. Check with your own team before exercising."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from a hospital bed to a chair, home and a park">
      <path d="M46 140 H280" stroke={LINE} strokeWidth="6" strokeDasharray="2 10" strokeLinecap="round" />
      {stations.map((station, index) => <g key={station.t} opacity={index <= here ? 1 : 0.4}>{icon(index, station.x)}<W x={station.x} y={160} size={10.5}>{station.t}</W></g>)}
      <circle cx={stations[here].x} cy={146} r="6" fill={GOLD} />
      {at === 2 && <g><rect x="138" y="28" width="46" height="36" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={161} y={51} size={10}>Heavy</W><path d="M130 72 L192 20" stroke={GOLD} strokeWidth="4" strokeLinecap="round" /></g>}
      {at === 3 && <g><Person x={202} y={72} scale={0.9} /><ellipse cx="202" cy="76" rx="20" ry="7" fill="none" stroke={GOLD} strokeWidth="3" /></g>}
      {at === 4 && <Squares x={84} y={30} count={7} filled={5} size={18} gap={22} labels={["M", "T", "W", "T", "F", "S", "S"]} />}
      {at === 1 && <path d="M60 60 L100 60 L100 44 L140 44 L140 28 L180 28" stroke={SOFT} strokeWidth="4" fill="none" strokeLinejoin="round" />}
      <Cap>{["In a chair, then walking round the bed", "Do a little more every day", "No heavy lifting for up to 3 months", "Ask your team about core exercises", "Build to 30 minutes, 5 days a week"][at]}</Cap>
    </svg>} />;
}

function BwcReadyBag(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const items = ["Toilets", "Radar key", "Supplies", "Travel", "Letter"];
  const icon = (index: number, x: number, c: string) => {
    const y = 96;
    if (index === 0) return <path d={`M${x} ${y + 14} C${x - 14} ${y - 2}, ${x - 12} ${y - 16}, ${x} ${y - 16} C${x + 12} ${y - 16}, ${x + 14} ${y - 2}, ${x} ${y + 14} Z`} fill="none" stroke={c} strokeWidth="2.5" />;
    if (index === 1) return <g><circle cx={x - 7} cy={y} r="7" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x} ${y} H${x + 14} M${x + 10} ${y} v6 M${x + 14} ${y} v5`} stroke={c} strokeWidth="2.5" /></g>;
    if (index === 2) return <g><rect x={x - 13} y={y - 8} width="26" height="20" rx="4" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x - 6} ${y - 8} V${y - 13} H${x + 6} V${y - 8}`} fill="none" stroke={c} strokeWidth="2.5" /></g>;
    if (index === 3) return <path d={`M${x - 15} ${y + 2} L${x + 15} ${y - 4} M${x - 2} ${y - 1} L${x - 8} ${y - 13} M${x - 2} ${y - 1} L${x + 2} ${y + 13} M${x - 13} ${y + 2} l-3 -6`} stroke={c} strokeWidth="2.5" strokeLinecap="round" />;
    return <g><rect x={x - 13} y={y - 9} width="26" height="18" rx="2" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x - 13} ${y - 9} L${x} ${y + 2} L${x + 13} ${y - 9}`} fill="none" stroke={c} strokeWidth="2.5" /></g>;
  };
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Going out" title="Ready to go out again" label="Going out" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A toilet map pin, a Radar key, a bag of supplies, a plane and a letter">
      <path d="M40 96 H280" stroke={LINE} strokeWidth="4" />
      {items.map((item, index) => { const x = 40 + index * 60, on = at === index; return <g key={item} opacity={fade(on)}>
        <circle cx={x} cy="96" r="25" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, x, on ? WHITE : INK)}
        <W x={x} y={140} size={10}>{item}</W>
      </g>; })}
      {at === 1 && <Box x={85} y={26} width={150} text="Just Can't Wait card" />}
      {at === 2 && <Box x={90} y={26} width={140} text="Wipes, pads, spares" />}
      {at === 3 && <Box x={85} y={26} width={150} text="Travel certificate" />}
      <Cap>{["Know where the toilets are", "Radar key: over 9,000 toilets", "Pack wipes, pads and spare underwear", "Spare supplies in your hand luggage", "Tell insurers all your conditions"][at]}</Cap>
    </svg>} />;
}

function BwcWeek(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const hours = at === 0 ? [0, 0, 0, 0, 0] : at === 1 ? [0.2, 0.3, 0.45, 0.6, 0.7] : [0.8, 0.8, 0.8, 0.8, 0.8];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Back to work, on fair terms" label="Going back to work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A working week filling up gradually, with the changes that help">
      {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => { const x = 30 + index * 54; return <g key={day}>
        <W x={x + 23} y={30} size={10.5}>{day}</W>
        <rect x={x} y="38" width="46" height="74" rx="6" fill={WHITE} stroke={INK} strokeWidth="2" />
        {hours[index] > 0 && <rect x={x + 4} y={108 - 66 * hours[index]} width="38" height={66 * hours[index]} rx="4" fill={INK} opacity={at === 1 ? 1 : 0.45} />}
      </g>; })}
      {at === 0 && <g><circle cx="160" cy="75" r="40" fill={WHITE} stroke={GOLD} strokeWidth="4" /><W x={160} y={72} size={11}>Day one</W><W x={160} y={88} size={10}>Equality Act</W></g>}
      {at === 2 && ["Near toilets", "Extra breaks", "Flexible hours"].map((label, index) => <Box key={label} x={14 + index * 98} y={130} width={94} text={label} lit size={10} />)}
      {at === 3 && <g><circle cx="160" cy="150" r="20" fill={GOLD} stroke={INK} strokeWidth="2.5" /><W x={160} y={157} size={18} serif>£</W></g>}
      {at === 4 && <g><rect x="144" y="136" width="32" height="26" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M152 136 V128 H168 V136" fill="none" stroke={INK} strokeWidth="2.5" /></g>}
      <Cap>{["Protected from the day of diagnosis", "A few hours first, then build up", "Changes your employer has to make", "Access to Work: nothing to pay back", "Spare pads and wipes for confidence"][at]}</Cap>
    </svg>} />;
}

function BwcTalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Intimacy" title="Intimacy after bowel cancer" label="Sex and intimacy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person thinking about body changes, the weeks after surgery, and talking with someone">
      <Person x={60} y={160} scale={1.3} />
      {at === 0 && <Tags x={160} y={44} width={110} gap={36} labels={["Sad", "Angry", "Worried"]} lit={() => false} />}
      {at === 1 && <g><Squares x={130} y={74} count={6} filled={6} size={24} gap={28} labels={["1", "2", "3", "4", "5", "6"]} /><W x={210} y={124} size={10.5}>weeks at least</W></g>}
      {at === 2 && <Tags x={130} y={54} width={160} gap={38} labels={["Empty the bag first", "A support band"]} lit={() => true} />}
      {at === 3 && <g><Person x={260} y={160} scale={1.3} fill={SOFT} /><Bubble x={124} y={60} text="· · ·" width={70} /><Bubble x={206} y={46} text="· · ·" width={70} /></g>}
      {at === 4 && <Tags x={140} y={40} width={150} gap={36} labels={["Early menopause", "Fertility", "Contraception"]} lit={() => false} />}
      <Cap>{["Feeling differently about your body", "At least 6 weeks after major surgery", "Take time to get used to your stoma", "A nurse can refer you to a counsellor", "Ask your team about fertility"][at]}</Cap>
    </svg>} />;
}

function BwcFeel(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const visits = [[0, 1], [0, 3], [0, 5], [1, 2], [1, 5], [2, 4]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Mood" title="When treatment ends and feelings begin" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A calendar with appointments thinning out, a cloud, a sun, and help by phone">
      {Array.from({ length: 28 }, (_, index) => { const row = Math.floor(index / 7), col = index % 7, on = visits.some(([r, c]) => r === row && c === col); return <rect key={index} x={18 + col * 21} y={26 + row * 21} width="17" height="17" rx="3" fill={on ? INK : WHITE} stroke={SOFT} strokeWidth="1.5" opacity={at === 0 ? 1 : 0.5} />; })}
      {(at === 0 || at === 2) && <path d="M196 100 a20 20 0 0 1 10 -36 a26 26 0 0 1 48 -6 a20 20 0 0 1 24 26 a18 18 0 0 1 -8 16 Z" fill={at === 2 ? SOFT : TINT} stroke={SOFT} strokeWidth="2" />}
      {at === 1 && <Tags x={186} y={26} width={116} gap={34} labels={["Withdrawn", "Fearful", "Frustrated"]} lit={() => false} />}
      {at === 3 && <g><circle cx="244" cy="70" r="22" fill={GOLD} />{Array.from({ length: 8 }, (_, index) => { const r = index * Math.PI / 4; return <path key={index} d={`M${244 + 30 * Math.cos(r)} ${70 + 30 * Math.sin(r)} L${244 + 40 * Math.cos(r)} ${70 + 40 * Math.sin(r)}`} stroke={GOLD} strokeWidth="3" strokeLinecap="round" />; })}</g>}
      {at === 4 && <g><rect x="214" y="28" width="60" height="96" rx="9" fill={INK} /><rect x="220" y="40" width="48" height="66" rx="4" fill={WHITE} /><W x={244} y={78} size={10.5}>116 123</W></g>}
      {at === 4 && ["NHS 111", "Shout 85258", "999 or A&E"].map((label, index) => <Box key={label} x={14 + index * 98} y={140} width={94} text={label} size={10} />)}
      <Cap>{["Fewer appointments, less support", "There is no right or wrong way to feel", "Sad for weeks? Speak to your GP", "Talk, stay active, keep a routine", "Samaritans listen, day or night"][at]}</Cap>
    </svg>} />;
}

function BwcTree(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  // Who is lit: "you" (index 3) carries Lynch syndrome; parents, siblings and children have a 1 in 2 chance.
  const people = [{ x: 130, y: 54 }, { x: 190, y: 54 }, { x: 90, y: 116 }, { x: 160, y: 116 }, { x: 230, y: 116 }, { x: 60, y: 176 }, { x: 130, y: 176 }, { x: 190, y: 176 }, { x: 260, y: 176 }];
  const half = [0, 1, 2, 4, 6, 7];
  const fill = (index: number) => at === 1 && index === 3 ? GOLD : at === 2 ? (index === 3 ? GOLD : half.includes(index) ? INK : LINE) : at === 3 && index === 0 ? GOLD : at === 4 ? LINE : SOFT;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Family" title="Does it run in my family?" label="Family history" credit="Illustration: Rehyn. A picture of the idea, not anyone's own family."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A family tree, with one branch picked out, and a home screening test">
      <path d="M130 64 H190 M160 64 V86 M90 86 H230 M90 86 V94 M160 86 V94 M230 86 V94 M90 126 V146 H60 V154 M160 126 V146 M130 146 H190 M130 146 V154 M190 146 V154 M230 126 V146 H260 V154" stroke={LINE} strokeWidth="2.5" fill="none" />
      {people.map((person, index) => <Person key={index} x={person.x} y={person.y} scale={0.6} fill={fill(index)} />)}
      {at === 2 && <circle cx="160" cy="106" r="18" fill="none" stroke={GOLD} strokeWidth="3" />}
      {at === 4 && <g><rect x="262" y="24" width="42" height="30" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M262 34 H304" stroke={INK} strokeWidth="2" /><circle cx="283" cy="45" r="4" fill={GOLD} /></g>}
      <Cap>{["Most bowel cancer is not inherited", "Lynch syndrome: around 1 in 30", "Close relatives: a 1 in 2 chance", "A close relative under 50? Tell a GP", "Home test every 2 years, 50 to 74"][at]}</Cap>
    </svg>} />;
}

export function CancerPieceView({ piece, ...props }: { piece: CancerPiece } & PieceProps) {
  switch (piece) {
    case "bc-timeline": return <BcTimeline {...props} />;
    case "bc-report": return <BcReport {...props} />;
    case "bc-checkups": return <BcCheckups {...props} />;
    case "bc-worry-curve": return <BcWorryCurve {...props} />;
    case "bc-battery": return <BcBattery {...props} />;
    case "bc-arm-reach": return <BcArmReach {...props} />;
    case "bc-tablet-years": return <BcTabletYears {...props} />;
    case "bc-fog": return <BcFog {...props} />;
    case "bc-mirror": return <BcMirror {...props} />;
    case "bc-flush": return <BcFlush {...props} />;
    case "bc-desk": return <BcDesk {...props} />;
    case "bc-closeness": return <BcCloseness {...props} />;
    case "bc-path": return <BcPath {...props} />;
    case "bwc-colon": return <BwcColon {...props} />;
    case "bwc-tnm": return <BwcTnm {...props} />;
    case "bwc-years": return <BwcYears {...props} />;
    case "bwc-stoma": return <BwcStoma {...props} />;
    case "bwc-settle": return <BwcSettle {...props} />;
    case "bwc-plate": return <BwcPlate {...props} />;
    case "bwc-tingle": return <BwcTingle {...props} />;
    case "bwc-footpath": return <BwcFootpath {...props} />;
    case "bwc-ready-bag": return <BwcReadyBag {...props} />;
    case "bwc-week": return <BwcWeek {...props} />;
    case "bwc-talk": return <BwcTalk {...props} />;
    case "bwc-feel": return <BwcFeel {...props} />;
    case "bwc-tree": return <BwcTree {...props} />;
  }
}
