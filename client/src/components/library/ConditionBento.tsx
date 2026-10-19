import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "wouter";
import type { LibraryItem, LibraryStory } from "@/content/library";
import { conditionKey, contentTitle, findStory, itemHref, itemMeta, sectionHref, storyHref, type ConditionPlace } from "@/lib/library";
import { libraryStore, type LibraryState } from "@/lib/library-store";
import { useLocal } from "@/lib/library-local";
import { GoalCards } from "./GoalCards";
import { BookmarkIcon, Crumbs, Faces, jumpTo } from "./parts";

// Version 2 of a condition page ("A · Bento, continued from the Brain page"): a dark header with
// blood flowing through branching arteries and one branch stopped by a clot, a floating bar of the
// page's parts, the Understand pieces as a bento (choose a small tile to move it into the large one),
// the outside resources as a strip, symbol cards for Explore, Live well and Watch & listen, then the
// page's own trusted sources and stories. Only the Ischaemic stroke page has it for now; a button at
// the top right switches between the two versions, and the choice is remembered on this device.

// ---- Which version a reader sees ----------------------------------------------------------------

const VERSIONS_KEY = "rehyn.library-condition-version.v1";

export const hasVersionTwo = (place: ConditionPlace) => place.group.id === "stroke" && place.condition.id === "ischaemic";

/** The version a reader chose for this condition (1 unless they switched), and a way to switch. */
export function useConditionVersion(place: ConditionPlace) {
  const [versions, setVersions] = useLocal<Record<string, number>>(VERSIONS_KEY, {});
  const key = conditionKey(place);
  const version = hasVersionTwo(place) && versions[key] === 2 ? 2 : 1;
  const switchTo = (next: 1 | 2) => {
    setVersions(previous => ({ ...previous, [key]: next }));
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  };
  return { version, switchTo };
}

export function VersionSwitch({ to, onSwitch, dark = false }: { to: 1 | 2; onSwitch: (to: 1 | 2) => void; dark?: boolean }) {
  return <button type="button" className={`lib-version-switch${dark ? " is-dark" : ""}`} onClick={() => onSwitch(to)}>
    Switch to Version {to}
  </button>;
}

// ---- Symbols ------------------------------------------------------------------------------------

const c = (x: number, y: number, r: number) => `M${x - r} ${y} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0`;
const e = (x: number, y: number, rx: number, ry: number) => `M${x - rx} ${y} a${rx} ${ry} 0 1 0 ${2 * rx} 0 a${rx} ${ry} 0 1 0 ${-2 * rx} 0`;

