import type { NewsPiece } from "@/content/ischaemic-news";
import { GYN_PIECES, type GynPiece } from "@/content/gyn-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { Clock, credit, HeartShape, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Bubble, Tags } from "./NewsMindPieces";

// The Ovarian, Womb and Cervical cancer pages' own pieces (content/gyn-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Cancer & recovery pieces. Each is steered by the card's sections;
// pictures show ideas, calmly, and never anyone's own body, scans or results. Intimate topics are drawn only as
// simple shapes and words.

export const isGynPiece = (piece: NewsPiece): piece is GynPiece => (GYN_PIECES as readonly string[]).includes(piece);

const bodyCredit = "Illustration: Rehyn. A picture of the idea, not anyone's own body.";

/** The one-line caption for the chosen section. */
const Cap = ({ children, y = 206 }: { children: string; y?: number }) => <W x={160} y={y} size={11.5}>{children}</W>;
/** A labelled box; `lit` fills it. */
const Box = ({ x, y, width, text, lit = false, height = 28, size = 10.5 }: { x: number; y: number; width: number; text: string; lit?: boolean; height?: number; size?: number }) =>
  <g><rect x={x} y={y} width={width} height={height} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x + width / 2} y={y + height / 2 + 4} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A row of labelled boxes of one width, starting at x. */
const Row = ({ x, y, width, gap, labels, lit = () => false, size = 10 }: { x: number; y: number; width: number; gap: number; labels: string[]; lit?: (index: number) => boolean; size?: number }) =>
  <g>{labels.map((label, index) => <Box key={label} x={x + index * gap} y={y} width={width} text={label} lit={lit(index)} size={size} />)}</g>;
/** A row of small day or week squares, the first `filled` of them filled. */
const Squares = ({ x, y, count, filled, size = 18, gap = 22, labels }: { x: number; y: number; count: number; filled: number; size?: number; gap?: number; labels?: string[] }) =>
  <g>{Array.from({ length: count }, (_, index) => <g key={index}>
    <rect x={x + index * gap} y={y} width={size} height={size} rx="4" fill={index < filled ? INK : WHITE} stroke={INK} strokeWidth="1.5" />
    {labels && <W x={x + index * gap + size / 2} y={y + size / 2 + 4} size={9.5} fill={index < filled ? WHITE : TEXT}>{labels[index]}</W>}
  </g>)}</g>;
const fade = (lit: boolean) => (lit ? 1 : 0.35);
const nums = (count: number, from = 1) => Array.from({ length: count }, (_, index) => String(index + from));
const WEEK = ["M", "T", "W", "T", "F", "S", "S"];

/** A mobile phone, centred on (x, y). */
const Phone = ({ x, y, text }: { x: number; y: number; text?: string }) =>
  <g><rect x={x - 20} y={y - 34} width="40" height="68" rx="7" fill={INK} /><rect x={x - 15} y={y - 26} width="30" height="46" rx="3" fill={WHITE} />{text && <W x={x} y={y + 2} size={9.5}>{text}</W>}</g>;
/** A drop, centred on (x, y). */
const Drop = ({ x, y, fill = GOLD }: { x: number; y: number; fill?: string }) =>
  <path transform={`translate(${x} ${y})`} d="M0 -24 C10 -10, 18 0, 18 8 A18 18 0 0 1 -18 8 C-18 0, -10 -10, 0 -24 Z" fill={fill} stroke={INK} strokeWidth="2.5" />;
/** A glass of water, its rim centred on (x, y). */
const Glass = ({ x, y }: { x: number; y: number }) =>
  <g><path d={`M${x - 24} ${y} H${x + 24} L${x + 18} ${y + 80} H${x - 18} Z`} fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <path d={`M${x - 21} ${y + 26} H${x + 21} L${x + 17} ${y + 77} H${x - 17} Z`} fill={SOFT} /></g>;
/** A bone, centred on (x, y). */
const Bone = ({ x, y }: { x: number; y: number }) =>
  <g fill={INK}><rect x={x - 18} y={y - 5} width="36" height="10" rx="4" />{[[-18, -6], [-18, 6], [18, -6], [18, 6]].map(([dx, dy]) => <circle key={`${dx}${dy}`} cx={x + dx} cy={y + dy} r="6" />)}</g>;
/** A cloud, roughly centred on (x, y), `s` times its usual size. */
const Cloud = ({ x, y, s = 1, fill = SOFT }: { x: number; y: number; s?: number; fill?: string }) =>
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M-44 18 a20 20 0 0 1 10 -36 a26 26 0 0 1 48 -6 a20 20 0 0 1 24 26 a18 18 0 0 1 -8 16 Z" fill={fill} stroke={SOFT} strokeWidth={2 / s} />;
/** A gold coin with a pound sign. */
const Coin = ({ x, y }: { x: number; y: number }) =>
  <g><circle cx={x} cy={y} r="22" fill={GOLD} stroke={INK} strokeWidth="2.5" /><W x={x} y={y + 7} size={20} serif>£</W></g>;
/** A test tube, centred on x, from y down. */
const Tube = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 12} y={y} width="24" height="96" rx="12" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x={x - 8} y={y + 48} width="16" height="44" rx="8" fill={GOLD} /><path d={`M${x - 16} ${y} H${x + 16}`} stroke={INK} strokeWidth="4" strokeLinecap="round" /></g>;
/** A heavy bag with a line through it. */
const NoLifting = ({ x, y }: { x: number; y: number }) =>
  <g><rect x={x - 24} y={y - 18} width="48" height="36" rx="5" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M${x - 10} ${y - 18} V${y - 26} H${x + 10} V${y - 18}`} fill="none" stroke={INK} strokeWidth="2.5" />
    <W x={x} y={y + 4} size={10}>Heavy</W><path d={`M${x - 32} ${y + 24} L${x + 32} ${y - 30}`} stroke={GOLD} strokeWidth="4" strokeLinecap="round" /></g>;
/** A bladder shape, centred on (x, y). */
const Bladder = ({ x, y, s = 1, dashed = false }: { x: number; y: number; s?: number; dashed?: boolean }) =>
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M-22 -18 C-22 -30, 22 -30, 22 -18 C28 4, 18 24, 0 28 C-18 24, -28 4, -22 -18 Z" fill={dashed ? "none" : WHITE} stroke={dashed ? SOFT : INK} strokeWidth={3 / s} strokeDasharray={dashed ? `${5 / s} ${4 / s}` : undefined} />;

// ==== Ovarian cancer ========================================================================================

function OvPathway(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lit = [-1, 0, 1, 2, -1][at];
  const steps = ["Surgery", "Chemo", "Maintenance"];
  const icon = (index: number, x: number, on: boolean) => {
    const c = on ? WHITE : INK;
    if (index === 0) return <g><path d={`M${x - 12} 144 L${x + 2} 130`} stroke={c} strokeWidth="5" strokeLinecap="round" /><path d={`M${x + 2} 130 L${x + 12} 118`} stroke={c} strokeWidth="2.5" strokeLinecap="round" /></g>;
    if (index === 1) return <g><rect x={x - 8} y="116" width="16" height="18" rx="4" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x} 134 V146`} stroke={c} strokeWidth="2.5" /></g>;
    return <Pill x={x} y={132} fill={on ? GOLD : INK} />;
  };
  return <MemoryBand props={props} state={s} tone="theme" kicker="What you had" title="Surgery, chemotherapy, then maintenance" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three treatments on a line: surgery, chemotherapy and maintenance treatment">
      <path d="M30 132 H290" stroke={LINE} strokeWidth="8" strokeLinecap="round" />
      {steps.map((step, index) => {
        const x = 60 + index * 100, on = lit === index;
        return <g key={step} opacity={at === 0 || on ? 1 : at === 4 ? 0.3 : 0.4}>
          <circle cx={x} cy={132} r="24" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
          {icon(index, x, on)}
          <W x={x} y={176} size={10.5}>{step}</W>
        </g>;
      })}
      {at === 0 && <Row x={10} y={44} width={70} gap={76} labels={["Size", "Type", "Spread", "Your health"]} />}
      {at === 1 && <Row x={10} y={44} width={94} gap={103} labels={["Ovaries, tubes", "Womb, cervix", "Omentum"]} />}
      {at === 2 && <g><Squares x={73} y={36} count={6} filled={6} size={24} gap={30} labels={nums(6)} /><W x={160} y={86} size={10}>About 4 weeks after surgery</W></g>}
      {at === 3 && <g><Box x={14} y={44} width={142} text="PARP tablets, daily" size={10} /><Box x={164} y={44} width={142} text="Bevacizumab drip" size={10} /></g>}
      {at === 4 && <g><Box x={60} y={26} width={200} text="Call your care team now" lit /><Box x={60} y={62} width={200} text="Not sure how? NHS 111" /></g>}
      <Cap>{["Your plan was made around you", "Surgery also finds the type and stage", "Most chemotherapy courses are 6 cycles", "Maintenance helps control the cancer", "Signs of infection or clot: call now"][at]}</Cap>
    </svg>} />;
}

function OvRings(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rings = [{ n: 4, r: 76, x: 158 }, { n: 3, r: 60, x: 141 }, { n: 2, r: 42, x: 122 }, { n: 1, r: 22, x: 90 }];
  const isLit = (n: number) => (at === 1 && n <= 2) || (at === 2 && n >= 3);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stage and grade" title="Reading your stage and grade" label="Stage and grade" credit="Illustration: Rehyn. A picture of the idea, not anyone's own results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four rings spreading out from the centre for stages 1 to 4, with cells for the grade">
      <g opacity={at >= 3 ? 0.35 : 1}>
        {rings.map(ring => <circle key={ring.n} cx="90" cy="100" r={ring.r} fill={isLit(ring.n) ? (ring.n % 2 ? INK : SOFT) : WHITE} stroke={INK} strokeWidth="2" />)}
        {rings.map(ring => <W key={ring.n} x={ring.x} y={104} size={11} fill={isLit(ring.n) && ring.n % 2 ? WHITE : TEXT}>{String(ring.n)}</W>)}
      </g>
      {at === 0 && <g><W x={245} y={52} size={10.5}>FIGO stages</W><Row x={184} y={62} width={26} gap={31} labels={nums(4)} size={11} /></g>}
      {at === 1 && <Tags x={176} y={60} width={136} gap={36} labels={["1: ovaries or tubes", "2: in the pelvis"]} lit={() => true} />}
      {at === 2 && <Tags x={176} y={60} width={136} gap={36} labels={["3: nodes, peritoneum", "4: beyond the tummy"]} lit={() => true} />}
      {at === 3 && <g>
        <circle cx="210" cy="84" r="17" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M256 70 L272 64 L288 74 L282 86 L290 100 L268 104 L258 92 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={210} y={128} size={10}>Low grade</W><W x={272} y={128} size={10}>High grade</W>
      </g>}
      {at === 4 && <g><Box x={180} y={54} width={126} text="Target nurses" lit /><Box x={180} y={90} width={126} text="0808 802 6000" /></g>}
      <Cap>{["The exact stage may need surgery", "Stage 1 is described as early cancer", "Stages 3 and 4 have spread further", "Grade: how much cells look normal", "Stage and grade help plan treatment"][at]}</Cap>
    </svg>} />;
}

