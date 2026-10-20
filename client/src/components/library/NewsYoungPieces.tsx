import { useState } from "react";
import type { NewsPiece } from "@/content/ischaemic-news";
import { Band, Choices, useStill, type PieceProps } from "./NewsPieceParts";

// The Stroke under 50 page's own pieces (content/ischaemic-news.ts, keyed "under-50/…"). Each is steered
// by the card's sections: the choices are the section headings, and the words are the section's own
// checked paragraphs. Pictures show ideas, not scans, measurements or plans, and say so.

const YOUNG_PIECES = ["young-causes", "bubble-test", "myth-fact", "growth-rings", "iceberg", "steady-build", "work-weeks", "money-jars", "kids-talk", "two-chairs"] as const;
type YoungPiece = (typeof YOUNG_PIECES)[number];
export const isYoungPiece = (piece: NewsPiece): piece is YoungPiece => (YOUNG_PIECES as readonly string[]).includes(piece);

const allParas = (props: PieceProps, at: number) => props.article.sections[at]?.paragraphs.join(" ") ?? "";

function useSection(props: PieceProps, count: number) {
  const [which, setWhich] = useState("0");
  const choices = props.article.sections.slice(0, count).map((section, index) => ({ id: String(index), label: section.heading }));
  return { which, setWhich, at: Number(which), choices };
}

const SANS = "DM Sans, sans-serif";
const SERIF = "Newsreader, Georgia, serif";

/** The choices and the chosen section's words, under every picture. */
function Steer({ props, which, setWhich, choices, label }: { props: PieceProps; which: string; setWhich: (id: string) => void; choices: { id: string; label: string }[]; label: string }) {
  return <>
    <Choices items={choices} active={which} onPick={setWhich} label={label} />
    <p className="lib-why-say lib-piece-say" aria-live="polite">{allParas(props, Number(which))}</p>
  </>;
}

// ---- Why younger people: where the causes are ---------------------------------------------------------

function YoungCauses(props: PieceProps) {
  const s = useSection(props, 6);
  const { at } = s;
  const spots = [null, { x: 112, y: 96 }, { x: 124, y: 150 }, { x: 58, y: 178 }, { x: 104, y: 196 }, null];
  const spot = spots[at];
  return <Band tone="plum" kicker="Different reasons" title="Where a younger stroke can start" credit="Illustration: Rehyn. A picture of the idea, not to scale."
    art={<svg viewBox="0 0 320 250" role="img" aria-label={`A person, with ${s.choices[at]?.label ?? ""} marked`}>
      <circle cx="112" cy="52" r="30" fill="#EEDFFA" />
      <path d="M100 80 h24 v20 h-24 z" fill="#EEDFFA" />
      <path d="M50 240 C 50 150, 70 108, 112 108 C 154 108, 174 150, 174 240 Z" fill="#EEDFFA" />
      <path d="M62 140 C 52 170, 50 190, 56 214" stroke="#EEDFFA" strokeWidth="18" strokeLinecap="round" fill="none" />
      {/* The neck artery, the heart, a vein in the arm. */}
      <path d="M114 78 V 112" stroke={at === 1 ? "#F2A488" : "#B88FC9"} strokeWidth="5" strokeLinecap="round" />
      {at === 1 && <path d="M108 90 l6 4 l-6 4 l6 4" stroke="#2A1838" strokeWidth="2.5" fill="none" />}
      <path d="M124 162 c -8 -12, -26 -6, -20 10 c 4 10, 20 18, 20 18 c 0 0, 16 -8, 20 -18 c 6 -16, -12 -22, -20 -10 z" fill={at === 2 || at === 4 ? "#F2A488" : "#D7B7E6"} />
      {at === 2 && <circle cx="124" cy="170" r="4" fill="#2A1838" />}
      <path d="M58 150 C 54 170, 54 186, 58 204" stroke={at === 3 ? "#F2A488" : "#B88FC9"} strokeWidth="4" strokeLinecap="round" fill="none" />
      {at === 3 && <g fill="#2A1838"><circle cx="57" cy="172" r="3" /><circle cx="56" cy="184" r="4" /></g>}
      {spot && <circle cx={spot.x} cy={spot.y} r="18" fill="none" stroke="#F2C94C" strokeWidth="3" className="lib-why-pulse" />}
      {at === 0 && <g>
        <path d="M200 200 H300" stroke="#6B4A87" strokeWidth="10" strokeLinecap="round" />
        <path d="M200 200 H262" stroke="#F2A488" strokeWidth="10" strokeLinecap="round" />
        <text x="200" y="226" fontFamily={SANS} fontSize="12" fontWeight="700" fill="#EEDFFA">18</text>
        <text x="262" y="226" textAnchor="middle" fontFamily={SANS} fontSize="12" fontWeight="700" fill="#EEDFFA">65</text>
        <text x="200" y="182" fontFamily={SANS} fontSize="13" fontWeight="700" fill="#EEDFFA">Working age</text>
      </g>}
      {at === 5 && <g transform="translate(176 26)"><rect width="64" height="50" rx="14" fill="#F2C94C" /><path d="M14 50 l-6 14 l18 -14" fill="#F2C94C" /><text x="32" y="38" textAnchor="middle" fontFamily={SERIF} fontSize="34" fontWeight="600" fill="#2A1838">?</text></g>}
    </svg>}>
    <Steer props={props} {...s} label="Causes" />
  </Band>;
}