/** `d` is drawn in the tile's colour, `alt` in coral, `dot` filled coral. */
type Sym = { d: string; alt?: string; dot?: string };
const SYM: Record<string, Sym> = {
  brain: { d: "M100 45 C75 28, 42 44, 44 80 C32 96, 36 128, 56 138 C60 164, 90 170, 100 152 M100 45 C125 28, 158 44, 156 80 C168 96, 164 128, 144 138 C140 164, 110 170, 100 152 M20 186 C50 170, 66 150, 84 132 C96 120, 110 112, 128 100", dot: c(128, 100, 10) },
  heart: { d: "M100 170 C40 130, 20 90, 40 60 C60 30, 95 40, 100 66 C105 40, 140 30, 160 60 C180 90, 160 130, 100 170 Z", alt: "M46 104 H78 L90 82 L104 130 L116 92 L124 104 H154" },
  types: { d: "M30 30 H170 M30 58 H170 M30 86 H86 M114 86 H170 M30 114 H170 M30 142 H170 M30 170 H170", alt: "M100 116 q-8 14 0 24 q8 -10 0 -24", dot: `${c(100, 44, 10)} ${c(100, 156, 6)}` },
  scan: { d: `${c(100, 100, 70)} ${c(100, 100, 42)} M20 100 H44 M156 100 H180 M100 20 V44 M100 156 V180`, alt: "M58 100 H142", dot: c(100, 100, 8) },
  arm: { d: "M20 120 C50 110, 70 100, 92 104 L130 112 M130 112 C140 104, 152 106, 156 116 M130 112 C136 124, 150 126, 156 116 M128 140 H172 L178 180 H122 Z M140 140 a10 10 0 0 1 20 0", alt: "M24 92 q-10 -12 0 -24 M44 86 q-10 -12 0 -24" },
  rewire: { d: `M40 60 L90 40 L120 80 M100 140 L120 80 ${c(40, 60, 9)} ${c(90, 40, 9)} ${c(120, 80, 9)} ${c(100, 140, 9)} ${c(170, 150, 9)}`, alt: "M120 80 C150 100, 168 120, 170 141" },
  hand: { d: "M70 112 V58 a9 9 0 0 1 18 0 V104 M88 100 V44 a9 9 0 0 1 18 0 V100 M106 100 V50 a9 9 0 0 1 18 0 V104 M124 106 V70 a9 9 0 0 1 18 0 V140 C142 162, 132 176, 112 176 H92 C78 176, 70 166, 64 156 L40 120 a9 9 0 0 1 14 -10 L70 128 Z" },
  calendar: { d: "M36 48 H164 V170 H36 Z M36 80 H164 M70 32 V60 M130 32 V60 M60 104 H76 M92 104 H108 M124 104 H140 M60 136 H76 M92 136 H108", alt: "M120 134 l10 10 l22 -24" },
  steps: { d: `${e(64, 150, 14, 24)} ${e(104, 104, 14, 24)} ${e(144, 58, 14, 24)}` },
  words: { d: "M42 40 H130 a12 12 0 0 1 12 12 V96 a12 12 0 0 1 -12 12 H72 L50 128 V108 H42 a12 12 0 0 1 -12 -12 V52 a12 12 0 0 1 12 -12 Z M150 120 H160 a12 12 0 0 1 12 12 V160 a12 12 0 0 1 -12 12 H154 V188 L136 172 H96 a12 12 0 0 1 -12 -12 V140", alt: "M62 74 h1 M86 74 h1 M110 74 h1" },
  battery: { d: "M36 70 H152 V140 H36 Z M152 92 H166 V118 H152", alt: "M54 86 V124 M76 86 V124" },
  wheel: { d: `${c(100, 100, 66)} ${c(100, 100, 16)} M100 116 V166 M85 106 L40 118 M115 106 L160 118` },
  shield: { d: "M100 28 L160 50 V100 C160 140, 132 166, 100 178 C68 166, 40 140, 40 100 V50 Z", alt: "M78 120 L120 78 a14 14 0 0 1 20 20 L98 140 a14 14 0 0 1 -20 -20 Z M99 99 L119 119" },
  work: { d: "M34 70 H166 V162 H34 Z M78 70 V50 H122 V70 M34 108 H166", alt: "M92 108 V122 H108 V108" },
  mood: { d: "M50 166 H140 a28 28 0 0 0 0 -56 a36 36 0 0 0 -68 6 a24 24 0 0 0 -22 50 Z", alt: `${c(130, 70, 24)} M130 26 V34 M166 42 L160 48 M176 72 H168` },
  cup: { d: "M46 72 H148 L138 172 H56 Z M148 92 H160 a20 20 0 0 1 0 40 H144", alt: "M80 54 q-10 -14 0 -28 M106 54 q-10 -14 0 -28" },
  care: { d: "M20 122 C40 152, 70 168, 100 168 C130 168, 160 152, 180 122 M20 122 L42 110 L70 142 M180 122 L158 110 L130 142", alt: "M100 120 C80 104, 62 92, 62 74 a19 19 0 0 1 38 -8 a19 19 0 0 1 38 8 C138 92, 120 104, 100 120 Z" },
  page: { d: "M56 30 H124 L150 56 V170 H56 Z M124 30 V56 H150 M76 92 H130 M76 116 H130 M76 140 H112" },
};

