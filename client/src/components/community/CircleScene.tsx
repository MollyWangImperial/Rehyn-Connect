import type { CSSProperties, ReactNode } from "react";
import type { CircleTheme } from "@/content/circle-events";

// The lively scene behind the Sunday circle, matching the day's event: a cinema with sweeping spotlights for film
// night, a lamp-lit library for book club, a floodlit pitch with a bouncing ball for football, and so on. Pure
// decoration (hidden from screen readers), drawn with CSS and small SVGs in community-circle.css. Movement stops
// with reduced motion, leaving the still scene. `mini` is the small version on the feed's circle card.

/** One moving piece: where it starts (% across), its delay and duration (s), size, sway (px) and turn (deg). */
type Bit = { x: number; y?: number; d: number; t: number; s: number; sway: number; spin: number; c?: string };

const vars = (bit: Bit): CSSProperties => ({
  "--x": `${bit.x}%`, "--y": `${bit.y ?? 0}%`, "--d": `${bit.d}s`, "--t": `${bit.t}s`, "--s": bit.s,
  "--sway": `${bit.sway}px`, "--spin": `${bit.spin}deg`, ...(bit.c ? { "--c": bit.c } : {}),
}) as CSSProperties;

/** `count` pieces spread across the width, each with its own timing, the same on every visit. */
function spread(count: number, seed: number, { t = [7, 12], s = [0.75, 1.25], sway = 40, spin = 60, colors = [] as string[], y = [0, 0] } = {}): Bit[] {
  let state = seed * 7919 + 17;
  const rand = () => { state = (state * 9301 + 49297) % 233280; return state / 233280; };
  return Array.from({ length: count }, (_, index) => ({
    x: Math.round(((index + 0.15 + rand() * 0.7) / count) * 94 + 3),
    y: Math.round(y[0] + rand() * (y[1] - y[0])),
    d: +(rand() * t[1]).toFixed(2),
    t: +(t[0] + rand() * (t[1] - t[0])).toFixed(2),
    s: +(s[0] + rand() * (s[1] - s[0])).toFixed(2),
    sway: Math.round((rand() - 0.5) * 2 * sway),
    spin: Math.round((rand() - 0.5) * 2 * spin),
    c: colors.length ? colors[index % colors.length] : undefined,
  }));
}

const pieces = (kind: "rise" | "fall" | "drift" | "twinkle", bits: Bit[], className: string, content?: (index: number) => ReactNode) =>
  bits.map((bit, index) => <span key={`${className}-${index}`} className={`cm-sc-${kind} ${className}`} style={vars(bit)}>{content?.(index)}</span>);

const CONFETTI = ["#E63946", "#F1FAEE", "#FFD166", "#4CC9F0", "#FFFFFF"];
const SPRINKLES = ["#FFD166", "#06D6A0", "#4CC9F0", "#FFFFFF", "#FF8FAB", "#B388FF"];
const FLOWER_COLOURS = ["#FF6B8B", "#FFD166", "#FFFFFF", "#C77DFF", "#FF9F43", "#FF6B8B", "#7AD3FF"];
const PHOTO_SCENES = [
  "linear-gradient(180deg, #7EC8E3 0 55%, #F4D58D 55%)",
  "linear-gradient(180deg, #FF9A76 0 50%, #6A4C93 50%)",
  "linear-gradient(180deg, #A8E6CF 0 45%, #3D8B5F 45%)",
  "radial-gradient(circle at 35% 40%, #FFE29A 0 18%, #E07A5F 19% 100%)",
  "linear-gradient(160deg, #84DCC6 0 50%, #2E86AB 50%)",
  "linear-gradient(180deg, #F7CAD0 0 60%, #B5838D 60%)",
];

/** The library's shelf of books along the bottom: spines of different heights and colours. */
const BOOKS = (() => {
  const colours = ["#8E3B2E", "#C7953B", "#2F5E5A", "#6B4A8E", "#B85C38", "#3E6E8E", "#7A8B3A", "#D2B48C", "#9E2A2B", "#355C7D"];
  const out: { x: number; w: number; h: number; c: string }[] = [];
  let x = 0, step = 3;
  while (x < 1000) {
    step = (step * 7 + 5) % 23;
    const w = 16 + (step % 4) * 6, h = 46 + ((step * 5) % 34);
    out.push({ x, w, h, c: colours[step % colours.length] });
    x += w + 2;
  }
  return out;
})();