// ---- The extra tests: a bubble test of the heart, and the others ------------------------------------------

function BubbleTest(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const tiles = ["Bubble test", "Blood tests", "Heart monitor", "Neck scan"];
  return <Band tone="ink" kicker="A closer look" title="What each test is looking for" credit="Illustration: Rehyn. Not a real scan."
    art={<svg viewBox="0 0 320 250" role="img" aria-label={`A heart with a small hole between its upper chambers. ${s.choices[at]?.label ?? ""}`}>
      <path d="M160 160 C 90 118, 72 66, 110 44 C 134 30, 154 42, 160 58 C 166 42, 186 30, 210 44 C 248 66, 230 118, 160 160 Z" fill="#E2EAF7" />
      <path d="M160 62 V 84 M160 96 V 128" stroke="#14213D" strokeWidth="4" strokeLinecap="round" />
      {(at === 0 || at === 1) && <circle cx="160" cy="90" r="9" fill="none" stroke="#F2A488" strokeWidth="3" className="lib-why-pulse" />}
      {at === 1 && <g fill="#FFFEFA" stroke="#3C5A8A" strokeWidth="1.5" className={still ? undefined : "lib-bubble-drift"}>
        <circle cx="186" cy="104" r="5" /><circle cx="196" cy="88" r="4" /><circle cx="176" cy="80" r="3.5" /><circle cx="146" cy="88" r="3.5" />
      </g>}
      {at === 3 && <path d="M96 100 H120 l6 -14 l8 26 l6 -12 H224" fill="none" stroke="#F2A488" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={still ? undefined : "lib-ecg"} />}
      {tiles.map((tile, index) => {
        const on = index === at - 1;
        return <g key={tile} transform={`translate(${12 + index * 76} 186)`}>
          <rect width="68" height="52" rx="10" fill={on ? "#F2A488" : "#22325A"} />
          <text x="34" y="31" textAnchor="middle" fontFamily={SANS} fontSize="10.5" fontWeight="700" fill={on ? "#14213D" : "#E2EAF7"}>{tile}</text>
        </g>;
      })}
    </svg>}>
    <Steer props={props} {...s} label="Tests" />
  </Band>;
}

// ---- Too young: the myth, and the fact ---------------------------------------------------------------------