function OvTrend(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const dots = [40, 60, 80, 100, 120, 140, 160, 180, 210, 250];
  const points = [[50, 104], [80, 100], [110, 106], [140, 102], [170, 56], [200, 104], [230, 100], [260, 103]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="Check-ups, CA125 and the trend" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three years of check-ups, closer together at first, and a CA125 trend line">
      <g opacity={at === 1 ? 1 : 0.5}>
        <path d="M30 160 H290" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
        {[110, 190].map(x => <path key={x} d={`M${x} 151 V169`} stroke={SOFT} strokeWidth="2" />)}
        {dots.map(x => <circle key={x} cx={x} cy="160" r="5" fill={at === 1 ? INK : SOFT} />)}
        {["Year 1", "Year 2", "Year 3"].map((year, index) => <W key={year} x={70 + index * 80} y={182} size={10}>{year}</W>)}
      </g>
      {at === 0 && <g><Person x={84} y={132} scale={1.1} /><Bubble x={200} y={70} text="How are you feeling?" width={150} /></g>}
      {at === 1 && <g><W x={90} y={140} size={10}>More often at first</W><W x={240} y={140} size={10}>Less often later</W></g>}
      {at === 2 && <g>
        <path d="M30 30 V128 H290" stroke={LINE} strokeWidth="2.5" fill="none" />
        <path d="M30 72 H290" stroke={SOFT} strokeWidth="2" strokeDasharray="5 4" /><W x={26} y={76} size={10} anchor="end">35</W>
        <path d={points.map((point, index) => `${index ? "L" : "M"}${point[0]} ${point[1]}`).join(" ")} stroke={SOFT} strokeWidth="2" fill="none" />
        <path d="M50 104 L260 103" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        {points.map(([x, y]) => <circle key={x} cx={x} cy={y} r={x === 170 ? 6 : 4} fill={x === 170 ? GOLD : INK} />)}
        <W x={170} y={44} size={10}>One result</W><W x={270} y={120} size={10}>Trend</W>
      </g>}
      {at === 3 && <g><Phone x={64} y={74} text="Call" /><Tags x={110} y={30} width={190} gap={30} labels={["Pain in tummy or pelvis", "Bloating that stays", "Feeling full quickly"]} lit={() => false} /></g>}
      {at === 4 && <g><Person x={70} y={132} scale={1.1} /><Person x={120} y={132} scale={1.1} fill={SOFT} /><Tags x={176} y={34} width={130} gap={32} labels={["Bring someone", "Write things down", "Something relaxing"]} lit={() => true} /></g>}
      <Cap>{["A chance to talk about how you feel", "Often every 3 months at first", "Your team looks for a CA125 trend", "New symptoms? No need to wait", "Feeling anxious before scans is common"][at]}</Cap>
    </svg>} />;
}

function OvFamily(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Genes" title="A gene test for you and your family" label="Genes and family" credit="Illustration: Rehyn. A picture of the idea, not anyone's own family."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five people with one picked out, a blood test, and a family with siblings and children">
      {at === 0 && <g>
        <Box x={90} y={30} width={140} text="BRCA1 or BRCA2" lit />
        {[60, 110, 160, 210, 260].map((x, index) => <Person key={x} x={x} y={150} scale={1.1} fill={index === 2 ? GOLD : SOFT} />)}
      </g>}
      {(at === 1 || at === 2) && <Tube x={60} y={40} />}
      {at === 1 && <Tags x={110} y={40} width={194} gap={34} labels={["High grade serous types", "No family history needed", "Ask what is offered"]} lit={index => index === 1} />}
      {at === 2 && <g>
        <rect x="150" y="36" width="120" height="112" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="150" y="36" width="120" height="28" rx="10" fill={INK} /><W x={210} y={55} size={10.5} fill={WHITE}>Your result</W>
        <W x={210} y={110} size={32} serif>12</W><W x={210} y={134} size={10.5}>weeks</W>
      </g>}
      {at === 3 && <g>
        <path d="M90 34 H230 M90 34 V40 M160 34 V40 M230 34 V40 M160 92 V112 M125 112 H195 M125 112 V120 M195 112 V120" stroke={LINE} strokeWidth="2.5" fill="none" />
        <Person x={90} y={76} scale={0.9} /><Person x={160} y={76} scale={0.9} fill={GOLD} /><Person x={230} y={76} scale={0.9} />
        <Person x={125} y={156} scale={0.9} /><Person x={195} y={156} scale={0.9} />
        <W x={90} y={106} size={10}>1 in 2</W><W x={230} y={106} size={10}>1 in 2</W><W x={125} y={184} size={10}>1 in 2</W><W x={195} y={184} size={10}>1 in 2</W>
      </g>}
      <Cap>{["Up to 1 in 5 linked to a gene variant", "Offered even with no family history", "Result usually within 12 weeks", "Siblings and children: 1 in 2 chance"][at]}</Cap>
    </svg>} />;
}

function OvWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const week = (n: number) => 30 + n * 22;
  return <MemoryBand props={props} state={s} tone="theme" kicker="After surgery" title="Healing after surgery, week by week" label="Recovering from surgery" credit="Illustration: Rehyn. Follow your own team's advice on recovery."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A ruler of 12 weeks after surgery, with hospital, home, driving, work and lifting marked">
      <g opacity={at >= 3 ? 0.35 : 1}>
        {at === 1 && <rect x={week(6)} y="124" width={week(12) - week(6)} height="16" rx="8" fill={GOLD} opacity=".6" />}
        {at === 2 && <rect x={week(6)} y="124" width={week(8) - week(6)} height="16" rx="8" fill={GOLD} opacity=".8" />}
        <path d={`M${week(0)} 132 H${week(12)}`} stroke={LINE} strokeWidth="6" strokeLinecap="round" />
        {nums(13, 0).map(n => <path key={n} d={`M${week(Number(n))} 126 V138`} stroke={SOFT} strokeWidth="2" />)}
        {[0, 4, 8, 12].map(n => <W key={n} x={week(n)} y={156} size={10}>{String(n)}</W>)}
        <W x={162} y={174} size={10}>weeks</W>
      </g>
      {at === 0 && <g><path d="M26 112 V90 M26 102 H70 V112 M30 96 h14" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" /><Box x={90} y={34} width={190} text="3 to 7 days in hospital" lit /></g>}
      {at === 1 && <NoLifting x={262} y={70} />}
      {at === 2 && <Tags x={24} y={22} width={180} gap={30} labels={["Sex: at least 6 weeks", "Driving: 6 to 8 weeks", "Work: at least 8 weeks"]} lit={() => false} />}
      {at === 3 && <g><Glass x={60} y={30} /><Tags x={110} y={28} width={190} gap={32} labels={["Drink plenty", "More fruit and fibre", "Scars fade in time"]} lit={() => false} /></g>}
      {at === 4 && <Tags x={40} y={22} width={240} gap={30} labels={["Wound hot, red or swollen", "Leg pain, heat or swelling", "Short of breath, chest pain"]} lit={() => true} />}
      <Cap>{["Most go home after 3 to 4 days", "Recovery at home: 6 to 12 weeks", "Driving after 6 to 8 weeks, if safe", "Early changes can easily be treated", "Call your team straight away"][at]}</Cap>
    </svg>} />;
}

function OvParp(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Maintenance" title="Living with PARP inhibitors" label="Maintenance treatment" credit="Illustration: Rehyn. Never stop a medicine without your doctor."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week's pill organiser, morning and evening, with blood tests and the 24-hour number">
      <g opacity={fade(at === 1)}>
        {WEEK.map((day, index) => <g key={index}>
          <W x={67 + index * 36} y={121} size={9.5}>{day}</W>
          {[128, 156].map(y => <g key={y}><rect x={52 + index * 36} y={y} width="30" height="22" rx="5" fill={WHITE} stroke={INK} strokeWidth="2" />{at === 1 && <circle cx={67 + index * 36} cy={y + 11} r="5" fill={GOLD} />}</g>)}
        </g>)}
        <W x={46} y={143} size={9.5} anchor="end">AM</W><W x={46} y={171} size={9.5} anchor="end">PM</W>
      </g>
      {at === 0 && <g>
        <circle cx="84" cy="62" r="40" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M54 62 H76 M92 62 H114" stroke={INK} strokeWidth="5" strokeLinecap="round" /><path d="M79 54 L84 70 L89 54" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" />
        <Tags x={150} y={36} width={150} gap={34} labels={["BRCA variant", "HRD positive"]} lit={() => true} />
      </g>}
      {at === 1 && <g><Clock x={84} y={62} r={24} hand={Math.PI} /><Box x={150} y={48} width={150} text="Avoid grapefruit" /></g>}
      {at === 2 && <Tags x={60} y={20} width={200} gap={30} labels={["Feeling sick, early on", "Tiredness", "A lower dose may help"]} lit={index => index === 2} />}
      {at === 3 && <g><Drop x={84} y={62} /><Squares x={140} y={50} count={6} filled={6} size={20} gap={26} /></g>}
      {at === 4 && <g><Phone x={70} y={64} text="24h" /><Tags x={120} y={24} width={180} gap={28} labels={["High temperature", "Clot signs", "Allergic reaction"]} lit={() => true} /></g>}
      <Cap>{["They stop cancer cells repairing", "Olaparib: twice a day, 12 hours apart", "Side effects often ease over time", "Blood tests, usually once a month", "Call the 24-hour number straight away"][at]}</Cap>
    </svg>} />;
}