function Film() {
  const holes = [0, 72, 144, 216, 288].map(angle => ({ cx: 50 + 27 * Math.cos((angle * Math.PI) / 180), cy: 50 + 27 * Math.sin((angle * Math.PI) / 180) }));
  return (
    <>
      <span className="cm-sc-beam is-a" /><span className="cm-sc-beam is-b" />
      <span className="cm-sc-filmstrip cm-sc-big" />
      <svg className="cm-sc-reel cm-sc-big" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" />
        {holes.map((hole, index) => <circle key={index} cx={hole.cx} cy={hole.cy} r="11" className="cm-sc-reel-hole" />)}
        <circle cx="50" cy="50" r="7" className="cm-sc-reel-hole" />
      </svg>
      <span className="cm-sc-curtain is-left cm-sc-big" /><span className="cm-sc-curtain is-right cm-sc-big" />
      <span className="cm-sc-bulbs" />
      {pieces("rise", spread(9, 3, { t: [6, 11], spin: 120 }), "cm-sc-popcorn")}
    </>
  );
}

function Books() {
  return (
    <>
      <span className="cm-sc-lamp" />
      <svg className="cm-sc-shelf cm-sc-big" viewBox="0 0 1000 90" preserveAspectRatio="none">
        {BOOKS.map(book => <rect key={book.x} x={book.x} y={84 - book.h} width={book.w} height={book.h} rx="2" fill={book.c} />)}
        <rect x="0" y="84" width="1000" height="6" fill="#24140C" />
      </svg>
      {pieces("rise", spread(7, 11, { t: [9, 15], spin: 220, sway: 70 }), "cm-sc-page")}
      {pieces("twinkle", spread(12, 13, { t: [2, 4], y: [6, 70] }), "cm-sc-mote")}
    </>
  );
}

function Football() {
  return (
    <>
      <span className="cm-sc-flood is-left" /><span className="cm-sc-flood is-right" />
      <span className="cm-sc-crowd" />
      <span className="cm-sc-pitch cm-sc-big"><i /></span>
      <span className="cm-sc-ball-x">
        <span className="cm-sc-ball-hop">
          <svg className="cm-sc-ball" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" fill="#FFFFFF" stroke="#1D1D1D" strokeWidth="1.5" />
            <polygon points="20,12 27,17 24.5,25 15.5,25 13,17" fill="#1D1D1D" />
            <path d="M20 2v10M27 17l9-3M24.5 25l6 8M15.5 25l-6 8M13 17l-9-3" stroke="#1D1D1D" strokeWidth="1.5" fill="none" />
          </svg>
        </span>
      </span>
      {pieces("fall", spread(16, 7, { t: [6, 10], spin: 720, sway: 60, colors: CONFETTI }), "cm-sc-confetti")}
    </>
  );
}

function Music() {
  return (
    <>
      <span className="cm-sc-vinyl cm-sc-big"><i /></span>
      <span className="cm-sc-eq">
        {Array.from({ length: 32 }, (_, index) => <i key={index} style={{ "--d": `${((index * 0.37) % 1.4).toFixed(2)}s`, "--t": `${(0.7 + ((index * 7) % 5) * 0.14).toFixed(2)}s` } as CSSProperties} />)}
      </span>
      {pieces("rise", spread(10, 21, { t: [7, 12], spin: 40, sway: 50 }), "cm-sc-note", index => (index % 3 === 0 ? "♫" : "♪"))}
    </>
  );
}

function Quiz() {
  return (
    <>
      <span className="cm-sc-grid" />
      <span className="cm-sc-beam is-a" /><span className="cm-sc-beam is-b" />
      <span className="cm-sc-buzzer cm-sc-big" />
      {pieces("rise", spread(10, 31, { t: [8, 14], spin: 50, sway: 40 }), "cm-sc-qmark", index => (index % 4 === 3 ? "!" : "?"))}
    </>
  );
}

function Travel() {
  return (
    <>
      <span className="cm-sc-sun cm-sc-big"><i /></span>
      {pieces("drift", spread(4, 41, { t: [34, 58], y: [6, 46], s: [0.7, 1.3] }), "cm-sc-cloud")}
      <svg className="cm-sc-trail" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice">
        <path className="cm-sc-trail-line" d="M-60 300 C 200 120, 600 60, 1060 160" />
        <g className="cm-sc-plane">
          <path d="M-14 -9 16 0 -14 9 -8 0z" fill="#FFFFFF" />
          <path d="M-8 0H16" stroke="#C9DEFF" strokeWidth="1.4" />
          <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" path="M-60 300 C 200 120, 600 60, 1060 160" />
        </g>
      </svg>
    </>
  );
}