function MythFact(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  return <Band tone="berry" kicker="Myth and fact" title="Too young for a stroke?" credit="Illustration: Rehyn. Survivors' words are from their own accounts on Different Strokes."
    art={<svg viewBox="0 0 320 230" role="img" aria-label={s.choices[at]?.label ?? "Myth and fact"}>
      <rect x="30" y="24" width="260" height="180" rx="18" fill="#F7E1F1" />
      {at === 0 && <g>
        <text x="160" y="72" textAnchor="middle" fontFamily={SANS} fontSize="16" fontWeight="700" fill="#7A3A6E">“Too young for a stroke”</text>
        <path d="M58 66 H262" stroke="#3D1235" strokeWidth="3" />
        <text x="160" y="140" textAnchor="middle" fontFamily={SERIF} fontSize="52" fontWeight="600" fill="#3D1235">1 in 4</text>
        <text x="160" y="170" textAnchor="middle" fontFamily={SANS} fontSize="13" fontWeight="700" fill="#3D1235">strokes happen at working age</text>
      </g>}
      {at === 1 && <g fontFamily={SANS} fontWeight="700">
        <g className="lib-bulge"><rect x="50" y="48" width="150" height="50" rx="14" fill="#3D1235" /><text x="125" y="79" textAnchor="middle" fontSize="16" fill="#F7E1F1">“impossible”</text></g>
        <g><rect x="120" y="124" width="150" height="50" rx="14" fill="#7A3A6E" /><text x="195" y="155" textAnchor="middle" fontSize="16" fill="#F7E1F1">“too young”</text></g>
      </g>}
      {at === 2 && <g fontFamily={SERIF} fontWeight="600" fontSize="54" fill="#3D1235" textAnchor="middle">
        {["F", "A", "S", "T"].map((letter, index) => <text key={letter} x={70 + index * 60} y="134">{letter}</text>)}
        <text x="160" y="174" fontFamily={SANS} fontSize="13" fontWeight="700">face · arms · speech · time</text>
      </g>}
      {at === 3 && <g>
        <rect x="126" y="44" width="68" height="120" rx="12" fill="#3D1235" />
        <rect x="134" y="58" width="52" height="84" rx="4" fill="#F2C94C" />
        <text x="160" y="110" textAnchor="middle" fontFamily={SERIF} fontSize="26" fontWeight="600" fill="#3D1235">999</text>
        <text x="160" y="190" textAnchor="middle" fontFamily={SANS} fontSize="13" fontWeight="700" fill="#3D1235">even if it passes</text>
      </g>}
    </svg>}>
    <Steer props={props} {...s} label="Myth and fact" />
  </Band>;
}

// ---- How recovery can be different: rings that keep growing ------------------------------------------------

function GrowthRings(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const rings = [{ r: 26, label: "Days" }, { r: 48, label: "Weeks" }, { r: 70, label: "Months" }, { r: 92, label: "Years" }];
  const lit = [[0, 1], [0, 1, 2, 3], [2], [3]][at] ?? [];
  return <Band tone="moss" kicker="Over time" title="Recovery that keeps growing" credit="Illustration: Rehyn. A picture of the idea, not a measure of anyone's recovery."
    art={<svg viewBox="0 0 320 220" role="img" aria-label="Rings growing outward: days, weeks, months, years">
      {rings.map((ring, index) => <circle key={ring.label} cx="112" cy="110" r={ring.r} fill="none" stroke={lit.includes(index) ? "#C9E58A" : "#5B7A3A"} strokeWidth={lit.includes(index) ? 6 : 3} />)}
      {at === 0 && <circle cx="112" cy="110" r="26" fill="#C9E58A" opacity=".5" />}
      {at === 1 && <g stroke="#F2C94C" strokeWidth="3" strokeLinecap="round" fill="none" className={still ? undefined : "lib-grow-draw"}>
        <path d="M112 110 L80 70 L66 50" /><path d="M80 70 L60 78" /><path d="M112 110 L150 80 L176 66" /><path d="M150 80 L160 98" /><path d="M112 110 L118 160 L106 190" />
      </g>}
      {at === 3 && <g transform="translate(186 34)"><rect width="34" height="18" rx="4" fill="none" stroke="#EAF3DC" strokeWidth="3" /><rect x="34" y="5" width="4" height="8" fill="#EAF3DC" /><rect x="4" y="4" width="12" height="10" fill="#F2C94C" /></g>}
      {rings.map((ring, index) => <text key={ring.label} x="232" y={70 + index * 26} fontFamily={SANS} fontSize="13" fontWeight="700" fill={lit.includes(index) ? "#C9E58A" : "#9DB582"}>{ring.label}</text>)}
    </svg>}>
    <Steer props={props} {...s} label="Recovery" />
  </Band>;
}

// ---- The hidden effects: an iceberg -----------------------------------------------------------------------------

