import { useId, type ReactNode } from "react";
import { battleOf, isSunk, shipSquares, shipKind, shotsBy, SIZE, type BattleshipsSave, type ShipId } from "./battleships-rules";
import "@/pages/community-battleships.css";

// The Battleships drawings: the carved ships from the Rehyn Battleships designs (each ship is
// 100 units across for every square it covers), the brass sight, the picture on the game's tile
// in "Start a game", and a small sea for the game strip.

const FINISHES = {
  /** Cream boxwood: the person's own ships. */
  wood: { stops: ["#D9C08F", "#FCF4E2", "#EEDDB8", "#C4A56B"], deck: "#EAD8B0", line: "#3A3122", detail: "#7A6440" },
  /** Green lacquer: the other player's ships, once they are sunk. */
  lacquer: { stops: ["#0B211A", "#2F6A54", "#173F32", "#081A14"], deck: "#163B2F", line: "#06120D", detail: "#E3CC97" },
};
export type ShipFinish = keyof typeof FINISHES;
const OFFSETS = [0, 0.32, 0.6, 1];

/** One ship, across ("h") or down ("v"). It fills the box it is given, which should be its own length by one square. */
export function ShipArt({ id, d = "h", finish = "wood", className = "" }: { id: ShipId; d?: "h" | "v"; finish?: ShipFinish; className?: string }) {
  const gradient = `cm-bs-grain-${useId().replace(/[^A-Za-z0-9_-]/g, "")}`;
  const look = FINISHES[finish];
  const W = shipKind(id).length * 100;
  const body = { fill: `url(#${gradient})`, stroke: look.line, strokeWidth: 3 };
  const deck = { fill: look.deck, stroke: look.line, strokeWidth: 1.5, opacity: 0.9 };
  const line = { fill: "none", stroke: look.detail, strokeWidth: 2.4, strokeLinecap: "round" as const };
  const dot = { fill: look.detail, stroke: "none" };

  const parts: ReactNode[] = [
    <path key="hull" {...body} d={`M8 50 C12 27 38 15 78 15 H${W - 72} C${W - 32} 15 ${W - 10} 32 ${W - 3} 50 C${W - 10} 68 ${W - 32} 85 ${W - 72} 85 H78 C38 85 12 73 8 50 Z`} />,
    <path key="deck" {...deck} d={`M28 50 C31 36 50 29 82 29 H${W - 80} C${W - 50} 29 ${W - 34} 39 ${W - 25} 50 C${W - 34} 61 ${W - 50} 71 ${W - 80} 71 H82 C50 71 31 64 28 50 Z`} />,
  ];
  for (let x = 58; x <= W - 92; x += 22) parts.push(<circle key={`rail-${x}`} {...dot} cx={x} cy={22} r={2.4} />, <circle key={`rail2-${x}`} {...dot} cx={x} cy={78} r={2.4} />);
  const turret = (cx: number, r: number, fore: boolean) => [
    <rect key={`barrel-${cx}`} {...body} x={fore ? cx : cx - r - 24} y={46.5} width={r + 24} height={7} rx={3.5} />,
    <circle key={`turret-${cx}`} {...body} cx={cx} cy={50} r={r} />,
    <circle key={`hatch-${cx}`} {...dot} cx={cx} cy={50} r={Number((r * 0.32).toFixed(1))} />,
  ];
  const bridge = (x: number, w: number) => {
    const out = [<rect key={`bridge-${x}`} {...body} x={x} y={36.5} width={w} height={27} rx={9} />, <rect key={`roof-${x}`} {...deck} x={x + 8} y={43} width={w - 16} height={14} rx={5} />];
    for (let i = x + 15; i < x + w - 10; i += 11) out.push(<circle key={`window-${i}`} {...dot} cx={i} cy={50} r={2} />);
    return out;
  };
  const funnel = (cx: number) => [<ellipse key={`funnel-${cx}`} {...body} cx={cx} cy={50} rx={12} ry={10} />, <ellipse key={`smoke-${cx}`} {...dot} cx={cx} cy={50} rx={6} ry={4.5} />];
  if (id === "carrier") {
    parts.push(
      <path key="runway" {...line} d={`M64 50 H${W - 120}`} strokeDasharray="16 12" />,
      <path key="wires" {...line} d="M70 40 L180 44 M70 60 L180 56" />,
      <rect key="island" {...body} x={300} y={22} width={66} height={17} rx={7} />,
      <circle key="radar" {...body} cx={333} cy={30.5} r={5} />,
      <path key="mast" {...line} d="M333 22 V12" />,
    );
  }
  if (id === "battleship") parts.push(...turret(92, 16, false), ...bridge(140, 92), ...funnel(258), ...turret(318, 16, true));
  if (id === "cruiser") parts.push(...turret(78, 13, false), ...bridge(112, 74), ...turret(222, 13, true));
  if (id === "submarine") {
    parts.push(
      <rect key="tower" {...body} x={118} y={38} width={66} height={24} rx={12} />,
      <path key="periscope" {...line} d="M151 38 V20 H160" />,
      <circle key="hatch-fore" {...dot} cx={82} cy={50} r={5} />,
      <circle key="hatch-aft" {...dot} cx={232} cy={50} r={5} />,
    );
  }
  if (id === "destroyer") parts.push(...bridge(46, 58), ...turret(146, 11, true));

  const art = <g strokeLinejoin="round">{parts}</g>;
  const defs = (
    <defs>
      <linearGradient id={gradient} x1="0" y1="0" x2="0" y2="1">
        {look.stops.map((color, index) => <stop key={color} offset={OFFSETS[index]} stopColor={color} />)}
      </linearGradient>
    </defs>
  );
  return d === "h"
    ? <svg className={`cm-bs-art ${className}`} viewBox={`0 0 ${W} 100`} aria-hidden="true" focusable="false">{defs}{art}</svg>
    : <svg className={`cm-bs-art ${className}`} viewBox={`0 0 100 ${W}`} aria-hidden="true" focusable="false">{defs}<g transform="translate(100 0) rotate(90)">{art}</g></svg>;
}