function OvDrop(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Menopause" title="A sudden menopause, and the choices" label="Menopause" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Oestrogen dropping straight down at surgery, beside a gentler natural slope, with what helps">
      <g opacity={fade(at === 0)}>
        <path d="M24 28 V140 H150" stroke={LINE} strokeWidth="2.5" fill="none" />
        <W x={28} y={22} size={10} anchor="start">Oestrogen</W>
        <path d="M28 50 C80 54, 110 96, 148 124" stroke={SOFT} strokeWidth="3" strokeDasharray="6 5" fill="none" />
        <path d="M28 50 H80 V134 H148" stroke={INK} strokeWidth="4" fill="none" strokeLinejoin="round" />
        <W x={80} y={158} size={10}>Surgery</W>
      </g>
      {at === 0 && <Tags x={166} y={44} width={144} gap={36} labels={["Like a natural one", "But more intense"]} lit={index => index === 1} />}
      {at === 1 && <Tags x={166} y={22} width={144} gap={32} labels={["Hot flushes", "Poor memory", "Vaginal dryness", "Needing to wee"]} lit={() => false} />}
      {at === 2 && <g><rect x="176" y="44" width="124" height="80" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={238} y={82} size={22} serif>HRT</W><W x={238} y={106} size={10}>Ask your doctor</W></g>}
      {at === 3 && <Tags x={166} y={30} width={144} gap={34} labels={["Other medicines", "CBT", "Moisturisers"]} lit={() => true} />}
      {at === 4 && <g><Bone x={204} y={56} /><HeartShape x={270} y={60} size={44} /><Tags x={166} y={100} width={144} gap={32} labels={["Exercise", "Calcium, vitamin D"]} lit={() => false} /></g>}
      <Cap>{["Oestrogen falls very quickly", "Keep a symptom diary for your team", "HRT: often safe, but ask your doctor", "Other options if HRT is not right", "Look after your bones and heart"][at]}</Cap>
    </svg>} />;
}

function OvEnergy(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const levels = at === 0 ? [0.2, 0.15, 0.25, 0.15, 0.2, 0.15, 0.2] : at === 3 ? [0.6, 0.35, 0.7, 0.35, 0.6, 0.4, 0.5] : [0.4, 0.3, 0.45, 0.35, 0.4, 0.3, 0.35];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Fatigue" title="Not tired, but fatigued" label="Fatigue" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A week of energy levels, low at first, then balanced between activity and rest">
      <g opacity={at === 1 || at === 2 ? 0.35 : 1}>
        <path d="M32 170 H294" stroke={LINE} strokeWidth="2.5" />
        {levels.map((level, index) => <g key={index}>
          <rect x={40 + index * 36} y={170 - level * 60} width="26" height={level * 60} rx="4" fill={at === 3 ? (index % 2 ? WHITE : INK) : SOFT} stroke={INK} strokeWidth="1.5" />
          <W x={53 + index * 36} y={186} size={9.5}>{WEEK[index]}</W>
        </g>)}
      </g>
      {at === 0 && <g><Person x={96} y={96} scale={1.1} fill={SOFT} /><path d="M232 34 A22 22 0 1 0 254 70 A17 17 0 1 1 232 34 Z" fill={SOFT} /></g>}
      {at === 1 && <g><Box x={20} y={22} width={135} text="Treatments" /><Box x={165} y={22} width={135} text="Anaemia" /><Box x={20} y={58} width={135} text="Pain" /><Box x={165} y={58} width={135} text="Poor sleep" /></g>}
      {at === 2 && <g>
        {Array.from({ length: 11 }, (_, index) => <Box key={index} x={20 + index * 26.5} y={40} width={24} height={26} text={String(index)} lit={index === 6} size={10} />)}
        <W x={20} y={86} size={10} anchor="start">No fatigue</W><W x={308} y={86} size={10} anchor="end">Worst</W>
      </g>}
      {at === 3 && <Row x={14} y={30} width={92} gap={100} labels={["Short rests", "Some activity", "Spread chores"]} lit={index => index === 1} />}
      <Cap>{["Exhausted even after rest", "Tell your team, who can check causes", "Score it daily from 0 to 10", "Balance activity with rest"][at]}</Cap>
    </svg>} />;
}

function OvBottle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Bowel and bladder" title="Bowel and bladder changes, and help" label="Bowel and bladder" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A water bottle, a bladder, a stoma bag and the signs to act on">
      <g opacity={fade(at === 1)}>
        <path d="M44 40 H64 V54 C80 60, 84 70, 84 80 V164 C84 172, 78 176, 70 176 H38 C30 176, 24 172, 24 164 V80 C24 70, 28 60, 44 54 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <path d="M27 108 H81 V164 C81 170, 76 173, 70 173 H38 C32 173, 27 170, 27 164 Z" fill={SOFT} />
        <W x={54} y={146} size={10}>2 litres</W>
      </g>
      {at === 0 && <Tags x={120} y={24} width={180} gap={32} labels={["Surgery", "Chemotherapy", "PARP inhibitors", "Surgical menopause"]} lit={() => false} />}
      {at === 1 && <Tags x={120} y={40} width={180} gap={34} labels={["Fibre", "Gentle walks", "Prunes or prune juice"]} lit={() => true} />}
      {at === 2 && <g><Bladder x={148} y={74} /><W x={148} y={122} size={10}>Bladder</W><Tags x={188} y={40} width={120} gap={34} labels={["Burning", "Cloudy urine", "High temperature"]} lit={() => false} /></g>}
      {at === 3 && <g><Box x={130} y={26} width={170} text="Your stoma nurse" lit /><rect x="190" y="72" width="52" height="78" rx="20" fill={TINT} stroke={INK} strokeWidth="2.5" /><circle cx="216" cy="84" r="6" fill={SOFT} /></g>}
      {at === 4 && <g><Tags x={116} y={18} width={190} gap={28} labels={["Bloating", "Cramping tummy pain", "No stools or wind", "Feeling or being sick"]} lit={() => false} /><Box x={116} y={140} width={190} text="Treat straight away" lit /></g>}
      <Cap>{["Many causes, often easily treated", "At least 2 litres of fluid a day", "Cannot pass urine? Call straight away", "Often temporary; your nurse helps", "Blocked bowel signs need help now"][at]}</Cap>
    </svg>} />;
}

function OvBench(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Closeness" title="Closeness, comfort and time to heal" label="Sex and intimacy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people on a bench, with the weeks to heal, what helps and talking">
      <path d="M30 168 H166 M40 168 V184 M156 168 V184" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <Person x={70} y={150} scale={1.2} /><Person x={126} y={150} scale={1.2} fill={SOFT} />
      {at === 0 && <g><HeartShape x={98} y={84} size={34} fill={GOLD} /><Tags x={180} y={40} width={130} gap={34} labels={["Kissing", "Cuddling", "Touching"]} lit={() => false} /></g>}
      {at === 1 && <g>
        {nums(6).map((n, index) => <g key={n}><rect x={180 + index * 21} y="60" width="18" height="18" rx="4" fill={index >= 3 ? GOLD : INK} stroke={INK} strokeWidth="1.5" /><W x={189 + index * 21} y={73} size={9.5} fill={index >= 3 ? TEXT : WHITE}>{n}</W></g>)}
        <W x={242} y={100} size={10.5}>weeks</W>
      </g>}
      {at === 2 && <Tags x={180} y={34} width={130} gap={34} labels={["Moisturiser", "Lubricant", "Other positions"]} lit={() => true} />}
      {at === 3 && <g><Bubble x={80} y={66} text="· · ·" width={64} /><Bubble x={150} y={48} text="· · ·" width={64} /></g>}
      {at === 4 && <g><Box x={180} y={50} width={130} text="Psychosexual therapist" lit size={9.5} /><Box x={180} y={88} width={130} text="Relate" /></g>}
      <Cap>{["Intimacy does not only mean sex", "Usually at least 4 to 6 weeks", "Do not put up with pain: help exists", "Talk about how you are feeling", "Ask your GP or nurse for a referral"][at]}</Cap>
    </svg>} />;
}

function OvLaptop(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Back to work, at your own pace" label="Work and money" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A desk with a laptop, the Equality Act, the weeks off, adjustments and a grant">
      <path d="M40 150 H280 M56 150 V184 M264 150 V184" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <rect x="136" y="114" width="48" height="34" rx="3" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M126 149 H194" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      {at === 0 && <g>
        <path d="M30 20 H84 L100 36 V104 H30 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={65} y={58} size={10}>Equality</W><W x={65} y={74} size={10}>Act 2010</W>
        <Tags x={126} y={30} width={176} gap={34} labels={["Lasts after treatment", "Telling is up to you"]} lit={() => false} />
      </g>}
      {at === 1 && <g><Squares x={46} y={36} count={8} filled={8} size={22} gap={30} labels={nums(8)} /><W x={160} y={84} size={10.5}>Then build up slowly</W></g>}
      {at === 2 && <g><Box x={20} y={24} width={136} text="Phased return" /><Box x={164} y={24} width={136} text="Extra breaks" /><Box x={20} y={60} width={136} text="A quiet place to rest" size={10} /><Box x={164} y={60} width={136} text="Parking nearby" /></g>}
      {at === 3 && <g><Coin x={60} y={56} /><Tags x={110} y={34} width={190} gap={36} labels={["Free prescriptions", "Access to Work grant"]} lit={index => index === 1} /></g>}
      <Cap>{["Cancer counts as a disability in law", "At least 8 weeks off after surgery", "Agree adjustments with your employer", "Access to Work: no need to pay back"][at]}</Cap>
    </svg>} />;
}

function OvHills(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const sun = [[262, 116], [258, 96], [256, 104], [250, 60], [262, 44]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="After treatment, the feelings that follow" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person on open hills with a sun rising, and signposts to help">
      <circle cx={sun[0]} cy={sun[1]} r="18" fill={GOLD} opacity={[0.35, 0.5, 0.35, 0.85, 1][at]} className={still || at < 3 ? undefined : "lib-why-pulse"} />
      {(at === 1 || at === 2) && <Cloud x={244} y={66} s={at === 2 ? 1 : 0.8} fill={at === 2 ? SOFT : TINT} />}
      <path d="M10 186 C70 150, 130 160, 190 146 S270 120, 310 130 V186 Z" fill={WHITE} stroke={LINE} strokeWidth="3" />
      <Person x={70} y={160} scale={1} />
      {at === 0 && <Tags x={40} y={22} width={150} gap={32} labels={["Relief", "Side effects", "Finding a new normal"]} lit={() => false} />}
      {at === 1 && <Tags x={30} y={30} width={136} gap={34} labels={["Talk about feelings", "Do what you enjoy"]} lit={() => true} />}
      {at === 2 && <Box x={24} y={34} width={160} text="Sad for weeks? See a GP" lit />}
      {at === 3 && <Tags x={30} y={22} width={170} gap={32} labels={["Talking therapies", "Support lines", "Online communities"]} lit={() => true} />}
      {at === 4 && <g><path d="M140 30 V140" stroke={INK} strokeWidth="4" />{["111", "116 123", "999"].map((sign, index) => <Box key={sign} x={96} y={28 + index * 30} width={88} height={24} text={sign} lit={index === 1} />)}</g>}
      <Cap>{["Time to find what is normal now", "Worry often gets better with time", "With support, most can fully recover", "Free lines to talk things through", "Urgent help: 111, Samaritans, 999"][at]}</Cap>
    </svg>} />;
}