function Iceberg(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const below = [{ label: "Fatigue", y: 128, on: [1, 2] }, { label: "Memory and thinking", y: 160, on: [3] }, { label: "Hard to explain", y: 192, on: [4] }];
  return <Band tone="night" kicker="What others see" title="Above the water, and below" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 230" role="img" aria-label="An iceberg: a small tip above the water and much more below it">
      <rect x="0" y="80" width="320" height="150" fill="#22324A" />
      <g className={still ? undefined : "lib-bob"}>
        <path d="M130 80 L156 34 L176 50 L196 80 Z" fill={at === 0 ? "#FFFEFA" : "#E4E9F2"} />
        <path d="M130 80 L196 80 L250 150 L226 214 L120 222 L72 160 Z" fill="#8FC7E6" opacity=".55" />
      </g>
      <path d="M0 80 H320" stroke="#8FC7E6" strokeWidth="2" />
      <text x="214" y="50" fontFamily={SANS} fontSize="13" fontWeight="700" fill={at === 0 ? "#F2C94C" : "#E4E9F2"}>Looks fine</text>
      {below.map(item => <text key={item.label} x="160" y={item.y} textAnchor="middle" fontFamily={SANS} fontSize="13" fontWeight="700" fill={item.on.includes(at) ? "#F2C94C" : "#1B2230"}>{item.label}</text>)}
      {at === 2 && <text x="160" y="146" textAnchor="middle" fontFamily={SANS} fontSize="11" fontWeight="700" fill="#F2C94C">even long after</text>}
    </svg>}>
    <Steer props={props} {...s} label="Hidden effects" />
  </Band>;
}

// ---- Fitness: building up slowly --------------------------------------------------------------------------------

function SteadyBuild(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const still = useStill();
  const steady = [18, 24, 30, 38, 46, 54, 62, 70, 80, 90];
  const spiky = [18, 24, 30, 96, 14, 20, 30, 38, 46, 54];
  const bars = at === 3 ? spiky : steady;
  return <Band tone="honey" kicker="Building up" title="Slowly, then a little more" credit="Illustration: Rehyn. A picture of the idea, not an exercise plan. Ask your own team what suits you."
    art={<svg viewBox="0 0 320 220" role="img" aria-label={at === 3 ? "Bars rising slowly, with one very tall bar on a good day followed by a dip" : "Bars rising slowly over time"}>
      <path d="M20 190 H300" stroke="#9A7A3E" strokeWidth="2" />
      {bars.map((height, index) => <rect key={index} x={26 + index * 27} y={190 - height * 1.5} width="18" height={height * 1.5} rx="4" fill={at === 3 && index === 3 ? "#F2A488" : at === 3 && index === 4 ? "#7A5A2A" : "#F2C94C"} className={at === 2 && !still ? "lib-grow-bar" : undefined} style={{ animationDelay: `${index * 0.08}s` }} />)}
      {at === 3 && <g fontFamily={SANS} fontSize="11" fontWeight="700" fill="#FFF3D6"><text x="72" y="40">a good day</text><text x="132" y="206">tired later</text></g>}
      {at === 1 && <g transform="translate(36 30)"><rect width="150" height="40" rx="12" fill="#FFF3D6" /><text x="75" y="25" textAnchor="middle" fontFamily={SANS} fontSize="13" fontWeight="700" fill="#5A3C0E">Not sure? Ask first</text></g>}
      <text x="300" y="210" textAnchor="end" fontFamily={SANS} fontSize="11" fontWeight="700" fill="#FFF3D6">Time</text>
    </svg>}>
    <Steer props={props} {...s} label="Getting active" />
  </Band>;
}

// ---- Work: a phased return, week by week ------------------------------------------------------------------------