/** The brass sight that marks where a shot is aimed. */
export function Reticle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        <path d="M8 30 V8 H30 M70 8 H92 V30 M92 70 V92 H70 M30 92 H8 V70" />
        <circle cx="50" cy="50" r="14" strokeWidth="3" />
        <path d="M50 26 V36 M50 64 V74 M26 50 H36 M64 50 H74" strokeWidth="3" />
      </g>
    </svg>
  );
}

/** The picture on Battleships' tile in "Start a game": a corner of the sea, a ship, a hit and a miss. */
export function BattleshipsPicture() {
  return (
    <span className="cm-gp-sea" aria-hidden="true">
      <span className="cm-gp-sea-ship"><ShipArt id="battleship" /></span>
      <i className="is-hit" />
      <i className="is-miss" />
    </span>
  );
}

/**
 * A small sea for the game strip. While the person is placing their ships it shows them; once the
 * battle is on, it shows the other player's waters: the person's hits, misses and the ships sunk.
 */
export function MiniSea({ save }: { save: BattleshipsSave | null }) {
  const marks = new Map<number, string>();
  if (save && !save.ready) save.fleet.forEach(ship => shipSquares(ship).forEach(square => marks.set(square, "is-ship")));
  if (save?.ready) {
    const battle = battleOf(save);
    const fired = new Set(shotsBy(battle, "you"));
    battle.shots.forEach(shot => { if (shot.by === "you") marks.set(shot.at, shot.hit ? "is-hit" : "is-miss"); });
    battle.fleets.them.filter(ship => isSunk(ship, fired)).forEach(ship => shipSquares(ship).forEach(square => marks.set(square, "is-sunk")));
  }
  return (
    <span className="cm-mini-sea" aria-hidden="true">
      {Array.from({ length: SIZE * SIZE }, (_, square) => <span key={square} className={marks.get(square) ?? ((Math.floor(square / SIZE) + square) % 2 ? "is-alt" : "")} />)}
    </span>
  );
}