function Bake() {
  return (
    <>
      <span className="cm-sc-polka" />
      <svg className="cm-sc-cake cm-sc-big" viewBox="0 0 120 130">
        <ellipse cx="60" cy="122" rx="54" ry="7" fill="rgba(255,255,255,.55)" />
        <rect x="18" y="78" width="84" height="40" rx="8" fill="#FFE3EC" />
        <path d="M18 88c8 0 8 9 16 9s8-9 16-9 8 9 16 9 8-9 16-9 8 9 20 9V82a8 8 0 0 0-8-8H26a8 8 0 0 0-8 8z" fill="#FF8FAB" />
        <rect x="30" y="50" width="60" height="30" rx="7" fill="#FFF4D6" />
        <path d="M30 58c6 0 6 7 12 7s6-7 12-7 6 7 12 7 6-7 12-7 6 7 12 7v-9a7 7 0 0 0-7-7H37a7 7 0 0 0-7 7z" fill="#B388FF" />
        <rect x="57" y="30" width="6" height="20" rx="2" fill="#FFFFFF" />
        <path className="cm-sc-flame" d="M60 14c5 6 6 10 3 14a4 4 0 0 1-6 0c-3-4-2-8 3-14z" fill="#FFD166" />
        <circle cx="44" cy="52" r="4" fill="#E63946" /><circle cx="76" cy="52" r="4" fill="#E63946" />
      </svg>
      {pieces("rise", spread(4, 47, { t: [4, 7], sway: 16, spin: 0 }), "cm-sc-steam")}
      {pieces("fall", spread(18, 43, { t: [6, 11], spin: 540, sway: 40, colors: SPRINKLES }), "cm-sc-sprinkle")}
    </>
  );
}

function Garden() {
  const flowers = spread(9, 53, { t: [3, 5], s: [0.8, 1.25], colors: FLOWER_COLOURS });
  return (
    <>
      <span className="cm-sc-sunrays cm-sc-big" />
      <span className="cm-sc-flowers cm-sc-big">
        {flowers.map((flower, index) => (
          <svg key={index} className="cm-sc-flower" viewBox="0 0 40 100" style={vars(flower)}>
            <path d="M20 100V40" stroke="#1E5E2E" strokeWidth="3" />
            <path d="M20 72c-10-2-14-10-12-16 8 1 12 8 12 16z" fill="#3E9B4F" />
            <path d="M20 62c10-2 14-10 12-16-8 1-12 8-12 16z" fill="#4DB35E" />
            {[0, 72, 144, 216, 288].map(angle => <ellipse key={angle} cx="20" cy="22" rx="6" ry="11" transform={`rotate(${angle} 20 32)`} className="cm-sc-petal" />)}
            <circle cx="20" cy="32" r="5.5" fill="#FFC93C" />
          </svg>
        ))}
      </span>
      {pieces("drift", spread(2, 57, { t: [22, 30], y: [18, 44] }), "cm-sc-butterfly-path", () => (
        <span className="cm-sc-butterfly"><i /><i /></span>
      ))}
      {pieces("rise", spread(10, 51, { t: [9, 15], s: [0.5, 1.1], sway: 60 }), "cm-sc-pollen")}
    </>
  );
}

function Comedy() {
  return (
    <>
      <span className="cm-sc-spot cm-sc-big" />
      <span className="cm-sc-curtain is-left cm-sc-big" /><span className="cm-sc-curtain is-right cm-sc-big" />
      <span className="cm-sc-valance" />
      <svg className="cm-sc-mic cm-sc-big" viewBox="0 0 40 130">
        <rect x="12" y="4" width="16" height="28" rx="8" fill="#D9D9D9" stroke="#5A5A5A" strokeWidth="2" />
        <path d="M14 14h12M14 20h12" stroke="#7A7A7A" strokeWidth="1.5" />
        <path d="M20 32v84M8 126h24" stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round" />
      </svg>
      {pieces("rise", spread(9, 61, { t: [6, 10], spin: 30, sway: 50 }), "cm-sc-ha", index => ["Ha!", "Ha ha!", "Hee!", "Ho ho!"][index % 4])}
    </>
  );
}

function Photos() {
  const polaroids = spread(6, 71, { t: [26, 44], y: [4, 62], s: [0.8, 1.2], spin: 14 }).map((bit, index) => ({ ...bit, c: PHOTO_SCENES[index % PHOTO_SCENES.length] }));
  return (
    <>
      <span className="cm-sc-flash" />
      {polaroids.map((bit, index) => (
        <span key={index} className="cm-sc-drift cm-sc-polaroid-path" style={vars(bit)}><i className="cm-sc-polaroid" style={{ "--photo": bit.c } as CSSProperties} /></span>
      ))}
      {pieces("twinkle", spread(14, 73, { t: [2, 4], y: [4, 90] }), "cm-sc-star")}
    </>
  );
}

const SCENES: Record<CircleTheme, () => ReactNode> = {
  film: Film, books: Books, football: Football, music: Music, quiz: Quiz,
  travel: Travel, bake: Bake, garden: Garden, comedy: Comedy, photos: Photos,
};

export default function CircleScene({ theme, mini = false }: { theme: CircleTheme; mini?: boolean }) {
  const Scene = SCENES[theme];
  return (
    <span className={`cm-scene ${mini ? "is-mini" : ""}`} data-theme={theme} aria-hidden="true">
      <Scene />
    </span>
  );
}
