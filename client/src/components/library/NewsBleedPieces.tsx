import { useState } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { Band, Choices, para, useStill, type PieceProps } from "./NewsPieceParts";

// Haemorrhagic stroke's own pieces (content/ischaemic-news.ts, keyed "haemorrhagic/…"). Each picture
// is steered by the card's sections: the choices are the section headings, and the words shown are
// the section's own checked first paragraph. Pictures show ideas, not scans, and say so.

const BLEED_PIECES = ["pressure", "leaks", "two-kinds", "repair", "headache-sort", "bp-gauge", "weighing", "dvla"] as const;
type BleedPiece = (typeof BLEED_PIECES)[number];
export const isBleedPiece = (piece: NewsPiece): piece is BleedPiece => (BLEED_PIECES as readonly string[]).includes(piece);

/** The first `count` sections as choices: "0", "1", … with their headings. */
const sectionChoices = (props: PieceProps, count: number) => props.article.sections.slice(0, count).map((section, index) => ({ id: String(index), label: section.heading }));

const Skull = ({ children }: { children: React.ReactNode }) => <svg viewBox="0 0 300 260" role="img" aria-hidden="true" focusable="false">
  <ellipse cx="150" cy="130" rx="128" ry="112" fill="#3A1E24" stroke="#E7D3CC" strokeWidth="6" />
  <path d="M60 128 C 52 80, 96 44, 150 44 C 206 44, 248 80, 240 128 C 248 176, 204 210, 150 208 C 96 210, 52 176, 60 128 Z" fill="#F3D9CF" />
  <path d="M150 48 V206 M90 100 C 110 92, 130 108, 146 98 M156 98 C 176 108, 196 92, 214 104 M86 160 C 106 152, 126 168, 144 158 M158 160 C 178 168, 196 152, 214 162" fill="none" stroke="#E2B9AA" strokeWidth="3" strokeLinecap="round" />
  {children}
</svg>;

// ---- What a bleed does inside the skull --------------------------------------------------------------

function PressureHero(props: PieceProps) {
  const [step, setStep] = useState("0");
  const at = Number(step);
  const still = useStill();
  return <Band tone="rose" kicker="Inside a closed box" title="A bleed, and the pressure it makes" credit="Illustration: Rehyn. The skull cannot stretch, so a bleed takes up room the brain needs. Not a scan."
    art={<div role="img" aria-label={`A cross-section of the skull. Step ${at + 1}: ${props.article.sections[at]?.heading ?? ""}`}><Skull>
      <ellipse cx="190" cy="120" rx={18 + at * 14} ry={14 + at * 10} fill="#9E2A2A" opacity=".9" className={still ? undefined : "lib-bleed-grow"} />
      {at >= 1 && <g stroke="#FFD3BF" strokeWidth="4" strokeLinecap="round" className={still ? undefined : "lib-bleed-push"}>
        <path d="M150 120 h-30 M130 112 l-10 8 l10 8" fill="none" /><path d="M190 80 v-22 M182 66 l8 -10 l8 10" fill="none" /><path d="M190 160 v22 M182 174 l8 10 l8 -10" fill="none" />
      </g>}
      {at >= 2 && <g><circle cx="262" cy="34" r="20" fill="#FFFEFA" /><path d="M262 34 l0 -12 M262 34 l9 5" stroke="#3A1E24" strokeWidth="3" strokeLinecap="round" /></g>}
    </Skull></div>}>
    <Choices items={sectionChoices(props, 3)} active={step} onPick={setStep} label="What happens, step by step" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{para(props.article, at)}</p>
  </Band>;
}

// ---- Why it happened: the vessel under strain -----------------------------------------------------------

