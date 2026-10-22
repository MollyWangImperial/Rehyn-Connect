import type { ReactNode } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { JOINT_PIECES, type JointPiece } from "@/content/joint-features";
import { useStill, type PieceProps } from "./NewsPieceParts";
import { GOLD, MemoryBand, useSection } from "./NewsMemoryPieces";
import { credit, INK, LINE, Person, Pill, SOFT, TEXT, TINT, W, WHITE } from "./NewsHeartPieces";
import { Knee } from "./NewsBonesPieces";

// The Hip replacement and Knee replacement pages' own pieces (content/joint-features.ts), drawn in the page's card colours
// (the --t- variables), like the other Bones, joints & muscles pieces. Each is steered by the card's sections;
// pictures show ideas, never anyone's own body, scans or results.

export const isJointPiece = (piece: NewsPiece): piece is JointPiece => (JOINT_PIECES as readonly string[]).includes(piece);

// ==== Shared parts ==========================================================================================

/** The caption under a picture. */
const Say = ({ y = 204, children }: { y?: number; children: ReactNode }) => <W x={160} y={y} size={11}>{children}</W>;
/** A labelled rounded box centred on (x, y); `lit` boxes are filled. */
const Box = ({ x, y, w, text, lit = false, h = 26, size = 10.5 }: { x: number; y: number; w: number; text: string; lit?: boolean; h?: number; size?: number }) =>
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="9" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" /><W x={x} y={y + size * 0.36} size={size} fill={lit ? WHITE : TEXT}>{text}</W></g>;
/** A column of labelled boxes from (x, y) down; `lit` boxes are filled. */
const Tags = ({ x, y, labels, lit = () => false, width = 124, gap = 34 }: { x: number; y: number; labels: string[]; lit?: (index: number) => boolean; width?: number; gap?: number }) =>
  <g>{labels.map((label, index) => <Box key={label} x={x + width / 2} y={y + 13 + index * gap} w={width} text={label} lit={lit(index)} />)}</g>;