function WorkWeeks(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const days = ["M", "T", "W", "T", "F"];
  const filled = [2, 3, 4, 5];
  return <Band tone="sage" kicker="Week by week" title="A phased return" credit="Illustration: Rehyn. A picture of the idea, not a plan: your own return is agreed with your employer."
    art={<svg viewBox="0 0 320 230" role="img" aria-label="Four weeks of working days, filling up a little more each week">
      {days.map((day, index) => <text key={index} x={92 + index * 40} y="30" textAnchor="middle" fontFamily={SANS} fontSize="12" fontWeight="700" fill="#24362F">{day}</text>)}
      {filled.map((count, week) => <g key={week}>
        <text x="20" y={66 + week * 42} fontFamily={SANS} fontSize="12" fontWeight="700" fill="#24362F">Week {week + 1}</text>
        {days.map((_, day) => {
          const on = day < count;
          const half = at === 1 && on && week < 2;
          return <g key={day}>
            <rect x={76 + day * 40} y={44 + week * 42} width="32" height="32" rx="7" fill={on ? "#2F6851" : "#FFFEFA"} stroke="#9CC5B0" strokeWidth="2" />
            {half && <rect x={76 + day * 40} y={60 + week * 42} width="32" height="16" rx="0" fill="#BFE0CB" />}
          </g>;
        })}
      </g>)}
      {at === 2 && <g transform="translate(118 206)"><rect width="84" height="22" rx="11" fill="#2F6851" /><text x="42" y="15" textAnchor="middle" fontFamily={SANS} fontSize="11" fontWeight="700" fill="#FFFEFA">Equality Act 2010</text></g>}
      {at === 3 && <g transform="translate(118 206)"><rect width="84" height="22" rx="11" fill="#2F6851" /><text x="42" y="15" textAnchor="middle" fontFamily={SANS} fontSize="11" fontWeight="700" fill="#FFFEFA">Access to Work</text></g>}
      {at === 1 && <text x="160" y="222" textAnchor="middle" fontFamily={SANS} fontSize="11" fontWeight="700" fill="#24362F">Shorter days, flexible hours</text>}
    </svg>}>
    <Steer props={props} {...s} label="Going back to work" />
  </Band>;
}

// ---- Money: four jars -------------------------------------------------------------------------------------------

function MoneyJars(props: PieceProps) {
  const s = useSection(props, 4);
  const { at } = s;
  const jars = [{ label: "SSP", tag: "Up to 28 weeks" }, { label: "ESA", tag: "Apply before SSP ends" }, { label: "PIP", tag: "Even if you work" }, { label: "Mortgage", tag: "Check your policy" }];
  return <Band tone="violet" kicker="Money" title="Where help can come from" credit="Illustration: Rehyn. From GOV.UK and Citizens Advice; check what applies to you."
    art={<svg viewBox="0 0 320 230" role="img" aria-label={`Four jars: sick pay, ESA, PIP and mortgage protection. ${jars[at]?.tag ?? ""}`}>
      {jars.map((jar, index) => {
        const on = index === at;
        const x = 14 + index * 76;
        const lift = on ? -16 : 0;
        return <g key={jar.label} transform={`translate(${x} ${lift})`} className={on ? "lib-road-walker" : undefined}>
          <rect x="6" y="96" width="56" height="10" rx="4" fill={on ? "#B9A9F2" : "#6A5BB8"} />
          <path d="M4 108 H64 V180 a14 14 0 0 1 -14 14 H18 a14 14 0 0 1 -14 -14 Z" fill={on ? "#E7E2FF" : "#3D3080"} />
          <g fill={on ? "#F2C94C" : "#8A7FD0"}><circle cx="24" cy="176" r="8" /><circle cx="44" cy="176" r="8" /><circle cx="34" cy="160" r="8" /></g>
          <text x="34" y="136" textAnchor="middle" fontFamily={SANS} fontSize={jar.label.length > 4 ? 10.5 : 13} fontWeight="700" fill={on ? "#2A1F5C" : "#E7E2FF"}>{jar.label}</text>
        </g>;
      })}
      <g transform="translate(60 22)"><rect width="200" height="40" rx="12" fill="#F2C94C" /><text x="100" y="26" textAnchor="middle" fontFamily={SANS} fontSize="14" fontWeight="700" fill="#2A1F5C">{jars[at]?.tag}</text></g>
    </svg>}>
    <Steer props={props} {...s} label="Money help" />
  </Band>;
}

// ---- Children: the conversation ---------------------------------------------------------------------------------

