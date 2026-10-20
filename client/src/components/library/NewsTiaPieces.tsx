import { useState } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { Band, Choices, para, useStill, type PieceProps } from "./NewsPieceParts";

// The TIA (mini-stroke) page's own pieces (content/ischaemic-news.ts, keyed "tia/…"). Each is steered by
// the card's sections: the choices are the section headings, and the words are the section's own checked
// paragraphs. Pictures show ideas, not scans or measurements, and say so.

const TIA_PIECES = ["tia-clear", "tia-tests", "questions", "pill-box", "neck-artery", "heartbeat", "risk-fades", "fast-card"] as const;
type TiaPiece = (typeof TIA_PIECES)[number];
export const isTiaPiece = (piece: NewsPiece): piece is TiaPiece => (TIA_PIECES as readonly string[]).includes(piece);

const sectionChoices = (props: PieceProps, count: number) => props.article.sections.slice(0, count).map((section, index) => ({ id: String(index), label: section.heading }));
const allParas = (props: PieceProps, at: number) => props.article.sections[at]?.paragraphs.join(" ") ?? "";

function useSection(props: PieceProps, count: number, start = "0") {
  const [which, setWhich] = useState(start);
  return { which, setWhich, at: Number(which), choices: sectionChoices(props, count) };
}

// ---- What a TIA is: the blockage that clears ------------------------------------------------------------

function ClearHero(props: PieceProps) {
  const { which, setWhich, at, choices } = useSection(props, 3);
  const still = useStill();
  const artery = "M10 90 C 70 70, 130 110, 190 88 S 280 70, 310 80";
  return <Band tone="dawn" kicker="It came, and it went" title="A blockage that cleared" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 200" role="img" aria-label="An artery: a clot blocks it for a short time, then dissolves and the blood flows again">
      <g transform="translate(36 36)"><circle r="22" fill="#FFFEFA" /><path d="M0 0 V-13 M0 0 L9 6" stroke="#3B2A18" strokeWidth="3" strokeLinecap="round" className={still ? undefined : "lib-tia-hand"} /></g>
      <text x="70" y="42" fontFamily="DM Sans, sans-serif" fontSize="14" fontWeight="700" fill="#FBEBD3">{at === 2 ? "Gone within 24 hours" : "Symptoms: minutes to hours"}</text>
      <path d={artery} fill="none" stroke="#C7553E" strokeWidth="16" strokeLinecap="round" />
      <path d={artery} fill="none" stroke="#FFB7A3" strokeWidth="4" strokeDasharray="6 12" className={still ? undefined : "lib-types-flow lib-types-tia-flow"} />
      <circle cx="160" cy="97" r="11" fill="#5C1F1F" className={still ? undefined : "lib-types-tia-clot"} opacity={still ? 0.4 : undefined} />
      {/* A day from the first symptom: the symptoms last a short while, then have gone. */}
      <path d="M20 160 H300" stroke="#6E5440" strokeWidth="10" strokeLinecap="round" />
      <path d="M20 160 H86" stroke={at === 2 ? "#8C6A50" : "#F0A58A"} strokeWidth="10" strokeLinecap="round" />
      {at === 2 && <path d="M96 160 H300" stroke="#F0A58A" strokeWidth="10" strokeLinecap="round" opacity=".7" />}
      <g fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="700" fill="#FBEBD3">
        <text x="20" y="186">Symptoms start</text>
        <text x="300" y="186" textAnchor="end">24 hours</text>
      </g>
    </svg>}>
    <Choices items={choices} active={which} onPick={setWhich} label="What happened" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{allParas(props, at)}</p>
  </Band>;
}

// ---- The tests: where each one looks ---------------------------------------------------------------------