/** A centred row of boxes sized to their words. */
const Row = ({ y, labels, lit = () => false, size = 10 }: { y: number; labels: string[]; lit?: (index: number) => boolean; size?: number }) => {
  const widths = labels.map(label => label.length * size * 0.6 + 16);
  let x = 160 - (widths.reduce((sum, w) => sum + w, 0) + 8 * (labels.length - 1)) / 2;
  return <g>{labels.map((label, index) => { const at = x + widths[index] / 2; x += widths[index] + 8; return <Box key={label} x={at} y={y} w={widths[index]} text={label} lit={lit(index)} size={size} />; })}</g>;
};
/** A gold cross over something to leave out. */
const Cross = ({ x, y, s = 12 }: { x: number; y: number; s?: number }) =>
  <path d={`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />;
const Tick = ({ x, y, s = 9, stroke = INK }: { x: number; y: number; s?: number; stroke?: string }) =>
  <path d={`M${x - s} ${y} L${x - s / 3} ${y + s * 0.7} L${x + s} ${y - s * 0.7}`} stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const Arrow = ({ d, head, stroke = GOLD }: { d: string; head: string; stroke?: string }) =>
  <g stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} /><path d={head} /></g>;
const House = ({ x, y, fill = WHITE, stroke = INK }: { x: number; y: number; fill?: string; stroke?: string }) =>
  <path d={`M${x - 12} ${y + 2} L${x} ${y - 10} L${x + 12} ${y + 2} V${y + 13} H${x - 12} Z`} fill={fill} stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />;
const Frame = ({ x, y, stroke = INK, s = 1 }: { x: number; y: number; stroke?: string; s?: number }) =>
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M-14 20 V-16 H14 V20 M-14 2 H14 M-18 20 H-10 M10 20 H18" stroke={stroke} strokeWidth={3 / s} fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const Crutch = ({ x, y, stroke = INK, h = 70 }: { x: number; y: number; stroke?: string; h?: number }) =>
  <g stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round"><path d={`M${x} ${y} V${y + h}`} /><path d={`M${x - 7} ${y + 4} A8 8 0 0 1 ${x + 7} ${y + 4}`} /><path d={`M${x} ${y + h * 0.42} h8`} /></g>;
const Stick = ({ x, y, stroke = INK, h = 70 }: { x: number; y: number; stroke?: string; h?: number }) =>
  <path d={`M${x} ${y + h} V${y + 8} C${x} ${y - 2}, ${x + 12} ${y - 2}, ${x + 13} ${y + 6}`} stroke={stroke} strokeWidth="3.5" fill="none" strokeLinecap="round" />;
const Steps = ({ x, y, n, fill = INK }: { x: number; y: number; n: number; fill?: string }) =>
  <g fill={fill}>{Array.from({ length: n }, (_, index) => <ellipse key={index} cx={x + index * 26} cy={y + (index % 2 ? 10 : 0)} rx="9" ry="5" />)}</g>;
/** A point on a circle, the angle in degrees clockwise from the top. */
const at360 = (cx: number, cy: number, r: number, deg: number) => [cx + r * Math.sin(deg * Math.PI / 180), cy - r * Math.cos(deg * Math.PI / 180)];
const arc = (cx: number, cy: number, r: number, from: number, to: number) => {
  const [x0, y0] = at360(cx, cy, r, from), [x1, y1] = at360(cx, cy, r, to);
  return `M${x0} ${y0} A${r} ${r} 0 ${to - from > 180 ? 1 : 0} 1 ${x1} ${y1}`;
};

/** A knee side on, centred on (x, y): natural, worn, or with a total, partial or complex (long-stemmed) replacement. */
const KneeJoint = ({ x, y, scale = 1, kind }: { x: number; y: number; scale?: number; kind: "worn" | "total" | "partial" | "complex" }) => {
  if (kind === "worn") return <Knee x={x} y={y} scale={scale} worn />;
  const half = kind === "partial";
  return <g transform={`translate(${x} ${y}) scale(${scale})`} strokeLinejoin="round">
    <path d="M-26 -90 V-20 C-26 -6, -14 2, 0 2 C14 2, 26 -6, 26 -20 V-90" fill={WHITE} stroke={INK} strokeWidth="3" />
    <path d="M-28 90 V22 C-28 12, -14 8, 0 8 C14 8, 28 12, 28 22 V90" fill={WHITE} stroke={INK} strokeWidth="3" />
    {kind === "complex" && <><rect x="-5" y="-74" width="10" height="72" rx="3" fill={SOFT} stroke={INK} strokeWidth="2" /><rect x="-5" y="18" width="10" height="56" rx="3" fill={SOFT} stroke={INK} strokeWidth="2" /></>}
    {kind !== "complex" && <rect x={half ? -20 : -5} y="18" width="10" height="24" rx="3" fill={SOFT} stroke={INK} strokeWidth="2" />}
    <path d={half ? "M-28 -26 C-28 -4, -14 4, 0 4 V-3 C-12 -3, -22 -10, -22 -26 Z" : "M-28 -26 C-28 -4, -14 4, 0 4 C14 4, 28 -4, 28 -26 H22 C22 -10, 12 -3, 0 -3 C-12 -3, -22 -10, -22 -26 Z"} fill={SOFT} stroke={INK} strokeWidth="2" />
    <rect x="-27" y="5" width={half ? 27 : 54} height="8" rx="3" fill={TINT} stroke={INK} strokeWidth="2" />
    <rect x="-30" y="13" width={half ? 30 : 60} height="6" rx="2" fill={SOFT} stroke={INK} strokeWidth="2" />
    <ellipse cx="36" cy="-12" rx="7" ry="13" fill={WHITE} stroke={INK} strokeWidth="2.5" />
  </g>;
};

// ==== Hip replacement =======================================================================================

function HipBallSocket(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const implant = at >= 1;
  const tags = [["Ball: thigh bone", "Socket: pelvis", "Cartilage lining"], ["Metal stem", "Metal ball", "Plastic socket"], ["Total: both", "Partial: ball only", "Resurfacing: cover"], ["Less pain", "Better movement", "Months to recover"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="A new ball, a new socket" label="The hip and its replacement" credit="Illustration: Rehyn. A picture of the idea, not an implant."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A hip joint: the ball of the thigh bone in the pelvis socket, and the parts that replace them">
      <path d="M24 30 H170 V76 L142 82 A32 32 0 0 0 78 82 L24 74 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M100 100 L134 128 V192 H162 V120 C162 104, 150 94, 132 90 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" opacity={implant ? 0.55 : 1} />
      {implant && <path d="M141 186 L144 130 L112 98 L120 92 L154 118 L150 186 Z" fill={SOFT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />}
      {implant && at !== 2 && <path d="M80 83 A30 30 0 0 1 140 83" fill="none" stroke={TINT} strokeWidth="7" />}
      {implant && <path d="M77 82 A33 33 0 0 1 143 82" fill="none" stroke={INK} strokeWidth="2" opacity={at === 2 ? 0.3 : 1} />}
      <circle cx="110" cy="88" r="24" fill={implant ? SOFT : WHITE} stroke={INK} strokeWidth="3" />
      {!implant && <circle cx="110" cy="88" r="28" fill="none" stroke={SOFT} strokeWidth="4" />}
      <Tags x={184} y={36} labels={tags} width={126} lit={index => at === 3 && index < 2} />
      <Say>{["A ball turning in a smooth socket", "Total: a new ball, stem and socket", "Partial or resurfacing suit some", "Less pain, better movement for most"][at]}</Say>
    </svg>} />;
}

function HipScales(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tilt = [-10, -6, 0, 4, 0][at];
  const t = tilt * Math.PI / 180;
  const ends = [[90 - 48 * Math.cos(t), 60 - 48 * Math.sin(t)], [90 + 48 * Math.cos(t), 60 + 48 * Math.sin(t)]];
  const tags = [["Hip pain", "Stiffness", "Daily life harder"], ["Exercise", "Weight loss", "Walking aids", "Pain relief", "Steroid injection"], ["No upper age limit", "No lower age limit", "Joints wear out"], ["Alternatives", "Benefits", "Risks", "More surgery later?"], ["Blood clots", "Wound infection", "Leg length", "Dislocation or wear"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Deciding" title="Is it time for a new hip?" label="Deciding" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A balance weighing life now against a new hip, with what goes into the decision">
      <path d="M90 60 V172 M62 172 H118" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <path d={`M${ends[0][0]} ${ends[0][1]} L${ends[1][0]} ${ends[1][1]}`} stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <circle cx="90" cy="60" r="5" fill={GOLD} />
      {ends.map(([x, y], index) => <g key={index}>
        <path d={`M${x} ${y} V${y + 30}`} stroke={SOFT} strokeWidth="2" />
        <path d={`M${x - 22} ${y + 30} Q${x} ${y + 48} ${x + 22} ${y + 30} Z`} fill={index === 0 && at < 2 ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <W x={x} y={y + 64} size={10}>{index === 0 ? "Life now" : "New hip"}</W>
      </g>)}
      <Tags x={178} y={tags.length > 4 ? 22 : 30} labels={tags} width={132} gap={tags.length > 4 ? 32 : 34} lit={() => at === 0 || at === 4} />
      <Say y={206}>{["When hip pain has a big effect on life", "Other treatments usually come first", "Younger people may need more surgery", "Weigh it up with your surgeon", "Common and safe, with risks to discuss"][at]}</Say>
    </svg>} />;
}

function HipCountdown(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const used = [12, 20, 26, 33][at];
  const tags = [["Strength exercises", "Stop smoking", "Healthy diet"], ["Stay active", "Follow-along routines", "Ask what suits you"], ["Blood test", "X-rays", "Urine test", "ECG"], ["Help at home", "Freezer meals", "Transport", "Dental check-up"]][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Preparing" title="Getting stronger while you wait" label="Preparing" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Waiting weeks on a calendar counting down to the operation, with ways to get ready">
      <W x={20} y={28} size={10} anchor="start">The waiting weeks</W>
      {Array.from({ length: 35 }, (_, day) => {
        const last = day === 34, clinic = at === 2 && day === 21;
        return <rect key={day} x={20 + (day % 7) * 19} y={38 + Math.floor(day / 7) * 19} width="16" height="16" rx="4"
          fill={last ? GOLD : day < used ? INK : WHITE} opacity={!last && day < used ? 0.75 : 1} stroke={clinic ? GOLD : INK} strokeWidth={clinic ? 3 : 1.5} />;
      })}
      <rect x="20" y="146" width="12" height="12" rx="3" fill={GOLD} /><W x={38} y={156} size={10} anchor="start">The operation</W>
      {at === 2 && <><rect x="20" y="166" width="12" height="12" rx="3" fill={WHITE} stroke={GOLD} strokeWidth="3" /><W x={38} y={176} size={10} anchor="start">The clinic</W></>}
      <Tags x={172} y={30} labels={tags} width={138} />
      <Say y={206}>{["Use the wait: lists can be long", "Staying active gives the best chance", "Checks at a clinic, a few weeks before", "Home ready, lift booked, teeth checked"][at]}</Say>
    </svg>} />;
}

function HipDayStations(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const xs = [40, 100, 160, 220, 280];
  const icon = (index: number, lit: boolean) => {
    const c = lit ? WHITE : INK, x = xs[index], y = 92;
    if (index === 0) return <g><rect x={x - 8} y={y - 12} width="16" height="24" rx="2" fill="none" stroke={c} strokeWidth="2.5" /><circle cx={x + 4} cy={y} r="2" fill={c} /></g>;
    if (index === 1) return <g><circle cx={x} cy={y} r="10" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x} ${y - 10} A10 10 0 0 1 ${x} ${y + 10} Z`} fill={c} /></g>;
    if (index === 2) return <g><circle cx={x} cy={y} r="11" fill="none" stroke={c} strokeWidth="2.5" /><path d={`M${x} ${y} V${y - 7} M${x} ${y} L${x + 6} ${y + 3}`} stroke={c} strokeWidth="2.5" strokeLinecap="round" /></g>;
    if (index === 3) return <Frame x={x} y={y} stroke={c} s={0.6} />;
    return <House x={x} y={y - 2} fill="none" stroke={c} />;
  };
  const chipX = Math.min(250, Math.max(70, xs[at]));
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="In hospital" title="An hour or two, then first steps" label="In hospital" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The day of a hip replacement, from arriving to going home">
      <path d="M40 92 H280" stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {xs.map((x, index) => <g key={x}><circle cx={x} cy="92" r="22" fill={index === at ? INK : WHITE} stroke={INK} strokeWidth="2.5" />{icon(index, index === at)}
        <W x={x} y={132} size={10}>{["Arrive", "Anaesthetic", "Theatre", "Ward", "Home"][index]}</W></g>)}
      <path d={`M${chipX} 46 L${xs[at]} 68`} stroke={GOLD} strokeWidth="2.5" strokeDasharray="4 4" />
      <Box x={chipX} y={34} w={128} text={["Consent form", "Spinal or general", "About 1 to 2 hours", "Frame or crutches", "Around 1 to 3 days"][at]} lit />
      <Say y={178}>{["In on the day, with a consent form", "Most have a spinal: awake but numb", "The surgeon fits a new ball and socket", "Walking often starts the same day", "Home once you can get about safely"][at]}</Say>
    </svg>} />;
}