// ==== Womb cancer ===========================================================================================

/** A simple outline of the womb, cervix, tubes and ovaries, 10px lower than its drawing. */
const Womb = () => <g transform="translate(0 10)">
  <path d="M60 66 C50 54, 40 52, 32 60 M100 66 C110 54, 120 52, 128 60" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
  <circle cx="26" cy="66" r="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx="134" cy="66" r="8" fill={WHITE} stroke={INK} strokeWidth="2.5" />
  <path d="M58 62 C58 56, 102 56, 102 62 C102 92, 92 110, 86 118 H74 C68 110, 58 92, 58 62 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
  <rect x="72" y="118" width="16" height="14" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" />
</g>;

function WbSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What you had" title="Surgery first, then what it shows" label="Treatments" credit={bodyCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A simple outline of the womb, tubes and ovaries, with results, radiotherapy and the team">
      <g opacity={at >= 3 ? 0.35 : 1}><Womb /></g>
      {at === 0 && <g><rect x="12" y="52" width="136" height="100" rx="12" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" /><Box x={170} y={60} width={136} text="Total hysterectomy" size={10} /><Box x={170} y={96} width={136} text="Lymph nodes checked" size={10} /></g>}
      {at === 1 && <g>
        <path d="M150 100 H180 M172 92 L181 100 L172 108" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="190" y="36" width="112" height="124" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="190" y="36" width="112" height="28" rx="10" fill={INK} /><W x={246} y={55} size={10.5} fill={WHITE}>Results</W>
        {["Type", "Stage", "Grade"].map((row, index) => <g key={row}><circle cx="208" cy={84 + index * 24} r="4" fill={GOLD} /><W x={220} y={88 + index * 24} size={10.5} anchor="start">{row}</W></g>)}
      </g>}
      {at === 2 && <g><Squares x={180} y={22} count={5} filled={5} size={20} gap={24} labels={WEEK.slice(0, 5)} /><path d="M300 74 L112 100 M300 104 L112 104 M300 134 L112 108" stroke={GOLD} strokeWidth="3" strokeDasharray="7 5" /></g>}
      {at === 3 && <g><rect x="216" y="30" width="32" height="42" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M232 72 V104" stroke={INK} strokeWidth="2.5" /><circle cx="232" cy="108" r="4" fill={INK} /><Box x={166} y={124} width={140} text="Call the advice line" lit /></g>}
      {at === 4 && <g><Person x={196} y={140} scale={0.9} fill={SOFT} /><Person x={236} y={134} scale={0.9} /><Person x={276} y={140} scale={0.9} fill={SOFT} /><Bubble x={232} y={56} text="No need to wait" width={130} /></g>}
      <Cap>{["Surgery is often the main treatment", "Results take about 2 to 3 weeks", "Up to 5 to 6 weeks, Monday to Friday", "Infection signs: call advice line now", "Worried? Talk to your specialists"][at]}</Cap>
    </svg>} />;
}

function WbLayers(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const boxes = [{ n: 4, x: 14, y: 20, w: 156, h: 160, ly: 35 }, { n: 3, x: 30, y: 40, w: 124, h: 122, ly: 55 }, { n: 2, x: 46, y: 60, w: 92, h: 86, ly: 75 }, { n: 1, x: 62, y: 80, w: 60, h: 50, ly: 110 }];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stage and grade" title="Stage, grade and type, decoded" label="Stage and grade" credit="Illustration: Rehyn. A picture of the idea, not anyone's own results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four nested boxes for stages 1 to 4, cells for the grade, and four gene groups">
      <g opacity={at <= 1 ? 1 : 0.35}>
        {boxes.map(box => <rect key={box.n} x={box.x} y={box.y} width={box.w} height={box.h} rx="14" fill={at === 1 ? (box.n % 2 ? INK : SOFT) : WHITE} stroke={INK} strokeWidth="2" />)}
        {boxes.map(box => <W key={box.n} x={92} y={box.ly} size={11} fill={at === 1 && box.n % 2 ? WHITE : TEXT}>{String(box.n)}</W>)}
      </g>
      {at === 0 && <Tags x={180} y={50} width={130} gap={36} labels={["Stage: size, spread", "Grade: the cells"]} lit={() => false} />}
      {at === 1 && <Tags x={180} y={30} width={130} gap={32} labels={["1: in the womb", "2: the cervix", "3: the pelvis", "4: other organs"]} lit={index => index < 2} />}
      {at === 2 && <g>
        <circle cx="205" cy="80" r="13" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M232 70 C246 64, 260 72, 256 84 C254 96, 238 96, 234 88 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <path d="M274 68 L288 62 L300 72 L294 80 L302 92 L282 96 L276 84 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        {nums(3).map((grade, index) => <W key={grade} x={205 + index * 42} y={118} size={11}>{grade}</W>)}
      </g>}
      {at === 3 && <Tags x={180} y={40} width={130} gap={34} labels={["Endometrioid", "Serous, clear cell", "Sarcoma"]} lit={index => index === 0} />}
      {at === 4 && <g>
        {["POLE", "MMR", "NSMP", "p53"].map((group, index) => <Box key={group} x={184 + (index % 2) * 64} y={26 + Math.floor(index / 2) * 34} width={58} text={group} size={10} />)}
        {[LINE, SOFT, INK].map((fill, index) => <rect key={index} x={184 + index * 41} y="110" width="40" height="12" rx="4" fill={fill} />)}
        <W x={184} y={140} size={10} anchor="start">Low risk</W><W x={306} y={140} size={10} anchor="end">High risk</W>
      </g>}
      <Cap>{["Usually confirmed after surgery", "Stages 1 and 2 are called early stage", "Grade 1 cells look like normal cells", "Most start in the womb lining", "Together they give a risk group"][at]}</Cap>
    </svg>} />;
}

function WbCalendar(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const visits = [[0, 1], [0, 7], [1, 1], [1, 7], [2, 7], [3, 7], [4, 7]];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="Check-ups, and what to report between" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five years of months with check-ups marked, a phone, and a treatment summary for the GP">
      {at === 0 && <g><Person x={90} y={146} scale={1.3} /><Person x={170} y={146} scale={1.3} fill={SOFT} /><Bubble x={210} y={54} text="Any problems or worries?" width={170} /></g>}
      {at === 1 && <g>
        {Array.from({ length: 5 }, (_, year) => <g key={year}>
          <W x={14} y={49 + year * 22} size={10} anchor="start">{`Year ${year + 1}`}</W>
          {Array.from({ length: 12 }, (_, month) => { const on = visits.some(([y, m]) => y === year && m === month); return <rect key={month} x={60 + month * 20} y={38 + year * 22} width="14" height="14" rx="3" fill={on ? (year === 0 && month === 1 ? GOLD : INK) : WHITE} stroke={SOFT} strokeWidth="1.5" />; })}
        </g>)}
      </g>}
      {at === 2 && <g><Phone x={90} y={96} /><Bubble x={220} y={60} text="You get in touch" width={140} /><Box x={150} y={112} width={156} text="As often as you need" /></g>}
      {at === 3 && <g><Phone x={50} y={90} /><Tags x={96} y={24} width={206} gap={32} labels={["New vaginal bleeding", "Bleeding after sex", "Pain in tummy or pelvis", "Bloating, weight loss"]} lit={() => false} /></g>}
      {at === 4 && <g>
        <rect x="40" y="34" width="92" height="116" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={86} y={58} size={10}>Treatment</W><W x={86} y={72} size={10}>summary</W>
        {[94, 110, 126].map(y => <path key={y} d={`M54 ${y} H118`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
        <path d="M142 92 H172 M164 84 L173 92 L164 100" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <Box x={182} y={78} width={120} text="Your GP" lit />
      </g>}
      <Cap>{["Check how you are, and any worries", "Low risk: every 6 months for 2 years", "PIFU: you contact your team", "Report these as soon as possible", "A cancer care review within 12 months"][at]}</Cap>
    </svg>} />;
}

function WbTree(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Lynch syndrome" title="A family question worth asking" label="Lynch syndrome" credit="Illustration: Rehyn. A picture of the idea, not anyone's own family."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person with a raised risk, a test on cancer cells, and a family with a gene passed on">
      {at === 0 && <g><Person x={84} y={140} scale={1.4} fill={GOLD} /><Tags x={170} y={40} width={130} gap={34} labels={["Bowel", "Womb", "Ovarian"]} lit={() => false} /></g>}
      {at === 1 && <g>
        <circle cx="60" cy="92" r="30" fill={WHITE} stroke={INK} strokeWidth="2.5" />{[[50, 84], [66, 80], [58, 100], [72, 96]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="4" fill={SOFT} />)}
        <path d="M100 92 H132 M124 84 L133 92 L124 100" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <Tube x={160} y={44} />
        <path d="M184 92 H212 M204 84 L213 92 L204 100" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <Box x={220} y={78} width={88} text="Specialist" lit size={10} />
      </g>}
      {at === 2 && <g>
        <path d="M138 50 H182 M160 50 V112 M120 112 H200 M120 112 V122 M200 112 V122" stroke={LINE} strokeWidth="2.5" fill="none" />
        <Person x={120} y={76} scale={0.9} fill={GOLD} /><Person x={200} y={76} scale={0.9} fill={SOFT} />
        <Person x={120} y={160} scale={0.9} fill={GOLD} /><Person x={200} y={160} scale={0.9} fill={SOFT} />
      </g>}
      {at === 3 && <Tags x={40} y={40} width={240} gap={36} labels={["Colonoscopy every 2 years", "Ask about aspirin", "Surgery can be a choice"]} lit={index => index === 0} />}
      {at === 4 && <g><Person x={80} y={150} scale={1.3} /><Bubble x={200} y={70} text="Ask Eve: 0808 802 0019" width={180} /></g>}
      <Cap>{["A raised risk, not a certainty", "Cancer cells are usually tested first", "A 1 in 2 chance for each child", "Your team helps lower your risk", "Uncertainty is hard: support helps"][at]}</Cap>
    </svg>} />;
}

function WbHome(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const here = at === 0 ? 0 : 1;
  return <MemoryBand props={props} state={s} tone="theme" kicker="After surgery" title="Weeks to recover, signs to act on" label="Recovering from surgery" credit="Illustration: Rehyn. Follow your own team's advice on recovery."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A path from a hospital bed to home and on to 3 months, with the signs to act on">
      <g opacity={at >= 2 ? 0.35 : 1}>
        <path d="M50 146 H270" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
        <path d="M28 146 V124 M28 136 H72 V146 M32 130 h12" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <g opacity={fade(here >= 1)}><path d="M142 146 V124 L160 110 L178 124 V146 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" /></g>
        <path d="M270 146 V108" stroke={INK} strokeWidth="3" /><path d="M270 108 H292 L286 116 L292 124 H270 Z" fill={at === 1 ? GOLD : WHITE} stroke={INK} strokeWidth="2" />
        {[{ x: 50, t: "Hospital" }, { x: 160, t: "Home" }, { x: 270, t: "3 months" }].map(stop => <W key={stop.t} x={stop.x} y={172} size={10.5}>{stop.t}</W>)}
      </g>
      {at === 0 && <g><Box x={110} y={24} width={180} text="Keyhole: same or next day" size={10} /><Box x={110} y={60} width={180} text="Open surgery: 2 to 5 days" size={10} /></g>}
      {at === 1 && <g><path d="M164 100 C200 60, 240 60, 268 98" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" fill="none" /><NoLifting x={84} y={64} /></g>}
      {at === 2 && <g><Drop x={60} y={60} /><Tags x={110} y={34} width={190} gap={34} labels={["Bright red or heavier", "Bad smell or clots"]} lit={() => true} /></g>}
      {at === 3 && <Tags x={40} y={30} width={240} gap={34} labels={["Leg swollen, hot or red", "Breathless or chest pain"]} lit={index => index === 1} />}
      {at === 4 && <g><Bubble x={110} y={50} text="Weepy or down?" width={130} /><Box x={180} y={78} width={124} text="Specialist nurse" lit /></g>}
      <Cap>{["Know who to contact before you leave", "Full recovery: 6 weeks to 3 months", "Discharge changes? Call straight away", "Breathless, chest pain? 999 or A&E", "You may feel weepy or down for a time"][at]}</Cap>
    </svg>} />;
}

function WbWave(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Radiotherapy" title="Settling after pelvic radiotherapy" label="After radiotherapy" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Side effects rising during radiotherapy and easing after it, with a later line for late effects">
      <rect x="40" y="84" width="120" height="66" fill={LINE} opacity=".35" />
      <path d="M24 150 H300" stroke={LINE} strokeWidth="3" />
      <W x={100} y={168} size={10}>Treatment</W><W x={230} y={168} size={10}>After</W>
      <path d="M24 148 C60 148, 80 132, 120 116 S170 92, 186 96 S230 140, 290 146" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" opacity={at === 0 ? 1 : 0.3} />
      {at === 0 && <circle cx="186" cy="96" r="7" fill={GOLD} stroke={WHITE} strokeWidth="2.5" />}
      <path d="M244 132 C260 124, 276 126, 296 118" stroke={at === 3 ? GOLD : SOFT} strokeWidth="4" strokeDasharray="5 5" fill="none" strokeLinecap="round" opacity={at === 3 ? 1 : 0.4} />
      {at === 3 && <W x={268} y={108} size={10}>Late effects</W>}
      {at === 0 && <Box x={170} y={20} width={136} text="8 to 12 glasses a day" size={10} />}
      {at === 1 && <g><Box x={20} y={22} width={136} text="Peeing more often" size={10} /><Box x={164} y={22} width={136} text="Sore skin" size={10} /></g>}
      {at === 2 && <g>
        {[{ x: 24, y: 36, w: 40, h: 12 }, { x: 72, y: 34, w: 48, h: 16 }, { x: 128, y: 32, w: 56, h: 20 }].map(tube => <rect key={tube.x} x={tube.x} y={tube.y} width={tube.w} height={tube.h} rx={tube.h / 2} fill={WHITE} stroke={INK} strokeWidth="2.5" />)}
        <Box x={196} y={28} width={110} text="3 times a week" size={10} lit />
      </g>}
      {at === 4 && <g><Box x={20} y={22} width={150} text="Late effects clinics" size={10} /><Box x={178} y={22} width={126} text="Tell your team" lit size={10} /></g>}
      <Cap>{["Often easing from about 2 weeks after", "Skin often better within 4 to 6 weeks", "From about 4 weeks: 3 times a week", "Late effects can start months later", "New symptoms still need checking"][at]}</Cap>
    </svg>} />;
}