function TestsHero(props: PieceProps) {
  const { which, setWhich, at, choices } = useSection(props, 4);
  const spots = [{ x: 150, y: 52 }, { x: 150, y: 112 }, { x: 96, y: 170 }, { x: 166, y: 160 }];
  return <Band tone="sea" kicker="Looking for a cause" title="Where each test looks" credit="Illustration: Rehyn."
    art={<svg viewBox="0 0 300 260" role="img" aria-label={`A body outline. ${choices[at]?.label ?? ""}`}>
      <circle cx="150" cy="52" r="34" fill="#DDF0F4" />
      <path d="M134 86 h32 v24 h-32 z" fill="#DDF0F4" />
      <path d="M70 250 C 70 160, 100 120, 150 120 C 200 120, 230 160, 230 250 Z" fill="#DDF0F4" />
      <path d="M86 150 L60 230" stroke="#DDF0F4" strokeWidth="22" strokeLinecap="round" />
      <path d="M160 152 c -10 -14, -32 -6, -24 12 c 6 12, 24 22, 24 22 c 0 0, 18 -10, 24 -22 c 8 -18, -14 -26, -24 -12 z" fill="#F2A488" opacity=".9" />
      {spots.map((spot, index) => <circle key={index} cx={spot.x} cy={spot.y} r={index === at ? 18 : 10} fill={index === at ? "#F7E3B5" : "#3F7F90"} stroke="#123E4A" strokeWidth="3" className={index === at ? "lib-why-pulse" : undefined} />)}
    </svg>}>
    <Choices items={choices} active={which} onPick={setWhich} label="Tests" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{allParas(props, at)}</p>
  </Band>;
}

// ---- Why so many questions: the magnifying glass ----------------------------------------------------------

function QuestionsHero(props: PieceProps) {
  const { which, setWhich, at, choices } = useSection(props, 4);
  return <Band tone="violet" kicker="Ruling things out" title="Why so many questions" credit="Illustration: Rehyn."
    art={<svg viewBox="0 0 300 220" role="img" aria-label={`A magnifying glass over a list of questions. ${choices[at]?.label ?? ""}`}>
      <rect x="30" y="24" width="170" height="176" rx="12" fill="#FFFEFA" />
      {[0, 1, 2, 3].map(row => <g key={row}>
        <rect x="48" y={48 + row * 38} width="18" height="18" rx="4" fill={row <= at ? "#B9A9F2" : "#E7E2FF"} />
        {row < at && <path d={`M52 ${57 + row * 38} l4 4 l8 -8`} stroke="#2A1F5C" strokeWidth="3" fill="none" />}
        <rect x="76" y={52 + row * 38} width={100 - row * 12} height="10" rx="5" fill="#C9C2EE" />
      </g>)}
      <g transform={`translate(196 ${70 + at * 34})`} className="lib-road-walker"><circle r="30" fill="#E7E2FF" fillOpacity=".35" stroke="#B9A9F2" strokeWidth="7" /><path d="M22 22 L50 50" stroke="#B9A9F2" strokeWidth="10" strokeLinecap="round" /></g>
    </svg>}>
    <Choices items={choices} active={which} onPick={setWhich} label="Questions" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{allParas(props, at)}</p>
  </Band>;
}

// ---- The tablets: a pill box ----------------------------------------------------------------------------------

function PillBox(props: PieceProps) {
  const { which, setWhich, at, choices } = useSection(props, 4);
  const colours = ["#F2A488", "#8FE3C6", "#8FC7E6", "#F2C94C"];
  return <Band tone="forest" kicker="Every day, long term" title="What is in the box" credit="Illustration: Rehyn. Your own medicines may be different; ask your team."
    art={<svg viewBox="0 0 320 200" role="img" aria-label={`A pill box with four compartments. ${choices[at]?.label ?? ""}`}>
      <rect x="20" y="40" width="280" height="130" rx="18" fill="#24503F" />
      {colours.map((colour, index) => {
        const open = index === at;
        return <g key={index} transform={`translate(${34 + index * 66} 56)`}>
          <rect width="56" height="98" rx="10" fill={open ? "#FFFEFA" : "#2F6851"} />
          <ellipse cx="28" cy="58" rx="14" ry="9" fill={colour} opacity={open ? 1 : 0.5} className={open ? "lib-bulge" : undefined} />
          {open && <rect x="0" y="-26" width="56" height="22" rx="8" fill="#8FE3C6" />}
        </g>;
      })}
    </svg>}>
    <Choices items={choices} active={which} onPick={setWhich} label="Medicines" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{allParas(props, at)}</p>
  </Band>;
}