function HipBedMoves(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exercises" title="Little and often on the bed" label="Exercises" credit="Illustration: Rehyn. Follow your physiotherapist's advice first."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Exercises lying on a bed and standing at a worktop">
      <g opacity={at === 3 ? 0.35 : 1}>
        <rect x="20" y="70" width="8" height="66" rx="3" fill={INK} />
        <rect x="24" y="104" width="144" height="14" rx="5" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M30 118 V136 M162 118 V136" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <circle cx="46" cy="92" r="10" fill={INK} />
        <rect x="58" y="86" width="56" height="15" rx="7" fill={INK} />
        {at === 2 ? <path d="M112 94 L132 72 L156 98" stroke={INK} strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          : <path d="M112 94 H160" stroke={INK} strokeWidth="9" strokeLinecap="round" />}
      </g>
      <g opacity={at === 1 || at === 2 ? 0.35 : 1}>
        <Person x={246} y={74} scale={1.15} />
        <rect x="196" y="92" width="108" height="10" rx="3" fill={SOFT} stroke={INK} strokeWidth="2" />
        <rect x="202" y="102" width="96" height="40" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />
        <path d="M250 106 V138" stroke={INK} strokeWidth="1.5" />
      </g>
      {at === 1 && <><g fill={INK}>{[6, 10, 14, 18, 22].map((h, index) => <rect key={h} x={70 + index * 16} y={178 - h} width="10" height={h} rx="2" />)}</g><W x={162} y={176} size={10.5} anchor="start">A few, then more</W></>}
      {at === 2 && <><W x={92} y={176} size={13}>10 repeats</W>{[0, 1, 2, 3].map(index => <circle key={index} cx={168 + index * 16} cy={171} r="5.5" fill={index < 3 ? INK : SOFT} />)}<W x={230} y={176} size={10} anchor="start">3 or 4 a day</W></>}
      {at === 4 && <Row y={168} labels={["No jumping", "No sudden turns", "No fall risks"]} lit={() => true} />}
      <Say y={206}>{["Early exercise helps long-term strength", "Start with a few repeats, build up", "10 repeats, three or four times a day", "Standing, holding a worktop or chair", "Avoid jumps and sudden turns for now"][at]}</Say>
    </svg>} />;
}

function HipFrameStick(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const lit = (index: number) => at === 0 ? index < 2 : at >= 2 ? index === 2 : false;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Getting about" title="Frame, crutches, then one stick" label="Walking aids" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A walking frame, then crutches, then one stick, above footprints that get longer">
      <g opacity={lit(0) ? 1 : 0.35}><path d="M48 120 V48 H92 V120 M48 82 H92 M42 120 H54 M86 120 H98" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>
      <g opacity={lit(1) ? 1 : 0.35}><Crutch x={150} y={46} h={74} /><Crutch x={172} y={46} h={74} /></g>
      <g opacity={lit(2) ? 1 : 0.35}><Stick x={244} y={46} h={74} /></g>
      <Arrow d="M106 84 H132" head="M126 78 L132 84 L126 90" /><Arrow d="M190 84 H222" head="M216 78 L222 84 L216 90" />
      {[["Frame", 70], ["Crutches", 161], ["One stick", 250]].map(([label, x]) => <W key={label} x={x as number} y={140} size={10}>{label}</W>)}
      {at === 3 && <><path d="M276 46 V120 M270 52 L276 46 L282 52 M270 114 L276 120 L282 114" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /><W x={290} y={30} size={10} anchor="end">The right height</W></>}
      <Steps x={36} y={158} n={[4, 10, 7, 5][at]} fill={at === 1 ? INK : SOFT} />
      <Say y={206}>{["A frame first, then crutches or sticks", "Slightly longer walks each day", "One stick by week two, for many", "Borrow aids from the NHS; check height"][at]}</Say>
    </svg>} />;
}

function HipRecline(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pain and swelling" title="Sore, swollen and tired: what settles" label="Pain, swelling and sleep" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Pain easing over the weeks, a reclining chair, sleeping on your back, and when to get help">
      {at === 0 && <g>
        <path d="M40 30 V150 H290" stroke={LINE} strokeWidth="3" fill="none" />
        <W x={46} y={34} size={10} anchor="start">Pain from the surgery</W>
        <path d="M44 58 C80 58, 96 62, 110 76 S200 136, 286 140" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M110 44 V150" stroke={GOLD} strokeWidth="2.5" strokeDasharray="5 5" />
        <W x={110} y={168} size={10}>Week 2</W><W x={286} y={168} size={10} anchor="end">Later</W>
      </g>}
      {at === 1 && <g>
        <path d="M54 58 L86 132 H176 L226 120" stroke={SOFT} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="64" cy="58" r="11" fill={INK} />
        <path d="M74 74 L104 120 L210 110" stroke={INK} strokeWidth="13" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M100 136 V160 M170 136 V160" stroke={SOFT} strokeWidth="5" strokeLinecap="round" />
        <Tags x={178} y={24} labels={["Recline", "Get up and move"]} width={130} lit={index => index === 1} />
      </g>}
      {at === 2 && <g>
        <rect x="40" y="40" width="150" height="132" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
        <rect x="88" y="48" width="54" height="18" rx="6" fill={TINT} stroke={INK} strokeWidth="1.5" />
        <circle cx="115" cy="80" r="11" fill={INK} />
        <rect x="98" y="94" width="34" height="38" rx="10" fill={INK} />
        <rect x="94" y="128" width="13" height="38" rx="6" fill={INK} /><rect x="123" y="128" width="13" height="38" rx="6" fill={INK} />
        <rect x="108" y="134" width="14" height="26" rx="4" fill={GOLD} />
        <W x={204} y={84} size={10.5} anchor="start">On your back</W>
        <W x={204} y={140} size={10} anchor="start">A pillow between</W><W x={204} y={154} size={10} anchor="start">your legs</W>
        <path d="M200 144 H126" stroke={GOLD} strokeWidth="2" />
      </g>}
      {at === 3 && <g>
        {[30, 44, 58, 72, 52, 66, 80].map((h, index) => <rect key={index} x={40 + index * 22} y={150 - h} width="16" height={h} rx="3" fill={index === 4 ? GOLD : INK} />)}
        <W x={128} y={44} size={10.5}>Ease back a day or two</W>
        <circle cx="250" cy="108" r="24" fill={WHITE} stroke={INK} strokeWidth="3" /><path d="M250 84 C250 76, 254 72, 258 70" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M254 80 C262 72, 270 76, 268 82 C262 84, 258 84, 254 80 Z" fill={SOFT} />
        <W x={250} y={152} size={10.5}>Plenty of fibre</W>
      </g>}
      {at === 4 && <g>
        <rect x="50" y="50" width="220" height="74" rx="14" fill={INK} />
        <W x={160} y={82} size={14} fill={WHITE}>Urgent GP or NHS 111</W>
        <W x={160} y={104} size={10.5} fill={WHITE}>Could be an infection or a clot</W>
      </g>}
      <Say y={200}>{["Pain should start to ease in 2 weeks", "Recline, but do not sit still for long", "On your back, pillow between your legs", "Overdone it? Ease back a day or two", "Getting worse? Urgent GP or NHS 111"][at]}</Say>
    </svg>} />;
}

