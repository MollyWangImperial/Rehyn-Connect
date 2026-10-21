import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "wouter";
import type { LibraryGroup, LibrarySection } from "@/content/library";
import { conditionHref, sectionStories } from "@/lib/library";
import { readLocal } from "@/lib/library-local";
import { BONES_PALETTES, HEART_PALETTES, METABOLISM_PALETTES } from "@/lib/library-theme";
import { Crumbs } from "./parts";

// The Brain & nervous system page as a "bento" (brain-section-bento.html): a dark header with
// drifting brain-fold lines, then one group in a large tile and the others in small tiles. Choosing
// a small tile (anywhere on it) moves that group into the large tile; its conditions are links only
// there. The colours, symbols and short chip labels are this page's own; everything else comes
// from the section's groups in content/library.ts.

/** `light`: the large tile keeps the small card's pale colour, with dark words, instead of turning dark. */
type BentoStyle = { ink: string; tint: string; text: string; muted: string; short: string; chips: string[]; symbol: ReactNode; light?: boolean };

const BRAIN: Record<string, BentoStyle> = {
  stroke: { ink: "#4A3F9C", tint: "#EEEBFA", text: "#2F2770", muted: "#4D4580", short: "When blood stops reaching part of the brain.", chips: ["Ischaemic", "Haemorrhagic", "TIA", "Under 50"], symbol: <>
    <path d="M100 45 C75 28, 42 44, 44 80 C32 96, 36 128, 56 138 C60 164, 90 170, 100 152" />
    <path d="M100 45 C125 28, 158 44, 156 80 C168 96, 164 128, 144 138 C140 164, 110 170, 100 152" />
    <path d="M20 186 C50 170, 66 150, 84 132 C96 120, 110 112, 128 100" />
    <circle cx="128" cy="100" r="10" fill="#F2B8A5" stroke="none" />
  </> },
  dementia: { light: true, ink: "#6A3E9E", tint: "#F1E9FB", text: "#4E2C7A", muted: "#5B4A72", short: "Memory, thinking and language changes beyond ordinary ageing.", chips: ["Alzheimer's", "Vascular", "Lewy body", "Mild cognitive impairment"], symbol: <>
    <path d="M82 176 V142 L56 136 L70 110 C44 70, 70 32, 112 32 C152 32, 172 64, 162 104 L172 124 L152 130 L148 176" />
    <path d="M114 86 a8 8 0 1 1 8 8 a16 16 0 1 1 -16 -16 a24 24 0 1 1 24 24" />
  </> },
  parkinsons: { light: true, ink: "#34509E", tint: "#E7ECFB", text: "#233A78", muted: "#3E4C78", short: "Tremor, stiffness and slowness, and what helps.", chips: ["Parkinson's disease", "Essential tremor", "Dystonia"], symbol: <>
    <path d="M70 112 V58 a9 9 0 0 1 18 0 V104 M88 100 V44 a9 9 0 0 1 18 0 V100 M106 100 V50 a9 9 0 0 1 18 0 V104 M124 106 V70 a9 9 0 0 1 18 0 V140 C142 162, 132 176, 112 176 H92 C78 176, 70 166, 64 156 L40 120 a9 9 0 0 1 14 -10 L70 128 Z" />
    <path d="M28 60 q-8 10 0 20 M16 50 q-12 20 0 40 M168 60 q8 10 0 20 M180 50 q12 20 0 40" />
  </> },
  "multiple-sclerosis": { ink: "#1F6476", tint: "#E4F1F4", text: "#164E5C", muted: "#2F5C66", short: "An immune condition of the nerves, in different patterns.", chips: ["Relapsing-remitting MS", "Progressive MS"], symbol: <>
    <circle cx="40" cy="100" r="18" />
    <path d="M30 84 L18 62 M28 114 L14 132 M48 84 L56 60 M58 100 H190" />
    <rect x="68" y="88" width="26" height="24" rx="12" /><rect x="102" y="88" width="26" height="24" rx="12" strokeDasharray="6 6" /><rect x="136" y="88" width="26" height="24" rx="12" />
  </> },
  epilepsy: { ink: "#A8402B", tint: "#FBEDE7", text: "#7E2F1F", muted: "#7A4535", short: "Including seizures after a stroke or brain injury.", chips: ["Focal", "Generalised", "After stroke"], symbol: <>
    <path d="M100 40 C70 26, 40 44, 42 76 C30 92, 34 124, 54 134 C58 158, 86 166, 100 150 C114 166, 142 158, 146 134 C166 124, 170 92, 158 76 C160 44, 130 26, 100 40 Z" />
    <path d="M30 100 H62 L72 78 L84 122 L96 64 L108 136 L120 82 L130 110 L138 100 H170" />
  </> },
  "brain-spinal-injury": { ink: "#3E4B5E", tint: "#ECEFF4", text: "#2C394C", muted: "#4A5568", short: "Recovery after a head injury or spinal cord damage.", chips: ["Brain injury", "Concussion", "Spinal cord"], symbol: <>
    <rect x="78" y="18" width="44" height="20" rx="8" /><rect x="76" y="48" width="48" height="20" rx="8" /><rect x="74" y="78" width="52" height="20" rx="8" />
    <rect x="74" y="108" width="52" height="20" rx="8" /><rect x="76" y="138" width="48" height="20" rx="8" /><rect x="80" y="168" width="40" height="20" rx="8" />
    <path d="M74 88 H52 M126 88 H148 M74 118 H52 M126 118 H148" />
  </> },
  headache: { ink: "#8A5A12", tint: "#FBF0DC", text: "#6B450C", muted: "#6E5228", short: "Telling a migraine from a headache that is urgent.", chips: ["Migraine", "Tension headache"], symbol: <>
    <path d="M82 176 V142 L56 136 L70 110 C44 70, 70 32, 112 32 C152 32, 172 64, 162 104 L172 124 L152 130 L148 176" />
    <path d="M126 56 L108 88 H128 L110 122" />
    <path d="M150 46 l8 -10 M164 62 l12 -4 M164 82 l12 4" />
  </> },
  nerves: { ink: "#4B7A2E", tint: "#EAF3E4", text: "#36591F", muted: "#46603A", short: "Numbness, tingling, weakness or pain along a nerve.", chips: ["Neuropathy", "Bell's palsy", "Sciatica", "Carpal tunnel"], symbol: <>
    <path d="M100 186 V110 M100 110 L70 70 M100 110 L130 70 M70 70 L48 38 M70 70 L82 30 M130 70 L118 30 M130 70 L156 42 M100 142 L66 162 M100 142 L136 164" />
    <circle cx="48" cy="38" r="7" /><circle cx="82" cy="30" r="7" /><circle cx="118" cy="30" r="7" /><circle cx="156" cy="42" r="7" /><circle cx="66" cy="162" r="7" /><circle cx="136" cy="164" r="7" />
  </> },
};

