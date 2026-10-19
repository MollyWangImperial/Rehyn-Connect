import type { CSSProperties, ReactNode } from "react";
import { Link } from "wouter";
import type { LibraryItem } from "@/content/library";
import { itemHref, type ConditionPlace } from "@/lib/library";

// Explore as goal cards ("D · Goal cards, from your reference"): each piece is led by what a patient
// wants back, in their own words, with a small moving illustration of it. The descriptions say only
// what each piece really contains. Pieces without a goal of their own fall back to a plain card.

type Goal = { want: string; desc: string; cta: string; ink: string; tint: string; mark: string; art: ReactNode };

const Cup = () => <svg viewBox="0 0 200 150">
  <path className="g-arc" d="M150 30 a50 50 0 0 1 4 76" fill="none" stroke="#D9A441" strokeWidth="5" strokeLinecap="round" />
  <ellipse className="g-shadow" cx="96" cy="138" rx="36" ry="6" fill="#2F6851" opacity=".16" />
  <g className="g-lift">
    <path d="M62 56 H130 L123 124 a10 10 0 0 1 -10 9 H79 a10 10 0 0 1 -10 -9 Z" fill="#FFFFFF" stroke="#2F6851" strokeWidth="6" strokeLinejoin="round" />
    <path d="M130 72 h8 a17 17 0 0 1 0 34 h-12" fill="none" stroke="#2F6851" strokeWidth="6" strokeLinecap="round" />
    <path d="M70 82 H122" stroke="#BFE0CB" strokeWidth="10" strokeLinecap="round" />
    <g className="g-steam" fill="none" stroke="#7FB59A" strokeWidth="4" strokeLinecap="round"><path d="M82 44 q-7 -9 0 -18" /><path d="M98 44 q-7 -9 0 -18" /><path d="M114 44 q-7 -9 0 -18" /></g>
  </g>
  <rect x="6" y="14" width="50" height="26" rx="13" fill="#2F6851" />
  <text x="31" y="31" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="800" fill="#FFFFFF">3 / 10</text>
</svg>;

const Walk = () => <svg viewBox="0 0 200 150">
  <path d="M4 136 H196" stroke="#AFC0E8" strokeWidth="4" strokeLinecap="round" />
  <rect x="156" y="40" width="38" height="96" rx="4" fill="#FFFFFF" stroke="#34509E" strokeWidth="4" />
  <rect className="g-door" x="159" y="43" width="32" height="90" rx="2" fill="#C9D6F2" />
  <circle cx="164" cy="92" r="3" fill="#34509E" />
  <g className="g-fade" fill="none" stroke="#8E8577" strokeWidth="4.5" strokeLinecap="round">
    <circle cx="32" cy="66" r="8" /><path d="M32 74 V104 M32 84 L22 96 M32 84 L42 96 M32 104 L24 134 M32 104 L40 134" /><path d="M14 134 V92 H50 V134" strokeWidth="3.5" />
  </g>
  <g className="g-fade" style={{ animationDelay: ".5s" }} fill="none" stroke="#6F7FB8" strokeWidth="4.5" strokeLinecap="round">
    <circle cx="80" cy="66" r="8" /><path d="M80 74 V104 M80 84 L70 96 M80 84 L92 94 M80 104 L72 134 M80 104 L88 134" /><path d="M94 92 V134 M94 92 q0 -6 6 -6" stroke="#8A5A12" strokeWidth="3.5" />
  </g>
  <g className="g-walk" fill="none" stroke="#34509E" strokeWidth="5" strokeLinecap="round">
    <circle cx="126" cy="64" r="9" /><path d="M126 73 V104 M126 84 L114 98 M126 84 L138 98" />
    <path className="g-leg" d="M126 104 L126 134" /><path className="g-leg is-back" d="M126 104 L126 134" />
  </g>
</svg>;