function HipTwoLanes(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const lanes = [{ y: 22, badge: "111", top: "Infection or clot signs", sub: "Urgent GP or NHS 111" }, { y: 82, badge: "999", top: "Breathless or chest pain", sub: "Call 999 or go to A&E" }];
  const chips = [["Leg pain", "High temperature", "Oozing"], ["Do not drive to A&E", "Bring your medicines"], ["Stockings", "Foot pumps", "Medicines"], ["Infection: antibiotics", "Leakage: tell surgeon"], ["Pain", "Swelling", "Clicking or popping"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Warning signs" title="Two numbers to know: 111 and 999" label="Warning signs" credit="Illustration: Rehyn. In an emergency, call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Two lanes: urgent GP or NHS 111 for infection or clot signs, and 999 for breathlessness or chest pain">
      {lanes.map((lane, index) => { const lit = at === index; return <g key={lane.badge} opacity={at > 1 ? 0.55 : 1}>
        <rect x="20" y={lane.y} width="280" height="50" rx="12" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <circle cx="50" cy={lane.y + 25} r="18" fill={lit ? WHITE : INK} />
        <W x={50} y={lane.y + 29} size={11.5} fill={lit ? INK : WHITE}>{lane.badge}</W>
        <W x={80} y={lane.y + 22} size={11} anchor="start" fill={lit ? WHITE : TEXT}>{lane.top}</W>
        <W x={80} y={lane.y + 38} size={10} anchor="start" fill={lit ? WHITE : TEXT}>{lane.sub}</W>
      </g>; })}
      <Row y={162} labels={chips} lit={() => at <= 1} />
      <Say y={204}>{["Urgent GP appointment or NHS 111", "Breathless or chest pain: call 999", "Stockings and medicines lower the risk", "Antibiotics usually treat an infection", "Worried? Contact your GP or care team"][at]}</Say>
    </svg>} />;
}

function HipRightAngle(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tiles = ["Raised seat", "Sock aid", "Grabber", "Assessment"];
  const icon = (index: number, cx: number, cy: number, c: string) => {
    if (index === 0) return <g fill="none" stroke={c} strokeWidth="2.5" strokeLinejoin="round"><rect x={cx - 16} y={cy - 12} width="32" height="7" rx="3" /><path d={`M${cx - 13} ${cy - 5} H${cx + 13} L${cx + 9} ${cy + 12} H${cx - 9} Z`} /></g>;
    if (index === 1) return <g fill="none" stroke={c} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"><path d={`M${cx - 6} ${cy - 14} V${cy + 2} C${cx - 6} ${cy + 10}, ${cx + 2} ${cy + 13}, ${cx + 13} ${cy + 11} V${cy + 3} C${cx + 7} ${cy + 3}, ${cx + 4} ${cy}, ${cx + 4} ${cy - 14} Z`} /><path d={`M${cx - 1} ${cy - 14} C${cx - 10} ${cy - 22}, ${cx - 16} ${cy - 16}, ${cx - 18} ${cy - 8}`} /></g>;
    if (index === 2) return <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round"><path d={`M${cx - 16} ${cy + 14} L${cx + 10} ${cy - 10}`} /><path d={`M${cx + 10} ${cy - 10} l8 -4 M${cx + 10} ${cy - 10} l4 -8`} /><path d={`M${cx - 16} ${cy + 14} l-2 -8`} /></g>;
    return <House x={cx} y={cy} fill="none" stroke={c} />;
  };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Everyday life" title="Keeping the new hip safe at home" label="Everyday life" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A person sitting with the hip at a right angle, and equipment that helps at home">
      <path d="M36 50 V170 M36 120 H112 V170 M36 96 H100" stroke={SOFT} strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="56" cy="46" r="11" fill={INK} />
      <path d="M56 62 V108 H104 V160" stroke={INK} strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <g opacity={at === 0 ? 1 : 0.3}><path d="M56 86 A22 22 0 0 0 78 108" fill="none" stroke={GOLD} strokeWidth="3" /><rect x="60" y="94" width="8" height="8" fill="none" stroke={GOLD} strokeWidth="2" /><W x={92} y={84} size={11}>90°</W></g>
      {tiles.map((tile, index) => { const x = 160 + (index % 2) * 76, y = 22 + Math.floor(index / 2) * 74, lit = at === index + 1; return <g key={tile}>
        <rect x={x} y={y} width="70" height="64" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, x + 35, y + 26, lit ? WHITE : INK)}
        <W x={x + 35} y={y + 56} size={9.5} fill={lit ? WHITE : TEXT}>{tile}</W>
      </g>; })}
      <Say y={204}>{["Bend no more than a right angle", "Higher chairs with arms; raised seats", "Sock aids, and a shower after 48 hours", "Everything in reach, nothing heavy", "A free council needs assessment"][at]}</Say>
    </svg>} />;
}

function HipCarSwing(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const wk = (week: number) => 30 + week * 260 / 12;
  const marks: [number, string][] = [[[6, "At least 6"]], [[12, "DVLA: 3 months"]], [], [[6, "Most jobs"], [12, "Walking job"]], []][at] as [number, string][];
  const tags = [["Safe control", "Emergency stop", "Free of pain effects"], ["Tell your insurer", "Check your policy", "Unsure? Ask a doctor"], ["Sit sideways first", "Swing both legs in"], ["Return when ready", "About 6 weeks", "Lighter duties"], ["Plan with employer", "Lighter duties first", "Access to Work"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Driving and work" title="Six weeks to the driving seat" label="Driving and work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Weeks after the operation, getting into a car seat, and returning to work">
      <W x={30} y={22} size={10} anchor="start">Weeks after the operation</W>
      <path d={`M${wk(0)} 34 H${wk(12)}`} stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {[0, 3, 6, 9, 12].map(week => <g key={week}><path d={`M${wk(week)} 29 V39`} stroke={INK} strokeWidth="2" /><W x={wk(week)} y={52} size={9.5}>{week}</W></g>)}
      {marks.map(([week, label]) => <g key={label}><circle cx={wk(week)} cy="34" r="7" fill={GOLD} stroke={WHITE} strokeWidth="2" /><W x={Math.min(wk(week), 290)} y={68} size={10} anchor={week === 12 ? "end" : "middle"}>{label}</W></g>)}
      <g opacity={at <= 2 ? 1 : 0.35}>
        {[[24, 92], [24, 156], [140, 92], [140, 156]].map(([x, y]) => <rect key={`${x}-${y}`} x={x} y={y} width="8" height="20" rx="3" fill={INK} />)}
        <rect x="30" y="84" width="112" height="98" rx="18" fill={WHITE} stroke={SOFT} strokeWidth="4" />
        <path d="M40 98 C60 90, 112 90, 132 98" stroke={SOFT} strokeWidth="3" fill="none" />
        <rect x="62" y="108" width="40" height="46" rx="7" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M142 104 V162" stroke={INK} strokeWidth="2" strokeDasharray="4 4" />
        {at === 2 && <><Arrow d="M156 132 H110" head="M116 126 L110 132 L116 138" /><Arrow d="M86 166 C110 172, 124 160, 124 146" head="M118 150 L124 145 L129 151" /></>}
      </g>
      <Tags x={164} y={86} labels={tags} width={146} gap={32} lit={index => at === 2 && index < 2} />
      <Say y={206}>{["Wait at least 6 weeks to drive", "Tell your insurer about the operation", "Sit sideways, then swing both legs in", "Work: about 6 weeks, longer if walking", "Plan your return with your employer"][at]}</Say>
    </svg>} />;
}

function HipSportSteps(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const bars = [{ t: "Walking", w: "From the start" }, { t: "Swimming, cycling", w: "Once healing well" }, { t: "Golf, bowls, dancing", w: "About 3 months" }];
  const lit = (index: number) => at === 0 ? index < 2 : at === 1 ? index === 2 : false;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Activity" title="Walk, swim, cycle, then golf" label="Sport and activity" credit="Illustration: Rehyn. Ask your surgeon or physiotherapist first."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Steps back to activity: walking, then swimming and cycling, then golf, bowls and dancing">
      {bars.map((bar, index) => { const x = 20 + index * 16, y = 150 - index * 40; return <g key={bar.t} opacity={at >= 2 ? 0.45 : 1}>
        <rect x={x} y={y} width="170" height="28" rx="10" fill={lit(index) ? INK : WHITE} stroke={INK} strokeWidth="2" />
        <W x={x + 85} y={y + 18} size={10.5} fill={lit(index) ? WHITE : TEXT}>{bar.t}</W>
        <W x={x + 178} y={y + 18} size={10} anchor="start">{bar.w}</W>
      </g>; })}
      {at === 2 && <Row y={40} labels={["Skiing?", "Squash?", "Running on hard ground?"]} lit={() => true} />}
      {at === 3 && <>{Array.from({ length: 7 }, (_, index) => <rect key={index} x={92 + index * 20} y="22" width="16" height="16" rx="4" fill={index === 1 || index === 4 ? GOLD : INK} />)}<W x={160} y={56} size={10}>Every day, strength twice a week</W></>}
      {at === 4 && <Box x={160} y={40} w={120} text="6 to 8 weeks" lit />}
      <Say y={206}>{["Walking, swimming and cycling first", "Golf, bowls, dancing: about 3 months", "High-impact sports: ask your surgeon", "Every day, strength on 2 days a week", "Try to avoid sex for 6 to 8 weeks"][at]}</Say>
    </svg>} />;
}