// The Heart & lungs page: the same bento, in reds for the heart and blues for breathing. Each group's
// colours are its pages' colours too (lib/library-theme.ts).
const HEART: Record<string, BentoStyle> = {
  "blood-pressure": { ...HEART_PALETTES["blood-pressure"], short: "The numbers, the tablets and the everyday habits.", chips: ["High blood pressure"], symbol: <>
    <path d="M36 132 A64 64 0 0 1 164 132" />
    <path d="M52 132 A48 48 0 0 1 60 106 M140 106 A48 48 0 0 1 148 132" strokeDasharray="4 10" />
    <path d="M100 132 L134 92" />
    <circle cx="100" cy="132" r="9" />
    <path d="M50 166 H150" />
  </> },
  "heart-attack": { ...HEART_PALETTES["heart-attack"], short: "Chest pain, the days in hospital and the months after.", chips: ["Heart attack", "Angina"], symbol: <>
    <path d="M100 174 C44 134, 22 100, 32 70 C42 40, 82 36, 100 64 C118 36, 158 40, 168 70 C178 100, 156 134, 100 174 Z" />
    <path d="M124 58 C112 86, 132 104, 118 136" />
    <circle cx="124" cy="96" r="7" />
  </> },
  "heart-rhythm": { ...HEART_PALETTES["heart-rhythm"], short: "When the heart beats too fast, too slow or out of step.", chips: ["Atrial fibrillation"], symbol: <>
    <path d="M14 112 H44 L54 92 L62 132 L74 66 L86 146 L94 112 H108 L114 100 L120 124 L128 104 L134 118 L140 112 H186" />
    <path d="M100 56 C86 40, 64 50, 70 66 C74 76, 100 90, 100 90 C100 90, 126 76, 130 66 C136 50, 114 40, 100 56 Z" />
  </> },
  "long-term-lung": { ...HEART_PALETTES["long-term-lung"], short: "Living with breathlessness, and the inhalers that help.", chips: ["COPD", "Asthma"], symbol: <>
    <path d="M100 26 V96 M100 96 C92 104, 84 108, 76 110 M100 96 C108 104, 116 108, 124 110" />
    <path d="M86 58 C58 48, 30 88, 34 138 C36 164, 58 172, 78 160 C88 150, 90 118, 86 58 Z" />
    <path d="M114 58 C142 48, 170 88, 166 138 C164 164, 142 172, 122 160 C112 150, 110 118, 114 58 Z" />
  </> },
  "sleep-breathing": { ...HEART_PALETTES["sleep-breathing"], short: "Snoring, pauses in breathing at night, and tiredness.", chips: ["Sleep apnoea"], symbol: <>
    <path d="M112 34 A58 58 0 1 0 166 120 A46 46 0 1 1 112 34 Z" />
    <path d="M138 38 h20 l-20 22 h20" />
    <path d="M22 172 q16 -18 32 0 t32 0 t32 0 t32 0" />
  </> },
};