function WbStopwatch(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  return <MemoryBand props={props} state={s} tone="theme" kicker="Menopause" title="A sudden menopause, and the options" label="Menopause" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A stopwatch marking a few minutes for a hot flush, with what helps">
      <g opacity={fade(at === 1)}>
        <rect x="78" y="48" width="12" height="12" rx="2" fill={INK} />
        <circle cx="84" cy="108" r="48" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M84 108 L84 64 A44 44 0 0 1 106 69.9 Z" fill={GOLD} />
        <path d="M84 108 L106 70" stroke={TEXT} strokeWidth="3" strokeLinecap="round" /><circle cx="84" cy="108" r="4" fill={TEXT} />
      </g>
      {at === 0 && <Tags x={160} y={44} width={148} gap={36} labels={["Ovaries removed", "Radiotherapy alone"]} lit={() => false} />}
      {at === 1 && <g>
        {[70, 98, 126].map(y => <path key={y} d={`M150 ${y} q8 -7 0 -14 q-8 -7 0 -14`} stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" className={still ? undefined : "lib-why-pulse"} />)}
        <Tags x={176} y={44} width={132} gap={34} labels={["Face, neck, chest", "Faster heartbeat"]} lit={() => true} />
      </g>}
      {at === 2 && <g><rect x="170" y="44" width="130" height="80" rx="12" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={235} y={82} size={22} serif>HRT</W><W x={235} y={106} size={10}>Not usually advised</W></g>}
      {at === 3 && <g><path d="M170 80 C186 50, 202 50, 218 80 S250 110, 266 80 S290 56, 300 70" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" /><Box x={170} y={118} width={136} text="15 minutes, twice a day" size={10} /></g>}
      {at === 4 && <g><Bone x={204} y={66} /><HeartShape x={270} y={70} size={44} /><Box x={170} y={112} width={136} text="Calcium and vitamin D" size={10} /></g>}
      <Cap>{["Menopause can start straight away", "Hot flushes last about 4 to 5 minutes", "Ask your doctor whether HRT suits you", "Paced respiration can sometimes help", "Weight-bearing exercise helps bones"][at]}</Cap>
    </svg>} />;
}

function WbLegs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Leg swelling" title="Leg swelling: early signs, quick help" label="Lymphoedema" credit={bodyCredit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two simple legs, one a little fuller, with early signs, skin care and when to get help">
      <rect x="46" y="24" width="30" height="140" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="40" y="158" width="44" height="18" rx="9" fill={WHITE} stroke={INK} strokeWidth="3" />
      {at === 1 && <rect x="88" y="18" width="56" height="152" rx="24" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="6 5" />}
      <rect x="96" y="24" width="40" height="140" rx="18" fill={WHITE} stroke={INK} strokeWidth="3" /><rect x="92" y="158" width="50" height="18" rx="9" fill={WHITE} stroke={INK} strokeWidth="3" />
      {at === 3 && [60, 84, 108, 132].map(y => <rect key={y} x="98" y={y} width="36" height="12" fill={SOFT} />)}
      {at === 4 && <ellipse cx="116" cy="96" rx="13" ry="20" fill={GOLD} />}
      {at === 0 && <Tags x={166} y={44} width={140} gap={36} labels={["Not common", "Months or years later"]} lit={() => false} />}
      {at === 1 && <Tags x={166} y={26} width={140} gap={34} labels={["Clothes feel tighter", "Heavy or aching", "Red and sore: act now"]} lit={index => index === 2} />}
      {at === 2 && <Tags x={166} y={26} width={140} gap={34} labels={["Moisturise daily", "Treat cuts quickly", "Shoes that fit"]} lit={() => false} />}
      {at === 3 && <Tags x={166} y={26} width={140} gap={34} labels={["Compression", "Skin care", "Raise the leg"]} lit={() => true} />}
      {at === 4 && <Tags x={166} y={26} width={140} gap={34} labels={["Hot, painful, swollen", "Urgent GP or NHS 111", "Very unwell: 999"]} lit={index => index > 0} />}
      <Cap>{["Lymph fluid can build up in a leg", "Early signs? Ask for advice soon", "Care for your skin every day", "Usually possible to control symptoms", "Cellulitis needs help fast"][at]}</Cap>
    </svg>} />;
}

function WbGlass(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Bowel and bladder" title="Bladder and bowel, step by step" label="Bowel and bladder" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A glass of water, a bladder, a toilet card and the symptoms to get checked">
      <g opacity={fade(at === 3)}><Glass x={60} y={50} />{at === 3 && <W x={60} y={152} size={10}>1 to 2 litres</W>}</g>
      {at === 0 && <Tags x={120} y={36} width={180} gap={34} labels={["Urine infections", "Constipation", "Both easily treated"]} lit={index => index === 2} />}
      {at === 1 && <g><Bladder x={160} y={86} s={1.35} dashed /><Bladder x={160} y={90} /><W x={160} y={146} size={10}>Bladder</W><Tags x={210} y={40} width={100} gap={34} labels={["More often", "More urgent", "Looser poo"]} lit={() => false} /></g>}
      {at === 2 && <g><Box x={120} y={22} width={180} text="Get these checked" lit /><Tags x={120} y={62} width={180} gap={32} labels={["Blood from back passage", "Blood in urine", "Rushing to open bowels"]} lit={() => false} /></g>}
      {at === 3 && <g>
        <path d="M146 48 H174 V72 C174 82, 146 82, 146 72 Z M174 54 C184 54, 184 66, 174 66" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M140 88 L182 38" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <rect x="210" y="40" width="84" height="52" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={252} y={62} size={10}>Toilet</W><W x={252} y={78} size={10}>card</W>
      </g>}
      {at === 4 && <Tags x={120} y={36} width={180} gap={34} labels={["Continence adviser", "Physiotherapist", "Gastroenterologist"]} lit={() => true} />}
      <Cap>{["Drink plenty, eat fruit and fibre", "Pelvic radiotherapy affects both", "Blood: always get it checked", "Drink 1 to 2 litres, spread out", "Your team can refer you on"][at]}</Cap>
    </svg>} />;
}