function HipYearsDial(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const deg = (years: number) => years * 22;
  const tags = [["Almost normal", "Pain-free activity", "For many years"], ["All implants wear", "Loosening: pain", "Hip may be unstable"], ["New hip pain", "Less mobile", "Popping or clicking"], ["Revision surgery", "Longer in hospital", "Longer recovery"], ["6 to 12 week check", "Joint Registry", "New pain or a limp"]][at];
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Long term" title="Built to last 15 years and more" label="How long it lasts" credit="Illustration: Rehyn. A picture of the idea, not a prediction."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A dial of 15 years for a new hip, with wear and loosening most common towards the end">
      <circle cx="96" cy="106" r="60" fill="none" stroke={LINE} strokeWidth="14" />
      <path d={arc(96, 106, 60, 0, deg(15))} fill="none" stroke={at === 0 ? INK : SOFT} strokeWidth="14" strokeLinecap="round" />
      {at === 1 && <path d={arc(96, 106, 60, deg(10), deg(15))} fill="none" stroke={GOLD} strokeWidth="14" strokeLinecap="round" />}
      {at === 4 && <circle cx={at360(96, 106, 60, 4)[0]} cy={at360(96, 106, 60, 4)[1]} r="8" fill={GOLD} stroke={WHITE} strokeWidth="2" />}
      {[0, 5, 10, 15].map(years => { const [x, y] = at360(96, 106, 80, deg(years)); return <W key={years} x={x} y={y + 4} size={10}>{years === 15 ? "15+" : years}</W>; })}
      {at <= 1 ? <><W x={96} y={102} size={10}>{at === 0 ? "at least" : "loosening"}</W><W x={96} y={120} size={13}>{at === 0 ? "15 years" : "10 to 15"}</W></>
        : <g transform="translate(96 106)"><path d="M-4 30 L-2 -2 L-18 -18 L-12 -22 L6 -6 L6 30 Z" fill={SOFT} stroke={INK} strokeWidth="2" strokeLinejoin="round" /><circle cx="-16" cy="-22" r="10" fill={SOFT} stroke={INK} strokeWidth="2" /><path d="M-30 -26 A15 15 0 0 1 -2 -26" fill="none" stroke={INK} strokeWidth="3" /></g>}
      <Tags x={182} y={40} labels={tags} width={130} />
      <Say y={206}>{["Designed to last at least 15 years", "Loosening most often at 10 to 15 years", "Metal-on-metal? Have regular check-ups", "Revisions are possible, and improving", "Follow-up around 6 to 12 weeks after"][at]}</Say>
    </svg>} />;
}

// ==== Knee replacement ======================================================================================

function KneeNewSurfaces(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const kind = (["worn", "total", "partial", "complex", "total"] as const)[at];
  const tags = at === 0 ? ["Thigh bone", "Worn cartilage", "Shin bone"] : at === 4 ? ["Less pain", "Better movement", "Can last 25 years"] : ["Total", "Partial", "Kneecap", "Complex"];
  const lit = (index: number) => at === 1 ? index === 0 : at === 2 ? index === 1 || index === 2 : at === 3 ? index === 3 : at === 4 && index < 2;
  return <MemoryBand props={props} state={s} tone="theme" kicker="What it is" title="New surfaces for a worn knee" label="Kinds of knee replacement" credit="Illustration: Rehyn. A picture of the idea, not an implant."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A knee from the side: worn cartilage, then new metal and plastic surfaces on the bone ends">
      <KneeJoint x={96} y={102} scale={0.9} kind={kind} />
      <Tags x={180} y={tags.length > 3 ? 28 : 40} labels={tags} width={128} gap={tags.length > 3 ? 36 : 38} lit={lit} />
      <Say y={206}>{["Bones rub when cartilage wears away", "Total: both bone ends get new surfaces", "Partial: one side only, a smaller cut", "More complex for bone loss or a repeat", "Usually less pain and better movement"][at]}</Say>
    </svg>} />;
}

function KneeFourInFive(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Deciding" title="Weighing up a new knee" label="Deciding" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Five people, four of them happy with a new knee, and what goes into the decision">
      {Array.from({ length: 5 }, (_, index) => <Person key={index} x={36 + index * 44} y={84} fill={at === 2 && index < 4 ? INK : SOFT} />)}
      {at === 2 && <W x={264} y={70} size={14}>4 in 5</W>}
      {at === 0 && <Row y={140} labels={["Pain", "Stiffness", "Instability"]} lit={() => true} size={10.5} />}
      {at === 1 && <Row y={140} labels={["Exercise", "Insoles", "Pain relief", "Injection"]} />}
      {at === 2 && <W x={160} y={144} size={11}>happy with their new knees</W>}
      {at === 3 && <><rect x="60" y="126" width="200" height="22" rx="11" fill={LINE} /><rect x="60" y="126" width="150" height="22" rx="11" fill={INK} /><W x={160} y={170} size={10.5}>About three-quarters of normal</W></>}
      {at === 4 && <Row y={140} labels={["Age", "Health", "Activity"]} size={10.5} />}
      <Say y={204}>{["When pain limits daily life", "Other treatments may delay surgery", "Four in five are happy with new knees", "Most rate it three-quarters normal", "Having or delaying: ask your surgeon"][at]}</Say>
    </svg>} />;
}

function KneeChecklist(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rows = ["Plan while you wait", "Thigh exercises", "Health and teeth", "Pre-admission clinic", "Home and transport"];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Preparing" title="Using the wait to get ready" label="Preparing" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A checklist of ways to get ready for a knee replacement">
      <rect x="50" y="22" width="220" height="158" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="130" y="14" width="60" height="16" rx="5" fill={INK} />
      {rows.map((row, index) => { const y = 50 + index * 28, now = index === at; return <g key={row}>
        {now && <rect x="58" y={y - 13} width="204" height="26" rx="8" fill={INK} />}
        <rect x="66" y={y - 8} width="16" height="16" rx="4" fill={WHITE} stroke={now ? WHITE : INK} strokeWidth="2" />
        {index < at && <Tick x={74} y={y} s={6} />}
        <W x={94} y={y + 4} size={11} anchor="start" fill={now ? WHITE : TEXT}>{row}</W>
      </g>; })}
      <Say y={204}>{["Use the wait to get ready", "Strengthen the front of the thigh", "Dental check-up well before surgery", "A clinic checks you are well enough", "Meals, help and transport ready"][at]}</Say>
    </svg>} />;
}

function KneeDayRuler(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const day = (d: number) => 40 + d * 60;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="In hospital" title="In on the day, up and moving soon" label="In hospital" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="The days in hospital after a knee replacement, from arriving to going home">
      {at === 0 && <><rect x="70" y="36" width="54" height="86" rx="4" fill={WHITE} stroke={INK} strokeWidth="3" /><circle cx="114" cy="80" r="3.5" fill={INK} />
        <Box x={226} y={60} w={130} text="Consent form" /><Box x={226} y={98} w={130} text="Knee marked" lit /></>}
      {at === 1 && <><Box x={90} y={64} w={134} text="General: asleep" lit /><Box x={236} y={64} w={140} text="Spinal: awake, numb" lit />
        <W x={160} y={110} size={10}>Often with local anaesthetic at the knee</W></>}
      {at === 2 && <><circle cx="120" cy="74" r="44" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d={`M120 74 L120 30 ${arc(120, 74, 44, 0, 60).replace(/^M[^A]+/, "")} Z`} fill={SOFT} />
        <path d={`M120 74 L120 30 ${arc(120, 74, 44, 0, 30).replace(/^M[^A]+/, "")} Z`} fill={INK} />
        <W x={186} y={80} size={12} anchor="start">1 to 2 hours</W></>}
      {at === 3 && <><path d={`M${day(0)} 116 C${day(1)} 110, ${day(1.5)} 50, ${day(2.5)} 46 S${day(3.5)} 96, ${day(4)} 104`} stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
        <W x={day(2.5)} y={36} size={10.5}>Sorest</W><W x={day(0)} y={34} size={10} anchor="start">Pain</W></>}
      {at === 4 && <><Frame x={100} y={84} s={1.3} /><Arrow d="M140 84 H196" head="M190 78 L196 84 L190 90" /><House x={236} y={84} /></>}
      <path d={`M${day(0)} 146 H${day(4)}`} stroke={LINE} strokeWidth="6" strokeLinecap="round" />
      {at <= 2 && <circle cx={day(0)} cy="146" r="8" fill={GOLD} stroke={WHITE} strokeWidth="2" />}
      {at === 3 && <rect x={day(2) - 6} y="140" width={day(3) - day(2) + 12} height="12" rx="6" fill={GOLD} />}
      {at === 4 && <rect x={day(1) - 6} y="140" width={day(4) - day(1) + 12} height="12" rx="6" fill={GOLD} />}
      {["Op day", "Day 1", "Day 2", "Day 3", "Day 4"].map((label, index) => <W key={label} x={day(index)} y={168} size={10}>{label}</W>)}
      <Say y={204}>{["In on the day; your knee is marked", "General or spinal: you choose together", "Usually about 1 to 2 hours", "Usually sorest on day 2 or 3", "Most go home 1 to 4 days after"][at]}</Say>
    </svg>} />;
}