// The Diabetes & metabolism page: amber for blood sugar, teal for the thyroid.
const METABOLISM: Record<string, BentoStyle> = {
  diabetes: { ...METABOLISM_PALETTES.diabetes, short: "Blood sugar, the tests that track it, and the everyday changes that help.", chips: ["Type 2", "Prediabetes", "Type 1"], symbol: <>
    <path d="M100 26 C80 60, 56 88, 56 116 a44 44 0 0 0 88 0 C144 88, 120 60, 100 26 Z" />
    <path d="M78 124 a22 22 0 0 0 22 22" />
    <path d="M150 170 h30 M165 155 v30" />
  </> },
  thyroid: { ...METABOLISM_PALETTES.thyroid, short: "A small gland in the neck that sets the pace for much of the body.", chips: ["Underactive", "Overactive"], symbol: <>
    <path d="M88 14 V186 M112 14 V186 M88 40 Q100 46 112 40 M88 160 Q100 166 112 160" />
    <path d="M88 128 C74 142, 46 140, 42 108 C38 74, 52 36, 66 36 C78 36, 82 60, 84 88 C86 106, 87 118, 88 128 Z" />
    <path d="M112 128 C126 142, 154 140, 158 108 C162 74, 148 36, 134 36 C122 36, 118 60, 116 88 C114 106, 113 118, 112 128 Z" />
    <path d="M88 118 Q100 126 112 118" />
  </> },
};