function WbWeeks(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Closeness" title="Closeness again, in your own time" label="Sex and intimacy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people, with twelve weeks marked below and 6 and 12 picked out">
      <Person x={70} y={110} scale={1.1} /><Person x={126} y={110} scale={1.1} fill={SOFT} />
      <g opacity={fade(at === 0)}>
        {nums(12).map((n, index) => <g key={n}><rect x={30 + index * 22} y="150" width="18" height="18" rx="4" fill={index < 6 ? INK : WHITE} stroke={INK} strokeWidth="1.5" /><W x={39 + index * 22} y={163} size={9.5} fill={index < 6 ? WHITE : TEXT}>{n}</W></g>)}
        {[5, 11].map(index => <circle key={index} cx={39 + index * 22} cy="159" r="15" fill="none" stroke={GOLD} strokeWidth="3" />)}
      </g>
      {at === 0 && <HeartShape x={98} y={50} size={30} />}
      {at === 1 && <Tags x={168} y={24} width={140} gap={32} labels={["Feeling may change", "Dryness", "Bleeding after sex"]} lit={index => index === 2} />}
      {at === 2 && <Tags x={168} y={24} width={140} gap={32} labels={["Creams", "Lubricants", "Dilators, if advised"]} lit={() => true} />}
      {at === 3 && <g><Bubble x={80} y={38} text="· · ·" width={64} /><Bubble x={150} y={26} text="· · ·" width={64} /></g>}
      {at === 4 && <g><Box x={170} y={36} width={136} text="Your healthcare team" lit size={10} /><Box x={170} y={74} width={136} text="A sex therapist" /></g>}
      <Cap>{["Usually 6 weeks; sometimes up to 12", "Bleeding after sex? Contact your team", "Creams and lubricants can help", "Sex cannot pass cancer to a partner", "Use the words you usually say"][at]}</Cap>
    </svg>} />;
}

function WbWalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const spots = [[40, 169], [120, 164], [190, 152], [240, 136], [285, 114]];
  const walker = spots[at];
  const marks = [{ i: 0, t: "Day 1" }, { i: 2, t: "6 weeks" }, { i: 4, t: "12 weeks" }];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Activity" title="Walk first, lift later" label="Activity" credit="Illustration: Rehyn. Check with your own team before exercising."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person walking up a gently climbing path, from day 1 to 12 weeks">
      <path d="M20 170 C100 168, 200 150, 300 104" stroke={LINE} strokeWidth="8" fill="none" strokeLinecap="round" />
      {marks.map(mark => { const [x, y] = spots[mark.i], on = at === 1 && mark.i > 0; return <g key={mark.t}><circle cx={x} cy={y} r="5" fill={on ? GOLD : SOFT} /><W x={x + (mark.i === 4 ? -6 : 0)} y={y + 20} size={10}>{mark.t}</W></g>; })}
      <Person x={walker[0]} y={walker[1] - 14} scale={0.8} />
      {at === 0 && <Box x={24} y={30} width={170} text="Helps your blood flow" lit />}
      {at === 1 && <g><NoLifting x={56} y={62} /><Tags x={110} y={26} width={170} gap={32} labels={["Open: about 12 weeks", "Keyhole: about 6 weeks"]} lit={() => false} /></g>}
      {at === 2 && <Tags x={24} y={20} width={160} gap={30} labels={["Fitness and strength", "Less tiredness", "Stronger bones"]} lit={() => true} />}
      {at === 3 && <Box x={24} y={30} width={180} text="Pelvic floor exercises" lit />}
      {at === 4 && <Bubble x={150} y={50} text="Ask first" width={100} />}
      <Cap>{["A short walk the day after surgery", "No heavy lifting for 6 to 12 weeks", "Even a short walk can help", "A physio can guide your pelvic floor", "Ask first, then build up slowly"][at]}</Cap>
    </svg>} />;
}

function WbWindow(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="Loss, worry and the way through" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A window where the clouds slowly clear to sun, with ways to get support">
      <rect x="24" y="20" width="130" height="150" rx="6" fill={WHITE} stroke={INK} strokeWidth="4" />
      {at >= 1 && at !== 2 && <circle cx={at >= 3 ? 70 : 58} cy={at >= 3 ? 56 : 66} r={at >= 3 ? 18 : 12} fill={GOLD} opacity={at >= 3 ? 1 : 0.6} />}
      {at <= 2 && <Cloud x={92} y={at === 1 ? 74 : 66} s={at === 1 ? 0.7 : 0.9} fill={at === 2 ? SOFT : TINT} />}
      {at === 2 && [56, 80, 104, 128].map(x => <path key={x} d={`M${x} 104 l-6 16`} stroke={SOFT} strokeWidth="3" strokeLinecap="round" />)}
      <path d="M89 20 V170 M24 95 H154" stroke={INK} strokeWidth="3" />
      {at === 0 && <Tags x={168} y={36} width={140} gap={34} labels={["Relief", "Worry", "A sense of loss"]} lit={() => false} />}
      {at === 1 && <Bubble x={240} y={64} text="Share your worries" width={130} />}
      {at === 2 && <Tags x={168} y={36} width={140} gap={34} labels={["Low most of the time", "Lost interest", "Poor sleep"]} lit={() => false} />}
      {at === 3 && <Tags x={168} y={30} width={140} gap={34} labels={["Talk with others", "HOPE course", "Talking therapies"]} lit={() => true} />}
      {at === 4 && ["Samaritans 116 123", "Text SHOUT 85258", "999 or A&E"].map((sign, index) => <Box key={sign} x={168} y={30 + index * 34} width={140} text={sign} lit={index === 0} size={10} />)}
      <Cap>{["Relief, worry and loss can all come", "No evidence worry affects recovery", "Low over 2 weeks? Talk to your doctor", "You can refer yourself for therapy", "Help is there now, day or night"][at]}</Cap>
    </svg>} />;
}

// ==== Cervical cancer =======================================================================================

function CxTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tiles = ["Surgery", "External", "Internal", "Chemo", "Targeted"];
  const lit = [[], [0], [1, 2], [3, 4], []][at] as number[];
  const icon = (index: number, x: number, on: boolean) => {
    const c = on ? WHITE : INK, y = 118;
    if (index === 0) return <path d={`M${x - 10} ${y + 10} L${x + 10} ${y - 10}`} stroke={c} strokeWidth="4" strokeLinecap="round" />;
    if (index === 1) return <g><rect x={x - 12} y={y - 16} width="24" height="10" rx="3" fill={c} /><path d={`M${x - 6} ${y - 2} L${x - 8} ${y + 12} M${x} ${y - 2} V${y + 12} M${x + 6} ${y - 2} L${x + 8} ${y + 12}`} stroke={c} strokeWidth="2.5" strokeLinecap="round" /></g>;
    if (index === 2) return <g><circle cx={x} cy={y} r="11" fill="none" stroke={c} strokeWidth="2.5" /><circle cx={x} cy={y} r="4" fill={on ? GOLD : INK} /></g>;
    if (index === 3) return <g><rect x={x - 8} y={y - 14} width="16" height="18" rx="4" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x} ${y + 4} V${y + 14}`} stroke={c} strokeWidth="2.5" /></g>;
    return <Pill x={x} y={y} fill={on ? GOLD : INK} />;
  };
  return <MemoryBand props={props} state={s} tone="theme" kicker="What you had" title="Each treatment, and the job it did" label="Treatments" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five treatment tiles: surgery, external and internal radiotherapy, chemotherapy and targeted drugs">
      {tiles.map((tile, index) => { const x = 34 + index * 63, on = lit.includes(index); return <g key={tile} opacity={at === 0 || on ? 1 : at === 4 ? 0.3 : 0.4}>
        <circle cx={x} cy="118" r="24" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        {icon(index, x, on)}
        <W x={x} y={158} size={9.5}>{tile}</W>
      </g>; })}
      {at === 0 && <g><Box x={20} y={36} width={136} text="Size and type" /><Box x={164} y={36} width={136} text="Future pregnancy" /></g>}
      {at === 1 && <Row x={10} y={36} width={94} gap={103} labels={["LLETZ or cone", "Hysterectomy", "Trachelectomy"]} />}
      {at === 2 && <g><Squares x={104} y={26} count={5} filled={5} size={20} gap={24} labels={WEEK.slice(0, 5)} /><W x={160} y={72} size={10}>Cisplatin once a week</W></g>}
      {at === 3 && <Box x={60} y={36} width={200} text="Cycles of 1 to 3 weeks" />}
      {at === 4 && <Row x={10} y={36} width={94} gap={103} labels={["Temperature", "Leg swelling", "Breathless"]} lit={() => true} />}
      <Cap>{["Your plan, built around you", "Stage 1: surgery is the main treatment", "Chemoradiation, then brachytherapy", "Targeted drugs for advanced cancer", "Infection or clot signs: call now"][at]}</Cap>
    </svg>} />;
}

function CxReach(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows = [{ w: 96, t: "Cervix only" }, { w: 150, t: "Upper vagina, nearby" }, { w: 206, t: "Pelvic wall, nodes" }, { w: 258, t: "Bladder, bowel, beyond" }];
  const isLit = (index: number) => (at === 1 && index < 2) || (at === 2 && index >= 2);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Stage" title="Stage 1 to 4, in plain words" label="Stage" credit="Illustration: Rehyn. A picture of the idea, not anyone's own results."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Four bars reaching further for stages 1 to 4, from the cervix to beyond the pelvis">
      <g opacity={at >= 3 ? 0.35 : 1}>
        {rows.map((row, index) => { const y = 24 + index * 32, on = isLit(index); return <g key={row.t}>
          <circle cx="28" cy={y + 13} r="12" fill={INK} /><W x={28} y={y + 17} size={11} fill={WHITE}>{String(index + 1)}</W>
          <rect x="48" y={y} width={row.w} height="26" rx="8" fill={on ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <W x={56} y={y + 17} size={10} anchor="start" fill={on ? WHITE : TEXT}>{row.t}</W>
        </g>; })}
      </g>
      {at === 0 && <Row x={10} y={158} width={96} gap={102} labels={["Scans", "Blood tests", "Examination"]} />}
      {at === 3 && <g><Box x={10} y={158} width={96} text="Early" size={10} /><Box x={112} y={158} width={104} text="Locally advanced" size={10} lit /><Box x={222} y={158} width={88} text="Advanced" size={10} /></g>}
      {at === 4 && <g><Box x={10} y={158} width={145} text="Grade 1: slower" size={10} /><Box x={165} y={158} width={145} text="Grade 3: faster" size={10} /></g>}
      <Cap>{["Scans and tests find the stage", "Stage 1: only within the cervix", "Stage 3: usually chemoradiotherapy", "Words your team may use", "The most common type: squamous cell"][at]}</Cap>
    </svg>} />;
}

function CxYears(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const dots = [36, 50, 66, 82, 100, 116, 134, 170, 212, 254, 290];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Follow-up" title="Check-ups that thin out over time" label="Follow-up" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five years of check-ups, close together at first and further apart later, with a line to your team between">
      <g opacity={fade(at === 1)}>
        <path d="M30 96 H290" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
        {[1, 2, 3, 4].map(year => <path key={year} d={`M${30 + year * 52} 88 V104`} stroke={SOFT} strokeWidth="2" />)}
        {dots.map((x, index) => <circle key={x} cx={x} cy="96" r="5" fill={at === 1 ? (index === 0 ? GOLD : INK) : SOFT} />)}
        {nums(5).map((n, index) => <W key={n} x={56 + index * 52} y={122} size={10}>{`Year ${n}`}</W>)}
        {at === 1 && <W x={42} y={78} size={10}>6 weeks</W>}
      </g>
      <g opacity={fade(at === 3)}>
        <rect x="24" y="136" width="18" height="28" rx="3" fill={INK} /><rect x="27" y="140" width="12" height="18" rx="1" fill={WHITE} />
        <path d="M54 150 H290" stroke={at === 3 ? INK : SOFT} strokeWidth="3" strokeDasharray="6 5" />
        <W x={172} y={172} size={10}>Between visits</W>
      </g>
      {at === 0 && <Row x={10} y={30} width={94} gap={103} labels={["Examination", "Blood tests", "Scans"]} />}
      {at === 2 && <Row x={10} y={30} width={94} gap={103} labels={["Cell sample", "Colposcopy", "Scans"]} />}
      {at === 3 && <Bubble x={170} y={42} text="Contact your nurse" width={140} />}
      {at === 4 && <g><Person x={136} y={62} scale={0.9} /><Person x={184} y={62} scale={0.9} fill={SOFT} /></g>}
      <Cap>{["Spotting any problems early", "First visit within 6 weeks", "You may no longer need screening", "Between visits? No need to wait", "Telling someone close can help"][at]}</Cap>
    </svg>} />;
}

function CxVirus(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const virus = (x: number, y: number, r: number) => <g>
    {Array.from({ length: 10 }, (_, index) => { const a = index / 10 * Math.PI * 2; return <g key={index}><path d={`M${x + r * Math.cos(a)} ${y + r * Math.sin(a)} L${x + (r + 10) * Math.cos(a)} ${y + (r + 10) * Math.sin(a)}`} stroke={INK} strokeWidth="3" /><circle cx={x + (r + 12) * Math.cos(a)} cy={y + (r + 12) * Math.sin(a)} r="4" fill={GOLD} /></g>; })}
    <circle cx={x} cy={y} r={r} fill={SOFT} stroke={INK} strokeWidth="3" />
  </g>;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="HPV" title="A common virus, nobody's fault" label="HPV" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A virus shape, ten people with eight shaded, and two people with nothing passed between them">
      {at === 0 && <g>{virus(90, 96, 32)}<Tags x={170} y={56} width={136} gap={36} labels={["About 14 high-risk", "Types 16 and 18"]} lit={index => index === 1} /></g>}
      {at === 1 && Array.from({ length: 10 }, (_, index) => <Person key={index} x={40 + (index % 5) * 60} y={index < 5 ? 90 : 160} scale={0.9} fill={index < 8 ? INK : SOFT} />)}
      {at === 2 && <g><HeartShape x={160} y={100} size={110} /><W x={160} y={92} size={12}>Nobody's</W><W x={160} y={110} size={12}>fault</W></g>}
      {at === 3 && <g><Person x={70} y={150} scale={1.3} /><Person x={250} y={150} scale={1.3} fill={SOFT} /><path d="M110 120 H210 M200 112 L210 120 L200 128" stroke={SOFT} strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M148 106 L172 134 M172 106 L148 134" stroke={GOLD} strokeWidth="5" strokeLinecap="round" /></g>}
      {at === 4 && <Tags x={60} y={56} width={200} gap={40} labels={["Not smoking helps", "Ask Eve nurses"]} lit={index => index === 0} />}
      <Cap>{["Nearly all are caused by HPV", "8 in 10 people get HPV at some point", "Getting cancer is never anyone's fault", "Cervical cancer is not infectious", "Not smoking lowers the risk"][at]}</Cap>
    </svg>} />;
}

function CxBars(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const heights = [10, 26, 42, 56, 66, 72, 60, 42, 26, 14];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Radiotherapy" title="Worse before better, then easing" label="After radiotherapy" credit="Illustration: Rehyn. A picture of the idea, not a measurement."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Weekly bars of side effects, rising during treatment and falling after it">
      <g opacity={at === 0 ? 1 : 0.3}>
        {heights.map((height, index) => <rect key={index} x={30 + index * 28} y={150 - height} width="20" height={height} rx="4" fill={index < 5 ? INK : SOFT} />)}
      </g>
      <path d="M24 150 H304" stroke={LINE} strokeWidth="3" />
      <W x={86} y={168} size={10}>During treatment</W><W x={230} y={168} size={10}>After</W>
      {at === 0 && <path d="M204 64 C232 64, 252 84, 266 106 M256 102 L266 107 L268 96" stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      {at === 1 && <Row x={10} y={24} width={94} gap={103} labels={["Moisturiser", "Loose cotton", "Sun protection"]} lit={() => true} />}
      {at === 2 && <Box x={35} y={24} width={250} text="Suddenly breathless? Contact your team" size={10} lit />}
      {at === 3 && <g><Box x={20} y={24} width={136} text="Drink 2 to 3 litres" size={10} /><Box x={164} y={24} width={136} text="Sick more than once?" size={10} lit /></g>}
      {at === 4 && <Row x={10} y={24} width={94} gap={103} labels={["Bladder", "Bowel", "Lymphoedema"]} />}
      <Cap>{["Easing about 2 weeks after it ends", "Skin starts to improve 10 days after", "Tiredness usually improves gradually", "Bladder worse or fever: call now", "Not everyone has late effects"][at]}</Cap>
    </svg>} />;
}

function CxEarly(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const forms = ["Tablet", "Patch", "Gel", "Implant"];
  const form = (index: number, x: number) => {
    const y = 70;
    if (index === 0) return <Pill x={x} y={y} />;
    if (index === 1) return <rect x={x - 14} y={y - 14} width="28" height="28" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" />;
    if (index === 2) return <g><rect x={x - 9} y={y - 16} width="18" height="28" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x={x - 5} y={y + 12} width="10" height="6" fill={INK} /></g>;
    return <rect x={x - 12} y={y - 4} width="24" height="8" rx="4" fill={INK} />;
  };
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Menopause" title="When the menopause comes early" label="Menopause" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="An age line with the years before 45 marked early, with HRT and what helps">
      <g opacity={fade(at === 0)}>
        <rect x="30" y="153" width="156" height="14" rx="7" fill={GOLD} opacity=".5" />
        <path d="M30 160 H290" stroke={INK} strokeWidth="3" strokeLinecap="round" /><path d="M186 150 V170" stroke={INK} strokeWidth="3" />
        <W x={108} y={186} size={10}>Before 45: early</W><W x={186} y={144} size={10}>45</W>
      </g>
      {at === 0 && <Tags x={60} y={26} width={200} gap={34} labels={["Radiotherapy", "Ovaries removed", "Ovaries moved first"]} lit={index => index === 2} />}
      {at === 1 && <Tags x={60} y={20} width={200} gap={30} labels={["Hot flushes", "Night sweats", "Mood swings", "Vaginal dryness"]} lit={() => false} />}
      {at === 2 && forms.map((name, index) => { const x = 64 + index * 64; return <g key={name}>{form(index, x)}<W x={x} y={110} size={10}>{name}</W></g>; })}
      {at === 3 && <g><path d="M40 80 C70 30, 70 30, 100 80 S130 130, 160 80 S190 30, 220 80 S250 130, 280 80" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" /><W x={70} y={28} size={10}>In for 5</W><W x={130} y={136} size={10}>Out for 5</W></g>}
      {at === 4 && <g><Tags x={60} y={22} width={200} gap={34} labels={["Menopause centre", "NHS talking therapies"]} lit={() => true} /><Bone x={110} y={112} /><HeartShape x={226} y={116} size={36} /></g>}
      <Cap>{["Treatment can bring an early menopause", "Like a natural one, but more intense", "HRT is possible after most types", "15 minutes, twice a day can help", "Help with bones, heart and feelings"][at]}</Cap>
    </svg>} />;
}

function CxDilator(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const ticked = [0, 2, 4];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Vaginal changes" title="Dilators: gentle, regular, unhurried" label="Vaginal changes" credit="Illustration: Rehyn. Follow your own team's advice on dilators."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Three plain dilators in graded sizes, and a week with three days ticked">
      <g opacity={fade(at === 1 || at === 2)}>
        {[{ y: 30, w: 46, h: 12 }, { y: 52, w: 56, h: 15 }, { y: 78, w: 66, h: 18 }].map(tube => <rect key={tube.y} x="30" y={tube.y} width={tube.w} height={tube.h} rx={tube.h / 2} fill={WHITE} stroke={INK} strokeWidth="2.5" />)}
      </g>
      <g opacity={fade(at === 2)}>
        {WEEK.map((day, index) => { const on = ticked.includes(index); return <g key={index}>
          <rect x={40 + index * 34} y="140" width="26" height="26" rx="5" fill={on && at === 2 ? INK : WHITE} stroke={INK} strokeWidth="2" />
          <W x={53 + index * 34} y={157} size={10} fill={on && at === 2 ? WHITE : TEXT}>{day}</W>
        </g>; })}
      </g>
      {at === 0 && <Tags x={120} y={24} width={186} gap={32} labels={["Narrower or shorter", "Drier", "More sensitive"]} lit={() => false} />}
      {at === 1 && <Tags x={120} y={34} width={186} gap={36} labels={["Prevents narrowing", "More comfortable checks"]} lit={() => true} />}
      {at === 2 && <g><Clock x={210} y={56} r={24} hand={1.2} /><W x={210} y={104} size={10.5}>5 to 10 minutes</W></g>}
      {at === 3 && <Tags x={120} y={34} width={186} gap={36} labels={["Slight spotting: normal", "Heavy bleeding or pain"]} lit={index => index === 1} />}
      {at === 4 && <Tags x={120} y={24} width={186} gap={32} labels={["Lubricants", "Moisturisers", "Check condom advice"]} lit={() => false} />}
      <Cap>{["Radiotherapy can change the vagina", "Your team explains how to use them", "About 3 times a week; do not force", "Heavy bleeding or pain? Contact them", "Lubricants and moisturisers help"][at]}</Cap>
    </svg>} />;
}

function CxPaths(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const nodes = ["Womb kept", "Stored eggs", "Surrogacy", "Adopt or foster"];
  const isLit = (index: number) => (at === 1 && index === 0) || (at === 3 && index > 0);
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Fertility" title="Fertility, choices and the loss" label="Fertility" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Paths branching from treatment to keeping the womb, stored eggs, surrogacy and adoption">
      {nodes.map((node, index) => { const y = 30 + index * 40; return <g key={node}>
        <path d={`M106 106 C150 106, 150 ${y + 14}, 196 ${y + 14}`} stroke={isLit(index) ? GOLD : LINE} strokeWidth="3" fill="none" />
        <Box x={196} y={y} width={114} text={node} lit={isLit(index)} size={10} />
      </g>; })}
      <Box x={14} y={92} width={92} text="Treatment" lit={at === 0} size={10} />
      {at === 0 && <Bubble x={66} y={50} text="Support is there" width={110} />}
      {at === 2 && <Clock x={60} y={50} r={22} hand={2} />}
      {at === 4 && <g><Person x={36} y={170} scale={0.8} /><Person x={78} y={170} scale={0.8} fill={SOFT} /></g>}
      <Cap>{["Your doctor and nurse will support you", "Closer monitoring in pregnancy", "Ask when it is safest to start trying", "There is no right or wrong way to feel", "Sharing the loss with others can help"][at]}</Cap>
    </svg>} />;
}

function CxPlan(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Bowel and bladder" title="Bowel and bladder: help is there" label="Bowel and bladder" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A bladder that fills sooner, the symptoms to check, and a glass, toilet card and bag for going out">
      {at === 0 && <g><Bladder x={90} y={92} s={1.4} dashed /><Bladder x={90} y={98} /><W x={90} y={154} size={10}>Bladder</W><Tags x={170} y={56} width={136} gap={36} labels={["Feels full sooner", "Looser bowels"]} lit={() => false} /></g>}
      {at === 1 && <g>
        <Squares x={42} y={50} count={10} filled={6} size={20} gap={24} />
        <W x={160} y={100} size={12}>More than 60 in 100</W><W x={160} y={120} size={10}>after surgery, then radiotherapy:</W><W x={160} y={136} size={10}>bowel problems most distressing</W>
      </g>}
      {at === 2 && <g><path d="M50 30 V140" stroke={INK} strokeWidth="4" strokeLinecap="round" /><path d="M50 32 H82 L74 44 L82 56 H50 Z" fill={GOLD} stroke={INK} strokeWidth="2" /><Tags x={96} y={30} width={208} gap={32} labels={["Blood from back passage", "Blood in urine", "Needing to rush"]} lit={index => index < 2} /></g>}
      {at === 3 && <g>
        <Glass x={60} y={40} /><W x={60} y={146} size={10}>1 to 2 litres</W>
        <rect x="120" y="60" width="80" height="50" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><W x={160} y={82} size={10}>Toilet</W><W x={160} y={98} size={10}>card</W>
        <rect x="232" y="66" width="56" height="44" rx="6" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d="M248 66 V56 H272 V66" fill="none" stroke={INK} strokeWidth="2.5" /><W x={260} y={146} size={10}>Supplies</W>
      </g>}
      {at === 4 && <Tags x={60} y={30} width={200} gap={34} labels={["Physiotherapist", "Continence adviser", "Late effects clinic"]} lit={() => true} />}
      <Cap>{["A bladder that feels full sooner", "Struggling? Talk to your nurse", "Get these checked as soon as possible", "Drink 1 to 2 litres through the day", "Try not to let embarrassment stop you"][at]}</Cap>
    </svg>} />;
}

function CxChairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Closeness" title="Closeness, comfort and talking" label="Sex and intimacy" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two people on chairs facing each other, talking, with what helps between them">
      <path d="M30 150 H76 M30 150 V100 M34 150 V178 M72 150 V178 M244 150 H290 M290 150 V100 M248 150 V178 M286 150 V178" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <Person x={56} y={140} scale={1.1} /><Person x={264} y={140} scale={1.1} fill={SOFT} />
      {at === 0 && <g><rect x="120" y="60" width="80" height="84" rx="8" fill={WHITE} stroke={INK} strokeWidth="2.5" /><rect x="120" y="60" width="80" height="24" rx="8" fill={INK} /><W x={160} y={77} size={10} fill={WHITE}>Weeks</W><W x={160} y={124} size={30} serif>6</W></g>}
      {at === 1 && <g><path d="M100 120 H220 M210 112 L220 120 L210 128" stroke={SOFT} strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M148 106 L172 134 M172 106 L148 134" stroke={GOLD} strokeWidth="5" strokeLinecap="round" /></g>}
      {at === 2 && <g><Bubble x={100} y={56} text="· · ·" width={64} /><Bubble x={220} y={40} text="· · ·" width={64} /></g>}
      {at === 3 && <Tags x={100} y={40} width={120} gap={34} labels={["Lubricant", "Relaxation", "Other positions"]} lit={() => true} />}
      {at === 4 && <g><Box x={96} y={50} width={128} text="Cancer team or GP" lit size={10} /><Box x={96} y={88} width={128} text="Sex therapist" size={10} /></g>}
      <Cap>{["At least 6 weeks after surgery", "Your partner cannot catch it", "Explain how things have changed", "Lubricant and relaxation can help", "Some treatments work better early"][at]}</Cap>
    </svg>} />;
}

function CxStairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const step = at;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Work" title="Back to work, one step at a time" label="Work and money" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person climbing five steps back to work, with rights, adjustments and help with costs">
      {Array.from({ length: 5 }, (_, index) => <rect key={index} x={24 + index * 36} y={170 - (index + 1) * 16} width="36" height={(index + 1) * 16} fill={INK} opacity={0.3 + index * 0.15} />)}
      <Person x={42 + step * 36} y={170 - (step + 1) * 16 - 14} scale={0.8} fill={GOLD} />
      {at === 0 && <g><path d="M230 20 H284 L300 36 V110 H230 Z" fill={WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><W x={265} y={62} size={10}>Equality</W><W x={265} y={78} size={10}>Act 2010</W></g>}
      {at === 1 && <g><NoLifting x={124} y={56} /><Box x={186} y={30} width={126} text="Keyhole: 6 weeks" size={10} /><Box x={186} y={64} width={126} text="Abdominal: 12 weeks" size={10} /></g>}
      {at === 2 && <Tags x={200} y={24} width={110} gap={32} labels={["Phased return", "Extra breaks", "Parking nearby"]} lit={() => true} />}
      {at === 3 && <g><Coin x={250} y={46} /><Box x={196} y={84} width={116} text="Access to Work" size={10} lit /></g>}
      {at === 4 && <g><Box x={210} y={30} width={102} text="0808 808 0000" lit size={10} /><Person x={262} y={118} scale={0.9} fill={SOFT} /></g>}
      <Cap>{["You cannot be treated less favourably", "Plan to return gradually if you can", "Agree changes before they start", "A grant you do not pay back", "Get benefits advice early"][at]}</Cap>
    </svg>} />;
}

function CxCloud(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Mood" title="The low months after treatment ends" label="Mood" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A cloud slowly shrinking as a sun comes out, with an open door and phone numbers for help">
      {at >= 2 && <circle cx="150" cy="64" r={at >= 3 ? 22 : 14} fill={GOLD} opacity={at >= 3 ? 1 : 0.5} />}
      <Cloud x={100} y={100} s={[1.4, 1.2, 1, 0.8, 0.6][at]} fill={at <= 1 ? SOFT : TINT} />
      {at === 0 && <Tags x={178} y={44} width={130} gap={34} labels={["Side effects", "Others expect normal"]} lit={() => false} />}
      {at === 1 && <Tags x={178} y={44} width={130} gap={34} labels={["Talk about feelings", "Do what you enjoy"]} lit={() => true} />}
      {at === 2 && <Box x={178} y={64} width={130} text="Not your fault" lit />}
      {at === 3 && <g><rect x="230" y="40" width="60" height="114" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M230 40 L206 52 V164 L230 154 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" /><W x={260} y={102} size={14}>GP</W></g>}
      {at === 4 && <g><Phone x={200} y={84} />{["111", "116 123", "999"].map((sign, index) => <Box key={sign} x={236} y={40 + index * 34} width={74} text={sign} lit={index === 1} />)}</g>}
      <Cap>{["You may still need support", "Uncertainty often eases with time", "Feeling guilty? It is no one's fault", "Persistently sad? Do not delay a GP", "Urgent help: 111, 116 123 or 999"][at]}</Cap>
    </svg>} />;
}

export function GynPieceView({ piece, ...props }: { piece: GynPiece } & PieceProps) {
  switch (piece) {
    case "ov-pathway": return <OvPathway {...props} />;
    case "ov-rings": return <OvRings {...props} />;
    case "ov-trend": return <OvTrend {...props} />;
    case "ov-family": return <OvFamily {...props} />;
    case "ov-weeks": return <OvWeeks {...props} />;
    case "ov-parp": return <OvParp {...props} />;
    case "ov-drop": return <OvDrop {...props} />;
    case "ov-energy": return <OvEnergy {...props} />;
    case "ov-bottle": return <OvBottle {...props} />;
    case "ov-bench": return <OvBench {...props} />;
    case "ov-laptop": return <OvLaptop {...props} />;
    case "ov-hills": return <OvHills {...props} />;
    case "wb-steps": return <WbSteps {...props} />;
    case "wb-layers": return <WbLayers {...props} />;
    case "wb-calendar": return <WbCalendar {...props} />;
    case "wb-tree": return <WbTree {...props} />;
    case "wb-home": return <WbHome {...props} />;
    case "wb-wave": return <WbWave {...props} />;
    case "wb-stopwatch": return <WbStopwatch {...props} />;
    case "wb-legs": return <WbLegs {...props} />;
    case "wb-glass": return <WbGlass {...props} />;
    case "wb-weeks": return <WbWeeks {...props} />;
    case "wb-walk": return <WbWalk {...props} />;
    case "wb-window": return <WbWindow {...props} />;
    case "cx-tiles": return <CxTiles {...props} />;
    case "cx-reach": return <CxReach {...props} />;
    case "cx-years": return <CxYears {...props} />;
    case "cx-virus": return <CxVirus {...props} />;
    case "cx-bars": return <CxBars {...props} />;
    case "cx-early": return <CxEarly {...props} />;
    case "cx-dilator": return <CxDilator {...props} />;
    case "cx-paths": return <CxPaths {...props} />;
    case "cx-plan": return <CxPlan {...props} />;
    case "cx-chairs": return <CxChairs {...props} />;
    case "cx-stairs": return <CxStairs {...props} />;
    case "cx-cloud": return <CxCloud {...props} />;
  }
}