function KneeDayWedges(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme" kicker="Exercises" title="Little and often, every day" label="Exercises" credit="Illustration: Rehyn. Check with your doctor or physiotherapist first."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A day dial with short exercise sessions spread through it, and ways to keep the knee moving">
      <circle cx="86" cy="100" r="62" fill={WHITE} stroke={INK} strokeWidth="3" />
      {Array.from({ length: 8 }, (_, index) => <path key={index} d={arc(86, 100, 52, index * 45 - 7, index * 45 + 7)} fill="none" stroke={at === 1 ? (index < 6 ? INK : SOFT) : LINE} strokeWidth="12" />)}
      {at === 1 ? <W x={86} y={104} size={12}>10 min</W> : <path d="M86 100 V68 M86 100 L106 112" stroke={TEXT} strokeWidth="4" strokeLinecap="round" />}
      {at === 0 && <><W x={240} y={72} size={10.5}>Still improving</W><Arrow d="M180 94 H296" head="M290 88 L296 94 L290 100" stroke={INK} /><W x={182} y={116} size={10} anchor="start">Op</W><W x={296} y={116} size={10} anchor="end">2 years</W></>}
      {at === 1 && <Tags x={170} y={44} labels={["10 minutes", "6 to 8 times a day", "Balance with rest"]} width={136} />}
      {at === 2 && <><path d="M176 172 H214 V144 H252 V116 H290 V172 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M188 56 L204 104 L232 140" stroke={INK} strokeWidth="11" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <Arrow d="M216 70 L238 92" head="M230 92 L238 92 L238 84" /></>}
      {at === 3 && <>{[56, 56, 30, 40, 50].map((h, index) => <rect key={index} x={184 + index * 22} y={150 - h} width="16" height={h} rx="3" fill={index === 2 ? GOLD : INK} />)}<W x={240} y={74} size={10.5}>Fewer, then build up</W></>}
      {at === 4 && <g fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        <circle cx="206" cy="122" r="22" /><circle cx="276" cy="122" r="22" /><path d="M206 122 L226 86 H262 L276 122 M226 86 L242 122 L262 86 M220 78 H234 M262 86 L258 74 H270" /></g>}
      <Say y={204}>{["Keeps improving for up to two years", "10 minutes, six to eight times a day", "Lean into the knee on a low step", "Sore for hours? Scale back, don't stop", "Cycling builds strength and movement"][at]}</Say>
    </svg>} />;
}

function KneeWalkRuler(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const wk = (week: number) => 40 + week * 40;
  const lit = (index: number) => at === 0 ? index === 0 : at === 1 ? index === 1 || index === 3 : index === 2;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Getting about" title="From frame to free walking" label="Walking and stairs" credit="Illustration: Rehyn. Your physiotherapist will guide you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Weeks from crutches to a stick to walking without an aid, the stairs, and help at home">
      {at <= 2 && <g>
        <g opacity={lit(0) ? 1 : 0.35}><Crutch x={30} y={46} h={66} /><Crutch x={50} y={46} h={66} /></g>
        <g opacity={lit(1) ? 1 : 0.35}><Stick x={114} y={46} h={66} /></g>
        <g opacity={lit(2) ? 1 : 0.35}><path d="M146 104 V86 H160 C162 96, 170 98, 178 100 C182 101, 182 112, 176 112 H146 Z" fill={INK} /></g>
        <g opacity={lit(3) ? 1 : 0.35}><Steps x={266} y={86} n={2} /></g>
        <path d={`M${wk(0)} 130 H${wk(6)}`} stroke={LINE} strokeWidth="6" strokeLinecap="round" />
        {[0, 2, 3, 6].map(week => <g key={week}><circle cx={wk(week)} cy="130" r="6" fill={INK} /><W x={wk(week)} y={152} size={10}>{week === 6 ? "6 weeks" : week}</W></g>)}
      </g>}
      {at === 3 && <g>
        <path d="M30 180 H80 V150 H130 V120 H180 V90 H230 V60 H290 V180 Z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <Box x={96} y={46} w={140} text="Up: good leg first" lit /><Box x={226} y={156} w={150} text="Down: new knee first" lit />
      </g>}
      {at === 4 && <g>
        <rect x="40" y="76" width="10" height="84" rx="3" fill={INK} />
        <rect x="44" y="112" width="170" height="18" rx="6" fill={TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M50 130 V160 M206 130 V160" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <path d="M214 120 H234 V84 H216" stroke={GOLD} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <Box x={160} y={46} w={180} text="Grab rail and leg straps" />
      </g>}
      <Say y={204}>{["Crutches first, while muscles are weak", "Down to one crutch, then a stick", "Outside within 3 weeks, in good shoes", "Good leg up first; new knee down first", "Ask about equipment, like a bed rail"][at]}</Say>
    </svg>} />;
}

function KneeIceRaise(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const mo = (month: number) => 40 + month * 40;
  const band = [2, 0, 3, 0, 0][at];
  return <MemoryBand props={props} state={s} tone="theme" kicker="Pain and swelling" title="Sore, swollen, and settling" label="Pain, swelling and ice" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A leg raised on a footstool above the hip, with ice on the knee, and swelling settling over the months">
      <path d="M22 54 V114 H92 M30 114 V150 M86 114 V150" stroke={SOFT} strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="40" cy="56" r="11" fill={INK} />
      <path d="M40 72 V104 L86 104 L226 84" stroke={INK} strokeWidth="13" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M204 96 H252 M212 96 V140 M244 96 V140" stroke={SOFT} strokeWidth="5" strokeLinecap="round" />
      {at === 2 && <ellipse cx="226" cy="84" rx="16" ry="12" fill="none" stroke={GOLD} strokeWidth="3" className={still ? undefined : "lib-why-pulse"} />}
      {at === 3 && <><rect x="138" y="76" width="34" height="16" rx="4" fill={TINT} stroke={INK} strokeWidth="2" transform="rotate(-8 155 84)" /><path d="M136 94 H176" stroke={SOFT} strokeWidth="3" />
        <circle cx="128" cy="38" r="13" fill={WHITE} stroke={INK} strokeWidth="2.5" /><path d={`M128 38 L128 25 ${arc(128, 38, 13, 0, 120).replace(/^M[^A]+/, "")} Z`} fill={GOLD} />
        <W x={150} y={42} size={10.5} anchor="start">Up to 20 minutes</W></>}
      {at === 1 && <><Pill x={132} y={38} /><W x={158} y={42} size={10.5} anchor="start">Ahead of activities</W></>}
      {at === 4 && <><rect x="64" y="22" width="232" height="34" rx="10" fill={INK} /><W x={180} y={44} size={11.5} fill={WHITE}>Urgent GP or NHS 111</W></>}
      <g opacity={at === 4 || at === 3 ? 0.35 : 1}>
        <path d={`M${mo(0)} 168 H${mo(6)}`} stroke={LINE} strokeWidth="6" strokeLinecap="round" />
        {band > 0 && <rect x={mo(0) - 4} y="162" width={mo(band) - mo(0) + 8} height="12" rx="6" fill={GOLD} />}
        {[0, 2, 3, 6].map(month => <W key={month} x={mo(month)} y={186} size={9.5}>{month === 6 ? "6 months" : month}</W>)}
      </g>
      <Say y={208}>{["Bruising pain is normal for two months", "Take painkillers before pain builds", "Ankle swelling may last up to 3 months", "Ice up to 20 minutes, skin protected", "Worsening? Urgent GP or NHS 111"][at]}</Say>
    </svg>} />;
}