// The Bones, joints & muscles page: teal for joints, warm stone for bone, slate blue for the back.
const BONES: Record<string, BentoStyle> = {
  arthritis: { ...BONES_PALETTES.arthritis, short: "Painful, stiff joints, and the treatments and operations that help.", chips: ["Osteoarthritis", "Rheumatoid"], symbol: <>
    <path d="M70 20 V86 C70 100, 86 108, 100 108 C114 108, 130 100, 130 86 V20" />
    <path d="M70 180 V124 C70 112, 86 106, 100 106 M130 180 V124 C130 112, 114 106, 100 106" />
    <path d="M56 96 C40 100, 40 116, 56 120 M144 96 C160 100, 160 116, 144 120" strokeDasharray="4 6" />
  </> },
  "bone-health": { ...BONES_PALETTES["bone-health"], short: "Keeping bones strong, and recovering well after a break.", chips: ["Osteoporosis"], symbol: <>
    <path d="M60 50 a18 18 0 1 1 28 -8 L130 136 a18 18 0 1 1 8 28 a18 18 0 1 1 -28 8 L68 70 a18 18 0 1 1 -8 -20 Z" />
    <circle cx="100" cy="100" r="5" /><circle cx="88" cy="84" r="3" /><circle cx="112" cy="118" r="3" />
  </> },
  "back-neck": { ...BONES_PALETTES["back-neck"], short: "Everyday back and neck pain, and when to get it checked.", chips: ["Back pain", "Neck"], symbol: <>
    {[24, 50, 76, 102, 128, 154].map((y, index) => <rect key={y} x={84 + Math.sin(index / 1.6) * 10} y={y} width="36" height="18" rx="7" />)}
    <path d="M100 18 C116 60, 84 120, 104 186" strokeDasharray="3 6" />
  </> },
};

const BENTO: Record<string, Record<string, BentoStyle>> = { "brain-nervous-system": BRAIN, "heart-lungs": HEART, "diabetes-metabolism": METABOLISM, "bones-joints-muscles": BONES };

/** Whether a section has the bento layout: every one of its groups has a style. */
export const hasBento = (section: LibrarySection) => Boolean(BENTO[section.id]) && section.groups.every(group => BENTO[section.id][group.id]);

const GroupSymbol = ({ style, colour, width, className }: { style: BentoStyle; colour: string; width: number; className: string }) =>
  <svg className={className} aria-hidden="true" focusable="false" viewBox="0 0 200 200" fill="none" stroke={colour} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round">{style.symbol}</svg>;

const plural = (count: number, word: string) => `${count} ${word}${count === 1 ? "" : "s"}`;

export function BentoHero({ section }: { section: LibrarySection }) {
  const conditions = section.groups.reduce((sum, group) => sum + group.conditions.length, 0);
  const stories = sectionStories(section.id).length;
  return <header className={`lib-bento-hero is-${section.id}`}>
    {section.id === "heart-lungs" ? <HeartArt /> : section.id === "diabetes-metabolism" ? <SugarArt /> : section.id === "bones-joints-muscles" ? <SpineArt /> : <svg className="lib-bento-hero-art" aria-hidden="true" focusable="false" viewBox="0 0 1280 360" preserveAspectRatio="xMidYMid slice">
      <g className="lib-bento-folds" fill="none" stroke="#9C91E8" strokeOpacity=".22" strokeWidth="2" strokeLinecap="round">
        <path d="M-60 40 C40 10, 80 70, 160 40 S300 10, 380 50 S520 90, 600 40 S760 0, 840 50 S1000 90, 1080 40 S1240 10, 1340 50" />
        <path d="M-60 100 C30 70, 90 130, 180 100 S320 60, 400 110 S560 150, 640 100 S800 60, 880 110 S1040 150, 1120 100 S1280 70, 1340 110" />
        <path d="M-60 160 C50 130, 100 190, 200 160 S340 120, 420 170 S580 210, 660 160 S820 120, 900 170 S1060 210, 1140 160 S1290 130, 1340 170" />
        <path d="M-60 220 C40 190, 90 250, 180 220 S320 180, 400 230 S560 270, 640 220 S800 180, 880 230 S1040 270, 1120 220 S1280 190, 1340 230" />
        <path d="M-60 280 C30 250, 90 310, 180 280 S320 240, 400 290 S560 330, 640 280 S800 240, 880 290 S1040 330, 1120 280 S1280 250, 1340 290" />
      </g>
      <g className="lib-bento-folds is-slow" fill="none" stroke="#E7A68F" strokeOpacity=".18" strokeWidth="1.4" strokeLinecap="round">
        <path d="M-60 70 C60 40, 110 100, 220 70 S380 30, 470 80 S640 120, 730 70 S900 30, 990 80 S1160 120, 1340 70" />
        <path d="M-60 190 C60 160, 110 220, 220 190 S380 150, 470 200 S640 240, 730 190 S900 150, 990 200 S1160 240, 1340 190" />
        <path d="M-60 320 C60 290, 110 350, 220 320 S380 280, 470 330 S640 370, 730 320 S900 280, 990 330 S1160 370, 1340 320" />
      </g>
      <g fill="#F2B8A5">
        {[[300, 100, 3, 0], [640, 40, 3, -1], [880, 230, 4, -2.2], [1120, 100, 3, -3], [1000, 300, 3, -1.6], [760, 150, 2.5, -.6]].map(([cx, cy, r, delay]) =>
          <circle key={`${cx}-${cy}`} className="lib-bento-spark" cx={cx} cy={cy} r={r} style={{ animationDelay: `${delay}s` }} />)}
      </g>
    </svg>}
    <div className="lib-bento-hero-inner">
      <Crumbs className="lib-bento-crumbs" trail={[{ label: "Library", href: "/" }, { label: section.title }]} />
      <h1>{section.title}</h1>
      <p>{section.blurb}</p>
      <div className="lib-bento-stats">
        {section.facts ? section.facts.map(fact => <span key={fact}>{fact}</span>) : <>
        <span>{plural(section.groups.length, "group")}</span>
        <span>{plural(conditions, "condition")}</span>
        {stories > 0 && <span>{stories} {stories === 1 ? "story" : "stories"}</span>}
        </>}
      </div>
    </div>
  </header>;
}