const Words = () => <svg viewBox="0 0 200 150">
  <path d="M22 78 a22 22 0 0 1 20 -34 a26 26 0 0 1 48 -6 a22 22 0 0 1 22 30 a18 18 0 0 1 -14 30 H42 a20 20 0 0 1 -20 -20 Z" fill="#FFFFFF" stroke="#6A3E9E" strokeWidth="4" strokeLinejoin="round" />
  <circle cx="34" cy="116" r="6" fill="#FFFFFF" stroke="#6A3E9E" strokeWidth="3" />
  <circle cx="22" cy="132" r="4" fill="#FFFFFF" stroke="#6A3E9E" strokeWidth="3" />
  <g fontFamily="Instrument Serif, Georgia, serif" fontSize="26" fill="#6A3E9E">
    <text className="g-jumble" x="46" y="74">c</text>
    <text className="g-jumble" x="66" y="58" style={{ animationDelay: "-.8s" }}>u</text>
    <text className="g-jumble" x="86" y="82" style={{ animationDelay: "-1.6s" }}>p</text>
  </g>
  <path className="g-flow" d="M104 88 C120 94, 124 100, 128 106" fill="none" stroke="#6A3E9E" strokeWidth="3" strokeLinecap="round" />
  <g className="g-pop">
    <path d="M124 96 H182 a12 12 0 0 1 12 12 V126 a12 12 0 0 1 -12 12 H146 L134 148 V138 H124 a12 12 0 0 1 -12 -12 V108 a12 12 0 0 1 12 -12 Z" fill="#6A3E9E" />
    <text x="153" y="126" textAnchor="middle" fontFamily="Instrument Serif, Georgia, serif" fontSize="26" fill="#FFFFFF">cup</text>
  </g>
</svg>;

const Energy = () => <svg viewBox="0 0 200 150">
  <g className="g-spin"><circle cx="36" cy="30" r="12" fill="#E8B04A" /><path d="M36 10 V4 M36 50 V56 M16 30 H10 M56 30 H62 M22 16 L18 12 M50 44 L54 48 M50 16 L54 12 M22 44 L18 48" stroke="#E8B04A" strokeWidth="4" strokeLinecap="round" /></g>
  <path className="g-float" d="M168 16 a14 14 0 1 0 18 20 a11 11 0 1 1 -18 -20 Z" fill="#4A3F9C" />
  <path d="M10 120 H190" stroke="#E8C9BE" strokeWidth="2" strokeDasharray="4 6" />
  <path d="M10 112 C34 62, 60 58, 78 92 S112 116, 128 76 S168 52, 190 92" fill="none" stroke="#A8402B" strokeWidth="5" strokeLinecap="round" />
  <path className="g-travel" pathLength={100} d="M10 112 C34 62, 60 58, 78 92 S112 116, 128 76 S168 52, 190 92" fill="none" stroke="#5A2A1C" strokeWidth="13" strokeLinecap="round" />
  <rect x="76" y="118" width="36" height="18" rx="9" fill="#FFFFFF" />
  <text x="94" y="131" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fontWeight="800" fill="#7E2F1F">rest</text>
  <rect x="150" y="122" width="34" height="18" rx="5" fill="#FFFFFF" stroke="#A8402B" strokeWidth="3" />
  <rect x="185" y="127" width="4" height="8" rx="1" fill="#A8402B" />
  <rect className="g-charge" x="154" y="126" width="26" height="10" rx="2" fill="#E8B04A" />
</svg>;

const Rewire = () => <svg viewBox="0 0 200 150">
  <path d="M100 18 C78 6, 46 18, 48 46 C34 60, 38 90, 58 100 C62 124, 90 132, 100 116 C110 132, 138 124, 142 100 C162 90, 166 60, 152 46 C154 18, 122 6, 100 18 Z" fill="#FFFFFF" stroke="#4A3F9C" strokeWidth="5" strokeLinejoin="round" />
  <path d="M66 74 L100 56 L134 74" fill="none" stroke="#B9B4AA" strokeWidth="4" strokeDasharray="5 6" strokeLinecap="round" />
  <path d="M94 50 l12 12 M106 50 l-12 12" stroke="#B5522E" strokeWidth="4" strokeLinecap="round" />
  <path className="g-draw" pathLength={100} d="M66 76 C80 112, 120 112, 134 76" fill="none" stroke="#2F6851" strokeWidth="5" strokeLinecap="round" />
  <circle cx="66" cy="76" r="6" fill="#4A3F9C" />
  <circle cx="134" cy="76" r="6" fill="#4A3F9C" />
  <path className="g-twinkle" d="M170 24 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 Z" fill="#E8B04A" />
</svg>;