function KneeLegLungs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Warning signs" title="Know the signs: 111 or 999" label="Warning signs" credit="Illustration: Rehyn. In an emergency, call 999."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A leg with the wound and calf marked, and the lungs, with where to get help for each">
      <path d="M48 22 H100 L92 100 C98 118, 96 140, 86 166 L106 176 V186 H62 V166 C52 140, 50 118, 58 100 Z" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M75 84 V114 M70 90 H80 M70 100 H80 M70 110 H80" stroke={at === 2 ? GOLD : SOFT} strokeWidth={at === 2 ? 3.5 : 2.5} strokeLinecap="round" />
      <circle cx="74" cy="138" r="12" fill={GOLD} opacity={at === 1 || at === 3 ? 0.9 : 0} />
      {at === 1 && <Arrow d="M92 134 C140 132, 176 118, 206 96" head="M198 95 L206 96 L204 104" />}
      <g opacity={at === 4 ? 1 : 0.6}>
        <path d="M244 40 C220 40, 206 80, 206 110 C206 122, 222 124, 244 112 Z M268 40 C292 40, 306 80, 306 110 C306 122, 290 124, 268 112 Z" fill={at === 4 ? INK : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M256 22 V56 L244 66 M256 56 L268 66" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {[{ x: 150, y: 170, t: "111", on: at === 3 }, { x: 256, y: 156, t: "999", on: at === 4 }].map(badge => <g key={badge.t}>
        <circle cx={badge.x} cy={badge.y} r="20" fill={badge.on ? INK : WHITE} stroke={INK} strokeWidth="2.5" />
        <W x={badge.x} y={badge.y + 4} size={11.5} fill={badge.on ? WHITE : TEXT}>{badge.t}</W>
      </g>)}
      {at === 0 && <Tick x={150} y={60} s={14} stroke={GOLD} />}
      <Say y={210}>{["Most people have no complications", "Stockings or medicines lower clot risk", "Signs: oozing, pus, redness, warmth", "Urgent GP appointment or NHS 111", "Breathless or chest pain: call 999"][at]}</Say>
    </svg>} />;
}

function KneeHouse(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const rooms = [{ x: 40, y: 62, t: "Bathroom", on: 0 }, { x: 160, y: 62, t: "Bedroom", on: 3 }, { x: 40, y: 120, t: "Kitchen", on: 1 }, { x: 160, y: 120, t: "Living room", on: 2 }];
  const icon = (index: number, cx: number, cy: number) => {
    if (index === 0) return <g fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round"><path d={`M${cx - 24} ${cy - 2} H${cx + 24} V${cy + 4} C${cx + 24} ${cy + 12}, ${cx + 16} ${cy + 14}, ${cx} ${cy + 14} C${cx - 16} ${cy + 14}, ${cx - 24} ${cy + 12}, ${cx - 24} ${cy + 4} Z`} /><path d={`M${cx + 16} ${cy - 2} V${cy - 16} H${cx + 24}`} stroke={GOLD} strokeWidth="3" /></g>;
    if (index === 1) return <g><rect x={cx - 26} y={cy} width="52" height="10" rx="3" fill={TINT} stroke={INK} strokeWidth="2" /><rect x={cx - 24} y={cy - 8} width="14" height="8" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />
      <rect x={cx + 4} y={cy - 6} width="12" height="6" rx="2" fill={WHITE} stroke={INK} strokeWidth="1.5" />{at === 3 && <Cross x={cx + 10} y={cy - 3} s={8} />}</g>;
    if (index === 2) return <g><circle cx={cx - 12} cy={cy + 4} r="10" fill={WHITE} stroke={INK} strokeWidth="2.5" /><circle cx={cx + 10} cy={cy + 4} r="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />{at === 1 && <Tick x={cx + 30} y={cy} s={6} />}</g>;
    return <g><rect x={cx - 20} y={cy + 4} width="40" height="10" rx="5" fill={TINT} stroke={INK} strokeWidth="2" />{at === 2 && <Cross x={cx} y={cy + 6} s={10} />}</g>;
  };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Everyday life" title="Light jobs now, heavy jobs later" label="Everyday life" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A house cut away to show the bathroom, bedroom, kitchen and living room, and what helps in each">
      <path d="M28 62 L160 18 L292 62 Z" fill={at === 4 ? TINT : WHITE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      {at === 4 && <W x={160} y={54} size={10}>Free needs assessment</W>}
      {rooms.map((room, index) => <g key={room.t}>
        <rect x={room.x} y={room.y} width="120" height="58" fill={at === room.on ? TINT : WHITE} stroke={at === room.on ? GOLD : INK} strokeWidth={at === room.on ? 3.5 : 2.5} />
        {icon(index, room.x + 60, room.y + 22)}
        <W x={room.x + 60} y={room.y + 51} size={9.5}>{room.t}</W>
      </g>)}
      <Say y={204}>{["A rail and a non-slip mat help bathing", "Dusting yes; vacuuming after 3 months", "No kneeling until your doctor says", "No pillow under the knee at night", "Council equipment is free if needed"][at]}</Say>
    </svg>} />;
}

function KneeDriveWorkBars(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const wk = (week: number) => 120 + week * 15;
  const rows = [{ y: 44, t: "Partial knee", a: 0, b: 3, end: "3" }, { y: 70, t: "Total knee", a: 0, b: 6, end: "6" }, { y: 120, t: "Sitting job", a: 6, b: 8, end: "6 to 8" }, { y: 146, t: "Manual work", a: 10, b: 12, end: "10 to 12" }];
  const lit = (index: number) => at === 0 ? index < 2 : at === 2 ? index >= 2 : false;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Driving and work" title="Back on the road, back at work" label="Driving and work" credit={credit}
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Weeks before driving after a partial or total knee, and before going back to different kinds of work">
      <W x={18} y={24} size={10} anchor="start" fill={at <= 1 ? INK : TEXT}>Driving</W>
      <W x={18} y={102} size={10} anchor="start" fill={at >= 2 ? INK : TEXT}>Work</W>
      {rows.map((row, index) => <g key={row.t}>
        <W x={18} y={row.y + 4} size={10.5} anchor="start">{row.t}</W>
        <rect x={wk(row.a)} y={row.y - 8} width={wk(row.b) - wk(row.a)} height="16" rx="6" fill={lit(index) ? INK : SOFT} opacity={lit(index) ? 1 : 0.6} />
        <W x={index === 3 ? wk(row.a) - 6 : wk(row.b) + 6} y={row.y + 4} size={10} anchor={index === 3 ? "end" : "start"}>{row.end}</W>
      </g>)}
      {at === 1 && <Box x={262} y={44} w={104} text="Insurance?" lit />}
      {(at === 3 || at === 4) && <Box x={214} y={94} w={136} text={at === 3 ? "Plan with employer" : "Access to Work"} lit />}
      <path d={`M${wk(0)} 166 H${wk(12)}`} stroke={LINE} strokeWidth="3" />
      {[0, 3, 6, 9, 12].map(week => <g key={week}><path d={`M${wk(week)} 162 V170`} stroke={INK} strokeWidth="2" /><W x={wk(week)} y={182} size={9.5}>{week}</W></g>)}
      <W x={18} y={182} size={10} anchor="start">Weeks</W>
      <Say y={206}>{["At least 6 weeks; 3 after a partial", "Check your insurance covers you", "Usually back at work in 6 to 12 weeks", "Plan with your employer before surgery", "Access to Work may help with costs"][at]}</Say>
    </svg>} />;
}