/** The Heart & lungs header: a heartbeat trace drifting across, and slow breathing waves under it. */
function HeartArt() {
  const beat = (y: number) => Array.from({ length: 6 }, (_, index) => {
    const x = -60 + index * 240;
    return `M${x} ${y} H${x + 120} L${x + 134} ${y - 18} L${x + 146} ${y + 22} L${x + 160} ${y - 64} L${x + 174} ${y + 40} L${x + 186} ${y} H${x + 240}`;
  }).join(" ");
  return <svg className="lib-bento-hero-art" aria-hidden="true" focusable="false" viewBox="0 0 1280 360" preserveAspectRatio="xMidYMid slice">
    <g className="lib-bento-folds" fill="none" stroke="#F2A0A0" strokeOpacity=".24" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d={beat(110)} />
      <path d={beat(250)} strokeOpacity=".5" />
    </g>
    <g className="lib-bento-folds is-slow" fill="none" stroke="#9FC8E0" strokeOpacity=".2" strokeWidth="1.6" strokeLinecap="round">
      <path d="M-60 180 C60 140, 140 220, 260 180 S460 140, 580 180 S780 220, 900 180 S1100 140, 1340 180" />
      <path d="M-60 320 C60 280, 140 360, 260 320 S460 280, 580 320 S780 360, 900 320 S1100 280, 1340 320" />
    </g>
    <g fill="#F2B8A5">
      {[[300, 60, 3, 0], [700, 40, 3, -1], [880, 300, 4, -2.2], [1120, 70, 3, -3], [520, 330, 3, -1.6]].map(([cx, cy, r, delay]) =>
        <circle key={`${cx}-${cy}`} className="lib-bento-spark" cx={cx} cy={cy} r={r} style={{ animationDelay: `${delay}s` }} />)}
    </g>
  </svg>;
}