type Look = { sym: string; ink: string; tint: string; text: string };
const LOOKS: Record<string, Look> = {
  "what-happens": { sym: "brain", ink: "#4A3F9C", tint: "#EEEBFA", text: "#2F2770" },
  "why-me": { sym: "heart", ink: "#A8402B", tint: "#FBEDE7", text: "#7E2F1F" },
  types: { sym: "types", ink: "#1F6476", tint: "#E4F1F4", text: "#164E5C" },
  scans: { sym: "scan", ink: "#34509E", tint: "#E7ECFB", text: "#233A78" },
  "heavy-side": { sym: "arm", ink: "#8A5A12", tint: "#FBF0DC", text: "#6B450C" },
  rewiring: { sym: "rewire", ink: "#4A3F9C", tint: "#EEEBFA", text: "#2F2770" },
  "arm-hand": { sym: "hand", ink: "#2F6851", tint: "#E8F3EC", text: "#1F4A3A" },
  "first-three-months": { sym: "calendar", ink: "#8A5A12", tint: "#FBF0DC", text: "#6B450C" },
  walking: { sym: "steps", ink: "#34509E", tint: "#E7ECFB", text: "#233A78" },
  words: { sym: "words", ink: "#6A3E9E", tint: "#F1E9FB", text: "#4E2C7A" },
  fatigue: { sym: "battery", ink: "#A8402B", tint: "#FBEDE7", text: "#7E2F1F" },
  driving: { sym: "wheel", ink: "#34509E", tint: "#E7ECFB", text: "#233A78" },
  prevention: { sym: "shield", ink: "#2F6851", tint: "#E8F3EC", text: "#1F4A3A" },
  work: { sym: "work", ink: "#8A5A12", tint: "#FBF0DC", text: "#6B450C" },
  mood: { sym: "mood", ink: "#2F4FA3", tint: "#E6ECF8", text: "#233A78" },
  swallowing: { sym: "cup", ink: "#A8402B", tint: "#FBEDE7", text: "#7E2F1F" },
  carers: { sym: "care", ink: "#6A3E9E", tint: "#F1E9FB", text: "#4E2C7A" },
};
const LOOK_CYCLE: Look[] = [LOOKS["what-happens"], LOOKS["why-me"], LOOKS.types, LOOKS.scans, LOOKS["heavy-side"]];
const lookFor = (item: LibraryItem, index: number): Look => LOOKS[item.id] ?? { ...LOOK_CYCLE[index % LOOK_CYCLE.length], sym: "page" };

function SymbolArt({ name, colour, accent, width, className }: { name: string; colour: string; accent: string; width: number; className: string }) {
  const sym = SYM[name] ?? SYM.page;
  return <svg className={className} aria-hidden="true" focusable="false" viewBox="0 0 200 200" fill="none" stroke={colour} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round">
    <path d={sym.d} />
    {sym.alt && <path d={sym.alt} stroke={accent} />}
    {sym.dot && <path d={sym.dot} fill={accent} stroke="none" />}
  </svg>;
}

// ---- The header -------------------------------------------------------------------------------