function LeaksHero(props: PieceProps) {
  const choices = sectionChoices(props, 4);
  const [cause, setCause] = useState("0");
  const at = Number(cause);
  const vessel = "M20 130 C 90 110, 150 150, 220 126 S 300 110, 320 120";
  return <Band tone="plum" kicker="Weak spots" title="Why a blood vessel gives way" credit="Illustration: Rehyn. Simplified pictures of each cause, not to scale."
    art={<svg viewBox="0 0 340 240" role="img" aria-label={`A blood vessel: ${choices[at]?.label ?? ""}`}>
      <path d={vessel} fill="none" stroke="#C7553E" strokeWidth={at === 0 ? 30 : 22} strokeLinecap="round" />
      <path d={vessel} fill="none" stroke="#FFB7A3" strokeWidth="4" strokeDasharray="6 12" className="lib-types-flow" />
      {at === 0 && <g transform="translate(160 40)"><circle r="30" fill="#FFFEFA" /><path d="M-20 8 A22 22 0 0 1 20 8" fill="none" stroke="#2A1838" strokeWidth="4" /><path d="M0 8 L14 -10" stroke="#9E2A2A" strokeWidth="4" strokeLinecap="round" className="lib-gauge-needle" /></g>}
      {at === 1 && <circle cx="206" cy="104" r="26" fill="#C7553E" stroke="#FFD3BF" strokeWidth="3" className="lib-bulge" />}
      {at === 2 && <path d="M130 136 C 140 100, 180 160, 170 120 S 210 150, 200 116 S 240 140, 236 120" fill="none" stroke="#7A3F55" strokeWidth="8" strokeLinecap="round" />}
      {at === 3 && <g transform="translate(150 186)"><rect x="-36" y="-12" width="72" height="24" rx="12" fill="#FFFEFA" /><path d="M0 -12 V12" stroke="#2A1838" strokeWidth="3" /><rect x="0" y="-12" width="36" height="24" rx="12" fill="#B9A9F2" opacity=".8" /></g>}
    </svg>}>
    <Choices items={choices} active={cause} onPick={setCause} label="Causes" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{para(props.article, at)}</p>
  </Band>;
}

// ---- The two kinds of bleed ----------------------------------------------------------------------------

function TwoKindsHero(props: PieceProps) {
  const [kind, setKind] = useState("0");
  const inside = kind === "0";
  return <Band tone="storm" kicker="Where the blood collects" title="Inside the brain, or around it" credit="Illustration: Rehyn. Not a scan."
    art={<div role="img" aria-label={inside ? "A bleed inside the brain tissue" : "A bleed on the surface of the brain, in the space around it"}><Skull>
      {inside
        ? <ellipse cx="176" cy="132" rx="34" ry="26" fill="#9E2A2A" className="lib-bleed-grow" />
        : <path d="M70 110 C 66 76, 104 50, 150 50 C 196 50, 234 76, 230 110" fill="none" stroke="#9E2A2A" strokeWidth="12" strokeLinecap="round" opacity=".9" className="lib-bleed-grow" />}
    </Skull></div>}>
    <Choices items={sectionChoices(props, 2)} active={kind} onPick={setKind} label="The two kinds" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{para(props.article, Number(kind))}</p>
  </Band>;
}

// ---- The operations and procedures -----------------------------------------------------------------------

function RepairHero(props: PieceProps) {
  const choices = sectionChoices(props, 4);
  const [which, setWhich] = useState("0");
  const at = Number(which);
  const still = useStill();
  return <Band tone="night" kicker="What each one was for" title="The repair kit" credit="Illustration: Rehyn. Simplified pictures of each procedure, not to scale."
    art={<svg viewBox="0 0 320 240" role="img" aria-label={choices[at]?.label ?? ""}>
      <path d="M10 170 C 80 160, 120 150, 160 130 S 260 90, 310 80" fill="none" stroke="#C7553E" strokeWidth="22" strokeLinecap="round" />
      {(at === 0 || at === 1) && <circle cx="178" cy="98" r="30" fill="#C7553E" stroke="#FFD3BF" strokeWidth="3" />}
      {at === 0 && <>
        <path d="M10 170 C 80 160, 120 150, 160 130" fill="none" stroke="#E4E9F2" strokeWidth="4" strokeDasharray={still ? undefined : "8 6"} className={still ? undefined : "lib-types-flow"} />
        <path d="M168 92 c 8 -8, 18 -2, 14 6 s -16 6, -12 -4 s 16 -6, 18 4 s -10 14, -16 6" fill="none" stroke="#F2C94C" strokeWidth="3" className={still ? undefined : "lib-coil"} />
      </>}
      {at === 1 && <g transform="translate(160 118) rotate(-35)"><rect x="-6" y="-26" width="12" height="40" rx="5" fill="#E4E9F2" /><rect x="10" y="-26" width="12" height="40" rx="5" fill="#E4E9F2" /></g>}
      {at === 2 && <g><ellipse cx="200" cy="80" rx="34" ry="20" fill="#9E2A2A" opacity={still ? 0.4 : undefined} className={still ? undefined : "lib-drain-shrink"} /><path d="M240 30 L210 70" stroke="#E4E9F2" strokeWidth="6" strokeLinecap="round" /></g>}
      {at === 3 && <g><path d="M150 40 C 150 90, 170 130, 230 160 S 300 200, 310 230" fill="none" stroke="#E4E9F2" strokeWidth="6" strokeLinecap="round" /><path d="M150 40 C 150 90, 170 130, 230 160 S 300 200, 310 230" fill="none" stroke="#8FC7E6" strokeWidth="3" strokeDasharray="4 10" className={still ? undefined : "lib-types-flow"} /></g>}
    </svg>}>
    <Choices items={choices} active={which} onPick={setWhich} label="Procedures" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{para(props.article, at)}</p>
  </Band>;
}