/** The Diabetes & metabolism header: a blood-sugar line rising and settling inside a target band, and drops. */
function SugarArt() {
  const curve = (y: number, lift: number) => Array.from({ length: 7 }, (_, index) => {
    const x = -60 + index * 240;
    return `M${x} ${y} C${x + 60} ${y}, ${x + 70} ${y - lift}, ${x + 120} ${y - lift} S${x + 180} ${y}, ${x + 240} ${y}`;
  }).join(" ");
  return <svg className="lib-bento-hero-art" aria-hidden="true" focusable="false" viewBox="0 0 1280 360" preserveAspectRatio="xMidYMid slice">
    <rect x="-60" y="150" width="1400" height="90" fill="#F2C47A" opacity=".08" />
    <g className="lib-bento-folds" fill="none" stroke="#F2C47A" strokeOpacity=".3" strokeWidth="2.4" strokeLinecap="round">
      <path d={curve(220, 70)} />
    </g>
    <g className="lib-bento-folds is-slow" fill="none" stroke="#8FD3C3" strokeOpacity=".22" strokeWidth="1.6" strokeLinecap="round">
      <path d={curve(300, 40)} />
    </g>
    <g fill="#F2C47A">
      {[[300, 70, 6, 0], [700, 50, 5, -1], [900, 300, 7, -2.2], [1120, 90, 5, -3], [520, 320, 5, -1.6]].map(([cx, cy, r, delay]) =>
        <path key={`${cx}-${cy}`} className="lib-bento-spark" d={`M${cx} ${cy - r * 2} C${cx - r} ${cy - r / 2}, ${cx - r} ${cy + r}, ${cx} ${cy + r} C${cx + r} ${cy + r}, ${cx + r} ${cy - r / 2}, ${cx} ${cy - r * 2} Z`} style={{ animationDelay: `${delay}s` }} />)}
    </g>
  </svg>;
}

/** The Bones, joints & muscles header: a gently curving spine of vertebrae, swaying as if on a walk. */
function SpineArt() {
  return <svg className="lib-bento-hero-art" aria-hidden="true" focusable="false" viewBox="0 0 1280 360" preserveAspectRatio="xMidYMid slice">
    <g className="lib-bento-folds" fill="none" stroke="#9FD8CF" strokeOpacity=".28" strokeWidth="2.4" strokeLinejoin="round">
      {Array.from({ length: 11 }, (_, index) => {
        const y = 18 + index * 31; const x = 1000 + Math.sin(index / 2.2) * 40;
        return <rect key={index} x={x - 34} y={y} width="68" height="22" rx="9" />;
      })}
    </g>
    <g className="lib-bento-folds is-slow" fill="none" stroke="#E8C98F" strokeOpacity=".2" strokeWidth="1.6" strokeLinecap="round">
      <path d="M-60 300 C120 260, 260 320, 420 290 S700 250, 860 290" />
      <path d="M-60 200 C120 160, 260 220, 420 190 S700 150, 860 190" />
    </g>
    <g fill="#E8C98F">
      {[[300, 80, 3, 0], [640, 40, 3, -1], [760, 300, 4, -2.2], [520, 330, 3, -1.6]].map(([cx, cy, r, delay]) =>
        <circle key={`${cx}-${cy}`} className="lib-bento-spark" cx={cx} cy={cy} r={r} style={{ animationDelay: `${delay}s` }} />)}
    </g>
  </svg>;
}

