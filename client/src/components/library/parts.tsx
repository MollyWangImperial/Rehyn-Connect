import { Fragment, useMemo, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { StrokePassport } from "./StrokePassport";
import { Link } from "wouter";
import AliraAvatar from "@/components/AliraAvatar";
import { splitSentences, useReadAloud } from "@/lib/alira-read-aloud";
import type { Hue, ItemKind, LibraryItem, LibraryLetter, LibraryStory, SectionIcon, TrustedSource } from "@/content/library";
import { itemMeta } from "@/lib/library";

// Small pieces the Library's pages share: icons, the Alira mark, breadcrumbs, cards and the
// "read this page to me" button.

type IconProps = { size?: number; className?: string };
const stroke = (size: number, width = 2) => ({ width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: width, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true, focusable: false });

export const ArrowIcon = ({ size = 16 }: IconProps) => <svg {...stroke(size, 2.3)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const ChevronIcon = ({ size = 16 }: IconProps) => <svg {...stroke(size, 2.2)}><path d="m9 6 6 6-6 6" /></svg>;
export const BackIcon = ({ size = 20 }: IconProps) => <svg {...stroke(size, 2.4)}><path d="m15 6-6 6 6 6" /></svg>;
export const SearchIcon = ({ size = 20 }: IconProps) => <svg {...stroke(size)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
export const PlayIcon = ({ size = 18 }: IconProps) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M8 5v14l11-7z" /></svg>;
export const PauseIcon = ({ size = 18 }: IconProps) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><rect x="6" y="5" width="4" height="14" rx="1.2" /><rect x="14" y="5" width="4" height="14" rx="1.2" /></svg>;
export const HeadphonesIcon = ({ size = 16 }: IconProps) => <svg {...stroke(size)}><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>;
export const BookmarkIcon = ({ size = 16, filled = false }: IconProps & { filled?: boolean }) => <svg {...stroke(size)} fill={filled ? "currentColor" : "none"}><path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>;
export const ExternalIcon = ({ size = 14 }: IconProps) => <svg {...stroke(size)}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6M10 14 21 3" /></svg>;
export const DocIcon = ({ size = 40 }: IconProps) => <svg {...stroke(size, 1.8)}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8" /></svg>;
export const MailIcon = ({ size = 16 }: IconProps) => <svg {...stroke(size)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
export const ClockIcon = ({ size = 16 }: IconProps) => <svg {...stroke(size)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
export const TickIcon = ({ size = 14 }: IconProps) => <svg {...stroke(size, 2.4)}><path d="m5 12 4 4L19 6" /></svg>;
const MicIcon = ({ size = 20 }: IconProps) => <svg {...stroke(size)}><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0M12 19v3" /></svg>;
const CameraIcon = ({ size = 20 }: IconProps) => <svg {...stroke(size)}><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3" /></svg>;
const ExerciseIcon = ({ size = 40 }: IconProps) => <svg {...stroke(size, 1.8)}><path d="M6 5v14M18 5v14M3 8v8M21 8v8M6 12h12" /></svg>;
const SpeechIcon = ({ size = 40 }: IconProps) => <svg {...stroke(size, 1.8)}><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.4A8 8 0 1 1 21 12z" /></svg>;

// The sections' symbols are the supplied outline drawings (public/library-icons, from the Rehyn
// library icon pack): the coloured symbol alone on a transparent square, with some padding of its
// own, so each sits a little larger than the old drawn glyph did. They are decorative: the card's
// title beside each one says the same thing.
const SECTION_IMAGES: Record<SectionIcon, string> = {
  brain: "/library-icons/brain-nervous-system.png",
  heart: "/library-icons/heart-lungs.png",
  drop: "/library-icons/diabetes-metabolism.png",
  bone: "/library-icons/bones-joints-muscles.png",
  ribbon: "/library-icons/cancer-recovery.png",
  mind: "/library-icons/mind-mood.png",
  kidney: "/library-icons/kidneys-liver-digestion.png",
};
export const SectionGlyph = ({ icon, size = 44 }: { icon: SectionIcon; size?: number }) => <img className="lib-section-img" src={SECTION_IMAGES[icon]} alt="" width={size} height={size} decoding="async" />;

/** The section's colours as CSS variables, for the cards and headers tinted by them. */
export const hueStyle = (hue: Hue): CSSProperties => ({ "--lib-tint": hue.tint, "--lib-ink": hue.ink } as CSSProperties);

/** Alira's own animated mark, the one used across the app; it moves while she is reading. */
export const AliraMark = ({ reading = false, className = "" }: { reading?: boolean; className?: string }) =>
  <span className={`lib-alira${reading ? " is-reading" : ""} ${className}`} aria-hidden="true"><AliraAvatar /></span>;

/** A face stands in for nobody real: the story's initial on its own colour. */
export const Initial = ({ story, size = 36, className = "" }: { story: Pick<LibraryStory, "name" | "tint">; size?: number; className?: string }) =>
  <span className={`lib-initial ${className}`} aria-hidden="true" style={{ width: size, height: size, background: story.tint.tint, color: story.tint.ink, fontSize: Math.round(size * 0.4) }}>{story.name.slice(0, 1)}</span>;

export const Faces = ({ stories, size = 24 }: { stories: LibraryStory[]; size?: number }) =>
  <span className="lib-faces" aria-hidden="true">{stories.map(story => <Initial key={story.id} story={story} size={size} />)}</span>;

export type Crumb = { label: string; href?: string };
export function Crumbs({ trail, className = "" }: { trail: Crumb[]; className?: string }) {
  return <nav aria-label="Breadcrumb" className={`lib-crumbs ${className}`}>
    {trail.map((crumb, index) => <Fragment key={`${crumb.label}-${index}`}>
      {index > 0 && <ChevronIcon size={14} />}
      {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
    </Fragment>)}
  </nav>;
}

/** Scrolls to a part of the same page without changing the address, and moves focus there. */
export function jumpTo(id: string) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(id);
    if (!target || event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    const still = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: still ? "auto" : "smooth", block: "start" });
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  };
}

// ------------------------------------------------------------------------------------------------
// Reading a page aloud.

/**
 * "Alira, read this page to me". `lines` must be memoised: a new array starts the reading over.
 * While she reads, the sentence she is on is shown under the button.
 */
export function ReadAloudButton({ lines, label = "Read this page to me", className = "" }: { lines: string[]; label?: string; className?: string }) {
  const reading = useReadAloud(lines, true);
  const now = reading.index >= 0 ? lines[reading.index] : "";
  const buttonLabel = reading.playing ? "Pause reading" : reading.index > 0 ? "Carry on reading" : label;
  return <div className={`lib-read ${className}`}>
    <button type="button" className="lib-read-button" onClick={reading.toggle} aria-pressed={reading.playing}>
      <AliraMark reading={reading.playing} />
      <span>{buttonLabel}</span>
      {reading.playing ? <PauseIcon size={16} /> : null}
    </button>
    {now && <p className="lib-read-now" aria-hidden="true">{now}</p>}
    <p className="lib-sr" role="status">{reading.note}</p>
  </div>;
}

// ------------------------------------------------------------------------------------------------
// Cards for the pieces on a condition page.

const KIND_ART: Record<ItemKind, { tint: string; ink: string; icon: ReactNode; play?: boolean }> = {
  video: { tint: "#EEEBFA", ink: "#4A3F9C", icon: null, play: true },
  animation: { tint: "#E6F0FA", ink: "#2B5A8A", icon: null, play: true },
  exercise: { tint: "#F1F7F2", ink: "#2F6851", icon: <ExerciseIcon /> },
  article: { tint: "#FBF0DC", ink: "#8A5A12", icon: <DocIcon /> },
  podcast: { tint: "#FCEBE6", ink: "#A8402B", icon: <MicIcon size={40} /> },
  audio: { tint: "#E8EBF8", ink: "#35458C", icon: <HeadphonesIcon size={40} /> },
  news: { tint: "#E4F3F1", ink: "#1F6B64", icon: <DocIcon /> },
  research: { tint: "#EEF3DF", ink: "#4F6A14", icon: <DocIcon /> },
};
const SMALL_ICON: Record<ItemKind, ReactNode> = {
  video: <CameraIcon />, animation: <CameraIcon />, exercise: <ExerciseIcon size={20} />, article: <DocIcon size={20} />, podcast: <MicIcon />, audio: <HeadphonesIcon size={20} />, news: <DocIcon size={20} />, research: <DocIcon size={20} />,
};

/** The art at the top of a media card: a play button for films, an icon for everything else. */
export function KindArt({ item }: { item: LibraryItem }) {
  const art = KIND_ART[item.kind];
  const speech = item.kind === "article" && item.keywords?.includes("aphasia");
  return <span className="lib-art" aria-hidden="true" style={{ background: speech ? "#E8EBF8" : art.tint, color: speech ? "#35458C" : art.ink }}>
    {art.play ? <span className="lib-art-play"><PlayIcon /></span> : speech ? <SpeechIcon /> : art.icon}
  </span>;
}

export function KindBadge({ kind }: { kind: ItemKind }) {
  const art = KIND_ART[kind];
  return <span className="lib-kind-badge" aria-hidden="true" style={{ background: art.tint, color: art.ink }}>{SMALL_ICON[kind]}</span>;
}

export const ReadMark = () => <span className="lib-readmark"><TickIcon />Read</span>;

/** "Coming soon", said plainly, for a piece that is not written yet (a piece's own page still says it; the condition pages no longer do). */
export const SoonTag = () => <span className="lib-soon">Coming soon</span>;

/**
 * The line under a piece: its type and, where asked for, its length and who it is by. The "Coming
 * soon" tag that used to follow pieces without words yet was removed from the condition pages in
 * review; a piece without a page still opens its honest note.
 */
export function MetaLine({ item, read, readable, minutes = true }: { item: LibraryItem; read: boolean; readable: boolean; minutes?: boolean }) {
  return <span className="lib-meta">
    {read && <ReadMark />}
    <span>{itemMeta(item, true, minutes)}</span>
    {item.url && <span className="lib-sr">(opens in a new tab)</span>}
  </span>;
}

function PassportCard({ source, compact }: { source: TrustedSource; compact: boolean }) {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" className={`lib-source is-tool${compact ? " is-compact" : ""}`} onClick={() => setOpen(true)} aria-haspopup="dialog">
      <span className="lib-source-name">{source.name}<DocIcon size={14} /></span>
      {!compact && <span className="lib-source-note">{source.note}</span>}
    </button>
    {open && <StrokePassport open={open} onClose={() => setOpen(false)} />}
  </>;
}

export function SourceCard({ source, compact = false }: { source: TrustedSource; compact?: boolean }) {
  if (source.tool === "stroke-passport") return <PassportCard source={source} compact={compact} />;
  if (!source.url) {
    return <div className={`lib-source is-soon${compact ? " is-compact" : ""}`}>
      <span className="lib-source-name">{source.name}{source.printable ? <DocIcon size={14} /> : null}</span>
      {!compact && <span className="lib-source-note">{source.note}</span>}
    </div>;
  }
  return <a className={`lib-source${compact ? " is-compact" : ""}`} href={source.url} target="_blank" rel="noopener noreferrer">
    <span className="lib-source-name">{source.name}<ExternalIcon /></span>
    {!compact && <span className="lib-source-note">{source.note}</span>}
    <span className="lib-sr"> (opens in a new tab)</span>
  </a>;
}

const hostOf = (url: string) => { try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return url; } };

/**
 * One trusted source as a line of a reference list: organisation — title — what it is — link. The
 * stroke passport is Rehyn's own printable, so its line says so and opens it rather than a website.
 */
export function SourceRow({ source }: { source: TrustedSource }) {
  const [open, setOpen] = useState(false);
  if (source.tool === "stroke-passport") {
    return <li className="lib-ref is-tool">
      <span className="lib-ref-who">Rehyn printable</span>
      <span className="lib-ref-sep" aria-hidden="true">—</span>
      <span className="lib-ref-what">{source.name.replace(/^Printable:\s*/i, "")}</span>
      <span className="lib-ref-sep" aria-hidden="true">—</span>
      <span className="lib-ref-note">{source.note}</span>
      <button type="button" className="lib-ref-link" onClick={() => setOpen(true)} aria-haspopup="dialog">Open the printable<DocIcon size={13} /></button>
      {open && <StrokePassport open={open} onClose={() => setOpen(false)} />}
    </li>;
  }
  return <li className="lib-ref">
    <span className="lib-ref-who">{source.name}</span>
    {source.title && <><span className="lib-ref-sep" aria-hidden="true">—</span><span className="lib-ref-what">{source.title}</span></>}
    <span className="lib-ref-sep" aria-hidden="true">—</span>
    <span className="lib-ref-note">{source.note}</span>
    {source.url && <a className="lib-ref-link" href={source.url} target="_blank" rel="noopener noreferrer">{hostOf(source.url)}<ExternalIcon size={12} /><span className="lib-sr"> (opens in a new tab)</span></a>}
  </li>;
}

// ------------------------------------------------------------------------------------------------
// The envelope (placement E), with a flap that lifts gently unless motion is reduced.

export function Envelope({ size = 200, opened = false }: { size?: number; opened?: boolean }) {
  return <svg className={`lib-envelope${opened ? " is-open" : ""}`} width={size} height={size * 0.75} viewBox="0 0 200 150" aria-hidden="true" focusable="false">
    <rect x="10" y="40" width="180" height="100" rx="12" fill="#FFFFFF" stroke="#E8C9BC" strokeWidth="2" />
    <path d="M14 48 100 108 186 48" fill="none" stroke="#E8C9BC" strokeWidth="2" />
    <path className="lib-flap" d="M10 44 100 10 190 44 100 96Z" fill="#D9674A" />
    <rect x="56" y="88" width="88" height="34" rx="6" fill="#FFF8F4" stroke="#E8C9BC" strokeWidth="1.5" />
    <path d="M66 100h68M66 110h48" stroke="#D9A08C" strokeWidth="2" strokeLinecap="round" />
  </svg>;
}

/** The letter card in a filmstrip: dark, with the envelope's call to open it. */
export function LetterCard({ letter, opened }: { letter: LibraryLetter; opened: boolean }) {
  return <Link href={`/letters/${letter.id}`} className="lib-film-card lib-film-letter">
    <span className="lib-film-kicker"><MailIcon />{opened ? "A letter you've read" : "Tonight's letter"}</span>
    <strong>{letter.title}</strong>
    <span className="lib-film-note">{letter.teaser}</span>
    <span className="lib-film-open">{opened ? "Read it again" : "Open the envelope"}<ArrowIcon /></span>
  </Link>;
}

/** A quote card in a filmstrip (placement F). */
export function QuoteCard({ story, href }: { story: LibraryStory; href: string }) {
  return <Link href={href} className="lib-film-card">
    <span className="lib-film-mark" aria-hidden="true">“</span>
    <strong className="lib-film-quote">{story.filmQuote ?? story.quote}</strong>
    <span className="lib-film-who">
      <Initial story={story} size={34} />
      <span><b>{story.name}, {story.age}</b><br />{story.tag} · {story.when}</span>
    </span>
  </Link>;
}

/**
 * The sentences Alira reads for a page, in order. Kept the same array while the words are the same,
 * because a new array starts the reading over.
 */
export function useLines(parts: (string | undefined | null | false)[]) {
  const key = parts.filter(Boolean).join("\u0001");
  return useMemo(() => key.split("\u0001").filter(Boolean).flatMap(part => splitSentences(part)), [key]);
}