function KneeSportTiles(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const tiles = ["Cycling", "Golf", "Tennis", "Skiing", "Rugby"];
  const icon = (index: number, cx: number, cy: number, c: string) => {
    const g = { fill: "none", stroke: c, strokeWidth: 2.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
    if (index === 0) return <g {...g}><circle cx={cx - 12} cy={cy + 6} r="8" /><circle cx={cx + 12} cy={cy + 6} r="8" /><path d={`M${cx - 12} ${cy + 6} L${cx - 4} ${cy - 8} H${cx + 7} L${cx + 12} ${cy + 6} M${cx - 4} ${cy - 8} L${cx + 1} ${cy + 6} L${cx + 7} ${cy - 8}`} /></g>;
    if (index === 1) return <g {...g}><path d={`M${cx - 6} ${cy - 16} L${cx + 6} ${cy + 12} h8`} /><circle cx={cx - 10} cy={cy + 12} r="3" fill={c} /></g>;
    if (index === 2) return <g {...g}><ellipse cx={cx - 3} cy={cy - 6} rx="9" ry="11" transform={`rotate(-30 ${cx - 3} ${cy - 6})`} /><path d={`M${cx + 3} ${cy + 4} L${cx + 12} ${cy + 15}`} strokeWidth="4" /></g>;
    if (index === 3) return <g {...g}><path d={`M${cx - 18} ${cy + 10} L${cx + 14} ${cy - 10} M${cx - 12} ${cy + 15} L${cx + 18} ${cy - 4} M${cx - 6} ${cy - 16} V${cy + 6} M${cx + 4} ${cy - 16} V${cy + 2}`} /></g>;
    return <g {...g}><ellipse cx={cx} cy={cy} rx="15" ry="9" transform={`rotate(-30 ${cx} ${cy})`} /><path d={`M${cx - 5} ${cy + 3} L${cx + 5} ${cy - 3}`} /></g>;
  };
  return <MemoryBand props={props} state={s} tone="theme" kicker="Activity" title="Golf yes, rugby no" label="Sport and activity" credit="Illustration: Rehyn. Ask your doctor or physiotherapist first."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Cycling, golf, tennis and skiing ticked, a contact sport crossed out, and a week of activity">
      {tiles.map((tile, index) => { const x = 18 + index * 58, lit = at === 1 && index === 0; return <g key={tile} opacity={at >= 2 && at !== 4 ? 0.45 : 1}>
        <rect x={x} y="22" width="52" height="72" rx="10" fill={lit ? INK : WHITE} stroke={INK} strokeWidth="2" />
        {icon(index, x + 26, 50, lit ? WHITE : INK)}
        <W x={x + 26} y={86} size={9.5} fill={lit ? WHITE : TEXT}>{tile}</W>
        {(at === 0 || at === 4) && (index < 4 ? at === 0 && <Tick x={x + 26} y={112} s={8} /> : <Cross x={x + 26} y={50} s={20} />)}
      </g>; })}
      {at === 2 && <Row y={146} labels={["Ask first", "Balance rest and exercise"]} lit={index => index === 0} size={10.5} />}
      {at === 3 && <><rect x="40" y="132" width="240" height="20" rx="10" fill={INK} />{Array.from({ length: 6 }, (_, index) => <path key={index} d={`M${74 + index * 34} 132 V152`} stroke={WHITE} strokeWidth="2" />)}<W x={160} y={172} size={10.5}>150 minutes over the week</W></>}
      {at === 4 && <Row y={146} labels={["Running", "Vigorous sport", "Heavy work"]} lit={() => true} />}
      <Say y={204}>{["Sport is good, except contact sports", "Cycling: a very good place to start", "Ask your physio before you begin", "150 moderate minutes a week", "Vigorous sport may mean more surgery"][at]}</Say>
    </svg>} />;
}

function KneeYearsLine(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const yr = (years: number) => 30 + years * 10.4;
  return <MemoryBand props={props} state={s} tone="theme-deep" kicker="Long term" title="Built to last for decades" label="How long it lasts" credit="Illustration: Rehyn. A picture of the idea, not a prediction."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="A timeline of 25 years for a new knee, with the follow-up near the start">
      <rect x={yr(0)} y="96" width={yr(25) - yr(0)} height="14" rx="7" fill={LINE} />
      <rect x={yr(0)} y="96" width={yr(25) - yr(0)} height="14" rx="7" fill={at === 0 ? INK : SOFT} opacity={at === 0 ? 1 : 0.7} />
      <KneeJoint x={290} y={58} scale={0.28} kind="total" />
      {[0, 5, 10, 15, 20, 25].map(years => <g key={years}><path d={`M${yr(years)} 112 V118`} stroke={INK} strokeWidth="2" /><W x={yr(years)} y={132} size={10}>{years === 25 ? "25 years" : years}</W></g>)}
      {at === 1 && <><path d={`M${yr(10)} 96 V64`} stroke={GOLD} strokeWidth="3" /><Box x={130} y={52} w={200} text="Partial: 1 in 10 after 10 years" size={10} lit /></>}
      {at === 2 && <Row y={164} labels={["Weight", "Heavy manual work", "Vigorous sport"]} lit={() => true} />}
      {at === 3 && <><path d={`M${yr(0) + 4} 96 V50`} stroke={INK} strokeWidth="2.5" /><path d={`M${yr(0) + 4} 50 h22 l-6 7 l6 7 h-22 Z`} fill={GOLD} /><W x={yr(0) + 34} y={62} size={10.5} anchor="start">About 6 weeks</W></>}
      {at === 4 && <><path d={`M${yr(0)} 86 V80 H${yr(2)} V86`} stroke={GOLD} strokeWidth="3" fill="none" /><W x={yr(0)} y={70} size={10.5} anchor="start">Improving for up to 2 years</W></>}
      <Say y={204}>{["Most last about 25 years", "Partial knees more often need a repeat", "Wear or loosening can shorten its life", "A follow-up about 6 weeks after", "Physio may help with ongoing problems"][at]}</Say>
    </svg>} />;
}

export function JointPieceView({ piece, ...props }: { piece: JointPiece } & PieceProps) {
  switch (piece) {
    case "hipr-ball-socket": return <HipBallSocket {...props} />;
    case "hipr-scales": return <HipScales {...props} />;
    case "hipr-countdown": return <HipCountdown {...props} />;
    case "hipr-day-stations": return <HipDayStations {...props} />;
    case "hipr-bed-moves": return <HipBedMoves {...props} />;
    case "hipr-frame-stick": return <HipFrameStick {...props} />;
    case "hipr-recline": return <HipRecline {...props} />;
    case "hipr-two-lanes": return <HipTwoLanes {...props} />;
    case "hipr-right-angle": return <HipRightAngle {...props} />;
    case "hipr-car-swing": return <HipCarSwing {...props} />;
    case "hipr-sport-steps": return <HipSportSteps {...props} />;
    case "hipr-years-dial": return <HipYearsDial {...props} />;
    case "kner-new-surfaces": return <KneeNewSurfaces {...props} />;
    case "kner-four-in-five": return <KneeFourInFive {...props} />;
    case "kner-checklist": return <KneeChecklist {...props} />;
    case "kner-day-ruler": return <KneeDayRuler {...props} />;
    case "kner-day-wedges": return <KneeDayWedges {...props} />;
    case "kner-walk-ruler": return <KneeWalkRuler {...props} />;
    case "kner-ice-raise": return <KneeIceRaise {...props} />;
    case "kner-leg-lungs": return <KneeLegLungs {...props} />;
    case "kner-house": return <KneeHouse {...props} />;
    case "kner-drive-work-bars": return <KneeDriveWorkBars {...props} />;
    case "kner-sport-tiles": return <KneeSportTiles {...props} />;
    case "kner-years-line": return <KneeYearsLine {...props} />;
    default: return null;
  }
}