// The group last moved into the large tile, by section, kept in this browser so coming back to the
// page (for example from one of its conditions) shows that group again rather than the first one.
const GROUP_KEY = "rehyn.library-section-group.v1";
function rememberGroup(sectionId: string, groupId: string) {
  try { window.localStorage.setItem(GROUP_KEY, JSON.stringify({ ...readLocal<Record<string, string>>(GROUP_KEY, {}), [sectionId]: groupId })); } catch { /* storage blocked: the page still works for this visit */ }
}
/** The group to show first: one named in the link (#group-…), else the one chosen last time, else the first. */
function firstGroup(section: LibrarySection) {
  const has = (id?: string) => Boolean(id && section.groups.some(group => group.id === id));
  const linked = typeof window === "undefined" ? undefined : window.location.hash.match(/^#group-(.+)$/)?.[1];
  if (has(linked)) return linked!;
  const remembered = readLocal<Record<string, string>>(GROUP_KEY, {})[section.id];
  if (has(remembered)) return remembered;
  return section.groups[0]?.id ?? "";
}

/**
 * The grid. `ask` is the "Not sure which group?" form, given a way to move a group into the large
 * tile, so its answer can open the group it suggests.
 */
export function SectionBento({ section, ask }: { section: LibrarySection; ask: (show: (groupId: string) => void) => ReactNode }) {
  const styles = BENTO[section.id];
  const [active, setActive] = useState(() => firstGroup(section));
  const [moves, setMoves] = useState(0);
  const [said, setSaid] = useState("");
  const title = useRef<HTMLHeadingElement>(null);
  const main = section.groups.find(group => group.id === active) ?? section.groups[0];
  if (!main) return null;
  const rest = section.groups.filter(group => group.id !== main.id);
  // Every large tile keeps its small card's pale colour, except Stroke's deep purple.
  const mainStyle = { ...styles[main.id], light: main.id !== "stroke" };

  const show = (groupId: string) => {
    const group = section.groups.find(candidate => candidate.id === groupId);
    if (!group) return;
    setActive(group.id);
    rememberGroup(section.id, group.id);
    setMoves(count => count + 1);
    setSaid(`Showing ${group.title}`);
    // Keyboard and screen-reader users land on the group they chose.
    requestAnimationFrame(() => {
      title.current?.focus({ preventScroll: true });
      const grid = title.current?.closest(".lib-bento");
      if (grid && grid.getBoundingClientRect().top < 0) {
        const still = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        grid.scrollIntoView({ behavior: still ? "auto" : "smooth", block: "start" });
      }
    });
  };
  const entering = moves > 0 ? " is-entering" : "";

  return <section className="lib-bento-wrap" aria-label="Groups in this section">
    <p className="lib-sr" aria-live="polite">{said}</p>
    <div className={`lib-bento${rest.length === 4 ? " is-few" : rest.length === 2 ? " is-trio" : rest.length === 1 ? " is-pair" : ""}`}>
      <article key={`${main.id}-${moves}`} id={`group-${main.id}`} className={`lib-bento-tile is-feature${mainStyle.light ? " is-light" : ""}${entering}`}
        style={mainStyle.light ? { background: mainStyle.tint, ["--ink" as string]: mainStyle.ink, ["--text" as string]: mainStyle.text, ["--muted" as string]: mainStyle.muted } as CSSProperties : { background: mainStyle.ink }} aria-labelledby="lib-bento-feature-title">
        <GroupSymbol style={mainStyle} colour={mainStyle.light ? mainStyle.ink : "#FFFFFF"} width={5} className="lib-bento-sym" />
        <div className="lib-bento-tags">
          {main.badge && <span className="is-hot">{main.badge}</span>}
          <span>{plural(main.conditions.length, "condition")}</span>
        </div>
        <h2 id="lib-bento-feature-title" ref={title} tabIndex={-1}>{main.title}</h2>
        <p>{main.blurb}</p>
        <ul role="list">
          {main.conditions.map(condition => <li key={condition.id}>
            <Link href={conditionHref(main.id, condition.id)}>{condition.title} <span aria-hidden="true">→</span></Link>
          </li>)}
        </ul>
      </article>

      {rest.map((group, index) => <SmallTile key={`${group.id}-${moves}`} group={group} style={styles[group.id]} delay={index * 0.04} entering={entering} onPick={() => show(group.id)} />)}

      <div className="lib-bento-ask">{ask(show)}</div>
    </div>
  </section>;
}

function SmallTile({ group, style, delay, entering, onPick }: { group: LibraryGroup; style: BentoStyle; delay: number; entering: string; onPick: () => void }) {
  const colours = { background: style.tint, color: style.text, animationDelay: `${delay}s` } as CSSProperties;
  return <article id={`group-${group.id}`} className={`lib-bento-tile is-small${entering}`} style={colours}>
    {/* The whole small tile is one button, laid over everything in it. */}
    <button type="button" className="lib-bento-pick" onClick={onPick} aria-label={`Show ${group.title} in the large tile`} />
    <GroupSymbol style={style} colour={style.ink} width={7} className="lib-bento-sym" />
    <h3>{group.title}</h3>
    <p style={{ color: style.muted }}>{style.short}</p>
    <div className="lib-bento-chips" aria-hidden="true">{style.chips.map(chip => <span key={chip}>{chip}</span>)}</div>
    <span className="lib-bento-more" aria-hidden="true">Tap to open it here →</span>
  </article>;
}
