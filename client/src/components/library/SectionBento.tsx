import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "wouter";
import type { LibraryGroup, LibrarySection } from "@/content/library";
import { conditionHref, sectionStories } from "@/lib/library";
import { Crumbs } from "./parts";

// The Brain & nervous system page as a "bento" (brain-section-bento.html): a dark header with
// drifting brain-fold lines, then one group in a large tile and the others in small tiles. Choosing
// a small tile (anywhere on it) moves that group into the large tile; its conditions are links only
// there. The colours, symbols and short chip labels are this page's own; everything else comes
// from the section's groups in content/library.ts.

type BentoStyle = { ink: string; tint: string; text: string; muted: string; short: string; chips: string[]; symbol: ReactNode };

const BRAIN: Record<string, BentoStyle> = {
  stroke: { ink: "#4A3F9C", tint: "#EEEBFA", text: "#2F2770", muted: "#4D4580", short: "When blood stops reaching part of the brain.", chips: ["Ischaemic", "Haemorrhagic", "TIA", "Under 50"], symbol: <>
    <path d="M100 45 C75 28, 42 44, 44 80 C32 96, 36 128, 56 138 C60 164, 90 170, 100 152" />
    <path d="M100 45 C125 28, 158 44, 156 80 C168 96, 164 128, 144 138 C140 164, 110 170, 100 152" />
    <path d="M20 186 C50 170, 66 150, 84 132 C96 120, 110 112, 128 100" />
    <circle cx="128" cy="100" r="10" fill="#F2B8A5" stroke="none" />
  </> },
  dementia: { ink: "#6A3E9E", tint: "#F1E9FB", text: "#4E2C7A", muted: "#5B4A72", short: "Memory, thinking and language changes beyond ordinary ageing.", chips: ["Alzheimer's", "Vascular", "Lewy body", "Mild cognitive impairment"], symbol: <>
    <path d="M82 176 V142 L56 136 L70 110 C44 70, 70 32, 112 32 C152 32, 172 64, 162 104 L172 124 L152 130 L148 176" />
    <path d="M114 86 a8 8 0 1 1 8 8 a16 16 0 1 1 -16 -16 a24 24 0 1 1 24 24" />
  </> },
  parkinsons: { ink: "#34509E", tint: "#E7ECFB", text: "#233A78", muted: "#3E4C78", short: "Tremor, stiffness and slowness, and what helps.", chips: ["Parkinson's disease", "Essential tremor", "Dystonia"], symbol: <>
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

const BENTO: Record<string, Record<string, BentoStyle>> = { "brain-nervous-system": BRAIN };

/** Whether a section has the bento layout: every one of its groups has a style. */
export const hasBento = (section: LibrarySection) => Boolean(BENTO[section.id]) && section.groups.every(group => BENTO[section.id][group.id]);

const GroupSymbol = ({ style, colour, width, className }: { style: BentoStyle; colour: string; width: number; className: string }) =>
  <svg className={className} aria-hidden="true" focusable="false" viewBox="0 0 200 200" fill="none" stroke={colour} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round">{style.symbol}</svg>;

const plural = (count: number, word: string) => `${count} ${word}${count === 1 ? "" : "s"}`;

export function BentoHero({ section }: { section: LibrarySection }) {
  const conditions = section.groups.reduce((sum, group) => sum + group.conditions.length, 0);
  const stories = sectionStories(section.id).length;
  return <header className="lib-bento-hero">
    <svg className="lib-bento-hero-art" aria-hidden="true" focusable="false" viewBox="0 0 1280 360" preserveAspectRatio="xMidYMid slice">
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
    </svg>
    <div className="lib-bento-hero-inner">
      <Crumbs className="lib-bento-crumbs" trail={[{ label: "Library", href: "/" }, { label: section.title }]} />
      <h1>{section.title}</h1>
      <p>{section.blurb}</p>
      <div className="lib-bento-stats">
        <span>{plural(section.groups.length, "group")}</span>
        <span>{plural(conditions, "condition")}</span>
        {stories > 0 && <span>{stories} {stories === 1 ? "story" : "stories"}</span>}
      </div>
    </div>
  </header>;
}

/**
 * The grid. `ask` is the "Not sure which group?" form, given a way to move a group into the large
 * tile, so its answer can open the group it suggests.
 */
export function SectionBento({ section, ask }: { section: LibrarySection; ask: (show: (groupId: string) => void) => ReactNode }) {
  const styles = BENTO[section.id];
  const [active, setActive] = useState(section.groups[0]?.id ?? "");
  const [moves, setMoves] = useState(0);
  const [said, setSaid] = useState("");
  const title = useRef<HTMLHeadingElement>(null);
  const main = section.groups.find(group => group.id === active) ?? section.groups[0];
  if (!main) return null;
  const rest = section.groups.filter(group => group.id !== main.id);
  const mainStyle = styles[main.id];

  const show = (groupId: string) => {
    const group = section.groups.find(candidate => candidate.id === groupId);
    if (!group) return;
    setActive(group.id);
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
    <div className="lib-bento">
      <article key={`${main.id}-${moves}`} id={`group-${main.id}`} className={`lib-bento-tile is-feature${entering}`} style={{ background: mainStyle.ink }} aria-labelledby="lib-bento-feature-title">
        <GroupSymbol style={mainStyle} colour="#FFFFFF" width={5} className="lib-bento-sym" />
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