// ---- Headaches: usual, and urgent ------------------------------------------------------------------------

function HeadacheSort(props: PieceProps) {
  const [side, setSide] = useState("0");
  const urgent = side === "1";
  return <Band tone={urgent ? "alarm" : "sea"} kicker="Usual, or urgent" title="Two kinds of headache to know" credit="Illustration: Rehyn. If you are worried, ask your team; in an emergency, call 999."
    art={<svg viewBox="0 0 300 220" role="img" aria-label={urgent ? "A warning sign: a sudden, severe headache is an emergency" : "A head with a mild ache: headaches are common after a bleed"}>
      <circle cx="150" cy="110" r="70" fill="#FFFEFA" opacity=".95" />
      <path d="M120 100 h12 M168 100 h12 M128 140 q22 12 44 0" stroke="#141413" strokeWidth="5" strokeLinecap="round" fill="none" />
      {urgent
        ? <g className="lib-alarm"><path d="M150 4 L196 84 H104 Z" fill="#F2C94C" stroke="#141413" strokeWidth="4" strokeLinejoin="round" /><path d="M150 32 V58 M150 68 v2" stroke="#141413" strokeWidth="6" strokeLinecap="round" /></g>
        : <path d="M200 50 q12 -10 24 0 M212 34 q10 -8 20 0" stroke="#FFFEFA" strokeWidth="4" fill="none" strokeLinecap="round" />}
    </svg>}>
    <Choices items={sectionChoices(props, 2)} active={side} onPick={setSide} label="Two kinds of headache" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{para(props.article, Number(side))}</p>
  </Band>;
}

// ---- Blood pressure: the gauge ---------------------------------------------------------------------------------

function BpGauge(props: PieceProps) {
  const choices = sectionChoices(props, 3);
  const [which, setWhich] = useState("0");
  const at = Number(which);
  const angle = [-50, 10, -20][at] ?? 0;
  return <Band tone="forest" kicker="The number that matters most" title="Keeping the pressure down" credit="Illustration: Rehyn. The gauge shows the idea, not a reading."
    art={<svg viewBox="0 0 300 200" role="img" aria-label="A pressure gauge, lower on the left and higher on the right">
      <path d="M40 170 A110 110 0 0 1 260 170" fill="none" stroke="#24503F" strokeWidth="26" />
      <path d="M40 170 A110 110 0 0 1 150 60" fill="none" stroke="#8FE3C6" strokeWidth="26" />
      <path d="M150 60 A110 110 0 0 1 260 170" fill="none" stroke="#F2A488" strokeWidth="26" opacity=".85" />
      <text x="44" y="196" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#DDF3E8">Lower</text>
      <text x="256" y="196" textAnchor="end" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#DDF3E8">Higher</text>
      <g className="lib-gauge" style={{ transform: `rotate(${angle}deg)`, transformOrigin: "150px 170px" }}>
        <path d="M150 170 L150 78" stroke="#FFFEFA" strokeWidth="6" strokeLinecap="round" />
      </g>
      <circle cx="150" cy="170" r="12" fill="#FFFEFA" />
    </svg>}>
    <Choices items={choices} active={which} onPick={setWhich} label="Blood pressure" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{para(props.article, at)}</p>
  </Band>;
}

// ---- Blood thinners after a bleed: weighing it up -----------------------------------------------------------