function Hero({ place, state, onSwitch }: { place: ConditionPlace; state: LibraryState; onSwitch: (to: 1 | 2) => void }) {
  const { section, group, condition } = place;
  const key = conditionKey(place);
  const saved = state.saved.includes(key);
  return <header className="lib-v2-hero">
    <svg className="lib-v2-hero-art" aria-hidden="true" focusable="false" viewBox="0 0 1280 440" preserveAspectRatio="xMidYMid slice">
      <g fill="none" stroke="#3E3390" strokeWidth="16" strokeLinecap="round" opacity=".9">
        <path d="M-20 330 C200 310, 320 250, 480 240 S760 210, 900 150 S1120 90, 1300 70" />
        <path d="M480 240 C560 290, 700 320, 860 330 S1120 350, 1300 360" />
        <path d="M900 150 C960 200, 1060 230, 1180 240" />
        <path d="M700 220 C740 160, 820 120, 900 100 S1040 70, 1100 40" />
        <path d="M300 300 C360 360, 440 400, 560 420" />
      </g>
      <g fill="none" stroke="#E07A5F" strokeWidth="5" strokeLinecap="round">
        <path className="lib-v2-flow" d="M-20 330 C200 310, 320 250, 480 240 S760 210, 900 150 S1120 90, 1300 70" />
        <path className="lib-v2-flow is-slow" d="M480 240 C560 290, 700 320, 860 330 S1120 350, 1300 360" />
        <path className="lib-v2-flow" d="M900 150 C960 200, 1040 222, 1150 236" />
        <path className="lib-v2-flow is-slow" d="M700 220 C740 160, 820 120, 900 100 S1040 70, 1100 40" />
        <path className="lib-v2-flow is-slow" d="M300 300 C360 360, 440 400, 560 420" />
      </g>
      <circle className="lib-v2-ring" cx="1166" cy="238" r="10" fill="none" stroke="#F2B8A5" strokeWidth="2" />
      <circle className="lib-v2-clot" cx="1166" cy="238" r="11" fill="#7A2A1C" />
    </svg>
    <div className="lib-v2-hero-inner">
      <div className="lib-v2-hero-top">
        <Crumbs trail={[{ label: "Library", href: "/" }, { label: section.title, href: sectionHref(section) }, { label: group.title, href: `${sectionHref(section)}#group-${group.id}` }, { label: condition.title }]} />
        <VersionSwitch to={1} onSwitch={onSwitch} dark />
      </div>
      <div className="lib-v2-hero-row">
        <div className="lib-v2-hero-words">
          <h1>{condition.title}</h1>
          {condition.summary && <p>{condition.summary}</p>}
          {condition.facts && <ul className="lib-v2-facts" role="list">{condition.facts.map(fact => <li key={fact}>{fact}</li>)}</ul>}
        </div>
        <button type="button" className="lib-v2-save" aria-pressed={saved} onClick={() => libraryStore.toggleSaved(key)}><BookmarkIcon filled={saved} />{saved ? "Saved to my pages" : "Save to my pages"}</button>
      </div>
    </div>
  </header>;
}

// ---- The bar of the page's parts --------------------------------------------------------------