const Months = () => <svg viewBox="0 0 200 150">
  <path d="M10 40 H190 M10 80 H190 M10 120 H190" stroke="#EAD7B0" strokeWidth="2" />
  <path className="g-draw" pathLength={100} d="M12 128 L42 108 L58 118 L88 86 L104 96 L134 62 L150 72 L186 30" fill="none" stroke="#2F6851" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
  <path className="g-travel" pathLength={100} d="M12 128 L42 108 L58 118 L88 86 L104 96 L134 62 L150 72 L186 30" fill="none" stroke="#B5522E" strokeWidth="12" strokeLinecap="round" />
  <rect x="40" y="128" width="40" height="18" rx="9" fill="#FFFFFF" />
  <text x="60" y="141" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fontWeight="800" fill="#8A5A12">a dip</text>
  <rect x="150" y="6" width="46" height="18" rx="9" fill="#8A5A12" />
  <text x="173" y="19" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fontWeight="800" fill="#FFFFFF">month 3</text>
</svg>;

/** The goals, keyed by the Explore piece they lead to, in the order the cards are shown. */
const GOALS: Record<string, Goal> = {
  "arm-hand": { want: "I want to hold a cup in my own hand again.", desc: "Add the exercises your physiotherapist gave you, tap each one as you do it, and watch your twelve weeks fill in.", cta: "Start practising", ink: "#2F6851", tint: "#E3F0E7", mark: "#BFE0CB", art: <Cup /> },
  walking: { want: "I want to walk to the front door without the frame.", desc: "Bed to chair, standing, balance, then walking with support. Six short scenes, and your physiotherapist decides when to change your aid.", cta: "Watch", ink: "#34509E", tint: "#E2E8F8", mark: "#C3D0F2", art: <Walk /> },
  words: { want: "I want my words to come when I need them.", desc: "The word is in there. Why it won't come out, and what helps when you're stuck: spell it, draw it, point to it or talk around it.", cta: "Read", ink: "#6A3E9E", tint: "#EDE5F8", mark: "#D9C7F2", art: <Words /> },
  fatigue: { want: "I want to get through a whole day without crashing.", desc: "Why rest alone does not fix it, how to pace, plan and prioritise, and a diary that shows you how much is right for you.", cta: "Watch", ink: "#A8402B", tint: "#FAE6DF", mark: "#F2C3B4", art: <Energy /> },
  rewiring: { want: "I want to know the practice is actually doing something.", desc: "A blocked path, and a new one growing around it. Two minutes that show why repeating your exercises matters.", cta: "Watch", ink: "#4A3F9C", tint: "#E9E6F8", mark: "#CFC8F0", art: <Rewire /> },
  "first-three-months": { want: "I want to know if what I'm feeling is normal.", desc: "What is typical in the first days, weeks and months, what is not, and the review that comes after.", cta: "Read", ink: "#8A5A12", tint: "#F8EBD3", mark: "#EED3A0", art: <Months /> },
};
const ORDER = Object.keys(GOALS);

const PLAIN: Omit<Goal, "want" | "desc" | "art"> = { cta: "Open", ink: "#4A3F9C", tint: "#E9E6F8", mark: "#CFC8F0" };

export function GoalCards({ place, items }: { place: ConditionPlace; items: LibraryItem[] }) {
  const ordered = [...items].sort((a, b) => rank(a.id) - rank(b.id));
  return <ul className="lib-v2-goals" role="list">
    {ordered.map((item, index) => {
      const goal = GOALS[item.id];
      const look = goal ?? PLAIN;
      return <li key={item.id}>
        <Link href={itemHref({ ...place, item })} className="lib-v2-goal" style={{ background: look.tint, animationDelay: `${index * 0.09}s`, ["--ink" as string]: look.ink, ["--mark" as string]: look.mark } as CSSProperties}>
          <span className="lib-v2-goal-blob" aria-hidden="true" />
          {goal && <span className="lib-v2-goal-art" aria-hidden="true">{goal.art}</span>}
          <span className="lib-v2-goal-want"><span>{goal ? `“${goal.want}”` : item.title}</span></span>
          {goal && <b className="lib-v2-goal-title">{item.title}</b>}
          {(goal?.desc ?? item.blurb) && <span className="lib-v2-goal-desc">{goal?.desc ?? item.blurb}</span>}
          <span className="lib-v2-goal-cta">{look.cta} <i aria-hidden="true">→</i></span>
        </Link>
      </li>;
    })}
  </ul>;
}

const rank = (id: string) => { const at = ORDER.indexOf(id); return at < 0 ? ORDER.length : at; };