function Weighing(props: PieceProps) {
  const choices = sectionChoices(props, 3);
  const [which, setWhich] = useState("2");
  const at = Number(which);
  const tilt = at === 0 ? -12 : at === 1 ? 12 : 0;
  return <Band tone="honey" kicker="A careful conversation" title="Weighing two risks" credit="Illustration: Rehyn. Your own team weighs these up for you; the scales show the idea."
    art={<svg viewBox="0 0 300 220" role="img" aria-label={`Scales weighing the risk of a clot against the risk of a bleed. ${choices[at]?.label ?? ""}`}>
      <path d="M150 50 V196 M110 200 H190" stroke="#FFF3D6" strokeWidth="8" strokeLinecap="round" />
      <g className="lib-scale" style={{ transform: `rotate(${tilt}deg)`, transformOrigin: "150px 54px" }}>
        <path d="M50 54 H250" stroke="#FFF3D6" strokeWidth="7" strokeLinecap="round" />
        <path d="M50 54 L30 110 H70 Z M250 54 L230 110 H270 Z" fill="none" stroke="#FFF3D6" strokeWidth="3" />
        <path d="M24 110 A26 14 0 0 0 76 110 Z" fill="#8FC7E6" />
        <circle cx="50" cy="100" r="9" fill="#5C1F1F" />
        <path d="M224 110 A26 14 0 0 0 276 110 Z" fill="#F2A488" />
        <path d="M250 92 q-8 10 0 14 q8 -4 0 -14" fill="#9E2A2A" />
        <text x="50" y="140" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#FFF3D6">A clot</text>
        <text x="250" y="140" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#FFF3D6">A bleed</text>
      </g>
      <circle cx="150" cy="54" r="10" fill="#F2C94C" />
    </svg>}>
    <Choices items={choices} active={which} onPick={setWhich} label="Blood thinners" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{para(props.article, at)}</p>
  </Band>;
}

// ---- Driving after a bleed: three situations, three rules ---------------------------------------------------

function DvlaHero(props: PieceProps) {
  const choices = sectionChoices(props, 3);
  const [which, setWhich] = useState("0");
  const at = Number(which);
  return <Band tone="night" kicker="Which rules are yours" title="Driving after a bleed" credit="Illustration: Rehyn. The rules are GOV.UK's; check the page for your kind of bleed."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={`A road, and a letter to DVLA. ${choices[at]?.label ?? ""}`}>
      <path d="M0 180 H320 V220 H0 Z" fill="#2E3440" />
      <path d="M0 200 H320" stroke="#F7E3B5" strokeWidth="4" strokeDasharray="22 18" />
      <g transform="translate(40 60)">
        <rect width="120" height="80" rx="8" fill="#FFFEFA" />
        <path d="M0 8 L60 48 L120 8" fill="none" stroke="#1B2230" strokeWidth="4" />
        <text x="60" y="72" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="14" fontWeight="700" fill="#1B2230">DVLA</text>
      </g>
      {at === 2
        ? <g transform="translate(190 128)"><rect width="110" height="48" rx="8" fill="#F2A488" /><circle cx="24" cy="52" r="10" fill="#141413" /><circle cx="88" cy="52" r="10" fill="#141413" /></g>
        : <g transform="translate(200 146)"><rect x="0" y="10" width="86" height="26" rx="10" fill="#8FC7E6" /><path d="M16 10 l12 -16 h32 l12 16 z" fill="#8FC7E6" /><circle cx="20" cy="38" r="9" fill="#141413" /><circle cx="68" cy="38" r="9" fill="#141413" /></g>}
      {at === 1 && <g transform="translate(250 50)"><circle r="22" fill="#8FE3C6" /><path d="M-10 0 l7 7 l13 -14" stroke="#1B2230" strokeWidth="4" fill="none" strokeLinecap="round" /></g>}
    </svg>}>
    <Choices items={choices} active={which} onPick={setWhich} label="Your situation" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{para(props.article, at)}</p>
  </Band>;
}

export function BleedPieceView({ piece, ...props }: { piece: BleedPiece } & PieceProps) {
  switch (piece) {
    case "pressure": return <PressureHero {...props} />;
    case "leaks": return <LeaksHero {...props} />;
    case "two-kinds": return <TwoKindsHero {...props} />;
    case "repair": return <RepairHero {...props} />;
    case "headache-sort": return <HeadacheSort {...props} />;
    case "bp-gauge": return <BpGauge {...props} />;
    case "weighing": return <Weighing {...props} />;
    case "dvla": return <DvlaHero {...props} />;
  }
}