type Part = { id: string; label: string; story?: boolean };
function PartsBar({ parts }: { parts: Part[] }) {
  const [active, setActive] = useState(parts[0]?.id);
  const key = parts.map(part => part.id).join(",");
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const seen = new Map<string, boolean>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => seen.set(entry.target.id, entry.isIntersecting));
      const first = parts.find(part => seen.get(part.id));
      if (first) setActive(first.id);
    }, { rootMargin: "-20% 0px -65% 0px" });
    parts.forEach(part => { const node = document.getElementById(part.id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps
  return <nav aria-label="On this page" className="lib-v2-parts">
    <div className="lib-v2-parts-inner">
      {parts.map(part => <a key={part.id} href={`#${part.id}`} onClick={jumpTo(part.id)} className={`${active === part.id ? "is-active" : ""}${part.story ? " is-story" : ""}`} aria-current={active === part.id ? "true" : undefined}>{part.label}</a>)}
    </div>
  </nav>;
}

// ---- Understand as a bento --------------------------------------------------------------------

function Understand({ place, items, outside }: { place: ConditionPlace; items: LibraryItem[]; outside: LibraryItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [moves, setMoves] = useState(0);
  const [said, setSaid] = useState("");
  const main = items.find(item => item.id === active) ?? items[0];
  if (!main) return null;
  const look = lookFor(main, items.indexOf(main));
  const rest = items.filter(item => item.id !== main.id);
  const felt = main.feltToo;
  const feltStories = felt ? felt.storyIds.map(id => findStory(id)).filter((story): story is LibraryStory => Boolean(story)) : [];
  const entering = moves > 0 ? " is-entering" : "";
  const show = (item: LibraryItem) => {
    setActive(item.id);
    setMoves(count => count + 1);
    setSaid(`Showing ${item.title}`);
    requestAnimationFrame(() => document.getElementById("lib-v2-feature-title")?.focus({ preventScroll: true }));
  };

  return <>
    <p className="lib-sr" aria-live="polite">{said}</p>
    <div className="lib-v2-bento">
      <article key={`${main.id}-${moves}`} className={`lib-v2-tile is-feature${entering}`} style={{ background: look.ink }} aria-labelledby="lib-v2-feature-title">
        <SymbolArt name={look.sym} colour="#FFFFFF" accent="#F2B8A5" width={5} className="lib-v2-sym" />
        <div className="lib-v2-tags">
          <span>{itemMeta(main)}</span>
        </div>
        <h3 id="lib-v2-feature-title" tabIndex={-1}>{main.title}</h3>
        {main.blurb && <p>{main.blurb}</p>}
        {felt && feltStories.length > 0 && <Link href={storyHref(felt.storyIds[0], felt.chapter)} className="lib-v2-felt"><Faces stories={feltStories} size={22} />{felt.label} →</Link>}
        <Link href={itemHref({ ...place, item: main })} className="lib-v2-read" style={{ color: look.ink }}>Read the answer <span aria-hidden="true">→</span></Link>
      </article>

      {rest.map((item, index) => {
        const tile = lookFor(item, items.indexOf(item));
        return <article key={`${item.id}-${moves}`} className={`lib-v2-tile is-small${entering}`} style={{ background: tile.tint, color: tile.text, animationDelay: `${index * 0.05}s` } as CSSProperties}>
          <button type="button" className="lib-v2-pick" onClick={() => show(item)} aria-label={`Show ${item.title} in the large tile`} />
          <SymbolArt name={tile.sym} colour={tile.ink} accent="#D9674A" width={7} className="lib-v2-sym" />
          <span className="lib-v2-small-meta">{itemMeta(item)}</span>
          <h3>{item.title}</h3>
          <span className="lib-v2-more" aria-hidden="true">Tap to open it here →</span>
        </article>;
      })}

      {outside.length > 0 && <a href="#outside" onClick={jumpTo("outside")} className="lib-v2-tile is-count">
        <span className="lib-v2-count">{outside.length}</span>
        <h3>Checked resources from trusted places</h3>
        <span className="lib-v2-count-note">{outside.map(item => item.publisher).filter((publisher, at, all): publisher is string => Boolean(publisher) && all.indexOf(publisher) === at).slice(0, 3).join(", ")} and more.</span>
        <span className="lib-v2-more">See them below →</span>
      </a>}
    </div>

    {outside.length > 0 && <ul id="outside" className="lib-v2-strip" role="list" aria-label="Checked resources from trusted places">
      {outside.map(item => <li key={item.id}>
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="lib-v2-src">
          <span className="lib-v2-src-kind">{[contentKind(item), item.date].filter(Boolean).join(" · ")}<span aria-hidden="true">↗</span></span>
          <b>{item.title}</b>
          <span className="lib-v2-src-by">{item.publisher}</span>
          <span className="lib-sr">(opens in a new tab)</span>
        </a>
      </li>)}
    </ul>}
  </>;
}

const contentKind = (item: LibraryItem) => itemMeta(item, true, false).split(" · ")[0];

// ---- Live well, Watch & listen (Explore is GoalCards.tsx) -------------------------------------

// Live well: one row per piece, with a small icon, a line saying what is in it, and a tag or an
// arrow. The carers' page is the dark row. The lines and tags are this page's own.

const LW_ICON: Record<string, ReactNode> = {
  driving: <path d="M5 16V11l2-4.5h10L19 11v5M5 16h14M5 16v2M19 16v2M5 11h14M8 13.5h.01M16 13.5h.01" />,
  prevention: <><path d="M12 3l7.5 4.25v8.5L12 20l-7.5-4.25v-8.5Z" /><path d="M12 8.5v7M8.5 12h7" /></>,
  work: <><rect x="4" y="7.5" width="16" height="11" rx="2" /><path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5" /></>,
  mood: <path d="M4 14c2.2-4 4.4-4 6.4 0s4.2 4 6.4 0c.9-1.6 1.9-2.4 3.2-2.4" />,
  swallowing: <><path d="M4.5 10h15l-1.6 8.2a1.5 1.5 0 0 1-1.5 1.3H7.6a1.5 1.5 0 0 1-1.5-1.3Z" /><path d="M9 10l3-5.5 3 5.5M10 14v2.5M14 14v2.5" /></>,
  carers: <><circle cx="9" cy="8.5" r="2.8" /><circle cx="16.5" cy="9.5" r="2.2" /><path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5M14.5 14.4c.6-.3 1.3-.4 2-.4 2.2 0 3.7 1.6 4 4.5" /></>,
};

type LiveWellLine = { line?: string; tag?: string; dark?: boolean };
const LW_LINES: Record<string, LiveWellLine> = {
  driving: { line: "DVLA, your doctor, and the form", tag: "Try this week" },
  prevention: { line: "the one most people save", tag: "Most saved" },
  work: { line: "phased returns and what to say" },
  mood: { line: "read by many carers too" },
  carers: { line: "share it with them", dark: true },
};
function LiveWell({ place, items }: { place: ConditionPlace; items: LibraryItem[] }) {
  return <ul className="lib-v2-lwell-list" role="list">
      {items.map((item, index) => {
        const lines = LW_LINES[item.id] ?? {};
        const icon = LW_ICON[item.id];
        return <li key={item.id}>
          <Link href={itemHref({ ...place, item })} className={`lib-v2-lwell-row${lines.dark ? " is-dark" : ""}`}>
            <span className="lib-v2-lwell-ico" aria-hidden="true">
              {icon
                ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" focusable="false">{icon}</svg>
                : <SymbolArt name={lookFor(item, index).sym} colour="currentColor" accent="currentColor" width={12} className="lib-v2-lwell-sym" />}
            </span>
            <span className="lib-v2-lwell-words">
              <b>{item.title}</b>
              <span>{[item.minutes ? `${item.minutes} min` : null, lines.line].filter(Boolean).join(" · ")}</span>
            </span>
            {lines.tag ? <span className="lib-v2-lwell-tag">{lines.tag}</span> : <span className="lib-v2-lwell-go" aria-hidden="true">→</span>}
          </Link>
        </li>;
      })}
  </ul>;
}

const WATCH_BG = ["#231C5C", "#2F2770", "#1F4A5C"];
function WatchArt({ item }: { item: LibraryItem }) {
  if (item.kind === "podcast") return <svg className="lib-v2-wl-art" aria-hidden="true" focusable="false" viewBox="0 0 120 60"><g fill="#F2B8A5">
    {[4, 24, 44, 64, 84].map((x, index) => <rect key={x} className="lib-v2-bar" x={x} y="10" width="10" height="50" rx="5" style={{ animationDelay: `${-index * 0.18}s` }} />)}
  </g></svg>;
  if (item.kind === "audio") return <svg className="lib-v2-wl-art" aria-hidden="true" focusable="false" viewBox="0 0 120 70">
    <circle cx="35" cy="35" r="32" fill="none" stroke="#9FD3DE" strokeOpacity=".35" strokeWidth="2" />
    <circle className="lib-v2-breath" cx="35" cy="35" r="30" fill="#9FD3DE" fillOpacity=".55" />
  </svg>;
  return <svg className="lib-v2-wl-art" aria-hidden="true" focusable="false" viewBox="0 0 200 120" fill="none" stroke="#F2B8A5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 10 H190 V110 H10 Z M10 30 H190 M10 90 H190 M40 10 V30 M80 10 V30 M120 10 V30 M160 10 V30 M40 90 V110 M80 90 V110 M120 90 V110 M160 90 V110" />
    <path className="lib-v2-playpulse" d="M88 44 L120 60 L88 76 Z" fill="#F2B8A5" />
  </svg>;
}

function WatchTiles({ place, items }: { place: ConditionPlace; items: LibraryItem[] }) {
  return <ul className="lib-v2-watch" role="list">
    {items.map((item, index) => {
      const kind = contentKind(item);
      return <li key={item.id}>
        <Link href={itemHref({ ...place, item })} className="lib-v2-wl" style={{ background: WATCH_BG[index % WATCH_BG.length] }}>
          <WatchArt item={item} />
          <span className="lib-v2-wl-kind">{[kind, item.minutes ? `${item.minutes} min` : null].filter(Boolean).join(" · ")}</span>
          <b>{item.title}</b>
          {item.extra && <span className="lib-v2-wl-extra">{item.extra.charAt(0).toUpperCase() + item.extra.slice(1)}</span>}
        </Link>
      </li>;
    })}
  </ul>;
}

// ---- The page ---------------------------------------------------------------------------------

type Slots = { companion?: ReactNode; sources: ReactNode; stories: ReactNode; ask: ReactNode; related: ReactNode; footer: string; purpose: (part: "understand" | "recover" | "liveWell" | "watch") => string };

export function ConditionBento({ place, state, onSwitch, slots }: { place: ConditionPlace; state: LibraryState; onSwitch: (to: 1 | 2) => void; slots: Slots }) {
  const { condition } = place;
  const content = condition.content!;
  const ours = content.understand.filter(item => !item.url);
  const outside = content.understand.filter(item => item.url);
  const parts: Part[] = [
    { id: "understand", label: "Understand" },
    { id: "recover", label: contentTitle("recover", condition) },
    { id: "livewell", label: "Live well" },
    { id: "watch", label: "Watch & listen" },
    { id: "sources", label: "Trusted sources" },
    { id: "stories", label: "Stories", story: true },
  ];
  const head = (id: string, title: string, note?: string) => <div className="lib-v2-head">
    <h2 id={`h-${id}`}>{title}</h2>
    {note && <span>{note}</span>}
  </div>;

  return <div className="lib-page lib-condition lib-v2">
    <Hero place={place} state={state} onSwitch={onSwitch} />
    <PartsBar parts={parts} />
    <div className="lib-v2-layout">
      <main className="lib-v2-main">
        {slots.companion}
        <section id="understand" aria-labelledby="h-understand" className="lib-v2-part">
          {head("understand", "Understand", slots.purpose("understand"))}
          <Understand place={place} items={ours} outside={outside} />
        </section>
        <section id="recover" aria-labelledby="h-recover" className="lib-v2-part">
          {head("recover", contentTitle("recover", condition), slots.purpose("recover"))}
          <GoalCards place={place} items={content.recover} />
        </section>
        <section id="livewell" aria-labelledby="h-livewell" className="lib-v2-part">
          {head("livewell", "Live well", slots.purpose("liveWell"))}
          <LiveWell place={place} items={content.liveWell} />
        </section>
        <section id="watch" aria-labelledby="h-watch" className="lib-v2-part">
          {head("watch", "Watch & listen", slots.purpose("watch"))}
          <WatchTiles place={place} items={content.watch} />
        </section>
        {slots.sources}
        {slots.stories}
      </main>
      <aside className="lib-v2-aside" aria-label="Alongside this page">
        {slots.ask}
        {slots.related}
      </aside>
    </div>
    <footer className="lib-wrap lib-foot"><span>{slots.footer}</span></footer>
  </div>;
}