function KidsTalk(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const says = ["The truth, at their level", "Simple and short", "Honest answers", "The usual routine", "Made for ages 3 to 18"];
  return <Band tone="dawn" kicker="At their size" title="Talking with children" credit="Illustration: Rehyn. Advice from Headway and Different Strokes."
    art={<svg viewBox="0 0 320 230" role="img" aria-label={`A parent and a child talking. ${says[at] ?? ""}`}>
      <circle cx="96" cy="96" r="22" fill="#FBEBD3" />
      <path d="M58 220 C 58 150, 72 126, 96 126 C 120 126, 134 150, 134 220 Z" fill="#FBEBD3" />
      <circle cx="216" cy="142" r="16" fill="#F2A488" />
      <path d="M190 220 C 190 182, 200 164, 216 164 C 232 164, 242 182, 242 220 Z" fill="#F2A488" />
      {at === 3 && <g transform="translate(250 176)"><rect width="34" height="40" rx="6" fill="#8A6A44" /><path d="M8 0 a9 9 0 0 1 18 0" stroke="#8A6A44" strokeWidth="4" fill="none" /></g>}
      <g className="lib-bulge"><rect x="120" y="22" width="186" height="48" rx="16" fill="#FFFEFA" /><path d="M140 70 l-14 18 l30 -18" fill="#FFFEFA" /><text x="213" y="52" textAnchor="middle" fontFamily={SANS} fontSize="14" fontWeight="700" fill="#3B2A18">{says[at]}</text></g>
    </svg>}>
    <Steer props={props} {...s} label="Talking with children" />
  </Band>;
}

// ---- Relationships: two chairs ----------------------------------------------------------------------------------

function TwoChairs(props: PieceProps) {
  const s = useSection(props, 5);
  const { at } = s;
  const still = useStill();
  const middle = ["Both of you", "Talk", "When you are ready", "Family and friends", "Many people do well"];
  return <Band tone="rose" kicker="Together" title="Two people, one change" credit="Illustration: Rehyn. A picture of the idea."
    art={<svg viewBox="0 0 320 230" role="img" aria-label={`Two people sitting facing each other. ${middle[at] ?? ""}`}>
      <g fill="#FBE3E8"><circle cx="70" cy="92" r="20" /><path d="M48 180 V140 C48 122 56 114 70 114 C84 114 92 122 92 140 V180 Z" /></g>
      <g fill="#FFB7A3"><circle cx="250" cy="92" r="20" /><path d="M228 180 V140 C228 122 236 114 250 114 C264 114 272 122 272 140 V180 Z" /></g>
      <path d="M36 180 H104 M44 180 V214 M96 180 V214 M216 180 H284 M224 180 V214 M276 180 V214" stroke="#8A4656" strokeWidth="5" strokeLinecap="round" />
      {at === 3 && <g fill="#8A4656"><circle cx="160" cy="150" r="12" /><path d="M140 200 C140 176 148 166 160 166 C172 166 180 176 180 200 Z" /></g>}
      {at === 1 && <g className={still ? undefined : "lib-bulge"}><rect x="108" y="56" width="44" height="28" rx="10" fill="#FBE3E8" /><rect x="168" y="76" width="44" height="28" rx="10" fill="#FFB7A3" /></g>}
      {(at === 2 || at === 4) && <path d="M160 128 c -10 -14, -32 -6, -24 12 c 6 12, 24 22, 24 22 c 0 0, 18 -10, 24 -22 c 8 -18, -14 -26, -24 -12 z" fill="#FFB7A3" className={still ? undefined : "lib-why-pulse"} />}
      {at === 0 && <path d="M100 120 C 130 100, 190 100, 220 120" stroke="#FFB7A3" strokeWidth="3" strokeDasharray="6 6" fill="none" />}
      <text x="160" y="32" textAnchor="middle" fontFamily={SANS} fontSize="14" fontWeight="700" fill="#FBE3E8">{middle[at]}</text>
    </svg>}>
    <Steer props={props} {...s} label="Relationships" />
  </Band>;
}

export function YoungPieceView({ piece, ...props }: { piece: YoungPiece } & PieceProps) {
  switch (piece) {
    case "young-causes": return <YoungCauses {...props} />;
    case "bubble-test": return <BubbleTest {...props} />;
    case "myth-fact": return <MythFact {...props} />;
    case "growth-rings": return <GrowthRings {...props} />;
    case "iceberg": return <Iceberg {...props} />;
    case "steady-build": return <SteadyBuild {...props} />;
    case "work-weeks": return <WorkWeeks {...props} />;
    case "money-jars": return <MoneyJars {...props} />;
    case "kids-talk": return <KidsTalk {...props} />;
    case "two-chairs": return <TwoChairs {...props} />;
  }
}