// ---- The neck artery: narrowed, and cleared --------------------------------------------------------------------

function NeckArtery(props: PieceProps) {
  const { which, setWhich, at, choices } = useSection(props, 3);
  const still = useStill();
  const cleared = at === 0;
  return <Band tone="rose" kicker="The carotid artery" title="Clearing the neck artery" credit="Illustration: Rehyn. Not to scale."
    art={<svg viewBox="0 0 320 230" role="img" aria-label={cleared ? "A head and neck, with the carotid artery running up the neck. Close up, the fatty deposits are removed and blood flows freely" : "A head and neck, with the carotid artery running up the neck. Close up, the artery is narrowed by fatty deposits"}>
      <defs><clipPath id="lib-neck-zoom"><circle cx="235" cy="112" r="72" /></clipPath></defs>
      {/* The head and neck, facing right, with the carotid artery and where it divides. */}
      <path d="M52 230 V156 C52 136 58 116 62 104 C40 92 36 62 48 40 C62 14 114 10 132 38 C142 56 140 80 130 92 L138 108 L128 112 L130 124 C128 132 120 136 112 138 V230 Z" fill="#6B2D3A" />
      <path d="M86 230 C86 196 90 166 94 146 M94 146 C98 124 94 100 98 72 M94 146 C104 132 112 122 116 106" fill="none" stroke="#C7553E" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="94" cy="146" rx="6" ry="9" fill="#F7E3B5" opacity={cleared ? 0.2 : 1} />
      <circle cx="94" cy="146" r="16" fill="none" stroke="#FBE3E8" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M110 140 L164 122" stroke="#FBE3E8" strokeWidth="2" strokeDasharray="4 4" />
      {/* Close up: the narrowing, and the artery once the deposits are removed. */}
      <circle cx="235" cy="112" r="72" fill="#2E1219" />
      <g clipPath="url(#lib-neck-zoom)">
        <path d="M150 112 H320" stroke="#C7553E" strokeWidth="46" />
        <path d="M150 112 H320" stroke="#FFB7A3" strokeWidth="4" strokeDasharray="8 12" className={still ? undefined : "lib-types-flow"} />
        <path d="M200 89 C 218 104, 252 104, 270 89 Z M200 135 C 218 120, 252 120, 270 135 Z" fill="#F7E3B5" opacity={cleared ? 0.15 : 1} className={cleared && !still ? "lib-drain-shrink" : undefined} />
      </g>
      <circle cx="235" cy="112" r="72" fill="none" stroke="#FBE3E8" strokeWidth="3" />
      <text x="235" y="28" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#FBE3E8">{at === 1 ? "Narrowed by more than 50%" : cleared ? "Deposits removed" : "Close up"}</text>
      {at === 2 && <g transform="translate(205 208)"><circle r="16" fill="#FFFEFA" /><path d="M0 0 V-10 M0 0 L7 4" stroke="#4A1F2A" strokeWidth="3" strokeLinecap="round" /><text x="24" y="5" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#FBE3E8">1 to 2 hours</text></g>}
    </svg>}>
    <Choices items={choices} active={which} onPick={setWhich} label="The operation" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{allParas(props, at)}</p>
  </Band>;
}

// ---- Atrial fibrillation: the heartbeat that comes and goes ------------------------------------------------------

function Heartbeat(props: PieceProps) {
  const { which, setWhich, at, choices } = useSection(props, 4, "1");
  const still = useStill();
  const regular = "M0 60 H40 l8 -30 l8 60 l8 -30 H120 l8 -30 l8 60 l8 -30 H200 l8 -30 l8 60 l8 -30 H300";
  const irregular = "M0 60 H30 l6 -26 l8 50 l6 -24 H70 l5 -20 l7 44 l5 -24 H150 l8 -34 l6 64 l8 -30 H190 l4 -16 l6 36 l4 -20 H270 l8 -28 l8 54 l8 -26 H300";
  return <Band tone="night" kicker="Your heart" title="A rhythm that comes and goes" credit="Illustration: Rehyn. Not a real heart tracing."
    art={<svg viewBox="0 0 320 200" role="img" aria-label="Two heart tracings: a regular rhythm, and an irregular one">
      <g transform="translate(10 10)"><path d={regular} fill="none" stroke="#8FE3C6" strokeWidth="3" opacity={at === 1 ? 0.4 : 0.9} /></g>
      <g transform="translate(10 100)"><path d={irregular} fill="none" stroke="#F2A488" strokeWidth="3" className={still ? undefined : "lib-ecg"} /></g>
      <text x="14" y="26" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="700" fill="#8FE3C6">Regular</text>
      <text x="14" y="116" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="700" fill="#F2A488">Irregular</text>
      {at === 2 && <g transform="translate(270 40)"><rect x="-18" y="-24" width="36" height="48" rx="10" fill="#FFFEFA" /><text y="5" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="700" fill="#1B2230">24h</text></g>}
    </svg>}>
    <Choices items={choices} active={which} onPick={setWhich} label="Heart checks" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{allParas(props, at)}</p>
  </Band>;
}

// ---- The worry that follows: the risk fading ---------------------------------------------------------------------

function RiskFades(props: PieceProps) {
  const { which, setWhich, at, choices } = useSection(props, 4);
  return <Band tone="storm" kicker="Over time" title="The worry, and the risk going down" credit="Illustration: Rehyn. A picture of the idea, not a measure of anyone's risk."
    art={<svg viewBox="0 0 320 200" role="img" aria-label="A line that falls over time, with the sun coming up">
      <circle cx="270" cy={150 - at * 30} r="26" fill="#F2C94C" className="lib-road-walker" />
      <path d="M20 40 C 80 50, 120 120, 200 150 S 280 168, 300 170" fill="none" stroke="#E6E9F0" strokeWidth="5" strokeLinecap="round" />
      <path d="M20 180 H300" stroke="#5A6378" strokeWidth="2" />
      <text x="24" y="30" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="700" fill="#E6E9F0">Risk</text>
      <text x="296" y="196" textAnchor="end" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="700" fill="#E6E9F0">Time</text>
    </svg>}>
    <Choices items={choices} active={which} onPick={setWhich} label="Living with the worry" />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{allParas(props, at)}</p>
  </Band>;
}

// ---- FAST: four letters --------------------------------------------------------------------------------------------

function FastCard(props: PieceProps) {
  const [which, setWhich] = useState("0");
  const at = Number(which);
  const letters = props.article.sections.slice(0, 4).map(section => section.heading);
  return <section className="lib-piece-band is-alarm" aria-label="FAST">
    <div className="lib-piece-inner is-stack">
      <div className="lib-piece-panel is-wide">
        <div className="lib-why-kicker">Do not wait to see if it passes</div>
        <h2 className="lib-why-title">Four letters to know by heart</h2>
      </div>
      <div className="lib-fast" role="group" aria-label="FAST">
        {letters.map((word, index) => <button key={word} type="button" className="lib-fast-letter" aria-pressed={at === index} onClick={() => setWhich(String(index))}>
          <span className="lib-fast-big" aria-hidden="true">{word.charAt(0)}</span><span>{word}</span>
        </button>)}
      </div>
      <p className="lib-why-say lib-piece-say" aria-live="polite">{allParas(props, at)}</p>
    </div>
    <p className="lib-why-credit">From the NHS's FAST signs. Call 999.</p>
  </section>;
}

export function TiaPieceView({ piece, ...props }: { piece: TiaPiece } & PieceProps) {
  switch (piece) {
    case "tia-clear": return <ClearHero {...props} />;
    case "tia-tests": return <TestsHero {...props} />;
    case "questions": return <QuestionsHero {...props} />;
    case "pill-box": return <PillBox {...props} />;
    case "neck-artery": return <NeckArtery {...props} />;
    case "heartbeat": return <Heartbeat {...props} />;
    case "risk-fades": return <RiskFades {...props} />;
    case "fast-card": return <FastCard {...props} />;
  }
}
